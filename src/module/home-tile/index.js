var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");
module.exports = function() {
    var textTpl = require('template/text-ad.hbs');
    var adposArr = [{
        adId: '107088'
    }, {
        adId: '107089'
    }, {
        adId: '107237'
    }, {
        adId: '107090'
    }, {
        adId: '107091'
    }, {
        adId: '107092'
    }, {
        adId: '107093',
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107094',
        adTpl: textTpl,
        type: 1
    }, {
        adId: '107095'
    }, {
        adId: '107096'
    }];

    // 瓷砖频道首页
    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107086', // 第一通栏轮换1
                adDiv: $("[be-poslv2='TIL_LUNHUAN_1']"),
            });
            break;
        case 's2':
            adposArr.push({
                adId: '107087', // 第一通栏轮换2
                adDiv: $("[be-poslv2='TIL_LUNHUAN_1']"),
            })
            break;
        default:
            adposArr.push({
                adId: '107086', // 第一通栏轮换1
                adDiv: $("[be-poslv2='TIL_LUNHUAN_1']"),
            });
    }
    $$render.renderPage('62', adposArr);
}
