(function (modules, entry, mainEntry, parcelRequireName, globalName) {
    /* eslint-disable no-undef */
    var globalObject =
      typeof globalThis !== 'undefined'
        ? globalThis
        : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
        ? window
        : typeof global !== 'undefined'
        ? global
        : {};
    /* eslint-enable no-undef */
  
    var previousRequire =
      typeof globalObject[parcelRequireName] === 'function' &&
      globalObject[parcelRequireName];
  
    var cache = previousRequire.cache || {};
    var nodeRequire =
      typeof module !== 'undefined' &&
      typeof module.require === 'function' &&
      module.require.bind(module);
  
    function newRequire(name, jumped) {
      if (!cache[name]) {
        if (!modules[name]) {
          var currentRequire =
            typeof globalObject[parcelRequireName] === 'function' &&
            globalObject[parcelRequireName];
          if (!jumped && currentRequire) {
            return currentRequire(name, true);
          }
  
          if (previousRequire) {
            return previousRequire(name, true);
          }
  
          if (nodeRequire && typeof name === 'string') {
            return nodeRequire(name);
          }
  
          var err = new Error("Cannot find module '" + name + "'");
          err.code = 'MODULE_NOT_FOUND';
          throw err;
        }
  
        localRequire.resolve = resolve;
        localRequire.cache = {};
  
        var module = (cache[name] = new newRequire.Module(name));
  
        modules[name][0].call(
          module.exports,
          localRequire,
          module,
          module.exports,
          this
        );
      }
  
      return cache[name].exports;
  
      function localRequire(x) {
        var res = localRequire.resolve(x);
        return res === false ? {} : newRequire(res);
      }
  
      function resolve(x) {
        var id = modules[name][1][x];
        return id != null ? id : x;
      }
    }
  
    function Module(moduleName) {
      this.id = moduleName;
      this.bundle = newRequire;
      this.exports = {};
    }
  
    newRequire.isParcelRequire = true;
    newRequire.Module = Module;
    newRequire.modules = modules;
    newRequire.cache = cache;
    newRequire.parent = previousRequire;
    newRequire.register = function (id, exports) {
      modules[id] = [
        function (require, module) {
          module.exports = exports;
        },
        {},
      ];
    };
  
    Object.defineProperty(newRequire, 'root', {
      get: function () {
        return globalObject[parcelRequireName];
      },
    });
  
    globalObject[parcelRequireName] = newRequire;
  
    for (var i = 0; i < entry.length; i++) {
      newRequire(entry[i]);
    }
  
    if (mainEntry) {
      var mainExports = newRequire(mainEntry);
  
      if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = mainExports;
  
      } else if (typeof define === 'function' && define.amd) {
        define(function () {
          return mainExports;
        });
  
      } else if (globalName) {
        this[globalName] = mainExports;
      }
    }
  })({"hMiLQ":[function(require,module,exports) {
  var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
  parcelHelpers.defineInteropFlag(exports);

  // Define the new SVG icon directly as a string
  var newSvgIcon = `
  <svg fill="#000000" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <defs><style>.cls-1{fill:none;}</style></defs>
      <title>HD</title>
      <path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM4,24V8H28V24Z"></path>
      <path d="M22,11H18V21h4a3,3,0,0,0,3-3V14A3,3,0,0,0,22,11Zm1,7a1,1,0,0,1-1,1H20V13h2a1,1,0,0,1,1,1Z"></path>
      <polygon points="13 11 13 15 10 15 10 11 8 11 8 21 10 21 10 17 13 17 13 21 15 21 15 11 13 11"></polygon>
      <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" class="cls-1" width="32" height="32"></rect>
    </g>
  </svg>`;

  function artplayerPluginHlsQuality(option) {
      return (art)=>{
          const { $video  } = art.template;
          const { errorHandle  } = art.constructor.utils;
          function update() {
              const hls = art.hls || window.hls;
              errorHandle(hls && hls.media === $video, 'Cannot find instance of HLS from "art.hls" or "window.hls"');
              const auto = option.auto || "Auto";
              const title = option.title || "Quality";
              const getResolution = option.getResolution || ((level)=>(level.height || "Unknown ") + "P");
              const defaultLevel = hls.levels[hls.currentLevel];
              const defaultHtml = defaultLevel ? getResolution(defaultLevel) : auto;
              if (option.control) art.controls.update({
                  name: "hls-quality",
                  position: "right",
                  html: defaultHtml,
                  style: {
                      padding: "0 10px"
                  },
                  selector: hls.levels.map((item, index)=>{
                      return {
                          html: getResolution(item),
                          level: item.level || index,
                          default: defaultLevel === item
                      };
                  }),
                  onSelect (item) {
                      hls.currentLevel = item.level;
                      art.loading.show = true;
                      return item.html;
                  }
              });
              if (option.setting) art.setting.update({
                  name: "hls-quality",
                  tooltip: defaultHtml,
                  html: title,
                  icon: newSvgIcon, // Use the new SVG icon string here
                  width: 200,
                  selector: hls.levels.map((item, index)=>{
                      return {
                          html: getResolution(item),
                          level: item.level || index,
                          default: defaultLevel === item
                      };
                  }),
                  onSelect: function(item) {
                      hls.currentLevel = item.level;
                      art.loading.show = true;
                      return item.html;
                  }
              });
          }
          art.on("ready", update);
          art.on("restart", update);
          return {
              name: "artplayerPluginHlsQuality"
          };
      };
  }
  exports.default = artplayerPluginHlsQuality;
  artplayerPluginHlsQuality.env = "development";
  artplayerPluginHlsQuality.version = "1.0.2";
  artplayerPluginHlsQuality.build = "2023-04-23 09:44:07";
  if (typeof window !== "undefined") window["artplayerPluginHlsQuality"] = artplayerPluginHlsQuality;
  
  },{"@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"5dUr6":[function(require,module,exports) {
  exports.interopDefault = function(a) {
      return a && a.__esModule ? a : {
          default: a
      };
  };
  exports.defineInteropFlag = function(a) {
      Object.defineProperty(a, "__esModule", {
          value: true
      });
  };
  exports.exportAll = function(source, dest) {
      Object.keys(source).forEach(function(key) {
          if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
          Object.defineProperty(dest, key, {
              enumerable: true,
              get: function() {
                  return source[key];
              }
          });
      });
      return dest;
  };
  exports.export = function(dest, destName, get) {
      Object.defineProperty(dest, destName, {
          enumerable: true,
          get: get
      });
  };
  
  },{}]},["hMiLQ"], "hMiLQ", "parcelRequire4dc0")
