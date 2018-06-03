var $$render = require("../../apis/render.js");
module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107005'
    }, {
        adId: '107006'
    }, {
        adId: '107007'
    }, {
        adId: '107008'
    }];

	$$render.renderPage('55', adposArr);
}
