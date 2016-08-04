var filename;
var Url;
var reg=/(http\:\/\/)(\d{2})(\.dc\.ftn\.qq\.com.+)/;
var reg2=/http\:\/\/\d{2}\.oc\.ftn\.qq\.com.+/;
var download_list = '';
var dcs =[17,18,19,23,24,25,26,27,28,29,50,51,61,62,63];
var dc;
var theform;
var reNumbers2 =/\/download\/(.+)\&(\w+)/;
window.onload = function(){
       
        reNumbers2.test(window.location.href);
        theform = document.form1;
        theform.address.value= "http://"+RegExp.$1;
        theform.FM5K.value= RegExp.$2;
        Url = theform.address.value;
        filename = RegExp.$1.substr(RegExp.$1.lastIndexOf('/')+1)
        filename=filename.replace(/%20/g," ");
        filename=filename.replace(/%5D/g,"]");
        filename=filename.replace(/%5B/g,"[");
       	setTimeout(listFile,1000);
	}
		
       	function listFile(){
        if(true||reg2.test(Url)==false)
        {		var i;
        		for(var n=0;n<5;n++){
        			i = Math.round(dcs.length*Math.random());
        			var item = dcs.splice(i,1);
        			if(item>0){
        				dc = item;
        				download_list+='<li>服务器'+dc+': <a href=\"javascript:void(0);\" onClick=\"dc='+dc+';getFile();\">'+filename+'</a></li>';
        			}
        			
        		}
        }
		document.getElementById("fileName").innerHTML = download_list;
        }
        function getFile()
        {
        	
        	Url = Url.replace(reg,"$1"+dc+"$3");

            var Location = "http://qq.com/cgi-bin/help?subtype=1&&id=35&&no=243" ;
            var Info = "http://m348.mail.qq.com/cgi-bin/frame_html?sid=" ;
            var CID = 0 ;
            strCookie = "qqmail_username="+strCookie1+"; UM5K="+theform.FM5K.value;
            
            var strCookie1 = theform.FM5K.value;
            var strCookie = "FTN5K="+strCookie1;
            var newname = theform.downtool.value;
 
            if (document.getElementById("xunlei").checked == true)
            {
            
 
                try
                {
                    var ThunderAgent = new ActiveXObject("ThunderAgent.Agent");
                    
                }catch(e)
                {
                    if(document.uniqueID)
                    {
                        if(confirm("你还没安装讯雷,请先安装后再刷新此页面，按确定进入最新版讯雷的下载页面"))
                        {
                            location.href="http://dl.xunlei.com/index.htm?tag=1";
                        }
 
                    }
                    else
                    {
                        alert("您当前使用的为非IE浏览器,请先切换到IE浏览器,否则无法下载!");
                        
                    
                    }
                }
    
 
                if(Url!="")
 
                {
                    if(ThunderAgent){
                    ThunderAgent.AddTask4(Url, "", "", "", Info, -1, 0, -1, strCookie, "", "")
                    ThunderAgent.CommitTasks2(1);
 					}
                }
            }
 
            else if (document.getElementById("xuanfeng").checked == true)
            {
                try
                {
                    var QQRightClick = new ActiveXObject("QQIEHelper.QQRightClick.2");
                }catch(e)
                {
                    if(document.uniqueID)
                    {
                        if(confirm("你还没安装超级旋风,请先安装后再刷新此页面，按确定进入最新版超级旋风的下载页面"))
                        {
                            location.href="http://im.qq.com/cyclone/download.shtml";
                        }
 
                    }
                    else
                    {
                        alert("您当前使用的为非IE浏览器,请先切换到IE浏览器,否则无法下载!");
                    }
                }
    
 
 
                if(Url!="")
 
                {
                   if(QQRightClick) QQRightClick.sendUrl2(Url, Location, Info, strCookie, 0, CID);
                }
            }
            else if (document.getElementById("flashget").checked == true)
            {
                if (Url != "")
                {
                   try {
                    var JetCarNetscape = new ActiveXObject("BHO.IFlashGetNetscapeEx");
                
                	}catch(e){
                	
                		alert("没有检测到安装快车！");
                		
                	}
                	
                    if(JetCarNetscape != null)
                    {
                        JetCarNetscape.AddUrlEx(Url, Info, Location, "FlashGet",strCookie, 0);
                    }
                }
            }else{
            	 if (Url != "")
                {	location.href=Url;
              	}
            }
        }
 
