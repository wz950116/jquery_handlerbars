var $$render = require("../../apis/render.js");
module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107041'
    }, {
        adId: '107042'
    }, {
        adId: '107043'
    }, {
        adId: '107044'
    }];

	$$render.renderPage('83', adposArr);
}
