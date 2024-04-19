(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{42938:function(e,n,t){"use strict";t.d(n,{F:function(){return l},f:function(){return c}});var a=t(50959);let o=["light","dark"],i="(prefers-color-scheme: dark)",r="undefined"==typeof window,s=(0,a.createContext)(void 0),d={setTheme:e=>{},themes:[]},l=()=>{var e;return null!==(e=(0,a.useContext)(s))&&void 0!==e?e:d},c=e=>(0,a.useContext)(s)?a.createElement(a.Fragment,null,e.children):a.createElement(u,e),m=["light","dark"],u=({forcedTheme:e,disableTransitionOnChange:n=!1,enableSystem:t=!0,enableColorScheme:r=!0,storageKey:d="theme",themes:l=m,defaultTheme:c=t?"system":"light",attribute:u="data-theme",value:g,children:v,nonce:b})=>{let[E,y]=(0,a.useState)(()=>p(d,c)),[k,M]=(0,a.useState)(()=>p(d)),B=g?Object.values(g):l,P=(0,a.useCallback)(e=>{let a=e;if(!a)return;"system"===e&&t&&(a=h());let i=g?g[a]:a,s=n?f():null,d=document.documentElement;if("class"===u?(d.classList.remove(...B),i&&d.classList.add(i)):i?d.setAttribute(u,i):d.removeAttribute(u),r){let e=o.includes(c)?c:null,n=o.includes(a)?a:e;d.style.colorScheme=n}null==s||s()},[]),S=(0,a.useCallback)(e=>{y(e);try{localStorage.setItem(d,e)}catch(e){}},[e]),A=(0,a.useCallback)(n=>{let a=h(n);M(a),"system"===E&&t&&!e&&P("system")},[E,e]);(0,a.useEffect)(()=>{let e=window.matchMedia(i);return e.addListener(A),A(e),()=>e.removeListener(A)},[A]),(0,a.useEffect)(()=>{let e=e=>{e.key===d&&S(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[S]),(0,a.useEffect)(()=>{P(null!=e?e:E)},[e,E]);let C=(0,a.useMemo)(()=>({theme:E,setTheme:S,forcedTheme:e,resolvedTheme:"system"===E?k:E,themes:t?[...l,"system"]:l,systemTheme:t?k:void 0}),[E,S,e,k,t,l]);return a.createElement(s.Provider,{value:C},a.createElement(w,{forcedTheme:e,disableTransitionOnChange:n,enableSystem:t,enableColorScheme:r,storageKey:d,themes:l,defaultTheme:c,attribute:u,value:g,children:v,attrs:B,nonce:b}),v)},w=(0,a.memo)(({forcedTheme:e,storageKey:n,attribute:t,enableSystem:r,enableColorScheme:s,defaultTheme:d,value:l,attrs:c,nonce:m})=>{let u="system"===d,w="class"===t?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${t}',s='setAttribute';`,p=s?o.includes(d)&&d?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${d}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",f=(e,n=!1,a=!0)=>{let i=l?l[e]:e,r=n?e+"|| ''":`'${i}'`,d="";return s&&a&&!n&&o.includes(e)&&(d+=`d.style.colorScheme = '${e}';`),"class"===t?d+=n||i?`c.add(${r})`:"null":i&&(d+=`d[s](n,${r})`),d},h=e?`!function(){${w}${f(e)}}()`:r?`!function(){try{${w}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${u})){var t='${i}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${l?`var x=${JSON.stringify(l)};`:""}${f(l?"x[e]":"e",!0)}}${u?"":"else{"+f(d,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${w}var e=localStorage.getItem('${n}');if(e){${l?`var x=${JSON.stringify(l)};`:""}${f(l?"x[e]":"e",!0)}}else{${f(d,!1,!1)};}${p}}catch(t){}}();`;return a.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:h}})},()=>!0),p=(e,n)=>{let t;if(!r){try{t=localStorage.getItem(e)||void 0}catch(e){}return t||n}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},h=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")},88069:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(96182)}])},79967:function(e,n,t){"use strict";t.d(n,{k:function(){return s},A:function(){return d}});var a=t(11527),o=t(50959),i=JSON.parse('[{"frontmatter":{"title":"使用 nobelium 搭建博客方法","date":"2023-04-11T05:00:00.000Z","image":"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F63c20012-cec5-421d-a95f-5c2898ad724a%2FUntitled.png?table=block&id=5f9fa6d6-8b0a-497b-a77e-f3718fb54c5b&cache=v2","categories":["vercel","notion","github"],"featured":true,"draft":false},"content":"\\n今天有兴趣看到一遍用notion搭建blog的开源库，感觉思路很新颖，而且管理起来也比常规的blog系统方便。顺手写一下中文的介绍，方便有有需要的人。\\n \\n#### 前置准备：\\n- 你的github账号\\n- 你的vercel账号\\n- 你的notion账号\\n \\n#### 开始搭建：\\n\\n- 1.打开notion模版\\n[\uD83C\uDF9F️ NOBELIUM Template](https://www.notion.so/866916e3b939468b9b6f1d47dce99f9c)\\n ，选择右上角位置的 Duplicate，然后再Share出Public Link，记得复制出链接地址。接下来从链接地址中，复制出32位的ID，记录下来为NOTION_PAGE_ID\\n \\n- 2.打开仓库，选择右上位置Fork按钮，创建副本到自己的名下。找到blog.config.js文件，直接在线进行编辑。可以更新成自己的title、author、email等参数（link可以等待第一部署后，稍后再进行更新），修改好可以之际按右边的绿色按钮，进行提交commit。\\n![alt notion image](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc95f7a8d-fd47-4a9f-ae90-06f2399eafcd%2FUntitled.png?table=block&id=76fcc14f-f88b-4b81-bdc3-11cacd0fa50a&cache=v2s)\\n \\n- 3.转到https://vercel.com/dashboard页，选择右边Add new创建新的部署，选择已经关联的github账号，项目中选择nobelium进行导入。同时在环境变量中，记得填上名称为NOTION_PAGE_ID的变量（第一步操作获取），这一步来关联你的notion。\\n![alt notion image](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1da1be00-9184-4bd2-b619-8e3f957855e9%2FUntitled.png?table=block&id=cf8ef294-e9c9-4686-8ab2-beea1a19679e&cache=v2)\\n\\n- 4.等待一分钟左右，网站即可运行起来。\\n![alt notion image](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F63c20012-cec5-421d-a95f-5c2898ad724a%2FUntitled.png?table=block&id=5f9fa6d6-8b0a-497b-a77e-f3718fb54c5b&cache=v2)","slug":"deply-your-blog-by-nobelium"},{"frontmatter":{"title":"发现新世界：MacOS M1 设备上运行ipa程序","date":"2023-09-11T05:00:00.000Z","image":"/images/posts/playcover-interface.png","categories":["Apple Silicon","MacOS","github"],"featured":true,"draft":false},"content":"\\n\\n\\n最早装备M1设备的电脑推出时，支持通过App Store安装iOS的Apps，可以说是打开了一个很大的可能性空间，\\n\\n后续随着Apps的更新，某些Apps开启了不支持配备M芯片的MacOS上安装选项。使得并不自由了。\\n\\n![playcover-install-direct-fail](/images/posts/playcover-install-direct-fail.png)\\n\\n\\n\\n然而最求自由的开发者们也没闲着，毕竟这个只是一个软件开关，理论上是可以直接运行众多iOS的Apps的，毕竟都是运行在Apple Silicon之上。\\n\\n\\n\\nPlayCover\\n\\nhttps://github.com/PlayCover/PlayCover\\n\\n一个开源的项目，将应用程序通过模拟iPad的运行态，以原生方式来运行程序指令，有较好的运行效果。\\n\\n\\n\\n安装命令\\n\\n>brew install --cask PlayCover/playcover/playcover-community\\n\\n\\n\\n![playcover-installation-cmd](/images/posts/playcover-installation-cmd.png)\\n\\n\\n\\n获取ipa文件\\n\\n\\n可以在[ipa.store](https://ipa.store/) 寻找有兴趣的apps，下载ipa文件后，拖放文件到Playcover的窗口进行安装。\\n我安装了几个软件和游戏后，界面如下\\n\\n![playcover-interface](/images/posts/playcover-interface.png)\\n\\n\\n\\n添加第三方源，像Cydia可以添加不同的下载源进行apps的浏览和下载\\n\\n>https://decrypt.day/library\\n\\n![playcover-add-source](/images/posts/playcover-add-source.png)\\n\\n添加这个源之后，你可以看到更多支持的apps和games\\n\\n![playcover-source-list](/images/posts/playcover-source-list.png)\\n\\n\\n\\nHave a Nice Play!","slug":"running-ipa-on-macos-m1-devices"},{"frontmatter":{"title":"VMware 虚拟机硬盘镜像共享","date":"2007-09-21T05:00:00.000Z","image":"https://cbmland.com/uploads/2007/09/red-hat-linux-9vmdk.png","categories":["软件推荐","VMware"],"featured":true,"draft":false},"content":"\\n>新增百度网盘下载链接：http://pan.baidu.com/s/1pJBLl4R\\n\\nVMware 现在知道的人应该不少了，我从3.0的时代开始玩，现在这个软件是越来越强大了。已经成为虚拟化领域的领头羊了。\\n曾经一口气做过Window98、me、2000 pro、2000 server、XP Home、XP Pro、英文版各个版本的原始安装版本。并且刻录DVD，供自己下次使用或者供别人拷贝，免去无味的重复安装过程。\\n\\n一个人的能力是有限的。也希望其他的朋友能够共享出来。\\n![alt all.PNG](https://cbmland.com/uploads/2007/09/all.PNG)\\n\\n本来发布在VCD论坛的，但是无故被删除了。有一些朋友对我的这些vmdk很感兴趣，现转到自己的站点来提供稳定的下载地址。\\n\\n共享的镜像都是系统安装完毕的版本。没有做任何的多于操作。对于做软件测试，系统分析，溢出漏洞，黑客学习的朋友再方便不过了。Windows版本的wmdk文件已经体积优化过，已经是最小化文件，尽量减少占用硬盘空间。\\n\\n下面是每个虚拟机镜像的具体信息和ed2k下载地址。\\n\\n![alt windows-98vmdk](https://cbmland.com/uploads/2007/09/windows-98vmdk.png)\\n\\n[[VMware.虚拟机硬盘镜像].Windows.98.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.98.vmdk.rar|94580194|17087290020f0ac4a73aa3389328ab7f|h=26ESU26DWXHPSDQM6SVBTKXZCODZIMIU|/) 90.2MB\\n\\nDownload: [Windows 98.vmdk](https://www.icloud.com/iclouddrive/0e49jQL_SWwkGd_oBRg0lNGyA#Windows_98) (90.2 MiB, 4,378 hits)\\n\\n（附加说明：vmware workstation 6.x开始vmware tools的显卡驱动和鼠标驱动不能自动在98下安装，需要手动安装，请定位到vmware tools光盘中的相关目录进行驱动更新，声卡驱动在群里面共享有提供。2008-3-7）\\n对于6.X 以上版本的虚拟机，声卡驱动请在搜索本站进行下载。\\n\\n最后更新: 2006-1-31\\n操作系统: Windows 98 简体中文第二版\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 32 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/windows-mevmdk.png)\\n\\n \\n\\n[[VMware.虚拟机硬盘镜像].Windows.Me.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.Me.vmdk.rar|303603177|4feeac21c29e8de59b998510fd814d94|h=IJKPEWV2FVU35BIZPKYOWUP46ENB6TUL|/) 289.5MB\\n\\nDownload: Windows Me.vmdk  Windows Me.vmdk (289.5 MiB, 982 hits)\\n\\n最后更新: 2006-1-31\\n操作系统: Windows ME 简体中文版\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 64 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/windows-2000-professionalvmdk.png)\\n\\n[[VMware.虚拟机硬盘镜像].Windows.2000.Professional.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.2000.Professional.vmdk.rar|204403794|c071ea657b2b7818ef8bbb19d79a8a47|h=KQST3GTFWK6T4CLUP2OOY3IZKDE2FHIC|/) 194.9MB\\n\\nDownload: Windows 2000 Professional.vmdk  Windows 2000 Professional.vmdk (194.9 MiB, 1,939 hits)\\n\\n最后更新: 2006-1-31\\n操作系统: Windows 2000 Professional 简体中文版 SP4\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 64 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/windows-2000-servervmdk.png)\\n\\n[[[VMware.虚拟机硬盘镜像].Windows.2000.Server.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.2000.Server.vmdk.rar|243723018|481804f0253b5cb8fd77224037c6202b|h=G7MHXGY63NENF3BL42X3SKDJLHHAL3VT|/) 232.4MB\\n\\nDownload: Windows 2000 Server.vmdk  Windows 2000 Server.vmdk (232.4 MiB, 1,499 hits)\\n\\n最后更新: 2006-1-31\\n操作系统: Windows 2000 Server 简体中文版 SP4\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 64 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/windows-xp-home-editionvmdk.png)\\n\\n[[VMware.虚拟机硬盘镜像].Windows.XP.Home.Edition.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.XP.Home.Edition.vmdk.rar|332244602|fb257ca2f48cafa5102a5e99cd71831e|h=GFMPSVZTGXQZBZKTUFUM7HEVOLWPV46B|/) 316.9MB\\n\\nDownload: Windows XP Home Edition.vmdk  Windows XP Home Edition.vmdk (316.9 MiB, 3,697 hits)\\n\\n最后更新: 2006-1-30\\n操作系统: Windows XP Home Edition 简体中文版\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 96 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/windows-xp-professionalvmdk.png)\\n\\n[[VMware.虚拟机硬盘镜像].Windows.XP.Professional.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.XP.Professional.vmdk.rar|358301582|9565c7c947d2b0ba37bbf8aab63e663e|h=74XOSM2UZLOGJCZV67GSVDBBNXBVNW2N|/) 341.7MB\\n\\nDownload: Windows XP Professional.vmdk  Windows XP Professional.vmdk (341.7 MiB, 10,385 hits)\\n\\n最后更新: 2006-1-30\\n操作系统: Windows XP Professional 简体中文版 SP2\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 128 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/windows-xp-professional-envmdk.png)\\n\\n[[VMware.虚拟机硬盘镜像].Windows.XP.Professional.EN.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.XP.Professional.EN.vmdk.rar|323581027|f1957e8fa1ce503471f17587abf2b1b0|h=V7DDUIP2RTKCXOEA6NN5AI7SGA4CPHK7|/) 308.6MB\\n\\nDownload: Windows XP Professional EN  Windows XP Professional EN (308.6 MiB, 2,351 hits)\\n\\n最后更新: 2006-1-30\\n操作系统: Windows XP Professional 英文版 SP2\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 128 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/windows-xp-professional-x64-editionvmdk.png)\\n\\n[[VMware.虚拟机硬盘镜像].Windows.XP.Professional.x64.Edition.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.XP.Professional.x64.Edition.vmdk.rar|471880862|f025089ad1af2227979a25d093a29c86|h=A63L3NKP66GQBBABDOI7DUV563DWOGRD|/) 450.0MB\\n\\nDownload: Windows XP Professional x64 Edition.vmdk  Windows XP Professional x64 Edition.vmdk (450.0 MiB, 1,518 hits)\\n\\n最后更新: 2006-1-30\\n操作系统: Windows XP Professional x64 Edition 英文版(首次登录需要30天激活)\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 128 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/windows-server-2003-standard-editionvmdk.png)\\n\\n[[VMware.虚拟机硬盘镜像].Windows.Server.2003.Standard.Edition.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.Server.2003.Standard.Edition.vmdk.rar|389719373|6a67e912144f238c4fbec8dc5043c638|h=6QHKFLLUTIIQV5XFJWA4XL5D2GZKVMYY|/) 371.7MB\\n\\n最后更新: 2006-1-30\\n操作系统: Windows Server 2003 Standard Edition 简体中文版 SP1\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 128 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/red-hat-linux-9vmdk.png)\\n\\n[[VMware.虚拟机硬盘镜像].Red.Hat.Linux.9.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Red.Hat.Linux.9.vmdk.rar|491526873|0e974a60ccd5a55eb97b5af8dabdc7ac|h=HIY6GGBDOVGTSZSN6WTWDPLRZMEZB3AK|/) 468.8MB\\n\\nDownload: Red Hat Linux 9.vmdk  Red Hat Linux 9.vmdk (468.8 MiB, 3,295 hits)\\n\\n（补充说明：该镜像是在支持SSE3指令的CPU下进行的，使用时也必须要有SSE3指令的支持。请早期的Intel CPU主机用户注意。2008-3-7）\\n\\n最后更新: 2006-1-30\\n操作系统: Red Hat Linux 9.0\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: root\\n密码: dickxl\\n内存分配: 96 MB","slug":"vmware-vmdk-images-shared"}]');let r=(0,o.createContext)(),s=e=>{let{children:n}=e;return(0,a.jsx)(r.Provider,{value:{posts:i},children:n})},d=()=>(0,o.useContext)(r)},96182:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var a=t(11527),o=t(56626),i=JSON.parse('{"R":{"k":{"T$":"Raleway:wght@400","BD":"Merriweather Sans:wght@400;700"}}}'),r=t(79967),s=t(42938),d=t(14764),l=t.n(d),c=t(50959),m=t(6315),u=t.n(m);t(35584);var w=t(59423),p=t.n(w),f=JSON.parse('{"A":"2023-09-11T12:42:38.855Z"}');let h=e=>{let{Component:n,pageProps:t}=e,{default_theme:d}=o.settings,m=i.R.k.T$,w=i.R.k.BD,[h,g]=(0,c.useState)();(0,c.useEffect)(()=>{fetch("https://fonts.googleapis.com/css2?family=".concat(m).concat(w?"&family="+w:"","&display=swap")).then(e=>e.text().then(e=>g(e)))},[m,w]);let v={gtmId:o.params.tag_manager_id};(0,c.useEffect)(()=>{setTimeout(()=>{o.params.tag_manager_id&&u().initialize(v)},5e3)},[]);let b=new Date(f.A).toLocaleString();return(0,a.jsxs)(r.k,{children:[(0,a.jsxs)(l(),{children:[(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"".concat(h)}}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=5"})]}),(0,a.jsx)(p(),{id:"ms_clarity",children:'\n            (function(c,l,a,r,i,t,y){\n                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};\n                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;\n                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);\n            })(window, document, "clarity", "script", "iq0yvg2ef9");\n        '}),(0,a.jsx)(p(),{id:"build-time",children:"\n              console.log('BuildTime:','"+b+"')\n           "}),(0,a.jsx)(s.f,{attribute:"class",defaultTheme:d,children:(0,a.jsx)(n,{...t})})]})};var g=h},35584:function(){},14764:function(e,n,t){e.exports=t(96495)},59423:function(e,n,t){e.exports=t(49861)},24907:function(e,n,t){"use strict";var a,o=(a=t(29588))&&a.__esModule?a:{default:a};e.exports={tags:function(e){var n=e.id,t=e.events,a=e.dataLayer,i=e.dataLayerName,r=e.preview,s="&gtm_auth="+e.auth,d="&gtm_preview="+r;n||(0,o.default)("GTM Id is required");var l="\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(t).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+s+d+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+i+"','"+n+"');";return{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+n+s+d+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:l,dataLayerVar:this.dataLayer(a,i)}},dataLayer:function(e,n){return"\n      window."+n+" = window."+n+" || [];\n      window."+n+".push("+JSON.stringify(e)+")"}}},10240:function(e,n,t){"use strict";var a,o=(a=t(24907))&&a.__esModule?a:{default:a};e.exports={dataScript:function(e){var n=document.createElement("script");return n.innerHTML=e,n},gtm:function(e){var n=o.default.tags(e);return{noScript:function(){var e=document.createElement("noscript");return e.innerHTML=n.iframe,e},script:function(){var e=document.createElement("script");return e.innerHTML=n.script,e},dataScript:this.dataScript(n.dataLayerVar)}},initialize:function(e){var n=e.gtmId,t=e.events,a=e.dataLayer,o=e.dataLayerName,i=e.auth,r=e.preview,s=this.gtm({id:n,events:void 0===t?{}:t,dataLayer:a||void 0,dataLayerName:void 0===o?"dataLayer":o,auth:void 0===i?"":i,preview:void 0===r?"":r});a&&document.head.appendChild(s.dataScript),document.head.insertBefore(s.script(),document.head.childNodes[0]),document.body.insertBefore(s.noScript(),document.body.childNodes[0])},dataLayer:function(e){var n=e.dataLayer,t=e.dataLayerName,a=void 0===t?"dataLayer":t;if(window[a])return window[a].push(n);var i=o.default.dataLayer(n,a),r=this.dataScript(i);document.head.insertBefore(r,document.head.childNodes[0])}}},6315:function(e,n,t){"use strict";var a,o=(a=t(10240))&&a.__esModule?a:{default:a};e.exports=o.default},29588:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){console.warn("[react-gtm]",e)}},56626:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"cbm\'s land","base_url":"https://blog.cbmland.com","favicon":"/images/favicon.png","logo":"/images/logo.png","logo_white":"/images/logo-light.png","logo_width":"150","logo_height":"39","logo_text":"Logo"},"settings":{"theme_switcher":true,"default_theme":"system","pagination":3,"InnerPaginationOptions":{"enableTop":false,"enableBottom":true},"summary_length":200,"blog_folder":"posts"},"params":{"tag_manager_id":"","footer_content":"","copyright":"Powered By [cbm](https://blog.cbmland.com)"},"metadata":{"meta_author":"cbm","meta_image":"/images/og-image.png","meta_description":"记录我的全新旅程 "},"widgets":{"about":{"enable":false,"content":"Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet . Libero ullam rgscorper."},"featured_posts":{"enable":true,"title":"Blog Categories","showPost":3},"categories":{"enable":true,"title":"Blog Categories"},"newsletter":{"enable":false,"title":"Newsletter","content":"Join thousands of Tiny Salt subscribers and get our best recipes delivered each week!","privacy_policy_page":"#","malichipm_url":""}},"disqus":{"enable":true,"shortname":"themefisher-template","settings":{}}}')}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],function(){return n(88069),n(96621)}),_N_E=e.O()}]);