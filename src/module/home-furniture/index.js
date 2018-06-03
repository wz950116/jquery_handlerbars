var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");

module.exports = function() {
    // 家具频道首页
    var textTpl = require('template/text-ad.hbs');
    var adposArr = [{
        adId: '107246', // logo标题图
    }, {
        adId: '107143', // 焦点图之一
    }, {
        adId: '107144', // 焦点图之二
    }, {
        adId: '107247', // 焦点图下通栏
    }, {
        adId: '107145', // 右侧第一矩形
    }, {
        adId: '107146', // 右侧第二矩形
    }, {
        adId: '107147', // 右侧小通栏
    }, {
        adId: '107148', // 右侧资讯1号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107149', // 右侧资讯2号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107150', // 底部第一通栏
    }, {
        adId: '107151', // 底部第二通栏
    }];

    // 卫浴频道首页
    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107141', // 第一通栏轮换1
                adDiv: $("[be-poslv2='FUR_LUNHUAN_1']"),
            });
            break;
        case 's2':
            adposArr.push({
                adId: '107142', // 第一通栏轮换2
                adDiv: $("[be-poslv2='FUR_LUNHUAN_1']"),
            })
            break;
        default:
            adposArr.push({
                adId: '107141', // 第一通栏轮换1
                adDiv: $("[be-poslv2='FUR_LUNHUAN_1']"),
            });
    }
    $$render.renderPage('67', adposArr);
}
