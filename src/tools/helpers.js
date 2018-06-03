var Handlebars = require('handlebars-template-loader/runtime');

// brand-recommand.hbs
Handlebars.registerHelper('brandRecommand', function (items, options) {
	var out = "", len = Object.keys(items.resource_map).length;
	if (len == 20) {
		for(var i = 1; i <= 10; i++) {
			out += '<li style="float:left;"><a target="_blank" href=' + items.resource_map['url' + i].despriction + ' style="display:block;width:100%;height:100%;"><img src=' + items.resource_map['pic' + i].url + ' style="display:block;width:100%;height:100%;"></a></li>'
		}
	} else if (len == 10) {
		for (var i = 1; i <= 10; i++) {
			out += '<li style="float:left;"><a target="_blank" href=' + items.link + ' style="display:block;width:100%;height:100%;"><img src=' + items.resource_map['pic' + i].url + ' style="display:block;width:100%;height:100%;"></a></li>'
		}
	}
	return out;
});

// card-pc.hbs
Handlebars.registerHelper('cardPosition', function (items, options) {
	var out = "", len = Object.keys(items.resource_map).length, arr = [];
	for (var i = 1; i <= len; i++) {
		out += '<a href=' + items.link + ' class="link-box"><img src=' + items.resource_map['pic_text' + i].url + ' /><span>' + items.resource_map['pic_text' + i].despriction + '</span></a>';
	};
	return out;
});

// card-wap.hbs
Handlebars.registerHelper('cardWap', function (items, options) {
	var out = "", len = Object.keys(items.resource_map).length, arr = [];
	for (var i = 1; i <= len; i++) {
		out += '<a href=' + items.link + ' class="link-box"><img src=' + items.resource_map['pic_text' + i].url + ' /><span>' + items.resource_map['pic_text' + i].despriction + '</span></a>';
	};
	return out;
});


