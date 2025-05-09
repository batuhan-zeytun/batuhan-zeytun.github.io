$(function(){
  // Mobile nav toggle
  $('.menu-toggle').click(function(){
    $(this).toggleClass('active');
    $('.nav-list').toggleClass('active');
  });

  // Slick hero slider
  if ($('.hero-slider').length){
    $('.hero-slider').slick({
      dots:true,
      arrows:false,
      autoplay:true,
      autoplaySpeed:4000,
      fade:true,
      cssEase:'linear'
    });
  }

  // jQuery UI widgets
  if ($('#about-accordion').length){
    $('#about-accordion').accordion({collapsible:true,heightStyle:'content'});
  }
  if ($('#influencers-accordion').length){
    $('#influencers-accordion').accordion({collapsible:true,heightStyle:'content'});
  }
  if ($('#pieces-tabs').length){
    $('#pieces-tabs').tabs();
  }
  if ($('#move-search').length){
    $('#move-search').autocomplete({
      source:[
        'Pawn to E4','Knight to F3','Bishop to C4',
        'Queen to D8','Rook to A1','King to E1'
      ],
      minLength:1
    });
  }

  // Magnific Popup
  if ($('.popup-link').length){
    $('.popup-link').magnificPopup({type:'image',gallery:{enabled:true}});
  }

  // GSAP hero text
  if ($('.hero-content').length){
    gsap.from('.hero-content h2',{y:50,opacity:0,duration:1});
    gsap.from('.hero-content p',{y:50,opacity:0,duration:1,delay:.2});
    gsap.from('.hero-content .btn',{y:50,opacity:0,duration:1,delay:.4});
  }

  // AOS init
  AOS.init({duration:800,offset:120});
  
  // AJAX: Load chess tips from local JSON file
  $.ajax({
    url: 'public/data/tips.json',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      let tipsHtml = '';
      data.tips.forEach(tip => {
        tipsHtml += `<li>${tip}</li>`;
      });
      $('#tips-list').html(tipsHtml);
    },
    error: function() {
      $('#tips-list').html('<li>Could not load tips.</li>');
    }
  });

  // AJAX: Load chess news from external API
  $.ajax({
    url: 'https://api.chess.com/pub/news',
    method: 'GET',
    success: function(data) {
      let newsHtml = '';
      if (data.articles) {
        data.articles.slice(0,5).forEach(article => {
          newsHtml += `<li><a href="${article.url}" target="_blank">${article.title}</a></li>`;
        });
      } else {
        newsHtml = '<li>No news found.</li>';
      }
      $('#news-list').html(newsHtml);
    },
    error: function() {
      $('#news-list').html('<li>Could not load news.</li>');
    }
  });

  // jQuery UI Accordion for FAQ
  $(function() {
    $("#faq-accordion").accordion();
  });
});
