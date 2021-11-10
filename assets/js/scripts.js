'use strict'

feather.replace();

// show header sub menu
$('#appheaderNav .with-sub').on('click', function(e){
  e.preventDefault();
  $(this).parent().toggleClass('show');
});

$(document).on('click touchstart', function(e){
  e.stopPropagation();

  // close header sub menu
  var headMenu = $(e.target).closest('.nav-item.show').length;
  if(!headMenu) {
    $('#appheaderNav .show').removeClass('show');
  }

});
