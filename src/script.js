
document.addEventListener("DOMContentLoaded", () => {
   const body = document.body;
   const burgerButton = document.querySelector('.header__burger-menu');
   const headerNavigation = document.querySelector('.header__nav');

   burgerButton.addEventListener('click', function (event) {
      event.target.closest('.container').querySelector('.header__nav').classList.toggle('header__nav--open-burger-menu');
      body.classList.toggle('lock');
   });

   headerNavigation.addEventListener('click', function (event) {
      event.target.parentElement.classList.remove('header__nav--open-burger-menu');
      body.classList.remove('lock');
   });

   $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      asNavFor: '.slider-second',
      responsive: [
         {
            breakpoint: 769,
            settings: {
               arrows: false,
            }
         },
         {
            breakpoint: 376,
            settings: {
               dots: true,
               arrows: false,
               asNavFor: '',
            }
         }
      ]
   }); // not working
});