(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{1469:(e,s,t)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),!function(e,s){for(var t in s)Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}(s,{default:function(){return o},getImageProps:function(){return i}});let r=t(8229),l=t(8883),a=t(3063),n=r._(t(1193));function i(e){let{props:s}=(0,l.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Website-OakridgeAcademy-Preview/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,t]of Object.entries(s))void 0===t&&delete s[e];return{props:s}}let o=a.Image},4436:(e,s,t)=>{"use strict";t.d(s,{k5:()=>d});var r=t(2115),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(l),n=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?o(Object(t),!0).forEach(function(s){var r,l,a;r=e,l=s,a=t[s],(l=function(e){var s=function(e,s){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,s||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===s?String:Number)(e)}(e,"string");return"symbol"==typeof s?s:s+""}(l))in r?Object.defineProperty(r,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[l]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}function d(e){return s=>r.createElement(u,i({attr:c({},e.attr)},s),function e(s){return s&&s.map((s,t)=>r.createElement(s.tag,c({key:t},s.attr),e(s.child)))}(e.child))}function u(e){var s=s=>{var t,{attr:l,size:a,title:o}=e,d=function(e,s){if(null==e)return{};var t,r,l=function(e,s){if(null==e)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(s.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],!(s.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}(e,n),u=a||s.size||"1em";return s.className&&(t=s.className),e.className&&(t=(t?t+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,l,d,{className:t,style:c(c({color:e.color||s.color},s.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==a?r.createElement(a.Consumer,null,e=>s(e)):s(l)}},4817:(e,s,t)=>{Promise.resolve().then(t.bind(t,8983))},6654:(e,s,t)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"useMergedRef",{enumerable:!0,get:function(){return l}});let r=t(2115);function l(e,s){let t=(0,r.useRef)(null),l=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=t.current;e&&(t.current=null,e());let s=l.current;s&&(l.current=null,s())}else e&&(t.current=a(e,r)),s&&(l.current=a(s,r))},[e,s])}function a(e,s){if("function"!=typeof e)return e.current=s,()=>{e.current=null};{let t=e(s);return"function"==typeof t?t:()=>e(null)}}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},6766:(e,s,t)=>{"use strict";t.d(s,{default:()=>l.a});var r=t(1469),l=t.n(r)},8983:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var r=t(5155),l=t(2115),a=t(6766),n=t(9911),i=t(1485);function o(){let[e,s]=(0,l.useState)({name:"",email:"",phone:"",subject:"",message:""}),t=e=>{let{name:t,value:r}=e.target;s(e=>({...e,[t]:r}))};return(0,r.jsxs)("div",{className:"min-h-screen bg-white",children:[(0,r.jsxs)("div",{className:"relative py-24 bg-blue-900",children:[(0,r.jsx)("div",{className:"absolute inset-0 opacity-20 bg-[url('/images/pattern.svg')] bg-repeat"}),(0,r.jsx)("div",{className:"container mx-auto px-4 relative z-10",children:(0,r.jsxs)("div",{className:"max-w-3xl",children:[(0,r.jsx)("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:"Contact Us"}),(0,r.jsx)("p",{className:"text-xl text-blue-100 mb-8",children:"We're here to help and answer any questions you may have. Reach out to us and we'll respond as soon as we can."})]})})]}),(0,r.jsx)("div",{className:"py-16 bg-white",children:(0,r.jsx)("div",{className:"container mx-auto px-4",children:(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-12 items-start",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-3xl font-bold text-blue-900 mb-6",children:"Get In Touch"}),(0,r.jsx)("p",{className:"text-gray-600 mb-10",children:"We welcome your questions, comments, and feedback. Use the form or our contact information to get in touch with us."}),(0,r.jsxs)("div",{className:"space-y-6 mb-10",children:[(0,r.jsxs)("div",{className:"flex items-start",children:[(0,r.jsx)("div",{className:"bg-blue-100 rounded-full p-3 mr-4",children:(0,r.jsx)(n.Cab,{className:"text-blue-700 w-5 h-5"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-bold text-blue-900 mb-1",children:"Phone"}),(0,r.jsx)("p",{className:"text-gray-600",children:(0,r.jsx)("a",{href:"tel:".concat(i.xQ.phone),className:"hover:text-blue-700 transition-colors",children:i.xQ.phone})})]})]}),(0,r.jsxs)("div",{className:"flex items-start",children:[(0,r.jsx)("div",{className:"bg-blue-100 rounded-full p-3 mr-4",children:(0,r.jsx)(n.maD,{className:"text-blue-700 w-5 h-5"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-bold text-blue-900 mb-1",children:"Email"}),(0,r.jsx)("p",{className:"text-gray-600",children:(0,r.jsx)("a",{href:"mailto:".concat(i.xQ.email),className:"hover:text-blue-700 transition-colors",children:i.xQ.email})})]})]}),(0,r.jsxs)("div",{className:"flex items-start",children:[(0,r.jsx)("div",{className:"bg-blue-100 rounded-full p-3 mr-4",children:(0,r.jsx)(n.vq8,{className:"text-blue-700 w-5 h-5"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-bold text-blue-900 mb-1",children:"Address"}),(0,r.jsx)("p",{className:"text-gray-600",children:i.xQ.address})]})]}),(0,r.jsxs)("div",{className:"flex items-start",children:[(0,r.jsx)("div",{className:"bg-blue-100 rounded-full p-3 mr-4",children:(0,r.jsx)(n.w_X,{className:"text-blue-700 w-5 h-5"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-bold text-blue-900 mb-1",children:"Office Hours"}),(0,r.jsxs)("div",{className:"text-gray-600 space-y-1",children:[(0,r.jsxs)("p",{children:["Monday - Friday: ",i.xQ.hours.monday]}),(0,r.jsxs)("p",{children:["Saturday: ",i.xQ.hours.saturday]}),(0,r.jsxs)("p",{children:["Sunday: ",i.xQ.hours.sunday]})]})]})]})]}),(0,r.jsxs)("div",{className:"bg-gray-100 p-6 rounded-lg",children:[(0,r.jsx)("h3",{className:"font-bold text-blue-900 mb-3",children:"Connect With Us"}),(0,r.jsxs)("div",{className:"flex space-x-4",children:[(0,r.jsx)("a",{href:i.xQ.social.facebook,className:"bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors",children:(0,r.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"})})}),(0,r.jsx)("a",{href:i.xQ.social.twitter,className:"bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors",children:(0,r.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"})})}),(0,r.jsx)("a",{href:i.xQ.social.instagram,className:"bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors",children:(0,r.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"})})}),(0,r.jsx)("a",{href:i.xQ.social.youtube,className:"bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors",children:(0,r.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})})})]})]})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-8",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold text-blue-900 mb-6",children:"Send a Message"}),(0,r.jsxs)("form",{className:"space-y-4",onSubmit:e=>{e.preventDefault(),alert("Thank you for your message! We will respond shortly."),s({name:"",email:"",phone:"",subject:"",message:""})},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Full Name*"}),(0,r.jsx)("input",{type:"text",name:"name",value:e.name,onChange:t,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email Address*"}),(0,r.jsx)("input",{type:"email",name:"email",value:e.email,onChange:t,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Phone Number"}),(0,r.jsx)("input",{type:"tel",name:"phone",value:e.phone,onChange:t,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Subject*"}),(0,r.jsxs)("select",{name:"subject",value:e.subject,onChange:t,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[(0,r.jsx)("option",{value:"",children:"Select a subject"}),(0,r.jsx)("option",{value:"general",children:"General Inquiry"}),(0,r.jsx)("option",{value:"admissions",children:"Admissions Information"}),(0,r.jsx)("option",{value:"tour",children:"Schedule a Campus Tour"}),(0,r.jsx)("option",{value:"event",children:"Suggest an Event"}),(0,r.jsx)("option",{value:"feedback",children:"Feedback"}),(0,r.jsx)("option",{value:"other",children:"Other"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Message*"}),(0,r.jsx)("textarea",{name:"message",value:e.message,onChange:t,rows:5,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{type:"submit",className:"w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md shadow transition-colors",children:"Send Message"})})]})]})})]})})}),(0,r.jsx)("div",{className:"py-16 bg-gray-50",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold text-blue-900 mb-10 text-center",children:"Visit Our Campus"}),(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:[(0,r.jsxs)("div",{className:"h-[400px] relative",children:[(0,r.jsx)(a.default,{src:"https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?q=80&w=1731&auto=format&fit=crop",alt:"Campus Map",fill:!0,className:"object-cover"}),(0,r.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-blue-900/50",children:(0,r.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-xl max-w-md text-center",children:[(0,r.jsx)("h3",{className:"text-xl font-bold text-blue-900 mb-2",children:"Campus Tour"}),(0,r.jsx)("p",{className:"text-gray-600 mb-4",children:"We invite you to tour our beautiful campus. Our admissions team would be happy to show you around."}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{onClick:()=>{let e=document.querySelector('select[name="subject"]');e&&(e.value="tour",e.dispatchEvent(new Event("change")),window.scrollTo({top:e.getBoundingClientRect().top+window.scrollY-200,behavior:"smooth"}))},className:"inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-md transition-colors",children:"Schedule a Tour"})})]})})]}),(0,r.jsx)("div",{className:"p-6",children:(0,r.jsxs)("div",{className:"flex flex-col md:flex-row md:justify-between md:items-center",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-bold text-blue-900 mb-1",children:"Oakridge Academy"}),(0,r.jsx)("p",{className:"text-gray-600",children:i.xQ.address})]}),(0,r.jsxs)("a",{href:"https://maps.google.com/?q=".concat(encodeURIComponent(i.xQ.address)),target:"_blank",rel:"noopener noreferrer",className:"mt-4 md:mt-0 inline-flex items-center text-blue-700 font-medium hover:text-blue-900 transition-colors",children:[(0,r.jsx)("span",{children:"Get Directions"}),(0,r.jsx)("svg",{className:"ml-2 w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})]})})]})]})}),(0,r.jsx)("div",{className:"py-16 bg-white",children:(0,r.jsx)("div",{className:"container mx-auto px-4",children:(0,r.jsxs)("div",{className:"max-w-3xl mx-auto",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold text-blue-900 mb-10 text-center",children:"Frequently Asked Questions"}),(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsxs)("div",{className:"bg-gray-50 p-6 rounded-lg",children:[(0,r.jsx)("h3",{className:"text-lg font-bold text-blue-900 mb-2",children:"What are your school hours?"}),(0,r.jsx)("p",{className:"text-gray-600",children:"Our school day runs from 8:00 AM to 3:30 PM, Monday through Friday. The campus opens at 7:30 AM for early drop-off and remains open until 5:00 PM for after-school activities and programs."})]}),(0,r.jsxs)("div",{className:"bg-gray-50 p-6 rounded-lg",children:[(0,r.jsx)("h3",{className:"text-lg font-bold text-blue-900 mb-2",children:"How do I apply for admission?"}),(0,r.jsxs)("p",{className:"text-gray-600",children:["You can start the application process by visiting our ",(0,r.jsx)("a",{href:"/admissions/apply",className:"text-blue-700 hover:underline",children:"Apply Now"})," page. The admissions process includes completing an application form, submitting required documents, and scheduling an interview."]})]}),(0,r.jsxs)("div",{className:"bg-gray-50 p-6 rounded-lg",children:[(0,r.jsx)("h3",{className:"text-lg font-bold text-blue-900 mb-2",children:"Do you offer financial aid or scholarships?"}),(0,r.jsx)("p",{className:"text-gray-600",children:"Yes, we offer both need-based financial aid and merit scholarships. Families can apply for financial assistance during the admissions process. Please contact our admissions office for more information."})]}),(0,r.jsxs)("div",{className:"bg-gray-50 p-6 rounded-lg",children:[(0,r.jsx)("h3",{className:"text-lg font-bold text-blue-900 mb-2",children:"What extracurricular activities do you offer?"}),(0,r.jsx)("p",{className:"text-gray-600",children:"We offer a wide range of extracurricular activities including sports, arts, music, clubs, and academic competitions. Students are encouraged to participate in activities that align with their interests and help them develop new skills."})]}),(0,r.jsxs)("div",{className:"bg-gray-50 p-6 rounded-lg",children:[(0,r.jsx)("h3",{className:"text-lg font-bold text-blue-900 mb-2",children:"How can I schedule a campus tour?"}),(0,r.jsxs)("p",{className:"text-gray-600",children:["You can schedule a campus tour by contacting our admissions office directly, using the contact form on this page, or calling us at ",i.xQ.phone,". Tours are available on weekdays during school hours."]})]})]})]})})})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[6711,3063,1485,8441,1684,7358],()=>s(4817)),_N_E=e.O()}]);