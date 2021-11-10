'use strict'

feather.replace();

// append header panel
$.ajax({
  url: '../header.html',
  success: function(result){
    $('body').prepend(result);
  }
});

// append modals panel
$.ajax({
  url: '../modals.html',
  success: function(result){
    var modSwitch = $(result);
    $('body').append(result);
  }
});

// append chatbox
$.ajax({
  url: '../chatbox.html',
  success: function(result){
    $('body').append(result);
  }
});

// initialize tooltip
$('[data-toggle="tooltip"]').tooltip();

// initialize popover
$('[data-toggle="popover"]').popover();

// append backdrop
$('body').append('<div class="backdrop"></div>');
$('body').on('click', '.backdrop', function(e){
  e.preventDefault();
  $('body').removeClass('switch-property-show');
  $('#propMenu').removeClass('switch-customer-show switch-property-show');
});

// tooltip for leftbar
$('.leftbar .nav-link').tooltip({
  placement: 'right',
  container: '.leftbar'
})

$('.form-search input').on('focusin focusout', function(e){
  var onFocus = (e.type === 'focusin')? true : false;
  $(this).parent().toggleClass('onfocus', onFocus);
});


$('body').on('click', '#headerMenu', function(e){
  e.preventDefault();
  $('body').toggleClass('switch-property-show');
});

// show header sub menu
$('body').on('click', '.nav-header .with-sub', function(e){
  e.preventDefault();
  $(this).parent().toggleClass('show');
});

// toggle chat panel when clicking see all messages in message
// in message dropdown notifications
$('#seeAllMsg').on('click touch', function(e){
  e.preventDefault();

  $('#chatBoxGroup').addClass('open');
})

// hide other sub menu when showing profile menu
$('.dropdown-profile .dropdown-link').on('click', function(e){
  $('.property-menu').removeClass('show');
  $('.nav-header .show').removeClass('show');
});

// prevent dropdown-profile from hiding when clicking inside
$('#dropdownMenuProfile').on('click', function(e){
  if(!$(e.target).is('#switchAccount') && !$(e.target).is('#myProfileLink')) {
    e.stopPropagation();
  }
});

$(document).on('click touchstart', function(e){
  e.stopPropagation();

  // close switch property panel
  var propMenu = $(e.target).closest('.property-menu').length;
  var headerLogo = $(e.target).closest('#headerLogo').length;

  if(!propMenu && !headerLogo) {
    //$('.property-menu').removeClass('show');
  }

  // close header sub menu
  var headMenu = $(e.target).closest('.nav-item.show').length;
  if(!headMenu) {
    $('.nav-header .show').removeClass('show');
  }

});

// Form Switcher
$('body').on('click', '.form-switcher', function(e) {
  e.preventDefault();
  if(!$(this).hasClass('disabled')) {
    $(this).toggleClass('inactive');
  }
});

// Dropdown select
$('.dropdown-select .dropdown-item').on('click', function(e){
  e.preventDefault();

  $(this).addClass('disabled').siblings().removeClass('disabled');

  var val = $(this).text();
  var selected = $(this).closest('.dropdown-select').find('.dropdown-link span');
  selected.text(val);
});

// Form Group Custom
$('.form-group-custom .form-control').on('focusin focusout', function(e){
  if(e.type === 'focusin') {
    $(this).parent().addClass('onfocus');
  } else {
    $(this).parent().removeClass('onfocus');

    if($(this).val()) {
      $(this).parent().addClass('onfilled');
    } else {
      $(this).parent().removeClass('onfilled');
    }
  }
});

$('.dropdown-chat .list-group-item').on('click', function(e){
  e.preventDefault();
  $('#chatbox1').removeClass('chatbox-minimize d-none');
});

// tooltip
$('.property-item-link').tooltip({
  container: '.property-menu'
});

// Look for checked checkbox after page load
$('tbody .form-checkbox input').each(function(){
  var isChecked = $(this).prop('checked');

  $(this).parent().toggleClass('checked', isChecked);
  $(this).closest('tr').toggleClass('selected', isChecked);
});

// Table select a row
$('tbody .form-checkbox').on('click', function(e){
  var isChecked = $(this).find('input').prop('checked');

  $(this).toggleClass('checked', !isChecked);
  $(this).closest('tr').toggleClass('selected', !isChecked);
  $(this).find('input').prop('checked', !isChecked);
});

//check all
$('#checkAll').on('click', function(e){
  var isChecked = $(this).find('input').prop('checked');
  var table = $(this).closest('table');

  $(this).toggleClass('checked', !isChecked);
  $(this).find('input').prop('checked', !isChecked);

  table.find('tbody tr').toggleClass('selected', !isChecked);
  table.find('tbody .form-checkbox').toggleClass('checked', !isChecked);
  table.find('tbody .form-checkbox input').prop('checked', !isChecked);
});


// compete script
$('.compete-star').on('click', function(e){
  e.preventDefault();
  $(this).toggleClass('active');
});

$('#selectSource').select2({
  minimumResultsForSearch: Infinity,
  width: '100%'
});


// Skeleton loader sample presentation
setTimeout(function(){
  $('.skeleton-content').removeClass('skeleton-content');
  $('.skeleton').remove();
}, 3000);
