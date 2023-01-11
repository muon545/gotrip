const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,
});
$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
});
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
});

// Burger Menu

const navBnt = document.querySelector ('.nav__toggle');
const nav = document.querySelector ('.nav');
const navIcon = document.querySelector ('.menu-icon');


navBnt.onclick = function() {
    nav.classList.toggle ('nav--mobile')
    document.body.classList.toggle ('no--scroll')
    navIcon.classList.toggle('menu-icon-active');
}