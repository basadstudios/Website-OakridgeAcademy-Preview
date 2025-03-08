(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4904],{1469:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return n},getImageProps:function(){return d}});let s=a(8229),r=a(8883),i=a(3063),l=s._(a(1193));function d(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Website-OakridgeAcademy-Preview/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let n=i.Image},2045:(e,t,a)=>{"use strict";a.d(t,{default:()=>o});var s=a(5155),r=a(2115),i=a(760),l=a(6084),d=a(6766),n=a(4315);function c(e){let{item:t,variant:a="grid",className:r=""}=e,i="grid"===a;return(0,s.jsxs)(l.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},whileHover:{y:-5,boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},className:"\n        bg-white border border-gray-100 rounded-lg overflow-hidden\n        transition-all duration-300 ease-in-out\n        hover:border-primary-200\n        ".concat(i?"flex flex-col":"flex flex-col md:flex-row","\n        ").concat(t.available?"":"opacity-60","\n        ").concat(r,"\n      "),children:[t.image&&(0,s.jsxs)("div",{className:"\n          relative overflow-hidden\n          ".concat(i?"h-52 w-full":"h-40 md:h-auto md:w-1/3","\n        "),children:[(0,s.jsx)(d.default,{src:t.image,alt:t.name,fill:!0,sizes:i?"(max-width: 768px) 100vw, 33vw":"(max-width: 768px) 100vw, 25vw",className:"object-cover transition-transform duration-700 hover:scale-110"}),t.featured&&(0,s.jsx)("div",{className:"absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md",children:"Chef's Special"})]}),(0,s.jsxs)("div",{className:"\n        flex flex-col p-6 \n        ".concat(t.image?i?"w-full":"md:w-2/3":"w-full","\n      "),children:[(0,s.jsxs)("div",{className:"flex justify-between items-start mb-2",children:[(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsx)("h3",{className:"text-xl font-serif font-bold text-gray-800 mb-1 pr-2",children:t.name}),t.featured&&!t.image&&(0,s.jsxs)("div",{className:"flex items-center text-amber-500 text-xs font-medium mb-1",children:[(0,s.jsx)(n.gt3,{className:"mr-1"}),(0,s.jsx)("span",{children:"Chef's Special"})]})]}),(0,s.jsx)("div",{className:"flex-shrink-0",children:(0,s.jsxs)("span",{className:"font-bold text-primary-600 text-lg",children:["$",t.price.toFixed(2)]})})]}),(0,s.jsx)("div",{className:"border-b border-dashed border-gray-200 w-full mb-3"}),(0,s.jsx)("p",{className:"text-gray-600 text-sm leading-relaxed mb-4",children:t.description}),(0,s.jsx)("div",{className:"mt-auto",children:(0,s.jsxs)("div",{className:"flex flex-wrap gap-2",children:[t.vegetarian&&(0,s.jsxs)("div",{className:"flex items-center bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full",children:[(0,s.jsx)(n.sHz,{className:"mr-1 text-green-600",size:10}),(0,s.jsx)("span",{children:"Vegetarian"})]}),t.glutenFree&&(0,s.jsxs)("div",{className:"flex items-center bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full",children:[(0,s.jsx)(n.v8s,{className:"mr-1 text-blue-600",size:10}),(0,s.jsx)("span",{children:"Gluten-Free"})]}),t.spicy&&(0,s.jsxs)("div",{className:"flex items-center bg-red-50 text-red-700 text-xs px-2 py-1 rounded-full",children:[(0,s.jsx)(n.JNq,{className:"mr-1 text-red-600",size:10}),(0,s.jsx)("span",{children:"Spicy"})]}),!t.available&&(0,s.jsx)("div",{className:"bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full",children:"Currently Unavailable"})]})})]})]})}function o(e){let{itemsByCategory:t}=e,[a,d]=(0,r.useState)(!1),[n,o]=(0,r.useState)("");return(0,r.useEffect)(()=>{let e=()=>{window.scrollY>400?d(!0):d(!1);let e=document.querySelectorAll(".menu-category"),t="";e.forEach(e=>{let a=e.getBoundingClientRect().top,s=e.id;a<200&&(t=s)}),o(t)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"mt-12 mb-16",children:(0,s.jsx)("div",{className:"flex flex-wrap justify-center gap-4",children:t.map(e=>(0,s.jsx)("a",{href:"#".concat(e.id),className:"px-6 py-3 bg-white rounded-full shadow-sm text-gray-800 hover:text-primary-600 hover:shadow-md transition-all duration-300 font-medium",children:e.name},e.id))})}),(0,s.jsx)(i.N,{children:a&&(0,s.jsx)(l.P.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:100},transition:{duration:.3},className:"fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:block",children:(0,s.jsx)("div",{className:"bg-white rounded-lg shadow-lg p-3",children:(0,s.jsx)("ul",{className:"space-y-3",children:t.map(e=>(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#".concat(e.id),className:"block px-3 py-2 text-sm rounded-md transition-all duration-200 ".concat(n===e.id?"bg-primary-500 text-white font-medium":"text-gray-700 hover:bg-gray-100"),children:e.name})},e.id))})})})}),(0,s.jsx)("div",{className:"space-y-24",children:t.map(e=>{var t;return(0,s.jsxs)("div",{id:e.id,className:"scroll-mt-32 menu-category",children:[(0,s.jsxs)("div",{className:"mb-10 text-center",children:[(0,s.jsx)("h2",{className:"text-4xl font-serif font-bold text-gray-800 mb-3",children:e.name}),(0,s.jsx)("div",{className:"h-1 w-24 bg-primary-500 mx-auto"}),(0,s.jsx)("p",{className:"text-gray-600 mt-4 max-w-2xl mx-auto",children:e.description})]}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:null===(t=e.items)||void 0===t?void 0:t.map(e=>(0,s.jsx)(c,{item:e,variant:"list"},e.id))})]},e.id)})}),(0,s.jsxs)("div",{className:"mt-20 text-center border-t border-gray-200 pt-12",children:[(0,s.jsx)("p",{className:"text-gray-600 italic mb-4",children:"All dishes are prepared fresh to order. Please inform your server of any allergies or dietary restrictions."}),(0,s.jsx)("p",{className:"text-gray-500 text-sm",children:"Prices are subject to change. A 20% gratuity will be added to parties of 6 or more."})]})]})}},6766:(e,t,a)=>{"use strict";a.d(t,{default:()=>r.a});var s=a(1469),r=a.n(s)},7499:(e,t,a)=>{Promise.resolve().then(a.bind(a,4775)),Promise.resolve().then(a.bind(a,2045))}},e=>{var t=t=>e(e.s=t);e.O(0,[6711,4777,6446,6874,7296,3063,1485,4775,8441,1684,7358],()=>t(7499)),_N_E=e.O()}]);