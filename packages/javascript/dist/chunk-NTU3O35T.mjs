var i=/(?:youtu\.be|youtube|youtube\.com|youtube-nocookie\.com)(?:\/shorts)?\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|)((?:\w|-){11})/,u=new Map,s=new Map;function h(e){return e.match(i)?.[1]}async function b(e,n){if(u.has(e))return u.get(e);if(s.has(e))return s.get(e);let t=new Promise(async c=>{let r=["maxresdefault","sddefault","hqdefault"];for(let a of r)for(let f of[!0,!1]){let o=p(e,a,f);if((await fetch(o,{mode:"no-cors",signal:n.signal})).status<400){u.set(e,o),c(o);return}}}).catch(()=>"").finally(()=>s.delete(e));return s.set(e,t),t}function p(e,n,t){return`https://i.ytimg.com/${t?"vi_webp":"vi"}/${e}/${n}.${t?"webp":"jpg"}`}export{h as a,b};
//# sourceMappingURL=chunk-NTU3O35T.mjs.map