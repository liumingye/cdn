var instantclick,InstantClick=instantclick=function(a,b,c){function D(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function E(a){for(;a&&"A"!=a.nodeName;)a=a.parentNode;return a}function F(a){do{if(!a.hasAttribute)break;if(a.hasAttribute("data-instant"))return!1;if(a.hasAttribute("data-no-instant"))return!0}while(a=a.parentNode);return!1}function G(a){var c=b.protocol+"//"+b.host;return a.target||a.hasAttribute("download")||0!=a.href.indexOf(c+"/")||a.href.indexOf("#")>-1&&D(a.href)==d||F(a)?!1:!0}function H(a){var d,e,b=Array.prototype.slice.call(arguments,1),c=!1;for(d=0;d<y[a].length;d++)"receive"==a?(e=y[a][d].apply(window,b),e&&("body"in e&&(b[1]=e.body),"title"in e&&(b[2]=e.title),c=e)):y[a][d].apply(window,b);return c}function I(e,f,g,h){if(L(),a.documentElement.replaceChild(f,a.body),a.title=e,g){P("remove"),g!=b.href&&(history.pushState(null,null,g),c.indexOf(" CriOS/")>-1&&(a.title=a.title==e?e+String.fromCharCode(160):e));var i=g.indexOf("#"),j=i>-1&&a.getElementById(g.substr(i+1)),k=0;if(j)for(;j.offsetParent;)k+=j.offsetTop,j=j.offsetParent;"requestAnimationFrame"in window?requestAnimationFrame(function(){scrollTo(0,k)}):scrollTo(0,k),M(),d=D(g),d in B&&(B[d]=[]),z[d]={},Q(function(a){return!a.hasAttribute("data-instant-track")}),H("change",!1)}else scrollTo(0,h),l.abort(),J(),Q(function(a){return a.hasAttribute("data-instant-restore")}),N(),H("restore")}function J(){s=!1,t=!1}function K(a){return a.replace(/<noscript[\s\S]+?<\/noscript>/gi,"")}function L(){for(var a=0;a<A.length;a++)"object"==typeof A[a]&&"abort"in A[a]&&(A[a].instantclickAbort=!0,A[a].abort());A=[]}function M(){var a,b;for(a in z[d])b=z[d][a],window.clearTimeout(b.realId),b.delayLeft=b.delay-+new Date+b.timestamp}function N(){var a,b,c;for(a in z[d])if("delayLeft"in z[d][a]){for(b=[z[d][a].callback,z[d][a].delayLeft],c=0;c<z[d][a].params.length;c++)b.push(z[d][a].params[c]);S(b,z[d][a].isRepeating,z[d][a].delay),delete z[d][a]}}function O(){l.abort(),J()}function P(a){if(d in B)for(var b=0;b<B[d].length;b++)window[a+"EventListener"].apply(window,B[d][b])}function Q(b){var e,f,g,h,i,j,c=a.body.getElementsByTagName("script"),d=[];for(i=0;i<c.length;i++)d.push(c[i]);for(i=0;i<d.length;i++)if(e=d[i],e&&b(e)){for(f=a.createElement("script"),j=0;j<e.attributes.length;j++)f.setAttribute(e.attributes[j].name,e.attributes[j].value);f.textContent=e.textContent,g=e.parentNode,h=e.nextSibling,g.removeChild(e),g.insertBefore(f,h)}}function R(){var c,d,e,b=a.querySelectorAll("[data-instant-track]");for(e=0;e<b.length;e++)c=b[e],d=c.getAttribute("href")||c.getAttribute("src")||c.textContent,v.push(d)}function S(a,b,c){var i,k,l,e=a[0],f=a[1],g=[].slice.call(a,2),h=+new Date;return j++,i=j,k=b?function(b){e(b),delete z[d][i],a[0]=e,a[1]=f,S(a,!0)}:function(a){e(a),delete z[d][i]},a[0]=k,void 0!=c&&(h+=f-c,f=c),l=window.setTimeout.apply(window,a),z[d][i]={realId:l,timestamp:h,callback:e,delay:f,params:g,isRepeating:b},-i}function T(a){var b=E(a.target);b&&G(b)&&ab(b.href)}function U(a){if(!(g>+new Date-500||+new Date-r<100)){var b=E(a.target);b&&b!=E(a.relatedTarget)&&G(b)&&(b.addEventListener("mouseout",Y),t||(e=b.href,f=jb(ab,x)))}}function V(a){g=+new Date;var b=E(a.target);b&&G(b)&&(i&&(lb(i),i=!1),b.addEventListener("touchend",Z),b.addEventListener("touchcancel",Z),ab(b.href))}function W(){a.addEventListener("click",X)}function X(b){if(a.removeEventListener("click",X),i&&(lb(i),i=!1),!b.defaultPrevented){var c=E(b.target);c&&G(c)&&(0!=b.button||b.metaKey||b.ctrlKey||(b.preventDefault(),bb(c.href)))}}function Y(a){return E(a.target)!=E(a.relatedTarget)?f?(lb(f),f=!1,void 0):(s&&!t&&(l.abort(),J()),void 0):void 0}function Z(){s&&!t&&(i=jb(O,500))}function $(){var c,d,e,f,h,i,g,j;if(2==l.readyState&&(c=l.getResponseHeader("Content-Type"),c&&/^text\/html/i.test(c)||(o=!0)),!(l.readyState<4)){if(0==l.status)return u=!0,t&&(H("exit",m,"network error"),b.href=m),void 0;if(o)return t&&(H("exit",m,"non-html content-type"),b.href=m),void 0;if(d=a.implementation.createHTMLDocument(""),d.documentElement.innerHTML=K(l.responseText),n=d.title,q=d.body,e=H("receive",m,q,n),e&&("body"in e&&(q=e.body),"title"in e&&(n=e.title)),f=D(m),k[f]={body:q,title:n,scrollPosition:f in k?k[f].scrollPosition:0},g=d.querySelectorAll("[data-instant-track]"),g.length!=v.length)p=!0;else for(j=0;j<g.length;j++)h=g[j],i=h.getAttribute("href")||h.getAttribute("src")||h.textContent,-1==v.indexOf(i)&&(p=!0);t&&(t=!1,bb(m))}}function _(){var a=D(b.href);if(a!=d){if(t&&(J(),l.abort()),!(a in k))return H("exit",b.href,"not in history"),a==b.href?b.href=b.href:b.reload(),void 0;k[d].scrollPosition=pageYOffset,M(),P("remove"),d=a,I(k[a].title,k[a].body,!1,k[a].scrollPosition),P("add")}}function ab(a){f&&(lb(f),f=!1),a||(a=e),(!s||a!=m&&!t)&&(s=!0,t=!1,m=a,q=!1,o=!1,u=!1,p=!1,H("preload"),l.open("GET",a),l.timeout=9e4,l.send())}function bb(a){return r=+new Date,f||!s?f&&m&&m!=a?(H("exit",a,"click occured while preloading planned"),b.href=a,void 0):(ab(a),H("wait"),t=!0,void 0):t?(H("exit",a,"clicked on a link while waiting for another page to display"),b.href=a,void 0):o?(H("exit",m,"non-html content-type"),b.href=m,void 0):u?(H("exit",m,"network error"),b.href=m,void 0):p?(H("exit",m,"different assets"),b.href=m,void 0):q?(k[d].scrollPosition=pageYOffset,J(),I(n,q,m),void 0):(H("wait"),t=!0,void 0)}function hb(c){return cb?(h||(h=!0,"mousedown"==c?w=!0:"number"==typeof c&&(x=c),d=D(b.href),z[d]={},k[d]={body:a.body,title:a.title,scrollPosition:pageYOffset},"loading"==a.readyState?a.addEventListener("DOMContentLoaded",R):R(),l=new XMLHttpRequest,l.addEventListener("readystatechange",$),a.addEventListener("touchstart",V,!0),w?a.addEventListener("mousedown",T,!0):a.addEventListener("mouseover",U,!0),a.addEventListener("click",W,!0),addEventListener("popstate",_)),void 0):(H("change",!0),void 0)}function ib(a,b){y[a].push(b),"change"==a&&b(!r)}function jb(){return S(arguments,!1)}function kb(){return S(arguments,!0)}function lb(a){a=-a;for(var b in z)a in z[b]&&(window.clearTimeout(z[b][a].realId),delete z[b][a])}function mb(a){A.push(a)}function nb(){d in B||(B[d]=[]),B[d].push(arguments),addEventListener.apply(window,arguments)}function ob(){var a,b;if(d in B)a:for(a=0;a<B[d].length;a++)if(arguments.length==B[d][a].length){for(b=0;b<B[d][a].length;b++)if(arguments[b]!=B[d][a][b])continue a;B[d].splice(a,1)}}function pb(b,d,e){if(!(d in C)&&(C[d]={},a.addEventListener(d,function(a){var c,e,b=a.target;for(a.originalStopPropagation=a.stopPropagation,a.stopPropagation=function(){this.isPropagationStopped=!0,this.originalStopPropagation()};b&&1==b.nodeType;){for(c in C[d])if(b.matches(c)){for(e=0;e<C[d][c].length;e++)C[d][c][e].call(b,a);if(a.isPropagationStopped)return;break}b=b.parentNode}},!1),"click"==d&&/iP(?:hone|ad|od)/.test(c))){var f=a.createElement("style");f.setAttribute("instantclick-mobile-safari-cursor",""),f.textContent="body { cursor: pointer !important; }",a.head.appendChild(f)}b in C[d]||(C[d][b]=[]),qb(b,d,e),C[d][b].push(e)}function qb(a,b,c){var d=C[b][a].indexOf(c);d>-1&&C[b][a].splice(d,1)}var d,e,f,g,h,i,l,o,p,w,cb,db,eb,fb,gb,j=0,k={},m=!1,n=!1,q=!1,r=0,s=!1,t=!1,u=!1,v=[],x=65,y={preload:[],receive:[],wait:[],change:[],restore:[],exit:[]},z={},A=[],B={},C={};if(Element.prototype.matches||(Element.prototype.matches=Element.prototype.webkitMatchesSelector||Element.prototype.msMatchesSelector||function(b){var d,c=a.querySelectorAll(b);for(d=0;d<c.length;d++)if(c[d]==this)return!0;return!1}),cb=!1,"pushState"in history&&"file:"!=b.protocol&&(cb=!0,db=c.indexOf("Android "),db>-1&&(eb=parseFloat(c.substr(db+"Android ".length)),4.4>eb&&(cb=!1,eb>=4))))for(fb=[/ Chrome\//,/ UCBrowser\//,/ Firefox\//,/ Windows Phone /],gb=0;gb<fb.length;gb++)if(fb[gb].test(c)){cb=!0;break}return{supported:cb,init:hb,on:ib,setTimeout:jb,setInterval:kb,clearTimeout:lb,xhr:mb,addPageEvent:nb,removePageEvent:ob,addEvent:pb,removeEvent:qb}}(document,location,navigator.userAgent);!function(){function c(){var b,c,d,e;if(a=document.createElement("div"),a.id="instantclick",b={Webkit:!0,Moz:!0},c="",!("transform"in a.style))for(d in b)d+"Transform"in a.style&&(c="-"+d.toLowerCase()+"-");e=document.createElement("style"),e.setAttribute("instantclick-loading-indicator",""),e.textContent="#instantclick{pointer-events:none;z-index:2147483647;position:fixed;top:0;left:0;width:100%;height:3px;border-radius:2px;color:hsl(192,100%,50%);background:currentColor;box-shadow:0 -1px 8px;opacity:0;}#instantclick.visible{opacity:1;"+c+"animation:instantclick .6s linear infinite;}"+"@"+c+"keyframes instantclick{0%,5%{"+c+"transform:translateX(-100%);}45%,55%{"+c+"transform:translateX(0%);}95%,100%{"+c+"transform:translateX(100%);}}",document.head.appendChild(e)}function d(b){instantclick.supported&&(b&&c(),document.body.appendChild(a),b||h())}function e(){document.body.appendChild(a),h()}function f(){b=instantclick.setTimeout(g,100)}function g(){a.className="visible"}function h(){instantclick.clearTimeout(b),a.className=""}var a,b;instantclick.on("change",d),instantclick.on("restore",e),instantclick.on("wait",f),instantclick.on("exit",h),instantclick.loadingIndicator={show:g,hide:h}}();InstantClick.on("change",function(){!function(l){var t,h,o,a,e,i,c='<svg><symbol id="icon-level-up" viewBox="0 0 1024 1024"><path d="M427.2 171.2h-256c-48 0-84.8 38.4-84.8 84.8v512c0 46.4 38.4 84.8 84.8 84.8h683.2c46.4 0 84.8-38.4 84.8-84.8V340.8c0-46.4-38.4-84.8-84.8-84.8H512l-84.8-84.8z" fill="#03A9F4" ></path><path d="M879.87808054 489.58596378c-3.70788575 7.41577148-9.8876953 12.35961914-18.53942872 12.35961913h-61.7980957v238.54064941c0 2.47192383-1.23596192 4.94384766-2.47192383 7.41577151-2.47192383 1.23596192-4.94384766 2.47192383-7.41577149 2.47192383H564.70779245c-4.94384766 0-7.41577148-2.47192383-8.65173341-6.17980958-1.23596192-3.70788575-1.23596192-7.41577148 1.23596192-11.12365723l50.67443849-61.79809571c2.47192383-2.47192383 4.94384766-3.70788575 7.41577149-3.70788573H717.96706981V501.94558291h-61.79809573c-8.6517334 0-14.83154297-3.70788575-18.5394287-12.35961913-3.70788575-7.41577148-2.47192383-14.83154297 2.47192384-22.24731444l102.58483886-122.36022951c3.70788575-4.94384766 8.6517334-7.41577148 16.06750489-7.41577148 6.17980958 0 12.35961914 2.47192383 16.06750487 7.41577148l102.58483888 122.36022951c4.94384766 7.41577148 6.17980958 14.83154297 2.47192381 22.24731444z" fill="#e6e6e6" ></path></symbol><symbol id="icon-download" viewBox="0 0 1024 1024"><path d="M725.333333 554.666667l-213.333333 213.333333-213.333333-213.333333h128V384h170.666666v170.666667m228.266667-126.72A319.573333 319.573333 0 0 0 512 170.666667C388.693333 170.666667 281.6 240.64 228.266667 342.613333A256.170667 256.170667 0 0 0 0 597.333333a256 256 0 0 0 256 256h554.666667a213.333333 213.333333 0 0 0 213.333333-213.333333c0-112.64-87.466667-203.946667-198.4-212.053333z" fill="#515151" ></path></symbol><symbol id="icon-md" viewBox="0 0 1024 1024"><path d="M96 672v-341.333333h85.333333l128 128 128-128h85.333334v341.333333h-85.333334v-220.586667l-128 128-128-128v220.586667h-85.333333m597.333333-341.333333h128v170.666666h106.666667l-170.666667 192-170.666666-192h106.666666z" fill="#42A5F5" ></path></symbol><symbol id="icon-exe" viewBox="0 0 1024 1024"><path d="M810.666667 170.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v512a85.333333 85.333333 0 0 1-85.333333 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V256a85.333333 85.333333 0 0 1 85.333333-85.333333h597.333334m0 597.333333V341.333333H213.333333v426.666667h597.333334z" fill="#E64A19" ></path></symbol><symbol id="icon-upload" viewBox="0 0 1024 1024"><path d="M597.333333 554.666667v170.666666h-170.666666v-170.666666H298.666667l213.333333-213.333334 213.333333 213.333334m100.266667-126.72A319.573333 319.573333 0 0 0 512 170.666667C388.693333 170.666667 281.6 240.64 228.266667 342.613333A256.170667 256.170667 0 0 0 0 597.333333a256 256 0 0 0 256 256h554.666667a213.333333 213.333333 0 0 0 213.333333-213.333333c0-112.64-87.466667-203.946667-198.4-212.053333z" fill="#515151" ></path></symbol><symbol id="icon-folder-download" viewBox="0 0 1024 1024"><path d="M853.333333 256a85.333333 85.333333 0 0 1 85.333334 85.333333v426.666667a85.333333 85.333333 0 0 1-85.333334 85.333333H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333333V256c0-47.36 37.973333-85.333333 85.333334-85.333333h256l85.333333 85.333333h341.333333m-32 298.666667H682.666667V384h-85.333334v170.666667h-138.666666L640 736" fill="#515151" ></path></symbol><symbol id="icon-upload-folder" viewBox="0 0 1024 1024"><path d="M853.333333 256a85.333333 85.333333 0 0 1 85.333334 85.333333v426.666667a85.333333 85.333333 0 0 1-85.333334 85.333333H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333333V256a85.333333 85.333333 0 0 1 85.333334-85.333333h256l85.333333 85.333333h341.333333m-394.666666 298.666667H597.333333v170.666666h85.333334v-170.666666h138.666666L640 373.333333" fill="#515151" ></path></symbol><symbol id="icon-url" viewBox="0 0 1024 1024"><path d="M682.666667 256h-128v81.066667h128a174.933333 174.933333 0 0 1 174.933333 174.933333 174.933333 174.933333 0 0 1-174.933333 174.933333h-128V768h128a256 256 0 0 0 256-256c0-141.653333-114.773333-256-256-256M166.4 512A174.933333 174.933333 0 0 1 341.333333 337.066667h128V256H341.333333a256 256 0 0 0-256 256 256 256 0 0 0 256 256h128v-81.066667H341.333333c-96.426667 0-174.933333-78.506667-174.933333-174.933333M341.333333 554.666667h341.333334v-85.333334H341.333333v85.333334z" fill="#42A5F5" ></path></symbol><symbol id="icon-word" viewBox="0 0 1024 1024"><path d="M1024 298.666667V85.333333c0-25.6-17.066667-42.666667-42.666667-42.666666H298.666667c-25.6 0-42.666667 17.066667-42.666667 42.666666v213.333334l384 85.333333 384-85.333333z" fill="#41A5EE" ></path><path d="M1024 298.666667H256v213.333333l405.333333 85.333333 362.666667-85.333333z" fill="#2B7CD3" ></path><path d="M1024 512H256v213.333333l384 64 384-64z" fill="#185ABD" ></path><path d="M1024 725.333333H256v213.333334c0 25.6 17.066667 42.666667 42.666667 42.666666h682.666666c25.6 0 42.666667-17.066667 42.666667-42.666666v-213.333334z" fill="#103F91" ></path><path d="M588.8 256H256v597.333333h324.266667c29.866667 0 59.733333-29.866667 59.733333-59.733333V307.2c0-29.866667-21.333333-51.2-51.2-51.2z" opacity=".5" ></path><path d="M546.133333 810.666667H51.2C21.333333 810.666667 0 789.333333 0 759.466667V264.533333C0 234.666667 21.333333 213.333333 51.2 213.333333h499.2c25.6 0 46.933333 21.333333 46.933333 51.2v499.2c0 25.6-21.333333 46.933333-51.2 46.933334z" fill="#185ABD" ></path><path d="M435.2 682.666667H371.2L298.666667 448 226.133333 682.666667H162.133333L93.866667 341.333333h59.733333l46.933333 238.933334 72.533334-230.4h51.2l68.266666 230.4L443.733333 341.333333h59.733334l-68.266667 341.333334z" fill="#FFFFFF" ></path></symbol><symbol id="icon-audio" viewBox="0 0 1024 1024"><path d="M682.666667 384V298.666667h-170.666667v234.666666c-17.92-13.226667-39.68-21.333333-64-21.333333A106.666667 106.666667 0 0 0 341.333333 618.666667a106.666667 106.666667 0 0 0 106.666667 106.666666 106.666667 106.666667 0 0 0 106.666667-106.666666V384h128m-170.666667-298.666667a426.666667 426.666667 0 0 1 426.666667 426.666667 426.666667 426.666667 0 0 1-426.666667 426.666667A426.666667 426.666667 0 0 1 85.333333 512 426.666667 426.666667 0 0 1 512 85.333333z" fill="#EF5350" ></path></symbol><symbol id="icon-other" viewBox="0 0 1024 1024"><path d="M554.666667 384h234.666666L554.666667 149.333333V384M256 85.333333h341.333333l256 256v512a85.333333 85.333333 0 0 1-85.333333 85.333334H256a85.333333 85.333333 0 0 1-85.333333-85.333334V170.666667c0-47.36 37.973333-85.333333 85.333333-85.333334m213.333333 85.333334H256v682.666666h512v-384h-298.666667V170.666667z" fill="#42A5F5" ></path></symbol><symbol id="icon-doc" viewBox="0 0 1024 1024"><path d="M554.666667 384h234.666666L554.666667 149.333333V384M256 85.333333h341.333333l256 256v512a85.333333 85.333333 0 0 1-85.333333 85.333334H256a85.333333 85.333333 0 0 1-85.333333-85.333334V170.666667c0-47.36 37.973333-85.333333 85.333333-85.333334m384 682.666667v-85.333333H256v85.333333h384m128-170.666667v-85.333333H256v85.333333h512z" fill="#42A5F5" ></path></symbol><symbol id="icon-image" viewBox="0 0 1024 1024"><path d="M553.642667 387.072h229.034666l-229.034666-228.992v228.992M262.144 95.616h333.141333l249.856 249.813333v499.669334a83.285333 83.285333 0 0 1-83.285333 83.285333H262.186667a83.242667 83.242667 0 0 1-83.285334-83.285333V178.858667c0-46.208 37.034667-83.242667 83.285334-83.242667m0 749.525333h499.626666V512l-166.528 166.570667L512 595.285333l-249.856 249.856M345.429333 387.114667a83.285333 83.285333 0 0 0-83.285333 83.285333 83.285333 83.285333 0 0 0 83.285333 83.242667 83.285333 83.285333 0 0 0 83.285334-83.242667 83.285333 83.285333 0 0 0-83.285334-83.285333z" fill="#26A69A" ></path></symbol><symbol id="icon-pdf" viewBox="0 0 1024 1024"><path d="M554.666667 384h234.666666L554.666667 149.333333V384M256 85.333333h341.333333l256 256v512a85.333333 85.333333 0 0 1-85.333333 85.333334H256a85.333333 85.333333 0 0 1-85.333333-85.333334V170.666667a85.333333 85.333333 0 0 1 85.333333-85.333334m210.346667 445.44c17.493333 38.4 39.68 69.973333 65.28 91.733334l17.493333 13.653333c-37.12 6.826667-88.32 18.773333-142.506667 39.68l-4.693333 1.706667 21.333333-44.373334c19.2-37.12 33.28-70.826667 43.093334-102.4m276.48 162.56c7.68-7.68 11.52-17.493333 11.946666-28.16 1.28-8.533333-0.853333-16.64-5.12-23.466666-12.373333-20.053333-44.373333-29.44-97.28-29.44l-55.04 2.986666-37.12-24.746666c-26.88-22.186667-51.2-61.013333-68.266666-109.226667l1.706666-5.973333c14.08-56.746667 27.306667-125.44-0.853333-153.6a36.394667 36.394667 0 0 0-26.026667-10.24h-10.24c-15.786667 0-29.866667 16.64-33.706666 32.853333-15.786667 56.746667-6.4 87.893333 9.386666 139.52v0.426667c-10.666667 37.546667-24.32 81.066667-46.08 125.013333l-40.96 76.8-37.973333 20.906667c-51.2 32-75.52 67.84-80.213333 90.453333-1.706667 8.106667-0.853333 15.36 2.133333 23.04l1.28 2.133333 20.48 13.226667 18.773333 4.693333c34.56 0 73.813333-40.533333 126.72-130.986666l7.68-2.986667c43.946667-14.08 98.56-23.893333 171.946667-32 43.946667 21.76 95.573333 31.573333 128 31.573333 18.773333 0 31.573333-4.693333 38.826667-12.8m-17.493334-30.293333l3.84 4.693333c-0.426667 4.266667-1.706667 4.693333-3.84 5.546667h-1.706666l-8.106667 0.853333c-19.626667 0-49.92-8.106667-81.066667-21.76 3.84-4.266667 5.546667-4.266667 9.813334-4.266666 59.733333 0 76.8 10.666667 81.066666 14.933333M334.08 725.333333c-27.733333 50.773333-52.906667 78.933333-72.106667 85.333334 2.133333-16.213333 21.333333-44.373333 51.626667-72.106667l20.48-13.226667m128.853333-294.826666c-9.813333-38.4-10.24-69.546667-2.986666-87.466667l2.986666-5.12 6.4 2.133333c7.253333 10.24 8.106667 23.893333 3.84 46.933334l-1.28 6.826666-6.826666 34.986667z" fill="#F44336" ></path></symbol><symbol id="icon-video" viewBox="0 0 1024 1024"><path d="M768 170.666667l85.333333 170.666666h-128l-85.333333-170.666666h-85.333333l85.333333 170.666666h-128l-85.333333-170.666666H341.333333l85.333334 170.666666H298.666667L213.333333 170.666667H170.666667a85.333333 85.333333 0 0 0-85.333334 85.333333v512a85.333333 85.333333 0 0 0 85.333334 85.333333h682.666666a85.333333 85.333333 0 0 0 85.333334-85.333333V170.666667h-170.666667z" fill="#FF9800" ></path></symbol><symbol id="icon-archive" viewBox="0 0 1024 1024"><path d="M597.333333 725.333333h-85.333333v-85.333333h-85.333333v-85.333333h85.333333v85.333333h85.333333m0-256h-85.333333v85.333333h85.333333v85.333334h-85.333333v-85.333334h-85.333333V384h85.333333V298.666667h-85.333333V213.333333h85.333333v85.333334h85.333333m213.333334-170.666667H213.333333c-47.36 0-85.333333 37.973333-85.333333 85.333333v597.333334a85.333333 85.333333 0 0 0 85.333333 85.333333h597.333334a85.333333 85.333333 0 0 0 85.333333-85.333333V213.333333a85.333333 85.333333 0 0 0-85.333333-85.333333z" fill="#AFB42B" ></path></symbol><symbol id="icon-folder" viewBox="0 0 1024 1024"><path d="M426.666667 170.666667H170.666667c-47.36 0-85.333333 37.973333-85.333334 85.333333v512a85.333333 85.333333 0 0 0 85.333334 85.333333h682.666666a85.333333 85.333333 0 0 0 85.333334-85.333333V341.333333a85.333333 85.333333 0 0 0-85.333334-85.333333h-341.333333l-85.333333-85.333333z" fill="#03a9f4" ></path></symbol></svg>',d=(d=document.getElementsByTagName("script"))[d.length-1].getAttribute("data-injectcss");if(d&&!l.__iconfont__svg__cssinject__){l.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(l){console&&console.log(l)}}function n(){e||(e=!0,o())}t=function(){var l,t,h,o;(o=document.createElement("div")).innerHTML=c,c=null,(h=o.getElementsByTagName("svg")[0])&&(h.setAttribute("aria-hidden","true"),h.style.position="absolute",h.style.width=0,h.style.height=0,h.style.overflow="hidden",l=h,(t=document.body).firstChild?(o=l,(h=t.firstChild).parentNode.insertBefore(o,h)):t.appendChild(l))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(t,0):(h=function(){document.removeEventListener("DOMContentLoaded",h,!1),t()},document.addEventListener("DOMContentLoaded",h,!1)):document.attachEvent&&(o=t,a=l.document,e=!1,(i=function(){try{a.documentElement.doScroll("left")}catch(l){return void setTimeout(i,50)}n()})(),a.onreadystatechange=function(){"complete"==a.readyState&&(a.onreadystatechange=null,n())})}(window);!function(a){window["nav"]=a(window["jQuery"])}(function(){function a(){$(".nav").remove(),d.item=b(location.pathname),c()}function b(a){return a.substr(1).split("/")}function c(){if(1==d.item.length&&""==d.item[0])return $(".home").addClass("current");var a=$('<div class="nav">'),b=[],c="/";$.each(d.item,function(a,d){if(""==d)return!1;var e=$("<a>").attr("href",location.origin+c+d).text(decodeURIComponent(d));c+=d+"/",b.push($("<li>").html(e))}),b[b.length-1].addClass("current"),a.append($("<ul>").append(b)),$(".home").after(a)}var d={init:a,item:[]};return d}),nav.init(),$(".file-size,.file-modified").each(function(){""==$(this).text()&&$(this).text("-")}),$(function(){function a(){var a,b,d,e=[];for(a in c)c[a]&&e.push(a+":"+c[a]);b="sort="+e.join("+"),d=location.search,location.href=0==e.length?d.replace(/sort=([\w\W]*?)(&|$)/,""):d?d.indexOf("sort")>=0?d.replace(/sort=([\w\W]+?)(&|$)/,b):d+"&"+b:d+"?"+b}var b=(location.search.match(/sort=([\w\W]+?)(&|$)/)||["",""])[1],c={};b.split("+").forEach(function(a){var b=a.split(":");2==b.length&&(c[b[0]]=b[1])}),$("[data-sort]").on("click",function(){var b,d=$(this),e=d.attr("data-sort");d.attr("data-sort-value"),b=c[e],c={},c[e]="asc"==b?"":"desc"==b?"asc":"desc",a()})})}),InstantClick.init("mousedown");
