"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={custom_edit_url:null,sidebar_position:3,description:"Brewblox is a modern, open source brewery control platform. It runs on a central  (on premise) server to which multiple temperature controllers and sensors can connect in an intuitive web interface.",cover:"https://www.brewblox.com/brewpi-wordmark.svg",coverY:0},s="Connect the Hydrom to Brewblox",i={unversionedId:"connect-services/connect_to_brewblox",id:"connect-services/connect_to_brewblox",title:"Connect the Hydrom to Brewblox",description:"Brewblox is a modern, open source brewery control platform. It runs on a central  (on premise) server to which multiple temperature controllers and sensors can connect in an intuitive web interface.",source:"@site/docs/connect-services/connect_to_brewblox.md",sourceDirName:"connect-services",slug:"/connect-services/connect_to_brewblox",permalink:"/fr/docs/connect-services/connect_to_brewblox",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:3,frontMatter:{custom_edit_url:null,sidebar_position:3,description:"Brewblox is a modern, open source brewery control platform. It runs on a central  (on premise) server to which multiple temperature controllers and sensors can connect in an intuitive web interface.",cover:"https://www.brewblox.com/brewpi-wordmark.svg",coverY:0},sidebar:"tutorialSidebar",previous:{title:"Connect the Hydrom to Ubidots",permalink:"/fr/docs/connect-services/connect_to_ubidots"},next:{title:"Connect the Hydrom to Brewfather",permalink:"/fr/docs/connect-services/connect_to_brewfather"}},l={},d=[{value:"Precondition",id:"precondition",level:2},{value:"Adding Hydrom to BrewBlox",id:"adding-hydrom-to-brewblox",level:2},{value:"Configuring the Hydrom",id:"configuring-the-hydrom",level:2},{value:"Step 1: Open the Menue",id:"step-1-open-the-menue",level:2},{value:"Step 2: Select &quot;Service&quot;",id:"step-2-select-service",level:2},{value:"Step 3: Activate Brewblox",id:"step-3-activate-brewblox",level:3},{value:"additional settings",id:"additional-settings",level:3},{value:"Save Settings",id:"save-settings",level:3},{value:"Send Test-message",id:"send-test-message",level:3},{value:"activate DeepSleep",id:"activate-deepsleep",level:3},{value:"Configuration of the Hydrom in the Brewblox",id:"configuration-of-the-hydrom-in-the-brewblox",level:2},{value:"Add a dashboard",id:"add-a-dashboard",level:3},{value:"Add widget",id:"add-widget",level:3},{value:"Add graph",id:"add-graph",level:3},{value:"Activating the Hydrom",id:"activating-the-hydrom",level:3}],c={toc:d};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-the-hydrom-to-brewblox"},"Connect the Hydrom to Brewblox"),(0,o.kt)("h2",{id:"precondition"},"Precondition"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To make this setting you must have access to the user interface. If this is not the case, see here how to do it:",(0,o.kt)("a",{parentName:"p",href:"../docs/Getting%20Started/establish-first-connection-to-the-hydrom/access-to-the-user-interface.mdx",title:"mention"},"access-to-the-user-interface.md")),(0,o.kt)("p",{parentName:"admonition"},"In order to connect the Hydrom to Brewblox, a Brewblox server must first be set up."),(0,o.kt)("p",{parentName:"admonition"},'{% embed url="',(0,o.kt)("a",{parentName:"p",href:"https://brewblox.netlify.app/user/startup.html#what-you-will-need%22"},'https://brewblox.netlify.app/user/startup.html#what-you-will-need"')," %}\nA Pi with Brewblox was set up\n{% endembed %}")),(0,o.kt)("h2",{id:"adding-hydrom-to-brewblox"},"Adding Hydrom to BrewBlox"),(0,o.kt)("p",null,"The Hydrom is natively supported by Brewblox. This means that once the hydrom is set up, the readings are automatically sent to the server and can be used. Multiple devices can also be used in parallel by customising the name of the Hydrom."),(0,o.kt)("p",null,"There are two basic ways to connect the Hydrom to Brewblox."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"via WLAN\\\nAssuming the Hydrom is on the same network as the Brewblox server, it is best to set it up via WLAN. How to do this is described in this manual."),(0,o.kt)("li",{parentName:"ol"},"via Bluetooth\\\nIf the Brewblox server is not in the WLAN and there is no access to a WLAN, the Hydrom can only be connected via Bluetooth. No instructions have yet been written for this. In principle, you can say, follow the instructions for the Tilt Hydrometer: ",(0,o.kt)("a",{parentName:"li",href:"https://www.brewblox.com/user/services/tilt.html"},"https://www.brewblox.com/user/services/tilt.html"),"\\\nThese instructions also apply 1:1 to the Hydrom.")),(0,o.kt)("h2",{id:"configuring-the-hydrom"},"Configuring the Hydrom"),(0,o.kt)("h2",{id:"step-1-open-the-menue"},"Step 1: Open the Menue"),(0,o.kt)("p",null,"To access the menu bar you have to click on the three lines in the upper left corner. (See arrow)\\\nThen the menu bar will open."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open Navigation",src:n(4326).Z,width:"2128",height:"631"})),(0,o.kt)("h2",{id:"step-2-select-service"},'Step 2: Select "Service"'),(0,o.kt)("h3",{id:"step-3-activate-brewblox"},"Step 3: Activate Brewblox"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Change the setting of the Hydrom",src:n(9084).Z,width:"2128",height:"631"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Server Address:")," Name or IP of the Brewblox/MQTT broker"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Server Port:")," MQTT port, which is 1883 by default."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Path / URI:"),' must be set to "brewcast/history", which is the MQTT-Topic for the history service.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Username / Password:")," This field remains empty because Brewblox does not yet support MQTT with authentication."),(0,o.kt)("p",null,"The two indicators next to the IP address of the server and the port of the server then turn green/red when a test message has been sent.\\\nThe Hydrom then checks whether the address can be reached and if so, whether the destination port is open."),(0,o.kt)("h3",{id:"additional-settings"},"additional settings"),(0,o.kt)("p",null,"In order not to consume too much power, we would turn Bluetooth off when it is not needed. It was documented here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/fr/docs/add-bluetooth"},"add-bluetooth.md")),(0,o.kt)("p",null,"In order for the Hydrom to transmit the data reliably, a DeepSleep time must be set. This is documented on this page:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/fr/docs/other-settings/enable-deepsleep"},"enable-deepsleep.md")),(0,o.kt)("h3",{id:"save-settings"},"Save Settings"),(0,o.kt)("p",null,"Saving the data is important because it is the only way to connect to the service after waking up from DeepSleep."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pressing the &quot;save&quot; button saves the settings.",src:n(311).Z,width:"2128",height:"631"})),(0,o.kt)("p",null,"You can check whether the saving was successful by looking at the settings file at http://hydrom001/settings.json/. to check if the save was successful. This file is the permanent memory of the Hydrom."),(0,o.kt)("p",null,"A second way to check the saving is to reload the page (all modern browsers offer this Feature). If the properties are then reloaded, the hydrom has accepted them, otherwise the old settings are reloaded."),(0,o.kt)("h3",{id:"send-test-message"},"Send Test-message"),(0,o.kt)("p",null,'By activating this button, you can check whether the Hydrom has a connection to the service and to the individual parts of the service. If you now click on "Save", the set services are executed once and the page is reloaded. On the new page you can see whether the servers are accessible and the ports are open.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sending a test message can greatly simplify the process of checking the connection.",src:n(9716).Z,width:"2128",height:"631"})),(0,o.kt)("h3",{id:"activate-deepsleep"},"activate DeepSleep"),(0,o.kt)("p",null,"Activating DeepSleep is mandatory for the hydrom to be able to send data. If DeepSleep is activated, the hydrom wakes up after the set time and sends the data to the set service. Afterwards, the hydrom goes back to sleep and waits for the new service."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/fr/docs/other-settings/enable-deepsleep"},"enable-deepsleep.md")),(0,o.kt)("h2",{id:"configuration-of-the-hydrom-in-the-brewblox"},"Configuration of the Hydrom in the Brewblox"),(0,o.kt)("h3",{id:"add-a-dashboard"},"Add a dashboard"),(0,o.kt)("p",null,"In order to view the measured values of the Hydrom, a dashboard must first be created if one does not already exist."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Brewblox Dashboard",src:n(5877).Z,width:"2128",height:"631"})),(0,o.kt)("h3",{id:"add-widget"},"Add widget"),(0,o.kt)("p",null,"The measured values of the Hydrom can be visualised via a graph. To do this, a widget must first be created."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8494).Z,width:"2128",height:"631"})),(0,o.kt)("h3",{id:"add-graph"},"Add graph"),(0,o.kt)("p",null,"Now add a graph to this widget"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select Graph as widget to visualise the readings of the Hydrom",src:n(7644).Z,width:"2128",height:"631"})),(0,o.kt)("p",null,'Click on "Create" to create this widget.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirm selection",src:n(1072).Z,width:"2128",height:"631"})),(0,o.kt)("h3",{id:"activating-the-hydrom"},"Activating the Hydrom"),(0,o.kt)("p",null,"Adding the graph is not enough to display the measured values of the Hydrom. The measured values of the Hydrom do not have to be made visible. To do this, go to the top right corner and click on the two triangles to activate the settings of the graph."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Make settings of the graph",src:n(272).Z,width:"2128",height:"631"})),(0,o.kt)("p",null,"In the settings of the graph, the filter has to be activated. So practically, which measured values do I want to see. For clarity, it is recommended to activate only the required measured values here."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Activate the filters as needed",src:n(2576).Z,width:"2128",height:"631"})),(0,o.kt)("p",null,"At the end you see at least the test measurement after which the hydrom was put to sleep but also the measured values in the set interval."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"End result: The hydrom delivers measured values to the graph",src:n(1785).Z,width:"2128",height:"631"})))}h.isMDXComponent=!0},9084:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic19-b048f2d3b998e79933cf9e4c2ae826cd.png"},5877:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic20-96acad80dd41dfc18bf808c2119ce5e1.png"},8494:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic21-fc5415a7c68a3d68e61fad1418a92d47.png"},7644:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic22-cfea075fb1e4e3fbad00eabb2b25778e.png"},1072:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic23-a5a28a19cbb8e2ab22051b0bf8ed4bff.png"},272:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic24-5fbc3a8a181fd3cbfd3fe55876e891e7.png"},2576:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic25-b0b7b75366d83ed01946c2ec496e1c8f.png"},1785:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic26-c7c83f9cd04d3c360f43e5d3658fc202.png"},4326:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic5-227ff996e06a8f296d51485ea7a65871.png"},311:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic6-7fdd6ec46a6a88c918e66955610d3eb9.png"},9716:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic7-657c50ab3d0b7e79254cd5003cdd191b.png"}}]);