(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{160:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=p(n),O=a,d=s["".concat(c,".").concat(O)]||s[O]||m[O]||o;return n?r.a.createElement(d,l(l({ref:t},i),{},{components:n})):r.a.createElement(d,l({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=O;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},50:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(160)),c={id:"_components_.virtuosohandle",title:"Interface: VirtuosoHandle",sidebar_label:"VirtuosoHandle"},l={unversionedId:"api/interfaces/_components_.virtuosohandle",id:"api/interfaces/_components_.virtuosohandle",isDocsHomePage:!1,title:"Interface: VirtuosoHandle",description:'"components".VirtuosoHandle',source:"@site/docs/api/interfaces/_components_.virtuosohandle.md",slug:"/api/interfaces/_components_.virtuosohandle",permalink:"/api/interfaces/_components_.virtuosohandle",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_components_.virtuosohandle.md",version:"current",sidebar_label:"VirtuosoHandle"},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"autoscrollToBottom",id:"autoscrolltobottom",children:[]},{value:"scrollBy",id:"scrollby",children:[]},{value:"scrollIntoView",id:"scrollintoview",children:[]},{value:"scrollTo",id:"scrollto",children:[]},{value:"scrollToIndex",id:"scrolltoindex",children:[]}]}],i={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/modules/_components_"}),'"components"'),".VirtuosoHandle"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"VirtuosoHandle"))),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"autoscrolltobottom"},"autoscrollToBottom"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"autoscrollToBottom"),"(): void"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f28d355/src/components.tsx#L589"}),"src/components.tsx:589"))),Object(o.b)("p",null,"Use this with combination with follow output if you have images loading in the list. Listen to the image loading and call the method."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," void"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"scrollby"},"scrollBy"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"scrollBy"),"(",Object(o.b)("inlineCode",{parentName:"p"},"location"),": ScrollToOptions): void"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f28d355/src/components.tsx#L585"}),"src/components.tsx:585"))),Object(o.b)("p",null,"Scrolls the component with the specified amount. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions"}),"ScrollToOptions (MDN)")),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"location")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ScrollToOptions")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," void"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"scrollintoview"},"scrollIntoView"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"scrollIntoView"),"(",Object(o.b)("inlineCode",{parentName:"p"},"location"),": ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.flatscrollintoviewlocation"}),"FlatScrollIntoViewLocation"),"): void"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f28d355/src/components.tsx#L577"}),"src/components.tsx:577"))),Object(o.b)("p",null,"Scrolls the item into view if necessary. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://virtuoso.dev/keyboard-navigation/"}),"the website example")," for an implementation."),Object(o.b)("h4",{id:"parameters-1"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"location")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/api/interfaces/_interfaces_.flatscrollintoviewlocation"}),"FlatScrollIntoViewLocation"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," void"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"scrollto"},"scrollTo"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"scrollTo"),"(",Object(o.b)("inlineCode",{parentName:"p"},"location"),": ScrollToOptions): void"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f28d355/src/components.tsx#L581"}),"src/components.tsx:581"))),Object(o.b)("p",null,"Scrolls the component to the specified location. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions"}),"ScrollToOptions (MDN)")),Object(o.b)("h4",{id:"parameters-2"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"location")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ScrollToOptions")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," void"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"scrolltoindex"},"scrollToIndex"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"scrollToIndex"),"(",Object(o.b)("inlineCode",{parentName:"p"},"location"),": number ","|"," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.flatindexlocationwithalign"}),"FlatIndexLocationWithAlign"),"): void"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f28d355/src/components.tsx#L573"}),"src/components.tsx:573"))),Object(o.b)("p",null,"Scrolls the component to the specified item index. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/modules/_interfaces_#indexlocationwithalign"}),"IndexLocationWithAlign")," for more options."),Object(o.b)("h4",{id:"parameters-3"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"location")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number ","|"," ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/api/interfaces/_interfaces_.flatindexlocationwithalign"}),"FlatIndexLocationWithAlign"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," void"))}p.isMDXComponent=!0}}]);