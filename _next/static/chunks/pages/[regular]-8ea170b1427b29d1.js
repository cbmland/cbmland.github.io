(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[493],{32231:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[regular]",function(){return r(91956)}])},89031:function(e,t,r){"use strict";var s=r(11527),l=r(76012);let a=e=>{let{data:t}=e,{frontmatter:r,content:a}=t;return(0,s.jsx)("section",{className:"section",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"flex h-[40vh] items-center justify-center",children:(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("h1",{className:"mb-4",children:r.title}),(0,l.gI)(a,"div","content")]})})})})};t.Z=a},82249:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var s=r(11527),l=r(50959);let a=e=>{let{title:t,children:r,className:a}=e,[c,n]=(0,l.useState)(!1);return(0,s.jsxs)("div",{className:"rounded border border-border dark:border-darkmode-border ".concat(a),children:[(0,s.jsxs)("button",{className:"relative block w-full bg-theme-light px-4 py-3 text-left text-dark dark:bg-darkmode-theme-dark dark:text-darkmode-light",onClick:()=>n(!c),children:[t,(0,s.jsx)("svg",{className:"absolute right-4 top-1/2 m-0 h-4 w-4 -translate-y-1/2 ".concat(c&&"rotate-180"),x:"0px",y:"0px",viewBox:"0 0 512.011 512.011",xmlSpace:"preserve",children:(0,s.jsx)("path",{fill:"currentColor",d:"M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"})})]}),(0,s.jsx)("div",{className:"px-4 py-3 ".concat(!c&&"hidden"),children:r})]})};var c=r(17699),n=r.n(c);let d=e=>{let{href:t,type:r,rel:l,children:a}=e;return(0,s.jsx)(n(),{href:t,target:"_blank",rel:"noopener noreferrer ".concat(l?"follow"===l?"":l:"nofollow"),className:"btn me-4 mb-4 ".concat("outline"===r?"btn-outline-primary":"btn-primary"," border-primary hover:text-white hover:no-underline"),children:a})};var i=r(61353),o=r(72897);let m=e=>{let{children:t,language:r}=e;return(0,s.jsx)(i.Z,{language:r,style:o.Vg,children:t})};var x=r(46213);r(37526);let h=e=>{let{id:t,title:r,...l}=e;return(0,s.jsx)("div",{className:"overflow-hidden rounded",children:(0,s.jsx)(x.Z,{id:t,title:r,...l})})};var u={Button:d,Accordion:a,Video:function(e){let{title:t,width:r=500,height:l="auto",src:a,...c}=e;return(0,s.jsxs)("video",{className:"overflow-hidden rounded",width:r,height:l,controls:!0,...c,children:[(0,s.jsx)("source",{src:a.match(/^http/)?a:"/videos/".concat(a),type:"video/mp4"}),t]})},Tab:function(e){let{children:t}=e;return(0,s.jsx)("li",{className:"tab-item my-0 hidden",children:t})},Tabs:function(e){let{children:t}=e,r=(0,l.useRef)(null),a=(e,t)=>{let s=[...e.currentTarget.parentElement.children],l=[...r.current.children],a=l.find(e=>!e.classList.contains("hidden")),c=s.find(e=>e.classList.contains("active-tab"));a!==l[t]&&(c.classList.remove("active-tab"),e.currentTarget.classList.add("active-tab"),a.classList.add("hidden"),l[t].classList.remove("hidden"))};return(0,l.useEffect)(()=>{[...r.current.children][0].classList.remove("hidden")},[]),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("ul",{className:"mb-0 flex list-none items-center space-x-4 pl-0",children:t.map((e,t)=>(0,s.jsx)("li",{className:" m-0 cursor-pointer rounded px-8 py-3 font-bold  text-dark dark:text-darkmode-light ".concat(0===t&&"active-tab"),onClick:e=>a(e,t),children:e.props.name},t))}),(0,s.jsx)("ul",{className:"mt-1 mb-0 list-none rounded bg-theme-light p-6 dark:bg-darkmode-theme-dark",ref:r,children:t})]})},Notice:function(e){let{type:t,children:r}=e;return(0,s.jsxs)("div",{className:"notice ".concat(t," relative mb-8"),children:[(0,s.jsxs)("div",{className:"notice-head absolute top-0 left-0 z-10 flex h-[30px] w-full items-center px-3",children:[(0,s.jsx)("svg",{width:"16px",height:"16px",viewBox:"0 0 512 512",children:(0,s.jsx)("path",{fill:"#fff",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"})}),(0,s.jsx)("p",{className:"my-0 ml-1.5 text-base capitalize text-white dark:text-white",children:t})]}),(0,s.jsx)("div",{className:"notice-body my-0 p-3 pt-[40px] dark:text-darkmode-light",children:r})]})},Code:m,Youtube:h}},91956:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return v},default:function(){return g}});var s=r(11527),l=r(89031),a=r(76012),c=r(82249),n=r(93555),d=r(15809),i=r.n(d);let o=e=>{let{data:t}=e,{frontmatter:r,mdxContent:l}=t,{title:d,image:o,education:m,experience:x}=r;return(0,s.jsx)("section",{className:"section mt-16",children:(0,s.jsx)("div",{className:"container text-center",children:(0,s.jsxs)("div",{className:"slim-container",children:[o&&(0,s.jsx)("div",{className:"mb-8",children:(0,s.jsx)(i(),{src:o,width:1298,height:616,alt:d,className:"rounded-lg",priority:!0})}),(0,a.gI)(d,"h1","h1 text-left lg:text-[55px] mt-12"),(0,s.jsx)("div",{className:"content text-left",children:(0,s.jsx)(n.R,{...l,components:c.Z})})]})})})};var m=r(625),x=r(17699),h=r.n(x),u=r(49711),p=r(31401),j=r(65702);let b=e=>{let{data:t}=e,{frontmatter:r}=t,{title:l,form_action:c,phone:n,mail:d,location:i}=r;return(0,s.jsx)("section",{className:"section lg:mt-16",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"row relative pb-16",children:[(0,s.jsx)(j.Z,{className:"-z-[1] object-cover object-top",src:"/images/map.svg",fill:"true",alt:"map bg",priority:!0}),(0,s.jsx)("div",{className:"lg:col-6",children:(0,a.gI)(l,"h1","h1 my-10 lg:my-11 lg:pt-11 text-center lg:text-left lg:text-[64px]")}),(0,s.jsxs)("div",{className:"contact-form-wrapper rounded border border-border p-6 dark:border-darkmode-border lg:col-6",children:[(0,s.jsxs)("h2",{children:["Send Us A",(0,s.jsxs)("span",{className:"ml-1.5 inline-flex items-center text-primary",children:["Message",(0,s.jsx)(u.UE1,{})]})]}),(0,s.jsxs)("form",{className:"contact-form mt-12",method:"POST",action:c,children:[(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsxs)("label",{className:"mb-2 block font-secondary",htmlFor:"name",children:["Full name",(0,s.jsx)("small",{className:"font-secondary text-sm text-primary",children:"*"})]}),(0,s.jsx)("input",{className:"form-input w-full",name:"name",type:"text",placeholder:"Thomas Milano",required:!0})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsxs)("label",{className:"mb-2 block font-secondary",htmlFor:"email",children:["Email Address",(0,s.jsx)("small",{className:"font-secondary text-sm text-primary",children:"*"})]}),(0,s.jsx)("input",{className:"form-input w-full",name:"email",type:"email",placeholder:"example@gmail.com",required:!0})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsxs)("label",{className:"mb-2 block font-secondary",htmlFor:"subject",children:["Subject",(0,s.jsx)("small",{className:"font-secondary text-sm text-primary",children:"*"})]}),(0,s.jsx)("input",{className:"form-input w-full",name:"subject",type:"text",placeholder:"Blog advertisement",required:!0})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsxs)("label",{className:"mb-2 block font-secondary",htmlFor:"message",children:["Your Message Here",(0,s.jsx)("small",{className:"font-secondary text-sm text-primary",children:"*"})]}),(0,s.jsx)("textarea",{className:"form-textarea w-full",placeholder:"Hello I’m Mr ‘x’ from…………..",rows:"7"})]}),(0,s.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Send Now"})]})]})]}),(0,s.jsxs)("div",{className:"row",children:[n&&(0,s.jsx)("div",{className:"md:col-6 lg:col-4",children:(0,s.jsxs)(h(),{href:"tel:".concat(n),className:"my-4 flex h-[100px] items-center justify-center rounded border border-border p-4 text-primary dark:border-darkmode-border",children:[(0,s.jsx)(p.q1E,{}),(0,s.jsx)("p",{className:"ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light",children:n})]})}),d&&(0,s.jsx)("div",{className:"md:col-6 lg:col-4",children:(0,s.jsxs)(h(),{href:"mailto:".concat(d),className:"my-4 flex h-[100px] items-center justify-center rounded border border-border p-4 text-primary dark:border-darkmode-border",children:[(0,s.jsx)(p.SRX,{}),(0,s.jsx)("p",{className:"ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light",children:d})]})}),i&&(0,s.jsx)("div",{className:"md:col-6 lg:col-4",children:(0,s.jsxs)("span",{className:"my-4 flex h-[100px] items-center justify-center rounded border border-border p-4 text-primary dark:border-darkmode-border",children:[(0,s.jsx)(p.Nh4,{}),(0,s.jsx)("p",{className:"ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light",children:i})]})})]})]})})},f=e=>{let{data:t}=e,{frontmatter:r,mdxContent:l}=t,{title:d}=r;return(0,s.jsx)("section",{className:"section",children:(0,s.jsxs)("div",{className:"container",children:[(0,a.gI)(d,"h1","h2 mb-8 text-center"),(0,s.jsx)("div",{className:"content",children:(0,s.jsx)(n.R,{...l,components:c.Z})})]})})},N=e=>{let{data:t}=e,{title:r,meta_title:a,description:c,image:n,noindex:d,canonical:i,layout:x}=t.frontmatter,{content:h}=t;return(0,s.jsx)(m.Z,{title:r,description:c||h.slice(0,120),meta_title:a,image:n,noindex:d,canonical:i,children:"404"===x?(0,s.jsx)(l.Z,{data:t}):"about"===x?(0,s.jsx)(o,{data:t}):"contact"===x?(0,s.jsx)(b,{data:t}):(0,s.jsx)(f,{data:t})})};var v=!0,g=N},13151:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},function(e){e.O(0,[137,242,791,267,665,625,774,888,179],function(){return e(e.s=32231)}),_N_E=e.O()}]);