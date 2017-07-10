var menuOpen = false;
var $navCtrl = $('.nav-control');
var $navBulk = $('.nav');
var $main = $('.main');
var $navBtn = $('.nav-button');
var $mainBtn = $('.main-button');

$(document).ready(function(){
	
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
			$navCtrl.animate({'backgroundColor':'#444444'}, 150);
		
		},
		function(){
			$navCtrl.animate({'backgroundColor':'#222222'}, 150);
		
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
		$('body').animate({ scrollTop: $anchor.top  - 80});
		return false;
	});
	
	$mainBtn.click(function(){
		$navCtrl.animate({right:'-=15em'}, 500);
		$main.animate({right:'-=15em'}, 500);
		$navBulk.animate({right:'-=15em'}, 500);
		menuOpen = false;
		
		var $href = $(this).attr('href');
		var $anchor = $($href).offset();
		$('body').animate({ scrollTop: $anchor.top - 100});
		return false;
		
		
	});
	
});