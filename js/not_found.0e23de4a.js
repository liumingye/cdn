(window["jsonpFunction"]=window["jsonpFunction"]||[]).push([["not_found"],{"553f":function(t,e,o){"use strict";var r=o("9773"),n=o.n(r);n.a},9703:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-row",{staticClass:"not-found-body"},[o("b-col",{attrs:{md:"2"}}),o("b-col",{attrs:{md:"8"}},[o("p",{staticClass:"not_found_face"},[t._v(":(")]),o("p",{staticClass:"not_found_content"},[t._v(t._s(t.$t("lang.not_found.content.title")))]),o("p",[o("b-button",{attrs:{variant:"light"},on:{click:function(e){return t.$router.push("/")}}},[t._v(t._s(t.$t("lang.not_found.content.go_home")))])],1),o("p",{staticClass:"not_found_footer"},[t._v(t._s(t.$t("lang.not_found.footer.text")))]),o("p",{staticClass:"not_found_footer"},[t._v(t._s(t.$t("lang.not_found.footer.beg.left"))+" "),o("github-button",{staticStyle:{position:"relative",bottom:"-.25em"},attrs:{href:"https://github.com/LucienShui/PasteMe","data-show-count":"true"}},[t._v("Star")]),t._v(" "+t._s(t.$t("lang.not_found.footer.beg.right")))],1)]),o("b-col",{attrs:{md:"2"}})],1)},n=[],a={name:"github-button",props:["href","ariaLabel","title","dataIcon","dataColorScheme","dataSize","dataShowCount","dataText"],render:function(t){return t("span",[t("a",{attrs:{href:this.href,"aria-label":this.ariaLabel,title:this.title,"data-icon":this.dataIcon,"data-color-scheme":this.dataColorScheme,"data-size":this.dataSize,"data-show-count":this.dataShowCount,"data-text":this.dataText},ref:"_"},this.$slots.default)])},mounted:function(){this.paint()},beforeUpdate:function(){this.reset()},updated:function(){this.paint()},beforeDestroy:function(){this.reset()},methods:{paint:function(){const t=this.$el.appendChild(document.createElement("span"));Promise.resolve().then(o.bind(null,"ab4d")).then(({render:e})=>{e(t.appendChild(this.$refs._),function(e){try{t.parentNode.replaceChild(e,t)}catch(t){}})})},reset:function(){this.$el.replaceChild(this.$refs._,this.$el.lastChild)}}},i={name:"NotFound",components:{GithubButton:a},mounted:function(){this.$store.commit("updateNotFound",{not_found:!0})}},l=i,c=(o("553f"),o("2877")),d=Object(c["a"])(l,r,n,!1,null,"309aa33a",null);e["default"]=d.exports},9773:function(t,e,o){},ab4d:function(t,e,o){"use strict";o.r(e),o.d(e,"render",function(){return H});
/*!
 * github-buttons v2.3.1
 * (c) 2019 なつき
 * @license BSD-2-Clause
 */
var r=window.document,n=window.Math,a=window.HTMLElement,i=window.XMLHttpRequest,l=function(t){return function(e,o,r){var n=t.createElement(e);if(o)for(var a in o){var i=o[a];null!=i&&(null!=n[a]?n[a]=i:n.setAttribute(a,i))}if(r)for(var l=0,c=r.length;l<c;l++){var d=r[l];n.appendChild("string"===typeof d?t.createTextNode(d):d)}return n}},c=l(r),d=function(t){var e;return function(){e||(e=1,t.apply(this,arguments))}},s=function(t,e){return{}.hasOwnProperty.call(t,e)},u="github-buttons",f="2.3.1",h="https://unpkg.com/"+u+"@"+f+"/dist/buttons.html",g="https://api.github.com",p=i&&i.prototype&&"withCredentials"in i.prototype,b=p&&a&&a.prototype.attachShadow&&!a.prototype.attachShadow.prototype,m=function(t,e,o){t.addEventListener?t.addEventListener(e,o):t.attachEvent("on"+e,o)},v=function(t,e,o){t.removeEventListener?t.removeEventListener(e,o):t.detachEvent("on"+e,o)},w=function(t,e,o){var r=function(n){return v(t,e,r),o(n)};m(t,e,r)},C=function(t,e,o){var r="readystatechange",n=function(a){if(e.test(t.readyState))return v(t,r,n),o(a)};m(t,r,n)},x=function(t){for(var e={href:t.href,title:t.title,"aria-label":t.getAttribute("aria-label")},o=["icon","color-scheme","text","size","show-count"],r=0,n=o.length;r<n;r++){var a="data-"+o[r];e[a]=t.getAttribute(a)}return null==e["data-text"]&&(e["data-text"]=t.textContent||t.innerText),e},F='body{margin:0}a{text-decoration:none;outline:0}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;font-size:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn,.social-count{display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;border:1px solid;border-radius:.25em}.social-count{position:relative;margin-left:5px}.social-count b,.social-count i{position:absolute;top:50%;left:0;display:block;width:0;height:0;margin:-4px 0 0 -4px;border:solid transparent;border-width:4px 4px 4px 0;_line-height:0;_border-top-color:red !important;_border-bottom-color:red !important;_border-left-color:red !important;_filter:chroma(color=red)}.social-count i{margin-left:-3px}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.widget-lg .social-count{margin-left:6px}.widget-lg .social-count b,.widget-lg .social-count i{margin:-5px 0 0 -5px;border-width:5px 5px 5px 0}.widget-lg .social-count i{margin-left:-4px}',_='a{color:#24292e}.btn,.social-count{border-color:#c5c9cc}.btn{background-color:#eff3f6;background-image:-webkit-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);background-position:-1px -1px;background-repeat:repeat-x;background-size:110% 110%;border-color:rgba(27,31,35,.2);-ms-filter:"progid:DXImageTransform.Microsoft.Gradient(startColorstr=\'#FFFAFBFC\', endColorstr=\'#FFEEF2F5\')";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr="#FFFAFBFC", endColorstr="#FFEEF2F5")}.btn:active{background-color:#eaeef2;background-image:none;border-color:#a5a9ac;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15)}.btn:focus,.btn:hover{background-color:#e6ebf0;background-image:-webkit-linear-gradient(top, #f0f3f6, #e6ebf0 90%);background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf0 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf0 90%);border-color:#a5a9ac;border-color:rgba(27,31,35,.35);-ms-filter:"progid:DXImageTransform.Microsoft.Gradient(startColorstr=\'#FFF0F3F6\', endColorstr=\'#FFE5EAEF\')";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr="#FFF0F3F6", endColorstr="#FFE5EAEF")}.social-count{background-color:#fff}.social-count:focus,.social-count:hover{color:#0366d6}.social-count b{border-right-color:#c5c9cc}.social-count i{border-right-color:#fff}',k='a{color:#d1d5da}.btn,.social-count{border-color:#1e2226}.btn{background-color:#282e33;background-image:-webkit-linear-gradient(top, #2f363d, #282e33 90%);background-image:-moz-linear-gradient(top, #2f363d, #282e33 90%);background-image:linear-gradient(180deg, #2f363d, #282e33 90%);background-position:-1px -1px;background-repeat:repeat-x;background-size:110% 110%;border-color:rgba(27,31,35,.8);-ms-filter:"progid:DXImageTransform.Microsoft.Gradient(startColorstr=\'#FF2F363D\', endColorstr=\'#FF272D32\')";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr="#FF2F363D", endColorstr="#FF272D32")}.btn:active{background-color:#24292f;background-image:none;border-color:#202429;border-color:rgba(27,31,35,.65);box-shadow:inset 0 .15em .3em rgba(27,31,35,.85)}.btn:focus,.btn:hover{background-color:#333a42;background-image:-webkit-linear-gradient(top, #3a434b, #333a42 90%);background-image:-moz-linear-gradient(top, #3a434b, #333a42 90%);background-image:linear-gradient(180deg, #3a434b, #333a42 90%);border-color:#202429;border-color:rgba(27,31,35,.65);-ms-filter:"progid:DXImageTransform.Microsoft.Gradient(startColorstr=\'#FF3A434B\', endColorstr=\'#FF323941\')";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr="#FF3A434B", endColorstr="#FF323941")}.social-count{background-color:#1b1f23}.social-count:focus,.social-count:hover{color:#2188ff}.social-count b{border-right-color:#1e2226}.social-count i{border-right-color:#1b1f23}',y=function(t,e,o,r){null==e&&(e="&"),null==o&&(o="="),null==r&&(r=window.encodeURIComponent);var n=[];for(var a in t){var i=t[a];null!=i&&n.push(r(a)+o+r(i))}return n.join(e)},z=function(t,e,o,r){null==e&&(e="&"),null==o&&(o="="),null==r&&(r=window.decodeURIComponent);for(var n={},a=t.split(e),i=0,l=a.length;i<l;++i){var c=a[i];if(""!==c){var d=c.split(o);n[r(d[0])]=null!=d[1]?r(d.slice(1).join(o)):void 0}}return n},M={light:_,dark:k},E=function(t,e){return"@media(prefers-color-scheme:"+t+"){"+M[s(M,e)?e:t]+"}"},$=function(t){if(null==t)return M.light;var e=z(t,";",":",function(t){return t.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")});return M[s(M,e["no-preference"])?e["no-preference"]:"light"]+E("light",e.light)+E("dark",e.dark)},S={"mark-github":{width:16,height:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>'},eye:{width:16,height:16,path:'<path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>'},star:{width:14,height:16,path:'<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/>'},"repo-forked":{width:10,height:16,path:'<path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/>'},"issue-opened":{width:14,height:16,path:'<path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/>'},"cloud-download":{width:16,height:16,path:'<path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"/>'}},T=function(t,e){return t=(""+t).toLowerCase().replace(/^octicon-/,""),s(S,t)||(t="mark-github"),'<svg version="1.1" width="'+e*S[t].width/S[t].height+'" height="'+e+'" viewBox="0 0 '+S[t].width+" "+S[t].height+'" class="octicon octicon-'+t+'" aria-hidden="true">'+S[t].path+"</svg>"},A={},D=function(t,e){var o=A[t]||(A[t]=[]);if(!(o.push(e)>1)){var r=d(function(){delete A[t];while(e=o.shift())e.apply(null,arguments)});if(p){var n=new i;m(n,"abort",r),m(n,"error",r),m(n,"load",function(){var t;try{t=JSON.parse(n.responseText)}catch(e){return void r(e)}r(200!==n.status,t)}),n.open("GET",t),n.send()}else{var a=this||window;a._=function(t){a._=null,r(200!==t.meta.status,t.data)};var c=l(a.document)("script",{async:!0,src:t+(/\?/.test(t)?"&":"?")+"callback=_"}),s=function(){a._&&a._({meta:{}})};m(c,"load",s),m(c,"error",s),c.readyState&&C(c,/de|m/,s),a.document.getElementsByTagName("head")[0].appendChild(c)}}},L=function(t,e,o){var r=l(t.ownerDocument),n=t.appendChild(r("style",{type:"text/css"})),a=F+$(e["data-color-scheme"]);n.styleSheet?n.styleSheet.cssText=a:n.appendChild(t.ownerDocument.createTextNode(a));var i=r("a",{className:"btn",href:e.href,target:"_blank",innerHTML:T(e["data-icon"],/^large$/i.test(e["data-size"])?16:14),"aria-label":e["aria-label"]||void 0},[" ",r("span",{},[e["data-text"]||""])]);/\.github\.com$/.test("."+i.hostname)?/^https?:\/\/((gist\.)?github\.com\/[^/?#]+\/[^/?#]+\/archive\/|github\.com\/[^/?#]+\/[^/?#]+\/releases\/download\/|codeload\.github\.com\/)/.test(i.href)&&(i.target="_top"):(i.href="#",i.target="_self");var c,d,s,u,f=t.appendChild(r("div",{className:"widget"+(/^large$/i.test(e["data-size"])?" widget-lg":"")},[i]));/^(true|1)$/i.test(e["data-show-count"])&&"github.com"===i.hostname&&(c=i.pathname.replace(/^(?!\/)/,"/").match(/^\/([^/?#]+)(?:\/([^/?#]+)(?:\/(?:(subscription)|(fork)|(issues)|([^/?#]+)))?)?(?:[/?#]|$)/))&&!c[6]?(c[2]?(d="/repos/"+c[1]+"/"+c[2],c[3]?(u="subscribers_count",s="watchers"):c[4]?(u="forks_count",s="network"):c[5]?(u="open_issues_count",s="issues"):(u="stargazers_count",s="stargazers")):(d="/users/"+c[1],s=u="followers"),D.call(this,g+d,function(t,e){if(!t){var n=e[u];f.appendChild(r("a",{className:"social-count",href:e.html_url+"/"+s,target:"_blank","aria-label":n+" "+u.replace(/_count$/,"").replace("_"," ").slice(0,n<2?-1:void 0)+" on GitHub"},[r("b"),r("i"),r("span",{},[(""+n).replace(/\B(?=(\d{3})+(?!\d))/g,",")])]))}o(f)})):o(f)},I=window.devicePixelRatio||1,B=function(t){return(I>1?n.ceil(n.round(t*I)/I*2)/2:n.ceil(t))||0},N=function(t){var e=t.offsetWidth,o=t.offsetHeight;if(t.getBoundingClientRect){var r=t.getBoundingClientRect();e=n.max(e,B(r.width)),o=n.max(o,B(r.height))}return[e,o]},G=function(t,e){t.style.width=e[0]+"px",t.style.height=e[1]+"px"},H=function(t,e){if(null!=t&&null!=e)if(t.getAttribute&&(t=x(t)),b){var o=c("span",{title:t.title||void 0});L(o.attachShadow({mode:"closed"}),t,function(){e(o)})}else{var n=c("iframe",{src:"javascript:0",title:t.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});G(n,[0,0]),n.style.border="none";var a=function(){var o,i=n.contentWindow;try{o=i.document.body}catch(l){return void r.body.appendChild(n.parentNode.removeChild(n))}v(n,"load",a),L.call(i,o,t,function(o){var r=N(o);n.parentNode.removeChild(n),w(n,"load",function(){G(n,r)}),n.src=h+"#"+(n.name=y(t)),e(n)})};m(n,"load",a),r.body.appendChild(n)}}}}]);