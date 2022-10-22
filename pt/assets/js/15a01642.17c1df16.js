"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),p=d(n),u=s,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||a;return n?i.createElement(m,o(o({ref:t},l),{},{components:n})):i.createElement(m,o({ref:t},l))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(7462),s=(n(7294),n(3905));const a={custom_edit_url:null,sidebar_position:2,description:"Ubidots is a cloud service that accepts, stores and visualizes measurement data from internet-enabled devices.",cover:"https://files.startupranking.com/startup/thumb/6796_043b01ef967da629abc843eca1f2a477906da07a_ubidots_l.png",coverY:0},o="Connect the Hydrom to Ubidots",r={unversionedId:"connect-services/connect_to_ubidots",id:"connect-services/connect_to_ubidots",title:"Connect the Hydrom to Ubidots",description:"Ubidots is a cloud service that accepts, stores and visualizes measurement data from internet-enabled devices.",source:"@site/docs/connect-services/connect_to_ubidots.md",sourceDirName:"connect-services",slug:"/connect-services/connect_to_ubidots",permalink:"/pt/docs/connect-services/connect_to_ubidots",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,sidebar_position:2,description:"Ubidots is a cloud service that accepts, stores and visualizes measurement data from internet-enabled devices.",cover:"https://files.startupranking.com/startup/thumb/6796_043b01ef967da629abc843eca1f2a477906da07a_ubidots_l.png",coverY:0},sidebar:"tutorialSidebar",previous:{title:"To set up the Hydrom as an MQTT publisher",permalink:"/pt/docs/connect-services/connect_to_MQTT"},next:{title:"Connect the Hydrom to Brewblox",permalink:"/pt/docs/connect-services/connect_to_brewblox"}},c={},d=[{value:"Add the hydrom to Ubidots",id:"add-the-hydrom-to-ubidots",level:2},{value:"Navigate to the Devicemanager",id:"navigate-to-the-devicemanager",level:3},{value:"Add Blank Device",id:"add-blank-device",level:3},{value:"Copy the token",id:"copy-the-token",level:3},{value:"Insert Service settings in Hydrom",id:"insert-service-settings-in-hydrom",level:2},{value:"Step 1: Open the Menue",id:"step-1-open-the-menue",level:2},{value:"Step 2: Select &quot;Service&quot;",id:"step-2-select-service",level:2},{value:"Step 3: Activate Ubidots and change the settings",id:"step-3-activate-ubidots-and-change-the-settings",level:3},{value:"additional settings",id:"additional-settings",level:3},{value:"Save Settings",id:"save-settings",level:3},{value:"Send Test-message",id:"send-test-message",level:3},{value:"activate DeepSleep",id:"activate-deepsleep",level:3}],l={toc:d};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"connect-the-hydrom-to-ubidots"},"Connect the Hydrom to Ubidots"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"Prerequisite:")),(0,s.kt)("ol",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Access to the user interface"),"\\\nTo make this setting you must have access to the user interface. If this is not the case, see here how to do it:",(0,s.kt)("a",{parentName:"li",href:"../docs/Getting%20Started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.mdx",title:"mention"},"access-to-the-user-interface.md")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Ubidots user account available"),"\\\nAn account was created with the cloud provider ubidots. At the time of writing, there is a free account for non-commercial use.\\\n",(0,s.kt)("a",{parentName:"li",href:"https://industrial.ubidots.com/accounts/signup%5C_industrial/"},"https://industrial.ubidots.com/accounts/signup\\_industrial/")))),(0,s.kt)("h2",{id:"add-the-hydrom-to-ubidots"},"Add the hydrom to Ubidots"),(0,s.kt)("h3",{id:"navigate-to-the-devicemanager"},"Navigate to the Devicemanager"),(0,s.kt)("p",null,"The device management is located at the top center. Here a new device must be added"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(9025).Z,width:"2128",height:"631"})),(0,s.kt)("h3",{id:"add-blank-device"},"Add Blank Device"),(0,s.kt)("p",null,'It is really important that you enter the device name here. E.g. "Hydrom001" in the default configuration'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Choose Device Name",src:n(2493).Z,width:"2128",height:"631"})),(0,s.kt)("h3",{id:"copy-the-token"},"Copy the token"),(0,s.kt)("p",null,"After adding the device, the device must be opened and then the token must be copied (see red marking)."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Copy Ubidots Token",src:n(7366).Z,width:"2128",height:"631"})),(0,s.kt)("h2",{id:"insert-service-settings-in-hydrom"},"Insert Service settings in Hydrom"),(0,s.kt)("p",null,"Now open the user interface of the Hydrom, in the best case the Hydrom is already in the network and can be easily accessed via http//hydrom001/."),(0,s.kt)("p",null,"Otherwise the Hydrom must still be started."),(0,s.kt)("h2",{id:"step-1-open-the-menue"},"Step 1: Open the Menue"),(0,s.kt)("p",null,"To access the menu bar you have to click on the three lines in the upper left corner. (See arrow)\\\nThen the menu bar will open."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Open Navigation",src:n(4326).Z,width:"2128",height:"631"})),(0,s.kt)("h2",{id:"step-2-select-service"},'Step 2: Select "Service"'),(0,s.kt)("h3",{id:"step-3-activate-ubidots-and-change-the-settings"},"Step 3: Activate Ubidots and change the settings"),(0,s.kt)("p",null,'On the "Service" page, the Ubidots service must be activated.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Activating the Ubidots interface and entering the token",src:n(6526).Z,width:"2128",height:"631"})),(0,s.kt)("h3",{id:"additional-settings"},"additional settings"),(0,s.kt)("p",null,"In order not to consume too much power, we would turn Bluetooth off when it is not needed. It was documented here:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/pt/docs/add-bluetooth"},"add-bluetooth.md")),(0,s.kt)("p",null,"In order for the Hydrom to transmit the data reliably, a DeepSleep time must be set. This is documented on this page:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/pt/docs/other-settings/enable-deepsleep"},"enable-deepsleep.md")),(0,s.kt)("h3",{id:"save-settings"},"Save Settings"),(0,s.kt)("p",null,"Saving the data is important because it is the only way to connect to the service after waking up from DeepSleep."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Pressing the &quot;save&quot; button saves the settings.",src:n(311).Z,width:"2128",height:"631"})),(0,s.kt)("p",null,"You can check whether the saving was successful by looking at the settings file at http://hydrom001/settings.json/. to check if the save was successful. This file is the permanent memory of the Hydrom."),(0,s.kt)("p",null,"A second way to check the saving is to reload the page (all modern browsers offer this Feature). If the properties are then reloaded, the hydrom has accepted them, otherwise the old settings are reloaded."),(0,s.kt)("h3",{id:"send-test-message"},"Send Test-message"),(0,s.kt)("p",null,'By activating this button, you can check whether the Hydrom has a connection to the service and to the individual parts of the service. If you now click on "Save", the set services are executed once and the page is reloaded. On the new page you can see whether the servers are accessible and the ports are open.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Sending a test message can greatly simplify the process of checking the connection.",src:n(9716).Z,width:"2128",height:"631"})),(0,s.kt)("h3",{id:"activate-deepsleep"},"activate DeepSleep"),(0,s.kt)("p",null,"Activating DeepSleep is mandatory for the hydrom to be able to send data. If DeepSleep is activated, the hydrom wakes up after the set time and sends the data to the set service. Afterwards, the hydrom goes back to sleep and waits for the new service."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/pt/docs/other-settings/enable-deepsleep"},"enable-deepsleep.md")))}h.isMDXComponent=!0},9025:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/English_Pic28-463513b03ad93e4271d2ae97570d8b5f.png"},2493:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/English_Pic29-9ebd7badf27a7bd12306ed5cb5d2855f.png"},7366:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/English_Pic31-4eb5411109ffb75bb9b7c95b63e2575b.png"},6526:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/English_Pic40-4810b979627e4e5a2160fe4d2b3e487c.png"},4326:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/English_Pic5-227ff996e06a8f296d51485ea7a65871.png"},311:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/English_Pic6-7fdd6ec46a6a88c918e66955610d3eb9.png"},9716:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/English_Pic7-657c50ab3d0b7e79254cd5003cdd191b.png"}}]);