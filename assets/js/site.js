$(function(){
  'use strict'

  $('.select2').select2({
    minimumResultsForSearch: Infinity,
    placeholder: 'Unassigned'
  });

  $('[data-toggle="tooltip"]').tooltip({
    container: $('.content')
  });

  $('[data-toggle="popover"]').popover({
    container: $('.content')
  });

  $('.form-control').on('keypress', function(e){
    $('body').addClass('save-panel-show');
  });

  // toast initialize
  $('.toast').toast({
    delay: 5000,
    //autohide: false
  });

  $('#discardChanges').on('click', function(e) {
    e.preventDefault();
    $('body').removeClass('save-panel-show');
  });

  $('#saveChanges').on('click', function(e){
    e.preventDefault();
    $(this).addClass('disabled');

    setTimeout(function(){
      $('#toastSite').toast('show');
      $('#saveChanges').removeClass('disabled');
      $('body').removeClass('save-panel-show');
    }, 1500);

  });

  $('#toastSite').on('hidden.bs.toast', function(e) {
    setTimeout(function(){
      $('body').removeClass('save-panel-show');
      $('#saveChanges').removeClass('saved');
      $('#saveChanges').prop('disabled', false);
    }, 200);
  });

  $('.site-image-add').on('click', function(e){
    e.preventDefault();
    $(this).next().find('input').trigger('click');
  });

  // For displaying modal directly from url
  // For demo use only
  $.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return (results!=null)? results[1] || 0 : 0;
  }

  if($.urlParam('modal')) {
    if($.urlParam('modal') === 'leavepage') {
      $('#leaveModal').modal('show');
    }
  }

});
