$(function(){
  'use strict'

  // header menu
  $('.nav-item-pipeline .nav-link').addClass('active');

  // leadbar
  $('#navNextTask').on('mouseenter', function(e) {
    $(this).closest('.leadbar-pager').addClass('expand');
  });

  $('#leadBar').on('mouseleave', function(e){
    $('.leadbar-pager').removeClass('expand');
  });

  //sidebar
  new PerfectScrollbar('.lead-sidebar', {
    suppressScrollX: true
  });

  $('#selectProperty').select2({
    minimumResultsForSearch: Infinity,
    placeholder: 'Select source',
    width: '100%',
    dropdownParent: $('#modalUnit')
  });

  $('.collapse-link').on('click', function(e){
    $(this).closest('.collapse-header').toggleClass('show');

    if($(this).closest('.collapse-header').hasClass('show')) {
      $(this).text('Close');
    } else {
      $(this).text('View');
    }
  });

  $('.media-unit').on('click', function(e){
    e.preventDefault();

    if($(e.target).closest('.media-img').length) {
      $('#modalUnitFloor').modal('show');
      $('#modalUnit').removeClass('fade');
      $('#modalUnit').modal('hide');
    }

    $(this).toggleClass('selected');
    $(this).closest('.col-4').siblings().find('.media-unit').removeClass('selected');

    if($(this).hasClass('selected')) {
      $('#btnSelectUnit').removeClass('btn-secondary disabled').addClass('btn-primary');
    } else {
      $('#btnSelectUnit').removeClass('btn-primary').addClass('btn-secondary disabled');
    }
  });

  $('#modalUnitFloor').on('hide.bs.modal', function(e){
    $('#modalUnit').modal('show');
    $('#modalUnit').addClass('fade');
  });

  $('#modalMap').on('show.bs.modal', function(e) {
    $('#modalUnit').removeClass('fade');
    $('#modalUnit').modal('hide');
  });

  $('#modalMap').on('hide.bs.modal', function(e){
    $('#modalUnit').modal('show');
    $('#modalUnit').addClass('fade');
  });

  $('#ddLeaseStatus .dropdown-item').on('click', function(e){
    e.preventDefault();
    var c = $(this).attr('class').split(' ');
    $(this).closest('.dropdown-menu').siblings('.dropdown-link').removeClass('approved conapproved denied pending unable');
    $(this).closest('.dropdown-menu').siblings('.dropdown-link').addClass(c[1]);

    if(c[1] === 'unable') {
      $('#alertUnable').removeClass('d-none');
    } else {
      $('#alertUnable').addClass('d-none');
    }
  });

  $('body').on('focusin focusout', '.custom-select', function(e){
    if(e.type === 'focusin') {
      $(this).addClass('onfocus')
    } else {
      if($(this).val() == '') {
        $(this).removeClass('onfocus');
      }
    }
  });

  $('#dpLease').datepicker({
    showButtonPanel: true,
    dateFormat: 'MM dd, yy',
    onSelect: function(d){
      $('#editMoveInDate').siblings().text(d);
      $('#editMoveInDate').parent().removeClass('d-none');
      $('#editMoveInDate').parent().siblings('.form-control-wrapper').addClass('d-none');
    }
  });

  $('#editMoveInDate').on('click', function(e){
    e.preventDefault();
    $(this).parent().addClass('d-none');
    $(this).parent().siblings('.form-control-wrapper').removeClass('d-none');
    $('#dpLease').datepicker('show');
  });

  $('#editRent').on('click', function(e){
    e.preventDefault();
    $(this).parent().addClass('d-none');
    $(this).parent().siblings('.form-control-wrapper').removeClass('d-none');
  });

  $('#inputRent').on('keyup', function(e){
    if(e.keyCode === 13) {
      var v = $(this).val();
      $('#editRent').siblings().text(v);
      $('#editRent').parent().removeClass('d-none');
      $('#editRent').parent().siblings('.form-control-wrapper').addClass('d-none');
    }
  });

  $('#editDeposit').on('click', function(e){
    e.preventDefault();
    $(this).parent().addClass('d-none');
    $(this).parent().siblings('.form-control-wrapper').removeClass('d-none');
  });

  $('#inputDeposit').on('keyup', function(e){
    if(e.keyCode === 13) {
      var v = $(this).val();
      $('#editDeposit').siblings().text(v);
      $('#editDeposit').parent().removeClass('d-none');
      $('#editDeposit').parent().siblings('.form-control-wrapper').addClass('d-none');
    }
  });

  $('#editTerm').on('click', function(e){
    e.preventDefault();
    $(this).parent().addClass('d-none');
    $(this).parent().siblings('.form-control-wrapper').removeClass('d-none');
  });

  $('#inputTerm').on('change', function(e){
    var v = $(this).val();
    $('#editTerm').siblings().text(v);
    $('#editTerm').parent().removeClass('d-none');
    $('#editTerm').parent().siblings('.form-control-wrapper').addClass('d-none');
  });

  $('#addRoommate').on('click', function(){
    var fc = $('#roommateGroup .roommate-item:first-child');

    if(fc.hasClass('d-none')) {
      fc.removeClass('d-none').addClass('new');
      fc.find('.form-control').val('');
      fc.find('.custom-select').val('');

    } else {
      var nr = fc.clone().appendTo('#roommateGroup');
      var rc = $('#roommateGroup .roommate-item').length;

      nr.addClass('new');
      nr.find('.section-title span').text('Roommate '+rc);
      nr.find('.form-control').val('');
      nr.find('.custom-select').val('');
    }
  });

  $('#roommateGroup').on('click', '.remove-item', function(e){
    e.preventDefault();
    var n = $(this).closest('.roommate-item').hasClass('new');
    if(n) {
      $(this).closest('.roommate-item').remove();
    } else {
      $(this).closest('.roommate-item').addClass('to-delete');
      $('#modalRoommateDelete').modal('show');
    }
  });

  $('#deleteRoommate').on('click', function(){
    $('#modalRoommateDelete').modal('hide');
    if($('#roommateGroup .to-delete').is(':first-child')) {
      $('#roommateGroup .to-delete').addClass('d-none').removeClass('to-delete');
    } else {
      $('#roommateGroup .to-delete').remove();
    }
  });

  $('#btnEditRoommate').on('click', function(e){
    $('#detailRoommate').modal('hide');
    $('#modalAddRoommate').modal('show');
  });

  $('#addPet').on('click', function(){
    var fc = $('#petGroup .roommate-item:first-child');

    if(fc.hasClass('d-none')) {
      fc.removeClass('d-none').addClass('new');
      fc.find('.form-control').val('');
      fc.find('.custom-select').val('');

    } else {
      var nr = fc.clone().appendTo('#petGroup');
      var rc = $('#petGroup .roommate-item').length;

      nr.addClass('new');
      nr.find('.section-title span').text('Pet '+rc);
      nr.find('.form-control').val('');
      nr.find('.custom-select').val('');
    }
  });

  $('#petGroup').on('click', '.remove-item', function(e){
    e.preventDefault();
    var n = $(this).closest('.roommate-item').hasClass('new');
    if(n) {
      $(this).closest('.roommate-item').remove();
    } else {
      $(this).closest('.roommate-item').addClass('to-delete');
      $('#modalPetDelete').modal('show');
    }
  });

  $('#deletePet').on('click', function(){
    $('#modalPetDelete').modal('hide');
    if($('#petGroup .to-delete').is(':first-child')) {
      $('#petGroup .to-delete').addClass('d-none').removeClass('to-delete');
    } else {
      $('#petGroup .to-delete').remove();
    }
  });

  $('#btnEditPet').on('click', function(e){
    $('#detailPet').modal('hide');
    $('#modalAddPet').modal('show');
  });

  $('#addVehicle').on('click', function(){
    var fc = $('#vehicleGroup .roommate-item:first-child');

    if(fc.hasClass('d-none')) {
      fc.removeClass('d-none').addClass('new');
      fc.find('.form-control').val('');
      fc.find('.custom-select').val('');

    } else {
      var nr = fc.clone().appendTo('#vehicleGroup');
      var rc = $('#vehicleGroup .roommate-item').length;

      nr.addClass('new');
      nr.find('.section-title span').text('Vehicle '+rc);
      nr.find('.form-control').val('');
      nr.find('.custom-select').val('');
    }
  });

  $('#vehicleGroup').on('click', '.remove-item', function(e){
    e.preventDefault();
    var n = $(this).closest('.roommate-item').hasClass('new');
    if(n) {
      $(this).closest('.roommate-item').remove();
    } else {
      $(this).closest('.roommate-item').addClass('to-delete');
      $('#modalVehicleDelete').modal('show');
    }
  });

  $('#deleteVehicle').on('click', function(){
    $('#modalVehicleDelete').modal('hide');
    if($('#vehicleGroup .to-delete').is(':first-child')) {
      $('#vehicleGroup .to-delete').addClass('d-none').removeClass('to-delete');
    } else {
      $('#vehicleGroup .to-delete').remove();
    }
  });

  $('#btnEditVehicle').on('click', function(e){
    $('#detailVehicle').modal('hide');
    $('#modalAddVehicle').modal('show');
  });


  $('.card-applicant .link-plus').on('click', function(e){
    e.preventDefault();

    $(this).toggleClass('active');
    $(this).parent().siblings('.card-footer').toggleClass('d-none');
  })
})
