var menuOpen = false;
var $navCtrl = $('.nav-control');
var $navBulk = $('.nav');
var $main = $('.main');

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
	
});