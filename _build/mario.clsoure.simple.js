var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(l,p,n){l!=Array.prototype&&l!=Object.prototype&&(l[p]=n.value)};$jscomp.getGlobal=function(l){return"undefined"!=typeof window&&window===l?l:"undefined"!=typeof global&&null!=global?global:l};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(l,p,n,q){if(p){n=$jscomp.global;l=l.split(".");for(q=0;q<l.length-1;q++){var G=l[q];G in n||(n[G]={});n=n[G]}l=l[l.length-1];q=n[l];p=p(q);p!=q&&null!=p&&$jscomp.defineProperty(n,l,{configurable:!0,writable:!0,value:p})}};$jscomp.polyfill("Math.imul",function(l){return l?l:function(l,n){l=Number(l);n=Number(n);var q=l&65535,p=n&65535;return q*p+((l>>>16&65535)*p+q*(n>>>16&65535)<<16>>>0)|0}},"es6-impl","es3");
$jscomp.polyfill("Array.prototype.fill",function(l){return l?l:function(l,n,q){var p=this.length||0;0>n&&(n=Math.max(0,p+n));if(null==q||q>p)q=p;q=Number(q);0>q&&(q=Math.max(0,p+q));for(n=Number(n||0);n<q;n++)this[n]=l;return this}},"es6-impl","es3");
(function(){function l(a,b,c){for(var d=Array(c),e=0;e<c;)d[e]=a[b],e=e+1|0,b=b+1|0;return d}function p(a,b){for(;;){var c=b,d=a,e=d.length,e=e?e:1,g=e-c.length|0;if(g)if(0>g)b=l(c,e,-g|0),a=d.apply(null,l(c,0,e));else return function(a,b){return function(c){return p(a,b.concat([c]))}}(d,c);else return d.apply(null,c)}}function n(a,b,c){if(7<c||0>c)return p(a,[b]);switch(c){case 0:case 1:return a(b);case 2:return function(c){return a(b,c)};case 3:return function(c,e){return a(b,c,e)};case 4:return function(c,
e,g){return a(b,c,e,g)};case 5:return function(c,e,g,f){return a(b,c,e,g,f)};case 6:return function(c,e,g,f,k){return a(b,c,e,g,f,k)};case 7:return function(c,e,g,f,k,h){return a(b,c,e,g,f,k,h)}}}function q(a,b){var c=a.length;return 1===c?a(b):n(a,b,c)}function G(a,b,c,d){if(7<d||0>d)return p(a,[b,c]);switch(d){case 0:case 1:return p(a(b),[c]);case 2:return a(b,c);case 3:return function(d){return a(b,c,d)};case 4:return function(d,g){return a(b,c,d,g)};case 5:return function(d,g,f){return a(b,c,
d,g,f)};case 6:return function(d,g,f,k){return a(b,c,d,g,f,k)};case 7:return function(d,g,f,k,h){return a(b,c,d,g,f,k,h)}}}function r(a,b){b.tag=a;return b}function I(a,b){for(;;){var c=b,d=a,e=typeof d,g=typeof c;if("string"===e)return e=d,e<c?-1:e===c?0:1;var f=+("number"===g);if(0!==+("number"===e))return 0!==f?d<c?-1:d===c?0:1:-1;if(0!==f)return 1;if("boolean"===e||"null"===e||"undefined"===e)return e=d,e===c?0:e<c?-1:1;if("function"===e||"function"===g)throw[N,"compare: functional value"];e=
d.tag|0;g=c.tag|0;if(250===e)a=d[0];else if(250===g)b=c[0];else{if(248===e)return e=d[1],c=c[1],e<c?-1:e===c?0:1;if(251===e)throw[N,"equal: abstract value"];if(e!==g)return e<g?-1:1;e=d.length;g=c.length;if(e===g)for(g=0;;){if(g===e)return 0;f=I(d[g],c[g]);if(0!==f)return f;g=g+1|0}else if(e<g)for(g=0;;){if(g===e)return-1;f=I(d[g],c[g]);if(0!==f)return f;g=g+1|0}else for(e=d,f=0,d=g;;){g=f;if(g===d)return 1;f=I(e[g],c[g]);if(0!==f)return f;f=g+1|0}}}}function ba(a,b){if(0===b)throw ca;return a%b}
function x(a){throw[da,a];}function m(a,b){return a?[a[0],m(a[1],b)]:b}function ea(a,b){return b?[q(a,b[0]),ea(a,b[1])]:0}function O(a,b){for(;;){var c=b;if(c)q(a,c[0]),b=c[1];else return 0}}function za(a,b,c){for(;;){var d=c,e=b;if(d){c=d[1];b=a;var d=d[0],g=b.length;b=2===g?b(e,d):G(b,e,d,g)}else return e}}function J(a,b){var c=a[0][4],d=a[0][3],e=d[0],g=a[0][3];return a[1].drawImage(a[4],c[0]+a[2][0]*e,c[1],e,d[1],b[0],b[1],g[0],g[1])}function Aa(a,b){J(a,[-b,0]);return J(a,[a[0][3][0]-b,0])}function Ba(a){a.getContext("2d").clearRect(0,
0,a.width,a.height);return 0}function Ca(a,b,c){b=""+b;c=""+c;var d=a.getContext("2d");d.font="10px 'Press Start 2P'";d.fillText("Score: "+b,a.width-140,18);d.fillText("Coins: "+c,120,18);return 0}function Da(a,b){var c=""+(b|0);a.getContext("2d").fillText(c,10,18);return 0}function P(a){a.rect(0,0,512,512);a.fillStyle="black";a.fill();a.fillStyle="white";a.font="20px 'Press Start 2P'";a.fillText("You win!",180,128);return x("Game over.")}function Ea(a){a.rect(0,0,512,512);a.fillStyle="black";a.fill();
a.fillStyle="white";a.font="20px 'Press Start 2P'";a.fillText("GAME OVER. You lose!",60,128);return x("Game over.")}function fa(a,b){return 0!==a?+(1===b):+(0===b)}function h(a,b,c,d,e,g,f,k){c=c?c[0]:Q;return[e,g,"./sprites/"+d,f,k,b?b[0]:[0,0],c[0]===Q[0]&&+(c[1]===Q[1])?f:c,a?a[0]:1]}function ga(a){var b=a[1];switch(a[0]){case 0:return h(0,[[1,1]],[[14,14]],"enemies.png",2,10,[16,16],[0,128]);case 1:return 0!==b?h(0,[[1,10]],[[11,16]],"enemies.png",2,10,[16,27],[32,69]):h(0,[[4,10]],[[11,16]],
"enemies.png",2,10,[16,27],[0,69]);case 2:return 0!==b?h(0,[[1,10]],[[11,16]],"enemies.png",2,10,[16,27],[32,5]):h(0,[[4,10]],[[11,16]],"enemies.png",2,10,[16,27],[0,5]);case 3:return h(0,[[2,2]],[[12,13]],"enemies.png",4,10,[16,16],[0,96]);case 4:return h(0,[[2,2]],[[12,13]],"enemies.png",4,10,[16,16],[0,32])}}function Fa(a){switch(a){case 0:return h(0,0,0,"enemies.png",1,0,[16,16],[0,144]);case 1:return h(0,0,0,"chunks.png",1,0,[8,8],[0,0]);case 2:return h(0,0,0,"chunks.png",1,0,[8,8],[8,0]);case 3:return h(0,
0,0,"score.png",1,0,[12,8],[0,0]);case 4:return h(0,0,0,"score.png",1,0,[12,9],[0,9]);case 5:return h(0,0,0,"score.png",1,0,[12,9],[0,18]);case 6:return h(0,0,0,"score.png",1,0,[12,9],[0,27]);case 7:return h(0,0,0,"score.png",1,0,[14,9],[13,0]);case 8:return h(0,0,0,"score.png",1,0,[14,9],[13,9]);case 9:return h(0,0,0,"score.png",1,0,[14,9],[13,18]);case 10:return h(0,0,0,"score.png",1,0,[14,9],[13,27])}}function Ga(a,b){switch(a.tag|0){case 0:var c=[a[1],b];if(0!==a[0]){var d=c[0];if(0!==c[1])switch(d){case 0:return h(0,
[[1,1]],[[11,15]],"mario-small.png",1,0,[16,16],[0,32]);case 1:return h(0,[[2,1]],[[13,15]],"mario-small.png",2,10,[16,16],[16,48]);case 2:return h(0,[[2,1]],[[12,15]],"mario-small.png",3,5,[16,16],[16,32]);case 3:return h(0,[[1,5]],[[14,10]],"mario-small.png",1,0,[16,16],[0,64])}else switch(d){case 0:return h(0,[[3,1]],[[11,15]],"mario-small.png",1,0,[16,16],[0,0]);case 1:return h(0,[[2,1]],[[13,15]],"mario-small.png",2,10,[16,16],[16,16]);case 2:return h(0,[[2,1]],[[12,15]],"mario-small.png",3,
5,[16,16],[16,0]);case 3:return h(0,[[1,5]],[[14,10]],"mario-small.png",1,0,[16,16],[0,64])}}else if(d=c[0],0!==c[1])switch(d){case 0:return h(0,[[1,1]],[[13,25]],"mario-big.png",1,0,[16,26],[16,69]);case 1:return h(0,[[2,1]],[[12,25]],"mario-big.png",1,0,[16,26],[48,70]);case 2:return h(0,[[2,1]],[[13,25]],"mario-big.png",4,10,[16,27],[0,101]);case 3:return h(0,[[2,10]],[[13,17]],"mario-big.png",1,0,[16,27],[32,69])}else switch(d){case 0:return h(0,[[2,1]],[[13,25]],"mario-big.png",1,0,[16,27],[16,
5]);case 1:return h(0,[[2,1]],[[12,25]],"mario-big.png",1,0,[16,26],[48,6]);case 2:return h(0,[[2,1]],[[13,25]],"mario-big.png",4,10,[16,27],[0,37]);case 3:return h(0,[[2,10]],[[13,17]],"mario-big.png",1,0,[16,27],[32,5])}case 1:return ga([a[0],b]);case 2:switch(a[0]){case 0:return h(0,[[2,0]],[[12,16]],"items.png",1,0,[16,16],[0,0]);case 1:return h(0,0,0,"items.png",1,0,[16,16],[0,188]);case 2:return h(0,0,0,"items.png",1,0,[16,16],[16,48]);case 3:return h(0,[[3,0]],[[12,16]],"items.png",3,15,[16,
16],[0,80])}case 3:if(c=a[0],"number"===typeof c)switch(c){case 0:return h(0,0,0,"blocks.png",1,0,[16,16],[0,32]);case 1:return h(0,0,0,"blocks.png",5,10,[16,16],[0,0]);case 2:return h(0,0,0,"blocks.png",1,0,[16,16],[0,48]);case 3:return h(0,0,0,"blocks.png",1,0,[16,16],[0,64]);case 4:return h(0,0,0,"panel.png",3,15,[26,26],[0,0]);case 5:return h(0,0,0,"ground.png",1,0,[16,16],[0,32])}else return h(0,0,0,"blocks.png",4,15,[16,16],[0,16])}}function R(a,b){var c=document.createElement("img");c.src=
a[2];return[a,b,[0],[0],c]}function A(a,b,c){a=Ga(a,b);return R(a,c)}function Ha(a){var b=h(0,0,0,"bgd-1.png",1,0,[512,256],[0,0]);return R(b,a)}function ha(a,b){var c=Fa(a);return R(c,b)}function B(a,b,c,d,e){a=a?a[0]:[0,0];b=b?b[0]:[0,0];e=2===c||1===c?[ha(c,e),0,300]:[ha(c,e),0,30];return[e,c,[d[0],d[1]],[a[0],a[1]],[b[0],b[1]],0,e[2]]}function ia(a,b,c){return B([[.5,-.7]],0,801<=a?2001<=a?4E3!==a?8E3!==a?3:10:9:1E3!==a?2E3<=a?8:3:7:201<=a?400!==a?800<=a?6:3:5:100!==a&&200<=a?4:3,b,c)}function C(a,
b,c){return[a?a[0]:1,b?b[0]:1]}function S(a){var b=a[0][1];a[2][0]=0!==a[6]?b:-b;return 0}function Ia(a){switch(a.tag|0){case 0:return C(0,[2.8],0);case 1:return 3<=a[0]?C(0,[3],0):C(0,0,0);case 2:return 3<=a[0]?C([0],0,0):C(0,0,0);case 3:return C([0],0,0)}}function K(a,b,c,d,e){a=a?a[0]:0;b=b?b[0]:0;d=A(c,b,d);c=Ia(c);a?a=a[0]:(T[0]=T[0]+1|0,a=T[0]);return[d,[c,[e[0],e[1]],[0,0],a,0,0,b,0,0,1,0,0]]}function D(a,b,c){c=K(0,0,a,b,[c[0],c[1]]);b=c[1];c=c[0];switch(a.tag|0){case 0:return r(0,[a[0],c,
b]);case 1:return S(b),r(1,[a[0],c,b]);case 2:return r(2,[a[0],c,b]);case 3:return r(3,[a[0],c,b])}}function L(a,b,c){var d=b[5],e=c[5];b=b[6];c=c[6];a[0]=a[0]-(c[0]+e[0])+(b[0]+d[0]);a[1]=a[1]-(c[1]+e[1])+(b[1]+d[1]);return 0}function Ja(a,b,c){var d=a[4],e=a[6],g=Math.abs(a[2][0]);O(function(c){var b=.2*a[2][0];switch(c){case 0:return a[10]||(a[2][0]>-a[0][1]&&(a[2][0]-=.4-b),a[6]=0),0;case 1:return a[10]||(a[2][0]<a[0][1]&&(a[2][0]+=.4+b),a[6]=1),0;case 2:return!a[4]&&a[5]&&(a[4]=1,a[5]=0,c=a[2][1]-
(5.7+.25*Math.abs(a[2][0])),a[2][1]=-6<c?c:-6),0;case 3:return!a[4]&&a[5]&&(a[10]=1),0}},b);b=.9*a[2][0];a[2][0]=.1>Math.abs(b)?0:b;b=1>=a[9]?1:0;return!d&&a[4]?[[b,A(r(0,[b,1]),a[6],c)]]:!fa(e,a[6])||0===g&&0<Math.abs(a[2][0])&&!a[4]?[[b,A(r(0,[b,2]),a[6],c)]]:!fa(e,a[6])&&a[4]&&d?[[b,A(r(0,[b,1]),a[6],c)]]:0===a[2][1]&&a[10]?[[b,A(r(0,[b,3]),a[6],c)]]:0===a[2][1]&&0===a[2][0]?[[b,A(r(0,[b,0]),a[6],c)]]:0}function y(a,b,c){a=a?a[0]:1;1!==b?0!==b?a&&(c[2][0]=0):c[2][1]=-.001:(c[2][1]=0,c[5]=1,c[4]=
0);return 0}function U(a){a[2][0]=-a[2][0];a[6]=0!==a[6]?0:1;return 0}function V(a,b,c,d,e){var g=0;switch(b){case 0:return d[8]=1,0;case 1:return b=K(0,[d[6]],r(1,[3]),e,[d[1][0],d[1][1]]),a=b[1],b=b[0],L(a[1],c[0],b[0]),[r(1,[3,b,a])];case 2:return b=K(0,[d[6]],r(1,[4]),e,[d[1][0],d[1][1]]),a=b[1],b=b[0],L(a[1],c[0],b[0]),[r(1,[4,b,a])];case 3:case 4:g=1}if(1===g)return d[6]=a,0!==d[2][0]?d[2][0]=0:S(d),0}function z(a,b,c){U(a);var d=c[0];b=ga([b,a[6]]);var e=document.createElement("img");e.src=
b[2];c[0]=b;c[4]=e;return L(a[1],d,c[0])}function v(a){var b=a[9]-1|0;b?a[7]||(a[9]=b):a[8]=1;return 0}function ja(a,b){v(a);var c=K(0,0,r(3,[0]),b,[a[1][0],a[1][1]]);return r(3,[0,c[0],c[1]])}function ka(a,b,c,d){b=D(r(2,[c]),d,[b[1][0],b[1][1]]);c=b[2];c[1][1]-=b[1][0][3][1];c[6]=0!==a?0:1;S(c);return b}function la(a){var b=a[1][0];a=a[2];var c=b[5],d=b[6],b=d[1],d=d[0];return[[a[1][0]+c[0]+d/2,a[1][1]+c[1]+b/2],[d/2,b/2]]}function Ka(a,b){var c=la(a),d=la(b),e=a[2];var g=a[2];var f=b[2];switch(a.tag|
0){case 0:var k=1===b.tag&&0<a[2][7]?1:0;break;case 1:k=2===b.tag?1:0;break;case 2:switch(b.tag|0){case 1:case 2:k=1;break;case 0:case 3:k=0}break;case 3:k=0}g=g[8]||f[8]?1:k;if(g)return 0;g=c[0][0]-d[0][0];f=c[0][1]-d[0][1];k=c[1][0]+d[1][0];c=c[1][1]+d[1][1];if(Math.abs(g)<k&&Math.abs(f)<c){d=k-Math.abs(g);c-=Math.abs(f);if(d>=c){if(0<f)return e[1][1]+=c,[0];e[1][1]-=c;return[1]}if(0<g)return e[1][0]+=d,[3];e[1][0]-=d;return[2]}return 0}function La(a,b){switch(a.tag|0){case 0:return 0;case 1:var c=
a[2],d=[c[1][0],c[1][1]],c=0<c[11]?[ia(c[11],d,b),0]:0,d=0!==a[0]?0:[B(0,0,0,d,b),0];return m(c,d);case 2:return d=a[2],0!==a[0]?0:[ia(d[11],[d[1][0],d[1][1]],b),0];case 3:d=a[2];c=a[0];if("number"===typeof c){if(1!==c)return 0;var e=[d[1][0],d[1][1]],d=B([[-5,-5]],[[0,.2]],1,e,b),c=B([[-3,-4]],[[0,.2]],1,e,b),g=B([[3,-4]],[[0,.2]],2,e,b),e=B([[5,-5]],[[0,.2]],2,e,b);return[d,[c,[g,[e,0]]]]}return 0}}function Ma(a,b){return[[0,0],[a[0],a[1]],[b[0],b[1]]]}function ma(a,b,c){var d=b/2,e=a-d,e=0<e?e:
0;b=c-b;a=Math.abs(a-d);a=b<a?b:a;return e<a?e:a}function na(a,b){var c=a[0][0]+a[1][0],d=a[0][1]-32,e=a[0][1]+a[1][1],g=b[1],f=b[0];return f>=a[0][0]-32&&f<=c&&g>=d?+(g<=e):0}function oa(a,b){return+(b>=a[0][1]+a[1][1])}function pa(a,b){var c=ma(b[0],a[1][0],a[2][0]),d=ma(b[1],a[1][1],a[2][1]);return[[c,d],a[1],a[2]]}function H(a,b){a[4]=a[4]+b|0;return 0}function Na(a,b,c,d){var e=d[1],g=0;switch(b.tag|0){case 0:var f=b[2];switch(c.tag|0){case 0:return[0,0];case 1:var k=c[2];b=c[1];c=c[0];if(1!==
a){var h=f;var l=c;var m=b;var n=k;g=2}else{var q=f;var t=c;var r=b;var u=k;g=1}break;case 2:var p=f;var w=c[0];var x=c[2];g=3;break;case 3:if(k=c[2],c=c[0],0!==a){if("number"===typeof c)if(4!==c)c=4;else return P(d[1]),[0,0];else c=4;if(4===c)return 1===a&&(d[6]=1),y(0,a,f),[0,0]}else{if("number"===typeof c)return 1!==c?4!==c?y(0,a,f):P(d[1]):b[0]?y(0,a,f):(y(0,a,f),v(k)),[0,0];d=ja(k,e);e=ka(f[6],k,c[0],e);y(0,a,f);return[[e],[d]]}}break;case 1:f=b[2];k=b[1];b=b[0];switch(c.tag|0){case 0:c=c[2];
0!==a?(h=c,l=b,m=k,n=f,g=2):(q=c,t=b,r=k,u=f,g=1);break;case 1:e=c[0];d=c[1];u=c[2];if(3!==b)if(4<=b){if(3<=e)return v(f),v(u),[0,0];a=1}else return 3<=e?0===u[2][0]?z(f,b,k):v(f):2<=a&&(z(f,b,k),z(u,e,d)),[0,0];else{if(3<=e)return v(f),v(u),[0,0];a=1}if(1===a)return 0===f[2][0]?z(u,e,d):v(u),[0,0];case 2:return[0,0];case 3:d=c[2];u=c[0];if(2<=a){if(3<=b){if("number"===typeof u)return 1!==u?z(f,b,k):(v(d),U(f)),[0,0];a=ja(d,e);e=ka(f[6],d,u[0],e);z(f,b,k);return[[a],[e]]}z(f,b,k);return[0,0]}y(0,
a,f);return[0,0]}break;case 2:f=b[2];switch(c.tag|0){case 0:p=c[2];w=b[0];x=f;g=3;break;case 1:case 2:return[0,0];case 3:return 2<=a?U(f):y(0,a,f),[0,0]}break;case 3:return[0,0]}switch(g){case 1:a=q;n=t;a[7]=10;a[4]=0;a[5]=1;if(3<=n)return e=V(a[6],n,r,u,e),a[2][1]=-4,a[1][1]-=5,[0,e];v(u);a[2][1]=-4;8===d[6]?(H(d,800),u[11]=800):(m=Oa(100,d[6]),H(d,m),u[11]=m,d[6]<<=1);return[0,V(a[6],n,r,u,e)];case 2:a=h;d=l;u=m;if(3<=d)return[0,0===n[2][0]?V(a[6],d,u,n,e):(v(a),a[7]=60,0)];v(a);a[7]=60;return[0,
0];case 3:return 0!==w?3<=w?(d[5]=d[5]+1|0,v(x),H(d,100)):(v(x),H(d,1E3)):(v(x),2!==p[9]&&(p[9]=p[9]+1|0),p[2][0]=0,p[2][1]=0,H(d,1E3),x[11]=1E3),[0,0]}}function Pa(a,b,c){var d=a[2];return Qa(function(){return na(c[2],d[1])||!a.tag?1:oa(c[2],d[1][1])})(b)}function qa(a,b,c){var d=b[2],e=b[1];d[7]=0<d[7]?d[7]-1|0:0;var g=na(a[2],d[1])||(b.tag?0:1)||oa(a[2],d[1][1]);if(!d[8]&&g){d[5]=0;g=a[3];if(d[5])d[2][1]=0;else if(d[0][0]){var f=d[2];var k=d[2][1]+.2+.01*Math.abs(d[2][1]);k=+(0>=I(k,4.5))?k:4.5;
f[1]=k}d[1][0]=d[2][0]+d[1][0];d[0][0]&&(d[1][1]=d[2][1]+d[1][1]);d[1][1]>g&&(d[8]=1);a:if(3===b.tag)c=0;else for(c=Pa(b,c,a),g=0;;)if(c){f=c[0];k=b[2];if(+(b[2][3]===f[2][3]))k=[0,0];else{var h=Ka(b,f);k=h?f[2][3]!==k[3]?Na(h[0],b,f,a):[0,0]:[0,0]}(f=k[0])?(k=k[1],f=f[0],g=k?[f,[k[0],g]]:[f,g]):g=(f=k[1])?[f[0],g]:g;c=c[1]}else{c=g;break a}a=a[2];g=d[1];a=[g[0]-a[0][0],g[1]-a[0][1]];J(e,[a[0],a[1]]);1===t[4]&&(a=[a[0],a[1]],g=e[1],f=e[0][5],k=e[0][6],g.strokeStyle="#FF0000",g.strokeRect(a[0]+f[0],
a[1]+f[1],k[0],k[1]));(d=0!==d[2][0])||(b=1===b.tag?1:0,d=!b);d&&(b=e[3][0],b>=e[0][1]?(e[3][0]=0,e[0][7]&&(e[2][0]=ba(e[2][0]+1|0,e[0][0]))):e[3][0]=b+1|0);return c}return 0}function Ra(){return za(function(a,b){return b[0]?[b[1],a]:a},0,[[t[0],0],[[t[1],1],[[t[2],2],[[t[3],3],0]]]])}function ra(a,b,c){if(b.tag){var d=b[2];c=qa(a,b,c);d[8]||(E[0]=[b,m(E[0],c)]);a=d[8]?La(b,a[1]):0;F[0]=m(F[0],a);return b}var d=b[2],e=Ra(0);d[10]=0;if(e=Ja(d,e,a[1])){var e=e[0],g=e[1];L(d[1],b[1][0],g[0]);b=r(0,[e[0],
g,d])}a=qa(a,b,c);E[0]=m(E[0],a);return b}function Sa(a,b,c){var d=b[0],e=a.getContext("2d"),g=Ma([a.width/1,a.height/1],c);c=[Ha(e),e,pa(g,d[2][1]),c[1],0,0,1,0];c[1].scale(1,1);var f=function(c,b,d,e,g){if(1===b[7])return P(b[1]);E[0]=0;F[0]=0;var k=1/((c-sa[0])/1E3);sa[0]=c;Ba(a);Aa(b[0],ba(b[2][0][0]/5|0,b[0][0][3][0]|0));var h=ra(b,d,e);if(1===h[2][8])return Ea(b[1]);var m=b.slice();m[2]=pa(b[2],h[2][1]);O(function(a){ra(m,a,e);return 0},e);O(function(a){a[6]=a[6]-1|0;a[6]||(a[5]=1);a[3][0]+=
a[4][0];a[3][1]+=a[4][1];a[2][0]=a[3][0]+a[2][0];a[2][1]=a[3][1]+a[2][1];J(a[0][0],[a[2][0]-m[2][0][0],a[2][1]-m[2][0][1]]);a[5]||(F[0]=[a,F[0]]);return 0},g);Da(a,k);Ca(a,m[4],m[5]);requestAnimationFrame(function(a){return f(a,m,h,E[0],F[0])});return 0};return f(0,c,d,b[1],0)}function Ta(a){a=a.keyCode;if(41<=a){if(a=a-65|0,!(22<a||0>a))switch(a){case 0:t[0]=1;break;case 1:t[4]=(t[4]+1|0)%2;break;case 3:t[1]=1;break;case 18:t[3]=1;break;case 22:t[2]=1}}else if(32<=a)switch(a-32|0){case 5:t[0]=1;
break;case 0:case 6:t[2]=1;break;case 7:t[1]=1;break;case 8:t[3]=1}return!0}function Ua(a){a=a.keyCode;if(68<=a)83!==a?87!==a?69<=a||(t[1]=0):t[2]=0:t[3]=0;else if(41<=a)65===a&&(t[0]=0);else if(32<=a)switch(a-32|0){case 5:t[0]=0;break;case 0:case 6:t[2]=0;break;case 7:t[1]=0;break;case 8:t[3]=0}return!0}function w(a,b){var c=Math.random()*(b-a|0);c=2147483647<c?2147483647:-2147483648>c?-2147483648:Math.floor(c);return c+a|0}function W(a,b){for(;;){var c=b;if(c){var d=c[0][1];if(a[0]===d[0]&&+(a[1]===
d[1]))return 1;b=c[1]}else return 0}}function ta(a){if(a){var b=a[0];return m([[b[0],[16*b[1][0],16*b[1][1]]],0],ta(a[1]))}return 0}function Va(a){if(2<a||0>a)return x("Shouldn't reach here");switch(a){case 0:return 2;case 1:return 1;case 2:return 0}}function Wa(a){if(4<a||0>a)return x("Shouldn't reach here");switch(a){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return[0];case 4:return 5}}function M(a,b){for(;;){var c=a;if(c){var d=c[1],c=c[0];if(W(c[1],b))a=d;else return m([c,0],M(d,b))}else return 0}}
function X(a,b,c){for(;;){var d=a;if(d){a=d[1];var d=d[0],e=d[1][0],g=d[1][1],f=16*b,k=16*c;if(!(128>e||528>f-e||0===g||48>k-g))return m([d,0],X(a,b,c))}else return 0}}function ua(a,b,c,d){return d?m([[c,[a,b]],0],ua(a+1,b,c,d-1|0)):0}function va(a){for(;;){var b=a;a=w(0,2);if(b){var c=b[1],b=b[0];if(a)a=c;else return m([[0,[b[1][0],b[1][1]-16]],0],va(c))}else return 0}}function Xa(a,b,c,d,e){if(c>a||d>b)return 0;var g=w(0,4),f=w(0,2),k=w(0,5)?f:3;if(5<e||0>e)return x("Shouldn't reach here");switch(e){case 0:return 2<
a-c?[[f,[c,d]],[[k,[c+1,d]],[[f,[c+2,d]],0]]]:1<a-c?[[g,[c,d]],[[g,[c+1,d]],0]]:[[g,[c,d]],0];case 1:return a=w(0,5)+5|0,5>d?ua(c,d,2,a):0;case 2:return 1===b-d?m([[f,[c,d]],[[f,[c+1,d]],[[f,[c+2,d]],[[f,[c+3,d]],0]]]],m([[f,[c+1,d-1]],[[f,[c+2,d-1]],[[f,[c+3,d-1]],0]]],m([[f,[c+2,d-2]],[[f,[c+3,d-2]],0]],[[f,[c+3,d-3]],0]))):0;case 3:return 0===f&&3<b-d?m([[f,[c,d]],[[f,[c+1,d]],[[f,[c+2,d]],0]]],m([[f,[c+2,d+1]],[[f,[c+3,d+1]],0]],[[f,[c+5,d+2]],[[f,[c+6,d+2]],0]])):2<b-d?m([[f,[c,d]],[[f,[c+1,
d]],0]],m([[f,[c+3,d-1]],[[f,[c+4,d-1]],0]],[[f,[c+4,d-2]],[[f,[c+5,d-2]],[[f,[c+6,d-2]],0]]])):[[f,[c,d]],0];case 4:return 2===d+3-b?[[f,[c,d]],0]:1===d+3-b?[[f,[c,d]],[[f,[c,d+1]],0]]:[[f,[c,d]],[[f,[c,d+1]],[[f,[c,d+2]],0]]];case 5:return[[3,[c,d]],0]}}function wa(a,b,c,d,e){for(;;){var g=c;if(g>a-32)return 0;if(d>b-1||15>g)d=0,c=g+1;else{if(!W([g,d],e)&&0!==d){var f=w(0,30);if(3>f&&b-1===d)return m([[f,[16*g,16*d]],0],wa(a,b,g,d+1,e))}d+=1}}}function xa(a){for(;;){var b=a;a=w(0,20);var c=w(0,
3);if(b){var d=b[1],b=b[0];if(a)a=d;else return m([[c,[b[1][0],b[1][1]-16]],0],xa(d))}else return 0}}function Y(a,b){if(a){var c=a[0],d=Wa(c[0]),c=D(r(3,[d]),b,c[1]);return m([c,0],Y(a[1],b))}return 0}function Z(a,b){if(a){var c=a[0],d=Va(c[0]),c=D(r(1,[d]),b,c[1]);return m([c,0],Z(a[1],b))}return 0}function ya(a,b){if(a){var c=D(r(2,[3]),b,a[0][1]);return m([c,0],ya(a[1],b))}return 0}function Ya(){return ea(function(a){a="sprites/"+a;var b=document.createElement("img");b.src=a;b.addEventListener("load",
function(){aa[0]=aa[0]+1|0;if(4===aa[0]){var a=document.getElementById("canvas"),a=null!==a?a:(console.log("can find canvas canvas"),x("fail")),b=a.getContext("2d");document.addEventListener("keydown",Ta,!0);document.addEventListener("keyup",Ua,!0);var e,g;b:for(var f=g=e=0;;){var k=f,h=e;if(33>150-h){g=k;break b}if(14<g)g=0,e=h+1;else{if(!W([h,g],k)&&0!==g){var l=w(0,100);5>l&&(f=Xa(150,15,h,g,l),f=M(f,k),f=m(k,f))}g+=1}}e=X(ta(g),150,15);k=Y(e,b);b:for(f=l=0;;){h=f;if(150<l)break b;if(10<l){var n=
w(0,10),h=m(h,[[4,[16*l,240]],0]);7===n&&32<150-l||(f=h)}else f=m(h,[[4,[16*l,240]],0]);l+=1}f=Y(h,b);g=m(g,h);k=m(k,f);g=wa(150,15,0,0,g);g=Z(g,b);h=va(e);f=X(M(h,e),150,15);h=m(e,h);e=xa(e);e=M(e,h);e=Z(e,b);f=ya(f,b);h=D(r(3,[4]),b,[2144,160]);e=m(k,m(g,m(f,m(e,[h,0]))));b=[D(r(0,[1,0]),b,[100,224]),e];Sa(a,b,[2400,256]);console.log("asd")}return!0},!0);return 0},["blocks.png",["items.png",["enemies.png",["mario-small.png",0]]]])}var da=["Failure",-2],N=["Invalid_argument",-3],ca=["Division_by_zero",
-5];da.tag=248;N.tag=248;ca.tag=248;var Oa=Math.imul||function(a,b){b|=0;return((a>>16)*b<<16)+(a&65535)*b|0},Qa=function(a){return function(b){for(var c=0,d=b;;){var e=d;b=c;if(e)d=e[1],e=e[0],q(a,e)&&(c=[e,b]);else{a:for(c=b,b=0;;)if(c)b=[c[0],b],c=c[1];else{c=b;break a}return c}}}},Q=[0,0],T=[-2147483648],t=[0,0,0,0,0],E=[0],F=[0],sa=[0],aa=[0];window.onload=function(){Ya(0);return!0}})();