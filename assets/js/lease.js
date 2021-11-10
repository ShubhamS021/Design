$(function(){
  'use strict';

  // append header panel
  $.ajax({
    url: '../lease/header.html',
    success: function(result){
      $('body').prepend(result);
    }
  });

  // append hobbes chat
  $.ajax({
    url: '../lease/hobbes.html',
    success: function(result){
      $('body').append(result);
    }
  });

  // initialize tooltip
  $('[data-toggle="tooltip"]').tooltip();


  $('.btn-select').on('click', function(e){
    e.preventDefault();

    if (matchMedia('(max-width: 767px)').matches) {
      $('#fpLeft').addClass('d-none');
      $('#fpRight').removeClass('d-none');
    } else {
      $('#fpLeft').removeClass('d-none');
      $('#fpRight').removeClass('d-none');
    }
  });


  $('#planRemove').on('click', function(e){
    e.preventDefault();

    if (matchMedia('(max-width: 767px)').matches) {
      $('#fpLeft').removeClass('d-none');
      $('#fpRight').addClass('d-none');
    } else {
      $('#fpLeft').removeClass('d-none');
      $('#fpRight').removeClass('d-none');
    }
  });

});
