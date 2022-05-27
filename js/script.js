$(function () {
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
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }]
  });

  // ============== tabs ==============
  $("#full-item__tabs").tabs();


  // ============== accordion toggle ==============
  $(".full-item__di-show").hide();

  $(".full-item__di-title").on("click", function () {
    $(this).toggleClass('di-active');
    $(this).next('.full-item__di-show').slideToggle('slow');
  });

  // ============== focus input search ==============
  $(".header__search-input").on("focus", function () {
    $(this).parent('.header__search').addClass('header__search-active');
  });

  $(".header__search-input").on("focusout", function () {
    $(this).parent('.header__search').removeClass('header__search-active');
  });

  // ============== add card like and comprasion ==============
  $(".short-item__add-link").on("click", function () {
    $(this).toggleClass('short-item__add-link-active');
    clickItem = $(this).parent();
    activeItemClick(clickItem)
  });

  $(".short-item__add-compare").on("click", function () {
    $(this).toggleClass('short-item__add-compare-active');
    clickItem = $(this).parent();
    activeItemClick(clickItem)
  });

  // ============== проверка для активной карточки ==============
  function activeItem() {
    if ($('.short-item__add-link').hasClass('short-item__add-compare-active') ||
      $('.short-item__add-compare').hasClass('short-item__add-compare-active')) {
      $('.short-item__add-link-active').parent('.short-item__rt-info').addClass('short-item__rt-info-active');
    } else {
      $('.short-item__add-link-active').parent('.short-item__rt-info').removeClass('short-item__rt-info-active');
    }
  }
  activeItem()

  function activeItemClick(clickItem) {
    if ($(clickItem).children('.short-item__add-link').hasClass('short-item__add-link-active') ||
      $(clickItem).children('.short-item__add-compare').hasClass('short-item__add-compare-active')) {
      $(clickItem).addClass('short-item__rt-info-active')
    } else {
      $(clickItem).removeClass('short-item__rt-info-active')
    }
  }

  // ============== arrow button top up ==============
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $('#arrow-top-page').fadeIn(700)
    } else {
      $('#arrow-top-page').fadeOut(700)
    }

    if ($(window).scrollTop() > 1) {
      // $('#header').addClass('header__fixed-header')
      // $('#header-block').addClass('header-block__show')
    } else {
      // $('#header').removeClass('header__fixed-header')
      // $('#header-block').removeClass('header-block__show')
    }
  })

  $('#arrow-top-page').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 600)
    return false
  })

  // ============== cheange style (line to block) category items ==============
  $('#line-view-style-button').click(function () {
    $(this).addClass('active')
    $('#block-view-style-button').removeClass('active')

    $('#item-list-style').addClass('active-list-style-view')

  })

  $('#block-view-style-button').click(function () {
    $(this).addClass('active')
    $('#line-view-style-button').removeClass('active')

    $('#item-list-style').removeClass('active-list-style-view')
  })

  // ============== slider compare ==============
  $('.compare-page__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });


  function compareResize() {
    let lineNum = $('.compare-page__line-num');
    let itmTable;
    let arr = []
    let maxHeight;

    for (let z = 0; z < lineNum.length; z++) {
      itmTable = $('.itm-' + z)

      for (let i = 0; i < itmTable.length; i++) {
        getHeight = itmTable.eq(i).height();
        arr[i] = getHeight
      }
      maxHeight = Math.max.apply(null, arr) + 24;
      itmTable.css({
        "height": maxHeight + 'px'
      })
    }
  }
  compareResize()

  // ============== accordion install page ==============
  $('.work-price__category').hide()

  $('.work-price__open-category').click(function () {
    $(this).toggleClass('active')
    $(this).next('.work-price__category').slideToggle();
  })

  // ============== slider user-order-list ==============
  $('.order-list__item-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  // ============== slider reviews ==============
  $('.order-list__my-reviews-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

})