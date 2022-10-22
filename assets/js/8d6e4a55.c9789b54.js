"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1897],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),h=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=h(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=h(r),m=a,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(u,s(s({ref:t},l),{},{components:r})):n.createElement(u,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var h=2;h<o;h++)s[h]=r[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5561:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var n=r(7462),a=(r(7294),r(3905));const o={custom_edit_url:null,sidebar_position:4,description:"Brewfather (https://brewfather.app/) is a software cloud solution for brewing beer. It allows the creation, synchronisation and exchange of recipes. The Hydrom helps to track the fermentation process",cover:"https://i.ytimg.com/vi/1Sjh_-V1Tg8/maxresdefault.jpg",coverY:0},s="Connect the Hydrom to Brewfather",i={unversionedId:"connect-services/connect_to_brewfather",id:"connect-services/connect_to_brewfather",title:"Connect the Hydrom to Brewfather",description:"Brewfather (https://brewfather.app/) is a software cloud solution for brewing beer. It allows the creation, synchronisation and exchange of recipes. The Hydrom helps to track the fermentation process",source:"@site/docs/connect-services/connect_to_brewfather.md",sourceDirName:"connect-services",slug:"/connect-services/connect_to_brewfather",permalink:"/docs/connect-services/connect_to_brewfather",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:4,frontMatter:{custom_edit_url:null,sidebar_position:4,description:"Brewfather (https://brewfather.app/) is a software cloud solution for brewing beer. It allows the creation, synchronisation and exchange of recipes. The Hydrom helps to track the fermentation process",cover:"https://i.ytimg.com/vi/1Sjh_-V1Tg8/maxresdefault.jpg",coverY:0},sidebar:"tutorialSidebar",previous:{title:"Connect the Hydrom to Brewblox",permalink:"/docs/connect-services/connect_to_brewblox"},next:{title:"Connect the Hydrom to Grainfather",permalink:"/docs/connect-services/connect_to_Grainfather"}},c={},h=[{value:"Add the hydrom to the Brewfather",id:"add-the-hydrom-to-the-brewfather",level:2},{value:"Activate &quot;Custom Stream&quot;",id:"activate-custom-stream",level:3},{value:"Copy BrewFather ID",id:"copy-brewfather-id",level:3},{value:"Insert BrewFather settings in Hydrom",id:"insert-brewfather-settings-in-hydrom",level:2},{value:"Step 1: Open the Menue",id:"step-1-open-the-menue",level:2},{value:"Step 2: Select &quot;Service&quot;",id:"step-2-select-service",level:2},{value:"Step 3: Activate Brewfather and change the settings",id:"step-3-activate-brewfather-and-change-the-settings",level:3},{value:"additional settings",id:"additional-settings",level:3},{value:"Save Settings",id:"save-settings",level:3},{value:"Send Test-message",id:"send-test-message",level:3},{value:"activate DeepSleep",id:"activate-deepsleep",level:3}],l={toc:h};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connect-the-hydrom-to-brewfather"},"Connect the Hydrom to Brewfather"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Prerequisite:")),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Access to user interface"),"\\\nTo make this setting, you must have access to the user interface. If this is not the case, see here how to do it:",(0,a.kt)("a",{parentName:"li",href:"../docs/Getting%20Started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.mdx",title:"mention"},"access-to-the-user-interface.md")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Brewfather user account available"),".\\\nAn account has been created with the cloud provider Brewfather."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Brewfather App was downloaded"),".\\\n",(0,a.kt)("a",{parentName:"li",href:"https://brewfather.app/"},"https://brewfather.app/")))),(0,a.kt)("h2",{id:"add-the-hydrom-to-the-brewfather"},"Add the hydrom to the Brewfather"),(0,a.kt)("h3",{id:"activate-custom-stream"},'Activate "Custom Stream"'),(0,a.kt)("p",null,'Open the Brewfather app and navigate to the settings. There you activate the device "Custom Stream".'),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5523).Z,width:"2128",height:"631"})," ",(0,a.kt)("img",{src:r(3718).Z,width:"2128",height:"631"})),(0,a.kt)("h3",{id:"copy-brewfather-id"},"Copy BrewFather ID"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The marked parameter must be copied into the hydrom.",src:r(3932).Z,width:"2128",height:"631"})),(0,a.kt)("h2",{id:"insert-brewfather-settings-in-hydrom"},"Insert BrewFather settings in Hydrom"),(0,a.kt)("p",null,"Now open the user interface of the Hydrom, in the best case the Hydrom is already in the network and can be easily accessed via http//hydrom001/."),(0,a.kt)("p",null,"Otherwise the Hydrom must still be started."),(0,a.kt)("h2",{id:"step-1-open-the-menue"},"Step 1: Open the Menue"),(0,a.kt)("p",null,"To access the menu bar you have to click on the three lines in the upper left corner. (See arrow)\\\nThen the menu bar will open."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Open Navigation",src:r(4326).Z,width:"2128",height:"631"})),(0,a.kt)("h2",{id:"step-2-select-service"},'Step 2: Select "Service"'),(0,a.kt)("h3",{id:"step-3-activate-brewfather-and-change-the-settings"},"Step 3: Activate Brewfather and change the settings"),(0,a.kt)("p",null,'On the "Service" page, the Brewfather service must be activated.'),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"It is important that you check if there is another URL in your hydrom. In the firmware up to 1.2.9 the wrong link ","[","/hydrom?id=xxxxxxxxxx] was used. Please replace the link with the link from the Brewfather UI ","[","/stream?id=XXXXXXX] as shown in the picture below.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The settings that are entered here are saved in the Hydrom",src:r(3594).Z,width:"2128",height:"631"})),(0,a.kt)("h3",{id:"additional-settings"},"additional settings"),(0,a.kt)("p",null,"In order not to consume too much power, we would turn Bluetooth off when it is not needed. It was documented here:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/add-bluetooth"},"add-bluetooth.md")),(0,a.kt)("p",null,"In order for the Hydrom to transmit the data reliably, a DeepSleep time must be set. This is documented on this page:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/other-settings/enable-deepsleep"},"enable-deepsleep.md")),(0,a.kt)("h3",{id:"save-settings"},"Save Settings"),(0,a.kt)("p",null,"Saving the data is important because it is the only way to connect to the service after waking up from DeepSleep."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pressing the &quot;save&quot; button saves the settings.",src:r(311).Z,width:"2128",height:"631"})),(0,a.kt)("p",null,"You can check whether the saving was successful by looking at the settings file at http://hydrom001/settings.json/. to check if the save was successful. This file is the permanent memory of the Hydrom."),(0,a.kt)("p",null,"A second way to check the saving is to reload the page (all modern browsers offer this Feature). If the properties are then reloaded, the hydrom has accepted them, otherwise the old settings are reloaded."),(0,a.kt)("h3",{id:"send-test-message"},"Send Test-message"),(0,a.kt)("p",null,'By activating this button, you can check whether the Hydrom has a connection to the service and to the individual parts of the service. If you now click on "Save", the set services are executed once and the page is reloaded. On the new page you can see whether the servers are accessible and the ports are open.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sending a test message can greatly simplify the process of checking the connection.",src:r(9716).Z,width:"2128",height:"631"})),(0,a.kt)("h3",{id:"activate-deepsleep"},"activate DeepSleep"),(0,a.kt)("p",null,"Activating DeepSleep is mandatory for the hydrom to be able to send data. If DeepSleep is activated, the hydrom wakes up after the set time and sends the data to the set service. Afterwards, the hydrom goes back to sleep and waits for the new service."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/other-settings/enable-deepsleep"},"enable-deepsleep.md")))}d.isMDXComponent=!0},3594:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/English_Pic1-a52598c323976ba70d91d1ca3389db0e.png"},5523:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/English_Pic2-a434b15faed891058e0c998ab806924a.png"},3718:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/English_Pic3-728321e18cec65e867e2267f6b03c209.png"},3932:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/English_Pic4-a88d8bcb5a67c9f50e716384a3e9194f.png"},4326:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/English_Pic5-227ff996e06a8f296d51485ea7a65871.png"},311:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/English_Pic6-7fdd6ec46a6a88c918e66955610d3eb9.png"},9716:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/English_Pic7-657c50ab3d0b7e79254cd5003cdd191b.png"}}]);