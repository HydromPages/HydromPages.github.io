"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8812],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||i;return a?r.createElement(u,s(s({ref:t},c),{},{components:a})):r.createElement(u,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8703:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={custom_edit_url:null,sidebar_position:6,description:"Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents. It was designed for communication between web browsers and web servers.",cover:"https://labs.tadigital.com/wp-content/uploads/2019/11/http.jpg",coverY:0},s="Send Measurements via Webhook",o={unversionedId:"connect-services/connect_to_http",id:"connect-services/connect_to_http",title:"Send Measurements via Webhook",description:"Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents. It was designed for communication between web browsers and web servers.",source:"@site/docs/connect-services/connect_to_http.md",sourceDirName:"connect-services",slug:"/connect-services/connect_to_http",permalink:"/fr/docs/connect-services/connect_to_http",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:6,frontMatter:{custom_edit_url:null,sidebar_position:6,description:"Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents. It was designed for communication between web browsers and web servers.",cover:"https://labs.tadigital.com/wp-content/uploads/2019/11/http.jpg",coverY:0},sidebar:"tutorialSidebar",previous:{title:"Connect the Hydrom to Grainfather",permalink:"/fr/docs/connect-services/connect_to_Grainfather"},next:{title:"Troubleshooting",permalink:"/fr/docs/category/troubleshooting"}},l={},p=[{value:"Datatransfer",id:"datatransfer",level:2},{value:"Via URL",id:"via-url",level:3},{value:"Example URL",id:"example-url",level:4},{value:"via JSON",id:"via-json",level:3},{value:"Step 1: Open the Menue",id:"step-1-open-the-menue",level:2},{value:"Step 2: Select &quot;Service&quot;",id:"step-2-select-service",level:2},{value:"Activate http-client and change the settings",id:"activate-http-client-and-change-the-settings",level:3},{value:"additional settings",id:"additional-settings",level:3},{value:"Save Settings",id:"save-settings",level:3},{value:"Send Test-message",id:"send-test-message",level:3},{value:"activate DeepSleep",id:"activate-deepsleep",level:3}],c={toc:p};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"send-measurements-via-webhook"},"Send Measurements via Webhook"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Prerequisite:")),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Access to user interface"),(0,n.kt)("br",{parentName:"li"}),"To make this setting, you must have access to the user interface. If this is not the case, see here how to do it:",(0,n.kt)("a",{parentName:"li",href:"../docs/Getting%20Started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.mdx",title:"mention"},"access-to-the-user-interface.md")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Access to an http-Server server/Cloud Service"),(0,n.kt)("br",{parentName:"li"}),"An http-Server server has been set up or there is access to a cloud http-Server."))),(0,n.kt)("h2",{id:"datatransfer"},"Datatransfer"),(0,n.kt)("h3",{id:"via-url"},"Via URL"),(0,n.kt)("p",null,'If placeholders are used in the URL specified in the "URL", the hydrom will replace them with the current variables.'),(0,n.kt)("p",null,"An example would be: {VALUE","_","TILT","_","P} --\x3e 15.3\n{VALUE","_","TEMPERATURE","_","C} --\x3e 25.3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"{NAME","_","DEVICE}"),' If this variable is used, the hydrom replaces this placeholder with the current name of the hydrom. Default: "Hydrom001'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"{VALUE","_","TEMPERATURE","_","C}")," If this variable is used, the Hydrom replaces this placeholder with the currently measured temperature. The unit of this variable is Celsius"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"{VALUE","_","TILT","_","P}")," If this variable is used, the Hydrom replaces this placeholder with the currently measured temperature. The unit of this variable is Plato"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"{VALUE","_","TILT","_","SG}")," If this variable is used, the Hydrom replaces this placeholder with the currently measured tilt. The unit of this variable is specific Gravity"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"{VALUE","_","TILT","_","G}")," If this variable is used, the Hydrom replaces this placeholder with the currently measured tilt. The unit of this variable is Gravity"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"{VALUE","_","RSSI}")," If this variable is used, the Hydrom replaces this placeholder with the currently measured tilt."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"{VALUE","_","BATTERY","_","VOLTAGE}")," If this variable is used, the Hydrom replaces this placeholder with the currently measured Batteryvoltage. The unit of this variable is Volt"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"{VALUE","_","BATTERY","_","PERCENTAGE}")," If this variable is used, the Hydrom replaces this placeholder with the current battery level. The unit of this variable is Percent.")),(0,n.kt)("h4",{id:"example-url"},"Example URL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-url"},"https://maker.ifttt.com/trigger/hydrom/with/key/clLb9jfjgngkdovIx?value1={VALUE_TILT_G}&value2={VALUE_TEMPERATURE_C}&value3={VALUE_BATTERY_PERCENTAGE}\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Webhook",src:a(8954).Z,width:"2128",height:"631"})),(0,n.kt)("h3",{id:"via-json"},"via JSON"),(0,n.kt)("p",null,'The hydrom sends, if you have activated "http", then the hydrom sends a JSON file to the path specified in the "URL".\nHow the file looks like and what the parameters contain you can read here.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"name"),(0,n.kt)("br",{parentName:"p"}),"\n",'Each device has the name "Hydrom001" by default. This name can be changed at any time to distinguish several devices from each other',(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/other-settings/changing-the-hydrom-name",title:"mention"},"changing-the-hydrom-name.md"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"angle"),(0,n.kt)("br",{parentName:"p"}),"\n","This reading is the raw reading of the slope of the hydrom without any processing  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"temperature"),(0,n.kt)("br",{parentName:"p"}),"\n","This value is the measured temperature in degrees Celsius  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"temp","_","units"),(0,n.kt)("br",{parentName:"p"}),"\n",'A "C" for Celsius is sent here  ')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"battery"),(0,n.kt)("br",{parentName:"p"}),"\n","Battery voltage in V")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"gravity"),(0,n.kt)("br",{parentName:"p"}),"\n","If this variable is used, the Hydrom replaces this placeholder with the current battery level. The unit of this variable is Percent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"interval"),(0,n.kt)("br",{parentName:"p"}),"\n","The interval during which the measured values are sent (+ approx. 23s)  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"RSSI"),(0,n.kt)("br",{parentName:"p"}),"\n","Wifi transmit power"))),(0,n.kt)("p",null,"Sample content of the JSON:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n"name":"Hydrom001",\n"ID":3,\n"angle":65.54,\n"temperature":26.43,\n"temp_units":"C",\n"battery":3.9,\n"gravity":9.34,\n"interval":900,\n"RSSI":63.5\n}\n')),(0,n.kt)("h2",{id:"step-1-open-the-menue"},"Step 1: Open the Menue"),(0,n.kt)("p",null,"To access the menu bar you have to click on the three lines in the upper left corner. (See arrow)\nThen the menu bar will open."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Open Navigation",src:a(4326).Z,width:"2128",height:"631"})),(0,n.kt)("h2",{id:"step-2-select-service"},'Step 2: Select "Service"'),(0,n.kt)("h3",{id:"activate-http-client-and-change-the-settings"},"Activate http-client and change the settings"),(0,n.kt)("p",null,'On the "Service" page, the http-Server service must be activated.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Enabled Bluetooth",src:a(8954).Z,width:"2128",height:"631"})),(0,n.kt)("h3",{id:"additional-settings"},"additional settings"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"In order not to consume too much power, we would turn Bluetooth off when it is not needed. It was documented here:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/add-bluetooth"},"add-bluetooth.md"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"In order for the Hydrom to transmit the data reliably, a DeepSleep time must be set. This is documented on this page:\n",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/other-settings/enable-deepsleep"},"enable-deepsleep.md"))),(0,n.kt)("h3",{id:"save-settings"},"Save Settings"),(0,n.kt)("p",null,"Saving the data is important because it is the only way to connect to the service after waking up from DeepSleep."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pressing the &quot;save&quot; button saves the settings.",src:a(311).Z,width:"2128",height:"631"})),(0,n.kt)("p",null,"You can check whether the saving was successful by looking at the settings file at http://hydrom001/settings.json/. to check if the save was successful. This file is the permanent memory of the Hydrom."),(0,n.kt)("p",null,"A second way to check the saving is to reload the page (all modern browsers offer this Feature). If the properties are then reloaded, the hydrom has accepted them, otherwise the old settings are reloaded."),(0,n.kt)("h3",{id:"send-test-message"},"Send Test-message"),(0,n.kt)("p",null,'By activating this button, you can check whether the Hydrom has a connection to the service and to the individual parts of the service. If you now click on "Save", the set services are executed once and the page is reloaded. On the new page you can see whether the servers are accessible and the ports are open.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Sending a test message can greatly simplify the process of checking the connection.",src:a(9716).Z,width:"2128",height:"631"})),(0,n.kt)("h3",{id:"activate-deepsleep"},"activate DeepSleep"),(0,n.kt)("p",null,"Activating DeepSleep is mandatory for the hydrom to be able to send data. If DeepSleep is activated, the hydrom wakes up after the set time and sends the data to the set service. Afterwards, the hydrom goes back to sleep and waits for the new service."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/fr/docs/other-settings/enable-deepsleep"},"enable-deepsleep.md")))}h.isMDXComponent=!0},8954:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/English_Pic15-ad10365944ca194d6fccd0f779dd9767.png"},4326:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/English_Pic5-227ff996e06a8f296d51485ea7a65871.png"},311:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/English_Pic6-7fdd6ec46a6a88c918e66955610d3eb9.png"},9716:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/English_Pic7-657c50ab3d0b7e79254cd5003cdd191b.png"}}]);