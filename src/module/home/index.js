require('./style.css');
var $$render = require("apis/render.js");
var cookie = require("../../apis/cookiesConfig");
module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107236'
    }, {
        adId: '107055'
    }, {
        adId: '107056'
    }, {
        adId: '107057'
    }, {
        adId: '107260',
        adTpl: require('./top-static.hbs')
    }, {
        adId: '107261',
        adDiv: $("[be-poslv2='HOME_DUILIAN_LEFT']"),
        adTpl: require('./duilian.hbs')
    }, {
        adId: '107261',
        adDiv: $("[be-poslv2='HOME_DUILIAN_RIGHT']"),
        adTpl: require('./duilian.hbs')
    }, {
        adId: '107268'
    }, {
        adId: '107269'
    }, {
        adId: '107278',
        adDiv: $("[be-poslv2='BE_FAMOUS1']"),
        adTpl: require('./li-img.hbs')
    }, {
        adId: '107279',
        adDiv: $("[be-poslv2='BE_FAMOUS2']"),
        adTpl: require('./li-img.hbs')
    }, {
        adId: '107280',
        adDiv: $("[be-poslv2='BE_FAMOUS3']"),
        adTpl: require('./li-img.hbs')
    }, {
        adId: '107281',
        adDiv: $("[be-poslv2='BE_FAMOUS4']"),
        adTpl: require('./li-img.hbs')
    }, {
        adId: '107282',
        adDiv: $("[be-poslv2='BE_FAMOUS5']"),
        adTpl: require('./li-img.hbs')
    }, {
        adId: '107283',
        adDiv: $("[be-poslv2='BE_FAMOUS6']"),
        adTpl: require('./li-img.hbs')
    }, {
        adId: '107284',
        adDiv: $("[be-poslv2='BE_FAMOUS7']"),
        adTpl: require('./li-img.hbs')
    }, {
        adId: '107285',
        adDiv: $("[be-poslv2='BE_FAMOUS8']"),
        adTpl: require('./li-img.hbs')
    }, {
        adId: '107286'
    }, {
        adId: '107288'
    }, {
        adId: '107290',
        adTpl: require('./brand-recommand.hbs')
    }, {
        adId: '107291',
        adTpl: require('./brand-recommand.hbs')
    }, {
        adId: '107292',
        adTpl: require('./brand-recommand.hbs')
    }, {
        adId: '107293',
        adTpl: require('./brand-recommand.hbs')
    }, {
        adId: '107294',
        adTpl: require('./brand-recommand.hbs')
    }, {
        adId: '107295',
        adTpl: require('./brand-recommand.hbs')
    }, {
        adId: '107296',
        adTpl: require('./brand-recommand.hbs')
    }, {
        adId: '107297',
        adTpl: require('./brand-recommand.hbs')
    }, {
        adId: '107298'
    }, {
        adId: '107299'
    }, {
        adId: '107301'
    }, {
        adId: '107302',
        adTpl: require('./cards-pc.hbs')
    }, {
        adId: '107311',
        adTpl: require('./img-text.hbs')
    }, {
        adId: '107312',
        adTpl: require('./img-text.hbs')
    }];

    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107270',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_1']")
            }, {
                adId: '107272',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_2']")
            }, {
                adId: '107274',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_3']")
            }, {
                adId: '107276',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_4']")
            }, {
                adId: '107303',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_5']"),
                adTpl: require('./img-text.hbs')
            }, {
                adId: '107305',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_6']"),
                adTpl: require('./img-text.hbs')
            });
            break;
        case 's2':
            adposArr.push({
                adId: '107271',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_1']")
            }, {
                adId: '107273',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_2']")
            }, {
                adId: '107275',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_3']")
            }, {
                adId: '107277',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_4']")
            }, {
                adId: '107304',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_5']"),
                adTpl: require('./img-text.hbs')
            }, {
                adId: '107306',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_6']"),
                adTpl: require('./img-text.hbs')
            });
            break;
        default:
            adposArr.push({
                adId: '107270',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_1']")
            }, {
                adId: '107272',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_2']")
            }, {
                adId: '107274',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_3']")
            }, {
                adId: '107276',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_4']")
            }, {
                adId: '107303',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_5']"),
                adTpl: require('./img-text.hbs')
            }, {
                adId: '107305',
                adDiv: $("[be-poslv2='HOME_LUNHUAN_6']"),
                adTpl: require('./img-text.hbs')
            });
            break;
    };

    $$render.renderPage('74', adposArr);


    // 家居首页静态全屏（全国）
    (function() {
        var time = setTimeout(function() {
            $("[be-poslv2='BE_107260']").slideUp('slow').find('img');
        }, 8000);
    })();

    // 家居首页对联（全国）
    (function() {
        var rightD = $("[be-poslv2='HOME_DUILIAN_RIGHT']");
        var leftD = $("[be-poslv2='HOME_DUILIAN_LEFT']");
        var time = setTimeout(function() {
            rightD.find('.img-big').fadeOut();
            leftD.find('.img-big').fadeOut();
            rightD.on('mouseover', '.img-small', function(event) {
                rightD.find('.img-big').show();
                leftD.find('.img-big').show();
            });
            leftD.on('mouseover', '.img-small', function(event) {
                rightD.find('.img-big').show();
                leftD.find('.img-big').show();
            });
            rightD.on('mouseleave', '.img-big', function(event) {
                rightD.find('.img-big').hide();
                leftD.find('.img-big').hide();
            });
            leftD.on('mouseleave', '.img-big', function(event) {
                rightD.find('.img-big').hide();
                leftD.find('.img-big').hide();
            });
        }, 8000);
        $('body').on('click', '.hide-duilian', function(event) {
            rightD.hide();
            leftD.hide();
        });
    })();

    // 名品汇
    (function() {
        var adA = $('.be-famous').find('a');
        $('.be-famous').on('mouseover', 'li', function(event) {
            var link = $(this).find('img').attr('big-pic-link');
            var url = $(this).find('img').attr('big-pic-url');
            adA.attr('href', link);
            adA.find('img').attr('src', url);
            adA.show();
        });
        $('.be-famous').on('mouseleave', adA, function(event) {
            adA.hide();
        });
    })();


    // 2、分城市广告位
    var cityCode = 'CN' + cookie.getCookie('focus_city_c');
    var adposArr_2 = [{
        adId: '107262'
    }, {
        adId: '107263'
    }, {
        adId: '107264'
    }, {
        adId: '107265'
    }, {
        adId: '107266'
    }, {
        adId: '107267'
    }, {
        adId: '107287'
    }, {
        adId: '107289'
    }, {
        adId: '107300'
    }, {
        adId: '107307',
        adTpl: require('./img-text.hbs')
    }, {
        adId: '107308',
        adTpl: require('./img-text.hbs')
    }, {
        adId: '107309',
        adTpl: require('./img-text.hbs')
    }, {
        adId: '107310',
        adTpl: require('./img-text.hbs')
    }, {
        adId: '107313'
    }, {
        adId: '107314'
    }];

    $$render.renderPage('74', adposArr_2, cityCode);
}
