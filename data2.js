let t,e,o;function s(t,e,o,s,r){const l=[];return t.source1&&""!==t.source1&&l.push({default:!0,html:"Server UC",url:proxy1+e}),t.source2&&""!==t.source2&&""!==o&&l.push({html:"Torrent",url:proxy2+o}),t.source3&&""!==t.source3&&""!==s&&l.push({html:"Server M4#NM",url:proxy3+s}),t.source4&&""!==t.source4&&l.push({html:"Server M4#N",url:proxy4+r}),l}document.addEventListener("DOMContentLoaded",(async function(){const r=new URLSearchParams(window.location.search),l=r.get("id"),n=r.get("sub");let c="";try{const r=await fetch(`https://db.ply4.com/movies/${l}`);if(r.ok){const i=await r.json();let a=i.title;o=a.match(/\((\d{4})\)$/)[1],e=a.replace(/\s*\(\d{4}\)$/,"").trim(),c=i.source1;let u="";if(i.source2&&""!==i.source2){const t=i.source2.replace(/https:\/\/yts.mx\/torrent\/download\/(.+)$/,"https://webtor.io/$1"),e=await fetch(`https://s2.ply4.com/?url=${encodeURIComponent(t)}`);if(e.ok){u=(await e.json()).m3u8Link}}let p="";if(i.source3&&""!==i.source3){const t=await fetch(`https://s3.ply4.com/?url=${encodeURIComponent(i.source3)}`);if(t.ok){p=(await t.json()).m3u8Link}}const h=i.source4,y=s(i,c,u,p,h);t=new Artplayer({container:".rplayer-pro",url:c||u||p||h,setting:!0,fullscreen:!0,playsInline:!0,hotkey:!0,aspectRatio:!0,autoOrientation:!0,autoPlayback:!0,theme:"#0056B3",subtitle:{url:n||"",style:{color:"#fff","font-size":"calc(2vw + 12px)","margin-bottom":"4vw","@media (max-width: 576px)":{"font-size":"14px","margin-bottom":"20px"}}},settings:[{width:200,html:"Subtitle",tooltip:"AutoSubtitle",icon:'<img width="22" height="22" src="https://artplayer.org/assets/img/subtitle.svg">',selector:[{html:"Display",tooltip:"Show",switch:!0,onSwitch:function(e){return e.tooltip=e.switch?"Hide":"Show",t.subtitle.show=!e.switch,!e.switch}},...await fetch("https://ply4.com/lang2.json").then((t=>t.json())).then((t=>t.map((t=>({html:t.name,iso:t.iso,url:""})))))],onSelect:async function(e){try{const o=await fetch(`https://subdl.ply4.com/?tmdbid=${l}&iso=${e.iso}`);if(o.ok){const s=`${await o.text()}`;return t.subtitle.switch(s,{name:e.html}),e.html}}catch(o){}}}],plugins:[artplayerPluginHlsQuality({control:!1,setting:!0,getResolution:t=>t.height+"P",title:"Quality",auto:"Auto"}),artplayerPluginChromecast({})],customType:{m3u8:function(t,e,o){if(Hls.isSupported()){o.hls&&o.hls.destroy();const s=new Hls;s.loadSource(e),s.attachMedia(t),o.hls=s,o.on("destroy",(()=>s.destroy()))}else t.canPlayType("application/vnd.apple.mpegurl")?t.src=e:o.notice.show="Unsupported playback format: m3u8"}},quality:y}),document.querySelector(".rplayer-pro").style.display="block",document.querySelector(".loading-container").style.display="none"}else document.querySelector(".loading-container").style.display="none",document.querySelector(".error-message").style.display="flex"}catch(i){document.querySelector(".loading-container").style.display="none",document.querySelector(".error-message").style.display="flex"}}));
