
$(document).ready(function () {
   $('.carousel__inner').slick({
      speed: 1200,
      // adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right.svg"></button>',
      responsive: [
         {
            breakpoint: 992,
            settings: {
               dots: true,
               arrows: false
            }
         },
         {
            breakpoint: 600,
            settings: {
               dots: true,
               arrows: false,
               slidesToShow: 1,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 480,
            settings: {
               dots: true,
               arrows: false,
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });
});
