var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");
module.exports = function() {
    // 辅材频道首页
    var textTpl = require('template/text-ad.hbs');
    var adposArr = [{
        adId: '107254', // logo标题图
    }, {
        adId: '107187', // 焦点图之一
    }, {
        adId: '107188', // 焦点图之二
    }, {
        adId: '107255', // 焦点图下通栏
    }, {
        adId: '107189', // 右侧第一矩形
    }, {
        adId: '107190', // 右侧第二矩形
    }, {
        adId: '107191', // 右侧小通栏
    }, {
        adId: '107192', // 右侧资讯1号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107193', // 右侧资讯2号文字链
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107194', // 底部第一通栏
    }, {
        adId: '107195', // 底部第二通栏
    }];

    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107185', // 第一通栏轮换1
                adDiv: $("[be-poslv2='MAT_LUNHUAN_1']"),
            });
            break;
        case 's2':
            adposArr.push({
                adId: '107186', // 第一通栏轮换2
                adDiv: $("[be-poslv2='MAT_LUNHUAN_1']"),
            })
            break;
        default:
            adposArr.push({
                adId: '107185', // 第一通栏轮换1
                adDiv: $("[be-poslv2='MAT_LUNHUAN_1']"),
            });
    }
    $$render.renderPage('71', adposArr);
}
