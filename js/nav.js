
	$(function(){
		var nav_a   =   $('#header'),
			nav_b   =   $('#swe');
		
		nav_b.on('touchend',function(){
			nav_a.css('top','0rem')
			return false;
		});
		$("body").on('touchend',function(){
			nav_a.css('top','-110%')
		})
		
		
		
	})
