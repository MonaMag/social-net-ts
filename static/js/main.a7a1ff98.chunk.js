(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",dialog:"Dialogs_dialog__lk_cw",messages:"Dialogs_messages__1w_Up",newMessage:"Dialogs_newMessage__1cWkx"}},14:function(e,s,t){e.exports={wrapper:"Users_wrapper__3zs-t",userPhoto:"Users_userPhoto__17MJB",btn:"Users_btn__9AIH5",userInfo:"Users_userInfo__21fTd",userInfoPart:"Users_userInfoPart__Q8ms-"}},23:function(e,s,t){e.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c"}},25:function(e,s,t){e.exports={header:"Header_header__1VCKf"}},26:function(e,s,t){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3cd8Y"}},27:function(e,s,t){e.exports={item:"Post_item__ihtu9"}},32:function(e,s,t){},33:function(e,s,t){},40:function(e,s,t){"use strict";t.r(s);var n=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(s){var t=s.getCLS,n=s.getFID,a=s.getFCP,c=s.getLCP,i=s.getTTFB;t(e),n(e),a(e),c(e),i(e)}))},a=(t(1),t(17)),c=t.n(a),i=(t(32),t(33),t(25)),r=t.n(i),o=t(0);var d=function(e){return Object(o.jsx)("header",{className:r.a.header,children:Object(o.jsx)("img",{src:"https://camo.githubusercontent.com/d425a598a348014050fa0e9bb9b09b820795df5c89bb7131abad448f87ff1491/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f636f6465727372616e6b2e737667"})})},l=t(10),u=t(9),j=t.n(u);var b=function(e){return Object(o.jsxs)("nav",{className:j.a.nav,children:[Object(o.jsx)("div",{className:j.a.item,children:Object(o.jsx)(l.b,{to:"/profile",activeClassName:j.a.activeLink,children:"Profile"})}),Object(o.jsx)("div",{className:j.a.item,children:Object(o.jsx)(l.b,{to:"/dialogs",activeClassName:j.a.activeLink,children:"Messages"})}),Object(o.jsx)("div",{className:j.a.item,children:Object(o.jsx)(l.b,{to:"/news",activeClassName:j.a.activeLink,children:"News"})}),Object(o.jsx)("div",{className:j.a.item,children:Object(o.jsx)(l.b,{to:"/music",activeClassName:j.a.activeLink,children:"Music"})}),Object(o.jsx)("div",{className:j.a.item,children:Object(o.jsx)(l.b,{to:"/settings",activeClassName:j.a.activeLink,children:"Settings"})})]})},O=t(26),f=t.n(O);var g=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:"https://www.thinkingbusinessblog.com/wp-content/uploads/2014/12/step-up-1000x430.jpg"}),Object(o.jsx)("div",{className:f.a.descriptionBlock,children:"ava + description"})]})},m=t(13),h=t(4),x="ADD-POST",p="UPDATE-NEW-POST-TEXT",v={posts:[{id:1,message:"Hi",likesCount:12},{id:2,message:"How are you?!",likesCount:20},{id:3,message:"Hi, my dear!",likesCount:18},{id:4,message:"Where are you!",likesCount:25}],newPostText:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case x:var t={id:e.posts.length+1,message:e.newPostText,likesCount:0};return Object(h.a)(Object(h.a)({},e),{},{posts:[].concat(Object(m.a)(e.posts),[t]),newPostText:""});case p:return Object(h.a)(Object(h.a)({},e),{},{newPostText:s.newText});default:return e}},w=t(12),N=t(23),P=t.n(N),y=t(27),k=t.n(y);var T=function(e){return Object(o.jsxs)("div",{className:k.a.item,children:[Object(o.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7TRTvspdse0xZ8rttWKwKYKzjMnsMi7dXpJr6EdyHRwRJqRsog_fY1EoCiLJBo6vejA&usqp=CAU"}),e.message,Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"like"})," ",e.likesCount]})]})};var C=function(e){var s=e.posts.map((function(e){return Object(o.jsx)(T,{id:e.id,message:e.message,likesCount:e.likesCount},e.id)}));return Object(o.jsxs)("div",{className:P.a.postsBlock,children:[Object(o.jsx)("h3",{children:"My posts"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("textarea",{onChange:function(s){e.updateNewPostText(s.currentTarget.value)},value:e.newPostText})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(){""!==e.newPostText.trim()&&e.addPost(e.newPostText)},children:"Add post"})})]}),Object(o.jsx)("div",{className:P.a.posts,children:s})]})},M=Object(w.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(s){""!==s.trim()&&e({type:x})},updateNewPostText:function(s){e(function(e){return{type:p,newText:e}}(s))}}}))(C);var I=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(g,{}),Object(o.jsx)(M,{})]})},U=t(3);var B=function(e){return Object(o.jsx)("div",{children:"News"})};var E=function(e){return Object(o.jsx)("div",{children:"Music"})};var S=function(e){return Object(o.jsx)("div",{children:"Settings"})},A="UPDATE-NEW-MESSAGE-BODY",D="SEND-MESSAGE",L={dialogs:[{id:1,name:"Hanna"},{id:2,name:"Kira"},{id:3,name:"Tim"},{id:4,name:"Sasha"},{id:5,name:"Anna"},{id:6,name:"Ali"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?!"},{id:3,message:"Hi, my dear!"},{id:4,message:"Where are you?"}],newMessageBody:""},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case A:return Object(h.a)(Object(h.a)({},e),{},{newMessageBody:s.body});case D:var t=e.newMessageBody;return Object(h.a)(Object(h.a)({},e),{},{newMessageBody:"",messages:[].concat(Object(m.a)(e.messages),[{id:6,message:t}])});default:return e}},R=t(11),W=t.n(R);var F=function(e){return Object(o.jsx)("div",{className:W.a.dialog+" "+W.a.active,children:Object(o.jsx)(l.b,{to:"/dialogs/"+e.id,children:e.name})})};var K=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:W.a.dialog,children:e.message})})};var J=function(e){var s=e.dialogsPage.dialogs.map((function(e){return Object(o.jsx)(F,{name:e.name,id:e.id},e.id)})),t=e.dialogsPage.messages.map((function(e){return Object(o.jsx)(K,{message:e.message,id:e.id},e.id)})),n=e.dialogsPage.newMessageBody;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:W.a.dialogs,children:[Object(o.jsx)("div",{className:W.a.dialogsItems,children:s}),Object(o.jsxs)("div",{className:W.a.messages,children:[Object(o.jsx)("div",{children:t}),Object(o.jsxs)("div",{className:W.a.newMessage,children:[Object(o.jsx)("div",{children:Object(o.jsx)("textarea",{value:n,onChange:function(s){e.newMessageChange(s.currentTarget.value)},placeholder:"Enter your message"})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(){e.sendMessage(n)},children:"Send"})})]})]})]})})},Y=Object(w.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(){e({type:D})},newMessageChange:function(s){e({type:A,body:s})}}}))(J),q="FOLLOW",z="UNFOLLOW",G="SET_USERS",Z={users:[]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case q:return Object(h.a)(Object(h.a)({},e),{},{users:e.users.map((function(e){return e.id===s.userId?Object(h.a)(Object(h.a)({},e),{},{followed:!0}):e}))});case z:return Object(h.a)(Object(h.a)({},e),{},{users:e.users.map((function(e){return e.id===s.userId?Object(h.a)(Object(h.a)({},e),{},{followed:!1}):e}))});case G:return Object(h.a)(Object(h.a)({},e),{},{users:[].concat(Object(m.a)(e.users),Object(m.a)(s.users))});default:return e}},X=t(14),V=t.n(X);var $=function(e){return 0===e.users.length&&e.setUsers([{id:1,photoUrl:"https://klike.net/uploads/posts/2019-12/1576662740_32.jpg",fullName:"Dmitry",status:"I am a  boss",location:{city:"Minsk",country:"Belarus"},followed:!1},{id:2,photoUrl:"https://klike.net/uploads/posts/2019-12/1576662740_32.jpg",fullName:"Sasha",status:"I am a  boss",location:{city:"Moscow",country:"Russia"},followed:!1},{id:3,photoUrl:"https://klike.net/uploads/posts/2019-12/1576662740_32.jpg",fullName:"Andrew",status:"I am a  boss too",location:{city:"Kiev",country:"Ukraine"},followed:!1}]),Object(o.jsx)("div",{children:e.users.map((function(s){return Object(o.jsxs)("div",{className:V.a.wrapper,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:s.photoUrl,className:V.a.userPhoto})}),Object(o.jsx)("div",{className:V.a.btn,children:s.followed?Object(o.jsx)("button",{onClick:function(){return e.unfollow(s.id)},children:"Unfollow"}):Object(o.jsx)("button",{onClick:function(){return e.follow(s.id)},children:"Follow"})})]}),Object(o.jsxs)("div",{className:V.a.userInfo,children:[Object(o.jsxs)("div",{className:V.a.userInfoPart,children:[Object(o.jsx)("div",{children:s.fullName}),Object(o.jsx)("div",{children:s.status})]}),Object(o.jsxs)("div",{className:V.a.userInfoPart,children:[Object(o.jsx)("div",{children:s.location.country}),Object(o.jsx)("div",{children:s.location.city})]})]})]},s.id)}))})},ee=Object(w.b)((function(e){return{users:e.usersPage.users}}),(function(e){return{follow:function(s){e(function(e){return{type:q,userId:e}}(s))},unfollow:function(s){e(function(e){return{type:z,userId:e}}(s))},setUsers:function(s){e(function(e){return{type:G,users:e}}(s))}}}))($);var se=function(){return Object(o.jsxs)("div",{className:"app-wrapper",children:[Object(o.jsx)(d,{}),Object(o.jsx)(b,{}),Object(o.jsxs)("div",{className:"app-wrapper-content",children:[Object(o.jsx)(U.a,{path:"/profile",render:function(){return Object(o.jsx)(I,{})}}),Object(o.jsx)(U.a,{path:"/dialogs",render:function(){return Object(o.jsx)(Y,{})}}),Object(o.jsx)(U.a,{path:"/news",render:function(){return Object(o.jsx)(B,{})}}),Object(o.jsx)(U.a,{path:"/music",render:function(){return Object(o.jsx)(E,{})}}),Object(o.jsx)(U.a,{path:"/settings",render:function(){return Object(o.jsx)(S,{})}}),Object(o.jsx)(U.a,{path:"/users",render:function(){return Object(o.jsx)(ee,{})}})]})]})},te=t(24),ne=Object(te.a)({profilePage:_,dialogsPage:H,usersPage:Q}),ae=Object(te.b)(ne);c.a.render(Object(o.jsx)(l.a,{children:Object(o.jsx)(w.a,{store:ae,children:Object(o.jsx)(se,{})})}),document.getElementById("root")),n()},9:function(e,s,t){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE"}}},[[40,1,2]]]);
//# sourceMappingURL=main.a7a1ff98.chunk.js.map