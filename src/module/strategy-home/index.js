var $$render = require("apis/render.js");
module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107021'
    }, {
        adId: '107022'
    }, {
        adId: '107023'
    }, {
        adId: '107024'
    }];

	$$render.renderPage('78', adposArr);
}
