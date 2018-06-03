var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");
module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107077'
    }, {
        adId: '107078'
    }, {
        adId: '107079'
    }];

    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107075',
                adDiv: $("[be-poslv2='EXA_LUNHUAN_1']")
            });
            break;
        case 's2':
            adposArr.push({
                adId: '107076',
                adDiv: $("[be-poslv2='EXA_LUNHUAN_1']")
            });
            break;
        default:
            adposArr.push({
                adId: '107075',
                adDiv: $("[be-poslv2='EXA_LUNHUAN_1']")
            });
            break;
    };
    $$render.renderPage('60', adposArr);
}
