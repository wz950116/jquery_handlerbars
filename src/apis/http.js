module.exports = function(params, callback) {
    $.ajax({
        type: "get",
        url: params.url,
        dataType: "jsonp",
        data: params.params,
        async: true,
        cache: false,
        success: function(res) {
            callback && callback(res);
        },
        error: function() {
            console.log("error");
        }
    })
}
