(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{82010:function(e,n,t){"use strict";t.d(n,{F:function(){return l},f:function(){return c}});var a=t(67294);let o=["light","dark"],i="(prefers-color-scheme: dark)",s="undefined"==typeof window,r=(0,a.createContext)(void 0),d={setTheme:e=>{},themes:[]},l=()=>{var e;return null!==(e=(0,a.useContext)(r))&&void 0!==e?e:d},c=e=>(0,a.useContext)(r)?a.createElement(a.Fragment,null,e.children):a.createElement(p,e),m=["light","dark"],p=({forcedTheme:e,disableTransitionOnChange:n=!1,enableSystem:t=!0,enableColorScheme:s=!0,storageKey:d="theme",themes:l=m,defaultTheme:c=t?"system":"light",attribute:p="data-theme",value:g,children:v,nonce:b})=>{let[E,y]=(0,a.useState)(()=>w(d,c)),[k,M]=(0,a.useState)(()=>w(d)),B=g?Object.values(g):l,A=(0,a.useCallback)(e=>{let a=e;if(!a)return;"system"===e&&t&&(a=h());let i=g?g[a]:a,r=n?f():null,d=document.documentElement;if("class"===p?(d.classList.remove(...B),i&&d.classList.add(i)):i?d.setAttribute(p,i):d.removeAttribute(p),s){let e=o.includes(c)?c:null,n=o.includes(a)?a:e;d.style.colorScheme=n}null==r||r()},[]),P=(0,a.useCallback)(e=>{y(e);try{localStorage.setItem(d,e)}catch(e){}},[e]),S=(0,a.useCallback)(n=>{M(h(n)),"system"===E&&t&&!e&&A("system")},[E,e]);(0,a.useEffect)(()=>{let e=window.matchMedia(i);return e.addListener(S),S(e),()=>e.removeListener(S)},[S]),(0,a.useEffect)(()=>{let e=e=>{e.key===d&&P(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[P]),(0,a.useEffect)(()=>{A(null!=e?e:E)},[e,E]);let C=(0,a.useMemo)(()=>({theme:E,setTheme:P,forcedTheme:e,resolvedTheme:"system"===E?k:E,themes:t?[...l,"system"]:l,systemTheme:t?k:void 0}),[E,P,e,k,t,l]);return a.createElement(r.Provider,{value:C},a.createElement(u,{forcedTheme:e,disableTransitionOnChange:n,enableSystem:t,enableColorScheme:s,storageKey:d,themes:l,defaultTheme:c,attribute:p,value:g,children:v,attrs:B,nonce:b}),v)},u=(0,a.memo)(({forcedTheme:e,storageKey:n,attribute:t,enableSystem:s,enableColorScheme:r,defaultTheme:d,value:l,attrs:c,nonce:m})=>{let p="system"===d,u="class"===t?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${t}',s='setAttribute';`,w=r?o.includes(d)&&d?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${d}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",f=(e,n=!1,a=!0)=>{let i=l?l[e]:e,s=n?e+"|| ''":`'${i}'`,d="";return r&&a&&!n&&o.includes(e)&&(d+=`d.style.colorScheme = '${e}';`),"class"===t?d+=n||i?`c.add(${s})`:"null":i&&(d+=`d[s](n,${s})`),d},h=e?`!function(){${u}${f(e)}}()`:s?`!function(){try{${u}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${p})){var t='${i}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${l?`var x=${JSON.stringify(l)};`:""}${f(l?"x[e]":"e",!0)}}${p?"":"else{"+f(d,!1,!1)+"}"}${w}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${n}');if(e){${l?`var x=${JSON.stringify(l)};`:""}${f(l?"x[e]":"e",!0)}}else{${f(d,!1,!1)};}${w}}catch(t){}}();`;return a.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:h}})},()=>!0),w=(e,n)=>{let t;if(!s){try{t=localStorage.getItem(e)||void 0}catch(e){}return t||n}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},h=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")},91118:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(80868)}])},92672:function(e,n,t){"use strict";t.d(n,{k:function(){return r},A:function(){return d}});var a=t(85893),o=t(67294),i=JSON.parse('[{"frontmatter":{"title":"使用 nobelium 搭建博客方法","date":"2023-04-11T05:00:00.000Z","image":"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F63c20012-cec5-421d-a95f-5c2898ad724a%2FUntitled.png?table=block&id=5f9fa6d6-8b0a-497b-a77e-f3718fb54c5b&cache=v2","categories":["vercel","notion","github"],"featured":true,"draft":false},"content":"\\n今天有兴趣看到一遍用notion搭建blog的开源库，感觉思路很新颖，而且管理起来也比常规的blog系统方便。顺手写一下中文的介绍，方便有有需要的人。\\n \\n#### 前置准备：\\n- 你的github账号\\n- 你的vercel账号\\n- 你的notion账号\\n \\n#### 开始搭建：\\n\\n- 1.打开notion模版\\n[\uD83C\uDF9F️ NOBELIUM Template](https://www.notion.so/866916e3b939468b9b6f1d47dce99f9c)\\n ，选择右上角位置的 Duplicate，然后再Share出Public Link，记得复制出链接地址。接下来从链接地址中，复制出32位的ID，记录下来为NOTION_PAGE_ID\\n \\n- 2.打开仓库，选择右上位置Fork按钮，创建副本到自己的名下。找到blog.config.js文件，直接在线进行编辑。可以更新成自己的title、author、email等参数（link可以等待第一部署后，稍后再进行更新），修改好可以之际按右边的绿色按钮，进行提交commit。\\n![alt notion image](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc95f7a8d-fd47-4a9f-ae90-06f2399eafcd%2FUntitled.png?table=block&id=76fcc14f-f88b-4b81-bdc3-11cacd0fa50a&cache=v2s)\\n \\n- 3.转到https://vercel.com/dashboard页，选择右边Add new创建新的部署，选择已经关联的github账号，项目中选择nobelium进行导入。同时在环境变量中，记得填上名称为NOTION_PAGE_ID的变量（第一步操作获取），这一步来关联你的notion。\\n![alt notion image](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1da1be00-9184-4bd2-b619-8e3f957855e9%2FUntitled.png?table=block&id=cf8ef294-e9c9-4686-8ab2-beea1a19679e&cache=v2)\\n\\n- 4.等待一分钟左右，网站即可运行起来。\\n![alt notion image](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F63c20012-cec5-421d-a95f-5c2898ad724a%2FUntitled.png?table=block&id=5f9fa6d6-8b0a-497b-a77e-f3718fb54c5b&cache=v2)","slug":"deply-your-blog-by-nobelium"},{"frontmatter":{"title":"如何查看iPhone中的Apps下载时使用的Apple ID","date":"2024-04-22T00:00:00.000Z","image":"./images/posts/how-to-view-apple-id-1.png","categories":["iPhone"],"featured":true,"draft":false},"content":"\\n为了换iPhone时apps更容易的迁移到新手机，如果你用过其他人的Apple ID，就会对下面这个界面不陌生了。\\n\\n![how-to-view-apple-id-4](./images/posts/how-to-view-apple-id-4.png)\\n\\n近期也在思考包括对不同国家地区的Apple ID的管理，汇总一下操作方法。\\n\\n需要使用imazing来查看设备信息，导出全部的设备信息为txt，打开后你会发现，除了设备的硬件信息，也附带了已安装的应用。（切记需要用数据线连接好手机以及授权信任电脑)\\n\\n<img src=\\"./images/posts/how-to-view-apple-id-1.png\\" alt=\\"how-to-view-apple-id-1\\"  />\\n\\n可以从这里 https://imazing.com/download 进行下载安装，试用版功能既可满足本文需求。\\n\\n打开导出的txt，使用查找功能来一览你的Apps是使用那个Apple ID下载的了\\n\\n<img src=\\"./images/posts/how-to-view-apple-id-3.png\\" alt=\\"how-to-view-apple-id-3\\"  />\\n\\n\\n\\n如果你熟悉 CSV 格式，可以尝试把文本里的空格部分用逗号,替代，重命名为csv后缀格式，就可以使用Excel打开进行排序和过滤了，可以更方面的检索。\\n\\n<img src=\\"./images/posts/how-to-view-apple-id-2.png\\" alt=\\"how-to-view-apple-id-2\\"  />\\n\\n\\n\\nCSV这样看过来，感觉都已经做出一个本地数据库了\uD83D\uDE04\\n\\n\\n\\n\\n\\n\\n\\n","slug":"how-to-view-apple-id-used-for-app-downloads-on-iphone"},{"frontmatter":{"title":"延长你的苹果芯片笔记本的电池寿命","date":"2024-04-15T05:00:00.000Z","image":"./images/posts/tray.png","categories":["Apple Silicon","MacOS"],"featured":true,"draft":false},"content":"\\n发现一个不错电池管理程序，可以控制充电到80%就停止，减少MBP长期插电导致电池鼓包的风险，有点相见恨晚的感觉。我装的是命令行版本，battery maintain 80 就好了，观察了一周感受舒适。\\n\\n\\n\\n![tray](./images/posts/tray.png)\\n\\n\\n\\n仅限于 Apple 芯片的设备，可以下载安装。\\n\\nhttps://github.com/actuallymentor/battery\\n\\n","slug":"keep-you-battery-life-on-apple-silicon-macbook"},{"frontmatter":{"title":"iPhone 依据场景打开多种 Apps","date":"2023-10-13T05:00:00.000Z","image":"./images/posts/shortcuts-action-button.jpg","categories":["iPhone","iOS","share"],"featured":true,"draft":false},"content":"\\n\\n\\n> 新款iPhone 15 Pro 将震动拨片换成了一个Action Button，这个按钮可以关联捷径来实现相关的指令，类似电脑键盘上的自定义功能键，但按钮仅仅一个，想要关联的功能太多要如何完成呢？\\n\\n\\n\\n一个具有创意的办法，就是依据你拿手机的角度场景来打开不同的 Apps\\n\\n比如超市出具付款码的时候，你的手机几乎是平放角度，扫码支付时是竖直的角度，那么是不是可以依据手机空间角度来区分场景，做到智能打开对应的 Apps。\\n\\n其实在【捷径】里并没有相关获取手机朝向的API，需要借助第三方应用来获取这些信息。\\n\\n找到一款叫 [actions 应用](https://apps.apple.com/us/app/actions/id1586435171)，提供在捷径中获取设备朝向的API，可以去应用商店下载。\\n\\n安装完后我们在捷径中可以看到他提供的全部api\\n\\n![actions-apis](./images/posts/shortcuts-actions-apis.jpeg)\\n\\n接下来，熟悉捷径编程的就很容易了。\\n\\n我设置了一个比较常见的应用程序调用捷径代码，默认运行设定：\\n\\n1.竖直方向，微信扫一扫\\n2.平放方向：支付宝付款码\\n3.左侧横向：视频拍摄模式\\n4.右侧横向：开始录音\\n5.竖向倒立：相机拍摄模式\\n\\n你也可以从[这里](https://www.icloud.com/shortcuts/10cb4e4a768a4caca01cadb399b3fe39)获取【神奇的朝向】捷径代码，或者扫下面的二位码打开。\\n\\n![shortcuts-orientation-open-apps](./images/posts/shortcuts-orientation-open-apps.png)\\n\\n\\n\\n安装到捷径里后，简单的点击运行可以测试一下效果：\\n\\n![shortcuts-orientation-list](./images/posts/shortcuts-orientation-list.jpeg)\\n\\n\\n\\n接下来就是设置到Action Button的按钮功能上就可以直接使用了\\n\\n\\n\\n ### 无Action Button的iPhone的设置\\n\\n可以在设置里 【辅助功能->触控->背面轻点两下】关联操作，设置界面如下\\n\\n![shortcuts-settings-1.jpeg](./images/posts/shortcuts-settings-1.jpeg)\\n\\n![shortcuts-settings-2.jpeg](./images/posts/shortcuts-settings-2.jpeg)\\n\\n\\n\\n这样，你就可以快速的轻敲手机背面来启动不同的功能。\\n\\n","slug":"open-apps-due-device-orientation"},{"frontmatter":{"title":"发现新世界：MacOS M1 设备上运行ipa程序","date":"2023-09-11T05:00:00.000Z","image":"./images/posts/playcover-interface.png","categories":["Apple Silicon","MacOS","github"],"featured":true,"draft":false},"content":"\\n\\n\\n最早装备M1设备的电脑推出时，支持通过App Store安装iOS的Apps，可以说是打开了一个很大的可能性空间，\\n\\n后续随着Apps的更新，某些Apps开启了不支持配备M芯片的MacOS上安装选项。使得并不自由了。\\n\\n![playcover-install-direct-fail](./images/posts/playcover-install-direct-fail.png)\\n\\n\\n\\n然而最求自由的开发者们也没闲着，毕竟这个只是一个软件开关，理论上是可以直接运行众多iOS的Apps的，毕竟都是运行在Apple Silicon之上。\\n\\n\\n\\nPlayCover\\n\\nhttps://github.com/PlayCover/PlayCover\\n\\n一个开源的项目，将应用程序通过模拟iPad的运行态，以原生方式来运行程序指令，有较好的运行效果。\\n\\n\\n\\n安装命令\\n\\n>brew install --cask PlayCover/playcover/playcover-community\\n\\n\\n\\n![playcover-installation-cmd](./images/posts/playcover-installation-cmd.png)\\n\\n\\n\\n获取ipa文件\\n\\n\\n可以在[ipa.store](https://ipa.store/) 寻找有兴趣的apps，下载ipa文件后，拖放文件到Playcover的窗口进行安装。\\n我安装了几个软件和游戏后，界面如下\\n\\n![playcover-interface](./images/posts/playcover-interface.png)\\n\\n\\n\\n添加第三方源，像Cydia可以添加不同的下载源进行apps的浏览和下载\\n\\n>https://decrypt.day/library\\n\\n![playcover-add-source](./images/posts/playcover-add-source.png)\\n\\n添加这个源之后，你可以看到更多支持的apps和games\\n\\n![playcover-source-list](./images/posts/playcover-source-list.png)\\n\\n\\n\\nHave a Nice Play!","slug":"running-ipa-on-macos-m1-devices"},{"frontmatter":{"title":"VMware 虚拟机硬盘镜像共享","date":"2007-09-21T05:00:00.000Z","image":"https://cbmland.com/uploads/2007/09/red-hat-linux-9vmdk.png","categories":["软件推荐","VMware"],"featured":true,"draft":false},"content":"\\n>新增百度网盘下载链接：http://pan.baidu.com/s/1pJBLl4R\\n\\nVMware 现在知道的人应该不少了，我从3.0的时代开始玩，现在这个软件是越来越强大了。已经成为虚拟化领域的领头羊了。\\n曾经一口气做过Window98、me、2000 pro、2000 server、XP Home、XP Pro、英文版各个版本的原始安装版本。并且刻录DVD，供自己下次使用或者供别人拷贝，免去无味的重复安装过程。\\n\\n一个人的能力是有限的。也希望其他的朋友能够共享出来。\\n![alt all.PNG](https://cbmland.com/uploads/2007/09/all.PNG)\\n\\n本来发布在VCD论坛的，但是无故被删除了。有一些朋友对我的这些vmdk很感兴趣，现转到自己的站点来提供稳定的下载地址。\\n\\n共享的镜像都是系统安装完毕的版本。没有做任何的多于操作。对于做软件测试，系统分析，溢出漏洞，黑客学习的朋友再方便不过了。Windows版本的wmdk文件已经体积优化过，已经是最小化文件，尽量减少占用硬盘空间。\\n\\n下面是每个虚拟机镜像的具体信息和ed2k下载地址。\\n\\n![alt windows-98vmdk](https://cbmland.com/uploads/2007/09/windows-98vmdk.png)\\n\\n[[VMware.虚拟机硬盘镜像].Windows.98.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.98.vmdk.rar|94580194|17087290020f0ac4a73aa3389328ab7f|h=26ESU26DWXHPSDQM6SVBTKXZCODZIMIU|/) 90.2MB\\n\\nDownload: [Windows 98.vmdk](https://www.icloud.com/iclouddrive/0e49jQL_SWwkGd_oBRg0lNGyA#Windows_98) (90.2 MiB, 4,378 hits)\\n\\n（附加说明：vmware workstation 6.x开始vmware tools的显卡驱动和鼠标驱动不能自动在98下安装，需要手动安装，请定位到vmware tools光盘中的相关目录进行驱动更新，声卡驱动在群里面共享有提供。2008-3-7）\\n对于6.X 以上版本的虚拟机，声卡驱动请在搜索本站进行下载。\\n\\n最后更新: 2006-1-31\\n操作系统: Windows 98 简体中文第二版\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 32 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/windows-mevmdk.png)\\n\\n \\n\\n[[VMware.虚拟机硬盘镜像].Windows.Me.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.Me.vmdk.rar|303603177|4feeac21c29e8de59b998510fd814d94|h=IJKPEWV2FVU35BIZPKYOWUP46ENB6TUL|/) 289.5MB\\n\\nDownload: Windows Me.vmdk  Windows Me.vmdk (289.5 MiB, 982 hits)\\n\\n最后更新: 2006-1-31\\n操作系统: Windows ME 简体中文版\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 64 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/windows-2000-professionalvmdk.png)\\n\\n[[VMware.虚拟机硬盘镜像].Windows.2000.Professional.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.2000.Professional.vmdk.rar|204403794|c071ea657b2b7818ef8bbb19d79a8a47|h=KQST3GTFWK6T4CLUP2OOY3IZKDE2FHIC|/) 194.9MB\\n\\nDownload: Windows 2000 Professional.vmdk  Windows 2000 Professional.vmdk (194.9 MiB, 1,939 hits)\\n\\n最后更新: 2006-1-31\\n操作系统: Windows 2000 Professional 简体中文版 SP4\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 64 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/windows-2000-servervmdk.png)\\n\\n[[[VMware.虚拟机硬盘镜像].Windows.2000.Server.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.2000.Server.vmdk.rar|243723018|481804f0253b5cb8fd77224037c6202b|h=G7MHXGY63NENF3BL42X3SKDJLHHAL3VT|/) 232.4MB\\n\\nDownload: Windows 2000 Server.vmdk  Windows 2000 Server.vmdk (232.4 MiB, 1,499 hits)\\n\\n最后更新: 2006-1-31\\n操作系统: Windows 2000 Server 简体中文版 SP4\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 64 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/windows-xp-home-editionvmdk.png)\\n\\n[[VMware.虚拟机硬盘镜像].Windows.XP.Home.Edition.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.XP.Home.Edition.vmdk.rar|332244602|fb257ca2f48cafa5102a5e99cd71831e|h=GFMPSVZTGXQZBZKTUFUM7HEVOLWPV46B|/) 316.9MB\\n\\nDownload: Windows XP Home Edition.vmdk  Windows XP Home Edition.vmdk (316.9 MiB, 3,697 hits)\\n\\n最后更新: 2006-1-30\\n操作系统: Windows XP Home Edition 简体中文版\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 96 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/windows-xp-professionalvmdk.png)\\n\\n[[VMware.虚拟机硬盘镜像].Windows.XP.Professional.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.XP.Professional.vmdk.rar|358301582|9565c7c947d2b0ba37bbf8aab63e663e|h=74XOSM2UZLOGJCZV67GSVDBBNXBVNW2N|/) 341.7MB\\n\\nDownload: Windows XP Professional.vmdk  Windows XP Professional.vmdk (341.7 MiB, 10,385 hits)\\n\\n最后更新: 2006-1-30\\n操作系统: Windows XP Professional 简体中文版 SP2\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 128 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/windows-xp-professional-envmdk.png)\\n\\n[[VMware.虚拟机硬盘镜像].Windows.XP.Professional.EN.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.XP.Professional.EN.vmdk.rar|323581027|f1957e8fa1ce503471f17587abf2b1b0|h=V7DDUIP2RTKCXOEA6NN5AI7SGA4CPHK7|/) 308.6MB\\n\\nDownload: Windows XP Professional EN  Windows XP Professional EN (308.6 MiB, 2,351 hits)\\n\\n最后更新: 2006-1-30\\n操作系统: Windows XP Professional 英文版 SP2\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 128 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/windows-xp-professional-x64-editionvmdk.png)\\n\\n[[VMware.虚拟机硬盘镜像].Windows.XP.Professional.x64.Edition.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.XP.Professional.x64.Edition.vmdk.rar|471880862|f025089ad1af2227979a25d093a29c86|h=A63L3NKP66GQBBABDOI7DUV563DWOGRD|/) 450.0MB\\n\\nDownload: Windows XP Professional x64 Edition.vmdk  Windows XP Professional x64 Edition.vmdk (450.0 MiB, 1,518 hits)\\n\\n最后更新: 2006-1-30\\n操作系统: Windows XP Professional x64 Edition 英文版(首次登录需要30天激活)\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 128 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/windows-server-2003-standard-editionvmdk.png)\\n\\n[[VMware.虚拟机硬盘镜像].Windows.Server.2003.Standard.Edition.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Windows.Server.2003.Standard.Edition.vmdk.rar|389719373|6a67e912144f238c4fbec8dc5043c638|h=6QHKFLLUTIIQV5XFJWA4XL5D2GZKVMYY|/) 371.7MB\\n\\n最后更新: 2006-1-30\\n操作系统: Windows Server 2003 Standard Edition 简体中文版 SP1\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: Administrator\\n密码: cbm\\n内存分配: 128 MB\\n\\n![alt ](https://cbmland.com/uploads/2007/09/red-hat-linux-9vmdk.png)\\n\\n[[VMware.虚拟机硬盘镜像].Red.Hat.Linux.9.vmdk.rar](ed2k://|file|%5BVMware.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%A1%AC%E7%9B%98%E9%95%9C%E5%83%8F%5D.Red.Hat.Linux.9.vmdk.rar|491526873|0e974a60ccd5a55eb97b5af8dabdc7ac|h=HIY6GGBDOVGTSZSN6WTWDPLRZMEZB3AK|/) 468.8MB\\n\\nDownload: Red Hat Linux 9.vmdk  Red Hat Linux 9.vmdk (468.8 MiB, 3,295 hits)\\n\\n（补充说明：该镜像是在支持SSE3指令的CPU下进行的，使用时也必须要有SSE3指令的支持。请早期的Intel CPU主机用户注意。2008-3-7）\\n\\n最后更新: 2006-1-30\\n操作系统: Red Hat Linux 9.0\\n已安装软件: 默认组件\\n已安装 VMware Tools: 无\\nVMware 硬盘版本:Workstation 5.x\\n帐户信息(如果需要)\\n用户名: root\\n密码: dickxl\\n内存分配: 96 MB","slug":"vmware-vmdk-images-shared"}]');let s=(0,o.createContext)(),r=e=>{let{children:n}=e;return(0,a.jsx)(s.Provider,{value:{posts:i},children:n})},d=()=>(0,o.useContext)(s)},80868:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var a=t(85893),o=t(56626),i=JSON.parse('{"R":{"k":{"T$":"Raleway:wght@400","BD":"Merriweather Sans:wght@400;700"}}}'),s=t(92672),r=t(82010),d=t(9008),l=t.n(d),c=t(67294),m=t(1785),p=t.n(m);t(80702);var u=t(4298),w=t.n(u),f=JSON.parse('{"A":"2024-04-24T06:46:36.940Z"}'),h=e=>{let{Component:n,pageProps:t}=e,{default_theme:d}=o.settings,m=i.R.k.T$,u=i.R.k.BD,[h,g]=(0,c.useState)();(0,c.useEffect)(()=>{fetch("https://fonts.googleapis.com/css2?family=".concat(m).concat(u?"&family="+u:"","&display=swap")).then(e=>e.text().then(e=>g(e)))},[m,u]);let v={gtmId:o.params.tag_manager_id};(0,c.useEffect)(()=>{setTimeout(()=>{o.params.tag_manager_id&&p().initialize(v)},5e3)},[]);let b=new Date(f.A).toLocaleString();return(0,a.jsxs)(s.k,{children:[(0,a.jsxs)(l(),{children:[(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"".concat(h)}}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=5"})]}),(0,a.jsx)(w(),{id:"ms_clarity",children:'\n            (function(c,l,a,r,i,t,y){\n                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};\n                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;\n                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);\n            })(window, document, "clarity", "script", "iq0yvg2ef9");\n        '}),(0,a.jsx)(w(),{defer:!0,src:"https://static.cloudflareinsights.com/beacon.min.js","data-cf-beacon":'{"token": "d26e009e71594c479df0fda04b647164"}'}),(0,a.jsx)(w(),{id:"build-time",children:"\n              console.log('BuildTime:','"+b+"')\n           "}),(0,a.jsx)(r.f,{attribute:"class",defaultTheme:d,children:(0,a.jsx)(n,{...t})})]})}},80702:function(){},9008:function(e,n,t){e.exports=t(7828)},4298:function(e,n,t){e.exports=t(32892)},56421:function(e,n,t){"use strict";var a,o=(a=t(96425))&&a.__esModule?a:{default:a};e.exports={tags:function(e){var n=e.id,t=e.events,a=e.dataLayer,i=e.dataLayerName,s=e.preview,r="&gtm_auth="+e.auth,d="&gtm_preview="+s;n||(0,o.default)("GTM Id is required");var l="\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(t).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+r+d+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+i+"','"+n+"');";return{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+n+r+d+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:l,dataLayerVar:this.dataLayer(a,i)}},dataLayer:function(e,n){return"\n      window."+n+" = window."+n+" || [];\n      window."+n+".push("+JSON.stringify(e)+")"}}},58676:function(e,n,t){"use strict";var a,o=(a=t(56421))&&a.__esModule?a:{default:a};e.exports={dataScript:function(e){var n=document.createElement("script");return n.innerHTML=e,n},gtm:function(e){var n=o.default.tags(e);return{noScript:function(){var e=document.createElement("noscript");return e.innerHTML=n.iframe,e},script:function(){var e=document.createElement("script");return e.innerHTML=n.script,e},dataScript:this.dataScript(n.dataLayerVar)}},initialize:function(e){var n=e.gtmId,t=e.events,a=e.dataLayer,o=e.dataLayerName,i=e.auth,s=e.preview,r=this.gtm({id:n,events:void 0===t?{}:t,dataLayer:a||void 0,dataLayerName:void 0===o?"dataLayer":o,auth:void 0===i?"":i,preview:void 0===s?"":s});a&&document.head.appendChild(r.dataScript),document.head.insertBefore(r.script(),document.head.childNodes[0]),document.body.insertBefore(r.noScript(),document.body.childNodes[0])},dataLayer:function(e){var n=e.dataLayer,t=e.dataLayerName,a=void 0===t?"dataLayer":t;if(window[a])return window[a].push(n);var i=o.default.dataLayer(n,a),s=this.dataScript(i);document.head.insertBefore(s,document.head.childNodes[0])}}},1785:function(e,n,t){"use strict";var a,o=(a=t(58676))&&a.__esModule?a:{default:a};e.exports=o.default},96425:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){console.warn("[react-gtm]",e)}},56626:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"cbm\'s land","base_url":"https://blog.cbmland.com","logo":"/images/logo.png","logo_white":"/images/logo-light.png","logo_width":"150","logo_height":"39","logo_text":"Logo"},"settings":{"theme_switcher":true,"default_theme":"system","pagination":3,"InnerPaginationOptions":{"enableTop":false,"enableBottom":true},"summary_length":200,"blog_folder":"posts"},"params":{"tag_manager_id":"","footer_content":"","copyright":"Powered By [cbm](https://blog.cbmland.com)"},"metadata":{"meta_author":"cbmland","meta_image":"/images/og-image.png","meta_description":"记录我的全新旅程 "},"widgets":{"about":{"enable":false,"content":"Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet . Libero ullam rgscorper."},"featured_posts":{"enable":true,"title":"Blog Categories","showPost":3},"newsletter":{"enable":false,"title":"Newsletter","content":"Join thousands of Tiny Salt subscribers and get our best recipes delivered each week!","privacy_policy_page":"#","malichipm_url":""}},"disqus":{"enable":false,"shortname":"themefisher-template","settings":{}}}')}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],function(){return n(91118),n(9090)}),_N_E=e.O()}]);