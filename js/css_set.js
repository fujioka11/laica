// JavaScript Document

$introcontentsH = 314;

$(function(){
	/*初期の高さは$(window).scroll(0)の位置へ*/
	 $('html,body').animate({ scrollTop: 0 }, '1');
	
	/*loading 処理*/
	var timer = 600;
	$('body').append('<div id="js_fade"></div>');
	
	jQuery.event.add(window,"load",function() { // 全ての読み込み完了後に呼ばれる関数
        setTimeout( function() {
            $('#js_fade').fadeOut(timer);
			fade_header();
        }, 600 );
		});
		$('#container').css("display","block");
	
	function fade_header(){
		$('#header').css("display","block");
	}
	/*loading 処理ここまで*/
	
	//navのセット関数//
	var wid = [125,175,120,127];//各ボタンサイズ配列
	//var navmargin = 50;//マージンサイズ
	
	//navのサイズとマージンをセット//
	$("nav li a").each(function(i){
		var i = 1 + i;
		var j = i-1;
		$(this).css("background-Image","url('img/header/nav0"+i+".gif')");
		$(this).css("backgroundPosition","0px -60px");
		$(this).css({"width":wid[j]+"px"});
	});
	//navの一番先頭のマージンをリセット//
	//$("nav li a").eq(0).css("margin-left",0+"px");
	
	//workのリスト(4の倍数はマージン0に指定)//
	$('.event:nth-child(4n)').each(function(){
		$(this).css({marginRight: '0'});
	})

	intarface_set();
	$(window).bind('resize load',setsize);
});

function intarface_set(){
	setsize();
	setcover();
}

function setsize(){;
	$w = $(window).width();
	$h = $(window).height();
	$headerH = $("#header").height();//ヘッダーの高さ//
	//intro部分//
	//$("#intro").css({"height":$h+"px"});
	$intro_inner = $("#intro .inner");
	$innerH = (($h - $introcontentsH)/2)+$headerH-20;
	$intro_inner.css({"top":$innerH+"px"});
	$leftmargin = ($w - 980)/2; 
	$(".titlebox").css({"position":"relative","left":$leftmargin});
	
	
	//pagetop//
	$page_h = ($h-156)/2;
	$("#pagetop a").css({"position":"fixed","top":$page_h+"px"});
}

function setcover(){
	var $event;
	var $cover;
	var Hidden = true;
	
	$event = $(".event");
	$cover = $(".cover");
	$cover.hide();
	
	//サムネイルロールオーバー//
	$event.hover(function(){
		if(Hidden){
			$(".cover", this).stop(true,true).fadeIn();
			Hidden = false;
		}
	}, function() {
		if(!Hidden){
			$(".cover", this).stop(true,true).fadeOut();
			Hidden = true;
		}
	});
}


