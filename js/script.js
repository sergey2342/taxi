$(document).ready(function(){
	$('.header-nav a').on('click', function() {
		let scrollAnchor = $(this).attr('data-scroll'),
			scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;
		
		$('body,html').animate({
			scrollTop: scrollPoint
		}, 1100);
		return false;
	});
	
	$(window).scroll(function() {
	let windscroll = $(window).scrollTop();
		$('.main section').each(function(i){
		if($(this).position().top <= windscroll) {
			$('.header-nav a.header-item-active').removeClass('header-item-active');
			$('.header-nav a').eq(i).addClass('header-item-active');
			$('.ham').removeClass('active');
			if(window.innerWidth <= 1023) {
				$('.header').css("display","none");
			}
		}
		});
	}).scroll();
});

window.addEventListener('DOMContentLoaded', () => {
	'use scrict';

	let hamburger = document.querySelector('.ham'),
		header = document.querySelector('.header'),
		a = document.querySelectorAll('.header-nav a'),
		nav = document.getElementById('nav');

	hamburger.addEventListener('click', ()=> {
		hamburger.classList.toggle('active');

		if(hamburger.classList.contains('active')) {
			document.body.style.overflow = 'hidden';
			header.style.display = 'block';
		} else {
			document.body.style.overflow = 'visible';
			header.style.display = 'none';
		}
	});

	if (window.innerWidth > 1023) {
		hamburger.style.display = 'none';
	} else {
		hamburger.style.display = 'block';
	}

	window.addEventListener('resize', ()=> {

		if (window.innerWidth <= 1023) {
			hamburger.style.display = 'block';
			if (hamburger.classList.contains('active') === false) {
				header.style.display = 'none';
			} else {
				header.style.display = 'block';
				document.body.style.overflow = 'hidden';
			}
		} else if (window.innerWidth > 1024) {
			hamburger.style.display = 'none';
			document.body.style.overflow = 'visible';
			header.style.display = 'block';
		}
	});
});