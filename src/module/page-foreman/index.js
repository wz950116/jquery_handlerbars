var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");
module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107058'
    }, {
        adId: '107059'
    }, {
        adId: '107060'
    }];

    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107061',
                adDiv: $("[be-poslv2='MAN_LUNHUAN_1']")
            });
            break;
        case 's2':
            adposArr.push({
                adId: '107062',
                adDiv: $("[be-poslv2='MAN_LUNHUAN_1']")
            });
            break;
        default:
            adposArr.push({
                adId: '107061',
                adDiv: $("[be-poslv2='MAN_LUNHUAN_1']")
            });
            break;
    };
    $$render.renderPage('57', adposArr);
}
