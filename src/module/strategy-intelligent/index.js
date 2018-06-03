var $$render = require("apis/render.js");
module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107029'
    }, {
        adId: '107030'
    }, {
        adId: '107031'
    }, {
        adId: '107032'
    }];

	$$render.renderPage('80', adposArr);
}
