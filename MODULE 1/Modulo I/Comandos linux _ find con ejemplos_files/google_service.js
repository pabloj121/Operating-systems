(function(){(function(){function a(a){this.t={};this.tick=function(a,b,c){c=void 0!=c?c:(new Date).getTime();this.t[a]=[c,b]};this.tick("start",null,a)}var b;if(window.performance)var c=(b=window.performance.timing)&&b.responseStart;var d=0<c?new a(c):new a;window.GA_jstiming={Timer:a,load:d};b&&(b=b.navigationStart,0<b&&c>=b&&(window.GA_jstiming.srt=c-b))})();if(window.GA_jstiming){window.GA_jstiming.c={};window.GA_jstiming.j=1;var g=function(a,b,c){var d=a.t[b],e=a.t.start;if(d&&(e||c))return d=a.t[b][0],e=void 0!=c?c:e[0],a=d-e,Math.round(a)},h=function(a,b,c){var d="";window.GA_jstiming.srt&&(d+="&srt="+window.GA_jstiming.srt,delete window.GA_jstiming.srt);var e=a.t,p=e.start,q=[],k=[],f;for(f in e)if("start"!=f&&0!=f.indexOf("_")){var l=e[f][1];l?e[l]&&k.push(f+"."+g(a,f,e[l][0])):p&&q.push(f+"."+g(a,f))}delete e.start;if(b)for(var t in b)d+="&"+t+
"="+b[t];(b=c)||(b="https://csi.gstatic.com/csi");return a=[b,"?v=3","&s="+(window.GA_jstiming.sn||"gam")+"&action=",a.name,k.length?"&it="+k.join(","):"",d,"&rt=",q.join(",")].join("")},m=function(a,b,c){a=h(a,b,c);if(!a)return"";b=new Image;var d=window.GA_jstiming.j++;window.GA_jstiming.c[d]=b;b.onload=b.onerror=function(){window.GA_jstiming&&delete window.GA_jstiming.c[d]};b.src=a;b=null;return a};window.GA_jstiming.report=function(a,b,c){return m(a,b,c)}};var n=this,r=function(a,b){a=a.split(".");var c=c||n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b},u=function(a,b){function c(){}c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.m=function(a,c,p){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var v=/^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/,w=function(a,b){return a?(a=a.match(v))?a[0]:b:b};var x=function(a,b){var c,d;for(d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(c,a[d],d,a)};var y=/^true$/.test("false"),z=/^true$/.test("false"),A=z||!y;var B=function(){return w("","pubads.g.doubleclick.net")};var C=function(){this.h={};this.f={};var a=a||[];for(var b=0,c=a.length;b<c;++b)this.f[a[b]]=""};C.prototype.b=function(){var a=[];x(this.h,function(b,d){a.push(d)});var b=function(b){""!=b&&a.push(b)};x(this.f,b);return a};function D(a){if(a&&"string"==typeof a&&0<a.length){var b=window.GS_googleServiceIds_.adsense;null==b&&(b=new E,window.GS_googleServiceIds_.adsense=b);b:{for(var c=0;c<b.a.length;c++)if(a==b.a[c])break b;b.a[b.a.length]=a}a=b}else a=null;return a}r("GS_googleAddAdSenseService",D);function F(){for(var a in window.GS_googleServiceIds_){var b=window.GS_googleServiceIds_[a];"function"!=typeof b&&b.enable()}}r("GS_googleEnableAllServices",F);function G(){window.GS_googleServiceIds_={}}
r("GS_googleResetAllServices",G);function H(){var a=window.GS_googleServiceIds_.adsense;return a=null==a?"":a.a.join()}r("GS_googleGetIdsForAdSenseService",H);function I(a){return J(a)}r("GS_googleFindService",I);function K(){var a=J("adsense");return a?a.b():""}r("GS_googleGetExpIdsForAdSense",K);function L(a){this.l=a;this.a=[];this.i=new C}L.prototype.toString=function(){for(var a="["+this.l+" ids: ",b=0;b<this.a.length;b++)0<b&&(a+=","),a+=this.a[b];return a+="]"};L.prototype.b=function(){return this.i.b().join()};
var J=function(a){return a=null==a?null:window.GS_googleServiceIds_[a]};function E(){L.call(this,"adsense");this.g=!1}u(E,L);
E.prototype.enable=function(){A=z;if(!this.g){var a=document.URL;var b;if(b=a){a:{if(a){b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec(decodeURIComponent(a));if(c){var d=c[1]&&1<c[1].length?c[1].substring(1):"true";break a}}catch(e){}}d=""}b=0<d.length}a=b?"google_ads_dbg.js":"google_ads.js";d="http://"+w("","partner.googleadservices.com");A&&(d="https://"+w("","securepubads.g.doubleclick.net"));c="";b=B();(b="pubads.g.doubleclick.net"==b)||
(c="?prodhost="+B());a=d+"/gampad/"+a+c;document.write('<script src="'+a+'">\x3c/script>');this.g=!0;window.GA_jstiming&&window.GA_jstiming.Timer&&(window.GA_jstiming.load.name="load",window.GA_jstiming.load.tick("start"))}};window.GS_googleServiceIds_||(window.GS_googleServiceIds_={});}).call(this);
