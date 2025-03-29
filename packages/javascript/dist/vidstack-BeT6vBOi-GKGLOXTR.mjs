"use client";import{a as S,b as v,c as m,d as T,e as L,f as A}from"./chunk-QZ7QXLA5.mjs";import{B as b,n,z as I}from"./chunk-CVDFGJFQ.mjs";import{C as u,a as D,b as c,c as y,g as p,ga as l,h as E,v as C,w as d}from"./chunk-VZ4W2FJS.mjs";import{c as w}from"./chunk-VAX7AB37.mjs";var x=w(D(),1);var f=class{#t;constructor(t){this.#t=new chrome.cast.media.MediaInfo(t.src,t.type)}build(){return this.#t}setStreamType(t){return t.includes("live")?this.#t.streamType=chrome.cast.media.StreamType.LIVE:this.#t.streamType=chrome.cast.media.StreamType.BUFFERED,this}setTracks(t){return this.#t.tracks=t.map(this.#e),this}setMetadata(t,e){return this.#t.metadata=new chrome.cast.media.GenericMediaMetadata,this.#t.metadata.title=t,this.#t.metadata.images=[{url:e}],this}#e(t,e){let s=new chrome.cast.media.Track(e,chrome.cast.media.TrackType.TEXT);return s.name=t.label,s.trackContentId=t.src,s.trackContentType="text/vtt",s.language=t.language,s.subtype=t.kind.toUpperCase(),s}},g=class{#t;#e;#i;constructor(t,e,s){this.#t=t,this.#e=e,this.#i=s}setup(){let t=this.syncRemoteActiveIds.bind(this);u(this.#e.audioTracks,"change",t),u(this.#e.textTracks,"mode-change",t),C(this.#o.bind(this))}getLocalTextTracks(){return this.#e.$state.textTracks().filter(t=>t.src&&t.type==="vtt")}#a(){return this.#e.$state.audioTracks()}#r(t){let e=this.#t.mediaInfo?.tracks??[];return t?e.filter(s=>s.type===t):e}#u(){let t=[],e=this.#a().find(i=>i.selected),s=this.getLocalTextTracks().filter(i=>i.mode==="showing");if(e){let i=this.#r(chrome.cast.media.TrackType.AUDIO),r=this.#d(i,e);r&&t.push(r.trackId)}if(s?.length){let i=this.#r(chrome.cast.media.TrackType.TEXT);if(i.length)for(let r of s){let a=this.#d(i,r);a&&t.push(a.trackId)}}return t}#o(){let t=this.getLocalTextTracks();if(!this.#t.isMediaLoaded)return;let e=this.#r(chrome.cast.media.TrackType.TEXT);for(let s of t)if(!this.#d(e,s)){y(()=>this.#i?.());break}}syncRemoteTracks(t){if(!this.#t.isMediaLoaded)return;let e=this.#a(),s=this.getLocalTextTracks(),i=this.#r(chrome.cast.media.TrackType.AUDIO),r=this.#r(chrome.cast.media.TrackType.TEXT);for(let a of i){if(this.#h(e,a))continue;let o={id:a.trackId.toString(),label:a.name,language:a.language,kind:a.subtype??"main",selected:!1};this.#e.audioTracks[I.add](o,t)}for(let a of r){if(this.#h(s,a))continue;let o={id:a.trackId.toString(),src:a.trackContentId,label:a.name,language:a.language,kind:a.subtype.toLowerCase()};this.#e.textTracks.add(o,t)}}syncRemoteActiveIds(t){if(!this.#t.isMediaLoaded)return;let e=this.#u(),s=new chrome.cast.media.EditTracksInfoRequest(e);this.#c(s).catch(i=>{})}#c(t){let e=m();return new Promise((s,i)=>e?.editTracksInfo(t,s,i))}#h(t,e){return t.find(s=>this.#s(s,e))}#d(t,e){return t.find(s=>this.#s(e,s))}#s(t,e){return e.name===t.label&&e.language===t.language&&e.subtype.toLowerCase()===t.kind.toLowerCase()}},R=class{$$PROVIDER_TYPE="GOOGLE_CAST";scope=E();#t;#e;#i;#a=null;#r="disconnected";#u=0;#o=0;#c=new n(0,0);#h=new b(this.#b.bind(this));#d;#s=null;#l=!1;constructor(t,e){this.#t=t,this.#e=e,this.#i=new g(t,e,this.#O.bind(this))}get type(){return"google-cast"}get currentSrc(){return this.#a}get player(){return this.#t}get cast(){return S()}get session(){return v()}get media(){return m()}get hasActiveSession(){return T(this.#a)}setup(){this.#v(),this.#L(),this.#i.setup(),this.#e.notify("provider-setup",this)}#v(){A(cast.framework.CastContextEventType.CAST_STATE_CHANGED,this.#f.bind(this))}#L(){let t=cast.framework.RemotePlayerEventType,e={[t.IS_CONNECTED_CHANGED]:this.#f,[t.IS_MEDIA_LOADED_CHANGED]:this.#g,[t.CAN_CONTROL_VOLUME_CHANGED]:this.#k,[t.CAN_SEEK_CHANGED]:this.#y,[t.DURATION_CHANGED]:this.#M,[t.IS_MUTED_CHANGED]:this.#p,[t.VOLUME_LEVEL_CHANGED]:this.#p,[t.IS_PAUSED_CHANGED]:this.#N,[t.LIVE_SEEKABLE_RANGE_CHANGED]:this.#E,[t.PLAYER_STATE_CHANGED]:this.#_};this.#d=e;let s=this.#R.bind(this);for(let i of l(e))this.#t.controller.addEventListener(i,s);p(()=>{for(let i of l(e))this.#t.controller.removeEventListener(i,s)})}async play(){if(!(!this.#t.isPaused&&!this.#l)){if(this.#l){await this.#S(!1,0);return}this.#t.controller?.playOrPause()}}async pause(){this.#t.isPaused||this.#t.controller?.playOrPause()}getMediaStatus(t){return new Promise((e,s)=>{this.media?.getStatus(t,e,s)})}setMuted(t){(t&&!this.#t.isMuted||!t&&this.#t.isMuted)&&this.#t.controller?.muteOrUnmute()}setCurrentTime(t){this.#t.currentTime=t,this.#e.notify("seeking",t),this.#t.controller?.seek()}setVolume(t){this.#t.volumeLevel=t,this.#t.controller?.setVolumeLevel()}async loadSource(t){if(this.#s?.src!==t&&(this.#s=null),T(t)){this.#A(),this.#a=t;return}this.#e.notify("load-start");let e=this.#P(t),s=await this.session.loadMedia(e);if(s){this.#a=null,this.#e.notify("error",Error(L(s)));return}this.#a=t}destroy(){this.#m(),this.#T()}#m(){this.#s||(this.#o=0,this.#c=new n(0,0)),this.#h.stop(),this.#u=0,this.#s=null}#A(){let t=new d("resume-session",{detail:this.session});this.#g(t);let{muted:e,volume:s,savedState:i}=this.#e.$state,r=i();this.setCurrentTime(Math.max(this.#t.currentTime,r?.currentTime??0)),this.setMuted(e()),this.setVolume(s()),r?.paused===!1&&this.play()}#T(){this.cast.endCurrentSession(!0);let{remotePlaybackLoader:t}=this.#e.$state;t.set(null)}#I(){let{savedState:t}=this.#e.$state;t.set({paused:this.#t.isPaused,currentTime:this.#t.currentTime}),this.#T()}#b(){this.#D()}#R(t){this.#d[t.type].call(this,t)}#f(t){let e=this.cast.getCastState(),s=e===cast.framework.CastState.CONNECTED?"connected":e===cast.framework.CastState.CONNECTING?"connecting":"disconnected";if(this.#r===s)return;let i={type:"google-cast",state:s},r=this.#n(t);this.#r=s,this.#e.notify("remote-playback-change",i,r),s==="disconnected"&&this.#I()}#g(t){if(!!!this.#t.isMediaLoaded)return;let s=c(this.#e.$state.source);Promise.resolve().then(()=>{if(s!==c(this.#e.$state.source)||!this.#t.isMediaLoaded)return;this.#m();let i=this.#t.duration;this.#c=new n(0,i);let r={provider:this,duration:i,buffered:new n(0,0),seekable:this.#C()},a=this.#n(t);this.#e.notify("loaded-metadata",void 0,a),this.#e.notify("loaded-data",void 0,a),this.#e.notify("can-play",r,a),this.#k(),this.#y(t);let{volume:h,muted:o}=this.#e.$state;this.setVolume(h()),this.setMuted(o()),this.#h.start(),this.#i.syncRemoteTracks(a),this.#i.syncRemoteActiveIds(a)})}#k(){this.#e.$state.canSetVolume.set(this.#t.canControlVolume)}#y(t){let e=this.#n(t);this.#e.notify("stream-type-change",this.#w(),e)}#w(){return this.#t.mediaInfo?.streamType===chrome.cast.media.StreamType.LIVE?this.#t.canSeek?"live:dvr":"live":"on-demand"}#D(){if(this.#s)return;let t=this.#t.currentTime;t!==this.#u&&(this.#e.notify("time-change",t),t>this.#o&&(this.#o=t,this.#E()),this.#e.$state.seeking()&&this.#e.notify("seeked",t),this.#u=t)}#M(t){if(!this.#t.isMediaLoaded||this.#s)return;let e=this.#t.duration,s=this.#n(t);this.#c=new n(0,e),this.#e.notify("duration-change",e,s)}#p(t){if(!this.#t.isMediaLoaded)return;let e={muted:this.#t.isMuted,volume:this.#t.volumeLevel},s=this.#n(t);this.#e.notify("volume-change",e,s)}#N(t){let e=this.#n(t);this.#t.isPaused?this.#e.notify("pause",void 0,e):this.#e.notify("play",void 0,e)}#E(t){let e={seekable:this.#C(),buffered:new n(0,this.#o)},s=t?this.#n(t):void 0;this.#e.notify("progress",e,s)}#_(t){let e=this.#t.playerState,s=chrome.cast.media.PlayerState;if(this.#l=e===s.IDLE,e===s.PAUSED)return;let i=this.#n(t);switch(e){case s.PLAYING:this.#e.notify("playing",void 0,i);break;case s.BUFFERING:this.#e.notify("waiting",void 0,i);break;case s.IDLE:this.#h.stop(),this.#e.notify("pause"),this.#e.notify("end");break}}#C(){return this.#t.liveSeekableRange?new n(this.#t.liveSeekableRange.start,this.#t.liveSeekableRange.end):this.#c}#n(t){return t instanceof Event?t:new d(t.type,{detail:t})}#x(t){let{streamType:e,title:s,poster:i}=this.#e.$state;return new f(t).setMetadata(s(),i()).setStreamType(e()).setTracks(this.#i.getLocalTextTracks()).build()}#P(t){let e=this.#x(t),s=new chrome.cast.media.LoadRequest(e),i=this.#e.$state.savedState();return s.autoplay=(this.#s?.paused??i?.paused)===!1,s.currentTime=this.#s?.time??i?.currentTime??0,s}async#S(t,e){let s=c(this.#e.$state.source);this.#s={src:s,paused:t,time:e},await this.loadSource(s)}#O(){this.#S(this.#t.isPaused,this.#t.currentTime).catch(t=>{})}};export{R as GoogleCastProvider};
//# sourceMappingURL=vidstack-BeT6vBOi-GKGLOXTR.mjs.map