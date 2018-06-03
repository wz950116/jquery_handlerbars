var $$render = require("apis/render.js");
module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107037'
    }, {
        adId: '107038'
    }, {
        adId: '107039'
    }, {
        adId: '107040'
    }];

	$$render.renderPage('82', adposArr);
}
