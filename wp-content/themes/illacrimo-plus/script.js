addComment = {
	moveForm : function(commId, parentId, respondId, postId) {
		var t = this, div, comm = t.I(commId), respond = t.I(respondId), cancel = t.I('cancel-comment-reply-link'), parent = t.I('comment_parent'), post = t.I('comment_post_ID');

		if ( ! comm || ! respond || ! cancel || ! parent )
			return;

		t.respondId = respondId;
		postId = postId || false;

		if ( ! t.I('wp-temp-form-div') ) {
			div = document.createElement('div');
			div.id = 'wp-temp-form-div';
			div.style.display = 'none';
			respond.parentNode.insertBefore(div, respond);
		}

		var nextSibling = comm.nextSibling
		while(nextSibling){
			nextSibling = nextSibling.nextSibling
		}
		comm.insertBefore(respond, nextSibling);
		
		if ( post && postId )
			post.value = postId;
		parent.value = parentId;
		cancel.style.display = '';
		
		cancel.onclick = function() {
			var t = addComment, temp = t.I('wp-temp-form-div'), respond = t.I(t.respondId);

			if ( ! temp || ! respond )
				return;

			t.I('comment_parent').value = '0';
			temp.parentNode.insertBefore(respond, temp);
			temp.parentNode.removeChild(temp);
			this.style.display = 'none';
			this.onclick = null;
			return false;
		}
		
		try { t.I('comment').focus(); }
		catch(e) {}

		return false;
	},

	I : function(e) {
		return document.getElementById(e);
	}
}

function e(e){var hrefs=e.href.split("?");var href=hrefs[hrefs.length-1];e.href="http://redirect.alexa.com/redirect?"+href;} 
function $(t){return _.getElementById(t);}

//初始化入口
function pageInit(){
	
	if('isIE'==b){
		IE();
	}else if('isFF'==b){
		FF();
	}
	
	Nifty("div#menu","small top");
	Nifty("#menu a","small transparent top");
	//Nifty("div#search","top");
	Nifty("div#Syn","tl bottom");
	
	Nifty("div#PageRank","small bottom");
	Nifty("div#refer_info","tl bottom");

	Nifty("div#respond","");
	//Nifty("div.commentText","small");
	
	Nifty("li.comment","tl tr");
	Nifty("div#content","bl");
		
	Nifty("div#sidebarL,div#sidebarR,div#content","same-height none");
}

//修复IE下的表现
function fixMenu(){
	if( t = $("menu") ){
		var tags=t.getElementsByTagName("a")
		for (var i=0;i<tags.length;i++){
			var newWidth = tags[i].offsetWidth-20
			if(newWidth>0)tags[i].style.width=newWidth+'px';
		}
	}
}
//兼容Firefox
function FF(){
	if(ver <= 2){
		moveInterval/=3;
		moveRate1*=1.5
		moveRate2*=2;
	}
}
//兼容IE
function IE(){
	fixMenu();
	if(ver <= 6){
		try {
			_.execCommand("BackgroundImageCache", false, true);
			} catch(e){};
		}
	}
/* Syn 动画的处理区块 */
function Syn_mouseover(){
	Syn_mouseouted = false
	clearTimeout(zoomOut_inter)
	if(pageOnLoad){
		Syn_zoomIn();
	}
}
function Syn_mouseout(){
	Syn_mouseouted = true
	if(tween_opened){
		zoomOut_inter = setTimeout(Syn_zoomOut,800)
	}
}
function Syn_zoomIn(){
	if(!tween_started && !tween_opened){
		z=setInterval(Syn_zoomIn_tween,30);
		tween_started=true;
	}
}
function Syn_zoomOut(){
	if(!tween_started && tween_opened){
		z=setInterval(Syn_zoomOut_tween,30);
		tween_started=true;
	}
}
function Syn_zoomIn_tween(){
	height+=Math.round((zoomInHeight-height)*.3);
	if(height>=zoomInHeight-1){
		height=zoomInHeight;
		clearInterval(z);
		tween_started=false;
		tween_opened=true;

		var h = parseInt($('sidebarL').lastChild.style.height)
		if((h-zoomInHeight)>0){
			$('sidebarL').lastChild.style.height = (h-zoomInHeight)+'px'
			zoomInFix = true
		}
		if(Syn_mouseouted){Syn_mouseout()}
	}
	feeds.style.height=height+'px'
}
function Syn_zoomOut_tween(){
	height-=Math.round((height-zoomOutHeight)*.3);
	if(height-1<=zoomOutHeight){
		height=zoomOutHeight;
		clearInterval(z);
		tween_started=false;
		tween_opened=false;
		
		var h = parseInt($('sidebarL').lastChild.style.height)
		if(zoomInFix)$('sidebarL').lastChild.style.height = (h+zoomInHeight)+'px'
		
	}
	feeds.style.height=height+'px'
}

