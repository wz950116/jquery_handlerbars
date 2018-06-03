var $$render = require("apis/render.js");
module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107001'
    }, {
        adId: '107002'
    }, {
        adId: '107003'
    }, {
        adId: '107004'
    }];

	$$render.renderPage('54', adposArr);
}
