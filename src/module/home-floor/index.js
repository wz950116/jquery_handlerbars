var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");
module.exports = function() {
    // 地板频道首页
    var textTpl = require('template/text-ad.hbs');
    var adposArr = [{
        adId: '107240', // logo标题图
    }, {
        adId: '107110', // 焦点图之一
    }, {
        adId: '107111', // 焦点图之二
    }, {
        adId: '107241', // 焦点图下通栏
    }, {
        adId: '107112', // 右侧第一矩形
    }, {
        adId: '107113', // 右侧第二矩形
    }, {
        adId: '107114', // 右侧小通栏
    }, {
        adId: '107115', // 右侧资讯1号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107116', // 右侧资讯2号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107117', // 底部第一通栏
    }, {
        adId: '107118', // 底部第二通栏
    }];

    // 卫浴频道首页
    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107108', // 第一通栏轮换1
                adDiv: $("[be-poslv2='FLO_LUNHUAN_1']"),
            });
            break;
        case 's2':
            adposArr.push({
                adId: '107109', // 第一通栏轮换2
                adDiv: $("[be-poslv2='FLO_LUNHUAN_1']"),
            })
            break;
        default:
            adposArr.push({
                adId: '107108', // 第一通栏轮换1
                adDiv: $("[be-poslv2='FLO_LUNHUAN_1']"),
            });
    }
    $$render.renderPage('64', adposArr);
}
