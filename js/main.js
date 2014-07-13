$(document).ready(function(){
	setTimeout(function() {  
		$('input, select').styler();  
	}, 1);
	catalog();
	slider();
	$("a.anchorLink").anchorAnimate();
	tabs();
});

function catalog() {
	$(".catalog > ul > li > a").on('click',function() {
		if ($(this).parent().find('ul').is(':hidden')) {
			$(this).parent().addClass('active');
			$(this).parent().find('ul').slideDown();
		}else {
			$(this).parent().find('ul').slideUp();
			$(this).parent().removeClass('active');
		}
	});
}

function slider() {
	$("#news_slider").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 500,
		paginationSpeed : 500,
		singleItem:true,
		autoPlay:10000
	});
	$("#deals_slider").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 500,
		paginationSpeed : 500,
		singleItem:true,
		autoPlay:10000
	});
	$("#main_slider").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 500,
		paginationSpeed : 500,
		singleItem:true,
		autoPlay:15000
	});
	$("#suppliers_slider").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 500,
		paginationSpeed : 500,
		autoPlay:5000,
		itemsCustom : [
			[0, 5],
			[450, 5],
			[600, 5],
			[700, 5],
			[1000, 5],
			[1200, 5],
			[1400, 5],
			[1600, 5]
		],
	});
}

jQuery.fn.anchorAnimate = function(settings) {
 	settings = jQuery.extend({
		speed : 1100
	}, settings);	
	
	return this.each(function(){
		var caller = this
		$(caller).click(function (event) {	
			event.preventDefault()
			var locationHref = window.location.href
			var elementClick = $(caller).attr("href")
			
			var destination = $(elementClick).offset().top - parseInt(50);
			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
				window.location.hash = elementClick
			});
		  	return false;
		})
	})
}

function tabs() {
	$('.tabs_list a').on('click', function(){
		var tab = $(this).data('tab');

		$('.tab').removeClass('active');
		$(tab).addClass('active');
	});
}

