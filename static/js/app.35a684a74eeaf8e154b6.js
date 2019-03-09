webpackJsonp([1],{123:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-view"},[t.loading?t._e():n("div",[n("div",{staticClass:"title",domProps:{innerHTML:t._s(t.post.title)}}),n("section",{staticClass:"content",domProps:{innerHTML:t._s(t.post.content)}})])])},a=[],o={render:i,staticRenderFns:a};e.a=o},17:function(t,e,n){"use strict";e.a={methods:{debug:function(t){console.log("debug",t)},go:function(t){"Post"===t.name&&this.showLoading(),this.$router.push(t)},goHome:function(){this.$router.push({path:"/"})},showLoading:function(){this.$root.$data.shared.loading=!0},hideLoading:function(){this.$root.$data.shared.loading=!1}},computed:{loading:function(){return this.$root.$data.shared.loading}}}},29:function(t,e,n){"use strict";var i=n(17);e.a={mixins:[i.a],name:"app",methods:{share:function(){navigator.share({title:window.document.title,text:"",url:window.location.href}).then(function(){return console.log("Successful share")}).catch(function(t){return console.log("Error sharing",t)})}},computed:{isSupportWebShare:function(){return navigator.share}}}},30:function(t,e,n){"use strict";var i=n(17),a=n(61),o=n.n(a),s=0;e.a={name:"List",mixins:[i.a],data:function(){return{list:null,msg:null}},methods:{getPostId:function(t){return/view\/(\w*)\.htm/.exec(t)[1]},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5e3;return s++,o.a.get("/api/cnbeta",{timeout:e}).then(function(e){t.list=e.data,t.msg=null,t.hideLoading()}).catch(function(e){if(console.log("Fetch Error :-S",e),/400|502/.test(e.status))return console.log("Looks like there was a problem. Status Code: "+e.status),void(t.msg=e.status+": "+e.message);s<=15?(t.msg="服务器连接超时，正在重试("+s+")",t.getList(1500)):(t.msg="服务器连接失败, 请稍后再访问",t.hideLoading())})}},computed:{skeletonList:function(){var t=[];return t.length=25,t}},created:function(){"Post"!==this.$route.name&&this.getList(),window.document.addEventListener("backbutton",function(t){window.onpopstate=function(t){"app"in window.navigator&&window.navigator.app.exitApp()},t.preventDefault?t.preventDefault():t.returnValue=!1})},mounted:function(){}}},36:function(t,e,n){"use strict";var i=n(83),a=n.n(i),o=n(86),s=n.n(o),r=n(17);e.a={name:"Post",mixins:[r.a],data:function(){return{post:null,err:null}},methods:{},beforeRouteEnter:function(t,e,n){var i=this;fetch("/api/cnbeta/"+t.params.id).then(function(t){if(200!==t.status)return void console.log("Looks like there was a problem. Status Code: "+t.status);n(function(){var e=s()(a.a.mark(function e(n){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n.post=e.sent,n.hideLoading();case 4:case"end":return e.stop()}},e,i)}));return function(t){return e.apply(this,arguments)}}())})},watch:{loading:function(t){t||setTimeout(function(){document.title=document.querySelector(".post-view .title").innerText},0)}}}},50:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(27),a=n(53),o=n(57);i.a.config.productionTip=!1;var s={loading:!0};new i.a({el:"#app",data:{shared:s},router:o.a,template:"<App/>",components:{App:a.a}})},53:function(t,e,n){"use strict";function i(t){n(54)}var a=n(29),o=n(56),s=n(16),r=i,c=s(a.a,o.a,!1,r,null,null);e.a=c.exports},54:function(t,e){},56:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("div",{staticClass:"left"},["Home"===t.$route.name?n("div",{staticClass:"title link",on:{click:function(e){return t.go({path:"/"})}}},[t._v("Cnbeta"),n("span",{staticClass:"sub"},[t._v("Lite")])]):n("div",{staticClass:"link",on:{click:t.goHome}},[t._v("返回")])]),n("div",{staticClass:"right"},[t.isSupportWebShare&&!t.loading?n("div",{staticClass:"link",on:{click:t.share}},[t._v("分享")]):t._e()]),t.loading?n("div",{staticClass:"loading"},[n("spinner",{attrs:{"line-fg-color":"#32669a"}})],1):t._e()]),n("div",{staticClass:"main"},[n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1),t._m(0)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("a",{attrs:{href:"https://github.com/cyio/cnbeta-pwa",target:"_blank"}},[t._v("cyio/cnbeta-pwa")])])}],o={render:i,staticRenderFns:a};e.a=o},57:function(t,e,n){"use strict";var i=n(27),a=n(58),o=n(59),s=n(81),r=n(124),c=n.n(r);i.a.use(a.a),i.a.component("Spinner",c.a),e.a=new a.a({mode:"history",scrollBehavior:function(t,e,n){if(n)setTimeout(function(){window.scrollTo(n.x,n.y)},200);else if("Post"===t.name)return{x:0,y:0}},routes:[{path:"/",name:"Home",component:o.a,meta:{keepAlive:!0}},{path:"/post/:id",name:"Post",component:s.a},{path:"*",redirect:"/"}]})},59:function(t,e,n){"use strict";function i(t){n(60)}var a=n(30),o=n(80),s=n(16),r=i,c=s(a.a,o.a,!1,r,null,null);e.a=c.exports},60:function(t,e){},80:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-view"},[t.msg?n("div",{staticClass:"msg"},[t._v(t._s(t.msg))]):t._e(),n("div",{staticClass:"list"},t._l(t.list||t.skeletonList,function(e){return n("div",{staticClass:"item"},[t.list?n("div",{staticClass:"link",attrs:{title:e.title},on:{click:function(n){return t.go({name:"Post",params:{id:e.id}})}}},[t._v(t._s(e.title))]):t._e()])}),0)])},a=[],o={render:i,staticRenderFns:a};e.a=o},81:function(t,e,n){"use strict";function i(t){n(82)}var a=n(36),o=n(123),s=n(16),r=i,c=s(a.a,o.a,!1,r,null,null);e.a=c.exports},82:function(t,e){}},[50]);
//# sourceMappingURL=app.35a684a74eeaf8e154b6.js.map