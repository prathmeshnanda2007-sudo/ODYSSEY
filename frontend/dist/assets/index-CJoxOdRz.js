(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function km(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var hu={exports:{}},Ca={},pu={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function F_(){if(yp)return pt;yp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=x&&F[x]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(F,J,Le){this.props=F,this.context=J,this.refs=T,this.updater=Le||S}y.prototype.isReactComponent={},y.prototype.setState=function(F,J){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,J,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=y.prototype;function U(F,J,Le){this.props=F,this.context=J,this.refs=T,this.updater=Le||S}var I=U.prototype=new _;I.constructor=U,E(I,y.prototype),I.isPureReactComponent=!0;var P=Array.isArray,K=Object.prototype.hasOwnProperty,H={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function k(F,J,Le){var Q,fe={},Se=null,xe=null;if(J!=null)for(Q in J.ref!==void 0&&(xe=J.ref),J.key!==void 0&&(Se=""+J.key),J)K.call(J,Q)&&!O.hasOwnProperty(Q)&&(fe[Q]=J[Q]);var Ae=arguments.length-2;if(Ae===1)fe.children=Le;else if(1<Ae){for(var Ie=Array(Ae),Ke=0;Ke<Ae;Ke++)Ie[Ke]=arguments[Ke+2];fe.children=Ie}if(F&&F.defaultProps)for(Q in Ae=F.defaultProps,Ae)fe[Q]===void 0&&(fe[Q]=Ae[Q]);return{$$typeof:s,type:F,key:Se,ref:xe,props:fe,_owner:H.current}}function R(F,J){return{$$typeof:s,type:F.type,key:J,ref:F.ref,props:F.props,_owner:F._owner}}function C(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function L(F){var J={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Le){return J[Le]})}var Z=/\/+/g;function q(F,J){return typeof F=="object"&&F!==null&&F.key!=null?L(""+F.key):J.toString(36)}function ae(F,J,Le,Q,fe){var Se=typeof F;(Se==="undefined"||Se==="boolean")&&(F=null);var xe=!1;if(F===null)xe=!0;else switch(Se){case"string":case"number":xe=!0;break;case"object":switch(F.$$typeof){case s:case e:xe=!0}}if(xe)return xe=F,fe=fe(xe),F=Q===""?"."+q(xe,0):Q,P(fe)?(Le="",F!=null&&(Le=F.replace(Z,"$&/")+"/"),ae(fe,J,Le,"",function(Ke){return Ke})):fe!=null&&(C(fe)&&(fe=R(fe,Le+(!fe.key||xe&&xe.key===fe.key?"":(""+fe.key).replace(Z,"$&/")+"/")+F)),J.push(fe)),1;if(xe=0,Q=Q===""?".":Q+":",P(F))for(var Ae=0;Ae<F.length;Ae++){Se=F[Ae];var Ie=Q+q(Se,Ae);xe+=ae(Se,J,Le,Ie,fe)}else if(Ie=v(F),typeof Ie=="function")for(F=Ie.call(F),Ae=0;!(Se=F.next()).done;)Se=Se.value,Ie=Q+q(Se,Ae++),xe+=ae(Se,J,Le,Ie,fe);else if(Se==="object")throw J=String(F),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return xe}function de(F,J,Le){if(F==null)return F;var Q=[],fe=0;return ae(F,Q,"","",function(Se){return J.call(Le,Se,fe++)}),Q}function oe(F){if(F._status===-1){var J=F._result;J=J(),J.then(function(Le){(F._status===0||F._status===-1)&&(F._status=1,F._result=Le)},function(Le){(F._status===0||F._status===-1)&&(F._status=2,F._result=Le)}),F._status===-1&&(F._status=0,F._result=J)}if(F._status===1)return F._result.default;throw F._result}var le={current:null},B={transition:null},ue={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:H};function te(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:de,forEach:function(F,J,Le){de(F,function(){J.apply(this,arguments)},Le)},count:function(F){var J=0;return de(F,function(){J++}),J},toArray:function(F){return de(F,function(J){return J})||[]},only:function(F){if(!C(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},pt.Component=y,pt.Fragment=n,pt.Profiler=o,pt.PureComponent=U,pt.StrictMode=r,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,pt.act=te,pt.cloneElement=function(F,J,Le){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Q=E({},F.props),fe=F.key,Se=F.ref,xe=F._owner;if(J!=null){if(J.ref!==void 0&&(Se=J.ref,xe=H.current),J.key!==void 0&&(fe=""+J.key),F.type&&F.type.defaultProps)var Ae=F.type.defaultProps;for(Ie in J)K.call(J,Ie)&&!O.hasOwnProperty(Ie)&&(Q[Ie]=J[Ie]===void 0&&Ae!==void 0?Ae[Ie]:J[Ie])}var Ie=arguments.length-2;if(Ie===1)Q.children=Le;else if(1<Ie){Ae=Array(Ie);for(var Ke=0;Ke<Ie;Ke++)Ae[Ke]=arguments[Ke+2];Q.children=Ae}return{$$typeof:s,type:F.type,key:fe,ref:Se,props:Q,_owner:xe}},pt.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:c,_context:F},F.Consumer=F},pt.createElement=k,pt.createFactory=function(F){var J=k.bind(null,F);return J.type=F,J},pt.createRef=function(){return{current:null}},pt.forwardRef=function(F){return{$$typeof:f,render:F}},pt.isValidElement=C,pt.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:oe}},pt.memo=function(F,J){return{$$typeof:m,type:F,compare:J===void 0?null:J}},pt.startTransition=function(F){var J=B.transition;B.transition={};try{F()}finally{B.transition=J}},pt.unstable_act=te,pt.useCallback=function(F,J){return le.current.useCallback(F,J)},pt.useContext=function(F){return le.current.useContext(F)},pt.useDebugValue=function(){},pt.useDeferredValue=function(F){return le.current.useDeferredValue(F)},pt.useEffect=function(F,J){return le.current.useEffect(F,J)},pt.useId=function(){return le.current.useId()},pt.useImperativeHandle=function(F,J,Le){return le.current.useImperativeHandle(F,J,Le)},pt.useInsertionEffect=function(F,J){return le.current.useInsertionEffect(F,J)},pt.useLayoutEffect=function(F,J){return le.current.useLayoutEffect(F,J)},pt.useMemo=function(F,J){return le.current.useMemo(F,J)},pt.useReducer=function(F,J,Le){return le.current.useReducer(F,J,Le)},pt.useRef=function(F){return le.current.useRef(F)},pt.useState=function(F){return le.current.useState(F)},pt.useSyncExternalStore=function(F,J,Le){return le.current.useSyncExternalStore(F,J,Le)},pt.useTransition=function(){return le.current.useTransition()},pt.version="18.3.1",pt}var Sp;function zd(){return Sp||(Sp=1,pu.exports=F_()),pu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function O_(){if(Mp)return Ca;Mp=1;var s=zd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,h,m){var g,x={},v=null,S=null;m!==void 0&&(v=""+m),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!c.hasOwnProperty(g)&&(x[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)x[g]===void 0&&(x[g]=h[g]);return{$$typeof:e,type:f,key:v,ref:S,props:x,_owner:o.current}}return Ca.Fragment=n,Ca.jsx=d,Ca.jsxs=d,Ca}var Ep;function k_(){return Ep||(Ep=1,hu.exports=O_()),hu.exports}var w=k_(),$e=zd();const zm=km($e);var Ko={},mu={exports:{}},bn={},gu={exports:{}},_u={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function z_(){return wp||(wp=1,(function(s){function e(B,ue){var te=B.length;B.push(ue);e:for(;0<te;){var F=te-1>>>1,J=B[F];if(0<o(J,ue))B[F]=ue,B[te]=J,te=F;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ue=B[0],te=B.pop();if(te!==ue){B[0]=te;e:for(var F=0,J=B.length,Le=J>>>1;F<Le;){var Q=2*(F+1)-1,fe=B[Q],Se=Q+1,xe=B[Se];if(0>o(fe,te))Se<J&&0>o(xe,fe)?(B[F]=xe,B[Se]=te,F=Se):(B[F]=fe,B[Q]=te,F=Q);else if(Se<J&&0>o(xe,te))B[F]=xe,B[Se]=te,F=Se;else break e}}return ue}function o(B,ue){var te=B.sortIndex-ue.sortIndex;return te!==0?te:B.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var h=[],m=[],g=1,x=null,v=3,S=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var ue=n(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=B)r(m),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=n(m)}}function P(B){if(T=!1,I(B),!E)if(n(h)!==null)E=!0,oe(K);else{var ue=n(m);ue!==null&&le(P,ue.startTime-B)}}function K(B,ue){E=!1,T&&(T=!1,_(k),k=-1),S=!0;var te=v;try{for(I(ue),x=n(h);x!==null&&(!(x.expirationTime>ue)||B&&!L());){var F=x.callback;if(typeof F=="function"){x.callback=null,v=x.priorityLevel;var J=F(x.expirationTime<=ue);ue=s.unstable_now(),typeof J=="function"?x.callback=J:x===n(h)&&r(h),I(ue)}else r(h);x=n(h)}if(x!==null)var Le=!0;else{var Q=n(m);Q!==null&&le(P,Q.startTime-ue),Le=!1}return Le}finally{x=null,v=te,S=!1}}var H=!1,O=null,k=-1,R=5,C=-1;function L(){return!(s.unstable_now()-C<R)}function Z(){if(O!==null){var B=s.unstable_now();C=B;var ue=!0;try{ue=O(!0,B)}finally{ue?q():(H=!1,O=null)}}else H=!1}var q;if(typeof U=="function")q=function(){U(Z)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,de=ae.port2;ae.port1.onmessage=Z,q=function(){de.postMessage(null)}}else q=function(){y(Z,0)};function oe(B){O=B,H||(H=!0,q())}function le(B,ue){k=y(function(){B(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,oe(K))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var te=v;v=ue;try{return B()}finally{v=te}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,ue){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var te=v;v=B;try{return ue()}finally{v=te}},s.unstable_scheduleCallback=function(B,ue,te){var F=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?F+te:F):te=F,B){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=te+J,B={id:g++,callback:ue,priorityLevel:B,startTime:te,expirationTime:J,sortIndex:-1},te>F?(B.sortIndex=te,e(m,B),n(h)===null&&B===n(m)&&(T?(_(k),k=-1):T=!0,le(P,te-F))):(B.sortIndex=J,e(h,B),E||S||(E=!0,oe(K))),B},s.unstable_shouldYield=L,s.unstable_wrapCallback=function(B){var ue=v;return function(){var te=v;v=ue;try{return B.apply(this,arguments)}finally{v=te}}}})(_u)),_u}var Tp;function B_(){return Tp||(Tp=1,gu.exports=z_()),gu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function H_(){if(Ap)return bn;Ap=1;var s=zd(),e=B_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function v(t){return h.call(x,t)?!0:h.call(g,t)?!1:m.test(t)?x[t]=!0:(g[t]=!0,!1)}function S(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,a,l){if(i===null||typeof i>"u"||S(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,a,l,u,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,U);y[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,U);y[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,U);y[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function I(t,i,a,l){var u=y.hasOwnProperty(i)?y[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,u,l)&&(a=null),l||u===null?v(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(i=u.attributeName,l=u.attributeNamespace,a===null?t.removeAttribute(i):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K=Symbol.for("react.element"),H=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),L=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,F;function J(t){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var Le=!1;function Q(t,i){if(!t||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var l=ie}Reflect.construct(t,[],i)}else{try{i.call()}catch(ie){l=ie}t.call(i.prototype)}else{try{throw Error()}catch(ie){l=ie}t()}}catch(ie){if(ie&&l&&typeof ie.stack=="string"){for(var u=ie.stack.split(`
`),p=l.stack.split(`
`),M=u.length-1,D=p.length-1;1<=M&&0<=D&&u[M]!==p[D];)D--;for(;1<=M&&0<=D;M--,D--)if(u[M]!==p[D]){if(M!==1||D!==1)do if(M--,D--,0>D||u[M]!==p[D]){var z=`
`+u[M].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=M&&0<=D);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?J(t):""}function fe(t){switch(t.tag){case 5:return J(t.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case H:return"Portal";case R:return"Profiler";case k:return"StrictMode";case q:return"Suspense";case ae:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case L:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case Z:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return i=t.displayName||null,i!==null?i:Se(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return Se(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ie(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(t){var i=Ie(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ze(t){t._valueTracker||(t._valueTracker=Ke(t))}function qe(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ie(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function Mt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function X(t,i){var a=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function pn(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=Ae(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function mt(t,i){i=i.checked,i!=null&&I(t,"checked",i,!1)}function ft(t,i){mt(t,i);var a=Ae(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(t,i.type,a):i.hasOwnProperty("defaultValue")&&Rt(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Qe(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Rt(t,i,a){(i!=="number"||Mt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ye=Array.isArray;function N(t,i,a,l){if(t=t.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=i.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Ae(a),i=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function A(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ee(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Ye(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:Ae(a)}}function me(t,i){var a=Ae(i.value),l=Ae(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function _e(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ce,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function dt(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function tt(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function nt(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,u=tt(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,u):t[a]=u}}var ke=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function at(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var be=null,ce=null,pe=null;function Ne(t){if(t=fa(t)){if(typeof be!="function")throw Error(n(280));var i=t.stateNode;i&&(i=uo(i),be(t.stateNode,t.type,i))}}function Pe(t){ce?pe?pe.push(t):pe=[t]:ce=t}function ot(){if(ce){var t=ce,i=pe;if(pe=ce=null,Ne(t),i)for(t=0;t<i.length;t++)Ne(i[t])}}function It(t,i){return t(i)}function Xt(){}var xt=!1;function Sn(t,i,a){if(xt)return t(i,a);xt=!0;try{return It(t,i,a)}finally{xt=!1,(ce!==null||pe!==null)&&(Xt(),ot())}}function mn(t,i){var a=t.stateNode;if(a===null)return null;var l=uo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Zr=!1;if(f)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){Zr=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{Zr=!1}function Mi(t,i,a,l,u,p,M,D,z){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(a,ie)}catch(ve){this.onError(ve)}}var Ei=!1,Er=null,wr=!1,Xi=null,Wa={onError:function(t){Ei=!0,Er=t}};function Qr(t,i,a,l,u,p,M,D,z){Ei=!1,Er=null,Mi.apply(Wa,arguments)}function ja(t,i,a,l,u,p,M,D,z){if(Qr.apply(this,arguments),Ei){if(Ei){var ie=Er;Ei=!1,Er=null}else throw Error(n(198));wr||(wr=!0,Xi=ie)}}function ui(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Xa(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function qa(t){if(ui(t)!==t)throw Error(n(188))}function Ul(t){var i=t.alternate;if(!i){if(i=ui(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var u=a.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===a)return qa(u),t;if(p===l)return qa(u),i;p=p.sibling}throw Error(n(188))}if(a.return!==l.return)a=u,l=p;else{for(var M=!1,D=u.child;D;){if(D===a){M=!0,a=u,l=p;break}if(D===l){M=!0,l=u,a=p;break}D=D.sibling}if(!M){for(D=p.child;D;){if(D===a){M=!0,a=p,l=u;break}if(D===l){M=!0,l=p,a=u;break}D=D.sibling}if(!M)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function b(t){return t=Ul(t),t!==null?W(t):null}function W(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=W(t);if(i!==null)return i;t=t.sibling}return null}var re=e.unstable_scheduleCallback,se=e.unstable_cancelCallback,j=e.unstable_shouldYield,Te=e.unstable_requestPaint,Ee=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,Be=e.unstable_ImmediatePriority,it=e.unstable_UserBlockingPriority,st=e.unstable_NormalPriority,We=e.unstable_LowPriority,_t=e.unstable_IdlePriority,Tt=null,gt=null;function an(t){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Tt,t,void 0,(t.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:Et,Xe=Math.log,$n=Math.LN2;function Et(t){return t>>>=0,t===0?32:31-(Xe(t)/$n|0)|0}var on=64,Kn=4194304;function qt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function di(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,u=t.suspendedLanes,p=t.pingedLanes,M=a&268435455;if(M!==0){var D=M&~u;D!==0?l=qt(D):(p&=M,p!==0&&(l=qt(p)))}else M=a&~u,M!==0?l=qt(M):p!==0&&(l=qt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,p=i&-i,u>=p||u===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-lt(i),u=1<<a,l|=t[a],i&=~u;return l}function Nt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kn(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-lt(p),D=1<<M,z=u[M];z===-1?((D&a)===0||(D&l)!==0)&&(u[M]=Nt(D,i)):z<=i&&(t.expiredLanes|=D),p&=~D}}function wi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gn(){var t=on;return on<<=1,(on&4194240)===0&&(on=64),t}function zn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Mn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-lt(i),t[i]=a}function Ya(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-lt(a),p=1<<u;i[u]=0,l[u]=-1,t[u]=-1,a&=~p}}function Fl(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-lt(a),u=1<<l;u&i|t[l]&i&&(t[l]|=i),a&=~u}}var Pt=0;function Zd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Qd,Ol,Jd,ef,tf,kl=!1,$a=[],qi=null,Yi=null,$i=null,Ks=new Map,Zs=new Map,Ki=[],r0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nf(t,i){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Ks.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(i.pointerId)}}function Qs(t,i,a,l,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},i!==null&&(i=fa(i),i!==null&&Ol(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function s0(t,i,a,l,u){switch(i){case"focusin":return qi=Qs(qi,t,i,a,l,u),!0;case"dragenter":return Yi=Qs(Yi,t,i,a,l,u),!0;case"mouseover":return $i=Qs($i,t,i,a,l,u),!0;case"pointerover":var p=u.pointerId;return Ks.set(p,Qs(Ks.get(p)||null,t,i,a,l,u)),!0;case"gotpointercapture":return p=u.pointerId,Zs.set(p,Qs(Zs.get(p)||null,t,i,a,l,u)),!0}return!1}function rf(t){var i=Tr(t.target);if(i!==null){var a=ui(i);if(a!==null){if(i=a.tag,i===13){if(i=Xa(a),i!==null){t.blockedOn=i,tf(t.priority,function(){Jd(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ka(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Bl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);At=l,a.target.dispatchEvent(l),At=null}else return i=fa(a),i!==null&&Ol(i),t.blockedOn=a,!1;i.shift()}return!0}function sf(t,i,a){Ka(t)&&a.delete(i)}function a0(){kl=!1,qi!==null&&Ka(qi)&&(qi=null),Yi!==null&&Ka(Yi)&&(Yi=null),$i!==null&&Ka($i)&&($i=null),Ks.forEach(sf),Zs.forEach(sf)}function Js(t,i){t.blockedOn===i&&(t.blockedOn=null,kl||(kl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,a0)))}function ea(t){function i(u){return Js(u,t)}if(0<$a.length){Js($a[0],t);for(var a=1;a<$a.length;a++){var l=$a[a];l.blockedOn===t&&(l.blockedOn=null)}}for(qi!==null&&Js(qi,t),Yi!==null&&Js(Yi,t),$i!==null&&Js($i,t),Ks.forEach(i),Zs.forEach(i),a=0;a<Ki.length;a++)l=Ki[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Ki.length&&(a=Ki[0],a.blockedOn===null);)rf(a),a.blockedOn===null&&Ki.shift()}var Jr=P.ReactCurrentBatchConfig,Za=!0;function o0(t,i,a,l){var u=Pt,p=Jr.transition;Jr.transition=null;try{Pt=1,zl(t,i,a,l)}finally{Pt=u,Jr.transition=p}}function l0(t,i,a,l){var u=Pt,p=Jr.transition;Jr.transition=null;try{Pt=4,zl(t,i,a,l)}finally{Pt=u,Jr.transition=p}}function zl(t,i,a,l){if(Za){var u=Bl(t,i,a,l);if(u===null)ic(t,i,l,Qa,a),nf(t,l);else if(s0(u,t,i,a,l))l.stopPropagation();else if(nf(t,l),i&4&&-1<r0.indexOf(t)){for(;u!==null;){var p=fa(u);if(p!==null&&Qd(p),p=Bl(t,i,a,l),p===null&&ic(t,i,l,Qa,a),p===u)break;u=p}u!==null&&l.stopPropagation()}else ic(t,i,l,null,a)}}var Qa=null;function Bl(t,i,a,l){if(Qa=null,t=G(l),t=Tr(t),t!==null)if(i=ui(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Xa(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Qa=t,null}function af(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case Be:return 1;case it:return 4;case st:case We:return 16;case _t:return 536870912;default:return 16}default:return 16}}var Zi=null,Hl=null,Ja=null;function of(){if(Ja)return Ja;var t,i=Hl,a=i.length,l,u="value"in Zi?Zi.value:Zi.textContent,p=u.length;for(t=0;t<a&&i[t]===u[t];t++);var M=a-t;for(l=1;l<=M&&i[a-l]===u[p-l];l++);return Ja=u.slice(t,1<l?1-l:void 0)}function eo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function to(){return!0}function lf(){return!1}function Nn(t){function i(a,l,u,p,M){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?to:lf,this.isPropagationStopped=lf,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),i}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Nn(es),ta=te({},es,{view:0,detail:0}),c0=Nn(ta),Gl,Wl,na,no=te({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==na&&(na&&t.type==="mousemove"?(Gl=t.screenX-na.screenX,Wl=t.screenY-na.screenY):Wl=Gl=0,na=t),Gl)},movementY:function(t){return"movementY"in t?t.movementY:Wl}}),cf=Nn(no),u0=te({},no,{dataTransfer:0}),d0=Nn(u0),f0=te({},ta,{relatedTarget:0}),jl=Nn(f0),h0=te({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),p0=Nn(h0),m0=te({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),g0=Nn(m0),_0=te({},es,{data:0}),uf=Nn(_0),v0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=y0[t])?!!i[t]:!1}function Xl(){return S0}var M0=te({},ta,{key:function(t){if(t.key){var i=v0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=eo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?x0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xl,charCode:function(t){return t.type==="keypress"?eo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?eo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),E0=Nn(M0),w0=te({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),df=Nn(w0),T0=te({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xl}),A0=Nn(T0),C0=te({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),b0=Nn(C0),R0=te({},no,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),P0=Nn(R0),L0=[9,13,27,32],ql=f&&"CompositionEvent"in window,ia=null;f&&"documentMode"in document&&(ia=document.documentMode);var N0=f&&"TextEvent"in window&&!ia,ff=f&&(!ql||ia&&8<ia&&11>=ia),hf=" ",pf=!1;function mf(t,i){switch(t){case"keyup":return L0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function D0(t,i){switch(t){case"compositionend":return gf(i);case"keypress":return i.which!==32?null:(pf=!0,hf);case"textInput":return t=i.data,t===hf&&pf?null:t;default:return null}}function I0(t,i){if(ts)return t==="compositionend"||!ql&&mf(t,i)?(t=of(),Ja=Hl=Zi=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ff&&i.locale!=="ko"?null:i.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _f(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!U0[t.type]:i==="textarea"}function vf(t,i,a,l){Pe(l),i=oo(i,"onChange"),0<i.length&&(a=new Vl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var ra=null,sa=null;function F0(t){Ff(t,0)}function io(t){var i=as(t);if(qe(i))return t}function O0(t,i){if(t==="change")return i}var xf=!1;if(f){var Yl;if(f){var $l="oninput"in document;if(!$l){var yf=document.createElement("div");yf.setAttribute("oninput","return;"),$l=typeof yf.oninput=="function"}Yl=$l}else Yl=!1;xf=Yl&&(!document.documentMode||9<document.documentMode)}function Sf(){ra&&(ra.detachEvent("onpropertychange",Mf),sa=ra=null)}function Mf(t){if(t.propertyName==="value"&&io(sa)){var i=[];vf(i,sa,t,G(t)),Sn(F0,i)}}function k0(t,i,a){t==="focusin"?(Sf(),ra=i,sa=a,ra.attachEvent("onpropertychange",Mf)):t==="focusout"&&Sf()}function z0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return io(sa)}function B0(t,i){if(t==="click")return io(i)}function H0(t,i){if(t==="input"||t==="change")return io(i)}function V0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:V0;function aa(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!h.call(i,u)||!Zn(t[u],i[u]))return!1}return!0}function Ef(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wf(t,i){var a=Ef(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ef(a)}}function Tf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Tf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Af(){for(var t=window,i=Mt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Mt(t.document)}return i}function Kl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function G0(t){var i=Af(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Tf(a.ownerDocument.documentElement,a)){if(l!==null&&Kl(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,p=Math.min(l.start,u);l=l.end===void 0?p:Math.min(l.end,u),!t.extend&&p>l&&(u=l,l=p,p=u),u=wf(a,p);var M=wf(a,l);u&&M&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var W0=f&&"documentMode"in document&&11>=document.documentMode,ns=null,Zl=null,oa=null,Ql=!1;function Cf(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ql||ns==null||ns!==Mt(l)||(l=ns,"selectionStart"in l&&Kl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oa&&aa(oa,l)||(oa=l,l=oo(Zl,"onSelect"),0<l.length&&(i=new Vl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=ns)))}function ro(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var is={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},Jl={},bf={};f&&(bf=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function so(t){if(Jl[t])return Jl[t];if(!is[t])return t;var i=is[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in bf)return Jl[t]=i[a];return t}var Rf=so("animationend"),Pf=so("animationiteration"),Lf=so("animationstart"),Nf=so("transitionend"),Df=new Map,If="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){Df.set(t,i),c(i,[t])}for(var ec=0;ec<If.length;ec++){var tc=If[ec],j0=tc.toLowerCase(),X0=tc[0].toUpperCase()+tc.slice(1);Qi(j0,"on"+X0)}Qi(Rf,"onAnimationEnd"),Qi(Pf,"onAnimationIteration"),Qi(Lf,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(Nf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q0=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function Uf(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,ja(l,i,void 0,t),t.currentTarget=null}function Ff(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],u=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],z=D.instance,ie=D.currentTarget;if(D=D.listener,z!==p&&u.isPropagationStopped())break e;Uf(u,D,ie),p=z}else for(M=0;M<l.length;M++){if(D=l[M],z=D.instance,ie=D.currentTarget,D=D.listener,z!==p&&u.isPropagationStopped())break e;Uf(u,D,ie),p=z}}}if(wr)throw t=Xi,wr=!1,Xi=null,t}function Ut(t,i){var a=i[cc];a===void 0&&(a=i[cc]=new Set);var l=t+"__bubble";a.has(l)||(Of(i,t,2,!1),a.add(l))}function nc(t,i,a){var l=0;i&&(l|=4),Of(a,t,l,i)}var ao="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[ao]){t[ao]=!0,r.forEach(function(a){a!=="selectionchange"&&(q0.has(a)||nc(a,!1,t),nc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ao]||(i[ao]=!0,nc("selectionchange",!1,i))}}function Of(t,i,a,l){switch(af(i)){case 1:var u=o0;break;case 4:u=l0;break;default:u=zl}a=u.bind(null,i,a,t),u=void 0,!Zr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,a,{capture:!0,passive:u}):t.addEventListener(i,a,!0):u!==void 0?t.addEventListener(i,a,{passive:u}):t.addEventListener(i,a,!1)}function ic(t,i,a,l,u){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===u||D.nodeType===8&&D.parentNode===u)break;if(M===4)for(M=l.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===u||z.nodeType===8&&z.parentNode===u))return;M=M.return}for(;D!==null;){if(M=Tr(D),M===null)return;if(z=M.tag,z===5||z===6){l=p=M;continue e}D=D.parentNode}}l=l.return}Sn(function(){var ie=p,ve=G(a),ye=[];e:{var ge=Df.get(t);if(ge!==void 0){var De=Vl,ze=t;switch(t){case"keypress":if(eo(a)===0)break e;case"keydown":case"keyup":De=E0;break;case"focusin":ze="focus",De=jl;break;case"focusout":ze="blur",De=jl;break;case"beforeblur":case"afterblur":De=jl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=A0;break;case Rf:case Pf:case Lf:De=p0;break;case Nf:De=b0;break;case"scroll":De=c0;break;case"wheel":De=P0;break;case"copy":case"cut":case"paste":De=g0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=df}var He=(i&4)!==0,Gt=!He&&t==="scroll",Y=He?ge!==null?ge+"Capture":null:ge;He=[];for(var V=ie,$;V!==null;){$=V;var we=$.stateNode;if($.tag===5&&we!==null&&($=we,Y!==null&&(we=mn(V,Y),we!=null&&He.push(ua(V,we,$)))),Gt)break;V=V.return}0<He.length&&(ge=new De(ge,ze,null,a,ve),ye.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",ge&&a!==At&&(ze=a.relatedTarget||a.fromElement)&&(Tr(ze)||ze[Ti]))break e;if((De||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,De?(ze=a.relatedTarget||a.toElement,De=ie,ze=ze?Tr(ze):null,ze!==null&&(Gt=ui(ze),ze!==Gt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(De=null,ze=ie),De!==ze)){if(He=cf,we="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(He=df,we="onPointerLeave",Y="onPointerEnter",V="pointer"),Gt=De==null?ge:as(De),$=ze==null?ge:as(ze),ge=new He(we,V+"leave",De,a,ve),ge.target=Gt,ge.relatedTarget=$,we=null,Tr(ve)===ie&&(He=new He(Y,V+"enter",ze,a,ve),He.target=$,He.relatedTarget=Gt,we=He),Gt=we,De&&ze)t:{for(He=De,Y=ze,V=0,$=He;$;$=rs($))V++;for($=0,we=Y;we;we=rs(we))$++;for(;0<V-$;)He=rs(He),V--;for(;0<$-V;)Y=rs(Y),$--;for(;V--;){if(He===Y||Y!==null&&He===Y.alternate)break t;He=rs(He),Y=rs(Y)}He=null}else He=null;De!==null&&kf(ye,ge,De,He,!1),ze!==null&&Gt!==null&&kf(ye,Gt,ze,He,!0)}}e:{if(ge=ie?as(ie):window,De=ge.nodeName&&ge.nodeName.toLowerCase(),De==="select"||De==="input"&&ge.type==="file")var je=O0;else if(_f(ge))if(xf)je=H0;else{je=z0;var Je=k0}else(De=ge.nodeName)&&De.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=B0);if(je&&(je=je(t,ie))){vf(ye,je,a,ve);break e}Je&&Je(t,ge,ie),t==="focusout"&&(Je=ge._wrapperState)&&Je.controlled&&ge.type==="number"&&Rt(ge,"number",ge.value)}switch(Je=ie?as(ie):window,t){case"focusin":(_f(Je)||Je.contentEditable==="true")&&(ns=Je,Zl=ie,oa=null);break;case"focusout":oa=Zl=ns=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,Cf(ye,a,ve);break;case"selectionchange":if(W0)break;case"keydown":case"keyup":Cf(ye,a,ve)}var et;if(ql)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else ts?mf(t,a)&&(rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(ff&&a.locale!=="ko"&&(ts||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ts&&(et=of()):(Zi=ve,Hl="value"in Zi?Zi.value:Zi.textContent,ts=!0)),Je=oo(ie,rt),0<Je.length&&(rt=new uf(rt,t,null,a,ve),ye.push({event:rt,listeners:Je}),et?rt.data=et:(et=gf(a),et!==null&&(rt.data=et)))),(et=N0?D0(t,a):I0(t,a))&&(ie=oo(ie,"onBeforeInput"),0<ie.length&&(ve=new uf("onBeforeInput","beforeinput",null,a,ve),ye.push({event:ve,listeners:ie}),ve.data=et))}Ff(ye,i)})}function ua(t,i,a){return{instance:t,listener:i,currentTarget:a}}function oo(t,i){for(var a=i+"Capture",l=[];t!==null;){var u=t,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=mn(t,a),p!=null&&l.unshift(ua(t,p,u)),p=mn(t,i),p!=null&&l.push(ua(t,p,u))),t=t.return}return l}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kf(t,i,a,l,u){for(var p=i._reactName,M=[];a!==null&&a!==l;){var D=a,z=D.alternate,ie=D.stateNode;if(z!==null&&z===l)break;D.tag===5&&ie!==null&&(D=ie,u?(z=mn(a,p),z!=null&&M.unshift(ua(a,z,D))):u||(z=mn(a,p),z!=null&&M.push(ua(a,z,D)))),a=a.return}M.length!==0&&t.push({event:i,listeners:M})}var Y0=/\r\n?/g,$0=/\u0000|\uFFFD/g;function zf(t){return(typeof t=="string"?t:""+t).replace(Y0,`
`).replace($0,"")}function lo(t,i,a){if(i=zf(i),zf(t)!==i&&a)throw Error(n(425))}function co(){}var rc=null,sc=null;function ac(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var oc=typeof setTimeout=="function"?setTimeout:void 0,K0=typeof clearTimeout=="function"?clearTimeout:void 0,Bf=typeof Promise=="function"?Promise:void 0,Z0=typeof queueMicrotask=="function"?queueMicrotask:typeof Bf<"u"?function(t){return Bf.resolve(null).then(t).catch(Q0)}:oc;function Q0(t){setTimeout(function(){throw t})}function lc(t,i){var a=i,l=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(l===0){t.removeChild(u),ea(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=u}while(a);ea(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Hf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),fi="__reactFiber$"+ss,da="__reactProps$"+ss,Ti="__reactContainer$"+ss,cc="__reactEvents$"+ss,J0="__reactListeners$"+ss,e_="__reactHandles$"+ss;function Tr(t){var i=t[fi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ti]||a[fi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Hf(t);t!==null;){if(a=t[fi])return a;t=Hf(t)}return i}t=a,a=t.parentNode}return null}function fa(t){return t=t[fi]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function uo(t){return t[da]||null}var uc=[],os=-1;function er(t){return{current:t}}function Ft(t){0>os||(t.current=uc[os],uc[os]=null,os--)}function Dt(t,i){os++,uc[os]=t.current,t.current=i}var tr={},ln=er(tr),En=er(!1),Ar=tr;function ls(t,i){var a=t.type.contextTypes;if(!a)return tr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in a)u[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function wn(t){return t=t.childContextTypes,t!=null}function fo(){Ft(En),Ft(ln)}function Vf(t,i,a){if(ln.current!==tr)throw Error(n(168));Dt(ln,i),Dt(En,a)}function Gf(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,xe(t)||"Unknown",u));return te({},a,l)}function ho(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Ar=ln.current,Dt(ln,t),Dt(En,En.current),!0}function Wf(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=Gf(t,i,Ar),l.__reactInternalMemoizedMergedChildContext=t,Ft(En),Ft(ln),Dt(ln,t)):Ft(En),Dt(En,a)}var Ai=null,po=!1,dc=!1;function jf(t){Ai===null?Ai=[t]:Ai.push(t)}function t_(t){po=!0,jf(t)}function nr(){if(!dc&&Ai!==null){dc=!0;var t=0,i=Pt;try{var a=Ai;for(Pt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ai=null,po=!1}catch(u){throw Ai!==null&&(Ai=Ai.slice(t+1)),re(Be,nr),u}finally{Pt=i,dc=!1}}return null}var cs=[],us=0,mo=null,go=0,Bn=[],Hn=0,Cr=null,Ci=1,bi="";function br(t,i){cs[us++]=go,cs[us++]=mo,mo=t,go=i}function Xf(t,i,a){Bn[Hn++]=Ci,Bn[Hn++]=bi,Bn[Hn++]=Cr,Cr=t;var l=Ci;t=bi;var u=32-lt(l)-1;l&=~(1<<u),a+=1;var p=32-lt(i)+u;if(30<p){var M=u-u%5;p=(l&(1<<M)-1).toString(32),l>>=M,u-=M,Ci=1<<32-lt(i)+u|a<<u|l,bi=p+t}else Ci=1<<p|a<<u|l,bi=t}function fc(t){t.return!==null&&(br(t,1),Xf(t,1,0))}function hc(t){for(;t===mo;)mo=cs[--us],cs[us]=null,go=cs[--us],cs[us]=null;for(;t===Cr;)Cr=Bn[--Hn],Bn[Hn]=null,bi=Bn[--Hn],Bn[Hn]=null,Ci=Bn[--Hn],Bn[Hn]=null}var Dn=null,In=null,Ot=!1,Qn=null;function qf(t,i){var a=jn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Yf(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Dn=t,In=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Dn=t,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Cr!==null?{id:Ci,overflow:bi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=jn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Dn=t,In=null,!0):!1;default:return!1}}function pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mc(t){if(Ot){var i=In;if(i){var a=i;if(!Yf(t,i)){if(pc(t))throw Error(n(418));i=Ji(a.nextSibling);var l=Dn;i&&Yf(t,i)?qf(l,a):(t.flags=t.flags&-4097|2,Ot=!1,Dn=t)}}else{if(pc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,Dn=t}}}function $f(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function _o(t){if(t!==Dn)return!1;if(!Ot)return $f(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ac(t.type,t.memoizedProps)),i&&(i=In)){if(pc(t))throw Kf(),Error(n(418));for(;i;)qf(t,i),i=Ji(i.nextSibling)}if($f(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){In=Ji(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}In=null}}else In=Dn?Ji(t.stateNode.nextSibling):null;return!0}function Kf(){for(var t=In;t;)t=Ji(t.nextSibling)}function ds(){In=Dn=null,Ot=!1}function gc(t){Qn===null?Qn=[t]:Qn.push(t)}var n_=P.ReactCurrentBatchConfig;function ha(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var u=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var D=u.refs;M===null?delete D[p]:D[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function vo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Zf(t){var i=t._init;return i(t._payload)}function Qf(t){function i(Y,V){if(t){var $=Y.deletions;$===null?(Y.deletions=[V],Y.flags|=16):$.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function l(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function u(Y,V){return Y=ur(Y,V),Y.index=0,Y.sibling=null,Y}function p(Y,V,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<V?(Y.flags|=2,V):$):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function D(Y,V,$,we){return V===null||V.tag!==6?(V=ou($,Y.mode,we),V.return=Y,V):(V=u(V,$),V.return=Y,V)}function z(Y,V,$,we){var je=$.type;return je===O?ve(Y,V,$.props.children,we,$.key):V!==null&&(V.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&Zf(je)===V.type)?(we=u(V,$.props),we.ref=ha(Y,V,$),we.return=Y,we):(we=Vo($.type,$.key,$.props,null,Y.mode,we),we.ref=ha(Y,V,$),we.return=Y,we)}function ie(Y,V,$,we){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=lu($,Y.mode,we),V.return=Y,V):(V=u(V,$.children||[]),V.return=Y,V)}function ve(Y,V,$,we,je){return V===null||V.tag!==7?(V=Fr($,Y.mode,we,je),V.return=Y,V):(V=u(V,$),V.return=Y,V)}function ye(Y,V,$){if(typeof V=="string"&&V!==""||typeof V=="number")return V=ou(""+V,Y.mode,$),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case K:return $=Vo(V.type,V.key,V.props,null,Y.mode,$),$.ref=ha(Y,null,V),$.return=Y,$;case H:return V=lu(V,Y.mode,$),V.return=Y,V;case oe:var we=V._init;return ye(Y,we(V._payload),$)}if(Ye(V)||ue(V))return V=Fr(V,Y.mode,$,null),V.return=Y,V;vo(Y,V)}return null}function ge(Y,V,$,we){var je=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return je!==null?null:D(Y,V,""+$,we);if(typeof $=="object"&&$!==null){switch($.$$typeof){case K:return $.key===je?z(Y,V,$,we):null;case H:return $.key===je?ie(Y,V,$,we):null;case oe:return je=$._init,ge(Y,V,je($._payload),we)}if(Ye($)||ue($))return je!==null?null:ve(Y,V,$,we,null);vo(Y,$)}return null}function De(Y,V,$,we,je){if(typeof we=="string"&&we!==""||typeof we=="number")return Y=Y.get($)||null,D(V,Y,""+we,je);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case K:return Y=Y.get(we.key===null?$:we.key)||null,z(V,Y,we,je);case H:return Y=Y.get(we.key===null?$:we.key)||null,ie(V,Y,we,je);case oe:var Je=we._init;return De(Y,V,$,Je(we._payload),je)}if(Ye(we)||ue(we))return Y=Y.get($)||null,ve(V,Y,we,je,null);vo(V,we)}return null}function ze(Y,V,$,we){for(var je=null,Je=null,et=V,rt=V=0,en=null;et!==null&&rt<$.length;rt++){et.index>rt?(en=et,et=null):en=et.sibling;var wt=ge(Y,et,$[rt],we);if(wt===null){et===null&&(et=en);break}t&&et&&wt.alternate===null&&i(Y,et),V=p(wt,V,rt),Je===null?je=wt:Je.sibling=wt,Je=wt,et=en}if(rt===$.length)return a(Y,et),Ot&&br(Y,rt),je;if(et===null){for(;rt<$.length;rt++)et=ye(Y,$[rt],we),et!==null&&(V=p(et,V,rt),Je===null?je=et:Je.sibling=et,Je=et);return Ot&&br(Y,rt),je}for(et=l(Y,et);rt<$.length;rt++)en=De(et,Y,rt,$[rt],we),en!==null&&(t&&en.alternate!==null&&et.delete(en.key===null?rt:en.key),V=p(en,V,rt),Je===null?je=en:Je.sibling=en,Je=en);return t&&et.forEach(function(dr){return i(Y,dr)}),Ot&&br(Y,rt),je}function He(Y,V,$,we){var je=ue($);if(typeof je!="function")throw Error(n(150));if($=je.call($),$==null)throw Error(n(151));for(var Je=je=null,et=V,rt=V=0,en=null,wt=$.next();et!==null&&!wt.done;rt++,wt=$.next()){et.index>rt?(en=et,et=null):en=et.sibling;var dr=ge(Y,et,wt.value,we);if(dr===null){et===null&&(et=en);break}t&&et&&dr.alternate===null&&i(Y,et),V=p(dr,V,rt),Je===null?je=dr:Je.sibling=dr,Je=dr,et=en}if(wt.done)return a(Y,et),Ot&&br(Y,rt),je;if(et===null){for(;!wt.done;rt++,wt=$.next())wt=ye(Y,wt.value,we),wt!==null&&(V=p(wt,V,rt),Je===null?je=wt:Je.sibling=wt,Je=wt);return Ot&&br(Y,rt),je}for(et=l(Y,et);!wt.done;rt++,wt=$.next())wt=De(et,Y,rt,wt.value,we),wt!==null&&(t&&wt.alternate!==null&&et.delete(wt.key===null?rt:wt.key),V=p(wt,V,rt),Je===null?je=wt:Je.sibling=wt,Je=wt);return t&&et.forEach(function(U_){return i(Y,U_)}),Ot&&br(Y,rt),je}function Gt(Y,V,$,we){if(typeof $=="object"&&$!==null&&$.type===O&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case K:e:{for(var je=$.key,Je=V;Je!==null;){if(Je.key===je){if(je=$.type,je===O){if(Je.tag===7){a(Y,Je.sibling),V=u(Je,$.props.children),V.return=Y,Y=V;break e}}else if(Je.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&Zf(je)===Je.type){a(Y,Je.sibling),V=u(Je,$.props),V.ref=ha(Y,Je,$),V.return=Y,Y=V;break e}a(Y,Je);break}else i(Y,Je);Je=Je.sibling}$.type===O?(V=Fr($.props.children,Y.mode,we,$.key),V.return=Y,Y=V):(we=Vo($.type,$.key,$.props,null,Y.mode,we),we.ref=ha(Y,V,$),we.return=Y,Y=we)}return M(Y);case H:e:{for(Je=$.key;V!==null;){if(V.key===Je)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(Y,V.sibling),V=u(V,$.children||[]),V.return=Y,Y=V;break e}else{a(Y,V);break}else i(Y,V);V=V.sibling}V=lu($,Y.mode,we),V.return=Y,Y=V}return M(Y);case oe:return Je=$._init,Gt(Y,V,Je($._payload),we)}if(Ye($))return ze(Y,V,$,we);if(ue($))return He(Y,V,$,we);vo(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,V!==null&&V.tag===6?(a(Y,V.sibling),V=u(V,$),V.return=Y,Y=V):(a(Y,V),V=ou($,Y.mode,we),V.return=Y,Y=V),M(Y)):a(Y,V)}return Gt}var fs=Qf(!0),Jf=Qf(!1),xo=er(null),yo=null,hs=null,_c=null;function vc(){_c=hs=yo=null}function xc(t){var i=xo.current;Ft(xo),t._currentValue=i}function yc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function ps(t,i){yo=t,_c=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Tn=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(_c!==t)if(t={context:t,memoizedValue:i,next:null},hs===null){if(yo===null)throw Error(n(308));hs=t,yo.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return i}var Rr=null;function Sc(t){Rr===null?Rr=[t]:Rr.push(t)}function eh(t,i,a,l){var u=i.interleaved;return u===null?(a.next=a,Sc(i)):(a.next=u.next,u.next=a),i.interleaved=a,Ri(t,l)}function Ri(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var ir=!1;function Mc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function th(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,Ri(t,a)}return u=l.interleaved,u===null?(i.next=i,Sc(l)):(i.next=u.next,u.next=i),l.interleaved=i,Ri(t,a)}function So(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Fl(t,a)}}function nh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?u=p=M:p=p.next=M,a=a.next}while(a!==null);p===null?u=p=i:p=p.next=i}else u=p=i;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Mo(t,i,a,l){var u=t.updateQueue;ir=!1;var p=u.firstBaseUpdate,M=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var z=D,ie=z.next;z.next=null,M===null?p=ie:M.next=ie,M=z;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,D=ve.lastBaseUpdate,D!==M&&(D===null?ve.firstBaseUpdate=ie:D.next=ie,ve.lastBaseUpdate=z))}if(p!==null){var ye=u.baseState;M=0,ve=ie=z=null,D=p;do{var ge=D.lane,De=D.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:De,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ze=t,He=D;switch(ge=i,De=a,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){ye=ze.call(De,ye,ge);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,ge=typeof ze=="function"?ze.call(De,ye,ge):ze,ge==null)break e;ye=te({},ye,ge);break e;case 2:ir=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,ge=u.effects,ge===null?u.effects=[D]:ge.push(D))}else De={eventTime:De,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ve===null?(ie=ve=De,z=ye):ve=ve.next=De,M|=ge;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,u.lastBaseUpdate=ge,u.shared.pending=null}}while(!0);if(ve===null&&(z=ye),u.baseState=z,u.firstBaseUpdate=ie,u.lastBaseUpdate=ve,i=u.shared.interleaved,i!==null){u=i;do M|=u.lane,u=u.next;while(u!==i)}else p===null&&(u.shared.lanes=0);Nr|=M,t.lanes=M,t.memoizedState=ye}}function ih(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=a,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var pa={},hi=er(pa),ma=er(pa),ga=er(pa);function Pr(t){if(t===pa)throw Error(n(174));return t}function Ec(t,i){switch(Dt(ga,i),Dt(ma,t),Dt(hi,pa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}Ft(hi),Dt(hi,i)}function ms(){Ft(hi),Ft(ma),Ft(ga)}function rh(t){Pr(ga.current);var i=Pr(hi.current),a=Ve(i,t.type);i!==a&&(Dt(ma,t),Dt(hi,a))}function wc(t){ma.current===t&&(Ft(hi),Ft(ma))}var kt=er(0);function Eo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Tc=[];function Ac(){for(var t=0;t<Tc.length;t++)Tc[t]._workInProgressVersionPrimary=null;Tc.length=0}var wo=P.ReactCurrentDispatcher,Cc=P.ReactCurrentBatchConfig,Lr=0,zt=null,Yt=null,Qt=null,To=!1,_a=!1,va=0,i_=0;function cn(){throw Error(n(321))}function bc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Zn(t[a],i[a]))return!1;return!0}function Rc(t,i,a,l,u,p){if(Lr=p,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,wo.current=t===null||t.memoizedState===null?o_:l_,t=a(l,u),_a){p=0;do{if(_a=!1,va=0,25<=p)throw Error(n(301));p+=1,Qt=Yt=null,i.updateQueue=null,wo.current=c_,t=a(l,u)}while(_a)}if(wo.current=bo,i=Yt!==null&&Yt.next!==null,Lr=0,Qt=Yt=zt=null,To=!1,i)throw Error(n(300));return t}function Pc(){var t=va!==0;return va=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?zt.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Gn(){if(Yt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=Qt===null?zt.memoizedState:Qt.next;if(i!==null)Qt=i,Yt=t;else{if(t===null)throw Error(n(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Qt===null?zt.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function xa(t,i){return typeof i=="function"?i(t):i}function Lc(t){var i=Gn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=Yt,u=l.baseQueue,p=a.pending;if(p!==null){if(u!==null){var M=u.next;u.next=p.next,p.next=M}l.baseQueue=u=p,a.pending=null}if(u!==null){p=u.next,l=l.baseState;var D=M=null,z=null,ie=p;do{var ve=ie.lane;if((Lr&ve)===ve)z!==null&&(z=z.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),l=ie.hasEagerState?ie.eagerState:t(l,ie.action);else{var ye={lane:ve,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};z===null?(D=z=ye,M=l):z=z.next=ye,zt.lanes|=ve,Nr|=ve}ie=ie.next}while(ie!==null&&ie!==p);z===null?M=l:z.next=D,Zn(l,i.memoizedState)||(Tn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=z,a.lastRenderedState=l}if(t=a.interleaved,t!==null){u=t;do p=u.lane,zt.lanes|=p,Nr|=p,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Nc(t){var i=Gn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,u=a.pending,p=i.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do p=t(p,M.action),M=M.next;while(M!==u);Zn(p,i.memoizedState)||(Tn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,l]}function sh(){}function ah(t,i){var a=zt,l=Gn(),u=i(),p=!Zn(l.memoizedState,u);if(p&&(l.memoizedState=u,Tn=!0),l=l.queue,Dc(ch.bind(null,a,l,t),[t]),l.getSnapshot!==i||p||Qt!==null&&Qt.memoizedState.tag&1){if(a.flags|=2048,ya(9,lh.bind(null,a,l,u,i),void 0,null),Jt===null)throw Error(n(349));(Lr&30)!==0||oh(a,i,u)}return u}function oh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function lh(t,i,a,l){i.value=a,i.getSnapshot=l,uh(i)&&dh(t)}function ch(t,i,a){return a(function(){uh(i)&&dh(t)})}function uh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Zn(t,a)}catch{return!0}}function dh(t){var i=Ri(t,1);i!==null&&ni(i,t,1,-1)}function fh(t){var i=pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},i.queue=t,t=t.dispatch=a_.bind(null,zt,t),[i.memoizedState,t]}function ya(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function hh(){return Gn().memoizedState}function Ao(t,i,a,l){var u=pi();zt.flags|=t,u.memoizedState=ya(1|i,a,void 0,l===void 0?null:l)}function Co(t,i,a,l){var u=Gn();l=l===void 0?null:l;var p=void 0;if(Yt!==null){var M=Yt.memoizedState;if(p=M.destroy,l!==null&&bc(l,M.deps)){u.memoizedState=ya(i,a,p,l);return}}zt.flags|=t,u.memoizedState=ya(1|i,a,p,l)}function ph(t,i){return Ao(8390656,8,t,i)}function Dc(t,i){return Co(2048,8,t,i)}function mh(t,i){return Co(4,2,t,i)}function gh(t,i){return Co(4,4,t,i)}function _h(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function vh(t,i,a){return a=a!=null?a.concat([t]):null,Co(4,4,_h.bind(null,i,t),a)}function Ic(){}function xh(t,i){var a=Gn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&bc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function yh(t,i){var a=Gn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&bc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Sh(t,i,a){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,Tn=!0),t.memoizedState=a):(Zn(a,i)||(a=gn(),zt.lanes|=a,Nr|=a,t.baseState=!0),i)}function r_(t,i){var a=Pt;Pt=a!==0&&4>a?a:4,t(!0);var l=Cc.transition;Cc.transition={};try{t(!1),i()}finally{Pt=a,Cc.transition=l}}function Mh(){return Gn().memoizedState}function s_(t,i,a){var l=lr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Eh(t))wh(i,a);else if(a=eh(t,i,a,l),a!==null){var u=vn();ni(a,t,l,u),Th(a,i,l)}}function a_(t,i,a){var l=lr(t),u={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Eh(t))wh(i,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,D=p(M,a);if(u.hasEagerState=!0,u.eagerState=D,Zn(D,M)){var z=i.interleaved;z===null?(u.next=u,Sc(i)):(u.next=z.next,z.next=u),i.interleaved=u;return}}catch{}finally{}a=eh(t,i,u,l),a!==null&&(u=vn(),ni(a,t,l,u),Th(a,i,l))}}function Eh(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function wh(t,i){_a=To=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Th(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Fl(t,a)}}var bo={readContext:Vn,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},o_={readContext:Vn,useCallback:function(t,i){return pi().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:ph,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Ao(4194308,4,_h.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Ao(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ao(4,2,t,i)},useMemo:function(t,i){var a=pi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=pi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=s_.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=pi();return t={current:t},i.memoizedState=t},useState:fh,useDebugValue:Ic,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=fh(!1),i=t[0];return t=r_.bind(null,t[1]),pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=zt,u=pi();if(Ot){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),Jt===null)throw Error(n(349));(Lr&30)!==0||oh(l,i,a)}u.memoizedState=a;var p={value:a,getSnapshot:i};return u.queue=p,ph(ch.bind(null,l,p,t),[t]),l.flags|=2048,ya(9,lh.bind(null,l,p,a,i),void 0,null),a},useId:function(){var t=pi(),i=Jt.identifierPrefix;if(Ot){var a=bi,l=Ci;a=(l&~(1<<32-lt(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=va++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=i_++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},l_={readContext:Vn,useCallback:xh,useContext:Vn,useEffect:Dc,useImperativeHandle:vh,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:yh,useReducer:Lc,useRef:hh,useState:function(){return Lc(xa)},useDebugValue:Ic,useDeferredValue:function(t){var i=Gn();return Sh(i,Yt.memoizedState,t)},useTransition:function(){var t=Lc(xa)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:sh,useSyncExternalStore:ah,useId:Mh,unstable_isNewReconciler:!1},c_={readContext:Vn,useCallback:xh,useContext:Vn,useEffect:Dc,useImperativeHandle:vh,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:yh,useReducer:Nc,useRef:hh,useState:function(){return Nc(xa)},useDebugValue:Ic,useDeferredValue:function(t){var i=Gn();return Yt===null?i.memoizedState=t:Sh(i,Yt.memoizedState,t)},useTransition:function(){var t=Nc(xa)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:sh,useSyncExternalStore:ah,useId:Mh,unstable_isNewReconciler:!1};function Jn(t,i){if(t&&t.defaultProps){i=te({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Uc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:te({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ro={isMounted:function(t){return(t=t._reactInternals)?ui(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=vn(),u=lr(t),p=Pi(l,u);p.payload=i,a!=null&&(p.callback=a),i=rr(t,p,u),i!==null&&(ni(i,t,u,l),So(i,t,u))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=vn(),u=lr(t),p=Pi(l,u);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=rr(t,p,u),i!==null&&(ni(i,t,u,l),So(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=vn(),l=lr(t),u=Pi(a,l);u.tag=2,i!=null&&(u.callback=i),i=rr(t,u,l),i!==null&&(ni(i,t,l,a),So(i,t,l))}};function Ah(t,i,a,l,u,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!aa(a,l)||!aa(u,p):!0}function Ch(t,i,a){var l=!1,u=tr,p=i.contextType;return typeof p=="object"&&p!==null?p=Vn(p):(u=wn(i)?Ar:ln.current,l=i.contextTypes,p=(l=l!=null)?ls(t,u):tr),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ro,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=p),i}function bh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Ro.enqueueReplaceState(i,i.state,null)}function Fc(t,i,a,l){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},Mc(t);var p=i.contextType;typeof p=="object"&&p!==null?u.context=Vn(p):(p=wn(i)?Ar:ln.current,u.context=ls(t,p)),u.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Uc(t,i,p,a),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Ro.enqueueReplaceState(u,u.state,null),Mo(t,a,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,i){try{var a="",l=i;do a+=fe(l),l=l.return;while(l);var u=a}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:u,digest:null}}function Oc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function kc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var u_=typeof WeakMap=="function"?WeakMap:Map;function Rh(t,i,a){a=Pi(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Fo||(Fo=!0,Jc=l),kc(t,i)},a}function Ph(t,i,a){a=Pi(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;a.payload=function(){return l(u)},a.callback=function(){kc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){kc(t,i),typeof l!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function Lh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new u_;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(a)||(u.add(a),t=w_.bind(null,t,i,a),i.then(t,t))}function Nh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Dh(t,i,a,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Pi(-1,1),i.tag=2,rr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var d_=P.ReactCurrentOwner,Tn=!1;function _n(t,i,a,l){i.child=t===null?Jf(i,null,a,l):fs(i,t.child,a,l)}function Ih(t,i,a,l,u){a=a.render;var p=i.ref;return ps(i,u),l=Rc(t,i,a,l,p,u),a=Pc(),t!==null&&!Tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Li(t,i,u)):(Ot&&a&&fc(i),i.flags|=1,_n(t,i,l,u),i.child)}function Uh(t,i,a,l,u){if(t===null){var p=a.type;return typeof p=="function"&&!au(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Fh(t,i,p,l,u)):(t=Vo(a.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&u)===0){var M=p.memoizedProps;if(a=a.compare,a=a!==null?a:aa,a(M,l)&&t.ref===i.ref)return Li(t,i,u)}return i.flags|=1,t=ur(p,l),t.ref=i.ref,t.return=i,i.child=t}function Fh(t,i,a,l,u){if(t!==null){var p=t.memoizedProps;if(aa(p,l)&&t.ref===i.ref)if(Tn=!1,i.pendingProps=l=p,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Tn=!0);else return i.lanes=t.lanes,Li(t,i,u)}return zc(t,i,a,l,u)}function Oh(t,i,a){var l=i.pendingProps,u=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(vs,Un),Un|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(vs,Un),Un|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:a,Dt(vs,Un),Un|=l}else p!==null?(l=p.baseLanes|a,i.memoizedState=null):l=a,Dt(vs,Un),Un|=l;return _n(t,i,u,a),i.child}function kh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function zc(t,i,a,l,u){var p=wn(a)?Ar:ln.current;return p=ls(i,p),ps(i,u),a=Rc(t,i,a,l,p,u),l=Pc(),t!==null&&!Tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Li(t,i,u)):(Ot&&l&&fc(i),i.flags|=1,_n(t,i,a,u),i.child)}function zh(t,i,a,l,u){if(wn(a)){var p=!0;ho(i)}else p=!1;if(ps(i,u),i.stateNode===null)Lo(t,i),Ch(i,a,l),Fc(i,a,l,u),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var z=M.context,ie=a.contextType;typeof ie=="object"&&ie!==null?ie=Vn(ie):(ie=wn(a)?Ar:ln.current,ie=ls(i,ie));var ve=a.getDerivedStateFromProps,ye=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||z!==ie)&&bh(i,M,l,ie),ir=!1;var ge=i.memoizedState;M.state=ge,Mo(i,l,M,u),z=i.memoizedState,D!==l||ge!==z||En.current||ir?(typeof ve=="function"&&(Uc(i,a,ve,l),z=i.memoizedState),(D=ir||Ah(i,a,D,l,ge,z,ie))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),M.props=l,M.state=z,M.context=ie,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,th(t,i),D=i.memoizedProps,ie=i.type===i.elementType?D:Jn(i.type,D),M.props=ie,ye=i.pendingProps,ge=M.context,z=a.contextType,typeof z=="object"&&z!==null?z=Vn(z):(z=wn(a)?Ar:ln.current,z=ls(i,z));var De=a.getDerivedStateFromProps;(ve=typeof De=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==ye||ge!==z)&&bh(i,M,l,z),ir=!1,ge=i.memoizedState,M.state=ge,Mo(i,l,M,u);var ze=i.memoizedState;D!==ye||ge!==ze||En.current||ir?(typeof De=="function"&&(Uc(i,a,De,l),ze=i.memoizedState),(ie=ir||Ah(i,a,ie,l,ge,ze,z)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,z)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=z,l=ie):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Bc(t,i,a,l,p,u)}function Bc(t,i,a,l,u,p){kh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return u&&Wf(i,a,!1),Li(t,i,p);l=i.stateNode,d_.current=i;var D=M&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=fs(i,t.child,null,p),i.child=fs(i,null,D,p)):_n(t,i,D,p),i.memoizedState=l.state,u&&Wf(i,a,!0),i.child}function Bh(t){var i=t.stateNode;i.pendingContext?Vf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Vf(t,i.context,!1),Ec(t,i.containerInfo)}function Hh(t,i,a,l,u){return ds(),gc(u),i.flags|=256,_n(t,i,a,l),i.child}var Hc={dehydrated:null,treeContext:null,retryLane:0};function Vc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vh(t,i,a){var l=i.pendingProps,u=kt.current,p=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(u&2)!==0),D?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Dt(kt,u&1),t===null)return mc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=i.mode,p=i.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Go(M,l,0,null),t=Fr(t,l,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Vc(a),i.memoizedState=Hc,t):Gc(i,M));if(u=t.memoizedState,u!==null&&(D=u.dehydrated,D!==null))return f_(t,i,M,l,D,u,a);if(p){p=l.fallback,M=i.mode,u=t.child,D=u.sibling;var z={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=z,i.deletions=null):(l=ur(u,z),l.subtreeFlags=u.subtreeFlags&14680064),D!==null?p=ur(D,p):(p=Fr(p,M,a,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,M=t.child.memoizedState,M=M===null?Vc(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~a,i.memoizedState=Hc,l}return p=t.child,t=p.sibling,l=ur(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Gc(t,i){return i=Go({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Po(t,i,a,l){return l!==null&&gc(l),fs(i,t.child,null,a),t=Gc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function f_(t,i,a,l,u,p,M){if(a)return i.flags&256?(i.flags&=-257,l=Oc(Error(n(422))),Po(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,u=i.mode,l=Go({mode:"visible",children:l.children},u,0,null),p=Fr(p,u,M,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&fs(i,t.child,null,M),i.child.memoizedState=Vc(M),i.memoizedState=Hc,p);if((i.mode&1)===0)return Po(t,i,M,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var D=l.dgst;return l=D,p=Error(n(419)),l=Oc(p,l,void 0),Po(t,i,M,l)}if(D=(M&t.childLanes)!==0,Tn||D){if(l=Jt,l!==null){switch(M&-M){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|M))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,Ri(t,u),ni(l,t,u,-1))}return su(),l=Oc(Error(n(421))),Po(t,i,M,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=T_.bind(null,t),u._reactRetry=i,null):(t=p.treeContext,In=Ji(u.nextSibling),Dn=i,Ot=!0,Qn=null,t!==null&&(Bn[Hn++]=Ci,Bn[Hn++]=bi,Bn[Hn++]=Cr,Ci=t.id,bi=t.overflow,Cr=i),i=Gc(i,l.children),i.flags|=4096,i)}function Gh(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),yc(t.return,i,a)}function Wc(t,i,a,l,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=u)}function Wh(t,i,a){var l=i.pendingProps,u=l.revealOrder,p=l.tail;if(_n(t,i,l.children,a),l=kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gh(t,a,i);else if(t.tag===19)Gh(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(kt,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(a=i.child,u=null;a!==null;)t=a.alternate,t!==null&&Eo(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),Wc(i,!1,u,a,p);break;case"backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Eo(t)===null){i.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Wc(i,!0,a,null,p);break;case"together":Wc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Lo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Li(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Nr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=ur(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=ur(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function h_(t,i,a){switch(i.tag){case 3:Bh(i),ds();break;case 5:rh(i);break;case 1:wn(i.type)&&ho(i);break;case 4:Ec(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Dt(xo,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(kt,kt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Vh(t,i,a):(Dt(kt,kt.current&1),t=Li(t,i,a),t!==null?t.sibling:null);Dt(kt,kt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Wh(t,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Dt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,Oh(t,i,a)}return Li(t,i,a)}var jh,jc,Xh,qh;jh=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},jc=function(){},Xh=function(t,i,a,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Pr(hi.current);var p=null;switch(a){case"input":u=X(t,u),l=X(t,l),p=[];break;case"select":u=te({},u,{value:void 0}),l=te({},l,{value:void 0}),p=[];break;case"textarea":u=A(t,u),l=A(t,l),p=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=co)}ht(a,l);var M;a=null;for(ie in u)if(!l.hasOwnProperty(ie)&&u.hasOwnProperty(ie)&&u[ie]!=null)if(ie==="style"){var D=u[ie];for(M in D)D.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(o.hasOwnProperty(ie)?p||(p=[]):(p=p||[]).push(ie,null));for(ie in l){var z=l[ie];if(D=u!=null?u[ie]:void 0,l.hasOwnProperty(ie)&&z!==D&&(z!=null||D!=null))if(ie==="style")if(D){for(M in D)!D.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in z)z.hasOwnProperty(M)&&D[M]!==z[M]&&(a||(a={}),a[M]=z[M])}else a||(p||(p=[]),p.push(ie,a)),a=z;else ie==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,D=D?D.__html:void 0,z!=null&&D!==z&&(p=p||[]).push(ie,z)):ie==="children"?typeof z!="string"&&typeof z!="number"||(p=p||[]).push(ie,""+z):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(o.hasOwnProperty(ie)?(z!=null&&ie==="onScroll"&&Ut("scroll",t),p||D===z||(p=[])):(p=p||[]).push(ie,z))}a&&(p=p||[]).push("style",a);var ie=p;(i.updateQueue=ie)&&(i.flags|=4)}},qh=function(t,i,a,l){a!==l&&(i.flags|=4)};function Sa(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function un(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function p_(t,i,a){var l=i.pendingProps;switch(hc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(i),null;case 1:return wn(i.type)&&fo(),un(i),null;case 3:return l=i.stateNode,ms(),Ft(En),Ft(ln),Ac(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(_o(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qn!==null&&(nu(Qn),Qn=null))),jc(t,i),un(i),null;case 5:wc(i);var u=Pr(ga.current);if(a=i.type,t!==null&&i.stateNode!=null)Xh(t,i,a,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return un(i),null}if(t=Pr(hi.current),_o(i)){l=i.stateNode,a=i.type;var p=i.memoizedProps;switch(l[fi]=i,l[da]=p,t=(i.mode&1)!==0,a){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(u=0;u<la.length;u++)Ut(la[u],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":pn(l,p),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Ut("invalid",l);break;case"textarea":ee(l,p),Ut("invalid",l)}ht(a,p),u=null;for(var M in p)if(p.hasOwnProperty(M)){var D=p[M];M==="children"?typeof D=="string"?l.textContent!==D&&(p.suppressHydrationWarning!==!0&&lo(l.textContent,D,t),u=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&lo(l.textContent,D,t),u=["children",""+D]):o.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Ut("scroll",l)}switch(a){case"input":Ze(l),Qe(l,p,!0);break;case"textarea":Ze(l),_e(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=co)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(a,{is:l.is}):(t=M.createElement(a),a==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,a),t[fi]=i,t[da]=l,jh(t,i,!1,!1),i.stateNode=t;e:{switch(M=at(a,l),a){case"dialog":Ut("cancel",t),Ut("close",t),u=l;break;case"iframe":case"object":case"embed":Ut("load",t),u=l;break;case"video":case"audio":for(u=0;u<la.length;u++)Ut(la[u],t);u=l;break;case"source":Ut("error",t),u=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),u=l;break;case"details":Ut("toggle",t),u=l;break;case"input":pn(t,l),u=X(t,l),Ut("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=te({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":ee(t,l),u=A(t,l),Ut("invalid",t);break;default:u=l}ht(a,u),D=u;for(p in D)if(D.hasOwnProperty(p)){var z=D[p];p==="style"?nt(t,z):p==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ue(t,z)):p==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&dt(t,z):typeof z=="number"&&dt(t,""+z):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?z!=null&&p==="onScroll"&&Ut("scroll",t):z!=null&&I(t,p,z,M))}switch(a){case"input":Ze(t),Qe(t,l,!1);break;case"textarea":Ze(t),_e(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ae(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?N(t,!!l.multiple,p,!1):l.defaultValue!=null&&N(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=co)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return un(i),null;case 6:if(t&&i.stateNode!=null)qh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Pr(ga.current),Pr(hi.current),_o(i)){if(l=i.stateNode,a=i.memoizedProps,l[fi]=i,(p=l.nodeValue!==a)&&(t=Dn,t!==null))switch(t.tag){case 3:lo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lo(l.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[fi]=i,i.stateNode=l}return un(i),null;case 13:if(Ft(kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&In!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Kf(),ds(),i.flags|=98560,p=!1;else if(p=_o(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[fi]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),p=!1}else Qn!==null&&(nu(Qn),Qn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(kt.current&1)!==0?$t===0&&($t=3):su())),i.updateQueue!==null&&(i.flags|=4),un(i),null);case 4:return ms(),jc(t,i),t===null&&ca(i.stateNode.containerInfo),un(i),null;case 10:return xc(i.type._context),un(i),null;case 17:return wn(i.type)&&fo(),un(i),null;case 19:if(Ft(kt),p=i.memoizedState,p===null)return un(i),null;if(l=(i.flags&128)!==0,M=p.rendering,M===null)if(l)Sa(p,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Eo(t),M!==null){for(i.flags|=128,Sa(p,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)p=a,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Dt(kt,kt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Ee()>xs&&(i.flags|=128,l=!0,Sa(p,!1),i.lanes=4194304)}else{if(!l)if(t=Eo(M),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Sa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Ot)return un(i),null}else 2*Ee()-p.renderingStartTime>xs&&a!==1073741824&&(i.flags|=128,l=!0,Sa(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(a=p.last,a!==null?a.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ee(),i.sibling=null,a=kt.current,Dt(kt,l?a&1|2:a&1),i):(un(i),null);case 22:case 23:return ru(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Un&1073741824)!==0&&(un(i),i.subtreeFlags&6&&(i.flags|=8192)):un(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function m_(t,i){switch(hc(i),i.tag){case 1:return wn(i.type)&&fo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ms(),Ft(En),Ft(ln),Ac(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return wc(i),null;case 13:if(Ft(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ds()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ft(kt),null;case 4:return ms(),null;case 10:return xc(i.type._context),null;case 22:case 23:return ru(),null;case 24:return null;default:return null}}var No=!1,dn=!1,g_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function _s(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Ht(t,i,l)}else a.current=null}function Xc(t,i,a){try{a()}catch(l){Ht(t,i,l)}}var Yh=!1;function __(t,i){if(rc=Za,t=Af(),Kl(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var M=0,D=-1,z=-1,ie=0,ve=0,ye=t,ge=null;t:for(;;){for(var De;ye!==a||u!==0&&ye.nodeType!==3||(D=M+u),ye!==p||l!==0&&ye.nodeType!==3||(z=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(De=ye.firstChild)!==null;)ge=ye,ye=De;for(;;){if(ye===t)break t;if(ge===a&&++ie===u&&(D=M),ge===p&&++ve===l&&(z=M),(De=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=De}a=D===-1||z===-1?null:{start:D,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(sc={focusedElem:t,selectionRange:a},Za=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,Gt=ze.memoizedState,Y=i.stateNode,V=Y.getSnapshotBeforeUpdate(i.elementType===i.type?He:Jn(i.type,He),Gt);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){Ht(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return ze=Yh,Yh=!1,ze}function Ma(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var p=u.destroy;u.destroy=void 0,p!==void 0&&Xc(i,a,p)}u=u.next}while(u!==l)}}function Do(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function qc(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function $h(t){var i=t.alternate;i!==null&&(t.alternate=null,$h(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[fi],delete i[da],delete i[cc],delete i[J0],delete i[e_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kh(t){return t.tag===5||t.tag===3||t.tag===4}function Zh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=co));else if(l!==4&&(t=t.child,t!==null))for(Yc(t,i,a),t=t.sibling;t!==null;)Yc(t,i,a),t=t.sibling}function $c(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for($c(t,i,a),t=t.sibling;t!==null;)$c(t,i,a),t=t.sibling}var nn=null,ei=!1;function sr(t,i,a){for(a=a.child;a!==null;)Qh(t,i,a),a=a.sibling}function Qh(t,i,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 5:dn||_s(a,i);case 6:var l=nn,u=ei;nn=null,sr(t,i,a),nn=l,ei=u,nn!==null&&(ei?(t=nn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):nn.removeChild(a.stateNode));break;case 18:nn!==null&&(ei?(t=nn,a=a.stateNode,t.nodeType===8?lc(t.parentNode,a):t.nodeType===1&&lc(t,a),ea(t)):lc(nn,a.stateNode));break;case 4:l=nn,u=ei,nn=a.stateNode.containerInfo,ei=!0,sr(t,i,a),nn=l,ei=u;break;case 0:case 11:case 14:case 15:if(!dn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var p=u,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&Xc(a,i,M),u=u.next}while(u!==l)}sr(t,i,a);break;case 1:if(!dn&&(_s(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(D){Ht(a,i,D)}sr(t,i,a);break;case 21:sr(t,i,a);break;case 22:a.mode&1?(dn=(l=dn)||a.memoizedState!==null,sr(t,i,a),dn=l):sr(t,i,a);break;default:sr(t,i,a)}}function Jh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new g_),i.forEach(function(l){var u=A_.bind(null,t,l);a.has(l)||(a.add(l),l.then(u,u))})}}function ti(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l];try{var p=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:nn=D.stateNode,ei=!1;break e;case 3:nn=D.stateNode.containerInfo,ei=!0;break e;case 4:nn=D.stateNode.containerInfo,ei=!0;break e}D=D.return}if(nn===null)throw Error(n(160));Qh(p,M,u),nn=null,ei=!1;var z=u.alternate;z!==null&&(z.return=null),u.return=null}catch(ie){Ht(u,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ep(i,t),i=i.sibling}function ep(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(i,t),mi(t),l&4){try{Ma(3,t,t.return),Do(3,t)}catch(He){Ht(t,t.return,He)}try{Ma(5,t,t.return)}catch(He){Ht(t,t.return,He)}}break;case 1:ti(i,t),mi(t),l&512&&a!==null&&_s(a,a.return);break;case 5:if(ti(i,t),mi(t),l&512&&a!==null&&_s(a,a.return),t.flags&32){var u=t.stateNode;try{dt(u,"")}catch(He){Ht(t,t.return,He)}}if(l&4&&(u=t.stateNode,u!=null)){var p=t.memoizedProps,M=a!==null?a.memoizedProps:p,D=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&mt(u,p),at(D,M);var ie=at(D,p);for(M=0;M<z.length;M+=2){var ve=z[M],ye=z[M+1];ve==="style"?nt(u,ye):ve==="dangerouslySetInnerHTML"?Ue(u,ye):ve==="children"?dt(u,ye):I(u,ve,ye,ie)}switch(D){case"input":ft(u,p);break;case"textarea":me(u,p);break;case"select":var ge=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var De=p.value;De!=null?N(u,!!p.multiple,De,!1):ge!==!!p.multiple&&(p.defaultValue!=null?N(u,!!p.multiple,p.defaultValue,!0):N(u,!!p.multiple,p.multiple?[]:"",!1))}u[da]=p}catch(He){Ht(t,t.return,He)}}break;case 6:if(ti(i,t),mi(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,p=t.memoizedProps;try{u.nodeValue=p}catch(He){Ht(t,t.return,He)}}break;case 3:if(ti(i,t),mi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ea(i.containerInfo)}catch(He){Ht(t,t.return,He)}break;case 4:ti(i,t),mi(t);break;case 13:ti(i,t),mi(t),u=t.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(Qc=Ee())),l&4&&Jh(t);break;case 22:if(ve=a!==null&&a.memoizedState!==null,t.mode&1?(dn=(ie=dn)||ve,ti(i,t),dn=ie):ti(i,t),mi(t),l&8192){if(ie=t.memoizedState!==null,(t.stateNode.isHidden=ie)&&!ve&&(t.mode&1)!==0)for(Fe=t,ve=t.child;ve!==null;){for(ye=Fe=ve;Fe!==null;){switch(ge=Fe,De=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ma(4,ge,ge.return);break;case 1:_s(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){l=ge,a=ge.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){Ht(l,a,He)}}break;case 5:_s(ge,ge.return);break;case 22:if(ge.memoizedState!==null){ip(ye);continue}}De!==null?(De.return=ge,Fe=De):ip(ye)}ve=ve.sibling}e:for(ve=null,ye=t;;){if(ye.tag===5){if(ve===null){ve=ye;try{u=ye.stateNode,ie?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=ye.stateNode,z=ye.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,D.style.display=tt("display",M))}catch(He){Ht(t,t.return,He)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=ie?"":ye.memoizedProps}catch(He){Ht(t,t.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ti(i,t),mi(t),l&4&&Jh(t);break;case 21:break;default:ti(i,t),mi(t)}}function mi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(Kh(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(dt(u,""),l.flags&=-33);var p=Zh(t);$c(t,p,u);break;case 3:case 4:var M=l.stateNode.containerInfo,D=Zh(t);Yc(t,D,M);break;default:throw Error(n(161))}}catch(z){Ht(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function v_(t,i,a){Fe=t,tp(t)}function tp(t,i,a){for(var l=(t.mode&1)!==0;Fe!==null;){var u=Fe,p=u.child;if(u.tag===22&&l){var M=u.memoizedState!==null||No;if(!M){var D=u.alternate,z=D!==null&&D.memoizedState!==null||dn;D=No;var ie=dn;if(No=M,(dn=z)&&!ie)for(Fe=u;Fe!==null;)M=Fe,z=M.child,M.tag===22&&M.memoizedState!==null?rp(u):z!==null?(z.return=M,Fe=z):rp(u);for(;p!==null;)Fe=p,tp(p),p=p.sibling;Fe=u,No=D,dn=ie}np(t)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,Fe=p):np(t)}}function np(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:dn||Do(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!dn)if(a===null)l.componentDidMount();else{var u=i.elementType===i.type?a.memoizedProps:Jn(i.type,a.memoizedProps);l.componentDidUpdate(u,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&ih(i,p,l);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}ih(i,M,a)}break;case 5:var D=i.stateNode;if(a===null&&i.flags&4){a=D;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var ve=ie.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&ea(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}dn||i.flags&512&&qc(i)}catch(ge){Ht(i,i.return,ge)}}if(i===t){Fe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function ip(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Fe=a;break}Fe=i.return}}function rp(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Do(4,i)}catch(z){Ht(i,a,z)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(z){Ht(i,u,z)}}var p=i.return;try{qc(i)}catch(z){Ht(i,p,z)}break;case 5:var M=i.return;try{qc(i)}catch(z){Ht(i,M,z)}}}catch(z){Ht(i,i.return,z)}if(i===t){Fe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Fe=D;break}Fe=i.return}}var x_=Math.ceil,Io=P.ReactCurrentDispatcher,Kc=P.ReactCurrentOwner,Wn=P.ReactCurrentBatchConfig,yt=0,Jt=null,Wt=null,rn=0,Un=0,vs=er(0),$t=0,Ea=null,Nr=0,Uo=0,Zc=0,wa=null,An=null,Qc=0,xs=1/0,Ni=null,Fo=!1,Jc=null,ar=null,Oo=!1,or=null,ko=0,Ta=0,eu=null,zo=-1,Bo=0;function vn(){return(yt&6)!==0?Ee():zo!==-1?zo:zo=Ee()}function lr(t){return(t.mode&1)===0?1:(yt&2)!==0&&rn!==0?rn&-rn:n_.transition!==null?(Bo===0&&(Bo=gn()),Bo):(t=Pt,t!==0||(t=window.event,t=t===void 0?16:af(t.type)),t)}function ni(t,i,a,l){if(50<Ta)throw Ta=0,eu=null,Error(n(185));Mn(t,a,l),((yt&2)===0||t!==Jt)&&(t===Jt&&((yt&2)===0&&(Uo|=a),$t===4&&cr(t,rn)),Cn(t,l),a===1&&yt===0&&(i.mode&1)===0&&(xs=Ee()+500,po&&nr()))}function Cn(t,i){var a=t.callbackNode;kn(t,i);var l=di(t,t===Jt?rn:0);if(l===0)a!==null&&se(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&se(a),i===1)t.tag===0?t_(ap.bind(null,t)):jf(ap.bind(null,t)),Z0(function(){(yt&6)===0&&nr()}),a=null;else{switch(Zd(l)){case 1:a=Be;break;case 4:a=it;break;case 16:a=st;break;case 536870912:a=_t;break;default:a=st}a=pp(a,sp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function sp(t,i){if(zo=-1,Bo=0,(yt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(ys()&&t.callbackNode!==a)return null;var l=di(t,t===Jt?rn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ho(t,l);else{i=l;var u=yt;yt|=2;var p=lp();(Jt!==t||rn!==i)&&(Ni=null,xs=Ee()+500,Ir(t,i));do try{M_();break}catch(D){op(t,D)}while(!0);vc(),Io.current=p,yt=u,Wt!==null?i=0:(Jt=null,rn=0,i=$t)}if(i!==0){if(i===2&&(u=wi(t),u!==0&&(l=u,i=tu(t,u))),i===1)throw a=Ea,Ir(t,0),cr(t,l),Cn(t,Ee()),a;if(i===6)cr(t,l);else{if(u=t.current.alternate,(l&30)===0&&!y_(u)&&(i=Ho(t,l),i===2&&(p=wi(t),p!==0&&(l=p,i=tu(t,p))),i===1))throw a=Ea,Ir(t,0),cr(t,l),Cn(t,Ee()),a;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,An,Ni);break;case 3:if(cr(t,l),(l&130023424)===l&&(i=Qc+500-Ee(),10<i)){if(di(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){vn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=oc(Ur.bind(null,t,An,Ni),i);break}Ur(t,An,Ni);break;case 4:if(cr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var M=31-lt(l);p=1<<M,M=i[M],M>u&&(u=M),l&=~p}if(l=u,l=Ee()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*x_(l/1960))-l,10<l){t.timeoutHandle=oc(Ur.bind(null,t,An,Ni),l);break}Ur(t,An,Ni);break;case 5:Ur(t,An,Ni);break;default:throw Error(n(329))}}}return Cn(t,Ee()),t.callbackNode===a?sp.bind(null,t):null}function tu(t,i){var a=wa;return t.current.memoizedState.isDehydrated&&(Ir(t,i).flags|=256),t=Ho(t,i),t!==2&&(i=An,An=a,i!==null&&nu(i)),t}function nu(t){An===null?An=t:An.push.apply(An,t)}function y_(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var u=a[l],p=u.getSnapshot;u=u.value;try{if(!Zn(p(),u))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i){for(i&=~Zc,i&=~Uo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-lt(i),l=1<<a;t[a]=-1,i&=~l}}function ap(t){if((yt&6)!==0)throw Error(n(327));ys();var i=di(t,0);if((i&1)===0)return Cn(t,Ee()),null;var a=Ho(t,i);if(t.tag!==0&&a===2){var l=wi(t);l!==0&&(i=l,a=tu(t,l))}if(a===1)throw a=Ea,Ir(t,0),cr(t,i),Cn(t,Ee()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,An,Ni),Cn(t,Ee()),null}function iu(t,i){var a=yt;yt|=1;try{return t(i)}finally{yt=a,yt===0&&(xs=Ee()+500,po&&nr())}}function Dr(t){or!==null&&or.tag===0&&(yt&6)===0&&ys();var i=yt;yt|=1;var a=Wn.transition,l=Pt;try{if(Wn.transition=null,Pt=1,t)return t()}finally{Pt=l,Wn.transition=a,yt=i,(yt&6)===0&&nr()}}function ru(){Un=vs.current,Ft(vs)}function Ir(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,K0(a)),Wt!==null)for(a=Wt.return;a!==null;){var l=a;switch(hc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&fo();break;case 3:ms(),Ft(En),Ft(ln),Ac();break;case 5:wc(l);break;case 4:ms();break;case 13:Ft(kt);break;case 19:Ft(kt);break;case 10:xc(l.type._context);break;case 22:case 23:ru()}a=a.return}if(Jt=t,Wt=t=ur(t.current,null),rn=Un=i,$t=0,Ea=null,Zc=Uo=Nr=0,An=wa=null,Rr!==null){for(i=0;i<Rr.length;i++)if(a=Rr[i],l=a.interleaved,l!==null){a.interleaved=null;var u=l.next,p=a.pending;if(p!==null){var M=p.next;p.next=u,l.next=M}a.pending=l}Rr=null}return t}function op(t,i){do{var a=Wt;try{if(vc(),wo.current=bo,To){for(var l=zt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}To=!1}if(Lr=0,Qt=Yt=zt=null,_a=!1,va=0,Kc.current=null,a===null||a.return===null){$t=1,Ea=i,Wt=null;break}e:{var p=t,M=a.return,D=a,z=i;if(i=rn,D.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ie=z,ve=D,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var De=Nh(M);if(De!==null){De.flags&=-257,Dh(De,M,D,p,i),De.mode&1&&Lh(p,ie,i),i=De,z=ie;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(z),i.updateQueue=He}else ze.add(z);break e}else{if((i&1)===0){Lh(p,ie,i),su();break e}z=Error(n(426))}}else if(Ot&&D.mode&1){var Gt=Nh(M);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),Dh(Gt,M,D,p,i),gc(gs(z,D));break e}}p=z=gs(z,D),$t!==4&&($t=2),wa===null?wa=[p]:wa.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Y=Rh(p,z,i);nh(p,Y);break e;case 1:D=z;var V=p.type,$=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(ar===null||!ar.has($)))){p.flags|=65536,i&=-i,p.lanes|=i;var we=Ph(p,D,i);nh(p,we);break e}}p=p.return}while(p!==null)}up(a)}catch(je){i=je,Wt===a&&a!==null&&(Wt=a=a.return);continue}break}while(!0)}function lp(){var t=Io.current;return Io.current=bo,t===null?bo:t}function su(){($t===0||$t===3||$t===2)&&($t=4),Jt===null||(Nr&268435455)===0&&(Uo&268435455)===0||cr(Jt,rn)}function Ho(t,i){var a=yt;yt|=2;var l=lp();(Jt!==t||rn!==i)&&(Ni=null,Ir(t,i));do try{S_();break}catch(u){op(t,u)}while(!0);if(vc(),yt=a,Io.current=l,Wt!==null)throw Error(n(261));return Jt=null,rn=0,$t}function S_(){for(;Wt!==null;)cp(Wt)}function M_(){for(;Wt!==null&&!j();)cp(Wt)}function cp(t){var i=hp(t.alternate,t,Un);t.memoizedProps=t.pendingProps,i===null?up(t):Wt=i,Kc.current=null}function up(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=p_(a,i,Un),a!==null){Wt=a;return}}else{if(a=m_(a,i),a!==null){a.flags&=32767,Wt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=t}while(i!==null);$t===0&&($t=5)}function Ur(t,i,a){var l=Pt,u=Wn.transition;try{Wn.transition=null,Pt=1,E_(t,i,a,l)}finally{Wn.transition=u,Pt=l}return null}function E_(t,i,a,l){do ys();while(or!==null);if((yt&6)!==0)throw Error(n(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(Ya(t,p),t===Jt&&(Wt=Jt=null,rn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Oo||(Oo=!0,pp(st,function(){return ys(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Wn.transition,Wn.transition=null;var M=Pt;Pt=1;var D=yt;yt|=4,Kc.current=null,__(t,a),ep(a,t),G0(sc),Za=!!rc,sc=rc=null,t.current=a,v_(a),Te(),yt=D,Pt=M,Wn.transition=p}else t.current=a;if(Oo&&(Oo=!1,or=t,ko=u),p=t.pendingLanes,p===0&&(ar=null),an(a.stateNode),Cn(t,Ee()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)u=i[a],l(u.value,{componentStack:u.stack,digest:u.digest});if(Fo)throw Fo=!1,t=Jc,Jc=null,t;return(ko&1)!==0&&t.tag!==0&&ys(),p=t.pendingLanes,(p&1)!==0?t===eu?Ta++:(Ta=0,eu=t):Ta=0,nr(),null}function ys(){if(or!==null){var t=Zd(ko),i=Wn.transition,a=Pt;try{if(Wn.transition=null,Pt=16>t?16:t,or===null)var l=!1;else{if(t=or,or=null,ko=0,(yt&6)!==0)throw Error(n(331));var u=yt;for(yt|=4,Fe=t.current;Fe!==null;){var p=Fe,M=p.child;if((Fe.flags&16)!==0){var D=p.deletions;if(D!==null){for(var z=0;z<D.length;z++){var ie=D[z];for(Fe=ie;Fe!==null;){var ve=Fe;switch(ve.tag){case 0:case 11:case 15:Ma(8,ve,p)}var ye=ve.child;if(ye!==null)ye.return=ve,Fe=ye;else for(;Fe!==null;){ve=Fe;var ge=ve.sibling,De=ve.return;if($h(ve),ve===ie){Fe=null;break}if(ge!==null){ge.return=De,Fe=ge;break}Fe=De}}}var ze=p.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var Gt=He.sibling;He.sibling=null,He=Gt}while(He!==null)}}Fe=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Fe=M;else e:for(;Fe!==null;){if(p=Fe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ma(9,p,p.return)}var Y=p.sibling;if(Y!==null){Y.return=p.return,Fe=Y;break e}Fe=p.return}}var V=t.current;for(Fe=V;Fe!==null;){M=Fe;var $=M.child;if((M.subtreeFlags&2064)!==0&&$!==null)$.return=M,Fe=$;else e:for(M=V;Fe!==null;){if(D=Fe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Do(9,D)}}catch(je){Ht(D,D.return,je)}if(D===M){Fe=null;break e}var we=D.sibling;if(we!==null){we.return=D.return,Fe=we;break e}Fe=D.return}}if(yt=u,nr(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Tt,t)}catch{}l=!0}return l}finally{Pt=a,Wn.transition=i}}return!1}function dp(t,i,a){i=gs(a,i),i=Rh(t,i,1),t=rr(t,i,1),i=vn(),t!==null&&(Mn(t,1,i),Cn(t,i))}function Ht(t,i,a){if(t.tag===3)dp(t,t,a);else for(;i!==null;){if(i.tag===3){dp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){t=gs(a,t),t=Ph(i,t,1),i=rr(i,t,1),t=vn(),i!==null&&(Mn(i,1,t),Cn(i,t));break}}i=i.return}}function w_(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=vn(),t.pingedLanes|=t.suspendedLanes&a,Jt===t&&(rn&a)===a&&($t===4||$t===3&&(rn&130023424)===rn&&500>Ee()-Qc?Ir(t,0):Zc|=a),Cn(t,i)}function fp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Kn,Kn<<=1,(Kn&130023424)===0&&(Kn=4194304)));var a=vn();t=Ri(t,i),t!==null&&(Mn(t,i,a),Cn(t,a))}function T_(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),fp(t,a)}function A_(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),fp(t,a)}var hp;hp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||En.current)Tn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Tn=!1,h_(t,i,a);Tn=(t.flags&131072)!==0}else Tn=!1,Ot&&(i.flags&1048576)!==0&&Xf(i,go,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Lo(t,i),t=i.pendingProps;var u=ls(i,ln.current);ps(i,a),u=Rc(null,i,l,t,u,a);var p=Pc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(l)?(p=!0,ho(i)):p=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Mc(i),u.updater=Ro,i.stateNode=u,u._reactInternals=i,Fc(i,l,t,a),i=Bc(null,i,l,!0,p,a)):(i.tag=0,Ot&&p&&fc(i),_n(null,i,u,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Lo(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=b_(l),t=Jn(l,t),u){case 0:i=zc(null,i,l,t,a);break e;case 1:i=zh(null,i,l,t,a);break e;case 11:i=Ih(null,i,l,t,a);break e;case 14:i=Uh(null,i,l,Jn(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Jn(l,u),zc(t,i,l,u,a);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Jn(l,u),zh(t,i,l,u,a);case 3:e:{if(Bh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,u=p.element,th(t,i),Mo(i,l,null,a);var M=i.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){u=gs(Error(n(423)),i),i=Hh(t,i,l,a,u);break e}else if(l!==u){u=gs(Error(n(424)),i),i=Hh(t,i,l,a,u);break e}else for(In=Ji(i.stateNode.containerInfo.firstChild),Dn=i,Ot=!0,Qn=null,a=Jf(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ds(),l===u){i=Li(t,i,a);break e}_n(t,i,l,a)}i=i.child}return i;case 5:return rh(i),t===null&&mc(i),l=i.type,u=i.pendingProps,p=t!==null?t.memoizedProps:null,M=u.children,ac(l,u)?M=null:p!==null&&ac(l,p)&&(i.flags|=32),kh(t,i),_n(t,i,M,a),i.child;case 6:return t===null&&mc(i),null;case 13:return Vh(t,i,a);case 4:return Ec(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=fs(i,null,l,a):_n(t,i,l,a),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Jn(l,u),Ih(t,i,l,u,a);case 7:return _n(t,i,i.pendingProps,a),i.child;case 8:return _n(t,i,i.pendingProps.children,a),i.child;case 12:return _n(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,p=i.memoizedProps,M=u.value,Dt(xo,l._currentValue),l._currentValue=M,p!==null)if(Zn(p.value,M)){if(p.children===u.children&&!En.current){i=Li(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){M=p.child;for(var z=D.firstContext;z!==null;){if(z.context===l){if(p.tag===1){z=Pi(-1,a&-a),z.tag=2;var ie=p.updateQueue;if(ie!==null){ie=ie.shared;var ve=ie.pending;ve===null?z.next=z:(z.next=ve.next,ve.next=z),ie.pending=z}}p.lanes|=a,z=p.alternate,z!==null&&(z.lanes|=a),yc(p.return,a,i),D.lanes|=a;break}z=z.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=a,D=M.alternate,D!==null&&(D.lanes|=a),yc(M,a,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}_n(t,i,u.children,a),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,ps(i,a),u=Vn(u),l=l(u),i.flags|=1,_n(t,i,l,a),i.child;case 14:return l=i.type,u=Jn(l,i.pendingProps),u=Jn(l.type,u),Uh(t,i,l,u,a);case 15:return Fh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Jn(l,u),Lo(t,i),i.tag=1,wn(l)?(t=!0,ho(i)):t=!1,ps(i,a),Ch(i,l,u),Fc(i,l,u,a),Bc(null,i,l,!0,t,a);case 19:return Wh(t,i,a);case 22:return Oh(t,i,a)}throw Error(n(156,i.tag))};function pp(t,i){return re(t,i)}function C_(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,i,a,l){return new C_(t,i,a,l)}function au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function b_(t){if(typeof t=="function")return au(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Z)return 11;if(t===de)return 14}return 2}function ur(t,i){var a=t.alternate;return a===null?(a=jn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Vo(t,i,a,l,u,p){var M=2;if(l=t,typeof t=="function")au(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case O:return Fr(a.children,u,p,i);case k:M=8,u|=8;break;case R:return t=jn(12,a,i,u|2),t.elementType=R,t.lanes=p,t;case q:return t=jn(13,a,i,u),t.elementType=q,t.lanes=p,t;case ae:return t=jn(19,a,i,u),t.elementType=ae,t.lanes=p,t;case le:return Go(a,u,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:M=10;break e;case L:M=9;break e;case Z:M=11;break e;case de:M=14;break e;case oe:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=jn(M,a,i,u),i.elementType=t,i.type=l,i.lanes=p,i}function Fr(t,i,a,l){return t=jn(7,t,l,i),t.lanes=a,t}function Go(t,i,a,l){return t=jn(22,t,l,i),t.elementType=le,t.lanes=a,t.stateNode={isHidden:!1},t}function ou(t,i,a){return t=jn(6,t,null,i),t.lanes=a,t}function lu(t,i,a){return i=jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function R_(t,i,a,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zn(0),this.expirationTimes=zn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zn(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function cu(t,i,a,l,u,p,M,D,z){return t=new R_(t,i,a,D,z),i===1?(i=1,p===!0&&(i|=8)):i=0,p=jn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mc(p),t}function P_(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function mp(t){if(!t)return tr;t=t._reactInternals;e:{if(ui(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(wn(a))return Gf(t,a,i)}return i}function gp(t,i,a,l,u,p,M,D,z){return t=cu(a,l,!0,t,u,p,M,D,z),t.context=mp(null),a=t.current,l=vn(),u=lr(a),p=Pi(l,u),p.callback=i??null,rr(a,p,u),t.current.lanes=u,Mn(t,u,l),Cn(t,l),t}function Wo(t,i,a,l){var u=i.current,p=vn(),M=lr(u);return a=mp(a),i.context===null?i.context=a:i.pendingContext=a,i=Pi(p,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=rr(u,i,M),t!==null&&(ni(t,u,M,p),So(t,u,M)),M}function jo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _p(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function uu(t,i){_p(t,i),(t=t.alternate)&&_p(t,i)}function L_(){return null}var vp=typeof reportError=="function"?reportError:function(t){console.error(t)};function du(t){this._internalRoot=t}Xo.prototype.render=du.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Wo(t,i,null,null)},Xo.prototype.unmount=du.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){Wo(null,t,null,null)}),i[Ti]=null}};function Xo(t){this._internalRoot=t}Xo.prototype.unstable_scheduleHydration=function(t){if(t){var i=ef();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Ki.length&&i!==0&&i<Ki[a].priority;a++);Ki.splice(a,0,t),a===0&&rf(t)}};function fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xp(){}function N_(t,i,a,l,u){if(u){if(typeof l=="function"){var p=l;l=function(){var ie=jo(M);p.call(ie)}}var M=gp(i,l,t,0,null,!1,!1,"",xp);return t._reactRootContainer=M,t[Ti]=M.current,ca(t.nodeType===8?t.parentNode:t),Dr(),M}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var D=l;l=function(){var ie=jo(z);D.call(ie)}}var z=cu(t,0,!1,null,null,!1,!1,"",xp);return t._reactRootContainer=z,t[Ti]=z.current,ca(t.nodeType===8?t.parentNode:t),Dr(function(){Wo(i,z,a,l)}),z}function Yo(t,i,a,l,u){var p=a._reactRootContainer;if(p){var M=p;if(typeof u=="function"){var D=u;u=function(){var z=jo(M);D.call(z)}}Wo(i,M,t,u)}else M=N_(a,i,t,u,l);return jo(M)}Qd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=qt(i.pendingLanes);a!==0&&(Fl(i,a|1),Cn(i,Ee()),(yt&6)===0&&(xs=Ee()+500,nr()))}break;case 13:Dr(function(){var l=Ri(t,1);if(l!==null){var u=vn();ni(l,t,1,u)}}),uu(t,1)}},Ol=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var a=vn();ni(i,t,134217728,a)}uu(t,134217728)}},Jd=function(t){if(t.tag===13){var i=lr(t),a=Ri(t,i);if(a!==null){var l=vn();ni(a,t,i,l)}uu(t,i)}},ef=function(){return Pt},tf=function(t,i){var a=Pt;try{return Pt=t,i()}finally{Pt=a}},be=function(t,i,a){switch(i){case"input":if(ft(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var u=uo(l);if(!u)throw Error(n(90));qe(l),ft(l,u)}}}break;case"textarea":me(t,a);break;case"select":i=a.value,i!=null&&N(t,!!a.multiple,i,!1)}},It=iu,Xt=Dr;var D_={usingClientEntryPoint:!1,Events:[fa,as,uo,Pe,ot,iu]},Aa={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},I_={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=b(t),t===null?null:t.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||L_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{Tt=$o.inject(I_),gt=$o}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D_,bn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fu(i))throw Error(n(200));return P_(t,i,null,a)},bn.createRoot=function(t,i){if(!fu(t))throw Error(n(299));var a=!1,l="",u=vp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=cu(t,1,!1,null,null,a,!1,l,u),t[Ti]=i.current,ca(t.nodeType===8?t.parentNode:t),new du(i)},bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=b(i),t=t===null?null:t.stateNode,t},bn.flushSync=function(t){return Dr(t)},bn.hydrate=function(t,i,a){if(!qo(i))throw Error(n(200));return Yo(null,t,i,!0,a)},bn.hydrateRoot=function(t,i,a){if(!fu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,u=!1,p="",M=vp;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=gp(i,null,t,1,a??null,u,!1,p,M),t[Ti]=i.current,ca(t),l)for(t=0;t<l.length;t++)a=l[t],u=a._getVersion,u=u(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,u]:i.mutableSourceEagerHydrationData.push(a,u);return new Xo(i)},bn.render=function(t,i,a){if(!qo(i))throw Error(n(200));return Yo(null,t,i,!1,a)},bn.unmountComponentAtNode=function(t){if(!qo(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){Yo(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1},bn.unstable_batchedUpdates=iu,bn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!qo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Yo(t,i,a,!1,l)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var Cp;function V_(){if(Cp)return mu.exports;Cp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),mu.exports=H_(),mu.exports}var bp;function G_(){if(bp)return Ko;bp=1;var s=V_();return Ko.createRoot=s.createRoot,Ko.hydrateRoot=s.hydrateRoot,Ko}var W_=G_();const j_=km(W_);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function q_(s,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:X_(s),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=s=>{let e="",n=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){n=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=n?r.toUpperCase():r,n=!1}return e};/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=s=>{const e=Y_(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function vu(s){return s!=null}function K_(s,e={}){var v,S;const n=e.attributeNames??{},r=E=>n[E]??E,o=s.size??s.width??Or.width,c=s.size??s.height??Or.height,d=((v=s.aliases)==null?void 0:v.filter(E=>typeof E=="string"&&E.trim()!=="").map(E=>`lucide-${E}`))??[],f=[...s.name?[`lucide-${s.name}`]:[],...d],h=((S=e.className)==null?void 0:S.split(" ").filter(Boolean))??[],m=e.includeDefaultClasses===!1?Zu(...h):Zu("lucide",...f,...h),g=e.absoluteStrokeWidth?Number(e.strokeWidth??Or["stroke-width"])*Number(s.size??s.width??Or.width)/Number(e.size??e.width??Or.width):e.strokeWidth??Or["stroke-width"];return["svg",{...Object.entries(Or).reduce((E,[T,y])=>(E[r(T)]=y,E),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&vu(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&vu(e.width)&&{[r("width")]:e.width},..."height"in e&&vu(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:g,...m&&{[r("class")]:m},[r("viewBox")]:`0 0 ${o} ${c}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(E=>{const[T,y,_]=E,U=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...y}:y;return _?[T,U,_]:[T,U]})]}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Z_(s,e={}){return K_(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},J_=$e.createContext({}),ev=()=>$e.useContext(J_),tv=$e.forwardRef(({color:s,size:e,width:n,height:r,strokeWidth:o,absoluteStrokeWidth:c,nonScalingStroke:d,className:f="",children:h,iconNode:m=[],icon:g={node:m,aliases:[],size:24},...x},v)=>{const{size:S=24,strokeWidth:E=2,absoluteStrokeWidth:T=!1,nonScalingStroke:y=!1,color:_="currentColor",className:U=""}=ev()??{},I=!!h||Q_(x),[P,K,H=[]]=Z_(g,{color:s??_,width:n??e??S,height:r??e??S,strokeWidth:o??E,absoluteStrokeWidth:c??T,nonScalingStroke:d??y,className:Zu(U,f),hasA11yProp:I,attributes:x});return $e.createElement(P,{ref:v,...K},[...H.map(([O,k])=>$e.createElement(O,k)),...Array.isArray(h)?h:[h]])});/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function bt(s,e=[],n=[]){const r=typeof s=="string"?q_(s,e,n):s,o=$e.forwardRef(({className:c,...d},f)=>$e.createElement(tv,{ref:f,icon:r,className:c,...d}));return r.name&&(o.displayName=$_(r.name)),o}/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};Bm.node;const nv=bt(Bm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};Hm.node;const Vm=bt(Hm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm={name:"brain",size:24,node:[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 01-3-4 4.17 4.17 0 01-3 4",key:"5nuw1p"}],["path",{d:"M17.707 6.294A3 3 0 1012 5a3 3 0 10-5.707 1.294",key:"18ldcf"}],["path",{d:"M17.996 5.125a4 4 0 012.526 5.77",key:"1sdu8q"}],["path",{d:"M18 18a4 4 0 002-7.465",key:"7xqqvr"}],["path",{d:"M19.967 17.482a4 4 0 11-7.967.517 4 4 0 11-7.967-.517",key:"t46ysz"}],["path",{d:"M6 18a4 4 0 01-2-7.465",key:"1y2m15"}],["path",{d:"M6.004 5.125a4 4 0 00-2.526 5.77",key:"3cw1ss"}]]};Gm.node;const iv=bt(Gm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Wm.node;const rv=bt(Wm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};jm.node;const sv=bt(jm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm={name:"circle-exclamation-point",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle","circle-alert"]};Xm.node;const av=bt(Xm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm={name:"columns-2",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],aliases:["columns"]};qm.node;const ov=bt(qm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};Ym.node;const $m=bt(Ym);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};Km.node;const Zm=bt(Km);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm={name:"crosshair",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]};Qm.node;const lv=bt(Qm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Jm.node;const cv=bt(Jm);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg={name:"gauge",size:24,node:[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]};eg.node;const uv=bt(eg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};tg.node;const dv=bt(tg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};ng.node;const ig=bt(ng);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg={name:"map",size:24,node:[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]};rg.node;const fv=bt(rg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"navigation",size:24,node:[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]};sg.node;const hv=bt(sg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"octagon-exclamation-point",size:24,node:[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]],aliases:["alert-octagon","octagon-alert"]};ag.node;const Rp=bt(ag);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};og.node;const lg=bt(og);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};cg.node;const pv=bt(cg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};ug.node;const mv=bt(ug);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"satellite",size:24,node:[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]]};dg.node;const gv=bt(dg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};fg.node;const _v=bt(fg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"shield-exclamation-point",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],aliases:["shield-alert"]};hg.node;const Pp=bt(hg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};pg.node;const vv=bt(pg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};mg.node;const xv=bt(mg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};gg.node;const yv=bt(gg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};_g.node;const Sv=bt(_g);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg={name:"triangle-exclamation-point",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle","triangle-alert"]};vg.node;const Cl=bt(vg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};xg.node;const Lp=bt(xg);/**
 * @license lucide-react v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};yg.node;const Mv=bt(yg),Ev=({status:s,roverCallsign:e,datasetCount:n})=>w.jsxs("header",{className:"bg-mars-800/80 backdrop-blur-md border-b border-mars-700/60 px-6 py-3.5 flex items-center justify-between sticky top-0 z-50",children:[w.jsxs("div",{className:"flex items-center space-x-4",children:[w.jsxs("div",{className:"relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-mars-500 to-amber-600 shadow-lg shadow-mars-500/20",children:[w.jsx($m,{className:"w-6 h-6 text-white animate-spin-slow"}),w.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-mars-900 animate-pulse"})]}),w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center space-x-2.5",children:[w.jsx("h1",{className:"text-lg font-bold tracking-wider text-white uppercase font-mono",children:"ODYSSEY"}),w.jsx("span",{className:"text-[11px] px-2 py-0.5 rounded font-mono bg-mars-700 text-mars-300 border border-mars-600",children:"MARS-09 TACTICAL"}),w.jsxs("span",{className:"text-[11px] px-2 py-0.5 rounded font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800 flex items-center space-x-1",children:[w.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"}),w.jsx("span",{children:s})]})]}),w.jsx("p",{className:"text-xs text-slate-400",children:"Autonomous Mars Rover Navigation & Planetary Terrain Intelligence Engine"})]})]}),w.jsxs("div",{className:"flex items-center space-x-6 text-xs font-mono",children:[w.jsxs("div",{className:"flex items-center space-x-2 text-slate-300",children:[w.jsx(gv,{className:"w-4 h-4 text-mars-400"}),w.jsxs("span",{children:["DATUM: ",w.jsx("strong",{className:"text-white",children:"IAU 2015 SPHEROID"})]})]}),w.jsxs("div",{className:"flex items-center space-x-2 text-slate-300",children:[w.jsx(nv,{className:"w-4 h-4 text-emerald-400"}),w.jsxs("span",{children:["ROVER: ",w.jsx("strong",{className:"text-white",children:e})]})]}),w.jsxs("div",{className:"flex items-center space-x-2 text-slate-300",children:[w.jsx(Zm,{className:"w-4 h-4 text-cyan-400"}),w.jsxs("span",{children:["INGESTED: ",w.jsxs("strong",{className:"text-white",children:[n," LAYERS"]})]})]})]})]}),js="/api";async function wv(){const s=await fetch(`${js}/status`);if(!s.ok)throw new Error("Failed to fetch system status");return s.json()}async function Tv(){const s=await fetch(`${js}/samples`);if(!s.ok)throw new Error("Failed to fetch sample datasets");return s.json()}async function Av(s,e){const n=new FormData;n.append("file",s),n.append("file_type",e);const r=await fetch(`${js}/upload`,{method:"POST",body:n});if(!r.ok){const c=await r.json().catch(()=>({detail:"Upload failed"}));throw new Error(c.detail||"Upload failed")}return(await r.json()).data}async function Cv(s,e){const n=new FormData;n.append("imagery_id",s),n.append("dem_id",e);const r=await fetch(`${js}/validate-compatibility`,{method:"POST",body:n});if(!r.ok){const c=await r.json().catch(()=>({detail:"Validation failed"}));throw new Error(c.detail||"Validation failed")}return(await r.json()).report}async function bv(s){const e=new FormData;e.append("dem_id",s);const n=await fetch(`${js}/analyze-terrain`,{method:"POST",body:e});if(!n.ok){const r=await n.json().catch(()=>({detail:"Terrain analysis failed"}));throw new Error(r.detail||"Terrain analysis failed")}return n.json()}async function Rv(s,e,n,r,o){const c=new FormData;c.append("dem_id",s),c.append("start_r",e.toString()),c.append("start_c",n.toString()),c.append("goal_r",r.toString()),c.append("goal_c",o.toString());const d=await fetch(`${js}/plan-path`,{method:"POST",body:c});if(!d.ok){const f=await d.json().catch(()=>({detail:"Path planning failed"}));throw new Error(f.detail||"Path planning failed")}return d.json()}const Pv=({imageryRecord:s,demRecord:e,demOffsetRecord:n,onSelectImagery:r,onSelectDem:o,onLoadSamples:c,isLoading:d})=>{var v,S;const[f,h]=$e.useState(null),[m,g]=$e.useState(null),x=async(E,T)=>{var _;const y=(_=E.target.files)==null?void 0:_[0];if(y){h(T),g(null);try{const U=await Av(y,T);T==="imagery"?r(U):o(U)}catch(U){g(U.message||"Failed to upload raster.")}finally{h(null)}}};return w.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 flex flex-col space-y-4",children:[w.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-3",children:[w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx(ig,{className:"w-4 h-4 text-mars-400"}),w.jsx("h2",{className:"text-sm font-semibold tracking-wide text-white uppercase font-mono",children:"Planetary Data Ingestion"})]}),w.jsxs("button",{onClick:c,disabled:d,className:"flex items-center space-x-1.5 text-xs font-mono px-2.5 py-1 rounded bg-mars-700 hover:bg-mars-600 text-slate-200 border border-mars-600 transition",children:[w.jsx(pv,{className:`w-3 h-3 ${d?"animate-spin":""}`}),w.jsx("span",{children:"Reload Jezero Samples"})]})]}),m&&w.jsxs("div",{className:"bg-red-950/60 border border-red-800/80 rounded-lg p-3 text-xs text-red-300 flex items-start space-x-2",children:[w.jsx(Cl,{className:"w-4 h-4 text-red-400 flex-shrink-0 mt-0.5"}),w.jsx("span",{children:m})]}),w.jsxs("div",{className:"bg-mars-900/70 border border-mars-700/40 rounded-lg p-3 space-y-2.5",children:[w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),w.jsx("span",{className:"text-xs font-mono font-medium text-slate-200",children:"OPTICAL IMAGERY (HiRISE/CTX)"})]}),w.jsxs("label",{className:"cursor-pointer text-[11px] font-mono px-2.5 py-1 rounded bg-mars-700 hover:bg-mars-600 text-cyan-300 border border-cyan-800/50 flex items-center space-x-1 transition",children:[w.jsx(Lp,{className:"w-3 h-3"}),w.jsx("span",{children:f==="imagery"?"Ingesting...":"Upload GeoTIFF"}),w.jsx("input",{type:"file",accept:".tif,.tiff,.geotiff",className:"hidden",onChange:E=>x(E,"imagery"),disabled:f!==null})]})]}),s?w.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] font-mono bg-black/40 rounded p-2 border border-mars-700/30",children:[w.jsxs("div",{children:[w.jsx("span",{className:"text-slate-400",children:"File: "}),w.jsx("span",{className:"text-white truncate block",children:s.filename})]}),w.jsxs("div",{children:[w.jsx("span",{className:"text-slate-400",children:"Dims: "}),w.jsxs("span",{className:"text-cyan-300",children:[s.metadata.width," × ",s.metadata.height," px (",s.metadata.bands,"b)"]})]}),w.jsxs("div",{className:"col-span-2",children:[w.jsx("span",{className:"text-slate-400",children:"CRS: "}),w.jsx("span",{className:"text-amber-300 truncate block",children:s.metadata.crs_name})]}),w.jsxs("div",{children:[w.jsx("span",{className:"text-slate-400",children:"Resolution: "}),w.jsxs("span",{className:"text-slate-200",children:[s.metadata.resolution_x.toFixed(2)," m/px"]})]}),w.jsxs("div",{children:[w.jsx("span",{className:"text-slate-400",children:"NoData: "}),w.jsx("span",{className:"text-slate-200",children:s.metadata.nodata??"None"})]})]}):w.jsx("div",{className:"text-xs text-slate-500 italic py-2 text-center",children:"No optical imagery loaded"})]}),w.jsxs("div",{className:"bg-mars-900/70 border border-mars-700/40 rounded-lg p-3 space-y-2.5",children:[w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400"}),w.jsx("span",{className:"text-xs font-mono font-medium text-slate-200",children:"DIGITAL ELEVATION MODEL (DEM)"})]}),w.jsxs("div",{className:"flex items-center space-x-2",children:[n&&w.jsx("button",{onClick:()=>o(n),className:"text-[10px] font-mono px-2 py-0.5 rounded bg-mars-700/70 hover:bg-mars-600 text-amber-300 border border-amber-800/40",title:"Select shifted DEM to test spatial incompatibility warning",children:"Test Offset DEM"}),w.jsxs("label",{className:"cursor-pointer text-[11px] font-mono px-2.5 py-1 rounded bg-mars-700 hover:bg-mars-600 text-amber-300 border border-amber-800/50 flex items-center space-x-1 transition",children:[w.jsx(Lp,{className:"w-3 h-3"}),w.jsx("span",{children:f==="dem"?"Ingesting...":"Upload GeoTIFF"}),w.jsx("input",{type:"file",accept:".tif,.tiff,.geotiff",className:"hidden",onChange:E=>x(E,"dem"),disabled:f!==null})]})]})]}),e?w.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] font-mono bg-black/40 rounded p-2 border border-mars-700/30",children:[w.jsxs("div",{children:[w.jsx("span",{className:"text-slate-400",children:"File: "}),w.jsx("span",{className:"text-white truncate block",children:e.filename})]}),w.jsxs("div",{children:[w.jsx("span",{className:"text-slate-400",children:"Dims: "}),w.jsxs("span",{className:"text-amber-300",children:[e.metadata.width," × ",e.metadata.height," px"]})]}),w.jsxs("div",{className:"col-span-2",children:[w.jsx("span",{className:"text-slate-400",children:"CRS: "}),w.jsx("span",{className:"text-amber-300 truncate block",children:e.metadata.crs_name})]}),w.jsxs("div",{children:[w.jsx("span",{className:"text-slate-400",children:"Resolution: "}),w.jsxs("span",{className:"text-slate-200",children:[e.metadata.resolution_x.toFixed(2)," m/px"]})]}),w.jsxs("div",{children:[w.jsx("span",{className:"text-slate-400",children:"Elevation: "}),w.jsxs("span",{className:"text-emerald-400",children:[(v=e.metadata.min_val)==null?void 0:v.toFixed(0),"m to ",(S=e.metadata.max_val)==null?void 0:S.toFixed(0),"m"]})]})]}):w.jsx("div",{className:"text-xs text-slate-500 italic py-2 text-center",children:"No elevation DEM loaded"})]})]})},Lv=({report:s,isValidating:e})=>{if(e)return w.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 flex items-center justify-center space-x-3 text-slate-400 text-xs font-mono",children:[w.jsx("span",{className:"w-4 h-4 border-2 border-mars-500 border-t-transparent rounded-full animate-spin"}),w.jsx("span",{children:"Evaluating planetary spatial compatibility & CRS alignment..."})]});if(!s)return w.jsx("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 text-center text-xs font-mono text-slate-500",children:"Load both Imagery and DEM rasters to run spatial compatibility inspection."});const{is_compatible:n,crs_match:r,overlap_metrics:o,resolution_ratio:c,warnings:d,errors:f,recommendations:h}=s;return w.jsxs("div",{className:`border rounded-xl p-4 space-y-3.5 transition ${n?"bg-mars-800/60 border-emerald-800/60":"bg-red-950/40 border-red-800/70"}`,children:[w.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-2.5",children:[w.jsxs("div",{className:"flex items-center space-x-2",children:[n?w.jsx(_v,{className:"w-5 h-5 text-emerald-400"}):w.jsx(Pp,{className:"w-5 h-5 text-red-400"}),w.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Spatial Compatibility Verification"})]}),w.jsx("span",{className:`text-[11px] font-mono px-2.5 py-0.5 rounded font-bold ${n?"bg-emerald-950 text-emerald-300 border border-emerald-800":"bg-red-950 text-red-300 border border-red-800"}`,children:n?"VALIDATED COMPATIBLE":"INCOMPATIBILITY DETECTED"})]}),w.jsxs("div",{className:"grid grid-cols-3 gap-2 text-[11px] font-mono",children:[w.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[w.jsx("span",{className:"text-slate-400 block text-[10px]",children:"CRS ALIGNMENT"}),w.jsxs("div",{className:"flex items-center space-x-1.5 mt-0.5",children:[r?w.jsx(rv,{className:"w-3.5 h-3.5 text-emerald-400"}):w.jsx(Mv,{className:"w-3.5 h-3.5 text-amber-400"}),w.jsx("span",{className:r?"text-emerald-300":"text-amber-300",children:r?"Matched":"Reprojection Req."})]})]}),w.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[w.jsx("span",{className:"text-slate-400 block text-[10px]",children:"SPATIAL OVERLAP"}),w.jsxs("span",{className:"text-cyan-300 font-bold block mt-0.5",children:[o.imagery_coverage_pct,"% / ",o.dem_coverage_pct,"%"]})]}),w.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[w.jsx("span",{className:"text-slate-400 block text-[10px]",children:"RESOLUTION RATIO"}),w.jsxs("span",{className:"text-slate-200 block mt-0.5",children:[c.toFixed(2),"x (DEM/Img)"]})]})]}),w.jsxs("div",{className:"space-y-1",children:[w.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-slate-400",children:[w.jsx("span",{children:"Imagery Spatial Footprint Covered by DEM:"}),w.jsxs("span",{className:"text-cyan-400",children:[o.imagery_coverage_pct,"%"]})]}),w.jsx("div",{className:"w-full bg-mars-950 rounded-full h-1.5 overflow-hidden border border-mars-700/40",children:w.jsx("div",{className:`h-full transition-all duration-500 ${o.imagery_coverage_pct>80?"bg-emerald-500":o.imagery_coverage_pct>20?"bg-amber-500":"bg-red-500"}`,style:{width:`${Math.min(100,o.imagery_coverage_pct)}%`}})})]}),f.length>0&&w.jsx("div",{className:"space-y-1",children:f.map((m,g)=>w.jsxs("div",{className:"text-[11px] font-mono text-red-300 flex items-start space-x-1.5 bg-red-950/60 p-2 rounded border border-red-900/60",children:[w.jsx(Pp,{className:"w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5"}),w.jsx("span",{children:m})]},g))}),d.length>0&&w.jsx("div",{className:"space-y-1",children:d.map((m,g)=>w.jsxs("div",{className:"text-[11px] font-mono text-amber-300 flex items-start space-x-1.5 bg-amber-950/40 p-2 rounded border border-amber-900/40",children:[w.jsx(Cl,{className:"w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5"}),w.jsx("span",{children:m})]},g))}),h.length>0&&w.jsx("div",{className:"space-y-1",children:h.map((m,g)=>w.jsxs("div",{className:"text-[11px] font-mono text-cyan-300 flex items-start space-x-1.5 bg-cyan-950/30 p-2 rounded border border-cyan-900/40",children:[w.jsx(dv,{className:"w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5"}),w.jsxs("span",{children:["Rec: ",m]})]},g))})]})},Nv=[{icon:"🟩",hazard:"Minimal",label:"Safe Bedrock"},{icon:"🟨",hazard:"Moderate",label:"Loose Sand / Dune"},{icon:"🟪",hazard:"Elevated",label:"Rocky Field / Boulders"},{icon:"🟥",hazard:"Lethal",label:"Steep Hazard / Cliff"},{icon:"⬛",hazard:"Unknown",label:"Shadow / Dropout"}],Dv=({segmentationResult:s,isSegmenting:e,error:n,mcSamples:r,onMcSamplesChange:o,onRunSegmentation:c,canRun:d})=>{var v;const f=(s==null?void 0:s.class_distributions)??[],h=(s==null?void 0:s.inference_latency_ms)??null,m=(s==null?void 0:s.parameter_count)??null,g=f.filter(S=>S.class_id>=3).reduce((S,E)=>S+E.coverage_pct,0),x=((v=f.find(S=>S.class_id===0))==null?void 0:v.coverage_pct)??0;return w.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-4",children:[w.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-3",children:[w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx(iv,{className:"w-4 h-4 text-violet-400"}),w.jsx("h2",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"AI Terrain Segmentation"}),w.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-violet-950 text-violet-300 border border-violet-800 font-mono",children:"MC-DROPOUT"})]}),m&&w.jsxs("span",{className:"text-[10px] font-mono text-slate-400 flex items-center space-x-1",children:[w.jsx(Zm,{className:"w-3 h-3"}),w.jsxs("span",{children:[(m/1e3).toFixed(0),"K params"]})]})]}),w.jsxs("div",{className:"bg-black/40 rounded-lg p-2.5 border border-mars-700/30 text-[10px] font-mono space-y-1",children:[w.jsx("div",{className:"text-slate-400 font-semibold uppercase tracking-wide mb-1.5",children:"Multi-Modal U-Net Architecture"}),w.jsxs("div",{className:"grid grid-cols-2 gap-x-4 gap-y-0.5 text-slate-300",children:[w.jsxs("span",{children:["Inputs: ",w.jsx("strong",{className:"text-cyan-400",children:"6 channels"})]}),w.jsxs("span",{children:["Classes: ",w.jsx("strong",{className:"text-violet-400",children:"5 semantic"})]}),w.jsx("span",{className:"col-span-2 text-slate-400",children:"R, G, B + DEM height + Slope + TRI"})]})]}),w.jsxs("div",{className:"space-y-2.5",children:[w.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[w.jsx("span",{className:"text-slate-400",children:"MC Dropout Passes:"}),w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx("input",{type:"range",min:3,max:15,step:1,value:r,onChange:S=>o(Number(S.target.value)),className:"w-20 accent-violet-500 cursor-pointer h-1.5 bg-mars-700 rounded-lg"}),w.jsx("span",{className:"text-violet-300 w-5",children:r})]})]}),w.jsx("button",{onClick:c,disabled:!d,className:`w-full py-2.5 rounded-lg font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition border ${d?"bg-gradient-to-r from-violet-700 to-indigo-700 hover:from-violet-600 hover:to-indigo-600 text-white border-violet-500/50 shadow-lg shadow-violet-950":"bg-mars-800 text-slate-500 border-mars-700 cursor-not-allowed"}`,children:e?w.jsxs(w.Fragment,{children:[w.jsx("span",{className:"w-3.5 h-3.5 border-2 border-violet-300 border-t-transparent rounded-full animate-spin"}),w.jsx("span",{children:"Running MC Dropout Inference..."})]}):w.jsxs(w.Fragment,{children:[w.jsx(lg,{className:"w-3.5 h-3.5 fill-current"}),w.jsx("span",{children:"Run Terrain Segmentation"})]})}),n&&w.jsxs("div",{className:"text-[10px] font-mono text-red-400 flex items-start space-x-1.5 bg-red-950/40 p-2 rounded border border-red-800/40",children:[w.jsx(Cl,{className:"w-3.5 h-3.5 flex-shrink-0 mt-0.5"}),w.jsx("span",{children:n})]}),!d&&!e&&!n&&w.jsxs("div",{className:"text-[10px] font-mono text-amber-400 flex items-center space-x-1.5 bg-amber-950/40 p-2 rounded border border-amber-800/40",children:[w.jsx(Cl,{className:"w-3.5 h-3.5 flex-shrink-0"}),w.jsx("span",{children:"Load both Imagery and DEM datasets to enable segmentation"})]})]}),s&&w.jsxs("div",{className:"space-y-2",children:[w.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-slate-400 bg-black/40 rounded px-2 py-1 border border-mars-700/30",children:[w.jsxs("span",{className:"flex items-center space-x-1",children:[w.jsx(uv,{className:"w-3 h-3"}),w.jsx("span",{children:"Inference Latency"})]}),w.jsxs("span",{className:`font-bold ${h<500?"text-emerald-400":h<1500?"text-amber-400":"text-red-400"}`,children:[h.toFixed(0)," ms"]})]}),w.jsxs("div",{className:"text-[10px] font-mono text-slate-400 flex items-center space-x-1.5 bg-violet-950/30 p-2 rounded border border-violet-800/30",children:[w.jsx(ig,{className:"w-3 h-3 text-violet-400 flex-shrink-0"}),w.jsxs("span",{children:["Switch to ",w.jsx("strong",{className:"text-violet-300",children:"AI Seg"})," or ",w.jsx("strong",{className:"text-cyan-300",children:"Uncertainty σ²"})," layer in the viewport above"]})]})]}),f.length>0&&w.jsxs("div",{className:"space-y-2",children:[w.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1 border-b border-mars-700/40",children:[w.jsx("span",{className:"font-semibold uppercase tracking-wide",children:"Terrain Class Coverage"}),w.jsxs("span",{className:`${g>30?"text-red-400":g>15?"text-amber-400":"text-emerald-400"}`,children:[g.toFixed(1),"% hazardous"]})]}),f.map(S=>{const E=Nv[S.class_id]??{hazard:"Unknown",label:S.class_name},T=`rgb(${S.color_rgb[0]}, ${S.color_rgb[1]}, ${S.color_rgb[2]})`;return w.jsxs("div",{className:"space-y-0.5",children:[w.jsxs("div",{className:"flex justify-between items-center text-[10px] font-mono",children:[w.jsxs("div",{className:"flex items-center space-x-1.5",children:[w.jsx("span",{className:"w-2.5 h-2.5 rounded-sm flex-shrink-0",style:{backgroundColor:T}}),w.jsx("span",{className:"text-slate-300",children:S.class_name}),w.jsx("span",{className:`px-1.5 py-0 rounded text-[9px] ${E.hazard==="Lethal"?"bg-red-950 text-red-400":E.hazard==="Unknown"?"bg-slate-800 text-slate-400":E.hazard==="Elevated"?"bg-orange-950 text-orange-400":E.hazard==="Moderate"?"bg-amber-950 text-amber-400":"bg-emerald-950 text-emerald-400"} border border-opacity-30`,children:E.hazard})]}),w.jsxs("span",{className:"text-white font-bold",children:[S.coverage_pct.toFixed(1),"%"]})]}),w.jsx("div",{className:"w-full bg-mars-950 rounded-full h-1 overflow-hidden border border-mars-700/30",children:w.jsx("div",{className:"h-full rounded-full transition-all duration-700",style:{width:`${Math.min(100,S.coverage_pct)}%`,backgroundColor:T}})})]},S.class_id)}),w.jsxs("div",{className:"mt-2 bg-black/40 rounded-lg p-2.5 border border-mars-700/30",children:[w.jsxs("div",{className:"flex justify-between items-center text-[11px] font-mono",children:[w.jsx("span",{className:"text-slate-400",children:"Safe Traversability Index"}),w.jsxs("span",{className:`text-xl font-bold ${x>60?"text-emerald-400":x>35?"text-amber-400":"text-red-400"}`,children:[x.toFixed(0),"%"]})]}),w.jsx("div",{className:"w-full bg-mars-950 rounded-full h-2 overflow-hidden mt-1.5 border border-mars-700/40",children:w.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-emerald-700 to-emerald-400 transition-all duration-700",style:{width:`${x}%`}})})]})]})]})},Iv=({imageryUrl:s,demColormapUrl:e,slopeUrl:n,segmentationUrl:r,uncertaintyUrl:o,pathCoords:c,scienceTargets:d,startCoords:f,goalCoords:h,onSetStart:m,onSetGoal:g,ThreeDViewer:x})=>{var R,C;const[v,S]=$e.useState("split"),[E,T]=$e.useState("imagery"),[y,_]=$e.useState("goal"),[U,I]=$e.useState(null),P=zm.useRef(null),K=[{key:"imagery",label:"Optical",url:s,color:"text-cyan-300"},{key:"dem",label:"DEM",url:e,color:"text-amber-300"},{key:"slope",label:"Slope",url:n,color:"text-rose-300"},{key:"segmentation",label:"AI Seg",url:r,color:"text-violet-300"},{key:"uncertainty",label:"Uncertainty σ²",url:o,color:"text-cyan-300"}],H=(R=K.find(L=>L.key===E))==null?void 0:R.url,O=L=>{if(!P.current)return;const Z=P.current.getBoundingClientRect(),q=Math.round((L.clientX-Z.left)/Z.width*512),ae=Math.round((L.clientY-Z.top)/Z.height*512),de=[Math.max(0,Math.min(511,ae)),Math.max(0,Math.min(511,q))];y==="start"?m(de):g(de)},k=L=>({x:L[1]/512*100,y:L[0]/512*100});return w.jsxs("div",{className:"flex flex-col h-full space-y-3",children:[w.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl px-4 py-2.5 flex items-center justify-between gap-4 flex-wrap",children:[w.jsx("div",{className:"flex items-center space-x-1 bg-mars-950/80 rounded-lg p-0.5 border border-mars-700/50 text-[11px] font-mono overflow-x-auto",children:K.map(L=>w.jsx("button",{onClick:()=>L.url&&T(L.key),disabled:!L.url,title:L.url?"":"Layer not yet generated",className:`px-2.5 py-1 rounded whitespace-nowrap transition ${E===L.key&&L.url?`bg-mars-700 ${L.color} font-bold`:L.url?"text-slate-400 hover:text-slate-200":"text-slate-700 cursor-not-allowed"}`,children:L.label},L.key))}),w.jsxs("div",{className:"flex items-center space-x-2 text-[11px] font-mono",children:[w.jsx("span",{className:"text-slate-500",children:"Click to set:"}),w.jsxs("button",{onClick:()=>_("start"),className:`px-2.5 py-1 rounded border flex items-center space-x-1 transition ${y==="start"?"bg-emerald-950 text-emerald-300 border-emerald-700 font-bold ring-1 ring-emerald-500":"bg-mars-900 text-slate-400 border-mars-700 hover:border-mars-500"}`,children:[w.jsx(hv,{className:"w-3 h-3"}),w.jsx("span",{children:"Rover Start"})]}),w.jsxs("button",{onClick:()=>_("goal"),className:`px-2.5 py-1 rounded border flex items-center space-x-1 transition ${y==="goal"?"bg-cyan-950 text-cyan-300 border-cyan-700 font-bold ring-1 ring-cyan-500":"bg-mars-900 text-slate-400 border-mars-700 hover:border-mars-500"}`,children:[w.jsx(yv,{className:"w-3 h-3"}),w.jsx("span",{children:"Mission Goal"})]})]}),w.jsx("div",{className:"flex items-center space-x-1 bg-mars-950/80 rounded-lg p-0.5 border border-mars-700/50 text-[11px] font-mono",children:["split","2d","3d"].map(L=>w.jsxs("button",{onClick:()=>S(L),className:`px-2.5 py-1 rounded flex items-center space-x-1 transition ${v===L?"bg-mars-700 text-white font-bold":"text-slate-400 hover:text-slate-200"}`,children:[L==="split"?w.jsx(ov,{className:"w-3 h-3"}):L==="2d"?w.jsx(fv,{className:"w-3 h-3"}):w.jsx(Vm,{className:"w-3 h-3"}),w.jsx("span",{children:L==="split"?"Split":L.toUpperCase()})]},L))})]}),w.jsxs("div",{className:`grid gap-3 flex-1 ${v==="split"?"grid-cols-2":"grid-cols-1"}`,children:[(v==="split"||v==="2d")&&w.jsx("div",{className:"bg-mars-900 rounded-xl border border-mars-700/60 overflow-hidden flex flex-col min-h-[480px]",children:w.jsxs("div",{ref:P,onClick:O,onMouseMove:L=>{if(!P.current)return;const Z=P.current.getBoundingClientRect();I({x:Math.round((L.clientX-Z.left)/Z.width*512),y:Math.round((L.clientY-Z.top)/Z.height*512)})},onMouseLeave:()=>I(null),className:"relative flex-1 bg-black cursor-crosshair select-none flex items-center justify-center overflow-hidden",children:[H?w.jsxs("div",{className:"relative w-full h-full max-w-[600px] max-h-[600px] aspect-square mx-auto",children:[w.jsx("img",{src:H,alt:"Martian terrain layer",className:"w-full h-full object-contain pointer-events-none"},H),w.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[c.length>1&&w.jsx("polyline",{points:c.map(L=>`${k(L).x},${k(L).y}`).join(" "),fill:"none",stroke:"#10b981",strokeWidth:"0.8",strokeLinecap:"round",strokeLinejoin:"round"}),f&&(()=>{const L=k(f);return w.jsxs("g",{transform:`translate(${L.x},${L.y})`,children:[w.jsx("circle",{r:"2",fill:"#10b981",stroke:"#fff",strokeWidth:"0.5"}),w.jsx("circle",{r:"4",fill:"none",stroke:"#10b981",strokeWidth:"0.4",strokeDasharray:"1 1"}),w.jsx("text",{y:"-3",fontSize:"2.4",fill:"#10b981",textAnchor:"middle",fontWeight:"bold",children:"ROVER"})]})})(),h&&(()=>{const L=k(h);return w.jsxs("g",{transform:`translate(${L.x},${L.y})`,children:[w.jsx("circle",{r:"2",fill:"#00d2ff",stroke:"#fff",strokeWidth:"0.5"}),w.jsx("circle",{r:"4",fill:"none",stroke:"#00d2ff",strokeWidth:"0.4",strokeDasharray:"1.5 1.5"}),w.jsx("text",{y:"-3.5",fontSize:"2.4",fill:"#00d2ff",textAnchor:"middle",fontWeight:"bold",children:"GOAL"})]})})(),d.map(L=>{const Z=k(L.coords_pixel);return w.jsxs("g",{transform:`translate(${Z.x},${Z.y})`,children:[w.jsx("polygon",{points:"0,-2.8 2.8,1.8 -2.8,1.8",fill:"#f59e0b",stroke:"#fff",strokeWidth:"0.3"}),w.jsx("text",{y:"4.5",fontSize:"1.9",fill:"#f59e0b",textAnchor:"middle",children:L.id.split("-").pop()})]},L.id)})]})]}):w.jsxs("div",{className:"flex flex-col items-center space-y-2 text-slate-600",children:[w.jsx(cv,{className:"w-10 h-10"}),w.jsx("span",{className:"text-xs font-mono",children:"No layer available"})]}),w.jsxs("div",{className:"absolute bottom-2 left-2 bg-mars-950/90 backdrop-blur border border-mars-700/50 rounded px-2.5 py-1 text-[10px] font-mono text-slate-300 flex items-center space-x-3 pointer-events-none",children:[w.jsxs("span",{className:"flex items-center space-x-1",children:[w.jsx(lv,{className:"w-3 h-3 text-mars-400"}),w.jsxs("span",{children:["X:",(U==null?void 0:U.x)??"--"," Y:",(U==null?void 0:U.y)??"--"]})]}),w.jsxs("span",{className:"text-emerald-400",children:["S:[",f[0],",",f[1],"]"]}),w.jsxs("span",{className:"text-cyan-400",children:["G:[",h[0],",",h[1],"]"]})]}),w.jsx("div",{className:"absolute top-2 left-2 bg-mars-950/90 backdrop-blur border border-mars-700/50 rounded px-2 py-0.5 text-[10px] font-mono text-slate-300 pointer-events-none",children:((C=K.find(L=>L.key===E))==null?void 0:C.label)??E})]})}),(v==="split"||v==="3d")&&w.jsx("div",{className:"min-h-[480px]",children:x})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bd="170",Uv=0,Np=1,Fv=2,Sg=1,Mg=2,ki=3,Sr=0,Ln=1,zi=2,xr=0,Fs=1,Dp=2,Ip=3,Up=4,Ov=5,Xr=100,kv=101,zv=102,Bv=103,Hv=104,Vv=200,Gv=201,Wv=202,jv=203,Qu=204,Ju=205,Xv=206,qv=207,Yv=208,$v=209,Kv=210,Zv=211,Qv=212,Jv=213,ex=214,ed=0,td=1,nd=2,zs=3,id=4,rd=5,sd=6,ad=7,Eg=0,tx=1,nx=2,yr=0,ix=1,rx=2,sx=3,ax=4,ox=5,lx=6,cx=7,wg=300,Bs=301,Hs=302,od=303,ld=304,Ll=306,cd=1e3,Bi=1001,ud=1002,li=1003,ux=1004,Zo=1005,_i=1006,xu=1007,Yr=1008,Wi=1009,Tg=1010,Ag=1011,Fa=1012,Hd=1013,$r=1014,Hi=1015,ka=1016,Vd=1017,Gd=1018,Vs=1020,Cg=35902,bg=1021,Rg=1022,oi=1023,Pg=1024,Lg=1025,Os=1026,Gs=1027,Ng=1028,Wd=1029,Dg=1030,jd=1031,Xd=1033,Sl=33776,Ml=33777,El=33778,wl=33779,dd=35840,fd=35841,hd=35842,pd=35843,md=36196,gd=37492,_d=37496,vd=37808,xd=37809,yd=37810,Sd=37811,Md=37812,Ed=37813,wd=37814,Td=37815,Ad=37816,Cd=37817,bd=37818,Rd=37819,Pd=37820,Ld=37821,Tl=36492,Nd=36494,Dd=36495,Ig=36283,Id=36284,Ud=36285,Fd=36286,dx=3200,fx=3201,Ug=0,hx=1,vr="",qn="srgb",Xs="srgb-linear",Nl="linear",Lt="srgb",Ss=7680,Fp=519,px=512,mx=513,gx=514,Fg=515,_x=516,vx=517,xx=518,yx=519,Op=35044,kp="300 es",Vi=2e3,bl=2001;class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=Math.PI/180,Od=180/Math.PI;function za(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]).toLowerCase()}function Pn(s,e,n){return Math.max(e,Math.min(n,s))}function Sx(s,e){return(s%e+e)%e}function Su(s,e,n){return(1-n)*s+n*e}function ba(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,n=0){Ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*o+e.x,this.y=c*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,n,r,o,c,d,f,h,m){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,h,m)}set(e,n,r,o,c,d,f,h,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=n,g[4]=c,g[5]=h,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[3],h=r[6],m=r[1],g=r[4],x=r[7],v=r[2],S=r[5],E=r[8],T=o[0],y=o[3],_=o[6],U=o[1],I=o[4],P=o[7],K=o[2],H=o[5],O=o[8];return c[0]=d*T+f*U+h*K,c[3]=d*y+f*I+h*H,c[6]=d*_+f*P+h*O,c[1]=m*T+g*U+x*K,c[4]=m*y+g*I+x*H,c[7]=m*_+g*P+x*O,c[2]=v*T+S*U+E*K,c[5]=v*y+S*I+E*H,c[8]=v*_+S*P+E*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],h=e[6],m=e[7],g=e[8];return n*d*g-n*f*m-r*c*g+r*f*h+o*c*m-o*d*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],h=e[6],m=e[7],g=e[8],x=g*d-f*m,v=f*h-g*c,S=m*c-d*h,E=n*x+r*v+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=x*T,e[1]=(o*m-g*r)*T,e[2]=(f*r-o*d)*T,e[3]=v*T,e[4]=(g*n-o*h)*T,e[5]=(o*c-f*n)*T,e[6]=S*T,e[7]=(r*h-m*n)*T,e[8]=(d*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,d,f){const h=Math.cos(c),m=Math.sin(c);return this.set(r*h,r*m,-r*(h*d+m*f)+d+e,-o*m,o*h,-o*(-m*d+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Mu.makeScale(e,n)),this}rotate(e){return this.premultiply(Mu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mu=new ct;function Og(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Oa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Mx(){const s=Oa("canvas");return s.style.display="block",s}const zp={};function Ia(s){s in zp||(zp[s]=!0,console.warn(s))}function Ex(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function wx(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Tx(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Lt&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Lt&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vr?Nl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Bp=[.64,.33,.3,.6,.15,.06],Hp=[.2126,.7152,.0722],Vp=[.3127,.329],Gp=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wp=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[Xs]:{primaries:Bp,whitePoint:Vp,transfer:Nl,toXYZ:Gp,fromXYZ:Wp,luminanceCoefficients:Hp,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:Bp,whitePoint:Vp,transfer:Lt,toXYZ:Gp,fromXYZ:Wp,luminanceCoefficients:Hp,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}});let Ms;class Ax{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=Oa("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Oa("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=Gi(c[d]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Gi(n[r]/255)*255):n[r]=Gi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cx=0;class kg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=za(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?c.push(Eu(o[d].image)):c.push(Eu(o[d]))}else c=Eu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Eu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ax.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bx=0;class yn extends qs{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,r=Bi,o=Bi,c=_i,d=Yr,f=oi,h=Wi,m=yn.DEFAULT_ANISOTROPY,g=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=za(),this.name="",this.source=new kg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cd:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cd:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=wg;yn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,r=0,o=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*o+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*o+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*o+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*o+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const h=e.elements,m=h[0],g=h[4],x=h[8],v=h[1],S=h[5],E=h[9],T=h[2],y=h[6],_=h[10];if(Math.abs(g-v)<.01&&Math.abs(x-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+T)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const I=(m+1)/2,P=(S+1)/2,K=(_+1)/2,H=(g+v)/4,O=(x+T)/4,k=(E+y)/4;return I>P&&I>K?I<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(I),o=H/r,c=O/r):P>K?P<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(P),r=H/o,c=k/o):K<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(K),r=O/c,o=k/c),this.set(r,o,c,n),this}let U=Math.sqrt((y-E)*(y-E)+(x-T)*(x-T)+(v-g)*(v-g));return Math.abs(U)<.001&&(U=1),this.x=(y-E)/U,this.y=(x-T)/U,this.z=(v-g)/U,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rx extends qs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new yn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new kg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends Rx{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class zg extends yn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=li,this.minFilter=li,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Px extends yn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=li,this.minFilter=li,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ba{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,d,f){let h=r[o+0],m=r[o+1],g=r[o+2],x=r[o+3];const v=c[d+0],S=c[d+1],E=c[d+2],T=c[d+3];if(f===0){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=x;return}if(f===1){e[n+0]=v,e[n+1]=S,e[n+2]=E,e[n+3]=T;return}if(x!==T||h!==v||m!==S||g!==E){let y=1-f;const _=h*v+m*S+g*E+x*T,U=_>=0?1:-1,I=1-_*_;if(I>Number.EPSILON){const K=Math.sqrt(I),H=Math.atan2(K,_*U);y=Math.sin(y*H)/K,f=Math.sin(f*H)/K}const P=f*U;if(h=h*y+v*P,m=m*y+S*P,g=g*y+E*P,x=x*y+T*P,y===1-f){const K=1/Math.sqrt(h*h+m*m+g*g+x*x);h*=K,m*=K,g*=K,x*=K}}e[n]=h,e[n+1]=m,e[n+2]=g,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,o,c,d){const f=r[o],h=r[o+1],m=r[o+2],g=r[o+3],x=c[d],v=c[d+1],S=c[d+2],E=c[d+3];return e[n]=f*E+g*x+h*S-m*v,e[n+1]=h*E+g*v+m*x-f*S,e[n+2]=m*E+g*S+f*v-h*x,e[n+3]=g*E-f*x-h*v-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,d=e._order,f=Math.cos,h=Math.sin,m=f(r/2),g=f(o/2),x=f(c/2),v=h(r/2),S=h(o/2),E=h(c/2);switch(d){case"XYZ":this._x=v*g*x+m*S*E,this._y=m*S*x-v*g*E,this._z=m*g*E+v*S*x,this._w=m*g*x-v*S*E;break;case"YXZ":this._x=v*g*x+m*S*E,this._y=m*S*x-v*g*E,this._z=m*g*E-v*S*x,this._w=m*g*x+v*S*E;break;case"ZXY":this._x=v*g*x-m*S*E,this._y=m*S*x+v*g*E,this._z=m*g*E+v*S*x,this._w=m*g*x-v*S*E;break;case"ZYX":this._x=v*g*x-m*S*E,this._y=m*S*x+v*g*E,this._z=m*g*E-v*S*x,this._w=m*g*x+v*S*E;break;case"YZX":this._x=v*g*x+m*S*E,this._y=m*S*x+v*g*E,this._z=m*g*E-v*S*x,this._w=m*g*x-v*S*E;break;case"XZY":this._x=v*g*x-m*S*E,this._y=m*S*x-v*g*E,this._z=m*g*E+v*S*x,this._w=m*g*x+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],d=n[1],f=n[5],h=n[9],m=n[2],g=n[6],x=n[10],v=r+f+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-h)*S,this._y=(c-m)*S,this._z=(d-o)*S}else if(r>f&&r>x){const S=2*Math.sqrt(1+r-f-x);this._w=(g-h)/S,this._x=.25*S,this._y=(o+d)/S,this._z=(c+m)/S}else if(f>x){const S=2*Math.sqrt(1+f-r-x);this._w=(c-m)/S,this._x=(o+d)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+x-r-f);this._w=(d-o)/S,this._x=(c+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,d=e._w,f=n._x,h=n._y,m=n._z,g=n._w;return this._x=r*g+d*f+o*m-c*h,this._y=o*g+d*h+c*f-r*m,this._z=c*g+d*m+r*h-o*f,this._w=d*g-r*f-o*h-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,d=this._w;let f=d*e._w+r*e._x+o*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=o,this._z=c,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,f),x=Math.sin((1-n)*g)/m,v=Math.sin(n*g)/m;return this._w=d*x+this._w*v,this._x=r*x+this._x*v,this._y=o*x+this._y*v,this._z=c*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(jp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(jp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,d=e.y,f=e.z,h=e.w,m=2*(d*o-f*r),g=2*(f*n-c*o),x=2*(c*r-d*n);return this.x=n+h*m+d*x-f*g,this.y=r+h*g+f*m-c*x,this.z=o+h*x+c*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,d=n.x,f=n.y,h=n.z;return this.x=o*h-c*f,this.y=c*d-r*h,this.z=r*f-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wu=new ne,jp=new Ba;class Ha{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ii):ii.fromBufferAttribute(c,d),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Qo.copy(r.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),Jo.subVectors(this.max,Ra),Es.subVectors(e.a,Ra),ws.subVectors(e.b,Ra),Ts.subVectors(e.c,Ra),fr.subVectors(ws,Es),hr.subVectors(Ts,ws),kr.subVectors(Es,Ts);let n=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-kr.z,kr.y,fr.z,0,-fr.x,hr.z,0,-hr.x,kr.z,0,-kr.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-kr.y,kr.x,0];return!Tu(n,Es,ws,Ts,Jo)||(n=[1,0,0,0,1,0,0,0,1],!Tu(n,Es,ws,Ts,Jo))?!1:(el.crossVectors(fr,hr),n=[el.x,el.y,el.z],Tu(n,Es,ws,Ts,Jo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ii=new ne,Qo=new Ha,Es=new ne,ws=new ne,Ts=new ne,fr=new ne,hr=new ne,kr=new ne,Ra=new ne,Jo=new ne,el=new ne,zr=new ne;function Tu(s,e,n,r,o){for(let c=0,d=s.length-3;c<=d;c+=3){zr.fromArray(s,c);const f=o.x*Math.abs(zr.x)+o.y*Math.abs(zr.y)+o.z*Math.abs(zr.z),h=e.dot(zr),m=n.dot(zr),g=r.dot(zr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>f)return!1}return!0}const Lx=new Ha,Pa=new ne,Au=new ne;class Dl{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Lx.setFromPoints(e).getCenter(r);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const n=Pa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Pa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(Au)),this.expandByPoint(Pa.copy(e.center).sub(Au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new ne,Cu=new ne,tl=new ne,pr=new ne,bu=new ne,nl=new ne,Ru=new ne;class Bg{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Cu.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(Cu);const c=e.distanceTo(n)*.5,d=-this.direction.dot(tl),f=pr.dot(this.direction),h=-pr.dot(tl),m=pr.lengthSq(),g=Math.abs(1-d*d);let x,v,S,E;if(g>0)if(x=d*h-f,v=d*f-h,E=c*g,x>=0)if(v>=-E)if(v<=E){const T=1/g;x*=T,v*=T,S=x*(x+d*v+2*f)+v*(d*x+v+2*h)+m}else v=c,x=Math.max(0,-(d*v+f)),S=-x*x+v*(v+2*h)+m;else v=-c,x=Math.max(0,-(d*v+f)),S=-x*x+v*(v+2*h)+m;else v<=-E?(x=Math.max(0,-(-d*c+f)),v=x>0?-c:Math.min(Math.max(-c,-h),c),S=-x*x+v*(v+2*h)+m):v<=E?(x=0,v=Math.min(Math.max(-c,-h),c),S=v*(v+2*h)+m):(x=Math.max(0,-(d*c+f)),v=x>0?c:Math.min(Math.max(-c,-h),c),S=-x*x+v*(v+2*h)+m);else v=d>0?-c:c,x=Math.max(0,-(d*v+f)),S=-x*x+v*(v+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Cu).addScaledVector(tl,v),S}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),o=Ii.dot(Ii)-r*r,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),f=r-d,h=r+d;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,d,f,h;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,o=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,o=(e.min.x-v.x)*m),g>=0?(c=(e.min.y-v.y)*g,d=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,d=(e.min.y-v.y)*g),r>d||c>o||((c>r||isNaN(r))&&(r=c),(d<o||isNaN(o))&&(o=d),x>=0?(f=(e.min.z-v.z)*x,h=(e.max.z-v.z)*x):(f=(e.max.z-v.z)*x,h=(e.min.z-v.z)*x),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,o,c){bu.subVectors(n,e),nl.subVectors(r,e),Ru.crossVectors(bu,nl);let d=this.direction.dot(Ru),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;pr.subVectors(this.origin,e);const h=f*this.direction.dot(nl.crossVectors(pr,nl));if(h<0)return null;const m=f*this.direction.dot(bu.cross(pr));if(m<0||h+m>d)return null;const g=-f*pr.dot(Ru);return g<0?null:this.at(g/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,o,c,d,f,h,m,g,x,v,S,E,T,y){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,h,m,g,x,v,S,E,T,y)}set(e,n,r,o,c,d,f,h,m,g,x,v,S,E,T,y){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=c,_[5]=d,_[9]=f,_[13]=h,_[2]=m,_[6]=g,_[10]=x,_[14]=v,_[3]=S,_[7]=E,_[11]=T,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/As.setFromMatrixColumn(e,0).length(),c=1/As.setFromMatrixColumn(e,1).length(),d=1/As.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),h=Math.cos(o),m=Math.sin(o),g=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const v=d*g,S=d*x,E=f*g,T=f*x;n[0]=h*g,n[4]=-h*x,n[8]=m,n[1]=S+E*m,n[5]=v-T*m,n[9]=-f*h,n[2]=T-v*m,n[6]=E+S*m,n[10]=d*h}else if(e.order==="YXZ"){const v=h*g,S=h*x,E=m*g,T=m*x;n[0]=v+T*f,n[4]=E*f-S,n[8]=d*m,n[1]=d*x,n[5]=d*g,n[9]=-f,n[2]=S*f-E,n[6]=T+v*f,n[10]=d*h}else if(e.order==="ZXY"){const v=h*g,S=h*x,E=m*g,T=m*x;n[0]=v-T*f,n[4]=-d*x,n[8]=E+S*f,n[1]=S+E*f,n[5]=d*g,n[9]=T-v*f,n[2]=-d*m,n[6]=f,n[10]=d*h}else if(e.order==="ZYX"){const v=d*g,S=d*x,E=f*g,T=f*x;n[0]=h*g,n[4]=E*m-S,n[8]=v*m+T,n[1]=h*x,n[5]=T*m+v,n[9]=S*m-E,n[2]=-m,n[6]=f*h,n[10]=d*h}else if(e.order==="YZX"){const v=d*h,S=d*m,E=f*h,T=f*m;n[0]=h*g,n[4]=T-v*x,n[8]=E*x+S,n[1]=x,n[5]=d*g,n[9]=-f*g,n[2]=-m*g,n[6]=S*x+E,n[10]=v-T*x}else if(e.order==="XZY"){const v=d*h,S=d*m,E=f*h,T=f*m;n[0]=h*g,n[4]=-x,n[8]=m*g,n[1]=v*x+T,n[5]=d*g,n[9]=S*x-E,n[2]=E*x-S,n[6]=f*g,n[10]=T*x+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nx,e,Dx)}lookAt(e,n,r){const o=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),mr.crossVectors(r,Fn),mr.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),mr.crossVectors(r,Fn)),mr.normalize(),il.crossVectors(Fn,mr),o[0]=mr.x,o[4]=il.x,o[8]=Fn.x,o[1]=mr.y,o[5]=il.y,o[9]=Fn.y,o[2]=mr.z,o[6]=il.z,o[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[4],h=r[8],m=r[12],g=r[1],x=r[5],v=r[9],S=r[13],E=r[2],T=r[6],y=r[10],_=r[14],U=r[3],I=r[7],P=r[11],K=r[15],H=o[0],O=o[4],k=o[8],R=o[12],C=o[1],L=o[5],Z=o[9],q=o[13],ae=o[2],de=o[6],oe=o[10],le=o[14],B=o[3],ue=o[7],te=o[11],F=o[15];return c[0]=d*H+f*C+h*ae+m*B,c[4]=d*O+f*L+h*de+m*ue,c[8]=d*k+f*Z+h*oe+m*te,c[12]=d*R+f*q+h*le+m*F,c[1]=g*H+x*C+v*ae+S*B,c[5]=g*O+x*L+v*de+S*ue,c[9]=g*k+x*Z+v*oe+S*te,c[13]=g*R+x*q+v*le+S*F,c[2]=E*H+T*C+y*ae+_*B,c[6]=E*O+T*L+y*de+_*ue,c[10]=E*k+T*Z+y*oe+_*te,c[14]=E*R+T*q+y*le+_*F,c[3]=U*H+I*C+P*ae+K*B,c[7]=U*O+I*L+P*de+K*ue,c[11]=U*k+I*Z+P*oe+K*te,c[15]=U*R+I*q+P*le+K*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],d=e[1],f=e[5],h=e[9],m=e[13],g=e[2],x=e[6],v=e[10],S=e[14],E=e[3],T=e[7],y=e[11],_=e[15];return E*(+c*h*x-o*m*x-c*f*v+r*m*v+o*f*S-r*h*S)+T*(+n*h*S-n*m*v+c*d*v-o*d*S+o*m*g-c*h*g)+y*(+n*m*x-n*f*S-c*d*x+r*d*S+c*f*g-r*m*g)+_*(-o*f*g-n*h*x+n*f*v+o*d*x-r*d*v+r*h*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],h=e[6],m=e[7],g=e[8],x=e[9],v=e[10],S=e[11],E=e[12],T=e[13],y=e[14],_=e[15],U=x*y*m-T*v*m+T*h*S-f*y*S-x*h*_+f*v*_,I=E*v*m-g*y*m-E*h*S+d*y*S+g*h*_-d*v*_,P=g*T*m-E*x*m+E*f*S-d*T*S-g*f*_+d*x*_,K=E*x*h-g*T*h-E*f*v+d*T*v+g*f*y-d*x*y,H=n*U+r*I+o*P+c*K;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/H;return e[0]=U*O,e[1]=(T*v*c-x*y*c-T*o*S+r*y*S+x*o*_-r*v*_)*O,e[2]=(f*y*c-T*h*c+T*o*m-r*y*m-f*o*_+r*h*_)*O,e[3]=(x*h*c-f*v*c-x*o*m+r*v*m+f*o*S-r*h*S)*O,e[4]=I*O,e[5]=(g*y*c-E*v*c+E*o*S-n*y*S-g*o*_+n*v*_)*O,e[6]=(E*h*c-d*y*c-E*o*m+n*y*m+d*o*_-n*h*_)*O,e[7]=(d*v*c-g*h*c+g*o*m-n*v*m-d*o*S+n*h*S)*O,e[8]=P*O,e[9]=(E*x*c-g*T*c-E*r*S+n*T*S+g*r*_-n*x*_)*O,e[10]=(d*T*c-E*f*c+E*r*m-n*T*m-d*r*_+n*f*_)*O,e[11]=(g*f*c-d*x*c-g*r*m+n*x*m+d*r*S-n*f*S)*O,e[12]=K*O,e[13]=(g*T*o-E*x*o+E*r*v-n*T*v-g*r*y+n*x*y)*O,e[14]=(E*f*o-d*T*o-E*r*h+n*T*h+d*r*y-n*f*y)*O,e[15]=(d*x*o-g*f*o+g*r*h-n*x*h-d*r*v+n*f*v)*O,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,d=e.x,f=e.y,h=e.z,m=c*d,g=c*f;return this.set(m*d+r,m*f-o*h,m*h+o*f,0,m*f+o*h,g*f+r,g*h-o*d,0,m*h-o*f,g*h+o*d,c*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,d){return this.set(1,r,c,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,d=n._y,f=n._z,h=n._w,m=c+c,g=d+d,x=f+f,v=c*m,S=c*g,E=c*x,T=d*g,y=d*x,_=f*x,U=h*m,I=h*g,P=h*x,K=r.x,H=r.y,O=r.z;return o[0]=(1-(T+_))*K,o[1]=(S+P)*K,o[2]=(E-I)*K,o[3]=0,o[4]=(S-P)*H,o[5]=(1-(v+_))*H,o[6]=(y+U)*H,o[7]=0,o[8]=(E+I)*O,o[9]=(y-U)*O,o[10]=(1-(v+T))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=As.set(o[0],o[1],o[2]).length();const d=As.set(o[4],o[5],o[6]).length(),f=As.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],ri.copy(this);const m=1/c,g=1/d,x=1/f;return ri.elements[0]*=m,ri.elements[1]*=m,ri.elements[2]*=m,ri.elements[4]*=g,ri.elements[5]*=g,ri.elements[6]*=g,ri.elements[8]*=x,ri.elements[9]*=x,ri.elements[10]*=x,n.setFromRotationMatrix(ri),r.x=c,r.y=d,r.z=f,this}makePerspective(e,n,r,o,c,d,f=Vi){const h=this.elements,m=2*c/(n-e),g=2*c/(r-o),x=(n+e)/(n-e),v=(r+o)/(r-o);let S,E;if(f===Vi)S=-(d+c)/(d-c),E=-2*d*c/(d-c);else if(f===bl)S=-d/(d-c),E=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,c,d,f=Vi){const h=this.elements,m=1/(n-e),g=1/(r-o),x=1/(d-c),v=(n+e)*m,S=(r+o)*g;let E,T;if(f===Vi)E=(d+c)*x,T=-2*x;else if(f===bl)E=c*x,T=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=T,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const As=new ne,ri=new Bt,Nx=new ne(0,0,0),Dx=new ne(1,1,1),mr=new ne,il=new ne,Fn=new ne,Xp=new Bt,qp=new Ba;class yi{constructor(e=0,n=0,r=0,o=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],d=o[4],f=o[8],h=o[1],m=o[5],g=o[9],x=o[2],v=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-Pn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qp.setFromEuler(this),this.setFromQuaternion(qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class Hg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ix=0;const Yp=new ne,Cs=new Ba,Ui=new Bt,rl=new ne,La=new ne,Ux=new ne,Fx=new Ba,$p=new ne(1,0,0),Kp=new ne(0,1,0),Zp=new ne(0,0,1),Qp={type:"added"},Ox={type:"removed"},bs={type:"childadded",child:null},Pu={type:"childremoved",child:null};class sn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new ne,n=new yi,r=new Ba,o=new ne(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ct}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis($p,e)}rotateY(e){return this.rotateOnAxis(Kp,e)}rotateZ(e){return this.rotateOnAxis(Zp,e)}translateOnAxis(e,n){return Yp.copy(e).applyQuaternion(this.quaternion),this.position.add(Yp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($p,e)}translateY(e){return this.translateOnAxis(Kp,e)}translateZ(e){return this.translateOnAxis(Zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?rl.copy(e):rl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(La,rl,this.up):Ui.lookAt(rl,La,this.up),this.quaternion.setFromRotationMatrix(Ui),o&&(Ui.extractRotation(o.matrixWorld),Cs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qp),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ox),Pu.child=e,this.dispatchEvent(Pu),Pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qp),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,Ux),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,Fx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const x=h[m];c(e.shapes,x)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(c(e.materials,this.material[h]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(c(e.animations,h))}}if(n){const f=d(e.geometries),h=d(e.materials),m=d(e.textures),g=d(e.images),x=d(e.shapes),v=d(e.skeletons),S=d(e.animations),E=d(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function d(f){const h=[];for(const m in f){const g=f[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}sn.DEFAULT_UP=new ne(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new ne,Fi=new ne,Lu=new ne,Oi=new ne,Rs=new ne,Ps=new ne,Jp=new ne,Nu=new ne,Du=new ne,Iu=new ne,Uu=new Vt,Fu=new Vt,Ou=new Vt;class ai{constructor(e=new ne,n=new ne,r=new ne){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),si.subVectors(e,n),o.cross(si);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){si.subVectors(o,n),Fi.subVectors(r,n),Lu.subVectors(e,n);const d=si.dot(si),f=si.dot(Fi),h=si.dot(Lu),m=Fi.dot(Fi),g=Fi.dot(Lu),x=d*m-f*f;if(x===0)return c.set(0,0,0),null;const v=1/x,S=(m*h-f*g)*v,E=(d*g-f*h)*v;return c.set(1-S-E,E,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,r,o,c,d,f,h){return this.getBarycoord(e,n,r,o,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Oi.x),h.addScaledVector(d,Oi.y),h.addScaledVector(f,Oi.z),h)}static getInterpolatedAttribute(e,n,r,o,c,d){return Uu.setScalar(0),Fu.setScalar(0),Ou.setScalar(0),Uu.fromBufferAttribute(e,n),Fu.fromBufferAttribute(e,r),Ou.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(Uu,c.x),d.addScaledVector(Fu,c.y),d.addScaledVector(Ou,c.z),d}static isFrontFacing(e,n,r,o){return si.subVectors(r,n),Fi.subVectors(e,n),si.cross(Fi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),si.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return ai.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let d,f;Rs.subVectors(o,r),Ps.subVectors(c,r),Nu.subVectors(e,r);const h=Rs.dot(Nu),m=Ps.dot(Nu);if(h<=0&&m<=0)return n.copy(r);Du.subVectors(e,o);const g=Rs.dot(Du),x=Ps.dot(Du);if(g>=0&&x<=g)return n.copy(o);const v=h*x-g*m;if(v<=0&&h>=0&&g<=0)return d=h/(h-g),n.copy(r).addScaledVector(Rs,d);Iu.subVectors(e,c);const S=Rs.dot(Iu),E=Ps.dot(Iu);if(E>=0&&S<=E)return n.copy(c);const T=S*m-h*E;if(T<=0&&m>=0&&E<=0)return f=m/(m-E),n.copy(r).addScaledVector(Ps,f);const y=g*E-S*x;if(y<=0&&x-g>=0&&S-E>=0)return Jp.subVectors(c,o),f=(x-g)/(x-g+(S-E)),n.copy(o).addScaledVector(Jp,f);const _=1/(y+T+v);return d=T*_,f=v*_,n.copy(r).addScaledVector(Rs,d).addScaledVector(Ps,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},sl={h:0,s:0,l:0};function ku(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class vt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=St.workingColorSpace){return this.r=e,this.g=n,this.b=r,St.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=St.workingColorSpace){if(e=Sx(e,1),n=Pn(n,0,1),r=Pn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=ku(d,c,e+1/3),this.g=ku(d,c,e),this.b=ku(d,c,e-1/3)}return St.toWorkingColorSpace(this,o),this}setStyle(e,n=qn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const r=Vg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return St.fromWorkingColorSpace(hn.copy(this),e),Math.round(Pn(hn.r*255,0,255))*65536+Math.round(Pn(hn.g*255,0,255))*256+Math.round(Pn(hn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=St.workingColorSpace){St.fromWorkingColorSpace(hn.copy(this),n);const r=hn.r,o=hn.g,c=hn.b,d=Math.max(r,o,c),f=Math.min(r,o,c);let h,m;const g=(f+d)/2;if(f===d)h=0,m=0;else{const x=d-f;switch(m=g<=.5?x/(d+f):x/(2-d-f),d){case r:h=(o-c)/x+(o<c?6:0);break;case o:h=(c-r)/x+2;break;case c:h=(r-o)/x+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,n=St.workingColorSpace){return St.fromWorkingColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=qn){St.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,r=hn.g,o=hn.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(sl);const r=Su(gr.h,sl.h,n),o=Su(gr.s,sl.s,n),c=Su(gr.l,sl.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new vt;vt.NAMES=Vg;let kx=0;class Ys extends qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=za(),this.name="",this.blending=Fs,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qu,this.blendDst=Ju,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(r.blending=this.blending),this.side!==Sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qu&&(r.blendSrc=this.blendSrc),this.blendDst!==Ju&&(r.blendDst=this.blendDst),this.blendEquation!==Xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const d=[];for(const f in c){const h=c[f];delete h.metadata,d.push(h)}return d}if(n){const c=o(e.textures),d=o(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gg extends Ys{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Eg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new ne,al=new Ct;class xi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Op,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)al.fromBufferAttribute(this,n),al.applyMatrix3(e),this.setXY(n,al.x,al.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix3(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ba(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Rn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ba(n,this.array)),n}setX(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ba(n,this.array)),n}setY(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ba(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ba(n,this.array)),n}setW(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array),o=Rn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array),o=Rn(o,this.array),c=Rn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Op&&(e.usage=this.usage),e}}class Wg extends xi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class jg extends xi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ci extends xi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let zx=0;const Xn=new Bt,zu=new sn,Ls=new ne,On=new Ha,Na=new Ha,tn=new ne;class Si extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Og(e)?jg:Wg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ct().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,r){return Xn.makeTranslation(e,n,r),this.applyMatrix4(Xn),this}scale(e,n,r){return Xn.makeScale(e,n,r),this.applyMatrix4(Xn),this}lookAt(e){return zu.lookAt(e),zu.updateMatrix(),this.applyMatrix4(zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ci(r,3))}else{for(let r=0,o=n.count;r<o;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];On.setFromBufferAttribute(c),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const f=n[c];Na.setFromBufferAttribute(f),this.morphTargetsRelative?(tn.addVectors(On.min,Na.min),On.expandByPoint(tn),tn.addVectors(On.max,Na.max),On.expandByPoint(tn)):(On.expandByPoint(Na.min),On.expandByPoint(Na.max))}On.getCenter(r);let o=0;for(let c=0,d=e.count;c<d;c++)tn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(tn));if(n)for(let c=0,d=n.length;c<d;c++){const f=n[c],h=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)tn.fromBufferAttribute(f,m),h&&(Ls.fromBufferAttribute(e,m),tn.add(Ls)),o=Math.max(o,r.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],h=[];for(let k=0;k<r.count;k++)f[k]=new ne,h[k]=new ne;const m=new ne,g=new ne,x=new ne,v=new Ct,S=new Ct,E=new Ct,T=new ne,y=new ne;function _(k,R,C){m.fromBufferAttribute(r,k),g.fromBufferAttribute(r,R),x.fromBufferAttribute(r,C),v.fromBufferAttribute(c,k),S.fromBufferAttribute(c,R),E.fromBufferAttribute(c,C),g.sub(m),x.sub(m),S.sub(v),E.sub(v);const L=1/(S.x*E.y-E.x*S.y);isFinite(L)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(L),y.copy(x).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(L),f[k].add(T),f[R].add(T),f[C].add(T),h[k].add(y),h[R].add(y),h[C].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let k=0,R=U.length;k<R;++k){const C=U[k],L=C.start,Z=C.count;for(let q=L,ae=L+Z;q<ae;q+=3)_(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const I=new ne,P=new ne,K=new ne,H=new ne;function O(k){K.fromBufferAttribute(o,k),H.copy(K);const R=f[k];I.copy(R),I.sub(K.multiplyScalar(K.dot(R))).normalize(),P.crossVectors(H,R);const L=P.dot(h[k])<0?-1:1;d.setXYZW(k,I.x,I.y,I.z,L)}for(let k=0,R=U.length;k<R;++k){const C=U[k],L=C.start,Z=C.count;for(let q=L,ae=L+Z;q<ae;q+=3)O(e.getX(q+0)),O(e.getX(q+1)),O(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new ne,c=new ne,d=new ne,f=new ne,h=new ne,m=new ne,g=new ne,x=new ne;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),T=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),d.fromBufferAttribute(n,y),g.subVectors(d,c),x.subVectors(o,c),g.cross(x),f.fromBufferAttribute(r,E),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),f.add(g),h.add(g),m.add(g),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,S=n.count;v<S;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),d.fromBufferAttribute(n,v+2),g.subVectors(d,c),x.subVectors(o,c),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(f,h){const m=f.array,g=f.itemSize,x=f.normalized,v=new m.constructor(h.length*g);let S=0,E=0;for(let T=0,y=h.length;T<y;T++){f.isInterleavedBufferAttribute?S=h[T]*f.data.stride+f.offset:S=h[T]*g;for(let _=0;_<g;_++)v[E++]=m[S++]}return new xi(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Si,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],m=e(h,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const h=[],m=c[f];for(let g=0,x=m.length;g<x;g++){const v=m[g],S=e(v,r);h.push(S)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,h=d.length;f<h;f++){const m=d[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let x=0,v=m.length;x<v;x++){const S=m[x];g.push(S.toJSON(e.data))}g.length>0&&(o[h]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(n))}const c=e.morphAttributes;for(const m in c){const g=[],x=c[m];for(let v=0,S=x.length;v<S;v++)g.push(x[v].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const em=new Bt,Br=new Bg,ol=new Dl,tm=new ne,ll=new ne,cl=new ne,ul=new ne,Bu=new ne,dl=new ne,nm=new ne,fl=new ne;class vi extends sn{constructor(e=new Si,n=new Gg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){dl.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const g=f[h],x=c[h];g!==0&&(Bu.fromBufferAttribute(x,e),d?dl.addScaledVector(Bu,g):dl.addScaledVector(Bu.sub(n),g))}n.add(dl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ol.copy(r.boundingSphere),ol.applyMatrix4(c),Br.copy(e.ray).recast(e.near),!(ol.containsPoint(Br.origin)===!1&&(Br.intersectSphere(ol,tm)===null||Br.origin.distanceToSquared(tm)>(e.far-e.near)**2))&&(em.copy(c).invert(),Br.copy(e.ray).applyMatrix4(em),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,r){let o;const c=this.geometry,d=this.material,f=c.index,h=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,v=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(d))for(let E=0,T=v.length;E<T;E++){const y=v[E],_=d[y.materialIndex],U=Math.max(y.start,S.start),I=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let P=U,K=I;P<K;P+=3){const H=f.getX(P),O=f.getX(P+1),k=f.getX(P+2);o=hl(this,_,e,r,m,g,x,H,O,k),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let y=E,_=T;y<_;y+=3){const U=f.getX(y),I=f.getX(y+1),P=f.getX(y+2);o=hl(this,d,e,r,m,g,x,U,I,P),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(d))for(let E=0,T=v.length;E<T;E++){const y=v[E],_=d[y.materialIndex],U=Math.max(y.start,S.start),I=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let P=U,K=I;P<K;P+=3){const H=P,O=P+1,k=P+2;o=hl(this,_,e,r,m,g,x,H,O,k),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let y=E,_=T;y<_;y+=3){const U=y,I=y+1,P=y+2;o=hl(this,d,e,r,m,g,x,U,I,P),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function Bx(s,e,n,r,o,c,d,f){let h;if(e.side===Ln?h=r.intersectTriangle(d,c,o,!0,f):h=r.intersectTriangle(o,c,d,e.side===Sr,f),h===null)return null;fl.copy(f),fl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(fl);return m<n.near||m>n.far?null:{distance:m,point:fl.clone(),object:s}}function hl(s,e,n,r,o,c,d,f,h,m){s.getVertexPosition(f,ll),s.getVertexPosition(h,cl),s.getVertexPosition(m,ul);const g=Bx(s,e,n,r,ll,cl,ul,nm);if(g){const x=new ne;ai.getBarycoord(nm,ll,cl,ul,x),o&&(g.uv=ai.getInterpolatedAttribute(o,f,h,m,x,new Ct)),c&&(g.uv1=ai.getInterpolatedAttribute(c,f,h,m,x,new Ct)),d&&(g.normal=ai.getInterpolatedAttribute(d,f,h,m,x,new ne),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:h,c:m,normal:new ne,materialIndex:0};ai.getNormal(ll,cl,ul,v.normal),g.face=v,g.barycoord=x}return g}class Va extends Si{constructor(e=1,n=1,r=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:d};const f=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const h=[],m=[],g=[],x=[];let v=0,S=0;E("z","y","x",-1,-1,r,n,e,d,c,0),E("z","y","x",1,-1,r,n,-e,d,c,1),E("x","z","y",1,1,e,r,n,o,d,2),E("x","z","y",1,-1,e,r,-n,o,d,3),E("x","y","z",1,-1,e,n,r,o,c,4),E("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(h),this.setAttribute("position",new ci(m,3)),this.setAttribute("normal",new ci(g,3)),this.setAttribute("uv",new ci(x,2));function E(T,y,_,U,I,P,K,H,O,k,R){const C=P/O,L=K/k,Z=P/2,q=K/2,ae=H/2,de=O+1,oe=k+1;let le=0,B=0;const ue=new ne;for(let te=0;te<oe;te++){const F=te*L-q;for(let J=0;J<de;J++){const Le=J*C-Z;ue[T]=Le*U,ue[y]=F*I,ue[_]=ae,m.push(ue.x,ue.y,ue.z),ue[T]=0,ue[y]=0,ue[_]=H>0?1:-1,g.push(ue.x,ue.y,ue.z),x.push(J/O),x.push(1-te/k),le+=1}}for(let te=0;te<k;te++)for(let F=0;F<O;F++){const J=v+F+de*te,Le=v+F+de*(te+1),Q=v+(F+1)+de*(te+1),fe=v+(F+1)+de*te;h.push(J,Le,fe),h.push(Le,Q,fe),B+=6}f.addGroup(S,B,R),S+=B,v+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function xn(s){const e={};for(let n=0;n<s.length;n++){const r=Ws(s[n]);for(const o in r)e[o]=r[o]}return e}function Hx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Xg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const Vx={clone:Ws,merge:xn};var Gx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends Ys{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gx,this.fragmentShader=Wx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=Hx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class qg extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new ne,im=new Ct,rm=new Ct;class Yn extends qg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Od*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,im,rm),n.subVectors(rm,im)}setViewOffset(e,n,r,o,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(yu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,m=d.fullHeight;c+=d.offsetX*o/h,n-=d.offsetY*r/m,o*=d.width/h,r*=d.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Ds=1;class jx extends sn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yn(Ns,Ds,e,n);o.layers=this.layers,this.add(o);const c=new Yn(Ns,Ds,e,n);c.layers=this.layers,this.add(c);const d=new Yn(Ns,Ds,e,n);d.layers=this.layers,this.add(d);const f=new Yn(Ns,Ds,e,n);f.layers=this.layers,this.add(f);const h=new Yn(Ns,Ds,e,n);h.layers=this.layers,this.add(h);const m=new Yn(Ns,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,d,f,h]=n;for(const m of n)this.remove(m);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===bl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,h,m,g]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,d),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,h),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(n,g),e.setRenderTarget(x,v,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Yg extends yn{constructor(e,n,r,o,c,d,f,h,m,g){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,r,o,c,d,f,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xx extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Yg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_i}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Va(5,5,5),c=new Mr({name:"CubemapFromEquirect",uniforms:Ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:xr});c.uniforms.tEquirect.value=n;const d=new vi(o,c),f=n.minFilter;return n.minFilter===Yr&&(n.minFilter=_i),new jx(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,o);e.setRenderTarget(c)}}const Hu=new ne,qx=new ne,Yx=new ct;class Wr{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Hu.subVectors(r,n).cross(qx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Hu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Yx.getNormalMatrix(e),o=this.coplanarPoint(Hu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Dl,pl=new ne;class qd{constructor(e=new Wr,n=new Wr,r=new Wr,o=new Wr,c=new Wr,d=new Wr){this.planes=[e,n,r,o,c,d]}set(e,n,r,o,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Vi){const r=this.planes,o=e.elements,c=o[0],d=o[1],f=o[2],h=o[3],m=o[4],g=o[5],x=o[6],v=o[7],S=o[8],E=o[9],T=o[10],y=o[11],_=o[12],U=o[13],I=o[14],P=o[15];if(r[0].setComponents(h-c,v-m,y-S,P-_).normalize(),r[1].setComponents(h+c,v+m,y+S,P+_).normalize(),r[2].setComponents(h+d,v+g,y+E,P+U).normalize(),r[3].setComponents(h-d,v-g,y-E,P-U).normalize(),r[4].setComponents(h-f,v-x,y-T,P-I).normalize(),n===Vi)r[5].setComponents(h+f,v+x,y+T,P+I).normalize();else if(n===bl)r[5].setComponents(f,x,T,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(pl.x=o.normal.x>0?e.max.x:e.min.x,pl.y=o.normal.y>0?e.max.y:e.min.y,pl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $g(){let s=null,e=!1,n=null,r=null;function o(c,d){n(c,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function $x(s){const e=new WeakMap;function n(f,h){const m=f.array,g=f.usage,x=m.byteLength,v=s.createBuffer();s.bindBuffer(h,v),s.bufferData(h,m,g),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,h,m){const g=h.array,x=h.updateRanges;if(s.bindBuffer(m,f),x.length===0)s.bufferSubData(m,0,g);else{x.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<x.length;S++){const E=x[v],T=x[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,x[v]=T)}x.length=v+1;for(let S=0,E=x.length;S<E;S++){const T=x[S];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function d(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:o,remove:c,update:d}}class Ga extends Si{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,d=n/2,f=Math.floor(r),h=Math.floor(o),m=f+1,g=h+1,x=e/f,v=n/h,S=[],E=[],T=[],y=[];for(let _=0;_<g;_++){const U=_*v-d;for(let I=0;I<m;I++){const P=I*x-c;E.push(P,-U,0),T.push(0,0,1),y.push(I/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let U=0;U<f;U++){const I=U+m*_,P=U+m*(_+1),K=U+1+m*(_+1),H=U+1+m*_;S.push(I,P,H),S.push(P,K,H)}this.setIndex(S),this.setAttribute("position",new ci(E,3)),this.setAttribute("normal",new ci(T,3)),this.setAttribute("uv",new ci(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.widthSegments,e.heightSegments)}}var Kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zx=`#ifdef USE_ALPHAHASH
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
#endif`,Qx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ey=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ny=`#ifdef USE_AOMAP
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
#endif`,iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ry=`#ifdef USE_BATCHING
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
#endif`,sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ay=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ly=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cy=`#ifdef USE_IRIDESCENCE
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
#endif`,uy=`#ifdef USE_BUMPMAP
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
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,my=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xy=`#define PI 3.141592653589793
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
} // validated`,yy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sy=`vec3 transformedNormal = objectNormal;
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
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ey=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ty=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ay="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,by=`#ifdef USE_ENVMAP
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
#endif`,Ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oy=`#ifdef USE_GRADIENTMAP
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
}`,ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hy=`uniform bool receiveShadow;
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
#endif`,Vy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qy=`PhysicalMaterial material;
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
#endif`,Yy=`struct PhysicalMaterial {
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
}`,$y=`
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
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sS=`#if defined( USE_POINTS_UV )
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
#endif`,aS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dS=`#ifdef USE_MORPHTARGETS
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
#endif`,fS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_S=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vS=`#ifdef USE_NORMALMAP
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
#endif`,xS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ES=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IS=`float getShadowMask() {
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
}`,US=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FS=`#ifdef USE_SKINNING
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
#endif`,OS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kS=`#ifdef USE_SKINNING
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
#endif`,zS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GS=`#ifdef USE_TRANSMISSION
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
#endif`,WS=`#ifdef USE_TRANSMISSION
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
#endif`,jS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $S=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KS=`uniform sampler2D t2D;
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
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`#include <common>
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
}`,nM=`#if DEPTH_PACKING == 3200
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
}`,iM=`#define DISTANCE
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
}`,rM=`#define DISTANCE
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
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`uniform float scale;
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
}`,lM=`uniform vec3 diffuse;
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
}`,cM=`#include <common>
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
}`,uM=`uniform vec3 diffuse;
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
}`,dM=`#define LAMBERT
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
}`,fM=`#define LAMBERT
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
}`,hM=`#define MATCAP
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
}`,pM=`#define MATCAP
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
}`,mM=`#define NORMAL
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
}`,gM=`#define NORMAL
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
}`,_M=`#define PHONG
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
}`,vM=`#define PHONG
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
}`,xM=`#define STANDARD
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
}`,yM=`#define STANDARD
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
}`,SM=`#define TOON
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
}`,MM=`#define TOON
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
}`,EM=`uniform float size;
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
}`,wM=`uniform vec3 diffuse;
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
}`,TM=`#include <common>
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
}`,AM=`uniform vec3 color;
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
}`,CM=`uniform float rotation;
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
}`,bM=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:Kx,alphahash_pars_fragment:Zx,alphamap_fragment:Qx,alphamap_pars_fragment:Jx,alphatest_fragment:ey,alphatest_pars_fragment:ty,aomap_fragment:ny,aomap_pars_fragment:iy,batching_pars_vertex:ry,batching_vertex:sy,begin_vertex:ay,beginnormal_vertex:oy,bsdfs:ly,iridescence_fragment:cy,bumpmap_pars_fragment:uy,clipping_planes_fragment:dy,clipping_planes_pars_fragment:fy,clipping_planes_pars_vertex:hy,clipping_planes_vertex:py,color_fragment:my,color_pars_fragment:gy,color_pars_vertex:_y,color_vertex:vy,common:xy,cube_uv_reflection_fragment:yy,defaultnormal_vertex:Sy,displacementmap_pars_vertex:My,displacementmap_vertex:Ey,emissivemap_fragment:wy,emissivemap_pars_fragment:Ty,colorspace_fragment:Ay,colorspace_pars_fragment:Cy,envmap_fragment:by,envmap_common_pars_fragment:Ry,envmap_pars_fragment:Py,envmap_pars_vertex:Ly,envmap_physical_pars_fragment:Vy,envmap_vertex:Ny,fog_vertex:Dy,fog_pars_vertex:Iy,fog_fragment:Uy,fog_pars_fragment:Fy,gradientmap_pars_fragment:Oy,lightmap_pars_fragment:ky,lights_lambert_fragment:zy,lights_lambert_pars_fragment:By,lights_pars_begin:Hy,lights_toon_fragment:Gy,lights_toon_pars_fragment:Wy,lights_phong_fragment:jy,lights_phong_pars_fragment:Xy,lights_physical_fragment:qy,lights_physical_pars_fragment:Yy,lights_fragment_begin:$y,lights_fragment_maps:Ky,lights_fragment_end:Zy,logdepthbuf_fragment:Qy,logdepthbuf_pars_fragment:Jy,logdepthbuf_pars_vertex:eS,logdepthbuf_vertex:tS,map_fragment:nS,map_pars_fragment:iS,map_particle_fragment:rS,map_particle_pars_fragment:sS,metalnessmap_fragment:aS,metalnessmap_pars_fragment:oS,morphinstance_vertex:lS,morphcolor_vertex:cS,morphnormal_vertex:uS,morphtarget_pars_vertex:dS,morphtarget_vertex:fS,normal_fragment_begin:hS,normal_fragment_maps:pS,normal_pars_fragment:mS,normal_pars_vertex:gS,normal_vertex:_S,normalmap_pars_fragment:vS,clearcoat_normal_fragment_begin:xS,clearcoat_normal_fragment_maps:yS,clearcoat_pars_fragment:SS,iridescence_pars_fragment:MS,opaque_fragment:ES,packing:wS,premultiplied_alpha_fragment:TS,project_vertex:AS,dithering_fragment:CS,dithering_pars_fragment:bS,roughnessmap_fragment:RS,roughnessmap_pars_fragment:PS,shadowmap_pars_fragment:LS,shadowmap_pars_vertex:NS,shadowmap_vertex:DS,shadowmask_pars_fragment:IS,skinbase_vertex:US,skinning_pars_vertex:FS,skinning_vertex:OS,skinnormal_vertex:kS,specularmap_fragment:zS,specularmap_pars_fragment:BS,tonemapping_fragment:HS,tonemapping_pars_fragment:VS,transmission_fragment:GS,transmission_pars_fragment:WS,uv_pars_fragment:jS,uv_pars_vertex:XS,uv_vertex:qS,worldpos_vertex:YS,background_vert:$S,background_frag:KS,backgroundCube_vert:ZS,backgroundCube_frag:QS,cube_vert:JS,cube_frag:eM,depth_vert:tM,depth_frag:nM,distanceRGBA_vert:iM,distanceRGBA_frag:rM,equirect_vert:sM,equirect_frag:aM,linedashed_vert:oM,linedashed_frag:lM,meshbasic_vert:cM,meshbasic_frag:uM,meshlambert_vert:dM,meshlambert_frag:fM,meshmatcap_vert:hM,meshmatcap_frag:pM,meshnormal_vert:mM,meshnormal_frag:gM,meshphong_vert:_M,meshphong_frag:vM,meshphysical_vert:xM,meshphysical_frag:yM,meshtoon_vert:SM,meshtoon_frag:MM,points_vert:EM,points_frag:wM,shadow_vert:TM,shadow_frag:AM,sprite_vert:CM,sprite_frag:bM},Re={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},gi={basic:{uniforms:xn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:xn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new vt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:xn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:xn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:xn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new vt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:xn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:xn([Re.points,Re.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:xn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:xn([Re.common,Re.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:xn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:xn([Re.sprite,Re.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:xn([Re.common,Re.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:xn([Re.lights,Re.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};gi.physical={uniforms:xn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const ml={r:0,b:0,g:0},Vr=new yi,RM=new Bt;function PM(s,e,n,r,o,c,d){const f=new vt(0);let h=c===!0?0:1,m,g,x=null,v=0,S=null;function E(U){let I=U.isScene===!0?U.background:null;return I&&I.isTexture&&(I=(U.backgroundBlurriness>0?n:e).get(I)),I}function T(U){let I=!1;const P=E(U);P===null?_(f,h):P&&P.isColor&&(_(P,1),I=!0);const K=s.xr.getEnvironmentBlendMode();K==="additive"?r.buffers.color.setClear(0,0,0,1,d):K==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||I)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(U,I){const P=E(I);P&&(P.isCubeTexture||P.mapping===Ll)?(g===void 0&&(g=new vi(new Va(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:Ws(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(K,H,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Vr.copy(I.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(RM.makeRotationFromEuler(Vr)),g.material.toneMapped=St.getTransfer(P.colorSpace)!==Lt,(x!==P||v!==P.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,x=P,v=P.version,S=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new vi(new Ga(2,2),new Mr({name:"BackgroundMaterial",uniforms:Ws(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=St.getTransfer(P.colorSpace)!==Lt,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||v!==P.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,x=P,v=P.version,S=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function _(U,I){U.getRGB(ml,Xg(s)),r.buffers.color.setClear(ml.r,ml.g,ml.b,I,d)}return{getClearColor:function(){return f},setClearColor:function(U,I=1){f.set(U),h=I,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(U){h=U,_(f,h)},render:T,addToRenderList:y}}function LM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,d=!1;function f(C,L,Z,q,ae){let de=!1;const oe=x(q,Z,L);c!==oe&&(c=oe,m(c.object)),de=S(C,q,Z,ae),de&&E(C,q,Z,ae),ae!==null&&e.update(ae,s.ELEMENT_ARRAY_BUFFER),(de||d)&&(d=!1,P(C,L,Z,q),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function h(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function x(C,L,Z){const q=Z.wireframe===!0;let ae=r[C.id];ae===void 0&&(ae={},r[C.id]=ae);let de=ae[L.id];de===void 0&&(de={},ae[L.id]=de);let oe=de[q];return oe===void 0&&(oe=v(h()),de[q]=oe),oe}function v(C){const L=[],Z=[],q=[];for(let ae=0;ae<n;ae++)L[ae]=0,Z[ae]=0,q[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:Z,attributeDivisors:q,object:C,attributes:{},index:null}}function S(C,L,Z,q){const ae=c.attributes,de=L.attributes;let oe=0;const le=Z.getAttributes();for(const B in le)if(le[B].location>=0){const te=ae[B];let F=de[B];if(F===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),te===void 0||te.attribute!==F||F&&te.data!==F.data)return!0;oe++}return c.attributesNum!==oe||c.index!==q}function E(C,L,Z,q){const ae={},de=L.attributes;let oe=0;const le=Z.getAttributes();for(const B in le)if(le[B].location>=0){let te=de[B];te===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(te=C.instanceColor));const F={};F.attribute=te,te&&te.data&&(F.data=te.data),ae[B]=F,oe++}c.attributes=ae,c.attributesNum=oe,c.index=q}function T(){const C=c.newAttributes;for(let L=0,Z=C.length;L<Z;L++)C[L]=0}function y(C){_(C,0)}function _(C,L){const Z=c.newAttributes,q=c.enabledAttributes,ae=c.attributeDivisors;Z[C]=1,q[C]===0&&(s.enableVertexAttribArray(C),q[C]=1),ae[C]!==L&&(s.vertexAttribDivisor(C,L),ae[C]=L)}function U(){const C=c.newAttributes,L=c.enabledAttributes;for(let Z=0,q=L.length;Z<q;Z++)L[Z]!==C[Z]&&(s.disableVertexAttribArray(Z),L[Z]=0)}function I(C,L,Z,q,ae,de,oe){oe===!0?s.vertexAttribIPointer(C,L,Z,ae,de):s.vertexAttribPointer(C,L,Z,q,ae,de)}function P(C,L,Z,q){T();const ae=q.attributes,de=Z.getAttributes(),oe=L.defaultAttributeValues;for(const le in de){const B=de[le];if(B.location>=0){let ue=ae[le];if(ue===void 0&&(le==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),le==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),ue!==void 0){const te=ue.normalized,F=ue.itemSize,J=e.get(ue);if(J===void 0)continue;const Le=J.buffer,Q=J.type,fe=J.bytesPerElement,Se=Q===s.INT||Q===s.UNSIGNED_INT||ue.gpuType===Hd;if(ue.isInterleavedBufferAttribute){const xe=ue.data,Ae=xe.stride,Ie=ue.offset;if(xe.isInstancedInterleavedBuffer){for(let Ke=0;Ke<B.locationSize;Ke++)_(B.location+Ke,xe.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ke=0;Ke<B.locationSize;Ke++)y(B.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Ke=0;Ke<B.locationSize;Ke++)I(B.location+Ke,F/B.locationSize,Q,te,Ae*fe,(Ie+F/B.locationSize*Ke)*fe,Se)}else{if(ue.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)_(B.location+xe,ue.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<B.locationSize;xe++)y(B.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let xe=0;xe<B.locationSize;xe++)I(B.location+xe,F/B.locationSize,Q,te,F*fe,F/B.locationSize*xe*fe,Se)}}else if(oe!==void 0){const te=oe[le];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(B.location,te);break;case 3:s.vertexAttrib3fv(B.location,te);break;case 4:s.vertexAttrib4fv(B.location,te);break;default:s.vertexAttrib1fv(B.location,te)}}}}U()}function K(){k();for(const C in r){const L=r[C];for(const Z in L){const q=L[Z];for(const ae in q)g(q[ae].object),delete q[ae];delete L[Z]}delete r[C]}}function H(C){if(r[C.id]===void 0)return;const L=r[C.id];for(const Z in L){const q=L[Z];for(const ae in q)g(q[ae].object),delete q[ae];delete L[Z]}delete r[C.id]}function O(C){for(const L in r){const Z=r[L];if(Z[C.id]===void 0)continue;const q=Z[C.id];for(const ae in q)g(q[ae].object),delete q[ae];delete Z[C.id]}}function k(){R(),d=!0,c!==o&&(c=o,m(c.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:k,resetDefaultState:R,dispose:K,releaseStatesOfGeometry:H,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:y,disableUnusedAttributes:U}}function NM(s,e,n){let r;function o(m){r=m}function c(m,g){s.drawArrays(r,m,g),n.update(g,r,1)}function d(m,g,x){x!==0&&(s.drawArraysInstanced(r,m,g,x),n.update(g,r,x))}function f(m,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,x);let S=0;for(let E=0;E<x;E++)S+=g[E];n.update(S,r,1)}function h(m,g,x,v){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)d(m[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,v,0,x);let E=0;for(let T=0;T<x;T++)E+=g[T]*v[T];n.update(E,r,1)}}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function DM(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(O){return!(O!==oi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const k=O===ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Wi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Hi&&!k)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const x=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),K=E>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:U,maxVaryings:I,maxFragmentUniforms:P,vertexTextures:K,maxSamples:H}}function IM(s){const e=this;let n=null,r=0,o=!1,c=!1;const d=new Wr,f=new ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||r!==0||o;return o=v,r=x.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){n=g(x,v,0)},this.setState=function(x,v,S){const E=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,_=s.get(x);if(!o||E===null||E.length===0||c&&!y)c?g(null):m();else{const U=c?0:r,I=U*4;let P=_.clippingState||null;h.value=P,P=g(E,v,I,S);for(let K=0;K!==I;++K)P[K]=n[K];_.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,v,S,E){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=h.value,E!==!0||y===null){const _=S+T*4,U=v.matrixWorldInverse;f.getNormalMatrix(U),(y===null||y.length<_)&&(y=new Float32Array(_));for(let I=0,P=S;I!==T;++I,P+=4)d.copy(x[I]).applyMatrix4(U,f),d.normal.toArray(y,P),y[P+3]=d.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function UM(s){let e=new WeakMap;function n(d,f){return f===od?d.mapping=Bs:f===ld&&(d.mapping=Hs),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===od||f===ld)if(e.has(d)){const h=e.get(d).texture;return n(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const m=new Xx(h.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",o),n(m.texture,d.mapping)}else return null}}return d}function o(d){const f=d.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class Kg extends qg{constructor(e=-1,n=1,r=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Us=4,sm=[.125,.215,.35,.446,.526,.582],qr=20,Vu=new Kg,am=new vt;let Gu=null,Wu=0,ju=0,Xu=!1;const jr=(1+Math.sqrt(5))/2,Is=1/jr,om=[new ne(-jr,Is,0),new ne(jr,Is,0),new ne(-Is,0,jr),new ne(Is,0,jr),new ne(0,jr,-Is),new ne(0,jr,Is),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class lm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),Xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gu,Wu,ju),this._renderer.xr.enabled=Xu,e.scissorTest=!1,gl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),Xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:ka,format:oi,colorSpace:Xs,depthBuffer:!1},o=cm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FM(c)),this._blurMaterial=OM(c,e,n)}return o}_compileMaterial(e){const n=new vi(this._lodPlanes[0],e);this._renderer.compile(n,Vu)}_sceneToCubeUV(e,n,r,o){const f=new Yn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,v=g.toneMapping;g.getClearColor(am),g.toneMapping=yr,g.autoClear=!1;const S=new Gg({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),E=new vi(new Va,S);let T=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,T=!0):(S.color.copy(am),T=!0);for(let _=0;_<6;_++){const U=_%3;U===0?(f.up.set(0,h[_],0),f.lookAt(m[_],0,0)):U===1?(f.up.set(0,0,h[_]),f.lookAt(0,m[_],0)):(f.up.set(0,h[_],0),f.lookAt(0,0,m[_]));const I=this._cubeSize;gl(o,U*I,_>2?I:0,I,I),g.setRenderTarget(o),T&&g.render(E,f),g.render(e,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=v,g.autoClear=x,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Bs||e.mapping===Hs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=um());const c=o?this._cubemapMaterial:this._equirectMaterial,d=new vi(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const h=this._cubeSize;gl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(d,Vu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=om[(o-c-1)%om.length];this._blur(e,c-1,c,d,f)}n.autoClear=r}_blur(e,n,r,o,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,o,"latitudinal",c),this._halfBlur(d,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,d,f){const h=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new vi(this._lodPlanes[o],m),v=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*qr-1),T=c/E,y=isFinite(c)?1+Math.floor(g*T):qr;y>qr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${qr}`);const _=[];let U=0;for(let O=0;O<qr;++O){const k=O/T,R=Math.exp(-k*k/2);_.push(R),O===0?U+=R:O<y&&(U+=2*R)}for(let O=0;O<_.length;O++)_[O]=_[O]/U;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=_,v.latitudinal.value=d==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:I}=this;v.dTheta.value=E,v.mipInt.value=I-r;const P=this._sizeLods[o],K=3*P*(o>I-Us?o-I+Us:0),H=4*(this._cubeSize-P);gl(n,K,H,3*P,2*P),h.setRenderTarget(n),h.render(x,Vu)}}function FM(s){const e=[],n=[],r=[];let o=s;const c=s-Us+1+sm.length;for(let d=0;d<c;d++){const f=Math.pow(2,o);n.push(f);let h=1/f;d>s-Us?h=sm[d-s+Us-1]:d===0&&(h=0),r.push(h);const m=1/(f-2),g=-m,x=1+m,v=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,E=6,T=3,y=2,_=1,U=new Float32Array(T*E*S),I=new Float32Array(y*E*S),P=new Float32Array(_*E*S);for(let H=0;H<S;H++){const O=H%3*2/3-1,k=H>2?0:-1,R=[O,k,0,O+2/3,k,0,O+2/3,k+1,0,O,k,0,O+2/3,k+1,0,O,k+1,0];U.set(R,T*E*H),I.set(v,y*E*H);const C=[H,H,H,H,H,H];P.set(C,_*E*H)}const K=new Si;K.setAttribute("position",new xi(U,T)),K.setAttribute("uv",new xi(I,y)),K.setAttribute("faceIndex",new xi(P,_)),e.push(K),o>Us&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function cm(s,e,n){const r=new Kr(s,e,n);return r.texture.mapping=Ll,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gl(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function OM(s,e,n){const r=new Float32Array(qr),o=new ne(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Yd(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function um(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yd(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function dm(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Yd(){return`

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
	`}function kM(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===od||h===ld,g=h===Bs||h===Hs;if(m||g){let x=e.get(f);const v=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new lm(s)),x=m?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const S=f.image;return m&&S&&S.height>0||g&&S&&o(S)?(n===null&&(n=new lm(s)),x=m?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",c),x.texture):null}}}return f}function o(f){let h=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&h++;return h===m}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function zM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Ia("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function BM(s,e,n,r){const o={},c=new WeakMap;function d(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);for(const E in v.morphAttributes){const T=v.morphAttributes[E];for(let y=0,_=T.length;y<_;y++)e.remove(T[y])}v.removeEventListener("dispose",d),delete o[v.id];const S=c.get(v);S&&(e.remove(S),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(x,v){return o[v.id]===!0||(v.addEventListener("dispose",d),o[v.id]=!0,n.memory.geometries++),v}function h(x){const v=x.attributes;for(const E in v)e.update(v[E],s.ARRAY_BUFFER);const S=x.morphAttributes;for(const E in S){const T=S[E];for(let y=0,_=T.length;y<_;y++)e.update(T[y],s.ARRAY_BUFFER)}}function m(x){const v=[],S=x.index,E=x.attributes.position;let T=0;if(S!==null){const U=S.array;T=S.version;for(let I=0,P=U.length;I<P;I+=3){const K=U[I+0],H=U[I+1],O=U[I+2];v.push(K,H,H,O,O,K)}}else if(E!==void 0){const U=E.array;T=E.version;for(let I=0,P=U.length/3-1;I<P;I+=3){const K=I+0,H=I+1,O=I+2;v.push(K,H,H,O,O,K)}}else return;const y=new(Og(v)?jg:Wg)(v,1);y.version=T;const _=c.get(x);_&&e.remove(_),c.set(x,y)}function g(x){const v=c.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&m(x)}else m(x);return c.get(x)}return{get:f,update:h,getWireframeAttribute:g}}function HM(s,e,n){let r;function o(v){r=v}let c,d;function f(v){c=v.type,d=v.bytesPerElement}function h(v,S){s.drawElements(r,S,c,v*d),n.update(S,r,1)}function m(v,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,v*d,E),n.update(S,r,E))}function g(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,v,0,E);let y=0;for(let _=0;_<E;_++)y+=S[_];n.update(y,r,1)}function x(v,S,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<v.length;_++)m(v[_]/d,S[_],T[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,v,0,T,0,E);let _=0;for(let U=0;U<E;U++)_+=S[U]*T[U];n.update(_,r,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function VM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function GM(s,e,n){const r=new WeakMap,o=new Vt;function c(d,f,h){const m=d.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=g!==void 0?g.length:0;let v=r.get(f);if(v===void 0||v.count!==x){let C=function(){k.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var S=C;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let P=0;E===!0&&(P=1),T===!0&&(P=2),y===!0&&(P=3);let K=f.attributes.position.count*P,H=1;K>e.maxTextureSize&&(H=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const O=new Float32Array(K*H*4*x),k=new zg(O,K,H,x);k.type=Hi,k.needsUpdate=!0;const R=P*4;for(let L=0;L<x;L++){const Z=_[L],q=U[L],ae=I[L],de=K*H*4*L;for(let oe=0;oe<Z.count;oe++){const le=oe*R;E===!0&&(o.fromBufferAttribute(Z,oe),O[de+le+0]=o.x,O[de+le+1]=o.y,O[de+le+2]=o.z,O[de+le+3]=0),T===!0&&(o.fromBufferAttribute(q,oe),O[de+le+4]=o.x,O[de+le+5]=o.y,O[de+le+6]=o.z,O[de+le+7]=0),y===!0&&(o.fromBufferAttribute(ae,oe),O[de+le+8]=o.x,O[de+le+9]=o.y,O[de+le+10]=o.z,O[de+le+11]=ae.itemSize===4?o.w:1)}}v={count:x,texture:k,size:new Ct(K,H)},r.set(f,v),f.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const T=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function WM(s,e,n,r){let o=new WeakMap;function c(h){const m=r.render.frame,g=h.geometry,x=e.get(h,g);if(o.get(x)!==m&&(e.update(x),o.set(x,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const v=h.skeleton;o.get(v)!==m&&(v.update(),o.set(v,m))}return x}function d(){o=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:d}}class Zg extends yn{constructor(e,n,r,o,c,d,f,h,m,g=Os){if(g!==Os&&g!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Os&&(r=$r),r===void 0&&g===Gs&&(r=Vs),super(null,o,c,d,f,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:li,this.minFilter=h!==void 0?h:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Qg=new yn,fm=new Zg(1,1),Jg=new zg,e0=new Px,t0=new Yg,hm=[],pm=[],mm=new Float32Array(16),gm=new Float32Array(9),_m=new Float32Array(4);function $s(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=hm[o];if(c===void 0&&(c=new Float32Array(o),hm[o]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(c,f)}return c}function Kt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Zt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Il(s,e){let n=pm[e];n===void 0&&(n=new Int32Array(e),pm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function jM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function XM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2fv(this.addr,e),Zt(n,e)}}function qM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;s.uniform3fv(this.addr,e),Zt(n,e)}}function YM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4fv(this.addr,e),Zt(n,e)}}function $M(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;_m.set(r),s.uniformMatrix2fv(this.addr,!1,_m),Zt(n,r)}}function KM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;gm.set(r),s.uniformMatrix3fv(this.addr,!1,gm),Zt(n,r)}}function ZM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;mm.set(r),s.uniformMatrix4fv(this.addr,!1,mm),Zt(n,r)}}function QM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function JM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2iv(this.addr,e),Zt(n,e)}}function eE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3iv(this.addr,e),Zt(n,e)}}function tE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4iv(this.addr,e),Zt(n,e)}}function nE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function iE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2uiv(this.addr,e),Zt(n,e)}}function rE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3uiv(this.addr,e),Zt(n,e)}}function sE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4uiv(this.addr,e),Zt(n,e)}}function aE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(fm.compareFunction=Fg,c=fm):c=Qg,n.setTexture2D(e||c,o)}function oE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||e0,o)}function lE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||t0,o)}function cE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Jg,o)}function uE(s){switch(s){case 5126:return jM;case 35664:return XM;case 35665:return qM;case 35666:return YM;case 35674:return $M;case 35675:return KM;case 35676:return ZM;case 5124:case 35670:return QM;case 35667:case 35671:return JM;case 35668:case 35672:return eE;case 35669:case 35673:return tE;case 5125:return nE;case 36294:return iE;case 36295:return rE;case 36296:return sE;case 35678:case 36198:case 36298:case 36306:case 35682:return aE;case 35679:case 36299:case 36307:return oE;case 35680:case 36300:case 36308:case 36293:return lE;case 36289:case 36303:case 36311:case 36292:return cE}}function dE(s,e){s.uniform1fv(this.addr,e)}function fE(s,e){const n=$s(e,this.size,2);s.uniform2fv(this.addr,n)}function hE(s,e){const n=$s(e,this.size,3);s.uniform3fv(this.addr,n)}function pE(s,e){const n=$s(e,this.size,4);s.uniform4fv(this.addr,n)}function mE(s,e){const n=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function gE(s,e){const n=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function _E(s,e){const n=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function vE(s,e){s.uniform1iv(this.addr,e)}function xE(s,e){s.uniform2iv(this.addr,e)}function yE(s,e){s.uniform3iv(this.addr,e)}function SE(s,e){s.uniform4iv(this.addr,e)}function ME(s,e){s.uniform1uiv(this.addr,e)}function EE(s,e){s.uniform2uiv(this.addr,e)}function wE(s,e){s.uniform3uiv(this.addr,e)}function TE(s,e){s.uniform4uiv(this.addr,e)}function AE(s,e,n){const r=this.cache,o=e.length,c=Il(n,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==o;++d)n.setTexture2D(e[d]||Qg,c[d])}function CE(s,e,n){const r=this.cache,o=e.length,c=Il(n,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||e0,c[d])}function bE(s,e,n){const r=this.cache,o=e.length,c=Il(n,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||t0,c[d])}function RE(s,e,n){const r=this.cache,o=e.length,c=Il(n,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||Jg,c[d])}function PE(s){switch(s){case 5126:return dE;case 35664:return fE;case 35665:return hE;case 35666:return pE;case 35674:return mE;case 35675:return gE;case 35676:return _E;case 5124:case 35670:return vE;case 35667:case 35671:return xE;case 35668:case 35672:return yE;case 35669:case 35673:return SE;case 5125:return ME;case 36294:return EE;case 36295:return wE;case 36296:return TE;case 35678:case 36198:case 36298:case 36306:case 35682:return AE;case 35679:case 36299:case 36307:return CE;case 35680:case 36300:case 36308:case 36293:return bE;case 36289:case 36303:case 36311:case 36292:return RE}}class LE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=uE(n.type)}}class NE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=PE(n.type)}}class DE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const qu=/(\w+)(\])?(\[|\.)?/g;function vm(s,e){s.seq.push(e),s.map[e.id]=e}function IE(s,e,n){const r=s.name,o=r.length;for(qu.lastIndex=0;;){const c=qu.exec(r),d=qu.lastIndex;let f=c[1];const h=c[2]==="]",m=c[3];if(h&&(f=f|0),m===void 0||m==="["&&d+2===o){vm(n,m===void 0?new LE(f,s,e):new NE(f,s,e));break}else{let x=n.map[f];x===void 0&&(x=new DE(f),vm(n,x)),n=x}}}class Al{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),d=e.getUniformLocation(n,c.name);IE(c,d,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,d=n.length;c!==d;++c){const f=n[c],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in n&&r.push(d)}return r}}function xm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const UE=37297;let FE=0;function OE(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=o;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}const ym=new ct;function kE(s){St._getMatrix(ym,St.workingColorSpace,s);const e=`mat3( ${ym.elements.map(n=>n.toFixed(4))} )`;switch(St.getTransfer(s)){case Nl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Sm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+OE(s.getShaderSource(e),d)}else return o}function zE(s,e){const n=kE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function BE(s,e){let n;switch(e){case ix:n="Linear";break;case rx:n="Reinhard";break;case sx:n="Cineon";break;case ax:n="ACESFilmic";break;case lx:n="AgX";break;case cx:n="Neutral";break;case ox:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _l=new ne;function HE(){St.getLuminanceCoefficients(_l);const s=_l.x.toFixed(4),e=_l.y.toFixed(4),n=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function GE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function WE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function Ua(s){return s!==""}function Mm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Em(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jE=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(s){return s.replace(jE,qE)}const XE=new Map;function qE(s,e){let n=ut[e];if(n===void 0){const r=XE.get(e);if(r!==void 0)n=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return kd(n)}const YE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wm(s){return s.replace(YE,$E)}function $E(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Tm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function KE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Sg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Mg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function ZE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function JE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Eg:e="ENVMAP_BLENDING_MULTIPLY";break;case tx:e="ENVMAP_BLENDING_MIX";break;case nx:e="ENVMAP_BLENDING_ADD";break}return e}function e1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function t1(s,e,n,r){const o=s.getContext(),c=n.defines;let d=n.vertexShader,f=n.fragmentShader;const h=KE(n),m=ZE(n),g=QE(n),x=JE(n),v=e1(n),S=VE(n),E=GE(c),T=o.createProgram();let y,_,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ua).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ua).join(`
`),_.length>0&&(_+=`
`)):(y=[Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),_=[Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yr?"#define TONE_MAPPING":"",n.toneMapping!==yr?ut.tonemapping_pars_fragment:"",n.toneMapping!==yr?BE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,zE("linearToOutputTexel",n.outputColorSpace),HE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ua).join(`
`)),d=kd(d),d=Mm(d,n),d=Em(d,n),f=kd(f),f=Mm(f,n),f=Em(f,n),d=wm(d),f=wm(f),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",n.glslVersion===kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const I=U+y+d,P=U+_+f,K=xm(o,o.VERTEX_SHADER,I),H=xm(o,o.FRAGMENT_SHADER,P);o.attachShader(T,K),o.attachShader(T,H),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function O(L){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(T).trim(),q=o.getShaderInfoLog(K).trim(),ae=o.getShaderInfoLog(H).trim();let de=!0,oe=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,K,H);else{const le=Sm(o,K,"vertex"),B=Sm(o,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Z+`
`+le+`
`+B)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(q===""||ae==="")&&(oe=!1);oe&&(L.diagnostics={runnable:de,programLog:Z,vertexShader:{log:q,prefix:y},fragmentShader:{log:ae,prefix:_}})}o.deleteShader(K),o.deleteShader(H),k=new Al(o,T),R=WE(o,T)}let k;this.getUniforms=function(){return k===void 0&&O(this),k};let R;this.getAttributes=function(){return R===void 0&&O(this),R};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,UE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=FE++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=K,this.fragmentShader=H,this}let n1=0;class i1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new r1(e),n.set(e,r)),r}}class r1{constructor(e){this.id=n1++,this.code=e,this.usedTimes=0}}function s1(s,e,n,r,o,c,d){const f=new Hg,h=new i1,m=new Set,g=[],x=o.logarithmicDepthBuffer,v=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return m.add(R),R===0?"uv":`uv${R}`}function y(R,C,L,Z,q){const ae=Z.fog,de=q.geometry,oe=R.isMeshStandardMaterial?Z.environment:null,le=(R.isMeshStandardMaterial?n:e).get(R.envMap||oe),B=le&&le.mapping===Ll?le.image.height:null,ue=E[R.type];R.precision!==null&&(S=o.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const te=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,F=te!==void 0?te.length:0;let J=0;de.morphAttributes.position!==void 0&&(J=1),de.morphAttributes.normal!==void 0&&(J=2),de.morphAttributes.color!==void 0&&(J=3);let Le,Q,fe,Se;if(ue){const xt=gi[ue];Le=xt.vertexShader,Q=xt.fragmentShader}else Le=R.vertexShader,Q=R.fragmentShader,h.update(R),fe=h.getVertexShaderID(R),Se=h.getFragmentShaderID(R);const xe=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ie=q.isInstancedMesh===!0,Ke=q.isBatchedMesh===!0,Ze=!!R.map,qe=!!R.matcap,Mt=!!le,X=!!R.aoMap,pn=!!R.lightMap,mt=!!R.bumpMap,ft=!!R.normalMap,Qe=!!R.displacementMap,Rt=!!R.emissiveMap,Ye=!!R.metalnessMap,N=!!R.roughnessMap,A=R.anisotropy>0,ee=R.clearcoat>0,me=R.dispersion>0,_e=R.iridescence>0,he=R.sheen>0,Ve=R.transmission>0,Ce=A&&!!R.anisotropyMap,Ue=ee&&!!R.clearcoatMap,dt=ee&&!!R.clearcoatNormalMap,Me=ee&&!!R.clearcoatRoughnessMap,Oe=_e&&!!R.iridescenceMap,tt=_e&&!!R.iridescenceThicknessMap,nt=he&&!!R.sheenColorMap,ke=he&&!!R.sheenRoughnessMap,ht=!!R.specularMap,at=!!R.specularColorMap,At=!!R.specularIntensityMap,G=Ve&&!!R.transmissionMap,be=Ve&&!!R.thicknessMap,ce=!!R.gradientMap,pe=!!R.alphaMap,Ne=R.alphaTest>0,Pe=!!R.alphaHash,ot=!!R.extensions;let It=yr;R.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(It=s.toneMapping);const Xt={shaderID:ue,shaderType:R.type,shaderName:R.name,vertexShader:Le,fragmentShader:Q,defines:R.defines,customVertexShaderID:fe,customFragmentShaderID:Se,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Ke,batchingColor:Ke&&q._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&q.instanceColor!==null,instancingMorph:Ie&&q.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Xs,alphaToCoverage:!!R.alphaToCoverage,map:Ze,matcap:qe,envMap:Mt,envMapMode:Mt&&le.mapping,envMapCubeUVHeight:B,aoMap:X,lightMap:pn,bumpMap:mt,normalMap:ft,displacementMap:v&&Qe,emissiveMap:Rt,normalMapObjectSpace:ft&&R.normalMapType===hx,normalMapTangentSpace:ft&&R.normalMapType===Ug,metalnessMap:Ye,roughnessMap:N,anisotropy:A,anisotropyMap:Ce,clearcoat:ee,clearcoatMap:Ue,clearcoatNormalMap:dt,clearcoatRoughnessMap:Me,dispersion:me,iridescence:_e,iridescenceMap:Oe,iridescenceThicknessMap:tt,sheen:he,sheenColorMap:nt,sheenRoughnessMap:ke,specularMap:ht,specularColorMap:at,specularIntensityMap:At,transmission:Ve,transmissionMap:G,thicknessMap:be,gradientMap:ce,opaque:R.transparent===!1&&R.blending===Fs&&R.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ne,alphaHash:Pe,combine:R.combine,mapUv:Ze&&T(R.map.channel),aoMapUv:X&&T(R.aoMap.channel),lightMapUv:pn&&T(R.lightMap.channel),bumpMapUv:mt&&T(R.bumpMap.channel),normalMapUv:ft&&T(R.normalMap.channel),displacementMapUv:Qe&&T(R.displacementMap.channel),emissiveMapUv:Rt&&T(R.emissiveMap.channel),metalnessMapUv:Ye&&T(R.metalnessMap.channel),roughnessMapUv:N&&T(R.roughnessMap.channel),anisotropyMapUv:Ce&&T(R.anisotropyMap.channel),clearcoatMapUv:Ue&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:dt&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(R.sheenRoughnessMap.channel),specularMapUv:ht&&T(R.specularMap.channel),specularColorMapUv:at&&T(R.specularColorMap.channel),specularIntensityMapUv:At&&T(R.specularIntensityMap.channel),transmissionMapUv:G&&T(R.transmissionMap.channel),thicknessMapUv:be&&T(R.thicknessMap.channel),alphaMapUv:pe&&T(R.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(ft||A),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!de.attributes.uv&&(Ze||pe),fog:!!ae,useFog:R.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ae,skinning:q.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:J,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:Ze&&R.map.isVideoTexture===!0&&St.getTransfer(R.map.colorSpace)===Lt,decodeVideoTextureEmissive:Rt&&R.emissiveMap.isVideoTexture===!0&&St.getTransfer(R.emissiveMap.colorSpace)===Lt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===zi,flipSided:R.side===Ln,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:ot&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&R.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function _(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const L in R.defines)C.push(L),C.push(R.defines[L]);return R.isRawShaderMaterial===!1&&(U(C,R),I(C,R),C.push(s.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function U(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function I(R,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),R.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),R.push(f.mask)}function P(R){const C=E[R.type];let L;if(C){const Z=gi[C];L=Vx.clone(Z.uniforms)}else L=R.uniforms;return L}function K(R,C){let L;for(let Z=0,q=g.length;Z<q;Z++){const ae=g[Z];if(ae.cacheKey===C){L=ae,++L.usedTimes;break}}return L===void 0&&(L=new t1(s,C,R,c),g.push(L)),L}function H(R){if(--R.usedTimes===0){const C=g.indexOf(R);g[C]=g[g.length-1],g.pop(),R.destroy()}}function O(R){h.remove(R)}function k(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:P,acquireProgram:K,releaseProgram:H,releaseShaderCache:O,programs:g,dispose:k}}function a1(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,h){s.get(d)[f]=h}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function o1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Am(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Cm(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function d(x,v,S,E,T,y){let _=s[e];return _===void 0?(_={id:x.id,object:x,geometry:v,material:S,groupOrder:E,renderOrder:x.renderOrder,z:T,group:y},s[e]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=S,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=T,_.group=y),e++,_}function f(x,v,S,E,T,y){const _=d(x,v,S,E,T,y);S.transmission>0?r.push(_):S.transparent===!0?o.push(_):n.push(_)}function h(x,v,S,E,T,y){const _=d(x,v,S,E,T,y);S.transmission>0?r.unshift(_):S.transparent===!0?o.unshift(_):n.unshift(_)}function m(x,v){n.length>1&&n.sort(x||o1),r.length>1&&r.sort(v||Am),o.length>1&&o.sort(v||Am)}function g(){for(let x=e,v=s.length;x<v;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:h,finish:g,sort:m}}function l1(){let s=new WeakMap;function e(r,o){const c=s.get(r);let d;return c===void 0?(d=new Cm,s.set(r,[d])):o>=c.length?(d=new Cm,c.push(d)):d=c[o],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function c1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new vt};break;case"SpotLight":n={position:new ne,direction:new ne,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=n,n}}}function u1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let d1=0;function f1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function h1(s){const e=new c1,n=u1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ne);const o=new ne,c=new Bt,d=new Bt;function f(m){let g=0,x=0,v=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let S=0,E=0,T=0,y=0,_=0,U=0,I=0,P=0,K=0,H=0,O=0;m.sort(f1);for(let R=0,C=m.length;R<C;R++){const L=m[R],Z=L.color,q=L.intensity,ae=L.distance,de=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)g+=Z.r*q,x+=Z.g*q,v+=Z.b*q;else if(L.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(L.sh.coefficients[oe],q);O++}else if(L.isDirectionalLight){const oe=e.get(L);if(oe.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const le=L.shadow,B=n.get(L);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=L.shadow.matrix,U++}r.directional[S]=oe,S++}else if(L.isSpotLight){const oe=e.get(L);oe.position.setFromMatrixPosition(L.matrixWorld),oe.color.copy(Z).multiplyScalar(q),oe.distance=ae,oe.coneCos=Math.cos(L.angle),oe.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),oe.decay=L.decay,r.spot[T]=oe;const le=L.shadow;if(L.map&&(r.spotLightMap[K]=L.map,K++,le.updateMatrices(L),L.castShadow&&H++),r.spotLightMatrix[T]=le.matrix,L.castShadow){const B=n.get(L);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.spotShadow[T]=B,r.spotShadowMap[T]=de,P++}T++}else if(L.isRectAreaLight){const oe=e.get(L);oe.color.copy(Z).multiplyScalar(q),oe.halfWidth.set(L.width*.5,0,0),oe.halfHeight.set(0,L.height*.5,0),r.rectArea[y]=oe,y++}else if(L.isPointLight){const oe=e.get(L);if(oe.color.copy(L.color).multiplyScalar(L.intensity),oe.distance=L.distance,oe.decay=L.decay,L.castShadow){const le=L.shadow,B=n.get(L);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,r.pointShadow[E]=B,r.pointShadowMap[E]=de,r.pointShadowMatrix[E]=L.shadow.matrix,I++}r.point[E]=oe,E++}else if(L.isHemisphereLight){const oe=e.get(L);oe.skyColor.copy(L.color).multiplyScalar(q),oe.groundColor.copy(L.groundColor).multiplyScalar(q),r.hemi[_]=oe,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=v;const k=r.hash;(k.directionalLength!==S||k.pointLength!==E||k.spotLength!==T||k.rectAreaLength!==y||k.hemiLength!==_||k.numDirectionalShadows!==U||k.numPointShadows!==I||k.numSpotShadows!==P||k.numSpotMaps!==K||k.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=P+K-H,r.spotLightMap.length=K,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=O,k.directionalLength=S,k.pointLength=E,k.spotLength=T,k.rectAreaLength=y,k.hemiLength=_,k.numDirectionalShadows=U,k.numPointShadows=I,k.numSpotShadows=P,k.numSpotMaps=K,k.numLightProbes=O,r.version=d1++)}function h(m,g){let x=0,v=0,S=0,E=0,T=0;const y=g.matrixWorldInverse;for(let _=0,U=m.length;_<U;_++){const I=m[_];if(I.isDirectionalLight){const P=r.directional[x];P.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),x++}else if(I.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),S++}else if(I.isRectAreaLight){const P=r.rectArea[E];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(y),d.identity(),c.copy(I.matrixWorld),c.premultiply(y),d.extractRotation(c),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),E++}else if(I.isPointLight){const P=r.point[v];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(y),v++}else if(I.isHemisphereLight){const P=r.hemi[T];P.direction.setFromMatrixPosition(I.matrixWorld),P.direction.transformDirection(y),T++}}}return{setup:f,setupView:h,state:r}}function bm(s){const e=new h1(s),n=[],r=[];function o(g){m.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function d(g){r.push(g)}function f(){e.setup(n)}function h(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:h,pushLight:c,pushShadow:d}}function p1(s){let e=new WeakMap;function n(o,c=0){const d=e.get(o);let f;return d===void 0?(f=new bm(s),e.set(o,[f])):c>=d.length?(f=new bm(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class m1 extends Ys{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=dx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class g1 extends Ys{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v1=`uniform sampler2D shadow_pass;
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
}`;function x1(s,e,n){let r=new qd;const o=new Ct,c=new Ct,d=new Vt,f=new m1({depthPacking:fx}),h=new g1,m={},g=n.maxTextureSize,x={[Sr]:Ln,[Ln]:Sr,[zi]:zi},v=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:_1,fragmentShader:v1}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new Si;E.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new vi(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sg;let _=this.type;this.render=function(H,O,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const R=s.getRenderTarget(),C=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(xr),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const q=_!==ki&&this.type===ki,ae=_===ki&&this.type!==ki;for(let de=0,oe=H.length;de<oe;de++){const le=H[de],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const ue=B.getFrameExtents();if(o.multiply(ue),c.copy(B.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/ue.x),o.x=c.x*ue.x,B.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/ue.y),o.y=c.y*ue.y,B.mapSize.y=c.y)),B.map===null||q===!0||ae===!0){const F=this.type!==ki?{minFilter:li,magFilter:li}:{};B.map!==null&&B.map.dispose(),B.map=new Kr(o.x,o.y,F),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const te=B.getViewportCount();for(let F=0;F<te;F++){const J=B.getViewport(F);d.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),Z.viewport(d),B.updateMatrices(le,F),r=B.getFrustum(),P(O,k,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===ki&&U(B,k),B.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(R,C,L)};function U(H,O){const k=e.update(T);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Kr(o.x,o.y)),v.uniforms.shadow_pass.value=H.map.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(O,null,k,v,T,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(O,null,k,S,T,null)}function I(H,O,k,R){let C=null;const L=k.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(L!==void 0)C=L;else if(C=k.isPointLight===!0?h:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const Z=C.uuid,q=O.uuid;let ae=m[Z];ae===void 0&&(ae={},m[Z]=ae);let de=ae[q];de===void 0&&(de=C.clone(),ae[q]=de,O.addEventListener("dispose",K)),C=de}if(C.visible=O.visible,C.wireframe=O.wireframe,R===ki?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:x[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Z=s.properties.get(C);Z.light=k}return C}function P(H,O,k,R,C){if(H.visible===!1)return;if(H.layers.test(O.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===ki)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,H.matrixWorld);const q=e.update(H),ae=H.material;if(Array.isArray(ae)){const de=q.groups;for(let oe=0,le=de.length;oe<le;oe++){const B=de[oe],ue=ae[B.materialIndex];if(ue&&ue.visible){const te=I(H,ue,R,C);H.onBeforeShadow(s,H,O,k,q,te,B),s.renderBufferDirect(k,null,q,te,H,B),H.onAfterShadow(s,H,O,k,q,te,B)}}}else if(ae.visible){const de=I(H,ae,R,C);H.onBeforeShadow(s,H,O,k,q,de,null),s.renderBufferDirect(k,null,q,de,H,null),H.onAfterShadow(s,H,O,k,q,de,null)}}const Z=H.children;for(let q=0,ae=Z.length;q<ae;q++)P(Z[q],O,k,R,C)}function K(H){H.target.removeEventListener("dispose",K);for(const k in m){const R=m[k],C=H.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const y1={[ed]:td,[nd]:sd,[id]:ad,[zs]:rd,[td]:ed,[sd]:nd,[ad]:id,[rd]:zs};function S1(s,e){function n(){let G=!1;const be=new Vt;let ce=null;const pe=new Vt(0,0,0,0);return{setMask:function(Ne){ce!==Ne&&!G&&(s.colorMask(Ne,Ne,Ne,Ne),ce=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,Pe,ot,It,Xt){Xt===!0&&(Ne*=It,Pe*=It,ot*=It),be.set(Ne,Pe,ot,It),pe.equals(be)===!1&&(s.clearColor(Ne,Pe,ot,It),pe.copy(be))},reset:function(){G=!1,ce=null,pe.set(-1,0,0,0)}}}function r(){let G=!1,be=!1,ce=null,pe=null,Ne=null;return{setReversed:function(Pe){if(be!==Pe){const ot=e.get("EXT_clip_control");be?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const It=Ne;Ne=null,this.setClear(It)}be=Pe},getReversed:function(){return be},setTest:function(Pe){Pe?xe(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Pe){ce!==Pe&&!G&&(s.depthMask(Pe),ce=Pe)},setFunc:function(Pe){if(be&&(Pe=y1[Pe]),pe!==Pe){switch(Pe){case ed:s.depthFunc(s.NEVER);break;case td:s.depthFunc(s.ALWAYS);break;case nd:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case id:s.depthFunc(s.EQUAL);break;case rd:s.depthFunc(s.GEQUAL);break;case sd:s.depthFunc(s.GREATER);break;case ad:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){Ne!==Pe&&(be&&(Pe=1-Pe),s.clearDepth(Pe),Ne=Pe)},reset:function(){G=!1,ce=null,pe=null,Ne=null,be=!1}}}function o(){let G=!1,be=null,ce=null,pe=null,Ne=null,Pe=null,ot=null,It=null,Xt=null;return{setTest:function(xt){G||(xt?xe(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(xt){be!==xt&&!G&&(s.stencilMask(xt),be=xt)},setFunc:function(xt,Sn,mn){(ce!==xt||pe!==Sn||Ne!==mn)&&(s.stencilFunc(xt,Sn,mn),ce=xt,pe=Sn,Ne=mn)},setOp:function(xt,Sn,mn){(Pe!==xt||ot!==Sn||It!==mn)&&(s.stencilOp(xt,Sn,mn),Pe=xt,ot=Sn,It=mn)},setLocked:function(xt){G=xt},setClear:function(xt){Xt!==xt&&(s.clearStencil(xt),Xt=xt)},reset:function(){G=!1,be=null,ce=null,pe=null,Ne=null,Pe=null,ot=null,It=null,Xt=null}}}const c=new n,d=new r,f=new o,h=new WeakMap,m=new WeakMap;let g={},x={},v=new WeakMap,S=[],E=null,T=!1,y=null,_=null,U=null,I=null,P=null,K=null,H=null,O=new vt(0,0,0),k=0,R=!1,C=null,L=null,Z=null,q=null,ae=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,le=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(B)[1]),oe=le>=1):B.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),oe=le>=2);let ue=null,te={};const F=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),Le=new Vt().fromArray(F),Q=new Vt().fromArray(J);function fe(G,be,ce,pe){const Ne=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(G,Pe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<ce;ot++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(be+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return Pe}const Se={};Se[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),xe(s.DEPTH_TEST),d.setFunc(zs),mt(!1),ft(Np),xe(s.CULL_FACE),X(xr);function xe(G){g[G]!==!0&&(s.enable(G),g[G]=!0)}function Ae(G){g[G]!==!1&&(s.disable(G),g[G]=!1)}function Ie(G,be){return x[G]!==be?(s.bindFramebuffer(G,be),x[G]=be,G===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=be),G===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=be),!0):!1}function Ke(G,be){let ce=S,pe=!1;if(G){ce=v.get(be),ce===void 0&&(ce=[],v.set(be,ce));const Ne=G.textures;if(ce.length!==Ne.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,ot=Ne.length;Pe<ot;Pe++)ce[Pe]=s.COLOR_ATTACHMENT0+Pe;ce.length=Ne.length,pe=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,pe=!0);pe&&s.drawBuffers(ce)}function Ze(G){return E!==G?(s.useProgram(G),E=G,!0):!1}const qe={[Xr]:s.FUNC_ADD,[kv]:s.FUNC_SUBTRACT,[zv]:s.FUNC_REVERSE_SUBTRACT};qe[Bv]=s.MIN,qe[Hv]=s.MAX;const Mt={[Vv]:s.ZERO,[Gv]:s.ONE,[Wv]:s.SRC_COLOR,[Qu]:s.SRC_ALPHA,[Kv]:s.SRC_ALPHA_SATURATE,[Yv]:s.DST_COLOR,[Xv]:s.DST_ALPHA,[jv]:s.ONE_MINUS_SRC_COLOR,[Ju]:s.ONE_MINUS_SRC_ALPHA,[$v]:s.ONE_MINUS_DST_COLOR,[qv]:s.ONE_MINUS_DST_ALPHA,[Zv]:s.CONSTANT_COLOR,[Qv]:s.ONE_MINUS_CONSTANT_COLOR,[Jv]:s.CONSTANT_ALPHA,[ex]:s.ONE_MINUS_CONSTANT_ALPHA};function X(G,be,ce,pe,Ne,Pe,ot,It,Xt,xt){if(G===xr){T===!0&&(Ae(s.BLEND),T=!1);return}if(T===!1&&(xe(s.BLEND),T=!0),G!==Ov){if(G!==y||xt!==R){if((_!==Xr||P!==Xr)&&(s.blendEquation(s.FUNC_ADD),_=Xr,P=Xr),xt)switch(G){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dp:s.blendFunc(s.ONE,s.ONE);break;case Ip:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Up:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ip:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Up:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}U=null,I=null,K=null,H=null,O.set(0,0,0),k=0,y=G,R=xt}return}Ne=Ne||be,Pe=Pe||ce,ot=ot||pe,(be!==_||Ne!==P)&&(s.blendEquationSeparate(qe[be],qe[Ne]),_=be,P=Ne),(ce!==U||pe!==I||Pe!==K||ot!==H)&&(s.blendFuncSeparate(Mt[ce],Mt[pe],Mt[Pe],Mt[ot]),U=ce,I=pe,K=Pe,H=ot),(It.equals(O)===!1||Xt!==k)&&(s.blendColor(It.r,It.g,It.b,Xt),O.copy(It),k=Xt),y=G,R=!1}function pn(G,be){G.side===zi?Ae(s.CULL_FACE):xe(s.CULL_FACE);let ce=G.side===Ln;be&&(ce=!ce),mt(ce),G.blending===Fs&&G.transparent===!1?X(xr):X(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),c.setMask(G.colorWrite);const pe=G.stencilWrite;f.setTest(pe),pe&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Rt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(G){C!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),C=G)}function ft(G){G!==Uv?(xe(s.CULL_FACE),G!==L&&(G===Np?s.cullFace(s.BACK):G===Fv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),L=G}function Qe(G){G!==Z&&(oe&&s.lineWidth(G),Z=G)}function Rt(G,be,ce){G?(xe(s.POLYGON_OFFSET_FILL),(q!==be||ae!==ce)&&(s.polygonOffset(be,ce),q=be,ae=ce)):Ae(s.POLYGON_OFFSET_FILL)}function Ye(G){G?xe(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function N(G){G===void 0&&(G=s.TEXTURE0+de-1),ue!==G&&(s.activeTexture(G),ue=G)}function A(G,be,ce){ce===void 0&&(ue===null?ce=s.TEXTURE0+de-1:ce=ue);let pe=te[ce];pe===void 0&&(pe={type:void 0,texture:void 0},te[ce]=pe),(pe.type!==G||pe.texture!==be)&&(ue!==ce&&(s.activeTexture(ce),ue=ce),s.bindTexture(G,be||Se[G]),pe.type=G,pe.texture=be)}function ee(){const G=te[ue];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(G){Le.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Le.copy(G))}function ke(G){Q.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function ht(G,be){let ce=m.get(be);ce===void 0&&(ce=new WeakMap,m.set(be,ce));let pe=ce.get(G);pe===void 0&&(pe=s.getUniformBlockIndex(be,G.name),ce.set(G,pe))}function at(G,be){const pe=m.get(be).get(G);h.get(be)!==pe&&(s.uniformBlockBinding(be,pe,G.__bindingPointIndex),h.set(be,pe))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ue=null,te={},x={},v=new WeakMap,S=[],E=null,T=!1,y=null,_=null,U=null,I=null,P=null,K=null,H=null,O=new vt(0,0,0),k=0,R=!1,C=null,L=null,Z=null,q=null,ae=null,Le.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:xe,disable:Ae,bindFramebuffer:Ie,drawBuffers:Ke,useProgram:Ze,setBlending:X,setMaterial:pn,setFlipSided:mt,setCullFace:ft,setLineWidth:Qe,setPolygonOffset:Rt,setScissorTest:Ye,activeTexture:N,bindTexture:A,unbindTexture:ee,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:Oe,texImage3D:tt,updateUBOMapping:ht,uniformBlockBinding:at,texStorage2D:dt,texStorage3D:Me,texSubImage2D:he,texSubImage3D:Ve,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ue,scissor:nt,viewport:ke,reset:At}}function Rm(s,e,n,r){const o=M1(r);switch(n){case bg:return s*e;case Pg:return s*e;case Lg:return s*e*2;case Ng:return s*e/o.components*o.byteLength;case Wd:return s*e/o.components*o.byteLength;case Dg:return s*e*2/o.components*o.byteLength;case jd:return s*e*2/o.components*o.byteLength;case Rg:return s*e*3/o.components*o.byteLength;case oi:return s*e*4/o.components*o.byteLength;case Xd:return s*e*4/o.components*o.byteLength;case Sl:case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case El:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fd:case pd:return Math.max(s,16)*Math.max(e,8)/4;case dd:case hd:return Math.max(s,8)*Math.max(e,8)/2;case md:case gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case yd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Md:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case wd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Td:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case bd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Rd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ld:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Nd:case Dd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ig:case Id:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ud:case Fd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function M1(s){switch(s){case Wi:case Tg:return{byteLength:1,components:1};case Fa:case Ag:case ka:return{byteLength:2,components:1};case Vd:case Gd:return{byteLength:2,components:4};case $r:case Hd:case Hi:return{byteLength:4,components:1};case Cg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function E1(s,e,n,r,o,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ct,g=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,A){return S?new OffscreenCanvas(N,A):Oa("canvas")}function T(N,A,ee){let me=1;const _e=Ye(N);if((_e.width>ee||_e.height>ee)&&(me=ee/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const he=Math.floor(me*_e.width),Ve=Math.floor(me*_e.height);x===void 0&&(x=E(he,Ve));const Ce=A?E(he,Ve):x;return Ce.width=he,Ce.height=Ve,Ce.getContext("2d").drawImage(N,0,0,he,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+Ve+")."),Ce}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),N;return N}function y(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function U(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(N,A,ee,me,_e=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let he=A;if(A===s.RED&&(ee===s.FLOAT&&(he=s.R32F),ee===s.HALF_FLOAT&&(he=s.R16F),ee===s.UNSIGNED_BYTE&&(he=s.R8)),A===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.R8UI),ee===s.UNSIGNED_SHORT&&(he=s.R16UI),ee===s.UNSIGNED_INT&&(he=s.R32UI),ee===s.BYTE&&(he=s.R8I),ee===s.SHORT&&(he=s.R16I),ee===s.INT&&(he=s.R32I)),A===s.RG&&(ee===s.FLOAT&&(he=s.RG32F),ee===s.HALF_FLOAT&&(he=s.RG16F),ee===s.UNSIGNED_BYTE&&(he=s.RG8)),A===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.RG8UI),ee===s.UNSIGNED_SHORT&&(he=s.RG16UI),ee===s.UNSIGNED_INT&&(he=s.RG32UI),ee===s.BYTE&&(he=s.RG8I),ee===s.SHORT&&(he=s.RG16I),ee===s.INT&&(he=s.RG32I)),A===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(he=s.RGB16UI),ee===s.UNSIGNED_INT&&(he=s.RGB32UI),ee===s.BYTE&&(he=s.RGB8I),ee===s.SHORT&&(he=s.RGB16I),ee===s.INT&&(he=s.RGB32I)),A===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),ee===s.UNSIGNED_INT&&(he=s.RGBA32UI),ee===s.BYTE&&(he=s.RGBA8I),ee===s.SHORT&&(he=s.RGBA16I),ee===s.INT&&(he=s.RGBA32I)),A===s.RGB&&ee===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),A===s.RGBA){const Ve=_e?Nl:St.getTransfer(me);ee===s.FLOAT&&(he=s.RGBA32F),ee===s.HALF_FLOAT&&(he=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(he=Ve===Lt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function P(N,A){let ee;return N?A===null||A===$r||A===Vs?ee=s.DEPTH24_STENCIL8:A===Hi?ee=s.DEPTH32F_STENCIL8:A===Fa&&(ee=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===$r||A===Vs?ee=s.DEPTH_COMPONENT24:A===Hi?ee=s.DEPTH_COMPONENT32F:A===Fa&&(ee=s.DEPTH_COMPONENT16),ee}function K(N,A){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==li&&N.minFilter!==_i?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function H(N){const A=N.target;A.removeEventListener("dispose",H),k(A),A.isVideoTexture&&g.delete(A)}function O(N){const A=N.target;A.removeEventListener("dispose",O),C(A)}function k(N){const A=r.get(N);if(A.__webglInit===void 0)return;const ee=N.source,me=v.get(ee);if(me){const _e=me[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&R(N),Object.keys(me).length===0&&v.delete(ee)}r.remove(N)}function R(N){const A=r.get(N);s.deleteTexture(A.__webglTexture);const ee=N.source,me=v.get(ee);delete me[A.__cacheKey],d.memory.textures--}function C(N){const A=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(A.__webglFramebuffer[me]))for(let _e=0;_e<A.__webglFramebuffer[me].length;_e++)s.deleteFramebuffer(A.__webglFramebuffer[me][_e]);else s.deleteFramebuffer(A.__webglFramebuffer[me]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[me])}else{if(Array.isArray(A.__webglFramebuffer))for(let me=0;me<A.__webglFramebuffer.length;me++)s.deleteFramebuffer(A.__webglFramebuffer[me]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let me=0;me<A.__webglColorRenderbuffer.length;me++)A.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[me]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ee=N.textures;for(let me=0,_e=ee.length;me<_e;me++){const he=r.get(ee[me]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),d.memory.textures--),r.remove(ee[me])}r.remove(N)}let L=0;function Z(){L=0}function q(){const N=L;return N>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),L+=1,N}function ae(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function de(N,A){const ee=r.get(N);if(N.isVideoTexture&&Qe(N),N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){const me=N.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(ee,N,A);return}}n.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+A)}function oe(N,A){const ee=r.get(N);if(N.version>0&&ee.__version!==N.version){Q(ee,N,A);return}n.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+A)}function le(N,A){const ee=r.get(N);if(N.version>0&&ee.__version!==N.version){Q(ee,N,A);return}n.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+A)}function B(N,A){const ee=r.get(N);if(N.version>0&&ee.__version!==N.version){fe(ee,N,A);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+A)}const ue={[cd]:s.REPEAT,[Bi]:s.CLAMP_TO_EDGE,[ud]:s.MIRRORED_REPEAT},te={[li]:s.NEAREST,[ux]:s.NEAREST_MIPMAP_NEAREST,[Zo]:s.NEAREST_MIPMAP_LINEAR,[_i]:s.LINEAR,[xu]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},F={[px]:s.NEVER,[yx]:s.ALWAYS,[mx]:s.LESS,[Fg]:s.LEQUAL,[gx]:s.EQUAL,[xx]:s.GEQUAL,[_x]:s.GREATER,[vx]:s.NOTEQUAL};function J(N,A){if(A.type===Hi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===_i||A.magFilter===xu||A.magFilter===Zo||A.magFilter===Yr||A.minFilter===_i||A.minFilter===xu||A.minFilter===Zo||A.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ue[A.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ue[A.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ue[A.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,te[A.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,te[A.minFilter]),A.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,F[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===li||A.minFilter!==Zo&&A.minFilter!==Yr||A.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Le(N,A){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",H));const me=A.source;let _e=v.get(me);_e===void 0&&(_e={},v.set(me,_e));const he=ae(A);if(he!==N.__cacheKey){_e[he]===void 0&&(_e[he]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ee=!0),_e[he].usedTimes++;const Ve=_e[N.__cacheKey];Ve!==void 0&&(_e[N.__cacheKey].usedTimes--,Ve.usedTimes===0&&R(A)),N.__cacheKey=he,N.__webglTexture=_e[he].texture}return ee}function Q(N,A,ee){let me=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(me=s.TEXTURE_3D);const _e=Le(N,A),he=A.source;n.bindTexture(me,N.__webglTexture,s.TEXTURE0+ee);const Ve=r.get(he);if(he.version!==Ve.__version||_e===!0){n.activeTexture(s.TEXTURE0+ee);const Ce=St.getPrimaries(St.workingColorSpace),Ue=A.colorSpace===vr?null:St.getPrimaries(A.colorSpace),dt=A.colorSpace===vr||Ce===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Me=T(A.image,!1,o.maxTextureSize);Me=Rt(A,Me);const Oe=c.convert(A.format,A.colorSpace),tt=c.convert(A.type);let nt=I(A.internalFormat,Oe,tt,A.colorSpace,A.isVideoTexture);J(me,A);let ke;const ht=A.mipmaps,at=A.isVideoTexture!==!0,At=Ve.__version===void 0||_e===!0,G=he.dataReady,be=K(A,Me);if(A.isDepthTexture)nt=P(A.format===Gs,A.type),At&&(at?n.texStorage2D(s.TEXTURE_2D,1,nt,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,nt,Me.width,Me.height,0,Oe,tt,null));else if(A.isDataTexture)if(ht.length>0){at&&At&&n.texStorage2D(s.TEXTURE_2D,be,nt,ht[0].width,ht[0].height);for(let ce=0,pe=ht.length;ce<pe;ce++)ke=ht[ce],at?G&&n.texSubImage2D(s.TEXTURE_2D,ce,0,0,ke.width,ke.height,Oe,tt,ke.data):n.texImage2D(s.TEXTURE_2D,ce,nt,ke.width,ke.height,0,Oe,tt,ke.data);A.generateMipmaps=!1}else at?(At&&n.texStorage2D(s.TEXTURE_2D,be,nt,Me.width,Me.height),G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,tt,Me.data)):n.texImage2D(s.TEXTURE_2D,0,nt,Me.width,Me.height,0,Oe,tt,Me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){at&&At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,be,nt,ht[0].width,ht[0].height,Me.depth);for(let ce=0,pe=ht.length;ce<pe;ce++)if(ke=ht[ce],A.format!==oi)if(Oe!==null)if(at){if(G)if(A.layerUpdates.size>0){const Ne=Rm(ke.width,ke.height,A.format,A.type);for(const Pe of A.layerUpdates){const ot=ke.data.subarray(Pe*Ne/ke.data.BYTES_PER_ELEMENT,(Pe+1)*Ne/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,Pe,ke.width,ke.height,1,Oe,ot)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,ke.width,ke.height,Me.depth,Oe,ke.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,nt,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?G&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,ke.width,ke.height,Me.depth,Oe,tt,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ce,nt,ke.width,ke.height,Me.depth,0,Oe,tt,ke.data)}else{at&&At&&n.texStorage2D(s.TEXTURE_2D,be,nt,ht[0].width,ht[0].height);for(let ce=0,pe=ht.length;ce<pe;ce++)ke=ht[ce],A.format!==oi?Oe!==null?at?G&&n.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,ce,nt,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?G&&n.texSubImage2D(s.TEXTURE_2D,ce,0,0,ke.width,ke.height,Oe,tt,ke.data):n.texImage2D(s.TEXTURE_2D,ce,nt,ke.width,ke.height,0,Oe,tt,ke.data)}else if(A.isDataArrayTexture)if(at){if(At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,be,nt,Me.width,Me.height,Me.depth),G)if(A.layerUpdates.size>0){const ce=Rm(Me.width,Me.height,A.format,A.type);for(const pe of A.layerUpdates){const Ne=Me.data.subarray(pe*ce/Me.data.BYTES_PER_ELEMENT,(pe+1)*ce/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Oe,tt,Ne)}A.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,tt,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,Me.width,Me.height,Me.depth,0,Oe,tt,Me.data);else if(A.isData3DTexture)at?(At&&n.texStorage3D(s.TEXTURE_3D,be,nt,Me.width,Me.height,Me.depth),G&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,tt,Me.data)):n.texImage3D(s.TEXTURE_3D,0,nt,Me.width,Me.height,Me.depth,0,Oe,tt,Me.data);else if(A.isFramebufferTexture){if(At)if(at)n.texStorage2D(s.TEXTURE_2D,be,nt,Me.width,Me.height);else{let ce=Me.width,pe=Me.height;for(let Ne=0;Ne<be;Ne++)n.texImage2D(s.TEXTURE_2D,Ne,nt,ce,pe,0,Oe,tt,null),ce>>=1,pe>>=1}}else if(ht.length>0){if(at&&At){const ce=Ye(ht[0]);n.texStorage2D(s.TEXTURE_2D,be,nt,ce.width,ce.height)}for(let ce=0,pe=ht.length;ce<pe;ce++)ke=ht[ce],at?G&&n.texSubImage2D(s.TEXTURE_2D,ce,0,0,Oe,tt,ke):n.texImage2D(s.TEXTURE_2D,ce,nt,Oe,tt,ke);A.generateMipmaps=!1}else if(at){if(At){const ce=Ye(Me);n.texStorage2D(s.TEXTURE_2D,be,nt,ce.width,ce.height)}G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,tt,Me)}else n.texImage2D(s.TEXTURE_2D,0,nt,Oe,tt,Me);y(A)&&_(me),Ve.__version=he.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function fe(N,A,ee){if(A.image.length!==6)return;const me=Le(N,A),_e=A.source;n.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+ee);const he=r.get(_e);if(_e.version!==he.__version||me===!0){n.activeTexture(s.TEXTURE0+ee);const Ve=St.getPrimaries(St.workingColorSpace),Ce=A.colorSpace===vr?null:St.getPrimaries(A.colorSpace),Ue=A.colorSpace===vr||Ve===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const dt=A.isCompressedTexture||A.image[0].isCompressedTexture,Me=A.image[0]&&A.image[0].isDataTexture,Oe=[];for(let pe=0;pe<6;pe++)!dt&&!Me?Oe[pe]=T(A.image[pe],!0,o.maxCubemapSize):Oe[pe]=Me?A.image[pe].image:A.image[pe],Oe[pe]=Rt(A,Oe[pe]);const tt=Oe[0],nt=c.convert(A.format,A.colorSpace),ke=c.convert(A.type),ht=I(A.internalFormat,nt,ke,A.colorSpace),at=A.isVideoTexture!==!0,At=he.__version===void 0||me===!0,G=_e.dataReady;let be=K(A,tt);J(s.TEXTURE_CUBE_MAP,A);let ce;if(dt){at&&At&&n.texStorage2D(s.TEXTURE_CUBE_MAP,be,ht,tt.width,tt.height);for(let pe=0;pe<6;pe++){ce=Oe[pe].mipmaps;for(let Ne=0;Ne<ce.length;Ne++){const Pe=ce[Ne];A.format!==oi?nt!==null?at?G&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,0,0,Pe.width,Pe.height,nt,Pe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,ht,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,0,0,Pe.width,Pe.height,nt,ke,Pe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,ht,Pe.width,Pe.height,0,nt,ke,Pe.data)}}}else{if(ce=A.mipmaps,at&&At){ce.length>0&&be++;const pe=Ye(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,be,ht,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){at?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Oe[pe].width,Oe[pe].height,nt,ke,Oe[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,Oe[pe].width,Oe[pe].height,0,nt,ke,Oe[pe].data);for(let Ne=0;Ne<ce.length;Ne++){const ot=ce[Ne].image[pe].image;at?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,0,0,ot.width,ot.height,nt,ke,ot.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,ht,ot.width,ot.height,0,nt,ke,ot.data)}}else{at?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,nt,ke,Oe[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,nt,ke,Oe[pe]);for(let Ne=0;Ne<ce.length;Ne++){const Pe=ce[Ne];at?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,0,0,nt,ke,Pe.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,ht,nt,ke,Pe.image[pe])}}}y(A)&&_(s.TEXTURE_CUBE_MAP),he.__version=_e.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Se(N,A,ee,me,_e,he){const Ve=c.convert(ee.format,ee.colorSpace),Ce=c.convert(ee.type),Ue=I(ee.internalFormat,Ve,Ce,ee.colorSpace),dt=r.get(A),Me=r.get(ee);if(Me.__renderTarget=A,!dt.__hasExternalTextures){const Oe=Math.max(1,A.width>>he),tt=Math.max(1,A.height>>he);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,he,Ue,Oe,tt,A.depth,0,Ve,Ce,null):n.texImage2D(_e,he,Ue,Oe,tt,0,Ve,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,N),ft(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,_e,Me.__webglTexture,0,mt(A)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,_e,Me.__webglTexture,he),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(N,A,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,N),A.depthBuffer){const me=A.depthTexture,_e=me&&me.isDepthTexture?me.type:null,he=P(A.stencilBuffer,_e),Ve=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=mt(A);ft(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,he,A.width,A.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,he,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,he,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,N)}else{const me=A.textures;for(let _e=0;_e<me.length;_e++){const he=me[_e],Ve=c.convert(he.format,he.colorSpace),Ce=c.convert(he.type),Ue=I(he.internalFormat,Ve,Ce,he.colorSpace),dt=mt(A);ee&&ft(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Ue,A.width,A.height):ft(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Ue,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(A.depthTexture);me.__renderTarget=A,(!me.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),de(A.depthTexture,0);const _e=me.__webglTexture,he=mt(A);if(A.depthTexture.format===Os)ft(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(A.depthTexture.format===Gs)ft(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ie(N){const A=r.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const me=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),me){const _e=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),A.__depthDisposeCallback=_e}A.__boundDepthTexture=me}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Ae(A.__webglFramebuffer,N)}else if(ee){A.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[me]),A.__webglDepthbuffer[me]===void 0)A.__webglDepthbuffer[me]=s.createRenderbuffer(),xe(A.__webglDepthbuffer[me],N,!1);else{const _e=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,he)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),xe(A.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,_e)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(N,A,ee){const me=r.get(N);A!==void 0&&Se(me.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&Ie(N)}function Ze(N){const A=N.texture,ee=r.get(N),me=r.get(A);N.addEventListener("dispose",O);const _e=N.textures,he=N.isWebGLCubeRenderTarget===!0,Ve=_e.length>1;if(Ve||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=A.version,d.memory.textures++),he){ee.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer[Ce]=[];for(let Ue=0;Ue<A.mipmaps.length;Ue++)ee.__webglFramebuffer[Ce][Ue]=s.createFramebuffer()}else ee.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)ee.__webglFramebuffer[Ce]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Ce=0,Ue=_e.length;Ce<Ue;Ce++){const dt=r.get(_e[Ce]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),d.memory.textures++)}if(N.samples>0&&ft(N)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Ue=_e[Ce];ee.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce]);const dt=c.convert(Ue.format,Ue.colorSpace),Me=c.convert(Ue.type),Oe=I(Ue.internalFormat,dt,Me,Ue.colorSpace,N.isXRRenderTarget===!0),tt=mt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Oe,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(ee.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),J(s.TEXTURE_CUBE_MAP,A);for(let Ce=0;Ce<6;Ce++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)Se(ee.__webglFramebuffer[Ce][Ue],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue);else Se(ee.__webglFramebuffer[Ce],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(A)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let Ce=0,Ue=_e.length;Ce<Ue;Ce++){const dt=_e[Ce],Me=r.get(dt);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),J(s.TEXTURE_2D,dt),Se(ee.__webglFramebuffer,N,dt,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),y(dt)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ce=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,me.__webglTexture),J(Ce,A),A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)Se(ee.__webglFramebuffer[Ue],N,A,s.COLOR_ATTACHMENT0,Ce,Ue);else Se(ee.__webglFramebuffer,N,A,s.COLOR_ATTACHMENT0,Ce,0);y(A)&&_(Ce),n.unbindTexture()}N.depthBuffer&&Ie(N)}function qe(N){const A=N.textures;for(let ee=0,me=A.length;ee<me;ee++){const _e=A[ee];if(y(_e)){const he=U(N),Ve=r.get(_e).__webglTexture;n.bindTexture(he,Ve),_(he),n.unbindTexture()}}}const Mt=[],X=[];function pn(N){if(N.samples>0){if(ft(N)===!1){const A=N.textures,ee=N.width,me=N.height;let _e=s.COLOR_BUFFER_BIT;const he=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(N),Ce=A.length>1;if(Ce)for(let Ue=0;Ue<A.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ue=0;Ue<A.length;Ue++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const dt=r.get(A[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,ee,me,0,0,ee,me,_e,s.NEAREST),h===!0&&(Mt.length=0,X.length=0,Mt.push(s.COLOR_ATTACHMENT0+Ue),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Mt.push(he),X.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Mt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Ue=0;Ue<A.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const dt=r.get(A[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,dt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const A=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function mt(N){return Math.min(o.maxSamples,N.samples)}function ft(N){const A=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Qe(N){const A=d.render.frame;g.get(N)!==A&&(g.set(N,A),N.update())}function Rt(N,A){const ee=N.colorSpace,me=N.format,_e=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ee!==Xs&&ee!==vr&&(St.getTransfer(ee)===Lt?(me!==oi||_e!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),A}function Ye(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=q,this.resetTextureUnits=Z,this.setTexture2D=de,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=Ke,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ft}function w1(s,e){function n(r,o=vr){let c;const d=St.getTransfer(o);if(r===Wi)return s.UNSIGNED_BYTE;if(r===Vd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Gd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Cg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Tg)return s.BYTE;if(r===Ag)return s.SHORT;if(r===Fa)return s.UNSIGNED_SHORT;if(r===Hd)return s.INT;if(r===$r)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===ka)return s.HALF_FLOAT;if(r===bg)return s.ALPHA;if(r===Rg)return s.RGB;if(r===oi)return s.RGBA;if(r===Pg)return s.LUMINANCE;if(r===Lg)return s.LUMINANCE_ALPHA;if(r===Os)return s.DEPTH_COMPONENT;if(r===Gs)return s.DEPTH_STENCIL;if(r===Ng)return s.RED;if(r===Wd)return s.RED_INTEGER;if(r===Dg)return s.RG;if(r===jd)return s.RG_INTEGER;if(r===Xd)return s.RGBA_INTEGER;if(r===Sl||r===Ml||r===El||r===wl)if(d===Lt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Sl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ml)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Sl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ml)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dd||r===fd||r===hd||r===pd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===dd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===md||r===gd||r===_d)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===md||r===gd)return d===Lt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===_d)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===vd||r===xd||r===yd||r===Sd||r===Md||r===Ed||r===wd||r===Td||r===Ad||r===Cd||r===bd||r===Rd||r===Pd||r===Ld)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===vd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Md)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ed)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Td)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ad)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ld)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tl||r===Nd||r===Dd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Tl)return d===Lt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ig||r===Id||r===Ud||r===Fd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Tl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Id)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ud)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class T1 extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vl extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A1={type:"move"};class Yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,d=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,r),_=this._getHandJoint(m,T);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=g.position.distanceTo(x.position),S=.02,E=.005;m.inputState.pinching&&v>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(A1)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new vl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const C1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b1=`
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

}`;class R1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new yn,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Mr({vertexShader:C1,fragmentShader:b1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vi(new Ga(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P1 extends qs{constructor(e,n){super();const r=this;let o=null,c=1,d=null,f="local-floor",h=1,m=null,g=null,x=null,v=null,S=null,E=null;const T=new R1,y=n.getContextAttributes();let _=null,U=null;const I=[],P=[],K=new Ct;let H=null;const O=new Yn;O.viewport=new Vt;const k=new Yn;k.viewport=new Vt;const R=[O,k],C=new T1;let L=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=I[Q];return fe===void 0&&(fe=new Yu,I[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=I[Q];return fe===void 0&&(fe=new Yu,I[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=I[Q];return fe===void 0&&(fe=new Yu,I[Q]=fe),fe.getHandSpace()};function q(Q){const fe=P.indexOf(Q.inputSource);if(fe===-1)return;const Se=I[fe];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,m||d),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ae(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",ae),o.removeEventListener("inputsourceschange",de);for(let Q=0;Q<I.length;Q++){const fe=P[Q];fe!==null&&(P[Q]=null,I[Q].disconnect(fe))}L=null,Z=null,T.reset(),e.setRenderTarget(_),S=null,v=null,x=null,o=null,U=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(K.width,K.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",ae),o.addEventListener("inputsourceschange",de),y.xrCompatible!==!0&&await n.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(K),o.renderState.layers===void 0){const fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,fe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Kr(S.framebufferWidth,S.framebufferHeight,{format:oi,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let fe=null,Se=null,xe=null;y.depth&&(xe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=y.stencil?Gs:Os,Se=y.stencil?Vs:$r);const Ae={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:c};x=new XRWebGLBinding(o,n),v=x.createProjectionLayer(Ae),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new Kr(v.textureWidth,v.textureHeight,{format:oi,type:Wi,depthTexture:new Zg(v.textureWidth,v.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),m=null,d=await o.requestReferenceSpace(f),Le.setContext(o),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function de(Q){for(let fe=0;fe<Q.removed.length;fe++){const Se=Q.removed[fe],xe=P.indexOf(Se);xe>=0&&(P[xe]=null,I[xe].disconnect(Se))}for(let fe=0;fe<Q.added.length;fe++){const Se=Q.added[fe];let xe=P.indexOf(Se);if(xe===-1){for(let Ie=0;Ie<I.length;Ie++)if(Ie>=P.length){P.push(Se),xe=Ie;break}else if(P[Ie]===null){P[Ie]=Se,xe=Ie;break}if(xe===-1)break}const Ae=I[xe];Ae&&Ae.connect(Se)}}const oe=new ne,le=new ne;function B(Q,fe,Se){oe.setFromMatrixPosition(fe.matrixWorld),le.setFromMatrixPosition(Se.matrixWorld);const xe=oe.distanceTo(le),Ae=fe.projectionMatrix.elements,Ie=Se.projectionMatrix.elements,Ke=Ae[14]/(Ae[10]-1),Ze=Ae[14]/(Ae[10]+1),qe=(Ae[9]+1)/Ae[5],Mt=(Ae[9]-1)/Ae[5],X=(Ae[8]-1)/Ae[0],pn=(Ie[8]+1)/Ie[0],mt=Ke*X,ft=Ke*pn,Qe=xe/(-X+pn),Rt=Qe*-X;if(fe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Rt),Q.translateZ(Qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ye=Ke+Qe,N=Ze+Qe,A=mt-Rt,ee=ft+(xe-Rt),me=qe*Ze/N*Ye,_e=Mt*Ze/N*Ye;Q.projectionMatrix.makePerspective(A,ee,me,_e,Ye,N),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ue(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let fe=Q.near,Se=Q.far;T.texture!==null&&(T.depthNear>0&&(fe=T.depthNear),T.depthFar>0&&(Se=T.depthFar)),C.near=k.near=O.near=fe,C.far=k.far=O.far=Se,(L!==C.near||Z!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,Z=C.far),O.layers.mask=Q.layers.mask|2,k.layers.mask=Q.layers.mask|4,C.layers.mask=O.layers.mask|k.layers.mask;const xe=Q.parent,Ae=C.cameras;ue(C,xe);for(let Ie=0;Ie<Ae.length;Ie++)ue(Ae[Ie],xe);Ae.length===2?B(C,O,k):C.projectionMatrix.copy(O.projectionMatrix),te(Q,C,xe)};function te(Q,fe,Se){Se===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Od*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&S===null))return h},this.setFoveation=function(Q){h=Q,v!==null&&(v.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let F=null;function J(Q,fe){if(g=fe.getViewerPose(m||d),E=fe,g!==null){const Se=g.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let xe=!1;Se.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let Ie=0;Ie<Se.length;Ie++){const Ke=Se[Ie];let Ze=null;if(S!==null)Ze=S.getViewport(Ke);else{const Mt=x.getViewSubImage(v,Ke);Ze=Mt.viewport,Ie===0&&(e.setRenderTargetTextures(U,Mt.colorTexture,v.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(U))}let qe=R[Ie];qe===void 0&&(qe=new Yn,qe.layers.enable(Ie),qe.viewport=new Vt,R[Ie]=qe),qe.matrix.fromArray(Ke.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Ke.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ie===0&&(C.matrix.copy(qe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(qe)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=x.getDepthInformation(Se[0]);Ie&&Ie.isValid&&Ie.texture&&T.init(e,Ie,o.renderState)}}for(let Se=0;Se<I.length;Se++){const xe=P[Se],Ae=I[Se];xe!==null&&Ae!==void 0&&Ae.update(xe,fe,m||d)}F&&F(Q,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Le=new $g;Le.setAnimationLoop(J),this.setAnimationLoop=function(Q){F=Q},this.dispose=function(){}}}const Gr=new yi,L1=new Bt;function N1(s,e){function n(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,Xg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,U,I,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),x(y,_)):_.isMeshPhongMaterial?(c(y,_),g(y,_)):_.isMeshStandardMaterial?(c(y,_),v(y,_),_.isMeshPhysicalMaterial&&S(y,_,P)):_.isMeshMatcapMaterial?(c(y,_),E(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),T(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,U,I):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,n(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Ln&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,n(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Ln&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,n(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,n(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const U=e.get(_),I=U.envMap,P=U.envMapRotation;I&&(y.envMap.value=I,Gr.copy(P),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),y.envMapRotation.value.setFromMatrix4(L1.makeRotationFromEuler(Gr)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,U,I){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*U,y.scale.value=I*.5,_.map&&(y.map.value=_.map,n(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function v(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,U){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Ln&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function T(y,_){const U=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function D1(s,e,n,r){let o={},c={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,I){const P=I.program;r.uniformBlockBinding(U,P)}function m(U,I){let P=o[U.id];P===void 0&&(E(U),P=g(U),o[U.id]=P,U.addEventListener("dispose",y));const K=I.program;r.updateUBOMapping(U,K);const H=e.render.frame;c[U.id]!==H&&(v(U),c[U.id]=H)}function g(U){const I=x();U.__bindingPointIndex=I;const P=s.createBuffer(),K=U.__size,H=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,K,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,P),P}function x(){for(let U=0;U<f;U++)if(d.indexOf(U)===-1)return d.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const I=o[U.id],P=U.uniforms,K=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let H=0,O=P.length;H<O;H++){const k=Array.isArray(P[H])?P[H]:[P[H]];for(let R=0,C=k.length;R<C;R++){const L=k[R];if(S(L,H,R,K)===!0){const Z=L.__offset,q=Array.isArray(L.value)?L.value:[L.value];let ae=0;for(let de=0;de<q.length;de++){const oe=q[de],le=T(oe);typeof oe=="number"||typeof oe=="boolean"?(L.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,Z+ae,L.__data)):oe.isMatrix3?(L.__data[0]=oe.elements[0],L.__data[1]=oe.elements[1],L.__data[2]=oe.elements[2],L.__data[3]=0,L.__data[4]=oe.elements[3],L.__data[5]=oe.elements[4],L.__data[6]=oe.elements[5],L.__data[7]=0,L.__data[8]=oe.elements[6],L.__data[9]=oe.elements[7],L.__data[10]=oe.elements[8],L.__data[11]=0):(oe.toArray(L.__data,ae),ae+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,I,P,K){const H=U.value,O=I+"_"+P;if(K[O]===void 0)return typeof H=="number"||typeof H=="boolean"?K[O]=H:K[O]=H.clone(),!0;{const k=K[O];if(typeof H=="number"||typeof H=="boolean"){if(k!==H)return K[O]=H,!0}else if(k.equals(H)===!1)return k.copy(H),!0}return!1}function E(U){const I=U.uniforms;let P=0;const K=16;for(let O=0,k=I.length;O<k;O++){const R=Array.isArray(I[O])?I[O]:[I[O]];for(let C=0,L=R.length;C<L;C++){const Z=R[C],q=Array.isArray(Z.value)?Z.value:[Z.value];for(let ae=0,de=q.length;ae<de;ae++){const oe=q[ae],le=T(oe),B=P%K,ue=B%le.boundary,te=B+ue;P+=ue,te!==0&&K-te<le.storage&&(P+=K-te),Z.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=P,P+=le.storage}}}const H=P%K;return H>0&&(P+=K-H),U.__size=P,U.__cache={},this}function T(U){const I={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(I.boundary=4,I.storage=4):U.isVector2?(I.boundary=8,I.storage=8):U.isVector3||U.isColor?(I.boundary=16,I.storage=12):U.isVector4?(I.boundary=16,I.storage=16):U.isMatrix3?(I.boundary=48,I.storage=48):U.isMatrix4?(I.boundary=64,I.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),I}function y(U){const I=U.target;I.removeEventListener("dispose",y);const P=d.indexOf(I.__bindingPointIndex);d.splice(P,1),s.deleteBuffer(o[I.id]),delete o[I.id],delete c[I.id]}function _(){for(const U in o)s.deleteBuffer(o[U]);d=[],o={},c={}}return{bind:h,update:m,dispose:_}}class I1{constructor(e={}){const{canvas:n=Mx(),context:r=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=d;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,_=null;const U=[],I=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=yr,this.toneMappingExposure=1;const P=this;let K=!1,H=0,O=0,k=null,R=-1,C=null;const L=new Vt,Z=new Vt;let q=null;const ae=new vt(0);let de=0,oe=n.width,le=n.height,B=1,ue=null,te=null;const F=new Vt(0,0,oe,le),J=new Vt(0,0,oe,le);let Le=!1;const Q=new qd;let fe=!1,Se=!1;const xe=new Bt,Ae=new Bt,Ie=new ne,Ke=new Vt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Mt(){return k===null?B:1}let X=r;function pn(b,W){return n.getContext(b,W)}try{const b={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bd}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Ne,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),X===null){const W="webgl2";if(X=pn(W,b),X===null)throw pn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let mt,ft,Qe,Rt,Ye,N,A,ee,me,_e,he,Ve,Ce,Ue,dt,Me,Oe,tt,nt,ke,ht,at,At,G;function be(){mt=new zM(X),mt.init(),at=new w1(X,mt),ft=new DM(X,mt,e,at),Qe=new S1(X,mt),ft.reverseDepthBuffer&&v&&Qe.buffers.depth.setReversed(!0),Rt=new VM(X),Ye=new a1,N=new E1(X,mt,Qe,Ye,ft,at,Rt),A=new UM(P),ee=new kM(P),me=new $x(X),At=new LM(X,me),_e=new BM(X,me,Rt,At),he=new WM(X,_e,me,Rt),nt=new GM(X,ft,N),Me=new IM(Ye),Ve=new s1(P,A,ee,mt,ft,At,Me),Ce=new N1(P,Ye),Ue=new l1,dt=new p1(mt),tt=new PM(P,A,ee,Qe,he,S,h),Oe=new x1(P,he,ft),G=new D1(X,Rt,ft,Qe),ke=new NM(X,mt,Rt),ht=new HM(X,mt,Rt),Rt.programs=Ve.programs,P.capabilities=ft,P.extensions=mt,P.properties=Ye,P.renderLists=Ue,P.shadowMap=Oe,P.state=Qe,P.info=Rt}be();const ce=new P1(P,X);this.xr=ce,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const b=mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(oe,le,!1))},this.getSize=function(b){return b.set(oe,le)},this.setSize=function(b,W,re=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=b,le=W,n.width=Math.floor(b*B),n.height=Math.floor(W*B),re===!0&&(n.style.width=b+"px",n.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(oe*B,le*B).floor()},this.setDrawingBufferSize=function(b,W,re){oe=b,le=W,B=re,n.width=Math.floor(b*re),n.height=Math.floor(W*re),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(F)},this.setViewport=function(b,W,re,se){b.isVector4?F.set(b.x,b.y,b.z,b.w):F.set(b,W,re,se),Qe.viewport(L.copy(F).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,W,re,se){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,W,re,se),Qe.scissor(Z.copy(J).multiplyScalar(B).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(b){Qe.setScissorTest(Le=b)},this.setOpaqueSort=function(b){ue=b},this.setTransparentSort=function(b){te=b},this.getClearColor=function(b){return b.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(b=!0,W=!0,re=!0){let se=0;if(b){let j=!1;if(k!==null){const Te=k.texture.format;j=Te===Xd||Te===jd||Te===Wd}if(j){const Te=k.texture.type,Ee=Te===Wi||Te===$r||Te===Fa||Te===Vs||Te===Vd||Te===Gd,Ge=tt.getClearColor(),Be=tt.getClearAlpha(),it=Ge.r,st=Ge.g,We=Ge.b;Ee?(E[0]=it,E[1]=st,E[2]=We,E[3]=Be,X.clearBufferuiv(X.COLOR,0,E)):(T[0]=it,T[1]=st,T[2]=We,T[3]=Be,X.clearBufferiv(X.COLOR,0,T))}else se|=X.COLOR_BUFFER_BIT}W&&(se|=X.DEPTH_BUFFER_BIT),re&&(se|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Ne,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ue.dispose(),dt.dispose(),Ye.dispose(),A.dispose(),ee.dispose(),he.dispose(),At.dispose(),G.dispose(),Ve.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Zr),ce.removeEventListener("sessionend",ji),Mi.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),K=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),K=!1;const b=Rt.autoReset,W=Oe.enabled,re=Oe.autoUpdate,se=Oe.needsUpdate,j=Oe.type;be(),Rt.autoReset=b,Oe.enabled=W,Oe.autoUpdate=re,Oe.needsUpdate=se,Oe.type=j}function Pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ot(b){const W=b.target;W.removeEventListener("dispose",ot),It(W)}function It(b){Xt(b),Ye.remove(b)}function Xt(b){const W=Ye.get(b).programs;W!==void 0&&(W.forEach(function(re){Ve.releaseProgram(re)}),b.isShaderMaterial&&Ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,re,se,j,Te){W===null&&(W=Ze);const Ee=j.isMesh&&j.matrixWorld.determinant()<0,Ge=Xa(b,W,re,se,j);Qe.setMaterial(se,Ee);let Be=re.index,it=1;if(se.wireframe===!0){if(Be=_e.getWireframeAttribute(re),Be===void 0)return;it=2}const st=re.drawRange,We=re.attributes.position;let _t=st.start*it,Tt=(st.start+st.count)*it;Te!==null&&(_t=Math.max(_t,Te.start*it),Tt=Math.min(Tt,(Te.start+Te.count)*it)),Be!==null?(_t=Math.max(_t,0),Tt=Math.min(Tt,Be.count)):We!=null&&(_t=Math.max(_t,0),Tt=Math.min(Tt,We.count));const gt=Tt-_t;if(gt<0||gt===1/0)return;At.setup(j,se,Ge,re,Be);let an,lt=ke;if(Be!==null&&(an=me.get(Be),lt=ht,lt.setIndex(an)),j.isMesh)se.wireframe===!0?(Qe.setLineWidth(se.wireframeLinewidth*Mt()),lt.setMode(X.LINES)):lt.setMode(X.TRIANGLES);else if(j.isLine){let Xe=se.linewidth;Xe===void 0&&(Xe=1),Qe.setLineWidth(Xe*Mt()),j.isLineSegments?lt.setMode(X.LINES):j.isLineLoop?lt.setMode(X.LINE_LOOP):lt.setMode(X.LINE_STRIP)}else j.isPoints?lt.setMode(X.POINTS):j.isSprite&&lt.setMode(X.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)lt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Xe=j._multiDrawStarts,$n=j._multiDrawCounts,Et=j._multiDrawCount,on=Be?me.get(Be).bytesPerElement:1,Kn=Ye.get(se).currentProgram.getUniforms();for(let qt=0;qt<Et;qt++)Kn.setValue(X,"_gl_DrawID",qt),lt.render(Xe[qt]/on,$n[qt])}else if(j.isInstancedMesh)lt.renderInstances(_t,gt,j.count);else if(re.isInstancedBufferGeometry){const Xe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,$n=Math.min(re.instanceCount,Xe);lt.renderInstances(_t,gt,$n)}else lt.render(_t,gt)};function xt(b,W,re){b.transparent===!0&&b.side===zi&&b.forceSinglePass===!1?(b.side=Ln,b.needsUpdate=!0,Qr(b,W,re),b.side=Sr,b.needsUpdate=!0,Qr(b,W,re),b.side=zi):Qr(b,W,re)}this.compile=function(b,W,re=null){re===null&&(re=b),_=dt.get(re),_.init(W),I.push(_),re.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),b!==re&&b.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const se=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Te=j.material;if(Te)if(Array.isArray(Te))for(let Ee=0;Ee<Te.length;Ee++){const Ge=Te[Ee];xt(Ge,re,j),se.add(Ge)}else xt(Te,re,j),se.add(Te)}),I.pop(),_=null,se},this.compileAsync=function(b,W,re=null){const se=this.compile(b,W,re);return new Promise(j=>{function Te(){if(se.forEach(function(Ee){Ye.get(Ee).currentProgram.isReady()&&se.delete(Ee)}),se.size===0){j(b);return}setTimeout(Te,10)}mt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Sn=null;function mn(b){Sn&&Sn(b)}function Zr(){Mi.stop()}function ji(){Mi.start()}const Mi=new $g;Mi.setAnimationLoop(mn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(b){Sn=b,ce.setAnimationLoop(b),b===null?Mi.stop():Mi.start()},ce.addEventListener("sessionstart",Zr),ce.addEventListener("sessionend",ji),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(W),W=ce.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,W,k),_=dt.get(b,I.length),_.init(W),I.push(_),Ae.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(Ae),Se=this.localClippingEnabled,fe=Me.init(this.clippingPlanes,Se),y=Ue.get(b,U.length),y.init(),U.push(y),ce.enabled===!0&&ce.isPresenting===!0){const Te=P.xr.getDepthSensingMesh();Te!==null&&Ei(Te,W,-1/0,P.sortObjects)}Ei(b,W,0,P.sortObjects),y.finish(),P.sortObjects===!0&&y.sort(ue,te),qe=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,qe&&tt.addToRenderList(y,b),this.info.render.frame++,fe===!0&&Me.beginShadows();const re=_.state.shadowsArray;Oe.render(re,b,W),fe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=y.opaque,j=y.transmissive;if(_.setupLights(),W.isArrayCamera){const Te=W.cameras;if(j.length>0)for(let Ee=0,Ge=Te.length;Ee<Ge;Ee++){const Be=Te[Ee];wr(se,j,b,Be)}qe&&tt.render(b);for(let Ee=0,Ge=Te.length;Ee<Ge;Ee++){const Be=Te[Ee];Er(y,b,Be,Be.viewport)}}else j.length>0&&wr(se,j,b,W),qe&&tt.render(b),Er(y,b,W);k!==null&&(N.updateMultisampleRenderTarget(k),N.updateRenderTargetMipmap(k)),b.isScene===!0&&b.onAfterRender(P,b,W),At.resetDefaultState(),R=-1,C=null,I.pop(),I.length>0?(_=I[I.length-1],fe===!0&&Me.setGlobalState(P.clippingPlanes,_.state.camera)):_=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Ei(b,W,re,se){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)re=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){se&&Ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ae);const Ee=he.update(b),Ge=b.material;Ge.visible&&y.push(b,Ee,Ge,re,Ke.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const Ee=he.update(b),Ge=b.material;if(se&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ke.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ke.copy(Ee.boundingSphere.center)),Ke.applyMatrix4(b.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ge)){const Be=Ee.groups;for(let it=0,st=Be.length;it<st;it++){const We=Be[it],_t=Ge[We.materialIndex];_t&&_t.visible&&y.push(b,Ee,_t,re,Ke.z,We)}}else Ge.visible&&y.push(b,Ee,Ge,re,Ke.z,null)}}const Te=b.children;for(let Ee=0,Ge=Te.length;Ee<Ge;Ee++)Ei(Te[Ee],W,re,se)}function Er(b,W,re,se){const j=b.opaque,Te=b.transmissive,Ee=b.transparent;_.setupLightsView(re),fe===!0&&Me.setGlobalState(P.clippingPlanes,re),se&&Qe.viewport(L.copy(se)),j.length>0&&Xi(j,W,re),Te.length>0&&Xi(Te,W,re),Ee.length>0&&Xi(Ee,W,re),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function wr(b,W,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[se.id]===void 0&&(_.state.transmissionRenderTarget[se.id]=new Kr(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?ka:Wi,minFilter:Yr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const Te=_.state.transmissionRenderTarget[se.id],Ee=se.viewport||L;Te.setSize(Ee.z,Ee.w);const Ge=P.getRenderTarget();P.setRenderTarget(Te),P.getClearColor(ae),de=P.getClearAlpha(),de<1&&P.setClearColor(16777215,.5),P.clear(),qe&&tt.render(re);const Be=P.toneMapping;P.toneMapping=yr;const it=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),_.setupLightsView(se),fe===!0&&Me.setGlobalState(P.clippingPlanes,se),Xi(b,re,se),N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te),mt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let We=0,_t=W.length;We<_t;We++){const Tt=W[We],gt=Tt.object,an=Tt.geometry,lt=Tt.material,Xe=Tt.group;if(lt.side===zi&&gt.layers.test(se.layers)){const $n=lt.side;lt.side=Ln,lt.needsUpdate=!0,Wa(gt,re,se,an,lt,Xe),lt.side=$n,lt.needsUpdate=!0,st=!0}}st===!0&&(N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te))}P.setRenderTarget(Ge),P.setClearColor(ae,de),it!==void 0&&(se.viewport=it),P.toneMapping=Be}function Xi(b,W,re){const se=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Te=b.length;j<Te;j++){const Ee=b[j],Ge=Ee.object,Be=Ee.geometry,it=se===null?Ee.material:se,st=Ee.group;Ge.layers.test(re.layers)&&Wa(Ge,W,re,Be,it,st)}}function Wa(b,W,re,se,j,Te){b.onBeforeRender(P,W,re,se,j,Te),b.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(P,W,re,se,b,Te),j.transparent===!0&&j.side===zi&&j.forceSinglePass===!1?(j.side=Ln,j.needsUpdate=!0,P.renderBufferDirect(re,W,se,j,b,Te),j.side=Sr,j.needsUpdate=!0,P.renderBufferDirect(re,W,se,j,b,Te),j.side=zi):P.renderBufferDirect(re,W,se,j,b,Te),b.onAfterRender(P,W,re,se,j,Te)}function Qr(b,W,re){W.isScene!==!0&&(W=Ze);const se=Ye.get(b),j=_.state.lights,Te=_.state.shadowsArray,Ee=j.state.version,Ge=Ve.getParameters(b,j.state,Te,W,re),Be=Ve.getProgramCacheKey(Ge);let it=se.programs;se.environment=b.isMeshStandardMaterial?W.environment:null,se.fog=W.fog,se.envMap=(b.isMeshStandardMaterial?ee:A).get(b.envMap||se.environment),se.envMapRotation=se.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,it===void 0&&(b.addEventListener("dispose",ot),it=new Map,se.programs=it);let st=it.get(Be);if(st!==void 0){if(se.currentProgram===st&&se.lightsStateVersion===Ee)return ui(b,Ge),st}else Ge.uniforms=Ve.getUniforms(b),b.onBeforeCompile(Ge,P),st=Ve.acquireProgram(Ge,Be),it.set(Be,st),se.uniforms=Ge.uniforms;const We=se.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(We.clippingPlanes=Me.uniform),ui(b,Ge),se.needsLights=Ul(b),se.lightsStateVersion=Ee,se.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMap.value=j.state.directionalShadowMap,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotShadowMap.value=j.state.spotShadowMap,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMap.value=j.state.pointShadowMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),se.currentProgram=st,se.uniformsList=null,st}function ja(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=Al.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function ui(b,W){const re=Ye.get(b);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function Xa(b,W,re,se,j){W.isScene!==!0&&(W=Ze),N.resetTextureUnits();const Te=W.fog,Ee=se.isMeshStandardMaterial?W.environment:null,Ge=k===null?P.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Xs,Be=(se.isMeshStandardMaterial?ee:A).get(se.envMap||Ee),it=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,st=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),We=!!re.morphAttributes.position,_t=!!re.morphAttributes.normal,Tt=!!re.morphAttributes.color;let gt=yr;se.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(gt=P.toneMapping);const an=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,lt=an!==void 0?an.length:0,Xe=Ye.get(se),$n=_.state.lights;if(fe===!0&&(Se===!0||b!==C)){const gn=b===C&&se.id===R;Me.setState(se,b,gn)}let Et=!1;se.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==$n.state.version||Xe.outputColorSpace!==Ge||j.isBatchedMesh&&Xe.batching===!1||!j.isBatchedMesh&&Xe.batching===!0||j.isBatchedMesh&&Xe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Xe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Xe.instancing===!1||!j.isInstancedMesh&&Xe.instancing===!0||j.isSkinnedMesh&&Xe.skinning===!1||!j.isSkinnedMesh&&Xe.skinning===!0||j.isInstancedMesh&&Xe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Xe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Xe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Xe.instancingMorph===!1&&j.morphTexture!==null||Xe.envMap!==Be||se.fog===!0&&Xe.fog!==Te||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Me.numPlanes||Xe.numIntersection!==Me.numIntersection)||Xe.vertexAlphas!==it||Xe.vertexTangents!==st||Xe.morphTargets!==We||Xe.morphNormals!==_t||Xe.morphColors!==Tt||Xe.toneMapping!==gt||Xe.morphTargetsCount!==lt)&&(Et=!0):(Et=!0,Xe.__version=se.version);let on=Xe.currentProgram;Et===!0&&(on=Qr(se,W,j));let Kn=!1,qt=!1,di=!1;const Nt=on.getUniforms(),kn=Xe.uniforms;if(Qe.useProgram(on.program)&&(Kn=!0,qt=!0,di=!0),se.id!==R&&(R=se.id,qt=!0),Kn||C!==b){Qe.buffers.depth.getReversed()?(xe.copy(b.projectionMatrix),wx(xe),Tx(xe),Nt.setValue(X,"projectionMatrix",xe)):Nt.setValue(X,"projectionMatrix",b.projectionMatrix),Nt.setValue(X,"viewMatrix",b.matrixWorldInverse);const zn=Nt.map.cameraPosition;zn!==void 0&&zn.setValue(X,Ie.setFromMatrixPosition(b.matrixWorld)),ft.logarithmicDepthBuffer&&Nt.setValue(X,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Nt.setValue(X,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,qt=!0,di=!0)}if(j.isSkinnedMesh){Nt.setOptional(X,j,"bindMatrix"),Nt.setOptional(X,j,"bindMatrixInverse");const gn=j.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Nt.setValue(X,"boneTexture",gn.boneTexture,N))}j.isBatchedMesh&&(Nt.setOptional(X,j,"batchingTexture"),Nt.setValue(X,"batchingTexture",j._matricesTexture,N),Nt.setOptional(X,j,"batchingIdTexture"),Nt.setValue(X,"batchingIdTexture",j._indirectTexture,N),Nt.setOptional(X,j,"batchingColorTexture"),j._colorsTexture!==null&&Nt.setValue(X,"batchingColorTexture",j._colorsTexture,N));const wi=re.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&nt.update(j,re,on),(qt||Xe.receiveShadow!==j.receiveShadow)&&(Xe.receiveShadow=j.receiveShadow,Nt.setValue(X,"receiveShadow",j.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(kn.envMap.value=Be,kn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&W.environment!==null&&(kn.envMapIntensity.value=W.environmentIntensity),qt&&(Nt.setValue(X,"toneMappingExposure",P.toneMappingExposure),Xe.needsLights&&qa(kn,di),Te&&se.fog===!0&&Ce.refreshFogUniforms(kn,Te),Ce.refreshMaterialUniforms(kn,se,B,le,_.state.transmissionRenderTarget[b.id]),Al.upload(X,ja(Xe),kn,N)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Al.upload(X,ja(Xe),kn,N),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Nt.setValue(X,"center",j.center),Nt.setValue(X,"modelViewMatrix",j.modelViewMatrix),Nt.setValue(X,"normalMatrix",j.normalMatrix),Nt.setValue(X,"modelMatrix",j.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const gn=se.uniformsGroups;for(let zn=0,Mn=gn.length;zn<Mn;zn++){const Ya=gn[zn];G.update(Ya,on),G.bind(Ya,on)}}return on}function qa(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function Ul(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,W,re){Ye.get(b.texture).__webglTexture=W,Ye.get(b.depthTexture).__webglTexture=re;const se=Ye.get(b);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=re===void 0,se.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,W){const re=Ye.get(b);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,re=0){k=b,H=W,O=re;let se=!0,j=null,Te=!1,Ee=!1;if(b){const Be=Ye.get(b);if(Be.__useDefaultFramebuffer!==void 0)Qe.bindFramebuffer(X.FRAMEBUFFER,null),se=!1;else if(Be.__webglFramebuffer===void 0)N.setupRenderTarget(b);else if(Be.__hasExternalTextures)N.rebindTextures(b,Ye.get(b.texture).__webglTexture,Ye.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const We=b.depthTexture;if(Be.__boundDepthTexture!==We){if(We!==null&&Ye.has(We)&&(b.width!==We.image.width||b.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(b)}}const it=b.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ee=!0);const st=Ye.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(st[W])?j=st[W][re]:j=st[W],Te=!0):b.samples>0&&N.useMultisampledRTT(b)===!1?j=Ye.get(b).__webglMultisampledFramebuffer:Array.isArray(st)?j=st[re]:j=st,L.copy(b.viewport),Z.copy(b.scissor),q=b.scissorTest}else L.copy(F).multiplyScalar(B).floor(),Z.copy(J).multiplyScalar(B).floor(),q=Le;if(Qe.bindFramebuffer(X.FRAMEBUFFER,j)&&se&&Qe.drawBuffers(b,j),Qe.viewport(L),Qe.scissor(Z),Qe.setScissorTest(q),Te){const Be=Ye.get(b.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,re)}else if(Ee){const Be=Ye.get(b.texture),it=W||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Be.__webglTexture,re||0,it)}R=-1},this.readRenderTargetPixels=function(b,W,re,se,j,Te,Ee){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ge=Ge[Ee]),Ge){Qe.bindFramebuffer(X.FRAMEBUFFER,Ge);try{const Be=b.texture,it=Be.format,st=Be.type;if(!ft.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-se&&re>=0&&re<=b.height-j&&X.readPixels(W,re,se,j,at.convert(it),at.convert(st),Te)}finally{const Be=k!==null?Ye.get(k).__webglFramebuffer:null;Qe.bindFramebuffer(X.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,W,re,se,j,Te,Ee){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ge=Ge[Ee]),Ge){const Be=b.texture,it=Be.format,st=Be.type;if(!ft.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=b.width-se&&re>=0&&re<=b.height-j){Qe.bindFramebuffer(X.FRAMEBUFFER,Ge);const We=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.bufferData(X.PIXEL_PACK_BUFFER,Te.byteLength,X.STREAM_READ),X.readPixels(W,re,se,j,at.convert(it),at.convert(st),0);const _t=k!==null?Ye.get(k).__webglFramebuffer:null;Qe.bindFramebuffer(X.FRAMEBUFFER,_t);const Tt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Ex(X,Tt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Te),X.deleteBuffer(We),X.deleteSync(Tt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,W=null,re=0){b.isTexture!==!0&&(Ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1]);const se=Math.pow(2,-re),j=Math.floor(b.image.width*se),Te=Math.floor(b.image.height*se),Ee=W!==null?W.x:0,Ge=W!==null?W.y:0;N.setTexture2D(b,0),X.copyTexSubImage2D(X.TEXTURE_2D,re,0,0,Ee,Ge,j,Te),Qe.unbindTexture()},this.copyTextureToTexture=function(b,W,re=null,se=null,j=0){b.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,b=arguments[1],W=arguments[2],j=arguments[3]||0,re=null);let Te,Ee,Ge,Be,it,st,We,_t,Tt;const gt=b.isCompressedTexture?b.mipmaps[j]:b.image;re!==null?(Te=re.max.x-re.min.x,Ee=re.max.y-re.min.y,Ge=re.isBox3?re.max.z-re.min.z:1,Be=re.min.x,it=re.min.y,st=re.isBox3?re.min.z:0):(Te=gt.width,Ee=gt.height,Ge=gt.depth||1,Be=0,it=0,st=0),se!==null?(We=se.x,_t=se.y,Tt=se.z):(We=0,_t=0,Tt=0);const an=at.convert(W.format),lt=at.convert(W.type);let Xe;W.isData3DTexture?(N.setTexture3D(W,0),Xe=X.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(N.setTexture2DArray(W,0),Xe=X.TEXTURE_2D_ARRAY):(N.setTexture2D(W,0),Xe=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const $n=X.getParameter(X.UNPACK_ROW_LENGTH),Et=X.getParameter(X.UNPACK_IMAGE_HEIGHT),on=X.getParameter(X.UNPACK_SKIP_PIXELS),Kn=X.getParameter(X.UNPACK_SKIP_ROWS),qt=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,gt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,gt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Be),X.pixelStorei(X.UNPACK_SKIP_ROWS,it),X.pixelStorei(X.UNPACK_SKIP_IMAGES,st);const di=b.isDataArrayTexture||b.isData3DTexture,Nt=W.isDataArrayTexture||W.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const kn=Ye.get(b),wi=Ye.get(W),gn=Ye.get(kn.__renderTarget),zn=Ye.get(wi.__renderTarget);Qe.bindFramebuffer(X.READ_FRAMEBUFFER,gn.__webglFramebuffer),Qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let Mn=0;Mn<Ge;Mn++)di&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ye.get(b).__webglTexture,j,st+Mn),b.isDepthTexture?(Nt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ye.get(W).__webglTexture,j,Tt+Mn),X.blitFramebuffer(Be,it,Te,Ee,We,_t,Te,Ee,X.DEPTH_BUFFER_BIT,X.NEAREST)):Nt?X.copyTexSubImage3D(Xe,j,We,_t,Tt+Mn,Be,it,Te,Ee):X.copyTexSubImage2D(Xe,j,We,_t,Tt+Mn,Be,it,Te,Ee);Qe.bindFramebuffer(X.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Nt?b.isDataTexture||b.isData3DTexture?X.texSubImage3D(Xe,j,We,_t,Tt,Te,Ee,Ge,an,lt,gt.data):W.isCompressedArrayTexture?X.compressedTexSubImage3D(Xe,j,We,_t,Tt,Te,Ee,Ge,an,gt.data):X.texSubImage3D(Xe,j,We,_t,Tt,Te,Ee,Ge,an,lt,gt):b.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,j,We,_t,Te,Ee,an,lt,gt.data):b.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,j,We,_t,gt.width,gt.height,an,gt.data):X.texSubImage2D(X.TEXTURE_2D,j,We,_t,Te,Ee,an,lt,gt);X.pixelStorei(X.UNPACK_ROW_LENGTH,$n),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Et),X.pixelStorei(X.UNPACK_SKIP_PIXELS,on),X.pixelStorei(X.UNPACK_SKIP_ROWS,Kn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,qt),j===0&&W.generateMipmaps&&X.generateMipmap(Xe),Qe.unbindTexture()},this.copyTextureToTexture3D=function(b,W,re=null,se=null,j=0){return b.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,se=arguments[1]||null,b=arguments[2],W=arguments[3],j=arguments[4]||0),Ia('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,W,re,se,j)},this.initRenderTarget=function(b){Ye.get(b).__webglFramebuffer===void 0&&N.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?N.setTextureCube(b,0):b.isData3DTexture?N.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?N.setTexture2DArray(b,0):N.setTexture2D(b,0),Qe.unbindTexture()},this.resetState=function(){H=0,O=0,k=null,Qe.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),n.unpackColorSpace=St._getUnpackColorSpace()}}class U1 extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class $d extends Ys{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rl=new ne,Pl=new ne,Pm=new Bt,Da=new Bg,xl=new Dl,$u=new ne,Lm=new ne;class n0 extends sn{constructor(e=new Si,n=new $d){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)Rl.fromBufferAttribute(n,o-1),Pl.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Rl.distanceTo(Pl);e.setAttribute("lineDistance",new ci(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(o),xl.radius+=c,e.ray.intersectsSphere(xl)===!1)return;Pm.copy(o).invert(),Da.copy(e.ray).applyMatrix4(Pm);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=this.isLineSegments?2:1,g=r.index,v=r.attributes.position;if(g!==null){const S=Math.max(0,d.start),E=Math.min(g.count,d.start+d.count);for(let T=S,y=E-1;T<y;T+=m){const _=g.getX(T),U=g.getX(T+1),I=yl(this,e,Da,h,_,U);I&&n.push(I)}if(this.isLineLoop){const T=g.getX(E-1),y=g.getX(S),_=yl(this,e,Da,h,T,y);_&&n.push(_)}}else{const S=Math.max(0,d.start),E=Math.min(v.count,d.start+d.count);for(let T=S,y=E-1;T<y;T+=m){const _=yl(this,e,Da,h,T,T+1);_&&n.push(_)}if(this.isLineLoop){const T=yl(this,e,Da,h,E-1,S);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function yl(s,e,n,r,o,c){const d=s.geometry.attributes.position;if(Rl.fromBufferAttribute(d,o),Pl.fromBufferAttribute(d,c),n.distanceSqToSegment(Rl,Pl,$u,Lm)>r)return;$u.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo($u);if(!(h<e.near||h>e.far))return{distance:h,point:Lm.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Nm=new ne,Dm=new ne;class F1 extends n0{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)Nm.fromBufferAttribute(n,o),Dm.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Nm.distanceTo(Dm);e.setAttribute("lineDistance",new ci(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class O1 extends Ys{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ug,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Im={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class k1{constructor(e,n,r){const o=this;let c=!1,d=0,f=0,h;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(g){f++,c===!1&&o.onStart!==void 0&&o.onStart(g,d,f),c=!0},this.itemEnd=function(g){d++,o.onProgress!==void 0&&o.onProgress(g,d,f),d===f&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,x){return m.push(g,x),this},this.removeHandler=function(g){const x=m.indexOf(g);return x!==-1&&m.splice(x,2),this},this.getHandler=function(g){for(let x=0,v=m.length;x<v;x+=2){const S=m[x],E=m[x+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null}}}const z1=new k1;class Kd{constructor(e){this.manager=e!==void 0?e:z1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(o,c){r.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Kd.DEFAULT_MATERIAL_NAME="__DEFAULT";class B1 extends Kd{constructor(e){super(e)}load(e,n,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,d=Im.get(e);if(d!==void 0)return c.manager.itemStart(e),setTimeout(function(){n&&n(d),c.manager.itemEnd(e)},0),d;const f=Oa("img");function h(){g(),Im.add(e,this),n&&n(this),c.manager.itemEnd(e)}function m(x){g(),o&&o(x),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),c.manager.itemStart(e),f.src=e,f}}class H1 extends Kd{constructor(e){super(e)}load(e,n,r,o){const c=new yn,d=new B1(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(f){c.image=f,c.needsUpdate=!0,n!==void 0&&n(c)},r,o),c}}class i0 extends sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Ku=new Bt,Um=new ne,Fm=new ne;class V1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qd,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Um.setFromMatrixPosition(e.matrixWorld),n.position.copy(Um),Fm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Fm),n.updateMatrixWorld(),Ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class G1 extends V1{constructor(){super(new Kg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Om extends i0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new G1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class W1 extends i0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class j1 extends F1{constructor(e=10,n=10,r=4473924,o=8947848){r=new vt(r),o=new vt(o);const c=n/2,d=e/n,f=e/2,h=[],m=[];for(let v=0,S=0,E=-f;v<=n;v++,E+=d){h.push(-f,0,E,f,0,E),h.push(E,0,-f,E,0,f);const T=v===c?r:o;T.toArray(m,S),S+=3,T.toArray(m,S),S+=3,T.toArray(m,S),S+=3,T.toArray(m,S),S+=3}const g=new Si;g.setAttribute("position",new ci(h,3)),g.setAttribute("color",new ci(m,3));const x=new $d({vertexColors:!0,toneMapped:!1});super(g,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);const X1=({heightmapUrl:s,textureUrl:e,pathCoords:n,elevationRange:r})=>{const o=$e.useRef(null),[c,d]=$e.useState(!1),[f,h]=$e.useState(1.8),[m,g]=$e.useState(!1),x=$e.useRef(null),v=$e.useRef(null),S=$e.useRef(null),E=$e.useRef(null),T=$e.useRef(null),y=$e.useRef(null),_=$e.useRef(!1),U=$e.useRef(!1),I=$e.useRef({x:0,y:0}),P=$e.useRef({radius:160,theta:Math.PI/4,phi:Math.PI/3.2}),K=$e.useRef(new ne(0,0,0)),H=()=>{if(!v.current)return;const{radius:k,theta:R,phi:C}=P.current,L=K.current;v.current.position.x=L.x+k*Math.sin(C)*Math.sin(R),v.current.position.y=L.y+k*Math.cos(C),v.current.position.z=L.z+k*Math.sin(C)*Math.cos(R),v.current.lookAt(L)},O=()=>{P.current={radius:160,theta:Math.PI/4,phi:Math.PI/3.2},K.current.set(0,0,0),H()};return $e.useEffect(()=>{if(!o.current)return;const k=o.current;if(S.current)return;const R=k.clientWidth,C=k.clientHeight||450,L=new U1;L.background=new vt(657935),x.current=L;const Z=new Yn(45,R/C,.1,1e3);v.current=Z,H();const q=new I1({antialias:!0,alpha:!1});q.setSize(R,C),q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.shadowMap.enabled=!0,q.shadowMap.type=Mg,S.current=q,k.contains(q.domElement)||k.appendChild(q.domElement);const ae=new W1(16772829,.6);L.add(ae);const de=new Om(16774634,1.2);de.position.set(-100,120,-100),de.castShadow=!0,L.add(de);const oe=new Om(4482696,.4);oe.position.set(100,-50,100),L.add(oe);const le=new j1(160,16,3355460,2039598);le.position.y=-15,L.add(le);let B;const ue=()=>{B=requestAnimationFrame(ue),S.current&&x.current&&v.current&&S.current.render(x.current,v.current)};ue();const te=()=>{if(!k||!S.current||!v.current)return;const F=k.clientWidth,J=k.clientHeight||450;v.current.aspect=F/J,v.current.updateProjectionMatrix(),S.current.setSize(F,J)};return window.addEventListener("resize",te),()=>{cancelAnimationFrame(B),window.removeEventListener("resize",te),S.current&&(S.current.dispose(),S.current.domElement.remove(),S.current=null),x.current=null,v.current=null,E.current=null,T.current=null,y.current=null}},[]),$e.useEffect(()=>{const k=o.current;if(!k)return;const R=ae=>{ae.button===0&&(_.current=!0),ae.button===2&&(U.current=!0),I.current={x:ae.clientX,y:ae.clientY}},C=ae=>{const de=ae.clientX-I.current.x,oe=ae.clientY-I.current.y;if(I.current={x:ae.clientX,y:ae.clientY},_.current)P.current.theta-=de*.008,P.current.phi=Math.max(.1,Math.min(Math.PI/2.05,P.current.phi-oe*.008)),H();else if(U.current){const le=P.current.radius*.001;K.current.x-=de*le,K.current.z+=oe*le,H()}},L=()=>{_.current=!1,U.current=!1},Z=ae=>{ae.preventDefault(),P.current.radius=Math.max(30,Math.min(350,P.current.radius+ae.deltaY*.12)),H()},q=ae=>ae.preventDefault();return k.addEventListener("mousedown",R),window.addEventListener("mousemove",C),window.addEventListener("mouseup",L),k.addEventListener("wheel",Z,{passive:!1}),k.addEventListener("contextmenu",q),()=>{k.removeEventListener("mousedown",R),window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",L),k.removeEventListener("wheel",Z),k.removeEventListener("contextmenu",q)}},[]),$e.useEffect(()=>{if(!x.current||!s)return;const k=x.current;g(!0);const R=127,C=new Ga(100,100,R,R);C.rotateX(-Math.PI/2);const L=new Image;L.crossOrigin="anonymous",L.src=s,L.onload=()=>{const Z=document.createElement("canvas");Z.width=R+1,Z.height=R+1;const q=Z.getContext("2d");if(!q)return;q.drawImage(L,0,0,R+1,R+1);const ae=q.getImageData(0,0,R+1,R+1).data,de=C.attributes.position,oe=de.count,le=new Float32Array(oe);for(let te=0;te<oe;te++){const F=ae[te*4]/255;le[te]=F,de.setY(te,F*12*f)}y.current=le,C.computeVertexNormals();const B=new H1,ue=te=>{te.wrapS=Bi,te.wrapT=Bi;const F=new O1({map:te,wireframe:c,roughness:.85,metalness:.15});E.current&&(k.remove(E.current),E.current.geometry.dispose());const J=new vi(C,F);J.castShadow=!0,J.receiveShadow=!0,k.add(J),E.current=J,g(!1)};e?B.load(e,ue):B.load(s,ue)},L.onerror=()=>{g(!1)}},[s,e]),$e.useEffect(()=>{E.current&&E.current.material&&(E.current.material.wireframe=c)},[c]),$e.useEffect(()=>{if(!E.current||!y.current)return;const k=E.current.geometry,R=k.attributes.position,C=y.current;for(let L=0;L<R.count;L++)R.setY(L,C[L]*12*f);R.needsUpdate=!0,k.computeVertexNormals()},[f]),$e.useEffect(()=>{if(!x.current)return;const k=x.current;if(T.current&&(k.remove(T.current),T.current.geometry.dispose(),T.current=null),n.length>1&&y.current){const R=[],C=y.current,L=127;for(let de=0;de<n.length;de++){const[oe,le]=n[de],B=le/512*100-50,ue=oe/512*100-50,te=Math.min(L,Math.floor(oe/512*L)),F=Math.min(L,Math.floor(le/512*L)),J=te*(L+1)+F,Q=(C[J]||0)*12*f+.8;R.push(new ne(B,Q,ue))}const Z=new Si().setFromPoints(R),q=new $d({color:1096065,linewidth:4}),ae=new n0(Z,q);k.add(ae),T.current=ae}},[n,f]),w.jsxs("div",{className:"flex flex-col h-full bg-mars-900 rounded-xl border border-mars-700/60 overflow-hidden relative",children:[w.jsxs("div",{className:"bg-mars-800/80 px-4 py-2 border-b border-mars-700/50 flex items-center justify-between text-xs font-mono",children:[w.jsxs("div",{className:"flex items-center space-x-2 text-slate-300",children:[w.jsx(Vm,{className:"w-4 h-4 text-cyan-400"}),w.jsx("span",{className:"font-semibold text-white",children:"PLANETARY 3D DIGITAL SURFACE MODEL"}),r&&w.jsxs("span",{className:"text-[11px] text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800/60",children:[r.min,"m → ",r.max,"m"]})]}),w.jsxs("div",{className:"flex items-center space-x-4",children:[w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx(vv,{className:"w-3.5 h-3.5 text-mars-400"}),w.jsx("span",{className:"text-slate-400 text-[11px]",children:"Exagg:"}),w.jsx("input",{type:"range",min:"0.5",max:"4.0",step:"0.1",value:f,onChange:k=>h(parseFloat(k.target.value)),className:"w-20 accent-mars-500 cursor-pointer h-1.5 bg-mars-700 rounded-lg"}),w.jsxs("span",{className:"text-white w-7 text-[11px]",children:[f.toFixed(1),"x"]})]}),w.jsx("button",{onClick:()=>d(!c),className:`px-2.5 py-1 rounded border text-[11px] transition ${c?"bg-mars-600 text-cyan-300 border-cyan-500":"bg-mars-700/60 text-slate-300 border-mars-600 hover:bg-mars-600"}`,children:"Wireframe"}),w.jsx("button",{onClick:O,className:"p-1 rounded bg-mars-700/60 text-slate-300 border border-mars-600 hover:bg-mars-600 transition",title:"Reset 3D Camera",children:w.jsx(mv,{className:"w-3.5 h-3.5"})})]})]}),w.jsxs("div",{className:"w-full flex-1 min-h-[440px] relative cursor-grab active:cursor-grabbing overflow-hidden",children:[w.jsx("div",{ref:o,className:"absolute inset-0 w-full h-full"}),m&&w.jsxs("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center space-x-2 text-cyan-400 text-xs font-mono z-10 pointer-events-none",children:[w.jsx("span",{className:"w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"}),w.jsx("span",{children:"Generating 3D Martian terrain mesh..."})]}),!s&&w.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-slate-500 font-mono text-xs space-y-2 pointer-events-none",children:[w.jsx(av,{className:"w-8 h-8 text-slate-600"}),w.jsx("span",{children:"DEM elevation heightmap required for 3D visualization"})]}),w.jsx("div",{className:"absolute bottom-2 right-2 bg-mars-950/80 backdrop-blur border border-mars-700/50 rounded px-2 py-1 text-[10px] font-mono text-slate-400 pointer-events-none",children:"Left Drag: Rotate | Right Drag: Pan | Scroll: Zoom"})]})]})},q1=({analysis:s,pathPlan:e,startCoords:n,goalCoords:r,onRunPlanner:o,onSelectTargetGoal:c,isPlanning:d,isAnalyzing:f})=>w.jsxs("div",{className:"flex flex-col space-y-4",children:[w.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3",children:[w.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-2",children:[w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx(Sv,{className:"w-4 h-4 text-amber-400"}),w.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Terrain Morphometry (Horn's Method)"})]}),f&&w.jsx("span",{className:"text-[10px] font-mono text-amber-400 animate-pulse",children:"Computing..."})]}),s?w.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] font-mono",children:[w.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[w.jsx("span",{className:"text-slate-400 block text-[10px]",children:"MAX SLOPE"}),w.jsxs("span",{className:"text-rose-400 font-bold text-sm",children:[s.terrain_summary.max_slope_deg.toFixed(1),"°"]})]}),w.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[w.jsx("span",{className:"text-slate-400 block text-[10px]",children:"MEAN SLOPE"}),w.jsxs("span",{className:"text-slate-200 font-bold text-sm",children:[s.terrain_summary.mean_slope_deg.toFixed(1),"°"]})]}),w.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[w.jsx("span",{className:"text-slate-400 block text-[10px]",children:"CAUTION SLOPES (>20°)"}),w.jsxs("span",{className:"text-amber-400 font-bold",children:[s.terrain_summary.pct_slope_gt_20deg.toFixed(1),"% area"]})]}),w.jsxs("div",{className:"bg-black/40 rounded p-2 border border-mars-700/30",children:[w.jsx("span",{className:"text-slate-400 block text-[10px]",children:"LETHAL CLIFFS (>30°)"}),w.jsxs("span",{className:"text-red-400 font-bold",children:[s.terrain_summary.pct_slope_gt_30deg.toFixed(1),"% area"]})]})]}):w.jsx("div",{className:"text-xs font-mono text-slate-500 italic py-2 text-center",children:"Run terrain analysis to compute slope & ruggedness metrics"})]}),s&&w.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3",children:[w.jsxs("div",{className:"flex items-center justify-between border-b border-mars-700/50 pb-2",children:[w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx(Rp,{className:"w-4 h-4 text-rose-400"}),w.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Hazard & Uncertainty Engine"})]}),w.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-mars-700 text-slate-300",children:["Confidence: ",(s.uncertainty_summary.confidence_score*100).toFixed(0),"%"]})]}),w.jsxs("div",{className:"space-y-2 text-[11px] font-mono",children:[w.jsxs("div",{className:"flex justify-between items-center bg-black/40 p-2 rounded border border-mars-700/30",children:[w.jsx("span",{className:"text-slate-400",children:"Mobility Clearance:"}),w.jsxs("span",{className:"text-emerald-400 font-bold",children:[(s.hazard_summary.safe_cells/s.hazard_summary.total_cells*100).toFixed(1),"% Traversable"]})]}),w.jsxs("div",{className:"text-[10px] text-slate-400",children:[w.jsx("span",{className:"block mb-1",children:"Detected Hazard Signatures:"}),w.jsx("div",{className:"flex flex-wrap gap-1",children:s.hazard_summary.hazard_types_detected.map((h,m)=>w.jsx("span",{className:"px-2 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-800/70",children:h},m))})]}),w.jsxs("div",{className:"text-[10px] text-slate-400",children:[w.jsx("span",{className:"block mb-1",children:"Uncertainty Drivers:"}),w.jsx("div",{className:"flex flex-wrap gap-1",children:s.uncertainty_summary.dominant_sources.map((h,m)=>w.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/50",children:h},m))})]})]})]}),s&&s.science_targets.length>0&&w.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3",children:[w.jsxs("div",{className:"flex items-center space-x-2 border-b border-mars-700/50 pb-2",children:[w.jsx(xv,{className:"w-4 h-4 text-amber-300"}),w.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Scientific Target Discovery"})]}),w.jsx("div",{className:"space-y-2",children:s.science_targets.map(h=>w.jsxs("div",{onClick:()=>c(h.coords_pixel),className:"bg-black/50 hover:bg-mars-700/40 cursor-pointer p-2.5 rounded-lg border border-mars-700/40 hover:border-amber-500/60 transition group space-y-1",children:[w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsx("span",{className:"text-xs font-mono font-bold text-amber-300 group-hover:text-amber-200",children:h.name}),w.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800",children:["Priority: ",h.overall_priority]})]}),w.jsx("p",{className:"text-[10px] text-slate-400",children:h.description}),w.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-mars-700/30",children:[w.jsxs("span",{children:["Geo: ",h.geological_score," | Access: ",h.accessibility_score]}),w.jsx("span",{className:"text-cyan-400 group-hover:underline",children:"Click to Target Goal →"})]})]},h.id))})]}),w.jsxs("div",{className:"bg-mars-800/60 border border-mars-700/60 rounded-xl p-4 space-y-3",children:[w.jsxs("div",{className:"flex items-center space-x-2 border-b border-mars-700/50 pb-2",children:[w.jsx($m,{className:"w-4 h-4 text-emerald-400"}),w.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-white",children:"Autonomous A* Path Planner"})]}),w.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] font-mono",children:[w.jsxs("div",{className:"bg-black/40 p-2 rounded border border-mars-700/30",children:[w.jsx("span",{className:"text-slate-400 block text-[10px]",children:"START (ROVER)"}),w.jsxs("span",{className:"text-emerald-400 font-bold",children:["[",n[0],", ",n[1],"]"]})]}),w.jsxs("div",{className:"bg-black/40 p-2 rounded border border-mars-700/30",children:[w.jsx("span",{className:"text-slate-400 block text-[10px]",children:"GOAL (TARGET)"}),w.jsxs("span",{className:"text-cyan-400 font-bold",children:["[",r[0],", ",r[1],"]"]})]})]}),w.jsxs("button",{onClick:o,disabled:d,className:"w-full py-2.5 rounded-lg font-mono font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-950 border border-emerald-500/50 flex items-center justify-center space-x-2 transition disabled:opacity-50",children:[w.jsx(lg,{className:`w-3.5 h-3.5 fill-current ${d?"animate-spin":""}`}),w.jsx("span",{children:d?"Planning Optimal Path...":"Compute Safe A* Path"})]}),e&&w.jsxs("div",{className:`p-2.5 rounded-lg text-xs font-mono border ${e.success?"bg-emerald-950/60 border-emerald-800 text-emerald-200":"bg-red-950/60 border-red-800 text-red-200"}`,children:[w.jsxs("div",{className:"flex items-center space-x-1.5 font-bold mb-1",children:[e.success?w.jsx(sv,{className:"w-4 h-4 text-emerald-400"}):w.jsx(Rp,{className:"w-4 h-4 text-red-400"}),w.jsx("span",{children:e.plan.message})]}),e.success&&w.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-emerald-800/50 text-[11px]",children:[w.jsxs("div",{children:[w.jsx("span",{className:"text-slate-400",children:"Path Length: "}),w.jsxs("span",{className:"text-white font-bold",children:[e.plan.path_length_steps," steps"]})]}),w.jsxs("div",{children:[w.jsx("span",{className:"text-slate-400",children:"Accumulated Cost: "}),w.jsx("span",{className:"text-emerald-300 font-bold",children:e.plan.total_cost})]})]})]})]})]});async function Y1(s,e,n=5){const r=new FormData;r.append("imagery_id",s),r.append("dem_id",e),r.append("mc_samples",n.toString());const o=await fetch("/api/segment",{method:"POST",body:r});if(!o.ok){const c=await o.json().catch(()=>({detail:"Segmentation failed"}));throw new Error(c.detail||"Segmentation failed")}return o.json()}const $1=()=>{var Ke;const[s,e]=$e.useState("CONNECTING"),[n,r]=$e.useState("MARS-09"),[o,c]=$e.useState(0),[d,f]=$e.useState(null),[h,m]=$e.useState(null),[g,x]=$e.useState(null),[v,S]=$e.useState(null),[E,T]=$e.useState(!1),[y,_]=$e.useState(null),[U,I]=$e.useState(!1),[P,K]=$e.useState([90,90]),[H,O]=$e.useState([380,390]),[k,R]=$e.useState(null),[C,L]=$e.useState(!1),[Z,q]=$e.useState(null),[ae,de]=$e.useState(!1),[oe,le]=$e.useState(null),[B,ue]=$e.useState(5),[te,F]=$e.useState(!1);$e.useEffect(()=>{J()},[]);const J=async()=>{F(!0);try{const Ze=await wv();e(Ze.status),r(Ze.rover_callsign),c(Ze.registered_datasets_count);const qe=await Tv();f(qe.imagery),m(qe.dem),x(qe.dem_offset),await Le(qe.imagery.id,qe.dem.id),await Q(qe.dem.id)}catch(Ze){console.error("Initialization error:",Ze),e("OFFLINE")}finally{F(!1)}},Le=async(Ze,qe)=>{T(!0);try{const Mt=await Cv(Ze,qe);S(Mt)}catch(Mt){console.error("Validation error:",Mt)}finally{T(!1)}},Q=async Ze=>{I(!0);try{const qe=await bv(Ze);_(qe)}catch(qe){console.error("Terrain analysis error:",qe)}finally{I(!1)}},fe=Ze=>{f(Ze),q(null),h&&Le(Ze.id,h.id)},Se=Ze=>{m(Ze),q(null),d&&Le(d.id,Ze.id),Q(Ze.id),R(null)},xe=async()=>{if(h){L(!0);try{const Ze=await Rv(h.id,P[0],P[1],H[0],H[1]);R(Ze)}catch(Ze){console.error("Planning error:",Ze)}finally{L(!1)}}},Ae=async Ze=>{if(!(!d||!h)){de(!0),le(null);try{const qe=await Y1(d.id,h.id,Ze);q(qe)}catch(qe){const Mt=qe instanceof Error?qe.message:String(qe);le(Mt),console.error("Segmentation error:",qe)}finally{de(!1)}}},Ie=w.jsx(X1,{heightmapUrl:h==null?void 0:h.heightmap_url,textureUrl:(d==null?void 0:d.preview_url)||(h==null?void 0:h.preview_url),pathCoords:(k==null?void 0:k.plan.path_coords)||[],elevationRange:(Ke=h==null?void 0:h.preview)!=null&&Ke.stats?{min:h.preview.stats.min_elevation_m,max:h.preview.stats.max_elevation_m}:void 0});return w.jsxs("div",{className:"flex flex-col min-h-screen bg-mars-900 text-slate-100",children:[w.jsx(Ev,{status:s,roverCallsign:n,datasetCount:o}),w.jsxs("main",{className:"flex-1 p-5 grid grid-cols-12 gap-5 max-w-[1920px] mx-auto w-full",children:[w.jsxs("section",{className:"col-span-12 lg:col-span-3 space-y-4",children:[w.jsx(Pv,{imageryRecord:d,demRecord:h,demOffsetRecord:g,onSelectImagery:fe,onSelectDem:Se,onLoadSamples:J,isLoading:te}),w.jsx(Lv,{report:v,isValidating:E}),w.jsx(Dv,{segmentationResult:Z,isSegmenting:ae,error:oe,mcSamples:B,onMcSamplesChange:ue,onRunSegmentation:()=>Ae(B),canRun:!!(d&&h)&&!ae})]}),w.jsx("section",{className:"col-span-12 lg:col-span-6 flex flex-col",children:w.jsx(Iv,{imageryUrl:d==null?void 0:d.preview_url,demColormapUrl:h==null?void 0:h.preview_url,slopeUrl:y==null?void 0:y.slope_preview_url,segmentationUrl:Z==null?void 0:Z.segmentation_url,uncertaintyUrl:Z==null?void 0:Z.uncertainty_url,pathCoords:(k==null?void 0:k.plan.path_coords)||[],scienceTargets:(y==null?void 0:y.science_targets)||[],startCoords:P,goalCoords:H,onSetStart:K,onSetGoal:O,ThreeDViewer:Ie})}),w.jsx("section",{className:"col-span-12 lg:col-span-3 space-y-4",children:w.jsx(q1,{analysis:y,pathPlan:k,startCoords:P,goalCoords:H,onRunPlanner:xe,onSelectTargetGoal:Ze=>O(Ze),isPlanning:C,isAnalyzing:U})})]})]})},K1=()=>w.jsx($1,{});j_.createRoot(document.getElementById("root")).render(w.jsx(zm.StrictMode,{children:w.jsx(K1,{})}));
