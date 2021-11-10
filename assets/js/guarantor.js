$('.custom-control-guarantor').on('click', function(e){
  var c = $(this).is(':checked');
  var m = $(this).closest('.media-applicant').find('.applicant-more-info');
  if(!c) {
    m.removeClass('d-none');
    $(this).closest('.media-applicant').find('.nav-applicant .nav-link').removeClass('disabled');
  } else {
    m.addClass('d-none');
    $(this).closest('.media-applicant').find('.nav-applicant .nav-link:not(:first-child)').addClass('disabled');
  }
});

$('#addGuarantor').on('click', function(e){
  e.preventDefault();
  $('#tabGuarantorGroup .nav-link:last-child').removeClass('d-none').tab('show');
});

$('.btn-add-income').on('click', function(e){
  e.preventDefault();
  $(this).parent().find('.employer-duplicate').removeClass('d-none');
});

$('#cradio1').on('click', function(e){
  $('#notEmployed').removeClass('d-none');
});

$('#cradio2').on('click', function(e){
  $('#notEmployed').addClass('d-none');
});

$('#cradio3').on('click', function(e){
  $('#notEmployed2').removeClass('d-none');
});

$('#cradio4').on('click', function(e){
  $('#notEmployed2').addClass('d-none');
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
  var e = $(this).closest('.media-applicant').find('.custom-control-guarantor');
  var checked = e.is(':checked');


  if(checked) {
    e.closest('.applicant-info-control').addClass('awaiting');
    e.siblings('.custom-control-label').text('Awaiting Guarantor Information');
    $(this).closest('.media-applicant').find('.applicant-info-control .nav').removeClass('d-none');
  } else {
    e.closest('.applicant-info-control').removeClass('awaiting');
    e.siblings('.custom-control-label').text('Email guarantor to fill in their application with their own information');
    $(this).closest('.media-applicant').find('.applicant-info-control .nav').addClass('d-none');
  }
});
