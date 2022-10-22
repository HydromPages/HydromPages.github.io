"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,p=u["".concat(c,".").concat(m)]||u[m]||h[m]||a;return n?r.createElement(p,i(i({ref:t},l),{},{components:n})):r.createElement(p,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={custom_edit_url:null,sidebar_position:2,description:"This mode allows access to the user interface of the Hydrom. There, the Hydrom can be personalized, the interfaces can be set and the current measured values can be viewed."},i="Start in Configuration-Mode",s={unversionedId:"Getting Started/establish-first-connection-to-the-hydrom/wakeup-the-hydrom",id:"Getting Started/establish-first-connection-to-the-hydrom/wakeup-the-hydrom",title:"Start in Configuration-Mode",description:"This mode allows access to the user interface of the Hydrom. There, the Hydrom can be personalized, the interfaces can be set and the current measured values can be viewed.",source:"@site/docs/Getting Started/establish-first-connection-to-the-hydrom/wakeup-the-hydrom.md",sourceDirName:"Getting Started/establish-first-connection-to-the-hydrom",slug:"/Getting Started/establish-first-connection-to-the-hydrom/wakeup-the-hydrom",permalink:"/nl/docs/Getting Started/establish-first-connection-to-the-hydrom/wakeup-the-hydrom",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,sidebar_position:2,description:"This mode allows access to the user interface of the Hydrom. There, the Hydrom can be personalized, the interfaces can be set and the current measured values can be viewed."},sidebar:"tutorialSidebar",previous:{title:"Turn on the Hydrom",permalink:"/nl/docs/Getting Started/establish-first-connection-to-the-hydrom/turn-on-the-hydrom"},next:{title:"Access to the user interface",permalink:"/nl/docs/Getting Started/establish-first-connection-to-the-hydrom/access-to-the-user-interface"}},c={},d=[],l={toc:d};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"start-in-configuration-mode"},"Start in Configuration-Mode"),(0,o.kt)("p",null,"If the Hydrom is in DeepSleep, the user interface is not accessible."," "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Precondition:")),(0,o.kt)("p",{parentName:"admonition"},"The Hydrom must be switched on (",(0,o.kt)("a",{parentName:"p",href:"../../getting-started/establish-first-connection-to-the-hydrom/turn-on-the-hydrom.md",title:"mention"},"turn-on-the-hydrom.md"),"). \\\nIt is recommended that the Hydrom is fully charged and/or set to configuration mode when charging. \\\nThis will save battery life.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To access configuration mode unscrewed the Lid and briefly press the Reset button once."),(0,o.kt)("li",{parentName:"ol"},"The Hydrom will now start in configuration mode. \\\nThis can be easily recognized by the fact that the status LEDs (green and red) flas constantly for 2 sec. and  then switch between green and red and end in green.\\\nSequence:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Green and red constantly for 2 sec."),(0,o.kt)("li",{parentName:"ol"},"switch between green and red for 4 sec.\\\nThe Hydrom now loads all settings and starts up the individual modules."),(0,o.kt)("li",{parentName:"ol"},"constant green glowing LED\\\nThe Hydrom has now built a web interface.\\")))))}h.isMDXComponent=!0}}]);