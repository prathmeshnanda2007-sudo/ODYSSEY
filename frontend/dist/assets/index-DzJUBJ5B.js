(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Om(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var fu={exports:{}},Ca={},hu={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function L_(){if(xp)return ft;xp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(U,Q,Ee){this.props=U,this.context=Q,this.refs=w,this.updater=Ee||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,Q){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Q,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function I(U,Q,Ee){this.props=U,this.context=Q,this.refs=w,this.updater=Ee||S}var N=I.prototype=new _;N.constructor=I,E(N,y.prototype),N.isPureReactComponent=!0;var b=Array.isArray,q=Object.prototype.hasOwnProperty,H={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function k(U,Q,Ee){var $,fe={},we=null,xe=null;if(Q!=null)for($ in Q.ref!==void 0&&(xe=Q.ref),Q.key!==void 0&&(we=""+Q.key),Q)q.call(Q,$)&&!O.hasOwnProperty($)&&(fe[$]=Q[$]);var Ce=arguments.length-2;if(Ce===1)fe.children=Ee;else if(1<Ce){for(var Ie=Array(Ce),Qe=0;Qe<Ce;Qe++)Ie[Qe]=arguments[Qe+2];fe.children=Ie}if(U&&U.defaultProps)for($ in Ce=U.defaultProps,Ce)fe[$]===void 0&&(fe[$]=Ce[$]);return{$$typeof:s,type:U,key:we,ref:xe,props:fe,_owner:H.current}}function P(U,Q){return{$$typeof:s,type:U.type,key:Q,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function F(U){var Q={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ee){return Q[Ee]})}var se=/\/+/g;function Y(U,Q){return typeof U=="object"&&U!==null&&U.key!=null?F(""+U.key):Q.toString(36)}function oe(U,Q,Ee,$,fe){var we=typeof U;(we==="undefined"||we==="boolean")&&(U=null);var xe=!1;if(U===null)xe=!0;else switch(we){case"string":case"number":xe=!0;break;case"object":switch(U.$$typeof){case s:case e:xe=!0}}if(xe)return xe=U,fe=fe(xe),U=$===""?"."+Y(xe,0):$,b(fe)?(Ee="",U!=null&&(Ee=U.replace(se,"$&/")+"/"),oe(fe,Q,Ee,"",function(Qe){return Qe})):fe!=null&&(A(fe)&&(fe=P(fe,Ee+(!fe.key||xe&&xe.key===fe.key?"":(""+fe.key).replace(se,"$&/")+"/")+U)),Q.push(fe)),1;if(xe=0,$=$===""?".":$+":",b(U))for(var Ce=0;Ce<U.length;Ce++){we=U[Ce];var Ie=$+Y(we,Ce);xe+=oe(we,Q,Ee,Ie,fe)}else if(Ie=x(U),typeof Ie=="function")for(U=Ie.call(U),Ce=0;!(we=U.next()).done;)we=we.value,Ie=$+Y(we,Ce++),xe+=oe(we,Q,Ee,Ie,fe);else if(we==="object")throw Q=String(U),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return xe}function de(U,Q,Ee){if(U==null)return U;var $=[],fe=0;return oe(U,$,"","",function(we){return Q.call(Ee,we,fe++)}),$}function ae(U){if(U._status===-1){var Q=U._result;Q=Q(),Q.then(function(Ee){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ee)},function(Ee){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ee)}),U._status===-1&&(U._status=0,U._result=Q)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},B={transition:null},ue={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:H};function ee(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:de,forEach:function(U,Q,Ee){de(U,function(){Q.apply(this,arguments)},Ee)},count:function(U){var Q=0;return de(U,function(){Q++}),Q},toArray:function(U){return de(U,function(Q){return Q})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ft.Component=y,ft.Fragment=n,ft.Profiler=o,ft.PureComponent=I,ft.StrictMode=r,ft.Suspense=h,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,ft.act=ee,ft.cloneElement=function(U,Q,Ee){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var $=E({},U.props),fe=U.key,we=U.ref,xe=U._owner;if(Q!=null){if(Q.ref!==void 0&&(we=Q.ref,xe=H.current),Q.key!==void 0&&(fe=""+Q.key),U.type&&U.type.defaultProps)var Ce=U.type.defaultProps;for(Ie in Q)q.call(Q,Ie)&&!O.hasOwnProperty(Ie)&&($[Ie]=Q[Ie]===void 0&&Ce!==void 0?Ce[Ie]:Q[Ie])}var Ie=arguments.length-2;if(Ie===1)$.children=Ee;else if(1<Ie){Ce=Array(Ie);for(var Qe=0;Qe<Ie;Qe++)Ce[Qe]=arguments[Qe+2];$.children=Ce}return{$$typeof:s,type:U.type,key:fe,ref:we,props:$,_owner:xe}},ft.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:c,_context:U},U.Consumer=U},ft.createElement=k,ft.createFactory=function(U){var Q=k.bind(null,U);return Q.type=U,Q},ft.createRef=function(){return{current:null}},ft.forwardRef=function(U){return{$$typeof:f,render:U}},ft.isValidElement=A,ft.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:ae}},ft.memo=function(U,Q){return{$$typeof:m,type:U,compare:Q===void 0?null:Q}},ft.startTransition=function(U){var Q=B.transition;B.transition={};try{U()}finally{B.transition=Q}},ft.unstable_act=ee,ft.useCallback=function(U,Q){return le.current.useCallback(U,Q)},ft.useContext=function(U){return le.current.useContext(U)},ft.useDebugValue=function(){},ft.useDeferredValue=function(U){return le.current.useDeferredValue(U)},ft.useEffect=function(U,Q){return le.current.useEffect(U,Q)},ft.useId=function(){return le.current.useId()},ft.useImperativeHandle=function(U,Q,Ee){return le.current.useImperativeHandle(U,Q,Ee)},ft.useInsertionEffect=function(U,Q){return le.current.useInsertionEffect(U,Q)},ft.useLayoutEffect=function(U,Q){return le.current.useLayoutEffect(U,Q)},ft.useMemo=function(U,Q){return le.current.useMemo(U,Q)},ft.useReducer=function(U,Q,Ee){return le.current.useReducer(U,Q,Ee)},ft.useRef=function(U){return le.current.useRef(U)},ft.useState=function(U){return le.current.useState(U)},ft.useSyncExternalStore=function(U,Q,Ee){return le.current.useSyncExternalStore(U,Q,Ee)},ft.useTransition=function(){return le.current.useTransition()},ft.version="18.3.1",ft}var yp;function kd(){return yp||(yp=1,hu.exports=L_()),hu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function N_(){if(Sp)return Ca;Sp=1;var s=kd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,h,m){var g,v={},x=null,S=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!c.hasOwnProperty(g)&&(v[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:f,key:x,ref:S,props:v,_owner:o.current}}return Ca.Fragment=n,Ca.jsx=d,Ca.jsxs=d,Ca}var Mp;function D_(){return Mp||(Mp=1,fu.exports=N_()),fu.exports}var R=D_(),Ze=kd();const I_=Om(Ze);var Ko={},pu={exports:{}},Rn={},mu={exports:{}},gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function U_(){return Ep||(Ep=1,(function(s){function e(B,ue){var ee=B.length;B.push(ue);e:for(;0<ee;){var U=ee-1>>>1,Q=B[U];if(0<o(Q,ue))B[U]=ue,B[ee]=Q,ee=U;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ue=B[0],ee=B.pop();if(ee!==ue){B[0]=ee;e:for(var U=0,Q=B.length,Ee=Q>>>1;U<Ee;){var $=2*(U+1)-1,fe=B[$],we=$+1,xe=B[we];if(0>o(fe,ee))we<Q&&0>o(xe,fe)?(B[U]=xe,B[we]=ee,U=we):(B[U]=fe,B[$]=ee,U=$);else if(we<Q&&0>o(xe,ee))B[U]=xe,B[we]=ee,U=we;else break e}}return ue}function o(B,ue){var ee=B.sortIndex-ue.sortIndex;return ee!==0?ee:B.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var h=[],m=[],g=1,v=null,x=3,S=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(B){for(var ue=n(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=B)r(m),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=n(m)}}function b(B){if(w=!1,N(B),!E)if(n(h)!==null)E=!0,ae(q);else{var ue=n(m);ue!==null&&le(b,ue.startTime-B)}}function q(B,ue){E=!1,w&&(w=!1,_(k),k=-1),S=!0;var ee=x;try{for(N(ue),v=n(h);v!==null&&(!(v.expirationTime>ue)||B&&!F());){var U=v.callback;if(typeof U=="function"){v.callback=null,x=v.priorityLevel;var Q=U(v.expirationTime<=ue);ue=s.unstable_now(),typeof Q=="function"?v.callback=Q:v===n(h)&&r(h),N(ue)}else r(h);v=n(h)}if(v!==null)var Ee=!0;else{var $=n(m);$!==null&&le(b,$.startTime-ue),Ee=!1}return Ee}finally{v=null,x=ee,S=!1}}var H=!1,O=null,k=-1,P=5,A=-1;function F(){return!(s.unstable_now()-A<P)}function se(){if(O!==null){var B=s.unstable_now();A=B;var ue=!0;try{ue=O(!0,B)}finally{ue?Y():(H=!1,O=null)}}else H=!1}var Y;if(typeof I=="function")Y=function(){I(se)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,de=oe.port2;oe.port1.onmessage=se,Y=function(){de.postMessage(null)}}else Y=function(){y(se,0)};function ae(B){O=B,H||(H=!0,Y())}function le(B,ue){k=y(function(){B(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ae(q))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var ue=3;break;default:ue=x}var ee=x;x=ue;try{return B()}finally{x=ee}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,ue){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=x;x=B;try{return ue()}finally{x=ee}},s.unstable_scheduleCallback=function(B,ue,ee){var U=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?U+ee:U):ee=U,B){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ee+Q,B={id:g++,callback:ue,priorityLevel:B,startTime:ee,expirationTime:Q,sortIndex:-1},ee>U?(B.sortIndex=ee,e(m,B),n(h)===null&&B===n(m)&&(w?(_(k),k=-1):w=!0,le(b,ee-U))):(B.sortIndex=Q,e(h,B),E||S||(E=!0,ae(q))),B},s.unstable_shouldYield=F,s.unstable_wrapCallback=function(B){var ue=x;return function(){var ee=x;x=ue;try{return B.apply(this,arguments)}finally{x=ee}}}})(gu)),gu}var wp;function F_(){return wp||(wp=1,mu.exports=U_()),mu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function O_(){if(Tp)return Rn;Tp=1;var s=kd(),e=F_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function x(t){return h.call(v,t)?!0:h.call(g,t)?!1:m.test(t)?v[t]=!0:(g[t]=!0,!1)}function S(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,a,l){if(i===null||typeof i>"u"||S(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,a,l,u,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,I);y[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,I);y[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,I);y[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,i,a,l){var u=y.hasOwnProperty(i)?y[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,u,l)&&(a=null),l||u===null?x(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(i=u.attributeName,l=u.attributeNamespace,a===null?t.removeAttribute(i):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),H=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),F=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,U;function Q(t){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Ee=!1;function $(t,i){if(!t||Ee)return"";Ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var l=ne}Reflect.construct(t,[],i)}else{try{i.call()}catch(ne){l=ne}t.call(i.prototype)}else{try{throw Error()}catch(ne){l=ne}t()}}catch(ne){if(ne&&l&&typeof ne.stack=="string"){for(var u=ne.stack.split(`
`),p=l.stack.split(`
`),M=u.length-1,D=p.length-1;1<=M&&0<=D&&u[M]!==p[D];)D--;for(;1<=M&&0<=D;M--,D--)if(u[M]!==p[D]){if(M!==1||D!==1)do if(M--,D--,0>D||u[M]!==p[D]){var z=`
`+u[M].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=M&&0<=D);break}}}finally{Ee=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?Q(t):""}function fe(t){switch(t.tag){case 5:return Q(t.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return t=$(t.type,!1),t;case 11:return t=$(t.type.render,!1),t;case 1:return t=$(t.type,!0),t;default:return""}}function we(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case H:return"Portal";case P:return"Profiler";case k:return"StrictMode";case Y:return"Suspense";case oe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case F:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case se:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return i=t.displayName||null,i!==null?i:we(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return we(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(i);case 8:return i===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ie(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(t){var i=Ie(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Rt(t){t._valueTracker||(t._valueTracker=Qe(t))}function pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ie(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function Nt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function X(t,i){var a=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function pn(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=Ce(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&N(t,"checked",i,!1)}function ut(t,i){ht(t,i);var a=Ce(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?At(t,i.type,a):i.hasOwnProperty("defaultValue")&&At(t,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function At(t,i,a){(i!=="number"||Nt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var qe=Array.isArray;function L(t,i,a,l){if(t=t.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=i.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Ce(a),i=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function J(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(qe(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:Ce(a)}}function me(t,i){var a=Ce(i.value),l=Ce(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function _e(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Re,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Re.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ct(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Se[i]=Se[t]})});function Je(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Se.hasOwnProperty(t)&&Se[t]?(""+i).trim():i+"px"}function et(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,u=Je(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,u):t[a]=u}}var ke=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function rt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var be=null,ce=null,pe=null;function Ne(t){if(t=fa(t)){if(typeof be!="function")throw Error(n(280));var i=t.stateNode;i&&(i=uo(i),be(t.stateNode,t.type,i))}}function Le(t){ce?pe?pe.push(t):pe=[t]:ce=t}function st(){if(ce){var t=ce,i=pe;if(pe=ce=null,Ne(t),i)for(t=0;t<i.length;t++)Ne(i[t])}}function It(t,i){return t(i)}function Xt(){}var vt=!1;function Sn(t,i,a){if(vt)return t(i,a);vt=!0;try{return It(t,i,a)}finally{vt=!1,(ce!==null||pe!==null)&&(Xt(),st())}}function mn(t,i){var a=t.stateNode;if(a===null)return null;var l=uo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Zr=!1;if(f)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){Zr=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{Zr=!1}function Mi(t,i,a,l,u,p,M,D,z){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(a,ne)}catch(ve){this.onError(ve)}}var Ei=!1,Er=null,wr=!1,Xi=null,Wa={onError:function(t){Ei=!0,Er=t}};function Qr(t,i,a,l,u,p,M,D,z){Ei=!1,Er=null,Mi.apply(Wa,arguments)}function ja(t,i,a,l,u,p,M,D,z){if(Qr.apply(this,arguments),Ei){if(Ei){var ne=Er;Ei=!1,Er=null}else throw Error(n(198));wr||(wr=!0,Xi=ne)}}function ui(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Xa(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function qa(t){if(ui(t)!==t)throw Error(n(188))}function Il(t){var i=t.alternate;if(!i){if(i=ui(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var u=a.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===a)return qa(u),t;if(p===l)return qa(u),i;p=p.sibling}throw Error(n(188))}if(a.return!==l.return)a=u,l=p;else{for(var M=!1,D=u.child;D;){if(D===a){M=!0,a=u,l=p;break}if(D===l){M=!0,l=u,a=p;break}D=D.sibling}if(!M){for(D=p.child;D;){if(D===a){M=!0,a=p,l=u;break}if(D===l){M=!0,l=p,a=u;break}D=D.sibling}if(!M)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function C(t){return t=Il(t),t!==null?W(t):null}function W(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=W(t);if(i!==null)return i;t=t.sibling}return null}var ie=e.unstable_scheduleCallback,re=e.unstable_cancelCallback,j=e.unstable_shouldYield,Ae=e.unstable_requestPaint,Me=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,Be=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,We=e.unstable_LowPriority,gt=e.unstable_IdlePriority,Et=null,mt=null;function an(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Et,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:St,Xe=Math.log,$n=Math.LN2;function St(t){return t>>>=0,t===0?32:31-(Xe(t)/$n|0)|0}var on=64,Kn=4194304;function qt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function di(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,u=t.suspendedLanes,p=t.pingedLanes,M=a&268435455;if(M!==0){var D=M&~u;D!==0?l=qt(D):(p&=M,p!==0&&(l=qt(p)))}else M=a&~u,M!==0?l=qt(M):p!==0&&(l=qt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,p=i&-i,u>=p||u===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-at(i),u=1<<a,l|=t[a],i&=~u;return l}function Lt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kn(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-at(p),D=1<<M,z=u[M];z===-1?((D&a)===0||(D&l)!==0)&&(u[M]=Lt(D,i)):z<=i&&(t.expiredLanes|=D),p&=~D}}function wi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gn(){var t=on;return on<<=1,(on&4194240)===0&&(on=64),t}function zn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Mn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-at(i),t[i]=a}function Ya(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-at(a),p=1<<u;i[u]=0,l[u]=-1,t[u]=-1,a&=~p}}function Ul(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-at(a),u=1<<l;u&i|t[l]&i&&(t[l]|=i),a&=~u}}var Ct=0;function Kd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Zd,Fl,Qd,Jd,ef,Ol=!1,$a=[],qi=null,Yi=null,$i=null,Ks=new Map,Zs=new Map,Ki=[],Jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tf(t,i){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Ks.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(i.pointerId)}}function Qs(t,i,a,l,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},i!==null&&(i=fa(i),i!==null&&Fl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function e0(t,i,a,l,u){switch(i){case"focusin":return qi=Qs(qi,t,i,a,l,u),!0;case"dragenter":return Yi=Qs(Yi,t,i,a,l,u),!0;case"mouseover":return $i=Qs($i,t,i,a,l,u),!0;case"pointerover":var p=u.pointerId;return Ks.set(p,Qs(Ks.get(p)||null,t,i,a,l,u)),!0;case"gotpointercapture":return p=u.pointerId,Zs.set(p,Qs(Zs.get(p)||null,t,i,a,l,u)),!0}return!1}function nf(t){var i=Tr(t.target);if(i!==null){var a=ui(i);if(a!==null){if(i=a.tag,i===13){if(i=Xa(a),i!==null){t.blockedOn=i,ef(t.priority,function(){Qd(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ka(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=zl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);wt=l,a.target.dispatchEvent(l),wt=null}else return i=fa(a),i!==null&&Fl(i),t.blockedOn=a,!1;i.shift()}return!0}function rf(t,i,a){Ka(t)&&a.delete(i)}function t0(){Ol=!1,qi!==null&&Ka(qi)&&(qi=null),Yi!==null&&Ka(Yi)&&(Yi=null),$i!==null&&Ka($i)&&($i=null),Ks.forEach(rf),Zs.forEach(rf)}function Js(t,i){t.blockedOn===i&&(t.blockedOn=null,Ol||(Ol=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,t0)))}function ea(t){function i(u){return Js(u,t)}if(0<$a.length){Js($a[0],t);for(var a=1;a<$a.length;a++){var l=$a[a];l.blockedOn===t&&(l.blockedOn=null)}}for(qi!==null&&Js(qi,t),Yi!==null&&Js(Yi,t),$i!==null&&Js($i,t),Ks.forEach(i),Zs.forEach(i),a=0;a<Ki.length;a++)l=Ki[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Ki.length&&(a=Ki[0],a.blockedOn===null);)nf(a),a.blockedOn===null&&Ki.shift()}var Jr=b.ReactCurrentBatchConfig,Za=!0;function n0(t,i,a,l){var u=Ct,p=Jr.transition;Jr.transition=null;try{Ct=1,kl(t,i,a,l)}finally{Ct=u,Jr.transition=p}}function i0(t,i,a,l){var u=Ct,p=Jr.transition;Jr.transition=null;try{Ct=4,kl(t,i,a,l)}finally{Ct=u,Jr.transition=p}}function kl(t,i,a,l){if(Za){var u=zl(t,i,a,l);if(u===null)nc(t,i,l,Qa,a),tf(t,l);else if(e0(u,t,i,a,l))l.stopPropagation();else if(tf(t,l),i&4&&-1<Jg.indexOf(t)){for(;u!==null;){var p=fa(u);if(p!==null&&Zd(p),p=zl(t,i,a,l),p===null&&nc(t,i,l,Qa,a),p===u)break;u=p}u!==null&&l.stopPropagation()}else nc(t,i,l,null,a)}}var Qa=null;function zl(t,i,a,l){if(Qa=null,t=G(l),t=Tr(t),t!==null)if(i=ui(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Xa(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Qa=t,null}function sf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case Be:return 1;case tt:return 4;case it:case We:return 16;case gt:return 536870912;default:return 16}default:return 16}}var Zi=null,Bl=null,Ja=null;function af(){if(Ja)return Ja;var t,i=Bl,a=i.length,l,u="value"in Zi?Zi.value:Zi.textContent,p=u.length;for(t=0;t<a&&i[t]===u[t];t++);var M=a-t;for(l=1;l<=M&&i[a-l]===u[p-l];l++);return Ja=u.slice(t,1<l?1-l:void 0)}function eo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function to(){return!0}function of(){return!1}function Nn(t){function i(a,l,u,p,M){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?to:of,this.isPropagationStopped=of,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),i}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Nn(es),ta=ee({},es,{view:0,detail:0}),r0=Nn(ta),Vl,Gl,na,no=ee({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==na&&(na&&t.type==="mousemove"?(Vl=t.screenX-na.screenX,Gl=t.screenY-na.screenY):Gl=Vl=0,na=t),Vl)},movementY:function(t){return"movementY"in t?t.movementY:Gl}}),lf=Nn(no),s0=ee({},no,{dataTransfer:0}),a0=Nn(s0),o0=ee({},ta,{relatedTarget:0}),Wl=Nn(o0),l0=ee({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),c0=Nn(l0),u0=ee({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),d0=Nn(u0),f0=ee({},es,{data:0}),cf=Nn(f0),h0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=m0[t])?!!i[t]:!1}function jl(){return g0}var _0=ee({},ta,{key:function(t){if(t.key){var i=h0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=eo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?p0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(t){return t.type==="keypress"?eo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?eo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v0=Nn(_0),x0=ee({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uf=Nn(x0),y0=ee({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),S0=Nn(y0),M0=ee({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),E0=Nn(M0),w0=ee({},no,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),T0=Nn(w0),A0=[9,13,27,32],Xl=f&&"CompositionEvent"in window,ia=null;f&&"documentMode"in document&&(ia=document.documentMode);var C0=f&&"TextEvent"in window&&!ia,df=f&&(!Xl||ia&&8<ia&&11>=ia),ff=" ",hf=!1;function pf(t,i){switch(t){case"keyup":return A0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function R0(t,i){switch(t){case"compositionend":return mf(i);case"keypress":return i.which!==32?null:(hf=!0,ff);case"textInput":return t=i.data,t===ff&&hf?null:t;default:return null}}function b0(t,i){if(ts)return t==="compositionend"||!Xl&&pf(t,i)?(t=af(),Ja=Bl=Zi=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return df&&i.locale!=="ko"?null:i.data;default:return null}}var P0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!P0[t.type]:i==="textarea"}function _f(t,i,a,l){Le(l),i=oo(i,"onChange"),0<i.length&&(a=new Hl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var ra=null,sa=null;function L0(t){Uf(t,0)}function io(t){var i=as(t);if(pt(i))return t}function N0(t,i){if(t==="change")return i}var vf=!1;if(f){var ql;if(f){var Yl="oninput"in document;if(!Yl){var xf=document.createElement("div");xf.setAttribute("oninput","return;"),Yl=typeof xf.oninput=="function"}ql=Yl}else ql=!1;vf=ql&&(!document.documentMode||9<document.documentMode)}function yf(){ra&&(ra.detachEvent("onpropertychange",Sf),sa=ra=null)}function Sf(t){if(t.propertyName==="value"&&io(sa)){var i=[];_f(i,sa,t,G(t)),Sn(L0,i)}}function D0(t,i,a){t==="focusin"?(yf(),ra=i,sa=a,ra.attachEvent("onpropertychange",Sf)):t==="focusout"&&yf()}function I0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return io(sa)}function U0(t,i){if(t==="click")return io(i)}function F0(t,i){if(t==="input"||t==="change")return io(i)}function O0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:O0;function aa(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!h.call(i,u)||!Zn(t[u],i[u]))return!1}return!0}function Mf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ef(t,i){var a=Mf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Mf(a)}}function wf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?wf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Tf(){for(var t=window,i=Nt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Nt(t.document)}return i}function $l(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function k0(t){var i=Tf(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&wf(a.ownerDocument.documentElement,a)){if(l!==null&&$l(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,p=Math.min(l.start,u);l=l.end===void 0?p:Math.min(l.end,u),!t.extend&&p>l&&(u=l,l=p,p=u),u=Ef(a,p);var M=Ef(a,l);u&&M&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var z0=f&&"documentMode"in document&&11>=document.documentMode,ns=null,Kl=null,oa=null,Zl=!1;function Af(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zl||ns==null||ns!==Nt(l)||(l=ns,"selectionStart"in l&&$l(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oa&&aa(oa,l)||(oa=l,l=oo(Kl,"onSelect"),0<l.length&&(i=new Hl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=ns)))}function ro(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var is={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},Ql={},Cf={};f&&(Cf=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function so(t){if(Ql[t])return Ql[t];if(!is[t])return t;var i=is[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Cf)return Ql[t]=i[a];return t}var Rf=so("animationend"),bf=so("animationiteration"),Pf=so("animationstart"),Lf=so("transitionend"),Nf=new Map,Df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){Nf.set(t,i),c(i,[t])}for(var Jl=0;Jl<Df.length;Jl++){var ec=Df[Jl],B0=ec.toLowerCase(),H0=ec[0].toUpperCase()+ec.slice(1);Qi(B0,"on"+H0)}Qi(Rf,"onAnimationEnd"),Qi(bf,"onAnimationIteration"),Qi(Pf,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(Lf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V0=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function If(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,ja(l,i,void 0,t),t.currentTarget=null}function Uf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],u=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],z=D.instance,ne=D.currentTarget;if(D=D.listener,z!==p&&u.isPropagationStopped())break e;If(u,D,ne),p=z}else for(M=0;M<l.length;M++){if(D=l[M],z=D.instance,ne=D.currentTarget,D=D.listener,z!==p&&u.isPropagationStopped())break e;If(u,D,ne),p=z}}}if(wr)throw t=Xi,wr=!1,Xi=null,t}function Ut(t,i){var a=i[lc];a===void 0&&(a=i[lc]=new Set);var l=t+"__bubble";a.has(l)||(Ff(i,t,2,!1),a.add(l))}function tc(t,i,a){var l=0;i&&(l|=4),Ff(a,t,l,i)}var ao="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[ao]){t[ao]=!0,r.forEach(function(a){a!=="selectionchange"&&(V0.has(a)||tc(a,!1,t),tc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ao]||(i[ao]=!0,tc("selectionchange",!1,i))}}function Ff(t,i,a,l){switch(sf(i)){case 1:var u=n0;break;case 4:u=i0;break;default:u=kl}a=u.bind(null,i,a,t),u=void 0,!Zr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,a,{capture:!0,passive:u}):t.addEventListener(i,a,!0):u!==void 0?t.addEventListener(i,a,{passive:u}):t.addEventListener(i,a,!1)}function nc(t,i,a,l,u){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===u||D.nodeType===8&&D.parentNode===u)break;if(M===4)for(M=l.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===u||z.nodeType===8&&z.parentNode===u))return;M=M.return}for(;D!==null;){if(M=Tr(D),M===null)return;if(z=M.tag,z===5||z===6){l=p=M;continue e}D=D.parentNode}}l=l.return}Sn(function(){var ne=p,ve=G(a),ye=[];e:{var ge=Nf.get(t);if(ge!==void 0){var De=Hl,ze=t;switch(t){case"keypress":if(eo(a)===0)break e;case"keydown":case"keyup":De=v0;break;case"focusin":ze="focus",De=Wl;break;case"focusout":ze="blur",De=Wl;break;case"beforeblur":case"afterblur":De=Wl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=a0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=S0;break;case Rf:case bf:case Pf:De=c0;break;case Lf:De=E0;break;case"scroll":De=r0;break;case"wheel":De=T0;break;case"copy":case"cut":case"paste":De=d0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=uf}var He=(i&4)!==0,Gt=!He&&t==="scroll",K=He?ge!==null?ge+"Capture":null:ge;He=[];for(var V=ne,Z;V!==null;){Z=V;var Te=Z.stateNode;if(Z.tag===5&&Te!==null&&(Z=Te,K!==null&&(Te=mn(V,K),Te!=null&&He.push(ua(V,Te,Z)))),Gt)break;V=V.return}0<He.length&&(ge=new De(ge,ze,null,a,ve),ye.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",ge&&a!==wt&&(ze=a.relatedTarget||a.fromElement)&&(Tr(ze)||ze[Ti]))break e;if((De||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,De?(ze=a.relatedTarget||a.toElement,De=ne,ze=ze?Tr(ze):null,ze!==null&&(Gt=ui(ze),ze!==Gt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(De=null,ze=ne),De!==ze)){if(He=lf,Te="onMouseLeave",K="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(He=uf,Te="onPointerLeave",K="onPointerEnter",V="pointer"),Gt=De==null?ge:as(De),Z=ze==null?ge:as(ze),ge=new He(Te,V+"leave",De,a,ve),ge.target=Gt,ge.relatedTarget=Z,Te=null,Tr(ve)===ne&&(He=new He(K,V+"enter",ze,a,ve),He.target=Z,He.relatedTarget=Gt,Te=He),Gt=Te,De&&ze)t:{for(He=De,K=ze,V=0,Z=He;Z;Z=rs(Z))V++;for(Z=0,Te=K;Te;Te=rs(Te))Z++;for(;0<V-Z;)He=rs(He),V--;for(;0<Z-V;)K=rs(K),Z--;for(;V--;){if(He===K||K!==null&&He===K.alternate)break t;He=rs(He),K=rs(K)}He=null}else He=null;De!==null&&Of(ye,ge,De,He,!1),ze!==null&&Gt!==null&&Of(ye,Gt,ze,He,!0)}}e:{if(ge=ne?as(ne):window,De=ge.nodeName&&ge.nodeName.toLowerCase(),De==="select"||De==="input"&&ge.type==="file")var je=N0;else if(gf(ge))if(vf)je=F0;else{je=I0;var $e=D0}else(De=ge.nodeName)&&De.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=U0);if(je&&(je=je(t,ne))){_f(ye,je,a,ve);break e}$e&&$e(t,ge,ne),t==="focusout"&&($e=ge._wrapperState)&&$e.controlled&&ge.type==="number"&&At(ge,"number",ge.value)}switch($e=ne?as(ne):window,t){case"focusin":(gf($e)||$e.contentEditable==="true")&&(ns=$e,Kl=ne,oa=null);break;case"focusout":oa=Kl=ns=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,Af(ye,a,ve);break;case"selectionchange":if(z0)break;case"keydown":case"keyup":Af(ye,a,ve)}var Ke;if(Xl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ts?pf(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(df&&a.locale!=="ko"&&(ts||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ts&&(Ke=af()):(Zi=ve,Bl="value"in Zi?Zi.value:Zi.textContent,ts=!0)),$e=oo(ne,nt),0<$e.length&&(nt=new cf(nt,t,null,a,ve),ye.push({event:nt,listeners:$e}),Ke?nt.data=Ke:(Ke=mf(a),Ke!==null&&(nt.data=Ke)))),(Ke=C0?R0(t,a):b0(t,a))&&(ne=oo(ne,"onBeforeInput"),0<ne.length&&(ve=new cf("onBeforeInput","beforeinput",null,a,ve),ye.push({event:ve,listeners:ne}),ve.data=Ke))}Uf(ye,i)})}function ua(t,i,a){return{instance:t,listener:i,currentTarget:a}}function oo(t,i){for(var a=i+"Capture",l=[];t!==null;){var u=t,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=mn(t,a),p!=null&&l.unshift(ua(t,p,u)),p=mn(t,i),p!=null&&l.push(ua(t,p,u))),t=t.return}return l}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Of(t,i,a,l,u){for(var p=i._reactName,M=[];a!==null&&a!==l;){var D=a,z=D.alternate,ne=D.stateNode;if(z!==null&&z===l)break;D.tag===5&&ne!==null&&(D=ne,u?(z=mn(a,p),z!=null&&M.unshift(ua(a,z,D))):u||(z=mn(a,p),z!=null&&M.push(ua(a,z,D)))),a=a.return}M.length!==0&&t.push({event:i,listeners:M})}var G0=/\r\n?/g,W0=/\u0000|\uFFFD/g;function kf(t){return(typeof t=="string"?t:""+t).replace(G0,`
`).replace(W0,"")}function lo(t,i,a){if(i=kf(i),kf(t)!==i&&a)throw Error(n(425))}function co(){}var ic=null,rc=null;function sc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ac=typeof setTimeout=="function"?setTimeout:void 0,j0=typeof clearTimeout=="function"?clearTimeout:void 0,zf=typeof Promise=="function"?Promise:void 0,X0=typeof queueMicrotask=="function"?queueMicrotask:typeof zf<"u"?function(t){return zf.resolve(null).then(t).catch(q0)}:ac;function q0(t){setTimeout(function(){throw t})}function oc(t,i){var a=i,l=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(l===0){t.removeChild(u),ea(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=u}while(a);ea(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Bf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),fi="__reactFiber$"+ss,da="__reactProps$"+ss,Ti="__reactContainer$"+ss,lc="__reactEvents$"+ss,Y0="__reactListeners$"+ss,$0="__reactHandles$"+ss;function Tr(t){var i=t[fi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ti]||a[fi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Bf(t);t!==null;){if(a=t[fi])return a;t=Bf(t)}return i}t=a,a=t.parentNode}return null}function fa(t){return t=t[fi]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function uo(t){return t[da]||null}var cc=[],os=-1;function er(t){return{current:t}}function Ft(t){0>os||(t.current=cc[os],cc[os]=null,os--)}function Dt(t,i){os++,cc[os]=t.current,t.current=i}var tr={},ln=er(tr),En=er(!1),Ar=tr;function ls(t,i){var a=t.type.contextTypes;if(!a)return tr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in a)u[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function wn(t){return t=t.childContextTypes,t!=null}function fo(){Ft(En),Ft(ln)}function Hf(t,i,a){if(ln.current!==tr)throw Error(n(168));Dt(ln,i),Dt(En,a)}function Vf(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,xe(t)||"Unknown",u));return ee({},a,l)}function ho(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Ar=ln.current,Dt(ln,t),Dt(En,En.current),!0}function Gf(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=Vf(t,i,Ar),l.__reactInternalMemoizedMergedChildContext=t,Ft(En),Ft(ln),Dt(ln,t)):Ft(En),Dt(En,a)}var Ai=null,po=!1,uc=!1;function Wf(t){Ai===null?Ai=[t]:Ai.push(t)}function K0(t){po=!0,Wf(t)}function nr(){if(!uc&&Ai!==null){uc=!0;var t=0,i=Ct;try{var a=Ai;for(Ct=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ai=null,po=!1}catch(u){throw Ai!==null&&(Ai=Ai.slice(t+1)),ie(Be,nr),u}finally{Ct=i,uc=!1}}return null}var cs=[],us=0,mo=null,go=0,Bn=[],Hn=0,Cr=null,Ci=1,Ri="";function Rr(t,i){cs[us++]=go,cs[us++]=mo,mo=t,go=i}function jf(t,i,a){Bn[Hn++]=Ci,Bn[Hn++]=Ri,Bn[Hn++]=Cr,Cr=t;var l=Ci;t=Ri;var u=32-at(l)-1;l&=~(1<<u),a+=1;var p=32-at(i)+u;if(30<p){var M=u-u%5;p=(l&(1<<M)-1).toString(32),l>>=M,u-=M,Ci=1<<32-at(i)+u|a<<u|l,Ri=p+t}else Ci=1<<p|a<<u|l,Ri=t}function dc(t){t.return!==null&&(Rr(t,1),jf(t,1,0))}function fc(t){for(;t===mo;)mo=cs[--us],cs[us]=null,go=cs[--us],cs[us]=null;for(;t===Cr;)Cr=Bn[--Hn],Bn[Hn]=null,Ri=Bn[--Hn],Bn[Hn]=null,Ci=Bn[--Hn],Bn[Hn]=null}var Dn=null,In=null,Ot=!1,Qn=null;function Xf(t,i){var a=jn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function qf(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Dn=t,In=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Dn=t,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Cr!==null?{id:Ci,overflow:Ri}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=jn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Dn=t,In=null,!0):!1;default:return!1}}function hc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pc(t){if(Ot){var i=In;if(i){var a=i;if(!qf(t,i)){if(hc(t))throw Error(n(418));i=Ji(a.nextSibling);var l=Dn;i&&qf(t,i)?Xf(l,a):(t.flags=t.flags&-4097|2,Ot=!1,Dn=t)}}else{if(hc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,Dn=t}}}function Yf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function _o(t){if(t!==Dn)return!1;if(!Ot)return Yf(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!sc(t.type,t.memoizedProps)),i&&(i=In)){if(hc(t))throw $f(),Error(n(418));for(;i;)Xf(t,i),i=Ji(i.nextSibling)}if(Yf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){In=Ji(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}In=null}}else In=Dn?Ji(t.stateNode.nextSibling):null;return!0}function $f(){for(var t=In;t;)t=Ji(t.nextSibling)}function ds(){In=Dn=null,Ot=!1}function mc(t){Qn===null?Qn=[t]:Qn.push(t)}var Z0=b.ReactCurrentBatchConfig;function ha(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var u=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var D=u.refs;M===null?delete D[p]:D[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function vo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Kf(t){var i=t._init;return i(t._payload)}function Zf(t){function i(K,V){if(t){var Z=K.deletions;Z===null?(K.deletions=[V],K.flags|=16):Z.push(V)}}function a(K,V){if(!t)return null;for(;V!==null;)i(K,V),V=V.sibling;return null}function l(K,V){for(K=new Map;V!==null;)V.key!==null?K.set(V.key,V):K.set(V.index,V),V=V.sibling;return K}function u(K,V){return K=ur(K,V),K.index=0,K.sibling=null,K}function p(K,V,Z){return K.index=Z,t?(Z=K.alternate,Z!==null?(Z=Z.index,Z<V?(K.flags|=2,V):Z):(K.flags|=2,V)):(K.flags|=1048576,V)}function M(K){return t&&K.alternate===null&&(K.flags|=2),K}function D(K,V,Z,Te){return V===null||V.tag!==6?(V=au(Z,K.mode,Te),V.return=K,V):(V=u(V,Z),V.return=K,V)}function z(K,V,Z,Te){var je=Z.type;return je===O?ve(K,V,Z.props.children,Te,Z.key):V!==null&&(V.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ae&&Kf(je)===V.type)?(Te=u(V,Z.props),Te.ref=ha(K,V,Z),Te.return=K,Te):(Te=Vo(Z.type,Z.key,Z.props,null,K.mode,Te),Te.ref=ha(K,V,Z),Te.return=K,Te)}function ne(K,V,Z,Te){return V===null||V.tag!==4||V.stateNode.containerInfo!==Z.containerInfo||V.stateNode.implementation!==Z.implementation?(V=ou(Z,K.mode,Te),V.return=K,V):(V=u(V,Z.children||[]),V.return=K,V)}function ve(K,V,Z,Te,je){return V===null||V.tag!==7?(V=Fr(Z,K.mode,Te,je),V.return=K,V):(V=u(V,Z),V.return=K,V)}function ye(K,V,Z){if(typeof V=="string"&&V!==""||typeof V=="number")return V=au(""+V,K.mode,Z),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case q:return Z=Vo(V.type,V.key,V.props,null,K.mode,Z),Z.ref=ha(K,null,V),Z.return=K,Z;case H:return V=ou(V,K.mode,Z),V.return=K,V;case ae:var Te=V._init;return ye(K,Te(V._payload),Z)}if(qe(V)||ue(V))return V=Fr(V,K.mode,Z,null),V.return=K,V;vo(K,V)}return null}function ge(K,V,Z,Te){var je=V!==null?V.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return je!==null?null:D(K,V,""+Z,Te);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case q:return Z.key===je?z(K,V,Z,Te):null;case H:return Z.key===je?ne(K,V,Z,Te):null;case ae:return je=Z._init,ge(K,V,je(Z._payload),Te)}if(qe(Z)||ue(Z))return je!==null?null:ve(K,V,Z,Te,null);vo(K,Z)}return null}function De(K,V,Z,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return K=K.get(Z)||null,D(V,K,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case q:return K=K.get(Te.key===null?Z:Te.key)||null,z(V,K,Te,je);case H:return K=K.get(Te.key===null?Z:Te.key)||null,ne(V,K,Te,je);case ae:var $e=Te._init;return De(K,V,Z,$e(Te._payload),je)}if(qe(Te)||ue(Te))return K=K.get(Z)||null,ve(V,K,Te,je,null);vo(V,Te)}return null}function ze(K,V,Z,Te){for(var je=null,$e=null,Ke=V,nt=V=0,en=null;Ke!==null&&nt<Z.length;nt++){Ke.index>nt?(en=Ke,Ke=null):en=Ke.sibling;var Mt=ge(K,Ke,Z[nt],Te);if(Mt===null){Ke===null&&(Ke=en);break}t&&Ke&&Mt.alternate===null&&i(K,Ke),V=p(Mt,V,nt),$e===null?je=Mt:$e.sibling=Mt,$e=Mt,Ke=en}if(nt===Z.length)return a(K,Ke),Ot&&Rr(K,nt),je;if(Ke===null){for(;nt<Z.length;nt++)Ke=ye(K,Z[nt],Te),Ke!==null&&(V=p(Ke,V,nt),$e===null?je=Ke:$e.sibling=Ke,$e=Ke);return Ot&&Rr(K,nt),je}for(Ke=l(K,Ke);nt<Z.length;nt++)en=De(Ke,K,nt,Z[nt],Te),en!==null&&(t&&en.alternate!==null&&Ke.delete(en.key===null?nt:en.key),V=p(en,V,nt),$e===null?je=en:$e.sibling=en,$e=en);return t&&Ke.forEach(function(dr){return i(K,dr)}),Ot&&Rr(K,nt),je}function He(K,V,Z,Te){var je=ue(Z);if(typeof je!="function")throw Error(n(150));if(Z=je.call(Z),Z==null)throw Error(n(151));for(var $e=je=null,Ke=V,nt=V=0,en=null,Mt=Z.next();Ke!==null&&!Mt.done;nt++,Mt=Z.next()){Ke.index>nt?(en=Ke,Ke=null):en=Ke.sibling;var dr=ge(K,Ke,Mt.value,Te);if(dr===null){Ke===null&&(Ke=en);break}t&&Ke&&dr.alternate===null&&i(K,Ke),V=p(dr,V,nt),$e===null?je=dr:$e.sibling=dr,$e=dr,Ke=en}if(Mt.done)return a(K,Ke),Ot&&Rr(K,nt),je;if(Ke===null){for(;!Mt.done;nt++,Mt=Z.next())Mt=ye(K,Mt.value,Te),Mt!==null&&(V=p(Mt,V,nt),$e===null?je=Mt:$e.sibling=Mt,$e=Mt);return Ot&&Rr(K,nt),je}for(Ke=l(K,Ke);!Mt.done;nt++,Mt=Z.next())Mt=De(Ke,K,nt,Mt.value,Te),Mt!==null&&(t&&Mt.alternate!==null&&Ke.delete(Mt.key===null?nt:Mt.key),V=p(Mt,V,nt),$e===null?je=Mt:$e.sibling=Mt,$e=Mt);return t&&Ke.forEach(function(P_){return i(K,P_)}),Ot&&Rr(K,nt),je}function Gt(K,V,Z,Te){if(typeof Z=="object"&&Z!==null&&Z.type===O&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case q:e:{for(var je=Z.key,$e=V;$e!==null;){if($e.key===je){if(je=Z.type,je===O){if($e.tag===7){a(K,$e.sibling),V=u($e,Z.props.children),V.return=K,K=V;break e}}else if($e.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ae&&Kf(je)===$e.type){a(K,$e.sibling),V=u($e,Z.props),V.ref=ha(K,$e,Z),V.return=K,K=V;break e}a(K,$e);break}else i(K,$e);$e=$e.sibling}Z.type===O?(V=Fr(Z.props.children,K.mode,Te,Z.key),V.return=K,K=V):(Te=Vo(Z.type,Z.key,Z.props,null,K.mode,Te),Te.ref=ha(K,V,Z),Te.return=K,K=Te)}return M(K);case H:e:{for($e=Z.key;V!==null;){if(V.key===$e)if(V.tag===4&&V.stateNode.containerInfo===Z.containerInfo&&V.stateNode.implementation===Z.implementation){a(K,V.sibling),V=u(V,Z.children||[]),V.return=K,K=V;break e}else{a(K,V);break}else i(K,V);V=V.sibling}V=ou(Z,K.mode,Te),V.return=K,K=V}return M(K);case ae:return $e=Z._init,Gt(K,V,$e(Z._payload),Te)}if(qe(Z))return ze(K,V,Z,Te);if(ue(Z))return He(K,V,Z,Te);vo(K,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,V!==null&&V.tag===6?(a(K,V.sibling),V=u(V,Z),V.return=K,K=V):(a(K,V),V=au(Z,K.mode,Te),V.return=K,K=V),M(K)):a(K,V)}return Gt}var fs=Zf(!0),Qf=Zf(!1),xo=er(null),yo=null,hs=null,gc=null;function _c(){gc=hs=yo=null}function vc(t){var i=xo.current;Ft(xo),t._currentValue=i}function xc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function ps(t,i){yo=t,gc=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Tn=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(gc!==t)if(t={context:t,memoizedValue:i,next:null},hs===null){if(yo===null)throw Error(n(308));hs=t,yo.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return i}var br=null;function yc(t){br===null?br=[t]:br.push(t)}function Jf(t,i,a,l){var u=i.interleaved;return u===null?(a.next=a,yc(i)):(a.next=u.next,u.next=a),i.interleaved=a,bi(t,l)}function bi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var ir=!1;function Sc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(xt&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,bi(t,a)}return u=l.interleaved,u===null?(i.next=i,yc(l)):(i.next=u.next,u.next=i),l.interleaved=i,bi(t,a)}function So(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Ul(t,a)}}function th(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?u=p=M:p=p.next=M,a=a.next}while(a!==null);p===null?u=p=i:p=p.next=i}else u=p=i;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Mo(t,i,a,l){var u=t.updateQueue;ir=!1;var p=u.firstBaseUpdate,M=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var z=D,ne=z.next;z.next=null,M===null?p=ne:M.next=ne,M=z;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,D=ve.lastBaseUpdate,D!==M&&(D===null?ve.firstBaseUpdate=ne:D.next=ne,ve.lastBaseUpdate=z))}if(p!==null){var ye=u.baseState;M=0,ve=ne=z=null,D=p;do{var ge=D.lane,De=D.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:De,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ze=t,He=D;switch(ge=i,De=a,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){ye=ze.call(De,ye,ge);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,ge=typeof ze=="function"?ze.call(De,ye,ge):ze,ge==null)break e;ye=ee({},ye,ge);break e;case 2:ir=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,ge=u.effects,ge===null?u.effects=[D]:ge.push(D))}else De={eventTime:De,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ve===null?(ne=ve=De,z=ye):ve=ve.next=De,M|=ge;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,u.lastBaseUpdate=ge,u.shared.pending=null}}while(!0);if(ve===null&&(z=ye),u.baseState=z,u.firstBaseUpdate=ne,u.lastBaseUpdate=ve,i=u.shared.interleaved,i!==null){u=i;do M|=u.lane,u=u.next;while(u!==i)}else p===null&&(u.shared.lanes=0);Nr|=M,t.lanes=M,t.memoizedState=ye}}function nh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=a,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var pa={},hi=er(pa),ma=er(pa),ga=er(pa);function Pr(t){if(t===pa)throw Error(n(174));return t}function Mc(t,i){switch(Dt(ga,i),Dt(ma,t),Dt(hi,pa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}Ft(hi),Dt(hi,i)}function ms(){Ft(hi),Ft(ma),Ft(ga)}function ih(t){Pr(ga.current);var i=Pr(hi.current),a=Ve(i,t.type);i!==a&&(Dt(ma,t),Dt(hi,a))}function Ec(t){ma.current===t&&(Ft(hi),Ft(ma))}var kt=er(0);function Eo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var wc=[];function Tc(){for(var t=0;t<wc.length;t++)wc[t]._workInProgressVersionPrimary=null;wc.length=0}var wo=b.ReactCurrentDispatcher,Ac=b.ReactCurrentBatchConfig,Lr=0,zt=null,Yt=null,Qt=null,To=!1,_a=!1,va=0,Q0=0;function cn(){throw Error(n(321))}function Cc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Zn(t[a],i[a]))return!1;return!0}function Rc(t,i,a,l,u,p){if(Lr=p,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,wo.current=t===null||t.memoizedState===null?n_:i_,t=a(l,u),_a){p=0;do{if(_a=!1,va=0,25<=p)throw Error(n(301));p+=1,Qt=Yt=null,i.updateQueue=null,wo.current=r_,t=a(l,u)}while(_a)}if(wo.current=Ro,i=Yt!==null&&Yt.next!==null,Lr=0,Qt=Yt=zt=null,To=!1,i)throw Error(n(300));return t}function bc(){var t=va!==0;return va=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?zt.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Gn(){if(Yt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=Qt===null?zt.memoizedState:Qt.next;if(i!==null)Qt=i,Yt=t;else{if(t===null)throw Error(n(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Qt===null?zt.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function xa(t,i){return typeof i=="function"?i(t):i}function Pc(t){var i=Gn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=Yt,u=l.baseQueue,p=a.pending;if(p!==null){if(u!==null){var M=u.next;u.next=p.next,p.next=M}l.baseQueue=u=p,a.pending=null}if(u!==null){p=u.next,l=l.baseState;var D=M=null,z=null,ne=p;do{var ve=ne.lane;if((Lr&ve)===ve)z!==null&&(z=z.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),l=ne.hasEagerState?ne.eagerState:t(l,ne.action);else{var ye={lane:ve,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};z===null?(D=z=ye,M=l):z=z.next=ye,zt.lanes|=ve,Nr|=ve}ne=ne.next}while(ne!==null&&ne!==p);z===null?M=l:z.next=D,Zn(l,i.memoizedState)||(Tn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=z,a.lastRenderedState=l}if(t=a.interleaved,t!==null){u=t;do p=u.lane,zt.lanes|=p,Nr|=p,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Lc(t){var i=Gn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,u=a.pending,p=i.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do p=t(p,M.action),M=M.next;while(M!==u);Zn(p,i.memoizedState)||(Tn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,l]}function rh(){}function sh(t,i){var a=zt,l=Gn(),u=i(),p=!Zn(l.memoizedState,u);if(p&&(l.memoizedState=u,Tn=!0),l=l.queue,Nc(lh.bind(null,a,l,t),[t]),l.getSnapshot!==i||p||Qt!==null&&Qt.memoizedState.tag&1){if(a.flags|=2048,ya(9,oh.bind(null,a,l,u,i),void 0,null),Jt===null)throw Error(n(349));(Lr&30)!==0||ah(a,i,u)}return u}function ah(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function oh(t,i,a,l){i.value=a,i.getSnapshot=l,ch(i)&&uh(t)}function lh(t,i,a){return a(function(){ch(i)&&uh(t)})}function ch(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Zn(t,a)}catch{return!0}}function uh(t){var i=bi(t,1);i!==null&&ni(i,t,1,-1)}function dh(t){var i=pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},i.queue=t,t=t.dispatch=t_.bind(null,zt,t),[i.memoizedState,t]}function ya(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function fh(){return Gn().memoizedState}function Ao(t,i,a,l){var u=pi();zt.flags|=t,u.memoizedState=ya(1|i,a,void 0,l===void 0?null:l)}function Co(t,i,a,l){var u=Gn();l=l===void 0?null:l;var p=void 0;if(Yt!==null){var M=Yt.memoizedState;if(p=M.destroy,l!==null&&Cc(l,M.deps)){u.memoizedState=ya(i,a,p,l);return}}zt.flags|=t,u.memoizedState=ya(1|i,a,p,l)}function hh(t,i){return Ao(8390656,8,t,i)}function Nc(t,i){return Co(2048,8,t,i)}function ph(t,i){return Co(4,2,t,i)}function mh(t,i){return Co(4,4,t,i)}function gh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function _h(t,i,a){return a=a!=null?a.concat([t]):null,Co(4,4,gh.bind(null,i,t),a)}function Dc(){}function vh(t,i){var a=Gn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Cc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function xh(t,i){var a=Gn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Cc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function yh(t,i,a){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,Tn=!0),t.memoizedState=a):(Zn(a,i)||(a=gn(),zt.lanes|=a,Nr|=a,t.baseState=!0),i)}function J0(t,i){var a=Ct;Ct=a!==0&&4>a?a:4,t(!0);var l=Ac.transition;Ac.transition={};try{t(!1),i()}finally{Ct=a,Ac.transition=l}}function Sh(){return Gn().memoizedState}function e_(t,i,a){var l=lr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Mh(t))Eh(i,a);else if(a=Jf(t,i,a,l),a!==null){var u=vn();ni(a,t,l,u),wh(a,i,l)}}function t_(t,i,a){var l=lr(t),u={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mh(t))Eh(i,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,D=p(M,a);if(u.hasEagerState=!0,u.eagerState=D,Zn(D,M)){var z=i.interleaved;z===null?(u.next=u,yc(i)):(u.next=z.next,z.next=u),i.interleaved=u;return}}catch{}finally{}a=Jf(t,i,u,l),a!==null&&(u=vn(),ni(a,t,l,u),wh(a,i,l))}}function Mh(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function Eh(t,i){_a=To=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function wh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Ul(t,a)}}var Ro={readContext:Vn,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},n_={readContext:Vn,useCallback:function(t,i){return pi().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:hh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Ao(4194308,4,gh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Ao(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ao(4,2,t,i)},useMemo:function(t,i){var a=pi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=pi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=e_.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=pi();return t={current:t},i.memoizedState=t},useState:dh,useDebugValue:Dc,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=dh(!1),i=t[0];return t=J0.bind(null,t[1]),pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=zt,u=pi();if(Ot){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),Jt===null)throw Error(n(349));(Lr&30)!==0||ah(l,i,a)}u.memoizedState=a;var p={value:a,getSnapshot:i};return u.queue=p,hh(lh.bind(null,l,p,t),[t]),l.flags|=2048,ya(9,oh.bind(null,l,p,a,i),void 0,null),a},useId:function(){var t=pi(),i=Jt.identifierPrefix;if(Ot){var a=Ri,l=Ci;a=(l&~(1<<32-at(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=va++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Q0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},i_={readContext:Vn,useCallback:vh,useContext:Vn,useEffect:Nc,useImperativeHandle:_h,useInsertionEffect:ph,useLayoutEffect:mh,useMemo:xh,useReducer:Pc,useRef:fh,useState:function(){return Pc(xa)},useDebugValue:Dc,useDeferredValue:function(t){var i=Gn();return yh(i,Yt.memoizedState,t)},useTransition:function(){var t=Pc(xa)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:rh,useSyncExternalStore:sh,useId:Sh,unstable_isNewReconciler:!1},r_={readContext:Vn,useCallback:vh,useContext:Vn,useEffect:Nc,useImperativeHandle:_h,useInsertionEffect:ph,useLayoutEffect:mh,useMemo:xh,useReducer:Lc,useRef:fh,useState:function(){return Lc(xa)},useDebugValue:Dc,useDeferredValue:function(t){var i=Gn();return Yt===null?i.memoizedState=t:yh(i,Yt.memoizedState,t)},useTransition:function(){var t=Lc(xa)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:rh,useSyncExternalStore:sh,useId:Sh,unstable_isNewReconciler:!1};function Jn(t,i){if(t&&t.defaultProps){i=ee({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Ic(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:ee({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var bo={isMounted:function(t){return(t=t._reactInternals)?ui(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=vn(),u=lr(t),p=Pi(l,u);p.payload=i,a!=null&&(p.callback=a),i=rr(t,p,u),i!==null&&(ni(i,t,u,l),So(i,t,u))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=vn(),u=lr(t),p=Pi(l,u);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=rr(t,p,u),i!==null&&(ni(i,t,u,l),So(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=vn(),l=lr(t),u=Pi(a,l);u.tag=2,i!=null&&(u.callback=i),i=rr(t,u,l),i!==null&&(ni(i,t,l,a),So(i,t,l))}};function Th(t,i,a,l,u,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!aa(a,l)||!aa(u,p):!0}function Ah(t,i,a){var l=!1,u=tr,p=i.contextType;return typeof p=="object"&&p!==null?p=Vn(p):(u=wn(i)?Ar:ln.current,l=i.contextTypes,p=(l=l!=null)?ls(t,u):tr),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=bo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=p),i}function Ch(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&bo.enqueueReplaceState(i,i.state,null)}function Uc(t,i,a,l){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},Sc(t);var p=i.contextType;typeof p=="object"&&p!==null?u.context=Vn(p):(p=wn(i)?Ar:ln.current,u.context=ls(t,p)),u.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Ic(t,i,p,a),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&bo.enqueueReplaceState(u,u.state,null),Mo(t,a,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,i){try{var a="",l=i;do a+=fe(l),l=l.return;while(l);var u=a}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:u,digest:null}}function Fc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Oc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var s_=typeof WeakMap=="function"?WeakMap:Map;function Rh(t,i,a){a=Pi(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Fo||(Fo=!0,Qc=l),Oc(t,i)},a}function bh(t,i,a){a=Pi(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;a.payload=function(){return l(u)},a.callback=function(){Oc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Oc(t,i),typeof l!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function Ph(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new s_;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(a)||(u.add(a),t=x_.bind(null,t,i,a),i.then(t,t))}function Lh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Nh(t,i,a,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Pi(-1,1),i.tag=2,rr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var a_=b.ReactCurrentOwner,Tn=!1;function _n(t,i,a,l){i.child=t===null?Qf(i,null,a,l):fs(i,t.child,a,l)}function Dh(t,i,a,l,u){a=a.render;var p=i.ref;return ps(i,u),l=Rc(t,i,a,l,p,u),a=bc(),t!==null&&!Tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Li(t,i,u)):(Ot&&a&&dc(i),i.flags|=1,_n(t,i,l,u),i.child)}function Ih(t,i,a,l,u){if(t===null){var p=a.type;return typeof p=="function"&&!su(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Uh(t,i,p,l,u)):(t=Vo(a.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&u)===0){var M=p.memoizedProps;if(a=a.compare,a=a!==null?a:aa,a(M,l)&&t.ref===i.ref)return Li(t,i,u)}return i.flags|=1,t=ur(p,l),t.ref=i.ref,t.return=i,i.child=t}function Uh(t,i,a,l,u){if(t!==null){var p=t.memoizedProps;if(aa(p,l)&&t.ref===i.ref)if(Tn=!1,i.pendingProps=l=p,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Tn=!0);else return i.lanes=t.lanes,Li(t,i,u)}return kc(t,i,a,l,u)}function Fh(t,i,a){var l=i.pendingProps,u=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(vs,Un),Un|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(vs,Un),Un|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:a,Dt(vs,Un),Un|=l}else p!==null?(l=p.baseLanes|a,i.memoizedState=null):l=a,Dt(vs,Un),Un|=l;return _n(t,i,u,a),i.child}function Oh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function kc(t,i,a,l,u){var p=wn(a)?Ar:ln.current;return p=ls(i,p),ps(i,u),a=Rc(t,i,a,l,p,u),l=bc(),t!==null&&!Tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Li(t,i,u)):(Ot&&l&&dc(i),i.flags|=1,_n(t,i,a,u),i.child)}function kh(t,i,a,l,u){if(wn(a)){var p=!0;ho(i)}else p=!1;if(ps(i,u),i.stateNode===null)Lo(t,i),Ah(i,a,l),Uc(i,a,l,u),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var z=M.context,ne=a.contextType;typeof ne=="object"&&ne!==null?ne=Vn(ne):(ne=wn(a)?Ar:ln.current,ne=ls(i,ne));var ve=a.getDerivedStateFromProps,ye=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||z!==ne)&&Ch(i,M,l,ne),ir=!1;var ge=i.memoizedState;M.state=ge,Mo(i,l,M,u),z=i.memoizedState,D!==l||ge!==z||En.current||ir?(typeof ve=="function"&&(Ic(i,a,ve,l),z=i.memoizedState),(D=ir||Th(i,a,D,l,ge,z,ne))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),M.props=l,M.state=z,M.context=ne,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,eh(t,i),D=i.memoizedProps,ne=i.type===i.elementType?D:Jn(i.type,D),M.props=ne,ye=i.pendingProps,ge=M.context,z=a.contextType,typeof z=="object"&&z!==null?z=Vn(z):(z=wn(a)?Ar:ln.current,z=ls(i,z));var De=a.getDerivedStateFromProps;(ve=typeof De=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==ye||ge!==z)&&Ch(i,M,l,z),ir=!1,ge=i.memoizedState,M.state=ge,Mo(i,l,M,u);var ze=i.memoizedState;D!==ye||ge!==ze||En.current||ir?(typeof De=="function"&&(Ic(i,a,De,l),ze=i.memoizedState),(ne=ir||Th(i,a,ne,l,ge,ze,z)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,z)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=z,l=ne):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return zc(t,i,a,l,p,u)}function zc(t,i,a,l,u,p){Oh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return u&&Gf(i,a,!1),Li(t,i,p);l=i.stateNode,a_.current=i;var D=M&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=fs(i,t.child,null,p),i.child=fs(i,null,D,p)):_n(t,i,D,p),i.memoizedState=l.state,u&&Gf(i,a,!0),i.child}function zh(t){var i=t.stateNode;i.pendingContext?Hf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Hf(t,i.context,!1),Mc(t,i.containerInfo)}function Bh(t,i,a,l,u){return ds(),mc(u),i.flags|=256,_n(t,i,a,l),i.child}var Bc={dehydrated:null,treeContext:null,retryLane:0};function Hc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hh(t,i,a){var l=i.pendingProps,u=kt.current,p=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(u&2)!==0),D?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Dt(kt,u&1),t===null)return pc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=i.mode,p=i.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Go(M,l,0,null),t=Fr(t,l,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Hc(a),i.memoizedState=Bc,t):Vc(i,M));if(u=t.memoizedState,u!==null&&(D=u.dehydrated,D!==null))return o_(t,i,M,l,D,u,a);if(p){p=l.fallback,M=i.mode,u=t.child,D=u.sibling;var z={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=z,i.deletions=null):(l=ur(u,z),l.subtreeFlags=u.subtreeFlags&14680064),D!==null?p=ur(D,p):(p=Fr(p,M,a,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,M=t.child.memoizedState,M=M===null?Hc(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~a,i.memoizedState=Bc,l}return p=t.child,t=p.sibling,l=ur(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Vc(t,i){return i=Go({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Po(t,i,a,l){return l!==null&&mc(l),fs(i,t.child,null,a),t=Vc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function o_(t,i,a,l,u,p,M){if(a)return i.flags&256?(i.flags&=-257,l=Fc(Error(n(422))),Po(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,u=i.mode,l=Go({mode:"visible",children:l.children},u,0,null),p=Fr(p,u,M,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&fs(i,t.child,null,M),i.child.memoizedState=Hc(M),i.memoizedState=Bc,p);if((i.mode&1)===0)return Po(t,i,M,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var D=l.dgst;return l=D,p=Error(n(419)),l=Fc(p,l,void 0),Po(t,i,M,l)}if(D=(M&t.childLanes)!==0,Tn||D){if(l=Jt,l!==null){switch(M&-M){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|M))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,bi(t,u),ni(l,t,u,-1))}return ru(),l=Fc(Error(n(421))),Po(t,i,M,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=y_.bind(null,t),u._reactRetry=i,null):(t=p.treeContext,In=Ji(u.nextSibling),Dn=i,Ot=!0,Qn=null,t!==null&&(Bn[Hn++]=Ci,Bn[Hn++]=Ri,Bn[Hn++]=Cr,Ci=t.id,Ri=t.overflow,Cr=i),i=Vc(i,l.children),i.flags|=4096,i)}function Vh(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),xc(t.return,i,a)}function Gc(t,i,a,l,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=u)}function Gh(t,i,a){var l=i.pendingProps,u=l.revealOrder,p=l.tail;if(_n(t,i,l.children,a),l=kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vh(t,a,i);else if(t.tag===19)Vh(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(kt,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(a=i.child,u=null;a!==null;)t=a.alternate,t!==null&&Eo(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),Gc(i,!1,u,a,p);break;case"backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Eo(t)===null){i.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Gc(i,!0,a,null,p);break;case"together":Gc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Lo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Li(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Nr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=ur(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=ur(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function l_(t,i,a){switch(i.tag){case 3:zh(i),ds();break;case 5:ih(i);break;case 1:wn(i.type)&&ho(i);break;case 4:Mc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Dt(xo,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(kt,kt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Hh(t,i,a):(Dt(kt,kt.current&1),t=Li(t,i,a),t!==null?t.sibling:null);Dt(kt,kt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Gh(t,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Dt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,Fh(t,i,a)}return Li(t,i,a)}var Wh,Wc,jh,Xh;Wh=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Wc=function(){},jh=function(t,i,a,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Pr(hi.current);var p=null;switch(a){case"input":u=X(t,u),l=X(t,l),p=[];break;case"select":u=ee({},u,{value:void 0}),l=ee({},l,{value:void 0}),p=[];break;case"textarea":u=T(t,u),l=T(t,l),p=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=co)}dt(a,l);var M;a=null;for(ne in u)if(!l.hasOwnProperty(ne)&&u.hasOwnProperty(ne)&&u[ne]!=null)if(ne==="style"){var D=u[ne];for(M in D)D.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(o.hasOwnProperty(ne)?p||(p=[]):(p=p||[]).push(ne,null));for(ne in l){var z=l[ne];if(D=u!=null?u[ne]:void 0,l.hasOwnProperty(ne)&&z!==D&&(z!=null||D!=null))if(ne==="style")if(D){for(M in D)!D.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in z)z.hasOwnProperty(M)&&D[M]!==z[M]&&(a||(a={}),a[M]=z[M])}else a||(p||(p=[]),p.push(ne,a)),a=z;else ne==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,D=D?D.__html:void 0,z!=null&&D!==z&&(p=p||[]).push(ne,z)):ne==="children"?typeof z!="string"&&typeof z!="number"||(p=p||[]).push(ne,""+z):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(o.hasOwnProperty(ne)?(z!=null&&ne==="onScroll"&&Ut("scroll",t),p||D===z||(p=[])):(p=p||[]).push(ne,z))}a&&(p=p||[]).push("style",a);var ne=p;(i.updateQueue=ne)&&(i.flags|=4)}},Xh=function(t,i,a,l){a!==l&&(i.flags|=4)};function Sa(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function un(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function c_(t,i,a){var l=i.pendingProps;switch(fc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(i),null;case 1:return wn(i.type)&&fo(),un(i),null;case 3:return l=i.stateNode,ms(),Ft(En),Ft(ln),Tc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(_o(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qn!==null&&(tu(Qn),Qn=null))),Wc(t,i),un(i),null;case 5:Ec(i);var u=Pr(ga.current);if(a=i.type,t!==null&&i.stateNode!=null)jh(t,i,a,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return un(i),null}if(t=Pr(hi.current),_o(i)){l=i.stateNode,a=i.type;var p=i.memoizedProps;switch(l[fi]=i,l[da]=p,t=(i.mode&1)!==0,a){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(u=0;u<la.length;u++)Ut(la[u],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":pn(l,p),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Ut("invalid",l);break;case"textarea":J(l,p),Ut("invalid",l)}dt(a,p),u=null;for(var M in p)if(p.hasOwnProperty(M)){var D=p[M];M==="children"?typeof D=="string"?l.textContent!==D&&(p.suppressHydrationWarning!==!0&&lo(l.textContent,D,t),u=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&lo(l.textContent,D,t),u=["children",""+D]):o.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Ut("scroll",l)}switch(a){case"input":Rt(l),Ye(l,p,!0);break;case"textarea":Rt(l),_e(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=co)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(a,{is:l.is}):(t=M.createElement(a),a==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,a),t[fi]=i,t[da]=l,Wh(t,i,!1,!1),i.stateNode=t;e:{switch(M=rt(a,l),a){case"dialog":Ut("cancel",t),Ut("close",t),u=l;break;case"iframe":case"object":case"embed":Ut("load",t),u=l;break;case"video":case"audio":for(u=0;u<la.length;u++)Ut(la[u],t);u=l;break;case"source":Ut("error",t),u=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),u=l;break;case"details":Ut("toggle",t),u=l;break;case"input":pn(t,l),u=X(t,l),Ut("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=ee({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":J(t,l),u=T(t,l),Ut("invalid",t);break;default:u=l}dt(a,u),D=u;for(p in D)if(D.hasOwnProperty(p)){var z=D[p];p==="style"?et(t,z):p==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ue(t,z)):p==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&ct(t,z):typeof z=="number"&&ct(t,""+z):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?z!=null&&p==="onScroll"&&Ut("scroll",t):z!=null&&N(t,p,z,M))}switch(a){case"input":Rt(t),Ye(t,l,!1);break;case"textarea":Rt(t),_e(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ce(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?L(t,!!l.multiple,p,!1):l.defaultValue!=null&&L(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=co)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return un(i),null;case 6:if(t&&i.stateNode!=null)Xh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Pr(ga.current),Pr(hi.current),_o(i)){if(l=i.stateNode,a=i.memoizedProps,l[fi]=i,(p=l.nodeValue!==a)&&(t=Dn,t!==null))switch(t.tag){case 3:lo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lo(l.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[fi]=i,i.stateNode=l}return un(i),null;case 13:if(Ft(kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&In!==null&&(i.mode&1)!==0&&(i.flags&128)===0)$f(),ds(),i.flags|=98560,p=!1;else if(p=_o(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[fi]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),p=!1}else Qn!==null&&(tu(Qn),Qn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(kt.current&1)!==0?$t===0&&($t=3):ru())),i.updateQueue!==null&&(i.flags|=4),un(i),null);case 4:return ms(),Wc(t,i),t===null&&ca(i.stateNode.containerInfo),un(i),null;case 10:return vc(i.type._context),un(i),null;case 17:return wn(i.type)&&fo(),un(i),null;case 19:if(Ft(kt),p=i.memoizedState,p===null)return un(i),null;if(l=(i.flags&128)!==0,M=p.rendering,M===null)if(l)Sa(p,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Eo(t),M!==null){for(i.flags|=128,Sa(p,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)p=a,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Dt(kt,kt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Me()>xs&&(i.flags|=128,l=!0,Sa(p,!1),i.lanes=4194304)}else{if(!l)if(t=Eo(M),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Sa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Ot)return un(i),null}else 2*Me()-p.renderingStartTime>xs&&a!==1073741824&&(i.flags|=128,l=!0,Sa(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(a=p.last,a!==null?a.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Me(),i.sibling=null,a=kt.current,Dt(kt,l?a&1|2:a&1),i):(un(i),null);case 22:case 23:return iu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Un&1073741824)!==0&&(un(i),i.subtreeFlags&6&&(i.flags|=8192)):un(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function u_(t,i){switch(fc(i),i.tag){case 1:return wn(i.type)&&fo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ms(),Ft(En),Ft(ln),Tc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Ec(i),null;case 13:if(Ft(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ds()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ft(kt),null;case 4:return ms(),null;case 10:return vc(i.type._context),null;case 22:case 23:return iu(),null;case 24:return null;default:return null}}var No=!1,dn=!1,d_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function _s(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Ht(t,i,l)}else a.current=null}function jc(t,i,a){try{a()}catch(l){Ht(t,i,l)}}var qh=!1;function f_(t,i){if(ic=Za,t=Tf(),$l(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var M=0,D=-1,z=-1,ne=0,ve=0,ye=t,ge=null;t:for(;;){for(var De;ye!==a||u!==0&&ye.nodeType!==3||(D=M+u),ye!==p||l!==0&&ye.nodeType!==3||(z=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(De=ye.firstChild)!==null;)ge=ye,ye=De;for(;;){if(ye===t)break t;if(ge===a&&++ne===u&&(D=M),ge===p&&++ve===l&&(z=M),(De=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=De}a=D===-1||z===-1?null:{start:D,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(rc={focusedElem:t,selectionRange:a},Za=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,Gt=ze.memoizedState,K=i.stateNode,V=K.getSnapshotBeforeUpdate(i.elementType===i.type?He:Jn(i.type,He),Gt);K.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Ht(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return ze=qh,qh=!1,ze}function Ma(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var p=u.destroy;u.destroy=void 0,p!==void 0&&jc(i,a,p)}u=u.next}while(u!==l)}}function Do(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function Xc(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function Yh(t){var i=t.alternate;i!==null&&(t.alternate=null,Yh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[fi],delete i[da],delete i[lc],delete i[Y0],delete i[$0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $h(t){return t.tag===5||t.tag===3||t.tag===4}function Kh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$h(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=co));else if(l!==4&&(t=t.child,t!==null))for(qc(t,i,a),t=t.sibling;t!==null;)qc(t,i,a),t=t.sibling}function Yc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Yc(t,i,a),t=t.sibling;t!==null;)Yc(t,i,a),t=t.sibling}var nn=null,ei=!1;function sr(t,i,a){for(a=a.child;a!==null;)Zh(t,i,a),a=a.sibling}function Zh(t,i,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 5:dn||_s(a,i);case 6:var l=nn,u=ei;nn=null,sr(t,i,a),nn=l,ei=u,nn!==null&&(ei?(t=nn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):nn.removeChild(a.stateNode));break;case 18:nn!==null&&(ei?(t=nn,a=a.stateNode,t.nodeType===8?oc(t.parentNode,a):t.nodeType===1&&oc(t,a),ea(t)):oc(nn,a.stateNode));break;case 4:l=nn,u=ei,nn=a.stateNode.containerInfo,ei=!0,sr(t,i,a),nn=l,ei=u;break;case 0:case 11:case 14:case 15:if(!dn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var p=u,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&jc(a,i,M),u=u.next}while(u!==l)}sr(t,i,a);break;case 1:if(!dn&&(_s(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(D){Ht(a,i,D)}sr(t,i,a);break;case 21:sr(t,i,a);break;case 22:a.mode&1?(dn=(l=dn)||a.memoizedState!==null,sr(t,i,a),dn=l):sr(t,i,a);break;default:sr(t,i,a)}}function Qh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new d_),i.forEach(function(l){var u=S_.bind(null,t,l);a.has(l)||(a.add(l),l.then(u,u))})}}function ti(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l];try{var p=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:nn=D.stateNode,ei=!1;break e;case 3:nn=D.stateNode.containerInfo,ei=!0;break e;case 4:nn=D.stateNode.containerInfo,ei=!0;break e}D=D.return}if(nn===null)throw Error(n(160));Zh(p,M,u),nn=null,ei=!1;var z=u.alternate;z!==null&&(z.return=null),u.return=null}catch(ne){Ht(u,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Jh(i,t),i=i.sibling}function Jh(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(i,t),mi(t),l&4){try{Ma(3,t,t.return),Do(3,t)}catch(He){Ht(t,t.return,He)}try{Ma(5,t,t.return)}catch(He){Ht(t,t.return,He)}}break;case 1:ti(i,t),mi(t),l&512&&a!==null&&_s(a,a.return);break;case 5:if(ti(i,t),mi(t),l&512&&a!==null&&_s(a,a.return),t.flags&32){var u=t.stateNode;try{ct(u,"")}catch(He){Ht(t,t.return,He)}}if(l&4&&(u=t.stateNode,u!=null)){var p=t.memoizedProps,M=a!==null?a.memoizedProps:p,D=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&ht(u,p),rt(D,M);var ne=rt(D,p);for(M=0;M<z.length;M+=2){var ve=z[M],ye=z[M+1];ve==="style"?et(u,ye):ve==="dangerouslySetInnerHTML"?Ue(u,ye):ve==="children"?ct(u,ye):N(u,ve,ye,ne)}switch(D){case"input":ut(u,p);break;case"textarea":me(u,p);break;case"select":var ge=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var De=p.value;De!=null?L(u,!!p.multiple,De,!1):ge!==!!p.multiple&&(p.defaultValue!=null?L(u,!!p.multiple,p.defaultValue,!0):L(u,!!p.multiple,p.multiple?[]:"",!1))}u[da]=p}catch(He){Ht(t,t.return,He)}}break;case 6:if(ti(i,t),mi(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,p=t.memoizedProps;try{u.nodeValue=p}catch(He){Ht(t,t.return,He)}}break;case 3:if(ti(i,t),mi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ea(i.containerInfo)}catch(He){Ht(t,t.return,He)}break;case 4:ti(i,t),mi(t);break;case 13:ti(i,t),mi(t),u=t.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(Zc=Me())),l&4&&Qh(t);break;case 22:if(ve=a!==null&&a.memoizedState!==null,t.mode&1?(dn=(ne=dn)||ve,ti(i,t),dn=ne):ti(i,t),mi(t),l&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!ve&&(t.mode&1)!==0)for(Fe=t,ve=t.child;ve!==null;){for(ye=Fe=ve;Fe!==null;){switch(ge=Fe,De=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ma(4,ge,ge.return);break;case 1:_s(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){l=ge,a=ge.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){Ht(l,a,He)}}break;case 5:_s(ge,ge.return);break;case 22:if(ge.memoizedState!==null){np(ye);continue}}De!==null?(De.return=ge,Fe=De):np(ye)}ve=ve.sibling}e:for(ve=null,ye=t;;){if(ye.tag===5){if(ve===null){ve=ye;try{u=ye.stateNode,ne?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=ye.stateNode,z=ye.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,D.style.display=Je("display",M))}catch(He){Ht(t,t.return,He)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=ne?"":ye.memoizedProps}catch(He){Ht(t,t.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ti(i,t),mi(t),l&4&&Qh(t);break;case 21:break;default:ti(i,t),mi(t)}}function mi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if($h(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(ct(u,""),l.flags&=-33);var p=Kh(t);Yc(t,p,u);break;case 3:case 4:var M=l.stateNode.containerInfo,D=Kh(t);qc(t,D,M);break;default:throw Error(n(161))}}catch(z){Ht(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function h_(t,i,a){Fe=t,ep(t)}function ep(t,i,a){for(var l=(t.mode&1)!==0;Fe!==null;){var u=Fe,p=u.child;if(u.tag===22&&l){var M=u.memoizedState!==null||No;if(!M){var D=u.alternate,z=D!==null&&D.memoizedState!==null||dn;D=No;var ne=dn;if(No=M,(dn=z)&&!ne)for(Fe=u;Fe!==null;)M=Fe,z=M.child,M.tag===22&&M.memoizedState!==null?ip(u):z!==null?(z.return=M,Fe=z):ip(u);for(;p!==null;)Fe=p,ep(p),p=p.sibling;Fe=u,No=D,dn=ne}tp(t)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,Fe=p):tp(t)}}function tp(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:dn||Do(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!dn)if(a===null)l.componentDidMount();else{var u=i.elementType===i.type?a.memoizedProps:Jn(i.type,a.memoizedProps);l.componentDidUpdate(u,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&nh(i,p,l);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}nh(i,M,a)}break;case 5:var D=i.stateNode;if(a===null&&i.flags&4){a=D;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var ve=ne.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&ea(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}dn||i.flags&512&&Xc(i)}catch(ge){Ht(i,i.return,ge)}}if(i===t){Fe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function np(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function ip(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Do(4,i)}catch(z){Ht(i,a,z)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(z){Ht(i,u,z)}}var p=i.return;try{Xc(i)}catch(z){Ht(i,p,z)}break;case 5:var M=i.return;try{Xc(i)}catch(z){Ht(i,M,z)}}}catch(z){Ht(i,i.return,z)}if(i===t){Fe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Fe=D;break}Fe=i.return}}var p_=Math.ceil,Io=b.ReactCurrentDispatcher,$c=b.ReactCurrentOwner,Wn=b.ReactCurrentBatchConfig,xt=0,Jt=null,Wt=null,rn=0,Un=0,vs=er(0),$t=0,Ea=null,Nr=0,Uo=0,Kc=0,wa=null,An=null,Zc=0,xs=1/0,Ni=null,Fo=!1,Qc=null,ar=null,Oo=!1,or=null,ko=0,Ta=0,Jc=null,zo=-1,Bo=0;function vn(){return(xt&6)!==0?Me():zo!==-1?zo:zo=Me()}function lr(t){return(t.mode&1)===0?1:(xt&2)!==0&&rn!==0?rn&-rn:Z0.transition!==null?(Bo===0&&(Bo=gn()),Bo):(t=Ct,t!==0||(t=window.event,t=t===void 0?16:sf(t.type)),t)}function ni(t,i,a,l){if(50<Ta)throw Ta=0,Jc=null,Error(n(185));Mn(t,a,l),((xt&2)===0||t!==Jt)&&(t===Jt&&((xt&2)===0&&(Uo|=a),$t===4&&cr(t,rn)),Cn(t,l),a===1&&xt===0&&(i.mode&1)===0&&(xs=Me()+500,po&&nr()))}function Cn(t,i){var a=t.callbackNode;kn(t,i);var l=di(t,t===Jt?rn:0);if(l===0)a!==null&&re(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&re(a),i===1)t.tag===0?K0(sp.bind(null,t)):Wf(sp.bind(null,t)),X0(function(){(xt&6)===0&&nr()}),a=null;else{switch(Kd(l)){case 1:a=Be;break;case 4:a=tt;break;case 16:a=it;break;case 536870912:a=gt;break;default:a=it}a=hp(a,rp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function rp(t,i){if(zo=-1,Bo=0,(xt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(ys()&&t.callbackNode!==a)return null;var l=di(t,t===Jt?rn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ho(t,l);else{i=l;var u=xt;xt|=2;var p=op();(Jt!==t||rn!==i)&&(Ni=null,xs=Me()+500,Ir(t,i));do try{__();break}catch(D){ap(t,D)}while(!0);_c(),Io.current=p,xt=u,Wt!==null?i=0:(Jt=null,rn=0,i=$t)}if(i!==0){if(i===2&&(u=wi(t),u!==0&&(l=u,i=eu(t,u))),i===1)throw a=Ea,Ir(t,0),cr(t,l),Cn(t,Me()),a;if(i===6)cr(t,l);else{if(u=t.current.alternate,(l&30)===0&&!m_(u)&&(i=Ho(t,l),i===2&&(p=wi(t),p!==0&&(l=p,i=eu(t,p))),i===1))throw a=Ea,Ir(t,0),cr(t,l),Cn(t,Me()),a;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,An,Ni);break;case 3:if(cr(t,l),(l&130023424)===l&&(i=Zc+500-Me(),10<i)){if(di(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){vn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=ac(Ur.bind(null,t,An,Ni),i);break}Ur(t,An,Ni);break;case 4:if(cr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var M=31-at(l);p=1<<M,M=i[M],M>u&&(u=M),l&=~p}if(l=u,l=Me()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*p_(l/1960))-l,10<l){t.timeoutHandle=ac(Ur.bind(null,t,An,Ni),l);break}Ur(t,An,Ni);break;case 5:Ur(t,An,Ni);break;default:throw Error(n(329))}}}return Cn(t,Me()),t.callbackNode===a?rp.bind(null,t):null}function eu(t,i){var a=wa;return t.current.memoizedState.isDehydrated&&(Ir(t,i).flags|=256),t=Ho(t,i),t!==2&&(i=An,An=a,i!==null&&tu(i)),t}function tu(t){An===null?An=t:An.push.apply(An,t)}function m_(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var u=a[l],p=u.getSnapshot;u=u.value;try{if(!Zn(p(),u))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i){for(i&=~Kc,i&=~Uo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-at(i),l=1<<a;t[a]=-1,i&=~l}}function sp(t){if((xt&6)!==0)throw Error(n(327));ys();var i=di(t,0);if((i&1)===0)return Cn(t,Me()),null;var a=Ho(t,i);if(t.tag!==0&&a===2){var l=wi(t);l!==0&&(i=l,a=eu(t,l))}if(a===1)throw a=Ea,Ir(t,0),cr(t,i),Cn(t,Me()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,An,Ni),Cn(t,Me()),null}function nu(t,i){var a=xt;xt|=1;try{return t(i)}finally{xt=a,xt===0&&(xs=Me()+500,po&&nr())}}function Dr(t){or!==null&&or.tag===0&&(xt&6)===0&&ys();var i=xt;xt|=1;var a=Wn.transition,l=Ct;try{if(Wn.transition=null,Ct=1,t)return t()}finally{Ct=l,Wn.transition=a,xt=i,(xt&6)===0&&nr()}}function iu(){Un=vs.current,Ft(vs)}function Ir(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,j0(a)),Wt!==null)for(a=Wt.return;a!==null;){var l=a;switch(fc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&fo();break;case 3:ms(),Ft(En),Ft(ln),Tc();break;case 5:Ec(l);break;case 4:ms();break;case 13:Ft(kt);break;case 19:Ft(kt);break;case 10:vc(l.type._context);break;case 22:case 23:iu()}a=a.return}if(Jt=t,Wt=t=ur(t.current,null),rn=Un=i,$t=0,Ea=null,Kc=Uo=Nr=0,An=wa=null,br!==null){for(i=0;i<br.length;i++)if(a=br[i],l=a.interleaved,l!==null){a.interleaved=null;var u=l.next,p=a.pending;if(p!==null){var M=p.next;p.next=u,l.next=M}a.pending=l}br=null}return t}function ap(t,i){do{var a=Wt;try{if(_c(),wo.current=Ro,To){for(var l=zt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}To=!1}if(Lr=0,Qt=Yt=zt=null,_a=!1,va=0,$c.current=null,a===null||a.return===null){$t=1,Ea=i,Wt=null;break}e:{var p=t,M=a.return,D=a,z=i;if(i=rn,D.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ne=z,ve=D,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var De=Lh(M);if(De!==null){De.flags&=-257,Nh(De,M,D,p,i),De.mode&1&&Ph(p,ne,i),i=De,z=ne;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(z),i.updateQueue=He}else ze.add(z);break e}else{if((i&1)===0){Ph(p,ne,i),ru();break e}z=Error(n(426))}}else if(Ot&&D.mode&1){var Gt=Lh(M);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),Nh(Gt,M,D,p,i),mc(gs(z,D));break e}}p=z=gs(z,D),$t!==4&&($t=2),wa===null?wa=[p]:wa.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var K=Rh(p,z,i);th(p,K);break e;case 1:D=z;var V=p.type,Z=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(ar===null||!ar.has(Z)))){p.flags|=65536,i&=-i,p.lanes|=i;var Te=bh(p,D,i);th(p,Te);break e}}p=p.return}while(p!==null)}cp(a)}catch(je){i=je,Wt===a&&a!==null&&(Wt=a=a.return);continue}break}while(!0)}function op(){var t=Io.current;return Io.current=Ro,t===null?Ro:t}function ru(){($t===0||$t===3||$t===2)&&($t=4),Jt===null||(Nr&268435455)===0&&(Uo&268435455)===0||cr(Jt,rn)}function Ho(t,i){var a=xt;xt|=2;var l=op();(Jt!==t||rn!==i)&&(Ni=null,Ir(t,i));do try{g_();break}catch(u){ap(t,u)}while(!0);if(_c(),xt=a,Io.current=l,Wt!==null)throw Error(n(261));return Jt=null,rn=0,$t}function g_(){for(;Wt!==null;)lp(Wt)}function __(){for(;Wt!==null&&!j();)lp(Wt)}function lp(t){var i=fp(t.alternate,t,Un);t.memoizedProps=t.pendingProps,i===null?cp(t):Wt=i,$c.current=null}function cp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=c_(a,i,Un),a!==null){Wt=a;return}}else{if(a=u_(a,i),a!==null){a.flags&=32767,Wt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=t}while(i!==null);$t===0&&($t=5)}function Ur(t,i,a){var l=Ct,u=Wn.transition;try{Wn.transition=null,Ct=1,v_(t,i,a,l)}finally{Wn.transition=u,Ct=l}return null}function v_(t,i,a,l){do ys();while(or!==null);if((xt&6)!==0)throw Error(n(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(Ya(t,p),t===Jt&&(Wt=Jt=null,rn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Oo||(Oo=!0,hp(it,function(){return ys(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Wn.transition,Wn.transition=null;var M=Ct;Ct=1;var D=xt;xt|=4,$c.current=null,f_(t,a),Jh(a,t),k0(rc),Za=!!ic,rc=ic=null,t.current=a,h_(a),Ae(),xt=D,Ct=M,Wn.transition=p}else t.current=a;if(Oo&&(Oo=!1,or=t,ko=u),p=t.pendingLanes,p===0&&(ar=null),an(a.stateNode),Cn(t,Me()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)u=i[a],l(u.value,{componentStack:u.stack,digest:u.digest});if(Fo)throw Fo=!1,t=Qc,Qc=null,t;return(ko&1)!==0&&t.tag!==0&&ys(),p=t.pendingLanes,(p&1)!==0?t===Jc?Ta++:(Ta=0,Jc=t):Ta=0,nr(),null}function ys(){if(or!==null){var t=Kd(ko),i=Wn.transition,a=Ct;try{if(Wn.transition=null,Ct=16>t?16:t,or===null)var l=!1;else{if(t=or,or=null,ko=0,(xt&6)!==0)throw Error(n(331));var u=xt;for(xt|=4,Fe=t.current;Fe!==null;){var p=Fe,M=p.child;if((Fe.flags&16)!==0){var D=p.deletions;if(D!==null){for(var z=0;z<D.length;z++){var ne=D[z];for(Fe=ne;Fe!==null;){var ve=Fe;switch(ve.tag){case 0:case 11:case 15:Ma(8,ve,p)}var ye=ve.child;if(ye!==null)ye.return=ve,Fe=ye;else for(;Fe!==null;){ve=Fe;var ge=ve.sibling,De=ve.return;if(Yh(ve),ve===ne){Fe=null;break}if(ge!==null){ge.return=De,Fe=ge;break}Fe=De}}}var ze=p.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var Gt=He.sibling;He.sibling=null,He=Gt}while(He!==null)}}Fe=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Fe=M;else e:for(;Fe!==null;){if(p=Fe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ma(9,p,p.return)}var K=p.sibling;if(K!==null){K.return=p.return,Fe=K;break e}Fe=p.return}}var V=t.current;for(Fe=V;Fe!==null;){M=Fe;var Z=M.child;if((M.subtreeFlags&2064)!==0&&Z!==null)Z.return=M,Fe=Z;else e:for(M=V;Fe!==null;){if(D=Fe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Do(9,D)}}catch(je){Ht(D,D.return,je)}if(D===M){Fe=null;break e}var Te=D.sibling;if(Te!==null){Te.return=D.return,Fe=Te;break e}Fe=D.return}}if(xt=u,nr(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Et,t)}catch{}l=!0}return l}finally{Ct=a,Wn.transition=i}}return!1}function up(t,i,a){i=gs(a,i),i=Rh(t,i,1),t=rr(t,i,1),i=vn(),t!==null&&(Mn(t,1,i),Cn(t,i))}function Ht(t,i,a){if(t.tag===3)up(t,t,a);else for(;i!==null;){if(i.tag===3){up(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){t=gs(a,t),t=bh(i,t,1),i=rr(i,t,1),t=vn(),i!==null&&(Mn(i,1,t),Cn(i,t));break}}i=i.return}}function x_(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=vn(),t.pingedLanes|=t.suspendedLanes&a,Jt===t&&(rn&a)===a&&($t===4||$t===3&&(rn&130023424)===rn&&500>Me()-Zc?Ir(t,0):Kc|=a),Cn(t,i)}function dp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Kn,Kn<<=1,(Kn&130023424)===0&&(Kn=4194304)));var a=vn();t=bi(t,i),t!==null&&(Mn(t,i,a),Cn(t,a))}function y_(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),dp(t,a)}function S_(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),dp(t,a)}var fp;fp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||En.current)Tn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Tn=!1,l_(t,i,a);Tn=(t.flags&131072)!==0}else Tn=!1,Ot&&(i.flags&1048576)!==0&&jf(i,go,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Lo(t,i),t=i.pendingProps;var u=ls(i,ln.current);ps(i,a),u=Rc(null,i,l,t,u,a);var p=bc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(l)?(p=!0,ho(i)):p=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Sc(i),u.updater=bo,i.stateNode=u,u._reactInternals=i,Uc(i,l,t,a),i=zc(null,i,l,!0,p,a)):(i.tag=0,Ot&&p&&dc(i),_n(null,i,u,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Lo(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=E_(l),t=Jn(l,t),u){case 0:i=kc(null,i,l,t,a);break e;case 1:i=kh(null,i,l,t,a);break e;case 11:i=Dh(null,i,l,t,a);break e;case 14:i=Ih(null,i,l,Jn(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Jn(l,u),kc(t,i,l,u,a);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Jn(l,u),kh(t,i,l,u,a);case 3:e:{if(zh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,u=p.element,eh(t,i),Mo(i,l,null,a);var M=i.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){u=gs(Error(n(423)),i),i=Bh(t,i,l,a,u);break e}else if(l!==u){u=gs(Error(n(424)),i),i=Bh(t,i,l,a,u);break e}else for(In=Ji(i.stateNode.containerInfo.firstChild),Dn=i,Ot=!0,Qn=null,a=Qf(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ds(),l===u){i=Li(t,i,a);break e}_n(t,i,l,a)}i=i.child}return i;case 5:return ih(i),t===null&&pc(i),l=i.type,u=i.pendingProps,p=t!==null?t.memoizedProps:null,M=u.children,sc(l,u)?M=null:p!==null&&sc(l,p)&&(i.flags|=32),Oh(t,i),_n(t,i,M,a),i.child;case 6:return t===null&&pc(i),null;case 13:return Hh(t,i,a);case 4:return Mc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=fs(i,null,l,a):_n(t,i,l,a),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Jn(l,u),Dh(t,i,l,u,a);case 7:return _n(t,i,i.pendingProps,a),i.child;case 8:return _n(t,i,i.pendingProps.children,a),i.child;case 12:return _n(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,p=i.memoizedProps,M=u.value,Dt(xo,l._currentValue),l._currentValue=M,p!==null)if(Zn(p.value,M)){if(p.children===u.children&&!En.current){i=Li(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){M=p.child;for(var z=D.firstContext;z!==null;){if(z.context===l){if(p.tag===1){z=Pi(-1,a&-a),z.tag=2;var ne=p.updateQueue;if(ne!==null){ne=ne.shared;var ve=ne.pending;ve===null?z.next=z:(z.next=ve.next,ve.next=z),ne.pending=z}}p.lanes|=a,z=p.alternate,z!==null&&(z.lanes|=a),xc(p.return,a,i),D.lanes|=a;break}z=z.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=a,D=M.alternate,D!==null&&(D.lanes|=a),xc(M,a,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}_n(t,i,u.children,a),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,ps(i,a),u=Vn(u),l=l(u),i.flags|=1,_n(t,i,l,a),i.child;case 14:return l=i.type,u=Jn(l,i.pendingProps),u=Jn(l.type,u),Ih(t,i,l,u,a);case 15:return Uh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Jn(l,u),Lo(t,i),i.tag=1,wn(l)?(t=!0,ho(i)):t=!1,ps(i,a),Ah(i,l,u),Uc(i,l,u,a),zc(null,i,l,!0,t,a);case 19:return Gh(t,i,a);case 22:return Fh(t,i,a)}throw Error(n(156,i.tag))};function hp(t,i){return ie(t,i)}function M_(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,i,a,l){return new M_(t,i,a,l)}function su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function E_(t){if(typeof t=="function")return su(t)?1:0;if(t!=null){if(t=t.$$typeof,t===se)return 11;if(t===de)return 14}return 2}function ur(t,i){var a=t.alternate;return a===null?(a=jn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Vo(t,i,a,l,u,p){var M=2;if(l=t,typeof t=="function")su(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case O:return Fr(a.children,u,p,i);case k:M=8,u|=8;break;case P:return t=jn(12,a,i,u|2),t.elementType=P,t.lanes=p,t;case Y:return t=jn(13,a,i,u),t.elementType=Y,t.lanes=p,t;case oe:return t=jn(19,a,i,u),t.elementType=oe,t.lanes=p,t;case le:return Go(a,u,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:M=10;break e;case F:M=9;break e;case se:M=11;break e;case de:M=14;break e;case ae:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=jn(M,a,i,u),i.elementType=t,i.type=l,i.lanes=p,i}function Fr(t,i,a,l){return t=jn(7,t,l,i),t.lanes=a,t}function Go(t,i,a,l){return t=jn(22,t,l,i),t.elementType=le,t.lanes=a,t.stateNode={isHidden:!1},t}function au(t,i,a){return t=jn(6,t,null,i),t.lanes=a,t}function ou(t,i,a){return i=jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function w_(t,i,a,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zn(0),this.expirationTimes=zn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zn(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function lu(t,i,a,l,u,p,M,D,z){return t=new w_(t,i,a,D,z),i===1?(i=1,p===!0&&(i|=8)):i=0,p=jn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sc(p),t}function T_(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function pp(t){if(!t)return tr;t=t._reactInternals;e:{if(ui(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(wn(a))return Vf(t,a,i)}return i}function mp(t,i,a,l,u,p,M,D,z){return t=lu(a,l,!0,t,u,p,M,D,z),t.context=pp(null),a=t.current,l=vn(),u=lr(a),p=Pi(l,u),p.callback=i??null,rr(a,p,u),t.current.lanes=u,Mn(t,u,l),Cn(t,l),t}function Wo(t,i,a,l){var u=i.current,p=vn(),M=lr(u);return a=pp(a),i.context===null?i.context=a:i.pendingContext=a,i=Pi(p,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=rr(u,i,M),t!==null&&(ni(t,u,M,p),So(t,u,M)),M}function jo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function cu(t,i){gp(t,i),(t=t.alternate)&&gp(t,i)}function A_(){return null}var _p=typeof reportError=="function"?reportError:function(t){console.error(t)};function uu(t){this._internalRoot=t}Xo.prototype.render=uu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Wo(t,i,null,null)},Xo.prototype.unmount=uu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){Wo(null,t,null,null)}),i[Ti]=null}};function Xo(t){this._internalRoot=t}Xo.prototype.unstable_scheduleHydration=function(t){if(t){var i=Jd();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Ki.length&&i!==0&&i<Ki[a].priority;a++);Ki.splice(a,0,t),a===0&&nf(t)}};function du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function C_(t,i,a,l,u){if(u){if(typeof l=="function"){var p=l;l=function(){var ne=jo(M);p.call(ne)}}var M=mp(i,l,t,0,null,!1,!1,"",vp);return t._reactRootContainer=M,t[Ti]=M.current,ca(t.nodeType===8?t.parentNode:t),Dr(),M}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var D=l;l=function(){var ne=jo(z);D.call(ne)}}var z=lu(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=z,t[Ti]=z.current,ca(t.nodeType===8?t.parentNode:t),Dr(function(){Wo(i,z,a,l)}),z}function Yo(t,i,a,l,u){var p=a._reactRootContainer;if(p){var M=p;if(typeof u=="function"){var D=u;u=function(){var z=jo(M);D.call(z)}}Wo(i,M,t,u)}else M=C_(a,i,t,u,l);return jo(M)}Zd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=qt(i.pendingLanes);a!==0&&(Ul(i,a|1),Cn(i,Me()),(xt&6)===0&&(xs=Me()+500,nr()))}break;case 13:Dr(function(){var l=bi(t,1);if(l!==null){var u=vn();ni(l,t,1,u)}}),cu(t,1)}},Fl=function(t){if(t.tag===13){var i=bi(t,134217728);if(i!==null){var a=vn();ni(i,t,134217728,a)}cu(t,134217728)}},Qd=function(t){if(t.tag===13){var i=lr(t),a=bi(t,i);if(a!==null){var l=vn();ni(a,t,i,l)}cu(t,i)}},Jd=function(){return Ct},ef=function(t,i){var a=Ct;try{return Ct=t,i()}finally{Ct=a}},be=function(t,i,a){switch(i){case"input":if(ut(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var u=uo(l);if(!u)throw Error(n(90));pt(l),ut(l,u)}}}break;case"textarea":me(t,a);break;case"select":i=a.value,i!=null&&L(t,!!a.multiple,i,!1)}},It=nu,Xt=Dr;var R_={usingClientEntryPoint:!1,Events:[fa,as,uo,Le,st,nu]},Aa={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b_={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C(t),t===null?null:t.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||A_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{Et=$o.inject(b_),mt=$o}catch{}}return Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R_,Rn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!du(i))throw Error(n(200));return T_(t,i,null,a)},Rn.createRoot=function(t,i){if(!du(t))throw Error(n(299));var a=!1,l="",u=_p;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=lu(t,1,!1,null,null,a,!1,l,u),t[Ti]=i.current,ca(t.nodeType===8?t.parentNode:t),new uu(i)},Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=C(i),t=t===null?null:t.stateNode,t},Rn.flushSync=function(t){return Dr(t)},Rn.hydrate=function(t,i,a){if(!qo(i))throw Error(n(200));return Yo(null,t,i,!0,a)},Rn.hydrateRoot=function(t,i,a){if(!du(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,u=!1,p="",M=_p;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=mp(i,null,t,1,a??null,u,!1,p,M),t[Ti]=i.current,ca(t),l)for(t=0;t<l.length;t++)a=l[t],u=a._getVersion,u=u(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,u]:i.mutableSourceEagerHydrationData.push(a,u);return new Xo(i)},Rn.render=function(t,i,a){if(!qo(i))throw Error(n(200));return Yo(null,t,i,!1,a)},Rn.unmountComponentAtNode=function(t){if(!qo(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){Yo(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1},Rn.unstable_batchedUpdates=nu,Rn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!qo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Yo(t,i,a,!1,l)},Rn.version="18.3.1-next-f1338f8080-20240426",Rn}var Ap;function k_(){if(Ap)return pu.exports;Ap=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),pu.exports=O_(),pu.exports}var Cp;function z_(){if(Cp)return Ko;Cp=1;var s=k_();return Ko.createRoot=s.createRoot,Ko.hydrateRoot=s.hydrateRoot,Ko}var B_=z_();const H_=Om(B_);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function G_(s,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:V_(s),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=s=>{let e="",n=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){n=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=n?r.toUpperCase():r,n=!1}return e};/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=s=>{const e=W_(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function _u(s){return s!=null}function X_(s,e={}){var x,S;const n=e.attributeNames??{},r=E=>n[E]??E,o=s.size??s.width??Or.width,c=s.size??s.height??Or.height,d=((x=s.aliases)==null?void 0:x.filter(E=>typeof E=="string"&&E.trim()!=="").map(E=>`lucide-${E}`))??[],f=[...s.name?[`lucide-${s.name}`]:[],...d],h=((S=e.className)==null?void 0:S.split(" ").filter(Boolean))??[],m=e.includeDefaultClasses===!1?Ku(...h):Ku("lucide",...f,...h),g=e.absoluteStrokeWidth?Number(e.strokeWidth??Or["stroke-width"])*Number(s.size??s.width??Or.width)/Number(e.size??e.width??Or.width):e.strokeWidth??Or["stroke-width"];return["svg",{...Object.entries(Or).reduce((E,[w,y])=>(E[r(w)]=y,E),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&_u(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&_u(e.width)&&{[r("width")]:e.width},..."height"in e&&_u(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:g,...m&&{[r("class")]:m},[r("viewBox")]:`0 0 ${o} ${c}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(E=>{const[w,y,_]=E,I=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...y}:y;return _?[w,I,_]:[w,I]})]}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function q_(s,e={}){return X_(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},$_=Ze.createContext({}),K_=()=>Ze.useContext($_),Z_=Ze.forwardRef(({color:s,size:e,width:n,height:r,strokeWidth:o,absoluteStrokeWidth:c,nonScalingStroke:d,className:f="",children:h,iconNode:m=[],icon:g={node:m,aliases:[],size:24},...v},x)=>{const{size:S=24,strokeWidth:E=2,absoluteStrokeWidth:w=!1,nonScalingStroke:y=!1,color:_="currentColor",className:I=""}=K_()??{},N=!!h||Y_(v),[b,q,H=[]]=q_(g,{color:s??_,width:n??e??S,height:r??e??S,strokeWidth:o??E,absoluteStrokeWidth:c??w,nonScalingStroke:d??y,className:Ku(I,f),hasA11yProp:N,attributes:v});return Ze.createElement(b,{ref:x,...q},[...H.map(([O,k])=>Ze.createElement(O,k)),...Array.isArray(h)?h:[h]])});/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Pt(s,e=[],n=[]){const r=typeof s=="string"?G_(s,e,n):s,o=Ze.forwardRef(({className:c,...d},f)=>Ze.createElement(Z_,{ref:f,icon:r,className:c,...d}));return r.name&&(o.displayName=j_(r.name)),o}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};km.node;const Q_=Pt(km);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};zm.node;const Bm=Pt(zm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Hm.node;const J_=Pt(Hm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};Vm.node;const ev=Pt(Vm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm={name:"circle-exclamation-point",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle","circle-alert"]};Gm.node;const tv=Pt(Gm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm={name:"columns-2",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],aliases:["columns"]};Wm.node;const nv=Pt(Wm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};jm.node;const Xm=Pt(jm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};qm.node;const iv=Pt(qm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym={name:"crosshair",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]};Ym.node;const rv=Pt(Ym);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};$m.node;const sv=Pt($m);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};Km.node;const av=Pt(Km);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};Zm.node;const Qm=Pt(Zm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm={name:"map",size:24,node:[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]};Jm.node;const ov=Pt(Jm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg={name:"navigation",size:24,node:[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]};eg.node;const lv=Pt(eg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg={name:"octagon-exclamation-point",size:24,node:[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]],aliases:["alert-octagon","octagon-alert"]};tg.node;const Rp=Pt(tg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};ng.node;const cv=Pt(ng);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};ig.node;const uv=Pt(ig);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};rg.node;const dv=Pt(rg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"satellite",size:24,node:[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]]};sg.node;const fv=Pt(sg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};ag.node;const hv=Pt(ag);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og={name:"shield-exclamation-point",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],aliases:["shield-alert"]};og.node;const bp=Pt(og);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};lg.node;const pv=Pt(lg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};cg.node;const mv=Pt(cg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};ug.node;const gv=Pt(ug);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};dg.node;const _v=Pt(dg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"triangle-exclamation-point",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle","triangle-alert"]};fg.node;const hg=Pt(fg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};pg.node;const Pp=Pt(pg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};mg.node;const vv=Pt(mg),xv=({status:s,roverCallsign:e,datasetCount:n})=>R.jsxs("header",{className:"bg-mars-800/80 backdrop-blur-md border-b border-mars-700/60 px-6 py-3.5 flex items-center justify-between sticky top-0 z-50",children:[R.jsxs("div",{className:"flex items-center space-x-4",children:[R.jsxs("div",{className:"relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-mars-500 to-amber-600 shadow-lg shadow-mars-500/20",children:[R.jsx(Xm,{className:"w-6 h-6 text-white animate-spin-slow"}),R.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-mars-900 animate-pulse"})]}),R.jsxs("div",{children:[R.jsxs("div",{className:"flex items-center space-x-2.5",children:[R.jsx("h1",{className:"text-lg font-bold tracking-wider text-white uppercase font-mono",children:"ODYSSEY"}),R.jsx("span",{className:"text-[11px] px-2 py-0.5 rounded font-mono bg-mars-700 text-mars-300 border border-mars-600",children:"MARS-09 TACTICAL"}),R.jsxs("span",{className:"text-[11px] px-2 py-0.5 rounded font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800 flex items-center space-x-1",children:[R.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"}),R.jsx("span",{children:s})]})]}),R.jsx("p",{className:"text-xs text-slate-400",children:"Autonomous Mars Rover Navigation & Planetary Terrain Intelligence Engine"})]})]}),R.jsxs("div",{className:"flex items-center space-x-6 text-xs font-mono",children:[R.jsxs("div",{className:"flex items-center space-x-2 text-slate-300",children:[R.jsx(fv,{className:"w-4 h-4 text-mars-400"}),R.jsxs("span",{children:["DATUM: ",R.jsx("strong",{className:"text-white",children:"IAU 2015 SPHEROID"})]})]}),R.jsxs("div",{className:"flex items-center space-x-2 text-slate-300",children:[R.jsx(Q_,{className:"w-4 h-4 text-emerald-400"}),R.jsxs("span",{children:["ROVER: ",R.jsx("strong",{className:"text-white",children:e})]})]}),R.jsxs("div",{className:"flex items-center space-x-2 text-slate-300",children:[R.jsx(iv,{className:"w-4 h-4 text-cyan-400"}),R.jsxs("span",{children:["INGESTED: ",R.jsxs("strong",{className:"text-white",children:[n," LAYERS"]})]})]})]})]}),js="/api";async function yv(){const s=await fetch(`${js}/status`);if(!s.ok)throw new Error("Failed to fetch system status");return s.json()}async function Sv(){const s=await fetch(`${js}/samples`);if(!s.ok)throw new Error("Failed to fetch sample datasets");return s.json()}async function Mv(s,e){const n=new FormData;n.append("file",s),n.append("file_type",e);const r=await fetch(`${js}/upload`,{method:"POST",body:n});if(!r.ok){const c=await r.json().catch(()=>({detail:"Upload failed"}));throw new Error(c.detail||"Upload failed")}return(await r.json()).data}async function Ev(s,e){const n=new FormData;n.append("imagery_id",s),n.append("dem_id",e);const r=await fetch(`${js}/validate-compatibility`,{method:"POST",body:n});if(!r.ok){const c=await r.json().catch(()=>({detail:"Validation failed"}));throw new Error(c.detail||"Validation failed")}return(await r.json()).report}async function wv(s){const e=new FormData;e.append("dem_id",s);const n=await fetch(`${js}/analyze-terrain`,{method:"POST",body:e});if(!n.ok){const r=await n.json().catch(()=>({detail:"Terrain analysis failed"}));throw new Error(r.detail||"Terrain analysis failed")}return n.json()}async function Tv(s,e,n,r,o){const c=new FormData;c.append("dem_id",s),c.append("start_r",e.toString()),c.append("start_c",n.toString()),c.append("goal_r",r.toString()),c.append("goal_c",o.toString());const d=await fetch(`${js}/plan-path`,{method:"POST",body:c});if(!d.ok){const f=await d.json().catch(()=>({detail:"Path planning failed"}));throw new Error(f.detail||"Path planning failed")}return d.json()}const Av=({imageryRecord:s,demRecord:e,demOffsetRecord:n,onSelectImagery:r,onSelectDem:o,onLoadSamples:c,isLoading:d})=>{var x,S;const[f,h]=Ze.useState(null),[m,g]=Ze.useState(null),v=async(E,w)=>{var _;const y=(_=E.target.files)==null?void 0:_[0];if(y){h(w),g(null);try{const I=await Mv(y,w);w==="imagery"?r(I):o(I)}catch(I){g(I.message||"Failed to upload raster.")}finally{h(null)}}};return R.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 flex flex-col space-y-4",children:[R.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-3",children:[R.jsxs("div",{className:"flex items-center space-x-2",children:[R.jsx(Qm,{className:"w-4 h-4 text-mars-400"}),R.jsx("h2",{className:"text-sm font-semibold tracking-wide text-white uppercase font-mono",children:"Planetary Data Ingestion"})]}),R.jsxs("button",{onClick:c,disabled:d,className:"flex items-center space-x-1.5 text-xs font-mono px-2.5 py-1 rounded bg-mars-700 hover:bg-mars-600 text-slate-200 border border-mars-600 transition",children:[R.jsx(uv,{className:`w-3 h-3 ${d?"animate-spin":""}`}),R.jsx("span",{children:"Reload Jezero Samples"})]})]}),m&&R.jsxs("div",{className:"bg-red-950/60 border border-red-800/80 rounded-lg p-3 text-xs text-red-300 flex items-start space-x-2",children:[R.jsx(hg,{className:"w-4 h-4 text-red-400 flex-shrink-0 mt-0.5"}),R.jsx("span",{children:m})]}),R.jsxs("div",{className:"bg-mars-900/70 border border-mars-700/40 rounded-lg p-3 space-y-2.5",children:[R.jsxs("div",{className:"flex items-center justify-between",children:[R.jsxs("div",{className:"flex items-center space-x-2",children:[R.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),R.jsx("span",{className:"text-xs font-mono font-medium text-slate-200",children:"OPTICAL IMAGERY (HiRISE/CTX)"})]}),R.jsxs("label",{className:"cursor-pointer text-[11px] font-mono px-2.5 py-1 rounded bg-mars-700 hover:bg-mars-600 text-cyan-300 border border-cyan-800/50 flex items-center space-x-1 transition",children:[R.jsx(Pp,{className:"w-3 h-3"}),R.jsx("span",{children:f==="imagery"?"Ingesting...":"Upload GeoTIFF"}),R.jsx("input",{type:"file",accept:".tif,.tiff,.geotiff",className:"hidden",onChange:E=>v(E,"imagery"),disabled:f!==null})]})]}),s?R.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] font-mono bg-black/40 rounded p-2 border border-mars-700/30",children:[R.jsxs("div",{children:[R.jsx("span",{className:"text-slate-400",children:"File: "}),R.jsx("span",{className:"text-white truncate block",children:s.filename})]}),R.jsxs("div",{children:[R.jsx("span",{className:"text-slate-400",children:"Dims: "}),R.jsxs("span",{className:"text-cyan-300",children:[s.metadata.width," × ",s.metadata.height," px (",s.metadata.bands,"b)"]})]}),R.jsxs("div",{className:"col-span-2",children:[R.jsx("span",{className:"text-slate-400",children:"CRS: "}),R.jsx("span",{className:"text-amber-300 truncate block",children:s.metadata.crs_name})]}),R.jsxs("div",{children:[R.jsx("span",{className:"text-slate-400",children:"Resolution: "}),R.jsxs("span",{className:"text-slate-200",children:[s.metadata.resolution_x.toFixed(2)," m/px"]})]}),R.jsxs("div",{children:[R.jsx("span",{className:"text-slate-400",children:"NoData: "}),R.jsx("span",{className:"text-slate-200",children:s.metadata.nodata??"None"})]})]}):R.jsx("div",{className:"text-xs text-slate-500 italic py-2 text-center",children:"No optical imagery loaded"})]}),R.jsxs("div",{className:"bg-mars-900/70 border border-mars-700/40 rounded-lg p-3 space-y-2.5",children:[R.jsxs("div",{className:"flex items-center justify-between",children:[R.jsxs("div",{className:"flex items-center space-x-2",children:[R.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400"}),R.jsx("span",{className:"text-xs font-mono font-medium text-slate-200",children:"DIGITAL ELEVATION MODEL (DEM)"})]}),R.jsxs("div",{className:"flex items-center space-x-2",children:[n&&R.jsx("button",{onClick:()=>o(n),className:"text-[10px] font-mono px-2 py-0.5 rounded bg-mars-700/70 hover:bg-mars-600 text-amber-300 border border-amber-800/40",title:"Select shifted DEM to test spatial incompatibility warning",children:"Test Offset DEM"}),R.jsxs("label",{className:"cursor-pointer text-[11px] font-mono px-2.5 py-1 rounded bg-mars-700 hover:bg-mars-600 text-amber-300 border border-amber-800/50 flex items-center space-x-1 transition",children:[R.jsx(Pp,{className:"w-3 h-3"}),R.jsx("span",{children:f==="dem"?"Ingesting...":"Upload GeoTIFF"}),R.jsx("input",{type:"file",accept:".tif,.tiff,.geotiff",className:"hidden",onChange:E=>v(E,"dem"),disabled:f!==null})]})]})]}),e?R.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] font-mono bg-black/40 rounded p-2 border border-mars-700/30",children:[R.jsxs("div",{children:[R.jsx("span",{className:"text-slate-400",children:"File: "}),R.jsx("span",{className:"text-white truncate block",children:e.filename})]}),R.jsxs("div",{children:[R.jsx("span",{className:"text-slate-400",children:"Dims: "}),R.jsxs("span",{className:"text-amber-300",children:[e.metadata.width," × ",e.metadata.height," px"]})]}),R.jsxs("div",{className:"col-span-2",children:[R.jsx("span",{className:"text-slate-400",children:"CRS: "}),R.jsx("span",{className:"text-amber-300 truncate block",children:e.metadata.crs_name})]}),R.jsxs("div",{children:[R.jsx("span",{className:"text-slate-400",children:"Resolution: "}),R.jsxs("span",{className:"text-slate-200",children:[e.metadata.resolution_x.toFixed(2)," m/px"]})]}),R.jsxs("div",{children:[R.jsx("span",{className:"text-slate-400",children:"Elevation: "}),R.jsxs("span",{className:"text-emerald-400",children:[(x=e.metadata.min_val)==null?void 0:x.toFixed(0),"m to ",(S=e.metadata.max_val)==null?void 0:S.toFixed(0),"m"]})]})]}):R.jsx("div",{className:"text-xs text-slate-500 italic py-2 text-center",children:"No elevation DEM loaded"})]})]})},Cv=({report:s,isValidating:e})=>{if(e)return R.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 flex items-center justify-center space-x-3 text-slate-400 text-xs font-mono",children:[R.jsx("span",{className:"w-4 h-4 border-2 border-mars-500 border-t-transparent rounded-full animate-spin"}),R.jsx("span",{children:"Evaluating planetary spatial compatibility & CRS alignment..."})]});if(!s)return R.jsx("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 text-center text-xs font-mono text-slate-500",children:"Load both Imagery and DEM rasters to run spatial compatibility inspection."});const{is_compatible:n,crs_match:r,overlap_metrics:o,resolution_ratio:c,warnings:d,errors:f,recommendations:h}=s;return R.jsxs("div",{className:`border rounded-xl p-4 space-y-3.5 transition ${n?"bg-mars-800/60 border-emerald-800/60":"bg-red-950/40 border-red-800/70"}`,children:[R.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-2.5",children:[R.jsxs("div",{className:"flex items-center space-x-2",children:[n?R.jsx(hv,{className:"w-5 h-5 text-emerald-400"}):R.jsx(bp,{className:"w-5 h-5 text-red-400"}),R.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Spatial Compatibility Verification"})]}),R.jsx("span",{className:`text-[11px] font-mono px-2.5 py-0.5 rounded font-bold ${n?"bg-emerald-950 text-emerald-300 border border-emerald-800":"bg-red-950 text-red-300 border border-red-800"}`,children:n?"VALIDATED COMPATIBLE":"INCOMPATIBILITY DETECTED"})]}),R.jsxs("div",{className:"grid grid-cols-3 gap-2 text-[11px] font-mono",children:[R.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[R.jsx("span",{className:"text-slate-400 block text-[10px]",children:"CRS ALIGNMENT"}),R.jsxs("div",{className:"flex items-center space-x-1.5 mt-0.5",children:[r?R.jsx(J_,{className:"w-3.5 h-3.5 text-emerald-400"}):R.jsx(vv,{className:"w-3.5 h-3.5 text-amber-400"}),R.jsx("span",{className:r?"text-emerald-300":"text-amber-300",children:r?"Matched":"Reprojection Req."})]})]}),R.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[R.jsx("span",{className:"text-slate-400 block text-[10px]",children:"SPATIAL OVERLAP"}),R.jsxs("span",{className:"text-cyan-300 font-bold block mt-0.5",children:[o.imagery_coverage_pct,"% / ",o.dem_coverage_pct,"%"]})]}),R.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[R.jsx("span",{className:"text-slate-400 block text-[10px]",children:"RESOLUTION RATIO"}),R.jsxs("span",{className:"text-slate-200 block mt-0.5",children:[c.toFixed(2),"x (DEM/Img)"]})]})]}),R.jsxs("div",{className:"space-y-1",children:[R.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-slate-400",children:[R.jsx("span",{children:"Imagery Spatial Footprint Covered by DEM:"}),R.jsxs("span",{className:"text-cyan-400",children:[o.imagery_coverage_pct,"%"]})]}),R.jsx("div",{className:"w-full bg-mars-950 rounded-full h-1.5 overflow-hidden border border-mars-700/40",children:R.jsx("div",{className:`h-full transition-all duration-500 ${o.imagery_coverage_pct>80?"bg-emerald-500":o.imagery_coverage_pct>20?"bg-amber-500":"bg-red-500"}`,style:{width:`${Math.min(100,o.imagery_coverage_pct)}%`}})})]}),f.length>0&&R.jsx("div",{className:"space-y-1",children:f.map((m,g)=>R.jsxs("div",{className:"text-[11px] font-mono text-red-300 flex items-start space-x-1.5 bg-red-950/60 p-2 rounded border border-red-900/60",children:[R.jsx(bp,{className:"w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5"}),R.jsx("span",{children:m})]},g))}),d.length>0&&R.jsx("div",{className:"space-y-1",children:d.map((m,g)=>R.jsxs("div",{className:"text-[11px] font-mono text-amber-300 flex items-start space-x-1.5 bg-amber-950/40 p-2 rounded border border-amber-900/40",children:[R.jsx(hg,{className:"w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5"}),R.jsx("span",{children:m})]},g))}),h.length>0&&R.jsx("div",{className:"space-y-1",children:h.map((m,g)=>R.jsxs("div",{className:"text-[11px] font-mono text-cyan-300 flex items-start space-x-1.5 bg-cyan-950/30 p-2 rounded border border-cyan-900/40",children:[R.jsx(av,{className:"w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5"}),R.jsxs("span",{children:["Rec: ",m]})]},g))})]})},Rv=({imageryUrl:s,demColormapUrl:e,slopeUrl:n,pathCoords:r,scienceTargets:o,startCoords:c,goalCoords:d,onSetStart:f,onSetGoal:h})=>{const[m,g]=Ze.useState("imagery"),[v,x]=Ze.useState("goal"),[S,E]=Ze.useState(null),w=Ze.useRef(null),y=m==="slope"&&n?n:m==="dem"&&e?e:s||e,_=b=>{if(!w.current)return;const q=w.current.getBoundingClientRect(),H=(b.clientX-q.left)/q.width,O=(b.clientY-q.top)/q.height,k=Math.max(0,Math.min(511,Math.round(H*512))),P=Math.max(0,Math.min(511,Math.round(O*512)));v==="start"?f([P,k]):h([P,k])},I=b=>{if(!w.current)return;const q=w.current.getBoundingClientRect(),H=(b.clientX-q.left)/q.width,O=(b.clientY-q.top)/q.height;E({x:Math.round(H*512),y:Math.round(O*512)})},N=b=>({x:b[1]/512*100,y:b[0]/512*100});return R.jsxs("div",{className:"flex flex-col h-full bg-mars-900 rounded-xl border border-mars-700/60 overflow-hidden",children:[R.jsxs("div",{className:"bg-mars-800/80 px-4 py-2 border-b border-mars-700/50 flex items-center justify-between",children:[R.jsxs("div",{className:"flex items-center space-x-1 bg-mars-950/80 rounded-lg p-0.5 border border-mars-700/40 text-xs font-mono",children:[R.jsx("button",{onClick:()=>g("imagery"),disabled:!s,className:`px-3 py-1 rounded transition ${m==="imagery"?"bg-mars-700 text-cyan-300 font-bold":"text-slate-400 hover:text-slate-200"}`,children:"Optical Imagery"}),R.jsx("button",{onClick:()=>g("dem"),disabled:!e,className:`px-3 py-1 rounded transition ${m==="dem"?"bg-mars-700 text-amber-300 font-bold":"text-slate-400 hover:text-slate-200"}`,children:"DEM Colormap"}),R.jsx("button",{onClick:()=>g("slope"),disabled:!n,className:`px-3 py-1 rounded transition ${m==="slope"?"bg-mars-700 text-rose-300 font-bold":"text-slate-400 hover:text-slate-200"}`,children:"Slope Heatmap"})]}),R.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono",children:[R.jsx("span",{className:"text-slate-400 text-[11px]",children:"Click Map to Set:"}),R.jsxs("button",{onClick:()=>x("start"),className:`px-2.5 py-0.5 rounded border transition flex items-center space-x-1 ${v==="start"?"bg-emerald-950 text-emerald-300 border-emerald-600 font-bold ring-1 ring-emerald-500":"bg-mars-900 text-slate-400 border-mars-700"}`,children:[R.jsx(lv,{className:"w-3 h-3 text-emerald-400"}),R.jsx("span",{children:"Start"})]}),R.jsxs("button",{onClick:()=>x("goal"),className:`px-2.5 py-0.5 rounded border transition flex items-center space-x-1 ${v==="goal"?"bg-cyan-950 text-cyan-300 border-cyan-600 font-bold ring-1 ring-cyan-500":"bg-mars-900 text-slate-400 border-mars-700"}`,children:[R.jsx(gv,{className:"w-3 h-3 text-cyan-400"}),R.jsx("span",{children:"Goal"})]})]})]}),R.jsxs("div",{ref:w,onClick:_,onMouseMove:I,onMouseLeave:()=>E(null),className:"relative flex-1 bg-black flex items-center justify-center overflow-hidden cursor-crosshair select-none min-h-[440px]",children:[y?R.jsxs("div",{className:"relative w-full h-full max-w-[620px] max-h-[620px] aspect-square mx-auto",children:[R.jsx("img",{src:y,alt:"Martian Terrain Layer",className:"w-full h-full object-contain pointer-events-none"}),R.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[r.length>1&&R.jsx("polyline",{points:r.map(b=>{const q=N(b);return`${q.x},${q.y}`}).join(" "),fill:"none",stroke:"#10b981",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round",className:"filter drop-shadow-[0_0_4px_#10b981]"}),c&&R.jsxs("g",{transform:`translate(${N(c).x}, ${N(c).y})`,children:[R.jsx("circle",{r:"2.2",fill:"#10b981",stroke:"#ffffff",strokeWidth:"0.5",className:"animate-pulse"}),R.jsx("circle",{r:"3.5",fill:"none",stroke:"#10b981",strokeWidth:"0.4",strokeDasharray:"1 1"}),R.jsx("text",{y:"-3",fontSize:"2.5",fill:"#10b981",textAnchor:"middle",fontWeight:"bold",children:"ROVER"})]}),d&&R.jsxs("g",{transform:`translate(${N(d).x}, ${N(d).y})`,children:[R.jsx("circle",{r:"2.2",fill:"#00d2ff",stroke:"#ffffff",strokeWidth:"0.5"}),R.jsx("circle",{r:"4.0",fill:"none",stroke:"#00d2ff",strokeWidth:"0.4",strokeDasharray:"1.5 1.5"}),R.jsx("text",{y:"-3.5",fontSize:"2.5",fill:"#00d2ff",textAnchor:"middle",fontWeight:"bold",children:"GOAL"})]}),o.map(b=>{const q=N(b.coords_pixel);return R.jsxs("g",{transform:`translate(${q.x}, ${q.y})`,children:[R.jsx("polygon",{points:"0,-2.5 2.5,1.5 -2.5,1.5",fill:"#f59e0b",stroke:"#ffffff",strokeWidth:"0.3"}),R.jsx("text",{y:"4",fontSize:"2.0",fill:"#f59e0b",textAnchor:"middle",children:b.id})]},b.id)})]})]}):R.jsxs("div",{className:"text-slate-500 font-mono text-xs flex flex-col items-center space-y-2",children:[R.jsx(sv,{className:"w-8 h-8 text-slate-600 animate-pulse"}),R.jsx("span",{children:"No raster layers available for 2D visualization"})]}),R.jsxs("div",{className:"absolute bottom-2 left-2 bg-mars-950/80 backdrop-blur border border-mars-700/50 rounded px-2.5 py-1 text-[11px] font-mono text-slate-300 flex items-center space-x-3 pointer-events-none",children:[R.jsxs("div",{className:"flex items-center space-x-1",children:[R.jsx(rv,{className:"w-3.5 h-3.5 text-mars-400"}),R.jsxs("span",{children:["X: ",(S==null?void 0:S.x)??"—"]}),R.jsxs("span",{children:["Y: ",(S==null?void 0:S.y)??"—"]})]}),R.jsxs("div",{className:"text-emerald-400",children:["START: [",c[0],", ",c[1],"]"]}),R.jsxs("div",{className:"text-cyan-400",children:["GOAL: [",d[0],", ",d[1],"]"]})]})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="170",bv=0,Lp=1,Pv=2,gg=1,_g=2,ki=3,Sr=0,Ln=1,zi=2,xr=0,Fs=1,Np=2,Dp=3,Ip=4,Lv=5,Xr=100,Nv=101,Dv=102,Iv=103,Uv=104,Fv=200,Ov=201,kv=202,zv=203,Zu=204,Qu=205,Bv=206,Hv=207,Vv=208,Gv=209,Wv=210,jv=211,Xv=212,qv=213,Yv=214,Ju=0,ed=1,td=2,zs=3,nd=4,id=5,rd=6,sd=7,vg=0,$v=1,Kv=2,yr=0,Zv=1,Qv=2,Jv=3,ex=4,tx=5,nx=6,ix=7,xg=300,Bs=301,Hs=302,ad=303,od=304,Pl=306,ld=1e3,Bi=1001,cd=1002,li=1003,rx=1004,Zo=1005,_i=1006,vu=1007,Yr=1008,Wi=1009,yg=1010,Sg=1011,Fa=1012,Bd=1013,$r=1014,Hi=1015,ka=1016,Hd=1017,Vd=1018,Vs=1020,Mg=35902,Eg=1021,wg=1022,oi=1023,Tg=1024,Ag=1025,Os=1026,Gs=1027,Cg=1028,Gd=1029,Rg=1030,Wd=1031,jd=1033,Sl=33776,Ml=33777,El=33778,wl=33779,ud=35840,dd=35841,fd=35842,hd=35843,pd=36196,md=37492,gd=37496,_d=37808,vd=37809,xd=37810,yd=37811,Sd=37812,Md=37813,Ed=37814,wd=37815,Td=37816,Ad=37817,Cd=37818,Rd=37819,bd=37820,Pd=37821,Tl=36492,Ld=36494,Nd=36495,bg=36283,Dd=36284,Id=36285,Ud=36286,sx=3200,ax=3201,Pg=0,ox=1,vr="",qn="srgb",Xs="srgb-linear",Ll="linear",bt="srgb",Ss=7680,Up=519,lx=512,cx=513,ux=514,Lg=515,dx=516,fx=517,hx=518,px=519,Fp=35044,Op="300 es",Vi=2e3,Cl=2001;class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xu=Math.PI/180,Fd=180/Math.PI;function za(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]).toLowerCase()}function Pn(s,e,n){return Math.max(e,Math.min(n,s))}function mx(s,e){return(s%e+e)%e}function yu(s,e,n){return(1-n)*s+n*e}function Ra(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(e=0,n=0){Tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*o+e.x,this.y=c*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,o,c,d,f,h,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,h,m)}set(e,n,r,o,c,d,f,h,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=n,g[4]=c,g[5]=h,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[3],h=r[6],m=r[1],g=r[4],v=r[7],x=r[2],S=r[5],E=r[8],w=o[0],y=o[3],_=o[6],I=o[1],N=o[4],b=o[7],q=o[2],H=o[5],O=o[8];return c[0]=d*w+f*I+h*q,c[3]=d*y+f*N+h*H,c[6]=d*_+f*b+h*O,c[1]=m*w+g*I+v*q,c[4]=m*y+g*N+v*H,c[7]=m*_+g*b+v*O,c[2]=x*w+S*I+E*q,c[5]=x*y+S*N+E*H,c[8]=x*_+S*b+E*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],h=e[6],m=e[7],g=e[8];return n*d*g-n*f*m-r*c*g+r*f*h+o*c*m-o*d*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],h=e[6],m=e[7],g=e[8],v=g*d-f*m,x=f*h-g*c,S=m*c-d*h,E=n*v+r*x+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(o*m-g*r)*w,e[2]=(f*r-o*d)*w,e[3]=x*w,e[4]=(g*n-o*h)*w,e[5]=(o*c-f*n)*w,e[6]=S*w,e[7]=(r*h-m*n)*w,e[8]=(d*n-r*c)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,d,f){const h=Math.cos(c),m=Math.sin(c);return this.set(r*h,r*m,-r*(h*d+m*f)+d+e,-o*m,o*h,-o*(-m*d+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Su.makeScale(e,n)),this}rotate(e){return this.premultiply(Su.makeRotation(-e)),this}translate(e,n){return this.premultiply(Su.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Su=new ot;function Ng(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Oa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gx(){const s=Oa("canvas");return s.style.display="block",s}const kp={};function Ia(s){s in kp||(kp[s]=!0,console.warn(s))}function _x(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function vx(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xx(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yt={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===bt&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===bt&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vr?Ll:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const zp=[.64,.33,.3,.6,.15,.06],Bp=[.2126,.7152,.0722],Hp=[.3127,.329],Vp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);yt.define({[Xs]:{primaries:zp,whitePoint:Hp,transfer:Ll,toXYZ:Vp,fromXYZ:Gp,luminanceCoefficients:Bp,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:zp,whitePoint:Hp,transfer:bt,toXYZ:Vp,fromXYZ:Gp,luminanceCoefficients:Bp,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}});let Ms;class yx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=Oa("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Oa("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=Gi(c[d]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Gi(n[r]/255)*255):n[r]=Gi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sx=0;class Dg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=za(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?c.push(Mu(o[d].image)):c.push(Mu(o[d]))}else c=Mu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Mu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?yx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mx=0;class yn extends qs{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,r=Bi,o=Bi,c=_i,d=Yr,f=oi,h=Wi,m=yn.DEFAULT_ANISOTROPY,g=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=za(),this.name="",this.source=new Dg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ld:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ld:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=xg;yn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,r=0,o=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*o+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*o+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*o+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*o+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const h=e.elements,m=h[0],g=h[4],v=h[8],x=h[1],S=h[5],E=h[9],w=h[2],y=h[6],_=h[10];if(Math.abs(g-x)<.01&&Math.abs(v-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+w)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(m+1)/2,b=(S+1)/2,q=(_+1)/2,H=(g+x)/4,O=(v+w)/4,k=(E+y)/4;return N>b&&N>q?N<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(N),o=H/r,c=O/r):b>q?b<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(b),r=H/o,c=k/o):q<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(q),r=O/c,o=k/c),this.set(r,o,c,n),this}let I=Math.sqrt((y-E)*(y-E)+(v-w)*(v-w)+(x-g)*(x-g));return Math.abs(I)<.001&&(I=1),this.x=(y-E)/I,this.y=(v-w)/I,this.z=(x-g)/I,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ex extends qs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new yn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Dg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends Ex{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Ig extends yn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=li,this.minFilter=li,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wx extends yn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=li,this.minFilter=li,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ba{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,d,f){let h=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];const x=c[d+0],S=c[d+1],E=c[d+2],w=c[d+3];if(f===0){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=v;return}if(f===1){e[n+0]=x,e[n+1]=S,e[n+2]=E,e[n+3]=w;return}if(v!==w||h!==x||m!==S||g!==E){let y=1-f;const _=h*x+m*S+g*E+v*w,I=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const q=Math.sqrt(N),H=Math.atan2(q,_*I);y=Math.sin(y*H)/q,f=Math.sin(f*H)/q}const b=f*I;if(h=h*y+x*b,m=m*y+S*b,g=g*y+E*b,v=v*y+w*b,y===1-f){const q=1/Math.sqrt(h*h+m*m+g*g+v*v);h*=q,m*=q,g*=q,v*=q}}e[n]=h,e[n+1]=m,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,o,c,d){const f=r[o],h=r[o+1],m=r[o+2],g=r[o+3],v=c[d],x=c[d+1],S=c[d+2],E=c[d+3];return e[n]=f*E+g*v+h*S-m*x,e[n+1]=h*E+g*x+m*v-f*S,e[n+2]=m*E+g*S+f*x-h*v,e[n+3]=g*E-f*v-h*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,d=e._order,f=Math.cos,h=Math.sin,m=f(r/2),g=f(o/2),v=f(c/2),x=h(r/2),S=h(o/2),E=h(c/2);switch(d){case"XYZ":this._x=x*g*v+m*S*E,this._y=m*S*v-x*g*E,this._z=m*g*E+x*S*v,this._w=m*g*v-x*S*E;break;case"YXZ":this._x=x*g*v+m*S*E,this._y=m*S*v-x*g*E,this._z=m*g*E-x*S*v,this._w=m*g*v+x*S*E;break;case"ZXY":this._x=x*g*v-m*S*E,this._y=m*S*v+x*g*E,this._z=m*g*E+x*S*v,this._w=m*g*v-x*S*E;break;case"ZYX":this._x=x*g*v-m*S*E,this._y=m*S*v+x*g*E,this._z=m*g*E-x*S*v,this._w=m*g*v+x*S*E;break;case"YZX":this._x=x*g*v+m*S*E,this._y=m*S*v+x*g*E,this._z=m*g*E-x*S*v,this._w=m*g*v-x*S*E;break;case"XZY":this._x=x*g*v-m*S*E,this._y=m*S*v-x*g*E,this._z=m*g*E+x*S*v,this._w=m*g*v+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],d=n[1],f=n[5],h=n[9],m=n[2],g=n[6],v=n[10],x=r+f+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-h)*S,this._y=(c-m)*S,this._z=(d-o)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(g-h)/S,this._x=.25*S,this._y=(o+d)/S,this._z=(c+m)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(c-m)/S,this._x=(o+d)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(d-o)/S,this._x=(c+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,d=e._w,f=n._x,h=n._y,m=n._z,g=n._w;return this._x=r*g+d*f+o*m-c*h,this._y=o*g+d*h+c*f-r*m,this._z=c*g+d*m+r*h-o*f,this._w=d*g-r*f-o*h-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,d=this._w;let f=d*e._w+r*e._x+o*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=o,this._z=c,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,f),v=Math.sin((1-n)*g)/m,x=Math.sin(n*g)/m;return this._w=d*v+this._w*x,this._x=r*v+this._x*x,this._y=o*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,n=0,r=0){te.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,d=e.y,f=e.z,h=e.w,m=2*(d*o-f*r),g=2*(f*n-c*o),v=2*(c*r-d*n);return this.x=n+h*m+d*v-f*g,this.y=r+h*g+f*m-c*v,this.z=o+h*v+c*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,d=n.x,f=n.y,h=n.z;return this.x=o*h-c*f,this.y=c*d-r*h,this.z=r*f-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new te,Wp=new Ba;class Ha{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ii):ii.fromBufferAttribute(c,d),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Qo.copy(r.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),Jo.subVectors(this.max,ba),Es.subVectors(e.a,ba),ws.subVectors(e.b,ba),Ts.subVectors(e.c,ba),fr.subVectors(ws,Es),hr.subVectors(Ts,ws),kr.subVectors(Es,Ts);let n=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-kr.z,kr.y,fr.z,0,-fr.x,hr.z,0,-hr.x,kr.z,0,-kr.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-kr.y,kr.x,0];return!wu(n,Es,ws,Ts,Jo)||(n=[1,0,0,0,1,0,0,0,1],!wu(n,Es,ws,Ts,Jo))?!1:(el.crossVectors(fr,hr),n=[el.x,el.y,el.z],wu(n,Es,ws,Ts,Jo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new te,new te,new te,new te,new te,new te,new te,new te],ii=new te,Qo=new Ha,Es=new te,ws=new te,Ts=new te,fr=new te,hr=new te,kr=new te,ba=new te,Jo=new te,el=new te,zr=new te;function wu(s,e,n,r,o){for(let c=0,d=s.length-3;c<=d;c+=3){zr.fromArray(s,c);const f=o.x*Math.abs(zr.x)+o.y*Math.abs(zr.y)+o.z*Math.abs(zr.z),h=e.dot(zr),m=n.dot(zr),g=r.dot(zr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>f)return!1}return!0}const Tx=new Ha,Pa=new te,Tu=new te;class Nl{constructor(e=new te,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Tx.setFromPoints(e).getCenter(r);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const n=Pa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Pa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(Tu)),this.expandByPoint(Pa.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new te,Au=new te,tl=new te,pr=new te,Cu=new te,nl=new te,Ru=new te;class Ug{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Au.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(Au);const c=e.distanceTo(n)*.5,d=-this.direction.dot(tl),f=pr.dot(this.direction),h=-pr.dot(tl),m=pr.lengthSq(),g=Math.abs(1-d*d);let v,x,S,E;if(g>0)if(v=d*h-f,x=d*f-h,E=c*g,v>=0)if(x>=-E)if(x<=E){const w=1/g;v*=w,x*=w,S=v*(v+d*x+2*f)+x*(d*v+x+2*h)+m}else x=c,v=Math.max(0,-(d*x+f)),S=-v*v+x*(x+2*h)+m;else x=-c,v=Math.max(0,-(d*x+f)),S=-v*v+x*(x+2*h)+m;else x<=-E?(v=Math.max(0,-(-d*c+f)),x=v>0?-c:Math.min(Math.max(-c,-h),c),S=-v*v+x*(x+2*h)+m):x<=E?(v=0,x=Math.min(Math.max(-c,-h),c),S=x*(x+2*h)+m):(v=Math.max(0,-(d*c+f)),x=v>0?c:Math.min(Math.max(-c,-h),c),S=-v*v+x*(x+2*h)+m);else x=d>0?-c:c,v=Math.max(0,-(d*x+f)),S=-v*v+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Au).addScaledVector(tl,x),S}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),o=Ii.dot(Ii)-r*r,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),f=r-d,h=r+d;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,d,f,h;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),g>=0?(c=(e.min.y-x.y)*g,d=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,d=(e.min.y-x.y)*g),r>d||c>o||((c>r||isNaN(r))&&(r=c),(d<o||isNaN(o))&&(o=d),v>=0?(f=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,o,c){Cu.subVectors(n,e),nl.subVectors(r,e),Ru.crossVectors(Cu,nl);let d=this.direction.dot(Ru),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;pr.subVectors(this.origin,e);const h=f*this.direction.dot(nl.crossVectors(pr,nl));if(h<0)return null;const m=f*this.direction.dot(Cu.cross(pr));if(m<0||h+m>d)return null;const g=-f*pr.dot(Ru);return g<0?null:this.at(g/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,o,c,d,f,h,m,g,v,x,S,E,w,y){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,h,m,g,v,x,S,E,w,y)}set(e,n,r,o,c,d,f,h,m,g,v,x,S,E,w,y){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=c,_[5]=d,_[9]=f,_[13]=h,_[2]=m,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=E,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/As.setFromMatrixColumn(e,0).length(),c=1/As.setFromMatrixColumn(e,1).length(),d=1/As.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),h=Math.cos(o),m=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=d*g,S=d*v,E=f*g,w=f*v;n[0]=h*g,n[4]=-h*v,n[8]=m,n[1]=S+E*m,n[5]=x-w*m,n[9]=-f*h,n[2]=w-x*m,n[6]=E+S*m,n[10]=d*h}else if(e.order==="YXZ"){const x=h*g,S=h*v,E=m*g,w=m*v;n[0]=x+w*f,n[4]=E*f-S,n[8]=d*m,n[1]=d*v,n[5]=d*g,n[9]=-f,n[2]=S*f-E,n[6]=w+x*f,n[10]=d*h}else if(e.order==="ZXY"){const x=h*g,S=h*v,E=m*g,w=m*v;n[0]=x-w*f,n[4]=-d*v,n[8]=E+S*f,n[1]=S+E*f,n[5]=d*g,n[9]=w-x*f,n[2]=-d*m,n[6]=f,n[10]=d*h}else if(e.order==="ZYX"){const x=d*g,S=d*v,E=f*g,w=f*v;n[0]=h*g,n[4]=E*m-S,n[8]=x*m+w,n[1]=h*v,n[5]=w*m+x,n[9]=S*m-E,n[2]=-m,n[6]=f*h,n[10]=d*h}else if(e.order==="YZX"){const x=d*h,S=d*m,E=f*h,w=f*m;n[0]=h*g,n[4]=w-x*v,n[8]=E*v+S,n[1]=v,n[5]=d*g,n[9]=-f*g,n[2]=-m*g,n[6]=S*v+E,n[10]=x-w*v}else if(e.order==="XZY"){const x=d*h,S=d*m,E=f*h,w=f*m;n[0]=h*g,n[4]=-v,n[8]=m*g,n[1]=x*v+w,n[5]=d*g,n[9]=S*v-E,n[2]=E*v-S,n[6]=f*g,n[10]=w*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ax,e,Cx)}lookAt(e,n,r){const o=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),mr.crossVectors(r,Fn),mr.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),mr.crossVectors(r,Fn)),mr.normalize(),il.crossVectors(Fn,mr),o[0]=mr.x,o[4]=il.x,o[8]=Fn.x,o[1]=mr.y,o[5]=il.y,o[9]=Fn.y,o[2]=mr.z,o[6]=il.z,o[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[4],h=r[8],m=r[12],g=r[1],v=r[5],x=r[9],S=r[13],E=r[2],w=r[6],y=r[10],_=r[14],I=r[3],N=r[7],b=r[11],q=r[15],H=o[0],O=o[4],k=o[8],P=o[12],A=o[1],F=o[5],se=o[9],Y=o[13],oe=o[2],de=o[6],ae=o[10],le=o[14],B=o[3],ue=o[7],ee=o[11],U=o[15];return c[0]=d*H+f*A+h*oe+m*B,c[4]=d*O+f*F+h*de+m*ue,c[8]=d*k+f*se+h*ae+m*ee,c[12]=d*P+f*Y+h*le+m*U,c[1]=g*H+v*A+x*oe+S*B,c[5]=g*O+v*F+x*de+S*ue,c[9]=g*k+v*se+x*ae+S*ee,c[13]=g*P+v*Y+x*le+S*U,c[2]=E*H+w*A+y*oe+_*B,c[6]=E*O+w*F+y*de+_*ue,c[10]=E*k+w*se+y*ae+_*ee,c[14]=E*P+w*Y+y*le+_*U,c[3]=I*H+N*A+b*oe+q*B,c[7]=I*O+N*F+b*de+q*ue,c[11]=I*k+N*se+b*ae+q*ee,c[15]=I*P+N*Y+b*le+q*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],d=e[1],f=e[5],h=e[9],m=e[13],g=e[2],v=e[6],x=e[10],S=e[14],E=e[3],w=e[7],y=e[11],_=e[15];return E*(+c*h*v-o*m*v-c*f*x+r*m*x+o*f*S-r*h*S)+w*(+n*h*S-n*m*x+c*d*x-o*d*S+o*m*g-c*h*g)+y*(+n*m*v-n*f*S-c*d*v+r*d*S+c*f*g-r*m*g)+_*(-o*f*g-n*h*v+n*f*x+o*d*v-r*d*x+r*h*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],h=e[6],m=e[7],g=e[8],v=e[9],x=e[10],S=e[11],E=e[12],w=e[13],y=e[14],_=e[15],I=v*y*m-w*x*m+w*h*S-f*y*S-v*h*_+f*x*_,N=E*x*m-g*y*m-E*h*S+d*y*S+g*h*_-d*x*_,b=g*w*m-E*v*m+E*f*S-d*w*S-g*f*_+d*v*_,q=E*v*h-g*w*h-E*f*x+d*w*x+g*f*y-d*v*y,H=n*I+r*N+o*b+c*q;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/H;return e[0]=I*O,e[1]=(w*x*c-v*y*c-w*o*S+r*y*S+v*o*_-r*x*_)*O,e[2]=(f*y*c-w*h*c+w*o*m-r*y*m-f*o*_+r*h*_)*O,e[3]=(v*h*c-f*x*c-v*o*m+r*x*m+f*o*S-r*h*S)*O,e[4]=N*O,e[5]=(g*y*c-E*x*c+E*o*S-n*y*S-g*o*_+n*x*_)*O,e[6]=(E*h*c-d*y*c-E*o*m+n*y*m+d*o*_-n*h*_)*O,e[7]=(d*x*c-g*h*c+g*o*m-n*x*m-d*o*S+n*h*S)*O,e[8]=b*O,e[9]=(E*v*c-g*w*c-E*r*S+n*w*S+g*r*_-n*v*_)*O,e[10]=(d*w*c-E*f*c+E*r*m-n*w*m-d*r*_+n*f*_)*O,e[11]=(g*f*c-d*v*c-g*r*m+n*v*m+d*r*S-n*f*S)*O,e[12]=q*O,e[13]=(g*w*o-E*v*o+E*r*x-n*w*x-g*r*y+n*v*y)*O,e[14]=(E*f*o-d*w*o-E*r*h+n*w*h+d*r*y-n*f*y)*O,e[15]=(d*v*o-g*f*o+g*r*h-n*v*h-d*r*x+n*f*x)*O,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,d=e.x,f=e.y,h=e.z,m=c*d,g=c*f;return this.set(m*d+r,m*f-o*h,m*h+o*f,0,m*f+o*h,g*f+r,g*h-o*d,0,m*h-o*f,g*h+o*d,c*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,d){return this.set(1,r,c,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,d=n._y,f=n._z,h=n._w,m=c+c,g=d+d,v=f+f,x=c*m,S=c*g,E=c*v,w=d*g,y=d*v,_=f*v,I=h*m,N=h*g,b=h*v,q=r.x,H=r.y,O=r.z;return o[0]=(1-(w+_))*q,o[1]=(S+b)*q,o[2]=(E-N)*q,o[3]=0,o[4]=(S-b)*H,o[5]=(1-(x+_))*H,o[6]=(y+I)*H,o[7]=0,o[8]=(E+N)*O,o[9]=(y-I)*O,o[10]=(1-(x+w))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=As.set(o[0],o[1],o[2]).length();const d=As.set(o[4],o[5],o[6]).length(),f=As.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],ri.copy(this);const m=1/c,g=1/d,v=1/f;return ri.elements[0]*=m,ri.elements[1]*=m,ri.elements[2]*=m,ri.elements[4]*=g,ri.elements[5]*=g,ri.elements[6]*=g,ri.elements[8]*=v,ri.elements[9]*=v,ri.elements[10]*=v,n.setFromRotationMatrix(ri),r.x=c,r.y=d,r.z=f,this}makePerspective(e,n,r,o,c,d,f=Vi){const h=this.elements,m=2*c/(n-e),g=2*c/(r-o),v=(n+e)/(n-e),x=(r+o)/(r-o);let S,E;if(f===Vi)S=-(d+c)/(d-c),E=-2*d*c/(d-c);else if(f===Cl)S=-d/(d-c),E=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,c,d,f=Vi){const h=this.elements,m=1/(n-e),g=1/(r-o),v=1/(d-c),x=(n+e)*m,S=(r+o)*g;let E,w;if(f===Vi)E=(d+c)*v,w=-2*v;else if(f===Cl)E=c*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const As=new te,ri=new Bt,Ax=new te(0,0,0),Cx=new te(1,1,1),mr=new te,il=new te,Fn=new te,jp=new Bt,Xp=new Ba;class yi{constructor(e=0,n=0,r=0,o=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],d=o[4],f=o[8],h=o[1],m=o[5],g=o[9],v=o[2],x=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-Pn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Xp.setFromEuler(this),this.setFromQuaternion(Xp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class Fg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rx=0;const qp=new te,Cs=new Ba,Ui=new Bt,rl=new te,La=new te,bx=new te,Px=new Ba,Yp=new te(1,0,0),$p=new te(0,1,0),Kp=new te(0,0,1),Zp={type:"added"},Lx={type:"removed"},Rs={type:"childadded",child:null},bu={type:"childremoved",child:null};class sn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new te,n=new yi,r=new Ba,o=new te(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ot}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Yp,e)}rotateY(e){return this.rotateOnAxis($p,e)}rotateZ(e){return this.rotateOnAxis(Kp,e)}translateOnAxis(e,n){return qp.copy(e).applyQuaternion(this.quaternion),this.position.add(qp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Yp,e)}translateY(e){return this.translateOnAxis($p,e)}translateZ(e){return this.translateOnAxis(Kp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?rl.copy(e):rl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(La,rl,this.up):Ui.lookAt(rl,La,this.up),this.quaternion.setFromRotationMatrix(Ui),o&&(Ui.extractRotation(o.matrixWorld),Cs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Lx),bu.child=e,this.dispatchEvent(bu),bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,bx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,Px,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const v=h[m];c(e.shapes,v)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(c(e.materials,this.material[h]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(c(e.animations,h))}}if(n){const f=d(e.geometries),h=d(e.materials),m=d(e.textures),g=d(e.images),v=d(e.shapes),x=d(e.skeletons),S=d(e.animations),E=d(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function d(f){const h=[];for(const m in f){const g=f[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}sn.DEFAULT_UP=new te(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new te,Fi=new te,Pu=new te,Oi=new te,bs=new te,Ps=new te,Qp=new te,Lu=new te,Nu=new te,Du=new te,Iu=new Vt,Uu=new Vt,Fu=new Vt;class ai{constructor(e=new te,n=new te,r=new te){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),si.subVectors(e,n),o.cross(si);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){si.subVectors(o,n),Fi.subVectors(r,n),Pu.subVectors(e,n);const d=si.dot(si),f=si.dot(Fi),h=si.dot(Pu),m=Fi.dot(Fi),g=Fi.dot(Pu),v=d*m-f*f;if(v===0)return c.set(0,0,0),null;const x=1/v,S=(m*h-f*g)*x,E=(d*g-f*h)*x;return c.set(1-S-E,E,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,r,o,c,d,f,h){return this.getBarycoord(e,n,r,o,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Oi.x),h.addScaledVector(d,Oi.y),h.addScaledVector(f,Oi.z),h)}static getInterpolatedAttribute(e,n,r,o,c,d){return Iu.setScalar(0),Uu.setScalar(0),Fu.setScalar(0),Iu.fromBufferAttribute(e,n),Uu.fromBufferAttribute(e,r),Fu.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(Iu,c.x),d.addScaledVector(Uu,c.y),d.addScaledVector(Fu,c.z),d}static isFrontFacing(e,n,r,o){return si.subVectors(r,n),Fi.subVectors(e,n),si.cross(Fi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),si.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return ai.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let d,f;bs.subVectors(o,r),Ps.subVectors(c,r),Lu.subVectors(e,r);const h=bs.dot(Lu),m=Ps.dot(Lu);if(h<=0&&m<=0)return n.copy(r);Nu.subVectors(e,o);const g=bs.dot(Nu),v=Ps.dot(Nu);if(g>=0&&v<=g)return n.copy(o);const x=h*v-g*m;if(x<=0&&h>=0&&g<=0)return d=h/(h-g),n.copy(r).addScaledVector(bs,d);Du.subVectors(e,c);const S=bs.dot(Du),E=Ps.dot(Du);if(E>=0&&S<=E)return n.copy(c);const w=S*m-h*E;if(w<=0&&m>=0&&E<=0)return f=m/(m-E),n.copy(r).addScaledVector(Ps,f);const y=g*E-S*v;if(y<=0&&v-g>=0&&S-E>=0)return Qp.subVectors(c,o),f=(v-g)/(v-g+(S-E)),n.copy(o).addScaledVector(Qp,f);const _=1/(y+w+x);return d=w*_,f=x*_,n.copy(r).addScaledVector(bs,d).addScaledVector(Ps,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},sl={h:0,s:0,l:0};function Ou(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class _t{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=yt.workingColorSpace){return this.r=e,this.g=n,this.b=r,yt.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=yt.workingColorSpace){if(e=mx(e,1),n=Pn(n,0,1),r=Pn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=Ou(d,c,e+1/3),this.g=Ou(d,c,e),this.b=Ou(d,c,e-1/3)}return yt.toWorkingColorSpace(this,o),this}setStyle(e,n=qn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const r=Og[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return yt.fromWorkingColorSpace(hn.copy(this),e),Math.round(Pn(hn.r*255,0,255))*65536+Math.round(Pn(hn.g*255,0,255))*256+Math.round(Pn(hn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=yt.workingColorSpace){yt.fromWorkingColorSpace(hn.copy(this),n);const r=hn.r,o=hn.g,c=hn.b,d=Math.max(r,o,c),f=Math.min(r,o,c);let h,m;const g=(f+d)/2;if(f===d)h=0,m=0;else{const v=d-f;switch(m=g<=.5?v/(d+f):v/(2-d-f),d){case r:h=(o-c)/v+(o<c?6:0);break;case o:h=(c-r)/v+2;break;case c:h=(r-o)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,n=yt.workingColorSpace){return yt.fromWorkingColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=qn){yt.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,r=hn.g,o=hn.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(sl);const r=yu(gr.h,sl.h,n),o=yu(gr.s,sl.s,n),c=yu(gr.l,sl.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new _t;_t.NAMES=Og;let Nx=0;class Ys extends qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=za(),this.name="",this.blending=Fs,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zu,this.blendDst=Qu,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(r.blending=this.blending),this.side!==Sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Zu&&(r.blendSrc=this.blendSrc),this.blendDst!==Qu&&(r.blendDst=this.blendDst),this.blendEquation!==Xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const d=[];for(const f in c){const h=c[f];delete h.metadata,d.push(h)}return d}if(n){const c=o(e.textures),d=o(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kg extends Ys{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new te,al=new Tt;class xi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Fp,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)al.fromBufferAttribute(this,n),al.applyMatrix3(e),this.setXY(n,al.x,al.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix3(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ra(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=bn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ra(n,this.array)),n}setX(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ra(n,this.array)),n}setY(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ra(n,this.array)),n}setZ(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ra(n,this.array)),n}setW(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),o=bn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),o=bn(o,this.array),c=bn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fp&&(e.usage=this.usage),e}}class zg extends xi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Bg extends xi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ci extends xi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Dx=0;const Xn=new Bt,ku=new sn,Ls=new te,On=new Ha,Na=new Ha,tn=new te;class Si extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ng(e)?Bg:zg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ot().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,r){return Xn.makeTranslation(e,n,r),this.applyMatrix4(Xn),this}scale(e,n,r){return Xn.makeScale(e,n,r),this.applyMatrix4(Xn),this}lookAt(e){return ku.lookAt(e),ku.updateMatrix(),this.applyMatrix4(ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ci(r,3))}else{for(let r=0,o=n.count;r<o;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];On.setFromBufferAttribute(c),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const f=n[c];Na.setFromBufferAttribute(f),this.morphTargetsRelative?(tn.addVectors(On.min,Na.min),On.expandByPoint(tn),tn.addVectors(On.max,Na.max),On.expandByPoint(tn)):(On.expandByPoint(Na.min),On.expandByPoint(Na.max))}On.getCenter(r);let o=0;for(let c=0,d=e.count;c<d;c++)tn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(tn));if(n)for(let c=0,d=n.length;c<d;c++){const f=n[c],h=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)tn.fromBufferAttribute(f,m),h&&(Ls.fromBufferAttribute(e,m),tn.add(Ls)),o=Math.max(o,r.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],h=[];for(let k=0;k<r.count;k++)f[k]=new te,h[k]=new te;const m=new te,g=new te,v=new te,x=new Tt,S=new Tt,E=new Tt,w=new te,y=new te;function _(k,P,A){m.fromBufferAttribute(r,k),g.fromBufferAttribute(r,P),v.fromBufferAttribute(r,A),x.fromBufferAttribute(c,k),S.fromBufferAttribute(c,P),E.fromBufferAttribute(c,A),g.sub(m),v.sub(m),S.sub(x),E.sub(x);const F=1/(S.x*E.y-E.x*S.y);isFinite(F)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(F),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(F),f[k].add(w),f[P].add(w),f[A].add(w),h[k].add(y),h[P].add(y),h[A].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let k=0,P=I.length;k<P;++k){const A=I[k],F=A.start,se=A.count;for(let Y=F,oe=F+se;Y<oe;Y+=3)_(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const N=new te,b=new te,q=new te,H=new te;function O(k){q.fromBufferAttribute(o,k),H.copy(q);const P=f[k];N.copy(P),N.sub(q.multiplyScalar(q.dot(P))).normalize(),b.crossVectors(H,P);const F=b.dot(h[k])<0?-1:1;d.setXYZW(k,N.x,N.y,N.z,F)}for(let k=0,P=I.length;k<P;++k){const A=I[k],F=A.start,se=A.count;for(let Y=F,oe=F+se;Y<oe;Y+=3)O(e.getX(Y+0)),O(e.getX(Y+1)),O(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const o=new te,c=new te,d=new te,f=new te,h=new te,m=new te,g=new te,v=new te;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),w=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),g.subVectors(d,c),v.subVectors(o,c),g.cross(v),f.fromBufferAttribute(r,E),h.fromBufferAttribute(r,w),m.fromBufferAttribute(r,y),f.add(g),h.add(g),m.add(g),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),g.subVectors(d,c),v.subVectors(o,c),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(f,h){const m=f.array,g=f.itemSize,v=f.normalized,x=new m.constructor(h.length*g);let S=0,E=0;for(let w=0,y=h.length;w<y;w++){f.isInterleavedBufferAttribute?S=h[w]*f.data.stride+f.offset:S=h[w]*g;for(let _=0;_<g;_++)x[E++]=m[S++]}return new xi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Si,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],m=e(h,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const h=[],m=c[f];for(let g=0,v=m.length;g<v;g++){const x=m[g],S=e(x,r);h.push(S)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,h=d.length;f<h;f++){const m=d[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];g.push(S.toJSON(e.data))}g.length>0&&(o[h]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(n))}const c=e.morphAttributes;for(const m in c){const g=[],v=c[m];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jp=new Bt,Br=new Ug,ol=new Nl,em=new te,ll=new te,cl=new te,ul=new te,zu=new te,dl=new te,tm=new te,fl=new te;class vi extends sn{constructor(e=new Si,n=new kg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){dl.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const g=f[h],v=c[h];g!==0&&(zu.fromBufferAttribute(v,e),d?dl.addScaledVector(zu,g):dl.addScaledVector(zu.sub(n),g))}n.add(dl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ol.copy(r.boundingSphere),ol.applyMatrix4(c),Br.copy(e.ray).recast(e.near),!(ol.containsPoint(Br.origin)===!1&&(Br.intersectSphere(ol,em)===null||Br.origin.distanceToSquared(em)>(e.far-e.near)**2))&&(Jp.copy(c).invert(),Br.copy(e.ray).applyMatrix4(Jp),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,r){let o;const c=this.geometry,d=this.material,f=c.index,h=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(d))for(let E=0,w=x.length;E<w;E++){const y=x[E],_=d[y.materialIndex],I=Math.max(y.start,S.start),N=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let b=I,q=N;b<q;b+=3){const H=f.getX(b),O=f.getX(b+1),k=f.getX(b+2);o=hl(this,_,e,r,m,g,v,H,O,k),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=E,_=w;y<_;y+=3){const I=f.getX(y),N=f.getX(y+1),b=f.getX(y+2);o=hl(this,d,e,r,m,g,v,I,N,b),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(d))for(let E=0,w=x.length;E<w;E++){const y=x[E],_=d[y.materialIndex],I=Math.max(y.start,S.start),N=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let b=I,q=N;b<q;b+=3){const H=b,O=b+1,k=b+2;o=hl(this,_,e,r,m,g,v,H,O,k),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=E,_=w;y<_;y+=3){const I=y,N=y+1,b=y+2;o=hl(this,d,e,r,m,g,v,I,N,b),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function Ix(s,e,n,r,o,c,d,f){let h;if(e.side===Ln?h=r.intersectTriangle(d,c,o,!0,f):h=r.intersectTriangle(o,c,d,e.side===Sr,f),h===null)return null;fl.copy(f),fl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(fl);return m<n.near||m>n.far?null:{distance:m,point:fl.clone(),object:s}}function hl(s,e,n,r,o,c,d,f,h,m){s.getVertexPosition(f,ll),s.getVertexPosition(h,cl),s.getVertexPosition(m,ul);const g=Ix(s,e,n,r,ll,cl,ul,tm);if(g){const v=new te;ai.getBarycoord(tm,ll,cl,ul,v),o&&(g.uv=ai.getInterpolatedAttribute(o,f,h,m,v,new Tt)),c&&(g.uv1=ai.getInterpolatedAttribute(c,f,h,m,v,new Tt)),d&&(g.normal=ai.getInterpolatedAttribute(d,f,h,m,v,new te),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:f,b:h,c:m,normal:new te,materialIndex:0};ai.getNormal(ll,cl,ul,x.normal),g.face=x,g.barycoord=v}return g}class Va extends Si{constructor(e=1,n=1,r=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:d};const f=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const h=[],m=[],g=[],v=[];let x=0,S=0;E("z","y","x",-1,-1,r,n,e,d,c,0),E("z","y","x",1,-1,r,n,-e,d,c,1),E("x","z","y",1,1,e,r,n,o,d,2),E("x","z","y",1,-1,e,r,-n,o,d,3),E("x","y","z",1,-1,e,n,r,o,c,4),E("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(h),this.setAttribute("position",new ci(m,3)),this.setAttribute("normal",new ci(g,3)),this.setAttribute("uv",new ci(v,2));function E(w,y,_,I,N,b,q,H,O,k,P){const A=b/O,F=q/k,se=b/2,Y=q/2,oe=H/2,de=O+1,ae=k+1;let le=0,B=0;const ue=new te;for(let ee=0;ee<ae;ee++){const U=ee*F-Y;for(let Q=0;Q<de;Q++){const Ee=Q*A-se;ue[w]=Ee*I,ue[y]=U*N,ue[_]=oe,m.push(ue.x,ue.y,ue.z),ue[w]=0,ue[y]=0,ue[_]=H>0?1:-1,g.push(ue.x,ue.y,ue.z),v.push(Q/O),v.push(1-ee/k),le+=1}}for(let ee=0;ee<k;ee++)for(let U=0;U<O;U++){const Q=x+U+de*ee,Ee=x+U+de*(ee+1),$=x+(U+1)+de*(ee+1),fe=x+(U+1)+de*ee;h.push(Q,Ee,fe),h.push(Ee,$,fe),B+=6}f.addGroup(S,B,P),S+=B,x+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function xn(s){const e={};for(let n=0;n<s.length;n++){const r=Ws(s[n]);for(const o in r)e[o]=r[o]}return e}function Ux(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Hg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const Fx={clone:Ws,merge:xn};var Ox=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends Ys{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ox,this.fragmentShader=kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=Ux(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Vg extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new te,nm=new Tt,im=new Tt;class Yn extends Vg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Fd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fd*2*Math.atan(Math.tan(xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,nm,im),n.subVectors(im,nm)}setViewOffset(e,n,r,o,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,m=d.fullHeight;c+=d.offsetX*o/h,n-=d.offsetY*r/m,o*=d.width/h,r*=d.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Ds=1;class zx extends sn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yn(Ns,Ds,e,n);o.layers=this.layers,this.add(o);const c=new Yn(Ns,Ds,e,n);c.layers=this.layers,this.add(c);const d=new Yn(Ns,Ds,e,n);d.layers=this.layers,this.add(d);const f=new Yn(Ns,Ds,e,n);f.layers=this.layers,this.add(f);const h=new Yn(Ns,Ds,e,n);h.layers=this.layers,this.add(h);const m=new Yn(Ns,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,d,f,h]=n;for(const m of n)this.remove(m);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Cl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,h,m,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,d),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,h),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(n,g),e.setRenderTarget(v,x,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Gg extends yn{constructor(e,n,r,o,c,d,f,h,m,g){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,r,o,c,d,f,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bx extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Gg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_i}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Va(5,5,5),c=new Mr({name:"CubemapFromEquirect",uniforms:Ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:xr});c.uniforms.tEquirect.value=n;const d=new vi(o,c),f=n.minFilter;return n.minFilter===Yr&&(n.minFilter=_i),new zx(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,o);e.setRenderTarget(c)}}const Bu=new te,Hx=new te,Vx=new ot;class Wr{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Bu.subVectors(r,n).cross(Hx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Bu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Vx.getNormalMatrix(e),o=this.coplanarPoint(Bu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Nl,pl=new te;class Xd{constructor(e=new Wr,n=new Wr,r=new Wr,o=new Wr,c=new Wr,d=new Wr){this.planes=[e,n,r,o,c,d]}set(e,n,r,o,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Vi){const r=this.planes,o=e.elements,c=o[0],d=o[1],f=o[2],h=o[3],m=o[4],g=o[5],v=o[6],x=o[7],S=o[8],E=o[9],w=o[10],y=o[11],_=o[12],I=o[13],N=o[14],b=o[15];if(r[0].setComponents(h-c,x-m,y-S,b-_).normalize(),r[1].setComponents(h+c,x+m,y+S,b+_).normalize(),r[2].setComponents(h+d,x+g,y+E,b+I).normalize(),r[3].setComponents(h-d,x-g,y-E,b-I).normalize(),r[4].setComponents(h-f,x-v,y-w,b-N).normalize(),n===Vi)r[5].setComponents(h+f,x+v,y+w,b+N).normalize();else if(n===Cl)r[5].setComponents(f,v,w,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(pl.x=o.normal.x>0?e.max.x:e.min.x,pl.y=o.normal.y>0?e.max.y:e.min.y,pl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wg(){let s=null,e=!1,n=null,r=null;function o(c,d){n(c,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Gx(s){const e=new WeakMap;function n(f,h){const m=f.array,g=f.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,g),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,h,m){const g=h.array,v=h.updateRanges;if(s.bindBuffer(m,f),v.length===0)s.bufferSubData(m,0,g);else{v.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<v.length;S++){const E=v[x],w=v[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++x,v[x]=w)}v.length=x+1;for(let S=0,E=v.length;S<E;S++){const w=v[S];s.bufferSubData(m,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function d(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:o,remove:c,update:d}}class Ga extends Si{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,d=n/2,f=Math.floor(r),h=Math.floor(o),m=f+1,g=h+1,v=e/f,x=n/h,S=[],E=[],w=[],y=[];for(let _=0;_<g;_++){const I=_*x-d;for(let N=0;N<m;N++){const b=N*v-c;E.push(b,-I,0),w.push(0,0,1),y.push(N/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let I=0;I<f;I++){const N=I+m*_,b=I+m*(_+1),q=I+1+m*(_+1),H=I+1+m*_;S.push(N,b,H),S.push(b,q,H)}this.setIndex(S),this.setAttribute("position",new ci(E,3)),this.setAttribute("normal",new ci(w,3)),this.setAttribute("uv",new ci(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ny=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ry=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,py=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,my=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,My=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,by=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ly=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ny=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ky=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$y=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ky=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_S=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ES=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,AS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,US=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,SM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:Wx,alphahash_pars_fragment:jx,alphamap_fragment:Xx,alphamap_pars_fragment:qx,alphatest_fragment:Yx,alphatest_pars_fragment:$x,aomap_fragment:Kx,aomap_pars_fragment:Zx,batching_pars_vertex:Qx,batching_vertex:Jx,begin_vertex:ey,beginnormal_vertex:ty,bsdfs:ny,iridescence_fragment:iy,bumpmap_pars_fragment:ry,clipping_planes_fragment:sy,clipping_planes_pars_fragment:ay,clipping_planes_pars_vertex:oy,clipping_planes_vertex:ly,color_fragment:cy,color_pars_fragment:uy,color_pars_vertex:dy,color_vertex:fy,common:hy,cube_uv_reflection_fragment:py,defaultnormal_vertex:my,displacementmap_pars_vertex:gy,displacementmap_vertex:_y,emissivemap_fragment:vy,emissivemap_pars_fragment:xy,colorspace_fragment:yy,colorspace_pars_fragment:Sy,envmap_fragment:My,envmap_common_pars_fragment:Ey,envmap_pars_fragment:wy,envmap_pars_vertex:Ty,envmap_physical_pars_fragment:Fy,envmap_vertex:Ay,fog_vertex:Cy,fog_pars_vertex:Ry,fog_fragment:by,fog_pars_fragment:Py,gradientmap_pars_fragment:Ly,lightmap_pars_fragment:Ny,lights_lambert_fragment:Dy,lights_lambert_pars_fragment:Iy,lights_pars_begin:Uy,lights_toon_fragment:Oy,lights_toon_pars_fragment:ky,lights_phong_fragment:zy,lights_phong_pars_fragment:By,lights_physical_fragment:Hy,lights_physical_pars_fragment:Vy,lights_fragment_begin:Gy,lights_fragment_maps:Wy,lights_fragment_end:jy,logdepthbuf_fragment:Xy,logdepthbuf_pars_fragment:qy,logdepthbuf_pars_vertex:Yy,logdepthbuf_vertex:$y,map_fragment:Ky,map_pars_fragment:Zy,map_particle_fragment:Qy,map_particle_pars_fragment:Jy,metalnessmap_fragment:eS,metalnessmap_pars_fragment:tS,morphinstance_vertex:nS,morphcolor_vertex:iS,morphnormal_vertex:rS,morphtarget_pars_vertex:sS,morphtarget_vertex:aS,normal_fragment_begin:oS,normal_fragment_maps:lS,normal_pars_fragment:cS,normal_pars_vertex:uS,normal_vertex:dS,normalmap_pars_fragment:fS,clearcoat_normal_fragment_begin:hS,clearcoat_normal_fragment_maps:pS,clearcoat_pars_fragment:mS,iridescence_pars_fragment:gS,opaque_fragment:_S,packing:vS,premultiplied_alpha_fragment:xS,project_vertex:yS,dithering_fragment:SS,dithering_pars_fragment:MS,roughnessmap_fragment:ES,roughnessmap_pars_fragment:wS,shadowmap_pars_fragment:TS,shadowmap_pars_vertex:AS,shadowmap_vertex:CS,shadowmask_pars_fragment:RS,skinbase_vertex:bS,skinning_pars_vertex:PS,skinning_vertex:LS,skinnormal_vertex:NS,specularmap_fragment:DS,specularmap_pars_fragment:IS,tonemapping_fragment:US,tonemapping_pars_fragment:FS,transmission_fragment:OS,transmission_pars_fragment:kS,uv_pars_fragment:zS,uv_pars_vertex:BS,uv_vertex:HS,worldpos_vertex:VS,background_vert:GS,background_frag:WS,backgroundCube_vert:jS,backgroundCube_frag:XS,cube_vert:qS,cube_frag:YS,depth_vert:$S,depth_frag:KS,distanceRGBA_vert:ZS,distanceRGBA_frag:QS,equirect_vert:JS,equirect_frag:eM,linedashed_vert:tM,linedashed_frag:nM,meshbasic_vert:iM,meshbasic_frag:rM,meshlambert_vert:sM,meshlambert_frag:aM,meshmatcap_vert:oM,meshmatcap_frag:lM,meshnormal_vert:cM,meshnormal_frag:uM,meshphong_vert:dM,meshphong_frag:fM,meshphysical_vert:hM,meshphysical_frag:pM,meshtoon_vert:mM,meshtoon_frag:gM,points_vert:_M,points_frag:vM,shadow_vert:xM,shadow_frag:yM,sprite_vert:SM,sprite_frag:MM},Pe={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},gi={basic:{uniforms:xn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:xn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:xn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:xn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:xn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:xn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:xn([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:xn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:xn([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:xn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:xn([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:xn([Pe.common,Pe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:xn([Pe.lights,Pe.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};gi.physical={uniforms:xn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const ml={r:0,b:0,g:0},Vr=new yi,EM=new Bt;function wM(s,e,n,r,o,c,d){const f=new _t(0);let h=c===!0?0:1,m,g,v=null,x=0,S=null;function E(I){let N=I.isScene===!0?I.background:null;return N&&N.isTexture&&(N=(I.backgroundBlurriness>0?n:e).get(N)),N}function w(I){let N=!1;const b=E(I);b===null?_(f,h):b&&b.isColor&&(_(b,1),N=!0);const q=s.xr.getEnvironmentBlendMode();q==="additive"?r.buffers.color.setClear(0,0,0,1,d):q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(I,N){const b=E(N);b&&(b.isCubeTexture||b.mapping===Pl)?(g===void 0&&(g=new vi(new Va(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:Ws(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(q,H,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Vr.copy(N.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),g.material.uniforms.envMap.value=b,g.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(EM.makeRotationFromEuler(Vr)),g.material.toneMapped=yt.getTransfer(b.colorSpace)!==bt,(v!==b||x!==b.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=b,x=b.version,S=s.toneMapping),g.layers.enableAll(),I.unshift(g,g.geometry,g.material,0,0,null)):b&&b.isTexture&&(m===void 0&&(m=new vi(new Ga(2,2),new Mr({name:"BackgroundMaterial",uniforms:Ws(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=b,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=yt.getTransfer(b.colorSpace)!==bt,b.matrixAutoUpdate===!0&&b.updateMatrix(),m.material.uniforms.uvTransform.value.copy(b.matrix),(v!==b||x!==b.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=b,x=b.version,S=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function _(I,N){I.getRGB(ml,Hg(s)),r.buffers.color.setClear(ml.r,ml.g,ml.b,N,d)}return{getClearColor:function(){return f},setClearColor:function(I,N=1){f.set(I),h=N,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,_(f,h)},render:w,addToRenderList:y}}function TM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let c=o,d=!1;function f(A,F,se,Y,oe){let de=!1;const ae=v(Y,se,F);c!==ae&&(c=ae,m(c.object)),de=S(A,Y,se,oe),de&&E(A,Y,se,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(de||d)&&(d=!1,b(A,F,se,Y),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function h(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function g(A){return s.deleteVertexArray(A)}function v(A,F,se){const Y=se.wireframe===!0;let oe=r[A.id];oe===void 0&&(oe={},r[A.id]=oe);let de=oe[F.id];de===void 0&&(de={},oe[F.id]=de);let ae=de[Y];return ae===void 0&&(ae=x(h()),de[Y]=ae),ae}function x(A){const F=[],se=[],Y=[];for(let oe=0;oe<n;oe++)F[oe]=0,se[oe]=0,Y[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:se,attributeDivisors:Y,object:A,attributes:{},index:null}}function S(A,F,se,Y){const oe=c.attributes,de=F.attributes;let ae=0;const le=se.getAttributes();for(const B in le)if(le[B].location>=0){const ee=oe[B];let U=de[B];if(U===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),ee===void 0||ee.attribute!==U||U&&ee.data!==U.data)return!0;ae++}return c.attributesNum!==ae||c.index!==Y}function E(A,F,se,Y){const oe={},de=F.attributes;let ae=0;const le=se.getAttributes();for(const B in le)if(le[B].location>=0){let ee=de[B];ee===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(ee=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(ee=A.instanceColor));const U={};U.attribute=ee,ee&&ee.data&&(U.data=ee.data),oe[B]=U,ae++}c.attributes=oe,c.attributesNum=ae,c.index=Y}function w(){const A=c.newAttributes;for(let F=0,se=A.length;F<se;F++)A[F]=0}function y(A){_(A,0)}function _(A,F){const se=c.newAttributes,Y=c.enabledAttributes,oe=c.attributeDivisors;se[A]=1,Y[A]===0&&(s.enableVertexAttribArray(A),Y[A]=1),oe[A]!==F&&(s.vertexAttribDivisor(A,F),oe[A]=F)}function I(){const A=c.newAttributes,F=c.enabledAttributes;for(let se=0,Y=F.length;se<Y;se++)F[se]!==A[se]&&(s.disableVertexAttribArray(se),F[se]=0)}function N(A,F,se,Y,oe,de,ae){ae===!0?s.vertexAttribIPointer(A,F,se,oe,de):s.vertexAttribPointer(A,F,se,Y,oe,de)}function b(A,F,se,Y){w();const oe=Y.attributes,de=se.getAttributes(),ae=F.defaultAttributeValues;for(const le in de){const B=de[le];if(B.location>=0){let ue=oe[le];if(ue===void 0&&(le==="instanceMatrix"&&A.instanceMatrix&&(ue=A.instanceMatrix),le==="instanceColor"&&A.instanceColor&&(ue=A.instanceColor)),ue!==void 0){const ee=ue.normalized,U=ue.itemSize,Q=e.get(ue);if(Q===void 0)continue;const Ee=Q.buffer,$=Q.type,fe=Q.bytesPerElement,we=$===s.INT||$===s.UNSIGNED_INT||ue.gpuType===Bd;if(ue.isInterleavedBufferAttribute){const xe=ue.data,Ce=xe.stride,Ie=ue.offset;if(xe.isInstancedInterleavedBuffer){for(let Qe=0;Qe<B.locationSize;Qe++)_(B.location+Qe,xe.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Qe=0;Qe<B.locationSize;Qe++)y(B.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Qe=0;Qe<B.locationSize;Qe++)N(B.location+Qe,U/B.locationSize,$,ee,Ce*fe,(Ie+U/B.locationSize*Qe)*fe,we)}else{if(ue.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)_(B.location+xe,ue.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<B.locationSize;xe++)y(B.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let xe=0;xe<B.locationSize;xe++)N(B.location+xe,U/B.locationSize,$,ee,U*fe,U/B.locationSize*xe*fe,we)}}else if(ae!==void 0){const ee=ae[le];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(B.location,ee);break;case 3:s.vertexAttrib3fv(B.location,ee);break;case 4:s.vertexAttrib4fv(B.location,ee);break;default:s.vertexAttrib1fv(B.location,ee)}}}}I()}function q(){k();for(const A in r){const F=r[A];for(const se in F){const Y=F[se];for(const oe in Y)g(Y[oe].object),delete Y[oe];delete F[se]}delete r[A]}}function H(A){if(r[A.id]===void 0)return;const F=r[A.id];for(const se in F){const Y=F[se];for(const oe in Y)g(Y[oe].object),delete Y[oe];delete F[se]}delete r[A.id]}function O(A){for(const F in r){const se=r[F];if(se[A.id]===void 0)continue;const Y=se[A.id];for(const oe in Y)g(Y[oe].object),delete Y[oe];delete se[A.id]}}function k(){P(),d=!0,c!==o&&(c=o,m(c.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:k,resetDefaultState:P,dispose:q,releaseStatesOfGeometry:H,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:y,disableUnusedAttributes:I}}function AM(s,e,n){let r;function o(m){r=m}function c(m,g){s.drawArrays(r,m,g),n.update(g,r,1)}function d(m,g,v){v!==0&&(s.drawArraysInstanced(r,m,g,v),n.update(g,r,v))}function f(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];n.update(S,r,1)}function h(m,g,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)d(m[E],g[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,v);let E=0;for(let w=0;w<v;w++)E+=g[w]*x[w];n.update(E,r,1)}}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function CM(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(O){return!(O!==oi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const k=O===ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Wi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Hi&&!k)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),q=E>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:I,maxVaryings:N,maxFragmentUniforms:b,vertexTextures:q,maxSamples:H}}function RM(s){const e=this;let n=null,r=0,o=!1,c=!1;const d=new Wr,f=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||o;return o=x,r=v.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){n=g(v,x,0)},this.setState=function(v,x,S){const E=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!o||E===null||E.length===0||c&&!y)c?g(null):m();else{const I=c?0:r,N=I*4;let b=_.clippingState||null;h.value=b,b=g(E,x,N,S);for(let q=0;q!==N;++q)b[q]=n[q];_.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,S,E){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=h.value,E!==!0||y===null){const _=S+w*4,I=x.matrixWorldInverse;f.getNormalMatrix(I),(y===null||y.length<_)&&(y=new Float32Array(_));for(let N=0,b=S;N!==w;++N,b+=4)d.copy(v[N]).applyMatrix4(I,f),d.normal.toArray(y,b),y[b+3]=d.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function bM(s){let e=new WeakMap;function n(d,f){return f===ad?d.mapping=Bs:f===od&&(d.mapping=Hs),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===ad||f===od)if(e.has(d)){const h=e.get(d).texture;return n(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const m=new Bx(h.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",o),n(m.texture,d.mapping)}else return null}}return d}function o(d){const f=d.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class jg extends Vg{constructor(e=-1,n=1,r=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Us=4,rm=[.125,.215,.35,.446,.526,.582],qr=20,Hu=new jg,sm=new _t;let Vu=null,Gu=0,Wu=0,ju=!1;const jr=(1+Math.sqrt(5))/2,Is=1/jr,am=[new te(-jr,Is,0),new te(jr,Is,0),new te(-Is,0,jr),new te(Is,0,jr),new te(0,jr,-Is),new te(0,jr,Is),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)];class om{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){Vu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vu,Gu,Wu),this._renderer.xr.enabled=ju,e.scissorTest=!1,gl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:ka,format:oi,colorSpace:Xs,depthBuffer:!1},o=lm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PM(c)),this._blurMaterial=LM(c,e,n)}return o}_compileMaterial(e){const n=new vi(this._lodPlanes[0],e);this._renderer.compile(n,Hu)}_sceneToCubeUV(e,n,r,o){const f=new Yn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(sm),g.toneMapping=yr,g.autoClear=!1;const S=new kg({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),E=new vi(new Va,S);let w=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,w=!0):(S.color.copy(sm),w=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(f.up.set(0,h[_],0),f.lookAt(m[_],0,0)):I===1?(f.up.set(0,0,h[_]),f.lookAt(0,m[_],0)):(f.up.set(0,h[_],0),f.lookAt(0,0,m[_]));const N=this._cubeSize;gl(o,I*N,_>2?N:0,N,N),g.setRenderTarget(o),w&&g.render(E,f),g.render(e,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Bs||e.mapping===Hs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cm());const c=o?this._cubemapMaterial:this._equirectMaterial,d=new vi(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const h=this._cubeSize;gl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(d,Hu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=am[(o-c-1)%am.length];this._blur(e,c-1,c,d,f)}n.autoClear=r}_blur(e,n,r,o,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,o,"latitudinal",c),this._halfBlur(d,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,d,f){const h=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new vi(this._lodPlanes[o],m),x=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*qr-1),w=c/E,y=isFinite(c)?1+Math.floor(g*w):qr;y>qr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${qr}`);const _=[];let I=0;for(let O=0;O<qr;++O){const k=O/w,P=Math.exp(-k*k/2);_.push(P),O===0?I+=P:O<y&&(I+=2*P)}for(let O=0;O<_.length;O++)_[O]=_[O]/I;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=d==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:N}=this;x.dTheta.value=E,x.mipInt.value=N-r;const b=this._sizeLods[o],q=3*b*(o>N-Us?o-N+Us:0),H=4*(this._cubeSize-b);gl(n,q,H,3*b,2*b),h.setRenderTarget(n),h.render(v,Hu)}}function PM(s){const e=[],n=[],r=[];let o=s;const c=s-Us+1+rm.length;for(let d=0;d<c;d++){const f=Math.pow(2,o);n.push(f);let h=1/f;d>s-Us?h=rm[d-s+Us-1]:d===0&&(h=0),r.push(h);const m=1/(f-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,w=3,y=2,_=1,I=new Float32Array(w*E*S),N=new Float32Array(y*E*S),b=new Float32Array(_*E*S);for(let H=0;H<S;H++){const O=H%3*2/3-1,k=H>2?0:-1,P=[O,k,0,O+2/3,k,0,O+2/3,k+1,0,O,k,0,O+2/3,k+1,0,O,k+1,0];I.set(P,w*E*H),N.set(x,y*E*H);const A=[H,H,H,H,H,H];b.set(A,_*E*H)}const q=new Si;q.setAttribute("position",new xi(I,w)),q.setAttribute("uv",new xi(N,y)),q.setAttribute("faceIndex",new xi(b,_)),e.push(q),o>Us&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function lm(s,e,n){const r=new Kr(s,e,n);return r.texture.mapping=Pl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gl(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function LM(s,e,n){const r=new Float32Array(qr),o=new te(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function cm(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function um(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NM(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===ad||h===od,g=h===Bs||h===Hs;if(m||g){let v=e.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new om(s)),v=m?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return m&&S&&S.height>0||g&&S&&o(S)?(n===null&&(n=new om(s)),v=m?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",c),v.texture):null}}}return f}function o(f){let h=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&h++;return h===m}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function DM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Ia("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function IM(s,e,n,r){const o={},c=new WeakMap;function d(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const w=x.morphAttributes[E];for(let y=0,_=w.length;y<_;y++)e.remove(w[y])}x.removeEventListener("dispose",d),delete o[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(v,x){return o[x.id]===!0||(x.addEventListener("dispose",d),o[x.id]=!0,n.memory.geometries++),x}function h(v){const x=v.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER);const S=v.morphAttributes;for(const E in S){const w=S[E];for(let y=0,_=w.length;y<_;y++)e.update(w[y],s.ARRAY_BUFFER)}}function m(v){const x=[],S=v.index,E=v.attributes.position;let w=0;if(S!==null){const I=S.array;w=S.version;for(let N=0,b=I.length;N<b;N+=3){const q=I[N+0],H=I[N+1],O=I[N+2];x.push(q,H,H,O,O,q)}}else if(E!==void 0){const I=E.array;w=E.version;for(let N=0,b=I.length/3-1;N<b;N+=3){const q=N+0,H=N+1,O=N+2;x.push(q,H,H,O,O,q)}}else return;const y=new(Ng(x)?Bg:zg)(x,1);y.version=w;const _=c.get(v);_&&e.remove(_),c.set(v,y)}function g(v){const x=c.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return c.get(v)}return{get:f,update:h,getWireframeAttribute:g}}function UM(s,e,n){let r;function o(x){r=x}let c,d;function f(x){c=x.type,d=x.bytesPerElement}function h(x,S){s.drawElements(r,S,c,x*d),n.update(S,r,1)}function m(x,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,x*d,E),n.update(S,r,E))}function g(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,x,0,E);let y=0;for(let _=0;_<E;_++)y+=S[_];n.update(y,r,1)}function v(x,S,E,w){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)m(x[_]/d,S[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,x,0,w,0,E);let _=0;for(let I=0;I<E;I++)_+=S[I]*w[I];n.update(_,r,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function FM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function OM(s,e,n){const r=new WeakMap,o=new Vt;function c(d,f,h){const m=d.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(f);if(x===void 0||x.count!==v){let A=function(){k.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var S=A;x!==void 0&&x.texture.dispose();const E=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let b=0;E===!0&&(b=1),w===!0&&(b=2),y===!0&&(b=3);let q=f.attributes.position.count*b,H=1;q>e.maxTextureSize&&(H=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const O=new Float32Array(q*H*4*v),k=new Ig(O,q,H,v);k.type=Hi,k.needsUpdate=!0;const P=b*4;for(let F=0;F<v;F++){const se=_[F],Y=I[F],oe=N[F],de=q*H*4*F;for(let ae=0;ae<se.count;ae++){const le=ae*P;E===!0&&(o.fromBufferAttribute(se,ae),O[de+le+0]=o.x,O[de+le+1]=o.y,O[de+le+2]=o.z,O[de+le+3]=0),w===!0&&(o.fromBufferAttribute(Y,ae),O[de+le+4]=o.x,O[de+le+5]=o.y,O[de+le+6]=o.z,O[de+le+7]=0),y===!0&&(o.fromBufferAttribute(oe,ae),O[de+le+8]=o.x,O[de+le+9]=o.y,O[de+le+10]=o.z,O[de+le+11]=oe.itemSize===4?o.w:1)}}x={count:v,texture:k,size:new Tt(q,H)},r.set(f,x),f.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const w=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",w),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function kM(s,e,n,r){let o=new WeakMap;function c(h){const m=r.render.frame,g=h.geometry,v=e.get(h,g);if(o.get(v)!==m&&(e.update(v),o.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return v}function d(){o=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:d}}class Xg extends yn{constructor(e,n,r,o,c,d,f,h,m,g=Os){if(g!==Os&&g!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Os&&(r=$r),r===void 0&&g===Gs&&(r=Vs),super(null,o,c,d,f,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:li,this.minFilter=h!==void 0?h:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const qg=new yn,dm=new Xg(1,1),Yg=new Ig,$g=new wx,Kg=new Gg,fm=[],hm=[],pm=new Float32Array(16),mm=new Float32Array(9),gm=new Float32Array(4);function $s(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=fm[o];if(c===void 0&&(c=new Float32Array(o),fm[o]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(c,f)}return c}function Kt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Zt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Dl(s,e){let n=hm[e];n===void 0&&(n=new Int32Array(e),hm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function zM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function BM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2fv(this.addr,e),Zt(n,e)}}function HM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;s.uniform3fv(this.addr,e),Zt(n,e)}}function VM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4fv(this.addr,e),Zt(n,e)}}function GM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;gm.set(r),s.uniformMatrix2fv(this.addr,!1,gm),Zt(n,r)}}function WM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;mm.set(r),s.uniformMatrix3fv(this.addr,!1,mm),Zt(n,r)}}function jM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;pm.set(r),s.uniformMatrix4fv(this.addr,!1,pm),Zt(n,r)}}function XM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function qM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2iv(this.addr,e),Zt(n,e)}}function YM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3iv(this.addr,e),Zt(n,e)}}function $M(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4iv(this.addr,e),Zt(n,e)}}function KM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function ZM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2uiv(this.addr,e),Zt(n,e)}}function QM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3uiv(this.addr,e),Zt(n,e)}}function JM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4uiv(this.addr,e),Zt(n,e)}}function eE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(dm.compareFunction=Lg,c=dm):c=qg,n.setTexture2D(e||c,o)}function tE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||$g,o)}function nE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Kg,o)}function iE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Yg,o)}function rE(s){switch(s){case 5126:return zM;case 35664:return BM;case 35665:return HM;case 35666:return VM;case 35674:return GM;case 35675:return WM;case 35676:return jM;case 5124:case 35670:return XM;case 35667:case 35671:return qM;case 35668:case 35672:return YM;case 35669:case 35673:return $M;case 5125:return KM;case 36294:return ZM;case 36295:return QM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return eE;case 35679:case 36299:case 36307:return tE;case 35680:case 36300:case 36308:case 36293:return nE;case 36289:case 36303:case 36311:case 36292:return iE}}function sE(s,e){s.uniform1fv(this.addr,e)}function aE(s,e){const n=$s(e,this.size,2);s.uniform2fv(this.addr,n)}function oE(s,e){const n=$s(e,this.size,3);s.uniform3fv(this.addr,n)}function lE(s,e){const n=$s(e,this.size,4);s.uniform4fv(this.addr,n)}function cE(s,e){const n=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function uE(s,e){const n=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function dE(s,e){const n=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function fE(s,e){s.uniform1iv(this.addr,e)}function hE(s,e){s.uniform2iv(this.addr,e)}function pE(s,e){s.uniform3iv(this.addr,e)}function mE(s,e){s.uniform4iv(this.addr,e)}function gE(s,e){s.uniform1uiv(this.addr,e)}function _E(s,e){s.uniform2uiv(this.addr,e)}function vE(s,e){s.uniform3uiv(this.addr,e)}function xE(s,e){s.uniform4uiv(this.addr,e)}function yE(s,e,n){const r=this.cache,o=e.length,c=Dl(n,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==o;++d)n.setTexture2D(e[d]||qg,c[d])}function SE(s,e,n){const r=this.cache,o=e.length,c=Dl(n,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||$g,c[d])}function ME(s,e,n){const r=this.cache,o=e.length,c=Dl(n,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||Kg,c[d])}function EE(s,e,n){const r=this.cache,o=e.length,c=Dl(n,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||Yg,c[d])}function wE(s){switch(s){case 5126:return sE;case 35664:return aE;case 35665:return oE;case 35666:return lE;case 35674:return cE;case 35675:return uE;case 35676:return dE;case 5124:case 35670:return fE;case 35667:case 35671:return hE;case 35668:case 35672:return pE;case 35669:case 35673:return mE;case 5125:return gE;case 36294:return _E;case 36295:return vE;case 36296:return xE;case 35678:case 36198:case 36298:case 36306:case 35682:return yE;case 35679:case 36299:case 36307:return SE;case 35680:case 36300:case 36308:case 36293:return ME;case 36289:case 36303:case 36311:case 36292:return EE}}class TE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=rE(n.type)}}class AE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=wE(n.type)}}class CE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const Xu=/(\w+)(\])?(\[|\.)?/g;function _m(s,e){s.seq.push(e),s.map[e.id]=e}function RE(s,e,n){const r=s.name,o=r.length;for(Xu.lastIndex=0;;){const c=Xu.exec(r),d=Xu.lastIndex;let f=c[1];const h=c[2]==="]",m=c[3];if(h&&(f=f|0),m===void 0||m==="["&&d+2===o){_m(n,m===void 0?new TE(f,s,e):new AE(f,s,e));break}else{let v=n.map[f];v===void 0&&(v=new CE(f),_m(n,v)),n=v}}}class Al{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),d=e.getUniformLocation(n,c.name);RE(c,d,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,d=n.length;c!==d;++c){const f=n[c],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in n&&r.push(d)}return r}}function vm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const bE=37297;let PE=0;function LE(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=o;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}const xm=new ot;function NE(s){yt._getMatrix(xm,yt.workingColorSpace,s);const e=`mat3( ${xm.elements.map(n=>n.toFixed(4))} )`;switch(yt.getTransfer(s)){case Ll:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ym(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+LE(s.getShaderSource(e),d)}else return o}function DE(s,e){const n=NE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function IE(s,e){let n;switch(e){case Zv:n="Linear";break;case Qv:n="Reinhard";break;case Jv:n="Cineon";break;case ex:n="ACESFilmic";break;case nx:n="AgX";break;case ix:n="Neutral";break;case tx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _l=new te;function UE(){yt.getLuminanceCoefficients(_l);const s=_l.x.toFixed(4),e=_l.y.toFixed(4),n=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function OE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function kE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function Ua(s){return s!==""}function Sm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(s){return s.replace(zE,HE)}const BE=new Map;function HE(s,e){let n=lt[e];if(n===void 0){const r=BE.get(e);if(r!==void 0)n=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Od(n)}const VE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Em(s){return s.replace(VE,GE)}function GE(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function wm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function WE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_g?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function jE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function qE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case vg:e="ENVMAP_BLENDING_MULTIPLY";break;case $v:e="ENVMAP_BLENDING_MIX";break;case Kv:e="ENVMAP_BLENDING_ADD";break}return e}function YE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function $E(s,e,n,r){const o=s.getContext(),c=n.defines;let d=n.vertexShader,f=n.fragmentShader;const h=WE(n),m=jE(n),g=XE(n),v=qE(n),x=YE(n),S=FE(n),E=OE(c),w=o.createProgram();let y,_,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ua).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ua).join(`
`),_.length>0&&(_+=`
`)):(y=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),_=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yr?"#define TONE_MAPPING":"",n.toneMapping!==yr?lt.tonemapping_pars_fragment:"",n.toneMapping!==yr?IE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,DE("linearToOutputTexel",n.outputColorSpace),UE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ua).join(`
`)),d=Od(d),d=Sm(d,n),d=Mm(d,n),f=Od(f),f=Sm(f,n),f=Mm(f,n),d=Em(d),f=Em(f),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",n.glslVersion===Op?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=I+y+d,b=I+_+f,q=vm(o,o.VERTEX_SHADER,N),H=vm(o,o.FRAGMENT_SHADER,b);o.attachShader(w,q),o.attachShader(w,H),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function O(F){if(s.debug.checkShaderErrors){const se=o.getProgramInfoLog(w).trim(),Y=o.getShaderInfoLog(q).trim(),oe=o.getShaderInfoLog(H).trim();let de=!0,ae=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,q,H);else{const le=ym(o,q,"vertex"),B=ym(o,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+se+`
`+le+`
`+B)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(Y===""||oe==="")&&(ae=!1);ae&&(F.diagnostics={runnable:de,programLog:se,vertexShader:{log:Y,prefix:y},fragmentShader:{log:oe,prefix:_}})}o.deleteShader(q),o.deleteShader(H),k=new Al(o,w),P=kE(o,w)}let k;this.getUniforms=function(){return k===void 0&&O(this),k};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(w,bE)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=PE++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=q,this.fragmentShader=H,this}let KE=0;class ZE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new QE(e),n.set(e,r)),r}}class QE{constructor(e){this.id=KE++,this.code=e,this.usedTimes=0}}function JE(s,e,n,r,o,c,d){const f=new Fg,h=new ZE,m=new Set,g=[],v=o.logarithmicDepthBuffer,x=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,A,F,se,Y){const oe=se.fog,de=Y.geometry,ae=P.isMeshStandardMaterial?se.environment:null,le=(P.isMeshStandardMaterial?n:e).get(P.envMap||ae),B=le&&le.mapping===Pl?le.image.height:null,ue=E[P.type];P.precision!==null&&(S=o.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const ee=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,U=ee!==void 0?ee.length:0;let Q=0;de.morphAttributes.position!==void 0&&(Q=1),de.morphAttributes.normal!==void 0&&(Q=2),de.morphAttributes.color!==void 0&&(Q=3);let Ee,$,fe,we;if(ue){const vt=gi[ue];Ee=vt.vertexShader,$=vt.fragmentShader}else Ee=P.vertexShader,$=P.fragmentShader,h.update(P),fe=h.getVertexShaderID(P),we=h.getFragmentShaderID(P);const xe=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),Ie=Y.isInstancedMesh===!0,Qe=Y.isBatchedMesh===!0,Rt=!!P.map,pt=!!P.matcap,Nt=!!le,X=!!P.aoMap,pn=!!P.lightMap,ht=!!P.bumpMap,ut=!!P.normalMap,Ye=!!P.displacementMap,At=!!P.emissiveMap,qe=!!P.metalnessMap,L=!!P.roughnessMap,T=P.anisotropy>0,J=P.clearcoat>0,me=P.dispersion>0,_e=P.iridescence>0,he=P.sheen>0,Ve=P.transmission>0,Re=T&&!!P.anisotropyMap,Ue=J&&!!P.clearcoatMap,ct=J&&!!P.clearcoatNormalMap,Se=J&&!!P.clearcoatRoughnessMap,Oe=_e&&!!P.iridescenceMap,Je=_e&&!!P.iridescenceThicknessMap,et=he&&!!P.sheenColorMap,ke=he&&!!P.sheenRoughnessMap,dt=!!P.specularMap,rt=!!P.specularColorMap,wt=!!P.specularIntensityMap,G=Ve&&!!P.transmissionMap,be=Ve&&!!P.thicknessMap,ce=!!P.gradientMap,pe=!!P.alphaMap,Ne=P.alphaTest>0,Le=!!P.alphaHash,st=!!P.extensions;let It=yr;P.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(It=s.toneMapping);const Xt={shaderID:ue,shaderType:P.type,shaderName:P.name,vertexShader:Ee,fragmentShader:$,defines:P.defines,customVertexShaderID:fe,customFragmentShaderID:we,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Qe,batchingColor:Qe&&Y._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&Y.instanceColor!==null,instancingMorph:Ie&&Y.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Xs,alphaToCoverage:!!P.alphaToCoverage,map:Rt,matcap:pt,envMap:Nt,envMapMode:Nt&&le.mapping,envMapCubeUVHeight:B,aoMap:X,lightMap:pn,bumpMap:ht,normalMap:ut,displacementMap:x&&Ye,emissiveMap:At,normalMapObjectSpace:ut&&P.normalMapType===ox,normalMapTangentSpace:ut&&P.normalMapType===Pg,metalnessMap:qe,roughnessMap:L,anisotropy:T,anisotropyMap:Re,clearcoat:J,clearcoatMap:Ue,clearcoatNormalMap:ct,clearcoatRoughnessMap:Se,dispersion:me,iridescence:_e,iridescenceMap:Oe,iridescenceThicknessMap:Je,sheen:he,sheenColorMap:et,sheenRoughnessMap:ke,specularMap:dt,specularColorMap:rt,specularIntensityMap:wt,transmission:Ve,transmissionMap:G,thicknessMap:be,gradientMap:ce,opaque:P.transparent===!1&&P.blending===Fs&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ne,alphaHash:Le,combine:P.combine,mapUv:Rt&&w(P.map.channel),aoMapUv:X&&w(P.aoMap.channel),lightMapUv:pn&&w(P.lightMap.channel),bumpMapUv:ht&&w(P.bumpMap.channel),normalMapUv:ut&&w(P.normalMap.channel),displacementMapUv:Ye&&w(P.displacementMap.channel),emissiveMapUv:At&&w(P.emissiveMap.channel),metalnessMapUv:qe&&w(P.metalnessMap.channel),roughnessMapUv:L&&w(P.roughnessMap.channel),anisotropyMapUv:Re&&w(P.anisotropyMap.channel),clearcoatMapUv:Ue&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:ct&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:ke&&w(P.sheenRoughnessMap.channel),specularMapUv:dt&&w(P.specularMap.channel),specularColorMapUv:rt&&w(P.specularColorMap.channel),specularIntensityMapUv:wt&&w(P.specularIntensityMap.channel),transmissionMapUv:G&&w(P.transmissionMap.channel),thicknessMapUv:be&&w(P.thicknessMap.channel),alphaMapUv:pe&&w(P.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(ut||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!de.attributes.uv&&(Rt||pe),fog:!!oe,useFog:P.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ce,skinning:Y.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:Rt&&P.map.isVideoTexture===!0&&yt.getTransfer(P.map.colorSpace)===bt,decodeVideoTextureEmissive:At&&P.emissiveMap.isVideoTexture===!0&&yt.getTransfer(P.emissiveMap.colorSpace)===bt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===zi,flipSided:P.side===Ln,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:st&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&P.extensions.multiDraw===!0||Qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function _(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const F in P.defines)A.push(F),A.push(P.defines[F]);return P.isRawShaderMaterial===!1&&(I(A,P),N(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function I(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function N(P,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),P.push(f.mask)}function b(P){const A=E[P.type];let F;if(A){const se=gi[A];F=Fx.clone(se.uniforms)}else F=P.uniforms;return F}function q(P,A){let F;for(let se=0,Y=g.length;se<Y;se++){const oe=g[se];if(oe.cacheKey===A){F=oe,++F.usedTimes;break}}return F===void 0&&(F=new $E(s,A,P,c),g.push(F)),F}function H(P){if(--P.usedTimes===0){const A=g.indexOf(P);g[A]=g[g.length-1],g.pop(),P.destroy()}}function O(P){h.remove(P)}function k(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:b,acquireProgram:q,releaseProgram:H,releaseShaderCache:O,programs:g,dispose:k}}function e1(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,h){s.get(d)[f]=h}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function t1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Tm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Am(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function d(v,x,S,E,w,y){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:E,renderOrder:v.renderOrder,z:w,group:y},s[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=w,_.group=y),e++,_}function f(v,x,S,E,w,y){const _=d(v,x,S,E,w,y);S.transmission>0?r.push(_):S.transparent===!0?o.push(_):n.push(_)}function h(v,x,S,E,w,y){const _=d(v,x,S,E,w,y);S.transmission>0?r.unshift(_):S.transparent===!0?o.unshift(_):n.unshift(_)}function m(v,x){n.length>1&&n.sort(v||t1),r.length>1&&r.sort(x||Tm),o.length>1&&o.sort(x||Tm)}function g(){for(let v=e,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:h,finish:g,sort:m}}function n1(){let s=new WeakMap;function e(r,o){const c=s.get(r);let d;return c===void 0?(d=new Am,s.set(r,[d])):o>=c.length?(d=new Am,c.push(d)):d=c[o],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function i1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new _t};break;case"SpotLight":n={position:new te,direction:new te,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new _t,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":n={color:new _t,position:new te,halfWidth:new te,halfHeight:new te};break}return s[e.id]=n,n}}}function r1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let s1=0;function a1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function o1(s){const e=new i1,n=r1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new te);const o=new te,c=new Bt,d=new Bt;function f(m){let g=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,E=0,w=0,y=0,_=0,I=0,N=0,b=0,q=0,H=0,O=0;m.sort(a1);for(let P=0,A=m.length;P<A;P++){const F=m[P],se=F.color,Y=F.intensity,oe=F.distance,de=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=se.r*Y,v+=se.g*Y,x+=se.b*Y;else if(F.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(F.sh.coefficients[ae],Y);O++}else if(F.isDirectionalLight){const ae=e.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const le=F.shadow,B=n.get(F);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=F.shadow.matrix,I++}r.directional[S]=ae,S++}else if(F.isSpotLight){const ae=e.get(F);ae.position.setFromMatrixPosition(F.matrixWorld),ae.color.copy(se).multiplyScalar(Y),ae.distance=oe,ae.coneCos=Math.cos(F.angle),ae.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ae.decay=F.decay,r.spot[w]=ae;const le=F.shadow;if(F.map&&(r.spotLightMap[q]=F.map,q++,le.updateMatrices(F),F.castShadow&&H++),r.spotLightMatrix[w]=le.matrix,F.castShadow){const B=n.get(F);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.spotShadow[w]=B,r.spotShadowMap[w]=de,b++}w++}else if(F.isRectAreaLight){const ae=e.get(F);ae.color.copy(se).multiplyScalar(Y),ae.halfWidth.set(F.width*.5,0,0),ae.halfHeight.set(0,F.height*.5,0),r.rectArea[y]=ae,y++}else if(F.isPointLight){const ae=e.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity),ae.distance=F.distance,ae.decay=F.decay,F.castShadow){const le=F.shadow,B=n.get(F);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,r.pointShadow[E]=B,r.pointShadowMap[E]=de,r.pointShadowMatrix[E]=F.shadow.matrix,N++}r.point[E]=ae,E++}else if(F.isHemisphereLight){const ae=e.get(F);ae.skyColor.copy(F.color).multiplyScalar(Y),ae.groundColor.copy(F.groundColor).multiplyScalar(Y),r.hemi[_]=ae,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const k=r.hash;(k.directionalLength!==S||k.pointLength!==E||k.spotLength!==w||k.rectAreaLength!==y||k.hemiLength!==_||k.numDirectionalShadows!==I||k.numPointShadows!==N||k.numSpotShadows!==b||k.numSpotMaps!==q||k.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=y,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=b+q-H,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=O,k.directionalLength=S,k.pointLength=E,k.spotLength=w,k.rectAreaLength=y,k.hemiLength=_,k.numDirectionalShadows=I,k.numPointShadows=N,k.numSpotShadows=b,k.numSpotMaps=q,k.numLightProbes=O,r.version=s1++)}function h(m,g){let v=0,x=0,S=0,E=0,w=0;const y=g.matrixWorldInverse;for(let _=0,I=m.length;_<I;_++){const N=m[_];if(N.isDirectionalLight){const b=r.directional[v];b.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(y),v++}else if(N.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(N.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(y),S++}else if(N.isRectAreaLight){const b=r.rectArea[E];b.position.setFromMatrixPosition(N.matrixWorld),b.position.applyMatrix4(y),d.identity(),c.copy(N.matrixWorld),c.premultiply(y),d.extractRotation(c),b.halfWidth.set(N.width*.5,0,0),b.halfHeight.set(0,N.height*.5,0),b.halfWidth.applyMatrix4(d),b.halfHeight.applyMatrix4(d),E++}else if(N.isPointLight){const b=r.point[x];b.position.setFromMatrixPosition(N.matrixWorld),b.position.applyMatrix4(y),x++}else if(N.isHemisphereLight){const b=r.hemi[w];b.direction.setFromMatrixPosition(N.matrixWorld),b.direction.transformDirection(y),w++}}}return{setup:f,setupView:h,state:r}}function Cm(s){const e=new o1(s),n=[],r=[];function o(g){m.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function d(g){r.push(g)}function f(){e.setup(n)}function h(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:h,pushLight:c,pushShadow:d}}function l1(s){let e=new WeakMap;function n(o,c=0){const d=e.get(o);let f;return d===void 0?(f=new Cm(s),e.set(o,[f])):c>=d.length?(f=new Cm(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class c1 extends Ys{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=sx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u1 extends Ys{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const d1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function h1(s,e,n){let r=new Xd;const o=new Tt,c=new Tt,d=new Vt,f=new c1({depthPacking:ax}),h=new u1,m={},g=n.maxTextureSize,v={[Sr]:Ln,[Ln]:Sr,[zi]:zi},x=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:d1,fragmentShader:f1}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Si;E.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new vi(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gg;let _=this.type;this.render=function(H,O,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),se=s.state;se.setBlending(xr),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const Y=_!==ki&&this.type===ki,oe=_===ki&&this.type!==ki;for(let de=0,ae=H.length;de<ae;de++){const le=H[de],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const ue=B.getFrameExtents();if(o.multiply(ue),c.copy(B.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/ue.x),o.x=c.x*ue.x,B.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/ue.y),o.y=c.y*ue.y,B.mapSize.y=c.y)),B.map===null||Y===!0||oe===!0){const U=this.type!==ki?{minFilter:li,magFilter:li}:{};B.map!==null&&B.map.dispose(),B.map=new Kr(o.x,o.y,U),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const ee=B.getViewportCount();for(let U=0;U<ee;U++){const Q=B.getViewport(U);d.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),se.viewport(d),B.updateMatrices(le,U),r=B.getFrustum(),b(O,k,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===ki&&I(B,k),B.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(P,A,F)};function I(H,O){const k=e.update(w);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Kr(o.x,o.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(O,null,k,x,w,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(O,null,k,S,w,null)}function N(H,O,k,P){let A=null;const F=k.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(F!==void 0)A=F;else if(A=k.isPointLight===!0?h:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const se=A.uuid,Y=O.uuid;let oe=m[se];oe===void 0&&(oe={},m[se]=oe);let de=oe[Y];de===void 0&&(de=A.clone(),oe[Y]=de,O.addEventListener("dispose",q)),A=de}if(A.visible=O.visible,A.wireframe=O.wireframe,P===ki?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:v[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const se=s.properties.get(A);se.light=k}return A}function b(H,O,k,P,A){if(H.visible===!1)return;if(H.layers.test(O.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&A===ki)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,H.matrixWorld);const Y=e.update(H),oe=H.material;if(Array.isArray(oe)){const de=Y.groups;for(let ae=0,le=de.length;ae<le;ae++){const B=de[ae],ue=oe[B.materialIndex];if(ue&&ue.visible){const ee=N(H,ue,P,A);H.onBeforeShadow(s,H,O,k,Y,ee,B),s.renderBufferDirect(k,null,Y,ee,H,B),H.onAfterShadow(s,H,O,k,Y,ee,B)}}}else if(oe.visible){const de=N(H,oe,P,A);H.onBeforeShadow(s,H,O,k,Y,de,null),s.renderBufferDirect(k,null,Y,de,H,null),H.onAfterShadow(s,H,O,k,Y,de,null)}}const se=H.children;for(let Y=0,oe=se.length;Y<oe;Y++)b(se[Y],O,k,P,A)}function q(H){H.target.removeEventListener("dispose",q);for(const k in m){const P=m[k],A=H.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const p1={[Ju]:ed,[td]:rd,[nd]:sd,[zs]:id,[ed]:Ju,[rd]:td,[sd]:nd,[id]:zs};function m1(s,e){function n(){let G=!1;const be=new Vt;let ce=null;const pe=new Vt(0,0,0,0);return{setMask:function(Ne){ce!==Ne&&!G&&(s.colorMask(Ne,Ne,Ne,Ne),ce=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,Le,st,It,Xt){Xt===!0&&(Ne*=It,Le*=It,st*=It),be.set(Ne,Le,st,It),pe.equals(be)===!1&&(s.clearColor(Ne,Le,st,It),pe.copy(be))},reset:function(){G=!1,ce=null,pe.set(-1,0,0,0)}}}function r(){let G=!1,be=!1,ce=null,pe=null,Ne=null;return{setReversed:function(Le){if(be!==Le){const st=e.get("EXT_clip_control");be?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const It=Ne;Ne=null,this.setClear(It)}be=Le},getReversed:function(){return be},setTest:function(Le){Le?xe(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(Le){ce!==Le&&!G&&(s.depthMask(Le),ce=Le)},setFunc:function(Le){if(be&&(Le=p1[Le]),pe!==Le){switch(Le){case Ju:s.depthFunc(s.NEVER);break;case ed:s.depthFunc(s.ALWAYS);break;case td:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case nd:s.depthFunc(s.EQUAL);break;case id:s.depthFunc(s.GEQUAL);break;case rd:s.depthFunc(s.GREATER);break;case sd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Le}},setLocked:function(Le){G=Le},setClear:function(Le){Ne!==Le&&(be&&(Le=1-Le),s.clearDepth(Le),Ne=Le)},reset:function(){G=!1,ce=null,pe=null,Ne=null,be=!1}}}function o(){let G=!1,be=null,ce=null,pe=null,Ne=null,Le=null,st=null,It=null,Xt=null;return{setTest:function(vt){G||(vt?xe(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(vt){be!==vt&&!G&&(s.stencilMask(vt),be=vt)},setFunc:function(vt,Sn,mn){(ce!==vt||pe!==Sn||Ne!==mn)&&(s.stencilFunc(vt,Sn,mn),ce=vt,pe=Sn,Ne=mn)},setOp:function(vt,Sn,mn){(Le!==vt||st!==Sn||It!==mn)&&(s.stencilOp(vt,Sn,mn),Le=vt,st=Sn,It=mn)},setLocked:function(vt){G=vt},setClear:function(vt){Xt!==vt&&(s.clearStencil(vt),Xt=vt)},reset:function(){G=!1,be=null,ce=null,pe=null,Ne=null,Le=null,st=null,It=null,Xt=null}}}const c=new n,d=new r,f=new o,h=new WeakMap,m=new WeakMap;let g={},v={},x=new WeakMap,S=[],E=null,w=!1,y=null,_=null,I=null,N=null,b=null,q=null,H=null,O=new _t(0,0,0),k=0,P=!1,A=null,F=null,se=null,Y=null,oe=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,le=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(B)[1]),ae=le>=1):B.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ae=le>=2);let ue=null,ee={};const U=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),Ee=new Vt().fromArray(U),$=new Vt().fromArray(Q);function fe(G,be,ce,pe){const Ne=new Uint8Array(4),Le=s.createTexture();s.bindTexture(G,Le),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<ce;st++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(be+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return Le}const we={};we[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),we[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),we[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),xe(s.DEPTH_TEST),d.setFunc(zs),ht(!1),ut(Lp),xe(s.CULL_FACE),X(xr);function xe(G){g[G]!==!0&&(s.enable(G),g[G]=!0)}function Ce(G){g[G]!==!1&&(s.disable(G),g[G]=!1)}function Ie(G,be){return v[G]!==be?(s.bindFramebuffer(G,be),v[G]=be,G===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=be),G===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=be),!0):!1}function Qe(G,be){let ce=S,pe=!1;if(G){ce=x.get(be),ce===void 0&&(ce=[],x.set(be,ce));const Ne=G.textures;if(ce.length!==Ne.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let Le=0,st=Ne.length;Le<st;Le++)ce[Le]=s.COLOR_ATTACHMENT0+Le;ce.length=Ne.length,pe=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,pe=!0);pe&&s.drawBuffers(ce)}function Rt(G){return E!==G?(s.useProgram(G),E=G,!0):!1}const pt={[Xr]:s.FUNC_ADD,[Nv]:s.FUNC_SUBTRACT,[Dv]:s.FUNC_REVERSE_SUBTRACT};pt[Iv]=s.MIN,pt[Uv]=s.MAX;const Nt={[Fv]:s.ZERO,[Ov]:s.ONE,[kv]:s.SRC_COLOR,[Zu]:s.SRC_ALPHA,[Wv]:s.SRC_ALPHA_SATURATE,[Vv]:s.DST_COLOR,[Bv]:s.DST_ALPHA,[zv]:s.ONE_MINUS_SRC_COLOR,[Qu]:s.ONE_MINUS_SRC_ALPHA,[Gv]:s.ONE_MINUS_DST_COLOR,[Hv]:s.ONE_MINUS_DST_ALPHA,[jv]:s.CONSTANT_COLOR,[Xv]:s.ONE_MINUS_CONSTANT_COLOR,[qv]:s.CONSTANT_ALPHA,[Yv]:s.ONE_MINUS_CONSTANT_ALPHA};function X(G,be,ce,pe,Ne,Le,st,It,Xt,vt){if(G===xr){w===!0&&(Ce(s.BLEND),w=!1);return}if(w===!1&&(xe(s.BLEND),w=!0),G!==Lv){if(G!==y||vt!==P){if((_!==Xr||b!==Xr)&&(s.blendEquation(s.FUNC_ADD),_=Xr,b=Xr),vt)switch(G){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Np:s.blendFunc(s.ONE,s.ONE);break;case Dp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ip:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Np:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Dp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ip:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}I=null,N=null,q=null,H=null,O.set(0,0,0),k=0,y=G,P=vt}return}Ne=Ne||be,Le=Le||ce,st=st||pe,(be!==_||Ne!==b)&&(s.blendEquationSeparate(pt[be],pt[Ne]),_=be,b=Ne),(ce!==I||pe!==N||Le!==q||st!==H)&&(s.blendFuncSeparate(Nt[ce],Nt[pe],Nt[Le],Nt[st]),I=ce,N=pe,q=Le,H=st),(It.equals(O)===!1||Xt!==k)&&(s.blendColor(It.r,It.g,It.b,Xt),O.copy(It),k=Xt),y=G,P=!1}function pn(G,be){G.side===zi?Ce(s.CULL_FACE):xe(s.CULL_FACE);let ce=G.side===Ln;be&&(ce=!ce),ht(ce),G.blending===Fs&&G.transparent===!1?X(xr):X(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),c.setMask(G.colorWrite);const pe=G.stencilWrite;f.setTest(pe),pe&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),At(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(G){A!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),A=G)}function ut(G){G!==bv?(xe(s.CULL_FACE),G!==F&&(G===Lp?s.cullFace(s.BACK):G===Pv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),F=G}function Ye(G){G!==se&&(ae&&s.lineWidth(G),se=G)}function At(G,be,ce){G?(xe(s.POLYGON_OFFSET_FILL),(Y!==be||oe!==ce)&&(s.polygonOffset(be,ce),Y=be,oe=ce)):Ce(s.POLYGON_OFFSET_FILL)}function qe(G){G?xe(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function L(G){G===void 0&&(G=s.TEXTURE0+de-1),ue!==G&&(s.activeTexture(G),ue=G)}function T(G,be,ce){ce===void 0&&(ue===null?ce=s.TEXTURE0+de-1:ce=ue);let pe=ee[ce];pe===void 0&&(pe={type:void 0,texture:void 0},ee[ce]=pe),(pe.type!==G||pe.texture!==be)&&(ue!==ce&&(s.activeTexture(ce),ue=ce),s.bindTexture(G,be||we[G]),pe.type=G,pe.texture=be)}function J(){const G=ee[ue];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(G){Ee.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ee.copy(G))}function ke(G){$.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),$.copy(G))}function dt(G,be){let ce=m.get(be);ce===void 0&&(ce=new WeakMap,m.set(be,ce));let pe=ce.get(G);pe===void 0&&(pe=s.getUniformBlockIndex(be,G.name),ce.set(G,pe))}function rt(G,be){const pe=m.get(be).get(G);h.get(be)!==pe&&(s.uniformBlockBinding(be,pe,G.__bindingPointIndex),h.set(be,pe))}function wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ue=null,ee={},v={},x=new WeakMap,S=[],E=null,w=!1,y=null,_=null,I=null,N=null,b=null,q=null,H=null,O=new _t(0,0,0),k=0,P=!1,A=null,F=null,se=null,Y=null,oe=null,Ee.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:xe,disable:Ce,bindFramebuffer:Ie,drawBuffers:Qe,useProgram:Rt,setBlending:X,setMaterial:pn,setFlipSided:ht,setCullFace:ut,setLineWidth:Ye,setPolygonOffset:At,setScissorTest:qe,activeTexture:L,bindTexture:T,unbindTexture:J,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:Oe,texImage3D:Je,updateUBOMapping:dt,uniformBlockBinding:rt,texStorage2D:ct,texStorage3D:Se,texSubImage2D:he,texSubImage3D:Ve,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ue,scissor:et,viewport:ke,reset:wt}}function Rm(s,e,n,r){const o=g1(r);switch(n){case Eg:return s*e;case Tg:return s*e;case Ag:return s*e*2;case Cg:return s*e/o.components*o.byteLength;case Gd:return s*e/o.components*o.byteLength;case Rg:return s*e*2/o.components*o.byteLength;case Wd:return s*e*2/o.components*o.byteLength;case wg:return s*e*3/o.components*o.byteLength;case oi:return s*e*4/o.components*o.byteLength;case jd:return s*e*4/o.components*o.byteLength;case Sl:case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case El:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dd:case hd:return Math.max(s,16)*Math.max(e,8)/4;case ud:case fd:return Math.max(s,8)*Math.max(e,8)/2;case pd:case md:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case xd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case yd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Md:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case wd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Td:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Rd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case bd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Ld:case Nd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case bg:case Dd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Id:case Ud:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function g1(s){switch(s){case Wi:case yg:return{byteLength:1,components:1};case Fa:case Sg:case ka:return{byteLength:2,components:1};case Hd:case Vd:return{byteLength:2,components:4};case $r:case Bd:case Hi:return{byteLength:4,components:1};case Mg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function _1(s,e,n,r,o,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Tt,g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return S?new OffscreenCanvas(L,T):Oa("canvas")}function w(L,T,J){let me=1;const _e=qe(L);if((_e.width>J||_e.height>J)&&(me=J/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const he=Math.floor(me*_e.width),Ve=Math.floor(me*_e.height);v===void 0&&(v=E(he,Ve));const Re=T?E(he,Ve):v;return Re.width=he,Re.height=Ve,Re.getContext("2d").drawImage(L,0,0,he,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+Ve+")."),Re}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(L,T,J,me,_e=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he=T;if(T===s.RED&&(J===s.FLOAT&&(he=s.R32F),J===s.HALF_FLOAT&&(he=s.R16F),J===s.UNSIGNED_BYTE&&(he=s.R8)),T===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.R8UI),J===s.UNSIGNED_SHORT&&(he=s.R16UI),J===s.UNSIGNED_INT&&(he=s.R32UI),J===s.BYTE&&(he=s.R8I),J===s.SHORT&&(he=s.R16I),J===s.INT&&(he=s.R32I)),T===s.RG&&(J===s.FLOAT&&(he=s.RG32F),J===s.HALF_FLOAT&&(he=s.RG16F),J===s.UNSIGNED_BYTE&&(he=s.RG8)),T===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.RG8UI),J===s.UNSIGNED_SHORT&&(he=s.RG16UI),J===s.UNSIGNED_INT&&(he=s.RG32UI),J===s.BYTE&&(he=s.RG8I),J===s.SHORT&&(he=s.RG16I),J===s.INT&&(he=s.RG32I)),T===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.RGB8UI),J===s.UNSIGNED_SHORT&&(he=s.RGB16UI),J===s.UNSIGNED_INT&&(he=s.RGB32UI),J===s.BYTE&&(he=s.RGB8I),J===s.SHORT&&(he=s.RGB16I),J===s.INT&&(he=s.RGB32I)),T===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),J===s.UNSIGNED_INT&&(he=s.RGBA32UI),J===s.BYTE&&(he=s.RGBA8I),J===s.SHORT&&(he=s.RGBA16I),J===s.INT&&(he=s.RGBA32I)),T===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),T===s.RGBA){const Ve=_e?Ll:yt.getTransfer(me);J===s.FLOAT&&(he=s.RGBA32F),J===s.HALF_FLOAT&&(he=s.RGBA16F),J===s.UNSIGNED_BYTE&&(he=Ve===bt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(L,T){let J;return L?T===null||T===$r||T===Vs?J=s.DEPTH24_STENCIL8:T===Hi?J=s.DEPTH32F_STENCIL8:T===Fa&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===$r||T===Vs?J=s.DEPTH_COMPONENT24:T===Hi?J=s.DEPTH_COMPONENT32F:T===Fa&&(J=s.DEPTH_COMPONENT16),J}function q(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==li&&L.minFilter!==_i?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function H(L){const T=L.target;T.removeEventListener("dispose",H),k(T),T.isVideoTexture&&g.delete(T)}function O(L){const T=L.target;T.removeEventListener("dispose",O),A(T)}function k(L){const T=r.get(L);if(T.__webglInit===void 0)return;const J=L.source,me=x.get(J);if(me){const _e=me[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(L),Object.keys(me).length===0&&x.delete(J)}r.remove(L)}function P(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const J=L.source,me=x.get(J);delete me[T.__cacheKey],d.memory.textures--}function A(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let _e=0;_e<T.__webglFramebuffer[me].length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[me][_e]);else s.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)s.deleteFramebuffer(T.__webglFramebuffer[me]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=L.textures;for(let me=0,_e=J.length;me<_e;me++){const he=r.get(J[me]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),d.memory.textures--),r.remove(J[me])}r.remove(L)}let F=0;function se(){F=0}function Y(){const L=F;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),F+=1,L}function oe(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function de(L,T){const J=r.get(L);if(L.isVideoTexture&&Ye(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(J,L,T);return}}n.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+T)}function ae(L,T){const J=r.get(L);if(L.version>0&&J.__version!==L.version){$(J,L,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+T)}function le(L,T){const J=r.get(L);if(L.version>0&&J.__version!==L.version){$(J,L,T);return}n.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+T)}function B(L,T){const J=r.get(L);if(L.version>0&&J.__version!==L.version){fe(J,L,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+T)}const ue={[ld]:s.REPEAT,[Bi]:s.CLAMP_TO_EDGE,[cd]:s.MIRRORED_REPEAT},ee={[li]:s.NEAREST,[rx]:s.NEAREST_MIPMAP_NEAREST,[Zo]:s.NEAREST_MIPMAP_LINEAR,[_i]:s.LINEAR,[vu]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},U={[lx]:s.NEVER,[px]:s.ALWAYS,[cx]:s.LESS,[Lg]:s.LEQUAL,[ux]:s.EQUAL,[hx]:s.GEQUAL,[dx]:s.GREATER,[fx]:s.NOTEQUAL};function Q(L,T){if(T.type===Hi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===_i||T.magFilter===vu||T.magFilter===Zo||T.magFilter===Yr||T.minFilter===_i||T.minFilter===vu||T.minFilter===Zo||T.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ue[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ue[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ue[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ee[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ee[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,U[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===li||T.minFilter!==Zo&&T.minFilter!==Yr||T.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ee(L,T){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",H));const me=T.source;let _e=x.get(me);_e===void 0&&(_e={},x.set(me,_e));const he=oe(T);if(he!==L.__cacheKey){_e[he]===void 0&&(_e[he]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,J=!0),_e[he].usedTimes++;const Ve=_e[L.__cacheKey];Ve!==void 0&&(_e[L.__cacheKey].usedTimes--,Ve.usedTimes===0&&P(T)),L.__cacheKey=he,L.__webglTexture=_e[he].texture}return J}function $(L,T,J){let me=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=s.TEXTURE_3D);const _e=Ee(L,T),he=T.source;n.bindTexture(me,L.__webglTexture,s.TEXTURE0+J);const Ve=r.get(he);if(he.version!==Ve.__version||_e===!0){n.activeTexture(s.TEXTURE0+J);const Re=yt.getPrimaries(yt.workingColorSpace),Ue=T.colorSpace===vr?null:yt.getPrimaries(T.colorSpace),ct=T.colorSpace===vr||Re===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Se=w(T.image,!1,o.maxTextureSize);Se=At(T,Se);const Oe=c.convert(T.format,T.colorSpace),Je=c.convert(T.type);let et=N(T.internalFormat,Oe,Je,T.colorSpace,T.isVideoTexture);Q(me,T);let ke;const dt=T.mipmaps,rt=T.isVideoTexture!==!0,wt=Ve.__version===void 0||_e===!0,G=he.dataReady,be=q(T,Se);if(T.isDepthTexture)et=b(T.format===Gs,T.type),wt&&(rt?n.texStorage2D(s.TEXTURE_2D,1,et,Se.width,Se.height):n.texImage2D(s.TEXTURE_2D,0,et,Se.width,Se.height,0,Oe,Je,null));else if(T.isDataTexture)if(dt.length>0){rt&&wt&&n.texStorage2D(s.TEXTURE_2D,be,et,dt[0].width,dt[0].height);for(let ce=0,pe=dt.length;ce<pe;ce++)ke=dt[ce],rt?G&&n.texSubImage2D(s.TEXTURE_2D,ce,0,0,ke.width,ke.height,Oe,Je,ke.data):n.texImage2D(s.TEXTURE_2D,ce,et,ke.width,ke.height,0,Oe,Je,ke.data);T.generateMipmaps=!1}else rt?(wt&&n.texStorage2D(s.TEXTURE_2D,be,et,Se.width,Se.height),G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,Oe,Je,Se.data)):n.texImage2D(s.TEXTURE_2D,0,et,Se.width,Se.height,0,Oe,Je,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,be,et,dt[0].width,dt[0].height,Se.depth);for(let ce=0,pe=dt.length;ce<pe;ce++)if(ke=dt[ce],T.format!==oi)if(Oe!==null)if(rt){if(G)if(T.layerUpdates.size>0){const Ne=Rm(ke.width,ke.height,T.format,T.type);for(const Le of T.layerUpdates){const st=ke.data.subarray(Le*Ne/ke.data.BYTES_PER_ELEMENT,(Le+1)*Ne/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,Le,ke.width,ke.height,1,Oe,st)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,ke.width,ke.height,Se.depth,Oe,ke.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,et,ke.width,ke.height,Se.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?G&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,ke.width,ke.height,Se.depth,Oe,Je,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ce,et,ke.width,ke.height,Se.depth,0,Oe,Je,ke.data)}else{rt&&wt&&n.texStorage2D(s.TEXTURE_2D,be,et,dt[0].width,dt[0].height);for(let ce=0,pe=dt.length;ce<pe;ce++)ke=dt[ce],T.format!==oi?Oe!==null?rt?G&&n.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,ce,et,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?G&&n.texSubImage2D(s.TEXTURE_2D,ce,0,0,ke.width,ke.height,Oe,Je,ke.data):n.texImage2D(s.TEXTURE_2D,ce,et,ke.width,ke.height,0,Oe,Je,ke.data)}else if(T.isDataArrayTexture)if(rt){if(wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,be,et,Se.width,Se.height,Se.depth),G)if(T.layerUpdates.size>0){const ce=Rm(Se.width,Se.height,T.format,T.type);for(const pe of T.layerUpdates){const Ne=Se.data.subarray(pe*ce/Se.data.BYTES_PER_ELEMENT,(pe+1)*ce/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,Oe,Je,Ne)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Oe,Je,Se.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Se.width,Se.height,Se.depth,0,Oe,Je,Se.data);else if(T.isData3DTexture)rt?(wt&&n.texStorage3D(s.TEXTURE_3D,be,et,Se.width,Se.height,Se.depth),G&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Oe,Je,Se.data)):n.texImage3D(s.TEXTURE_3D,0,et,Se.width,Se.height,Se.depth,0,Oe,Je,Se.data);else if(T.isFramebufferTexture){if(wt)if(rt)n.texStorage2D(s.TEXTURE_2D,be,et,Se.width,Se.height);else{let ce=Se.width,pe=Se.height;for(let Ne=0;Ne<be;Ne++)n.texImage2D(s.TEXTURE_2D,Ne,et,ce,pe,0,Oe,Je,null),ce>>=1,pe>>=1}}else if(dt.length>0){if(rt&&wt){const ce=qe(dt[0]);n.texStorage2D(s.TEXTURE_2D,be,et,ce.width,ce.height)}for(let ce=0,pe=dt.length;ce<pe;ce++)ke=dt[ce],rt?G&&n.texSubImage2D(s.TEXTURE_2D,ce,0,0,Oe,Je,ke):n.texImage2D(s.TEXTURE_2D,ce,et,Oe,Je,ke);T.generateMipmaps=!1}else if(rt){if(wt){const ce=qe(Se);n.texStorage2D(s.TEXTURE_2D,be,et,ce.width,ce.height)}G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Je,Se)}else n.texImage2D(s.TEXTURE_2D,0,et,Oe,Je,Se);y(T)&&_(me),Ve.__version=he.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function fe(L,T,J){if(T.image.length!==6)return;const me=Ee(L,T),_e=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+J);const he=r.get(_e);if(_e.version!==he.__version||me===!0){n.activeTexture(s.TEXTURE0+J);const Ve=yt.getPrimaries(yt.workingColorSpace),Re=T.colorSpace===vr?null:yt.getPrimaries(T.colorSpace),Ue=T.colorSpace===vr||Ve===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ct=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let pe=0;pe<6;pe++)!ct&&!Se?Oe[pe]=w(T.image[pe],!0,o.maxCubemapSize):Oe[pe]=Se?T.image[pe].image:T.image[pe],Oe[pe]=At(T,Oe[pe]);const Je=Oe[0],et=c.convert(T.format,T.colorSpace),ke=c.convert(T.type),dt=N(T.internalFormat,et,ke,T.colorSpace),rt=T.isVideoTexture!==!0,wt=he.__version===void 0||me===!0,G=_e.dataReady;let be=q(T,Je);Q(s.TEXTURE_CUBE_MAP,T);let ce;if(ct){rt&&wt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,be,dt,Je.width,Je.height);for(let pe=0;pe<6;pe++){ce=Oe[pe].mipmaps;for(let Ne=0;Ne<ce.length;Ne++){const Le=ce[Ne];T.format!==oi?et!==null?rt?G&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,0,0,Le.width,Le.height,et,Le.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,dt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,0,0,Le.width,Le.height,et,ke,Le.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,dt,Le.width,Le.height,0,et,ke,Le.data)}}}else{if(ce=T.mipmaps,rt&&wt){ce.length>0&&be++;const pe=qe(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,be,dt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Oe[pe].width,Oe[pe].height,et,ke,Oe[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,Oe[pe].width,Oe[pe].height,0,et,ke,Oe[pe].data);for(let Ne=0;Ne<ce.length;Ne++){const st=ce[Ne].image[pe].image;rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,0,0,st.width,st.height,et,ke,st.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,dt,st.width,st.height,0,et,ke,st.data)}}else{rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,et,ke,Oe[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,et,ke,Oe[pe]);for(let Ne=0;Ne<ce.length;Ne++){const Le=ce[Ne];rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,0,0,et,ke,Le.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,dt,et,ke,Le.image[pe])}}}y(T)&&_(s.TEXTURE_CUBE_MAP),he.__version=_e.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function we(L,T,J,me,_e,he){const Ve=c.convert(J.format,J.colorSpace),Re=c.convert(J.type),Ue=N(J.internalFormat,Ve,Re,J.colorSpace),ct=r.get(T),Se=r.get(J);if(Se.__renderTarget=T,!ct.__hasExternalTextures){const Oe=Math.max(1,T.width>>he),Je=Math.max(1,T.height>>he);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,he,Ue,Oe,Je,T.depth,0,Ve,Re,null):n.texImage2D(_e,he,Ue,Oe,Je,0,Ve,Re,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),ut(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,_e,Se.__webglTexture,0,ht(T)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,_e,Se.__webglTexture,he),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(L,T,J){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const me=T.depthTexture,_e=me&&me.isDepthTexture?me.type:null,he=b(T.stencilBuffer,_e),Ve=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=ht(T);ut(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,he,T.width,T.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,he,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,he,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,L)}else{const me=T.textures;for(let _e=0;_e<me.length;_e++){const he=me[_e],Ve=c.convert(he.format,he.colorSpace),Re=c.convert(he.type),Ue=N(he.internalFormat,Ve,Re,he.colorSpace),ct=ht(T);J&&ut(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Ue,T.width,T.height):ut(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(T.depthTexture);me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),de(T.depthTexture,0);const _e=me.__webglTexture,he=ht(T);if(T.depthTexture.format===Os)ut(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(T.depthTexture.format===Gs)ut(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ie(L){const T=r.get(L),J=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=me}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ce(T.__webglFramebuffer,L)}else if(J){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=s.createRenderbuffer(),xe(T.__webglDepthbuffer[me],L,!1);else{const _e=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,he)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),xe(T.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,_e)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(L,T,J){const me=r.get(L);T!==void 0&&we(me.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Ie(L)}function Rt(L){const T=L.texture,J=r.get(L),me=r.get(T);L.addEventListener("dispose",O);const _e=L.textures,he=L.isWebGLCubeRenderTarget===!0,Ve=_e.length>1;if(Ve||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=T.version,d.memory.textures++),he){J.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[Re]=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)J.__webglFramebuffer[Re][Ue]=s.createFramebuffer()}else J.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let Re=0;Re<T.mipmaps.length;Re++)J.__webglFramebuffer[Re]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Re=0,Ue=_e.length;Re<Ue;Re++){const ct=r.get(_e[Re]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),d.memory.textures++)}if(L.samples>0&&ut(L)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Re=0;Re<_e.length;Re++){const Ue=_e[Re];J.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Re]);const ct=c.convert(Ue.format,Ue.colorSpace),Se=c.convert(Ue.type),Oe=N(Ue.internalFormat,ct,Se,Ue.colorSpace,L.isXRRenderTarget===!0),Je=ht(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Oe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,J.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(J.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),Q(s.TEXTURE_CUBE_MAP,T);for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)we(J.__webglFramebuffer[Re][Ue],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ue);else we(J.__webglFramebuffer[Re],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);y(T)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let Re=0,Ue=_e.length;Re<Ue;Re++){const ct=_e[Re],Se=r.get(ct);n.bindTexture(s.TEXTURE_2D,Se.__webglTexture),Q(s.TEXTURE_2D,ct),we(J.__webglFramebuffer,L,ct,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,0),y(ct)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let Re=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Re=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Re,me.__webglTexture),Q(Re,T),T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)we(J.__webglFramebuffer[Ue],L,T,s.COLOR_ATTACHMENT0,Re,Ue);else we(J.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Re,0);y(T)&&_(Re),n.unbindTexture()}L.depthBuffer&&Ie(L)}function pt(L){const T=L.textures;for(let J=0,me=T.length;J<me;J++){const _e=T[J];if(y(_e)){const he=I(L),Ve=r.get(_e).__webglTexture;n.bindTexture(he,Ve),_(he),n.unbindTexture()}}}const Nt=[],X=[];function pn(L){if(L.samples>0){if(ut(L)===!1){const T=L.textures,J=L.width,me=L.height;let _e=s.COLOR_BUFFER_BIT;const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(L),Re=T.length>1;if(Re)for(let Ue=0;Ue<T.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const ct=r.get(T[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,J,me,0,0,J,me,_e,s.NEAREST),h===!0&&(Nt.length=0,X.length=0,Nt.push(s.COLOR_ATTACHMENT0+Ue),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Nt.push(he),X.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let Ue=0;Ue<T.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const ct=r.get(T[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ct,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ht(L){return Math.min(o.maxSamples,L.samples)}function ut(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ye(L){const T=d.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function At(L,T){const J=L.colorSpace,me=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Xs&&J!==vr&&(yt.getTransfer(J)===bt?(me!==oi||_e!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function qe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=Y,this.resetTextureUnits=se,this.setTexture2D=de,this.setTexture2DArray=ae,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=Qe,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ut}function v1(s,e){function n(r,o=vr){let c;const d=yt.getTransfer(o);if(r===Wi)return s.UNSIGNED_BYTE;if(r===Hd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Vd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Mg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===yg)return s.BYTE;if(r===Sg)return s.SHORT;if(r===Fa)return s.UNSIGNED_SHORT;if(r===Bd)return s.INT;if(r===$r)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===ka)return s.HALF_FLOAT;if(r===Eg)return s.ALPHA;if(r===wg)return s.RGB;if(r===oi)return s.RGBA;if(r===Tg)return s.LUMINANCE;if(r===Ag)return s.LUMINANCE_ALPHA;if(r===Os)return s.DEPTH_COMPONENT;if(r===Gs)return s.DEPTH_STENCIL;if(r===Cg)return s.RED;if(r===Gd)return s.RED_INTEGER;if(r===Rg)return s.RG;if(r===Wd)return s.RG_INTEGER;if(r===jd)return s.RGBA_INTEGER;if(r===Sl||r===Ml||r===El||r===wl)if(d===bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Sl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ml)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Sl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ml)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ud||r===dd||r===fd||r===hd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ud)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===dd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===pd||r===md||r===gd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===pd||r===md)return d===bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===gd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_d||r===vd||r===xd||r===yd||r===Sd||r===Md||r===Ed||r===wd||r===Td||r===Ad||r===Cd||r===Rd||r===bd||r===Pd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===_d)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Md)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ed)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Td)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ad)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Cd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Pd)return d===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tl||r===Ld||r===Nd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Tl)return d===bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ld)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===bg||r===Dd||r===Id||r===Ud)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Tl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Dd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Id)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ud)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class x1 extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vl extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y1={type:"move"};class qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,d=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const w of e.hand.values()){const y=n.getJointPose(w,r),_=this._getHandJoint(m,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,E=.005;m.inputState.pinching&&x>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(y1)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new vl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const S1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class E1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new yn,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Mr({vertexShader:S1,fragmentShader:M1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vi(new Ga(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w1 extends qs{constructor(e,n){super();const r=this;let o=null,c=1,d=null,f="local-floor",h=1,m=null,g=null,v=null,x=null,S=null,E=null;const w=new E1,y=n.getContextAttributes();let _=null,I=null;const N=[],b=[],q=new Tt;let H=null;const O=new Yn;O.viewport=new Vt;const k=new Yn;k.viewport=new Vt;const P=[O,k],A=new x1;let F=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=N[$];return fe===void 0&&(fe=new qu,N[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=N[$];return fe===void 0&&(fe=new qu,N[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=N[$];return fe===void 0&&(fe=new qu,N[$]=fe),fe.getHandSpace()};function Y($){const fe=b.indexOf($.inputSource);if(fe===-1)return;const we=N[fe];we!==void 0&&(we.update($.inputSource,$.frame,m||d),we.dispatchEvent({type:$.type,data:$.inputSource}))}function oe(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",de);for(let $=0;$<N.length;$++){const fe=b[$];fe!==null&&(b[$]=null,N[$].disconnect(fe))}F=null,se=null,w.reset(),e.setRenderTarget(_),S=null,x=null,v=null,o=null,I=null,Ee.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){f=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function($){if(o=$,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",de),y.xrCompatible!==!0&&await n.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(q),o.renderState.layers===void 0){const fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,fe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Kr(S.framebufferWidth,S.framebufferHeight,{format:oi,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let fe=null,we=null,xe=null;y.depth&&(xe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=y.stencil?Gs:Os,we=y.stencil?Vs:$r);const Ce={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:c};v=new XRWebGLBinding(o,n),x=v.createProjectionLayer(Ce),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new Kr(x.textureWidth,x.textureHeight,{format:oi,type:Wi,depthTexture:new Xg(x.textureWidth,x.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),m=null,d=await o.requestReferenceSpace(f),Ee.setContext(o),Ee.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function de($){for(let fe=0;fe<$.removed.length;fe++){const we=$.removed[fe],xe=b.indexOf(we);xe>=0&&(b[xe]=null,N[xe].disconnect(we))}for(let fe=0;fe<$.added.length;fe++){const we=$.added[fe];let xe=b.indexOf(we);if(xe===-1){for(let Ie=0;Ie<N.length;Ie++)if(Ie>=b.length){b.push(we),xe=Ie;break}else if(b[Ie]===null){b[Ie]=we,xe=Ie;break}if(xe===-1)break}const Ce=N[xe];Ce&&Ce.connect(we)}}const ae=new te,le=new te;function B($,fe,we){ae.setFromMatrixPosition(fe.matrixWorld),le.setFromMatrixPosition(we.matrixWorld);const xe=ae.distanceTo(le),Ce=fe.projectionMatrix.elements,Ie=we.projectionMatrix.elements,Qe=Ce[14]/(Ce[10]-1),Rt=Ce[14]/(Ce[10]+1),pt=(Ce[9]+1)/Ce[5],Nt=(Ce[9]-1)/Ce[5],X=(Ce[8]-1)/Ce[0],pn=(Ie[8]+1)/Ie[0],ht=Qe*X,ut=Qe*pn,Ye=xe/(-X+pn),At=Ye*-X;if(fe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(At),$.translateZ(Ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ce[10]===-1)$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const qe=Qe+Ye,L=Rt+Ye,T=ht-At,J=ut+(xe-At),me=pt*Rt/L*qe,_e=Nt*Rt/L*qe;$.projectionMatrix.makePerspective(T,J,me,_e,qe,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ue($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(o===null)return;let fe=$.near,we=$.far;w.texture!==null&&(w.depthNear>0&&(fe=w.depthNear),w.depthFar>0&&(we=w.depthFar)),A.near=k.near=O.near=fe,A.far=k.far=O.far=we,(F!==A.near||se!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,se=A.far),O.layers.mask=$.layers.mask|2,k.layers.mask=$.layers.mask|4,A.layers.mask=O.layers.mask|k.layers.mask;const xe=$.parent,Ce=A.cameras;ue(A,xe);for(let Ie=0;Ie<Ce.length;Ie++)ue(Ce[Ie],xe);Ce.length===2?B(A,O,k):A.projectionMatrix.copy(O.projectionMatrix),ee($,A,xe)};function ee($,fe,we){we===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(we.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Fd*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function($){h=$,x!==null&&(x.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let U=null;function Q($,fe){if(g=fe.getViewerPose(m||d),E=fe,g!==null){const we=g.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let xe=!1;we.length!==A.cameras.length&&(A.cameras.length=0,xe=!0);for(let Ie=0;Ie<we.length;Ie++){const Qe=we[Ie];let Rt=null;if(S!==null)Rt=S.getViewport(Qe);else{const Nt=v.getViewSubImage(x,Qe);Rt=Nt.viewport,Ie===0&&(e.setRenderTargetTextures(I,Nt.colorTexture,x.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(I))}let pt=P[Ie];pt===void 0&&(pt=new Yn,pt.layers.enable(Ie),pt.viewport=new Vt,P[Ie]=pt),pt.matrix.fromArray(Qe.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Qe.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ie===0&&(A.matrix.copy(pt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),xe===!0&&A.cameras.push(pt)}const Ce=o.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ie=v.getDepthInformation(we[0]);Ie&&Ie.isValid&&Ie.texture&&w.init(e,Ie,o.renderState)}}for(let we=0;we<N.length;we++){const xe=b[we],Ce=N[we];xe!==null&&Ce!==void 0&&Ce.update(xe,fe,m||d)}U&&U($,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Ee=new Wg;Ee.setAnimationLoop(Q),this.setAnimationLoop=function($){U=$},this.dispose=function(){}}}const Gr=new yi,T1=new Bt;function A1(s,e){function n(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,Hg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,I,N,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),v(y,_)):_.isMeshPhongMaterial?(c(y,_),g(y,_)):_.isMeshStandardMaterial?(c(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,b)):_.isMeshMatcapMaterial?(c(y,_),E(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),w(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,I,N):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,n(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Ln&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,n(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Ln&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,n(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,n(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const I=e.get(_),N=I.envMap,b=I.envMapRotation;N&&(y.envMap.value=N,Gr.copy(b),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),y.envMapRotation.value.setFromMatrix4(T1.makeRotationFromEuler(Gr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,I,N){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*I,y.scale.value=N*.5,_.map&&(y.map.value=_.map,n(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,I){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Ln&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const I=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function C1(s,e,n,r){let o={},c={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,N){const b=N.program;r.uniformBlockBinding(I,b)}function m(I,N){let b=o[I.id];b===void 0&&(E(I),b=g(I),o[I.id]=b,I.addEventListener("dispose",y));const q=N.program;r.updateUBOMapping(I,q);const H=e.render.frame;c[I.id]!==H&&(x(I),c[I.id]=H)}function g(I){const N=v();I.__bindingPointIndex=N;const b=s.createBuffer(),q=I.__size,H=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,q,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,b),b}function v(){for(let I=0;I<f;I++)if(d.indexOf(I)===-1)return d.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const N=o[I.id],b=I.uniforms,q=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let H=0,O=b.length;H<O;H++){const k=Array.isArray(b[H])?b[H]:[b[H]];for(let P=0,A=k.length;P<A;P++){const F=k[P];if(S(F,H,P,q)===!0){const se=F.__offset,Y=Array.isArray(F.value)?F.value:[F.value];let oe=0;for(let de=0;de<Y.length;de++){const ae=Y[de],le=w(ae);typeof ae=="number"||typeof ae=="boolean"?(F.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,se+oe,F.__data)):ae.isMatrix3?(F.__data[0]=ae.elements[0],F.__data[1]=ae.elements[1],F.__data[2]=ae.elements[2],F.__data[3]=0,F.__data[4]=ae.elements[3],F.__data[5]=ae.elements[4],F.__data[6]=ae.elements[5],F.__data[7]=0,F.__data[8]=ae.elements[6],F.__data[9]=ae.elements[7],F.__data[10]=ae.elements[8],F.__data[11]=0):(ae.toArray(F.__data,oe),oe+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,N,b,q){const H=I.value,O=N+"_"+b;if(q[O]===void 0)return typeof H=="number"||typeof H=="boolean"?q[O]=H:q[O]=H.clone(),!0;{const k=q[O];if(typeof H=="number"||typeof H=="boolean"){if(k!==H)return q[O]=H,!0}else if(k.equals(H)===!1)return k.copy(H),!0}return!1}function E(I){const N=I.uniforms;let b=0;const q=16;for(let O=0,k=N.length;O<k;O++){const P=Array.isArray(N[O])?N[O]:[N[O]];for(let A=0,F=P.length;A<F;A++){const se=P[A],Y=Array.isArray(se.value)?se.value:[se.value];for(let oe=0,de=Y.length;oe<de;oe++){const ae=Y[oe],le=w(ae),B=b%q,ue=B%le.boundary,ee=B+ue;b+=ue,ee!==0&&q-ee<le.storage&&(b+=q-ee),se.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=b,b+=le.storage}}}const H=b%q;return H>0&&(b+=q-H),I.__size=b,I.__cache={},this}function w(I){const N={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(N.boundary=4,N.storage=4):I.isVector2?(N.boundary=8,N.storage=8):I.isVector3||I.isColor?(N.boundary=16,N.storage=12):I.isVector4?(N.boundary=16,N.storage=16):I.isMatrix3?(N.boundary=48,N.storage=48):I.isMatrix4?(N.boundary=64,N.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),N}function y(I){const N=I.target;N.removeEventListener("dispose",y);const b=d.indexOf(N.__bindingPointIndex);d.splice(b,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete c[N.id]}function _(){for(const I in o)s.deleteBuffer(o[I]);d=[],o={},c={}}return{bind:h,update:m,dispose:_}}class R1{constructor(e={}){const{canvas:n=gx(),context:r=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=d;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,_=null;const I=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=yr,this.toneMappingExposure=1;const b=this;let q=!1,H=0,O=0,k=null,P=-1,A=null;const F=new Vt,se=new Vt;let Y=null;const oe=new _t(0);let de=0,ae=n.width,le=n.height,B=1,ue=null,ee=null;const U=new Vt(0,0,ae,le),Q=new Vt(0,0,ae,le);let Ee=!1;const $=new Xd;let fe=!1,we=!1;const xe=new Bt,Ce=new Bt,Ie=new te,Qe=new Vt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Nt(){return k===null?B:1}let X=r;function pn(C,W){return n.getContext(C,W)}try{const C={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zd}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Ne,!1),n.addEventListener("webglcontextcreationerror",Le,!1),X===null){const W="webgl2";if(X=pn(W,C),X===null)throw pn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ht,ut,Ye,At,qe,L,T,J,me,_e,he,Ve,Re,Ue,ct,Se,Oe,Je,et,ke,dt,rt,wt,G;function be(){ht=new DM(X),ht.init(),rt=new v1(X,ht),ut=new CM(X,ht,e,rt),Ye=new m1(X,ht),ut.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),At=new FM(X),qe=new e1,L=new _1(X,ht,Ye,qe,ut,rt,At),T=new bM(b),J=new NM(b),me=new Gx(X),wt=new TM(X,me),_e=new IM(X,me,At,wt),he=new kM(X,_e,me,At),et=new OM(X,ut,L),Se=new RM(qe),Ve=new JE(b,T,J,ht,ut,wt,Se),Re=new A1(b,qe),Ue=new n1,ct=new l1(ht),Je=new wM(b,T,J,Ye,he,S,h),Oe=new h1(b,he,ut),G=new C1(X,At,ut,Ye),ke=new AM(X,ht,At),dt=new UM(X,ht,At),At.programs=Ve.programs,b.capabilities=ut,b.extensions=ht,b.properties=qe,b.renderLists=Ue,b.shadowMap=Oe,b.state=Ye,b.info=At}be();const ce=new w1(b,X);this.xr=ce,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=ht.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ht.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(ae,le,!1))},this.getSize=function(C){return C.set(ae,le)},this.setSize=function(C,W,ie=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=C,le=W,n.width=Math.floor(C*B),n.height=Math.floor(W*B),ie===!0&&(n.style.width=C+"px",n.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(ae*B,le*B).floor()},this.setDrawingBufferSize=function(C,W,ie){ae=C,le=W,B=ie,n.width=Math.floor(C*ie),n.height=Math.floor(W*ie),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,W,ie,re){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,W,ie,re),Ye.viewport(F.copy(U).multiplyScalar(B).round())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,W,ie,re){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,W,ie,re),Ye.scissor(se.copy(Q).multiplyScalar(B).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(C){Ye.setScissorTest(Ee=C)},this.setOpaqueSort=function(C){ue=C},this.setTransparentSort=function(C){ee=C},this.getClearColor=function(C){return C.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(C=!0,W=!0,ie=!0){let re=0;if(C){let j=!1;if(k!==null){const Ae=k.texture.format;j=Ae===jd||Ae===Wd||Ae===Gd}if(j){const Ae=k.texture.type,Me=Ae===Wi||Ae===$r||Ae===Fa||Ae===Vs||Ae===Hd||Ae===Vd,Ge=Je.getClearColor(),Be=Je.getClearAlpha(),tt=Ge.r,it=Ge.g,We=Ge.b;Me?(E[0]=tt,E[1]=it,E[2]=We,E[3]=Be,X.clearBufferuiv(X.COLOR,0,E)):(w[0]=tt,w[1]=it,w[2]=We,w[3]=Be,X.clearBufferiv(X.COLOR,0,w))}else re|=X.COLOR_BUFFER_BIT}W&&(re|=X.DEPTH_BUFFER_BIT),ie&&(re|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Ne,!1),n.removeEventListener("webglcontextcreationerror",Le,!1),Ue.dispose(),ct.dispose(),qe.dispose(),T.dispose(),J.dispose(),he.dispose(),wt.dispose(),G.dispose(),Ve.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Zr),ce.removeEventListener("sessionend",ji),Mi.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const C=At.autoReset,W=Oe.enabled,ie=Oe.autoUpdate,re=Oe.needsUpdate,j=Oe.type;be(),At.autoReset=C,Oe.enabled=W,Oe.autoUpdate=ie,Oe.needsUpdate=re,Oe.type=j}function Le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function st(C){const W=C.target;W.removeEventListener("dispose",st),It(W)}function It(C){Xt(C),qe.remove(C)}function Xt(C){const W=qe.get(C).programs;W!==void 0&&(W.forEach(function(ie){Ve.releaseProgram(ie)}),C.isShaderMaterial&&Ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,ie,re,j,Ae){W===null&&(W=Rt);const Me=j.isMesh&&j.matrixWorld.determinant()<0,Ge=Xa(C,W,ie,re,j);Ye.setMaterial(re,Me);let Be=ie.index,tt=1;if(re.wireframe===!0){if(Be=_e.getWireframeAttribute(ie),Be===void 0)return;tt=2}const it=ie.drawRange,We=ie.attributes.position;let gt=it.start*tt,Et=(it.start+it.count)*tt;Ae!==null&&(gt=Math.max(gt,Ae.start*tt),Et=Math.min(Et,(Ae.start+Ae.count)*tt)),Be!==null?(gt=Math.max(gt,0),Et=Math.min(Et,Be.count)):We!=null&&(gt=Math.max(gt,0),Et=Math.min(Et,We.count));const mt=Et-gt;if(mt<0||mt===1/0)return;wt.setup(j,re,Ge,ie,Be);let an,at=ke;if(Be!==null&&(an=me.get(Be),at=dt,at.setIndex(an)),j.isMesh)re.wireframe===!0?(Ye.setLineWidth(re.wireframeLinewidth*Nt()),at.setMode(X.LINES)):at.setMode(X.TRIANGLES);else if(j.isLine){let Xe=re.linewidth;Xe===void 0&&(Xe=1),Ye.setLineWidth(Xe*Nt()),j.isLineSegments?at.setMode(X.LINES):j.isLineLoop?at.setMode(X.LINE_LOOP):at.setMode(X.LINE_STRIP)}else j.isPoints?at.setMode(X.POINTS):j.isSprite&&at.setMode(X.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)at.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))at.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Xe=j._multiDrawStarts,$n=j._multiDrawCounts,St=j._multiDrawCount,on=Be?me.get(Be).bytesPerElement:1,Kn=qe.get(re).currentProgram.getUniforms();for(let qt=0;qt<St;qt++)Kn.setValue(X,"_gl_DrawID",qt),at.render(Xe[qt]/on,$n[qt])}else if(j.isInstancedMesh)at.renderInstances(gt,mt,j.count);else if(ie.isInstancedBufferGeometry){const Xe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,$n=Math.min(ie.instanceCount,Xe);at.renderInstances(gt,mt,$n)}else at.render(gt,mt)};function vt(C,W,ie){C.transparent===!0&&C.side===zi&&C.forceSinglePass===!1?(C.side=Ln,C.needsUpdate=!0,Qr(C,W,ie),C.side=Sr,C.needsUpdate=!0,Qr(C,W,ie),C.side=zi):Qr(C,W,ie)}this.compile=function(C,W,ie=null){ie===null&&(ie=C),_=ct.get(ie),_.init(W),N.push(_),ie.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),C!==ie&&C.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const re=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ae=j.material;if(Ae)if(Array.isArray(Ae))for(let Me=0;Me<Ae.length;Me++){const Ge=Ae[Me];vt(Ge,ie,j),re.add(Ge)}else vt(Ae,ie,j),re.add(Ae)}),N.pop(),_=null,re},this.compileAsync=function(C,W,ie=null){const re=this.compile(C,W,ie);return new Promise(j=>{function Ae(){if(re.forEach(function(Me){qe.get(Me).currentProgram.isReady()&&re.delete(Me)}),re.size===0){j(C);return}setTimeout(Ae,10)}ht.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Sn=null;function mn(C){Sn&&Sn(C)}function Zr(){Mi.stop()}function ji(){Mi.start()}const Mi=new Wg;Mi.setAnimationLoop(mn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(C){Sn=C,ce.setAnimationLoop(C),C===null?Mi.stop():Mi.start()},ce.addEventListener("sessionstart",Zr),ce.addEventListener("sessionend",ji),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(W),W=ce.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,W,k),_=ct.get(C,N.length),_.init(W),N.push(_),Ce.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),$.setFromProjectionMatrix(Ce),we=this.localClippingEnabled,fe=Se.init(this.clippingPlanes,we),y=Ue.get(C,I.length),y.init(),I.push(y),ce.enabled===!0&&ce.isPresenting===!0){const Ae=b.xr.getDepthSensingMesh();Ae!==null&&Ei(Ae,W,-1/0,b.sortObjects)}Ei(C,W,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(ue,ee),pt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,pt&&Je.addToRenderList(y,C),this.info.render.frame++,fe===!0&&Se.beginShadows();const ie=_.state.shadowsArray;Oe.render(ie,C,W),fe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,j=y.transmissive;if(_.setupLights(),W.isArrayCamera){const Ae=W.cameras;if(j.length>0)for(let Me=0,Ge=Ae.length;Me<Ge;Me++){const Be=Ae[Me];wr(re,j,C,Be)}pt&&Je.render(C);for(let Me=0,Ge=Ae.length;Me<Ge;Me++){const Be=Ae[Me];Er(y,C,Be,Be.viewport)}}else j.length>0&&wr(re,j,C,W),pt&&Je.render(C),Er(y,C,W);k!==null&&(L.updateMultisampleRenderTarget(k),L.updateRenderTargetMipmap(k)),C.isScene===!0&&C.onAfterRender(b,C,W),wt.resetDefaultState(),P=-1,A=null,N.pop(),N.length>0?(_=N[N.length-1],fe===!0&&Se.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Ei(C,W,ie,re){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)ie=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){re&&Qe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ce);const Me=he.update(C),Ge=C.material;Ge.visible&&y.push(C,Me,Ge,ie,Qe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){const Me=he.update(C),Ge=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Qe.copy(C.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Qe.copy(Me.boundingSphere.center)),Qe.applyMatrix4(C.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ge)){const Be=Me.groups;for(let tt=0,it=Be.length;tt<it;tt++){const We=Be[tt],gt=Ge[We.materialIndex];gt&&gt.visible&&y.push(C,Me,gt,ie,Qe.z,We)}}else Ge.visible&&y.push(C,Me,Ge,ie,Qe.z,null)}}const Ae=C.children;for(let Me=0,Ge=Ae.length;Me<Ge;Me++)Ei(Ae[Me],W,ie,re)}function Er(C,W,ie,re){const j=C.opaque,Ae=C.transmissive,Me=C.transparent;_.setupLightsView(ie),fe===!0&&Se.setGlobalState(b.clippingPlanes,ie),re&&Ye.viewport(F.copy(re)),j.length>0&&Xi(j,W,ie),Ae.length>0&&Xi(Ae,W,ie),Me.length>0&&Xi(Me,W,ie),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function wr(C,W,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[re.id]===void 0&&(_.state.transmissionRenderTarget[re.id]=new Kr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?ka:Wi,minFilter:Yr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const Ae=_.state.transmissionRenderTarget[re.id],Me=re.viewport||F;Ae.setSize(Me.z,Me.w);const Ge=b.getRenderTarget();b.setRenderTarget(Ae),b.getClearColor(oe),de=b.getClearAlpha(),de<1&&b.setClearColor(16777215,.5),b.clear(),pt&&Je.render(ie);const Be=b.toneMapping;b.toneMapping=yr;const tt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),_.setupLightsView(re),fe===!0&&Se.setGlobalState(b.clippingPlanes,re),Xi(C,ie,re),L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae),ht.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let We=0,gt=W.length;We<gt;We++){const Et=W[We],mt=Et.object,an=Et.geometry,at=Et.material,Xe=Et.group;if(at.side===zi&&mt.layers.test(re.layers)){const $n=at.side;at.side=Ln,at.needsUpdate=!0,Wa(mt,ie,re,an,at,Xe),at.side=$n,at.needsUpdate=!0,it=!0}}it===!0&&(L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae))}b.setRenderTarget(Ge),b.setClearColor(oe,de),tt!==void 0&&(re.viewport=tt),b.toneMapping=Be}function Xi(C,W,ie){const re=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Ae=C.length;j<Ae;j++){const Me=C[j],Ge=Me.object,Be=Me.geometry,tt=re===null?Me.material:re,it=Me.group;Ge.layers.test(ie.layers)&&Wa(Ge,W,ie,Be,tt,it)}}function Wa(C,W,ie,re,j,Ae){C.onBeforeRender(b,W,ie,re,j,Ae),C.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(b,W,ie,re,C,Ae),j.transparent===!0&&j.side===zi&&j.forceSinglePass===!1?(j.side=Ln,j.needsUpdate=!0,b.renderBufferDirect(ie,W,re,j,C,Ae),j.side=Sr,j.needsUpdate=!0,b.renderBufferDirect(ie,W,re,j,C,Ae),j.side=zi):b.renderBufferDirect(ie,W,re,j,C,Ae),C.onAfterRender(b,W,ie,re,j,Ae)}function Qr(C,W,ie){W.isScene!==!0&&(W=Rt);const re=qe.get(C),j=_.state.lights,Ae=_.state.shadowsArray,Me=j.state.version,Ge=Ve.getParameters(C,j.state,Ae,W,ie),Be=Ve.getProgramCacheKey(Ge);let tt=re.programs;re.environment=C.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(C.isMeshStandardMaterial?J:T).get(C.envMap||re.environment),re.envMapRotation=re.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",st),tt=new Map,re.programs=tt);let it=tt.get(Be);if(it!==void 0){if(re.currentProgram===it&&re.lightsStateVersion===Me)return ui(C,Ge),it}else Ge.uniforms=Ve.getUniforms(C),C.onBeforeCompile(Ge,b),it=Ve.acquireProgram(Ge,Be),tt.set(Be,it),re.uniforms=Ge.uniforms;const We=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=Se.uniform),ui(C,Ge),re.needsLights=Il(C),re.lightsStateVersion=Me,re.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMap.value=j.state.directionalShadowMap,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotShadowMap.value=j.state.spotShadowMap,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMap.value=j.state.pointShadowMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),re.currentProgram=it,re.uniformsList=null,it}function ja(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Al.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function ui(C,W){const ie=qe.get(C);ie.outputColorSpace=W.outputColorSpace,ie.batching=W.batching,ie.batchingColor=W.batchingColor,ie.instancing=W.instancing,ie.instancingColor=W.instancingColor,ie.instancingMorph=W.instancingMorph,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function Xa(C,W,ie,re,j){W.isScene!==!0&&(W=Rt),L.resetTextureUnits();const Ae=W.fog,Me=re.isMeshStandardMaterial?W.environment:null,Ge=k===null?b.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Xs,Be=(re.isMeshStandardMaterial?J:T).get(re.envMap||Me),tt=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,it=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),We=!!ie.morphAttributes.position,gt=!!ie.morphAttributes.normal,Et=!!ie.morphAttributes.color;let mt=yr;re.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(mt=b.toneMapping);const an=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,at=an!==void 0?an.length:0,Xe=qe.get(re),$n=_.state.lights;if(fe===!0&&(we===!0||C!==A)){const gn=C===A&&re.id===P;Se.setState(re,C,gn)}let St=!1;re.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==$n.state.version||Xe.outputColorSpace!==Ge||j.isBatchedMesh&&Xe.batching===!1||!j.isBatchedMesh&&Xe.batching===!0||j.isBatchedMesh&&Xe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Xe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Xe.instancing===!1||!j.isInstancedMesh&&Xe.instancing===!0||j.isSkinnedMesh&&Xe.skinning===!1||!j.isSkinnedMesh&&Xe.skinning===!0||j.isInstancedMesh&&Xe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Xe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Xe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Xe.instancingMorph===!1&&j.morphTexture!==null||Xe.envMap!==Be||re.fog===!0&&Xe.fog!==Ae||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Se.numPlanes||Xe.numIntersection!==Se.numIntersection)||Xe.vertexAlphas!==tt||Xe.vertexTangents!==it||Xe.morphTargets!==We||Xe.morphNormals!==gt||Xe.morphColors!==Et||Xe.toneMapping!==mt||Xe.morphTargetsCount!==at)&&(St=!0):(St=!0,Xe.__version=re.version);let on=Xe.currentProgram;St===!0&&(on=Qr(re,W,j));let Kn=!1,qt=!1,di=!1;const Lt=on.getUniforms(),kn=Xe.uniforms;if(Ye.useProgram(on.program)&&(Kn=!0,qt=!0,di=!0),re.id!==P&&(P=re.id,qt=!0),Kn||A!==C){Ye.buffers.depth.getReversed()?(xe.copy(C.projectionMatrix),vx(xe),xx(xe),Lt.setValue(X,"projectionMatrix",xe)):Lt.setValue(X,"projectionMatrix",C.projectionMatrix),Lt.setValue(X,"viewMatrix",C.matrixWorldInverse);const zn=Lt.map.cameraPosition;zn!==void 0&&zn.setValue(X,Ie.setFromMatrixPosition(C.matrixWorld)),ut.logarithmicDepthBuffer&&Lt.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Lt.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,qt=!0,di=!0)}if(j.isSkinnedMesh){Lt.setOptional(X,j,"bindMatrix"),Lt.setOptional(X,j,"bindMatrixInverse");const gn=j.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Lt.setValue(X,"boneTexture",gn.boneTexture,L))}j.isBatchedMesh&&(Lt.setOptional(X,j,"batchingTexture"),Lt.setValue(X,"batchingTexture",j._matricesTexture,L),Lt.setOptional(X,j,"batchingIdTexture"),Lt.setValue(X,"batchingIdTexture",j._indirectTexture,L),Lt.setOptional(X,j,"batchingColorTexture"),j._colorsTexture!==null&&Lt.setValue(X,"batchingColorTexture",j._colorsTexture,L));const wi=ie.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&et.update(j,ie,on),(qt||Xe.receiveShadow!==j.receiveShadow)&&(Xe.receiveShadow=j.receiveShadow,Lt.setValue(X,"receiveShadow",j.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(kn.envMap.value=Be,kn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&W.environment!==null&&(kn.envMapIntensity.value=W.environmentIntensity),qt&&(Lt.setValue(X,"toneMappingExposure",b.toneMappingExposure),Xe.needsLights&&qa(kn,di),Ae&&re.fog===!0&&Re.refreshFogUniforms(kn,Ae),Re.refreshMaterialUniforms(kn,re,B,le,_.state.transmissionRenderTarget[C.id]),Al.upload(X,ja(Xe),kn,L)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Al.upload(X,ja(Xe),kn,L),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Lt.setValue(X,"center",j.center),Lt.setValue(X,"modelViewMatrix",j.modelViewMatrix),Lt.setValue(X,"normalMatrix",j.normalMatrix),Lt.setValue(X,"modelMatrix",j.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const gn=re.uniformsGroups;for(let zn=0,Mn=gn.length;zn<Mn;zn++){const Ya=gn[zn];G.update(Ya,on),G.bind(Ya,on)}}return on}function qa(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Il(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(C,W,ie){qe.get(C.texture).__webglTexture=W,qe.get(C.depthTexture).__webglTexture=ie;const re=qe.get(C);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ie===void 0,re.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const ie=qe.get(C);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,ie=0){k=C,H=W,O=ie;let re=!0,j=null,Ae=!1,Me=!1;if(C){const Be=qe.get(C);if(Be.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(X.FRAMEBUFFER,null),re=!1;else if(Be.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Be.__hasExternalTextures)L.rebindTextures(C,qe.get(C.texture).__webglTexture,qe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const We=C.depthTexture;if(Be.__boundDepthTexture!==We){if(We!==null&&qe.has(We)&&(C.width!==We.image.width||C.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Me=!0);const it=qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(it[W])?j=it[W][ie]:j=it[W],Ae=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?j=qe.get(C).__webglMultisampledFramebuffer:Array.isArray(it)?j=it[ie]:j=it,F.copy(C.viewport),se.copy(C.scissor),Y=C.scissorTest}else F.copy(U).multiplyScalar(B).floor(),se.copy(Q).multiplyScalar(B).floor(),Y=Ee;if(Ye.bindFramebuffer(X.FRAMEBUFFER,j)&&re&&Ye.drawBuffers(C,j),Ye.viewport(F),Ye.scissor(se),Ye.setScissorTest(Y),Ae){const Be=qe.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,ie)}else if(Me){const Be=qe.get(C.texture),tt=W||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Be.__webglTexture,ie||0,tt)}P=-1},this.readRenderTargetPixels=function(C,W,ie,re,j,Ae,Me){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){Ye.bindFramebuffer(X.FRAMEBUFFER,Ge);try{const Be=C.texture,tt=Be.format,it=Be.type;if(!ut.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-re&&ie>=0&&ie<=C.height-j&&X.readPixels(W,ie,re,j,rt.convert(tt),rt.convert(it),Ae)}finally{const Be=k!==null?qe.get(k).__webglFramebuffer:null;Ye.bindFramebuffer(X.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(C,W,ie,re,j,Ae,Me){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){const Be=C.texture,tt=Be.format,it=Be.type;if(!ut.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-re&&ie>=0&&ie<=C.height-j){Ye.bindFramebuffer(X.FRAMEBUFFER,Ge);const We=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.bufferData(X.PIXEL_PACK_BUFFER,Ae.byteLength,X.STREAM_READ),X.readPixels(W,ie,re,j,rt.convert(tt),rt.convert(it),0);const gt=k!==null?qe.get(k).__webglFramebuffer:null;Ye.bindFramebuffer(X.FRAMEBUFFER,gt);const Et=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await _x(X,Et,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ae),X.deleteBuffer(We),X.deleteSync(Et),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,ie=0){C.isTexture!==!0&&(Ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const re=Math.pow(2,-ie),j=Math.floor(C.image.width*re),Ae=Math.floor(C.image.height*re),Me=W!==null?W.x:0,Ge=W!==null?W.y:0;L.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,ie,0,0,Me,Ge,j,Ae),Ye.unbindTexture()},this.copyTextureToTexture=function(C,W,ie=null,re=null,j=0){C.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,C=arguments[1],W=arguments[2],j=arguments[3]||0,ie=null);let Ae,Me,Ge,Be,tt,it,We,gt,Et;const mt=C.isCompressedTexture?C.mipmaps[j]:C.image;ie!==null?(Ae=ie.max.x-ie.min.x,Me=ie.max.y-ie.min.y,Ge=ie.isBox3?ie.max.z-ie.min.z:1,Be=ie.min.x,tt=ie.min.y,it=ie.isBox3?ie.min.z:0):(Ae=mt.width,Me=mt.height,Ge=mt.depth||1,Be=0,tt=0,it=0),re!==null?(We=re.x,gt=re.y,Et=re.z):(We=0,gt=0,Et=0);const an=rt.convert(W.format),at=rt.convert(W.type);let Xe;W.isData3DTexture?(L.setTexture3D(W,0),Xe=X.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),Xe=X.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),Xe=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const $n=X.getParameter(X.UNPACK_ROW_LENGTH),St=X.getParameter(X.UNPACK_IMAGE_HEIGHT),on=X.getParameter(X.UNPACK_SKIP_PIXELS),Kn=X.getParameter(X.UNPACK_SKIP_ROWS),qt=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,mt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,mt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Be),X.pixelStorei(X.UNPACK_SKIP_ROWS,tt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,it);const di=C.isDataArrayTexture||C.isData3DTexture,Lt=W.isDataArrayTexture||W.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const kn=qe.get(C),wi=qe.get(W),gn=qe.get(kn.__renderTarget),zn=qe.get(wi.__renderTarget);Ye.bindFramebuffer(X.READ_FRAMEBUFFER,gn.__webglFramebuffer),Ye.bindFramebuffer(X.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let Mn=0;Mn<Ge;Mn++)di&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(C).__webglTexture,j,it+Mn),C.isDepthTexture?(Lt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(W).__webglTexture,j,Et+Mn),X.blitFramebuffer(Be,tt,Ae,Me,We,gt,Ae,Me,X.DEPTH_BUFFER_BIT,X.NEAREST)):Lt?X.copyTexSubImage3D(Xe,j,We,gt,Et+Mn,Be,tt,Ae,Me):X.copyTexSubImage2D(Xe,j,We,gt,Et+Mn,Be,tt,Ae,Me);Ye.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Lt?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Xe,j,We,gt,Et,Ae,Me,Ge,an,at,mt.data):W.isCompressedArrayTexture?X.compressedTexSubImage3D(Xe,j,We,gt,Et,Ae,Me,Ge,an,mt.data):X.texSubImage3D(Xe,j,We,gt,Et,Ae,Me,Ge,an,at,mt):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,j,We,gt,Ae,Me,an,at,mt.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,j,We,gt,mt.width,mt.height,an,mt.data):X.texSubImage2D(X.TEXTURE_2D,j,We,gt,Ae,Me,an,at,mt);X.pixelStorei(X.UNPACK_ROW_LENGTH,$n),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,St),X.pixelStorei(X.UNPACK_SKIP_PIXELS,on),X.pixelStorei(X.UNPACK_SKIP_ROWS,Kn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,qt),j===0&&W.generateMipmaps&&X.generateMipmap(Xe),Ye.unbindTexture()},this.copyTextureToTexture3D=function(C,W,ie=null,re=null,j=0){return C.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,re=arguments[1]||null,C=arguments[2],W=arguments[3],j=arguments[4]||0),Ia('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,ie,re,j)},this.initRenderTarget=function(C){qe.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Ye.unbindTexture()},this.resetState=function(){H=0,O=0,k=null,Ye.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),n.unpackColorSpace=yt._getUnpackColorSpace()}}class b1 extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Yd extends Ys{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rl=new te,bl=new te,bm=new Bt,Da=new Ug,xl=new Nl,Yu=new te,Pm=new te;class Zg extends sn{constructor(e=new Si,n=new Yd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)Rl.fromBufferAttribute(n,o-1),bl.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Rl.distanceTo(bl);e.setAttribute("lineDistance",new ci(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(o),xl.radius+=c,e.ray.intersectsSphere(xl)===!1)return;bm.copy(o).invert(),Da.copy(e.ray).applyMatrix4(bm);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=this.isLineSegments?2:1,g=r.index,x=r.attributes.position;if(g!==null){const S=Math.max(0,d.start),E=Math.min(g.count,d.start+d.count);for(let w=S,y=E-1;w<y;w+=m){const _=g.getX(w),I=g.getX(w+1),N=yl(this,e,Da,h,_,I);N&&n.push(N)}if(this.isLineLoop){const w=g.getX(E-1),y=g.getX(S),_=yl(this,e,Da,h,w,y);_&&n.push(_)}}else{const S=Math.max(0,d.start),E=Math.min(x.count,d.start+d.count);for(let w=S,y=E-1;w<y;w+=m){const _=yl(this,e,Da,h,w,w+1);_&&n.push(_)}if(this.isLineLoop){const w=yl(this,e,Da,h,E-1,S);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function yl(s,e,n,r,o,c){const d=s.geometry.attributes.position;if(Rl.fromBufferAttribute(d,o),bl.fromBufferAttribute(d,c),n.distanceSqToSegment(Rl,bl,Yu,Pm)>r)return;Yu.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Yu);if(!(h<e.near||h>e.far))return{distance:h,point:Pm.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Lm=new te,Nm=new te;class P1 extends Zg{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)Lm.fromBufferAttribute(n,o),Nm.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Lm.distanceTo(Nm);e.setAttribute("lineDistance",new ci(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class L1 extends Ys{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pg,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Dm={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class N1{constructor(e,n,r){const o=this;let c=!1,d=0,f=0,h;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(g){f++,c===!1&&o.onStart!==void 0&&o.onStart(g,d,f),c=!0},this.itemEnd=function(g){d++,o.onProgress!==void 0&&o.onProgress(g,d,f),d===f&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,v){return m.push(g,v),this},this.removeHandler=function(g){const v=m.indexOf(g);return v!==-1&&m.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=m.length;v<x;v+=2){const S=m[v],E=m[v+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null}}}const D1=new N1;class $d{constructor(e){this.manager=e!==void 0?e:D1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(o,c){r.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$d.DEFAULT_MATERIAL_NAME="__DEFAULT";class I1 extends $d{constructor(e){super(e)}load(e,n,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,d=Dm.get(e);if(d!==void 0)return c.manager.itemStart(e),setTimeout(function(){n&&n(d),c.manager.itemEnd(e)},0),d;const f=Oa("img");function h(){g(),Dm.add(e,this),n&&n(this),c.manager.itemEnd(e)}function m(v){g(),o&&o(v),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),c.manager.itemStart(e),f.src=e,f}}class U1 extends $d{constructor(e){super(e)}load(e,n,r,o){const c=new yn,d=new I1(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(f){c.image=f,c.needsUpdate=!0,n!==void 0&&n(c)},r,o),c}}class Qg extends sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const $u=new Bt,Im=new te,Um=new te;class F1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xd,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Im.setFromMatrixPosition(e.matrixWorld),n.position.copy(Im),Um.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Um),n.updateMatrixWorld(),$u.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($u),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply($u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class O1 extends F1{constructor(){super(new jg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fm extends Qg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new O1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class k1 extends Qg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class z1 extends P1{constructor(e=10,n=10,r=4473924,o=8947848){r=new _t(r),o=new _t(o);const c=n/2,d=e/n,f=e/2,h=[],m=[];for(let x=0,S=0,E=-f;x<=n;x++,E+=d){h.push(-f,0,E,f,0,E),h.push(E,0,-f,E,0,f);const w=x===c?r:o;w.toArray(m,S),S+=3,w.toArray(m,S),S+=3,w.toArray(m,S),S+=3,w.toArray(m,S),S+=3}const g=new Si;g.setAttribute("position",new ci(h,3)),g.setAttribute("color",new ci(m,3));const v=new Yd({vertexColors:!0,toneMapped:!1});super(g,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);const B1=({heightmapUrl:s,textureUrl:e,pathCoords:n,elevationRange:r})=>{const o=Ze.useRef(null),[c,d]=Ze.useState(!1),[f,h]=Ze.useState(1.8),[m,g]=Ze.useState(!1),v=Ze.useRef(null),x=Ze.useRef(null),S=Ze.useRef(null),E=Ze.useRef(null),w=Ze.useRef(null),y=Ze.useRef(null),_=Ze.useRef(!1),I=Ze.useRef(!1),N=Ze.useRef({x:0,y:0}),b=Ze.useRef({radius:160,theta:Math.PI/4,phi:Math.PI/3.2}),q=Ze.useRef(new te(0,0,0)),H=()=>{if(!x.current)return;const{radius:k,theta:P,phi:A}=b.current,F=q.current;x.current.position.x=F.x+k*Math.sin(A)*Math.sin(P),x.current.position.y=F.y+k*Math.cos(A),x.current.position.z=F.z+k*Math.sin(A)*Math.cos(P),x.current.lookAt(F)},O=()=>{b.current={radius:160,theta:Math.PI/4,phi:Math.PI/3.2},q.current.set(0,0,0),H()};return Ze.useEffect(()=>{if(!o.current)return;const k=o.current,P=k.clientWidth,A=k.clientHeight||450,F=new b1;F.background=new _t(657935),v.current=F;const se=new Yn(45,P/A,.1,1e3);x.current=se,H();const Y=new R1({antialias:!0,alpha:!1});Y.setSize(P,A),Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),Y.shadowMap.enabled=!0,Y.shadowMap.type=_g,S.current=Y,k.appendChild(Y.domElement);const oe=new k1(16772829,.6);F.add(oe);const de=new Fm(16774634,1.2);de.position.set(-100,120,-100),de.castShadow=!0,F.add(de);const ae=new Fm(4482696,.4);ae.position.set(100,-50,100),F.add(ae);const le=new z1(160,16,3355460,2039598);le.position.y=-15,F.add(le);let B;const ue=()=>{B=requestAnimationFrame(ue),S.current&&v.current&&x.current&&S.current.render(v.current,x.current)};ue();const ee=()=>{if(!k||!S.current||!x.current)return;const U=k.clientWidth,Q=k.clientHeight||450;x.current.aspect=U/Q,x.current.updateProjectionMatrix(),S.current.setSize(U,Q)};return window.addEventListener("resize",ee),()=>{cancelAnimationFrame(B),window.removeEventListener("resize",ee),Y.dispose(),Y.domElement.remove()}},[]),Ze.useEffect(()=>{const k=o.current;if(!k)return;const P=oe=>{oe.button===0&&(_.current=!0),oe.button===2&&(I.current=!0),N.current={x:oe.clientX,y:oe.clientY}},A=oe=>{const de=oe.clientX-N.current.x,ae=oe.clientY-N.current.y;if(N.current={x:oe.clientX,y:oe.clientY},_.current)b.current.theta-=de*.008,b.current.phi=Math.max(.1,Math.min(Math.PI/2.05,b.current.phi-ae*.008)),H();else if(I.current){const le=b.current.radius*.001;q.current.x-=de*le,q.current.z+=ae*le,H()}},F=()=>{_.current=!1,I.current=!1},se=oe=>{oe.preventDefault(),b.current.radius=Math.max(30,Math.min(350,b.current.radius+oe.deltaY*.12)),H()},Y=oe=>oe.preventDefault();return k.addEventListener("mousedown",P),window.addEventListener("mousemove",A),window.addEventListener("mouseup",F),k.addEventListener("wheel",se,{passive:!1}),k.addEventListener("contextmenu",Y),()=>{k.removeEventListener("mousedown",P),window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",F),k.removeEventListener("wheel",se),k.removeEventListener("contextmenu",Y)}},[]),Ze.useEffect(()=>{if(!v.current||!s)return;const k=v.current;g(!0);const P=127,A=new Ga(100,100,P,P);A.rotateX(-Math.PI/2);const F=new Image;F.crossOrigin="anonymous",F.src=s,F.onload=()=>{const se=document.createElement("canvas");se.width=P+1,se.height=P+1;const Y=se.getContext("2d");if(!Y)return;Y.drawImage(F,0,0,P+1,P+1);const oe=Y.getImageData(0,0,P+1,P+1).data,de=A.attributes.position,ae=de.count,le=new Float32Array(ae);for(let ee=0;ee<ae;ee++){const U=oe[ee*4]/255;le[ee]=U,de.setY(ee,U*12*f)}y.current=le,A.computeVertexNormals();const B=new U1,ue=ee=>{ee.wrapS=Bi,ee.wrapT=Bi;const U=new L1({map:ee,wireframe:c,roughness:.85,metalness:.15});E.current&&(k.remove(E.current),E.current.geometry.dispose());const Q=new vi(A,U);Q.castShadow=!0,Q.receiveShadow=!0,k.add(Q),E.current=Q,g(!1)};e?B.load(e,ue):B.load(s,ue)},F.onerror=()=>{g(!1)}},[s,e]),Ze.useEffect(()=>{E.current&&E.current.material&&(E.current.material.wireframe=c)},[c]),Ze.useEffect(()=>{if(!E.current||!y.current)return;const k=E.current.geometry,P=k.attributes.position,A=y.current;for(let F=0;F<P.count;F++)P.setY(F,A[F]*12*f);P.needsUpdate=!0,k.computeVertexNormals()},[f]),Ze.useEffect(()=>{if(!v.current)return;const k=v.current;if(w.current&&(k.remove(w.current),w.current.geometry.dispose(),w.current=null),n.length>1&&y.current){const P=[],A=y.current,F=127;for(let de=0;de<n.length;de++){const[ae,le]=n[de],B=le/512*100-50,ue=ae/512*100-50,ee=Math.min(F,Math.floor(ae/512*F)),U=Math.min(F,Math.floor(le/512*F)),Q=ee*(F+1)+U,$=(A[Q]||0)*12*f+.8;P.push(new te(B,$,ue))}const se=new Si().setFromPoints(P),Y=new Yd({color:1096065,linewidth:4}),oe=new Zg(se,Y);k.add(oe),w.current=oe}},[n,f]),R.jsxs("div",{className:"flex flex-col h-full bg-mars-900 rounded-xl border border-mars-700/60 overflow-hidden relative",children:[R.jsxs("div",{className:"bg-mars-800/80 px-4 py-2 border-b border-mars-700/50 flex items-center justify-between text-xs font-mono",children:[R.jsxs("div",{className:"flex items-center space-x-2 text-slate-300",children:[R.jsx(Bm,{className:"w-4 h-4 text-cyan-400"}),R.jsx("span",{className:"font-semibold text-white",children:"PLANETARY 3D DIGITAL SURFACE MODEL"}),r&&R.jsxs("span",{className:"text-[11px] text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800/60",children:[r.min,"m → ",r.max,"m"]})]}),R.jsxs("div",{className:"flex items-center space-x-4",children:[R.jsxs("div",{className:"flex items-center space-x-2",children:[R.jsx(pv,{className:"w-3.5 h-3.5 text-mars-400"}),R.jsx("span",{className:"text-slate-400 text-[11px]",children:"Exagg:"}),R.jsx("input",{type:"range",min:"0.5",max:"4.0",step:"0.1",value:f,onChange:k=>h(parseFloat(k.target.value)),className:"w-20 accent-mars-500 cursor-pointer h-1.5 bg-mars-700 rounded-lg"}),R.jsxs("span",{className:"text-white w-7 text-[11px]",children:[f.toFixed(1),"x"]})]}),R.jsx("button",{onClick:()=>d(!c),className:`px-2.5 py-1 rounded border text-[11px] transition ${c?"bg-mars-600 text-cyan-300 border-cyan-500":"bg-mars-700/60 text-slate-300 border-mars-600 hover:bg-mars-600"}`,children:"Wireframe"}),R.jsx("button",{onClick:O,className:"p-1 rounded bg-mars-700/60 text-slate-300 border border-mars-600 hover:bg-mars-600 transition",title:"Reset 3D Camera",children:R.jsx(dv,{className:"w-3.5 h-3.5"})})]})]}),R.jsxs("div",{className:"w-full flex-1 min-h-[440px] relative cursor-grab active:cursor-grabbing overflow-hidden",children:[R.jsx("div",{ref:o,className:"absolute inset-0 w-full h-full"}),m&&R.jsxs("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center space-x-2 text-cyan-400 text-xs font-mono z-10 pointer-events-none",children:[R.jsx("span",{className:"w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"}),R.jsx("span",{children:"Generating 3D Martian terrain mesh..."})]}),!s&&R.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-slate-500 font-mono text-xs space-y-2 pointer-events-none",children:[R.jsx(tv,{className:"w-8 h-8 text-slate-600"}),R.jsx("span",{children:"DEM elevation heightmap required for 3D visualization"})]}),R.jsx("div",{className:"absolute bottom-2 right-2 bg-mars-950/80 backdrop-blur border border-mars-700/50 rounded px-2 py-1 text-[10px] font-mono text-slate-400 pointer-events-none",children:"Left Drag: Rotate | Right Drag: Pan | Scroll: Zoom"})]})]})},H1=({analysis:s,pathPlan:e,startCoords:n,goalCoords:r,onRunPlanner:o,onSelectTargetGoal:c,isPlanning:d,isAnalyzing:f})=>R.jsxs("div",{className:"flex flex-col space-y-4",children:[R.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3",children:[R.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-2",children:[R.jsxs("div",{className:"flex items-center space-x-2",children:[R.jsx(_v,{className:"w-4 h-4 text-amber-400"}),R.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Terrain Morphometry (Horn's Method)"})]}),f&&R.jsx("span",{className:"text-[10px] font-mono text-amber-400 animate-pulse",children:"Computing..."})]}),s?R.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] font-mono",children:[R.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[R.jsx("span",{className:"text-slate-400 block text-[10px]",children:"MAX SLOPE"}),R.jsxs("span",{className:"text-rose-400 font-bold text-sm",children:[s.terrain_summary.max_slope_deg.toFixed(1),"°"]})]}),R.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[R.jsx("span",{className:"text-slate-400 block text-[10px]",children:"MEAN SLOPE"}),R.jsxs("span",{className:"text-slate-200 font-bold text-sm",children:[s.terrain_summary.mean_slope_deg.toFixed(1),"°"]})]}),R.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[R.jsx("span",{className:"text-slate-400 block text-[10px]",children:"CAUTION SLOPES (>20°)"}),R.jsxs("span",{className:"text-amber-400 font-bold",children:[s.terrain_summary.pct_slope_gt_20deg.toFixed(1),"% area"]})]}),R.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[R.jsx("span",{className:"text-slate-400 block text-[10px]",children:"LETHAL CLIFFS (>30°)"}),R.jsxs("span",{className:"text-red-400 font-bold",children:[s.terrain_summary.pct_slope_gt_30deg.toFixed(1),"% area"]})]})]}):R.jsx("div",{className:"text-xs font-mono text-slate-500 italic py-2 text-center",children:"Run terrain analysis to compute slope & ruggedness metrics"})]}),s&&R.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3",children:[R.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-2",children:[R.jsxs("div",{className:"flex items-center space-x-2",children:[R.jsx(Rp,{className:"w-4 h-4 text-rose-400"}),R.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Hazard & Uncertainty Engine"})]}),R.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-mars-700 text-slate-300",children:["Confidence: ",(s.uncertainty_summary.confidence_score*100).toFixed(0),"%"]})]}),R.jsxs("div",{className:"space-y-2 text-[11px] font-mono",children:[R.jsxs("div",{className:"flex justify-between items-center bg-black/40 p-2 rounded border border-mars-700/30",children:[R.jsx("span",{className:"text-slate-400",children:"Mobility Clearance:"}),R.jsxs("span",{className:"text-emerald-400 font-bold",children:[(s.hazard_summary.safe_cells/s.hazard_summary.total_cells*100).toFixed(1),"% Traversable"]})]}),R.jsxs("div",{className:"text-[10px] text-slate-400",children:[R.jsx("span",{className:"block mb-1",children:"Detected Hazard Signatures:"}),R.jsx("div",{className:"flex flex-wrap gap-1",children:s.hazard_summary.hazard_types_detected.map((h,m)=>R.jsx("span",{className:"px-2 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-800/70",children:h},m))})]}),R.jsxs("div",{className:"text-[10px] text-slate-400",children:[R.jsx("span",{className:"block mb-1",children:"Uncertainty Drivers:"}),R.jsx("div",{className:"flex flex-wrap gap-1",children:s.uncertainty_summary.dominant_sources.map((h,m)=>R.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/50",children:h},m))})]})]})]}),s&&s.science_targets.length>0&&R.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3",children:[R.jsxs("div",{className:"flex items-center space-x-2 border-b border-mars-700/50 pb-2",children:[R.jsx(mv,{className:"w-4 h-4 text-amber-300"}),R.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Scientific Target Discovery"})]}),R.jsx("div",{className:"space-y-2",children:s.science_targets.map(h=>R.jsxs("div",{onClick:()=>c(h.coords_pixel),className:"bg-black/50 hover:bg-mars-700/40 cursor-pointer p-2.5 rounded-lg border border-mars-700/40 hover:border-amber-500/60 transition group space-y-1",children:[R.jsxs("div",{className:"flex items-center justify-between",children:[R.jsx("span",{className:"text-xs font-mono font-bold text-amber-300 group-hover:text-amber-200",children:h.name}),R.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800",children:["Priority: ",h.overall_priority]})]}),R.jsx("p",{className:"text-[10px] text-slate-400",children:h.description}),R.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-mars-700/30",children:[R.jsxs("span",{children:["Geo: ",h.geological_score," | Access: ",h.accessibility_score]}),R.jsx("span",{className:"text-cyan-400 group-hover:underline",children:"Click to Target Goal →"})]})]},h.id))})]}),R.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3",children:[R.jsxs("div",{className:"flex items-center space-x-2 border-b border-mars-700/50 pb-2",children:[R.jsx(Xm,{className:"w-4 h-4 text-emerald-400"}),R.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Autonomous A* Path Planner"})]}),R.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] font-mono",children:[R.jsxs("div",{className:"bg-black/40 p-2 rounded border border-mars-700/30",children:[R.jsx("span",{className:"text-slate-400 block text-[10px]",children:"START (ROVER)"}),R.jsxs("span",{className:"text-emerald-400 font-bold",children:["[",n[0],", ",n[1],"]"]})]}),R.jsxs("div",{className:"bg-black/40 p-2 rounded border border-mars-700/30",children:[R.jsx("span",{className:"text-slate-400 block text-[10px]",children:"GOAL (TARGET)"}),R.jsxs("span",{className:"text-cyan-400 font-bold",children:["[",r[0],", ",r[1],"]"]})]})]}),R.jsxs("button",{onClick:o,disabled:d,className:"w-full py-2.5 rounded-lg font-mono font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-950 border border-emerald-500/50 flex items-center justify-center space-x-2 transition disabled:opacity-50",children:[R.jsx(cv,{className:`w-3.5 h-3.5 fill-current ${d?"animate-spin":""}`}),R.jsx("span",{children:d?"Planning Optimal Path...":"Compute Safe A* Path"})]}),e&&R.jsxs("div",{className:`p-2.5 rounded-lg text-xs font-mono border ${e.success?"bg-emerald-950/60 border-emerald-800 text-emerald-200":"bg-red-950/60 border-red-800 text-red-200"}`,children:[R.jsxs("div",{className:"flex items-center space-x-1.5 font-bold mb-1",children:[e.success?R.jsx(ev,{className:"w-4 h-4 text-emerald-400"}):R.jsx(Rp,{className:"w-4 h-4 text-red-400"}),R.jsx("span",{children:e.plan.message})]}),e.success&&R.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-emerald-800/50 text-[11px]",children:[R.jsxs("div",{children:[R.jsx("span",{className:"text-slate-400",children:"Path Length: "}),R.jsxs("span",{className:"text-white font-bold",children:[e.plan.path_length_steps," steps"]})]}),R.jsxs("div",{children:[R.jsx("span",{className:"text-slate-400",children:"Accumulated Cost: "}),R.jsx("span",{className:"text-emerald-300 font-bold",children:e.plan.total_cost})]})]})]})]})]}),V1=()=>{var Q;const[s,e]=Ze.useState("CONNECTING"),[n,r]=Ze.useState("MARS-09"),[o,c]=Ze.useState(0),[d,f]=Ze.useState(null),[h,m]=Ze.useState(null),[g,v]=Ze.useState(null),[x,S]=Ze.useState(null),[E,w]=Ze.useState(!1),[y,_]=Ze.useState(null),[I,N]=Ze.useState(!1),[b,q]=Ze.useState([90,90]),[H,O]=Ze.useState([380,390]),[k,P]=Ze.useState(null),[A,F]=Ze.useState(!1),[se,Y]=Ze.useState("split"),[oe,de]=Ze.useState(!1);Ze.useEffect(()=>{ae()},[]);const ae=async()=>{de(!0);try{const Ee=await yv();e(Ee.status),r(Ee.rover_callsign),c(Ee.registered_datasets_count);const $=await Sv();f($.imagery),m($.dem),v($.dem_offset),await le($.imagery.id,$.dem.id),await B($.dem.id)}catch(Ee){console.error("Initialization error:",Ee),e("OFFLINE")}finally{de(!1)}},le=async(Ee,$)=>{w(!0);try{const fe=await Ev(Ee,$);S(fe)}catch(fe){console.error("Validation error:",fe)}finally{w(!1)}},B=async Ee=>{N(!0);try{const $=await wv(Ee);_($)}catch($){console.error("Terrain analysis error:",$)}finally{N(!1)}},ue=Ee=>{f(Ee),h&&le(Ee.id,h.id)},ee=Ee=>{m(Ee),d&&le(d.id,Ee.id),B(Ee.id),P(null)},U=async()=>{if(h){F(!0);try{const Ee=await Tv(h.id,b[0],b[1],H[0],H[1]);P(Ee)}catch(Ee){console.error("Planning error:",Ee)}finally{F(!1)}}};return R.jsxs("div",{className:"flex flex-col min-h-screen bg-mars-900 text-slate-100",children:[R.jsx(xv,{status:s,roverCallsign:n,datasetCount:o}),R.jsxs("main",{className:"flex-1 p-5 grid grid-cols-12 gap-5 max-w-[1920px] mx-auto w-full",children:[R.jsxs("section",{className:"col-span-12 lg:col-span-3 space-y-4",children:[R.jsx(Av,{imageryRecord:d,demRecord:h,demOffsetRecord:g,onSelectImagery:ue,onSelectDem:ee,onLoadSamples:ae,isLoading:oe}),R.jsx(Cv,{report:x,isValidating:E})]}),R.jsxs("section",{className:"col-span-12 lg:col-span-6 flex flex-col space-y-3",children:[R.jsxs("div",{className:"flex items-center justify-between bg-mars-800/60 border border-mars-700/60 rounded-xl px-4 py-2",children:[R.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono text-slate-300",children:[R.jsx(Qm,{className:"w-4 h-4 text-mars-400"}),R.jsx("span",{className:"font-bold text-white",children:"TERRAIN VISUALIZATION CONSOLE"})]}),R.jsxs("div",{className:"flex items-center space-x-1 bg-mars-950/80 rounded-lg p-0.5 border border-mars-700/50 text-xs font-mono",children:[R.jsxs("button",{onClick:()=>Y("split"),className:`px-3 py-1 rounded flex items-center space-x-1.5 transition ${se==="split"?"bg-mars-700 text-white font-bold":"text-slate-400 hover:text-slate-200"}`,children:[R.jsx(nv,{className:"w-3.5 h-3.5"}),R.jsx("span",{children:"Split 2D / 3D"})]}),R.jsxs("button",{onClick:()=>Y("2d"),className:`px-3 py-1 rounded flex items-center space-x-1.5 transition ${se==="2d"?"bg-mars-700 text-cyan-300 font-bold":"text-slate-400 hover:text-slate-200"}`,children:[R.jsx(ov,{className:"w-3.5 h-3.5"}),R.jsx("span",{children:"2D Map"})]}),R.jsxs("button",{onClick:()=>Y("3d"),className:`px-3 py-1 rounded flex items-center space-x-1.5 transition ${se==="3d"?"bg-mars-700 text-amber-300 font-bold":"text-slate-400 hover:text-slate-200"}`,children:[R.jsx(Bm,{className:"w-3.5 h-3.5"}),R.jsx("span",{children:"3D Mesh"})]})]})]}),R.jsxs("div",{className:`grid gap-4 flex-1 ${se==="split"?"grid-cols-1 md:grid-cols-2":"grid-cols-1"}`,children:[(se==="split"||se==="2d")&&R.jsx("div",{className:"h-[520px]",children:R.jsx(Rv,{imageryUrl:d==null?void 0:d.preview_url,demColormapUrl:h==null?void 0:h.preview_url,slopeUrl:y==null?void 0:y.slope_preview_url,pathCoords:(k==null?void 0:k.plan.path_coords)||[],scienceTargets:(y==null?void 0:y.science_targets)||[],startCoords:b,goalCoords:H,onSetStart:q,onSetGoal:O})}),(se==="split"||se==="3d")&&R.jsx("div",{className:"h-[520px]",children:R.jsx(B1,{heightmapUrl:h==null?void 0:h.heightmap_url,textureUrl:(d==null?void 0:d.preview_url)||(h==null?void 0:h.preview_url),pathCoords:(k==null?void 0:k.plan.path_coords)||[],elevationRange:(Q=h==null?void 0:h.preview)!=null&&Q.stats?{min:h.preview.stats.min_elevation_m,max:h.preview.stats.max_elevation_m}:void 0})})]})]}),R.jsx("section",{className:"col-span-12 lg:col-span-3 space-y-4",children:R.jsx(H1,{analysis:y,pathPlan:k,startCoords:b,goalCoords:H,onRunPlanner:U,onSelectTargetGoal:Ee=>O(Ee),isPlanning:A,isAnalyzing:I})})]})]})},G1=()=>R.jsx(V1,{});H_.createRoot(document.getElementById("root")).render(R.jsx(I_.StrictMode,{children:R.jsx(G1,{})}));
