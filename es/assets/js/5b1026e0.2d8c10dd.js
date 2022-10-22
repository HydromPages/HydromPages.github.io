"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const s={custom_edit_url:null,sidebar_position:5,description:"If you put your ESP32 in deep sleep mode, it will reduce the power consumption and your batteries will last longer."},i="Enable DeepSleep",a={unversionedId:"other-settings/enable-deepsleep",id:"other-settings/enable-deepsleep",title:"Enable DeepSleep",description:"If you put your ESP32 in deep sleep mode, it will reduce the power consumption and your batteries will last longer.",source:"@site/docs/other-settings/enable-deepsleep.md",sourceDirName:"other-settings",slug:"/other-settings/enable-deepsleep",permalink:"/es/docs/other-settings/enable-deepsleep",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:5,frontMatter:{custom_edit_url:null,sidebar_position:5,description:"If you put your ESP32 in deep sleep mode, it will reduce the power consumption and your batteries will last longer."},sidebar:"tutorialSidebar",previous:{title:"Factory Reset",permalink:"/es/docs/other-settings/factory-reset"},next:{title:"Calibration",permalink:"/es/docs/category/calibration"}},l={},p=[{value:"Step 1: Open the Menue",id:"step-1-open-the-menue",level:2},{value:"Step 2: Select &quot;Settings&quot; or &quot;Services&quot;",id:"step-2-select-settings-or-services",level:3},{value:"Save Settings",id:"save-settings",level:3}],c={toc:p};function u(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enable-deepsleep"},"Enable DeepSleep"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Precondition:"),"\\\nTo make this setting you must have access to the user interface. If this is not the case, see here how to do it:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"../getting-started/access-to-the-user-interface.md",title:"mention"},"access-to-the-user-interface.md"))),(0,o.kt)("h2",{id:"step-1-open-the-menue"},"Step 1: Open the Menue"),(0,o.kt)("p",null,"To access the menu bar you have to click on the three lines in the upper left corner. (See arrow)\\\nThen the menu bar will open."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open Navigation",src:n(4326).Z,width:"2128",height:"631"})),(0,o.kt)("h3",{id:"step-2-select-settings-or-services"},'Step 2: Select "Settings" or "Services"'),(0,o.kt)("p",null,'Activate "DeepSleep" and then select the time the hydrom should sleep.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1394).Z,width:"2128",height:"631"})),(0,o.kt)("p",null,"To put the hydrom to sleep, there are two methods:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the hydrom is not used for 3min. it automatically goes to sleep"),(0,o.kt)("li",{parentName:"ol"},'If you want to put the Hydrom to sleep immediately, you can select "DeepSleep" in the navigation bar.')),(0,o.kt)("p",null,'{% hint style="info" %}\n',(0,o.kt)("strong",{parentName:"p"},"Sleep time calculation")),(0,o.kt)("p",null,"Currently the Hydrom needs 23sec. to start, set up the network, send out the readings."),(0,o.kt)("p",null,"This means that for a constant transmission of data every 15min, you need to set a sleep time of 14min. 27sec.\n:::"),(0,o.kt)("h2",{id:""}),(0,o.kt)("h3",{id:"save-settings"},"Save Settings"),(0,o.kt)("p",null,"Saving the data is important because it is the only way to connect to the service after waking up from DeepSleep."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pressing the &quot;save&quot; button saves the settings.",src:n(311).Z,width:"2128",height:"631"})),(0,o.kt)("p",null,"You can check whether the saving was successful by looking at the settings file at http://hydrom001/settings.json/.\nto check if the save was successful.\nThis file is the permanent memory of the Hydrom."),(0,o.kt)("p",null,"A second way to check the saving is to reload the page (all browsers offer this).\nIf the properties are then reloaded, the hydrom has accepted them, otherwise the old settings are reloaded."))}u.isMDXComponent=!0},1394:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic18-f34600c10fca422459f812915b01ad55.png"},4326:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic5-227ff996e06a8f296d51485ea7a65871.png"},311:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic6-7fdd6ec46a6a88c918e66955610d3eb9.png"}}]);