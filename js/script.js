$(function(){
  $('.index-slider__wrapper-bg').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true
  });

  // ============== slider full page ==============
  $('.full-item__slider-mini').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.full-item__slider-full',
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    focusOnSelect: true,
    infinite: true
  });
  $('.full-item__slider-full').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.full-item__slider-mini',
    arrows: false,
    dots: false,
    focusOnSelect: true,
    fade: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });

  // ============== tabs ==============
   $("#full-item__tabs").tabs();

   
   // ============== accordion toggle ==============
   $(".full-item__di-show").hide();
   
  $( ".full-item__di-title" ).on( "click", function() {
    $(this ).toggleClass('di-active');
    $(this ).next('.full-item__di-show').slideToggle('slow');
  });

  // ============== focus input search ==============
  $( ".header__search-input" ).on( "focus", function() {
    $(this ).parent('.header__search').addClass('header__search-active');
  });

  $( ".header__search-input" ).on( "focusout", function() {
    $(this ).parent('.header__search').removeClass('header__search-active');
  });

  // ============== add card like and comprasion ==============
  $( ".short-item__add-link" ).on( "click", function() {
    $(this ).toggleClass('short-item__add-link-active');
    clickItem = $(this).parent();
    activeItemClick(clickItem)
  });

  $( ".short-item__add-compare" ).on( "click", function() {
    $(this ).toggleClass('short-item__add-compare-active');
    clickItem = $(this).parent();
    activeItemClick(clickItem)
  });

  // ============== проверка для активной карточки ==============
  function activeItem(){
    if($('.short-item__add-link').hasClass('short-item__add-compare-active') ||
     $('.short-item__add-compare').hasClass('short-item__add-compare-active')){
      $('.short-item__add-link-active').parent('.short-item__rt-info').addClass('short-item__rt-info-active');
    } else {
      $('.short-item__add-link-active').parent('.short-item__rt-info').removeClass('short-item__rt-info-active');
    }
  }
  activeItem()

  function activeItemClick(clickItem){
    if($(clickItem).children('.short-item__add-link').hasClass('short-item__add-link-active') || 
    $(clickItem).children('.short-item__add-compare').hasClass('short-item__add-compare-active')){
      $(clickItem).addClass('short-item__rt-info-active')
    } else {
      $(clickItem).removeClass('short-item__rt-info-active')
    }
  }

   // ============== arrow button top up ==============
   $(window).scroll(function(){
     if($(window).scrollTop() > 100){
      $('#arrow-top-page').fadeIn(700)
     } else {
      $('#arrow-top-page').fadeOut(700)
     }

     if($(window).scrollTop() > 1){
      // $('#header').addClass('header__fixed-header')
     } else {
      // $('#header').removeClass('header__fixed-header')
     }
   })

   $('#arrow-top-page').click(function(){
     $('html, body').animate({scrollTop: 0}, 600)
     return false
   })

    // ============== cheange style (line to block) category items ==============
    $('#line-view-style-button').click(function(){
      $(this).addClass('active')
      $('#block-view-style-button').removeClass('active')

      $('#item-list-style').addClass('active-list-style-view')

    })

    $('#block-view-style-button').click(function(){
      $(this).addClass('active')
      $('#line-view-style-button').removeClass('active')

      $('#item-list-style').removeClass('active-list-style-view')
    })
})
