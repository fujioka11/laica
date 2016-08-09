(function($) {

var st = 0; //$(window).scrollTop();

var w_width;//ウィンドウサイズ
var w_height;//ウィンドウハイト

$(function(){
	
	/*セクションの高さ・位置を検出*/
	var sectionH = new Array()//各セクションの高さ
	var sectionTop = [0];
	var t = 0;

    //セクション高さを検出
	
	
	
	$(".int_ct").each(function(i){
		sectionH[i] = $(this).height();
	});
	//セクションの位置を検出
	for(i =0; i<5; i++){
		t = t+sectionH[i];
		sectionTop.push(t);	
	}
	/*セクションの高さ・位置を検出*/
	var $mainbg = $('#mainBg');
	var $mainbg2 = $('#mainBg2');
	var $mainleft = $('.mainleft');
	var $mainright = $('.mainright');

    /*motion部分プロパティ*/
	
	var $funnel_movie = $('#motion #funnel_movie');
	var $funnel_bg = $('#motion .inner_bg');
	var $motionBg1 = $("#aboutbg1");
	var $motionBg2 = $("#aboutbg2");
	var $motionBg3 = $("#aboutbg3");
	var $motionBg4 = $("#aboutbg4");
	
	var $head_h = 60
	
	/*works タイトルfix*/
	var $works_title = $('#works .titlebg');
	var title_margin = 90; //height+padding_top
	var topmargin = 60;
	var z_top = 100000;
	
	
	/*pagetop*/
	var $pagetop = $("#pagetop a");
	var hidden = true;
	$pagetop.hide();//デフォルトで消しておく//
	
	
	/*header表示管理*/
	var $header = $("#header");
	var headhidden = true;
	var def_y = -60;
	

	//各セクションの位置 
	$(window).scroll(function () {	
		st = $(window).scrollTop();
		
	//ページトップ表示管理//
	if(st > (sectionTop[4]-300)){
		if(hidden){
			$pagetop.stop(true,true).fadeIn();
			hidden = false;
		}
	}else{
		if(!hidden){
			$pagetop.stop(true,true).fadeOut();
			hidden = true;
		}
	}
	
	//header表示管理//
	 if(st > sectionTop[1]){
		 if(headhidden){
			$header.animate({"top":0},600,"easeOutExpo");
			$header.addClass("fixed");
			headhidden = false;
		  }
	 }else{
		 if(!headhidden){
			$header.animate({"top":def_y},600,"easeOutExpo");
			$header.addClass("fixed");
			headhidden = true;
		  }
	 }
		 
	//パララックス管理//	
	 if(st > sectionTop[1]-sectionH[1]){
		$mainbg.css("background-position", "center "+((st-sectionTop[1])*0.6)+"px");
		$mainbg2.css("background-position", "center "+((st-sectionTop[1])*0.6)+"px");
		$mainleft.css({"top": ((st-sectionTop[1]+100)*0.3)+"px"});
		$mainright.css({"top": ((st-sectionTop[1]+700)*0.6)+"px"});
	  }
	  if(st > sectionTop[3]-800){
		$funnel_movie.css({
					"top": ((st-sectionTop[3])*0.55-50)+"px"});
		$funnel_bg.css("background-position", "center "+((st-sectionTop[3])*0.2)+"px");
		$motionBg1.css("background-position", "center "+((st-sectionTop[3])*0.5+30)+"px");
		$motionBg2.css("background-position", "center "+((st-sectionTop[3])*0.4)+"px");
		$motionBg3.css("background-position", "center "+((st-sectionTop[3])*0.2)+"px");
		$motionBg4.css("background-position", "center "+((st-sectionTop[3])*0.25)+"px");
		
	  }
	  //workに到達した際にh3をfixedに変更//
	  
	  if(st > sectionTop[4]-$head_h){
	    $works_title.css({"position":"fixed","top":topmargin,"z-index":z_top});
		$("#works .inner").css({"margin-top":title_margin});
	  } else {
		$works_title.css({"position":"static","top":"","z-index":""});
		$("#works .inner").css({"margin-top":""});
	  }
	  if(st > sectionTop[4]+900) {
		$works_title.css({"position":"static","top":"","z-index":""});
		$("#works .inner").css({"margin-top":""}); 
	  }
	});//--スクロールend--//
	
	
	
	
	
});
})(jQuery);