var T=Object.create;var g=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var O=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,Z=Object.prototype.hasOwnProperty;var x=e=>g(e,"__esModule",{value:!0});var B=(e,t)=>{x(e);for(var s in t)g(e,s,{get:t[s],enumerable:!0})},I=(e,t,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let c of O(t))!Z.call(e,c)&&c!=="default"&&g(e,c,{get:()=>t[c],enumerable:!(s=S(t,c))||s.enumerable});return e},$=e=>I(x(g(e!=null?T(P(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);B(exports,{U:()=>L,default:()=>v,styles:()=>N});var k=$(require("react"));var p,u={css:"",classesNames:{}},j=typeof global!="undefined"&&{}.toString.call(global)==="[object global]",w=!process.env.TEST&&j;function A(e){return C(e)}function N(){return u.css}function C(e,t,s){return t===void 0&&(t=""),s===void 0&&(s=""),Object.keys(e).map(function(c){var r=e[c];if(r===null)return"";if(typeof r=="object"){var n=/^@m/.test(c);return C(r,n?t:(t+c).replace(" ",""),n?c:s)}var o=c+r+t+(s||"");if(u.classesNames[o])return u.classesNames[o];var m,l="c"+o.split("").reduce(function(i,d){return 101*i+d.charCodeAt(0)>>>0},11);return m=function(i,d,h,a,y){var f="."+i+a+"{"+d.replace(/[A-Z]|^ms/g,"-$&").toLowerCase()+":"+h+"}";return y?y+"{"+f+"}":f}(l,c,r,t,s),w||(p||document.getElementById("c-c")?p||(p=document.getElementById("c-c")):((p=document.createElement("style")).setAttribute("id","c-c"),document.body.appendChild(p)),p.appendChild(document.createTextNode(m))),w&&u.css.indexOf(m)===-1&&(u.css=u.css+m),u.classesNames[o]=l,l}).join(" ")}j||(window.process={env:{TEST:!1}});var z=["accesskey","autocapitalize","autofocus","contenteditable","dir","draggable","enterkeyhint","hidden","id","inputmode","is","itemid","itemprop","itemref","itemscope","itemtype","lang","nonce","part","role","slot","spellcheck","tabindex","title","translate"];function E({props:e={},attributes:t=[]}){let s=0,c=[...t,...z],{tag:r,ref:n,children:o,className:m,style:l,...i}=e||{},d=Object.keys(i),h=d.length,a={};for(;s<h;){let b=d[s];c.includes(b)||/^on|^data-|^data[A-Z0-9]+|^aria-|^aria[A-Z0-9]+|^key$/.test(b)?(a.attributes=a.attributes||{},a.attributes[d[s]]=i[b]):(a.styles=a.styles||{},a.styles[b]=i[b]),s++}let y=e.className,f=a.styles,R=l||m||f?{className:A({...l?e.style:{},...f||{}})+(y?(l||f?" ":"")+y:"")}:{};return{...a.attributes||{},...R,...n?{ref:n}:{}}}function v({attributes:e,children:t,tag:s,defaultProps:c={},props:r={}}){let n=r.forwardedRef,o=r.forwardedRef?{ref:n}:{};return k.createElement(r.tag||s,E({attributes:e,props:{...c,...r,...o}}),t||r.children)}var L=v;