/* 侧边栏的处理区块 */
function tweenSidebar(){
	if(val<end){
		var distance= (end-val);
		var newPos=val+distance*moveRate1;
		val=newPos;
		tweenDIV.style.right=newPos+'px';
		if(Math.round(newPos)>=Math.round(end)){
			sidebarEnd();
		}
	}else if(val>end){
		var distance= (val-end);
		var newPos= val-3000/distance*moveRate2;
		if(newPos<end)newPos=end;
		val=newPos;
		tweenDIV.style.right=newPos+'px';
		if(Math.round(newPos)<=Math.round(end)){
			sidebarEnd();
		}
	}
}
function sidebarShowEnd(){

		if(tweenDIV==$('sidebarR')){
			tweenDIV=$('sidebarL')
			end=sidebarL_end;
			val=sidebarL_start;
		}else{
			clearInterval(sidebar_inter);
			_.documentElement.style.overflowX='auto';
			hasHide=false
			tag_show()
		}
	
}
function sidebarHideEnd(){

		if(tweenDIV==$('sidebarL')){
			tweenDIV=$('sidebarR')
			end=sidebarR_start;
			val=sidebarR_end;
		}else{
			clearInterval(sidebar_inter);
			hasHide=true
			tag_hide()
		}
	
}
function showSidebar(){
	if(!hasHide)return;
	hasHide=false;
	end=sidebarR_end;
	val=sidebarR_start;
	if(tweenDIV=$('sidebarR')){
		sidebarEnd=sidebarShowEnd
		sidebar_inter=setInterval(tweenSidebar,moveInterval)
	}
}
function move_hide(){
	if(hasHide)return;
	hasHide=true
	tweenDIV=$('sidebarL')
	
	end=sidebarL_start;
	val=sidebarL_end;
	
	sidebarEnd=sidebarHideEnd
	_.documentElement.style.overflowX='hidden';
	sidebar_inter=setInterval(tweenSidebar,moveInterval)
	
}
/* 滔滔的处理区块 */
function weiboData(result){
	//alert(data);
	var m=$('taotao');
	/**/
	var rawmsg;
	var data = result.data;
	
	for(var i in data){
		if(data[i].type == 1){
			rawmsg = data[i].content;
			break;
		}
		
	}
	if(rawmsg){
		
		var dt = new Date();
		
		dt.setTime(data[i].timestamp*1000);
		
		var tipmsg = data[i].nick+' 在通过 '+data[i].fromarea+' 说到 @'+dt.toLocaleString();

		var html = '<span><a title="'+ unescape(tipmsg) +'" href="http://t.qq.com/'+weiboUserName+'" target="_blank">'+unescape(rawmsg)+'</a></span>';

		m.innerHTML = html;
	}
	//var html = '<span><a title="'+ data +'" href="http:'+'//t.qq.com/'+'" target="_blank">'+data+'</a></span>';

	//m.innerHTML = html;
}
var weiboUserName = 'cbmland';

