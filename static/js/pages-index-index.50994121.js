(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"07dd":function(e,t,i){"use strict";var n=i("ad4d"),r=i.n(n);r.a},"092a":function(e,t,i){"use strict";i("4160"),i("a9e3"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"UniGrid",props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#e5e5e5"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var e="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:e,width:0}},created:function(){this.children=[]},mounted:function(){this.init()},methods:{init:function(){var e=this;setTimeout((function(){e._getSize((function(t){e.children.forEach((function(e,i){e.width=t}))}))}),50)},change:function(e){this.$emit("change",e)},_getSize:function(e){var t=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(i){t.width=parseInt((i[0].width-1)/t.column)+"px",e(t.width)}))}}};t.default=n},"0f8d":function(e,t,i){"use strict";var n,r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.width?i("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+e.width+";"+(e.square?"height:"+e.width:"")},[i("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":e.showBorder,"uni-grid-item--border-top":e.showBorder&&e.index<e.column,"uni-highlight":e.highlight},style:{"border-right-color":e.borderColor,"border-bottom-color":e.borderColor,"border-top-color":e.borderColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._onClick.apply(void 0,arguments)}}},[e._t("default")],2)],1):e._e()},o=[];i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},"112d":function(e,t,i){"use strict";var n={uniGrid:i("6634").default,uniGridItem:i("6d03").default,jhxProductList:i("17c0").default},r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"page-section swiper"},[i("v-uni-view",{staticClass:"page-section-spacing"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{autoplay:!0}},e._l(e.banner,(function(e){return i("v-uni-swiper-item",[i("v-uni-image",{staticClass:"swiper-item uni-bg-red",attrs:{mode:"widthFix",src:e.cover}})],1)})),1)],1)],1)],1),i("uni-grid",{staticClass:"nav-box bgfff",attrs:{column:4,"show-border":!1,square:!1}},e._l(e.nav,(function(t){return i("uni-grid-item",[i("v-uni-image",{staticClass:"nav",attrs:{mode:"widthFix",src:t.icon}}),i("v-uni-text",{staticClass:"text"},[e._v(e._s(t.label))])],1)})),1),i("v-uni-view",{staticClass:"title"},[e._v("推荐课程")]),i("jhx-product-list",{attrs:{productList:e.productList,column:2}}),e._l(e.productCate,(function(t){return i("v-uni-view",{staticClass:"cate-box"},[i("v-uni-view",{staticClass:"title"},[e._v(e._s(t[0]?t[0].cate.title:""))]),i("jhx-product-list",{attrs:{productList:t,column:1}})],1)}))],2)},o=[];i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},"122a":function(e,t,i){"use strict";var n,r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-grid-wrap"},[i("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":e.showBorder},style:{"border-left-style":"solid","border-left-color":e.borderColor,"border-left-width":e.showBorder?"1px":0},attrs:{id:e.elId}},[e._t("default")],2)],1)},o=[];i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},1558:function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"JhxProductList",props:{productList:Array,column:Number},data:function(){return{col:"col-"+this.column}},created:function(){},beforeDestroy:function(){},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})},toDetail:function(e){console.log(e);var t=e.currentTarget.dataset.id;uni.navigateTo({url:"/pages/product/detail?id="+t})}}};t.default=n},"17c0":function(e,t,i){"use strict";i.r(t);var n=i("9e25"),r=i("4ae8");for(var o in r)"default"!==o&&function(e){i.d(t,e,(function(){return r[e]}))}(o);i("07dd");var a,c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"311b436f",null,!1,n["a"],a);t["default"]=s.exports},"2a3a":function(e,t,i){"use strict";var n=i("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.Product=void 0;var r=n(i("276c")),o=n(i("e954")),a=n(i("92a6")),c=n(i("920b")),s=i("f1a4"),d=function(e){(0,c.default)(i,e);var t=(0,a.default)(i);function i(){return(0,r.default)(this,i),t.call(this)}return(0,o.default)(i,[{key:"lists",value:function(e,t){var i=e.num?e.num:12,n={url:"product/product/index?num="+i,data:e,method:"get",sCallback:function(e){t&&t(e)}};this.request(n)}},{key:"indexCate",value:function(e,t){var i={url:"product/product/index-cate",data:e,method:"get",sCallback:function(e){t&&t(e)}};this.request(i)}},{key:"view",value:function(e,t){var i={url:"product/product/view",data:e,method:"get",sCallback:function(e){t&&t(e)}};this.request(i)}},{key:"content",value:function(e,t){var i={url:"product/product-content/index",data:e,method:"get",sCallback:function(e){t&&t(e)}};this.request(i)}}]),i}(s.Base);t.Product=d},3108:function(e,t,i){"use strict";var n=i("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.System=void 0;var r=n(i("276c")),o=n(i("e954")),a=n(i("92a6")),c=n(i("920b")),s=i("f1a4"),d=function(e){(0,c.default)(i,e);var t=(0,a.default)(i);function i(){return(0,r.default)(this,i),t.call(this)}return(0,o.default)(i,[{key:"getNav",value:function(e,t){e.num&&e.num;var i={url:"common/nav/item-list",data:e,method:"post",sCallback:function(e){t&&t(e)}};this.request(i)}}]),i}(s.Base);t.System=d},"3c9f":function(e,t,i){"use strict";var n=i("6149"),r=i.n(n);r.a},"3f22":function(e,t,i){var n;i("c975"),i("ac1f"),i("466d"),i("5319"),i("1276");var r=i("5757");!function(r,o){n=function(){return o(r)}.call(t,i,t,e),void 0===n||(e.exports=n)}(window,(function(e,t){if(!e.jWeixin){var i,n,o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},a=function(){var e={};for(var t in o)e[o[t]]=t;return e}(),c=e.document,s=c.title,d=navigator.userAgent.toLowerCase(),u=navigator.platform.toLowerCase(),l=!(!u.match("mac")&&!u.match("win")),f=-1!=d.indexOf("wxdebugger"),p=-1!=d.indexOf("micromessenger"),g=-1!=d.indexOf("android"),h=-1!=d.indexOf("iphone")||-1!=d.indexOf("ipad"),v=(n=d.match(/micromessenger\/(\d+\.\d+\.\d+)/)||d.match(/micromessenger\/(\d+\.\d+)/))?n[1]:"",m={initStartTime:L(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},b={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:h?1:g?2:-1,clientVersion:v,url:encodeURIComponent(location.href)},w={},y={_completes:[]},x={state:0,data:{}};E((function(){m.initEndTime=L()}));var _=!1,k=[],S=(i={config:function(t){V("config",w=t);var i=!1!==w.check;E((function(){if(i)T(o.config,{verifyJsApiList:A(w.jsApiList),verifyOpenTagList:A(w.openTagList)},function(){y._complete=function(e){m.preVerifyEndTime=L(),x.state=1,x.data=e},y.success=function(e){b.isPreVerifyOk=0},y.fail=function(e){y._fail?y._fail(e):x.state=-1};var e=y._completes;return e.push((function(){!function(){if(!(l||f||w.debug||v<"6.0.2"||b.systemType<0)){var e=new Image;b.appId=w.appId,b.initTime=m.initEndTime-m.initStartTime,b.preVerifyTime=m.preVerifyEndTime-m.preVerifyStartTime,S.getNetworkType({isInnerInvoke:!0,success:function(t){b.networkType=t.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+b.version+"&o="+b.isPreVerifyOk+"&s="+b.systemType+"&c="+b.clientVersion+"&a="+b.appId+"&n="+b.networkType+"&i="+b.initTime+"&p="+b.preVerifyTime+"&u="+b.url;e.src=i}})}}()})),y.complete=function(t){for(var i=0,n=e.length;i<n;++i)e[i]();y._completes=[]},y}()),m.preVerifyStartTime=L();else{x.state=1;for(var e=y._completes,t=0,n=e.length;t<n;++t)e[t]();y._completes=[]}})),S.invoke||(S.invoke=function(t,i,n){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,P(i),n)},S.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})},ready:function(e){0!=x.state?e():(y._completes.push(e),!p&&w.debug&&e())},error:function(e){v<"6.0.2"||(-1==x.state?e(x.data):y._fail=e)},checkJsApi:function(e){T("checkJsApi",{jsApiList:A(e.jsApiList)},(e._complete=function(e){if(g){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var i in t){var n=a[i];n&&(t[n]=t[i],delete t[i])}return e}(e)},e))},onMenuShareTimeline:function(e){M(o.onMenuShareTimeline,{complete:function(){T("shareTimeline",{title:e.title||s,desc:e.title||s,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){M(o.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?T("sendAppMessage",{title:e.title||s,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):T("sendAppMessage",{title:e.title||s,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){M(o.onMenuShareQQ,{complete:function(){T("shareQQ",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){M(o.onMenuShareWeibo,{complete:function(){T("shareWeiboApp",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){M(o.onMenuShareQZone,{complete:function(){T("shareQZone",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){T("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){T("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){T("startRecord",{},e)},stopRecord:function(e){T("stopRecord",{},e)},onVoiceRecordEnd:function(e){M("onVoiceRecordEnd",e)},playVoice:function(e){T("playVoice",{localId:e.localId},e)},pauseVoice:function(e){T("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){T("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){M("onVoicePlayEnd",e)},uploadVoice:function(e){T("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){T("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){T("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){T("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(g){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){T(o.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){T("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){T("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===_?(_=!0,T("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(_=!1,0<k.length){var t=k.shift();wx.getLocalImgData(t)}},e))):k.push(e)},getNetworkType:function(e){T("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var n=t.indexOf(":"),r=t.substring(n+1);switch(r){case"wifi":case"edge":case"wwan":e.networkType=r;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){T("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},r(i,"getLocation",(function(e){T(o.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),r(i,"hideOptionMenu",(function(e){T("hideOptionMenu",{},e)})),r(i,"showOptionMenu",(function(e){T("showOptionMenu",{},e)})),r(i,"closeWindow",(function(e){T("closeWindow",{},e=e||{})})),r(i,"hideMenuItems",(function(e){T("hideMenuItems",{menuList:e.menuList},e)})),r(i,"showMenuItems",(function(e){T("showMenuItems",{menuList:e.menuList},e)})),r(i,"hideAllNonBaseMenuItem",(function(e){T("hideAllNonBaseMenuItem",{},e)})),r(i,"showAllNonBaseMenuItem",(function(e){T("showAllNonBaseMenuItem",{},e)})),r(i,"scanQRCode",(function(e){T("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(h){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))})),r(i,"openAddress",(function(e){T(o.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),r(i,"openProductSpecificView",(function(e){T(o.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),r(i,"addCard",(function(e){for(var t=e.cardList,i=[],n=0,r=t.length;n<r;++n){var a=t[n],c={card_id:a.cardId,card_ext:a.cardExt};i.push(c)}T(o.addCard,{card_list:i},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,n=(t=JSON.parse(t)).length;i<n;++i){var r=t[i];r.cardId=r.card_id,r.cardExt=r.card_ext,r.isSuccess=!!r.is_succ,delete r.card_id,delete r.card_ext,delete r.is_succ}e.cardList=t,delete e.card_list}},e))})),r(i,"chooseCard",(function(e){T("chooseCard",{app_id:w.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),r(i,"openCard",(function(e){for(var t=e.cardList,i=[],n=0,r=t.length;n<r;++n){var a=t[n],c={card_id:a.cardId,code:a.code};i.push(c)}T(o.openCard,{card_list:i},e)})),r(i,"consumeAndShareCard",(function(e){T(o.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),r(i,"chooseWXPay",(function(e){T(o.chooseWXPay,O(e),e)})),r(i,"openEnterpriseRedPacket",(function(e){T(o.openEnterpriseRedPacket,O(e),e)})),r(i,"startSearchBeacons",(function(e){T(o.startSearchBeacons,{ticket:e.ticket},e)})),r(i,"stopSearchBeacons",(function(e){T(o.stopSearchBeacons,{},e)})),r(i,"onSearchBeacons",(function(e){M(o.onSearchBeacons,e)})),r(i,"openEnterpriseChat",(function(e){T("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),r(i,"launchMiniProgram",(function(e){T("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}(e.path),envVersion:e.envVersion},e)})),r(i,"openBusinessView",(function(e){T("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(g){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(t){e.extraData={}}}},e))})),r(i,"miniProgram",{navigateBack:function(e){e=e||{},E((function(){T("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){E((function(){T("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){E((function(){T("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){E((function(){T("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){E((function(){T("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){E((function(){T("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){E((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),i),I=1,C={};return c.addEventListener("error",(function(e){if(!g){var t=e.target,i=t.tagName,n=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=n.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var r=t["wx-id"];if(r||(r=I++,t["wx-id"]=r),C[r])return;C[r]=!0,wx.ready((function(){wx.getLocalImgData({localId:n,success:function(e){t.src=e.localData}})}))}}}),!0),c.addEventListener("load",(function(e){if(!g){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var n=t["wx-id"];n&&(C[n]=!1)}}}),!0),t&&(e.wx=e.jWeixin=S),S}function T(t,i,n){e.WeixinJSBridge?WeixinJSBridge.invoke(t,P(i),(function(e){B(t,e,n)})):V(t,n)}function M(t,i,n){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){n&&n.trigger&&n.trigger(e),B(t,e,i)})):V(t,n||i)}function P(e){return(e=e||{}).appId=w.appId,e.verifyAppId=w.appId,e.verifySignType="sha1",e.verifyTimestamp=w.timestamp+"",e.verifyNonceStr=w.nonceStr,e.verifySignature=w.signature,e}function O(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function B(e,t,i){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var n=t.errMsg;n||(n=t.err_msg,delete t.err_msg,n=function(e,t){var i=e,n=a[i];n&&(i=n);var r="ok";if(t){var o=t.indexOf(":");"confirm"==(r=t.substring(o+1))&&(r="ok"),"failed"==r&&(r="fail"),-1!=r.indexOf("failed_")&&(r=r.substring(7)),-1!=r.indexOf("fail_")&&(r=r.substring(5)),"access denied"!=(r=(r=r.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=r||(r="permission denied"),"config"==i&&"function not exist"==r&&(r="ok"),""==r&&(r="fail")}return i+":"+r}(e,n),t.errMsg=n),(i=i||{})._complete&&(i._complete(t),delete i._complete),n=t.errMsg||"",w.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var r=n.indexOf(":");switch(n.substring(r+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function A(e){if(e){for(var t=0,i=e.length;t<i;++t){var n=e[t],r=o[n];r&&(e[t]=r)}return e}}function V(e,t){if(!(!w.debug||t&&t.isInnerInvoke)){var i=a[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function L(){return(new Date).getTime()}function E(t){p&&(e.WeixinJSBridge?t():c.addEventListener&&c.addEventListener("WeixinJSBridgeReady",t,!1))}}))},"42d6":function(e,t,i){var n=i("86a0");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("22d762c2",n,!0,{sourceMap:!1,shadowMode:!1})},"4ae8":function(e,t,i){"use strict";i.r(t);var n=i("1558"),r=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a},5757:function(e,t){function i(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}e.exports=i},5910:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.bg-gray[data-v-311b436f]{background-color:#f2f2f2}.padding[data-v-311b436f]{padding:0 4%}.product-box[data-v-311b436f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-flex-wrap:wrap;flex-wrap:wrap}.product-item[data-v-311b436f]{-webkit-box-sizing:border-box;box-sizing:border-box}.product-sale[data-v-311b436f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#999;font-size:%?24?%;width:100%}.product-left[data-v-311b436f]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.product-name[data-v-311b436f]{color:#333;font-size:%?28?%;overflow:hidden}.product-desc[data-v-311b436f]{color:#999;font-size:%?26?%;margin-top:%?10?%}.col-1[data-v-311b436f]{width:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?15?% 4%;-webkit-box-sizing:border-box;box-sizing:border-box}.col-1 .product-item[data-v-311b436f]{display:-webkit-box;display:-webkit-flex;display:flex}.col-1 .product-img[data-v-311b436f]{width:%?200?%;height:%?133?%;margin-right:%?20?%}.col-1 .product-name[data-v-311b436f]{line-height:%?43?%;height:%?86?%}.col-1 .product-sale[data-v-311b436f]{margin-top:%?10?%}.col-2[data-v-311b436f]{width:48.5%;margin:%?30?% 0 0 0;background-color:#fff;-webkit-border-radius:5px;border-radius:5px}.col-2[data-v-311b436f]:nth-child(odd){margin-right:3%}.col-2 .product-img[data-v-311b436f]{width:100%;-webkit-border-radius:3px;border-radius:3px}.col-2 .product-name[data-v-311b436f]{line-height:%?43?%;height:%?86?%}.col-2 .product-sale[data-v-311b436f]{margin-top:%?10?%}.col-2 .product-left[data-v-311b436f]{padding:%?8?% %?0?%}.price[data-v-311b436f]{color:#ef7c38}.price span[data-v-311b436f]{font-size:%?30?%}.del-price[data-v-311b436f]{font-size:%?20?%;text-decoration:line-through}',""]),e.exports=t},"5fe5":function(e,t,i){"use strict";var n=i("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.Adv=void 0;var r=n(i("276c")),o=n(i("e954")),a=n(i("92a6")),c=n(i("920b")),s=i("f1a4"),d=function(e){(0,c.default)(i,e);var t=(0,a.default)(i);function i(){return(0,r.default)(this,i),t.call(this)}return(0,o.default)(i,[{key:"getAdv",value:function(e,t){var i={url:"common/adv/index",data:e,method:"get",sCallback:function(e){t&&t(e)}};this.request(i)}}]),i}(s.Base);t.Adv=d},6149:function(e,t,i){var n=i("adbd");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("075e9d4b",n,!0,{sourceMap:!1,shadowMode:!1})},6634:function(e,t,i){"use strict";i.r(t);var n=i("122a"),r=i("b7d6");for(var o in r)"default"!==o&&function(e){i.d(t,e,(function(){return r[e]}))}(o);i("c803");var a,c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"0b863ccf",null,!1,n["a"],a);t["default"]=s.exports},"6d03":function(e,t,i){"use strict";i.r(t);var n=i("0f8d"),r=i("c0a0");for(var o in r)"default"!==o&&function(e){i.d(t,e,(function(){return r[e]}))}(o);i("3c9f");var a,c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"3d7b3cb4",null,!1,n["a"],a);t["default"]=s.exports},"86a0":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".uni-grid-wrap[data-v-0b863ccf]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\nwidth:100%\n}.uni-grid[data-v-0b863ccf]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n\n\t\t/* flex: 1;\n */-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uni-grid--border[data-v-0b863ccf]{border-left-color:#e5e5e5;border-left-style:solid;border-left-width:1px}",""]),e.exports=t},8965:function(e,t,i){"use strict";var n=i("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i("072d");var r=i("5fe5"),o=i("3108"),a=i("2a3a"),c=n(i("6634")),s=(n(i("17c0")),n(i("6d03"))),d=(i("3f22"),new r.Adv),u=new o.System,l=new a.Product,f={components:{uniGrid:c.default,uniGridItem:s.default},data:function(){return{banner:[],nav:[],productList:[],productCate:[]}},onLoad:function(){this.getNav(),this.getBanner(),this.getProduct(),this.indexCate()},methods:{getBanner:function(){var e=this,t={location:"index_top"};d.getAdv(t,(function(t){e.$data.banner=t.data.index_top}))},getNav:function(){var e=this,t={key:"mobile_header"};u.getNav(t,(function(t){e.$data.nav=t.data.items}))},getProduct:function(){var e=this,t={is_top:1};l.lists(t,(function(t){e.$data.productList=t.data}))},indexCate:function(){var e=this,t={};l.indexCate(t,(function(t){e.$data.productCate=t.data}))}}};t.default=f},8980:function(e,t,i){"use strict";i("4160"),i("a434"),i("a9e3"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var e=this;this.grid.children.forEach((function(t,i){t===e&&e.grid.children.splice(i,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};t.default=n},"920b":function(e,t,i){"use strict";i.r(t);i("131a");function n(e,t){return n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}i.d(t,"default",(function(){return r}))},"92a6":function(e,t,i){"use strict";i.r(t);i("4ae1"),i("3410"),i("131a");function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}i("d3b7"),i("25f0");function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("3ca3"),i("ddb0");function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?a(e):t}function s(e){return function(){var t,i=n(e);if(r()){var o=n(this).constructor;t=Reflect.construct(i,arguments,o)}else t=i.apply(this,arguments);return c(this,t)}}i.d(t,"default",(function(){return s}))},"9e25":function(e,t,i){"use strict";var n,r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"product-box",class:2==e.column?"bgfff padding":"bg-gray"},e._l(e.productList,(function(t){return i("v-uni-view",{staticClass:"product-item",class:e.col,attrs:{"data-id":t.id},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toDetail.apply(void 0,arguments)}}},[i("v-uni-view",[i("v-uni-image",{staticClass:"product-img",attrs:{mode:"widthFix",src:t.picture}})],1),i("v-uni-view",{staticClass:"product-left"},[i("v-uni-view",{staticClass:"product-name"},[e._v(e._s(t.name))]),i("v-uni-view",{staticClass:"product-sale"},[i("v-uni-view",[e._v(e._s(t.virtual_sale)+"人购买")]),i("v-uni-view",[1==e.column?i("span",{staticClass:"del-price"},[e._v("￥"+e._s(t.market_price))]):e._e(),i("span",{staticClass:"price"},[e._v("￥"),i("span",[e._v(e._s(t.real_price))])])])],1)],1)],1)})),1)},o=[];i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},ad4d:function(e,t,i){var n=i("5910");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("7c9fba85",n,!0,{sourceMap:!1,shadowMode:!1})},adbd:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".uni-grid-item[data-v-3d7b3cb4]{\nheight:100%;display:-webkit-box;display:-webkit-flex;display:flex\n}.uni-grid-item__box[data-v-3d7b3cb4]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;width:100%;\nposition:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column\n\t\t/* justify-content: center;\n */\n\t\t/* align-items: center;\n */}.uni-grid-item--border[data-v-3d7b3cb4]{position:relative;border-bottom-color:#e5e5e5;border-bottom-style:solid;border-bottom-width:1px;border-right-color:#e5e5e5;border-right-style:solid;border-right-width:1px}.uni-grid-item--border-top[data-v-3d7b3cb4]{border-top-color:#e5e5e5;border-top-style:solid;border-top-width:1px;\nheight:100%;-webkit-box-sizing:border-box;box-sizing:border-box\n}.uni-highlight[data-v-3d7b3cb4]:active{background-color:#f1f1f1}",""]),e.exports=t},b7d6:function(e,t,i){"use strict";i.r(t);var n=i("092a"),r=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a},b862:function(e,t,i){"use strict";i.r(t);var n=i("112d"),r=i("df7c");for(var o in r)"default"!==o&&function(e){i.d(t,e,(function(){return r[e]}))}(o);i("d30a");var a,c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"ca271bee",null,!1,n["a"],a);t["default"]=s.exports},c0a0:function(e,t,i){"use strict";i.r(t);var n=i("8980"),r=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a},c803:function(e,t,i){"use strict";var n=i("42d6"),r=i.n(n);r.a},d30a:function(e,t,i){"use strict";var n=i("e99a"),r=i.n(n);r.a},df7c:function(e,t,i){"use strict";i.r(t);var n=i("8965"),r=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a},e99a:function(e,t,i){var n=i("f047");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("2689b760",n,!0,{sourceMap:!1,shadowMode:!1})},f047:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".swiper[data-v-ca271bee]{height:%?375?%}.swiper-item[data-v-ca271bee]{width:100%}.nav[data-v-ca271bee]{width:%?80?%;height:%?80?%!important;margin:0 auto}.nav-box[data-v-ca271bee]{padding:0 0 %?40?% 0;margin-bottom:%?15?%}.uni-grid-item[data-v-ca271bee]{text-align:center;margin-top:%?40?%}.nav-box .text[data-v-ca271bee]{font-size:%?26?%;margin-top:%?8?%}.title[data-v-ca271bee]{background-color:#fff;padding:%?20?% 0 0 4%}.cate-box[data-v-ca271bee]{margin-top:%?15?%}",""]),e.exports=t}}]);