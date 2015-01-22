jQuery(function($) {

	$(document).ready(function() {
		setTimeout(function(){
			$('body').addClass('loaded');
			$('h1').css('color','#222222');
		}, 3000);

	});

	$(function(){
//Menu Dropdown automatically
		$('ul.nav li.dropdown').hover(function(){
			$('.dropdown-menu',this).fadeIn();
		},function(){
			$('.dropdown-menu',this).fadeOut('fast');
		}); //hover
	});// When jquery is loaded

	$( document ).ready(function() {
		$('ul.list-group li.dropdown').hover(function(){
			$('.dropdown-menu',this).fadeIn();
		},function(){
			$('.dropdown-menu',this).fadeOut('fast');
		});
	});


	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 6500
		});
	});

	$( '.centered' ).each(function( e ) {
		$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
	});

	$(window).resize(function(){
		$( '.centered' ).each(function( e ) {
			$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
		});
	});

	//portfolio
	$(window).load(function(){
		$portfolio_selectors = $('.portfolio-filter >li>a');
		if($portfolio_selectors!='undefined'){
			$portfolio = $('.portfolio-items');
			$portfolio.isotope({
				itemSelector : 'li',
				layoutMode : 'fitRows'
			});
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
		}
	});

	//contact form
	var form = $('.contact-form');
	form.submit(function () {
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	
});