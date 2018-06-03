var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");
module.exports = function() {
    // 五金频道首页
    var textTpl = require('template/text-ad.hbs');
    var adposArr = [{
        adId: '107250', // logo标题图
    }, {
        adId: '107165', // 焦点图之一
    }, {
        adId: '107166', // 焦点图之二
    }, {
        adId: '107251', // 焦点图下通栏
    }, {
        adId: '107167', // 右侧第一矩形
    }, {
        adId: '107168', // 右侧第二矩形
    }, {
        adId: '107169', // 右侧小通栏
    }, {
        adId: '107170', // 右侧资讯1号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107171', // 右侧资讯2号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107172', // 底部第一通栏
    }, {
        adId: '107173', // 底部第二通栏
    }];

    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107163', // 第一通栏轮换1
                adDiv: $("[be-poslv2='WUJ_LUNHUAN_1']"),
            });
            break;
        case 's2':
            adposArr.push({
                adId: '107164', // 第一通栏轮换2
                adDiv: $("[be-poslv2='WUJ_LUNHUAN_1']"),
            })
            break;
        default:
            adposArr.push({
                adId: '107163', // 第一通栏轮换1
                adDiv: $("[be-poslv2='WUJ_LUNHUAN_1']"),
            });
    }
    $$render.renderPage('69', adposArr);
}
