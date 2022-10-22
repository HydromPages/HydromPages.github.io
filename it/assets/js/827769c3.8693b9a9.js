"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=o,g=h["".concat(c,".").concat(u)]||h[u]||d[u]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={custom_edit_url:null,sidebar_position:5},a="Changing the network settings",s={unversionedId:"Getting Started/Changing-the-network-settings",id:"Getting Started/Changing-the-network-settings",title:"Changing the network settings",description:"ATTENTION! If you have entered incorrect information (wrong SSID, passwords etc.), you will not be able to connect to the Hydrom and you have to reset the Device.",source:"@site/docs/Getting Started/Changing-the-network-settings.md",sourceDirName:"Getting Started",slug:"/Getting Started/Changing-the-network-settings",permalink:"/it/docs/Getting Started/Changing-the-network-settings",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:5,frontMatter:{custom_edit_url:null,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Access to the user interface",permalink:"/it/docs/Getting Started/establish-first-connection-to-the-hydrom/access-to-the-user-interface"},next:{title:"Indicator LEDs",permalink:"/it/docs/Getting Started/indicator-leds"}},c={},l=[],p={toc:l};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"changing-the-network-settings"},"Changing the network settings"),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"ATTENTION! If you have entered incorrect information (wrong SSID, passwords etc.), you will not be able to connect to the Hydrom and you have to reset the Device."),(0,o.kt)("p",{parentName:"admonition"},"If the setting is incorrect, you can reset the Hydrom as described here:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/it/docs/other-settings/factory-reset#reset-by-the-button",title:"mention"},"#reset-by-the-button"))),(0,o.kt)("p",null,'To change the network settings, open the navigation bar on the left side and select the "Wifi" option'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access Point"),(0,o.kt)("p",{parentName:"li"},"allows the Device to operate as a WiFi access point."," "),(0,o.kt)("p",{parentName:"li"},"The User can change the name (SSID) and the password to access the AP. After you have entered the desired settings, press Connect.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Network Client"),(0,o.kt)("p",{parentName:"li"},"allows the Device to connect to an available WiFi network."),(0,o.kt)("p",{parentName:"li"},"In order to switch to this mode, the User must enter the name (SSID) and the password to connect to a local WiFi network. After entering the correct details, press Connect."))),(0,o.kt)("p",null,'{% tabs %}\n{% tab title="Network Client" %}\nTo set up the Hydrom as a client in an existing network, enter the name of the existing network in the field below the "SSID".'),(0,o.kt)("p",null,'In the field below the "Password" enter the password of the existing network.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4277).Z,width:"2128",height:"631"})),(0,o.kt)("p",null,"{% endtab %}"),(0,o.kt)("p",null,'{% tab title="Accespoint" %}\nTo set up the Hydrom as a Accesspoint, enter a name for the Accesspoint in the field below the "SSID".'),(0,o.kt)("p",null,'In the field below the "Password" enter the password of the Accesspoint.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4277).Z,width:"2128",height:"631"}),"\n{% endtab %}\n{% endtabs %}"))}d.isMDXComponent=!0},4277:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/English_Pic37-395e682f749cd9f0bcbc0e5ddabddd1e.png"}}]);