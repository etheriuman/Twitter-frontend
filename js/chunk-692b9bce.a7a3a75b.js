(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-692b9bce"],{"05b5":function(t,e,s){},"0b0f":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{ref:"messageArea",staticClass:"message-area"},[t._l(t.messages,(function(t,e){return s("TextBlock",{key:e,attrs:{message:t}})})),s("div",{ref:"ninja"})],2),-1!==t.chattingRoomId?s("form",{staticClass:"type-area",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit(e)}}},[s("div",{staticClass:"text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",required:""},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),s("button",{staticClass:"submit",attrs:{type:"submit"}},[s("font-awesome-icon",{staticClass:"icon",attrs:{icon:"play"}})],1)]):s("p",{staticClass:"text-center text-muted"},[t._v("選擇一個對象來聊天吧！")])])},r=[],o=s("5530"),i=(s("a9e3"),s("498a"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-block"},["self"===t.message.type?s("div",{staticClass:"bubble bubble-self"},[s("p",{staticClass:"message message-self"},[t._v(t._s(t.message.text))]),s("p",{staticClass:"text-muted text-sm"},[t._v(t._s(t._f("time")(t.message.createdAt)))])]):t._e(),"other"===t.message.type?s("div",{staticClass:"bubble bubble-other"},[s("div",{staticClass:"bubble-other-left"},[s("img",{attrs:{src:t._f("emptyImage")(t.message.userAvatar),alt:"user-avatar"}})]),s("div",{staticClass:"bubble-other-right"},[s("span",{staticClass:"text-muted text-sm other-name"},[t._v(t._s(t.message.userName))]),s("p",{staticClass:"message message-other"},[t._v(t._s(t.message.text))]),s("p",{staticClass:"text-muted text-sm"},[t._v(t._s(t._f("time")(t.message.createdAt)))])])]):t._e(),"system"===t.message.type?s("div",{staticClass:"bubble bubble-system"},[s("p",{staticClass:" message message-system"},[t._v(t._s(t.message.text))])]):t._e()])}),n=[],c=s("2708"),u={props:{message:{default:{userId:-1,type:"",userName:"",suerAvatar:"",text:"",createdAt:""}}},mixins:[c["c"],c["a"]]},l=u,m=(s("4352"),s("2877")),d=Object(m["a"])(l,i,n,!1,null,"16f6de53",null),f=d.exports,g=s("2f62"),h=s("2fa3"),v=s("56d7"),p={components:{TextBlock:f},props:{messages:{type:Array,required:!0},chattingRoomId:{type:Number,default:void 0}},data:function(){return{text:""}},methods:{scrollBottom:function(){this.$refs.ninja.scrollIntoView()},handleSubmit:function(){if(!this.text.trim())return h["a"].fire({icon:"warning",title:"請輸入訊息內容再發送"}),void(this.text="");if(this.chattingRoomId){var t={senderId:this.currentUser.id,roomId:this.chattingRoomId,text:this.text};return console.log("private message sent: ",t),v["socket"].emit("sendPrivate",t),void(this.text="")}var e={userId:this.currentUser.id,text:this.text};console.log("public message sent: ",e),v["socket"].emit("sendPublic",e),this.text=""}},computed:Object(o["a"])({},Object(g["b"])(["currentUser"])),watch:{messages:function(t){this.messages=t}},updated:function(){this.$refs.messageArea.scrollTop=this.$refs.messageArea.scrollHeight}},b=p,C=(s("f607"),Object(m["a"])(b,a,r,!1,null,"47476a46",null));e["a"]=C.exports},4352:function(t,e,s){"use strict";s("ea28")},"47c3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("div",{staticClass:"column-left column"},[s("Navbar")],1),s("div",{staticClass:"column-main column"},[s("div",{staticClass:"card main-content"},[s("ul",{staticClass:"list-group list-group-flush"},[s("PageHead",{attrs:{"static-title":"訊息"}}),t.isLoading?s("p",{staticClass:"loading"},[t._v("努力加載中...")]):t._e(),t._l(t.chats,(function(t){return s("ChatCard",{key:t.id,attrs:{chat:t}})}))],2)])]),s("div",{staticClass:"column-right column"},[s("PageHead",{attrs:{"static-title":t.chattingUser.name}}),s("ChatRoom",{attrs:{messages:t.messages,"chatting-room-id":t.chattingRoomId}})],1)])},r=[],o=s("2909"),i=s("5530"),n=(s("d81d"),s("159b"),s("d178")),c=s("cb06"),u=s("0b0f"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"list-group-item",attrs:{to:{name:"chat-private",params:{id:t.chat.User.id}}}},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"card-body-side"},[s("router-link",{attrs:{to:{name:"user-tweets",params:{id:t.chat.User.id}}}},[s("img",{staticClass:"avatar",attrs:{src:t._f("emptyImage")(t.chat.User.avatar),alt:""}})])],1),s("div",{staticClass:"card-body-content"},[s("div",{staticClass:"content-header"},[s("span",{staticClass:"user-name"},[t._v(t._s(t.chat.User.name))]),s("span",{staticClass:"text-muted"},[t._v(t._s(t.chat.User.account))])]),s("div",{staticClass:"content-body text-muted text-sm"},[t._v(" "+t._s(t.chat.lastMessage)+" ")]),s("div",{staticClass:"content-body text-muted text-sm"},[t._v(" "+t._s(t._f("fromNow")(t.chat.createdAt))+" ")])])])])},m=[],d=s("2708"),f={props:{chat:{type:Object,required:!0}},mixins:[d["a"],d["b"]]},g=f,h=(s("c3ca"),s("2877")),v=Object(h["a"])(g,l,m,!1,null,"3297baa7",null),p=v.exports,b=s("2f62"),C=s("56d7"),x={components:{Navbar:n["a"],PageHead:c["a"],ChatRoom:u["a"],ChatCard:p},data:function(){return{isLoading:!1,chats:[],chattingUser:{},chattingRoomId:-1,messages:[]}},methods:{joinRoom:function(t){var e={senderId:this.currentUser.id,receiverId:parseInt(t)};C["socket"].emit("joinRoom",e),console.log("joinRoom!",e)},getMessages:function(t){C["socket"].emit("privateMessages",t)},getChatRooms:function(){console.log("getChatRooms!");var t={userId:this.currentUser.id};C["socket"].emit("getChatRooms",t)}},computed:Object(i["a"])({},Object(b["b"])(["currentUser"])),mounted:function(){this.getChatRooms();var t=this.$route.params.id;console.log("targetUser id: ",t),"all"!==t&&this.joinRoom(t)},beforeRouteUpdate:function(t,e,s){var a=t.params.id;console.log("targetUser id: ",a),"all"!==a&&(this.joinRoom(a),s())},created:function(){var t=this;C["socket"].removeAllListeners(),C["socket"].on("receiveChatRooms",(function(e){console.log("receiveChatRooms: ",e),t.chats=Object(o["a"])(e)})),C["socket"].on("receiveJoinRoom",(function(e){console.log("receiveJoinRoom: ",e),t.chats.every((function(t){return t.roomId!==e.roomId}))&&(console.log("push chat init"),t.chats.push(e)),t.chattingUser=Object(i["a"])(Object(i["a"])({},t.chattingUser),e.User),t.chattingRoomId=e.roomId,t.getMessages(e.roomId)})),C["socket"].on("getPrivateMessages",(function(e){console.log("getPrivateMessages: ",e),t.messages=Object(o["a"])(e),t.messages=e.map((function(e){return e.userId===t.currentUser.id?Object(i["a"])(Object(i["a"])({},e),{},{type:"self"}):Object(i["a"])(Object(i["a"])({},e),{},{type:"other"})}))})),C["socket"].on("receivePrivate",(function(e){console.log("receivePrivate: ",e);var s=e.userId,a=e.userName,r=e.userAvatar,o=e.text,i=e.createdAt,n=e.roomId,c="";c=s===t.currentUser.id?"self":"other";var u={userId:s,type:c,userName:a,userAvatar:r,text:o,createdAt:i};t.chattingRoomId===n&&t.messages.push(u),t.chats.forEach((function(t){t.roomId===n&&(t.lastMessage=o,t.createdAt=i)}))})),C["socket"].on("receiveNewRoom",(function(e){console.log("receive new room: ",e),e.User.id!==t.currentUser.id&&t.chats.push(e)}))}},_=x,I=(s("f463"),Object(h["a"])(_,a,r,!1,null,"e0600dba",null));e["default"]=I.exports},"498a":function(t,e,s){"use strict";var a=s("23e7"),r=s("58a8").trim,o=s("c8d2");a({target:"String",proto:!0,forced:o("trim")},{trim:function(){return r(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var a=s("1d80"),r=s("5899"),o="["+r+"]",i=RegExp("^"+o+o+"*"),n=RegExp(o+o+"*$"),c=function(t){return function(e){var s=String(a(e));return 1&t&&(s=s.replace(i,"")),2&t&&(s=s.replace(n,"")),s}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,s){var a=s("861d"),r=s("d2bb");t.exports=function(t,e,s){var o,i;return r&&"function"==typeof(o=e.constructor)&&o!==s&&a(i=o.prototype)&&i!==s.prototype&&r(t,i),t}},7855:function(t,e,s){},a9e3:function(t,e,s){"use strict";var a=s("83ab"),r=s("da84"),o=s("94ca"),i=s("6eeb"),n=s("5135"),c=s("c6b6"),u=s("7156"),l=s("c04e"),m=s("d039"),d=s("7c73"),f=s("241c").f,g=s("06cf").f,h=s("9bf2").f,v=s("58a8").trim,p="Number",b=r[p],C=b.prototype,x=c(d(C))==p,_=function(t){var e,s,a,r,o,i,n,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(s=u.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+u}for(o=u.slice(2),i=o.length,n=0;n<i;n++)if(c=o.charCodeAt(n),c<48||c>r)return NaN;return parseInt(o,a)}return+u};if(o(p,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var I,y=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof y&&(x?m((function(){C.valueOf.call(s)})):c(s)!=p)?u(new b(_(e)),s,y):_(e)},N=a?f(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),R=0;N.length>R;R++)n(b,I=N[R])&&!n(y,I)&&h(y,I,g(b,I));y.prototype=C,C.constructor=y,i(r,p,y)}},c3ca:function(t,e,s){"use strict";s("05b5")},c8d2:function(t,e,s){var a=s("d039"),r=s("5899"),o="​᠎";t.exports=function(t){return a((function(){return!!r[t]()||o[t]()!=o||r[t].name!==t}))}},cb5c:function(t,e,s){},ea28:function(t,e,s){},f463:function(t,e,s){"use strict";s("7855")},f607:function(t,e,s){"use strict";s("cb5c")}}]);
//# sourceMappingURL=chunk-692b9bce.a7a3a75b.js.map