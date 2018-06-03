var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");
module.exports = function() {
    // 防水频道首页
    var textTpl = require('template/text-ad.hbs');
    var adposArr = [{
        adId: '107256', // logo标题图
    }, {
        adId: '107198', // 焦点图之一
    }, {
        adId: '107199', // 焦点图之二
    }, {
        adId: '107257', // 焦点图下通栏
    }, {
        adId: '107200', // 右侧第一矩形
    }, {
        adId: '107201', // 右侧第二矩形
    }, {
        adId: '107202', // 右侧小通栏
    }, {
        adId: '107203', // 右侧资讯1号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107204', // 右侧资讯2号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107205', // 底部第一通栏
    }, {
        adId: '107206', // 底部第二通栏
    }];

    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107196', // 第一通栏轮换1
                adDiv: $("[be-poslv2='WAT_LUNHUAN_1']"),
            });
            break;
        case 's2':
            adposArr.push({
                adId: '107197', // 第一通栏轮换2
                adDiv: $("[be-poslv2='WAT_LUNHUAN_1']"),
            })
            break;
        default:
            adposArr.push({
                adId: '107196', // 第一通栏轮换1
                adDiv: $("[be-poslv2='WAT_LUNHUAN_1']"),
            });
    }
    $$render.renderPage('72', adposArr);
}
