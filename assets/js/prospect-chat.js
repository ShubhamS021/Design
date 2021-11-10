
'use strict';

$('body').on('click', '#pcMenu', function(e){
  e.preventDefault();

  $(this).addClass('d-none');
  $('#pcPanel').addClass('show');
  $('#pcNav').removeClass('show');

  $('.response-item-welcome').removeClass('d-none');

  setTimeout(function(){
    $('.response-item-welcome').addClass('show');
    $('#responseOptions').removeClass('d-none');
  }, 500);

  setTimeout(function(){
    $('#responseOptions').addClass('show');
  }, 800);
});

$('body').on('mouseover', '#pcMenu', function(e) {
  $('#pcNav').addClass('show');
})

$('body').on('click', '#pcClose', function(e){
  e.preventDefault();

  $('#pcPanel').removeClass('show');
  $('#pcMenu').removeClass('d-none');
});

$('#responseGroup').on('resize', function(e){
  $('.proschat-body').animate({ scrollTop: scroll.prop('scrollHeight') }, 1000);
  console.log('tt');
});

function response_typing() {
  setTimeout(function(){
    $('#responseTyping').removeClass('d-none').addClass('show');

    setTimeout(function(){
      $('#responseTyping').addClass('d-none').removeClass('show');
    }, 1000);
  }, 500);
}

$('.card-response-option').on('click', function(e){
  e.preventDefault();
  $(this).closest('.response-options').addClass('d-none').removeClass('show');
  response_typing();
});

$('#pcViewPhotos').bind('click', function(e){
  $('<li class="response-item show"><div class="response-chat">View Photos</div></li>').insertBefore('#responseTyping');

  setTimeout(function(){
    $('#responsePhotos').clone().removeAttr('id').removeClass('d-none').addClass('show').insertBefore('#responseTyping');

    setTimeout(function(){
      $('#responseOptions').removeClass('d-none').addClass('show');
    }, 2000);
  }, 2000);
});

$('#pcPricesAvailability').bind('click', function(e){
  $('<li class="response-item show"><div class="response-chat">Check Prices/Availability</div></li>').insertBefore('#responseTyping');

  setTimeout(function(){
    var cn = '<div class="avatar"><i class="ri-robot-fill"></i></div>';
    cn += '<div class="card-response">Sure, just a moment while I direct you to the pricing and floor plans page.</div>';

    $('<li class="response-item show">' + cn + '</li>').insertBefore('#responseTyping');

    setTimeout(function(){
      $('#responseOptions').removeClass('d-none').addClass('show');
    }, 1000);
  }, 2000);
});

$('#pcResidentAccess').bind('click', function(e){
  $('<li class="response-item show"><div class="response-chat">Resident Access</div></li>').insertBefore('#responseTyping');

  setTimeout(function(){
    var cn = '<div class="avatar"><i class="ri-robot-fill"></i></div>';
    cn += '<div class="card-response">Sure, just a moment while I direct you to the resident portal.</div>';

    $('<li class="response-item show">' + cn + '</li>').insertBefore('#responseTyping');

    setTimeout(function(){
      $('#responseOptions').removeClass('d-none').addClass('show');
    }, 1000);
  }, 2000);
});


// live agent
$('body').on('click', '#pcLiveAgent', function(e){
  e.preventDefault();

  $('#responseOptions').removeClass('show').addClass('d-none');
  $('<li class="response-item show"><div class="response-chat">Transfer to live agent</div></li>').insertBefore('#responseTyping');

  response_typing();

  setTimeout(function(){
    var cn = '<div class="avatar"><i class="ri-robot-fill"></i></div>';
    cn += '<div class="card-response">Sure thing, requesting a live agent to join chat. This may take a moment.</div>';

    $('<li class="response-item show">' + cn + '</li>').insertBefore('#responseTyping');

    setTimeout(function(){
      var cn = '<div class="avatar"><i class="ri-robot-fill"></i></div>';
      cn += '<div class="card-response">Unfortunately, there are no agents available at this time. <br><br> I will have someone from our team respond as soon as possible.</div>';

      $('<li class="response-item show">' + cn + '</li>').insertBefore('#responseTyping');

      $('.response-item-name').addClass('show');
    }, 1000);

  }, 1500);
});

