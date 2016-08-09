// JavaScript Document

//セクション部分//
var secarr = new Array();
var $sec;
//ボタン
var ullist = new Array();
var def_num = -1;
var current = def_num;//現在の番号
var bnflag = false;
var duration = 700;
var bnflag = false;

/*ページトップ*/

var $btn = $("#pagetop a");
var $logo = $("h1 a");


/*モーションプロパティ*/

var $motion = "easeInOutExpo";
var $time = 900;

$(function(){

//セクション//
$sec = $(".section");

$sec.each(function(i){	
	secarr[i] = $(this).offset().top;
});

//ボタン処理//	
$("nav ul li a").each(function(i){
	$(this).mouseover(function(i){
		var bnflag = $(this).hasClass("select");
		if(!bnflag){
		//$(this).stop().animate({backgroundPosition:"0px 0px"},100,"swing");	
		$(this).css({"backgroundPosition":"0px 0px"});
		}
	}).mouseout(function(i){
		var bnflag = $(this).hasClass("select");
		if(!bnflag){
			$(this).css({"backgroundPosition":"0px -60px"});
		//$(this).stop().animate({backgroundPosition:"0px -60px"},100,"swing");
		}
	});
	$(this).click(function(){
		var bnflag = $(this).hasClass("select");
		if(!bnflag){
		$('html,body').animate({"scrollTop":secarr[i]-60},$time, $motion, function() {
		});
		}
		return false;	
	});
});

//ページトップ//
$btn.click(function(){
	var $html = $("html,Body");
	$html.animate({"scrollTop":0},600,$motion);
	return false;
});
$logo.click(function(){
	var $html = $("html,Body");
	$html.animate({"scrollTop":0},600,$motion);
	return false;
});



//スクロール制御／/
$(window).scroll(function(){
	
	if($(window).scrollTop() > (secarr[0]-($(window).height()/2))){
		for(i = secarr.length; i>=0; i--){
			if($(window).scrollTop() > (secarr[i]-400)){
				chenge_num(i);
				break;
			}
		}
		bnflag = true;
		
	} else {
		if(bnflag == true){	
			var $target = $("nav ul li a").eq(current);	
			//$target.stop().animate({backgroundPosition:"0px -60px"},duration,"easeOutExpo");
			$target.removeClass("select");
			$target.css({"backgroundPosition":"0px -60px"});
			current = def_num;
			bnflag = false;
		}
	}
});

function chenge_num(num){
	if(num != current){
		var $target = $("nav ul li a").eq(num);
		var $current = $("nav ul li a").eq(current);
		$current.removeClass("select");
		$target.addClass("select");
		$current.animate({backgroundPosition:"0px -60px"},300,"easeOutExpo");
		$target.animate({backgroundPosition:"0px -120px"},300,"easeOutExpo");
		current = num;
	}
}






});



