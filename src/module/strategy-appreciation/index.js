var $$render = require("../../apis/render.js");
module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107017'
    }, {
        adId: '107018'
    }, {
        adId: '107019'
    }, {
        adId: '107020'
    }];

	$$render.renderPage('77', adposArr);
}
