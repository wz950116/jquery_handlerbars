var _ = require("../../test/lib/underscore.js");
var c = require("./cookiesConfig.js");
const env = require('tools/domain-config').env;
// 发送点击和曝光的请求

var allDom = []; // 当前发送节点列表
var adId = []; // 储存所有已经发送过的广告节点
var list = []; // 存储日志参数的list
module.exports = {
    // 曝光请求
    adLogs: function(list) {
        var data = {};
        data.ads = JSON.stringify(list);
        data.type = 1;
        data.domain = document.domain;
        data.source_agent = 8;
        data.referer_url = window.location.href;
        data.user_suv = c.checkCookie('user_suv') ? c.getCookie('user_suv') : '';
        data.user_yyid = c.checkCookie('user_yyid') ? c.getCookie('user_yyid') : '';
        data.user_ecoid = c.checkCookie('user_ecoid') ? c.getCookie('user_ecoid') : -1;
        $.ajax({
            type: "get",
            url: `//adv-sv-stat.focus${env}.cn/adv/producer/sendLogVersion2`,
            dataType: "json",
            data: data
        });
    },
    // 点击请求
    adLog: function(list) {
        var data = {};
        data.type = 0;
        data.idea_id = list.idea_id;
        data.bid_hash = list.bid_hash;
        data.domain = document.domain;
        data.source_agent = 8;
        data.referer_url = window.location.href;
        data.user_suv = c.checkCookie('user_suv') ? c.getCookie('user_suv') : '';
        data.user_yyid = c.checkCookie('user_yyid') ? c.getCookie('user_yyid') : '';
        data.user_ecoid = c.checkCookie('user_ecoid') ? c.getCookie('user_ecoid') : -1;
        $.ajax({
            type: "get",
            url: `//adv-sv-stat.focus${env}.cn/adv/producer/sendLogVersion2`,
            dataType: "json",
            data: data
        });
    },
    // 曝光事件
    exposure: function($el, data) {
        var self = this;
        if (adId.indexOf(data.ad_pos_id) == -1) {
            adId.push(data.ad_pos_id);
            allDom.push({
                dom: $el,
                data: {
                    'idea_id': data.idea_id,
                    'bid_hash': data.bid_hash || ''
                }
            }); // 该页面所有ad节点
        }
        // 节流
        var throttle = _.throttle(function() {
            allDom.forEach(function(item, index) {
                var a = item.dom.offset().top;
                if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {
                    list.push(item.data);
                    if (list.length == 10) {
                        //发日志请求
                        self.adLogs(list);
                        list = [];
                    }
                    allDom.splice(index, 1);
                }
            });
            // 每8秒自动发送一次
            var time = setInterval(function() {
                if (allDom.length > 0) {
                    if (list.length > 0) {
                        //发日志请求
                        self.adLogs(list);
                        list = [];
                    }
                }
            }, 8000);
            if (allDom.length == 0 && list.length == 0) {
                window.clearInterval(time);
            }
        }, 1000);

        $(window).on('scroll', function(event) {
            throttle();
        });
    },
    // 点击事件
    clickRate: function(logData) {
        var self = this;
        self.adLog(logData);
    }
}
