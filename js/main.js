// wow 
new WOW().init();
// sart stats counter number 
const counternum = function () {

  $('#stats').waypoint(function () {

    const comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
    $('.number').each(function () {
      const $this = $(this),
        num = $this.data('goal');

      $this.animateNumber(
        {
          number: num,
          numberStep: comma_separator_number_step
        }, 3000
      );
    });



  }, { offset: '55%' });

}
counternum();


jQuery(document).ready(function ($) {

  'use strict';

  $(function () {

    // Vars
    var modBtn = $('#modBtn'),
      modal = $('#modal'),
      close = modal.find('.close-btn img'),
      modContent = modal.find('.modal-content');

    // open modal when click on open modal button 
    modBtn.on('click', function () {
      modal.css('display', 'block');
      modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
    });
    // close modal when click on close button or somewhere out the modal content 
    $(document).on('click', function (e) {
      var target = $(e.target);
      if (target.is(modal) || target.is(close)) {
        modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function (next) {
          modal.css('display', 'none');
          next();
        });
      }
    });

  });
  // on click event on all anchors with a class of scrollTo
  $('a.scrollTo').on('click', function () {
    // data-scrollTo = section scrolling to name
    var scrollTo = $(this).attr('data-scrollTo');
    // toggle active class on and off. added 1/24/17
    $("a.scrollTo").each(function () {
      if (scrollTo == $(this).attr('data-scrollTo')) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });

    // animate and scroll to the sectin 
    $('body, html').animate({

      // the magic - scroll to section
      "scrollTop": $('#' + scrollTo).offset().top
    }, 1000);
    return false;

  })

  $(".menu-icon").click(function () {
    $(this).toggleClass("active");
    $(".overlay-menu").toggleClass("open");
  });

});

/************** LightBox *********************/
$(function () {
  $('[data-rel="lightbox"]').lightbox();
});

// show and hide gallery content 
function showhide() {
  var div = document.getElementById("newpost");
  if (div.style.display !== "none") {
    div.style.display = "none";
  }
  else {
    div.style.display = "block";
  }
}

$('.gallery_more').click(function () {
  var $this = $(this);
  $this.toggleClass('gallery_more');
  if ($this.hasClass('gallery_more')) {
    $this.text('Load More');
  } else {
    $this.text('Load Less');
  }
});

// owl 



var carousel = function () {
  $('.off-content').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    Touch: true,
    items: 1,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
  $('.user-content').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    center: true,
    loop: true,
    items: 1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
};
carousel();
