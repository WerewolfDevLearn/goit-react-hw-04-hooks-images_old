(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{21:function(e,t,a){e.exports={Container:"Loader_Container__21DKx"}},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),o=a(17),i=a.n(o),s=a(8),u=a(4);var l=function(e){var t=e.onSubmitForm,a=Object(c.useState)(""),r=Object(u.a)(a,2),o=r[0],i=r[1];return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{id:"form",onSubmit:function(e){e.preventDefault(),t(o),i("")},className:"SearchForm",children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"inputValue",value:o,id:"input",onChange:function(e){var t=e.target.value;i(t)}})]})})};var j=function(e){var t=e.webformatURL,a=e.alt,c=e.largeImageURL,r=e.id,o=e.onImageClick;return Object(n.jsx)("img",{src:t,alt:a,className:"ImageGalleryItem-image","data-largeimageurl":c,"data-id":r,onClick:function(e){o({url:e.target.dataset.largeimageurl,alt:e.target.alt})}})};var b=function(e){var t=e.images,a=e.onImageClick;return Object(n.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(n.jsx)("li",{className:"ImageGalleryItem",children:Object(n.jsx)(j,{webformatURL:e.webformatURL,alt:e.tags,largeImageURL:e.largeImageURL,id:e.id,onImageClick:a})},e.id)}))})};var m=function(e){var t=e.text,a=e.buttonAction;return Object(n.jsx)("div",{className:"buttonContainer",children:Object(n.jsx)("button",{type:"button",onClick:a,className:"Button",children:t})})},d=a(18),f=a(19),g=a(24),O=a(23),h=a(20),p=a.n(h),v=a(21),x=a.n(v),S=function(e){Object(g.a)(a,e);var t=Object(O.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:x.a.Container,children:Object(n.jsx)(p.a,{type:"Puff",color:"#0F7A8F",height:100,width:100,timeout:3e3})})}}]),a}(c.Component);var y=function(e){var t=e.onCloseModal,a=e.children;Object(c.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r),t()}}));var r=function(e){console.log(e),"Escape"===e.code&&t()};return Object(n.jsx)("div",{className:"Overlay",onClick:t,children:Object(n.jsx)("div",{className:"Modal",children:a})})},w=a(2),C=a.n(w);function I(e){var t=e.largeImage,a=t.alt,c=t.url;return Object(n.jsx)("img",{src:c,alt:a,width:"600"})}I.protoType={largeImage:C.a.exact({alt:C.a.string.isRequired,url:C.a.string.isRequired}).isRequired};var k=I,N=a(22),R=a.n(N),F=function(e,t){return R.a.get("https://pixabay.com/api/?key=".concat("17822127-e9a9a0a140ac0dca1ff979a25","&q=").concat(e,"&image_type=photo&page=").concat(t,"&per_page=12")).then((function(e){return console.log(e.data),e.data}))};var L=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(""),i=Object(u.a)(o,2),j=i[0],d=i[1],f=Object(c.useState)(1),g=Object(u.a)(f,2),O=g[0],h=g[1],p=Object(c.useState)(null),v=Object(u.a)(p,2),x=v[0],w=v[1],C=Object(c.useState)(null),I=Object(u.a)(C,2),N=I[0],R=I[1],L=Object(c.useState)(!1),E=Object(u.a)(L,2),U=E[0],_=E[1],q=Object(c.useState)(!1),M=Object(u.a)(q,2),A=M[0],G=M[1];function B(){_(!0),F(j,O).then((function(e){r((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e.hits))})),h((function(e){return e+1})),D(e),console.log(e)})).catch((function(e){return R(e)})).finally((function(){return _(!1)}))}Object(c.useEffect)((function(){j&&B()}),[j]),Object(c.useEffect)((function(){O>2&&H()}),[O]);var D=function(e){var t=e.totalHits-12*O;G(t<=0)},H=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l,{onSubmitForm:function(e){d(e),h(1),r([])}}),a.length>0&&Object(n.jsx)(b,{images:a,onImageClick:w}),x&&Object(n.jsx)(y,{onCloseModal:function(){w(null)},children:Object(n.jsx)(k,{largeImage:x})}),a.length>0&&!A&&!U&&Object(n.jsx)(m,{text:"Load more",buttonAction:B}),U&&Object(n.jsx)(S,{}),N&&Object(n.jsx)("p",{children:"ERROR"})]})};a(69),a(70);i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.eaf9f7c1.chunk.js.map