var InstantClick=function(a,b){function z(a){var b=a.indexOf("#");return 0>b?a:a.substr(0,b)}function A(a){for(;a&&"A"!=a.nodeName;)a=a.parentNode;return a}function B(a){var d=b.protocol+"//"+b.host;return!(a.target||a.hasAttribute("download")||0!=a.href.indexOf(d+"/")||-1<a.href.indexOf("#")&&z(a.href)==c||(h?!function(a){do{if(!a.hasAttribute)break;if(a.hasAttribute("data-no-instant"))return!1;if(a.hasAttribute("data-instant"))return!0}while(a=a.parentNode);return!1}(a):function(a){do{if(!a.hasAttribute)break;if(a.hasAttribute("data-instant"))return!1;if(a.hasAttribute("data-no-instant"))return!0}while(a=a.parentNode);return!1}(a)))}function C(a,b,c,d){var e,f,g;for(e=!1,f=0;f<y[a].length;f++)"receive"==a?(g=y[a][f](b,c,d),g&&("body"in g&&(c=g.body),"title"in g&&(d=g.title),e=g)):y[a][f](b,c,d);return e}function D(b,d,e,f){var g,h,i,j;if(a.documentElement.replaceChild(d,a.body),e){if(history.pushState(null,null,e),g=e.indexOf("#"),h=g>-1&&a.getElementById(e.substr(g+1)),i=0,h)for(;h.offsetParent;)i+=h.offsetTop,h=h.offsetParent;scrollTo(0,i),c=z(e)}else scrollTo(0,f);a.title=n&&a.title==b?b+String.fromCharCode(160):b,L(),O.done(),C("change",!1),j=a.createEvent("HTMLEvents"),j.initEvent("instantclick:newpage",!0,!0),dispatchEvent(j)}function E(){w=v=!1}function F(a){if(!(f>+new Date-500)){var b=A(a.target);b&&B(b)&&M(b.href)}}function G(a){if(!(f>+new Date-500)){var b=A(a.target);b&&B(b)&&(b.addEventListener("mouseout",J),l?(d=b.href,e=setTimeout(M,l)):M(b.href))}}function H(a){f=+new Date;var b=A(a.target);b&&B(b)&&(k?b.removeEventListener("mousedown",F):b.removeEventListener("mouseover",G),M(b.href))}function I(a){var b=A(a.target);b&&B(b)&&(1<a.which||a.metaKey||a.ctrlKey||(a.preventDefault(),N(b.href)))}function J(){return e?(clearTimeout(e),void(e=!1)):(v&&!w&&(g.abort(),E()),void 0)}function K(){var b,c,d,e,f,h,i,j,k;if(!(g.readyState<4)&&0!=g.status){if(u.ready=+new Date-u.start,g.getResponseHeader("Content-Type").match(/\/(x|ht|xht)ml/)){b=a.implementation.createHTMLDocument(""),b.documentElement.innerHTML=g.responseText.replace(/<noscript[\s\S]+<\/noscript>/gi,""),r=b.title,t=b.body,c=C("receive",q,t,r),c&&("body"in c&&(t=c.body),"title"in c&&(r=c.title)),d=z(q),p[d]={body:t,title:r,scrollY:d in p?p[d].scrollY:0};for(h=b.head.children,i=0,j=h.length-1;j>=0;j--)if((e=h[j]).hasAttribute("data-instant-track"))for(f=e.getAttribute("href")||e.getAttribute("src")||e.innerHTML,k=x.length-1;k>=0;k--)x[k]==f&&i++;i!=x.length&&(s=!0)}else s=!0;w&&(w=!1,N(q))}}function L(b){if(a.body.addEventListener("touchstart",H,!0),k?a.body.addEventListener("mousedown",F,!0):a.body.addEventListener("mouseover",G,!0),a.body.addEventListener("click",I,!0),!b){var c,d,e,f,g=a.body.getElementsByTagName("script");for(i=0,j=g.length;j>i;i++)(c=g[i]).hasAttribute("data-no-instant")||(d=a.createElement("script"),c.src&&(d.src=c.src),c.innerHTML&&(d.innerHTML=c.innerHTML),e=c.parentNode,f=c.nextSibling,e.removeChild(c),e.insertBefore(d,f))}}function M(a){!k&&"display"in u&&+new Date-(u.start+u.display)<100||(e&&(clearTimeout(e),e=!1),a||(a=d),v&&(a==q||w)||(q=a,s=t=w=!(v=!0),u={start:+new Date},C("fetch"),g.open("GET",a),g.send()))}function N(a){if("display"in u||(u.display=+new Date-u.start),e||!v)return e&&q&&q!=a?void(b.href=a):(M(a),O.start(0,!0),C("wait"),void(w=!0));if(w)b.href=a;else if(s)b.href=q;else{if(!t)return O.start(0,!0),C("wait"),void(w=!0);p[c].scrollY=pageYOffset,E(),D(r,t,q)}}var c,d,e,f,g,h,k,l,m=navigator.userAgent,n=-1<m.indexOf(" CriOS/"),o="createTouch"in a,p={},q=!1,r=!1,s=!1,t=!1,u={},v=!1,w=!1,x=[],y={fetch:[],receive:[],wait:[],change:[]},O=function(){function g(c,d){e=c,a.getElementById(b.id)&&a.body.removeChild(b),b.style.opacity="1",a.getElementById(b.id)&&a.body.removeChild(b),j(),d&&setTimeout(h,0),clearTimeout(f),f=setTimeout(i,500)}function h(){e=10,j()}function i(){98<=(e+=1+2*Math.random())?e=98:f=setTimeout(i,500),j()}function j(){c.style[d]="translate("+e+"%)",a.getElementById(b.id)||a.body.appendChild(b)}function k(){b.style.left=pageXOffset+"px",b.style.width=innerWidth+"px",b.style.top=pageYOffset+"px";var a="orientation"in window&&90==Math.abs(orientation),c=2*(innerWidth/screen[a?"height":"width"]);b.style[d]="scaleY("+c+")"}var b,c,d,e,f;return{init:function(){var e,f,g,h;if((b=a.createElement("div")).id="instantclick",(c=a.createElement("div")).id="instantclick-bar",c.className="instantclick-bar",b.appendChild(c),e=["Webkit","Moz","O"],!((d="transform")in c.style))for(f=0;3>f;f++)e[f]+"Transform"in c.style&&(d=e[f]+"Transform");if(g="transition",!(g in c.style))for(f=0;3>f;f++)e[f]+"Transition"in c.style&&(g="-"+e[f].toLowerCase()+"-"+g);h=a.createElement("style"),h.innerHTML="#instantclick{position:"+(o?"absolute":"fixed")+";top:0;left:0;width:100%;pointer-events:none;z-index:2147483647;"+g+":opacity .25s .1s}.instantclick-bar{background:#29d;width:100%;margin-left:-100%;height:2px;"+g+":all .25s}",a.head.appendChild(h),o&&(k(),addEventListener("resize",k),addEventListener("scroll",k))},start:g,done:function l(){return a.getElementById(b.id)?(clearTimeout(f),e=100,j(),void(b.style.opacity="0")):(g(100==e?0:e),setTimeout(l,0),void 0)}}}(),P="pushState"in history&&(!m.match("Android")||m.match("Chrome/"))&&"file:"!=b.protocol;return{supported:P,init:function(){var d,e,f,i,j;if(!c)if(P){for(d=arguments.length-1;d>=0;d--)e=arguments[d],!0===e?h=!0:"mousedown"==e?k=!0:"number"==typeof e&&(l=e);for(c=z(b.href),p[c]={body:a.body,title:a.title,scrollY:pageYOffset},j=a.head.children,d=j.length-1;d>=0;d--)(f=j[d]).hasAttribute("data-instant-track")&&(i=f.getAttribute("href")||f.getAttribute("src")||f.innerHTML,x.push(i));(g=new XMLHttpRequest).addEventListener("readystatechange",K),L(!0),O.init(),C("change",!0),addEventListener("popstate",function(){var a=z(b.href);a!=c&&(a in p?(p[c].scrollY=pageYOffset,D(p[c=a].title,p[a].body,!1,p[a].scrollY)):b.href=b.href)})}else C("change",!0)},on:function(a,b){y[a].push(b)}}}(document,location);InstantClick.on("change",function(){!function(a){window["nav"]=a(window["jQuery"])}(function(){function a(){c(),e.item=b(location.pathname),d()}function b(a){return a.substr(1).split("/")}function c(){$("body").append($("<style>").text(e.css))}function d(){var a,b,c,d;return 1==e.item.length&&""==e.item[0]?($(".home").addClass("current"),void 0):(a=$('<div class="nav">'),b=$("<ul>"),c=[],d="/",$.each(e.item,function(a,b){var f,g=$("<a>").attr("href",location.origin+d+b).text(decodeURIComponent(b));d+=decodeURIComponent(b)+"/",f=$("<li>").html(g),a==e.item.length-1&&f.addClass("current"),c.push(f)}),a.append(b.append(c)),$(".home").after(a),void 0)}var e={init:a,item:[],css:'html{scrollbar-color: hsla(0, 0%, 60%, 0.3) transparent;scrollbar-width: thin;}header .wrap::-webkit-scrollbar {height:5px}header .wrap::-webkit-scrollbar-thumb {background:#636e72;border-radius:8px}header .wrap::-webkit-scrollbar-track {background:#d6dadc}header .wrap{display: flex;overflow-x: auto;overflow-y: hidden;}header .wrap .home{color: #8c8c8c;}.nav{flex: 1;display: inline-block;color: initial;font-size: 20px;height: 56px;line-height: 56px;padding-right: 16px;}.nav ul{display: flex;list-style: none;margin: 0;padding: 0;}.nav li{color: #8c8c8c;white-space: nowrap;text-overflow: ellipsis;}.nav li a{color: inherit;}.nav li::before{content:"/";margin: 0 2px;color: #8c8c8c;}.wrap .current{color: #212121!important}'};return e}),nav.init(),$(".file-size,.file-modified").each(function(){""==$(this).text()&&$(this).text("-")}),$(function(){function a(){var a,b,d,e=[];for(a in c)c[a]&&e.push(a+":"+c[a]);b="sort="+e.join("+"),d=location.search,location.href=0==e.length?d.replace(/sort=([\w\W]*?)(&|$)/,""):d?d.indexOf("sort")>=0?d.replace(/sort=([\w\W]+?)(&|$)/,b):d+"&"+b:d+"?"+b}var b=(location.search.match(/sort=([\w\W]+?)(&|$)/)||["",""])[1],c={};b.split("+").forEach(function(a){var b=a.split(":");2==b.length&&(c[b[0]]=b[1])}),$("[data-sort]").on("click",function(){var b,d=$(this),e=d.attr("data-sort");d.attr("data-sort-value"),b=c[e],c={},c[e]="asc"==b?"":"desc"==b?"asc":"desc",a()})})}),InstantClick.init("mousedown");
