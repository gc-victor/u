(()=>{var _=Object.create;var x=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var Z=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var $=e=>x(e,"__esModule",{value:!0});var z=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(t,s)=>(typeof require!="undefined"?require:t)[s]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var E=(e,t,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of P(t))!w.call(e,n)&&n!=="default"&&x(e,n,{get:()=>t[n],enumerable:!(s=O(t,n))||s.enumerable});return e},F=e=>E($(x(e!=null?_(Z(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var k=F(z("h")),L="__F__";function N(e,t,s){return typeof e=="function"?e({children:[].slice.call(arguments,2),...t||{}}):e!==L?(0,k.default)(e,t||{},s):[].slice.call(arguments,2)}var g,u={css:"",classesNames:{}};function v(e){return function t(s,n,o){return n===void 0&&(n=""),o===void 0&&(o=""),Object.keys(s).map(function(r){var d=s[r];if(d===null)return"";if(typeof d=="object"){var y=/^@m/.test(r);return t(d,y?n:(n+r).replace(" ",""),y?r:o)}var i=r+d+n+(o||"");if(u.classesNames[i])return u.classesNames[i];var l="c"+i.split("").reduce(function(a,p){return 101*a+p.charCodeAt(0)>>>0},11);return function(a){typeof document!="undefined"&&(g||(g=document.createElement("style"),document.body.appendChild(g)),g.appendChild(document.createTextNode(a))),typeof document=="undefined"&&u.css.indexOf(a)===-1&&(u.css=u.css+a)}(function(a,p,c,h,m){var b="."+a+h+"{"+p.replace(/[A-Z]|^ms/g,"-$&").toLowerCase()+":"+c+"}";return m?m+"{"+b+"}":b}(l,r,d,n,o)),u.classesNames[i]=l,l}).join(" ")}(e)}function j(){return u.css}var S=["accesskey","autocapitalize","autofocus","contenteditable","dir","draggable","enterkeyhint","hidden","id","inputmode","is","itemid","itemprop","itemref","itemscope","itemtype","lang","nonce","part","role","slot","spellcheck","tabindex","title","translate"];function C({props:e={},attributes:t=[]}){let s=0,n=[...t,...S],{tag:o,ref:r,children:d,className:y,style:i,...l}=e||{},a=Object.keys(l),p=a.length,c={};for(;s<p;){let f=a[s];n.includes(f)||/^on|^data-|^data[A-Z0-9]+|^aria-|^aria[A-Z0-9]+|^key$/.test(f)?(c.attributes=c.attributes||{},c.attributes[a[s]]=l[f]):(c.styles=c.styles||{},c.styles[f]=l[f]),s++}let h=e.className,m=c.styles,b=i||y||m?{className:v({...i?e.style:{},...m||{}})+(h?(i||m?" ":"")+h:"")}:{};return{...c.attributes||{},...b,...r?{ref:r}:{}}}function A({attributes:e,children:t,tag:s,defaultProps:n={},...o}){let r=o||{};return N(r.tag||s,C({attributes:e,props:{...n,...r}}),t||r.children)}var I=A;})();