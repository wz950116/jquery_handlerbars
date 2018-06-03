var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");
module.exports = function() {
    // 1、全国广告位
    var adposArr = [];

    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107080',
                adDiv: $("[be-poslv2='DIA_LUNHUAN_1']")
            }, {
                adId: '107082',
                adDiv: $("[be-poslv2='DIA_LUNHUAN_2']")
            }, {
                adId: '107084',
                adDiv: $("[be-poslv2='DIA_LUNHUAN_3']")
            });
            $$render.renderPage('61', adposArr);
            break;
        case 's2':
            adposArr.push({
                adId: '107081',
                adDiv: $("[be-poslv2='DIA_LUNHUAN_1']")
            }, {
                adId: '107083',
                adDiv: $("[be-poslv2='DIA_LUNHUAN_2']")
            }, {
                adId: '107085',
                adDiv: $("[be-poslv2='DIA_LUNHUAN_3']")
            });
            $$render.renderPage('61', adposArr);
            break;
        default:
            adposArr.push({
                adId: '107080',
                adDiv: $("[be-poslv2='DIA_LUNHUAN_1']")
            }, {
                adId: '107082',
                adDiv: $("[be-poslv2='DIA_LUNHUAN_2']")
            }, {
                adId: '107084',
                adDiv: $("[be-poslv2='DIA_LUNHUAN_3']")
            });
            $$render.renderPage('61', adposArr);
            break;
    };
}