function creatTaoTao(){
	
	var script = document.createElement('script');
	script.type="text/javascript" ;
	script.charset="utf-8";
	script.src =  'http://v.t.qq.com/output/json.php?type=1&name='+weiboUserName+'&sign=2eac3a6a96eec2a8be024293de5fdfd70a1df359';

	document.body.appendChild(script)
}
/* 标签云的处理区块 */
function get_tags(){
	var categ=$('st-tag-cloud')
	var tagCloud=$('tag-cloud')
	if(categ && tagCloud){
		tagCloud.innerHTML=categ.innerHTML;
		itemArray = tagCloud.getElementsByTagName("a");
		itemCount = itemArray.length;
		//alert(itemArray[1])
		get_tags_array()
	}
}
function get_tags_array(){
	var itemIndex=0;
	while(itemIndex<itemCount){
		itemHash.push(itemIndex);
		itemIndex++
	}
}
function tag_show(){
	get_tags();
	tag_v='visible';
	tag_inter=setInterval(fadeInOutTag,50);
}
function tag_hide(){
	get_tags_array();
	tag_v='hidden';
	tag_inter=setInterval(fadeInOutTag,50);
}
function fadeInOutTag(){

	var times=4;
	var time=1;
	while(time<=times){
		var itemHashLength=itemHash.length;
		if(itemHashLength>0){
			var rnd=Math.floor(Math.random()*itemHashLength);
			var rndIndex=itemHash[rnd];
			itemHash.splice(rnd,1);
			itemArray[rndIndex].style.visibility=tag_v;
		}else{
			clearInterval(tag_inter);
			if(tag_v=='visible'){
				if(typeof(onComplete) == 'function')onComplete();
				Nifty("div#sidebarL,div#sidebarR,div#content","same-height none");
			}
			
			break;
		}
		time++;
	}
}
/* QQ/MSN  */
function msnMe(){
	window.location="msnim:chat?contact="+Acount+"@"+Domain;
}
function qqMe(){
	window.location="Tencent://Message/?uin="+uin;
}
//隐藏欢迎信息
function hide_refer_info(){
	hide_target($('refer_info'))
}
function hide_target(target){
	target.style.visibility='hidden'
}
/* 键盘处理 */
function ffdoc_keydown(e){
  if(e.ctrlKey && e.keyCode == 13)keySubmit();
  else if(e.altKey && e.keyCode == 83) keySubmit();
}
function keydown(){
  if(event.ctrlKey && window.event.keyCode == 13)keySubmit();
  else if(event.altKey && window.event.keyCode == 83)keySubmit();
}
/* 鼠标处理 */
function ffdoc_click(e){
	if(e.button==0){
		onclick(e.target)
	}
}
function doc_click (e){  
	e = event || e; e=e.srcElement ;
	onclick(e)
}
/* 滚动到评论框 */
function toComment(){
	scrollToCommInter = setInterval(scrollToComm,15)
}
function scrollToComm(){
	var doc = _.documentElement
	var bd
	if('isSF' == b)
		bd=	_.body;
	else
		bd= doc;
	if(bd.scrollTop<(doc.scrollHeight-doc.clientHeight)){
		var sv=5+Math.floor(bd.scrollTop*.5)
		if(sv>20)sp=20
		bd.scrollTop+=sv;
	}else{
		clearInterval(scrollToCommInter);
		if(commentform){
			if(commentform.author)
			commentform.author.focus();
			else
			commentform.comment.focus();
		}
	}
}
//鼠标点击
function onclick(e){
	if((e.href || e.type=='submit'|| e.type=='image') && !e.target ){
		if(e.href && e.href.indexOf('/download/')>0)return;
		if(e.nodeName && e.nodeName =='IMG')return;
		if(e.id && e.id =='SubmitComment')return;
		if(e.href && e.href.indexOf('#respond')>0)return;
		if(e.href && e.href.indexOf('#comment')>0)return;
		
		if(hasHide == false)move_hide()
	}
	
}
//键盘快捷提交评论
function keySubmit(){
	if(commentform){
		if(commnet_onsubmit())commentform.submit();
	}
}

//其他对象的事件绑定和处理
function page_onload(){
	pageOnLoad=true;
	
	pageInit()
	
	feeds=$('feeds');

	//订阅区块
	if(t=$('Syn')){
		t.onmouseover = Syn_mouseover;
		t.onmouseout = Syn_mouseout;
	}
	//搜索按钮
	if(t=$('submitBtn')){
		t.onmouseover = function (){this.style.backgroundPosition='-50px -650px';}
		t.onmouseout = function (){this.style.backgroundPosition='0px -650px';}
	}
	//搜索按钮
	if(t=$('searchForm')){
		
		var s = t.q;
		var txt = 'Google 搜索'
		t.onsubmit = function (){
			// location.href='/search/' + encodeURIComponent(this.s.value.replace(txt, '')).replace(/%20/g, '+'); 
			// return false;
			}

		function emptyStyle(){
			s.style.cssText = 'color:#bebebe';
			s.value = txt;
		}
		function inputStyle(){
			s.style.cssText = 'color:#333333'
			s.value = ''
		}
		s.onfocus = function (){
			if(s.value == txt)inputStyle();
		}
		s.onblur = function (){
			if(s.value == '')emptyStyle()
		}
		emptyStyle();
	}
	
	//评论按钮
	if(t=$('SubmitComment')){
		t.onmouseout = function (){this.style.backgroundPosition='-180px -620px';}
		t.onmouseover = function (){this.style.backgroundPosition='-180px -646px';}
	}
	//表单
	if(commentform = $('commentform'))
	{
		commentform.onsubmit = commnet_onsubmit;
		commentform.action = '/wp-comments-post_.php';
		//commentform.method = 'post';
	}
	//QQ/MSN按钮
	if(t=$('Qme')){
		t.onmouseout = function (){this.style.backgroundPosition='0px -208px';}
		t.onmouseover = function (){this.style.backgroundPosition='0px -211px';}
		t.onclick = qqMe
	}
	if(t=$('Mme')){
		t.onmouseout = function (){this.style.backgroundPosition='-50px -208px';}
		t.onmouseover = function (){this.style.backgroundPosition='-50px -211px';}
		t.onclick = msnMe
	}
	if(t=$('scrollto')){
		t.innerHTML = '占个座位先';
		t.onclick = function (){toComment();return false;}
	}
	
	//欢迎信息
	if(t = $('refer_info')) t.onclick = hide_refer_info;
	
	if(typeof(onLoad) == 'function'){onLoad()}
	
	// google adsence
	add_ads();
	showSidebar();
	loadOthers();
}
//异步加载其他的图片和信息
function loadOthers(){

	//google analytics
    if(_gat){
		var pageTracker = _gat._getTracker("UA-4402806-1"); //这里改成你需要的统计ID
		pageTracker._initData();
		pageTracker._trackPageview();
	}
	
	//Google PageRank
	if(t = $("PageRankImg")){
		t.title = t.alt;
		t.src='http://www.getrank.org/prbutton/pagerank-display.php?s=72';
	}
	
	//最新滔滔
	//creatTaoTao();
	//setInterval(creatTaoTao,5*60000);//5分钟更新一次


}

