(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-detail"],{"15ec":function(t,i,e){"use strict";var n=e("d1dc"),a=e.n(n);a.a},"16d9":function(t,i,e){"use strict";e.r(i);var n=e("50c3"),a=e("ef82");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("15ec");var r,c=e("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"7e2c1b7d",null,!1,n["a"],r);i["default"]=s.exports},3863:function(t,i,e){"use strict";var n=e("ee27");e("99af"),e("acd8"),e("e25e"),e("ac1f"),e("5319"),e("841c"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;n(e("071d"));var a=e("5d87"),o=e("e2a7"),r=e("29e3"),c=n(e("8f95")),s=n(e("bd1e")),d=n(e("16d9")),u=n(e("ab74")),l=e("b65f"),p=new a.Product,f=new o.User,b=(new r.Common,e("fe10")),v={components:{uniIcons:c.default,uniGoodsNav:d.default},data:function(){return{page:1,contentStatus:"more",buyed:!1,id:"",product:{data:{content:""}},is_vip:!1,vip_min_price:0,content:[],items:["详情","目录"],current:0,options:[{icon:"home",text:"首页"},{icon:"star",text:"收藏"}],buttonGroup:[{text:"购买专栏",backgroundColor:"#ffa200",color:"#fff"}]}},onLoad:function(t){this.user=uni.getStorageSync("userInfo"),this.$data.is_vip=this.isVip(),t.pid&&uni.setStorageSync("pid",t.pid),this.$data.is_vip||this.getVipMin(),this.id=t.id,this.getDetail(),this.getContent()},onReachBottom:function(){if("noMore"==this.contentStatus)return!1;1==this.current&&(this.page++,this.getContent())},onShareAppMessage:function(){var t=this.user&&this.user.id?this.user.id:"";return{title:this.$data.product.name,path:l.Config.domain+"/pages/product/detail?id="+this.id+"&pid="+t}},filters:{formatRichText:function(t){if(t){var i=t.replace(/<img[^>]*>/gi,(function(t,i){return-1==t.search(/style=/gi)&&(t=t.replace(/\<img/gi,'<img style=""')),t}));return i=i.replace(/style="/gi,"$& max-width:100% !important; "),i=i.replace(/<br[^>]*\/>/gi,""),i}return"暂无详情"},time:function(t){return(0,s.default)(1e3*t).format("YYYY-MM-DD")},money:function(t){return t>0?t:"免费"},toInt:function(t){return t==parseInt(t)?parseInt(t):t==parseFloat(t)?parseFloat(t):t}},methods:{getDetail:function(){var t=this,i={id:this.id};p.view(i,(function(i){t.$data.product=i.data,t.config()}))},getContent:function(){var t=this,i=this,e=10,n={product_id:this.id,page_size:e,page:this.page};i.$data.contentStatus="loading",p.content(n,(function(n){t.$data.buyed=n.data.buyed;var a=i.content.concat(n.data.contents);i.$data.content=a,n.data.contents.length<e?i.$data.contentStatus="noMore":i.$data.contentStatus="more"}))},getVipMin:function(){var t=this,i={id:this.id};f.vipMin(i,(function(i){i.data&&(t.$data.vip_min_price=i.data.price)}))},config:function(){var t=this,i=this;u.default.wxConfigH5(),b.ready((function(){var e=t.user&&t.user.id?t.user.id:"";b.updateAppMessageShareData({title:i.$data.product.name,desc:"分享一个很好的课程给你",link:l.Config.domain+"/pages/product/detail?id="+i.$data.product.id+"&pid="+e,imgUrl:i.$data.product.picture,success:function(){}}),b.updateTimelineShareData({title:i.$data.product.name,link:l.Config.domain+"/pages/product/detail?id="+i.$data.product.id+"&pid="+e,imgUrl:i.$data.product.picture,success:function(){}})}))},onClick:function(t){0==t.index&&uni.switchTab({url:"/pages/index/index"})},buttonClick:function(t){0==t.index&&uni.navigateTo({url:"buy?product_id="+this.$data.id})},onClickItem:function(t){this.$data.current=t},openVip:function(){uni.navigateTo({url:"/pages/user/vipbuy"})}}};i.default=v},"41bd":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".flex[data-v-7e2c1b7d]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-goods-nav[data-v-7e2c1b7d]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-tab__cart-box[data-v-7e2c1b7d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:50px;background-color:#fff;z-index:900;position:fixed;bottom:0;width:100%}.uni-tab__cart-sub-left[data-v-7e2c1b7d]{padding:0 25px}.uni-tab__cart-sub-right[data-v-7e2c1b7d]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-tab__right[data-v-7e2c1b7d]{margin:5px 0;margin-right:10px;border-radius:100px;overflow:hidden}.uni-tab__cart-button-left[data-v-7e2c1b7d]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n\n\t\t/* flex: 1;\n */position:relative;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:0 10px}.uni-tab__icon[data-v-7e2c1b7d]{width:18px;height:18px}.image[data-v-7e2c1b7d]{width:18px;height:18px}.uni-tab__text[data-v-7e2c1b7d]{margin-top:3px;font-size:%?24?%;color:#646566}.uni-tab__cart-button-right[data-v-7e2c1b7d]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-tab__cart-button-right-text[data-v-7e2c1b7d]{font-size:%?28?%;color:#fff}.uni-tab__cart-button-right[data-v-7e2c1b7d]:active{opacity:.7}.uni-tab__dot-box[data-v-7e2c1b7d]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\nposition:absolute;right:-2px;top:2px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center\n\t\t/* width: 0;\n */\n\t\t/* height: 0;\n */}.uni-tab__dot[data-v-7e2c1b7d]{\n\t\t/* width: 30rpx;\n */\n\t\t/* height: 30rpx;\n */padding:0 4px;line-height:15px;color:#fff;text-align:center;font-size:12px;background-color:red;border-radius:15px}.uni-tab__dots[data-v-7e2c1b7d]{padding:0 4px;\n\t\t/* width: auto;\n */border-radius:15px}.uni-tab__color-y[data-v-7e2c1b7d]{background-color:#ffa200}.uni-tab__color-r[data-v-7e2c1b7d]{background-color:red}",""]),t.exports=i},"50c3":function(t,i,e){"use strict";var n={uniIcons:e("8f95").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-goods-nav"},[e("v-uni-view",{staticClass:"uni-tab__seat"}),e("v-uni-view",{staticClass:"uni-tab__cart-box flex"},[e("v-uni-view",{staticClass:"flex uni-tab__cart-sub-left"},t._l(t.options,(function(i,n){return e("v-uni-view",{key:n,staticClass:"flex uni-tab__cart-button-left uni-tab__shop-cart",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick(n,i)}}},[e("v-uni-view",{staticClass:"uni-tab__icon"},[e("uni-icons",{attrs:{type:i.icon,size:"20",color:"#646566"}})],1),e("v-uni-text",{staticClass:"uni-tab__text"},[t._v(t._s(i.text))]),e("v-uni-view",{staticClass:"flex uni-tab__dot-box"},[i.info?e("v-uni-text",{staticClass:"uni-tab__dot ",class:{"uni-tab__dots":i.info>9}},[t._v(t._s(i.info))]):t._e()],1)],1)})),1),e("v-uni-view",{staticClass:"flex uni-tab__cart-sub-right ",class:{"uni-tab__right":t.fill}},t._l(t.buttonGroup,(function(i,n){return e("v-uni-view",{key:n,staticClass:"flex uni-tab__cart-button-right",style:{backgroundColor:i.backgroundColor,color:i.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.buttonClick(n,i)}}},[e("v-uni-text",{staticClass:"uni-tab__cart-button-right-text"},[t._v(t._s(i.text))])],1)})),1)],1)],1)},o=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}))},5505:function(t,i,e){var n=e("5788");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("be86c16c",n,!0,{sourceMap:!1,shadowMode:!1})},5788:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.swiper[data-v-2364e3b8]{height:%?500?%}.swiper-item[data-v-2364e3b8]{width:100%}.detail-items[data-v-2364e3b8]{border-bottom:1px solid #f1f1f1;display:-webkit-box;display:-webkit-flex;display:flex}.detail-item[data-v-2364e3b8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.detail-item .text[data-v-2364e3b8]{line-height:%?80?%;padding:%?20?% 0}.active .text[data-v-2364e3b8]{border-bottom:%?4?% solid #ef7c38}.detail[data-v-2364e3b8]{background-color:#fff;padding:%?10?% 0;margin-top:%?15?%}.detail-content[data-v-2364e3b8]{padding:%?20?% 0 0 0}.row[data-v-2364e3b8]{background-color:#fff;padding:0 3%}.product-name[data-v-2364e3b8]{padding:%?20?% 0 0 0;font-size:%?32?%;font-weight:700}.price-line[data-v-2364e3b8]{color:#ef7c38;padding:%?20?% 0 0 0}.market-price[data-v-2364e3b8]{color:#999;font-size:%?24?%;text-decoration:line-through;margin-left:%?40?%}.attr-line[data-v-2364e3b8]{font-size:%?24?%;color:#999;padding:%?20?% 0 0 0}.attr-line span[data-v-2364e3b8]{margin-right:%?40?%}.open-vip[data-v-2364e3b8]{background-color:#f9e5bf;padding:%?20?% 3%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.border-top[data-v-2364e3b8]{border-top:1px solid #f1f1f1;margin-top:%?20?%}',""]),t.exports=i},"726a":function(t,i,e){"use strict";e.r(i);var n=e("c428"),a=e("d36e");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("aa48");var r,c=e("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"2364e3b8",null,!1,n["a"],r);i["default"]=s.exports},a3f7:function(t,i,e){"use strict";var n=e("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("8f95")),o={name:"UniGoodsNav",components:{uniIcons:a.default},props:{options:{type:Array,default:function(){return[{icon:"shop",text:"店铺"},{icon:"cart",text:"购物车"}]}},buttonGroup:{type:Array,default:function(){return[{text:"加入购物车",backgroundColor:"#ffa200",color:"#fff"},{text:"立即购买",backgroundColor:"#ff0000",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(t,i){this.$emit("click",{index:t,content:i})},buttonClick:function(t,i){uni.report&&uni.report(i.text,i.text),this.$emit("buttonClick",{index:t,content:i})}}};i.default=o},aa48:function(t,i,e){"use strict";var n=e("5505"),a=e.n(n);a.a},c428:function(t,i,e){"use strict";var n={uniIcons:e("8f95").default,jhxProductContent:e("071d").default,uniGoodsNav:e("16d9").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"page-section swiper"},[e("v-uni-view",{staticClass:"page-section-spacing"},[e("v-uni-swiper",{staticClass:"swiper",attrs:{autoplay:!0}},t._l(t.product.cover,(function(t){return e("v-uni-swiper-item",[e("v-uni-image",{staticClass:"swiper-item uni-bg-red",attrs:{mode:"widthFix",src:t}})],1)})),1)],1)],1),e("v-uni-view",{staticClass:"row"},[e("v-uni-view",{staticClass:"product-name"},[t._v(t._s(t.product.name))]),e("v-uni-view",{staticClass:"attr-line"},[e("span",[t._v("共含"+t._s(t.product.content_count)+"节课")]),e("span",[t._v(t._s(t.product.virtual_sale)+"人购买")])]),e("v-uni-view",{staticClass:"price-line"},[(t.is_vip?t.product.vip_price:t.product.real_price)>0?e("span",[t._v("￥")]):t._e(),e("span",{staticClass:"price-big"},[t._v(t._s(t._f("money")(t.is_vip?t.product.vip_price:t.product.real_price)))]),e("span",{staticClass:"market-price"},[t._v("原价"+t._s(t.product.market_price))]),t.product.name?e("v-uni-view",{staticClass:"share-section"}):t._e()],1),e("v-uni-view",{staticClass:"common-line border-top"},[e("v-uni-view",{staticClass:"label"},[t._v("优惠")]),t.product.vip_price>0?e("v-uni-view",[t._v("vip价格￥"+t._s(t.product.vip_price))]):e("v-uni-view",[t._v("vip免费")])],1)],1),t.is_vip?t._e():e("v-uni-view",{staticClass:"open-vip",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openVip()}}},[e("v-uni-view",[t._v(t._s(t._f("toInt")(t.vip_min_price))+"元开通vip，享受优惠")]),e("v-uni-view",[t._v("立即开通"),e("uni-icons",{staticClass:"icon",attrs:{type:"forward"}})],1)],1),e("v-uni-view",{staticClass:"detail"},[e("v-uni-view",{staticClass:"detail-items"},t._l(t.items,(function(i,n){return e("v-uni-view",{staticClass:"detail-item",class:n==t.current?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClickItem(n)}}},[e("v-uni-text",{staticClass:"text"},[t._v(t._s(i))])],1)})),1),e("v-uni-view",{staticClass:"detail-content",class:0==t.current?"":"hide"},[e("v-uni-rich-text",{attrs:{nodes:t._f("formatRichText")(t.product.data.content)}})],1),e("v-uni-view",{staticClass:"detail-content",class:1==t.current?"":"hide"},[e("jhx-product-content",{attrs:{contents:t.content,is_vip:t.is_vip,status:t.contentStatus,buyed:t.buyed,column:1}})],1)],1),e("v-uni-view",{staticStyle:{height:"50px",width:"100%"}}),e("uni-goods-nav",{attrs:{fill:!0,options:t.options,buttonGroup:t.buttonGroup},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)},buttonClick:function(i){arguments[0]=i=t.$handleEvent(i),t.buttonClick.apply(void 0,arguments)}}})],1)},o=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}))},d1dc:function(t,i,e){var n=e("41bd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("2fadc26c",n,!0,{sourceMap:!1,shadowMode:!1})},d36e:function(t,i,e){"use strict";e.r(i);var n=e("3863"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},ef82:function(t,i,e){"use strict";e.r(i);var n=e("a3f7"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a}}]);