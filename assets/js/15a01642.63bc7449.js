"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),l=c(n),m=i,u=l["".concat(d,".").concat(m)]||l[m]||h[m]||o;return n?a.createElement(u,s(s({ref:t},p),{},{components:n})):a.createElement(u,s({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[l]="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={custom_edit_url:null,sidebar_position:2,description:"Ubidots is a cloud service that accepts, stores and visualizes measurement data from internet-enabled devices.",cover:"https://files.startupranking.com/startup/thumb/6796_043b01ef967da629abc843eca1f2a477906da07a_ubidots_l.png",coverY:0},s="Connect the Hydrom to Ubidots",r={unversionedId:"connect-services/connect_to_ubidots",id:"connect-services/connect_to_ubidots",title:"Connect the Hydrom to Ubidots",description:"Ubidots is a cloud service that accepts, stores and visualizes measurement data from internet-enabled devices.",source:"@site/docs/connect-services/connect_to_ubidots.md",sourceDirName:"connect-services",slug:"/connect-services/connect_to_ubidots",permalink:"/docs/connect-services/connect_to_ubidots",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,sidebar_position:2,description:"Ubidots is a cloud service that accepts, stores and visualizes measurement data from internet-enabled devices.",cover:"https://files.startupranking.com/startup/thumb/6796_043b01ef967da629abc843eca1f2a477906da07a_ubidots_l.png",coverY:0},sidebar:"tutorialSidebar",previous:{title:"To set up the Hydrom as an MQTT publisher",permalink:"/docs/connect-services/connect_to_MQTT"},next:{title:"Connect the Hydrom to Brewblox",permalink:"/docs/connect-services/connect_to_brewblox"}},d={},c=[{value:"Add the hydrom to Ubidots",id:"add-the-hydrom-to-ubidots",level:2},{value:"Navigate to the Devicemanager",id:"navigate-to-the-devicemanager",level:3},{value:"Add Blank Device",id:"add-blank-device",level:3},{value:"Copy the token",id:"copy-the-token",level:3},{value:"Insert Service settings in Hydrom",id:"insert-service-settings-in-hydrom",level:2},{value:"Step 1: Open the Menue",id:"step-1-open-the-menue",level:2},{value:"Step 2: Select &quot;Service&quot;",id:"step-2-select-service",level:2},{value:"Step 3: Activate Ubidots and change the settings",id:"step-3-activate-ubidots-and-change-the-settings",level:2},{value:"additional settings",id:"additional-settings",level:3}],p={toc:c};function l(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connect-the-hydrom-to-ubidots"},"Connect the Hydrom to Ubidots"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Prerequisite:")),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Access to the user interface"),(0,i.kt)("br",{parentName:"li"}),"To make this setting you must have access to the user interface. If this is not the case, see here how to do it:",(0,i.kt)("a",{parentName:"li",href:"../docs/Getting%20Started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.mdx",title:"mention"},"access-to-the-user-interface.md")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Ubidots user account available"),(0,i.kt)("br",{parentName:"li"}),"An account was created with the cloud provider ubidots. At the time of writing, there is a free account for non-commercial use",(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("a",{parentName:"li",href:"https://industrial.ubidots.com/accounts/signup%5C_industrial/"},"https://industrial.ubidots.com/accounts/signup\\_industrial/")))),(0,i.kt)("h2",{id:"add-the-hydrom-to-ubidots"},"Add the hydrom to Ubidots"),(0,i.kt)("h3",{id:"navigate-to-the-devicemanager"},"Navigate to the Devicemanager"),(0,i.kt)("p",null,"The device management is located at the top center. Here a new device must be added"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9025).Z,width:"2128",height:"631"})),(0,i.kt)("h3",{id:"add-blank-device"},"Add Blank Device"),(0,i.kt)("p",null,'It is really important that you enter the device name here. E.g. "Hydrom001" in the default configuration'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Choose Device Name",src:n(2493).Z,width:"2128",height:"631"})),(0,i.kt)("h3",{id:"copy-the-token"},"Copy the token"),(0,i.kt)("p",null,"After adding the device, the device must be opened and then the token must be copied (see red marking)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Copy Ubidots Token",src:n(7366).Z,width:"2128",height:"631"})),(0,i.kt)("h2",{id:"insert-service-settings-in-hydrom"},"Insert Service settings in Hydrom"),(0,i.kt)("p",null,"Now open the user interface of the Hydrom, in the best case the Hydrom is already in the network and can be easily accessed via http//hydrom001/."),(0,i.kt)("p",null,"Otherwise the Hydrom must still be started."),(0,i.kt)("h2",{id:"step-1-open-the-menue"},"Step 1: Open the Menue"),(0,i.kt)("p",null,"To access the menu bar you have to click on the three lines in the upper left corner. (See arrow)\\\nThen the menu bar will open."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Open Navigation",src:n(4326).Z,width:"2128",height:"631"})),(0,i.kt)("h2",{id:"step-2-select-service"},'Step 2: Select "Service"'),(0,i.kt)("h2",{id:"step-3-activate-ubidots-and-change-the-settings"},"Step 3: Activate Ubidots and change the settings"),(0,i.kt)("p",null,'On the "Service" page, the Ubidots service must be activated.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Activating the Ubidots interface and entering the token",src:n(6526).Z,width:"2128",height:"631"})),(0,i.kt)("h3",{id:"additional-settings"},"additional settings"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In order not to consume too much power, we would turn Bluetooth off when it is not needed. It was documented here:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/add-bluetooth"},"add-bluetooth.md"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h3",{parentName:"admonition",id:"activate-deepsleep"},"activate DeepSleep"),(0,i.kt)("p",{parentName:"admonition"},"Activating DeepSleep is mandatory for the hydrom to be able to send data. If DeepSleep is activated, the hydrom wakes up after the set time and sends the data to the set service. Afterwards, the hydrom goes back to sleep and waits for the new service.\n",(0,i.kt)("a",{parentName:"p",href:"/docs/other-settings/enable-deepsleep"},"enable-deepsleep.md"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h3",{parentName:"admonition",id:"save-settings"},"Save Settings"),(0,i.kt)("p",{parentName:"admonition"},"Saving the data is important because it is the only way to connect to the service after waking up from DeepSleep."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"Pressing the &quot;save&quot; button saves the settings.",src:n(311).Z,width:"2128",height:"631"})),(0,i.kt)("p",{parentName:"admonition"},"You can check whether the saving was successful by looking at the settings file at http://hydrom001/settings.json/. to check if the save was successful. This file is the permanent memory of the Hydrom."),(0,i.kt)("p",{parentName:"admonition"},"A second way to check the saving is to reload the page (all modern browsers offer this Feature). If the properties are then reloaded, the hydrom has accepted them, otherwise the old settings are reloaded.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h3",{parentName:"admonition",id:"send-test-message"},"Send Test-message"),(0,i.kt)("p",{parentName:"admonition"},'By activating this button, you can check whether the Hydrom has a connection to the service and to the individual parts of the service. If you now click on "Save", the set services are executed once and the page is reloaded. On the new page you can see whether the servers are accessible and the ports are open.'),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"Sending a test message can greatly simplify the process of checking the connection.",src:n(9716).Z,width:"2128",height:"631"}))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("h3",{parentName:"admonition",id:"put-hydrom-to-deepsleep"},"Put Hydrom to DeepSleep"),(0,i.kt)("p",{parentName:"admonition"},"To ensure that the device sends measured values to the Service in the set interval as intended, the Hydrom must be put into deep sleep."),(0,i.kt)("p",{parentName:"admonition"},"There are two ways to put the Hydrom into deep sleep.\nTurning the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"power switch off and on")),"  is the easiest way to put the Hydrom into deep sleep.\nThe alternative way is to put it to sleep ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"via the UI")),'.\nTo do this, open the navigation bar and go to the "DeepSleep" tab.')))}l.isMDXComponent=!0},9025:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/English_Pic28-463513b03ad93e4271d2ae97570d8b5f.png"},2493:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/English_Pic29-9ebd7badf27a7bd12306ed5cb5d2855f.png"},7366:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/English_Pic31-4eb5411109ffb75bb9b7c95b63e2575b.png"},6526:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/English_Pic40-4810b979627e4e5a2160fe4d2b3e487c.png"},4326:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/English_Pic5-227ff996e06a8f296d51485ea7a65871.png"},311:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/English_Pic6-7fdd6ec46a6a88c918e66955610d3eb9.png"},9716:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/English_Pic7-657c50ab3d0b7e79254cd5003cdd191b.png"}}]);