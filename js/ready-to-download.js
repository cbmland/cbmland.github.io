var href = window.location.href.split('ready-to-download#').join('download/');
var title = 'Ready To Download '+ href.substr(href.lastIndexOf('/')+1);
document.title = title;
var timeout = 15;

var preText;
var s1 = 5+Math.round(Math.random()*5);
var s2 = 10+Math.round(Math.random()*5);
var hasLocation = false;
var inter = setInterval(timer,500);


function timer(){
	
	var link = document.getElementById('dl_link');
	
	if(window.location.href.indexOf('#')==-1){
		link.innerHTML += '. 获取下载地址错误';
		clearInterval(inter);
	}

	if(timeout<0){
		if(link){
			if(timeout<=(s1-s2-10)){
				clearInterval(inter);
				link.innerHTML += 'OK!';
			}else{
				link.innerHTML += '.'
			}
		}
		if(!hasLocation ){window.location.href=href;hasLocation = true}
	}else if(timeout>=s2){
		if(link){
			if(timeout == s2){
				link.innerHTML += 'OK!';
				link.innerHTML +='<br />正在效验下载地址.';
			}else
				link.innerHTML += '.';
		}
	}else if(timeout>=s1){
		if(link){
			if(timeout == s1){
				link.innerHTML += 'OK!';
				preText = link.innerHTML;
			}else
				link.innerHTML += '.';
		}
	}else{
		if(link){
			link.innerHTML = preText +'<br /><br />'+ Math.ceil(timeout/2) +' 秒后将自动转到 <a target="_blank" href="http://skydrive.live.com/" >Windows Live SkyDrive </a> 页面，您也可以<a href="'+href+'" mce_href="'+href+'">手动转到</a>下载页面。';
			if(timeout == 0)link.innerHTML += '<br /><br />立即为您转向到下载页面.';
		}
	}
	timeout --;
}