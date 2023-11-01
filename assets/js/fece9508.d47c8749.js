"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:4},o="Integrations",l={unversionedId:"integrations",id:"integrations",title:"Integrations",description:"Kubernetes",source:"@site/docs/integrations.md",sourceDirName:".",slug:"/integrations",permalink:"/sigscalr-docs/integrations",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Query",permalink:"/sigscalr-docs/query"},next:{title:"Data Management",permalink:"/sigscalr-docs/data-management"}},s={},c=[{value:"Kubernetes",id:"kubernetes",level:2},{value:"FluentD",id:"fluentd",level:2},{value:"Vector",id:"vector",level:2},{value:"Kibana",id:"kibana",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrations"},"Integrations"),(0,a.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,"Manage all Kubernetes logs and events using our easy to deploy ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sigscalr/helm-chart"},"public helm chart"),"."),(0,a.kt)("p",null,"This helm chart includes a fluentd daemonset to automatically ingest Kubernetes logs into the SigScalr instance."),(0,a.kt)("h2",{id:"fluentd"},"FluentD"),(0,a.kt)("p",null,"SigScalr implements the nessecary ES APIs for the FluentD Elasticsearch plugin. In order to use FluentD, make sure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," configuration is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"/elastic")),(0,a.kt)("p",null,"Example FlunetD configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<match sigscalr>\n  @type elasticsearch\n  host localhost\n  port 8081\n  path /elastic\n  <buffer>\n    flush_mode interval\n    flush_interval 10s\n    retry_forever true\n  </buffer>\n</match>\n\n")),(0,a.kt)("h2",{id:"vector"},"Vector"),(0,a.kt)("p",null,"Similar to FluentD, SigScalr is compatible with the Elastic plugin for vector. Make sure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"endpoint")," has the ",(0,a.kt)("inlineCode",{parentName:"p"},"/elasitc")," suffix."),(0,a.kt)("p",null,"An example sink configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[sinks.sigscalr]\ninputs = [ "parse_logs" ]\ntype = "elasticsearch"\nendpoint = "http://localhost:8081/elastic"\nmode = "bulk"\nbulk.index = "vector-test"\n')),(0,a.kt)("h2",{id:"kibana"},"Kibana"),(0,a.kt)("p",null,"SigScalr implements the nessecary ES APIs for Kibana Discovery. In order to start using SigScalr and Kibana Discovery, simply change the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"elasticsearch.hosts")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"kibana.yml")," to the address of SigScalr with the ",(0,a.kt)("inlineCode",{parentName:"p"},"/elastic")," path."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},'elasticsearch.hosts: ["http://0.0.0.0:8081/elastic"]')),(0,a.kt)("p",null,"!> Kibana Dashboards are not supported"))}u.isMDXComponent=!0}}]);