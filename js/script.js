$(function (){
'use strict';



    // Pre-loader js start
    $(window).on("load", function(){
      $('.pre_loader').delay(500).fadeOut(500);
  });


// ==================== manu fix ==========

var rakib = $('.main_manu').offset().top;
$(window).on('scroll', function(){
  var scrolling = $(this).scrollTop();
  if( scrolling > rakib ){
    $('.main_manu').addClass('manu_fix');
  }else{
    
    $('.main_manu').removeClass('manu_fix');
  }
})

// ===============banner slider start===========


$('.banner_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.banner_small_slider',
    speed:1500,
    autoplay:true,

  });
  $('.banner_small_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.banner_slider',
    dots: false,
    arrows:false,
    centerMode: true,
    focusOnSelect: true,
    speed:1500,
    autoplay:true,
  });

// ===============banner slider end===========
//=================about acounter up============
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// =====================services slider ==============

$('.services_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  speed:1000,
  dots:true,
});



 // Service slider mobile js
 $('.services_slider_mobaile').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  infinite: true,
  dots: true,
  speed: 1000,
  responsive: [
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      },
  ]
});



// =====================testimonial slider ==============

$('.testmonial_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  speed:1000,
  dots:true,
});


// ==========testmonial mobaile version==============
$('.testmonial_mobaile_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  speed:1000,
  dots:true,
  responsive: [
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
  
   
]
});






});