var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");

module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107053'
    }, {
        adId: '107054'
    }, {
        adId: '107055'
    }, {
        adId: '107056'
    }, {
        adId: '107057'
    }];

    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107056',
                adDiv: $("[be-poslv2='DES_LUNHUAN_1']")
            });
            $$render.renderPage('56', adposArr);
            break;
        case 's2':
            adposArr.push({
                adId: '107057',
                adDiv: $("[be-poslv2='DES_LUNHUAN_1']")
            });
            $$render.renderPage('56', adposArr);
            break;
        default:
            adposArr.push({
                adId: '107056',
                adDiv: $("[be-poslv2='DES_LUNHUAN_1']")
            });
            $$render.renderPage('56', adposArr);
            break;
    };
}