$('#pcNav .close').on('click', function(e) {
  e.preventDefault();
  $('#pcNav').removeClass('show');
});

$('body').on('click', '#btnSubmitName', function(e){
  e.preventDefault();

  var fname = $('#inputFullName').val();
  if(fname === '') {
    $('#inputFullName').addClass('invalid');
  } else {
    $('<li class="response-item show"><div class="response-chat">Name: <strong>'+fname+'</strong></div></li>').insertBefore('#responseTyping');

    $(this).closest('.response-item').removeClass('show');

    setTimeout(function(){
      $('.response-item-email').addClass('show');
    }, 1000);
  }
});

$('body').on('click', '#btnSubmitEmail', function(e){
  e.preventDefault();

  var email = $('#inputEmailAddress').val();
  if(email === '') {
    $('#inputEmailAddress').addClass('invalid');
  } else {
    $('<li class="response-item show"><div class="response-chat">Email address: <strong>'+email+'</strong></div></li>').insertBefore('#responseTyping');

    $(this).closest('.response-item').removeClass('show');

    setTimeout(function(){
      $('.response-item-comment').addClass('show');
    }, 1000);
  }
});

$('body').on('click', '#btnSubmitComment', function(e){
  e.preventDefault();

  var c = $('#inputComment').val();
  if(c !== '') {
    $('<li class="response-item show"><div class="response-chat">'+c+'</div></li>').insertBefore('#responseTyping');
  }

  $(this).closest('.response-item').removeClass('show');

  response_typing();

  setTimeout(function(){
    var cn = '<div class="avatar"><i class="ri-robot-fill"></i></div>';
    cn += '<div class="card-response"><p>Thank you!</p><p class="mg-b-0">Your information has been sent to the team. We will get back to you as soon as possible.</p></div>';

    $('<li class="response-item show">' + cn + '</li>').insertBefore('#responseTyping');

    setTimeout(function(){
      $('#responseOptions').removeClass('d-none').addClass('show');
    }, 500);
  }, 1000);

});

$('body').on('click', '.link-thanks', function(e){
  e.preventDefault();

  $(this).closest('.response-item').removeClass('show');
  $('#responseOptions').removeClass('d-none').addClass('show');
});


$('#pcAskQuestion').bind('click', function(e){
  e.preventDefault();

  $('#responseOptions').removeClass('show').addClass('d-none');
  $('<li class="response-item show"><div class="response-chat">I have a question</div></li>').insertBefore('#responseTyping');

  response_typing();

  setTimeout(function(){
    var cn = '<div class="avatar"><i class="ri-robot-fill"></i></div>';
    cn += '<div class="card-response"><p>Sure! I can answer questions about:</p><ul id="pcQList" class="pc-qlist"><li>Apartments</li><li>Leasing</li><li>Promotions</li><li>Amenities</li><li>Tours</li><li>Office</li><li>Community</li><li>Neighborhood</li></ul><p class="mg-b-0">Type your question below.</p></div>';

    $('<li class="response-item response-item-question  show">' + cn + '</li>').insertBefore('#responseTyping');

    $('#pcPanel').addClass('show-chatbox');
    $('#inputQuestion').focus();
  }, 2000);
});

$('#btnSubmitQuestion').on('click', function(e){
  e.preventDefault();

  var q = $('#inputQuestion').val();
  if(q === '') {
    $('#inputQuestion').addClass('invalid');
  } else {
    $('<li class="response-item show"><div class="response-chat">'+q+'</div></li>').insertBefore('#responseTyping');
    $(this).closest('.response-item').removeClass('show');
  }
});

// schedule tour
$('#pcScheduleTour').bind('click', function(e){
  $('<li class="response-item show"><div class="response-chat">I\'d like to schedule a tour</div></li>').insertBefore('#responseTyping');

  setTimeout(function(){
    $('.response-item-tour').addClass('show');
    $('.card-response-type').addClass('show');
  }, 2000);

});

