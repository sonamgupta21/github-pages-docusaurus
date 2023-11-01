"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6171:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2},i="Ingestion",s={unversionedId:"ingestion",id:"ingestion",title:"Ingestion",description:"Load Mock Data",source:"@site/docs/ingestion.md",sourceDirName:".",slug:"/ingestion",permalink:"/sigscalr-docs/ingestion",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/sigscalr-docs/"},next:{title:"Query",permalink:"/sigscalr-docs/query"}},l={},c=[{value:"Load Mock Data",id:"load-mock-data",level:2},{value:"Elasticsearch APIs",id:"elasticsearch-apis",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ingestion"},"Ingestion"),(0,r.kt)("h2",{id:"load-mock-data"},"Load Mock Data"),(0,r.kt)("p",null,"Quickly load mock data into SigScalr using the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -L https://github.com/sigscalr/ss-pub-data/releases/download/v1.0.0/prod-data-100mb.json.tar.gz -o prod-data-100mb.json.tar.gz \ntar -xjOf prod-data-100mb.json.tar.gz > prod-data-100mb.json  \ncurl http://localhost:8081/elastic/_bulk -i  --data-binary "@prod-data-100mb.json"\n')),(0,r.kt)("p",null,"For larger volumes of data, use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -L https://github.com/sigscalr/ss-pub-data/releases/download/v1.0.0/prod-data-1gb.json.tar.gz -o prod-data-1gb.json\ncurl -L https://github.com/sigscalr/ss-pub-data/releases/download/v1.0.0/prod-data-4gb.json.tar.gz -o prod-data-4gb.json\n")),(0,r.kt)("h2",{id:"elasticsearch-apis"},"Elasticsearch APIs"),(0,r.kt)("p",null,"SigScalr supports a subset of ES indexing apis to allow for compatability with existing pipelines. All ES apis have a prefix of ",(0,r.kt)("inlineCode",{parentName:"p"},"/elastic/")),(0,r.kt)("p",null,"Using the Elasticsearch Bulk API at ",(0,r.kt)("inlineCode",{parentName:"p"},"/elastic/_bulk")," is the recommended method to ingest data into SigScalr. ",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html"},"Bulk API Reference")),(0,r.kt)("p",null,"SigScalr follows the Elasticsearch API format for ingesting single documents. Note, this means that different APIs will be available depending on the configured value of ",(0,r.kt)("a",{parentName:"p",href:"/sigscalr-docs/"},(0,r.kt)("inlineCode",{parentName:"a"},"esVersion")),"."),(0,r.kt)("p",null,"For esVersion >= 7.x:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PUT /elastic/<indexName>/_doc/<_id>\nPOST /elastic/<indexName>/_doc/\nPUT /elastic/<indexName>/_create/<_id>\nPOST /elastic/<indexName>/_create/<_id>\n")),(0,r.kt)("p",null,"For esVersion < 7.x:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PUT /elastic/<indexName>/<docType>/<_id>\nPOST /elastic/<indexName>/<docType>/\nPUT /elastic/<indexName>/<docType>/<_id>/_create/\nPOST /elastic/<indexName>/<docType>/<_id>/_create/\n")))}d.isMDXComponent=!0}}]);