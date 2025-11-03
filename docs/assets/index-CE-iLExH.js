(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(u){if(u.ep)return;u.ep=!0;const f=o(u);fetch(u.href,f)}})();function iT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nf={exports:{}},Js={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function sT(){if(ry)return Js;ry=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(r,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var p in u)p!=="key"&&(f[p]=u[p])}else f=u;return u=f.ref,{$$typeof:t,type:r,key:d,ref:u!==void 0?u:null,props:f}}return Js.Fragment=i,Js.jsx=o,Js.jsxs=o,Js}var ly;function oT(){return ly||(ly=1,nf.exports=sT()),nf.exports}var v=oT(),af={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy;function rT(){if(uy)return ce;uy=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function T(E){return E===null||typeof E!="object"?null:(E=S&&E[S]||E["@@iterator"],typeof E=="function"?E:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,z={};function R(E,G,J){this.props=E,this.context=G,this.refs=z,this.updater=J||j}R.prototype.isReactComponent={},R.prototype.setState=function(E,G){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,G,"setState")},R.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function k(){}k.prototype=R.prototype;function L(E,G,J){this.props=E,this.context=G,this.refs=z,this.updater=J||j}var Q=L.prototype=new k;Q.constructor=L,D(Q,R.prototype),Q.isPureReactComponent=!0;var P=Array.isArray;function Z(){}var N={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function F(E,G,J){var W=J.ref;return{$$typeof:t,type:E,key:G,ref:W!==void 0?W:null,props:J}}function ae(E,G){return F(E.type,G,E.props)}function se(E){return typeof E=="object"&&E!==null&&E.$$typeof===t}function Oe(E){var G={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(J){return G[J]})}var en=/\/+/g;function gt(E,G){return typeof E=="object"&&E!==null&&E.key!=null?Oe(""+E.key):G.toString(36)}function ft(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(Z,Z):(E.status="pending",E.then(function(G){E.status==="pending"&&(E.status="fulfilled",E.value=G)},function(G){E.status==="pending"&&(E.status="rejected",E.reason=G)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function q(E,G,J,W,re){var fe=typeof E;(fe==="undefined"||fe==="boolean")&&(E=null);var xe=!1;if(E===null)xe=!0;else switch(fe){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(E.$$typeof){case t:case i:xe=!0;break;case y:return xe=E._init,q(xe(E._payload),G,J,W,re)}}if(xe)return re=re(E),xe=W===""?"."+gt(E,0):W,P(re)?(J="",xe!=null&&(J=xe.replace(en,"$&/")+"/"),q(re,G,J,"",function(vn){return vn})):re!=null&&(se(re)&&(re=ae(re,J+(re.key==null||E&&E.key===re.key?"":(""+re.key).replace(en,"$&/")+"/")+xe)),G.push(re)),1;xe=0;var Ye=W===""?".":W+":";if(P(E))for(var we=0;we<E.length;we++)W=E[we],fe=Ye+gt(W,we),xe+=q(W,G,J,fe,re);else if(we=T(E),typeof we=="function")for(E=we.call(E),we=0;!(W=E.next()).done;)W=W.value,fe=Ye+gt(W,we++),xe+=q(W,G,J,fe,re);else if(fe==="object"){if(typeof E.then=="function")return q(ft(E),G,J,W,re);throw G=String(E),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return xe}function K(E,G,J){if(E==null)return E;var W=[],re=0;return q(E,W,"","",function(fe){return G.call(J,fe,re++)}),W}function ee(E){if(E._status===-1){var G=E._result;G=G(),G.then(function(J){(E._status===0||E._status===-1)&&(E._status=1,E._result=J)},function(J){(E._status===0||E._status===-1)&&(E._status=2,E._result=J)}),E._status===-1&&(E._status=0,E._result=G)}if(E._status===1)return E._result.default;throw E._result}var le=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},pe={map:K,forEach:function(E,G,J){K(E,function(){G.apply(this,arguments)},J)},count:function(E){var G=0;return K(E,function(){G++}),G},toArray:function(E){return K(E,function(G){return G})||[]},only:function(E){if(!se(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ce.Activity=x,ce.Children=pe,ce.Component=R,ce.Fragment=o,ce.Profiler=u,ce.PureComponent=L,ce.StrictMode=r,ce.Suspense=h,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ce.__COMPILER_RUNTIME={__proto__:null,c:function(E){return N.H.useMemoCache(E)}},ce.cache=function(E){return function(){return E.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(E,G,J){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var W=D({},E.props),re=E.key;if(G!=null)for(fe in G.key!==void 0&&(re=""+G.key),G)!V.call(G,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&G.ref===void 0||(W[fe]=G[fe]);var fe=arguments.length-2;if(fe===1)W.children=J;else if(1<fe){for(var xe=Array(fe),Ye=0;Ye<fe;Ye++)xe[Ye]=arguments[Ye+2];W.children=xe}return F(E.type,re,W)},ce.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:f,_context:E},E},ce.createElement=function(E,G,J){var W,re={},fe=null;if(G!=null)for(W in G.key!==void 0&&(fe=""+G.key),G)V.call(G,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(re[W]=G[W]);var xe=arguments.length-2;if(xe===1)re.children=J;else if(1<xe){for(var Ye=Array(xe),we=0;we<xe;we++)Ye[we]=arguments[we+2];re.children=Ye}if(E&&E.defaultProps)for(W in xe=E.defaultProps,xe)re[W]===void 0&&(re[W]=xe[W]);return F(E,fe,re)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(E){return{$$typeof:p,render:E}},ce.isValidElement=se,ce.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:ee}},ce.memo=function(E,G){return{$$typeof:m,type:E,compare:G===void 0?null:G}},ce.startTransition=function(E){var G=N.T,J={};N.T=J;try{var W=E(),re=N.S;re!==null&&re(J,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(Z,le)}catch(fe){le(fe)}finally{G!==null&&J.types!==null&&(G.types=J.types),N.T=G}},ce.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ce.use=function(E){return N.H.use(E)},ce.useActionState=function(E,G,J){return N.H.useActionState(E,G,J)},ce.useCallback=function(E,G){return N.H.useCallback(E,G)},ce.useContext=function(E){return N.H.useContext(E)},ce.useDebugValue=function(){},ce.useDeferredValue=function(E,G){return N.H.useDeferredValue(E,G)},ce.useEffect=function(E,G){return N.H.useEffect(E,G)},ce.useEffectEvent=function(E){return N.H.useEffectEvent(E)},ce.useId=function(){return N.H.useId()},ce.useImperativeHandle=function(E,G,J){return N.H.useImperativeHandle(E,G,J)},ce.useInsertionEffect=function(E,G){return N.H.useInsertionEffect(E,G)},ce.useLayoutEffect=function(E,G){return N.H.useLayoutEffect(E,G)},ce.useMemo=function(E,G){return N.H.useMemo(E,G)},ce.useOptimistic=function(E,G){return N.H.useOptimistic(E,G)},ce.useReducer=function(E,G,J){return N.H.useReducer(E,G,J)},ce.useRef=function(E){return N.H.useRef(E)},ce.useState=function(E){return N.H.useState(E)},ce.useSyncExternalStore=function(E,G,J){return N.H.useSyncExternalStore(E,G,J)},ce.useTransition=function(){return N.H.useTransition()},ce.version="19.2.0",ce}var cy;function hd(){return cy||(cy=1,af.exports=rT()),af.exports}var C=hd();const on=iT(C);var sf={exports:{}},Ws={},of={exports:{}},rf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy;function lT(){return fy||(fy=1,(function(t){function i(q,K){var ee=q.length;q.push(K);e:for(;0<ee;){var le=ee-1>>>1,pe=q[le];if(0<u(pe,K))q[le]=K,q[ee]=pe,ee=le;else break e}}function o(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var K=q[0],ee=q.pop();if(ee!==K){q[0]=ee;e:for(var le=0,pe=q.length,E=pe>>>1;le<E;){var G=2*(le+1)-1,J=q[G],W=G+1,re=q[W];if(0>u(J,ee))W<pe&&0>u(re,J)?(q[le]=re,q[W]=ee,le=W):(q[le]=J,q[G]=ee,le=G);else if(W<pe&&0>u(re,ee))q[le]=re,q[W]=ee,le=W;else break e}}return K}function u(q,K){var ee=q.sortIndex-K.sortIndex;return ee!==0?ee:q.id-K.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;t.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();t.unstable_now=function(){return d.now()-p}}var h=[],m=[],y=1,x=null,S=3,T=!1,j=!1,D=!1,z=!1,R=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function Q(q){for(var K=o(m);K!==null;){if(K.callback===null)r(m);else if(K.startTime<=q)r(m),K.sortIndex=K.expirationTime,i(h,K);else break;K=o(m)}}function P(q){if(D=!1,Q(q),!j)if(o(h)!==null)j=!0,Z||(Z=!0,Oe());else{var K=o(m);K!==null&&ft(P,K.startTime-q)}}var Z=!1,N=-1,V=5,F=-1;function ae(){return z?!0:!(t.unstable_now()-F<V)}function se(){if(z=!1,Z){var q=t.unstable_now();F=q;var K=!0;try{e:{j=!1,D&&(D=!1,k(N),N=-1),T=!0;var ee=S;try{t:{for(Q(q),x=o(h);x!==null&&!(x.expirationTime>q&&ae());){var le=x.callback;if(typeof le=="function"){x.callback=null,S=x.priorityLevel;var pe=le(x.expirationTime<=q);if(q=t.unstable_now(),typeof pe=="function"){x.callback=pe,Q(q),K=!0;break t}x===o(h)&&r(h),Q(q)}else r(h);x=o(h)}if(x!==null)K=!0;else{var E=o(m);E!==null&&ft(P,E.startTime-q),K=!1}}break e}finally{x=null,S=ee,T=!1}K=void 0}}finally{K?Oe():Z=!1}}}var Oe;if(typeof L=="function")Oe=function(){L(se)};else if(typeof MessageChannel<"u"){var en=new MessageChannel,gt=en.port2;en.port1.onmessage=se,Oe=function(){gt.postMessage(null)}}else Oe=function(){R(se,0)};function ft(q,K){N=R(function(){q(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_next=function(q){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var ee=S;S=K;try{return q()}finally{S=ee}},t.unstable_requestPaint=function(){z=!0},t.unstable_runWithPriority=function(q,K){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ee=S;S=q;try{return K()}finally{S=ee}},t.unstable_scheduleCallback=function(q,K,ee){var le=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?le+ee:le):ee=le,q){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=ee+pe,q={id:y++,callback:K,priorityLevel:q,startTime:ee,expirationTime:pe,sortIndex:-1},ee>le?(q.sortIndex=ee,i(m,q),o(h)===null&&q===o(m)&&(D?(k(N),N=-1):D=!0,ft(P,ee-le))):(q.sortIndex=pe,i(h,q),j||T||(j=!0,Z||(Z=!0,Oe()))),q},t.unstable_shouldYield=ae,t.unstable_wrapCallback=function(q){var K=S;return function(){var ee=S;S=K;try{return q.apply(this,arguments)}finally{S=ee}}}})(rf)),rf}var dy;function uT(){return dy||(dy=1,of.exports=lT()),of.exports}var lf={exports:{}},dt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hy;function cT(){if(hy)return dt;hy=1;var t=hd();function i(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var r={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(h,m,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:x==null?null:""+x,children:h,containerInfo:m,implementation:y}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,dt.createPortal=function(h,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return f(h,m,null,y)},dt.flushSync=function(h){var m=d.T,y=r.p;try{if(d.T=null,r.p=2,h)return h()}finally{d.T=m,r.p=y,r.d.f()}},dt.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(h,m))},dt.prefetchDNS=function(h){typeof h=="string"&&r.d.D(h)},dt.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var y=m.as,x=p(y,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,T=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?r.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:T}):y==="script"&&r.d.X(h,{crossOrigin:x,integrity:S,fetchPriority:T,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},dt.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=p(m.as,m.crossOrigin);r.d.M(h,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(h)},dt.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,x=p(y,m.crossOrigin);r.d.L(h,y,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},dt.preloadModule=function(h,m){if(typeof h=="string")if(m){var y=p(m.as,m.crossOrigin);r.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(h)},dt.requestFormReset=function(h){r.d.r(h)},dt.unstable_batchedUpdates=function(h,m){return h(m)},dt.useFormState=function(h,m,y){return d.H.useFormState(h,m,y)},dt.useFormStatus=function(){return d.H.useHostTransitionStatus()},dt.version="19.2.0",dt}var my;function rv(){if(my)return lf.exports;my=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),lf.exports=cT(),lf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function fT(){if(py)return Ws;py=1;var t=uT(),i=hd(),o=rv();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(f(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(s=l.return,s!==null){a=s;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return h(l),e;if(c===s)return h(l),n;c=c.sibling}throw Error(r(188))}if(a.return!==s.return)a=l,s=c;else{for(var g=!1,b=l.child;b;){if(b===a){g=!0,a=l,s=c;break}if(b===s){g=!0,s=l,a=c;break}b=b.sibling}if(!g){for(b=c.child;b;){if(b===a){g=!0,a=c,s=l;break}if(b===s){g=!0,s=c,a=l;break}b=b.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),L=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function Oe(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}var en=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===en?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case R:return"Profiler";case z:return"StrictMode";case P:return"Suspense";case Z:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case L:return e.displayName||"Context";case k:return(e._context.displayName||"Context")+".Consumer";case Q:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return n=e.displayName||null,n!==null?n:gt(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return gt(e(n))}catch{}}return null}var ft=Array.isArray,q=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},le=[],pe=-1;function E(e){return{current:e}}function G(e){0>pe||(e.current=le[pe],le[pe]=null,pe--)}function J(e,n){pe++,le[pe]=e.current,e.current=n}var W=E(null),re=E(null),fe=E(null),xe=E(null);function Ye(e,n){switch(J(fe,n),J(re,e),J(W,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?zg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=zg(n),e=Rg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(W),J(W,e)}function we(){G(W),G(re),G(fe)}function vn(e){e.memoizedState!==null&&J(xe,e);var n=W.current,a=Rg(n,e.type);n!==a&&(J(re,e),J(W,a))}function bn(e){re.current===e&&(G(W),G(re)),xe.current===e&&(G(xe),Ks._currentValue=ee)}var Vt,oh;function Ta(e){if(Vt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Vt=n&&n[1]||"",oh=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vt+e+oh}var Bl=!1;function Ul(e,n){if(!e||Bl)return"";Bl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(B){var _=B}Reflect.construct(e,[],X)}else{try{X.call()}catch(B){_=B}e.call(X.prototype)}}else{try{throw Error()}catch(B){_=B}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(B){if(B&&_&&typeof B.stack=="string")return[B.stack,_.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),g=c[0],b=c[1];if(g&&b){var A=g.split(`
`),$=b.split(`
`);for(l=s=0;s<A.length&&!A[s].includes("DetermineComponentFrameRoot");)s++;for(;l<$.length&&!$[l].includes("DetermineComponentFrameRoot");)l++;if(s===A.length||l===$.length)for(s=A.length-1,l=$.length-1;1<=s&&0<=l&&A[s]!==$[l];)l--;for(;1<=s&&0<=l;s--,l--)if(A[s]!==$[l]){if(s!==1||l!==1)do if(s--,l--,0>l||A[s]!==$[l]){var H=`
`+A[s].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=s&&0<=l);break}}}finally{Bl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ta(a):""}function Nx(e,n){switch(e.tag){case 26:case 27:case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return e.child!==n&&n!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return Ul(e.type,!1);case 11:return Ul(e.type.render,!1);case 1:return Ul(e.type,!0);case 31:return Ta("Activity");default:return""}}function rh(e){try{var n="",a=null;do n+=Nx(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Hl=Object.prototype.hasOwnProperty,ql=t.unstable_scheduleCallback,Gl=t.unstable_cancelCallback,Vx=t.unstable_shouldYield,_x=t.unstable_requestPaint,Et=t.unstable_now,Lx=t.unstable_getCurrentPriorityLevel,lh=t.unstable_ImmediatePriority,uh=t.unstable_UserBlockingPriority,Do=t.unstable_NormalPriority,Bx=t.unstable_LowPriority,ch=t.unstable_IdlePriority,Ux=t.log,Hx=t.unstable_setDisableYieldValue,ss=null,wt=null;function Yn(e){if(typeof Ux=="function"&&Hx(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(ss,e)}catch{}}var jt=Math.clz32?Math.clz32:Yx,qx=Math.log,Gx=Math.LN2;function Yx(e){return e>>>=0,e===0?32:31-(qx(e)/Gx|0)|0}var zo=256,Ro=262144,ko=4194304;function Aa(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Oo(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var l=0,c=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var b=s&134217727;return b!==0?(s=b&~c,s!==0?l=Aa(s):(g&=b,g!==0?l=Aa(g):a||(a=b&~e,a!==0&&(l=Aa(a))))):(b=s&~c,b!==0?l=Aa(b):g!==0?l=Aa(g):a||(a=s&~e,a!==0&&(l=Aa(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function os(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Xx(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fh(){var e=ko;return ko<<=1,(ko&62914560)===0&&(ko=4194304),e}function Yl(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function rs(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Px(e,n,a,s,l,c){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,A=e.expirationTimes,$=e.hiddenUpdates;for(a=g&~a;0<a;){var H=31-jt(a),X=1<<H;b[H]=0,A[H]=-1;var _=$[H];if(_!==null)for($[H]=null,H=0;H<_.length;H++){var B=_[H];B!==null&&(B.lane&=-536870913)}a&=~X}s!==0&&dh(e,s,0),c!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=c&~(g&~n))}function dh(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-jt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function hh(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-jt(a),l=1<<s;l&n|e[s]&n&&(e[s]|=n),a&=~l}}function mh(e,n){var a=n&-n;return a=(a&42)!==0?1:Xl(a),(a&(e.suspendedLanes|n))!==0?0:a}function Xl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ph(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:ey(e.type))}function gh(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var Xn=Math.random().toString(36).slice(2),st="__reactFiber$"+Xn,yt="__reactProps$"+Xn,Ja="__reactContainer$"+Xn,Kl="__reactEvents$"+Xn,Kx="__reactListeners$"+Xn,Qx="__reactHandles$"+Xn,yh="__reactResources$"+Xn,ls="__reactMarker$"+Xn;function Ql(e){delete e[st],delete e[yt],delete e[Kl],delete e[Kx],delete e[Qx]}function Wa(e){var n=e[st];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ja]||a[st]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Lg(e);e!==null;){if(a=e[st])return a;e=Lg(e)}return n}e=a,a=e.parentNode}return null}function Ia(e){if(e=e[st]||e[Ja]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function us(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ei(e){var n=e[yh];return n||(n=e[yh]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tt(e){e[ls]=!0}var vh=new Set,bh={};function Ca(e,n){ti(e,n),ti(e+"Capture",n)}function ti(e,n){for(bh[e]=n,e=0;e<n.length;e++)vh.add(n[e])}var Zx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xh={},Sh={};function Fx(e){return Hl.call(Sh,e)?!0:Hl.call(xh,e)?!1:Zx.test(e)?Sh[e]=!0:(xh[e]=!0,!1)}function $o(e,n,a){if(Fx(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function No(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function xn(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function _t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Th(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jx(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,c=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(g){a=""+g,c.call(this,g)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Zl(e){if(!e._valueTracker){var n=Th(e)?"checked":"value";e._valueTracker=Jx(e,n,""+e[n])}}function Ah(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Th(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function Vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Wx=/[\n"\\]/g;function Lt(e){return e.replace(Wx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fl(e,n,a,s,l,c,g,b){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_t(n)):e.value!==""+_t(n)&&(e.value=""+_t(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?Jl(e,g,_t(n)):a!=null?Jl(e,g,_t(a)):s!=null&&e.removeAttribute("value"),l==null&&c!=null&&(e.defaultChecked=!!c),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+_t(b):e.removeAttribute("name")}function Ch(e,n,a,s,l,c,g,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Zl(e);return}a=a!=null?""+_t(a):"",n=n!=null?""+_t(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=b?e.checked:!!s,e.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Zl(e)}function Jl(e,n,a){n==="number"&&Vo(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ni(e,n,a,s){if(e=e.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=n.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&s&&(e[a].defaultSelected=!0)}else{for(a=""+_t(a),n=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Eh(e,n,a){if(n!=null&&(n=""+_t(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_t(a):""}function wh(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=_t(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Zl(e)}function ai(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ix=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Ix.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Mh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var l in n)s=n[l],n.hasOwnProperty(l)&&a[l]!==s&&jh(e,l,s)}else for(var c in n)n.hasOwnProperty(c)&&jh(e,c,n[c])}function Wl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var e1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),t1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _o(e){return t1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Sn(){}var Il=null;function eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ii=null,si=null;function Dh(e){var n=Ia(e);if(n&&(e=n.stateNode)){var a=e[yt]||null;e:switch(e=n.stateNode,n.type){case"input":if(Fl(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Lt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var l=s[yt]||null;if(!l)throw Error(r(90));Fl(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ah(s)}break e;case"textarea":Eh(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ni(e,!!a.multiple,n,!1)}}}var tu=!1;function zh(e,n,a){if(tu)return e(n,a);tu=!0;try{var s=e(n);return s}finally{if(tu=!1,(ii!==null||si!==null)&&(Cr(),ii&&(n=ii,e=si,si=ii=null,Dh(n),e)))for(n=0;n<e.length;n++)Dh(e[n])}}function cs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[yt]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(Tn)try{var fs={};Object.defineProperty(fs,"passive",{get:function(){nu=!0}}),window.addEventListener("test",fs,fs),window.removeEventListener("test",fs,fs)}catch{nu=!1}var Pn=null,au=null,Lo=null;function Rh(){if(Lo)return Lo;var e,n=au,a=n.length,s,l="value"in Pn?Pn.value:Pn.textContent,c=l.length;for(e=0;e<a&&n[e]===l[e];e++);var g=a-e;for(s=1;s<=g&&n[a-s]===l[c-s];s++);return Lo=l.slice(e,1<s?1-s:void 0)}function Bo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Uo(){return!0}function kh(){return!1}function vt(e){function n(a,s,l,c,g){this._reactName=a,this._targetInst=l,this.type=s,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Uo:kh,this.isPropagationStopped=kh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),n}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ho=vt(Ea),ds=x({},Ea,{view:0,detail:0}),n1=vt(ds),iu,su,hs,qo=x({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hs&&(hs&&e.type==="mousemove"?(iu=e.screenX-hs.screenX,su=e.screenY-hs.screenY):su=iu=0,hs=e),iu)},movementY:function(e){return"movementY"in e?e.movementY:su}}),Oh=vt(qo),a1=x({},qo,{dataTransfer:0}),i1=vt(a1),s1=x({},ds,{relatedTarget:0}),ou=vt(s1),o1=x({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),r1=vt(o1),l1=x({},Ea,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),u1=vt(l1),c1=x({},Ea,{data:0}),$h=vt(c1),f1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m1(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=h1[e])?!!n[e]:!1}function ru(){return m1}var p1=x({},ds,{key:function(e){if(e.key){var n=f1[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Bo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?d1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(e){return e.type==="keypress"?Bo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),g1=vt(p1),y1=x({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nh=vt(y1),v1=x({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),b1=vt(v1),x1=x({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),S1=vt(x1),T1=x({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A1=vt(T1),C1=x({},Ea,{newState:0,oldState:0}),E1=vt(C1),w1=[9,13,27,32],lu=Tn&&"CompositionEvent"in window,ms=null;Tn&&"documentMode"in document&&(ms=document.documentMode);var j1=Tn&&"TextEvent"in window&&!ms,Vh=Tn&&(!lu||ms&&8<ms&&11>=ms),_h=" ",Lh=!1;function Bh(e,n){switch(e){case"keyup":return w1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var oi=!1;function M1(e,n){switch(e){case"compositionend":return Uh(n);case"keypress":return n.which!==32?null:(Lh=!0,_h);case"textInput":return e=n.data,e===_h&&Lh?null:e;default:return null}}function D1(e,n){if(oi)return e==="compositionend"||!lu&&Bh(e,n)?(e=Rh(),Lo=au=Pn=null,oi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Vh&&n.locale!=="ko"?null:n.data;default:return null}}var z1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!z1[e.type]:n==="textarea"}function qh(e,n,a,s){ii?si?si.push(s):si=[s]:ii=s,n=Rr(n,"onChange"),0<n.length&&(a=new Ho("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var ps=null,gs=null;function R1(e){Cg(e,0)}function Go(e){var n=us(e);if(Ah(n))return e}function Gh(e,n){if(e==="change")return n}var Yh=!1;if(Tn){var uu;if(Tn){var cu="oninput"in document;if(!cu){var Xh=document.createElement("div");Xh.setAttribute("oninput","return;"),cu=typeof Xh.oninput=="function"}uu=cu}else uu=!1;Yh=uu&&(!document.documentMode||9<document.documentMode)}function Ph(){ps&&(ps.detachEvent("onpropertychange",Kh),gs=ps=null)}function Kh(e){if(e.propertyName==="value"&&Go(gs)){var n=[];qh(n,gs,e,eu(e)),zh(R1,n)}}function k1(e,n,a){e==="focusin"?(Ph(),ps=n,gs=a,ps.attachEvent("onpropertychange",Kh)):e==="focusout"&&Ph()}function O1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Go(gs)}function $1(e,n){if(e==="click")return Go(n)}function N1(e,n){if(e==="input"||e==="change")return Go(n)}function V1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Mt=typeof Object.is=="function"?Object.is:V1;function ys(e,n){if(Mt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var l=a[s];if(!Hl.call(n,l)||!Mt(e[l],n[l]))return!1}return!0}function Qh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zh(e,n){var a=Qh(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qh(a)}}function Fh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Fh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Jh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Vo(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Vo(e.document)}return n}function fu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var _1=Tn&&"documentMode"in document&&11>=document.documentMode,ri=null,du=null,vs=null,hu=!1;function Wh(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hu||ri==null||ri!==Vo(s)||(s=ri,"selectionStart"in s&&fu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),vs&&ys(vs,s)||(vs=s,s=Rr(du,"onSelect"),0<s.length&&(n=new Ho("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=ri)))}function wa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var li={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionrun:wa("Transition","TransitionRun"),transitionstart:wa("Transition","TransitionStart"),transitioncancel:wa("Transition","TransitionCancel"),transitionend:wa("Transition","TransitionEnd")},mu={},Ih={};Tn&&(Ih=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function ja(e){if(mu[e])return mu[e];if(!li[e])return e;var n=li[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ih)return mu[e]=n[a];return e}var em=ja("animationend"),tm=ja("animationiteration"),nm=ja("animationstart"),L1=ja("transitionrun"),B1=ja("transitionstart"),U1=ja("transitioncancel"),am=ja("transitionend"),im=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function tn(e,n){im.set(e,n),Ca(n,[e])}var Yo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Bt=[],ui=0,gu=0;function Xo(){for(var e=ui,n=gu=ui=0;n<e;){var a=Bt[n];Bt[n++]=null;var s=Bt[n];Bt[n++]=null;var l=Bt[n];Bt[n++]=null;var c=Bt[n];if(Bt[n++]=null,s!==null&&l!==null){var g=s.pending;g===null?l.next=l:(l.next=g.next,g.next=l),s.pending=l}c!==0&&sm(a,l,c)}}function Po(e,n,a,s){Bt[ui++]=e,Bt[ui++]=n,Bt[ui++]=a,Bt[ui++]=s,gu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function yu(e,n,a,s){return Po(e,n,a,s),Ko(e)}function Ma(e,n){return Po(e,null,null,n),Ko(e)}function sm(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var l=!1,c=e.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(l=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,l&&n!==null&&(l=31-jt(a),e=c.hiddenUpdates,s=e[l],s===null?e[l]=[n]:s.push(n),n.lane=a|536870912),c):null}function Ko(e){if(50<Us)throw Us=0,wc=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ci={};function H1(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,n,a,s){return new H1(e,n,a,s)}function vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function An(e,n){var a=e.alternate;return a===null?(a=Dt(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function om(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Qo(e,n,a,s,l,c){var g=0;if(s=e,typeof e=="function")vu(e)&&(g=1);else if(typeof e=="string")g=PS(e,a,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case F:return e=Dt(31,a,n,l),e.elementType=F,e.lanes=c,e;case D:return Da(a.children,l,c,n);case z:g=8,l|=24;break;case R:return e=Dt(12,a,n,l|2),e.elementType=R,e.lanes=c,e;case P:return e=Dt(13,a,n,l),e.elementType=P,e.lanes=c,e;case Z:return e=Dt(19,a,n,l),e.elementType=Z,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:g=10;break e;case k:g=9;break e;case Q:g=11;break e;case N:g=14;break e;case V:g=16,s=null;break e}g=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Dt(g,a,n,l),n.elementType=e,n.type=s,n.lanes=c,n}function Da(e,n,a,s){return e=Dt(7,e,s,n),e.lanes=a,e}function bu(e,n,a){return e=Dt(6,e,null,n),e.lanes=a,e}function rm(e){var n=Dt(18,null,null,0);return n.stateNode=e,n}function xu(e,n,a){return n=Dt(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var lm=new WeakMap;function Ut(e,n){if(typeof e=="object"&&e!==null){var a=lm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:rh(n)},lm.set(e,n),n)}return{value:e,source:n,stack:rh(n)}}var fi=[],di=0,Zo=null,bs=0,Ht=[],qt=0,Kn=null,ln=1,un="";function Cn(e,n){fi[di++]=bs,fi[di++]=Zo,Zo=e,bs=n}function um(e,n,a){Ht[qt++]=ln,Ht[qt++]=un,Ht[qt++]=Kn,Kn=e;var s=ln;e=un;var l=32-jt(s)-1;s&=~(1<<l),a+=1;var c=32-jt(n)+l;if(30<c){var g=l-l%5;c=(s&(1<<g)-1).toString(32),s>>=g,l-=g,ln=1<<32-jt(n)+l|a<<l|s,un=c+e}else ln=1<<c|a<<l|s,un=e}function Su(e){e.return!==null&&(Cn(e,1),um(e,1,0))}function Tu(e){for(;e===Zo;)Zo=fi[--di],fi[di]=null,bs=fi[--di],fi[di]=null;for(;e===Kn;)Kn=Ht[--qt],Ht[qt]=null,un=Ht[--qt],Ht[qt]=null,ln=Ht[--qt],Ht[qt]=null}function cm(e,n){Ht[qt++]=ln,Ht[qt++]=un,Ht[qt++]=Kn,ln=n.id,un=n.overflow,Kn=e}var ot=null,$e=null,Se=!1,Qn=null,Gt=!1,Au=Error(r(519));function Zn(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xs(Ut(n,e)),Au}function fm(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[st]=e,n[yt]=s,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<qs.length;a++)ye(qs[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Ch(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),wh(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Mg(n.textContent,a)?(s.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),s.onScroll!=null&&ye("scroll",n),s.onScrollEnd!=null&&ye("scrollend",n),s.onClick!=null&&(n.onclick=Sn),n=!0):n=!1,n||Zn(e,!0)}function dm(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 31:case 13:Gt=!1;return;case 27:case 3:Gt=!0;return;default:ot=ot.return}}function hi(e){if(e!==ot)return!1;if(!Se)return dm(e),Se=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Hc(e.type,e.memoizedProps)),a=!a),a&&$e&&Zn(e),dm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));$e=_g(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));$e=_g(e)}else n===27?(n=$e,ua(e.type)?(e=Pc,Pc=null,$e=e):$e=n):$e=ot?Xt(e.stateNode.nextSibling):null;return!0}function za(){$e=ot=null,Se=!1}function Cu(){var e=Qn;return e!==null&&(Tt===null?Tt=e:Tt.push.apply(Tt,e),Qn=null),e}function xs(e){Qn===null?Qn=[e]:Qn.push(e)}var Eu=E(null),Ra=null,En=null;function Fn(e,n,a){J(Eu,n._currentValue),n._currentValue=a}function wn(e){e._currentValue=Eu.current,G(Eu)}function wu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function ju(e,n,a,s){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var c=l.dependencies;if(c!==null){var g=l.child;c=c.firstContext;e:for(;c!==null;){var b=c;c=l;for(var A=0;A<n.length;A++)if(b.context===n[A]){c.lanes|=a,b=c.alternate,b!==null&&(b.lanes|=a),wu(c.return,a,e),s||(g=null);break e}c=b.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(r(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),wu(g,a,e),g=null}else g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===e){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function mi(e,n,a,s){e=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var b=l.type;Mt(l.pendingProps.value,g.value)||(e!==null?e.push(b):e=[b])}}else if(l===xe.current){if(g=l.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ks):e=[Ks])}l=l.return}e!==null&&ju(n,e,a,s),n.flags|=262144}function Fo(e){for(e=e.firstContext;e!==null;){if(!Mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ka(e){Ra=e,En=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return hm(Ra,e)}function Jo(e,n){return Ra===null&&ka(e),hm(e,n)}function hm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},En===null){if(e===null)throw Error(r(308));En=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else En=En.next=n;return a}var q1=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},G1=t.unstable_scheduleCallback,Y1=t.unstable_NormalPriority,Qe={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new q1,data:new Map,refCount:0}}function Ss(e){e.refCount--,e.refCount===0&&G1(Y1,function(){e.controller.abort()})}var Ts=null,Du=0,pi=0,gi=null;function X1(e,n){if(Ts===null){var a=Ts=[];Du=0,pi=kc(),gi={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Du++,n.then(mm,mm),n}function mm(){if(--Du===0&&Ts!==null){gi!==null&&(gi.status="fulfilled");var e=Ts;Ts=null,pi=0,gi=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function P1(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(s.status="rejected",s.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),s}var pm=q.S;q.S=function(e,n){Wp=Et(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&X1(e,n),pm!==null&&pm(e,n)};var Oa=E(null);function zu(){var e=Oa.current;return e!==null?e:ke.pooledCache}function Wo(e,n){n===null?J(Oa,Oa.current):J(Oa,n.pool)}function gm(){var e=zu();return e===null?null:{parent:Qe._currentValue,pool:e}}var yi=Error(r(460)),Ru=Error(r(474)),Io=Error(r(542)),er={then:function(){}};function ym(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Sn,Sn),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,xm(e),e;default:if(typeof n.status=="string")n.then(Sn,Sn);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=s}},function(s){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,xm(e),e}throw Na=n,yi}}function $a(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Na=a,yi):a}}var Na=null;function bm(){if(Na===null)throw Error(r(459));var e=Na;return Na=null,e}function xm(e){if(e===yi||e===Io)throw Error(r(483))}var vi=null,As=0;function tr(e){var n=As;return As+=1,vi===null&&(vi=[]),vm(vi,e,n)}function Cs(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function nr(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Sm(e){function n(M,w){if(e){var O=M.deletions;O===null?(M.deletions=[w],M.flags|=16):O.push(w)}}function a(M,w){if(!e)return null;for(;w!==null;)n(M,w),w=w.sibling;return null}function s(M){for(var w=new Map;M!==null;)M.key!==null?w.set(M.key,M):w.set(M.index,M),M=M.sibling;return w}function l(M,w){return M=An(M,w),M.index=0,M.sibling=null,M}function c(M,w,O){return M.index=O,e?(O=M.alternate,O!==null?(O=O.index,O<w?(M.flags|=67108866,w):O):(M.flags|=67108866,w)):(M.flags|=1048576,w)}function g(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function b(M,w,O,Y){return w===null||w.tag!==6?(w=bu(O,M.mode,Y),w.return=M,w):(w=l(w,O),w.return=M,w)}function A(M,w,O,Y){var ne=O.type;return ne===D?H(M,w,O.props.children,Y,O.key):w!==null&&(w.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===V&&$a(ne)===w.type)?(w=l(w,O.props),Cs(w,O),w.return=M,w):(w=Qo(O.type,O.key,O.props,null,M.mode,Y),Cs(w,O),w.return=M,w)}function $(M,w,O,Y){return w===null||w.tag!==4||w.stateNode.containerInfo!==O.containerInfo||w.stateNode.implementation!==O.implementation?(w=xu(O,M.mode,Y),w.return=M,w):(w=l(w,O.children||[]),w.return=M,w)}function H(M,w,O,Y,ne){return w===null||w.tag!==7?(w=Da(O,M.mode,Y,ne),w.return=M,w):(w=l(w,O),w.return=M,w)}function X(M,w,O){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=bu(""+w,M.mode,O),w.return=M,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case T:return O=Qo(w.type,w.key,w.props,null,M.mode,O),Cs(O,w),O.return=M,O;case j:return w=xu(w,M.mode,O),w.return=M,w;case V:return w=$a(w),X(M,w,O)}if(ft(w)||Oe(w))return w=Da(w,M.mode,O,null),w.return=M,w;if(typeof w.then=="function")return X(M,tr(w),O);if(w.$$typeof===L)return X(M,Jo(M,w),O);nr(M,w)}return null}function _(M,w,O,Y){var ne=w!==null?w.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return ne!==null?null:b(M,w,""+O,Y);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case T:return O.key===ne?A(M,w,O,Y):null;case j:return O.key===ne?$(M,w,O,Y):null;case V:return O=$a(O),_(M,w,O,Y)}if(ft(O)||Oe(O))return ne!==null?null:H(M,w,O,Y,null);if(typeof O.then=="function")return _(M,w,tr(O),Y);if(O.$$typeof===L)return _(M,w,Jo(M,O),Y);nr(M,O)}return null}function B(M,w,O,Y,ne){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return M=M.get(O)||null,b(w,M,""+Y,ne);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case T:return M=M.get(Y.key===null?O:Y.key)||null,A(w,M,Y,ne);case j:return M=M.get(Y.key===null?O:Y.key)||null,$(w,M,Y,ne);case V:return Y=$a(Y),B(M,w,O,Y,ne)}if(ft(Y)||Oe(Y))return M=M.get(O)||null,H(w,M,Y,ne,null);if(typeof Y.then=="function")return B(M,w,O,tr(Y),ne);if(Y.$$typeof===L)return B(M,w,O,Jo(w,Y),ne);nr(w,Y)}return null}function I(M,w,O,Y){for(var ne=null,Te=null,te=w,he=w=0,be=null;te!==null&&he<O.length;he++){te.index>he?(be=te,te=null):be=te.sibling;var Ae=_(M,te,O[he],Y);if(Ae===null){te===null&&(te=be);break}e&&te&&Ae.alternate===null&&n(M,te),w=c(Ae,w,he),Te===null?ne=Ae:Te.sibling=Ae,Te=Ae,te=be}if(he===O.length)return a(M,te),Se&&Cn(M,he),ne;if(te===null){for(;he<O.length;he++)te=X(M,O[he],Y),te!==null&&(w=c(te,w,he),Te===null?ne=te:Te.sibling=te,Te=te);return Se&&Cn(M,he),ne}for(te=s(te);he<O.length;he++)be=B(te,M,he,O[he],Y),be!==null&&(e&&be.alternate!==null&&te.delete(be.key===null?he:be.key),w=c(be,w,he),Te===null?ne=be:Te.sibling=be,Te=be);return e&&te.forEach(function(ma){return n(M,ma)}),Se&&Cn(M,he),ne}function ie(M,w,O,Y){if(O==null)throw Error(r(151));for(var ne=null,Te=null,te=w,he=w=0,be=null,Ae=O.next();te!==null&&!Ae.done;he++,Ae=O.next()){te.index>he?(be=te,te=null):be=te.sibling;var ma=_(M,te,Ae.value,Y);if(ma===null){te===null&&(te=be);break}e&&te&&ma.alternate===null&&n(M,te),w=c(ma,w,he),Te===null?ne=ma:Te.sibling=ma,Te=ma,te=be}if(Ae.done)return a(M,te),Se&&Cn(M,he),ne;if(te===null){for(;!Ae.done;he++,Ae=O.next())Ae=X(M,Ae.value,Y),Ae!==null&&(w=c(Ae,w,he),Te===null?ne=Ae:Te.sibling=Ae,Te=Ae);return Se&&Cn(M,he),ne}for(te=s(te);!Ae.done;he++,Ae=O.next())Ae=B(te,M,he,Ae.value,Y),Ae!==null&&(e&&Ae.alternate!==null&&te.delete(Ae.key===null?he:Ae.key),w=c(Ae,w,he),Te===null?ne=Ae:Te.sibling=Ae,Te=Ae);return e&&te.forEach(function(aT){return n(M,aT)}),Se&&Cn(M,he),ne}function Re(M,w,O,Y){if(typeof O=="object"&&O!==null&&O.type===D&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case T:e:{for(var ne=O.key;w!==null;){if(w.key===ne){if(ne=O.type,ne===D){if(w.tag===7){a(M,w.sibling),Y=l(w,O.props.children),Y.return=M,M=Y;break e}}else if(w.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===V&&$a(ne)===w.type){a(M,w.sibling),Y=l(w,O.props),Cs(Y,O),Y.return=M,M=Y;break e}a(M,w);break}else n(M,w);w=w.sibling}O.type===D?(Y=Da(O.props.children,M.mode,Y,O.key),Y.return=M,M=Y):(Y=Qo(O.type,O.key,O.props,null,M.mode,Y),Cs(Y,O),Y.return=M,M=Y)}return g(M);case j:e:{for(ne=O.key;w!==null;){if(w.key===ne)if(w.tag===4&&w.stateNode.containerInfo===O.containerInfo&&w.stateNode.implementation===O.implementation){a(M,w.sibling),Y=l(w,O.children||[]),Y.return=M,M=Y;break e}else{a(M,w);break}else n(M,w);w=w.sibling}Y=xu(O,M.mode,Y),Y.return=M,M=Y}return g(M);case V:return O=$a(O),Re(M,w,O,Y)}if(ft(O))return I(M,w,O,Y);if(Oe(O)){if(ne=Oe(O),typeof ne!="function")throw Error(r(150));return O=ne.call(O),ie(M,w,O,Y)}if(typeof O.then=="function")return Re(M,w,tr(O),Y);if(O.$$typeof===L)return Re(M,w,Jo(M,O),Y);nr(M,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,w!==null&&w.tag===6?(a(M,w.sibling),Y=l(w,O),Y.return=M,M=Y):(a(M,w),Y=bu(O,M.mode,Y),Y.return=M,M=Y),g(M)):a(M,w)}return function(M,w,O,Y){try{As=0;var ne=Re(M,w,O,Y);return vi=null,ne}catch(te){if(te===yi||te===Io)throw te;var Te=Dt(29,te,null,M.mode);return Te.lanes=Y,Te.return=M,Te}finally{}}}var Va=Sm(!0),Tm=Sm(!1),Jn=!1;function ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ou(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function In(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ce&2)!==0){var l=s.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),s.pending=n,n=Ko(e),sm(e,null,a),n}return Po(e,s,n,a),Ko(e)}function Es(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,hh(e,a)}}function $u(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Nu=!1;function ws(){if(Nu){var e=gi;if(e!==null)throw e}}function js(e,n,a,s){Nu=!1;var l=e.updateQueue;Jn=!1;var c=l.firstBaseUpdate,g=l.lastBaseUpdate,b=l.shared.pending;if(b!==null){l.shared.pending=null;var A=b,$=A.next;A.next=null,g===null?c=$:g.next=$,g=A;var H=e.alternate;H!==null&&(H=H.updateQueue,b=H.lastBaseUpdate,b!==g&&(b===null?H.firstBaseUpdate=$:b.next=$,H.lastBaseUpdate=A))}if(c!==null){var X=l.baseState;g=0,H=$=A=null,b=c;do{var _=b.lane&-536870913,B=_!==b.lane;if(B?(ve&_)===_:(s&_)===_){_!==0&&_===pi&&(Nu=!0),H!==null&&(H=H.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var I=e,ie=b;_=n;var Re=a;switch(ie.tag){case 1:if(I=ie.payload,typeof I=="function"){X=I.call(Re,X,_);break e}X=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=ie.payload,_=typeof I=="function"?I.call(Re,X,_):I,_==null)break e;X=x({},X,_);break e;case 2:Jn=!0}}_=b.callback,_!==null&&(e.flags|=64,B&&(e.flags|=8192),B=l.callbacks,B===null?l.callbacks=[_]:B.push(_))}else B={lane:_,tag:b.tag,payload:b.payload,callback:b.callback,next:null},H===null?($=H=B,A=X):H=H.next=B,g|=_;if(b=b.next,b===null){if(b=l.shared.pending,b===null)break;B=b,b=B.next,B.next=null,l.lastBaseUpdate=B,l.shared.pending=null}}while(!0);H===null&&(A=X),l.baseState=A,l.firstBaseUpdate=$,l.lastBaseUpdate=H,c===null&&(l.shared.lanes=0),ia|=g,e.lanes=g,e.memoizedState=X}}function Am(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Cm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Am(a[e],n)}var bi=E(null),ar=E(0);function Em(e,n){e=Nn,J(ar,e),J(bi,n),Nn=e|n.baseLanes}function Vu(){J(ar,Nn),J(bi,bi.current)}function _u(){Nn=ar.current,G(bi),G(ar)}var zt=E(null),Yt=null;function ea(e){var n=e.alternate;J(Xe,Xe.current&1),J(zt,e),Yt===null&&(n===null||bi.current!==null||n.memoizedState!==null)&&(Yt=e)}function Lu(e){J(Xe,Xe.current),J(zt,e),Yt===null&&(Yt=e)}function wm(e){e.tag===22?(J(Xe,Xe.current),J(zt,e),Yt===null&&(Yt=e)):ta()}function ta(){J(Xe,Xe.current),J(zt,zt.current)}function Rt(e){G(zt),Yt===e&&(Yt=null),G(Xe)}var Xe=E(0);function ir(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Yc(a)||Xc(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var jn=0,de=null,De=null,Ze=null,sr=!1,xi=!1,_a=!1,or=0,Ms=0,Si=null,K1=0;function He(){throw Error(r(321))}function Bu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Mt(e[a],n[a]))return!1;return!0}function Uu(e,n,a,s,l,c){return jn=c,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,q.H=e===null||e.memoizedState===null?up:tc,_a=!1,c=a(s,l),_a=!1,xi&&(c=Mm(n,a,s,l)),jm(e),c}function jm(e){q.H=Rs;var n=De!==null&&De.next!==null;if(jn=0,Ze=De=de=null,sr=!1,Ms=0,Si=null,n)throw Error(r(300));e===null||Fe||(e=e.dependencies,e!==null&&Fo(e)&&(Fe=!0))}function Mm(e,n,a,s){de=e;var l=0;do{if(xi&&(Si=null),Ms=0,xi=!1,25<=l)throw Error(r(301));if(l+=1,Ze=De=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}q.H=cp,c=n(a,s)}while(xi);return c}function Q1(){var e=q.H,n=e.useState()[0];return n=typeof n.then=="function"?Ds(n):n,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(de.flags|=1024),n}function Hu(){var e=or!==0;return or=0,e}function qu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Gu(e){if(sr){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}sr=!1}jn=0,Ze=De=de=null,xi=!1,Ms=or=0,Si=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?de.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Pe(){if(De===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var n=Ze===null?de.memoizedState:Ze.next;if(n!==null)Ze=n,De=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ze===null?de.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function rr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ds(e){var n=Ms;return Ms+=1,Si===null&&(Si=[]),e=vm(Si,e,n),n=de,(Ze===null?n.memoizedState:Ze.next)===null&&(n=n.alternate,q.H=n===null||n.memoizedState===null?up:tc),e}function lr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ds(e);if(e.$$typeof===L)return rt(e)}throw Error(r(438,String(e)))}function Yu(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=rr(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=ae;return n.index++,a}function Mn(e,n){return typeof n=="function"?n(e):n}function ur(e){var n=Pe();return Xu(n,De,e)}function Xu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var l=e.baseQueue,c=s.pending;if(c!==null){if(l!==null){var g=l.next;l.next=c.next,c.next=g}n.baseQueue=l=c,s.pending=null}if(c=e.baseState,l===null)e.memoizedState=c;else{n=l.next;var b=g=null,A=null,$=n,H=!1;do{var X=$.lane&-536870913;if(X!==$.lane?(ve&X)===X:(jn&X)===X){var _=$.revertLane;if(_===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),X===pi&&(H=!0);else if((jn&_)===_){$=$.next,_===pi&&(H=!0);continue}else X={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},A===null?(b=A=X,g=c):A=A.next=X,de.lanes|=_,ia|=_;X=$.action,_a&&a(c,X),c=$.hasEagerState?$.eagerState:a(c,X)}else _={lane:X,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},A===null?(b=A=_,g=c):A=A.next=_,de.lanes|=X,ia|=X;$=$.next}while($!==null&&$!==n);if(A===null?g=c:A.next=b,!Mt(c,e.memoizedState)&&(Fe=!0,H&&(a=gi,a!==null)))throw a;e.memoizedState=c,e.baseState=g,e.baseQueue=A,s.lastRenderedState=c}return l===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Pu(e){var n=Pe(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var g=l=l.next;do c=e(c,g.action),g=g.next;while(g!==l);Mt(c,n.memoizedState)||(Fe=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,s]}function Dm(e,n,a){var s=de,l=Pe(),c=Se;if(c){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Mt((De||l).memoizedState,a);if(g&&(l.memoizedState=a,Fe=!0),l=l.queue,Zu(km.bind(null,s,l,e),[e]),l.getSnapshot!==n||g||Ze!==null&&Ze.memoizedState.tag&1){if(s.flags|=2048,Ti(9,{destroy:void 0},Rm.bind(null,s,l,a,n),null),ke===null)throw Error(r(349));c||(jn&127)!==0||zm(s,n,a)}return a}function zm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=rr(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Rm(e,n,a,s){n.value=a,n.getSnapshot=s,Om(n)&&$m(e)}function km(e,n,a){return a(function(){Om(n)&&$m(e)})}function Om(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Mt(e,a)}catch{return!0}}function $m(e){var n=Ma(e,2);n!==null&&At(n,e,2)}function Ku(e){var n=mt();if(typeof e=="function"){var a=e;if(e=a(),_a){Yn(!0);try{a()}finally{Yn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:e},n}function Nm(e,n,a,s){return e.baseState=a,Xu(e,De,typeof s=="function"?s:Mn)}function Z1(e,n,a,s,l){if(dr(e))throw Error(r(485));if(e=n.action,e!==null){var c={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};q.T!==null?a(!0):c.isTransition=!1,s(c),a=n.pending,a===null?(c.next=n.pending=c,Vm(n,c)):(c.next=a.next,n.pending=a.next=c)}}function Vm(e,n){var a=n.action,s=n.payload,l=e.state;if(n.isTransition){var c=q.T,g={};q.T=g;try{var b=a(l,s),A=q.S;A!==null&&A(g,b),_m(e,n,b)}catch($){Qu(e,n,$)}finally{c!==null&&g.types!==null&&(c.types=g.types),q.T=c}}else try{c=a(l,s),_m(e,n,c)}catch($){Qu(e,n,$)}}function _m(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Lm(e,n,s)},function(s){return Qu(e,n,s)}):Lm(e,n,a)}function Lm(e,n,a){n.status="fulfilled",n.value=a,Bm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Vm(e,a)))}function Qu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Bm(n),n=n.next;while(n!==s)}e.action=null}function Bm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Um(e,n){return n}function Hm(e,n){if(Se){var a=ke.formState;if(a!==null){e:{var s=de;if(Se){if($e){t:{for(var l=$e,c=Gt;l.nodeType!==8;){if(!c){l=null;break t}if(l=Xt(l.nextSibling),l===null){l=null;break t}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){$e=Xt(l.nextSibling),s=l.data==="F!";break e}}Zn(s)}s=!1}s&&(n=a[0])}}return a=mt(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Um,lastRenderedState:n},a.queue=s,a=op.bind(null,de,s),s.dispatch=a,s=Ku(!1),c=ec.bind(null,de,!1,s.queue),s=mt(),l={state:n,dispatch:null,action:e,pending:null},s.queue=l,a=Z1.bind(null,de,l,c,a),l.dispatch=a,s.memoizedState=e,[n,a,!1]}function qm(e){var n=Pe();return Gm(n,De,e)}function Gm(e,n,a){if(n=Xu(e,n,Um)[0],e=ur(Mn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ds(n)}catch(g){throw g===yi?Io:g}else s=n;n=Pe();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Ti(9,{destroy:void 0},F1.bind(null,l,a),null)),[s,c,e]}function F1(e,n){e.action=n}function Ym(e){var n=Pe(),a=De;if(a!==null)return Gm(n,a,e);Pe(),n=n.memoizedState,a=Pe();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Ti(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=de.updateQueue,n===null&&(n=rr(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Xm(){return Pe().memoizedState}function cr(e,n,a,s){var l=mt();de.flags|=e,l.memoizedState=Ti(1|n,{destroy:void 0},a,s===void 0?null:s)}function fr(e,n,a,s){var l=Pe();s=s===void 0?null:s;var c=l.memoizedState.inst;De!==null&&s!==null&&Bu(s,De.memoizedState.deps)?l.memoizedState=Ti(n,c,a,s):(de.flags|=e,l.memoizedState=Ti(1|n,c,a,s))}function Pm(e,n){cr(8390656,8,e,n)}function Zu(e,n){fr(2048,8,e,n)}function J1(e){de.flags|=4;var n=de.updateQueue;if(n===null)n=rr(),de.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Km(e){var n=Pe().memoizedState;return J1({ref:n,nextImpl:e}),function(){if((Ce&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Qm(e,n){return fr(4,2,e,n)}function Zm(e,n){return fr(4,4,e,n)}function Fm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Jm(e,n,a){a=a!=null?a.concat([e]):null,fr(4,4,Fm.bind(null,n,e),a)}function Fu(){}function Wm(e,n){var a=Pe();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Bu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Im(e,n){var a=Pe();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Bu(n,s[1]))return s[0];if(s=e(),_a){Yn(!0);try{e()}finally{Yn(!1)}}return a.memoizedState=[s,n],s}function Ju(e,n,a){return a===void 0||(jn&1073741824)!==0&&(ve&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=eg(),de.lanes|=e,ia|=e,a)}function ep(e,n,a,s){return Mt(a,n)?a:bi.current!==null?(e=Ju(e,a,s),Mt(e,n)||(Fe=!0),e):(jn&42)===0||(jn&1073741824)!==0&&(ve&261930)===0?(Fe=!0,e.memoizedState=a):(e=eg(),de.lanes|=e,ia|=e,n)}function tp(e,n,a,s,l){var c=K.p;K.p=c!==0&&8>c?c:8;var g=q.T,b={};q.T=b,ec(e,!1,n,a);try{var A=l(),$=q.S;if($!==null&&$(b,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var H=P1(A,s);zs(e,n,H,$t(e))}else zs(e,n,s,$t(e))}catch(X){zs(e,n,{then:function(){},status:"rejected",reason:X},$t())}finally{K.p=c,g!==null&&b.types!==null&&(g.types=b.types),q.T=g}}function W1(){}function Wu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var l=np(e).queue;tp(e,l,n,ee,a===null?W1:function(){return ap(e),a(s)})}function np(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ap(e){var n=np(e);n.next===null&&(n=e.alternate.memoizedState),zs(e,n.next.queue,{},$t())}function Iu(){return rt(Ks)}function ip(){return Pe().memoizedState}function sp(){return Pe().memoizedState}function I1(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$t();e=Wn(a);var s=In(n,e,a);s!==null&&(At(s,n,a),Es(s,n,a)),n={cache:Mu()},e.payload=n;return}n=n.return}}function eS(e,n,a){var s=$t();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},dr(e)?rp(n,a):(a=yu(e,n,a,s),a!==null&&(At(a,e,s),lp(a,n,s)))}function op(e,n,a){var s=$t();zs(e,n,a,s)}function zs(e,n,a,s){var l={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(dr(e))rp(n,l);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var g=n.lastRenderedState,b=c(g,a);if(l.hasEagerState=!0,l.eagerState=b,Mt(b,g))return Po(e,n,l,0),ke===null&&Xo(),!1}catch{}finally{}if(a=yu(e,n,l,s),a!==null)return At(a,e,s),lp(a,n,s),!0}return!1}function ec(e,n,a,s){if(s={lane:2,revertLane:kc(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},dr(e)){if(n)throw Error(r(479))}else n=yu(e,a,s,2),n!==null&&At(n,e,2)}function dr(e){var n=e.alternate;return e===de||n!==null&&n===de}function rp(e,n){xi=sr=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function lp(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,hh(e,a)}}var Rs={readContext:rt,use:lr,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};Rs.useEffectEvent=He;var up={readContext:rt,use:lr,useCallback:function(e,n){return mt().memoizedState=[e,n===void 0?null:n],e},useContext:rt,useEffect:Pm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,cr(4194308,4,Fm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return cr(4194308,4,e,n)},useInsertionEffect:function(e,n){cr(4,2,e,n)},useMemo:function(e,n){var a=mt();n=n===void 0?null:n;var s=e();if(_a){Yn(!0);try{e()}finally{Yn(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=mt();if(a!==void 0){var l=a(n);if(_a){Yn(!0);try{a(n)}finally{Yn(!1)}}}else l=n;return s.memoizedState=s.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},s.queue=e,e=e.dispatch=eS.bind(null,de,e),[s.memoizedState,e]},useRef:function(e){var n=mt();return e={current:e},n.memoizedState=e},useState:function(e){e=Ku(e);var n=e.queue,a=op.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Fu,useDeferredValue:function(e,n){var a=mt();return Ju(a,e,n)},useTransition:function(){var e=Ku(!1);return e=tp.bind(null,de,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=de,l=mt();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(ve&127)!==0||zm(s,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,Pm(km.bind(null,s,c,e),[e]),s.flags|=2048,Ti(9,{destroy:void 0},Rm.bind(null,s,c,a,n),null),a},useId:function(){var e=mt(),n=ke.identifierPrefix;if(Se){var a=un,s=ln;a=(s&~(1<<32-jt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=or++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=K1++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Iu,useFormState:Hm,useActionState:Hm,useOptimistic:function(e){var n=mt();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ec.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:Yu,useCacheRefresh:function(){return mt().memoizedState=I1.bind(null,de)},useEffectEvent:function(e){var n=mt(),a={impl:e};return n.memoizedState=a,function(){if((Ce&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},tc={readContext:rt,use:lr,useCallback:Wm,useContext:rt,useEffect:Zu,useImperativeHandle:Jm,useInsertionEffect:Qm,useLayoutEffect:Zm,useMemo:Im,useReducer:ur,useRef:Xm,useState:function(){return ur(Mn)},useDebugValue:Fu,useDeferredValue:function(e,n){var a=Pe();return ep(a,De.memoizedState,e,n)},useTransition:function(){var e=ur(Mn)[0],n=Pe().memoizedState;return[typeof e=="boolean"?e:Ds(e),n]},useSyncExternalStore:Dm,useId:ip,useHostTransitionStatus:Iu,useFormState:qm,useActionState:qm,useOptimistic:function(e,n){var a=Pe();return Nm(a,De,e,n)},useMemoCache:Yu,useCacheRefresh:sp};tc.useEffectEvent=Km;var cp={readContext:rt,use:lr,useCallback:Wm,useContext:rt,useEffect:Zu,useImperativeHandle:Jm,useInsertionEffect:Qm,useLayoutEffect:Zm,useMemo:Im,useReducer:Pu,useRef:Xm,useState:function(){return Pu(Mn)},useDebugValue:Fu,useDeferredValue:function(e,n){var a=Pe();return De===null?Ju(a,e,n):ep(a,De.memoizedState,e,n)},useTransition:function(){var e=Pu(Mn)[0],n=Pe().memoizedState;return[typeof e=="boolean"?e:Ds(e),n]},useSyncExternalStore:Dm,useId:ip,useHostTransitionStatus:Iu,useFormState:Ym,useActionState:Ym,useOptimistic:function(e,n){var a=Pe();return De!==null?Nm(a,De,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Yu,useCacheRefresh:sp};cp.useEffectEvent=Km;function nc(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ac={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=$t(),l=Wn(s);l.payload=n,a!=null&&(l.callback=a),n=In(e,l,s),n!==null&&(At(n,e,s),Es(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=$t(),l=Wn(s);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=In(e,l,s),n!==null&&(At(n,e,s),Es(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$t(),s=Wn(a);s.tag=2,n!=null&&(s.callback=n),n=In(e,s,a),n!==null&&(At(n,e,a),Es(n,e,a))}};function fp(e,n,a,s,l,c,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,g):n.prototype&&n.prototype.isPureReactComponent?!ys(a,s)||!ys(l,c):!0}function dp(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&ac.enqueueReplaceState(n,n.state,null)}function La(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function hp(e){Yo(e)}function mp(e){console.error(e)}function pp(e){Yo(e)}function hr(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function gp(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function ic(e,n,a){return a=Wn(a),a.tag=3,a.payload={element:null},a.callback=function(){hr(e,n)},a}function yp(e){return e=Wn(e),e.tag=3,e}function vp(e,n,a,s){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=s.value;e.payload=function(){return l(c)},e.callback=function(){gp(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){gp(n,a,s),typeof l!="function"&&(sa===null?sa=new Set([this]):sa.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function tS(e,n,a,s,l){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&mi(n,a,l,!0),a=zt.current,a!==null){switch(a.tag){case 31:case 13:return Yt===null?Er():a.alternate===null&&qe===0&&(qe=3),a.flags&=-257,a.flags|=65536,a.lanes=l,s===er?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Dc(e,s,l)),!1;case 22:return a.flags|=65536,s===er?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Dc(e,s,l)),!1}throw Error(r(435,a.tag))}return Dc(e,s,l),Er(),!1}if(Se)return n=zt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,s!==Au&&(e=Error(r(422),{cause:s}),xs(Ut(e,a)))):(s!==Au&&(n=Error(r(423),{cause:s}),xs(Ut(n,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,s=Ut(s,a),l=ic(e.stateNode,s,l),$u(e,l),qe!==4&&(qe=2)),!1;var c=Error(r(520),{cause:s});if(c=Ut(c,a),Bs===null?Bs=[c]:Bs.push(c),qe!==4&&(qe=2),n===null)return!0;s=Ut(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=ic(a.stateNode,s,e),$u(a,e),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(sa===null||!sa.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=yp(l),vp(l,e,a,s),$u(a,l),!1}a=a.return}while(a!==null);return!1}var sc=Error(r(461)),Fe=!1;function lt(e,n,a,s){n.child=e===null?Tm(n,null,a,s):Va(n,e.child,a,s)}function bp(e,n,a,s,l){a=a.render;var c=n.ref;if("ref"in s){var g={};for(var b in s)b!=="ref"&&(g[b]=s[b])}else g=s;return ka(n),s=Uu(e,n,a,g,c,l),b=Hu(),e!==null&&!Fe?(qu(e,n,l),Dn(e,n,l)):(Se&&b&&Su(n),n.flags|=1,lt(e,n,s,l),n.child)}function xp(e,n,a,s,l){if(e===null){var c=a.type;return typeof c=="function"&&!vu(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,Sp(e,n,c,s,l)):(e=Qo(a.type,null,s,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!hc(e,l)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:ys,a(g,s)&&e.ref===n.ref)return Dn(e,n,l)}return n.flags|=1,e=An(c,s),e.ref=n.ref,e.return=n,n.child=e}function Sp(e,n,a,s,l){if(e!==null){var c=e.memoizedProps;if(ys(c,s)&&e.ref===n.ref)if(Fe=!1,n.pendingProps=s=c,hc(e,l))(e.flags&131072)!==0&&(Fe=!0);else return n.lanes=e.lanes,Dn(e,n,l)}return oc(e,n,a,s,l)}function Tp(e,n,a,s){var l=s.children,c=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(s=n.child=e.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;s=l&~c}else s=0,n.child=null;return Ap(e,n,c,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wo(n,c!==null?c.cachePool:null),c!==null?Em(n,c):Vu(),wm(n);else return s=n.lanes=536870912,Ap(e,n,c!==null?c.baseLanes|a:a,a,s)}else c!==null?(Wo(n,c.cachePool),Em(n,c),ta(),n.memoizedState=null):(e!==null&&Wo(n,null),Vu(),ta());return lt(e,n,l,a),n.child}function ks(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ap(e,n,a,s,l){var c=zu();return c=c===null?null:{parent:Qe._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Wo(n,null),Vu(),wm(n),e!==null&&mi(e,n,s,!0),n.childLanes=l,null}function mr(e,n){return n=gr({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Cp(e,n,a){return Va(n,e.child,null,a),e=mr(n,n.pendingProps),e.flags|=2,Rt(n),n.memoizedState=null,e}function nS(e,n,a){var s=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Se){if(s.mode==="hidden")return e=mr(n,s),n.lanes=536870912,ks(null,e);if(Lu(n),(e=$e)?(e=Vg(e,Gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Kn!==null?{id:ln,overflow:un}:null,retryLane:536870912,hydrationErrors:null},a=rm(e),a.return=n,n.child=a,ot=n,$e=null)):e=null,e===null)throw Zn(n);return n.lanes=536870912,null}return mr(n,s)}var c=e.memoizedState;if(c!==null){var g=c.dehydrated;if(Lu(n),l)if(n.flags&256)n.flags&=-257,n=Cp(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(Fe||mi(e,n,a,!1),l=(a&e.childLanes)!==0,Fe||l){if(s=ke,s!==null&&(g=mh(s,a),g!==0&&g!==c.retryLane))throw c.retryLane=g,Ma(e,g),At(s,e,g),sc;Er(),n=Cp(e,n,a)}else e=c.treeContext,$e=Xt(g.nextSibling),ot=n,Se=!0,Qn=null,Gt=!1,e!==null&&cm(n,e),n=mr(n,s),n.flags|=4096;return n}return e=An(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function pr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function oc(e,n,a,s,l){return ka(n),a=Uu(e,n,a,s,void 0,l),s=Hu(),e!==null&&!Fe?(qu(e,n,l),Dn(e,n,l)):(Se&&s&&Su(n),n.flags|=1,lt(e,n,a,l),n.child)}function Ep(e,n,a,s,l,c){return ka(n),n.updateQueue=null,a=Mm(n,s,a,l),jm(e),s=Hu(),e!==null&&!Fe?(qu(e,n,c),Dn(e,n,c)):(Se&&s&&Su(n),n.flags|=1,lt(e,n,a,c),n.child)}function wp(e,n,a,s,l){if(ka(n),n.stateNode===null){var c=ci,g=a.contextType;typeof g=="object"&&g!==null&&(c=rt(g)),c=new a(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=ac,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},ku(n),g=a.contextType,c.context=typeof g=="object"&&g!==null?rt(g):ci,c.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(nc(n,a,g,s),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&ac.enqueueReplaceState(c,c.state,null),js(n,s,c,l),ws(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){c=n.stateNode;var b=n.memoizedProps,A=La(a,b);c.props=A;var $=c.context,H=a.contextType;g=ci,typeof H=="object"&&H!==null&&(g=rt(H));var X=a.getDerivedStateFromProps;H=typeof X=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,H||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||$!==g)&&dp(n,c,s,g),Jn=!1;var _=n.memoizedState;c.state=_,js(n,s,c,l),ws(),$=n.memoizedState,b||_!==$||Jn?(typeof X=="function"&&(nc(n,a,X,s),$=n.memoizedState),(A=Jn||fp(n,a,A,s,_,$,g))?(H||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),c.props=s,c.state=$,c.context=g,s=A):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,Ou(e,n),g=n.memoizedProps,H=La(a,g),c.props=H,X=n.pendingProps,_=c.context,$=a.contextType,A=ci,typeof $=="object"&&$!==null&&(A=rt($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==X||_!==A)&&dp(n,c,s,A),Jn=!1,_=n.memoizedState,c.state=_,js(n,s,c,l),ws();var B=n.memoizedState;g!==X||_!==B||Jn||e!==null&&e.dependencies!==null&&Fo(e.dependencies)?(typeof b=="function"&&(nc(n,a,b,s),B=n.memoizedState),(H=Jn||fp(n,a,H,s,_,B,A)||e!==null&&e.dependencies!==null&&Fo(e.dependencies))?($||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,B,A),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,B,A)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=B),c.props=s,c.state=B,c.context=A,s=H):(typeof c.componentDidUpdate!="function"||g===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),s=!1)}return c=s,pr(e,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&s?(n.child=Va(n,e.child,null,l),n.child=Va(n,null,a,l)):lt(e,n,a,l),n.memoizedState=c.state,e=n.child):e=Dn(e,n,l),e}function jp(e,n,a,s){return za(),n.flags|=256,lt(e,n,a,s),n.child}var rc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lc(e){return{baseLanes:e,cachePool:gm()}}function uc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Ot),e}function Mp(e,n,a){var s=n.pendingProps,l=!1,c=(n.flags&128)!==0,g;if((g=c)||(g=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),g&&(l=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(Se){if(l?ea(n):ta(),(e=$e)?(e=Vg(e,Gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Kn!==null?{id:ln,overflow:un}:null,retryLane:536870912,hydrationErrors:null},a=rm(e),a.return=n,n.child=a,ot=n,$e=null)):e=null,e===null)throw Zn(n);return Xc(e)?n.lanes=32:n.lanes=536870912,null}var b=s.children;return s=s.fallback,l?(ta(),l=n.mode,b=gr({mode:"hidden",children:b},l),s=Da(s,l,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,s=n.child,s.memoizedState=lc(a),s.childLanes=uc(e,g,a),n.memoizedState=rc,ks(null,s)):(ea(n),cc(n,b))}var A=e.memoizedState;if(A!==null&&(b=A.dehydrated,b!==null)){if(c)n.flags&256?(ea(n),n.flags&=-257,n=fc(e,n,a)):n.memoizedState!==null?(ta(),n.child=e.child,n.flags|=128,n=null):(ta(),b=s.fallback,l=n.mode,s=gr({mode:"visible",children:s.children},l),b=Da(b,l,a,null),b.flags|=2,s.return=n,b.return=n,s.sibling=b,n.child=s,Va(n,e.child,null,a),s=n.child,s.memoizedState=lc(a),s.childLanes=uc(e,g,a),n.memoizedState=rc,n=ks(null,s));else if(ea(n),Xc(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var $=g.dgst;g=$,s=Error(r(419)),s.stack="",s.digest=g,xs({value:s,source:null,stack:null}),n=fc(e,n,a)}else if(Fe||mi(e,n,a,!1),g=(a&e.childLanes)!==0,Fe||g){if(g=ke,g!==null&&(s=mh(g,a),s!==0&&s!==A.retryLane))throw A.retryLane=s,Ma(e,s),At(g,e,s),sc;Yc(b)||Er(),n=fc(e,n,a)}else Yc(b)?(n.flags|=192,n.child=e.child,n=null):(e=A.treeContext,$e=Xt(b.nextSibling),ot=n,Se=!0,Qn=null,Gt=!1,e!==null&&cm(n,e),n=cc(n,s.children),n.flags|=4096);return n}return l?(ta(),b=s.fallback,l=n.mode,A=e.child,$=A.sibling,s=An(A,{mode:"hidden",children:s.children}),s.subtreeFlags=A.subtreeFlags&65011712,$!==null?b=An($,b):(b=Da(b,l,a,null),b.flags|=2),b.return=n,s.return=n,s.sibling=b,n.child=s,ks(null,s),s=n.child,b=e.child.memoizedState,b===null?b=lc(a):(l=b.cachePool,l!==null?(A=Qe._currentValue,l=l.parent!==A?{parent:A,pool:A}:l):l=gm(),b={baseLanes:b.baseLanes|a,cachePool:l}),s.memoizedState=b,s.childLanes=uc(e,g,a),n.memoizedState=rc,ks(e.child,s)):(ea(n),a=e.child,e=a.sibling,a=An(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function cc(e,n){return n=gr({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function gr(e,n){return e=Dt(22,e,null,n),e.lanes=0,e}function fc(e,n,a){return Va(n,e.child,null,a),e=cc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Dp(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),wu(e.return,n,a)}function dc(e,n,a,s,l,c){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:l,treeForkCount:c}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=l,g.treeForkCount=c)}function zp(e,n,a){var s=n.pendingProps,l=s.revealOrder,c=s.tail;s=s.children;var g=Xe.current,b=(g&2)!==0;if(b?(g=g&1|2,n.flags|=128):g&=1,J(Xe,g),lt(e,n,s,a),s=Se?bs:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dp(e,a,n);else if(e.tag===19)Dp(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=n.child,l=null;a!==null;)e=a.alternate,e!==null&&ir(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),dc(n,!1,l,a,c,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&ir(e)===null){n.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}dc(n,!0,a,null,c,s);break;case"together":dc(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Dn(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ia|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(mi(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=An(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=An(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function hc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Fo(e)))}function aS(e,n,a){switch(n.tag){case 3:Ye(n,n.stateNode.containerInfo),Fn(n,Qe,e.memoizedState.cache),za();break;case 27:case 5:vn(n);break;case 4:Ye(n,n.stateNode.containerInfo);break;case 10:Fn(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Mp(e,n,a):(ea(n),e=Dn(e,n,a),e!==null?e.sibling:null);ea(n);break;case 19:var l=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(mi(e,n,a,!1),s=(a&n.childLanes)!==0),l){if(s)return zp(e,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(Xe,Xe.current),s)break;return null;case 22:return n.lanes=0,Tp(e,n,a,n.pendingProps);case 24:Fn(n,Qe,e.memoizedState.cache)}return Dn(e,n,a)}function Rp(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Fe=!0;else{if(!hc(e,a)&&(n.flags&128)===0)return Fe=!1,aS(e,n,a);Fe=(e.flags&131072)!==0}else Fe=!1,Se&&(n.flags&1048576)!==0&&um(n,bs,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=$a(n.elementType),n.type=e,typeof e=="function")vu(e)?(s=La(e,s),n.tag=1,n=wp(null,n,e,s,a)):(n.tag=0,n=oc(null,n,e,s,a));else{if(e!=null){var l=e.$$typeof;if(l===Q){n.tag=11,n=bp(null,n,e,s,a);break e}else if(l===N){n.tag=14,n=xp(null,n,e,s,a);break e}}throw n=gt(e)||e,Error(r(306,n,""))}}return n;case 0:return oc(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,l=La(s,n.pendingProps),wp(e,n,s,l,a);case 3:e:{if(Ye(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var c=n.memoizedState;l=c.element,Ou(e,n),js(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Fn(n,Qe,s),s!==c.cache&&ju(n,[Qe],a,!0),ws(),s=g.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=jp(e,n,s,a);break e}else if(s!==l){l=Ut(Error(r(424)),n),xs(l),n=jp(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=Xt(e.firstChild),ot=n,Se=!0,Qn=null,Gt=!0,a=Tm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(za(),s===l){n=Dn(e,n,a);break e}lt(e,n,s,a)}n=n.child}return n;case 26:return pr(e,n),e===null?(a=qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,e=n.pendingProps,s=kr(fe.current).createElement(a),s[st]=n,s[yt]=e,ut(s,a,e),tt(s),n.stateNode=s):n.memoizedState=qg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return vn(n),e===null&&Se&&(s=n.stateNode=Bg(n.type,n.pendingProps,fe.current),ot=n,Gt=!0,l=$e,ua(n.type)?(Pc=l,$e=Xt(s.firstChild)):$e=l),lt(e,n,n.pendingProps.children,a),pr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Se&&((l=s=$e)&&(s=OS(s,n.type,n.pendingProps,Gt),s!==null?(n.stateNode=s,ot=n,$e=Xt(s.firstChild),Gt=!1,l=!0):l=!1),l||Zn(n)),vn(n),l=n.type,c=n.pendingProps,g=e!==null?e.memoizedProps:null,s=c.children,Hc(l,c)?s=null:g!==null&&Hc(l,g)&&(n.flags|=32),n.memoizedState!==null&&(l=Uu(e,n,Q1,null,null,a),Ks._currentValue=l),pr(e,n),lt(e,n,s,a),n.child;case 6:return e===null&&Se&&((e=a=$e)&&(a=$S(a,n.pendingProps,Gt),a!==null?(n.stateNode=a,ot=n,$e=null,e=!0):e=!1),e||Zn(n)),null;case 13:return Mp(e,n,a);case 4:return Ye(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Va(n,null,s,a):lt(e,n,s,a),n.child;case 11:return bp(e,n,n.type,n.pendingProps,a);case 7:return lt(e,n,n.pendingProps,a),n.child;case 8:return lt(e,n,n.pendingProps.children,a),n.child;case 12:return lt(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Fn(n,n.type,s.value),lt(e,n,s.children,a),n.child;case 9:return l=n.type._context,s=n.pendingProps.children,ka(n),l=rt(l),s=s(l),n.flags|=1,lt(e,n,s,a),n.child;case 14:return xp(e,n,n.type,n.pendingProps,a);case 15:return Sp(e,n,n.type,n.pendingProps,a);case 19:return zp(e,n,a);case 31:return nS(e,n,a);case 22:return Tp(e,n,a,n.pendingProps);case 24:return ka(n),s=rt(Qe),e===null?(l=zu(),l===null&&(l=ke,c=Mu(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:s,cache:l},ku(n),Fn(n,Qe,l)):((e.lanes&a)!==0&&(Ou(e,n),js(n,null,null,a),ws()),l=e.memoizedState,c=n.memoizedState,l.parent!==s?(l={parent:s,cache:s},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Fn(n,Qe,s)):(s=c.cache,Fn(n,Qe,s),s!==l.cache&&ju(n,[Qe],a,!0))),lt(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function zn(e){e.flags|=4}function mc(e,n,a,s,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(ig())e.flags|=8192;else throw Na=er,Ru}else e.flags&=-16777217}function kp(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Kg(n))if(ig())e.flags|=8192;else throw Na=er,Ru}function yr(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?fh():536870912,e.lanes|=n,wi|=n)}function Os(e,n){if(!Se)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags&65011712,s|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function iS(e,n,a){var s=n.pendingProps;switch(Tu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(n),null;case 1:return Ne(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),wn(Qe),we(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(hi(n)?zn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cu())),Ne(n),null;case 26:var l=n.type,c=n.memoizedState;return e===null?(zn(n),c!==null?(Ne(n),kp(n,c)):(Ne(n),mc(n,l,null,s,a))):c?c!==e.memoizedState?(zn(n),Ne(n),kp(n,c)):(Ne(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&zn(n),Ne(n),mc(n,l,e,s,a)),null;case 27:if(bn(n),a=fe.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&zn(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ne(n),null}e=W.current,hi(n)?fm(n):(e=Bg(l,s,a),n.stateNode=e,zn(n))}return Ne(n),null;case 5:if(bn(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&zn(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ne(n),null}if(c=W.current,hi(n))fm(n);else{var g=kr(fe.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?g.createElement(l,{is:s.is}):g.createElement(l)}}c[st]=n,c[yt]=s;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=c;e:switch(ut(c,l,s),l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&zn(n)}}return Ne(n),mc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&zn(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=fe.current,hi(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,l=ot,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}e[st]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Mg(e.nodeValue,a)),e||Zn(n,!0)}else e=kr(e).createTextNode(s),e[st]=n,n.stateNode=e}return Ne(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=hi(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[st]=n}else za(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ne(n),e=!1}else a=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Rt(n),n):(Rt(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ne(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=hi(n),s!==null&&s.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[st]=n}else za(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ne(n),l=!1}else l=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(Rt(n),n):(Rt(n),null)}return Rt(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),yr(n,n.updateQueue),Ne(n),null);case 4:return we(),e===null&&Vc(n.stateNode.containerInfo),Ne(n),null;case 10:return wn(n.type),Ne(n),null;case 19:if(G(Xe),s=n.memoizedState,s===null)return Ne(n),null;if(l=(n.flags&128)!==0,c=s.rendering,c===null)if(l)Os(s,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=ir(e),c!==null){for(n.flags|=128,Os(s,!1),e=c.updateQueue,n.updateQueue=e,yr(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)om(a,e),a=a.sibling;return J(Xe,Xe.current&1|2),Se&&Cn(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&Et()>Tr&&(n.flags|=128,l=!0,Os(s,!1),n.lanes=4194304)}else{if(!l)if(e=ir(c),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,yr(n,e),Os(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!Se)return Ne(n),null}else 2*Et()-s.renderingStartTime>Tr&&a!==536870912&&(n.flags|=128,l=!0,Os(s,!1),n.lanes=4194304);s.isBackwards?(c.sibling=n.child,n.child=c):(e=s.last,e!==null?e.sibling=c:n.child=c,s.last=c)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,a=Xe.current,J(Xe,l?a&1|2:a&1),Se&&Cn(n,s.treeForkCount),e):(Ne(n),null);case 22:case 23:return Rt(n),_u(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ne(n),n.subtreeFlags&6&&(n.flags|=8192)):Ne(n),a=n.updateQueue,a!==null&&yr(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&G(Oa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),wn(Qe),Ne(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function sS(e,n){switch(Tu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return wn(Qe),we(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return bn(n),null;case 31:if(n.memoizedState!==null){if(Rt(n),n.alternate===null)throw Error(r(340));za()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Rt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));za()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(Xe),null;case 4:return we(),null;case 10:return wn(n.type),null;case 22:case 23:return Rt(n),_u(),e!==null&&G(Oa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return wn(Qe),null;case 25:return null;default:return null}}function Op(e,n){switch(Tu(n),n.tag){case 3:wn(Qe),we();break;case 26:case 27:case 5:bn(n);break;case 4:we();break;case 31:n.memoizedState!==null&&Rt(n);break;case 13:Rt(n);break;case 19:G(Xe);break;case 10:wn(n.type);break;case 22:case 23:Rt(n),_u(),e!==null&&G(Oa);break;case 24:wn(Qe)}}function $s(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var l=s.next;a=l;do{if((a.tag&e)===e){s=void 0;var c=a.create,g=a.inst;s=c(),g.destroy=s}a=a.next}while(a!==l)}}catch(b){Me(n,n.return,b)}}function na(e,n,a){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var c=l.next;s=c;do{if((s.tag&e)===e){var g=s.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,l=n;var A=a,$=b;try{$()}catch(H){Me(l,A,H)}}}s=s.next}while(s!==c)}}catch(H){Me(n,n.return,H)}}function $p(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Cm(n,a)}catch(s){Me(e,e.return,s)}}}function Np(e,n,a){a.props=La(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Me(e,n,s)}}function Ns(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(l){Me(e,n,l)}}function cn(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(l){Me(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Me(e,n,l)}else a.current=null}function Vp(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(l){Me(e,e.return,l)}}function pc(e,n,a){try{var s=e.stateNode;jS(s,e.type,a,n),s[yt]=n}catch(l){Me(e,e.return,l)}}function _p(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ua(e.type)||e.tag===4}function gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_p(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yc(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Sn));else if(s!==4&&(s===27&&ua(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(yc(e,n,a),e=e.sibling;e!==null;)yc(e,n,a),e=e.sibling}function vr(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(vr(e,n,a),e=e.sibling;e!==null;)vr(e,n,a),e=e.sibling}function Lp(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);ut(n,s,a),n[st]=e,n[yt]=a}catch(c){Me(e,e.return,c)}}var Rn=!1,Je=!1,vc=!1,Bp=typeof WeakSet=="function"?WeakSet:Set,nt=null;function oS(e,n){if(e=e.containerInfo,Bc=Br,e=Jh(e),fu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var l=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var g=0,b=-1,A=-1,$=0,H=0,X=e,_=null;t:for(;;){for(var B;X!==a||l!==0&&X.nodeType!==3||(b=g+l),X!==c||s!==0&&X.nodeType!==3||(A=g+s),X.nodeType===3&&(g+=X.nodeValue.length),(B=X.firstChild)!==null;)_=X,X=B;for(;;){if(X===e)break t;if(_===a&&++$===l&&(b=g),_===c&&++H===s&&(A=g),(B=X.nextSibling)!==null)break;X=_,_=X.parentNode}X=B}a=b===-1||A===-1?null:{start:b,end:A}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:e,selectionRange:a},Br=!1,nt=n;nt!==null;)if(n=nt,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,nt=e;else for(;nt!==null;){switch(n=nt,c=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=n,l=c.memoizedProps,c=c.memoizedState,s=a.stateNode;try{var I=La(a.type,l);e=s.getSnapshotBeforeUpdate(I,c),s.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Me(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Gc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,nt=e;break}nt=n.return}}function Up(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:On(e,a),s&4&&$s(5,a);break;case 1:if(On(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Me(a,a.return,g)}else{var l=La(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Me(a,a.return,g)}}s&64&&$p(a),s&512&&Ns(a,a.return);break;case 3:if(On(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cm(e,n)}catch(g){Me(a,a.return,g)}}break;case 27:n===null&&s&4&&Lp(a);case 26:case 5:On(e,a),n===null&&s&4&&Vp(a),s&512&&Ns(a,a.return);break;case 12:On(e,a);break;case 31:On(e,a),s&4&&Gp(e,a);break;case 13:On(e,a),s&4&&Yp(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=pS.bind(null,a),NS(e,a))));break;case 22:if(s=a.memoizedState!==null||Rn,!s){n=n!==null&&n.memoizedState!==null||Je,l=Rn;var c=Je;Rn=s,(Je=n)&&!c?$n(e,a,(a.subtreeFlags&8772)!==0):On(e,a),Rn=l,Je=c}break;case 30:break;default:On(e,a)}}function Hp(e){var n=e.alternate;n!==null&&(e.alternate=null,Hp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ql(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _e=null,bt=!1;function kn(e,n,a){for(a=a.child;a!==null;)qp(e,n,a),a=a.sibling}function qp(e,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(ss,a)}catch{}switch(a.tag){case 26:Je||cn(a,n),kn(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||cn(a,n);var s=_e,l=bt;ua(a.type)&&(_e=a.stateNode,bt=!1),kn(e,n,a),Ys(a.stateNode),_e=s,bt=l;break;case 5:Je||cn(a,n);case 6:if(s=_e,l=bt,_e=null,kn(e,n,a),_e=s,bt=l,_e!==null)if(bt)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(a.stateNode)}catch(c){Me(a,n,c)}else try{_e.removeChild(a.stateNode)}catch(c){Me(a,n,c)}break;case 18:_e!==null&&(bt?(e=_e,$g(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),$i(e)):$g(_e,a.stateNode));break;case 4:s=_e,l=bt,_e=a.stateNode.containerInfo,bt=!0,kn(e,n,a),_e=s,bt=l;break;case 0:case 11:case 14:case 15:na(2,a,n),Je||na(4,a,n),kn(e,n,a);break;case 1:Je||(cn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Np(a,n,s)),kn(e,n,a);break;case 21:kn(e,n,a);break;case 22:Je=(s=Je)||a.memoizedState!==null,kn(e,n,a),Je=s;break;default:kn(e,n,a)}}function Gp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{$i(e)}catch(a){Me(n,n.return,a)}}}function Yp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$i(e)}catch(a){Me(n,n.return,a)}}function rS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Bp),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Bp),n;default:throw Error(r(435,e.tag))}}function br(e,n){var a=rS(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var l=gS.bind(null,e,s);s.then(l,l)}})}function xt(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s],c=e,g=n,b=g;e:for(;b!==null;){switch(b.tag){case 27:if(ua(b.type)){_e=b.stateNode,bt=!1;break e}break;case 5:_e=b.stateNode,bt=!1;break e;case 3:case 4:_e=b.stateNode.containerInfo,bt=!0;break e}b=b.return}if(_e===null)throw Error(r(160));qp(c,g,l),_e=null,bt=!1,c=l.alternate,c!==null&&(c.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Xp(n,e),n=n.sibling}var nn=null;function Xp(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xt(n,e),St(e),s&4&&(na(3,e,e.return),$s(3,e),na(5,e,e.return));break;case 1:xt(n,e),St(e),s&512&&(Je||a===null||cn(a,a.return)),s&64&&Rn&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var l=nn;if(xt(n,e),St(e),s&512&&(Je||a===null||cn(a,a.return)),s&4){var c=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(s){case"title":c=l.getElementsByTagName("title")[0],(!c||c[ls]||c[st]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=l.createElement(s),l.head.insertBefore(c,l.querySelector("head > title"))),ut(c,s,a),c[st]=e,tt(c),s=c;break e;case"link":var g=Xg("link","href",l).get(s+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(c=g[b],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break t}}c=l.createElement(s),ut(c,s,a),l.head.appendChild(c);break;case"meta":if(g=Xg("meta","content",l).get(s+(a.content||""))){for(b=0;b<g.length;b++)if(c=g[b],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break t}}c=l.createElement(s),ut(c,s,a),l.head.appendChild(c);break;default:throw Error(r(468,s))}c[st]=e,tt(c),s=c}e.stateNode=s}else Pg(l,e.type,e.stateNode);else e.stateNode=Yg(l,s,e.memoizedProps);else c!==s?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,s===null?Pg(l,e.type,e.stateNode):Yg(l,s,e.memoizedProps)):s===null&&e.stateNode!==null&&pc(e,e.memoizedProps,a.memoizedProps)}break;case 27:xt(n,e),St(e),s&512&&(Je||a===null||cn(a,a.return)),a!==null&&s&4&&pc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(xt(n,e),St(e),s&512&&(Je||a===null||cn(a,a.return)),e.flags&32){l=e.stateNode;try{ai(l,"")}catch(I){Me(e,e.return,I)}}s&4&&e.stateNode!=null&&(l=e.memoizedProps,pc(e,l,a!==null?a.memoizedProps:l)),s&1024&&(vc=!0);break;case 6:if(xt(n,e),St(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(I){Me(e,e.return,I)}}break;case 3:if(Nr=null,l=nn,nn=Or(n.containerInfo),xt(n,e),nn=l,St(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{$i(n.containerInfo)}catch(I){Me(e,e.return,I)}vc&&(vc=!1,Pp(e));break;case 4:s=nn,nn=Or(e.stateNode.containerInfo),xt(n,e),St(e),nn=s;break;case 12:xt(n,e),St(e);break;case 31:xt(n,e),St(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,br(e,s)));break;case 13:xt(n,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Sr=Et()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,br(e,s)));break;case 22:l=e.memoizedState!==null;var A=a!==null&&a.memoizedState!==null,$=Rn,H=Je;if(Rn=$||l,Je=H||A,xt(n,e),Je=H,Rn=$,St(e),s&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(a===null||A||Rn||Je||Ba(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){A=a=n;try{if(c=A.stateNode,l)g=c.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=A.stateNode;var X=A.memoizedProps.style,_=X!=null&&X.hasOwnProperty("display")?X.display:null;b.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(I){Me(A,A.return,I)}}}else if(n.tag===6){if(a===null){A=n;try{A.stateNode.nodeValue=l?"":A.memoizedProps}catch(I){Me(A,A.return,I)}}}else if(n.tag===18){if(a===null){A=n;try{var B=A.stateNode;l?Ng(B,!0):Ng(A.stateNode,!1)}catch(I){Me(A,A.return,I)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,br(e,a))));break;case 19:xt(n,e),St(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,br(e,s)));break;case 30:break;case 21:break;default:xt(n,e),St(e)}}function St(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(_p(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var l=a.stateNode,c=gc(e);vr(e,c,l);break;case 5:var g=a.stateNode;a.flags&32&&(ai(g,""),a.flags&=-33);var b=gc(e);vr(e,b,g);break;case 3:case 4:var A=a.stateNode.containerInfo,$=gc(e);yc(e,$,A);break;default:throw Error(r(161))}}catch(H){Me(e,e.return,H)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Pp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Pp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function On(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Up(e,n.alternate,n),n=n.sibling}function Ba(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:na(4,n,n.return),Ba(n);break;case 1:cn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Np(n,n.return,a),Ba(n);break;case 27:Ys(n.stateNode);case 26:case 5:cn(n,n.return),Ba(n);break;case 22:n.memoizedState===null&&Ba(n);break;case 30:Ba(n);break;default:Ba(n)}e=e.sibling}}function $n(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,l=e,c=n,g=c.flags;switch(c.tag){case 0:case 11:case 15:$n(l,c,a),$s(4,c);break;case 1:if($n(l,c,a),s=c,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch($){Me(s,s.return,$)}if(s=c,l=s.updateQueue,l!==null){var b=s.stateNode;try{var A=l.shared.hiddenCallbacks;if(A!==null)for(l.shared.hiddenCallbacks=null,l=0;l<A.length;l++)Am(A[l],b)}catch($){Me(s,s.return,$)}}a&&g&64&&$p(c),Ns(c,c.return);break;case 27:Lp(c);case 26:case 5:$n(l,c,a),a&&s===null&&g&4&&Vp(c),Ns(c,c.return);break;case 12:$n(l,c,a);break;case 31:$n(l,c,a),a&&g&4&&Gp(l,c);break;case 13:$n(l,c,a),a&&g&4&&Yp(l,c);break;case 22:c.memoizedState===null&&$n(l,c,a),Ns(c,c.return);break;case 30:break;default:$n(l,c,a)}n=n.sibling}}function bc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ss(a))}function xc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ss(e))}function an(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Kp(e,n,a,s),n=n.sibling}function Kp(e,n,a,s){var l=n.flags;switch(n.tag){case 0:case 11:case 15:an(e,n,a,s),l&2048&&$s(9,n);break;case 1:an(e,n,a,s);break;case 3:an(e,n,a,s),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ss(e)));break;case 12:if(l&2048){an(e,n,a,s),e=n.stateNode;try{var c=n.memoizedProps,g=c.id,b=c.onPostCommit;typeof b=="function"&&b(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){Me(n,n.return,A)}}else an(e,n,a,s);break;case 31:an(e,n,a,s);break;case 13:an(e,n,a,s);break;case 23:break;case 22:c=n.stateNode,g=n.alternate,n.memoizedState!==null?c._visibility&2?an(e,n,a,s):Vs(e,n):c._visibility&2?an(e,n,a,s):(c._visibility|=2,Ai(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),l&2048&&bc(g,n);break;case 24:an(e,n,a,s),l&2048&&xc(n.alternate,n);break;default:an(e,n,a,s)}}function Ai(e,n,a,s,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=e,g=n,b=a,A=s,$=g.flags;switch(g.tag){case 0:case 11:case 15:Ai(c,g,b,A,l),$s(8,g);break;case 23:break;case 22:var H=g.stateNode;g.memoizedState!==null?H._visibility&2?Ai(c,g,b,A,l):Vs(c,g):(H._visibility|=2,Ai(c,g,b,A,l)),l&&$&2048&&bc(g.alternate,g);break;case 24:Ai(c,g,b,A,l),l&&$&2048&&xc(g.alternate,g);break;default:Ai(c,g,b,A,l)}n=n.sibling}}function Vs(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,l=s.flags;switch(s.tag){case 22:Vs(a,s),l&2048&&bc(s.alternate,s);break;case 24:Vs(a,s),l&2048&&xc(s.alternate,s);break;default:Vs(a,s)}n=n.sibling}}var _s=8192;function Ci(e,n,a){if(e.subtreeFlags&_s)for(e=e.child;e!==null;)Qp(e,n,a),e=e.sibling}function Qp(e,n,a){switch(e.tag){case 26:Ci(e,n,a),e.flags&_s&&e.memoizedState!==null&&KS(a,nn,e.memoizedState,e.memoizedProps);break;case 5:Ci(e,n,a);break;case 3:case 4:var s=nn;nn=Or(e.stateNode.containerInfo),Ci(e,n,a),nn=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=_s,_s=16777216,Ci(e,n,a),_s=s):Ci(e,n,a));break;default:Ci(e,n,a)}}function Zp(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ls(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];nt=s,Jp(s,e)}Zp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fp(e),e=e.sibling}function Fp(e){switch(e.tag){case 0:case 11:case 15:Ls(e),e.flags&2048&&na(9,e,e.return);break;case 3:Ls(e);break;case 12:Ls(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,xr(e)):Ls(e);break;default:Ls(e)}}function xr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];nt=s,Jp(s,e)}Zp(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:na(8,n,n.return),xr(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,xr(n));break;default:xr(n)}e=e.sibling}}function Jp(e,n){for(;nt!==null;){var a=nt;switch(a.tag){case 0:case 11:case 15:na(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ss(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,nt=s;else e:for(a=e;nt!==null;){s=nt;var l=s.sibling,c=s.return;if(Hp(s),s===a){nt=null;break e}if(l!==null){l.return=c,nt=l;break e}nt=c}}}var lS={getCacheForType:function(e){var n=rt(Qe),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return rt(Qe).controller.signal}},uS=typeof WeakMap=="function"?WeakMap:Map,Ce=0,ke=null,ge=null,ve=0,je=0,kt=null,aa=!1,Ei=!1,Sc=!1,Nn=0,qe=0,ia=0,Ua=0,Tc=0,Ot=0,wi=0,Bs=null,Tt=null,Ac=!1,Sr=0,Wp=0,Tr=1/0,Ar=null,sa=null,et=0,oa=null,ji=null,Vn=0,Cc=0,Ec=null,Ip=null,Us=0,wc=null;function $t(){return(Ce&2)!==0&&ve!==0?ve&-ve:q.T!==null?kc():ph()}function eg(){if(Ot===0)if((ve&536870912)===0||Se){var e=Ro;Ro<<=1,(Ro&3932160)===0&&(Ro=262144),Ot=e}else Ot=536870912;return e=zt.current,e!==null&&(e.flags|=32),Ot}function At(e,n,a){(e===ke&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(Mi(e,0),ra(e,ve,Ot,!1)),rs(e,a),((Ce&2)===0||e!==ke)&&(e===ke&&((Ce&2)===0&&(Ua|=a),qe===4&&ra(e,ve,Ot,!1)),fn(e))}function tg(e,n,a){if((Ce&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||os(e,n),l=s?dS(e,n):Mc(e,n,!0),c=s;do{if(l===0){Ei&&!s&&ra(e,n,0,!1);break}else{if(a=e.current.alternate,c&&!cS(a)){l=Mc(e,n,!1),c=!1;continue}if(l===2){if(c=n,e.errorRecoveryDisabledLanes&c)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var b=e;l=Bs;var A=b.current.memoizedState.isDehydrated;if(A&&(Mi(b,g).flags|=256),g=Mc(b,g,!1),g!==2){if(Sc&&!A){b.errorRecoveryDisabledLanes|=c,Ua|=c,l=4;break e}c=Tt,Tt=l,c!==null&&(Tt===null?Tt=c:Tt.push.apply(Tt,c))}l=g}if(c=!1,l!==2)continue}}if(l===1){Mi(e,0),ra(e,n,0,!0);break}e:{switch(s=e,c=l,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ra(s,n,Ot,!aa);break e;case 2:Tt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(l=Sr+300-Et(),10<l)){if(ra(s,n,Ot,!aa),Oo(s,0,!0)!==0)break e;Vn=n,s.timeoutHandle=kg(ng.bind(null,s,a,Tt,Ar,Ac,n,Ot,Ua,wi,aa,c,"Throttled",-0,0),l);break e}ng(s,a,Tt,Ar,Ac,n,Ot,Ua,wi,aa,c,null,-0,0)}}break}while(!0);fn(e)}function ng(e,n,a,s,l,c,g,b,A,$,H,X,_,B){if(e.timeoutHandle=-1,X=n.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Sn},Qp(n,c,X);var I=(c&62914560)===c?Sr-Et():(c&4194048)===c?Wp-Et():0;if(I=QS(X,I),I!==null){Vn=c,e.cancelPendingCommit=I(cg.bind(null,e,n,c,a,s,l,g,b,A,H,X,null,_,B)),ra(e,c,g,!$);return}}cg(e,n,c,a,s,l,g,b,A)}function cS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var l=a[s],c=l.getSnapshot;l=l.value;try{if(!Mt(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ra(e,n,a,s){n&=~Tc,n&=~Ua,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var l=n;0<l;){var c=31-jt(l),g=1<<c;s[c]=-1,l&=~g}a!==0&&dh(e,a,n)}function Cr(){return(Ce&6)===0?(Hs(0),!1):!0}function jc(){if(ge!==null){if(je===0)var e=ge.return;else e=ge,En=Ra=null,Gu(e),vi=null,As=0,e=ge;for(;e!==null;)Op(e.alternate,e),e=e.return;ge=null}}function Mi(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,zS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Vn=0,jc(),ke=e,ge=a=An(e.current,null),ve=n,je=0,kt=null,aa=!1,Ei=os(e,n),Sc=!1,wi=Ot=Tc=Ua=ia=qe=0,Tt=Bs=null,Ac=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var l=31-jt(s),c=1<<l;n|=e[l],s&=~c}return Nn=n,Xo(),a}function ag(e,n){de=null,q.H=Rs,n===yi||n===Io?(n=bm(),je=3):n===Ru?(n=bm(),je=4):je=n===sc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kt=n,ge===null&&(qe=1,hr(e,Ut(n,e.current)))}function ig(){var e=zt.current;return e===null?!0:(ve&4194048)===ve?Yt===null:(ve&62914560)===ve||(ve&536870912)!==0?e===Yt:!1}function sg(){var e=q.H;return q.H=Rs,e===null?Rs:e}function og(){var e=q.A;return q.A=lS,e}function Er(){qe=4,aa||(ve&4194048)!==ve&&zt.current!==null||(Ei=!0),(ia&134217727)===0&&(Ua&134217727)===0||ke===null||ra(ke,ve,Ot,!1)}function Mc(e,n,a){var s=Ce;Ce|=2;var l=sg(),c=og();(ke!==e||ve!==n)&&(Ar=null,Mi(e,n)),n=!1;var g=qe;e:do try{if(je!==0&&ge!==null){var b=ge,A=kt;switch(je){case 8:jc(),g=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(n=!0);var $=je;if(je=0,kt=null,Di(e,b,A,$),a&&Ei){g=0;break e}break;default:$=je,je=0,kt=null,Di(e,b,A,$)}}fS(),g=qe;break}catch(H){ag(e,H)}while(!0);return n&&e.shellSuspendCounter++,En=Ra=null,Ce=s,q.H=l,q.A=c,ge===null&&(ke=null,ve=0,Xo()),g}function fS(){for(;ge!==null;)rg(ge)}function dS(e,n){var a=Ce;Ce|=2;var s=sg(),l=og();ke!==e||ve!==n?(Ar=null,Tr=Et()+500,Mi(e,n)):Ei=os(e,n);e:do try{if(je!==0&&ge!==null){n=ge;var c=kt;t:switch(je){case 1:je=0,kt=null,Di(e,n,c,1);break;case 2:case 9:if(ym(c)){je=0,kt=null,lg(n);break}n=function(){je!==2&&je!==9||ke!==e||(je=7),fn(e)},c.then(n,n);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:ym(c)?(je=0,kt=null,lg(n)):(je=0,kt=null,Di(e,n,c,7));break;case 5:var g=null;switch(ge.tag){case 26:g=ge.memoizedState;case 5:case 27:var b=ge;if(g?Kg(g):b.stateNode.complete){je=0,kt=null;var A=b.sibling;if(A!==null)ge=A;else{var $=b.return;$!==null?(ge=$,wr($)):ge=null}break t}}je=0,kt=null,Di(e,n,c,5);break;case 6:je=0,kt=null,Di(e,n,c,6);break;case 8:jc(),qe=6;break e;default:throw Error(r(462))}}hS();break}catch(H){ag(e,H)}while(!0);return En=Ra=null,q.H=s,q.A=l,Ce=a,ge!==null?0:(ke=null,ve=0,Xo(),qe)}function hS(){for(;ge!==null&&!Vx();)rg(ge)}function rg(e){var n=Rp(e.alternate,e,Nn);e.memoizedProps=e.pendingProps,n===null?wr(e):ge=n}function lg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Ep(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Ep(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Gu(n);default:Op(a,n),n=ge=om(n,Nn),n=Rp(a,n,Nn)}e.memoizedProps=e.pendingProps,n===null?wr(e):ge=n}function Di(e,n,a,s){En=Ra=null,Gu(n),vi=null,As=0;var l=n.return;try{if(tS(e,l,n,a,ve)){qe=1,hr(e,Ut(a,e.current)),ge=null;return}}catch(c){if(l!==null)throw ge=l,c;qe=1,hr(e,Ut(a,e.current)),ge=null;return}n.flags&32768?(Se||s===1?e=!0:Ei||(ve&536870912)!==0?e=!1:(aa=e=!0,(s===2||s===9||s===3||s===6)&&(s=zt.current,s!==null&&s.tag===13&&(s.flags|=16384))),ug(n,e)):wr(n)}function wr(e){var n=e;do{if((n.flags&32768)!==0){ug(n,aa);return}e=n.return;var a=iS(n.alternate,n,Nn);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);qe===0&&(qe=5)}function ug(e,n){do{var a=sS(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);qe=6,ge=null}function cg(e,n,a,s,l,c,g,b,A){e.cancelPendingCommit=null;do jr();while(et!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(c=n.lanes|n.childLanes,c|=gu,Px(e,a,c,g,b,A),e===ke&&(ge=ke=null,ve=0),ji=n,oa=e,Vn=a,Cc=c,Ec=l,Ip=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yS(Do,function(){return pg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=q.T,q.T=null,l=K.p,K.p=2,g=Ce,Ce|=4;try{oS(e,n,a)}finally{Ce=g,K.p=l,q.T=s}}et=1,fg(),dg(),hg()}}function fg(){if(et===1){et=0;var e=oa,n=ji,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=q.T,q.T=null;var s=K.p;K.p=2;var l=Ce;Ce|=4;try{Xp(n,e);var c=Uc,g=Jh(e.containerInfo),b=c.focusedElem,A=c.selectionRange;if(g!==b&&b&&b.ownerDocument&&Fh(b.ownerDocument.documentElement,b)){if(A!==null&&fu(b)){var $=A.start,H=A.end;if(H===void 0&&(H=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(H,b.value.length);else{var X=b.ownerDocument||document,_=X&&X.defaultView||window;if(_.getSelection){var B=_.getSelection(),I=b.textContent.length,ie=Math.min(A.start,I),Re=A.end===void 0?ie:Math.min(A.end,I);!B.extend&&ie>Re&&(g=Re,Re=ie,ie=g);var M=Zh(b,ie),w=Zh(b,Re);if(M&&w&&(B.rangeCount!==1||B.anchorNode!==M.node||B.anchorOffset!==M.offset||B.focusNode!==w.node||B.focusOffset!==w.offset)){var O=X.createRange();O.setStart(M.node,M.offset),B.removeAllRanges(),ie>Re?(B.addRange(O),B.extend(w.node,w.offset)):(O.setEnd(w.node,w.offset),B.addRange(O))}}}}for(X=[],B=b;B=B.parentNode;)B.nodeType===1&&X.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<X.length;b++){var Y=X[b];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Br=!!Bc,Uc=Bc=null}finally{Ce=l,K.p=s,q.T=a}}e.current=n,et=2}}function dg(){if(et===2){et=0;var e=oa,n=ji,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=q.T,q.T=null;var s=K.p;K.p=2;var l=Ce;Ce|=4;try{Up(e,n.alternate,n)}finally{Ce=l,K.p=s,q.T=a}}et=3}}function hg(){if(et===4||et===3){et=0,_x();var e=oa,n=ji,a=Vn,s=Ip;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?et=5:(et=0,ji=oa=null,mg(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(sa=null),Pl(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(ss,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=q.T,l=K.p,K.p=2,q.T=null;try{for(var c=e.onRecoverableError,g=0;g<s.length;g++){var b=s[g];c(b.value,{componentStack:b.stack})}}finally{q.T=n,K.p=l}}(Vn&3)!==0&&jr(),fn(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===wc?Us++:(Us=0,wc=e):Us=0,Hs(0)}}function mg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ss(n)))}function jr(){return fg(),dg(),hg(),pg()}function pg(){if(et!==5)return!1;var e=oa,n=Cc;Cc=0;var a=Pl(Vn),s=q.T,l=K.p;try{K.p=32>a?32:a,q.T=null,a=Ec,Ec=null;var c=oa,g=Vn;if(et=0,ji=oa=null,Vn=0,(Ce&6)!==0)throw Error(r(331));var b=Ce;if(Ce|=4,Fp(c.current),Kp(c,c.current,g,a),Ce=b,Hs(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(ss,c)}catch{}return!0}finally{K.p=l,q.T=s,mg(e,n)}}function gg(e,n,a){n=Ut(a,n),n=ic(e.stateNode,n,2),e=In(e,n,2),e!==null&&(rs(e,2),fn(e))}function Me(e,n,a){if(e.tag===3)gg(e,e,a);else for(;n!==null;){if(n.tag===3){gg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(sa===null||!sa.has(s))){e=Ut(a,e),a=yp(2),s=In(n,a,2),s!==null&&(vp(a,s,n,e),rs(s,2),fn(s));break}}n=n.return}}function Dc(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new uS;var l=new Set;s.set(n,l)}else l=s.get(n),l===void 0&&(l=new Set,s.set(n,l));l.has(a)||(Sc=!0,l.add(a),e=mS.bind(null,e,n,a),n.then(e,e))}function mS(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(ve&a)===a&&(qe===4||qe===3&&(ve&62914560)===ve&&300>Et()-Sr?(Ce&2)===0&&Mi(e,0):Tc|=a,wi===ve&&(wi=0)),fn(e)}function yg(e,n){n===0&&(n=fh()),e=Ma(e,n),e!==null&&(rs(e,n),fn(e))}function pS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),yg(e,a)}function gS(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),yg(e,a)}function yS(e,n){return ql(e,n)}var Mr=null,zi=null,zc=!1,Dr=!1,Rc=!1,la=0;function fn(e){e!==zi&&e.next===null&&(zi===null?Mr=zi=e:zi=zi.next=e),Dr=!0,zc||(zc=!0,bS())}function Hs(e,n){if(!Rc&&Dr){Rc=!0;do for(var a=!1,s=Mr;s!==null;){if(e!==0){var l=s.pendingLanes;if(l===0)var c=0;else{var g=s.suspendedLanes,b=s.pingedLanes;c=(1<<31-jt(42|e)+1)-1,c&=l&~(g&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Sg(s,c))}else c=ve,c=Oo(s,s===ke?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||os(s,c)||(a=!0,Sg(s,c));s=s.next}while(a);Rc=!1}}function vS(){vg()}function vg(){Dr=zc=!1;var e=0;la!==0&&DS()&&(e=la);for(var n=Et(),a=null,s=Mr;s!==null;){var l=s.next,c=bg(s,n);c===0?(s.next=null,a===null?Mr=l:a.next=l,l===null&&(zi=a)):(a=s,(e!==0||(c&3)!==0)&&(Dr=!0)),s=l}et!==0&&et!==5||Hs(e),la!==0&&(la=0)}function bg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var g=31-jt(c),b=1<<g,A=l[g];A===-1?((b&a)===0||(b&s)!==0)&&(l[g]=Xx(b,n)):A<=n&&(e.expiredLanes|=b),c&=~b}if(n=ke,a=ve,a=Oo(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(je===2||je===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Gl(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||os(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Gl(s),Pl(a)){case 2:case 8:a=uh;break;case 32:a=Do;break;case 268435456:a=ch;break;default:a=Do}return s=xg.bind(null,e),a=ql(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Gl(s),e.callbackPriority=2,e.callbackNode=null,2}function xg(e,n){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jr()&&e.callbackNode!==a)return null;var s=ve;return s=Oo(e,e===ke?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(tg(e,s,n),bg(e,Et()),e.callbackNode!=null&&e.callbackNode===a?xg.bind(null,e):null)}function Sg(e,n){if(jr())return null;tg(e,n,!0)}function bS(){RS(function(){(Ce&6)!==0?ql(lh,vS):vg()})}function kc(){if(la===0){var e=pi;e===0&&(e=zo,zo<<=1,(zo&261888)===0&&(zo=256)),la=e}return la}function Tg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_o(""+e)}function Ag(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function xS(e,n,a,s,l){if(n==="submit"&&a&&a.stateNode===l){var c=Tg((l[yt]||null).action),g=s.submitter;g&&(n=(n=g[yt]||null)?Tg(n.formAction):g.getAttribute("formAction"),n!==null&&(c=n,g=null));var b=new Ho("action","action",null,s,l);e.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(la!==0){var A=g?Ag(l,g):new FormData(l);Wu(a,{pending:!0,data:A,method:l.method,action:c},null,A)}}else typeof c=="function"&&(b.preventDefault(),A=g?Ag(l,g):new FormData(l),Wu(a,{pending:!0,data:A,method:l.method,action:c},c,A))},currentTarget:l}]})}}for(var Oc=0;Oc<pu.length;Oc++){var $c=pu[Oc],SS=$c.toLowerCase(),TS=$c[0].toUpperCase()+$c.slice(1);tn(SS,"on"+TS)}tn(em,"onAnimationEnd"),tn(tm,"onAnimationIteration"),tn(nm,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(L1,"onTransitionRun"),tn(B1,"onTransitionStart"),tn(U1,"onTransitionCancel"),tn(am,"onTransitionEnd"),ti("onMouseEnter",["mouseout","mouseover"]),ti("onMouseLeave",["mouseout","mouseover"]),ti("onPointerEnter",["pointerout","pointerover"]),ti("onPointerLeave",["pointerout","pointerover"]),Ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qs));function Cg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],l=s.event;s=s.listeners;e:{var c=void 0;if(n)for(var g=s.length-1;0<=g;g--){var b=s[g],A=b.instance,$=b.currentTarget;if(b=b.listener,A!==c&&l.isPropagationStopped())break e;c=b,l.currentTarget=$;try{c(l)}catch(H){Yo(H)}l.currentTarget=null,c=A}else for(g=0;g<s.length;g++){if(b=s[g],A=b.instance,$=b.currentTarget,b=b.listener,A!==c&&l.isPropagationStopped())break e;c=b,l.currentTarget=$;try{c(l)}catch(H){Yo(H)}l.currentTarget=null,c=A}}}}function ye(e,n){var a=n[Kl];a===void 0&&(a=n[Kl]=new Set);var s=e+"__bubble";a.has(s)||(Eg(n,e,2,!1),a.add(s))}function Nc(e,n,a){var s=0;n&&(s|=4),Eg(a,e,s,n)}var zr="_reactListening"+Math.random().toString(36).slice(2);function Vc(e){if(!e[zr]){e[zr]=!0,vh.forEach(function(a){a!=="selectionchange"&&(AS.has(a)||Nc(a,!1,e),Nc(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[zr]||(n[zr]=!0,Nc("selectionchange",!1,n))}}function Eg(e,n,a,s){switch(ey(n)){case 2:var l=JS;break;case 8:l=WS;break;default:l=Jc}a=l.bind(null,n,a,e),l=void 0,!nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(n,a,{capture:!0,passive:l}):e.addEventListener(n,a,!0):l!==void 0?e.addEventListener(n,a,{passive:l}):e.addEventListener(n,a,!1)}function _c(e,n,a,s,l){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var b=s.stateNode.containerInfo;if(b===l)break;if(g===4)for(g=s.return;g!==null;){var A=g.tag;if((A===3||A===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;b!==null;){if(g=Wa(b),g===null)return;if(A=g.tag,A===5||A===6||A===26||A===27){s=c=g;continue e}b=b.parentNode}}s=s.return}zh(function(){var $=c,H=eu(a),X=[];e:{var _=im.get(e);if(_!==void 0){var B=Ho,I=e;switch(e){case"keypress":if(Bo(a)===0)break e;case"keydown":case"keyup":B=g1;break;case"focusin":I="focus",B=ou;break;case"focusout":I="blur",B=ou;break;case"beforeblur":case"afterblur":B=ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=i1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=b1;break;case em:case tm:case nm:B=r1;break;case am:B=S1;break;case"scroll":case"scrollend":B=n1;break;case"wheel":B=A1;break;case"copy":case"cut":case"paste":B=u1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Nh;break;case"toggle":case"beforetoggle":B=E1}var ie=(n&4)!==0,Re=!ie&&(e==="scroll"||e==="scrollend"),M=ie?_!==null?_+"Capture":null:_;ie=[];for(var w=$,O;w!==null;){var Y=w;if(O=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||O===null||M===null||(Y=cs(w,M),Y!=null&&ie.push(Gs(w,Y,O))),Re)break;w=w.return}0<ie.length&&(_=new B(_,I,null,a,H),X.push({event:_,listeners:ie}))}}if((n&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",_&&a!==Il&&(I=a.relatedTarget||a.fromElement)&&(Wa(I)||I[Ja]))break e;if((B||_)&&(_=H.window===H?H:(_=H.ownerDocument)?_.defaultView||_.parentWindow:window,B?(I=a.relatedTarget||a.toElement,B=$,I=I?Wa(I):null,I!==null&&(Re=f(I),ie=I.tag,I!==Re||ie!==5&&ie!==27&&ie!==6)&&(I=null)):(B=null,I=$),B!==I)){if(ie=Oh,Y="onMouseLeave",M="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Nh,Y="onPointerLeave",M="onPointerEnter",w="pointer"),Re=B==null?_:us(B),O=I==null?_:us(I),_=new ie(Y,w+"leave",B,a,H),_.target=Re,_.relatedTarget=O,Y=null,Wa(H)===$&&(ie=new ie(M,w+"enter",I,a,H),ie.target=O,ie.relatedTarget=Re,Y=ie),Re=Y,B&&I)t:{for(ie=CS,M=B,w=I,O=0,Y=M;Y;Y=ie(Y))O++;Y=0;for(var ne=w;ne;ne=ie(ne))Y++;for(;0<O-Y;)M=ie(M),O--;for(;0<Y-O;)w=ie(w),Y--;for(;O--;){if(M===w||w!==null&&M===w.alternate){ie=M;break t}M=ie(M),w=ie(w)}ie=null}else ie=null;B!==null&&wg(X,_,B,ie,!1),I!==null&&Re!==null&&wg(X,Re,I,ie,!0)}}e:{if(_=$?us($):window,B=_.nodeName&&_.nodeName.toLowerCase(),B==="select"||B==="input"&&_.type==="file")var Te=Gh;else if(Hh(_))if(Yh)Te=N1;else{Te=O1;var te=k1}else B=_.nodeName,!B||B.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?$&&Wl($.elementType)&&(Te=Gh):Te=$1;if(Te&&(Te=Te(e,$))){qh(X,Te,a,H);break e}te&&te(e,_,$),e==="focusout"&&$&&_.type==="number"&&$.memoizedProps.value!=null&&Jl(_,"number",_.value)}switch(te=$?us($):window,e){case"focusin":(Hh(te)||te.contentEditable==="true")&&(ri=te,du=$,vs=null);break;case"focusout":vs=du=ri=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Wh(X,a,H);break;case"selectionchange":if(_1)break;case"keydown":case"keyup":Wh(X,a,H)}var he;if(lu)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else oi?Bh(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(Vh&&a.locale!=="ko"&&(oi||be!=="onCompositionStart"?be==="onCompositionEnd"&&oi&&(he=Rh()):(Pn=H,au="value"in Pn?Pn.value:Pn.textContent,oi=!0)),te=Rr($,be),0<te.length&&(be=new $h(be,e,null,a,H),X.push({event:be,listeners:te}),he?be.data=he:(he=Uh(a),he!==null&&(be.data=he)))),(he=j1?M1(e,a):D1(e,a))&&(be=Rr($,"onBeforeInput"),0<be.length&&(te=new $h("onBeforeInput","beforeinput",null,a,H),X.push({event:te,listeners:be}),te.data=he)),xS(X,e,$,a,H)}Cg(X,n)})}function Gs(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Rr(e,n){for(var a=n+"Capture",s=[];e!==null;){var l=e,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=cs(e,a),l!=null&&s.unshift(Gs(e,l,c)),l=cs(e,n),l!=null&&s.push(Gs(e,l,c))),e.tag===3)return s;e=e.return}return[]}function CS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wg(e,n,a,s,l){for(var c=n._reactName,g=[];a!==null&&a!==s;){var b=a,A=b.alternate,$=b.stateNode;if(b=b.tag,A!==null&&A===s)break;b!==5&&b!==26&&b!==27||$===null||(A=$,l?($=cs(a,c),$!=null&&g.unshift(Gs(a,$,A))):l||($=cs(a,c),$!=null&&g.push(Gs(a,$,A)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var ES=/\r\n?/g,wS=/\u0000|\uFFFD/g;function jg(e){return(typeof e=="string"?e:""+e).replace(ES,`
`).replace(wS,"")}function Mg(e,n){return n=jg(n),jg(e)===n}function ze(e,n,a,s,l,c){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||ai(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&ai(e,""+s);break;case"className":No(e,"class",s);break;case"tabIndex":No(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":No(e,a,s);break;case"style":Mh(e,s,c);break;case"data":if(n!=="object"){No(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=_o(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&ze(e,n,"name",l.name,l,null),ze(e,n,"formEncType",l.formEncType,l,null),ze(e,n,"formMethod",l.formMethod,l,null),ze(e,n,"formTarget",l.formTarget,l,null)):(ze(e,n,"encType",l.encType,l,null),ze(e,n,"method",l.method,l,null),ze(e,n,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=_o(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Sn);break;case"onScroll":s!=null&&ye("scroll",e);break;case"onScrollEnd":s!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=_o(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":ye("beforetoggle",e),ye("toggle",e),$o(e,"popover",s);break;case"xlinkActuate":xn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":xn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":xn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":xn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":xn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":xn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":xn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":xn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":xn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":$o(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=e1.get(a)||a,$o(e,a,s))}}function Lc(e,n,a,s,l,c){switch(a){case"style":Mh(e,s,c);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?ai(e,s):(typeof s=="number"||typeof s=="bigint")&&ai(e,""+s);break;case"onScroll":s!=null&&ye("scroll",e);break;case"onScrollEnd":s!=null&&ye("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Sn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bh.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),n=a.slice(2,l?a.length-7:void 0),c=e[yt]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(n,c,l),typeof s=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,l);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):$o(e,a,s)}}}function ut(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var s=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(e,n,c,g,a,null)}}l&&ze(e,n,"srcSet",a.srcSet,a,null),s&&ze(e,n,"src",a.src,a,null);return;case"input":ye("invalid",e);var b=c=g=l=null,A=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var H=a[s];if(H!=null)switch(s){case"name":l=H;break;case"type":g=H;break;case"checked":A=H;break;case"defaultChecked":$=H;break;case"value":c=H;break;case"defaultValue":b=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,n));break;default:ze(e,n,s,H,a,null)}}Ch(e,c,b,A,$,g,l,!1);return;case"select":ye("invalid",e),s=g=c=null;for(l in a)if(a.hasOwnProperty(l)&&(b=a[l],b!=null))switch(l){case"value":c=b;break;case"defaultValue":g=b;break;case"multiple":s=b;default:ze(e,n,l,b,a,null)}n=c,a=g,e.multiple=!!s,n!=null?ni(e,!!s,n,!1):a!=null&&ni(e,!!s,a,!0);return;case"textarea":ye("invalid",e),c=l=s=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":s=b;break;case"defaultValue":l=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:ze(e,n,g,b,a,null)}wh(e,s,l,c);return;case"option":for(A in a)if(a.hasOwnProperty(A)&&(s=a[A],s!=null))switch(A){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ze(e,n,A,s,a,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(s=0;s<qs.length;s++)ye(qs[s],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(e,n,$,s,a,null)}return;default:if(Wl(n)){for(H in a)a.hasOwnProperty(H)&&(s=a[H],s!==void 0&&Lc(e,n,H,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&ze(e,n,b,s,a,null))}function jS(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,g=null,b=null,A=null,$=null,H=null;for(B in a){var X=a[B];if(a.hasOwnProperty(B)&&X!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":A=X;default:s.hasOwnProperty(B)||ze(e,n,B,null,s,X)}}for(var _ in s){var B=s[_];if(X=a[_],s.hasOwnProperty(_)&&(B!=null||X!=null))switch(_){case"type":c=B;break;case"name":l=B;break;case"checked":$=B;break;case"defaultChecked":H=B;break;case"value":g=B;break;case"defaultValue":b=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(r(137,n));break;default:B!==X&&ze(e,n,_,B,s,X)}}Fl(e,g,b,A,$,H,c,l);return;case"select":B=g=b=_=null;for(c in a)if(A=a[c],a.hasOwnProperty(c)&&A!=null)switch(c){case"value":break;case"multiple":B=A;default:s.hasOwnProperty(c)||ze(e,n,c,null,s,A)}for(l in s)if(c=s[l],A=a[l],s.hasOwnProperty(l)&&(c!=null||A!=null))switch(l){case"value":_=c;break;case"defaultValue":b=c;break;case"multiple":g=c;default:c!==A&&ze(e,n,l,c,s,A)}n=b,a=g,s=B,_!=null?ni(e,!!a,_,!1):!!s!=!!a&&(n!=null?ni(e,!!a,n,!0):ni(e,!!a,a?[]:"",!1));return;case"textarea":B=_=null;for(b in a)if(l=a[b],a.hasOwnProperty(b)&&l!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:ze(e,n,b,null,s,l)}for(g in s)if(l=s[g],c=a[g],s.hasOwnProperty(g)&&(l!=null||c!=null))switch(g){case"value":_=l;break;case"defaultValue":B=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==c&&ze(e,n,g,l,s,c)}Eh(e,_,B);return;case"option":for(var I in a)if(_=a[I],a.hasOwnProperty(I)&&_!=null&&!s.hasOwnProperty(I))switch(I){case"selected":e.selected=!1;break;default:ze(e,n,I,null,s,_)}for(A in s)if(_=s[A],B=a[A],s.hasOwnProperty(A)&&_!==B&&(_!=null||B!=null))switch(A){case"selected":e.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:ze(e,n,A,_,s,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)_=a[ie],a.hasOwnProperty(ie)&&_!=null&&!s.hasOwnProperty(ie)&&ze(e,n,ie,null,s,_);for($ in s)if(_=s[$],B=a[$],s.hasOwnProperty($)&&_!==B&&(_!=null||B!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(137,n));break;default:ze(e,n,$,_,s,B)}return;default:if(Wl(n)){for(var Re in a)_=a[Re],a.hasOwnProperty(Re)&&_!==void 0&&!s.hasOwnProperty(Re)&&Lc(e,n,Re,void 0,s,_);for(H in s)_=s[H],B=a[H],!s.hasOwnProperty(H)||_===B||_===void 0&&B===void 0||Lc(e,n,H,_,s,B);return}}for(var M in a)_=a[M],a.hasOwnProperty(M)&&_!=null&&!s.hasOwnProperty(M)&&ze(e,n,M,null,s,_);for(X in s)_=s[X],B=a[X],!s.hasOwnProperty(X)||_===B||_==null&&B==null||ze(e,n,X,_,s,B)}function Dg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function MS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var l=a[s],c=l.transferSize,g=l.initiatorType,b=l.duration;if(c&&b&&Dg(g)){for(g=0,b=l.responseEnd,s+=1;s<a.length;s++){var A=a[s],$=A.startTime;if($>b)break;var H=A.transferSize,X=A.initiatorType;H&&Dg(X)&&(A=A.responseEnd,g+=H*(A<b?1:(b-$)/(A-$)))}if(--s,n+=8*(c+g)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bc=null,Uc=null;function kr(e){return e.nodeType===9?e:e.ownerDocument}function zg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Hc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qc=null;function DS(){var e=window.event;return e&&e.type==="popstate"?e===qc?!1:(qc=e,!0):(qc=null,!1)}var kg=typeof setTimeout=="function"?setTimeout:void 0,zS=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,RS=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(e){return Og.resolve(null).then(e).catch(kS)}:kg;function kS(e){setTimeout(function(){throw e})}function ua(e){return e==="head"}function $g(e,n){var a=n,s=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(l),$i(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Ys(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ys(a);for(var c=a.firstChild;c;){var g=c.nextSibling,b=c.nodeName;c[ls]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=g}}else a==="body"&&Ys(e.ownerDocument.body);a=l}while(a);$i(n)}function Ng(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Gc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Gc(a),Ql(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function OS(e,n,a,s){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[ls])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Xt(e.nextSibling),e===null)break}return null}function $S(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Xt(e.nextSibling),e===null))return null;return e}function Vg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Xt(e.nextSibling),e===null))return null;return e}function Yc(e){return e.data==="$?"||e.data==="$~"}function Xc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function NS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Xt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Pc=null;function _g(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Xt(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Lg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Bg(e,n,a){switch(n=kr(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ys(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ql(e)}var Pt=new Map,Ug=new Set;function Or(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _n=K.d;K.d={f:VS,r:_S,D:LS,C:BS,L:US,m:HS,X:GS,S:qS,M:YS};function VS(){var e=_n.f(),n=Cr();return e||n}function _S(e){var n=Ia(e);n!==null&&n.tag===5&&n.type==="form"?ap(n):_n.r(e)}var Ri=typeof document>"u"?null:document;function Hg(e,n,a){var s=Ri;if(s&&typeof n=="string"&&n){var l=Lt(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Ug.has(l)||(Ug.add(l),e={rel:e,crossOrigin:a,href:n},s.querySelector(l)===null&&(n=s.createElement("link"),ut(n,"link",e),tt(n),s.head.appendChild(n)))}}function LS(e){_n.D(e),Hg("dns-prefetch",e,null)}function BS(e,n){_n.C(e,n),Hg("preconnect",e,n)}function US(e,n,a){_n.L(e,n,a);var s=Ri;if(s&&e&&n){var l='link[rel="preload"][as="'+Lt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Lt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Lt(a.imageSizes)+'"]')):l+='[href="'+Lt(e)+'"]';var c=l;switch(n){case"style":c=ki(e);break;case"script":c=Oi(e)}Pt.has(c)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Pt.set(c,e),s.querySelector(l)!==null||n==="style"&&s.querySelector(Xs(c))||n==="script"&&s.querySelector(Ps(c))||(n=s.createElement("link"),ut(n,"link",e),tt(n),s.head.appendChild(n)))}}function HS(e,n){_n.m(e,n);var a=Ri;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Lt(s)+'"][href="'+Lt(e)+'"]',c=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Oi(e)}if(!Pt.has(c)&&(e=x({rel:"modulepreload",href:e},n),Pt.set(c,e),a.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ps(c)))return}s=a.createElement("link"),ut(s,"link",e),tt(s),a.head.appendChild(s)}}}function qS(e,n,a){_n.S(e,n,a);var s=Ri;if(s&&e){var l=ei(s).hoistableStyles,c=ki(e);n=n||"default";var g=l.get(c);if(!g){var b={loading:0,preload:null};if(g=s.querySelector(Xs(c)))b.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Pt.get(c))&&Kc(e,a);var A=g=s.createElement("link");tt(A),ut(A,"link",e),A._p=new Promise(function($,H){A.onload=$,A.onerror=H}),A.addEventListener("load",function(){b.loading|=1}),A.addEventListener("error",function(){b.loading|=2}),b.loading|=4,$r(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:b},l.set(c,g)}}}function GS(e,n){_n.X(e,n);var a=Ri;if(a&&e){var s=ei(a).hoistableScripts,l=Oi(e),c=s.get(l);c||(c=a.querySelector(Ps(l)),c||(e=x({src:e,async:!0},n),(n=Pt.get(l))&&Qc(e,n),c=a.createElement("script"),tt(c),ut(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(l,c))}}function YS(e,n){_n.M(e,n);var a=Ri;if(a&&e){var s=ei(a).hoistableScripts,l=Oi(e),c=s.get(l);c||(c=a.querySelector(Ps(l)),c||(e=x({src:e,async:!0,type:"module"},n),(n=Pt.get(l))&&Qc(e,n),c=a.createElement("script"),tt(c),ut(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(l,c))}}function qg(e,n,a,s){var l=(l=fe.current)?Or(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ki(a.href),a=ei(l).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ki(a.href);var c=ei(l).hoistableStyles,g=c.get(e);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,g),(c=l.querySelector(Xs(e)))&&!c._p&&(g.instance=c,g.state.loading=5),Pt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Pt.set(e,a),c||XS(l,e,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Oi(a),a=ei(l).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ki(e){return'href="'+Lt(e)+'"'}function Xs(e){return'link[rel="stylesheet"]['+e+"]"}function Gg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function XS(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),ut(n,"link",a),tt(n),e.head.appendChild(n))}function Oi(e){return'[src="'+Lt(e)+'"]'}function Ps(e){return"script[async]"+e}function Yg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Lt(a.href)+'"]');if(s)return n.instance=s,tt(s),s;var l=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),tt(s),ut(s,"style",l),$r(s,a.precedence,e),n.instance=s;case"stylesheet":l=ki(a.href);var c=e.querySelector(Xs(l));if(c)return n.state.loading|=4,n.instance=c,tt(c),c;s=Gg(a),(l=Pt.get(l))&&Kc(s,l),c=(e.ownerDocument||e).createElement("link"),tt(c);var g=c;return g._p=new Promise(function(b,A){g.onload=b,g.onerror=A}),ut(c,"link",s),n.state.loading|=4,$r(c,a.precedence,e),n.instance=c;case"script":return c=Oi(a.src),(l=e.querySelector(Ps(c)))?(n.instance=l,tt(l),l):(s=a,(l=Pt.get(c))&&(s=x({},a),Qc(s,l)),e=e.ownerDocument||e,l=e.createElement("script"),tt(l),ut(l,"link",s),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,$r(s,a.precedence,e));return n.instance}function $r(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,c=l,g=0;g<s.length;g++){var b=s[g];if(b.dataset.precedence===n)c=b;else if(c!==l)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Kc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Qc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Nr=null;function Xg(e,n,a){if(Nr===null){var s=new Map,l=Nr=new Map;l.set(a,s)}else l=Nr,s=l.get(a),s||(s=new Map,l.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var c=a[l];if(!(c[ls]||c[st]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(n)||"";g=e+g;var b=s.get(g);b?b.push(c):s.set(g,[c])}}return s}function Pg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function PS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Kg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function KS(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=ki(s.href),c=n.querySelector(Xs(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Vr.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=c,tt(c);return}c=n.ownerDocument||n,s=Gg(s),(l=Pt.get(l))&&Kc(s,l),c=c.createElement("link"),tt(c);var g=c;g._p=new Promise(function(b,A){g.onload=b,g.onerror=A}),ut(c,"link",s),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Vr.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Zc=0;function QS(e,n){return e.stylesheets&&e.count===0&&Lr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Lr(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+n);0<e.imgBytes&&Zc===0&&(Zc=62500*MS());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lr(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Zc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(l)}}:null}function Vr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _r=null;function Lr(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_r=new Map,n.forEach(ZS,e),_r=null,Vr.call(e))}function ZS(e,n){if(!(n.state.loading&4)){var a=_r.get(e);if(a)var s=a.get(null);else{a=new Map,_r.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var g=l[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}l=n.instance,g=l.getAttribute("data-precedence"),c=a.get(g)||s,c===s&&a.set(null,l),a.set(g,l),this.count++,s=Vr.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),c?c.parentNode.insertBefore(l,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Ks={$$typeof:L,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function FS(e,n,a,s,l,c,g,b,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.hiddenUpdates=Yl(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Qg(e,n,a,s,l,c,g,b,A,$,H,X){return e=new FS(e,n,a,g,A,$,H,X,b),n=1,c===!0&&(n|=24),c=Dt(3,null,null,n),e.current=c,c.stateNode=e,n=Mu(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:n},ku(c),e}function Zg(e){return e?(e=ci,e):ci}function Fg(e,n,a,s,l,c){l=Zg(l),s.context===null?s.context=l:s.pendingContext=l,s=Wn(n),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=In(e,s,n),a!==null&&(At(a,e,n),Es(a,e,n))}function Jg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Fc(e,n){Jg(e,n),(e=e.alternate)&&Jg(e,n)}function Wg(e){if(e.tag===13||e.tag===31){var n=Ma(e,67108864);n!==null&&At(n,e,67108864),Fc(e,67108864)}}function Ig(e){if(e.tag===13||e.tag===31){var n=$t();n=Xl(n);var a=Ma(e,n);a!==null&&At(a,e,n),Fc(e,n)}}var Br=!0;function JS(e,n,a,s){var l=q.T;q.T=null;var c=K.p;try{K.p=2,Jc(e,n,a,s)}finally{K.p=c,q.T=l}}function WS(e,n,a,s){var l=q.T;q.T=null;var c=K.p;try{K.p=8,Jc(e,n,a,s)}finally{K.p=c,q.T=l}}function Jc(e,n,a,s){if(Br){var l=Wc(s);if(l===null)_c(e,n,s,Ur,a),ty(e,s);else if(eT(l,e,n,a,s))s.stopPropagation();else if(ty(e,s),n&4&&-1<IS.indexOf(e)){for(;l!==null;){var c=Ia(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=Aa(c.pendingLanes);if(g!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var A=1<<31-jt(g);b.entanglements[1]|=A,g&=~A}fn(c),(Ce&6)===0&&(Tr=Et()+500,Hs(0))}}break;case 31:case 13:b=Ma(c,2),b!==null&&At(b,c,2),Cr(),Fc(c,2)}if(c=Wc(s),c===null&&_c(e,n,s,Ur,a),c===l)break;l=c}l!==null&&s.stopPropagation()}else _c(e,n,s,null,a)}}function Wc(e){return e=eu(e),Ic(e)}var Ur=null;function Ic(e){if(Ur=null,e=Wa(e),e!==null){var n=f(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ur=e,null}function ey(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lx()){case lh:return 2;case uh:return 8;case Do:case Bx:return 32;case ch:return 268435456;default:return 32}default:return 32}}var ef=!1,ca=null,fa=null,da=null,Qs=new Map,Zs=new Map,ha=[],IS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ty(e,n){switch(e){case"focusin":case"focusout":ca=null;break;case"dragenter":case"dragleave":fa=null;break;case"mouseover":case"mouseout":da=null;break;case"pointerover":case"pointerout":Qs.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(n.pointerId)}}function Fs(e,n,a,s,l,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[l]},n!==null&&(n=Ia(n),n!==null&&Wg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function eT(e,n,a,s,l){switch(n){case"focusin":return ca=Fs(ca,e,n,a,s,l),!0;case"dragenter":return fa=Fs(fa,e,n,a,s,l),!0;case"mouseover":return da=Fs(da,e,n,a,s,l),!0;case"pointerover":var c=l.pointerId;return Qs.set(c,Fs(Qs.get(c)||null,e,n,a,s,l)),!0;case"gotpointercapture":return c=l.pointerId,Zs.set(c,Fs(Zs.get(c)||null,e,n,a,s,l)),!0}return!1}function ny(e){var n=Wa(e.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,gh(e.priority,function(){Ig(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,gh(e.priority,function(){Ig(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Wc(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Il=s,a.target.dispatchEvent(s),Il=null}else return n=Ia(a),n!==null&&Wg(n),e.blockedOn=a,!1;n.shift()}return!0}function ay(e,n,a){Hr(e)&&a.delete(n)}function tT(){ef=!1,ca!==null&&Hr(ca)&&(ca=null),fa!==null&&Hr(fa)&&(fa=null),da!==null&&Hr(da)&&(da=null),Qs.forEach(ay),Zs.forEach(ay)}function qr(e,n){e.blockedOn===n&&(e.blockedOn=null,ef||(ef=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,tT)))}var Gr=null;function iy(e){Gr!==e&&(Gr=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Gr===e&&(Gr=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],l=e[n+2];if(typeof s!="function"){if(Ic(s||a)===null)continue;break}var c=Ia(a);c!==null&&(e.splice(n,3),n-=3,Wu(c,{pending:!0,data:l,method:a.method,action:s},s,l))}}))}function $i(e){function n(A){return qr(A,e)}ca!==null&&qr(ca,e),fa!==null&&qr(fa,e),da!==null&&qr(da,e),Qs.forEach(n),Zs.forEach(n);for(var a=0;a<ha.length;a++){var s=ha[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<ha.length&&(a=ha[0],a.blockedOn===null);)ny(a),a.blockedOn===null&&ha.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var l=a[s],c=a[s+1],g=l[yt]||null;if(typeof c=="function")g||iy(a);else if(g){var b=null;if(c&&c.hasAttribute("formAction")){if(l=c,g=c[yt]||null)b=g.formAction;else if(Ic(l)!==null)continue}else b=g.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),iy(a)}}}function sy(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function tf(e){this._internalRoot=e}Yr.prototype.render=tf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=$t();Fg(a,s,e,n,null,null)},Yr.prototype.unmount=tf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Fg(e.current,2,null,e,null,null),Cr(),n[Ja]=null}};function Yr(e){this._internalRoot=e}Yr.prototype.unstable_scheduleHydration=function(e){if(e){var n=ph();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ha.length&&n!==0&&n<ha[a].priority;a++);ha.splice(a,0,e),a===0&&ny(e)}};var oy=i.version;if(oy!=="19.2.0")throw Error(r(527,oy,"19.2.0"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var nT={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xr.isDisabled&&Xr.supportsFiber)try{ss=Xr.inject(nT),wt=Xr}catch{}}return Ws.createRoot=function(e,n){if(!u(e))throw Error(r(299));var a=!1,s="",l=hp,c=mp,g=pp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Qg(e,1,!1,null,null,a,s,null,l,c,g,sy),e[Ja]=n.current,Vc(e),new tf(n)},Ws.hydrateRoot=function(e,n,a){if(!u(e))throw Error(r(299));var s=!1,l="",c=hp,g=mp,b=pp,A=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(A=a.formState)),n=Qg(e,1,!0,n,a??null,s,l,A,c,g,b,sy),n.context=Zg(null),a=n.current,s=$t(),s=Xl(s),l=Wn(s),l.callback=null,In(a,l,s),a=s,n.current.lanes=a,rs(n,a),fn(n),e[Ja]=n.current,Vc(e),new Yr(n)},Ws.version="19.2.0",Ws}var gy;function dT(){if(gy)return sf.exports;gy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),sf.exports=fT(),sf.exports}var hT=dT();/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var yy="popstate";function mT(t={}){function i(r,u){let{pathname:f,search:d,hash:p}=r.location;return Nf("",{pathname:f,search:d,hash:p},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function o(r,u){return typeof u=="string"?u:fo(u)}return gT(i,o,null,t)}function Ue(t,i){if(t===!1||t===null||typeof t>"u")throw new Error(i)}function pn(t,i){if(!t){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function pT(){return Math.random().toString(36).substring(2,10)}function vy(t,i){return{usr:t.state,key:t.key,idx:i}}function Nf(t,i,o=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof i=="string"?Wi(i):i,state:o,key:i&&i.key||r||pT()}}function fo({pathname:t="/",search:i="",hash:o=""}){return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function Wi(t){let i={};if(t){let o=t.indexOf("#");o>=0&&(i.hash=t.substring(o),t=t.substring(0,o));let r=t.indexOf("?");r>=0&&(i.search=t.substring(r),t=t.substring(0,r)),t&&(i.pathname=t)}return i}function gT(t,i,o,r={}){let{window:u=document.defaultView,v5Compat:f=!1}=r,d=u.history,p="POP",h=null,m=y();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function y(){return(d.state||{idx:null}).idx}function x(){p="POP";let z=y(),R=z==null?null:z-m;m=z,h&&h({action:p,location:D.location,delta:R})}function S(z,R){p="PUSH";let k=Nf(D.location,z,R);m=y()+1;let L=vy(k,m),Q=D.createHref(k);try{d.pushState(L,"",Q)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;u.location.assign(Q)}f&&h&&h({action:p,location:D.location,delta:1})}function T(z,R){p="REPLACE";let k=Nf(D.location,z,R);m=y();let L=vy(k,m),Q=D.createHref(k);d.replaceState(L,"",Q),f&&h&&h({action:p,location:D.location,delta:0})}function j(z){return yT(z)}let D={get action(){return p},get location(){return t(u,d)},listen(z){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(yy,x),h=z,()=>{u.removeEventListener(yy,x),h=null}},createHref(z){return i(u,z)},createURL:j,encodeLocation(z){let R=j(z);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:S,replace:T,go(z){return d.go(z)}};return D}function yT(t,i=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Ue(o,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:fo(t);return r=r.replace(/ $/,"%20"),!i&&r.startsWith("//")&&(r=o+r),new URL(r,o)}function lv(t,i,o="/"){return vT(t,i,o,!1)}function vT(t,i,o,r){let u=typeof i=="string"?Wi(i):i,f=Hn(u.pathname||"/",o);if(f==null)return null;let d=uv(t);bT(d);let p=null;for(let h=0;p==null&&h<d.length;++h){let m=zT(f);p=MT(d[h],m,r)}return p}function uv(t,i=[],o=[],r="",u=!1){let f=(d,p,h=u,m)=>{let y={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(r)&&h)return;Ue(y.relativePath.startsWith(r),`Absolute route path "${y.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(r.length)}let x=Bn([r,y.relativePath]),S=o.concat(y);d.children&&d.children.length>0&&(Ue(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),uv(d.children,i,S,x,h)),!(d.path==null&&!d.index)&&i.push({path:x,score:wT(x,d.index),routesMeta:S})};return t.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))f(d,p);else for(let h of cv(d.path))f(d,p,!0,h)}),i}function cv(t){let i=t.split("/");if(i.length===0)return[];let[o,...r]=i,u=o.endsWith("?"),f=o.replace(/\?$/,"");if(r.length===0)return u?[f,""]:[f];let d=cv(r.join("/")),p=[];return p.push(...d.map(h=>h===""?f:[f,h].join("/"))),u&&p.push(...d),p.map(h=>t.startsWith("/")&&h===""?"/":h)}function bT(t){t.sort((i,o)=>i.score!==o.score?o.score-i.score:jT(i.routesMeta.map(r=>r.childrenIndex),o.routesMeta.map(r=>r.childrenIndex)))}var xT=/^:[\w-]+$/,ST=3,TT=2,AT=1,CT=10,ET=-2,by=t=>t==="*";function wT(t,i){let o=t.split("/"),r=o.length;return o.some(by)&&(r+=ET),i&&(r+=TT),o.filter(u=>!by(u)).reduce((u,f)=>u+(xT.test(f)?ST:f===""?AT:CT),r)}function jT(t,i){return t.length===i.length&&t.slice(0,-1).every((r,u)=>r===i[u])?t[t.length-1]-i[i.length-1]:0}function MT(t,i,o=!1){let{routesMeta:r}=t,u={},f="/",d=[];for(let p=0;p<r.length;++p){let h=r[p],m=p===r.length-1,y=f==="/"?i:i.slice(f.length)||"/",x=ml({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},y),S=h.route;if(!x&&m&&o&&!r[r.length-1].route.index&&(x=ml({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},y)),!x)return null;Object.assign(u,x.params),d.push({params:u,pathname:Bn([f,x.pathname]),pathnameBase:$T(Bn([f,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(f=Bn([f,x.pathnameBase]))}return d}function ml(t,i){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[o,r]=DT(t.path,t.caseSensitive,t.end),u=i.match(o);if(!u)return null;let f=u[0],d=f.replace(/(.)\/+$/,"$1"),p=u.slice(1);return{params:r.reduce((m,{paramName:y,isOptional:x},S)=>{if(y==="*"){let j=p[S]||"";d=f.slice(0,f.length-j.length).replace(/(.)\/+$/,"$1")}const T=p[S];return x&&!T?m[y]=void 0:m[y]=(T||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:d,pattern:t}}function DT(t,i=!1,o=!0){pn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],u="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,h)=>(r.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),u+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":t!==""&&t!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),r]}function zT(t){try{return t.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return pn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),t}}function Hn(t,i){if(i==="/")return t;if(!t.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,r=t.charAt(o);return r&&r!=="/"?null:t.slice(o)||"/"}function RT(t,i="/"){let{pathname:o,search:r="",hash:u=""}=typeof t=="string"?Wi(t):t;return{pathname:o?o.startsWith("/")?o:kT(o,i):i,search:NT(r),hash:VT(u)}}function kT(t,i){let o=i.replace(/\/+$/,"").split("/");return t.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function uf(t,i,o,r){return`Cannot include a '${t}' character in a manually specified \`to.${i}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function OT(t){return t.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function fv(t){let i=OT(t);return i.map((o,r)=>r===i.length-1?o.pathname:o.pathnameBase)}function dv(t,i,o,r=!1){let u;typeof t=="string"?u=Wi(t):(u={...t},Ue(!u.pathname||!u.pathname.includes("?"),uf("?","pathname","search",u)),Ue(!u.pathname||!u.pathname.includes("#"),uf("#","pathname","hash",u)),Ue(!u.search||!u.search.includes("#"),uf("#","search","hash",u)));let f=t===""||u.pathname==="",d=f?"/":u.pathname,p;if(d==null)p=o;else{let x=i.length-1;if(!r&&d.startsWith("..")){let S=d.split("/");for(;S[0]==="..";)S.shift(),x-=1;u.pathname=S.join("/")}p=x>=0?i[x]:"/"}let h=RT(u,p),m=d&&d!=="/"&&d.endsWith("/"),y=(f||d===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(m||y)&&(h.pathname+="/"),h}var Bn=t=>t.join("/").replace(/\/\/+/g,"/"),$T=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),NT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,VT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function _T(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var hv=["POST","PUT","PATCH","DELETE"];new Set(hv);var LT=["GET",...hv];new Set(LT);var Ii=C.createContext(null);Ii.displayName="DataRouter";var El=C.createContext(null);El.displayName="DataRouterState";C.createContext(!1);var mv=C.createContext({isTransitioning:!1});mv.displayName="ViewTransition";var BT=C.createContext(new Map);BT.displayName="Fetchers";var UT=C.createContext(null);UT.displayName="Await";var gn=C.createContext(null);gn.displayName="Navigation";var So=C.createContext(null);So.displayName="Location";var yn=C.createContext({outlet:null,matches:[],isDataRoute:!1});yn.displayName="Route";var md=C.createContext(null);md.displayName="RouteError";function HT(t,{relative:i}={}){Ue(To(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:r}=C.useContext(gn),{hash:u,pathname:f,search:d}=Ao(t,{relative:i}),p=f;return o!=="/"&&(p=f==="/"?o:Bn([o,f])),r.createHref({pathname:p,search:d,hash:u})}function To(){return C.useContext(So)!=null}function xa(){return Ue(To(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(So).location}var pv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function gv(t){C.useContext(gn).static||C.useLayoutEffect(t)}function yv(){let{isDataRoute:t}=C.useContext(yn);return t?tA():qT()}function qT(){Ue(To(),"useNavigate() may be used only in the context of a <Router> component.");let t=C.useContext(Ii),{basename:i,navigator:o}=C.useContext(gn),{matches:r}=C.useContext(yn),{pathname:u}=xa(),f=JSON.stringify(fv(r)),d=C.useRef(!1);return gv(()=>{d.current=!0}),C.useCallback((h,m={})=>{if(pn(d.current,pv),!d.current)return;if(typeof h=="number"){o.go(h);return}let y=dv(h,JSON.parse(f),u,m.relative==="path");t==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:Bn([i,y.pathname])),(m.replace?o.replace:o.push)(y,m.state,m)},[i,o,f,u,t])}C.createContext(null);function GT(){let{matches:t}=C.useContext(yn),i=t[t.length-1];return i?i.params:{}}function Ao(t,{relative:i}={}){let{matches:o}=C.useContext(yn),{pathname:r}=xa(),u=JSON.stringify(fv(o));return C.useMemo(()=>dv(t,JSON.parse(u),r,i==="path"),[t,u,r,i])}function YT(t,i){return vv(t,i)}function vv(t,i,o,r,u){Ue(To(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=C.useContext(gn),{matches:d}=C.useContext(yn),p=d[d.length-1],h=p?p.params:{},m=p?p.pathname:"/",y=p?p.pathnameBase:"/",x=p&&p.route;{let k=x&&x.path||"";bv(m,!x||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let S=xa(),T;if(i){let k=typeof i=="string"?Wi(i):i;Ue(y==="/"||k.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${k.pathname}" was given in the \`location\` prop.`),T=k}else T=S;let j=T.pathname||"/",D=j;if(y!=="/"){let k=y.replace(/^\//,"").split("/");D="/"+j.replace(/^\//,"").split("/").slice(k.length).join("/")}let z=lv(t,{pathname:D});pn(x||z!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),pn(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=ZT(z&&z.map(k=>Object.assign({},k,{params:Object.assign({},h,k.params),pathname:Bn([y,f.encodeLocation?f.encodeLocation(k.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?y:Bn([y,f.encodeLocation?f.encodeLocation(k.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathnameBase])})),d,o,r,u);return i&&R?C.createElement(So.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},R):R}function XT(){let t=eA(),i=_T(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),o=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:r},f={padding:"2px 4px",backgroundColor:r},d=null;return console.error("Error handled by React Router default ErrorBoundary:",t),d=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:f},"ErrorBoundary")," or"," ",C.createElement("code",{style:f},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},i),o?C.createElement("pre",{style:u},o):null,d)}var PT=C.createElement(XT,null),KT=class extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,i){return i.location!==t.location||i.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:i.error,location:i.location,revalidation:t.revalidation||i.revalidation}}componentDidCatch(t,i){this.props.unstable_onError?this.props.unstable_onError(t,i):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?C.createElement(yn.Provider,{value:this.props.routeContext},C.createElement(md.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function QT({routeContext:t,match:i,children:o}){let r=C.useContext(Ii);return r&&r.static&&r.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=i.route.id),C.createElement(yn.Provider,{value:t},o)}function ZT(t,i=[],o=null,r=null,u=null){if(t==null){if(!o)return null;if(o.errors)t=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)t=o.matches;else return null}let f=t,d=o?.errors;if(d!=null){let m=f.findIndex(y=>y.route.id&&d?.[y.route.id]!==void 0);Ue(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,m+1))}let p=!1,h=-1;if(o)for(let m=0;m<f.length;m++){let y=f[m];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(h=m),y.route.id){let{loaderData:x,errors:S}=o,T=y.route.loader&&!x.hasOwnProperty(y.route.id)&&(!S||S[y.route.id]===void 0);if(y.route.lazy||T){p=!0,h>=0?f=f.slice(0,h+1):f=[f[0]];break}}}return f.reduceRight((m,y,x)=>{let S,T=!1,j=null,D=null;o&&(S=d&&y.route.id?d[y.route.id]:void 0,j=y.route.errorElement||PT,p&&(h<0&&x===0?(bv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,D=null):h===x&&(T=!0,D=y.route.hydrateFallbackElement||null)));let z=i.concat(f.slice(0,x+1)),R=()=>{let k;return S?k=j:T?k=D:y.route.Component?k=C.createElement(y.route.Component,null):y.route.element?k=y.route.element:k=m,C.createElement(QT,{match:y,routeContext:{outlet:m,matches:z,isDataRoute:o!=null},children:k})};return o&&(y.route.ErrorBoundary||y.route.errorElement||x===0)?C.createElement(KT,{location:o.location,revalidation:o.revalidation,component:j,error:S,children:R(),routeContext:{outlet:null,matches:z,isDataRoute:!0},unstable_onError:r}):R()},null)}function pd(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function FT(t){let i=C.useContext(Ii);return Ue(i,pd(t)),i}function JT(t){let i=C.useContext(El);return Ue(i,pd(t)),i}function WT(t){let i=C.useContext(yn);return Ue(i,pd(t)),i}function gd(t){let i=WT(t),o=i.matches[i.matches.length-1];return Ue(o.route.id,`${t} can only be used on routes that contain a unique "id"`),o.route.id}function IT(){return gd("useRouteId")}function eA(){let t=C.useContext(md),i=JT("useRouteError"),o=gd("useRouteError");return t!==void 0?t:i.errors?.[o]}function tA(){let{router:t}=FT("useNavigate"),i=gd("useNavigate"),o=C.useRef(!1);return gv(()=>{o.current=!0}),C.useCallback(async(u,f={})=>{pn(o.current,pv),o.current&&(typeof u=="number"?t.navigate(u):await t.navigate(u,{fromRouteId:i,...f}))},[t,i])}var xy={};function bv(t,i,o){!i&&!xy[t]&&(xy[t]=!0,pn(!1,o))}C.memo(nA);function nA({routes:t,future:i,state:o,unstable_onError:r}){return vv(t,void 0,o,r,i)}function Vf(t){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function aA({basename:t="/",children:i=null,location:o,navigationType:r="POP",navigator:u,static:f=!1}){Ue(!To(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=t.replace(/^\/*/,"/"),p=C.useMemo(()=>({basename:d,navigator:u,static:f,future:{}}),[d,u,f]);typeof o=="string"&&(o=Wi(o));let{pathname:h="/",search:m="",hash:y="",state:x=null,key:S="default"}=o,T=C.useMemo(()=>{let j=Hn(h,d);return j==null?null:{location:{pathname:j,search:m,hash:y,state:x,key:S},navigationType:r}},[d,h,m,y,x,S,r]);return pn(T!=null,`<Router basename="${d}"> is not able to match the URL "${h}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:C.createElement(gn.Provider,{value:p},C.createElement(So.Provider,{children:i,value:T}))}function iA({children:t,location:i}){return YT(_f(t),i)}function _f(t,i=[]){let o=[];return C.Children.forEach(t,(r,u)=>{if(!C.isValidElement(r))return;let f=[...i,u];if(r.type===C.Fragment){o.push.apply(o,_f(r.props.children,f));return}Ue(r.type===Vf,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!r.props.index||!r.props.children,"An index route cannot have child routes.");let d={id:r.props.id||f.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=_f(r.props.children,f)),o.push(d)}),o}var al="get",il="application/x-www-form-urlencoded";function wl(t){return t!=null&&typeof t.tagName=="string"}function sA(t){return wl(t)&&t.tagName.toLowerCase()==="button"}function oA(t){return wl(t)&&t.tagName.toLowerCase()==="form"}function rA(t){return wl(t)&&t.tagName.toLowerCase()==="input"}function lA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function uA(t,i){return t.button===0&&(!i||i==="_self")&&!lA(t)}var Pr=null;function cA(){if(Pr===null)try{new FormData(document.createElement("form"),0),Pr=!1}catch{Pr=!0}return Pr}var fA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function cf(t){return t!=null&&!fA.has(t)?(pn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${il}"`),null):t}function dA(t,i){let o,r,u,f,d;if(oA(t)){let p=t.getAttribute("action");r=p?Hn(p,i):null,o=t.getAttribute("method")||al,u=cf(t.getAttribute("enctype"))||il,f=new FormData(t)}else if(sA(t)||rA(t)&&(t.type==="submit"||t.type==="image")){let p=t.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=t.getAttribute("formaction")||p.getAttribute("action");if(r=h?Hn(h,i):null,o=t.getAttribute("formmethod")||p.getAttribute("method")||al,u=cf(t.getAttribute("formenctype"))||cf(p.getAttribute("enctype"))||il,f=new FormData(p,t),!cA()){let{name:m,type:y,value:x}=t;if(y==="image"){let S=m?`${m}.`:"";f.append(`${S}x`,"0"),f.append(`${S}y`,"0")}else m&&f.append(m,x)}}else{if(wl(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=al,r=null,u=il,d=t}return f&&u==="text/plain"&&(d=f,f=void 0),{action:r,method:o.toLowerCase(),encType:u,formData:f,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function yd(t,i){if(t===!1||t===null||typeof t>"u")throw new Error(i)}function hA(t,i,o){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${o}`:i&&Hn(r.pathname,i)==="/"?r.pathname=`${i.replace(/\/$/,"")}/_root.${o}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${o}`,r}async function mA(t,i){if(t.id in i)return i[t.id];try{let o=await import(t.module);return i[t.id]=o,o}catch(o){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pA(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function gA(t,i,o){let r=await Promise.all(t.map(async u=>{let f=i.routes[u.route.id];if(f){let d=await mA(f,o);return d.links?d.links():[]}return[]}));return xA(r.flat(1).filter(pA).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Sy(t,i,o,r,u,f){let d=(h,m)=>o[m]?h.route.id!==o[m].route.id:!0,p=(h,m)=>o[m].pathname!==h.pathname||o[m].route.path?.endsWith("*")&&o[m].params["*"]!==h.params["*"];return f==="assets"?i.filter((h,m)=>d(h,m)||p(h,m)):f==="data"?i.filter((h,m)=>{let y=r.routes[h.route.id];if(!y||!y.hasLoader)return!1;if(d(h,m)||p(h,m))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function yA(t,i,{includeHydrateFallback:o}={}){return vA(t.map(r=>{let u=i.routes[r.route.id];if(!u)return[];let f=[u.module];return u.clientActionModule&&(f=f.concat(u.clientActionModule)),u.clientLoaderModule&&(f=f.concat(u.clientLoaderModule)),o&&u.hydrateFallbackModule&&(f=f.concat(u.hydrateFallbackModule)),u.imports&&(f=f.concat(u.imports)),f}).flat(1))}function vA(t){return[...new Set(t)]}function bA(t){let i={},o=Object.keys(t).sort();for(let r of o)i[r]=t[r];return i}function xA(t,i){let o=new Set;return new Set(i),t.reduce((r,u)=>{let f=JSON.stringify(bA(u));return o.has(f)||(o.add(f),r.push({key:f,link:u})),r},[])}function xv(){let t=C.useContext(Ii);return yd(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function SA(){let t=C.useContext(El);return yd(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var vd=C.createContext(void 0);vd.displayName="FrameworkContext";function Sv(){let t=C.useContext(vd);return yd(t,"You must render this element inside a <HydratedRouter> element"),t}function TA(t,i){let o=C.useContext(vd),[r,u]=C.useState(!1),[f,d]=C.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:m,onMouseLeave:y,onTouchStart:x}=i,S=C.useRef(null);C.useEffect(()=>{if(t==="render"&&d(!0),t==="viewport"){let D=R=>{R.forEach(k=>{d(k.isIntersecting)})},z=new IntersectionObserver(D,{threshold:.5});return S.current&&z.observe(S.current),()=>{z.disconnect()}}},[t]),C.useEffect(()=>{if(r){let D=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(D)}}},[r]);let T=()=>{u(!0)},j=()=>{u(!1),d(!1)};return o?t!=="intent"?[f,S,{}]:[f,S,{onFocus:Is(p,T),onBlur:Is(h,j),onMouseEnter:Is(m,T),onMouseLeave:Is(y,j),onTouchStart:Is(x,T)}]:[!1,S,{}]}function Is(t,i){return o=>{t&&t(o),o.defaultPrevented||i(o)}}function AA({page:t,...i}){let{router:o}=xv(),r=C.useMemo(()=>lv(o.routes,t,o.basename),[o.routes,t,o.basename]);return r?C.createElement(EA,{page:t,matches:r,...i}):null}function CA(t){let{manifest:i,routeModules:o}=Sv(),[r,u]=C.useState([]);return C.useEffect(()=>{let f=!1;return gA(t,i,o).then(d=>{f||u(d)}),()=>{f=!0}},[t,i,o]),r}function EA({page:t,matches:i,...o}){let r=xa(),{manifest:u,routeModules:f}=Sv(),{basename:d}=xv(),{loaderData:p,matches:h}=SA(),m=C.useMemo(()=>Sy(t,i,h,u,r,"data"),[t,i,h,u,r]),y=C.useMemo(()=>Sy(t,i,h,u,r,"assets"),[t,i,h,u,r]),x=C.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let j=new Set,D=!1;if(i.forEach(R=>{let k=u.routes[R.route.id];!k||!k.hasLoader||(!m.some(L=>L.route.id===R.route.id)&&R.route.id in p&&f[R.route.id]?.shouldRevalidate||k.hasClientLoader?D=!0:j.add(R.route.id))}),j.size===0)return[];let z=hA(t,d,"data");return D&&j.size>0&&z.searchParams.set("_routes",i.filter(R=>j.has(R.route.id)).map(R=>R.route.id).join(",")),[z.pathname+z.search]},[d,p,r,u,m,i,t,f]),S=C.useMemo(()=>yA(y,u),[y,u]),T=CA(y);return C.createElement(C.Fragment,null,x.map(j=>C.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...o})),S.map(j=>C.createElement("link",{key:j,rel:"modulepreload",href:j,...o})),T.map(({key:j,link:D})=>C.createElement("link",{key:j,nonce:o.nonce,...D})))}function wA(...t){return i=>{t.forEach(o=>{typeof o=="function"?o(i):o!=null&&(o.current=i)})}}var Tv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Tv&&(window.__reactRouterVersion="7.9.4")}catch{}function jA({basename:t,children:i,window:o}){let r=C.useRef();r.current==null&&(r.current=mT({window:o,v5Compat:!0}));let u=r.current,[f,d]=C.useState({action:u.action,location:u.location}),p=C.useCallback(h=>{C.startTransition(()=>d(h))},[d]);return C.useLayoutEffect(()=>u.listen(p),[u,p]),C.createElement(aA,{basename:t,children:i,location:f.location,navigationType:f.action,navigator:u})}var Av=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jl=C.forwardRef(function({onClick:i,discover:o="render",prefetch:r="none",relative:u,reloadDocument:f,replace:d,state:p,target:h,to:m,preventScrollReset:y,viewTransition:x,...S},T){let{basename:j}=C.useContext(gn),D=typeof m=="string"&&Av.test(m),z,R=!1;if(typeof m=="string"&&D&&(z=m,Tv))try{let F=new URL(window.location.href),ae=m.startsWith("//")?new URL(F.protocol+m):new URL(m),se=Hn(ae.pathname,j);ae.origin===F.origin&&se!=null?m=se+ae.search+ae.hash:R=!0}catch{pn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=HT(m,{relative:u}),[L,Q,P]=TA(r,S),Z=RA(m,{replace:d,state:p,target:h,preventScrollReset:y,relative:u,viewTransition:x});function N(F){i&&i(F),F.defaultPrevented||Z(F)}let V=C.createElement("a",{...S,...P,href:z||k,onClick:R||f?i:N,ref:wA(T,Q),target:h,"data-discover":!D&&o==="render"?"true":void 0});return L&&!D?C.createElement(C.Fragment,null,V,C.createElement(AA,{page:k})):V});jl.displayName="Link";var MA=C.forwardRef(function({"aria-current":i="page",caseSensitive:o=!1,className:r="",end:u=!1,style:f,to:d,viewTransition:p,children:h,...m},y){let x=Ao(d,{relative:m.relative}),S=xa(),T=C.useContext(El),{navigator:j,basename:D}=C.useContext(gn),z=T!=null&&VA(x)&&p===!0,R=j.encodeLocation?j.encodeLocation(x).pathname:x.pathname,k=S.pathname,L=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;o||(k=k.toLowerCase(),L=L?L.toLowerCase():null,R=R.toLowerCase()),L&&D&&(L=Hn(L,D)||L);const Q=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let P=k===R||!u&&k.startsWith(R)&&k.charAt(Q)==="/",Z=L!=null&&(L===R||!u&&L.startsWith(R)&&L.charAt(R.length)==="/"),N={isActive:P,isPending:Z,isTransitioning:z},V=P?i:void 0,F;typeof r=="function"?F=r(N):F=[r,P?"active":null,Z?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let ae=typeof f=="function"?f(N):f;return C.createElement(jl,{...m,"aria-current":V,className:F,ref:y,style:ae,to:d,viewTransition:p},typeof h=="function"?h(N):h)});MA.displayName="NavLink";var DA=C.forwardRef(({discover:t="render",fetcherKey:i,navigate:o,reloadDocument:r,replace:u,state:f,method:d=al,action:p,onSubmit:h,relative:m,preventScrollReset:y,viewTransition:x,...S},T)=>{let j=$A(),D=NA(p,{relative:m}),z=d.toLowerCase()==="get"?"get":"post",R=typeof p=="string"&&Av.test(p),k=L=>{if(h&&h(L),L.defaultPrevented)return;L.preventDefault();let Q=L.nativeEvent.submitter,P=Q?.getAttribute("formmethod")||d;j(Q||L.currentTarget,{fetcherKey:i,method:P,navigate:o,replace:u,state:f,relative:m,preventScrollReset:y,viewTransition:x})};return C.createElement("form",{ref:T,method:z,action:D,onSubmit:r?h:k,...S,"data-discover":!R&&t==="render"?"true":void 0})});DA.displayName="Form";function zA(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cv(t){let i=C.useContext(Ii);return Ue(i,zA(t)),i}function RA(t,{target:i,replace:o,state:r,preventScrollReset:u,relative:f,viewTransition:d}={}){let p=yv(),h=xa(),m=Ao(t,{relative:f});return C.useCallback(y=>{if(uA(y,i)){y.preventDefault();let x=o!==void 0?o:fo(h)===fo(m);p(t,{replace:x,state:r,preventScrollReset:u,relative:f,viewTransition:d})}},[h,p,m,o,r,i,t,u,f,d])}var kA=0,OA=()=>`__${String(++kA)}__`;function $A(){let{router:t}=Cv("useSubmit"),{basename:i}=C.useContext(gn),o=IT();return C.useCallback(async(r,u={})=>{let{action:f,method:d,encType:p,formData:h,body:m}=dA(r,i);if(u.navigate===!1){let y=u.fetcherKey||OA();await t.fetch(y,o,u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:m,formMethod:u.method||d,formEncType:u.encType||p,flushSync:u.flushSync})}else await t.navigate(u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:m,formMethod:u.method||d,formEncType:u.encType||p,replace:u.replace,state:u.state,fromRouteId:o,flushSync:u.flushSync,viewTransition:u.viewTransition})},[t,i,o])}function NA(t,{relative:i}={}){let{basename:o}=C.useContext(gn),r=C.useContext(yn);Ue(r,"useFormAction must be used inside a RouteContext");let[u]=r.matches.slice(-1),f={...Ao(t||".",{relative:i})},d=xa();if(t==null){f.search=d.search;let p=new URLSearchParams(f.search),h=p.getAll("index");if(h.some(y=>y==="")){p.delete("index"),h.filter(x=>x).forEach(x=>p.append("index",x));let y=p.toString();f.search=y?`?${y}`:""}}return(!t||t===".")&&u.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(f.pathname=f.pathname==="/"?o:Bn([o,f.pathname])),fo(f)}function VA(t,{relative:i}={}){let o=C.useContext(mv);Ue(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Cv("useViewTransitionState"),u=Ao(t,{relative:i});if(!o.isTransitioning)return!1;let f=Hn(o.currentLocation.pathname,r)||o.currentLocation.pathname,d=Hn(o.nextLocation.pathname,r)||o.nextLocation.pathname;return ml(u.pathname,d)!=null||ml(u.pathname,f)!=null}var _A=rv(),it=function(){return it=Object.assign||function(i){for(var o,r=1,u=arguments.length;r<u;r++){o=arguments[r];for(var f in o)Object.prototype.hasOwnProperty.call(o,f)&&(i[f]=o[f])}return i},it.apply(this,arguments)};function Yi(t,i,o){if(o||arguments.length===2)for(var r=0,u=i.length,f;r<u;r++)(f||!(r in i))&&(f||(f=Array.prototype.slice.call(i,0,r)),f[r]=i[r]);return t.concat(f||Array.prototype.slice.call(i))}var Ve="-ms-",so="-moz-",Ee="-webkit-",Ev="comm",Ml="rule",bd="decl",LA="@import",wv="@keyframes",BA="@layer",jv=Math.abs,xd=String.fromCharCode,Lf=Object.assign;function UA(t,i){return at(t,0)^45?(((i<<2^at(t,0))<<2^at(t,1))<<2^at(t,2))<<2^at(t,3):0}function Mv(t){return t.trim()}function Ln(t,i){return(t=i.exec(t))?t[0]:t}function me(t,i,o){return t.replace(i,o)}function sl(t,i,o){return t.indexOf(i,o)}function at(t,i){return t.charCodeAt(i)|0}function Xi(t,i,o){return t.slice(i,o)}function dn(t){return t.length}function Dv(t){return t.length}function ao(t,i){return i.push(t),t}function HA(t,i){return t.map(i).join("")}function Ty(t,i){return t.filter(function(o){return!Ln(o,i)})}var Dl=1,Pi=1,zv=0,It=0,Ie=0,es="";function zl(t,i,o,r,u,f,d,p){return{value:t,root:i,parent:o,type:r,props:u,children:f,line:Dl,column:Pi,length:d,return:"",siblings:p}}function pa(t,i){return Lf(zl("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},i)}function Ni(t){for(;t.root;)t=pa(t.root,{children:[t]});ao(t,t.siblings)}function qA(){return Ie}function GA(){return Ie=It>0?at(es,--It):0,Pi--,Ie===10&&(Pi=1,Dl--),Ie}function rn(){return Ie=It<zv?at(es,It++):0,Pi++,Ie===10&&(Pi=1,Dl++),Ie}function Pa(){return at(es,It)}function ol(){return It}function Rl(t,i){return Xi(es,t,i)}function Bf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function YA(t){return Dl=Pi=1,zv=dn(es=t),It=0,[]}function XA(t){return es="",t}function ff(t){return Mv(Rl(It-1,Uf(t===91?t+2:t===40?t+1:t)))}function PA(t){for(;(Ie=Pa())&&Ie<33;)rn();return Bf(t)>2||Bf(Ie)>3?"":" "}function KA(t,i){for(;--i&&rn()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Rl(t,ol()+(i<6&&Pa()==32&&rn()==32))}function Uf(t){for(;rn();)switch(Ie){case t:return It;case 34:case 39:t!==34&&t!==39&&Uf(Ie);break;case 40:t===41&&Uf(t);break;case 92:rn();break}return It}function QA(t,i){for(;rn()&&t+Ie!==57;)if(t+Ie===84&&Pa()===47)break;return"/*"+Rl(i,It-1)+"*"+xd(t===47?t:rn())}function ZA(t){for(;!Bf(Pa());)rn();return Rl(t,It)}function FA(t){return XA(rl("",null,null,null,[""],t=YA(t),0,[0],t))}function rl(t,i,o,r,u,f,d,p,h){for(var m=0,y=0,x=d,S=0,T=0,j=0,D=1,z=1,R=1,k=0,L="",Q=u,P=f,Z=r,N=L;z;)switch(j=k,k=rn()){case 40:if(j!=108&&at(N,x-1)==58){sl(N+=me(ff(k),"&","&\f"),"&\f",jv(m?p[m-1]:0))!=-1&&(R=-1);break}case 34:case 39:case 91:N+=ff(k);break;case 9:case 10:case 13:case 32:N+=PA(j);break;case 92:N+=KA(ol()-1,7);continue;case 47:switch(Pa()){case 42:case 47:ao(JA(QA(rn(),ol()),i,o,h),h);break;default:N+="/"}break;case 123*D:p[m++]=dn(N)*R;case 125*D:case 59:case 0:switch(k){case 0:case 125:z=0;case 59+y:R==-1&&(N=me(N,/\f/g,"")),T>0&&dn(N)-x&&ao(T>32?Cy(N+";",r,o,x-1,h):Cy(me(N," ","")+";",r,o,x-2,h),h);break;case 59:N+=";";default:if(ao(Z=Ay(N,i,o,m,y,u,p,L,Q=[],P=[],x,f),f),k===123)if(y===0)rl(N,i,Z,Z,Q,f,x,p,P);else switch(S===99&&at(N,3)===110?100:S){case 100:case 108:case 109:case 115:rl(t,Z,Z,r&&ao(Ay(t,Z,Z,0,0,u,p,L,u,Q=[],x,P),P),u,P,x,p,r?Q:P);break;default:rl(N,Z,Z,Z,[""],P,0,p,P)}}m=y=T=0,D=R=1,L=N="",x=d;break;case 58:x=1+dn(N),T=j;default:if(D<1){if(k==123)--D;else if(k==125&&D++==0&&GA()==125)continue}switch(N+=xd(k),k*D){case 38:R=y>0?1:(N+="\f",-1);break;case 44:p[m++]=(dn(N)-1)*R,R=1;break;case 64:Pa()===45&&(N+=ff(rn())),S=Pa(),y=x=dn(L=N+=ZA(ol())),k++;break;case 45:j===45&&dn(N)==2&&(D=0)}}return f}function Ay(t,i,o,r,u,f,d,p,h,m,y,x){for(var S=u-1,T=u===0?f:[""],j=Dv(T),D=0,z=0,R=0;D<r;++D)for(var k=0,L=Xi(t,S+1,S=jv(z=d[D])),Q=t;k<j;++k)(Q=Mv(z>0?T[k]+" "+L:me(L,/&\f/g,T[k])))&&(h[R++]=Q);return zl(t,i,o,u===0?Ml:p,h,m,y,x)}function JA(t,i,o,r){return zl(t,i,o,Ev,xd(qA()),Xi(t,2,-2),0,r)}function Cy(t,i,o,r,u){return zl(t,i,o,bd,Xi(t,0,r),Xi(t,r+1,-1),r,u)}function Rv(t,i,o){switch(UA(t,i)){case 5103:return Ee+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ee+t+t;case 4789:return so+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ee+t+so+t+Ve+t+t;case 5936:switch(at(t,i+11)){case 114:return Ee+t+Ve+me(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ee+t+Ve+me(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ee+t+Ve+me(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ee+t+Ve+t+t;case 6165:return Ee+t+Ve+"flex-"+t+t;case 5187:return Ee+t+me(t,/(\w+).+(:[^]+)/,Ee+"box-$1$2"+Ve+"flex-$1$2")+t;case 5443:return Ee+t+Ve+"flex-item-"+me(t,/flex-|-self/g,"")+(Ln(t,/flex-|baseline/)?"":Ve+"grid-row-"+me(t,/flex-|-self/g,""))+t;case 4675:return Ee+t+Ve+"flex-line-pack"+me(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ee+t+Ve+me(t,"shrink","negative")+t;case 5292:return Ee+t+Ve+me(t,"basis","preferred-size")+t;case 6060:return Ee+"box-"+me(t,"-grow","")+Ee+t+Ve+me(t,"grow","positive")+t;case 4554:return Ee+me(t,/([^-])(transform)/g,"$1"+Ee+"$2")+t;case 6187:return me(me(me(t,/(zoom-|grab)/,Ee+"$1"),/(image-set)/,Ee+"$1"),t,"")+t;case 5495:case 3959:return me(t,/(image-set\([^]*)/,Ee+"$1$`$1");case 4968:return me(me(t,/(.+:)(flex-)?(.*)/,Ee+"box-pack:$3"+Ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ee+t+t;case 4200:if(!Ln(t,/flex-|baseline/))return Ve+"grid-column-align"+Xi(t,i)+t;break;case 2592:case 3360:return Ve+me(t,"template-","")+t;case 4384:case 3616:return o&&o.some(function(r,u){return i=u,Ln(r.props,/grid-\w+-end/)})?~sl(t+(o=o[i].value),"span",0)?t:Ve+me(t,"-start","")+t+Ve+"grid-row-span:"+(~sl(o,"span",0)?Ln(o,/\d+/):+Ln(o,/\d+/)-+Ln(t,/\d+/))+";":Ve+me(t,"-start","")+t;case 4896:case 4128:return o&&o.some(function(r){return Ln(r.props,/grid-\w+-start/)})?t:Ve+me(me(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return me(t,/(.+)-inline(.+)/,Ee+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dn(t)-1-i>6)switch(at(t,i+1)){case 109:if(at(t,i+4)!==45)break;case 102:return me(t,/(.+:)(.+)-([^]+)/,"$1"+Ee+"$2-$3$1"+so+(at(t,i+3)==108?"$3":"$2-$3"))+t;case 115:return~sl(t,"stretch",0)?Rv(me(t,"stretch","fill-available"),i,o)+t:t}break;case 5152:case 5920:return me(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,u,f,d,p,h,m){return Ve+u+":"+f+m+(d?Ve+u+"-span:"+(p?h:+h-+f)+m:"")+t});case 4949:if(at(t,i+6)===121)return me(t,":",":"+Ee)+t;break;case 6444:switch(at(t,at(t,14)===45?18:11)){case 120:return me(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ee+(at(t,14)===45?"inline-":"")+"box$3$1"+Ee+"$2$3$1"+Ve+"$2box$3")+t;case 100:return me(t,":",":"+Ve)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return me(t,"scroll-","scroll-snap-")+t}return t}function pl(t,i){for(var o="",r=0;r<t.length;r++)o+=i(t[r],r,t,i)||"";return o}function WA(t,i,o,r){switch(t.type){case BA:if(t.children.length)break;case LA:case bd:return t.return=t.return||t.value;case Ev:return"";case wv:return t.return=t.value+"{"+pl(t.children,r)+"}";case Ml:if(!dn(t.value=t.props.join(",")))return""}return dn(o=pl(t.children,r))?t.return=t.value+"{"+o+"}":""}function IA(t){var i=Dv(t);return function(o,r,u,f){for(var d="",p=0;p<i;p++)d+=t[p](o,r,u,f)||"";return d}}function eC(t){return function(i){i.root||(i=i.return)&&t(i)}}function tC(t,i,o,r){if(t.length>-1&&!t.return)switch(t.type){case bd:t.return=Rv(t.value,t.length,o);return;case wv:return pl([pa(t,{value:me(t.value,"@","@"+Ee)})],r);case Ml:if(t.length)return HA(o=t.props,function(u){switch(Ln(u,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ni(pa(t,{props:[me(u,/:(read-\w+)/,":"+so+"$1")]})),Ni(pa(t,{props:[u]})),Lf(t,{props:Ty(o,r)});break;case"::placeholder":Ni(pa(t,{props:[me(u,/:(plac\w+)/,":"+Ee+"input-$1")]})),Ni(pa(t,{props:[me(u,/:(plac\w+)/,":"+so+"$1")]})),Ni(pa(t,{props:[me(u,/:(plac\w+)/,Ve+"input-$1")]})),Ni(pa(t,{props:[u]})),Lf(t,{props:Ty(o,r)});break}return""})}}var nC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nt={},Ki=typeof process<"u"&&Nt!==void 0&&(Nt.REACT_APP_SC_ATTR||Nt.SC_ATTR)||"data-styled",kv="active",Ov="data-styled-version",kl="6.1.19",Sd=`/*!sc*/
`,gl=typeof window<"u"&&typeof document<"u",aC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==""?Nt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Nt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.SC_DISABLE_SPEEDY!==void 0&&Nt.SC_DISABLE_SPEEDY!==""&&Nt.SC_DISABLE_SPEEDY!=="false"&&Nt.SC_DISABLE_SPEEDY),iC={},Ol=Object.freeze([]),Qi=Object.freeze({});function $v(t,i,o){return o===void 0&&(o=Qi),t.theme!==o.theme&&t.theme||i||o.theme}var Nv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),sC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,oC=/(^-|-$)/g;function Ey(t){return t.replace(sC,"-").replace(oC,"")}var rC=/(a)(d)/gi,Kr=52,wy=function(t){return String.fromCharCode(t+(t>25?39:97))};function Hf(t){var i,o="";for(i=Math.abs(t);i>Kr;i=i/Kr|0)o=wy(i%Kr)+o;return(wy(i%Kr)+o).replace(rC,"$1-$2")}var df,Vv=5381,_i=function(t,i){for(var o=i.length;o;)t=33*t^i.charCodeAt(--o);return t},_v=function(t){return _i(Vv,t)};function Td(t){return Hf(_v(t)>>>0)}function lC(t){return t.displayName||t.name||"Component"}function hf(t){return typeof t=="string"&&!0}var Lv=typeof Symbol=="function"&&Symbol.for,Bv=Lv?Symbol.for("react.memo"):60115,uC=Lv?Symbol.for("react.forward_ref"):60112,cC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Uv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dC=((df={})[uC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},df[Bv]=Uv,df);function jy(t){return("type"in(i=t)&&i.type.$$typeof)===Bv?Uv:"$$typeof"in t?dC[t.$$typeof]:cC;var i}var hC=Object.defineProperty,mC=Object.getOwnPropertyNames,My=Object.getOwnPropertySymbols,pC=Object.getOwnPropertyDescriptor,gC=Object.getPrototypeOf,Dy=Object.prototype;function Hv(t,i,o){if(typeof i!="string"){if(Dy){var r=gC(i);r&&r!==Dy&&Hv(t,r,o)}var u=mC(i);My&&(u=u.concat(My(i)));for(var f=jy(t),d=jy(i),p=0;p<u.length;++p){var h=u[p];if(!(h in fC||o&&o[h]||d&&h in d||f&&h in f)){var m=pC(i,h);try{hC(t,h,m)}catch{}}}}return t}function Za(t){return typeof t=="function"}function Ad(t){return typeof t=="object"&&"styledComponentId"in t}function Ga(t,i){return t&&i?"".concat(t," ").concat(i):t||i||""}function yl(t,i){if(t.length===0)return"";for(var o=t[0],r=1;r<t.length;r++)o+=t[r];return o}function ho(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function qf(t,i,o){if(o===void 0&&(o=!1),!o&&!ho(t)&&!Array.isArray(t))return i;if(Array.isArray(i))for(var r=0;r<i.length;r++)t[r]=qf(t[r],i[r]);else if(ho(i))for(var r in i)t[r]=qf(t[r],i[r]);return t}function Cd(t,i){Object.defineProperty(t,"toString",{value:i})}function Fa(t){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var yC=(function(){function t(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return t.prototype.indexOfGroup=function(i){for(var o=0,r=0;r<i;r++)o+=this.groupSizes[r];return o},t.prototype.insertRules=function(i,o){if(i>=this.groupSizes.length){for(var r=this.groupSizes,u=r.length,f=u;i>=f;)if((f<<=1)<0)throw Fa(16,"".concat(i));this.groupSizes=new Uint32Array(f),this.groupSizes.set(r),this.length=f;for(var d=u;d<f;d++)this.groupSizes[d]=0}for(var p=this.indexOfGroup(i+1),h=(d=0,o.length);d<h;d++)this.tag.insertRule(p,o[d])&&(this.groupSizes[i]++,p++)},t.prototype.clearGroup=function(i){if(i<this.length){var o=this.groupSizes[i],r=this.indexOfGroup(i),u=r+o;this.groupSizes[i]=0;for(var f=r;f<u;f++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(i){var o="";if(i>=this.length||this.groupSizes[i]===0)return o;for(var r=this.groupSizes[i],u=this.indexOfGroup(i),f=u+r,d=u;d<f;d++)o+="".concat(this.tag.getRule(d)).concat(Sd);return o},t})(),ll=new Map,vl=new Map,ul=1,Qr=function(t){if(ll.has(t))return ll.get(t);for(;vl.has(ul);)ul++;var i=ul++;return ll.set(t,i),vl.set(i,t),i},vC=function(t,i){ul=i+1,ll.set(t,i),vl.set(i,t)},bC="style[".concat(Ki,"][").concat(Ov,'="').concat(kl,'"]'),xC=new RegExp("^".concat(Ki,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),SC=function(t,i,o){for(var r,u=o.split(","),f=0,d=u.length;f<d;f++)(r=u[f])&&t.registerName(i,r)},TC=function(t,i){for(var o,r=((o=i.textContent)!==null&&o!==void 0?o:"").split(Sd),u=[],f=0,d=r.length;f<d;f++){var p=r[f].trim();if(p){var h=p.match(xC);if(h){var m=0|parseInt(h[1],10),y=h[2];m!==0&&(vC(y,m),SC(t,y,h[3]),t.getTag().insertRules(m,u)),u.length=0}else u.push(p)}}},zy=function(t){for(var i=document.querySelectorAll(bC),o=0,r=i.length;o<r;o++){var u=i[o];u&&u.getAttribute(Ki)!==kv&&(TC(t,u),u.parentNode&&u.parentNode.removeChild(u))}};function AC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var qv=function(t){var i=document.head,o=t||i,r=document.createElement("style"),u=(function(p){var h=Array.from(p.querySelectorAll("style[".concat(Ki,"]")));return h[h.length-1]})(o),f=u!==void 0?u.nextSibling:null;r.setAttribute(Ki,kv),r.setAttribute(Ov,kl);var d=AC();return d&&r.setAttribute("nonce",d),o.insertBefore(r,f),r},CC=(function(){function t(i){this.element=qv(i),this.element.appendChild(document.createTextNode("")),this.sheet=(function(o){if(o.sheet)return o.sheet;for(var r=document.styleSheets,u=0,f=r.length;u<f;u++){var d=r[u];if(d.ownerNode===o)return d}throw Fa(17)})(this.element),this.length=0}return t.prototype.insertRule=function(i,o){try{return this.sheet.insertRule(o,i),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},t.prototype.getRule=function(i){var o=this.sheet.cssRules[i];return o&&o.cssText?o.cssText:""},t})(),EC=(function(){function t(i){this.element=qv(i),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(i,o){if(i<=this.length&&i>=0){var r=document.createTextNode(o);return this.element.insertBefore(r,this.nodes[i]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},t.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},t})(),wC=(function(){function t(i){this.rules=[],this.length=0}return t.prototype.insertRule=function(i,o){return i<=this.length&&(this.rules.splice(i,0,o),this.length++,!0)},t.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},t.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},t})(),Ry=gl,jC={isServer:!gl,useCSSOMInjection:!aC},bl=(function(){function t(i,o,r){i===void 0&&(i=Qi),o===void 0&&(o={});var u=this;this.options=it(it({},jC),i),this.gs=o,this.names=new Map(r),this.server=!!i.isServer,!this.server&&gl&&Ry&&(Ry=!1,zy(this)),Cd(this,function(){return(function(f){for(var d=f.getTag(),p=d.length,h="",m=function(x){var S=(function(R){return vl.get(R)})(x);if(S===void 0)return"continue";var T=f.names.get(S),j=d.getGroup(x);if(T===void 0||!T.size||j.length===0)return"continue";var D="".concat(Ki,".g").concat(x,'[id="').concat(S,'"]'),z="";T!==void 0&&T.forEach(function(R){R.length>0&&(z+="".concat(R,","))}),h+="".concat(j).concat(D,'{content:"').concat(z,'"}').concat(Sd)},y=0;y<p;y++)m(y);return h})(u)})}return t.registerId=function(i){return Qr(i)},t.prototype.rehydrate=function(){!this.server&&gl&&zy(this)},t.prototype.reconstructWithOptions=function(i,o){return o===void 0&&(o=!0),new t(it(it({},this.options),i),this.gs,o&&this.names||void 0)},t.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(i=(function(o){var r=o.useCSSOMInjection,u=o.target;return o.isServer?new wC(u):r?new CC(u):new EC(u)})(this.options),new yC(i)));var i},t.prototype.hasNameForId=function(i,o){return this.names.has(i)&&this.names.get(i).has(o)},t.prototype.registerName=function(i,o){if(Qr(i),this.names.has(i))this.names.get(i).add(o);else{var r=new Set;r.add(o),this.names.set(i,r)}},t.prototype.insertRules=function(i,o,r){this.registerName(i,o),this.getTag().insertRules(Qr(i),r)},t.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},t.prototype.clearRules=function(i){this.getTag().clearGroup(Qr(i)),this.clearNames(i)},t.prototype.clearTag=function(){this.tag=void 0},t})(),MC=/&/g,DC=/^\s*\/\/.*$/gm;function Gv(t,i){return t.map(function(o){return o.type==="rule"&&(o.value="".concat(i," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(i," ")),o.props=o.props.map(function(r){return"".concat(i," ").concat(r)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Gv(o.children,i)),o})}function zC(t){var i,o,r,u=Qi,f=u.options,d=f===void 0?Qi:f,p=u.plugins,h=p===void 0?Ol:p,m=function(S,T,j){return j.startsWith(o)&&j.endsWith(o)&&j.replaceAll(o,"").length>0?".".concat(i):S},y=h.slice();y.push(function(S){S.type===Ml&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(MC,o).replace(r,m))}),d.prefix&&y.push(tC),y.push(WA);var x=function(S,T,j,D){T===void 0&&(T=""),j===void 0&&(j=""),D===void 0&&(D="&"),i=D,o=T,r=new RegExp("\\".concat(o,"\\b"),"g");var z=S.replace(DC,""),R=FA(j||T?"".concat(j," ").concat(T," { ").concat(z," }"):z);d.namespace&&(R=Gv(R,d.namespace));var k=[];return pl(R,IA(y.concat(eC(function(L){return k.push(L)})))),k};return x.hash=h.length?h.reduce(function(S,T){return T.name||Fa(15),_i(S,T.name)},Vv).toString():"",x}var RC=new bl,Gf=zC(),Yv=on.createContext({shouldForwardProp:void 0,styleSheet:RC,stylis:Gf});Yv.Consumer;on.createContext(void 0);function Yf(){return C.useContext(Yv)}var Xv=(function(){function t(i,o){var r=this;this.inject=function(u,f){f===void 0&&(f=Gf);var d=r.name+f.hash;u.hasNameForId(r.id,d)||u.insertRules(r.id,d,f(r.rules,d,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=o,Cd(this,function(){throw Fa(12,String(r.name))})}return t.prototype.getName=function(i){return i===void 0&&(i=Gf),this.name+i.hash},t})(),kC=function(t){return t>="A"&&t<="Z"};function ky(t){for(var i="",o=0;o<t.length;o++){var r=t[o];if(o===1&&r==="-"&&t[0]==="-")return t;kC(r)?i+="-"+r.toLowerCase():i+=r}return i.startsWith("ms-")?"-"+i:i}var Pv=function(t){return t==null||t===!1||t===""},Kv=function(t){var i,o,r=[];for(var u in t){var f=t[u];t.hasOwnProperty(u)&&!Pv(f)&&(Array.isArray(f)&&f.isCss||Za(f)?r.push("".concat(ky(u),":"),f,";"):ho(f)?r.push.apply(r,Yi(Yi(["".concat(u," {")],Kv(f),!1),["}"],!1)):r.push("".concat(ky(u),": ").concat((i=u,(o=f)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||i in nC||i.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return r};function ya(t,i,o,r){if(Pv(t))return[];if(Ad(t))return[".".concat(t.styledComponentId)];if(Za(t)){if(!Za(f=t)||f.prototype&&f.prototype.isReactComponent||!i)return[t];var u=t(i);return ya(u,i,o,r)}var f;return t instanceof Xv?o?(t.inject(o,r),[t.getName(r)]):[t]:ho(t)?Kv(t):Array.isArray(t)?Array.prototype.concat.apply(Ol,t.map(function(d){return ya(d,i,o,r)})):[t.toString()]}function Qv(t){for(var i=0;i<t.length;i+=1){var o=t[i];if(Za(o)&&!Ad(o))return!1}return!0}var OC=_v(kl),$C=(function(){function t(i,o,r){this.rules=i,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Qv(i),this.componentId=o,this.baseHash=_i(OC,o),this.baseStyle=r,bl.registerId(o)}return t.prototype.generateAndInjectStyles=function(i,o,r){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,o,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))u=Ga(u,this.staticRulesId);else{var f=yl(ya(this.rules,i,o,r)),d=Hf(_i(this.baseHash,f)>>>0);if(!o.hasNameForId(this.componentId,d)){var p=r(f,".".concat(d),void 0,this.componentId);o.insertRules(this.componentId,d,p)}u=Ga(u,d),this.staticRulesId=d}else{for(var h=_i(this.baseHash,r.hash),m="",y=0;y<this.rules.length;y++){var x=this.rules[y];if(typeof x=="string")m+=x;else if(x){var S=yl(ya(x,i,o,r));h=_i(h,S+y),m+=S}}if(m){var T=Hf(h>>>0);o.hasNameForId(this.componentId,T)||o.insertRules(this.componentId,T,r(m,".".concat(T),void 0,this.componentId)),u=Ga(u,T)}}return u},t})(),mo=on.createContext(void 0);mo.Consumer;function Oy(t){var i=on.useContext(mo),o=C.useMemo(function(){return(function(r,u){if(!r)throw Fa(14);if(Za(r)){var f=r(u);return f}if(Array.isArray(r)||typeof r!="object")throw Fa(8);return u?it(it({},u),r):r})(t.theme,i)},[t.theme,i]);return t.children?on.createElement(mo.Provider,{value:o},t.children):null}var mf={};function NC(t,i,o){var r=Ad(t),u=t,f=!hf(t),d=i.attrs,p=d===void 0?Ol:d,h=i.componentId,m=h===void 0?(function(Q,P){var Z=typeof Q!="string"?"sc":Ey(Q);mf[Z]=(mf[Z]||0)+1;var N="".concat(Z,"-").concat(Td(kl+Z+mf[Z]));return P?"".concat(P,"-").concat(N):N})(i.displayName,i.parentComponentId):h,y=i.displayName,x=y===void 0?(function(Q){return hf(Q)?"styled.".concat(Q):"Styled(".concat(lC(Q),")")})(t):y,S=i.displayName&&i.componentId?"".concat(Ey(i.displayName),"-").concat(i.componentId):i.componentId||m,T=r&&u.attrs?u.attrs.concat(p).filter(Boolean):p,j=i.shouldForwardProp;if(r&&u.shouldForwardProp){var D=u.shouldForwardProp;if(i.shouldForwardProp){var z=i.shouldForwardProp;j=function(Q,P){return D(Q,P)&&z(Q,P)}}else j=D}var R=new $C(o,S,r?u.componentStyle:void 0);function k(Q,P){return(function(Z,N,V){var F=Z.attrs,ae=Z.componentStyle,se=Z.defaultProps,Oe=Z.foldedComponentIds,en=Z.styledComponentId,gt=Z.target,ft=on.useContext(mo),q=Yf(),K=Z.shouldForwardProp||q.shouldForwardProp,ee=$v(N,ft,se)||Qi,le=(function(re,fe,xe){for(var Ye,we=it(it({},fe),{className:void 0,theme:xe}),vn=0;vn<re.length;vn+=1){var bn=Za(Ye=re[vn])?Ye(we):Ye;for(var Vt in bn)we[Vt]=Vt==="className"?Ga(we[Vt],bn[Vt]):Vt==="style"?it(it({},we[Vt]),bn[Vt]):bn[Vt]}return fe.className&&(we.className=Ga(we.className,fe.className)),we})(F,N,ee),pe=le.as||gt,E={};for(var G in le)le[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&le.theme===ee||(G==="forwardedAs"?E.as=le.forwardedAs:K&&!K(G,pe)||(E[G]=le[G]));var J=(function(re,fe){var xe=Yf(),Ye=re.generateAndInjectStyles(fe,xe.styleSheet,xe.stylis);return Ye})(ae,le),W=Ga(Oe,en);return J&&(W+=" "+J),le.className&&(W+=" "+le.className),E[hf(pe)&&!Nv.has(pe)?"class":"className"]=W,V&&(E.ref=V),C.createElement(pe,E)})(L,Q,P)}k.displayName=x;var L=on.forwardRef(k);return L.attrs=T,L.componentStyle=R,L.displayName=x,L.shouldForwardProp=j,L.foldedComponentIds=r?Ga(u.foldedComponentIds,u.styledComponentId):"",L.styledComponentId=S,L.target=r?u.target:t,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Q){this._foldedDefaultProps=r?(function(P){for(var Z=[],N=1;N<arguments.length;N++)Z[N-1]=arguments[N];for(var V=0,F=Z;V<F.length;V++)qf(P,F[V],!0);return P})({},u.defaultProps,Q):Q}}),Cd(L,function(){return".".concat(L.styledComponentId)}),f&&Hv(L,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function $y(t,i){for(var o=[t[0]],r=0,u=i.length;r<u;r+=1)o.push(i[r],t[r+1]);return o}var Ny=function(t){return Object.assign(t,{isCss:!0})};function Ed(t){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];if(Za(t)||ho(t))return Ny(ya($y(Ol,Yi([t],i,!0))));var r=t;return i.length===0&&r.length===1&&typeof r[0]=="string"?ya(r):Ny(ya($y(r,i)))}function Xf(t,i,o){if(o===void 0&&(o=Qi),!i)throw Fa(1,i);var r=function(u){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];return t(i,o,Ed.apply(void 0,Yi([u],f,!1)))};return r.attrs=function(u){return Xf(t,i,it(it({},o),{attrs:Array.prototype.concat(o.attrs,u).filter(Boolean)}))},r.withConfig=function(u){return Xf(t,i,it(it({},o),u))},r}var Zv=function(t){return Xf(NC,t)},U=Zv;Nv.forEach(function(t){U[t]=Zv(t)});var VC=(function(){function t(i,o){this.rules=i,this.componentId=o,this.isStatic=Qv(i),bl.registerId(this.componentId+1)}return t.prototype.createStyles=function(i,o,r,u){var f=u(yl(ya(this.rules,o,r,u)),""),d=this.componentId+i;r.insertRules(d,d,f)},t.prototype.removeStyles=function(i,o){o.clearRules(this.componentId+i)},t.prototype.renderStyles=function(i,o,r,u){i>2&&bl.registerId(this.componentId+i),this.removeStyles(i,r),this.createStyles(i,o,r,u)},t})();function _C(t){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];var r=Ed.apply(void 0,Yi([t],i,!1)),u="sc-global-".concat(Td(JSON.stringify(r))),f=new VC(r,u),d=function(h){var m=Yf(),y=on.useContext(mo),x=on.useRef(m.styleSheet.allocateGSInstance(u)).current;return m.styleSheet.server&&p(x,h,m.styleSheet,y,m.stylis),on.useLayoutEffect(function(){if(!m.styleSheet.server)return p(x,h,m.styleSheet,y,m.stylis),function(){return f.removeStyles(x,m.styleSheet)}},[x,h,m.styleSheet,y,m.stylis]),null};function p(h,m,y,x,S){if(f.isStatic)f.renderStyles(h,iC,y,S);else{var T=it(it({},m),{theme:$v(m,x,d.defaultProps)});f.renderStyles(h,T,y,S)}}return on.memo(d)}function ts(t){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];var r=yl(Ed.apply(void 0,Yi([t],i,!1))),u=Td(r);return new Xv(u,r)}const LC=ts`
  from {
  opacity: 0;
  transform: translateY(20px);
  }
  to {
  opacity: 1;
  transform: translateY(0);
  }
`,BC=ts`
  from {
  transform: translateX(100%);
  }
  to {
  transform: translateX(0);
  }
`,UC=ts`
  from {
  transform: translateX(-100%);
  }
  to {
  transform: translateX(0);
  }
`,HC=ts`
  0%, 100% {
  opacity: 1;
  }
  50% {
  opacity: 0.7;
  }
`,qC=ts`
  from {
  transform: rotate(0deg);
  }
  to {
  transform: rotate(360deg);
  }
`,GC=ts`
  0% {
  transform: scale(1);
  box-shadow: 0 0 0 0 rgba(91, 255, 139, 0.7);
  }
  70% {
  transform: scale(1.05);
  box-shadow: 0 0 0 10px rgba(91, 255, 139, 0);
  }
  100% {
  transform: scale(1);
  box-shadow: 0 0 0 0 rgba(91, 255, 139, 0);
  }
`,Vy=_C`
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  html {
  scroll-behavior: smooth;
  font-size: 16px;
  }

  body {
  font-family: ${t=>t.theme.fonts.primary};
  background: ${t=>t.theme.colors.background};
  color: ${t=>t.theme.colors.text};
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  body.no-scroll {
  overflow: hidden;
  }

  a {
  color: inherit;
  text-decoration: none;
  }

  button {
  border: none;
  background: none;
  cursor: pointer;
  font-family: inherit;
  }

  img {
  max-width: 100%;
  height: auto;
  }

  // Utilitários
  .hide {
  display: none !important;
  }

  .gradient-text {
  background: ${t=>t.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  }

  .animate-fade-in {
  animation: ${LC} 0.8s ease-out;
  }

  .animate-slide-in-right {
  animation: ${BC} 0.6s ease-out;
  }

  .animate-slide-in-left {
  animation: ${UC} 0.6s ease-out;
  }

  .animate-pulse {
  animation: ${HC} 2s infinite;
  }

  .animate-rotate {
  animation: ${qC} 2s linear infinite;
  }

  .animate-shockwave {
  animation: ${GC} 1s ease-out;
  }

  // Scrollbar personalizada
  ::-webkit-scrollbar {
  width: 8px;
  }

  ::-webkit-scrollbar-track {
  background: ${t=>t.theme.colors.backgroundAlt};
  }

  ::-webkit-scrollbar-thumb {
  background: ${t=>t.theme.colors.primary};
  border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
  background: ${t=>t.theme.colors.secondary};
  }
`,Un=U.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${t=>t.theme.spacing.md};

  @media (min-width: ${t=>t.theme.breakpoints.desktop}) {
  padding: 0 ${t=>t.theme.spacing.xl};
  }
`,Co=U.section`
  padding: ${t=>t.theme.spacing.xxl} 0;
  min-height: ${t=>t.fullHeight?"100vh":"auto"};
  display: ${t=>t.flex?"flex":"block"};
  align-items: ${t=>t.center?"center":"stretch"};
  justify-content: ${t=>t.center?"center":"flex-start"};
`;U.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${t=>t.minWidth||"300px"}, 1fr));
  gap: ${t=>t.gap||t.theme.spacing.lg};
  margin: ${t=>t.margin||"0"};
`;U.div`
  display: flex;
  flex-direction: ${t=>t.direction||"row"};
  align-items: ${t=>t.align||"stretch"};
  justify-content: ${t=>t.justify||"flex-start"};
  gap: ${t=>t.gap||"0"};
  flex-wrap: ${t=>t.wrap?"wrap":"nowrap"};
`;const Qt=U.button`
  font-family: ${t=>t.theme.fonts.primary};
  font-weight: 700;
  text-transform: uppercase;
  background: ${t=>t.theme.colors.text};
  color: ${t=>t.theme.colors.background};
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  border-radius: 0.25rem;
  border: solid 0.125rem ${t=>t.theme.colors.text};
  transition: all 0.25s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
  background: transparent;
  color: ${t=>t.theme.colors.text};
  box-shadow: 0.3rem 0.3rem ${t=>t.theme.colors.text};
  transform: translate(-0.1rem, -0.1rem);
  }

  &:active {
  transform: translate(0, 0);
  box-shadow: 0.1rem 0.1rem ${t=>t.theme.colors.text};
  }

  &.gradient {
  background: ${t=>t.theme.colors.gradientText};
  border-color: transparent;
  color: ${t=>t.theme.colors.background};
  
  &:hover {
  background: transparent;
  color: #ffffff;
  border-color: ${t=>t.theme.colors.primary};
  }
  }
`,Zi=U.h1`
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: ${t=>t.theme.spacing.lg};
  background: ${t=>t.$gradient?t.theme.colors.gradientText:"none"};
  -webkit-background-clip: ${t=>t.$gradient?"text":"none"};
  -webkit-text-fill-color: ${t=>t.$gradient?"transparent":"inherit"};
  background-clip: ${t=>t.$gradient?"text":"none"};
`;U.h2`
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 500;
  margin-bottom: ${t=>t.theme.spacing.md};
  background: ${t=>t.$gradient?t.theme.colors.gradientText:"none"};
  -webkit-background-clip: ${t=>t.$gradient?"text":"none"};
  -webkit-text-fill-color: ${t=>t.$gradient?"transparent":"inherit"};
  background-clip: ${t=>t.$gradient?"text":"none"};
`;const Ft=U.p`
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: ${t=>t.theme.spacing.md};
  color: ${t=>t.muted?t.theme.colors.textMuted:t.theme.colors.text};
`;U.div`
  background: ${t=>t.theme.colors.backgroundAlt};
  border-radius: 8px;
  padding: ${t=>t.theme.spacing.lg};
  box-shadow: ${t=>t.theme.shadows.medium};
  transition: all 0.3s ease;
  border: 1px solid ${t=>t.theme.colors.border};

  &:hover {
  transform: translateY(-5px);
  box-shadow: ${t=>t.theme.shadows.strong};
  border-color: ${t=>t.theme.colors.primary};
  }
`;const Vi={colors:{primary:"#5bff8b",secondary:"#00ffff",background:"#101010",backgroundAlt:"#1a1a1a",text:"#ffffff",textMuted:"#cccccc",border:"#333333",gradientText:"linear-gradient(to right, #5bff8b 0%, #00ffff 100%)",gradientBg:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",overlayDark:"#101010cc"},fonts:{primary:'"Chakra Petch", sans-serif',secondary:"system-ui, sans-serif"},breakpoints:{mobile:"480px",tablet:"736px",desktop:"980px",large:"1280px",xlarge:"1800px"},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"2rem"},animations:{duration:{fast:"0.2s",normal:"0.5s",slow:"1s"},easing:{easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",bounce:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},shadows:{soft:"0 2px 10px rgba(0, 0, 0, 0.1)",medium:"0 4px 20px rgba(0, 0, 0, 0.15)",strong:"0 8px 30px rgba(0, 0, 0, 0.3)",neon:"0 0 20px rgba(91, 255, 139, 0.5)"}},Zr="https://api.github.com",Fr="DanVNeitzel";class YC{constructor(){this.cache=new Map,this.cacheTimeout=300*1e3}async fetchWithCache(i,o={}){const r=i,u=this.cache.get(r);if(u&&Date.now()-u.timestamp<this.cacheTimeout)return u.data;try{const f=await fetch(i,{headers:{Accept:"application/vnd.github.v3+json","User-Agent":"Portfolio-React-App",...o.headers},...o});if(!f.ok)throw new Error(`GitHub API Error: ${f.status} ${f.statusText}`);const d=await f.json();return this.cache.set(r,{data:d,timestamp:Date.now()}),d}catch(f){if(console.error("GitHub API Error:",f),u)return console.warn("Using expired cache due to API error"),u.data;throw f}}async getUserInfo(){const i=`${Zr}/users/${Fr}`;return this.fetchWithCache(i)}async getRepositories(i={}){const{sort:o="updated",direction:r="desc",per_page:u=100,type:f="owner"}=i,d=`${Zr}/users/${Fr}/repos?sort=${o}&direction=${r}&per_page=${u}&type=${f}`;return await this.fetchWithCache(d)}async getFilteredRepositories(i={}){return(await this.getRepositories()).filter(r=>{if(i.language&&r.language!==i.language||i.excludeForks!==!1&&r.fork||i.excludeArchived!==!1&&r.archived)return!1;if(i.search){const u=i.search.toLowerCase(),f=r.name.toLowerCase().includes(u),d=r.description?.toLowerCase().includes(u);if(!f&&!d)return!1}return!(i.topics&&i.topics.length>0&&!i.topics.some(f=>r.topics?.includes(f.toLowerCase())))})}async getRepositoryLanguages(i){const o=`${Zr}/repos/${Fr}/${i}/languages`;return this.fetchWithCache(o)}async getRepositoryCommits(i,o=5){const r=`${Zr}/repos/${Fr}/${i}/commits?per_page=${o}`;return this.fetchWithCache(r)}async getRepositoriesStats(){try{const i=await this.getRepositories(),o={totalRepos:i.length,totalStars:i.reduce((r,u)=>r+u.stargazers_count,0),totalForks:i.reduce((r,u)=>r+u.forks_count,0),languages:{},topics:{},lastUpdate:null};return i.forEach(r=>{r.language&&(o.languages[r.language]=(o.languages[r.language]||0)+1),r.topics&&r.topics.forEach(f=>{o.topics[f]=(o.topics[f]||0)+1});const u=new Date(r.updated_at);(!o.lastUpdate||u>o.lastUpdate)&&(o.lastUpdate=u)}),o}catch(i){return console.error("Error fetching repository stats:",i),null}}formatRepositoryForPortfolio(i){return{id:i.id,title:this.formatRepositoryName(i.name),name:i.name,description:i.description||"Projeto desenvolvido com foco em aprendizado e prática.",language:i.language,technologies:this.extractTechnologies(i),stars:i.stargazers_count,forks:i.forks_count,link:i.homepage||i.html_url,repo:i.html_url,clone_url:i.clone_url,created_at:i.created_at,updated_at:i.updated_at,topics:i.topics||[],size:i.size,isArchived:i.archived,isFork:i.fork,defaultBranch:i.default_branch,hasPages:!!i.homepage,image:this.generateRepositoryImage(i)}}formatRepositoryName(i){return i.split(/[-_]/).map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" ")}extractTechnologies(i){const o=[];i.language&&o.push(i.language);const r={react:"React",vue:"Vue.js",angular:"Angular",nodejs:"Node.js",typescript:"TypeScript",javascript:"JavaScript",html:"HTML5",css:"CSS3",sass:"SASS",bootstrap:"Bootstrap",tailwind:"Tailwind CSS",webpack:"Webpack",vite:"Vite",express:"Express",mongodb:"MongoDB",mysql:"MySQL",postgresql:"PostgreSQL",firebase:"Firebase",aws:"AWS",docker:"Docker"};return i.topics&&i.topics.forEach(u=>{const f=r[u.toLowerCase()];f&&!o.includes(f)&&o.push(f)}),o}generateRepositoryImage(i){return i.homepage?`/images/projects/${i.name}.png`:{JavaScript:"/images/tech/javascript.png",TypeScript:"/images/tech/typescript.png",React:"/images/tech/react.png",Vue:"/images/tech/vue.png",Angular:"/images/tech/angular.png",Python:"/images/tech/python.png",Java:"/images/tech/java.png",PHP:"/images/tech/php.png",HTML:"/images/tech/html.png",CSS:"/images/tech/css.png"}[i.language]||"/images/tech/code.png"}clearCache(){this.cache.clear()}}const eo=new YC,XC=(t={})=>{const[i,o]=C.useState([]),[r,u]=C.useState([]),[f,d]=C.useState(!0),[p,h]=C.useState(null),[m,y]=C.useState(null),[x,S]=C.useState(null),[T,j]=C.useState({search:"",language:"",excludeForks:!0,excludeArchived:!0,sortBy:"updated",sortDirection:"desc",topics:[],...t}),D=C.useCallback(async()=>{try{d(!0),h(null);const[N,V]=await Promise.all([eo.getRepositories(),eo.getUserInfo()]),F=N.map(se=>eo.formatRepositoryForPortfolio(se));o(F),y(V);const ae=await eo.getRepositoriesStats();S(ae)}catch(N){console.error("❌ GitHub Error:",N),h(N.message||"Erro ao carregar repositórios do GitHub")}finally{d(!1)}},[]),z=C.useCallback(()=>{let N=[...i];if(T.search.trim()){const V=T.search.toLowerCase();N=N.filter(F=>F.title.toLowerCase().includes(V)||F.description.toLowerCase().includes(V)||F.name.toLowerCase().includes(V))}T.language&&(N=N.filter(V=>V.language===T.language)),T.excludeForks&&(N=N.filter(V=>!V.isFork)),T.excludeArchived&&(N=N.filter(V=>!V.isArchived)),T.topics.length>0&&(N=N.filter(V=>T.topics.some(F=>V.topics.includes(F)))),N.sort((V,F)=>{let ae,se;switch(T.sortBy){case"name":ae=V.title.toLowerCase(),se=F.title.toLowerCase();break;case"stars":ae=V.stars,se=F.stars;break;case"forks":ae=V.forks,se=F.forks;break;case"created":ae=new Date(V.created_at),se=new Date(F.created_at);break;case"updated":default:ae=new Date(V.updated_at),se=new Date(F.updated_at);break}return T.sortDirection==="asc"?ae>se?1:ae<se?-1:0:ae<se?1:ae>se?-1:0}),u(N)},[i,T]);C.useEffect(()=>{z()},[z]),C.useEffect(()=>{D()},[D]);const R=C.useCallback(N=>{j(V=>({...V,...N}))},[]),k=C.useCallback(()=>{j({search:"",language:"",excludeForks:!0,excludeArchived:!0,sortBy:"updated",sortDirection:"desc",topics:[]})},[]),L=C.useCallback(()=>{eo.clearCache(),D()},[D]),Q=C.useMemo(()=>{if(!r.length)return null;const N={},V={};let F=0,ae=0;return r.forEach(se=>{F+=se.stars,ae+=se.forks,se.language&&(N[se.language]=(N[se.language]||0)+1),se.topics.forEach(Oe=>{V[Oe]=(V[Oe]||0)+1})}),{totalRepos:r.length,totalStars:F,totalForks:ae,languages:N,topics:V,topLanguages:Object.entries(N).sort(([,se],[,Oe])=>Oe-se).slice(0,5),topTopics:Object.entries(V).sort(([,se],[,Oe])=>Oe-se).slice(0,10)}},[r]),P=C.useMemo(()=>{const N=new Set;return i.forEach(V=>{V.language&&N.add(V.language)}),Array.from(N).sort()},[i]),Z=C.useMemo(()=>{const N=new Set;return i.forEach(V=>{V.topics.forEach(F=>N.add(F))}),Array.from(N).sort()},[i]);return{repositories:r,allRepositories:i,userInfo:m,stats:x,filteredStats:Q,loading:f,error:p,filters:T,availableLanguages:P,availableTopics:Z,updateFilters:R,resetFilters:k,refresh:L,hasRepositories:r.length>0,isEmpty:!f&&r.length===0,isFiltered:Object.values(T).some(N=>Array.isArray(N)?N.length>0:typeof N=="boolean"?N!==!0:N!=="")}},Fv=()=>{const[t,i]=C.useState(0);return C.useEffect(()=>{const o=()=>{i(window.pageYOffset)};return window.addEventListener("scroll",o),o(),()=>window.removeEventListener("scroll",o)},[]),t},Jv=()=>{const[t,i]=C.useState({width:typeof window<"u"?window.innerWidth:0,height:typeof window<"u"?window.innerHeight:0});return C.useEffect(()=>{const o=()=>{i({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",o),o(),()=>window.removeEventListener("resize",o)},[]),t},PC=(t=!1)=>{const[i,o]=C.useState(t);return[i,{toggle:()=>o(d=>!d),setTrue:()=>o(!0),setFalse:()=>o(!1),setValue:o}]},Wv=(t={})=>{const[i,o]=C.useState(!1),[r,u]=C.useState(null);return C.useEffect(()=>{if(!r)return;const f=new IntersectionObserver(([d])=>{o(d.isIntersecting)},t);return f.observe(r),()=>{r&&f.unobserve(r)}},[r,t]),[u,i]},KC=()=>{C.useEffect(()=>{"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(t=>{}).catch(t=>{})})},[])},wd=C.createContext({});function jd(t){const i=C.useRef(null);return i.current===null&&(i.current=t()),i.current}const Md=typeof window<"u",Iv=Md?C.useLayoutEffect:C.useEffect,$l=C.createContext(null);function Dd(t,i){t.indexOf(i)===-1&&t.push(i)}function zd(t,i){const o=t.indexOf(i);o>-1&&t.splice(o,1)}const qn=(t,i,o)=>o>i?i:o<t?t:o;let Rd=()=>{};const Gn={},eb=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function tb(t){return typeof t=="object"&&t!==null}const nb=t=>/^0[^.\s]+$/u.test(t);function kd(t){let i;return()=>(i===void 0&&(i=t()),i)}const Wt=t=>t,QC=(t,i)=>o=>i(t(o)),Eo=(...t)=>t.reduce(QC),po=(t,i,o)=>{const r=i-t;return r===0?1:(o-t)/r};class Od{constructor(){this.subscriptions=[]}add(i){return Dd(this.subscriptions,i),()=>zd(this.subscriptions,i)}notify(i,o,r){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](i,o,r);else for(let f=0;f<u;f++){const d=this.subscriptions[f];d&&d(i,o,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const hn=t=>t*1e3,Jt=t=>t/1e3;function ab(t,i){return i?t*(1e3/i):0}const ib=(t,i,o)=>(((1-3*o+3*i)*t+(3*o-6*i))*t+3*i)*t,ZC=1e-7,FC=12;function JC(t,i,o,r,u){let f,d,p=0;do d=i+(o-i)/2,f=ib(d,r,u)-t,f>0?o=d:i=d;while(Math.abs(f)>ZC&&++p<FC);return d}function wo(t,i,o,r){if(t===i&&o===r)return Wt;const u=f=>JC(f,0,1,t,o);return f=>f===0||f===1?f:ib(u(f),i,r)}const sb=t=>i=>i<=.5?t(2*i)/2:(2-t(2*(1-i)))/2,ob=t=>i=>1-t(1-i),rb=wo(.33,1.53,.69,.99),$d=ob(rb),lb=sb($d),ub=t=>(t*=2)<1?.5*$d(t):.5*(2-Math.pow(2,-10*(t-1))),Nd=t=>1-Math.sin(Math.acos(t)),cb=ob(Nd),fb=sb(Nd),WC=wo(.42,0,1,1),IC=wo(0,0,.58,1),db=wo(.42,0,.58,1),eE=t=>Array.isArray(t)&&typeof t[0]!="number",hb=t=>Array.isArray(t)&&typeof t[0]=="number",tE={linear:Wt,easeIn:WC,easeInOut:db,easeOut:IC,circIn:Nd,circInOut:fb,circOut:cb,backIn:$d,backInOut:lb,backOut:rb,anticipate:ub},nE=t=>typeof t=="string",_y=t=>{if(hb(t)){Rd(t.length===4);const[i,o,r,u]=t;return wo(i,o,r,u)}else if(nE(t))return tE[t];return t},Jr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function aE(t,i){let o=new Set,r=new Set,u=!1,f=!1;const d=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function h(y){d.has(y)&&(m.schedule(y),t()),y(p)}const m={schedule:(y,x=!1,S=!1)=>{const j=S&&u?o:r;return x&&d.add(y),j.has(y)||j.add(y),y},cancel:y=>{r.delete(y),d.delete(y)},process:y=>{if(p=y,u){f=!0;return}u=!0,[o,r]=[r,o],o.forEach(h),o.clear(),u=!1,f&&(f=!1,m.process(y))}};return m}const iE=40;function mb(t,i){let o=!1,r=!0;const u={delta:0,timestamp:0,isProcessing:!1},f=()=>o=!0,d=Jr.reduce((L,Q)=>(L[Q]=aE(f),L),{}),{setup:p,read:h,resolveKeyframes:m,preUpdate:y,update:x,preRender:S,render:T,postRender:j}=d,D=()=>{const L=Gn.useManualTiming?u.timestamp:performance.now();o=!1,Gn.useManualTiming||(u.delta=r?1e3/60:Math.max(Math.min(L-u.timestamp,iE),1)),u.timestamp=L,u.isProcessing=!0,p.process(u),h.process(u),m.process(u),y.process(u),x.process(u),S.process(u),T.process(u),j.process(u),u.isProcessing=!1,o&&i&&(r=!1,t(D))},z=()=>{o=!0,r=!0,u.isProcessing||t(D)};return{schedule:Jr.reduce((L,Q)=>{const P=d[Q];return L[Q]=(Z,N=!1,V=!1)=>(o||z(),P.schedule(Z,N,V)),L},{}),cancel:L=>{for(let Q=0;Q<Jr.length;Q++)d[Jr[Q]].cancel(L)},state:u,steps:d}}const{schedule:Le,cancel:va,state:ct,steps:pf}=mb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Wt,!0);let cl;function sE(){cl=void 0}const Ct={now:()=>(cl===void 0&&Ct.set(ct.isProcessing||Gn.useManualTiming?ct.timestamp:performance.now()),cl),set:t=>{cl=t,queueMicrotask(sE)}},pb=t=>i=>typeof i=="string"&&i.startsWith(t),Vd=pb("--"),oE=pb("var(--"),_d=t=>oE(t)?rE.test(t.split("/*")[0].trim()):!1,rE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ns={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},go={...ns,transform:t=>qn(0,1,t)},Wr={...ns,default:1},oo=t=>Math.round(t*1e5)/1e5,Ld=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function lE(t){return t==null}const uE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Bd=(t,i)=>o=>!!(typeof o=="string"&&uE.test(o)&&o.startsWith(t)||i&&!lE(o)&&Object.prototype.hasOwnProperty.call(o,i)),gb=(t,i,o)=>r=>{if(typeof r!="string")return r;const[u,f,d,p]=r.match(Ld);return{[t]:parseFloat(u),[i]:parseFloat(f),[o]:parseFloat(d),alpha:p!==void 0?parseFloat(p):1}},cE=t=>qn(0,255,t),gf={...ns,transform:t=>Math.round(cE(t))},Ya={test:Bd("rgb","red"),parse:gb("red","green","blue"),transform:({red:t,green:i,blue:o,alpha:r=1})=>"rgba("+gf.transform(t)+", "+gf.transform(i)+", "+gf.transform(o)+", "+oo(go.transform(r))+")"};function fE(t){let i="",o="",r="",u="";return t.length>5?(i=t.substring(1,3),o=t.substring(3,5),r=t.substring(5,7),u=t.substring(7,9)):(i=t.substring(1,2),o=t.substring(2,3),r=t.substring(3,4),u=t.substring(4,5),i+=i,o+=o,r+=r,u+=u),{red:parseInt(i,16),green:parseInt(o,16),blue:parseInt(r,16),alpha:u?parseInt(u,16)/255:1}}const Pf={test:Bd("#"),parse:fE,transform:Ya.transform},jo=t=>({test:i=>typeof i=="string"&&i.endsWith(t)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${t}`}),ga=jo("deg"),mn=jo("%"),oe=jo("px"),dE=jo("vh"),hE=jo("vw"),Ly={...mn,parse:t=>mn.parse(t)/100,transform:t=>mn.transform(t*100)},Li={test:Bd("hsl","hue"),parse:gb("hue","saturation","lightness"),transform:({hue:t,saturation:i,lightness:o,alpha:r=1})=>"hsla("+Math.round(t)+", "+mn.transform(oo(i))+", "+mn.transform(oo(o))+", "+oo(go.transform(r))+")"},We={test:t=>Ya.test(t)||Pf.test(t)||Li.test(t),parse:t=>Ya.test(t)?Ya.parse(t):Li.test(t)?Li.parse(t):Pf.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Ya.transform(t):Li.transform(t),getAnimatableNone:t=>{const i=We.parse(t);return i.alpha=0,We.transform(i)}},mE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function pE(t){return isNaN(t)&&typeof t=="string"&&(t.match(Ld)?.length||0)+(t.match(mE)?.length||0)>0}const yb="number",vb="color",gE="var",yE="var(",By="${}",vE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function yo(t){const i=t.toString(),o=[],r={color:[],number:[],var:[]},u=[];let f=0;const p=i.replace(vE,h=>(We.test(h)?(r.color.push(f),u.push(vb),o.push(We.parse(h))):h.startsWith(yE)?(r.var.push(f),u.push(gE),o.push(h)):(r.number.push(f),u.push(yb),o.push(parseFloat(h))),++f,By)).split(By);return{values:o,split:p,indexes:r,types:u}}function bb(t){return yo(t).values}function xb(t){const{split:i,types:o}=yo(t),r=i.length;return u=>{let f="";for(let d=0;d<r;d++)if(f+=i[d],u[d]!==void 0){const p=o[d];p===yb?f+=oo(u[d]):p===vb?f+=We.transform(u[d]):f+=u[d]}return f}}const bE=t=>typeof t=="number"?0:We.test(t)?We.getAnimatableNone(t):t;function xE(t){const i=bb(t);return xb(t)(i.map(bE))}const ba={test:pE,parse:bb,createTransformer:xb,getAnimatableNone:xE};function yf(t,i,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+(i-t)*6*o:o<1/2?i:o<2/3?t+(i-t)*(2/3-o)*6:t}function SE({hue:t,saturation:i,lightness:o,alpha:r}){t/=360,i/=100,o/=100;let u=0,f=0,d=0;if(!i)u=f=d=o;else{const p=o<.5?o*(1+i):o+i-o*i,h=2*o-p;u=yf(h,p,t+1/3),f=yf(h,p,t),d=yf(h,p,t-1/3)}return{red:Math.round(u*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:r}}function xl(t,i){return o=>o>0?i:t}const Be=(t,i,o)=>t+(i-t)*o,vf=(t,i,o)=>{const r=t*t,u=o*(i*i-r)+r;return u<0?0:Math.sqrt(u)},TE=[Pf,Ya,Li],AE=t=>TE.find(i=>i.test(t));function Uy(t){const i=AE(t);if(!i)return!1;let o=i.parse(t);return i===Li&&(o=SE(o)),o}const Hy=(t,i)=>{const o=Uy(t),r=Uy(i);if(!o||!r)return xl(t,i);const u={...o};return f=>(u.red=vf(o.red,r.red,f),u.green=vf(o.green,r.green,f),u.blue=vf(o.blue,r.blue,f),u.alpha=Be(o.alpha,r.alpha,f),Ya.transform(u))},Kf=new Set(["none","hidden"]);function CE(t,i){return Kf.has(t)?o=>o<=0?t:i:o=>o>=1?i:t}function EE(t,i){return o=>Be(t,i,o)}function Ud(t){return typeof t=="number"?EE:typeof t=="string"?_d(t)?xl:We.test(t)?Hy:ME:Array.isArray(t)?Sb:typeof t=="object"?We.test(t)?Hy:wE:xl}function Sb(t,i){const o=[...t],r=o.length,u=t.map((f,d)=>Ud(f)(f,i[d]));return f=>{for(let d=0;d<r;d++)o[d]=u[d](f);return o}}function wE(t,i){const o={...t,...i},r={};for(const u in o)t[u]!==void 0&&i[u]!==void 0&&(r[u]=Ud(t[u])(t[u],i[u]));return u=>{for(const f in r)o[f]=r[f](u);return o}}function jE(t,i){const o=[],r={color:0,var:0,number:0};for(let u=0;u<i.values.length;u++){const f=i.types[u],d=t.indexes[f][r[f]],p=t.values[d]??0;o[u]=p,r[f]++}return o}const ME=(t,i)=>{const o=ba.createTransformer(i),r=yo(t),u=yo(i);return r.indexes.var.length===u.indexes.var.length&&r.indexes.color.length===u.indexes.color.length&&r.indexes.number.length>=u.indexes.number.length?Kf.has(t)&&!u.values.length||Kf.has(i)&&!r.values.length?CE(t,i):Eo(Sb(jE(r,u),u.values),o):xl(t,i)};function Tb(t,i,o){return typeof t=="number"&&typeof i=="number"&&typeof o=="number"?Be(t,i,o):Ud(t)(t,i)}const DE=t=>{const i=({timestamp:o})=>t(o);return{start:(o=!0)=>Le.update(i,o),stop:()=>va(i),now:()=>ct.isProcessing?ct.timestamp:Ct.now()}},Ab=(t,i,o=10)=>{let r="";const u=Math.max(Math.round(i/o),2);for(let f=0;f<u;f++)r+=Math.round(t(f/(u-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Sl=2e4;function Hd(t){let i=0;const o=50;let r=t.next(i);for(;!r.done&&i<Sl;)i+=o,r=t.next(i);return i>=Sl?1/0:i}function zE(t,i=100,o){const r=o({...t,keyframes:[0,i]}),u=Math.min(Hd(r),Sl);return{type:"keyframes",ease:f=>r.next(u*f).value/i,duration:Jt(u)}}const RE=5;function Cb(t,i,o){const r=Math.max(i-RE,0);return ab(o-t(r),i-r)}const Ge={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},bf=.001;function kE({duration:t=Ge.duration,bounce:i=Ge.bounce,velocity:o=Ge.velocity,mass:r=Ge.mass}){let u,f,d=1-i;d=qn(Ge.minDamping,Ge.maxDamping,d),t=qn(Ge.minDuration,Ge.maxDuration,Jt(t)),d<1?(u=m=>{const y=m*d,x=y*t,S=y-o,T=Qf(m,d),j=Math.exp(-x);return bf-S/T*j},f=m=>{const x=m*d*t,S=x*o+o,T=Math.pow(d,2)*Math.pow(m,2)*t,j=Math.exp(-x),D=Qf(Math.pow(m,2),d);return(-u(m)+bf>0?-1:1)*((S-T)*j)/D}):(u=m=>{const y=Math.exp(-m*t),x=(m-o)*t+1;return-bf+y*x},f=m=>{const y=Math.exp(-m*t),x=(o-m)*(t*t);return y*x});const p=5/t,h=$E(u,f,p);if(t=hn(t),isNaN(h))return{stiffness:Ge.stiffness,damping:Ge.damping,duration:t};{const m=Math.pow(h,2)*r;return{stiffness:m,damping:d*2*Math.sqrt(r*m),duration:t}}}const OE=12;function $E(t,i,o){let r=o;for(let u=1;u<OE;u++)r=r-t(r)/i(r);return r}function Qf(t,i){return t*Math.sqrt(1-i*i)}const NE=["duration","bounce"],VE=["stiffness","damping","mass"];function qy(t,i){return i.some(o=>t[o]!==void 0)}function _E(t){let i={velocity:Ge.velocity,stiffness:Ge.stiffness,damping:Ge.damping,mass:Ge.mass,isResolvedFromDuration:!1,...t};if(!qy(t,VE)&&qy(t,NE))if(t.visualDuration){const o=t.visualDuration,r=2*Math.PI/(o*1.2),u=r*r,f=2*qn(.05,1,1-(t.bounce||0))*Math.sqrt(u);i={...i,mass:Ge.mass,stiffness:u,damping:f}}else{const o=kE(t);i={...i,...o,mass:Ge.mass},i.isResolvedFromDuration=!0}return i}function Tl(t=Ge.visualDuration,i=Ge.bounce){const o=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:i}:t;let{restSpeed:r,restDelta:u}=o;const f=o.keyframes[0],d=o.keyframes[o.keyframes.length-1],p={done:!1,value:f},{stiffness:h,damping:m,mass:y,duration:x,velocity:S,isResolvedFromDuration:T}=_E({...o,velocity:-Jt(o.velocity||0)}),j=S||0,D=m/(2*Math.sqrt(h*y)),z=d-f,R=Jt(Math.sqrt(h/y)),k=Math.abs(z)<5;r||(r=k?Ge.restSpeed.granular:Ge.restSpeed.default),u||(u=k?Ge.restDelta.granular:Ge.restDelta.default);let L;if(D<1){const P=Qf(R,D);L=Z=>{const N=Math.exp(-D*R*Z);return d-N*((j+D*R*z)/P*Math.sin(P*Z)+z*Math.cos(P*Z))}}else if(D===1)L=P=>d-Math.exp(-R*P)*(z+(j+R*z)*P);else{const P=R*Math.sqrt(D*D-1);L=Z=>{const N=Math.exp(-D*R*Z),V=Math.min(P*Z,300);return d-N*((j+D*R*z)*Math.sinh(V)+P*z*Math.cosh(V))/P}}const Q={calculatedDuration:T&&x||null,next:P=>{const Z=L(P);if(T)p.done=P>=x;else{let N=P===0?j:0;D<1&&(N=P===0?hn(j):Cb(L,P,Z));const V=Math.abs(N)<=r,F=Math.abs(d-Z)<=u;p.done=V&&F}return p.value=p.done?d:Z,p},toString:()=>{const P=Math.min(Hd(Q),Sl),Z=Ab(N=>Q.next(P*N).value,P,30);return P+"ms "+Z},toTransition:()=>{}};return Q}Tl.applyToOptions=t=>{const i=zE(t,100,Tl);return t.ease=i.ease,t.duration=hn(i.duration),t.type="keyframes",t};function Zf({keyframes:t,velocity:i=0,power:o=.8,timeConstant:r=325,bounceDamping:u=10,bounceStiffness:f=500,modifyTarget:d,min:p,max:h,restDelta:m=.5,restSpeed:y}){const x=t[0],S={done:!1,value:x},T=V=>p!==void 0&&V<p||h!==void 0&&V>h,j=V=>p===void 0?h:h===void 0||Math.abs(p-V)<Math.abs(h-V)?p:h;let D=o*i;const z=x+D,R=d===void 0?z:d(z);R!==z&&(D=R-x);const k=V=>-D*Math.exp(-V/r),L=V=>R+k(V),Q=V=>{const F=k(V),ae=L(V);S.done=Math.abs(F)<=m,S.value=S.done?R:ae};let P,Z;const N=V=>{T(S.value)&&(P=V,Z=Tl({keyframes:[S.value,j(S.value)],velocity:Cb(L,V,S.value),damping:u,stiffness:f,restDelta:m,restSpeed:y}))};return N(0),{calculatedDuration:null,next:V=>{let F=!1;return!Z&&P===void 0&&(F=!0,Q(V),N(V)),P!==void 0&&V>=P?Z.next(V-P):(!F&&Q(V),S)}}}function LE(t,i,o){const r=[],u=o||Gn.mix||Tb,f=t.length-1;for(let d=0;d<f;d++){let p=u(t[d],t[d+1]);if(i){const h=Array.isArray(i)?i[d]||Wt:i;p=Eo(h,p)}r.push(p)}return r}function BE(t,i,{clamp:o=!0,ease:r,mixer:u}={}){const f=t.length;if(Rd(f===i.length),f===1)return()=>i[0];if(f===2&&i[0]===i[1])return()=>i[1];const d=t[0]===t[1];t[0]>t[f-1]&&(t=[...t].reverse(),i=[...i].reverse());const p=LE(i,r,u),h=p.length,m=y=>{if(d&&y<t[0])return i[0];let x=0;if(h>1)for(;x<t.length-2&&!(y<t[x+1]);x++);const S=po(t[x],t[x+1],y);return p[x](S)};return o?y=>m(qn(t[0],t[f-1],y)):m}function UE(t,i){const o=t[t.length-1];for(let r=1;r<=i;r++){const u=po(0,i,r);t.push(Be(o,1,u))}}function HE(t){const i=[0];return UE(i,t.length-1),i}function qE(t,i){return t.map(o=>o*i)}function GE(t,i){return t.map(()=>i||db).splice(0,t.length-1)}function ro({duration:t=300,keyframes:i,times:o,ease:r="easeInOut"}){const u=eE(r)?r.map(_y):_y(r),f={done:!1,value:i[0]},d=qE(o&&o.length===i.length?o:HE(i),t),p=BE(d,i,{ease:Array.isArray(u)?u:GE(i,u)});return{calculatedDuration:t,next:h=>(f.value=p(h),f.done=h>=t,f)}}const YE=t=>t!==null;function qd(t,{repeat:i,repeatType:o="loop"},r,u=1){const f=t.filter(YE),p=u<0||i&&o!=="loop"&&i%2===1?0:f.length-1;return!p||r===void 0?f[p]:r}const XE={decay:Zf,inertia:Zf,tween:ro,keyframes:ro,spring:Tl};function Eb(t){typeof t.type=="string"&&(t.type=XE[t.type])}class Gd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,o){return this.finished.then(i,o)}}const PE=t=>t/100;class Yd extends Gd{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:o}=this.options;o&&o.updatedAt!==Ct.now()&&this.tick(Ct.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Eb(i);const{type:o=ro,repeat:r=0,repeatDelay:u=0,repeatType:f,velocity:d=0}=i;let{keyframes:p}=i;const h=o||ro;h!==ro&&typeof p[0]!="number"&&(this.mixKeyframes=Eo(PE,Tb(p[0],p[1])),p=[0,100]);const m=h({...i,keyframes:p});f==="mirror"&&(this.mirroredGenerator=h({...i,keyframes:[...p].reverse(),velocity:-d})),m.calculatedDuration===null&&(m.calculatedDuration=Hd(m));const{calculatedDuration:y}=m;this.calculatedDuration=y,this.resolvedDuration=y+u,this.totalDuration=this.resolvedDuration*(r+1)-u,this.generator=m}updateTime(i){const o=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(i,o=!1){const{generator:r,totalDuration:u,mixKeyframes:f,mirroredGenerator:d,resolvedDuration:p,calculatedDuration:h}=this;if(this.startTime===null)return r.next(0);const{delay:m=0,keyframes:y,repeat:x,repeatType:S,repeatDelay:T,type:j,onUpdate:D,finalKeyframe:z}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-u/this.speed,this.startTime)),o?this.currentTime=i:this.updateTime(i);const R=this.currentTime-m*(this.playbackSpeed>=0?1:-1),k=this.playbackSpeed>=0?R<0:R>u;this.currentTime=Math.max(R,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let L=this.currentTime,Q=r;if(x){const V=Math.min(this.currentTime,u)/p;let F=Math.floor(V),ae=V%1;!ae&&V>=1&&(ae=1),ae===1&&F--,F=Math.min(F,x+1),!!(F%2)&&(S==="reverse"?(ae=1-ae,T&&(ae-=T/p)):S==="mirror"&&(Q=d)),L=qn(0,1,ae)*p}const P=k?{done:!1,value:y[0]}:Q.next(L);f&&(P.value=f(P.value));let{done:Z}=P;!k&&h!==null&&(Z=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const N=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Z);return N&&j!==Zf&&(P.value=qd(y,this.options,z,this.speed)),D&&D(P.value),N&&this.finish(),P}then(i,o){return this.finished.then(i,o)}get duration(){return Jt(this.calculatedDuration)}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Jt(i)}get time(){return Jt(this.currentTime)}set time(i){i=hn(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(Ct.now());const o=this.playbackSpeed!==i;this.playbackSpeed=i,o&&(this.time=Jt(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=DE,startTime:o}=this.options;this.driver||(this.driver=i(u=>this.tick(u))),this.options.onPlay?.();const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=o??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ct.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function KE(t){for(let i=1;i<t.length;i++)t[i]??(t[i]=t[i-1])}const Xa=t=>t*180/Math.PI,Ff=t=>{const i=Xa(Math.atan2(t[1],t[0]));return Jf(i)},QE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Ff,rotateZ:Ff,skewX:t=>Xa(Math.atan(t[1])),skewY:t=>Xa(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Jf=t=>(t=t%360,t<0&&(t+=360),t),Gy=Ff,Yy=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Xy=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),ZE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Yy,scaleY:Xy,scale:t=>(Yy(t)+Xy(t))/2,rotateX:t=>Jf(Xa(Math.atan2(t[6],t[5]))),rotateY:t=>Jf(Xa(Math.atan2(-t[2],t[0]))),rotateZ:Gy,rotate:Gy,skewX:t=>Xa(Math.atan(t[4])),skewY:t=>Xa(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Wf(t){return t.includes("scale")?1:0}function If(t,i){if(!t||t==="none")return Wf(i);const o=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,u;if(o)r=ZE,u=o;else{const p=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=QE,u=p}if(!u)return Wf(i);const f=r[i],d=u[1].split(",").map(JE);return typeof f=="function"?f(d):d[f]}const FE=(t,i)=>{const{transform:o="none"}=getComputedStyle(t);return If(o,i)};function JE(t){return parseFloat(t.trim())}const as=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],is=new Set(as),Py=t=>t===ns||t===oe,WE=new Set(["x","y","z"]),IE=as.filter(t=>!WE.has(t));function ew(t){const i=[];return IE.forEach(o=>{const r=t.getValue(o);r!==void 0&&(i.push([o,r.get()]),r.set(o.startsWith("scale")?1:0))}),i}const Ka={width:({x:t},{paddingLeft:i="0",paddingRight:o="0"})=>t.max-t.min-parseFloat(i)-parseFloat(o),height:({y:t},{paddingTop:i="0",paddingBottom:o="0"})=>t.max-t.min-parseFloat(i)-parseFloat(o),top:(t,{top:i})=>parseFloat(i),left:(t,{left:i})=>parseFloat(i),bottom:({y:t},{top:i})=>parseFloat(i)+(t.max-t.min),right:({x:t},{left:i})=>parseFloat(i)+(t.max-t.min),x:(t,{transform:i})=>If(i,"x"),y:(t,{transform:i})=>If(i,"y")};Ka.translateX=Ka.x;Ka.translateY=Ka.y;const Qa=new Set;let ed=!1,td=!1,nd=!1;function wb(){if(td){const t=Array.from(Qa).filter(r=>r.needsMeasurement),i=new Set(t.map(r=>r.element)),o=new Map;i.forEach(r=>{const u=ew(r);u.length&&(o.set(r,u),r.render())}),t.forEach(r=>r.measureInitialState()),i.forEach(r=>{r.render();const u=o.get(r);u&&u.forEach(([f,d])=>{r.getValue(f)?.set(d)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}td=!1,ed=!1,Qa.forEach(t=>t.complete(nd)),Qa.clear()}function jb(){Qa.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(td=!0)})}function tw(){nd=!0,jb(),wb(),nd=!1}class Xd{constructor(i,o,r,u,f,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=o,this.name=r,this.motionValue=u,this.element=f,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Qa.add(this),ed||(ed=!0,Le.read(jb),Le.resolveKeyframes(wb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:o,element:r,motionValue:u}=this;if(i[0]===null){const f=u?.get(),d=i[i.length-1];if(f!==void 0)i[0]=f;else if(r&&o){const p=r.readValue(o,d);p!=null&&(i[0]=p)}i[0]===void 0&&(i[0]=d),u&&f===void 0&&u.set(i[0])}KE(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),Qa.delete(this)}cancel(){this.state==="scheduled"&&(Qa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const nw=t=>t.startsWith("--");function aw(t,i,o){nw(i)?t.style.setProperty(i,o):t.style[i]=o}const iw=kd(()=>window.ScrollTimeline!==void 0),sw={};function ow(t,i){const o=kd(t);return()=>sw[i]??o()}const Mb=ow(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),io=([t,i,o,r])=>`cubic-bezier(${t}, ${i}, ${o}, ${r})`,Ky={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:io([0,.65,.55,1]),circOut:io([.55,0,1,.45]),backIn:io([.31,.01,.66,-.59]),backOut:io([.33,1.53,.69,.99])};function Db(t,i){if(t)return typeof t=="function"?Mb()?Ab(t,i):"ease-out":hb(t)?io(t):Array.isArray(t)?t.map(o=>Db(o,i)||Ky.easeOut):Ky[t]}function rw(t,i,o,{delay:r=0,duration:u=300,repeat:f=0,repeatType:d="loop",ease:p="easeOut",times:h}={},m=void 0){const y={[i]:o};h&&(y.offset=h);const x=Db(p,u);Array.isArray(x)&&(y.easing=x);const S={delay:r,duration:u,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"};return m&&(S.pseudoElement=m),t.animate(y,S)}function zb(t){return typeof t=="function"&&"applyToOptions"in t}function lw({type:t,...i}){return zb(t)&&Mb()?t.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class uw extends Gd{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:o,name:r,keyframes:u,pseudoElement:f,allowFlatten:d=!1,finalKeyframe:p,onComplete:h}=i;this.isPseudoElement=!!f,this.allowFlatten=d,this.options=i,Rd(typeof i.type!="string");const m=lw(i);this.animation=rw(o,r,u,m,f),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const y=qd(u,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(y):aw(o,r,y),this.animation.cancel()}h?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return Jt(Number(i))}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Jt(i)}get time(){return Jt(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=hn(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:o}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&iw()?(this.animation.timeline=i,Wt):o(this)}}const Rb={anticipate:ub,backInOut:lb,circInOut:fb};function cw(t){return t in Rb}function fw(t){typeof t.ease=="string"&&cw(t.ease)&&(t.ease=Rb[t.ease])}const Qy=10;class dw extends uw{constructor(i){fw(i),Eb(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:o,onUpdate:r,onComplete:u,element:f,...d}=this.options;if(!o)return;if(i!==void 0){o.set(i);return}const p=new Yd({...d,autoplay:!1}),h=hn(this.finishedTime??this.time);o.setWithVelocity(p.sample(h-Qy).value,p.sample(h).value,Qy),p.stop()}}const Zy=(t,i)=>i==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ba.test(t)||t==="0")&&!t.startsWith("url("));function hw(t){const i=t[0];if(t.length===1)return!0;for(let o=0;o<t.length;o++)if(t[o]!==i)return!0}function mw(t,i,o,r){const u=t[0];if(u===null)return!1;if(i==="display"||i==="visibility")return!0;const f=t[t.length-1],d=Zy(u,i),p=Zy(f,i);return!d||!p?!1:hw(t)||(o==="spring"||zb(o))&&r}function ad(t){t.duration=0,t.type="keyframes"}const pw=new Set(["opacity","clipPath","filter","transform"]),gw=kd(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function yw(t){const{motionValue:i,name:o,repeatDelay:r,repeatType:u,damping:f,type:d}=t;if(!(i?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:m}=i.owner.getProps();return gw()&&o&&pw.has(o)&&(o!=="transform"||!m)&&!h&&!r&&u!=="mirror"&&f!==0&&d!=="inertia"}const vw=40;class bw extends Gd{constructor({autoplay:i=!0,delay:o=0,type:r="keyframes",repeat:u=0,repeatDelay:f=0,repeatType:d="loop",keyframes:p,name:h,motionValue:m,element:y,...x}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Ct.now();const S={autoplay:i,delay:o,type:r,repeat:u,repeatDelay:f,repeatType:d,name:h,motionValue:m,element:y,...x},T=y?.KeyframeResolver||Xd;this.keyframeResolver=new T(p,(j,D,z)=>this.onKeyframesResolved(j,D,S,!z),h,m,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,o,r,u){this.keyframeResolver=void 0;const{name:f,type:d,velocity:p,delay:h,isHandoff:m,onUpdate:y}=r;this.resolvedAt=Ct.now(),mw(i,f,d,p)||((Gn.instantAnimations||!h)&&y?.(qd(i,r,o)),i[0]=i[i.length-1],ad(r),r.repeat=0);const S={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>vw?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...r,keyframes:i},T=!m&&yw(S)?new dw({...S,element:S.motionValue.owner.current}):new Yd(S);T.finished.then(()=>this.notifyFinished()).catch(Wt),this.pendingTimeline&&(this.stopTimeline=T.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=T}get finished(){return this._animation?this.animation.finished:this._finished}then(i,o){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),tw()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const xw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Sw(t){const i=xw.exec(t);if(!i)return[,];const[,o,r,u]=i;return[`--${o??r}`,u]}function kb(t,i,o=1){const[r,u]=Sw(t);if(!r)return;const f=window.getComputedStyle(i).getPropertyValue(r);if(f){const d=f.trim();return eb(d)?parseFloat(d):d}return _d(u)?kb(u,i,o+1):u}function Pd(t,i){return t?.[i]??t?.default??t}const Ob=new Set(["width","height","top","left","right","bottom",...as]),Tw={test:t=>t==="auto",parse:t=>t},$b=t=>i=>i.test(t),Nb=[ns,oe,mn,ga,hE,dE,Tw],Fy=t=>Nb.find($b(t));function Aw(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||nb(t):!0}const Cw=new Set(["brightness","contrast","saturate","opacity"]);function Ew(t){const[i,o]=t.slice(0,-1).split("(");if(i==="drop-shadow")return t;const[r]=o.match(Ld)||[];if(!r)return t;const u=o.replace(r,"");let f=Cw.has(i)?1:0;return r!==o&&(f*=100),i+"("+f+u+")"}const ww=/\b([a-z-]*)\(.*?\)/gu,id={...ba,getAnimatableNone:t=>{const i=t.match(ww);return i?i.map(Ew).join(" "):t}},Jy={...ns,transform:Math.round},jw={rotate:ga,rotateX:ga,rotateY:ga,rotateZ:ga,scale:Wr,scaleX:Wr,scaleY:Wr,scaleZ:Wr,skew:ga,skewX:ga,skewY:ga,distance:oe,translateX:oe,translateY:oe,translateZ:oe,x:oe,y:oe,z:oe,perspective:oe,transformPerspective:oe,opacity:go,originX:Ly,originY:Ly,originZ:oe},Kd={borderWidth:oe,borderTopWidth:oe,borderRightWidth:oe,borderBottomWidth:oe,borderLeftWidth:oe,borderRadius:oe,radius:oe,borderTopLeftRadius:oe,borderTopRightRadius:oe,borderBottomRightRadius:oe,borderBottomLeftRadius:oe,width:oe,maxWidth:oe,height:oe,maxHeight:oe,top:oe,right:oe,bottom:oe,left:oe,padding:oe,paddingTop:oe,paddingRight:oe,paddingBottom:oe,paddingLeft:oe,margin:oe,marginTop:oe,marginRight:oe,marginBottom:oe,marginLeft:oe,backgroundPositionX:oe,backgroundPositionY:oe,...jw,zIndex:Jy,fillOpacity:go,strokeOpacity:go,numOctaves:Jy},Mw={...Kd,color:We,backgroundColor:We,outlineColor:We,fill:We,stroke:We,borderColor:We,borderTopColor:We,borderRightColor:We,borderBottomColor:We,borderLeftColor:We,filter:id,WebkitFilter:id},Vb=t=>Mw[t];function _b(t,i){let o=Vb(t);return o!==id&&(o=ba),o.getAnimatableNone?o.getAnimatableNone(i):void 0}const Dw=new Set(["auto","none","0"]);function zw(t,i,o){let r=0,u;for(;r<t.length&&!u;){const f=t[r];typeof f=="string"&&!Dw.has(f)&&yo(f).values.length&&(u=t[r]),r++}if(u&&o)for(const f of i)t[f]=_b(o,u)}class Rw extends Xd{constructor(i,o,r,u,f){super(i,o,r,u,f,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:o,name:r}=this;if(!o||!o.current)return;super.readKeyframes();for(let h=0;h<i.length;h++){let m=i[h];if(typeof m=="string"&&(m=m.trim(),_d(m))){const y=kb(m,o.current);y!==void 0&&(i[h]=y),h===i.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!Ob.has(r)||i.length!==2)return;const[u,f]=i,d=Fy(u),p=Fy(f);if(d!==p)if(Py(d)&&Py(p))for(let h=0;h<i.length;h++){const m=i[h];typeof m=="string"&&(i[h]=parseFloat(m))}else Ka[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:o}=this,r=[];for(let u=0;u<i.length;u++)(i[u]===null||Aw(i[u]))&&r.push(u);r.length&&zw(i,r,o)}measureInitialState(){const{element:i,unresolvedKeyframes:o,name:r}=this;if(!i||!i.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ka[r](i.measureViewportBox(),window.getComputedStyle(i.current)),o[0]=this.measuredOrigin;const u=o[o.length-1];u!==void 0&&i.getValue(r,u).jump(u,!1)}measureEndState(){const{element:i,name:o,unresolvedKeyframes:r}=this;if(!i||!i.current)return;const u=i.getValue(o);u&&u.jump(this.measuredOrigin,!1);const f=r.length-1,d=r[f];r[f]=Ka[o](i.measureViewportBox(),window.getComputedStyle(i.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,h])=>{i.getValue(p).set(h)}),this.resolveNoneKeyframes()}}function kw(t,i,o){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;const u=o?.[t]??r.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t)}const Lb=(t,i)=>i&&typeof t=="number"?i.transform(t):t;function Bb(t){return tb(t)&&"offsetHeight"in t}const Wy=30,Ow=t=>!isNaN(parseFloat(t));class $w{constructor(i,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{const u=Ct.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=o.owner}setCurrent(i){this.current=i,this.updatedAt=Ct.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=Ow(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,o){this.events[i]||(this.events[i]=new Od);const r=this.events[i].add(o);return i==="change"?()=>{r(),Le.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,o){this.passiveEffect=i,this.stopPassiveEffect=o}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,o,r){this.set(o),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-r}jump(i,o=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=Ct.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>Wy)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Wy);return ab(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(i){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=i(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Fi(t,i){return new $w(t,i)}const{schedule:Qd}=mb(queueMicrotask,!1),sn={x:!1,y:!1};function Ub(){return sn.x||sn.y}function Nw(t){return t==="x"||t==="y"?sn[t]?null:(sn[t]=!0,()=>{sn[t]=!1}):sn.x||sn.y?null:(sn.x=sn.y=!0,()=>{sn.x=sn.y=!1})}function Hb(t,i){const o=kw(t),r=new AbortController,u={passive:!0,...i,signal:r.signal};return[o,u,()=>r.abort()]}function Iy(t){return!(t.pointerType==="touch"||Ub())}function Vw(t,i,o={}){const[r,u,f]=Hb(t,o),d=p=>{if(!Iy(p))return;const{target:h}=p,m=i(h,p);if(typeof m!="function"||!h)return;const y=x=>{Iy(x)&&(m(x),h.removeEventListener("pointerleave",y))};h.addEventListener("pointerleave",y,u)};return r.forEach(p=>{p.addEventListener("pointerenter",d,u)}),f}const qb=(t,i)=>i?t===i?!0:qb(t,i.parentElement):!1,Zd=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,_w=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Lw(t){return _w.has(t.tagName)||t.tabIndex!==-1}const fl=new WeakSet;function e0(t){return i=>{i.key==="Enter"&&t(i)}}function xf(t,i){t.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const Bw=(t,i)=>{const o=t.currentTarget;if(!o)return;const r=e0(()=>{if(fl.has(o))return;xf(o,"down");const u=e0(()=>{xf(o,"up")}),f=()=>xf(o,"cancel");o.addEventListener("keyup",u,i),o.addEventListener("blur",f,i)});o.addEventListener("keydown",r,i),o.addEventListener("blur",()=>o.removeEventListener("keydown",r),i)};function t0(t){return Zd(t)&&!Ub()}function Uw(t,i,o={}){const[r,u,f]=Hb(t,o),d=p=>{const h=p.currentTarget;if(!t0(p))return;fl.add(h);const m=i(h,p),y=(T,j)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",S),fl.has(h)&&fl.delete(h),t0(T)&&typeof m=="function"&&m(T,{success:j})},x=T=>{y(T,h===window||h===document||o.useGlobalTarget||qb(h,T.target))},S=T=>{y(T,!1)};window.addEventListener("pointerup",x,u),window.addEventListener("pointercancel",S,u)};return r.forEach(p=>{(o.useGlobalTarget?window:p).addEventListener("pointerdown",d,u),Bb(p)&&(p.addEventListener("focus",m=>Bw(m,u)),!Lw(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),f}function Gb(t){return tb(t)&&"ownerSVGElement"in t}function Hw(t){return Gb(t)&&t.tagName==="svg"}const ht=t=>!!(t&&t.getVelocity),qw=[...Nb,We,ba],Gw=t=>qw.find($b(t)),Fd=C.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function n0(t,i){if(typeof t=="function")return t(i);t!=null&&(t.current=i)}function Yw(...t){return i=>{let o=!1;const r=t.map(u=>{const f=n0(u,i);return!o&&typeof f=="function"&&(o=!0),f});if(o)return()=>{for(let u=0;u<r.length;u++){const f=r[u];typeof f=="function"?f():n0(t[u],null)}}}}function Xw(...t){return C.useCallback(Yw(...t),t)}class Pw extends C.Component{getSnapshotBeforeUpdate(i){const o=this.props.childRef.current;if(o&&i.isPresent&&!this.props.isPresent){const r=o.offsetParent,u=Bb(r)&&r.offsetWidth||0,f=this.props.sizeRef.current;f.height=o.offsetHeight||0,f.width=o.offsetWidth||0,f.top=o.offsetTop,f.left=o.offsetLeft,f.right=u-f.width-f.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Kw({children:t,isPresent:i,anchorX:o,root:r}){const u=C.useId(),f=C.useRef(null),d=C.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:p}=C.useContext(Fd),h=Xw(f,t?.ref);return C.useInsertionEffect(()=>{const{width:m,height:y,top:x,left:S,right:T}=d.current;if(i||!f.current||!m||!y)return;const j=o==="left"?`left: ${S}`:`right: ${T}`;f.current.dataset.motionPopId=u;const D=document.createElement("style");p&&(D.nonce=p);const z=r??document.head;return z.appendChild(D),D.sheet&&D.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${y}px !important;
            ${j}px !important;
            top: ${x}px !important;
          }
        `),()=>{z.contains(D)&&z.removeChild(D)}},[i]),v.jsx(Pw,{isPresent:i,childRef:f,sizeRef:d,children:C.cloneElement(t,{ref:h})})}const Qw=({children:t,initial:i,isPresent:o,onExitComplete:r,custom:u,presenceAffectsLayout:f,mode:d,anchorX:p,root:h})=>{const m=jd(Zw),y=C.useId();let x=!0,S=C.useMemo(()=>(x=!1,{id:y,initial:i,isPresent:o,custom:u,onExitComplete:T=>{m.set(T,!0);for(const j of m.values())if(!j)return;r&&r()},register:T=>(m.set(T,!1),()=>m.delete(T))}),[o,m,r]);return f&&x&&(S={...S}),C.useMemo(()=>{m.forEach((T,j)=>m.set(j,!1))},[o]),C.useEffect(()=>{!o&&!m.size&&r&&r()},[o]),d==="popLayout"&&(t=v.jsx(Kw,{isPresent:o,anchorX:p,root:h,children:t})),v.jsx($l.Provider,{value:S,children:t})};function Zw(){return new Map}function Yb(t=!0){const i=C.useContext($l);if(i===null)return[!0,null];const{isPresent:o,onExitComplete:r,register:u}=i,f=C.useId();C.useEffect(()=>{if(t)return u(f)},[t]);const d=C.useCallback(()=>t&&r&&r(f),[f,r,t]);return!o&&r?[!1,d]:[!0]}const Ir=t=>t.key||"";function a0(t){const i=[];return C.Children.forEach(t,o=>{C.isValidElement(o)&&i.push(o)}),i}const Nl=({children:t,custom:i,initial:o=!0,onExitComplete:r,presenceAffectsLayout:u=!0,mode:f="sync",propagate:d=!1,anchorX:p="left",root:h})=>{const[m,y]=Yb(d),x=C.useMemo(()=>a0(t),[t]),S=d&&!m?[]:x.map(Ir),T=C.useRef(!0),j=C.useRef(x),D=jd(()=>new Map),[z,R]=C.useState(x),[k,L]=C.useState(x);Iv(()=>{T.current=!1,j.current=x;for(let Z=0;Z<k.length;Z++){const N=Ir(k[Z]);S.includes(N)?D.delete(N):D.get(N)!==!0&&D.set(N,!1)}},[k,S.length,S.join("-")]);const Q=[];if(x!==z){let Z=[...x];for(let N=0;N<k.length;N++){const V=k[N],F=Ir(V);S.includes(F)||(Z.splice(N,0,V),Q.push(V))}return f==="wait"&&Q.length&&(Z=Q),L(a0(Z)),R(x),null}const{forceRender:P}=C.useContext(wd);return v.jsx(v.Fragment,{children:k.map(Z=>{const N=Ir(Z),V=d&&!m?!1:x===k||S.includes(N),F=()=>{if(D.has(N))D.set(N,!0);else return;let ae=!0;D.forEach(se=>{se||(ae=!1)}),ae&&(P?.(),L(j.current),d&&y?.(),r&&r())};return v.jsx(Qw,{isPresent:V,initial:!T.current||o?void 0:!1,custom:i,presenceAffectsLayout:u,mode:f,root:h,onExitComplete:V?void 0:F,anchorX:p,children:Z},N)})})},Xb=C.createContext({strict:!1}),i0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ji={};for(const t in i0)Ji[t]={isEnabled:i=>i0[t].some(o=>!!i[o])};function Fw(t){for(const i in t)Ji[i]={...Ji[i],...t[i]}}const Jw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Al(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Jw.has(t)}let Pb=t=>!Al(t);function Ww(t){typeof t=="function"&&(Pb=i=>i.startsWith("on")?!Al(i):t(i))}try{Ww(require("@emotion/is-prop-valid").default)}catch{}function Iw(t,i,o){const r={};for(const u in t)u==="values"&&typeof t.values=="object"||(Pb(u)||o===!0&&Al(u)||!i&&!Al(u)||t.draggable&&u.startsWith("onDrag"))&&(r[u]=t[u]);return r}const Vl=C.createContext({});function _l(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function vo(t){return typeof t=="string"||Array.isArray(t)}const Jd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Wd=["initial",...Jd];function Ll(t){return _l(t.animate)||Wd.some(i=>vo(t[i]))}function Kb(t){return!!(Ll(t)||t.variants)}function ej(t,i){if(Ll(t)){const{initial:o,animate:r}=t;return{initial:o===!1||vo(o)?o:void 0,animate:vo(r)?r:void 0}}return t.inherit!==!1?i:{}}function tj(t){const{initial:i,animate:o}=ej(t,C.useContext(Vl));return C.useMemo(()=>({initial:i,animate:o}),[s0(i),s0(o)])}function s0(t){return Array.isArray(t)?t.join(" "):t}const bo={};function nj(t){for(const i in t)bo[i]=t[i],Vd(i)&&(bo[i].isCSSVariable=!0)}function Qb(t,{layout:i,layoutId:o}){return is.has(t)||t.startsWith("origin")||(i||o!==void 0)&&(!!bo[t]||t==="opacity")}const aj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ij=as.length;function sj(t,i,o){let r="",u=!0;for(let f=0;f<ij;f++){const d=as[f],p=t[d];if(p===void 0)continue;let h=!0;if(typeof p=="number"?h=p===(d.startsWith("scale")?1:0):h=parseFloat(p)===0,!h||o){const m=Lb(p,Kd[d]);if(!h){u=!1;const y=aj[d]||d;r+=`${y}(${m}) `}o&&(i[d]=m)}}return r=r.trim(),o?r=o(i,u?"":r):u&&(r="none"),r}function Id(t,i,o){const{style:r,vars:u,transformOrigin:f}=t;let d=!1,p=!1;for(const h in i){const m=i[h];if(is.has(h)){d=!0;continue}else if(Vd(h)){u[h]=m;continue}else{const y=Lb(m,Kd[h]);h.startsWith("origin")?(p=!0,f[h]=y):r[h]=y}}if(i.transform||(d||o?r.transform=sj(i,t.transform,o):r.transform&&(r.transform="none")),p){const{originX:h="50%",originY:m="50%",originZ:y=0}=f;r.transformOrigin=`${h} ${m} ${y}`}}const eh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Zb(t,i,o){for(const r in i)!ht(i[r])&&!Qb(r,o)&&(t[r]=i[r])}function oj({transformTemplate:t},i){return C.useMemo(()=>{const o=eh();return Id(o,i,t),Object.assign({},o.vars,o.style)},[i])}function rj(t,i){const o=t.style||{},r={};return Zb(r,o,t),Object.assign(r,oj(t,i)),r}function lj(t,i){const o={},r=rj(t,i);return t.drag&&t.dragListener!==!1&&(o.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(o.tabIndex=0),o.style=r,o}const uj={offset:"stroke-dashoffset",array:"stroke-dasharray"},cj={offset:"strokeDashoffset",array:"strokeDasharray"};function fj(t,i,o=1,r=0,u=!0){t.pathLength=1;const f=u?uj:cj;t[f.offset]=oe.transform(-r);const d=oe.transform(i),p=oe.transform(o);t[f.array]=`${d} ${p}`}function Fb(t,{attrX:i,attrY:o,attrScale:r,pathLength:u,pathSpacing:f=1,pathOffset:d=0,...p},h,m,y){if(Id(t,p,m),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:x,style:S}=t;x.transform&&(S.transform=x.transform,delete x.transform),(S.transform||x.transformOrigin)&&(S.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),S.transform&&(S.transformBox=y?.transformBox??"fill-box",delete x.transformBox),i!==void 0&&(x.x=i),o!==void 0&&(x.y=o),r!==void 0&&(x.scale=r),u!==void 0&&fj(x,u,f,d,!1)}const Jb=()=>({...eh(),attrs:{}}),Wb=t=>typeof t=="string"&&t.toLowerCase()==="svg";function dj(t,i,o,r){const u=C.useMemo(()=>{const f=Jb();return Fb(f,i,Wb(r),t.transformTemplate,t.style),{...f.attrs,style:{...f.style}}},[i]);if(t.style){const f={};Zb(f,t.style,t),u.style={...f,...u.style}}return u}const hj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function th(t){return typeof t!="string"||t.includes("-")?!1:!!(hj.indexOf(t)>-1||/[A-Z]/u.test(t))}function mj(t,i,o,{latestValues:r},u,f=!1){const p=(th(t)?dj:lj)(i,r,u,t),h=Iw(i,typeof t=="string",f),m=t!==C.Fragment?{...h,...p,ref:o}:{},{children:y}=i,x=C.useMemo(()=>ht(y)?y.get():y,[y]);return C.createElement(t,{...m,children:x})}function o0(t){const i=[{},{}];return t?.values.forEach((o,r)=>{i[0][r]=o.get(),i[1][r]=o.getVelocity()}),i}function nh(t,i,o,r){if(typeof i=="function"){const[u,f]=o0(r);i=i(o!==void 0?o:t.custom,u,f)}if(typeof i=="string"&&(i=t.variants&&t.variants[i]),typeof i=="function"){const[u,f]=o0(r);i=i(o!==void 0?o:t.custom,u,f)}return i}function dl(t){return ht(t)?t.get():t}function pj({scrapeMotionValuesFromProps:t,createRenderState:i},o,r,u){return{latestValues:gj(o,r,u,t),renderState:i()}}function gj(t,i,o,r){const u={},f=r(t,{});for(const S in f)u[S]=dl(f[S]);let{initial:d,animate:p}=t;const h=Ll(t),m=Kb(t);i&&m&&!h&&t.inherit!==!1&&(d===void 0&&(d=i.initial),p===void 0&&(p=i.animate));let y=o?o.initial===!1:!1;y=y||d===!1;const x=y?p:d;if(x&&typeof x!="boolean"&&!_l(x)){const S=Array.isArray(x)?x:[x];for(let T=0;T<S.length;T++){const j=nh(t,S[T]);if(j){const{transitionEnd:D,transition:z,...R}=j;for(const k in R){let L=R[k];if(Array.isArray(L)){const Q=y?L.length-1:0;L=L[Q]}L!==null&&(u[k]=L)}for(const k in D)u[k]=D[k]}}}return u}const Ib=t=>(i,o)=>{const r=C.useContext(Vl),u=C.useContext($l),f=()=>pj(t,i,r,u);return o?f():jd(f)};function ah(t,i,o){const{style:r}=t,u={};for(const f in r)(ht(r[f])||i.style&&ht(i.style[f])||Qb(f,t)||o?.getValue(f)?.liveStyle!==void 0)&&(u[f]=r[f]);return u}const yj=Ib({scrapeMotionValuesFromProps:ah,createRenderState:eh});function ex(t,i,o){const r=ah(t,i,o);for(const u in t)if(ht(t[u])||ht(i[u])){const f=as.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;r[f]=t[u]}return r}const vj=Ib({scrapeMotionValuesFromProps:ex,createRenderState:Jb}),bj=Symbol.for("motionComponentSymbol");function Bi(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function xj(t,i,o){return C.useCallback(r=>{r&&t.onMount&&t.onMount(r),i&&(r?i.mount(r):i.unmount()),o&&(typeof o=="function"?o(r):Bi(o)&&(o.current=r))},[i])}const ih=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Sj="framerAppearId",tx="data-"+ih(Sj),nx=C.createContext({});function Tj(t,i,o,r,u){const{visualElement:f}=C.useContext(Vl),d=C.useContext(Xb),p=C.useContext($l),h=C.useContext(Fd).reducedMotion,m=C.useRef(null);r=r||d.renderer,!m.current&&r&&(m.current=r(t,{visualState:i,parent:f,props:o,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:h}));const y=m.current,x=C.useContext(nx);y&&!y.projection&&u&&(y.type==="html"||y.type==="svg")&&Aj(m.current,o,u,x);const S=C.useRef(!1);C.useInsertionEffect(()=>{y&&S.current&&y.update(o,p)});const T=o[tx],j=C.useRef(!!T&&!window.MotionHandoffIsComplete?.(T)&&window.MotionHasOptimisedAnimation?.(T));return Iv(()=>{y&&(S.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),j.current&&y.animationState&&y.animationState.animateChanges())}),C.useEffect(()=>{y&&(!j.current&&y.animationState&&y.animationState.animateChanges(),j.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(T)}),j.current=!1),y.enteringChildren=void 0)}),y}function Aj(t,i,o,r){const{layoutId:u,layout:f,drag:d,dragConstraints:p,layoutScroll:h,layoutRoot:m,layoutCrossfade:y}=i;t.projection=new o(t.latestValues,i["data-framer-portal-id"]?void 0:ax(t.parent)),t.projection.setOptions({layoutId:u,layout:f,alwaysMeasureLayout:!!d||p&&Bi(p),visualElement:t,animationType:typeof f=="string"?f:"both",initialPromotionConfig:r,crossfade:y,layoutScroll:h,layoutRoot:m})}function ax(t){if(t)return t.options.allowProjection!==!1?t.projection:ax(t.parent)}function Sf(t,{forwardMotionProps:i=!1}={},o,r){o&&Fw(o);const u=th(t)?vj:yj;function f(p,h){let m;const y={...C.useContext(Fd),...p,layoutId:Cj(p)},{isStatic:x}=y,S=tj(p),T=u(p,x);if(!x&&Md){Ej();const j=wj(y);m=j.MeasureLayout,S.visualElement=Tj(t,T,y,r,j.ProjectionNode)}return v.jsxs(Vl.Provider,{value:S,children:[m&&S.visualElement?v.jsx(m,{visualElement:S.visualElement,...y}):null,mj(t,p,xj(T,S.visualElement,h),T,x,i)]})}f.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const d=C.forwardRef(f);return d[bj]=t,d}function Cj({layoutId:t}){const i=C.useContext(wd).id;return i&&t!==void 0?i+"-"+t:t}function Ej(t,i){C.useContext(Xb).strict}function wj(t){const{drag:i,layout:o}=Ji;if(!i&&!o)return{};const r={...i,...o};return{MeasureLayout:i?.isEnabled(t)||o?.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function jj(t,i){if(typeof Proxy>"u")return Sf;const o=new Map,r=(f,d)=>Sf(f,d,t,i),u=(f,d)=>r(f,d);return new Proxy(u,{get:(f,d)=>d==="create"?r:(o.has(d)||o.set(d,Sf(d,void 0,t,i)),o.get(d))})}function ix({top:t,left:i,right:o,bottom:r}){return{x:{min:i,max:o},y:{min:t,max:r}}}function Mj({x:t,y:i}){return{top:i.min,right:t.max,bottom:i.max,left:t.min}}function Dj(t,i){if(!i)return t;const o=i({x:t.left,y:t.top}),r=i({x:t.right,y:t.bottom});return{top:o.y,left:o.x,bottom:r.y,right:r.x}}function Tf(t){return t===void 0||t===1}function sd({scale:t,scaleX:i,scaleY:o}){return!Tf(t)||!Tf(i)||!Tf(o)}function qa(t){return sd(t)||sx(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function sx(t){return r0(t.x)||r0(t.y)}function r0(t){return t&&t!=="0%"}function Cl(t,i,o){const r=t-o,u=i*r;return o+u}function l0(t,i,o,r,u){return u!==void 0&&(t=Cl(t,u,r)),Cl(t,o,r)+i}function od(t,i=0,o=1,r,u){t.min=l0(t.min,i,o,r,u),t.max=l0(t.max,i,o,r,u)}function ox(t,{x:i,y:o}){od(t.x,i.translate,i.scale,i.originPoint),od(t.y,o.translate,o.scale,o.originPoint)}const u0=.999999999999,c0=1.0000000000001;function zj(t,i,o,r=!1){const u=o.length;if(!u)return;i.x=i.y=1;let f,d;for(let p=0;p<u;p++){f=o[p],d=f.projectionDelta;const{visualElement:h}=f.options;h&&h.props.style&&h.props.style.display==="contents"||(r&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Hi(t,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,ox(t,d)),r&&qa(f.latestValues)&&Hi(t,f.latestValues))}i.x<c0&&i.x>u0&&(i.x=1),i.y<c0&&i.y>u0&&(i.y=1)}function Ui(t,i){t.min=t.min+i,t.max=t.max+i}function f0(t,i,o,r,u=.5){const f=Be(t.min,t.max,u);od(t,i,o,f,r)}function Hi(t,i){f0(t.x,i.x,i.scaleX,i.scale,i.originX),f0(t.y,i.y,i.scaleY,i.scale,i.originY)}function rx(t,i){return ix(Dj(t.getBoundingClientRect(),i))}function Rj(t,i,o){const r=rx(t,o),{scroll:u}=i;return u&&(Ui(r.x,u.offset.x),Ui(r.y,u.offset.y)),r}const d0=()=>({translate:0,scale:1,origin:0,originPoint:0}),qi=()=>({x:d0(),y:d0()}),h0=()=>({min:0,max:0}),Ke=()=>({x:h0(),y:h0()}),rd={current:null},lx={current:!1};function kj(){if(lx.current=!0,!!Md)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),i=()=>rd.current=t.matches;t.addEventListener("change",i),i()}else rd.current=!1}const Oj=new WeakMap;function $j(t,i,o){for(const r in i){const u=i[r],f=o[r];if(ht(u))t.addValue(r,u);else if(ht(f))t.addValue(r,Fi(u,{owner:t}));else if(f!==u)if(t.hasValue(r)){const d=t.getValue(r);d.liveStyle===!0?d.jump(u):d.hasAnimated||d.set(u)}else{const d=t.getStaticValue(r);t.addValue(r,Fi(d!==void 0?d:u,{owner:t}))}}for(const r in o)i[r]===void 0&&t.removeValue(r);return i}const m0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Nj{scrapeMotionValuesFromProps(i,o,r){return{}}constructor({parent:i,props:o,presenceContext:r,reducedMotionConfig:u,blockInitialAnimation:f,visualState:d},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Xd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Ct.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Le.render(this.render,!1,!0))};const{latestValues:h,renderState:m}=d;this.latestValues=h,this.baseTarget={...h},this.initialValues=o.initial?{...h}:{},this.renderState=m,this.parent=i,this.props=o,this.presenceContext=r,this.depth=i?i.depth+1:0,this.reducedMotionConfig=u,this.options=p,this.blockInitialAnimation=!!f,this.isControllingVariants=Ll(o),this.isVariantNode=Kb(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:y,...x}=this.scrapeMotionValuesFromProps(o,{},this);for(const S in x){const T=x[S];h[S]!==void 0&&ht(T)&&T.set(h[S])}}mount(i){this.current=i,Oj.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,r)=>this.bindToMotionValue(r,o)),lx.current||kj(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:rd.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),va(this.notifyUpdate),va(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const o=this.features[i];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,o){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const r=is.has(i);r&&this.onBindTransform&&this.onBindTransform();const u=o.on("change",d=>{this.latestValues[i]=d,this.props.onUpdate&&Le.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,o)),this.valueSubscriptions.set(i,()=>{u(),f&&f(),o.owner&&o.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Ji){const o=Ji[i];if(!o)continue;const{isEnabled:r,Feature:u}=o;if(!this.features[i]&&u&&r(this.props)&&(this.features[i]=new u(this)),this.features[i]){const f=this.features[i];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ke()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,o){this.latestValues[i]=o}update(i,o){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let r=0;r<m0.length;r++){const u=m0[r];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const f="on"+u,d=i[f];d&&(this.propEventSubscriptions[u]=this.on(u,d))}this.prevMotionValues=$j(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(i),()=>o.variantChildren.delete(i)}addValue(i,o){const r=this.values.get(i);o!==r&&(r&&this.removeValue(i),this.bindToMotionValue(i,o),this.values.set(i,o),this.latestValues[i]=o.get())}removeValue(i){this.values.delete(i);const o=this.valueSubscriptions.get(i);o&&(o(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,o){if(this.props.values&&this.props.values[i])return this.props.values[i];let r=this.values.get(i);return r===void 0&&o!==void 0&&(r=Fi(o===null?void 0:o,{owner:this}),this.addValue(i,r)),r}readValue(i,o){let r=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return r!=null&&(typeof r=="string"&&(eb(r)||nb(r))?r=parseFloat(r):!Gw(r)&&ba.test(o)&&(r=_b(i,o)),this.setBaseTarget(i,ht(r)?r.get():r)),ht(r)?r.get():r}setBaseTarget(i,o){this.baseTarget[i]=o}getBaseTarget(i){const{initial:o}=this.props;let r;if(typeof o=="string"||typeof o=="object"){const f=nh(this.props,o,this.presenceContext?.custom);f&&(r=f[i])}if(o&&r!==void 0)return r;const u=this.getBaseTargetFromProps(this.props,i);return u!==void 0&&!ht(u)?u:this.initialValues[i]!==void 0&&r===void 0?void 0:this.baseTarget[i]}on(i,o){return this.events[i]||(this.events[i]=new Od),this.events[i].add(o)}notify(i,...o){this.events[i]&&this.events[i].notify(...o)}scheduleRenderMicrotask(){Qd.render(this.render)}}class ux extends Nj{constructor(){super(...arguments),this.KeyframeResolver=Rw}sortInstanceNodePosition(i,o){return i.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(i,o){return i.style?i.style[o]:void 0}removeValueFromRenderState(i,{vars:o,style:r}){delete o[i],delete r[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;ht(i)&&(this.childSubscription=i.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function cx(t,{style:i,vars:o},r,u){const f=t.style;let d;for(d in i)f[d]=i[d];u?.applyProjectionStyles(f,r);for(d in o)f.setProperty(d,o[d])}function Vj(t){return window.getComputedStyle(t)}class _j extends ux{constructor(){super(...arguments),this.type="html",this.renderInstance=cx}readValueFromInstance(i,o){if(is.has(o))return this.projection?.isProjecting?Wf(o):FE(i,o);{const r=Vj(i),u=(Vd(o)?r.getPropertyValue(o):r[o])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(i,{transformPagePoint:o}){return rx(i,o)}build(i,o,r){Id(i,o,r.transformTemplate)}scrapeMotionValuesFromProps(i,o,r){return ah(i,o,r)}}const fx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Lj(t,i,o,r){cx(t,i,void 0,r);for(const u in i.attrs)t.setAttribute(fx.has(u)?u:ih(u),i.attrs[u])}class Bj extends ux{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ke}getBaseTargetFromProps(i,o){return i[o]}readValueFromInstance(i,o){if(is.has(o)){const r=Vb(o);return r&&r.default||0}return o=fx.has(o)?o:ih(o),i.getAttribute(o)}scrapeMotionValuesFromProps(i,o,r){return ex(i,o,r)}build(i,o,r){Fb(i,o,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(i,o,r,u){Lj(i,o,r,u)}mount(i){this.isSVGTag=Wb(i.tagName),super.mount(i)}}const Uj=(t,i)=>th(t)?new Bj(i):new _j(i,{allowProjection:t!==C.Fragment});function Gi(t,i,o){const r=t.getProps();return nh(r,i,o!==void 0?o:r.custom,t)}const ld=t=>Array.isArray(t);function Hj(t,i,o){t.hasValue(i)?t.getValue(i).set(o):t.addValue(i,Fi(o))}function qj(t){return ld(t)?t[t.length-1]||0:t}function Gj(t,i){const o=Gi(t,i);let{transitionEnd:r={},transition:u={},...f}=o||{};f={...f,...r};for(const d in f){const p=qj(f[d]);Hj(t,d,p)}}function Yj(t){return!!(ht(t)&&t.add)}function ud(t,i){const o=t.getValue("willChange");if(Yj(o))return o.add(i);if(!o&&Gn.WillChange){const r=new Gn.WillChange("auto");t.addValue("willChange",r),r.add(i)}}function dx(t){return t.props[tx]}const Xj=t=>t!==null;function Pj(t,{repeat:i,repeatType:o="loop"},r){const u=t.filter(Xj),f=i&&o!=="loop"&&i%2===1?0:u.length-1;return u[f]}const Kj={type:"spring",stiffness:500,damping:25,restSpeed:10},Qj=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Zj={type:"keyframes",duration:.8},Fj={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Jj=(t,{keyframes:i})=>i.length>2?Zj:is.has(t)?t.startsWith("scale")?Qj(i[1]):Kj:Fj;function Wj({when:t,delay:i,delayChildren:o,staggerChildren:r,staggerDirection:u,repeat:f,repeatType:d,repeatDelay:p,from:h,elapsed:m,...y}){return!!Object.keys(y).length}const sh=(t,i,o,r={},u,f)=>d=>{const p=Pd(r,t)||{},h=p.delay||r.delay||0;let{elapsed:m=0}=r;m=m-hn(h);const y={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:i.getVelocity(),...p,delay:-m,onUpdate:S=>{i.set(S),p.onUpdate&&p.onUpdate(S)},onComplete:()=>{d(),p.onComplete&&p.onComplete()},name:t,motionValue:i,element:f?void 0:u};Wj(p)||Object.assign(y,Jj(t,y)),y.duration&&(y.duration=hn(y.duration)),y.repeatDelay&&(y.repeatDelay=hn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let x=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(ad(y),y.delay===0&&(x=!0)),(Gn.instantAnimations||Gn.skipAnimations)&&(x=!0,ad(y),y.delay=0),y.allowFlatten=!p.type&&!p.ease,x&&!f&&i.get()!==void 0){const S=Pj(y.keyframes,p);if(S!==void 0){Le.update(()=>{y.onUpdate(S),y.onComplete()});return}}return p.isSync?new Yd(y):new bw(y)};function Ij({protectedKeys:t,needsAnimating:i},o){const r=t.hasOwnProperty(o)&&i[o]!==!0;return i[o]=!1,r}function hx(t,i,{delay:o=0,transitionOverride:r,type:u}={}){let{transition:f=t.getDefaultTransition(),transitionEnd:d,...p}=i;r&&(f=r);const h=[],m=u&&t.animationState&&t.animationState.getState()[u];for(const y in p){const x=t.getValue(y,t.latestValues[y]??null),S=p[y];if(S===void 0||m&&Ij(m,y))continue;const T={delay:o,...Pd(f||{},y)},j=x.get();if(j!==void 0&&!x.isAnimating&&!Array.isArray(S)&&S===j&&!T.velocity)continue;let D=!1;if(window.MotionHandoffAnimation){const R=dx(t);if(R){const k=window.MotionHandoffAnimation(R,y,Le);k!==null&&(T.startTime=k,D=!0)}}ud(t,y),x.start(sh(y,x,S,t.shouldReduceMotion&&Ob.has(y)?{type:!1}:T,t,D));const z=x.animation;z&&h.push(z)}return d&&Promise.all(h).then(()=>{Le.update(()=>{d&&Gj(t,d)})}),h}function mx(t,i,o,r=0,u=1){const f=Array.from(t).sort((m,y)=>m.sortNodePosition(y)).indexOf(i),d=t.size,p=(d-1)*r;return typeof o=="function"?o(f,d):u===1?f*r:p-f*r}function cd(t,i,o={}){const r=Gi(t,i,o.type==="exit"?t.presenceContext?.custom:void 0);let{transition:u=t.getDefaultTransition()||{}}=r||{};o.transitionOverride&&(u=o.transitionOverride);const f=r?()=>Promise.all(hx(t,r,o)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:y,staggerDirection:x}=u;return eM(t,i,h,m,y,x,o)}:()=>Promise.resolve(),{when:p}=u;if(p){const[h,m]=p==="beforeChildren"?[f,d]:[d,f];return h().then(()=>m())}else return Promise.all([f(),d(o.delay)])}function eM(t,i,o=0,r=0,u=0,f=1,d){const p=[];for(const h of t.variantChildren)h.notify("AnimationStart",i),p.push(cd(h,i,{...d,delay:o+(typeof r=="function"?0:r)+mx(t.variantChildren,h,r,u,f)}).then(()=>h.notify("AnimationComplete",i)));return Promise.all(p)}function tM(t,i,o={}){t.notify("AnimationStart",i);let r;if(Array.isArray(i)){const u=i.map(f=>cd(t,f,o));r=Promise.all(u)}else if(typeof i=="string")r=cd(t,i,o);else{const u=typeof i=="function"?Gi(t,i,o.custom):i;r=Promise.all(hx(t,u,o))}return r.then(()=>{t.notify("AnimationComplete",i)})}function px(t,i){if(!Array.isArray(i))return!1;const o=i.length;if(o!==t.length)return!1;for(let r=0;r<o;r++)if(i[r]!==t[r])return!1;return!0}const nM=Wd.length;function gx(t){if(!t)return;if(!t.isControllingVariants){const o=t.parent?gx(t.parent)||{}:{};return t.props.initial!==void 0&&(o.initial=t.props.initial),o}const i={};for(let o=0;o<nM;o++){const r=Wd[o],u=t.props[r];(vo(u)||u===!1)&&(i[r]=u)}return i}const aM=[...Jd].reverse(),iM=Jd.length;function sM(t){return i=>Promise.all(i.map(({animation:o,options:r})=>tM(t,o,r)))}function oM(t){let i=sM(t),o=p0(),r=!0;const u=h=>(m,y)=>{const x=Gi(t,y,h==="exit"?t.presenceContext?.custom:void 0);if(x){const{transition:S,transitionEnd:T,...j}=x;m={...m,...j,...T}}return m};function f(h){i=h(t)}function d(h){const{props:m}=t,y=gx(t.parent)||{},x=[],S=new Set;let T={},j=1/0;for(let z=0;z<iM;z++){const R=aM[z],k=o[R],L=m[R]!==void 0?m[R]:y[R],Q=vo(L),P=R===h?k.isActive:null;P===!1&&(j=z);let Z=L===y[R]&&L!==m[R]&&Q;if(Z&&r&&t.manuallyAnimateOnMount&&(Z=!1),k.protectedKeys={...T},!k.isActive&&P===null||!L&&!k.prevProp||_l(L)||typeof L=="boolean")continue;const N=rM(k.prevProp,L);let V=N||R===h&&k.isActive&&!Z&&Q||z>j&&Q,F=!1;const ae=Array.isArray(L)?L:[L];let se=ae.reduce(u(R),{});P===!1&&(se={});const{prevResolvedValues:Oe={}}=k,en={...Oe,...se},gt=K=>{V=!0,S.has(K)&&(F=!0,S.delete(K)),k.needsAnimating[K]=!0;const ee=t.getValue(K);ee&&(ee.liveStyle=!1)};for(const K in en){const ee=se[K],le=Oe[K];if(T.hasOwnProperty(K))continue;let pe=!1;ld(ee)&&ld(le)?pe=!px(ee,le):pe=ee!==le,pe?ee!=null?gt(K):S.add(K):ee!==void 0&&S.has(K)?gt(K):k.protectedKeys[K]=!0}k.prevProp=L,k.prevResolvedValues=se,k.isActive&&(T={...T,...se}),r&&t.blockInitialAnimation&&(V=!1);const ft=Z&&N;V&&(!ft||F)&&x.push(...ae.map(K=>{const ee={type:R};if(typeof K=="string"&&r&&!ft&&t.manuallyAnimateOnMount&&t.parent){const{parent:le}=t,pe=Gi(le,K);if(le.enteringChildren&&pe){const{delayChildren:E}=pe.transition||{};ee.delay=mx(le.enteringChildren,t,E)}}return{animation:K,options:ee}}))}if(S.size){const z={};if(typeof m.initial!="boolean"){const R=Gi(t,Array.isArray(m.initial)?m.initial[0]:m.initial);R&&R.transition&&(z.transition=R.transition)}S.forEach(R=>{const k=t.getBaseTarget(R),L=t.getValue(R);L&&(L.liveStyle=!0),z[R]=k??null}),x.push({animation:z})}let D=!!x.length;return r&&(m.initial===!1||m.initial===m.animate)&&!t.manuallyAnimateOnMount&&(D=!1),r=!1,D?i(x):Promise.resolve()}function p(h,m){if(o[h].isActive===m)return Promise.resolve();t.variantChildren?.forEach(x=>x.animationState?.setActive(h,m)),o[h].isActive=m;const y=d(h);for(const x in o)o[x].protectedKeys={};return y}return{animateChanges:d,setActive:p,setAnimateFunction:f,getState:()=>o,reset:()=>{o=p0()}}}function rM(t,i){return typeof i=="string"?i!==t:Array.isArray(i)?!px(i,t):!1}function Ha(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function p0(){return{animate:Ha(!0),whileInView:Ha(),whileHover:Ha(),whileTap:Ha(),whileDrag:Ha(),whileFocus:Ha(),exit:Ha()}}class Sa{constructor(i){this.isMounted=!1,this.node=i}update(){}}class lM extends Sa{constructor(i){super(i),i.animationState||(i.animationState=oM(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();_l(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:o}=this.node.prevProps||{};i!==o&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let uM=0;class cM extends Sa{constructor(){super(...arguments),this.id=uM++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:o}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===r)return;const u=this.node.animationState.setActive("exit",!i);o&&!i&&u.then(()=>{o(this.id)})}mount(){const{register:i,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const fM={animation:{Feature:lM},exit:{Feature:cM}};function xo(t,i,o,r={passive:!0}){return t.addEventListener(i,o,r),()=>t.removeEventListener(i,o)}function Mo(t){return{point:{x:t.pageX,y:t.pageY}}}const dM=t=>i=>Zd(i)&&t(i,Mo(i));function lo(t,i,o,r){return xo(t,i,dM(o),r)}const yx=1e-4,hM=1-yx,mM=1+yx,vx=.01,pM=0-vx,gM=0+vx;function pt(t){return t.max-t.min}function yM(t,i,o){return Math.abs(t-i)<=o}function g0(t,i,o,r=.5){t.origin=r,t.originPoint=Be(i.min,i.max,t.origin),t.scale=pt(o)/pt(i),t.translate=Be(o.min,o.max,t.origin)-t.originPoint,(t.scale>=hM&&t.scale<=mM||isNaN(t.scale))&&(t.scale=1),(t.translate>=pM&&t.translate<=gM||isNaN(t.translate))&&(t.translate=0)}function uo(t,i,o,r){g0(t.x,i.x,o.x,r?r.originX:void 0),g0(t.y,i.y,o.y,r?r.originY:void 0)}function y0(t,i,o){t.min=o.min+i.min,t.max=t.min+pt(i)}function vM(t,i,o){y0(t.x,i.x,o.x),y0(t.y,i.y,o.y)}function v0(t,i,o){t.min=i.min-o.min,t.max=t.min+pt(i)}function co(t,i,o){v0(t.x,i.x,o.x),v0(t.y,i.y,o.y)}function Zt(t){return[t("x"),t("y")]}const bx=({current:t})=>t?t.ownerDocument.defaultView:null,b0=(t,i)=>Math.abs(t-i);function bM(t,i){const o=b0(t.x,i.x),r=b0(t.y,i.y);return Math.sqrt(o**2+r**2)}class xx{constructor(i,o,{transformPagePoint:r,contextWindow:u=window,dragSnapToOrigin:f=!1,distanceThreshold:d=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Cf(this.lastMoveEventInfo,this.history),T=this.startEvent!==null,j=bM(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!T&&!j)return;const{point:D}=S,{timestamp:z}=ct;this.history.push({...D,timestamp:z});const{onStart:R,onMove:k}=this.handlers;T||(R&&R(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),k&&k(this.lastMoveEvent,S)},this.handlePointerMove=(S,T)=>{this.lastMoveEvent=S,this.lastMoveEventInfo=Af(T,this.transformPagePoint),Le.update(this.updatePoint,!0)},this.handlePointerUp=(S,T)=>{this.end();const{onEnd:j,onSessionEnd:D,resumeAnimation:z}=this.handlers;if(this.dragSnapToOrigin&&z&&z(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const R=Cf(S.type==="pointercancel"?this.lastMoveEventInfo:Af(T,this.transformPagePoint),this.history);this.startEvent&&j&&j(S,R),D&&D(S,R)},!Zd(i))return;this.dragSnapToOrigin=f,this.handlers=o,this.transformPagePoint=r,this.distanceThreshold=d,this.contextWindow=u||window;const p=Mo(i),h=Af(p,this.transformPagePoint),{point:m}=h,{timestamp:y}=ct;this.history=[{...m,timestamp:y}];const{onSessionStart:x}=o;x&&x(i,Cf(h,this.history)),this.removeListeners=Eo(lo(this.contextWindow,"pointermove",this.handlePointerMove),lo(this.contextWindow,"pointerup",this.handlePointerUp),lo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),va(this.updatePoint)}}function Af(t,i){return i?{point:i(t.point)}:t}function x0(t,i){return{x:t.x-i.x,y:t.y-i.y}}function Cf({point:t},i){return{point:t,delta:x0(t,Sx(i)),offset:x0(t,xM(i)),velocity:SM(i,.1)}}function xM(t){return t[0]}function Sx(t){return t[t.length-1]}function SM(t,i){if(t.length<2)return{x:0,y:0};let o=t.length-1,r=null;const u=Sx(t);for(;o>=0&&(r=t[o],!(u.timestamp-r.timestamp>hn(i)));)o--;if(!r)return{x:0,y:0};const f=Jt(u.timestamp-r.timestamp);if(f===0)return{x:0,y:0};const d={x:(u.x-r.x)/f,y:(u.y-r.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function TM(t,{min:i,max:o},r){return i!==void 0&&t<i?t=r?Be(i,t,r.min):Math.max(t,i):o!==void 0&&t>o&&(t=r?Be(o,t,r.max):Math.min(t,o)),t}function S0(t,i,o){return{min:i!==void 0?t.min+i:void 0,max:o!==void 0?t.max+o-(t.max-t.min):void 0}}function AM(t,{top:i,left:o,bottom:r,right:u}){return{x:S0(t.x,o,u),y:S0(t.y,i,r)}}function T0(t,i){let o=i.min-t.min,r=i.max-t.max;return i.max-i.min<t.max-t.min&&([o,r]=[r,o]),{min:o,max:r}}function CM(t,i){return{x:T0(t.x,i.x),y:T0(t.y,i.y)}}function EM(t,i){let o=.5;const r=pt(t),u=pt(i);return u>r?o=po(i.min,i.max-r,t.min):r>u&&(o=po(t.min,t.max-u,i.min)),qn(0,1,o)}function wM(t,i){const o={};return i.min!==void 0&&(o.min=i.min-t.min),i.max!==void 0&&(o.max=i.max-t.min),o}const fd=.35;function jM(t=fd){return t===!1?t=0:t===!0&&(t=fd),{x:A0(t,"left","right"),y:A0(t,"top","bottom")}}function A0(t,i,o){return{min:C0(t,i),max:C0(t,o)}}function C0(t,i){return typeof t=="number"?t:t[i]||0}const MM=new WeakMap;class DM{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ke(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:o=!1,distanceThreshold:r}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const f=x=>{const{dragSnapToOrigin:S}=this.getProps();S?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(Mo(x).point)},d=(x,S)=>{const{drag:T,dragPropagation:j,onDragStart:D}=this.getProps();if(T&&!j&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Nw(T),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Zt(R=>{let k=this.getAxisMotionValue(R).get()||0;if(mn.test(k)){const{projection:L}=this.visualElement;if(L&&L.layout){const Q=L.layout.layoutBox[R];Q&&(k=pt(Q)*(parseFloat(k)/100))}}this.originPoint[R]=k}),D&&Le.postRender(()=>D(x,S)),ud(this.visualElement,"transform");const{animationState:z}=this.visualElement;z&&z.setActive("whileDrag",!0)},p=(x,S)=>{this.latestPointerEvent=x,this.latestPanInfo=S;const{dragPropagation:T,dragDirectionLock:j,onDirectionLock:D,onDrag:z}=this.getProps();if(!T&&!this.openDragLock)return;const{offset:R}=S;if(j&&this.currentDirection===null){this.currentDirection=zM(R),this.currentDirection!==null&&D&&D(this.currentDirection);return}this.updateAxis("x",S.point,R),this.updateAxis("y",S.point,R),this.visualElement.render(),z&&z(x,S)},h=(x,S)=>{this.latestPointerEvent=x,this.latestPanInfo=S,this.stop(x,S),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>Zt(x=>this.getAnimationState(x)==="paused"&&this.getAxisMotionValue(x).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new xx(i,{onSessionStart:f,onStart:d,onMove:p,onSessionEnd:h,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:r,contextWindow:bx(this.visualElement)})}stop(i,o){const r=i||this.latestPointerEvent,u=o||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!u||!r)return;const{velocity:d}=u;this.startAnimation(d);const{onDragEnd:p}=this.getProps();p&&Le.postRender(()=>p(r,u))}cancel(){this.isDragging=!1;const{projection:i,animationState:o}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(i,o,r){const{drag:u}=this.getProps();if(!r||!el(i,u,this.currentDirection))return;const f=this.getAxisMotionValue(i);let d=this.originPoint[i]+r[i];this.constraints&&this.constraints[i]&&(d=TM(d,this.constraints[i],this.elastic[i])),f.set(d)}resolveConstraints(){const{dragConstraints:i,dragElastic:o}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;i&&Bi(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&r?this.constraints=AM(r.layoutBox,i):this.constraints=!1,this.elastic=jM(o),u!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Zt(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=wM(r.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:o}=this.getProps();if(!i||!Bi(i))return!1;const r=i.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const f=Rj(r,u.root,this.visualElement.getTransformPagePoint());let d=CM(u.layout.layoutBox,f);if(o){const p=o(Mj(d));this.hasMutatedConstraints=!!p,p&&(d=ix(p))}return d}startAnimation(i){const{drag:o,dragMomentum:r,dragElastic:u,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:p}=this.getProps(),h=this.constraints||{},m=Zt(y=>{if(!el(y,o,this.currentDirection))return;let x=h&&h[y]||{};d&&(x={min:0,max:0});const S=u?200:1e6,T=u?40:1e7,j={type:"inertia",velocity:r?i[y]:0,bounceStiffness:S,bounceDamping:T,timeConstant:750,restDelta:1,restSpeed:10,...f,...x};return this.startAxisValueAnimation(y,j)});return Promise.all(m).then(p)}startAxisValueAnimation(i,o){const r=this.getAxisMotionValue(i);return ud(this.visualElement,i),r.start(sh(i,r,0,o,this.visualElement,!1))}stopAnimation(){Zt(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){Zt(i=>this.getAxisMotionValue(i).animation?.pause())}getAnimationState(i){return this.getAxisMotionValue(i).animation?.state}getAxisMotionValue(i){const o=`_drag${i.toUpperCase()}`,r=this.visualElement.getProps(),u=r[o];return u||this.visualElement.getValue(i,(r.initial?r.initial[i]:void 0)||0)}snapToCursor(i){Zt(o=>{const{drag:r}=this.getProps();if(!el(o,r,this.currentDirection))return;const{projection:u}=this.visualElement,f=this.getAxisMotionValue(o);if(u&&u.layout){const{min:d,max:p}=u.layout.layoutBox[o];f.set(i[o]-Be(d,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:o}=this.getProps(),{projection:r}=this.visualElement;if(!Bi(o)||!r||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Zt(d=>{const p=this.getAxisMotionValue(d);if(p&&this.constraints!==!1){const h=p.get();u[d]=EM({min:h,max:h},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Zt(d=>{if(!el(d,i,null))return;const p=this.getAxisMotionValue(d),{min:h,max:m}=this.constraints[d];p.set(Be(h,m,u[d]))})}addListeners(){if(!this.visualElement.current)return;MM.set(this.visualElement,this);const i=this.visualElement.current,o=lo(i,"pointerdown",h=>{const{drag:m,dragListener:y=!0}=this.getProps();m&&y&&this.start(h)}),r=()=>{const{dragConstraints:h}=this.getProps();Bi(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,f=u.addEventListener("measure",r);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),Le.read(r);const d=xo(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:m})=>{this.isDragging&&m&&(Zt(y=>{const x=this.getAxisMotionValue(y);x&&(this.originPoint[y]+=h[y].translate,x.set(x.get()+h[y].translate))}),this.visualElement.render())}));return()=>{d(),o(),f(),p&&p()}}getProps(){const i=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:r=!1,dragPropagation:u=!1,dragConstraints:f=!1,dragElastic:d=fd,dragMomentum:p=!0}=i;return{...i,drag:o,dragDirectionLock:r,dragPropagation:u,dragConstraints:f,dragElastic:d,dragMomentum:p}}}function el(t,i,o){return(i===!0||i===t)&&(o===null||o===t)}function zM(t,i=10){let o=null;return Math.abs(t.y)>i?o="y":Math.abs(t.x)>i&&(o="x"),o}class RM extends Sa{constructor(i){super(i),this.removeGroupControls=Wt,this.removeListeners=Wt,this.controls=new DM(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Wt}unmount(){this.removeGroupControls(),this.removeListeners()}}const E0=t=>(i,o)=>{t&&Le.postRender(()=>t(i,o))};class kM extends Sa{constructor(){super(...arguments),this.removePointerDownListener=Wt}onPointerDown(i){this.session=new xx(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:bx(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:o,onPan:r,onPanEnd:u}=this.node.getProps();return{onSessionStart:E0(i),onStart:E0(o),onMove:r,onEnd:(f,d)=>{delete this.session,u&&Le.postRender(()=>u(f,d))}}}mount(){this.removePointerDownListener=lo(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const hl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function w0(t,i){return i.max===i.min?0:t/(i.max-i.min)*100}const to={correct:(t,i)=>{if(!i.target)return t;if(typeof t=="string")if(oe.test(t))t=parseFloat(t);else return t;const o=w0(t,i.target.x),r=w0(t,i.target.y);return`${o}% ${r}%`}},OM={correct:(t,{treeScale:i,projectionDelta:o})=>{const r=t,u=ba.parse(t);if(u.length>5)return r;const f=ba.createTransformer(t),d=typeof u[0]!="number"?1:0,p=o.x.scale*i.x,h=o.y.scale*i.y;u[0+d]/=p,u[1+d]/=h;const m=Be(p,h,.5);return typeof u[2+d]=="number"&&(u[2+d]/=m),typeof u[3+d]=="number"&&(u[3+d]/=m),f(u)}};let Ef=!1;class $M extends C.Component{componentDidMount(){const{visualElement:i,layoutGroup:o,switchLayoutGroup:r,layoutId:u}=this.props,{projection:f}=i;nj(NM),f&&(o.group&&o.group.add(f),r&&r.register&&u&&r.register(f),Ef&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,onExitComplete:()=>this.safeToRemove()})),hl.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:o,visualElement:r,drag:u,isPresent:f}=this.props,{projection:d}=r;return d&&(d.isPresent=f,Ef=!0,u||i.layoutDependency!==o||o===void 0||i.isPresent!==f?d.willUpdate():this.safeToRemove(),i.isPresent!==f&&(f?d.promote():d.relegate()||Le.postRender(()=>{const p=d.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),Qd.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:o,switchLayoutGroup:r}=this.props,{projection:u}=i;Ef=!0,u&&(u.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(u),r&&r.deregister&&r.deregister(u))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Tx(t){const[i,o]=Yb(),r=C.useContext(wd);return v.jsx($M,{...t,layoutGroup:r,switchLayoutGroup:C.useContext(nx),isPresent:i,safeToRemove:o})}const NM={borderRadius:{...to,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:to,borderTopRightRadius:to,borderBottomLeftRadius:to,borderBottomRightRadius:to,boxShadow:OM};function VM(t,i,o){const r=ht(t)?t:Fi(t);return r.start(sh("",r,i,o)),r.animation}const _M=(t,i)=>t.depth-i.depth;class LM{constructor(){this.children=[],this.isDirty=!1}add(i){Dd(this.children,i),this.isDirty=!0}remove(i){zd(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(_M),this.isDirty=!1,this.children.forEach(i)}}function BM(t,i){const o=Ct.now(),r=({timestamp:u})=>{const f=u-o;f>=i&&(va(r),t(f-i))};return Le.setup(r,!0),()=>va(r)}const Ax=["TopLeft","TopRight","BottomLeft","BottomRight"],UM=Ax.length,j0=t=>typeof t=="string"?parseFloat(t):t,M0=t=>typeof t=="number"||oe.test(t);function HM(t,i,o,r,u,f){u?(t.opacity=Be(0,o.opacity??1,qM(r)),t.opacityExit=Be(i.opacity??1,0,GM(r))):f&&(t.opacity=Be(i.opacity??1,o.opacity??1,r));for(let d=0;d<UM;d++){const p=`border${Ax[d]}Radius`;let h=D0(i,p),m=D0(o,p);if(h===void 0&&m===void 0)continue;h||(h=0),m||(m=0),h===0||m===0||M0(h)===M0(m)?(t[p]=Math.max(Be(j0(h),j0(m),r),0),(mn.test(m)||mn.test(h))&&(t[p]+="%")):t[p]=m}(i.rotate||o.rotate)&&(t.rotate=Be(i.rotate||0,o.rotate||0,r))}function D0(t,i){return t[i]!==void 0?t[i]:t.borderRadius}const qM=Cx(0,.5,cb),GM=Cx(.5,.95,Wt);function Cx(t,i,o){return r=>r<t?0:r>i?1:o(po(t,i,r))}function z0(t,i){t.min=i.min,t.max=i.max}function Kt(t,i){z0(t.x,i.x),z0(t.y,i.y)}function R0(t,i){t.translate=i.translate,t.scale=i.scale,t.originPoint=i.originPoint,t.origin=i.origin}function k0(t,i,o,r,u){return t-=i,t=Cl(t,1/o,r),u!==void 0&&(t=Cl(t,1/u,r)),t}function YM(t,i=0,o=1,r=.5,u,f=t,d=t){if(mn.test(i)&&(i=parseFloat(i),i=Be(d.min,d.max,i/100)-d.min),typeof i!="number")return;let p=Be(f.min,f.max,r);t===f&&(p-=i),t.min=k0(t.min,i,o,p,u),t.max=k0(t.max,i,o,p,u)}function O0(t,i,[o,r,u],f,d){YM(t,i[o],i[r],i[u],i.scale,f,d)}const XM=["x","scaleX","originX"],PM=["y","scaleY","originY"];function $0(t,i,o,r){O0(t.x,i,XM,o?o.x:void 0,r?r.x:void 0),O0(t.y,i,PM,o?o.y:void 0,r?r.y:void 0)}function N0(t){return t.translate===0&&t.scale===1}function Ex(t){return N0(t.x)&&N0(t.y)}function V0(t,i){return t.min===i.min&&t.max===i.max}function KM(t,i){return V0(t.x,i.x)&&V0(t.y,i.y)}function _0(t,i){return Math.round(t.min)===Math.round(i.min)&&Math.round(t.max)===Math.round(i.max)}function wx(t,i){return _0(t.x,i.x)&&_0(t.y,i.y)}function L0(t){return pt(t.x)/pt(t.y)}function B0(t,i){return t.translate===i.translate&&t.scale===i.scale&&t.originPoint===i.originPoint}class QM{constructor(){this.members=[]}add(i){Dd(this.members,i),i.scheduleRender()}remove(i){if(zd(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(i){const o=this.members.findIndex(u=>i===u);if(o===0)return!1;let r;for(let u=o;u>=0;u--){const f=this.members[u];if(f.isPresent!==!1){r=f;break}}return r?(this.promote(r),!0):!1}promote(i,o){const r=this.lead;if(i!==r&&(this.prevLead=r,this.lead=i,i.show(),r)){r.instance&&r.scheduleRender(),i.scheduleRender(),i.resumeFrom=r,o&&(i.resumeFrom.preserveOpacity=!0),r.snapshot&&(i.snapshot=r.snapshot,i.snapshot.latestValues=r.animationValues||r.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:u}=i.options;u===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:o,resumingFrom:r}=i;o.onExitComplete&&o.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function ZM(t,i,o){let r="";const u=t.x.translate/i.x,f=t.y.translate/i.y,d=o?.z||0;if((u||f||d)&&(r=`translate3d(${u}px, ${f}px, ${d}px) `),(i.x!==1||i.y!==1)&&(r+=`scale(${1/i.x}, ${1/i.y}) `),o){const{transformPerspective:m,rotate:y,rotateX:x,rotateY:S,skewX:T,skewY:j}=o;m&&(r=`perspective(${m}px) ${r}`),y&&(r+=`rotate(${y}deg) `),x&&(r+=`rotateX(${x}deg) `),S&&(r+=`rotateY(${S}deg) `),T&&(r+=`skewX(${T}deg) `),j&&(r+=`skewY(${j}deg) `)}const p=t.x.scale*i.x,h=t.y.scale*i.y;return(p!==1||h!==1)&&(r+=`scale(${p}, ${h})`),r||"none"}const wf=["","X","Y","Z"],FM=1e3;let JM=0;function jf(t,i,o,r){const{latestValues:u}=i;u[t]&&(o[t]=u[t],i.setStaticValue(t,0),r&&(r[t]=0))}function jx(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:i}=t.options;if(!i)return;const o=dx(i);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:u,layoutId:f}=t.options;window.MotionCancelOptimisedAnimation(o,"transform",Le,!(u||f))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&jx(r)}function Mx({attachResizeListener:t,defaultParent:i,measureScroll:o,checkIsScrollRoot:r,resetTransform:u}){return class{constructor(d={},p=i?.()){this.id=JM++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(e2),this.nodes.forEach(i2),this.nodes.forEach(s2),this.nodes.forEach(t2)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new LM)}addEventListener(d,p){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Od),this.eventHandlers.get(d).add(p)}notifyListeners(d,...p){const h=this.eventHandlers.get(d);h&&h.notify(...p)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Gb(d)&&!Hw(d),this.instance=d;const{layoutId:p,layout:h,visualElement:m}=this.options;if(m&&!m.current&&m.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||p)&&(this.isLayoutDirty=!0),t){let y,x=0;const S=()=>this.root.updateBlockedByResize=!1;Le.read(()=>{x=window.innerWidth}),t(d,()=>{const T=window.innerWidth;T!==x&&(x=T,this.root.updateBlockedByResize=!0,y&&y(),y=BM(S,250),hl.hasAnimatedSinceResize&&(hl.hasAnimatedSinceResize=!1,this.nodes.forEach(q0)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&m&&(p||h)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:x,hasRelativeLayoutChanged:S,layout:T})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const j=this.options.transition||m.getDefaultTransition()||c2,{onLayoutAnimationStart:D,onLayoutAnimationComplete:z}=m.getProps(),R=!this.targetLayout||!wx(this.targetLayout,T),k=!x&&S;if(this.options.layoutRoot||this.resumeFrom||k||x&&(R||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Pd(j,"layout"),onPlay:D,onComplete:z};(m.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(y,k)}else x||q0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=T})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),va(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(o2),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&jx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const x=this.path[y];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:p,layout:h}=this.options;if(p===void 0&&!h)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(U0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(H0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(a2),this.nodes.forEach(WM),this.nodes.forEach(IM)):this.nodes.forEach(H0),this.clearAllSnapshots();const p=Ct.now();ct.delta=qn(0,1e3/60,p-ct.timestamp),ct.timestamp=p,ct.isProcessing=!0,pf.update.process(ct),pf.preRender.process(ct),pf.render.process(ct),ct.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Qd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(n2),this.sharedNodes.forEach(r2)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Le.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Le.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!pt(this.snapshot.measuredBox.x)&&!pt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ke(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(p=!1),p&&this.instance){const h=r(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:h,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!u)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!Ex(this.projectionDelta),h=this.getTransformTemplate(),m=h?h(this.latestValues,""):void 0,y=m!==this.prevTransformTemplateValue;d&&this.instance&&(p||qa(this.latestValues)||y)&&(u(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const p=this.measurePageBox();let h=this.removeElementScroll(p);return d&&(h=this.removeTransform(h)),f2(h),{animationId:this.root.animationId,measuredBox:p,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:d}=this.options;if(!d)return Ke();const p=d.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(d2))){const{scroll:m}=this.root;m&&(Ui(p.x,m.offset.x),Ui(p.y,m.offset.y))}return p}removeElementScroll(d){const p=Ke();if(Kt(p,d),this.scroll?.wasRoot)return p;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:y,options:x}=m;m!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&Kt(p,d),Ui(p.x,y.offset.x),Ui(p.y,y.offset.y))}return p}applyTransform(d,p=!1){const h=Ke();Kt(h,d);for(let m=0;m<this.path.length;m++){const y=this.path[m];!p&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Hi(h,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),qa(y.latestValues)&&Hi(h,y.latestValues)}return qa(this.latestValues)&&Hi(h,this.latestValues),h}removeTransform(d){const p=Ke();Kt(p,d);for(let h=0;h<this.path.length;h++){const m=this.path[h];if(!m.instance||!qa(m.latestValues))continue;sd(m.latestValues)&&m.updateSnapshot();const y=Ke(),x=m.measurePageBox();Kt(y,x),$0(p,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,y)}return qa(this.latestValues)&&$0(p,this.latestValues),p}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ct.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==p;if(!(d||h&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:x}=this.options;if(!(!this.layout||!(y||x))){if(this.resolvedRelativeTargetAt=ct.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ke(),this.relativeTargetOrigin=Ke(),co(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),Kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ke(),this.targetWithTransforms=Ke()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),vM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Kt(this.target,this.layout.layoutBox),ox(this.target,this.targetDelta)):Kt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ke(),this.relativeTargetOrigin=Ke(),co(this.relativeTargetOrigin,this.target,S.target),Kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||sd(this.parent.latestValues)||sx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const d=this.getLead(),p=!!this.resumingFrom||this!==d;let h=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(h=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===ct.timestamp&&(h=!1),h)return;const{layout:m,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||y))return;Kt(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,S=this.treeScale.y;zj(this.layoutCorrected,this.treeScale,this.path,p),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Ke());const{target:T}=d;if(!T){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(R0(this.prevProjectionDelta.x,this.projectionDelta.x),R0(this.prevProjectionDelta.y,this.projectionDelta.y)),uo(this.projectionDelta,this.layoutCorrected,T,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==S||!B0(this.projectionDelta.x,this.prevProjectionDelta.x)||!B0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",T))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){if(this.options.visualElement?.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=qi(),this.projectionDelta=qi(),this.projectionDeltaWithTransform=qi()}setAnimationOrigin(d,p=!1){const h=this.snapshot,m=h?h.latestValues:{},y={...this.latestValues},x=qi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const S=Ke(),T=h?h.source:void 0,j=this.layout?this.layout.source:void 0,D=T!==j,z=this.getStack(),R=!z||z.members.length<=1,k=!!(D&&!R&&this.options.crossfade===!0&&!this.path.some(u2));this.animationProgress=0;let L;this.mixTargetDelta=Q=>{const P=Q/1e3;G0(x.x,d.x,P),G0(x.y,d.y,P),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(co(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),l2(this.relativeTarget,this.relativeTargetOrigin,S,P),L&&KM(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=Ke()),Kt(L,this.relativeTarget)),D&&(this.animationValues=y,HM(y,m,this.latestValues,P,k,R)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(va(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Le.update(()=>{hl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Fi(0)),this.currentAnimation=VM(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),d.onUpdate&&d.onUpdate(p)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(FM),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:p,target:h,layout:m,latestValues:y}=d;if(!(!p||!h||!m)){if(this!==d&&this.layout&&m&&Dx(this.options.animationType,this.layout.layoutBox,m.layoutBox)){h=this.target||Ke();const x=pt(this.layout.layoutBox.x);h.x.min=d.target.x.min,h.x.max=h.x.min+x;const S=pt(this.layout.layoutBox.y);h.y.min=d.target.y.min,h.y.max=h.y.min+S}Kt(p,h),Hi(p,y),uo(this.projectionDeltaWithTransform,this.layoutCorrected,p,y)}}registerSharedNode(d,p){this.sharedNodes.has(d)||this.sharedNodes.set(d,new QM),this.sharedNodes.get(d).add(p);const m=p.options.initialPromotionConfig;p.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(p):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){const{layoutId:d}=this.options;return d?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:d}=this.options;return d?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:p,preserveFollowOpacity:h}={}){const m=this.getStack();m&&m.promote(this,h),d&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let p=!1;const{latestValues:h}=d;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(p=!0),!p)return;const m={};h.z&&jf("z",d,m,this.animationValues);for(let y=0;y<wf.length;y++)jf(`rotate${wf[y]}`,d,m,this.animationValues),jf(`skew${wf[y]}`,d,m,this.animationValues);d.render();for(const y in m)d.setStaticValue(y,m[y]),this.animationValues&&(this.animationValues[y]=m[y]);d.scheduleRender()}applyProjectionStyles(d,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=dl(p?.pointerEvents)||"",d.transform=h?h(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=dl(p?.pointerEvents)||""),this.hasProjected&&!qa(this.latestValues)&&(d.transform=h?h({},""):"none",this.hasProjected=!1);return}d.visibility="";const y=m.animationValues||m.latestValues;this.applyTransformsToTarget();let x=ZM(this.projectionDeltaWithTransform,this.treeScale,y);h&&(x=h(y,x)),d.transform=x;const{x:S,y:T}=this.projectionDelta;d.transformOrigin=`${S.origin*100}% ${T.origin*100}% 0`,m.animationValues?d.opacity=m===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=m===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const j in bo){if(y[j]===void 0)continue;const{correct:D,applyTo:z,isCSSVariable:R}=bo[j],k=x==="none"?y[j]:D(y[j],m);if(z){const L=z.length;for(let Q=0;Q<L;Q++)d[z[Q]]=k}else R?this.options.visualElement.renderState.vars[j]=k:d[j]=k}this.options.layoutId&&(d.pointerEvents=m===this?dl(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>d.currentAnimation?.stop()),this.root.nodes.forEach(U0),this.root.sharedNodes.clear()}}}function WM(t){t.updateLayout()}function IM(t){const i=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&i&&t.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:r}=t.layout,{animationType:u}=t.options,f=i.source!==t.layout.source;u==="size"?Zt(y=>{const x=f?i.measuredBox[y]:i.layoutBox[y],S=pt(x);x.min=o[y].min,x.max=x.min+S}):Dx(u,i.layoutBox,o)&&Zt(y=>{const x=f?i.measuredBox[y]:i.layoutBox[y],S=pt(o[y]);x.max=x.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[y].max=t.relativeTarget[y].min+S)});const d=qi();uo(d,o,i.layoutBox);const p=qi();f?uo(p,t.applyTransform(r,!0),i.measuredBox):uo(p,o,i.layoutBox);const h=!Ex(d);let m=!1;if(!t.resumeFrom){const y=t.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:S}=y;if(x&&S){const T=Ke();co(T,i.layoutBox,x.layoutBox);const j=Ke();co(j,o,S.layoutBox),wx(T,j)||(m=!0),y.options.layoutRoot&&(t.relativeTarget=j,t.relativeTargetOrigin=T,t.relativeParent=y)}}}t.notifyListeners("didUpdate",{layout:o,snapshot:i,delta:p,layoutDelta:d,hasLayoutChanged:h,hasRelativeLayoutChanged:m})}else if(t.isLead()){const{onExitComplete:o}=t.options;o&&o()}t.options.transition=void 0}function e2(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function t2(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function n2(t){t.clearSnapshot()}function U0(t){t.clearMeasurements()}function H0(t){t.isLayoutDirty=!1}function a2(t){const{visualElement:i}=t.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),t.resetTransform()}function q0(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function i2(t){t.resolveTargetDelta()}function s2(t){t.calcProjection()}function o2(t){t.resetSkewAndRotation()}function r2(t){t.removeLeadSnapshot()}function G0(t,i,o){t.translate=Be(i.translate,0,o),t.scale=Be(i.scale,1,o),t.origin=i.origin,t.originPoint=i.originPoint}function Y0(t,i,o,r){t.min=Be(i.min,o.min,r),t.max=Be(i.max,o.max,r)}function l2(t,i,o,r){Y0(t.x,i.x,o.x,r),Y0(t.y,i.y,o.y,r)}function u2(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const c2={duration:.45,ease:[.4,0,.1,1]},X0=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),P0=X0("applewebkit/")&&!X0("chrome/")?Math.round:Wt;function K0(t){t.min=P0(t.min),t.max=P0(t.max)}function f2(t){K0(t.x),K0(t.y)}function Dx(t,i,o){return t==="position"||t==="preserve-aspect"&&!yM(L0(i),L0(o),.2)}function d2(t){return t!==t.root&&t.scroll?.wasRoot}const h2=Mx({attachResizeListener:(t,i)=>xo(t,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Mf={current:void 0},zx=Mx({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Mf.current){const t=new h2({});t.mount(window),t.setOptions({layoutScroll:!0}),Mf.current=t}return Mf.current},resetTransform:(t,i)=>{t.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),m2={pan:{Feature:kM},drag:{Feature:RM,ProjectionNode:zx,MeasureLayout:Tx}};function Q0(t,i,o){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",o==="Start");const u="onHover"+o,f=r[u];f&&Le.postRender(()=>f(i,Mo(i)))}class p2 extends Sa{mount(){const{current:i}=this.node;i&&(this.unmount=Vw(i,(o,r)=>(Q0(this.node,r,"Start"),u=>Q0(this.node,u,"End"))))}unmount(){}}class g2 extends Sa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Eo(xo(this.node.current,"focus",()=>this.onFocus()),xo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Z0(t,i,o){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",o==="Start");const u="onTap"+(o==="End"?"":o),f=r[u];f&&Le.postRender(()=>f(i,Mo(i)))}class y2 extends Sa{mount(){const{current:i}=this.node;i&&(this.unmount=Uw(i,(o,r)=>(Z0(this.node,r,"Start"),(u,{success:f})=>Z0(this.node,u,f?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const dd=new WeakMap,Df=new WeakMap,v2=t=>{const i=dd.get(t.target);i&&i(t)},b2=t=>{t.forEach(v2)};function x2({root:t,...i}){const o=t||document;Df.has(o)||Df.set(o,{});const r=Df.get(o),u=JSON.stringify(i);return r[u]||(r[u]=new IntersectionObserver(b2,{root:t,...i})),r[u]}function S2(t,i,o){const r=x2(i);return dd.set(t,o),r.observe(t),()=>{dd.delete(t),r.unobserve(t)}}const T2={some:0,all:1};class A2 extends Sa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:o,margin:r,amount:u="some",once:f}=i,d={root:o?o.current:void 0,rootMargin:r,threshold:typeof u=="number"?u:T2[u]},p=h=>{const{isIntersecting:m}=h;if(this.isInView===m||(this.isInView=m,f&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:y,onViewportLeave:x}=this.node.getProps(),S=m?y:x;S&&S(h)};return S2(this.node.current,d,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:o}=this.node;["amount","margin","root"].some(C2(i,o))&&this.startObserver()}unmount(){}}function C2({viewport:t={}},{viewport:i={}}={}){return o=>t[o]!==i[o]}const E2={inView:{Feature:A2},tap:{Feature:y2},focus:{Feature:g2},hover:{Feature:p2}},w2={layout:{ProjectionNode:zx,MeasureLayout:Tx}},j2={...fM,...E2,...m2,...w2},ue=jj(j2,Uj),M2=U.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${t=>t.$scrolled?t.theme.colors.overlayDark:"transparent"};
  border-bottom: ${t=>t.$scrolled?`3px solid ${t.theme.colors.text}`:"none"};
  transition: all 0.5s ease;
  padding: ${t=>t.theme.spacing.md};

  @media (min-width: ${t=>t.theme.breakpoints.desktop}) {
  position: relative;
  background: transparent;
  border: none;
  padding: ${t=>t.theme.spacing.xxl} ${t=>t.theme.spacing.xl};
  }
`,D2=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${t=>t.theme.breakpoints.desktop}) {
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  }
`,z2=U.div`
  position: relative;
  margin-bottom: ${t=>t.theme.spacing.lg};
  cursor: pointer;

  @media (max-width: ${t=>t.theme.breakpoints.desktop}) {
  margin-bottom: 0;
  }
`,R2=U(ue.div)`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  padding: 8px;
  background: conic-gradient(from 0deg, ${t=>t.theme.colors.primary}, ${t=>t.theme.colors.secondary}, ${t=>t.theme.colors.primary});
  animation: ${t=>t.theme.animations.duration.slow} linear infinite rotate;

  @media (max-width: ${t=>t.theme.breakpoints.desktop}) {
  width: 60px;
  height: 60px;
  border-width: 2px;
  padding: 4px;
  }

  &:hover {
  box-shadow: ${t=>t.theme.shadows.neon};
  }
`,k2=U.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: ${t=>t.theme.colors.backgroundAlt};
`,O2=U.div`
  @media (max-width: ${t=>t.theme.breakpoints.desktop}) {
  flex: 1;
  margin-left: ${t=>t.theme.spacing.md};
  }
`,$2=U(ue.h1)`
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: ${t=>t.theme.spacing.sm};
  background: ${t=>t.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;

  @media (max-width: ${t=>t.theme.breakpoints.desktop}) {
  font-size: 1.2rem;
  margin-bottom: 0;
  }

  &::before,
  &::after {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.8em;
  color: ${t=>t.theme.colors.primary};
  }

  &::before {
  content: '<';
  left: -1.2em;
  }

  &::after {
  content: '/>';
  right: -1.5em;
  }
`,N2=U(ue.h2)`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 400;
  color: ${t=>t.theme.colors.textMuted};
  margin: 0;

  @media (max-width: ${t=>t.theme.breakpoints.desktop}) {
  font-size: 0.9rem;
  }

  &::after {
  content: '█';
  animation: ${t=>t.theme.animations.duration.slow} infinite blink;
  margin-left: 0.1em;
  }

  @keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
  }
`,V2=U.button`
  display: none;
  background: none;
  border: none;
  color: ${t=>t.theme.colors.primary};
  font-size: 2.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0.5rem;
  margin: -0.5rem;

  @media (max-width: ${t=>t.theme.breakpoints.desktop}) {
  display: block;
  }

  &:hover {
  color: ${t=>t.theme.colors.secondary};
  }

  .material-symbols-outlined {
  font-size: inherit;
  }
`,_2=U(ue.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1001;
  background: ${t=>t.theme.colors.primary};
  color: ${t=>t.theme.colors.background};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${t=>t.theme.shadows.medium};
  transition: all 1s ease;

  &:hover {
  background: ${t=>t.theme.colors.secondary};
  transform: scale(1.1);
  box-shadow: ${t=>t.theme.shadows.neon};
  }

  i {
  font-size: 1.2rem;
  }
`,L2=({onMenuToggle:t,isMenuOpen:i})=>{const o=Fv(),{width:r}=Jv(),[u,f]=C.useState(!1),[d,p]=C.useState(!1),h=r<980;C.useEffect(()=>{f(o>100),p(o>300)},[o]);const m=()=>{window.scrollTo({top:0,behavior:"smooth"})},y={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.8,delay:.3,ease:"easeOut"}}},x={hidden:{scale:0,rotate:-180},visible:{scale:1,rotate:0,transition:{duration:1,ease:"backOut"}},hover:{transition:{duration:1}}};return v.jsxs(v.Fragment,{children:[v.jsx(M2,{$scrolled:u&&h,children:v.jsxs(D2,{children:[v.jsx(z2,{onClick:m,children:v.jsx(R2,{variants:x,initial:"hidden",animate:"visible",whileHover:"hover",children:v.jsx(k2,{src:"/images/avatar.jpg",alt:"Daniel Neitzel",loading:"eager"})})}),v.jsxs(O2,{children:[v.jsx($2,{variants:y,initial:"hidden",animate:"visible",children:"Daniel Neitzel"}),v.jsx(N2,{variants:y,initial:"hidden",animate:"visible",children:"Desenvolvedor Front-End"})]}),h&&v.jsx(V2,{onClick:t,children:v.jsx("span",{className:"material-symbols-outlined",children:i?"close":"menu"})})]})}),v.jsx(Nl,{children:d&&v.jsx(_2,{onClick:m,initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0,scale:0},whileHover:{scale:1.1},whileTap:{scale:.95},children:v.jsx("i",{className:"fa fa-arrow-circle-up","aria-hidden":"true"})})})]})},B2=U(ue.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: none;

  @media (max-width: ${t=>t.theme.breakpoints.desktop}) {
  display: block;
  }
`,F0=U(ue.nav)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  background: ${t=>t.theme.colors.background};
  border-right: 3px solid ${t=>t.theme.colors.primary};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: ${t=>t.theme.spacing.xl} 0;
  box-shadow: ${t=>t.theme.shadows.strong};

  @media (min-width: ${t=>t.theme.breakpoints.desktop}) {
  position: static;
  width: auto;
  height: auto;
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  flex-direction: row;
  justify-content: center;
  margin-top: ${t=>t.theme.spacing.lg};
  }
`,U2=U.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${t=>t.theme.spacing.xl};
  
  @media (min-width: ${t=>t.theme.breakpoints.desktop}) {
  display: none;
  }
`,H2=U.img`
  width: 120px;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
  transform: scale(1.05);
  }
`,J0=U.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;

  @media (min-width: ${t=>t.theme.breakpoints.desktop}) {
  display: flex;
  gap: ${t=>t.theme.spacing.lg};
  justify-content: center;
  align-items: center;
  }
`,W0=U(ue.li)`
  margin: 0;

  @media (max-width: ${t=>t.theme.breakpoints.desktop}) {
  text-align: center;
  border-bottom: 1px solid ${t=>t.theme.colors.border};
  
  &:last-child {
  border-bottom: none;
  }
  }
`,I0=U.a`
  display: block;
  padding: ${t=>t.theme.spacing.md} ${t=>t.theme.spacing.lg};
  color: ${t=>t.theme.colors.text};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  @media (min-width: ${t=>t.theme.breakpoints.desktop}) {
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  font-size: 1rem;
  border-radius: 4px;
  }

  &:hover {
  background: ${t=>t.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transform: translateX(5px);

  @media (min-width: ${t=>t.theme.breakpoints.desktop}) {
  transform: translateY(-2px);
  background: ${t=>t.theme.colors.backgroundAlt};
  -webkit-background-clip: initial;
  -webkit-text-fill-color: initial;
  background-clip: initial;
  color: ${t=>t.theme.colors.text};
  }
  }

  &::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: ${t=>t.theme.colors.primary};
  transition: all 0.3s ease;
  transform: translateX(-50%);

  @media (max-width: ${t=>t.theme.breakpoints.desktop}) {
  display: none;
  }
  }

  &:hover::after {
  width: 80%;
  }

  &.active {
  background: ${t=>t.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (min-width: ${t=>t.theme.breakpoints.desktop}) {
  background: ${t=>t.theme.colors.backgroundAlt};
  -webkit-background-clip: initial;
  -webkit-text-fill-color: initial;
  background-clip: initial;
  color: ${t=>t.theme.colors.text};
  }

  &::after {
  width: 80%;
  }
  }
`,q2=({isOpen:t,onClose:i,activeSection:o,onSectionChange:r,onCVModalOpen:u})=>{const{width:f}=Jv(),d=f<980,p=yv(),h=xa(),m=[{id:"home",label:"Sobre mim",action:()=>T("home")},{id:"skills",label:"Especialidades",action:()=>T("skills")},{id:"projects",label:"Meus projetos",action:()=>T("projects")},{id:"blog",label:"Blog",action:()=>T("blog")},{id:"cv",label:v.jsx("span",{style:{background:"linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Visualizar Currículo"}),action:()=>u()}],y={hidden:{x:"-100%",transition:{type:"tween",duration:.3}},visible:{x:0,transition:{type:"tween",duration:.3,staggerChildren:.1}}},x={hidden:{x:-20,opacity:0},visible:{x:0,opacity:1,transition:{type:"tween",duration:.2}}},S={hidden:{opacity:0,transition:{duration:.2}},visible:{opacity:1,transition:{duration:.2}}},T=z=>{h.pathname.startsWith("/blog/")?(p("/",{replace:!0}),setTimeout(()=>{r(z)},100)):r(z)},j=z=>{z.action(),d&&i()},D=()=>{h.pathname.startsWith("/blog/")?(p("/",{replace:!0}),setTimeout(()=>{r("home"),window.scrollTo({top:0,behavior:"smooth"})},100)):(r("home"),window.scrollTo({top:0,behavior:"smooth"})),d&&i()};return d?v.jsx(Nl,{children:t&&v.jsxs(v.Fragment,{children:[v.jsx(B2,{variants:S,initial:"hidden",animate:"visible",exit:"hidden",onClick:i}),v.jsxs(F0,{variants:y,initial:"hidden",animate:"visible",exit:"hidden",children:[v.jsx(U2,{children:v.jsx(H2,{src:"/images/logo.png",alt:"Logo",onClick:D})}),v.jsx(J0,{children:m.map(z=>v.jsx(W0,{variants:x,children:v.jsx(I0,{onClick:()=>j(z),className:o===z.id?"active":"",children:z.label})},z.id))})]})]})}):v.jsx(F0,{children:v.jsx(J0,{children:m.map(z=>v.jsx(W0,{children:v.jsx(I0,{onClick:()=>j(z),className:o===z.id?"active":"",children:z.label})},z.id))})})},G2=U(Co)`
  background: ${t=>t.theme.colors.background};
  padding: 6rem 0;
`,Y2=U.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${t=>t.theme.spacing.xl};
  align-items: center;

  @media (min-width: ${t=>t.theme.breakpoints.desktop}) {
  grid-template-columns: 1fr 1fr;
  }
`,X2=U(ue.div)`
  order: -1;
  
  @media (min-width: ${t=>t.theme.breakpoints.desktop}) {
  order: 0;
  }
`,P2=U.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: ${t=>t.theme.shadows.medium};
  transition: transform 0.3s ease;

  &:hover {
  transform: scale(1.02);
  }
`,K2=U(ue.div)`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.spacing.md};
`,ev=U.span`
  background: ${t=>t.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
`,Q2=U.ul`
  list-style: none;
  padding: 0;
  margin: ${t=>t.theme.spacing.md} 0;

  li {
  padding: ${t=>t.theme.spacing.xs} 0;
  position: relative;
  padding-left: ${t=>t.theme.spacing.lg};

  &::before {
  content: '👉';
  position: absolute;
  left: 0;
  top: ${t=>t.theme.spacing.xs};
  }
  }
`,Z2=U.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${t=>t.theme.spacing.md};
  margin: ${t=>t.theme.spacing.xl} 0;
`,F2=U(ue.div)`
  background: ${t=>t.theme.colors.backgroundAlt};
  border-radius: 8px;
  padding: ${t=>t.theme.spacing.lg};
  border: 1px solid ${t=>t.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
  border-color: ${t=>t.theme.colors.primary};
  transform: translateY(-2px);
  box-shadow: ${t=>t.theme.shadows.medium};
  }

  .icon {
  font-size: 1.5rem;
  margin-bottom: ${t=>t.theme.spacing.sm};
  color: ${t=>t.theme.colors.primary};
  }

  h3 {
  font-size: 1.1rem;
  margin-bottom: ${t=>t.theme.spacing.sm};
  background: ${t=>t.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  }

  p {
  font-size: 0.9rem;
  color: ${t=>t.theme.colors.textMuted};
  line-height: 1.6;
  margin: 0;
  }
`,J2=U.div`
  display: flex;
  gap: ${t=>t.theme.spacing.md};
  margin-top: ${t=>t.theme.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: ${t=>t.theme.breakpoints.tablet}) {
  justify-content: center;
  }
`,W2=({onSectionChange:t})=>{const[i,o]=Wv({threshold:.1,rootMargin:"0px 0px -100px 0px"}),[r,u]=C.useState(()=>localStorage.getItem("about-animated")==="true");C.useEffect(()=>{o&&!r&&(u(!0),localStorage.setItem("about-animated","true"))},[o,r]);const f=!r,d={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.6,staggerChildren:.2}}},p={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},h=[{icon:"",title:"Experiência Sólida",description:"Mais de 10 anos de experiência como Desenvolvedor Front End com projetos diversos."},{icon:"",title:"Padrões Web",description:"Desenvolvimento seguindo padrões W3C e compatibilidade cross-browser."},{icon:"",title:"Solucionador de problemas",description:"Capacidade de análise e resolução rápida de problemas técnicos complexos."},{icon:"",title:"Aprendizado Contínuo",description:"Adaptação rápida a novas tecnologias e frameworks emergentes."}];return v.jsx(G2,{ref:i,children:v.jsx(Un,{children:v.jsxs(ue.div,{variants:f?d:{},initial:f?"hidden":"visible",animate:o||r?"visible":"hidden",children:[v.jsxs(Y2,{children:[v.jsx(X2,{variants:f?p:{},children:v.jsx(P2,{src:"/images/workdesk_v2.png",alt:"Workspace",loading:"lazy"})}),v.jsxs(K2,{variants:f?p:{},children:[v.jsx(Zi,{$gradient:!0,children:"Um pouco sobre mim..."}),v.jsxs(Ft,{children:["Sou um ",v.jsx(ev,{children:"profissional web apaixonado"}),", especializado em desenvolvimento front-end, com profundo conhecimento em design de experiência do usuário e experiência em estratégia de produto."]}),v.jsx(Ft,{children:"O meu objetivo é desenvolver o meu conhecimento de novas e avançadas técnicas de programação, bem como promover a utilização de boas práticas, especialmente aquelas relacionadas com o desenvolvimento web."}),v.jsxs(Q2,{children:[v.jsx("li",{children:"HTML semântico"}),v.jsx("li",{children:"JavaScript discreto e bem estruturado"}),v.jsx("li",{children:"Acessibilidade e usabilidade da Web"})]}),v.jsx(Ft,{children:"Meu estilo de trabalho é flexível e gosto de colaborar com os colegas de equipe. Sou um jogador eficaz e trabalhei em estreita colaboração com designers de interação, gerentes de produto, designers visuais, engenheiros de back-end, controle de qualidade e pesquisadores de experiência do usuário."}),v.jsxs(Ft,{children:["Embora minha especialidade seja desenvolvimento front-end, também sou um generalista com experiência em desenvolvimento de banco de dados e back-end",v.jsx(ev,{children:" (MySQL, Firebase, NodeJS, PHP, Python e Java)"}),"."]})]})]}),v.jsx(ue.div,{variants:f?p:{},children:v.jsx(Z2,{children:h.map((m,y)=>v.jsxs(F2,{variants:f?p:{},whileHover:{scale:1.02},children:[v.jsx("div",{className:"icon",children:m.icon}),v.jsx("h3",{children:m.title}),v.jsx("p",{children:m.description})]},y))})}),v.jsx(ue.div,{variants:f?p:{},children:v.jsx(J2,{children:v.jsx(Qt,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"});const m=new CustomEvent("openCVModal");window.dispatchEvent(m)},children:"Visualizar Currículo Completo"})})})]})})})},I2=U(Co)`
  background: ${t=>t.theme.colors.backgroundAlt};
  padding: ${t=>t.theme.spacing.xxl} 0;
`;U.div`
  text-align: center;
  margin-bottom: ${t=>t.theme.spacing.xxl};
`;U.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${t=>t.theme.spacing.lg};
  margin: ${t=>t.theme.spacing.xl} 0;
  padding: ${t=>t.theme.spacing.lg};
  background: ${t=>t.theme.colors.background};
  border-radius: 12px;
  border: 1px solid ${t=>t.theme.colors.border};
`;U.div`
  text-align: center;

  .number {
  font-size: 2rem;
  font-weight: 700;
  background: ${t=>t.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  }

  .label {
  font-size: 0.9rem;
  color: ${t=>t.theme.colors.textMuted};
  margin-top: ${t=>t.theme.spacing.xs};
  }
`;const eD=U.div`
  background: ${t=>t.theme.colors.backgroundAlt};
  border-radius: 8px;
  padding: ${t=>t.theme.spacing.lg};
  border-left: 4px solid ${t=>t.theme.colors.primary};
  margin: ${t=>t.theme.spacing.xl} 0;

  h3 {
  margin-bottom: ${t=>t.theme.spacing.lg};
  color: ${t=>t.theme.colors.primary};
  }

  .specialties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${t=>t.theme.spacing.lg};
  }

  .specialty-category {
  h4 {
  color: ${t=>t.theme.colors.secondary};
  margin-bottom: ${t=>t.theme.spacing.sm};
  font-size: 1.1rem;
  font-weight: 600;
  }

  ul {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
  padding: ${t=>t.theme.spacing.xs} 0;
  border-bottom: 1px solid ${t=>t.theme.colors.border};
  font-weight: 500;

  &:last-child {
  border-bottom: none;
  }

  &:before {
  content: "▹";
  color: ${t=>t.theme.colors.primary};
  margin-right: ${t=>t.theme.spacing.sm};
  font-weight: bold;
  }
  }
  }
  }
`;U(ue.div)`
  background: ${t=>t.theme.colors.background};
  border-radius: 12px;
  padding: ${t=>t.theme.spacing.lg};
  border: 1px solid ${t=>t.theme.colors.border};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
  border-color: ${t=>t.theme.colors.primary};
  transform: translateY(-5px);
  box-shadow: ${t=>t.theme.shadows.strong};
  }

  &::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${t=>t.theme.colors.gradientText};
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  }

  &:hover::before {
  transform: scaleX(1);
  }
`;U.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: ${t=>t.theme.spacing.md};
  color: ${t=>t.theme.colors.text};
  text-align: center;

  @media (max-width: ${t=>t.theme.breakpoints.mobile}) {
  font-size: 1rem;
  }
`;U.div`
  position: relative;
  background: ${t=>t.theme.colors.border};
  border-radius: 20px;
  height: 8px;
  overflow: hidden;
  margin-bottom: ${t=>t.theme.spacing.sm};
`;U(ue.div)`
  height: 100%;
  background: ${t=>t.theme.colors.gradientText};
  border-radius: 20px;
  position: relative;

  &::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
  }
`;U.div`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${t=>t.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;U.div`
  display: flex;
  justify-content: center;
  gap: ${t=>t.theme.spacing.md};
  margin-bottom: ${t=>t.theme.spacing.xl};
  flex-wrap: wrap;
`;U.button`
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  border: 1px solid ${t=>t.theme.colors.border};
  background: ${t=>t.$active?t.theme.colors.primary:"transparent"};
  color: ${t=>t.$active?t.theme.colors.background:t.theme.colors.text};
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
  border-color: ${t=>t.theme.colors.primary};
  transform: translateY(-2px);
  }
`;const tD=({onSectionChange:t})=>{const[i,o]=Wv({threshold:.1,rootMargin:"0px 0px -100px 0px"}),[r,u]=C.useState(()=>localStorage.getItem("skills-animated")==="true");C.useEffect(()=>{o&&!r&&(u(!0),localStorage.setItem("skills-animated","true"))},[o,r]);const f=!r,d={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.6,staggerChildren:.2}}},p={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return v.jsx(I2,{ref:i,children:v.jsx(Un,{children:v.jsxs(ue.div,{variants:f?d:{},initial:f?"hidden":"visible",animate:o||r?"visible":"hidden",children:[v.jsxs(ue.div,{variants:f?p:{},children:[v.jsx(Zi,{$gradient:!0,children:"Especialidades"}),v.jsx(Ft,{children:"Tecnologias, frameworks e ferramentas que domino para desenvolver soluções web modernas e escaláveis"})]}),v.jsx(ue.div,{variants:f?p:{},children:v.jsxs(eD,{children:[v.jsx("h3",{children:"Especialidades Técnicas:"}),v.jsxs("div",{className:"specialties-grid",children:[v.jsxs("div",{className:"specialty-category",children:[v.jsx("h4",{children:"Frameworks & Libraries"}),v.jsxs("ul",{children:[v.jsx("li",{children:"Angular (v2 até v16)"}),v.jsx("li",{children:"React & React Native"}),v.jsx("li",{children:"Next.js"}),v.jsx("li",{children:"AngularJS"}),v.jsx("li",{children:"Ionic/Cordova"})]})]}),v.jsxs("div",{className:"specialty-category",children:[v.jsx("h4",{children:"Core Technologies"}),v.jsxs("ul",{children:[v.jsx("li",{children:"TypeScript"}),v.jsx("li",{children:"JavaScript ES6"}),v.jsx("li",{children:"HTML5 & CSS3"}),v.jsx("li",{children:"SASS/SCSS"}),v.jsx("li",{children:"RxJS"})]})]}),v.jsxs("div",{className:"specialty-category",children:[v.jsx("h4",{children:"Architecture & Patterns"}),v.jsxs("ul",{children:[v.jsx("li",{children:"Micro Frontends MFE"}),v.jsx("li",{children:"Design Systems"}),v.jsx("li",{children:"PWA"}),v.jsx("li",{children:"Arquitetura MVC"})]})]}),v.jsxs("div",{className:"specialty-category",children:[v.jsx("h4",{children:"Tools & DevOps"}),v.jsxs("ul",{children:[v.jsx("li",{children:"Git/GitLab"}),v.jsx("li",{children:"Jenkins"}),v.jsx("li",{children:"CI/CD"}),v.jsx("li",{children:"Jest/Karma"}),v.jsx("li",{children:"AWS"})]})]}),v.jsxs("div",{className:"specialty-category",children:[v.jsx("h4",{children:"Backend & Databases"}),v.jsxs("ul",{children:[v.jsx("li",{children:"Node.js"}),v.jsx("li",{children:"PHP"}),v.jsx("li",{children:"MySQL"}),v.jsx("li",{children:"API REST"})]})]}),v.jsxs("div",{className:"specialty-category",children:[v.jsx("h4",{children:"Design & UX"}),v.jsxs("ul",{children:[v.jsx("li",{children:"Figma"}),v.jsx("li",{children:"Bootstrap"}),v.jsx("li",{children:"UX/UI Design"}),v.jsx("li",{children:"Metodologias Ágeis"})]})]})]})]})})]})})})},zf=U(Co)`
  background: ${t=>t.theme.colors.background};
  padding: ${t=>t.theme.spacing.xxl} 0;
`,nD=U.div`
  background: ${t=>t.theme.colors.backgroundAlt};
  border-radius: 12px;
  padding: ${t=>t.theme.spacing.lg};
  margin-bottom: ${t=>t.theme.spacing.xl};
  border: 1px solid ${t=>t.theme.colors.border};
`,aD=U.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${t=>t.theme.spacing.md};
  margin-bottom: ${t=>t.theme.spacing.md};

  @media (max-width: ${t=>t.theme.breakpoints.tablet}) {
  grid-template-columns: 1fr;
  }
`,iD=U.input`
  padding: ${t=>t.theme.spacing.sm};
  border: 1px solid ${t=>t.theme.colors.border};
  border-radius: 6px;
  background: ${t=>t.theme.colors.background};
  color: ${t=>t.theme.colors.text};
  font-size: 0.9rem;
  transition: border-color 0.3s ease;

  &:focus {
  outline: none;
  border-color: ${t=>t.theme.colors.primary};
  }

  &::placeholder {
  color: ${t=>t.theme.colors.textMuted};
  }
`,Rf=U.select`
  padding: ${t=>t.theme.spacing.sm};
  border: 1px solid ${t=>t.theme.colors.border};
  border-radius: 6px;
  background: ${t=>t.theme.colors.background};
  color: ${t=>t.theme.colors.text};
  font-size: 0.9rem;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:focus {
  outline: none;
  border-color: ${t=>t.theme.colors.primary};
  }

  option {
  background: ${t=>t.theme.colors.background};
  color: ${t=>t.theme.colors.text};
  }
`,sD=U.div`
  display: flex;
  gap: ${t=>t.theme.spacing.sm};
  align-items: center;
  flex-wrap: wrap;
`,tv=U.button`
  background: ${t=>t.$active?t.theme.colors.primary:"transparent"};
  color: ${t=>t.$active?t.theme.colors.background:t.theme.colors.primary};
  border: 1px solid ${t=>t.theme.colors.primary};
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.xs};

  &:hover {
  background: ${t=>t.theme.colors.primary};
  color: ${t=>t.theme.colors.background};
  transform: translateY(-2px);
  box-shadow: ${t=>t.theme.shadows.medium};
  }

  &.gradient {
  background: ${t=>t.theme.colors.gradient};
  border: none;
  color: ${t=>t.theme.colors.background};
  
  &:hover {
  background: ${t=>t.theme.colors.gradient};
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: ${t=>t.theme.shadows.medium};
  }
  }

  i {
  font-size: 0.9rem;
  }
`,oD=U.div`
  display: flex;
  gap: ${t=>t.theme.spacing.lg};
  margin-bottom: ${t=>t.theme.spacing.lg};
  flex-wrap: wrap;
`,tl=U.div`
  background: ${t=>t.theme.colors.backgroundAlt};
  border-radius: 8px;
  padding: ${t=>t.theme.spacing.md};
  border: 1px solid ${t=>t.theme.colors.border};
  text-align: center;
  min-width: 120px;

  .number {
  font-size: 1.5rem;
  font-weight: 700;
  background: ${t=>t.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  }

  .label {
  font-size: 0.8rem;
  color: ${t=>t.theme.colors.textMuted};
  margin-top: ${t=>t.theme.spacing.xs};
  }
`,rD=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${t=>t.theme.spacing.xxl};
  gap: ${t=>t.theme.spacing.lg};
`,lD=U.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${t=>t.theme.spacing.xl};
  margin: ${t=>t.theme.spacing.xxl} 0;
`,uD=U.div`
  background: ${t=>t.theme.colors.backgroundAlt};
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${t=>t.theme.colors.border};
  height: 400px;
  position: relative;

  &::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
  90deg,
  transparent,
  rgba(255, 255, 255, 0.05),
  transparent
  );
  animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
  }
`,cD=U.div`
  text-align: center;
  padding: ${t=>t.theme.spacing.xxl};
  color: ${t=>t.theme.colors.textMuted};

  .icon {
  font-size: 4rem;
  margin-bottom: ${t=>t.theme.spacing.lg};
  opacity: 0.5;
  }

  .message {
  font-size: 1.1rem;
  margin-bottom: ${t=>t.theme.spacing.lg};
  }
`,fD=U(ue.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 1fr;
  gap: ${t=>t.theme.spacing.xl};
  margin: ${t=>t.theme.spacing.xxl} 0;

  @media (max-width: ${t=>t.theme.breakpoints.tablet}) {
  grid-template-columns: 1fr;
  gap: ${t=>t.theme.spacing.lg};
  }
`,Rx=U(ue.div)`
  background: ${t=>t.theme.colors.backgroundAlt};
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${t=>t.theme.colors.border};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  min-height: 420px;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
  border-color: ${t=>t.theme.colors.primary};
  transform: translateY(-5px);
  box-shadow: ${t=>t.theme.shadows.strong};
  }

  &::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${t=>t.theme.colors.gradientText};
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  }

  &:hover::before {
  transform: scaleX(1);
  }
`,dD=U.div`
  padding: ${t=>t.theme.spacing.lg} ${t=>t.theme.spacing.lg} ${t=>t.theme.spacing.sm};
  border-bottom: 1px solid ${t=>t.theme.colors.border};
`,hD=U.div`
  padding: ${t=>t.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`,mD=U.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${t=>t.theme.spacing.sm};
  font-size: 0.8rem;
  color: ${t=>t.theme.colors.textMuted};
`,pD=U.div`
  display: flex;
  gap: ${t=>t.theme.spacing.md};
  align-items: center;
`,no=U.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.xs};
  font-size: 0.8rem;
  color: ${t=>t.theme.colors.textMuted};

  i {
  color: ${t=>t.theme.colors.primary};
  }
`,nv=U.span`
  display: inline-flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.xs};
  background: ${t=>t.theme.colors.background};
  color: ${t=>t.theme.colors.text};
  padding: ${t=>t.theme.spacing.xs} ${t=>t.theme.spacing.sm};
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${t=>t.theme.colors.border};

  &::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${t=>t.color||t.theme.colors.primary};
  }
`;U.div`
  width: 100%;
  height: 200px;
  background: ${t=>t.theme.colors.border};
  background-image: url(${t=>t.src});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(91, 255, 139, 0.1), rgba(0, 255, 255, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
  }

  ${Rx}:hover &::after {
  opacity: 1;
  }
`;const gD=U.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: ${t=>t.theme.spacing.sm};
  background: ${t=>t.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,yD=U.p`
  color: ${t=>t.theme.colors.textMuted};
  line-height: 1.6;
  margin-bottom: ${t=>t.theme.spacing.md};
  font-size: 0.95rem;
  min-height: 3.2em;
  max-height: 4.8em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  flex: 1;
`,vD=U.div`
  margin-top: auto;
`,kf=U.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t=>t.theme.spacing.xs};
  margin-bottom: ${t=>t.theme.spacing.md};
`,nl=U.span`
  background: ${t=>t.theme.colors.background};
  color: ${t=>t.theme.colors.primary};
  padding: ${t=>t.theme.spacing.xs} ${t=>t.theme.spacing.sm};
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${t=>t.theme.colors.border};
`,bD=U.div`
  display: flex;
  gap: ${t=>t.theme.spacing.sm};
`,Of=U.button`
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  border: 1px solid ${t=>t.theme.colors.primary};
  background: transparent;
  color: ${t=>t.theme.colors.primary};
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.xs};

  &:hover {
  background: ${t=>t.theme.colors.primary};
  color: ${t=>t.theme.colors.background};
  transform: translateY(-2px);
  }

  i {
  font-size: 0.9rem;
  }
`,xD=U(ue.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${t=>t.theme.spacing.md};

  @media (max-width: ${t=>t.theme.breakpoints.tablet}) {
  align-items: flex-start;
  padding-top: 1rem;
  }
`,SD=U(ue.div)`
  background: ${t=>t.theme.colors.backgroundAlt};
  border-radius: 12px;
  max-width: 1024px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid ${t=>t.theme.colors.border};
  position: relative;
  z-index: 10000;
`,TD=U.div`
  padding: ${t=>t.theme.spacing.lg};
  border-bottom: 1px solid ${t=>t.theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
  margin: 0;
  background: ${t=>t.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  }
`,AD=U.button`
  background: none;
  border: none;
  color: ${t=>t.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${t=>t.theme.spacing.xs};
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
  background: ${t=>t.theme.colors.background};
  color: ${t=>t.theme.colors.primary};
  }
`,CD=U.div`
  padding: ${t=>t.theme.spacing.lg};
`;U.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: ${t=>t.theme.spacing.lg};
`;const ED=U.div`
  padding: ${t=>t.theme.spacing.lg};
  border-top: 1px solid ${t=>t.theme.colors.border};
  display: flex;
  gap: ${t=>t.theme.spacing.md};
  justify-content: center;
`,wD=U.div`
  text-align: center;
  padding: ${t=>t.theme.spacing.xxl};
  color: ${t=>t.theme.colors.textMuted};

  .icon {
  font-size: 4rem;
  margin-bottom: ${t=>t.theme.spacing.lg};
  opacity: 0.5;
  }
`,$f=U.div`
  display: flex;
  gap: ${t=>t.theme.spacing.md};
  justify-content: center;
  margin-top: ${t=>t.theme.spacing.xl};
  margin-bottom: ${t=>t.theme.spacing.xl};
  flex-wrap: wrap;
  padding: ${t=>t.theme.spacing.md};
  border-top: 1px solid ${t=>t.theme.colors.border};
`,jD=()=>{const[t,i]=C.useState(null),{repositories:o,loading:r,error:u,filters:f,updateFilters:d,resetFilters:p,refresh:h,availableLanguages:m,filteredStats:y,hasRepositories:x,isEmpty:S,isFiltered:T}=XC({excludeForks:!0,excludeArchived:!0}),j={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.6,staggerChildren:.1}}},D={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},z={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.3,ease:"easeOut"}},exit:{opacity:0,scale:.8,transition:{duration:.2}}},R={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},k=V=>{i(V),document.body.classList.add("no-scroll")},L=()=>{i(null),document.body.classList.remove("no-scroll")},Q=V=>{V!==window.location.href&&window.open(V,"_blank","noopener,noreferrer")},P=(V,F)=>{d({[V]:F})},Z=V=>({JavaScript:"#f1e05a",TypeScript:"#2b7489",React:"#61dafb",Vue:"#4fc08d",Angular:"#dd0031",Python:"#3572A5",Java:"#b07219",PHP:"#4F5D95",HTML:"#e34c26",CSS:"#1572B6",SCSS:"#c6538c","C#":"#239120","C++":"#f34b7d",Go:"#00ADD8",Rust:"#dea584",Swift:"#ffac45"})[V]||"#666666",N=V=>new Date(V).toLocaleDateString("pt-BR",{year:"numeric",month:"short",day:"numeric"});return r?v.jsx(zf,{children:v.jsx(Un,{children:v.jsxs(ue.div,{variants:j,initial:"hidden",animate:"visible",children:[v.jsxs(ue.div,{variants:D,style:{textAlign:"center"},children:[v.jsx(Zi,{$gradient:!0,children:"Repositórios GitHub"}),v.jsx(Ft,{children:"Carregando repositórios diretamente do GitHub..."})]}),v.jsxs(rD,{children:[v.jsx(ue.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},children:v.jsx("i",{className:"fa-brands fa-github",style:{fontSize:"3rem",color:"#666"}})}),v.jsx(Ft,{children:"Buscando repositórios..."})]}),v.jsx(lD,{children:[...Array(6)].map((V,F)=>v.jsx(uD,{},F))}),v.jsx("div",{children:v.jsx($f,{children:v.jsxs(Qt,{className:"gradient",onClick:()=>window.open("https://github.com/DanVNeitzel","_blank"),children:[v.jsx("i",{className:"fa-brands fa-github"})," ",v.jsx("span",{children:"Ver Perfil Completo no GitHub"})]})})})]})})}):u?v.jsx(zf,{children:v.jsx(Un,{children:v.jsxs(ue.div,{variants:j,initial:"hidden",animate:"visible",children:[v.jsx(ue.div,{variants:D,children:v.jsxs(cD,{children:[v.jsx("div",{className:"icon",children:"⚠️"}),v.jsx("div",{className:"message",children:"Erro ao carregar repositórios do GitHub"}),v.jsx(Ft,{children:u}),v.jsxs(Qt,{onClick:h,style:{marginTop:"1rem"},children:[v.jsx("i",{className:"fa fa-refresh"})," ",v.jsx("span",{children:"Tentar Novamente"})]}),v.jsxs(Qt,{onClick:()=>window.open("https://github.com/DanVNeitzel?tab=repositories","_blank"),style:{marginTop:"1rem"},children:[v.jsx("i",{className:"fa-brands fa-github"})," ",v.jsx("span",{children:"Acessar Diretamente"})]})]})}),v.jsx("div",{children:v.jsx($f,{children:v.jsxs(Qt,{className:"gradient",onClick:()=>window.open("https://github.com/DanVNeitzel","_blank"),children:[v.jsx("i",{className:"fa-brands fa-github"})," ",v.jsx("span",{children:"Ver Perfil Completo no GitHub"})]})})})]})})}):v.jsxs(zf,{children:[v.jsx(Un,{children:v.jsxs(ue.div,{variants:j,initial:"hidden",animate:"visible",children:[v.jsxs(ue.div,{variants:D,style:{textAlign:"center"},children:[v.jsx(Zi,{$gradient:!0,children:"Meus Repositórios GitHub"}),v.jsx(Ft,{children:"Repositórios atualizados em tempo real diretamente do GitHub. Explore os projetos com filtros e visualize detalhes técnicos."})]}),y&&v.jsx(ue.div,{children:v.jsxs(oD,{style:{justifyContent:"center"},children:[v.jsxs(tl,{children:[v.jsx("span",{className:"number",children:y.totalRepos}),v.jsx("span",{className:"label",children:"Repositórios"})]}),v.jsxs(tl,{children:[v.jsx("span",{className:"number",children:y.totalStars}),v.jsx("span",{className:"label",children:"Stars"})]}),v.jsxs(tl,{children:[v.jsx("span",{className:"number",children:y.totalForks}),v.jsx("span",{className:"label",children:"Forks"})]}),v.jsxs(tl,{children:[v.jsx("span",{className:"number",children:y.topLanguages.length}),v.jsx("span",{className:"label",children:"Linguagens"})]})]})}),v.jsx(ue.div,{children:v.jsxs(nD,{children:[v.jsxs(aD,{children:[v.jsx(iD,{type:"text",placeholder:"Buscar repositórios...",value:f.search,onChange:V=>P("search",V.target.value)}),v.jsxs(Rf,{value:f.language,onChange:V=>P("language",V.target.value),children:[v.jsx("option",{value:"",children:"Todas as linguagens"}),m.map(V=>v.jsx("option",{value:V,children:V},V))]}),v.jsxs(Rf,{value:f.sortBy,onChange:V=>P("sortBy",V.target.value),children:[v.jsx("option",{value:"updated",children:"Última atualização"}),v.jsx("option",{value:"created",children:"Data de criação"}),v.jsx("option",{value:"name",children:"Nome"}),v.jsx("option",{value:"stars",children:"Stars"}),v.jsx("option",{value:"forks",children:"Forks"})]}),v.jsxs(Rf,{value:f.sortDirection,onChange:V=>P("sortDirection",V.target.value),children:[v.jsx("option",{value:"desc",children:"Decrescente"}),v.jsx("option",{value:"asc",children:"Crescente"})]})]}),v.jsxs(sD,{children:[v.jsx(tv,{$active:f.excludeForks,className:f.excludeForks?"gradient":"",onClick:()=>P("excludeForks",!f.excludeForks),children:"Excluir Forks"}),v.jsx(tv,{$active:f.excludeArchived,className:f.excludeArchived?"gradient":"",onClick:()=>P("excludeArchived",!f.excludeArchived),children:"Excluir Arquivados"}),T&&v.jsx(Qt,{onClick:p,style:{fontSize:"0.8rem",padding:"0.25rem 0.5rem"},children:"Limpar Filtros"}),v.jsxs(Qt,{onClick:h,style:{fontSize:"0.8rem",padding:"0.25rem 0.5rem"},children:[v.jsx("i",{className:"fa fa-refresh"}),"Atualizar"]})]})]})}),x?v.jsx(fD,{variants:j,initial:"hidden",animate:"visible",children:o.map((V,F)=>v.jsxs(Rx,{variants:D,whileHover:{scale:1.02},onClick:()=>k(V),children:[v.jsxs(dD,{children:[v.jsxs(mD,{children:[v.jsxs("span",{children:[v.jsx("i",{className:"fa fa-calendar"})," Criado em ",N(V.created_at)]}),V.language&&v.jsx(nv,{color:Z(V.language),children:V.language})]}),v.jsx(gD,{children:V.title}),v.jsxs(pD,{children:[v.jsxs(no,{children:[v.jsx("i",{className:"fa fa-star"}),V.stars]}),v.jsxs(no,{children:[v.jsx("i",{className:"fa fa-code-fork"}),V.forks]}),V.size>0&&v.jsxs(no,{children:[v.jsx("i",{className:"fa fa-database"}),(V.size/1024).toFixed(1),"MB"]})]})]}),v.jsxs(hD,{children:[v.jsx(yD,{children:V.description||"Sem descrição disponível."}),v.jsxs(vD,{children:[V.technologies.length>0&&v.jsxs(kf,{children:[V.technologies.slice(0,4).map((ae,se)=>v.jsx(nl,{children:ae},se)),V.technologies.length>4&&v.jsxs(nl,{children:["+",V.technologies.length-4]})]}),v.jsxs(bD,{children:[v.jsxs(Of,{onClick:ae=>{ae.stopPropagation(),Q(V.repo)},children:[v.jsx("i",{className:"fa-brands fa-github"}),v.jsx("span",{children:"Código"})]}),V.hasPages&&v.jsxs(Of,{onClick:ae=>{ae.stopPropagation(),Q(V.link)},children:[v.jsx("i",{className:"fa-solid fa-eye"})," ",v.jsx("span",{children:"Demo"})]}),v.jsxs(Of,{onClick:ae=>{ae.stopPropagation(),Q(V.clone_url)},children:[v.jsx("i",{className:"fa fa-download"}),v.jsx("span",{children:"Clonar"})]})]})]})]})]},V.id))}):S?v.jsx(ue.div,{variants:D,children:v.jsxs(wD,{children:[v.jsx("div",{className:"icon",children:"�"}),v.jsx("h3",{children:"Nenhum repositório encontrado"}),v.jsx("p",{children:T?"Tente ajustar os filtros para encontrar repositórios.":"Não foram encontrados repositórios públicos."}),T&&v.jsx(Qt,{onClick:p,style:{marginTop:"1rem"},children:"Limpar Filtros"})]})}):null,v.jsx("div",{children:v.jsx($f,{children:v.jsxs(Qt,{className:"gradient",onClick:()=>window.open("https://github.com/DanVNeitzel","_blank"),children:[v.jsx("i",{className:"fa-brands fa-github"})," ",v.jsx("span",{children:"Ver Perfil Completo no GitHub"})]})})})]})}),_A.createPortal(v.jsx(Nl,{children:t&&v.jsx(xD,{variants:R,initial:"hidden",animate:"visible",exit:"exit",onClick:L,children:v.jsxs(SD,{variants:z,initial:"hidden",animate:"visible",exit:"exit",onClick:V=>V.stopPropagation(),children:[v.jsxs(TD,{children:[v.jsx("h2",{children:t.title}),v.jsx(AD,{onClick:L,children:v.jsx("i",{className:"fa fa-times"})})]}),v.jsxs(CD,{children:[v.jsxs("div",{style:{marginBottom:"1rem"},children:[v.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",marginBottom:"1rem"},children:[t.language&&v.jsx(nv,{color:Z(t.language),children:t.language}),v.jsxs(no,{children:[v.jsx("i",{className:"fa fa-star"}),t.stars," stars"]}),v.jsxs(no,{children:[v.jsx("i",{className:"fa fa-code-fork"}),t.forks," forks"]})]}),v.jsxs("div",{style:{display:"flex",gap:"1rem",marginBottom:"1rem",fontSize:"0.9rem",color:"#999"},children:[v.jsxs("span",{children:[v.jsx("i",{className:"fa fa-calendar"})," ",v.jsxs("span",{children:["Criado em ",N(t.created_at)]})]}),v.jsxs("span",{children:[v.jsx("i",{className:"fa fa-clock"})," ",v.jsxs("span",{children:["Atualizado em ",N(t.updated_at)]})]})]})]}),v.jsx(Ft,{children:t.description||"Sem descrição disponível."}),t.technologies.length>0&&v.jsxs("div",{style:{marginBottom:"1rem"},children:[v.jsx("strong",{children:"Tecnologias utilizadas:"}),v.jsx(kf,{style:{marginTop:"0.5rem"},children:t.technologies.map((V,F)=>v.jsx(nl,{children:V},F))})]}),t.topics.length>0&&v.jsxs("div",{style:{marginBottom:"1rem"},children:[v.jsx("strong",{children:"Tópicos:"}),v.jsx(kf,{style:{marginTop:"0.5rem"},children:t.topics.map((V,F)=>v.jsxs(nl,{style:{background:"#333",fontSize:"0.75rem"},children:["#",V]},F))})]}),v.jsxs("div",{style:{padding:"1rem",background:"#1a1a1a",borderRadius:"8px",marginBottom:"1rem"},children:[v.jsx("strong",{children:"Informações técnicas:"}),v.jsxs("ul",{style:{margin:"0.5rem 0",paddingLeft:"1.5rem",fontSize:"0.9rem"},children:[v.jsxs("li",{children:["Branch padrão: ",v.jsx("code",{children:t.defaultBranch})]}),v.jsxs("li",{children:["Tamanho: ",(t.size/1024).toFixed(1),"MB"]}),t.hasPages&&v.jsx("li",{children:"✅ GitHub Pages disponível"}),t.isArchived&&v.jsx("li",{children:"📦 Repositório arquivado"}),t.isFork&&v.jsx("li",{children:"🍴 Fork de outro repositório"})]})]})]}),v.jsxs(ED,{children:[v.jsxs(Qt,{onClick:()=>Q(t.repo),children:[v.jsx("i",{className:"fa-brands fa-github"})," ",v.jsx("span",{children:"Ver no GitHub"})]}),t.hasPages&&v.jsxs(Qt,{onClick:()=>Q(t.link),children:[v.jsx("i",{className:"fa-solid fa-eye"})," ",v.jsx("span",{children:"Ver Demo"})]}),v.jsxs(Qt,{className:"gradient",onClick:()=>Q(t.clone_url),children:[v.jsx("i",{className:"fa fa-download"})," ",v.jsx("span",{children:"Clonar Repositório"})]})]})]})})}),document.body)]})},MD=t=>t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim().replace(/^-|-$/g,""),kx=[{id:7,title:"Angular 21: Novidades e Vantagens da Nova Versão",slug:MD("Angular 21: Novidades e Vantagens da Nova Versão"),excerpt:"Explore as principais novidades do Angular 21, incluindo melhorias de performance, novos recursos e ferramentas que tornam o desenvolvimento ainda mais eficiente.",content:`O Angular 21 traz uma série de melhorias significativas que consolidam ainda mais sua posição como um dos frameworks mais poderosos para desenvolvimento web. Vamos explorar as principais novidades e vantagens desta versão.

## 🚀 Melhorias de Performance

### Standalone Components por Padrão

O Angular 21 torna os Standalone Components a abordagem padrão, eliminando a necessidade de módulos NgModules para casos simples:

\`\`\`typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  template: \`
  <div class="profile">
  <h2>{{ user.name }}</h2>
  <p>{{ user.email }}</p>
  </div>
  \`
})
export class UserProfileComponent {
  user = { name: 'João Silva', email: 'joao@example.com' };
}
\`\`\`

### Lazy Loading Aprimorado

O novo sistema de lazy loading permite carregamento sob demanda mais eficiente:

\`\`\`typescript
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: \`
  <router-outlet></router-outlet>
  \`
})
export class AppComponent {}

export const routes = [
  {
  path: 'dashboard',
  loadComponent: () => import('./dashboard/dashboard.component')
  },
  {
  path: 'admin',
  loadChildren: () => import('./admin/admin.routes')
  }
];
\`\`\`

## ⚡ Novas Funcionalidades

### Signals API

A nova Signals API oferece uma forma mais reativa de gerenciar estado:

\`\`\`typescript
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: \`
  <div>
  <p>Contador: {{ count() }}</p>
  <p>Dobro: {{ doubleCount() }}</p>
  <button (click)="increment()">Incrementar</button>
  </div>
  \`
})
export class CounterComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  increment() {
  this.count.update(value => value + 1);
  }
}
\`\`\`

### Control Flow Syntax

Nova sintaxe mais intuitiva para estruturas de controle:

\`\`\`typescript
@Component({
  template: \`
  @if (user.isLoggedIn) {
  <p>Bem-vindo, {{ user.name }}!</p>
  } @else {
  <p>Por favor, faça login.</p>
  }

  @for (item of items; track item.id) {
  <div>{{ item.name }}</div>
  } @empty {
  <p>Nenhum item encontrado.</p>
  }

  @switch (status) {
  @case ('loading') {
  <p>Carregando...</p>
  }
  @case ('success') {
  <p>Sucesso!</p>
  }
  @default {
  <p>Erro desconhecido.</p>
  }
  }
  \`
})
export class ExampleComponent {
  user = { isLoggedIn: true, name: 'João' };
  items = [{ id: 1, name: 'Item 1' }];
  status = 'success';
}
\`\`\`

## 🛠️ Ferramentas de Desenvolvimento

### Angular DevTools Aprimorado

O Angular DevTools agora inclui:
- **Signal Debugging**: Visualize e depure signals em tempo real
- **Performance Insights**: Métricas detalhadas de performance
- **Component Tree**: Árvore de componentes mais intuitiva

### Angular CLI Melhorado

Novos comandos e flags para maior produtividade:

\`\`\`bash
# Gerar componente standalone
ng generate component user-profile --standalone

# Novo comando para análise de bundle
ng build --analyze-bundle

# Servidor de desenvolvimento com HMR aprimorado
ng serve --hmr
\`\`\`

## 📱 Melhorias em Responsividade

### Viewport Queries

Novo sistema para responsividade baseado em container queries:

\`\`\`typescript
@Component({
  template: \`
  <div class="card" [style.--container-width]="containerWidth()">
  @container (width >= 400px) {
  .card { padding: 2rem; }
  }
  </div>
  \`
})
export class ResponsiveCardComponent {
  containerWidth = signal('100%');
}
\`\`\`

## 🔒 Melhorias de Segurança

### CSP (Content Security Policy) Aprimorado

Suporte nativo para políticas de segurança mais rigorosas:

\`\`\`typescript
// angular.json
{
  "projects": {
  "my-app": {
  "architect": {
  "build": {
  "options": {
  "security": {
  "csp": true,
  "trustedTypes": true
  }
  }
  }
  }
  }
  }
}
\`\`\`

## 📊 Otimizações de Bundle

### Tree Shaking Inteligente

O Angular 21 implementa tree shaking mais agressivo, reduzindo significativamente o tamanho do bundle final.

### Dynamic Imports Aprimorados

Carregamento dinâmico de módulos mais eficiente:

\`\`\`typescript
const routes = [
  {
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  data: { preload: true }
  }
];
\`\`\`

## 🎨 Melhorias na UX/UI

### Angular Material 21

Atualização do Angular Material com novos componentes e temas:

- **Componentes baseados em MDC (Material Design Components)**
- **Temas dinâmicos**
- **Suporte aprimorado a acessibilidade**
- **Novos componentes como bottom sheets e side sheets**

## 🔧 Migração e Compatibilidade

### Ferramenta de Migração Automática

\`\`\`bash
ng update @angular/core @angular/cli --allow-dirty
\`\`\`

### Compatibilidade com Versões Anteriores

O Angular 21 mantém compatibilidade com versões anteriores, facilitando a migração gradual.

## 📈 Benefícios de Performance

- **Bundle size reduzido**: Até 20% menor em aplicações típicas
- **Runtime performance**: Melhorias significativas no Change Detection
- **Memory usage**: Otimizações no gerenciamento de memória
- **Loading speed**: Carregamento inicial mais rápido

## 🚀 Futuro do Angular

O Angular 21 representa um marco importante na evolução do framework, consolidando tendências modernas como:

- **Reatividade aprimorada** com Signals
- **Sintaxe mais intuitiva** com control flow
- **Performance excepcional**
- **Developer experience** superior

## Conclusão

O Angular 21 traz inovações significativas que tornam o desenvolvimento mais eficiente, performático e agradável. A adoção de padrões modernos como Signals e Standalone Components posiciona o Angular como um framework preparado para o futuro do desenvolvimento web.

Se você ainda não migrou, o Angular 21 oferece uma excelente oportunidade para modernizar suas aplicações e aproveitar todas essas melhorias.`,date:"2024-11-02",author:"Daniel Neitzel",tags:["Angular","Framework","JavaScript","TypeScript","Frontend"],readTime:"18 min",image:"https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&crop=center",slug:"angular-21-novidades-vantagens"},{id:1,title:"Introdução ao React Hooks",excerpt:"Aprenda os conceitos fundamentais dos React Hooks e como eles revolucionaram o desenvolvimento com React.",content:`Os React Hooks representam uma das maiores evoluções no ecossistema React desde sua criação. Introduzidos na versão 16.8, eles permitem que você use estado e outras funcionalidades do React sem escrever uma classe.

## O que são Hooks?

Hooks são funções especiais que permitem "conectar-se" aos recursos do React. Eles permitem que você use state e lifecycle methods em componentes funcionais, algo que antes só era possível em componentes de classe.

## useState - Gerenciando Estado

O hook mais básico e importante é o useState. Ele permite adicionar estado local a componentes funcionais:

\`\`\`javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
  <div>
  <p>Você clicou {count} vezes</p>
  <button onClick={() => setCount(count + 1)}>
  Clique aqui
  </button>
  </div>
  );
}
\`\`\`

## useEffect - Efeitos Colaterais

O useEffect permite executar efeitos colaterais em componentes funcionais, substituindo os métodos de lifecycle como componentDidMount, componentDidUpdate e componentWillUnmount.

## Por que Hooks são importantes?

- **Reutilização de lógica**: Hooks permitem extrair lógica stateful de componentes
- **Componentes mais simples**: Menos código boilerplate
- **Melhor composição**: Lógica relacionada fica agrupada
- **Performance**: Melhor otimização automática do React

Os Hooks mudaram fundamentalmente como escrevemos aplicações React, tornando o código mais legível e reutilizável.`,date:"2024-11-01",author:"Daniel Neitzel",tags:["React","JavaScript","Hooks"],readTime:"5 min",image:"https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=400&fit=crop&crop=center",slug:"introducao-react-hooks"},{id:2,title:"CSS Grid vs Flexbox: Quando usar cada um?",excerpt:"Uma análise prática sobre quando escolher CSS Grid ou Flexbox para layouts modernos.",content:`CSS Grid e Flexbox são duas poderosas ferramentas de layout do CSS moderno. Embora ambos sejam excelentes para criar layouts responsivos, eles servem a propósitos diferentes e são melhores em contextos específicos.

## CSS Grid - Layout Bidimensional

CSS Grid é perfeito para layouts complexos em duas dimensões. Ele trabalha com linhas E colunas simultaneamente, tornando-o ideal para:

- Layouts de página inteira
- Galerias de imagens
- Formulários complexos
- Dashboards e interfaces administrativas

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}
\`\`\`

## Flexbox - Layout Unidimensional

Flexbox brilha quando você precisa controlar o layout em uma única dimensão - seja horizontal ou vertical. É perfeito para:

- Navegação horizontal
- Alinhamento de itens em uma linha
- Componentes individuais
- Layouts simples de uma dimensão

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

## Quando usar cada um?

**Use CSS Grid quando:**
- Você precisa controlar linhas E colunas
- O layout é complexo e bidimensional
- Você quer controle preciso sobre posicionamento

**Use Flexbox quando:**
- Você trabalha com uma dimensão por vez
- Precisa de alinhamento simples
- Quer flexibilidade em tamanhos de itens

## Combinando Grid e Flexbox

A melhor abordagem geralmente é combinar ambos. Use CSS Grid para o layout geral da página e Flexbox para componentes individuais dentro do grid.

> "CSS Grid e Flexbox não são concorrentes, são complementares. Use cada um onde ele se destaca."

Esta combinação oferece o melhor dos dois mundos, criando layouts modernos, responsivos e manuteníveis.`,date:"2024-10-25",author:"Daniel Neitzel",tags:["CSS","Layout","Frontend"],readTime:"7 min",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&crop=center",slug:"css-grid-vs-flexbox"},{id:3,title:"Desenvolvendo PWAs com React",excerpt:"Guia completo para criar Progressive Web Apps usando React e service workers.",content:`Progressive Web Apps (PWAs) combinam o melhor da web e das aplicações nativas. Com React, criar PWAs tornou-se mais acessível e poderoso.

## O que é uma PWA?

Uma PWA é uma aplicação web que oferece uma experiência similar a apps nativos, incluindo:

- **Instalabilidade**: Pode ser instalada no dispositivo
- **Offline-first**: Funciona sem conexão
- **Push Notifications**: Notificações push
- **App-like UX**: Navegação e interações nativas

## Service Workers - O Coração da PWA

Service Workers são scripts que rodam em background, permitindo funcionalidades offline e caching inteligente.

\`\`\`javascript
// Exemplo básico de Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
  caches.match(event.request)
  .then((response) => {
  return response || fetch(event.request);
  })
  );
});
\`\`\`

## Implementando PWA com React

### 1. Web App Manifest

Crie um arquivo manifest.json na pasta public:

\`\`\`json
{
  "name": "Minha PWA",
  "short_name": "PWA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [...]
}
\`\`\`

### 2. Service Worker

Use bibliotecas como workbox ou implemente manualmente:

\`\`\`javascript
import { register } from 'register-service-worker';

register('/sw.js', {
  ready() {
  console.log('Service worker is active.');
  },
  cached() {
  console.log('Content has been cached for offline use.');
  }
});
\`\`\`

## Benefícios das PWAs

- **Alcance**: Disponível em qualquer dispositivo com navegador
- **Custo**: Desenvolvimento único para múltiplas plataformas
- **Atualização**: Atualização automática sem App Store
- **Performance**: Cache inteligente e carregamento rápido

## Considerações Finais

PWAs representam o futuro do desenvolvimento web. Com React, você pode criar aplicações que rivalizam com apps nativos em termos de experiência do usuário, mantendo todos os benefícios da web.`,date:"2024-10-18",author:"Daniel Neitzel",tags:["PWA","React","Service Workers"],readTime:"10 min",image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop&crop=center",slug:"desenvolvendo-pwas-react"},{id:4,title:"TypeScript para Desenvolvedores JavaScript",excerpt:"Como migrar seus projetos JavaScript para TypeScript de forma gradual e segura.",content:`TypeScript é um superset do JavaScript que adiciona tipagem estática opcional. Para desenvolvedores JavaScript experientes, a migração pode parecer intimidante, mas é mais simples do que parece.

## Por que TypeScript?

TypeScript oferece vários benefícios:

- **Captura de erros em tempo de desenvolvimento**
- **Melhor IntelliSense e autocomplete**
- **Refatoração mais segura**
- **Documentação viva através de tipos**
- **Melhor experiência de desenvolvimento**

## Migração Gradual

A beleza do TypeScript é que você pode migrar gradualmente:

### Passo 1: Instalação

\`\`\`bash
npm install --save-dev typescript @types/node
\`\`\`

### Passo 2: Configuração (tsconfig.json)

\`\`\`json
{
  "compilerOptions": {
  "target": "es5",
  "lib": ["dom", "dom.iterable", "es6"],
  "allowJs": true,
  "skipLibCheck": true,
  "esModuleInterop": true,
  "allowSyntheticDefaultImports": true,
  "strict": true,
  "forceConsistentCasingInFileNames": true,
  "noFallthroughCasesInSwitch": true,
  "module": "esnext",
  "moduleResolution": "node",
  "resolveJsonModule": true,
  "isolatedModules": true,
  "noEmit": true,
  "jsx": "react-jsx"
  },
  "include": ["src"]
}
\`\`\`

### Passo 3: Renomeie arquivos

Comece renomeando .js para .tsx (para componentes React) ou .ts (para outros arquivos).

### Passo 4: Adicione tipos gradualmente

\`\`\`typescript
// Antes (JavaScript)
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Depois (TypeScript)
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

## Conceitos Essenciais

### Interfaces

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function createUser(user: User): User {
  return user;
}
\`\`\`

### Tipos Genéricos

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
\`\`\`

### Union Types

\`\`\`typescript
type Status = "loading" | "success" | "error";

function setStatus(status: Status) {
  // status só pode ser um dos três valores
}
\`\`\`

## Dicas para Migração

1. **Comece pequeno**: Migre um arquivo por vez
2. **Use any temporariamente**: Para código legado complexo
3. **Aproveite o strict mode**: Mas configure gradualmente
4. **Use ferramentas**: ESLint com regras TypeScript
5. **Documente tipos**: Interfaces bem nomeadas servem como documentação

## Conclusão

TypeScript não é apenas sobre tipagem - é sobre escrever código mais robusto e manutenível. A curva de aprendizado vale a pena pelos benefícios de longo prazo em projetos maiores.`,date:"2024-10-10",author:"Daniel Neitzel",tags:["TypeScript","JavaScript","Tipagem"],readTime:"8 min",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&crop=center",slug:"typescript-desenvolvedores-javascript"},{id:5,title:"Otimizando Performance em React Apps",excerpt:"Técnicas avançadas para melhorar a performance de aplicações React.",content:`Performance é crucial para uma boa experiência do usuário. React oferece várias ferramentas e técnicas para otimizar aplicações. Vamos explorar as estratégias mais efetivas.

## 1. React.memo - Memorização de Componentes

Previne re-renders desnecessários de componentes funcionais:

\`\`\`javascript
import React from 'react';

const MyComponent = React.memo(({ data }) => {
  return <div>{data.value}</div>;
});
\`\`\`

## 2. useMemo - Memorização de Valores

Cache valores computados custosos:

\`\`\`javascript
import { useMemo } from 'react';

const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
\`\`\`

## 3. useCallback - Memorização de Funções

Previne criação desnecessária de funções em cada render:

\`\`\`javascript
const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## 4. Code Splitting com React.lazy

Divida seu código em chunks menores:

\`\`\`javascript
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
  <Suspense fallback={<div>Loading...</div>}>
  <OtherComponent />
  </Suspense>
  );
}
\`\`\`

## 5. Virtualização de Listas

Para listas grandes, use bibliotecas como react-window:

\`\`\`javascript
import { FixedSizeList as List } from 'react-window';

const MyList = ({ items }) => (
  <List
  height={400}
  itemCount={items.length}
  itemSize={35}
  >
  {({ index, style }) => <div style={style}>{items[index]}</div>}
  </List>
);
\`\`\`

## 6. Otimização de Imagens

Use lazy loading e formatos modernos:

\`\`\`javascript
import { useState } from 'react';

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
  <img
  src={src}
  alt={alt}
  loading="lazy"
  onLoad={() => setLoaded(true)}
  style={{ opacity: loaded ? 1 : 0.5 }}
  />
  );
};
\`\`\`

## 7. Bundle Analysis

Use ferramentas para analisar o tamanho do bundle:

\`\`\`bash
npm install --save-dev webpack-bundle-analyzer
\`\`\`

## 8. Service Workers para Cache

Implemente caching inteligente para assets estáticos.

## Métricas de Performance

Monitore estas métricas importantes:

- **First Contentful Paint (FCP)**
- **Largest Contentful Paint (LCP)**
- **First Input Delay (FID)**
- **Cumulative Layout Shift (CLS)**

## Ferramentas Úteis

- **React DevTools Profiler**: Para identificar bottlenecks
- **Lighthouse**: Auditoria automática de performance
- **Web Vitals**: Métricas do Google

## Conclusão

Otimização de performance é um processo contínuo. Comece identificando gargalos com ferramentas de profiling, implemente otimizações incrementalmente e sempre meça o impacto das mudanças.`,date:"2024-10-05",author:"Daniel Neitzel",tags:["React","Performance","Otimização"],readTime:"12 min",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center",slug:"otimizando-performance-react"},{id:6,title:"Introdução ao Node.js e Express",excerpt:"Construa sua primeira API REST com Node.js e Express do zero.",content:`Node.js revolucionou o desenvolvimento backend, permitindo usar JavaScript tanto no frontend quanto no backend. Express.js é o framework mais popular para construir APIs REST com Node.js.

## O que é Node.js?

Node.js é um runtime JavaScript que permite executar JavaScript fora do navegador. Ele usa o motor V8 do Chrome e oferece APIs para operações de I/O não-bloqueantes.

## Instalação e Setup

\`\`\`bash
# Instalar Node.js
# Baixe do site oficial ou use nvm

# Verificar instalação
node --version
npm --version

# Criar projeto
mkdir minha-api
cd minha-api
npm init -y
\`\`\`

## Primeiro Servidor com Node.js Puro

\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
\`\`\`

## Introdução ao Express

Express simplifica a criação de servidores web:

\`\`\`bash
npm install express
\`\`\`

\`\`\`javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('API rodando na porta 3000');
});
\`\`\`

## Estrutura de uma API REST

### Rotas Básicas

\`\`\`javascript
// GET - Buscar dados
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST - Criar novo recurso
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT - Atualizar recurso existente
app.put('/api/users/:id', (req, res) => {
  const id = req.params.id;
  // Lógica de atualização
  res.json(updatedUser);
});

// DELETE - Remover recurso
app.delete('/api/users/:id', (req, res) => {
  const id = req.params.id;
  // Lógica de remoção
  res.status(204).send();
});
\`\`\`

### Middleware

Middleware são funções que têm acesso ao objeto de requisição, resposta e à próxima função middleware:

\`\`\`javascript
// Middleware para parsing JSON
app.use(express.json());

// Middleware de logging
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.path}\`);
  next();
});

// Middleware de autenticação
const authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Acesso negado');
  next();
};
\`\`\`

## Estrutura do Projeto

Organize seu projeto desta forma:

\`\`\`
meu-projeto/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── app.js
├── package.json
└── server.js
\`\`\`

## Boas Práticas

1. **Separação de responsabilidades**: Controllers, routes, models
2. **Tratamento de erros**: Use middleware de erro
3. **Validação**: Valide entrada de dados
4. **Segurança**: Implemente CORS, helmet, rate limiting
5. **Testes**: Escreva testes para suas rotas
6. **Documentação**: Use Swagger ou similar

## Próximos Passos

- Aprenda sobre bancos de dados (MongoDB, PostgreSQL)
- Implemente autenticação JWT
- Explore frameworks como NestJS
- Estude testes com Jest
- Implemente cache com Redis

Node.js e Express formam uma combinação poderosa para construir APIs modernas e escaláveis.`,date:"2024-09-28",author:"Daniel Neitzel",tags:["Node.js","Express","Backend"],readTime:"15 min",image:"https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop&crop=center",slug:"introducao-nodejs-express"}],DD=U(Co)`
  background: #1a1a1a;
  padding: ${t=>t.theme.spacing.xxl} 0;
`,zD=U(ue.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 1fr;
  gap: ${t=>t.theme.spacing.xl};
  margin: ${t=>t.theme.spacing.xxl} 0;

  @media (max-width: ${t=>t.theme.breakpoints.tablet}) {
  grid-template-columns: 1fr;
  gap: ${t=>t.theme.spacing.lg};
  }
`,Ox=U(ue.div)`
  background: ${t=>t.theme.colors.backgroundAlt};
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${t=>t.theme.colors.border};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  min-height: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
  border-color: ${t=>t.theme.colors.primary};
  transform: translateY(-5px);
  box-shadow: ${t=>t.theme.shadows.strong};
  }

  &::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${t=>t.theme.colors.gradientText};
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  }

  &:hover::before {
  transform: scaleX(1);
  }
`,RD=U.div`
  width: 100%;
  height: 180px;
  background: ${t=>t.theme.colors.border};
  background-image: url(${t=>t.src});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(91, 255, 139, 0.1), rgba(0, 255, 255, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
  }

  ${Ox}:hover &::after {
  opacity: 1;
  }
`,kD=U.div`
  padding: ${t=>t.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`,OD=U.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${t=>t.theme.spacing.sm};
  font-size: 0.8rem;
  color: ${t=>t.theme.colors.textMuted};
`,$D=U.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: ${t=>t.theme.spacing.sm};
  background: ${t=>t.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;
`,ND=U.p`
  color: ${t=>t.theme.colors.textMuted};
  line-height: 1.6;
  margin-bottom: ${t=>t.theme.spacing.md};
  font-size: 0.95rem;
  flex: 1;
`,VD=U.div`
  margin-top: auto;
`,_D=U.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${t=>t.theme.spacing.xs};
  margin-bottom: ${t=>t.theme.spacing.md};
`,av=U.span`
  background: ${t=>t.theme.colors.background};
  color: ${t=>t.theme.colors.primary};
  padding: ${t=>t.theme.spacing.xs} ${t=>t.theme.spacing.sm};
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid ${t=>t.theme.colors.border};
`,LD=U.button`
  background: transparent;
  color: ${t=>t.theme.colors.textMuted};
  border: 1px solid ${t=>t.theme.colors.border};
  padding: ${t=>t.theme.spacing.sm};
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
  background: ${t=>t.theme.colors.primary};
  color: ${t=>t.theme.colors.background};
  border-color: ${t=>t.theme.colors.primary};
  }

  &.copied {
  background: ${t=>t.theme.colors.success||"#4CAF50"};
  color: white;
  border-color: ${t=>t.theme.colors.success||"#4CAF50"};
  }

  i {
  font-size: 0.9rem;
  }
`;U.div`
  background: ${t=>t.theme.colors.backgroundAlt};
  border: 1px solid ${t=>t.theme.colors.border};
  border-radius: 8px;
  margin: ${t=>t.theme.spacing.lg} 0;
  overflow: hidden;
  position: relative;

  &::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${t=>t.theme.colors.gradientText};
  }
`;U.div`
  background: ${t=>t.theme.colors.background};
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  border-bottom: 1px solid ${t=>t.theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: ${t=>t.theme.colors.textMuted};
`;U.pre`
  background: ${t=>t.theme.colors.background};
  padding: ${t=>t.theme.spacing.md};
  margin: 0;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${t=>t.theme.colors.text};
`;U.button`
  background: none;
  border: none;
  color: ${t=>t.theme.colors.primary};
  cursor: pointer;
  padding: ${t=>t.theme.spacing.xs};
  border-radius: 4px;
  font-size: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
  background: ${t=>t.theme.colors.backgroundAlt};
  color: ${t=>t.theme.colors.text};
  }

  i {
  font-size: 0.9rem;
  }
`;const BD=()=>{const[t,i]=C.useState(null),o={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.6,staggerChildren:.1}}},r={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},u=d=>new Date(d).toLocaleDateString("pt-BR",{year:"numeric",month:"short",day:"numeric"}),f=async d=>{try{const p=`${window.location.origin}/blog/${d}`;await navigator.clipboard.writeText(p),i(d),setTimeout(()=>{i(null)},3e3)}catch(p){console.error("Erro ao copiar link:",p);const h=document.createElement("textarea"),m=`${window.location.origin}/blog/${d}`;h.value=m,document.body.appendChild(h),h.select(),document.execCommand("copy"),document.body.removeChild(h),i(d),setTimeout(()=>{i(null)},3e3)}};return v.jsx(DD,{children:v.jsx(Un,{children:v.jsxs(ue.div,{variants:o,initial:"hidden",animate:"visible",children:[v.jsxs(ue.div,{variants:r,style:{textAlign:"center"},children:[v.jsx(Zi,{$gradient:!0,children:"Meu Blog"}),v.jsx(Ft,{children:"Compartilhando conhecimento sobre desenvolvimento web, tutoriais e melhores práticas."})]}),v.jsx(zD,{variants:o,initial:"hidden",animate:"visible",children:kx.map((d,p)=>v.jsx(jl,{to:`/blog/${d.slug}`,style:{textDecoration:"none"},children:v.jsxs(Ox,{variants:r,whileHover:{scale:1.02},children:[v.jsx(RD,{src:d.image}),v.jsxs(kD,{children:[v.jsxs("div",{children:[v.jsxs(OD,{children:[v.jsxs("span",{children:[v.jsx("i",{className:"fa fa-calendar"})," ",u(d.date)]}),v.jsxs("span",{children:[v.jsx("i",{className:"fa fa-clock"})," ",d.readTime]})]}),v.jsx($D,{children:d.title}),v.jsx(ND,{children:d.excerpt})]}),v.jsxs(VD,{children:[v.jsxs(_D,{children:[d.tags.slice(0,3).map((h,m)=>v.jsx(av,{children:h},m)),d.tags.length>3&&v.jsxs(av,{children:["+",d.tags.length-3]})]}),v.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:v.jsx(LD,{onClick:h=>{h.preventDefault(),f(d.slug)},className:t===d.slug?"copied":"",title:"Copiar link do artigo",children:v.jsx("i",{className:t===d.slug?"fa fa-check":"fa fa-share"})})})]})]})]})},d.id))})]})})})},iv=U(Co)`
  background: ${t=>t.theme.colors.background};
  padding: ${t=>t.theme.spacing.xxl} 0;
  min-height: 100vh;
`,sv=U(jl)`
  display: inline-flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.sm};
  color: ${t=>t.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  margin-bottom: ${t=>t.theme.spacing.xl};
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  border: 1px solid ${t=>t.theme.colors.primary};
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
  background: ${t=>t.theme.colors.primary};
  color: ${t=>t.theme.colors.background};
  }

  i {
  font-size: 0.9rem;
  }
`,UD=U.div`
  margin-bottom: ${t=>t.theme.spacing.xxl};
  text-align: center;
`,HD=U.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: ${t=>t.theme.spacing.xl};
  box-shadow: ${t=>t.theme.shadows.strong};
`,qD=U.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: ${t=>t.theme.spacing.md};
  background: ${t=>t.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;

  @media (max-width: ${t=>t.theme.breakpoints.tablet}) {
  font-size: 2rem;
  }
`,GD=U.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${t=>t.theme.spacing.lg};
  margin-bottom: ${t=>t.theme.spacing.xl};
  font-size: 1rem;
  color: ${t=>t.theme.colors.textMuted};
`,YD=U.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.sm};
`,XD=U.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${t=>t.theme.spacing.sm};
  margin-bottom: ${t=>t.theme.spacing.xxl};
`,PD=U.span`
  background: ${t=>t.theme.colors.backgroundAlt};
  color: ${t=>t.theme.colors.primary};
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${t=>t.theme.colors.border};
`,ov=U.button`
  background: ${t=>t.theme.colors.backgroundAlt};
  color: ${t=>t.theme.colors.primary};
  border: 1px solid ${t=>t.theme.colors.border};
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.sm};
  margin-top: ${t=>t.theme.spacing.md};

  &:hover {
  background: ${t=>t.theme.colors.primary};
  color: ${t=>t.theme.colors.background};
  transform: translateY(-2px);
  box-shadow: ${t=>t.theme.shadows.medium};
  }

  &:active {
  transform: translateY(0);
  }

  i {
  font-size: 1rem;
  }

  &.copied {
  background: ${t=>t.theme.colors.success||"#4CAF50"};
  color: white;
  border-color: ${t=>t.theme.colors.success||"#4CAF50"};
  }
`,KD=U.div`
  display: flex;
  justify-content: center;
  margin: ${t=>t.theme.spacing.xl} 0;
  padding: ${t=>t.theme.spacing.lg};
  background: ${t=>t.theme.colors.backgroundAlt};
  border-radius: 12px;
  border: 1px solid ${t=>t.theme.colors.border};
`,QD=U.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  font-size: 1.1rem;
  color: ${t=>t.theme.colors.text};

  h1, h2, h3, h4, h5, h6 {
  margin-top: ${t=>t.theme.spacing.xxl};
  margin-bottom: ${t=>t.theme.spacing.lg};
  background: ${t=>t.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;
  }

  h1 { font-size: 2rem; }
  h2 { font-size: 1.8rem; }
  h3 { font-size: 1.5rem; }
  h4 { font-size: 1.3rem; }
  h5 { font-size: 1.2rem; }
  h6 { font-size: 1.1rem; }

  p {
  margin-bottom: ${t=>t.theme.spacing.lg};
  text-align: justify;
  }

  ul, ol {
  margin-bottom: ${t=>t.theme.spacing.lg};
  padding-left: ${t=>t.theme.spacing.xl};
  }

  li {
  margin-bottom: ${t=>t.theme.spacing.sm};
  }

  code {
  background: ${t=>t.theme.colors.backgroundAlt};
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.9em;
  border: 1px solid ${t=>t.theme.colors.border};
  }

  pre {
  background: ${t=>t.theme.colors.backgroundAlt};
  padding: ${t=>t.theme.spacing.lg};
  border-radius: 8px;
  overflow-x: auto;
  margin: ${t=>t.theme.spacing.lg} 0;
  border: 1px solid ${t=>t.theme.colors.border};

  code {
  background: none;
  padding: 0;
  border: none;
  }
  }

  blockquote {
  border-left: 4px solid ${t=>t.theme.colors.primary};
  padding-left: ${t=>t.theme.spacing.lg};
  margin: ${t=>t.theme.spacing.lg} 0;
  font-style: italic;
  color: ${t=>t.theme.colors.textMuted};
  background: ${t=>t.theme.colors.backgroundAlt};
  padding: ${t=>t.theme.spacing.md};
  border-radius: 0 8px 8px 0;
  }

  img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: ${t=>t.theme.spacing.lg} 0;
  box-shadow: ${t=>t.theme.shadows.medium};
  }

  table {
  width: 100%;
  border-collapse: collapse;
  margin: ${t=>t.theme.spacing.lg} 0;
  background: ${t=>t.theme.colors.backgroundAlt};
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${t=>t.theme.colors.border};
  }

  th, td {
  padding: ${t=>t.theme.spacing.md};
  text-align: left;
  border-bottom: 1px solid ${t=>t.theme.colors.border};
  }

  th {
  background: ${t=>t.theme.colors.background};
  font-weight: 600;
  color: ${t=>t.theme.colors.primary};
  }

  @media (max-width: ${t=>t.theme.breakpoints.tablet}) {
  font-size: 1rem;

  h1 { font-size: 1.8rem; }
  h2 { font-size: 1.6rem; }
  h3 { font-size: 1.4rem; }
  }
`,ZD=U.div`
  background: ${t=>t.theme.colors.backgroundAlt};
  border: 1px solid ${t=>t.theme.colors.border};
  border-radius: 8px;
  margin: ${t=>t.theme.spacing.xl} 0;
  overflow: hidden;
  position: relative;

  &::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${t=>t.theme.colors.gradientText};
  }
`,FD=U.div`
  background: ${t=>t.theme.colors.background};
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  border-bottom: 1px solid ${t=>t.theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: ${t=>t.theme.colors.textMuted};
`,JD=U.pre`
  background: ${t=>t.theme.colors.background};
  padding: ${t=>t.theme.spacing.lg};
  margin: 0;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${t=>t.theme.colors.text};
`,WD=U.button`
  background: none;
  border: none;
  color: ${t=>t.theme.colors.primary};
  cursor: pointer;
  padding: ${t=>t.theme.spacing.xs};
  border-radius: 4px;
  font-size: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
  background: ${t=>t.theme.colors.backgroundAlt};
  color: ${t=>t.theme.colors.text};
  }

  i {
  font-size: 0.9rem;
  }
`,ID=U.div`
  text-align: center;
  padding: ${t=>t.theme.spacing.xxl} 0;
`,e3=()=>{const{slug:t}=GT(),i=kx.find(p=>p.slug===t),[o,r]=C.useState(!1);C.useEffect(()=>{i?document.title=`${i.title} - Daniel Neitzel`:document.title="Artigo não encontrado - Daniel Neitzel",window.scrollTo(0,0)},[i]);const u=async()=>{try{const p=window.location.href;await navigator.clipboard.writeText(p),r(!0),setTimeout(()=>{r(!1)},3e3)}catch(p){console.error("Erro ao copiar link:",p);const h=document.createElement("textarea");h.value=window.location.href,document.body.appendChild(h),h.select(),document.execCommand("copy"),document.body.removeChild(h),r(!0),setTimeout(()=>{r(!1)},3e3)}};if(!i)return v.jsx(iv,{children:v.jsx(Un,{children:v.jsxs(ID,{children:[v.jsx(Zi,{$gradient:!0,children:"Artigo não encontrado"}),v.jsx(Ft,{children:"O artigo que você está procurando não existe ou foi removido."}),v.jsxs(sv,{to:"/#blog",children:[v.jsx("i",{className:"fa fa-arrow-left"}),"Voltar ao Blog"]})]})})});const f=p=>new Date(p).toLocaleDateString("pt-BR",{year:"numeric",month:"long",day:"numeric"}),d=p=>{const h=p.split(/(```[\s\S]*?```)/g),m=[];return h.forEach((y,x)=>{if(y.startsWith("```")&&y.endsWith("```")){const S=y.slice(3,-3).trim(),T=S.split(`
`),j=T[0]?.trim()||"",D=j.match(/^(\w+)$/)?j:"",z=D?T.slice(1).join(`
`):S;m.push(v.jsxs(ZD,{children:[v.jsxs(FD,{children:[v.jsx("span",{children:D||"Código"}),v.jsx(WD,{onClick:()=>{navigator.clipboard.writeText(z)},title:"Copiar código",children:v.jsx("i",{className:"fa fa-copy"})})]}),v.jsx(JD,{children:v.jsx("code",{children:z})})]},`code-${x}`))}else y.trim()&&y.split(`

`).filter(T=>T.trim()).forEach((T,j)=>{if(T.trim())if(T.startsWith("## ")){const D=T.replace(/^##\s/,"");m.push(v.jsx("h2",{children:D},`text-${x}-${j}`))}else if(T.startsWith("> "))m.push(v.jsx("blockquote",{children:T.replace(/^>\s?/,"")},`text-${x}-${j}`));else if(T.includes(`
- `)||/^\d+\.\s/.test(T.split(`
`)[0])){const D=T.split(`
`).filter(R=>R.trim());/^\d+\.\s/.test(D[0])?m.push(v.jsx("ol",{children:D.map((R,k)=>v.jsx("li",{children:R.replace(/^\d+\.\s/,"")},`item-${k}`))},`text-${x}-${j}`)):m.push(v.jsx("ul",{children:D.map((R,k)=>v.jsx("li",{children:R.replace(/^- /,"")},`item-${k}`))},`text-${x}-${j}`))}else m.push(v.jsx("p",{children:T},`text-${x}-${j}`))})}),m};return v.jsx(iv,{children:v.jsx(Un,{children:v.jsxs(ue.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:[v.jsxs(sv,{to:"/#blog",children:[v.jsx("i",{className:"fa fa-arrow-left"}),"Voltar ao Blog"]}),v.jsxs(UD,{children:[v.jsx(HD,{src:i.image,alt:i.title}),v.jsx(qD,{children:i.title}),v.jsxs(GD,{children:[v.jsxs("span",{children:[v.jsx("i",{className:"fa fa-calendar"})," ",f(i.date)]}),v.jsxs("span",{children:[v.jsx("i",{className:"fa fa-clock"})," ",i.readTime]}),v.jsxs(YD,{children:[v.jsx("i",{className:"fa fa-user"}),v.jsx("span",{children:i.author})]})]}),v.jsx(XD,{children:i.tags.map((p,h)=>v.jsx(PD,{children:p},h))}),v.jsx("div",{style:{display:"flex",justifyContent:"center"},children:v.jsxs(ov,{onClick:u,className:o?"copied":"",title:"Copiar link do artigo",children:[v.jsx("i",{className:o?"fa fa-check":"fa fa-share"}),o?"Link Copiado!":"Compartilhar Artigo"]})})]}),v.jsxs(QD,{children:[d(i.content),v.jsx(KD,{children:v.jsxs(ov,{onClick:u,className:o?"copied":"",title:"Copiar link do artigo",children:[v.jsx("i",{className:o?"fa fa-check":"fa fa-share"}),o?"Link Copiado!":"Compartilhar Artigo"]})})]})]})})})},t3=U.footer`
  background: ${t=>t.theme.colors.backgroundAlt};
  border-top: 1px solid ${t=>t.theme.colors.border};
  padding: ${t=>t.theme.spacing.xxl} 0 ${t=>t.theme.spacing.lg};
`,n3=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${t=>t.theme.spacing.lg};
`,a3=U.div`
  display: flex;
  gap: ${t=>t.theme.spacing.md};
  flex-wrap: wrap;
  justify-content: center;
`,i3=U(ue.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${t=>t.theme.colors.background};
  color: ${t=>t.theme.colors.text};
  border: 1px solid ${t=>t.theme.colors.border};
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
  color: ${t=>t.theme.colors.background};
  border-color: ${t=>t.theme.colors.primary};
  transform: translateY(-3px);
  box-shadow: ${t=>t.theme.shadows.medium};
  }

  &::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${t=>t.theme.colors.gradientText};
  transform: scale(0);
  border-radius: 50%;
  transition: transform 0.3s ease;
  z-index: -1;
  }

  &:hover::before {
  transform: scale(1);
  }

  i {
  position: relative;
  z-index: 1;
  }

  // Cores específicas para cada rede social
  &.facebook:hover {
  border-color: #1877f2;
  &::before { background: #1877f2; }
  }

  &.instagram:hover {
  border-color: #e4405f;
  &::before { background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); }
  }

  &.github:hover {
  border-color: #333;
  &::before { background: #ffffff; }
  }

  &.linkedin:hover {
  border-color: #0077b5;
  &::before { background: #0077b5; }
  }

  &.steam:hover {
  border-color: #171a21;
  &::before { background: linear-gradient(45deg, #171a21, #66c0f4); }
  }
`,s3=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${t=>t.theme.spacing.sm};
  
  .year {
  font-size: 1.5rem;
  font-weight: 700;
  background: ${t=>t.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  }

  .text {
  font-size: 0.9rem;
  color: ${t=>t.theme.colors.textMuted};
  }
`,o3=U(ue.button)`
  background: none;
  border: 1px solid ${t=>t.theme.colors.border};
  color: ${t=>t.theme.colors.text};
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.xs};

  &:hover {
  border-color: ${t=>t.theme.colors.primary};
  color: ${t=>t.theme.colors.primary};
  transform: translateY(-2px);
  }

  i {
  font-size: 0.8rem;
  }
`,r3=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${t=>t.theme.spacing.xs};
  margin-bottom: ${t=>t.theme.spacing.md};

  .status {
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.xs};
  font-size: 0.9rem;
  color: ${t=>t.theme.colors.textMuted};

  .indicator {
  width: 8px;
  height: 8px;
  background: ${t=>t.theme.colors.primary};
  border-radius: 50%;
  animation: pulse 2s infinite;
  }

  @keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
  }
  }

  .location {
  font-size: 0.8rem;
  color: ${t=>t.theme.colors.textMuted};
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.xs};
  }
`,l3=()=>{const t=new Date().getFullYear(),i=[{href:"https://www.facebook.com/DanielVNeitzel",icon:"fa-brands fa-facebook",label:"Facebook",className:"facebook"},{href:"https://www.instagram.com/danielneitzel_dev/",icon:"fa-brands fa-instagram",label:"Instagram",className:"instagram"},{href:"https://github.com/DanVNeitzel",icon:"fa-brands fa-square-github",label:"GitHub",className:"github"},{href:"https://www.linkedin.com/in/danielneitzel",icon:"fa-brands fa-linkedin",label:"LinkedIn",className:"linkedin"},{href:"#",icon:"fa fa-gamepad",label:"Steam",className:"steam"}],o=()=>{window.scrollTo({top:0,behavior:"smooth"})},r={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,staggerChildren:.1}}},u={hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:{duration:.4}}},f={hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1,transition:{type:"spring",stiffness:260,damping:20}}};return v.jsx(t3,{children:v.jsx(Un,{children:v.jsx(ue.div,{variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:v.jsxs(n3,{children:[v.jsx(ue.div,{variants:u,children:v.jsxs(r3,{children:[v.jsxs("div",{className:"status",children:[v.jsx("span",{className:"indicator"}),"Disponível para novos projetos"]}),v.jsxs("div",{className:"location",children:[v.jsx("i",{className:"fa fa-map-marker-alt"}),"São Paulo, Brasil"]})]})}),v.jsx(ue.div,{variants:u,children:v.jsx(a3,{children:i.map((d,p)=>v.jsx(i3,{href:d.href,target:"_blank",rel:"noopener noreferrer",className:d.className,variants:f,whileHover:{scale:1.1},whileTap:{scale:.95},title:d.label,children:v.jsx("i",{className:d.icon})},p))})}),v.jsx(ue.div,{variants:u,children:v.jsxs(o3,{onClick:o,whileHover:{scale:1.05},whileTap:{scale:.95},children:[v.jsx("i",{className:"fa fa-arrow-up"}),"Voltar ao topo"]})}),v.jsx(ue.div,{variants:u,children:v.jsxs(s3,{children:[v.jsx("span",{className:"year",children:t}),v.jsx("span",{className:"text",children:"© Todos os direitos reservados • Daniel Neitzel"})]})})]})})})})},u3=U(ue.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  padding: ${t=>t.theme.spacing.sm};

  @media (max-width: ${t=>t.theme.breakpoints.mobile}) {
    padding: ${t=>t.theme.spacing.xs};
    align-items: flex-start;
    padding-top: ${t=>t.theme.spacing.xl};
  }
`,c3=U(ue.div)`
  background: ${t=>t.theme.colors.background};
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  height: 90vh;
  max-height: 800px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${t=>t.theme.colors.border};

  @media (max-width: ${t=>t.theme.breakpoints.mobile}) {
    width: 95%;
    height: 95vh;
    max-height: none;
    border-radius: 8px;
  }
`,f3=U.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${t=>t.theme.spacing.md};
  border-bottom: 1px solid ${t=>t.theme.colors.border};
  background: ${t=>t.theme.colors.backgroundAlt};
  position: relative;

  @media (max-width: ${t=>t.theme.breakpoints.mobile}) {
    padding: ${t=>t.theme.spacing.sm};
    flex-direction: column;
    align-items: stretch;
    gap: ${t=>t.theme.spacing.sm};
  }
`,d3=U.h3`
  margin: 0;
  color: ${t=>t.theme.colors.text};
  font-size: 1.2rem;

  @media (max-width: ${t=>t.theme.breakpoints.mobile}) {
    font-size: 1rem;
    line-height: 1.3;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,h3=U.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${t=>t.theme.colors.text};
  padding: ${t=>t.theme.spacing.xs};
  border-radius: 4px;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
  background: ${t=>t.theme.colors.border};
  color: ${t=>t.theme.colors.primary};
  }

  @media (max-width: ${t=>t.theme.breakpoints.mobile}) {
    font-size: 1.2rem;
    padding: 4px 8px;
    margin-left: ${t=>t.theme.spacing.sm};
    align-self: flex-start;
  }
`,m3=U.div`
  height: calc(100% - 80px);
  width: 100%;

  iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0 0 12px 12px;
  }

  @media (max-width: ${t=>t.theme.breakpoints.mobile}) {
    height: calc(100% - 120px);
  }
`,p3=U.button`
  font-size: 0.9rem;
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  background: ${t=>t.theme.colors.primary};
  color: ${t=>t.theme.colors.background};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
  background: ${t=>t.theme.colors.secondary};
  transform: translateY(-2px);
  }

  @media (max-width: ${t=>t.theme.breakpoints.mobile}) {
    width: 100%;
    font-size: 0.8rem;
    padding: ${t=>t.theme.spacing.sm};
    text-align: center;
  }
`,g3=U.div`
  min-height: 100vh;
  background: #000000;
  color: ${t=>t.theme.colors.text};
`,y3=U.main`
  position: relative;
  z-index: 1;
`,v3=U.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.2;
  background-image: 
  radial-gradient(circle at 25% 25%, ${t=>t.theme.colors.primary} 2px, transparent 2px),
  radial-gradient(circle at 75% 75%, ${t=>t.theme.colors.secondary} 1px, transparent 1px);
  background-size: 50px 50px, 30px 30px;
  background-position: 0 0, 25px 25px;
  pointer-events: none;
  z-index: 0;
`,b3=U.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${t=>t.progress}%;
  height: 3px;
  background: ${t=>t.theme.colors.gradientText};
  z-index: 1001;
`;function x3(){const[t,{toggle:i,setFalse:o}]=PC(!1),[r,u]=C.useState("home"),[f,d]=C.useState(!1),[p,h]=C.useState(!1),m=Fv();KC();const y=document.documentElement.scrollHeight-window.innerHeight,x=y>0?m/y*100:0,S=D=>{u(D),o();const z=document.getElementById(D);z?z.scrollIntoView({behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})},T=C.useCallback(()=>{h(!0),o()},[o]),j=C.useCallback(()=>{h(!1)},[]);return C.useEffect(()=>{const D=()=>T();return window.addEventListener("openCVModal",D),()=>window.removeEventListener("openCVModal",D)},[T]),C.useEffect(()=>{const z=["home","skills","projects","blog"].map(k=>document.getElementById(k)),R=new IntersectionObserver(k=>{k.forEach(L=>{L.isIntersecting&&L.intersectionRatio>.5&&u(L.target.id)})},{threshold:[.1,.5,.9],rootMargin:"-100px 0px -100px 0px"});return z.forEach(k=>{k&&R.observe(k)}),()=>{z.forEach(k=>{k&&R.unobserve(k)})}},[]),C.useEffect(()=>{const D=setTimeout(()=>{d(!0)},1e3);return()=>clearTimeout(D)},[]),C.useEffect(()=>{const D={home:"Daniel Neitzel - Desenvolvedor Front-End",skills:"Especialidades - Daniel Neitzel",projects:"Projetos - Daniel Neitzel",blog:"Blog - Daniel Neitzel"};document.title=D[r]||D.home},[r]),C.useEffect(()=>{const D=z=>{z.key==="Escape"&&t&&o()};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[t,o]),C.useEffect(()=>(t||p?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[t,p]),f?v.jsxs(Oy,{theme:Vi,children:[v.jsx(Vy,{}),v.jsx(jA,{children:v.jsxs(g3,{children:[v.jsx(v3,{}),v.jsx(b3,{progress:x}),v.jsx(L2,{onMenuToggle:i,isMenuOpen:t}),v.jsx(q2,{isOpen:t,onClose:o,activeSection:r,onSectionChange:S,onCVModalOpen:T}),v.jsxs(iA,{children:[v.jsx(Vf,{path:"/",element:v.jsxs(y3,{children:[v.jsx("section",{id:"home",children:v.jsx(W2,{onSectionChange:S})}),"  ",v.jsx("section",{id:"skills",children:v.jsx(tD,{onSectionChange:S})}),v.jsx("section",{id:"projects",children:v.jsx(jD,{})}),v.jsx("section",{id:"blog",children:v.jsx(BD,{})})]})}),v.jsx(Vf,{path:"/blog/:slug",element:v.jsx(e3,{})})]}),v.jsx(l3,{}),v.jsx(Nl,{children:p&&v.jsx(u3,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:j,children:v.jsxs(c3,{onClick:D=>D.stopPropagation(),initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",damping:25,stiffness:300},children:[v.jsxs(f3,{children:[v.jsxs(d3,{children:["Currículo - Daniel Neitzel Vieira",v.jsx(h3,{onClick:j,children:"✕"})]}),v.jsx(p3,{onClick:()=>window.open("https://danielneitzel.dev/CV%20-%20Daniel%20Neitzel%20Vieira.pdf","_blank"),children:"Abrir em uma nova aba"})]}),v.jsx(m3,{children:v.jsx("iframe",{src:"https://danielneitzel.dev/CV%20-%20Daniel%20Neitzel%20Vieira.pdf",title:"Currículo Daniel Neitzel Vieira"})})]})})})]})})]}):v.jsxs(Oy,{theme:Vi,children:[v.jsx(Vy,{}),v.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:Vi.colors.background,color:Vi.colors.text},children:v.jsxs("div",{style:{textAlign:"center"},children:[v.jsx("div",{style:{fontSize:"2rem",marginBottom:"1rem",background:Vi.colors.gradientText,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Carregando..."}),v.jsx("div",{style:{width:"50px",height:"3px",background:Vi.colors.gradientText,margin:"0 auto",animation:"pulse 1.5s infinite"}})]})})]})}const $x=()=>{localStorage.removeItem("projects-animated"),localStorage.removeItem("skills-animated"),localStorage.removeItem("about-animated")};typeof window<"u"&&(window.resetAllAnimations=$x);typeof window<"u"&&(window.resetAnimations=$x);hT.createRoot(document.getElementById("root")).render(v.jsx(C.StrictMode,{children:v.jsx(x3,{})}));