function clear_tour_form() {
  $('.card-response-type .dropdown-item').removeClass('active');
  $('.card-response-type .dropdown-link').text('Choose tour type');
  $('.btn-type-submit').addClass('btn-secondary').removeClass('btn-primary');

  $('.card-response-name .btn-tour-submit').addClass('btn-secondary').removeClass('btn-primary');
  $('.card-response-email .btn-tour-submit').addClass('btn-secondary').removeClass('btn-primary');
  $('.card-response-phone .btn-tour-submit').addClass('btn-secondary').removeClass('btn-primary');
  $('.card-response-bedrooms .btn-tour-submit').addClass('btn-secondary').removeClass('btn-primary');
}

// cancel tour
$('.cancel-tour').on('click', function(e){
  e.preventDefault();

  $(this).closest('.card-response').removeClass('show');
  $(this).closest('.response-item').removeClass('show');

  clear_tour_form();

  // clear forms
  $('.card-response .form-control').each(function(){
    $(this).val('');
  });

  response_typing();

  setTimeout(function(){
    var cn = '<div class="avatar"><i class="ri-robot-fill"></i></div>';
    cn += '<div class="card-response">Ok, I won\'t schedule a tour for you. Is there anything else I can help you with?</div>';

    $('<li class="response-item show">' + cn + '</li>').insertBefore('#responseTyping');
    $('#responseOptions').removeClass('d-none').addClass('show');
  }, 2000);

});

// choose tour type
$('.card-response-type .dropdown-item').on('click', function(e){
  e.preventDefault();
  $(this).addClass('active').siblings().removeClass('active');
  var t = $(this).find('strong').text();

  $(this).closest('.dropup').find('.dropdown-link').text(t);
  $('.btn-type-submit').addClass('btn-primary').removeClass('btn-secondary');
});


// submit tour type
$('.btn-type-submit').on('click', function(e){
  e.preventDefault();

  if($(this).hasClass('btn-primary')) {
    var p = $(this).closest('.card-response');
    var v = $('.card-response-type .dropdown-item.active strong').text();

    $('<li class="response-item show"><div class="response-chat">'+v+'</div></li>').insertBefore('#responseTyping');

    p.removeClass('show');

    if(v === 'Virtual Tour') {
      p.siblings('.card-response-name').addClass('show');
    } else {
      p.siblings('.card-response-date').addClass('show');

      $('.card-response .form-label label span:first-child:not(:last-of-type)').addClass('d-none');
      $('.card-response .form-label label span:nth-child(2)').removeClass('d-none');
    }
  }
});

//validation
$('.card-response-name .form-control').on('keydown keyup', function(e){
  var fname = $('.card-response-name .form-control[name="fname"]').val();
  var lname = $('.card-response-name .form-control[name="lname"]').val();
  var btn = $('.card-response-name .btn-tour-submit');

  if(fname !== '' && lname !== '') {
    btn.removeClass('btn-secondary').addClass('btn-primary');
  } else {
    btn.removeClass('btn-primary').addClass('btn-secondary');
  }
});

$('.card-response .form-control.flex-fill').on('keydown keyup', function(e){
  var btn = $(this).parent().find('.btn-tour-submit');
  if($(this).val() !== '') {
    btn.removeClass('btn-secondary').addClass('btn-primary');
  } else {
    btn.removeClass('btn-primary').addClass('btn-secondary');
  }
});

$('.card-response-bedrooms select').on('change', function(e){
  var btn = $('.card-response-bedrooms .btn-tour-submit');
  if($(this).val() !== '') {
    btn.removeClass('btn-secondary').addClass('btn-primary');
  } else {
    btn.removeClass('btn-primary').addClass('btn-secondary');
  }
})

