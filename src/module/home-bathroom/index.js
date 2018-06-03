var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");
module.exports = function() {
    var textTpl = require('template/text-ad.hbs');
    var adposArr = [{
        adId: '107238', // logo标题图
    }, {
        adId: '107099', // 焦点图之一
    }, {
        adId: '107100', // 焦点图之二
    }, {
        adId: '107239', // 焦点图下通栏
    }, {
        adId: '107101', // 右侧第一矩形
    }, {
        adId: '107102', // 右侧第二矩形
    }, {
        adId: '107103', // 右侧小通栏
    }, {
        adId: '107104', // 右侧资讯1号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107105', // 右侧资讯2号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107106', // 底部第一通栏
    }, {
        adId: '107107', // 底部第二通栏
    }];

    // 卫浴频道首页
    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107097', // 第一通栏轮换1
                adDiv: $("[be-poslv2='BAT_LUNHUAN_1']"),
            });
            break;
        case 's2':
            adposArr.push({
                adId: '107098', // 第一通栏轮换2
                adDiv: $("[be-poslv2='BAT_LUNHUAN_1']"),
            })
            break;
        default:
            adposArr.push({
                adId: '107097', // 第一通栏轮换1
                adDiv: $("[be-poslv2='BAT_LUNHUAN_1']"),
            });
    }
    $$render.renderPage('63', adposArr);
}
