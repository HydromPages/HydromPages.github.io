"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4004],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>p});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(o),p=r,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||a;return o?n.createElement(m,i(i({ref:t},h),{},{components:o})):n.createElement(m,i({ref:t},h))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7685:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={slug:"Cloud-Constraints",title:"Cloud compulsion and why it's a bad idea",authors:"eberle",tags:["hello"]},i=void 0,s={permalink:"/pt/blog/Cloud-Constraints",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-10-14-blog-post-Cloud-Compulsion.md",source:"@site/blog/2022-10-14-blog-post-Cloud-Compulsion.md",title:"Cloud compulsion and why it's a bad idea",description:"Numerous cloud services can connect to this hydrometer, but none of them are mandatory for its operation. The use of free protocols such as HTTP/TCP and MQTT are implemented in order to allow the use of this Hydrometer to be as flexible as possible.",date:"2022-10-14T00:00:00.000Z",formattedDate:"14 de outubro de 2022",tags:[{label:"hello",permalink:"/pt/blog/tags/hello"}],readingTime:6.46,hasTruncateMarker:!0,authors:[{name:"Tjorben Eberle",title:"General Manager Bonorum UG",url:"https://github.com/TjGer22",imageURL:"https://github.com/TjGer22.png",key:"eberle"}],frontMatter:{slug:"Cloud-Constraints",title:"Cloud compulsion and why it's a bad idea",authors:"eberle",tags:["hello"]},prevItem:{title:"Advantages of the Hydrom",permalink:"/pt/blog/Advantages-Hydrom"},nextItem:{title:"Hydrom Vs. Float Vs. Tilt\u2122",permalink:"/pt/blog/Comparison-competitors-Page"}},l={authorsImageUrls:[void 0]},c=[],h={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Numerous cloud services can connect to this hydrometer, but none of them are mandatory for its operation. The use of free protocols such as HTTP/TCP and MQTT are implemented in order to allow the use of this Hydrometer to be as flexible as possible.\nThis article explains why."),(0,r.kt)("p",null,"Property\nThe hardware does not belong to you, but to the company of the cloud provider. If these cloud services are switched off then the product becomes an expensive burden."),(0,r.kt)("p",null,"Pricing\nOften cloud services are offered for free at first and when a dependency is established, the price is drastically increased."),(0,r.kt)("p",null,"Stability\nIf the Internet is unstable or fails, the device will not work."),(0,r.kt)("p",null,"Flexibility\nWhen using open source protocols like MQTT, HTTP, TCP ect. any number of pereferia can be implemented"),(0,r.kt)("p",null,"Data protection\nDue to the centralized storage of data, it can easily fall victim to data theft."),(0,r.kt)("p",null,"Lack of transparency\nDue to abstraction, it is no longer possible for a customer to see exactly where his data is located and how it is handled. Industry-specific requirements for securitychecks become very difficult to implement. This creates the basis for all the problems mentioned above. This aspect is largely blamed for the most extensive creditcard recall to date."),(0,r.kt)("p",null,"Mixing of customers/services/data\nBy sharing resources, a commingling of customers, services and data takes place, whereby unequally classified assets are treated in the same way. If one assetloses its integrity, it can directly impact the other assets. Assurances by a vendor to enforce safe and secure handling of data often cannot be verified due to lack oftransparency."),(0,r.kt)("p",null,"Dependence on the vendor\nOne is directly dependent on the service provider\u2019s offering and quality. Service failures can have an immediate impact on productivity."),(0,r.kt)("p",null,"Difficulty of backups\nCreating backups could be significantly more difficult. Only with considerable effort can they be done independently. If one does not want to accept this, one isagain dependent on the provider for them. It is often difficult to implement this process competently and in compliance with industry/company-specific plans."),(0,r.kt)("p",null,"Difficulty with migration\nDue to complex dependencies and incompatibilities, switching to another provider can only be possible with a great deal of effort. The dependency on the partner leads to constant inertia. In the event of differences in cooperation, one is subject to the arbitrariness of the partner for a long time."),(0,r.kt)("p",null,"Legal personal responsibility\nA company cannot completely absolve itself of personal responsibility by outsourcing data and processes. Even a structured evaluation and review of the partneras well as a solid contractual agreement do not allow such an abdication of responsibility."),(0,r.kt)("p",null,"Central point of attack\nAlthough cloud computing is understood as distributed computing, this creates a central point of attack. The more mechanisms areoutsourced to a specific cloud, the more focused an attacker can be on this very construct. The compromise of the cloud theoretically results in the compromise ofall outsourced mechanisms. "),(0,r.kt)("p",null,"Internet is necessary\nThere are many brewing sites that don\u2019t have internet, the garage, the garden shed, the pazelle or or or. The brewing progress should also be able to be tracked here"),(0,r.kt)("p",null,"IT Security\nThe ability to reload firmware at any time without the user's consent may lead to the introduction of malicious code into the network by a corrupted company, criminal employee or intruder."),(0,r.kt)("p",null,"We are living in times when technology has turned into an essential part of our existence and there are many services that make use of that technology in order to enhance our lives. The use of cloud technology is one of those outstanding technological advances that have proven to be very useful, but they can also become very restrictive.\nToday, we are going to talk about the cloud compulsion phenomenon and how this affects those who purchase hydrometers that use cloud technology exclusively from a specific operator.\nModern gadgets and devices in the cloud\nCameras, sensors, speakers, hydrometers, pretty much any type of modern device is connected to a cloud operator. The issue with this is that no one is ever going to be able to predict what will happen in the future and a cloud operator could close its doors without warning. This may not have been a common thing to see a few years ago, but the world has turned into a much more volatile and unpredictable place as far as the business landscape goes.\nThe problem with this scenario is that the device that was connected exclusively to that particular cloud service is now completely unable to function. This is the principle of cloud compulsion and it can be a very serious issue that turns your investment on certain hardware choices into a useless pile of expensive paperweights.\nThis is one of the reasons why consumers need to become more aware of this type of issue. It is essential to find ways to ensure that they can purchase gadgets and devices that are not restricted to any specific cloud operator or service. This is something that has translated into a serious loss for those who have relied on a specific cloud service for the connectivity of their hardware.\nSometimes people are quick to jump into contracts with specific cloud service providers and they trust that their services will be available anytime they need them. Unfortunately, due to how volatile the modern world can be, this is not going to be so simple and the sudden disappearance of a cloud operator is not something that seems unlikely.\nHydrom is the ultimate hydrometer solution with no cloud constraints\nThose who seek to own a versatile hydrometer that offers more features and flexibility than all existing competitors are going to find Hydrom to be the perfect choice. The trending IoT approach is to connect devices to specific could services providers and this creates a very limiting situation. This is the main reason why the other options available are not going to be as viable and reliable as Hydrom.\nNumerous cloud services can connect to this hydrometer, but none of them are mandatory for its operation. The use of free protocols such as HTTP/TCP and MQTT are implemented in order to allow the use of this Hydrometer to be as flexible as possible. With so many different cloud systems being able to connect to Hydrom, the longevity of the device is enhanced.\nThe advantages of Hydrom are numerous and it is the only device in existence that combines features such as a calibration wizard, Wlan, Bluetooth, support from several cloud services, web interface for settings, MQTT, HTTP, TCP messages and much more.\nHydrom reaches an even higher level of value thanks to the low energy consumption and the firmware updates that ensure the stability and reliability of the device. It also offers a higher capacity than competitor devices due to the second battery that allows for longer periods of use.\nThis is the kind of product that gives the owner peace of mind regarding how long it will be functional. With such a unique and flexible approach, it is the most solid modern choice available. A truly powerful and highly efficient hydrometer.\nFinal thoughts on the Hydrom Hydrometer\nBeing that we have arrived into a whole new era in the modern world, it is important to be able to purchase items and devices that are going to be useful for as long as possible. This is going to be essential for those who seek to get the best results out of their investments.\nWith that in mind, it makes perfect sense to consider the use of the Hydrom hydrometer due to how flexible it is when it comes to how it connects to cloud services.\nCheck out the details on this powerful and innovative hydrometer that has proven to be one-step ahead of the existing competition!"))}d.isMDXComponent=!0}}]);