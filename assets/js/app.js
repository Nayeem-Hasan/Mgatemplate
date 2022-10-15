// ====header fixed====
$(window).scroll(function(){
    var header = $('.header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) header.addClass('fixed');
    else header.removeClass('fixed');
  });
// ====header fixed====

// ====scroll top fixed====
$(window).scroll(function(){
    var scrolltop = $('.scrolltop'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) scrolltop.addClass('show');
    else scrolltop.removeClass('show');
  });
// ====scroll top fixed====
$(".scroll").on("click", function (event) {
  event.preventDefault();
  $("html,body").animate({
      scrollTop: $(this.hash).offset().top - 60}, 1200);
});

// ===nav active area====
$('.navbar-nav .nav-link').click(function(){
  $('.navbar-nav .nav-link').removeClass('active');
  $(this).addClass('active');
});
// ===nav active area====

// ===sidenav active area====
$(".trigger").on("click", function () {
	$(".sidenav-overlay").addClass("show");
	return false;
});

$(".closebtn").on("click", function () {
	$(".sidenav-overlay").removeClass("show");
});
// ===sidenav active area====

// =============== Mouse parallax ================= 

if($(window).width() > 991) {


  $('.homepage-banner, .banner-img').mousemove(function (e) {
      $('[data-depth]').each(function () {
          var depth = $(this).data('depth');
          var amountMovedX = (e.pageX * -depth / 4);
          var amountMovedY = (e.pageY * -depth / 4);

          $(this).css({
              'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
          });
      });
  });

}
// =============== Mouse parallax ================= 

new WOW().init();

// ==========parallax===========
if ($(window).width() > 992) {
    $(".parallax").parallaxie({
        speed: 0.55,
        offset: 0,
    });
}
// ==========parallax===========

// ======progress bar======
$('.progress').each(function () {
  $(this).find('.progress-bar').animate({
    width: $(this).attr('data-percent')
  });
});
// ======progress bar======

// counter js====
$('.count').counterUp({
  delay: 10,
  time: 1000
});
// counter js====

// ==brand area==
$('.brand-slider').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  nav:false,
  dots:false,
  autoplay:true,
  responsive:{
      320:{
          items:1,
      },
      480:{
          items:2,
      },
      768:{
          items:3,
      },
      1000:{
          items:5,
      }
  }
})
// ==brand area==

// filtering area====
$('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-item'
      }
  });
$('.grid').imagesLoaded().progress( function() {
  $('.grid').isotope('layout');
});
$('.product-wrapper').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    tPrev: "<i class='bx bx-chevron-right'></i>",
    tNext: "<i class='bx bx-chevron-left left'></i>",
  },
  
});
$('.filterr').on('click', function() {
  var selector = $(this).attr('data-filter');
  $('.product-wrapper').isotope({
    filter: selector
  });
  $('.filtering-area-titles li').removeClass("active");
  $(this).addClass("active");
});
  
// filtering area====

// ==clients area==
$('.clients-slider').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  nav:false,
  dots:false,
  autoplay:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
})
// ==clients area==