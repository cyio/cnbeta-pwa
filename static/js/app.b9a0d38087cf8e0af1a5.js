webpackJsonp([1],{100:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},s=[],r={render:i,staticRenderFns:s};e.a=r},24:function(t,e,n){"use strict";var i=n(25);e.a={mixins:[i.a],name:"app"}},25:function(t,e,n){"use strict";e.a={methods:{debug:function(t){console.log("debug",t)},go:function(t){"Post"===t.name&&this.$bar.start(),this.$router.push(t)},goBack:function(){this.$router.go(-1)}}}},26:function(t,e,n){"use strict";var i=n(27),s=n.n(i),r=n(28),a=n.n(r),o=n(25);e.a={name:"List",mixins:[o.a],data:function(){return{list:null,loading:!0}},methods:{getPostId:function(t){return/view\/(\w*)\.htm/.exec(t)[1]}},computed:{skeletonList:function(){var t=[];return t.length=25,t}},created:function(){var t=this;"Post"!==this.$route.name&&(this.$bar.start(),fetch("/api/cnbeta").then(function(){var e=a()(s.a.mark(function e(n){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(200===n.status){e.next=3;break}return console.log("Looks like there was a problem. Status Code: "+n.status),e.abrupt("return");case 3:return e.next=5,n.json();case 5:t.list=e.sent,t.loading=!1,t.$bar.finish();case 8:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()).catch(function(t){console.log("Fetch Error :-S",t)}))},mounted:function(){}}},43:function(t,e,n){"use strict";var i=n(27),s=n.n(i),r=n(28),a=n.n(r);e.a={name:"Post",data:function(){return{post:null,err:null,loading:!0}},methods:{},beforeRouteEnter:function(t,e,n){var i=this;fetch("/api/cnbeta/"+t.params.id).then(function(t){if(200!==t.status)return void console.log("Looks like there was a problem. Status Code: "+t.status);n(function(){var e=a()(s.a.mark(function e(n){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n.post=e.sent,n.loading=!1,n.$bar.finish();case 5:case"end":return e.stop()}},e,i)}));return function(t){return e.apply(this,arguments)}}())})},mounted:function(){}}},44:function(t,e,n){"use strict";e.a={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#19c142",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},45:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(23),s=n(49),r=n(53);i.a.config.productionTip=!1,new i.a({el:"#app",router:r.a,template:"<App/>",components:{App:s.a}})},49:function(t,e,n){"use strict";function i(t){n(50)}var s=n(24),r=n(52),a=n(8),o=i,c=a(s.a,r.a,!1,o,null,null);e.a=c.exports},50:function(t,e){},52:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("div",{staticClass:"title link",on:{click:function(e){t.go({path:"/"})}}},[t._v("\n        Cnbeta\n        "),n("span",{staticClass:"sub"},[t._v("Lite")])])]),t._v(" "),n("div",{staticClass:"main"},[n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t._v(" "),t.$route.meta.keepAlive?t._e():n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1),t._v(" "),t._m(0)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("a",{attrs:{href:"https://github.com/cyio/cnbeta-pwa",target:"_blank"}},[t._v("cyio/cnbeta-pwa")])])}],r={render:i,staticRenderFns:s};e.a=r},53:function(t,e,n){"use strict";var i=n(23),s=n(54),r=n(55),a=n(95),o=n(98),c=i.a.prototype.$bar=new i.a(o.a).$mount();document.body.appendChild(c.$el),i.a.use(s.a),e.a=new s.a({mode:"history",scrollBehavior:function(t,e,n){if(n)setTimeout(function(){window.scrollTo(n.x,n.y)},200);else if("Post"===t.name)return{x:0,y:0}},routes:[{path:"/",name:"List",component:r.a,meta:{keepAlive:!0}},{path:"/post/:id",name:"Post",component:a.a},{path:"*",redirect:"/"}]})},55:function(t,e,n){"use strict";function i(t){n(56)}var s=n(26),r=n(94),a=n(8),o=i,c=a(s.a,r.a,!1,o,null,null);e.a=c.exports},56:function(t,e){},94:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-view"},[n("div",{staticClass:"list"},t._l(t.list||t.skeletonList,function(e){return n("div",{staticClass:"item"},[t.loading?t._e():n("div",{staticClass:"link",attrs:{title:e.title},on:{click:function(n){t.go({name:"Post",params:{id:e.id}})}}},[t._v(t._s(e.title))])])}))])},s=[],r={render:i,staticRenderFns:s};e.a=r},95:function(t,e,n){"use strict";function i(t){n(96)}var s=n(43),r=n(97),a=n(8),o=i,c=a(s.a,r.a,!1,o,null,null);e.a=c.exports},96:function(t,e){},97:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-view"},[t.loading?n("div",{staticClass:"loading"},[t._v("\n    loading...\n  ")]):n("div",[n("div",{staticClass:"title",domProps:{innerHTML:t._s(t.post.title)}}),t._v(" "),n("section",{staticClass:"content",domProps:{innerHTML:t._s(t.post.content)}})])])},s=[],r={render:i,staticRenderFns:s};e.a=r},98:function(t,e,n){"use strict";function i(t){n(99)}var s=n(44),r=n(100),a=n(8),o=i,c=a(s.a,r.a,!1,o,"data-v-62a57d02",null);e.a=c.exports},99:function(t,e){}},[45]);
//# sourceMappingURL=app.b9a0d38087cf8e0af1a5.js.map