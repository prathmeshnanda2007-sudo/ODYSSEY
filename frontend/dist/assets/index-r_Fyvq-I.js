(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Xm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var mu={exports:{}},ba={},gu={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function Vv(){if(Ap)return pt;Ap=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=x&&F[x]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function _(F,ie,Te){this.props=F,this.context=ie,this.refs=E,this.updater=Te||S}_.prototype.isReactComponent={},_.prototype.setState=function(F,ie){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ie,"setState")},_.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function g(){}g.prototype=_.prototype;function N(F,ie,Te){this.props=F,this.context=ie,this.refs=E,this.updater=Te||S}var L=N.prototype=new g;L.constructor=N,w(L,_.prototype),L.isPureReactComponent=!0;var b=Array.isArray,W=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function z(F,ie,Te){var J,fe={},ge=null,ve=null;if(ie!=null)for(J in ie.ref!==void 0&&(ve=ie.ref),ie.key!==void 0&&(ge=""+ie.key),ie)W.call(ie,J)&&!U.hasOwnProperty(J)&&(fe[J]=ie[J]);var Ce=arguments.length-2;if(Ce===1)fe.children=Te;else if(1<Ce){for(var Ie=Array(Ce),Qe=0;Qe<Ce;Qe++)Ie[Qe]=arguments[Qe+2];fe.children=Ie}if(F&&F.defaultProps)for(J in Ce=F.defaultProps,Ce)fe[J]===void 0&&(fe[J]=Ce[J]);return{$$typeof:s,type:F,key:ge,ref:ve,props:fe,_owner:O.current}}function P(F,ie){return{$$typeof:s,type:F.type,key:ie,ref:F.ref,props:F.props,_owner:F._owner}}function A(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function B(F){var ie={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Te){return ie[Te]})}var j=/\/+/g;function X(F,ie){return typeof F=="object"&&F!==null&&F.key!=null?B(""+F.key):ie.toString(36)}function Z(F,ie,Te,J,fe){var ge=typeof F;(ge==="undefined"||ge==="boolean")&&(F=null);var ve=!1;if(F===null)ve=!0;else switch(ge){case"string":case"number":ve=!0;break;case"object":switch(F.$$typeof){case s:case e:ve=!0}}if(ve)return ve=F,fe=fe(ve),F=J===""?"."+X(ve,0):J,b(fe)?(Te="",F!=null&&(Te=F.replace(j,"$&/")+"/"),Z(fe,ie,Te,"",function(Qe){return Qe})):fe!=null&&(A(fe)&&(fe=P(fe,Te+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace(j,"$&/")+"/")+F)),ie.push(fe)),1;if(ve=0,J=J===""?".":J+":",b(F))for(var Ce=0;Ce<F.length;Ce++){ge=F[Ce];var Ie=J+X(ge,Ce);ve+=Z(ge,ie,Te,Ie,fe)}else if(Ie=y(F),typeof Ie=="function")for(F=Ie.call(F),Ce=0;!(ge=F.next()).done;)ge=ge.value,Ie=J+X(ge,Ce++),ve+=Z(ge,ie,Te,Ie,fe);else if(ge==="object")throw ie=String(F),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ve}function ne(F,ie,Te){if(F==null)return F;var J=[],fe=0;return Z(F,J,"","",function(ge){return ie.call(Te,ge,fe++)}),J}function V(F){if(F._status===-1){var ie=F._result;ie=ie(),ie.then(function(Te){(F._status===0||F._status===-1)&&(F._status=1,F._result=Te)},function(Te){(F._status===0||F._status===-1)&&(F._status=2,F._result=Te)}),F._status===-1&&(F._status=0,F._result=ie)}if(F._status===1)return F._result.default;throw F._result}var Q={current:null},k={transition:null},oe={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:k,ReactCurrentOwner:O};function re(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:ne,forEach:function(F,ie,Te){ne(F,function(){ie.apply(this,arguments)},Te)},count:function(F){var ie=0;return ne(F,function(){ie++}),ie},toArray:function(F){return ne(F,function(ie){return ie})||[]},only:function(F){if(!A(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},pt.Component=_,pt.Fragment=n,pt.Profiler=o,pt.PureComponent=N,pt.StrictMode=r,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,pt.act=re,pt.cloneElement=function(F,ie,Te){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var J=w({},F.props),fe=F.key,ge=F.ref,ve=F._owner;if(ie!=null){if(ie.ref!==void 0&&(ge=ie.ref,ve=O.current),ie.key!==void 0&&(fe=""+ie.key),F.type&&F.type.defaultProps)var Ce=F.type.defaultProps;for(Ie in ie)W.call(ie,Ie)&&!U.hasOwnProperty(Ie)&&(J[Ie]=ie[Ie]===void 0&&Ce!==void 0?Ce[Ie]:ie[Ie])}var Ie=arguments.length-2;if(Ie===1)J.children=Te;else if(1<Ie){Ce=Array(Ie);for(var Qe=0;Qe<Ie;Qe++)Ce[Qe]=arguments[Qe+2];J.children=Ce}return{$$typeof:s,type:F.type,key:fe,ref:ge,props:J,_owner:ve}},pt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:c,_context:F},F.Consumer=F},pt.createElement=z,pt.createFactory=function(F){var ie=z.bind(null,F);return ie.type=F,ie},pt.createRef=function(){return{current:null}},pt.forwardRef=function(F){return{$$typeof:f,render:F}},pt.isValidElement=A,pt.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:V}},pt.memo=function(F,ie){return{$$typeof:m,type:F,compare:ie===void 0?null:ie}},pt.startTransition=function(F){var ie=k.transition;k.transition={};try{F()}finally{k.transition=ie}},pt.unstable_act=re,pt.useCallback=function(F,ie){return Q.current.useCallback(F,ie)},pt.useContext=function(F){return Q.current.useContext(F)},pt.useDebugValue=function(){},pt.useDeferredValue=function(F){return Q.current.useDeferredValue(F)},pt.useEffect=function(F,ie){return Q.current.useEffect(F,ie)},pt.useId=function(){return Q.current.useId()},pt.useImperativeHandle=function(F,ie,Te){return Q.current.useImperativeHandle(F,ie,Te)},pt.useInsertionEffect=function(F,ie){return Q.current.useInsertionEffect(F,ie)},pt.useLayoutEffect=function(F,ie){return Q.current.useLayoutEffect(F,ie)},pt.useMemo=function(F,ie){return Q.current.useMemo(F,ie)},pt.useReducer=function(F,ie,Te){return Q.current.useReducer(F,ie,Te)},pt.useRef=function(F){return Q.current.useRef(F)},pt.useState=function(F){return Q.current.useState(F)},pt.useSyncExternalStore=function(F,ie,Te){return Q.current.useSyncExternalStore(F,ie,Te)},pt.useTransition=function(){return Q.current.useTransition()},pt.version="18.3.1",pt}var Cp;function Vd(){return Cp||(Cp=1,gu.exports=Vv()),gu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function Gv(){if(bp)return ba;bp=1;var s=Vd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,m){var v,x={},y=null,S=null;m!==void 0&&(y=""+m),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(v in h)r.call(h,v)&&!c.hasOwnProperty(v)&&(x[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)x[v]===void 0&&(x[v]=h[v]);return{$$typeof:e,type:f,key:y,ref:S,props:x,_owner:o.current}}return ba.Fragment=n,ba.jsx=u,ba.jsxs=u,ba}var Rp;function Wv(){return Rp||(Rp=1,mu.exports=Gv()),mu.exports}var T=Wv(),je=Vd();const jv=Xm(je);var Zo={},vu={exports:{}},Rn={},_u={exports:{}},xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function Xv(){return Pp||(Pp=1,(function(s){function e(k,oe){var re=k.length;k.push(oe);e:for(;0<re;){var F=re-1>>>1,ie=k[F];if(0<o(ie,oe))k[F]=oe,k[re]=ie,re=F;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var oe=k[0],re=k.pop();if(re!==oe){k[0]=re;e:for(var F=0,ie=k.length,Te=ie>>>1;F<Te;){var J=2*(F+1)-1,fe=k[J],ge=J+1,ve=k[ge];if(0>o(fe,re))ge<ie&&0>o(ve,fe)?(k[F]=ve,k[ge]=re,F=ge):(k[F]=fe,k[J]=re,F=J);else if(ge<ie&&0>o(ve,re))k[F]=ve,k[ge]=re,F=ge;else break e}}return oe}function o(k,oe){var re=k.sortIndex-oe.sortIndex;return re!==0?re:k.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],m=[],v=1,x=null,y=3,S=!1,w=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(k){for(var oe=n(m);oe!==null;){if(oe.callback===null)r(m);else if(oe.startTime<=k)r(m),oe.sortIndex=oe.expirationTime,e(h,oe);else break;oe=n(m)}}function b(k){if(E=!1,L(k),!w)if(n(h)!==null)w=!0,V(W);else{var oe=n(m);oe!==null&&Q(b,oe.startTime-k)}}function W(k,oe){w=!1,E&&(E=!1,g(z),z=-1),S=!0;var re=y;try{for(L(oe),x=n(h);x!==null&&(!(x.expirationTime>oe)||k&&!B());){var F=x.callback;if(typeof F=="function"){x.callback=null,y=x.priorityLevel;var ie=F(x.expirationTime<=oe);oe=s.unstable_now(),typeof ie=="function"?x.callback=ie:x===n(h)&&r(h),L(oe)}else r(h);x=n(h)}if(x!==null)var Te=!0;else{var J=n(m);J!==null&&Q(b,J.startTime-oe),Te=!1}return Te}finally{x=null,y=re,S=!1}}var O=!1,U=null,z=-1,P=5,A=-1;function B(){return!(s.unstable_now()-A<P)}function j(){if(U!==null){var k=s.unstable_now();A=k;var oe=!0;try{oe=U(!0,k)}finally{oe?X():(O=!1,U=null)}}else O=!1}var X;if(typeof N=="function")X=function(){N(j)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,ne=Z.port2;Z.port1.onmessage=j,X=function(){ne.postMessage(null)}}else X=function(){_(j,0)};function V(k){U=k,O||(O=!0,X())}function Q(k,oe){z=_(function(){k(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,V(W))},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(k){switch(y){case 1:case 2:case 3:var oe=3;break;default:oe=y}var re=y;y=oe;try{return k()}finally{y=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(k,oe){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var re=y;y=k;try{return oe()}finally{y=re}},s.unstable_scheduleCallback=function(k,oe,re){var F=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?F+re:F):re=F,k){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=re+ie,k={id:v++,callback:oe,priorityLevel:k,startTime:re,expirationTime:ie,sortIndex:-1},re>F?(k.sortIndex=re,e(m,k),n(h)===null&&k===n(m)&&(E?(g(z),z=-1):E=!0,Q(b,re-F))):(k.sortIndex=ie,e(h,k),w||S||(w=!0,V(W))),k},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(k){var oe=y;return function(){var re=y;y=oe;try{return k.apply(this,arguments)}finally{y=re}}}})(xu)),xu}var Np;function qv(){return Np||(Np=1,_u.exports=Xv()),_u.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function Yv(){if(Lp)return Rn;Lp=1;var s=Vd(),e=qv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function y(t){return h.call(x,t)?!0:h.call(v,t)?!1:m.test(t)?x[t]=!0:(v[t]=!0,!1)}function S(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,a,l){if(i===null||typeof i>"u"||S(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(t,i,a,l,d,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new E(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new E(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new E(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new E(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new E(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new E(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new E(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new E(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new E(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,N);_[i]=new E(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,N);_[i]=new E(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,N);_[i]=new E(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new E(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new E(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,a,l){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,d,l)&&(a=null),l||d===null?y(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,l=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),B=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),k=Symbol.iterator;function oe(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,F;function ie(t){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var Te=!1;function J(t,i){if(!t||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var l=le}Reflect.construct(t,[],i)}else{try{i.call()}catch(le){l=le}t.call(i.prototype)}else{try{throw Error()}catch(le){l=le}t()}}catch(le){if(le&&l&&typeof le.stack=="string"){for(var d=le.stack.split(`
`),p=l.stack.split(`
`),M=d.length-1,I=p.length-1;1<=M&&0<=I&&d[M]!==p[I];)I--;for(;1<=M&&0<=I;M--,I--)if(d[M]!==p[I]){if(M!==1||I!==1)do if(M--,I--,0>I||d[M]!==p[I]){var H=`
`+d[M].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=M&&0<=I);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ie(t):""}function fe(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=J(t.type,!1),t;case 11:return t=J(t.type.render,!1),t;case 1:return t=J(t.type,!0),t;default:return""}}function ge(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case O:return"Portal";case P:return"Profiler";case z:return"StrictMode";case X:return"Suspense";case Z:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case j:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ne:return i=t.displayName||null,i!==null?i:ge(t.type)||"Memo";case V:i=t._payload,t=t._init;try{return ge(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ie(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(t){var i=Ie(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function wt(t){t._valueTracker||(t._valueTracker=Qe(t))}function ft(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ie(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function Pt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $(t,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Jt(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=Ce(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Be(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function He(t,i){Be(t,i);var a=Ce(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?bt(t,i.type,a):i.hasOwnProperty("defaultValue")&&bt(t,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ve(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function bt(t,i,a){(i!=="number"||Pt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ze=Array.isArray;function D(t,i,a,l){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Ce(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function C(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ae(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Ze(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:Ce(a)}}function me(t,i){var a=Ce(i.value),l=Ce(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function xe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var be,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function dt(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function tt(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function nt(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,d=tt(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,d):t[a]=d}}var ke=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function at(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function q(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,de=null,pe=null;function Le(t){if(t=ha(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=fo(i),Re(t.stateNode,t.type,i))}}function Ne(t){de?pe?pe.push(t):pe=[t]:de=t}function ot(){if(de){var t=de,i=pe;if(pe=de=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function It(t,i){return t(i)}function qt(){}var xt=!1;function Mn(t,i,a){if(xt)return t(i,a);xt=!0;try{return It(t,i,a)}finally{xt=!1,(de!==null||pe!==null)&&(qt(),ot())}}function gn(t,i){var a=t.stateNode;if(a===null)return null;var l=fo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Zr=!1;if(f)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){Zr=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{Zr=!1}function Mi(t,i,a,l,d,p,M,I,H){var le=Array.prototype.slice.call(arguments,3);try{i.apply(a,le)}catch(ye){this.onError(ye)}}var Ei=!1,Er=null,wr=!1,Xi=null,ja={onError:function(t){Ei=!0,Er=t}};function Qr(t,i,a,l,d,p,M,I,H){Ei=!1,Er=null,Mi.apply(ja,arguments)}function Xa(t,i,a,l,d,p,M,I,H){if(Qr.apply(this,arguments),Ei){if(Ei){var le=Er;Ei=!1,Er=null}else throw Error(n(198));wr||(wr=!0,Xi=le)}}function fi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function qa(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ya(t){if(fi(t)!==t)throw Error(n(188))}function Ol(t){var i=t.alternate;if(!i){if(i=fi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){a=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Ya(d),t;if(p===l)return Ya(d),i;p=p.sibling}throw Error(n(188))}if(a.return!==l.return)a=d,l=p;else{for(var M=!1,I=d.child;I;){if(I===a){M=!0,a=d,l=p;break}if(I===l){M=!0,l=d,a=p;break}I=I.sibling}if(!M){for(I=p.child;I;){if(I===a){M=!0,a=p,l=d;break}if(I===l){M=!0,l=p,a=d;break}I=I.sibling}if(!M)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function R(t){return t=Ol(t),t!==null?Y(t):null}function Y(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Y(t);if(i!==null)return i;t=t.sibling}return null}var ce=e.unstable_scheduleCallback,ue=e.unstable_cancelCallback,K=e.unstable_shouldYield,Ae=e.unstable_requestPaint,Ee=e.unstable_now,qe=e.unstable_getCurrentPriorityLevel,Ge=e.unstable_ImmediatePriority,it=e.unstable_UserBlockingPriority,st=e.unstable_NormalPriority,Ye=e.unstable_LowPriority,gt=e.unstable_IdlePriority,Tt=null,mt=null;function ln(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Tt,t,void 0,(t.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:Mt,Ke=Math.log,Qn=Math.LN2;function Mt(t){return t>>>=0,t===0?32:31-(Ke(t)/Qn|0)|0}var cn=64,Jn=4194304;function Yt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hi(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,d=t.suspendedLanes,p=t.pingedLanes,M=a&268435455;if(M!==0){var I=M&~d;I!==0?l=Yt(I):(p&=M,p!==0&&(l=Yt(p)))}else M=a&~d,M!==0?l=Yt(M):p!==0&&(l=Yt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-lt(i),d=1<<a,l|=t[a],i&=~d;return l}function Lt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hn(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-lt(p),I=1<<M,H=d[M];H===-1?((I&a)===0||(I&l)!==0)&&(d[M]=Lt(I,i)):H<=i&&(t.expiredLanes|=I),p&=~I}}function wi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vn(){var t=cn;return cn<<=1,(cn&4194240)===0&&(cn=64),t}function Vn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function En(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-lt(i),t[i]=a}function $a(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-lt(a),p=1<<d;i[d]=0,l[d]=-1,t[d]=-1,a&=~p}}function kl(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-lt(a),d=1<<l;d&i|t[l]&i&&(t[l]|=i),a&=~d}}var Rt=0;function rf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var sf,zl,af,of,lf,Bl=!1,Ka=[],qi=null,Yi=null,$i=null,Zs=new Map,Qs=new Map,Ki=[],ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cf(t,i){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Zs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(i.pointerId)}}function Js(t,i,a,l,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},i!==null&&(i=ha(i),i!==null&&zl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function dg(t,i,a,l,d){switch(i){case"focusin":return qi=Js(qi,t,i,a,l,d),!0;case"dragenter":return Yi=Js(Yi,t,i,a,l,d),!0;case"mouseover":return $i=Js($i,t,i,a,l,d),!0;case"pointerover":var p=d.pointerId;return Zs.set(p,Js(Zs.get(p)||null,t,i,a,l,d)),!0;case"gotpointercapture":return p=d.pointerId,Qs.set(p,Js(Qs.get(p)||null,t,i,a,l,d)),!0}return!1}function uf(t){var i=Tr(t.target);if(i!==null){var a=fi(i);if(a!==null){if(i=a.tag,i===13){if(i=qa(a),i!==null){t.blockedOn=i,lf(t.priority,function(){af(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Vl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);At=l,a.target.dispatchEvent(l),At=null}else return i=ha(a),i!==null&&zl(i),t.blockedOn=a,!1;i.shift()}return!0}function df(t,i,a){Za(t)&&a.delete(i)}function fg(){Bl=!1,qi!==null&&Za(qi)&&(qi=null),Yi!==null&&Za(Yi)&&(Yi=null),$i!==null&&Za($i)&&($i=null),Zs.forEach(df),Qs.forEach(df)}function ea(t,i){t.blockedOn===i&&(t.blockedOn=null,Bl||(Bl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fg)))}function ta(t){function i(d){return ea(d,t)}if(0<Ka.length){ea(Ka[0],t);for(var a=1;a<Ka.length;a++){var l=Ka[a];l.blockedOn===t&&(l.blockedOn=null)}}for(qi!==null&&ea(qi,t),Yi!==null&&ea(Yi,t),$i!==null&&ea($i,t),Zs.forEach(i),Qs.forEach(i),a=0;a<Ki.length;a++)l=Ki[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Ki.length&&(a=Ki[0],a.blockedOn===null);)uf(a),a.blockedOn===null&&Ki.shift()}var Jr=b.ReactCurrentBatchConfig,Qa=!0;function hg(t,i,a,l){var d=Rt,p=Jr.transition;Jr.transition=null;try{Rt=1,Hl(t,i,a,l)}finally{Rt=d,Jr.transition=p}}function pg(t,i,a,l){var d=Rt,p=Jr.transition;Jr.transition=null;try{Rt=4,Hl(t,i,a,l)}finally{Rt=d,Jr.transition=p}}function Hl(t,i,a,l){if(Qa){var d=Vl(t,i,a,l);if(d===null)sc(t,i,l,Ja,a),cf(t,l);else if(dg(d,t,i,a,l))l.stopPropagation();else if(cf(t,l),i&4&&-1<ug.indexOf(t)){for(;d!==null;){var p=ha(d);if(p!==null&&sf(p),p=Vl(t,i,a,l),p===null&&sc(t,i,l,Ja,a),p===d)break;d=p}d!==null&&l.stopPropagation()}else sc(t,i,l,null,a)}}var Ja=null;function Vl(t,i,a,l){if(Ja=null,t=q(l),t=Tr(t),t!==null)if(i=fi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=qa(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Ja=t,null}function ff(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qe()){case Ge:return 1;case it:return 4;case st:case Ye:return 16;case gt:return 536870912;default:return 16}default:return 16}}var Zi=null,Gl=null,eo=null;function hf(){if(eo)return eo;var t,i=Gl,a=i.length,l,d="value"in Zi?Zi.value:Zi.textContent,p=d.length;for(t=0;t<a&&i[t]===d[t];t++);var M=a-t;for(l=1;l<=M&&i[a-l]===d[p-l];l++);return eo=d.slice(t,1<l?1-l:void 0)}function to(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function pf(){return!1}function In(t){function i(a,l,d,p,M){this._reactName=a,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(a=t[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?no:pf,this.isPropagationStopped=pf,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),i}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=In(es),na=re({},es,{view:0,detail:0}),mg=In(na),jl,Xl,ia,io=re({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ia&&(ia&&t.type==="mousemove"?(jl=t.screenX-ia.screenX,Xl=t.screenY-ia.screenY):Xl=jl=0,ia=t),jl)},movementY:function(t){return"movementY"in t?t.movementY:Xl}}),mf=In(io),gg=re({},io,{dataTransfer:0}),vg=In(gg),_g=re({},na,{relatedTarget:0}),ql=In(_g),xg=re({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),yg=In(xg),Sg=re({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mg=In(Sg),Eg=re({},es,{data:0}),gf=In(Eg),wg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ag={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ag[t])?!!i[t]:!1}function Yl(){return Cg}var bg=re({},na,{key:function(t){if(t.key){var i=wg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=to(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Tg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yl,charCode:function(t){return t.type==="keypress"?to(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?to(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Rg=In(bg),Pg=re({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vf=In(Pg),Ng=re({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yl}),Lg=In(Ng),Dg=re({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ig=In(Dg),Ug=re({},io,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fg=In(Ug),Og=[9,13,27,32],$l=f&&"CompositionEvent"in window,ra=null;f&&"documentMode"in document&&(ra=document.documentMode);var kg=f&&"TextEvent"in window&&!ra,_f=f&&(!$l||ra&&8<ra&&11>=ra),xf=" ",yf=!1;function Sf(t,i){switch(t){case"keyup":return Og.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function zg(t,i){switch(t){case"compositionend":return Mf(i);case"keypress":return i.which!==32?null:(yf=!0,xf);case"textInput":return t=i.data,t===xf&&yf?null:t;default:return null}}function Bg(t,i){if(ts)return t==="compositionend"||!$l&&Sf(t,i)?(t=hf(),eo=Gl=Zi=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _f&&i.locale!=="ko"?null:i.data;default:return null}}var Hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ef(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Hg[t.type]:i==="textarea"}function wf(t,i,a,l){Ne(l),i=lo(i,"onChange"),0<i.length&&(a=new Wl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var sa=null,aa=null;function Vg(t){Vf(t,0)}function ro(t){var i=as(t);if(ft(i))return t}function Gg(t,i){if(t==="change")return i}var Tf=!1;if(f){var Kl;if(f){var Zl="oninput"in document;if(!Zl){var Af=document.createElement("div");Af.setAttribute("oninput","return;"),Zl=typeof Af.oninput=="function"}Kl=Zl}else Kl=!1;Tf=Kl&&(!document.documentMode||9<document.documentMode)}function Cf(){sa&&(sa.detachEvent("onpropertychange",bf),aa=sa=null)}function bf(t){if(t.propertyName==="value"&&ro(aa)){var i=[];wf(i,aa,t,q(t)),Mn(Vg,i)}}function Wg(t,i,a){t==="focusin"?(Cf(),sa=i,aa=a,sa.attachEvent("onpropertychange",bf)):t==="focusout"&&Cf()}function jg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ro(aa)}function Xg(t,i){if(t==="click")return ro(i)}function qg(t,i){if(t==="input"||t==="change")return ro(i)}function Yg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:Yg;function oa(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var d=a[l];if(!h.call(i,d)||!ei(t[d],i[d]))return!1}return!0}function Rf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pf(t,i){var a=Rf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rf(a)}}function Nf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Nf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Lf(){for(var t=window,i=Pt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Pt(t.document)}return i}function Ql(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function $g(t){var i=Lf(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Nf(a.ownerDocument.documentElement,a)){if(l!==null&&Ql(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,p=Math.min(l.start,d);l=l.end===void 0?p:Math.min(l.end,d),!t.extend&&p>l&&(d=l,l=p,p=d),d=Pf(a,p);var M=Pf(a,l);d&&M&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Kg=f&&"documentMode"in document&&11>=document.documentMode,ns=null,Jl=null,la=null,ec=!1;function Df(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ec||ns==null||ns!==Pt(l)||(l=ns,"selectionStart"in l&&Ql(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),la&&oa(la,l)||(la=l,l=lo(Jl,"onSelect"),0<l.length&&(i=new Wl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=ns)))}function so(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var is={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},tc={},If={};f&&(If=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function ao(t){if(tc[t])return tc[t];if(!is[t])return t;var i=is[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in If)return tc[t]=i[a];return t}var Uf=ao("animationend"),Ff=ao("animationiteration"),Of=ao("animationstart"),kf=ao("transitionend"),zf=new Map,Bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){zf.set(t,i),c(i,[t])}for(var nc=0;nc<Bf.length;nc++){var ic=Bf[nc],Zg=ic.toLowerCase(),Qg=ic[0].toUpperCase()+ic.slice(1);Qi(Zg,"on"+Qg)}Qi(Uf,"onAnimationEnd"),Qi(Ff,"onAnimationIteration"),Qi(Of,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(kf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Hf(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Xa(l,i,void 0,t),t.currentTarget=null}function Vf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],d=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var I=l[M],H=I.instance,le=I.currentTarget;if(I=I.listener,H!==p&&d.isPropagationStopped())break e;Hf(d,I,le),p=H}else for(M=0;M<l.length;M++){if(I=l[M],H=I.instance,le=I.currentTarget,I=I.listener,H!==p&&d.isPropagationStopped())break e;Hf(d,I,le),p=H}}}if(wr)throw t=Xi,wr=!1,Xi=null,t}function Ut(t,i){var a=i[dc];a===void 0&&(a=i[dc]=new Set);var l=t+"__bubble";a.has(l)||(Gf(i,t,2,!1),a.add(l))}function rc(t,i,a){var l=0;i&&(l|=4),Gf(a,t,l,i)}var oo="_reactListening"+Math.random().toString(36).slice(2);function ua(t){if(!t[oo]){t[oo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Jg.has(a)||rc(a,!1,t),rc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[oo]||(i[oo]=!0,rc("selectionchange",!1,i))}}function Gf(t,i,a,l){switch(ff(i)){case 1:var d=hg;break;case 4:d=pg;break;default:d=Hl}a=d.bind(null,i,a,t),d=void 0,!Zr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function sc(t,i,a,l,d){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var I=l.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(M===4)for(M=l.return;M!==null;){var H=M.tag;if((H===3||H===4)&&(H=M.stateNode.containerInfo,H===d||H.nodeType===8&&H.parentNode===d))return;M=M.return}for(;I!==null;){if(M=Tr(I),M===null)return;if(H=M.tag,H===5||H===6){l=p=M;continue e}I=I.parentNode}}l=l.return}Mn(function(){var le=p,ye=q(a),Se=[];e:{var _e=zf.get(t);if(_e!==void 0){var De=Wl,ze=t;switch(t){case"keypress":if(to(a)===0)break e;case"keydown":case"keyup":De=Rg;break;case"focusin":ze="focus",De=ql;break;case"focusout":ze="blur",De=ql;break;case"beforeblur":case"afterblur":De=ql;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=Lg;break;case Uf:case Ff:case Of:De=yg;break;case kf:De=Ig;break;case"scroll":De=mg;break;case"wheel":De=Fg;break;case"copy":case"cut":case"paste":De=Mg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=vf}var We=(i&4)!==0,Gt=!We&&t==="scroll",ee=We?_e!==null?_e+"Capture":null:_e;We=[];for(var G=le,se;G!==null;){se=G;var we=se.stateNode;if(se.tag===5&&we!==null&&(se=we,ee!==null&&(we=gn(G,ee),we!=null&&We.push(da(G,we,se)))),Gt)break;G=G.return}0<We.length&&(_e=new De(_e,ze,null,a,ye),Se.push({event:_e,listeners:We}))}}if((i&7)===0){e:{if(_e=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",_e&&a!==At&&(ze=a.relatedTarget||a.fromElement)&&(Tr(ze)||ze[Ti]))break e;if((De||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,De?(ze=a.relatedTarget||a.toElement,De=le,ze=ze?Tr(ze):null,ze!==null&&(Gt=fi(ze),ze!==Gt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(De=null,ze=le),De!==ze)){if(We=mf,we="onMouseLeave",ee="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(We=vf,we="onPointerLeave",ee="onPointerEnter",G="pointer"),Gt=De==null?_e:as(De),se=ze==null?_e:as(ze),_e=new We(we,G+"leave",De,a,ye),_e.target=Gt,_e.relatedTarget=se,we=null,Tr(ye)===le&&(We=new We(ee,G+"enter",ze,a,ye),We.target=se,We.relatedTarget=Gt,we=We),Gt=we,De&&ze)t:{for(We=De,ee=ze,G=0,se=We;se;se=rs(se))G++;for(se=0,we=ee;we;we=rs(we))se++;for(;0<G-se;)We=rs(We),G--;for(;0<se-G;)ee=rs(ee),se--;for(;G--;){if(We===ee||ee!==null&&We===ee.alternate)break t;We=rs(We),ee=rs(ee)}We=null}else We=null;De!==null&&Wf(Se,_e,De,We,!1),ze!==null&&Gt!==null&&Wf(Se,Gt,ze,We,!0)}}e:{if(_e=le?as(le):window,De=_e.nodeName&&_e.nodeName.toLowerCase(),De==="select"||De==="input"&&_e.type==="file")var $e=Gg;else if(Ef(_e))if(Tf)$e=qg;else{$e=jg;var Je=Wg}else(De=_e.nodeName)&&De.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&($e=Xg);if($e&&($e=$e(t,le))){wf(Se,$e,a,ye);break e}Je&&Je(t,_e,le),t==="focusout"&&(Je=_e._wrapperState)&&Je.controlled&&_e.type==="number"&&bt(_e,"number",_e.value)}switch(Je=le?as(le):window,t){case"focusin":(Ef(Je)||Je.contentEditable==="true")&&(ns=Je,Jl=le,la=null);break;case"focusout":la=Jl=ns=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,Df(Se,a,ye);break;case"selectionchange":if(Kg)break;case"keydown":case"keyup":Df(Se,a,ye)}var et;if($l)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else ts?Sf(t,a)&&(rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(_f&&a.locale!=="ko"&&(ts||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ts&&(et=hf()):(Zi=ye,Gl="value"in Zi?Zi.value:Zi.textContent,ts=!0)),Je=lo(le,rt),0<Je.length&&(rt=new gf(rt,t,null,a,ye),Se.push({event:rt,listeners:Je}),et?rt.data=et:(et=Mf(a),et!==null&&(rt.data=et)))),(et=kg?zg(t,a):Bg(t,a))&&(le=lo(le,"onBeforeInput"),0<le.length&&(ye=new gf("onBeforeInput","beforeinput",null,a,ye),Se.push({event:ye,listeners:le}),ye.data=et))}Vf(Se,i)})}function da(t,i,a){return{instance:t,listener:i,currentTarget:a}}function lo(t,i){for(var a=i+"Capture",l=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=gn(t,a),p!=null&&l.unshift(da(t,p,d)),p=gn(t,i),p!=null&&l.push(da(t,p,d))),t=t.return}return l}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wf(t,i,a,l,d){for(var p=i._reactName,M=[];a!==null&&a!==l;){var I=a,H=I.alternate,le=I.stateNode;if(H!==null&&H===l)break;I.tag===5&&le!==null&&(I=le,d?(H=gn(a,p),H!=null&&M.unshift(da(a,H,I))):d||(H=gn(a,p),H!=null&&M.push(da(a,H,I)))),a=a.return}M.length!==0&&t.push({event:i,listeners:M})}var ev=/\r\n?/g,tv=/\u0000|\uFFFD/g;function jf(t){return(typeof t=="string"?t:""+t).replace(ev,`
`).replace(tv,"")}function co(t,i,a){if(i=jf(i),jf(t)!==i&&a)throw Error(n(425))}function uo(){}var ac=null,oc=null;function lc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,nv=typeof clearTimeout=="function"?clearTimeout:void 0,Xf=typeof Promise=="function"?Promise:void 0,iv=typeof queueMicrotask=="function"?queueMicrotask:typeof Xf<"u"?function(t){return Xf.resolve(null).then(t).catch(rv)}:cc;function rv(t){setTimeout(function(){throw t})}function uc(t,i){var a=i,l=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(l===0){t.removeChild(d),ta(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=d}while(a);ta(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function qf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),pi="__reactFiber$"+ss,fa="__reactProps$"+ss,Ti="__reactContainer$"+ss,dc="__reactEvents$"+ss,sv="__reactListeners$"+ss,av="__reactHandles$"+ss;function Tr(t){var i=t[pi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ti]||a[pi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=qf(t);t!==null;){if(a=t[pi])return a;t=qf(t)}return i}t=a,a=t.parentNode}return null}function ha(t){return t=t[pi]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function fo(t){return t[fa]||null}var fc=[],os=-1;function er(t){return{current:t}}function Ft(t){0>os||(t.current=fc[os],fc[os]=null,os--)}function Dt(t,i){os++,fc[os]=t.current,t.current=i}var tr={},un=er(tr),wn=er(!1),Ar=tr;function ls(t,i){var a=t.type.contextTypes;if(!a)return tr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Tn(t){return t=t.childContextTypes,t!=null}function ho(){Ft(wn),Ft(un)}function Yf(t,i,a){if(un.current!==tr)throw Error(n(168));Dt(un,i),Dt(wn,a)}function $f(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,ve(t)||"Unknown",d));return re({},a,l)}function po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Ar=un.current,Dt(un,t),Dt(wn,wn.current),!0}function Kf(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=$f(t,i,Ar),l.__reactInternalMemoizedMergedChildContext=t,Ft(wn),Ft(un),Dt(un,t)):Ft(wn),Dt(wn,a)}var Ai=null,mo=!1,hc=!1;function Zf(t){Ai===null?Ai=[t]:Ai.push(t)}function ov(t){mo=!0,Zf(t)}function nr(){if(!hc&&Ai!==null){hc=!0;var t=0,i=Rt;try{var a=Ai;for(Rt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ai=null,mo=!1}catch(d){throw Ai!==null&&(Ai=Ai.slice(t+1)),ce(Ge,nr),d}finally{Rt=i,hc=!1}}return null}var cs=[],us=0,go=null,vo=0,Gn=[],Wn=0,Cr=null,Ci=1,bi="";function br(t,i){cs[us++]=vo,cs[us++]=go,go=t,vo=i}function Qf(t,i,a){Gn[Wn++]=Ci,Gn[Wn++]=bi,Gn[Wn++]=Cr,Cr=t;var l=Ci;t=bi;var d=32-lt(l)-1;l&=~(1<<d),a+=1;var p=32-lt(i)+d;if(30<p){var M=d-d%5;p=(l&(1<<M)-1).toString(32),l>>=M,d-=M,Ci=1<<32-lt(i)+d|a<<d|l,bi=p+t}else Ci=1<<p|a<<d|l,bi=t}function pc(t){t.return!==null&&(br(t,1),Qf(t,1,0))}function mc(t){for(;t===go;)go=cs[--us],cs[us]=null,vo=cs[--us],cs[us]=null;for(;t===Cr;)Cr=Gn[--Wn],Gn[Wn]=null,bi=Gn[--Wn],Gn[Wn]=null,Ci=Gn[--Wn],Gn[Wn]=null}var Un=null,Fn=null,Ot=!1,ti=null;function Jf(t,i){var a=Yn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function eh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,Fn=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Cr!==null?{id:Ci,overflow:bi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Yn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Un=t,Fn=null,!0):!1;default:return!1}}function gc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vc(t){if(Ot){var i=Fn;if(i){var a=i;if(!eh(t,i)){if(gc(t))throw Error(n(418));i=Ji(a.nextSibling);var l=Un;i&&eh(t,i)?Jf(l,a):(t.flags=t.flags&-4097|2,Ot=!1,Un=t)}}else{if(gc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,Un=t}}}function th(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function _o(t){if(t!==Un)return!1;if(!Ot)return th(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!lc(t.type,t.memoizedProps)),i&&(i=Fn)){if(gc(t))throw nh(),Error(n(418));for(;i;)Jf(t,i),i=Ji(i.nextSibling)}if(th(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Fn=Ji(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=Un?Ji(t.stateNode.nextSibling):null;return!0}function nh(){for(var t=Fn;t;)t=Ji(t.nextSibling)}function ds(){Fn=Un=null,Ot=!1}function _c(t){ti===null?ti=[t]:ti.push(t)}var lv=b.ReactCurrentBatchConfig;function pa(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var d=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var I=d.refs;M===null?delete I[p]:I[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function xo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function ih(t){var i=t._init;return i(t._payload)}function rh(t){function i(ee,G){if(t){var se=ee.deletions;se===null?(ee.deletions=[G],ee.flags|=16):se.push(G)}}function a(ee,G){if(!t)return null;for(;G!==null;)i(ee,G),G=G.sibling;return null}function l(ee,G){for(ee=new Map;G!==null;)G.key!==null?ee.set(G.key,G):ee.set(G.index,G),G=G.sibling;return ee}function d(ee,G){return ee=ur(ee,G),ee.index=0,ee.sibling=null,ee}function p(ee,G,se){return ee.index=se,t?(se=ee.alternate,se!==null?(se=se.index,se<G?(ee.flags|=2,G):se):(ee.flags|=2,G)):(ee.flags|=1048576,G)}function M(ee){return t&&ee.alternate===null&&(ee.flags|=2),ee}function I(ee,G,se,we){return G===null||G.tag!==6?(G=cu(se,ee.mode,we),G.return=ee,G):(G=d(G,se),G.return=ee,G)}function H(ee,G,se,we){var $e=se.type;return $e===U?ye(ee,G,se.props.children,we,se.key):G!==null&&(G.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===V&&ih($e)===G.type)?(we=d(G,se.props),we.ref=pa(ee,G,se),we.return=ee,we):(we=Go(se.type,se.key,se.props,null,ee.mode,we),we.ref=pa(ee,G,se),we.return=ee,we)}function le(ee,G,se,we){return G===null||G.tag!==4||G.stateNode.containerInfo!==se.containerInfo||G.stateNode.implementation!==se.implementation?(G=uu(se,ee.mode,we),G.return=ee,G):(G=d(G,se.children||[]),G.return=ee,G)}function ye(ee,G,se,we,$e){return G===null||G.tag!==7?(G=Fr(se,ee.mode,we,$e),G.return=ee,G):(G=d(G,se),G.return=ee,G)}function Se(ee,G,se){if(typeof G=="string"&&G!==""||typeof G=="number")return G=cu(""+G,ee.mode,se),G.return=ee,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case W:return se=Go(G.type,G.key,G.props,null,ee.mode,se),se.ref=pa(ee,null,G),se.return=ee,se;case O:return G=uu(G,ee.mode,se),G.return=ee,G;case V:var we=G._init;return Se(ee,we(G._payload),se)}if(Ze(G)||oe(G))return G=Fr(G,ee.mode,se,null),G.return=ee,G;xo(ee,G)}return null}function _e(ee,G,se,we){var $e=G!==null?G.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return $e!==null?null:I(ee,G,""+se,we);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case W:return se.key===$e?H(ee,G,se,we):null;case O:return se.key===$e?le(ee,G,se,we):null;case V:return $e=se._init,_e(ee,G,$e(se._payload),we)}if(Ze(se)||oe(se))return $e!==null?null:ye(ee,G,se,we,null);xo(ee,se)}return null}function De(ee,G,se,we,$e){if(typeof we=="string"&&we!==""||typeof we=="number")return ee=ee.get(se)||null,I(G,ee,""+we,$e);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case W:return ee=ee.get(we.key===null?se:we.key)||null,H(G,ee,we,$e);case O:return ee=ee.get(we.key===null?se:we.key)||null,le(G,ee,we,$e);case V:var Je=we._init;return De(ee,G,se,Je(we._payload),$e)}if(Ze(we)||oe(we))return ee=ee.get(se)||null,ye(G,ee,we,$e,null);xo(G,we)}return null}function ze(ee,G,se,we){for(var $e=null,Je=null,et=G,rt=G=0,nn=null;et!==null&&rt<se.length;rt++){et.index>rt?(nn=et,et=null):nn=et.sibling;var Et=_e(ee,et,se[rt],we);if(Et===null){et===null&&(et=nn);break}t&&et&&Et.alternate===null&&i(ee,et),G=p(Et,G,rt),Je===null?$e=Et:Je.sibling=Et,Je=Et,et=nn}if(rt===se.length)return a(ee,et),Ot&&br(ee,rt),$e;if(et===null){for(;rt<se.length;rt++)et=Se(ee,se[rt],we),et!==null&&(G=p(et,G,rt),Je===null?$e=et:Je.sibling=et,Je=et);return Ot&&br(ee,rt),$e}for(et=l(ee,et);rt<se.length;rt++)nn=De(et,ee,rt,se[rt],we),nn!==null&&(t&&nn.alternate!==null&&et.delete(nn.key===null?rt:nn.key),G=p(nn,G,rt),Je===null?$e=nn:Je.sibling=nn,Je=nn);return t&&et.forEach(function(dr){return i(ee,dr)}),Ot&&br(ee,rt),$e}function We(ee,G,se,we){var $e=oe(se);if(typeof $e!="function")throw Error(n(150));if(se=$e.call(se),se==null)throw Error(n(151));for(var Je=$e=null,et=G,rt=G=0,nn=null,Et=se.next();et!==null&&!Et.done;rt++,Et=se.next()){et.index>rt?(nn=et,et=null):nn=et.sibling;var dr=_e(ee,et,Et.value,we);if(dr===null){et===null&&(et=nn);break}t&&et&&dr.alternate===null&&i(ee,et),G=p(dr,G,rt),Je===null?$e=dr:Je.sibling=dr,Je=dr,et=nn}if(Et.done)return a(ee,et),Ot&&br(ee,rt),$e;if(et===null){for(;!Et.done;rt++,Et=se.next())Et=Se(ee,Et.value,we),Et!==null&&(G=p(Et,G,rt),Je===null?$e=Et:Je.sibling=Et,Je=Et);return Ot&&br(ee,rt),$e}for(et=l(ee,et);!Et.done;rt++,Et=se.next())Et=De(et,ee,rt,Et.value,we),Et!==null&&(t&&Et.alternate!==null&&et.delete(Et.key===null?rt:Et.key),G=p(Et,G,rt),Je===null?$e=Et:Je.sibling=Et,Je=Et);return t&&et.forEach(function(Hv){return i(ee,Hv)}),Ot&&br(ee,rt),$e}function Gt(ee,G,se,we){if(typeof se=="object"&&se!==null&&se.type===U&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case W:e:{for(var $e=se.key,Je=G;Je!==null;){if(Je.key===$e){if($e=se.type,$e===U){if(Je.tag===7){a(ee,Je.sibling),G=d(Je,se.props.children),G.return=ee,ee=G;break e}}else if(Je.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===V&&ih($e)===Je.type){a(ee,Je.sibling),G=d(Je,se.props),G.ref=pa(ee,Je,se),G.return=ee,ee=G;break e}a(ee,Je);break}else i(ee,Je);Je=Je.sibling}se.type===U?(G=Fr(se.props.children,ee.mode,we,se.key),G.return=ee,ee=G):(we=Go(se.type,se.key,se.props,null,ee.mode,we),we.ref=pa(ee,G,se),we.return=ee,ee=we)}return M(ee);case O:e:{for(Je=se.key;G!==null;){if(G.key===Je)if(G.tag===4&&G.stateNode.containerInfo===se.containerInfo&&G.stateNode.implementation===se.implementation){a(ee,G.sibling),G=d(G,se.children||[]),G.return=ee,ee=G;break e}else{a(ee,G);break}else i(ee,G);G=G.sibling}G=uu(se,ee.mode,we),G.return=ee,ee=G}return M(ee);case V:return Je=se._init,Gt(ee,G,Je(se._payload),we)}if(Ze(se))return ze(ee,G,se,we);if(oe(se))return We(ee,G,se,we);xo(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,G!==null&&G.tag===6?(a(ee,G.sibling),G=d(G,se),G.return=ee,ee=G):(a(ee,G),G=cu(se,ee.mode,we),G.return=ee,ee=G),M(ee)):a(ee,G)}return Gt}var fs=rh(!0),sh=rh(!1),yo=er(null),So=null,hs=null,xc=null;function yc(){xc=hs=So=null}function Sc(t){var i=yo.current;Ft(yo),t._currentValue=i}function Mc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function ps(t,i){So=t,xc=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(An=!0),t.firstContext=null)}function jn(t){var i=t._currentValue;if(xc!==t)if(t={context:t,memoizedValue:i,next:null},hs===null){if(So===null)throw Error(n(308));hs=t,So.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return i}var Rr=null;function Ec(t){Rr===null?Rr=[t]:Rr.push(t)}function ah(t,i,a,l){var d=i.interleaved;return d===null?(a.next=a,Ec(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ri(t,l)}function Ri(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var ir=!1;function wc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Ri(t,a)}return d=l.interleaved,d===null?(i.next=i,Ec(l)):(i.next=d.next,d.next=i),l.interleaved=i,Ri(t,a)}function Mo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,kl(t,a)}}function lh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=M:p=p.next=M,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Eo(t,i,a,l){var d=t.updateQueue;ir=!1;var p=d.firstBaseUpdate,M=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var H=I,le=H.next;H.next=null,M===null?p=le:M.next=le,M=H;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,I=ye.lastBaseUpdate,I!==M&&(I===null?ye.firstBaseUpdate=le:I.next=le,ye.lastBaseUpdate=H))}if(p!==null){var Se=d.baseState;M=0,ye=le=H=null,I=p;do{var _e=I.lane,De=I.eventTime;if((l&_e)===_e){ye!==null&&(ye=ye.next={eventTime:De,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=t,We=I;switch(_e=i,De=a,We.tag){case 1:if(ze=We.payload,typeof ze=="function"){Se=ze.call(De,Se,_e);break e}Se=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=We.payload,_e=typeof ze=="function"?ze.call(De,Se,_e):ze,_e==null)break e;Se=re({},Se,_e);break e;case 2:ir=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,_e=d.effects,_e===null?d.effects=[I]:_e.push(I))}else De={eventTime:De,lane:_e,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ye===null?(le=ye=De,H=Se):ye=ye.next=De,M|=_e;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;_e=I,I=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(ye===null&&(H=Se),d.baseState=H,d.firstBaseUpdate=le,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Lr|=M,t.lanes=M,t.memoizedState=Se}}function ch(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=a,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var ma={},mi=er(ma),ga=er(ma),va=er(ma);function Pr(t){if(t===ma)throw Error(n(174));return t}function Tc(t,i){switch(Dt(va,i),Dt(ga,t),Dt(mi,ma),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Xe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Xe(i,t)}Ft(mi),Dt(mi,i)}function ms(){Ft(mi),Ft(ga),Ft(va)}function uh(t){Pr(va.current);var i=Pr(mi.current),a=Xe(i,t.type);i!==a&&(Dt(ga,t),Dt(mi,a))}function Ac(t){ga.current===t&&(Ft(mi),Ft(ga))}var kt=er(0);function wo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Cc=[];function bc(){for(var t=0;t<Cc.length;t++)Cc[t]._workInProgressVersionPrimary=null;Cc.length=0}var To=b.ReactCurrentDispatcher,Rc=b.ReactCurrentBatchConfig,Nr=0,zt=null,$t=null,en=null,Ao=!1,_a=!1,xa=0,cv=0;function dn(){throw Error(n(321))}function Pc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ei(t[a],i[a]))return!1;return!0}function Nc(t,i,a,l,d,p){if(Nr=p,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,To.current=t===null||t.memoizedState===null?hv:pv,t=a(l,d),_a){p=0;do{if(_a=!1,xa=0,25<=p)throw Error(n(301));p+=1,en=$t=null,i.updateQueue=null,To.current=mv,t=a(l,d)}while(_a)}if(To.current=Ro,i=$t!==null&&$t.next!==null,Nr=0,en=$t=zt=null,Ao=!1,i)throw Error(n(300));return t}function Lc(){var t=xa!==0;return xa=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?zt.memoizedState=en=t:en=en.next=t,en}function Xn(){if($t===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=en===null?zt.memoizedState:en.next;if(i!==null)en=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},en===null?zt.memoizedState=en=t:en=en.next=t}return en}function ya(t,i){return typeof i=="function"?i(t):i}function Dc(t){var i=Xn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=$t,d=l.baseQueue,p=a.pending;if(p!==null){if(d!==null){var M=d.next;d.next=p.next,p.next=M}l.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,l=l.baseState;var I=M=null,H=null,le=p;do{var ye=le.lane;if((Nr&ye)===ye)H!==null&&(H=H.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),l=le.hasEagerState?le.eagerState:t(l,le.action);else{var Se={lane:ye,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};H===null?(I=H=Se,M=l):H=H.next=Se,zt.lanes|=ye,Lr|=ye}le=le.next}while(le!==null&&le!==p);H===null?M=l:H.next=I,ei(l,i.memoizedState)||(An=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=H,a.lastRenderedState=l}if(t=a.interleaved,t!==null){d=t;do p=d.lane,zt.lanes|=p,Lr|=p,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ic(t){var i=Xn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var M=d=d.next;do p=t(p,M.action),M=M.next;while(M!==d);ei(p,i.memoizedState)||(An=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,l]}function dh(){}function fh(t,i){var a=zt,l=Xn(),d=i(),p=!ei(l.memoizedState,d);if(p&&(l.memoizedState=d,An=!0),l=l.queue,Uc(mh.bind(null,a,l,t),[t]),l.getSnapshot!==i||p||en!==null&&en.memoizedState.tag&1){if(a.flags|=2048,Sa(9,ph.bind(null,a,l,d,i),void 0,null),tn===null)throw Error(n(349));(Nr&30)!==0||hh(a,i,d)}return d}function hh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function ph(t,i,a,l){i.value=a,i.getSnapshot=l,gh(i)&&vh(t)}function mh(t,i,a){return a(function(){gh(i)&&vh(t)})}function gh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ei(t,a)}catch{return!0}}function vh(t){var i=Ri(t,1);i!==null&&si(i,t,1,-1)}function _h(t){var i=gi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},i.queue=t,t=t.dispatch=fv.bind(null,zt,t),[i.memoizedState,t]}function Sa(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function xh(){return Xn().memoizedState}function Co(t,i,a,l){var d=gi();zt.flags|=t,d.memoizedState=Sa(1|i,a,void 0,l===void 0?null:l)}function bo(t,i,a,l){var d=Xn();l=l===void 0?null:l;var p=void 0;if($t!==null){var M=$t.memoizedState;if(p=M.destroy,l!==null&&Pc(l,M.deps)){d.memoizedState=Sa(i,a,p,l);return}}zt.flags|=t,d.memoizedState=Sa(1|i,a,p,l)}function yh(t,i){return Co(8390656,8,t,i)}function Uc(t,i){return bo(2048,8,t,i)}function Sh(t,i){return bo(4,2,t,i)}function Mh(t,i){return bo(4,4,t,i)}function Eh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function wh(t,i,a){return a=a!=null?a.concat([t]):null,bo(4,4,Eh.bind(null,i,t),a)}function Fc(){}function Th(t,i){var a=Xn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Pc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Ah(t,i){var a=Xn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Pc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Ch(t,i,a){return(Nr&21)===0?(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=a):(ei(a,i)||(a=vn(),zt.lanes|=a,Lr|=a,t.baseState=!0),i)}function uv(t,i){var a=Rt;Rt=a!==0&&4>a?a:4,t(!0);var l=Rc.transition;Rc.transition={};try{t(!1),i()}finally{Rt=a,Rc.transition=l}}function bh(){return Xn().memoizedState}function dv(t,i,a){var l=lr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Rh(t))Ph(i,a);else if(a=ah(t,i,a,l),a!==null){var d=xn();si(a,t,l,d),Nh(a,i,l)}}function fv(t,i,a){var l=lr(t),d={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rh(t))Ph(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,I=p(M,a);if(d.hasEagerState=!0,d.eagerState=I,ei(I,M)){var H=i.interleaved;H===null?(d.next=d,Ec(i)):(d.next=H.next,H.next=d),i.interleaved=d;return}}catch{}finally{}a=ah(t,i,d,l),a!==null&&(d=xn(),si(a,t,l,d),Nh(a,i,l))}}function Rh(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function Ph(t,i){_a=Ao=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Nh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,kl(t,a)}}var Ro={readContext:jn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},hv={readContext:jn,useCallback:function(t,i){return gi().memoizedState=[t,i===void 0?null:i],t},useContext:jn,useEffect:yh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Co(4194308,4,Eh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Co(4194308,4,t,i)},useInsertionEffect:function(t,i){return Co(4,2,t,i)},useMemo:function(t,i){var a=gi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=gi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=dv.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=gi();return t={current:t},i.memoizedState=t},useState:_h,useDebugValue:Fc,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=_h(!1),i=t[0];return t=uv.bind(null,t[1]),gi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=zt,d=gi();if(Ot){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),tn===null)throw Error(n(349));(Nr&30)!==0||hh(l,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,yh(mh.bind(null,l,p,t),[t]),l.flags|=2048,Sa(9,ph.bind(null,l,p,a,i),void 0,null),a},useId:function(){var t=gi(),i=tn.identifierPrefix;if(Ot){var a=bi,l=Ci;a=(l&~(1<<32-lt(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=xa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=cv++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},pv={readContext:jn,useCallback:Th,useContext:jn,useEffect:Uc,useImperativeHandle:wh,useInsertionEffect:Sh,useLayoutEffect:Mh,useMemo:Ah,useReducer:Dc,useRef:xh,useState:function(){return Dc(ya)},useDebugValue:Fc,useDeferredValue:function(t){var i=Xn();return Ch(i,$t.memoizedState,t)},useTransition:function(){var t=Dc(ya)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:dh,useSyncExternalStore:fh,useId:bh,unstable_isNewReconciler:!1},mv={readContext:jn,useCallback:Th,useContext:jn,useEffect:Uc,useImperativeHandle:wh,useInsertionEffect:Sh,useLayoutEffect:Mh,useMemo:Ah,useReducer:Ic,useRef:xh,useState:function(){return Ic(ya)},useDebugValue:Fc,useDeferredValue:function(t){var i=Xn();return $t===null?i.memoizedState=t:Ch(i,$t.memoizedState,t)},useTransition:function(){var t=Ic(ya)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:dh,useSyncExternalStore:fh,useId:bh,unstable_isNewReconciler:!1};function ni(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Oc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:re({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Po={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=xn(),d=lr(t),p=Pi(l,d);p.payload=i,a!=null&&(p.callback=a),i=rr(t,p,d),i!==null&&(si(i,t,d,l),Mo(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=xn(),d=lr(t),p=Pi(l,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=rr(t,p,d),i!==null&&(si(i,t,d,l),Mo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=xn(),l=lr(t),d=Pi(a,l);d.tag=2,i!=null&&(d.callback=i),i=rr(t,d,l),i!==null&&(si(i,t,l,a),Mo(i,t,l))}};function Lh(t,i,a,l,d,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!oa(a,l)||!oa(d,p):!0}function Dh(t,i,a){var l=!1,d=tr,p=i.contextType;return typeof p=="object"&&p!==null?p=jn(p):(d=Tn(i)?Ar:un.current,l=i.contextTypes,p=(l=l!=null)?ls(t,d):tr),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Po,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function Ih(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Po.enqueueReplaceState(i,i.state,null)}function kc(t,i,a,l){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},wc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=jn(p):(p=Tn(i)?Ar:un.current,d.context=ls(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Oc(t,i,p,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Po.enqueueReplaceState(d,d.state,null),Eo(t,a,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,i){try{var a="",l=i;do a+=fe(l),l=l.return;while(l);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function zc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Bc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var gv=typeof WeakMap=="function"?WeakMap:Map;function Uh(t,i,a){a=Pi(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Oo||(Oo=!0,tu=l),Bc(t,i)},a}function Fh(t,i,a){a=Pi(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;a.payload=function(){return l(d)},a.callback=function(){Bc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Bc(t,i),typeof l!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function Oh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new gv;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(a)||(d.add(a),t=Pv.bind(null,t,i,a),i.then(t,t))}function kh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function zh(t,i,a,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Pi(-1,1),i.tag=2,rr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var vv=b.ReactCurrentOwner,An=!1;function _n(t,i,a,l){i.child=t===null?sh(i,null,a,l):fs(i,t.child,a,l)}function Bh(t,i,a,l,d){a=a.render;var p=i.ref;return ps(i,d),l=Nc(t,i,a,l,p,d),a=Lc(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ni(t,i,d)):(Ot&&a&&pc(i),i.flags|=1,_n(t,i,l,d),i.child)}function Hh(t,i,a,l,d){if(t===null){var p=a.type;return typeof p=="function"&&!lu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Vh(t,i,p,l,d)):(t=Go(a.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var M=p.memoizedProps;if(a=a.compare,a=a!==null?a:oa,a(M,l)&&t.ref===i.ref)return Ni(t,i,d)}return i.flags|=1,t=ur(p,l),t.ref=i.ref,t.return=i,i.child=t}function Vh(t,i,a,l,d){if(t!==null){var p=t.memoizedProps;if(oa(p,l)&&t.ref===i.ref)if(An=!1,i.pendingProps=l=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(An=!0);else return i.lanes=t.lanes,Ni(t,i,d)}return Hc(t,i,a,l,d)}function Gh(t,i,a){var l=i.pendingProps,d=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(_s,On),On|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(_s,On),On|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:a,Dt(_s,On),On|=l}else p!==null?(l=p.baseLanes|a,i.memoizedState=null):l=a,Dt(_s,On),On|=l;return _n(t,i,d,a),i.child}function Wh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Hc(t,i,a,l,d){var p=Tn(a)?Ar:un.current;return p=ls(i,p),ps(i,d),a=Nc(t,i,a,l,p,d),l=Lc(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ni(t,i,d)):(Ot&&l&&pc(i),i.flags|=1,_n(t,i,a,d),i.child)}function jh(t,i,a,l,d){if(Tn(a)){var p=!0;po(i)}else p=!1;if(ps(i,d),i.stateNode===null)Lo(t,i),Dh(i,a,l),kc(i,a,l,d),l=!0;else if(t===null){var M=i.stateNode,I=i.memoizedProps;M.props=I;var H=M.context,le=a.contextType;typeof le=="object"&&le!==null?le=jn(le):(le=Tn(a)?Ar:un.current,le=ls(i,le));var ye=a.getDerivedStateFromProps,Se=typeof ye=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==l||H!==le)&&Ih(i,M,l,le),ir=!1;var _e=i.memoizedState;M.state=_e,Eo(i,l,M,d),H=i.memoizedState,I!==l||_e!==H||wn.current||ir?(typeof ye=="function"&&(Oc(i,a,ye,l),H=i.memoizedState),(I=ir||Lh(i,a,I,l,_e,H,le))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),M.props=l,M.state=H,M.context=le,l=I):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,oh(t,i),I=i.memoizedProps,le=i.type===i.elementType?I:ni(i.type,I),M.props=le,Se=i.pendingProps,_e=M.context,H=a.contextType,typeof H=="object"&&H!==null?H=jn(H):(H=Tn(a)?Ar:un.current,H=ls(i,H));var De=a.getDerivedStateFromProps;(ye=typeof De=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==Se||_e!==H)&&Ih(i,M,l,H),ir=!1,_e=i.memoizedState,M.state=_e,Eo(i,l,M,d);var ze=i.memoizedState;I!==Se||_e!==ze||wn.current||ir?(typeof De=="function"&&(Oc(i,a,De,l),ze=i.memoizedState),(le=ir||Lh(i,a,le,l,_e,ze,H)||!1)?(ye||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,H),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,H)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=H,l=le):(typeof M.componentDidUpdate!="function"||I===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),l=!1)}return Vc(t,i,a,l,p,d)}function Vc(t,i,a,l,d,p){Wh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return d&&Kf(i,a,!1),Ni(t,i,p);l=i.stateNode,vv.current=i;var I=M&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=fs(i,t.child,null,p),i.child=fs(i,null,I,p)):_n(t,i,I,p),i.memoizedState=l.state,d&&Kf(i,a,!0),i.child}function Xh(t){var i=t.stateNode;i.pendingContext?Yf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Yf(t,i.context,!1),Tc(t,i.containerInfo)}function qh(t,i,a,l,d){return ds(),_c(d),i.flags|=256,_n(t,i,a,l),i.child}var Gc={dehydrated:null,treeContext:null,retryLane:0};function Wc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yh(t,i,a){var l=i.pendingProps,d=kt.current,p=!1,M=(i.flags&128)!==0,I;if((I=M)||(I=t!==null&&t.memoizedState===null?!1:(d&2)!==0),I?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Dt(kt,d&1),t===null)return vc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=i.mode,p=i.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Wo(M,l,0,null),t=Fr(t,l,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Wc(a),i.memoizedState=Gc,t):jc(i,M));if(d=t.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return _v(t,i,M,l,I,d,a);if(p){p=l.fallback,M=i.mode,d=t.child,I=d.sibling;var H={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=H,i.deletions=null):(l=ur(d,H),l.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=ur(I,p):(p=Fr(p,M,a,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,M=t.child.memoizedState,M=M===null?Wc(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~a,i.memoizedState=Gc,l}return p=t.child,t=p.sibling,l=ur(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function jc(t,i){return i=Wo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function No(t,i,a,l){return l!==null&&_c(l),fs(i,t.child,null,a),t=jc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function _v(t,i,a,l,d,p,M){if(a)return i.flags&256?(i.flags&=-257,l=zc(Error(n(422))),No(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,d=i.mode,l=Wo({mode:"visible",children:l.children},d,0,null),p=Fr(p,d,M,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&fs(i,t.child,null,M),i.child.memoizedState=Wc(M),i.memoizedState=Gc,p);if((i.mode&1)===0)return No(t,i,M,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var I=l.dgst;return l=I,p=Error(n(419)),l=zc(p,l,void 0),No(t,i,M,l)}if(I=(M&t.childLanes)!==0,An||I){if(l=tn,l!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|M))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ri(t,d),si(l,t,d,-1))}return ou(),l=zc(Error(n(421))),No(t,i,M,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Nv.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,Fn=Ji(d.nextSibling),Un=i,Ot=!0,ti=null,t!==null&&(Gn[Wn++]=Ci,Gn[Wn++]=bi,Gn[Wn++]=Cr,Ci=t.id,bi=t.overflow,Cr=i),i=jc(i,l.children),i.flags|=4096,i)}function $h(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Mc(t.return,i,a)}function Xc(t,i,a,l,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=d)}function Kh(t,i,a){var l=i.pendingProps,d=l.revealOrder,p=l.tail;if(_n(t,i,l.children,a),l=kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$h(t,a,i);else if(t.tag===19)$h(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(kt,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&wo(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Xc(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&wo(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}Xc(i,!0,a,null,p);break;case"together":Xc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Lo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ni(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=ur(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=ur(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function xv(t,i,a){switch(i.tag){case 3:Xh(i),ds();break;case 5:uh(i);break;case 1:Tn(i.type)&&po(i);break;case 4:Tc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;Dt(yo,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(kt,kt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Yh(t,i,a):(Dt(kt,kt.current&1),t=Ni(t,i,a),t!==null?t.sibling:null);Dt(kt,kt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Kh(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Dt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,Gh(t,i,a)}return Ni(t,i,a)}var Zh,qc,Qh,Jh;Zh=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},qc=function(){},Qh=function(t,i,a,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,Pr(mi.current);var p=null;switch(a){case"input":d=$(t,d),l=$(t,l),p=[];break;case"select":d=re({},d,{value:void 0}),l=re({},l,{value:void 0}),p=[];break;case"textarea":d=C(t,d),l=C(t,l),p=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=uo)}ht(a,l);var M;a=null;for(le in d)if(!l.hasOwnProperty(le)&&d.hasOwnProperty(le)&&d[le]!=null)if(le==="style"){var I=d[le];for(M in I)I.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(o.hasOwnProperty(le)?p||(p=[]):(p=p||[]).push(le,null));for(le in l){var H=l[le];if(I=d!=null?d[le]:void 0,l.hasOwnProperty(le)&&H!==I&&(H!=null||I!=null))if(le==="style")if(I){for(M in I)!I.hasOwnProperty(M)||H&&H.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in H)H.hasOwnProperty(M)&&I[M]!==H[M]&&(a||(a={}),a[M]=H[M])}else a||(p||(p=[]),p.push(le,a)),a=H;else le==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(p=p||[]).push(le,H)):le==="children"?typeof H!="string"&&typeof H!="number"||(p=p||[]).push(le,""+H):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(o.hasOwnProperty(le)?(H!=null&&le==="onScroll"&&Ut("scroll",t),p||I===H||(p=[])):(p=p||[]).push(le,H))}a&&(p=p||[]).push("style",a);var le=p;(i.updateQueue=le)&&(i.flags|=4)}},Jh=function(t,i,a,l){a!==l&&(i.flags|=4)};function Ma(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function fn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function yv(t,i,a){var l=i.pendingProps;switch(mc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return Tn(i.type)&&ho(),fn(i),null;case 3:return l=i.stateNode,ms(),Ft(wn),Ft(un),bc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(_o(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ti!==null&&(ru(ti),ti=null))),qc(t,i),fn(i),null;case 5:Ac(i);var d=Pr(va.current);if(a=i.type,t!==null&&i.stateNode!=null)Qh(t,i,a,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return fn(i),null}if(t=Pr(mi.current),_o(i)){l=i.stateNode,a=i.type;var p=i.memoizedProps;switch(l[pi]=i,l[fa]=p,t=(i.mode&1)!==0,a){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(d=0;d<ca.length;d++)Ut(ca[d],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":Jt(l,p),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Ut("invalid",l);break;case"textarea":ae(l,p),Ut("invalid",l)}ht(a,p),d=null;for(var M in p)if(p.hasOwnProperty(M)){var I=p[M];M==="children"?typeof I=="string"?l.textContent!==I&&(p.suppressHydrationWarning!==!0&&co(l.textContent,I,t),d=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&co(l.textContent,I,t),d=["children",""+I]):o.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&Ut("scroll",l)}switch(a){case"input":wt(l),Ve(l,p,!0);break;case"textarea":wt(l),xe(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=uo)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(a,{is:l.is}):(t=M.createElement(a),a==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,a),t[pi]=i,t[fa]=l,Zh(t,i,!1,!1),i.stateNode=t;e:{switch(M=at(a,l),a){case"dialog":Ut("cancel",t),Ut("close",t),d=l;break;case"iframe":case"object":case"embed":Ut("load",t),d=l;break;case"video":case"audio":for(d=0;d<ca.length;d++)Ut(ca[d],t);d=l;break;case"source":Ut("error",t),d=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),d=l;break;case"details":Ut("toggle",t),d=l;break;case"input":Jt(t,l),d=$(t,l),Ut("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=re({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":ae(t,l),d=C(t,l),Ut("invalid",t);break;default:d=l}ht(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var H=I[p];p==="style"?nt(t,H):p==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ue(t,H)):p==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&dt(t,H):typeof H=="number"&&dt(t,""+H):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?H!=null&&p==="onScroll"&&Ut("scroll",t):H!=null&&L(t,p,H,M))}switch(a){case"input":wt(t),Ve(t,l,!1);break;case"textarea":wt(t),xe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ce(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?D(t,!!l.multiple,p,!1):l.defaultValue!=null&&D(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=uo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(t&&i.stateNode!=null)Jh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Pr(va.current),Pr(mi.current),_o(i)){if(l=i.stateNode,a=i.memoizedProps,l[pi]=i,(p=l.nodeValue!==a)&&(t=Un,t!==null))switch(t.tag){case 3:co(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&co(l.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[pi]=i,i.stateNode=l}return fn(i),null;case 13:if(Ft(kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)nh(),ds(),i.flags|=98560,p=!1;else if(p=_o(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[pi]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),p=!1}else ti!==null&&(ru(ti),ti=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(kt.current&1)!==0?Kt===0&&(Kt=3):ou())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return ms(),qc(t,i),t===null&&ua(i.stateNode.containerInfo),fn(i),null;case 10:return Sc(i.type._context),fn(i),null;case 17:return Tn(i.type)&&ho(),fn(i),null;case 19:if(Ft(kt),p=i.memoizedState,p===null)return fn(i),null;if(l=(i.flags&128)!==0,M=p.rendering,M===null)if(l)Ma(p,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=wo(t),M!==null){for(i.flags|=128,Ma(p,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)p=a,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Dt(kt,kt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Ee()>xs&&(i.flags|=128,l=!0,Ma(p,!1),i.lanes=4194304)}else{if(!l)if(t=wo(M),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ma(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Ot)return fn(i),null}else 2*Ee()-p.renderingStartTime>xs&&a!==1073741824&&(i.flags|=128,l=!0,Ma(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(a=p.last,a!==null?a.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ee(),i.sibling=null,a=kt.current,Dt(kt,l?a&1|2:a&1),i):(fn(i),null);case 22:case 23:return au(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(On&1073741824)!==0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Sv(t,i){switch(mc(i),i.tag){case 1:return Tn(i.type)&&ho(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ms(),Ft(wn),Ft(un),bc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Ac(i),null;case 13:if(Ft(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ds()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ft(kt),null;case 4:return ms(),null;case 10:return Sc(i.type._context),null;case 22:case 23:return au(),null;case 24:return null;default:return null}}var Do=!1,hn=!1,Mv=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function vs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Ht(t,i,l)}else a.current=null}function Yc(t,i,a){try{a()}catch(l){Ht(t,i,l)}}var ep=!1;function Ev(t,i){if(ac=Qa,t=Lf(),Ql(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var M=0,I=-1,H=-1,le=0,ye=0,Se=t,_e=null;t:for(;;){for(var De;Se!==a||d!==0&&Se.nodeType!==3||(I=M+d),Se!==p||l!==0&&Se.nodeType!==3||(H=M+l),Se.nodeType===3&&(M+=Se.nodeValue.length),(De=Se.firstChild)!==null;)_e=Se,Se=De;for(;;){if(Se===t)break t;if(_e===a&&++le===d&&(I=M),_e===p&&++ye===l&&(H=M),(De=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=De}a=I===-1||H===-1?null:{start:I,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(oc={focusedElem:t,selectionRange:a},Qa=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var We=ze.memoizedProps,Gt=ze.memoizedState,ee=i.stateNode,G=ee.getSnapshotBeforeUpdate(i.elementType===i.type?We:ni(i.type,We),Gt);ee.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var se=i.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){Ht(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return ze=ep,ep=!1,ze}function Ea(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&Yc(i,a,p)}d=d.next}while(d!==l)}}function Io(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function $c(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function tp(t){var i=t.alternate;i!==null&&(t.alternate=null,tp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[pi],delete i[fa],delete i[dc],delete i[sv],delete i[av])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function np(t){return t.tag===5||t.tag===3||t.tag===4}function ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||np(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=uo));else if(l!==4&&(t=t.child,t!==null))for(Kc(t,i,a),t=t.sibling;t!==null;)Kc(t,i,a),t=t.sibling}function Zc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Zc(t,i,a),t=t.sibling;t!==null;)Zc(t,i,a),t=t.sibling}var sn=null,ii=!1;function sr(t,i,a){for(a=a.child;a!==null;)rp(t,i,a),a=a.sibling}function rp(t,i,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 5:hn||vs(a,i);case 6:var l=sn,d=ii;sn=null,sr(t,i,a),sn=l,ii=d,sn!==null&&(ii?(t=sn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):sn.removeChild(a.stateNode));break;case 18:sn!==null&&(ii?(t=sn,a=a.stateNode,t.nodeType===8?uc(t.parentNode,a):t.nodeType===1&&uc(t,a),ta(t)):uc(sn,a.stateNode));break;case 4:l=sn,d=ii,sn=a.stateNode.containerInfo,ii=!0,sr(t,i,a),sn=l,ii=d;break;case 0:case 11:case 14:case 15:if(!hn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var p=d,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&Yc(a,i,M),d=d.next}while(d!==l)}sr(t,i,a);break;case 1:if(!hn&&(vs(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(I){Ht(a,i,I)}sr(t,i,a);break;case 21:sr(t,i,a);break;case 22:a.mode&1?(hn=(l=hn)||a.memoizedState!==null,sr(t,i,a),hn=l):sr(t,i,a);break;default:sr(t,i,a)}}function sp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Mv),i.forEach(function(l){var d=Lv.bind(null,t,l);a.has(l)||(a.add(l),l.then(d,d))})}}function ri(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var d=a[l];try{var p=t,M=i,I=M;e:for(;I!==null;){switch(I.tag){case 5:sn=I.stateNode,ii=!1;break e;case 3:sn=I.stateNode.containerInfo,ii=!0;break e;case 4:sn=I.stateNode.containerInfo,ii=!0;break e}I=I.return}if(sn===null)throw Error(n(160));rp(p,M,d),sn=null,ii=!1;var H=d.alternate;H!==null&&(H.return=null),d.return=null}catch(le){Ht(d,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ap(i,t),i=i.sibling}function ap(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(i,t),vi(t),l&4){try{Ea(3,t,t.return),Io(3,t)}catch(We){Ht(t,t.return,We)}try{Ea(5,t,t.return)}catch(We){Ht(t,t.return,We)}}break;case 1:ri(i,t),vi(t),l&512&&a!==null&&vs(a,a.return);break;case 5:if(ri(i,t),vi(t),l&512&&a!==null&&vs(a,a.return),t.flags&32){var d=t.stateNode;try{dt(d,"")}catch(We){Ht(t,t.return,We)}}if(l&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,M=a!==null?a.memoizedProps:p,I=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Be(d,p),at(I,M);var le=at(I,p);for(M=0;M<H.length;M+=2){var ye=H[M],Se=H[M+1];ye==="style"?nt(d,Se):ye==="dangerouslySetInnerHTML"?Ue(d,Se):ye==="children"?dt(d,Se):L(d,ye,Se,le)}switch(I){case"input":He(d,p);break;case"textarea":me(d,p);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var De=p.value;De!=null?D(d,!!p.multiple,De,!1):_e!==!!p.multiple&&(p.defaultValue!=null?D(d,!!p.multiple,p.defaultValue,!0):D(d,!!p.multiple,p.multiple?[]:"",!1))}d[fa]=p}catch(We){Ht(t,t.return,We)}}break;case 6:if(ri(i,t),vi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(We){Ht(t,t.return,We)}}break;case 3:if(ri(i,t),vi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ta(i.containerInfo)}catch(We){Ht(t,t.return,We)}break;case 4:ri(i,t),vi(t);break;case 13:ri(i,t),vi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(eu=Ee())),l&4&&sp(t);break;case 22:if(ye=a!==null&&a.memoizedState!==null,t.mode&1?(hn=(le=hn)||ye,ri(i,t),hn=le):ri(i,t),vi(t),l&8192){if(le=t.memoizedState!==null,(t.stateNode.isHidden=le)&&!ye&&(t.mode&1)!==0)for(Fe=t,ye=t.child;ye!==null;){for(Se=Fe=ye;Fe!==null;){switch(_e=Fe,De=_e.child,_e.tag){case 0:case 11:case 14:case 15:Ea(4,_e,_e.return);break;case 1:vs(_e,_e.return);var ze=_e.stateNode;if(typeof ze.componentWillUnmount=="function"){l=_e,a=_e.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(We){Ht(l,a,We)}}break;case 5:vs(_e,_e.return);break;case 22:if(_e.memoizedState!==null){cp(Se);continue}}De!==null?(De.return=_e,Fe=De):cp(Se)}ye=ye.sibling}e:for(ye=null,Se=t;;){if(Se.tag===5){if(ye===null){ye=Se;try{d=Se.stateNode,le?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=Se.stateNode,H=Se.memoizedProps.style,M=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=tt("display",M))}catch(We){Ht(t,t.return,We)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=le?"":Se.memoizedProps}catch(We){Ht(t,t.return,We)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ri(i,t),vi(t),l&4&&sp(t);break;case 21:break;default:ri(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(np(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(dt(d,""),l.flags&=-33);var p=ip(t);Zc(t,p,d);break;case 3:case 4:var M=l.stateNode.containerInfo,I=ip(t);Kc(t,I,M);break;default:throw Error(n(161))}}catch(H){Ht(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function wv(t,i,a){Fe=t,op(t)}function op(t,i,a){for(var l=(t.mode&1)!==0;Fe!==null;){var d=Fe,p=d.child;if(d.tag===22&&l){var M=d.memoizedState!==null||Do;if(!M){var I=d.alternate,H=I!==null&&I.memoizedState!==null||hn;I=Do;var le=hn;if(Do=M,(hn=H)&&!le)for(Fe=d;Fe!==null;)M=Fe,H=M.child,M.tag===22&&M.memoizedState!==null?up(d):H!==null?(H.return=M,Fe=H):up(d);for(;p!==null;)Fe=p,op(p),p=p.sibling;Fe=d,Do=I,hn=le}lp(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Fe=p):lp(t)}}function lp(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||Io(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(a===null)l.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ni(i.type,a.memoizedProps);l.componentDidUpdate(d,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&ch(i,p,l);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}ch(i,M,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var ye=le.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&ta(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&$c(i)}catch(_e){Ht(i,i.return,_e)}}if(i===t){Fe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function cp(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function up(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Io(4,i)}catch(H){Ht(i,a,H)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(H){Ht(i,d,H)}}var p=i.return;try{$c(i)}catch(H){Ht(i,p,H)}break;case 5:var M=i.return;try{$c(i)}catch(H){Ht(i,M,H)}}}catch(H){Ht(i,i.return,H)}if(i===t){Fe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Fe=I;break}Fe=i.return}}var Tv=Math.ceil,Uo=b.ReactCurrentDispatcher,Qc=b.ReactCurrentOwner,qn=b.ReactCurrentBatchConfig,yt=0,tn=null,Wt=null,an=0,On=0,_s=er(0),Kt=0,wa=null,Lr=0,Fo=0,Jc=0,Ta=null,Cn=null,eu=0,xs=1/0,Li=null,Oo=!1,tu=null,ar=null,ko=!1,or=null,zo=0,Aa=0,nu=null,Bo=-1,Ho=0;function xn(){return(yt&6)!==0?Ee():Bo!==-1?Bo:Bo=Ee()}function lr(t){return(t.mode&1)===0?1:(yt&2)!==0&&an!==0?an&-an:lv.transition!==null?(Ho===0&&(Ho=vn()),Ho):(t=Rt,t!==0||(t=window.event,t=t===void 0?16:ff(t.type)),t)}function si(t,i,a,l){if(50<Aa)throw Aa=0,nu=null,Error(n(185));En(t,a,l),((yt&2)===0||t!==tn)&&(t===tn&&((yt&2)===0&&(Fo|=a),Kt===4&&cr(t,an)),bn(t,l),a===1&&yt===0&&(i.mode&1)===0&&(xs=Ee()+500,mo&&nr()))}function bn(t,i){var a=t.callbackNode;Hn(t,i);var l=hi(t,t===tn?an:0);if(l===0)a!==null&&ue(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&ue(a),i===1)t.tag===0?ov(fp.bind(null,t)):Zf(fp.bind(null,t)),iv(function(){(yt&6)===0&&nr()}),a=null;else{switch(rf(l)){case 1:a=Ge;break;case 4:a=it;break;case 16:a=st;break;case 536870912:a=gt;break;default:a=st}a=yp(a,dp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function dp(t,i){if(Bo=-1,Ho=0,(yt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(ys()&&t.callbackNode!==a)return null;var l=hi(t,t===tn?an:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Vo(t,l);else{i=l;var d=yt;yt|=2;var p=pp();(tn!==t||an!==i)&&(Li=null,xs=Ee()+500,Ir(t,i));do try{bv();break}catch(I){hp(t,I)}while(!0);yc(),Uo.current=p,yt=d,Wt!==null?i=0:(tn=null,an=0,i=Kt)}if(i!==0){if(i===2&&(d=wi(t),d!==0&&(l=d,i=iu(t,d))),i===1)throw a=wa,Ir(t,0),cr(t,l),bn(t,Ee()),a;if(i===6)cr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!Av(d)&&(i=Vo(t,l),i===2&&(p=wi(t),p!==0&&(l=p,i=iu(t,p))),i===1))throw a=wa,Ir(t,0),cr(t,l),bn(t,Ee()),a;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,Cn,Li);break;case 3:if(cr(t,l),(l&130023424)===l&&(i=eu+500-Ee(),10<i)){if(hi(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){xn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=cc(Ur.bind(null,t,Cn,Li),i);break}Ur(t,Cn,Li);break;case 4:if(cr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var M=31-lt(l);p=1<<M,M=i[M],M>d&&(d=M),l&=~p}if(l=d,l=Ee()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Tv(l/1960))-l,10<l){t.timeoutHandle=cc(Ur.bind(null,t,Cn,Li),l);break}Ur(t,Cn,Li);break;case 5:Ur(t,Cn,Li);break;default:throw Error(n(329))}}}return bn(t,Ee()),t.callbackNode===a?dp.bind(null,t):null}function iu(t,i){var a=Ta;return t.current.memoizedState.isDehydrated&&(Ir(t,i).flags|=256),t=Vo(t,i),t!==2&&(i=Cn,Cn=a,i!==null&&ru(i)),t}function ru(t){Cn===null?Cn=t:Cn.push.apply(Cn,t)}function Av(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var d=a[l],p=d.getSnapshot;d=d.value;try{if(!ei(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i){for(i&=~Jc,i&=~Fo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-lt(i),l=1<<a;t[a]=-1,i&=~l}}function fp(t){if((yt&6)!==0)throw Error(n(327));ys();var i=hi(t,0);if((i&1)===0)return bn(t,Ee()),null;var a=Vo(t,i);if(t.tag!==0&&a===2){var l=wi(t);l!==0&&(i=l,a=iu(t,l))}if(a===1)throw a=wa,Ir(t,0),cr(t,i),bn(t,Ee()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,Cn,Li),bn(t,Ee()),null}function su(t,i){var a=yt;yt|=1;try{return t(i)}finally{yt=a,yt===0&&(xs=Ee()+500,mo&&nr())}}function Dr(t){or!==null&&or.tag===0&&(yt&6)===0&&ys();var i=yt;yt|=1;var a=qn.transition,l=Rt;try{if(qn.transition=null,Rt=1,t)return t()}finally{Rt=l,qn.transition=a,yt=i,(yt&6)===0&&nr()}}function au(){On=_s.current,Ft(_s)}function Ir(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,nv(a)),Wt!==null)for(a=Wt.return;a!==null;){var l=a;switch(mc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ho();break;case 3:ms(),Ft(wn),Ft(un),bc();break;case 5:Ac(l);break;case 4:ms();break;case 13:Ft(kt);break;case 19:Ft(kt);break;case 10:Sc(l.type._context);break;case 22:case 23:au()}a=a.return}if(tn=t,Wt=t=ur(t.current,null),an=On=i,Kt=0,wa=null,Jc=Fo=Lr=0,Cn=Ta=null,Rr!==null){for(i=0;i<Rr.length;i++)if(a=Rr[i],l=a.interleaved,l!==null){a.interleaved=null;var d=l.next,p=a.pending;if(p!==null){var M=p.next;p.next=d,l.next=M}a.pending=l}Rr=null}return t}function hp(t,i){do{var a=Wt;try{if(yc(),To.current=Ro,Ao){for(var l=zt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}Ao=!1}if(Nr=0,en=$t=zt=null,_a=!1,xa=0,Qc.current=null,a===null||a.return===null){Kt=1,wa=i,Wt=null;break}e:{var p=t,M=a.return,I=a,H=i;if(i=an,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var le=H,ye=I,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var De=kh(M);if(De!==null){De.flags&=-257,zh(De,M,I,p,i),De.mode&1&&Oh(p,le,i),i=De,H=le;var ze=i.updateQueue;if(ze===null){var We=new Set;We.add(H),i.updateQueue=We}else ze.add(H);break e}else{if((i&1)===0){Oh(p,le,i),ou();break e}H=Error(n(426))}}else if(Ot&&I.mode&1){var Gt=kh(M);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),zh(Gt,M,I,p,i),_c(gs(H,I));break e}}p=H=gs(H,I),Kt!==4&&(Kt=2),Ta===null?Ta=[p]:Ta.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var ee=Uh(p,H,i);lh(p,ee);break e;case 1:I=H;var G=p.type,se=p.stateNode;if((p.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(ar===null||!ar.has(se)))){p.flags|=65536,i&=-i,p.lanes|=i;var we=Fh(p,I,i);lh(p,we);break e}}p=p.return}while(p!==null)}gp(a)}catch($e){i=$e,Wt===a&&a!==null&&(Wt=a=a.return);continue}break}while(!0)}function pp(){var t=Uo.current;return Uo.current=Ro,t===null?Ro:t}function ou(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),tn===null||(Lr&268435455)===0&&(Fo&268435455)===0||cr(tn,an)}function Vo(t,i){var a=yt;yt|=2;var l=pp();(tn!==t||an!==i)&&(Li=null,Ir(t,i));do try{Cv();break}catch(d){hp(t,d)}while(!0);if(yc(),yt=a,Uo.current=l,Wt!==null)throw Error(n(261));return tn=null,an=0,Kt}function Cv(){for(;Wt!==null;)mp(Wt)}function bv(){for(;Wt!==null&&!K();)mp(Wt)}function mp(t){var i=xp(t.alternate,t,On);t.memoizedProps=t.pendingProps,i===null?gp(t):Wt=i,Qc.current=null}function gp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=yv(a,i,On),a!==null){Wt=a;return}}else{if(a=Sv(a,i),a!==null){a.flags&=32767,Wt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Ur(t,i,a){var l=Rt,d=qn.transition;try{qn.transition=null,Rt=1,Rv(t,i,a,l)}finally{qn.transition=d,Rt=l}return null}function Rv(t,i,a,l){do ys();while(or!==null);if((yt&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if($a(t,p),t===tn&&(Wt=tn=null,an=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ko||(ko=!0,yp(st,function(){return ys(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=qn.transition,qn.transition=null;var M=Rt;Rt=1;var I=yt;yt|=4,Qc.current=null,Ev(t,a),ap(a,t),$g(oc),Qa=!!ac,oc=ac=null,t.current=a,wv(a),Ae(),yt=I,Rt=M,qn.transition=p}else t.current=a;if(ko&&(ko=!1,or=t,zo=d),p=t.pendingLanes,p===0&&(ar=null),ln(a.stateNode),bn(t,Ee()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],l(d.value,{componentStack:d.stack,digest:d.digest});if(Oo)throw Oo=!1,t=tu,tu=null,t;return(zo&1)!==0&&t.tag!==0&&ys(),p=t.pendingLanes,(p&1)!==0?t===nu?Aa++:(Aa=0,nu=t):Aa=0,nr(),null}function ys(){if(or!==null){var t=rf(zo),i=qn.transition,a=Rt;try{if(qn.transition=null,Rt=16>t?16:t,or===null)var l=!1;else{if(t=or,or=null,zo=0,(yt&6)!==0)throw Error(n(331));var d=yt;for(yt|=4,Fe=t.current;Fe!==null;){var p=Fe,M=p.child;if((Fe.flags&16)!==0){var I=p.deletions;if(I!==null){for(var H=0;H<I.length;H++){var le=I[H];for(Fe=le;Fe!==null;){var ye=Fe;switch(ye.tag){case 0:case 11:case 15:Ea(8,ye,p)}var Se=ye.child;if(Se!==null)Se.return=ye,Fe=Se;else for(;Fe!==null;){ye=Fe;var _e=ye.sibling,De=ye.return;if(tp(ye),ye===le){Fe=null;break}if(_e!==null){_e.return=De,Fe=_e;break}Fe=De}}}var ze=p.alternate;if(ze!==null){var We=ze.child;if(We!==null){ze.child=null;do{var Gt=We.sibling;We.sibling=null,We=Gt}while(We!==null)}}Fe=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Fe=M;else e:for(;Fe!==null;){if(p=Fe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ea(9,p,p.return)}var ee=p.sibling;if(ee!==null){ee.return=p.return,Fe=ee;break e}Fe=p.return}}var G=t.current;for(Fe=G;Fe!==null;){M=Fe;var se=M.child;if((M.subtreeFlags&2064)!==0&&se!==null)se.return=M,Fe=se;else e:for(M=G;Fe!==null;){if(I=Fe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Io(9,I)}}catch($e){Ht(I,I.return,$e)}if(I===M){Fe=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,Fe=we;break e}Fe=I.return}}if(yt=d,nr(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Tt,t)}catch{}l=!0}return l}finally{Rt=a,qn.transition=i}}return!1}function vp(t,i,a){i=gs(a,i),i=Uh(t,i,1),t=rr(t,i,1),i=xn(),t!==null&&(En(t,1,i),bn(t,i))}function Ht(t,i,a){if(t.tag===3)vp(t,t,a);else for(;i!==null;){if(i.tag===3){vp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){t=gs(a,t),t=Fh(i,t,1),i=rr(i,t,1),t=xn(),i!==null&&(En(i,1,t),bn(i,t));break}}i=i.return}}function Pv(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=xn(),t.pingedLanes|=t.suspendedLanes&a,tn===t&&(an&a)===a&&(Kt===4||Kt===3&&(an&130023424)===an&&500>Ee()-eu?Ir(t,0):Jc|=a),bn(t,i)}function _p(t,i){i===0&&((t.mode&1)===0?i=1:(i=Jn,Jn<<=1,(Jn&130023424)===0&&(Jn=4194304)));var a=xn();t=Ri(t,i),t!==null&&(En(t,i,a),bn(t,a))}function Nv(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),_p(t,a)}function Lv(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),_p(t,a)}var xp;xp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||wn.current)An=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return An=!1,xv(t,i,a);An=(t.flags&131072)!==0}else An=!1,Ot&&(i.flags&1048576)!==0&&Qf(i,vo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Lo(t,i),t=i.pendingProps;var d=ls(i,un.current);ps(i,a),d=Nc(null,i,l,t,d,a);var p=Lc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Tn(l)?(p=!0,po(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,wc(i),d.updater=Po,i.stateNode=d,d._reactInternals=i,kc(i,l,t,a),i=Vc(null,i,l,!0,p,a)):(i.tag=0,Ot&&p&&pc(i),_n(null,i,d,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Lo(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=Iv(l),t=ni(l,t),d){case 0:i=Hc(null,i,l,t,a);break e;case 1:i=jh(null,i,l,t,a);break e;case 11:i=Bh(null,i,l,t,a);break e;case 14:i=Hh(null,i,l,ni(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ni(l,d),Hc(t,i,l,d,a);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ni(l,d),jh(t,i,l,d,a);case 3:e:{if(Xh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,d=p.element,oh(t,i),Eo(i,l,null,a);var M=i.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=gs(Error(n(423)),i),i=qh(t,i,l,a,d);break e}else if(l!==d){d=gs(Error(n(424)),i),i=qh(t,i,l,a,d);break e}else for(Fn=Ji(i.stateNode.containerInfo.firstChild),Un=i,Ot=!0,ti=null,a=sh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ds(),l===d){i=Ni(t,i,a);break e}_n(t,i,l,a)}i=i.child}return i;case 5:return uh(i),t===null&&vc(i),l=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,M=d.children,lc(l,d)?M=null:p!==null&&lc(l,p)&&(i.flags|=32),Wh(t,i),_n(t,i,M,a),i.child;case 6:return t===null&&vc(i),null;case 13:return Yh(t,i,a);case 4:return Tc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=fs(i,null,l,a):_n(t,i,l,a),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ni(l,d),Bh(t,i,l,d,a);case 7:return _n(t,i,i.pendingProps,a),i.child;case 8:return _n(t,i,i.pendingProps.children,a),i.child;case 12:return _n(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,p=i.memoizedProps,M=d.value,Dt(yo,l._currentValue),l._currentValue=M,p!==null)if(ei(p.value,M)){if(p.children===d.children&&!wn.current){i=Ni(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){M=p.child;for(var H=I.firstContext;H!==null;){if(H.context===l){if(p.tag===1){H=Pi(-1,a&-a),H.tag=2;var le=p.updateQueue;if(le!==null){le=le.shared;var ye=le.pending;ye===null?H.next=H:(H.next=ye.next,ye.next=H),le.pending=H}}p.lanes|=a,H=p.alternate,H!==null&&(H.lanes|=a),Mc(p.return,a,i),I.lanes|=a;break}H=H.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=a,I=M.alternate,I!==null&&(I.lanes|=a),Mc(M,a,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}_n(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,ps(i,a),d=jn(d),l=l(d),i.flags|=1,_n(t,i,l,a),i.child;case 14:return l=i.type,d=ni(l,i.pendingProps),d=ni(l.type,d),Hh(t,i,l,d,a);case 15:return Vh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ni(l,d),Lo(t,i),i.tag=1,Tn(l)?(t=!0,po(i)):t=!1,ps(i,a),Dh(i,l,d),kc(i,l,d,a),Vc(null,i,l,!0,t,a);case 19:return Kh(t,i,a);case 22:return Gh(t,i,a)}throw Error(n(156,i.tag))};function yp(t,i){return ce(t,i)}function Dv(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,a,l){return new Dv(t,i,a,l)}function lu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Iv(t){if(typeof t=="function")return lu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===j)return 11;if(t===ne)return 14}return 2}function ur(t,i){var a=t.alternate;return a===null?(a=Yn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Go(t,i,a,l,d,p){var M=2;if(l=t,typeof t=="function")lu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case U:return Fr(a.children,d,p,i);case z:M=8,d|=8;break;case P:return t=Yn(12,a,i,d|2),t.elementType=P,t.lanes=p,t;case X:return t=Yn(13,a,i,d),t.elementType=X,t.lanes=p,t;case Z:return t=Yn(19,a,i,d),t.elementType=Z,t.lanes=p,t;case Q:return Wo(a,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:M=10;break e;case B:M=9;break e;case j:M=11;break e;case ne:M=14;break e;case V:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(M,a,i,d),i.elementType=t,i.type=l,i.lanes=p,i}function Fr(t,i,a,l){return t=Yn(7,t,l,i),t.lanes=a,t}function Wo(t,i,a,l){return t=Yn(22,t,l,i),t.elementType=Q,t.lanes=a,t.stateNode={isHidden:!1},t}function cu(t,i,a){return t=Yn(6,t,null,i),t.lanes=a,t}function uu(t,i,a){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Uv(t,i,a,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vn(0),this.expirationTimes=Vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function du(t,i,a,l,d,p,M,I,H){return t=new Uv(t,i,a,I,H),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Yn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},wc(p),t}function Fv(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Sp(t){if(!t)return tr;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Tn(a))return $f(t,a,i)}return i}function Mp(t,i,a,l,d,p,M,I,H){return t=du(a,l,!0,t,d,p,M,I,H),t.context=Sp(null),a=t.current,l=xn(),d=lr(a),p=Pi(l,d),p.callback=i??null,rr(a,p,d),t.current.lanes=d,En(t,d,l),bn(t,l),t}function jo(t,i,a,l){var d=i.current,p=xn(),M=lr(d);return a=Sp(a),i.context===null?i.context=a:i.pendingContext=a,i=Pi(p,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=rr(d,i,M),t!==null&&(si(t,d,M,p),Mo(t,d,M)),M}function Xo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ep(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function fu(t,i){Ep(t,i),(t=t.alternate)&&Ep(t,i)}function Ov(){return null}var wp=typeof reportError=="function"?reportError:function(t){console.error(t)};function hu(t){this._internalRoot=t}qo.prototype.render=hu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));jo(t,i,null,null)},qo.prototype.unmount=hu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){jo(null,t,null,null)}),i[Ti]=null}};function qo(t){this._internalRoot=t}qo.prototype.unstable_scheduleHydration=function(t){if(t){var i=of();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Ki.length&&i!==0&&i<Ki[a].priority;a++);Ki.splice(a,0,t),a===0&&uf(t)}};function pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function kv(t,i,a,l,d){if(d){if(typeof l=="function"){var p=l;l=function(){var le=Xo(M);p.call(le)}}var M=Mp(i,l,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=M,t[Ti]=M.current,ua(t.nodeType===8?t.parentNode:t),Dr(),M}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var I=l;l=function(){var le=Xo(H);I.call(le)}}var H=du(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=H,t[Ti]=H.current,ua(t.nodeType===8?t.parentNode:t),Dr(function(){jo(i,H,a,l)}),H}function $o(t,i,a,l,d){var p=a._reactRootContainer;if(p){var M=p;if(typeof d=="function"){var I=d;d=function(){var H=Xo(M);I.call(H)}}jo(i,M,t,d)}else M=kv(a,i,t,d,l);return Xo(M)}sf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Yt(i.pendingLanes);a!==0&&(kl(i,a|1),bn(i,Ee()),(yt&6)===0&&(xs=Ee()+500,nr()))}break;case 13:Dr(function(){var l=Ri(t,1);if(l!==null){var d=xn();si(l,t,1,d)}}),fu(t,1)}},zl=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var a=xn();si(i,t,134217728,a)}fu(t,134217728)}},af=function(t){if(t.tag===13){var i=lr(t),a=Ri(t,i);if(a!==null){var l=xn();si(a,t,i,l)}fu(t,i)}},of=function(){return Rt},lf=function(t,i){var a=Rt;try{return Rt=t,i()}finally{Rt=a}},Re=function(t,i,a){switch(i){case"input":if(He(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var d=fo(l);if(!d)throw Error(n(90));ft(l),He(l,d)}}}break;case"textarea":me(t,a);break;case"select":i=a.value,i!=null&&D(t,!!a.multiple,i,!1)}},It=su,qt=Dr;var zv={usingClientEntryPoint:!1,Events:[ha,as,fo,Ne,ot,su]},Ca={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bv={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=R(t),t===null?null:t.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||Ov,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{Tt=Ko.inject(Bv),mt=Ko}catch{}}return Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zv,Rn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pu(i))throw Error(n(200));return Fv(t,i,null,a)},Rn.createRoot=function(t,i){if(!pu(t))throw Error(n(299));var a=!1,l="",d=wp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=du(t,1,!1,null,null,a,!1,l,d),t[Ti]=i.current,ua(t.nodeType===8?t.parentNode:t),new hu(i)},Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=R(i),t=t===null?null:t.stateNode,t},Rn.flushSync=function(t){return Dr(t)},Rn.hydrate=function(t,i,a){if(!Yo(i))throw Error(n(200));return $o(null,t,i,!0,a)},Rn.hydrateRoot=function(t,i,a){if(!pu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,d=!1,p="",M=wp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=Mp(i,null,t,1,a??null,d,!1,p,M),t[Ti]=i.current,ua(t),l)for(t=0;t<l.length;t++)a=l[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new qo(i)},Rn.render=function(t,i,a){if(!Yo(i))throw Error(n(200));return $o(null,t,i,!1,a)},Rn.unmountComponentAtNode=function(t){if(!Yo(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){$o(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1},Rn.unstable_batchedUpdates=su,Rn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!Yo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return $o(t,i,a,!1,l)},Rn.version="18.3.1-next-f1338f8080-20240426",Rn}var Dp;function $v(){if(Dp)return vu.exports;Dp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vu.exports=Yv(),vu.exports}var Ip;function Kv(){if(Ip)return Zo;Ip=1;var s=$v();return Zo.createRoot=s.createRoot,Zo.hydrateRoot=s.hydrateRoot,Zo}var Zv=Kv();const Qv=Xm(Zv);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function e_(s,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Jv(s),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=s=>{let e="",n=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){n=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=n?r.toUpperCase():r,n=!1}return e};/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=s=>{const e=t_(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function yu(s){return s!=null}function i_(s,e={}){var y,S;const n=e.attributeNames??{},r=w=>n[w]??w,o=s.size??s.width??Or.width,c=s.size??s.height??Or.height,u=((y=s.aliases)==null?void 0:y.filter(w=>typeof w=="string"&&w.trim()!=="").map(w=>`lucide-${w}`))??[],f=[...s.name?[`lucide-${s.name}`]:[],...u],h=((S=e.className)==null?void 0:S.split(" ").filter(Boolean))??[],m=e.includeDefaultClasses===!1?ed(...h):ed("lucide",...f,...h),v=e.absoluteStrokeWidth?Number(e.strokeWidth??Or["stroke-width"])*Number(s.size??s.width??Or.width)/Number(e.size??e.width??Or.width):e.strokeWidth??Or["stroke-width"];return["svg",{...Object.entries(Or).reduce((w,[E,_])=>(w[r(E)]=_,w),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&yu(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&yu(e.width)&&{[r("width")]:e.width},..."height"in e&&yu(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:v,...m&&{[r("class")]:m},[r("viewBox")]:`0 0 ${o} ${c}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(w=>{const[E,_,g]=w,N=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",..._}:_;return g?[E,N,g]:[E,N]})]}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function r_(s,e={}){return i_(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},a_=je.createContext({}),o_=()=>je.useContext(a_),l_=je.forwardRef(({color:s,size:e,width:n,height:r,strokeWidth:o,absoluteStrokeWidth:c,nonScalingStroke:u,className:f="",children:h,iconNode:m=[],icon:v={node:m,aliases:[],size:24},...x},y)=>{const{size:S=24,strokeWidth:w=2,absoluteStrokeWidth:E=!1,nonScalingStroke:_=!1,color:g="currentColor",className:N=""}=o_()??{},L=!!h||s_(x),[b,W,O=[]]=r_(v,{color:s??g,width:n??e??S,height:r??e??S,strokeWidth:o??w,absoluteStrokeWidth:c??E,nonScalingStroke:u??_,className:ed(N,f),hasA11yProp:L,attributes:x});return je.createElement(b,{ref:y,...W},[...O.map(([U,z])=>je.createElement(U,z)),...Array.isArray(h)?h:[h]])});/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ct(s,e=[],n=[]){const r=typeof s=="string"?e_(s,e,n):s,o=je.forwardRef(({className:c,...u},f)=>je.createElement(l_,{ref:f,icon:r,className:c,...u}));return r.name&&(o.displayName=n_(r.name)),o}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};qm.node;const c_=Ct(qm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};Ym.node;const $m=Ct(Ym);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km={name:"brain",size:24,node:[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 01-3-4 4.17 4.17 0 01-3 4",key:"5nuw1p"}],["path",{d:"M17.707 6.294A3 3 0 1012 5a3 3 0 10-5.707 1.294",key:"18ldcf"}],["path",{d:"M17.996 5.125a4 4 0 012.526 5.77",key:"1sdu8q"}],["path",{d:"M18 18a4 4 0 002-7.465",key:"7xqqvr"}],["path",{d:"M19.967 17.482a4 4 0 11-7.967.517 4 4 0 11-7.967-.517",key:"t46ysz"}],["path",{d:"M6 18a4 4 0 01-2-7.465",key:"1y2m15"}],["path",{d:"M6.004 5.125a4 4 0 00-2.526 5.77",key:"3cw1ss"}]]};Km.node;const u_=Ct(Km);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Zm.node;const d_=Ct(Zm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};Qm.node;const f_=Ct(Qm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm={name:"circle-exclamation-point",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle","circle-alert"]};Jm.node;const h_=Ct(Jm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0={name:"columns-2",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],aliases:["columns"]};e0.node;const p_=Ct(e0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};t0.node;const n0=Ct(t0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};i0.node;const r0=Ct(i0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0={name:"crosshair",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]};s0.node;const m_=Ct(s0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};a0.node;const g_=Ct(a0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0={name:"gauge",size:24,node:[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]};o0.node;const Up=Ct(o0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};l0.node;const v_=Ct(l0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};c0.node;const u0=Ct(c0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0={name:"map",size:24,node:[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]};d0.node;const Fp=Ct(d0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0={name:"navigation",size:24,node:[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]};f0.node;const __=Ct(f0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0={name:"octagon-exclamation-point",size:24,node:[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]],aliases:["alert-octagon","octagon-alert"]};h0.node;const Op=Ct(h0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};p0.node;const m0=Ct(p0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};g0.node;const x_=Ct(g0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};v0.node;const y_=Ct(v0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0={name:"satellite",size:24,node:[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]]};_0.node;const S_=Ct(_0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};x0.node;const M_=Ct(x0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0={name:"shield-exclamation-point",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],aliases:["shield-alert"]};y0.node;const kp=Ct(y0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};S0.node;const E_=Ct(S0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};M0.node;const w_=Ct(M0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};E0.node;const T_=Ct(E0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};w0.node;const A_=Ct(w0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0={name:"triangle-exclamation-point",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle","triangle-alert"]};T0.node;const Cl=Ct(T0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};A0.node;const zp=Ct(A0);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};C0.node;const C_=Ct(C0),b_=({status:s,roverCallsign:e,datasetCount:n})=>T.jsxs("header",{className:"bg-mars-800/80 backdrop-blur-md border-b border-mars-700/60 px-6 py-3.5 flex items-center justify-between sticky top-0 z-50",children:[T.jsxs("div",{className:"flex items-center space-x-4",children:[T.jsxs("div",{className:"relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-mars-500 to-amber-600 shadow-lg shadow-mars-500/20",children:[T.jsx(n0,{className:"w-6 h-6 text-white animate-spin-slow"}),T.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-mars-900 animate-pulse"})]}),T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center space-x-2.5",children:[T.jsx("h1",{className:"text-lg font-bold tracking-wider text-white uppercase font-mono",children:"ODYSSEY"}),T.jsx("span",{className:"text-[11px] px-2 py-0.5 rounded font-mono bg-mars-700 text-mars-300 border border-mars-600",children:"MARS-09 TACTICAL"}),T.jsxs("span",{className:"text-[11px] px-2 py-0.5 rounded font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800 flex items-center space-x-1",children:[T.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"}),T.jsx("span",{children:s})]})]}),T.jsx("p",{className:"text-xs text-slate-400",children:"Autonomous Mars Rover Navigation & Planetary Terrain Intelligence Engine"})]})]}),T.jsxs("div",{className:"flex items-center space-x-6 text-xs font-mono",children:[T.jsxs("div",{className:"flex items-center space-x-2 text-slate-300",children:[T.jsx(S_,{className:"w-4 h-4 text-mars-400"}),T.jsxs("span",{children:["DATUM: ",T.jsx("strong",{className:"text-white",children:"IAU 2015 SPHEROID"})]})]}),T.jsxs("div",{className:"flex items-center space-x-2 text-slate-300",children:[T.jsx(c_,{className:"w-4 h-4 text-emerald-400"}),T.jsxs("span",{children:["ROVER: ",T.jsx("strong",{className:"text-white",children:e})]})]}),T.jsxs("div",{className:"flex items-center space-x-2 text-slate-300",children:[T.jsx(r0,{className:"w-4 h-4 text-cyan-400"}),T.jsxs("span",{children:["INGESTED: ",T.jsxs("strong",{className:"text-white",children:[n," LAYERS"]})]})]})]})]}),Xs="/api";async function R_(){const s=await fetch(`${Xs}/status`);if(!s.ok)throw new Error("Failed to fetch system status");return s.json()}async function P_(){const s=await fetch(`${Xs}/samples`);if(!s.ok)throw new Error("Failed to fetch sample datasets");return s.json()}async function N_(s,e){const n=new FormData;n.append("file",s),n.append("file_type",e);const r=await fetch(`${Xs}/upload`,{method:"POST",body:n});if(!r.ok){const c=await r.json().catch(()=>({detail:"Upload failed"}));throw new Error(c.detail||"Upload failed")}return(await r.json()).data}async function L_(s,e){const n=new FormData;n.append("imagery_id",s),n.append("dem_id",e);const r=await fetch(`${Xs}/validate-compatibility`,{method:"POST",body:n});if(!r.ok){const c=await r.json().catch(()=>({detail:"Validation failed"}));throw new Error(c.detail||"Validation failed")}return(await r.json()).report}async function D_(s){const e=new FormData;e.append("dem_id",s);const n=await fetch(`${Xs}/analyze-terrain`,{method:"POST",body:e});if(!n.ok){const r=await n.json().catch(()=>({detail:"Terrain analysis failed"}));throw new Error(r.detail||"Terrain analysis failed")}return n.json()}async function I_(s,e,n,r,o){const c=new FormData;c.append("dem_id",s),c.append("start_r",e.toString()),c.append("start_c",n.toString()),c.append("goal_r",r.toString()),c.append("goal_c",o.toString());const u=await fetch(`${Xs}/plan-path`,{method:"POST",body:c});if(!u.ok){const f=await u.json().catch(()=>({detail:"Path planning failed"}));throw new Error(f.detail||"Path planning failed")}return u.json()}const U_=({imageryRecord:s,demRecord:e,demPrimaryRecord:n,demOffsetRecord:r,onSelectImagery:o,onSelectDem:c,onLoadSamples:u,isLoading:f})=>{var S,w;const[h,m]=je.useState(null),[v,x]=je.useState(null),y=async(E,_)=>{var N;const g=(N=E.target.files)==null?void 0:N[0];if(g){m(_),x(null);try{const L=await N_(g,_);_==="imagery"?o(L):c(L)}catch(L){x(L.message||"Failed to upload raster.")}finally{m(null)}}};return T.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 flex flex-col space-y-4",children:[T.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-3",children:[T.jsxs("div",{className:"flex items-center space-x-2",children:[T.jsx(u0,{className:"w-4 h-4 text-mars-400"}),T.jsx("h2",{className:"text-sm font-semibold tracking-wide text-white uppercase font-mono",children:"Planetary Data Ingestion"})]}),T.jsxs("button",{onClick:u,disabled:f,className:"flex items-center space-x-1.5 text-xs font-mono px-2.5 py-1 rounded bg-mars-700 hover:bg-mars-600 text-slate-200 border border-mars-600 transition",children:[T.jsx(x_,{className:`w-3 h-3 ${f?"animate-spin":""}`}),T.jsx("span",{children:"Reload Jezero Samples"})]})]}),v&&T.jsxs("div",{className:"bg-red-950/60 border border-red-800/80 rounded-lg p-3 text-xs text-red-300 flex items-start space-x-2",children:[T.jsx(Cl,{className:"w-4 h-4 text-red-400 flex-shrink-0 mt-0.5"}),T.jsx("span",{children:v})]}),T.jsxs("div",{className:"bg-mars-900/70 border border-mars-700/40 rounded-lg p-3 space-y-2.5",children:[T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsxs("div",{className:"flex items-center space-x-2",children:[T.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),T.jsx("span",{className:"text-xs font-mono font-medium text-slate-200",children:"OPTICAL IMAGERY (HiRISE/CTX)"})]}),T.jsxs("label",{className:"cursor-pointer text-[11px] font-mono px-2.5 py-1 rounded bg-mars-700 hover:bg-mars-600 text-cyan-300 border border-cyan-800/50 flex items-center space-x-1 transition",children:[T.jsx(zp,{className:"w-3 h-3"}),T.jsx("span",{children:h==="imagery"?"Ingesting...":"Upload GeoTIFF"}),T.jsx("input",{type:"file",accept:".tif,.tiff,.geotiff",className:"hidden",onChange:E=>y(E,"imagery"),disabled:h!==null})]})]}),s?T.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] font-mono bg-black/40 rounded p-2 border border-mars-700/30",children:[T.jsxs("div",{children:[T.jsx("span",{className:"text-slate-400",children:"File: "}),T.jsx("span",{className:"text-white truncate block",children:s.filename})]}),T.jsxs("div",{children:[T.jsx("span",{className:"text-slate-400",children:"Dims: "}),T.jsxs("span",{className:"text-cyan-300",children:[s.metadata.width," × ",s.metadata.height," px (",s.metadata.bands,"b)"]})]}),T.jsxs("div",{className:"col-span-2",children:[T.jsx("span",{className:"text-slate-400",children:"CRS: "}),T.jsx("span",{className:"text-amber-300 truncate block",children:s.metadata.crs_name})]}),T.jsxs("div",{children:[T.jsx("span",{className:"text-slate-400",children:"Resolution: "}),T.jsxs("span",{className:"text-slate-200",children:[s.metadata.resolution_x.toFixed(2)," m/px"]})]}),T.jsxs("div",{children:[T.jsx("span",{className:"text-slate-400",children:"NoData: "}),T.jsx("span",{className:"text-slate-200",children:s.metadata.nodata??"None"})]})]}):T.jsx("div",{className:"text-xs text-slate-500 italic py-2 text-center",children:"No optical imagery loaded"})]}),T.jsxs("div",{className:"bg-mars-900/70 border border-mars-700/40 rounded-lg p-3 space-y-2.5",children:[T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsxs("div",{className:"flex items-center space-x-2",children:[T.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400"}),T.jsx("span",{className:"text-xs font-mono font-medium text-slate-200",children:"DIGITAL ELEVATION MODEL (DEM)"})]}),T.jsxs("div",{className:"flex items-center space-x-2",children:[r&&n&&T.jsx("button",{onClick:()=>c((e==null?void 0:e.id)===r.id?n:r),className:`text-[10px] font-mono px-2 py-0.5 rounded border transition ${(e==null?void 0:e.id)===r.id?"bg-amber-950 text-amber-300 border-amber-600 font-bold":"bg-mars-700/70 hover:bg-mars-600 text-amber-300 border-amber-800/40"}`,title:(e==null?void 0:e.id)===r.id?"Click to restore aligned Primary Jezero DEM":"Click to test Offset DEM and observe incompatibility warning",children:(e==null?void 0:e.id)===r.id?"← Primary DEM":"Test Offset DEM"}),T.jsxs("label",{className:"cursor-pointer text-[11px] font-mono px-2.5 py-1 rounded bg-mars-700 hover:bg-mars-600 text-amber-300 border border-amber-800/50 flex items-center space-x-1 transition",children:[T.jsx(zp,{className:"w-3 h-3"}),T.jsx("span",{children:h==="dem"?"Ingesting...":"Upload GeoTIFF"}),T.jsx("input",{type:"file",accept:".tif,.tiff,.geotiff",className:"hidden",onChange:E=>y(E,"dem"),disabled:h!==null})]})]})]}),e?T.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] font-mono bg-black/40 rounded p-2 border border-mars-700/30",children:[T.jsxs("div",{children:[T.jsx("span",{className:"text-slate-400",children:"File: "}),T.jsx("span",{className:"text-white truncate block",children:e.filename})]}),T.jsxs("div",{children:[T.jsx("span",{className:"text-slate-400",children:"Dims: "}),T.jsxs("span",{className:"text-amber-300",children:[e.metadata.width," × ",e.metadata.height," px"]})]}),T.jsxs("div",{className:"col-span-2",children:[T.jsx("span",{className:"text-slate-400",children:"CRS: "}),T.jsx("span",{className:"text-amber-300 truncate block",children:e.metadata.crs_name})]}),T.jsxs("div",{children:[T.jsx("span",{className:"text-slate-400",children:"Resolution: "}),T.jsxs("span",{className:"text-slate-200",children:[e.metadata.resolution_x.toFixed(2)," m/px"]})]}),T.jsxs("div",{children:[T.jsx("span",{className:"text-slate-400",children:"Elevation: "}),T.jsxs("span",{className:"text-emerald-400",children:[(S=e.metadata.min_val)==null?void 0:S.toFixed(0),"m to ",(w=e.metadata.max_val)==null?void 0:w.toFixed(0),"m"]})]})]}):T.jsx("div",{className:"text-xs text-slate-500 italic py-2 text-center",children:"No elevation DEM loaded"})]})]})},F_=({report:s,isValidating:e})=>{if(e)return T.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 flex items-center justify-center space-x-3 text-slate-400 text-xs font-mono",children:[T.jsx("span",{className:"w-4 h-4 border-2 border-mars-500 border-t-transparent rounded-full animate-spin"}),T.jsx("span",{children:"Evaluating planetary spatial compatibility & CRS alignment..."})]});if(!s)return T.jsx("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 text-center text-xs font-mono text-slate-500",children:"Load both Imagery and DEM rasters to run spatial compatibility inspection."});const{is_compatible:n,crs_match:r,overlap_metrics:o,resolution_ratio:c,warnings:u,errors:f,recommendations:h}=s;return T.jsxs("div",{className:`border rounded-xl p-4 space-y-3.5 transition ${n?"bg-mars-800/60 border-emerald-800/60":"bg-red-950/40 border-red-800/70"}`,children:[T.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-2.5",children:[T.jsxs("div",{className:"flex items-center space-x-2",children:[n?T.jsx(M_,{className:"w-5 h-5 text-emerald-400"}):T.jsx(kp,{className:"w-5 h-5 text-red-400"}),T.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Spatial Compatibility Verification"})]}),T.jsx("span",{className:`text-[11px] font-mono px-2.5 py-0.5 rounded font-bold ${n?"bg-emerald-950 text-emerald-300 border border-emerald-800":"bg-red-950 text-red-300 border border-red-800"}`,children:n?"VALIDATED COMPATIBLE":"INCOMPATIBILITY DETECTED"})]}),T.jsxs("div",{className:"grid grid-cols-3 gap-2 text-[11px] font-mono",children:[T.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[T.jsx("span",{className:"text-slate-400 block text-[10px]",children:"CRS ALIGNMENT"}),T.jsxs("div",{className:"flex items-center space-x-1.5 mt-0.5",children:[r?T.jsx(d_,{className:"w-3.5 h-3.5 text-emerald-400"}):T.jsx(C_,{className:"w-3.5 h-3.5 text-amber-400"}),T.jsx("span",{className:r?"text-emerald-300":"text-amber-300",children:r?"Matched":"Reprojection Req."})]})]}),T.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[T.jsx("span",{className:"text-slate-400 block text-[10px]",children:"SPATIAL OVERLAP"}),T.jsxs("span",{className:"text-cyan-300 font-bold block mt-0.5",children:[o.imagery_coverage_pct,"% / ",o.dem_coverage_pct,"%"]})]}),T.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[T.jsx("span",{className:"text-slate-400 block text-[10px]",children:"RESOLUTION RATIO"}),T.jsxs("span",{className:"text-slate-200 block mt-0.5",children:[c.toFixed(2),"x (DEM/Img)"]})]})]}),T.jsxs("div",{className:"space-y-1",children:[T.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-slate-400",children:[T.jsx("span",{children:"Imagery Spatial Footprint Covered by DEM:"}),T.jsxs("span",{className:"text-cyan-400",children:[o.imagery_coverage_pct,"%"]})]}),T.jsx("div",{className:"w-full bg-mars-950 rounded-full h-1.5 overflow-hidden border border-mars-700/40",children:T.jsx("div",{className:`h-full transition-all duration-500 ${o.imagery_coverage_pct>80?"bg-emerald-500":o.imagery_coverage_pct>20?"bg-amber-500":"bg-red-500"}`,style:{width:`${Math.min(100,o.imagery_coverage_pct)}%`}})})]}),f.length>0&&T.jsx("div",{className:"space-y-1",children:f.map((m,v)=>T.jsxs("div",{className:"text-[11px] font-mono text-red-300 flex items-start space-x-1.5 bg-red-950/60 p-2 rounded border border-red-900/60",children:[T.jsx(kp,{className:"w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5"}),T.jsx("span",{children:m})]},v))}),u.length>0&&T.jsx("div",{className:"space-y-1",children:u.map((m,v)=>T.jsxs("div",{className:"text-[11px] font-mono text-amber-300 flex items-start space-x-1.5 bg-amber-950/40 p-2 rounded border border-amber-900/40",children:[T.jsx(Cl,{className:"w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5"}),T.jsx("span",{children:m})]},v))}),h.length>0&&T.jsx("div",{className:"space-y-1",children:h.map((m,v)=>T.jsxs("div",{className:"text-[11px] font-mono text-cyan-300 flex items-start space-x-1.5 bg-cyan-950/30 p-2 rounded border border-cyan-900/40",children:[T.jsx(v_,{className:"w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5"}),T.jsxs("span",{children:["Rec: ",m]})]},v))})]})},O_=[{icon:"🟩",hazard:"Minimal",label:"Safe Bedrock"},{icon:"🟨",hazard:"Moderate",label:"Loose Sand / Dune"},{icon:"🟪",hazard:"Elevated",label:"Rocky Field / Boulders"},{icon:"🟥",hazard:"Lethal",label:"Steep Hazard / Cliff"},{icon:"⬛",hazard:"Unknown",label:"Shadow / Dropout"}],k_=({segmentationResult:s,isSegmenting:e,error:n,mcSamples:r,onMcSamplesChange:o,onRunSegmentation:c,canRun:u,activeLayer:f,onSelectLayer:h})=>{var w;const m=(s==null?void 0:s.class_distributions)??[],v=(s==null?void 0:s.inference_latency_ms)??null,x=(s==null?void 0:s.parameter_count)??null,y=m.filter(E=>E.class_id>=3).reduce((E,_)=>E+_.coverage_pct,0),S=((w=m.find(E=>E.class_id===0))==null?void 0:w.coverage_pct)??0;return T.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-4",children:[T.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-3",children:[T.jsxs("div",{className:"flex items-center space-x-2",children:[T.jsx(u_,{className:"w-4 h-4 text-violet-400"}),T.jsx("h2",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"AI Terrain Segmentation"}),T.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-violet-950 text-violet-300 border border-violet-800 font-mono",children:"MC-DROPOUT"})]}),x&&T.jsxs("span",{className:"text-[10px] font-mono text-slate-400 flex items-center space-x-1",children:[T.jsx(r0,{className:"w-3 h-3"}),T.jsxs("span",{children:[(x/1e3).toFixed(0),"K params"]})]})]}),T.jsxs("div",{className:"bg-black/40 rounded-lg p-2.5 border border-mars-700/30 text-[10px] font-mono space-y-1",children:[T.jsx("div",{className:"text-slate-400 font-semibold uppercase tracking-wide mb-1.5",children:"Multi-Modal U-Net Architecture"}),T.jsxs("div",{className:"grid grid-cols-2 gap-x-4 gap-y-0.5 text-slate-300",children:[T.jsxs("span",{children:["Inputs: ",T.jsx("strong",{className:"text-cyan-400",children:"6 channels"})]}),T.jsxs("span",{children:["Classes: ",T.jsx("strong",{className:"text-violet-400",children:"5 semantic"})]}),T.jsx("span",{className:"col-span-2 text-slate-400",children:"R, G, B + DEM height + Slope + TRI"})]})]}),T.jsxs("div",{className:"space-y-2.5",children:[T.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[T.jsx("span",{className:"text-slate-400",children:"MC Dropout Passes:"}),T.jsxs("div",{className:"flex items-center space-x-2",children:[T.jsx("input",{type:"range",min:3,max:15,step:1,value:r,onChange:E=>o(Number(E.target.value)),className:"w-20 accent-violet-500 cursor-pointer h-1.5 bg-mars-700 rounded-lg"}),T.jsx("span",{className:"text-violet-300 w-5",children:r})]})]}),T.jsx("button",{onClick:c,disabled:!u,className:`w-full py-2.5 rounded-lg font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition border ${u?"bg-gradient-to-r from-violet-700 to-indigo-700 hover:from-violet-600 hover:to-indigo-600 text-white border-violet-500/50 shadow-lg shadow-violet-950":"bg-mars-800 text-slate-500 border-mars-700 cursor-not-allowed"}`,children:e?T.jsxs(T.Fragment,{children:[T.jsx("span",{className:"w-3.5 h-3.5 border-2 border-violet-300 border-t-transparent rounded-full animate-spin"}),T.jsx("span",{children:"Running MC Dropout Inference..."})]}):T.jsxs(T.Fragment,{children:[T.jsx(m0,{className:"w-3.5 h-3.5 fill-current"}),T.jsx("span",{children:"Run Terrain Segmentation"})]})}),n&&T.jsxs("div",{className:"text-[10px] font-mono text-red-400 flex items-start space-x-1.5 bg-red-950/40 p-2 rounded border border-red-800/40",children:[T.jsx(Cl,{className:"w-3.5 h-3.5 flex-shrink-0 mt-0.5"}),T.jsx("span",{children:n})]}),!u&&!e&&!n&&T.jsxs("div",{className:"text-[10px] font-mono text-amber-400 flex items-center space-x-1.5 bg-amber-950/40 p-2 rounded border border-amber-800/40",children:[T.jsx(Cl,{className:"w-3.5 h-3.5 flex-shrink-0"}),T.jsx("span",{children:"Load both Imagery and DEM datasets to enable segmentation"})]})]}),s&&T.jsxs("div",{className:"space-y-2",children:[T.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-slate-400 bg-black/40 rounded px-2 py-1 border border-mars-700/30",children:[T.jsxs("span",{className:"flex items-center space-x-1",children:[T.jsx(Up,{className:"w-3 h-3"}),T.jsx("span",{children:"Inference Latency"})]}),T.jsxs("span",{className:`font-bold ${v<500?"text-emerald-400":v<1500?"text-amber-400":"text-red-400"}`,children:[v.toFixed(0)," ms"]})]}),h&&T.jsxs("div",{className:"flex items-center space-x-1 bg-mars-950/80 rounded-lg p-0.5 border border-mars-700/40 text-xs font-mono",children:[T.jsxs("button",{onClick:()=>h("segmentation"),className:`flex-1 px-2 py-1.5 rounded flex items-center justify-center space-x-1.5 transition ${f==="segmentation"?"bg-violet-800 text-white font-bold ring-1 ring-violet-500":"text-slate-400 hover:text-slate-200"}`,children:[T.jsx(u0,{className:"w-3 h-3 text-violet-400"}),T.jsx("span",{children:"AI Seg Map"})]}),T.jsxs("button",{onClick:()=>h("uncertainty"),className:`flex-1 px-2 py-1.5 rounded flex items-center justify-center space-x-1.5 transition ${f==="uncertainty"?"bg-cyan-900 text-white font-bold ring-1 ring-cyan-500":"text-slate-400 hover:text-slate-200"}`,children:[T.jsx(Up,{className:"w-3 h-3 text-cyan-400"}),T.jsx("span",{children:"Epistemic σ²"})]})]})]}),m.length>0&&T.jsxs("div",{className:"space-y-2",children:[T.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1 border-b border-mars-700/40",children:[T.jsx("span",{className:"font-semibold uppercase tracking-wide",children:"Terrain Class Coverage"}),T.jsxs("span",{className:`${y>30?"text-red-400":y>15?"text-amber-400":"text-emerald-400"}`,children:[y.toFixed(1),"% hazardous"]})]}),m.map(E=>{const _=O_[E.class_id]??{hazard:"Unknown",label:E.class_name},g=`rgb(${E.color_rgb[0]}, ${E.color_rgb[1]}, ${E.color_rgb[2]})`;return T.jsxs("div",{className:"space-y-0.5",children:[T.jsxs("div",{className:"flex justify-between items-center text-[10px] font-mono",children:[T.jsxs("div",{className:"flex items-center space-x-1.5",children:[T.jsx("span",{className:"w-2.5 h-2.5 rounded-sm flex-shrink-0",style:{backgroundColor:g}}),T.jsx("span",{className:"text-slate-300",children:E.class_name}),T.jsx("span",{className:`px-1.5 py-0 rounded text-[9px] ${_.hazard==="Lethal"?"bg-red-950 text-red-400":_.hazard==="Unknown"?"bg-slate-800 text-slate-400":_.hazard==="Elevated"?"bg-orange-950 text-orange-400":_.hazard==="Moderate"?"bg-amber-950 text-amber-400":"bg-emerald-950 text-emerald-400"} border border-opacity-30`,children:_.hazard})]}),T.jsxs("span",{className:"text-white font-bold",children:[E.coverage_pct.toFixed(1),"%"]})]}),T.jsx("div",{className:"w-full bg-mars-950 rounded-full h-1 overflow-hidden border border-mars-700/30",children:T.jsx("div",{className:"h-full rounded-full transition-all duration-700",style:{width:`${Math.min(100,E.coverage_pct)}%`,backgroundColor:g}})})]},E.class_id)}),T.jsxs("div",{className:"mt-2 bg-black/40 rounded-lg p-2.5 border border-mars-700/30",children:[T.jsxs("div",{className:"flex justify-between items-center text-[11px] font-mono",children:[T.jsx("span",{className:"text-slate-400",children:"Safe Traversability Index"}),T.jsxs("span",{className:`text-xl font-bold ${S>60?"text-emerald-400":S>35?"text-amber-400":"text-red-400"}`,children:[S.toFixed(0),"%"]})]}),T.jsx("div",{className:"w-full bg-mars-950 rounded-full h-2 overflow-hidden mt-1.5 border border-mars-700/40",children:T.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-emerald-700 to-emerald-400 transition-all duration-700",style:{width:`${S}%`}})})]})]})]})},z_=({imageryUrl:s,demColormapUrl:e,slopeUrl:n,costmapUrl:r,segmentationUrl:o,uncertaintyUrl:c,activeLayer:u,onSelectLayer:f,pathCoords:h,scienceTargets:m,startCoords:v,goalCoords:x,onSetStart:y,onSetGoal:S,ThreeDViewer:w})=>{var ne;const[E,_]=je.useState("imagery"),g=u??E,N=f??_,[L,b]=je.useState("split"),[W,O]=je.useState("goal"),[U,z]=je.useState(null),P=je.useRef(null),A=[{key:"imagery",label:"Optical",url:s,color:"text-cyan-300"},{key:"dem",label:"DEM",url:e,color:"text-amber-300"},{key:"slope",label:"Slope",url:n,color:"text-rose-300"},{key:"costmap",label:"Costmap",url:r,color:"text-emerald-300"},{key:"segmentation",label:"AI Seg",url:o,color:"text-violet-300"},{key:"uncertainty",label:"Uncertainty σ²",url:c,color:"text-cyan-300"}],B=((ne=A.find(V=>V.key===g))==null?void 0:ne.url)||s||e,j=V=>{if(!P.current)return;const Q=P.current.getBoundingClientRect(),k=Math.round((V.clientX-Q.left)/Q.width*512),oe=Math.round((V.clientY-Q.top)/Q.height*512),re=[Math.max(0,Math.min(511,oe)),Math.max(0,Math.min(511,k))];W==="start"?y(re):S(re)},X=V=>{if(!P.current)return;const Q=P.current.getBoundingClientRect(),k=Math.round((V.clientX-Q.left)/Q.width*512),oe=Math.round((V.clientY-Q.top)/Q.height*512);z({x:Math.max(0,Math.min(511,k)),y:Math.max(0,Math.min(511,oe))})},Z=V=>({x:V[1]/512*100,y:V[0]/512*100});return T.jsxs("div",{className:"flex flex-col h-full space-y-3",children:[T.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl px-3 py-2 flex items-center justify-between gap-2 flex-wrap",children:[T.jsx("div",{className:"flex items-center space-x-1 bg-mars-950/80 rounded-lg p-0.5 border border-mars-700/50 text-[11px] font-mono",children:A.map(V=>T.jsx("button",{onClick:()=>V.url&&N(V.key),disabled:!V.url,title:V.url?`Switch to ${V.label} layer`:"Layer not yet generated",className:`px-2 py-0.5 rounded whitespace-nowrap transition ${g===V.key&&V.url?`bg-mars-700 ${V.color} font-bold ring-1 ring-mars-500`:V.url?"text-slate-400 hover:text-slate-200 hover:bg-mars-800/50":"text-slate-600 cursor-not-allowed opacity-40"}`,children:V.label},V.key))}),T.jsxs("div",{className:"flex items-center space-x-1.5 text-[11px] font-mono",children:[T.jsx("span",{className:"text-slate-500 text-[10px] hidden sm:inline",children:"Click to set:"}),T.jsxs("button",{onClick:()=>O("start"),className:`px-2 py-0.5 rounded border flex items-center space-x-1 transition text-[11px] ${W==="start"?"bg-emerald-950 text-emerald-300 border-emerald-700 font-bold ring-1 ring-emerald-500":"bg-mars-900 text-slate-400 border-mars-700 hover:border-mars-500"}`,children:[T.jsx(__,{className:"w-3 h-3 text-emerald-400"}),T.jsx("span",{children:"Start"})]}),T.jsxs("button",{onClick:()=>O("goal"),className:`px-2 py-0.5 rounded border flex items-center space-x-1 transition text-[11px] ${W==="goal"?"bg-cyan-950 text-cyan-300 border-cyan-700 font-bold ring-1 ring-cyan-500":"bg-mars-900 text-slate-400 border-mars-700 hover:border-mars-500"}`,children:[T.jsx(T_,{className:"w-3 h-3 text-cyan-400"}),T.jsx("span",{children:"Goal"})]})]}),T.jsx("div",{className:"flex items-center space-x-1 bg-mars-950/80 rounded-lg p-0.5 border border-mars-700/50 text-[11px] font-mono",children:["split","2d","3d"].map(V=>T.jsxs("button",{onClick:()=>b(V),className:`px-2 py-0.5 rounded flex items-center space-x-1 transition ${L===V?"bg-mars-700 text-white font-bold":"text-slate-400 hover:text-slate-200"}`,children:[V==="split"?T.jsx(p_,{className:"w-3 h-3"}):V==="2d"?T.jsx(Fp,{className:"w-3 h-3"}):T.jsx($m,{className:"w-3 h-3"}),T.jsx("span",{children:V==="split"?"Split":V.toUpperCase()})]},V))})]}),T.jsxs("div",{className:`grid gap-3 flex-1 ${L==="split"?"grid-cols-1 md:grid-cols-2":"grid-cols-1"}`,children:[(L==="split"||L==="2d")&&T.jsxs("div",{className:"bg-mars-900 rounded-xl border border-mars-700/60 overflow-hidden flex flex-col min-h-[480px]",children:[T.jsxs("div",{className:"bg-mars-800/80 px-4 py-2 border-b border-mars-700/50 flex items-center justify-between text-xs font-mono",children:[T.jsxs("div",{className:"flex items-center space-x-2 text-slate-300",children:[T.jsx(Fp,{className:"w-4 h-4 text-cyan-400"}),T.jsx("span",{className:"font-semibold text-white",children:"2D TACTICAL ORBITAL MAP"}),T.jsx("span",{className:"text-[10px] text-cyan-400 bg-cyan-950/70 px-1.5 py-0.5 rounded border border-cyan-800/60 uppercase",children:g})]}),T.jsxs("span",{className:"text-[10px] text-slate-400",children:["Mode: ",T.jsx("strong",{className:W==="start"?"text-emerald-400":"text-cyan-400",children:W.toUpperCase()})]})]}),T.jsxs("div",{className:"relative flex-1 bg-black select-none flex items-center justify-center overflow-hidden p-2",children:[B?T.jsxs("div",{ref:P,onClick:j,onMouseMove:X,onMouseLeave:()=>z(null),className:"relative w-full h-full max-w-[550px] max-h-[550px] aspect-square mx-auto cursor-crosshair border border-mars-800",children:[T.jsx("img",{src:B,alt:"Martian terrain layer",className:"w-full h-full object-contain pointer-events-none select-none"},B),T.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[h.length>1&&T.jsx("polyline",{points:h.map(V=>`${Z(V).x},${Z(V).y}`).join(" "),fill:"none",stroke:"#10b981",strokeWidth:"1.0",strokeLinecap:"round",strokeLinejoin:"round",className:"filter drop-shadow-[0_0_3px_#10b981]"}),v&&(()=>{const V=Z(v);return T.jsxs("g",{transform:`translate(${V.x},${V.y})`,children:[T.jsx("circle",{r:"2.4",fill:"#10b981",stroke:"#fff",strokeWidth:"0.6"}),T.jsx("circle",{r:"4.5",fill:"none",stroke:"#10b981",strokeWidth:"0.5",strokeDasharray:"1.5 1.5"}),T.jsx("text",{y:"-3.5",fontSize:"2.8",fill:"#10b981",textAnchor:"middle",fontWeight:"bold",children:"ROVER"})]})})(),x&&(()=>{const V=Z(x);return T.jsxs("g",{transform:`translate(${V.x},${V.y})`,children:[T.jsx("circle",{r:"2.4",fill:"#00d2ff",stroke:"#fff",strokeWidth:"0.6"}),T.jsx("circle",{r:"4.5",fill:"none",stroke:"#00d2ff",strokeWidth:"0.5",strokeDasharray:"1.5 1.5"}),T.jsx("text",{y:"-3.5",fontSize:"2.8",fill:"#00d2ff",textAnchor:"middle",fontWeight:"bold",children:"GOAL"})]})})(),m.map(V=>{const Q=Z(V.coords_pixel);return T.jsxs("g",{transform:`translate(${Q.x},${Q.y})`,onClick:k=>{k.stopPropagation(),S(V.coords_pixel)},className:"cursor-pointer pointer-events-auto hover:opacity-80",children:[T.jsx("polygon",{points:"0,-3.2 3.2,2.2 -3.2,2.2",fill:"#f59e0b",stroke:"#fff",strokeWidth:"0.4"}),T.jsx("text",{y:"5.0",fontSize:"2.2",fill:"#f59e0b",textAnchor:"middle",fontWeight:"bold",children:V.id.split("-").pop()})]},V.id)})]})]}):T.jsxs("div",{className:"flex flex-col items-center space-y-2 text-slate-600",children:[T.jsx(g_,{className:"w-10 h-10"}),T.jsx("span",{className:"text-xs font-mono",children:"No terrain raster loaded"})]}),T.jsxs("div",{className:"absolute bottom-2 left-2 bg-mars-950/90 backdrop-blur border border-mars-700/50 rounded px-2.5 py-1 text-[10px] font-mono text-slate-300 flex items-center space-x-3 pointer-events-none",children:[T.jsxs("span",{className:"flex items-center space-x-1",children:[T.jsx(m_,{className:"w-3 h-3 text-mars-400"}),T.jsxs("span",{children:["X:",(U==null?void 0:U.x)??"--"," Y:",(U==null?void 0:U.y)??"--"]})]}),T.jsx("span",{className:"text-slate-500",children:"|"}),T.jsxs("span",{className:"text-emerald-400",children:["R:[",v[0],",",v[1],"]"]}),T.jsxs("span",{className:"text-cyan-400",children:["G:[",x[0],",",x[1],"]"]})]})]})]}),(L==="split"||L==="3d")&&T.jsx("div",{className:"min-h-[480px] flex flex-col",children:w})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gd="170",B_=0,Bp=1,H_=2,b0=1,R0=2,ki=3,Sr=0,Dn=1,zi=2,xr=0,Os=1,Hp=2,Vp=3,Gp=4,V_=5,Xr=100,G_=101,W_=102,j_=103,X_=104,q_=200,Y_=201,$_=202,K_=203,td=204,nd=205,Z_=206,Q_=207,J_=208,ex=209,tx=210,nx=211,ix=212,rx=213,sx=214,id=0,rd=1,sd=2,Bs=3,ad=4,od=5,ld=6,cd=7,P0=0,ax=1,ox=2,yr=0,lx=1,cx=2,ux=3,dx=4,fx=5,hx=6,px=7,N0=300,Hs=301,Vs=302,ud=303,dd=304,Dl=306,fd=1e3,Bi=1001,hd=1002,di=1003,mx=1004,Qo=1005,xi=1006,Su=1007,Yr=1008,Wi=1009,L0=1010,D0=1011,Oa=1012,Wd=1013,$r=1014,Hi=1015,za=1016,jd=1017,Xd=1018,Gs=1020,I0=35902,U0=1021,F0=1022,ui=1023,O0=1024,k0=1025,ks=1026,Ws=1027,z0=1028,qd=1029,B0=1030,Yd=1031,$d=1033,Sl=33776,Ml=33777,El=33778,wl=33779,pd=35840,md=35841,gd=35842,vd=35843,_d=36196,xd=37492,yd=37496,Sd=37808,Md=37809,Ed=37810,wd=37811,Td=37812,Ad=37813,Cd=37814,bd=37815,Rd=37816,Pd=37817,Nd=37818,Ld=37819,Dd=37820,Id=37821,Tl=36492,Ud=36494,Fd=36495,H0=36283,Od=36284,kd=36285,zd=36286,gx=3200,vx=3201,V0=0,_x=1,_r="",Kn="srgb",qs="srgb-linear",Il="linear",Nt="srgb",Ss=7680,Wp=519,xx=512,yx=513,Sx=514,G0=515,Mx=516,Ex=517,wx=518,Tx=519,jp=35044,Xp="300 es",Vi=2e3,bl=2001;class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mu=Math.PI/180,Bd=180/Math.PI;function Ba(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function Nn(s,e,n){return Math.max(e,Math.min(n,s))}function Ax(s,e){return(s%e+e)%e}function Eu(s,e,n){return(1-n)*s+n*e}function Ra(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,n=0){_t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,n,r,o,c,u,f,h,m){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,h,m)}set(e,n,r,o,c,u,f,h,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=n,v[4]=c,v[5]=h,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[3],h=r[6],m=r[1],v=r[4],x=r[7],y=r[2],S=r[5],w=r[8],E=o[0],_=o[3],g=o[6],N=o[1],L=o[4],b=o[7],W=o[2],O=o[5],U=o[8];return c[0]=u*E+f*N+h*W,c[3]=u*_+f*L+h*O,c[6]=u*g+f*b+h*U,c[1]=m*E+v*N+x*W,c[4]=m*_+v*L+x*O,c[7]=m*g+v*b+x*U,c[2]=y*E+S*N+w*W,c[5]=y*_+S*L+w*O,c[8]=y*g+S*b+w*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],v=e[8];return n*u*v-n*f*m-r*c*v+r*f*h+o*c*m-o*u*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],v=e[8],x=v*u-f*m,y=f*h-v*c,S=m*c-u*h,w=n*x+r*y+o*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=x*E,e[1]=(o*m-v*r)*E,e[2]=(f*r-o*u)*E,e[3]=y*E,e[4]=(v*n-o*h)*E,e[5]=(o*c-f*n)*E,e[6]=S*E,e[7]=(r*h-m*n)*E,e[8]=(u*n-r*c)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,f){const h=Math.cos(c),m=Math.sin(c);return this.set(r*h,r*m,-r*(h*u+m*f)+u+e,-o*m,o*h,-o*(-m*u+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(wu.makeScale(e,n)),this}rotate(e){return this.premultiply(wu.makeRotation(-e)),this}translate(e,n){return this.premultiply(wu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wu=new ct;function W0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ka(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cx(){const s=ka("canvas");return s.style.display="block",s}const qp={};function Ua(s){s in qp||(qp[s]=!0,console.warn(s))}function bx(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function Rx(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Px(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Nt&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Nt&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_r?Il:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Yp=[.64,.33,.3,.6,.15,.06],$p=[.2126,.7152,.0722],Kp=[.3127,.329],Zp=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qp=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[qs]:{primaries:Yp,whitePoint:Kp,transfer:Il,toXYZ:Zp,fromXYZ:Qp,luminanceCoefficients:$p,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:Yp,whitePoint:Kp,transfer:Nt,toXYZ:Zp,fromXYZ:Qp,luminanceCoefficients:$p,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let Ms;class Nx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=ka("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ka("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Gi(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Gi(n[r]/255)*255):n[r]=Gi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lx=0;class j0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Ba(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(Tu(o[u].image)):c.push(Tu(o[u]))}else c=Tu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Tu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dx=0;class Sn extends Ys{constructor(e=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,r=Bi,o=Bi,c=xi,u=Yr,f=ui,h=Wi,m=Sn.DEFAULT_ANISOTROPY,v=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Ba(),this.name="",this.source=new j0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==N0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fd:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fd:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=N0;Sn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,r=0,o=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const h=e.elements,m=h[0],v=h[4],x=h[8],y=h[1],S=h[5],w=h[9],E=h[2],_=h[6],g=h[10];if(Math.abs(v-y)<.01&&Math.abs(x-E)<.01&&Math.abs(w-_)<.01){if(Math.abs(v+y)<.1&&Math.abs(x+E)<.1&&Math.abs(w+_)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,b=(S+1)/2,W=(g+1)/2,O=(v+y)/4,U=(x+E)/4,z=(w+_)/4;return L>b&&L>W?L<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(L),o=O/r,c=U/r):b>W?b<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(b),r=O/o,c=z/o):W<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(W),r=U/c,o=z/c),this.set(r,o,c,n),this}let N=Math.sqrt((_-w)*(_-w)+(x-E)*(x-E)+(y-v)*(y-v));return Math.abs(N)<.001&&(N=1),this.x=(_-w)/N,this.y=(x-E)/N,this.z=(y-v)/N,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ix extends Ys{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Sn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new j0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends Ix{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class X0 extends Sn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ux extends Sn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ha{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,f){let h=r[o+0],m=r[o+1],v=r[o+2],x=r[o+3];const y=c[u+0],S=c[u+1],w=c[u+2],E=c[u+3];if(f===0){e[n+0]=h,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(f===1){e[n+0]=y,e[n+1]=S,e[n+2]=w,e[n+3]=E;return}if(x!==E||h!==y||m!==S||v!==w){let _=1-f;const g=h*y+m*S+v*w+x*E,N=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const W=Math.sqrt(L),O=Math.atan2(W,g*N);_=Math.sin(_*O)/W,f=Math.sin(f*O)/W}const b=f*N;if(h=h*_+y*b,m=m*_+S*b,v=v*_+w*b,x=x*_+E*b,_===1-f){const W=1/Math.sqrt(h*h+m*m+v*v+x*x);h*=W,m*=W,v*=W,x*=W}}e[n]=h,e[n+1]=m,e[n+2]=v,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,o,c,u){const f=r[o],h=r[o+1],m=r[o+2],v=r[o+3],x=c[u],y=c[u+1],S=c[u+2],w=c[u+3];return e[n]=f*w+v*x+h*S-m*y,e[n+1]=h*w+v*y+m*x-f*S,e[n+2]=m*w+v*S+f*y-h*x,e[n+3]=v*w-f*x-h*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,f=Math.cos,h=Math.sin,m=f(r/2),v=f(o/2),x=f(c/2),y=h(r/2),S=h(o/2),w=h(c/2);switch(u){case"XYZ":this._x=y*v*x+m*S*w,this._y=m*S*x-y*v*w,this._z=m*v*w+y*S*x,this._w=m*v*x-y*S*w;break;case"YXZ":this._x=y*v*x+m*S*w,this._y=m*S*x-y*v*w,this._z=m*v*w-y*S*x,this._w=m*v*x+y*S*w;break;case"ZXY":this._x=y*v*x-m*S*w,this._y=m*S*x+y*v*w,this._z=m*v*w+y*S*x,this._w=m*v*x-y*S*w;break;case"ZYX":this._x=y*v*x-m*S*w,this._y=m*S*x+y*v*w,this._z=m*v*w-y*S*x,this._w=m*v*x+y*S*w;break;case"YZX":this._x=y*v*x+m*S*w,this._y=m*S*x+y*v*w,this._z=m*v*w-y*S*x,this._w=m*v*x-y*S*w;break;case"XZY":this._x=y*v*x-m*S*w,this._y=m*S*x-y*v*w,this._z=m*v*w+y*S*x,this._w=m*v*x+y*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],f=n[5],h=n[9],m=n[2],v=n[6],x=n[10],y=r+f+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(v-h)*S,this._y=(c-m)*S,this._z=(u-o)*S}else if(r>f&&r>x){const S=2*Math.sqrt(1+r-f-x);this._w=(v-h)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+m)/S}else if(f>x){const S=2*Math.sqrt(1+f-r-x);this._w=(c-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(h+v)/S}else{const S=2*Math.sqrt(1+x-r-f);this._w=(u-o)/S,this._x=(c+m)/S,this._y=(h+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,f=n._x,h=n._y,m=n._z,v=n._w;return this._x=r*v+u*f+o*m-c*h,this._y=o*v+u*h+c*f-r*m,this._z=c*v+u*m+r*h-o*f,this._w=u*v-r*f-o*h-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,u=this._w;let f=u*e._w+r*e._x+o*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=o,this._z=c,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(h),v=Math.atan2(m,f),x=Math.sin((1-n)*v)/m,y=Math.sin(n*v)/m;return this._w=u*x+this._w*y,this._x=r*x+this._x*y,this._y=o*x+this._y*y,this._z=c*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,n=0,r=0){te.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,f=e.z,h=e.w,m=2*(u*o-f*r),v=2*(f*n-c*o),x=2*(c*r-u*n);return this.x=n+h*m+u*x-f*v,this.y=r+h*v+f*m-c*x,this.z=o+h*x+c*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,f=n.y,h=n.z;return this.x=o*h-c*f,this.y=c*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Au=new te,Jp=new Ha;class Va{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ai):ai.fromBufferAttribute(c,u),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Jo.copy(r.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),el.subVectors(this.max,Pa),Es.subVectors(e.a,Pa),ws.subVectors(e.b,Pa),Ts.subVectors(e.c,Pa),fr.subVectors(ws,Es),hr.subVectors(Ts,ws),kr.subVectors(Es,Ts);let n=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-kr.z,kr.y,fr.z,0,-fr.x,hr.z,0,-hr.x,kr.z,0,-kr.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-kr.y,kr.x,0];return!Cu(n,Es,ws,Ts,el)||(n=[1,0,0,0,1,0,0,0,1],!Cu(n,Es,ws,Ts,el))?!1:(tl.crossVectors(fr,hr),n=[tl.x,tl.y,tl.z],Cu(n,Es,ws,Ts,el))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new te,new te,new te,new te,new te,new te,new te,new te],ai=new te,Jo=new Va,Es=new te,ws=new te,Ts=new te,fr=new te,hr=new te,kr=new te,Pa=new te,el=new te,tl=new te,zr=new te;function Cu(s,e,n,r,o){for(let c=0,u=s.length-3;c<=u;c+=3){zr.fromArray(s,c);const f=o.x*Math.abs(zr.x)+o.y*Math.abs(zr.y)+o.z*Math.abs(zr.z),h=e.dot(zr),m=n.dot(zr),v=r.dot(zr);if(Math.max(-Math.max(h,m,v),Math.min(h,m,v))>f)return!1}return!0}const Fx=new Va,Na=new te,bu=new te;class Ul{constructor(e=new te,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Fx.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const n=Na.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Na,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(bu)),this.expandByPoint(Na.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new te,Ru=new te,nl=new te,pr=new te,Pu=new te,il=new te,Nu=new te;class q0{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Ru.copy(e).add(n).multiplyScalar(.5),nl.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(Ru);const c=e.distanceTo(n)*.5,u=-this.direction.dot(nl),f=pr.dot(this.direction),h=-pr.dot(nl),m=pr.lengthSq(),v=Math.abs(1-u*u);let x,y,S,w;if(v>0)if(x=u*h-f,y=u*f-h,w=c*v,x>=0)if(y>=-w)if(y<=w){const E=1/v;x*=E,y*=E,S=x*(x+u*y+2*f)+y*(u*x+y+2*h)+m}else y=c,x=Math.max(0,-(u*y+f)),S=-x*x+y*(y+2*h)+m;else y=-c,x=Math.max(0,-(u*y+f)),S=-x*x+y*(y+2*h)+m;else y<=-w?(x=Math.max(0,-(-u*c+f)),y=x>0?-c:Math.min(Math.max(-c,-h),c),S=-x*x+y*(y+2*h)+m):y<=w?(x=0,y=Math.min(Math.max(-c,-h),c),S=y*(y+2*h)+m):(x=Math.max(0,-(u*c+f)),y=x>0?c:Math.min(Math.max(-c,-h),c),S=-x*x+y*(y+2*h)+m);else y=u>0?-c:c,x=Math.max(0,-(u*y+f)),S=-x*x+y*(y+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Ru).addScaledVector(nl,y),S}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),o=Ii.dot(Ii)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,f,h;const m=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),v>=0?(c=(e.min.y-y.y)*v,u=(e.max.y-y.y)*v):(c=(e.max.y-y.y)*v,u=(e.min.y-y.y)*v),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),x>=0?(f=(e.min.z-y.z)*x,h=(e.max.z-y.z)*x):(f=(e.max.z-y.z)*x,h=(e.min.z-y.z)*x),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,o,c){Pu.subVectors(n,e),il.subVectors(r,e),Nu.crossVectors(Pu,il);let u=this.direction.dot(Nu),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;pr.subVectors(this.origin,e);const h=f*this.direction.dot(il.crossVectors(pr,il));if(h<0)return null;const m=f*this.direction.dot(Pu.cross(pr));if(m<0||h+m>u)return null;const v=-f*pr.dot(Nu);return v<0?null:this.at(v/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,o,c,u,f,h,m,v,x,y,S,w,E,_){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,h,m,v,x,y,S,w,E,_)}set(e,n,r,o,c,u,f,h,m,v,x,y,S,w,E,_){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=o,g[1]=c,g[5]=u,g[9]=f,g[13]=h,g[2]=m,g[6]=v,g[10]=x,g[14]=y,g[3]=S,g[7]=w,g[11]=E,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/As.setFromMatrixColumn(e,0).length(),c=1/As.setFromMatrixColumn(e,1).length(),u=1/As.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),m=Math.sin(o),v=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const y=u*v,S=u*x,w=f*v,E=f*x;n[0]=h*v,n[4]=-h*x,n[8]=m,n[1]=S+w*m,n[5]=y-E*m,n[9]=-f*h,n[2]=E-y*m,n[6]=w+S*m,n[10]=u*h}else if(e.order==="YXZ"){const y=h*v,S=h*x,w=m*v,E=m*x;n[0]=y+E*f,n[4]=w*f-S,n[8]=u*m,n[1]=u*x,n[5]=u*v,n[9]=-f,n[2]=S*f-w,n[6]=E+y*f,n[10]=u*h}else if(e.order==="ZXY"){const y=h*v,S=h*x,w=m*v,E=m*x;n[0]=y-E*f,n[4]=-u*x,n[8]=w+S*f,n[1]=S+w*f,n[5]=u*v,n[9]=E-y*f,n[2]=-u*m,n[6]=f,n[10]=u*h}else if(e.order==="ZYX"){const y=u*v,S=u*x,w=f*v,E=f*x;n[0]=h*v,n[4]=w*m-S,n[8]=y*m+E,n[1]=h*x,n[5]=E*m+y,n[9]=S*m-w,n[2]=-m,n[6]=f*h,n[10]=u*h}else if(e.order==="YZX"){const y=u*h,S=u*m,w=f*h,E=f*m;n[0]=h*v,n[4]=E-y*x,n[8]=w*x+S,n[1]=x,n[5]=u*v,n[9]=-f*v,n[2]=-m*v,n[6]=S*x+w,n[10]=y-E*x}else if(e.order==="XZY"){const y=u*h,S=u*m,w=f*h,E=f*m;n[0]=h*v,n[4]=-x,n[8]=m*v,n[1]=y*x+E,n[5]=u*v,n[9]=S*x-w,n[2]=w*x-S,n[6]=f*v,n[10]=E*x+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ox,e,kx)}lookAt(e,n,r){const o=this.elements;return kn.subVectors(e,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),mr.crossVectors(r,kn),mr.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),mr.crossVectors(r,kn)),mr.normalize(),rl.crossVectors(kn,mr),o[0]=mr.x,o[4]=rl.x,o[8]=kn.x,o[1]=mr.y,o[5]=rl.y,o[9]=kn.y,o[2]=mr.z,o[6]=rl.z,o[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[4],h=r[8],m=r[12],v=r[1],x=r[5],y=r[9],S=r[13],w=r[2],E=r[6],_=r[10],g=r[14],N=r[3],L=r[7],b=r[11],W=r[15],O=o[0],U=o[4],z=o[8],P=o[12],A=o[1],B=o[5],j=o[9],X=o[13],Z=o[2],ne=o[6],V=o[10],Q=o[14],k=o[3],oe=o[7],re=o[11],F=o[15];return c[0]=u*O+f*A+h*Z+m*k,c[4]=u*U+f*B+h*ne+m*oe,c[8]=u*z+f*j+h*V+m*re,c[12]=u*P+f*X+h*Q+m*F,c[1]=v*O+x*A+y*Z+S*k,c[5]=v*U+x*B+y*ne+S*oe,c[9]=v*z+x*j+y*V+S*re,c[13]=v*P+x*X+y*Q+S*F,c[2]=w*O+E*A+_*Z+g*k,c[6]=w*U+E*B+_*ne+g*oe,c[10]=w*z+E*j+_*V+g*re,c[14]=w*P+E*X+_*Q+g*F,c[3]=N*O+L*A+b*Z+W*k,c[7]=N*U+L*B+b*ne+W*oe,c[11]=N*z+L*j+b*V+W*re,c[15]=N*P+L*X+b*Q+W*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],f=e[5],h=e[9],m=e[13],v=e[2],x=e[6],y=e[10],S=e[14],w=e[3],E=e[7],_=e[11],g=e[15];return w*(+c*h*x-o*m*x-c*f*y+r*m*y+o*f*S-r*h*S)+E*(+n*h*S-n*m*y+c*u*y-o*u*S+o*m*v-c*h*v)+_*(+n*m*x-n*f*S-c*u*x+r*u*S+c*f*v-r*m*v)+g*(-o*f*v-n*h*x+n*f*y+o*u*x-r*u*y+r*h*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],v=e[8],x=e[9],y=e[10],S=e[11],w=e[12],E=e[13],_=e[14],g=e[15],N=x*_*m-E*y*m+E*h*S-f*_*S-x*h*g+f*y*g,L=w*y*m-v*_*m-w*h*S+u*_*S+v*h*g-u*y*g,b=v*E*m-w*x*m+w*f*S-u*E*S-v*f*g+u*x*g,W=w*x*h-v*E*h-w*f*y+u*E*y+v*f*_-u*x*_,O=n*N+r*L+o*b+c*W;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return e[0]=N*U,e[1]=(E*y*c-x*_*c-E*o*S+r*_*S+x*o*g-r*y*g)*U,e[2]=(f*_*c-E*h*c+E*o*m-r*_*m-f*o*g+r*h*g)*U,e[3]=(x*h*c-f*y*c-x*o*m+r*y*m+f*o*S-r*h*S)*U,e[4]=L*U,e[5]=(v*_*c-w*y*c+w*o*S-n*_*S-v*o*g+n*y*g)*U,e[6]=(w*h*c-u*_*c-w*o*m+n*_*m+u*o*g-n*h*g)*U,e[7]=(u*y*c-v*h*c+v*o*m-n*y*m-u*o*S+n*h*S)*U,e[8]=b*U,e[9]=(w*x*c-v*E*c-w*r*S+n*E*S+v*r*g-n*x*g)*U,e[10]=(u*E*c-w*f*c+w*r*m-n*E*m-u*r*g+n*f*g)*U,e[11]=(v*f*c-u*x*c-v*r*m+n*x*m+u*r*S-n*f*S)*U,e[12]=W*U,e[13]=(v*E*o-w*x*o+w*r*y-n*E*y-v*r*_+n*x*_)*U,e[14]=(w*f*o-u*E*o-w*r*h+n*E*h+u*r*_-n*f*_)*U,e[15]=(u*x*o-v*f*o+v*r*h-n*x*h-u*r*y+n*f*y)*U,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,f=e.y,h=e.z,m=c*u,v=c*f;return this.set(m*u+r,m*f-o*h,m*h+o*f,0,m*f+o*h,v*f+r,v*h-o*u,0,m*h-o*f,v*h+o*u,c*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,f=n._z,h=n._w,m=c+c,v=u+u,x=f+f,y=c*m,S=c*v,w=c*x,E=u*v,_=u*x,g=f*x,N=h*m,L=h*v,b=h*x,W=r.x,O=r.y,U=r.z;return o[0]=(1-(E+g))*W,o[1]=(S+b)*W,o[2]=(w-L)*W,o[3]=0,o[4]=(S-b)*O,o[5]=(1-(y+g))*O,o[6]=(_+N)*O,o[7]=0,o[8]=(w+L)*U,o[9]=(_-N)*U,o[10]=(1-(y+E))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=As.set(o[0],o[1],o[2]).length();const u=As.set(o[4],o[5],o[6]).length(),f=As.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],oi.copy(this);const m=1/c,v=1/u,x=1/f;return oi.elements[0]*=m,oi.elements[1]*=m,oi.elements[2]*=m,oi.elements[4]*=v,oi.elements[5]*=v,oi.elements[6]*=v,oi.elements[8]*=x,oi.elements[9]*=x,oi.elements[10]*=x,n.setFromRotationMatrix(oi),r.x=c,r.y=u,r.z=f,this}makePerspective(e,n,r,o,c,u,f=Vi){const h=this.elements,m=2*c/(n-e),v=2*c/(r-o),x=(n+e)/(n-e),y=(r+o)/(r-o);let S,w;if(f===Vi)S=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(f===bl)S=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,c,u,f=Vi){const h=this.elements,m=1/(n-e),v=1/(r-o),x=1/(u-c),y=(n+e)*m,S=(r+o)*v;let w,E;if(f===Vi)w=(u+c)*x,E=-2*x;else if(f===bl)w=c*x,E=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*v,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=E,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const As=new te,oi=new Bt,Ox=new te(0,0,0),kx=new te(1,1,1),mr=new te,rl=new te,kn=new te,em=new Bt,tm=new Ha;class Si{constructor(e=0,n=0,r=0,o=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],f=o[8],h=o[1],m=o[5],v=o[9],x=o[2],y=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-Nn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(em,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tm.setFromEuler(this),this.setFromQuaternion(tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Y0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zx=0;const nm=new te,Cs=new Ha,Ui=new Bt,sl=new te,La=new te,Bx=new te,Hx=new Ha,im=new te(1,0,0),rm=new te(0,1,0),sm=new te(0,0,1),am={type:"added"},Vx={type:"removed"},bs={type:"childadded",child:null},Lu={type:"childremoved",child:null};class on extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=Ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new te,n=new Si,r=new Ha,o=new te(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ct}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(im,e)}rotateY(e){return this.rotateOnAxis(rm,e)}rotateZ(e){return this.rotateOnAxis(sm,e)}translateOnAxis(e,n){return nm.copy(e).applyQuaternion(this.quaternion),this.position.add(nm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(im,e)}translateY(e){return this.translateOnAxis(rm,e)}translateZ(e){return this.translateOnAxis(sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?sl.copy(e):sl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(La,sl,this.up):Ui.lookAt(sl,La,this.up),this.quaternion.setFromRotationMatrix(Ui),o&&(Ui.extractRotation(o.matrixWorld),Cs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(am),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Vx),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(am),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,Bx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,Hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,v=h.length;m<v;m++){const x=h[m];c(e.shapes,x)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(c(e.materials,this.material[h]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(c(e.animations,h))}}if(n){const f=u(e.geometries),h=u(e.materials),m=u(e.textures),v=u(e.images),x=u(e.shapes),y=u(e.skeletons),S=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(f){const h=[];for(const m in f){const v=f[m];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}on.DEFAULT_UP=new te(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new te,Fi=new te,Du=new te,Oi=new te,Rs=new te,Ps=new te,om=new te,Iu=new te,Uu=new te,Fu=new te,Ou=new Vt,ku=new Vt,zu=new Vt;class ci{constructor(e=new te,n=new te,r=new te){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),li.subVectors(e,n),o.cross(li);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){li.subVectors(o,n),Fi.subVectors(r,n),Du.subVectors(e,n);const u=li.dot(li),f=li.dot(Fi),h=li.dot(Du),m=Fi.dot(Fi),v=Fi.dot(Du),x=u*m-f*f;if(x===0)return c.set(0,0,0),null;const y=1/x,S=(m*h-f*v)*y,w=(u*v-f*h)*y;return c.set(1-S-w,w,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,r,o,c,u,f,h){return this.getBarycoord(e,n,r,o,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Oi.x),h.addScaledVector(u,Oi.y),h.addScaledVector(f,Oi.z),h)}static getInterpolatedAttribute(e,n,r,o,c,u){return Ou.setScalar(0),ku.setScalar(0),zu.setScalar(0),Ou.fromBufferAttribute(e,n),ku.fromBufferAttribute(e,r),zu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ou,c.x),u.addScaledVector(ku,c.y),u.addScaledVector(zu,c.z),u}static isFrontFacing(e,n,r,o){return li.subVectors(r,n),Fi.subVectors(e,n),li.cross(Fi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),li.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return ci.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,f;Rs.subVectors(o,r),Ps.subVectors(c,r),Iu.subVectors(e,r);const h=Rs.dot(Iu),m=Ps.dot(Iu);if(h<=0&&m<=0)return n.copy(r);Uu.subVectors(e,o);const v=Rs.dot(Uu),x=Ps.dot(Uu);if(v>=0&&x<=v)return n.copy(o);const y=h*x-v*m;if(y<=0&&h>=0&&v<=0)return u=h/(h-v),n.copy(r).addScaledVector(Rs,u);Fu.subVectors(e,c);const S=Rs.dot(Fu),w=Ps.dot(Fu);if(w>=0&&S<=w)return n.copy(c);const E=S*m-h*w;if(E<=0&&m>=0&&w<=0)return f=m/(m-w),n.copy(r).addScaledVector(Ps,f);const _=v*w-S*x;if(_<=0&&x-v>=0&&S-w>=0)return om.subVectors(c,o),f=(x-v)/(x-v+(S-w)),n.copy(o).addScaledVector(om,f);const g=1/(_+E+y);return u=E*g,f=y*g,n.copy(r).addScaledVector(Rs,u).addScaledVector(Ps,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},al={h:0,s:0,l:0};function Bu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class vt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=St.workingColorSpace){return this.r=e,this.g=n,this.b=r,St.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=St.workingColorSpace){if(e=Ax(e,1),n=Nn(n,0,1),r=Nn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Bu(u,c,e+1/3),this.g=Bu(u,c,e),this.b=Bu(u,c,e-1/3)}return St.toWorkingColorSpace(this,o),this}setStyle(e,n=Kn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=$0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return St.fromWorkingColorSpace(mn.copy(this),e),Math.round(Nn(mn.r*255,0,255))*65536+Math.round(Nn(mn.g*255,0,255))*256+Math.round(Nn(mn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=St.workingColorSpace){St.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,o=mn.g,c=mn.b,u=Math.max(r,o,c),f=Math.min(r,o,c);let h,m;const v=(f+u)/2;if(f===u)h=0,m=0;else{const x=u-f;switch(m=v<=.5?x/(u+f):x/(2-u-f),u){case r:h=(o-c)/x+(o<c?6:0);break;case o:h=(c-r)/x+2;break;case c:h=(r-o)/x+4;break}h/=6}return e.h=h,e.s=m,e.l=v,e}getRGB(e,n=St.workingColorSpace){return St.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Kn){St.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,o=mn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(al);const r=Eu(gr.h,al.h,n),o=Eu(gr.s,al.s,n),c=Eu(gr.l,al.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new vt;vt.NAMES=$0;let Gx=0;class $s extends Ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Ba(),this.name="",this.blending=Os,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=td,this.blendDst=nd,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==Sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==td&&(r.blendSrc=this.blendSrc),this.blendDst!==nd&&(r.blendDst=this.blendDst),this.blendEquation!==Xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const f in c){const h=c[f];delete h.metadata,u.push(h)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rl extends $s{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=P0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new te,ol=new _t;class yi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=jp,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ol.fromBufferAttribute(this,n),ol.applyMatrix3(e),this.setXY(n,ol.x,ol.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix3(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ra(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ra(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ra(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ra(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ra(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),o=Pn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),o=Pn(o,this.array),c=Pn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jp&&(e.usage=this.usage),e}}class K0 extends yi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Z0 extends yi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Xt extends yi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Wx=0;const $n=new Bt,Hu=new on,Ns=new te,zn=new Va,Da=new Va,rn=new te;class Bn extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W0(e)?Z0:K0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ct().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,r){return $n.makeTranslation(e,n,r),this.applyMatrix4($n),this}scale(e,n,r){return $n.makeScale(e,n,r),this.applyMatrix4($n),this}lookAt(e){return Hu.lookAt(e),Hu.updateMatrix(),this.applyMatrix4(Hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Xt(r,3))}else{for(let r=0,o=n.count;r<o;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];zn.setFromBufferAttribute(c),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ul);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];Da.setFromBufferAttribute(f),this.morphTargetsRelative?(rn.addVectors(zn.min,Da.min),zn.expandByPoint(rn),rn.addVectors(zn.max,Da.max),zn.expandByPoint(rn)):(zn.expandByPoint(Da.min),zn.expandByPoint(Da.max))}zn.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)rn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(rn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],h=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)rn.fromBufferAttribute(f,m),h&&(Ns.fromBufferAttribute(e,m),rn.add(Ns)),o=Math.max(o,r.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let z=0;z<r.count;z++)f[z]=new te,h[z]=new te;const m=new te,v=new te,x=new te,y=new _t,S=new _t,w=new _t,E=new te,_=new te;function g(z,P,A){m.fromBufferAttribute(r,z),v.fromBufferAttribute(r,P),x.fromBufferAttribute(r,A),y.fromBufferAttribute(c,z),S.fromBufferAttribute(c,P),w.fromBufferAttribute(c,A),v.sub(m),x.sub(m),S.sub(y),w.sub(y);const B=1/(S.x*w.y-w.x*S.y);isFinite(B)&&(E.copy(v).multiplyScalar(w.y).addScaledVector(x,-S.y).multiplyScalar(B),_.copy(x).multiplyScalar(S.x).addScaledVector(v,-w.x).multiplyScalar(B),f[z].add(E),f[P].add(E),f[A].add(E),h[z].add(_),h[P].add(_),h[A].add(_))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let z=0,P=N.length;z<P;++z){const A=N[z],B=A.start,j=A.count;for(let X=B,Z=B+j;X<Z;X+=3)g(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const L=new te,b=new te,W=new te,O=new te;function U(z){W.fromBufferAttribute(o,z),O.copy(W);const P=f[z];L.copy(P),L.sub(W.multiplyScalar(W.dot(P))).normalize(),b.crossVectors(O,P);const B=b.dot(h[z])<0?-1:1;u.setXYZW(z,L.x,L.y,L.z,B)}for(let z=0,P=N.length;z<P;++z){const A=N[z],B=A.start,j=A.count;for(let X=B,Z=B+j;X<Z;X+=3)U(e.getX(X+0)),U(e.getX(X+1)),U(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const o=new te,c=new te,u=new te,f=new te,h=new te,m=new te,v=new te,x=new te;if(e)for(let y=0,S=e.count;y<S;y+=3){const w=e.getX(y+0),E=e.getX(y+1),_=e.getX(y+2);o.fromBufferAttribute(n,w),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,_),v.subVectors(u,c),x.subVectors(o,c),v.cross(x),f.fromBufferAttribute(r,w),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,_),f.add(v),h.add(v),m.add(v),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let y=0,S=n.count;y<S;y+=3)o.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),u.fromBufferAttribute(n,y+2),v.subVectors(u,c),x.subVectors(o,c),v.cross(x),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(f,h){const m=f.array,v=f.itemSize,x=f.normalized,y=new m.constructor(h.length*v);let S=0,w=0;for(let E=0,_=h.length;E<_;E++){f.isInterleavedBufferAttribute?S=h[E]*f.data.stride+f.offset:S=h[E]*v;for(let g=0;g<v;g++)y[w++]=m[S++]}return new yi(y,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bn,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],m=e(h,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const h=[],m=c[f];for(let v=0,x=m.length;v<x;v++){const y=m[v],S=e(y,r);h.push(S)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],v=[];for(let x=0,y=m.length;x<y;x++){const S=m[x];v.push(S.toJSON(e.data))}v.length>0&&(o[h]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const c=e.morphAttributes;for(const m in c){const v=[],x=c[m];for(let y=0,S=x.length;y<S;y++)v.push(x[y].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const x=u[m];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lm=new Bt,Br=new q0,ll=new Ul,cm=new te,cl=new te,ul=new te,dl=new te,Vu=new te,fl=new te,um=new te,hl=new te;class Ln extends on{constructor(e=new Bn,n=new Rl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){fl.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const v=f[h],x=c[h];v!==0&&(Vu.fromBufferAttribute(x,e),u?fl.addScaledVector(Vu,v):fl.addScaledVector(Vu.sub(n),v))}n.add(fl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ll.copy(r.boundingSphere),ll.applyMatrix4(c),Br.copy(e.ray).recast(e.near),!(ll.containsPoint(Br.origin)===!1&&(Br.intersectSphere(ll,cm)===null||Br.origin.distanceToSquared(cm)>(e.far-e.near)**2))&&(lm.copy(c).invert(),Br.copy(e.ray).applyMatrix4(lm),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,f=c.index,h=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,y=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,E=y.length;w<E;w++){const _=y[w],g=u[_.materialIndex],N=Math.max(_.start,S.start),L=Math.min(f.count,Math.min(_.start+_.count,S.start+S.count));for(let b=N,W=L;b<W;b+=3){const O=f.getX(b),U=f.getX(b+1),z=f.getX(b+2);o=pl(this,g,e,r,m,v,x,O,U,z),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const w=Math.max(0,S.start),E=Math.min(f.count,S.start+S.count);for(let _=w,g=E;_<g;_+=3){const N=f.getX(_),L=f.getX(_+1),b=f.getX(_+2);o=pl(this,u,e,r,m,v,x,N,L,b),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,E=y.length;w<E;w++){const _=y[w],g=u[_.materialIndex],N=Math.max(_.start,S.start),L=Math.min(h.count,Math.min(_.start+_.count,S.start+S.count));for(let b=N,W=L;b<W;b+=3){const O=b,U=b+1,z=b+2;o=pl(this,g,e,r,m,v,x,O,U,z),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const w=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let _=w,g=E;_<g;_+=3){const N=_,L=_+1,b=_+2;o=pl(this,u,e,r,m,v,x,N,L,b),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}}}function jx(s,e,n,r,o,c,u,f){let h;if(e.side===Dn?h=r.intersectTriangle(u,c,o,!0,f):h=r.intersectTriangle(o,c,u,e.side===Sr,f),h===null)return null;hl.copy(f),hl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(hl);return m<n.near||m>n.far?null:{distance:m,point:hl.clone(),object:s}}function pl(s,e,n,r,o,c,u,f,h,m){s.getVertexPosition(f,cl),s.getVertexPosition(h,ul),s.getVertexPosition(m,dl);const v=jx(s,e,n,r,cl,ul,dl,um);if(v){const x=new te;ci.getBarycoord(um,cl,ul,dl,x),o&&(v.uv=ci.getInterpolatedAttribute(o,f,h,m,x,new _t)),c&&(v.uv1=ci.getInterpolatedAttribute(c,f,h,m,x,new _t)),u&&(v.normal=ci.getInterpolatedAttribute(u,f,h,m,x,new te),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:f,b:h,c:m,normal:new te,materialIndex:0};ci.getNormal(cl,ul,dl,y.normal),v.face=y,v.barycoord=x}return v}class Ga extends Bn{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const h=[],m=[],v=[],x=[];let y=0,S=0;w("z","y","x",-1,-1,r,n,e,u,c,0),w("z","y","x",1,-1,r,n,-e,u,c,1),w("x","z","y",1,1,e,r,n,o,u,2),w("x","z","y",1,-1,e,r,-n,o,u,3),w("x","y","z",1,-1,e,n,r,o,c,4),w("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(h),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(x,2));function w(E,_,g,N,L,b,W,O,U,z,P){const A=b/U,B=W/z,j=b/2,X=W/2,Z=O/2,ne=U+1,V=z+1;let Q=0,k=0;const oe=new te;for(let re=0;re<V;re++){const F=re*B-X;for(let ie=0;ie<ne;ie++){const Te=ie*A-j;oe[E]=Te*N,oe[_]=F*L,oe[g]=Z,m.push(oe.x,oe.y,oe.z),oe[E]=0,oe[_]=0,oe[g]=O>0?1:-1,v.push(oe.x,oe.y,oe.z),x.push(ie/U),x.push(1-re/z),Q+=1}}for(let re=0;re<z;re++)for(let F=0;F<U;F++){const ie=y+F+ne*re,Te=y+F+ne*(re+1),J=y+(F+1)+ne*(re+1),fe=y+(F+1)+ne*re;h.push(ie,Te,fe),h.push(Te,J,fe),k+=6}f.addGroup(S,k,P),S+=k,y+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function yn(s){const e={};for(let n=0;n<s.length;n++){const r=js(s[n]);for(const o in r)e[o]=r[o]}return e}function Xx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Q0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const qx={clone:js,merge:yn};var Yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$x=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends $s{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yx,this.fragmentShader=$x,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=Xx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class J0 extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new te,dm=new _t,fm=new _t;class Zn extends J0{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bd*2*Math.atan(Math.tan(Mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,n){return this.getViewBounds(e,dm,fm),n.subVectors(fm,dm)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Mu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/h,n-=u.offsetY*r/m,o*=u.width/h,r*=u.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ls=-90,Ds=1;class Kx extends on{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(Ls,Ds,e,n);o.layers=this.layers,this.add(o);const c=new Zn(Ls,Ds,e,n);c.layers=this.layers,this.add(c);const u=new Zn(Ls,Ds,e,n);u.layers=this.layers,this.add(u);const f=new Zn(Ls,Ds,e,n);f.layers=this.layers,this.add(f);const h=new Zn(Ls,Ds,e,n);h.layers=this.layers,this.add(h);const m=new Zn(Ls,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,f,h]=n;for(const m of n)this.remove(m);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===bl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,h,m,v]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,h),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(x,y,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class eg extends Sn{constructor(e,n,r,o,c,u,f,h,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Hs,super(e,n,r,o,c,u,f,h,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zx extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new eg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ga(5,5,5),c=new Mr({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:xr});c.uniforms.tEquirect.value=n;const u=new Ln(o,c),f=n.minFilter;return n.minFilter===Yr&&(n.minFilter=xi),new Kx(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}const Gu=new te,Qx=new te,Jx=new ct;class Wr{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Gu.subVectors(r,n).cross(Qx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Gu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Jx.getNormalMatrix(e),o=this.coplanarPoint(Gu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Ul,ml=new te;class Kd{constructor(e=new Wr,n=new Wr,r=new Wr,o=new Wr,c=new Wr,u=new Wr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Vi){const r=this.planes,o=e.elements,c=o[0],u=o[1],f=o[2],h=o[3],m=o[4],v=o[5],x=o[6],y=o[7],S=o[8],w=o[9],E=o[10],_=o[11],g=o[12],N=o[13],L=o[14],b=o[15];if(r[0].setComponents(h-c,y-m,_-S,b-g).normalize(),r[1].setComponents(h+c,y+m,_+S,b+g).normalize(),r[2].setComponents(h+u,y+v,_+w,b+N).normalize(),r[3].setComponents(h-u,y-v,_-w,b-N).normalize(),r[4].setComponents(h-f,y-x,_-E,b-L).normalize(),n===Vi)r[5].setComponents(h+f,y+x,_+E,b+L).normalize();else if(n===bl)r[5].setComponents(f,x,E,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(ml.x=o.normal.x>0?e.max.x:e.min.x,ml.y=o.normal.y>0?e.max.y:e.min.y,ml.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tg(){let s=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function ey(s){const e=new WeakMap;function n(f,h){const m=f.array,v=f.usage,x=m.byteLength,y=s.createBuffer();s.bindBuffer(h,y),s.bufferData(h,m,v),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,h,m){const v=h.array,x=h.updateRanges;if(s.bindBuffer(m,f),x.length===0)s.bufferSubData(m,0,v);else{x.sort((S,w)=>S.start-w.start);let y=0;for(let S=1;S<x.length;S++){const w=x[y],E=x[S];E.start<=w.start+w.count+1?w.count=Math.max(w.count,E.start+E.count-w.start):(++y,x[y]=E)}x.length=y+1;for(let S=0,w=x.length;S<w;S++){const E=x[S];s.bufferSubData(m,E.start*v.BYTES_PER_ELEMENT,v,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:o,remove:c,update:u}}class Wa extends Bn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,f=Math.floor(r),h=Math.floor(o),m=f+1,v=h+1,x=e/f,y=n/h,S=[],w=[],E=[],_=[];for(let g=0;g<v;g++){const N=g*y-u;for(let L=0;L<m;L++){const b=L*x-c;w.push(b,-N,0),E.push(0,0,1),_.push(L/f),_.push(1-g/h)}}for(let g=0;g<h;g++)for(let N=0;N<f;N++){const L=N+m*g,b=N+m*(g+1),W=N+1+m*(g+1),O=N+1+m*g;S.push(L,b,O),S.push(b,W,O)}this.setIndex(S),this.setAttribute("position",new Xt(w,3)),this.setAttribute("normal",new Xt(E,3)),this.setAttribute("uv",new Xt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.widthSegments,e.heightSegments)}}var ty=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ny=`#ifdef USE_ALPHAHASH
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
#endif`,iy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ry=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ay=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oy=`#ifdef USE_AOMAP
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
#endif`,ly=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cy=`#ifdef USE_BATCHING
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
#endif`,uy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,py=`#ifdef USE_IRIDESCENCE
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
#endif`,my=`#ifdef USE_BUMPMAP
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
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wy=`#define PI 3.141592653589793
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
} // validated`,Ty=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ay=`vec3 transformedNormal = objectNormal;
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
#endif`,by=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Py=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ly=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dy=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uy=`#ifdef USE_ENVMAP
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
#endif`,Fy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oy=`#ifdef USE_ENVMAP
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
#endif`,ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,By=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vy=`#ifdef USE_GRADIENTMAP
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
}`,Gy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xy=`uniform bool receiveShadow;
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
material.diffuseColor = diffuseColor.rgb;`,$y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qy=`PhysicalMaterial material;
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
#endif`,Jy=`struct PhysicalMaterial {
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
}`,eS=`
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
#endif`,tS=`#if defined( RE_IndirectDiffuse )
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
#endif`,nS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uS=`#if defined( USE_POINTS_UV )
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
#endif`,dS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`#ifdef USE_MORPHTARGETS
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
#endif`,vS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_S=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ES=`#ifdef USE_NORMALMAP
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
#endif`,wS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AS=`#ifdef USE_CLEARCOATMAP
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
#endif`,bS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,US=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zS=`float getShadowMask() {
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
}`,BS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HS=`#ifdef USE_SKINNING
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
#endif`,VS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GS=`#ifdef USE_SKINNING
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
#endif`,WS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XS=`#if defined( TONE_MAPPING )
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
#endif`,$S=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tM=`uniform sampler2D t2D;
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`#include <common>
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
}`,oM=`#if DEPTH_PACKING == 3200
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
}`,lM=`#define DISTANCE
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
}`,cM=`#define DISTANCE
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
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`uniform float scale;
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
}`,hM=`uniform vec3 diffuse;
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
}`,pM=`#include <common>
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
}`,mM=`uniform vec3 diffuse;
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
}`,gM=`#define LAMBERT
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
}`,vM=`#define LAMBERT
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
}`,_M=`#define MATCAP
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
}`,xM=`#define MATCAP
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
}`,yM=`#define NORMAL
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
}`,SM=`#define NORMAL
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
}`,MM=`#define PHONG
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
}`,EM=`#define PHONG
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
}`,wM=`#define STANDARD
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
}`,TM=`#define STANDARD
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
}`,AM=`#define TOON
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
}`,bM=`uniform float size;
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
}`,RM=`uniform vec3 diffuse;
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
}`,PM=`#include <common>
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
}`,NM=`uniform vec3 color;
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
}`,LM=`uniform float rotation;
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
}`,DM=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:ty,alphahash_pars_fragment:ny,alphamap_fragment:iy,alphamap_pars_fragment:ry,alphatest_fragment:sy,alphatest_pars_fragment:ay,aomap_fragment:oy,aomap_pars_fragment:ly,batching_pars_vertex:cy,batching_vertex:uy,begin_vertex:dy,beginnormal_vertex:fy,bsdfs:hy,iridescence_fragment:py,bumpmap_pars_fragment:my,clipping_planes_fragment:gy,clipping_planes_pars_fragment:vy,clipping_planes_pars_vertex:_y,clipping_planes_vertex:xy,color_fragment:yy,color_pars_fragment:Sy,color_pars_vertex:My,color_vertex:Ey,common:wy,cube_uv_reflection_fragment:Ty,defaultnormal_vertex:Ay,displacementmap_pars_vertex:Cy,displacementmap_vertex:by,emissivemap_fragment:Ry,emissivemap_pars_fragment:Py,colorspace_fragment:Ny,colorspace_pars_fragment:Ly,envmap_fragment:Dy,envmap_common_pars_fragment:Iy,envmap_pars_fragment:Uy,envmap_pars_vertex:Fy,envmap_physical_pars_fragment:qy,envmap_vertex:Oy,fog_vertex:ky,fog_pars_vertex:zy,fog_fragment:By,fog_pars_fragment:Hy,gradientmap_pars_fragment:Vy,lightmap_pars_fragment:Gy,lights_lambert_fragment:Wy,lights_lambert_pars_fragment:jy,lights_pars_begin:Xy,lights_toon_fragment:Yy,lights_toon_pars_fragment:$y,lights_phong_fragment:Ky,lights_phong_pars_fragment:Zy,lights_physical_fragment:Qy,lights_physical_pars_fragment:Jy,lights_fragment_begin:eS,lights_fragment_maps:tS,lights_fragment_end:nS,logdepthbuf_fragment:iS,logdepthbuf_pars_fragment:rS,logdepthbuf_pars_vertex:sS,logdepthbuf_vertex:aS,map_fragment:oS,map_pars_fragment:lS,map_particle_fragment:cS,map_particle_pars_fragment:uS,metalnessmap_fragment:dS,metalnessmap_pars_fragment:fS,morphinstance_vertex:hS,morphcolor_vertex:pS,morphnormal_vertex:mS,morphtarget_pars_vertex:gS,morphtarget_vertex:vS,normal_fragment_begin:_S,normal_fragment_maps:xS,normal_pars_fragment:yS,normal_pars_vertex:SS,normal_vertex:MS,normalmap_pars_fragment:ES,clearcoat_normal_fragment_begin:wS,clearcoat_normal_fragment_maps:TS,clearcoat_pars_fragment:AS,iridescence_pars_fragment:CS,opaque_fragment:bS,packing:RS,premultiplied_alpha_fragment:PS,project_vertex:NS,dithering_fragment:LS,dithering_pars_fragment:DS,roughnessmap_fragment:IS,roughnessmap_pars_fragment:US,shadowmap_pars_fragment:FS,shadowmap_pars_vertex:OS,shadowmap_vertex:kS,shadowmask_pars_fragment:zS,skinbase_vertex:BS,skinning_pars_vertex:HS,skinning_vertex:VS,skinnormal_vertex:GS,specularmap_fragment:WS,specularmap_pars_fragment:jS,tonemapping_fragment:XS,tonemapping_pars_fragment:qS,transmission_fragment:YS,transmission_pars_fragment:$S,uv_pars_fragment:KS,uv_pars_vertex:ZS,uv_vertex:QS,worldpos_vertex:JS,background_vert:eM,background_frag:tM,backgroundCube_vert:nM,backgroundCube_frag:iM,cube_vert:rM,cube_frag:sM,depth_vert:aM,depth_frag:oM,distanceRGBA_vert:lM,distanceRGBA_frag:cM,equirect_vert:uM,equirect_frag:dM,linedashed_vert:fM,linedashed_frag:hM,meshbasic_vert:pM,meshbasic_frag:mM,meshlambert_vert:gM,meshlambert_frag:vM,meshmatcap_vert:_M,meshmatcap_frag:xM,meshnormal_vert:yM,meshnormal_frag:SM,meshphong_vert:MM,meshphong_frag:EM,meshphysical_vert:wM,meshphysical_frag:TM,meshtoon_vert:AM,meshtoon_frag:CM,points_vert:bM,points_frag:RM,shadow_vert:PM,shadow_frag:NM,sprite_vert:LM,sprite_frag:DM},Pe={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},_i={basic:{uniforms:yn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:yn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new vt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:yn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:yn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:yn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new vt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:yn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:yn([Pe.points,Pe.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:yn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:yn([Pe.common,Pe.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:yn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:yn([Pe.sprite,Pe.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:yn([Pe.common,Pe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:yn([Pe.lights,Pe.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};_i.physical={uniforms:yn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const gl={r:0,b:0,g:0},Vr=new Si,IM=new Bt;function UM(s,e,n,r,o,c,u){const f=new vt(0);let h=c===!0?0:1,m,v,x=null,y=0,S=null;function w(N){let L=N.isScene===!0?N.background:null;return L&&L.isTexture&&(L=(N.backgroundBlurriness>0?n:e).get(L)),L}function E(N){let L=!1;const b=w(N);b===null?g(f,h):b&&b.isColor&&(g(b,1),L=!0);const W=s.xr.getEnvironmentBlendMode();W==="additive"?r.buffers.color.setClear(0,0,0,1,u):W==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(N,L){const b=w(L);b&&(b.isCubeTexture||b.mapping===Dl)?(v===void 0&&(v=new Ln(new Ga(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:js(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(W,O,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Vr.copy(L.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),v.material.uniforms.envMap.value=b,v.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(IM.makeRotationFromEuler(Vr)),v.material.toneMapped=St.getTransfer(b.colorSpace)!==Nt,(x!==b||y!==b.version||S!==s.toneMapping)&&(v.material.needsUpdate=!0,x=b,y=b.version,S=s.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):b&&b.isTexture&&(m===void 0&&(m=new Ln(new Wa(2,2),new Mr({name:"BackgroundMaterial",uniforms:js(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=b,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=St.getTransfer(b.colorSpace)!==Nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),m.material.uniforms.uvTransform.value.copy(b.matrix),(x!==b||y!==b.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,x=b,y=b.version,S=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function g(N,L){N.getRGB(gl,Q0(s)),r.buffers.color.setClear(gl.r,gl.g,gl.b,L,u)}return{getClearColor:function(){return f},setClearColor:function(N,L=1){f.set(N),h=L,g(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,g(f,h)},render:E,addToRenderList:_}}function FM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let c=o,u=!1;function f(A,B,j,X,Z){let ne=!1;const V=x(X,j,B);c!==V&&(c=V,m(c.object)),ne=S(A,X,j,Z),ne&&w(A,X,j,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),(ne||u)&&(u=!1,b(A,B,j,X),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function h(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function v(A){return s.deleteVertexArray(A)}function x(A,B,j){const X=j.wireframe===!0;let Z=r[A.id];Z===void 0&&(Z={},r[A.id]=Z);let ne=Z[B.id];ne===void 0&&(ne={},Z[B.id]=ne);let V=ne[X];return V===void 0&&(V=y(h()),ne[X]=V),V}function y(A){const B=[],j=[],X=[];for(let Z=0;Z<n;Z++)B[Z]=0,j[Z]=0,X[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:j,attributeDivisors:X,object:A,attributes:{},index:null}}function S(A,B,j,X){const Z=c.attributes,ne=B.attributes;let V=0;const Q=j.getAttributes();for(const k in Q)if(Q[k].location>=0){const re=Z[k];let F=ne[k];if(F===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(F=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(F=A.instanceColor)),re===void 0||re.attribute!==F||F&&re.data!==F.data)return!0;V++}return c.attributesNum!==V||c.index!==X}function w(A,B,j,X){const Z={},ne=B.attributes;let V=0;const Q=j.getAttributes();for(const k in Q)if(Q[k].location>=0){let re=ne[k];re===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(re=A.instanceColor));const F={};F.attribute=re,re&&re.data&&(F.data=re.data),Z[k]=F,V++}c.attributes=Z,c.attributesNum=V,c.index=X}function E(){const A=c.newAttributes;for(let B=0,j=A.length;B<j;B++)A[B]=0}function _(A){g(A,0)}function g(A,B){const j=c.newAttributes,X=c.enabledAttributes,Z=c.attributeDivisors;j[A]=1,X[A]===0&&(s.enableVertexAttribArray(A),X[A]=1),Z[A]!==B&&(s.vertexAttribDivisor(A,B),Z[A]=B)}function N(){const A=c.newAttributes,B=c.enabledAttributes;for(let j=0,X=B.length;j<X;j++)B[j]!==A[j]&&(s.disableVertexAttribArray(j),B[j]=0)}function L(A,B,j,X,Z,ne,V){V===!0?s.vertexAttribIPointer(A,B,j,Z,ne):s.vertexAttribPointer(A,B,j,X,Z,ne)}function b(A,B,j,X){E();const Z=X.attributes,ne=j.getAttributes(),V=B.defaultAttributeValues;for(const Q in ne){const k=ne[Q];if(k.location>=0){let oe=Z[Q];if(oe===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(oe=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(oe=A.instanceColor)),oe!==void 0){const re=oe.normalized,F=oe.itemSize,ie=e.get(oe);if(ie===void 0)continue;const Te=ie.buffer,J=ie.type,fe=ie.bytesPerElement,ge=J===s.INT||J===s.UNSIGNED_INT||oe.gpuType===Wd;if(oe.isInterleavedBufferAttribute){const ve=oe.data,Ce=ve.stride,Ie=oe.offset;if(ve.isInstancedInterleavedBuffer){for(let Qe=0;Qe<k.locationSize;Qe++)g(k.location+Qe,ve.meshPerAttribute);A.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Qe=0;Qe<k.locationSize;Qe++)_(k.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Qe=0;Qe<k.locationSize;Qe++)L(k.location+Qe,F/k.locationSize,J,re,Ce*fe,(Ie+F/k.locationSize*Qe)*fe,ge)}else{if(oe.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)g(k.location+ve,oe.meshPerAttribute);A.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ve=0;ve<k.locationSize;ve++)_(k.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let ve=0;ve<k.locationSize;ve++)L(k.location+ve,F/k.locationSize,J,re,F*fe,F/k.locationSize*ve*fe,ge)}}else if(V!==void 0){const re=V[Q];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(k.location,re);break;case 3:s.vertexAttrib3fv(k.location,re);break;case 4:s.vertexAttrib4fv(k.location,re);break;default:s.vertexAttrib1fv(k.location,re)}}}}N()}function W(){z();for(const A in r){const B=r[A];for(const j in B){const X=B[j];for(const Z in X)v(X[Z].object),delete X[Z];delete B[j]}delete r[A]}}function O(A){if(r[A.id]===void 0)return;const B=r[A.id];for(const j in B){const X=B[j];for(const Z in X)v(X[Z].object),delete X[Z];delete B[j]}delete r[A.id]}function U(A){for(const B in r){const j=r[B];if(j[A.id]===void 0)continue;const X=j[A.id];for(const Z in X)v(X[Z].object),delete X[Z];delete j[A.id]}}function z(){P(),u=!0,c!==o&&(c=o,m(c.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:z,resetDefaultState:P,dispose:W,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:_,disableUnusedAttributes:N}}function OM(s,e,n){let r;function o(m){r=m}function c(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function u(m,v,x){x!==0&&(s.drawArraysInstanced(r,m,v,x),n.update(v,r,x))}function f(m,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,x);let S=0;for(let w=0;w<x;w++)S+=v[w];n.update(S,r,1)}function h(m,v,x,y){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)u(m[w],v[w],y[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,v,0,y,0,x);let w=0;for(let E=0;E<x;E++)w+=v[E]*y[E];n.update(w,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function kM(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==ui&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const z=U===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Wi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Hi&&!z)}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=h(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const x=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),W=w>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:w,maxTextureSize:E,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:b,vertexTextures:W,maxSamples:O}}function zM(s){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Wr,f=new ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||r!==0||o;return o=y,r=x.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,y){n=v(x,y,0)},this.setState=function(x,y,S){const w=x.clippingPlanes,E=x.clipIntersection,_=x.clipShadows,g=s.get(x);if(!o||w===null||w.length===0||c&&!_)c?v(null):m();else{const N=c?0:r,L=N*4;let b=g.clippingState||null;h.value=b,b=v(w,y,L,S);for(let W=0;W!==L;++W)b[W]=n[W];g.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=N}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,y,S,w){const E=x!==null?x.length:0;let _=null;if(E!==0){if(_=h.value,w!==!0||_===null){const g=S+E*4,N=y.matrixWorldInverse;f.getNormalMatrix(N),(_===null||_.length<g)&&(_=new Float32Array(g));for(let L=0,b=S;L!==E;++L,b+=4)u.copy(x[L]).applyMatrix4(N,f),u.normal.toArray(_,b),_[b+3]=u.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,_}}function BM(s){let e=new WeakMap;function n(u,f){return f===ud?u.mapping=Hs:f===dd&&(u.mapping=Vs),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===ud||f===dd)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new Zx(h.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class ng extends J0{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,f=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Us=4,hm=[.125,.215,.35,.446,.526,.582],qr=20,Wu=new ng,pm=new vt;let ju=null,Xu=0,qu=0,Yu=!1;const jr=(1+Math.sqrt(5))/2,Is=1/jr,mm=[new te(-jr,Is,0),new te(jr,Is,0),new te(-Is,0,jr),new te(Is,0,jr),new te(0,jr,-Is),new te(0,jr,Is),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)];class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){ju=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ju,Xu,qu),this._renderer.xr.enabled=Yu,e.scissorTest=!1,vl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:za,format:ui,colorSpace:qs,depthBuffer:!1},o=vm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HM(c)),this._blurMaterial=VM(c,e,n)}return o}_compileMaterial(e){const n=new Ln(this._lodPlanes[0],e);this._renderer.compile(n,Wu)}_sceneToCubeUV(e,n,r,o){const f=new Zn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(pm),v.toneMapping=yr,v.autoClear=!1;const S=new Rl({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),w=new Ln(new Ga,S);let E=!1;const _=e.background;_?_.isColor&&(S.color.copy(_),e.background=null,E=!0):(S.color.copy(pm),E=!0);for(let g=0;g<6;g++){const N=g%3;N===0?(f.up.set(0,h[g],0),f.lookAt(m[g],0,0)):N===1?(f.up.set(0,0,h[g]),f.lookAt(0,m[g],0)):(f.up.set(0,h[g],0),f.lookAt(0,0,m[g]));const L=this._cubeSize;vl(o,N*L,g>2?L:0,L,L),v.setRenderTarget(o),E&&v.render(w,f),v.render(e,f)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=y,v.autoClear=x,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Hs||e.mapping===Vs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_m());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new Ln(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const h=this._cubeSize;vl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,Wu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=mm[(o-c-1)%mm.length];this._blur(e,c-1,c,u,f)}n.autoClear=r}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,f){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new Ln(this._lodPlanes[o],m),y=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*qr-1),E=c/w,_=isFinite(c)?1+Math.floor(v*E):qr;_>qr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${qr}`);const g=[];let N=0;for(let U=0;U<qr;++U){const z=U/E,P=Math.exp(-z*z/2);g.push(P),U===0?N+=P:U<_&&(N+=2*P)}for(let U=0;U<g.length;U++)g[U]=g[U]/N;y.envMap.value=e.texture,y.samples.value=_,y.weights.value=g,y.latitudinal.value=u==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:L}=this;y.dTheta.value=w,y.mipInt.value=L-r;const b=this._sizeLods[o],W=3*b*(o>L-Us?o-L+Us:0),O=4*(this._cubeSize-b);vl(n,W,O,3*b,2*b),h.setRenderTarget(n),h.render(x,Wu)}}function HM(s){const e=[],n=[],r=[];let o=s;const c=s-Us+1+hm.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);n.push(f);let h=1/f;u>s-Us?h=hm[u-s+Us-1]:u===0&&(h=0),r.push(h);const m=1/(f-2),v=-m,x=1+m,y=[v,v,x,v,x,x,v,v,x,x,v,x],S=6,w=6,E=3,_=2,g=1,N=new Float32Array(E*w*S),L=new Float32Array(_*w*S),b=new Float32Array(g*w*S);for(let O=0;O<S;O++){const U=O%3*2/3-1,z=O>2?0:-1,P=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];N.set(P,E*w*O),L.set(y,_*w*O);const A=[O,O,O,O,O,O];b.set(A,g*w*O)}const W=new Bn;W.setAttribute("position",new yi(N,E)),W.setAttribute("uv",new yi(L,_)),W.setAttribute("faceIndex",new yi(b,g)),e.push(W),o>Us&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function vm(s,e,n){const r=new Kr(s,e,n);return r.texture.mapping=Dl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vl(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function VM(s,e,n){const r=new Float32Array(qr),o=new te(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Zd(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function _m(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zd(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function xm(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Zd(){return`

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
	`}function GM(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===ud||h===dd,v=h===Hs||h===Vs;if(m||v){let x=e.get(f);const y=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return n===null&&(n=new gm(s)),x=m?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const S=f.image;return m&&S&&S.height>0||v&&S&&o(S)?(n===null&&(n=new gm(s)),x=m?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",c),x.texture):null}}}return f}function o(f){let h=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&h++;return h===m}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function WM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Ua("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function jM(s,e,n,r){const o={},c=new WeakMap;function u(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const w in y.attributes)e.remove(y.attributes[w]);for(const w in y.morphAttributes){const E=y.morphAttributes[w];for(let _=0,g=E.length;_<g;_++)e.remove(E[_])}y.removeEventListener("dispose",u),delete o[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function f(x,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,n.memory.geometries++),y}function h(x){const y=x.attributes;for(const w in y)e.update(y[w],s.ARRAY_BUFFER);const S=x.morphAttributes;for(const w in S){const E=S[w];for(let _=0,g=E.length;_<g;_++)e.update(E[_],s.ARRAY_BUFFER)}}function m(x){const y=[],S=x.index,w=x.attributes.position;let E=0;if(S!==null){const N=S.array;E=S.version;for(let L=0,b=N.length;L<b;L+=3){const W=N[L+0],O=N[L+1],U=N[L+2];y.push(W,O,O,U,U,W)}}else if(w!==void 0){const N=w.array;E=w.version;for(let L=0,b=N.length/3-1;L<b;L+=3){const W=L+0,O=L+1,U=L+2;y.push(W,O,O,U,U,W)}}else return;const _=new(W0(y)?Z0:K0)(y,1);_.version=E;const g=c.get(x);g&&e.remove(g),c.set(x,_)}function v(x){const y=c.get(x);if(y){const S=x.index;S!==null&&y.version<S.version&&m(x)}else m(x);return c.get(x)}return{get:f,update:h,getWireframeAttribute:v}}function XM(s,e,n){let r;function o(y){r=y}let c,u;function f(y){c=y.type,u=y.bytesPerElement}function h(y,S){s.drawElements(r,S,c,y*u),n.update(S,r,1)}function m(y,S,w){w!==0&&(s.drawElementsInstanced(r,S,c,y*u,w),n.update(S,r,w))}function v(y,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,w);let _=0;for(let g=0;g<w;g++)_+=S[g];n.update(_,r,1)}function x(y,S,w,E){if(w===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<y.length;g++)m(y[g]/u,S[g],E[g]);else{_.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,E,0,w);let g=0;for(let N=0;N<w;N++)g+=S[N]*E[N];n.update(g,r,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function qM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function YM(s,e,n){const r=new WeakMap,o=new Vt;function c(u,f,h){const m=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=v!==void 0?v.length:0;let y=r.get(f);if(y===void 0||y.count!==x){let A=function(){z.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var S=A;y!==void 0&&y.texture.dispose();const w=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let b=0;w===!0&&(b=1),E===!0&&(b=2),_===!0&&(b=3);let W=f.attributes.position.count*b,O=1;W>e.maxTextureSize&&(O=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const U=new Float32Array(W*O*4*x),z=new X0(U,W,O,x);z.type=Hi,z.needsUpdate=!0;const P=b*4;for(let B=0;B<x;B++){const j=g[B],X=N[B],Z=L[B],ne=W*O*4*B;for(let V=0;V<j.count;V++){const Q=V*P;w===!0&&(o.fromBufferAttribute(j,V),U[ne+Q+0]=o.x,U[ne+Q+1]=o.y,U[ne+Q+2]=o.z,U[ne+Q+3]=0),E===!0&&(o.fromBufferAttribute(X,V),U[ne+Q+4]=o.x,U[ne+Q+5]=o.y,U[ne+Q+6]=o.z,U[ne+Q+7]=0),_===!0&&(o.fromBufferAttribute(Z,V),U[ne+Q+8]=o.x,U[ne+Q+9]=o.y,U[ne+Q+10]=o.z,U[ne+Q+11]=Z.itemSize===4?o.w:1)}}y={count:x,texture:z,size:new _t(W,O)},r.set(f,y),f.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let w=0;for(let _=0;_<m.length;_++)w+=m[_];const E=f.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",E),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function $M(s,e,n,r){let o=new WeakMap;function c(h){const m=r.render.frame,v=h.geometry,x=e.get(h,v);if(o.get(x)!==m&&(e.update(x),o.set(x,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const y=h.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return x}function u(){o=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}class ig extends Sn{constructor(e,n,r,o,c,u,f,h,m,v=ks){if(v!==ks&&v!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===ks&&(r=$r),r===void 0&&v===Ws&&(r=Gs),super(null,o,c,u,f,h,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:di,this.minFilter=h!==void 0?h:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const rg=new Sn,ym=new ig(1,1),sg=new X0,ag=new Ux,og=new eg,Sm=[],Mm=[],Em=new Float32Array(16),wm=new Float32Array(9),Tm=new Float32Array(4);function Ks(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Sm[o];if(c===void 0&&(c=new Float32Array(o),Sm[o]=c),e!==0){r.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(c,f)}return c}function Zt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Fl(s,e){let n=Mm[e];n===void 0&&(n=new Int32Array(e),Mm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function KM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function ZM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2fv(this.addr,e),Qt(n,e)}}function QM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;s.uniform3fv(this.addr,e),Qt(n,e)}}function JM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4fv(this.addr,e),Qt(n,e)}}function e1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Tm.set(r),s.uniformMatrix2fv(this.addr,!1,Tm),Qt(n,r)}}function t1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;wm.set(r),s.uniformMatrix3fv(this.addr,!1,wm),Qt(n,r)}}function n1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Em.set(r),s.uniformMatrix4fv(this.addr,!1,Em),Qt(n,r)}}function i1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function r1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2iv(this.addr,e),Qt(n,e)}}function s1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3iv(this.addr,e),Qt(n,e)}}function a1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4iv(this.addr,e),Qt(n,e)}}function o1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function l1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2uiv(this.addr,e),Qt(n,e)}}function c1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3uiv(this.addr,e),Qt(n,e)}}function u1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4uiv(this.addr,e),Qt(n,e)}}function d1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(ym.compareFunction=G0,c=ym):c=rg,n.setTexture2D(e||c,o)}function f1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||ag,o)}function h1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||og,o)}function p1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||sg,o)}function m1(s){switch(s){case 5126:return KM;case 35664:return ZM;case 35665:return QM;case 35666:return JM;case 35674:return e1;case 35675:return t1;case 35676:return n1;case 5124:case 35670:return i1;case 35667:case 35671:return r1;case 35668:case 35672:return s1;case 35669:case 35673:return a1;case 5125:return o1;case 36294:return l1;case 36295:return c1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return p1}}function g1(s,e){s.uniform1fv(this.addr,e)}function v1(s,e){const n=Ks(e,this.size,2);s.uniform2fv(this.addr,n)}function _1(s,e){const n=Ks(e,this.size,3);s.uniform3fv(this.addr,n)}function x1(s,e){const n=Ks(e,this.size,4);s.uniform4fv(this.addr,n)}function y1(s,e){const n=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function S1(s,e){const n=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function M1(s,e){const n=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function E1(s,e){s.uniform1iv(this.addr,e)}function w1(s,e){s.uniform2iv(this.addr,e)}function T1(s,e){s.uniform3iv(this.addr,e)}function A1(s,e){s.uniform4iv(this.addr,e)}function C1(s,e){s.uniform1uiv(this.addr,e)}function b1(s,e){s.uniform2uiv(this.addr,e)}function R1(s,e){s.uniform3uiv(this.addr,e)}function P1(s,e){s.uniform4uiv(this.addr,e)}function N1(s,e,n){const r=this.cache,o=e.length,c=Fl(n,o);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||rg,c[u])}function L1(s,e,n){const r=this.cache,o=e.length,c=Fl(n,o);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||ag,c[u])}function D1(s,e,n){const r=this.cache,o=e.length,c=Fl(n,o);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||og,c[u])}function I1(s,e,n){const r=this.cache,o=e.length,c=Fl(n,o);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||sg,c[u])}function U1(s){switch(s){case 5126:return g1;case 35664:return v1;case 35665:return _1;case 35666:return x1;case 35674:return y1;case 35675:return S1;case 35676:return M1;case 5124:case 35670:return E1;case 35667:case 35671:return w1;case 35668:case 35672:return T1;case 35669:case 35673:return A1;case 5125:return C1;case 36294:return b1;case 36295:return R1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return I1}}class F1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=m1(n.type)}}class O1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=U1(n.type)}}class k1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const $u=/(\w+)(\])?(\[|\.)?/g;function Am(s,e){s.seq.push(e),s.map[e.id]=e}function z1(s,e,n){const r=s.name,o=r.length;for($u.lastIndex=0;;){const c=$u.exec(r),u=$u.lastIndex;let f=c[1];const h=c[2]==="]",m=c[3];if(h&&(f=f|0),m===void 0||m==="["&&u+2===o){Am(n,m===void 0?new F1(f,s,e):new O1(f,s,e));break}else{let x=n.map[f];x===void 0&&(x=new k1(f),Am(n,x)),n=x}}}class Al{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);z1(c,u,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Cm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const B1=37297;let H1=0;function V1(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const bm=new ct;function G1(s){St._getMatrix(bm,St.workingColorSpace,s);const e=`mat3( ${bm.elements.map(n=>n.toFixed(4))} )`;switch(St.getTransfer(s)){case Il:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Rm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+V1(s.getShaderSource(e),u)}else return o}function W1(s,e){const n=G1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function j1(s,e){let n;switch(e){case lx:n="Linear";break;case cx:n="Reinhard";break;case ux:n="Cineon";break;case dx:n="ACESFilmic";break;case hx:n="AgX";break;case px:n="Neutral";break;case fx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _l=new te;function X1(){St.getLuminanceCoefficients(_l);const s=_l.x.toFixed(4),e=_l.y.toFixed(4),n=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function Y1(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function $1(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Fa(s){return s!==""}function Pm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(s){return s.replace(K1,Q1)}const Z1=new Map;function Q1(s,e){let n=ut[e];if(n===void 0){const r=Z1.get(e);if(r!==void 0)n=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Hd(n)}const J1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lm(s){return s.replace(J1,eE)}function eE(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Dm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function tE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===b0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===R0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function nE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function rE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case P0:e="ENVMAP_BLENDING_MULTIPLY";break;case ax:e="ENVMAP_BLENDING_MIX";break;case ox:e="ENVMAP_BLENDING_ADD";break}return e}function sE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function aE(s,e,n,r){const o=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=tE(n),m=nE(n),v=iE(n),x=rE(n),y=sE(n),S=q1(n),w=Y1(c),E=o.createProgram();let _,g,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Fa).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Fa).join(`
`),g.length>0&&(g+=`
`)):(_=[Dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),g=[Dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yr?"#define TONE_MAPPING":"",n.toneMapping!==yr?ut.tonemapping_pars_fragment:"",n.toneMapping!==yr?j1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,W1("linearToOutputTexel",n.outputColorSpace),X1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fa).join(`
`)),u=Hd(u),u=Pm(u,n),u=Nm(u,n),f=Hd(f),f=Pm(f,n),f=Nm(f,n),u=Lm(u),f=Lm(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",n.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=N+_+u,b=N+g+f,W=Cm(o,o.VERTEX_SHADER,L),O=Cm(o,o.FRAGMENT_SHADER,b);o.attachShader(E,W),o.attachShader(E,O),n.index0AttributeName!==void 0?o.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function U(B){if(s.debug.checkShaderErrors){const j=o.getProgramInfoLog(E).trim(),X=o.getShaderInfoLog(W).trim(),Z=o.getShaderInfoLog(O).trim();let ne=!0,V=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,W,O);else{const Q=Rm(o,W,"vertex"),k=Rm(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+j+`
`+Q+`
`+k)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(X===""||Z==="")&&(V=!1);V&&(B.diagnostics={runnable:ne,programLog:j,vertexShader:{log:X,prefix:_},fragmentShader:{log:Z,prefix:g}})}o.deleteShader(W),o.deleteShader(O),z=new Al(o,E),P=$1(o,E)}let z;this.getUniforms=function(){return z===void 0&&U(this),z};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(E,B1)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=H1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=W,this.fragmentShader=O,this}let oE=0;class lE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new cE(e),n.set(e,r)),r}}class cE{constructor(e){this.id=oE++,this.code=e,this.usedTimes=0}}function uE(s,e,n,r,o,c,u){const f=new Y0,h=new lE,m=new Set,v=[],x=o.logarithmicDepthBuffer,y=o.vertexTextures;let S=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return m.add(P),P===0?"uv":`uv${P}`}function _(P,A,B,j,X){const Z=j.fog,ne=X.geometry,V=P.isMeshStandardMaterial?j.environment:null,Q=(P.isMeshStandardMaterial?n:e).get(P.envMap||V),k=Q&&Q.mapping===Dl?Q.image.height:null,oe=w[P.type];P.precision!==null&&(S=o.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const re=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,F=re!==void 0?re.length:0;let ie=0;ne.morphAttributes.position!==void 0&&(ie=1),ne.morphAttributes.normal!==void 0&&(ie=2),ne.morphAttributes.color!==void 0&&(ie=3);let Te,J,fe,ge;if(oe){const xt=_i[oe];Te=xt.vertexShader,J=xt.fragmentShader}else Te=P.vertexShader,J=P.fragmentShader,h.update(P),fe=h.getVertexShaderID(P),ge=h.getFragmentShaderID(P);const ve=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),Ie=X.isInstancedMesh===!0,Qe=X.isBatchedMesh===!0,wt=!!P.map,ft=!!P.matcap,Pt=!!Q,$=!!P.aoMap,Jt=!!P.lightMap,Be=!!P.bumpMap,He=!!P.normalMap,Ve=!!P.displacementMap,bt=!!P.emissiveMap,Ze=!!P.metalnessMap,D=!!P.roughnessMap,C=P.anisotropy>0,ae=P.clearcoat>0,me=P.dispersion>0,xe=P.iridescence>0,he=P.sheen>0,Xe=P.transmission>0,be=C&&!!P.anisotropyMap,Ue=ae&&!!P.clearcoatMap,dt=ae&&!!P.clearcoatNormalMap,Me=ae&&!!P.clearcoatRoughnessMap,Oe=xe&&!!P.iridescenceMap,tt=xe&&!!P.iridescenceThicknessMap,nt=he&&!!P.sheenColorMap,ke=he&&!!P.sheenRoughnessMap,ht=!!P.specularMap,at=!!P.specularColorMap,At=!!P.specularIntensityMap,q=Xe&&!!P.transmissionMap,Re=Xe&&!!P.thicknessMap,de=!!P.gradientMap,pe=!!P.alphaMap,Le=P.alphaTest>0,Ne=!!P.alphaHash,ot=!!P.extensions;let It=yr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(It=s.toneMapping);const qt={shaderID:oe,shaderType:P.type,shaderName:P.name,vertexShader:Te,fragmentShader:J,defines:P.defines,customVertexShaderID:fe,customFragmentShaderID:ge,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Qe,batchingColor:Qe&&X._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&X.instanceColor!==null,instancingMorph:Ie&&X.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:qs,alphaToCoverage:!!P.alphaToCoverage,map:wt,matcap:ft,envMap:Pt,envMapMode:Pt&&Q.mapping,envMapCubeUVHeight:k,aoMap:$,lightMap:Jt,bumpMap:Be,normalMap:He,displacementMap:y&&Ve,emissiveMap:bt,normalMapObjectSpace:He&&P.normalMapType===_x,normalMapTangentSpace:He&&P.normalMapType===V0,metalnessMap:Ze,roughnessMap:D,anisotropy:C,anisotropyMap:be,clearcoat:ae,clearcoatMap:Ue,clearcoatNormalMap:dt,clearcoatRoughnessMap:Me,dispersion:me,iridescence:xe,iridescenceMap:Oe,iridescenceThicknessMap:tt,sheen:he,sheenColorMap:nt,sheenRoughnessMap:ke,specularMap:ht,specularColorMap:at,specularIntensityMap:At,transmission:Xe,transmissionMap:q,thicknessMap:Re,gradientMap:de,opaque:P.transparent===!1&&P.blending===Os&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:Ne,combine:P.combine,mapUv:wt&&E(P.map.channel),aoMapUv:$&&E(P.aoMap.channel),lightMapUv:Jt&&E(P.lightMap.channel),bumpMapUv:Be&&E(P.bumpMap.channel),normalMapUv:He&&E(P.normalMap.channel),displacementMapUv:Ve&&E(P.displacementMap.channel),emissiveMapUv:bt&&E(P.emissiveMap.channel),metalnessMapUv:Ze&&E(P.metalnessMap.channel),roughnessMapUv:D&&E(P.roughnessMap.channel),anisotropyMapUv:be&&E(P.anisotropyMap.channel),clearcoatMapUv:Ue&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:dt&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:ke&&E(P.sheenRoughnessMap.channel),specularMapUv:ht&&E(P.specularMap.channel),specularColorMapUv:at&&E(P.specularColorMap.channel),specularIntensityMapUv:At&&E(P.specularIntensityMap.channel),transmissionMapUv:q&&E(P.transmissionMap.channel),thicknessMapUv:Re&&E(P.thicknessMap.channel),alphaMapUv:pe&&E(P.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(He||C),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!ne.attributes.uv&&(wt||pe),fog:!!Z,useFog:P.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ce,skinning:X.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:wt&&P.map.isVideoTexture===!0&&St.getTransfer(P.map.colorSpace)===Nt,decodeVideoTextureEmissive:bt&&P.emissiveMap.isVideoTexture===!0&&St.getTransfer(P.emissiveMap.colorSpace)===Nt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===zi,flipSided:P.side===Dn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ot&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&P.extensions.multiDraw===!0||Qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function g(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)A.push(B),A.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(N(A,P),L(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function N(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function L(P,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),P.push(f.mask)}function b(P){const A=w[P.type];let B;if(A){const j=_i[A];B=qx.clone(j.uniforms)}else B=P.uniforms;return B}function W(P,A){let B;for(let j=0,X=v.length;j<X;j++){const Z=v[j];if(Z.cacheKey===A){B=Z,++B.usedTimes;break}}return B===void 0&&(B=new aE(s,A,P,c),v.push(B)),B}function O(P){if(--P.usedTimes===0){const A=v.indexOf(P);v[A]=v[v.length-1],v.pop(),P.destroy()}}function U(P){h.remove(P)}function z(){h.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:b,acquireProgram:W,releaseProgram:O,releaseShaderCache:U,programs:v,dispose:z}}function dE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function fE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Im(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Um(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(x,y,S,w,E,_){let g=s[e];return g===void 0?(g={id:x.id,object:x,geometry:y,material:S,groupOrder:w,renderOrder:x.renderOrder,z:E,group:_},s[e]=g):(g.id=x.id,g.object=x,g.geometry=y,g.material=S,g.groupOrder=w,g.renderOrder=x.renderOrder,g.z=E,g.group=_),e++,g}function f(x,y,S,w,E,_){const g=u(x,y,S,w,E,_);S.transmission>0?r.push(g):S.transparent===!0?o.push(g):n.push(g)}function h(x,y,S,w,E,_){const g=u(x,y,S,w,E,_);S.transmission>0?r.unshift(g):S.transparent===!0?o.unshift(g):n.unshift(g)}function m(x,y){n.length>1&&n.sort(x||fE),r.length>1&&r.sort(y||Im),o.length>1&&o.sort(y||Im)}function v(){for(let x=e,y=s.length;x<y;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:h,finish:v,sort:m}}function hE(){let s=new WeakMap;function e(r,o){const c=s.get(r);let u;return c===void 0?(u=new Um,s.set(r,[u])):o>=c.length?(u=new Um,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function pE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new vt};break;case"SpotLight":n={position:new te,direction:new te,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new te,halfWidth:new te,halfHeight:new te};break}return s[e.id]=n,n}}}function mE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let gE=0;function vE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _E(s){const e=new pE,n=mE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new te);const o=new te,c=new Bt,u=new Bt;function f(m){let v=0,x=0,y=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,w=0,E=0,_=0,g=0,N=0,L=0,b=0,W=0,O=0,U=0;m.sort(vE);for(let P=0,A=m.length;P<A;P++){const B=m[P],j=B.color,X=B.intensity,Z=B.distance,ne=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=j.r*X,x+=j.g*X,y+=j.b*X;else if(B.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(B.sh.coefficients[V],X);U++}else if(B.isDirectionalLight){const V=e.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Q=B.shadow,k=n.get(B);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,r.directionalShadow[S]=k,r.directionalShadowMap[S]=ne,r.directionalShadowMatrix[S]=B.shadow.matrix,N++}r.directional[S]=V,S++}else if(B.isSpotLight){const V=e.get(B);V.position.setFromMatrixPosition(B.matrixWorld),V.color.copy(j).multiplyScalar(X),V.distance=Z,V.coneCos=Math.cos(B.angle),V.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),V.decay=B.decay,r.spot[E]=V;const Q=B.shadow;if(B.map&&(r.spotLightMap[W]=B.map,W++,Q.updateMatrices(B),B.castShadow&&O++),r.spotLightMatrix[E]=Q.matrix,B.castShadow){const k=n.get(B);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,r.spotShadow[E]=k,r.spotShadowMap[E]=ne,b++}E++}else if(B.isRectAreaLight){const V=e.get(B);V.color.copy(j).multiplyScalar(X),V.halfWidth.set(B.width*.5,0,0),V.halfHeight.set(0,B.height*.5,0),r.rectArea[_]=V,_++}else if(B.isPointLight){const V=e.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity),V.distance=B.distance,V.decay=B.decay,B.castShadow){const Q=B.shadow,k=n.get(B);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,k.shadowCameraNear=Q.camera.near,k.shadowCameraFar=Q.camera.far,r.pointShadow[w]=k,r.pointShadowMap[w]=ne,r.pointShadowMatrix[w]=B.shadow.matrix,L++}r.point[w]=V,w++}else if(B.isHemisphereLight){const V=e.get(B);V.skyColor.copy(B.color).multiplyScalar(X),V.groundColor.copy(B.groundColor).multiplyScalar(X),r.hemi[g]=V,g++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=y;const z=r.hash;(z.directionalLength!==S||z.pointLength!==w||z.spotLength!==E||z.rectAreaLength!==_||z.hemiLength!==g||z.numDirectionalShadows!==N||z.numPointShadows!==L||z.numSpotShadows!==b||z.numSpotMaps!==W||z.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=E,r.rectArea.length=_,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=b+W-O,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=U,z.directionalLength=S,z.pointLength=w,z.spotLength=E,z.rectAreaLength=_,z.hemiLength=g,z.numDirectionalShadows=N,z.numPointShadows=L,z.numSpotShadows=b,z.numSpotMaps=W,z.numLightProbes=U,r.version=gE++)}function h(m,v){let x=0,y=0,S=0,w=0,E=0;const _=v.matrixWorldInverse;for(let g=0,N=m.length;g<N;g++){const L=m[g];if(L.isDirectionalLight){const b=r.directional[x];b.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(_),x++}else if(L.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(_),S++}else if(L.isRectAreaLight){const b=r.rectArea[w];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(_),u.identity(),c.copy(L.matrixWorld),c.premultiply(_),u.extractRotation(c),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),w++}else if(L.isPointLight){const b=r.point[y];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(_),y++}else if(L.isHemisphereLight){const b=r.hemi[E];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(_),E++}}}return{setup:f,setupView:h,state:r}}function Fm(s){const e=new _E(s),n=[],r=[];function o(v){m.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function u(v){r.push(v)}function f(){e.setup(n)}function h(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:h,pushLight:c,pushShadow:u}}function xE(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let f;return u===void 0?(f=new Fm(s),e.set(o,[f])):c>=u.length?(f=new Fm(s),u.push(f)):f=u[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class yE extends $s{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SE extends $s{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ME=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EE=`uniform sampler2D shadow_pass;
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
}`;function wE(s,e,n){let r=new Kd;const o=new _t,c=new _t,u=new Vt,f=new yE({depthPacking:vx}),h=new SE,m={},v=n.maxTextureSize,x={[Sr]:Dn,[Dn]:Sr,[zi]:zi},y=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:ME,fragmentShader:EE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const w=new Bn;w.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ln(w,y),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b0;let g=this.type;this.render=function(O,U,z){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||O.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),j=s.state;j.setBlending(xr),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const X=g!==ki&&this.type===ki,Z=g===ki&&this.type!==ki;for(let ne=0,V=O.length;ne<V;ne++){const Q=O[ne],k=Q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;o.copy(k.mapSize);const oe=k.getFrameExtents();if(o.multiply(oe),c.copy(k.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/oe.x),o.x=c.x*oe.x,k.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/oe.y),o.y=c.y*oe.y,k.mapSize.y=c.y)),k.map===null||X===!0||Z===!0){const F=this.type!==ki?{minFilter:di,magFilter:di}:{};k.map!==null&&k.map.dispose(),k.map=new Kr(o.x,o.y,F),k.map.texture.name=Q.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const re=k.getViewportCount();for(let F=0;F<re;F++){const ie=k.getViewport(F);u.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),j.viewport(u),k.updateMatrices(Q,F),r=k.getFrustum(),b(U,z,k.camera,Q,this.type)}k.isPointLightShadow!==!0&&this.type===ki&&N(k,z),k.needsUpdate=!1}g=this.type,_.needsUpdate=!1,s.setRenderTarget(P,A,B)};function N(O,U){const z=e.update(E);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Kr(o.x,o.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(U,null,z,y,E,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(U,null,z,S,E,null)}function L(O,U,z,P){let A=null;const B=z.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(B!==void 0)A=B;else if(A=z.isPointLight===!0?h:f,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const j=A.uuid,X=U.uuid;let Z=m[j];Z===void 0&&(Z={},m[j]=Z);let ne=Z[X];ne===void 0&&(ne=A.clone(),Z[X]=ne,U.addEventListener("dispose",W)),A=ne}if(A.visible=U.visible,A.wireframe=U.wireframe,P===ki?A.side=U.shadowSide!==null?U.shadowSide:U.side:A.side=U.shadowSide!==null?U.shadowSide:x[U.side],A.alphaMap=U.alphaMap,A.alphaTest=U.alphaTest,A.map=U.map,A.clipShadows=U.clipShadows,A.clippingPlanes=U.clippingPlanes,A.clipIntersection=U.clipIntersection,A.displacementMap=U.displacementMap,A.displacementScale=U.displacementScale,A.displacementBias=U.displacementBias,A.wireframeLinewidth=U.wireframeLinewidth,A.linewidth=U.linewidth,z.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const j=s.properties.get(A);j.light=z}return A}function b(O,U,z,P,A){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&A===ki)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,O.matrixWorld);const X=e.update(O),Z=O.material;if(Array.isArray(Z)){const ne=X.groups;for(let V=0,Q=ne.length;V<Q;V++){const k=ne[V],oe=Z[k.materialIndex];if(oe&&oe.visible){const re=L(O,oe,P,A);O.onBeforeShadow(s,O,U,z,X,re,k),s.renderBufferDirect(z,null,X,re,O,k),O.onAfterShadow(s,O,U,z,X,re,k)}}}else if(Z.visible){const ne=L(O,Z,P,A);O.onBeforeShadow(s,O,U,z,X,ne,null),s.renderBufferDirect(z,null,X,ne,O,null),O.onAfterShadow(s,O,U,z,X,ne,null)}}const j=O.children;for(let X=0,Z=j.length;X<Z;X++)b(j[X],U,z,P,A)}function W(O){O.target.removeEventListener("dispose",W);for(const z in m){const P=m[z],A=O.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const TE={[id]:rd,[sd]:ld,[ad]:cd,[Bs]:od,[rd]:id,[ld]:sd,[cd]:ad,[od]:Bs};function AE(s,e){function n(){let q=!1;const Re=new Vt;let de=null;const pe=new Vt(0,0,0,0);return{setMask:function(Le){de!==Le&&!q&&(s.colorMask(Le,Le,Le,Le),de=Le)},setLocked:function(Le){q=Le},setClear:function(Le,Ne,ot,It,qt){qt===!0&&(Le*=It,Ne*=It,ot*=It),Re.set(Le,Ne,ot,It),pe.equals(Re)===!1&&(s.clearColor(Le,Ne,ot,It),pe.copy(Re))},reset:function(){q=!1,de=null,pe.set(-1,0,0,0)}}}function r(){let q=!1,Re=!1,de=null,pe=null,Le=null;return{setReversed:function(Ne){if(Re!==Ne){const ot=e.get("EXT_clip_control");Re?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const It=Le;Le=null,this.setClear(It)}Re=Ne},getReversed:function(){return Re},setTest:function(Ne){Ne?ve(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(Ne){de!==Ne&&!q&&(s.depthMask(Ne),de=Ne)},setFunc:function(Ne){if(Re&&(Ne=TE[Ne]),pe!==Ne){switch(Ne){case id:s.depthFunc(s.NEVER);break;case rd:s.depthFunc(s.ALWAYS);break;case sd:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case ad:s.depthFunc(s.EQUAL);break;case od:s.depthFunc(s.GEQUAL);break;case ld:s.depthFunc(s.GREATER);break;case cd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Ne}},setLocked:function(Ne){q=Ne},setClear:function(Ne){Le!==Ne&&(Re&&(Ne=1-Ne),s.clearDepth(Ne),Le=Ne)},reset:function(){q=!1,de=null,pe=null,Le=null,Re=!1}}}function o(){let q=!1,Re=null,de=null,pe=null,Le=null,Ne=null,ot=null,It=null,qt=null;return{setTest:function(xt){q||(xt?ve(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(xt){Re!==xt&&!q&&(s.stencilMask(xt),Re=xt)},setFunc:function(xt,Mn,gn){(de!==xt||pe!==Mn||Le!==gn)&&(s.stencilFunc(xt,Mn,gn),de=xt,pe=Mn,Le=gn)},setOp:function(xt,Mn,gn){(Ne!==xt||ot!==Mn||It!==gn)&&(s.stencilOp(xt,Mn,gn),Ne=xt,ot=Mn,It=gn)},setLocked:function(xt){q=xt},setClear:function(xt){qt!==xt&&(s.clearStencil(xt),qt=xt)},reset:function(){q=!1,Re=null,de=null,pe=null,Le=null,Ne=null,ot=null,It=null,qt=null}}}const c=new n,u=new r,f=new o,h=new WeakMap,m=new WeakMap;let v={},x={},y=new WeakMap,S=[],w=null,E=!1,_=null,g=null,N=null,L=null,b=null,W=null,O=null,U=new vt(0,0,0),z=0,P=!1,A=null,B=null,j=null,X=null,Z=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Q=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=Q>=1):k.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=Q>=2);let oe=null,re={};const F=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Te=new Vt().fromArray(F),J=new Vt().fromArray(ie);function fe(q,Re,de,pe){const Le=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(q,Ne),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<de;ot++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Re+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Ne}const ge={};ge[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ve(s.DEPTH_TEST),u.setFunc(Bs),Be(!1),He(Bp),ve(s.CULL_FACE),$(xr);function ve(q){v[q]!==!0&&(s.enable(q),v[q]=!0)}function Ce(q){v[q]!==!1&&(s.disable(q),v[q]=!1)}function Ie(q,Re){return x[q]!==Re?(s.bindFramebuffer(q,Re),x[q]=Re,q===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Re),q===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Qe(q,Re){let de=S,pe=!1;if(q){de=y.get(Re),de===void 0&&(de=[],y.set(Re,de));const Le=q.textures;if(de.length!==Le.length||de[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,ot=Le.length;Ne<ot;Ne++)de[Ne]=s.COLOR_ATTACHMENT0+Ne;de.length=Le.length,pe=!0}}else de[0]!==s.BACK&&(de[0]=s.BACK,pe=!0);pe&&s.drawBuffers(de)}function wt(q){return w!==q?(s.useProgram(q),w=q,!0):!1}const ft={[Xr]:s.FUNC_ADD,[G_]:s.FUNC_SUBTRACT,[W_]:s.FUNC_REVERSE_SUBTRACT};ft[j_]=s.MIN,ft[X_]=s.MAX;const Pt={[q_]:s.ZERO,[Y_]:s.ONE,[$_]:s.SRC_COLOR,[td]:s.SRC_ALPHA,[tx]:s.SRC_ALPHA_SATURATE,[J_]:s.DST_COLOR,[Z_]:s.DST_ALPHA,[K_]:s.ONE_MINUS_SRC_COLOR,[nd]:s.ONE_MINUS_SRC_ALPHA,[ex]:s.ONE_MINUS_DST_COLOR,[Q_]:s.ONE_MINUS_DST_ALPHA,[nx]:s.CONSTANT_COLOR,[ix]:s.ONE_MINUS_CONSTANT_COLOR,[rx]:s.CONSTANT_ALPHA,[sx]:s.ONE_MINUS_CONSTANT_ALPHA};function $(q,Re,de,pe,Le,Ne,ot,It,qt,xt){if(q===xr){E===!0&&(Ce(s.BLEND),E=!1);return}if(E===!1&&(ve(s.BLEND),E=!0),q!==V_){if(q!==_||xt!==P){if((g!==Xr||b!==Xr)&&(s.blendEquation(s.FUNC_ADD),g=Xr,b=Xr),xt)switch(q){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hp:s.blendFunc(s.ONE,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}N=null,L=null,W=null,O=null,U.set(0,0,0),z=0,_=q,P=xt}return}Le=Le||Re,Ne=Ne||de,ot=ot||pe,(Re!==g||Le!==b)&&(s.blendEquationSeparate(ft[Re],ft[Le]),g=Re,b=Le),(de!==N||pe!==L||Ne!==W||ot!==O)&&(s.blendFuncSeparate(Pt[de],Pt[pe],Pt[Ne],Pt[ot]),N=de,L=pe,W=Ne,O=ot),(It.equals(U)===!1||qt!==z)&&(s.blendColor(It.r,It.g,It.b,qt),U.copy(It),z=qt),_=q,P=!1}function Jt(q,Re){q.side===zi?Ce(s.CULL_FACE):ve(s.CULL_FACE);let de=q.side===Dn;Re&&(de=!de),Be(de),q.blending===Os&&q.transparent===!1?$(xr):$(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),c.setMask(q.colorWrite);const pe=q.stencilWrite;f.setTest(pe),pe&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),bt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function Be(q){A!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),A=q)}function He(q){q!==B_?(ve(s.CULL_FACE),q!==B&&(q===Bp?s.cullFace(s.BACK):q===H_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),B=q}function Ve(q){q!==j&&(V&&s.lineWidth(q),j=q)}function bt(q,Re,de){q?(ve(s.POLYGON_OFFSET_FILL),(X!==Re||Z!==de)&&(s.polygonOffset(Re,de),X=Re,Z=de)):Ce(s.POLYGON_OFFSET_FILL)}function Ze(q){q?ve(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function D(q){q===void 0&&(q=s.TEXTURE0+ne-1),oe!==q&&(s.activeTexture(q),oe=q)}function C(q,Re,de){de===void 0&&(oe===null?de=s.TEXTURE0+ne-1:de=oe);let pe=re[de];pe===void 0&&(pe={type:void 0,texture:void 0},re[de]=pe),(pe.type!==q||pe.texture!==Re)&&(oe!==de&&(s.activeTexture(de),oe=de),s.bindTexture(q,Re||ge[q]),pe.type=q,pe.texture=Re)}function ae(){const q=re[oe];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Xe(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function tt(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function nt(q){Te.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),Te.copy(q))}function ke(q){J.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),J.copy(q))}function ht(q,Re){let de=m.get(Re);de===void 0&&(de=new WeakMap,m.set(Re,de));let pe=de.get(q);pe===void 0&&(pe=s.getUniformBlockIndex(Re,q.name),de.set(q,pe))}function at(q,Re){const pe=m.get(Re).get(q);h.get(Re)!==pe&&(s.uniformBlockBinding(Re,pe,q.__bindingPointIndex),h.set(Re,pe))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},oe=null,re={},x={},y=new WeakMap,S=[],w=null,E=!1,_=null,g=null,N=null,L=null,b=null,W=null,O=null,U=new vt(0,0,0),z=0,P=!1,A=null,B=null,j=null,X=null,Z=null,Te.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:ve,disable:Ce,bindFramebuffer:Ie,drawBuffers:Qe,useProgram:wt,setBlending:$,setMaterial:Jt,setFlipSided:Be,setCullFace:He,setLineWidth:Ve,setPolygonOffset:bt,setScissorTest:Ze,activeTexture:D,bindTexture:C,unbindTexture:ae,compressedTexImage2D:me,compressedTexImage3D:xe,texImage2D:Oe,texImage3D:tt,updateUBOMapping:ht,uniformBlockBinding:at,texStorage2D:dt,texStorage3D:Me,texSubImage2D:he,texSubImage3D:Xe,compressedTexSubImage2D:be,compressedTexSubImage3D:Ue,scissor:nt,viewport:ke,reset:At}}function Om(s,e,n,r){const o=CE(r);switch(n){case U0:return s*e;case O0:return s*e;case k0:return s*e*2;case z0:return s*e/o.components*o.byteLength;case qd:return s*e/o.components*o.byteLength;case B0:return s*e*2/o.components*o.byteLength;case Yd:return s*e*2/o.components*o.byteLength;case F0:return s*e*3/o.components*o.byteLength;case ui:return s*e*4/o.components*o.byteLength;case $d:return s*e*4/o.components*o.byteLength;case Sl:case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case El:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case md:case vd:return Math.max(s,16)*Math.max(e,8)/4;case pd:case gd:return Math.max(s,8)*Math.max(e,8)/2;case _d:case xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Md:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case wd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Td:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case bd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Rd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Id:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Ud:case Fd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case H0:case Od:return Math.ceil(s/4)*Math.ceil(e/4)*8;case kd:case zd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function CE(s){switch(s){case Wi:case L0:return{byteLength:1,components:1};case Oa:case D0:case za:return{byteLength:2,components:1};case jd:case Xd:return{byteLength:2,components:4};case $r:case Wd:case Hi:return{byteLength:4,components:1};case I0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function bE(s,e,n,r,o,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new _t,v=new WeakMap;let x;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,C){return S?new OffscreenCanvas(D,C):ka("canvas")}function E(D,C,ae){let me=1;const xe=Ze(D);if((xe.width>ae||xe.height>ae)&&(me=ae/Math.max(xe.width,xe.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const he=Math.floor(me*xe.width),Xe=Math.floor(me*xe.height);x===void 0&&(x=w(he,Xe));const be=C?w(he,Xe):x;return be.width=he,be.height=Xe,be.getContext("2d").drawImage(D,0,0,he,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+he+"x"+Xe+")."),be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function _(D){return D.generateMipmaps}function g(D){s.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(D,C,ae,me,xe=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let he=C;if(C===s.RED&&(ae===s.FLOAT&&(he=s.R32F),ae===s.HALF_FLOAT&&(he=s.R16F),ae===s.UNSIGNED_BYTE&&(he=s.R8)),C===s.RED_INTEGER&&(ae===s.UNSIGNED_BYTE&&(he=s.R8UI),ae===s.UNSIGNED_SHORT&&(he=s.R16UI),ae===s.UNSIGNED_INT&&(he=s.R32UI),ae===s.BYTE&&(he=s.R8I),ae===s.SHORT&&(he=s.R16I),ae===s.INT&&(he=s.R32I)),C===s.RG&&(ae===s.FLOAT&&(he=s.RG32F),ae===s.HALF_FLOAT&&(he=s.RG16F),ae===s.UNSIGNED_BYTE&&(he=s.RG8)),C===s.RG_INTEGER&&(ae===s.UNSIGNED_BYTE&&(he=s.RG8UI),ae===s.UNSIGNED_SHORT&&(he=s.RG16UI),ae===s.UNSIGNED_INT&&(he=s.RG32UI),ae===s.BYTE&&(he=s.RG8I),ae===s.SHORT&&(he=s.RG16I),ae===s.INT&&(he=s.RG32I)),C===s.RGB_INTEGER&&(ae===s.UNSIGNED_BYTE&&(he=s.RGB8UI),ae===s.UNSIGNED_SHORT&&(he=s.RGB16UI),ae===s.UNSIGNED_INT&&(he=s.RGB32UI),ae===s.BYTE&&(he=s.RGB8I),ae===s.SHORT&&(he=s.RGB16I),ae===s.INT&&(he=s.RGB32I)),C===s.RGBA_INTEGER&&(ae===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),ae===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),ae===s.UNSIGNED_INT&&(he=s.RGBA32UI),ae===s.BYTE&&(he=s.RGBA8I),ae===s.SHORT&&(he=s.RGBA16I),ae===s.INT&&(he=s.RGBA32I)),C===s.RGB&&ae===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),C===s.RGBA){const Xe=xe?Il:St.getTransfer(me);ae===s.FLOAT&&(he=s.RGBA32F),ae===s.HALF_FLOAT&&(he=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(he=Xe===Nt?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(D,C){let ae;return D?C===null||C===$r||C===Gs?ae=s.DEPTH24_STENCIL8:C===Hi?ae=s.DEPTH32F_STENCIL8:C===Oa&&(ae=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===$r||C===Gs?ae=s.DEPTH_COMPONENT24:C===Hi?ae=s.DEPTH_COMPONENT32F:C===Oa&&(ae=s.DEPTH_COMPONENT16),ae}function W(D,C){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==di&&D.minFilter!==xi?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function O(D){const C=D.target;C.removeEventListener("dispose",O),z(C),C.isVideoTexture&&v.delete(C)}function U(D){const C=D.target;C.removeEventListener("dispose",U),A(C)}function z(D){const C=r.get(D);if(C.__webglInit===void 0)return;const ae=D.source,me=y.get(ae);if(me){const xe=me[C.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&P(D),Object.keys(me).length===0&&y.delete(ae)}r.remove(D)}function P(D){const C=r.get(D);s.deleteTexture(C.__webglTexture);const ae=D.source,me=y.get(ae);delete me[C.__cacheKey],u.memory.textures--}function A(D){const C=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(C.__webglFramebuffer[me]))for(let xe=0;xe<C.__webglFramebuffer[me].length;xe++)s.deleteFramebuffer(C.__webglFramebuffer[me][xe]);else s.deleteFramebuffer(C.__webglFramebuffer[me]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[me])}else{if(Array.isArray(C.__webglFramebuffer))for(let me=0;me<C.__webglFramebuffer.length;me++)s.deleteFramebuffer(C.__webglFramebuffer[me]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let me=0;me<C.__webglColorRenderbuffer.length;me++)C.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[me]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const ae=D.textures;for(let me=0,xe=ae.length;me<xe;me++){const he=r.get(ae[me]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),u.memory.textures--),r.remove(ae[me])}r.remove(D)}let B=0;function j(){B=0}function X(){const D=B;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),B+=1,D}function Z(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function ne(D,C){const ae=r.get(D);if(D.isVideoTexture&&Ve(D),D.isRenderTargetTexture===!1&&D.version>0&&ae.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(ae,D,C);return}}n.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+C)}function V(D,C){const ae=r.get(D);if(D.version>0&&ae.__version!==D.version){J(ae,D,C);return}n.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+C)}function Q(D,C){const ae=r.get(D);if(D.version>0&&ae.__version!==D.version){J(ae,D,C);return}n.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+C)}function k(D,C){const ae=r.get(D);if(D.version>0&&ae.__version!==D.version){fe(ae,D,C);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+C)}const oe={[fd]:s.REPEAT,[Bi]:s.CLAMP_TO_EDGE,[hd]:s.MIRRORED_REPEAT},re={[di]:s.NEAREST,[mx]:s.NEAREST_MIPMAP_NEAREST,[Qo]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Su]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},F={[xx]:s.NEVER,[Tx]:s.ALWAYS,[yx]:s.LESS,[G0]:s.LEQUAL,[Sx]:s.EQUAL,[wx]:s.GEQUAL,[Mx]:s.GREATER,[Ex]:s.NOTEQUAL};function ie(D,C){if(C.type===Hi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===xi||C.magFilter===Su||C.magFilter===Qo||C.magFilter===Yr||C.minFilter===xi||C.minFilter===Su||C.minFilter===Qo||C.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,oe[C.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,oe[C.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,oe[C.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,re[C.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,re[C.minFilter]),C.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,F[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===di||C.minFilter!==Qo&&C.minFilter!==Yr||C.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function Te(D,C){let ae=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",O));const me=C.source;let xe=y.get(me);xe===void 0&&(xe={},y.set(me,xe));const he=Z(C);if(he!==D.__cacheKey){xe[he]===void 0&&(xe[he]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ae=!0),xe[he].usedTimes++;const Xe=xe[D.__cacheKey];Xe!==void 0&&(xe[D.__cacheKey].usedTimes--,Xe.usedTimes===0&&P(C)),D.__cacheKey=he,D.__webglTexture=xe[he].texture}return ae}function J(D,C,ae){let me=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(me=s.TEXTURE_3D);const xe=Te(D,C),he=C.source;n.bindTexture(me,D.__webglTexture,s.TEXTURE0+ae);const Xe=r.get(he);if(he.version!==Xe.__version||xe===!0){n.activeTexture(s.TEXTURE0+ae);const be=St.getPrimaries(St.workingColorSpace),Ue=C.colorSpace===_r?null:St.getPrimaries(C.colorSpace),dt=C.colorSpace===_r||be===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Me=E(C.image,!1,o.maxTextureSize);Me=bt(C,Me);const Oe=c.convert(C.format,C.colorSpace),tt=c.convert(C.type);let nt=L(C.internalFormat,Oe,tt,C.colorSpace,C.isVideoTexture);ie(me,C);let ke;const ht=C.mipmaps,at=C.isVideoTexture!==!0,At=Xe.__version===void 0||xe===!0,q=he.dataReady,Re=W(C,Me);if(C.isDepthTexture)nt=b(C.format===Ws,C.type),At&&(at?n.texStorage2D(s.TEXTURE_2D,1,nt,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,nt,Me.width,Me.height,0,Oe,tt,null));else if(C.isDataTexture)if(ht.length>0){at&&At&&n.texStorage2D(s.TEXTURE_2D,Re,nt,ht[0].width,ht[0].height);for(let de=0,pe=ht.length;de<pe;de++)ke=ht[de],at?q&&n.texSubImage2D(s.TEXTURE_2D,de,0,0,ke.width,ke.height,Oe,tt,ke.data):n.texImage2D(s.TEXTURE_2D,de,nt,ke.width,ke.height,0,Oe,tt,ke.data);C.generateMipmaps=!1}else at?(At&&n.texStorage2D(s.TEXTURE_2D,Re,nt,Me.width,Me.height),q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,tt,Me.data)):n.texImage2D(s.TEXTURE_2D,0,nt,Me.width,Me.height,0,Oe,tt,Me.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){at&&At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,nt,ht[0].width,ht[0].height,Me.depth);for(let de=0,pe=ht.length;de<pe;de++)if(ke=ht[de],C.format!==ui)if(Oe!==null)if(at){if(q)if(C.layerUpdates.size>0){const Le=Om(ke.width,ke.height,C.format,C.type);for(const Ne of C.layerUpdates){const ot=ke.data.subarray(Ne*Le/ke.data.BYTES_PER_ELEMENT,(Ne+1)*Le/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,Ne,ke.width,ke.height,1,Oe,ot)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,ke.width,ke.height,Me.depth,Oe,ke.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,nt,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?q&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,ke.width,ke.height,Me.depth,Oe,tt,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,de,nt,ke.width,ke.height,Me.depth,0,Oe,tt,ke.data)}else{at&&At&&n.texStorage2D(s.TEXTURE_2D,Re,nt,ht[0].width,ht[0].height);for(let de=0,pe=ht.length;de<pe;de++)ke=ht[de],C.format!==ui?Oe!==null?at?q&&n.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,de,nt,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?q&&n.texSubImage2D(s.TEXTURE_2D,de,0,0,ke.width,ke.height,Oe,tt,ke.data):n.texImage2D(s.TEXTURE_2D,de,nt,ke.width,ke.height,0,Oe,tt,ke.data)}else if(C.isDataArrayTexture)if(at){if(At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,nt,Me.width,Me.height,Me.depth),q)if(C.layerUpdates.size>0){const de=Om(Me.width,Me.height,C.format,C.type);for(const pe of C.layerUpdates){const Le=Me.data.subarray(pe*de/Me.data.BYTES_PER_ELEMENT,(pe+1)*de/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Oe,tt,Le)}C.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,tt,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,Me.width,Me.height,Me.depth,0,Oe,tt,Me.data);else if(C.isData3DTexture)at?(At&&n.texStorage3D(s.TEXTURE_3D,Re,nt,Me.width,Me.height,Me.depth),q&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,tt,Me.data)):n.texImage3D(s.TEXTURE_3D,0,nt,Me.width,Me.height,Me.depth,0,Oe,tt,Me.data);else if(C.isFramebufferTexture){if(At)if(at)n.texStorage2D(s.TEXTURE_2D,Re,nt,Me.width,Me.height);else{let de=Me.width,pe=Me.height;for(let Le=0;Le<Re;Le++)n.texImage2D(s.TEXTURE_2D,Le,nt,de,pe,0,Oe,tt,null),de>>=1,pe>>=1}}else if(ht.length>0){if(at&&At){const de=Ze(ht[0]);n.texStorage2D(s.TEXTURE_2D,Re,nt,de.width,de.height)}for(let de=0,pe=ht.length;de<pe;de++)ke=ht[de],at?q&&n.texSubImage2D(s.TEXTURE_2D,de,0,0,Oe,tt,ke):n.texImage2D(s.TEXTURE_2D,de,nt,Oe,tt,ke);C.generateMipmaps=!1}else if(at){if(At){const de=Ze(Me);n.texStorage2D(s.TEXTURE_2D,Re,nt,de.width,de.height)}q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,tt,Me)}else n.texImage2D(s.TEXTURE_2D,0,nt,Oe,tt,Me);_(C)&&g(me),Xe.__version=he.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function fe(D,C,ae){if(C.image.length!==6)return;const me=Te(D,C),xe=C.source;n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+ae);const he=r.get(xe);if(xe.version!==he.__version||me===!0){n.activeTexture(s.TEXTURE0+ae);const Xe=St.getPrimaries(St.workingColorSpace),be=C.colorSpace===_r?null:St.getPrimaries(C.colorSpace),Ue=C.colorSpace===_r||Xe===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const dt=C.isCompressedTexture||C.image[0].isCompressedTexture,Me=C.image[0]&&C.image[0].isDataTexture,Oe=[];for(let pe=0;pe<6;pe++)!dt&&!Me?Oe[pe]=E(C.image[pe],!0,o.maxCubemapSize):Oe[pe]=Me?C.image[pe].image:C.image[pe],Oe[pe]=bt(C,Oe[pe]);const tt=Oe[0],nt=c.convert(C.format,C.colorSpace),ke=c.convert(C.type),ht=L(C.internalFormat,nt,ke,C.colorSpace),at=C.isVideoTexture!==!0,At=he.__version===void 0||me===!0,q=xe.dataReady;let Re=W(C,tt);ie(s.TEXTURE_CUBE_MAP,C);let de;if(dt){at&&At&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ht,tt.width,tt.height);for(let pe=0;pe<6;pe++){de=Oe[pe].mipmaps;for(let Le=0;Le<de.length;Le++){const Ne=de[Le];C.format!==ui?nt!==null?at?q&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Ne.width,Ne.height,nt,Ne.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ht,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Ne.width,Ne.height,nt,ke,Ne.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ht,Ne.width,Ne.height,0,nt,ke,Ne.data)}}}else{if(de=C.mipmaps,at&&At){de.length>0&&Re++;const pe=Ze(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ht,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){at?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Oe[pe].width,Oe[pe].height,nt,ke,Oe[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,Oe[pe].width,Oe[pe].height,0,nt,ke,Oe[pe].data);for(let Le=0;Le<de.length;Le++){const ot=de[Le].image[pe].image;at?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,ot.width,ot.height,nt,ke,ot.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ht,ot.width,ot.height,0,nt,ke,ot.data)}}else{at?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,nt,ke,Oe[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,nt,ke,Oe[pe]);for(let Le=0;Le<de.length;Le++){const Ne=de[Le];at?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,nt,ke,Ne.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ht,nt,ke,Ne.image[pe])}}}_(C)&&g(s.TEXTURE_CUBE_MAP),he.__version=xe.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function ge(D,C,ae,me,xe,he){const Xe=c.convert(ae.format,ae.colorSpace),be=c.convert(ae.type),Ue=L(ae.internalFormat,Xe,be,ae.colorSpace),dt=r.get(C),Me=r.get(ae);if(Me.__renderTarget=C,!dt.__hasExternalTextures){const Oe=Math.max(1,C.width>>he),tt=Math.max(1,C.height>>he);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?n.texImage3D(xe,he,Ue,Oe,tt,C.depth,0,Xe,be,null):n.texImage2D(xe,he,Ue,Oe,tt,0,Xe,be,null)}n.bindFramebuffer(s.FRAMEBUFFER,D),He(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,xe,Me.__webglTexture,0,Be(C)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,xe,Me.__webglTexture,he),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(D,C,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,D),C.depthBuffer){const me=C.depthTexture,xe=me&&me.isDepthTexture?me.type:null,he=b(C.stencilBuffer,xe),Xe=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=Be(C);He(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,he,C.width,C.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,he,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,he,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,D)}else{const me=C.textures;for(let xe=0;xe<me.length;xe++){const he=me[xe],Xe=c.convert(he.format,he.colorSpace),be=c.convert(he.type),Ue=L(he.internalFormat,Xe,be,he.colorSpace),dt=Be(C);ae&&He(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Ue,C.width,C.height):He(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Ue,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(C.depthTexture);me.__renderTarget=C,(!me.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ne(C.depthTexture,0);const xe=me.__webglTexture,he=Be(C);if(C.depthTexture.format===ks)He(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(C.depthTexture.format===Ws)He(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Ie(D){const C=r.get(D),ae=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),me){const xe=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,me.removeEventListener("dispose",xe)};me.addEventListener("dispose",xe),C.__depthDisposeCallback=xe}C.__boundDepthTexture=me}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");Ce(C.__webglFramebuffer,D)}else if(ae){C.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[me]),C.__webglDepthbuffer[me]===void 0)C.__webglDepthbuffer[me]=s.createRenderbuffer(),ve(C.__webglDepthbuffer[me],D,!1);else{const xe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=C.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,he)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),ve(C.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,xe)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(D,C,ae){const me=r.get(D);C!==void 0&&ge(me.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ae!==void 0&&Ie(D)}function wt(D){const C=D.texture,ae=r.get(D),me=r.get(C);D.addEventListener("dispose",U);const xe=D.textures,he=D.isWebGLCubeRenderTarget===!0,Xe=xe.length>1;if(Xe||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=C.version,u.memory.textures++),he){ae.__webglFramebuffer=[];for(let be=0;be<6;be++)if(C.mipmaps&&C.mipmaps.length>0){ae.__webglFramebuffer[be]=[];for(let Ue=0;Ue<C.mipmaps.length;Ue++)ae.__webglFramebuffer[be][Ue]=s.createFramebuffer()}else ae.__webglFramebuffer[be]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){ae.__webglFramebuffer=[];for(let be=0;be<C.mipmaps.length;be++)ae.__webglFramebuffer[be]=s.createFramebuffer()}else ae.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let be=0,Ue=xe.length;be<Ue;be++){const dt=r.get(xe[be]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&He(D)===!1){ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let be=0;be<xe.length;be++){const Ue=xe[be];ae.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[be]);const dt=c.convert(Ue.format,Ue.colorSpace),Me=c.convert(Ue.type),Oe=L(Ue.internalFormat,dt,Me,Ue.colorSpace,D.isXRRenderTarget===!0),tt=Be(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Oe,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,ae.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(ae.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ie(s.TEXTURE_CUBE_MAP,C);for(let be=0;be<6;be++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ue=0;Ue<C.mipmaps.length;Ue++)ge(ae.__webglFramebuffer[be][Ue],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue);else ge(ae.__webglFramebuffer[be],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);_(C)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let be=0,Ue=xe.length;be<Ue;be++){const dt=xe[be],Me=r.get(dt);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),ie(s.TEXTURE_2D,dt),ge(ae.__webglFramebuffer,D,dt,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),_(dt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let be=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(be,me.__webglTexture),ie(be,C),C.mipmaps&&C.mipmaps.length>0)for(let Ue=0;Ue<C.mipmaps.length;Ue++)ge(ae.__webglFramebuffer[Ue],D,C,s.COLOR_ATTACHMENT0,be,Ue);else ge(ae.__webglFramebuffer,D,C,s.COLOR_ATTACHMENT0,be,0);_(C)&&g(be),n.unbindTexture()}D.depthBuffer&&Ie(D)}function ft(D){const C=D.textures;for(let ae=0,me=C.length;ae<me;ae++){const xe=C[ae];if(_(xe)){const he=N(D),Xe=r.get(xe).__webglTexture;n.bindTexture(he,Xe),g(he),n.unbindTexture()}}}const Pt=[],$=[];function Jt(D){if(D.samples>0){if(He(D)===!1){const C=D.textures,ae=D.width,me=D.height;let xe=s.COLOR_BUFFER_BIT;const he=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=r.get(D),be=C.length>1;if(be)for(let Ue=0;Ue<C.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ue=0;Ue<C.length;Ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const dt=r.get(C[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,ae,me,0,0,ae,me,xe,s.NEAREST),h===!0&&(Pt.length=0,$.length=0,Pt.push(s.COLOR_ATTACHMENT0+Ue),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Pt.push(he),$.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Ue=0;Ue<C.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const dt=r.get(C[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,dt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const C=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Be(D){return Math.min(o.maxSamples,D.samples)}function He(D){const C=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ve(D){const C=u.render.frame;v.get(D)!==C&&(v.set(D,C),D.update())}function bt(D,C){const ae=D.colorSpace,me=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ae!==qs&&ae!==_r&&(St.getTransfer(ae)===Nt?(me!==ui||xe!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),C}function Ze(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=X,this.resetTextureUnits=j,this.setTexture2D=ne,this.setTexture2DArray=V,this.setTexture3D=Q,this.setTextureCube=k,this.rebindTextures=Qe,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=He}function RE(s,e){function n(r,o=_r){let c;const u=St.getTransfer(o);if(r===Wi)return s.UNSIGNED_BYTE;if(r===jd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===I0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===L0)return s.BYTE;if(r===D0)return s.SHORT;if(r===Oa)return s.UNSIGNED_SHORT;if(r===Wd)return s.INT;if(r===$r)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===za)return s.HALF_FLOAT;if(r===U0)return s.ALPHA;if(r===F0)return s.RGB;if(r===ui)return s.RGBA;if(r===O0)return s.LUMINANCE;if(r===k0)return s.LUMINANCE_ALPHA;if(r===ks)return s.DEPTH_COMPONENT;if(r===Ws)return s.DEPTH_STENCIL;if(r===z0)return s.RED;if(r===qd)return s.RED_INTEGER;if(r===B0)return s.RG;if(r===Yd)return s.RG_INTEGER;if(r===$d)return s.RGBA_INTEGER;if(r===Sl||r===Ml||r===El||r===wl)if(u===Nt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Sl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ml)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Sl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ml)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pd||r===md||r===gd||r===vd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===pd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===md)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===vd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_d||r===xd||r===yd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===_d||r===xd)return u===Nt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===yd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Sd||r===Md||r===Ed||r===wd||r===Td||r===Ad||r===Cd||r===bd||r===Rd||r===Pd||r===Nd||r===Ld||r===Dd||r===Id)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Sd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Md)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ed)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Td)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ad)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Cd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Pd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ld)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dd)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Id)return u===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tl||r===Ud||r===Fd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Tl)return u===Nt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ud)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===H0||r===Od||r===kd||r===zd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Tl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Od)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class PE extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fs extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NE={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const E of e.hand.values()){const _=n.getJointPose(E,r),g=this._getHandJoint(m,E);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const v=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=v.position.distanceTo(x.position),S=.02,w=.005;m.inputState.pinching&&y>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(NE)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Fs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const LE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DE=`
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

}`;class IE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new Sn,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Mr({vertexShader:LE,fragmentShader:DE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ln(new Wa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UE extends Ys{constructor(e,n){super();const r=this;let o=null,c=1,u=null,f="local-floor",h=1,m=null,v=null,x=null,y=null,S=null,w=null;const E=new IE,_=n.getContextAttributes();let g=null,N=null;const L=[],b=[],W=new _t;let O=null;const U=new Zn;U.viewport=new Vt;const z=new Zn;z.viewport=new Vt;const P=[U,z],A=new PE;let B=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=L[J];return fe===void 0&&(fe=new Ku,L[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=L[J];return fe===void 0&&(fe=new Ku,L[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=L[J];return fe===void 0&&(fe=new Ku,L[J]=fe),fe.getHandSpace()};function X(J){const fe=b.indexOf(J.inputSource);if(fe===-1)return;const ge=L[fe];ge!==void 0&&(ge.update(J.inputSource,J.frame,m||u),ge.dispatchEvent({type:J.type,data:J.inputSource}))}function Z(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",ne);for(let J=0;J<L.length;J++){const fe=b[J];fe!==null&&(b[J]=null,L[J].disconnect(fe))}B=null,j=null,E.reset(),e.setRenderTarget(g),S=null,y=null,x=null,o=null,N=null,Te.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(g=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(W),o.renderState.layers===void 0){const fe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,fe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Kr(S.framebufferWidth,S.framebufferHeight,{format:ui,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let fe=null,ge=null,ve=null;_.depth&&(ve=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=_.stencil?Ws:ks,ge=_.stencil?Gs:$r);const Ce={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:c};x=new XRWebGLBinding(o,n),y=x.createProjectionLayer(Ce),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),N=new Kr(y.textureWidth,y.textureHeight,{format:ui,type:Wi,depthTexture:new ig(y.textureWidth,y.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(f),Te.setContext(o),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ne(J){for(let fe=0;fe<J.removed.length;fe++){const ge=J.removed[fe],ve=b.indexOf(ge);ve>=0&&(b[ve]=null,L[ve].disconnect(ge))}for(let fe=0;fe<J.added.length;fe++){const ge=J.added[fe];let ve=b.indexOf(ge);if(ve===-1){for(let Ie=0;Ie<L.length;Ie++)if(Ie>=b.length){b.push(ge),ve=Ie;break}else if(b[Ie]===null){b[Ie]=ge,ve=Ie;break}if(ve===-1)break}const Ce=L[ve];Ce&&Ce.connect(ge)}}const V=new te,Q=new te;function k(J,fe,ge){V.setFromMatrixPosition(fe.matrixWorld),Q.setFromMatrixPosition(ge.matrixWorld);const ve=V.distanceTo(Q),Ce=fe.projectionMatrix.elements,Ie=ge.projectionMatrix.elements,Qe=Ce[14]/(Ce[10]-1),wt=Ce[14]/(Ce[10]+1),ft=(Ce[9]+1)/Ce[5],Pt=(Ce[9]-1)/Ce[5],$=(Ce[8]-1)/Ce[0],Jt=(Ie[8]+1)/Ie[0],Be=Qe*$,He=Qe*Jt,Ve=ve/(-$+Jt),bt=Ve*-$;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(bt),J.translateZ(Ve),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ce[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ze=Qe+Ve,D=wt+Ve,C=Be-bt,ae=He+(ve-bt),me=ft*wt/D*Ze,xe=Pt*wt/D*Ze;J.projectionMatrix.makePerspective(C,ae,me,xe,Ze,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function oe(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let fe=J.near,ge=J.far;E.texture!==null&&(E.depthNear>0&&(fe=E.depthNear),E.depthFar>0&&(ge=E.depthFar)),A.near=z.near=U.near=fe,A.far=z.far=U.far=ge,(B!==A.near||j!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,j=A.far),U.layers.mask=J.layers.mask|2,z.layers.mask=J.layers.mask|4,A.layers.mask=U.layers.mask|z.layers.mask;const ve=J.parent,Ce=A.cameras;oe(A,ve);for(let Ie=0;Ie<Ce.length;Ie++)oe(Ce[Ie],ve);Ce.length===2?k(A,U,z):A.projectionMatrix.copy(U.projectionMatrix),re(J,A,ve)};function re(J,fe,ge){ge===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(ge.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Bd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(J){h=J,y!==null&&(y.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let F=null;function ie(J,fe){if(v=fe.getViewerPose(m||u),w=fe,v!==null){const ge=v.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let ve=!1;ge.length!==A.cameras.length&&(A.cameras.length=0,ve=!0);for(let Ie=0;Ie<ge.length;Ie++){const Qe=ge[Ie];let wt=null;if(S!==null)wt=S.getViewport(Qe);else{const Pt=x.getViewSubImage(y,Qe);wt=Pt.viewport,Ie===0&&(e.setRenderTargetTextures(N,Pt.colorTexture,y.ignoreDepthValues?void 0:Pt.depthStencilTexture),e.setRenderTarget(N))}let ft=P[Ie];ft===void 0&&(ft=new Zn,ft.layers.enable(Ie),ft.viewport=new Vt,P[Ie]=ft),ft.matrix.fromArray(Qe.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Qe.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(wt.x,wt.y,wt.width,wt.height),Ie===0&&(A.matrix.copy(ft.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ve===!0&&A.cameras.push(ft)}const Ce=o.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ie=x.getDepthInformation(ge[0]);Ie&&Ie.isValid&&Ie.texture&&E.init(e,Ie,o.renderState)}}for(let ge=0;ge<L.length;ge++){const ve=b[ge],Ce=L[ge];ve!==null&&Ce!==void 0&&Ce.update(ve,fe,m||u)}F&&F(J,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),w=null}const Te=new tg;Te.setAnimationLoop(ie),this.setAnimationLoop=function(J){F=J},this.dispose=function(){}}}const Gr=new Si,FE=new Bt;function OE(s,e){function n(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function r(_,g){g.color.getRGB(_.fogColor.value,Q0(s)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function o(_,g,N,L,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(_,g):g.isMeshToonMaterial?(c(_,g),x(_,g)):g.isMeshPhongMaterial?(c(_,g),v(_,g)):g.isMeshStandardMaterial?(c(_,g),y(_,g),g.isMeshPhysicalMaterial&&S(_,g,b)):g.isMeshMatcapMaterial?(c(_,g),w(_,g)):g.isMeshDepthMaterial?c(_,g):g.isMeshDistanceMaterial?(c(_,g),E(_,g)):g.isMeshNormalMaterial?c(_,g):g.isLineBasicMaterial?(u(_,g),g.isLineDashedMaterial&&f(_,g)):g.isPointsMaterial?h(_,g,N,L):g.isSpriteMaterial?m(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,n(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===Dn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,n(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===Dn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,n(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,n(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const N=e.get(g),L=N.envMap,b=N.envMapRotation;L&&(_.envMap.value=L,Gr.copy(b),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),_.envMapRotation.value.setFromMatrix4(FE.makeRotationFromEuler(Gr)),_.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,_.aoMapTransform))}function u(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform))}function f(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function h(_,g,N,L){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*N,_.scale.value=L*.5,g.map&&(_.map.value=g.map,n(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function m(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function v(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function x(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function y(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function S(_,g,N){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Dn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=N.texture,_.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,_.specularIntensityMapTransform))}function w(_,g){g.matcap&&(_.matcap.value=g.matcap)}function E(_,g){const N=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(N.matrixWorld),_.nearDistance.value=N.shadow.camera.near,_.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function kE(s,e,n,r){let o={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,L){const b=L.program;r.uniformBlockBinding(N,b)}function m(N,L){let b=o[N.id];b===void 0&&(w(N),b=v(N),o[N.id]=b,N.addEventListener("dispose",_));const W=L.program;r.updateUBOMapping(N,W);const O=e.render.frame;c[N.id]!==O&&(y(N),c[N.id]=O)}function v(N){const L=x();N.__bindingPointIndex=L;const b=s.createBuffer(),W=N.__size,O=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,W,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,b),b}function x(){for(let N=0;N<f;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(N){const L=o[N.id],b=N.uniforms,W=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let O=0,U=b.length;O<U;O++){const z=Array.isArray(b[O])?b[O]:[b[O]];for(let P=0,A=z.length;P<A;P++){const B=z[P];if(S(B,O,P,W)===!0){const j=B.__offset,X=Array.isArray(B.value)?B.value:[B.value];let Z=0;for(let ne=0;ne<X.length;ne++){const V=X[ne],Q=E(V);typeof V=="number"||typeof V=="boolean"?(B.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,j+Z,B.__data)):V.isMatrix3?(B.__data[0]=V.elements[0],B.__data[1]=V.elements[1],B.__data[2]=V.elements[2],B.__data[3]=0,B.__data[4]=V.elements[3],B.__data[5]=V.elements[4],B.__data[6]=V.elements[5],B.__data[7]=0,B.__data[8]=V.elements[6],B.__data[9]=V.elements[7],B.__data[10]=V.elements[8],B.__data[11]=0):(V.toArray(B.__data,Z),Z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,L,b,W){const O=N.value,U=L+"_"+b;if(W[U]===void 0)return typeof O=="number"||typeof O=="boolean"?W[U]=O:W[U]=O.clone(),!0;{const z=W[U];if(typeof O=="number"||typeof O=="boolean"){if(z!==O)return W[U]=O,!0}else if(z.equals(O)===!1)return z.copy(O),!0}return!1}function w(N){const L=N.uniforms;let b=0;const W=16;for(let U=0,z=L.length;U<z;U++){const P=Array.isArray(L[U])?L[U]:[L[U]];for(let A=0,B=P.length;A<B;A++){const j=P[A],X=Array.isArray(j.value)?j.value:[j.value];for(let Z=0,ne=X.length;Z<ne;Z++){const V=X[Z],Q=E(V),k=b%W,oe=k%Q.boundary,re=k+oe;b+=oe,re!==0&&W-re<Q.storage&&(b+=W-re),j.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=b,b+=Q.storage}}}const O=b%W;return O>0&&(b+=W-O),N.__size=b,N.__cache={},this}function E(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function _(N){const L=N.target;L.removeEventListener("dispose",_);const b=u.indexOf(L.__bindingPointIndex);u.splice(b,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function g(){for(const N in o)s.deleteBuffer(o[N]);u=[],o={},c={}}return{bind:h,update:m,dispose:g}}class zE{constructor(e={}){const{canvas:n=Cx(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const w=new Uint32Array(4),E=new Int32Array(4);let _=null,g=null;const N=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=yr,this.toneMappingExposure=1;const b=this;let W=!1,O=0,U=0,z=null,P=-1,A=null;const B=new Vt,j=new Vt;let X=null;const Z=new vt(0);let ne=0,V=n.width,Q=n.height,k=1,oe=null,re=null;const F=new Vt(0,0,V,Q),ie=new Vt(0,0,V,Q);let Te=!1;const J=new Kd;let fe=!1,ge=!1;const ve=new Bt,Ce=new Bt,Ie=new te,Qe=new Vt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Pt(){return z===null?k:1}let $=r;function Jt(R,Y){return n.getContext(R,Y)}try{const R={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gd}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),$===null){const Y="webgl2";if($=Jt(Y,R),$===null)throw Jt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Be,He,Ve,bt,Ze,D,C,ae,me,xe,he,Xe,be,Ue,dt,Me,Oe,tt,nt,ke,ht,at,At,q;function Re(){Be=new WM($),Be.init(),at=new RE($,Be),He=new kM($,Be,e,at),Ve=new AE($,Be),He.reverseDepthBuffer&&y&&Ve.buffers.depth.setReversed(!0),bt=new qM($),Ze=new dE,D=new bE($,Be,Ve,Ze,He,at,bt),C=new BM(b),ae=new GM(b),me=new ey($),At=new FM($,me),xe=new jM($,me,bt,At),he=new $M($,xe,me,bt),nt=new YM($,He,D),Me=new zM(Ze),Xe=new uE(b,C,ae,Be,He,At,Me),be=new OE(b,Ze),Ue=new hE,dt=new xE(Be),tt=new UM(b,C,ae,Ve,he,S,h),Oe=new wE(b,he,He),q=new kE($,bt,He,Ve),ke=new OM($,Be,bt),ht=new XM($,Be,bt),bt.programs=Xe.programs,b.capabilities=He,b.extensions=Be,b.properties=Ze,b.renderLists=Ue,b.shadowMap=Oe,b.state=Ve,b.info=bt}Re();const de=new UE(b,$);this.xr=de,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const R=Be.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Be.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize(V,Q,!1))},this.getSize=function(R){return R.set(V,Q)},this.setSize=function(R,Y,ce=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,Q=Y,n.width=Math.floor(R*k),n.height=Math.floor(Y*k),ce===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(V*k,Q*k).floor()},this.setDrawingBufferSize=function(R,Y,ce){V=R,Q=Y,k=ce,n.width=Math.floor(R*ce),n.height=Math.floor(Y*ce),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(F)},this.setViewport=function(R,Y,ce,ue){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,Y,ce,ue),Ve.viewport(B.copy(F).multiplyScalar(k).round())},this.getScissor=function(R){return R.copy(ie)},this.setScissor=function(R,Y,ce,ue){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,Y,ce,ue),Ve.scissor(j.copy(ie).multiplyScalar(k).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(R){Ve.setScissorTest(Te=R)},this.setOpaqueSort=function(R){oe=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(R=!0,Y=!0,ce=!0){let ue=0;if(R){let K=!1;if(z!==null){const Ae=z.texture.format;K=Ae===$d||Ae===Yd||Ae===qd}if(K){const Ae=z.texture.type,Ee=Ae===Wi||Ae===$r||Ae===Oa||Ae===Gs||Ae===jd||Ae===Xd,qe=tt.getClearColor(),Ge=tt.getClearAlpha(),it=qe.r,st=qe.g,Ye=qe.b;Ee?(w[0]=it,w[1]=st,w[2]=Ye,w[3]=Ge,$.clearBufferuiv($.COLOR,0,w)):(E[0]=it,E[1]=st,E[2]=Ye,E[3]=Ge,$.clearBufferiv($.COLOR,0,E))}else ue|=$.COLOR_BUFFER_BIT}Y&&(ue|=$.DEPTH_BUFFER_BIT),ce&&(ue|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),Ue.dispose(),dt.dispose(),Ze.dispose(),C.dispose(),ae.dispose(),he.dispose(),At.dispose(),q.dispose(),Xe.dispose(),de.dispose(),de.removeEventListener("sessionstart",Zr),de.removeEventListener("sessionend",ji),Mi.stop()};function pe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const R=bt.autoReset,Y=Oe.enabled,ce=Oe.autoUpdate,ue=Oe.needsUpdate,K=Oe.type;Re(),bt.autoReset=R,Oe.enabled=Y,Oe.autoUpdate=ce,Oe.needsUpdate=ue,Oe.type=K}function Ne(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ot(R){const Y=R.target;Y.removeEventListener("dispose",ot),It(Y)}function It(R){qt(R),Ze.remove(R)}function qt(R){const Y=Ze.get(R).programs;Y!==void 0&&(Y.forEach(function(ce){Xe.releaseProgram(ce)}),R.isShaderMaterial&&Xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ce,ue,K,Ae){Y===null&&(Y=wt);const Ee=K.isMesh&&K.matrixWorld.determinant()<0,qe=qa(R,Y,ce,ue,K);Ve.setMaterial(ue,Ee);let Ge=ce.index,it=1;if(ue.wireframe===!0){if(Ge=xe.getWireframeAttribute(ce),Ge===void 0)return;it=2}const st=ce.drawRange,Ye=ce.attributes.position;let gt=st.start*it,Tt=(st.start+st.count)*it;Ae!==null&&(gt=Math.max(gt,Ae.start*it),Tt=Math.min(Tt,(Ae.start+Ae.count)*it)),Ge!==null?(gt=Math.max(gt,0),Tt=Math.min(Tt,Ge.count)):Ye!=null&&(gt=Math.max(gt,0),Tt=Math.min(Tt,Ye.count));const mt=Tt-gt;if(mt<0||mt===1/0)return;At.setup(K,ue,qe,ce,Ge);let ln,lt=ke;if(Ge!==null&&(ln=me.get(Ge),lt=ht,lt.setIndex(ln)),K.isMesh)ue.wireframe===!0?(Ve.setLineWidth(ue.wireframeLinewidth*Pt()),lt.setMode($.LINES)):lt.setMode($.TRIANGLES);else if(K.isLine){let Ke=ue.linewidth;Ke===void 0&&(Ke=1),Ve.setLineWidth(Ke*Pt()),K.isLineSegments?lt.setMode($.LINES):K.isLineLoop?lt.setMode($.LINE_LOOP):lt.setMode($.LINE_STRIP)}else K.isPoints?lt.setMode($.POINTS):K.isSprite&&lt.setMode($.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)lt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))lt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ke=K._multiDrawStarts,Qn=K._multiDrawCounts,Mt=K._multiDrawCount,cn=Ge?me.get(Ge).bytesPerElement:1,Jn=Ze.get(ue).currentProgram.getUniforms();for(let Yt=0;Yt<Mt;Yt++)Jn.setValue($,"_gl_DrawID",Yt),lt.render(Ke[Yt]/cn,Qn[Yt])}else if(K.isInstancedMesh)lt.renderInstances(gt,mt,K.count);else if(ce.isInstancedBufferGeometry){const Ke=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Qn=Math.min(ce.instanceCount,Ke);lt.renderInstances(gt,mt,Qn)}else lt.render(gt,mt)};function xt(R,Y,ce){R.transparent===!0&&R.side===zi&&R.forceSinglePass===!1?(R.side=Dn,R.needsUpdate=!0,Qr(R,Y,ce),R.side=Sr,R.needsUpdate=!0,Qr(R,Y,ce),R.side=zi):Qr(R,Y,ce)}this.compile=function(R,Y,ce=null){ce===null&&(ce=R),g=dt.get(ce),g.init(Y),L.push(g),ce.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),R!==ce&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights();const ue=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ae=K.material;if(Ae)if(Array.isArray(Ae))for(let Ee=0;Ee<Ae.length;Ee++){const qe=Ae[Ee];xt(qe,ce,K),ue.add(qe)}else xt(Ae,ce,K),ue.add(Ae)}),L.pop(),g=null,ue},this.compileAsync=function(R,Y,ce=null){const ue=this.compile(R,Y,ce);return new Promise(K=>{function Ae(){if(ue.forEach(function(Ee){Ze.get(Ee).currentProgram.isReady()&&ue.delete(Ee)}),ue.size===0){K(R);return}setTimeout(Ae,10)}Be.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Mn=null;function gn(R){Mn&&Mn(R)}function Zr(){Mi.stop()}function ji(){Mi.start()}const Mi=new tg;Mi.setAnimationLoop(gn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(R){Mn=R,de.setAnimationLoop(R),R===null?Mi.stop():Mi.start()},de.addEventListener("sessionstart",Zr),de.addEventListener("sessionend",ji),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(Y),Y=de.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,Y,z),g=dt.get(R,L.length),g.init(Y),L.push(g),Ce.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),J.setFromProjectionMatrix(Ce),ge=this.localClippingEnabled,fe=Me.init(this.clippingPlanes,ge),_=Ue.get(R,N.length),_.init(),N.push(_),de.enabled===!0&&de.isPresenting===!0){const Ae=b.xr.getDepthSensingMesh();Ae!==null&&Ei(Ae,Y,-1/0,b.sortObjects)}Ei(R,Y,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(oe,re),ft=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ft&&tt.addToRenderList(_,R),this.info.render.frame++,fe===!0&&Me.beginShadows();const ce=g.state.shadowsArray;Oe.render(ce,R,Y),fe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=_.opaque,K=_.transmissive;if(g.setupLights(),Y.isArrayCamera){const Ae=Y.cameras;if(K.length>0)for(let Ee=0,qe=Ae.length;Ee<qe;Ee++){const Ge=Ae[Ee];wr(ue,K,R,Ge)}ft&&tt.render(R);for(let Ee=0,qe=Ae.length;Ee<qe;Ee++){const Ge=Ae[Ee];Er(_,R,Ge,Ge.viewport)}}else K.length>0&&wr(ue,K,R,Y),ft&&tt.render(R),Er(_,R,Y);z!==null&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),R.isScene===!0&&R.onAfterRender(b,R,Y),At.resetDefaultState(),P=-1,A=null,L.pop(),L.length>0?(g=L[L.length-1],fe===!0&&Me.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,N.pop(),N.length>0?_=N[N.length-1]:_=null};function Ei(R,Y,ce,ue){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ce=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){ue&&Qe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ce);const Ee=he.update(R),qe=R.material;qe.visible&&_.push(R,Ee,qe,ce,Qe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Ee=he.update(R),qe=R.material;if(ue&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Qe.copy(R.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Qe.copy(Ee.boundingSphere.center)),Qe.applyMatrix4(R.matrixWorld).applyMatrix4(Ce)),Array.isArray(qe)){const Ge=Ee.groups;for(let it=0,st=Ge.length;it<st;it++){const Ye=Ge[it],gt=qe[Ye.materialIndex];gt&&gt.visible&&_.push(R,Ee,gt,ce,Qe.z,Ye)}}else qe.visible&&_.push(R,Ee,qe,ce,Qe.z,null)}}const Ae=R.children;for(let Ee=0,qe=Ae.length;Ee<qe;Ee++)Ei(Ae[Ee],Y,ce,ue)}function Er(R,Y,ce,ue){const K=R.opaque,Ae=R.transmissive,Ee=R.transparent;g.setupLightsView(ce),fe===!0&&Me.setGlobalState(b.clippingPlanes,ce),ue&&Ve.viewport(B.copy(ue)),K.length>0&&Xi(K,Y,ce),Ae.length>0&&Xi(Ae,Y,ce),Ee.length>0&&Xi(Ee,Y,ce),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function wr(R,Y,ce,ue){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ue.id]===void 0&&(g.state.transmissionRenderTarget[ue.id]=new Kr(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?za:Wi,minFilter:Yr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const Ae=g.state.transmissionRenderTarget[ue.id],Ee=ue.viewport||B;Ae.setSize(Ee.z,Ee.w);const qe=b.getRenderTarget();b.setRenderTarget(Ae),b.getClearColor(Z),ne=b.getClearAlpha(),ne<1&&b.setClearColor(16777215,.5),b.clear(),ft&&tt.render(ce);const Ge=b.toneMapping;b.toneMapping=yr;const it=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),g.setupLightsView(ue),fe===!0&&Me.setGlobalState(b.clippingPlanes,ue),Xi(R,ce,ue),D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae),Be.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Ye=0,gt=Y.length;Ye<gt;Ye++){const Tt=Y[Ye],mt=Tt.object,ln=Tt.geometry,lt=Tt.material,Ke=Tt.group;if(lt.side===zi&&mt.layers.test(ue.layers)){const Qn=lt.side;lt.side=Dn,lt.needsUpdate=!0,ja(mt,ce,ue,ln,lt,Ke),lt.side=Qn,lt.needsUpdate=!0,st=!0}}st===!0&&(D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae))}b.setRenderTarget(qe),b.setClearColor(Z,ne),it!==void 0&&(ue.viewport=it),b.toneMapping=Ge}function Xi(R,Y,ce){const ue=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,Ae=R.length;K<Ae;K++){const Ee=R[K],qe=Ee.object,Ge=Ee.geometry,it=ue===null?Ee.material:ue,st=Ee.group;qe.layers.test(ce.layers)&&ja(qe,Y,ce,Ge,it,st)}}function ja(R,Y,ce,ue,K,Ae){R.onBeforeRender(b,Y,ce,ue,K,Ae),R.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(b,Y,ce,ue,R,Ae),K.transparent===!0&&K.side===zi&&K.forceSinglePass===!1?(K.side=Dn,K.needsUpdate=!0,b.renderBufferDirect(ce,Y,ue,K,R,Ae),K.side=Sr,K.needsUpdate=!0,b.renderBufferDirect(ce,Y,ue,K,R,Ae),K.side=zi):b.renderBufferDirect(ce,Y,ue,K,R,Ae),R.onAfterRender(b,Y,ce,ue,K,Ae)}function Qr(R,Y,ce){Y.isScene!==!0&&(Y=wt);const ue=Ze.get(R),K=g.state.lights,Ae=g.state.shadowsArray,Ee=K.state.version,qe=Xe.getParameters(R,K.state,Ae,Y,ce),Ge=Xe.getProgramCacheKey(qe);let it=ue.programs;ue.environment=R.isMeshStandardMaterial?Y.environment:null,ue.fog=Y.fog,ue.envMap=(R.isMeshStandardMaterial?ae:C).get(R.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,it===void 0&&(R.addEventListener("dispose",ot),it=new Map,ue.programs=it);let st=it.get(Ge);if(st!==void 0){if(ue.currentProgram===st&&ue.lightsStateVersion===Ee)return fi(R,qe),st}else qe.uniforms=Xe.getUniforms(R),R.onBeforeCompile(qe,b),st=Xe.acquireProgram(qe,Ge),it.set(Ge,st),ue.uniforms=qe.uniforms;const Ye=ue.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=Me.uniform),fi(R,qe),ue.needsLights=Ol(R),ue.lightsStateVersion=Ee,ue.needsLights&&(Ye.ambientLightColor.value=K.state.ambient,Ye.lightProbe.value=K.state.probe,Ye.directionalLights.value=K.state.directional,Ye.directionalLightShadows.value=K.state.directionalShadow,Ye.spotLights.value=K.state.spot,Ye.spotLightShadows.value=K.state.spotShadow,Ye.rectAreaLights.value=K.state.rectArea,Ye.ltc_1.value=K.state.rectAreaLTC1,Ye.ltc_2.value=K.state.rectAreaLTC2,Ye.pointLights.value=K.state.point,Ye.pointLightShadows.value=K.state.pointShadow,Ye.hemisphereLights.value=K.state.hemi,Ye.directionalShadowMap.value=K.state.directionalShadowMap,Ye.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ye.spotShadowMap.value=K.state.spotShadowMap,Ye.spotLightMatrix.value=K.state.spotLightMatrix,Ye.spotLightMap.value=K.state.spotLightMap,Ye.pointShadowMap.value=K.state.pointShadowMap,Ye.pointShadowMatrix.value=K.state.pointShadowMatrix),ue.currentProgram=st,ue.uniformsList=null,st}function Xa(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Al.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function fi(R,Y){const ce=Ze.get(R);ce.outputColorSpace=Y.outputColorSpace,ce.batching=Y.batching,ce.batchingColor=Y.batchingColor,ce.instancing=Y.instancing,ce.instancingColor=Y.instancingColor,ce.instancingMorph=Y.instancingMorph,ce.skinning=Y.skinning,ce.morphTargets=Y.morphTargets,ce.morphNormals=Y.morphNormals,ce.morphColors=Y.morphColors,ce.morphTargetsCount=Y.morphTargetsCount,ce.numClippingPlanes=Y.numClippingPlanes,ce.numIntersection=Y.numClipIntersection,ce.vertexAlphas=Y.vertexAlphas,ce.vertexTangents=Y.vertexTangents,ce.toneMapping=Y.toneMapping}function qa(R,Y,ce,ue,K){Y.isScene!==!0&&(Y=wt),D.resetTextureUnits();const Ae=Y.fog,Ee=ue.isMeshStandardMaterial?Y.environment:null,qe=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:qs,Ge=(ue.isMeshStandardMaterial?ae:C).get(ue.envMap||Ee),it=ue.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,st=!!ce.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ye=!!ce.morphAttributes.position,gt=!!ce.morphAttributes.normal,Tt=!!ce.morphAttributes.color;let mt=yr;ue.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(mt=b.toneMapping);const ln=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,lt=ln!==void 0?ln.length:0,Ke=Ze.get(ue),Qn=g.state.lights;if(fe===!0&&(ge===!0||R!==A)){const vn=R===A&&ue.id===P;Me.setState(ue,R,vn)}let Mt=!1;ue.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Qn.state.version||Ke.outputColorSpace!==qe||K.isBatchedMesh&&Ke.batching===!1||!K.isBatchedMesh&&Ke.batching===!0||K.isBatchedMesh&&Ke.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ke.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ke.instancing===!1||!K.isInstancedMesh&&Ke.instancing===!0||K.isSkinnedMesh&&Ke.skinning===!1||!K.isSkinnedMesh&&Ke.skinning===!0||K.isInstancedMesh&&Ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ke.instancingMorph===!1&&K.morphTexture!==null||Ke.envMap!==Ge||ue.fog===!0&&Ke.fog!==Ae||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Me.numPlanes||Ke.numIntersection!==Me.numIntersection)||Ke.vertexAlphas!==it||Ke.vertexTangents!==st||Ke.morphTargets!==Ye||Ke.morphNormals!==gt||Ke.morphColors!==Tt||Ke.toneMapping!==mt||Ke.morphTargetsCount!==lt)&&(Mt=!0):(Mt=!0,Ke.__version=ue.version);let cn=Ke.currentProgram;Mt===!0&&(cn=Qr(ue,Y,K));let Jn=!1,Yt=!1,hi=!1;const Lt=cn.getUniforms(),Hn=Ke.uniforms;if(Ve.useProgram(cn.program)&&(Jn=!0,Yt=!0,hi=!0),ue.id!==P&&(P=ue.id,Yt=!0),Jn||A!==R){Ve.buffers.depth.getReversed()?(ve.copy(R.projectionMatrix),Rx(ve),Px(ve),Lt.setValue($,"projectionMatrix",ve)):Lt.setValue($,"projectionMatrix",R.projectionMatrix),Lt.setValue($,"viewMatrix",R.matrixWorldInverse);const Vn=Lt.map.cameraPosition;Vn!==void 0&&Vn.setValue($,Ie.setFromMatrixPosition(R.matrixWorld)),He.logarithmicDepthBuffer&&Lt.setValue($,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Lt.setValue($,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,Yt=!0,hi=!0)}if(K.isSkinnedMesh){Lt.setOptional($,K,"bindMatrix"),Lt.setOptional($,K,"bindMatrixInverse");const vn=K.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Lt.setValue($,"boneTexture",vn.boneTexture,D))}K.isBatchedMesh&&(Lt.setOptional($,K,"batchingTexture"),Lt.setValue($,"batchingTexture",K._matricesTexture,D),Lt.setOptional($,K,"batchingIdTexture"),Lt.setValue($,"batchingIdTexture",K._indirectTexture,D),Lt.setOptional($,K,"batchingColorTexture"),K._colorsTexture!==null&&Lt.setValue($,"batchingColorTexture",K._colorsTexture,D));const wi=ce.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&nt.update(K,ce,cn),(Yt||Ke.receiveShadow!==K.receiveShadow)&&(Ke.receiveShadow=K.receiveShadow,Lt.setValue($,"receiveShadow",K.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Hn.envMap.value=Ge,Hn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&Y.environment!==null&&(Hn.envMapIntensity.value=Y.environmentIntensity),Yt&&(Lt.setValue($,"toneMappingExposure",b.toneMappingExposure),Ke.needsLights&&Ya(Hn,hi),Ae&&ue.fog===!0&&be.refreshFogUniforms(Hn,Ae),be.refreshMaterialUniforms(Hn,ue,k,Q,g.state.transmissionRenderTarget[R.id]),Al.upload($,Xa(Ke),Hn,D)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Al.upload($,Xa(Ke),Hn,D),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Lt.setValue($,"center",K.center),Lt.setValue($,"modelViewMatrix",K.modelViewMatrix),Lt.setValue($,"normalMatrix",K.normalMatrix),Lt.setValue($,"modelMatrix",K.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const vn=ue.uniformsGroups;for(let Vn=0,En=vn.length;Vn<En;Vn++){const $a=vn[Vn];q.update($a,cn),q.bind($a,cn)}}return cn}function Ya(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Ol(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,Y,ce){Ze.get(R.texture).__webglTexture=Y,Ze.get(R.depthTexture).__webglTexture=ce;const ue=Ze.get(R);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=ce===void 0,ue.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Y){const ce=Ze.get(R);ce.__webglFramebuffer=Y,ce.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,ce=0){z=R,O=Y,U=ce;let ue=!0,K=null,Ae=!1,Ee=!1;if(R){const Ge=Ze.get(R);if(Ge.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer($.FRAMEBUFFER,null),ue=!1;else if(Ge.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Ge.__hasExternalTextures)D.rebindTextures(R,Ze.get(R.texture).__webglTexture,Ze.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ye=R.depthTexture;if(Ge.__boundDepthTexture!==Ye){if(Ye!==null&&Ze.has(Ye)&&(R.width!==Ye.image.width||R.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const it=R.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ee=!0);const st=Ze.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(st[Y])?K=st[Y][ce]:K=st[Y],Ae=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?K=Ze.get(R).__webglMultisampledFramebuffer:Array.isArray(st)?K=st[ce]:K=st,B.copy(R.viewport),j.copy(R.scissor),X=R.scissorTest}else B.copy(F).multiplyScalar(k).floor(),j.copy(ie).multiplyScalar(k).floor(),X=Te;if(Ve.bindFramebuffer($.FRAMEBUFFER,K)&&ue&&Ve.drawBuffers(R,K),Ve.viewport(B),Ve.scissor(j),Ve.setScissorTest(X),Ae){const Ge=Ze.get(R.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ge.__webglTexture,ce)}else if(Ee){const Ge=Ze.get(R.texture),it=Y||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ge.__webglTexture,ce||0,it)}P=-1},this.readRenderTargetPixels=function(R,Y,ce,ue,K,Ae,Ee){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(qe=qe[Ee]),qe){Ve.bindFramebuffer($.FRAMEBUFFER,qe);try{const Ge=R.texture,it=Ge.format,st=Ge.type;if(!He.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ue&&ce>=0&&ce<=R.height-K&&$.readPixels(Y,ce,ue,K,at.convert(it),at.convert(st),Ae)}finally{const Ge=z!==null?Ze.get(z).__webglFramebuffer:null;Ve.bindFramebuffer($.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ce,ue,K,Ae,Ee){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=Ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(qe=qe[Ee]),qe){const Ge=R.texture,it=Ge.format,st=Ge.type;if(!He.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=R.width-ue&&ce>=0&&ce<=R.height-K){Ve.bindFramebuffer($.FRAMEBUFFER,qe);const Ye=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,Ye),$.bufferData($.PIXEL_PACK_BUFFER,Ae.byteLength,$.STREAM_READ),$.readPixels(Y,ce,ue,K,at.convert(it),at.convert(st),0);const gt=z!==null?Ze.get(z).__webglFramebuffer:null;Ve.bindFramebuffer($.FRAMEBUFFER,gt);const Tt=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await bx($,Tt,4),$.bindBuffer($.PIXEL_PACK_BUFFER,Ye),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Ae),$.deleteBuffer(Ye),$.deleteSync(Tt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Y=null,ce=0){R.isTexture!==!0&&(Ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1]);const ue=Math.pow(2,-ce),K=Math.floor(R.image.width*ue),Ae=Math.floor(R.image.height*ue),Ee=Y!==null?Y.x:0,qe=Y!==null?Y.y:0;D.setTexture2D(R,0),$.copyTexSubImage2D($.TEXTURE_2D,ce,0,0,Ee,qe,K,Ae),Ve.unbindTexture()},this.copyTextureToTexture=function(R,Y,ce=null,ue=null,K=0){R.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,R=arguments[1],Y=arguments[2],K=arguments[3]||0,ce=null);let Ae,Ee,qe,Ge,it,st,Ye,gt,Tt;const mt=R.isCompressedTexture?R.mipmaps[K]:R.image;ce!==null?(Ae=ce.max.x-ce.min.x,Ee=ce.max.y-ce.min.y,qe=ce.isBox3?ce.max.z-ce.min.z:1,Ge=ce.min.x,it=ce.min.y,st=ce.isBox3?ce.min.z:0):(Ae=mt.width,Ee=mt.height,qe=mt.depth||1,Ge=0,it=0,st=0),ue!==null?(Ye=ue.x,gt=ue.y,Tt=ue.z):(Ye=0,gt=0,Tt=0);const ln=at.convert(Y.format),lt=at.convert(Y.type);let Ke;Y.isData3DTexture?(D.setTexture3D(Y,0),Ke=$.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(D.setTexture2DArray(Y,0),Ke=$.TEXTURE_2D_ARRAY):(D.setTexture2D(Y,0),Ke=$.TEXTURE_2D),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Y.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,Y.unpackAlignment);const Qn=$.getParameter($.UNPACK_ROW_LENGTH),Mt=$.getParameter($.UNPACK_IMAGE_HEIGHT),cn=$.getParameter($.UNPACK_SKIP_PIXELS),Jn=$.getParameter($.UNPACK_SKIP_ROWS),Yt=$.getParameter($.UNPACK_SKIP_IMAGES);$.pixelStorei($.UNPACK_ROW_LENGTH,mt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,mt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,Ge),$.pixelStorei($.UNPACK_SKIP_ROWS,it),$.pixelStorei($.UNPACK_SKIP_IMAGES,st);const hi=R.isDataArrayTexture||R.isData3DTexture,Lt=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Hn=Ze.get(R),wi=Ze.get(Y),vn=Ze.get(Hn.__renderTarget),Vn=Ze.get(wi.__renderTarget);Ve.bindFramebuffer($.READ_FRAMEBUFFER,vn.__webglFramebuffer),Ve.bindFramebuffer($.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let En=0;En<qe;En++)hi&&$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ze.get(R).__webglTexture,K,st+En),R.isDepthTexture?(Lt&&$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ze.get(Y).__webglTexture,K,Tt+En),$.blitFramebuffer(Ge,it,Ae,Ee,Ye,gt,Ae,Ee,$.DEPTH_BUFFER_BIT,$.NEAREST)):Lt?$.copyTexSubImage3D(Ke,K,Ye,gt,Tt+En,Ge,it,Ae,Ee):$.copyTexSubImage2D(Ke,K,Ye,gt,Tt+En,Ge,it,Ae,Ee);Ve.bindFramebuffer($.READ_FRAMEBUFFER,null),Ve.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Lt?R.isDataTexture||R.isData3DTexture?$.texSubImage3D(Ke,K,Ye,gt,Tt,Ae,Ee,qe,ln,lt,mt.data):Y.isCompressedArrayTexture?$.compressedTexSubImage3D(Ke,K,Ye,gt,Tt,Ae,Ee,qe,ln,mt.data):$.texSubImage3D(Ke,K,Ye,gt,Tt,Ae,Ee,qe,ln,lt,mt):R.isDataTexture?$.texSubImage2D($.TEXTURE_2D,K,Ye,gt,Ae,Ee,ln,lt,mt.data):R.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,K,Ye,gt,mt.width,mt.height,ln,mt.data):$.texSubImage2D($.TEXTURE_2D,K,Ye,gt,Ae,Ee,ln,lt,mt);$.pixelStorei($.UNPACK_ROW_LENGTH,Qn),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Mt),$.pixelStorei($.UNPACK_SKIP_PIXELS,cn),$.pixelStorei($.UNPACK_SKIP_ROWS,Jn),$.pixelStorei($.UNPACK_SKIP_IMAGES,Yt),K===0&&Y.generateMipmaps&&$.generateMipmap(Ke),Ve.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,ce=null,ue=null,K=0){return R.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ce=arguments[0]||null,ue=arguments[1]||null,R=arguments[2],Y=arguments[3],K=arguments[4]||0),Ua('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,ce,ue,K)},this.initRenderTarget=function(R){Ze.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Ve.unbindTexture()},this.resetState=function(){O=0,U=0,z=null,Ve.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),n.unpackColorSpace=St._getUnpackColorSpace()}}class BE extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Qd extends $s{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pl=new te,Nl=new te,km=new Bt,Ia=new q0,xl=new Ul,Zu=new te,zm=new te;class lg extends on{constructor(e=new Bn,n=new Qd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)Pl.fromBufferAttribute(n,o-1),Nl.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Pl.distanceTo(Nl);e.setAttribute("lineDistance",new Xt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(o),xl.radius+=c,e.ray.intersectsSphere(xl)===!1)return;km.copy(o).invert(),Ia.copy(e.ray).applyMatrix4(km);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=this.isLineSegments?2:1,v=r.index,y=r.attributes.position;if(v!==null){const S=Math.max(0,u.start),w=Math.min(v.count,u.start+u.count);for(let E=S,_=w-1;E<_;E+=m){const g=v.getX(E),N=v.getX(E+1),L=yl(this,e,Ia,h,g,N);L&&n.push(L)}if(this.isLineLoop){const E=v.getX(w-1),_=v.getX(S),g=yl(this,e,Ia,h,E,_);g&&n.push(g)}}else{const S=Math.max(0,u.start),w=Math.min(y.count,u.start+u.count);for(let E=S,_=w-1;E<_;E+=m){const g=yl(this,e,Ia,h,E,E+1);g&&n.push(g)}if(this.isLineLoop){const E=yl(this,e,Ia,h,w-1,S);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function yl(s,e,n,r,o,c){const u=s.geometry.attributes.position;if(Pl.fromBufferAttribute(u,o),Nl.fromBufferAttribute(u,c),n.distanceSqToSegment(Pl,Nl,Zu,zm)>r)return;Zu.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Zu);if(!(h<e.near||h>e.far))return{distance:h,point:zm.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Bm=new te,Hm=new te;class HE extends lg{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)Bm.fromBufferAttribute(n,o),Hm.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Bm.distanceTo(Hm);e.setAttribute("lineDistance",new Xt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ll extends Bn{constructor(e=1,n=1,r=1,o=32,c=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:f,thetaLength:h};const m=this;o=Math.floor(o),c=Math.floor(c);const v=[],x=[],y=[],S=[];let w=0;const E=[],_=r/2;let g=0;N(),u===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new Xt(x,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(S,2));function N(){const b=new te,W=new te;let O=0;const U=(n-e)/r;for(let z=0;z<=c;z++){const P=[],A=z/c,B=A*(n-e)+e;for(let j=0;j<=o;j++){const X=j/o,Z=X*h+f,ne=Math.sin(Z),V=Math.cos(Z);W.x=B*ne,W.y=-A*r+_,W.z=B*V,x.push(W.x,W.y,W.z),b.set(ne,U,V).normalize(),y.push(b.x,b.y,b.z),S.push(X,1-A),P.push(w++)}E.push(P)}for(let z=0;z<o;z++)for(let P=0;P<c;P++){const A=E[P][z],B=E[P+1][z],j=E[P+1][z+1],X=E[P][z+1];(e>0||P!==0)&&(v.push(A,B,X),O+=3),(n>0||P!==c-1)&&(v.push(B,j,X),O+=3)}m.addGroup(g,O,0),g+=O}function L(b){const W=w,O=new _t,U=new te;let z=0;const P=b===!0?e:n,A=b===!0?1:-1;for(let j=1;j<=o;j++)x.push(0,_*A,0),y.push(0,A,0),S.push(.5,.5),w++;const B=w;for(let j=0;j<=o;j++){const Z=j/o*h+f,ne=Math.cos(Z),V=Math.sin(Z);U.x=P*V,U.y=_*A,U.z=P*ne,x.push(U.x,U.y,U.z),y.push(0,A,0),O.x=ne*.5+.5,O.y=V*.5*A+.5,S.push(O.x,O.y),w++}for(let j=0;j<o;j++){const X=W+j,Z=B+j;b===!0?v.push(Z,Z+1,X):v.push(Z+1,Z,X),z+=3}m.addGroup(g,z,b===!0?1:2),g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jd extends Bn{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const c=[],u=[];f(o),m(r),v(),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(c.slice(),3)),this.setAttribute("uv",new Xt(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(N){const L=new te,b=new te,W=new te;for(let O=0;O<n.length;O+=3)S(n[O+0],L),S(n[O+1],b),S(n[O+2],W),h(L,b,W,N)}function h(N,L,b,W){const O=W+1,U=[];for(let z=0;z<=O;z++){U[z]=[];const P=N.clone().lerp(b,z/O),A=L.clone().lerp(b,z/O),B=O-z;for(let j=0;j<=B;j++)j===0&&z===O?U[z][j]=P:U[z][j]=P.clone().lerp(A,j/B)}for(let z=0;z<O;z++)for(let P=0;P<2*(O-z)-1;P++){const A=Math.floor(P/2);P%2===0?(y(U[z][A+1]),y(U[z+1][A]),y(U[z][A])):(y(U[z][A+1]),y(U[z+1][A+1]),y(U[z+1][A]))}}function m(N){const L=new te;for(let b=0;b<c.length;b+=3)L.x=c[b+0],L.y=c[b+1],L.z=c[b+2],L.normalize().multiplyScalar(N),c[b+0]=L.x,c[b+1]=L.y,c[b+2]=L.z}function v(){const N=new te;for(let L=0;L<c.length;L+=3){N.x=c[L+0],N.y=c[L+1],N.z=c[L+2];const b=_(N)/2/Math.PI+.5,W=g(N)/Math.PI+.5;u.push(b,1-W)}w(),x()}function x(){for(let N=0;N<u.length;N+=6){const L=u[N+0],b=u[N+2],W=u[N+4],O=Math.max(L,b,W),U=Math.min(L,b,W);O>.9&&U<.1&&(L<.2&&(u[N+0]+=1),b<.2&&(u[N+2]+=1),W<.2&&(u[N+4]+=1))}}function y(N){c.push(N.x,N.y,N.z)}function S(N,L){const b=N*3;L.x=e[b+0],L.y=e[b+1],L.z=e[b+2]}function w(){const N=new te,L=new te,b=new te,W=new te,O=new _t,U=new _t,z=new _t;for(let P=0,A=0;P<c.length;P+=9,A+=6){N.set(c[P+0],c[P+1],c[P+2]),L.set(c[P+3],c[P+4],c[P+5]),b.set(c[P+6],c[P+7],c[P+8]),O.set(u[A+0],u[A+1]),U.set(u[A+2],u[A+3]),z.set(u[A+4],u[A+5]),W.copy(N).add(L).add(b).divideScalar(3);const B=_(W);E(O,A+0,N,B),E(U,A+2,L,B),E(z,A+4,b,B)}}function E(N,L,b,W){W<0&&N.x===1&&(u[L]=N.x-1),b.x===0&&b.z===0&&(u[L]=W/2/Math.PI+.5)}function _(N){return Math.atan2(N.z,-N.x)}function g(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.vertices,e.indices,e.radius,e.details)}}class ef extends Jd{constructor(e=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ef(e.radius,e.detail)}}class tf extends Bn{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let m=0;const v=[],x=new te,y=new te,S=[],w=[],E=[],_=[];for(let g=0;g<=r;g++){const N=[],L=g/r;let b=0;g===0&&u===0?b=.5/n:g===r&&h===Math.PI&&(b=-.5/n);for(let W=0;W<=n;W++){const O=W/n;x.x=-e*Math.cos(o+O*c)*Math.sin(u+L*f),x.y=e*Math.cos(u+L*f),x.z=e*Math.sin(o+O*c)*Math.sin(u+L*f),w.push(x.x,x.y,x.z),y.copy(x).normalize(),E.push(y.x,y.y,y.z),_.push(O+b,1-L),N.push(m++)}v.push(N)}for(let g=0;g<r;g++)for(let N=0;N<n;N++){const L=v[g][N+1],b=v[g][N],W=v[g+1][N],O=v[g+1][N+1];(g!==0||u>0)&&S.push(L,b,O),(g!==r-1||h<Math.PI)&&S.push(b,W,O)}this.setIndex(S),this.setAttribute("position",new Xt(w,3)),this.setAttribute("normal",new Xt(E,3)),this.setAttribute("uv",new Xt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qu extends $s{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=V0,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Vm={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class VE{constructor(e,n,r){const o=this;let c=!1,u=0,f=0,h;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(v){f++,c===!1&&o.onStart!==void 0&&o.onStart(v,u,f),c=!0},this.itemEnd=function(v){u++,o.onProgress!==void 0&&o.onProgress(v,u,f),u===f&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return h?h(v):v},this.setURLModifier=function(v){return h=v,this},this.addHandler=function(v,x){return m.push(v,x),this},this.removeHandler=function(v){const x=m.indexOf(v);return x!==-1&&m.splice(x,2),this},this.getHandler=function(v){for(let x=0,y=m.length;x<y;x+=2){const S=m[x],w=m[x+1];if(S.global&&(S.lastIndex=0),S.test(v))return w}return null}}}const GE=new VE;class nf{constructor(e){this.manager=e!==void 0?e:GE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(o,c){r.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}nf.DEFAULT_MATERIAL_NAME="__DEFAULT";class WE extends nf{constructor(e){super(e)}load(e,n,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Vm.get(e);if(u!==void 0)return c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u;const f=ka("img");function h(){v(),Vm.add(e,this),n&&n(this),c.manager.itemEnd(e)}function m(x){v(),o&&o(x),c.manager.itemError(e),c.manager.itemEnd(e)}function v(){f.removeEventListener("load",h,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),c.manager.itemStart(e),f.src=e,f}}class jE extends nf{constructor(e){super(e)}load(e,n,r,o){const c=new Sn,u=new WE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){c.image=f,c.needsUpdate=!0,n!==void 0&&n(c)},r,o),c}}class cg extends on{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Ju=new Bt,Gm=new te,Wm=new te;class XE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kd,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Gm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gm),Wm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Wm),n.updateMatrixWorld(),Ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qE extends XE{constructor(){super(new ng(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jm extends cg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new qE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class YE extends cg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class $E extends HE{constructor(e=10,n=10,r=4473924,o=8947848){r=new vt(r),o=new vt(o);const c=n/2,u=e/n,f=e/2,h=[],m=[];for(let y=0,S=0,w=-f;y<=n;y++,w+=u){h.push(-f,0,w,f,0,w),h.push(w,0,-f,w,0,f);const E=y===c?r:o;E.toArray(m,S),S+=3,E.toArray(m,S),S+=3,E.toArray(m,S),S+=3,E.toArray(m,S),S+=3}const v=new Bn;v.setAttribute("position",new Xt(h,3)),v.setAttribute("color",new Xt(m,3));const x=new Qd({vertexColors:!0,toneMapped:!1});super(v,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);const KE=({heightmapUrl:s,textureUrl:e,pathCoords:n,startCoords:r,goalCoords:o,elevationRange:c})=>{const u=je.useRef(null),[f,h]=je.useState(!1),[m,v]=je.useState(1.8),[x,y]=je.useState(!1),S=je.useRef(null),w=je.useRef(null),E=je.useRef(null),_=je.useRef(null),g=je.useRef(null),N=je.useRef(null),L=je.useRef(null),b=je.useRef(null),W=je.useRef(!1),O=je.useRef(!1),U=je.useRef({x:0,y:0}),z=je.useRef({radius:160,theta:Math.PI/4,phi:Math.PI/3.2}),P=je.useRef(new te(0,0,0)),A=()=>{if(!w.current)return;const{radius:j,theta:X,phi:Z}=z.current,ne=P.current;w.current.position.x=ne.x+j*Math.sin(Z)*Math.sin(X),w.current.position.y=ne.y+j*Math.cos(Z),w.current.position.z=ne.z+j*Math.sin(Z)*Math.cos(X),w.current.lookAt(ne)},B=()=>{z.current={radius:160,theta:Math.PI/4,phi:Math.PI/3.2},P.current.set(0,0,0),A()};return je.useEffect(()=>{if(!u.current)return;const j=u.current;if(E.current)return;const X=j.clientWidth,Z=j.clientHeight||450,ne=new BE;ne.background=new vt(657935),S.current=ne;const V=new Zn(45,X/Z,.1,1e3);w.current=V,A();const Q=new zE({antialias:!0,alpha:!1});Q.setSize(X,Z),Q.setPixelRatio(Math.min(window.devicePixelRatio,2)),Q.shadowMap.enabled=!0,Q.shadowMap.type=R0,E.current=Q,j.contains(Q.domElement)||j.appendChild(Q.domElement);const k=new YE(16772829,.6);ne.add(k);const oe=new jm(16774634,1.2);oe.position.set(-100,120,-100),oe.castShadow=!0,ne.add(oe);const re=new jm(4482696,.4);re.position.set(100,-50,100),ne.add(re);const F=new $E(160,16,3355460,2039598);F.position.y=-15,ne.add(F);let ie;const Te=()=>{ie=requestAnimationFrame(Te),E.current&&S.current&&w.current&&E.current.render(S.current,w.current)};Te();const J=()=>{if(!j||!E.current||!w.current)return;const fe=j.clientWidth,ge=j.clientHeight||450;w.current.aspect=fe/ge,w.current.updateProjectionMatrix(),E.current.setSize(fe,ge)};return window.addEventListener("resize",J),()=>{cancelAnimationFrame(ie),window.removeEventListener("resize",J),E.current&&(E.current.dispose(),E.current.domElement.remove(),E.current=null),S.current=null,w.current=null,_.current=null,g.current=null,b.current=null}},[]),je.useEffect(()=>{const j=u.current;if(!j)return;const X=k=>{k.button===0&&(W.current=!0),k.button===2&&(O.current=!0),U.current={x:k.clientX,y:k.clientY}},Z=k=>{const oe=k.clientX-U.current.x,re=k.clientY-U.current.y;if(U.current={x:k.clientX,y:k.clientY},W.current)z.current.theta-=oe*.008,z.current.phi=Math.max(.1,Math.min(Math.PI/2.05,z.current.phi-re*.008)),A();else if(O.current){const F=z.current.radius*.001;P.current.x-=oe*F,P.current.z+=re*F,A()}},ne=()=>{W.current=!1,O.current=!1},V=k=>{k.preventDefault(),z.current.radius=Math.max(30,Math.min(350,z.current.radius+k.deltaY*.12)),A()},Q=k=>k.preventDefault();return j.addEventListener("mousedown",X),window.addEventListener("mousemove",Z),window.addEventListener("mouseup",ne),j.addEventListener("wheel",V,{passive:!1}),j.addEventListener("contextmenu",Q),()=>{j.removeEventListener("mousedown",X),window.removeEventListener("mousemove",Z),window.removeEventListener("mouseup",ne),j.removeEventListener("wheel",V),j.removeEventListener("contextmenu",Q)}},[]),je.useEffect(()=>{if(!S.current||!s)return;const j=S.current;y(!0);const X=127,Z=new Wa(100,100,X,X);Z.rotateX(-Math.PI/2);const ne=new Image;ne.crossOrigin="anonymous",ne.src=s,ne.onload=()=>{const V=document.createElement("canvas");V.width=X+1,V.height=X+1;const Q=V.getContext("2d");if(!Q)return;Q.drawImage(ne,0,0,X+1,X+1);const k=Q.getImageData(0,0,X+1,X+1).data,oe=Z.attributes.position,re=oe.count,F=new Float32Array(re);for(let J=0;J<re;J++){const fe=k[J*4]/255;F[J]=fe,oe.setY(J,fe*12*m)}b.current=F,Z.computeVertexNormals();const ie=new jE,Te=J=>{J.wrapS=Bi,J.wrapT=Bi;const fe=new Qu({map:J,wireframe:f,roughness:.85,metalness:.15});_.current&&(j.remove(_.current),_.current.geometry.dispose());const ge=new Ln(Z,fe);ge.castShadow=!0,ge.receiveShadow=!0,j.add(ge),_.current=ge,y(!1)};e?ie.load(e,Te):ie.load(s,Te)},ne.onerror=()=>{y(!1)}},[s,e]),je.useEffect(()=>{_.current&&_.current.material&&(_.current.material.wireframe=f)},[f]),je.useEffect(()=>{if(!_.current||!b.current)return;const j=_.current.geometry,X=j.attributes.position,Z=b.current;for(let ne=0;ne<X.count;ne++)X.setY(ne,Z[ne]*12*m);X.needsUpdate=!0,j.computeVertexNormals()},[m]),je.useEffect(()=>{if(!S.current)return;const j=S.current,X=b.current,Z=127,ne=V=>{const[Q,k]=V,oe=k/512*100-50,re=Q/512*100-50;let F=.5;if(X){const ie=Math.min(Z,Math.floor(Q/512*Z)),Te=Math.min(Z,Math.floor(k/512*Z));F=(X[ie*(Z+1)+Te]||0)*12*m}return{x:oe,y:F,z:re}};if(N.current&&(j.remove(N.current),N.current=null),r){const V=ne(r),Q=new Fs,k=new Ll(.2,.2,4,8),oe=new Rl({color:1096065}),re=new Ln(k,oe);re.position.y=2,Q.add(re);const F=new tf(1.2,16,16),ie=new Qu({color:1096065,emissive:366185,emissiveIntensity:.6}),Te=new Ln(F,ie);Te.position.y=4.5,Q.add(Te),Q.position.set(V.x,V.y,V.z),j.add(Q),N.current=Q}if(L.current&&(j.remove(L.current),L.current=null),o){const V=ne(o),Q=new Fs,k=new Ll(.2,.2,5,8),oe=new Rl({color:54015}),re=new Ln(k,oe);re.position.y=2.5,Q.add(re);const F=new ef(1.4,0),ie=new Qu({color:54015,emissive:165063,emissiveIntensity:.7}),Te=new Ln(F,ie);Te.position.y=5.5,Q.add(Te),Q.position.set(V.x,V.y,V.z),j.add(Q),L.current=Q}},[r,o,m]),je.useEffect(()=>{if(!S.current)return;const j=S.current;if(g.current&&(j.remove(g.current),g.current.geometry.dispose(),g.current=null),n.length>1&&b.current){const X=[],Z=b.current,ne=127;for(let oe=0;oe<n.length;oe++){const[re,F]=n[oe],ie=F/512*100-50,Te=re/512*100-50,J=Math.min(ne,Math.floor(re/512*ne)),fe=Math.min(ne,Math.floor(F/512*ne)),ge=J*(ne+1)+fe,Ce=(Z[ge]||0)*12*m+.8;X.push(new te(ie,Ce,Te))}const V=new Bn().setFromPoints(X),Q=new Qd({color:1096065,linewidth:4}),k=new lg(V,Q);j.add(k),g.current=k}},[n,m]),T.jsxs("div",{className:"flex flex-col h-full bg-mars-900 rounded-xl border border-mars-700/60 overflow-hidden relative",children:[T.jsxs("div",{className:"bg-mars-800/80 px-4 py-2 border-b border-mars-700/50 flex items-center justify-between text-xs font-mono",children:[T.jsxs("div",{className:"flex items-center space-x-2 text-slate-300 min-w-0",children:[T.jsx($m,{className:"w-4 h-4 text-cyan-400 flex-shrink-0"}),T.jsx("span",{className:"font-semibold text-white truncate text-[11px]",children:"3D SURFACE MODEL"}),c&&T.jsxs("span",{className:"text-[10px] text-emerald-400 bg-emerald-950/70 px-1.5 py-0.5 rounded border border-emerald-800/60 whitespace-nowrap hidden sm:inline",children:[c.min,"m → ",c.max,"m"]})]}),T.jsxs("div",{className:"flex items-center space-x-4",children:[T.jsxs("div",{className:"flex items-center space-x-2",children:[T.jsx(E_,{className:"w-3.5 h-3.5 text-mars-400"}),T.jsx("span",{className:"text-slate-400 text-[11px]",children:"Exagg:"}),T.jsx("input",{type:"range",min:"0.5",max:"4.0",step:"0.1",value:m,onChange:j=>v(parseFloat(j.target.value)),className:"w-20 accent-mars-500 cursor-pointer h-1.5 bg-mars-700 rounded-lg"}),T.jsxs("span",{className:"text-white w-7 text-[11px]",children:[m.toFixed(1),"x"]})]}),T.jsx("button",{onClick:()=>h(!f),className:`px-2.5 py-1 rounded border text-[11px] transition ${f?"bg-mars-600 text-cyan-300 border-cyan-500":"bg-mars-700/60 text-slate-300 border-mars-600 hover:bg-mars-600"}`,children:"Wireframe"}),T.jsx("button",{onClick:B,className:"p-1 rounded bg-mars-700/60 text-slate-300 border border-mars-600 hover:bg-mars-600 transition",title:"Reset 3D Camera",children:T.jsx(y_,{className:"w-3.5 h-3.5"})})]})]}),T.jsxs("div",{className:"w-full flex-1 min-h-[440px] relative cursor-grab active:cursor-grabbing overflow-hidden",children:[T.jsx("div",{ref:u,className:"absolute inset-0 w-full h-full"}),x&&T.jsxs("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center space-x-2 text-cyan-400 text-xs font-mono z-10 pointer-events-none",children:[T.jsx("span",{className:"w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"}),T.jsx("span",{children:"Generating 3D Martian terrain mesh..."})]}),!s&&T.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-slate-500 font-mono text-xs space-y-2 pointer-events-none",children:[T.jsx(h_,{className:"w-8 h-8 text-slate-600"}),T.jsx("span",{children:"DEM elevation heightmap required for 3D visualization"})]}),T.jsx("div",{className:"absolute bottom-2 right-2 bg-mars-950/80 backdrop-blur border border-mars-700/50 rounded px-2 py-1 text-[10px] font-mono text-slate-400 pointer-events-none",children:"Left Drag: Rotate | Right Drag: Pan | Scroll: Zoom"})]})]})},ZE=({analysis:s,pathPlan:e,startCoords:n,goalCoords:r,onRunPlanner:o,onSelectTargetGoal:c,isPlanning:u,isAnalyzing:f})=>T.jsxs("div",{className:"flex flex-col space-y-4",children:[T.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3",children:[T.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-2",children:[T.jsxs("div",{className:"flex items-center space-x-2",children:[T.jsx(A_,{className:"w-4 h-4 text-amber-400"}),T.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Terrain Morphometry (Horn's Method)"})]}),f&&T.jsx("span",{className:"text-[10px] font-mono text-amber-400 animate-pulse",children:"Computing..."})]}),s?T.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] font-mono",children:[T.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[T.jsx("span",{className:"text-slate-400 block text-[10px]",children:"MAX SLOPE"}),T.jsxs("span",{className:"text-rose-400 font-bold text-sm",children:[s.terrain_summary.max_slope_deg.toFixed(1),"°"]})]}),T.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[T.jsx("span",{className:"text-slate-400 block text-[10px]",children:"MEAN SLOPE"}),T.jsxs("span",{className:"text-slate-200 font-bold text-sm",children:[s.terrain_summary.mean_slope_deg.toFixed(1),"°"]})]}),T.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[T.jsx("span",{className:"text-slate-400 block text-[10px]",children:"CAUTION SLOPES (>20°)"}),T.jsxs("span",{className:"text-amber-400 font-bold",children:[s.terrain_summary.pct_slope_gt_20deg.toFixed(1),"% area"]})]}),T.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[T.jsx("span",{className:"text-slate-400 block text-[10px]",children:"LETHAL CLIFFS (>30°)"}),T.jsxs("span",{className:"text-red-400 font-bold",children:[s.terrain_summary.pct_slope_gt_30deg.toFixed(1),"% area"]})]})]}):T.jsx("div",{className:"text-xs font-mono text-slate-500 italic py-2 text-center",children:"Run terrain analysis to compute slope & ruggedness metrics"})]}),s&&T.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3",children:[T.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-2",children:[T.jsxs("div",{className:"flex items-center space-x-2",children:[T.jsx(Op,{className:"w-4 h-4 text-rose-400"}),T.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Hazard & Uncertainty Engine"})]}),T.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-mars-700 text-slate-300",children:["Confidence: ",(s.uncertainty_summary.confidence_score*100).toFixed(0),"%"]})]}),T.jsxs("div",{className:"space-y-2 text-[11px] font-mono",children:[T.jsxs("div",{className:"flex justify-between items-center bg-black/40 p-2 rounded border border-mars-700/30",children:[T.jsx("span",{className:"text-slate-400",children:"Mobility Clearance:"}),T.jsxs("span",{className:"text-emerald-400 font-bold",children:[(s.hazard_summary.safe_cells/s.hazard_summary.total_cells*100).toFixed(1),"% Traversable"]})]}),T.jsxs("div",{className:"text-[10px] text-slate-400",children:[T.jsx("span",{className:"block mb-1",children:"Detected Hazard Signatures:"}),T.jsx("div",{className:"flex flex-wrap gap-1",children:s.hazard_summary.hazard_types_detected.map((h,m)=>T.jsx("span",{className:"px-2 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-800/70",children:h},m))})]}),T.jsxs("div",{className:"text-[10px] text-slate-400",children:[T.jsx("span",{className:"block mb-1",children:"Uncertainty Drivers:"}),T.jsx("div",{className:"flex flex-wrap gap-1",children:s.uncertainty_summary.dominant_sources.map((h,m)=>T.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/50",children:h},m))})]})]})]}),s&&s.science_targets.length>0&&T.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3",children:[T.jsxs("div",{className:"flex items-center space-x-2 border-b border-mars-700/50 pb-2",children:[T.jsx(w_,{className:"w-4 h-4 text-amber-300"}),T.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Scientific Target Discovery"})]}),T.jsx("div",{className:"space-y-2",children:s.science_targets.map(h=>T.jsxs("div",{onClick:()=>c(h.coords_pixel),className:"bg-black/50 hover:bg-mars-700/40 cursor-pointer p-2.5 rounded-lg border border-mars-700/40 hover:border-amber-500/60 transition group space-y-1",children:[T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsx("span",{className:"text-xs font-mono font-bold text-amber-300 group-hover:text-amber-200",children:h.name}),T.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800",children:["Priority: ",h.overall_priority]})]}),T.jsx("p",{className:"text-[10px] text-slate-400",children:h.description}),T.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-mars-700/30",children:[T.jsxs("span",{children:["Geo: ",h.geological_score," | Access: ",h.accessibility_score]}),T.jsx("span",{className:"text-cyan-400 group-hover:underline",children:"Click to Target Goal →"})]})]},h.id))})]}),T.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3",children:[T.jsxs("div",{className:"flex items-center space-x-2 border-b border-mars-700/50 pb-2",children:[T.jsx(n0,{className:"w-4 h-4 text-emerald-400"}),T.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Autonomous A* Path Planner"})]}),T.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] font-mono",children:[T.jsxs("div",{className:"bg-black/40 p-2 rounded border border-mars-700/30",children:[T.jsx("span",{className:"text-slate-400 block text-[10px]",children:"START (ROVER)"}),T.jsxs("span",{className:"text-emerald-400 font-bold",children:["[",n[0],", ",n[1],"]"]})]}),T.jsxs("div",{className:"bg-black/40 p-2 rounded border border-mars-700/30",children:[T.jsx("span",{className:"text-slate-400 block text-[10px]",children:"GOAL (TARGET)"}),T.jsxs("span",{className:"text-cyan-400 font-bold",children:["[",r[0],", ",r[1],"]"]})]})]}),T.jsxs("button",{onClick:o,disabled:u,className:"w-full py-2.5 rounded-lg font-mono font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-950 border border-emerald-500/50 flex items-center justify-center space-x-2 transition disabled:opacity-50",children:[T.jsx(m0,{className:`w-3.5 h-3.5 fill-current ${u?"animate-spin":""}`}),T.jsx("span",{children:u?"Planning Optimal Path...":"Compute Safe A* Path"})]}),e&&T.jsxs("div",{className:`p-2.5 rounded-lg text-xs font-mono border ${e.success?"bg-emerald-950/60 border-emerald-800 text-emerald-200":"bg-red-950/60 border-red-800 text-red-200"}`,children:[T.jsxs("div",{className:"flex items-center space-x-1.5 font-bold mb-1",children:[e.success?T.jsx(f_,{className:"w-4 h-4 text-emerald-400"}):T.jsx(Op,{className:"w-4 h-4 text-red-400"}),T.jsx("span",{children:e.plan.message})]}),e.success&&T.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-emerald-800/50 text-[11px]",children:[T.jsxs("div",{children:[T.jsx("span",{className:"text-slate-400",children:"Path Length: "}),T.jsxs("span",{className:"text-white font-bold",children:[e.plan.path_length_steps," steps"]})]}),T.jsxs("div",{children:[T.jsx("span",{className:"text-slate-400",children:"Accumulated Cost: "}),T.jsx("span",{className:"text-emerald-300 font-bold",children:e.plan.total_cost})]})]})]})]})]});async function QE(s,e,n=5){const r=new FormData;r.append("imagery_id",s),r.append("dem_id",e),r.append("mc_samples",n.toString());const o=await fetch("/api/segment",{method:"POST",body:r});if(!o.ok){const c=await o.json().catch(()=>({detail:"Segmentation failed"}));throw new Error(c.detail||"Segmentation failed")}return o.json()}const JE=()=>{var Jt;const[s,e]=je.useState("CONNECTING"),[n,r]=je.useState("MARS-09"),[o,c]=je.useState(0),[u,f]=je.useState(null),[h,m]=je.useState(null),[v,x]=je.useState(null),[y,S]=je.useState(null),[w,E]=je.useState(null),[_,g]=je.useState(!1),[N,L]=je.useState(null),[b,W]=je.useState(!1),[O,U]=je.useState([90,90]),[z,P]=je.useState([380,390]),[A,B]=je.useState(null),[j,X]=je.useState(!1),[Z,ne]=je.useState(null),[V,Q]=je.useState(!1),[k,oe]=je.useState(null),[re,F]=je.useState(5),[ie,Te]=je.useState("imagery"),[J,fe]=je.useState(!1);je.useEffect(()=>{ge()},[]);const ge=async()=>{fe(!0);try{const Be=await R_();e(Be.status),r(Be.rover_callsign),c(Be.registered_datasets_count);const He=await P_();f(He.imagery),m(He.dem),x(He.dem),S(He.dem_offset),await ve(He.imagery.id,He.dem.id),await Ce(He.dem.id)}catch(Be){console.error("Initialization error:",Be),e("OFFLINE")}finally{fe(!1)}},ve=async(Be,He)=>{g(!0);try{const Ve=await L_(Be,He);E(Ve)}catch(Ve){console.error("Validation error:",Ve)}finally{g(!1)}},Ce=async Be=>{W(!0);try{const He=await D_(Be);L(He)}catch(He){console.error("Terrain analysis error:",He)}finally{W(!1)}},Ie=Be=>{f(Be),ne(null),h&&ve(Be.id,h.id)},Qe=Be=>{m(Be),ne(null),u&&ve(u.id,Be.id),Ce(Be.id),B(null)},wt=async Be=>{if(!h)return;const He=Be??z;X(!0);try{const Ve=await I_(h.id,O[0],O[1],He[0],He[1]);B(Ve)}catch(Ve){console.error("Planning error:",Ve)}finally{X(!1)}},ft=async Be=>{if(!(!u||!h)){Q(!0),oe(null);try{const He=await QE(u.id,h.id,Be);ne(He),Te("segmentation")}catch(He){const Ve=He instanceof Error?He.message:String(He);oe(Ve),console.error("Segmentation error:",He)}finally{Q(!1)}}},Pt=()=>{switch(ie){case"slope":return(N==null?void 0:N.slope_preview_url)||(h==null?void 0:h.preview_url);case"costmap":return(N==null?void 0:N.costmap_preview_url)||(h==null?void 0:h.preview_url);case"segmentation":return(Z==null?void 0:Z.segmentation_url)||(u==null?void 0:u.preview_url);case"uncertainty":return(Z==null?void 0:Z.uncertainty_url)||(u==null?void 0:u.preview_url);case"dem":return h==null?void 0:h.preview_url;case"imagery":default:return(u==null?void 0:u.preview_url)||(h==null?void 0:h.preview_url)}},$=T.jsx(KE,{heightmapUrl:h==null?void 0:h.heightmap_url,textureUrl:Pt(),pathCoords:(A==null?void 0:A.plan.path_coords)||[],startCoords:O,goalCoords:z,elevationRange:(Jt=h==null?void 0:h.preview)!=null&&Jt.stats?{min:h.preview.stats.min_elevation_m,max:h.preview.stats.max_elevation_m}:void 0});return T.jsxs("div",{className:"flex flex-col min-h-screen bg-mars-900 text-slate-100",children:[T.jsx(b_,{status:s,roverCallsign:n,datasetCount:o}),T.jsxs("main",{className:"flex-1 p-5 grid grid-cols-12 gap-5 max-w-[1920px] mx-auto w-full",children:[T.jsxs("section",{className:"col-span-12 lg:col-span-3 space-y-4",children:[T.jsx(U_,{imageryRecord:u,demRecord:h,demPrimaryRecord:v,demOffsetRecord:y,onSelectImagery:Ie,onSelectDem:Qe,onLoadSamples:ge,isLoading:J}),T.jsx(F_,{report:w,isValidating:_}),T.jsx(k_,{segmentationResult:Z,isSegmenting:V,error:k,mcSamples:re,onMcSamplesChange:F,onRunSegmentation:()=>ft(re),canRun:!!(u&&h)&&!V,activeLayer:ie,onSelectLayer:Be=>Te(Be)})]}),T.jsx("section",{className:"col-span-12 lg:col-span-6 flex flex-col",children:T.jsx(z_,{imageryUrl:u==null?void 0:u.preview_url,demColormapUrl:h==null?void 0:h.preview_url,slopeUrl:N==null?void 0:N.slope_preview_url,costmapUrl:N==null?void 0:N.costmap_preview_url,segmentationUrl:Z==null?void 0:Z.segmentation_url,uncertaintyUrl:Z==null?void 0:Z.uncertainty_url,activeLayer:ie,onSelectLayer:Te,pathCoords:(A==null?void 0:A.plan.path_coords)||[],scienceTargets:(N==null?void 0:N.science_targets)||[],startCoords:O,goalCoords:z,onSetStart:U,onSetGoal:P,ThreeDViewer:$})}),T.jsx("section",{className:"col-span-12 lg:col-span-3 space-y-4",children:T.jsx(ZE,{analysis:N,pathPlan:A,startCoords:O,goalCoords:z,onRunPlanner:()=>wt(),onSelectTargetGoal:Be=>{P(Be),wt(Be)},isPlanning:j,isAnalyzing:b})})]})]})},ew=()=>T.jsx(JE,{});Qv.createRoot(document.getElementById("root")).render(T.jsx(jv.StrictMode,{children:T.jsx(ew,{})}));