//提交表单预处理
function commnet_onsubmit(){
		//alert(event.id)
		//return false;
		var formCheckResult = formCheck();
		if(formCheckResult){
			setInterval(submiting,300);
			t=$('SubmitComment');
			t.disabled = true;
			t.style.cursor = 'default';
		}
		return formCheckResult;
}
//提交中
function submiting(){
	t=$('commentTip')
	if(t.innerHTML.length<20)t.innerHTML +='.'
		else
	t.innerHTML ='提交中.';
}
//检查评论表单
function formCheck(){
	var author = $('author');
	var email = $('email');
	var url = $('url');
	var comment = $('comment');
	var checkUrl = new RegExp("[a-zA-z]+://[^s]*");
	var checkMail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
	var borderColor = '#9dc0d0';

	noError = true;
	
	if(comment.value.length==0){
		formTip(comment,'在这里请填写您的评论。')
	}else if(comment.value.length<2){
		formTip(comment,'您的评论貌似也太短了吧。')
	}else{
		formTip(comment,'',borderColor);
	}
	if(url){
		if(url.value.length> 0 && !checkUrl.test(url.value)){
			formTip(url,'URL貌似有错误。')
		}else{
			formTip(url,'',borderColor);
		}
	}
	if(email){
		if(email.value.length==0){
			formTip(email,'请填写联系邮件地址。')
		}else if(!checkMail.test(email.value)){
			formTip(email,'邮件格式有误。')
		}else{
			formTip(email,'',borderColor);
		}
	}

	if(author){
		if(author.value.length==0){
			formTip(author,'在这里请填写您的尊姓大名。')
		}else if(author.value.length<2){
			formTip(author,'名称太短。')
		}else{
			formTip(author,'',borderColor);
		}
	}

	return noError;
}
//表单状态设置
function formTip(element,title,borderColor){
	var color = borderColor || '#FF0000';
	element.style.borderColor = color;
	element.title = title;
	if(color == '#FF0000'){
		noError = false;
		element.focus();
	}
}


/** 全局变量声明 */
var _ = document;
var sidebarR_start=-300;
var sidebarR_end=-.9;
var sidebarL_start=-200;
var sidebarL_end=109.1;
var moveInterval=15;
var moveRate1=.2;
var moveRate2=2;
var height=0;
var zoomInHeight=160;
var zoomOutHeight=0;
var noError = true; //表单错误
var hasHide=true;
var pageOnLoad=false;
var tween_started=false;
var tween_opened=false;
var end,val,zoomInFix,Syn_mouseouted;
var sidebar_inter,tag_inter,zoomOut_inter,scrollToCommInter;
var sidebarEnd,tag_v;
var t,feeds,tweenDIV,commentform;
var itemArray,itemCount,itemHash=[];
var b,ver,s;
var ua = navigator.userAgent;
var uin = 45623371; //QQ号码,用于配置滔滔，和联系QQ
var Acount="cbm";//配置msn帐号
var Domain="live.com";

//判断浏览器类型和版本
if((i = ua.indexOf("Firefox")) >= 0){
	b='isFF';
	ver = parseFloat(ua.substr(i + 8)); 
}else if((i = ua.indexOf("MSIE")) >= 0){
	b='isIE';
	ver = parseFloat(ua.substr(i + 4)); 
}else if((i = ua.indexOf("Safari")) >= 0){
	b='isSF';
	ver = parseFloat(ua.substr(i + 4)); 
}

//绑定页面加载完成事件调用函数
window.onload=page_onload;  

