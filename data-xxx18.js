function e(e,t){return[]}async function t(e){try{const t=await fetch(`https://18.ply4.com/${encodeURIComponent(e)}`);if(t.ok){return(await t.json()).m3u8Link}return null}catch(t){return null}}document.addEventListener("DOMContentLoaded",(async function(){let o=new URLSearchParams(window.location.search).get("id");if(!o)return void(document.querySelector(".error-message").style.display="flex");let r="",n=!1;try{const i=await fetch(`https://db.ply4.com/porn/${o}`);if(i.ok){const o=await i.json();o.title;if(o.xnxx_url&&""!==o.xnxx_url){const e=document.createElement("div");e.innerHTML="Initializing Default Server, Please wait!",e.className="confirm-dialog",document.body.appendChild(e),r=o.xnxx_url;try{await new Promise((e=>setTimeout(e,3e3))),r=await t(r)}catch(l){}document.body.removeChild(e)}const a=e(o,r);r?(n=!0,art=new Artplayer({container:".rplayer-pro",url:proxy18+r,setting:!0,fullscreen:!0,playsInline:!0,hotkey:!0,autoOrientation:!0,autoPlayback:!0,hotkey:!0,lock:!0,volume:1,airplay:!0,theme:"#0056B3",settings:[{width:200,html:"Server",tooltip:"CF-XN",icon:'<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M16 2.139c-6.772 0-12.262 2.626-12.262 5.865v15.994c0 3.238 5.489 5.864 12.262 5.864 6.771 0 12.262-2.626 12.262-5.864v-15.994c0-3.239-5.491-5.865-12.262-5.865zM16 3.205c6.597 0 11.196 2.529 11.196 4.799 0 2.269-4.598 4.798-11.196 4.798-6.598 0-11.196-2.529-11.196-4.798 0-2.27 4.597-4.799 11.196-4.799zM27.196 22.931v1.066c0 2.269-4.598 4.798-11.196 4.798-6.598 0-11.196-2.529-11.196-4.798v-2.941c1.914 2.046 6.205 3.473 11.196 3.473 4.99 0 9.282-1.427 11.196-3.473v1.874zM27.196 18.666c0 2.269-4.598 4.798-11.196 4.798-6.598 0-11.196-2.529-11.196-4.798v-2.941c1.914 2.046 6.205 3.473 11.196 3.473 4.99 0 9.282-1.427 11.196-3.473v2.941zM27.196 13.335c0 2.269-4.598 4.798-11.196 4.798-6.598 0-11.196-2.529-11.196-4.798v-2.941c1.914 2.046 6.205 3.473 11.196 3.473 4.99 0 9.282-1.427 11.196-3.473v2.941z" fill="#ffffff"> </path> </g></svg>',selector:[r?{default:!0,html:"CF-XN",url:proxy18+r}:null].filter((e=>e)),onSelect:async function(e){return"CF-XN"===e.html&&(art.switchUrl(proxy18+r),art.notice.show="Switched to CF-XN!"),e.html}}],plugins:[artplayerPluginHlsQuality({control:!1,setting:!0,getResolution:e=>e.height+"P",title:"Quality",auto:"Auto"}),artplayerPluginChromecast({setting:!0,control:!1})],customType:{m3u8:function(e,t,o){if(Hls.isSupported()){o.hls&&o.hls.destroy();const r=new Hls;r.loadSource(t),r.attachMedia(e),o.hls=r,o.on("destroy",(()=>r.destroy()))}else e.canPlayType("application/vnd.apple.mpegurl")?e.src=t:o.notice.show="Unsupported playback format: m3u8"}},quality:a}),document.querySelector(".rplayer-pro").style.display="block"):n=!1,n||(document.querySelector(".error-message").style.display="flex")}else document.querySelector(".error-message").style.display="flex"}catch(l){document.querySelector(".error-message").style.display="flex"}}));
