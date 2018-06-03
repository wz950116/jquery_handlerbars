var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");
module.exports = function() {
    // 家电频道首页
    var textTpl = require('template/text-ad.hbs');
    var adposArr = [{
        adId: '107248', // logo标题图
    }, {
        adId: '107154', // 焦点图之一
    }, {
        adId: '107155', // 焦点图之二
    }, {
        adId: '107249', // 焦点图下通栏
    }, {
        adId: '107156', // 右侧第一矩形
    }, {
        adId: '107157', // 右侧第二矩形
    }, {
        adId: '107158', // 右侧小通栏
    }, {
        adId: '107159', // 右侧资讯1号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107160', // 右侧资讯2号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107161', // 底部第一通栏
    }, {
        adId: '107162', // 底部第二通栏
    }];

    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107152', // 第一通栏轮换1
                adDiv: $("[be-poslv2='APP_LUNHUAN_1']"),
            });
            break;
        case 's2':
            adposArr.push({
                adId: '107153', // 第一通栏轮换2
                adDiv: $("[be-poslv2='APP_LUNHUAN_1']"),
            })
            break;
        default:
            adposArr.push({
                adId: '107152', // 第一通栏轮换1
                adDiv: $("[be-poslv2='APP_LUNHUAN_1']"),
            });
    }
    $$render.renderPage('68', adposArr);
}
