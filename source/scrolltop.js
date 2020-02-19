// JavaScript Document
$(function(){
	if($("#back2top").length > 0)
	{
		var backtop = $("#back2top");
		var body_width = 960;
		body_width = $.support.msie && $.support.version == "6.0" ? 1192 : 1192;
		$("#back2top").css("left",Math.floor(($(window).width()-body_width)/2) + body_width + 5 + "px");
		$(window).scroll(function(){
			$(window).scrollTop()==0 ? backtop.fadeOut() : backtop.fadeIn()
		});
	
		$(window).resize(function(){
			var resize_width = Math.floor(($(window).width()-body_width)/2);
			if(resize_width > 10)
				backtop.css("left",resize_width + body_width + 5 + "px");
		});
	}	
});
$(function(){
	var obj = $('#back2top');
	function getScrollTop(){
		 return document.documentElement.scrollTop + document.body.scrollTop;    //解决多浏览
	}
	function setScrollTop(value){
		if (document.documentElement.scrollTop == 0) {
            document.body.scrollTop = value;
        }
        else {
            document.documentElement.scrollTop = value;        
        }
	}    
	//window.onscroll=function(){getScrollTop()>0?obj.style.display="":obj.style.display="none";}	
	$('#back2top').click(function(){		
			var goTop=setInterval(scrollMove,10);
            function scrollMove(){
				setScrollTop(getScrollTop()/1.1);
				if(getScrollTop()<1)clearInterval(goTop);
			}
	});
});	