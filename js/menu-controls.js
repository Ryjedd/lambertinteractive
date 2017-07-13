var menuOpen = false;
var $navCtrl = $('.nav-control');
var $navBulk = $('.nav');
var $main = $('.main');
var $navBtn = $('.nav-button');
var $mainBtn = $('.main-button');

$(document).ready(function(){
	
	$("#home").fadeIn( 2000, function() {
    // Animation complete
	});
	
	$navCtrl.click(function(){
		if(menuOpen == false){
			$navCtrl.animate({right:'+=15em'}, 500);
			$main.animate({right:'+=15em'}, 500);
			$navBulk.animate({right:'+=15em'}, 500);
			menuOpen = true;
		}else{
			$navCtrl.animate({right:'-=15em'}, 500);
			$main.animate({right:'-=15em'}, 500);
			$navBulk.animate({right:'-=15em'}, 500);
			menuOpen = false;
		}
	});
	
	$navCtrl.hover(
		function(){
			$navCtrl.animate({'backgroundColor':'#666666'}, 50);
		
		},
		function(){
			$navCtrl.animate({'backgroundColor':'#222222'}, 50);
		
		},
	);
	
	$navBtn.hover(
		function(){
			$(this).animate({'backgroundColor':'#666666'}, 100);
		
		},
		function(){
			$(this).animate({'backgroundColor':'#555555'}, 100);
		
		},
	);
	
	$mainBtn.hover(
		function(){
			$(this).animate({'backgroundColor':'#AA6666'}, 100);
		
		},
		function(){
			$(this).animate({'backgroundColor':'#995555'}, 100);
		
		},
	);
	
	$navBtn.click(function(){
		$navCtrl.animate({right:'-=15em'}, 500);
		$main.animate({right:'-=15em'}, 500);
		$navBulk.animate({right:'-=15em'}, 500);
		menuOpen = false;
		
		var $href = $(this).attr('href');
		var $anchor = $($href).offset();
		$('body').animate({ scrollTop: $anchor.top - 80});
		return false;
	});
	
	$mainBtn.click(function(){
		$navCtrl.animate({right:'-=15em'}, 500);
		$main.animate({right:'-=15em'}, 500);
		$navBulk.animate({right:'-=15em'}, 500);
		menuOpen = false;
		
		var $href = $(this).attr('href');
		var $anchor = $($href).offset();
		$('body').animate({ scrollTop: $anchor.top - 80});
		return false;
		
		
	});
	
	//===================================================
	
	$('.left-button').hover(
		function(){
			$(this).animate({'backgroundColor':'#555555'}, 50);
		
		},
		function(){
			$(this).animate({'backgroundColor':'#444444'}, 50);
		
		},
	);
	
	$('.right-button').hover(
		function(){
			$(this).animate({'backgroundColor':'#555555'}, 50);
		
		},
		function(){
			$(this).animate({'backgroundColor':'#444444'}, 50);
		
		},
	);
	
	$('.left-button').click(function(){
			$(this).siblings('.section-content').eq(0).children('.section-meat').eq(0).animate({left:'-=100%'}, 500);
			$(this).siblings('.section-content').eq(0).children('.section-meat').eq(0).animate({left:'+=200%'}, 0);
			$(this).siblings('.section-content').eq(0).children('.section-meat').eq(0).animate({left:'-=100%'}, 500);
		
	});
	
	$('.right-button').click(function(){
			$(this).siblings('.section-content').eq(0).children('.section-meat').eq(0).animate({left:'+=100%'}, 500);
			$(this).siblings('.section-content').eq(0).children('.section-meat').eq(0).animate({left:'-=200%'}, 0);
			$(this).siblings('.section-content').eq(0).children('.section-meat').eq(0).animate({left:'+=100%'}, 500);
		
	});
	
});