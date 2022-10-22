"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2536],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(n),u=s,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(7462),s=(n(7294),n(3905));const o={custom_edit_url:null,sidebar_position:1,description:"MQTT is an OASIS standard messaging protocol for the Internet of Things (IoT). Many services can be connected via this open standard.",cover:"https://mqtt.org/assets/downloads/mqtt-logo.png",coverY:0},i="To set up the Hydrom as an MQTT publisher",a={unversionedId:"connect-services/connect_to_MQTT",id:"connect-services/connect_to_MQTT",title:"To set up the Hydrom as an MQTT publisher",description:"MQTT is an OASIS standard messaging protocol for the Internet of Things (IoT). Many services can be connected via this open standard.",source:"@site/docs/connect-services/connect_to_MQTT.md",sourceDirName:"connect-services",slug:"/connect-services/connect_to_MQTT",permalink:"/sw/docs/connect-services/connect_to_MQTT",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,sidebar_position:1,description:"MQTT is an OASIS standard messaging protocol for the Internet of Things (IoT). Many services can be connected via this open standard.",cover:"https://mqtt.org/assets/downloads/mqtt-logo.png",coverY:0},sidebar:"tutorialSidebar",previous:{title:"Connect Services",permalink:"/sw/docs/category/connect-services"},next:{title:"Connect the Hydrom to Ubidots",permalink:"/sw/docs/connect-services/connect_to_ubidots"}},c={},l=[{value:"Collect the information from the MQTT interface",id:"collect-the-information-from-the-mqtt-interface",level:2},{value:"Insert MQTT settings in Hydrom",id:"insert-mqtt-settings-in-hydrom",level:2},{value:"Step 1: Open the Menue",id:"step-1-open-the-menue",level:2},{value:"Step 2: Select &quot;Service&quot;",id:"step-2-select-service",level:2},{value:"Activate MQTT and change the settings",id:"activate-mqtt-and-change-the-settings",level:3},{value:"Aktivieren Sie MQTT und \xe4ndern Sie die Einstellungen",id:"aktivieren-sie-mqtt-und-\xe4ndern-sie-die-einstellungen",level:4},{value:"additional settings",id:"additional-settings",level:3},{value:"Save Settings",id:"save-settings",level:3},{value:"Send Test-message",id:"send-test-message",level:3},{value:"activate DeepSleep",id:"activate-deepsleep",level:3},{value:"View Hydrom readings on the MQTT broker",id:"view-hydrom-readings-on-the-mqtt-broker",level:2},{value:"Check if the topic has been published",id:"check-if-the-topic-has-been-published",level:3},{value:"The further procedure is strongly dependent on the MQTT client.",id:"the-further-procedure-is-strongly-dependent-on-the-mqtt-client",level:3}],d={toc:l};function h(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"to-set-up-the-hydrom-as-an-mqtt-publisher"},"To set up the Hydrom as an MQTT publisher"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"Prerequisite:")),(0,s.kt)("ol",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Access to user interface"),"\nTo make this setting, you must have access to the user interface. If this is not the case, see here how to do it:",(0,s.kt)("a",{parentName:"li",href:"../docs/Getting%20Started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.mdx",title:"mention"},"access-to-the-user-interface.md")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Access to an MQTT server"),"\nAn MQTT server has been set up or there is access to a cloud MQTT server."))),(0,s.kt)("h2",{id:"collect-the-information-from-the-mqtt-interface"},"Collect the information from the MQTT interface"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Server (IP Adress)"),(0,s.kt)("li",{parentName:"ul"},"Port"),(0,s.kt)("li",{parentName:"ul"},"Username"),(0,s.kt)("li",{parentName:"ul"},"Password"),(0,s.kt)("li",{parentName:"ul"},"Topiclevel")),(0,s.kt)("h2",{id:"insert-mqtt-settings-in-hydrom"},"Insert MQTT settings in Hydrom"),(0,s.kt)("p",null,"Now open the user interface of the Hydrom, in the best case the Hydrom is already in the network and can be easily accessed via http//hydrom001/."),(0,s.kt)("p",null,"Otherwise the Hydrom must still be started."),(0,s.kt)("h2",{id:"step-1-open-the-menue"},"Step 1: Open the Menue"),(0,s.kt)("p",null,"To access the menu bar you have to click on the three lines in the upper left corner. (See arrow)\\\nThen the menu bar will open."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Open Navigation",src:n(4326).Z,width:"2128",height:"631"})),(0,s.kt)("h2",{id:"step-2-select-service"},'Step 2: Select "Service"'),(0,s.kt)("h3",{id:"activate-mqtt-and-change-the-settings"},"Activate MQTT and change the settings"),(0,s.kt)("p",null,'On the "Service" page, the MQTT service must be activated.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"The settings that are entered here are saved in the Hydrom",src:n(3829).Z,width:"2128",height:"631"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Server Adresse:")," Name oder IP des MQTT Brokers"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Server Port:")," MQTT-Port, der standardm\xe4\xdfig 1883 ist"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Benutzername:")," Den Benutzernamen erhalten Sie von dem MQTT Broker"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Passwort:")," Das Passowort erhalten Sie von dem MQTT Broker"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Topiclevel:")," wird im n\xe4chsten Teilkapitel ausf\xfchlich erkl\xe4rt"),(0,s.kt)("h4",{id:"aktivieren-sie-mqtt-und-\xe4ndern-sie-die-einstellungen"},"Aktivieren Sie MQTT und \xe4ndern Sie die Einstellungen"),(0,s.kt)("p",null,"In MQTT, the word Topic refers to a UTF-8 string that the broker uses to filter messages for each connected client. The topic consists of one or more topic levels also called topiclevel. Each topic level is separated by a slash."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.hivemq.com/img/blog/topic%5C_basics.png"},"https://www.hivemq.com/img/blog/topic\\_basics.png")),(0,s.kt)("h3",{id:"additional-settings"},"additional settings"),(0,s.kt)("p",null,"In order not to consume too much power, we would turn Bluetooth off when it is not needed. It was documented here:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/sw/docs/add-bluetooth"},"add-bluetooth.md")),(0,s.kt)("p",null,"In order for the Hydrom to transmit the data reliably, a DeepSleep time must be set. This is documented on this page:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/sw/docs/other-settings/enable-deepsleep"},"enable-deepsleep.md")),(0,s.kt)("h3",{id:"save-settings"},"Save Settings"),(0,s.kt)("p",null,"Saving the data is important because it is the only way to connect to the service after waking up from DeepSleep."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Pressing the &quot;save&quot; button saves the settings.",src:n(311).Z,width:"2128",height:"631"})),(0,s.kt)("p",null,"You can check whether the saving was successful by looking at the settings file at http://hydrom001/settings.json/. to check if the save was successful. This file is the permanent memory of the Hydrom."),(0,s.kt)("p",null,"A second way to check the saving is to reload the page (all modern browsers offer this Feature). If the properties are then reloaded, the hydrom has accepted them, otherwise the old settings are reloaded."),(0,s.kt)("h3",{id:"send-test-message"},"Send Test-message"),(0,s.kt)("p",null,'By activating this button, you can check whether the Hydrom has a connection to the service and to the individual parts of the service. If you now click on "Save", the set services are executed once and the page is reloaded. On the new page you can see whether the servers are accessible and the ports are open.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Sending a test message can greatly simplify the process of checking the connection.",src:n(9716).Z,width:"2128",height:"631"})),(0,s.kt)("h3",{id:"activate-deepsleep"},"activate DeepSleep"),(0,s.kt)("p",null,"Activating DeepSleep is mandatory for the hydrom to be able to send data. If DeepSleep is activated, the hydrom wakes up after the set time and sends the data to the set service. Afterwards, the hydrom goes back to sleep and waits for the new service."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/sw/docs/other-settings/enable-deepsleep"},"enable-deepsleep.md")),(0,s.kt)("h2",{id:"view-hydrom-readings-on-the-mqtt-broker"},"View Hydrom readings on the MQTT broker"),(0,s.kt)("h3",{id:"check-if-the-topic-has-been-published"},"Check if the topic has been published"),(0,s.kt)("p",null,"Here it is recommended to use a MQTT client app. Under IOS I recommend the app MQTTAnalyzer."),(0,s.kt)("p",null,"With this app you can connect to the broker and subscribe to the topiclevel and get the measured values. This way you can make sure in the first step that the data is sent correctly and received correctly by the broker."),(0,s.kt)("h3",{id:"the-further-procedure-is-strongly-dependent-on-the-mqtt-client"},"The further procedure is strongly dependent on the MQTT client."),(0,s.kt)("p",null,"It is not possible to describe a general procedure here. In the future, sample configurations for the most common clients will appear here, for which I ask for your help. Please send me your working configurations and I will publish them here, anonymized of course."))}h.isMDXComponent=!0},3829:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic10-2ac4fb96481a06b580cefb9d4c1734a1.png"},4326:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic5-227ff996e06a8f296d51485ea7a65871.png"},311:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic6-7fdd6ec46a6a88c918e66955610d3eb9.png"},9716:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic7-657c50ab3d0b7e79254cd5003cdd191b.png"}}]);