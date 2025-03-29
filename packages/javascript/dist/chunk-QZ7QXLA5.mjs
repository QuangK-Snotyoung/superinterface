import{j as g,k as p,l as u,o as m,r as C}from"./chunk-CVDFGJFQ.mjs";import{C as d,b as l}from"./chunk-VZ4W2FJS.mjs";function w(){return"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"}function E(){return!!window.cast?.framework}function v(){return!!window.chrome?.cast?.isAvailable}function h(){return n().getCastState()===cast.framework.CastState.CONNECTED}function n(){return window.cast.framework.CastContext.getInstance()}function f(){return n().getCurrentSession()}function y(){return f()?.getSessionObj().media[0]}function A(a){return y()?.media.contentId===a?.src}function S(){return{language:"en-US",autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,receiverApplicationId:chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,resumeSavedSession:!0,androidReceiverCompatible:!0}}function I(a){return`Google Cast Error Code: ${a}`}function P(a,e){return d(n(),a,e)}var i=class{name="google-cast";target;#e;get cast(){return n()}mediaType(){return"video"}canPlay(e){return u&&!p&&m(e)}async prompt(e){let t,r,o;try{t=await this.#a(e),this.#e||(this.#e=new cast.framework.RemotePlayer,new cast.framework.RemotePlayerController(this.#e)),r=e.player.createEvent("google-cast-prompt-open",{trigger:t}),e.player.dispatchEvent(r),this.#t(e,"connecting",r),await this.#o(l(e.$props.googleCast)),e.$state.remotePlaybackInfo.set({deviceName:f()?.getCastDevice().friendlyName}),h()&&this.#t(e,"connected",r)}catch(s){let c=s instanceof Error?s:this.#r((s+"").toUpperCase(),"Prompt failed.");throw o=e.player.createEvent("google-cast-prompt-error",{detail:c,trigger:r??t,cancelable:!0}),e.player.dispatch(o),this.#t(e,h()?"connected":"disconnected",o),c}finally{e.player.dispatch("google-cast-prompt-close",{trigger:o??r??t})}}async load(e){if(g)throw Error("[vidstack] can not load google cast provider server-side");if(!this.#e)throw Error("[vidstack] google cast player was not initialized");return new(await import("./vidstack-BeT6vBOi-GKGLOXTR.mjs")).GoogleCastProvider(this.#e,e)}async#a(e){if(E())return;let t=e.player.createEvent("google-cast-load-start");e.player.dispatch(t),await C(w()),await customElements.whenDefined("google-cast-launcher");let r=e.player.createEvent("google-cast-loaded",{trigger:t});if(e.player.dispatch(r),!v())throw this.#r("CAST_NOT_AVAILABLE","Google Cast not available on this platform.");return r}async#o(e){this.#n(e);let t=await this.cast.requestSession();if(t)throw this.#r(t.toUpperCase(),I(t))}#n(e){this.cast?.setOptions({...S(),...e})}#t(e,t,r){let o={type:"google-cast",state:t};e.notify("remote-playback-change",o,r)}#r(e,t){let r=Error(t);return r.code=e,r}},O=Object.freeze({__proto__:null,GoogleCastLoader:i});export{n as a,f as b,y as c,A as d,I as e,P as f,O as g};
//# sourceMappingURL=chunk-QZ7QXLA5.mjs.map