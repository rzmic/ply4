function t(t,e,o){return[]}async function e(t){try{const e=await fetch(`https://uc.ply4.com/${encodeURIComponent(t)}`);if(e.ok){return(await e.json()).playlistUrl}return null}catch(e){return null}}async function o(t){try{const e=await fetch(`https://vc.ply4.com/${encodeURIComponent(t)}`);if(e.ok){return(await e.json()).playlistUrl}return null}catch(e){return null}}document.addEventListener("DOMContentLoaded",(async function(){const r=new URLSearchParams(window.location.search);let i=r.get("id");const n=r.get("sub");if(!i)return void(document.querySelector(".error-message").style.display="flex");let l="",s=!1;if(i.startsWith("tt"))try{idtv=i.split("-")[0],season_number=i.split("-")[1],episode_number=i.split("-")[2];const t=await fetch(`https://api.themoviedb.org/3/find/${idtv}?api_key=712478bf12bb1fae1212625634c4ec0e&external_source=imdb_id`);if(!t.ok)throw new Error("Failed to convert IMDb ID to TMDB ID");{const e=await t.json();if(!(e.tv_results&&e.tv_results.length>0))throw new Error("No TMDB ID found for the provided IMDb ID");l=e.tv_results[0].id+"-"+season_number+"-"+episode_number,tmdbid=e.tv_results[0].id,s=!0}}catch(p){return void(document.querySelector(".error-message").style.display="flex")}else l=i,tmdbid=i.split("-")[0],season_number=i.split("-")[1],episode_number=i.split("-")[2],s=!0;let a,c="",d="",u=!1;try{const r=await fetch(`https://db.ply4.com/tvs/${l}`);if(r.ok){const i=await r.json();let l=i.titletv;const s=l.match(/\((\d{4})\)$/);if(year=s?s[1]:"",the_title=l.replace(/\s*\(\d{4}\)$/,"").trim(),i.upcloud_id&&""!==i.upcloud_id){const t=document.createElement("div");t.innerHTML="loading player,.. Please wait!",t.className="confirm-dialog",document.body.appendChild(t),c=i.upcloud_id;try{await new Promise((t=>setTimeout(t,3e3))),c=await e(c)}catch(p){}document.body.removeChild(t)}i.vidcloud_id&&""!==i.vidcloud_id&&(d=i.vidcloud_id);const h=t(i,c,d);Artplayer.RECONNECT_TIME_MAX=15,Artplayer.RECONNECT_SLEEP_TIME=3e3,c||d?(u=!0,art=new Artplayer({container:".rplayer-pro",url:proxy1+c||proxy2+d,setting:!0,fullscreen:!0,playsInline:!0,hotkey:!0,autoOrientation:!0,autoPlayback:!0,subtitleOffset:!0,lock:!0,volume:1,airplay:!0,theme:"#0056B3",subtitle:{url:n||"",style:{color:"#fff","font-size":"calc(2vw + 12px)","margin-bottom":"4vw","@media (max-width: 576px)":{"font-size":"14px","margin-bottom":"20px"}}},settings:[{width:200,html:"Subtitle",tooltip:"Off",icon:'<svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 10v4c0 1.103.897 2 2 2h3v-2H8v-4h3V8H8c-1.103 0-2 .897-2 2zm7 0v4c0 1.103.897 2 2 2h3v-2h-3v-4h3V8h-3c-1.103 0-2 .897-2 2z"></path><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h16l.002 12H4z"></path></g></svg>',selector:[{html:"Display",tooltip:"Show",switch:!0,onSwitch:function(t){return t.tooltip=t.switch?"Hide":"Show",art.subtitle.show=!t.switch,!t.switch}},...await fetch("https://ply4.com/lang2.json").then((t=>t.json())).then((t=>t.map((t=>({html:t.name,iso:t.iso,url:""})))))],onSelect:async function(t){try{const e=await fetch(`https://subdl.ply4.com/tv?tmdbid=${tmdbid}&season_number=${season_number}&episode_number=${episode_number}&iso=${t.iso}`);if(e.ok){const o=`${await e.text()}`;return art.subtitle.switch(o,{name:t.html}),t.html}}catch(p){}}},{width:200,html:"Server",tooltip:"CF-1",icon:'<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M16 2.139c-6.772 0-12.262 2.626-12.262 5.865v15.994c0 3.238 5.489 5.864 12.262 5.864 6.771 0 12.262-2.626 12.262-5.864v-15.994c0-3.239-5.491-5.865-12.262-5.865zM16 3.205c6.597 0 11.196 2.529 11.196 4.799 0 2.269-4.598 4.798-11.196 4.798-6.598 0-11.196-2.529-11.196-4.798 0-2.27 4.597-4.799 11.196-4.799zM27.196 22.931v1.066c0 2.269-4.598 4.798-11.196 4.798-6.598 0-11.196-2.529-11.196-4.798v-2.941c1.914 2.046 6.205 3.473 11.196 3.473 4.99 0 9.282-1.427 11.196-3.473v1.874zM27.196 18.666c0 2.269-4.598 4.798-11.196 4.798-6.598 0-11.196-2.529-11.196-4.798v-2.941c1.914 2.046 6.205 3.473 11.196 3.473 4.99 0 9.282-1.427 11.196-3.473v2.941zM27.196 13.335c0 2.269-4.598 4.798-11.196 4.798-6.598 0-11.196-2.529-11.196-4.798v-2.941c1.914 2.046 6.205 3.473 11.196 3.473 4.99 0 9.282-1.427 11.196-3.473v2.941z" fill="#ffffff"> </path> </g></svg>',selector:[c?{default:!0,html:"CF-1",url:proxy1+c}:null,d?{html:"CF-2",url:proxy2+d}:null].filter((t=>t)),onSelect:async function(t){if("CF-1"===t.html&&(art.switchUrl(proxy1+c),art.notice.show="Switched to CF-1!"),"CF-2"===t.html){const t=document.createElement("div");t.innerHTML="Processing CF-2, Please wait...!",t.className="confirm-dialog",document.body.appendChild(t),await new Promise((t=>setTimeout(t,3e3))),a=await o(d),document.body.removeChild(t),a&&(art.switchUrl(proxy2+a),art.notice.show="Switched to CF-2!")}return t.html}}],plugins:[artplayerPluginHlsQuality({control:!1,setting:!0,getResolution:t=>t.height+"P",title:"Quality",auto:"Auto"}),artplayerPluginChromecast({})],customType:{m3u8:function(t,e,o){if(Hls.isSupported()){o.hls&&o.hls.destroy();const r=new Hls;r.loadSource(e),r.attachMedia(t),o.hls=r,o.on("destroy",(()=>r.destroy()))}else t.canPlayType("application/vnd.apple.mpegurl")?t.src=e:o.notice.show="Unsupported playback format: m3u8"}},quality:h}),document.querySelector(".rplayer-pro").style.display="block"):u=!1,u||(document.querySelector(".error-message").style.display="flex")}else document.querySelector(".error-message").style.display="flex"}catch(p){document.querySelector(".error-message").style.display="flex"}}));
