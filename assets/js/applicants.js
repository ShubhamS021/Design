$(function() {
  'use strict'

  new PerfectScrollbar('#mediaBodyApplicant', {
    suppressScrollX: true
  });

  new PerfectScrollbar('#mediaBodyApplicantB', {
    suppressScrollX: true
  });

  new PerfectScrollbar('#mediaFormApplicant', {
    suppressScrollX: true
  });

  $('.select2').select2({
    minimumResultsForSearch: Infinity,
    width: '100%'
  });

  $('#cradio1').on('click', function(e){
    $('#notEmployed').removeClass('d-none');
  });

  $('#cradio2').on('click', function(e){
    $('#notEmployed').addClass('d-none');
  });

  $('#cradio1B').on('click', function(e){
    $('#notEmployedB').removeClass('d-none');
  });

  $('#cradio2B').on('click', function(e){
    $('#notEmployedB').addClass('d-none');
  });

  $('#idType').on('change', function(e){
    var v = $(this).val();

    $('#idTypeValue > div:first-child').removeClass('d-none');
    $('#formPassport').addClass('d-none');
    $('#formIntID').addClass('d-none');

    if(v === 'ssn') {
      $('#idTypeValue > div:first-child .form-label').text('SSN');
      $('#idTypeValue > div:first-child .form-control').attr('placeholder', 'Enter SSN number');
    } else if(v === 'usdl') {
      $('#idTypeValue > div:first-child').addClass('d-none');
    } else if(v === 'usic') {
      $('#idTypeValue > div:first-child .form-label').text('US Identity Card');
      $('#idTypeValue > div:first-child .form-control').attr('placeholder', 'Enter US Identity number');
    } else if(v === 'pport') {
      $('#idTypeValue > div:first-child').addClass('d-none');
      $('#formIntID').addClass('d-none');
      $('#formPassport').removeClass('d-none');
    } else if(v === 'iid') {
      $('#idTypeValue > div:first-child').addClass('d-none');
      $('#formPassport').addClass('d-none');
      $('#formIntID').removeClass('d-none');
    }
  });

  $('#idTypeB').on('change', function(e){
    var v = $(this).val();

    $('#idTypeValueB > div:first-child').removeClass('d-none');
    $('#formPassportB').addClass('d-none');
    $('#formIntIDB').addClass('d-none');

    if(v === 'ssn') {
      $('#idTypeValueB > div:first-child .form-label').text('SSN');
      $('#idTypeValueB > div:first-child .form-control').attr('placeholder', 'Enter SSN number');
    } else if(v === 'usdl') {
      $('#idTypeValueB > div:first-child').addClass('d-none');
    } else if(v === 'usic') {
      $('#idTypeValueB > div:first-child .form-label').text('US Identity Card');
      $('#idTypeValueB > div:first-child .form-control').attr('placeholder', 'Enter US Identity number');
    } else if(v === 'pport') {
      $('#idTypeValueB > div:first-child').addClass('d-none');
      $('#formIntIDB').addClass('d-none');
      $('#formPassport').removeClass('d-none');
    } else if(v === 'iid') {
      $('#idTypeValueB > div:first-child').addClass('d-none');
      $('#formPassportB').addClass('d-none');
      $('#formIntIDB').removeClass('d-none');
    }
  });

  $('#btnDuplicateEmployer').on('click', function(e){
    e.preventDefault();
    $('#employerDuplicate').removeClass('d-none');
  });

  $('#btnDuplicateEmployerB').on('click', function(e){
    e.preventDefault();
    $('#employerDuplicateB').removeClass('d-none');
  });

  $('#btnDuplicateEmployer2').on('click', function(e){
    e.preventDefault();
    $('#employerDuplicate2').removeClass('d-none');
  });

  $('#ddLeaseStatus .dropdown-item').on('click', function(e){
    e.preventDefault();
    var c = $(this).attr('class').split(' ');
    $(this).closest('.dropdown-menu').siblings('.dropdown-link').removeClass('approved conapproved denied');
    $(this).closest('.dropdown-menu').siblings('.dropdown-link').addClass(c[1]);
  });

  $('#tabUserOne .nav-applicant .nav-link').on('click', function(e){
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');

    var target = $(this).attr('href');
    $('#mediaBodyApplicant').animate({
      scrollTop: $(target).offset().top
    }, 500);
  });

  $('#tabUserTwo .nav-applicant .nav-link').on('click', function(e){
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');

    var target = $(this).attr('href');
    $('#mediaBodyApplicantB').animate({
      scrollTop: $(target).offset().top
    }, 500);
  });

  $('#tabUserNew .nav-applicant .nav-link').on('click', function(e){
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');

    var target = $(this).attr('href');
    $('#mediaFormApplicant').animate({
      scrollTop: $(target).offset().top
    }, 500);
  });

  $('#addApplicant').on('click', function(e){
    e.preventDefault();

    $('#linkUserNew').removeClass('d-none');
    $('#linkUserNew').tab('show');
  });

  $('#ckMoreInfo').on('click', function(){
    var c = $(this).is(':checked');
    if(!c) {
      $('#moreInfoPanel').removeClass('d-none');
      $('#tabUserOne .nav-applicant .nav-link').removeClass('disabled');
    } else {
      $('#moreInfoPanel').addClass('d-none');
      $('#tabUserOne .nav-applicant .nav-link:not(:first-child)').addClass('disabled');
    }
  });

  $('#ckMoreInfoB').on('click', function(){
    var c = $(this).is(':checked');
    if(!c) {
      $('#moreInfoPanelB').removeClass('d-none');
      $('#tabUserTwo .nav-applicant .nav-link').removeClass('disabled');
    } else {
      $('#moreInfoPanelB').addClass('d-none');
      $('#tabUserTwo .nav-applicant .nav-link:not(:first-child)').addClass('disabled');
    }
  });

  $('#ckMoreInfo2').on('click', function(){
    var c = $(this).is(':checked');
    if(!c) {
      $('#moreInfoPanel2').removeClass('d-none');
      $('#tabUserNew .nav-applicant .nav-link').removeClass('disabled');
    } else {
      $('#moreInfoPanel2').addClass('d-none');
      $('#tabUserNew .nav-applicant .nav-link:not(:first-child)').addClass('disabled');
    }
  });

  $('#cradio3').on('click', function(e){
    $('#notEmployed2').removeClass('d-none');
  });

  $('#cradio4').on('click', function(e){
    $('#notEmployed2').addClass('d-none');
  });

  $('.modal-dependent').on('click', '.remove-dependent', function(e){
    e.preventDefault();

    var p = $(this).closest('.dependent-item');
    if(p.hasClass('prime'))
      p.addClass('d-none')
    else
      p.remove();
  });

  $('#btnAddDependent').on('click', function(){
    if($('.dependent-item.prime').hasClass('d-none')) {
      $('.dependent-item.prime').removeClass('d-none');
    } else {
      var dil = $('.dependent-item').length + 2;
      var din = $('.dependent-item.prime').clone().removeClass('prime');
      din.insertAfter('.dependent-item:last-child');
      din.find('.section-title span').text('Dependent '+ dil);
    }
  });

  $('.media').on('click', '.remove-employer', function(e){
    e.preventDefault();

    var p = $(this).closest('.employer-duplicate');
    p.addClass('d-none');
  });


  $('.emp-start-date').datepicker({
    showButtonPanel: true,
    dateFormat: 'MM dd, yy'
  });

  $('.btn-save-applicant').on('click', function(){
    var e = $(this).closest('.media-applicant').find('.custom-control-applicant');
    var checked = e.is(':checked');


    if(checked) {
      e.closest('.applicant-info-control').addClass('awaiting');
      e.siblings('.custom-control-label').text('Awaiting Applicant Information');
      $(this).closest('.media-applicant').find('.applicant-info-control .nav').removeClass('d-none');
    } else {
      e.closest('.applicant-info-control').removeClass('awaiting');
      e.siblings('.custom-control-label').text('Email applicant to fill in their application with their own information');
      $(this).closest('.media-applicant').find('.applicant-info-control .nav').addClass('d-none');
    }
  });

  $('.form-switcher-q2').on('click', function(){
    var i = $(this).hasClass('inactive')? true : false;
    $(this).parent().siblings('.collapse').toggleClass('show', i);
  });

  $('.select-num-pets').on('change', function(e){
    var t = $(this).attr('data-target');
    var m = $(this).attr('data-multi');
    var v = $(this).val();
    var c = 0;

    switch(v) {
      case 'none':
        $(t).addClass('d-none');
      break;

      case '1':
        $(t).removeClass('d-none');
        $(t).removeClass('multi');
      break;

      default:
        $(t).removeClass('d-none');
        $(m).find('.formpanel-pet').removeClass('d-none');
        $(t).addClass('multi');
    }

    $(m).find('.formpanel-pet').remove();

    $(t).find('.form-title span:last-child').text(v);
    $(m).find('.formpanel-pet .form-title span:last-child').text(v);

    while(c < (parseInt(v) - 1)) {
      var n = $(t).clone().appendTo(m);

      n.find('.form-label-pet span').text(c + 2);
      n.find('.form-title span:not(:last-child)').text(c + 2);
      n.find('.form-control').val('');
      n.find('.custom-select').val('');
      c++;
    }
  });


  // vehicles
  $('.select-num-vehicles').on('change', function(e){
    var t = $(this).attr('data-target');
    var m = $(this).attr('data-multi');
    var v = $(this).val();
    var c = 0;

    switch(v) {
      case 'none':
        $(t).addClass('d-none');
      break;

      case '1':
        $(t).removeClass('d-none');
        $(t).removeClass('multi');
      break;

      default:
        $(t).removeClass('d-none');
        $(m).find('.formpanel-vehicle').removeClass('d-none');
        $(t).addClass('multi');
    }

    $(m).find('.formpanel-vehicle').remove();

    $(t).find('.form-title span:last-child').text(v);
    $(m).find('.formpanel-vehicle .form-title span:last-child').text(v);

    while(c < (parseInt(v) - 1)) {
      var n = $(t).clone().appendTo(m);
      n.find('.form-title span:not(:last-child)').text(c + 2);
      n.find('.form-control').val('');
      n.find('.custom-select').val('');
      c++;
    }
  });

  // Toggle
  $('.media-question input').on('click', function(){
    var v = $(this).val();
    if(v === 'yes') {
      $(this).closest('.media-question').find('.collapse').addClass('active show');
    } else {
      $(this).closest('.media-question').find('.collapse').removeClass('active show');
    }
  });



  // ------------------
  $.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return (results!=null)? results[1] || 0 : 0;
  }

  if($.urlParam('tab')) {
    if($.urlParam('tab') === 'new') {
      $('#linkUserNew').removeClass('d-none');
      $('#linkUserNew').tab('show');
    }
  }

  if($.urlParam('tab')) {
    if($.urlParam('tab') === 'user2') {
      $('#tabUserTwo').tab('show');
    }
  }

  if($.urlParam('modal')) {
    if($.urlParam('modal') === 'unit') {
      $('#modalUnit').modal('show');
    }
  }

  $('.btn-select-rentable').on('click', function(e){
    e.preventDefault();

    $(this).toggleClass('btn-primary btn-outline-primary');
    $(this).closest('tr').toggleClass('selected');
    if($(this).closest('tr').hasClass('selected')) {
      $(this).text('Selected');
    } else {
      $(this).text('Select');
    }
  })

});
