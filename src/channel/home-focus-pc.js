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
    }
    
    // 根据pageId引入不同的页面广告位
    var pageId = adsInfo_v2.pageId;
    switch (pageId) {
        case 74:
            // 家居首页
            require('../module/home/index.js')();
            break;
        case 54:
            // 攻略装修
            require('../module/strategy-design/index.js')();
            break;
        case 55:
            // 攻略硬装
            require('../module/strategy-hard/index.js')();
            break;
        case 75:
            // 攻略软装
            require('../module/strategy-soft/index.js')();
            break;
        case 76:
            // 攻略选材
            require('../module/strategy-selection/index.js')();
            break;
        case 77:
            // 攻略鉴赏
            require('../module/strategy-appreciation/index.js')();
            break;
        case 78:
            // 攻略居家
            require('../module/strategy-home/index.js')();
            break;
        case 79:
            // 攻略风水
            require('../module/strategy-fengshui/index.js')();
            break;
        case 80:
            // 攻略智能
            require('../module/strategy-intelligent/index.js')();
            break;
        case 81:
            // 攻略资讯
            require('../module/strategy-info/index.js')();
            break;
        case 82:
            // 攻略导购
            require('../module/strategy-guide/index.js')();
            break;
        case 83:
            // 攻略评测
            require('../module/strategy-evaluation/index.js')();
            break;
        case 30:
            // 文章页
            require('../module/page-article/index.js')();
            break;
        case 56:
            // 设计师列表页
            require('../module/page-designer/index.js')();
            break;
        case 57:
            // 工长列表页
            require('../module/page-foreman/index.js')();
            break;
        case 58:
            // 装修公司列表页
            require('../module/page-company/index.js')();
            break;
        case 59:
            // 作品列表页
            require('../module/page-works/index.js')();
            break;
        case 60:
            // 案例列表页
            require('../module/page-example/index.js')();
            break;
        case 61:
            // 装修日记列表页
            require('../module/page-diary/index.js')();
            break;
        case 62:
            // 瓷砖频道首页
            require('../module/home-tile/index.js')();
            break;
        case 63:
            // 卫浴频道首页
            require('../module/home-bathroom/index.js')();
            break;
        case 64:
            // 地板频道首页
            require('../module/home-floor/index.js')();
            break;
        case 65:
            // 厨房频道首页
            require('../module/home-kitchen/index.js')();
            break;
        case 66:
            // 衣柜频道首页
            require('../module/home-closet/index.js')();
            break;
        case 67:
            // 家具频道首页
            require('../module/home-furniture/index.js')();
            break;
        case 68:
            // 家电频道首页
            require('../module/home-appliances/index.js')();
            break;
        case 69:
            // 五金频道首页
            require('../module/home-wujin/index.js')();
            break;
        case 70:
            // 墙面频道首页
            require('../module/home-wall/index.js')();
            break;
        case 71:
            // 辅材频道首页
            require('../module/home-materials/index.js')();
            break;
        case 72:
            // 防水频道首页
            require('../module/home-waterproof/index.js')();
            break;
        case 73:
            // 装饰频道首页
            require('../module/home-decoration/index.js')();
            break;
    }
}
