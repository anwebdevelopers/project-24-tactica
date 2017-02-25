$(function() {

	$(window).scroll(function() {
		var st = $(this).scrollTop();
		var w = $(window).width();

		$(".header").css({
			"background-position" : "center " + (130 - st / 6) + "vh" 
		});
		
		if(w > 640) {
		    $(".header__button").css({
    			// "top" : + (0 - st) + "px",
    			"opacity" : (1 - (st / 100))
    		});
    		
    		$(".header__logo").css({
    			 
    			"top" : + (0 + st) + "px",
    			"opacity" : (1 - (st / 600))
    		});
    		$(".header__title").css({
    			 
    			"top" : + (0 + st) + "px" ,
    			"opacity" : (1 - (st / 600))
    		});
    		$(".header__text").css({
    			 
    			"top" : + (0 + st) + "px",
    			"opacity" : (1 - (st / 600)) 
    		});
		} else {
			$(".header__button").removeAttr('style');
			$(".header__logo").removeAttr('style');
			$(".header__title").removeAttr('style');
			$(".header__text").removeAttr('style');
		}
		if(st > 3000) {
    		$(".header__logo").fadeOut();	
    		$(".header__title").fadeOut();
    		$(".header__text").fadeOut();
		} else {
    		$(".header__logo").fadeIn();	
    		$(".header__title").fadeIn();
    		$(".header__text").fadeIn();
		}
	});


	// scroll To Id
    $(document).ready(function(){
        //$("a[href*='#']").mPageScroll2id();
        $("a[href='#services']").mPageScroll2id();
        $("a[href='#problem']").mPageScroll2id();
    });
	
	//Выравнивание блоков по высоте

	$(".advantages__item-title").equalHeights();
	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	//Прелоадер
	$(document).ready(function() {
		$("#preloader__img").fadeOut();
		$("#preloader").fadeOut("300");
	});
});
