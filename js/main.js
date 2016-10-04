$(document).ready(function(){
    $(".navbar").on("click",".navbar__point", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top -$('.navbar').outerHeight()+2}, 1500);
    });
});
// Equal Height function
$.fn.equialHeight = function() {
  var $tallestcolumn = 0;
  var $currentHeight = 0;
  $.each($(this), function (index, value) {
    $currentHeight = $(this).height();
    if($currentHeight > $tallestcolumn)
    {
      $tallestcolumn = $currentHeight;
    }
  });
  $(this).height($tallestcolumn);
  return $(this);
} 
// EqiualHeight initialize
$(window).on('resize', function(){
  if( $( window ).width() >= 768 ) {
    $('.advantage__box').equialHeight();
    $('.scheme__box').equialHeight();
  }

}).trigger('resize');
// Old browser notification
$(function() { 
  $.reject({
    reject: {
      msie: 9
    },
    imagePath: 'img/icons/jReject/',
    display: [ 'chrome','firefox','safari','opera' ],
    closeCookie: true,
    cookieSettings: {
      expires: 60*60*24*365
    },
    header: 'Ваш браузер устарел!',
    paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
    paragraph2: 'Пожалуйста, установите современный браузер:',
    closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
    closeLink: 'Закрыть это уведомление',
  });
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Offset for Main Navigation
$('.navbar-fixed-top').affix({
  offset: {
    top: 5
  }
})
// Advatage button
$(document).ready( function () {
  $('.advantage--hidden').hide();
  $(document).on("click", ".advantage__btn", (function(e) {
    e.preventDefault();
    $('.advantage--hidden').show();
    $('.advantage__btn').hide();
  }));
});
// Slider
$('.make__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.make__slider--small',
  prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous<i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next<i class="fa fa-angle-right" aria-hidden="true"></i></button>'
});
$('.make__slider--small').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.make__slider',
  dots: false,
  focusOnSelect: true
});

// Scheme hover
$(document).ready( function () {
  $(".scheme__box").mouseover(function () {
      $('.scheme__box').css({'background-color' : '#f4f3f1'});
      $(this).css({'backgroundColor' : '#fff'});
  });
  $(".scheme__box").mouseout(function () {
      $('.scheme__box').css({'background-color' : '#fff'});
  });
});
 /*SCROLL SCRIPT*/
$('.toTop ').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 1500);
  return false;
});

 // fancybox 2
$(document).ready(function() { 
  $("a.fancyimage").fancybox(); 
}); 