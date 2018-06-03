var $$render = require("../../apis/render.js");
module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107013'
    }, {
        adId: '107014'
    }, {
        adId: '107015'
    }, {
        adId: '107016'
    }];

	$$render.renderPage('76', adposArr);
}
