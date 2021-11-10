$(function() {
  'use strict'

  ///------ CHARTS ------ ////

  var ctx1 = document.getElementById('chartLine1').getContext('2d');

  var siteReports = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ['Apr 27','Apr 30','May 3','May 6','May 12','May 15','May 18'],
      datasets: [{
        data: [120, 60, 40, 65, 95, 110, 70],
        borderColor: '#21c6b7',
        pointBackgroundColor: '#21c6b7',
        backgroundColor: 'rgba(33,198,183,.0)',
        borderWidth: 1.5,
        lineTension: 0
      },{
        data: [150, 110, 90, 115, 125, 160, 120],
        borderColor: '#2e75f9',
        pointBackgroundColor: '#2e75f9',
        backgroundColor: 'rgba(46,117,249, .0)',
        borderWidth: 1.5,
        lineTension: 0
      }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
        labels: {
          display: false
        }
      },
      scales: {
        yAxes: [{
          gridLines: {
            color: '#ebeef3'
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: '#6b7280',
            max: 160
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            fontSize: 11,
            fontColor: '#6b7280'
          }
        }]
      }
    }
  });


  var ctx2 = document.getElementById('chartLine2').getContext('2d');

  var conversionReports = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Apr 27','Apr 30','May 3','May 6','May 12','May 15','May 18'],
      datasets: [{
        data: [120, 60, 40, 65, 95, 110, 70],
        borderColor: '#21c6b7',
        pointBackgroundColor: '#21c6b7',
        backgroundColor: 'rgba(255,255,255,.0)',
        borderWidth: 1.5,
        lineTension: 0
      },{
        data: [150, 110, 90, 115, 125, 160, 160],
        borderColor: '#2e75f9',
        pointBackgroundColor: '#2e75f9',
        backgroundColor: 'rgba(255,255,255,.0)',
        borderWidth: 1.5,
        lineTension: 0
      }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
        labels: {
          display: false
        }
      },
      scales: {
        yAxes: [{
          gridLines: {
            color: '#ebeef3'
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: '#6b7280',
            max: 160
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            fontSize: 11,
            fontColor: '#6b7280'
          }
        }]
      }
    }
  });


  var ctx3 = document.getElementById('chartDonut1');
  var myDonutChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: ['Male', 'Female'],
      datasets: [{
        data: [42.3,57.7],
        backgroundColor: ['#408efb','#bfd9fe']
      }]
    },
    options: {
      cutoutPercentage: 60,
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false,
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  });

  var ctx4 = document.getElementById('chartBar4').getContext('2d');
  new Chart(ctx4, {
    type: 'horizontalBar',
    data: {
      labels: ['18-24', '25-34', '35-44', '45-54', '55-64','65+'],
      datasets: [{
        data: [50, 25, 10, 15, 20, 30],
        backgroundColor: '#408efb'
      },{
        data: [40, 20, 5, 10, 15, 25],
        backgroundColor: '#bfd9fe'
      }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false,
        labels: {
          display: false
        }
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: false
          },
          barPercentage: 0.4,
          stacked: true,
          ticks: {
            beginAtZero:true,
            fontSize: 13,
            fontColor: '#414d5e'
          }
        }],
        xAxes: [{
          gridLines: {
            color: '#e5e9f2'
          },
          stacked: true,
          ticks: {
            beginAtZero:true,
            fontSize: 11,
            fontColor: '#6b7280',
            max: 100
          }
        }]
      }
    }
  });

  var ctx5 = document.getElementById('chartDonut2');
  var myDonutChart = new Chart(ctx5, {
    type: 'doughnut',
    data: {
      labels: ['Desktop', 'Mobile', 'Tablet'],
      datasets: [{
        data: [69.8,28.2,2],
        backgroundColor: ['#0168fa','#24ba7b', '#e83e8c']
      }]
    },
    options: {
      cutoutPercentage: 60,
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false,
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  });

  var ctx6 = document.getElementById('chartDonut3');
  var myDonutChart = new Chart(ctx6, {
    type: 'doughnut',
    data: {
      labels: ['Desktop', 'Mobile', 'Tablet'],
      datasets: [{
        data: [69.8,28.2,2],
        backgroundColor: ['#0168fa','#17a2b8', '#6c4cd6']
      }]
    },
    options: {
      cutoutPercentage: 60,
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false,
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  });

  var ctx7 = document.getElementById('chartLine3').getContext('2d');

  var seoReports = new Chart(ctx7, {
    type: 'line',
    data: {
      labels: ['Apr 27','Apr 30','May 3','May 6','May 12','May 15','May 18', 'May 21', 'May 24'],
      datasets: [{
        data: [150, 110, 90, 115, 125, 160, 160, 125, 100],
        borderColor: '#2e75f9',
        pointBackgroundColor: '#2e75f9',
        backgroundColor: 'rgba(255,255,255,.0)',
        borderWidth: 1.5,
        lineTension: 0
      },{
        data: [120, 60, 40, 65, 95, 110, 70, 100, 60],
        borderColor: '#21c6b7',
        pointBackgroundColor: '#21c6b7',
        backgroundColor: 'rgba(255,255,255,.0)',
        borderWidth: 1.5,
        lineTension: 0
      }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
        labels: {
          display: false
        }
      },
      scales: {
        yAxes: [{
          gridLines: {
            color: '#ebeef3'
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: '#6b7280'
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            fontSize: 11,
            fontColor: '#6b7280'
          }
        }]
      }
    }
  });


  $('#siteMetrics .report-metric').on('click', function(e){
    e.preventDefault();

    var nb = '';
    var lb = $(this).find('.report-label').text();
    var ds = $(this).attr('data-set').split(',');
    var bg = $(this).attr('data-background');

    $(this).addClass('active');
    $(this).closest('.col').siblings().find('.report-metric').removeClass('active');

    $('#legendSite li:not(:last-child)').each(function(){
      if(!$(this).hasClass('d-none')) {
        nb = $(this).text();
        $(this).addClass('d-none');
      }

      if($(this).text() == lb) { $(this).removeClass('d-none'); }
    });

    siteReports.data.datasets.pop();

    var dataset = {
      data: ds,
      borderColor: bg,
      pointBackgroundColor: bg,
      backgroundColor: 'rgba(255,255,255,.0)',
      borderWidth: 1.5,
      lineTension: 0
    };

    siteReports.data.datasets.push(dataset);
    siteReports.update();

    // siteReports.data.datasets.forEach(function(item,index){
    //   if(bg == item.borderColor) {
    //     siteReports.data.datasets.splice(index, index);
    //   }
    // });

    siteReports.update();
  });

  $('#conversionMetrics .report-metric').on('click', function(e){
    e.preventDefault();

    var nb = '';
    var lb = $(this).find('.report-label').text();
    var ds = $(this).attr('data-set').split(',');
    var bg = $(this).attr('data-background');

    $(this).addClass('active');
    $(this).parent().siblings().find('.report-metric').removeClass('active');

    $('#legendConversion li:not(:last-child)').each(function(){
      if(!$(this).hasClass('d-none')) {
        nb = $(this).text();
        $(this).addClass('d-none');
      }

      if($(this).text() == lb) { $(this).removeClass('d-none'); }
    });

    conversionReports.data.datasets.pop();

    var dataset = {
      data: ds,
      borderColor: bg,
      pointBackgroundColor: bg,
      backgroundColor: 'rgba(255,255,255,.0)',
      borderWidth: 1.5,
      lineTension: 0
    };

    conversionReports.data.datasets.push(dataset);
    conversionReports.update();
  });

  $('#seoMetrics .report-metric').on('click', function(e){
    e.preventDefault();

    var nb = '';
    var lb = $(this).find('.report-label').text();
    var ds = $(this).attr('data-set').split(',');
    var bg = $(this).attr('data-background');

    $(this).addClass('active');
    $(this).closest('.col').siblings().find('.report-metric').removeClass('active');

    $('#legendSeo li:not(:last-child)').each(function(){
      if(!$(this).hasClass('d-none')) {
        nb = $(this).text();
        $(this).addClass('d-none');
      }

      if($(this).text() == lb) { $(this).removeClass('d-none'); }
    });

    seoReports.data.datasets.pop();

    var dataset = {
      data: ds,
      borderColor: bg,
      pointBackgroundColor: bg,
      backgroundColor: 'rgba(255,255,255,.0)',
      borderWidth: 1.5,
      lineTension: 0
    };

    seoReports.data.datasets.push(dataset);
    seoReports.update();
  });
});
