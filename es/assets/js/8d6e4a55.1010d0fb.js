"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),h=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=h(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=h(n),m=a,u=l["".concat(c,".").concat(m)]||l[m]||p[m]||o;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var h=2;h<o;h++)i[h]=n[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},5561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var r=n(7462),a=(n(7294),n(3905));const o={custom_edit_url:null,sidebar_position:4,description:"Brewfather (https://brewfather.app/) is a software cloud solution for brewing beer. It allows the creation, synchronisation and exchange of recipes. The Hydrom helps to track the fermentation process",cover:"https://i.ytimg.com/vi/1Sjh_-V1Tg8/maxresdefault.jpg",coverY:0},i="Connect the Hydrom to Brewfather",s={unversionedId:"connect-services/connect_to_brewfather",id:"connect-services/connect_to_brewfather",title:"Connect the Hydrom to Brewfather",description:"Brewfather (https://brewfather.app/) is a software cloud solution for brewing beer. It allows the creation, synchronisation and exchange of recipes. The Hydrom helps to track the fermentation process",source:"@site/docs/connect-services/connect_to_brewfather.md",sourceDirName:"connect-services",slug:"/connect-services/connect_to_brewfather",permalink:"/es/docs/connect-services/connect_to_brewfather",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:4,frontMatter:{custom_edit_url:null,sidebar_position:4,description:"Brewfather (https://brewfather.app/) is a software cloud solution for brewing beer. It allows the creation, synchronisation and exchange of recipes. The Hydrom helps to track the fermentation process",cover:"https://i.ytimg.com/vi/1Sjh_-V1Tg8/maxresdefault.jpg",coverY:0},sidebar:"tutorialSidebar",previous:{title:"Connect the Hydrom to Brewblox",permalink:"/es/docs/connect-services/connect_to_brewblox"},next:{title:"Connect the Hydrom to Grainfather",permalink:"/es/docs/connect-services/connect_to_Grainfather"}},c={},h=[{value:"Add the hydrom to the Brewfather",id:"add-the-hydrom-to-the-brewfather",level:2},{value:"Activate &quot;Custom Stream&quot;",id:"activate-custom-stream",level:3},{value:"Copy BrewFather ID",id:"copy-brewfather-id",level:3},{value:"Insert BrewFather settings in Hydrom",id:"insert-brewfather-settings-in-hydrom",level:2},{value:"Step 1: Open the Menue",id:"step-1-open-the-menue",level:2},{value:"Step 2: Select &quot;Service&quot;",id:"step-2-select-service",level:2},{value:"Step 3: Activate Brewfather and change the settings",id:"step-3-activate-brewfather-and-change-the-settings",level:3},{value:"additional settings",id:"additional-settings",level:3}],d={toc:h};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connect-the-hydrom-to-brewfather"},"Connect the Hydrom to Brewfather"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Prerequisite:")),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Access to user interface"),(0,a.kt)("br",{parentName:"li"}),"To make this setting, you must have access to the user interface. If this is not the case, see here how to do it:",(0,a.kt)("a",{parentName:"li",href:"../docs/Getting%20Started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.mdx",title:"mention"},"access-to-the-user-interface.md")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Brewfather user account available"),(0,a.kt)("br",{parentName:"li"}),"An account has been created with the cloud provider Brewfather."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Brewfather App was downloaded"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("a",{parentName:"li",href:"https://brewfather.app/"},"https://brewfather.app/")))),(0,a.kt)("h2",{id:"add-the-hydrom-to-the-brewfather"},"Add the hydrom to the Brewfather"),(0,a.kt)("h3",{id:"activate-custom-stream"},'Activate "Custom Stream"'),(0,a.kt)("p",null,'Open the Brewfather app and navigate to the settings. There you activate the device "Custom Stream".'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5523).Z,width:"2128",height:"631"})," ",(0,a.kt)("img",{src:n(7468).Z,width:"2128",height:"631"})),(0,a.kt)("h3",{id:"copy-brewfather-id"},"Copy BrewFather ID"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The marked parameter must be copied into the hydrom.",src:n(3932).Z,width:"2128",height:"631"})),(0,a.kt)("h2",{id:"insert-brewfather-settings-in-hydrom"},"Insert BrewFather settings in Hydrom"),(0,a.kt)("p",null,"Now open the user interface of the Hydrom, in the best case the Hydrom is already in the network and can be easily accessed via http//hydrom001/."),(0,a.kt)("p",null,"Otherwise the Hydrom must still be started."),(0,a.kt)("h2",{id:"step-1-open-the-menue"},"Step 1: Open the Menue"),(0,a.kt)("p",null,"To access the menu bar you have to click on the three lines in the upper left corner. (See arrow)\\\nThen the menu bar will open."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Open Navigation",src:n(4326).Z,width:"2128",height:"631"})),(0,a.kt)("h2",{id:"step-2-select-service"},'Step 2: Select "Service"'),(0,a.kt)("h3",{id:"step-3-activate-brewfather-and-change-the-settings"},"Step 3: Activate Brewfather and change the settings"),(0,a.kt)("p",null,'On the "Service" page, the Brewfather service must be activated.'),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"It is important that you check if there is another URL in your hydrom. In the firmware up to 1.2.9 the wrong link ","[","/hydrom?id=xxxxxxxxxx] was used. Please replace the link with the link from the Brewfather UI ","[","/stream?id=XXXXXXX] as shown in the picture below.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The settings that are entered here are saved in the Hydrom",src:n(3594).Z,width:"2128",height:"631"})),(0,a.kt)("h3",{id:"additional-settings"},"additional settings"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In order not to consume too much power, we would turn Bluetooth off when it is not needed. It was documented here:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"/es/docs/add-bluetooth"},"add-bluetooth.md"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("h3",{parentName:"admonition",id:"activate-deepsleep"},"activate DeepSleep"),(0,a.kt)("p",{parentName:"admonition"},"Activating DeepSleep is mandatory for the hydrom to be able to send data. If DeepSleep is activated, the hydrom wakes up after the set time and sends the data to the set service. Afterwards, the hydrom goes back to sleep and waits for the new service.\n",(0,a.kt)("a",{parentName:"p",href:"/es/docs/other-settings/enable-deepsleep"},"enable-deepsleep.md"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("h3",{parentName:"admonition",id:"save-settings"},"Save Settings"),(0,a.kt)("p",{parentName:"admonition"},"Saving the data is important because it is the only way to connect to the service after waking up from DeepSleep."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{alt:"Pressing the &quot;save&quot; button saves the settings.",src:n(311).Z,width:"2128",height:"631"})),(0,a.kt)("p",{parentName:"admonition"},"You can check whether the saving was successful by looking at the settings file at http://hydrom001/settings.json/. to check if the save was successful. This file is the permanent memory of the Hydrom."),(0,a.kt)("p",{parentName:"admonition"},"A second way to check the saving is to reload the page (all modern browsers offer this Feature). If the properties are then reloaded, the hydrom has accepted them, otherwise the old settings are reloaded.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("h3",{parentName:"admonition",id:"send-test-message"},"Send Test-message"),(0,a.kt)("p",{parentName:"admonition"},'By activating this button, you can check whether the Hydrom has a connection to the service and to the individual parts of the service. If you now click on "Save", the set services are executed once and the page is reloaded. On the new page you can see whether the servers are accessible and the ports are open.'),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{alt:"Sending a test message can greatly simplify the process of checking the connection.",src:n(9716).Z,width:"2128",height:"631"}))))}p.isMDXComponent=!0},3594:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic1-a52598c323976ba70d91d1ca3389db0e.png"},5523:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic2-a434b15faed891058e0c998ab806924a.png"},7468:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic3-728321e18cec65e867e2267f6b03c209.png"},3932:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic4-a88d8bcb5a67c9f50e716384a3e9194f.png"},4326:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic5-227ff996e06a8f296d51485ea7a65871.png"},311:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic6-7fdd6ec46a6a88c918e66955610d3eb9.png"},9716:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic7-657c50ab3d0b7e79254cd5003cdd191b.png"}}]);