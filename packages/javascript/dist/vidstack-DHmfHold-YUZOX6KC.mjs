"use client";import{a as k}from"./chunk-SLDD4V25.mjs";import{a as v}from"./chunk-NTU3O35T.mjs";import{n as u,q as P}from"./chunk-CVDFGJFQ.mjs";import{a as $,h as c,ha as b,i as p,p as y,q as r,r as m,s as f,v as g}from"./chunk-VZ4W2FJS.mjs";import{c as T}from"./chunk-VAX7AB37.mjs";var I=T($(),1);var n={Ended:0,Playing:1,Paused:2,Buffering:3,Cued:5},w=class extends k{$$PROVIDER_TYPE="YOUTUBE";scope=c();#e;#a=p("");#o=-1;#d=null;#n=-1;#i=!1;#s=new Map;constructor(e,t){super(e),this.#e=t}language="en";color="red";cookies=!1;get currentSrc(){return this.#d}get type(){return"youtube"}get videoId(){return this.#a()}preconnect(){P(this.getOrigin())}setup(){super.setup(),g(this.#c.bind(this)),this.#e.notify("provider-setup",this)}destroy(){this.#l();let e="provider destroyed";for(let t of this.#s.values())for(let{reject:s}of t)s(e);this.#s.clear()}async play(){return this.#t("playVideo")}#k(e){this.#r("playVideo")?.reject(e)}async pause(){return this.#t("pauseVideo")}#v(e){this.#r("pauseVideo")?.reject(e)}setMuted(e){e?this.#t("mute"):this.#t("unMute")}setCurrentTime(e){this.#t("seekTo",e),this.#e.notify("seeking",e)}setVolume(e){this.#t("setVolume",e*100)}setPlaybackRate(e){this.#t("setPlaybackRate",e)}async loadSource(e){if(!m(e.src)){this.#d=null,this.#a.set("");return}let t=v(e.src);this.#a.set(t??""),this.#d=e}getOrigin(){return this.cookies?"https://www.youtube.com":"https://www.youtube-nocookie.com"}#c(){this.#l();let e=this.#a();if(!e){this.src.set("");return}this.src.set(`${this.getOrigin()}/embed/${e}`),this.#e.notify("load-start")}buildParams(){let{keyDisabled:e}=this.#e.$props,{muted:t,playsInline:s,nativeControls:a}=this.#e.$state,i=a();return{rel:0,autoplay:0,cc_lang_pref:this.language,cc_load_policy:i?1:void 0,color:this.color,controls:i?1:0,disablekb:!i||e()?1:0,enablejsapi:1,fs:1,hl:this.language,iv_load_policy:i?1:3,mute:t()?1:0,playsinline:s()?1:0}}#t(e,t){let s=b(),a=this.#s.get(e);return a||this.#s.set(e,a=[]),a.push(s),this.postMessage({event:"command",func:e,args:t?[t]:void 0}),s.promise}onLoad(){window.setTimeout(()=>this.postMessage({event:"listening"}),100)}#p(e){this.#e.notify("loaded-metadata"),this.#e.notify("loaded-data"),this.#e.delegate.ready(void 0,e)}#y(e){this.#r("pauseVideo")?.resolve(),this.#e.notify("pause",void 0,e)}#m(e,t){let{duration:s,realCurrentTime:a}=this.#e.$state,i=this.#o===n.Ended,o=i?s():e;this.#e.notify("time-change",o,t),!i&&Math.abs(o-a())>1&&this.#e.notify("seeking",o,t)}#u(e,t,s){let a={buffered:new u(0,e),seekable:t};this.#e.notify("progress",a,s);let{seeking:i,realCurrentTime:o}=this.#e.$state;i()&&e>o()&&this.#h(s)}#h(e){let{paused:t,realCurrentTime:s}=this.#e.$state;window.clearTimeout(this.#n),this.#n=window.setTimeout(()=>{this.#e.notify("seeked",s(),e),this.#n=-1},t()?100:0)}#f(e){let{seeking:t}=this.#e.$state;t()&&this.#h(e),this.#e.notify("pause",void 0,e),this.#e.notify("end",void 0,e)}#g(e,t){let{paused:s,seeking:a}=this.#e.$state,i=e===n.Playing,o=e===n.Buffering,d=this.#b("playVideo"),h=s()&&(o||i);if(o&&this.#e.notify("waiting",void 0,t),a()&&i&&this.#h(t),this.#i&&i){this.pause(),this.#i=!1,this.setMuted(this.#e.$state.muted());return}if(!d&&h){this.#i=!0,this.setMuted(!0);return}switch(h&&(this.#r("playVideo")?.resolve(),this.#e.notify("play",void 0,t)),e){case n.Cued:this.#p(t);break;case n.Playing:this.#e.notify("playing",void 0,t);break;case n.Paused:this.#y(t);break;case n.Ended:this.#f(t);break}this.#o=e}onMessage({info:e},t){if(!e)return;let{title:s,intrinsicDuration:a,playbackRate:i}=this.#e.$state;if(y(e.videoData)&&e.videoData.title!==s()&&this.#e.notify("title-change",e.videoData.title,t),r(e.duration)&&e.duration!==a()){if(r(e.videoLoadedFraction)){let o=e.progressState?.loaded??e.videoLoadedFraction*e.duration,d=new u(0,e.duration);this.#u(o,d,t)}this.#e.notify("duration-change",e.duration,t)}if(r(e.playbackRate)&&e.playbackRate!==i()&&this.#e.notify("rate-change",e.playbackRate,t),e.progressState){let{current:o,seekableStart:d,seekableEnd:h,loaded:S,duration:l}=e.progressState;this.#m(o,t),this.#u(S,new u(d,h),t),l!==a()&&this.#e.notify("duration-change",l,t)}if(r(e.volume)&&f(e.muted)&&!this.#i){let o={muted:e.muted,volume:e.volume/100};this.#e.notify("volume-change",o,t)}r(e.playerState)&&e.playerState!==this.#o&&this.#g(e.playerState,t)}#l(){this.#o=-1,this.#n=-1,this.#i=!1}#r(e){return this.#s.get(e)?.shift()}#b(e){return!!this.#s.get(e)?.length}};export{w as YouTubeProvider};
//# sourceMappingURL=vidstack-DHmfHold-YUZOX6KC.mjs.map