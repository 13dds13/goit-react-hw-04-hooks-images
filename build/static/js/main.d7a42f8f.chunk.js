(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"BASE_URL":"https://pixabay.com/api/?","KEY":"23300016-a284ec07e988de3edbd291fb8","searchOptions":{"image_type":"photo","orientation":"horizontal","per_page":12}}')},18:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(12),c=n.n(r),o=(n(18),n(10)),i=n(4),s=n.n(i),u=n(7),l=n(3),m=n(9),b=n(8),j=n.n(b),g=n(13),h=function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(n=e.sent,e.prev=3,!n.ok){e.next=6;break}return e.abrupt("return",n.json());case 6:throw new Error("Ooops, something went wrong!");case 9:return e.prev=9,e.t0=e.catch(3),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),f=h,d=function(e){var t=e.curPage,n=e.query,a=e.KEY,r=e.BASE_URL,c=e.searchOptions,o=new URLSearchParams(Object(l.a)({q:n,page:t,key:a},c));return"".concat(r).concat(o)},O=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},p=n(0),v=function(e){var t=e.onShowMoreBtn,n=e.isLoading;return Object(p.jsx)("button",{className:"Button",type:"button",onClick:t,children:n?Object(p.jsx)(j.a,{type:"ThreeDots",color:"#6186d6",height:200,width:200,timeout:3e3}):Object(p.jsx)("p",{children:"Load more"})})},w=function(e){var t=e.images,n=e.onImgClick;return t.map((function(e){return Object(p.jsx)("li",{className:"ImageGalleryItem",children:Object(p.jsx)("img",{src:e.webformatURL,alt:e.tags,className:"ImageGalleryItem-image",onClick:function(){return n(e.largeImageURL)}})},e.webformatURL)}))},x=function(e){var t=e.images,n=e.onShowMoreBtn,a=e.onImgClick,r=e.isLoading;return!!t.length&&Object(p.jsxs)("ul",{className:"ImageGallery",children:[Object(p.jsx)(w,{images:t,onImgClick:a}),Object(p.jsx)(v,{onShowMoreBtn:n,isLoading:r})]})},L=function(e){var t=e.onModalClosing,n=e.imageURL,r=function(e){t(e)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}})),Object(p.jsx)("div",{className:"Overlay",onClick:t,children:Object(p.jsx)("div",{className:"Modal",children:Object(p.jsx)("img",{src:n,alt:"large"})})})},y=function(e){var t=e.onSubmite,n=Object(a.useState)(""),r=Object(m.a)(n,2),c=r[0],o=r[1];return Object(p.jsx)("header",{className:"Searchbar",children:Object(p.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(c)},children:[Object(p.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(p.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(p.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){return o(e.target.value)}})]})})},S={images:[],query:"",modalData:"",isLoading:!1},k=function(){var e=Object(a.useState)(Object(l.a)({},S)),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useRef)(1),i=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v(t),e.prev=1,k(),e.next=5,f(n);case 5:a=e.sent,r=a.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags}})),b(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:return e.prev=13,O(),k(),e.finish(13);case 17:case"end":return e.stop()}}),e,null,[[1,10,13,17]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){1!==c.current?r((function(t){return Object(l.a)(Object(l.a)({},t),{},{images:[].concat(Object(o.a)(t.images),Object(o.a)(e))})})):r((function(t){return Object(l.a)(Object(l.a)({},t),{},{images:Object(o.a)(e)})}))},h=function(){c.current=1},v=function(e){var t=c.current,n=Object(l.a)({query:e,curPage:t},g);return d(n)},w=function(){c.current+=1},k=function(){r((function(e){return Object(l.a)(Object(l.a)({},e),{},{isLoading:!e.isLoading})}))},I=n.images,R=n.isLoading,N=n.modalData;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y,{onSubmite:function(e){h(),r((function(t){return Object(l.a)(Object(l.a)({},t),{},{query:e})})),i(e)}}),R&&!I.length&&Object(p.jsx)(j.a,{type:"ThreeDots",color:"#1539ad",height:100,width:100,timeout:3e3}),Object(p.jsx)(x,{images:I,onShowMoreBtn:function(){var e=n.query;w(),i(e)},onImgClick:function(e){r((function(t){return Object(l.a)(Object(l.a)({},t),{},{modalData:e})}))},isLoading:R}),N&&Object(p.jsx)(L,{imageURL:N,onModalClosing:function(e){e.target!==e.currentTarget&&"Escape"!==e.code||r((function(e){return Object(l.a)(Object(l.a)({},e),{},{modalData:""})}))}})]})};c.a.render(Object(p.jsx)(k,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d7a42f8f.chunk.js.map