require("../channel/focus-pc");

// 房源列表列表页
Path.map("#/page-resources").to(function() {
    $(".ad-content").html(require("./page-resources.hbs"));
});

Path.root("#/page-resources");
Path.listen();