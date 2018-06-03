$('body').on('decorationload', function() {
    adInit();
});

adInit();

function adInit() {
    // 轮换图种coockie
    var cookie = require('../apis/cookiesConfig.js');
    if (!cookie.checkCookie('rotateState')) { // 轮换通栏状态码
        cookie.setCookie('rotateState', 's1', 365);
    } else {
        switch (cookie.getCookie('rotateState')) {
            case 's1':
                cookie.setCookie('rotateState', 's2', 365);
                break;
            case 's2':
                cookie.setCookie('rotateState', 's1', 365);
                break;
        }
    };
    require('../module/wap/index.js')();
}
