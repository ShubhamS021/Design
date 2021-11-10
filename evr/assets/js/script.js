$(function(){
  'use script'

  $('#headerMenu').on('click', function(e){
    e.preventDefault();
    $('body').toggleClass('menu-show');
  })
})
