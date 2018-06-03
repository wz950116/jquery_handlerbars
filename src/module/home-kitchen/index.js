var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");
module.exports = function() {
    // 厨房频道首页
    var textTpl = require('template/text-ad.hbs');
    var adposArr = [{
        adId: '107242', // logo标题图
    }, {
        adId: '107121', // 焦点图之一
    }, {
        adId: '107122', // 焦点图之二
    }, {
        adId: '107243', // 焦点图下通栏
    }, {
        adId: '107123', // 右侧第一矩形
    }, {
        adId: '107124', // 右侧第二矩形
    }, {
        adId: '107125', // 右侧小通栏
    }, {
        adId: '107126', // 右侧资讯1号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107127', // 右侧资讯2号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107128', // 底部第一通栏
    }, {
        adId: '107129', // 底部第二通栏
    }];

    // 卫浴频道首页
    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107119', // 第一通栏轮换1
                adDiv: $("[be-poslv2='KIT_LUNHUAN_1']"),
            });
            break;
        case 's2':
            adposArr.push({
                adId: '107120', // 第一通栏轮换2
                adDiv: $("[be-poslv2='KIT_LUNHUAN_1']"),
            })
            break;
        default:
            adposArr.push({
                adId: '107119', // 第一通栏轮换1
                adDiv: $("[be-poslv2='KIT_LUNHUAN_1']"),
            });
    }
    $$render.renderPage('65', adposArr);
}
