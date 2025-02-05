! function(e, t, r, a, o) {
    var i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
        n = "function" == typeof i[a] && i[a],
        s = n.cache || {},
        l = "undefined" != typeof module && "function" == typeof module.require && module.require.bind(module);

    function c(t, r) {
        if (!s[t]) {
            if (!e[t]) {
                var o = "function" == typeof i[a] && i[a];
                if (!r && o) return o(t, !0);
                if (n) return n(t, !0);
                if (l && "string" == typeof t) return l(t);
                var p = Error("Cannot find module '" + t + "'");
                throw p.code = "MODULE_NOT_FOUND", p
            }
            d.resolve = function(r) {
                var a = e[t][1][r];
                return null != a ? a : r
            }, d.cache = {};
            var u = s[t] = new c.Module(t);
            e[t][0].call(u.exports, d, u, u.exports, this)
        }
        return s[t].exports;

        function d(e) {
            var t = d.resolve(e);
            return !1 === t ? {} : c(t)
        }
    }
    c.isParcelRequire = !0, c.Module = function(e) {
        this.id = e, this.bundle = c, this.exports = {}
    }, c.modules = e, c.cache = s, c.parent = n, c.register = function(t, r) {
        e[t] = [function(e, t) {
            t.exports = r
        }, {}]
    }, Object.defineProperty(c, "root", {
        get: function() {
            return i[a]
        }
    }), i[a] = c;
    for (var p = 0; p < t.length; p++) c(t[p]);
    if (r) {
        var u = c(r);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = u : "function" == typeof define && define.amd && define(function() {
            return u
        })
    }
}({
    "5lTcX": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = e("bundle-text:./style/index.less"),
            i = a.interopDefault(o),
            n = e("option-validator"),
            s = a.interopDefault(n),
            l = e("./utils/emitter"),
            c = a.interopDefault(l),
            p = e("./utils"),
            u = e("./scheme"),
            d = a.interopDefault(u),
            f = e("./config"),
            h = a.interopDefault(f),
            m = e("./template"),
            g = a.interopDefault(m),
            v = e("./i18n"),
            y = a.interopDefault(v),
            b = e("./player"),
            x = a.interopDefault(b),
            w = e("./control"),
            j = a.interopDefault(w),
            k = e("./contextmenu"),
            C = a.interopDefault(k),
            S = e("./info"),
            I = a.interopDefault(S),
            T = e("./subtitle"),
            $ = a.interopDefault(T),
            E = e("./events"),
            M = a.interopDefault(E),
            F = e("./hotkey"),
            H = a.interopDefault(F),
            D = e("./layer"),
            z = a.interopDefault(D),
            A = e("./loading"),
            R = a.interopDefault(A),
            O = e("./notice"),
            L = a.interopDefault(O),
            Y = e("./mask"),
            P = a.interopDefault(Y),
            V = e("./icons"),
            q = a.interopDefault(V),
            _ = e("./setting"),
            N = a.interopDefault(_),
            B = e("./storage"),
            W = a.interopDefault(B),
            U = e("./plugins"),
            K = a.interopDefault(U);
        let Z = 0,
            X = [];
        class G extends c.default {
            constructor(e, t) {
                super(), this.id = ++Z;
                let r = p.mergeDeep(G.option, e);
                if (r.container = e.container, this.option = (0, s.default)(r, d.default), this.isLock = !1, this.isReady = !1, this.isFocus = !1, this.isInput = !1, this.isRotate = !1, this.isDestroy = !1, this.template = new g.default(this), this.events = new M.default(this), this.storage = new W.default(this), this.icons = new q.default(this), this.i18n = new y.default(this), this.notice = new L.default(this), this.player = new x.default(this), this.layers = new z.default(this), this.controls = new j.default(this), this.contextmenu = new C.default(this), this.subtitle = new $.default(this), this.info = new I.default(this), this.loading = new R.default(this), this.hotkey = new H.default(this), this.mask = new P.default(this), this.setting = new N.default(this), this.plugins = new K.default(this), "function" == typeof t && this.on("ready", () => t.call(this, this)), G.DEBUG) {
                    let e = e => console.log(`[ART.${this.id}] -> ${e}`);
                    e("Version@" + G.version), e("Env@" + G.env), e("Build@" + G.build);
                    for (let t = 0; t < h.default.events.length; t++) this.on("video:" + h.default.events[t], t => e("Event@" + t.type))
                }
                X.push(this)
            }
            static get instances() {
                return X
            }
            static get version() {
                return "5.2.2"
            }
            static get env() {
                return "production"
            }
            static get build() {
                return "2025-01-19 17:32:44"
            }
            static get config() {
                return h.default
            }
            static get utils() {
                return p
            }
            static get scheme() {
                return d.default
            }
            static get Emitter() {
                return c.default
            }
            static get validator() {
                return s.default
            }
            static get kindOf() {
                return s.default.kindOf
            }
            static get html() {
                return g.default.html
            }
            static get option() {
                return {
                    id: "",
                    container: "#artplayer",
                    url: "",
                    poster: "",
                    type: "",
                    theme: "#f00",
                    volume: .7,
                    isLive: !1,
                    muted: !1,
                    autoplay: !1,
                    autoSize: !1,
                    autoMini: !1,
                    loop: !1,
                    flip: !1,
                    playbackRate: !1,
                    aspectRatio: !1,
                    screenshot: !1,
                    setting: !1,
                    hotkey: !0,
                    pip: !1,
                    mutex: !0,
                    backdrop: !0,
                    fullscreen: !1,
                    fullscreenWeb: !1,
                    subtitleOffset: !1,
                    miniProgressBar: !1,
                    useSSR: !1,
                    playsInline: !0,
                    lock: !1,
                    fastForward: !1,
                    autoPlayback: !1,
                    autoOrientation: !1,
                    airplay: !1,
                    proxy: void 0,
                    layers: [],
                    contextmenu: [],
                    controls: [],
                    settings: [],
                    quality: [],
                    highlight: [],
                    plugins: [],
                    thumbnails: {
                        url: "",
                        number: 60,
                        column: 10,
                        width: 0,
                        height: 0,
                        scale: 1
                    },
                    subtitle: {
                        url: "",
                        type: "",
                        style: {},
                        name: "",
                        escape: !0,
                        encoding: "utf-8",
                        onVttLoad: e => e
                    },
                    moreVideoAttr: {
                        controls: !1,
                        preload: p.isSafari ? "auto" : "metadata"
                    },
                    i18n: {},
                    icons: {},
                    cssVar: {},
                    customType: {},
                    lang: navigator?.language.toLowerCase()
                }
            }
            get proxy() {
                return this.events.proxy
            }
            get query() {
                return this.template.query
            }
            get video() {
                return this.template.$video
            }
            destroy(e = !0) {
                this.events.destroy(), this.template.destroy(e), X.splice(X.indexOf(this), 1), this.isDestroy = !0, this.emit("destroy")
            }
        }
        r.default = G, G.STYLE = i.default, G.DEBUG = !1, G.CONTEXTMENU = !0, G.NOTICE_TIME = 2e3, G.SETTING_WIDTH = 250, G.SETTING_ITEM_WIDTH = 200, G.SETTING_ITEM_HEIGHT = 35, G.RESIZE_TIME = 200, G.SCROLL_TIME = 200, G.SCROLL_GAP = 50, G.AUTO_PLAYBACK_MAX = 10, G.AUTO_PLAYBACK_MIN = 5, G.AUTO_PLAYBACK_TIMEOUT = 3e3, G.RECONNECT_TIME_MAX = 5, G.RECONNECT_SLEEP_TIME = 1e3, G.CONTROL_HIDE_TIME = 3e3, G.DBCLICK_TIME = 300, G.DBCLICK_FULLSCREEN = !0, G.MOBILE_DBCLICK_PLAY = !0, G.MOBILE_CLICK_PLAY = !1, G.AUTO_ORIENTATION_TIME = 200, G.INFO_LOOP_TIME = 1e3, G.FAST_FORWARD_VALUE = 3, G.FAST_FORWARD_TIME = 1e3, G.TOUCH_MOVE_RATIO = .5, G.VOLUME_STEP = .1, G.SEEK_STEP = 5, G.PLAYBACK_RATE = [.5, .75, 1, 1.25, 1.5, 2], G.ASPECT_RATIO = ["default", "4:3", "16:9"], G.FLIP = ["normal", "horizontal", "vertical"], G.FULLSCREEN_WEB_IN_BODY = !1, G.LOG_VERSION = !0, G.USE_RAF = !1, p.isBrowser && (window.Artplayer = G, p.setStyleText("artplayer-style", i.default), setTimeout(() => {
            G.LOG_VERSION && console.log(`%c Ply4.com %c ${G.version} %c https://ply4.com`, "color: #fff; background: #5f5f5f", "color: #fff; background: #4bc729", "")
        }, 100))
    }, {
        "bundle-text:./style/index.less": "0016T",
        "option-validator": "bAWi2",
        "./utils/emitter": "66mFZ",
        "./utils": "71aH7",
        "./scheme": "AKEiO",
        "./config": "lyjeQ",
        "./template": "X13Zf",
        "./i18n": "3jKkj",
        "./player": "a90nx",
        "./control": "8Z0Uf",
        "./contextmenu": "2KYsr",
        "./info": "02ajl",
        "./subtitle": "eSWto",
        "./events": "jo4S1",
        "./hotkey": "6NoFy",
        "./layer": "6G6hZ",
        "./loading": "3dsEe",
        "./notice": "dWGTw",
        "./mask": "5POkG",
        "./icons": "6OeNg",
        "./setting": "3eYNH",
        "./storage": "2aaJe",
        "./plugins": "8MTUM",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "0016T": [function(e, t, r) {
        t.exports = '.art-video-player{--art-theme:red;--art-font-color:#fff;--art-background-color:#000;--art-text-shadow-color:#00000080;--art-transition-duration:.2s;--art-padding:10px;--art-border-radius:3px;--art-progress-height:6px;--art-progress-color:#ffffff40;--art-hover-color:#ffffff40;--art-loaded-color:#ffffff40;--art-state-size:80px;--art-state-opacity:.8;--art-bottom-height:100px;--art-bottom-offset:20px;--art-bottom-gap:5px;--art-highlight-width:8px;--art-highlight-color:#ffffff80;--art-control-height:46px;--art-control-opacity:.75;--art-control-icon-size:36px;--art-control-icon-scale:1.1;--art-volume-height:120px;--art-volume-handle-size:14px;--art-lock-size:36px;--art-indicator-scale:0;--art-indicator-size:16px;--art-fullscreen-web-index:9999;--art-settings-icon-size:24px;--art-settings-max-height:300px;--art-selector-max-height:300px;--art-contextmenus-min-width:250px;--art-subtitle-font-size:20px;--art-subtitle-gap:5px;--art-subtitle-bottom:15px;--art-subtitle-border:#000;--art-widget-background:#000000d9;--art-tip-background:#000000b3;--art-scrollbar-size:4px;--art-scrollbar-background:#ffffff40;--art-scrollbar-background-hover:#ffffff80;--art-mini-progress-height:2px}.art-bg-cover{background-position:50%;background-repeat:no-repeat;background-size:cover}.art-bottom-gradient{background-image:linear-gradient(#0000,#0006,#000);background-position:bottom;background-repeat:repeat-x}.art-backdrop-filter{backdrop-filter:saturate(180%)blur(20px);background-color:#000000bf!important}.art-truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.art-video-player{zoom:1;text-align:left;user-select:none;box-sizing:border-box;color:var(--art-font-color);background-color:var(--art-background-color);text-shadow:0 0 2px var(--art-text-shadow-color);-webkit-tap-highlight-color:#0000;-ms-touch-action:manipulation;touch-action:manipulation;-ms-high-contrast-adjust:none;direction:ltr;outline:0;width:100%;height:100%;margin:0 auto;padding:0;font-family:PingFang SC,Helvetica Neue,Microsoft YaHei,Roboto,Arial,sans-serif;font-size:14px;line-height:1.3;position:relative}.art-video-player *,.art-video-player :before,.art-video-player :after{box-sizing:border-box}.art-video-player ::-webkit-scrollbar{width:var(--art-scrollbar-size);height:var(--art-scrollbar-size)}.art-video-player ::-webkit-scrollbar-thumb{background-color:var(--art-scrollbar-background)}.art-video-player ::-webkit-scrollbar-thumb:hover{background-color:var(--art-scrollbar-background-hover)}.art-video-player img{vertical-align:top;max-width:100%}.art-video-player svg{fill:var(--art-font-color)}.art-video-player a{color:var(--art-font-color);text-decoration:none}.art-icon{justify-content:center;align-items:center;line-height:1;display:flex}.art-video-player.art-backdrop .art-contextmenus,.art-video-player.art-backdrop .art-info,.art-video-player.art-backdrop .art-settings,.art-video-player.art-backdrop .art-layer-auto-playback,.art-video-player.art-backdrop .art-selector-list,.art-video-player.art-backdrop .art-volume-inner{backdrop-filter:saturate(180%)blur(20px);background-color:#000000bf!important}.art-video{z-index:10;cursor:pointer;width:100%;height:100%;position:absolute;inset:0}.art-poster{z-index:11;pointer-events:none;background-position:50%;background-repeat:no-repeat;background-size:cover;width:100%;height:100%;position:absolute;inset:0}.art-video-player .art-subtitle{z-index:20;text-align:center;pointer-events:none;justify-content:center;align-items:center;gap:var(--art-subtitle-gap);bottom:var(--art-subtitle-bottom);font-size:var(--art-subtitle-font-size);transition:bottom var(--art-transition-duration)ease;text-shadow:var(--art-subtitle-border)1px 0 1px,var(--art-subtitle-border)0 1px 1px,var(--art-subtitle-border)-1px 0 1px,var(--art-subtitle-border)0 -1px 1px,var(--art-subtitle-border)1px 1px 1px,var(--art-subtitle-border)-1px -1px 1px,var(--art-subtitle-border)1px -1px 1px,var(--art-subtitle-border)-1px 1px 1px;flex-direction:column;width:100%;padding:0 5%;display:none;position:absolute}.art-video-player.art-subtitle-show .art-subtitle{display:flex}.art-video-player.art-control-show .art-subtitle{bottom:calc(var(--art-control-height) + var(--art-subtitle-bottom))}.art-danmuku{z-index:30;pointer-events:none;width:100%;height:100%;position:absolute;inset:0;overflow:hidden}.art-video-player .art-layers{z-index:40;pointer-events:none;width:100%;height:100%;display:none;position:absolute;inset:0}.art-video-player .art-layers .art-layer{pointer-events:auto}.art-video-player.art-layer-show .art-layers{display:flex}.art-video-player .art-mask{z-index:50;pointer-events:none;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:absolute;inset:0}.art-video-player .art-mask .art-state{opacity:0;width:var(--art-state-size);height:var(--art-state-size);transition:all var(--art-transition-duration)ease;justify-content:center;align-items:center;display:flex;transform:scale(2)}.art-video-player.art-mask-show .art-state{cursor:pointer;pointer-events:auto;opacity:var(--art-state-opacity);transform:scale(1)}.art-video-player.art-loading-show .art-state{display:none}.art-video-player .art-loading{z-index:70;pointer-events:none;justify-content:center;align-items:center;width:100%;height:100%;display:none;position:absolute;inset:0}.art-video-player.art-loading-show .art-loading{display:flex}.art-video-player .art-bottom{z-index:60;opacity:0;pointer-events:none;padding:0 var(--art-padding);transition:all var(--art-transition-duration)ease;background-size:100% var(--art-bottom-height);background-image:linear-gradient(#0000,#0006,#000);background-position:bottom;background-repeat:repeat-x;flex-direction:column;justify-content:flex-end;width:100%;height:100%;display:flex;position:absolute;inset:0;overflow:hidden}.art-video-player .art-bottom .art-controls,.art-video-player .art-bottom .art-progress{transform:translateY(var(--art-bottom-offset));transition:transform var(--art-transition-duration)ease}.art-video-player.art-control-show .art-bottom,.art-video-player.art-hover .art-bottom{opacity:1}.art-video-player.art-control-show .art-bottom .art-controls,.art-video-player.art-hover .art-bottom .art-controls,.art-video-player.art-control-show .art-bottom .art-progress,.art-video-player.art-hover .art-bottom .art-progress{transform:translateY(0)}.art-bottom .art-progress{z-index:0;pointer-events:auto;padding-bottom:var(--art-bottom-gap);position:relative}.art-bottom .art-progress .art-control-progress{cursor:pointer;height:var(--art-progress-height);justify-content:center;align-items:center;display:flex;position:relative}.art-bottom .art-progress .art-control-progress .art-control-progress-inner{transition:height var(--art-transition-duration)ease;background-color:var(--art-progress-color);align-items:center;width:100%;height:50%;display:flex;position:relative}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-hover{z-index:0;background-color:var(--art-hover-color);width:0%;height:100%;position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-loaded{z-index:10;background-color:var(--art-loaded-color);width:0%;height:100%;position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-played{z-index:20;background-color:var(--art-theme);width:0%;height:100%;position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight{z-index:30;pointer-events:none;width:100%;height:100%;position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight span{z-index:0;pointer-events:auto;transform:translateX(calc(var(--art-highlight-width)/-2));background-color:var(--art-highlight-color);width:100%;height:100%;position:absolute;inset:0 auto 0 0;width:var(--art-highlight-width)!important}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator{z-index:40;width:var(--art-indicator-size);height:var(--art-indicator-size);transform:scale(var(--art-indicator-scale));margin-left:calc(var(--art-indicator-size)/-2);transition:transform var(--art-transition-duration)ease;border-radius:50%;justify-content:center;align-items:center;display:flex;position:absolute;left:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator .art-icon{pointer-events:none;width:100%;height:100%}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:hover{transform:scale(1.2)!important}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:active{transform:scale(1)!important}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-tip{z-index:50;border-radius:var(--art-border-radius);white-space:nowrap;background-color:var(--art-tip-background);padding:3px 5px;font-size:12px;line-height:1;display:none;position:absolute;top:-25px;left:0}.art-bottom .art-progress .art-control-progress:hover .art-control-progress-inner{height:100%}.art-bottom .art-progress .art-control-thumbnails{bottom:calc(var(--art-bottom-gap) + 10px);border-radius:var(--art-border-radius);pointer-events:none;background-color:var(--art-widget-background);display:none;position:absolute;left:0;box-shadow:0 1px 3px #0003,0 1px 2px -1px #0003}.art-bottom:hover .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator{transform:scale(1)}.art-controls{z-index:10;pointer-events:auto;height:var(--art-control-height);justify-content:space-between;align-items:center;display:flex;position:relative}.art-controls .art-controls-left,.art-controls .art-controls-right{height:100%;display:flex}.art-controls .art-controls-center{flex:1;justify-content:center;align-items:center;height:100%;padding:0 10px;display:none}.art-controls .art-controls-right{justify-content:flex-end}.art-controls .art-control{cursor:pointer;white-space:nowrap;opacity:var(--art-control-opacity);min-height:var(--art-control-height);min-width:var(--art-control-height);transition:opacity var(--art-transition-duration)ease;flex-shrink:0;justify-content:center;align-items:center;display:flex}.art-controls .art-control .art-icon{height:var(--art-control-icon-size);width:var(--art-control-icon-size);transform:scale(var(--art-control-icon-scale));transition:transform var(--art-transition-duration)ease}.art-controls .art-control .art-icon:active{transform:scale(calc(var(--art-control-icon-scale)*.8))}.art-controls .art-control:hover{opacity:1}.art-control-volume{position:relative}.art-control-volume .art-volume-panel{text-align:center;cursor:default;opacity:0;pointer-events:none;left:0;right:0;bottom:var(--art-control-height);width:var(--art-control-height);height:var(--art-volume-height);transition:all var(--art-transition-duration)ease;justify-content:center;align-items:center;padding:0 5px;font-size:12px;display:flex;position:absolute;transform:translateY(10px)}.art-control-volume .art-volume-panel .art-volume-inner{border-radius:var(--art-border-radius);background-color:var(--art-widget-background);flex-direction:column;align-items:center;gap:10px;width:100%;height:100%;padding:10px 0 12px;display:flex}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider{cursor:pointer;flex:1;justify-content:center;width:100%;display:flex;position:relative}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-handle{border-radius:var(--art-border-radius);background-color:#ffffff40;justify-content:center;width:2px;display:flex;position:relative;overflow:hidden}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-handle .art-volume-loaded{z-index:0;background-color:var(--art-theme);width:100%;height:100%;position:absolute;inset:0}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-indicator{width:var(--art-volume-handle-size);height:var(--art-volume-handle-size);margin-top:calc(var(--art-volume-handle-size)/-2);background-color:var(--art-theme);transition:transform var(--art-transition-duration)ease;border-radius:100%;flex-shrink:0;position:absolute;transform:scale(1)}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider:active .art-volume-indicator{transform:scale(.9)}.art-control-volume:hover .art-volume-panel{opacity:1;pointer-events:auto;transform:translateY(0)}.art-video-player .art-notice{z-index:80;padding:var(--art-padding);pointer-events:none;width:100%;height:auto;display:none;position:absolute;inset:0 0 auto}.art-video-player .art-notice .art-notice-inner{border-radius:var(--art-border-radius);background-color:var(--art-tip-background);padding:5px;line-height:1;display:inline-flex}.art-video-player.art-notice-show .art-notice{display:flex}.art-video-player .art-contextmenus{z-index:120;border-radius:var(--art-border-radius);background-color:var(--art-widget-background);min-width:var(--art-contextmenus-min-width);flex-direction:column;padding:5px 0;font-size:12px;display:none;position:absolute}.art-video-player .art-contextmenus .art-contextmenu{cursor:pointer;border-bottom:1px solid #ffffff1a;padding:10px 15px;display:flex}.art-video-player .art-contextmenus .art-contextmenu span{padding:0 8px}.art-video-player .art-contextmenus .art-contextmenu span:hover,.art-video-player .art-contextmenus .art-contextmenu span.art-current{color:var(--art-theme)}.art-video-player .art-contextmenus .art-contextmenu:hover{background-color:#ffffff1a}.art-video-player .art-contextmenus .art-contextmenu:last-child{border-bottom:none}.art-video-player.art-contextmenu-show .art-contextmenus{display:flex}.art-video-player .art-settings{z-index:90;border-radius:var(--art-border-radius);max-height:var(--art-settings-max-height);left:auto;right:var(--art-padding);bottom:var(--art-control-height);transition:all var(--art-transition-duration)ease;background-color:var(--art-widget-background);flex-direction:column;display:none;position:absolute;overflow:hidden auto}.art-video-player .art-settings .art-setting-panel{flex-direction:column;display:none}.art-video-player .art-settings .art-setting-panel.art-current{display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item{cursor:pointer;transition:background-color var(--art-transition-duration)ease;justify-content:space-between;align-items:center;padding:0 5px;display:flex;overflow:hidden}.art-video-player .art-settings .art-setting-panel .art-setting-item:hover{background-color:#ffffff1a}.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current{color:var(--art-theme)}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-icon-check{visibility:hidden;height:15px}.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current .art-icon-check{visibility:visible}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left{flex-shrink:0;justify-content:center;align-items:center;gap:5px;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left .art-setting-item-left-icon{height:var(--art-settings-icon-size);width:var(--art-settings-icon-size);justify-content:center;align-items:center;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right{justify-content:center;align-items:center;gap:5px;font-size:12px;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-tooltip{white-space:nowrap;color:#ffffff80}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-icon{justify-content:center;align-items:center;min-width:32px;height:24px;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-range{appearance:none;background-color:#fff3;outline:none;width:80px;height:3px}.art-video-player .art-settings .art-setting-panel .art-setting-item-back{border-bottom:1px solid #ffffff1a}.art-video-player.art-setting-show .art-settings{display:flex}.art-video-player .art-info{left:var(--art-padding);top:var(--art-padding);z-index:100;border-radius:var(--art-border-radius);background-color:var(--art-widget-background);padding:10px;font-size:12px;display:none;position:absolute}.art-video-player .art-info .art-info-panel{flex-direction:column;gap:5px;display:flex}.art-video-player .art-info .art-info-panel .art-info-item{align-items:center;gap:5px;display:flex}.art-video-player .art-info .art-info-panel .art-info-item .art-info-title{text-align:right;width:100px}.art-video-player .art-info .art-info-panel .art-info-item .art-info-content{text-overflow:ellipsis;white-space:nowrap;user-select:all;width:250px;overflow:hidden}.art-video-player .art-info .art-info-close{cursor:pointer;position:absolute;top:5px;right:5px}.art-video-player.art-info-show .art-info{display:flex}.art-hide-cursor *{cursor:none!important}.art-video-player[data-aspect-ratio]{overflow:hidden}.art-video-player[data-aspect-ratio] .art-video{object-fit:fill;box-sizing:content-box}.art-fullscreen{--art-progress-height:8px;--art-indicator-size:20px;--art-control-height:60px;--art-control-icon-scale:1.3}.art-fullscreen-web{--art-progress-height:8px;--art-indicator-size:20px;--art-control-height:60px;--art-control-icon-scale:1.3;z-index:var(--art-fullscreen-web-index);width:100%;height:100%;position:fixed;inset:0}.art-mini-popup{z-index:9999;border-radius:var(--art-border-radius);cursor:move;user-select:none;background:#000;width:320px;height:180px;transition:opacity .2s;position:fixed;overflow:hidden;box-shadow:0 0 5px #00000080}.art-mini-popup svg{fill:#fff}.art-mini-popup .art-video{pointer-events:none}.art-mini-popup .art-mini-close{z-index:20;cursor:pointer;opacity:0;transition:opacity .2s;position:absolute;top:10px;right:10px}.art-mini-popup .art-mini-state{z-index:30;pointer-events:none;opacity:0;background-color:#00000040;justify-content:center;align-items:center;width:100%;height:100%;transition:opacity .2s;display:flex;position:absolute;inset:0}.art-mini-popup .art-mini-state .art-icon{opacity:.75;cursor:pointer;pointer-events:auto;transition:transform .2s;transform:scale(3)}.art-mini-popup .art-mini-state .art-icon:active{transform:scale(2.5)}.art-mini-popup.art-mini-droging{opacity:.9}.art-mini-popup:hover .art-mini-close,.art-mini-popup:hover .art-mini-state{opacity:1}.art-video-player[data-flip=horizontal] .art-video{transform:scaleX(-1)}.art-video-player[data-flip=vertical] .art-video{transform:scaleY(-1)}.art-video-player .art-layer-lock{height:var(--art-lock-size);width:var(--art-lock-size);top:50%;left:var(--art-padding);background-color:var(--art-tip-background);border-radius:50%;justify-content:center;align-items:center;display:none;position:absolute;transform:translateY(-50%)}.art-video-player .art-layer-auto-playback{border-radius:var(--art-border-radius);left:var(--art-padding);bottom:calc(var(--art-control-height) + var(--art-bottom-gap) + 10px);background-color:var(--art-widget-background);align-items:center;gap:10px;padding:10px;line-height:1;display:none;position:absolute}.art-video-player .art-layer-auto-playback .art-auto-playback-close{cursor:pointer;justify-content:center;align-items:center;display:flex}.art-video-player .art-layer-auto-playback .art-auto-playback-close svg{fill:var(--art-theme);width:15px;height:15px}.art-video-player .art-layer-auto-playback .art-auto-playback-jump{color:var(--art-theme);cursor:pointer}.art-video-player.art-lock .art-subtitle{bottom:var(--art-subtitle-bottom)!important}.art-video-player.art-mini-progress-bar .art-bottom,.art-video-player.art-lock .art-bottom{opacity:1;background-image:none;padding:0}.art-video-player.art-mini-progress-bar .art-bottom .art-controls,.art-video-player.art-lock .art-bottom .art-controls,.art-video-player.art-mini-progress-bar .art-bottom .art-progress,.art-video-player.art-lock .art-bottom .art-progress{transform:translateY(calc(var(--art-control-height) + var(--art-bottom-gap) + var(--art-progress-height)/4))}.art-video-player.art-mini-progress-bar .art-bottom .art-progress-indicator,.art-video-player.art-lock .art-bottom .art-progress-indicator{display:none!important}.art-video-player.art-control-show .art-layer-lock{display:flex}.art-control-selector{justify-content:center;display:flex;position:relative}.art-control-selector .art-selector-list{text-align:center;border-radius:var(--art-border-radius);opacity:0;pointer-events:none;bottom:var(--art-control-height);max-height:var(--art-selector-max-height);background-color:var(--art-widget-background);transition:all var(--art-transition-duration)ease;flex-direction:column;align-items:center;display:flex;position:absolute;overflow:hidden auto;transform:translateY(10px)}.art-control-selector .art-selector-list .art-selector-item{flex-shrink:0;justify-content:center;align-items:center;width:100%;padding:10px 15px;line-height:1;display:flex}.art-control-selector .art-selector-list .art-selector-item:hover{background-color:#ffffff1a}.art-control-selector .art-selector-list .art-selector-item:hover,.art-control-selector .art-selector-list .art-selector-item.art-current{color:var(--art-theme)}.art-control-selector:hover .art-selector-list{opacity:1;pointer-events:auto;transform:translateY(0)}[class*=hint--]{font-style:normal;display:inline-block;position:relative}[class*=hint--]:before,[class*=hint--]:after{visibility:hidden;opacity:0;z-index:1000000;pointer-events:none;transition:all .3s;position:absolute;transform:translate(0,0)}[class*=hint--]:hover:before,[class*=hint--]:hover:after{visibility:visible;opacity:1;transition-delay:.1s}[class*=hint--]:before{content:"";z-index:1000001;background:0 0;border:6px solid #0000;position:absolute}[class*=hint--]:after{color:#fff;white-space:nowrap;background:#000;padding:8px 10px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:12px}[class*=hint--][aria-label]:after{content:attr(aria-label)}[class*=hint--][data-hint]:after{content:attr(data-hint)}[aria-label=""]:before,[aria-label=""]:after,[data-hint=""]:before,[data-hint=""]:after{display:none!important}.hint--top-left:before,.hint--top-right:before,.hint--top:before{border-top-color:#000}.hint--bottom-left:before,.hint--bottom-right:before,.hint--bottom:before{border-bottom-color:#000}.hint--left:before{border-left-color:#000}.hint--right:before{border-right-color:#000}.hint--top:before{margin-bottom:-11px}.hint--top:before,.hint--top:after{bottom:100%;left:50%}.hint--top:before{left:calc(50% - 6px)}.hint--top:after{transform:translate(-50%)}.hint--top:hover:before{transform:translateY(-8px)}.hint--top:hover:after{transform:translate(-50%)translateY(-8px)}.hint--bottom:before{margin-top:-11px}.hint--bottom:before,.hint--bottom:after{top:100%;left:50%}.hint--bottom:before{left:calc(50% - 6px)}.hint--bottom:after{transform:translate(-50%)}.hint--bottom:hover:before{transform:translateY(8px)}.hint--bottom:hover:after{transform:translate(-50%)translateY(8px)}.hint--right:before{margin-bottom:-6px;margin-left:-11px}.hint--right:after{margin-bottom:-14px}.hint--right:before,.hint--right:after{bottom:50%;left:100%}.hint--right:hover:before,.hint--right:hover:after{transform:translate(8px)}.hint--left:before{margin-bottom:-6px;margin-right:-11px}.hint--left:after{margin-bottom:-14px}.hint--left:before,.hint--left:after{bottom:50%;right:100%}.hint--left:hover:before,.hint--left:hover:after{transform:translate(-8px)}.hint--top-left:before{margin-bottom:-11px}.hint--top-left:before,.hint--top-left:after{bottom:100%;left:50%}.hint--top-left:before{left:calc(50% - 6px)}.hint--top-left:after{margin-left:12px;transform:translate(-100%)}.hint--top-left:hover:before{transform:translateY(-8px)}.hint--top-left:hover:after{transform:translate(-100%)translateY(-8px)}.hint--top-right:before{margin-bottom:-11px}.hint--top-right:before,.hint--top-right:after{bottom:100%;left:50%}.hint--top-right:before{left:calc(50% - 6px)}.hint--top-right:after{margin-left:-12px;transform:translate(0)}.hint--top-right:hover:before,.hint--top-right:hover:after{transform:translateY(-8px)}.hint--bottom-left:before{margin-top:-11px}.hint--bottom-left:before,.hint--bottom-left:after{top:100%;left:50%}.hint--bottom-left:before{left:calc(50% - 6px)}.hint--bottom-left:after{margin-left:12px;transform:translate(-100%)}.hint--bottom-left:hover:before{transform:translateY(8px)}.hint--bottom-left:hover:after{transform:translate(-100%)translateY(8px)}.hint--bottom-right:before{margin-top:-11px}.hint--bottom-right:before,.hint--bottom-right:after{top:100%;left:50%}.hint--bottom-right:before{left:calc(50% - 6px)}.hint--bottom-right:after{margin-left:-12px;transform:translate(0)}.hint--bottom-right:hover:before,.hint--bottom-right:hover:after{transform:translateY(8px)}.hint--small:after,.hint--medium:after,.hint--large:after{white-space:normal;word-wrap:break-word;line-height:1.4em}.hint--small:after{width:80px}.hint--medium:after{width:150px}.hint--large:after{width:300px}[class*=hint--]:after{text-shadow:0 -1px #000;box-shadow:4px 4px 8px #0000004d}.hint--error:after{text-shadow:0 -1px #592726;background-color:#b34e4d}.hint--error.hint--top-left:before,.hint--error.hint--top-right:before,.hint--error.hint--top:before{border-top-color:#b34e4d}.hint--error.hint--bottom-left:before,.hint--error.hint--bottom-right:before,.hint--error.hint--bottom:before{border-bottom-color:#b34e4d}.hint--error.hint--left:before{border-left-color:#b34e4d}.hint--error.hint--right:before{border-right-color:#b34e4d}.hint--warning:after{text-shadow:0 -1px #6c5328;background-color:#c09854}.hint--warning.hint--top-left:before,.hint--warning.hint--top-right:before,.hint--warning.hint--top:before{border-top-color:#c09854}.hint--warning.hint--bottom-left:before,.hint--warning.hint--bottom-right:before,.hint--warning.hint--bottom:before{border-bottom-color:#c09854}.hint--warning.hint--left:before{border-left-color:#c09854}.hint--warning.hint--right:before{border-right-color:#c09854}.hint--info:after{text-shadow:0 -1px #1a3c4d;background-color:#3986ac}.hint--info.hint--top-left:before,.hint--info.hint--top-right:before,.hint--info.hint--top:before{border-top-color:#3986ac}.hint--info.hint--bottom-left:before,.hint--info.hint--bottom-right:before,.hint--info.hint--bottom:before{border-bottom-color:#3986ac}.hint--info.hint--left:before{border-left-color:#3986ac}.hint--info.hint--right:before{border-right-color:#3986ac}.hint--success:after{text-shadow:0 -1px #1a321a;background-color:#458746}.hint--success.hint--top-left:before,.hint--success.hint--top-right:before,.hint--success.hint--top:before{border-top-color:#458746}.hint--success.hint--bottom-left:before,.hint--success.hint--bottom-right:before,.hint--success.hint--bottom:before{border-bottom-color:#458746}.hint--success.hint--left:before{border-left-color:#458746}.hint--success.hint--right:before{border-right-color:#458746}.hint--always:after,.hint--always:before{opacity:1;visibility:visible}.hint--always.hint--top:before{transform:translateY(-8px)}.hint--always.hint--top:after{transform:translate(-50%)translateY(-8px)}.hint--always.hint--top-left:before{transform:translateY(-8px)}.hint--always.hint--top-left:after{transform:translate(-100%)translateY(-8px)}.hint--always.hint--top-right:before,.hint--always.hint--top-right:after{transform:translateY(-8px)}.hint--always.hint--bottom:before{transform:translateY(8px)}.hint--always.hint--bottom:after{transform:translate(-50%)translateY(8px)}.hint--always.hint--bottom-left:before{transform:translateY(8px)}.hint--always.hint--bottom-left:after{transform:translate(-100%)translateY(8px)}.hint--always.hint--bottom-right:before,.hint--always.hint--bottom-right:after{transform:translateY(8px)}.hint--always.hint--left:before,.hint--always.hint--left:after{transform:translate(-8px)}.hint--always.hint--right:before,.hint--always.hint--right:after{transform:translate(8px)}.hint--rounded:after{border-radius:4px}.hint--no-animate:before,.hint--no-animate:after{transition-duration:0s}.hint--bounce:before,.hint--bounce:after{-webkit-transition:opacity .3s,visibility .3s,-webkit-transform .3s cubic-bezier(.71,1.7,.77,1.24);-moz-transition:opacity .3s,visibility .3s,-moz-transform .3s cubic-bezier(.71,1.7,.77,1.24);transition:opacity .3s,visibility .3s,transform .3s cubic-bezier(.71,1.7,.77,1.24)}.hint--no-shadow:before,.hint--no-shadow:after{text-shadow:initial;box-shadow:initial}.hint--no-arrow:before{display:none}.art-video-player.art-mobile{--art-bottom-gap:10px;--art-control-height:38px;--art-control-icon-scale:1;--art-state-size:60px;--art-settings-max-height:180px;--art-selector-max-height:180px;--art-indicator-scale:1;--art-control-opacity:1}.art-video-player.art-mobile .art-controls-left{margin-left:calc(var(--art-padding)/-1)}.art-video-player.art-mobile .art-controls-right{margin-right:calc(var(--art-padding)/-1)}'
    }, {}],
    bAWi2: [function(e, t, r) {
        var a;
        a = function() {
            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(t)
            }
            var t = Object.prototype.toString,
                r = function(r) {
                    if (void 0 === r) return "undefined";
                    if (null === r) return "null";
                    var o = e(r);
                    if ("boolean" === o) return "boolean";
                    if ("string" === o) return "string";
                    if ("number" === o) return "number";
                    if ("symbol" === o) return "symbol";
                    if ("function" === o) return "GeneratorFunction" === a(r) ? "generatorfunction" : "function";
                    if (Array.isArray ? Array.isArray(r) : r instanceof Array) return "array";
                    if (r.constructor && "function" == typeof r.constructor.isBuffer && r.constructor.isBuffer(r)) return "buffer";
                    if (function(e) {
                            try {
                                if ("number" == typeof e.length && "function" == typeof e.callee) return !0
                            } catch (e) {
                                if (-1 !== e.message.indexOf("callee")) return !0
                            }
                            return !1
                        }(r)) return "arguments";
                    if (r instanceof Date || "function" == typeof r.toDateString && "function" == typeof r.getDate && "function" == typeof r.setDate) return "date";
                    if (r instanceof Error || "string" == typeof r.message && r.constructor && "number" == typeof r.constructor.stackTraceLimit) return "error";
                    if (r instanceof RegExp || "string" == typeof r.flags && "boolean" == typeof r.ignoreCase && "boolean" == typeof r.multiline && "boolean" == typeof r.global) return "regexp";
                    switch (a(r)) {
                        case "Symbol":
                            return "symbol";
                        case "Promise":
                            return "promise";
                        case "WeakMap":
                            return "weakmap";
                        case "WeakSet":
                            return "weakset";
                        case "Map":
                            return "map";
                        case "Set":
                            return "set";
                        case "Int8Array":
                            return "int8array";
                        case "Uint8Array":
                            return "uint8array";
                        case "Uint8ClampedArray":
                            return "uint8clampedarray";
                        case "Int16Array":
                            return "int16array";
                        case "Uint16Array":
                            return "uint16array";
                        case "Int32Array":
                            return "int32array";
                        case "Uint32Array":
                            return "uint32array";
                        case "Float32Array":
                            return "float32array";
                        case "Float64Array":
                            return "float64array"
                    }
                    if ("function" == typeof r.throw && "function" == typeof r.return && "function" == typeof r.next) return "generator";
                    switch (o = t.call(r)) {
                        case "[object Object]":
                            return "object";
                        case "[object Map Iterator]":
                            return "mapiterator";
                        case "[object Set Iterator]":
                            return "setiterator";
                        case "[object String Iterator]":
                            return "stringiterator";
                        case "[object Array Iterator]":
                            return "arrayiterator"
                    }
                    return o.slice(8, -1).toLowerCase().replace(/\s/g, "")
                };

            function a(e) {
                return e.constructor ? e.constructor.name : null
            }

            function o(e, t) {
                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : ["option"];
                return i(e, t, a), n(e, t, a),
                    function(e, t, a) {
                        var s = r(t),
                            l = r(e);
                        if ("object" === s) {
                            if ("object" !== l) throw Error("[Type Error]: '".concat(a.join("."), "' require 'object' type, but got '").concat(l, "'"));
                            Object.keys(t).forEach(function(r) {
                                var s = e[r],
                                    l = t[r],
                                    c = a.slice();
                                c.push(r), i(s, l, c), n(s, l, c), o(s, l, c)
                            })
                        }
                        if ("array" === s) {
                            if ("array" !== l) throw Error("[Type Error]: '".concat(a.join("."), "' require 'array' type, but got '").concat(l, "'"));
                            e.forEach(function(r, s) {
                                var l = e[s],
                                    c = t[s] || t[0],
                                    p = a.slice();
                                p.push(s), i(l, c, p), n(l, c, p), o(l, c, p)
                            })
                        }
                    }(e, t, a), e
            }

            function i(e, t, a) {
                if ("string" === r(t)) {
                    var o = r(e);
                    if ("?" === t[0] && (t = t.slice(1) + "|undefined"), !(-1 < t.indexOf("|") ? t.split("|").map(function(e) {
                            return e.toLowerCase().trim()
                        }).filter(Boolean).some(function(e) {
                            return o === e
                        }) : t.toLowerCase().trim() === o)) throw Error("[Type Error]: '".concat(a.join("."), "' require '").concat(t, "' type, but got '").concat(o, "'"))
                }
            }

            function n(e, t, a) {
                if ("function" === r(t)) {
                    var o = t(e, r(e), a);
                    if (!0 !== o) {
                        var i = r(o);
                        throw "string" === i ? Error(o) : "error" === i ? o : Error("[Validator Error]: The scheme for '".concat(a.join("."), "' validator require return true, but got '").concat(o, "'"))
                    }
                }
            }
            return o.kindOf = r, o
        }, t.exports = a()
    }, {}],
    "66mFZ": [function(e, t, r) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = class {
            on(e, t, r) {
                let a = this.e || (this.e = {});
                return (a[e] || (a[e] = [])).push({
                    fn: t,
                    ctx: r
                }), this
            }
            once(e, t, r) {
                let a = this;

                function o(...i) {
                    a.off(e, o), t.apply(r, i)
                }
                return o._ = t, this.on(e, o, r)
            }
            emit(e, ...t) {
                let r = ((this.e || (this.e = {}))[e] || []).slice();
                for (let e = 0; e < r.length; e += 1) r[e].fn.apply(r[e].ctx, t);
                return this
            }
            off(e, t) {
                let r = this.e || (this.e = {}),
                    a = r[e],
                    o = [];
                if (a && t)
                    for (let e = 0, r = a.length; e < r; e += 1) a[e].fn !== t && a[e].fn._ !== t && o.push(a[e]);
                return o.length ? r[e] = o : delete r[e], this
            }
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "9pCYc": [function(e, t, r) {
        r.interopDefault = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }, r.defineInteropFlag = function(e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.exportAll = function(e, t) {
            return Object.keys(e).forEach(function(r) {
                "default" === r || "__esModule" === r || Object.prototype.hasOwnProperty.call(t, r) || Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function() {
                        return e[r]
                    }
                })
            }), t
        }, r.export = function(e, t, r) {
            Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }
    }, {}],
    "71aH7": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = e("./dom");
        a.exportAll(o, r);
        var i = e("./error");
        a.exportAll(i, r);
        var n = e("./subtitle");
        a.exportAll(n, r);
        var s = e("./file");
        a.exportAll(s, r);
        var l = e("./property");
        a.exportAll(l, r);
        var c = e("./time");
        a.exportAll(c, r);
        var p = e("./format");
        a.exportAll(p, r);
        var u = e("./compatibility");
        a.exportAll(u, r)
    }, {
        "./dom": "bSNiV",
        "./error": "hwmZz",
        "./subtitle": "inzwq",
        "./file": "6b7Ip",
        "./property": "5NSdr",
        "./time": "epmNy",
        "./format": "gapRl",
        "./compatibility": "6ZTr6",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    bSNiV: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "query", () => i), a.export(r, "queryAll", () => n), a.export(r, "addClass", () => s), a.export(r, "removeClass", () => l), a.export(r, "hasClass", () => c), a.export(r, "append", () => p), a.export(r, "remove", () => u), a.export(r, "setStyle", () => d), a.export(r, "setStyles", () => f), a.export(r, "getStyle", () => h), a.export(r, "sublings", () => m), a.export(r, "inverseClass", () => g), a.export(r, "tooltip", () => v), a.export(r, "isInViewport", () => y), a.export(r, "includeFromEvent", () => b), a.export(r, "replaceElement", () => x), a.export(r, "createElement", () => w), a.export(r, "getIcon", () => j), a.export(r, "setStyleText", () => k), a.export(r, "supportsFlex", () => C), a.export(r, "getRect", () => S), a.export(r, "loadImg", () => I);
        var o = e("./compatibility");

        function i(e, t = document) {
            return t.querySelector(e)
        }

        function n(e, t = document) {
            return Array.from(t.querySelectorAll(e))
        }

        function s(e, t) {
            return e.classList.add(t)
        }

        function l(e, t) {
            return e.classList.remove(t)
        }

        function c(e, t) {
            return e.classList.contains(t)
        }

        function p(e, t) {
            return t instanceof Element ? e.appendChild(t) : e.insertAdjacentHTML("beforeend", String(t)), e.lastElementChild || e.lastChild
        }

        function u(e) {
            return e.parentNode.removeChild(e)
        }

        function d(e, t, r) {
            return e.style[t] = r, e
        }

        function f(e, t) {
            for (let r in t) d(e, r, t[r]);
            return e
        }

        function h(e, t, r = !0) {
            let a = window.getComputedStyle(e, null).getPropertyValue(t);
            return r ? parseFloat(a) : a
        }

        function m(e) {
            return Array.from(e.parentElement.children).filter(t => t !== e)
        }

        function g(e, t) {
            m(e).forEach(e => l(e, t)), s(e, t)
        }

        function v(e, t, r = "top") {
            o.isMobile || (e.setAttribute("aria-label", t), s(e, "hint--rounded"), s(e, `hint--${r}`))
        }

        function y(e, t = 0) {
            let r = e.getBoundingClientRect(),
                a = window.innerHeight || document.documentElement.clientHeight,
                o = window.innerWidth || document.documentElement.clientWidth,
                i = r.top - t <= a && r.top + r.height + t >= 0,
                n = r.left - t <= o + t && r.left + r.width + t >= 0;
            return i && n
        }

        function b(e, t) {
            return e.composedPath && e.composedPath().indexOf(t) > -1
        }

        function x(e, t) {
            return t.parentNode.replaceChild(e, t), e
        }

        function w(e) {
            return document.createElement(e)
        }

        function j(e = "", t = "") {
            let r = w("i");
            return s(r, "art-icon"), s(r, `art-icon-${e}`), p(r, t), r
        }

        function k(e, t) {
            let r = document.getElementById(e);
            r || ((r = document.createElement("style")).id = e, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", () => {
                document.head.appendChild(r)
            }) : (document.head || document.documentElement).appendChild(r)), r.textContent = t
        }

        function C() {
            let e = document.createElement("div");
            return e.style.display = "flex", "flex" === e.style.display
        }

        function S(e) {
            return e.getBoundingClientRect()
        }

        function I(e, t) {
            return new Promise((r, a) => {
                let o = new Image;
                o.onload = function() {
                    if (t && 1 !== t) {
                        let i = document.createElement("canvas"),
                            n = i.getContext("2d");
                        i.width = o.width * t, i.height = o.height * t, n.drawImage(o, 0, 0, i.width, i.height), i.toBlob(t => {
                            let o = URL.createObjectURL(t),
                                i = new Image;
                            i.onload = function() {
                                r(i)
                            }, i.onerror = function() {
                                URL.revokeObjectURL(o), a(Error(`Image load failed: ${e}`))
                            }, i.src = o
                        })
                    } else r(o)
                }, o.onerror = function() {
                    a(Error(`Image load failed: ${e}`))
                }, o.src = e
            })
        }
    }, {
        "./compatibility": "6ZTr6",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "6ZTr6": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "userAgent", () => o), a.export(r, "isSafari", () => i), a.export(r, "isWechat", () => n), a.export(r, "isIE", () => s), a.export(r, "isAndroid", () => l), a.export(r, "isIOS", () => c), a.export(r, "isIOS13", () => p), a.export(r, "isMobile", () => u), a.export(r, "isBrowser", () => d);
        let o = "undefined" != typeof navigator ? navigator.userAgent : "",
            i = /^((?!chrome|android).)*safari/i.test(o),
            n = /MicroMessenger/i.test(o),
            s = /MSIE|Trident/i.test(o),
            l = /android/i.test(o),
            c = /iPad|iPhone|iPod/i.test(o) && !window.MSStream,
            p = c || o.includes("Macintosh") && navigator.maxTouchPoints >= 1,
            u = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(o) || p,
            d = "undefined" != typeof window
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    hwmZz: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "ArtPlayerError", () => o), a.export(r, "errorHandle", () => i);
        class o extends Error {
            constructor(e, t) {
                super(e), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, t || this.constructor), this.name = "ArtPlayerError"
            }
        }

        function i(e, t) {
            if (!e) throw new o(t);
            return e
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    inzwq: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function o(e) {
            return "WEBVTT \r\n\r\n".concat(e.replace(/(\d\d:\d\d:\d\d)[,.](\d+)/g, (e, t, r) => {
                let a = r.slice(0, 3);
                return 1 === r.length && (a = r + "00"), 2 === r.length && (a = r + "0"), `${t},${a}`
            }).replace(/\{\\([ibu])\}/g, "</$1>").replace(/\{\\([ibu])1\}/g, "<$1>").replace(/\{([ibu])\}/g, "<$1>").replace(/\{\/([ibu])\}/g, "</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2").replace(/{[\s\S]*?}/g, "").concat("\r\n\r\n"))
        }

        function i(e) {
            return URL.createObjectURL(new Blob([e], {
                type: "text/vtt"
            }))
        }

        function n(e) {
            let t = RegExp("Dialogue:\\s\\d,(\\d+:\\d\\d:\\d\\d.\\d\\d),(\\d+:\\d\\d:\\d\\d.\\d\\d),([^,]*),([^,]*),(?:[^,]*,){4}([\\s\\S]*)$", "i");

            function r(e = "") {
                return e.split(/[:.]/).map((e, t, r) => {
                    if (t === r.length - 1) {
                        if (1 === e.length) return `.${e}00`;
                        if (2 === e.length) return `.${e}0`
                    } else if (1 === e.length) return (0 === t ? "0" : ":0") + e;
                    return 0 === t ? e : t === r.length - 1 ? `.${e}` : `:${e}`
                }).join("")
            }
            return "WEBVTT\n\n" + e.split(/\r?\n/).map(e => {
                let a = e.match(t);
                return a ? {
                    start: r(a[1].trim()),
                    end: r(a[2].trim()),
                    text: a[5].replace(/{[\s\S]*?}/g, "").replace(/(\\N)/g, "\n").trim().split(/\r?\n/).map(e => e.trim()).join("\n")
                } : null
            }).filter(e => e).map((e, t) => e ? t + 1 + "\n" + `${e.start} --> ${e.end}` + "\n" + `${e.text}` : "").filter(e => e.trim()).join("\n\n")
        }
        a.defineInteropFlag(r), a.export(r, "srtToVtt", () => o), a.export(r, "vttToBlob", () => i), a.export(r, "assToVtt", () => n)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "6b7Ip": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function o(e, t) {
            let r = document.createElement("a");
            r.style.display = "none", r.href = e, r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r)
        }
        a.defineInteropFlag(r), a.export(r, "getExt", () => function e(t) {
            return t.includes("?") ? e(t.split("?")[0]) : t.includes("#") ? e(t.split("#")[0]) : t.trim().toLowerCase().split(".").pop()
        }), a.export(r, "download", () => o)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "5NSdr": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "def", () => o), a.export(r, "has", () => n), a.export(r, "get", () => s), a.export(r, "mergeDeep", () => function e(...t) {
            let r = e => e && "object" == typeof e && !Array.isArray(e);
            return t.reduce((t, a) => (Object.keys(a).forEach(o => {
                let i = t[o],
                    n = a[o];
                Array.isArray(i) && Array.isArray(n) ? t[o] = i.concat(...n) : r(i) && r(n) ? t[o] = e(i, n) : t[o] = n
            }), t), {})
        });
        let o = Object.defineProperty,
            {
                hasOwnProperty: i
            } = Object.prototype;

        function n(e, t) {
            return i.call(e, t)
        }

        function s(e, t) {
            return Object.getOwnPropertyDescriptor(e, t)
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    epmNy: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function o(e = 0) {
            return new Promise(t => setTimeout(t, e))
        }

        function i(e, t) {
            let r;
            return function(...a) {
                clearTimeout(r), r = setTimeout(() => (r = null, e.apply(this, a)), t)
            }
        }

        function n(e, t) {
            let r = !1;
            return function(...a) {
                r || (e.apply(this, a), r = !0, setTimeout(function() {
                    r = !1
                }, t))
            }
        }
        a.defineInteropFlag(r), a.export(r, "sleep", () => o), a.export(r, "debounce", () => i), a.export(r, "throttle", () => n)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    gapRl: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function o(e, t, r) {
            return Math.max(Math.min(e, Math.max(t, r)), Math.min(t, r))
        }

        function i(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }

        function n(e) {
            if (!e) return "00:00";
            let t = Math.floor(e / 3600),
                r = Math.floor((e - 3600 * t) / 60),
                a = Math.floor(e - 3600 * t - 60 * r);
            return (t > 0 ? [t, r, a] : [r, a]).map(e => e < 10 ? `0${e}` : String(e)).join(":")
        }

        function s(e) {
            return e.replace(/[&<>'"]/g, e => ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;"
            })[e] || e)
        }

        function l(e) {
            let t = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&#39;": "'",
                    "&quot;": '"'
                },
                r = RegExp(`(${Object.keys(t).join("|")})`, "g");
            return e.replace(r, e => t[e] || e)
        }
        a.defineInteropFlag(r), a.export(r, "clamp", () => o), a.export(r, "capitalize", () => i), a.export(r, "secondToTime", () => n), a.export(r, "escape", () => s), a.export(r, "unescape", () => l)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    AKEiO: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "ComponentOption", () => d);
        var o = e("../utils");
        let i = "array",
            n = "boolean",
            s = "string",
            l = "number",
            c = "object",
            p = "function";

        function u(e, t, r) {
            return (0, o.errorHandle)(t === s || t === l || e instanceof Element, `${r.join(".")} require '${s}' or 'Element' type`)
        }
        let d = {
            html: u,
            disable: `?${n}`,
            name: `?${s}`,
            index: `?${l}`,
            style: `?${c}`,
            click: `?${p}`,
            mounted: `?${p}`,
            tooltip: `?${s}|${l}`,
            width: `?${l}`,
            selector: `?${i}`,
            onSelect: `?${p}`,
            switch: `?${n}`,
            onSwitch: `?${p}`,
            range: `?${i}`,
            onRange: `?${p}`,
            onChange: `?${p}`
        };
        r.default = {
            id: s,
            container: u,
            url: s,
            poster: s,
            type: s,
            theme: s,
            lang: s,
            volume: l,
            isLive: n,
            muted: n,
            autoplay: n,
            autoSize: n,
            autoMini: n,
            loop: n,
            flip: n,
            playbackRate: n,
            aspectRatio: n,
            screenshot: n,
            setting: n,
            hotkey: n,
            pip: n,
            mutex: n,
            backdrop: n,
            fullscreen: n,
            fullscreenWeb: n,
            subtitleOffset: n,
            miniProgressBar: n,
            useSSR: n,
            playsInline: n,
            lock: n,
            fastForward: n,
            autoPlayback: n,
            autoOrientation: n,
            airplay: n,
            proxy: `?${p}`,
            plugins: [p],
            layers: [d],
            contextmenu: [d],
            settings: [d],
            controls: [{
                ...d,
                position: (e, t, r) => {
                    let a = ["top", "left", "right"];
                    return (0, o.errorHandle)(a.includes(e), `${r.join(".")} only accept ${a.toString()} as parameters`)
                }
            }],
            quality: [{
                default: `?${n}`,
                html: s,
                url: s
            }],
            highlight: [{
                time: l,
                text: s
            }],
            thumbnails: {
                url: s,
                number: l,
                column: l,
                width: l,
                height: l,
                scale: l
            },
            subtitle: {
                url: s,
                name: s,
                type: s,
                style: c,
                escape: n,
                encoding: s,
                onVttLoad: p
            },
            moreVideoAttr: c,
            i18n: c,
            icons: c,
            cssVar: c,
            customType: c
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    lyjeQ: [function(e, t, r) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = {
            propertys: ["audioTracks", "autoplay", "buffered", "controller", "controls", "crossOrigin", "currentSrc", "currentTime", "defaultMuted", "defaultPlaybackRate", "duration", "ended", "error", "loop", "mediaGroup", "muted", "networkState", "paused", "playbackRate", "played", "preload", "readyState", "seekable", "seeking", "src", "startDate", "textTracks", "videoTracks", "volume"],
            methods: ["addTextTrack", "canPlayType", "load", "play", "pause"],
            events: ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"],
            prototypes: ["width", "height", "videoWidth", "videoHeight", "poster", "webkitDecodedFrameCount", "webkitDroppedFrameCount", "playsInline", "webkitSupportsFullscreen", "webkitDisplayingFullscreen", "onenterpictureinpicture", "onleavepictureinpicture", "disablePictureInPicture", "cancelVideoFrameCallback", "requestVideoFrameCallback", "getVideoPlaybackQuality", "requestPictureInPicture", "webkitEnterFullScreen", "webkitEnterFullscreen", "webkitExitFullScreen", "webkitExitFullscreen"]
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    X13Zf: [function(e, t, r) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = e("./utils");
        class o {
            constructor(e) {
                this.art = e;
                let {
                    option: t,
                    constructor: r
                } = e;
                t.container instanceof Element ? this.$container = t.container : (this.$container = (0, a.query)(t.container), (0, a.errorHandle)(this.$container, `No container element found by ${t.container}`)), (0, a.errorHandle)((0, a.supportsFlex)(), "The current browser does not support flex layout");
                let o = this.$container.tagName.toLowerCase();
                (0, a.errorHandle)("div" === o, `Unsupported container element type, only support 'div' but got '${o}'`), (0, a.errorHandle)(r.instances.every(e => e.template.$container !== this.$container), "Cannot mount multiple instances on the same dom element"), this.query = this.query.bind(this), this.$container.dataset.artId = e.id, this.init()
            }
            static get html() {
                return `<div class="art-video-player art-subtitle-show art-layer-show art-control-show art-mask-show"><video class="art-video"><track default kind="metadata" src=""></track></video><div class="art-poster"></div><div class="art-subtitle"></div><div class="art-danmuku"></div><div class="art-layers"></div><div class="art-mask"><div class="art-state"></div></div><div class="art-bottom"><div class="art-progress"></div><div class="art-controls"><div class="art-controls-left"></div><div class="art-controls-center"></div><div class="art-controls-right"></div></div></div><div class="art-loading"></div><div class="art-notice"><div class="art-notice-inner"></div></div><div class="art-settings"></div><div class="art-info"><div class="art-info-panel"><div class="art-info-item"><div class="art-info-title">Player version:</div><div class="art-info-content">5.2.2</div></div><div class="art-info-item"><div class="art-info-title">Video url:</div><div class="art-info-content" data-video="src"></div></div><div class="art-info-item"><div class="art-info-title">Video volume:</div><div class="art-info-content" data-video="volume"></div></div><div class="art-info-item"><div class="art-info-title">Video time:</div><div class="art-info-content" data-video="currentTime"></div></div><div class="art-info-item"><div class="art-info-title">Video duration:</div><div class="art-info-content" data-video="duration"></div></div><div class="art-info-item"><div class="art-info-title">Video resolution:</div><div class="art-info-content"><span data-video="videoWidth"></span>x<span data-video="videoHeight"></span></div></div></div><div class="art-info-close">[x]</div></div><div class="art-contextmenus"></div></div>`
            }
            query(e) {
                return (0, a.query)(e, this.$container)
            }
            init() {
                let {
                    option: e
                } = this.art;
                if (e.useSSR || (this.$container.innerHTML = o.html), this.$player = this.query(".art-video-player"), this.$video = this.query(".art-video"), this.$track = this.query("track"), this.$poster = this.query(".art-poster"), this.$subtitle = this.query(".art-subtitle"), this.$danmuku = this.query(".art-danmuku"), this.$bottom = this.query(".art-bottom"), this.$progress = this.query(".art-progress"), this.$controls = this.query(".art-controls"), this.$controlsLeft = this.query(".art-controls-left"), this.$controlsCenter = this.query(".art-controls-center"), this.$controlsRight = this.query(".art-controls-right"), this.$layer = this.query(".art-layers"), this.$loading = this.query(".art-loading"), this.$notice = this.query(".art-notice"), this.$noticeInner = this.query(".art-notice-inner"), this.$mask = this.query(".art-mask"), this.$state = this.query(".art-state"), this.$setting = this.query(".art-settings"), this.$info = this.query(".art-info"), this.$infoPanel = this.query(".art-info-panel"), this.$infoClose = this.query(".art-info-close"), this.$contextmenu = this.query(".art-contextmenus"), e.proxy) {
                    let t = e.proxy.call(this.art, this.art);
                    (0, a.errorHandle)(t instanceof HTMLVideoElement || t instanceof HTMLCanvasElement, "Function 'option.proxy' needs to return 'HTMLVideoElement' or 'HTMLCanvasElement'"), (0, a.replaceElement)(t, this.$video), t.className = "art-video", this.$video = t
                }
                e.backdrop && (0, a.addClass)(this.$player, "art-backdrop"), a.isMobile && (0, a.addClass)(this.$player, "art-mobile")
            }
            destroy(e) {
                e ? this.$container.innerHTML = "" : (0, a.addClass)(this.$player, "art-destroy")
            }
        }
        r.default = o
    }, {
        "./utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "3jKkj": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = e("../utils"),
            i = e("./zh-cn"),
            n = a.interopDefault(i);
        r.default = class {
            constructor(e) {
                this.art = e, this.languages = {
                    "zh-cn": n.default
                }, this.language = {}, this.update(e.option.i18n)
            }
            init() {
                let e = this.art.option.lang.toLowerCase();
                this.language = this.languages[e] || {}
            }
            get(e) {
                return this.language[e] || e
            }
            update(e) {
                this.languages = (0, o.mergeDeep)(this.languages, e), this.init()
            }
        }
    }, {
        "../utils": "71aH7",
        "./zh-cn": "5Y91w",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "5Y91w": [function(e, t, r) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        let a = {
            "Video Info": "统计信息",
            Close: "关闭",
            "Video Load Failed": "加载失败",
            Volume: "音量",
            Play: "播放",
            Pause: "暂停",
            Rate: "速度",
            Mute: "静音",
            "Video Flip": "画面翻转",
            Horizontal: "水平",
            Vertical: "垂直",
            Reconnect: "重新连接",
            "Show Setting": "显示设置",
            "Hide Setting": "隐藏设置",
            Screenshot: "截图",
            "Play Speed": "播放速度",
            "Aspect Ratio": "画面比例",
            Default: "默认",
            Normal: "正常",
            Open: "打开",
            "Switch Video": "切换",
            "Switch Subtitle": "切换字幕",
            Fullscreen: "全屏",
            "Exit Fullscreen": "退出全屏",
            "Web Fullscreen": "网页全屏",
            "Exit Web Fullscreen": "退出网页全屏",
            "Mini Player": "迷你播放器",
            "PIP Mode": "开启画中画",
            "Exit PIP Mode": "退出画中画",
            "PIP Not Supported": "不支持画中画",
            "Fullscreen Not Supported": "不支持全屏",
            "Subtitle Offset": "字幕偏移",
            "Last Seen": "上次看到",
            "Jump Play": "跳转播放",
            AirPlay: "隔空播放",
            "AirPlay Not Available": "隔空播放不可用"
        };
        r.default = a, "undefined" != typeof window && (window["artplayer-i18n-zh-cn"] = a)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    a90nx: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = e("./urlMix"),
            i = a.interopDefault(o),
            n = e("./attrMix"),
            s = a.interopDefault(n),
            l = e("./playMix"),
            c = a.interopDefault(l),
            p = e("./pauseMix"),
            u = a.interopDefault(p),
            d = e("./toggleMix"),
            f = a.interopDefault(d),
            h = e("./seekMix"),
            m = a.interopDefault(h),
            g = e("./volumeMix"),
            v = a.interopDefault(g),
            y = e("./currentTimeMix"),
            b = a.interopDefault(y),
            x = e("./durationMix"),
            w = a.interopDefault(x),
            j = e("./switchMix"),
            k = a.interopDefault(j),
            C = e("./playbackRateMix"),
            S = a.interopDefault(C),
            I = e("./aspectRatioMix"),
            T = a.interopDefault(I),
            $ = e("./screenshotMix"),
            E = a.interopDefault($),
            M = e("./fullscreenMix"),
            F = a.interopDefault(M),
            H = e("./fullscreenWebMix"),
            D = a.interopDefault(H),
            z = e("./pipMix"),
            A = a.interopDefault(z),
            R = e("./loadedMix"),
            O = a.interopDefault(R),
            L = e("./playedMix"),
            Y = a.interopDefault(L),
            P = e("./playingMix"),
            V = a.interopDefault(P),
            q = e("./autoSizeMix"),
            _ = a.interopDefault(q),
            N = e("./rectMix"),
            B = a.interopDefault(N),
            W = e("./flipMix"),
            U = a.interopDefault(W),
            K = e("./miniMix"),
            Z = a.interopDefault(K),
            X = e("./posterMix"),
            G = a.interopDefault(X),
            Q = e("./autoHeightMix"),
            J = a.interopDefault(Q),
            ee = e("./cssVarMix"),
            et = a.interopDefault(ee),
            er = e("./themeMix"),
            ea = a.interopDefault(er),
            eo = e("./typeMix"),
            ei = a.interopDefault(eo),
            en = e("./stateMix"),
            es = a.interopDefault(en),
            el = e("./subtitleOffsetMix"),
            ec = a.interopDefault(el),
            ep = e("./airplayMix"),
            eu = a.interopDefault(ep),
            ed = e("./qualityMix"),
            ef = a.interopDefault(ed),
            eh = e("./thumbnailsMix"),
            em = a.interopDefault(eh),
            eg = e("./optionInit"),
            ev = a.interopDefault(eg),
            ey = e("./eventInit"),
            eb = a.interopDefault(ey);
        r.default = class {
            constructor(e) {
                (0, i.default)(e), (0, s.default)(e), (0, c.default)(e), (0, u.default)(e), (0, f.default)(e), (0, m.default)(e), (0, v.default)(e), (0, b.default)(e), (0, w.default)(e), (0, k.default)(e), (0, S.default)(e), (0, T.default)(e), (0, E.default)(e), (0, F.default)(e), (0, D.default)(e), (0, A.default)(e), (0, O.default)(e), (0, Y.default)(e), (0, V.default)(e), (0, _.default)(e), (0, B.default)(e), (0, U.default)(e), (0, Z.default)(e), (0, G.default)(e), (0, J.default)(e), (0, et.default)(e), (0, ea.default)(e), (0, ei.default)(e), (0, es.default)(e), (0, ec.default)(e), (0, eu.default)(e), (0, ef.default)(e), (0, em.default)(e), (0, eb.default)(e), (0, ev.default)(e)
            }
        }
    }, {
        "./urlMix": "kQoac",
        "./attrMix": "deCma",
        "./playMix": "fOJuP",
        "./pauseMix": "fzHAy",
        "./toggleMix": "cBHxQ",
        "./seekMix": "koAPr",
        "./volumeMix": "6eyuR",
        "./currentTimeMix": "faaWv",
        "./durationMix": "5y91K",
        "./switchMix": "iceD8",
        "./playbackRateMix": "keKwh",
        "./aspectRatioMix": "jihET",
        "./screenshotMix": "36kPY",
        "./fullscreenMix": "2GYOJ",
        "./fullscreenWebMix": "5aYAP",
        "./pipMix": "7EnIB",
        "./loadedMix": "3N9mP",
        "./playedMix": "et96R",
        "./playingMix": "9DzzM",
        "./autoSizeMix": "i1LDY",
        "./rectMix": "IqARI",
        "./flipMix": "7E7Vs",
        "./miniMix": "gpugx",
        "./posterMix": "1SuFS",
        "./autoHeightMix": "8x4te",
        "./cssVarMix": "1CaTA",
        "./themeMix": "2FqhO",
        "./typeMix": "1fQQs",
        "./stateMix": "iBOQW",
        "./subtitleOffsetMix": "6vlBV",
        "./airplayMix": "eftqT",
        "./qualityMix": "5SdyX",
        "./thumbnailsMix": "4HcqV",
        "./optionInit": "fCWZK",
        "./eventInit": "f8Lv3",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    kQoac: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                option: t,
                template: {
                    $video: r
                }
            } = e;
            (0, o.def)(e, "url", {
                get: () => r.src,
                async set(a) {
                    if (a) {
                        let i = e.url,
                            n = t.type || (0, o.getExt)(a),
                            s = t.customType[n];
                        n && s ? (await (0, o.sleep)(), e.loading.show = !0, s.call(e, r, a, e)) : (URL.revokeObjectURL(i), r.src = a), i !== e.url && (e.option.url = a, e.isReady && i && e.once("video:canplay", () => {
                            e.emit("restart", a)
                        }))
                    } else await (0, o.sleep)(), e.loading.show = !0
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    deCma: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                template: {
                    $video: t
                }
            } = e;
            (0, o.def)(e, "attr", {
                value(e, r) {
                    if (void 0 === r) return t[e];
                    t[e] = r
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    fOJuP: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                i18n: t,
                notice: r,
                option: a,
                constructor: {
                    instances: i
                },
                template: {
                    $video: n
                }
            } = e;
            (0, o.def)(e, "play", {
                value: async function() {
                    let o = await n.play();
                    if (r.show = t.get("Play"), e.emit("play"), a.mutex)
                        for (let t = 0; t < i.length; t++) {
                            let r = i[t];
                            r !== e && r.pause()
                        }
                    return o
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    fzHAy: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                template: {
                    $video: t
                },
                i18n: r,
                notice: a
            } = e;
            (0, o.def)(e, "pause", {
                value() {
                    let o = t.pause();
                    return a.show = r.get("Pause"), e.emit("pause"), o
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    cBHxQ: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            (0, o.def)(e, "toggle", {
                value: () => e.playing ? e.pause() : e.play()
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    koAPr: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                notice: t
            } = e;
            (0, o.def)(e, "seek", {
                set(r) {
                    e.currentTime = r, e.emit("seek", e.currentTime), e.duration && (t.show = `${(0,o.secondToTime)(e.currentTime)} / ${(0,o.secondToTime)(e.duration)}`)
                }
            }), (0, o.def)(e, "forward", {
                set(t) {
                    e.seek = e.currentTime + t
                }
            }), (0, o.def)(e, "backward", {
                set(t) {
                    e.seek = e.currentTime - t
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "6eyuR": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                template: {
                    $video: t
                },
                i18n: r,
                notice: a,
                storage: i
            } = e;
            (0, o.def)(e, "volume", {
                get: () => t.volume || 0,
                set: e => {
                    t.volume = (0, o.clamp)(e, 0, 1), a.show = `${r.get("Volume")}: ${parseInt(100*t.volume,10)}`, 0 !== t.volume && i.set("volume", t.volume)
                }
            }), (0, o.def)(e, "muted", {
                get: () => t.muted,
                set: r => {
                    t.muted = r, e.emit("muted", r)
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    faaWv: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                $video: t
            } = e.template;
            (0, o.def)(e, "currentTime", {
                get: () => t.currentTime || 0,
                set: r => {
                    Number.isNaN(r = parseFloat(r)) || (t.currentTime = (0, o.clamp)(r, 0, e.duration))
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "5y91K": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            (0, o.def)(e, "duration", {
                get: () => {
                    let {
                        duration: t
                    } = e.template.$video;
                    return t === 1 / 0 ? 0 : t || 0
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    iceD8: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            function t(t, r) {
                return new Promise((a, o) => {
                    if (t === e.url) return;
                    let {
                        playing: i,
                        aspectRatio: n,
                        playbackRate: s
                    } = e;
                    e.pause(), e.url = t, e.notice.show = "", e.once("video:error", o), e.once("video:loadedmetadata", () => {
                        e.currentTime = r
                    }), e.once("video:canplay", async () => {
                        e.playbackRate = s, e.aspectRatio = n, i && await e.play(), e.notice.show = "", a()
                    })
                })
            }(0, o.def)(e, "switchQuality", {
                value: r => t(r, e.currentTime)
            }), (0, o.def)(e, "switchUrl", {
                value: e => t(e, 0)
            }), (0, o.def)(e, "switch", {
                set: e.switchUrl
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    keKwh: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                template: {
                    $video: t
                },
                i18n: r,
                notice: a
            } = e;
            (0, o.def)(e, "playbackRate", {
                get: () => t.playbackRate,
                set(o) {
                    o ? o !== t.playbackRate && (t.playbackRate = o, a.show = `${r.get("Rate")}: ${1===o?r.get("Normal"):`${o}x`}`) : e.playbackRate = 1
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    jihET: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                i18n: t,
                notice: r,
                template: {
                    $video: a,
                    $player: i
                }
            } = e;
            (0, o.def)(e, "aspectRatio", {
                get: () => i.dataset.aspectRatio || "default",
                set(n) {
                    if (n || (n = "default"), "default" === n)(0, o.setStyle)(a, "width", null), (0, o.setStyle)(a, "height", null), (0, o.setStyle)(a, "margin", null), delete i.dataset.aspectRatio;
                    else {
                        let e = n.split(":").map(Number),
                            {
                                clientWidth: t,
                                clientHeight: r
                            } = i,
                            s = e[0] / e[1];
                        t / r > s ? ((0, o.setStyle)(a, "width", `${s*r}px`), (0, o.setStyle)(a, "height", "100%"), (0, o.setStyle)(a, "margin", "0 auto")) : ((0, o.setStyle)(a, "width", "100%"), (0, o.setStyle)(a, "height", `${t/s}px`), (0, o.setStyle)(a, "margin", "auto 0")), i.dataset.aspectRatio = n
                    }
                    r.show = `${t.get("Aspect Ratio")}: ${"default"===n?t.get("Default"):n}`, e.emit("aspectRatio", n)
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "36kPY": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                notice: t,
                template: {
                    $video: r
                }
            } = e, a = (0, o.createElement)("canvas");
            (0, o.def)(e, "getDataURL", {
                value: () => new Promise((e, o) => {
                    try {
                        a.width = r.videoWidth, a.height = r.videoHeight, a.getContext("2d").drawImage(r, 0, 0), e(a.toDataURL("image/png"))
                    } catch (e) {
                        t.show = e, o(e)
                    }
                })
            }), (0, o.def)(e, "getBlobUrl", {
                value: () => new Promise((e, o) => {
                    try {
                        a.width = r.videoWidth, a.height = r.videoHeight, a.getContext("2d").drawImage(r, 0, 0), a.toBlob(t => {
                            e(URL.createObjectURL(t))
                        })
                    } catch (e) {
                        t.show = e, o(e)
                    }
                })
            }), (0, o.def)(e, "screenshot", {
                value: async t => {
                    let a = await e.getDataURL(),
                        i = t || `artplayer_${(0,o.secondToTime)(r.currentTime)}`;
                    return (0, o.download)(a, `${i}.png`), e.emit("screenshot", a), a
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "2GYOJ": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => s);
        var o = e("../libs/screenfull"),
            i = a.interopDefault(o),
            n = e("../utils");

        function s(e) {
            let {
                i18n: t,
                notice: r,
                template: {
                    $video: a,
                    $player: o
                }
            } = e, s = e => {
                (0, i.default).on("change", () => {
                    e.emit("fullscreen", i.default.isFullscreen), i.default.isFullscreen ? (e.state = "fullscreen", (0, n.addClass)(o, "art-fullscreen")) : (0, n.removeClass)(o, "art-fullscreen"), e.emit("resize")
                }), (0, i.default).on("error", t => {
                    e.emit("fullscreenError", t)
                }), (0, n.def)(e, "fullscreen", {
                    get: () => i.default.isFullscreen,
                    async set(e) {
                        e ? await (0, i.default).request(o) : await (0, i.default).exit()
                    }
                })
            }, l = e => {
                e.proxy(document, "webkitfullscreenchange", () => {
                    e.emit("fullscreen", e.fullscreen), e.emit("resize")
                }), (0, n.def)(e, "fullscreen", {
                    get: () => document.fullscreenElement === a,
                    set(t) {
                        t ? (e.state = "fullscreen", a.webkitEnterFullscreen()) : a.webkitExitFullscreen()
                    }
                })
            };
            e.once("video:loadedmetadata", () => {
                i.default.isEnabled ? s(e) : a.webkitSupportsFullscreen ? l(e) : (0, n.def)(e, "fullscreen", {
                    get: () => !1,
                    set() {
                        r.show = t.get("Fullscreen Not Supported")
                    }
                }), (0, n.def)(e, "fullscreen", (0, n.get)(e, "fullscreen"))
            })
        }
    }, {
        "../libs/screenfull": "8v40z",
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "8v40z": [function(e, t, r) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        let a = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ],
            o = (() => {
                if ("undefined" == typeof document) return !1;
                let e = a[0],
                    t = {};
                for (let r of a)
                    if (r[1] in document) {
                        for (let [a, o] of r.entries()) t[e[a]] = o;
                        return t
                    } return !1
            })(),
            i = {
                change: o.fullscreenchange,
                error: o.fullscreenerror
            },
            n = {
                request: (e = document.documentElement, t) => new Promise((r, a) => {
                    let i = () => {
                        n.off("change", i), r()
                    };
                    n.on("change", i);
                    let s = e[o.requestFullscreen](t);
                    s instanceof Promise && s.then(i).catch(a)
                }),
                exit: () => new Promise((e, t) => {
                    if (!n.isFullscreen) {
                        e();
                        return
                    }
                    let r = () => {
                        n.off("change", r), e()
                    };
                    n.on("change", r);
                    let a = document[o.exitFullscreen]();
                    a instanceof Promise && a.then(r).catch(t)
                }),
                toggle: (e, t) => n.isFullscreen ? n.exit() : n.request(e, t),
                onchange(e) {
                    n.on("change", e)
                },
                onerror(e) {
                    n.on("error", e)
                },
                on(e, t) {
                    let r = i[e];
                    r && document.addEventListener(r, t, !1)
                },
                off(e, t) {
                    let r = i[e];
                    r && document.removeEventListener(r, t, !1)
                },
                raw: o
            };
        Object.defineProperties(n, {
            isFullscreen: {
                get: () => !!document[o.fullscreenElement]
            },
            element: {
                enumerable: !0,
                get: () => document[o.fullscreenElement]
            },
            isEnabled: {
                enumerable: !0,
                get: () => !!document[o.fullscreenEnabled]
            }
        }), o || (n = {
            isEnabled: !1
        }), r.default = n
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "5aYAP": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                constructor: t,
                template: {
                    $container: r,
                    $player: a
                }
            } = e, i = "";
            (0, o.def)(e, "fullscreenWeb", {
                get: () => (0, o.hasClass)(a, "art-fullscreen-web"),
                set(n) {
                    n ? (i = a.style.cssText, t.FULLSCREEN_WEB_IN_BODY && (0, o.append)(document.body, a), e.state = "fullscreenWeb", (0, o.setStyle)(a, "width", "100%"), (0, o.setStyle)(a, "height", "100%"), (0, o.addClass)(a, "art-fullscreen-web"), e.emit("fullscreenWeb", !0)) : (t.FULLSCREEN_WEB_IN_BODY && (0, o.append)(r, a), i && (a.style.cssText = i, i = ""), (0, o.removeClass)(a, "art-fullscreen-web"), e.emit("fullscreenWeb", !1)), e.emit("resize")
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "7EnIB": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                i18n: t,
                notice: r,
                template: {
                    $video: a
                }
            } = e;
            document.pictureInPictureEnabled ? function(e) {
                let {
                    template: {
                        $video: t
                    },
                    proxy: r,
                    notice: a
                } = e;
                t.disablePictureInPicture = !1, (0, o.def)(e, "pip", {
                    get: () => document.pictureInPictureElement,
                    set(r) {
                        r ? (e.state = "pip", t.requestPictureInPicture().catch(e => {
                            throw a.show = e, e
                        })) : document.exitPictureInPicture().catch(e => {
                            throw a.show = e, e
                        })
                    }
                }), r(t, "enterpictureinpicture", () => {
                    e.emit("pip", !0)
                }), r(t, "leavepictureinpicture", () => {
                    e.emit("pip", !1)
                })
            }(e) : a.webkitSupportsPresentationMode ? function(e) {
                let {
                    $video: t
                } = e.template;
                t.webkitSetPresentationMode("inline"), (0, o.def)(e, "pip", {
                    get: () => "picture-in-picture" === t.webkitPresentationMode,
                    set(r) {
                        r ? (e.state = "pip", t.webkitSetPresentationMode("picture-in-picture"), e.emit("pip", !0)) : (t.webkitSetPresentationMode("inline"), e.emit("pip", !1))
                    }
                })
            }(e) : (0, o.def)(e, "pip", {
                get: () => !1,
                set() {
                    r.show = t.get("PIP Not Supported")
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "3N9mP": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                $video: t
            } = e.template;
            (0, o.def)(e, "loaded", {
                get: () => e.loadedTime / t.duration
            }), (0, o.def)(e, "loadedTime", {
                get: () => t.buffered.length ? t.buffered.end(t.buffered.length - 1) : 0
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    et96R: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            (0, o.def)(e, "played", {
                get: () => e.currentTime / e.duration
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "9DzzM": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                $video: t
            } = e.template;
            (0, o.def)(e, "playing", {
                get: () => "boolean" == typeof t.playing ? t.playing : !!(t.currentTime > 0 && !t.paused && !t.ended && t.readyState > 2)
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    i1LDY: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                $container: t,
                $player: r,
                $video: a
            } = e.template;
            (0, o.def)(e, "autoSize", {
                value() {
                    let {
                        videoWidth: i,
                        videoHeight: n
                    } = a, {
                        width: s,
                        height: l
                    } = (0, o.getRect)(t), c = i / n;
                    s / l > c ? ((0, o.setStyle)(r, "width", `${l*c/s*100}%`), (0, o.setStyle)(r, "height", "100%")) : ((0, o.setStyle)(r, "width", "100%"), (0, o.setStyle)(r, "height", `${s/c/l*100}%`)), e.emit("autoSize", {
                        width: e.width,
                        height: e.height
                    })
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    IqARI: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            (0, o.def)(e, "rect", {
                get: () => (0, o.getRect)(e.template.$player)
            });
            let t = ["bottom", "height", "left", "right", "top", "width"];
            for (let r = 0; r < t.length; r++) {
                let a = t[r];
                (0, o.def)(e, a, {
                    get: () => e.rect[a]
                })
            }(0, o.def)(e, "x", {
                get: () => e.left + window.pageXOffset
            }), (0, o.def)(e, "y", {
                get: () => e.top + window.pageYOffset
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "7E7Vs": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                template: {
                    $player: t
                },
                i18n: r,
                notice: a
            } = e;
            (0, o.def)(e, "flip", {
                get: () => t.dataset.flip || "normal",
                set(i) {
                    i || (i = "normal"), "normal" === i ? delete t.dataset.flip : t.dataset.flip = i, a.show = `${r.get("Video Flip")}: ${r.get((0,o.capitalize)(i))}`, e.emit("flip", i)
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    gpugx: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                icons: t,
                proxy: r,
                storage: a,
                template: {
                    $player: i,
                    $video: n
                }
            } = e, s = !1, l = 0, c = 0;

            function p() {
                let {
                    $mini: t
                } = e.template;
                t && ((0, o.removeClass)(i, "art-mini"), (0, o.setStyle)(t, "display", "none"), i.prepend(n), e.emit("mini", !1))
            }

            function u(t, r) {
                e.playing ? ((0, o.setStyle)(t, "display", "none"), (0, o.setStyle)(r, "display", "flex")) : ((0, o.setStyle)(t, "display", "flex"), (0, o.setStyle)(r, "display", "none"))
            }

            function d() {
                let {
                    $mini: t
                } = e.template, r = (0, o.getRect)(t), i = window.innerHeight - r.height - 50, n = window.innerWidth - r.width - 50;
                a.set("top", i), a.set("left", n), (0, o.setStyle)(t, "top", `${i}px`), (0, o.setStyle)(t, "left", `${n}px`)
            }(0, o.def)(e, "mini", {
                get: () => (0, o.hasClass)(i, "art-mini"),
                set(f) {
                    if (f) {
                        e.state = "mini", (0, o.addClass)(i, "art-mini");
                        let f = function() {
                                let {
                                    $mini: i
                                } = e.template;
                                if (i) return (0, o.append)(i, n), (0, o.setStyle)(i, "display", "flex");
                                {
                                    let i = (0, o.createElement)("div");
                                    (0, o.addClass)(i, "art-mini-popup"), (0, o.append)(document.body, i), e.template.$mini = i, (0, o.append)(i, n);
                                    let d = (0, o.append)(i, '<div class="art-mini-close"></div>');
                                    (0, o.append)(d, t.close), r(d, "click", p);
                                    let f = (0, o.append)(i, '<div class="art-mini-state"></div>'),
                                        h = (0, o.append)(f, t.play),
                                        m = (0, o.append)(f, t.pause);
                                    return r(h, "click", () => e.play()), r(m, "click", () => e.pause()), u(h, m), e.on("video:playing", () => u(h, m)), e.on("video:pause", () => u(h, m)), e.on("video:timeupdate", () => u(h, m)), r(i, "mousedown", e => {
                                        s = 0 === e.button, l = e.pageX, c = e.pageY
                                    }), e.on("document:mousemove", e => {
                                        if (s) {
                                            (0, o.addClass)(i, "art-mini-droging");
                                            let t = e.pageX - l,
                                                r = e.pageY - c;
                                            (0, o.setStyle)(i, "transform", `translate(${t}px, ${r}px)`)
                                        }
                                    }), e.on("document:mouseup", () => {
                                        if (s) {
                                            s = !1, (0, o.removeClass)(i, "art-mini-droging");
                                            let e = (0, o.getRect)(i);
                                            a.set("left", e.left), a.set("top", e.top), (0, o.setStyle)(i, "left", `${e.left}px`), (0, o.setStyle)(i, "top", `${e.top}px`), (0, o.setStyle)(i, "transform", null)
                                        }
                                    }), i
                                }
                            }(),
                            h = a.get("top"),
                            m = a.get("left");
                        h && m ? ((0, o.setStyle)(f, "top", `${h}px`), (0, o.setStyle)(f, "left", `${m}px`), (0, o.isInViewport)(f) || d()) : d(), e.emit("mini", !0)
                    } else p()
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "1SuFS": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                template: {
                    $poster: t
                }
            } = e;
            (0, o.def)(e, "poster", {
                get: () => {
                    try {
                        return t.style.backgroundImage.match(/"(.*)"/)[1]
                    } catch (e) {
                        return ""
                    }
                },
                set(e) {
                    (0, o.setStyle)(t, "backgroundImage", `url(${e})`)
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "8x4te": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                template: {
                    $container: t,
                    $video: r
                }
            } = e;
            (0, o.def)(e, "autoHeight", {
                value() {
                    let {
                        clientWidth: a
                    } = t, {
                        videoHeight: i,
                        videoWidth: n
                    } = r, s = a / n * i;
                    (0, o.setStyle)(t, "height", s + "px"), e.emit("autoHeight", s)
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "1CaTA": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                $player: t
            } = e.template;
            (0, o.def)(e, "cssVar", {
                value: (e, r) => r ? t.style.setProperty(e, r) : getComputedStyle(t).getPropertyValue(e)
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "2FqhO": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            (0, o.def)(e, "theme", {
                get: () => e.cssVar("--art-theme"),
                set(t) {
                    e.cssVar("--art-theme", t)
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "1fQQs": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            (0, o.def)(e, "type", {
                get: () => e.option.type,
                set(t) {
                    e.option.type = t
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    iBOQW: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let t = ["mini", "pip", "fullscreen", "fullscreenWeb"];
            (0, o.def)(e, "state", {
                get: () => t.find(t => e[t]) || "standard",
                set(r) {
                    for (let a = 0; a < t.length; a++) {
                        let o = t[a];
                        o !== r && e[o] && (e[o] = !1)
                    }
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "6vlBV": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                notice: t,
                i18n: r,
                template: a
            } = e;
            (0, o.def)(e, "subtitleOffset", {
                get: () => a.$track?.offset || 0,
                set(i) {
                    let {
                        cues: n
                    } = e.subtitle;
                    if (!a.$track || 0 === n.length) return;
                    let s = (0, o.clamp)(i, -35, 35);
                    a.$track.offset = s;
                    for (let t = 0; t < n.length; t++) {
                        let r = n[t];
                        r.originalStartTime = r.originalStartTime ?? r.startTime, r.originalEndTime = r.originalEndTime ?? r.endTime, r.startTime = (0, o.clamp)(r.originalStartTime + s, 0, e.duration), r.endTime = (0, o.clamp)(r.originalEndTime + s, 0, e.duration)
                    }
                    e.subtitle.update(), t.show = `${r.get("Subtitle Offset")}: ${i}s`, e.emit("subtitleOffset", i)
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    eftqT: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                i18n: t,
                notice: r,
                proxy: a,
                template: {
                    $video: i
                }
            } = e, n = !0;
            window.WebKitPlaybackTargetAvailabilityEvent && i.webkitShowPlaybackTargetPicker ? a(i, "webkitplaybacktargetavailabilitychanged", e => {
                switch (e.availability) {
                    case "available":
                        n = !0;
                        break;
                    case "not-available":
                        n = !1
                }
            }) : n = !1, (0, o.def)(e, "airplay", {
                value() {
                    n ? (i.webkitShowPlaybackTargetPicker(), e.emit("airplay")) : r.show = t.get("AirPlay Not Available")
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "5SdyX": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            (0, o.def)(e, "quality", {
                set(t) {
                    let {
                        controls: r,
                        notice: a,
                        i18n: o
                    } = e, i = t.find(e => e.default) || t[0];
                    r.update({
                        name: "quality",
                        position: "right",
                        index: 10,
                        style: {
                            marginRight: "10px"
                        },
                        html: i?.html || "",
                        selector: t,
                        onSelect: async t => (await e.switchQuality(t.url), a.show = `${o.get("Switch Video")}: ${t.html}`, t.html)
                    })
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "4HcqV": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                events: t,
                option: r,
                template: {
                    $progress: a,
                    $video: i
                }
            } = e, n = null, s = null, l = !1, c = !1, p = !1;
            t.hover(a, () => {
                p = !0
            }, () => {
                p = !1
            }), e.on("setBar", async (t, u, d) => {
                let f = e.controls?.thumbnails,
                    {
                        url: h,
                        scale: m
                    } = r.thumbnails;
                if (!f || !h) return;
                let g = "played" === t && d && o.isMobile;
                if ("hover" === t || g) {
                    if (l || (l = !0, s = await (0, o.loadImg)(h, m), c = !0), !c || !p) return;
                    let t = a.clientWidth * u;
                    (0, o.setStyle)(f, "display", "flex"), t > 0 && t < a.clientWidth ? function(t) {
                        let n = e.controls?.thumbnails;
                        if (!n) return;
                        let {
                            number: l,
                            column: c,
                            width: p,
                            height: u,
                            scale: d
                        } = r.thumbnails, f = p * d || s.naturalWidth / c, h = u * d || f / (i.videoWidth / i.videoHeight), m = Math.floor(t / (a.clientWidth / l)), g = Math.ceil(m / c) - 1;
                        (0, o.setStyle)(n, "backgroundImage", `url(${s.src})`), (0, o.setStyle)(n, "height", `${h}px`), (0, o.setStyle)(n, "width", `${f}px`), (0, o.setStyle)(n, "backgroundPosition", `-${(m%c||c-1)*f}px -${g*h}px`), t <= f / 2 ? (0, o.setStyle)(n, "left", 0) : t > a.clientWidth - f / 2 ? (0, o.setStyle)(n, "left", `${a.clientWidth-f}px`) : (0, o.setStyle)(n, "left", `${t-f/2}px`)
                    }(t) : o.isMobile || (0, o.setStyle)(f, "display", "none"), g && (clearTimeout(n), n = setTimeout(() => {
                        (0, o.setStyle)(f, "display", "none")
                    }, 500))
                }
            }), (0, o.def)(e, "thumbnails", {
                get: () => e.option.thumbnails,
                set(t) {
                    t.url && !e.option.isLive && (e.option.thumbnails = t, clearTimeout(n), n = null, s = null, l = !1, c = !1)
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    fCWZK: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                option: t,
                storage: r,
                template: {
                    $video: a,
                    $poster: i
                }
            } = e;
            for (let r in t.moreVideoAttr) e.attr(r, t.moreVideoAttr[r]);
            t.muted && (e.muted = t.muted), t.volume && (a.volume = (0, o.clamp)(t.volume, 0, 1));
            let n = r.get("volume");
            for (let r in "number" == typeof n && (a.volume = (0, o.clamp)(n, 0, 1)), t.poster && (0, o.setStyle)(i, "backgroundImage", `url(${t.poster})`), t.autoplay && (a.autoplay = t.autoplay), t.playsInline && (a.playsInline = !0, a["webkit-playsinline"] = !0), t.theme && (t.cssVar["--art-theme"] = t.theme), t.cssVar) e.cssVar(r, t.cssVar[r]);
            e.url = t.url
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    f8Lv3: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => s);
        var o = e("../config"),
            i = a.interopDefault(o),
            n = e("../utils");

        function s(e) {
            let {
                i18n: t,
                notice: r,
                option: a,
                constructor: o,
                proxy: s,
                template: {
                    $player: l,
                    $video: c,
                    $poster: p
                }
            } = e, u = 0;
            for (let t = 0; t < i.default.events.length; t++) s(c, i.default.events[t], t => {
                e.emit(`video:${t.type}`, t)
            });
            e.on("video:canplay", () => {
                u = 0, e.loading.show = !1
            }), e.once("video:canplay", () => {
                e.loading.show = !1, e.controls.show = !0, e.mask.show = !0, e.isReady = !0, e.emit("ready")
            }), e.on("video:ended", () => {
                a.loop ? (e.seek = 0, e.play(), e.controls.show = !1, e.mask.show = !1) : (e.controls.show = !0, e.mask.show = !0)
            }), e.on("video:error", async i => {
                u < o.RECONNECT_TIME_MAX ? (await (0, n.sleep)(o.RECONNECT_SLEEP_TIME), u += 1, e.url = a.url, r.show = `${t.get("Reconnect")}: ${u}`, e.emit("error", i, u)) : (e.mask.show = !0, e.loading.show = !1, e.controls.show = !0, (0, n.addClass)(l, "art-error"), await (0, n.sleep)(o.RECONNECT_SLEEP_TIME), r.show = t.get("Video Load Failed"))
            }), e.on("video:loadedmetadata", () => {
                e.emit("resize"), n.isMobile && (e.loading.show = !1, e.controls.show = !0, e.mask.show = !0)
            }), e.on("video:loadstart", () => {
                e.loading.show = !0, e.mask.show = !1, e.controls.show = !0
            }), e.on("video:pause", () => {
                e.controls.show = !0, e.mask.show = !0
            }), e.on("video:play", () => {
                e.mask.show = !1, (0, n.setStyle)(p, "display", "none")
            }), e.on("video:playing", () => {
                e.mask.show = !1
            }), e.on("video:progress", () => {
                e.playing && (e.loading.show = !1)
            }), e.on("video:seeked", () => {
                e.loading.show = !1, e.mask.show = !0
            }), e.on("video:seeking", () => {
                e.loading.show = !0, e.mask.show = !1
            }), e.on("video:timeupdate", () => {
                e.mask.show = !1
            }), e.on("video:waiting", () => {
                e.loading.show = !0, e.mask.show = !1
            })
        }
    }, {
        "../config": "lyjeQ",
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "8Z0Uf": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = e("../utils/component"),
            i = a.interopDefault(o),
            n = e("./fullscreen"),
            s = a.interopDefault(n),
            l = e("./fullscreenWeb"),
            c = a.interopDefault(l),
            p = e("./pip"),
            u = a.interopDefault(p),
            d = e("./playAndPause"),
            f = a.interopDefault(d),
            h = e("./progress"),
            m = a.interopDefault(h),
            g = e("./time"),
            v = a.interopDefault(g),
            y = e("./volume"),
            b = a.interopDefault(y),
            x = e("./setting"),
            w = a.interopDefault(x),
            j = e("./screenshot"),
            k = a.interopDefault(j),
            C = e("./airplay"),
            S = a.interopDefault(C),
            I = e("../utils");
        class T extends i.default {
            constructor(e) {
                super(e), this.isHover = !1, this.name = "control", this.timer = Date.now();
                let {
                    constructor: t
                } = e, {
                    $player: r,
                    $bottom: a
                } = this.art.template;
                e.on("mousemove", () => {
                    I.isMobile || (this.show = !0)
                }), e.on("click", () => {
                    I.isMobile ? this.toggle() : this.show = !0
                }), e.on("document:mousemove", e => {
                    this.isHover = (0, I.includeFromEvent)(e, a)
                }), e.on("video:timeupdate", () => {
                    !e.setting.show && !this.isHover && !e.isInput && e.playing && this.show && Date.now() - this.timer >= t.CONTROL_HIDE_TIME && (this.show = !1)
                }), e.on("control", e => {
                    e ? ((0, I.removeClass)(r, "art-hide-cursor"), (0, I.addClass)(r, "art-hover"), this.timer = Date.now()) : ((0, I.addClass)(r, "art-hide-cursor"), (0, I.removeClass)(r, "art-hover"))
                }), this.init()
            }
            init() {
                let {
                    option: e
                } = this.art;
                e.isLive || this.add((0, m.default)({
                    name: "progress",
                    position: "top",
                    index: 10
                })), this.add({
                    name: "thumbnails",
                    position: "top",
                    index: 20
                }), this.add((0, f.default)({
                    name: "playAndPause",
                    position: "left",
                    index: 10
                })), this.add((0, b.default)({
                    name: "volume",
                    position: "left",
                    index: 20
                })), e.isLive || this.add((0, v.default)({
                    name: "time",
                    position: "left",
                    index: 30
                })), e.quality.length && (0, I.sleep)().then(() => {
                    this.art.quality = e.quality
                }), e.screenshot && !I.isMobile && this.add((0, k.default)({
                    name: "screenshot",
                    position: "right",
                    index: 20
                })), e.setting && this.add((0, w.default)({
                    name: "setting",
                    position: "right",
                    index: 30
                })), e.pip && this.add((0, u.default)({
                    name: "pip",
                    position: "right",
                    index: 40
                })), e.airplay && window.WebKitPlaybackTargetAvailabilityEvent && this.add((0, S.default)({
                    name: "airplay",
                    position: "right",
                    index: 50
                })), e.fullscreenWeb && this.add((0, c.default)({
                    name: "fullscreenWeb",
                    position: "right",
                    index: 60
                })), e.fullscreen && this.add((0, s.default)({
                    name: "fullscreen",
                    position: "right",
                    index: 70
                }));
                for (let t = 0; t < e.controls.length; t++) this.add(e.controls[t])
            }
            add(e) {
                let t = "function" == typeof e ? e(this.art) : e,
                    {
                        $progress: r,
                        $controlsLeft: a,
                        $controlsRight: o
                    } = this.art.template;
                switch (t.position) {
                    case "top":
                        this.$parent = r;
                        break;
                    case "left":
                        this.$parent = a;
                        break;
                    case "right":
                        this.$parent = o;
                        break;
                    default:
                        (0, I.errorHandle)(!1, "Control option.position must one of 'top', 'left', 'right'")
                }
                super.add(t)
            }
            check(e) {
                e.$control_value.innerHTML = e.html;
                for (let t = 0; t < e.$control_option.length; t++) {
                    let r = e.$control_option[t];
                    r.default = r === e, r.default && (0, I.inverseClass)(r.$control_item, "art-current")
                }
            }
            selector(e, t, r) {
                let {
                    proxy: a
                } = this.art.events;
                (0, I.addClass)(t, "art-control-selector");
                let o = (0, I.createElement)("div");
                (0, I.addClass)(o, "art-selector-value"), (0, I.append)(o, e.html), t.innerText = "", (0, I.append)(t, o);
                let i = (0, I.createElement)("div");
                (0, I.addClass)(i, "art-selector-list"), (0, I.append)(t, i);
                for (let t = 0; t < e.selector.length; t++) {
                    let r = e.selector[t],
                        a = (0, I.createElement)("div");
                    (0, I.addClass)(a, "art-selector-item"), r.default && (0, I.addClass)(a, "art-current"), a.dataset.index = t, a.dataset.value = r.value, a.innerHTML = r.html, (0, I.append)(i, a), (0, I.def)(r, "$control_option", {
                        get: () => e.selector
                    }), (0, I.def)(r, "$control_item", {
                        get: () => a
                    }), (0, I.def)(r, "$control_value", {
                        get: () => o
                    })
                }
                let n = a(i, "click", async t => {
                    let r = t.composedPath() || [],
                        a = e.selector.find(e => e.$control_item === r.find(t => e.$control_item === t));
                    this.check(a), e.onSelect && (o.innerHTML = await e.onSelect.call(this.art, a, a.$control_item, t))
                });
                r.push(n)
            }
        }
        r.default = T
    }, {
        "../utils/component": "18nVI",
        "./fullscreen": "c61Lj",
        "./fullscreenWeb": "03jeB",
        "./pip": "u8l8e",
        "./playAndPause": "ebXtb",
        "./progress": "bgoVP",
        "./time": "ikc2j",
        "./volume": "b8NFx",
        "./setting": "03o9l",
        "./screenshot": "4KCF5",
        "./airplay": "4IS2d",
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "18nVI": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = e("./dom"),
            i = e("./error"),
            n = e("option-validator"),
            s = a.interopDefault(n),
            l = e("../scheme");
        r.default = class {
            constructor(e) {
                this.id = 0, this.art = e, this.cache = new Map, this.add = this.add.bind(this), this.remove = this.remove.bind(this), this.update = this.update.bind(this)
            }
            get show() {
                return (0, o.hasClass)(this.art.template.$player, `art-${this.name}-show`)
            }
            set show(e) {
                let {
                    $player: t
                } = this.art.template, r = `art-${this.name}-show`;
                e ? (0, o.addClass)(t, r) : (0, o.removeClass)(t, r), this.art.emit(this.name, e)
            }
            toggle() {
                this.show = !this.show
            }
            add(e) {
                let t = "function" == typeof e ? e(this.art) : e;
                if (t.html = t.html || "", (0, s.default)(t, l.ComponentOption), !this.$parent || !this.name || t.disable) return;
                let r = t.name || `${this.name}${this.id}`,
                    a = this.cache.get(r);
                (0, i.errorHandle)(!a, `Can't add an existing [${r}] to the [${this.name}]`), this.id += 1;
                let n = (0, o.createElement)("div");
                (0, o.addClass)(n, `art-${this.name}`), (0, o.addClass)(n, `art-${this.name}-${r}`);
                let c = Array.from(this.$parent.children);
                n.dataset.index = t.index || this.id;
                let p = c.find(e => Number(e.dataset.index) >= Number(n.dataset.index));
                p ? p.insertAdjacentElement("beforebegin", n) : (0, o.append)(this.$parent, n), t.html && (0, o.append)(n, t.html), t.style && (0, o.setStyles)(n, t.style), t.tooltip && (0, o.tooltip)(n, t.tooltip);
                let u = [];
                if (t.click) {
                    let e = this.art.events.proxy(n, "click", e => {
                        e.preventDefault(), t.click.call(this.art, this, e)
                    });
                    u.push(e)
                }
                return t.selector && ["left", "right"].includes(t.position) && this.selector(t, n, u), this[r] = n, this.cache.set(r, {
                    $ref: n,
                    events: u,
                    option: t
                }), t.mounted && t.mounted.call(this.art, n), n
            }
            remove(e) {
                let t = this.cache.get(e);
                (0, i.errorHandle)(t, `Can't find [${e}] from the [${this.name}]`), t.option.beforeUnmount && t.option.beforeUnmount.call(this.art, t.$ref);
                for (let e = 0; e < t.events.length; e++) this.art.events.remove(t.events[e]);
                this.cache.delete(e), delete this[e], (0, o.remove)(t.$ref)
            }
            update(e) {
                let t = this.cache.get(e.name);
                return t && (e = Object.assign(t.option, e), this.remove(e.name)), this.add(e)
            }
        }
    }, {
        "./dom": "bSNiV",
        "./error": "hwmZz",
        "option-validator": "bAWi2",
        "../scheme": "AKEiO",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    c61Lj: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            return t => ({
                ...e,
                tooltip: t.i18n.get("Fullscreen"),
                mounted: e => {
                    let {
                        proxy: r,
                        icons: a,
                        i18n: i
                    } = t, n = (0, o.append)(e, a.fullscreenOn), s = (0, o.append)(e, a.fullscreenOff);
                    (0, o.setStyle)(s, "display", "none"), r(e, "click", () => {
                        t.fullscreen = !t.fullscreen
                    }), t.on("fullscreen", t => {
                        t ? ((0, o.tooltip)(e, i.get("Exit Fullscreen")), (0, o.setStyle)(n, "display", "none"), (0, o.setStyle)(s, "display", "inline-flex")) : ((0, o.tooltip)(e, i.get("Fullscreen")), (0, o.setStyle)(n, "display", "inline-flex"), (0, o.setStyle)(s, "display", "none"))
                    })
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "03jeB": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            return t => ({
                ...e,
                tooltip: t.i18n.get("Web Fullscreen"),
                mounted: e => {
                    let {
                        proxy: r,
                        icons: a,
                        i18n: i
                    } = t, n = (0, o.append)(e, a.fullscreenWebOn), s = (0, o.append)(e, a.fullscreenWebOff);
                    (0, o.setStyle)(s, "display", "none"), r(e, "click", () => {
                        t.fullscreenWeb = !t.fullscreenWeb
                    }), t.on("fullscreenWeb", t => {
                        t ? ((0, o.tooltip)(e, i.get("Exit Web Fullscreen")), (0, o.setStyle)(n, "display", "none"), (0, o.setStyle)(s, "display", "inline-flex")) : ((0, o.tooltip)(e, i.get("Web Fullscreen")), (0, o.setStyle)(n, "display", "inline-flex"), (0, o.setStyle)(s, "display", "none"))
                    })
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    u8l8e: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            return t => ({
                ...e,
                tooltip: t.i18n.get("PIP Mode"),
                mounted: e => {
                    let {
                        proxy: r,
                        icons: a,
                        i18n: i
                    } = t;
                    (0, o.append)(e, a.pip), r(e, "click", () => {
                        t.pip = !t.pip
                    }), t.on("pip", t => {
                        (0, o.tooltip)(e, i.get(t ? "Exit PIP Mode" : "PIP Mode"))
                    })
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    ebXtb: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            return t => ({
                ...e,
                mounted: e => {
                    let {
                        proxy: r,
                        icons: a,
                        i18n: i
                    } = t, n = (0, o.append)(e, a.play), s = (0, o.append)(e, a.pause);

                    function l() {
                        (0, o.setStyle)(n, "display", "flex"), (0, o.setStyle)(s, "display", "none")
                    }

                    function c() {
                        (0, o.setStyle)(n, "display", "none"), (0, o.setStyle)(s, "display", "flex")
                    }(0, o.tooltip)(n, i.get("Play")), (0, o.tooltip)(s, i.get("Pause")), r(n, "click", () => {
                        t.play()
                    }), r(s, "click", () => {
                        t.pause()
                    }), t.playing ? c() : l(), t.on("video:playing", () => {
                        c()
                    }), t.on("video:pause", () => {
                        l()
                    })
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    bgoVP: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "getPosFromEvent", () => i), a.export(r, "setCurrentTime", () => n), a.export(r, "default", () => s);
        var o = e("../utils");

        function i(e, t) {
            let {
                $progress: r
            } = e.template, {
                left: a
            } = (0, o.getRect)(r), i = o.isMobile ? t.touches[0].clientX : t.clientX, n = (0, o.clamp)(i - a, 0, r.clientWidth), s = n / r.clientWidth * e.duration, l = (0, o.secondToTime)(s), c = (0, o.clamp)(n / r.clientWidth, 0, 1);
            return {
                second: s,
                time: l,
                width: n,
                percentage: c
            }
        }

        function n(e, t) {
            if (e.isRotate) {
                let r = t.touches[0].clientY / e.height,
                    a = r * e.duration;
                e.emit("setBar", "played", r, t), e.seek = a
            } else {
                let {
                    second: r,
                    percentage: a
                } = i(e, t);
                e.emit("setBar", "played", a, t), e.seek = r
            }
        }

        function s(e) {
            return t => {
                let {
                    icons: r,
                    option: a,
                    proxy: s
                } = t;
                return {
                    ...e,
                    html: `<div class="art-control-progress-inner"><div class="art-progress-hover"></div><div class="art-progress-loaded"></div><div class="art-progress-played"></div><div class="art-progress-highlight"></div><div class="art-progress-indicator"></div><div class="art-progress-tip"></div></div>`,
                    mounted: e => {
                        let l = null,
                            c = !1,
                            p = (0, o.query)(".art-progress-hover", e),
                            u = (0, o.query)(".art-progress-loaded", e),
                            d = (0, o.query)(".art-progress-played", e),
                            f = (0, o.query)(".art-progress-highlight", e),
                            h = (0, o.query)(".art-progress-indicator", e),
                            m = (0, o.query)(".art-progress-tip", e);

                        function g(r, a) {
                            let {
                                width: n,
                                time: s
                            } = a || i(t, r);
                            m.innerText = s;
                            let l = m.clientWidth;
                            n <= l / 2 ? (0, o.setStyle)(m, "left", 0) : n > e.clientWidth - l / 2 ? (0, o.setStyle)(m, "left", `${e.clientWidth-l}px`) : (0, o.setStyle)(m, "left", `${n-l/2}px`)
                        }
                        r.indicator ? (0, o.append)(h, r.indicator) : (0, o.setStyle)(h, "backgroundColor", "var(--art-theme)"), t.on("setBar", function(r, a, i) {
                            let n = "played" === r && i && o.isMobile;
                            "loaded" === r && (0, o.setStyle)(u, "width", `${100*a}%`), "hover" === r && (0, o.setStyle)(p, "width", `${100*a}%`), "played" === r && ((0, o.setStyle)(d, "width", `${100*a}%`), (0, o.setStyle)(h, "left", `${100*a}%`)), n && ((0, o.setStyle)(m, "display", "flex"), g(i, {
                                width: e.clientWidth * a,
                                time: (0, o.secondToTime)(a * t.duration)
                            }), clearTimeout(l), l = setTimeout(() => {
                                (0, o.setStyle)(m, "display", "none")
                            }, 500))
                        }), t.on("video:loadedmetadata", function() {
                            f.innerText = "";
                            for (let e = 0; e < a.highlight.length; e++) {
                                let r = a.highlight[e],
                                    i = (0, o.clamp)(r.time, 0, t.duration) / t.duration * 100,
                                    n = `<span data-text="${r.text}" data-time="${r.time}" style="left: ${i}%"></span>`;
                                (0, o.append)(f, n)
                            }
                        }), t.on("video:progress", () => {
                            t.emit("setBar", "loaded", t.loaded)
                        }), t.constructor.USE_RAF ? t.on("raf", () => {
                            t.emit("setBar", "played", t.played)
                        }) : t.on("video:timeupdate", () => {
                            t.emit("setBar", "played", t.played)
                        }), t.on("video:ended", () => {
                            t.emit("setBar", "played", 1)
                        }), t.emit("setBar", "loaded", t.loaded || 0), o.isMobile || (s(e, "click", e => {
                            e.target !== h && n(t, e)
                        }), s(e, "mousemove", r => {
                            let {
                                percentage: a
                            } = i(t, r);
                            t.emit("setBar", "hover", a, r), (0, o.setStyle)(m, "display", "flex"), (0, o.includeFromEvent)(r, f) ? function(r) {
                                let {
                                    width: a
                                } = i(t, r), {
                                    text: n
                                } = r.target.dataset;
                                m.innerText = n;
                                let s = m.clientWidth;
                                a <= s / 2 ? (0, o.setStyle)(m, "left", 0) : a > e.clientWidth - s / 2 ? (0, o.setStyle)(m, "left", `${e.clientWidth-s}px`) : (0, o.setStyle)(m, "left", `${a-s/2}px`)
                            }(r) : g(r)
                        }), s(e, "mouseleave", e => {
                            (0, o.setStyle)(m, "display", "none"), t.emit("setBar", "hover", 0, e)
                        }), s(e, "mousedown", e => {
                            c = 0 === e.button
                        }), t.on("document:mousemove", e => {
                            if (c) {
                                let {
                                    second: r,
                                    percentage: a
                                } = i(t, e);
                                t.emit("setBar", "played", a, e), t.seek = r
                            }
                        }), t.on("document:mouseup", () => {
                            c && (c = !1)
                        }))
                    }
                }
            }
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    ikc2j: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            return t => ({
                ...e,
                style: o.isMobile ? {
                    fontSize: "12px",
                    padding: "0 5px"
                } : {
                    cursor: "auto",
                    padding: "0 10px"
                },
                mounted: e => {
                    function r() {
                        let r = `${(0,o.secondToTime)(t.currentTime)} / ${(0,o.secondToTime)(t.duration)}`;
                        r !== e.innerText && (e.innerText = r)
                    }
                    r();
                    let a = ["video:loadedmetadata", "video:timeupdate", "video:progress"];
                    for (let e = 0; e < a.length; e++) t.on(a[e], r)
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    b8NFx: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            return t => ({
                ...e,
                mounted: e => {
                    let {
                        proxy: r,
                        icons: a
                    } = t, i = (0, o.append)(e, a.volume), n = (0, o.append)(e, a.volumeClose), s = (0, o.append)(e, '<div class="art-volume-panel"></div>'), l = (0, o.append)(s, '<div class="art-volume-inner"></div>'), c = (0, o.append)(l, '<div class="art-volume-val"></div>'), p = (0, o.append)(l, '<div class="art-volume-slider"></div>'), u = (0, o.append)(p, '<div class="art-volume-handle"></div>'), d = (0, o.append)(u, '<div class="art-volume-loaded"></div>'), f = (0, o.append)(p, '<div class="art-volume-indicator"></div>');

                    function h(e) {
                        let {
                            top: t,
                            height: r
                        } = (0, o.getRect)(p);
                        return 1 - (e.clientY - t) / r
                    }

                    function m() {
                        if (t.muted || 0 === t.volume)(0, o.setStyle)(i, "display", "none"), (0, o.setStyle)(n, "display", "flex"), (0, o.setStyle)(f, "top", "100%"), (0, o.setStyle)(d, "top", "100%"), c.innerText = 0;
                        else {
                            let e = 100 * t.volume;
                            (0, o.setStyle)(i, "display", "flex"), (0, o.setStyle)(n, "display", "none"), (0, o.setStyle)(f, "top", `${100-e}%`), (0, o.setStyle)(d, "top", `${100-e}%`), c.innerText = Math.floor(e)
                        }
                    }
                    if (m(), t.on("video:volumechange", m), r(i, "click", () => {
                            t.muted = !0
                        }), r(n, "click", () => {
                            t.muted = !1
                        }), o.isMobile)(0, o.setStyle)(s, "display", "none");
                    else {
                        let e = !1;
                        r(p, "mousedown", r => {
                            e = 0 === r.button, t.volume = h(r)
                        }), t.on("document:mousemove", r => {
                            e && (t.muted = !1, t.volume = h(r))
                        }), t.on("document:mouseup", () => {
                            e && (e = !1)
                        })
                    }
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "03o9l": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            return t => ({
                ...e,
                tooltip: t.i18n.get("Show Setting"),
                mounted: e => {
                    let {
                        proxy: r,
                        icons: a,
                        i18n: i
                    } = t;
                    (0, o.append)(e, a.setting), r(e, "click", () => {
                        t.setting.toggle(), t.setting.resize()
                    }), t.on("setting", t => {
                        (0, o.tooltip)(e, i.get(t ? "Hide Setting" : "Show Setting"))
                    })
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "4KCF5": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            return t => ({
                ...e,
                tooltip: t.i18n.get("Screenshot"),
                mounted: e => {
                    let {
                        proxy: r,
                        icons: a
                    } = t;
                    (0, o.append)(e, a.screenshot), r(e, "click", () => {
                        t.screenshot()
                    })
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "4IS2d": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            return t => ({
                ...e,
                tooltip: t.i18n.get("AirPlay"),
                mounted: e => {
                    let {
                        proxy: r,
                        icons: a
                    } = t;
                    (0, o.append)(e, a.airplay), r(e, "click", () => t.airplay())
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "2KYsr": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = e("../utils"),
            i = e("../utils/component"),
            n = a.interopDefault(i),
            s = e("./playbackRate"),
            l = a.interopDefault(s),
            c = e("./aspectRatio"),
            p = a.interopDefault(c),
            u = e("./flip"),
            d = a.interopDefault(u),
            f = e("./info"),
            h = a.interopDefault(f),
            m = e("./version"),
            g = a.interopDefault(m),
            v = e("./close"),
            y = a.interopDefault(v);
        class b extends n.default {
            constructor(e) {
                super(e), this.name = "contextmenu", this.$parent = e.template.$contextmenu, o.isMobile || this.init()
            }
            init() {
                let {
                    option: e,
                    proxy: t,
                    template: {
                        $player: r,
                        $contextmenu: a
                    }
                } = this.art;
                e.playbackRate && this.add((0, l.default)({
                    name: "playbackRate",
                    index: 10
                })), e.aspectRatio && this.add((0, p.default)({
                    name: "aspectRatio",
                    index: 20
                })), e.flip && this.add((0, d.default)({
                    name: "flip",
                    index: 30
                })), this.add((0, h.default)({
                    name: "info",
                    index: 40
                })), this.add((0, g.default)({
                    name: "version",
                    index: 50
                })), this.add((0, y.default)({
                    name: "close",
                    index: 60
                }));
                for (let t = 0; t < e.contextmenu.length; t++) this.add(e.contextmenu[t]);
                t(r, "contextmenu", e => {
                    if (!this.art.constructor.CONTEXTMENU) return;
                    e.preventDefault(), this.show = !0;
                    let t = e.clientX,
                        i = e.clientY,
                        {
                            height: n,
                            width: s,
                            left: l,
                            top: c
                        } = (0, o.getRect)(r),
                        {
                            height: p,
                            width: u
                        } = (0, o.getRect)(a),
                        d = t - l,
                        f = i - c;
                    t + u > l + s && (d = s - u), i + p > c + n && (f = n - p), (0, o.setStyles)(a, {
                        top: `${f}px`,
                        left: `${d}px`
                    })
                }), t(r, "click", e => {
                    (0, o.includeFromEvent)(e, a) || (this.show = !1)
                }), this.art.on("blur", () => {
                    this.show = !1
                })
            }
        }
        r.default = b
    }, {
        "../utils": "71aH7",
        "../utils/component": "18nVI",
        "./playbackRate": "69eLi",
        "./aspectRatio": "lUefg",
        "./flip": "kysiM",
        "./info": "gqIgJ",
        "./version": "kRU7C",
        "./close": "jQ8Pm",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "69eLi": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            return t => {
                let {
                    i18n: r,
                    constructor: {
                        PLAYBACK_RATE: a
                    }
                } = t, i = a.map(e => `<span data-value="${e}">${1===e?r.get("Normal"):e.toFixed(1)}</span>`).join("");
                return {
                    ...e,
                    html: `${r.get("Play Speed")}: ${i}`,
                    click: (e, r) => {
                        let {
                            value: a
                        } = r.target.dataset;
                        a && (t.playbackRate = Number(a), e.show = !1)
                    },
                    mounted: e => {
                        let r = (0, o.query)('[data-value="1"]', e);
                        r && (0, o.inverseClass)(r, "art-current"), t.on("video:ratechange", () => {
                            let r = (0, o.queryAll)("span", e).find(e => Number(e.dataset.value) === t.playbackRate);
                            r && (0, o.inverseClass)(r, "art-current")
                        })
                    }
                }
            }
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    lUefg: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            return t => {
                let {
                    i18n: r,
                    constructor: {
                        ASPECT_RATIO: a
                    }
                } = t, i = a.map(e => `<span data-value="${e}">${"default"===e?r.get("Default"):e}</span>`).join("");
                return {
                    ...e,
                    html: `${r.get("Aspect Ratio")}: ${i}`,
                    click: (e, r) => {
                        let {
                            value: a
                        } = r.target.dataset;
                        a && (t.aspectRatio = a, e.show = !1)
                    },
                    mounted: e => {
                        let r = (0, o.query)('[data-value="default"]', e);
                        r && (0, o.inverseClass)(r, "art-current"), t.on("aspectRatio", t => {
                            let r = (0, o.queryAll)("span", e).find(e => e.dataset.value === t);
                            r && (0, o.inverseClass)(r, "art-current")
                        })
                    }
                }
            }
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    kysiM: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            return t => {
                let {
                    i18n: r,
                    constructor: {
                        FLIP: a
                    }
                } = t, i = a.map(e => `<span data-value="${e}">${r.get((0,o.capitalize)(e))}</span>`).join("");
                return {
                    ...e,
                    html: `${r.get("Video Flip")}: ${i}`,
                    click: (e, r) => {
                        let {
                            value: a
                        } = r.target.dataset;
                        a && (t.flip = a.toLowerCase(), e.show = !1)
                    },
                    mounted: e => {
                        let r = (0, o.query)('[data-value="normal"]', e);
                        r && (0, o.inverseClass)(r, "art-current"), t.on("flip", t => {
                            let r = (0, o.queryAll)("span", e).find(e => e.dataset.value === t);
                            r && (0, o.inverseClass)(r, "art-current")
                        })
                    }
                }
            }
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    gqIgJ: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function o(e) {
            return t => ({
                ...e,
                html: t.i18n.get("Video Info"),
                click: e => {
                    t.info.show = !0, e.show = !1
                }
            })
        }
        a.defineInteropFlag(r), a.export(r, "default", () => o)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    kRU7C: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function o(e) {
            return {
                ...e,
                html: '<a href="https://ply4.com" target="_blank">ply4 5.2.2</a>'
            }
        }
        a.defineInteropFlag(r), a.export(r, "default", () => o)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    jQ8Pm: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function o(e) {
            return t => ({
                ...e,
                html: t.i18n.get("Close"),
                click: e => {
                    e.show = !1
                }
            })
        }
        a.defineInteropFlag(r), a.export(r, "default", () => o)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "02ajl": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = e("./utils"),
            i = e("./utils/component"),
            n = a.interopDefault(i);
        class s extends n.default {
            constructor(e) {
                super(e), this.name = "info", o.isMobile || this.init()
            }
            init() {
                let {
                    proxy: e,
                    constructor: t,
                    template: {
                        $infoPanel: r,
                        $infoClose: a,
                        $video: i
                    }
                } = this.art;
                e(a, "click", () => {
                    this.show = !1
                });
                let n = null,
                    s = (0, o.queryAll)("[data-video]", r) || [];
                this.art.on("destroy", () => clearTimeout(n)),
                    function e() {
                        for (let e = 0; e < s.length; e++) {
                            let t = s[e],
                                r = i[t.dataset.video],
                                a = "number" == typeof r ? r.toFixed(2) : r;
                            t.innerText !== a && (t.innerText = a)
                        }
                        n = setTimeout(e, t.INFO_LOOP_TIME)
                    }()
            }
        }
        r.default = s
    }, {
        "./utils": "71aH7",
        "./utils/component": "18nVI",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    eSWto: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = e("./utils"),
            i = e("./utils/component"),
            n = a.interopDefault(i),
            s = e("option-validator"),
            l = a.interopDefault(s),
            c = e("./scheme"),
            p = a.interopDefault(c);
        class u extends n.default {
            constructor(e) {
                super(e), this.name = "subtitle", this.option = null, this.destroyEvent = () => null, this.init(e.option.subtitle);
                let t = !1;
                e.on("video:timeupdate", () => {
                    if (!this.url) return;
                    let e = this.art.template.$video.webkitDisplayingFullscreen;
                    "boolean" == typeof e && e !== t && (t = e, this.createTrack(e ? "subtitles" : "metadata", this.url))
                })
            }
            get url() {
                return this.art.template.$track.src
            }
            set url(e) {
                this.switch(e)
            }
            get textTrack() {
                return this.art.template.$video?.textTracks?.[0]
            }
            get activeCues() {
                return this.textTrack ? Array.from(this.textTrack.activeCues) : []
            }
            get cues() {
                return this.textTrack ? Array.from(this.textTrack.cues) : []
            }
            style(e, t) {
                let {
                    $subtitle: r
                } = this.art.template;
                return "object" == typeof e ? (0, o.setStyles)(r, e) : (0, o.setStyle)(r, e, t)
            }
            update() {
                let {
                    option: {
                        subtitle: e
                    },
                    template: {
                        $subtitle: t
                    }
                } = this.art;
                //subtitle fix
                t.innerHTML = "", this.activeCues.length && (this.art.emit("subtitleBeforeUpdate", this.activeCues), t.innerHTML = this.activeCues.map((t, r) => t.text.split(/\r?\n/).filter(e => e.trim()).map(t => `<div class="art-subtitle-line" data-group="${r}">${t.replace(/<i>(.*?)<\/i>/g, '<i class="italic">$1</i>').replace(/<br \/>/g, '<br>')}</div>`).join("")).join(""), this.art.emit("subtitleAfterUpdate", this.activeCues));
            }
            async switch (e, t = {}) {
                let {
                    i18n: r,
                    notice: a,
                    option: o
                } = this.art, i = {
                    ...o.subtitle,
                    ...t,
                    url: e
                }, n = await this.init(i);
                return t.name && (a.show = `${r.get("Switch Subtitle")}: ${t.name}`), n
            }
            createTrack(e, t) {
                let {
                    template: r,
                    proxy: a,
                    option: i
                } = this.art, {
                    $video: n,
                    $track: s
                } = r, l = (0, o.createElement)("track");
                l.default = !0, l.kind = e, l.src = t, l.label = i.subtitle.name || "Artplayer", l.track.mode = "hidden", l.onload = () => {
                    this.art.emit("subtitleLoad", this.cues, this.option)
                }, this.art.events.remove(this.destroyEvent), s.onload = null, (0, o.remove)(s), (0, o.append)(n, l), r.$track = l, this.destroyEvent = a(this.textTrack, "cuechange", () => this.update())
            }
            async init(e) {
                let {
                    notice: t,
                    template: {
                        $subtitle: r
                    }
                } = this.art;
                return this.textTrack ? ((0, l.default)(e, p.default.subtitle), e.url) ? (this.option = e, this.style(e.style), fetch(e.url).then(e => e.arrayBuffer()).then(t => {
                    let r = new TextDecoder(e.encoding).decode(t);
                    switch (e.type || (0, o.getExt)(e.url)) {
                        case "srt": {
                            let t = (0, o.srtToVtt)(r),
                                a = e.onVttLoad(t);
                            return (0, o.vttToBlob)(a)
                        }
                        case "ass": {
                            let t = (0, o.assToVtt)(r),
                                a = e.onVttLoad(t);
                            return (0, o.vttToBlob)(a)
                        }
                        case "vtt": {
                            let t = e.onVttLoad(r);
                            return (0, o.vttToBlob)(t)
                        }
                        default:
                            return e.url
                    }
                }).then(e => (r.innerHTML = "", this.url === e || (URL.revokeObjectURL(this.url), this.createTrack("metadata", e)), e)).catch(e => {
                    throw r.innerHTML = "", t.show = e, e
                })) : void 0 : null
            }
        }
        r.default = u
    }, {
        "./utils": "71aH7",
        "./utils/component": "18nVI",
        "option-validator": "bAWi2",
        "./scheme": "AKEiO",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    jo4S1: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = e("./clickInit"),
            i = a.interopDefault(o),
            n = e("./hoverInit"),
            s = a.interopDefault(n),
            l = e("./moveInit"),
            c = a.interopDefault(l),
            p = e("./resizeInit"),
            u = a.interopDefault(p),
            d = e("./gestureInit"),
            f = a.interopDefault(d),
            h = e("./viewInit"),
            m = a.interopDefault(h),
            g = e("./documentInit"),
            v = a.interopDefault(g),
            y = e("./updateInit"),
            b = a.interopDefault(y),
            x = e("./restoreInit"),
            w = a.interopDefault(x);
        r.default = class {
            constructor(e) {
                this.destroyEvents = [], this.proxy = this.proxy.bind(this), this.hover = this.hover.bind(this), (0, i.default)(e, this), (0, s.default)(e, this), (0, c.default)(e, this), (0, u.default)(e, this), (0, f.default)(e, this), (0, m.default)(e, this), (0, v.default)(e, this), (0, b.default)(e, this), (0, w.default)(e, this)
            }
            proxy(e, t, r, a = {}) {
                if (Array.isArray(t)) return t.map(t => this.proxy(e, t, r, a));
                e.addEventListener(t, r, a);
                let o = () => e.removeEventListener(t, r, a);
                return this.destroyEvents.push(o), o
            }
            hover(e, t, r) {
                t && this.proxy(e, "mouseenter", t), r && this.proxy(e, "mouseleave", r)
            }
            remove(e) {
                let t = this.destroyEvents.indexOf(e);
                t > -1 && (e(), this.destroyEvents.splice(t, 1))
            }
            destroy() {
                for (let e = 0; e < this.destroyEvents.length; e++) this.destroyEvents[e]()
            }
        }
    }, {
        "./clickInit": "6UrCm",
        "./hoverInit": "4jWHi",
        "./moveInit": "eqaUm",
        "./resizeInit": "eDXPO",
        "./gestureInit": "95GtS",
        "./viewInit": "InUBx",
        "./documentInit": "hoLfM",
        "./updateInit": "cl8m3",
        "./restoreInit": "bK8As",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "6UrCm": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e, t) {
            let {
                constructor: r,
                template: {
                    $player: a,
                    $video: i
                }
            } = e;
            t.proxy(document, ["click", "contextmenu"], t => {
                (0, o.includeFromEvent)(t, a) ? (e.isInput = "INPUT" === t.target.tagName, e.isFocus = !0, e.emit("focus", t)) : (e.isInput = !1, e.isFocus = !1, e.emit("blur", t))
            });
            let n = [];
            t.proxy(i, "click", t => {
                let a = Date.now();
                n.push(a);
                let {
                    MOBILE_CLICK_PLAY: i,
                    DBCLICK_TIME: s,
                    MOBILE_DBCLICK_PLAY: l,
                    DBCLICK_FULLSCREEN: c
                } = r, p = n.filter(e => a - e <= s);
                switch (p.length) {
                    case 1:
                        e.emit("click", t), o.isMobile ? !e.isLock && i && e.toggle() : e.toggle(), n = p;
                        break;
                    case 2:
                        e.emit("dblclick", t), o.isMobile ? !e.isLock && l && e.toggle() : c && (e.fullscreen = !e.fullscreen), n = [];
                        break;
                    default:
                        n = []
                }
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "4jWHi": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e, t) {
            let {
                $player: r
            } = e.template;
            t.hover(r, t => {
                (0, o.addClass)(r, "art-hover"), e.emit("hover", !0, t)
            }, t => {
                (0, o.removeClass)(r, "art-hover"), e.emit("hover", !1, t)
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    eqaUm: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function o(e, t) {
            let {
                $player: r
            } = e.template;
            t.proxy(r, "mousemove", t => {
                e.emit("mousemove", t)
            })
        }
        a.defineInteropFlag(r), a.export(r, "default", () => o)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    eDXPO: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e, t) {
            let {
                option: r,
                constructor: a
            } = e;
            e.on("resize", () => {
                let {
                    aspectRatio: t,
                    notice: a
                } = e;
                "standard" === e.state && r.autoSize && e.autoSize(), e.aspectRatio = t, a.show = ""
            });
            let i = (0, o.debounce)(() => e.emit("resize"), a.RESIZE_TIME);
            t.proxy(window, ["orientationchange", "resize"], () => i()), screen && screen.orientation && screen.orientation.onchange && t.proxy(screen.orientation, "change", () => i())
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "95GtS": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => n);
        var o = e("../utils"),
            i = e("../control/progress");

        function n(e, t) {
            if (o.isMobile && !e.option.isLive) {
                let {
                    $video: r,
                    $progress: a
                } = e.template, n = null, s = !1, l = 0, c = 0, p = 0, u = t => {
                    if (1 === t.touches.length && !e.isLock) {
                        n === a && (0, i.setCurrentTime)(e, t), s = !0;
                        let {
                            pageX: r,
                            pageY: o
                        } = t.touches[0];
                        l = r, c = o, p = e.currentTime
                    }
                }, d = t => {
                    if (1 === t.touches.length && s && e.duration) {
                        let {
                            pageX: a,
                            pageY: i
                        } = t.touches[0], s = function(e, t, r, a) {
                            var o = t - a,
                                i = r - e,
                                n = 0;
                            if (2 > Math.abs(i) && 2 > Math.abs(o)) return n;
                            var s = 180 * Math.atan2(o, i) / Math.PI;
                            return s >= -45 && s < 45 ? n = 4 : s >= 45 && s < 135 ? n = 1 : s >= -135 && s < -45 ? n = 2 : (s >= 135 && s <= 180 || s >= -180 && s < -135) && (n = 3), n
                        }(l, c, a, i), u = [3, 4].includes(s), d = [1, 2].includes(s);
                        if (u && !e.isRotate || d && e.isRotate) {
                            let s = (0, o.clamp)((a - l) / e.width, -1, 1),
                                u = (0, o.clamp)((i - c) / e.height, -1, 1),
                                d = e.isRotate ? u : s,
                                f = n === r ? e.constructor.TOUCH_MOVE_RATIO : 1,
                                h = (0, o.clamp)(p + e.duration * d * f, 0, e.duration);
                            e.seek = h, e.emit("setBar", "played", (0, o.clamp)(h / e.duration, 0, 1), t), e.notice.show = `${(0,o.secondToTime)(h)} / ${(0,o.secondToTime)(e.duration)}`
                        }
                    }
                };
                t.proxy(a, "touchstart", e => {
                    n = a, u(e)
                }), t.proxy(r, "touchstart", e => {
                    n = r, u(e)
                }), t.proxy(r, "touchmove", d), t.proxy(a, "touchmove", d), t.proxy(document, "touchend", () => {
                    s && (l = 0, c = 0, p = 0, s = !1, n = null)
                })
            }
        }
    }, {
        "../utils": "71aH7",
        "../control/progress": "bgoVP",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    InUBx: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e, t) {
            let {
                option: r,
                constructor: a,
                template: {
                    $container: i
                }
            } = e, n = (0, o.throttle)(() => {
                e.emit("view", (0, o.isInViewport)(i, a.SCROLL_GAP))
            }, a.SCROLL_TIME);
            t.proxy(window, "scroll", () => n()), e.on("view", t => {
                r.autoMini && (e.mini = !t)
            })
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    hoLfM: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function o(e, t) {
            t.proxy(document, "mousemove", t => {
                e.emit("document:mousemove", t)
            }), t.proxy(document, "mouseup", t => {
                e.emit("document:mouseup", t)
            })
        }
        a.defineInteropFlag(r), a.export(r, "default", () => o)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    cl8m3: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function o(e) {
            if (e.constructor.USE_RAF) {
                let t = null;
                ! function r() {
                    e.playing && e.emit("raf"), e.isDestroy || (t = requestAnimationFrame(r))
                }(), e.on("destroy", () => {
                    cancelAnimationFrame(t)
                })
            }
        }
        a.defineInteropFlag(r), a.export(r, "default", () => o)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    bK8As: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function o(e, t) {}
        a.defineInteropFlag(r), a.export(r, "default", () => o)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "6NoFy": [function(e, t, r) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = e("./utils");
        r.default = class {
            constructor(e) {
                this.art = e, this.keys = {}, e.option.hotkey && !a.isMobile && this.init()
            }
            init() {
                let {
                    proxy: e,
                    constructor: t
                } = this.art;
                this.add("Escape", () => {
                    this.art.fullscreenWeb && (this.art.fullscreenWeb = !1)
                }), this.add("Space", () => {
                    this.art.toggle()
                }), this.add("ArrowLeft", () => {
                    this.art.backward = t.SEEK_STEP
                }), this.add("ArrowUp", () => {
                    this.art.volume += t.VOLUME_STEP
                }), this.add("ArrowRight", () => {
                    this.art.forward = t.SEEK_STEP
                }), this.add("ArrowDown", () => {
                    this.art.volume -= t.VOLUME_STEP
                }), e(document, "keydown", e => {
                    if (this.art.isFocus) {
                        let t = document.activeElement.tagName.toUpperCase(),
                            r = document.activeElement.getAttribute("contenteditable");
                        if ("INPUT" !== t && "TEXTAREA" !== t && "" !== r && "true" !== r && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
                            let t = this.keys[e.code];
                            if (t) {
                                e.preventDefault();
                                for (let r = 0; r < t.length; r++) t[r].call(this.art, e);
                                this.art.emit("hotkey", e)
                            }
                        }
                    }
                    this.art.emit("keydown", e)
                })
            }
            add(e, t) {
                return this.keys[e] ? this.keys[e].push(t) : this.keys[e] = [t], this
            }
            remove(e, t) {
                if (this.keys[e]) {
                    let r = this.keys[e].indexOf(t); - 1 !== r && this.keys[e].splice(r, 1)
                }
                return this
            }
        }
    }, {
        "./utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "6G6hZ": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = e("./utils/component"),
            i = a.interopDefault(o);
        class n extends i.default {
            constructor(e) {
                super(e);
                let {
                    option: t,
                    template: {
                        $layer: r
                    }
                } = e;
                this.name = "layer", this.$parent = r;
                for (let e = 0; e < t.layers.length; e++) this.add(t.layers[e])
            }
        }
        r.default = n
    }, {
        "./utils/component": "18nVI",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "3dsEe": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = e("./utils"),
            i = e("./utils/component"),
            n = a.interopDefault(i);
        class s extends n.default {
            constructor(e) {
                super(e), this.name = "loading", (0, o.append)(e.template.$loading, e.icons.loading)
            }
        }
        r.default = s
    }, {
        "./utils": "71aH7",
        "./utils/component": "18nVI",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    dWGTw: [function(e, t, r) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = e("./utils");
        r.default = class {
            constructor(e) {
                this.art = e, this.timer = null
            }
            set show(e) {
                let {
                    constructor: t,
                    template: {
                        $player: r,
                        $noticeInner: o
                    }
                } = this.art;
                e ? (o.innerText = e instanceof Error ? e.message.trim() : e, (0, a.addClass)(r, "art-notice-show"), clearTimeout(this.timer), this.timer = setTimeout(() => {
                    o.innerText = "", (0, a.removeClass)(r, "art-notice-show")
                }, t.NOTICE_TIME)) : (0, a.removeClass)(r, "art-notice-show")
            }
        }
    }, {
        "./utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "5POkG": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = e("./utils"),
            i = e("./utils/component"),
            n = a.interopDefault(i);
        class s extends n.default {
            constructor(e) {
                super(e), this.name = "mask";
                let {
                    template: t,
                    icons: r,
                    events: a
                } = e, i = (0, o.append)(t.$state, r.state), n = (0, o.append)(t.$state, r.error);
                (0, o.setStyle)(n, "display", "none"), e.on("destroy", () => {
                    (0, o.setStyle)(i, "display", "none"), (0, o.setStyle)(n, "display", null)
                }), a.proxy(t.$state, "click", () => e.play())
            }
        }
        r.default = s
    }, {
        "./utils": "71aH7",
        "./utils/component": "18nVI",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "6OeNg": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = e("../utils"),
            i = e("bundle-text:./loading.svg"),
            n = a.interopDefault(i),
            s = e("bundle-text:./state.svg"),
            l = a.interopDefault(s),
            c = e("bundle-text:./check.svg"),
            p = a.interopDefault(c),
            u = e("bundle-text:./play.svg"),
            d = a.interopDefault(u),
            f = e("bundle-text:./pause.svg"),
            h = a.interopDefault(f),
            m = e("bundle-text:./volume.svg"),
            g = a.interopDefault(m),
            v = e("bundle-text:./volume-close.svg"),
            y = a.interopDefault(v),
            b = e("bundle-text:./screenshot.svg"),
            x = a.interopDefault(b),
            w = e("bundle-text:./setting.svg"),
            j = a.interopDefault(w),
            k = e("bundle-text:./arrow-left.svg"),
            C = a.interopDefault(k),
            S = e("bundle-text:./arrow-right.svg"),
            I = a.interopDefault(S),
            T = e("bundle-text:./playback-rate.svg"),
            $ = a.interopDefault(T),
            E = e("bundle-text:./aspect-ratio.svg"),
            M = a.interopDefault(E),
            F = e("bundle-text:./config.svg"),
            H = a.interopDefault(F),
            D = e("bundle-text:./pip.svg"),
            z = a.interopDefault(D),
            A = e("bundle-text:./lock.svg"),
            R = a.interopDefault(A),
            O = e("bundle-text:./unlock.svg"),
            L = a.interopDefault(O),
            Y = e("bundle-text:./fullscreen-off.svg"),
            P = a.interopDefault(Y),
            V = e("bundle-text:./fullscreen-on.svg"),
            q = a.interopDefault(V),
            _ = e("bundle-text:./fullscreen-web-off.svg"),
            N = a.interopDefault(_),
            B = e("bundle-text:./fullscreen-web-on.svg"),
            W = a.interopDefault(B),
            U = e("bundle-text:./switch-on.svg"),
            K = a.interopDefault(U),
            Z = e("bundle-text:./switch-off.svg"),
            X = a.interopDefault(Z),
            G = e("bundle-text:./flip.svg"),
            Q = a.interopDefault(G),
            J = e("bundle-text:./error.svg"),
            ee = a.interopDefault(J),
            et = e("bundle-text:./close.svg"),
            er = a.interopDefault(et),
            ea = e("bundle-text:./airplay.svg"),
            eo = a.interopDefault(ea);
        r.default = class {
            constructor(e) {
                let t = {
                    loading: n.default,
                    state: l.default,
                    play: d.default,
                    pause: h.default,
                    check: p.default,
                    volume: g.default,
                    volumeClose: y.default,
                    screenshot: x.default,
                    setting: j.default,
                    pip: z.default,
                    arrowLeft: C.default,
                    arrowRight: I.default,
                    playbackRate: $.default,
                    aspectRatio: M.default,
                    config: H.default,
                    lock: R.default,
                    flip: Q.default,
                    unlock: L.default,
                    fullscreenOff: P.default,
                    fullscreenOn: q.default,
                    fullscreenWebOff: N.default,
                    fullscreenWebOn: W.default,
                    switchOn: K.default,
                    switchOff: X.default,
                    error: ee.default,
                    close: er.default,
                    airplay: eo.default,
                    ...e.option.icons
                };
                for (let e in t)(0, o.def)(this, e, {
                    get: () => (0, o.getIcon)(e, t[e])
                })
            }
        }
    }, {
        "../utils": "71aH7",
        "bundle-text:./loading.svg": "7tDub",
        "bundle-text:./state.svg": "1ElZc",
        "bundle-text:./check.svg": "lmgoP",
        "bundle-text:./play.svg": "lVWoQ",
        "bundle-text:./pause.svg": "5Mnax",
        "bundle-text:./volume.svg": "w3eIa",
        "bundle-text:./volume-close.svg": "rHjo1",
        "bundle-text:./screenshot.svg": "2KcqM",
        "bundle-text:./setting.svg": "8rQMV",
        "bundle-text:./arrow-left.svg": "kqGBE",
        "bundle-text:./arrow-right.svg": "aFjpC",
        "bundle-text:./playback-rate.svg": "lx7ZM",
        "bundle-text:./aspect-ratio.svg": "2sEjf",
        "bundle-text:./config.svg": "fQTgE",
        "bundle-text:./pip.svg": "2CaxO",
        "bundle-text:./lock.svg": "aCGnW",
        "bundle-text:./unlock.svg": "bTrAV",
        "bundle-text:./fullscreen-off.svg": "bA3p0",
        "bundle-text:./fullscreen-on.svg": "fTuY8",
        "bundle-text:./fullscreen-web-off.svg": "tvKf4",
        "bundle-text:./fullscreen-web-on.svg": "1F1oB",
        "bundle-text:./switch-on.svg": "7qNHs",
        "bundle-text:./switch-off.svg": "28aV8",
        "bundle-text:./flip.svg": "1uXI6",
        "bundle-text:./error.svg": "9f4dh",
        "bundle-text:./close.svg": "4nTtS",
        "bundle-text:./airplay.svg": "cDPXC",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "7tDub": [function(e, t, r) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-default"><path fill="none" class="bk" d="M0 0h100v100H0z"/><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-1s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(30 105.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(60 75.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(90 65 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.75s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(120 58.66 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(150 54.02 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(180 50 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-150 45.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-120 41.34 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-90 35 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.25s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-60 24.02 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-30 -5.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/></rect></svg>'
    }, {}],
    "1ElZc": [function(e, t, r) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="#fff" d="M9.5 9.325v5.35q0 .575.525.875t1.025-.05l4.15-2.65q.475-.3.475-.85t-.475-.85L11.05 8.5q-.5-.35-1.025-.05t-.525.875ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>'
    }, {}],
    lmgoP: [function(e, t, r) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:100%;height:100%"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#fff"/></svg>'
    }, {}],
    lVWoQ: [function(e, t, r) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22"><path d="M17.982 9.275 8.06 3.27A2.013 2.013 0 0 0 5 4.994v12.011a2.017 2.017 0 0 0 3.06 1.725l9.922-6.005a2.017 2.017 0 0 0 0-3.45z"/></svg>'
    }, {}],
    "5Mnax": [function(e, t, r) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22"><path d="M7 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zm8 0a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2z"/></svg>'
    }, {}],
    w3eIa: [function(e, t, r) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22"><path d="M10.188 4.65 6 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39V5.04a.498.498 0 0 0-.812-.39zm4.258-.872a1 1 0 0 0-.862 1.804 6.002 6.002 0 0 1-.007 10.838 1 1 0 0 0 .86 1.806A8.001 8.001 0 0 0 19 11a8.001 8.001 0 0 0-4.554-7.222z"/><path d="M15 11a3.998 3.998 0 0 0-2-3.465v6.93A3.998 3.998 0 0 0 15 11z"/></svg>'
    }, {}],
    rHjo1: [function(e, t, r) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22"><path d="M15 11a3.998 3.998 0 0 0-2-3.465v2.636l1.865 1.865A4.02 4.02 0 0 0 15 11z"/><path d="M13.583 5.583A5.998 5.998 0 0 1 17 11a6 6 0 0 1-.585 2.587l1.477 1.477a8.001 8.001 0 0 0-3.446-11.286 1 1 0 0 0-.863 1.805zm5.195 13.195-2.121-2.121-1.414-1.414-1.415-1.415L13 13l-2-2-3.889-3.889-3.889-3.889a.999.999 0 1 0-1.414 1.414L5.172 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39v-3.131l2.587 2.587-.01.005a1 1 0 0 0 .86 1.806c.215-.102.424-.214.627-.333l2.3 2.3a1.001 1.001 0 0 0 1.414-1.416zM11 5.04a.5.5 0 0 0-.813-.39L8.682 5.854 11 8.172V5.04z"/></svg>'
    }, {}],
    "2KcqM": [function(e, t, r) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 50 50"><path d="M19.402 6a5 5 0 0 0-4.902 4.012L14.098 12H9a5 5 0 0 0-5 5v21a5 5 0 0 0 5 5h32a5 5 0 0 0 5-5V17a5 5 0 0 0-5-5h-5.098l-.402-1.988A5 5 0 0 0 30.598 6ZM25 17c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10Zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8Z"/></svg>'
    }, {}],
    "8rQMV": [function(e, t, r) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="2"/><path d="M19.164 8.861 17.6 8.6a6.978 6.978 0 0 0-1.186-2.099l.574-1.533a1 1 0 0 0-.436-1.217l-1.997-1.153a1.001 1.001 0 0 0-1.272.23l-1.008 1.225a7.04 7.04 0 0 0-2.55.001L8.716 2.829a1 1 0 0 0-1.272-.23L5.447 3.751a1 1 0 0 0-.436 1.217l.574 1.533A6.997 6.997 0 0 0 4.4 8.6l-1.564.261A.999.999 0 0 0 2 9.847v2.306c0 .489.353.906.836.986l1.613.269a7 7 0 0 0 1.228 2.075l-.558 1.487a1 1 0 0 0 .436 1.217l1.997 1.153c.423.244.961.147 1.272-.23l1.04-1.263a7.089 7.089 0 0 0 2.272 0l1.04 1.263a1 1 0 0 0 1.272.23l1.997-1.153a1 1 0 0 0 .436-1.217l-.557-1.487c.521-.61.94-1.31 1.228-2.075l1.613-.269a.999.999 0 0 0 .835-.986V9.847a.999.999 0 0 0-.836-.986zM11 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>'
    }, {}],
    kqGBE: [function(e, t, r) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 32 32"><path d="m19.41 20.09-4.58-4.59 4.58-4.59L18 9.5l-6 6 6 6z" fill="#fff"/></svg>'
    }, {}],
    aFjpC: [function(e, t, r) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 32 32"><path d="m12.59 20.34 4.58-4.59-4.58-4.59L14 9.75l6 6-6 6z" fill="#fff"/></svg>'
    }, {}],
    lx7ZM: [function(e, t, r) {
        t.exports = '<svg height="24" viewBox="0 0 24 24" width="24"><path d="M10 8v8l6-4-6-4zM6.3 5l-.6-.8C7.2 3 9 2.2 11 2l.1 1c-1.8.2-3.4.9-4.8 2zM5 6.3l-.8-.6C3 7.2 2.2 9 2 11l1 .1c.2-1.8.9-3.4 2-4.8zm0 11.4c-1.1-1.4-1.8-3.1-2-4.8L2 13c.2 2 1 3.8 2.2 5.4l.8-.7zm6.1 3.3c-1.8-.2-3.4-.9-4.8-2l-.6.8C7.2 21 9 21.8 11 22l.1-1zM22 12c0-5.2-3.9-9.4-9-10l-.1 1c4.6.5 8.1 4.3 8.1 9s-3.5 8.5-8.1 9l.1 1c5.2-.5 9-4.8 9-10z" fill="#fff" style="--darkreader-inline-fill:#a8a6a4"/></svg>'
    }, {}],
    "2sEjf": [function(e, t, r) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" style="width:100%;height:100%;transform:translate(0,0)"><defs><clipPath id="a"><path d="M0 0h88v88H0z"/></clipPath></defs><g style="display:block" clip-path="url(\'#a\')"><path fill="#FFF" d="m12.438-12.702-2.82 2.82c-.79.79-.79 2.05 0 2.83l7.07 7.07-7.07 7.07c-.79.79-.79 2.05 0 2.83l2.82 2.83c.79.78 2.05.78 2.83 0l11.32-11.31c.78-.78.78-2.05 0-2.83l-11.32-11.31c-.78-.79-2.04-.79-2.83 0zm-24.88 0c-.74-.74-1.92-.78-2.7-.12l-.13.12-11.31 11.31a2 2 0 0 0-.12 2.7l.12.13 11.31 11.31a2 2 0 0 0 2.7.12l.13-.12 2.83-2.83c.74-.74.78-1.91.11-2.7l-.11-.13-7.07-7.07 7.07-7.07c.74-.74.78-1.91.11-2.7l-.11-.13-2.83-2.82zM28-28c4.42 0 8 3.58 8 8v40c0 4.42-3.58 8-8 8h-56c-4.42 0-8-3.58-8-8v-40c0-4.42 3.58-8 8-8h56z" style="--darkreader-inline-fill:#a8a6a4" transform="translate(44 44)"/></g></svg>'
    }, {}],
    fQTgE: [function(e, t, r) {
        t.exports = '<svg height="24" viewBox="0 0 24 24" width="24"><path d="M15 17h6v1h-6v-1zm-4 0H3v1h8v2h1v-5h-1v2zm3-9h1V3h-1v2H3v1h11v2zm4-3v1h3V5h-3zM6 14h1V9H6v2H3v1h3v2zm4-2h11v-1H10v1z" fill="#fff" style="--darkreader-inline-fill:#a8a6a4"/></svg>'
    }, {}],
    "2CaxO": [function(e, t, r) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" height="32" width="32"><path d="M25 17h-8v6h8v-6Zm4 8V10.98C29 9.88 28.1 9 27 9H9c-1.1 0-2 .88-2 1.98V25c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2Zm-2 .02H9V10.97h18v14.05Z"/></svg>'
    }, {}],
    aCGnW: [function(e, t, r) {
        t.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M298.667 426.667v-85.334a213.333 213.333 0 1 1 426.666 0v85.334H768A85.333 85.333 0 0 1 853.333 512v256A85.333 85.333 0 0 1 768 853.333H256A85.333 85.333 0 0 1 170.667 768V512A85.333 85.333 0 0 1 256 426.667h42.667zM512 213.333a128 128 0 0 0-128 128v85.334h256v-85.334a128 128 0 0 0-128-128z" fill="#fff"/></svg>'
    }, {}],
    bTrAV: [function(e, t, r) {
        t.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="m666.752 194.517-49.365 74.112A128 128 0 0 0 384 341.333l.043 85.334h384A85.333 85.333 0 0 1 853.376 512v256a85.333 85.333 0 0 1-85.333 85.333H256A85.333 85.333 0 0 1 170.667 768V512A85.333 85.333 0 0 1 256 426.667h42.667v-85.334a213.333 213.333 0 0 1 368.085-146.816z" fill="#fff"/></svg>'
    }, {}],
    bA3p0: [function(e, t, r) {
        t.exports = '<svg class="icon" width="22" height="22" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M768 298.667h170.667V384h-256V128H768v170.667zM341.333 384h-256v-85.333H256V128h85.333v256zM768 725.333V896h-85.333V640h256v85.333H768zM341.333 640v256H256V725.333H85.333V640h256z"/></svg>'
    }, {}],
    fTuY8: [function(e, t, r) {
        t.exports = '<svg class="icon" width="22" height="22" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M625.778 256H768v142.222h113.778v-256h-256V256zM256 398.222V256h142.222V142.222h-256v256H256zm512 227.556V768H625.778v113.778h256v-256H768zM398.222 768H256V625.778H142.222v256h256V768z"/></svg>'
    }, {}],
    tvKf4: [function(e, t, r) {
        t.exports = '<svg class="icon" width="18" height="18" viewBox="0 0 1152 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4a76.8 76.8 0 0 0 76.8 76.8h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0zM1024 128v768H128V128h896zM896 512a64 64 0 0 1 7.488 127.552L896 640H768v128a64 64 0 0 1-56.512 63.552L704 832a64 64 0 0 1-63.552-56.512L640 768V582.592c0-34.496 25.024-66.112 61.632-70.208l8-.384H896zm-640 0a64 64 0 0 1-7.488-127.552L256 384h128V256a64 64 0 0 1 56.512-63.552L448 192a64 64 0 0 1 63.552 56.512L512 256v185.408c0 34.432-25.024 66.112-61.632 70.144l-8 .448H256z"/></svg>'
    }, {}],
    "1F1oB": [function(e, t, r) {
        t.exports = '<svg class="icon" width="18" height="18" viewBox="0 0 1152 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4a76.8 76.8 0 0 0 76.8 76.8h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0zM1024 128v768H128V128h896zm-576 64a64 64 0 0 1 7.488 127.552L448 320H320v128a64 64 0 0 1-56.512 63.552L256 512a64 64 0 0 1-63.552-56.512L192 448V262.592c0-34.432 25.024-66.112 61.632-70.144l8-.448H448zm256 640a64 64 0 0 1-7.488-127.552L704 704h128V576a64 64 0 0 1 56.512-63.552L896 512a64 64 0 0 1 63.552 56.512L960 576v185.408c0 34.496-25.024 66.112-61.632 70.208l-8 .384H704z"/></svg>'
    }, {}],
    "7qNHs": [function(e, t, r) {
        t.exports = '<svg class="icon" width="26" height="26" viewBox="0 0 1664 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#648FFC" d="M1152 0H512a512 512 0 0 0 0 1024h640a512 512 0 0 0 0-1024zm0 960a448 448 0 1 1 448-448 448 448 0 0 1-448 448z"/></svg>'
    }, {}],
    "28aV8": [function(e, t, r) {
        t.exports = '<svg class="icon" width="26" height="26" viewBox="0 0 1740 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M511.898 1024h670.515c282.419-.41 511.18-229.478 511.18-511.898 0-282.419-228.761-511.488-511.18-511.897H511.898C229.478.615.717 229.683.717 512.102c0 282.42 228.761 511.488 511.18 511.898zm-.564-975.36A464.589 464.589 0 1 1 48.026 513.024 463.872 463.872 0 0 1 511.334 48.435v.205z"/></svg>'
    }, {}],
    "1uXI6": [function(e, t, r) {
        t.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M554.667 810.667V896h-85.334v-85.333h85.334zm-384-632.662a42.667 42.667 0 0 1 34.986 18.219l203.904 291.328a42.667 42.667 0 0 1 0 48.896L205.611 827.776A42.667 42.667 0 0 1 128 803.328V220.672a42.667 42.667 0 0 1 42.667-42.667zm682.666 0a42.667 42.667 0 0 1 42.368 37.718l.299 4.949v582.656a42.667 42.667 0 0 1-74.24 28.63l-3.413-4.182-203.904-291.328a42.667 42.667 0 0 1-3.03-43.861l3.03-5.035 203.946-291.328a42.667 42.667 0 0 1 34.944-18.219zM554.667 640v85.333h-85.334V640h85.334zm-358.4-320.896V716.8L335.957 512 196.31 319.104zm358.4 150.23v85.333h-85.334v-85.334h85.334zm0-170.667V384h-85.334v-85.333h85.334zm0-170.667v85.333h-85.334V128h85.334z" fill="#fff"/></svg>'
    }, {}],
    "9f4dh": [function(e, t, r) {
        t.exports = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="50" height="50"><path d="M593.818 168.55 949.82 763.76c26.153 43.746 10.732 99.738-34.447 125.052-14.397 8.069-30.72 12.308-47.37 12.308H155.976c-52.224 0-94.536-40.96-94.536-91.505 0-16.097 4.383-31.928 12.718-45.875l356.004-595.19c26.173-43.724 84.009-58.654 129.208-33.341a93.082 93.082 0 0 1 34.448 33.341zM512 819.2a61.44 61.44 0 1 0 0-122.88 61.44 61.44 0 0 0 0 122.88zm0-512a72.315 72.315 0 0 0-71.762 81.306l25.723 205.721a46.408 46.408 0 0 0 92.078 0l25.723-205.742A72.315 72.315 0 0 0 512 307.2z"/></svg>'
    }, {}],
    "4nTtS": [function(e, t, r) {
        t.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z"/></svg>'
    }, {}],
    cDPXC: [function(e, t, r) {
        t.exports = '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="M16 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-2H3V3h12v8h-2v2h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/><path d="M4 17h10l-5-6z"/></g></svg>'
    }, {}],
    "3eYNH": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = e("./flip"),
            i = a.interopDefault(o),
            n = e("./aspectRatio"),
            s = a.interopDefault(n),
            l = e("./playbackRate"),
            c = a.interopDefault(l),
            p = e("./subtitleOffset"),
            u = a.interopDefault(p),
            d = e("../utils/component"),
            f = a.interopDefault(d),
            h = e("../utils");
        class m extends f.default {
            constructor(e) {
                super(e);
                let {
                    option: t,
                    controls: r,
                    template: {
                        $setting: a
                    }
                } = e;
                this.name = "setting", this.$parent = a, this.id = 0, this.active = null, this.cache = new Map, this.option = [...this.builtin, ...t.settings], t.setting && (this.format(), this.render(), e.on("blur", () => {
                    this.show && (this.show = !1, this.render())
                }), e.on("focus", e => {
                    let t = (0, h.includeFromEvent)(e, r.setting),
                        a = (0, h.includeFromEvent)(e, this.$parent);
                    !this.show || t || a || (this.show = !1, this.render())
                }), e.on("resize", () => this.resize()))
            }
            get builtin() {
                let e = [],
                    {
                        option: t
                    } = this.art;
                return t.playbackRate && e.push((0, c.default)(this.art)), t.aspectRatio && e.push((0, s.default)(this.art)), t.flip && e.push((0, i.default)(this.art)), t.subtitleOffset && e.push((0, u.default)(this.art)), e
            }
            traverse(e, t = this.option) {
                for (let r = 0; r < t.length; r++) {
                    let a = t[r];
                    e(a), a.selector?.length && this.traverse.call(this, e, a.selector)
                }
            }
            check(e) {
                e.$parent.tooltip = e.html, this.traverse(t => {
                    t.default = t === e, t.default && t.$item && (0, h.inverseClass)(t.$item, "art-current")
                }, e.$option), this.render(e.$parents)
            }
            format(e = this.option, t, r, a = []) {
                for (let o = 0; o < e.length; o++) {
                    let i = e[o];
                    if (i?.name ? ((0, h.errorHandle)(!a.includes(i.name), `The [${i.name}] is already exist in [setting]`), a.push(i.name)) : i.name = `setting-${this.id++}`, !i.$formatted) {
                        (0, h.def)(i, "$parent", {
                            get: () => t
                        }), (0, h.def)(i, "$parents", {
                            get: () => r
                        }), (0, h.def)(i, "$option", {
                            get: () => e
                        });
                        let a = [];
                        (0, h.def)(i, "$events", {
                            get: () => a
                        }), (0, h.def)(i, "$formatted", {
                            get: () => !0
                        })
                    }
                    this.format(i.selector || [], i, e, a)
                }
                this.option = e
            }
            find(e = "") {
                let t = null;
                return this.traverse(r => {
                    r.name === e && (t = r)
                }), t
            }
            resize() {
                let {
                    controls: e,
                    constructor: {
                        SETTING_WIDTH: t,
                        SETTING_ITEM_HEIGHT: r
                    },
                    template: {
                        $player: a,
                        $setting: o
                    }
                } = this.art;
                if (e.setting && this.show) {
                    let i = this.active[0]?.$parent?.width || t,
                        {
                            left: n,
                            width: s
                        } = (0, h.getRect)(e.setting),
                        {
                            left: l,
                            width: c
                        } = (0, h.getRect)(a),
                        p = n - l + s / 2 - i / 2,
                        u = this.active === this.option ? this.active.length * r : (this.active.length + 1) * r;
                    if ((0, h.setStyle)(o, "height", `${u}px`), (0, h.setStyle)(o, "width", `${i}px`), this.art.isRotate || h.isMobile) return;
                    p + i > c ? ((0, h.setStyle)(o, "left", null), (0, h.setStyle)(o, "right", null)) : ((0, h.setStyle)(o, "left", `${p}px`), (0, h.setStyle)(o, "right", "auto"))
                }
            }
            inactivate(e) {
                for (let t = 0; t < e.$events.length; t++) this.art.events.remove(e.$events[t]);
                e.$events.length = 0
            }
            remove(e) {
                let t = this.find(e);
                (0, h.errorHandle)(t, `Can't find [${e}] in the [setting]`);
                let r = t.$option.indexOf(t);
                t.$option.splice(r, 1), this.inactivate(t), t.$item && (0, h.remove)(t.$item), this.render()
            }
            update(e) {
                let t = this.find(e.name);
                return t ? (this.inactivate(t), Object.assign(t, e), this.format(), this.creatItem(t, !0), this.render(), t) : this.add(e)
            }
            add(e, t = this.option) {
                return t.push(e), this.format(), this.creatItem(e), this.render(), e
            }
            creatHeader(e) {
                if (!this.cache.has(e.$option)) return;
                let t = this.cache.get(e.$option),
                    {
                        proxy: r,
                        icons: {
                            arrowLeft: a
                        },
                        constructor: {
                            SETTING_ITEM_HEIGHT: o
                        }
                    } = this.art,
                    i = (0, h.createElement)("div");
                (0, h.setStyle)(i, "height", `${o}px`), (0, h.addClass)(i, "art-setting-item"), (0, h.addClass)(i, "art-setting-item-back");
                let n = (0, h.append)(i, '<div class="art-setting-item-left"></div>'),
                    s = (0, h.createElement)("div");
                (0, h.addClass)(s, "art-setting-item-left-icon"), (0, h.append)(s, a), (0, h.append)(n, s), (0, h.append)(n, e.$parent.html);
                let l = r(i, "click", () => this.render(e.$parents));
                e.$parent.$events.push(l), (0, h.append)(t, i)
            }
            creatItem(e, t = !1) {
                if (!this.cache.has(e.$option)) return;
                let r = this.cache.get(e.$option),
                    a = e.$item,
                    o = "selector";
                (0, h.has)(e, "switch") && (o = "switch"), (0, h.has)(e, "range") && (o = "range");
                let {
                    icons: i,
                    proxy: n,
                    constructor: s
                } = this.art, l = (0, h.createElement)("div");
                (0, h.addClass)(l, "art-setting-item"), (0, h.setStyle)(l, "height", `${s.SETTING_ITEM_HEIGHT}px`), l.dataset.name = e.name || "", l.dataset.value = e.value || "";
                let c = (0, h.append)(l, '<div class="art-setting-item-left"></div>'),
                    p = (0, h.append)(l, '<div class="art-setting-item-right"></div>'),
                    u = (0, h.createElement)("div");
                switch ((0, h.addClass)(u, "art-setting-item-left-icon"), o) {
                    case "switch":
                    case "range":
                        (0, h.append)(u, e.icon || i.config);
                        break;
                    case "selector":
                        e.selector?.length ? (0, h.append)(u, e.icon || i.config) : (0, h.append)(u, i.check)
                }(0, h.append)(c, u), (0, h.def)(e, "$icon", {
                    configurable: !0,
                    get: () => u
                }), (0, h.def)(e, "icon", {
                    configurable: !0,
                    get: () => u.innerHTML,
                    set(e) {
                        u.innerHTML = "", (0, h.append)(u, e)
                    }
                });
                let d = (0, h.createElement)("div");
                (0, h.addClass)(d, "art-setting-item-left-text"), (0, h.append)(d, e.html || ""), (0, h.append)(c, d), (0, h.def)(e, "$html", {
                    configurable: !0,
                    get: () => d
                }), (0, h.def)(e, "html", {
                    configurable: !0,
                    get: () => d.innerHTML,
                    set(e) {
                        d.innerHTML = "", (0, h.append)(d, e)
                    }
                });
                let f = (0, h.createElement)("div");
                switch ((0, h.addClass)(f, "art-setting-item-right-tooltip"), (0, h.append)(f, e.tooltip || ""), (0, h.append)(p, f), (0, h.def)(e, "$tooltip", {
                        configurable: !0,
                        get: () => f
                    }), (0, h.def)(e, "tooltip", {
                        configurable: !0,
                        get: () => f.innerHTML,
                        set(e) {
                            f.innerHTML = "", (0, h.append)(f, e)
                        }
                    }), o) {
                    case "switch": {
                        let t = (0, h.createElement)("div");
                        (0, h.addClass)(t, "art-setting-item-right-icon");
                        let r = (0, h.append)(t, i.switchOn),
                            a = (0, h.append)(t, i.switchOff);
                        (0, h.setStyle)(e.switch ? a : r, "display", "none"), (0, h.append)(p, t), (0, h.def)(e, "$switch", {
                            configurable: !0,
                            get: () => t
                        });
                        let o = e.switch;
                        (0, h.def)(e, "switch", {
                            configurable: !0,
                            get: () => o,
                            set(e) {
                                o = e, e ? ((0, h.setStyle)(a, "display", "none"), (0, h.setStyle)(r, "display", null)) : ((0, h.setStyle)(a, "display", null), (0, h.setStyle)(r, "display", "none"))
                            }
                        });
                        break
                    }
                    case "range": {
                        let t = (0, h.createElement)("div");
                        (0, h.addClass)(t, "art-setting-item-right-icon");
                        let r = (0, h.append)(t, '<input type="range">');
                        r.value = e.range[0], r.min = e.range[1], r.max = e.range[2], r.step = e.range[3], (0, h.addClass)(r, "art-setting-range"), (0, h.append)(p, t), (0, h.def)(e, "$range", {
                            configurable: !0,
                            get: () => r
                        });
                        let a = [...e.range];
                        (0, h.def)(e, "range", {
                            configurable: !0,
                            get: () => a,
                            set(e) {
                                a = [...e], r.value = e[0], r.min = e[1], r.max = e[2], r.step = e[3]
                            }
                        })
                    }
                    break;
                    case "selector":
                        if (e.selector?.length) {
                            let e = (0, h.createElement)("div");
                            (0, h.addClass)(e, "art-setting-item-right-icon"), (0, h.append)(e, i.arrowRight), (0, h.append)(p, e)
                        }
                }
                switch (o) {
                    case "switch":
                        if (e.onSwitch) {
                            let t = n(l, "click", async t => {
                                e.switch = await e.onSwitch.call(this.art, e, l, t)
                            });
                            e.$events.push(t)
                        }
                        break;
                    case "range":
                        if (e.$range) {
                            if (e.onRange) {
                                let t = n(e.$range, "change", async t => {
                                    e.range[0] = e.$range.valueAsNumber, e.tooltip = await e.onRange.call(this.art, e, l, t)
                                });
                                e.$events.push(t)
                            }
                            if (e.onChange) {
                                let t = n(e.$range, "input", async t => {
                                    e.range[0] = e.$range.valueAsNumber, e.tooltip = await e.onChange.call(this.art, e, l, t)
                                });
                                e.$events.push(t)
                            }
                        }
                        break;
                    case "selector": {
                        let t = n(l, "click", async t => {
                            e.selector?.length ? this.render(e.selector) : (this.check(e), e.$parent.onSelect && (e.$parent.tooltip = await e.$parent.onSelect.call(this.art, e, l, t)))
                        });
                        e.$events.push(t), e.default && (0, h.addClass)(l, "art-current")
                    }
                }(0, h.def)(e, "$item", {
                    configurable: !0,
                    get: () => l
                }), t ? (0, h.replaceElement)(l, a) : (0, h.append)(r, l), e.mounted && setTimeout(() => e.mounted.call(this.art, e.$item, e), 0)
            }
            render(e = this.option) {
                if (this.active = e, this.cache.has(e)) {
                    let t = this.cache.get(e);
                    (0, h.inverseClass)(t, "art-current")
                } else {
                    let t = (0, h.createElement)("div");
                    this.cache.set(e, t), (0, h.addClass)(t, "art-setting-panel"), (0, h.append)(this.$parent, t), (0, h.inverseClass)(t, "art-current"), e[0]?.$parent && this.creatHeader(e[0]);
                    for (let t = 0; t < e.length; t++) this.creatItem(e[t])
                }
                this.resize()
            }
        }
        r.default = m
    }, {
        "./flip": "kONUB",
        "./aspectRatio": "84NBV",
        "./playbackRate": "aetWt",
        "./subtitleOffset": "fIBkO",
        "../utils/component": "18nVI",
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    kONUB: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                i18n: t,
                icons: r,
                constructor: {
                    SETTING_ITEM_WIDTH: a,
                    FLIP: i
                }
            } = e;

            function n(e) {
                return t.get((0, o.capitalize)(e))
            }

            function s() {
                let t = e.setting.find(`flip-${e.flip}`);
                e.setting.check(t)
            }
            return {
                width: a,
                name: "flip",
                html: t.get("Video Flip"),
                tooltip: n(e.flip),
                icon: r.flip,
                selector: i.map(t => ({
                    value: t,
                    name: `flip-${t}`,
                    default: t === e.flip,
                    html: n(t)
                })),
                onSelect: t => (e.flip = t.value, t.html),
                mounted: () => {
                    s(), e.on("flip", () => s())
                }
            }
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "84NBV": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function o(e) {
            let {
                i18n: t,
                icons: r,
                constructor: {
                    SETTING_ITEM_WIDTH: a,
                    ASPECT_RATIO: o
                }
            } = e;

            function i(e) {
                return "default" === e ? t.get("Default") : e
            }

            function n() {
                let t = e.setting.find(`aspect-ratio-${e.aspectRatio}`);
                e.setting.check(t)
            }
            return {
                width: a,
                name: "aspect-ratio",
                html: t.get("Aspect Ratio"),
                icon: r.aspectRatio,
                tooltip: i(e.aspectRatio),
                selector: o.map(t => ({
                    value: t,
                    name: `aspect-ratio-${t}`,
                    default: t === e.aspectRatio,
                    html: i(t)
                })),
                onSelect: t => (e.aspectRatio = t.value, t.html),
                mounted: () => {
                    n(), e.on("aspectRatio", () => n())
                }
            }
        }
        a.defineInteropFlag(r), a.export(r, "default", () => o)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    aetWt: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function o(e) {
            let {
                i18n: t,
                icons: r,
                constructor: {
                    SETTING_ITEM_WIDTH: a,
                    PLAYBACK_RATE: o
                }
            } = e;

            function i(e) {
                return 1 === e ? t.get("Normal") : e.toFixed(1)
            }

            function n() {
                let t = e.setting.find(`playback-rate-${e.playbackRate}`);
                e.setting.check(t)
            }
            return {
                width: a,
                name: "playback-rate",
                html: t.get("Play Speed"),
                tooltip: i(e.playbackRate),
                icon: r.playbackRate,
                selector: o.map(t => ({
                    value: t,
                    name: `playback-rate-${t}`,
                    default: t === e.playbackRate,
                    html: i(t)
                })),
                onSelect: t => (e.playbackRate = t.value, t.html),
                mounted: () => {
                    n(), e.on("video:ratechange", () => n())
                }
            }
        }
        a.defineInteropFlag(r), a.export(r, "default", () => o)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    fIBkO: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");

        function o(e) {
            let {
                i18n: t,
                icons: r,
                constructor: a
            } = e;
            return {
                width: a.SETTING_ITEM_WIDTH,
                name: "subtitle-offset",
                html: t.get("Subtitle Offset"),
                icon: r.subtitle,
                tooltip: "0s",
                range: [0, -35, 35, 1],
                onChange: t => (e.subtitleOffset = t.range[0], t.range[0] + "s"),
                mounted: (t, r) => {
                    e.on("subtitleOffset", e => {
                        r.$range.value = e, r.tooltip = e + "s"
                    })
                }
            }
        }
        a.defineInteropFlag(r), a.export(r, "default", () => o)
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "2aaJe": [function(e, t, r) {
        e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = class {
            constructor() {
                this.name = "artplayer_settings", this.settings = {}
            }
            get(e) {
                try {
                    let t = JSON.parse(window.localStorage.getItem(this.name)) || {};
                    return e ? t[e] : t
                } catch (t) {
                    return e ? this.settings[e] : this.settings
                }
            }
            set(e, t) {
                try {
                    let r = Object.assign({}, this.get(), {
                        [e]: t
                    });
                    window.localStorage.setItem(this.name, JSON.stringify(r))
                } catch (r) {
                    this.settings[e] = t
                }
            }
            del(e) {
                try {
                    let t = this.get();
                    delete t[e], window.localStorage.setItem(this.name, JSON.stringify(t))
                } catch (t) {
                    delete this.settings[e]
                }
            }
            clear() {
                try {
                    window.localStorage.removeItem(this.name)
                } catch (e) {
                    this.settings = {}
                }
            }
        }
    }, {
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "8MTUM": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = e("../utils"),
            i = e("./miniProgressBar"),
            n = a.interopDefault(i),
            s = e("./autoOrientation"),
            l = a.interopDefault(s),
            c = e("./autoPlayback"),
            p = a.interopDefault(c),
            u = e("./fastForward"),
            d = a.interopDefault(u),
            f = e("./lock"),
            h = a.interopDefault(f);
        r.default = class {
            constructor(e) {
                this.art = e, this.id = 0;
                let {
                    option: t
                } = e;
                t.miniProgressBar && !t.isLive && this.add(n.default), t.lock && o.isMobile && this.add(h.default), t.autoPlayback && !t.isLive && this.add(p.default), t.autoOrientation && o.isMobile && this.add(l.default), t.fastForward && o.isMobile && !t.isLive && this.add(d.default);
                for (let e = 0; e < t.plugins.length; e++) this.add(t.plugins[e])
            }
            add(e) {
                this.id += 1;
                let t = e.call(this.art, this.art);
                return t instanceof Promise ? t.then(t => this.next(e, t)) : this.next(e, t)
            }
            next(e, t) {
                let r = t && t.name || e.name || `plugin${this.id}`;
                return (0, o.errorHandle)(!(0, o.has)(this, r), `Cannot add a plugin that already has the same name: ${r}`), (0, o.def)(this, r, {
                    value: t
                }), this
            }
        }
    }, {
        "../utils": "71aH7",
        "./miniProgressBar": "87pSL",
        "./autoOrientation": "ePEg5",
        "./autoPlayback": "cVO99",
        "./fastForward": "hFDwt",
        "./lock": "1hsTH",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "87pSL": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            return e.on("control", t => {
                t ? (0, o.removeClass)(e.template.$player, "art-mini-progress-bar") : (0, o.addClass)(e.template.$player, "art-mini-progress-bar")
            }), {
                name: "mini-progress-bar"
            }
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    ePEg5: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                constructor: t,
                template: {
                    $player: r,
                    $video: a
                }
            } = e;
            return e.on("fullscreenWeb", i => {
                if (i) {
                    let {
                        videoWidth: i,
                        videoHeight: n
                    } = a, {
                        clientWidth: s,
                        clientHeight: l
                    } = document.documentElement;
                    (i > n && s < l || i < n && s > l) && setTimeout(() => {
                        (0, o.setStyle)(r, "width", `${l}px`), (0, o.setStyle)(r, "height", `${s}px`), (0, o.setStyle)(r, "transform-origin", "0 0"), (0, o.setStyle)(r, "transform", `rotate(90deg) translate(0, -${s}px)`), (0, o.addClass)(r, "art-auto-orientation"), e.isRotate = !0, e.emit("resize")
                    }, t.AUTO_ORIENTATION_TIME)
                } else(0, o.hasClass)(r, "art-auto-orientation") && ((0, o.removeClass)(r, "art-auto-orientation"), e.isRotate = !1, e.emit("resize"))
            }), e.on("fullscreen", async e => {
                if (!screen?.orientation?.lock) return;
                let t = screen.orientation.type;
                if (e) {
                    let {
                        videoWidth: e,
                        videoHeight: i
                    } = a, {
                        clientWidth: n,
                        clientHeight: s
                    } = document.documentElement;
                    if (e > i && n < s || e < i && n > s) {
                        let e = t.startsWith("portrait") ? "landscape" : "portrait";
                        await screen.orientation.lock(e), (0, o.addClass)(r, "art-auto-orientation-fullscreen")
                    }
                } else(0, o.hasClass)(r, "art-auto-orientation-fullscreen") && (await screen.orientation.lock(t), (0, o.removeClass)(r, "art-auto-orientation-fullscreen"))
            }), {
                name: "autoOrientation",
                get state() {
                    return (0, o.hasClass)(r, "art-auto-orientation")
                }
            }
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    cVO99: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                i18n: t,
                icons: r,
                storage: a,
                constructor: i,
                proxy: n,
                template: {
                    $poster: s
                }
            } = e, l = e.layers.add({
                name: "auto-playback",
                html: `<div class="art-auto-playback-close"></div><div class="art-auto-playback-last"></div><div class="art-auto-playback-jump"></div>`
            }), c = (0, o.query)(".art-auto-playback-last", l), p = (0, o.query)(".art-auto-playback-jump", l), u = (0, o.query)(".art-auto-playback-close", l);
            
            (0, o.append)(u, r.close);
            let d = null;
        
            function f() {
                let r = (a.get("times") || {})[e.option.id || e.option.url];
                clearTimeout(d);
                (0, o.setStyle)(l, "display", "none");
                
                if (r && r >= i.AUTO_PLAYBACK_MIN) {
                    (0, o.setStyle)(l, "display", "flex");
                    c.innerText = `${t.get("Last Seen")} ${(0,o.secondToTime)(r)}`;
                    p.innerText = t.get("Jump Play");
        
                    // Remove the manual click handler for "Jump Play"
                    // n(u, "click", () => {
                    //     (0, o.setStyle)(l, "display", "none")
                    // });
        
                    // Automatically trigger the "Jump Play" button click
                    setTimeout(() => {
                        e.seek = r;
                        e.play();
                        (0, o.setStyle)(s, "display", "none");
                        (0, o.setStyle)(l, "display", "none");
                    }, 0); // Trigger it immediately or with a slight delay if needed.
        
                    e.once("video:timeupdate", () => {
                        d = setTimeout(() => {
                            (0, o.setStyle)(l, "display", "none");
                        }, i.AUTO_PLAYBACK_TIMEOUT);
                    });
                }
            }
        
            return e.on("video:timeupdate", () => {
                if (e.playing) {
                    let t = a.get("times") || {},
                        r = Object.keys(t);
                    if (r.length > i.AUTO_PLAYBACK_MAX) delete t[r[0]];
                    t[e.option.id || e.option.url] = e.currentTime;
                    a.set("times", t);
                }
            }), e.on("ready", f), e.on("restart", f), {
                name: "auto-playback",
                get times() {
                    return a.get("times") || {};
                },
                clear: () => a.del("times"),
                delete(e) {
                    let t = a.get("times") || {};
                    delete t[e];
                    a.set("times", t);
                    return t;
                }
            };
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    hFDwt: [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                constructor: t,
                proxy: r,
                template: {
                    $player: a,
                    $video: i
                }
            } = e, n = null, s = !1, l = 1, c = () => {
                clearTimeout(n), s && (s = !1, e.playbackRate = l, (0, o.removeClass)(a, "art-fast-forward"))
            };
            return r(i, "touchstart", r => {
                1 === r.touches.length && e.playing && !e.isLock && (n = setTimeout(() => {
                    s = !0, l = e.playbackRate, e.playbackRate = t.FAST_FORWARD_VALUE, (0, o.addClass)(a, "art-fast-forward")
                }, t.FAST_FORWARD_TIME))
            }), r(document, "touchmove", c), r(document, "touchend", c), {
                name: "fastForward",
                get state() {
                    return (0, o.hasClass)(a, "art-fast-forward")
                }
            }
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }],
    "1hsTH": [function(e, t, r) {
        var a = e("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r), a.export(r, "default", () => i);
        var o = e("../utils");

        function i(e) {
            let {
                layers: t,
                icons: r,
                template: {
                    $player: a
                }
            } = e;

            function i() {
                return (0, o.hasClass)(a, "art-lock")
            }

            function n() {
                (0, o.addClass)(a, "art-lock"), e.isLock = !0, e.emit("lock", !0)
            }

            function s() {
                (0, o.removeClass)(a, "art-lock"), e.isLock = !1, e.emit("lock", !1)
            }
            return t.add({
                name: "lock",
                mounted(t) {
                    let a = (0, o.append)(t, r.lock),
                        i = (0, o.append)(t, r.unlock);
                    (0, o.setStyle)(a, "display", "none"), e.on("lock", e => {
                        e ? ((0, o.setStyle)(a, "display", "inline-flex"), (0, o.setStyle)(i, "display", "none")) : ((0, o.setStyle)(a, "display", "none"), (0, o.setStyle)(i, "display", "inline-flex"))
                    })
                },
                click() {
                    i() ? s() : n()
                }
            }), {
                name: "lock",
                get state() {
                    return i()
                },
                set state(value) {
                    value ? n() : s()
                }
            }
        }
    }, {
        "../utils": "71aH7",
        "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc"
    }]
}, ["5lTcX"], "5lTcX", "parcelRequire4dc0");
