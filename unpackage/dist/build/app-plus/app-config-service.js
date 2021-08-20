
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/guide/guide","pages/login/login","pages/parent/index","pages/user/index","pages/life/index","pages/shop/index","pages/houseKeeping/index","pages/healthy/index","pages/inquiry/index","pages/myInquiry/index","pages/healthknow/index","pages/registr/registr","pages/shopping/shopping","pages/inquirySuccess/inquirySuccess","pages/inquiryInfo/inquiryInfo","pages/healthknow/knowInfo/knowInfo","pages/registr/hospitalInfo/hospitalInfo","pages/registr/docotor/docotor","pages/registr/registrNumber/registrNumber","pages/pay/pay","pages/shopInfo/shopInfo","pages/confirmPay/confirmPay","pages/cleanInfo/cleanInfo","pages/logon/logon","pages/forgetPass/forgetPass","pages/editPass/editPass","pages/equipMent/equipMent","pages/addParent/addParent","pages/editParent/editParent","pages/allOrders/allOrders","pages/toBeShipped/toBeShipped","pages/receivedGoods/receivedGoods","pages/evaluatedTo/evaluatedTo","pages/volunteer/volunteer","pages/volunteer/activity/activity","pages/user/parentManage/parentManage","pages/user/message/message","pages/user/activitis/activitis","pages/user/userMessage/userMessage","pages/life/supermarket/supermarket"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#409EFF","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/parent/index","iconPath":"static/images/friend.png","selectedIconPath":"static/images/friend-pitch.png","text":"家人"},{"pagePath":"pages/life/index","iconPath":"static/images/Treeofblackfoliage.png","selectedIconPath":"static/images/Treeofblackfoliage-pitch.png","text":"生活服务"},{"pagePath":"pages/shop/index","iconPath":"static/images/supermarket.png","selectedIconPath":"static/images/supermarket-pitch.png","text":"购物车"},{"pagePath":"pages/user/index","iconPath":"static/images/my.png","selectedIconPath":"static/images/user.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"智慧健康","compilerVersion":"3.1.22","entryPagePath":"pages/guide/guide","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/guide/guide","meta":{"isQuit":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/parent/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/user/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/life/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/shop/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/houseKeeping/index","meta":{},"window":{"navigationBarTitleText":"家政清洁","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/healthy/index","meta":{},"window":{"navigationBarTitleText":"健康服务","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/inquiry/index","meta":{},"window":{"navigationBarTitleText":"在线问诊","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/myInquiry/index","meta":{},"window":{"navigationBarTitleText":"我的问诊","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/healthknow/index","meta":{},"window":{"navigationBarTitleText":"健康知识","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/registr/registr","meta":{},"window":{"navigationBarTitleText":"在线挂号","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/shopping/shopping","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/inquirySuccess/inquirySuccess","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/inquiryInfo/inquiryInfo","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/healthknow/knowInfo/knowInfo","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/registr/hospitalInfo/hospitalInfo","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/registr/docotor/docotor","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/registr/registrNumber/registrNumber","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/pay/pay","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/shopInfo/shopInfo","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/confirmPay/confirmPay","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/cleanInfo/cleanInfo","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/logon/logon","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/forgetPass/forgetPass","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/editPass/editPass","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/equipMent/equipMent","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/addParent/addParent","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/editParent/editParent","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/allOrders/allOrders","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/toBeShipped/toBeShipped","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/receivedGoods/receivedGoods","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/evaluatedTo/evaluatedTo","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/volunteer/volunteer","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/volunteer/activity/activity","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/user/parentManage/parentManage","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/user/message/message","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/user/activitis/activitis","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/user/userMessage/userMessage","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/life/supermarket/supermarket","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
