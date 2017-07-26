var menuOpen = false;
var $navCtrl = $('.nav-control');
var $navBulk = $('.nav');
var $main = $('.main');
var $navBtn = $('.nav-button');
var $mainBtn = $('.main-button');

var count = {};
count['cmh'] = 0;
count['carleton'] = 0;
count['co-op'] = 0;

var projectNum = {};
projectNum['cmh'] = 4;
projectNum['carleton'] = 6;
projectNum['co-op'] = 3;

$(document).ready(function(){
	
	$("#home").fadeIn( 2000, function() {
    // Animation complete
	});
	
	$navCtrl.on('click', function(){
		if(menuOpen == false){
			$navCtrl.animate({right:'+=15em'}, 500, "swing");
			$main.animate({right:'+=15em'}, 500, "swing");
			$navBulk.animate({right:'+=15em'}, 500, "swing");
			menuOpen = true;
		}else{
			$navCtrl.animate({right:'-=15em'}, 500, "swing");
			$main.animate({right:'-=15em'}, 500, "swing");
			$navBulk.animate({right:'-=15em'}, 500, "swing");
			menuOpen = false;
		}
	});
	
	$navCtrl.on({
		mouseenter : function(){
			$navCtrl.animate({'backgroundColor':'#666666'}, 50);
		
		},
		mouseleave: function(){
			$navCtrl.animate({'backgroundColor':'#222222'}, 50);
		
		},
	});
	
	$navBtn.on({
		mouseenter : function(){
			$(this).animate({'backgroundColor':'#666666'}, 50);
		
		},
		mouseleave: function(){
			$(this).animate({'backgroundColor':'#555555'}, 50);
		
		},
	});
	
	$mainBtn.on({
		mouseenter : function(){
			$(this).animate({'backgroundColor':'#AA6666'}, 50);
		
		},
		mouseleave: function(){
			$(this).animate({'backgroundColor':'#995555'}, 50);
		
		},
	});
	
	$navBtn.on('click', function(){
		$navCtrl.animate({right:'-=15em'}, 500);
		$main.animate({right:'-=15em'}, 500);
		$navBulk.animate({right:'-=15em'}, 500);
		menuOpen = false;
		
		var $href = $(this).attr('href');
		var $anchor = $($href).offset();
		$('body,html').animate({ scrollTop: $anchor.top - 80}, 1000, "swing");
		return false;
	});
	
	$mainBtn.on('click', function(){
		$navCtrl.animate({right:'-=15em'}, 500, "swing");
		$main.animate({right:'-=15em'}, 500, "swing");
		$navBulk.animate({right:'-=15em'}, 500, "swing");
		menuOpen = false;
		
		var $href = $(this).attr('href');
		var $anchor = $($href).offset();
		$('body,html').animate({ scrollTop: $anchor.top - 80}, 1000, "swing");
		return false;
		
		
	});
	
	$('.logo').on('click', function(){
		if(menuOpen == true){
			$navCtrl.animate({right:'-=15em'}, 500);
			$main.animate({right:'-=15em'}, 500);
			$navBulk.animate({right:'-=15em'}, 500);
			menuOpen = false;
		}
		
		var $href = $(this).attr('href');
		var $anchor = $('#home').offset();
		$('body').stop().animate({ scrollTop: $anchor.top - 80}, 1000, "swing");
		return false;
	});
	
	//===================================================
	
	$('.left-button').on({
		mouseenter : function(){
			$(this).animate({'backgroundColor':'#333333'}, 50);
		
		},
		mouseleave : function(){
			$(this).animate({'backgroundColor':'#111111'}, 50);
		
		},
	});
	
	$('.right-button').on({
		mouseenter : function(){
			$(this).animate({'backgroundColor':'#333333'}, 50);
		
		},
		mouseleave : function(){
			$(this).animate({'backgroundColor':'#111111'}, 50);
		
		},
	});
	
	$('.right-button').on('click',function(){
			count[($(this).attr('href'))]++;
			if(count[($(this).attr('href'))] < 0){
				count[($(this).attr('href'))] = projectNum[($(this).attr('href'))];
			}else if(count[($(this).attr('href'))] > projectNum[($(this).attr('href'))]){
				count[($(this).attr('href'))] = 0;
			}
			var cur = $(this).attr('href');
			var curCount = count[cur];
			
			//===================================
			
			$(this).siblings('.section-content').eq(0).children('.section-meat').eq(0).animate({left:'-=150%'}, 500, "swing",function(){
				//==============================
				$('#'+cur+'-content').load("projects/"+cur+"/" + curCount + ".html");

				//==============================
			});
			$(this).siblings('.section-content').eq(0).children('.section-meat').eq(0).animate({left:'+=250%'}, 0);
			$(this).siblings('.section-content').eq(0).children('.section-meat').eq(0).animate({left:'-=100%'}, 500, "swing");
		
	});
	
	$('.left-button').on('click', function(){
			count[($(this).attr('href'))]--;
			if(count[($(this).attr('href'))] < 0){
				count[($(this).attr('href'))] = projectNum[($(this).attr('href'))];
			}else if(count[($(this).attr('href'))] > projectNum[($(this).attr('href'))]){
				count[($(this).attr('href'))] = 0;
			}
			var cur = $(this).attr('href');
			var curCount = count[cur];
			
			//===================================
			
			$(this).siblings('.section-content').eq(0).children('.section-meat').eq(0).animate({left:'+=150%'}, 500, "swing", function(){
				//==============================
				$('#'+cur+'-content').load("projects/"+cur+"/" + curCount + ".html");
				
				//==============================
			});
			$(this).siblings('.section-content').eq(0).children('.section-meat').eq(0).animate({left:'-=250%'}, 0);
			$(this).siblings('.section-content').eq(0).children('.section-meat').eq(0).animate({left:'+=100%'}, 500, "swing");
			
		
	});
	
	
	
});