(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(19),o=a.n(s),r=(a(67),a(39)),i=a.n(r),l=a(50),u=a(15),p=(a(69),a(70),a(128)),d=a(24),j=d.a.initializeApp({apiKey:"AIzaSyCHP2i2BbClrFviS_jWfiTai7U5nhfgszo",authDomain:"instagram-clone-94052.firebaseapp.com",projectId:"instagram-clone-94052",storageBucket:"instagram-clone-94052.appspot.com",messagingSenderId:"1028378616626",appId:"1:1028378616626:web:f75101ff41cf6739276d2b"}).firestore(),m=d.a.auth(),b=d.a.storage(),g=a(5);var f=function(e){var t=e.postId,a=e.user,c=e.username,s=e.caption,o=e.imageURL,r=Object(n.useState)([]),i=Object(u.a)(r,2),l=i[0],m=i[1],b=Object(n.useState)(""),f=Object(u.a)(b,2),h=f[0],O=f[1];return Object(n.useEffect)((function(){var e;return t&&(e=j.collection("posts").doc(t).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){m(e.docs.map((function(e){return e.data()})))}))),function(){e()}}),[t]),Object(g.jsxs)("div",{className:"post",children:[Object(g.jsxs)("div",{className:"post__header",children:[Object(g.jsx)(p.a,{className:"post__avatar",alt:c,src:"/static/images/avatar/1.jpg"}),Object(g.jsx)("h3",{children:c})]}),Object(g.jsx)("img",{className:"post__image",src:o,alt:"post"}),Object(g.jsxs)("h4",{className:"post__text",children:[Object(g.jsxs)("strong",{children:[c,"  "]}),Object(g.jsx)("span",{className:"post__caption",children:s})," "]}),Object(g.jsx)("div",{className:"post__comments",children:l.map((function(e){return Object(g.jsxs)("p",{children:[Object(g.jsx)("b",{children:e.username})," ",e.text]})}))}),a&&Object(g.jsxs)("form",{className:"post__commentBox",children:[Object(g.jsx)("input",{className:"post__input",type:"text",placeholder:"Add a comment...",value:h,onChange:function(e){return O(e.target.value)}}),Object(g.jsx)("button",{disabled:!h,className:"post__button",type:"submit",onClick:function(e){e.preventDefault(),j.collection("posts").doc(t).collection("comments").add({text:h,username:a.displayName,timestamp:d.a.firestore.FieldValue.serverTimestamp()}),O("")},children:"Post"})]})]})},h=a(124),O=a(125),x=a(127),v=a(126),_=(a(81),a(56)),N=a.n(_).a.create({baseURL:"https://gorgeous-kings-canyon-63792.herokuapp.com/"});var y=function(e){var t=e.username,a=Object(n.useState)(""),c=Object(u.a)(a,2),s=c[0],o=c[1],r=Object(n.useState)(null),i=Object(u.a)(r,2),l=i[0],p=i[1],m=Object(n.useState)(0),f=Object(u.a)(m,2),h=f[0],O=f[1],x=Object(n.useState)(""),_=Object(u.a)(x,2),y=(_[0],_[1]);return Object(g.jsxs)("div",{className:"imageupload",children:[Object(g.jsx)("progress",{className:"imageupload__progress",value:h,max:"100"}),Object(g.jsx)("input",{type:"text",placeholder:"Enter a Caption...",onChange:function(e){return o(e.target.value)},value:s}),Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&p(e.target.files[0])}}),Object(g.jsx)(v.a,{className:"imageUpload__button",onClick:function(){b.ref("images/".concat(l.name)).put(l).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);O(t)}),(function(e){console.log(e),alert(e.message)}),(function(){b.ref("images").child(l.name).getDownloadURL().then((function(e){y(e),N.post("/upload",{caption:s,user:t,image:e}),j.collection("posts").add({timestamp:d.a.firestore.FieldValue.serverTimestamp(),caption:s,imageURL:e,username:t}),O(0),o(""),p(null)}))}))},children:"Upload"})]})]})},w=a(57),C=a(59),S=a.n(C);function k(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var U=Object(h.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var T=function(){var e=U(),t=c.a.useState(k),a=Object(u.a)(t,1)[0],s=Object(n.useState)([]),o=Object(u.a)(s,2),r=o[0],d=o[1],j=Object(n.useState)(!1),b=Object(u.a)(j,2),h=b[0],_=b[1],C=Object(n.useState)(""),T=Object(u.a)(C,2),L=T[0],A=T[1],E=Object(n.useState)(""),F=Object(u.a)(E,2),I=F[0],R=F[1],D=Object(n.useState)(""),P=Object(u.a)(D,2),W=P[0],B=P[1],V=Object(n.useState)(null),J=Object(u.a)(V,2),Q=J[0],Z=J[1],G=Object(n.useState)(!1),Y=Object(u.a)(G,2),z=Y[0],M=Y[1];Object(n.useEffect)((function(){var e=m.onAuthStateChanged((function(e){if(e){if(console.log(e),Z(e),!e.displayName)return e.updateProfile({displayName:L})}else Z(null)}));return function(){e()}}),[Q,L]);var H=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/sync").then((function(e){console.log(e),d(e.data)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){new S.a("69305f7a54611f242df4",{cluster:"mt1"}).subscribe("posts").bind("inserted",(function(e){console.log("data recieved",e),H()}))}),[]),Object(n.useEffect)((function(){H()}),[]),console.log("posts are >>>",r),Object(g.jsxs)("div",{className:"app",children:[Object(g.jsx)(O.a,{open:h,onClose:function(){return _(!1)},children:Object(g.jsx)("div",{style:a,className:e.paper,children:Object(g.jsxs)("form",{className:"app__signup",children:[Object(g.jsx)("center",{children:Object(g.jsx)("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""})}),Object(g.jsx)(x.a,{type:"text",placeholder:"username",value:L,onChange:function(e){return A(e.target.value)}}),Object(g.jsx)(x.a,{placeholder:"email",type:"text",value:W,onChange:function(e){return B(e.target.value)}}),Object(g.jsx)(x.a,{placeholder:"password",type:"password",value:I,onChange:function(e){return R(e.target.value)}}),Object(g.jsx)(v.a,{type:"submit",onClick:function(e){e.preventDefault(),m.createUserWithEmailAndPassword(W,I).then((function(e){return e.user.updateProfile({displayName:L})})).catch((function(e){return alert(e.message)}))},children:"Sign Up"})]})})}),Object(g.jsx)(O.a,{open:z,onClose:function(){return M(!1)},children:Object(g.jsx)("div",{style:a,className:e.paper,children:Object(g.jsxs)("form",{className:"app__login",children:[Object(g.jsx)("center",{children:Object(g.jsx)("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""})}),Object(g.jsx)(x.a,{placeholder:"email",type:"text",value:W,onChange:function(e){return B(e.target.value)}}),Object(g.jsx)(x.a,{placeholder:"password",type:"password",value:I,onChange:function(e){return R(e.target.value)}}),Object(g.jsx)(v.a,{type:"submit",onClick:function(e){e.preventDefault(),m.signInWithEmailAndPassword(W,I).catch((function(e){return alert(e.message)})),M(!1)},children:"Login"})]})})}),Object(g.jsxs)("div",{className:"app__header",children:[Object(g.jsx)("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""}),(null===Q||void 0===Q?void 0:Q.displayName)?Object(g.jsxs)("div",{className:"app__headerRight",children:[Object(g.jsx)(v.a,{onClick:function(){return m.signOut()},children:"Logout"}),Object(g.jsx)(p.a,{className:"app__headerAvatar",alt:Q.displayName,src:"/static/images/avatar/1.jpg"})]}):Object(g.jsxs)("form",{className:"app__loginHome",children:[Object(g.jsx)(v.a,{onClick:function(){return M(!0)},children:"Login"}),Object(g.jsx)(v.a,{onClick:function(){return _(!0)},children:"Sign Up"})]})]}),Object(g.jsxs)("div",{className:"app__posts",children:[Object(g.jsx)("div",{className:"app__postsLeft",children:r.map((function(e){return Object(g.jsx)(f,{postId:e._id,user:Q,username:e.user,caption:e.caption,imageURL:e.image},e._id)}))}),Object(g.jsx)("div",{className:"app__postsRight",children:Object(g.jsx)(w.a,{url:"https://www.instagram.com/p/CLPQDA2hECf/",clientAccessToken:"IGQVJYYWlwWDkzVWRPZA2p5cWFUclMxaXZABTFdsNWpBT2Q0YmVPUmFONkE5b3FEdktGTnNJMUoyZADdLVGxQcjRjU05RUjdQYUtDQktJN2xLT3E2TEVtTkNGZAWRTTTJ0aGY2RlE5ckJfWFBHQjdfb1VFUwZDZD",maxWidth:320,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}})})]}),(null===Q||void 0===Q?void 0:Q.displayName)?Object(g.jsx)("div",{className:"app__upload",children:Object(g.jsx)(y,{username:Q.displayName})}):Object(g.jsxs)("center",{children:[Object(g.jsx)("h3",{children:"Sorry you need to login to upload"}),"  "]})]})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,130)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))};o.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root")),L()},67:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},81:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.e2ee33eb.chunk.js.map