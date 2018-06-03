var $$api = require("../../apis/http.js");
var cookie = require("../../apis/cookiesConfig");
const env = require('tools/domain-config').env;

var $$render = require("../../apis/render.js");
module.exports = function() {
	var cityCode = 'CN' + cookie.getCookie('focus_city_c');
    var adposArr = [{
    	type: 2,
        adId: [100250, 100251, 100252, 100253, 100254],
        adDiv: $("[be-poslv2='BE_21']"),
        adTpl: require('./page-resources.hbs')
    }];
    $$render.renderPage('21', adposArr, cityCode, $el => {
    	$el.parent('.module-zixun').hide();
    });

    var adposArr2 = [{
    	type: 2,
        adId: [100266, 100267, 100268, 100269, 100270],
        adDiv: $("[be-poslv2='BE_89']"),
        adTpl: require('./page-resources.hbs')
    }];
    $$render.renderPage('89', adposArr2, cityCode, $el => {
    	$el.parent('.module-zixun').hide();
    });
}