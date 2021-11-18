(() => {
  // examples/imports/node_modules/.pnpm/github.com+gc-victor+h@11a2d8ceea0a5e7d07e2dfabaa01e6619683255f/node_modules/h/dist/esm/index.js
  var i = typeof global != "undefined" && {}.toString.call(global) === "[object global]";
  i || (window.process = { env: { TEST: false } });
  var a = process.env.TEST ? false : i;
  var u = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var d = {};
  function m(o, n = {}, l2 = []) {
    let t = o === "svg" && !a ? document.createElementNS("http://www.w3.org/2000/svg", "svg") : document.createElement(o), c2 = Object.keys(n || {}), f = c2.length, h = l2.length;
    for (let s = 0; s < h; s++) {
      let e = l2[s];
      e && o === "svg" ? t.innerHTML = `${t.innerHTML}${e.outerHTML}` : e && t.appendChild(typeof e == "string" ? document.createTextNode(e) : e);
    }
    for (let s = 0; s < f; s++) {
      let e = c2[s];
      if (e && /^on/.test(e)) {
        let r = e.toLowerCase().substring(2);
        t.__handler__ = t.__handler__ || {}, t.__handler__[r] = n[e], !d[r] && document.addEventListener(r, k), d[r] = 1;
      }
      if (e && !/^key$/.test(e) && !/^on/.test(e) && !/^ref$/.test(e)) {
        let r = e === "className" ? "class" : "", _2 = e === "htmlFor" ? "for" : "", g2 = u.test(e) && e.replace(/[A-Z0-9]/, "-$&").toLowerCase();
        (e !== "checked" || e === "checked" && n[e]) && t.setAttribute(_2 || r || g2 || e, n[e]);
      }
      e && /^key$/.test(e) && (t.__key__ = n[e]), e && /^ref$/.test(e) && n[e](t);
    }
    return t;
  }
  var k = (o) => {
    let n = o.target, l2 = o.type;
    for (; n !== null; ) {
      let t = n.__handler__ && n.__handler__[l2];
      if (t) {
        t(o);
        return;
      }
      n = n.parentNode;
    }
  };
  var w = m;

  // examples/imports/node_modules/.pnpm/github.com+gc-victor+u@7b861df9566eff64e899de26e3c11e93392fe294/node_modules/u/h/shim.js
  var c = "__F__";
  function l(n, r, t) {
    return typeof n == "function" ? n({ children: [].slice.call(arguments, 2), ...r || {} }) : n !== c ? w(n, r || {}, t) : [].slice.call(arguments, 2);
  }

  // examples/imports/node_modules/.pnpm/github.com+gc-victor+u@7b861df9566eff64e899de26e3c11e93392fe294/node_modules/u/h/index.js
  var j = "__F__";
  function N(e, c2, s) {
    return typeof e == "function" ? e({ children: [].slice.call(arguments, 2), ...c2 || {} }) : e !== j ? w(e, c2 || {}, s) : [].slice.call(arguments, 2);
  }
  var g;
  var m2 = { css: "", classesNames: {} };
  function v(e) {
    return function c2(s, t, o) {
      return t === void 0 && (t = ""), o === void 0 && (o = ""), Object.keys(s).map(function(a2) {
        var u2 = s[a2];
        if (u2 === null)
          return "";
        if (typeof u2 == "object") {
          var h = /^@m/.test(a2);
          return c2(u2, h ? t : (t + a2).replace(" ", ""), h ? a2 : o);
        }
        var i2 = a2 + u2 + t + (o || "");
        if (m2.classesNames[i2])
          return m2.classesNames[i2];
        var l2 = "c" + i2.split("").reduce(function(n, f) {
          return 101 * n + f.charCodeAt(0) >>> 0;
        }, 11);
        return function(n) {
          typeof document != "undefined" && (g || (g = document.createElement("style"), document.body.appendChild(g)), g.appendChild(document.createTextNode(n))), typeof document == "undefined" && m2.css.indexOf(n) === -1 && (m2.css = m2.css + n);
        }(function(n, f, r, y, d2) {
          var b = "." + n + y + "{" + f.replace(/[A-Z]|^ms/g, "-$&").toLowerCase() + ":" + r + "}";
          return d2 ? d2 + "{" + b + "}" : b;
        }(l2, a2, u2, t, o)), m2.classesNames[i2] = l2, l2;
      }).join(" ");
    }(e);
  }
  var C = ["accesskey", "autocapitalize", "autofocus", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "part", "role", "slot", "spellcheck", "tabindex", "title", "translate"];
  function x({ props: e = {}, attributes: c2 = [] }) {
    let s = 0, t = [...c2, ...C], { tag: o, ref: a2, children: u2, className: h, style: i2, ...l2 } = e || {}, n = Object.keys(l2), f = n.length, r = {};
    for (; s < f; ) {
      let p = n[s];
      t.includes(p) || /^on|^data-|^aria-/.test(p) ? (r.attributes = r.attributes || {}, r.attributes[n[s]] = l2[p]) : (r.styles = r.styles || {}, r.styles[p] = l2[p]), s++;
    }
    let y = e.className, d2 = r.styles, b = i2 || h || d2 ? { className: v({ ...i2 ? e.style : {}, ...d2 || {} }) + (y ? (i2 || d2 ? " " : "") + y : "") } : {};
    return { ...r.attributes || {}, ...b, ...a2 ? { ref: a2 } : {} };
  }
  function _({ attributes: e, children: c2, tag: s, props: t = {}, defaultProps: o = {} }) {
    return N(t.tag || s, x({ attributes: e, props: { ...o, ...t } }), c2 || t.children);
  }

  // examples/imports/h/app.jsx
  function Box(props) {
    return _({ tag: "div", props });
  }
  function App() {
    return /* @__PURE__ */ l(Box, {
      id: "app",
      background: "black",
      padding: "16px",
      color: "white"
    }, "Box - H");
  }
  var app = document.getElementById("app");
  app.parentNode.replaceChild(App(), app);
})();
