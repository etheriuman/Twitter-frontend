(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1706dda0"],{"1c9f":function(t,e,o){},2957:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"list-group-item"},[o("div",{staticClass:"main-content"},[o("div",{staticClass:"main-left"},[o("router-link",{attrs:{to:{name:"user-tweets",params:{id:t.follow.id}}}},[o("img",{staticClass:"avatar",attrs:{src:t._f("emptyImage")(t.follow.avatar),alt:"avatar"}})])],1),o("div",{staticClass:"main-right"},[o("p",{staticClass:"follow-name"},[t._v(t._s(t.follow.name))]),o("p",{staticClass:"text-muted"},[t._v(t._s(t.follow.account))]),o("p",[t._v(t._s(t.follow.introduction))])])]),o("div",{staticClass:"side-content"},[t.isProcessing?o("button",{staticClass:"btn btn-sm btn-primary follow-button",attrs:{type:"button",disabled:""}},[t._v(" 處理中 ")]):[t.follow.isFollowed&&t.currentUserId!==t.follow.followId?o("button",{staticClass:"btn btn-sm btn-primary follow-button",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.deleteFollow(t.follow.followId)}}},[t._v(" 正在跟隨 ")]):t._e(),t.follow.isFollowed||t.currentUserId===t.follow.followId?t._e():o("button",{staticClass:"btn btn-sm btn-outline-primary follow-button",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.addFollow(t.follow.followId)}}},[t._v(" 跟隨 ")])]],2)])},n=[],a=o("1da1"),s=o("5530"),i=(o("96cf"),o("a9e3"),o("159b"),o("604d")),l=o("2fa3"),c=o("2708"),u=o("2f62"),f=o("56d7"),d={name:"UserCard",mixins:[c["a"]],props:{initialFollow:{type:Object,required:!0},currentUserId:{type:Number,default:-1}},data:function(){return{follow:this.initialFollow,isProcessing:!1}},computed:Object(s["a"])({},Object(u["b"])(["currentUser","recommendation"])),methods:{socketFollow:function(t){var e={type:"follow",userId:this.currentUser.id,followId:t};f["socket"].emit("sendNotification",e)},addFollow:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function o(){var r,n,a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,r={id:t},e.isProcessing=!0,o.next=5,i["a"].addFollow({payLoad:r});case 5:if(n=o.sent,a=n.data,e.isProcessing=!1,"success"===a.status){o.next=10;break}throw new Error(a.message);case 10:e.follow.isFollowed=!0,e.socketFollow(t),e.$store.commit("followRecommendation",parseInt(t)),o.next=20;break;case 15:o.prev=15,o.t0=o["catch"](0),l["a"].fire({icon:"error",title:"無法追蹤使用者，請稍後再試"}),e.isProcessing=!1,console.log(o.t0);case 20:case"end":return o.stop()}}),o,null,[[0,15]])})))()},deleteFollow:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function o(){var r,n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,e.isProcessing=!0,o.next=4,i["a"].removeFollow({followId:t});case 4:if(r=o.sent,n=r.data,e.isProcessing=!1,"success"===n.status){o.next=9;break}throw new Error(n.message);case 9:e.follow.isFollowed=!1,e.$emit("after-delete-follow",t),e.$store.commit("unfollowRecommendation",parseInt(t)),o.next=19;break;case 14:o.prev=14,o.t0=o["catch"](0),l["a"].fire({icon:"error",title:"無法退追使用者，請稍後再試"}),e.isProcessing=!1,console.log(o.t0);case 19:case"end":return o.stop()}}),o,null,[[0,14]])})))()}},watch:{initialFollow:function(){this.follow=this.initialFollow},recommendation:function(t){var e=this;t.forEach((function(t){t.id===parseInt(e.follow.followId)&&(e.follow=Object(s["a"])(Object(s["a"])({},e.follow),{},{isFollowed:t.isFollowed}))}))}}},w=d,p=(o("aad5"),o("2877")),m=Object(p["a"])(w,r,n,!1,null,"7752cce1",null);e["a"]=m.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,o){var r=o("1d80"),n=o("5899"),a="["+n+"]",s=RegExp("^"+a+a+"*"),i=RegExp(a+a+"*$"),l=function(t){return function(e){var o=String(r(e));return 1&t&&(o=o.replace(s,"")),2&t&&(o=o.replace(i,"")),o}};t.exports={start:l(1),end:l(2),trim:l(3)}},"5ae8":function(t,e,o){"use strict";o("dddc")},7156:function(t,e,o){var r=o("861d"),n=o("d2bb");t.exports=function(t,e,o){var a,s;return n&&"function"==typeof(a=e.constructor)&&a!==o&&r(s=a.prototype)&&s!==o.prototype&&n(t,s),t}},a9e3:function(t,e,o){"use strict";var r=o("83ab"),n=o("da84"),a=o("94ca"),s=o("6eeb"),i=o("5135"),l=o("c6b6"),c=o("7156"),u=o("c04e"),f=o("d039"),d=o("7c73"),w=o("241c").f,p=o("06cf").f,m=o("9bf2").f,v=o("58a8").trim,b="Number",g=n[b],h=g.prototype,I=l(d(h))==b,F=function(t){var e,o,r,n,a,s,i,l,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=v(c),e=c.charCodeAt(0),43===e||45===e){if(o=c.charCodeAt(2),88===o||120===o)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+c}for(a=c.slice(2),s=a.length,i=0;i<s;i++)if(l=a.charCodeAt(i),l<48||l>n)return NaN;return parseInt(a,r)}return+c};if(a(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var C,_=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof _&&(I?f((function(){h.valueOf.call(o)})):l(o)!=b)?c(new g(F(e)),o,_):F(e)},k=r?w(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;k.length>N;N++)i(g,C=k[N])&&!i(_,C)&&m(_,C,p(g,C));_.prototype=h,h.constructor=_,s(n,b,_)}},aad5:function(t,e,o){"use strict";o("cb95")},c08f:function(t,e,o){"use strict";o("1c9f")},cb95:function(t,e,o){},dddc:function(t,e,o){},e85a:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main"},[o("div",{staticClass:"column-left column"},[o("Navbar")],1),o("div",{staticClass:"column-main column"},[o("div",{staticClass:"card main-content"},[o("ul",{staticClass:"list-group list-group-flush"},[o("PageHead",{attrs:{user:t.user}}),o("UserFollowsNavTabs"),t.isLoading?o("p",{staticClass:"loading"},[t._v("努力加載中...")]):t._l(t.followings,(function(e){return o("UserCard",{key:e.id,attrs:{"initial-follow":e,currentUserId:t.currentUser.id},on:{"after-delete-follow":t.handleAfterDeleteFollow}})}))],2)])]),o("div",{staticClass:"column-right column"},[o("Recommendation",{attrs:{"user-id":t.user.id}})],1)])},n=[],a=o("5530"),s=o("1da1"),i=(o("d81d"),o("4de4"),o("96cf"),o("d178")),l=o("cb06"),c=o("f0b3"),u=o("2957"),f=o("74ca"),d=o("4cce"),w=o("2fa3"),p=o("2f62"),m={name:"UserFollowings",components:{Navbar:i["a"],PageHead:l["a"],UserFollowsNavTabs:c["a"],UserCard:u["a"],Recommendation:f["a"]},data:function(){return{user:{},followings:[],isLoading:!0}},methods:{fetchUser:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function o(){var r,n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,d["a"].get({userId:t});case 3:r=o.sent,n=r.data,e.user=n,o.next=12;break;case 8:o.prev=8,o.t0=o["catch"](0),console.log(o.t0),w["a"].fire({icon:"error",title:"無法取得使用者資料，請稍後再試"});case 12:case"end":return o.stop()}}),o,null,[[0,8]])})))()},fetchFollowings:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function o(){var r,n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,d["a"].getFollowings({userId:t});case 3:r=o.sent,n=r.data,e.isLoading=!1,e.followings=n.map((function(t){return Object(a["a"])(Object(a["a"])({},t),{},{followId:t.followingId})})),o.next=13;break;case 9:o.prev=9,o.t0=o["catch"](0),console.log(o.t0),w["a"].fire({icon:"error",title:"無法取得正在跟隨者清單，請稍後再試"});case 13:case"end":return o.stop()}}),o,null,[[0,9]])})))()},handleAfterDeleteFollow:function(t){this.user.id==this.currentUser.id&&(this.followings=this.followings.filter((function(e){return e.followId!==t})))}},beforeRouteUpdate:function(t,e,o){var r=t.params.id;this.fetchFollowings(r),o()},computed:Object(a["a"])({},Object(p["b"])(["currentUser"])),created:function(){var t=this.$route.params.id;this.fetchUser(t),this.fetchFollowings(t)}},v=m,b=(o("5ae8"),o("2877")),g=Object(b["a"])(v,r,n,!1,null,"36a030ff",null);e["default"]=g.exports},f0b3:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"nav nav-pills"},[o("li",{staticClass:"nav-item"},[o("router-link",{staticClass:"nav-link",attrs:{to:{name:"user-followers",params:{id:t.id}}}},[t._v(" 跟隨者 ")])],1),o("li",{staticClass:"nav-item"},[o("router-link",{staticClass:"nav-link",attrs:{to:{name:"user-followings",params:{id:t.id}}}},[t._v(" 正在跟隨 ")])],1)])},n=[],a={name:"UserFollowsNavTabs",data:function(){return{id:-1}},created:function(){var t=this.$route.params.id;this.id=t}},s=a,i=(o("c08f"),o("2877")),l=Object(i["a"])(s,r,n,!1,null,"b8ab7340",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-1706dda0.97cd8053.js.map