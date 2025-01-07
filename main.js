(()=>{"use strict";var n={874:(n,e,t)=>{t.d(e,{A:()=>A});var o=t(973),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  \n  /*\n    2. Remove default margin\n  */\n  * {\n    margin: 0;\n  }\n  \n  /*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n  \n  /*\n    5. Improve media defaults\n  */\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n    max-height: 100%;\n  }\n  \n  /*\n    6. Remove built-in form typography styles\n  */\n  input, button, textarea, select {\n    font: inherit;\n  }\n  \n  /*\n    7. Avoid text overflows\n  */\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  \n  /*\n    8. Create a root stacking context\n  */\n  #root, #__next {\n    isolation: isolate;\n  }","",{version:3,sources:["webpack://./src/normalize.css"],names:[],mappings:"AAAA;;CAEC;AACD;IACI,sBAAsB;EACxB;;EAEA;;GAEC;EACD;IACE,SAAS;EACX;;EAEA;;;;GAIC;EACD;IACE,gBAAgB;IAChB,mCAAmC;EACrC;;EAEA;;GAEC;EACD;IACE,cAAc;IACd,eAAe;IACf,gBAAgB;EAClB;;EAEA;;GAEC;EACD;IACE,aAAa;EACf;;EAEA;;GAEC;EACD;IACE,yBAAyB;EAC3B;;EAEA;;GAEC;EACD;IACE,kBAAkB;EACpB",sourcesContent:["/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  \n  /*\n    2. Remove default margin\n  */\n  * {\n    margin: 0;\n  }\n  \n  /*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n  \n  /*\n    5. Improve media defaults\n  */\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n    max-height: 100%;\n  }\n  \n  /*\n    6. Remove built-in form typography styles\n  */\n  input, button, textarea, select {\n    font: inherit;\n  }\n  \n  /*\n    7. Avoid text overflows\n  */\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  \n  /*\n    8. Create a root stacking context\n  */\n  #root, #__next {\n    isolation: isolate;\n  }"],sourceRoot:""}]);const A=i},208:(n,e,t)=>{t.d(e,{A:()=>A});var o=t(973),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,":root {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --clr-tmp-heat: linear-gradient(#FF5733, #FF8C00, #FFD700);\n    --clr-tmp-med: linear-gradient(to bottom, #80E0A7, #40C4FF, #0095B6);\n    --clr-tmp-cold: linear-gradient(to bottom, #3B4C76, #1F2A44, #5A2D9A);\n    --fs-500: 1rem;\n    --fs-700: 2.5rem;\n    --fw-normal: 500;\n    --fw-bold: 700;\n}\n\n.heat {\n    background: var(--clr-tmp-heat);\n}\n\n.medium {\n    background: var(--clr-tmp-med);\n}\n\n.cold {\n    background: var(--clr-tmp-cold);\n}\n\nbody {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n}\n\n#weather-form {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    width: 100%;\n    height: 10vh;\n    background-color: #1F2A44;\n    position: relative;\n}\n\n#weather-form::before {\n    content: \"Weather App\";\n    color: #fff;\n    font-size: var(--fs-700);\n    font-weight: var(--fw-bold);\n}\n\n.wrapper {\n    display: flex;\n    gap: 1rem;\n}\n\n#locationValue {\n    padding: 0.2rem 0.4rem;\n    border-radius: 0.2rem;    \n}\n\n#locationValue:focus {\n    outline: none;\n}\n\ninput[type=submit]{\n    pad: 0.2rem 0.4rem;\n    color: #fff;\n    background-color: #0e172c;\n    border-radius: 0.2rem;\n    border: none;\n}\n\n.main-content {\n    display: flex;\n    flex-flow: column;\n}\n\n.city {\n    font-weight: var(--fw-bold);\n    text-align: center;\n}\n\n.weather-img {\n    width: 300px;\n    height: 300px;\n}\n\n.main-content {\n    border-radius: 0.2rem;\n    display: flex;\n    gap: 1rem;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem;\n    width: 50vw;\n    height: 70vh;\n}\n\na{\n    color: #1F2A44;\n    text-decoration: none;\n}\n\na:hover {\n    color: #0348e7;\n    text-decoration: underline;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,mJAAmJ;IACnJ,0DAA0D;IAC1D,oEAAoE;IACpE,qEAAqE;IACrE,cAAc;IACd,gBAAgB;IAChB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,wBAAwB;IACxB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,yBAAyB;IACzB,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,0BAA0B;AAC9B",sourcesContent:[":root {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --clr-tmp-heat: linear-gradient(#FF5733, #FF8C00, #FFD700);\n    --clr-tmp-med: linear-gradient(to bottom, #80E0A7, #40C4FF, #0095B6);\n    --clr-tmp-cold: linear-gradient(to bottom, #3B4C76, #1F2A44, #5A2D9A);\n    --fs-500: 1rem;\n    --fs-700: 2.5rem;\n    --fw-normal: 500;\n    --fw-bold: 700;\n}\n\n.heat {\n    background: var(--clr-tmp-heat);\n}\n\n.medium {\n    background: var(--clr-tmp-med);\n}\n\n.cold {\n    background: var(--clr-tmp-cold);\n}\n\nbody {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n}\n\n#weather-form {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    width: 100%;\n    height: 10vh;\n    background-color: #1F2A44;\n    position: relative;\n}\n\n#weather-form::before {\n    content: \"Weather App\";\n    color: #fff;\n    font-size: var(--fs-700);\n    font-weight: var(--fw-bold);\n}\n\n.wrapper {\n    display: flex;\n    gap: 1rem;\n}\n\n#locationValue {\n    padding: 0.2rem 0.4rem;\n    border-radius: 0.2rem;    \n}\n\n#locationValue:focus {\n    outline: none;\n}\n\ninput[type=submit]{\n    pad: 0.2rem 0.4rem;\n    color: #fff;\n    background-color: #0e172c;\n    border-radius: 0.2rem;\n    border: none;\n}\n\n.main-content {\n    display: flex;\n    flex-flow: column;\n}\n\n.city {\n    font-weight: var(--fw-bold);\n    text-align: center;\n}\n\n.weather-img {\n    width: 300px;\n    height: 300px;\n}\n\n.main-content {\n    border-radius: 0.2rem;\n    display: flex;\n    gap: 1rem;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem;\n    width: 50vw;\n    height: 70vh;\n}\n\na{\n    color: #1F2A44;\n    text-decoration: none;\n}\n\na:hover {\n    color: #0348e7;\n    text-decoration: underline;\n}"],sourceRoot:""}]);const A=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},973:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],A=0;A<n.length;A++){var s=n[A],c=o.base?s[0]+o.base:s[0],l=a[c]||0,d="".concat(c," ").concat(l);a[c]=l+1;var u=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var m=r(p,o);o.byIndex=A,e.splice(A,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=t(a[i]);e[A].references--}for(var s=o(n,r),c=0;c<a.length;c++){var l=t(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),i=t.n(a),A=t(659),s=t.n(A),c=t(56),l=t.n(c),d=t(540),u=t.n(d),p=t(113),m=t.n(p),f=t(208),C={};C.styleTagTransform=m(),C.setAttributes=l(),C.insert=s().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=u(),r()(f.A,C),f.A&&f.A.locals&&f.A.locals;var h=t(874),g={};g.styleTagTransform=m(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),r()(h.A,g),h.A&&h.A.locals&&h.A.locals;const v=n=>document.querySelector(n);!function(){const n=v("#weather-form"),e=v("#locationValue");let t;n.addEventListener("submit",(async o=>{o.preventDefault(),n.checkValidity()&&(t=e.value,e.value="");const r=await async function(n){try{return(await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}/today?unitGroup=metric&key=FULVUHH7Y75BCMEVWAYCYS8MU&contentType=json`)).json()}catch(n){throw new Error(n)}}(t);var a,i,A;!function(n){const e=v(".weather-container"),{currentConditions:t,resolvedAddress:o,timezone:r,latitude:a,longitude:i,days:A}=n,s=A[0].datetime;e.innerHTML=`\n        <p class="city">${o}</p>\n        <p class="date">${s}</p>\n        <div class="current-conditions">\n            <p class="conditions">${t.conditions}</p>\n            <p class="temp">${t.temp}</p>\n        </div>\n        <p class="timezone">${r}</p>\n        <p class="latitude">${a}</p>\n        <p class="longitude">${i}</p>\n  `}(r),a=v(".main-content"),i=r.currentConditions.temp,A=r.currentConditions.conditions,a.classList.remove("heat","medium","cold"),i>=30&&a.classList.add("heat"),i>=15&&i<30&&a.classList.add("medium"),i<15&&a.classList.add("cold"),async function(n){const e=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=YphoJo3ndyPiIjXnu0Hbb0Ua0DxzXHgM&s=${n}`,{mode:"cors"});return(await e.json()).data.images.original.url}("Clima"+A).then((n=>{const e=v(".main-content");let t;t=v(".weather-img"),t||(t=(()=>{const n=document.createElement("img");return n.classList.add("weather-img"),n.textContent="",n})()),t.src=n,e.appendChild(t)})).catch((n=>console.log(n)))}))}()})();
//# sourceMappingURL=main.js.map