$(function(){
  'use strict'

  $('.formpanel .form-control').on('focusin focusout', function(e){
    $(this).closest('.form-group').toggleClass('onfocus', e.type === 'focusin');
  });
  
})