$('.btn-tour-submit').on('click', function(e){
  e.preventDefault();

  var dt = $(this).attr('data-type');
  var p = $(this).closest('.card-response');
  var msg = '';

  if(dt === 'name') {
    msg += 'Name: ';
    msg += p.find('.form-control[name="fname"]').val() + ' ';
    msg += p.find('.form-control[name="lname"]').val();

  } else if(dt === 'time') {
    msg += 'Time: ';
    msg += p.find('.custom-select[name="hour"]').val() + ':';
    msg += p.find('.custom-select[name="minute"]').val() + ' ';
    msg += p.find('.custom-select[name="ampm"]').val();

  } else if(dt === 'email') {
    msg += 'Email address: ';
    msg += p.find('.form-control').val();

  } else if(dt === 'phone') {
    msg += 'Phone: ';
    msg += p.find('.form-control').val();

  } else if(dt === 'date') {
    msg += 'Date: ';
    msg += $.datepicker.formatDate('M dd, yy', $('#datepicker').datepicker('getDate'));

  } else if(dt === 'move') {
    msg += 'Move-in Date: ';
    msg += $.datepicker.formatDate('M dd, yy', $('#datepicker1').datepicker('getDate'));

  }  else if(dt === 'bedrooms') {
    msg += 'Bedrooms: ';
    msg += p.find('.custom-select').val();

  }  else if(dt === 'floor') {
    if(p.find('.custom-select').val() !== '') {
      msg += 'Floor Plan: ';
      msg += p.find('.custom-select').val();
    }
  }

  p.removeClass('show');
  p.next().addClass('show');

  if(msg !== '') {
    $('<li class="response-item show"><div class="response-chat">'+ msg +'</div></li>').insertBefore('#responseTyping');
  }

  if($(this).closest('.card-response-floor').length > 0) {
    $('.response-item-tour').removeClass('show');

    clear_tour_form();
    response_typing();

    setTimeout(function(){
      var cn = '<div class="avatar"><i class="ri-robot-fill"></i></div>';
      cn += '<div class="card-response">Your tour is booked! Details will be sent via email and text message.</div>';

      $('<li class="response-item show">' + cn + '</li>').insertBefore('#responseTyping');
      $('#responseOptions').removeClass('d-none').addClass('show');
    }, 2000);
  }
});

if($.datepicker) {
  $('#datepicker').datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    minDate: 0,
    maxDate: '+6m'
  });

  $('#datepicker1').datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    minDate: 0,
    maxDate: '+6m'
  });
}

$('.proschat-panel').on('click', '#pcQList li', function(e){
  var t = $(this).text();
  var q = '';

  switch(t) {
    case 'Apartments':
      q = 'What 1 bedroom apartments do you have available for between $1000 and $2000?';
      break;
    case 'Leasing':
      q = 'How do I lease an apartment?';
      break;
    case 'Promotions':
      q = 'Are you running any promotions?';
      break;
    case 'Amenities':
      q = 'What amenities does the community offer?';
      break;
    case 'Tours':
      q = 'Can I schedule a tour?';
      break;
    case 'Office':
      q = 'How do I contact the leasing office?';
      break;
    case 'Community':
      q = 'What\'s the best part about living at {{property name}}?';
      break;
    case 'Neighborhood':
      q = 'What\'s there to do in the neighborhood?';
      break;
  }

  $('<li class="response-item show"><div class="response-chat">'+t+'</div></li>').insertBefore('#responseTyping');

  response_typing();

  setTimeout(function(){
    var cn = '<div class="avatar"><i class="ri-robot-fill"></i></div>';
    cn += '<div class="card-response"><p>Most common '+ t +' questions:</p><ul id="pcSubQList" class="pc-qlist"><li>'+ q +'</li><li>Question 2</li><li>Question 3</li><li>Question 4</li><li>Question 5</li></ul><button id="pcQBack" class="btn btn-white mg-b-10">Back</button><p class="mg-b-0">Type your question below.</p></div>';

    $('<li class="response-item show">' + cn + '</li>').insertBefore('#responseTyping');

    $('#pcPanel').addClass('show-chatbox');
    $('.response-item-question').removeClass('show');
  }, 2000);


  $('.proschat-panel').on('click', '#pcSubQList li', function(e){
    var t = $(this).text();
    $('#inputQuestion').val(q);
    $('#inputQuestion').focus();
  });

  $('.proschat-panel').on('click', '#pcQBack', function(e){
    var t = $(this).closest('.response-item');

    response_typing();

    setTimeout(function() {
      t.remove();
      var q = $('.response-item-question');
      q.clone().addClass('show').insertBefore('#responseTyping');
      q.remove();
    }, 2000);
  });

});
