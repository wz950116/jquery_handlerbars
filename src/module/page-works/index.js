var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");
module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107072'
    }, {
        adId: '107073'
    }, {
        adId: '107074'
    }];

    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107070',
                adDiv: $("[be-poslv2='WOR_LUNHUAN_1']")
            });
            $$render.renderPage('59', adposArr);
            break;
        case 's2':
            adposArr.push({
                adId: '107071',
                adDiv: $("[be-poslv2='WOR_LUNHUAN_1']")
            });
            $$render.renderPage('59', adposArr);
            break;
        default:
            adposArr.push({
                adId: '107070',
                adDiv: $("[be-poslv2='WOR_LUNHUAN_1']")
            });
            $$render.renderPage('59', adposArr);
            break;
    };
}
