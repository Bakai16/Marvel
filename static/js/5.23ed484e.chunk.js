(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},216:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var r=a(5),c=a(0),n=a(45),s=a(43),i=a(38),l=a(42),o=(a(104),a.p+"static/media/mjolnir.61f31e18.png"),u=a(4),j=function(e){var t=e.char,a=t.name,r=t.description,c=t.thumbnail,n=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(i={objectFit:"contain"}),Object(u.jsxs)("div",{className:"randomchar__block",children:[Object(u.jsx)("img",{src:c,alt:"Random character",className:"randomchar__img",style:i}),Object(u.jsxs)("div",{className:"randomchar__info",children:[Object(u.jsx)("p",{className:"randomchar__name",children:a}),Object(u.jsx)("p",{className:"randomchar__descr",children:r}),Object(u.jsxs)("div",{className:"randomchar__btns",children:[Object(u.jsx)("a",{href:n,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},b=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),a=t[0],n=t[1],b=Object(l.a)(),m=b.loading,d=b.error,h=b.getCharacter,f=b.clearError;Object(c.useEffect)((function(){p();var e=setInterval(p,6e4);return function(){clearInterval(e)}}),[]);var O=function(e){n(e)},p=function(){f();var e=Math.floor(400*Math.random())+1011e3;h(e).then(O)},x=d?Object(u.jsx)(i.a,{}):null,v=m?Object(u.jsx)(s.a,{}):null,g=m||d||!a?null:Object(u.jsx)(j,{char:a});return Object(u.jsxs)("div",{className:"randomchar",children:[x,v,g,Object(u.jsxs)("div",{className:"randomchar__static",children:[Object(u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(u.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(u.jsx)("button",{onClick:p,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"try it"})}),Object(u.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},m=a(3),d=a.n(m),h=a(7),f=a(6),O=a(228),p=a(229),x=(a(105),function(e){var t=Object(c.useState)([]),a=Object(r.a)(t,2),n=a[0],o=a[1],j=Object(c.useState)(!1),b=Object(r.a)(j,2),m=b[0],x=b[1],v=Object(c.useState)(210),g=Object(r.a)(v,2),_=g[0],y=g[1],N=Object(c.useState)(!1),k=Object(r.a)(N,2),C=k[0],w=k[1],T=Object(l.a)(),S=T.loading,E=T.error,F=T.getAllCharacters;Object(c.useEffect)((function(){I(_,!0)}),[]);var I=function(e,t){x(!t),F(e).then(M)},M=function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=!1,t.length<9&&(a=!0),o([].concat(Object(h.a)(n),Object(h.a)(t))),x(!1),y(_+9),w(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(c.useRef)([]),q=function(e){A.current.forEach((function(e){return e.classList.remove("char__item_selected")})),A.current[e].classList.add("char__item_selected"),A.current[e].focus()};var B=function(t){var a=t.map((function(t,a){var r={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(r={objectFit:"unset"}),Object(u.jsx)(O.a,{timeout:500,classNames:"char__item",children:Object(u.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return A.current[a]=e},onClick:function(){e.onCharSelected(t.id),q(a)},onKeyPress:function(r){" "!==r.key&&"Enter"!==r.key||(e.onCharSelected(t.id),q(a))},children:[Object(u.jsx)("img",{src:t.thumbnail,alt:t.name,style:r}),Object(u.jsx)("div",{className:"char__name",children:t.name})]})},t.id)}));return Object(u.jsx)("ul",{className:"char__grid",children:Object(u.jsx)(p.a,{component:null,children:a})})}(n),R=E?Object(u.jsx)(i.a,{}):null,D=S&&!m?Object(u.jsx)(s.a,{}):null;return Object(u.jsxs)("div",{className:"char__list",children:[R,D,B,Object(u.jsx)("button",{disabled:m,style:{display:C?"none":"block"},className:"button button__main button__long",onClick:function(){return I(_)},children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})}),v=(a(106),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(u.jsxs)("div",{className:"skeleton",children:[Object(u.jsxs)("div",{className:"pulse skeleton__header",children:[Object(u.jsx)("div",{className:"pulse skeleton__circle"}),Object(u.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"})]})]})}),g=(a(107),function(e){var t=e.char,a=t.name,r=t.description,c=t.thumbnail,n=t.homepage,s=t.wiki,i=t.comics,l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(l={objectFit:"contain"}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"char__basics",children:[Object(u.jsx)("img",{src:c,alt:a,style:l}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"char__info-name",children:a}),Object(u.jsxs)("div",{className:"char__btns",children:[Object(u.jsx)("a",{href:n,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(u.jsx)("div",{className:"char__descr",children:r}),Object(u.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(u.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(u.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),_=function(e){var t=Object(c.useState)(null),a=Object(r.a)(t,2),n=a[0],o=a[1],j=Object(l.a)(),b=j.loading,m=j.error,d=j.getCharacter,h=j.clearError;Object(c.useEffect)((function(){f()}),[e.charId]);var f=function(){var t=e.charId;t&&(h(),d(t).then(O))},O=function(e){o(e)},p=n||b||m?null:Object(u.jsx)(v,{}),x=m?Object(u.jsx)(i.a,{}):null,_=b?Object(u.jsx)(s.a,{}):null,y=b||m||!n?null:Object(u.jsx)(g,{char:n});return Object(u.jsxs)("div",{className:"char__info",children:[p,x,_,y]})},y=a(220),N=a(221),k=a(11),C=(a(216),function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(l.a)(),o=s.loading,j=s.error,b=s.getCharacterByName,m=s.clearError,d=function(e){n(e)},h=j?Object(u.jsx)("div",{className:"char__search-critical-error",children:Object(u.jsx)(i.a,{})}):null,f=a?a.length>0?Object(u.jsxs)("div",{className:"char__search-wrapper",children:[Object(u.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",a[0].name," page?"]}),Object(u.jsx)(k.b,{to:"/characters/".concat(a[0].id),className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"To page"})})]}):Object(u.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(u.jsxs)("div",{className:"char__search-form",children:[Object(u.jsx)(y.d,{initialValues:{charName:""},validationSchema:N.a({charName:N.b().required("This field is required")}),onSubmit:function(e){var t,a=e.charName;t=a,m(),b(t).then(d)},children:Object(u.jsxs)(y.c,{children:[Object(u.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(u.jsxs)("div",{className:"char__search-wrapper",children:[Object(u.jsx)(y.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(u.jsx)("button",{type:"submit",className:"button button__main",disabled:o,children:Object(u.jsx)("div",{className:"inner",children:"find"})})]}),Object(u.jsx)(y.a,{component:"div",className:"char__search-error",name:"charName"})]})}),f,h]})}),w=a(10),T=a(13),S=a(14),E=a(15),F=function(e){Object(S.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(w.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={error:!1},e}return Object(T.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(u.jsx)(i.a,{}):this.props.children}}]),a}(c.Component),I=a.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(n.a,{children:[Object(u.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(u.jsx)("title",{children:"Marvel information portal"})]}),Object(u.jsx)(F,{children:Object(u.jsx)(b,{})}),Object(u.jsxs)("div",{className:"char__content",children:[Object(u.jsx)(F,{children:Object(u.jsx)(x,{onCharSelected:function(e){s(e)}})}),Object(u.jsxs)("div",{children:[Object(u.jsx)(F,{children:Object(u.jsx)(_,{charId:a})}),Object(u.jsx)(F,{children:Object(u.jsx)(C,{})})]})]}),Object(u.jsx)("img",{className:"bg-decoration",src:I,alt:"vision"})]})}},38:function(e,t,a){"use strict";var r=a.p+"static/media/error.42292aa1.gif",c=a(4);t.a=function(){return Object(c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error"})}},42:function(e,t,a){"use strict";var r=a(3),c=a.n(r),n=a(6),s=a(5),i=a(0);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(i.useState)(null),o=Object(s.a)(l,2),u=o[0],j=o[1];return{loading:a,request:Object(i.useCallback)(function(){var e=Object(n.a)(c.a.mark((function e(t){var a,n,s,i,l,o=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:null,s=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},r(!0),e.prev=4,e.next=7,fetch(t,{method:a,body:n,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return l=e.sent,r(!1),e.abrupt("return",l);case 17:throw e.prev=17,e.t0=e.catch(4),r(!1),j(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){return j(null)}),[])}}(),t=e.loading,a=e.request,r=e.error,l=e.clearError,o="https://gateway.marvel.com:443/v1/public/",u="apikey=c5d6fc8b83116d92ed468ce36bac6c62",j=function(){var e=Object(n.a)(c.a.mark((function e(){var t,r,n=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:210,e.next=3,a("".concat(o,"characters?limit=9&offset=").concat(t,"&").concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(n.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("".concat(o,"characters?name=").concat(t,"&").concat(u));case 2:return r=e.sent,e.abrupt("return",r.data.results.map(f));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("".concat(o,"characters/").concat(t,"?").concat(u));case 2:return r=e.sent,e.abrupt("return",f(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(c.a.mark((function e(){var t,r,n=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,a("".concat(o,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(n.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("".concat(o,"comics/").concat(t,"?").concat(u));case 2:return r=e.sent,e.abrupt("return",O(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},O=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:t,error:r,clearError:l,getAllCharacters:j,getCharacterByName:b,getCharacter:m,getAllComics:d,getComic:h}}},43:function(e,t,a){"use strict";var r=a(4);t.a=function(){return Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(r.jsx)("g",{transform:"translate(80,50)",children:Object(r.jsx)("g",{transform:"rotate(0)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(r.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(r.jsx)("g",{transform:"rotate(45)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(r.jsx)("g",{transform:"translate(50,80)",children:Object(r.jsx)("g",{transform:"rotate(90)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(r.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(r.jsx)("g",{transform:"rotate(135)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(r.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(r.jsx)("g",{transform:"rotate(180)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(r.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(r.jsx)("g",{transform:"rotate(225)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(r.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(r.jsx)("g",{transform:"rotate(270)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(r.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(r.jsx)("g",{transform:"rotate(315)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})}}}]);
//# sourceMappingURL=5.23ed484e.chunk.js.map