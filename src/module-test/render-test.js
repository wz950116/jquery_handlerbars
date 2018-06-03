require("handlebars-template-loader/runtime");
require("../tools/helpers");

//家居首页PC
Path.map("#/home").to(function() {
    $(".ad-content").html(require("./home.hbs"));
});

//攻略装修
Path.map("#/strategy-design").to(function() {
    $(".ad-content").html(require("./strategy-design.hbs"));
});
//攻略硬装
Path.map("#/strategy-hard").to(function() {
    $(".ad-content").html(require("./strategy-hard.hbs"));
});
//攻略软装
Path.map("#/strategy-soft").to(function() {
    $(".ad-content").html(require("./strategy-soft.hbs"));
});
//攻略选材
Path.map("#/strategy-selection").to(function() {
    $(".ad-content").html(require("./strategy-selection.hbs"));
});
//攻略鉴赏
Path.map("#/strategy-appreciation").to(function() {
    $(".ad-content").html(require("./strategy-appreciation.hbs"));
});
//攻略居家
Path.map("#/strategy-home").to(function() {
    $(".ad-content").html(require("./strategy-home.hbs"));
});
//攻略风水
Path.map("#/strategy-fengshui").to(function() {
    $(".ad-content").html(require("./strategy-fengshui.hbs"));
});
//攻略智能
Path.map("#/strategy-intelligent").to(function() {
    $(".ad-content").html(require("./strategy-intelligent.hbs"));
});
//攻略资讯
Path.map("#/strategy-info").to(function() {
    $(".ad-content").html(require("./strategy-info.hbs"));
});
//攻略导购
Path.map("#/strategy-guide").to(function() {
    $(".ad-content").html(require("./strategy-guide.hbs"));
});
//攻略评测
Path.map("#/strategy-evaluation").to(function() {
    $(".ad-content").html(require("./strategy-evaluation.hbs"));
});


// 文章页
Path.map("#/page-article").to(function() {
    $(".ad-content").html(require("./page-article.hbs"));
});
// 设计师列表页
Path.map("#/page-designer").to(function() {
    $(".ad-content").html(require("./page-designer.hbs"));
});
// 设计师列表页
Path.map("#/page-foreman").to(function() {
    $(".ad-content").html(require("./page-foreman.hbs"));
});
// 装修公司列表页
Path.map("#/page-company").to(function() {
    $(".ad-content").html(require("./page-company.hbs"));
});
// 作品列表页
Path.map("#/page-works").to(function() {
    $(".ad-content").html(require("./page-works.hbs"));
});
// 案例列表页
Path.map("#/page-example").to(function() {
    $(".ad-content").html(require("./page-example.hbs"));
});
// 装修日记列表页
Path.map("#/page-diary").to(function() {
    $(".ad-content").html(require("./page-diary.hbs"));
});



// 瓷砖频道首页
Path.map("#/home-tile").to(function() {
    $(".ad-content").html(require("./home-tile.hbs"));
});
// 卫浴频道首页
Path.map("#/home-bathroom").to(function() {
    $(".ad-content").html(require("./home-bathroom.hbs"));
});
// 地板频道首页
Path.map("#/home-floor").to(function() {
    $(".ad-content").html(require("./home-floor.hbs"));
});
// 厨房频道首页
Path.map("#/home-kitchen").to(function() {
    $(".ad-content").html(require("./home-kitchen.hbs"));
});
// 衣柜频道首页
Path.map("#/home-closet").to(function() {
    $(".ad-content").html(require("./home-closet.hbs"));
});
// 家具频道首页
Path.map("#/home-furniture").to(function() {
    $(".ad-content").html(require("./home-furniture.hbs"));
});
// 家电频道首页
Path.map("#/home-appliances").to(function() {
    $(".ad-content").html(require("./home-appliances.hbs"));
});
// 五金频道首页
Path.map("#/home-wujin").to(function() {
    $(".ad-content").html(require("./home-wujin.hbs"));
});
// 墙面频道首页
Path.map("#/home-wall").to(function() {
    $(".ad-content").html(require("./home-wall.hbs"));
});
// 辅材频道首页
Path.map("#/home-materials").to(function() {
    $(".ad-content").html(require("./home-materials.hbs"));
});
// 防水频道首页
Path.map("#/home-waterproof").to(function() {
    $(".ad-content").html(require("./home-waterproof.hbs"));
});
// 装饰频道首页
Path.map("#/home-decoration").to(function() {
    $(".ad-content").html(require("./home-decoration.hbs"));
});

Path.root("#/home");
Path.listen();

if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE|Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))) {
    //家居首页WAP
    $(".ad-content").html(require("./wap.hbs"));
    require("../channel/home-focus-wap");

    $(".menu").hide();
} else {
    var menuHtml = require("./menu.hbs")({
        menuBtn: [{
            url: "#/home",
            pageName: "家居首页"
        }, {
            url: "#/strategy-design",
            pageName: "装修攻略设计"
        }, {
            url: "#/strategy-hard",
            pageName: "装修攻略硬装"
        }, {
            url: "#/strategy-soft",
            pageName: "装修攻略软装"
        }, {
            url: "#/strategy-selection",
            pageName: "装修攻略选材"
        }, {
            url: "#/strategy-appreciation",
            pageName: "装修攻略鉴赏"
        }, {
            url: "#/strategy-home",
            pageName: "装修攻略居家"
        }, {
            url: "#/strategy-fengshui",
            pageName: "装修攻略风水"
        }, {
            url: "#/strategy-intelligent",
            pageName: "装修攻略智能"
        }, {
            url: "#/strategy-info",
            pageName: "装修攻略资讯"
        }, {
            url: "#/strategy-guide",
            pageName: "装修攻略导购"
        }, {
            url: "#/strategy-evaluation",
            pageName: "装修攻略评测"
        }, {
            url: "#/page-article",
            pageName: "文章页"
        }, {
            url: "#/page-designer",
            pageName: "设计师列表页"
        }, {
            url: "#/page-foreman",
            pageName: "工长列表页"
        }, {
            url: "#/page-company",
            pageName: "装修公司列表页"
        }, {
            url: "#/page-works",
            pageName: "作品列表页"
        }, {
            url: "#/page-example",
            pageName: "案例列表页"
        }, {
            url: "#/page-diary",
            pageName: "装修日记列表页"
        }, {
            url: "#/home-tile",
            pageName: "瓷砖频道首页"
        }, {
            url: "#/home-bathroom",
            pageName: "卫浴频道首页"
        }, {
            url: "#/home-floor",
            pageName: "地板频道首页"
        }, {
            url: "#/home-kitchen",
            pageName: "厨房频道首页"
        }, {
            url: "#/home-closet",
            pageName: "衣柜频道首页"
        }, {
            url: "#/home-furniture",
            pageName: "家具频道首页"
        }, {
            url: "#/home-appliances",
            pageName: "家电频道首页"
        }, {
            url: "#/home-wujin",
            pageName: "五金频道首页"
        }, {
            url: "#/home-wall",
            pageName: "墙面频道首页"
        }, {
            url: "#/home-materials",
            pageName: "辅材频道首页"
        }, {
            url: "#/home-waterproof",
            pageName: "防水频道首页"
        }, {
            url: "#/home-decoration",
            pageName: "装饰频道首页"
        }]
    });
    require("../channel/home-focus-pc");
}

$(".menu").html(menuHtml);
$(".menu-btn").click(function() {
    location.reload();
    $(".menu-btn").removeClass("active");
    $(this).addClass("active");
});
