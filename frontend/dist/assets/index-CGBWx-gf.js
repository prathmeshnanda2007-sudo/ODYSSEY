(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function $m(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var mu={exports:{}},Ca={},gu={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function Gv(){if(bp)return pt;bp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,T={};function x(I,re,Te){this.props=I,this.context=re,this.refs=T,this.updater=Te||S}x.prototype.isReactComponent={},x.prototype.setState=function(I,re){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,re,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function v(){}v.prototype=x.prototype;function N(I,re,Te){this.props=I,this.context=re,this.refs=T,this.updater=Te||S}var L=N.prototype=new v;L.constructor=N,w(L,x.prototype),L.isPureReactComponent=!0;var b=Array.isArray,G=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function k(I,re,Te){var Q,he={},xe=null,ve=null;if(re!=null)for(Q in re.ref!==void 0&&(ve=re.ref),re.key!==void 0&&(xe=""+re.key),re)G.call(re,Q)&&!U.hasOwnProperty(Q)&&(he[Q]=re[Q]);var be=arguments.length-2;if(be===1)he.children=Te;else if(1<be){for(var Ie=Array(be),Ye=0;Ye<be;Ye++)Ie[Ye]=arguments[Ye+2];he.children=Ie}if(I&&I.defaultProps)for(Q in be=I.defaultProps,be)he[Q]===void 0&&(he[Q]=be[Q]);return{$$typeof:s,type:I,key:xe,ref:ve,props:he,_owner:O.current}}function P(I,re){return{$$typeof:s,type:I.type,key:re,ref:I.ref,props:I.props,_owner:I._owner}}function A(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function B(I){var re={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Te){return re[Te]})}var V=/\/+/g;function X(I,re){return typeof I=="object"&&I!==null&&I.key!=null?B(""+I.key):re.toString(36)}function oe(I,re,Te,Q,he){var xe=typeof I;(xe==="undefined"||xe==="boolean")&&(I=null);var ve=!1;if(I===null)ve=!0;else switch(xe){case"string":case"number":ve=!0;break;case"object":switch(I.$$typeof){case s:case e:ve=!0}}if(ve)return ve=I,he=he(ve),I=Q===""?"."+X(ve,0):Q,b(he)?(Te="",I!=null&&(Te=I.replace(V,"$&/")+"/"),oe(he,re,Te,"",function(Ye){return Ye})):he!=null&&(A(he)&&(he=P(he,Te+(!he.key||ve&&ve.key===he.key?"":(""+he.key).replace(V,"$&/")+"/")+I)),re.push(he)),1;if(ve=0,Q=Q===""?".":Q+":",b(I))for(var be=0;be<I.length;be++){xe=I[be];var Ie=Q+X(xe,be);ve+=oe(xe,re,Te,Ie,he)}else if(Ie=y(I),typeof Ie=="function")for(I=Ie.call(I),be=0;!(xe=I.next()).done;)xe=xe.value,Ie=Q+X(xe,be++),ve+=oe(xe,re,Te,Ie,he);else if(xe==="object")throw re=String(I),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ve}function se(I,re,Te){if(I==null)return I;var Q=[],he=0;return oe(I,Q,"","",function(xe){return re.call(Te,xe,he++)}),Q}function ee(I){if(I._status===-1){var re=I._result;re=re(),re.then(function(Te){(I._status===0||I._status===-1)&&(I._status=1,I._result=Te)},function(Te){(I._status===0||I._status===-1)&&(I._status=2,I._result=Te)}),I._status===-1&&(I._status=0,I._result=re)}if(I._status===1)return I._result.default;throw I._result}var ne={current:null},z={transition:null},j={ReactCurrentDispatcher:ne,ReactCurrentBatchConfig:z,ReactCurrentOwner:O};function J(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:se,forEach:function(I,re,Te){se(I,function(){re.apply(this,arguments)},Te)},count:function(I){var re=0;return se(I,function(){re++}),re},toArray:function(I){return se(I,function(re){return re})||[]},only:function(I){if(!A(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},pt.Component=x,pt.Fragment=n,pt.Profiler=o,pt.PureComponent=N,pt.StrictMode=r,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,pt.act=J,pt.cloneElement=function(I,re,Te){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Q=w({},I.props),he=I.key,xe=I.ref,ve=I._owner;if(re!=null){if(re.ref!==void 0&&(xe=re.ref,ve=O.current),re.key!==void 0&&(he=""+re.key),I.type&&I.type.defaultProps)var be=I.type.defaultProps;for(Ie in re)G.call(re,Ie)&&!U.hasOwnProperty(Ie)&&(Q[Ie]=re[Ie]===void 0&&be!==void 0?be[Ie]:re[Ie])}var Ie=arguments.length-2;if(Ie===1)Q.children=Te;else if(1<Ie){be=Array(Ie);for(var Ye=0;Ye<Ie;Ye++)be[Ye]=arguments[Ye+2];Q.children=be}return{$$typeof:s,type:I.type,key:he,ref:xe,props:Q,_owner:ve}},pt.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:c,_context:I},I.Consumer=I},pt.createElement=k,pt.createFactory=function(I){var re=k.bind(null,I);return re.type=I,re},pt.createRef=function(){return{current:null}},pt.forwardRef=function(I){return{$$typeof:f,render:I}},pt.isValidElement=A,pt.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:ee}},pt.memo=function(I,re){return{$$typeof:m,type:I,compare:re===void 0?null:re}},pt.startTransition=function(I){var re=z.transition;z.transition={};try{I()}finally{z.transition=re}},pt.unstable_act=J,pt.useCallback=function(I,re){return ne.current.useCallback(I,re)},pt.useContext=function(I){return ne.current.useContext(I)},pt.useDebugValue=function(){},pt.useDeferredValue=function(I){return ne.current.useDeferredValue(I)},pt.useEffect=function(I,re){return ne.current.useEffect(I,re)},pt.useId=function(){return ne.current.useId()},pt.useImperativeHandle=function(I,re,Te){return ne.current.useImperativeHandle(I,re,Te)},pt.useInsertionEffect=function(I,re){return ne.current.useInsertionEffect(I,re)},pt.useLayoutEffect=function(I,re){return ne.current.useLayoutEffect(I,re)},pt.useMemo=function(I,re){return ne.current.useMemo(I,re)},pt.useReducer=function(I,re,Te){return ne.current.useReducer(I,re,Te)},pt.useRef=function(I){return ne.current.useRef(I)},pt.useState=function(I){return ne.current.useState(I)},pt.useSyncExternalStore=function(I,re,Te){return ne.current.useSyncExternalStore(I,re,Te)},pt.useTransition=function(){return ne.current.useTransition()},pt.version="18.3.1",pt}var Cp;function Gd(){return Cp||(Cp=1,gu.exports=Gv()),gu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function Wv(){if(Rp)return Ca;Rp=1;var s=Gd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,m){var g,_={},y=null,S=null;m!==void 0&&(y=""+m),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!c.hasOwnProperty(g)&&(_[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)_[g]===void 0&&(_[g]=h[g]);return{$$typeof:e,type:f,key:y,ref:S,props:_,_owner:o.current}}return Ca.Fragment=n,Ca.jsx=u,Ca.jsxs=u,Ca}var Pp;function jv(){return Pp||(Pp=1,mu.exports=Wv()),mu.exports}var M=jv(),He=Gd();const Xv=$m(He);var Zo={},vu={exports:{}},Rn={},_u={exports:{}},xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function $v(){return Np||(Np=1,(function(s){function e(z,j){var J=z.length;z.push(j);e:for(;0<J;){var I=J-1>>>1,re=z[I];if(0<o(re,j))z[I]=j,z[J]=re,J=I;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var j=z[0],J=z.pop();if(J!==j){z[0]=J;e:for(var I=0,re=z.length,Te=re>>>1;I<Te;){var Q=2*(I+1)-1,he=z[Q],xe=Q+1,ve=z[xe];if(0>o(he,J))xe<re&&0>o(ve,he)?(z[I]=ve,z[xe]=J,I=xe):(z[I]=he,z[Q]=J,I=Q);else if(xe<re&&0>o(ve,J))z[I]=ve,z[xe]=J,I=xe;else break e}}return j}function o(z,j){var J=z.sortIndex-j.sortIndex;return J!==0?J:z.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],m=[],g=1,_=null,y=3,S=!1,w=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(z){for(var j=n(m);j!==null;){if(j.callback===null)r(m);else if(j.startTime<=z)r(m),j.sortIndex=j.expirationTime,e(h,j);else break;j=n(m)}}function b(z){if(T=!1,L(z),!w)if(n(h)!==null)w=!0,ee(G);else{var j=n(m);j!==null&&ne(b,j.startTime-z)}}function G(z,j){w=!1,T&&(T=!1,v(k),k=-1),S=!0;var J=y;try{for(L(j),_=n(h);_!==null&&(!(_.expirationTime>j)||z&&!B());){var I=_.callback;if(typeof I=="function"){_.callback=null,y=_.priorityLevel;var re=I(_.expirationTime<=j);j=s.unstable_now(),typeof re=="function"?_.callback=re:_===n(h)&&r(h),L(j)}else r(h);_=n(h)}if(_!==null)var Te=!0;else{var Q=n(m);Q!==null&&ne(b,Q.startTime-j),Te=!1}return Te}finally{_=null,y=J,S=!1}}var O=!1,U=null,k=-1,P=5,A=-1;function B(){return!(s.unstable_now()-A<P)}function V(){if(U!==null){var z=s.unstable_now();A=z;var j=!0;try{j=U(!0,z)}finally{j?X():(O=!1,U=null)}}else O=!1}var X;if(typeof N=="function")X=function(){N(V)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,se=oe.port2;oe.port1.onmessage=V,X=function(){se.postMessage(null)}}else X=function(){x(V,0)};function ee(z){U=z,O||(O=!0,X())}function ne(z,j){k=x(function(){z(s.unstable_now())},j)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,ee(G))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(z){switch(y){case 1:case 2:case 3:var j=3;break;default:j=y}var J=y;y=j;try{return z()}finally{y=J}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=y;y=z;try{return j()}finally{y=J}},s.unstable_scheduleCallback=function(z,j,J){var I=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?I+J:I):J=I,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=J+re,z={id:g++,callback:j,priorityLevel:z,startTime:J,expirationTime:re,sortIndex:-1},J>I?(z.sortIndex=J,e(m,z),n(h)===null&&z===n(m)&&(T?(v(k),k=-1):T=!0,ne(b,J-I))):(z.sortIndex=re,e(h,z),w||S||(w=!0,ee(G))),z},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(z){var j=y;return function(){var J=y;y=j;try{return z.apply(this,arguments)}finally{y=J}}}})(xu)),xu}var Lp;function qv(){return Lp||(Lp=1,_u.exports=$v()),_u.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function Yv(){if(Dp)return Rn;Dp=1;var s=Gd(),e=qv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function y(t){return h.call(_,t)?!0:h.call(g,t)?!1:m.test(t)?_[t]=!0:(g[t]=!0,!1)}function S(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,a,l){if(i===null||typeof i>"u"||S(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,a,l,d,p,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,N);x[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,N);x[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,N);x[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,a,l){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,d,l)&&(a=null),l||d===null?y(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,l=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),B=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),z=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var J=Object.assign,I;function re(t){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Te=!1;function Q(t,i){if(!t||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var l=ce}Reflect.construct(t,[],i)}else{try{i.call()}catch(ce){l=ce}t.call(i.prototype)}else{try{throw Error()}catch(ce){l=ce}t()}}catch(ce){if(ce&&l&&typeof ce.stack=="string"){for(var d=ce.stack.split(`
`),p=l.stack.split(`
`),E=d.length-1,F=p.length-1;1<=E&&0<=F&&d[E]!==p[F];)F--;for(;1<=E&&0<=F;E--,F--)if(d[E]!==p[F]){if(E!==1||F!==1)do if(E--,F--,0>F||d[E]!==p[F]){var H=`
`+d[E].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=E&&0<=F);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?re(t):""}function he(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function xe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case O:return"Portal";case P:return"Profiler";case k:return"StrictMode";case X:return"Suspense";case oe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case V:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case se:return i=t.displayName||null,i!==null?i:xe(t.type)||"Memo";case ee:i=t._payload,t=t._init;try{return xe(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ie(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(t){var i=Ie(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){l=""+E,p.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Mt(t){t._valueTracker||(t._valueTracker=Ye(t))}function ft(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ie(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function Pt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Y(t,i){var a=i.checked;return J({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function rn(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ut(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function lt(t,i){ut(t,i);var a=be(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(t,i.type,a):i.hasOwnProperty("defaultValue")&&Tt(t,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ke(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Tt(t,i,a){(i!=="number"||Pt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var $e=Array.isArray;function D(t,i,a,l){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&l&&(t[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function C(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return J({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if($e(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:be(a)}}function le(t,i){var a=be(i.value),l=be(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function pe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function me(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ze(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?me(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ce,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function dt(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function Je(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function et(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,d=Je(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,d):t[a]=d}}var ke=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function rt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function q(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,fe=null,ge=null;function Le(t){if(t=ha(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=fo(i),Re(t.stateNode,t.type,i))}}function Ne(t){fe?ge?ge.push(t):ge=[t]:fe=t}function st(){if(fe){var t=fe,i=ge;if(ge=fe=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function It(t,i){return t(i)}function $t(){}var xt=!1;function Mn(t,i,a){if(xt)return t(i,a);xt=!0;try{return It(t,i,a)}finally{xt=!1,(fe!==null||ge!==null)&&($t(),st())}}function gn(t,i){var a=t.stateNode;if(a===null)return null;var l=fo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Qr=!1;if(f)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{Qr=!1}function Mi(t,i,a,l,d,p,E,F,H){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(a,ce)}catch(ye){this.onError(ye)}}var Ei=!1,Er=null,wr=!1,Xi=null,ja={onError:function(t){Ei=!0,Er=t}};function Jr(t,i,a,l,d,p,E,F,H){Ei=!1,Er=null,Mi.apply(ja,arguments)}function Xa(t,i,a,l,d,p,E,F,H){if(Jr.apply(this,arguments),Ei){if(Ei){var ce=Er;Ei=!1,Er=null}else throw Error(n(198));wr||(wr=!0,Xi=ce)}}function fi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function $a(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function qa(t){if(fi(t)!==t)throw Error(n(188))}function Ol(t){var i=t.alternate;if(!i){if(i=fi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){a=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return qa(d),t;if(p===l)return qa(d),i;p=p.sibling}throw Error(n(188))}if(a.return!==l.return)a=d,l=p;else{for(var E=!1,F=d.child;F;){if(F===a){E=!0,a=d,l=p;break}if(F===l){E=!0,l=d,a=p;break}F=F.sibling}if(!E){for(F=p.child;F;){if(F===a){E=!0,a=p,l=d;break}if(F===l){E=!0,l=p,a=d;break}F=F.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function R(t){return t=Ol(t),t!==null?K(t):null}function K(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=K(t);if(i!==null)return i;t=t.sibling}return null}var ue=e.unstable_scheduleCallback,de=e.unstable_cancelCallback,Z=e.unstable_shouldYield,Ae=e.unstable_requestPaint,Ee=e.unstable_now,We=e.unstable_getCurrentPriorityLevel,Ve=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,je=e.unstable_LowPriority,gt=e.unstable_IdlePriority,At=null,mt=null;function ln(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(At,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Et,qe=Math.log,Qn=Math.LN2;function Et(t){return t>>>=0,t===0?32:31-(qe(t)/Qn|0)|0}var cn=64,Jn=4194304;function qt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hi(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,d=t.suspendedLanes,p=t.pingedLanes,E=a&268435455;if(E!==0){var F=E&~d;F!==0?l=qt(F):(p&=E,p!==0&&(l=qt(p)))}else E=a&~d,E!==0?l=qt(E):p!==0&&(l=qt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-at(i),d=1<<a,l|=t[a],i&=~d;return l}function Lt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hn(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var E=31-at(p),F=1<<E,H=d[E];H===-1?((F&a)===0||(F&l)!==0)&&(d[E]=Lt(F,i)):H<=i&&(t.expiredLanes|=F),p&=~F}}function wi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vn(){var t=cn;return cn<<=1,(cn&4194240)===0&&(cn=64),t}function Vn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function En(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-at(i),t[i]=a}function Ya(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-at(a),p=1<<d;i[d]=0,l[d]=-1,t[d]=-1,a&=~p}}function kl(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-at(a),d=1<<l;d&i|t[l]&i&&(t[l]|=i),a&=~d}}var Rt=0;function sf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var af,zl,of,lf,cf,Bl=!1,Ka=[],$i=null,qi=null,Yi=null,Zs=new Map,Qs=new Map,Ki=[],dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uf(t,i){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Zs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(i.pointerId)}}function Js(t,i,a,l,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},i!==null&&(i=ha(i),i!==null&&zl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function fg(t,i,a,l,d){switch(i){case"focusin":return $i=Js($i,t,i,a,l,d),!0;case"dragenter":return qi=Js(qi,t,i,a,l,d),!0;case"mouseover":return Yi=Js(Yi,t,i,a,l,d),!0;case"pointerover":var p=d.pointerId;return Zs.set(p,Js(Zs.get(p)||null,t,i,a,l,d)),!0;case"gotpointercapture":return p=d.pointerId,Qs.set(p,Js(Qs.get(p)||null,t,i,a,l,d)),!0}return!1}function df(t){var i=Tr(t.target);if(i!==null){var a=fi(i);if(a!==null){if(i=a.tag,i===13){if(i=$a(a),i!==null){t.blockedOn=i,cf(t.priority,function(){of(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Vl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);bt=l,a.target.dispatchEvent(l),bt=null}else return i=ha(a),i!==null&&zl(i),t.blockedOn=a,!1;i.shift()}return!0}function ff(t,i,a){Za(t)&&a.delete(i)}function hg(){Bl=!1,$i!==null&&Za($i)&&($i=null),qi!==null&&Za(qi)&&(qi=null),Yi!==null&&Za(Yi)&&(Yi=null),Zs.forEach(ff),Qs.forEach(ff)}function ea(t,i){t.blockedOn===i&&(t.blockedOn=null,Bl||(Bl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hg)))}function ta(t){function i(d){return ea(d,t)}if(0<Ka.length){ea(Ka[0],t);for(var a=1;a<Ka.length;a++){var l=Ka[a];l.blockedOn===t&&(l.blockedOn=null)}}for($i!==null&&ea($i,t),qi!==null&&ea(qi,t),Yi!==null&&ea(Yi,t),Zs.forEach(i),Qs.forEach(i),a=0;a<Ki.length;a++)l=Ki[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Ki.length&&(a=Ki[0],a.blockedOn===null);)df(a),a.blockedOn===null&&Ki.shift()}var es=b.ReactCurrentBatchConfig,Qa=!0;function pg(t,i,a,l){var d=Rt,p=es.transition;es.transition=null;try{Rt=1,Hl(t,i,a,l)}finally{Rt=d,es.transition=p}}function mg(t,i,a,l){var d=Rt,p=es.transition;es.transition=null;try{Rt=4,Hl(t,i,a,l)}finally{Rt=d,es.transition=p}}function Hl(t,i,a,l){if(Qa){var d=Vl(t,i,a,l);if(d===null)sc(t,i,l,Ja,a),uf(t,l);else if(fg(d,t,i,a,l))l.stopPropagation();else if(uf(t,l),i&4&&-1<dg.indexOf(t)){for(;d!==null;){var p=ha(d);if(p!==null&&af(p),p=Vl(t,i,a,l),p===null&&sc(t,i,l,Ja,a),p===d)break;d=p}d!==null&&l.stopPropagation()}else sc(t,i,l,null,a)}}var Ja=null;function Vl(t,i,a,l){if(Ja=null,t=q(l),t=Tr(t),t!==null)if(i=fi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=$a(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Ja=t,null}function hf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(We()){case Ve:return 1;case tt:return 4;case it:case je:return 16;case gt:return 536870912;default:return 16}default:return 16}}var Zi=null,Gl=null,eo=null;function pf(){if(eo)return eo;var t,i=Gl,a=i.length,l,d="value"in Zi?Zi.value:Zi.textContent,p=d.length;for(t=0;t<a&&i[t]===d[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===d[p-l];l++);return eo=d.slice(t,1<l?1-l:void 0)}function to(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function mf(){return!1}function In(t){function i(a,l,d,p,E){this._reactName=a,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var F in t)t.hasOwnProperty(F)&&(a=t[F],this[F]=a?a(p):p[F]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?no:mf,this.isPropagationStopped=mf,this}return J(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=In(ts),na=J({},ts,{view:0,detail:0}),gg=In(na),jl,Xl,ia,io=J({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ia&&(ia&&t.type==="mousemove"?(jl=t.screenX-ia.screenX,Xl=t.screenY-ia.screenY):Xl=jl=0,ia=t),jl)},movementY:function(t){return"movementY"in t?t.movementY:Xl}}),gf=In(io),vg=J({},io,{dataTransfer:0}),_g=In(vg),xg=J({},na,{relatedTarget:0}),$l=In(xg),yg=J({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Sg=In(yg),Mg=J({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Eg=In(Mg),wg=J({},ts,{data:0}),vf=In(wg),Tg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=bg[t])?!!i[t]:!1}function ql(){return Cg}var Rg=J({},na,{key:function(t){if(t.key){var i=Tg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=to(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ag[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ql,charCode:function(t){return t.type==="keypress"?to(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?to(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pg=In(Rg),Ng=J({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=In(Ng),Lg=J({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ql}),Dg=In(Lg),Ig=J({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ug=In(Ig),Fg=J({},io,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Og=In(Fg),kg=[9,13,27,32],Yl=f&&"CompositionEvent"in window,ra=null;f&&"documentMode"in document&&(ra=document.documentMode);var zg=f&&"TextEvent"in window&&!ra,xf=f&&(!Yl||ra&&8<ra&&11>=ra),yf=" ",Sf=!1;function Mf(t,i){switch(t){case"keyup":return kg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function Bg(t,i){switch(t){case"compositionend":return Ef(i);case"keypress":return i.which!==32?null:(Sf=!0,yf);case"textInput":return t=i.data,t===yf&&Sf?null:t;default:return null}}function Hg(t,i){if(ns)return t==="compositionend"||!Yl&&Mf(t,i)?(t=pf(),eo=Gl=Zi=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xf&&i.locale!=="ko"?null:i.data;default:return null}}var Vg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Vg[t.type]:i==="textarea"}function Tf(t,i,a,l){Ne(l),i=lo(i,"onChange"),0<i.length&&(a=new Wl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var sa=null,aa=null;function Gg(t){Gf(t,0)}function ro(t){var i=os(t);if(ft(i))return t}function Wg(t,i){if(t==="change")return i}var Af=!1;if(f){var Kl;if(f){var Zl="oninput"in document;if(!Zl){var bf=document.createElement("div");bf.setAttribute("oninput","return;"),Zl=typeof bf.oninput=="function"}Kl=Zl}else Kl=!1;Af=Kl&&(!document.documentMode||9<document.documentMode)}function Cf(){sa&&(sa.detachEvent("onpropertychange",Rf),aa=sa=null)}function Rf(t){if(t.propertyName==="value"&&ro(aa)){var i=[];Tf(i,aa,t,q(t)),Mn(Gg,i)}}function jg(t,i,a){t==="focusin"?(Cf(),sa=i,aa=a,sa.attachEvent("onpropertychange",Rf)):t==="focusout"&&Cf()}function Xg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ro(aa)}function $g(t,i){if(t==="click")return ro(i)}function qg(t,i){if(t==="input"||t==="change")return ro(i)}function Yg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:Yg;function oa(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var d=a[l];if(!h.call(i,d)||!ei(t[d],i[d]))return!1}return!0}function Pf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nf(t,i){var a=Pf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pf(a)}}function Lf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Lf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Df(){for(var t=window,i=Pt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Pt(t.document)}return i}function Ql(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Kg(t){var i=Df(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Lf(a.ownerDocument.documentElement,a)){if(l!==null&&Ql(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,p=Math.min(l.start,d);l=l.end===void 0?p:Math.min(l.end,d),!t.extend&&p>l&&(d=l,l=p,p=d),d=Nf(a,p);var E=Nf(a,l);d&&E&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zg=f&&"documentMode"in document&&11>=document.documentMode,is=null,Jl=null,la=null,ec=!1;function If(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ec||is==null||is!==Pt(l)||(l=is,"selectionStart"in l&&Ql(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),la&&oa(la,l)||(la=l,l=lo(Jl,"onSelect"),0<l.length&&(i=new Wl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=is)))}function so(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var rs={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},tc={},Uf={};f&&(Uf=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function ao(t){if(tc[t])return tc[t];if(!rs[t])return t;var i=rs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Uf)return tc[t]=i[a];return t}var Ff=ao("animationend"),Of=ao("animationiteration"),kf=ao("animationstart"),zf=ao("transitionend"),Bf=new Map,Hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){Bf.set(t,i),c(i,[t])}for(var nc=0;nc<Hf.length;nc++){var ic=Hf[nc],Qg=ic.toLowerCase(),Jg=ic[0].toUpperCase()+ic.slice(1);Qi(Qg,"on"+Jg)}Qi(Ff,"onAnimationEnd"),Qi(Of,"onAnimationIteration"),Qi(kf,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(zf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ev=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Vf(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Xa(l,i,void 0,t),t.currentTarget=null}function Gf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],d=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var E=l.length-1;0<=E;E--){var F=l[E],H=F.instance,ce=F.currentTarget;if(F=F.listener,H!==p&&d.isPropagationStopped())break e;Vf(d,F,ce),p=H}else for(E=0;E<l.length;E++){if(F=l[E],H=F.instance,ce=F.currentTarget,F=F.listener,H!==p&&d.isPropagationStopped())break e;Vf(d,F,ce),p=H}}}if(wr)throw t=Xi,wr=!1,Xi=null,t}function Ut(t,i){var a=i[dc];a===void 0&&(a=i[dc]=new Set);var l=t+"__bubble";a.has(l)||(Wf(i,t,2,!1),a.add(l))}function rc(t,i,a){var l=0;i&&(l|=4),Wf(a,t,l,i)}var oo="_reactListening"+Math.random().toString(36).slice(2);function ua(t){if(!t[oo]){t[oo]=!0,r.forEach(function(a){a!=="selectionchange"&&(ev.has(a)||rc(a,!1,t),rc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[oo]||(i[oo]=!0,rc("selectionchange",!1,i))}}function Wf(t,i,a,l){switch(hf(i)){case 1:var d=pg;break;case 4:d=mg;break;default:d=Hl}a=d.bind(null,i,a,t),d=void 0,!Qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function sc(t,i,a,l,d){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var F=l.stateNode.containerInfo;if(F===d||F.nodeType===8&&F.parentNode===d)break;if(E===4)for(E=l.return;E!==null;){var H=E.tag;if((H===3||H===4)&&(H=E.stateNode.containerInfo,H===d||H.nodeType===8&&H.parentNode===d))return;E=E.return}for(;F!==null;){if(E=Tr(F),E===null)return;if(H=E.tag,H===5||H===6){l=p=E;continue e}F=F.parentNode}}l=l.return}Mn(function(){var ce=p,ye=q(a),Se=[];e:{var _e=Bf.get(t);if(_e!==void 0){var De=Wl,Be=t;switch(t){case"keypress":if(to(a)===0)break e;case"keydown":case"keyup":De=Pg;break;case"focusin":Be="focus",De=$l;break;case"focusout":Be="blur",De=$l;break;case"beforeblur":case"afterblur":De=$l;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=_g;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=Dg;break;case Ff:case Of:case kf:De=Sg;break;case zf:De=Ug;break;case"scroll":De=gg;break;case"wheel":De=Og;break;case"copy":case"cut":case"paste":De=Eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=_f}var Ge=(i&4)!==0,Gt=!Ge&&t==="scroll",te=Ge?_e!==null?_e+"Capture":null:_e;Ge=[];for(var W=ce,ae;W!==null;){ae=W;var we=ae.stateNode;if(ae.tag===5&&we!==null&&(ae=we,te!==null&&(we=gn(W,te),we!=null&&Ge.push(da(W,we,ae)))),Gt)break;W=W.return}0<Ge.length&&(_e=new De(_e,Be,null,a,ye),Se.push({event:_e,listeners:Ge}))}}if((i&7)===0){e:{if(_e=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",_e&&a!==bt&&(Be=a.relatedTarget||a.fromElement)&&(Tr(Be)||Be[Ti]))break e;if((De||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,De?(Be=a.relatedTarget||a.toElement,De=ce,Be=Be?Tr(Be):null,Be!==null&&(Gt=fi(Be),Be!==Gt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(De=null,Be=ce),De!==Be)){if(Ge=gf,we="onMouseLeave",te="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(Ge=_f,we="onPointerLeave",te="onPointerEnter",W="pointer"),Gt=De==null?_e:os(De),ae=Be==null?_e:os(Be),_e=new Ge(we,W+"leave",De,a,ye),_e.target=Gt,_e.relatedTarget=ae,we=null,Tr(ye)===ce&&(Ge=new Ge(te,W+"enter",Be,a,ye),Ge.target=ae,Ge.relatedTarget=Gt,we=Ge),Gt=we,De&&Be)t:{for(Ge=De,te=Be,W=0,ae=Ge;ae;ae=ss(ae))W++;for(ae=0,we=te;we;we=ss(we))ae++;for(;0<W-ae;)Ge=ss(Ge),W--;for(;0<ae-W;)te=ss(te),ae--;for(;W--;){if(Ge===te||te!==null&&Ge===te.alternate)break t;Ge=ss(Ge),te=ss(te)}Ge=null}else Ge=null;De!==null&&jf(Se,_e,De,Ge,!1),Be!==null&&Gt!==null&&jf(Se,Gt,Be,Ge,!0)}}e:{if(_e=ce?os(ce):window,De=_e.nodeName&&_e.nodeName.toLowerCase(),De==="select"||De==="input"&&_e.type==="file")var Xe=Wg;else if(wf(_e))if(Af)Xe=qg;else{Xe=Xg;var Ze=jg}else(De=_e.nodeName)&&De.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Xe=$g);if(Xe&&(Xe=Xe(t,ce))){Tf(Se,Xe,a,ye);break e}Ze&&Ze(t,_e,ce),t==="focusout"&&(Ze=_e._wrapperState)&&Ze.controlled&&_e.type==="number"&&Tt(_e,"number",_e.value)}switch(Ze=ce?os(ce):window,t){case"focusin":(wf(Ze)||Ze.contentEditable==="true")&&(is=Ze,Jl=ce,la=null);break;case"focusout":la=Jl=is=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,If(Se,a,ye);break;case"selectionchange":if(Zg)break;case"keydown":case"keyup":If(Se,a,ye)}var Qe;if(Yl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ns?Mf(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(xf&&a.locale!=="ko"&&(ns||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ns&&(Qe=pf()):(Zi=ye,Gl="value"in Zi?Zi.value:Zi.textContent,ns=!0)),Ze=lo(ce,nt),0<Ze.length&&(nt=new vf(nt,t,null,a,ye),Se.push({event:nt,listeners:Ze}),Qe?nt.data=Qe:(Qe=Ef(a),Qe!==null&&(nt.data=Qe)))),(Qe=zg?Bg(t,a):Hg(t,a))&&(ce=lo(ce,"onBeforeInput"),0<ce.length&&(ye=new vf("onBeforeInput","beforeinput",null,a,ye),Se.push({event:ye,listeners:ce}),ye.data=Qe))}Gf(Se,i)})}function da(t,i,a){return{instance:t,listener:i,currentTarget:a}}function lo(t,i){for(var a=i+"Capture",l=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=gn(t,a),p!=null&&l.unshift(da(t,p,d)),p=gn(t,i),p!=null&&l.push(da(t,p,d))),t=t.return}return l}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jf(t,i,a,l,d){for(var p=i._reactName,E=[];a!==null&&a!==l;){var F=a,H=F.alternate,ce=F.stateNode;if(H!==null&&H===l)break;F.tag===5&&ce!==null&&(F=ce,d?(H=gn(a,p),H!=null&&E.unshift(da(a,H,F))):d||(H=gn(a,p),H!=null&&E.push(da(a,H,F)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var tv=/\r\n?/g,nv=/\u0000|\uFFFD/g;function Xf(t){return(typeof t=="string"?t:""+t).replace(tv,`
`).replace(nv,"")}function co(t,i,a){if(i=Xf(i),Xf(t)!==i&&a)throw Error(n(425))}function uo(){}var ac=null,oc=null;function lc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,iv=typeof clearTimeout=="function"?clearTimeout:void 0,$f=typeof Promise=="function"?Promise:void 0,rv=typeof queueMicrotask=="function"?queueMicrotask:typeof $f<"u"?function(t){return $f.resolve(null).then(t).catch(sv)}:cc;function sv(t){setTimeout(function(){throw t})}function uc(t,i){var a=i,l=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(l===0){t.removeChild(d),ta(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=d}while(a);ta(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function qf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var as=Math.random().toString(36).slice(2),pi="__reactFiber$"+as,fa="__reactProps$"+as,Ti="__reactContainer$"+as,dc="__reactEvents$"+as,av="__reactListeners$"+as,ov="__reactHandles$"+as;function Tr(t){var i=t[pi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ti]||a[pi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=qf(t);t!==null;){if(a=t[pi])return a;t=qf(t)}return i}t=a,a=t.parentNode}return null}function ha(t){return t=t[pi]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function fo(t){return t[fa]||null}var fc=[],ls=-1;function er(t){return{current:t}}function Ft(t){0>ls||(t.current=fc[ls],fc[ls]=null,ls--)}function Dt(t,i){ls++,fc[ls]=t.current,t.current=i}var tr={},un=er(tr),wn=er(!1),Ar=tr;function cs(t,i){var a=t.type.contextTypes;if(!a)return tr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Tn(t){return t=t.childContextTypes,t!=null}function ho(){Ft(wn),Ft(un)}function Yf(t,i,a){if(un.current!==tr)throw Error(n(168));Dt(un,i),Dt(wn,a)}function Kf(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,ve(t)||"Unknown",d));return J({},a,l)}function po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Ar=un.current,Dt(un,t),Dt(wn,wn.current),!0}function Zf(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=Kf(t,i,Ar),l.__reactInternalMemoizedMergedChildContext=t,Ft(wn),Ft(un),Dt(un,t)):Ft(wn),Dt(wn,a)}var Ai=null,mo=!1,hc=!1;function Qf(t){Ai===null?Ai=[t]:Ai.push(t)}function lv(t){mo=!0,Qf(t)}function nr(){if(!hc&&Ai!==null){hc=!0;var t=0,i=Rt;try{var a=Ai;for(Rt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ai=null,mo=!1}catch(d){throw Ai!==null&&(Ai=Ai.slice(t+1)),ue(Ve,nr),d}finally{Rt=i,hc=!1}}return null}var us=[],ds=0,go=null,vo=0,Gn=[],Wn=0,br=null,bi=1,Ci="";function Cr(t,i){us[ds++]=vo,us[ds++]=go,go=t,vo=i}function Jf(t,i,a){Gn[Wn++]=bi,Gn[Wn++]=Ci,Gn[Wn++]=br,br=t;var l=bi;t=Ci;var d=32-at(l)-1;l&=~(1<<d),a+=1;var p=32-at(i)+d;if(30<p){var E=d-d%5;p=(l&(1<<E)-1).toString(32),l>>=E,d-=E,bi=1<<32-at(i)+d|a<<d|l,Ci=p+t}else bi=1<<p|a<<d|l,Ci=t}function pc(t){t.return!==null&&(Cr(t,1),Jf(t,1,0))}function mc(t){for(;t===go;)go=us[--ds],us[ds]=null,vo=us[--ds],us[ds]=null;for(;t===br;)br=Gn[--Wn],Gn[Wn]=null,Ci=Gn[--Wn],Gn[Wn]=null,bi=Gn[--Wn],Gn[Wn]=null}var Un=null,Fn=null,Ot=!1,ti=null;function eh(t,i){var a=qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function th(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,Fn=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=br!==null?{id:bi,overflow:Ci}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=qn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Un=t,Fn=null,!0):!1;default:return!1}}function gc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vc(t){if(Ot){var i=Fn;if(i){var a=i;if(!th(t,i)){if(gc(t))throw Error(n(418));i=Ji(a.nextSibling);var l=Un;i&&th(t,i)?eh(l,a):(t.flags=t.flags&-4097|2,Ot=!1,Un=t)}}else{if(gc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,Un=t}}}function nh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function _o(t){if(t!==Un)return!1;if(!Ot)return nh(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!lc(t.type,t.memoizedProps)),i&&(i=Fn)){if(gc(t))throw ih(),Error(n(418));for(;i;)eh(t,i),i=Ji(i.nextSibling)}if(nh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Fn=Ji(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=Un?Ji(t.stateNode.nextSibling):null;return!0}function ih(){for(var t=Fn;t;)t=Ji(t.nextSibling)}function fs(){Fn=Un=null,Ot=!1}function _c(t){ti===null?ti=[t]:ti.push(t)}var cv=b.ReactCurrentBatchConfig;function pa(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var d=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(E){var F=d.refs;E===null?delete F[p]:F[p]=E},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function xo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function rh(t){var i=t._init;return i(t._payload)}function sh(t){function i(te,W){if(t){var ae=te.deletions;ae===null?(te.deletions=[W],te.flags|=16):ae.push(W)}}function a(te,W){if(!t)return null;for(;W!==null;)i(te,W),W=W.sibling;return null}function l(te,W){for(te=new Map;W!==null;)W.key!==null?te.set(W.key,W):te.set(W.index,W),W=W.sibling;return te}function d(te,W){return te=ur(te,W),te.index=0,te.sibling=null,te}function p(te,W,ae){return te.index=ae,t?(ae=te.alternate,ae!==null?(ae=ae.index,ae<W?(te.flags|=2,W):ae):(te.flags|=2,W)):(te.flags|=1048576,W)}function E(te){return t&&te.alternate===null&&(te.flags|=2),te}function F(te,W,ae,we){return W===null||W.tag!==6?(W=cu(ae,te.mode,we),W.return=te,W):(W=d(W,ae),W.return=te,W)}function H(te,W,ae,we){var Xe=ae.type;return Xe===U?ye(te,W,ae.props.children,we,ae.key):W!==null&&(W.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ee&&rh(Xe)===W.type)?(we=d(W,ae.props),we.ref=pa(te,W,ae),we.return=te,we):(we=Go(ae.type,ae.key,ae.props,null,te.mode,we),we.ref=pa(te,W,ae),we.return=te,we)}function ce(te,W,ae,we){return W===null||W.tag!==4||W.stateNode.containerInfo!==ae.containerInfo||W.stateNode.implementation!==ae.implementation?(W=uu(ae,te.mode,we),W.return=te,W):(W=d(W,ae.children||[]),W.return=te,W)}function ye(te,W,ae,we,Xe){return W===null||W.tag!==7?(W=Fr(ae,te.mode,we,Xe),W.return=te,W):(W=d(W,ae),W.return=te,W)}function Se(te,W,ae){if(typeof W=="string"&&W!==""||typeof W=="number")return W=cu(""+W,te.mode,ae),W.return=te,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case G:return ae=Go(W.type,W.key,W.props,null,te.mode,ae),ae.ref=pa(te,null,W),ae.return=te,ae;case O:return W=uu(W,te.mode,ae),W.return=te,W;case ee:var we=W._init;return Se(te,we(W._payload),ae)}if($e(W)||j(W))return W=Fr(W,te.mode,ae,null),W.return=te,W;xo(te,W)}return null}function _e(te,W,ae,we){var Xe=W!==null?W.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return Xe!==null?null:F(te,W,""+ae,we);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case G:return ae.key===Xe?H(te,W,ae,we):null;case O:return ae.key===Xe?ce(te,W,ae,we):null;case ee:return Xe=ae._init,_e(te,W,Xe(ae._payload),we)}if($e(ae)||j(ae))return Xe!==null?null:ye(te,W,ae,we,null);xo(te,ae)}return null}function De(te,W,ae,we,Xe){if(typeof we=="string"&&we!==""||typeof we=="number")return te=te.get(ae)||null,F(W,te,""+we,Xe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case G:return te=te.get(we.key===null?ae:we.key)||null,H(W,te,we,Xe);case O:return te=te.get(we.key===null?ae:we.key)||null,ce(W,te,we,Xe);case ee:var Ze=we._init;return De(te,W,ae,Ze(we._payload),Xe)}if($e(we)||j(we))return te=te.get(ae)||null,ye(W,te,we,Xe,null);xo(W,we)}return null}function Be(te,W,ae,we){for(var Xe=null,Ze=null,Qe=W,nt=W=0,tn=null;Qe!==null&&nt<ae.length;nt++){Qe.index>nt?(tn=Qe,Qe=null):tn=Qe.sibling;var wt=_e(te,Qe,ae[nt],we);if(wt===null){Qe===null&&(Qe=tn);break}t&&Qe&&wt.alternate===null&&i(te,Qe),W=p(wt,W,nt),Ze===null?Xe=wt:Ze.sibling=wt,Ze=wt,Qe=tn}if(nt===ae.length)return a(te,Qe),Ot&&Cr(te,nt),Xe;if(Qe===null){for(;nt<ae.length;nt++)Qe=Se(te,ae[nt],we),Qe!==null&&(W=p(Qe,W,nt),Ze===null?Xe=Qe:Ze.sibling=Qe,Ze=Qe);return Ot&&Cr(te,nt),Xe}for(Qe=l(te,Qe);nt<ae.length;nt++)tn=De(Qe,te,nt,ae[nt],we),tn!==null&&(t&&tn.alternate!==null&&Qe.delete(tn.key===null?nt:tn.key),W=p(tn,W,nt),Ze===null?Xe=tn:Ze.sibling=tn,Ze=tn);return t&&Qe.forEach(function(dr){return i(te,dr)}),Ot&&Cr(te,nt),Xe}function Ge(te,W,ae,we){var Xe=j(ae);if(typeof Xe!="function")throw Error(n(150));if(ae=Xe.call(ae),ae==null)throw Error(n(151));for(var Ze=Xe=null,Qe=W,nt=W=0,tn=null,wt=ae.next();Qe!==null&&!wt.done;nt++,wt=ae.next()){Qe.index>nt?(tn=Qe,Qe=null):tn=Qe.sibling;var dr=_e(te,Qe,wt.value,we);if(dr===null){Qe===null&&(Qe=tn);break}t&&Qe&&dr.alternate===null&&i(te,Qe),W=p(dr,W,nt),Ze===null?Xe=dr:Ze.sibling=dr,Ze=dr,Qe=tn}if(wt.done)return a(te,Qe),Ot&&Cr(te,nt),Xe;if(Qe===null){for(;!wt.done;nt++,wt=ae.next())wt=Se(te,wt.value,we),wt!==null&&(W=p(wt,W,nt),Ze===null?Xe=wt:Ze.sibling=wt,Ze=wt);return Ot&&Cr(te,nt),Xe}for(Qe=l(te,Qe);!wt.done;nt++,wt=ae.next())wt=De(Qe,te,nt,wt.value,we),wt!==null&&(t&&wt.alternate!==null&&Qe.delete(wt.key===null?nt:wt.key),W=p(wt,W,nt),Ze===null?Xe=wt:Ze.sibling=wt,Ze=wt);return t&&Qe.forEach(function(Vv){return i(te,Vv)}),Ot&&Cr(te,nt),Xe}function Gt(te,W,ae,we){if(typeof ae=="object"&&ae!==null&&ae.type===U&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case G:e:{for(var Xe=ae.key,Ze=W;Ze!==null;){if(Ze.key===Xe){if(Xe=ae.type,Xe===U){if(Ze.tag===7){a(te,Ze.sibling),W=d(Ze,ae.props.children),W.return=te,te=W;break e}}else if(Ze.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ee&&rh(Xe)===Ze.type){a(te,Ze.sibling),W=d(Ze,ae.props),W.ref=pa(te,Ze,ae),W.return=te,te=W;break e}a(te,Ze);break}else i(te,Ze);Ze=Ze.sibling}ae.type===U?(W=Fr(ae.props.children,te.mode,we,ae.key),W.return=te,te=W):(we=Go(ae.type,ae.key,ae.props,null,te.mode,we),we.ref=pa(te,W,ae),we.return=te,te=we)}return E(te);case O:e:{for(Ze=ae.key;W!==null;){if(W.key===Ze)if(W.tag===4&&W.stateNode.containerInfo===ae.containerInfo&&W.stateNode.implementation===ae.implementation){a(te,W.sibling),W=d(W,ae.children||[]),W.return=te,te=W;break e}else{a(te,W);break}else i(te,W);W=W.sibling}W=uu(ae,te.mode,we),W.return=te,te=W}return E(te);case ee:return Ze=ae._init,Gt(te,W,Ze(ae._payload),we)}if($e(ae))return Be(te,W,ae,we);if(j(ae))return Ge(te,W,ae,we);xo(te,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,W!==null&&W.tag===6?(a(te,W.sibling),W=d(W,ae),W.return=te,te=W):(a(te,W),W=cu(ae,te.mode,we),W.return=te,te=W),E(te)):a(te,W)}return Gt}var hs=sh(!0),ah=sh(!1),yo=er(null),So=null,ps=null,xc=null;function yc(){xc=ps=So=null}function Sc(t){var i=yo.current;Ft(yo),t._currentValue=i}function Mc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function ms(t,i){So=t,xc=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(An=!0),t.firstContext=null)}function jn(t){var i=t._currentValue;if(xc!==t)if(t={context:t,memoizedValue:i,next:null},ps===null){if(So===null)throw Error(n(308));ps=t,So.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return i}var Rr=null;function Ec(t){Rr===null?Rr=[t]:Rr.push(t)}function oh(t,i,a,l){var d=i.interleaved;return d===null?(a.next=a,Ec(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ri(t,l)}function Ri(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var ir=!1;function wc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Ri(t,a)}return d=l.interleaved,d===null?(i.next=i,Ec(l)):(i.next=d.next,d.next=i),l.interleaved=i,Ri(t,a)}function Mo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,kl(t,a)}}function ch(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=E:p=p.next=E,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Eo(t,i,a,l){var d=t.updateQueue;ir=!1;var p=d.firstBaseUpdate,E=d.lastBaseUpdate,F=d.shared.pending;if(F!==null){d.shared.pending=null;var H=F,ce=H.next;H.next=null,E===null?p=ce:E.next=ce,E=H;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,F=ye.lastBaseUpdate,F!==E&&(F===null?ye.firstBaseUpdate=ce:F.next=ce,ye.lastBaseUpdate=H))}if(p!==null){var Se=d.baseState;E=0,ye=ce=H=null,F=p;do{var _e=F.lane,De=F.eventTime;if((l&_e)===_e){ye!==null&&(ye=ye.next={eventTime:De,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Be=t,Ge=F;switch(_e=i,De=a,Ge.tag){case 1:if(Be=Ge.payload,typeof Be=="function"){Se=Be.call(De,Se,_e);break e}Se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ge.payload,_e=typeof Be=="function"?Be.call(De,Se,_e):Be,_e==null)break e;Se=J({},Se,_e);break e;case 2:ir=!0}}F.callback!==null&&F.lane!==0&&(t.flags|=64,_e=d.effects,_e===null?d.effects=[F]:_e.push(F))}else De={eventTime:De,lane:_e,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ye===null?(ce=ye=De,H=Se):ye=ye.next=De,E|=_e;if(F=F.next,F===null){if(F=d.shared.pending,F===null)break;_e=F,F=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(ye===null&&(H=Se),d.baseState=H,d.firstBaseUpdate=ce,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Lr|=E,t.lanes=E,t.memoizedState=Se}}function uh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=a,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var ma={},mi=er(ma),ga=er(ma),va=er(ma);function Pr(t){if(t===ma)throw Error(n(174));return t}function Tc(t,i){switch(Dt(va,i),Dt(ga,t),Dt(mi,ma),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ze(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ze(i,t)}Ft(mi),Dt(mi,i)}function gs(){Ft(mi),Ft(ga),Ft(va)}function dh(t){Pr(va.current);var i=Pr(mi.current),a=ze(i,t.type);i!==a&&(Dt(ga,t),Dt(mi,a))}function Ac(t){ga.current===t&&(Ft(mi),Ft(ga))}var kt=er(0);function wo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var bc=[];function Cc(){for(var t=0;t<bc.length;t++)bc[t]._workInProgressVersionPrimary=null;bc.length=0}var To=b.ReactCurrentDispatcher,Rc=b.ReactCurrentBatchConfig,Nr=0,zt=null,Yt=null,Jt=null,Ao=!1,_a=!1,xa=0,uv=0;function dn(){throw Error(n(321))}function Pc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ei(t[a],i[a]))return!1;return!0}function Nc(t,i,a,l,d,p){if(Nr=p,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,To.current=t===null||t.memoizedState===null?pv:mv,t=a(l,d),_a){p=0;do{if(_a=!1,xa=0,25<=p)throw Error(n(301));p+=1,Jt=Yt=null,i.updateQueue=null,To.current=gv,t=a(l,d)}while(_a)}if(To.current=Ro,i=Yt!==null&&Yt.next!==null,Nr=0,Jt=Yt=zt=null,Ao=!1,i)throw Error(n(300));return t}function Lc(){var t=xa!==0;return xa=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?zt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Xn(){if(Yt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=Jt===null?zt.memoizedState:Jt.next;if(i!==null)Jt=i,Yt=t;else{if(t===null)throw Error(n(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Jt===null?zt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function ya(t,i){return typeof i=="function"?i(t):i}function Dc(t){var i=Xn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=Yt,d=l.baseQueue,p=a.pending;if(p!==null){if(d!==null){var E=d.next;d.next=p.next,p.next=E}l.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,l=l.baseState;var F=E=null,H=null,ce=p;do{var ye=ce.lane;if((Nr&ye)===ye)H!==null&&(H=H.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),l=ce.hasEagerState?ce.eagerState:t(l,ce.action);else{var Se={lane:ye,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};H===null?(F=H=Se,E=l):H=H.next=Se,zt.lanes|=ye,Lr|=ye}ce=ce.next}while(ce!==null&&ce!==p);H===null?E=l:H.next=F,ei(l,i.memoizedState)||(An=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=H,a.lastRenderedState=l}if(t=a.interleaved,t!==null){d=t;do p=d.lane,zt.lanes|=p,Lr|=p,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ic(t){var i=Xn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do p=t(p,E.action),E=E.next;while(E!==d);ei(p,i.memoizedState)||(An=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,l]}function fh(){}function hh(t,i){var a=zt,l=Xn(),d=i(),p=!ei(l.memoizedState,d);if(p&&(l.memoizedState=d,An=!0),l=l.queue,Uc(gh.bind(null,a,l,t),[t]),l.getSnapshot!==i||p||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,Sa(9,mh.bind(null,a,l,d,i),void 0,null),en===null)throw Error(n(349));(Nr&30)!==0||ph(a,i,d)}return d}function ph(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function mh(t,i,a,l){i.value=a,i.getSnapshot=l,vh(i)&&_h(t)}function gh(t,i,a){return a(function(){vh(i)&&_h(t)})}function vh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ei(t,a)}catch{return!0}}function _h(t){var i=Ri(t,1);i!==null&&si(i,t,1,-1)}function xh(t){var i=gi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},i.queue=t,t=t.dispatch=hv.bind(null,zt,t),[i.memoizedState,t]}function Sa(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function yh(){return Xn().memoizedState}function bo(t,i,a,l){var d=gi();zt.flags|=t,d.memoizedState=Sa(1|i,a,void 0,l===void 0?null:l)}function Co(t,i,a,l){var d=Xn();l=l===void 0?null:l;var p=void 0;if(Yt!==null){var E=Yt.memoizedState;if(p=E.destroy,l!==null&&Pc(l,E.deps)){d.memoizedState=Sa(i,a,p,l);return}}zt.flags|=t,d.memoizedState=Sa(1|i,a,p,l)}function Sh(t,i){return bo(8390656,8,t,i)}function Uc(t,i){return Co(2048,8,t,i)}function Mh(t,i){return Co(4,2,t,i)}function Eh(t,i){return Co(4,4,t,i)}function wh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Th(t,i,a){return a=a!=null?a.concat([t]):null,Co(4,4,wh.bind(null,i,t),a)}function Fc(){}function Ah(t,i){var a=Xn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Pc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function bh(t,i){var a=Xn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Pc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Ch(t,i,a){return(Nr&21)===0?(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=a):(ei(a,i)||(a=vn(),zt.lanes|=a,Lr|=a,t.baseState=!0),i)}function dv(t,i){var a=Rt;Rt=a!==0&&4>a?a:4,t(!0);var l=Rc.transition;Rc.transition={};try{t(!1),i()}finally{Rt=a,Rc.transition=l}}function Rh(){return Xn().memoizedState}function fv(t,i,a){var l=lr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Ph(t))Nh(i,a);else if(a=oh(t,i,a,l),a!==null){var d=xn();si(a,t,l,d),Lh(a,i,l)}}function hv(t,i,a){var l=lr(t),d={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ph(t))Nh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var E=i.lastRenderedState,F=p(E,a);if(d.hasEagerState=!0,d.eagerState=F,ei(F,E)){var H=i.interleaved;H===null?(d.next=d,Ec(i)):(d.next=H.next,H.next=d),i.interleaved=d;return}}catch{}finally{}a=oh(t,i,d,l),a!==null&&(d=xn(),si(a,t,l,d),Lh(a,i,l))}}function Ph(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function Nh(t,i){_a=Ao=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Lh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,kl(t,a)}}var Ro={readContext:jn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},pv={readContext:jn,useCallback:function(t,i){return gi().memoizedState=[t,i===void 0?null:i],t},useContext:jn,useEffect:Sh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,bo(4194308,4,wh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return bo(4194308,4,t,i)},useInsertionEffect:function(t,i){return bo(4,2,t,i)},useMemo:function(t,i){var a=gi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=gi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=fv.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=gi();return t={current:t},i.memoizedState=t},useState:xh,useDebugValue:Fc,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=xh(!1),i=t[0];return t=dv.bind(null,t[1]),gi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=zt,d=gi();if(Ot){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),en===null)throw Error(n(349));(Nr&30)!==0||ph(l,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Sh(gh.bind(null,l,p,t),[t]),l.flags|=2048,Sa(9,mh.bind(null,l,p,a,i),void 0,null),a},useId:function(){var t=gi(),i=en.identifierPrefix;if(Ot){var a=Ci,l=bi;a=(l&~(1<<32-at(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=xa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=uv++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},mv={readContext:jn,useCallback:Ah,useContext:jn,useEffect:Uc,useImperativeHandle:Th,useInsertionEffect:Mh,useLayoutEffect:Eh,useMemo:bh,useReducer:Dc,useRef:yh,useState:function(){return Dc(ya)},useDebugValue:Fc,useDeferredValue:function(t){var i=Xn();return Ch(i,Yt.memoizedState,t)},useTransition:function(){var t=Dc(ya)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:fh,useSyncExternalStore:hh,useId:Rh,unstable_isNewReconciler:!1},gv={readContext:jn,useCallback:Ah,useContext:jn,useEffect:Uc,useImperativeHandle:Th,useInsertionEffect:Mh,useLayoutEffect:Eh,useMemo:bh,useReducer:Ic,useRef:yh,useState:function(){return Ic(ya)},useDebugValue:Fc,useDeferredValue:function(t){var i=Xn();return Yt===null?i.memoizedState=t:Ch(i,Yt.memoizedState,t)},useTransition:function(){var t=Ic(ya)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:fh,useSyncExternalStore:hh,useId:Rh,unstable_isNewReconciler:!1};function ni(t,i){if(t&&t.defaultProps){i=J({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Oc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:J({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Po={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=xn(),d=lr(t),p=Pi(l,d);p.payload=i,a!=null&&(p.callback=a),i=rr(t,p,d),i!==null&&(si(i,t,d,l),Mo(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=xn(),d=lr(t),p=Pi(l,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=rr(t,p,d),i!==null&&(si(i,t,d,l),Mo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=xn(),l=lr(t),d=Pi(a,l);d.tag=2,i!=null&&(d.callback=i),i=rr(t,d,l),i!==null&&(si(i,t,l,a),Mo(i,t,l))}};function Dh(t,i,a,l,d,p,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,E):i.prototype&&i.prototype.isPureReactComponent?!oa(a,l)||!oa(d,p):!0}function Ih(t,i,a){var l=!1,d=tr,p=i.contextType;return typeof p=="object"&&p!==null?p=jn(p):(d=Tn(i)?Ar:un.current,l=i.contextTypes,p=(l=l!=null)?cs(t,d):tr),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Po,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function Uh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Po.enqueueReplaceState(i,i.state,null)}function kc(t,i,a,l){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},wc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=jn(p):(p=Tn(i)?Ar:un.current,d.context=cs(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Oc(t,i,p,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Po.enqueueReplaceState(d,d.state,null),Eo(t,a,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,i){try{var a="",l=i;do a+=he(l),l=l.return;while(l);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function zc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Bc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var vv=typeof WeakMap=="function"?WeakMap:Map;function Fh(t,i,a){a=Pi(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Oo||(Oo=!0,tu=l),Bc(t,i)},a}function Oh(t,i,a){a=Pi(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;a.payload=function(){return l(d)},a.callback=function(){Bc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Bc(t,i),typeof l!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function kh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new vv;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(a)||(d.add(a),t=Nv.bind(null,t,i,a),i.then(t,t))}function zh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Bh(t,i,a,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Pi(-1,1),i.tag=2,rr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var _v=b.ReactCurrentOwner,An=!1;function _n(t,i,a,l){i.child=t===null?ah(i,null,a,l):hs(i,t.child,a,l)}function Hh(t,i,a,l,d){a=a.render;var p=i.ref;return ms(i,d),l=Nc(t,i,a,l,p,d),a=Lc(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ni(t,i,d)):(Ot&&a&&pc(i),i.flags|=1,_n(t,i,l,d),i.child)}function Vh(t,i,a,l,d){if(t===null){var p=a.type;return typeof p=="function"&&!lu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Gh(t,i,p,l,d)):(t=Go(a.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var E=p.memoizedProps;if(a=a.compare,a=a!==null?a:oa,a(E,l)&&t.ref===i.ref)return Ni(t,i,d)}return i.flags|=1,t=ur(p,l),t.ref=i.ref,t.return=i,i.child=t}function Gh(t,i,a,l,d){if(t!==null){var p=t.memoizedProps;if(oa(p,l)&&t.ref===i.ref)if(An=!1,i.pendingProps=l=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(An=!0);else return i.lanes=t.lanes,Ni(t,i,d)}return Hc(t,i,a,l,d)}function Wh(t,i,a){var l=i.pendingProps,d=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(xs,On),On|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(xs,On),On|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:a,Dt(xs,On),On|=l}else p!==null?(l=p.baseLanes|a,i.memoizedState=null):l=a,Dt(xs,On),On|=l;return _n(t,i,d,a),i.child}function jh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Hc(t,i,a,l,d){var p=Tn(a)?Ar:un.current;return p=cs(i,p),ms(i,d),a=Nc(t,i,a,l,p,d),l=Lc(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ni(t,i,d)):(Ot&&l&&pc(i),i.flags|=1,_n(t,i,a,d),i.child)}function Xh(t,i,a,l,d){if(Tn(a)){var p=!0;po(i)}else p=!1;if(ms(i,d),i.stateNode===null)Lo(t,i),Ih(i,a,l),kc(i,a,l,d),l=!0;else if(t===null){var E=i.stateNode,F=i.memoizedProps;E.props=F;var H=E.context,ce=a.contextType;typeof ce=="object"&&ce!==null?ce=jn(ce):(ce=Tn(a)?Ar:un.current,ce=cs(i,ce));var ye=a.getDerivedStateFromProps,Se=typeof ye=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(F!==l||H!==ce)&&Uh(i,E,l,ce),ir=!1;var _e=i.memoizedState;E.state=_e,Eo(i,l,E,d),H=i.memoizedState,F!==l||_e!==H||wn.current||ir?(typeof ye=="function"&&(Oc(i,a,ye,l),H=i.memoizedState),(F=ir||Dh(i,a,F,l,_e,H,ce))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),E.props=l,E.state=H,E.context=ce,l=F):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,lh(t,i),F=i.memoizedProps,ce=i.type===i.elementType?F:ni(i.type,F),E.props=ce,Se=i.pendingProps,_e=E.context,H=a.contextType,typeof H=="object"&&H!==null?H=jn(H):(H=Tn(a)?Ar:un.current,H=cs(i,H));var De=a.getDerivedStateFromProps;(ye=typeof De=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(F!==Se||_e!==H)&&Uh(i,E,l,H),ir=!1,_e=i.memoizedState,E.state=_e,Eo(i,l,E,d);var Be=i.memoizedState;F!==Se||_e!==Be||wn.current||ir?(typeof De=="function"&&(Oc(i,a,De,l),Be=i.memoizedState),(ce=ir||Dh(i,a,ce,l,_e,Be,H)||!1)?(ye||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,Be,H),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,Be,H)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||F===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),E.props=l,E.state=Be,E.context=H,l=ce):(typeof E.componentDidUpdate!="function"||F===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),l=!1)}return Vc(t,i,a,l,p,d)}function Vc(t,i,a,l,d,p){jh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return d&&Zf(i,a,!1),Ni(t,i,p);l=i.stateNode,_v.current=i;var F=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=hs(i,t.child,null,p),i.child=hs(i,null,F,p)):_n(t,i,F,p),i.memoizedState=l.state,d&&Zf(i,a,!0),i.child}function $h(t){var i=t.stateNode;i.pendingContext?Yf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Yf(t,i.context,!1),Tc(t,i.containerInfo)}function qh(t,i,a,l,d){return fs(),_c(d),i.flags|=256,_n(t,i,a,l),i.child}var Gc={dehydrated:null,treeContext:null,retryLane:0};function Wc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yh(t,i,a){var l=i.pendingProps,d=kt.current,p=!1,E=(i.flags&128)!==0,F;if((F=E)||(F=t!==null&&t.memoizedState===null?!1:(d&2)!==0),F?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Dt(kt,d&1),t===null)return vc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,p?(l=i.mode,p=i.child,E={mode:"hidden",children:E},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=E):p=Wo(E,l,0,null),t=Fr(t,l,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Wc(a),i.memoizedState=Gc,t):jc(i,E));if(d=t.memoizedState,d!==null&&(F=d.dehydrated,F!==null))return xv(t,i,E,l,F,d,a);if(p){p=l.fallback,E=i.mode,d=t.child,F=d.sibling;var H={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=H,i.deletions=null):(l=ur(d,H),l.subtreeFlags=d.subtreeFlags&14680064),F!==null?p=ur(F,p):(p=Fr(p,E,a,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,E=t.child.memoizedState,E=E===null?Wc(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},p.memoizedState=E,p.childLanes=t.childLanes&~a,i.memoizedState=Gc,l}return p=t.child,t=p.sibling,l=ur(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function jc(t,i){return i=Wo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function No(t,i,a,l){return l!==null&&_c(l),hs(i,t.child,null,a),t=jc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function xv(t,i,a,l,d,p,E){if(a)return i.flags&256?(i.flags&=-257,l=zc(Error(n(422))),No(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,d=i.mode,l=Wo({mode:"visible",children:l.children},d,0,null),p=Fr(p,d,E,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&hs(i,t.child,null,E),i.child.memoizedState=Wc(E),i.memoizedState=Gc,p);if((i.mode&1)===0)return No(t,i,E,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var F=l.dgst;return l=F,p=Error(n(419)),l=zc(p,l,void 0),No(t,i,E,l)}if(F=(E&t.childLanes)!==0,An||F){if(l=en,l!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|E))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ri(t,d),si(l,t,d,-1))}return ou(),l=zc(Error(n(421))),No(t,i,E,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Lv.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,Fn=Ji(d.nextSibling),Un=i,Ot=!0,ti=null,t!==null&&(Gn[Wn++]=bi,Gn[Wn++]=Ci,Gn[Wn++]=br,bi=t.id,Ci=t.overflow,br=i),i=jc(i,l.children),i.flags|=4096,i)}function Kh(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Mc(t.return,i,a)}function Xc(t,i,a,l,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=d)}function Zh(t,i,a){var l=i.pendingProps,d=l.revealOrder,p=l.tail;if(_n(t,i,l.children,a),l=kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kh(t,a,i);else if(t.tag===19)Kh(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(kt,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&wo(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Xc(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&wo(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}Xc(i,!0,a,null,p);break;case"together":Xc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Lo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ni(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=ur(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=ur(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function yv(t,i,a){switch(i.tag){case 3:$h(i),fs();break;case 5:dh(i);break;case 1:Tn(i.type)&&po(i);break;case 4:Tc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;Dt(yo,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(kt,kt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Yh(t,i,a):(Dt(kt,kt.current&1),t=Ni(t,i,a),t!==null?t.sibling:null);Dt(kt,kt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Zh(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Dt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,Wh(t,i,a)}return Ni(t,i,a)}var Qh,$c,Jh,ep;Qh=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},$c=function(){},Jh=function(t,i,a,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,Pr(mi.current);var p=null;switch(a){case"input":d=Y(t,d),l=Y(t,l),p=[];break;case"select":d=J({},d,{value:void 0}),l=J({},l,{value:void 0}),p=[];break;case"textarea":d=C(t,d),l=C(t,l),p=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=uo)}ht(a,l);var E;a=null;for(ce in d)if(!l.hasOwnProperty(ce)&&d.hasOwnProperty(ce)&&d[ce]!=null)if(ce==="style"){var F=d[ce];for(E in F)F.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?p||(p=[]):(p=p||[]).push(ce,null));for(ce in l){var H=l[ce];if(F=d!=null?d[ce]:void 0,l.hasOwnProperty(ce)&&H!==F&&(H!=null||F!=null))if(ce==="style")if(F){for(E in F)!F.hasOwnProperty(E)||H&&H.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in H)H.hasOwnProperty(E)&&F[E]!==H[E]&&(a||(a={}),a[E]=H[E])}else a||(p||(p=[]),p.push(ce,a)),a=H;else ce==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,F=F?F.__html:void 0,H!=null&&F!==H&&(p=p||[]).push(ce,H)):ce==="children"?typeof H!="string"&&typeof H!="number"||(p=p||[]).push(ce,""+H):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(H!=null&&ce==="onScroll"&&Ut("scroll",t),p||F===H||(p=[])):(p=p||[]).push(ce,H))}a&&(p=p||[]).push("style",a);var ce=p;(i.updateQueue=ce)&&(i.flags|=4)}},ep=function(t,i,a,l){a!==l&&(i.flags|=4)};function Ma(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function fn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function Sv(t,i,a){var l=i.pendingProps;switch(mc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return Tn(i.type)&&ho(),fn(i),null;case 3:return l=i.stateNode,gs(),Ft(wn),Ft(un),Cc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(_o(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ti!==null&&(ru(ti),ti=null))),$c(t,i),fn(i),null;case 5:Ac(i);var d=Pr(va.current);if(a=i.type,t!==null&&i.stateNode!=null)Jh(t,i,a,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return fn(i),null}if(t=Pr(mi.current),_o(i)){l=i.stateNode,a=i.type;var p=i.memoizedProps;switch(l[pi]=i,l[fa]=p,t=(i.mode&1)!==0,a){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(d=0;d<ca.length;d++)Ut(ca[d],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":rn(l,p),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Ut("invalid",l);break;case"textarea":$(l,p),Ut("invalid",l)}ht(a,p),d=null;for(var E in p)if(p.hasOwnProperty(E)){var F=p[E];E==="children"?typeof F=="string"?l.textContent!==F&&(p.suppressHydrationWarning!==!0&&co(l.textContent,F,t),d=["children",F]):typeof F=="number"&&l.textContent!==""+F&&(p.suppressHydrationWarning!==!0&&co(l.textContent,F,t),d=["children",""+F]):o.hasOwnProperty(E)&&F!=null&&E==="onScroll"&&Ut("scroll",l)}switch(a){case"input":Mt(l),Ke(l,p,!0);break;case"textarea":Mt(l),pe(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=uo)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=me(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[pi]=i,t[fa]=l,Qh(t,i,!1,!1),i.stateNode=t;e:{switch(E=rt(a,l),a){case"dialog":Ut("cancel",t),Ut("close",t),d=l;break;case"iframe":case"object":case"embed":Ut("load",t),d=l;break;case"video":case"audio":for(d=0;d<ca.length;d++)Ut(ca[d],t);d=l;break;case"source":Ut("error",t),d=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),d=l;break;case"details":Ut("toggle",t),d=l;break;case"input":rn(t,l),d=Y(t,l),Ut("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=J({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":$(t,l),d=C(t,l),Ut("invalid",t);break;default:d=l}ht(a,d),F=d;for(p in F)if(F.hasOwnProperty(p)){var H=F[p];p==="style"?et(t,H):p==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ue(t,H)):p==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&dt(t,H):typeof H=="number"&&dt(t,""+H):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?H!=null&&p==="onScroll"&&Ut("scroll",t):H!=null&&L(t,p,H,E))}switch(a){case"input":Mt(t),Ke(t,l,!1);break;case"textarea":Mt(t),pe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+be(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?D(t,!!l.multiple,p,!1):l.defaultValue!=null&&D(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=uo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(t&&i.stateNode!=null)ep(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Pr(va.current),Pr(mi.current),_o(i)){if(l=i.stateNode,a=i.memoizedProps,l[pi]=i,(p=l.nodeValue!==a)&&(t=Un,t!==null))switch(t.tag){case 3:co(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&co(l.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[pi]=i,i.stateNode=l}return fn(i),null;case 13:if(Ft(kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ih(),fs(),i.flags|=98560,p=!1;else if(p=_o(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[pi]=i}else fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),p=!1}else ti!==null&&(ru(ti),ti=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(kt.current&1)!==0?Kt===0&&(Kt=3):ou())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return gs(),$c(t,i),t===null&&ua(i.stateNode.containerInfo),fn(i),null;case 10:return Sc(i.type._context),fn(i),null;case 17:return Tn(i.type)&&ho(),fn(i),null;case 19:if(Ft(kt),p=i.memoizedState,p===null)return fn(i),null;if(l=(i.flags&128)!==0,E=p.rendering,E===null)if(l)Ma(p,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=wo(t),E!==null){for(i.flags|=128,Ma(p,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)p=a,t=l,p.flags&=14680066,E=p.alternate,E===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=E.childLanes,p.lanes=E.lanes,p.child=E.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=E.memoizedProps,p.memoizedState=E.memoizedState,p.updateQueue=E.updateQueue,p.type=E.type,t=E.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Dt(kt,kt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Ee()>ys&&(i.flags|=128,l=!0,Ma(p,!1),i.lanes=4194304)}else{if(!l)if(t=wo(E),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ma(p,!0),p.tail===null&&p.tailMode==="hidden"&&!E.alternate&&!Ot)return fn(i),null}else 2*Ee()-p.renderingStartTime>ys&&a!==1073741824&&(i.flags|=128,l=!0,Ma(p,!1),i.lanes=4194304);p.isBackwards?(E.sibling=i.child,i.child=E):(a=p.last,a!==null?a.sibling=E:i.child=E,p.last=E)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ee(),i.sibling=null,a=kt.current,Dt(kt,l?a&1|2:a&1),i):(fn(i),null);case 22:case 23:return au(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(On&1073741824)!==0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Mv(t,i){switch(mc(i),i.tag){case 1:return Tn(i.type)&&ho(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return gs(),Ft(wn),Ft(un),Cc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Ac(i),null;case 13:if(Ft(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));fs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ft(kt),null;case 4:return gs(),null;case 10:return Sc(i.type._context),null;case 22:case 23:return au(),null;case 24:return null;default:return null}}var Do=!1,hn=!1,Ev=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function _s(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Ht(t,i,l)}else a.current=null}function qc(t,i,a){try{a()}catch(l){Ht(t,i,l)}}var tp=!1;function wv(t,i){if(ac=Qa,t=Df(),Ql(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var E=0,F=-1,H=-1,ce=0,ye=0,Se=t,_e=null;t:for(;;){for(var De;Se!==a||d!==0&&Se.nodeType!==3||(F=E+d),Se!==p||l!==0&&Se.nodeType!==3||(H=E+l),Se.nodeType===3&&(E+=Se.nodeValue.length),(De=Se.firstChild)!==null;)_e=Se,Se=De;for(;;){if(Se===t)break t;if(_e===a&&++ce===d&&(F=E),_e===p&&++ye===l&&(H=E),(De=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=De}a=F===-1||H===-1?null:{start:F,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(oc={focusedElem:t,selectionRange:a},Qa=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ge=Be.memoizedProps,Gt=Be.memoizedState,te=i.stateNode,W=te.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:ni(i.type,Ge),Gt);te.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ae=i.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){Ht(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return Be=tp,tp=!1,Be}function Ea(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&qc(i,a,p)}d=d.next}while(d!==l)}}function Io(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function Yc(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function np(t){var i=t.alternate;i!==null&&(t.alternate=null,np(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[pi],delete i[fa],delete i[dc],delete i[av],delete i[ov])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ip(t){return t.tag===5||t.tag===3||t.tag===4}function rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ip(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=uo));else if(l!==4&&(t=t.child,t!==null))for(Kc(t,i,a),t=t.sibling;t!==null;)Kc(t,i,a),t=t.sibling}function Zc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Zc(t,i,a),t=t.sibling;t!==null;)Zc(t,i,a),t=t.sibling}var sn=null,ii=!1;function sr(t,i,a){for(a=a.child;a!==null;)sp(t,i,a),a=a.sibling}function sp(t,i,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 5:hn||_s(a,i);case 6:var l=sn,d=ii;sn=null,sr(t,i,a),sn=l,ii=d,sn!==null&&(ii?(t=sn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):sn.removeChild(a.stateNode));break;case 18:sn!==null&&(ii?(t=sn,a=a.stateNode,t.nodeType===8?uc(t.parentNode,a):t.nodeType===1&&uc(t,a),ta(t)):uc(sn,a.stateNode));break;case 4:l=sn,d=ii,sn=a.stateNode.containerInfo,ii=!0,sr(t,i,a),sn=l,ii=d;break;case 0:case 11:case 14:case 15:if(!hn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var p=d,E=p.destroy;p=p.tag,E!==void 0&&((p&2)!==0||(p&4)!==0)&&qc(a,i,E),d=d.next}while(d!==l)}sr(t,i,a);break;case 1:if(!hn&&(_s(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(F){Ht(a,i,F)}sr(t,i,a);break;case 21:sr(t,i,a);break;case 22:a.mode&1?(hn=(l=hn)||a.memoizedState!==null,sr(t,i,a),hn=l):sr(t,i,a);break;default:sr(t,i,a)}}function ap(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Ev),i.forEach(function(l){var d=Dv.bind(null,t,l);a.has(l)||(a.add(l),l.then(d,d))})}}function ri(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var d=a[l];try{var p=t,E=i,F=E;e:for(;F!==null;){switch(F.tag){case 5:sn=F.stateNode,ii=!1;break e;case 3:sn=F.stateNode.containerInfo,ii=!0;break e;case 4:sn=F.stateNode.containerInfo,ii=!0;break e}F=F.return}if(sn===null)throw Error(n(160));sp(p,E,d),sn=null,ii=!1;var H=d.alternate;H!==null&&(H.return=null),d.return=null}catch(ce){Ht(d,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)op(i,t),i=i.sibling}function op(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(i,t),vi(t),l&4){try{Ea(3,t,t.return),Io(3,t)}catch(Ge){Ht(t,t.return,Ge)}try{Ea(5,t,t.return)}catch(Ge){Ht(t,t.return,Ge)}}break;case 1:ri(i,t),vi(t),l&512&&a!==null&&_s(a,a.return);break;case 5:if(ri(i,t),vi(t),l&512&&a!==null&&_s(a,a.return),t.flags&32){var d=t.stateNode;try{dt(d,"")}catch(Ge){Ht(t,t.return,Ge)}}if(l&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,E=a!==null?a.memoizedProps:p,F=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{F==="input"&&p.type==="radio"&&p.name!=null&&ut(d,p),rt(F,E);var ce=rt(F,p);for(E=0;E<H.length;E+=2){var ye=H[E],Se=H[E+1];ye==="style"?et(d,Se):ye==="dangerouslySetInnerHTML"?Ue(d,Se):ye==="children"?dt(d,Se):L(d,ye,Se,ce)}switch(F){case"input":lt(d,p);break;case"textarea":le(d,p);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var De=p.value;De!=null?D(d,!!p.multiple,De,!1):_e!==!!p.multiple&&(p.defaultValue!=null?D(d,!!p.multiple,p.defaultValue,!0):D(d,!!p.multiple,p.multiple?[]:"",!1))}d[fa]=p}catch(Ge){Ht(t,t.return,Ge)}}break;case 6:if(ri(i,t),vi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(Ge){Ht(t,t.return,Ge)}}break;case 3:if(ri(i,t),vi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ta(i.containerInfo)}catch(Ge){Ht(t,t.return,Ge)}break;case 4:ri(i,t),vi(t);break;case 13:ri(i,t),vi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(eu=Ee())),l&4&&ap(t);break;case 22:if(ye=a!==null&&a.memoizedState!==null,t.mode&1?(hn=(ce=hn)||ye,ri(i,t),hn=ce):ri(i,t),vi(t),l&8192){if(ce=t.memoizedState!==null,(t.stateNode.isHidden=ce)&&!ye&&(t.mode&1)!==0)for(Fe=t,ye=t.child;ye!==null;){for(Se=Fe=ye;Fe!==null;){switch(_e=Fe,De=_e.child,_e.tag){case 0:case 11:case 14:case 15:Ea(4,_e,_e.return);break;case 1:_s(_e,_e.return);var Be=_e.stateNode;if(typeof Be.componentWillUnmount=="function"){l=_e,a=_e.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(Ge){Ht(l,a,Ge)}}break;case 5:_s(_e,_e.return);break;case 22:if(_e.memoizedState!==null){up(Se);continue}}De!==null?(De.return=_e,Fe=De):up(Se)}ye=ye.sibling}e:for(ye=null,Se=t;;){if(Se.tag===5){if(ye===null){ye=Se;try{d=Se.stateNode,ce?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(F=Se.stateNode,H=Se.memoizedProps.style,E=H!=null&&H.hasOwnProperty("display")?H.display:null,F.style.display=Je("display",E))}catch(Ge){Ht(t,t.return,Ge)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=ce?"":Se.memoizedProps}catch(Ge){Ht(t,t.return,Ge)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ri(i,t),vi(t),l&4&&ap(t);break;case 21:break;default:ri(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(ip(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(dt(d,""),l.flags&=-33);var p=rp(t);Zc(t,p,d);break;case 3:case 4:var E=l.stateNode.containerInfo,F=rp(t);Kc(t,F,E);break;default:throw Error(n(161))}}catch(H){Ht(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Tv(t,i,a){Fe=t,lp(t)}function lp(t,i,a){for(var l=(t.mode&1)!==0;Fe!==null;){var d=Fe,p=d.child;if(d.tag===22&&l){var E=d.memoizedState!==null||Do;if(!E){var F=d.alternate,H=F!==null&&F.memoizedState!==null||hn;F=Do;var ce=hn;if(Do=E,(hn=H)&&!ce)for(Fe=d;Fe!==null;)E=Fe,H=E.child,E.tag===22&&E.memoizedState!==null?dp(d):H!==null?(H.return=E,Fe=H):dp(d);for(;p!==null;)Fe=p,lp(p),p=p.sibling;Fe=d,Do=F,hn=ce}cp(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Fe=p):cp(t)}}function cp(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||Io(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(a===null)l.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ni(i.type,a.memoizedProps);l.componentDidUpdate(d,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&uh(i,p,l);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}uh(i,E,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var ye=ce.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&ta(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&Yc(i)}catch(_e){Ht(i,i.return,_e)}}if(i===t){Fe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function up(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function dp(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Io(4,i)}catch(H){Ht(i,a,H)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(H){Ht(i,d,H)}}var p=i.return;try{Yc(i)}catch(H){Ht(i,p,H)}break;case 5:var E=i.return;try{Yc(i)}catch(H){Ht(i,E,H)}}}catch(H){Ht(i,i.return,H)}if(i===t){Fe=null;break}var F=i.sibling;if(F!==null){F.return=i.return,Fe=F;break}Fe=i.return}}var Av=Math.ceil,Uo=b.ReactCurrentDispatcher,Qc=b.ReactCurrentOwner,$n=b.ReactCurrentBatchConfig,yt=0,en=null,Wt=null,an=0,On=0,xs=er(0),Kt=0,wa=null,Lr=0,Fo=0,Jc=0,Ta=null,bn=null,eu=0,ys=1/0,Li=null,Oo=!1,tu=null,ar=null,ko=!1,or=null,zo=0,Aa=0,nu=null,Bo=-1,Ho=0;function xn(){return(yt&6)!==0?Ee():Bo!==-1?Bo:Bo=Ee()}function lr(t){return(t.mode&1)===0?1:(yt&2)!==0&&an!==0?an&-an:cv.transition!==null?(Ho===0&&(Ho=vn()),Ho):(t=Rt,t!==0||(t=window.event,t=t===void 0?16:hf(t.type)),t)}function si(t,i,a,l){if(50<Aa)throw Aa=0,nu=null,Error(n(185));En(t,a,l),((yt&2)===0||t!==en)&&(t===en&&((yt&2)===0&&(Fo|=a),Kt===4&&cr(t,an)),Cn(t,l),a===1&&yt===0&&(i.mode&1)===0&&(ys=Ee()+500,mo&&nr()))}function Cn(t,i){var a=t.callbackNode;Hn(t,i);var l=hi(t,t===en?an:0);if(l===0)a!==null&&de(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&de(a),i===1)t.tag===0?lv(hp.bind(null,t)):Qf(hp.bind(null,t)),rv(function(){(yt&6)===0&&nr()}),a=null;else{switch(sf(l)){case 1:a=Ve;break;case 4:a=tt;break;case 16:a=it;break;case 536870912:a=gt;break;default:a=it}a=Sp(a,fp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function fp(t,i){if(Bo=-1,Ho=0,(yt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ss()&&t.callbackNode!==a)return null;var l=hi(t,t===en?an:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Vo(t,l);else{i=l;var d=yt;yt|=2;var p=mp();(en!==t||an!==i)&&(Li=null,ys=Ee()+500,Ir(t,i));do try{Rv();break}catch(F){pp(t,F)}while(!0);yc(),Uo.current=p,yt=d,Wt!==null?i=0:(en=null,an=0,i=Kt)}if(i!==0){if(i===2&&(d=wi(t),d!==0&&(l=d,i=iu(t,d))),i===1)throw a=wa,Ir(t,0),cr(t,l),Cn(t,Ee()),a;if(i===6)cr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!bv(d)&&(i=Vo(t,l),i===2&&(p=wi(t),p!==0&&(l=p,i=iu(t,p))),i===1))throw a=wa,Ir(t,0),cr(t,l),Cn(t,Ee()),a;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,bn,Li);break;case 3:if(cr(t,l),(l&130023424)===l&&(i=eu+500-Ee(),10<i)){if(hi(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){xn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=cc(Ur.bind(null,t,bn,Li),i);break}Ur(t,bn,Li);break;case 4:if(cr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var E=31-at(l);p=1<<E,E=i[E],E>d&&(d=E),l&=~p}if(l=d,l=Ee()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Av(l/1960))-l,10<l){t.timeoutHandle=cc(Ur.bind(null,t,bn,Li),l);break}Ur(t,bn,Li);break;case 5:Ur(t,bn,Li);break;default:throw Error(n(329))}}}return Cn(t,Ee()),t.callbackNode===a?fp.bind(null,t):null}function iu(t,i){var a=Ta;return t.current.memoizedState.isDehydrated&&(Ir(t,i).flags|=256),t=Vo(t,i),t!==2&&(i=bn,bn=a,i!==null&&ru(i)),t}function ru(t){bn===null?bn=t:bn.push.apply(bn,t)}function bv(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var d=a[l],p=d.getSnapshot;d=d.value;try{if(!ei(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i){for(i&=~Jc,i&=~Fo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-at(i),l=1<<a;t[a]=-1,i&=~l}}function hp(t){if((yt&6)!==0)throw Error(n(327));Ss();var i=hi(t,0);if((i&1)===0)return Cn(t,Ee()),null;var a=Vo(t,i);if(t.tag!==0&&a===2){var l=wi(t);l!==0&&(i=l,a=iu(t,l))}if(a===1)throw a=wa,Ir(t,0),cr(t,i),Cn(t,Ee()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,bn,Li),Cn(t,Ee()),null}function su(t,i){var a=yt;yt|=1;try{return t(i)}finally{yt=a,yt===0&&(ys=Ee()+500,mo&&nr())}}function Dr(t){or!==null&&or.tag===0&&(yt&6)===0&&Ss();var i=yt;yt|=1;var a=$n.transition,l=Rt;try{if($n.transition=null,Rt=1,t)return t()}finally{Rt=l,$n.transition=a,yt=i,(yt&6)===0&&nr()}}function au(){On=xs.current,Ft(xs)}function Ir(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,iv(a)),Wt!==null)for(a=Wt.return;a!==null;){var l=a;switch(mc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ho();break;case 3:gs(),Ft(wn),Ft(un),Cc();break;case 5:Ac(l);break;case 4:gs();break;case 13:Ft(kt);break;case 19:Ft(kt);break;case 10:Sc(l.type._context);break;case 22:case 23:au()}a=a.return}if(en=t,Wt=t=ur(t.current,null),an=On=i,Kt=0,wa=null,Jc=Fo=Lr=0,bn=Ta=null,Rr!==null){for(i=0;i<Rr.length;i++)if(a=Rr[i],l=a.interleaved,l!==null){a.interleaved=null;var d=l.next,p=a.pending;if(p!==null){var E=p.next;p.next=d,l.next=E}a.pending=l}Rr=null}return t}function pp(t,i){do{var a=Wt;try{if(yc(),To.current=Ro,Ao){for(var l=zt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}Ao=!1}if(Nr=0,Jt=Yt=zt=null,_a=!1,xa=0,Qc.current=null,a===null||a.return===null){Kt=1,wa=i,Wt=null;break}e:{var p=t,E=a.return,F=a,H=i;if(i=an,F.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ce=H,ye=F,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var De=zh(E);if(De!==null){De.flags&=-257,Bh(De,E,F,p,i),De.mode&1&&kh(p,ce,i),i=De,H=ce;var Be=i.updateQueue;if(Be===null){var Ge=new Set;Ge.add(H),i.updateQueue=Ge}else Be.add(H);break e}else{if((i&1)===0){kh(p,ce,i),ou();break e}H=Error(n(426))}}else if(Ot&&F.mode&1){var Gt=zh(E);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),Bh(Gt,E,F,p,i),_c(vs(H,F));break e}}p=H=vs(H,F),Kt!==4&&(Kt=2),Ta===null?Ta=[p]:Ta.push(p),p=E;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var te=Fh(p,H,i);ch(p,te);break e;case 1:F=H;var W=p.type,ae=p.stateNode;if((p.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(ar===null||!ar.has(ae)))){p.flags|=65536,i&=-i,p.lanes|=i;var we=Oh(p,F,i);ch(p,we);break e}}p=p.return}while(p!==null)}vp(a)}catch(Xe){i=Xe,Wt===a&&a!==null&&(Wt=a=a.return);continue}break}while(!0)}function mp(){var t=Uo.current;return Uo.current=Ro,t===null?Ro:t}function ou(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),en===null||(Lr&268435455)===0&&(Fo&268435455)===0||cr(en,an)}function Vo(t,i){var a=yt;yt|=2;var l=mp();(en!==t||an!==i)&&(Li=null,Ir(t,i));do try{Cv();break}catch(d){pp(t,d)}while(!0);if(yc(),yt=a,Uo.current=l,Wt!==null)throw Error(n(261));return en=null,an=0,Kt}function Cv(){for(;Wt!==null;)gp(Wt)}function Rv(){for(;Wt!==null&&!Z();)gp(Wt)}function gp(t){var i=yp(t.alternate,t,On);t.memoizedProps=t.pendingProps,i===null?vp(t):Wt=i,Qc.current=null}function vp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=Sv(a,i,On),a!==null){Wt=a;return}}else{if(a=Mv(a,i),a!==null){a.flags&=32767,Wt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Ur(t,i,a){var l=Rt,d=$n.transition;try{$n.transition=null,Rt=1,Pv(t,i,a,l)}finally{$n.transition=d,Rt=l}return null}function Pv(t,i,a,l){do Ss();while(or!==null);if((yt&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(Ya(t,p),t===en&&(Wt=en=null,an=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ko||(ko=!0,Sp(it,function(){return Ss(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=$n.transition,$n.transition=null;var E=Rt;Rt=1;var F=yt;yt|=4,Qc.current=null,wv(t,a),op(a,t),Kg(oc),Qa=!!ac,oc=ac=null,t.current=a,Tv(a),Ae(),yt=F,Rt=E,$n.transition=p}else t.current=a;if(ko&&(ko=!1,or=t,zo=d),p=t.pendingLanes,p===0&&(ar=null),ln(a.stateNode),Cn(t,Ee()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],l(d.value,{componentStack:d.stack,digest:d.digest});if(Oo)throw Oo=!1,t=tu,tu=null,t;return(zo&1)!==0&&t.tag!==0&&Ss(),p=t.pendingLanes,(p&1)!==0?t===nu?Aa++:(Aa=0,nu=t):Aa=0,nr(),null}function Ss(){if(or!==null){var t=sf(zo),i=$n.transition,a=Rt;try{if($n.transition=null,Rt=16>t?16:t,or===null)var l=!1;else{if(t=or,or=null,zo=0,(yt&6)!==0)throw Error(n(331));var d=yt;for(yt|=4,Fe=t.current;Fe!==null;){var p=Fe,E=p.child;if((Fe.flags&16)!==0){var F=p.deletions;if(F!==null){for(var H=0;H<F.length;H++){var ce=F[H];for(Fe=ce;Fe!==null;){var ye=Fe;switch(ye.tag){case 0:case 11:case 15:Ea(8,ye,p)}var Se=ye.child;if(Se!==null)Se.return=ye,Fe=Se;else for(;Fe!==null;){ye=Fe;var _e=ye.sibling,De=ye.return;if(np(ye),ye===ce){Fe=null;break}if(_e!==null){_e.return=De,Fe=_e;break}Fe=De}}}var Be=p.alternate;if(Be!==null){var Ge=Be.child;if(Ge!==null){Be.child=null;do{var Gt=Ge.sibling;Ge.sibling=null,Ge=Gt}while(Ge!==null)}}Fe=p}}if((p.subtreeFlags&2064)!==0&&E!==null)E.return=p,Fe=E;else e:for(;Fe!==null;){if(p=Fe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ea(9,p,p.return)}var te=p.sibling;if(te!==null){te.return=p.return,Fe=te;break e}Fe=p.return}}var W=t.current;for(Fe=W;Fe!==null;){E=Fe;var ae=E.child;if((E.subtreeFlags&2064)!==0&&ae!==null)ae.return=E,Fe=ae;else e:for(E=W;Fe!==null;){if(F=Fe,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:Io(9,F)}}catch(Xe){Ht(F,F.return,Xe)}if(F===E){Fe=null;break e}var we=F.sibling;if(we!==null){we.return=F.return,Fe=we;break e}Fe=F.return}}if(yt=d,nr(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(At,t)}catch{}l=!0}return l}finally{Rt=a,$n.transition=i}}return!1}function _p(t,i,a){i=vs(a,i),i=Fh(t,i,1),t=rr(t,i,1),i=xn(),t!==null&&(En(t,1,i),Cn(t,i))}function Ht(t,i,a){if(t.tag===3)_p(t,t,a);else for(;i!==null;){if(i.tag===3){_p(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){t=vs(a,t),t=Oh(i,t,1),i=rr(i,t,1),t=xn(),i!==null&&(En(i,1,t),Cn(i,t));break}}i=i.return}}function Nv(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=xn(),t.pingedLanes|=t.suspendedLanes&a,en===t&&(an&a)===a&&(Kt===4||Kt===3&&(an&130023424)===an&&500>Ee()-eu?Ir(t,0):Jc|=a),Cn(t,i)}function xp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Jn,Jn<<=1,(Jn&130023424)===0&&(Jn=4194304)));var a=xn();t=Ri(t,i),t!==null&&(En(t,i,a),Cn(t,a))}function Lv(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),xp(t,a)}function Dv(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),xp(t,a)}var yp;yp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||wn.current)An=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return An=!1,yv(t,i,a);An=(t.flags&131072)!==0}else An=!1,Ot&&(i.flags&1048576)!==0&&Jf(i,vo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Lo(t,i),t=i.pendingProps;var d=cs(i,un.current);ms(i,a),d=Nc(null,i,l,t,d,a);var p=Lc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Tn(l)?(p=!0,po(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,wc(i),d.updater=Po,i.stateNode=d,d._reactInternals=i,kc(i,l,t,a),i=Vc(null,i,l,!0,p,a)):(i.tag=0,Ot&&p&&pc(i),_n(null,i,d,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Lo(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=Uv(l),t=ni(l,t),d){case 0:i=Hc(null,i,l,t,a);break e;case 1:i=Xh(null,i,l,t,a);break e;case 11:i=Hh(null,i,l,t,a);break e;case 14:i=Vh(null,i,l,ni(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ni(l,d),Hc(t,i,l,d,a);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ni(l,d),Xh(t,i,l,d,a);case 3:e:{if($h(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,d=p.element,lh(t,i),Eo(i,l,null,a);var E=i.memoizedState;if(l=E.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=vs(Error(n(423)),i),i=qh(t,i,l,a,d);break e}else if(l!==d){d=vs(Error(n(424)),i),i=qh(t,i,l,a,d);break e}else for(Fn=Ji(i.stateNode.containerInfo.firstChild),Un=i,Ot=!0,ti=null,a=ah(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fs(),l===d){i=Ni(t,i,a);break e}_n(t,i,l,a)}i=i.child}return i;case 5:return dh(i),t===null&&vc(i),l=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,E=d.children,lc(l,d)?E=null:p!==null&&lc(l,p)&&(i.flags|=32),jh(t,i),_n(t,i,E,a),i.child;case 6:return t===null&&vc(i),null;case 13:return Yh(t,i,a);case 4:return Tc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=hs(i,null,l,a):_n(t,i,l,a),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ni(l,d),Hh(t,i,l,d,a);case 7:return _n(t,i,i.pendingProps,a),i.child;case 8:return _n(t,i,i.pendingProps.children,a),i.child;case 12:return _n(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,p=i.memoizedProps,E=d.value,Dt(yo,l._currentValue),l._currentValue=E,p!==null)if(ei(p.value,E)){if(p.children===d.children&&!wn.current){i=Ni(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var F=p.dependencies;if(F!==null){E=p.child;for(var H=F.firstContext;H!==null;){if(H.context===l){if(p.tag===1){H=Pi(-1,a&-a),H.tag=2;var ce=p.updateQueue;if(ce!==null){ce=ce.shared;var ye=ce.pending;ye===null?H.next=H:(H.next=ye.next,ye.next=H),ce.pending=H}}p.lanes|=a,H=p.alternate,H!==null&&(H.lanes|=a),Mc(p.return,a,i),F.lanes|=a;break}H=H.next}}else if(p.tag===10)E=p.type===i.type?null:p.child;else if(p.tag===18){if(E=p.return,E===null)throw Error(n(341));E.lanes|=a,F=E.alternate,F!==null&&(F.lanes|=a),Mc(E,a,i),E=p.sibling}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===i){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}_n(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,ms(i,a),d=jn(d),l=l(d),i.flags|=1,_n(t,i,l,a),i.child;case 14:return l=i.type,d=ni(l,i.pendingProps),d=ni(l.type,d),Vh(t,i,l,d,a);case 15:return Gh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ni(l,d),Lo(t,i),i.tag=1,Tn(l)?(t=!0,po(i)):t=!1,ms(i,a),Ih(i,l,d),kc(i,l,d,a),Vc(null,i,l,!0,t,a);case 19:return Zh(t,i,a);case 22:return Wh(t,i,a)}throw Error(n(156,i.tag))};function Sp(t,i){return ue(t,i)}function Iv(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,i,a,l){return new Iv(t,i,a,l)}function lu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Uv(t){if(typeof t=="function")return lu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===V)return 11;if(t===se)return 14}return 2}function ur(t,i){var a=t.alternate;return a===null?(a=qn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Go(t,i,a,l,d,p){var E=2;if(l=t,typeof t=="function")lu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case U:return Fr(a.children,d,p,i);case k:E=8,d|=8;break;case P:return t=qn(12,a,i,d|2),t.elementType=P,t.lanes=p,t;case X:return t=qn(13,a,i,d),t.elementType=X,t.lanes=p,t;case oe:return t=qn(19,a,i,d),t.elementType=oe,t.lanes=p,t;case ne:return Wo(a,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:E=10;break e;case B:E=9;break e;case V:E=11;break e;case se:E=14;break e;case ee:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=qn(E,a,i,d),i.elementType=t,i.type=l,i.lanes=p,i}function Fr(t,i,a,l){return t=qn(7,t,l,i),t.lanes=a,t}function Wo(t,i,a,l){return t=qn(22,t,l,i),t.elementType=ne,t.lanes=a,t.stateNode={isHidden:!1},t}function cu(t,i,a){return t=qn(6,t,null,i),t.lanes=a,t}function uu(t,i,a){return i=qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Fv(t,i,a,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vn(0),this.expirationTimes=Vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function du(t,i,a,l,d,p,E,F,H){return t=new Fv(t,i,a,F,H),i===1?(i=1,p===!0&&(i|=8)):i=0,p=qn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},wc(p),t}function Ov(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Mp(t){if(!t)return tr;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Tn(a))return Kf(t,a,i)}return i}function Ep(t,i,a,l,d,p,E,F,H){return t=du(a,l,!0,t,d,p,E,F,H),t.context=Mp(null),a=t.current,l=xn(),d=lr(a),p=Pi(l,d),p.callback=i??null,rr(a,p,d),t.current.lanes=d,En(t,d,l),Cn(t,l),t}function jo(t,i,a,l){var d=i.current,p=xn(),E=lr(d);return a=Mp(a),i.context===null?i.context=a:i.pendingContext=a,i=Pi(p,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=rr(d,i,E),t!==null&&(si(t,d,E,p),Mo(t,d,E)),E}function Xo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function fu(t,i){wp(t,i),(t=t.alternate)&&wp(t,i)}function kv(){return null}var Tp=typeof reportError=="function"?reportError:function(t){console.error(t)};function hu(t){this._internalRoot=t}$o.prototype.render=hu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));jo(t,i,null,null)},$o.prototype.unmount=hu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){jo(null,t,null,null)}),i[Ti]=null}};function $o(t){this._internalRoot=t}$o.prototype.unstable_scheduleHydration=function(t){if(t){var i=lf();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Ki.length&&i!==0&&i<Ki[a].priority;a++);Ki.splice(a,0,t),a===0&&df(t)}};function pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ap(){}function zv(t,i,a,l,d){if(d){if(typeof l=="function"){var p=l;l=function(){var ce=Xo(E);p.call(ce)}}var E=Ep(i,l,t,0,null,!1,!1,"",Ap);return t._reactRootContainer=E,t[Ti]=E.current,ua(t.nodeType===8?t.parentNode:t),Dr(),E}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var F=l;l=function(){var ce=Xo(H);F.call(ce)}}var H=du(t,0,!1,null,null,!1,!1,"",Ap);return t._reactRootContainer=H,t[Ti]=H.current,ua(t.nodeType===8?t.parentNode:t),Dr(function(){jo(i,H,a,l)}),H}function Yo(t,i,a,l,d){var p=a._reactRootContainer;if(p){var E=p;if(typeof d=="function"){var F=d;d=function(){var H=Xo(E);F.call(H)}}jo(i,E,t,d)}else E=zv(a,i,t,d,l);return Xo(E)}af=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=qt(i.pendingLanes);a!==0&&(kl(i,a|1),Cn(i,Ee()),(yt&6)===0&&(ys=Ee()+500,nr()))}break;case 13:Dr(function(){var l=Ri(t,1);if(l!==null){var d=xn();si(l,t,1,d)}}),fu(t,1)}},zl=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var a=xn();si(i,t,134217728,a)}fu(t,134217728)}},of=function(t){if(t.tag===13){var i=lr(t),a=Ri(t,i);if(a!==null){var l=xn();si(a,t,i,l)}fu(t,i)}},lf=function(){return Rt},cf=function(t,i){var a=Rt;try{return Rt=t,i()}finally{Rt=a}},Re=function(t,i,a){switch(i){case"input":if(lt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var d=fo(l);if(!d)throw Error(n(90));ft(l),lt(l,d)}}}break;case"textarea":le(t,a);break;case"select":i=a.value,i!=null&&D(t,!!a.multiple,i,!1)}},It=su,$t=Dr;var Bv={usingClientEntryPoint:!1,Events:[ha,os,fo,Ne,st,su]},ba={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hv={bundleType:ba.bundleType,version:ba.version,rendererPackageName:ba.rendererPackageName,rendererConfig:ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=R(t),t===null?null:t.stateNode},findFiberByHostInstance:ba.findFiberByHostInstance||kv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{At=Ko.inject(Hv),mt=Ko}catch{}}return Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bv,Rn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pu(i))throw Error(n(200));return Ov(t,i,null,a)},Rn.createRoot=function(t,i){if(!pu(t))throw Error(n(299));var a=!1,l="",d=Tp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=du(t,1,!1,null,null,a,!1,l,d),t[Ti]=i.current,ua(t.nodeType===8?t.parentNode:t),new hu(i)},Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=R(i),t=t===null?null:t.stateNode,t},Rn.flushSync=function(t){return Dr(t)},Rn.hydrate=function(t,i,a){if(!qo(i))throw Error(n(200));return Yo(null,t,i,!0,a)},Rn.hydrateRoot=function(t,i,a){if(!pu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,d=!1,p="",E=Tp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Ep(i,null,t,1,a??null,d,!1,p,E),t[Ti]=i.current,ua(t),l)for(t=0;t<l.length;t++)a=l[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new $o(i)},Rn.render=function(t,i,a){if(!qo(i))throw Error(n(200));return Yo(null,t,i,!1,a)},Rn.unmountComponentAtNode=function(t){if(!qo(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){Yo(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1},Rn.unstable_batchedUpdates=su,Rn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!qo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Yo(t,i,a,!1,l)},Rn.version="18.3.1-next-f1338f8080-20240426",Rn}var Ip;function Kv(){if(Ip)return vu.exports;Ip=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vu.exports=Yv(),vu.exports}var Up;function Zv(){if(Up)return Zo;Up=1;var s=Kv();return Zo.createRoot=s.createRoot,Zo.hydrateRoot=s.hydrateRoot,Zo}var Qv=Zv();const Jv=$m(Qv);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function t_(s,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:e_(s),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=s=>{let e="",n=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){n=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=n?r.toUpperCase():r,n=!1}return e};/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=s=>{const e=n_(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function yu(s){return s!=null}function r_(s,e={}){var y,S;const n=e.attributeNames??{},r=w=>n[w]??w,o=s.size??s.width??Or.width,c=s.size??s.height??Or.height,u=((y=s.aliases)==null?void 0:y.filter(w=>typeof w=="string"&&w.trim()!=="").map(w=>`lucide-${w}`))??[],f=[...s.name?[`lucide-${s.name}`]:[],...u],h=((S=e.className)==null?void 0:S.split(" ").filter(Boolean))??[],m=e.includeDefaultClasses===!1?td(...h):td("lucide",...f,...h),g=e.absoluteStrokeWidth?Number(e.strokeWidth??Or["stroke-width"])*Number(s.size??s.width??Or.width)/Number(e.size??e.width??Or.width):e.strokeWidth??Or["stroke-width"];return["svg",{...Object.entries(Or).reduce((w,[T,x])=>(w[r(T)]=x,w),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&yu(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&yu(e.width)&&{[r("width")]:e.width},..."height"in e&&yu(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:g,...m&&{[r("class")]:m},[r("viewBox")]:`0 0 ${o} ${c}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(w=>{const[T,x,v]=w,N=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...x}:x;return v?[T,N,v]:[T,N]})]}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function s_(s,e={}){return r_(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},o_=He.createContext({}),l_=()=>He.useContext(o_),c_=He.forwardRef(({color:s,size:e,width:n,height:r,strokeWidth:o,absoluteStrokeWidth:c,nonScalingStroke:u,className:f="",children:h,iconNode:m=[],icon:g={node:m,aliases:[],size:24},..._},y)=>{const{size:S=24,strokeWidth:w=2,absoluteStrokeWidth:T=!1,nonScalingStroke:x=!1,color:v="currentColor",className:N=""}=l_()??{},L=!!h||a_(_),[b,G,O=[]]=s_(g,{color:s??v,width:n??e??S,height:r??e??S,strokeWidth:o??w,absoluteStrokeWidth:c??T,nonScalingStroke:u??x,className:td(N,f),hasA11yProp:L,attributes:_});return He.createElement(b,{ref:y,...G},[...O.map(([U,k])=>He.createElement(U,k)),...Array.isArray(h)?h:[h]])});/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ct(s,e=[],n=[]){const r=typeof s=="string"?t_(s,e,n):s,o=He.forwardRef(({className:c,...u},f)=>He.createElement(c_,{ref:f,icon:r,className:c,...u}));return r.name&&(o.displayName=i_(r.name)),o}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};qm.node;const u_=Ct(qm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};Ym.node;const Km=Ct(Ym);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm={name:"brain",size:24,node:[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 01-3-4 4.17 4.17 0 01-3 4",key:"5nuw1p"}],["path",{d:"M17.707 6.294A3 3 0 1012 5a3 3 0 10-5.707 1.294",key:"18ldcf"}],["path",{d:"M17.996 5.125a4 4 0 012.526 5.77",key:"1sdu8q"}],["path",{d:"M18 18a4 4 0 002-7.465",key:"7xqqvr"}],["path",{d:"M19.967 17.482a4 4 0 11-7.967.517 4 4 0 11-7.967-.517",key:"t46ysz"}],["path",{d:"M6 18a4 4 0 01-2-7.465",key:"1y2m15"}],["path",{d:"M6.004 5.125a4 4 0 00-2.526 5.77",key:"3cw1ss"}]]};Zm.node;const d_=Ct(Zm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Qm.node;const f_=Ct(Qm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};Jm.node;const h_=Ct(Jm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0={name:"circle-exclamation-point",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle","circle-alert"]};e0.node;const p_=Ct(e0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0={name:"columns-2",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],aliases:["columns"]};t0.node;const m_=Ct(t0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};n0.node;const i0=Ct(n0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};r0.node;const s0=Ct(r0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0={name:"crosshair",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]};a0.node;const g_=Ct(a0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};o0.node;const v_=Ct(o0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0={name:"gauge",size:24,node:[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]};l0.node;const Fp=Ct(l0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};c0.node;const __=Ct(c0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};u0.node;const d0=Ct(u0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0={name:"map",size:24,node:[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]};f0.node;const Op=Ct(f0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0={name:"navigation",size:24,node:[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]};h0.node;const x_=Ct(h0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0={name:"octagon-exclamation-point",size:24,node:[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]],aliases:["alert-octagon","octagon-alert"]};p0.node;const kp=Ct(p0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};m0.node;const g0=Ct(m0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};v0.node;const y_=Ct(v0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};_0.node;const S_=Ct(_0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0={name:"satellite",size:24,node:[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]]};x0.node;const M_=Ct(x0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};y0.node;const E_=Ct(y0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0={name:"shield-exclamation-point",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],aliases:["shield-alert"]};S0.node;const zp=Ct(S0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};M0.node;const w_=Ct(M0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};E0.node;const T_=Ct(E0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};w0.node;const A_=Ct(w0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};T0.node;const b_=Ct(T0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0={name:"triangle-exclamation-point",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle","triangle-alert"]};A0.node;const bl=Ct(A0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};b0.node;const Bp=Ct(b0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};C0.node;const C_=Ct(C0),R_=({status:s,roverCallsign:e,datasetCount:n})=>M.jsxs("header",{className:"bg-mars-800/80 backdrop-blur-md border-b border-mars-700/60 px-6 py-3.5 flex items-center justify-between sticky top-0 z-50",children:[M.jsxs("div",{className:"flex items-center space-x-4",children:[M.jsxs("div",{className:"relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-mars-500 to-amber-600 shadow-lg shadow-mars-500/20",children:[M.jsx(i0,{className:"w-6 h-6 text-white animate-spin-slow"}),M.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-mars-900 animate-pulse"})]}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center space-x-2.5",children:[M.jsx("h1",{className:"text-lg font-bold tracking-wider text-white uppercase font-mono",children:"ODYSSEY"}),M.jsx("span",{className:"text-[11px] px-2 py-0.5 rounded font-mono bg-mars-700 text-mars-300 border border-mars-600",children:"MARS-09 TACTICAL"}),M.jsxs("span",{className:"text-[11px] px-2 py-0.5 rounded font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800 flex items-center space-x-1",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"}),M.jsx("span",{children:s})]})]}),M.jsx("p",{className:"text-xs text-slate-400",children:"Autonomous Mars Rover Navigation & Planetary Terrain Intelligence Engine"})]})]}),M.jsxs("div",{className:"flex items-center space-x-6 text-xs font-mono",children:[M.jsxs("div",{className:"flex items-center space-x-2 text-slate-300",children:[M.jsx(M_,{className:"w-4 h-4 text-mars-400"}),M.jsxs("span",{children:["DATUM: ",M.jsx("strong",{className:"text-white",children:"IAU 2015 SPHEROID"})]})]}),M.jsxs("div",{className:"flex items-center space-x-2 text-slate-300",children:[M.jsx(u_,{className:"w-4 h-4 text-emerald-400"}),M.jsxs("span",{children:["ROVER: ",M.jsx("strong",{className:"text-white",children:e})]})]}),M.jsxs("div",{className:"flex items-center space-x-2 text-slate-300",children:[M.jsx(s0,{className:"w-4 h-4 text-cyan-400"}),M.jsxs("span",{children:["INGESTED: ",M.jsxs("strong",{className:"text-white",children:[n," LAYERS"]})]})]})]})]}),Zr="/api";async function P_(){const s=await fetch(`${Zr}/status`);if(!s.ok)throw new Error("Failed to fetch system status");return s.json()}async function N_(s){const e=await fetch(`${Zr}/terrains/${s}`,{method:"POST"});if(!e.ok)throw new Error(`Failed to load terrain preset: ${s}`);return e.json()}async function L_(){const s=await fetch(`${Zr}/samples`);if(!s.ok)throw new Error("Failed to fetch sample datasets");return s.json()}async function D_(s,e){const n=new FormData;n.append("file",s),n.append("file_type",e);const r=await fetch(`${Zr}/upload`,{method:"POST",body:n});if(!r.ok){const c=await r.json().catch(()=>({detail:"Upload failed"}));throw new Error(c.detail||"Upload failed")}return(await r.json()).data}async function I_(s,e){const n=new FormData;n.append("imagery_id",s),n.append("dem_id",e);const r=await fetch(`${Zr}/validate-compatibility`,{method:"POST",body:n});if(!r.ok){const c=await r.json().catch(()=>({detail:"Validation failed"}));throw new Error(c.detail||"Validation failed")}return(await r.json()).report}async function U_(s){const e=new FormData;e.append("dem_id",s);const n=await fetch(`${Zr}/analyze-terrain`,{method:"POST",body:e});if(!n.ok){const r=await n.json().catch(()=>({detail:"Terrain analysis failed"}));throw new Error(r.detail||"Terrain analysis failed")}return n.json()}async function Su(s,e,n,r,o){const c=new FormData;c.append("dem_id",s),c.append("start_r",e.toString()),c.append("start_c",n.toString()),c.append("goal_r",r.toString()),c.append("goal_c",o.toString());const u=await fetch(`${Zr}/plan-path`,{method:"POST",body:c});if(!u.ok){const f=await u.json().catch(()=>({detail:"Path planning failed"}));throw new Error(f.detail||"Path planning failed")}return u.json()}const F_=({imageryRecord:s,demRecord:e,demPrimaryRecord:n,demOffsetRecord:r,onSelectImagery:o,onSelectDem:c,onLoadSamples:u,isLoading:f,activeTerrainId:h="jezero",onSelectTerrain:m})=>{var x,v,N;const[g,_]=He.useState(null),[y,S]=He.useState(null),w=[{id:"jezero",name:"Jezero Crater",icon:"🔴",tag:"Delta"},{id:"olympus",name:"Olympus Mons",icon:"🌋",tag:"Caldera"},{id:"valles",name:"Valles Marineris",icon:"🏜️",tag:"Canyon"},{id:"gale",name:"Gale / Mt Sharp",icon:"⛰️",tag:"Strata"},{id:"dunes",name:"Noctis Dunes",icon:"〰️",tag:"Mesas"},{id:"chaos",name:"Hydaspis Chaos",icon:"🕸️",tag:"Polygons"},{id:"korolev",name:"Korolev Ice",icon:"🧊",tag:"Ice Dome"},{id:"rille",name:"Elysium Rille",icon:"🔥",tag:"Lava Tube"}],T=async(L,b)=>{var O;const G=(O=L.target.files)==null?void 0:O[0];if(G){_(b),S(null);try{const U=await D_(G,b);b==="imagery"?o(U):c(U)}catch(U){S(U.message||"Failed to upload raster.")}finally{_(null)}}};return M.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 flex flex-col space-y-4",children:[M.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-3",children:[M.jsxs("div",{className:"flex items-center space-x-2",children:[M.jsx(d0,{className:"w-4 h-4 text-mars-400"}),M.jsx("h2",{className:"text-sm font-semibold tracking-wide text-white uppercase font-mono",children:"Planetary Data Ingestion"})]}),M.jsxs("button",{onClick:u,disabled:f,className:"flex items-center space-x-1.5 text-xs font-mono px-2.5 py-1 rounded bg-mars-700 hover:bg-mars-600 text-slate-200 border border-mars-600 transition",children:[M.jsx(y_,{className:`w-3 h-3 ${f?"animate-spin":""}`}),M.jsx("span",{children:"Reset Samples"})]})]}),m&&M.jsxs("div",{className:"space-y-1.5",children:[M.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-slate-400",children:[M.jsx("span",{children:"MARTIAN TERRAIN PRESETS:"}),M.jsx("span",{className:"text-cyan-400 font-semibold",children:(x=w.find(L=>L.id===h))==null?void 0:x.name})]}),M.jsx("div",{className:"grid grid-cols-4 gap-1.5 font-mono text-[10px]",children:w.map(L=>{const b=h===L.id;return M.jsxs("button",{onClick:()=>m(L.id),disabled:f,className:`flex flex-col items-center justify-center p-1.5 rounded-lg border transition text-center ${b?"bg-mars-600/90 text-white border-cyan-400 shadow-md shadow-cyan-950/40 ring-1 ring-cyan-400/40":"bg-mars-900/80 text-slate-400 border-mars-700/60 hover:bg-mars-800 hover:text-slate-200"}`,title:`${L.name} (${L.tag})`,children:[M.jsx("span",{className:"text-sm leading-none mb-0.5",children:L.icon}),M.jsx("span",{className:"truncate w-full font-bold text-[9px] leading-tight",children:L.name.split(" ")[0]}),M.jsx("span",{className:"text-[8px] text-slate-500 leading-none",children:L.tag})]},L.id)})})]}),y&&M.jsxs("div",{className:"bg-red-950/60 border border-red-800/80 rounded-lg p-3 text-xs text-red-300 flex items-start space-x-2",children:[M.jsx(bl,{className:"w-4 h-4 text-red-400 flex-shrink-0 mt-0.5"}),M.jsx("span",{children:y})]}),M.jsxs("div",{className:"bg-mars-900/70 border border-mars-700/40 rounded-lg p-3 space-y-2.5",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{className:"flex items-center space-x-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),M.jsx("span",{className:"text-xs font-mono font-medium text-slate-200",children:"OPTICAL IMAGERY (HiRISE/CTX)"})]}),M.jsxs("label",{className:"cursor-pointer text-[11px] font-mono px-2.5 py-1 rounded bg-mars-700 hover:bg-mars-600 text-cyan-300 border border-cyan-800/50 flex items-center space-x-1 transition",children:[M.jsx(Bp,{className:"w-3 h-3"}),M.jsx("span",{children:g==="imagery"?"Ingesting...":"Upload GeoTIFF"}),M.jsx("input",{type:"file",accept:".tif,.tiff,.geotiff",className:"hidden",onChange:L=>T(L,"imagery"),disabled:g!==null})]})]}),s?M.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] font-mono bg-black/40 rounded p-2 border border-mars-700/30",children:[M.jsxs("div",{children:[M.jsx("span",{className:"text-slate-400",children:"File: "}),M.jsx("span",{className:"text-white truncate block",children:s.filename})]}),M.jsxs("div",{children:[M.jsx("span",{className:"text-slate-400",children:"Dims: "}),M.jsxs("span",{className:"text-cyan-300",children:[s.metadata.width," × ",s.metadata.height," px (",s.metadata.bands,"b)"]})]}),M.jsxs("div",{className:"col-span-2",children:[M.jsx("span",{className:"text-slate-400",children:"CRS: "}),M.jsx("span",{className:"text-amber-300 truncate block",children:s.metadata.crs_name})]}),M.jsxs("div",{children:[M.jsx("span",{className:"text-slate-400",children:"Resolution: "}),M.jsxs("span",{className:"text-slate-200",children:[s.metadata.resolution_x.toFixed(2)," m/px"]})]}),M.jsxs("div",{children:[M.jsx("span",{className:"text-slate-400",children:"NoData: "}),M.jsx("span",{className:"text-slate-200",children:s.metadata.nodata??"None"})]})]}):M.jsx("div",{className:"text-xs text-slate-500 italic py-2 text-center",children:"No optical imagery loaded"})]}),M.jsxs("div",{className:"bg-mars-900/70 border border-mars-700/40 rounded-lg p-3 space-y-2.5",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{className:"flex items-center space-x-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400"}),M.jsx("span",{className:"text-xs font-mono font-medium text-slate-200",children:"DIGITAL ELEVATION MODEL (DEM)"})]}),M.jsxs("div",{className:"flex items-center space-x-2",children:[r&&n&&M.jsx("button",{onClick:()=>c((e==null?void 0:e.id)===r.id?n:r),className:`text-[10px] font-mono px-2 py-0.5 rounded border transition ${(e==null?void 0:e.id)===r.id?"bg-amber-950 text-amber-300 border-amber-600 font-bold":"bg-mars-700/70 hover:bg-mars-600 text-amber-300 border-amber-800/40"}`,title:(e==null?void 0:e.id)===r.id?"Click to restore aligned Primary Jezero DEM":"Click to test Offset DEM and observe incompatibility warning",children:(e==null?void 0:e.id)===r.id?"← Primary DEM":"Test Offset DEM"}),M.jsxs("label",{className:"cursor-pointer text-[11px] font-mono px-2.5 py-1 rounded bg-mars-700 hover:bg-mars-600 text-amber-300 border border-amber-800/50 flex items-center space-x-1 transition",children:[M.jsx(Bp,{className:"w-3 h-3"}),M.jsx("span",{children:g==="dem"?"Ingesting...":"Upload GeoTIFF"}),M.jsx("input",{type:"file",accept:".tif,.tiff,.geotiff",className:"hidden",onChange:L=>T(L,"dem"),disabled:g!==null})]})]})]}),e?M.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] font-mono bg-black/40 rounded p-2 border border-mars-700/30",children:[M.jsxs("div",{children:[M.jsx("span",{className:"text-slate-400",children:"File: "}),M.jsx("span",{className:"text-white truncate block",children:e.filename})]}),M.jsxs("div",{children:[M.jsx("span",{className:"text-slate-400",children:"Dims: "}),M.jsxs("span",{className:"text-amber-300",children:[e.metadata.width," × ",e.metadata.height," px"]})]}),M.jsxs("div",{className:"col-span-2",children:[M.jsx("span",{className:"text-slate-400",children:"CRS: "}),M.jsx("span",{className:"text-amber-300 truncate block",children:e.metadata.crs_name})]}),M.jsxs("div",{children:[M.jsx("span",{className:"text-slate-400",children:"Resolution: "}),M.jsxs("span",{className:"text-slate-200",children:[e.metadata.resolution_x.toFixed(2)," m/px"]})]}),M.jsxs("div",{children:[M.jsx("span",{className:"text-slate-400",children:"Elevation: "}),M.jsxs("span",{className:"text-emerald-400",children:[(v=e.metadata.min_val)==null?void 0:v.toFixed(0),"m to ",(N=e.metadata.max_val)==null?void 0:N.toFixed(0),"m"]})]})]}):M.jsx("div",{className:"text-xs text-slate-500 italic py-2 text-center",children:"No elevation DEM loaded"})]})]})},O_=({report:s,isValidating:e})=>{if(e)return M.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 flex items-center justify-center space-x-3 text-slate-400 text-xs font-mono",children:[M.jsx("span",{className:"w-4 h-4 border-2 border-mars-500 border-t-transparent rounded-full animate-spin"}),M.jsx("span",{children:"Evaluating planetary spatial compatibility & CRS alignment..."})]});if(!s)return M.jsx("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 text-center text-xs font-mono text-slate-500",children:"Load both Imagery and DEM rasters to run spatial compatibility inspection."});const{is_compatible:n,crs_match:r,overlap_metrics:o,resolution_ratio:c,warnings:u,errors:f,recommendations:h}=s;return M.jsxs("div",{className:`border rounded-xl p-4 space-y-3.5 transition ${n?"bg-mars-800/60 border-emerald-800/60":"bg-red-950/40 border-red-800/70"}`,children:[M.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-2.5",children:[M.jsxs("div",{className:"flex items-center space-x-2",children:[n?M.jsx(E_,{className:"w-5 h-5 text-emerald-400"}):M.jsx(zp,{className:"w-5 h-5 text-red-400"}),M.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Spatial Compatibility Verification"})]}),M.jsx("span",{className:`text-[11px] font-mono px-2.5 py-0.5 rounded font-bold ${n?"bg-emerald-950 text-emerald-300 border border-emerald-800":"bg-red-950 text-red-300 border border-red-800"}`,children:n?"VALIDATED COMPATIBLE":"INCOMPATIBILITY DETECTED"})]}),M.jsxs("div",{className:"grid grid-cols-3 gap-2 text-[11px] font-mono",children:[M.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[M.jsx("span",{className:"text-slate-400 block text-[10px]",children:"CRS ALIGNMENT"}),M.jsxs("div",{className:"flex items-center space-x-1.5 mt-0.5",children:[r?M.jsx(f_,{className:"w-3.5 h-3.5 text-emerald-400"}):M.jsx(C_,{className:"w-3.5 h-3.5 text-amber-400"}),M.jsx("span",{className:r?"text-emerald-300":"text-amber-300",children:r?"Matched":"Reprojection Req."})]})]}),M.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[M.jsx("span",{className:"text-slate-400 block text-[10px]",children:"SPATIAL OVERLAP"}),M.jsxs("span",{className:"text-cyan-300 font-bold block mt-0.5",children:[o.imagery_coverage_pct,"% / ",o.dem_coverage_pct,"%"]})]}),M.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[M.jsx("span",{className:"text-slate-400 block text-[10px]",children:"RESOLUTION RATIO"}),M.jsxs("span",{className:"text-slate-200 block mt-0.5",children:[c.toFixed(2),"x (DEM/Img)"]})]})]}),M.jsxs("div",{className:"space-y-1",children:[M.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-slate-400",children:[M.jsx("span",{children:"Imagery Spatial Footprint Covered by DEM:"}),M.jsxs("span",{className:"text-cyan-400",children:[o.imagery_coverage_pct,"%"]})]}),M.jsx("div",{className:"w-full bg-mars-950 rounded-full h-1.5 overflow-hidden border border-mars-700/40",children:M.jsx("div",{className:`h-full transition-all duration-500 ${o.imagery_coverage_pct>80?"bg-emerald-500":o.imagery_coverage_pct>20?"bg-amber-500":"bg-red-500"}`,style:{width:`${Math.min(100,o.imagery_coverage_pct)}%`}})})]}),f.length>0&&M.jsx("div",{className:"space-y-1",children:f.map((m,g)=>M.jsxs("div",{className:"text-[11px] font-mono text-red-300 flex items-start space-x-1.5 bg-red-950/60 p-2 rounded border border-red-900/60",children:[M.jsx(zp,{className:"w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5"}),M.jsx("span",{children:m})]},g))}),u.length>0&&M.jsx("div",{className:"space-y-1",children:u.map((m,g)=>M.jsxs("div",{className:"text-[11px] font-mono text-amber-300 flex items-start space-x-1.5 bg-amber-950/40 p-2 rounded border border-amber-900/40",children:[M.jsx(bl,{className:"w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5"}),M.jsx("span",{children:m})]},g))}),h.length>0&&M.jsx("div",{className:"space-y-1",children:h.map((m,g)=>M.jsxs("div",{className:"text-[11px] font-mono text-cyan-300 flex items-start space-x-1.5 bg-cyan-950/30 p-2 rounded border border-cyan-900/40",children:[M.jsx(__,{className:"w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5"}),M.jsxs("span",{children:["Rec: ",m]})]},g))})]})},k_=[{icon:"🟩",hazard:"Minimal",label:"Safe Bedrock"},{icon:"🟨",hazard:"Moderate",label:"Loose Sand / Dune"},{icon:"🟪",hazard:"Elevated",label:"Rocky Field / Boulders"},{icon:"🟥",hazard:"Lethal",label:"Steep Hazard / Cliff"},{icon:"⬛",hazard:"Unknown",label:"Shadow / Dropout"}],z_=({segmentationResult:s,isSegmenting:e,error:n,mcSamples:r,onMcSamplesChange:o,onRunSegmentation:c,canRun:u,activeLayer:f,onSelectLayer:h})=>{var w;const m=(s==null?void 0:s.class_distributions)??[],g=(s==null?void 0:s.inference_latency_ms)??null,_=(s==null?void 0:s.parameter_count)??null,y=m.filter(T=>T.class_id>=3).reduce((T,x)=>T+x.coverage_pct,0),S=((w=m.find(T=>T.class_id===0))==null?void 0:w.coverage_pct)??0;return M.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-4",children:[M.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-3",children:[M.jsxs("div",{className:"flex items-center space-x-2",children:[M.jsx(d_,{className:"w-4 h-4 text-violet-400"}),M.jsx("h2",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"AI Terrain Segmentation"}),M.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-violet-950 text-violet-300 border border-violet-800 font-mono",children:"MC-DROPOUT"})]}),_&&M.jsxs("span",{className:"text-[10px] font-mono text-slate-400 flex items-center space-x-1",children:[M.jsx(s0,{className:"w-3 h-3"}),M.jsxs("span",{children:[(_/1e3).toFixed(0),"K params"]})]})]}),M.jsxs("div",{className:"bg-black/40 rounded-lg p-2.5 border border-mars-700/30 text-[10px] font-mono space-y-1",children:[M.jsx("div",{className:"text-slate-400 font-semibold uppercase tracking-wide mb-1.5",children:"Multi-Modal U-Net Architecture"}),M.jsxs("div",{className:"grid grid-cols-2 gap-x-4 gap-y-0.5 text-slate-300",children:[M.jsxs("span",{children:["Inputs: ",M.jsx("strong",{className:"text-cyan-400",children:"6 channels"})]}),M.jsxs("span",{children:["Classes: ",M.jsx("strong",{className:"text-violet-400",children:"5 semantic"})]}),M.jsx("span",{className:"col-span-2 text-slate-400",children:"R, G, B + DEM height + Slope + TRI"})]})]}),M.jsxs("div",{className:"space-y-2.5",children:[M.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[M.jsx("span",{className:"text-slate-400",children:"MC Dropout Passes:"}),M.jsxs("div",{className:"flex items-center space-x-2",children:[M.jsx("input",{type:"range",min:3,max:15,step:1,value:r,onChange:T=>o(Number(T.target.value)),className:"w-20 accent-violet-500 cursor-pointer h-1.5 bg-mars-700 rounded-lg"}),M.jsx("span",{className:"text-violet-300 w-5",children:r})]})]}),M.jsx("button",{onClick:c,disabled:!u,className:`w-full py-2.5 rounded-lg font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition border ${u?"bg-gradient-to-r from-violet-700 to-indigo-700 hover:from-violet-600 hover:to-indigo-600 text-white border-violet-500/50 shadow-lg shadow-violet-950":"bg-mars-800 text-slate-500 border-mars-700 cursor-not-allowed"}`,children:e?M.jsxs(M.Fragment,{children:[M.jsx("span",{className:"w-3.5 h-3.5 border-2 border-violet-300 border-t-transparent rounded-full animate-spin"}),M.jsx("span",{children:"Running MC Dropout Inference..."})]}):M.jsxs(M.Fragment,{children:[M.jsx(g0,{className:"w-3.5 h-3.5 fill-current"}),M.jsx("span",{children:"Run Terrain Segmentation"})]})}),n&&M.jsxs("div",{className:"text-[10px] font-mono text-red-400 flex items-start space-x-1.5 bg-red-950/40 p-2 rounded border border-red-800/40",children:[M.jsx(bl,{className:"w-3.5 h-3.5 flex-shrink-0 mt-0.5"}),M.jsx("span",{children:n})]}),!u&&!e&&!n&&M.jsxs("div",{className:"text-[10px] font-mono text-amber-400 flex items-center space-x-1.5 bg-amber-950/40 p-2 rounded border border-amber-800/40",children:[M.jsx(bl,{className:"w-3.5 h-3.5 flex-shrink-0"}),M.jsx("span",{children:"Load both Imagery and DEM datasets to enable segmentation"})]})]}),s&&M.jsxs("div",{className:"space-y-2",children:[M.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-slate-400 bg-black/40 rounded px-2 py-1 border border-mars-700/30",children:[M.jsxs("span",{className:"flex items-center space-x-1",children:[M.jsx(Fp,{className:"w-3 h-3"}),M.jsx("span",{children:"Inference Latency"})]}),M.jsxs("span",{className:`font-bold ${g<500?"text-emerald-400":g<1500?"text-amber-400":"text-red-400"}`,children:[g.toFixed(0)," ms"]})]}),h&&M.jsxs("div",{className:"flex items-center space-x-1 bg-mars-950/80 rounded-lg p-0.5 border border-mars-700/40 text-xs font-mono",children:[M.jsxs("button",{onClick:()=>h("segmentation"),className:`flex-1 px-2 py-1.5 rounded flex items-center justify-center space-x-1.5 transition ${f==="segmentation"?"bg-violet-800 text-white font-bold ring-1 ring-violet-500":"text-slate-400 hover:text-slate-200"}`,children:[M.jsx(d0,{className:"w-3 h-3 text-violet-400"}),M.jsx("span",{children:"AI Seg Map"})]}),M.jsxs("button",{onClick:()=>h("uncertainty"),className:`flex-1 px-2 py-1.5 rounded flex items-center justify-center space-x-1.5 transition ${f==="uncertainty"?"bg-cyan-900 text-white font-bold ring-1 ring-cyan-500":"text-slate-400 hover:text-slate-200"}`,children:[M.jsx(Fp,{className:"w-3 h-3 text-cyan-400"}),M.jsx("span",{children:"Epistemic σ²"})]})]})]}),m.length>0&&M.jsxs("div",{className:"space-y-2",children:[M.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1 border-b border-mars-700/40",children:[M.jsx("span",{className:"font-semibold uppercase tracking-wide",children:"Terrain Class Coverage"}),M.jsxs("span",{className:`${y>30?"text-red-400":y>15?"text-amber-400":"text-emerald-400"}`,children:[y.toFixed(1),"% hazardous"]})]}),m.map(T=>{const x=k_[T.class_id]??{hazard:"Unknown",label:T.class_name},v=`rgb(${T.color_rgb[0]}, ${T.color_rgb[1]}, ${T.color_rgb[2]})`;return M.jsxs("div",{className:"space-y-0.5",children:[M.jsxs("div",{className:"flex justify-between items-center text-[10px] font-mono",children:[M.jsxs("div",{className:"flex items-center space-x-1.5",children:[M.jsx("span",{className:"w-2.5 h-2.5 rounded-sm flex-shrink-0",style:{backgroundColor:v}}),M.jsx("span",{className:"text-slate-300",children:T.class_name}),M.jsx("span",{className:`px-1.5 py-0 rounded text-[9px] ${x.hazard==="Lethal"?"bg-red-950 text-red-400":x.hazard==="Unknown"?"bg-slate-800 text-slate-400":x.hazard==="Elevated"?"bg-orange-950 text-orange-400":x.hazard==="Moderate"?"bg-amber-950 text-amber-400":"bg-emerald-950 text-emerald-400"} border border-opacity-30`,children:x.hazard})]}),M.jsxs("span",{className:"text-white font-bold",children:[T.coverage_pct.toFixed(1),"%"]})]}),M.jsx("div",{className:"w-full bg-mars-950 rounded-full h-1 overflow-hidden border border-mars-700/30",children:M.jsx("div",{className:"h-full rounded-full transition-all duration-700",style:{width:`${Math.min(100,T.coverage_pct)}%`,backgroundColor:v}})})]},T.class_id)}),M.jsxs("div",{className:"mt-2 bg-black/40 rounded-lg p-2.5 border border-mars-700/30",children:[M.jsxs("div",{className:"flex justify-between items-center text-[11px] font-mono",children:[M.jsx("span",{className:"text-slate-400",children:"Safe Traversability Index"}),M.jsxs("span",{className:`text-xl font-bold ${S>60?"text-emerald-400":S>35?"text-amber-400":"text-red-400"}`,children:[S.toFixed(0),"%"]})]}),M.jsx("div",{className:"w-full bg-mars-950 rounded-full h-2 overflow-hidden mt-1.5 border border-mars-700/40",children:M.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-emerald-700 to-emerald-400 transition-all duration-700",style:{width:`${S}%`}})})]})]})]})},B_=({imageryUrl:s,demColormapUrl:e,slopeUrl:n,costmapUrl:r,segmentationUrl:o,uncertaintyUrl:c,activeLayer:u,onSelectLayer:f,pathCoords:h,exploredNodes:m,scienceTargets:g,startCoords:_,goalCoords:y,onSetStart:S,onSetGoal:w,ThreeDViewer:T})=>{var z;const[x,v]=He.useState("imagery"),N=u??x,L=f??v,[b,G]=He.useState("split"),[O,U]=He.useState("goal"),[k,P]=He.useState(null),[A,B]=He.useState(!1),V=He.useRef(null),X=[{key:"imagery",label:"Optical",url:s,color:"text-cyan-300"},{key:"dem",label:"DEM",url:e,color:"text-amber-300"},{key:"slope",label:"Slope",url:n,color:"text-rose-300"},{key:"costmap",label:"Costmap",url:r,color:"text-emerald-300"},{key:"segmentation",label:"AI Seg",url:o,color:"text-violet-300"},{key:"uncertainty",label:"Uncertainty σ²",url:c,color:"text-cyan-300"}],oe=((z=X.find(j=>j.key===N))==null?void 0:z.url)||s||e,se=j=>{if(!V.current)return;const J=V.current.getBoundingClientRect(),I=Math.round((j.clientX-J.left)/J.width*512),re=Math.round((j.clientY-J.top)/J.height*512),Te=[Math.max(0,Math.min(511,re)),Math.max(0,Math.min(511,I))];O==="start"?S(Te):w(Te)},ee=j=>{if(!V.current)return;const J=V.current.getBoundingClientRect(),I=Math.round((j.clientX-J.left)/J.width*512),re=Math.round((j.clientY-J.top)/J.height*512);P({x:Math.max(0,Math.min(511,I)),y:Math.max(0,Math.min(511,re))})},ne=j=>({x:j[1]/512*100,y:j[0]/512*100});return M.jsxs("div",{className:"flex flex-col h-full space-y-3",children:[M.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl px-3 py-2 flex items-center justify-between gap-2 flex-wrap",children:[M.jsx("div",{className:"flex items-center space-x-1 bg-mars-950/80 rounded-lg p-0.5 border border-mars-700/50 text-[11px] font-mono",children:X.map(j=>M.jsx("button",{onClick:()=>j.url&&L(j.key),disabled:!j.url,title:j.url?`Switch to ${j.label} layer`:"Layer not yet generated",className:`px-2 py-0.5 rounded whitespace-nowrap transition ${N===j.key&&j.url?`bg-mars-700 ${j.color} font-bold ring-1 ring-mars-500`:j.url?"text-slate-400 hover:text-slate-200 hover:bg-mars-800/50":"text-slate-600 cursor-not-allowed opacity-40"}`,children:j.label},j.key))}),M.jsxs("div",{className:"flex items-center space-x-1.5 text-[11px] font-mono",children:[M.jsx("span",{className:"text-slate-500 text-[10px] hidden sm:inline",children:"Click to set:"}),M.jsxs("button",{onClick:()=>U("start"),className:`px-2 py-0.5 rounded border flex items-center space-x-1 transition text-[11px] ${O==="start"?"bg-emerald-950 text-emerald-300 border-emerald-700 font-bold ring-1 ring-emerald-500":"bg-mars-900 text-slate-400 border-mars-700 hover:border-mars-500"}`,children:[M.jsx(x_,{className:"w-3 h-3 text-emerald-400"}),M.jsx("span",{children:"Start"})]}),M.jsxs("button",{onClick:()=>U("goal"),className:`px-2 py-0.5 rounded border flex items-center space-x-1 transition text-[11px] ${O==="goal"?"bg-cyan-950 text-cyan-300 border-cyan-700 font-bold ring-1 ring-cyan-500":"bg-mars-900 text-slate-400 border-mars-700 hover:border-mars-500"}`,children:[M.jsx(A_,{className:"w-3 h-3 text-cyan-400"}),M.jsx("span",{children:"Goal"})]})]}),M.jsx("div",{className:"flex items-center space-x-1 bg-mars-950/80 rounded-lg p-0.5 border border-mars-700/50 text-[11px] font-mono",children:["split","2d","3d"].map(j=>M.jsxs("button",{onClick:()=>G(j),className:`px-2 py-0.5 rounded flex items-center space-x-1 transition ${b===j?"bg-mars-700 text-white font-bold":"text-slate-400 hover:text-slate-200"}`,children:[j==="split"?M.jsx(m_,{className:"w-3 h-3"}):j==="2d"?M.jsx(Op,{className:"w-3 h-3"}):M.jsx(Km,{className:"w-3 h-3"}),M.jsx("span",{children:j==="split"?"Split":j.toUpperCase()})]},j))})]}),M.jsxs("div",{className:`grid gap-3 flex-1 ${b==="split"?"grid-cols-1 md:grid-cols-2":"grid-cols-1"}`,children:[(b==="split"||b==="2d")&&M.jsxs("div",{className:"bg-mars-900 rounded-xl border border-mars-700/60 overflow-hidden flex flex-col min-h-[480px]",children:[M.jsxs("div",{className:"bg-mars-800/80 px-4 py-2 border-b border-mars-700/50 flex items-center justify-between text-xs font-mono",children:[M.jsxs("div",{className:"flex items-center space-x-2 text-slate-300",children:[M.jsx(Op,{className:"w-4 h-4 text-cyan-400"}),M.jsx("span",{className:"font-semibold text-white",children:"2D TACTICAL ORBITAL MAP"}),M.jsx("span",{className:"text-[10px] text-cyan-400 bg-cyan-950/70 px-1.5 py-0.5 rounded border border-cyan-800/60 uppercase",children:N})]}),M.jsxs("span",{className:"text-[10px] text-slate-400",children:["Mode: ",M.jsx("strong",{className:O==="start"?"text-emerald-400":"text-cyan-400",children:O.toUpperCase()})]})]}),M.jsxs("div",{className:"relative flex-1 bg-black select-none flex items-center justify-center overflow-hidden p-2",children:[oe?M.jsxs("div",{ref:V,onClick:se,onMouseMove:ee,onMouseLeave:()=>P(null),className:"relative w-full h-full max-w-[550px] max-h-[550px] aspect-square mx-auto cursor-crosshair border border-mars-800",children:[M.jsx("img",{src:oe,alt:"Martian terrain layer",className:"w-full h-full object-contain pointer-events-none select-none",onLoad:()=>B(!1),onError:()=>B(!0)},oe),A&&M.jsxs("div",{className:"absolute inset-0 bg-mars-950/80 flex flex-col items-center justify-center p-4 text-center space-y-1.5 text-xs font-mono text-amber-300",children:[M.jsx("span",{children:"⚠️ Rendering layer preview..."}),M.jsx("span",{className:"text-[10px] text-slate-400",children:"Communicating with backend raster server"})]}),M.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[m&&m.map((j,J)=>{const I=ne(j);return M.jsx("circle",{cx:I.x,cy:I.y,r:"0.5",fill:"#34d399",opacity:"0.25"},J)}),h.length>1&&M.jsx("polyline",{points:h.map(j=>`${ne(j).x},${ne(j).y}`).join(" "),fill:"none",stroke:"#10b981",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round",className:"filter drop-shadow-[0_0_4px_#10b981]"}),_&&(()=>{const j=ne(_);return M.jsxs("g",{transform:`translate(${j.x},${j.y})`,children:[M.jsx("circle",{r:"2.4",fill:"#10b981",stroke:"#fff",strokeWidth:"0.6"}),M.jsx("circle",{r:"4.5",fill:"none",stroke:"#10b981",strokeWidth:"0.5",strokeDasharray:"1.5 1.5"}),M.jsx("text",{y:"-3.5",fontSize:"2.8",fill:"#10b981",textAnchor:"middle",fontWeight:"bold",children:"ROVER"})]})})(),y&&(()=>{const j=ne(y);return M.jsxs("g",{transform:`translate(${j.x},${j.y})`,children:[M.jsx("circle",{r:"2.4",fill:"#00d2ff",stroke:"#fff",strokeWidth:"0.6"}),M.jsx("circle",{r:"4.5",fill:"none",stroke:"#00d2ff",strokeWidth:"0.5",strokeDasharray:"1.5 1.5"}),M.jsx("text",{y:"-3.5",fontSize:"2.8",fill:"#00d2ff",textAnchor:"middle",fontWeight:"bold",children:"GOAL"})]})})(),g.map(j=>{const J=ne(j.coords_pixel);return M.jsxs("g",{transform:`translate(${J.x},${J.y})`,onClick:I=>{I.stopPropagation(),w(j.coords_pixel)},className:"cursor-pointer pointer-events-auto hover:opacity-80",children:[M.jsx("polygon",{points:"0,-3.2 3.2,2.2 -3.2,2.2",fill:"#f59e0b",stroke:"#fff",strokeWidth:"0.4"}),M.jsx("text",{y:"5.0",fontSize:"2.2",fill:"#f59e0b",textAnchor:"middle",fontWeight:"bold",children:j.id.split("-").pop()})]},j.id)})]})]}):M.jsxs("div",{className:"flex flex-col items-center space-y-2 text-slate-600",children:[M.jsx(v_,{className:"w-10 h-10"}),M.jsx("span",{className:"text-xs font-mono",children:"No terrain raster loaded"})]}),M.jsxs("div",{className:"absolute bottom-2 left-2 bg-mars-950/90 backdrop-blur border border-mars-700/50 rounded px-2.5 py-1 text-[10px] font-mono text-slate-300 flex items-center space-x-3 pointer-events-none",children:[M.jsxs("span",{className:"flex items-center space-x-1",children:[M.jsx(g_,{className:"w-3 h-3 text-mars-400"}),M.jsxs("span",{children:["X:",(k==null?void 0:k.x)??"--"," Y:",(k==null?void 0:k.y)??"--"]})]}),M.jsx("span",{className:"text-slate-500",children:"|"}),M.jsxs("span",{className:"text-emerald-400",children:["R:[",_[0],",",_[1],"]"]}),M.jsxs("span",{className:"text-cyan-400",children:["G:[",y[0],",",y[1],"]"]})]})]})]}),(b==="split"||b==="3d")&&M.jsx("div",{className:"min-h-[480px] flex flex-col",children:T})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wd="170",H_=0,Hp=1,V_=2,R0=1,P0=2,ki=3,Sr=0,Dn=1,zi=2,xr=0,ks=1,Vp=2,Gp=3,Wp=4,G_=5,Xr=100,W_=101,j_=102,X_=103,$_=104,q_=200,Y_=201,K_=202,Z_=203,nd=204,id=205,Q_=206,J_=207,ex=208,tx=209,nx=210,ix=211,rx=212,sx=213,ax=214,rd=0,sd=1,ad=2,Hs=3,od=4,ld=5,cd=6,ud=7,N0=0,ox=1,lx=2,yr=0,cx=1,ux=2,dx=3,fx=4,hx=5,px=6,mx=7,L0=300,Vs=301,Gs=302,dd=303,fd=304,Dl=306,hd=1e3,Bi=1001,pd=1002,di=1003,gx=1004,Qo=1005,xi=1006,Mu=1007,qr=1008,Wi=1009,D0=1010,I0=1011,Oa=1012,jd=1013,Yr=1014,Hi=1015,za=1016,Xd=1017,$d=1018,Ws=1020,U0=35902,F0=1021,O0=1022,ui=1023,k0=1024,z0=1025,zs=1026,js=1027,B0=1028,qd=1029,H0=1030,Yd=1031,Kd=1033,Sl=33776,Ml=33777,El=33778,wl=33779,md=35840,gd=35841,vd=35842,_d=35843,xd=36196,yd=37492,Sd=37496,Md=37808,Ed=37809,wd=37810,Td=37811,Ad=37812,bd=37813,Cd=37814,Rd=37815,Pd=37816,Nd=37817,Ld=37818,Dd=37819,Id=37820,Ud=37821,Tl=36492,Fd=36494,Od=36495,V0=36283,kd=36284,zd=36285,Bd=36286,vx=3200,_x=3201,G0=0,xx=1,_r="",Kn="srgb",$s="srgb-linear",Il="linear",Nt="srgb",Ms=7680,jp=519,yx=512,Sx=513,Mx=514,W0=515,Ex=516,wx=517,Tx=518,Ax=519,Xp=35044,$p="300 es",Vi=2e3,Cl=2001;class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eu=Math.PI/180,Hd=180/Math.PI;function Ba(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function Nn(s,e,n){return Math.max(e,Math.min(n,s))}function bx(s,e){return(s%e+e)%e}function wu(s,e,n){return(1-n)*s+n*e}function Ra(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,n=0){_t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,o,c,u,f,h,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,h,m)}set(e,n,r,o,c,u,f,h,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=n,g[4]=c,g[5]=h,g[6]=r,g[7]=u,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[3],h=r[6],m=r[1],g=r[4],_=r[7],y=r[2],S=r[5],w=r[8],T=o[0],x=o[3],v=o[6],N=o[1],L=o[4],b=o[7],G=o[2],O=o[5],U=o[8];return c[0]=u*T+f*N+h*G,c[3]=u*x+f*L+h*O,c[6]=u*v+f*b+h*U,c[1]=m*T+g*N+_*G,c[4]=m*x+g*L+_*O,c[7]=m*v+g*b+_*U,c[2]=y*T+S*N+w*G,c[5]=y*x+S*L+w*O,c[8]=y*v+S*b+w*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8];return n*u*g-n*f*m-r*c*g+r*f*h+o*c*m-o*u*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8],_=g*u-f*m,y=f*h-g*c,S=m*c-u*h,w=n*_+r*y+o*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=_*T,e[1]=(o*m-g*r)*T,e[2]=(f*r-o*u)*T,e[3]=y*T,e[4]=(g*n-o*h)*T,e[5]=(o*c-f*n)*T,e[6]=S*T,e[7]=(r*h-m*n)*T,e[8]=(u*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,f){const h=Math.cos(c),m=Math.sin(c);return this.set(r*h,r*m,-r*(h*u+m*f)+u+e,-o*m,o*h,-o*(-m*u+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Tu.makeScale(e,n)),this}rotate(e){return this.premultiply(Tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Tu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tu=new ot;function j0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ka(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cx(){const s=ka("canvas");return s.style.display="block",s}const qp={};function Ua(s){s in qp||(qp[s]=!0,console.warn(s))}function Rx(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function Px(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Nx(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Nt&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Nt&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_r?Il:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Yp=[.64,.33,.3,.6,.15,.06],Kp=[.2126,.7152,.0722],Zp=[.3127,.329],Qp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[$s]:{primaries:Yp,whitePoint:Zp,transfer:Il,toXYZ:Qp,fromXYZ:Jp,luminanceCoefficients:Kp,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:Yp,whitePoint:Zp,transfer:Nt,toXYZ:Qp,fromXYZ:Jp,luminanceCoefficients:Kp,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let Es;class Lx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=ka("canvas")),Es.width=e.width,Es.height=e.height;const r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ka("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Gi(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Gi(n[r]/255)*255):n[r]=Gi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dx=0;class X0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Ba(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(Au(o[u].image)):c.push(Au(o[u]))}else c=Au(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Au(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Lx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ix=0;class Sn extends qs{constructor(e=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,r=Bi,o=Bi,c=xi,u=qr,f=ui,h=Wi,m=Sn.DEFAULT_ANISOTROPY,g=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=Ba(),this.name="",this.source=new X0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hd:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hd:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=L0;Sn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,r=0,o=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const h=e.elements,m=h[0],g=h[4],_=h[8],y=h[1],S=h[5],w=h[9],T=h[2],x=h[6],v=h[10];if(Math.abs(g-y)<.01&&Math.abs(_-T)<.01&&Math.abs(w-x)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+T)<.1&&Math.abs(w+x)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,b=(S+1)/2,G=(v+1)/2,O=(g+y)/4,U=(_+T)/4,k=(w+x)/4;return L>b&&L>G?L<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(L),o=O/r,c=U/r):b>G?b<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(b),r=O/o,c=k/o):G<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(G),r=U/c,o=k/c),this.set(r,o,c,n),this}let N=Math.sqrt((x-w)*(x-w)+(_-T)*(_-T)+(y-g)*(y-g));return Math.abs(N)<.001&&(N=1),this.x=(x-w)/N,this.y=(_-T)/N,this.z=(y-g)/N,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ux extends qs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Sn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new X0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends Ux{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class $0 extends Sn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fx extends Sn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ha{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,f){let h=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];const y=c[u+0],S=c[u+1],w=c[u+2],T=c[u+3];if(f===0){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=_;return}if(f===1){e[n+0]=y,e[n+1]=S,e[n+2]=w,e[n+3]=T;return}if(_!==T||h!==y||m!==S||g!==w){let x=1-f;const v=h*y+m*S+g*w+_*T,N=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const G=Math.sqrt(L),O=Math.atan2(G,v*N);x=Math.sin(x*O)/G,f=Math.sin(f*O)/G}const b=f*N;if(h=h*x+y*b,m=m*x+S*b,g=g*x+w*b,_=_*x+T*b,x===1-f){const G=1/Math.sqrt(h*h+m*m+g*g+_*_);h*=G,m*=G,g*=G,_*=G}}e[n]=h,e[n+1]=m,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,c,u){const f=r[o],h=r[o+1],m=r[o+2],g=r[o+3],_=c[u],y=c[u+1],S=c[u+2],w=c[u+3];return e[n]=f*w+g*_+h*S-m*y,e[n+1]=h*w+g*y+m*_-f*S,e[n+2]=m*w+g*S+f*y-h*_,e[n+3]=g*w-f*_-h*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,f=Math.cos,h=Math.sin,m=f(r/2),g=f(o/2),_=f(c/2),y=h(r/2),S=h(o/2),w=h(c/2);switch(u){case"XYZ":this._x=y*g*_+m*S*w,this._y=m*S*_-y*g*w,this._z=m*g*w+y*S*_,this._w=m*g*_-y*S*w;break;case"YXZ":this._x=y*g*_+m*S*w,this._y=m*S*_-y*g*w,this._z=m*g*w-y*S*_,this._w=m*g*_+y*S*w;break;case"ZXY":this._x=y*g*_-m*S*w,this._y=m*S*_+y*g*w,this._z=m*g*w+y*S*_,this._w=m*g*_-y*S*w;break;case"ZYX":this._x=y*g*_-m*S*w,this._y=m*S*_+y*g*w,this._z=m*g*w-y*S*_,this._w=m*g*_+y*S*w;break;case"YZX":this._x=y*g*_+m*S*w,this._y=m*S*_+y*g*w,this._z=m*g*w-y*S*_,this._w=m*g*_-y*S*w;break;case"XZY":this._x=y*g*_-m*S*w,this._y=m*S*_-y*g*w,this._z=m*g*w+y*S*_,this._w=m*g*_+y*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],f=n[5],h=n[9],m=n[2],g=n[6],_=n[10],y=r+f+_;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-h)*S,this._y=(c-m)*S,this._z=(u-o)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(g-h)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+m)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(c-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(u-o)/S,this._x=(c+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,f=n._x,h=n._y,m=n._z,g=n._w;return this._x=r*g+u*f+o*m-c*h,this._y=o*g+u*h+c*f-r*m,this._z=c*g+u*m+r*h-o*f,this._w=u*g-r*f-o*h-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,u=this._w;let f=u*e._w+r*e._x+o*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=o,this._z=c,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,f),_=Math.sin((1-n)*g)/m,y=Math.sin(n*g)/m;return this._w=u*_+this._w*y,this._x=r*_+this._x*y,this._y=o*_+this._y*y,this._z=c*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,n=0,r=0){ie.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(em.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(em.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,f=e.z,h=e.w,m=2*(u*o-f*r),g=2*(f*n-c*o),_=2*(c*r-u*n);return this.x=n+h*m+u*_-f*g,this.y=r+h*g+f*m-c*_,this.z=o+h*_+c*g-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,f=n.y,h=n.z;return this.x=o*h-c*f,this.y=c*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bu=new ie,em=new Ha;class Va{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ai):ai.fromBufferAttribute(c,u),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Jo.copy(r.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),el.subVectors(this.max,Pa),ws.subVectors(e.a,Pa),Ts.subVectors(e.b,Pa),As.subVectors(e.c,Pa),fr.subVectors(Ts,ws),hr.subVectors(As,Ts),kr.subVectors(ws,As);let n=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-kr.z,kr.y,fr.z,0,-fr.x,hr.z,0,-hr.x,kr.z,0,-kr.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-kr.y,kr.x,0];return!Cu(n,ws,Ts,As,el)||(n=[1,0,0,0,1,0,0,0,1],!Cu(n,ws,Ts,As,el))?!1:(tl.crossVectors(fr,hr),n=[tl.x,tl.y,tl.z],Cu(n,ws,Ts,As,el))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],ai=new ie,Jo=new Va,ws=new ie,Ts=new ie,As=new ie,fr=new ie,hr=new ie,kr=new ie,Pa=new ie,el=new ie,tl=new ie,zr=new ie;function Cu(s,e,n,r,o){for(let c=0,u=s.length-3;c<=u;c+=3){zr.fromArray(s,c);const f=o.x*Math.abs(zr.x)+o.y*Math.abs(zr.y)+o.z*Math.abs(zr.z),h=e.dot(zr),m=n.dot(zr),g=r.dot(zr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>f)return!1}return!0}const Ox=new Va,Na=new ie,Ru=new ie;class Ul{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Ox.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const n=Na.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Na,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(Ru)),this.expandByPoint(Na.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new ie,Pu=new ie,nl=new ie,pr=new ie,Nu=new ie,il=new ie,Lu=new ie;class q0{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Pu.copy(e).add(n).multiplyScalar(.5),nl.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(Pu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(nl),f=pr.dot(this.direction),h=-pr.dot(nl),m=pr.lengthSq(),g=Math.abs(1-u*u);let _,y,S,w;if(g>0)if(_=u*h-f,y=u*f-h,w=c*g,_>=0)if(y>=-w)if(y<=w){const T=1/g;_*=T,y*=T,S=_*(_+u*y+2*f)+y*(u*_+y+2*h)+m}else y=c,_=Math.max(0,-(u*y+f)),S=-_*_+y*(y+2*h)+m;else y=-c,_=Math.max(0,-(u*y+f)),S=-_*_+y*(y+2*h)+m;else y<=-w?(_=Math.max(0,-(-u*c+f)),y=_>0?-c:Math.min(Math.max(-c,-h),c),S=-_*_+y*(y+2*h)+m):y<=w?(_=0,y=Math.min(Math.max(-c,-h),c),S=y*(y+2*h)+m):(_=Math.max(0,-(u*c+f)),y=_>0?c:Math.min(Math.max(-c,-h),c),S=-_*_+y*(y+2*h)+m);else y=u>0?-c:c,_=Math.max(0,-(u*y+f)),S=-_*_+y*(y+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Pu).addScaledVector(nl,y),S}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),o=Ii.dot(Ii)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,f,h;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),g>=0?(c=(e.min.y-y.y)*g,u=(e.max.y-y.y)*g):(c=(e.max.y-y.y)*g,u=(e.min.y-y.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(f=(e.min.z-y.z)*_,h=(e.max.z-y.z)*_):(f=(e.max.z-y.z)*_,h=(e.min.z-y.z)*_),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,o,c){Nu.subVectors(n,e),il.subVectors(r,e),Lu.crossVectors(Nu,il);let u=this.direction.dot(Lu),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;pr.subVectors(this.origin,e);const h=f*this.direction.dot(il.crossVectors(pr,il));if(h<0)return null;const m=f*this.direction.dot(Nu.cross(pr));if(m<0||h+m>u)return null;const g=-f*pr.dot(Lu);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,o,c,u,f,h,m,g,_,y,S,w,T,x){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,h,m,g,_,y,S,w,T,x)}set(e,n,r,o,c,u,f,h,m,g,_,y,S,w,T,x){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=c,v[5]=u,v[9]=f,v[13]=h,v[2]=m,v[6]=g,v[10]=_,v[14]=y,v[3]=S,v[7]=w,v[11]=T,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/bs.setFromMatrixColumn(e,0).length(),c=1/bs.setFromMatrixColumn(e,1).length(),u=1/bs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),m=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const y=u*g,S=u*_,w=f*g,T=f*_;n[0]=h*g,n[4]=-h*_,n[8]=m,n[1]=S+w*m,n[5]=y-T*m,n[9]=-f*h,n[2]=T-y*m,n[6]=w+S*m,n[10]=u*h}else if(e.order==="YXZ"){const y=h*g,S=h*_,w=m*g,T=m*_;n[0]=y+T*f,n[4]=w*f-S,n[8]=u*m,n[1]=u*_,n[5]=u*g,n[9]=-f,n[2]=S*f-w,n[6]=T+y*f,n[10]=u*h}else if(e.order==="ZXY"){const y=h*g,S=h*_,w=m*g,T=m*_;n[0]=y-T*f,n[4]=-u*_,n[8]=w+S*f,n[1]=S+w*f,n[5]=u*g,n[9]=T-y*f,n[2]=-u*m,n[6]=f,n[10]=u*h}else if(e.order==="ZYX"){const y=u*g,S=u*_,w=f*g,T=f*_;n[0]=h*g,n[4]=w*m-S,n[8]=y*m+T,n[1]=h*_,n[5]=T*m+y,n[9]=S*m-w,n[2]=-m,n[6]=f*h,n[10]=u*h}else if(e.order==="YZX"){const y=u*h,S=u*m,w=f*h,T=f*m;n[0]=h*g,n[4]=T-y*_,n[8]=w*_+S,n[1]=_,n[5]=u*g,n[9]=-f*g,n[2]=-m*g,n[6]=S*_+w,n[10]=y-T*_}else if(e.order==="XZY"){const y=u*h,S=u*m,w=f*h,T=f*m;n[0]=h*g,n[4]=-_,n[8]=m*g,n[1]=y*_+T,n[5]=u*g,n[9]=S*_-w,n[2]=w*_-S,n[6]=f*g,n[10]=T*_+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kx,e,zx)}lookAt(e,n,r){const o=this.elements;return kn.subVectors(e,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),mr.crossVectors(r,kn),mr.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),mr.crossVectors(r,kn)),mr.normalize(),rl.crossVectors(kn,mr),o[0]=mr.x,o[4]=rl.x,o[8]=kn.x,o[1]=mr.y,o[5]=rl.y,o[9]=kn.y,o[2]=mr.z,o[6]=rl.z,o[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[4],h=r[8],m=r[12],g=r[1],_=r[5],y=r[9],S=r[13],w=r[2],T=r[6],x=r[10],v=r[14],N=r[3],L=r[7],b=r[11],G=r[15],O=o[0],U=o[4],k=o[8],P=o[12],A=o[1],B=o[5],V=o[9],X=o[13],oe=o[2],se=o[6],ee=o[10],ne=o[14],z=o[3],j=o[7],J=o[11],I=o[15];return c[0]=u*O+f*A+h*oe+m*z,c[4]=u*U+f*B+h*se+m*j,c[8]=u*k+f*V+h*ee+m*J,c[12]=u*P+f*X+h*ne+m*I,c[1]=g*O+_*A+y*oe+S*z,c[5]=g*U+_*B+y*se+S*j,c[9]=g*k+_*V+y*ee+S*J,c[13]=g*P+_*X+y*ne+S*I,c[2]=w*O+T*A+x*oe+v*z,c[6]=w*U+T*B+x*se+v*j,c[10]=w*k+T*V+x*ee+v*J,c[14]=w*P+T*X+x*ne+v*I,c[3]=N*O+L*A+b*oe+G*z,c[7]=N*U+L*B+b*se+G*j,c[11]=N*k+L*V+b*ee+G*J,c[15]=N*P+L*X+b*ne+G*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],f=e[5],h=e[9],m=e[13],g=e[2],_=e[6],y=e[10],S=e[14],w=e[3],T=e[7],x=e[11],v=e[15];return w*(+c*h*_-o*m*_-c*f*y+r*m*y+o*f*S-r*h*S)+T*(+n*h*S-n*m*y+c*u*y-o*u*S+o*m*g-c*h*g)+x*(+n*m*_-n*f*S-c*u*_+r*u*S+c*f*g-r*m*g)+v*(-o*f*g-n*h*_+n*f*y+o*u*_-r*u*y+r*h*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8],_=e[9],y=e[10],S=e[11],w=e[12],T=e[13],x=e[14],v=e[15],N=_*x*m-T*y*m+T*h*S-f*x*S-_*h*v+f*y*v,L=w*y*m-g*x*m-w*h*S+u*x*S+g*h*v-u*y*v,b=g*T*m-w*_*m+w*f*S-u*T*S-g*f*v+u*_*v,G=w*_*h-g*T*h-w*f*y+u*T*y+g*f*x-u*_*x,O=n*N+r*L+o*b+c*G;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return e[0]=N*U,e[1]=(T*y*c-_*x*c-T*o*S+r*x*S+_*o*v-r*y*v)*U,e[2]=(f*x*c-T*h*c+T*o*m-r*x*m-f*o*v+r*h*v)*U,e[3]=(_*h*c-f*y*c-_*o*m+r*y*m+f*o*S-r*h*S)*U,e[4]=L*U,e[5]=(g*x*c-w*y*c+w*o*S-n*x*S-g*o*v+n*y*v)*U,e[6]=(w*h*c-u*x*c-w*o*m+n*x*m+u*o*v-n*h*v)*U,e[7]=(u*y*c-g*h*c+g*o*m-n*y*m-u*o*S+n*h*S)*U,e[8]=b*U,e[9]=(w*_*c-g*T*c-w*r*S+n*T*S+g*r*v-n*_*v)*U,e[10]=(u*T*c-w*f*c+w*r*m-n*T*m-u*r*v+n*f*v)*U,e[11]=(g*f*c-u*_*c-g*r*m+n*_*m+u*r*S-n*f*S)*U,e[12]=G*U,e[13]=(g*T*o-w*_*o+w*r*y-n*T*y-g*r*x+n*_*x)*U,e[14]=(w*f*o-u*T*o-w*r*h+n*T*h+u*r*x-n*f*x)*U,e[15]=(u*_*o-g*f*o+g*r*h-n*_*h-u*r*y+n*f*y)*U,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,f=e.y,h=e.z,m=c*u,g=c*f;return this.set(m*u+r,m*f-o*h,m*h+o*f,0,m*f+o*h,g*f+r,g*h-o*u,0,m*h-o*f,g*h+o*u,c*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,f=n._z,h=n._w,m=c+c,g=u+u,_=f+f,y=c*m,S=c*g,w=c*_,T=u*g,x=u*_,v=f*_,N=h*m,L=h*g,b=h*_,G=r.x,O=r.y,U=r.z;return o[0]=(1-(T+v))*G,o[1]=(S+b)*G,o[2]=(w-L)*G,o[3]=0,o[4]=(S-b)*O,o[5]=(1-(y+v))*O,o[6]=(x+N)*O,o[7]=0,o[8]=(w+L)*U,o[9]=(x-N)*U,o[10]=(1-(y+T))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=bs.set(o[0],o[1],o[2]).length();const u=bs.set(o[4],o[5],o[6]).length(),f=bs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],oi.copy(this);const m=1/c,g=1/u,_=1/f;return oi.elements[0]*=m,oi.elements[1]*=m,oi.elements[2]*=m,oi.elements[4]*=g,oi.elements[5]*=g,oi.elements[6]*=g,oi.elements[8]*=_,oi.elements[9]*=_,oi.elements[10]*=_,n.setFromRotationMatrix(oi),r.x=c,r.y=u,r.z=f,this}makePerspective(e,n,r,o,c,u,f=Vi){const h=this.elements,m=2*c/(n-e),g=2*c/(r-o),_=(n+e)/(n-e),y=(r+o)/(r-o);let S,w;if(f===Vi)S=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(f===Cl)S=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,c,u,f=Vi){const h=this.elements,m=1/(n-e),g=1/(r-o),_=1/(u-c),y=(n+e)*m,S=(r+o)*g;let w,T;if(f===Vi)w=(u+c)*_,T=-2*_;else if(f===Cl)w=c*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=T,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const bs=new ie,oi=new Bt,kx=new ie(0,0,0),zx=new ie(1,1,1),mr=new ie,rl=new ie,kn=new ie,tm=new Bt,nm=new Ha;class Si{constructor(e=0,n=0,r=0,o=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],f=o[8],h=o[1],m=o[5],g=o[9],_=o[2],y=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-Nn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nm.setFromEuler(this),this.setFromQuaternion(nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Y0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bx=0;const im=new ie,Cs=new Ha,Ui=new Bt,sl=new ie,La=new ie,Hx=new ie,Vx=new Ha,rm=new ie(1,0,0),sm=new ie(0,1,0),am=new ie(0,0,1),om={type:"added"},Gx={type:"removed"},Rs={type:"childadded",child:null},Du={type:"childremoved",child:null};class on extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new ie,n=new Si,r=new Ha,o=new ie(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ot}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(rm,e)}rotateY(e){return this.rotateOnAxis(sm,e)}rotateZ(e){return this.rotateOnAxis(am,e)}translateOnAxis(e,n){return im.copy(e).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rm,e)}translateY(e){return this.translateOnAxis(sm,e)}translateZ(e){return this.translateOnAxis(am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?sl.copy(e):sl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(La,sl,this.up):Ui.lookAt(sl,La,this.up),this.quaternion.setFromRotationMatrix(Ui),o&&(Ui.extractRotation(o.matrixWorld),Cs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(om),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Gx),Du.child=e,this.dispatchEvent(Du),Du.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(om),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,Hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,Vx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const _=h[m];c(e.shapes,_)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(c(e.materials,this.material[h]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(c(e.animations,h))}}if(n){const f=u(e.geometries),h=u(e.materials),m=u(e.textures),g=u(e.images),_=u(e.shapes),y=u(e.skeletons),S=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(f){const h=[];for(const m in f){const g=f[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}on.DEFAULT_UP=new ie(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new ie,Fi=new ie,Iu=new ie,Oi=new ie,Ps=new ie,Ns=new ie,lm=new ie,Uu=new ie,Fu=new ie,Ou=new ie,ku=new Vt,zu=new Vt,Bu=new Vt;class ci{constructor(e=new ie,n=new ie,r=new ie){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),li.subVectors(e,n),o.cross(li);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){li.subVectors(o,n),Fi.subVectors(r,n),Iu.subVectors(e,n);const u=li.dot(li),f=li.dot(Fi),h=li.dot(Iu),m=Fi.dot(Fi),g=Fi.dot(Iu),_=u*m-f*f;if(_===0)return c.set(0,0,0),null;const y=1/_,S=(m*h-f*g)*y,w=(u*g-f*h)*y;return c.set(1-S-w,w,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,r,o,c,u,f,h){return this.getBarycoord(e,n,r,o,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Oi.x),h.addScaledVector(u,Oi.y),h.addScaledVector(f,Oi.z),h)}static getInterpolatedAttribute(e,n,r,o,c,u){return ku.setScalar(0),zu.setScalar(0),Bu.setScalar(0),ku.fromBufferAttribute(e,n),zu.fromBufferAttribute(e,r),Bu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ku,c.x),u.addScaledVector(zu,c.y),u.addScaledVector(Bu,c.z),u}static isFrontFacing(e,n,r,o){return li.subVectors(r,n),Fi.subVectors(e,n),li.cross(Fi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),li.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return ci.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,f;Ps.subVectors(o,r),Ns.subVectors(c,r),Uu.subVectors(e,r);const h=Ps.dot(Uu),m=Ns.dot(Uu);if(h<=0&&m<=0)return n.copy(r);Fu.subVectors(e,o);const g=Ps.dot(Fu),_=Ns.dot(Fu);if(g>=0&&_<=g)return n.copy(o);const y=h*_-g*m;if(y<=0&&h>=0&&g<=0)return u=h/(h-g),n.copy(r).addScaledVector(Ps,u);Ou.subVectors(e,c);const S=Ps.dot(Ou),w=Ns.dot(Ou);if(w>=0&&S<=w)return n.copy(c);const T=S*m-h*w;if(T<=0&&m>=0&&w<=0)return f=m/(m-w),n.copy(r).addScaledVector(Ns,f);const x=g*w-S*_;if(x<=0&&_-g>=0&&S-w>=0)return lm.subVectors(c,o),f=(_-g)/(_-g+(S-w)),n.copy(o).addScaledVector(lm,f);const v=1/(x+T+y);return u=T*v,f=y*v,n.copy(r).addScaledVector(Ps,u).addScaledVector(Ns,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const K0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},al={h:0,s:0,l:0};function Hu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class vt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=St.workingColorSpace){return this.r=e,this.g=n,this.b=r,St.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=St.workingColorSpace){if(e=bx(e,1),n=Nn(n,0,1),r=Nn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Hu(u,c,e+1/3),this.g=Hu(u,c,e),this.b=Hu(u,c,e-1/3)}return St.toWorkingColorSpace(this,o),this}setStyle(e,n=Kn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=K0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return St.fromWorkingColorSpace(mn.copy(this),e),Math.round(Nn(mn.r*255,0,255))*65536+Math.round(Nn(mn.g*255,0,255))*256+Math.round(Nn(mn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=St.workingColorSpace){St.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,o=mn.g,c=mn.b,u=Math.max(r,o,c),f=Math.min(r,o,c);let h,m;const g=(f+u)/2;if(f===u)h=0,m=0;else{const _=u-f;switch(m=g<=.5?_/(u+f):_/(2-u-f),u){case r:h=(o-c)/_+(o<c?6:0);break;case o:h=(c-r)/_+2;break;case c:h=(r-o)/_+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,n=St.workingColorSpace){return St.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Kn){St.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,o=mn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(al);const r=wu(gr.h,al.h,n),o=wu(gr.s,al.s,n),c=wu(gr.l,al.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new vt;vt.NAMES=K0;let Wx=0;class Ys extends qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Ba(),this.name="",this.blending=ks,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nd,this.blendDst=id,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==Sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==nd&&(r.blendSrc=this.blendSrc),this.blendDst!==id&&(r.blendDst=this.blendDst),this.blendEquation!==Xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const f in c){const h=c[f];delete h.metadata,u.push(h)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rl extends Ys{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=N0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new ie,ol=new _t;class yi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Xp,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ol.fromBufferAttribute(this,n),ol.applyMatrix3(e),this.setXY(n,ol.x,ol.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix3(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ra(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ra(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ra(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ra(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ra(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),o=Pn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),o=Pn(o,this.array),c=Pn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xp&&(e.usage=this.usage),e}}class Z0 extends yi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Q0 extends yi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Xt extends yi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let jx=0;const Yn=new Bt,Vu=new on,Ls=new ie,zn=new Va,Da=new Va,nn=new ie;class Bn extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j0(e)?Q0:Z0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ot().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,n,r){return Yn.makeTranslation(e,n,r),this.applyMatrix4(Yn),this}scale(e,n,r){return Yn.makeScale(e,n,r),this.applyMatrix4(Yn),this}lookAt(e){return Vu.lookAt(e),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Xt(r,3))}else{for(let r=0,o=n.count;r<o;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];zn.setFromBufferAttribute(c),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ul);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];Da.setFromBufferAttribute(f),this.morphTargetsRelative?(nn.addVectors(zn.min,Da.min),zn.expandByPoint(nn),nn.addVectors(zn.max,Da.max),zn.expandByPoint(nn)):(zn.expandByPoint(Da.min),zn.expandByPoint(Da.max))}zn.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)nn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(nn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],h=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)nn.fromBufferAttribute(f,m),h&&(Ls.fromBufferAttribute(e,m),nn.add(Ls)),o=Math.max(o,r.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let k=0;k<r.count;k++)f[k]=new ie,h[k]=new ie;const m=new ie,g=new ie,_=new ie,y=new _t,S=new _t,w=new _t,T=new ie,x=new ie;function v(k,P,A){m.fromBufferAttribute(r,k),g.fromBufferAttribute(r,P),_.fromBufferAttribute(r,A),y.fromBufferAttribute(c,k),S.fromBufferAttribute(c,P),w.fromBufferAttribute(c,A),g.sub(m),_.sub(m),S.sub(y),w.sub(y);const B=1/(S.x*w.y-w.x*S.y);isFinite(B)&&(T.copy(g).multiplyScalar(w.y).addScaledVector(_,-S.y).multiplyScalar(B),x.copy(_).multiplyScalar(S.x).addScaledVector(g,-w.x).multiplyScalar(B),f[k].add(T),f[P].add(T),f[A].add(T),h[k].add(x),h[P].add(x),h[A].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let k=0,P=N.length;k<P;++k){const A=N[k],B=A.start,V=A.count;for(let X=B,oe=B+V;X<oe;X+=3)v(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const L=new ie,b=new ie,G=new ie,O=new ie;function U(k){G.fromBufferAttribute(o,k),O.copy(G);const P=f[k];L.copy(P),L.sub(G.multiplyScalar(G.dot(P))).normalize(),b.crossVectors(O,P);const B=b.dot(h[k])<0?-1:1;u.setXYZW(k,L.x,L.y,L.z,B)}for(let k=0,P=N.length;k<P;++k){const A=N[k],B=A.start,V=A.count;for(let X=B,oe=B+V;X<oe;X+=3)U(e.getX(X+0)),U(e.getX(X+1)),U(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const o=new ie,c=new ie,u=new ie,f=new ie,h=new ie,m=new ie,g=new ie,_=new ie;if(e)for(let y=0,S=e.count;y<S;y+=3){const w=e.getX(y+0),T=e.getX(y+1),x=e.getX(y+2);o.fromBufferAttribute(n,w),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,x),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),f.fromBufferAttribute(r,w),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,x),f.add(g),h.add(g),m.add(g),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let y=0,S=n.count;y<S;y+=3)o.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),u.fromBufferAttribute(n,y+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(f,h){const m=f.array,g=f.itemSize,_=f.normalized,y=new m.constructor(h.length*g);let S=0,w=0;for(let T=0,x=h.length;T<x;T++){f.isInterleavedBufferAttribute?S=h[T]*f.data.stride+f.offset:S=h[T]*g;for(let v=0;v<g;v++)y[w++]=m[S++]}return new yi(y,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bn,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],m=e(h,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const h=[],m=c[f];for(let g=0,_=m.length;g<_;g++){const y=m[g],S=e(y,r);h.push(S)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let _=0,y=m.length;_<y;_++){const S=m[_];g.push(S.toJSON(e.data))}g.length>0&&(o[h]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(n))}const c=e.morphAttributes;for(const m in c){const g=[],_=c[m];for(let y=0,S=_.length;y<S;y++)g.push(_[y].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,g=u.length;m<g;m++){const _=u[m];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cm=new Bt,Br=new q0,ll=new Ul,um=new ie,cl=new ie,ul=new ie,dl=new ie,Gu=new ie,fl=new ie,dm=new ie,hl=new ie;class Ln extends on{constructor(e=new Bn,n=new Rl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){fl.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const g=f[h],_=c[h];g!==0&&(Gu.fromBufferAttribute(_,e),u?fl.addScaledVector(Gu,g):fl.addScaledVector(Gu.sub(n),g))}n.add(fl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ll.copy(r.boundingSphere),ll.applyMatrix4(c),Br.copy(e.ray).recast(e.near),!(ll.containsPoint(Br.origin)===!1&&(Br.intersectSphere(ll,um)===null||Br.origin.distanceToSquared(um)>(e.far-e.near)**2))&&(cm.copy(c).invert(),Br.copy(e.ray).applyMatrix4(cm),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,f=c.index,h=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,y=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,T=y.length;w<T;w++){const x=y[w],v=u[x.materialIndex],N=Math.max(x.start,S.start),L=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let b=N,G=L;b<G;b+=3){const O=f.getX(b),U=f.getX(b+1),k=f.getX(b+2);o=pl(this,v,e,r,m,g,_,O,U,k),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const w=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let x=w,v=T;x<v;x+=3){const N=f.getX(x),L=f.getX(x+1),b=f.getX(x+2);o=pl(this,u,e,r,m,g,_,N,L,b),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,T=y.length;w<T;w++){const x=y[w],v=u[x.materialIndex],N=Math.max(x.start,S.start),L=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let b=N,G=L;b<G;b+=3){const O=b,U=b+1,k=b+2;o=pl(this,v,e,r,m,g,_,O,U,k),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const w=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let x=w,v=T;x<v;x+=3){const N=x,L=x+1,b=x+2;o=pl(this,u,e,r,m,g,_,N,L,b),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}}}function Xx(s,e,n,r,o,c,u,f){let h;if(e.side===Dn?h=r.intersectTriangle(u,c,o,!0,f):h=r.intersectTriangle(o,c,u,e.side===Sr,f),h===null)return null;hl.copy(f),hl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(hl);return m<n.near||m>n.far?null:{distance:m,point:hl.clone(),object:s}}function pl(s,e,n,r,o,c,u,f,h,m){s.getVertexPosition(f,cl),s.getVertexPosition(h,ul),s.getVertexPosition(m,dl);const g=Xx(s,e,n,r,cl,ul,dl,dm);if(g){const _=new ie;ci.getBarycoord(dm,cl,ul,dl,_),o&&(g.uv=ci.getInterpolatedAttribute(o,f,h,m,_,new _t)),c&&(g.uv1=ci.getInterpolatedAttribute(c,f,h,m,_,new _t)),u&&(g.normal=ci.getInterpolatedAttribute(u,f,h,m,_,new ie),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:f,b:h,c:m,normal:new ie,materialIndex:0};ci.getNormal(cl,ul,dl,y.normal),g.face=y,g.barycoord=_}return g}class Ga extends Bn{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const h=[],m=[],g=[],_=[];let y=0,S=0;w("z","y","x",-1,-1,r,n,e,u,c,0),w("z","y","x",1,-1,r,n,-e,u,c,1),w("x","z","y",1,1,e,r,n,o,u,2),w("x","z","y",1,-1,e,r,-n,o,u,3),w("x","y","z",1,-1,e,n,r,o,c,4),w("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(h),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(g,3)),this.setAttribute("uv",new Xt(_,2));function w(T,x,v,N,L,b,G,O,U,k,P){const A=b/U,B=G/k,V=b/2,X=G/2,oe=O/2,se=U+1,ee=k+1;let ne=0,z=0;const j=new ie;for(let J=0;J<ee;J++){const I=J*B-X;for(let re=0;re<se;re++){const Te=re*A-V;j[T]=Te*N,j[x]=I*L,j[v]=oe,m.push(j.x,j.y,j.z),j[T]=0,j[x]=0,j[v]=O>0?1:-1,g.push(j.x,j.y,j.z),_.push(re/U),_.push(1-J/k),ne+=1}}for(let J=0;J<k;J++)for(let I=0;I<U;I++){const re=y+I+se*J,Te=y+I+se*(J+1),Q=y+(I+1)+se*(J+1),he=y+(I+1)+se*J;h.push(re,Te,he),h.push(Te,Q,he),z+=6}f.addGroup(S,z,P),S+=z,y+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function yn(s){const e={};for(let n=0;n<s.length;n++){const r=Xs(s[n]);for(const o in r)e[o]=r[o]}return e}function $x(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function J0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const qx={clone:Xs,merge:yn};var Yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends Ys{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yx,this.fragmentShader=Kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=$x(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class eg extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new ie,fm=new _t,hm=new _t;class Zn extends eg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Hd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hd*2*Math.atan(Math.tan(Eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,n){return this.getViewBounds(e,fm,hm),n.subVectors(hm,fm)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Eu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/h,n-=u.offsetY*r/m,o*=u.width/h,r*=u.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ds=-90,Is=1;class Zx extends on{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(Ds,Is,e,n);o.layers=this.layers,this.add(o);const c=new Zn(Ds,Is,e,n);c.layers=this.layers,this.add(c);const u=new Zn(Ds,Is,e,n);u.layers=this.layers,this.add(u);const f=new Zn(Ds,Is,e,n);f.layers=this.layers,this.add(f);const h=new Zn(Ds,Is,e,n);h.layers=this.layers,this.add(h);const m=new Zn(Ds,Is,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,f,h]=n;for(const m of n)this.remove(m);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Cl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,h,m,g]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,h),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(n,g),e.setRenderTarget(_,y,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class tg extends Sn{constructor(e,n,r,o,c,u,f,h,m,g){e=e!==void 0?e:[],n=n!==void 0?n:Vs,super(e,n,r,o,c,u,f,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qx extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new tg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ga(5,5,5),c=new Mr({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:xr});c.uniforms.tEquirect.value=n;const u=new Ln(o,c),f=n.minFilter;return n.minFilter===qr&&(n.minFilter=xi),new Zx(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}const Wu=new ie,Jx=new ie,ey=new ot;class Wr{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Wu.subVectors(r,n).cross(Jx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Wu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||ey.getNormalMatrix(e),o=this.coplanarPoint(Wu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Ul,ml=new ie;class Zd{constructor(e=new Wr,n=new Wr,r=new Wr,o=new Wr,c=new Wr,u=new Wr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Vi){const r=this.planes,o=e.elements,c=o[0],u=o[1],f=o[2],h=o[3],m=o[4],g=o[5],_=o[6],y=o[7],S=o[8],w=o[9],T=o[10],x=o[11],v=o[12],N=o[13],L=o[14],b=o[15];if(r[0].setComponents(h-c,y-m,x-S,b-v).normalize(),r[1].setComponents(h+c,y+m,x+S,b+v).normalize(),r[2].setComponents(h+u,y+g,x+w,b+N).normalize(),r[3].setComponents(h-u,y-g,x-w,b-N).normalize(),r[4].setComponents(h-f,y-_,x-T,b-L).normalize(),n===Vi)r[5].setComponents(h+f,y+_,x+T,b+L).normalize();else if(n===Cl)r[5].setComponents(f,_,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(ml.x=o.normal.x>0?e.max.x:e.min.x,ml.y=o.normal.y>0?e.max.y:e.min.y,ml.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ng(){let s=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function ty(s){const e=new WeakMap;function n(f,h){const m=f.array,g=f.usage,_=m.byteLength,y=s.createBuffer();s.bindBuffer(h,y),s.bufferData(h,m,g),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,h,m){const g=h.array,_=h.updateRanges;if(s.bindBuffer(m,f),_.length===0)s.bufferSubData(m,0,g);else{_.sort((S,w)=>S.start-w.start);let y=0;for(let S=1;S<_.length;S++){const w=_[y],T=_[S];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++y,_[y]=T)}_.length=y+1;for(let S=0,w=_.length;S<w;S++){const T=_[S];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:o,remove:c,update:u}}class Wa extends Bn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,f=Math.floor(r),h=Math.floor(o),m=f+1,g=h+1,_=e/f,y=n/h,S=[],w=[],T=[],x=[];for(let v=0;v<g;v++){const N=v*y-u;for(let L=0;L<m;L++){const b=L*_-c;w.push(b,-N,0),T.push(0,0,1),x.push(L/f),x.push(1-v/h)}}for(let v=0;v<h;v++)for(let N=0;N<f;N++){const L=N+m*v,b=N+m*(v+1),G=N+1+m*(v+1),O=N+1+m*v;S.push(L,b,O),S.push(b,G,O)}this.setIndex(S),this.setAttribute("position",new Xt(w,3)),this.setAttribute("normal",new Xt(T,3)),this.setAttribute("uv",new Xt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.widthSegments,e.heightSegments)}}var ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iy=`#ifdef USE_ALPHAHASH
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
#endif`,ry=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ay=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ly=`#ifdef USE_AOMAP
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
#endif`,cy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uy=`#ifdef USE_BATCHING
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
#endif`,dy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,py=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,my=`#ifdef USE_IRIDESCENCE
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
#endif`,gy=`#ifdef USE_BUMPMAP
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
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ty=`#define PI 3.141592653589793
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
} // validated`,Ay=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,by=`vec3 transformedNormal = objectNormal;
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
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Py=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ly="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iy=`#ifdef USE_ENVMAP
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
#endif`,Uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,Oy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,By=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gy=`#ifdef USE_GRADIENTMAP
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
}`,Wy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$y=`uniform bool receiveShadow;
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
#endif`,qy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jy=`PhysicalMaterial material;
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
#endif`,eS=`struct PhysicalMaterial {
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
}`,tS=`
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
#endif`,nS=`#if defined( RE_IndirectDiffuse )
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
#endif`,iS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dS=`#if defined( USE_POINTS_UV )
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
#endif`,fS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vS=`#ifdef USE_MORPHTARGETS
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
#endif`,_S=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ES=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wS=`#ifdef USE_NORMALMAP
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
#endif`,TS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,US=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BS=`float getShadowMask() {
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
}`,HS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VS=`#ifdef USE_SKINNING
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
#endif`,GS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WS=`#ifdef USE_SKINNING
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
#endif`,jS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$S=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YS=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#ifdef USE_TRANSMISSION
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
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nM=`uniform sampler2D t2D;
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
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`#include <common>
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
}`,lM=`#if DEPTH_PACKING == 3200
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
}`,cM=`#define DISTANCE
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
}`,uM=`#define DISTANCE
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
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`uniform float scale;
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#include <common>
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
}`,gM=`uniform vec3 diffuse;
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
}`,vM=`#define LAMBERT
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
}`,_M=`#define LAMBERT
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
}`,xM=`#define MATCAP
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
}`,yM=`#define MATCAP
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
}`,SM=`#define NORMAL
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
}`,MM=`#define NORMAL
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
}`,EM=`#define PHONG
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
}`,wM=`#define PHONG
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
}`,TM=`#define STANDARD
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
}`,AM=`#define STANDARD
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
}`,bM=`#define TOON
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
}`,CM=`#define TOON
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
}`,RM=`uniform float size;
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
}`,PM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,LM=`uniform vec3 color;
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
}`,DM=`uniform float rotation;
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
}`,IM=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:ny,alphahash_pars_fragment:iy,alphamap_fragment:ry,alphamap_pars_fragment:sy,alphatest_fragment:ay,alphatest_pars_fragment:oy,aomap_fragment:ly,aomap_pars_fragment:cy,batching_pars_vertex:uy,batching_vertex:dy,begin_vertex:fy,beginnormal_vertex:hy,bsdfs:py,iridescence_fragment:my,bumpmap_pars_fragment:gy,clipping_planes_fragment:vy,clipping_planes_pars_fragment:_y,clipping_planes_pars_vertex:xy,clipping_planes_vertex:yy,color_fragment:Sy,color_pars_fragment:My,color_pars_vertex:Ey,color_vertex:wy,common:Ty,cube_uv_reflection_fragment:Ay,defaultnormal_vertex:by,displacementmap_pars_vertex:Cy,displacementmap_vertex:Ry,emissivemap_fragment:Py,emissivemap_pars_fragment:Ny,colorspace_fragment:Ly,colorspace_pars_fragment:Dy,envmap_fragment:Iy,envmap_common_pars_fragment:Uy,envmap_pars_fragment:Fy,envmap_pars_vertex:Oy,envmap_physical_pars_fragment:qy,envmap_vertex:ky,fog_vertex:zy,fog_pars_vertex:By,fog_fragment:Hy,fog_pars_fragment:Vy,gradientmap_pars_fragment:Gy,lightmap_pars_fragment:Wy,lights_lambert_fragment:jy,lights_lambert_pars_fragment:Xy,lights_pars_begin:$y,lights_toon_fragment:Yy,lights_toon_pars_fragment:Ky,lights_phong_fragment:Zy,lights_phong_pars_fragment:Qy,lights_physical_fragment:Jy,lights_physical_pars_fragment:eS,lights_fragment_begin:tS,lights_fragment_maps:nS,lights_fragment_end:iS,logdepthbuf_fragment:rS,logdepthbuf_pars_fragment:sS,logdepthbuf_pars_vertex:aS,logdepthbuf_vertex:oS,map_fragment:lS,map_pars_fragment:cS,map_particle_fragment:uS,map_particle_pars_fragment:dS,metalnessmap_fragment:fS,metalnessmap_pars_fragment:hS,morphinstance_vertex:pS,morphcolor_vertex:mS,morphnormal_vertex:gS,morphtarget_pars_vertex:vS,morphtarget_vertex:_S,normal_fragment_begin:xS,normal_fragment_maps:yS,normal_pars_fragment:SS,normal_pars_vertex:MS,normal_vertex:ES,normalmap_pars_fragment:wS,clearcoat_normal_fragment_begin:TS,clearcoat_normal_fragment_maps:AS,clearcoat_pars_fragment:bS,iridescence_pars_fragment:CS,opaque_fragment:RS,packing:PS,premultiplied_alpha_fragment:NS,project_vertex:LS,dithering_fragment:DS,dithering_pars_fragment:IS,roughnessmap_fragment:US,roughnessmap_pars_fragment:FS,shadowmap_pars_fragment:OS,shadowmap_pars_vertex:kS,shadowmap_vertex:zS,shadowmask_pars_fragment:BS,skinbase_vertex:HS,skinning_pars_vertex:VS,skinning_vertex:GS,skinnormal_vertex:WS,specularmap_fragment:jS,specularmap_pars_fragment:XS,tonemapping_fragment:$S,tonemapping_pars_fragment:qS,transmission_fragment:YS,transmission_pars_fragment:KS,uv_pars_fragment:ZS,uv_pars_vertex:QS,uv_vertex:JS,worldpos_vertex:eM,background_vert:tM,background_frag:nM,backgroundCube_vert:iM,backgroundCube_frag:rM,cube_vert:sM,cube_frag:aM,depth_vert:oM,depth_frag:lM,distanceRGBA_vert:cM,distanceRGBA_frag:uM,equirect_vert:dM,equirect_frag:fM,linedashed_vert:hM,linedashed_frag:pM,meshbasic_vert:mM,meshbasic_frag:gM,meshlambert_vert:vM,meshlambert_frag:_M,meshmatcap_vert:xM,meshmatcap_frag:yM,meshnormal_vert:SM,meshnormal_frag:MM,meshphong_vert:EM,meshphong_frag:wM,meshphysical_vert:TM,meshphysical_frag:AM,meshtoon_vert:bM,meshtoon_frag:CM,points_vert:RM,points_frag:PM,shadow_vert:NM,shadow_frag:LM,sprite_vert:DM,sprite_frag:IM},Pe={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},_i={basic:{uniforms:yn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:yn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new vt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:yn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:yn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:yn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new vt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:yn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:yn([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:yn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:yn([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:yn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:yn([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:yn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:yn([Pe.lights,Pe.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};_i.physical={uniforms:yn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const gl={r:0,b:0,g:0},Vr=new Si,UM=new Bt;function FM(s,e,n,r,o,c,u){const f=new vt(0);let h=c===!0?0:1,m,g,_=null,y=0,S=null;function w(N){let L=N.isScene===!0?N.background:null;return L&&L.isTexture&&(L=(N.backgroundBlurriness>0?n:e).get(L)),L}function T(N){let L=!1;const b=w(N);b===null?v(f,h):b&&b.isColor&&(v(b,1),L=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,u):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(N,L){const b=w(L);b&&(b.isCubeTexture||b.mapping===Dl)?(g===void 0&&(g=new Ln(new Ga(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:Xs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,O,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Vr.copy(L.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),g.material.uniforms.envMap.value=b,g.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(UM.makeRotationFromEuler(Vr)),g.material.toneMapped=St.getTransfer(b.colorSpace)!==Nt,(_!==b||y!==b.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=b,y=b.version,S=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):b&&b.isTexture&&(m===void 0&&(m=new Ln(new Wa(2,2),new Mr({name:"BackgroundMaterial",uniforms:Xs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=b,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=St.getTransfer(b.colorSpace)!==Nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),m.material.uniforms.uvTransform.value.copy(b.matrix),(_!==b||y!==b.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,_=b,y=b.version,S=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function v(N,L){N.getRGB(gl,J0(s)),r.buffers.color.setClear(gl.r,gl.g,gl.b,L,u)}return{getClearColor:function(){return f},setClearColor:function(N,L=1){f.set(N),h=L,v(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,v(f,h)},render:T,addToRenderList:x}}function OM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let c=o,u=!1;function f(A,B,V,X,oe){let se=!1;const ee=_(X,V,B);c!==ee&&(c=ee,m(c.object)),se=S(A,X,V,oe),se&&w(A,X,V,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(se||u)&&(u=!1,b(A,B,V,X),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function h(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function g(A){return s.deleteVertexArray(A)}function _(A,B,V){const X=V.wireframe===!0;let oe=r[A.id];oe===void 0&&(oe={},r[A.id]=oe);let se=oe[B.id];se===void 0&&(se={},oe[B.id]=se);let ee=se[X];return ee===void 0&&(ee=y(h()),se[X]=ee),ee}function y(A){const B=[],V=[],X=[];for(let oe=0;oe<n;oe++)B[oe]=0,V[oe]=0,X[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:X,object:A,attributes:{},index:null}}function S(A,B,V,X){const oe=c.attributes,se=B.attributes;let ee=0;const ne=V.getAttributes();for(const z in ne)if(ne[z].location>=0){const J=oe[z];let I=se[z];if(I===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(I=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(I=A.instanceColor)),J===void 0||J.attribute!==I||I&&J.data!==I.data)return!0;ee++}return c.attributesNum!==ee||c.index!==X}function w(A,B,V,X){const oe={},se=B.attributes;let ee=0;const ne=V.getAttributes();for(const z in ne)if(ne[z].location>=0){let J=se[z];J===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(J=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(J=A.instanceColor));const I={};I.attribute=J,J&&J.data&&(I.data=J.data),oe[z]=I,ee++}c.attributes=oe,c.attributesNum=ee,c.index=X}function T(){const A=c.newAttributes;for(let B=0,V=A.length;B<V;B++)A[B]=0}function x(A){v(A,0)}function v(A,B){const V=c.newAttributes,X=c.enabledAttributes,oe=c.attributeDivisors;V[A]=1,X[A]===0&&(s.enableVertexAttribArray(A),X[A]=1),oe[A]!==B&&(s.vertexAttribDivisor(A,B),oe[A]=B)}function N(){const A=c.newAttributes,B=c.enabledAttributes;for(let V=0,X=B.length;V<X;V++)B[V]!==A[V]&&(s.disableVertexAttribArray(V),B[V]=0)}function L(A,B,V,X,oe,se,ee){ee===!0?s.vertexAttribIPointer(A,B,V,oe,se):s.vertexAttribPointer(A,B,V,X,oe,se)}function b(A,B,V,X){T();const oe=X.attributes,se=V.getAttributes(),ee=B.defaultAttributeValues;for(const ne in se){const z=se[ne];if(z.location>=0){let j=oe[ne];if(j===void 0&&(ne==="instanceMatrix"&&A.instanceMatrix&&(j=A.instanceMatrix),ne==="instanceColor"&&A.instanceColor&&(j=A.instanceColor)),j!==void 0){const J=j.normalized,I=j.itemSize,re=e.get(j);if(re===void 0)continue;const Te=re.buffer,Q=re.type,he=re.bytesPerElement,xe=Q===s.INT||Q===s.UNSIGNED_INT||j.gpuType===jd;if(j.isInterleavedBufferAttribute){const ve=j.data,be=ve.stride,Ie=j.offset;if(ve.isInstancedInterleavedBuffer){for(let Ye=0;Ye<z.locationSize;Ye++)v(z.location+Ye,ve.meshPerAttribute);A.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ye=0;Ye<z.locationSize;Ye++)x(z.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Ye=0;Ye<z.locationSize;Ye++)L(z.location+Ye,I/z.locationSize,Q,J,be*he,(Ie+I/z.locationSize*Ye)*he,xe)}else{if(j.isInstancedBufferAttribute){for(let ve=0;ve<z.locationSize;ve++)v(z.location+ve,j.meshPerAttribute);A.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ve=0;ve<z.locationSize;ve++)x(z.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let ve=0;ve<z.locationSize;ve++)L(z.location+ve,I/z.locationSize,Q,J,I*he,I/z.locationSize*ve*he,xe)}}else if(ee!==void 0){const J=ee[ne];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(z.location,J);break;case 3:s.vertexAttrib3fv(z.location,J);break;case 4:s.vertexAttrib4fv(z.location,J);break;default:s.vertexAttrib1fv(z.location,J)}}}}N()}function G(){k();for(const A in r){const B=r[A];for(const V in B){const X=B[V];for(const oe in X)g(X[oe].object),delete X[oe];delete B[V]}delete r[A]}}function O(A){if(r[A.id]===void 0)return;const B=r[A.id];for(const V in B){const X=B[V];for(const oe in X)g(X[oe].object),delete X[oe];delete B[V]}delete r[A.id]}function U(A){for(const B in r){const V=r[B];if(V[A.id]===void 0)continue;const X=V[A.id];for(const oe in X)g(X[oe].object),delete X[oe];delete V[A.id]}}function k(){P(),u=!0,c!==o&&(c=o,m(c.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:k,resetDefaultState:P,dispose:G,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:x,disableUnusedAttributes:N}}function kM(s,e,n){let r;function o(m){r=m}function c(m,g){s.drawArrays(r,m,g),n.update(g,r,1)}function u(m,g,_){_!==0&&(s.drawArraysInstanced(r,m,g,_),n.update(g,r,_))}function f(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let S=0;for(let w=0;w<_;w++)S+=g[w];n.update(S,r,1)}function h(m,g,_,y){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)u(m[w],g[w],y[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,y,0,_);let w=0;for(let T=0;T<_;T++)w+=g[T]*y[T];n.update(w,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function zM(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==ui&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const k=U===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Wi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Hi&&!k)}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=w>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:b,vertexTextures:G,maxSamples:O}}function BM(s){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Wr,f=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const S=_.length!==0||y||r!==0||o;return o=y,r=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){n=g(_,y,0)},this.setState=function(_,y,S){const w=_.clippingPlanes,T=_.clipIntersection,x=_.clipShadows,v=s.get(_);if(!o||w===null||w.length===0||c&&!x)c?g(null):m();else{const N=c?0:r,L=N*4;let b=v.clippingState||null;h.value=b,b=g(w,y,L,S);for(let G=0;G!==L;++G)b[G]=n[G];v.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,y,S,w){const T=_!==null?_.length:0;let x=null;if(T!==0){if(x=h.value,w!==!0||x===null){const v=S+T*4,N=y.matrixWorldInverse;f.getNormalMatrix(N),(x===null||x.length<v)&&(x=new Float32Array(v));for(let L=0,b=S;L!==T;++L,b+=4)u.copy(_[L]).applyMatrix4(N,f),u.normal.toArray(x,b),x[b+3]=u.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function HM(s){let e=new WeakMap;function n(u,f){return f===dd?u.mapping=Vs:f===fd&&(u.mapping=Gs),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===dd||f===fd)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new Qx(h.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class ig extends eg{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,f=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=4,pm=[.125,.215,.35,.446,.526,.582],$r=20,ju=new ig,mm=new vt;let Xu=null,$u=0,qu=0,Yu=!1;const jr=(1+Math.sqrt(5))/2,Us=1/jr,gm=[new ie(-jr,Us,0),new ie(jr,Us,0),new ie(-Us,0,jr),new ie(Us,0,jr),new ie(0,jr,-Us),new ie(0,jr,Us),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)];class vm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){Xu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xu,$u,qu),this._renderer.xr.enabled=Yu,e.scissorTest=!1,vl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:za,format:ui,colorSpace:$s,depthBuffer:!1},o=_m(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VM(c)),this._blurMaterial=GM(c,e,n)}return o}_compileMaterial(e){const n=new Ln(this._lodPlanes[0],e);this._renderer.compile(n,ju)}_sceneToCubeUV(e,n,r,o){const f=new Zn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(mm),g.toneMapping=yr,g.autoClear=!1;const S=new Rl({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),w=new Ln(new Ga,S);let T=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,T=!0):(S.color.copy(mm),T=!0);for(let v=0;v<6;v++){const N=v%3;N===0?(f.up.set(0,h[v],0),f.lookAt(m[v],0,0)):N===1?(f.up.set(0,0,h[v]),f.lookAt(0,m[v],0)):(f.up.set(0,h[v],0),f.lookAt(0,0,m[v]));const L=this._cubeSize;vl(o,N*L,v>2?L:0,L,L),g.setRenderTarget(o),T&&g.render(w,f),g.render(e,f)}w.geometry.dispose(),w.material.dispose(),g.toneMapping=y,g.autoClear=_,e.background=x}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Vs||e.mapping===Gs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xm());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new Ln(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const h=this._cubeSize;vl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,ju)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=gm[(o-c-1)%gm.length];this._blur(e,c-1,c,u,f)}n.autoClear=r}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,f){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Ln(this._lodPlanes[o],m),y=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*$r-1),T=c/w,x=isFinite(c)?1+Math.floor(g*T):$r;x>$r&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${$r}`);const v=[];let N=0;for(let U=0;U<$r;++U){const k=U/T,P=Math.exp(-k*k/2);v.push(P),U===0?N+=P:U<x&&(N+=2*P)}for(let U=0;U<v.length;U++)v[U]=v[U]/N;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=v,y.latitudinal.value=u==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:L}=this;y.dTheta.value=w,y.mipInt.value=L-r;const b=this._sizeLods[o],G=3*b*(o>L-Fs?o-L+Fs:0),O=4*(this._cubeSize-b);vl(n,G,O,3*b,2*b),h.setRenderTarget(n),h.render(_,ju)}}function VM(s){const e=[],n=[],r=[];let o=s;const c=s-Fs+1+pm.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);n.push(f);let h=1/f;u>s-Fs?h=pm[u-s+Fs-1]:u===0&&(h=0),r.push(h);const m=1/(f-2),g=-m,_=1+m,y=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,w=6,T=3,x=2,v=1,N=new Float32Array(T*w*S),L=new Float32Array(x*w*S),b=new Float32Array(v*w*S);for(let O=0;O<S;O++){const U=O%3*2/3-1,k=O>2?0:-1,P=[U,k,0,U+2/3,k,0,U+2/3,k+1,0,U,k,0,U+2/3,k+1,0,U,k+1,0];N.set(P,T*w*O),L.set(y,x*w*O);const A=[O,O,O,O,O,O];b.set(A,v*w*O)}const G=new Bn;G.setAttribute("position",new yi(N,T)),G.setAttribute("uv",new yi(L,x)),G.setAttribute("faceIndex",new yi(b,v)),e.push(G),o>Fs&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function _m(s,e,n){const r=new Kr(s,e,n);return r.texture.mapping=Dl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vl(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function GM(s,e,n){const r=new Float32Array($r),o=new ie(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Qd(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function xm(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qd(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function ym(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Qd(){return`

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
	`}function WM(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===dd||h===fd,g=h===Vs||h===Gs;if(m||g){let _=e.get(f);const y=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return n===null&&(n=new vm(s)),_=m?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return m&&S&&S.height>0||g&&S&&o(S)?(n===null&&(n=new vm(s)),_=m?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",c),_.texture):null}}}return f}function o(f){let h=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&h++;return h===m}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function jM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Ua("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function XM(s,e,n,r){const o={},c=new WeakMap;function u(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const w in y.attributes)e.remove(y.attributes[w]);for(const w in y.morphAttributes){const T=y.morphAttributes[w];for(let x=0,v=T.length;x<v;x++)e.remove(T[x])}y.removeEventListener("dispose",u),delete o[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function f(_,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,n.memory.geometries++),y}function h(_){const y=_.attributes;for(const w in y)e.update(y[w],s.ARRAY_BUFFER);const S=_.morphAttributes;for(const w in S){const T=S[w];for(let x=0,v=T.length;x<v;x++)e.update(T[x],s.ARRAY_BUFFER)}}function m(_){const y=[],S=_.index,w=_.attributes.position;let T=0;if(S!==null){const N=S.array;T=S.version;for(let L=0,b=N.length;L<b;L+=3){const G=N[L+0],O=N[L+1],U=N[L+2];y.push(G,O,O,U,U,G)}}else if(w!==void 0){const N=w.array;T=w.version;for(let L=0,b=N.length/3-1;L<b;L+=3){const G=L+0,O=L+1,U=L+2;y.push(G,O,O,U,U,G)}}else return;const x=new(j0(y)?Q0:Z0)(y,1);x.version=T;const v=c.get(_);v&&e.remove(v),c.set(_,x)}function g(_){const y=c.get(_);if(y){const S=_.index;S!==null&&y.version<S.version&&m(_)}else m(_);return c.get(_)}return{get:f,update:h,getWireframeAttribute:g}}function $M(s,e,n){let r;function o(y){r=y}let c,u;function f(y){c=y.type,u=y.bytesPerElement}function h(y,S){s.drawElements(r,S,c,y*u),n.update(S,r,1)}function m(y,S,w){w!==0&&(s.drawElementsInstanced(r,S,c,y*u,w),n.update(S,r,w))}function g(y,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,w);let x=0;for(let v=0;v<w;v++)x+=S[v];n.update(x,r,1)}function _(y,S,w,T){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<y.length;v++)m(y[v]/u,S[v],T[v]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,T,0,w);let v=0;for(let N=0;N<w;N++)v+=S[N]*T[N];n.update(v,r,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function qM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function YM(s,e,n){const r=new WeakMap,o=new Vt;function c(u,f,h){const m=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let y=r.get(f);if(y===void 0||y.count!==_){let A=function(){k.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var S=A;y!==void 0&&y.texture.dispose();const w=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let b=0;w===!0&&(b=1),T===!0&&(b=2),x===!0&&(b=3);let G=f.attributes.position.count*b,O=1;G>e.maxTextureSize&&(O=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const U=new Float32Array(G*O*4*_),k=new $0(U,G,O,_);k.type=Hi,k.needsUpdate=!0;const P=b*4;for(let B=0;B<_;B++){const V=v[B],X=N[B],oe=L[B],se=G*O*4*B;for(let ee=0;ee<V.count;ee++){const ne=ee*P;w===!0&&(o.fromBufferAttribute(V,ee),U[se+ne+0]=o.x,U[se+ne+1]=o.y,U[se+ne+2]=o.z,U[se+ne+3]=0),T===!0&&(o.fromBufferAttribute(X,ee),U[se+ne+4]=o.x,U[se+ne+5]=o.y,U[se+ne+6]=o.z,U[se+ne+7]=0),x===!0&&(o.fromBufferAttribute(oe,ee),U[se+ne+8]=o.x,U[se+ne+9]=o.y,U[se+ne+10]=o.z,U[se+ne+11]=oe.itemSize===4?o.w:1)}}y={count:_,texture:k,size:new _t(G,O)},r.set(f,y),f.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let w=0;for(let x=0;x<m.length;x++)w+=m[x];const T=f.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function KM(s,e,n,r){let o=new WeakMap;function c(h){const m=r.render.frame,g=h.geometry,_=e.get(h,g);if(o.get(_)!==m&&(e.update(_),o.set(_,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const y=h.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return _}function u(){o=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}class rg extends Sn{constructor(e,n,r,o,c,u,f,h,m,g=zs){if(g!==zs&&g!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===zs&&(r=Yr),r===void 0&&g===js&&(r=Ws),super(null,o,c,u,f,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:di,this.minFilter=h!==void 0?h:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const sg=new Sn,Sm=new rg(1,1),ag=new $0,og=new Fx,lg=new tg,Mm=[],Em=[],wm=new Float32Array(16),Tm=new Float32Array(9),Am=new Float32Array(4);function Ks(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Mm[o];if(c===void 0&&(c=new Float32Array(o),Mm[o]=c),e!==0){r.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(c,f)}return c}function Zt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Fl(s,e){let n=Em[e];n===void 0&&(n=new Int32Array(e),Em[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function ZM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function QM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2fv(this.addr,e),Qt(n,e)}}function JM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;s.uniform3fv(this.addr,e),Qt(n,e)}}function e1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4fv(this.addr,e),Qt(n,e)}}function t1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Am.set(r),s.uniformMatrix2fv(this.addr,!1,Am),Qt(n,r)}}function n1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Tm.set(r),s.uniformMatrix3fv(this.addr,!1,Tm),Qt(n,r)}}function i1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;wm.set(r),s.uniformMatrix4fv(this.addr,!1,wm),Qt(n,r)}}function r1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function s1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2iv(this.addr,e),Qt(n,e)}}function a1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3iv(this.addr,e),Qt(n,e)}}function o1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4iv(this.addr,e),Qt(n,e)}}function l1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function c1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2uiv(this.addr,e),Qt(n,e)}}function u1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3uiv(this.addr,e),Qt(n,e)}}function d1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4uiv(this.addr,e),Qt(n,e)}}function f1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Sm.compareFunction=W0,c=Sm):c=sg,n.setTexture2D(e||c,o)}function h1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||og,o)}function p1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||lg,o)}function m1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||ag,o)}function g1(s){switch(s){case 5126:return ZM;case 35664:return QM;case 35665:return JM;case 35666:return e1;case 35674:return t1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return r1;case 35667:case 35671:return s1;case 35668:case 35672:return a1;case 35669:case 35673:return o1;case 5125:return l1;case 36294:return c1;case 36295:return u1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}function v1(s,e){s.uniform1fv(this.addr,e)}function _1(s,e){const n=Ks(e,this.size,2);s.uniform2fv(this.addr,n)}function x1(s,e){const n=Ks(e,this.size,3);s.uniform3fv(this.addr,n)}function y1(s,e){const n=Ks(e,this.size,4);s.uniform4fv(this.addr,n)}function S1(s,e){const n=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function M1(s,e){const n=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function E1(s,e){const n=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function w1(s,e){s.uniform1iv(this.addr,e)}function T1(s,e){s.uniform2iv(this.addr,e)}function A1(s,e){s.uniform3iv(this.addr,e)}function b1(s,e){s.uniform4iv(this.addr,e)}function C1(s,e){s.uniform1uiv(this.addr,e)}function R1(s,e){s.uniform2uiv(this.addr,e)}function P1(s,e){s.uniform3uiv(this.addr,e)}function N1(s,e){s.uniform4uiv(this.addr,e)}function L1(s,e,n){const r=this.cache,o=e.length,c=Fl(n,o);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||sg,c[u])}function D1(s,e,n){const r=this.cache,o=e.length,c=Fl(n,o);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||og,c[u])}function I1(s,e,n){const r=this.cache,o=e.length,c=Fl(n,o);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||lg,c[u])}function U1(s,e,n){const r=this.cache,o=e.length,c=Fl(n,o);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||ag,c[u])}function F1(s){switch(s){case 5126:return v1;case 35664:return _1;case 35665:return x1;case 35666:return y1;case 35674:return S1;case 35675:return M1;case 35676:return E1;case 5124:case 35670:return w1;case 35667:case 35671:return T1;case 35668:case 35672:return A1;case 35669:case 35673:return b1;case 5125:return C1;case 36294:return R1;case 36295:return P1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return D1;case 35680:case 36300:case 36308:case 36293:return I1;case 36289:case 36303:case 36311:case 36292:return U1}}class O1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=g1(n.type)}}class k1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=F1(n.type)}}class z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const Ku=/(\w+)(\])?(\[|\.)?/g;function bm(s,e){s.seq.push(e),s.map[e.id]=e}function B1(s,e,n){const r=s.name,o=r.length;for(Ku.lastIndex=0;;){const c=Ku.exec(r),u=Ku.lastIndex;let f=c[1];const h=c[2]==="]",m=c[3];if(h&&(f=f|0),m===void 0||m==="["&&u+2===o){bm(n,m===void 0?new O1(f,s,e):new k1(f,s,e));break}else{let _=n.map[f];_===void 0&&(_=new z1(f),bm(n,_)),n=_}}}class Al{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);B1(c,u,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Cm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const H1=37297;let V1=0;function G1(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const Rm=new ot;function W1(s){St._getMatrix(Rm,St.workingColorSpace,s);const e=`mat3( ${Rm.elements.map(n=>n.toFixed(4))} )`;switch(St.getTransfer(s)){case Il:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Pm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+G1(s.getShaderSource(e),u)}else return o}function j1(s,e){const n=W1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function X1(s,e){let n;switch(e){case cx:n="Linear";break;case ux:n="Reinhard";break;case dx:n="Cineon";break;case fx:n="ACESFilmic";break;case px:n="AgX";break;case mx:n="Neutral";break;case hx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _l=new ie;function $1(){St.getLuminanceCoefficients(_l);const s=_l.x.toFixed(4),e=_l.y.toFixed(4),n=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function Y1(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function K1(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Fa(s){return s!==""}function Nm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(s){return s.replace(Z1,J1)}const Q1=new Map;function J1(s,e){let n=ct[e];if(n===void 0){const r=Q1.get(e);if(r!==void 0)n=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Vd(n)}const eE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dm(s){return s.replace(eE,tE)}function tE(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Im(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function nE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===R0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===P0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function iE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case Dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function sE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case N0:e="ENVMAP_BLENDING_MULTIPLY";break;case ox:e="ENVMAP_BLENDING_MIX";break;case lx:e="ENVMAP_BLENDING_ADD";break}return e}function aE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function oE(s,e,n,r){const o=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=nE(n),m=iE(n),g=rE(n),_=sE(n),y=aE(n),S=q1(n),w=Y1(c),T=o.createProgram();let x,v,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Fa).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Fa).join(`
`),v.length>0&&(v+=`
`)):(x=[Im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),v=[Im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yr?"#define TONE_MAPPING":"",n.toneMapping!==yr?ct.tonemapping_pars_fragment:"",n.toneMapping!==yr?X1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,j1("linearToOutputTexel",n.outputColorSpace),$1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fa).join(`
`)),u=Vd(u),u=Nm(u,n),u=Lm(u,n),f=Vd(f),f=Nm(f,n),f=Lm(f,n),u=Dm(u),f=Dm(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",n.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=N+x+u,b=N+v+f,G=Cm(o,o.VERTEX_SHADER,L),O=Cm(o,o.FRAGMENT_SHADER,b);o.attachShader(T,G),o.attachShader(T,O),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function U(B){if(s.debug.checkShaderErrors){const V=o.getProgramInfoLog(T).trim(),X=o.getShaderInfoLog(G).trim(),oe=o.getShaderInfoLog(O).trim();let se=!0,ee=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(se=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,G,O);else{const ne=Pm(o,G,"vertex"),z=Pm(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+V+`
`+ne+`
`+z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(X===""||oe==="")&&(ee=!1);ee&&(B.diagnostics={runnable:se,programLog:V,vertexShader:{log:X,prefix:x},fragmentShader:{log:oe,prefix:v}})}o.deleteShader(G),o.deleteShader(O),k=new Al(o,T),P=K1(o,T)}let k;this.getUniforms=function(){return k===void 0&&U(this),k};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(T,H1)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=V1++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=G,this.fragmentShader=O,this}let lE=0;class cE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new uE(e),n.set(e,r)),r}}class uE{constructor(e){this.id=lE++,this.code=e,this.usedTimes=0}}function dE(s,e,n,r,o,c,u){const f=new Y0,h=new cE,m=new Set,g=[],_=o.logarithmicDepthBuffer,y=o.vertexTextures;let S=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return m.add(P),P===0?"uv":`uv${P}`}function x(P,A,B,V,X){const oe=V.fog,se=X.geometry,ee=P.isMeshStandardMaterial?V.environment:null,ne=(P.isMeshStandardMaterial?n:e).get(P.envMap||ee),z=ne&&ne.mapping===Dl?ne.image.height:null,j=w[P.type];P.precision!==null&&(S=o.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const J=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,I=J!==void 0?J.length:0;let re=0;se.morphAttributes.position!==void 0&&(re=1),se.morphAttributes.normal!==void 0&&(re=2),se.morphAttributes.color!==void 0&&(re=3);let Te,Q,he,xe;if(j){const xt=_i[j];Te=xt.vertexShader,Q=xt.fragmentShader}else Te=P.vertexShader,Q=P.fragmentShader,h.update(P),he=h.getVertexShaderID(P),xe=h.getFragmentShaderID(P);const ve=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Ie=X.isInstancedMesh===!0,Ye=X.isBatchedMesh===!0,Mt=!!P.map,ft=!!P.matcap,Pt=!!ne,Y=!!P.aoMap,rn=!!P.lightMap,ut=!!P.bumpMap,lt=!!P.normalMap,Ke=!!P.displacementMap,Tt=!!P.emissiveMap,$e=!!P.metalnessMap,D=!!P.roughnessMap,C=P.anisotropy>0,$=P.clearcoat>0,le=P.dispersion>0,pe=P.iridescence>0,me=P.sheen>0,ze=P.transmission>0,Ce=C&&!!P.anisotropyMap,Ue=$&&!!P.clearcoatMap,dt=$&&!!P.clearcoatNormalMap,Me=$&&!!P.clearcoatRoughnessMap,Oe=pe&&!!P.iridescenceMap,Je=pe&&!!P.iridescenceThicknessMap,et=me&&!!P.sheenColorMap,ke=me&&!!P.sheenRoughnessMap,ht=!!P.specularMap,rt=!!P.specularColorMap,bt=!!P.specularIntensityMap,q=ze&&!!P.transmissionMap,Re=ze&&!!P.thicknessMap,fe=!!P.gradientMap,ge=!!P.alphaMap,Le=P.alphaTest>0,Ne=!!P.alphaHash,st=!!P.extensions;let It=yr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(It=s.toneMapping);const $t={shaderID:j,shaderType:P.type,shaderName:P.name,vertexShader:Te,fragmentShader:Q,defines:P.defines,customVertexShaderID:he,customFragmentShaderID:xe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ye,batchingColor:Ye&&X._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&X.instanceColor!==null,instancingMorph:Ie&&X.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:$s,alphaToCoverage:!!P.alphaToCoverage,map:Mt,matcap:ft,envMap:Pt,envMapMode:Pt&&ne.mapping,envMapCubeUVHeight:z,aoMap:Y,lightMap:rn,bumpMap:ut,normalMap:lt,displacementMap:y&&Ke,emissiveMap:Tt,normalMapObjectSpace:lt&&P.normalMapType===xx,normalMapTangentSpace:lt&&P.normalMapType===G0,metalnessMap:$e,roughnessMap:D,anisotropy:C,anisotropyMap:Ce,clearcoat:$,clearcoatMap:Ue,clearcoatNormalMap:dt,clearcoatRoughnessMap:Me,dispersion:le,iridescence:pe,iridescenceMap:Oe,iridescenceThicknessMap:Je,sheen:me,sheenColorMap:et,sheenRoughnessMap:ke,specularMap:ht,specularColorMap:rt,specularIntensityMap:bt,transmission:ze,transmissionMap:q,thicknessMap:Re,gradientMap:fe,opaque:P.transparent===!1&&P.blending===ks&&P.alphaToCoverage===!1,alphaMap:ge,alphaTest:Le,alphaHash:Ne,combine:P.combine,mapUv:Mt&&T(P.map.channel),aoMapUv:Y&&T(P.aoMap.channel),lightMapUv:rn&&T(P.lightMap.channel),bumpMapUv:ut&&T(P.bumpMap.channel),normalMapUv:lt&&T(P.normalMap.channel),displacementMapUv:Ke&&T(P.displacementMap.channel),emissiveMapUv:Tt&&T(P.emissiveMap.channel),metalnessMapUv:$e&&T(P.metalnessMap.channel),roughnessMapUv:D&&T(P.roughnessMap.channel),anisotropyMapUv:Ce&&T(P.anisotropyMap.channel),clearcoatMapUv:Ue&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:dt&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(P.sheenRoughnessMap.channel),specularMapUv:ht&&T(P.specularMap.channel),specularColorMapUv:rt&&T(P.specularColorMap.channel),specularIntensityMapUv:bt&&T(P.specularIntensityMap.channel),transmissionMapUv:q&&T(P.transmissionMap.channel),thicknessMapUv:Re&&T(P.thicknessMap.channel),alphaMapUv:ge&&T(P.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(lt||C),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!se.attributes.uv&&(Mt||ge),fog:!!oe,useFog:P.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:be,skinning:X.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:re,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:Mt&&P.map.isVideoTexture===!0&&St.getTransfer(P.map.colorSpace)===Nt,decodeVideoTextureEmissive:Tt&&P.emissiveMap.isVideoTexture===!0&&St.getTransfer(P.emissiveMap.colorSpace)===Nt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===zi,flipSided:P.side===Dn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:st&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&P.extensions.multiDraw===!0||Ye)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return $t.vertexUv1s=m.has(1),$t.vertexUv2s=m.has(2),$t.vertexUv3s=m.has(3),m.clear(),$t}function v(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)A.push(B),A.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(N(A,P),L(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function N(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function L(P,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),P.push(f.mask)}function b(P){const A=w[P.type];let B;if(A){const V=_i[A];B=qx.clone(V.uniforms)}else B=P.uniforms;return B}function G(P,A){let B;for(let V=0,X=g.length;V<X;V++){const oe=g[V];if(oe.cacheKey===A){B=oe,++B.usedTimes;break}}return B===void 0&&(B=new oE(s,A,P,c),g.push(B)),B}function O(P){if(--P.usedTimes===0){const A=g.indexOf(P);g[A]=g[g.length-1],g.pop(),P.destroy()}}function U(P){h.remove(P)}function k(){h.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:b,acquireProgram:G,releaseProgram:O,releaseShaderCache:U,programs:g,dispose:k}}function fE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function hE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Um(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Fm(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(_,y,S,w,T,x){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:y,material:S,groupOrder:w,renderOrder:_.renderOrder,z:T,group:x},s[e]=v):(v.id=_.id,v.object=_,v.geometry=y,v.material=S,v.groupOrder=w,v.renderOrder=_.renderOrder,v.z=T,v.group=x),e++,v}function f(_,y,S,w,T,x){const v=u(_,y,S,w,T,x);S.transmission>0?r.push(v):S.transparent===!0?o.push(v):n.push(v)}function h(_,y,S,w,T,x){const v=u(_,y,S,w,T,x);S.transmission>0?r.unshift(v):S.transparent===!0?o.unshift(v):n.unshift(v)}function m(_,y){n.length>1&&n.sort(_||hE),r.length>1&&r.sort(y||Um),o.length>1&&o.sort(y||Um)}function g(){for(let _=e,y=s.length;_<y;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:h,finish:g,sort:m}}function pE(){let s=new WeakMap;function e(r,o){const c=s.get(r);let u;return c===void 0?(u=new Fm,s.set(r,[u])):o>=c.length?(u=new Fm,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function mE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new vt};break;case"SpotLight":n={position:new ie,direction:new ie,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=n,n}}}function gE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let vE=0;function _E(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xE(s){const e=new mE,n=gE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ie);const o=new ie,c=new Bt,u=new Bt;function f(m){let g=0,_=0,y=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,w=0,T=0,x=0,v=0,N=0,L=0,b=0,G=0,O=0,U=0;m.sort(_E);for(let P=0,A=m.length;P<A;P++){const B=m[P],V=B.color,X=B.intensity,oe=B.distance,se=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=V.r*X,_+=V.g*X,y+=V.b*X;else if(B.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(B.sh.coefficients[ee],X);U++}else if(B.isDirectionalLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ne=B.shadow,z=n.get(B);z.shadowIntensity=ne.intensity,z.shadowBias=ne.bias,z.shadowNormalBias=ne.normalBias,z.shadowRadius=ne.radius,z.shadowMapSize=ne.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=se,r.directionalShadowMatrix[S]=B.shadow.matrix,N++}r.directional[S]=ee,S++}else if(B.isSpotLight){const ee=e.get(B);ee.position.setFromMatrixPosition(B.matrixWorld),ee.color.copy(V).multiplyScalar(X),ee.distance=oe,ee.coneCos=Math.cos(B.angle),ee.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ee.decay=B.decay,r.spot[T]=ee;const ne=B.shadow;if(B.map&&(r.spotLightMap[G]=B.map,G++,ne.updateMatrices(B),B.castShadow&&O++),r.spotLightMatrix[T]=ne.matrix,B.castShadow){const z=n.get(B);z.shadowIntensity=ne.intensity,z.shadowBias=ne.bias,z.shadowNormalBias=ne.normalBias,z.shadowRadius=ne.radius,z.shadowMapSize=ne.mapSize,r.spotShadow[T]=z,r.spotShadowMap[T]=se,b++}T++}else if(B.isRectAreaLight){const ee=e.get(B);ee.color.copy(V).multiplyScalar(X),ee.halfWidth.set(B.width*.5,0,0),ee.halfHeight.set(0,B.height*.5,0),r.rectArea[x]=ee,x++}else if(B.isPointLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity),ee.distance=B.distance,ee.decay=B.decay,B.castShadow){const ne=B.shadow,z=n.get(B);z.shadowIntensity=ne.intensity,z.shadowBias=ne.bias,z.shadowNormalBias=ne.normalBias,z.shadowRadius=ne.radius,z.shadowMapSize=ne.mapSize,z.shadowCameraNear=ne.camera.near,z.shadowCameraFar=ne.camera.far,r.pointShadow[w]=z,r.pointShadowMap[w]=se,r.pointShadowMatrix[w]=B.shadow.matrix,L++}r.point[w]=ee,w++}else if(B.isHemisphereLight){const ee=e.get(B);ee.skyColor.copy(B.color).multiplyScalar(X),ee.groundColor.copy(B.groundColor).multiplyScalar(X),r.hemi[v]=ee,v++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=y;const k=r.hash;(k.directionalLength!==S||k.pointLength!==w||k.spotLength!==T||k.rectAreaLength!==x||k.hemiLength!==v||k.numDirectionalShadows!==N||k.numPointShadows!==L||k.numSpotShadows!==b||k.numSpotMaps!==G||k.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=x,r.point.length=w,r.hemi.length=v,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=b+G-O,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=U,k.directionalLength=S,k.pointLength=w,k.spotLength=T,k.rectAreaLength=x,k.hemiLength=v,k.numDirectionalShadows=N,k.numPointShadows=L,k.numSpotShadows=b,k.numSpotMaps=G,k.numLightProbes=U,r.version=vE++)}function h(m,g){let _=0,y=0,S=0,w=0,T=0;const x=g.matrixWorldInverse;for(let v=0,N=m.length;v<N;v++){const L=m[v];if(L.isDirectionalLight){const b=r.directional[_];b.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(x),_++}else if(L.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(x),S++}else if(L.isRectAreaLight){const b=r.rectArea[w];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(x),u.identity(),c.copy(L.matrixWorld),c.premultiply(x),u.extractRotation(c),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),w++}else if(L.isPointLight){const b=r.point[y];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(x),y++}else if(L.isHemisphereLight){const b=r.hemi[T];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(x),T++}}}return{setup:f,setupView:h,state:r}}function Om(s){const e=new xE(s),n=[],r=[];function o(g){m.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function u(g){r.push(g)}function f(){e.setup(n)}function h(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:h,pushLight:c,pushShadow:u}}function yE(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let f;return u===void 0?(f=new Om(s),e.set(o,[f])):c>=u.length?(f=new Om(s),u.push(f)):f=u[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class SE extends Ys{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ME extends Ys{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const EE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wE=`uniform sampler2D shadow_pass;
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
}`;function TE(s,e,n){let r=new Zd;const o=new _t,c=new _t,u=new Vt,f=new SE({depthPacking:_x}),h=new ME,m={},g=n.maxTextureSize,_={[Sr]:Dn,[Dn]:Sr,[zi]:zi},y=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:EE,fragmentShader:wE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const w=new Bn;w.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ln(w,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R0;let v=this.type;this.render=function(O,U,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),V=s.state;V.setBlending(xr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const X=v!==ki&&this.type===ki,oe=v===ki&&this.type!==ki;for(let se=0,ee=O.length;se<ee;se++){const ne=O[se],z=ne.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const j=z.getFrameExtents();if(o.multiply(j),c.copy(z.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/j.x),o.x=c.x*j.x,z.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/j.y),o.y=c.y*j.y,z.mapSize.y=c.y)),z.map===null||X===!0||oe===!0){const I=this.type!==ki?{minFilter:di,magFilter:di}:{};z.map!==null&&z.map.dispose(),z.map=new Kr(o.x,o.y,I),z.map.texture.name=ne.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const J=z.getViewportCount();for(let I=0;I<J;I++){const re=z.getViewport(I);u.set(c.x*re.x,c.y*re.y,c.x*re.z,c.y*re.w),V.viewport(u),z.updateMatrices(ne,I),r=z.getFrustum(),b(U,k,z.camera,ne,this.type)}z.isPointLightShadow!==!0&&this.type===ki&&N(z,k),z.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(P,A,B)};function N(O,U){const k=e.update(T);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Kr(o.x,o.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(U,null,k,y,T,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(U,null,k,S,T,null)}function L(O,U,k,P){let A=null;const B=k.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(B!==void 0)A=B;else if(A=k.isPointLight===!0?h:f,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const V=A.uuid,X=U.uuid;let oe=m[V];oe===void 0&&(oe={},m[V]=oe);let se=oe[X];se===void 0&&(se=A.clone(),oe[X]=se,U.addEventListener("dispose",G)),A=se}if(A.visible=U.visible,A.wireframe=U.wireframe,P===ki?A.side=U.shadowSide!==null?U.shadowSide:U.side:A.side=U.shadowSide!==null?U.shadowSide:_[U.side],A.alphaMap=U.alphaMap,A.alphaTest=U.alphaTest,A.map=U.map,A.clipShadows=U.clipShadows,A.clippingPlanes=U.clippingPlanes,A.clipIntersection=U.clipIntersection,A.displacementMap=U.displacementMap,A.displacementScale=U.displacementScale,A.displacementBias=U.displacementBias,A.wireframeLinewidth=U.wireframeLinewidth,A.linewidth=U.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const V=s.properties.get(A);V.light=k}return A}function b(O,U,k,P,A){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&A===ki)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,O.matrixWorld);const X=e.update(O),oe=O.material;if(Array.isArray(oe)){const se=X.groups;for(let ee=0,ne=se.length;ee<ne;ee++){const z=se[ee],j=oe[z.materialIndex];if(j&&j.visible){const J=L(O,j,P,A);O.onBeforeShadow(s,O,U,k,X,J,z),s.renderBufferDirect(k,null,X,J,O,z),O.onAfterShadow(s,O,U,k,X,J,z)}}}else if(oe.visible){const se=L(O,oe,P,A);O.onBeforeShadow(s,O,U,k,X,se,null),s.renderBufferDirect(k,null,X,se,O,null),O.onAfterShadow(s,O,U,k,X,se,null)}}const V=O.children;for(let X=0,oe=V.length;X<oe;X++)b(V[X],U,k,P,A)}function G(O){O.target.removeEventListener("dispose",G);for(const k in m){const P=m[k],A=O.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const AE={[rd]:sd,[ad]:cd,[od]:ud,[Hs]:ld,[sd]:rd,[cd]:ad,[ud]:od,[ld]:Hs};function bE(s,e){function n(){let q=!1;const Re=new Vt;let fe=null;const ge=new Vt(0,0,0,0);return{setMask:function(Le){fe!==Le&&!q&&(s.colorMask(Le,Le,Le,Le),fe=Le)},setLocked:function(Le){q=Le},setClear:function(Le,Ne,st,It,$t){$t===!0&&(Le*=It,Ne*=It,st*=It),Re.set(Le,Ne,st,It),ge.equals(Re)===!1&&(s.clearColor(Le,Ne,st,It),ge.copy(Re))},reset:function(){q=!1,fe=null,ge.set(-1,0,0,0)}}}function r(){let q=!1,Re=!1,fe=null,ge=null,Le=null;return{setReversed:function(Ne){if(Re!==Ne){const st=e.get("EXT_clip_control");Re?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const It=Le;Le=null,this.setClear(It)}Re=Ne},getReversed:function(){return Re},setTest:function(Ne){Ne?ve(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(Ne){fe!==Ne&&!q&&(s.depthMask(Ne),fe=Ne)},setFunc:function(Ne){if(Re&&(Ne=AE[Ne]),ge!==Ne){switch(Ne){case rd:s.depthFunc(s.NEVER);break;case sd:s.depthFunc(s.ALWAYS);break;case ad:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case od:s.depthFunc(s.EQUAL);break;case ld:s.depthFunc(s.GEQUAL);break;case cd:s.depthFunc(s.GREATER);break;case ud:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=Ne}},setLocked:function(Ne){q=Ne},setClear:function(Ne){Le!==Ne&&(Re&&(Ne=1-Ne),s.clearDepth(Ne),Le=Ne)},reset:function(){q=!1,fe=null,ge=null,Le=null,Re=!1}}}function o(){let q=!1,Re=null,fe=null,ge=null,Le=null,Ne=null,st=null,It=null,$t=null;return{setTest:function(xt){q||(xt?ve(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(xt){Re!==xt&&!q&&(s.stencilMask(xt),Re=xt)},setFunc:function(xt,Mn,gn){(fe!==xt||ge!==Mn||Le!==gn)&&(s.stencilFunc(xt,Mn,gn),fe=xt,ge=Mn,Le=gn)},setOp:function(xt,Mn,gn){(Ne!==xt||st!==Mn||It!==gn)&&(s.stencilOp(xt,Mn,gn),Ne=xt,st=Mn,It=gn)},setLocked:function(xt){q=xt},setClear:function(xt){$t!==xt&&(s.clearStencil(xt),$t=xt)},reset:function(){q=!1,Re=null,fe=null,ge=null,Le=null,Ne=null,st=null,It=null,$t=null}}}const c=new n,u=new r,f=new o,h=new WeakMap,m=new WeakMap;let g={},_={},y=new WeakMap,S=[],w=null,T=!1,x=null,v=null,N=null,L=null,b=null,G=null,O=null,U=new vt(0,0,0),k=0,P=!1,A=null,B=null,V=null,X=null,oe=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,ne=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(z)[1]),ee=ne>=1):z.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ee=ne>=2);let j=null,J={};const I=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Te=new Vt().fromArray(I),Q=new Vt().fromArray(re);function he(q,Re,fe,ge){const Le=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(q,Ne),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<fe;st++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Re+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Ne}const xe={};xe[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ve(s.DEPTH_TEST),u.setFunc(Hs),ut(!1),lt(Hp),ve(s.CULL_FACE),Y(xr);function ve(q){g[q]!==!0&&(s.enable(q),g[q]=!0)}function be(q){g[q]!==!1&&(s.disable(q),g[q]=!1)}function Ie(q,Re){return _[q]!==Re?(s.bindFramebuffer(q,Re),_[q]=Re,q===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Re),q===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ye(q,Re){let fe=S,ge=!1;if(q){fe=y.get(Re),fe===void 0&&(fe=[],y.set(Re,fe));const Le=q.textures;if(fe.length!==Le.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,st=Le.length;Ne<st;Ne++)fe[Ne]=s.COLOR_ATTACHMENT0+Ne;fe.length=Le.length,ge=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,ge=!0);ge&&s.drawBuffers(fe)}function Mt(q){return w!==q?(s.useProgram(q),w=q,!0):!1}const ft={[Xr]:s.FUNC_ADD,[W_]:s.FUNC_SUBTRACT,[j_]:s.FUNC_REVERSE_SUBTRACT};ft[X_]=s.MIN,ft[$_]=s.MAX;const Pt={[q_]:s.ZERO,[Y_]:s.ONE,[K_]:s.SRC_COLOR,[nd]:s.SRC_ALPHA,[nx]:s.SRC_ALPHA_SATURATE,[ex]:s.DST_COLOR,[Q_]:s.DST_ALPHA,[Z_]:s.ONE_MINUS_SRC_COLOR,[id]:s.ONE_MINUS_SRC_ALPHA,[tx]:s.ONE_MINUS_DST_COLOR,[J_]:s.ONE_MINUS_DST_ALPHA,[ix]:s.CONSTANT_COLOR,[rx]:s.ONE_MINUS_CONSTANT_COLOR,[sx]:s.CONSTANT_ALPHA,[ax]:s.ONE_MINUS_CONSTANT_ALPHA};function Y(q,Re,fe,ge,Le,Ne,st,It,$t,xt){if(q===xr){T===!0&&(be(s.BLEND),T=!1);return}if(T===!1&&(ve(s.BLEND),T=!0),q!==G_){if(q!==x||xt!==P){if((v!==Xr||b!==Xr)&&(s.blendEquation(s.FUNC_ADD),v=Xr,b=Xr),xt)switch(q){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vp:s.blendFunc(s.ONE,s.ONE);break;case Gp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Gp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}N=null,L=null,G=null,O=null,U.set(0,0,0),k=0,x=q,P=xt}return}Le=Le||Re,Ne=Ne||fe,st=st||ge,(Re!==v||Le!==b)&&(s.blendEquationSeparate(ft[Re],ft[Le]),v=Re,b=Le),(fe!==N||ge!==L||Ne!==G||st!==O)&&(s.blendFuncSeparate(Pt[fe],Pt[ge],Pt[Ne],Pt[st]),N=fe,L=ge,G=Ne,O=st),(It.equals(U)===!1||$t!==k)&&(s.blendColor(It.r,It.g,It.b,$t),U.copy(It),k=$t),x=q,P=!1}function rn(q,Re){q.side===zi?be(s.CULL_FACE):ve(s.CULL_FACE);let fe=q.side===Dn;Re&&(fe=!fe),ut(fe),q.blending===ks&&q.transparent===!1?Y(xr):Y(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),c.setMask(q.colorWrite);const ge=q.stencilWrite;f.setTest(ge),ge&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Tt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(q){A!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),A=q)}function lt(q){q!==H_?(ve(s.CULL_FACE),q!==B&&(q===Hp?s.cullFace(s.BACK):q===V_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),B=q}function Ke(q){q!==V&&(ee&&s.lineWidth(q),V=q)}function Tt(q,Re,fe){q?(ve(s.POLYGON_OFFSET_FILL),(X!==Re||oe!==fe)&&(s.polygonOffset(Re,fe),X=Re,oe=fe)):be(s.POLYGON_OFFSET_FILL)}function $e(q){q?ve(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function D(q){q===void 0&&(q=s.TEXTURE0+se-1),j!==q&&(s.activeTexture(q),j=q)}function C(q,Re,fe){fe===void 0&&(j===null?fe=s.TEXTURE0+se-1:fe=j);let ge=J[fe];ge===void 0&&(ge={type:void 0,texture:void 0},J[fe]=ge),(ge.type!==q||ge.texture!==Re)&&(j!==fe&&(s.activeTexture(fe),j=fe),s.bindTexture(q,Re||xe[q]),ge.type=q,ge.texture=Re)}function $(){const q=J[j];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function le(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ze(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Je(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function et(q){Te.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),Te.copy(q))}function ke(q){Q.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Q.copy(q))}function ht(q,Re){let fe=m.get(Re);fe===void 0&&(fe=new WeakMap,m.set(Re,fe));let ge=fe.get(q);ge===void 0&&(ge=s.getUniformBlockIndex(Re,q.name),fe.set(q,ge))}function rt(q,Re){const ge=m.get(Re).get(q);h.get(Re)!==ge&&(s.uniformBlockBinding(Re,ge,q.__bindingPointIndex),h.set(Re,ge))}function bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},j=null,J={},_={},y=new WeakMap,S=[],w=null,T=!1,x=null,v=null,N=null,L=null,b=null,G=null,O=null,U=new vt(0,0,0),k=0,P=!1,A=null,B=null,V=null,X=null,oe=null,Te.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:ve,disable:be,bindFramebuffer:Ie,drawBuffers:Ye,useProgram:Mt,setBlending:Y,setMaterial:rn,setFlipSided:ut,setCullFace:lt,setLineWidth:Ke,setPolygonOffset:Tt,setScissorTest:$e,activeTexture:D,bindTexture:C,unbindTexture:$,compressedTexImage2D:le,compressedTexImage3D:pe,texImage2D:Oe,texImage3D:Je,updateUBOMapping:ht,uniformBlockBinding:rt,texStorage2D:dt,texStorage3D:Me,texSubImage2D:me,texSubImage3D:ze,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ue,scissor:et,viewport:ke,reset:bt}}function km(s,e,n,r){const o=CE(r);switch(n){case F0:return s*e;case k0:return s*e;case z0:return s*e*2;case B0:return s*e/o.components*o.byteLength;case qd:return s*e/o.components*o.byteLength;case H0:return s*e*2/o.components*o.byteLength;case Yd:return s*e*2/o.components*o.byteLength;case O0:return s*e*3/o.components*o.byteLength;case ui:return s*e*4/o.components*o.byteLength;case Kd:return s*e*4/o.components*o.byteLength;case Sl:case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case El:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gd:case _d:return Math.max(s,16)*Math.max(e,8)/4;case md:case vd:return Math.max(s,8)*Math.max(e,8)/2;case xd:case yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Md:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Td:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Id:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Fd:case Od:return Math.ceil(s/4)*Math.ceil(e/4)*16;case V0:case kd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case zd:case Bd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function CE(s){switch(s){case Wi:case D0:return{byteLength:1,components:1};case Oa:case I0:case za:return{byteLength:2,components:1};case Xd:case $d:return{byteLength:2,components:4};case Yr:case jd:case Hi:return{byteLength:4,components:1};case U0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function RE(s,e,n,r,o,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new _t,g=new WeakMap;let _;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,C){return S?new OffscreenCanvas(D,C):ka("canvas")}function T(D,C,$){let le=1;const pe=$e(D);if((pe.width>$||pe.height>$)&&(le=$/Math.max(pe.width,pe.height)),le<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const me=Math.floor(le*pe.width),ze=Math.floor(le*pe.height);_===void 0&&(_=w(me,ze));const Ce=C?w(me,ze):_;return Ce.width=me,Ce.height=ze,Ce.getContext("2d").drawImage(D,0,0,me,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+me+"x"+ze+")."),Ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),D;return D}function x(D){return D.generateMipmaps}function v(D){s.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(D,C,$,le,pe=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let me=C;if(C===s.RED&&($===s.FLOAT&&(me=s.R32F),$===s.HALF_FLOAT&&(me=s.R16F),$===s.UNSIGNED_BYTE&&(me=s.R8)),C===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(me=s.R8UI),$===s.UNSIGNED_SHORT&&(me=s.R16UI),$===s.UNSIGNED_INT&&(me=s.R32UI),$===s.BYTE&&(me=s.R8I),$===s.SHORT&&(me=s.R16I),$===s.INT&&(me=s.R32I)),C===s.RG&&($===s.FLOAT&&(me=s.RG32F),$===s.HALF_FLOAT&&(me=s.RG16F),$===s.UNSIGNED_BYTE&&(me=s.RG8)),C===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(me=s.RG8UI),$===s.UNSIGNED_SHORT&&(me=s.RG16UI),$===s.UNSIGNED_INT&&(me=s.RG32UI),$===s.BYTE&&(me=s.RG8I),$===s.SHORT&&(me=s.RG16I),$===s.INT&&(me=s.RG32I)),C===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(me=s.RGB8UI),$===s.UNSIGNED_SHORT&&(me=s.RGB16UI),$===s.UNSIGNED_INT&&(me=s.RGB32UI),$===s.BYTE&&(me=s.RGB8I),$===s.SHORT&&(me=s.RGB16I),$===s.INT&&(me=s.RGB32I)),C===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),$===s.UNSIGNED_INT&&(me=s.RGBA32UI),$===s.BYTE&&(me=s.RGBA8I),$===s.SHORT&&(me=s.RGBA16I),$===s.INT&&(me=s.RGBA32I)),C===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),C===s.RGBA){const ze=pe?Il:St.getTransfer(le);$===s.FLOAT&&(me=s.RGBA32F),$===s.HALF_FLOAT&&(me=s.RGBA16F),$===s.UNSIGNED_BYTE&&(me=ze===Nt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function b(D,C){let $;return D?C===null||C===Yr||C===Ws?$=s.DEPTH24_STENCIL8:C===Hi?$=s.DEPTH32F_STENCIL8:C===Oa&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Yr||C===Ws?$=s.DEPTH_COMPONENT24:C===Hi?$=s.DEPTH_COMPONENT32F:C===Oa&&($=s.DEPTH_COMPONENT16),$}function G(D,C){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==di&&D.minFilter!==xi?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function O(D){const C=D.target;C.removeEventListener("dispose",O),k(C),C.isVideoTexture&&g.delete(C)}function U(D){const C=D.target;C.removeEventListener("dispose",U),A(C)}function k(D){const C=r.get(D);if(C.__webglInit===void 0)return;const $=D.source,le=y.get($);if(le){const pe=le[C.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&P(D),Object.keys(le).length===0&&y.delete($)}r.remove(D)}function P(D){const C=r.get(D);s.deleteTexture(C.__webglTexture);const $=D.source,le=y.get($);delete le[C.__cacheKey],u.memory.textures--}function A(D){const C=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(C.__webglFramebuffer[le]))for(let pe=0;pe<C.__webglFramebuffer[le].length;pe++)s.deleteFramebuffer(C.__webglFramebuffer[le][pe]);else s.deleteFramebuffer(C.__webglFramebuffer[le]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[le])}else{if(Array.isArray(C.__webglFramebuffer))for(let le=0;le<C.__webglFramebuffer.length;le++)s.deleteFramebuffer(C.__webglFramebuffer[le]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let le=0;le<C.__webglColorRenderbuffer.length;le++)C.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[le]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const $=D.textures;for(let le=0,pe=$.length;le<pe;le++){const me=r.get($[le]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),u.memory.textures--),r.remove($[le])}r.remove(D)}let B=0;function V(){B=0}function X(){const D=B;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),B+=1,D}function oe(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function se(D,C){const $=r.get(D);if(D.isVideoTexture&&Ke(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const le=D.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q($,D,C);return}}n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+C)}function ee(D,C){const $=r.get(D);if(D.version>0&&$.__version!==D.version){Q($,D,C);return}n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+C)}function ne(D,C){const $=r.get(D);if(D.version>0&&$.__version!==D.version){Q($,D,C);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+C)}function z(D,C){const $=r.get(D);if(D.version>0&&$.__version!==D.version){he($,D,C);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+C)}const j={[hd]:s.REPEAT,[Bi]:s.CLAMP_TO_EDGE,[pd]:s.MIRRORED_REPEAT},J={[di]:s.NEAREST,[gx]:s.NEAREST_MIPMAP_NEAREST,[Qo]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Mu]:s.LINEAR_MIPMAP_NEAREST,[qr]:s.LINEAR_MIPMAP_LINEAR},I={[yx]:s.NEVER,[Ax]:s.ALWAYS,[Sx]:s.LESS,[W0]:s.LEQUAL,[Mx]:s.EQUAL,[Tx]:s.GEQUAL,[Ex]:s.GREATER,[wx]:s.NOTEQUAL};function re(D,C){if(C.type===Hi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===xi||C.magFilter===Mu||C.magFilter===Qo||C.magFilter===qr||C.minFilter===xi||C.minFilter===Mu||C.minFilter===Qo||C.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,j[C.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,j[C.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,j[C.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,J[C.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,J[C.minFilter]),C.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,I[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===di||C.minFilter!==Qo&&C.minFilter!==qr||C.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function Te(D,C){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",O));const le=C.source;let pe=y.get(le);pe===void 0&&(pe={},y.set(le,pe));const me=oe(C);if(me!==D.__cacheKey){pe[me]===void 0&&(pe[me]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),pe[me].usedTimes++;const ze=pe[D.__cacheKey];ze!==void 0&&(pe[D.__cacheKey].usedTimes--,ze.usedTimes===0&&P(C)),D.__cacheKey=me,D.__webglTexture=pe[me].texture}return $}function Q(D,C,$){let le=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(le=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(le=s.TEXTURE_3D);const pe=Te(D,C),me=C.source;n.bindTexture(le,D.__webglTexture,s.TEXTURE0+$);const ze=r.get(me);if(me.version!==ze.__version||pe===!0){n.activeTexture(s.TEXTURE0+$);const Ce=St.getPrimaries(St.workingColorSpace),Ue=C.colorSpace===_r?null:St.getPrimaries(C.colorSpace),dt=C.colorSpace===_r||Ce===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Me=T(C.image,!1,o.maxTextureSize);Me=Tt(C,Me);const Oe=c.convert(C.format,C.colorSpace),Je=c.convert(C.type);let et=L(C.internalFormat,Oe,Je,C.colorSpace,C.isVideoTexture);re(le,C);let ke;const ht=C.mipmaps,rt=C.isVideoTexture!==!0,bt=ze.__version===void 0||pe===!0,q=me.dataReady,Re=G(C,Me);if(C.isDepthTexture)et=b(C.format===js,C.type),bt&&(rt?n.texStorage2D(s.TEXTURE_2D,1,et,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,et,Me.width,Me.height,0,Oe,Je,null));else if(C.isDataTexture)if(ht.length>0){rt&&bt&&n.texStorage2D(s.TEXTURE_2D,Re,et,ht[0].width,ht[0].height);for(let fe=0,ge=ht.length;fe<ge;fe++)ke=ht[fe],rt?q&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,ke.width,ke.height,Oe,Je,ke.data):n.texImage2D(s.TEXTURE_2D,fe,et,ke.width,ke.height,0,Oe,Je,ke.data);C.generateMipmaps=!1}else rt?(bt&&n.texStorage2D(s.TEXTURE_2D,Re,et,Me.width,Me.height),q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,Je,Me.data)):n.texImage2D(s.TEXTURE_2D,0,et,Me.width,Me.height,0,Oe,Je,Me.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){rt&&bt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,et,ht[0].width,ht[0].height,Me.depth);for(let fe=0,ge=ht.length;fe<ge;fe++)if(ke=ht[fe],C.format!==ui)if(Oe!==null)if(rt){if(q)if(C.layerUpdates.size>0){const Le=km(ke.width,ke.height,C.format,C.type);for(const Ne of C.layerUpdates){const st=ke.data.subarray(Ne*Le/ke.data.BYTES_PER_ELEMENT,(Ne+1)*Le/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,Ne,ke.width,ke.height,1,Oe,st)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,ke.width,ke.height,Me.depth,Oe,ke.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,et,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?q&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,ke.width,ke.height,Me.depth,Oe,Je,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,fe,et,ke.width,ke.height,Me.depth,0,Oe,Je,ke.data)}else{rt&&bt&&n.texStorage2D(s.TEXTURE_2D,Re,et,ht[0].width,ht[0].height);for(let fe=0,ge=ht.length;fe<ge;fe++)ke=ht[fe],C.format!==ui?Oe!==null?rt?q&&n.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,fe,et,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?q&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,ke.width,ke.height,Oe,Je,ke.data):n.texImage2D(s.TEXTURE_2D,fe,et,ke.width,ke.height,0,Oe,Je,ke.data)}else if(C.isDataArrayTexture)if(rt){if(bt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,et,Me.width,Me.height,Me.depth),q)if(C.layerUpdates.size>0){const fe=km(Me.width,Me.height,C.format,C.type);for(const ge of C.layerUpdates){const Le=Me.data.subarray(ge*fe/Me.data.BYTES_PER_ELEMENT,(ge+1)*fe/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,Me.width,Me.height,1,Oe,Je,Le)}C.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,Je,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Me.width,Me.height,Me.depth,0,Oe,Je,Me.data);else if(C.isData3DTexture)rt?(bt&&n.texStorage3D(s.TEXTURE_3D,Re,et,Me.width,Me.height,Me.depth),q&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,Je,Me.data)):n.texImage3D(s.TEXTURE_3D,0,et,Me.width,Me.height,Me.depth,0,Oe,Je,Me.data);else if(C.isFramebufferTexture){if(bt)if(rt)n.texStorage2D(s.TEXTURE_2D,Re,et,Me.width,Me.height);else{let fe=Me.width,ge=Me.height;for(let Le=0;Le<Re;Le++)n.texImage2D(s.TEXTURE_2D,Le,et,fe,ge,0,Oe,Je,null),fe>>=1,ge>>=1}}else if(ht.length>0){if(rt&&bt){const fe=$e(ht[0]);n.texStorage2D(s.TEXTURE_2D,Re,et,fe.width,fe.height)}for(let fe=0,ge=ht.length;fe<ge;fe++)ke=ht[fe],rt?q&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,Oe,Je,ke):n.texImage2D(s.TEXTURE_2D,fe,et,Oe,Je,ke);C.generateMipmaps=!1}else if(rt){if(bt){const fe=$e(Me);n.texStorage2D(s.TEXTURE_2D,Re,et,fe.width,fe.height)}q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Je,Me)}else n.texImage2D(s.TEXTURE_2D,0,et,Oe,Je,Me);x(C)&&v(le),ze.__version=me.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function he(D,C,$){if(C.image.length!==6)return;const le=Te(D,C),pe=C.source;n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+$);const me=r.get(pe);if(pe.version!==me.__version||le===!0){n.activeTexture(s.TEXTURE0+$);const ze=St.getPrimaries(St.workingColorSpace),Ce=C.colorSpace===_r?null:St.getPrimaries(C.colorSpace),Ue=C.colorSpace===_r||ze===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const dt=C.isCompressedTexture||C.image[0].isCompressedTexture,Me=C.image[0]&&C.image[0].isDataTexture,Oe=[];for(let ge=0;ge<6;ge++)!dt&&!Me?Oe[ge]=T(C.image[ge],!0,o.maxCubemapSize):Oe[ge]=Me?C.image[ge].image:C.image[ge],Oe[ge]=Tt(C,Oe[ge]);const Je=Oe[0],et=c.convert(C.format,C.colorSpace),ke=c.convert(C.type),ht=L(C.internalFormat,et,ke,C.colorSpace),rt=C.isVideoTexture!==!0,bt=me.__version===void 0||le===!0,q=pe.dataReady;let Re=G(C,Je);re(s.TEXTURE_CUBE_MAP,C);let fe;if(dt){rt&&bt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ht,Je.width,Je.height);for(let ge=0;ge<6;ge++){fe=Oe[ge].mipmaps;for(let Le=0;Le<fe.length;Le++){const Ne=fe[Le];C.format!==ui?et!==null?rt?q&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le,0,0,Ne.width,Ne.height,et,Ne.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le,ht,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le,0,0,Ne.width,Ne.height,et,ke,Ne.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le,ht,Ne.width,Ne.height,0,et,ke,Ne.data)}}}else{if(fe=C.mipmaps,rt&&bt){fe.length>0&&Re++;const ge=$e(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ht,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Me){rt?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Oe[ge].width,Oe[ge].height,et,ke,Oe[ge].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ht,Oe[ge].width,Oe[ge].height,0,et,ke,Oe[ge].data);for(let Le=0;Le<fe.length;Le++){const st=fe[Le].image[ge].image;rt?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le+1,0,0,st.width,st.height,et,ke,st.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le+1,ht,st.width,st.height,0,et,ke,st.data)}}else{rt?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,et,ke,Oe[ge]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ht,et,ke,Oe[ge]);for(let Le=0;Le<fe.length;Le++){const Ne=fe[Le];rt?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le+1,0,0,et,ke,Ne.image[ge]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le+1,ht,et,ke,Ne.image[ge])}}}x(C)&&v(s.TEXTURE_CUBE_MAP),me.__version=pe.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function xe(D,C,$,le,pe,me){const ze=c.convert($.format,$.colorSpace),Ce=c.convert($.type),Ue=L($.internalFormat,ze,Ce,$.colorSpace),dt=r.get(C),Me=r.get($);if(Me.__renderTarget=C,!dt.__hasExternalTextures){const Oe=Math.max(1,C.width>>me),Je=Math.max(1,C.height>>me);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?n.texImage3D(pe,me,Ue,Oe,Je,C.depth,0,ze,Ce,null):n.texImage2D(pe,me,Ue,Oe,Je,0,ze,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,D),lt(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,pe,Me.__webglTexture,0,ut(C)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,le,pe,Me.__webglTexture,me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(D,C,$){if(s.bindRenderbuffer(s.RENDERBUFFER,D),C.depthBuffer){const le=C.depthTexture,pe=le&&le.isDepthTexture?le.type:null,me=b(C.stencilBuffer,pe),ze=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=ut(C);lt(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,me,C.width,C.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,me,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,me,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ze,s.RENDERBUFFER,D)}else{const le=C.textures;for(let pe=0;pe<le.length;pe++){const me=le[pe],ze=c.convert(me.format,me.colorSpace),Ce=c.convert(me.type),Ue=L(me.internalFormat,ze,Ce,me.colorSpace),dt=ut(C);$&&lt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Ue,C.width,C.height):lt(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Ue,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=r.get(C.depthTexture);le.__renderTarget=C,(!le.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),se(C.depthTexture,0);const pe=le.__webglTexture,me=ut(C);if(C.depthTexture.format===zs)lt(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(C.depthTexture.format===js)lt(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ie(D){const C=r.get(D),$=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const le=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),le){const pe=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,le.removeEventListener("dispose",pe)};le.addEventListener("dispose",pe),C.__depthDisposeCallback=pe}C.__boundDepthTexture=le}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");be(C.__webglFramebuffer,D)}else if($){C.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[le]),C.__webglDepthbuffer[le]===void 0)C.__webglDepthbuffer[le]=s.createRenderbuffer(),ve(C.__webglDepthbuffer[le],D,!1);else{const pe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=C.__webglDepthbuffer[le];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,me)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),ve(C.__webglDepthbuffer,D,!1);else{const le=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,le,s.RENDERBUFFER,pe)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(D,C,$){const le=r.get(D);C!==void 0&&xe(le.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Ie(D)}function Mt(D){const C=D.texture,$=r.get(D),le=r.get(C);D.addEventListener("dispose",U);const pe=D.textures,me=D.isWebGLCubeRenderTarget===!0,ze=pe.length>1;if(ze||(le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture()),le.__version=C.version,u.memory.textures++),me){$.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer[Ce]=[];for(let Ue=0;Ue<C.mipmaps.length;Ue++)$.__webglFramebuffer[Ce][Ue]=s.createFramebuffer()}else $.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ce=0;Ce<C.mipmaps.length;Ce++)$.__webglFramebuffer[Ce]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(ze)for(let Ce=0,Ue=pe.length;Ce<Ue;Ce++){const dt=r.get(pe[Ce]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&lt(D)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ce=0;Ce<pe.length;Ce++){const Ue=pe[Ce];$.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Ce]);const dt=c.convert(Ue.format,Ue.colorSpace),Me=c.convert(Ue.type),Oe=L(Ue.internalFormat,dt,Me,Ue.colorSpace,D.isXRRenderTarget===!0),Je=ut(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Oe,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,$.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ve($.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){n.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture),re(s.TEXTURE_CUBE_MAP,C);for(let Ce=0;Ce<6;Ce++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ue=0;Ue<C.mipmaps.length;Ue++)xe($.__webglFramebuffer[Ce][Ue],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue);else xe($.__webglFramebuffer[Ce],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);x(C)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ze){for(let Ce=0,Ue=pe.length;Ce<Ue;Ce++){const dt=pe[Ce],Me=r.get(dt);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),re(s.TEXTURE_2D,dt),xe($.__webglFramebuffer,D,dt,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),x(dt)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,le.__webglTexture),re(Ce,C),C.mipmaps&&C.mipmaps.length>0)for(let Ue=0;Ue<C.mipmaps.length;Ue++)xe($.__webglFramebuffer[Ue],D,C,s.COLOR_ATTACHMENT0,Ce,Ue);else xe($.__webglFramebuffer,D,C,s.COLOR_ATTACHMENT0,Ce,0);x(C)&&v(Ce),n.unbindTexture()}D.depthBuffer&&Ie(D)}function ft(D){const C=D.textures;for(let $=0,le=C.length;$<le;$++){const pe=C[$];if(x(pe)){const me=N(D),ze=r.get(pe).__webglTexture;n.bindTexture(me,ze),v(me),n.unbindTexture()}}}const Pt=[],Y=[];function rn(D){if(D.samples>0){if(lt(D)===!1){const C=D.textures,$=D.width,le=D.height;let pe=s.COLOR_BUFFER_BIT;const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=r.get(D),Ce=C.length>1;if(Ce)for(let Ue=0;Ue<C.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Ue=0;Ue<C.length;Ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Ue]);const dt=r.get(C[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,$,le,0,0,$,le,pe,s.NEAREST),h===!0&&(Pt.length=0,Y.length=0,Pt.push(s.COLOR_ATTACHMENT0+Ue),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Pt.push(me),Y.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Y)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Ue=0;Ue<C.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Ue]);const dt=r.get(C[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,dt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const C=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function ut(D){return Math.min(o.maxSamples,D.samples)}function lt(D){const C=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ke(D){const C=u.render.frame;g.get(D)!==C&&(g.set(D,C),D.update())}function Tt(D,C){const $=D.colorSpace,le=D.format,pe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==$s&&$!==_r&&(St.getTransfer($)===Nt?(le!==ui||pe!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),C}function $e(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=X,this.resetTextureUnits=V,this.setTexture2D=se,this.setTexture2DArray=ee,this.setTexture3D=ne,this.setTextureCube=z,this.rebindTextures=Ye,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=lt}function PE(s,e){function n(r,o=_r){let c;const u=St.getTransfer(o);if(r===Wi)return s.UNSIGNED_BYTE;if(r===Xd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===$d)return s.UNSIGNED_SHORT_5_5_5_1;if(r===U0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===D0)return s.BYTE;if(r===I0)return s.SHORT;if(r===Oa)return s.UNSIGNED_SHORT;if(r===jd)return s.INT;if(r===Yr)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===za)return s.HALF_FLOAT;if(r===F0)return s.ALPHA;if(r===O0)return s.RGB;if(r===ui)return s.RGBA;if(r===k0)return s.LUMINANCE;if(r===z0)return s.LUMINANCE_ALPHA;if(r===zs)return s.DEPTH_COMPONENT;if(r===js)return s.DEPTH_STENCIL;if(r===B0)return s.RED;if(r===qd)return s.RED_INTEGER;if(r===H0)return s.RG;if(r===Yd)return s.RG_INTEGER;if(r===Kd)return s.RGBA_INTEGER;if(r===Sl||r===Ml||r===El||r===wl)if(u===Nt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Sl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ml)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Sl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ml)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===md||r===gd||r===vd||r===_d)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===md)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_d)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xd||r===yd||r===Sd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===xd||r===yd)return u===Nt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Sd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Md||r===Ed||r===wd||r===Td||r===Ad||r===bd||r===Cd||r===Rd||r===Pd||r===Nd||r===Ld||r===Dd||r===Id||r===Ud)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Md)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ed)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Td)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ad)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Cd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ld)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Dd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Id)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ud)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tl||r===Fd||r===Od)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Tl)return u===Nt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Od)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===V0||r===kd||r===zd||r===Bd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Tl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ws?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class NE extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Os extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LE={type:"move"};class Zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const T of e.hand.values()){const x=n.getJointPose(T,r),v=this._getHandJoint(m,T);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],y=g.position.distanceTo(_.position),S=.02,w=.005;m.inputState.pinching&&y>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(LE)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Os;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const DE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IE=`
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

}`;class UE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new Sn,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Mr({vertexShader:DE,fragmentShader:IE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ln(new Wa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FE extends qs{constructor(e,n){super();const r=this;let o=null,c=1,u=null,f="local-floor",h=1,m=null,g=null,_=null,y=null,S=null,w=null;const T=new UE,x=n.getContextAttributes();let v=null,N=null;const L=[],b=[],G=new _t;let O=null;const U=new Zn;U.viewport=new Vt;const k=new Zn;k.viewport=new Vt;const P=[U,k],A=new NE;let B=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=L[Q];return he===void 0&&(he=new Zu,L[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=L[Q];return he===void 0&&(he=new Zu,L[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=L[Q];return he===void 0&&(he=new Zu,L[Q]=he),he.getHandSpace()};function X(Q){const he=b.indexOf(Q.inputSource);if(he===-1)return;const xe=L[he];xe!==void 0&&(xe.update(Q.inputSource,Q.frame,m||u),xe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function oe(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",se);for(let Q=0;Q<L.length;Q++){const he=b[Q];he!==null&&(b[Q]=null,L[Q].disconnect(he))}B=null,V=null,T.reset(),e.setRenderTarget(v),S=null,y=null,_=null,o=null,N=null,Te.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return _},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",se),x.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(G),o.renderState.layers===void 0){const he={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,he),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Kr(S.framebufferWidth,S.framebufferHeight,{format:ui,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let he=null,xe=null,ve=null;x.depth&&(ve=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=x.stencil?js:zs,xe=x.stencil?Ws:Yr);const be={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:c};_=new XRWebGLBinding(o,n),y=_.createProjectionLayer(be),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),N=new Kr(y.textureWidth,y.textureHeight,{format:ui,type:Wi,depthTexture:new rg(y.textureWidth,y.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(f),Te.setContext(o),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function se(Q){for(let he=0;he<Q.removed.length;he++){const xe=Q.removed[he],ve=b.indexOf(xe);ve>=0&&(b[ve]=null,L[ve].disconnect(xe))}for(let he=0;he<Q.added.length;he++){const xe=Q.added[he];let ve=b.indexOf(xe);if(ve===-1){for(let Ie=0;Ie<L.length;Ie++)if(Ie>=b.length){b.push(xe),ve=Ie;break}else if(b[Ie]===null){b[Ie]=xe,ve=Ie;break}if(ve===-1)break}const be=L[ve];be&&be.connect(xe)}}const ee=new ie,ne=new ie;function z(Q,he,xe){ee.setFromMatrixPosition(he.matrixWorld),ne.setFromMatrixPosition(xe.matrixWorld);const ve=ee.distanceTo(ne),be=he.projectionMatrix.elements,Ie=xe.projectionMatrix.elements,Ye=be[14]/(be[10]-1),Mt=be[14]/(be[10]+1),ft=(be[9]+1)/be[5],Pt=(be[9]-1)/be[5],Y=(be[8]-1)/be[0],rn=(Ie[8]+1)/Ie[0],ut=Ye*Y,lt=Ye*rn,Ke=ve/(-Y+rn),Tt=Ke*-Y;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Tt),Q.translateZ(Ke),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),be[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const $e=Ye+Ke,D=Mt+Ke,C=ut-Tt,$=lt+(ve-Tt),le=ft*Mt/D*$e,pe=Pt*Mt/D*$e;Q.projectionMatrix.makePerspective(C,$,le,pe,$e,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function j(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let he=Q.near,xe=Q.far;T.texture!==null&&(T.depthNear>0&&(he=T.depthNear),T.depthFar>0&&(xe=T.depthFar)),A.near=k.near=U.near=he,A.far=k.far=U.far=xe,(B!==A.near||V!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,V=A.far),U.layers.mask=Q.layers.mask|2,k.layers.mask=Q.layers.mask|4,A.layers.mask=U.layers.mask|k.layers.mask;const ve=Q.parent,be=A.cameras;j(A,ve);for(let Ie=0;Ie<be.length;Ie++)j(be[Ie],ve);be.length===2?z(A,U,k):A.projectionMatrix.copy(U.projectionMatrix),J(Q,A,ve)};function J(Q,he,xe){xe===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(xe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Hd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(Q){h=Q,y!==null&&(y.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let I=null;function re(Q,he){if(g=he.getViewerPose(m||u),w=he,g!==null){const xe=g.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let ve=!1;xe.length!==A.cameras.length&&(A.cameras.length=0,ve=!0);for(let Ie=0;Ie<xe.length;Ie++){const Ye=xe[Ie];let Mt=null;if(S!==null)Mt=S.getViewport(Ye);else{const Pt=_.getViewSubImage(y,Ye);Mt=Pt.viewport,Ie===0&&(e.setRenderTargetTextures(N,Pt.colorTexture,y.ignoreDepthValues?void 0:Pt.depthStencilTexture),e.setRenderTarget(N))}let ft=P[Ie];ft===void 0&&(ft=new Zn,ft.layers.enable(Ie),ft.viewport=new Vt,P[Ie]=ft),ft.matrix.fromArray(Ye.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Ye.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),Ie===0&&(A.matrix.copy(ft.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ve===!0&&A.cameras.push(ft)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")){const Ie=_.getDepthInformation(xe[0]);Ie&&Ie.isValid&&Ie.texture&&T.init(e,Ie,o.renderState)}}for(let xe=0;xe<L.length;xe++){const ve=b[xe],be=L[xe];ve!==null&&be!==void 0&&be.update(ve,he,m||u)}I&&I(Q,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),w=null}const Te=new ng;Te.setAnimationLoop(re),this.setAnimationLoop=function(Q){I=Q},this.dispose=function(){}}}const Gr=new Si,OE=new Bt;function kE(s,e){function n(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,J0(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,N,L,b){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(x,v):v.isMeshToonMaterial?(c(x,v),_(x,v)):v.isMeshPhongMaterial?(c(x,v),g(x,v)):v.isMeshStandardMaterial?(c(x,v),y(x,v),v.isMeshPhysicalMaterial&&S(x,v,b)):v.isMeshMatcapMaterial?(c(x,v),w(x,v)):v.isMeshDepthMaterial?c(x,v):v.isMeshDistanceMaterial?(c(x,v),T(x,v)):v.isMeshNormalMaterial?c(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&f(x,v)):v.isPointsMaterial?h(x,v,N,L):v.isSpriteMaterial?m(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,n(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Dn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,n(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Dn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,n(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,n(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const N=e.get(v),L=N.envMap,b=N.envMapRotation;L&&(x.envMap.value=L,Gr.copy(b),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),x.envMapRotation.value.setFromMatrix4(OE.makeRotationFromEuler(Gr)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,x.aoMapTransform))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform))}function f(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function h(x,v,N,L){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*N,x.scale.value=L*.5,v.map&&(x.map.value=v.map,n(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function m(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function g(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function _(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function y(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function S(x,v,N){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Dn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=N.texture,x.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,v){v.matcap&&(x.matcap.value=v.matcap)}function T(x,v){const N=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(N.matrixWorld),x.nearDistance.value=N.shadow.camera.near,x.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function zE(s,e,n,r){let o={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,L){const b=L.program;r.uniformBlockBinding(N,b)}function m(N,L){let b=o[N.id];b===void 0&&(w(N),b=g(N),o[N.id]=b,N.addEventListener("dispose",x));const G=L.program;r.updateUBOMapping(N,G);const O=e.render.frame;c[N.id]!==O&&(y(N),c[N.id]=O)}function g(N){const L=_();N.__bindingPointIndex=L;const b=s.createBuffer(),G=N.__size,O=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,G,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,b),b}function _(){for(let N=0;N<f;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(N){const L=o[N.id],b=N.uniforms,G=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let O=0,U=b.length;O<U;O++){const k=Array.isArray(b[O])?b[O]:[b[O]];for(let P=0,A=k.length;P<A;P++){const B=k[P];if(S(B,O,P,G)===!0){const V=B.__offset,X=Array.isArray(B.value)?B.value:[B.value];let oe=0;for(let se=0;se<X.length;se++){const ee=X[se],ne=T(ee);typeof ee=="number"||typeof ee=="boolean"?(B.__data[0]=ee,s.bufferSubData(s.UNIFORM_BUFFER,V+oe,B.__data)):ee.isMatrix3?(B.__data[0]=ee.elements[0],B.__data[1]=ee.elements[1],B.__data[2]=ee.elements[2],B.__data[3]=0,B.__data[4]=ee.elements[3],B.__data[5]=ee.elements[4],B.__data[6]=ee.elements[5],B.__data[7]=0,B.__data[8]=ee.elements[6],B.__data[9]=ee.elements[7],B.__data[10]=ee.elements[8],B.__data[11]=0):(ee.toArray(B.__data,oe),oe+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,L,b,G){const O=N.value,U=L+"_"+b;if(G[U]===void 0)return typeof O=="number"||typeof O=="boolean"?G[U]=O:G[U]=O.clone(),!0;{const k=G[U];if(typeof O=="number"||typeof O=="boolean"){if(k!==O)return G[U]=O,!0}else if(k.equals(O)===!1)return k.copy(O),!0}return!1}function w(N){const L=N.uniforms;let b=0;const G=16;for(let U=0,k=L.length;U<k;U++){const P=Array.isArray(L[U])?L[U]:[L[U]];for(let A=0,B=P.length;A<B;A++){const V=P[A],X=Array.isArray(V.value)?V.value:[V.value];for(let oe=0,se=X.length;oe<se;oe++){const ee=X[oe],ne=T(ee),z=b%G,j=z%ne.boundary,J=z+j;b+=j,J!==0&&G-J<ne.storage&&(b+=G-J),V.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=ne.storage}}}const O=b%G;return O>0&&(b+=G-O),N.__size=b,N.__cache={},this}function T(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function x(N){const L=N.target;L.removeEventListener("dispose",x);const b=u.indexOf(L.__bindingPointIndex);u.splice(b,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function v(){for(const N in o)s.deleteBuffer(o[N]);u=[],o={},c={}}return{bind:h,update:m,dispose:v}}class BE{constructor(e={}){const{canvas:n=Cx(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const w=new Uint32Array(4),T=new Int32Array(4);let x=null,v=null;const N=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=yr,this.toneMappingExposure=1;const b=this;let G=!1,O=0,U=0,k=null,P=-1,A=null;const B=new Vt,V=new Vt;let X=null;const oe=new vt(0);let se=0,ee=n.width,ne=n.height,z=1,j=null,J=null;const I=new Vt(0,0,ee,ne),re=new Vt(0,0,ee,ne);let Te=!1;const Q=new Zd;let he=!1,xe=!1;const ve=new Bt,be=new Bt,Ie=new ie,Ye=new Vt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Pt(){return k===null?z:1}let Y=r;function rn(R,K){return n.getContext(R,K)}try{const R={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wd}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),Y===null){const K="webgl2";if(Y=rn(K,R),Y===null)throw rn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ut,lt,Ke,Tt,$e,D,C,$,le,pe,me,ze,Ce,Ue,dt,Me,Oe,Je,et,ke,ht,rt,bt,q;function Re(){ut=new jM(Y),ut.init(),rt=new PE(Y,ut),lt=new zM(Y,ut,e,rt),Ke=new bE(Y,ut),lt.reverseDepthBuffer&&y&&Ke.buffers.depth.setReversed(!0),Tt=new qM(Y),$e=new fE,D=new RE(Y,ut,Ke,$e,lt,rt,Tt),C=new HM(b),$=new WM(b),le=new ty(Y),bt=new OM(Y,le),pe=new XM(Y,le,Tt,bt),me=new KM(Y,pe,le,Tt),et=new YM(Y,lt,D),Me=new BM($e),ze=new dE(b,C,$,ut,lt,bt,Me),Ce=new kE(b,$e),Ue=new pE,dt=new yE(ut),Je=new FM(b,C,$,Ke,me,S,h),Oe=new TE(b,me,lt),q=new zE(Y,Tt,lt,Ke),ke=new kM(Y,ut,Tt),ht=new $M(Y,ut,Tt),Tt.programs=ze.programs,b.capabilities=lt,b.extensions=ut,b.properties=$e,b.renderLists=Ue,b.shadowMap=Oe,b.state=Ke,b.info=Tt}Re();const fe=new FE(b,Y);this.xr=fe,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const R=ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(ee,ne,!1))},this.getSize=function(R){return R.set(ee,ne)},this.setSize=function(R,K,ue=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=R,ne=K,n.width=Math.floor(R*z),n.height=Math.floor(K*z),ue===!0&&(n.style.width=R+"px",n.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(ee*z,ne*z).floor()},this.setDrawingBufferSize=function(R,K,ue){ee=R,ne=K,z=ue,n.width=Math.floor(R*ue),n.height=Math.floor(K*ue),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(I)},this.setViewport=function(R,K,ue,de){R.isVector4?I.set(R.x,R.y,R.z,R.w):I.set(R,K,ue,de),Ke.viewport(B.copy(I).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,K,ue,de){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,K,ue,de),Ke.scissor(V.copy(re).multiplyScalar(z).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(R){Ke.setScissorTest(Te=R)},this.setOpaqueSort=function(R){j=R},this.setTransparentSort=function(R){J=R},this.getClearColor=function(R){return R.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(R=!0,K=!0,ue=!0){let de=0;if(R){let Z=!1;if(k!==null){const Ae=k.texture.format;Z=Ae===Kd||Ae===Yd||Ae===qd}if(Z){const Ae=k.texture.type,Ee=Ae===Wi||Ae===Yr||Ae===Oa||Ae===Ws||Ae===Xd||Ae===$d,We=Je.getClearColor(),Ve=Je.getClearAlpha(),tt=We.r,it=We.g,je=We.b;Ee?(w[0]=tt,w[1]=it,w[2]=je,w[3]=Ve,Y.clearBufferuiv(Y.COLOR,0,w)):(T[0]=tt,T[1]=it,T[2]=je,T[3]=Ve,Y.clearBufferiv(Y.COLOR,0,T))}else de|=Y.COLOR_BUFFER_BIT}K&&(de|=Y.DEPTH_BUFFER_BIT),ue&&(de|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),Ue.dispose(),dt.dispose(),$e.dispose(),C.dispose(),$.dispose(),me.dispose(),bt.dispose(),q.dispose(),ze.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Qr),fe.removeEventListener("sessionend",ji),Mi.stop()};function ge(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const R=Tt.autoReset,K=Oe.enabled,ue=Oe.autoUpdate,de=Oe.needsUpdate,Z=Oe.type;Re(),Tt.autoReset=R,Oe.enabled=K,Oe.autoUpdate=ue,Oe.needsUpdate=de,Oe.type=Z}function Ne(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function st(R){const K=R.target;K.removeEventListener("dispose",st),It(K)}function It(R){$t(R),$e.remove(R)}function $t(R){const K=$e.get(R).programs;K!==void 0&&(K.forEach(function(ue){ze.releaseProgram(ue)}),R.isShaderMaterial&&ze.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,ue,de,Z,Ae){K===null&&(K=Mt);const Ee=Z.isMesh&&Z.matrixWorld.determinant()<0,We=$a(R,K,ue,de,Z);Ke.setMaterial(de,Ee);let Ve=ue.index,tt=1;if(de.wireframe===!0){if(Ve=pe.getWireframeAttribute(ue),Ve===void 0)return;tt=2}const it=ue.drawRange,je=ue.attributes.position;let gt=it.start*tt,At=(it.start+it.count)*tt;Ae!==null&&(gt=Math.max(gt,Ae.start*tt),At=Math.min(At,(Ae.start+Ae.count)*tt)),Ve!==null?(gt=Math.max(gt,0),At=Math.min(At,Ve.count)):je!=null&&(gt=Math.max(gt,0),At=Math.min(At,je.count));const mt=At-gt;if(mt<0||mt===1/0)return;bt.setup(Z,de,We,ue,Ve);let ln,at=ke;if(Ve!==null&&(ln=le.get(Ve),at=ht,at.setIndex(ln)),Z.isMesh)de.wireframe===!0?(Ke.setLineWidth(de.wireframeLinewidth*Pt()),at.setMode(Y.LINES)):at.setMode(Y.TRIANGLES);else if(Z.isLine){let qe=de.linewidth;qe===void 0&&(qe=1),Ke.setLineWidth(qe*Pt()),Z.isLineSegments?at.setMode(Y.LINES):Z.isLineLoop?at.setMode(Y.LINE_LOOP):at.setMode(Y.LINE_STRIP)}else Z.isPoints?at.setMode(Y.POINTS):Z.isSprite&&at.setMode(Y.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)at.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))at.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const qe=Z._multiDrawStarts,Qn=Z._multiDrawCounts,Et=Z._multiDrawCount,cn=Ve?le.get(Ve).bytesPerElement:1,Jn=$e.get(de).currentProgram.getUniforms();for(let qt=0;qt<Et;qt++)Jn.setValue(Y,"_gl_DrawID",qt),at.render(qe[qt]/cn,Qn[qt])}else if(Z.isInstancedMesh)at.renderInstances(gt,mt,Z.count);else if(ue.isInstancedBufferGeometry){const qe=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Qn=Math.min(ue.instanceCount,qe);at.renderInstances(gt,mt,Qn)}else at.render(gt,mt)};function xt(R,K,ue){R.transparent===!0&&R.side===zi&&R.forceSinglePass===!1?(R.side=Dn,R.needsUpdate=!0,Jr(R,K,ue),R.side=Sr,R.needsUpdate=!0,Jr(R,K,ue),R.side=zi):Jr(R,K,ue)}this.compile=function(R,K,ue=null){ue===null&&(ue=R),v=dt.get(ue),v.init(K),L.push(v),ue.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),R!==ue&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const de=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let Ee=0;Ee<Ae.length;Ee++){const We=Ae[Ee];xt(We,ue,Z),de.add(We)}else xt(Ae,ue,Z),de.add(Ae)}),L.pop(),v=null,de},this.compileAsync=function(R,K,ue=null){const de=this.compile(R,K,ue);return new Promise(Z=>{function Ae(){if(de.forEach(function(Ee){$e.get(Ee).currentProgram.isReady()&&de.delete(Ee)}),de.size===0){Z(R);return}setTimeout(Ae,10)}ut.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Mn=null;function gn(R){Mn&&Mn(R)}function Qr(){Mi.stop()}function ji(){Mi.start()}const Mi=new ng;Mi.setAnimationLoop(gn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(R){Mn=R,fe.setAnimationLoop(R),R===null?Mi.stop():Mi.start()},fe.addEventListener("sessionstart",Qr),fe.addEventListener("sessionend",ji),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(K),K=fe.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,K,k),v=dt.get(R,L.length),v.init(K),L.push(v),be.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Q.setFromProjectionMatrix(be),xe=this.localClippingEnabled,he=Me.init(this.clippingPlanes,xe),x=Ue.get(R,N.length),x.init(),N.push(x),fe.enabled===!0&&fe.isPresenting===!0){const Ae=b.xr.getDepthSensingMesh();Ae!==null&&Ei(Ae,K,-1/0,b.sortObjects)}Ei(R,K,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(j,J),ft=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ft&&Je.addToRenderList(x,R),this.info.render.frame++,he===!0&&Me.beginShadows();const ue=v.state.shadowsArray;Oe.render(ue,R,K),he===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const de=x.opaque,Z=x.transmissive;if(v.setupLights(),K.isArrayCamera){const Ae=K.cameras;if(Z.length>0)for(let Ee=0,We=Ae.length;Ee<We;Ee++){const Ve=Ae[Ee];wr(de,Z,R,Ve)}ft&&Je.render(R);for(let Ee=0,We=Ae.length;Ee<We;Ee++){const Ve=Ae[Ee];Er(x,R,Ve,Ve.viewport)}}else Z.length>0&&wr(de,Z,R,K),ft&&Je.render(R),Er(x,R,K);k!==null&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),R.isScene===!0&&R.onAfterRender(b,R,K),bt.resetDefaultState(),P=-1,A=null,L.pop(),L.length>0?(v=L[L.length-1],he===!0&&Me.setGlobalState(b.clippingPlanes,v.state.camera)):v=null,N.pop(),N.length>0?x=N[N.length-1]:x=null};function Ei(R,K,ue,de){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){de&&Ye.setFromMatrixPosition(R.matrixWorld).applyMatrix4(be);const Ee=me.update(R),We=R.material;We.visible&&x.push(R,Ee,We,ue,Ye.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Ee=me.update(R),We=R.material;if(de&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ye.copy(R.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ye.copy(Ee.boundingSphere.center)),Ye.applyMatrix4(R.matrixWorld).applyMatrix4(be)),Array.isArray(We)){const Ve=Ee.groups;for(let tt=0,it=Ve.length;tt<it;tt++){const je=Ve[tt],gt=We[je.materialIndex];gt&&gt.visible&&x.push(R,Ee,gt,ue,Ye.z,je)}}else We.visible&&x.push(R,Ee,We,ue,Ye.z,null)}}const Ae=R.children;for(let Ee=0,We=Ae.length;Ee<We;Ee++)Ei(Ae[Ee],K,ue,de)}function Er(R,K,ue,de){const Z=R.opaque,Ae=R.transmissive,Ee=R.transparent;v.setupLightsView(ue),he===!0&&Me.setGlobalState(b.clippingPlanes,ue),de&&Ke.viewport(B.copy(de)),Z.length>0&&Xi(Z,K,ue),Ae.length>0&&Xi(Ae,K,ue),Ee.length>0&&Xi(Ee,K,ue),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function wr(R,K,ue,de){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[de.id]===void 0&&(v.state.transmissionRenderTarget[de.id]=new Kr(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?za:Wi,minFilter:qr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const Ae=v.state.transmissionRenderTarget[de.id],Ee=de.viewport||B;Ae.setSize(Ee.z,Ee.w);const We=b.getRenderTarget();b.setRenderTarget(Ae),b.getClearColor(oe),se=b.getClearAlpha(),se<1&&b.setClearColor(16777215,.5),b.clear(),ft&&Je.render(ue);const Ve=b.toneMapping;b.toneMapping=yr;const tt=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),v.setupLightsView(de),he===!0&&Me.setGlobalState(b.clippingPlanes,de),Xi(R,ue,de),D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae),ut.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let je=0,gt=K.length;je<gt;je++){const At=K[je],mt=At.object,ln=At.geometry,at=At.material,qe=At.group;if(at.side===zi&&mt.layers.test(de.layers)){const Qn=at.side;at.side=Dn,at.needsUpdate=!0,ja(mt,ue,de,ln,at,qe),at.side=Qn,at.needsUpdate=!0,it=!0}}it===!0&&(D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae))}b.setRenderTarget(We),b.setClearColor(oe,se),tt!==void 0&&(de.viewport=tt),b.toneMapping=Ve}function Xi(R,K,ue){const de=K.isScene===!0?K.overrideMaterial:null;for(let Z=0,Ae=R.length;Z<Ae;Z++){const Ee=R[Z],We=Ee.object,Ve=Ee.geometry,tt=de===null?Ee.material:de,it=Ee.group;We.layers.test(ue.layers)&&ja(We,K,ue,Ve,tt,it)}}function ja(R,K,ue,de,Z,Ae){R.onBeforeRender(b,K,ue,de,Z,Ae),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(b,K,ue,de,R,Ae),Z.transparent===!0&&Z.side===zi&&Z.forceSinglePass===!1?(Z.side=Dn,Z.needsUpdate=!0,b.renderBufferDirect(ue,K,de,Z,R,Ae),Z.side=Sr,Z.needsUpdate=!0,b.renderBufferDirect(ue,K,de,Z,R,Ae),Z.side=zi):b.renderBufferDirect(ue,K,de,Z,R,Ae),R.onAfterRender(b,K,ue,de,Z,Ae)}function Jr(R,K,ue){K.isScene!==!0&&(K=Mt);const de=$e.get(R),Z=v.state.lights,Ae=v.state.shadowsArray,Ee=Z.state.version,We=ze.getParameters(R,Z.state,Ae,K,ue),Ve=ze.getProgramCacheKey(We);let tt=de.programs;de.environment=R.isMeshStandardMaterial?K.environment:null,de.fog=K.fog,de.envMap=(R.isMeshStandardMaterial?$:C).get(R.envMap||de.environment),de.envMapRotation=de.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",st),tt=new Map,de.programs=tt);let it=tt.get(Ve);if(it!==void 0){if(de.currentProgram===it&&de.lightsStateVersion===Ee)return fi(R,We),it}else We.uniforms=ze.getUniforms(R),R.onBeforeCompile(We,b),it=ze.acquireProgram(We,Ve),tt.set(Ve,it),de.uniforms=We.uniforms;const je=de.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=Me.uniform),fi(R,We),de.needsLights=Ol(R),de.lightsStateVersion=Ee,de.needsLights&&(je.ambientLightColor.value=Z.state.ambient,je.lightProbe.value=Z.state.probe,je.directionalLights.value=Z.state.directional,je.directionalLightShadows.value=Z.state.directionalShadow,je.spotLights.value=Z.state.spot,je.spotLightShadows.value=Z.state.spotShadow,je.rectAreaLights.value=Z.state.rectArea,je.ltc_1.value=Z.state.rectAreaLTC1,je.ltc_2.value=Z.state.rectAreaLTC2,je.pointLights.value=Z.state.point,je.pointLightShadows.value=Z.state.pointShadow,je.hemisphereLights.value=Z.state.hemi,je.directionalShadowMap.value=Z.state.directionalShadowMap,je.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,je.spotShadowMap.value=Z.state.spotShadowMap,je.spotLightMatrix.value=Z.state.spotLightMatrix,je.spotLightMap.value=Z.state.spotLightMap,je.pointShadowMap.value=Z.state.pointShadowMap,je.pointShadowMatrix.value=Z.state.pointShadowMatrix),de.currentProgram=it,de.uniformsList=null,it}function Xa(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=Al.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function fi(R,K){const ue=$e.get(R);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.batchingColor=K.batchingColor,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.instancingMorph=K.instancingMorph,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function $a(R,K,ue,de,Z){K.isScene!==!0&&(K=Mt),D.resetTextureUnits();const Ae=K.fog,Ee=de.isMeshStandardMaterial?K.environment:null,We=k===null?b.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:$s,Ve=(de.isMeshStandardMaterial?$:C).get(de.envMap||Ee),tt=de.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,it=!!ue.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),je=!!ue.morphAttributes.position,gt=!!ue.morphAttributes.normal,At=!!ue.morphAttributes.color;let mt=yr;de.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(mt=b.toneMapping);const ln=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,at=ln!==void 0?ln.length:0,qe=$e.get(de),Qn=v.state.lights;if(he===!0&&(xe===!0||R!==A)){const vn=R===A&&de.id===P;Me.setState(de,R,vn)}let Et=!1;de.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Qn.state.version||qe.outputColorSpace!==We||Z.isBatchedMesh&&qe.batching===!1||!Z.isBatchedMesh&&qe.batching===!0||Z.isBatchedMesh&&qe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&qe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&qe.instancing===!1||!Z.isInstancedMesh&&qe.instancing===!0||Z.isSkinnedMesh&&qe.skinning===!1||!Z.isSkinnedMesh&&qe.skinning===!0||Z.isInstancedMesh&&qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&qe.instancingMorph===!1&&Z.morphTexture!==null||qe.envMap!==Ve||de.fog===!0&&qe.fog!==Ae||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==tt||qe.vertexTangents!==it||qe.morphTargets!==je||qe.morphNormals!==gt||qe.morphColors!==At||qe.toneMapping!==mt||qe.morphTargetsCount!==at)&&(Et=!0):(Et=!0,qe.__version=de.version);let cn=qe.currentProgram;Et===!0&&(cn=Jr(de,K,Z));let Jn=!1,qt=!1,hi=!1;const Lt=cn.getUniforms(),Hn=qe.uniforms;if(Ke.useProgram(cn.program)&&(Jn=!0,qt=!0,hi=!0),de.id!==P&&(P=de.id,qt=!0),Jn||A!==R){Ke.buffers.depth.getReversed()?(ve.copy(R.projectionMatrix),Px(ve),Nx(ve),Lt.setValue(Y,"projectionMatrix",ve)):Lt.setValue(Y,"projectionMatrix",R.projectionMatrix),Lt.setValue(Y,"viewMatrix",R.matrixWorldInverse);const Vn=Lt.map.cameraPosition;Vn!==void 0&&Vn.setValue(Y,Ie.setFromMatrixPosition(R.matrixWorld)),lt.logarithmicDepthBuffer&&Lt.setValue(Y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Lt.setValue(Y,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,qt=!0,hi=!0)}if(Z.isSkinnedMesh){Lt.setOptional(Y,Z,"bindMatrix"),Lt.setOptional(Y,Z,"bindMatrixInverse");const vn=Z.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Lt.setValue(Y,"boneTexture",vn.boneTexture,D))}Z.isBatchedMesh&&(Lt.setOptional(Y,Z,"batchingTexture"),Lt.setValue(Y,"batchingTexture",Z._matricesTexture,D),Lt.setOptional(Y,Z,"batchingIdTexture"),Lt.setValue(Y,"batchingIdTexture",Z._indirectTexture,D),Lt.setOptional(Y,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Lt.setValue(Y,"batchingColorTexture",Z._colorsTexture,D));const wi=ue.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&et.update(Z,ue,cn),(qt||qe.receiveShadow!==Z.receiveShadow)&&(qe.receiveShadow=Z.receiveShadow,Lt.setValue(Y,"receiveShadow",Z.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(Hn.envMap.value=Ve,Hn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&K.environment!==null&&(Hn.envMapIntensity.value=K.environmentIntensity),qt&&(Lt.setValue(Y,"toneMappingExposure",b.toneMappingExposure),qe.needsLights&&qa(Hn,hi),Ae&&de.fog===!0&&Ce.refreshFogUniforms(Hn,Ae),Ce.refreshMaterialUniforms(Hn,de,z,ne,v.state.transmissionRenderTarget[R.id]),Al.upload(Y,Xa(qe),Hn,D)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(Al.upload(Y,Xa(qe),Hn,D),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Lt.setValue(Y,"center",Z.center),Lt.setValue(Y,"modelViewMatrix",Z.modelViewMatrix),Lt.setValue(Y,"normalMatrix",Z.normalMatrix),Lt.setValue(Y,"modelMatrix",Z.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const vn=de.uniformsGroups;for(let Vn=0,En=vn.length;Vn<En;Vn++){const Ya=vn[Vn];q.update(Ya,cn),q.bind(Ya,cn)}}return cn}function qa(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Ol(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,K,ue){$e.get(R.texture).__webglTexture=K,$e.get(R.depthTexture).__webglTexture=ue;const de=$e.get(R);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=ue===void 0,de.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,K){const ue=$e.get(R);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,ue=0){k=R,O=K,U=ue;let de=!0,Z=null,Ae=!1,Ee=!1;if(R){const Ve=$e.get(R);if(Ve.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(Y.FRAMEBUFFER,null),de=!1;else if(Ve.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Ve.__hasExternalTextures)D.rebindTextures(R,$e.get(R.texture).__webglTexture,$e.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const je=R.depthTexture;if(Ve.__boundDepthTexture!==je){if(je!==null&&$e.has(je)&&(R.width!==je.image.width||R.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ee=!0);const it=$e.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[K])?Z=it[K][ue]:Z=it[K],Ae=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?Z=$e.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?Z=it[ue]:Z=it,B.copy(R.viewport),V.copy(R.scissor),X=R.scissorTest}else B.copy(I).multiplyScalar(z).floor(),V.copy(re).multiplyScalar(z).floor(),X=Te;if(Ke.bindFramebuffer(Y.FRAMEBUFFER,Z)&&de&&Ke.drawBuffers(R,Z),Ke.viewport(B),Ke.scissor(V),Ke.setScissorTest(X),Ae){const Ve=$e.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ve.__webglTexture,ue)}else if(Ee){const Ve=$e.get(R.texture),tt=K||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ve.__webglTexture,ue||0,tt)}P=-1},this.readRenderTargetPixels=function(R,K,ue,de,Z,Ae,Ee){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(We=We[Ee]),We){Ke.bindFramebuffer(Y.FRAMEBUFFER,We);try{const Ve=R.texture,tt=Ve.format,it=Ve.type;if(!lt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-de&&ue>=0&&ue<=R.height-Z&&Y.readPixels(K,ue,de,Z,rt.convert(tt),rt.convert(it),Ae)}finally{const Ve=k!==null?$e.get(k).__webglFramebuffer:null;Ke.bindFramebuffer(Y.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(R,K,ue,de,Z,Ae,Ee){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(We=We[Ee]),We){const Ve=R.texture,tt=Ve.format,it=Ve.type;if(!lt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=R.width-de&&ue>=0&&ue<=R.height-Z){Ke.bindFramebuffer(Y.FRAMEBUFFER,We);const je=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,je),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ae.byteLength,Y.STREAM_READ),Y.readPixels(K,ue,de,Z,rt.convert(tt),rt.convert(it),0);const gt=k!==null?$e.get(k).__webglFramebuffer:null;Ke.bindFramebuffer(Y.FRAMEBUFFER,gt);const At=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Rx(Y,At,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,je),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ae),Y.deleteBuffer(je),Y.deleteSync(At),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,K=null,ue=0){R.isTexture!==!0&&(Ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1]);const de=Math.pow(2,-ue),Z=Math.floor(R.image.width*de),Ae=Math.floor(R.image.height*de),Ee=K!==null?K.x:0,We=K!==null?K.y:0;D.setTexture2D(R,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ue,0,0,Ee,We,Z,Ae),Ke.unbindTexture()},this.copyTextureToTexture=function(R,K,ue=null,de=null,Z=0){R.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture function signature has changed."),de=arguments[0]||null,R=arguments[1],K=arguments[2],Z=arguments[3]||0,ue=null);let Ae,Ee,We,Ve,tt,it,je,gt,At;const mt=R.isCompressedTexture?R.mipmaps[Z]:R.image;ue!==null?(Ae=ue.max.x-ue.min.x,Ee=ue.max.y-ue.min.y,We=ue.isBox3?ue.max.z-ue.min.z:1,Ve=ue.min.x,tt=ue.min.y,it=ue.isBox3?ue.min.z:0):(Ae=mt.width,Ee=mt.height,We=mt.depth||1,Ve=0,tt=0,it=0),de!==null?(je=de.x,gt=de.y,At=de.z):(je=0,gt=0,At=0);const ln=rt.convert(K.format),at=rt.convert(K.type);let qe;K.isData3DTexture?(D.setTexture3D(K,0),qe=Y.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(D.setTexture2DArray(K,0),qe=Y.TEXTURE_2D_ARRAY):(D.setTexture2D(K,0),qe=Y.TEXTURE_2D),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,K.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,K.unpackAlignment);const Qn=Y.getParameter(Y.UNPACK_ROW_LENGTH),Et=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),cn=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Jn=Y.getParameter(Y.UNPACK_SKIP_ROWS),qt=Y.getParameter(Y.UNPACK_SKIP_IMAGES);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,mt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,mt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ve),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,tt),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,it);const hi=R.isDataArrayTexture||R.isData3DTexture,Lt=K.isDataArrayTexture||K.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Hn=$e.get(R),wi=$e.get(K),vn=$e.get(Hn.__renderTarget),Vn=$e.get(wi.__renderTarget);Ke.bindFramebuffer(Y.READ_FRAMEBUFFER,vn.__webglFramebuffer),Ke.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let En=0;En<We;En++)hi&&Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,$e.get(R).__webglTexture,Z,it+En),R.isDepthTexture?(Lt&&Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,$e.get(K).__webglTexture,Z,At+En),Y.blitFramebuffer(Ve,tt,Ae,Ee,je,gt,Ae,Ee,Y.DEPTH_BUFFER_BIT,Y.NEAREST)):Lt?Y.copyTexSubImage3D(qe,Z,je,gt,At+En,Ve,tt,Ae,Ee):Y.copyTexSubImage2D(qe,Z,je,gt,At+En,Ve,tt,Ae,Ee);Ke.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Lt?R.isDataTexture||R.isData3DTexture?Y.texSubImage3D(qe,Z,je,gt,At,Ae,Ee,We,ln,at,mt.data):K.isCompressedArrayTexture?Y.compressedTexSubImage3D(qe,Z,je,gt,At,Ae,Ee,We,ln,mt.data):Y.texSubImage3D(qe,Z,je,gt,At,Ae,Ee,We,ln,at,mt):R.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Z,je,gt,Ae,Ee,ln,at,mt.data):R.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Z,je,gt,mt.width,mt.height,ln,mt.data):Y.texSubImage2D(Y.TEXTURE_2D,Z,je,gt,Ae,Ee,ln,at,mt);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Qn),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Et),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,cn),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Jn),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,qt),Z===0&&K.generateMipmaps&&Y.generateMipmap(qe),Ke.unbindTexture()},this.copyTextureToTexture3D=function(R,K,ue=null,de=null,Z=0){return R.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ue=arguments[0]||null,de=arguments[1]||null,R=arguments[2],K=arguments[3],Z=arguments[4]||0),Ua('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,K,ue,de,Z)},this.initRenderTarget=function(R){$e.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Ke.unbindTexture()},this.resetState=function(){O=0,U=0,k=null,Ke.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),n.unpackColorSpace=St._getUnpackColorSpace()}}class HE extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Jd extends Ys{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pl=new ie,Nl=new ie,zm=new Bt,Ia=new q0,xl=new Ul,Qu=new ie,Bm=new ie;class cg extends on{constructor(e=new Bn,n=new Jd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)Pl.fromBufferAttribute(n,o-1),Nl.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Pl.distanceTo(Nl);e.setAttribute("lineDistance",new Xt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(o),xl.radius+=c,e.ray.intersectsSphere(xl)===!1)return;zm.copy(o).invert(),Ia.copy(e.ray).applyMatrix4(zm);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=this.isLineSegments?2:1,g=r.index,y=r.attributes.position;if(g!==null){const S=Math.max(0,u.start),w=Math.min(g.count,u.start+u.count);for(let T=S,x=w-1;T<x;T+=m){const v=g.getX(T),N=g.getX(T+1),L=yl(this,e,Ia,h,v,N);L&&n.push(L)}if(this.isLineLoop){const T=g.getX(w-1),x=g.getX(S),v=yl(this,e,Ia,h,T,x);v&&n.push(v)}}else{const S=Math.max(0,u.start),w=Math.min(y.count,u.start+u.count);for(let T=S,x=w-1;T<x;T+=m){const v=yl(this,e,Ia,h,T,T+1);v&&n.push(v)}if(this.isLineLoop){const T=yl(this,e,Ia,h,w-1,S);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function yl(s,e,n,r,o,c){const u=s.geometry.attributes.position;if(Pl.fromBufferAttribute(u,o),Nl.fromBufferAttribute(u,c),n.distanceSqToSegment(Pl,Nl,Qu,Bm)>r)return;Qu.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Qu);if(!(h<e.near||h>e.far))return{distance:h,point:Bm.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Hm=new ie,Vm=new ie;class VE extends cg{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)Hm.fromBufferAttribute(n,o),Vm.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Hm.distanceTo(Vm);e.setAttribute("lineDistance",new Xt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ll extends Bn{constructor(e=1,n=1,r=1,o=32,c=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:f,thetaLength:h};const m=this;o=Math.floor(o),c=Math.floor(c);const g=[],_=[],y=[],S=[];let w=0;const T=[],x=r/2;let v=0;N(),u===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new Xt(_,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(S,2));function N(){const b=new ie,G=new ie;let O=0;const U=(n-e)/r;for(let k=0;k<=c;k++){const P=[],A=k/c,B=A*(n-e)+e;for(let V=0;V<=o;V++){const X=V/o,oe=X*h+f,se=Math.sin(oe),ee=Math.cos(oe);G.x=B*se,G.y=-A*r+x,G.z=B*ee,_.push(G.x,G.y,G.z),b.set(se,U,ee).normalize(),y.push(b.x,b.y,b.z),S.push(X,1-A),P.push(w++)}T.push(P)}for(let k=0;k<o;k++)for(let P=0;P<c;P++){const A=T[P][k],B=T[P+1][k],V=T[P+1][k+1],X=T[P][k+1];(e>0||P!==0)&&(g.push(A,B,X),O+=3),(n>0||P!==c-1)&&(g.push(B,V,X),O+=3)}m.addGroup(v,O,0),v+=O}function L(b){const G=w,O=new _t,U=new ie;let k=0;const P=b===!0?e:n,A=b===!0?1:-1;for(let V=1;V<=o;V++)_.push(0,x*A,0),y.push(0,A,0),S.push(.5,.5),w++;const B=w;for(let V=0;V<=o;V++){const oe=V/o*h+f,se=Math.cos(oe),ee=Math.sin(oe);U.x=P*ee,U.y=x*A,U.z=P*se,_.push(U.x,U.y,U.z),y.push(0,A,0),O.x=se*.5+.5,O.y=ee*.5*A+.5,S.push(O.x,O.y),w++}for(let V=0;V<o;V++){const X=G+V,oe=B+V;b===!0?g.push(oe,oe+1,X):g.push(oe+1,oe,X),k+=3}m.addGroup(v,k,b===!0?1:2),v+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ef extends Bn{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const c=[],u=[];f(o),m(r),g(),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(c.slice(),3)),this.setAttribute("uv",new Xt(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(N){const L=new ie,b=new ie,G=new ie;for(let O=0;O<n.length;O+=3)S(n[O+0],L),S(n[O+1],b),S(n[O+2],G),h(L,b,G,N)}function h(N,L,b,G){const O=G+1,U=[];for(let k=0;k<=O;k++){U[k]=[];const P=N.clone().lerp(b,k/O),A=L.clone().lerp(b,k/O),B=O-k;for(let V=0;V<=B;V++)V===0&&k===O?U[k][V]=P:U[k][V]=P.clone().lerp(A,V/B)}for(let k=0;k<O;k++)for(let P=0;P<2*(O-k)-1;P++){const A=Math.floor(P/2);P%2===0?(y(U[k][A+1]),y(U[k+1][A]),y(U[k][A])):(y(U[k][A+1]),y(U[k+1][A+1]),y(U[k+1][A]))}}function m(N){const L=new ie;for(let b=0;b<c.length;b+=3)L.x=c[b+0],L.y=c[b+1],L.z=c[b+2],L.normalize().multiplyScalar(N),c[b+0]=L.x,c[b+1]=L.y,c[b+2]=L.z}function g(){const N=new ie;for(let L=0;L<c.length;L+=3){N.x=c[L+0],N.y=c[L+1],N.z=c[L+2];const b=x(N)/2/Math.PI+.5,G=v(N)/Math.PI+.5;u.push(b,1-G)}w(),_()}function _(){for(let N=0;N<u.length;N+=6){const L=u[N+0],b=u[N+2],G=u[N+4],O=Math.max(L,b,G),U=Math.min(L,b,G);O>.9&&U<.1&&(L<.2&&(u[N+0]+=1),b<.2&&(u[N+2]+=1),G<.2&&(u[N+4]+=1))}}function y(N){c.push(N.x,N.y,N.z)}function S(N,L){const b=N*3;L.x=e[b+0],L.y=e[b+1],L.z=e[b+2]}function w(){const N=new ie,L=new ie,b=new ie,G=new ie,O=new _t,U=new _t,k=new _t;for(let P=0,A=0;P<c.length;P+=9,A+=6){N.set(c[P+0],c[P+1],c[P+2]),L.set(c[P+3],c[P+4],c[P+5]),b.set(c[P+6],c[P+7],c[P+8]),O.set(u[A+0],u[A+1]),U.set(u[A+2],u[A+3]),k.set(u[A+4],u[A+5]),G.copy(N).add(L).add(b).divideScalar(3);const B=x(G);T(O,A+0,N,B),T(U,A+2,L,B),T(k,A+4,b,B)}}function T(N,L,b,G){G<0&&N.x===1&&(u[L]=N.x-1),b.x===0&&b.z===0&&(u[L]=G/2/Math.PI+.5)}function x(N){return Math.atan2(N.z,-N.x)}function v(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ef(e.vertices,e.indices,e.radius,e.details)}}class tf extends ef{constructor(e=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new tf(e.radius,e.detail)}}class nf extends Bn{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let m=0;const g=[],_=new ie,y=new ie,S=[],w=[],T=[],x=[];for(let v=0;v<=r;v++){const N=[],L=v/r;let b=0;v===0&&u===0?b=.5/n:v===r&&h===Math.PI&&(b=-.5/n);for(let G=0;G<=n;G++){const O=G/n;_.x=-e*Math.cos(o+O*c)*Math.sin(u+L*f),_.y=e*Math.cos(u+L*f),_.z=e*Math.sin(o+O*c)*Math.sin(u+L*f),w.push(_.x,_.y,_.z),y.copy(_).normalize(),T.push(y.x,y.y,y.z),x.push(O+b,1-L),N.push(m++)}g.push(N)}for(let v=0;v<r;v++)for(let N=0;N<n;N++){const L=g[v][N+1],b=g[v][N],G=g[v+1][N],O=g[v+1][N+1];(v!==0||u>0)&&S.push(L,b,O),(v!==r-1||h<Math.PI)&&S.push(b,G,O)}this.setIndex(S),this.setAttribute("position",new Xt(w,3)),this.setAttribute("normal",new Xt(T,3)),this.setAttribute("uv",new Xt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ju extends Ys{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=G0,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Gm={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class GE{constructor(e,n,r){const o=this;let c=!1,u=0,f=0,h;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(g){f++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,f),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,f),u===f&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,_){return m.push(g,_),this},this.removeHandler=function(g){const _=m.indexOf(g);return _!==-1&&m.splice(_,2),this},this.getHandler=function(g){for(let _=0,y=m.length;_<y;_+=2){const S=m[_],w=m[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return w}return null}}}const WE=new GE;class rf{constructor(e){this.manager=e!==void 0?e:WE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(o,c){r.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}rf.DEFAULT_MATERIAL_NAME="__DEFAULT";class jE extends rf{constructor(e){super(e)}load(e,n,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Gm.get(e);if(u!==void 0)return c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u;const f=ka("img");function h(){g(),Gm.add(e,this),n&&n(this),c.manager.itemEnd(e)}function m(_){g(),o&&o(_),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),c.manager.itemStart(e),f.src=e,f}}class XE extends rf{constructor(e){super(e)}load(e,n,r,o){const c=new Sn,u=new jE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){c.image=f,c.needsUpdate=!0,n!==void 0&&n(c)},r,o),c}}class ug extends on{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ed=new Bt,Wm=new ie,jm=new ie;class $E{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zd,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Wm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wm),jm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(jm),n.updateMatrixWorld(),ed.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qE extends $E{constructor(){super(new ig(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xm extends ug{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new qE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class YE extends ug{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class KE extends VE{constructor(e=10,n=10,r=4473924,o=8947848){r=new vt(r),o=new vt(o);const c=n/2,u=e/n,f=e/2,h=[],m=[];for(let y=0,S=0,w=-f;y<=n;y++,w+=u){h.push(-f,0,w,f,0,w),h.push(w,0,-f,w,0,f);const T=y===c?r:o;T.toArray(m,S),S+=3,T.toArray(m,S),S+=3,T.toArray(m,S),S+=3,T.toArray(m,S),S+=3}const g=new Bn;g.setAttribute("position",new Xt(h,3)),g.setAttribute("color",new Xt(m,3));const _=new Jd({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);const ZE=({heightmapUrl:s,textureUrl:e,pathCoords:n,startCoords:r,goalCoords:o,elevationRange:c})=>{const u=He.useRef(null),[f,h]=He.useState(!1),[m,g]=He.useState(1.8),[_,y]=He.useState(!1),S=He.useRef(null),w=He.useRef(null),T=He.useRef(null),x=He.useRef(null),v=He.useRef(null),N=He.useRef(null),L=He.useRef(null),b=He.useRef(null),G=He.useRef(!1),O=He.useRef(!1),U=He.useRef({x:0,y:0}),k=He.useRef({radius:160,theta:Math.PI/4,phi:Math.PI/3.2}),P=He.useRef(new ie(0,0,0)),A=()=>{if(!w.current)return;const{radius:V,theta:X,phi:oe}=k.current,se=P.current;w.current.position.x=se.x+V*Math.sin(oe)*Math.sin(X),w.current.position.y=se.y+V*Math.cos(oe),w.current.position.z=se.z+V*Math.sin(oe)*Math.cos(X),w.current.lookAt(se)},B=()=>{k.current={radius:160,theta:Math.PI/4,phi:Math.PI/3.2},P.current.set(0,0,0),A()};return He.useEffect(()=>{if(!u.current)return;const V=u.current;if(T.current)return;const X=V.clientWidth,oe=V.clientHeight||450,se=new HE;se.background=new vt(657935),S.current=se;const ee=new Zn(45,X/oe,.1,1e3);w.current=ee,A();const ne=new BE({antialias:!0,alpha:!1});ne.setSize(X,oe),ne.setPixelRatio(Math.min(window.devicePixelRatio,2)),ne.shadowMap.enabled=!0,ne.shadowMap.type=P0,T.current=ne,V.contains(ne.domElement)||V.appendChild(ne.domElement);const z=new YE(16772829,.6);se.add(z);const j=new Xm(16774634,1.2);j.position.set(-100,120,-100),j.castShadow=!0,se.add(j);const J=new Xm(4482696,.4);J.position.set(100,-50,100),se.add(J);const I=new KE(160,16,3355460,2039598);I.position.y=-15,se.add(I);let re;const Te=()=>{re=requestAnimationFrame(Te),T.current&&S.current&&w.current&&T.current.render(S.current,w.current)};Te();const Q=()=>{if(!V||!T.current||!w.current)return;const xe=V.clientWidth,ve=V.clientHeight||450;w.current.aspect=xe/ve,w.current.updateProjectionMatrix(),T.current.setSize(xe,ve)};window.addEventListener("resize",Q);const he=new ResizeObserver(()=>Q());return he.observe(V),()=>{cancelAnimationFrame(re),window.removeEventListener("resize",Q),he.disconnect(),T.current&&(T.current.dispose(),T.current.domElement.remove(),T.current=null),S.current=null,w.current=null,x.current=null,v.current=null,b.current=null}},[]),He.useEffect(()=>{const V=u.current;if(!V)return;const X=z=>{z.button===0&&(G.current=!0),z.button===2&&(O.current=!0),U.current={x:z.clientX,y:z.clientY}},oe=z=>{const j=z.clientX-U.current.x,J=z.clientY-U.current.y;if(U.current={x:z.clientX,y:z.clientY},G.current)k.current.theta-=j*.008,k.current.phi=Math.max(.1,Math.min(Math.PI/2.05,k.current.phi-J*.008)),A();else if(O.current){const I=k.current.radius*.001;P.current.x-=j*I,P.current.z+=J*I,A()}},se=()=>{G.current=!1,O.current=!1},ee=z=>{z.preventDefault(),k.current.radius=Math.max(30,Math.min(350,k.current.radius+z.deltaY*.12)),A()},ne=z=>z.preventDefault();return V.addEventListener("mousedown",X),window.addEventListener("mousemove",oe),window.addEventListener("mouseup",se),V.addEventListener("wheel",ee,{passive:!1}),V.addEventListener("contextmenu",ne),()=>{V.removeEventListener("mousedown",X),window.removeEventListener("mousemove",oe),window.removeEventListener("mouseup",se),V.removeEventListener("wheel",ee),V.removeEventListener("contextmenu",ne)}},[]),He.useEffect(()=>{if(!S.current||!s)return;const V=S.current;y(!0);const X=127,oe=new Wa(100,100,X,X);oe.rotateX(-Math.PI/2);const se=new Image;se.crossOrigin="anonymous",se.src=s,se.onload=()=>{const ee=document.createElement("canvas");ee.width=X+1,ee.height=X+1;const ne=ee.getContext("2d");if(!ne)return;ne.drawImage(se,0,0,X+1,X+1);const z=ne.getImageData(0,0,X+1,X+1).data,j=oe.attributes.position,J=j.count,I=new Float32Array(J);for(let Q=0;Q<J;Q++){const he=z[Q*4]/255;I[Q]=he,j.setY(Q,he*12*m)}b.current=I,oe.computeVertexNormals();const re=new XE,Te=Q=>{Q.wrapS=Bi,Q.wrapT=Bi;const he=new Ju({map:Q,wireframe:f,roughness:.85,metalness:.15});x.current&&(V.remove(x.current),x.current.geometry.dispose());const xe=new Ln(oe,he);xe.castShadow=!0,xe.receiveShadow=!0,V.add(xe),x.current=xe,y(!1)};e?re.load(e,Te):re.load(s,Te)},se.onerror=()=>{y(!1)}},[s,e]),He.useEffect(()=>{x.current&&x.current.material&&(x.current.material.wireframe=f)},[f]),He.useEffect(()=>{if(!x.current||!b.current)return;const V=x.current.geometry,X=V.attributes.position,oe=b.current;for(let se=0;se<X.count;se++)X.setY(se,oe[se]*12*m);X.needsUpdate=!0,V.computeVertexNormals()},[m]),He.useEffect(()=>{if(!S.current)return;const V=S.current,X=b.current,oe=127,se=ee=>{const[ne,z]=ee,j=z/512*100-50,J=ne/512*100-50;let I=.5;if(X){const re=Math.min(oe,Math.floor(ne/512*oe)),Te=Math.min(oe,Math.floor(z/512*oe));I=(X[re*(oe+1)+Te]||0)*12*m}return{x:j,y:I,z:J}};if(N.current&&(V.remove(N.current),N.current=null),r){const ee=se(r),ne=new Os,z=new Ll(.2,.2,4,8),j=new Rl({color:1096065}),J=new Ln(z,j);J.position.y=2,ne.add(J);const I=new nf(1.2,16,16),re=new Ju({color:1096065,emissive:366185,emissiveIntensity:.6}),Te=new Ln(I,re);Te.position.y=4.5,ne.add(Te),ne.position.set(ee.x,ee.y,ee.z),V.add(ne),N.current=ne}if(L.current&&(V.remove(L.current),L.current=null),o){const ee=se(o),ne=new Os,z=new Ll(.2,.2,5,8),j=new Rl({color:54015}),J=new Ln(z,j);J.position.y=2.5,ne.add(J);const I=new tf(1.4,0),re=new Ju({color:54015,emissive:165063,emissiveIntensity:.7}),Te=new Ln(I,re);Te.position.y=5.5,ne.add(Te),ne.position.set(ee.x,ee.y,ee.z),V.add(ne),L.current=ne}},[r,o,m]),He.useEffect(()=>{if(!S.current)return;const V=S.current;if(v.current&&(V.remove(v.current),v.current.geometry.dispose(),v.current=null),n.length>1&&b.current){const X=[],oe=b.current,se=127;for(let j=0;j<n.length;j++){const[J,I]=n[j],re=I/512*100-50,Te=J/512*100-50,Q=Math.min(se,Math.floor(J/512*se)),he=Math.min(se,Math.floor(I/512*se)),xe=Q*(se+1)+he,be=(oe[xe]||0)*12*m+.8;X.push(new ie(re,be,Te))}const ee=new Bn().setFromPoints(X),ne=new Jd({color:1096065,linewidth:4}),z=new cg(ee,ne);V.add(z),v.current=z}},[n,m]),M.jsxs("div",{className:"flex flex-col h-full bg-mars-900 rounded-xl border border-mars-700/60 overflow-hidden relative",children:[M.jsxs("div",{className:"bg-mars-800/80 px-3 py-2 border-b border-mars-700/50 flex flex-wrap items-center justify-between gap-2 text-xs font-mono",children:[M.jsxs("div",{className:"flex items-center space-x-2 text-slate-300 min-w-0",children:[M.jsx(Km,{className:"w-4 h-4 text-cyan-400 flex-shrink-0"}),M.jsx("span",{className:"font-semibold text-white truncate text-[11px]",children:"3D SURFACE MODEL"}),c&&M.jsxs("span",{className:"text-[10px] text-emerald-400 bg-emerald-950/70 px-1.5 py-0.5 rounded border border-emerald-800/60 whitespace-nowrap hidden lg:inline",children:[c.min,"m → ",c.max,"m"]})]}),M.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3 ml-auto",children:[M.jsxs("div",{className:"flex items-center space-x-1.5",children:[M.jsx(w_,{className:"w-3 h-3 text-mars-400"}),M.jsx("span",{className:"text-slate-400 text-[10px]",children:"Exag:"}),M.jsx("input",{type:"range",min:"0.5",max:"4.0",step:"0.1",value:m,onChange:V=>g(parseFloat(V.target.value)),className:"w-16 sm:w-20 accent-mars-500 cursor-pointer h-1.5 bg-mars-700 rounded-lg"}),M.jsxs("span",{className:"text-white w-6 text-[10px]",children:[m.toFixed(1),"x"]})]}),M.jsx("button",{onClick:()=>h(!f),className:`px-2 py-0.5 rounded border text-[10px] transition ${f?"bg-mars-600 text-cyan-300 border-cyan-500":"bg-mars-700/60 text-slate-300 border-mars-600 hover:bg-mars-600"}`,children:"Wireframe"}),M.jsx("button",{onClick:B,className:"p-1 rounded bg-mars-700/60 text-slate-300 border border-mars-600 hover:bg-mars-600 transition",title:"Reset 3D Camera",children:M.jsx(S_,{className:"w-3 h-3"})})]})]}),M.jsxs("div",{className:"w-full flex-1 min-h-[440px] relative cursor-grab active:cursor-grabbing overflow-hidden",children:[M.jsx("div",{ref:u,className:"absolute inset-0 w-full h-full"}),_&&M.jsxs("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center space-x-2 text-cyan-400 text-xs font-mono z-10 pointer-events-none",children:[M.jsx("span",{className:"w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"}),M.jsx("span",{children:"Generating 3D Martian terrain mesh..."})]}),!s&&M.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-slate-500 font-mono text-xs space-y-2 pointer-events-none",children:[M.jsx(p_,{className:"w-8 h-8 text-slate-600"}),M.jsx("span",{children:"DEM elevation heightmap required for 3D visualization"})]}),M.jsx("div",{className:"absolute bottom-2 right-2 bg-mars-950/80 backdrop-blur border border-mars-700/50 rounded px-2 py-1 text-[10px] font-mono text-slate-400 pointer-events-none",children:"Left Drag: Rotate | Right Drag: Pan | Scroll: Zoom"})]})]})},QE=({analysis:s,pathPlan:e,startCoords:n,goalCoords:r,onRunPlanner:o,onSelectTargetGoal:c,onSwapStartGoal:u,onClearPath:f,isPlanning:h,isAnalyzing:m})=>M.jsxs("div",{className:"flex flex-col space-y-4",children:[M.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3",children:[M.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-2",children:[M.jsxs("div",{className:"flex items-center space-x-2",children:[M.jsx(b_,{className:"w-4 h-4 text-amber-400"}),M.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Terrain Morphometry (Horn's Method)"})]}),m&&M.jsx("span",{className:"text-[10px] font-mono text-amber-400 animate-pulse",children:"Computing..."})]}),s?M.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] font-mono",children:[M.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[M.jsx("span",{className:"text-slate-400 block text-[10px]",children:"MAX SLOPE"}),M.jsxs("span",{className:"text-rose-400 font-bold text-sm",children:[s.terrain_summary.max_slope_deg.toFixed(1),"°"]})]}),M.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[M.jsx("span",{className:"text-slate-400 block text-[10px]",children:"MEAN SLOPE"}),M.jsxs("span",{className:"text-slate-200 font-bold text-sm",children:[s.terrain_summary.mean_slope_deg.toFixed(1),"°"]})]}),M.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[M.jsx("span",{className:"text-slate-400 block text-[10px]",children:"CAUTION SLOPES (>20°)"}),M.jsxs("span",{className:"text-amber-400 font-bold",children:[s.terrain_summary.pct_slope_gt_20deg.toFixed(1),"% area"]})]}),M.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[M.jsx("span",{className:"text-slate-400 block text-[10px]",children:"LETHAL CLIFFS (>30°)"}),M.jsxs("span",{className:"text-red-400 font-bold",children:[s.terrain_summary.pct_slope_gt_30deg.toFixed(1),"% area"]})]})]}):M.jsx("div",{className:"text-xs font-mono text-slate-500 italic py-2 text-center",children:"Run terrain analysis to compute slope & ruggedness metrics"})]}),s&&M.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3",children:[M.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-2",children:[M.jsxs("div",{className:"flex items-center space-x-2",children:[M.jsx(kp,{className:"w-4 h-4 text-rose-400"}),M.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Hazard & Uncertainty Engine"})]}),M.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-mars-700 text-slate-300",children:["Confidence: ",(s.uncertainty_summary.confidence_score*100).toFixed(0),"%"]})]}),M.jsxs("div",{className:"space-y-2 text-[11px] font-mono",children:[M.jsxs("div",{className:"flex justify-between items-center bg-black/40 p-2 rounded border border-mars-700/30",children:[M.jsx("span",{className:"text-slate-400",children:"Mobility Clearance:"}),M.jsxs("span",{className:"text-emerald-400 font-bold",children:[(s.hazard_summary.safe_cells/s.hazard_summary.total_cells*100).toFixed(1),"% Traversable"]})]}),M.jsxs("div",{className:"text-[10px] text-slate-400",children:[M.jsx("span",{className:"block mb-1",children:"Detected Hazard Signatures:"}),M.jsx("div",{className:"flex flex-wrap gap-1",children:s.hazard_summary.hazard_types_detected.map((g,_)=>M.jsx("span",{className:"px-2 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-800/70",children:g},_))})]}),M.jsxs("div",{className:"text-[10px] text-slate-400",children:[M.jsx("span",{className:"block mb-1",children:"Uncertainty Drivers:"}),M.jsx("div",{className:"flex flex-wrap gap-1",children:s.uncertainty_summary.dominant_sources.map((g,_)=>M.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/50",children:g},_))})]})]})]}),s&&s.science_targets.length>0&&M.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3",children:[M.jsxs("div",{className:"flex items-center space-x-2 border-b border-mars-700/50 pb-2",children:[M.jsx(T_,{className:"w-4 h-4 text-amber-300"}),M.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Scientific Target Discovery"})]}),M.jsx("div",{className:"space-y-2",children:s.science_targets.map(g=>M.jsxs("div",{onClick:()=>c(g.coords_pixel),className:"bg-black/50 hover:bg-mars-700/40 cursor-pointer p-2.5 rounded-lg border border-mars-700/40 hover:border-amber-500/60 transition group space-y-1",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("span",{className:"text-xs font-mono font-bold text-amber-300 group-hover:text-amber-200",children:g.name}),M.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800",children:["Priority: ",g.overall_priority]})]}),M.jsx("p",{className:"text-[10px] text-slate-400",children:g.description}),M.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-mars-700/30",children:[M.jsxs("span",{children:["Geo: ",g.geological_score," | Access: ",g.accessibility_score]}),M.jsx("span",{className:"text-cyan-400 group-hover:underline",children:"Click to Target Goal →"})]})]},g.id))})]}),M.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3",children:[M.jsxs("div",{className:"flex items-center space-x-2 border-b border-mars-700/50 pb-2",children:[M.jsx(i0,{className:"w-4 h-4 text-emerald-400"}),M.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Autonomous A* Path Planner"})]}),M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] font-mono flex-1 mr-2",children:[M.jsxs("div",{className:"bg-black/40 p-2 rounded border border-mars-700/30",children:[M.jsx("span",{className:"text-slate-400 block text-[10px]",children:"START (ROVER)"}),M.jsxs("span",{className:"text-emerald-400 font-bold",children:["[",n[0],", ",n[1],"]"]})]}),M.jsxs("div",{className:"bg-black/40 p-2 rounded border border-mars-700/30",children:[M.jsx("span",{className:"text-slate-400 block text-[10px]",children:"GOAL (TARGET)"}),M.jsxs("span",{className:"text-cyan-400 font-bold",children:["[",r[0],", ",r[1],"]"]})]})]}),u&&M.jsx("button",{onClick:u,className:"px-2.5 py-3 rounded-lg bg-mars-700/70 hover:bg-mars-600 text-slate-200 border border-mars-600 transition text-sm font-bold font-mono",title:"Swap Start and Goal coordinates",children:"⇄"})]}),M.jsxs("button",{onClick:o,disabled:h,className:"w-full py-2.5 rounded-lg font-mono font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-950 border border-emerald-500/50 flex items-center justify-center space-x-2 transition disabled:opacity-50",children:[M.jsx(g0,{className:`w-3.5 h-3.5 fill-current ${h?"animate-spin":""}`}),M.jsx("span",{children:h?"Planning Optimal Path...":"Compute Safe A* Path"})]}),e&&M.jsxs("div",{className:`p-2.5 rounded-lg text-xs font-mono border ${e.success?"bg-emerald-950/60 border-emerald-800 text-emerald-200":"bg-red-950/60 border-red-800 text-red-200"}`,children:[M.jsxs("div",{className:"flex items-center justify-between mb-1",children:[M.jsxs("div",{className:"flex items-center space-x-1.5 font-bold",children:[e.success?M.jsx(h_,{className:"w-4 h-4 text-emerald-400"}):M.jsx(kp,{className:"w-4 h-4 text-red-400"}),M.jsx("span",{children:e.plan.message})]}),f&&M.jsx("button",{onClick:f,className:"text-[10px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-black/40 border border-mars-700/50 transition",title:"Clear computed trajectory",children:"Clear"})]}),e.success&&M.jsxs("div",{className:"mt-2 pt-2 border-t border-emerald-800/50 space-y-2",children:[M.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px]",children:[M.jsxs("div",{children:[M.jsx("span",{className:"text-slate-400",children:"Path Length: "}),M.jsxs("span",{className:"text-white font-bold",children:[e.plan.path_length_steps," steps"]})]}),M.jsxs("div",{children:[M.jsx("span",{className:"text-slate-400",children:"Accumulated Cost: "}),M.jsx("span",{className:"text-emerald-300 font-bold",children:e.plan.total_cost})]})]}),e.plan.elevation_profile&&e.plan.elevation_profile.length>1&&(()=>{const g=e.plan.elevation_profile,_=e.plan.slope_profile||[],y=Math.min(...g),S=Math.max(...g),w=Math.max(1,S-y),T=g[g.length-1]-g[0],x=280,v=60,N=g.map((G,O)=>{const U=O/(g.length-1)*x,k=v-(G-y)/w*(v-12)-6;return{x:U,y:k,elev:G,slope:_[O]||0}}),L=N.map(G=>`${G.x.toFixed(1)},${G.y.toFixed(1)}`).join(" "),b=`0,${v} ${L} ${x},${v}`;return M.jsxs("div",{className:"bg-black/50 rounded-lg p-2.5 border border-emerald-800/40 space-y-1.5",children:[M.jsxs("div",{className:"flex items-center justify-between text-[10px] text-slate-300",children:[M.jsx("span",{className:"font-bold text-emerald-300 flex items-center space-x-1",children:M.jsx("span",{children:"📈 A* TRAVERSE PROFILE GRAPH"})}),M.jsxs("span",{className:"text-slate-400",children:["Δz: ",M.jsx("strong",{className:T>=0?"text-cyan-400":"text-amber-400",children:T>=0?`+${T.toFixed(1)}m`:`${T.toFixed(1)}m`})]})]}),M.jsx("div",{className:"relative w-full h-[65px] select-none",children:M.jsxs("svg",{viewBox:`0 0 ${x} ${v}`,className:"w-full h-full overflow-visible",children:[M.jsx("defs",{children:M.jsxs("linearGradient",{id:"elevGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[M.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.45"}),M.jsx("stop",{offset:"100%",stopColor:"#047857",stopOpacity:"0.05"})]})}),M.jsx("line",{x1:"0",y1:v-6,x2:x,y2:v-6,stroke:"#334155",strokeDasharray:"2 2",strokeWidth:"0.8"}),M.jsx("line",{x1:"0",y1:"6",x2:x,y2:"6",stroke:"#334155",strokeDasharray:"2 2",strokeWidth:"0.8"}),M.jsx("polygon",{points:b,fill:"url(#elevGrad)"}),M.jsx("polyline",{points:L,fill:"none",stroke:"#10b981",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),M.jsx("circle",{cx:N[0].x,cy:N[0].y,r:"3",fill:"#10b981",stroke:"#fff",strokeWidth:"1"}),M.jsx("circle",{cx:N[N.length-1].x,cy:N[N.length-1].y,r:"3",fill:"#00d2ff",stroke:"#fff",strokeWidth:"1"})]})}),M.jsxs("div",{className:"flex justify-between text-[9px] text-slate-400 font-mono",children:[M.jsxs("span",{children:["Start: ",M.jsxs("strong",{className:"text-emerald-300",children:[g[0].toFixed(0),"m"]})]}),M.jsxs("span",{children:["Peak: ",M.jsxs("strong",{className:"text-white",children:[S.toFixed(0),"m"]})]}),M.jsxs("span",{children:["Goal: ",M.jsxs("strong",{className:"text-cyan-300",children:[g[g.length-1].toFixed(0),"m"]})]})]})]})})()]})]})]})]});async function JE(s,e,n=5){const r=new FormData;r.append("imagery_id",s),r.append("dem_id",e),r.append("mc_samples",n.toString());const o=await fetch("/api/segment",{method:"POST",body:r});if(!o.ok){const c=await o.json().catch(()=>({detail:"Segmentation failed"}));throw new Error(c.detail||"Segmentation failed")}return o.json()}const ew=()=>{var C;const[s,e]=He.useState("CONNECTING"),[n,r]=He.useState("MARS-09"),[o,c]=He.useState(0),[u,f]=He.useState(null),[h,m]=He.useState(null),[g,_]=He.useState(null),[y,S]=He.useState(null),[w,T]=He.useState(null),[x,v]=He.useState(!1),[N,L]=He.useState(null),[b,G]=He.useState(!1),[O,U]=He.useState("jezero"),[k,P]=He.useState([90,90]),[A,B]=He.useState([380,390]),[V,X]=He.useState(null),[oe,se]=He.useState(!1),[ee,ne]=He.useState(null),[z,j]=He.useState(!1),[J,I]=He.useState(null),[re,Te]=He.useState(5),[Q,he]=He.useState("imagery"),[xe,ve]=He.useState(!1);He.useEffect(()=>{be()},[]);const be=async()=>{ve(!0);try{const $=await P_();e($.status),r($.rover_callsign),c($.registered_datasets_count);const le=await L_();f(le.imagery),m(le.dem),_(le.dem),S(le.dem_offset),await Ye(le.imagery.id,le.dem.id),await Mt(le.dem.id);try{const pe=await Su(le.dem.id,k[0],k[1],A[0],A[1]);X(pe)}catch(pe){console.warn("Initial path plan skipped:",pe)}}catch($){console.error("Initialization error:",$),e("OFFLINE")}finally{ve(!1)}},Ie=async $=>{U($),ve(!0),ne(null);try{const le=await N_($);f(le.imagery),m(le.dem),_(le.dem),await Ye(le.imagery.id,le.dem.id),await Mt(le.dem.id);try{const pe=await Su(le.dem.id,k[0],k[1],A[0],A[1]);X(pe)}catch(pe){console.warn("Terrain plan calculation note:",pe)}}catch(le){console.error("Failed to load terrain preset:",le)}finally{ve(!1)}},Ye=async($,le)=>{v(!0);try{const pe=await I_($,le);T(pe)}catch(pe){console.error("Validation error:",pe)}finally{v(!1)}},Mt=async $=>{G(!0);try{const le=await U_($);L(le)}catch(le){console.error("Terrain analysis error:",le)}finally{G(!1)}},ft=$=>{f($),ne(null),h&&Ye($.id,h.id)},Pt=$=>{m($),ne(null),u&&Ye(u.id,$.id),Mt($.id),X(null)},Y=async($,le)=>{if(!h)return;const pe=$??k,me=le??A;se(!0);try{const ze=await Su(h.id,pe[0],pe[1],me[0],me[1]);X(ze)}catch(ze){console.error("Planning error:",ze)}finally{se(!1)}},rn=$=>{P($),Y($,A)},ut=$=>{B($),Y(k,$)},lt=()=>{const $=k,le=A;P(le),B($),Y(le,$)},Ke=()=>{X(null)},Tt=async $=>{if(!(!u||!h)){j(!0),I(null);try{const le=await JE(u.id,h.id,$);ne(le),he("segmentation")}catch(le){const pe=le instanceof Error?le.message:String(le);I(pe),console.error("Segmentation error:",le)}finally{j(!1)}}},$e=()=>{switch(Q){case"slope":return(N==null?void 0:N.slope_preview_url)||(h==null?void 0:h.preview_url);case"costmap":return(N==null?void 0:N.costmap_preview_url)||(h==null?void 0:h.preview_url);case"segmentation":return(ee==null?void 0:ee.segmentation_url)||(u==null?void 0:u.preview_url);case"uncertainty":return(ee==null?void 0:ee.uncertainty_url)||(u==null?void 0:u.preview_url);case"dem":return h==null?void 0:h.preview_url;case"imagery":default:return(u==null?void 0:u.preview_url)||(h==null?void 0:h.preview_url)}},D=M.jsx(ZE,{heightmapUrl:h==null?void 0:h.heightmap_url,textureUrl:$e(),pathCoords:(V==null?void 0:V.plan.path_coords)||[],startCoords:k,goalCoords:A,elevationRange:(C=h==null?void 0:h.preview)!=null&&C.stats?{min:h.preview.stats.min_elevation_m,max:h.preview.stats.max_elevation_m}:void 0});return M.jsxs("div",{className:"flex flex-col min-h-screen bg-mars-900 text-slate-100",children:[M.jsx(R_,{status:s,roverCallsign:n,datasetCount:o}),M.jsxs("main",{className:"flex-1 p-5 grid grid-cols-12 gap-5 max-w-[1920px] mx-auto w-full",children:[M.jsxs("section",{className:"col-span-12 lg:col-span-3 space-y-4",children:[M.jsx(F_,{imageryRecord:u,demRecord:h,demPrimaryRecord:g,demOffsetRecord:y,onSelectImagery:ft,onSelectDem:Pt,onLoadSamples:be,isLoading:xe,activeTerrainId:O,onSelectTerrain:Ie}),M.jsx(O_,{report:w,isValidating:x}),M.jsx(z_,{segmentationResult:ee,isSegmenting:z,error:J,mcSamples:re,onMcSamplesChange:Te,onRunSegmentation:()=>Tt(re),canRun:!!(u&&h)&&!z,activeLayer:Q,onSelectLayer:$=>he($)})]}),M.jsx("section",{className:"col-span-12 lg:col-span-6 flex flex-col",children:M.jsx(B_,{imageryUrl:u==null?void 0:u.preview_url,demColormapUrl:h==null?void 0:h.preview_url,slopeUrl:N==null?void 0:N.slope_preview_url,costmapUrl:N==null?void 0:N.costmap_preview_url,segmentationUrl:ee==null?void 0:ee.segmentation_url,uncertaintyUrl:ee==null?void 0:ee.uncertainty_url,activeLayer:Q,onSelectLayer:he,pathCoords:(V==null?void 0:V.plan.path_coords)||[],exploredNodes:(V==null?void 0:V.plan.explored_nodes)||[],scienceTargets:(N==null?void 0:N.science_targets)||[],startCoords:k,goalCoords:A,onSetStart:rn,onSetGoal:ut,ThreeDViewer:D})}),M.jsx("section",{className:"col-span-12 lg:col-span-3 space-y-4",children:M.jsx(QE,{analysis:N,pathPlan:V,startCoords:k,goalCoords:A,onRunPlanner:()=>Y(),onSelectTargetGoal:$=>{B($),Y(k,$)},onSwapStartGoal:lt,onClearPath:Ke,isPlanning:oe,isAnalyzing:b})})]})]})},tw=()=>M.jsx(ew,{});Jv.createRoot(document.getElementById("root")).render(M.jsx(Xv.StrictMode,{children:M.jsx(tw,{})}));
