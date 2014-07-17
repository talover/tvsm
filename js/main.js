$(document).ready(function(){
	setTimeout(function() {  
		$('input, select').styler();  
	}, 1);
	catalog();
	slider();
	$("a.anchorLink").anchorAnimate();
	tabs();
	number();
	password();
	popup();
	legal_entity();
	legal_entity_btn();
	fancybox();
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
	});
	$("#deals_slider").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 500,
		paginationSpeed : 500,
		singleItem:true,
	});
	$("#deals_slider_full").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 500,
		paginationSpeed : 500,
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

function number() {
	$('.number').each(function(){
		var input = $(this).parent().find('input[type="text"]'),
			val =input.val();

		$(this).find('a.top').on('click',function(){
			input.val(parseInt(val) + 1);
			val =input.val();
		});
		$(this).find('a.bottom').on('click',function(){
			input.val(parseInt(val) - 1);

			if(val <= 1){
				val =input.val(1);
			}
			val =input.val();
		});

	});
}

function password() {
	$('#password_btn').on('click',function(){
		$('#new_password').slideToggle()
	});
}

function popup() {
	$("#enter_btn").click(function() {
		$.fancybox( {href : '#enter_popup', padding : 0, wrapCSS: "popup"} );
	});
}

function legal_entity() {
	if($("#legal_entity").is(':checked')){
		$('.legal_entity').slideDown();
	}else {
		$('.legal_entity').slideUp();
	}
}

function legal_entity_btn() {
	$("#legal_entity ,#individual").on('change',function(){
		legal_entity();
	});
}

function fancybox() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
}

