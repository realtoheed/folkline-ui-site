function Wu(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(e,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Hu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yo={exports:{}},us={},xo={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nr=Symbol.for("react.element"),Vu=Symbol.for("react.portal"),Gu=Symbol.for("react.fragment"),Qu=Symbol.for("react.strict_mode"),Ku=Symbol.for("react.profiler"),Yu=Symbol.for("react.provider"),Ju=Symbol.for("react.context"),Xu=Symbol.for("react.forward_ref"),Zu=Symbol.for("react.suspense"),qu=Symbol.for("react.memo"),ec=Symbol.for("react.lazy"),ql=Symbol.iterator;function tc(e){return e===null||typeof e!="object"?null:(e=ql&&e[ql]||e["@@iterator"],typeof e=="function"?e:null)}var wo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bo=Object.assign,ko={};function un(e,t,n){this.props=e,this.context=t,this.refs=ko,this.updater=n||wo}un.prototype.isReactComponent={};un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function So(){}So.prototype=un.prototype;function nl(e,t,n){this.props=e,this.context=t,this.refs=ko,this.updater=n||wo}var rl=nl.prototype=new So;rl.constructor=nl;bo(rl,un.prototype);rl.isPureReactComponent=!0;var ea=Array.isArray,Co=Object.prototype.hasOwnProperty,sl={current:null},Eo={key:!0,ref:!0,__self:!0,__source:!0};function Po(e,t,n){var r,s={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Co.call(t,r)&&!Eo.hasOwnProperty(r)&&(s[r]=t[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var o=Array(a),d=0;d<a;d++)o[d]=arguments[d+2];s.children=o}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:nr,type:e,key:i,ref:l,props:s,_owner:sl.current}}function nc(e,t){return{$$typeof:nr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function il(e){return typeof e=="object"&&e!==null&&e.$$typeof===nr}function rc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ta=/\/+/g;function Is(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rc(""+e.key):t.toString(36)}function Pr(e,t,n,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case nr:case Vu:l=!0}}if(l)return l=e,s=s(l),e=r===""?"."+Is(l,0):r,ea(s)?(n="",e!=null&&(n=e.replace(ta,"$&/")+"/"),Pr(s,t,n,"",function(d){return d})):s!=null&&(il(s)&&(s=nc(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(ta,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=r===""?".":r+":",ea(e))for(var a=0;a<e.length;a++){i=e[a];var o=r+Is(i,a);l+=Pr(i,t,n,o,s)}else if(o=tc(e),typeof o=="function")for(e=o.call(e),a=0;!(i=e.next()).done;)i=i.value,o=r+Is(i,a++),l+=Pr(i,t,n,o,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function dr(e,t,n){if(e==null)return e;var r=[],s=0;return Pr(e,r,"","",function(i){return t.call(n,i,s++)}),r}function sc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Nr={transition:null},ic={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Nr,ReactCurrentOwner:sl};function No(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:dr,forEach:function(e,t,n){dr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return dr(e,function(){t++}),t},toArray:function(e){return dr(e,function(t){return t})||[]},only:function(e){if(!il(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=un;z.Fragment=Gu;z.Profiler=Ku;z.PureComponent=nl;z.StrictMode=Qu;z.Suspense=Zu;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ic;z.act=No;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bo({},e.props),s=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=sl.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(o in t)Co.call(t,o)&&!Eo.hasOwnProperty(o)&&(r[o]=t[o]===void 0&&a!==void 0?a[o]:t[o])}var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){a=Array(o);for(var d=0;d<o;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:nr,type:e.type,key:s,ref:i,props:r,_owner:l}};z.createContext=function(e){return e={$$typeof:Ju,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yu,_context:e},e.Consumer=e};z.createElement=Po;z.createFactory=function(e){var t=Po.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Xu,render:e}};z.isValidElement=il;z.lazy=function(e){return{$$typeof:ec,_payload:{_status:-1,_result:e},_init:sc}};z.memo=function(e,t){return{$$typeof:qu,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Nr.transition;Nr.transition={};try{e()}finally{Nr.transition=t}};z.unstable_act=No;z.useCallback=function(e,t){return de.current.useCallback(e,t)};z.useContext=function(e){return de.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return de.current.useDeferredValue(e)};z.useEffect=function(e,t){return de.current.useEffect(e,t)};z.useId=function(){return de.current.useId()};z.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return de.current.useMemo(e,t)};z.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};z.useRef=function(e){return de.current.useRef(e)};z.useState=function(e){return de.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return de.current.useTransition()};z.version="18.3.1";xo.exports=z;var P=xo.exports;const Or=Hu(P),lc=Wu({__proto__:null,default:Or},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac=P,oc=Symbol.for("react.element"),dc=Symbol.for("react.fragment"),uc=Object.prototype.hasOwnProperty,cc=ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fc={key:!0,ref:!0,__self:!0,__source:!0};function jo(e,t,n){var r,s={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)uc.call(t,r)&&!fc.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:oc,type:e,key:i,ref:l,props:s,_owner:cc.current}}us.Fragment=dc;us.jsx=jo;us.jsxs=jo;yo.exports=us;var c=yo.exports,ai={},_o={exports:{}},we={},To={exports:{}},Lo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,T){var L=E.length;E.push(T);e:for(;0<L;){var V=L-1>>>1,X=E[V];if(0<s(X,T))E[V]=T,E[L]=X,L=V;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var T=E[0],L=E.pop();if(L!==T){E[0]=L;e:for(var V=0,X=E.length,ar=X>>>1;V<ar;){var yt=2*(V+1)-1,Rs=E[yt],xt=yt+1,or=E[xt];if(0>s(Rs,L))xt<X&&0>s(or,Rs)?(E[V]=or,E[xt]=L,V=xt):(E[V]=Rs,E[yt]=L,V=yt);else if(xt<X&&0>s(or,L))E[V]=or,E[xt]=L,V=xt;else break e}}return T}function s(E,T){var L=E.sortIndex-T.sortIndex;return L!==0?L:E.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var o=[],d=[],v=1,m=null,h=3,x=!1,w=!1,b=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var T=n(d);T!==null;){if(T.callback===null)r(d);else if(T.startTime<=E)r(d),T.sortIndex=T.expirationTime,t(o,T);else break;T=n(d)}}function g(E){if(b=!1,p(E),!w)if(n(o)!==null)w=!0,Ls(k);else{var T=n(d);T!==null&&zs(g,T.startTime-E)}}function k(E,T){w=!1,b&&(b=!1,f(_),_=-1),x=!0;var L=h;try{for(p(T),m=n(o);m!==null&&(!(m.expirationTime>T)||E&&!je());){var V=m.callback;if(typeof V=="function"){m.callback=null,h=m.priorityLevel;var X=V(m.expirationTime<=T);T=e.unstable_now(),typeof X=="function"?m.callback=X:m===n(o)&&r(o),p(T)}else r(o);m=n(o)}if(m!==null)var ar=!0;else{var yt=n(d);yt!==null&&zs(g,yt.startTime-T),ar=!1}return ar}finally{m=null,h=L,x=!1}}var N=!1,j=null,_=-1,H=5,R=-1;function je(){return!(e.unstable_now()-R<H)}function mn(){if(j!==null){var E=e.unstable_now();R=E;var T=!0;try{T=j(!0,E)}finally{T?vn():(N=!1,j=null)}}else N=!1}var vn;if(typeof u=="function")vn=function(){u(mn)};else if(typeof MessageChannel<"u"){var Zl=new MessageChannel,$u=Zl.port2;Zl.port1.onmessage=mn,vn=function(){$u.postMessage(null)}}else vn=function(){C(mn,0)};function Ls(E){j=E,N||(N=!0,vn())}function zs(E,T){_=C(function(){E(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,Ls(k))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(o)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var L=h;h=T;try{return E()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,T){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=h;h=E;try{return T()}finally{h=L}},e.unstable_scheduleCallback=function(E,T,L){var V=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?V+L:V):L=V,E){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=L+X,E={id:v++,callback:T,priorityLevel:E,startTime:L,expirationTime:X,sortIndex:-1},L>V?(E.sortIndex=L,t(d,E),n(o)===null&&E===n(d)&&(b?(f(_),_=-1):b=!0,zs(g,L-V))):(E.sortIndex=X,t(o,E),w||x||(w=!0,Ls(k))),E},e.unstable_shouldYield=je,e.unstable_wrapCallback=function(E){var T=h;return function(){var L=h;h=T;try{return E.apply(this,arguments)}finally{h=L}}}})(Lo);To.exports=Lo;var pc=To.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc=P,xe=pc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zo=new Set,Mn={};function Rt(e,t){nn(e,t),nn(e+"Capture",t)}function nn(e,t){for(Mn[e]=t,e=0;e<t.length;e++)zo.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oi=Object.prototype.hasOwnProperty,vc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,na={},ra={};function hc(e){return oi.call(ra,e)?!0:oi.call(na,e)?!1:vc.test(e)?ra[e]=!0:(na[e]=!0,!1)}function gc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yc(e,t,n,r){if(t===null||typeof t>"u"||gc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,s,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var ll=/[\-:]([a-z])/g;function al(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ll,al);ne[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ll,al);ne[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ll,al);ne[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function ol(e,t,n,r){var s=ne.hasOwnProperty(t)?ne[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yc(t,n,s,r)&&(n=null),r||s===null?hc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ur=Symbol.for("react.element"),Ot=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),dl=Symbol.for("react.strict_mode"),di=Symbol.for("react.profiler"),Ro=Symbol.for("react.provider"),Io=Symbol.for("react.context"),ul=Symbol.for("react.forward_ref"),ui=Symbol.for("react.suspense"),ci=Symbol.for("react.suspense_list"),cl=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),Do=Symbol.for("react.offscreen"),sa=Symbol.iterator;function hn(e){return e===null||typeof e!="object"?null:(e=sa&&e[sa]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,Ds;function Cn(e){if(Ds===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ds=t&&t[1]||""}return`
`+Ds+e}var Fs=!1;function Ms(e,t){if(!e||Fs)return"";Fs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),l=s.length-1,a=i.length-1;1<=l&&0<=a&&s[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==i[a]){var o=`
`+s[l].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=l&&0<=a);break}}}finally{Fs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cn(e):""}function xc(e){switch(e.tag){case 5:return Cn(e.type);case 16:return Cn("Lazy");case 13:return Cn("Suspense");case 19:return Cn("SuspenseList");case 0:case 2:case 15:return e=Ms(e.type,!1),e;case 11:return e=Ms(e.type.render,!1),e;case 1:return e=Ms(e.type,!0),e;default:return""}}function fi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bt:return"Fragment";case Ot:return"Portal";case di:return"Profiler";case dl:return"StrictMode";case ui:return"Suspense";case ci:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Io:return(e.displayName||"Context")+".Consumer";case Ro:return(e._context.displayName||"Context")+".Provider";case ul:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cl:return t=e.displayName||null,t!==null?t:fi(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return fi(e(t))}catch{}}return null}function wc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fi(t);case 8:return t===dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bc(e){var t=Fo(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cr(e){e._valueTracker||(e._valueTracker=bc(e))}function Mo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fo(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pi(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ia(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Oo(e,t){t=t.checked,t!=null&&ol(e,"checked",t,!1)}function mi(e,t){Oo(e,t);var n=pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vi(e,t.type,n):t.hasOwnProperty("defaultValue")&&vi(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function la(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vi(e,t,n){(t!=="number"||Br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var En=Array.isArray;function Jt(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function hi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function aa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(En(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function Bo(e,t){var n=pt(t.value),r=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function oa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Uo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Uo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fr,Ao=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fr=fr||document.createElement("div"),fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kc=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){kc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function $o(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function Wo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=$o(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var Sc=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yi(e,t){if(t){if(Sc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function xi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wi=null;function fl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bi=null,Xt=null,Zt=null;function da(e){if(e=ir(e)){if(typeof bi!="function")throw Error(y(280));var t=e.stateNode;t&&(t=vs(t),bi(e.stateNode,e.type,t))}}function Ho(e){Xt?Zt?Zt.push(e):Zt=[e]:Xt=e}function Vo(){if(Xt){var e=Xt,t=Zt;if(Zt=Xt=null,da(e),t)for(e=0;e<t.length;e++)da(t[e])}}function Go(e,t){return e(t)}function Qo(){}var Os=!1;function Ko(e,t,n){if(Os)return e(t,n);Os=!0;try{return Go(e,t,n)}finally{Os=!1,(Xt!==null||Zt!==null)&&(Qo(),Vo())}}function Bn(e,t){var n=e.stateNode;if(n===null)return null;var r=vs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ki=!1;if(Ge)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){ki=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{ki=!1}function Cc(e,t,n,r,s,i,l,a,o){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(v){this.onError(v)}}var _n=!1,Ur=null,Ar=!1,Si=null,Ec={onError:function(e){_n=!0,Ur=e}};function Pc(e,t,n,r,s,i,l,a,o){_n=!1,Ur=null,Cc.apply(Ec,arguments)}function Nc(e,t,n,r,s,i,l,a,o){if(Pc.apply(this,arguments),_n){if(_n){var d=Ur;_n=!1,Ur=null}else throw Error(y(198));Ar||(Ar=!0,Si=d)}}function It(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ua(e){if(It(e)!==e)throw Error(y(188))}function jc(e){var t=e.alternate;if(!t){if(t=It(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return ua(s),e;if(i===r)return ua(s),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=s,r=i;else{for(var l=!1,a=s.child;a;){if(a===n){l=!0,n=s,r=i;break}if(a===r){l=!0,r=s,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=s;break}if(a===r){l=!0,r=i,n=s;break}a=a.sibling}if(!l)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Jo(e){return e=jc(e),e!==null?Xo(e):null}function Xo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xo(e);if(t!==null)return t;e=e.sibling}return null}var Zo=xe.unstable_scheduleCallback,ca=xe.unstable_cancelCallback,_c=xe.unstable_shouldYield,Tc=xe.unstable_requestPaint,G=xe.unstable_now,Lc=xe.unstable_getCurrentPriorityLevel,pl=xe.unstable_ImmediatePriority,qo=xe.unstable_UserBlockingPriority,$r=xe.unstable_NormalPriority,zc=xe.unstable_LowPriority,ed=xe.unstable_IdlePriority,cs=null,Be=null;function Rc(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(cs,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:Fc,Ic=Math.log,Dc=Math.LN2;function Fc(e){return e>>>=0,e===0?32:31-(Ic(e)/Dc|0)|0}var pr=64,mr=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~s;a!==0?r=Pn(a):(i&=l,i!==0&&(r=Pn(i)))}else l=n&~s,l!==0?r=Pn(l):i!==0&&(r=Pn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Re(t),s=1<<n,r|=e[n],t&=~s;return r}function Mc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Re(i),a=1<<l,o=s[l];o===-1?(!(a&n)||a&r)&&(s[l]=Mc(a,t)):o<=t&&(e.expiredLanes|=a),i&=~a}}function Ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function td(){var e=pr;return pr<<=1,!(pr&4194240)&&(pr=64),e}function Bs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Re(t),e[t]=n}function Bc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Re(n),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~i}}function ml(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var D=0;function nd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rd,vl,sd,id,ld,Ei=!1,vr=[],it=null,lt=null,at=null,Un=new Map,An=new Map,et=[],Uc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fa(e,t){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(t.pointerId)}}function yn(e,t,n,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=ir(t),t!==null&&vl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Ac(e,t,n,r,s){switch(t){case"focusin":return it=yn(it,e,t,n,r,s),!0;case"dragenter":return lt=yn(lt,e,t,n,r,s),!0;case"mouseover":return at=yn(at,e,t,n,r,s),!0;case"pointerover":var i=s.pointerId;return Un.set(i,yn(Un.get(i)||null,e,t,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,An.set(i,yn(An.get(i)||null,e,t,n,r,s)),!0}return!1}function ad(e){var t=kt(e.target);if(t!==null){var n=It(t);if(n!==null){if(t=n.tag,t===13){if(t=Yo(n),t!==null){e.blockedOn=t,ld(e.priority,function(){sd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wi=r,n.target.dispatchEvent(r),wi=null}else return t=ir(n),t!==null&&vl(t),e.blockedOn=n,!1;t.shift()}return!0}function pa(e,t,n){jr(e)&&n.delete(t)}function $c(){Ei=!1,it!==null&&jr(it)&&(it=null),lt!==null&&jr(lt)&&(lt=null),at!==null&&jr(at)&&(at=null),Un.forEach(pa),An.forEach(pa)}function xn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ei||(Ei=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,$c)))}function $n(e){function t(s){return xn(s,e)}if(0<vr.length){xn(vr[0],e);for(var n=1;n<vr.length;n++){var r=vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(it!==null&&xn(it,e),lt!==null&&xn(lt,e),at!==null&&xn(at,e),Un.forEach(t),An.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)ad(n),n.blockedOn===null&&et.shift()}var qt=Je.ReactCurrentBatchConfig,Hr=!0;function Wc(e,t,n,r){var s=D,i=qt.transition;qt.transition=null;try{D=1,hl(e,t,n,r)}finally{D=s,qt.transition=i}}function Hc(e,t,n,r){var s=D,i=qt.transition;qt.transition=null;try{D=4,hl(e,t,n,r)}finally{D=s,qt.transition=i}}function hl(e,t,n,r){if(Hr){var s=Pi(e,t,n,r);if(s===null)Ys(e,t,r,Vr,n),fa(e,r);else if(Ac(s,e,t,n,r))r.stopPropagation();else if(fa(e,r),t&4&&-1<Uc.indexOf(e)){for(;s!==null;){var i=ir(s);if(i!==null&&rd(i),i=Pi(e,t,n,r),i===null&&Ys(e,t,r,Vr,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Ys(e,t,r,null,n)}}var Vr=null;function Pi(e,t,n,r){if(Vr=null,e=fl(r),e=kt(e),e!==null)if(t=It(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vr=e,null}function od(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lc()){case pl:return 1;case qo:return 4;case $r:case zc:return 16;case ed:return 536870912;default:return 16}default:return 16}}var nt=null,gl=null,_r=null;function dd(){if(_r)return _r;var e,t=gl,n=t.length,r,s="value"in nt?nt.value:nt.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===s[i-r];r++);return _r=s.slice(e,1<r?1-r:void 0)}function Tr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hr(){return!0}function ma(){return!1}function be(e){function t(n,r,s,i,l){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?hr:ma,this.isPropagationStopped=ma,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),t}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=be(cn),sr=$({},cn,{view:0,detail:0}),Vc=be(sr),Us,As,wn,fs=$({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wn&&(wn&&e.type==="mousemove"?(Us=e.screenX-wn.screenX,As=e.screenY-wn.screenY):As=Us=0,wn=e),Us)},movementY:function(e){return"movementY"in e?e.movementY:As}}),va=be(fs),Gc=$({},fs,{dataTransfer:0}),Qc=be(Gc),Kc=$({},sr,{relatedTarget:0}),$s=be(Kc),Yc=$({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jc=be(Yc),Xc=$({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zc=be(Xc),qc=$({},cn,{data:0}),ha=be(qc),ef={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nf[e])?!!t[e]:!1}function xl(){return rf}var sf=$({},sr,{key:function(e){if(e.key){var t=ef[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xl,charCode:function(e){return e.type==="keypress"?Tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lf=be(sf),af=$({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ga=be(af),of=$({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xl}),df=be(of),uf=$({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),cf=be(uf),ff=$({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pf=be(ff),mf=[9,13,27,32],wl=Ge&&"CompositionEvent"in window,Tn=null;Ge&&"documentMode"in document&&(Tn=document.documentMode);var vf=Ge&&"TextEvent"in window&&!Tn,ud=Ge&&(!wl||Tn&&8<Tn&&11>=Tn),ya=" ",xa=!1;function cd(e,t){switch(e){case"keyup":return mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function hf(e,t){switch(e){case"compositionend":return fd(t);case"keypress":return t.which!==32?null:(xa=!0,ya);case"textInput":return e=t.data,e===ya&&xa?null:e;default:return null}}function gf(e,t){if(Ut)return e==="compositionend"||!wl&&cd(e,t)?(e=dd(),_r=gl=nt=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ud&&t.locale!=="ko"?null:t.data;default:return null}}var yf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yf[e.type]:t==="textarea"}function pd(e,t,n,r){Ho(r),t=Gr(t,"onChange"),0<t.length&&(n=new yl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ln=null,Wn=null;function xf(e){Cd(e,0)}function ps(e){var t=Wt(e);if(Mo(t))return e}function wf(e,t){if(e==="change")return t}var md=!1;if(Ge){var Ws;if(Ge){var Hs="oninput"in document;if(!Hs){var ba=document.createElement("div");ba.setAttribute("oninput","return;"),Hs=typeof ba.oninput=="function"}Ws=Hs}else Ws=!1;md=Ws&&(!document.documentMode||9<document.documentMode)}function ka(){Ln&&(Ln.detachEvent("onpropertychange",vd),Wn=Ln=null)}function vd(e){if(e.propertyName==="value"&&ps(Wn)){var t=[];pd(t,Wn,e,fl(e)),Ko(xf,t)}}function bf(e,t,n){e==="focusin"?(ka(),Ln=t,Wn=n,Ln.attachEvent("onpropertychange",vd)):e==="focusout"&&ka()}function kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ps(Wn)}function Sf(e,t){if(e==="click")return ps(t)}function Cf(e,t){if(e==="input"||e==="change")return ps(t)}function Ef(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Ef;function Hn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!oi.call(t,s)||!De(e[s],t[s]))return!1}return!0}function Sa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ca(e,t){var n=Sa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sa(n)}}function hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gd(){for(var e=window,t=Br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function bl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pf(e){var t=gd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hd(n.ownerDocument.documentElement,n)){if(r!==null&&bl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=Ca(n,i);var l=Ca(n,r);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nf=Ge&&"documentMode"in document&&11>=document.documentMode,At=null,Ni=null,zn=null,ji=!1;function Ea(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ji||At==null||At!==Br(r)||(r=At,"selectionStart"in r&&bl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zn&&Hn(zn,r)||(zn=r,r=Gr(Ni,"onSelect"),0<r.length&&(t=new yl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=At)))}function gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $t={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionend:gr("Transition","TransitionEnd")},Vs={},yd={};Ge&&(yd=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function ms(e){if(Vs[e])return Vs[e];if(!$t[e])return e;var t=$t[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yd)return Vs[e]=t[n];return e}var xd=ms("animationend"),wd=ms("animationiteration"),bd=ms("animationstart"),kd=ms("transitionend"),Sd=new Map,Pa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){Sd.set(e,t),Rt(t,[e])}for(var Gs=0;Gs<Pa.length;Gs++){var Qs=Pa[Gs],jf=Qs.toLowerCase(),_f=Qs[0].toUpperCase()+Qs.slice(1);vt(jf,"on"+_f)}vt(xd,"onAnimationEnd");vt(wd,"onAnimationIteration");vt(bd,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(kd,"onTransitionEnd");nn("onMouseEnter",["mouseout","mouseover"]);nn("onMouseLeave",["mouseout","mouseover"]);nn("onPointerEnter",["pointerout","pointerover"]);nn("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function Na(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Nc(r,t,void 0,e),e.currentTarget=null}function Cd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],o=a.instance,d=a.currentTarget;if(a=a.listener,o!==i&&s.isPropagationStopped())break e;Na(s,a,d),i=o}else for(l=0;l<r.length;l++){if(a=r[l],o=a.instance,d=a.currentTarget,a=a.listener,o!==i&&s.isPropagationStopped())break e;Na(s,a,d),i=o}}}if(Ar)throw e=Si,Ar=!1,Si=null,e}function M(e,t){var n=t[Ri];n===void 0&&(n=t[Ri]=new Set);var r=e+"__bubble";n.has(r)||(Ed(t,e,2,!1),n.add(r))}function Ks(e,t,n){var r=0;t&&(r|=4),Ed(n,e,r,t)}var yr="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[yr]){e[yr]=!0,zo.forEach(function(n){n!=="selectionchange"&&(Tf.has(n)||Ks(n,!1,e),Ks(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yr]||(t[yr]=!0,Ks("selectionchange",!1,t))}}function Ed(e,t,n,r){switch(od(t)){case 1:var s=Wc;break;case 4:s=Hc;break;default:s=hl}n=s.bind(null,t,n,e),s=void 0,!ki||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Ys(e,t,n,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=r.return;l!==null;){var o=l.tag;if((o===3||o===4)&&(o=l.stateNode.containerInfo,o===s||o.nodeType===8&&o.parentNode===s))return;l=l.return}for(;a!==null;){if(l=kt(a),l===null)return;if(o=l.tag,o===5||o===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Ko(function(){var d=i,v=fl(n),m=[];e:{var h=Sd.get(e);if(h!==void 0){var x=yl,w=e;switch(e){case"keypress":if(Tr(n)===0)break e;case"keydown":case"keyup":x=lf;break;case"focusin":w="focus",x=$s;break;case"focusout":w="blur",x=$s;break;case"beforeblur":case"afterblur":x=$s;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Qc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=df;break;case xd:case wd:case bd:x=Jc;break;case kd:x=cf;break;case"scroll":x=Vc;break;case"wheel":x=pf;break;case"copy":case"cut":case"paste":x=Zc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ga}var b=(t&4)!==0,C=!b&&e==="scroll",f=b?h!==null?h+"Capture":null:h;b=[];for(var u=d,p;u!==null;){p=u;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,f!==null&&(g=Bn(u,f),g!=null&&b.push(Gn(u,g,p)))),C)break;u=u.return}0<b.length&&(h=new x(h,w,null,n,v),m.push({event:h,listeners:b}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==wi&&(w=n.relatedTarget||n.fromElement)&&(kt(w)||w[Qe]))break e;if((x||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=d,w=w?kt(w):null,w!==null&&(C=It(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=d),x!==w)){if(b=va,g="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(b=ga,g="onPointerLeave",f="onPointerEnter",u="pointer"),C=x==null?h:Wt(x),p=w==null?h:Wt(w),h=new b(g,u+"leave",x,n,v),h.target=C,h.relatedTarget=p,g=null,kt(v)===d&&(b=new b(f,u+"enter",w,n,v),b.target=p,b.relatedTarget=C,g=b),C=g,x&&w)t:{for(b=x,f=w,u=0,p=b;p;p=Ft(p))u++;for(p=0,g=f;g;g=Ft(g))p++;for(;0<u-p;)b=Ft(b),u--;for(;0<p-u;)f=Ft(f),p--;for(;u--;){if(b===f||f!==null&&b===f.alternate)break t;b=Ft(b),f=Ft(f)}b=null}else b=null;x!==null&&ja(m,h,x,b,!1),w!==null&&C!==null&&ja(m,C,w,b,!0)}}e:{if(h=d?Wt(d):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var k=wf;else if(wa(h))if(md)k=Cf;else{k=kf;var N=bf}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Sf);if(k&&(k=k(e,d))){pd(m,k,n,v);break e}N&&N(e,h,d),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&vi(h,"number",h.value)}switch(N=d?Wt(d):window,e){case"focusin":(wa(N)||N.contentEditable==="true")&&(At=N,Ni=d,zn=null);break;case"focusout":zn=Ni=At=null;break;case"mousedown":ji=!0;break;case"contextmenu":case"mouseup":case"dragend":ji=!1,Ea(m,n,v);break;case"selectionchange":if(Nf)break;case"keydown":case"keyup":Ea(m,n,v)}var j;if(wl)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ut?cd(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(ud&&n.locale!=="ko"&&(Ut||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ut&&(j=dd()):(nt=v,gl="value"in nt?nt.value:nt.textContent,Ut=!0)),N=Gr(d,_),0<N.length&&(_=new ha(_,e,null,n,v),m.push({event:_,listeners:N}),j?_.data=j:(j=fd(n),j!==null&&(_.data=j)))),(j=vf?hf(e,n):gf(e,n))&&(d=Gr(d,"onBeforeInput"),0<d.length&&(v=new ha("onBeforeInput","beforeinput",null,n,v),m.push({event:v,listeners:d}),v.data=j))}Cd(m,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gr(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Bn(e,n),i!=null&&r.unshift(Gn(e,i,s)),i=Bn(e,t),i!=null&&r.push(Gn(e,i,s))),e=e.return}return r}function Ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ja(e,t,n,r,s){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,o=a.alternate,d=a.stateNode;if(o!==null&&o===r)break;a.tag===5&&d!==null&&(a=d,s?(o=Bn(n,i),o!=null&&l.unshift(Gn(n,o,a))):s||(o=Bn(n,i),o!=null&&l.push(Gn(n,o,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Lf=/\r\n?/g,zf=/\u0000|\uFFFD/g;function _a(e){return(typeof e=="string"?e:""+e).replace(Lf,`
`).replace(zf,"")}function xr(e,t,n){if(t=_a(t),_a(e)!==t&&n)throw Error(y(425))}function Qr(){}var _i=null,Ti=null;function Li(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zi=typeof setTimeout=="function"?setTimeout:void 0,Rf=typeof clearTimeout=="function"?clearTimeout:void 0,Ta=typeof Promise=="function"?Promise:void 0,If=typeof queueMicrotask=="function"?queueMicrotask:typeof Ta<"u"?function(e){return Ta.resolve(null).then(e).catch(Df)}:zi;function Df(e){setTimeout(function(){throw e})}function Js(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),$n(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);$n(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function La(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fn=Math.random().toString(36).slice(2),Oe="__reactFiber$"+fn,Qn="__reactProps$"+fn,Qe="__reactContainer$"+fn,Ri="__reactEvents$"+fn,Ff="__reactListeners$"+fn,Mf="__reactHandles$"+fn;function kt(e){var t=e[Oe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qe]||n[Oe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=La(e);e!==null;){if(n=e[Oe])return n;e=La(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[Oe]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function vs(e){return e[Qn]||null}var Ii=[],Ht=-1;function ht(e){return{current:e}}function O(e){0>Ht||(e.current=Ii[Ht],Ii[Ht]=null,Ht--)}function F(e,t){Ht++,Ii[Ht]=e.current,e.current=t}var mt={},le=ht(mt),pe=ht(!1),jt=mt;function rn(e,t){var n=e.type.contextTypes;if(!n)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function me(e){return e=e.childContextTypes,e!=null}function Kr(){O(pe),O(le)}function za(e,t,n){if(le.current!==mt)throw Error(y(168));F(le,t),F(pe,n)}function Pd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(y(108,wc(e)||"Unknown",s));return $({},n,r)}function Yr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,jt=le.current,F(le,e),F(pe,pe.current),!0}function Ra(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Pd(e,t,jt),r.__reactInternalMemoizedMergedChildContext=e,O(pe),O(le),F(le,e)):O(pe),F(pe,n)}var $e=null,hs=!1,Xs=!1;function Nd(e){$e===null?$e=[e]:$e.push(e)}function Of(e){hs=!0,Nd(e)}function gt(){if(!Xs&&$e!==null){Xs=!0;var e=0,t=D;try{var n=$e;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$e=null,hs=!1}catch(s){throw $e!==null&&($e=$e.slice(e+1)),Zo(pl,gt),s}finally{D=t,Xs=!1}}return null}var Vt=[],Gt=0,Jr=null,Xr=0,ke=[],Se=0,_t=null,We=1,He="";function wt(e,t){Vt[Gt++]=Xr,Vt[Gt++]=Jr,Jr=e,Xr=t}function jd(e,t,n){ke[Se++]=We,ke[Se++]=He,ke[Se++]=_t,_t=e;var r=We;e=He;var s=32-Re(r)-1;r&=~(1<<s),n+=1;var i=32-Re(t)+s;if(30<i){var l=s-s%5;i=(r&(1<<l)-1).toString(32),r>>=l,s-=l,We=1<<32-Re(t)+s|n<<s|r,He=i+e}else We=1<<i|n<<s|r,He=e}function kl(e){e.return!==null&&(wt(e,1),jd(e,1,0))}function Sl(e){for(;e===Jr;)Jr=Vt[--Gt],Vt[Gt]=null,Xr=Vt[--Gt],Vt[Gt]=null;for(;e===_t;)_t=ke[--Se],ke[Se]=null,He=ke[--Se],ke[Se]=null,We=ke[--Se],ke[Se]=null}var ye=null,ge=null,B=!1,ze=null;function _d(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ia(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ge=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_t!==null?{id:We,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ge=null,!0):!1;default:return!1}}function Di(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fi(e){if(B){var t=ge;if(t){var n=t;if(!Ia(e,t)){if(Di(e))throw Error(y(418));t=ot(n.nextSibling);var r=ye;t&&Ia(e,t)?_d(r,n):(e.flags=e.flags&-4097|2,B=!1,ye=e)}}else{if(Di(e))throw Error(y(418));e.flags=e.flags&-4097|2,B=!1,ye=e}}}function Da(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function wr(e){if(e!==ye)return!1;if(!B)return Da(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Li(e.type,e.memoizedProps)),t&&(t=ge)){if(Di(e))throw Td(),Error(y(418));for(;t;)_d(e,t),t=ot(t.nextSibling)}if(Da(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=ye?ot(e.stateNode.nextSibling):null;return!0}function Td(){for(var e=ge;e;)e=ot(e.nextSibling)}function sn(){ge=ye=null,B=!1}function Cl(e){ze===null?ze=[e]:ze.push(e)}var Bf=Je.ReactCurrentBatchConfig;function bn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=s.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fa(e){var t=e._init;return t(e._payload)}function Ld(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function s(f,u){return f=ft(f,u),f.index=0,f.sibling=null,f}function i(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,p,g){return u===null||u.tag!==6?(u=si(p,f.mode,g),u.return=f,u):(u=s(u,p),u.return=f,u)}function o(f,u,p,g){var k=p.type;return k===Bt?v(f,u,p.props.children,g,p.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ze&&Fa(k)===u.type)?(g=s(u,p.props),g.ref=bn(f,u,p),g.return=f,g):(g=Mr(p.type,p.key,p.props,null,f.mode,g),g.ref=bn(f,u,p),g.return=f,g)}function d(f,u,p,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=ii(p,f.mode,g),u.return=f,u):(u=s(u,p.children||[]),u.return=f,u)}function v(f,u,p,g,k){return u===null||u.tag!==7?(u=Pt(p,f.mode,g,k),u.return=f,u):(u=s(u,p),u.return=f,u)}function m(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=si(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ur:return p=Mr(u.type,u.key,u.props,null,f.mode,p),p.ref=bn(f,null,u),p.return=f,p;case Ot:return u=ii(u,f.mode,p),u.return=f,u;case Ze:var g=u._init;return m(f,g(u._payload),p)}if(En(u)||hn(u))return u=Pt(u,f.mode,p,null),u.return=f,u;br(f,u)}return null}function h(f,u,p,g){var k=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:a(f,u,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ur:return p.key===k?o(f,u,p,g):null;case Ot:return p.key===k?d(f,u,p,g):null;case Ze:return k=p._init,h(f,u,k(p._payload),g)}if(En(p)||hn(p))return k!==null?null:v(f,u,p,g,null);br(f,p)}return null}function x(f,u,p,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(p)||null,a(u,f,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ur:return f=f.get(g.key===null?p:g.key)||null,o(u,f,g,k);case Ot:return f=f.get(g.key===null?p:g.key)||null,d(u,f,g,k);case Ze:var N=g._init;return x(f,u,p,N(g._payload),k)}if(En(g)||hn(g))return f=f.get(p)||null,v(u,f,g,k,null);br(u,g)}return null}function w(f,u,p,g){for(var k=null,N=null,j=u,_=u=0,H=null;j!==null&&_<p.length;_++){j.index>_?(H=j,j=null):H=j.sibling;var R=h(f,j,p[_],g);if(R===null){j===null&&(j=H);break}e&&j&&R.alternate===null&&t(f,j),u=i(R,u,_),N===null?k=R:N.sibling=R,N=R,j=H}if(_===p.length)return n(f,j),B&&wt(f,_),k;if(j===null){for(;_<p.length;_++)j=m(f,p[_],g),j!==null&&(u=i(j,u,_),N===null?k=j:N.sibling=j,N=j);return B&&wt(f,_),k}for(j=r(f,j);_<p.length;_++)H=x(j,f,_,p[_],g),H!==null&&(e&&H.alternate!==null&&j.delete(H.key===null?_:H.key),u=i(H,u,_),N===null?k=H:N.sibling=H,N=H);return e&&j.forEach(function(je){return t(f,je)}),B&&wt(f,_),k}function b(f,u,p,g){var k=hn(p);if(typeof k!="function")throw Error(y(150));if(p=k.call(p),p==null)throw Error(y(151));for(var N=k=null,j=u,_=u=0,H=null,R=p.next();j!==null&&!R.done;_++,R=p.next()){j.index>_?(H=j,j=null):H=j.sibling;var je=h(f,j,R.value,g);if(je===null){j===null&&(j=H);break}e&&j&&je.alternate===null&&t(f,j),u=i(je,u,_),N===null?k=je:N.sibling=je,N=je,j=H}if(R.done)return n(f,j),B&&wt(f,_),k;if(j===null){for(;!R.done;_++,R=p.next())R=m(f,R.value,g),R!==null&&(u=i(R,u,_),N===null?k=R:N.sibling=R,N=R);return B&&wt(f,_),k}for(j=r(f,j);!R.done;_++,R=p.next())R=x(j,f,_,R.value,g),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?_:R.key),u=i(R,u,_),N===null?k=R:N.sibling=R,N=R);return e&&j.forEach(function(mn){return t(f,mn)}),B&&wt(f,_),k}function C(f,u,p,g){if(typeof p=="object"&&p!==null&&p.type===Bt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ur:e:{for(var k=p.key,N=u;N!==null;){if(N.key===k){if(k=p.type,k===Bt){if(N.tag===7){n(f,N.sibling),u=s(N,p.props.children),u.return=f,f=u;break e}}else if(N.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ze&&Fa(k)===N.type){n(f,N.sibling),u=s(N,p.props),u.ref=bn(f,N,p),u.return=f,f=u;break e}n(f,N);break}else t(f,N);N=N.sibling}p.type===Bt?(u=Pt(p.props.children,f.mode,g,p.key),u.return=f,f=u):(g=Mr(p.type,p.key,p.props,null,f.mode,g),g.ref=bn(f,u,p),g.return=f,f=g)}return l(f);case Ot:e:{for(N=p.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=s(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=ii(p,f.mode,g),u.return=f,f=u}return l(f);case Ze:return N=p._init,C(f,u,N(p._payload),g)}if(En(p))return w(f,u,p,g);if(hn(p))return b(f,u,p,g);br(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=s(u,p),u.return=f,f=u):(n(f,u),u=si(p,f.mode,g),u.return=f,f=u),l(f)):n(f,u)}return C}var ln=Ld(!0),zd=Ld(!1),Zr=ht(null),qr=null,Qt=null,El=null;function Pl(){El=Qt=qr=null}function Nl(e){var t=Zr.current;O(Zr),e._currentValue=t}function Mi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function en(e,t){qr=e,El=Qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(El!==e)if(e={context:e,memoizedValue:t,next:null},Qt===null){if(qr===null)throw Error(y(308));Qt=e,qr.dependencies={lanes:0,firstContext:e}}else Qt=Qt.next=e;return t}var St=null;function jl(e){St===null?St=[e]:St.push(e)}function Rd(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,jl(t)):(n.next=s.next,s.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qe=!1;function _l(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Id(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ve(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Ke(e,n)}return s=r.interleaved,s===null?(t.next=t,jl(r)):(t.next=s.next,s.next=t),r.interleaved=t,Ke(e,n)}function Lr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ml(e,n)}}function Ma(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function es(e,t,n,r){var s=e.updateQueue;qe=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var o=a,d=o.next;o.next=null,l===null?i=d:l.next=d,l=o;var v=e.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==l&&(a===null?v.firstBaseUpdate=d:a.next=d,v.lastBaseUpdate=o))}if(i!==null){var m=s.baseState;l=0,v=d=o=null,a=i;do{var h=a.lane,x=a.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,b=a;switch(h=t,x=n,b.tag){case 1:if(w=b.payload,typeof w=="function"){m=w.call(x,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,h=typeof w=="function"?w.call(x,m,h):w,h==null)break e;m=$({},m,h);break e;case 2:qe=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=s.effects,h===null?s.effects=[a]:h.push(a))}else x={eventTime:x,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(d=v=x,o=m):v=v.next=x,l|=h;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;h=a,a=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(!0);if(v===null&&(o=m),s.baseState=o,s.firstBaseUpdate=d,s.lastBaseUpdate=v,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);Lt|=l,e.lanes=l,e.memoizedState=m}}function Oa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(y(191,s));s.call(r)}}}var lr={},Ue=ht(lr),Kn=ht(lr),Yn=ht(lr);function Ct(e){if(e===lr)throw Error(y(174));return e}function Tl(e,t){switch(F(Yn,t),F(Kn,e),F(Ue,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gi(t,e)}O(Ue),F(Ue,t)}function an(){O(Ue),O(Kn),O(Yn)}function Dd(e){Ct(Yn.current);var t=Ct(Ue.current),n=gi(t,e.type);t!==n&&(F(Kn,e),F(Ue,n))}function Ll(e){Kn.current===e&&(O(Ue),O(Kn))}var U=ht(0);function ts(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zs=[];function zl(){for(var e=0;e<Zs.length;e++)Zs[e]._workInProgressVersionPrimary=null;Zs.length=0}var zr=Je.ReactCurrentDispatcher,qs=Je.ReactCurrentBatchConfig,Tt=0,A=null,K=null,Z=null,ns=!1,Rn=!1,Jn=0,Uf=0;function re(){throw Error(y(321))}function Rl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function Il(e,t,n,r,s,i){if(Tt=i,A=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zr.current=e===null||e.memoizedState===null?Hf:Vf,e=n(r,s),Rn){i=0;do{if(Rn=!1,Jn=0,25<=i)throw Error(y(301));i+=1,Z=K=null,t.updateQueue=null,zr.current=Gf,e=n(r,s)}while(Rn)}if(zr.current=rs,t=K!==null&&K.next!==null,Tt=0,Z=K=A=null,ns=!1,t)throw Error(y(300));return e}function Dl(){var e=Jn!==0;return Jn=0,e}function Me(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?A.memoizedState=Z=e:Z=Z.next=e,Z}function Ne(){if(K===null){var e=A.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Z===null?A.memoizedState:Z.next;if(t!==null)Z=t,K=e;else{if(e===null)throw Error(y(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?A.memoizedState=Z=e:Z=Z.next=e}return Z}function Xn(e,t){return typeof t=="function"?t(e):t}function ei(e){var t=Ne(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=K,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=l=null,o=null,d=i;do{var v=d.lane;if((Tt&v)===v)o!==null&&(o=o.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};o===null?(a=o=m,l=r):o=o.next=m,A.lanes|=v,Lt|=v}d=d.next}while(d!==null&&d!==i);o===null?l=r:o.next=a,De(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=o,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do i=s.lane,A.lanes|=i,Lt|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ti(e){var t=Ne(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do i=e(i,l.action),l=l.next;while(l!==s);De(i,t.memoizedState)||(fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Fd(){}function Md(e,t){var n=A,r=Ne(),s=t(),i=!De(r.memoizedState,s);if(i&&(r.memoizedState=s,fe=!0),r=r.queue,Fl(Ud.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Zn(9,Bd.bind(null,n,r,s,t),void 0,null),q===null)throw Error(y(349));Tt&30||Od(n,t,s)}return s}function Od(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bd(e,t,n,r){t.value=n,t.getSnapshot=r,Ad(t)&&$d(e)}function Ud(e,t,n){return n(function(){Ad(t)&&$d(e)})}function Ad(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function $d(e){var t=Ke(e,1);t!==null&&Ie(t,e,1,-1)}function Ba(e){var t=Me();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t.queue=e,e=e.dispatch=Wf.bind(null,A,e),[t.memoizedState,e]}function Zn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wd(){return Ne().memoizedState}function Rr(e,t,n,r){var s=Me();A.flags|=e,s.memoizedState=Zn(1|t,n,void 0,r===void 0?null:r)}function gs(e,t,n,r){var s=Ne();r=r===void 0?null:r;var i=void 0;if(K!==null){var l=K.memoizedState;if(i=l.destroy,r!==null&&Rl(r,l.deps)){s.memoizedState=Zn(t,n,i,r);return}}A.flags|=e,s.memoizedState=Zn(1|t,n,i,r)}function Ua(e,t){return Rr(8390656,8,e,t)}function Fl(e,t){return gs(2048,8,e,t)}function Hd(e,t){return gs(4,2,e,t)}function Vd(e,t){return gs(4,4,e,t)}function Gd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qd(e,t,n){return n=n!=null?n.concat([e]):null,gs(4,4,Gd.bind(null,t,e),n)}function Ml(){}function Kd(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yd(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jd(e,t,n){return Tt&21?(De(n,t)||(n=td(),A.lanes|=n,Lt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function Af(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=qs.transition;qs.transition={};try{e(!1),t()}finally{D=n,qs.transition=r}}function Xd(){return Ne().memoizedState}function $f(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zd(e))qd(t,n);else if(n=Rd(e,t,n,r),n!==null){var s=oe();Ie(n,e,r,s),eu(n,t,r)}}function Wf(e,t,n){var r=ct(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zd(e))qd(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(s.hasEagerState=!0,s.eagerState=a,De(a,l)){var o=t.interleaved;o===null?(s.next=s,jl(t)):(s.next=o.next,o.next=s),t.interleaved=s;return}}catch{}finally{}n=Rd(e,t,s,r),n!==null&&(s=oe(),Ie(n,e,r,s),eu(n,t,r))}}function Zd(e){var t=e.alternate;return e===A||t!==null&&t===A}function qd(e,t){Rn=ns=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function eu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ml(e,n)}}var rs={readContext:Pe,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Hf={readContext:Pe,useCallback:function(e,t){return Me().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Ua,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Rr(4194308,4,Gd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rr(4,2,e,t)},useMemo:function(e,t){var n=Me();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Me();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$f.bind(null,A,e),[r.memoizedState,e]},useRef:function(e){var t=Me();return e={current:e},t.memoizedState=e},useState:Ba,useDebugValue:Ml,useDeferredValue:function(e){return Me().memoizedState=e},useTransition:function(){var e=Ba(!1),t=e[0];return e=Af.bind(null,e[1]),Me().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=A,s=Me();if(B){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),q===null)throw Error(y(349));Tt&30||Od(r,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,Ua(Ud.bind(null,r,i,e),[e]),r.flags|=2048,Zn(9,Bd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Me(),t=q.identifierPrefix;if(B){var n=He,r=We;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Uf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vf={readContext:Pe,useCallback:Kd,useContext:Pe,useEffect:Fl,useImperativeHandle:Qd,useInsertionEffect:Hd,useLayoutEffect:Vd,useMemo:Yd,useReducer:ei,useRef:Wd,useState:function(){return ei(Xn)},useDebugValue:Ml,useDeferredValue:function(e){var t=Ne();return Jd(t,K.memoizedState,e)},useTransition:function(){var e=ei(Xn)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Fd,useSyncExternalStore:Md,useId:Xd,unstable_isNewReconciler:!1},Gf={readContext:Pe,useCallback:Kd,useContext:Pe,useEffect:Fl,useImperativeHandle:Qd,useInsertionEffect:Hd,useLayoutEffect:Vd,useMemo:Yd,useReducer:ti,useRef:Wd,useState:function(){return ti(Xn)},useDebugValue:Ml,useDeferredValue:function(e){var t=Ne();return K===null?t.memoizedState=e:Jd(t,K.memoizedState,e)},useTransition:function(){var e=ti(Xn)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Fd,useSyncExternalStore:Md,useId:Xd,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Oi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ys={isMounted:function(e){return(e=e._reactInternals)?It(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=oe(),s=ct(e),i=Ve(r,s);i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,s),t!==null&&(Ie(t,e,s,r),Lr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=oe(),s=ct(e),i=Ve(r,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,s),t!==null&&(Ie(t,e,s,r),Lr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),r=ct(e),s=Ve(n,r);s.tag=2,t!=null&&(s.callback=t),t=dt(e,s,r),t!==null&&(Ie(t,e,r,n),Lr(t,e,r))}};function Aa(e,t,n,r,s,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(s,i):!0}function tu(e,t,n){var r=!1,s=mt,i=t.contextType;return typeof i=="object"&&i!==null?i=Pe(i):(s=me(t)?jt:le.current,r=t.contextTypes,i=(r=r!=null)?rn(e,s):mt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ys,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function $a(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ys.enqueueReplaceState(t,t.state,null)}function Bi(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},_l(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=Pe(i):(i=me(t)?jt:le.current,s.context=rn(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Oi(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ys.enqueueReplaceState(s,s.state,null),es(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function on(e,t){try{var n="",r=t;do n+=xc(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function ni(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ui(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qf=typeof WeakMap=="function"?WeakMap:Map;function nu(e,t,n){n=Ve(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){is||(is=!0,Ji=r),Ui(e,t)},n}function ru(e,t,n){n=Ve(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Ui(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ui(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Wa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qf;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=ap.bind(null,e,t,n),t.then(e,e))}function Ha(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Va(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ve(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var Kf=Je.ReactCurrentOwner,fe=!1;function ae(e,t,n,r){t.child=e===null?zd(t,null,n,r):ln(t,e.child,n,r)}function Ga(e,t,n,r,s){n=n.render;var i=t.ref;return en(t,s),r=Il(e,t,n,r,i,s),n=Dl(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ye(e,t,s)):(B&&n&&kl(t),t.flags|=1,ae(e,t,r,s),t.child)}function Qa(e,t,n,r,s){if(e===null){var i=n.type;return typeof i=="function"&&!Vl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,su(e,t,i,r,s)):(e=Mr(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(l,r)&&e.ref===t.ref)return Ye(e,t,s)}return t.flags|=1,e=ft(i,r),e.ref=t.ref,e.return=t,t.child=e}function su(e,t,n,r,s){if(e!==null){var i=e.memoizedProps;if(Hn(i,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Ye(e,t,s)}return Ai(e,t,n,r,s)}function iu(e,t,n){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Yt,he),he|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Yt,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,F(Yt,he),he|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,F(Yt,he),he|=r;return ae(e,t,s,n),t.child}function lu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ai(e,t,n,r,s){var i=me(n)?jt:le.current;return i=rn(t,i),en(t,s),n=Il(e,t,n,r,i,s),r=Dl(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ye(e,t,s)):(B&&r&&kl(t),t.flags|=1,ae(e,t,n,s),t.child)}function Ka(e,t,n,r,s){if(me(n)){var i=!0;Yr(t)}else i=!1;if(en(t,s),t.stateNode===null)Ir(e,t),tu(t,n,r),Bi(t,n,r,s),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var o=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Pe(d):(d=me(n)?jt:le.current,d=rn(t,d));var v=n.getDerivedStateFromProps,m=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||o!==d)&&$a(t,l,r,d),qe=!1;var h=t.memoizedState;l.state=h,es(t,r,l,s),o=t.memoizedState,a!==r||h!==o||pe.current||qe?(typeof v=="function"&&(Oi(t,n,v,r),o=t.memoizedState),(a=qe||Aa(t,n,a,r,h,o,d))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=o),l.props=r,l.state=o,l.context=d,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Id(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Te(t.type,a),l.props=d,m=t.pendingProps,h=l.context,o=n.contextType,typeof o=="object"&&o!==null?o=Pe(o):(o=me(n)?jt:le.current,o=rn(t,o));var x=n.getDerivedStateFromProps;(v=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||h!==o)&&$a(t,l,r,o),qe=!1,h=t.memoizedState,l.state=h,es(t,r,l,s);var w=t.memoizedState;a!==m||h!==w||pe.current||qe?(typeof x=="function"&&(Oi(t,n,x,r),w=t.memoizedState),(d=qe||Aa(t,n,d,r,h,w,o)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,o),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,o)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=o,r=d):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return $i(e,t,n,r,i,s)}function $i(e,t,n,r,s,i){lu(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return s&&Ra(t,n,!1),Ye(e,t,i);r=t.stateNode,Kf.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ln(t,e.child,null,i),t.child=ln(t,null,a,i)):ae(e,t,a,i),t.memoizedState=r.state,s&&Ra(t,n,!0),t.child}function au(e){var t=e.stateNode;t.pendingContext?za(e,t.pendingContext,t.pendingContext!==t.context):t.context&&za(e,t.context,!1),Tl(e,t.containerInfo)}function Ya(e,t,n,r,s){return sn(),Cl(s),t.flags|=256,ae(e,t,n,r),t.child}var Wi={dehydrated:null,treeContext:null,retryLane:0};function Hi(e){return{baseLanes:e,cachePool:null,transitions:null}}function ou(e,t,n){var r=t.pendingProps,s=U.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),F(U,s&1),e===null)return Fi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=bs(l,r,0,null),e=Pt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Hi(n),t.memoizedState=Wi,e):Ol(t,l));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Yf(e,t,l,r,a,s,n);if(i){i=r.fallback,l=t.mode,s=e.child,a=s.sibling;var o={mode:"hidden",children:r.children};return!(l&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=o,t.deletions=null):(r=ft(s,o),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=ft(a,i):(i=Pt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Hi(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Wi,r}return i=e.child,e=i.sibling,r=ft(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ol(e,t){return t=bs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function kr(e,t,n,r){return r!==null&&Cl(r),ln(t,e.child,null,n),e=Ol(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yf(e,t,n,r,s,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ni(Error(y(422))),kr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=bs({mode:"visible",children:r.children},s,0,null),i=Pt(i,s,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ln(t,e.child,null,l),t.child.memoizedState=Hi(l),t.memoizedState=Wi,i);if(!(t.mode&1))return kr(e,t,l,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(y(419)),r=ni(i,r,void 0),kr(e,t,l,r)}if(a=(l&e.childLanes)!==0,fe||a){if(r=q,r!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Ke(e,s),Ie(r,e,s,-1))}return Hl(),r=ni(Error(y(421))),kr(e,t,l,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=op.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,ge=ot(s.nextSibling),ye=t,B=!0,ze=null,e!==null&&(ke[Se++]=We,ke[Se++]=He,ke[Se++]=_t,We=e.id,He=e.overflow,_t=t),t=Ol(t,r.children),t.flags|=4096,t)}function Ja(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Mi(e.return,t,n)}function ri(e,t,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function du(e,t,n){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(ae(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ja(e,n,t);else if(e.tag===19)Ja(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(U,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ts(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),ri(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ts(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}ri(t,!0,n,null,i);break;case"together":ri(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ir(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jf(e,t,n){switch(t.tag){case 3:au(t),sn();break;case 5:Dd(t);break;case 1:me(t.type)&&Yr(t);break;case 4:Tl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;F(Zr,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?ou(e,t,n):(F(U,U.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);F(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return du(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),F(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,iu(e,t,n)}return Ye(e,t,n)}var uu,Vi,cu,fu;uu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vi=function(){};cu=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Ct(Ue.current);var i=null;switch(n){case"input":s=pi(e,s),r=pi(e,r),i=[];break;case"select":s=$({},s,{value:void 0}),r=$({},r,{value:void 0}),i=[];break;case"textarea":s=hi(e,s),r=hi(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qr)}yi(n,r);var l;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var a=s[d];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Mn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var o=r[d];if(a=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&o!==a&&(o!=null||a!=null))if(d==="style")if(a){for(l in a)!a.hasOwnProperty(l)||o&&o.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in o)o.hasOwnProperty(l)&&a[l]!==o[l]&&(n||(n={}),n[l]=o[l])}else n||(i||(i=[]),i.push(d,n)),n=o;else d==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,a=a?a.__html:void 0,o!=null&&a!==o&&(i=i||[]).push(d,o)):d==="children"?typeof o!="string"&&typeof o!="number"||(i=i||[]).push(d,""+o):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(d)?(o!=null&&d==="onScroll"&&M("scroll",e),i||a===o||(i=[])):(i=i||[]).push(d,o))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};fu=function(e,t,n,r){n!==r&&(t.flags|=4)};function kn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xf(e,t,n){var r=t.pendingProps;switch(Sl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return me(t.type)&&Kr(),se(t),null;case 3:return r=t.stateNode,an(),O(pe),O(le),zl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ze!==null&&(qi(ze),ze=null))),Vi(e,t),se(t),null;case 5:Ll(t);var s=Ct(Yn.current);if(n=t.type,e!==null&&t.stateNode!=null)cu(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return se(t),null}if(e=Ct(Ue.current),wr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Oe]=t,r[Qn]=i,e=(t.mode&1)!==0,n){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(s=0;s<Nn.length;s++)M(Nn[s],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":ia(r,i),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},M("invalid",r);break;case"textarea":aa(r,i),M("invalid",r)}yi(n,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&xr(r.textContent,a,e),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&xr(r.textContent,a,e),s=["children",""+a]):Mn.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&M("scroll",r)}switch(n){case"input":cr(r),la(r,i,!0);break;case"textarea":cr(r),oa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Qr)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Oe]=t,e[Qn]=r,uu(e,t,!1,!1),t.stateNode=e;e:{switch(l=xi(n,r),n){case"dialog":M("cancel",e),M("close",e),s=r;break;case"iframe":case"object":case"embed":M("load",e),s=r;break;case"video":case"audio":for(s=0;s<Nn.length;s++)M(Nn[s],e);s=r;break;case"source":M("error",e),s=r;break;case"img":case"image":case"link":M("error",e),M("load",e),s=r;break;case"details":M("toggle",e),s=r;break;case"input":ia(e,r),s=pi(e,r),M("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=$({},r,{value:void 0}),M("invalid",e);break;case"textarea":aa(e,r),s=hi(e,r),M("invalid",e);break;default:s=r}yi(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];i==="style"?Wo(e,o):i==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&Ao(e,o)):i==="children"?typeof o=="string"?(n!=="textarea"||o!=="")&&On(e,o):typeof o=="number"&&On(e,""+o):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mn.hasOwnProperty(i)?o!=null&&i==="onScroll"&&M("scroll",e):o!=null&&ol(e,i,o,l))}switch(n){case"input":cr(e),la(e,r,!1);break;case"textarea":cr(e),oa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Jt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Qr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)fu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Ct(Yn.current),Ct(Ue.current),wr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Oe]=t,(i=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:xr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Oe]=t,t.stateNode=r}return se(t),null;case 13:if(O(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ge!==null&&t.mode&1&&!(t.flags&128))Td(),sn(),t.flags|=98560,i=!1;else if(i=wr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Oe]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),i=!1}else ze!==null&&(qi(ze),ze=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?Y===0&&(Y=3):Hl())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return an(),Vi(e,t),e===null&&Vn(t.stateNode.containerInfo),se(t),null;case 10:return Nl(t.type._context),se(t),null;case 17:return me(t.type)&&Kr(),se(t),null;case 19:if(O(U),i=t.memoizedState,i===null)return se(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)kn(i,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ts(e),l!==null){for(t.flags|=128,kn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&G()>dn&&(t.flags|=128,r=!0,kn(i,!1),t.lanes=4194304)}else{if(!r)if(e=ts(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!B)return se(t),null}else 2*G()-i.renderingStartTime>dn&&n!==1073741824&&(t.flags|=128,r=!0,kn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=G(),t.sibling=null,n=U.current,F(U,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Wl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?he&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function Zf(e,t){switch(Sl(t),t.tag){case 1:return me(t.type)&&Kr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return an(),O(pe),O(le),zl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ll(t),null;case 13:if(O(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(U),null;case 4:return an(),null;case 10:return Nl(t.type._context),null;case 22:case 23:return Wl(),null;case 24:return null;default:return null}}var Sr=!1,ie=!1,qf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Kt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function Gi(e,t,n){try{n()}catch(r){W(e,t,r)}}var Xa=!1;function ep(e,t){if(_i=Hr,e=gd(),bl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,o=-1,d=0,v=0,m=e,h=null;t:for(;;){for(var x;m!==n||s!==0&&m.nodeType!==3||(a=l+s),m!==i||r!==0&&m.nodeType!==3||(o=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(x=m.firstChild)!==null;)h=m,m=x;for(;;){if(m===e)break t;if(h===n&&++d===s&&(a=l),h===i&&++v===r&&(o=l),(x=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=x}n=a===-1||o===-1?null:{start:a,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ti={focusedElem:e,selectionRange:n},Hr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,C=w.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:Te(t.type,b),C);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(g){W(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return w=Xa,Xa=!1,w}function In(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&Gi(t,n,i)}s=s.next}while(s!==r)}}function xs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pu(e){var t=e.alternate;t!==null&&(e.alternate=null,pu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Oe],delete t[Qn],delete t[Ri],delete t[Ff],delete t[Mf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mu(e){return e.tag===5||e.tag===3||e.tag===4}function Za(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qr));else if(r!==4&&(e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}function Yi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yi(e,t,n),e=e.sibling;e!==null;)Yi(e,t,n),e=e.sibling}var ee=null,Le=!1;function Xe(e,t,n){for(n=n.child;n!==null;)vu(e,t,n),n=n.sibling}function vu(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(cs,n)}catch{}switch(n.tag){case 5:ie||Kt(n,t);case 6:var r=ee,s=Le;ee=null,Xe(e,t,n),ee=r,Le=s,ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?Js(e.parentNode,n):e.nodeType===1&&Js(e,n),$n(e)):Js(ee,n.stateNode));break;case 4:r=ee,s=Le,ee=n.stateNode.containerInfo,Le=!0,Xe(e,t,n),ee=r,Le=s;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Gi(n,t,l),s=s.next}while(s!==r)}Xe(e,t,n);break;case 1:if(!ie&&(Kt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){W(n,t,a)}Xe(e,t,n);break;case 21:Xe(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Xe(e,t,n),ie=r):Xe(e,t,n);break;default:Xe(e,t,n)}}function qa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qf),t.forEach(function(r){var s=dp.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function _e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Le=!1;break e;case 3:ee=a.stateNode.containerInfo,Le=!0;break e;case 4:ee=a.stateNode.containerInfo,Le=!0;break e}a=a.return}if(ee===null)throw Error(y(160));vu(i,l,s),ee=null,Le=!1;var o=s.alternate;o!==null&&(o.return=null),s.return=null}catch(d){W(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hu(t,e),t=t.sibling}function hu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(t,e),Fe(e),r&4){try{In(3,e,e.return),xs(3,e)}catch(b){W(e,e.return,b)}try{In(5,e,e.return)}catch(b){W(e,e.return,b)}}break;case 1:_e(t,e),Fe(e),r&512&&n!==null&&Kt(n,n.return);break;case 5:if(_e(t,e),Fe(e),r&512&&n!==null&&Kt(n,n.return),e.flags&32){var s=e.stateNode;try{On(s,"")}catch(b){W(e,e.return,b)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Oo(s,i),xi(a,l);var d=xi(a,i);for(l=0;l<o.length;l+=2){var v=o[l],m=o[l+1];v==="style"?Wo(s,m):v==="dangerouslySetInnerHTML"?Ao(s,m):v==="children"?On(s,m):ol(s,v,m,d)}switch(a){case"input":mi(s,i);break;case"textarea":Bo(s,i);break;case"select":var h=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Jt(s,!!i.multiple,x,!1):h!==!!i.multiple&&(i.defaultValue!=null?Jt(s,!!i.multiple,i.defaultValue,!0):Jt(s,!!i.multiple,i.multiple?[]:"",!1))}s[Qn]=i}catch(b){W(e,e.return,b)}}break;case 6:if(_e(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(y(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(b){W(e,e.return,b)}}break;case 3:if(_e(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(b){W(e,e.return,b)}break;case 4:_e(t,e),Fe(e);break;case 13:_e(t,e),Fe(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Al=G())),r&4&&qa(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(d=ie)||v,_e(t,e),ie=d):_e(t,e),Fe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(S=e,v=e.child;v!==null;){for(m=S=v;S!==null;){switch(h=S,x=h.child,h.tag){case 0:case 11:case 14:case 15:In(4,h,h.return);break;case 1:Kt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){W(r,n,b)}}break;case 5:Kt(h,h.return);break;case 22:if(h.memoizedState!==null){to(m);continue}}x!==null?(x.return=h,S=x):to(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{s=m.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,o=m.memoizedProps.style,l=o!=null&&o.hasOwnProperty("display")?o.display:null,a.style.display=$o("display",l))}catch(b){W(e,e.return,b)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(b){W(e,e.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:_e(t,e),Fe(e),r&4&&qa(e);break;case 21:break;default:_e(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(On(s,""),r.flags&=-33);var i=Za(e);Yi(e,i,s);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Za(e);Ki(e,a,l);break;default:throw Error(y(161))}}catch(o){W(e,e.return,o)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tp(e,t,n){S=e,gu(e)}function gu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var s=S,i=s.child;if(s.tag===22&&r){var l=s.memoizedState!==null||Sr;if(!l){var a=s.alternate,o=a!==null&&a.memoizedState!==null||ie;a=Sr;var d=ie;if(Sr=l,(ie=o)&&!d)for(S=s;S!==null;)l=S,o=l.child,l.tag===22&&l.memoizedState!==null?no(s):o!==null?(o.return=l,S=o):no(s);for(;i!==null;)S=i,gu(i),i=i.sibling;S=s,Sr=a,ie=d}eo(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,S=i):eo(e)}}function eo(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||xs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Oa(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Oa(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var o=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&n.focus();break;case"img":o.src&&(n.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&$n(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ie||t.flags&512&&Qi(t)}catch(h){W(t,t.return,h)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function to(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function no(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xs(4,t)}catch(o){W(t,n,o)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(o){W(t,s,o)}}var i=t.return;try{Qi(t)}catch(o){W(t,i,o)}break;case 5:var l=t.return;try{Qi(t)}catch(o){W(t,l,o)}}}catch(o){W(t,t.return,o)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var np=Math.ceil,ss=Je.ReactCurrentDispatcher,Bl=Je.ReactCurrentOwner,Ee=Je.ReactCurrentBatchConfig,I=0,q=null,Q=null,te=0,he=0,Yt=ht(0),Y=0,qn=null,Lt=0,ws=0,Ul=0,Dn=null,ce=null,Al=0,dn=1/0,Ae=null,is=!1,Ji=null,ut=null,Cr=!1,rt=null,ls=0,Fn=0,Xi=null,Dr=-1,Fr=0;function oe(){return I&6?G():Dr!==-1?Dr:Dr=G()}function ct(e){return e.mode&1?I&2&&te!==0?te&-te:Bf.transition!==null?(Fr===0&&(Fr=td()),Fr):(e=D,e!==0||(e=window.event,e=e===void 0?16:od(e.type)),e):1}function Ie(e,t,n,r){if(50<Fn)throw Fn=0,Xi=null,Error(y(185));rr(e,n,r),(!(I&2)||e!==q)&&(e===q&&(!(I&2)&&(ws|=n),Y===4&&tt(e,te)),ve(e,r),n===1&&I===0&&!(t.mode&1)&&(dn=G()+500,hs&&gt()))}function ve(e,t){var n=e.callbackNode;Oc(e,t);var r=Wr(e,e===q?te:0);if(r===0)n!==null&&ca(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ca(n),t===1)e.tag===0?Of(ro.bind(null,e)):Nd(ro.bind(null,e)),If(function(){!(I&6)&&gt()}),n=null;else{switch(nd(r)){case 1:n=pl;break;case 4:n=qo;break;case 16:n=$r;break;case 536870912:n=ed;break;default:n=$r}n=Eu(n,yu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yu(e,t){if(Dr=-1,Fr=0,I&6)throw Error(y(327));var n=e.callbackNode;if(tn()&&e.callbackNode!==n)return null;var r=Wr(e,e===q?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=as(e,r);else{t=r;var s=I;I|=2;var i=wu();(q!==e||te!==t)&&(Ae=null,dn=G()+500,Et(e,t));do try{ip();break}catch(a){xu(e,a)}while(!0);Pl(),ss.current=i,I=s,Q!==null?t=0:(q=null,te=0,t=Y)}if(t!==0){if(t===2&&(s=Ci(e),s!==0&&(r=s,t=Zi(e,s))),t===1)throw n=qn,Et(e,0),tt(e,r),ve(e,G()),n;if(t===6)tt(e,r);else{if(s=e.current.alternate,!(r&30)&&!rp(s)&&(t=as(e,r),t===2&&(i=Ci(e),i!==0&&(r=i,t=Zi(e,i))),t===1))throw n=qn,Et(e,0),tt(e,r),ve(e,G()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:bt(e,ce,Ae);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=Al+500-G(),10<t)){if(Wr(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=zi(bt.bind(null,e,ce,Ae),t);break}bt(e,ce,Ae);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var l=31-Re(r);i=1<<l,l=t[l],l>s&&(s=l),r&=~i}if(r=s,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*np(r/1960))-r,10<r){e.timeoutHandle=zi(bt.bind(null,e,ce,Ae),r);break}bt(e,ce,Ae);break;case 5:bt(e,ce,Ae);break;default:throw Error(y(329))}}}return ve(e,G()),e.callbackNode===n?yu.bind(null,e):null}function Zi(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=as(e,t),e!==2&&(t=ce,ce=n,t!==null&&qi(t)),e}function qi(e){ce===null?ce=e:ce.push.apply(ce,e)}function rp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!De(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Ul,t&=~ws,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Re(t),r=1<<n;e[n]=-1,t&=~r}}function ro(e){if(I&6)throw Error(y(327));tn();var t=Wr(e,0);if(!(t&1))return ve(e,G()),null;var n=as(e,t);if(e.tag!==0&&n===2){var r=Ci(e);r!==0&&(t=r,n=Zi(e,r))}if(n===1)throw n=qn,Et(e,0),tt(e,t),ve(e,G()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bt(e,ce,Ae),ve(e,G()),null}function $l(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(dn=G()+500,hs&&gt())}}function zt(e){rt!==null&&rt.tag===0&&!(I&6)&&tn();var t=I;I|=1;var n=Ee.transition,r=D;try{if(Ee.transition=null,D=1,e)return e()}finally{D=r,Ee.transition=n,I=t,!(I&6)&&gt()}}function Wl(){he=Yt.current,O(Yt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Rf(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(Sl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kr();break;case 3:an(),O(pe),O(le),zl();break;case 5:Ll(r);break;case 4:an();break;case 13:O(U);break;case 19:O(U);break;case 10:Nl(r.type._context);break;case 22:case 23:Wl()}n=n.return}if(q=e,Q=e=ft(e.current,null),te=he=t,Y=0,qn=null,Ul=ws=Lt=0,ce=Dn=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=s,r.next=l}n.pending=r}St=null}return e}function xu(e,t){do{var n=Q;try{if(Pl(),zr.current=rs,ns){for(var r=A.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ns=!1}if(Tt=0,Z=K=A=null,Rn=!1,Jn=0,Bl.current=null,n===null||n.return===null){Y=1,qn=t,Q=null;break}e:{var i=e,l=n.return,a=n,o=t;if(t=te,a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var d=o,v=a,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var x=Ha(l);if(x!==null){x.flags&=-257,Va(x,l,a,i,t),x.mode&1&&Wa(i,d,t),t=x,o=d;var w=t.updateQueue;if(w===null){var b=new Set;b.add(o),t.updateQueue=b}else w.add(o);break e}else{if(!(t&1)){Wa(i,d,t),Hl();break e}o=Error(y(426))}}else if(B&&a.mode&1){var C=Ha(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Va(C,l,a,i,t),Cl(on(o,a));break e}}i=o=on(o,a),Y!==4&&(Y=2),Dn===null?Dn=[i]:Dn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=nu(i,o,t);Ma(i,f);break e;case 1:a=o;var u=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=ru(i,a,t);Ma(i,g);break e}}i=i.return}while(i!==null)}ku(n)}catch(k){t=k,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function wu(){var e=ss.current;return ss.current=rs,e===null?rs:e}function Hl(){(Y===0||Y===3||Y===2)&&(Y=4),q===null||!(Lt&268435455)&&!(ws&268435455)||tt(q,te)}function as(e,t){var n=I;I|=2;var r=wu();(q!==e||te!==t)&&(Ae=null,Et(e,t));do try{sp();break}catch(s){xu(e,s)}while(!0);if(Pl(),I=n,ss.current=r,Q!==null)throw Error(y(261));return q=null,te=0,Y}function sp(){for(;Q!==null;)bu(Q)}function ip(){for(;Q!==null&&!_c();)bu(Q)}function bu(e){var t=Cu(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?ku(e):Q=t,Bl.current=null}function ku(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zf(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Q=null;return}}else if(n=Xf(n,t,he),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Y===0&&(Y=5)}function bt(e,t,n){var r=D,s=Ee.transition;try{Ee.transition=null,D=1,lp(e,t,n,r)}finally{Ee.transition=s,D=r}return null}function lp(e,t,n,r){do tn();while(rt!==null);if(I&6)throw Error(y(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Bc(e,i),e===q&&(Q=q=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cr||(Cr=!0,Eu($r,function(){return tn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var l=D;D=1;var a=I;I|=4,Bl.current=null,ep(e,n),hu(n,e),Pf(Ti),Hr=!!_i,Ti=_i=null,e.current=n,tp(n),Tc(),I=a,D=l,Ee.transition=i}else e.current=n;if(Cr&&(Cr=!1,rt=e,ls=s),i=e.pendingLanes,i===0&&(ut=null),Rc(n.stateNode),ve(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(is)throw is=!1,e=Ji,Ji=null,e;return ls&1&&e.tag!==0&&tn(),i=e.pendingLanes,i&1?e===Xi?Fn++:(Fn=0,Xi=e):Fn=0,gt(),null}function tn(){if(rt!==null){var e=nd(ls),t=Ee.transition,n=D;try{if(Ee.transition=null,D=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,ls=0,I&6)throw Error(y(331));var s=I;for(I|=4,S=e.current;S!==null;){var i=S,l=i.child;if(S.flags&16){var a=i.deletions;if(a!==null){for(var o=0;o<a.length;o++){var d=a[o];for(S=d;S!==null;){var v=S;switch(v.tag){case 0:case 11:case 15:In(8,v,i)}var m=v.child;if(m!==null)m.return=v,S=m;else for(;S!==null;){v=S;var h=v.sibling,x=v.return;if(pu(v),v===d){S=null;break}if(h!==null){h.return=x,S=h;break}S=x}}}var w=i.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var C=b.sibling;b.sibling=null,b=C}while(b!==null)}}S=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,S=l;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:In(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break e}S=i.return}}var u=e.current;for(S=u;S!==null;){l=S;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,S=p;else e:for(l=u;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xs(9,a)}}catch(k){W(a,a.return,k)}if(a===l){S=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,S=g;break e}S=a.return}}if(I=s,gt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(cs,e)}catch{}r=!0}return r}finally{D=n,Ee.transition=t}}return!1}function so(e,t,n){t=on(n,t),t=nu(e,t,1),e=dt(e,t,1),t=oe(),e!==null&&(rr(e,1,t),ve(e,t))}function W(e,t,n){if(e.tag===3)so(e,e,n);else for(;t!==null;){if(t.tag===3){so(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=on(n,e),e=ru(t,e,1),t=dt(t,e,1),e=oe(),t!==null&&(rr(t,1,e),ve(t,e));break}}t=t.return}}function ap(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(te&n)===n&&(Y===4||Y===3&&(te&130023424)===te&&500>G()-Al?Et(e,0):Ul|=n),ve(e,t)}function Su(e,t){t===0&&(e.mode&1?(t=mr,mr<<=1,!(mr&130023424)&&(mr=4194304)):t=1);var n=oe();e=Ke(e,t),e!==null&&(rr(e,t,n),ve(e,n))}function op(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Su(e,n)}function dp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Su(e,n)}var Cu;Cu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,Jf(e,t,n);fe=!!(e.flags&131072)}else fe=!1,B&&t.flags&1048576&&jd(t,Xr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ir(e,t),e=t.pendingProps;var s=rn(t,le.current);en(t,n),s=Il(null,t,r,e,s,n);var i=Dl();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(i=!0,Yr(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,_l(t),s.updater=ys,t.stateNode=s,s._reactInternals=t,Bi(t,r,e,n),t=$i(null,t,r,!0,i,n)):(t.tag=0,B&&i&&kl(t),ae(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ir(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=cp(r),e=Te(r,e),s){case 0:t=Ai(null,t,r,e,n);break e;case 1:t=Ka(null,t,r,e,n);break e;case 11:t=Ga(null,t,r,e,n);break e;case 14:t=Qa(null,t,r,Te(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Te(r,s),Ai(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Te(r,s),Ka(e,t,r,s,n);case 3:e:{if(au(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,s=i.element,Id(e,t),es(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=on(Error(y(423)),t),t=Ya(e,t,r,n,s);break e}else if(r!==s){s=on(Error(y(424)),t),t=Ya(e,t,r,n,s);break e}else for(ge=ot(t.stateNode.containerInfo.firstChild),ye=t,B=!0,ze=null,n=zd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),r===s){t=Ye(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return Dd(t),e===null&&Fi(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,l=s.children,Li(r,s)?l=null:i!==null&&Li(r,i)&&(t.flags|=32),lu(e,t),ae(e,t,l,n),t.child;case 6:return e===null&&Fi(t),null;case 13:return ou(e,t,n);case 4:return Tl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ln(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Te(r,s),Ga(e,t,r,s,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,l=s.value,F(Zr,r._currentValue),r._currentValue=l,i!==null)if(De(i.value,l)){if(i.children===s.children&&!pe.current){t=Ye(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var o=a.firstContext;o!==null;){if(o.context===r){if(i.tag===1){o=Ve(-1,n&-n),o.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?o.next=o:(o.next=v.next,v.next=o),d.pending=o}}i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),Mi(i.return,n,t),a.lanes|=n;break}o=o.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(y(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Mi(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ae(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,en(t,n),s=Pe(s),r=r(s),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,s=Te(r,t.pendingProps),s=Te(r.type,s),Qa(e,t,r,s,n);case 15:return su(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Te(r,s),Ir(e,t),t.tag=1,me(r)?(e=!0,Yr(t)):e=!1,en(t,n),tu(t,r,s),Bi(t,r,s,n),$i(null,t,r,!0,e,n);case 19:return du(e,t,n);case 22:return iu(e,t,n)}throw Error(y(156,t.tag))};function Eu(e,t){return Zo(e,t)}function up(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new up(e,t,n,r)}function Vl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cp(e){if(typeof e=="function")return Vl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ul)return 11;if(e===cl)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mr(e,t,n,r,s,i){var l=2;if(r=e,typeof e=="function")Vl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Bt:return Pt(n.children,s,i,t);case dl:l=8,s|=8;break;case di:return e=Ce(12,n,t,s|2),e.elementType=di,e.lanes=i,e;case ui:return e=Ce(13,n,t,s),e.elementType=ui,e.lanes=i,e;case ci:return e=Ce(19,n,t,s),e.elementType=ci,e.lanes=i,e;case Do:return bs(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ro:l=10;break e;case Io:l=9;break e;case ul:l=11;break e;case cl:l=14;break e;case Ze:l=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ce(l,n,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function Pt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function bs(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=Do,e.lanes=n,e.stateNode={isHidden:!1},e}function si(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function ii(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fp(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bs(0),this.expirationTimes=Bs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bs(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Gl(e,t,n,r,s,i,l,a,o){return e=new fp(e,t,n,a,o),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_l(i),e}function pp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ot,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pu(e){if(!e)return mt;e=e._reactInternals;e:{if(It(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(me(n))return Pd(e,n,t)}return t}function Nu(e,t,n,r,s,i,l,a,o){return e=Gl(n,r,!0,e,s,i,l,a,o),e.context=Pu(null),n=e.current,r=oe(),s=ct(n),i=Ve(r,s),i.callback=t??null,dt(n,i,s),e.current.lanes=s,rr(e,s,r),ve(e,r),e}function ks(e,t,n,r){var s=t.current,i=oe(),l=ct(s);return n=Pu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ve(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(s,t,l),e!==null&&(Ie(e,s,l,i),Lr(e,s,l)),l}function os(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function io(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ql(e,t){io(e,t),(e=e.alternate)&&io(e,t)}function mp(){return null}var ju=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kl(e){this._internalRoot=e}Ss.prototype.render=Kl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));ks(e,t,null,null)};Ss.prototype.unmount=Kl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zt(function(){ks(null,e,null,null)}),t[Qe]=null}};function Ss(e){this._internalRoot=e}Ss.prototype.unstable_scheduleHydration=function(e){if(e){var t=id();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&ad(e)}};function Yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lo(){}function vp(e,t,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=os(l);i.call(d)}}var l=Nu(t,r,e,0,null,!1,!1,"",lo);return e._reactRootContainer=l,e[Qe]=l.current,Vn(e.nodeType===8?e.parentNode:e),zt(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var d=os(o);a.call(d)}}var o=Gl(e,0,!1,null,null,!1,!1,"",lo);return e._reactRootContainer=o,e[Qe]=o.current,Vn(e.nodeType===8?e.parentNode:e),zt(function(){ks(t,o,n,r)}),o}function Es(e,t,n,r,s){var i=n._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var a=s;s=function(){var o=os(l);a.call(o)}}ks(t,l,e,s)}else l=vp(n,t,e,s,r);return os(l)}rd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pn(t.pendingLanes);n!==0&&(ml(t,n|1),ve(t,G()),!(I&6)&&(dn=G()+500,gt()))}break;case 13:zt(function(){var r=Ke(e,1);if(r!==null){var s=oe();Ie(r,e,1,s)}}),Ql(e,1)}};vl=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=oe();Ie(t,e,134217728,n)}Ql(e,134217728)}};sd=function(e){if(e.tag===13){var t=ct(e),n=Ke(e,t);if(n!==null){var r=oe();Ie(n,e,t,r)}Ql(e,t)}};id=function(){return D};ld=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};bi=function(e,t,n){switch(t){case"input":if(mi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=vs(r);if(!s)throw Error(y(90));Mo(r),mi(r,s)}}}break;case"textarea":Bo(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}};Go=$l;Qo=zt;var hp={usingClientEntryPoint:!1,Events:[ir,Wt,vs,Ho,Vo,$l]},Sn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gp={bundleType:Sn.bundleType,version:Sn.version,rendererPackageName:Sn.rendererPackageName,rendererConfig:Sn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jo(e),e===null?null:e.stateNode},findFiberByHostInstance:Sn.findFiberByHostInstance||mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Er.isDisabled&&Er.supportsFiber)try{cs=Er.inject(gp),Be=Er}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hp;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yl(t))throw Error(y(200));return pp(e,t,null,n)};we.createRoot=function(e,t){if(!Yl(e))throw Error(y(299));var n=!1,r="",s=ju;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Gl(e,1,!1,null,null,n,!1,r,s),e[Qe]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Kl(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Jo(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return zt(e)};we.hydrate=function(e,t,n){if(!Cs(t))throw Error(y(200));return Es(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Yl(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",l=ju;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Nu(t,null,e,1,n??null,s,!1,i,l),e[Qe]=t.current,Vn(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Ss(t)};we.render=function(e,t,n){if(!Cs(t))throw Error(y(200));return Es(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!Cs(e))throw Error(y(40));return e._reactRootContainer?(zt(function(){Es(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};we.unstable_batchedUpdates=$l;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cs(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Es(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function _u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_u)}catch(e){console.error(e)}}_u(),_o.exports=we;var yp=_o.exports,ao=yp;ai.createRoot=ao.createRoot,ai.hydrateRoot=ao.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function er(){return er=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},er.apply(null,arguments)}var st;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(st||(st={}));const oo="popstate";function xp(e){e===void 0&&(e={});function t(r,s){let{pathname:i,search:l,hash:a}=r.location;return el("",{pathname:i,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Tu(s)}return bp(t,n,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Jl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wp(){return Math.random().toString(36).substr(2,8)}function uo(e,t){return{usr:e.state,key:e.key,idx:t}}function el(e,t,n,r){return n===void 0&&(n=null),er({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pn(t):t,{state:n,key:t&&t.key||r||wp()})}function Tu(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function pn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function bp(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,l=s.history,a=st.Pop,o=null,d=v();d==null&&(d=0,l.replaceState(er({},l.state,{idx:d}),""));function v(){return(l.state||{idx:null}).idx}function m(){a=st.Pop;let C=v(),f=C==null?null:C-d;d=C,o&&o({action:a,location:b.location,delta:f})}function h(C,f){a=st.Push;let u=el(b.location,C,f);d=v()+1;let p=uo(u,d),g=b.createHref(u);try{l.pushState(p,"",g)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;s.location.assign(g)}i&&o&&o({action:a,location:b.location,delta:1})}function x(C,f){a=st.Replace;let u=el(b.location,C,f);d=v();let p=uo(u,d),g=b.createHref(u);l.replaceState(p,"",g),i&&o&&o({action:a,location:b.location,delta:0})}function w(C){let f=s.location.origin!=="null"?s.location.origin:s.location.href,u=typeof C=="string"?C:Tu(C);return u=u.replace(/ $/,"%20"),J(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let b={get action(){return a},get location(){return e(s,l)},listen(C){if(o)throw new Error("A history only accepts one active listener");return s.addEventListener(oo,m),o=C,()=>{s.removeEventListener(oo,m),o=null}},createHref(C){return t(s,C)},createURL:w,encodeLocation(C){let f=w(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:x,go(C){return l.go(C)}};return b}var co;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(co||(co={}));function kp(e,t,n){return n===void 0&&(n="/"),Sp(e,t,n)}function Sp(e,t,n,r){let s=typeof t=="string"?pn(t):t,i=Ru(s.pathname||"/",n);if(i==null)return null;let l=Lu(e);Cp(l);let a=null,o=Fp(i);for(let d=0;a==null&&d<l.length;++d)a=Rp(l[d],o);return a}function Lu(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,l,a)=>{let o={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};o.relativePath.startsWith("/")&&(J(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let d=Nt([r,o.relativePath]),v=n.concat(o);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Lu(i.children,t,v,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:Lp(d,i.index),routesMeta:v})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,l);else for(let o of zu(i.path))s(i,l,o)}),t}function zu(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let l=zu(r.join("/")),a=[];return a.push(...l.map(o=>o===""?i:[i,o].join("/"))),s&&a.push(...l),a.map(o=>e.startsWith("/")&&o===""?"/":o)}function Cp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:zp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ep=/^:[\w-]+$/,Pp=3,Np=2,jp=1,_p=10,Tp=-2,fo=e=>e==="*";function Lp(e,t){let n=e.split("/"),r=n.length;return n.some(fo)&&(r+=Tp),t&&(r+=Np),n.filter(s=>!fo(s)).reduce((s,i)=>s+(Ep.test(i)?Pp:i===""?jp:_p),r)}function zp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function Rp(e,t,n){let{routesMeta:r}=e,s={},i="/",l=[];for(let a=0;a<r.length;++a){let o=r[a],d=a===r.length-1,v=i==="/"?t:t.slice(i.length)||"/",m=Ip({path:o.relativePath,caseSensitive:o.caseSensitive,end:d},v),h=o.route;if(!m)return null;Object.assign(s,m.params),l.push({params:s,pathname:Nt([i,m.pathname]),pathnameBase:Wp(Nt([i,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(i=Nt([i,m.pathnameBase]))}return l}function Ip(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Dp(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let i=s[0],l=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((d,v,m)=>{let{paramName:h,isOptional:x}=v;if(h==="*"){let b=a[m]||"";l=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const w=a[m];return x&&!w?d[h]=void 0:d[h]=(w||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:l,pattern:e}}function Dp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Jl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,o)=>(r.push({paramName:a,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function Fp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Jl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ru(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Mp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Op=e=>Mp.test(e);function Bp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?pn(e):e,i;if(n)if(Op(n))i=n;else{if(n.includes("//")){let l=n;n=Iu(n),Jl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?i=po(n.substring(1),"/"):i=po(n,t)}else i=t;return{pathname:i,search:Hp(r),hash:Vp(s)}}function po(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function li(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Up(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ap(e,t){let n=Up(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $p(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=pn(e):(s=er({},e),J(!s.pathname||!s.pathname.includes("?"),li("?","pathname","search",s)),J(!s.pathname||!s.pathname.includes("#"),li("#","pathname","hash",s)),J(!s.search||!s.search.includes("#"),li("#","search","hash",s)));let i=e===""||s.pathname==="",l=i?"/":s.pathname,a;if(l==null)a=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),m-=1;s.pathname=h.join("/")}a=m>=0?t[m]:"/"}let o=Bp(s,a),d=l&&l!=="/"&&l.endsWith("/"),v=(i||l===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(d||v)&&(o.pathname+="/"),o}const Iu=e=>e.replace(/\/\/+/g,"/"),Nt=e=>Iu(e.join("/")),Wp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Hp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Gp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Du=["post","put","patch","delete"];new Set(Du);const Qp=["get",...Du];new Set(Qp);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tr(){return tr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tr.apply(null,arguments)}const Xl=P.createContext(null),Kp=P.createContext(null),Ps=P.createContext(null),Ns=P.createContext(null),Dt=P.createContext({outlet:null,matches:[],isDataRoute:!1}),Fu=P.createContext(null);function js(){return P.useContext(Ns)!=null}function _s(){return js()||J(!1),P.useContext(Ns).location}function Mu(e){P.useContext(Ps).static||P.useLayoutEffect(e)}function Ts(){let{isDataRoute:e}=P.useContext(Dt);return e?om():Yp()}function Yp(){js()||J(!1);let e=P.useContext(Xl),{basename:t,future:n,navigator:r}=P.useContext(Ps),{matches:s}=P.useContext(Dt),{pathname:i}=_s(),l=JSON.stringify(Ap(s,n.v7_relativeSplatPath)),a=P.useRef(!1);return Mu(()=>{a.current=!0}),P.useCallback(function(d,v){if(v===void 0&&(v={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let m=$p(d,JSON.parse(l),i,v.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Nt([t,m.pathname])),(v.replace?r.replace:r.push)(m,v.state,v)},[t,r,l,i,e])}function Jp(){let{matches:e}=P.useContext(Dt),t=e[e.length-1];return t?t.params:{}}function Xp(e,t){return Zp(e,t)}function Zp(e,t,n,r){js()||J(!1);let{navigator:s}=P.useContext(Ps),{matches:i}=P.useContext(Dt),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let o=l?l.pathnameBase:"/";l&&l.route;let d=_s(),v;if(t){var m;let C=typeof t=="string"?pn(t):t;o==="/"||(m=C.pathname)!=null&&m.startsWith(o)||J(!1),v=C}else v=d;let h=v.pathname||"/",x=h;if(o!=="/"){let C=o.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(C.length).join("/")}let w=kp(e,{pathname:x}),b=rm(w&&w.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Nt([o,s.encodeLocation?s.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?o:Nt([o,s.encodeLocation?s.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),i,n,r);return t&&b?P.createElement(Ns.Provider,{value:{location:tr({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:st.Pop}},b):b}function qp(){let e=am(),t=Gp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:s},n):null,null)}const em=P.createElement(qp,null);class tm extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?P.createElement(Dt.Provider,{value:this.props.routeContext},P.createElement(Fu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nm(e){let{routeContext:t,match:n,children:r}=e,s=P.useContext(Xl);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Dt.Provider,{value:t},r)}function rm(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(s=n)==null?void 0:s.errors;if(a!=null){let v=l.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);v>=0||J(!1),l=l.slice(0,Math.min(l.length,v+1))}let o=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let v=0;v<l.length;v++){let m=l[v];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=v),m.route.id){let{loaderData:h,errors:x}=n,w=m.route.loader&&h[m.route.id]===void 0&&(!x||x[m.route.id]===void 0);if(m.route.lazy||w){o=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((v,m,h)=>{let x,w=!1,b=null,C=null;n&&(x=a&&m.route.id?a[m.route.id]:void 0,b=m.route.errorElement||em,o&&(d<0&&h===0?(dm("route-fallback"),w=!0,C=null):d===h&&(w=!0,C=m.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,h+1)),u=()=>{let p;return x?p=b:w?p=C:m.route.Component?p=P.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=v,P.createElement(nm,{match:m,routeContext:{outlet:v,matches:f,isDataRoute:n!=null},children:p})};return n&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?P.createElement(tm,{location:n.location,revalidation:n.revalidation,component:b,error:x,children:u(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):u()},null)}var Ou=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ou||{}),Bu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bu||{});function sm(e){let t=P.useContext(Xl);return t||J(!1),t}function im(e){let t=P.useContext(Kp);return t||J(!1),t}function lm(e){let t=P.useContext(Dt);return t||J(!1),t}function Uu(e){let t=lm(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function am(){var e;let t=P.useContext(Fu),n=im(),r=Uu();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function om(){let{router:e}=sm(Ou.UseNavigateStable),t=Uu(Bu.UseNavigateStable),n=P.useRef(!1);return Mu(()=>{n.current=!0}),P.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,tr({fromRouteId:t},i)))},[e,t])}const mo={};function dm(e,t,n){mo[e]||(mo[e]=!0)}function um(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Mt(e){J(!1)}function cm(e){let{basename:t="/",children:n=null,location:r,navigationType:s=st.Pop,navigator:i,static:l=!1,future:a}=e;js()&&J(!1);let o=t.replace(/^\/*/,"/"),d=P.useMemo(()=>({basename:o,navigator:i,static:l,future:tr({v7_relativeSplatPath:!1},a)}),[o,a,i,l]);typeof r=="string"&&(r=pn(r));let{pathname:v="/",search:m="",hash:h="",state:x=null,key:w="default"}=r,b=P.useMemo(()=>{let C=Ru(v,o);return C==null?null:{location:{pathname:C,search:m,hash:h,state:x,key:w},navigationType:s}},[o,v,m,h,x,w,s]);return b==null?null:P.createElement(Ps.Provider,{value:d},P.createElement(Ns.Provider,{children:n,value:b}))}function fm(e){let{children:t,location:n}=e;return Xp(tl(t),n)}new Promise(()=>{});function tl(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,s)=>{if(!P.isValidElement(r))return;let i=[...t,s];if(r.type===P.Fragment){n.push.apply(n,tl(r.props.children,i));return}r.type!==Mt&&J(!1),!r.props.index||!r.props.children||J(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=tl(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const pm="6";try{window.__reactRouterVersion=pm}catch{}const mm="startTransition",vo=lc[mm];function vm(e){let{basename:t,children:n,future:r,window:s}=e,i=P.useRef();i.current==null&&(i.current=xp({window:s,v5Compat:!0}));let l=i.current,[a,o]=P.useState({action:l.action,location:l.location}),{v7_startTransition:d}=r||{},v=P.useCallback(m=>{d&&vo?vo(()=>o(m)):o(m)},[o,d]);return P.useLayoutEffect(()=>l.listen(v),[l,v]),P.useEffect(()=>um(r),[r]),P.createElement(cm,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}var ho;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ho||(ho={}));var go;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(go||(go={}));const Au=[{id:"getting-started",title:"Getting Started",section:"Getting Started"},{id:"installation",title:"Installation",section:"Getting Started"},{id:"cdn",title:"CDN Usage",section:"Getting Started"},{id:"customize",title:"Customization",section:"Getting Started"},{id:"colors",title:"Colors",section:"Utilities"},{id:"typography",title:"Typography",section:"Utilities"},{id:"spacing",title:"Spacing",section:"Utilities"},{id:"display",title:"Display & Visibility",section:"Utilities"},{id:"borders",title:"Borders",section:"Utilities"},{id:"flex-grid",title:"Flexbox & Grid",section:"Utilities"},{id:"sizing",title:"Sizing",section:"Utilities"},{id:"shadows",title:"Shadows",section:"Utilities"},{id:"buttons",title:"Buttons",section:"Components"},{id:"cards",title:"Cards",section:"Components"},{id:"forms",title:"Forms",section:"Components"},{id:"badges",title:"Badges",section:"Components"},{id:"alerts",title:"Alerts",section:"Components"},{id:"navs",title:"Navs & Tabs",section:"Components"},{id:"modals",title:"Modals",section:"Components"},{id:"dropdowns",title:"Dropdowns",section:"Components"},{id:"list-group",title:"List Group",section:"Components"},{id:"tables",title:"Tables",section:"Components"},{id:"progress",title:"Progress Bars",section:"Components"},{id:"spinners",title:"Spinners",section:"Components"},{id:"tooltips",title:"Tooltips",section:"Components"},{id:"accordion",title:"Accordion",section:"Components"},{id:"hero",title:"Hero Sections",section:"Patterns"},{id:"features",title:"Features Grid",section:"Patterns"},{id:"testimonials",title:"Testimonials",section:"Patterns"},{id:"pricing",title:"Pricing Tables",section:"Patterns"},{id:"team",title:"Team Sections",section:"Patterns"},{id:"contact",title:"Contact Forms",section:"Patterns"},{id:"stats",title:"Stats Sections",section:"Patterns"},{id:"cta",title:"Call to Action",section:"Patterns"},{id:"faq",title:"FAQ Sections",section:"Patterns"},{id:"blog",title:"Blog Layouts",section:"Patterns"},{id:"dashboard",title:"Dashboard",section:"Patterns"},{id:"auth",title:"Auth Pages",section:"Patterns"},{id:"templates-overview",title:"Templates Overview",section:"Templates"}],hm=[{label:"Getting Started",ids:["getting-started","installation","cdn","customize"]},{label:"Utilities",ids:["colors","typography","spacing","display","borders","flex-grid","sizing","shadows"]},{label:"Components",ids:["buttons","cards","forms","badges","alerts","navs","modals","dropdowns","list-group","tables","progress","spinners","tooltips","accordion"]},{label:"Patterns",ids:["hero","features","testimonials","pricing","team","contact","stats","cta","faq","blog","dashboard","auth"]},{label:"Templates",ids:["templates-overview"]}];function gm({open:e,onClose:t}){const n=_s(),r=Ts(),s=n.hash.slice(1);return c.jsxs("aside",{className:`sidebar-area ${e?"open":""}`,children:[c.jsxs("div",{className:"sidebar-search",children:[c.jsx("span",{className:"sidebar-search-icon",children:c.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"11",cy:"11",r:"8"}),c.jsx("path",{d:"m21 21-4.35-4.35"})]})}),c.jsx("input",{placeholder:"Filter..."})]}),hm.map(i=>c.jsxs("div",{className:"sidebar-group",children:[c.jsx("div",{className:"sidebar-group-title",children:i.label}),i.ids.map(l=>{const a=Au.find(o=>o.id===l);return c.jsx("a",{href:"#"+l,className:`sidebar-link ${s===l?"active":""}`,onClick:o=>{o.preventDefault(),r("/docs#"+l),t()},children:(a==null?void 0:a.title)||l},l)})]},i.label))]})}function ym({sidebarOpen:e,onToggleSidebar:t,onOpenSearch:n,dark:r,onToggleDark:s}){return c.jsx("header",{className:"site-header",children:c.jsx("div",{className:"header-inner",children:c.jsxs("div",{className:"header-row",children:[c.jsx("button",{className:"header-toggle",onClick:t,"aria-label":"Toggle sidebar",children:e?"✕":"☰"}),c.jsxs("a",{href:"/folkline-ui-site/",className:"header-logo",children:[c.jsx("span",{className:"mark",children:"F"}),"folkline",c.jsx("span",{className:"muted",children:"UI"})]}),c.jsxs("nav",{className:"main-nav",children:[c.jsx("a",{href:"/folkline-ui-site/docs","data-active":location.pathname.startsWith("/docs")||void 0,children:"Docs"}),c.jsx("a",{href:"/folkline-ui-site/templates","data-active":location.pathname.startsWith("/templates")||void 0,children:"Templates"})]}),c.jsx("div",{className:"header-spacer"}),c.jsxs("div",{className:"header-actions",children:[c.jsxs("button",{className:"search-btn",onClick:n,children:[c.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"11",cy:"11",r:"8"}),c.jsx("path",{d:"m21 21-4.35-4.35"})]}),c.jsx("span",{children:"Search docs…"}),c.jsx("kbd",{children:"Ctrl+K"})]}),c.jsx("button",{className:"icon-btn",onClick:s,"aria-label":"Toggle dark mode",children:r?"☀":"☾"}),c.jsx("span",{className:"header-sep"}),c.jsxs("a",{href:"https://github.com/realtoheed/folkline-ui",className:"btn-new",target:"_blank",children:[c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"})}),"GitHub"]})]})]})})})}function xm(){return c.jsx("footer",{className:"site-footer",children:c.jsx("div",{className:"footer-inner",children:c.jsxs("p",{className:"footer-text",children:["Built with love by"," ",c.jsx("a",{href:"https://github.com/realtoheed",target:"_blank",children:"Toheed"})," ","·"," ",c.jsx("a",{href:"https://github.com/realtoheed/folkline-ui",target:"_blank",children:"GitHub"})]})})})}function wm({onClose:e}){const[t,n]=P.useState(""),r=Ts(),s=Au.filter(i=>{var l;return i.title.toLowerCase().includes(t.toLowerCase())||((l=i.section)==null?void 0:l.toLowerCase().includes(t.toLowerCase()))}).slice(0,10);return c.jsx("div",{style:{position:"fixed",inset:0,zIndex:9999,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:"120px",background:"rgba(0,0,0,.5)"},onClick:i=>{i.target===i.currentTarget&&e()},children:c.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:"12px",width:"540px",maxWidth:"90vw",boxShadow:"0 20px 60px rgba(0,0,0,.2)",overflow:"hidden"},children:[c.jsx("div",{style:{padding:"12px 16px",borderBottom:"1px solid var(--border)"},children:c.jsx("input",{autoFocus:!0,placeholder:"Search documentation…",value:t,onChange:i=>n(i.target.value),style:{width:"100%",border:"none",outline:"none",background:"transparent",fontFamily:"inherit",fontSize:"1rem",color:"var(--foreground)"}})}),c.jsxs("div",{style:{maxHeight:"360px",overflow:"auto"},children:[s.map(i=>c.jsxs("div",{onClick:()=>{r("/docs#"+i.id),e()},style:{padding:"10px 16px",cursor:"pointer",fontSize:".875rem",borderBottom:"1px solid var(--border)",transition:"background .1s"},className:"search-result-item",children:[c.jsx("div",{style:{fontWeight:600,marginBottom:2},children:i.title}),c.jsx("div",{style:{color:"var(--muted-foreground)",fontSize:".75rem"},children:i.section})]},i.id)),t&&s.length===0&&c.jsx("div",{style:{padding:"24px",textAlign:"center",color:"var(--muted-foreground)",fontSize:".875rem"},children:"No results found"})]})]})})}const ds=[{id:"landing-startup",title:"Startup Landing",description:"A modern startup landing page with hero, features, and CTA.",tags:["landing","startup"],category:"landing",html:`<div class="container" style="padding:24px">
  <nav class="d-flex ai-center jc-between mb-5">
    <div class="fs-2 fw-700" style="letter-spacing:-.02em">Startup</div>
    <div class="d-flex gap-3 ai-center">
      <a href="#" class="text-muted td-none fs-sm">Features</a>
      <a href="#" class="text-muted td-none fs-sm">Pricing</a>
      <a href="#" class="text-muted td-none fs-sm">About</a>
      <button class="btn btn-primary btn-sm">Get Started</button>
    </div>
  </nav>
  <div class="text-center py-5">
    <h1 class="fs-4xl fw-800 mb-3" style="letter-spacing:-.03em;max-width:600px;margin:0 auto 16px">Build products people love</h1>
    <p class="text-muted fs-lg mb-4" style="max-width:480px;margin:0 auto 24px">A modern platform for teams to build, ship, and iterate on products faster than ever before.</p>
    <div class="d-flex gap-3 jc-center">
      <button class="btn btn-primary btn-lg">Start Free Trial</button>
      <button class="btn btn-ghost btn-lg">Watch Demo</button>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-md-4 mb-4">
      <div class="card p-4 text-center">
        <div class="fs-3 fw-700 text-primary mb-2">10x</div>
        <h3 class="fs-base fw-600 mb-1">Faster Shipping</h3>
        <p class="text-muted fs-sm">Deploy features 10x faster with our streamlined workflow.</p>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card p-4 text-center">
        <div class="fs-3 fw-700 text-primary mb-2">99.9%</div>
        <h3 class="fs-base fw-600 mb-1">Uptime</h3>
        <p class="text-muted fs-sm">Enterprise-grade reliability you can count on.</p>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card p-4 text-center">
        <div class="fs-3 fw-700 text-primary mb-2">5K+</div>
        <h3 class="fs-base fw-600 mb-1">Teams</h3>
        <p class="text-muted fs-sm">Join thousands of teams already using Startup.</p>
      </div>
    </div>
  </div>
</div>`},{id:"landing-saas",title:"SaaS Landing",description:"SaaS product landing page with pricing and testimonials.",tags:["landing","saas","pricing"],category:"landing",html:`<div class="container" style="padding:24px">
  <div class="text-center mb-5">
    <span class="badge badge-primary badge-pill mb-3">Now in Public Beta</span>
    <h1 class="fs-4xl fw-800 mb-3">Simple pricing for teams</h1>
    <p class="text-muted fs-lg mb-5">Start free, upgrade when you grow. No hidden fees.</p>
  </div>
  <div class="row jc-center">
    <div class="col-md-4 mb-4">
      <div class="card p-4 text-center">
        <h3 class="fs-xl fw-600 mb-2">Starter</h3>
        <p class="text-muted fs-sm mb-3">For small teams</p>
        <div class="fs-4xl fw-800 mb-3">$19<span class="fs-base fw-400 text-muted">/mo</span></div>
        <div class="mb-4">
          <div class="mb-2 fs-sm">5 team members</div>
          <div class="mb-2 fs-sm">10GB storage</div>
          <div class="mb-2 fs-sm">Basic analytics</div>
        </div>
        <button class="btn btn-outline-primary w-100">Get Started</button>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card p-4 text-center border-primary">
        <span class="badge badge-primary mb-2">Popular</span>
        <h3 class="fs-xl fw-600 mb-2">Professional</h3>
        <p class="text-muted fs-sm mb-3">For growing teams</p>
        <div class="fs-4xl fw-800 mb-3">$49<span class="fs-base fw-400 text-muted">/mo</span></div>
        <div class="mb-4">
          <div class="mb-2 fs-sm">Unlimited members</div>
          <div class="mb-2 fs-sm">100GB storage</div>
          <div class="mb-2 fs-sm">Advanced analytics</div>
        </div>
        <button class="btn btn-primary w-100">Get Started</button>
      </div>
    </div>
  </div>
  <div class="text-center mt-5 pt-4 border-top">
    <p class="text-muted fs-sm">Trusted by 2,000+ teams worldwide</p>
  </div>
</div>`},{id:"landing-app",title:"App Landing",description:"Mobile app landing page with app store buttons and feature showcase.",tags:["landing","app","mobile"],category:"landing",html:`<div class="container" style="padding:24px">
  <div class="row ai-center">
    <div class="col-md-6 mb-4">
      <span class="badge badge-primary badge-pill mb-3">v2.0 Available Now</span>
      <h1 class="fs-4xl fw-800 mb-3" style="letter-spacing:-.03em">Your daily companion app</h1>
      <p class="text-muted fs-lg mb-4">Track, organize, and achieve your goals with the most intuitive app on the market.</p>
      <div class="d-flex gap-3 flex-wrap">
        <button class="btn btn-primary btn-lg">App Store</button>
        <button class="btn btn-ghost btn-lg">Google Play</button>
      </div>
      <div class="d-flex gap-4 mt-4">
        <div><span class="fw-700 fs-lg">4.9</span><span class="text-muted fs-sm d-block">Rating</span></div>
        <div><span class="fw-700 fs-lg">1M+</span><span class="text-muted fs-sm d-block">Downloads</span></div>
      </div>
    </div>
    <div class="col-md-6 text-center mb-4">
      <div class="d-inline-flex ai-center jc-center" style="width:240px;height:400px;background:var(--muted);border-radius:32px;border:4px solid var(--border)">
        <span class="text-muted fs-sm">App Preview</span>
      </div>
    </div>
  </div>
</div>`},{id:"landing-product",title:"Product Landing",description:"Product showcase page with features and testimonials.",tags:["landing","product","ecommerce"],category:"landing",html:`<div class="container" style="padding:24px">
  <div class="row ai-center">
    <div class="col-md-6 mb-4">
      <span class="badge badge-warning badge-pill mb-3">New Arrival</span>
      <h1 class="fs-4xl fw-800 mb-3">Wireless Headphones Pro</h1>
      <p class="text-muted fs-lg mb-3">Premium noise-canceling headphones with 40-hour battery life and crystal-clear audio.</p>
      <div class="fs-3xl fw-800 mb-4">$299 <span class="fs-base fw-400 text-muted"><s>$399</s></span></div>
      <button class="btn btn-primary btn-lg">Add to Cart</button>
    </div>
    <div class="col-md-6 text-center mb-4">
      <div class="d-inline-flex ai-center jc-center" style="width:300px;height:300px;background:var(--muted);border-radius:24px">
        <span class="text-muted fs-sm">Product Image</span>
      </div>
    </div>
  </div>
</div>`},{id:"dashboard-admin",title:"Admin Dashboard",description:"Admin dashboard with stats cards, charts, and data table.",tags:["dashboard","admin","analytics"],category:"dashboard",html:`<div style="padding:24px">
  <div class="d-flex jc-between ai-center mb-4">
    <h2 class="fs-2xl fw-700">Dashboard</h2>
    <button class="btn btn-primary btn-sm">Download Report</button>
  </div>
  <div class="row mb-4">
    <div class="col-md-3 mb-3">
      <div class="card p-3">
        <div class="text-muted fs-sm mb-1">Total Revenue</div>
        <div class="fs-3xl fw-700">$84,250</div>
        <div class="text-success fs-sm mt-1">+12.5% vs last month</div>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <div class="card p-3">
        <div class="text-muted fs-sm mb-1">Active Users</div>
        <div class="fs-3xl fw-700">2,847</div>
        <div class="text-success fs-sm mt-1">+8.2% vs last month</div>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <div class="card p-3">
        <div class="text-muted fs-sm mb-1">Orders</div>
        <div class="fs-3xl fw-700">1,429</div>
        <div class="text-success fs-sm mt-1">+5.7% vs last month</div>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <div class="card p-3">
        <div class="text-muted fs-sm mb-1">Conversion</div>
        <div class="fs-3xl fw-700">3.24%</div>
        <div class="text-success fs-sm mt-1">+1.2% vs last month</div>
      </div>
    </div>
  </div>
  <div class="card p-4">
    <h3 class="fs-base fw-600 mb-3">Recent Orders</h3>
    <table class="table table-striped">
      <thead><tr><th>Order</th><th>Customer</th><th>Status</th><th>Amount</th></tr></thead>
      <tbody>
        <tr><td>#1024</td><td>Alice Johnson</td><td><span class="badge badge-success">Completed</span></td><td>$299</td></tr>
        <tr><td>#1025</td><td>Bob Smith</td><td><span class="badge badge-warning">Pending</span></td><td>$149</td></tr>
        <tr><td>#1026</td><td>Carol White</td><td><span class="badge badge-primary">Processing</span></td><td>$499</td></tr>
      </tbody>
    </table>
  </div>
</div>`},{id:"dashboard-analytics",title:"Analytics Dashboard",description:"Analytics dashboard with metric cards and data visualization placeholders.",tags:["dashboard","analytics","metrics"],category:"dashboard",html:`<div style="padding:24px">
  <h2 class="fs-2xl fw-700 mb-4">Analytics</h2>
  <div class="row mb-4">
    <div class="col-md-6 mb-3">
      <div class="card p-4">
        <h3 class="fs-sm text-muted fw-500 mb-2">Page Views</h3>
        <div class="fs-3xl fw-700">124,582</div>
        <div class="mt-2" style="height:80px;background:var(--muted);border-radius:8px"></div>
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <div class="card p-4">
        <h3 class="fs-sm text-muted fw-500 mb-2">Revenue</h3>
        <div class="fs-3xl fw-700">$32,490</div>
        <div class="mt-2" style="height:80px;background:var(--muted);border-radius:8px"></div>
      </div>
    </div>
  </div>
</div>`},{id:"ecommerce-store",title:"E-commerce Store",description:"Product grid with cards, filters, and shopping cart.",tags:["ecommerce","store","products"],category:"ecommerce",html:`<div style="padding:24px">
  <div class="d-flex jc-between ai-center mb-4">
    <h2 class="fs-2xl fw-700">All Products</h2>
    <div class="d-flex gap-2 ai-center">
      <input class="form-control" placeholder="Search products..." style="width:200px">
      <button class="btn btn-outline-primary btn-sm">Cart (3)</button>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4 mb-4">
      <div class="card">
        <div style="height:180px;background:var(--muted);border-radius:8px 8px 0 0"></div>
        <div class="p-3">
          <h3 class="fs-base fw-600 mb-1">Product Name</h3>
          <p class="text-muted fs-sm mb-2">Short description of the product.</p>
          <div class="d-flex jc-between ai-center">
            <span class="fs-lg fw-700">$29.99</span>
            <button class="btn btn-primary btn-sm">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card">
        <div style="height:180px;background:var(--muted);border-radius:8px 8px 0 0"></div>
        <div class="p-3">
          <h3 class="fs-base fw-600 mb-1">Another Product</h3>
          <p class="text-muted fs-sm mb-2">Another product description.</p>
          <div class="d-flex jc-between ai-center">
            <span class="fs-lg fw-700">$49.99</span>
            <button class="btn btn-primary btn-sm">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card">
        <div style="height:180px;background:var(--muted);border-radius:8px 8px 0 0"></div>
        <div class="p-3">
          <h3 class="fs-base fw-600 mb-1">Premium Item</h3>
          <p class="text-muted fs-sm mb-2">Premium quality product.</p>
          <div class="d-flex jc-between ai-center">
            <span class="fs-lg fw-700">$99.99</span>
            <button class="btn btn-primary btn-sm">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`},{id:"ecommerce-product",title:"Product Detail",description:"Single product detail page with images and reviews.",tags:["ecommerce","product","detail"],category:"ecommerce",html:`<div style="padding:24px">
  <div class="row">
    <div class="col-md-6 mb-4">
      <div style="height:360px;background:var(--muted);border-radius:12px"></div>
    </div>
    <div class="col-md-6 mb-4">
      <span class="badge badge-primary mb-2">Free Shipping</span>
      <h1 class="fs-2xl fw-700 mb-2">Premium Wireless Headphones</h1>
      <div class="d-flex gap-2 ai-center mb-2">
        <span class="star star-filled"></span>
        <span class="star star-filled"></span>
        <span class="star star-filled"></span>
        <span class="star star-filled"></span>
        <span class="star"></span>
        <span class="text-muted fs-sm">(128 reviews)</span>
      </div>
      <div class="fs-3xl fw-700 mb-3">$249.99</div>
      <p class="text-muted mb-4">Experience crystal-clear audio with active noise cancellation and 40-hour battery life.</p>
      <div class="d-flex gap-3 mb-4">
        <select class="form-control" style="width:80px"><option>1</option><option>2</option><option>3</option></select>
        <button class="btn btn-primary btn-lg">Add to Cart</button>
        <button class="btn btn-ghost btn-lg">&#9825;</button>
      </div>
    </div>
  </div>
</div>`},{id:"blog-grid",title:"Blog Grid",description:"Blog homepage with article cards grid.",tags:["blog","grid","articles"],category:"blog",html:`<div style="padding:24px">
  <h2 class="fs-2xl fw-700 mb-4">Latest Articles</h2>
  <div class="row">
    <div class="col-md-4 mb-4">
      <div class="card">
        <div style="height:160px;background:var(--muted);border-radius:8px 8px 0 0"></div>
        <div class="p-3">
          <span class="badge badge-primary badge-sm mb-2">Technology</span>
          <h3 class="fs-base fw-600 mb-2">Getting Started with CSS Grid</h3>
          <p class="text-muted fs-sm">Learn the fundamentals of CSS Grid in this comprehensive guide.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card">
        <div style="height:160px;background:var(--muted);border-radius:8px 8px 0 0"></div>
        <div class="p-3">
          <span class="badge badge-success badge-sm mb-2">Design</span>
          <h3 class="fs-base fw-600 mb-2">Modern UI Design Principles</h3>
          <p class="text-muted fs-sm">Explore the key principles of modern user interface design.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card">
        <div style="height:160px;background:var(--muted);border-radius:8px 8px 0 0"></div>
        <div class="p-3">
          <span class="badge badge-warning badge-sm mb-2">JavaScript</span>
          <h3 class="fs-base fw-600 mb-2">React 19 New Features</h3>
          <p class="text-muted fs-sm">An overview of the exciting new features in React 19.</p>
        </div>
      </div>
    </div>
  </div>
</div>`},{id:"blog-post",title:"Blog Post",description:"Single blog post with content and sidebar.",tags:["blog","post","article"],category:"blog",html:`<div style="padding:24px">
  <div class="row">
    <div class="col-md-8 mb-4">
      <span class="badge badge-primary badge-sm mb-2">Technology</span>
      <h1 class="fs-2xl fw-700 mb-2">Getting Started with CSS Grid</h1>
      <div class="text-muted fs-sm mb-4">By John Doe &middot; Jan 15, 2026 &middot; 5 min read</div>
      <div style="height:240px;background:var(--muted);border-radius:8px;margin-bottom:24px"></div>
      <p class="mb-3">CSS Grid Layout is the most powerful layout system in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows, unlike Flexbox which is largely a 1-dimensional system.</p>
      <p class="mb-3">In this guide, we'll cover the fundamentals of CSS Grid and how to use it to create complex layouts with ease.</p>
      <h2 class="fs-lg fw-600 mb-2">Key Concepts</h2>
      <p class="mb-3">CSS Grid introduces a grid container and grid items. The container defines the grid template, and items are placed within it.</p>
      <h2 class="fs-lg fw-600 mb-2">Browser Support</h2>
      <p class="mb-3">CSS Grid is supported in all modern browsers, making it a reliable choice for production layouts.</p>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card p-3 mb-3">
        <h3 class="fs-sm fw-600 mb-2">About the Author</h3>
        <p class="text-muted fs-sm">John is a frontend developer with 8 years of experience building web applications.</p>
      </div>
      <div class="card p-3">
        <h3 class="fs-sm fw-600 mb-2">Categories</h3>
        <div class="d-flex flex-wrap gap-2">
          <span class="badge badge-muted">Technology</span>
          <span class="badge badge-muted">Design</span>
          <span class="badge badge-muted">JavaScript</span>
          <span class="badge badge-muted">CSS</span>
        </div>
      </div>
    </div>
  </div>
</div>`},{id:"auth-login",title:"Login Page",description:"Clean login form with social login options.",tags:["auth","login","form"],category:"auth",html:`<div class="container" style="padding:24px;max-width:420px">
  <div class="card p-4">
    <div class="text-center mb-4">
      <div class="fs-2xl fw-700 mb-1">Welcome back</div>
      <p class="text-muted fs-sm">Sign in to your account</p>
    </div>
    <form>
      <div class="mb-3">
        <label class="form-label fs-sm fw-500">Email</label>
        <input type="email" class="form-control" placeholder="you@example.com">
      </div>
      <div class="mb-3">
        <label class="form-label fs-sm fw-500">Password</label>
        <input type="password" class="form-control" placeholder="Enter your password">
      </div>
      <div class="d-flex jc-between ai-center mb-4">
        <div><input type="checkbox" class="form-checkbox" id="remember"> <label for="remember" class="fs-sm">Remember me</label></div>
        <a href="#" class="fs-sm text-primary">Forgot password?</a>
      </div>
      <button class="btn btn-primary w-100 btn-lg">Sign In</button>
    </form>
    <div class="text-center mt-4">
      <div class="text-muted fs-sm mb-3">Or continue with</div>
      <div class="d-flex gap-3 jc-center">
        <button class="btn btn-outline-secondary btn-sm">Google</button>
        <button class="btn btn-outline-secondary btn-sm">GitHub</button>
      </div>
    </div>
    <div class="text-center mt-4">
      <span class="text-muted fs-sm">Don&rsquo;t have an account? </span>
      <a href="#" class="fs-sm text-primary">Sign up</a>
    </div>
  </div>
</div>`},{id:"auth-register",title:"Register Page",description:"Registration form with validation fields.",tags:["auth","register","form"],category:"auth",html:`<div class="container" style="padding:24px;max-width:480px">
  <div class="card p-4">
    <div class="text-center mb-4">
      <div class="fs-2xl fw-700 mb-1">Create account</div>
      <p class="text-muted fs-sm">Get started with a free account</p>
    </div>
    <form>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label fs-sm fw-500">First Name</label>
          <input type="text" class="form-control" placeholder="John">
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label fs-sm fw-500">Last Name</label>
          <input type="text" class="form-control" placeholder="Doe">
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label fs-sm fw-500">Email</label>
        <input type="email" class="form-control" placeholder="you@example.com">
      </div>
      <div class="mb-3">
        <label class="form-label fs-sm fw-500">Password</label>
        <input type="password" class="form-control" placeholder="Create a password">
      </div>
      <button class="btn btn-primary w-100 btn-lg">Create Account</button>
    </form>
    <div class="text-center mt-4">
      <span class="text-muted fs-sm">Already have an account? </span>
      <a href="#" class="fs-sm text-primary">Sign in</a>
    </div>
  </div>
</div>`},{id:"portfolio-personal",title:"Personal Portfolio",description:"Personal portfolio with projects and skills.",tags:["portfolio","personal","showcase"],category:"portfolio",html:`<div style="padding:24px">
  <div class="text-center mb-5">
    <div class="mb-3" style="width:80px;height:80px;border-radius:50%;background:var(--muted);margin:0 auto"></div>
    <h1 class="fs-2xl fw-700 mb-1">Jane Doe</h1>
    <p class="text-muted mb-3">Full-Stack Developer &amp; UI Designer</p>
    <div class="d-flex gap-3 jc-center">
      <button class="btn btn-primary btn-sm">Download CV</button>
      <button class="btn btn-ghost btn-sm">Contact Me</button>
    </div>
  </div>
  <h2 class="fs-xl fw-600 mb-3">Featured Projects</h2>
  <div class="row">
    <div class="col-md-4 mb-4">
      <div class="card"><div style="height:140px;background:var(--muted);border-radius:8px 8px 0 0"></div><div class="p-3"><h3 class="fs-base fw-600 mb-1">Project One</h3><p class="text-muted fs-sm">A full-stack web application built with React and Node.js</p></div></div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card"><div style="height:140px;background:var(--muted);border-radius:8px 8px 0 0"></div><div class="p-3"><h3 class="fs-base fw-600 mb-1">Project Two</h3><p class="text-muted fs-sm">Mobile-first e-commerce platform with payment integration</p></div></div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card"><div style="height:140px;background:var(--muted);border-radius:8px 8px 0 0"></div><div class="p-3"><h3 class="fs-base fw-600 mb-1">Project Three</h3><p class="text-muted fs-sm">Real-time chat application using WebSockets</p></div></div>
    </div>
  </div>
</div>`},{id:"pricing-simple",title:"Simple Pricing",description:"Three-tier pricing table with feature lists.",tags:["pricing","plans","comparison"],category:"pricing",html:`<div style="padding:24px">
  <div class="text-center mb-4">
    <h2 class="fs-2xl fw-700 mb-2">Simple, transparent pricing</h2>
    <p class="text-muted">No hidden fees. No surprises.</p>
  </div>
  <div class="row jc-center">
    <div class="col-md-3 mb-4">
      <div class="card p-4 text-center">
        <h3 class="fs-lg fw-600 mb-1">Starter</h3>
        <div class="fs-3xl fw-700 mb-3">$9<span class="fs-base fw-400 text-muted">/mo</span></div>
        <div class="mb-3"><div class="fs-sm mb-2">Basic features</div><div class="fs-sm mb-2">1 project</div><div class="fs-sm mb-2">5GB storage</div></div>
        <button class="btn btn-outline-primary w-100">Choose Plan</button>
      </div>
    </div>
    <div class="col-md-3 mb-4">
      <div class="card p-4 text-center border-primary">
        <span class="badge badge-primary mb-2">Popular</span>
        <h3 class="fs-lg fw-600 mb-1">Pro</h3>
        <div class="fs-3xl fw-700 mb-3">$29<span class="fs-base fw-400 text-muted">/mo</span></div>
        <div class="mb-3"><div class="fs-sm mb-2">All features</div><div class="fs-sm mb-2">10 projects</div><div class="fs-sm mb-2">50GB storage</div></div>
        <button class="btn btn-primary w-100">Choose Plan</button>
      </div>
    </div>
    <div class="col-md-3 mb-4">
      <div class="card p-4 text-center">
        <h3 class="fs-lg fw-600 mb-1">Enterprise</h3>
        <div class="fs-3xl fw-700 mb-3">$99<span class="fs-base fw-400 text-muted">/mo</span></div>
        <div class="mb-3"><div class="fs-sm mb-2">Everything in Pro</div><div class="fs-sm mb-2">Unlimited projects</div><div class="fs-sm mb-2">1TB storage</div></div>
        <button class="btn btn-outline-primary w-100">Contact Sales</button>
      </div>
    </div>
  </div>
</div>`},{id:"team-grid",title:"Team Grid",description:"Team member cards with photos and roles.",tags:["team","people","grid"],category:"team",html:`<div style="padding:24px">
  <div class="text-center mb-5">
    <h2 class="fs-2xl fw-700 mb-2">Meet our team</h2>
    <p class="text-muted">Talented people behind the product</p>
  </div>
  <div class="row">
    <div class="col-md-3 mb-4 text-center">
      <div style="width:80px;height:80px;border-radius:50%;background:var(--muted);margin:0 auto 12px"></div>
      <h3 class="fs-base fw-600">Alice Johnson</h3>
      <p class="text-muted fs-sm">CEO &amp; Founder</p>
    </div>
    <div class="col-md-3 mb-4 text-center">
      <div style="width:80px;height:80px;border-radius:50%;background:var(--muted);margin:0 auto 12px"></div>
      <h3 class="fs-base fw-600">Bob Smith</h3>
      <p class="text-muted fs-sm">CTO</p>
    </div>
    <div class="col-md-3 mb-4 text-center">
      <div style="width:80px;height:80px;border-radius:50%;background:var(--muted);margin:0 auto 12px"></div>
      <h3 class="fs-base fw-600">Carol White</h3>
      <p class="text-muted fs-sm">Lead Designer</p>
    </div>
    <div class="col-md-3 mb-4 text-center">
      <div style="width:80px;height:80px;border-radius:50%;background:var(--muted);margin:0 auto 12px"></div>
      <h3 class="fs-base fw-600">David Lee</h3>
      <p class="text-muted fs-sm">Lead Developer</p>
    </div>
  </div>
</div>`},{id:"contact-simple",title:"Contact Form",description:"Simple contact form with fields and submit.",tags:["contact","form"],category:"contact",html:`<div class="container" style="padding:24px;max-width:560px">
  <div class="card p-4">
    <h2 class="fs-2xl fw-700 mb-1">Contact us</h2>
    <p class="text-muted fs-sm mb-4">Have a question? We&rsquo;d love to hear from you.</p>
    <form>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label fs-sm fw-500">Name</label>
          <input type="text" class="form-control" placeholder="Your name">
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label fs-sm fw-500">Email</label>
          <input type="email" class="form-control" placeholder="you@example.com">
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label fs-sm fw-500">Subject</label>
        <input type="text" class="form-control" placeholder="Subject">
      </div>
      <div class="mb-3">
        <label class="form-label fs-sm fw-500">Message</label>
        <textarea class="form-control" rows="4" placeholder="Your message..."></textarea>
      </div>
      <button class="btn btn-primary w-100">Send Message</button>
    </form>
  </div>
</div>`},{id:"faq-accordion",title:"FAQ Accordion",description:"Frequently asked questions in accordion style.",tags:["faq","accordion","help"],category:"faq",html:`<div class="container" style="padding:24px;max-width:640px">
  <h2 class="fs-2xl fw-700 mb-4 text-center">Frequently asked questions</h2>
  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header">What is Folkline UI?</div>
      <div class="accordion-body">Folkline UI is a modern utility-first CSS framework that combines the flexibility of Tailwind CSS with the simplicity of Bootstrap-style components.</div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header">How do I install it?</div>
      <div class="accordion-body">Simply add a stylesheet link to your HTML. No build step required. You can also install via npm if you prefer.</div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header">Is it free to use?</div>
      <div class="accordion-body">Yes, Folkline UI is open source and completely free to use, both for personal and commercial projects.</div>
    </div>
  </div>
</div>`},{id:"features-grid",title:"Features Grid",description:"3-column features grid with icons.",tags:["features","grid","showcase"],category:"features",html:`<div style="padding:24px">
  <div class="text-center mb-5">
    <h2 class="fs-2xl fw-700 mb-2">Everything you need</h2>
    <p class="text-muted">Powerful features to help you build better products</p>
  </div>
  <div class="row">
    <div class="col-md-4 mb-4">
      <div class="card p-4 h-100">
        <div class="fs-2xl mb-3">&#9889;</div>
        <h3 class="fs-base fw-600 mb-2">Lightning Fast</h3>
        <p class="text-muted fs-sm">Optimized for performance with minimal CSS footprint.</p>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card p-4 h-100">
        <div class="fs-2xl mb-3">&#128274;</div>
        <h3 class="fs-base fw-600 mb-2">Secure by Default</h3>
        <p class="text-muted fs-sm">Built with security best practices out of the box.</p>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card p-4 h-100">
        <div class="fs-2xl mb-3">&#128200;</div>
        <h3 class="fs-base fw-600 mb-2">Analytics Ready</h3>
        <p class="text-muted fs-sm">Built-in analytics support for tracking user behavior.</p>
      </div>
    </div>
  </div>
</div>`},{id:"hero-centered",title:"Centered Hero",description:"Centered hero section with headline and CTA.",tags:["hero","header","centered"],category:"hero",html:`<div style="padding:48px 24px;text-align:center">
  <span class="badge badge-primary badge-pill mb-3">Now in Public Beta</span>
  <h1 class="fs-4xl fw-800 mb-3" style="max-width:640px;margin:0 auto 16px;letter-spacing:-.03em">Build the future with Folkline UI</h1>
  <p class="text-muted fs-lg mb-4" style="max-width:500px;margin:0 auto 24px">A modern utility-first CSS framework that makes building beautiful interfaces fast and enjoyable.</p>
  <div class="d-flex gap-3 jc-center">
    <button class="btn btn-primary btn-lg">Get Started</button>
    <button class="btn btn-ghost btn-lg">Learn More &rarr;</button>
  </div>
</div>`},{id:"hero-split",title:"Split Hero",description:"Split layout hero with text on left and image placeholder on right.",tags:["hero","split","layout"],category:"hero",html:`<div class="container" style="padding:24px">
  <div class="row ai-center">
    <div class="col-md-6 mb-4">
      <h1 class="fs-3xl fw-800 mb-3" style="letter-spacing:-.02em">Design &amp; build faster</h1>
      <p class="text-muted fs-lg mb-4">Create stunning interfaces with utility classes and pre-built components.</p>
      <div class="d-flex gap-3">
        <button class="btn btn-primary">Start Building</button>
        <button class="btn btn-ghost">View Docs</button>
      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div style="width:100%;height:300px;background:var(--muted);border-radius:12px"></div>
    </div>
  </div>
</div>`},{id:"stats-simple",title:"Stats Section",description:"Row of statistics with numbers and labels.",tags:["stats","metrics","numbers"],category:"stats",html:`<div class="container" style="padding:24px;text-align:center">
  <div class="row jc-center">
    <div class="col-md-3 mb-4">
      <div class="fs-4xl fw-800">10K+</div>
      <div class="text-muted fs-sm">Users</div>
    </div>
    <div class="col-md-3 mb-4">
      <div class="fs-4xl fw-800">50K+</div>
      <div class="text-muted fs-sm">Downloads</div>
    </div>
    <div class="col-md-3 mb-4">
      <div class="fs-4xl fw-800">99.9%</div>
      <div class="text-muted fs-sm">Uptime</div>
    </div>
  </div>
</div>`},{id:"cta-simple",title:"Call to Action",description:"Simple CTA banner with text and button.",tags:["cta","banner","call-to-action"],category:"cta",html:`<div class="container" style="padding:24px">
  <div class="card p-5 text-center" style="background:var(--primary);color:var(--primary-foreground);border:none">
    <h2 class="fs-2xl fw-700 mb-2">Ready to get started?</h2>
    <p class="mb-4" style="opacity:.9">Join thousands of happy users and start building today.</p>
    <div class="d-flex gap-3 jc-center">
      <button class="btn btn-lg" style="background:var(--primary-foreground);color:var(--primary)">Get Started Free</button>
      <button class="btn btn-ghost btn-lg" style="color:var(--primary-foreground);border-color:rgba(255,255,255,.3)">Contact Sales</button>
    </div>
  </div>
</div>`},{id:"error-404",title:"404 Error Page",description:"404 page with illustration and home button.",tags:["error","404","not-found"],category:"error",html:`<div style="padding:48px 24px;text-align:center;min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center">
  <div class="fs-5xl fw-800 mb-3" style="font-size:6rem;line-height:1;letter-spacing:-.04em">404</div>
  <h1 class="fs-2xl fw-700 mb-2">Page not found</h1>
  <p class="text-muted mb-4" style="max-width:400px">Sorry, the page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.</p>
  <a href="#" class="btn btn-primary">Back to Home</a>
</div>`},{id:"error-500",title:"500 Error Page",description:"Server error page with retry option.",tags:["error","500","server"],category:"error",html:`<div style="padding:48px 24px;text-align:center;min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center">
  <div class="fs-5xl fw-800 mb-3" style="font-size:6rem;line-height:1;letter-spacing:-.04em;color:var(--destructive)">500</div>
  <h1 class="fs-2xl fw-700 mb-2">Server Error</h1>
  <p class="text-muted mb-4" style="max-width:400px">Something went wrong on our end. Please try again later.</p>
  <button class="btn btn-primary">Try Again</button>
</div>`},{id:"navbar-simple",title:"Simple Navbar",description:"Simple navigation bar with brand and links.",tags:["nav","navbar","header"],category:"nav",html:`<nav class="d-flex ai-center jc-between" style="padding:12px 24px;border-bottom:1px solid var(--border)">
  <div class="fs-lg fw-700" style="letter-spacing:-.02em">Brand</div>
  <div class="d-flex gap-4 ai-center">
    <a href="#" class="text-muted td-none fs-sm">Home</a>
    <a href="#" class="text-muted td-none fs-sm">Features</a>
    <a href="#" class="text-muted td-none fs-sm">Pricing</a>
    <a href="#" class="text-muted td-none fs-sm">About</a>
  </div>
  <div class="d-flex gap-2">
    <button class="btn btn-ghost btn-sm">Log In</button>
    <button class="btn btn-primary btn-sm">Sign Up</button>
  </div>
</nav>`},{id:"testimonials-grid",title:"Testimonials Grid",description:"Customer testimonial cards with quotes and avatars.",tags:["testimonials","reviews","social-proof"],category:"testimonials",html:`<div class="container" style="padding:24px">
  <div class="text-center mb-5">
    <h2 class="fs-2xl fw-700 mb-2">What our customers say</h2>
    <p class="text-muted">Trusted by thousands of teams worldwide</p>
  </div>
  <div class="row">
    <div class="col-md-4 mb-4">
      <div class="card p-4">
        <div class="d-flex gap-3 ai-center mb-3">
          <div style="width:40px;height:40px;border-radius:50%;background:var(--muted)"></div>
          <div><div class="fw-600 fs-sm">Sarah Johnson</div><div class="text-muted fs-sm">CTO, TechCorp</div></div>
        </div>
        <p class="text-muted fs-sm">"Folkline UI transformed our workflow. The utility classes are intuitive and the components look great."</p>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card p-4">
        <div class="d-flex gap-3 ai-center mb-3">
          <div style="width:40px;height:40px;border-radius:50%;background:var(--muted)"></div>
          <div><div class="fw-600 fs-sm">Michael Chen</div><div class="text-muted fs-sm">Lead Developer, StartupX</div></div>
        </div>
        <p class="text-muted fs-sm">"The best CSS framework I've used. It's like Tailwind but simpler to get started with."</p>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card p-4">
        <div class="d-flex gap-3 ai-center mb-3">
          <div style="width:40px;height:40px;border-radius:50%;background:var(--muted)"></div>
          <div><div class="fw-600 fs-sm">Emily Davis</div><div class="text-muted fs-sm">Designer, AgencyPro</div></div>
        </div>
        <p class="text-muted fs-sm">"Beautiful out of the box. I can prototype designs in minutes instead of hours."</p>
      </div>
    </div>
  </div>
</div>`},{id:"sidebar-layout",title:"Sidebar Layout",description:"Dashboard layout with sidebar navigation.",tags:["layout","sidebar","dashboard"],category:"dashboard",html:`<div class="d-flex" style="min-height:400px;">
  <div class="d-flex flex-col gap-2 p-3" style="width:200px;border-right:1px solid var(--border);background:var(--sidebar)">
    <div class="fw-700 fs-sm mb-3" style="letter-spacing:-.02em">Dashboard</div>
    <a href="#" class="text-muted td-none fs-sm">Overview</a>
    <a href="#" class="text-muted td-none fs-sm">Analytics</a>
    <a href="#" class="text-muted td-none fs-sm">Orders</a>
    <a href="#" class="text-muted td-none fs-sm">Customers</a>
    <a href="#" class="text-muted td-none fs-sm">Settings</a>
  </div>
  <div class="flex-1 p-4">
    <h2 class="fs-xl fw-600 mb-3">Overview</h2>
    <div class="row">
      <div class="col-md-4 mb-3"><div class="card p-3"><div class="text-muted fs-sm">Revenue</div><div class="fs-2xl fw-700">$12,450</div></div></div>
      <div class="col-md-4 mb-3"><div class="card p-3"><div class="text-muted fs-sm">Users</div><div class="fs-2xl fw-700">1,284</div></div></div>
      <div class="col-md-4 mb-3"><div class="card p-3"><div class="text-muted fs-sm">Orders</div><div class="fs-2xl fw-700">348</div></div></div>
    </div>
  </div>
</div>`},{id:"footer-simple",title:"Simple Footer",description:"Multi-column footer with links and copyright.",tags:["footer","links"],category:"footer",html:`<footer style="padding:32px 24px;border-top:1px solid var(--border)">
  <div class="row mb-4">
    <div class="col-md-4 mb-4">
      <div class="fw-700 mb-2">Brand</div>
      <p class="text-muted fs-sm">Building the future of web development with modern tools and frameworks.</p>
    </div>
    <div class="col-md-2 mb-4">
      <div class="fw-600 fs-sm mb-2">Product</div>
      <div class="d-flex flex-col gap-1"><a href="#" class="text-muted td-none fs-sm">Features</a><a href="#" class="text-muted td-none fs-sm">Pricing</a><a href="#" class="text-muted td-none fs-sm">Docs</a></div>
    </div>
    <div class="col-md-2 mb-4">
      <div class="fw-600 fs-sm mb-2">Company</div>
      <div class="d-flex flex-col gap-1"><a href="#" class="text-muted td-none fs-sm">About</a><a href="#" class="text-muted td-none fs-sm">Blog</a><a href="#" class="text-muted td-none fs-sm">Careers</a></div>
    </div>
    <div class="col-md-2 mb-4">
      <div class="fw-600 fs-sm mb-2">Legal</div>
      <div class="d-flex flex-col gap-1"><a href="#" class="text-muted td-none fs-sm">Privacy</a><a href="#" class="text-muted td-none fs-sm">Terms</a></div>
    </div>
  </div>
  <div class="text-center pt-3 border-top"><span class="text-muted fs-sm">&copy; 2026 Brand, Inc. All rights reserved.</span></div>
</footer>`},{id:"coming-soon",title:"Coming Soon",description:"Coming soon/under construction page with countdown.",tags:["coming-soon","launch","countdown"],category:"error",html:`<div style="padding:48px 24px;text-align:center;min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center">
  <span class="badge badge-primary badge-pill mb-4">Coming Soon</span>
  <h1 class="fs-4xl fw-800 mb-3" style="letter-spacing:-.03em">Something amazing is coming</h1>
  <p class="text-muted fs-lg mb-5" style="max-width:480px">We&rsquo;re working hard to bring you something special. Stay tuned!</p>
  <div class="d-flex gap-4 mb-5">
    <div class="text-center"><div class="fs-3xl fw-800">14</div><div class="text-muted fs-sm">Days</div></div>
    <div class="text-center"><div class="fs-3xl fw-800">08</div><div class="text-muted fs-sm">Hours</div></div>
    <div class="text-center"><div class="fs-3xl fw-800">42</div><div class="text-muted fs-sm">Mins</div></div>
    <div class="text-center"><div class="fs-3xl fw-800">16</div><div class="text-muted fs-sm">Secs</div></div>
  </div>
  <div class="d-flex gap-2" style="max-width:400px;width:100%">
    <input class="form-control" placeholder="Enter your email">
    <button class="btn btn-primary">Notify Me</button>
  </div>
</div>`},{id:"maintenance-mode",title:"Maintenance Mode",description:"Maintenance page with progress indicator.",tags:["maintenance","status"],category:"error",html:`<div style="padding:48px 24px;text-align:center;min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center">
  <div class="fs-5xl mb-4">&#128295;</div>
  <h1 class="fs-2xl fw-700 mb-2">Under Maintenance</h1>
  <p class="text-muted mb-4" style="max-width:400px">We&rsquo;re performing scheduled maintenance. We&rsquo;ll be back shortly.</p>
  <div class="progress" style="max-width:300px;width:100%;margin-bottom:16px"><div class="progress-bar progress-bar-striped progress-bar-animated" style="width:65%">65%</div></div>
  <p class="text-muted fs-sm">Estimated completion: 30 minutes</p>
</div>`},{id:"search-results",title:"Search Results",description:"Search results page with results listing.",tags:["search","results","listing"],category:"search",html:`<div class="container" style="padding:24px;max-width:640px">
  <div class="mb-4">
    <input class="form-control form-control-lg" placeholder="Search..." value="folkline ui">
  </div>
  <div class="text-muted fs-sm mb-4">Showing 3 results for "folkline ui"</div>
  <div class="mb-4">
    <a href="#" class="fs-lg fw-500 td-none d-block mb-1">Folkline UI Documentation</a>
    <div class="text-muted fs-sm">Learn how to use Folkline UI with our comprehensive documentation.</div>
  </div>
  <div class="mb-4">
    <a href="#" class="fs-lg fw-500 td-none d-block mb-1">Getting Started Guide</a>
    <div class="text-muted fs-sm">Quick start guide for setting up Folkline UI in your project.</div>
  </div>
  <div class="mb-4">
    <a href="#" class="fs-lg fw-500 td-none d-block mb-1">Component Examples</a>
    <div class="text-muted fs-sm">Browse all available components with live examples.</div>
  </div>
</div>`},{id:"empty-state",title:"Empty State",description:"Empty state with illustration and action button.",tags:["empty","state","no-data"],category:"empty",html:`<div style="padding:48px 24px;text-align:center;min-height:40vh;display:flex;flex-direction:column;align-items:center;justify-content:center">
  <div class="fs-5xl mb-4">&#128196;</div>
  <h2 class="fs-xl fw-600 mb-2">No projects yet</h2>
  <p class="text-muted mb-4" style="max-width:360px">Get started by creating your first project. It only takes a few seconds.</p>
  <button class="btn btn-primary">Create Project</button>
</div>`},{id:"loading-state",title:"Loading State",description:"Loading/skeleton state for content placeholders.",tags:["loading","skeleton","placeholder"],category:"loading",html:`<div style="padding:24px">
  <div class="d-flex gap-3 ai-center mb-4">
    <div style="width:40px;height:40px;border-radius:50%;background:var(--muted);animation:pulse 2s infinite"></div>
    <div class="flex-1"><div style="height:12px;width:60%;background:var(--muted);border-radius:4px;margin-bottom:6px;animation:pulse 2s infinite"></div><div style="height:10px;width:40%;background:var(--muted);border-radius:4px;animation:pulse 2s infinite"></div></div>
  </div>
  <div style="height:200px;background:var(--muted);border-radius:8px;margin-bottom:16px;animation:pulse 2s infinite"></div>
  <div style="height:12px;width:100%;background:var(--muted);border-radius:4px;margin-bottom:8px;animation:pulse 2s infinite"></div>
  <div style="height:12px;width:80%;background:var(--muted);border-radius:4px;margin-bottom:8px;animation:pulse 2s infinite"></div>
  <div style="height:12px;width:60%;background:var(--muted);border-radius:4px;animation:pulse 2s infinite"></div>
  <style>@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}</style>
</div>`},{id:"notification-toast",title:"Notification Toast",description:"Toast notification examples (success, error, info).",tags:["notification","toast","alert"],category:"notification",html:`<div style="padding:24px;display:flex;flex-direction:column;gap:12px;max-width:360px">
  <div class="d-flex ai-center gap-3 p-3" style="border:1px solid var(--border);border-radius:8px;background:var(--card);box-shadow:0 4px 12px rgba(0,0,0,.1)">
    <span style="color:var(--success);font-size:1.25rem">&#10003;</span>
    <div class="flex-1"><div class="fw-600 fs-sm">Success!</div><div class="text-muted fs-sm">Your changes have been saved.</div></div>
    <button style="background:none;border:none;cursor:pointer;color:var(--muted-foreground)">&#10005;</button>
  </div>
  <div class="d-flex ai-center gap-3 p-3" style="border:1px solid var(--border);border-radius:8px;background:var(--card);box-shadow:0 4px 12px rgba(0,0,0,.1)">
    <span style="color:var(--destructive);font-size:1.25rem">&#9888;</span>
    <div class="flex-1"><div class="fw-600 fs-sm">Error</div><div class="text-muted fs-sm">Something went wrong. Try again.</div></div>
    <button style="background:none;border:none;cursor:pointer;color:var(--muted-foreground)">&#10005;</button>
  </div>
  <div class="d-flex ai-center gap-3 p-3" style="border:1px solid var(--border);border-radius:8px;background:var(--card);box-shadow:0 4px 12px rgba(0,0,0,.1)">
    <span style="color:var(--primary);font-size:1.25rem">&#8505;</span>
    <div class="flex-1"><div class="fw-600 fs-sm">Info</div><div class="text-muted fs-sm">A new update is available.</div></div>
    <button style="background:none;border:none;cursor:pointer;color:var(--muted-foreground)">&#10005;</button>
  </div>
</div>`},{id:"profile-card",title:"Profile Card",description:"User profile card with avatar and stats.",tags:["profile","card","user"],category:"profile",html:`<div class="d-flex jc-center" style="padding:24px">
  <div class="card p-4 text-center" style="max-width:320px;width:100%">
    <div style="width:80px;height:80px;border-radius:50%;background:var(--muted);margin:0 auto 12px"></div>
    <h3 class="fs-lg fw-600 mb-1">Alex Morgan</h3>
    <p class="text-muted fs-sm mb-3">Product Designer</p>
    <p class="text-muted fs-sm mb-4">Passionate about creating intuitive user experiences.</p>
    <div class="d-flex gap-3 jc-center mb-4">
      <div class="text-center"><div class="fw-700">248</div><div class="text-muted fs-sm">Posts</div></div>
      <div class="text-center"><div class="fw-700">12.4K</div><div class="text-muted fs-sm">Followers</div></div>
      <div class="text-center"><div class="fw-700">584</div><div class="text-muted fs-sm">Following</div></div>
    </div>
    <button class="btn btn-primary w-100">Follow</button>
  </div>
</div>`},{id:"comment-thread",title:"Comment Thread",description:"Comment section with replies and input.",tags:["comment","discussion","thread"],category:"comment",html:`<div style="padding:24px;max-width:560px">
  <h3 class="fs-lg fw-600 mb-4">Comments (3)</h3>
  <div class="d-flex gap-3 mb-4">
    <div style="width:32px;height:32px;border-radius:50%;background:var(--muted);flex-shrink:0"></div>
    <div><div class="fw-600 fs-sm mb-1">Jane Smith</div><p class="text-muted fs-sm mb-1">Great article! Really helpful for getting started.</p><span class="text-muted fs-xs">2 hours ago &middot; Reply</span></div>
  </div>
  <div class="d-flex gap-3 mb-4" style="margin-left:40px">
    <div style="width:32px;height:32px;border-radius:50%;background:var(--muted);flex-shrink:0"></div>
    <div><div class="fw-600 fs-sm mb-1">John Doe</div><p class="text-muted fs-sm mb-1">Thanks Jane! Glad you found it useful.</p><span class="text-muted fs-xs">1 hour ago &middot; Reply</span></div>
  </div>
  <div class="d-flex gap-3">
    <div style="width:32px;height:32px;border-radius:50%;background:var(--muted);flex-shrink:0"></div>
    <div style="flex:1"><textarea class="form-control" rows="2" placeholder="Add a comment..."></textarea></div>
  </div>
</div>`},{id:"breadcrumb-nav",title:"Breadcrumb Navigation",description:"Breadcrumb trail for page navigation.",tags:["breadcrumb","nav","navigation"],category:"nav",html:`<div class="d-flex gap-2 ai-center fs-sm" style="padding:16px 24px">
  <a href="#" class="text-muted td-none">Home</a>
  <span class="text-muted">/</span>
  <a href="#" class="text-muted td-none">Products</a>
  <span class="text-muted">/</span>
  <a href="#" class="text-muted td-none">Electronics</a>
  <span class="text-muted">/</span>
  <span class="fw-500">Headphones</span>
</div>`},{id:"pagination-nav",title:"Pagination",description:"Page navigation with numbered pages.",tags:["pagination","nav","pages"],category:"nav",html:`<nav class="d-flex gap-1 jc-center" style="padding:16px">
  <button class="btn btn-ghost btn-sm">&laquo; Prev</button>
  <button class="btn btn-primary btn-sm">1</button>
  <button class="btn btn-ghost btn-sm">2</button>
  <button class="btn btn-ghost btn-sm">3</button>
  <button class="btn btn-ghost btn-sm">...</button>
  <button class="btn btn-ghost btn-sm">10</button>
  <button class="btn btn-ghost btn-sm">Next &raquo;</button>
</nav>`},{id:"tag-cloud",title:"Tag Cloud",description:"Group of tags/badges in a cloud layout.",tags:["tags","cloud","badges"],category:"tags",html:`<div style="padding:24px">
  <h3 class="fs-sm fw-600 mb-3">Popular Tags</h3>
  <div class="d-flex flex-wrap gap-2">
    <span class="badge badge-primary">javascript</span>
    <span class="badge badge-primary">react</span>
    <span class="badge badge-primary">css</span>
    <span class="badge badge-primary">design</span>
    <span class="badge badge-primary">tutorial</span>
    <span class="badge badge-primary">webdev</span>
    <span class="badge badge-primary">typescript</span>
    <span class="badge badge-primary">nodejs</span>
    <span class="badge badge-primary">python</span>
    <span class="badge badge-primary">api</span>
  </div>
</div>`},{id:"social-share",title:"Social Share",description:"Social media share buttons row.",tags:["social","share","buttons"],category:"social",html:`<div style="padding:24px">
  <h3 class="fs-sm fw-600 mb-3">Share this article</h3>
  <div class="d-flex gap-2">
    <button class="btn btn-sm" style="background:#1877f2;color:#fff">Facebook</button>
    <button class="btn btn-sm" style="background:#1da1f2;color:#fff">Twitter</button>
    <button class="btn btn-sm" style="background:#0a66c2;color:#fff">LinkedIn</button>
    <button class="btn btn-sm" style="background:#e4405f;color:#fff">Instagram</button>
    <button class="btn btn-sm" style="background:#ff4500;color:#fff">Reddit</button>
  </div>
</div>`},{id:"data-table",title:"Data Table",description:"Full-width data table with striped rows.",tags:["table","data","grid"],category:"table",html:`<div style="padding:24px">
  <div class="table-responsive">
    <table class="table table-striped table-hover">
      <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td>Alice Johnson</td><td>alice@example.com</td><td>Admin</td><td><span class="badge badge-success">Active</span></td></tr>
        <tr><td>Bob Smith</td><td>bob@example.com</td><td>Editor</td><td><span class="badge badge-success">Active</span></td></tr>
        <tr><td>Carol White</td><td>carol@example.com</td><td>Viewer</td><td><span class="badge badge-warning">Pending</span></td></tr>
        <tr><td>David Lee</td><td>david@example.com</td><td>Editor</td><td><span class="badge badge-danger">Inactive</span></td></tr>
      </tbody>
    </table>
  </div>
</div>`},{id:"timeline",title:"Timeline",description:"Vertical timeline with events and dates.",tags:["timeline","history","events"],category:"timeline",html:`<div style="padding:24px;max-width:480px">
  <div class="d-flex gap-3 mb-4">
    <div class="d-flex flex-col ai-center" style="width:2px;background:var(--border);position:relative">
      <div style="width:12px;height:12px;border-radius:50%;background:var(--primary);position:absolute;top:4px;left:-5px"></div>
    </div>
    <div style="padding-left:16px"><div class="fw-600 fs-sm">Project Launch</div><div class="text-muted fs-sm">Jan 2026</div><p class="text-muted fs-sm mt-1">Successfully launched v1.0 of the product.</p></div>
  </div>
  <div class="d-flex gap-3 mb-4">
    <div class="d-flex flex-col ai-center" style="width:2px;background:var(--border);position:relative">
      <div style="width:12px;height:12px;border-radius:50%;background:var(--muted-foreground);position:absolute;top:4px;left:-5px"></div>
    </div>
    <div style="padding-left:16px"><div class="fw-600 fs-sm">Beta Release</div><div class="text-muted fs-sm">Nov 2025</div><p class="text-muted fs-sm mt-1">Opened beta to 1,000 testers.</p></div>
  </div>
  <div class="d-flex gap-3">
    <div class="d-flex flex-col ai-center" style="width:2px;background:var(--border);position:relative">
      <div style="width:12px;height:12px;border-radius:50%;background:var(--muted-foreground);position:absolute;top:4px;left:-5px"></div>
    </div>
    <div style="padding-left:16px"><div class="fw-600 fs-sm">Idea Conception</div><div class="text-muted fs-sm">Aug 2025</div><p class="text-muted fs-sm mt-1">The initial idea was born.</p></div>
  </div>
</div>`},{id:"invoice-card",title:"Invoice Card",description:"Invoice summary card with line items and total.",tags:["invoice","receipt","billing"],category:"invoice",html:`<div class="card" style="padding:24px;max-width:480px;margin:24px">
  <div class="d-flex jc-between ai-center mb-4">
    <div class="fw-700 fs-lg">Invoice</div>
    <div class="text-muted fs-sm">#INV-2026-0042</div>
  </div>
  <div class="d-flex jc-between mb-2 fs-sm"><span class="text-muted">Website Design</span><span>$1,200</span></div>
  <div class="d-flex jc-between mb-2 fs-sm"><span class="text-muted">Development</span><span>$3,500</span></div>
  <div class="d-flex jc-between mb-2 fs-sm"><span class="text-muted">Hosting (1 year)</span><span>$240</span></div>
  <hr style="border-color:var(--border);margin:12px 0">
  <div class="d-flex jc-between fw-700 fs-lg"><span>Total</span><span>$4,940</span></div>
  <hr style="border-color:var(--border);margin:12px 0">
  <div class="text-muted fs-xs">Payment due within 30 days</div>
</div>`},{id:"stats-cards",title:"Stats Cards Row",description:"Row of statistics in cards with icons.",tags:["stats","cards","metrics"],category:"stats",html:`<div style="padding:24px">
  <div class="row">
    <div class="col-md-3 mb-3"><div class="card p-3"><div class="text-muted fs-sm mb-1">Revenue</div><div class="fs-2xl fw-700">$45.2K</div><div class="text-success fs-sm">+12.5%</div></div></div>
    <div class="col-md-3 mb-3"><div class="card p-3"><div class="text-muted fs-sm mb-1">Users</div><div class="fs-2xl fw-700">2,847</div><div class="text-success fs-sm">+8.3%</div></div></div>
    <div class="col-md-3 mb-3"><div class="card p-3"><div class="text-muted fs-sm mb-1">Orders</div><div class="fs-2xl fw-700">1,429</div><div class="text-success fs-sm">+5.7%</div></div></div>
    <div class="col-md-3 mb-3"><div class="card p-3"><div class="text-muted fs-sm mb-1">Conversion</div><div class="fs-2xl fw-700">3.24%</div><div class="text-success fs-sm">+1.2%</div></div></div>
  </div>
</div>`},{id:"nested-comments",title:"Nested Comments",description:"Nested comment thread with replies.",tags:["comment","nested","discussion"],category:"comment",html:`<div style="padding:24px;max-width:480px">
  <div class="d-flex gap-2 mb-3">
    <div style="width:28px;height:28px;border-radius:50%;background:var(--muted);flex-shrink:0"></div>
    <div><div class="fw-600 fs-sm">Alice</div><p class="text-muted fs-sm">This is really helpful, thanks!</p></div>
  </div>
  <div class="d-flex gap-2 mb-3" style="margin-left:36px">
    <div style="width:28px;height:28px;border-radius:50%;background:var(--muted);flex-shrink:0"></div>
    <div><div class="fw-600 fs-sm">Bob</div><p class="text-muted fs-sm">Glad you found it useful!</p></div>
  </div>
  <div class="d-flex gap-2 mb-3" style="margin-left:72px">
    <div style="width:28px;height:28px;border-radius:50%;background:var(--muted);flex-shrink:0"></div>
    <div><div class="fw-600 fs-sm">Charlie</div><p class="text-muted fs-sm">+1, great content.</p></div>
  </div>
  <div class="d-flex gap-2" style="margin-left:36px">
    <div style="width:28px;height:28px;border-radius:50%;background:var(--muted);flex-shrink:0"></div>
    <div><div class="fw-600 fs-sm">Diana</div><p class="text-muted fs-sm">I agree with Alice!</p></div>
  </div>
</div>`},{id:"notification-bell",title:"Notification Bell",description:"Notification bell icon with badge count and dropdown.",tags:["notification","bell","badge"],category:"notification",html:`<div style="padding:24px;display:flex;justify-content:center">
  <div style="position:relative">
    <button class="icon-btn" style="font-size:1.5rem">&#128276;</button>
    <span style="position:absolute;top:-4px;right:-4px;background:var(--destructive);color:#fff;font-size:.6875rem;border-radius:50%;width:18px;height:18px;display:flex;align-items:center;justify-content:center;font-weight:600">3</span>
  </div>
</div>`},{id:"file-upload",title:"File Upload Zone",description:"Drag and drop file upload area.",tags:["upload","file","drag-drop"],category:"upload",html:`<div style="padding:24px">
  <div class="card p-5 text-center" style="border:2px dashed var(--border)">
    <div class="fs-3xl mb-3">&#128206;</div>
    <h3 class="fs-base fw-600 mb-2">Drop files here</h3>
    <p class="text-muted fs-sm mb-3">or click to browse files</p>
    <button class="btn btn-primary btn-sm">Browse Files</button>
    <p class="text-muted fs-xs mt-3">Max file size: 10MB</p>
  </div>
</div>`},{id:"color-palette",title:"Color Palette",description:"Color swatch grid with hex values.",tags:["color","palette","design"],category:"design",html:`<div style="padding:24px">
  <h3 class="fs-sm fw-600 mb-3">Color Palette</h3>
  <div class="d-flex flex-wrap gap-3">
    <div class="text-center"><div style="width:60px;height:60px;border-radius:8px;background:#3b82f6;border:1px solid var(--border)"></div><div class="fs-xs text-muted mt-1">Primary</div></div>
    <div class="text-center"><div style="width:60px;height:60px;border-radius:8px;background:#10b981;border:1px solid var(--border)"></div><div class="fs-xs text-muted mt-1">Success</div></div>
    <div class="text-center"><div style="width:60px;height:60px;border-radius:8px;background:#ef4444;border:1px solid var(--border)"></div><div class="fs-xs text-muted mt-1">Danger</div></div>
    <div class="text-center"><div style="width:60px;height:60px;border-radius:8px;background:#f59e0b;border:1px solid var(--border)"></div><div class="fs-xs text-muted mt-1">Warning</div></div>
    <div class="text-center"><div style="width:60px;height:60px;border-radius:8px;background:#6366f1;border:1px solid var(--border)"></div><div class="fs-xs text-muted mt-1">Indigo</div></div>
    <div class="text-center"><div style="width:60px;height:60px;border-radius:8px;background:#ec4899;border:1px solid var(--border)"></div><div class="fs-xs text-muted mt-1">Pink</div></div>
  </div>
</div>`},{id:"activity-feed",title:"Activity Feed",description:"Activity feed list with icons and timestamps.",tags:["activity","feed","log"],category:"activity",html:`<div style="padding:24px;max-width:480px">
  <h3 class="fs-sm fw-600 mb-3">Recent Activity</h3>
  <div class="d-flex gap-3 mb-3">
    <div style="width:8px;height:8px;border-radius:50%;background:var(--success);margin-top:6px;flex-shrink:0"></div>
    <div><div class="fs-sm">Project deployed successfully</div><div class="text-muted fs-xs">2 minutes ago</div></div>
  </div>
  <div class="d-flex gap-3 mb-3">
    <div style="width:8px;height:8px;border-radius:50%;background:var(--primary);margin-top:6px;flex-shrink:0"></div>
    <div><div class="fs-sm">New user registered</div><div class="text-muted fs-xs">15 minutes ago</div></div>
  </div>
  <div class="d-flex gap-3 mb-3">
    <div style="width:8px;height:8px;border-radius:50%;background:var(--warning);margin-top:6px;flex-shrink:0"></div>
    <div><div class="fs-sm">Payment received</div><div class="text-muted fs-xs">1 hour ago</div></div>
  </div>
  <div class="d-flex gap-3">
    <div style="width:8px;height:8px;border-radius:50%;background:var(--muted-foreground);margin-top:6px;flex-shrink:0"></div>
    <div><div class="fs-sm">Backup completed</div><div class="text-muted fs-xs">3 hours ago</div></div>
  </div>
</div>`},{id:"tooltip-demo",title:"Tooltip Demo",description:"Tooltip examples on hover.",tags:["tooltip","hover","ui"],category:"tooltip",html:`<div style="padding:48px 24px;display:flex;gap:24px;justify-content:center">
  <div class="tooltip tooltip-top" data-tip="Top tooltip" style="padding:8px 16px;background:var(--muted);border-radius:6px;cursor:pointer">Hover top</div>
  <div class="tooltip tooltip-bottom" data-tip="Bottom tooltip" style="padding:8px 16px;background:var(--muted);border-radius:6px;cursor:pointer">Hover bottom</div>
  <div class="tooltip tooltip-left" data-tip="Left tooltip" style="padding:8px 16px;background:var(--muted);border-radius:6px;cursor:pointer">Hover left</div>
  <div class="tooltip tooltip-right" data-tip="Right tooltip" style="padding:8px 16px;background:var(--muted);border-radius:6px;cursor:pointer">Hover right</div>
</div>`}],bm=[...new Set(ds.map(e=>e.category))];function km(){const e=Ts(),[t,n]=P.useState("all"),[r,s]=P.useState(""),i=P.useMemo(()=>ds.filter(l=>{const a=t==="all"||l.category===t,o=!r||l.title.toLowerCase().includes(r.toLowerCase())||l.description.toLowerCase().includes(r.toLowerCase())||l.tags.some(d=>d.toLowerCase().includes(r.toLowerCase()));return a&&o}),[t,r]);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"templates-header",children:[c.jsx("h1",{children:"Templates"}),c.jsx("p",{children:"Pre-built HTML templates for common UI patterns. Browse, copy, and customize."}),c.jsxs("div",{style:{fontSize:".8125rem",color:"var(--muted-foreground)",marginBottom:16},children:[ds.length," templates available"]})]}),c.jsxs("div",{className:"template-search",children:[c.jsx("span",{className:"search-icon",children:c.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"11",cy:"11",r:"8"}),c.jsx("path",{d:"m21 21-4.35-4.35"})]})}),c.jsx("input",{placeholder:"Search templates...",value:r,onChange:l=>s(l.target.value)})]}),c.jsxs("div",{className:"template-filters",children:[c.jsx("button",{className:t==="all"?"active":"",onClick:()=>n("all"),children:"All"}),bm.map(l=>c.jsx("button",{className:t===l?"active":"",onClick:()=>n(l),children:l.charAt(0).toUpperCase()+l.slice(1)},l))]}),c.jsx("div",{className:"template-grid",children:i.map(l=>c.jsxs("div",{className:"template-card",onClick:()=>e(`/template/${l.id}`),children:[c.jsx("div",{className:"preview",children:c.jsx("div",{style:{transform:"scale(.35)",transformOrigin:"top left",width:"290%",height:"290%",position:"absolute",top:0,left:0,pointerEvents:"none",opacity:.7},dangerouslySetInnerHTML:{__html:l.html}})}),c.jsxs("div",{className:"info",children:[c.jsx("h3",{children:l.title}),c.jsx("p",{children:l.description}),c.jsx("div",{className:"tags",children:l.tags.slice(0,3).map(a=>c.jsx("span",{children:a},a))})]})]},l.id))})]})}function Sm(){const{id:e}=Jp(),t=Ts(),n=ds.find(r=>r.id===e);return n?c.jsxs("div",{className:"template-view",children:[c.jsx("div",{className:"back",onClick:()=>t("/templates"),style:{cursor:"pointer"},children:"← Back to Templates"}),c.jsxs("div",{className:"header",children:[c.jsx("h1",{children:n.title}),c.jsx("p",{children:n.description}),c.jsx("div",{className:"tags",style:{marginTop:8},children:n.tags.map(r=>c.jsx("span",{style:{background:"var(--muted)",color:"var(--muted-foreground)",borderRadius:4,padding:"2px 8px",fontSize:".6875rem",fontWeight:500,marginRight:4},children:r},r))})]}),c.jsxs("div",{className:"template-actions",children:[c.jsx("button",{className:"btn-action primary",onClick:()=>{navigator.clipboard.writeText(n.html)},children:"Copy HTML"}),c.jsx("a",{href:`/folkline-ui-site/editor?template=${n.id}`,className:"btn-action",children:"Open in Editor"})]}),c.jsxs("div",{className:"split",children:[c.jsxs("div",{children:[c.jsx("h3",{style:{fontSize:".875rem",fontWeight:600,marginBottom:8,color:"var(--muted-foreground)"},children:"Preview"}),c.jsx("div",{className:"preview-area",children:c.jsx("div",{dangerouslySetInnerHTML:{__html:n.html}})})]}),c.jsxs("div",{children:[c.jsx("h3",{style:{fontSize:".875rem",fontWeight:600,marginBottom:8,color:"var(--muted-foreground)"},children:"Code"}),c.jsxs("div",{className:"code-area",children:[c.jsx("button",{className:"copy-btn copy-all",onClick:()=>{navigator.clipboard.writeText(n.html)},children:"Copy"}),c.jsx("pre",{children:c.jsx("code",{children:n.html.replace(/</g,"&lt;").replace(/>/g,"&gt;")})})]})]})]})]}):c.jsxs("div",{className:"template-view",children:[c.jsx("div",{className:"back",onClick:()=>t("/templates"),style:{cursor:"pointer"},children:"← Back to Templates"}),c.jsx("div",{className:"header",children:c.jsx("h1",{children:"Template not found"})})]})}const Cm=[{id:"getting-started",title:"Getting Started",content:`
      <p class="desc">Folkline UI is a modern, utility-first CSS framework that combines the flexibility of Tailwind CSS with the simplicity of Bootstrap-style components. It provides a comprehensive set of utility classes and pre-built components for rapid UI development.</p>
      <h3>Key Features</h3>
      <ul style="padding-left:20px;color:var(--muted-foreground);line-height:2">
        <li>500+ utility classes for rapid prototyping</li>
        <li>50+ pre-built components and patterns</li>
        <li>Built-in dark mode support via .dark class</li>
        <li>Responsive utilities with sm:, md:, lg: breakpoints</li>
        <li>Zero build step — works directly from CDN</li>
        <li>CSS custom properties for easy customization</li>
        <li>Modern OKLCH color space for vibrant colors</li>
      </ul>
    `},{id:"installation",title:"Installation",content:`
      <p class="desc">Add Folkline UI to your project with a single stylesheet link. No build tools required.</p>
      <div class="code-wrap"><div class="code-header">HTML</div><pre><code>&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@realtoheed/folkline-ui@3/dist/css/folkline-ui.min.css"&gt;</code></pre></div>
    `},{id:"cdn",title:"CDN Usage",content:`
      <p class="desc">Folkline UI is available via CDN. Just add the stylesheet link to your HTML head.</p>
      <div class="code-wrap"><div class="code-header">CDN Link</div><pre><code>&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@realtoheed/folkline-ui@3/dist/css/folkline-ui.min.css"&gt;</code></pre></div>
      <p class="desc" style="margin-top:12px">Using npm:</p>
      <div class="code-wrap"><div class="code-header">npm</div><pre><code>npm install @realtoheed/folkline-ui</code></pre></div>
    `},{id:"customize",title:"Customization",content:`
      <p class="desc">Customize Folkline UI by overriding CSS custom properties. Add these to your own stylesheet after the framework import.</p>
      <div class="code-wrap"><div class="code-header">CSS Custom Properties</div><pre><code>:root {
  --primary: oklch(54.6% .245 262.881); /* Blue */
  --success: oklch(57.7% .245 143.34);  /* Green */
  --warning: oklch(70% .2 70);           /* Amber */
  --radius: .625rem;                     /* Border radius */
  --font-sans: "Inter", sans-serif;      /* Font family */
}</code></pre></div>
    `},{id:"colors",title:"Colors",content:`
      <p class="desc">Folkline UI uses OKLCH color space for vibrant, perceptually-uniform colors. Semantic color tokens are available as CSS custom properties.</p>
      <h3>Semantic Colors</h3>
      <div class="live-preview" style="gap:16px">
        <div style="flex:1;min-width:80px;text-align:center">
          <div style="height:60px;border-radius:8px;background:var(--primary);border:1px solid var(--border)"></div>
          <div class="fs-xs fw-500 mt-1">Primary</div>
          <div class="text-muted fs-xs">#3b82f6</div>
        </div>
        <div style="flex:1;min-width:80px;text-align:center">
          <div style="height:60px;border-radius:8px;background:var(--success);border:1px solid var(--border)"></div>
          <div class="fs-xs fw-500 mt-1">Success</div>
          <div class="text-muted fs-xs">#10b981</div>
        </div>
        <div style="flex:1;min-width:80px;text-align:center">
          <div style="height:60px;border-radius:8px;background:var(--destructive);border:1px solid var(--border)"></div>
          <div class="fs-xs fw-500 mt-1">Destructive</div>
          <div class="text-muted fs-xs">#ef4444</div>
        </div>
        <div style="flex:1;min-width:80px;text-align:center">
          <div style="height:60px;border-radius:8px;background:var(--warning);border:1px solid var(--border)"></div>
          <div class="fs-xs fw-500 mt-1">Warning</div>
          <div class="text-muted fs-xs">#f59e0b</div>
        </div>
        <div style="flex:1;min-width:80px;text-align:center">
          <div style="height:60px;border-radius:8px;background:var(--muted);border:1px solid var(--border)"></div>
          <div class="fs-xs fw-500 mt-1">Muted</div>
          <div class="text-muted fs-xs">#f1f5f9</div>
        </div>
        <div style="flex:1;min-width:80px;text-align:center">
          <div style="height:60px;border-radius:8px;background:var(--accent);border:1px solid var(--border)"></div>
          <div class="fs-xs fw-500 mt-1">Accent</div>
          <div class="text-muted fs-xs">#f1f5f9</div>
        </div>
        <div style="flex:1;min-width:80px;text-align:center">
          <div style="height:60px;border-radius:8px;background:var(--foreground);border:1px solid var(--border)"></div>
          <div class="fs-xs fw-500 mt-1">Foreground</div>
          <div class="text-muted fs-xs">#1f2937</div>
        </div>
        <div style="flex:1;min-width:80px;text-align:center">
          <div style="height:60px;border-radius:8px;background:var(--background);border:1px solid var(--border)"></div>
          <div class="fs-xs fw-500 mt-1">Background</div>
          <div class="text-muted fs-xs">#ffffff</div>
        </div>
        <div style="flex:1;min-width:80px;text-align:center">
          <div style="height:60px;border-radius:8px;background:var(--card);border:1px solid var(--border)"></div>
          <div class="fs-xs fw-500 mt-1">Card</div>
          <div class="text-muted fs-xs">#ffffff</div>
        </div>
        <div style="flex:1;min-width:80px;text-align:center">
          <div style="height:60px;border-radius:8px;background:var(--ring);border:1px solid var(--border)"></div>
          <div class="fs-xs fw-500 mt-1">Ring</div>
          <div class="text-muted fs-xs">#3b82f6</div>
        </div>
      </div>
      <h3>Text Colors</h3>
      <div class="live-preview" style="flex-direction:column;align-items:flex-start;gap:6px">
        <span class="text-muted">.text-muted — Muted text</span>
        <span class="text-primary">.text-primary — Primary text</span>
        <span class="text-success">.text-success — Success text</span>
        <span class="text-danger">.text-danger — Danger text</span>
        <span class="text-warning">.text-warning — Warning text</span>
        <span class="text-card">.text-card — Card text</span>
        <span class="text-muted">.text-muted (dark variant works with .dark class on parent)</span>
      </div>
      <h3>Background Colors</h3>
      <div class="live-preview" style="gap:8px;flex-wrap:wrap">
        <div class="bg-primary p-3 rounded" style="color:#fff">.bg-primary</div>
        <div class="bg-success p-3 rounded" style="color:#fff">.bg-success</div>
        <div class="bg-danger p-3 rounded" style="color:#fff">.bg-danger</div>
        <div class="bg-warning p-3 rounded" style="color:#fff">.bg-warning</div>
        <div class="bg-muted p-3 rounded">.bg-muted</div>
        <div class="bg-accent p-3 rounded">.bg-accent</div>
        <div class="bg-card p-3 rounded" style="border:1px solid var(--border)">.bg-card</div>
      </div>
    `},{id:"typography",title:"Typography",content:`
      <p class="desc">Typography utilities for font size, weight, and alignment.</p>
      <h3>Font Size</h3>
      <div class="live-preview" style="flex-direction:column;align-items:flex-start;gap:4px">
        <span class="fs-xs">.fs-xs (0.75rem)</span>
        <span class="fs-sm">.fs-sm (0.875rem)</span>
        <span class="fs-base">.fs-base (1rem)</span>
        <span class="fs-lg">.fs-lg (1.125rem)</span>
        <span class="fs-xl">.fs-xl (1.25rem)</span>
        <span class="fs-2xl">.fs-2xl (1.5rem)</span>
        <span class="fs-3xl">.fs-3xl (1.875rem)</span>
        <span class="fs-4xl">.fs-4xl (2.25rem)</span>
      </div>
      <h3>Font Weight</h3>
      <div class="live-preview" style="flex-direction:column;align-items:flex-start;gap:4px">
        <span class="fw-300">.fw-300 — Light (300)</span>
        <span class="fw-400">.fw-400 — Regular (400)</span>
        <span class="fw-500">.fw-500 — Medium (500)</span>
        <span class="fw-600">.fw-600 — Semibold (600)</span>
        <span class="fw-700">.fw-700 — Bold (700)</span>
        <span class="fw-800">.fw-800 — Extra Bold (800)</span>
      </div>
      <h3>Text Alignment</h3>
      <div class="live-preview" style="flex-direction:column;gap:8px">
        <div class="text-start">.text-start — Left aligned</div>
        <div class="text-center">.text-center — Center aligned</div>
        <div class="text-end">.text-end — Right aligned</div>
      </div>
    `},{id:"spacing",title:"Spacing",content:`
      <p class="desc">Margin and padding utilities. Uses multiples of 0.25rem (4px).</p>
      <div class="code-wrap"><div class="code-header">Example</div><pre><code>&lt;div class="p-4 mb-3"&gt;Padding 1rem, margin-bottom 0.75rem&lt;/div&gt;
&lt;div class="mt-2 px-3 py-4"&gt;Margin-top 0.5rem, padding-x 0.75rem, padding-y 1rem&lt;/div&gt;</code></pre></div>
    `},{id:"display",title:"Display & Visibility",content:`
      <p class="desc">Display utilities for controlling the display behavior of elements.</p>
      <div class="code-wrap"><div class="code-header">Utility Classes</div><pre><code>.d-none     /* display: none */
.d-inline   /* display: inline */
.d-block    /* display: block */
.d-flex     /* display: flex */
.d-inline-flex /* display: inline-flex */
.d-grid     /* display: grid */

/* Responsive variants */
.sm:d-block
.md:d-flex
.lg:d-grid</code></pre></div>
    `},{id:"borders",title:"Borders",content:`
      <p class="desc">Border utilities for adding and styling borders.</p>
      <div class="code-wrap"><div class="code-header">Example</div><pre><code>.border        /* 1px solid var(--border) */
.border-0      /* border: 0 */
.border-top    /* border-top only */
.border-primary
.border-success
.rounded        /* default radius */
.rounded-sm
.rounded-lg
.rounded-pill</code></pre></div>
    `},{id:"flex-grid",title:"Flexbox & Grid",content:`
      <p class="desc">Flexbox and grid utilities for layout.</p>
      <div class="code-wrap"><div class="code-header">Flexbox</div><pre><code>.d-flex       /* display: flex */
.flex-row     /* flex-direction: row */
.flex-col     /* flex-direction: column */
.flex-wrap    /* flex-wrap: wrap */
.flex-1       /* flex: 1 */
.jc-center    /* justify-content: center */
.jc-between   /* justify-content: space-between */
.ai-center    /* align-items: center */
.gap-1        /* gap: 0.25rem */
.gap-2        /* gap: 0.5rem */
.gap-3        /* gap: 0.75rem */
.gap-4        /* gap: 1rem */</code></pre></div>
      <h3>Grid System Examples</h3>
      <div class="live-preview" style="flex-direction:column;gap:12px">
        <div class="row" style="width:100%">
          <div class="col-md-6 mb-2"><div class="p-3 text-center" style="background:var(--muted);border-radius:6px">col-md-6</div></div>
          <div class="col-md-6 mb-2"><div class="p-3 text-center" style="background:var(--muted);border-radius:6px">col-md-6</div></div>
          <div class="col-md-4 mb-2"><div class="p-3 text-center" style="background:var(--muted);border-radius:6px">col-md-4</div></div>
          <div class="col-md-4 mb-2"><div class="p-3 text-center" style="background:var(--muted);border-radius:6px">col-md-4</div></div>
          <div class="col-md-4 mb-2"><div class="p-3 text-center" style="background:var(--muted);border-radius:6px">col-md-4</div></div>
        </div>
      </div>
    `},{id:"sizing",title:"Sizing",content:`
      <p class="desc">Width and height utilities.</p>
      <div class="code-wrap"><div class="code-header">Example</div><pre><code>.w-25    /* width: 25% */
.w-50    /* width: 50% */
.w-75    /* width: 75% */
.w-100   /* width: 100% */
.h-100   /* height: 100% */</code></pre></div>
    `},{id:"shadows",title:"Shadows",content:`
      <p class="desc">Box shadow utilities.</p>
      <div class="code-wrap"><div class="code-header">Example</div><pre><code>.shadow-sm
.shadow
.shadow-lg</code></pre></div>
    `},{id:"buttons",title:"Buttons",content:`
      <p class="desc">Button styles for actions and forms. Use the <code>.btn</code> class combined with color and size modifiers.</p>
      <h3>Color Variants</h3>
      <div class="live-preview">
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-success">Success</button>
        <button class="btn btn-danger">Danger</button>
        <button class="btn btn-warning">Warning</button>
        <button class="btn btn-ghost">Ghost</button>
      </div>
      <h3>Outline Variants</h3>
      <div class="live-preview">
        <button class="btn btn-outline-primary">Primary</button>
        <button class="btn btn-outline-success">Success</button>
        <button class="btn btn-outline-danger">Danger</button>
      </div>
      <h3>Sizes</h3>
      <div class="live-preview">
        <button class="btn btn-primary btn-sm">Small</button>
        <button class="btn btn-primary">Default</button>
        <button class="btn btn-primary btn-lg">Large</button>
      </div>
      <h3>States</h3>
      <div class="live-preview">
        <button class="btn btn-primary" disabled>Disabled</button>
        <button class="btn btn-primary"><span class="spinner-border spinner-border-sm me-1"></span>Loading</button>
        <button class="btn btn-primary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px"><path d="M20 12H4M12 4v16"/></svg>Icon Button</button>
      </div>
      <h3>Button Group</h3>
      <div class="live-preview">
        <div class="d-flex gap-0">
          <button class="btn btn-primary" style="border-radius:6px 0 0 6px">Left</button>
          <button class="btn btn-primary" style="border-radius:0;border-left:1px solid rgba(255,255,255,.2)">Center</button>
          <button class="btn btn-primary" style="border-radius:0 6px 6px 0;border-left:1px solid rgba(255,255,255,.2)">Right</button>
        </div>
        <button class="btn btn-primary btn-lg btn-block" style="width:100%;margin-top:8px">Block Button</button>
      </div>
    `},{id:"cards",title:"Cards",content:`
      <p class="desc">Flexible card containers with optional header, body, and footer.</p>
      <h3>Basic Card</h3>
      <div class="live-preview">
        <div class="card" style="max-width:300px">
          <div style="height:120px;background:var(--muted);border-radius:8px 8px 0 0"></div>
          <div class="card-body">
            <h3 class="card-title">Card Title</h3>
            <p class="card-text">Card content goes here. You can add any HTML inside a card.</p>
            <button class="btn btn-primary btn-sm">Learn More</button>
          </div>
        </div>
      </div>
      <h3>Card with Header & Footer</h3>
      <div class="live-preview">
        <div class="card" style="max-width:400px">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h3 class="card-title">Special title treatment</h3>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <button class="btn btn-primary">Go somewhere</button>
          </div>
          <div class="card-footer text-muted">2 days ago</div>
        </div>
      </div>
      <h3>Card Grid</h3>
      <div class="live-preview" style="flex-direction:column">
        <div class="row" style="width:100%">
          <div class="col-md-4 mb-3"><div class="card p-3 text-center"><h3 class="fs-base fw-600 mb-2">Basic</h3><p class="text-muted fs-sm">Simple card body</p></div></div>
          <div class="col-md-4 mb-3"><div class="card p-3 text-center border-primary"><h3 class="fs-base fw-600 mb-2">Featured</h3><p class="text-muted fs-sm">Card with border</p></div></div>
          <div class="col-md-4 mb-3"><div class="card p-3 text-center bg-muted"><h3 class="fs-base fw-600 mb-2">Muted</h3><p class="text-muted fs-sm">Card with muted bg</p></div></div>
        </div>
      </div>
    `},{id:"forms",title:"Forms",content:`
      <p class="desc">Form control styles for inputs, textareas, selects, and more.</p>
      <h3>Input</h3>
      <div class="live-preview" style="flex-direction:column;gap:12px;max-width:400px">
        <div style="width:100%">
          <label class="form-label fs-sm fw-500">Email</label>
          <input type="email" class="form-control" placeholder="you@example.com">
        </div>
        <div style="width:100%">
          <label class="form-label fs-sm fw-500">Password</label>
          <input type="password" class="form-control" placeholder="Enter password">
        </div>
        <div style="width:100%">
          <label class="form-label fs-sm fw-500">Select</label>
          <select class="form-control">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div style="width:100%">
          <label class="form-label fs-sm fw-500">Message</label>
          <textarea class="form-control" rows="3" placeholder="Your message..."></textarea>
        </div>
        <div style="width:100%">
          <div class="d-flex gap-3 ai-center">
            <label class="d-flex ai-center gap-2"><input type="checkbox" class="form-checkbox"> Checkbox</label>
            <label class="d-flex ai-center gap-2"><input type="radio" name="radio-group" class="form-radio"> Radio 1</label>
            <label class="d-flex ai-center gap-2"><input type="radio" name="radio-group" class="form-radio"> Radio 2</label>
          </div>
        </div>
        <div style="width:100%">
          <label class="d-flex ai-center gap-3">
            <div class="form-switch"><input type="checkbox" role="switch"></div>
            <span class="fs-sm">Toggle switch</span>
          </label>
        </div>
      </div>
      <h3>Input Sizes</h3>
      <div class="live-preview" style="flex-direction:column;gap:8px;max-width:300px">
        <input class="form-control form-control-sm" placeholder="Small input">
        <input class="form-control" placeholder="Default input">
        <input class="form-control form-control-lg" placeholder="Large input">
      </div>
    `},{id:"badges",title:"Badges",content:`
      <p class="desc">Badge styles for labels, counts, and status indicators.</p>
      <h3>Badge Variants</h3>
      <div class="live-preview">
        <span class="badge badge-primary">Primary</span>
        <span class="badge badge-secondary">Secondary</span>
        <span class="badge badge-success">Success</span>
        <span class="badge badge-danger">Danger</span>
        <span class="badge badge-warning">Warning</span>
        <span class="badge badge-info">Info</span>
        <span class="badge badge-muted">Muted</span>
      </div>
      <h3>Pill Badges</h3>
      <div class="live-preview">
        <span class="badge badge-primary badge-pill">Primary</span>
        <span class="badge badge-success badge-pill">Success</span>
        <span class="badge badge-danger badge-pill">Danger</span>
      </div>
      <h3>Badge Sizes</h3>
      <div class="live-preview">
        <span class="badge badge-primary badge-sm">Small</span>
        <span class="badge badge-primary">Default</span>
        <span class="badge badge-primary badge-lg">Large</span>
      </div>
      <h3>Badge in Button</h3>
      <div class="live-preview">
        <button class="btn btn-primary">Notifications <span class="badge badge-light badge-sm ms-2">4</span></button>
      </div>
    `},{id:"alerts",title:"Alerts",content:`
      <p class="desc">Alert messages for user feedback and notifications.</p>
      <h3>Alert Variants</h3>
      <div class="live-preview" style="flex-direction:column;gap:8px;max-width:500px">
        <div class="alert alert-primary" role="alert">This is a primary alert with useful information.</div>
        <div class="alert alert-success" role="alert">Operation completed successfully!</div>
        <div class="alert alert-danger" role="alert">An error occurred while processing your request.</div>
        <div class="alert alert-warning" role="alert">Please review your settings before continuing.</div>
        <div class="alert alert-info" role="alert">New updates are available for your account.</div>
        <div class="alert alert-muted" role="alert">A neutral message for general context.</div>
      </div>
      <h3>Alert with Icon</h3>
      <div class="live-preview" style="max-width:500px">
        <div class="alert alert-success d-flex ai-center gap-3" role="alert">
          <span style="font-size:1.5rem">&#10003;</span>
          <div><strong>Well done!</strong> Your changes have been saved successfully.</div>
        </div>
      </div>
    `},{id:"navs",title:"Navs & Tabs",content:`
      <p class="desc">Navigation components for tabs and nav bars.</p>
      <h3>Nav Tabs</h3>
      <div class="live-preview" style="flex-direction:column">
        <div class="nav nav-tabs mb-3">
          <a class="nav-link active" href="#">Active</a>
          <a class="nav-link" href="#">Link</a>
          <a class="nav-link" href="#">Link</a>
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </div>
      </div>
      <h3>Nav Pills</h3>
      <div class="live-preview" style="flex-direction:column">
        <div class="nav nav-pills">
          <a class="nav-link active" href="#">Active</a>
          <a class="nav-link" href="#">Link</a>
          <a class="nav-link" href="#">Link</a>
        </div>
      </div>
      <h3>Vertical Nav</h3>
      <div class="live-preview" style="flex-direction:column">
        <div class="nav flex-col gap-1">
          <a class="nav-link active" href="#">Dashboard</a>
          <a class="nav-link" href="#">Analytics</a>
          <a class="nav-link" href="#">Settings</a>
        </div>
      </div>
    `},{id:"modals",title:"Modals",content:`
      <p class="desc">Modal dialog components for overlays and popups. Modals require JavaScript to toggle the <code>.show</code> and <code>.d-block</code> classes.</p>
      <div class="code-wrap"><div class="code-header">Modal Structure</div><pre><code>&lt;div class="modal" tabindex="-1"&gt;
  &lt;div class="modal-dialog"&gt;
    &lt;div class="modal-content"&gt;
      &lt;div class="modal-header"&gt;
        &lt;h5 class="modal-title"&gt;Modal title&lt;/h5&gt;
        &lt;button class="btn-close" data-dismiss="modal"&gt;&times;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div class="modal-body"&gt;
        &lt;p&gt;Modal body text goes here.&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="modal-footer"&gt;
        &lt;button class="btn btn-secondary" data-dismiss="modal"&gt;Close&lt;/button&gt;
        &lt;button class="btn btn-primary"&gt;Save changes&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre></div>
    `},{id:"dropdowns",title:"Dropdowns",content:`
      <p class="desc">Dropdown menus for contextual actions. Requires JavaScript for toggle functionality.</p>
      <div class="code-wrap"><div class="code-header">Dropdown Structure</div><pre><code>&lt;div class="dropdown"&gt;
  &lt;button class="btn btn-ghost dropdown-toggle" data-toggle="dropdown"&gt;
    Dropdown
  &lt;/button&gt;
  &lt;div class="dropdown-menu"&gt;
    &lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;
    &lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;
    &lt;div class="dropdown-divider"&gt;&lt;/div&gt;
    &lt;a class="dropdown-item" href="#"&gt;Separated action&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre></div>
    `},{id:"list-group",title:"List Group",content:`
      <p class="desc">List group component for displaying lists of items.</p>
      <h3>Basic List Group</h3>
      <div class="live-preview" style="max-width:300px">
        <div class="list-group">
          <div class="list-group-item">An item</div>
          <div class="list-group-item">A second item</div>
          <div class="list-group-item">A third item</div>
          <div class="list-group-item">A fourth item</div>
        </div>
      </div>
      <h3>Active & Disabled Items</h3>
      <div class="live-preview" style="max-width:300px">
        <div class="list-group">
          <div class="list-group-item active">Active item</div>
          <div class="list-group-item">Regular item</div>
          <div class="list-group-item disabled">Disabled item</div>
        </div>
      </div>
      <h3>Flush List Group</h3>
      <div class="live-preview" style="max-width:300px">
        <div class="list-group list-group-flush">
          <div class="list-group-item">Item one</div>
          <div class="list-group-item">Item two</div>
          <div class="list-group-item">Item three</div>
        </div>
      </div>
      <h3>With Badges</h3>
      <div class="live-preview" style="max-width:300px">
        <div class="list-group">
          <div class="list-group-item d-flex jc-between ai-center">Inbox <span class="badge badge-primary badge-pill">14</span></div>
          <div class="list-group-item d-flex jc-between ai-center">Drafts <span class="badge badge-muted">2</span></div>
          <div class="list-group-item d-flex jc-between ai-center">Spam <span class="badge badge-danger">3</span></div>
        </div>
      </div>
    `},{id:"tables",title:"Tables",content:`
      <p class="desc">Table styles for data display.</p>
      <h3>Basic Table</h3>
      <div class="live-preview" style="flex-direction:column">
        <table class="table" style="width:100%">
          <thead><tr><th>#</th><th>Name</th><th>Email</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Alice Johnson</td><td>alice@example.com</td><td><span class="badge badge-success">Active</span></td></tr>
            <tr><td>2</td><td>Bob Smith</td><td>bob@example.com</td><td><span class="badge badge-warning">Pending</span></td></tr>
            <tr><td>3</td><td>Carol White</td><td>carol@example.com</td><td><span class="badge badge-danger">Inactive</span></td></tr>
          </tbody>
        </table>
      </div>
      <h3>Striped & Hover</h3>
      <div class="live-preview" style="flex-direction:column">
        <table class="table table-striped table-hover" style="width:100%">
          <thead><tr><th>Product</th><th>Price</th><th>Stock</th></tr></thead>
          <tbody>
            <tr><td>Wireless Headphones</td><td>$99.99</td><td>24</td></tr>
            <tr><td>Smart Watch</td><td>$199.99</td><td>12</td></tr>
            <tr><td>USB-C Hub</td><td>$49.99</td><td>48</td></tr>
          </tbody>
        </table>
      </div>
      <h3>Bordered & Dark</h3>
      <div class="live-preview" style="flex-direction:column">
        <table class="table table-bordered" style="width:100%">
          <thead><tr><th>Feature</th><th>Free</th><th>Pro</th></tr></thead>
          <tbody><tr><td>Storage</td><td>5GB</td><td>50GB</td></tr><tr><td>Users</td><td>1</td><td>Unlimited</td></tr></tbody>
        </table>
      </div>
    `},{id:"progress",title:"Progress Bars",content:`
      <p class="desc">Progress bar styles for showing completion status.</p>
      <h3>Progress Variants</h3>
      <div class="live-preview" style="flex-direction:column;gap:12px;max-width:400px">
        <div class="progress" style="width:100%"><div class="progress-bar" style="width:75%">75%</div></div>
        <div class="progress" style="width:100%"><div class="progress-bar progress-bar-success" style="width:60%">Success</div></div>
        <div class="progress" style="width:100%"><div class="progress-bar progress-bar-danger" style="width:30%">Danger</div></div>
        <div class="progress" style="width:100%"><div class="progress-bar progress-bar-warning" style="width:50%">Warning</div></div>
      </div>
      <h3>Striped & Animated</h3>
      <div class="live-preview" style="flex-direction:column;gap:8px;max-width:400px">
        <div class="progress" style="width:100%"><div class="progress-bar progress-bar-striped" style="width:60%">60%</div></div>
        <div class="progress" style="width:100%"><div class="progress-bar progress-bar-striped progress-bar-animated" style="width:45%">Processing...</div></div>
      </div>
      <h3>Multiple Bars</h3>
      <div class="live-preview" style="max-width:400px">
        <div class="progress" style="width:100%;display:flex">
          <div class="progress-bar" style="width:40%">Free</div>
          <div class="progress-bar progress-bar-success" style="width:25%">Used</div>
          <div class="progress-bar progress-bar-warning" style="width:15%">Cache</div>
        </div>
      </div>
    `},{id:"spinners",title:"Spinners",content:`
      <p class="desc">Loading spinners for indicating loading states.</p>
      <h3>Border Spinner</h3>
      <div class="live-preview">
        <div class="spinner-border text-primary"></div>
        <div class="spinner-border text-success"></div>
        <div class="spinner-border text-danger"></div>
        <div class="spinner-border text-warning"></div>
        <div class="spinner-border text-muted"></div>
      </div>
      <h3>Growing Spinner</h3>
      <div class="live-preview">
        <div class="spinner-grow text-primary"></div>
        <div class="spinner-grow text-success"></div>
        <div class="spinner-grow text-danger"></div>
        <div class="spinner-grow text-warning"></div>
      </div>
      <h3>Sizes</h3>
      <div class="live-preview">
        <div class="spinner-border spinner-border-sm"></div>
        <div class="spinner-border"></div>
        <div class="spinner-border" style="width:3rem;height:3rem"></div>
      </div>
      <h3>Spinner with Text</h3>
      <div class="live-preview">
        <button class="btn btn-primary" disabled>
          <div class="spinner-border spinner-border-sm me-1"></div>
          Loading...
        </button>
      </div>
    `},{id:"tooltips",title:"Tooltips",content:`
      <p class="desc">Tooltip indicators for hover information. Add the <code>.tooltip</code> class with direction and <code>data-tip</code> attribute.</p>
      <div class="live-preview" style="gap:16px">
        <div class="tooltip tooltip-top" data-tip="Top tooltip" style="padding:8px 14px;background:var(--muted);border-radius:6px;cursor:pointer">Hover me (top)</div>
        <div class="tooltip tooltip-bottom" data-tip="Bottom tooltip" style="padding:8px 14px;background:var(--muted);border-radius:6px;cursor:pointer">Hover me (bottom)</div>
        <div class="tooltip tooltip-left" data-tip="Left tooltip" style="padding:8px 14px;background:var(--muted);border-radius:6px;cursor:pointer">Hover me (left)</div>
        <div class="tooltip tooltip-right" data-tip="Right tooltip" style="padding:8px 14px;background:var(--muted);border-radius:6px;cursor:pointer">Hover me (right)</div>
      </div>
    `},{id:"accordion",title:"Accordion",content:`
      <p class="desc">Accordion component for collapsible content sections.</p>
      <h3>Basic Accordion</h3>
      <div class="live-preview" style="flex-direction:column;max-width:500px">
        <div class="accordion" style="width:100%">
          <div class="accordion-item">
            <div class="accordion-header">Accordion Item #1</div>
            <div class="accordion-body">This is the first item's accordion body. It is shown by default.</div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header">Accordion Item #2</div>
            <div class="accordion-body">This is the second item's accordion body.</div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header">Accordion Item #3</div>
            <div class="accordion-body">This is the third item's accordion body.</div>
          </div>
        </div>
      </div>
    `},{id:"templates-overview",title:"Templates Overview",content:`
      <p class="desc">Browse our collection of pre-built HTML templates for common UI patterns. Each template includes live preview and source code.</p>
      <p><a href="/folkline-ui-site/templates" class="btn btn-primary">Browse All Templates &rarr;</a></p>
    `}];function Em(){return c.jsx("div",{className:"page-content",children:Cm.map(e=>c.jsxs("div",{id:e.id,className:"page-section",children:[c.jsx("h2",{children:e.title}),c.jsx("div",{dangerouslySetInnerHTML:{__html:e.content}})]},e.id))})}function Pm(){return c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"60vh",textAlign:"center",padding:48},children:[c.jsx("h1",{style:{fontSize:"6rem",fontWeight:800,fontFamily:"var(--font-heading)",letterSpacing:"-.03em",lineHeight:1,marginBottom:8},children:"404"}),c.jsx("p",{style:{color:"var(--muted-foreground)",fontSize:"1.125rem",marginBottom:24,maxWidth:400},children:"The page you’re looking for doesn’t exist or has been moved."}),c.jsx("a",{href:"/folkline-ui-site/",className:"btn-hero-lg btn-solid",style:{textDecoration:"none"},children:"Go Home"})]})}function Nm(){return c.jsxs(c.Fragment,{children:[c.jsx("section",{className:"hero-section",children:c.jsxs("div",{className:"hero-inner",children:[c.jsx("a",{href:"/folkline-ui-site/docs",className:"hero-badge",children:"v3.0.0 — Modern CSS Framework"}),c.jsxs("h1",{className:"hero-h1",children:["Build faster with ",c.jsx("span",{className:"grad",children:"Folkline UI"})]}),c.jsx("p",{className:"hero-desc",children:"A modern, utility-first CSS framework inspired by Tailwind CSS, with a touch of Bootstrap’s simplicity. Pre-built components, dark mode, responsive utilities — all with zero build step."}),c.jsxs("div",{className:"hero-actions",children:[c.jsx("a",{href:"/folkline-ui-site/docs",className:"btn-hero-lg btn-solid",children:"Get Started"}),c.jsx("a",{href:"/folkline-ui-site/templates",className:"btn-hero-lg btn-ghost-lg",children:"Browse Templates"})]})]})}),c.jsxs("div",{className:"page-content",children:[c.jsxs("div",{className:"feature-grid",children:[c.jsxs("div",{className:"feature-card",children:[c.jsx("span",{className:"icon",children:"⚡"}),c.jsx("h3",{children:"Utility-First"}),c.jsx("p",{children:"Build any design directly in your HTML with composable utility classes. No custom CSS needed."})]}),c.jsxs("div",{className:"feature-card",children:[c.jsx("span",{className:"icon",children:"💅"}),c.jsx("h3",{children:"Pre-built Components"}),c.jsx("p",{children:"Buttons, cards, forms, modals, navs, alerts, badges, and more — ready to drop in."})]}),c.jsxs("div",{className:"feature-card",children:[c.jsx("span",{className:"icon",children:"🌙"}),c.jsx("h3",{children:"Dark Mode"}),c.jsxs("p",{children:["Built-in dark mode support. Add the ",c.jsx("code",{children:".dark"})," class to toggle instantly."]})]}),c.jsxs("div",{className:"feature-card",children:[c.jsx("span",{className:"icon",children:"📈"}),c.jsx("h3",{children:"Responsive"}),c.jsxs("p",{children:["Mobile-first responsive utilities with breakpoint prefixes: ",c.jsx("code",{children:"sm:"}),", ",c.jsx("code",{children:"md:"}),", ",c.jsx("code",{children:"lg:"}),"."]})]}),c.jsxs("div",{className:"feature-card",children:[c.jsx("span",{className:"icon",children:"⚙️"}),c.jsx("h3",{children:"Customizable"}),c.jsx("p",{children:"Customize colors, spacing, fonts, and more with CSS custom properties (OKLCH color space)."})]}),c.jsxs("div",{className:"feature-card",children:[c.jsx("span",{className:"icon",children:"⚡"}),c.jsx("h3",{children:"Zero Build Step"}),c.jsx("p",{children:"Use directly via CDN. No Webpack, Vite, or PostCSS required — just a stylesheet link."})]})]}),c.jsxs("div",{className:"install-section",children:[c.jsx("h2",{children:"Get started in seconds"}),c.jsx("p",{className:"sub",children:"Add one line to your HTML and you’re ready to go."}),c.jsxs("div",{className:"code-block-dark",children:[c.jsx("button",{className:"copy-top",onClick:e=>{navigator.clipboard.writeText('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@realtoheed/folkline-ui@3/dist/css/folkline-ui.min.css">'),e.target.textContent="Copied!",setTimeout(()=>e.target.textContent="Copy",1500)},children:"Copy"}),c.jsx("code",{children:'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@realtoheed/folkline-ui@3/dist/css/folkline-ui.min.css">'})]})]}),c.jsxs("div",{className:"stats-row",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("div",{className:"stat-num",children:"50+"}),c.jsx("div",{className:"stat-label",children:"Components"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("div",{className:"stat-num",children:"500+"}),c.jsx("div",{className:"stat-label",children:"Utility Classes"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("div",{className:"stat-num",children:"100%"}),c.jsx("div",{className:"stat-label",children:"Responsive"})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("div",{className:"stat-num",children:"8KB"}),c.jsx("div",{className:"stat-label",children:"Minified + Gzip"})]})]})]})]})}function jm(){const e=_s(),[t,n]=P.useState(!1),[r,s]=P.useState(!1),[i,l]=P.useState(()=>{const o=localStorage.getItem("folkline-dark");return o!==null?o==="true":window.matchMedia("(prefers-color-scheme:dark)").matches});Or.useEffect(()=>{document.documentElement.classList.toggle("dark",i),localStorage.setItem("folkline-dark",i)},[i]),Or.useEffect(()=>{const o=d=>{d.key==="k"&&(d.metaKey||d.ctrlKey)&&(d.preventDefault(),s(!0)),d.key==="Escape"&&s(!1)};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[]);const a=e.pathname==="/docs";return c.jsxs("div",{"data-slot":"layout",children:[c.jsx(ym,{sidebarOpen:t,onToggleSidebar:()=>n(o=>!o),onOpenSearch:()=>s(!0),dark:i,onToggleDark:()=>l(o=>!o)}),c.jsxs("div",{className:"app-main",children:[a&&c.jsx(gm,{open:t,onClose:()=>n(!1)}),c.jsx("main",{className:`main-content-area ${a?"has-sidebar":""}`,children:c.jsxs(fm,{children:[c.jsx(Mt,{path:"/",element:c.jsx(Nm,{})}),c.jsx(Mt,{path:"/docs",element:c.jsx(Em,{})}),c.jsx(Mt,{path:"/templates",element:c.jsx(km,{})}),c.jsx(Mt,{path:"/template/:id",element:c.jsx(Sm,{})}),c.jsx(Mt,{path:"*",element:c.jsx(Pm,{})})]})})]}),c.jsx(xm,{}),r&&c.jsx(wm,{onClose:()=>s(!1)})]})}ai.createRoot(document.getElementById("root")).render(c.jsx(Or.StrictMode,{children:c.jsx(vm,{basename:"/folkline-ui-site/",children:c.jsx(jm,{})})}));