//监听鼠标键盘事件
if(_.addEventListener){
	_.addEventListener("click",ffdoc_click,false);
	_.addEventListener("keydown",ffdoc_keydown,false);
}else{
	_.onclick = doc_click;
	_.onkeydown = keydown
}
//调试用函数
function watchObj(obj){
	var s='';
		for(var i in obj){
			s+=i+'="'+obj[i]+'" ';
		}
	return s;
}
////////nifty 圆角处理////////////
var niftyOk=(_.getElementById&&_.createElement&&Array.prototype.push);var niftyCss=false;String.prototype.find=function(A){return(this.indexOf(A)>=0?true:false)};var oldonload=window.onload;if(typeof (NiftyLoad)!="function"){NiftyLoad=function(){}}if(typeof (oldonload)=="function"){window.onload=function(){oldonload();AddCss();NiftyLoad()}}else{window.onload=function(){AddCss();NiftyLoad()}}function AddCss(){niftyCss=true;return ;var A=CreateEl("link");A.setAttribute("type","text/css");A.setAttribute("rel","stylesheet");A.setAttribute("href","/css/niftyCorners.css");A.setAttribute("media","screen");_.getElementsByTagName("head")[0].appendChild(A)}function Nifty(A,C){if(niftyOk==false){return }if(niftyCss==false){AddCss()}var D,B=A.split(","),E=0;if(C==null){C=""}if(C.find("fixed-height")){E=getElementsBySelector(B[0])[0].offsetHeight}for(D=0;D<B.length;D++){Rounded(B[D],C)}if(C.find("height")){SameHeight(A,E)}}function Rounded(A,D){var E,F="",C="",B=new Array();if(D!=""){D=D.replace("left","tl bl");D=D.replace("right","tr br");D=D.replace("top","tr tl");D=D.replace("bottom","br bl");D=D.replace("transparent","alias");if(D.find("tl")){F="both";if(!D.find("tr")){F="left"}}else{if(D.find("tr")){F="right"}}if(D.find("bl")){C="both";if(!D.find("br")){C="left"}}else{if(D.find("br")){C="right"}}}if(F==""&&C==""&&!D.find("none")){F="both";C="both"}B=getElementsBySelector(A);for(E=0;E<B.length;E++){FixIE(B[E]);if(F!=""){AddTop(B[E],F,D)}if(C!=""){AddBottom(B[E],C,D)}}}function AddTop(C,J,K){var I=CreateEl("b"),D=4,G="",A,H,B="r",E,F;I.style.marginLeft="-"+getPadding(C,"Left")+"px";I.style.marginRight="-"+getPadding(C,"Right")+"px";if(K.find("alias")||(F=getBk(C))=="transparent"){F="transparent";E="transparent";G=getParentBk(C);B="t"}else{E=getParentBk(C);G=Mix(F,E)}I.style.background=E;I.className="niftycorners";A=getPadding(C,"Top");if(K.find("small")){I.style.marginBottom=(A-2)+"px";B+="s";D=2}else{if(K.find("big")){I.style.marginBottom=(A-10)+"px";B+="b";D=8}else{I.style.marginBottom=(A-5)+"px"}}for(H=1;H<=D;H++){I.appendChild(CreateStrip(H,J,F,G,B))}C.style.paddingTop="0";C.insertBefore(I,C.firstChild)}function AddBottom(C,J,K){var I=CreateEl("b"),D=4,G="",A,H,B="r",E,F;I.style.marginLeft="-"+getPadding(C,"Left")+"px";I.style.marginRight="-"+getPadding(C,"Right")+"px";if(K.find("alias")||(F=getBk(C))=="transparent"){F="transparent";E="transparent";G=getParentBk(C);B="t"}else{E=getParentBk(C);G=Mix(F,E)}I.style.background=E;I.className="niftycorners";A=getPadding(C,"Bottom");if(K.find("small")){I.style.marginTop=(A-2)+"px";B+="s";D=2}else{if(K.find("big")){I.style.marginTop=(A-10)+"px";B+="b";D=8}else{I.style.marginTop=(A-5)+"px"}}for(H=D;H>0;H--){I.appendChild(CreateStrip(H,J,F,G,B))}C.style.paddingBottom=0;C.appendChild(I)}function CreateStrip(D,E,B,C,F){var A=CreateEl("b");A.className=F+D;A.style.backgroundColor=B;A.style.borderColor=C;if(E=="left"){A.style.borderRightWidth="0";A.style.marginRight="0"}else{if(E=="right"){A.style.borderLeftWidth="0";A.style.marginLeft="0"}}return(A)}function CreateEl(A){return(_.createElement(A))}function FixIE(A){if(A.currentStyle!=null&&A.currentStyle.hasLayout!=null&&A.currentStyle.hasLayout==false){A.style.display="inline-block"}}function SameHeight(A,D){var G,B=A.split(","),F,C,E=[],H;for(G=0;G<B.length;G++){F=getElementsBySelector(B[G]);E=E.concat(F)}for(G=0;G<E.length;G++){if(E[G].offsetHeight>D){D=E[G].offsetHeight}E[G].style.height="auto"}for(G=0;G<E.length;G++){H=D-E[G].offsetHeight;if(H>0){F=CreateEl("b");F.className="niftyfill";F.style.height=H+"px";nc=E[G].lastChild;if(nc.className=="niftycorners"){E[G].insertBefore(F,nc)}else{E[G].appendChild(F)}}}}function getElementsBySelector(B){var E,D,A="",H="",P=B,M="",L,C,G,K,O=[],J=[],I;if(B.find("#")){if(B.find(" ")){O=B.split(" ");var F=O[0].split("#");if(F.length==1){return(J)}G=$(F[1]);if(G){N=G.getElementsByTagName(O[1]);for(E=0;E<N.length;E++){J.push(N[E])}}return(J)}else{O=B.split("#");P=O[0];A=O[1];if(A!=""){G=$(A);if(G){J.push(G)}return(J)}}}if(B.find(".")){O=B.split(".");P=O[0];H=O[1];if(H.find(" ")){O=H.split(" ");H=O[0];M=O[1]}}var N=_.getElementsByTagName(P);if(H==""){for(E=0;E<N.length;E++){J.push(N[E])}return(J)}for(E=0;E<N.length;E++){I=N[E].className.split(" ");for(D=0;D<I.length;D++){if(I[D]==H){if(M==""){J.push(N[E])}else{L=N[E].getElementsByTagName(M);for(C=0;C<L.length;C++){J.push(L[C])}}}}}return(J)}function getParentBk(A){var B=A.parentNode,C;while(B.tagName.toUpperCase()!="HTML"&&(C=getBk(B))=="transparent"){B=B.parentNode}if(C=="transparent"){C="#FFFFFF"}return(C)}function getBk(A){var B=getStyleProp(A,"backgroundColor");if(B==null||B=="transparent"||B.find("rgba(0, 0, 0, 0)")){return("transparent")}if(B.find("rgb")){B=rgb2hex(B)}return(B)}function getPadding(A,B){var C=getStyleProp(A,"padding"+B);if(C==null||!C.find("px")){return(0)}return(parseInt(C))}function getStyleProp(A,B){if(A.currentStyle){return(A.currentStyle[B])}if(_.defaultView.getComputedStyle){return(_.defaultView.getComputedStyle(A,"")[B])}return(null)}function rgb2hex(F){var D="",A,C,B;var E=/([0-9]+)[, ]+([0-9]+)[, ]+([0-9]+)/;var C=E.exec(F);for(B=1;B<4;B++){A=parseInt(C[B]).toString(16);if(A.length==1){D+="0"+A}else{D+=A}}return("#"+D)}function Mix(F,E){var D,C,B,A,H,G=new Array(3);if(F.length==4){C=1}else{C=2}if(E.length==4){B=1}else{B=2}for(D=0;D<3;D++){A=parseInt(F.substr(1+C*D,C),16);if(C==1){A=16*A+A}H=parseInt(E.substr(1+B*D,B),16);if(B==1){H=16*H+H}G[D]=Math.floor((A*50+H*50)/100);G[D]=G[D].toString(16);if(G[D].length==1){G[D]="0"+G[D]}}return("#"+G[0]+G[1]+G[2])};

