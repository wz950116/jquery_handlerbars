var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");
module.exports = function() {
    // 墙面频道首页
    var textTpl = require('template/text-ad.hbs');
    var adposArr = [{
        adId: '107252', // logo标题图
    }, {
        adId: '107176', // 焦点图之一
    }, {
        adId: '107177', // 焦点图之二
    }, {
        adId: '107253', // 焦点图下通栏
    }, {
        adId: '107178', // 右侧第一矩形
    }, {
        adId: '107179', // 右侧第二矩形
    }, {
        adId: '107180', // 右侧小通栏
    }, {
        adId: '107181', // 右侧资讯1号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107182', // 右侧资讯2号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107183', // 底部第一通栏
    }, {
        adId: '107184', // 底部第二通栏
    }];

    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107174', // 第一通栏轮换1
                adDiv: $("[be-poslv2='WAL_LUNHUAN_1']"),
            });
            break;
        case 's2':
            adposArr.push({
                adId: '107175', // 第一通栏轮换2
                adDiv: $("[be-poslv2='WAL_LUNHUAN_1']"),
            })
            break;
        default:
            adposArr.push({
                adId: '107174', // 第一通栏轮换1
                adDiv: $("[be-poslv2='WAL_LUNHUAN_1']"),
            });
    }
    $$render.renderPage('70', adposArr);
}
