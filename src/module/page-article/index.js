require('./style.css');
var $$render = require("../../apis/render.js");
var cookie = require("../../apis/cookiesConfig");

module.exports = function() {
    // 1、全国广告位
    var adposArr = [{
        adId: '107047'
    }, {
        adId: '107049'
    }, {
        adId: '107050'
    }, {
        adId: '107051',
        adDiv: $("[be-poslv2='ART_DUILIAN_LEFT']"),
        adTpl: require('./duilian.hbs')
    }, {
        adId: '107051',
        adDiv: $("[be-poslv2='ART_DUILIAN_RIGHT']"),
        adTpl: require('./duilian.hbs')
    }, {
        type: 2,
        adId: [107218, 107219, 107220, 107221, 107222, 107223, 107224, 107225, 107226, 107227, 107228, 107229, 107230, 107231, 107232, 107233, 107234, 107235],
        adDiv: $("[be-poslv2='BE_30']")
    }];

    (function() {
        var rightD = $("[be-poslv2='ART_DUILIAN_RIGHT']");
        var leftD = $("[be-poslv2='ART_DUILIAN_LEFT']");
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

    var rotateState = cookie.getCookie('rotateState');
    switch (rotateState) {
        case 's1':
            adposArr.push({
                adId: '107045',
                adDiv: $("[be-poslv2='ART_LUNHUAN_1']")
            });
            break;
        case 's2':
            adposArr.push({
                adId: '107046',
                adDiv: $("[be-poslv2='ART_LUNHUAN_1']")
            });
            break;
        default:
            adposArr.push({
                adId: '107045',
                adDiv: $("[be-poslv2='ART_LUNHUAN_1']")
            });
            break;
    };
    $$render.renderPage('30', adposArr);
}
