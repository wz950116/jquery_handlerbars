var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");

module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107069'
    }];

    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107063',
                adDiv: $("[be-poslv2='COM_LUNHUAN_1']")
            }, {
                adId: '107065',
                adDiv: $("[be-poslv2='COM_LUNHUAN_2']")
            }, {
                adId: '107067',
                adDiv: $("[be-poslv2='COM_LUNHUAN_3']")
            });
            $$render.renderPage('58', adposArr);
            break;
        case 's2':
            adposArr.push({
                adId: '107064',
                adDiv: $("[be-poslv2='COM_LUNHUAN_1']")
            }, {
                adId: '107066',
                adDiv: $("[be-poslv2='COM_LUNHUAN_2']")
            }, {
                adId: '107068',
                adDiv: $("[be-poslv2='COM_LUNHUAN_3']")
            });
            $$render.renderPage('58', adposArr);
            break;
        default:
            adposArr.push({
                adId: '107063',
                adDiv: $("[be-poslv2='COM_LUNHUAN_1']")
            }, {
                adId: '107065',
                adDiv: $("[be-poslv2='COM_LUNHUAN_2']")
            }, {
                adId: '107067',
                adDiv: $("[be-poslv2='COM_LUNHUAN_3']")
            });
            $$render.renderPage('58', adposArr);
            break;
    }
}
