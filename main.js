(()=>{"use strict";var e={424:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),i=t.n(a),r=t(645),o=t.n(r)()(i());o.push([e.id,'#content {\n  height: 100%;\n  width: 100vw;\n  background-color: chartreuse;\n  display: grid;\n  grid-template-rows: 13vh 41vh 46vh;\n}\n\nnav {\n  display: grid;\n  grid-template-rows: 9vh 4vh;\n}\n\n.nav-top {\n  width: 30vw;\n  height: 9vh;\n  float: right;\n  display: grid;\n  grid-template-rows: repeat(2, 4.5vh);\n  grid-template-columns: repeat(2, 1fr);\n  justify-items: center;\n  grid-template-areas: "address links"\n                       "search contact";\n}\n\n.nav-top * {\n  height: 2vh;\n}\n\n#links {\n  display: inline-flex;\n}\n\n#address {\n  padding-top: 10px;\n  font-size: 1.2vh;\n}\n\n#search input {\n width: 7vw;\n}\n\n.nav-bottom {\n  background-color: beige;\n  justify-content: center;\n  display: inline-flex;\n}\n\n.nav-bottom > :last-child {\n  width: 50vw;\n  display: grid;\n  margin-top: 1vh;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n#logo-cont {\n  width: 200px;\n}\n\n#brand-logo {\n  height: 20vh;\n  width: 10vw;\n  position: absolute;\n  top: 2vh;\n  left: 7vw;\n}\n\n\n.main {\n  background-color: brown;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n\naside {\n  background-color: darkblue;\n  display: grid;\n  grid-template-rows: repeat(4 auto);\n  padding: 5vh 1vw 1vw 1vw;\n  font-size: 1.7vh;\n}\n\n.p-header {\n  color: white;\n}\n\naside :nth-child(3),\naside button {\n  margin: auto;\n}\n\naside :nth-child(3) * {\n  display: inline-flex;\n  vertical-align: middle;\n}\n\naside > button {\n  width: 7vw;\n  height: 3vh;\n  font-size: 1vh;\n}\n\naside img {\n  height: 5vh;\n}\n\narticle {\n  background-size: 100% 100%;\n}\n\n\nfooter {\n  width: 70vw;\n  background-color: gold;\n  display: grid;\n  grid-template-rows: 1fr 6fr;\n  padding: 0 15vw;\n  justify-items: center;\n}\n\nfooter h3 {\n  padding-top: 2vh;\n  font-size: 3.2vh;\n}\n\nfooter > :last-child {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  gap: 3vw;\n  justify-content: center;\n}\n\nfooter h5 {\n  font-size: 2vh;\n  font-weight: bold;\n}\n\n.list-cont {\n  padding-top: 1vh;\n}\n\n.list-cont * {\n  padding-bottom: 1.5vh;\n}\n\nfooter em {\n  font-size: 1.7vh;\n}\n\nfooter li {\n  font-size: 1.4vh;\n}\n',""]);const s=o},917:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),i=t.n(a),r=t(645),o=t.n(r)()(i());o.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);a&&o[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),n.push(c))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},o=[],s=0;s<e.length;s++){var d=e[s],l=a.base?d[0]+a.base:d[0],c=r[l]||0,u="".concat(l," ").concat(c);r[l]=c+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=i(m,a);a.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var r=a(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var s=t(r[o]);n[s].references--}for(var d=a(e,i),l=0;l<r.length;l++){var c=t(r[l]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{function e(e,n,t){for(let a=0;a<t.length;a++){const i=document.createElement(`${e}`),r=t[a];"string"==typeof r&&(i.innerHTML=r),n.appendChild(i)}}const n=document.createElement("div");n.className="nav-top";const a=document.createElement("span");a.id="address",a.innerHTML="128, Sample street, People's Subd., Some City",n.appendChild(a);const i=document.createElement("ul");i.id="links",e("li",i,[".",".",".",".",".","."]),n.appendChild(i);const r=document.createElement("span");r.id="search";const o=document.createElement("input");o.type="text",r.appendChild(o),n.appendChild(r);const s=document.createElement("span");s.id="contact",s.innerHTML="756.808.225",n.appendChild(s);const d=document.createElement("div");d.className="nav-bottom";const l=document.createElement("span");l.id="logo-cont",d.appendChild(l);const c=document.createElement("ul");e("li",c,["Home","About","Menu","Contact","Branches"]),d.appendChild(c);const u=document.createElement("nav"),p=document.createElement("div");p.appendChild(n),u.appendChild(p),u.appendChild(d);const m=document.createElement("aside"),h=document.createElement("span"),f=document.createElement("p");f.innerHTML="<em class='p-header'>Menu</em><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",h.appendChild(f);const v=document.createElement("span"),g=document.createElement("p");g.innerHTML="<em class='p-header'>We Deliver</em><br> Quisque eget rutrum nisl. Nam augue justo, cursus vitae metus vel, pharetra hendrerit felis.",v.appendChild(g);const b=document.createElement("span"),y=document.createElement("p"),C=document.createElement("span");y.innerHTML="GRAB PANDA",b.appendChild(C),b.appendChild(y);const w=document.createElement("button");w.innerHTML="Order Delivery >>",m.appendChild(h),m.appendChild(v),m.appendChild(b),m.appendChild(w);const E=document.createElement("div");E.className="main",E.appendChild(m);const q=document.createElement("article");E.appendChild(q);const x=document.createElement("ul"),M=document.createElement("h5");x.className="list-cont",M.innerHTML="Shareables",x.appendChild(M);const T=document.createElement("ul"),k=document.createElement("h5");T.className="list-cont",k.innerHTML="Signature Meals",T.appendChild(k);const S=document.createElement("footer"),L=document.createElement("h3");L.className="p-header",L.innerHTML="Below is our complete menu, check what you feel like dining for today",S.appendChild(L);const H=document.createElement("div"),N=["<em class='p-header'> Street nachos </em><br> Sed tempus u lacus ut scelerisque. Suspendisse sollicitudin nibh erat, id facilicis felis accumsan nec.","<em class='p-header'> Hummus </em><br> Nullam condimentum ipsum ut lectus vehicula consectetur. Quisque se dolor tincidunt, consectetur sapien et, facilisis dolor. Duis sem purus, dignissim ut sapien in, varius pellentesque lacus.","<em class='p-header'> Peel N'eat Shrimp </em><br> In hac habitasse platea dictumst. Vivamus dictum rutrum arcu, a palceratt velit sagittis id.","<em class='p-header'> Wings </em><br> Etiam cursus eros ac efficitur fringilla. Vestibulum dignissim urna eget accusam aliquam. Curabitur dignissim nisi in tortor comodo, ac bibendum magna tincidunt.","<em class='p-header'> Giant Pretzel </em><br> Quisque eget rutrum nisl. Nam augue justo, cursus vitae metus vel, pharetra hendrerit felis. Aliquam sed malesuada eros.","<em class='p-header'> Wisconsin White Cheddar Cheese Curds </em><br> Praesent convallis, libero quis congue elementum, nunc ante faubicus sapien, ac scelerisque tortor purus sit amet ex. pelentesque mollis nec sem vel aliquam."];e("li",x,N),e("li",T,N),H.appendChild(x),H.appendChild(T),S.appendChild(H);var A=t(379),j=t.n(A),z=t(795),P=t.n(z),Z=t(569),I=t.n(Z),D=t(565),O=t.n(D),B=t(216),W=t.n(B),Q=t(589),R=t.n(Q),U=t(917),F={};F.styleTagTransform=R(),F.setAttributes=O(),F.insert=I().bind(null,"head"),F.domAPI=P(),F.insertStyleElement=W(),j()(U.Z,F),U.Z&&U.Z.locals&&U.Z.locals;var G=t(424),V={};V.styleTagTransform=R(),V.setAttributes=O(),V.insert=I().bind(null,"head"),V.domAPI=P(),V.insertStyleElement=W(),j()(G.Z,V),G.Z&&G.Z.locals&&G.Z.locals,document.body.appendChild(function(){const e=document.getElementById("content");return e.appendChild(u),e.appendChild(E),e.appendChild(S),e}())})()})();