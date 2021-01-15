$(document).ready(function () {
    $('.about__slider').slick({
        infinite: false,
        dots: true,
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="18" height="38" viewBox="0 0 18 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82153 1.95628L1.82153 36.0297L15.5642 19.1837L1.82153 1.95628Z" stroke="white" stroke-width="3.36454" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="18" height="38" viewBox="0 0 18 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82153 1.95628L1.82153 36.0297L15.5642 19.1837L1.82153 1.95628Z" stroke="white" stroke-width="3.36454" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
    },
  ]
    });

    $('.features__acc-title').click(function (event) {
        $(this).toggleClass('show').next().slideToggle(300);
    });

    $('.header__top-burger').click(function (event) {
        $('.header__top-burger').toggleClass('active');
        $('.main-nav__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('ul.main-nav__list li span').click(function (event) {
        $('ul.main-nav__list').toggleClass('active');
        $('.header__top-burger').toggleClass('active');
        $('body').toggleClass('lock');
    });

});
