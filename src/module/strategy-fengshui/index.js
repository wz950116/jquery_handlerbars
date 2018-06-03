var $$render = require("../../apis/render.js");
module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107025'
    }, {
        adId: '107026'
    }, {
        adId: '107027'
    }, {
        adId: '107028'
    }];

	$$render.renderPage('79', adposArr);
}