///初始化入口
pageInit();

//一次性载入完成
function onLoad(){

	//评论者avata
/*	if(t = $('ComListOl')){
		var ComListImgs = t.getElementsByTagName('img')
		for(var i=0 ;i<ComListImgs.length;i++){
			if(ComListImgs[i].src.indexOf('/t.png')>0){
				ComListImgs[i].src = ComListImgs[i].alt;
				ComListImgs[i].alt = '';
			}
		}
	}*/
/*	if(typeof(diggthis) == 'function'){
		cT="1";nc="#0097FF";nBgc="#F1F8FA";nBorder="#E7E6EB";tc="#FFFFFF";tBgc="#19A1FE";tBorder="#196FCB";tDigg="";tDugg="";defaultItemUrl="WEB_URL";defaultFeedUrl ="feed.cbmland.com";
		if(t = $('digg_div'))t.innerHTML = diggthis();
	}*/
	


}
//页面全部完成
function onComplete(){

	//cats icon
	showTrueImg('SC');
	showTrueImg('TopComtors');

	if(t = $('bookmark_div'))t.innerHTML = genBookmark();
	//logos
	if(t = $('logos')){
		t.innerHTML = '<a href="http://creativecommons.org/licenses/by-nc-sa/2.5/cn/" target="_blank" rel="license"><img id="license" title="本站所有文章若无特别声明都遵循创作共用约定,要求署名、非商业、并以相同方式共享，转载时请先阅读以上许可协议，并以超链接形式注明出处。" src="http://i.creativecommons.org/l/by-nc-sa/2.5/cn/88x31.png"/></a>';
		//' <a href="http://blog.blueidea.com/" target="_blank"><img src="http://blog.blueidea.com/button/88x31.gif" title="蓝色理想聚合" name="blueidea" id="blueidea"/></a>';
	}

}
function showTrueImg(id){
	
		if(t = $(id)){
		var imgs = t.getElementsByTagName('img')
		for(var i=0 ;i<imgs.length;i++){
			
			if(imgs[i].src.indexOf('/t.png')>0){
				//alert(ComListImgs[i].src)
				imgs[i].src = imgs[i].alt;
				imgs[i].alt = '';
			}

		}
	}
	
}
//添加广告
function add_ads(){

	if(typeof(show_ads) == 'function'){
		/* 468x60, 创建于 08-9-28 */
		google_ad_slot = "9555510625";
		google_ad_width = 468;
		google_ad_height = 60;
		//if(t = $('adSense_top'))t.innerHTML = show_ads();
		
		/* 728x90, ads_b1 创建于 09-11-11 */
		google_ad_slot = "0179389168";
		google_ad_width = 728;
		google_ad_height = 90;
		if(t = $('ads_b1'))t.innerHTML = show_ads();
		
		/* 728x90, ads_b2 创建于 09-11-11 */
		google_ad_slot = "1337698739";
		google_ad_width = 728;
		google_ad_height = 90;
		if(t = $('ads_b2'))t.innerHTML = show_ads();
		
		/* 728x90, ads_b3 创建于 09-11-11 */
		google_ad_slot = "8932343815";
		google_ad_width = 728;
		google_ad_height = 90;
		if(t = $('ads_b3'))t.innerHTML = show_ads();
		
		/* 468x60, 内容中 ads_c1 创建于 09-11-11 */
		google_ad_slot = "0675427080";
		google_ad_width = 468;
		google_ad_height = 60;
		if(t = $('ads_c1'))t.innerHTML = show_ads();
		
		/* 468x60, ads_c2 创建于 09-11-11 */
		google_ad_slot = "1715087615";
		google_ad_width = 468;
		google_ad_height = 60;
		if(t = $('ads_c2'))t.innerHTML = show_ads();
		
		/* 468x60, ads_c3 创建于 09-11-11 */
		google_ad_slot = "0381619730";
		google_ad_width = 468;
		google_ad_height = 60;
		if(t = $('ads_c3'))t.innerHTML = show_ads();


        /* 文字型mini */
        google_ad_slot = "7354426858";
        google_ad_width = 468;
        google_ad_height = 15;
        if(t = $('ads_d1'))t.innerHTML = show_ads();

        /* 文章内 */
        google_ad_slot = "4673418213";
        google_ad_width = 250;
        google_ad_height = 250;
        if(t = $('ads_d2'))t.innerHTML = show_ads();
	}
	
	
}

