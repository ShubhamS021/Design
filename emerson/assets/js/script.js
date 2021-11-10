$(function(){
  'use strict'

  $('.burger-menu').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('.sidebar').toggleClass('show');
    $('body').toggleClass('sidebar-show');
  });


});
