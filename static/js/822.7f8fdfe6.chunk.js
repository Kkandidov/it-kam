"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[822],{2918:function(t,e,s){s.d(e,{D:function(){return o},E:function(){return A}});var n=s(1413),r=s(7689),u=(s(2791),s(8687)),a=s(184);function A(t){return function(e){var s=(0,r.TH)(),u=(0,r.s0)(),A=(0,r.UO)();return(0,a.jsx)(t,(0,n.Z)((0,n.Z)({},e),{},{router:{location:s,navigate:u,params:A}}))}}var i=function(t){return{isAuth:t.auth.isAuth}};function o(t){return(0,u.$j)(i)((function(e){return e.isAuth?(0,a.jsx)(t,(0,n.Z)({},e)):(0,a.jsx)(r.Fg,{to:"/login"})}))}},1822:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var n=s(1413),r=s(5671),u=s(3144),a=s(136),A=s(516),i=s(2791),o="ProfileName_description__RaS8S",c=s(7308),h=s(885),E=s(184),p=function(t){var e=(0,i.useState)(!1),s=(0,h.Z)(e,2),n=s[0],r=s[1],u=(0,i.useState)(t.status),a=(0,h.Z)(u,2),A=a[0],o=a[1];(0,i.useEffect)((function(){o(t.status)}),[t.status]);return(0,E.jsxs)("div",{children:[!n&&(0,E.jsx)("div",{children:(0,E.jsx)("span",{onDoubleClick:function(){r(!0)},children:t.status})}),n&&(0,E.jsx)("div",{children:(0,E.jsx)("input",{onChange:function(t){o(t.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),t.updateStatus(A)},value:A})})]})},d=function(t){return t.profile?(0,E.jsx)("div",{children:(0,E.jsxs)("div",{className:o,children:[(0,E.jsx)("div",{children:(0,E.jsx)("img",{src:t.profile.photos.large})}),(0,E.jsx)(p,{status:t.status,updateStatus:t.updateStatus})]})}):(0,E.jsx)("div",{children:(0,E.jsx)(c.Z,{})})},l="MyPosts_postsBlock__gKOic",Q="MyPosts_posts__9Wrux",C="Post_item__cVsa3",x=function(t){return(0,E.jsxs)("div",{className:C,children:[(0,E.jsx)("img",{src:"data:image/jpeg;base64,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"}),t.message,(0,E.jsxs)("div",{children:[(0,E.jsx)("span",{children:"like "}),(0,E.jsx)("span",{children:t.likeCount})]})]})},f=s(6139),j=s(704),g=s(3419),S=s(2512),m=(0,j.Z)({form:"NewPost"})((function(t){return(0,E.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,E.jsx)(f.Z,{name:"newPost",placeholder:"add new post",component:S.gx,validate:[g.C,(0,g.p)(10)]}),(0,E.jsx)("div",{children:(0,E.jsx)("button",{children:"Add post"})})]})})),I=i.memo((function(t){var e=t.postData.map((function(t){return(0,E.jsx)(x,{message:t.message,likeCount:t.likeCount})}));return(0,E.jsxs)("div",{className:l,children:[(0,E.jsx)("h3",{children:"My posts"}),(0,E.jsx)(m,{onSubmit:function(e){return t.addPost(e.newPost)}}),(0,E.jsx)("div",{className:Q,children:e})]})})),v=s(3101),k=s(8687),D=(0,k.$j)((function(t){return{postData:t.profilePage.postData,newPost:t.profilePage.newPost}}),(function(t){return{addPost:function(e){return t((0,v.Wl)(e))}}}))(I),J=function(t){return(0,E.jsxs)("div",{children:[(0,E.jsx)(d,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,E.jsx)(D,{})]})},N=s(2918),P=s(7781),Y=function(t){(0,a.Z)(s,t);var e=(0,A.Z)(s);function s(){return(0,r.Z)(this,s),e.apply(this,arguments)}return(0,u.Z)(s,[{key:"componentDidMount",value:function(){var t=this.props.router.params.profileId;t||(t=this.props.userId),this.props.getProfile(t),this.props.setStatus(t)}},{key:"render",value:function(){return(0,E.jsx)(J,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(i.Component),B={getProfile:v.Ai,setStatus:v.Tf,updateStatus:v.Nf},y=(0,P.qC)((0,k.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.userStatus,userId:t.auth.userId}}),B),N.E,N.D)(Y)}}]);
//# sourceMappingURL=822.7f8fdfe6.chunk.js.map