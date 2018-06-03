var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");

module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '108001'
    }, {
        adId: '108002'
    }, {
        adId: '108003',
        adTpl: require('./wap-banner.hbs')
    }, {
        adId: '108004',
        adTpl: require('template/img_text-ad.hbs')
    }, {
        adId: '108007',
        adTpl: require('./cards-wap.hbs') 
    }, {
        adId: '108016',
        adTpl: require('./img-text.hbs') 
    }, {
        adId: '108017',
        adTpl: require('./img-text.hbs') 
    }];

    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '108005',
                adDiv: $("[be-poslv2='WAP_LUNHUAN1']"),
                adTpl: require('./img-text.hbs')
            }, {
                adId: '108008',
                adDiv: $("[be-poslv2='WAP_LUNHUAN2']"),
                adTpl: require('./img-text.hbs')
            });
            $$render.renderPage('53', adposArr);
            break;
        case 's2':
            adposArr.push({
                adId: '108006',
                adDiv: $("[be-poslv2='WAP_LUNHUAN1']"),
                adTpl: require('./img-text.hbs')
            }, {
                adId: '108009',
                adDiv: $("[be-poslv2='WAP_LUNHUAN2']"),
                adTpl: require('./img-text.hbs')
            });
            $$render.renderPage('53', adposArr);
            break;
        default:
            adposArr.push({
                adId: '108005',
                adDiv: $("[be-poslv2='WAP_LUNHUAN1']"),
                adTpl: require('./img-text.hbs')
            }, {
                adId: '108008',
                adDiv: $("[be-poslv2='WAP_LUNHUAN2']"),
                adTpl: require('./img-text.hbs')
            });
            $$render.renderPage('53', adposArr);
            break;
    };


    // 2、分城市广告位
    var cityCode = 'CN' + cookie.getCookie('focus_city_c');
    var adposArr_2 = [{
        adId: '108010'
    }, {
        adId: '108011'
    }, {
        adId: '108012',
        adTpl: require('./img-text.hbs')
    }, {
        adId: '108013',
        adTpl: require('./img-text.hbs')
    }, {
        adId: '108014',
        adTpl: require('./img-text.hbs')
    }, {
        adId: '108015',
        adTpl: require('./img-text.hbs')
    }];
    $$render.renderPage('53', adposArr_2, cityCode, ($el, res) => {
        $el.find('.inner .pic, .inner .artical-info .heading, .inner .artical-info .inner-content').attr('href', res.link);
        $el.find('.inner .pic img').attr('src', res.resource_map.pic.url);
        $el.find('.inner .artical-info .heading').text(res.resource_map.text1.despriction);
        $el.find('.inner .artical-info .inner-content').text(res.resource_map.text2.despriction);
    });
}