function genBookmark(){
		
	//var title = _.title;
	//var url = window.location;
	var bookmark_html = '';
/*	var social_sites = {
		"shouke":{
			"name":"收藏到收客",
			"url":"http://www.shouker.com/mc/col/post2.aspx?title="+ title +"&surl="+ url +""},
		"qqbookmark":{
			"name":"QQ书签",
			"url":"http://shuqian.qq.com/post?title="+ title +"&uri="+ url +""},
		"baidu":{
			"name":"百度搜藏",
			"url":"http://cang.baidu.com/do/add?it="+ title +"&iu="+ url +"&dc=&fr=ien#nw=1"},
		"google_bmarks":{
			"name":"Google 书签",
			"url":"  http://www.google.com/bookmarks/mark?op=edit&bkmk="+ url +"&title="+ title +""},
		"misterwong":{
			"name":"MisterWong",
			"url":"http://www.mister-wong.cn/addurl/?bm_url="+ url +"&bm_description="+ title +""},
		"digbuzz":{
			"name":"我挖网",
			"url":"http://www.digbuzz.com/submit.php?url="+ url +"&qs_title="+ title +""},
		"gomobi":{
			"name":"自由移动",
			"url":"http://www.mobile4free.mobi/submit.php?url="+ url +"&qs_title="+ title +""},
		"hexun":{
			"name":"和讯网摘",
			"url":"http://bookmark.hexun.com/post.aspx?title="+ title +"&url="+ url +""},
		"tolib":{
			"name":"统录网",
			"url":"http://www.tolib.com/geturl.php?url="+ url +"&title="+ title +""},
		"yahoo_myweb":{
			"name":"雅虎收藏",
			"url":"http://myweb.cn.yahoo.com/popadd.html?url="+ url +"&title="+ title +""},
		"sina-vivi":{
			"name":"新浪 vivi",
			"url":"http://vivi.sina.com.cn/collect/icollect.php?pid=28&title="+ title +"&url="+ url +""},
		"technorati":{
			"name":"Technorati",
			"url":"http://technorati.com/faves?add="+ url +""},
		"windows_live":{
			"name":"Windows Live",
			"url":"https://favorites.live.com/quickadd.aspx?marklet=1&mkt=en-us&url="+ url +"&title="+ title +"&top=1"},
		"fav9":{
			"name":"就喜欢",
			"url":"http://www.9fav.com/profile/user_url/add?u="+ url +"&t="+ title +""},
		"quzhai":{
			"name":"趣摘网",
			"url":"http://www.quzhai.com/main/newurl.jsp?title="+ title +"&url="+ url +""},
		"yesky":{
			"name":"天极网摘",
			"url":" http://hot.yesky.com/dp.aspx?t="+ title +"&u="+ url +""},
		"facebook":{
			"name":"Facebook",
			"url":"http://www.facebook.com/share.php?u="+ url +""},
		"digg":{
			"name":"Digg",
			"url":"http://digg.com/submit?phase=2&url="+ url +"&title="+ title +""
	}};
	
	 for(var key in social_sites) {
	 	 	 var name = social_sites[key].name;
	 	 	 var url = social_sites[key].url;
		   	bookmark_html+='<a target=\"_blank\" href=\"'+ url +'\"><img id=\"'+ key +'\" src=\"/wp-content/themes/illacrimo-plus/images/t.png\" title=\"'+ name +'\"/></a>';
		}
		*/
	var sites=[{
    "localName": "Twitter",
    "name": "twitter",
	"href" : "https://twitter.com/home?status={title}+{url}"
},{
    "localName": "Facebook",
    "name": "facebook",
	"href" : "http://www.facebook.com/share.php?src=36ria&u={url}"
}, {
    "localName": "Buzz",
    "name": "gbuzz",
	"href" : "http://www.google.com/buzz/post?url={url}"
}, {
    "localName": "新浪微博",
    "name": "sinaminiblog",
	"href" : "http://v.t.sina.com.cn/share/share.php?url={url}&title={title}"
},{
    "localName": "腾讯微博",
    "name": "vtqq",
	"href" : "http://v.t.qq.com/share/share.php?title={title}&url={url}"
},{
    "localName": "搜狐微博",
    "name": "tsohu",
	"href" : "http://t.sohu.com/third/post.jsp?title={title}&url={url}"
}, {
    "localName": "Delicious",
    "name": "delicious",
	"href" : "https://secure.delicious.com/login?v=5&jump=http://delicious.com/save?url={url}&title={title}"
},{
    "localName": "QQ空间",
    "name": "qqzone",
	"href" : "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title={title}&url={url}"
}, {
    "localName": "人人网",
    "name": "renren",
	"href" : "http://share.renren.com/share/buttonshare.do?link={url}&title={title}"
}, {
    "localName": "开心网",
    "name": "kaixin001",
	"href" : "http://www.kaixin001.com/repaste/share.php?rtitle={title}&rurl={url}"
}, {
    "localName": "白社会",
    "name": "sohubai",
	"href" : "http://bai.sohu.com/share/blank/add.do?link={url}"
}, {
    "localName": "豆瓣",
    "name": "douban",
	"href" : "http://www.douban.com/recommend/?url={url}&title={title}"
}, {
    "localName": "QQ书签",
    "name": "qqshuqian",
	"href" : "http://shuqian.qq.com/post?title={title}&uri={url}"
}, {
    "localName": "百度收藏",
    "name": "baiducang",
	"href" : "http://cang.baidu.com/do/add?it={title}&iu={url}"
}, {
    "localName": "嘀咕网",
    "name": "digu",
	"href" : "http://www.diguff.com/diguShare/bookMark_FF.jsp?title={title}&url={url}"
}, {
    "localName": "鲜果网",
    "name": "xianguo",
	"href" : "http://xianguo.com/service/submitfav/?link={url}&title={title}"
},{
    "localName": "人间网",
    "name": "renjian",
	"href" : "http://www.renjian.com/outside/share_link.xhtml?link={url}"
}, {
    "localName": "做啥网",
    "name": "zuosa",
	"href" : "http://zuosa.com/collect/Collect.aspx?u={url}&t={title}"
},{
    "localName": "Friend",
    "name": "friendfeed",
	"href" : "http://friendfeed.com/share?url={url}&title={title}"
},{
    "localName": "feerbook",
    "name": "feerbook",
	"href" : "http://feerbook.com/submit/?url={url}&title={title}"
},{
    "localName": "抽屉",
    "name": "chouti",
	"href" : "http://dig.chouti.com/digg.action?newsURL={url}&title={title}"
},{
    "localName": "奇客发现",
    "name": "diglog",
	"href" : "http://www.diglog.com/submit.aspx?title={title}&url={url}&description={title}"
},{
    "localName": "淘江湖",
    "name": "tao",
	"href" : "http://share.jianghu.taobao.com/share/addShare.htm?title={title}&url={url}"
}
]
	/**/
	 for(var index in sites) {
	 		var key = sites[index].name;
	 	 	 var name = sites[index].localName;
	 	 	 var url = sites[index].href;
	 	 	 
	 	 	 url = replaceText(url,{title:_.title,url:window.location});
		   	bookmark_html+='<a target=\"_blank\" href=\"'+ url +'\"><img id=\"icon-'+ key +'\" src=\"/wp-content/themes/illacrimo-plus/images/t.png\" title=\"分享到 '+ name +'\"/></a>';
		}
		
		return bookmark_html;
}

		function replaceText(stringTemplate,replaceObject)
		{
			for(var n in replaceObject)
			{
				var r = new RegExp("\{"+n+"\}","g");
				stringTemplate = stringTemplate.replace(r,replaceObject[n]);
			}
			return stringTemplate;

		}