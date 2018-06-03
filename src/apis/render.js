require("handlebars-template-loader/runtime");
require("../tools/helpers");
const env = require('tools/domain-config').env;
var requestUrl = `//adv-sv-show.focus${env}.cn/focus_say`;
var $$api = require("./http.js");
var sendLog = require("./adLog.js");

//重新设计render函数
module.exports = {
    // adposArr中type字段：0 图片（默认），1 文字链，2 多图，3 单独渲染子节点 ...
    renderPage: function(adposId, adposArr, cityCode = 'CN513200', fn) {
        $$api({
            url: requestUrl,
            params: {
                cityCode: cityCode,
                adposId: adposId
            }
        }, function(res) {
            if (res.code == 200) {
                var adData = res.data.ad_map; // 该页面所有广告位数据
                var len = Object.keys(adData).length;
                adposArr.forEach(function(adItem) { // 遍历广告位数组
                    var id = adItem.adId;
                    var $el = adItem.adDiv ? adItem.adDiv : $("[be-poslv2='BE_" + id + "']");
                    var tpl = adItem.adTpl ? adItem.adTpl : require('template/img-ad.hbs');
                    var type = adItem.type;
                    if (len > 0) { // 如果该广告位有数据
                        if ($el.attr('be_render') != 'complete' && $el.length > 0) { // 有节点并且还没渲染过
                            switch (type) {
                                case 1:
                                    if (id in adData) {
                                        $el.html(tpl({
                                            adLink: adData[id].link,
                                            adText: adData[id].resource_map.text.despriction
                                        }));
                                        $el.show();
                                    }
                                    break;
                                case 2:
                                    $el.empty();  // 清空初始打底
                                    id.forEach((item, index) => {
                                        if (item in adData) {
                                           $el.append(tpl({
                                                adLink: adData[item].link,
                                                imageUrl: adData[item].resource_map
                                            }));

                                            var logData = {};
                                            logData.idea_id = adData[item].idea_id;
                                            logData.ad_pos_id = adData[item].ad_pos_id;
                                            logData.bid_hash = adData[item].bid_hash;  // CPM有值
                                            // 曝光统计
                                            sendLog.exposure($el.find('a').eq(index), logData);
                                            // 点击统计
                                            $el.find('li').eq(index).on('click', function() {
                                                sendLog.clickRate(logData);
                                            }); 
                                        }
                                    });
                                    $el.show();
                                    break;
                                case 3:
                                    if (id in adData) {
                                        fn && fn($el, adData[id]);
                                        $el.show();
                                    }
                                    break;
                                default:
                                    if (id in adData) {
                                        $el.html(tpl({
                                            adLink: adData[id].link,
                                            imageUrl: adData[id].resource_map,
                                            allUrl: adData[id]
                                        }));
                                        if (id < 107290 || id > 107297) {
                                            $el.show();
                                        }
                                    }
                                    break;
                            }

                            $el.attr('be_render', 'complete');
                            if ((id >= 107262 && id <= 107267) || (id >= 107270 && id <= 107275)) {
                                // 如有数据则显示class = "ad-group2-v2"
                                $el.parents('.ad-group2-v2').show();
                            }
                        }
                    } else {
                        fn && fn($el);
                        $el.attr('be_render', 'nodata');
                    }
                    // 统计
                    if ($el.attr('be_render') == 'complete' && !(id instanceof Array) && id in adData) {
                        var logData = {};
                        logData.idea_id = adData[id].idea_id;
                        logData.ad_pos_id = adData[id].ad_pos_id;
                        logData.bid_hash = adData[id].bid_hash;  // CPM有值
                        // 曝光统计
                        sendLog.exposure($el, logData);
                        // 点击统计
                        $el.on('click', function() {
                            sendLog.clickRate(logData);
                        });
                    }
                });
            }
        });
    }
}
