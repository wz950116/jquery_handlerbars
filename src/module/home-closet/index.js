var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");
module.exports = function() {
    // 衣柜频道首页
    var textTpl = require('template/text-ad.hbs');
    var adposArr = [{
        adId: '107244', // logo标题图
    }, {
        adId: '107132', // 焦点图之一
    }, {
        adId: '107133', // 焦点图之二
    }, {
        adId: '107245', // 焦点图下通栏
    }, {
        adId: '107134', // 右侧第一矩形
    }, {
        adId: '107135', // 右侧第二矩形
    }, {
        adId: '107136', // 右侧小通栏
    }, {
        adId: '107137', // 右侧资讯1号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107138', // 右侧资讯2号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107139', // 底部第一通栏
    }, {
        adId: '107140', // 底部第二通栏
    }];

    // 卫浴频道首页
    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107130', // 第一通栏轮换1
                adDiv: $("[be-poslv2='CLO_LUNHUAN_1']"),
            });
            break;
        case 's2':
            adposArr.push({
                adId: '107131', // 第一通栏轮换2
                adDiv: $("[be-poslv2='CLO_LUNHUAN_1']"),
            })
            break;
        default:
            adposArr.push({
                adId: '107130', // 第一通栏轮换1
                adDiv: $("[be-poslv2='CLO_LUNHUAN_1']"),
            });
    }
    $$render.renderPage('66', adposArr);
}
