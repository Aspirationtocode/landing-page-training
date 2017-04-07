import '../views/index.pug';
import '../styles/main.styl';
import '../styles/libs/flickity.css';
import $ from 'jquery';
import Flickity from 'flickity';
import getVieportSize from 'get-viewport-size';

const carousel = new Flickity('.header-slider__main', {
  cellSelector: '.header-slider-slide',
  prevNextButtons: true,
  resize: true,
});

const headerMenuBurger = $('.header-menu-burger');
headerMenuBurger.on('click', () => {
	$('.header-menu').toggleClass('mobile-active');
	headerMenuBurger.toggleClass('active');
})

$('.flickity-prev-next-button').html('');
$('.flickity-prev-next-button.previous').addClass('header-slider__nav header-slider__nav--left');
$('.flickity-prev-next-button.next').addClass('header-slider__nav header-slider__nav--right');

window.dispatchEvent(new Event('resize'));

$(window).resize(() => {
	const viewportWidth = getVieportSize().width;
	if (viewportWidth > 839) {
		headerMenuBurger.removeClass('active');
		$('.header-menu').removeClass('mobile-active');
	}
});
