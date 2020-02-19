!(function($){
	$.fn.extend({htdfslider:function(opt){
		var def={tag:"div",i:0,dey:4000};
		opt=$.extend(def,opt);
		var ts=this,lis=ts.children(opt.tag),len=lis.length,idx=opt.i,timer;
		lis.hide().eq(idx).show();

		function start(){
			clearInterval(timer);
			timer=setInterval(function(){
				nextShow();
			},opt.dey)
		}
		function stop(){
			clearInterval(timer);
			//ts.find(":animated").stop(true,true);
		}
		function idxShow(i){
			lis.eq(idx).stop(true,true).fadeOut(1000);
			idx=i;
			lis.eq(idx).stop(true,true).fadeIn(1000);
			userfun(idx);
		}
		function nextShow(){
			lis.eq(idx).stop(true,true).fadeOut(1000);
			idx=idx+1==len?0:idx+1;
			lis.eq(idx).stop(true,true).fadeIn(1000);
			userfun(idx);
		}
		function prevShow(){
			lis.eq(idx).stop(true,true).fadeOut(1000);
			idx=idx==0?len-1:idx-1;
			lis.eq(idx).stop(true,true).fadeIn(1000);
			userfun(idx);
		}
		function userfun(i){
			opt.fun&&opt.fun(i);
		}
		idxShow(idx);
		return {start:start,stop:stop,next:nextShow,prev:prevShow,show:idxShow}
	}});
})(jQuery);

$(function(){
	var htdfsld=$(".slider-wrap").htdfslider({dey:5000,fun:function(i){
		$(".slider-control-title span").fadeOut(500,function(){
			$(this).html($(".hotspot>li").eq(i).find("h2").html()).fadeIn(400)
		});
		$('.hotspot li').eq(i).addClass('opcity').siblings().removeClass('opcity');
	}}),timer;
	//htdfsld.start();
	//$(".slider-wrap").hover(s.stop,s.start);
	/* 
	$(".hotspot>li").hover(function(){
		htdfsld.stop();
		htdfsld.show($(this).index());
	},function(){
		htdfsld.start();
	}); 
	*/
	$(".slider-btn-wrap .prev").hover(htdfsld.stop,htdfsld.start).click(htdfsld.prev);
	$(".slider-btn-wrap .next").hover(htdfsld.stop,htdfsld.start).click(htdfsld.next);
	htdfsld.start();

	$(".has-submenu").hover(function(){
		$(".menu",this).show();
	},function(){
		$(".menu",this).hide();
	})

	$(".side-menu-link .hasmenu").hover(function(){
		$(this).addClass("hover")
		$(this).find(".sub-menu").fadeIn(200)},
	function(){
		$(this).removeClass("hover")
		$(this).find(".sub-menu").hide();
	});

	$(".adv-menu a").click(function(){
			$(".adv-menu .cur").removeClass("cur");
			$(this).addClass("cur");
	});
})