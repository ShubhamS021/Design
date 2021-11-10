$(function(){
  'use strict'

  $('.formpanel .form-control').on('focusin focusout', function(e){
    $(this).closest('.form-group').toggleClass('onfocus', e.type === 'focusin');
  });

  // header effect on scroll
  function animateHead() {
    if($(document).scrollTop() > 100) {
      $('.header').addClass('scroll');
    } else {
      $('.header').removeClass('scroll');
    }
  }

  animateHead();
  $(window).scroll(function() {
    animateHead();
  });

})
