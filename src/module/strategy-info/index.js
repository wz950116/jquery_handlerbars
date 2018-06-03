var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");

module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107033'
    }, {
        adId: '107034'
    }, {
        adId: '107035'
    }, {
        adId: '107036'
    }];

	$$render.renderPage('81', adposArr);


    // 2、分城市广告位
    var cityCode = 'CN' + cookie.getCookie('focus_city_c');
    var adposArr_2 = [{
        type: 3,
        adId: '107315'
    }, {
        type: 3,
        adId: '107316'
    }, {
        type: 3,
        adId: '107317'
    }];
    $$render.renderPage('30', adposArr_2, cityCode, ($el, res) => {
        $el.find('.inner .pic, .inner .artical-info .heading, .inner .artical-info .inner-content').attr('href', res.link);
        $el.find('.inner .pic img').attr('src', res.resource_map.pic.url);
        $el.find('.inner .artical-info .heading').text(res.resource_map.text1.despriction);
        $el.find('.inner .artical-info .inner-content').text(res.resource_map.text2.despriction);
    });
}
