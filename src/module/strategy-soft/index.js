var $$render = require("../../apis/render.js");
module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107009'
    }, {
        adId: '107010'
    }, {
        adId: '107011'
    }, {
        adId: '107012'
    }];

	$$render.renderPage('75', adposArr);
}
