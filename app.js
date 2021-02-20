$(function(){

	// fixed header
	let header = $("#header");
	let intro = $("#intro");
	let scrollPos = $(window).scrollTop();
	let introH = intro.innerHeight();
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	checkScroll(scrollPos, introH);


	$(window).on("scroll load resize", function(){
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();


		checkScroll(scrollPos, introH);

		});
	function checkScroll(scrollPos, introH){
		if(scrollPos > introH){
			header.addClass("fixed");
		}else{
			header.removeClass("fixed");
		}
	}


// smooth scroll
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();
		let elementId = $(this).data("scroll");
		let elementOffset = $(elementId).offset().top;

		nav.removeClass("show");

		console.log(elementOffset);

		$("html, body").animate({
			scrollTop:elementOffset - 70
		}, 800);

	});



// navToggle

$("#navToggle").on("click", function(event){
	event.preventDefault();

	nav.toggleClass("show");

});

// reviews https://kenwheeler.github.io/slick/

let slider = $("#reviewsSlider");

slider.slick({
	infinite: true, /*бесконечный скрол*/
	slidesToShow: 1, /*сколько слайдов отображается*/
	slidesToScroll: 1, /*сколько будем скролить при клике*/
	fade:true, /*затемнение отзывов*/
	arrows: false, /*кнопки убирает*/
	dots:true


});


});



