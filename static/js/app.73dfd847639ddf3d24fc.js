webpackJsonp([1],{120:function(t,e,n){"use strict";function i(){window.document.addEventListener("backbutton",function(t){window.onpopstate=function(t){"app"in window.navigator&&window.navigator.app.exitApp()},t.preventDefault?t.preventDefault():t.returnValue=!1})}n.d(e,"a",function(){return i});var a=n(33);n.n(a)},121:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-view"},[t.msg?n("div",{staticClass:"msg",on:{click:t.handleMsgClick}},[t._v(t._s(t.msg))]):t._e(),n("div",{staticClass:"list"},t._l(t.list||t.skeletonList,function(e){return n("div",{staticClass:"item"},[t.list?n("div",{staticClass:"link",attrs:{title:e.title},on:{click:function(n){return t.go({name:"Post",params:{id:e.id}})}}},[t._v(t._s(e.title))]):t._e()])}),0)])},a=[],s={render:i,staticRenderFns:a};e.a=s},122:function(t,e,n){"use strict";function i(t){n(123)}var a=n(52),s=n(124),r=n(16),o=i,c=r(a.a,s.a,!1,o,null,null);e.a=c.exports},123:function(t,e){},124:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-view"},[t.loading?t._e():n("div",[n("div",{staticClass:"title",domProps:{innerHTML:t._s(t.post.title)}}),n("section",{staticClass:"content",domProps:{innerHTML:t._s(t.post.content)}})])])},a=[],s={render:i,staticRenderFns:a};e.a=s},17:function(t,e,n){"use strict";e.a={methods:{debug:function(t){console.log("debug",t)},go:function(t){"Post"===t.name&&this.showLoading(),this.$router.push(t)},goHome:function(){this.$router.push({path:"/"}),document.title="Cnbeta Lite"},showLoading:function(){this.$root.$data.shared.loading=!0},hideLoading:function(){this.$root.$data.shared.loading=!1}},computed:{loading:function(){return this.$root.$data.shared.loading}}}},29:function(t,e,n){"use strict";var i=n(17);e.a={mixins:[i.a],name:"app",methods:{share:function(){navigator.share({title:window.document.title,text:"",url:window.location.href}).then(function(){return console.log("Successful share")}).catch(function(t){return console.log("Error sharing",t)})}},computed:{isSupportWebShare:function(){return navigator.share}}}},30:function(t,e,n){"use strict";var i=n(31),a=n.n(i),s=n(32),r=n.n(s),o=n(17),c=n(101),u=n.n(c),l=n(120),d=0,f=function(){var t=(new Date).getHours();return t>=0&&t<=5};e.a={name:"List",mixins:[o.a],data:function(){return{list:null,listNew:[],msg:""}},methods:{getPostId:function(t){return/view\/(\w*)\.htm/.exec(t)[1]},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5e3;return f()?(this.msg="应用休眠中，服务时间 6:00 - 24:00",void this.hideLoading()):(d++,u.a.get("/api/cnbeta",{timeout:e}).then(function(e){return t.msg=null,t.hideLoading(),e.data}).catch(function(){var e=r()(a.a.mark(function e(n){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Fetch Error :-S",n),!/400|503/.test(n.status)){e.next=5;break}return console.log("Looks like there was a problem. Status Code: "+n.status),t.msg=n.status+": "+n.message,e.abrupt("return");case 5:if(!(d<=15)){e.next=12;break}return t.msg="服务器连接超时，正在重试("+d+")",e.next=9,t.getList(1500);case 9:t.list=e.sent,e.next=14;break;case 12:t.msg="服务器连接失败, 请稍后再访问",t.hideLoading();case 14:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()))},handleVisibilityChange:function(){var t=this;return r()(a.a.mark(function e(){var n,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(document.hidden){e.next=9;break}return e.next=3,t.getList();case 3:if((n=e.sent)&&n.length){e.next=6;break}return e.abrupt("return");case 6:t.listNew=n,i=t.list[0].id!==t.listNew[0].id,t.handleDiff();case 9:case"end":return e.stop()}},e,t)}))()},handleMsgClick:function(){},handleDiff:function(){var t=this;this.msg="有新内容，点击或下拉刷新",this.handleMsgClick=function(){t.list=t.listNew,t.msg="",t.$nextTick(function(){return window.scrollTo(0,0)})}}},computed:{skeletonList:function(){var t=[];return t.length=25,t}},created:function(){var t=this;return r()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("Post"===t.$route.name){e.next=4;break}return e.next=3,t.getList();case 3:t.list=e.sent;case 4:Object(l.a)(),document.addEventListener("visibilitychange",t.handleVisibilityChange,!1);case 6:case"end":return e.stop()}},e,t)}))()},mounted:function(){}}},52:function(t,e,n){"use strict";var i=n(31),a=n.n(i),s=n(32),r=n.n(s),o=n(17);e.a={name:"Post",mixins:[o.a],data:function(){return{post:null,err:null}},methods:{},beforeRouteEnter:function(t,e,n){var i=this;fetch("/api/cnbeta/"+t.params.id).then(function(t){if(200!==t.status)return void console.log("Looks like there was a problem. Status Code: "+t.status);n(function(){var e=r()(a.a.mark(function e(n){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n.post=e.sent,n.hideLoading();case 4:case"end":return e.stop()}},e,i)}));return function(t){return e.apply(this,arguments)}}())})},watch:{loading:function(t){t||setTimeout(function(){document.title=document.querySelector(".post-view .title").innerText},0)}}}},53:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(27),a=n(56),s=n(60);i.a.config.productionTip=!1;var r={loading:!0};new i.a({el:"#app",data:{shared:r},router:s.a,template:"<App/>",components:{App:a.a}})},56:function(t,e,n){"use strict";function i(t){n(57)}var a=n(29),s=n(59),r=n(16),o=i,c=r(a.a,s.a,!1,o,null,null);e.a=c.exports},57:function(t,e){},59:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("div",{staticClass:"left"},["Home"===t.$route.name?n("div",{staticClass:"title link",on:{click:function(e){return t.go({path:"/"})}}},[t._v("Cnbeta"),n("span",{staticClass:"sub"},[t._v("Lite")])]):n("div",{staticClass:"link",on:{click:t.goHome}},[t._v("返回")])]),n("div",{staticClass:"right"},[t.isSupportWebShare&&!t.loading?n("div",{staticClass:"link",on:{click:t.share}},[t._v("分享")]):t._e()]),t.loading?n("div",{staticClass:"loading"},[n("spinner",{attrs:{"line-fg-color":"#32669a"}})],1):t._e()]),n("div",{staticClass:"main"},[n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1),t._m(0)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("a",{attrs:{href:"https://github.com/cyio/cnbeta-pwa",target:"_blank"}},[t._v("cyio/cnbeta-pwa")])])}],s={render:i,staticRenderFns:a};e.a=s},60:function(t,e,n){"use strict";var i=n(27),a=n(61),s=n(62),r=n(122),o=n(125),c=n.n(o);i.a.use(a.a),i.a.component("Spinner",c.a),e.a=new a.a({mode:"history",scrollBehavior:function(t,e,n){if(n)setTimeout(function(){window.scrollTo(n.x,n.y)},200);else if("Post"===t.name)return{x:0,y:0}},routes:[{path:"/",name:"Home",component:s.a,meta:{keepAlive:!0}},{path:"/post/:id",name:"Post",component:r.a},{path:"*",redirect:"/"}]})},62:function(t,e,n){"use strict";function i(t){n(63)}var a=n(30),s=n(121),r=n(16),o=i,c=r(a.a,s.a,!1,o,null,null);e.a=c.exports},63:function(t,e){}},[53]);
//# sourceMappingURL=app.73dfd847639ddf3d24fc.js.map