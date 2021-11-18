(() => {
  // node_modules/.pnpm/github.com+gc-victor+h@11a2d8ceea0a5e7d07e2dfabaa01e6619683255f/node_modules/h/dist/esm/index.js
  var i = typeof global != "undefined" && {}.toString.call(global) === "[object global]";
  i || (window.process = { env: { TEST: false } });
  var a = process.env.TEST ? false : i;
  var u = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var d = {};
  function m(o, n2 = {}, l = []) {
    let t2 = o === "svg" && !a ? document.createElementNS("http://www.w3.org/2000/svg", "svg") : document.createElement(o), c = Object.keys(n2 || {}), f = c.length, h2 = l.length;
    for (let s = 0; s < h2; s++) {
      let e2 = l[s];
      e2 && o === "svg" ? t2.innerHTML = `${t2.innerHTML}${e2.outerHTML}` : e2 && t2.appendChild(typeof e2 == "string" ? document.createTextNode(e2) : e2);
    }
    for (let s = 0; s < f; s++) {
      let e2 = c[s];
      if (e2 && /^on/.test(e2)) {
        let r2 = e2.toLowerCase().substring(2);
        t2.__handler__ = t2.__handler__ || {}, t2.__handler__[r2] = n2[e2], !d[r2] && document.addEventListener(r2, k), d[r2] = 1;
      }
      if (e2 && !/^key$/.test(e2) && !/^on/.test(e2) && !/^ref$/.test(e2)) {
        let r2 = e2 === "className" ? "class" : "", _ = e2 === "htmlFor" ? "for" : "", g = u.test(e2) && e2.replace(/[A-Z0-9]/, "-$&").toLowerCase();
        (e2 !== "checked" || e2 === "checked" && n2[e2]) && t2.setAttribute(_ || r2 || g || e2, n2[e2]);
      }
      e2 && /^key$/.test(e2) && (t2.__key__ = n2[e2]), e2 && /^ref$/.test(e2) && n2[e2](t2);
    }
    return t2;
  }
  var k = (o) => {
    let n2 = o.target, l = o.type;
    for (; n2 !== null; ) {
      let t2 = n2.__handler__ && n2.__handler__[l];
      if (t2) {
        t2(o);
        return;
      }
      n2 = n2.parentNode;
    }
  };
  var w = m;

  // src/h-shim.js
  var fragment = "__F__";
  function h(type, props, children) {
    if (typeof type === "function") {
      return type({ children: [].slice.call(arguments, 2), ...props || {} });
    }
    return type !== fragment ? w(type, props || {}, children) : [].slice.call(arguments, 2);
  }

  // node_modules/.pnpm/github.com+gc-victor+c-c@b8622aeb7b1f00e143310d105a92d3fadee44ace/node_modules/c-c/dist/c-c.esm.js
  var e;
  var n = { css: "", classesNames: {} };
  function t(t2) {
    return function t3(r2, s, c) {
      return s === void 0 && (s = ""), c === void 0 && (c = ""), Object.keys(r2).map(function(o) {
        var u3 = r2[o];
        if (u3 === null)
          return "";
        if (typeof u3 == "object") {
          var a2 = /^@m/.test(o);
          return t3(u3, a2 ? s : (s + o).replace(" ", ""), a2 ? o : c);
        }
        var d2 = o + u3 + s + (c || "");
        if (n.classesNames[d2])
          return n.classesNames[d2];
        var i2 = "c" + d2.split("").reduce(function(e2, n2) {
          return 101 * e2 + n2.charCodeAt(0) >>> 0;
        }, 11);
        return function(t4) {
          typeof document != "undefined" && (e || (e = document.createElement("style"), document.body.appendChild(e)), e.appendChild(document.createTextNode(t4))), typeof document == "undefined" && n.css.indexOf(t4) === -1 && (n.css = n.css + t4);
        }(function(e2, n2, t4, r3, s2) {
          var c2 = "." + e2 + r3 + "{" + n2.replace(/[A-Z]|^ms/g, "-$&").toLowerCase() + ":" + t4 + "}";
          return s2 ? s2 + "{" + c2 + "}" : c2;
        }(i2, o, u3, s, c)), n.classesNames[d2] = i2, i2;
      }).join(" ");
    }(t2);
  }

  // src/update-props.js
  var globalAttributes = [
    "accesskey",
    "autocapitalize",
    "autofocus",
    "contenteditable",
    "dir",
    "draggable",
    "enterkeyhint",
    "hidden",
    "id",
    "inputmode",
    "is",
    "itemid",
    "itemprop",
    "itemref",
    "itemscope",
    "itemtype",
    "lang",
    "nonce",
    "part",
    "role",
    "slot",
    "spellcheck",
    "tabindex",
    "title",
    "translate"
  ];
  function updateProps({ props = {}, attributes: attributes3 = [] }) {
    let i2 = 0;
    const attr = [...attributes3, ...globalAttributes];
    const { tag, ref, children, className: hasPropsClassName, style: hasStyle, ...rest } = props || {};
    const keys = Object.keys(rest);
    const length = keys.length;
    const acc = {};
    while (i2 < length) {
      const key = keys[i2];
      if (attr.includes(key) || /^on|^data-|^data[A-Z0-9]+|^aria-|^aria[A-Z0-9]+|^key$/.test(key)) {
        acc.attributes = acc.attributes || {};
        acc.attributes[keys[i2]] = rest[key];
      } else {
        acc.styles = acc.styles || {};
        acc.styles[key] = rest[key];
      }
      i2++;
    }
    const propsClassName = props.className;
    const styles = acc.styles;
    const className = hasStyle || hasPropsClassName || styles ? {
      className: t({
        ...hasStyle ? props.style : {},
        ...styles || {}
      }) + (propsClassName ? (hasStyle || styles ? " " : "") + propsClassName : "")
    } : {};
    return {
      ...acc.attributes || {},
      ...className,
      ...ref ? { ref } : {}
    };
  }

  // src/h-component.js
  function u2({ attributes: attributes3, children, tag, defaultProps = {}, ...rest }) {
    const props = rest || {};
    return h(props.tag || tag, updateProps({ attributes: attributes3, props: { ...defaultProps, ...props } }), children || props.children);
  }
  var U = u2;

  // examples/h/ui-jsx/box.js
  function Box(props) {
    return u2({ tag: "div", ...props });
  }

  // examples/h/ui-jsx/heading.js
  function Heading(props) {
    return u2({
      tag: "h1",
      defaultProps: {
        fontSize: "2rem",
        lineHeight: "2.5rem"
      },
      ...props
    });
  }

  // examples/h/ui-jsx/text.js
  function Text(props) {
    return u2({ tag: "span", ...props });
  }

  // examples/h/ui-jsx/flex.js
  function Flex(props) {
    return u2({
      tag: "div",
      defaultProps: { display: "flex" },
      ...props
    });
  }

  // examples/h/ui-jsx/button.jsx
  var attributes = [
    "disabled",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formnovalidate",
    "formtarget",
    "name",
    "type",
    "value"
  ];
  function Button(props) {
    return /* @__PURE__ */ h(U, {
      tag: "button",
      attributes,
      ...props
    });
  }

  // examples/h/ui-jsx/input.js
  var attributes2 = [
    "accept",
    "alt",
    "autocomplete",
    "checked",
    "dirname",
    "disabled",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formnovalidate",
    "formtarget",
    "list",
    "max",
    "maxlength",
    "min",
    "minlength",
    "multiple",
    "name",
    "pattern",
    "placeholder",
    "readonly",
    "required",
    "size",
    "src",
    "step",
    "type",
    "value"
  ];
  function Input(props) {
    return u2({
      tag: "input",
      attributes: attributes2,
      ...props
    });
  }

  // examples/h/app.jsx
  var count = 0;
  var input;
  var increment = () => {
    count = count + 1;
    input.value = count;
  };
  var decrement = () => {
    count = count - 1;
    input.value = count;
  };
  var add = (ev) => {
    count = Number(ev.target.value);
  };
  function CounterButton(props) {
    return /* @__PURE__ */ h(Button, {
      background: "#eee",
      border: "0",
      borderRadius: "4px",
      color: "black",
      padding: "8px 24px",
      style: {
        ":hover": {
          background: "black",
          color: "white"
        },
        ":focus": {
          background: "black",
          color: "white"
        }
      },
      ...props
    });
  }
  var Counter = () => /* @__PURE__ */ h(Box, {
    id: "app"
  }, /* @__PURE__ */ h(Heading, null, "Counter - H/JSX"), /* @__PURE__ */ h(Flex, null, /* @__PURE__ */ h(CounterButton, {
    onClick: increment
  }, /* @__PURE__ */ h(Text, null, "+")), /* @__PURE__ */ h(Input, {
    borderRadius: "4px",
    border: "1px solid black",
    margin: "0 4px",
    padding: "4px",
    ref: (el) => input = el,
    onInput: add,
    name: "input",
    type: "number",
    value: count
  }), /* @__PURE__ */ h(CounterButton, {
    onClick: decrement
  }, /* @__PURE__ */ h(Text, null, "-"))));
  var app = document.getElementById("app");
  app.parentNode.replaceChild(Counter(), app);
})();
