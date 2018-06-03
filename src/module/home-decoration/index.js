var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");
module.exports = function() {
    // 装饰频道首页
    var textTpl = require('template/text-ad.hbs');
    var adposArr = [{
        adId: '107258', // logo标题图
    }, {
        adId: '107209', // 焦点图之一
    }, {
        adId: '107210', // 焦点图之二
    }, {
        adId: '107259', // 焦点图下通栏
    }, {
        adId: '107211', // 右侧第一矩形
    }, {
        adId: '107212', // 右侧第二矩形
    }, {
        adId: '107213', // 右侧小通栏
    }, {
        adId: '107214', // 右侧资讯1号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107215', // 右侧资讯2号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107216', // 底部第一通栏
    }, {
        adId: '107217', // 底部第二通栏
    }];

    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107207', // 第一通栏轮换1
                adDiv: $("[be-poslv2='DEC_LUNHUAN_1']"),
            });
            break;
        case 's2':
            adposArr.push({
                adId: '107208', // 第一通栏轮换2
                adDiv: $("[be-poslv2='DEC_LUNHUAN_1']"),
            })
            break;
        default:
            adposArr.push({
                adId: '107207', // 第一通栏轮换1
                adDiv: $("[be-poslv2='DEC_LUNHUAN_1']"),
            });
    }
    $$render.renderPage('73', adposArr);
}
