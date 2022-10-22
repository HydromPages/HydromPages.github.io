"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7086],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2219:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={custom_edit_url:null,sidebar_position:1},o="Check calibration status",s={unversionedId:"calibration/untitled",id:"calibration/untitled",title:"Check calibration status",description:"To check the Calibrationstatus you must have access to the user interface. If this is not the case, see here how to do it:access-to-the-user-interface.md",source:"@site/docs/calibration/untitled.md",sourceDirName:"calibration",slug:"/calibration/untitled",permalink:"/it/docs/calibration/untitled",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Calibration",permalink:"/it/docs/category/calibration"},next:{title:"Calibration process",permalink:"/it/docs/calibration/calibration-process/"}},c={},l=[],u={toc:l};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"check-calibration-status"},"Check calibration status"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To check the Calibrationstatus you must have access to the user interface. If this is not the case, see here how to do it:",(0,a.kt)("a",{parentName:"p",href:"../getting-started/access-to-the-user-interface.md",title:"mention"},"access-to-the-user-interface.md"))),(0,a.kt)("p",null,"The easiest way to check the calibration status is to place the Hydrom in 25 degree water and access the main screen."),(0,a.kt)("p",null,'The main screen is accessed by typing http://hydrom001/ into the browser.\nThe "hydrom001" should be replaced with the device name that was set.\n"hydrom001 is the default name.'),(0,a.kt)("p",null,"If the hydrom now shows a value close to 0P at 25 degrees water temperature, then the hydrom is calibrated."),(0,a.kt)("p",null,'If the value is greater than 15, it is likely that Gravity has been set as the unit.\nThis can be changed by selecting "Plato" under Tilt-Unit in Settings.'),(0,a.kt)("p",null,"If the hydrom is not calibrated, there are three possibilities."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"plain water calibration\nThe Hydrom measures the actual angle in the water and calculates an approximation to the actual calibration formula from the known relationships."),(0,a.kt)("li",{parentName:"ol"},"reference calibration\nThe hydrom is placed in a reference liquid and when the density changes, this is measured with a reference meter and entered into the hydrom.\nThis step must then be repeated 7 times to determine the formula.\nYeast or sugar can be used to change the density.")))}h.isMDXComponent=!0}}]);