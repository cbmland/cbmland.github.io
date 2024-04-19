"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[233],{86396:function(e,t,r){var a=r(85893),s=r(56626),n=r(18635),c=r(60235),l=r(41664),i=r.n(l),o=r(26963);t.Z=e=>{let{post:t}=e,{summary_length:r,blog_folder:l}=s.settings,{base_url:d}=s.site,{meta_author:m}=s.metadata,x=t.frontmatter.author?t.frontmatter.author:m;return(0,a.jsxs)("div",{className:"post",children:[(0,a.jsx)(i(),{href:"".concat(d,"/").concat(l,"/").concat(t.slug),className:"block hover:text-primary",children:(0,a.jsx)("div",{className:"relative h-[208px] overflow-hidden rounded-xl",children:t.frontmatter.image&&(0,a.jsx)(n.Z,{className:"",src:t.frontmatter.image,alt:t.frontmatter.title,width:405,height:208})})}),(0,a.jsx)("h3",{className:"h5 mb-2 mt-4",children:(0,a.jsx)(i(),{href:"".concat(d,"/").concat(l,"/").concat(t.slug),className:"block hover:text-primary",children:t.frontmatter.title})}),(0,a.jsxs)("ul",{className:" flex items-center space-x-4 p-2 pb-1",children:[(0,a.jsx)("li",{children:(0,a.jsxs)(i(),{className:"inline-flex items-center font-secondary text-xs leading-3",href:"".concat(d,"/about"),children:[(0,a.jsx)(o.q1E,{className:"mr-1.5"}),x]})}),(0,a.jsxs)("li",{className:"inline-flex items-center font-secondary text-xs leading-3",children:[(0,a.jsx)(o.tpH,{className:"mr-1.5"}),(0,c.Z)(t.frontmatter.date)]})]}),(0,a.jsx)("ul",{className:" flex items-center space-x-2 pb-4 p-0",children:t.frontmatter.categories.map((e,t)=>(0,a.jsx)("li",{className:"ml-2 inline-flex rounded-[35px] bg-primary px-2 text-white text-sm ",children:(0,a.jsx)(i(),{className:"capitalize truncate",href:"".concat(d,"/categories/").concat(e.replace(" ","-")),children:e})},"tag-"+t))}),(0,a.jsx)("p",{children:t.content.slice(0,Number(r))}),(0,a.jsx)(i(),{className:"btn btn-outline-primary mt-4",href:"".concat(d,"/").concat(l,"/").concat(t.slug),children:"Read More"})]})}},27431:function(e,t,r){r.d(t,{Z:function(){return k}});var a=r(85893),s=r(56626),n=r(51639),c=r(18635),l=r(11475),i=r(67294),o=r(26963),d=function(e){let{status:t,message:r,onValidated:s}=e,[n,c]=(0,i.useState)(""),l=()=>{c("")};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("form",{action:"#",className:"py-6",onSubmit:e=>{e.preventDefault(),n&&n.indexOf("@")>-1&&s({EMAIL:n}),l()},children:[(0,a.jsxs)("fieldset",{className:"relative",children:[(0,a.jsx)("input",{className:"newsletter-input form-input h-12 w-full rounded-3xl border-none bg-theme-light px-5 py-3 pr-12 text-dark placeholder:text-xs dark:bg-darkmode-theme-dark",type:"text",placeholder:"Type And Hit Enter",onChange:e=>c(e.target.value)}),(0,a.jsx)(o.SRX,{className:"absolute top-1/2 right-5 -translate-y-1/2 text-xl transition duration-75"})]}),(0,a.jsx)("button",{className:"d-block  btn btn-primary mt-4 w-full",type:"submit",children:"Sign In"})]}),"sending"===t&&(0,a.jsx)("div",{className:"mt-4 text-primary",children:"sending..."}),"error"===t&&(0,a.jsx)("div",{className:"mt-4 text-red-700",dangerouslySetInnerHTML:{__html:r}}),"success"===t&&(0,a.jsx)("div",{className:"mt-4 text-green-700",children:"Subscribed !"})]})},m=r(14166),x=r(60235),h=r(3338),b=r(9538),p=r(41664),f=r.n(p),u=r(14711);let{blog_folder:j}=s.settings,{about:g,featured_posts:N,newsletter:y}=s.widgets,{base_url:v}=s.site;var k=e=>{let{posts:t,categories:r,className:s}=e,p=(0,h.d)(t),k=p.filter(e=>e.frontmatter.featured),[w,Z]=(0,i.useState)(!0);return(0,a.jsxs)("aside",{className:"".concat(s," px-0 lg:px-6 lg:col-4"),children:[g.enable&&(0,a.jsxs)("div",{className:"relative rounded border border-border p-6 text-center dark:border-darkmode-border",children:[(0,a.jsx)(c.Z,{className:"-z-[1]",src:"/images/map.svg",fill:!0,alt:"bg-map"}),(0,a.jsx)(l.Z,{}),(0,b.gI)(g.content,"p","mt-8"),(0,a.jsx)(m.Z,{className:"socials sidebar-socials mt-6 justify-center",source:n})]}),r.enable&&(0,a.jsxs)("div",{className:"mt-6 rounded border border-border p-6 dark:border-darkmode-border",children:[(0,a.jsx)("h4",{className:"section-title mb-12 text-center",children:N.title}),(0,a.jsx)("ul",{children:r.map((e,t)=>(0,a.jsxs)("li",{className:"relative mb-2 flex items-center justify-between pl-6 text-[16px] font-bold capitalize text-dark dark:text-darkmode-light ".concat(t!==r.length-1&&"border-b border-border  dark:border-darkmode-border"),children:[(0,a.jsxs)("svg",{className:"absolute left-0 top-2.5",width:"20px",height:"20px",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M11.7318 9.35984C12.0854 8.93556 12.7159 8.87824 13.1402 9.2318C13.5645 9.58537 13.6218 10.2159 13.2682 10.6402L8.26825 16.6402C7.91468 17.0645 7.28412 17.1218 6.85984 16.7682C6.43556 16.4147 6.37824 15.7841 6.7318 15.3598L11.7318 9.35984Z",fill:"#2ba283"}),(0,a.jsx)("path",{d:"M6.7318 4.64021C6.37824 4.21593 6.43556 3.58537 6.85984 3.2318C7.28412 2.87824 7.91468 2.93556 8.26825 3.35984L13.2682 9.35984C13.6218 9.78412 13.5645 10.4147 13.1402 10.7682C12.7159 11.1218 12.0854 11.0645 11.7318 10.6402L6.7318 4.64021Z",fill:"#2ba283"})]}),(0,a.jsxs)(f(),{className:"py-2",href:"".concat(v,"/categories/").concat(e.name),children:[e.name.replace("-"," "),(0,a.jsx)("span",{className:"absolute top-1/2 right-0 -translate-y-1/2 text-[10px] text-gray-500",children:e.posts})]})]},t))})]}),N.enable&&(0,a.jsxs)("div",{className:"mt-0 rounded border border-border p-6 dark:border-darkmode-border",children:[(0,a.jsx)("h4",{className:"section-title mb-12 text-center",children:"Featured"}),(0,a.jsxs)("div",{className:"mb-12 flex items-center justify-center",children:[(0,a.jsx)("button",{className:"btn px-5 py-2 ".concat(w?"btn-outline-primary":"btn-primary"),onClick:()=>Z(!1),children:"Featured"}),(0,a.jsx)("button",{className:"btn ml-3  px-5 py-2 ".concat(w?"btn-primary":"btn-outline-primary"),onClick:()=>Z(!0),children:"Recent"})]}),w?p.slice(0,N.showPost).map((e,t,r)=>(0,a.jsxs)("div",{className:"flex items-center ".concat(t!==r.length-1&&"mb-6 border-b border-border pb-6 dark:border-darkmode-border"),children:[e.frontmatter.image&&(0,a.jsx)(f(),{href:"".concat(v,"/").concat(j,"/").concat(e.slug),className:"block hover:text-primary",children:(0,a.jsx)(c.Z,{className:"mr-3 h-[85px] w-[85px] rounded-xl object-cover",src:e.frontmatter.image,alt:e.frontmatter.title,width:105,height:85})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"h5 mb-2",children:(0,a.jsx)(f(),{href:"".concat(v,"/").concat(j,"/").concat(e.slug),className:"block hover:text-primary",children:e.frontmatter.title})}),(0,a.jsxs)("p",{className:"inline-flex items-center font-secondary text-xs",children:[(0,a.jsx)(o.tpH,{className:"mr-1.5"}),(0,x.Z)(e.frontmatter.date)]})]})]},"key-".concat(t))):k.slice(0,N.showPost).map((e,t,r)=>(0,a.jsxs)("div",{className:"flex items-center ".concat(t!==r.length-1&&"pb-6 mb-6 border-b dark:border-b-darkmode-border"),children:[e.frontmatter.image&&(0,a.jsx)(f(),{href:"".concat(v,"/").concat(j,"/").concat(e.slug),className:"block hover:text-primary",children:(0,a.jsx)(c.Z,{className:"mr-3 h-[85px] w-[85px] rounded-xl object-cover",src:e.frontmatter.image,alt:e.frontmatter.title,width:105,height:85})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"h5 mb-2",children:(0,a.jsx)(f(),{href:"".concat(v,"/").concat(j,"/").concat(e.slug),className:"block hover:text-primary",children:e.frontmatter.title})}),(0,a.jsxs)("p",{className:"inline-flex items-center font-secondary text-xs",children:[(0,a.jsx)(o.tpH,{className:"mr-1.5"}),(0,x.Z)(e.frontmatter.date)]})]})]},"key-".concat(t)))]}),y.enable&&(0,a.jsxs)("div",{className:"mt-6  rounded border border-border p-6 text-center dark:border-darkmode-border",children:[(0,a.jsx)("h4",{className:"section-title",children:y.title}),(0,a.jsx)("p",{className:"mt-10 text-xs",children:y.content}),(0,a.jsx)(u.Z,{url:y.malichip_url,render:e=>{let{subscribe:t,status:r,message:s}=e;return(0,a.jsx)(d,{onValidated:e=>t(e),status:r,message:s})}}),(0,a.jsxs)("p",{className:"text-xs",children:["By Singing Up, You Agree To",(0,a.jsx)(f(),{href:y.privacy_policy_page,className:"ml-1 text-primary",children:"Privacy Policy"})]})]})]})}},60235:function(e,t,r){var a=r(70722);t.Z=e=>(0,a.formatInTimeZone)(e,"Asia/Hong_Kong","yyyy-MM-dd")},3338:function(e,t,r){r.d(t,{d:function(){return a}});let a=e=>e.sort((e,t)=>new Date(t.frontmatter.date&&t.frontmatter.date)-new Date(e.frontmatter.date&&e.frontmatter.date))}}]);