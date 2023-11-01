"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[854],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:3},o="Query",l={unversionedId:"query",id:"query",title:"Query",description:"Pipe based query language",source:"@site/docs/query.md",sourceDirName:".",slug:"/query",permalink:"/sigscalr-docs/query",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Ingestion",permalink:"/sigscalr-docs/ingestion"},next:{title:"Integrations",permalink:"/sigscalr-docs/integrations"}},p={},s=[{value:"Pipe based query language",id:"pipe-based-query-language",level:2},{value:"Elasticsearch DSL",id:"elasticsearch-dsl",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"query"},"Query"),(0,a.kt)("h2",{id:"pipe-based-query-language"},"Pipe based query language"),(0,a.kt)("p",null,"The SigScalr UI uses a query language designed to be readable and easy to use for filtering log data."),(0,a.kt)("p",null,"To free text search type in the string. For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"iOS"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Android"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ERROR"),". "),(0,a.kt)("p",null,"To query special characters or multiple words, add quotes. For example: ",(0,a.kt)("inlineCode",{parentName:"p"},'"Error=3"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"(Example)"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"Find this phrase"')),(0,a.kt)("p",null,"To query column values, Use ",(0,a.kt)("inlineCode",{parentName:"p"},"key op value"),". Where the ",(0,a.kt)("inlineCode",{parentName:"p"},"op")," can be ",(0,a.kt)("inlineCode",{parentName:"p"},"=,>,>=,<,<=,!="),". For example ",(0,a.kt)("inlineCode",{parentName:"p"},"aws_region=us-east1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},'msg_text!="abc def"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},"latency >= 50.4")),(0,a.kt)("p",null,"Use wildcards ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," to search for substrings. For example ",(0,a.kt)("inlineCode",{parentName:"p"},"batch=batch-77*"),", ",(0,a.kt)("inlineCode",{parentName:"p"},'log = "Error-* Failure to"')),(0,a.kt)("p",null,"Combine queries using nested parentheses with ",(0,a.kt)("inlineCode",{parentName:"p"},"AND/OR")," operators. For example ",(0,a.kt)("inlineCode",{parentName:"p"},"(iOS OR macOS) AND ( aws_region=us-east1 AND (col1 >= 50.4 OR col3 <= 10))")),(0,a.kt)("p",null,"!> Note that queries are case sensitive"),(0,a.kt)("h2",{id:"elasticsearch-dsl"},"Elasticsearch DSL"),(0,a.kt)("p",null,"SigScalr supports a subset of ES DSL to allow for compatability with existing pipelines. All endpoints for querying with Elasticsearch are prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"/elastic/"),"."))}u.isMDXComponent=!0}}]);