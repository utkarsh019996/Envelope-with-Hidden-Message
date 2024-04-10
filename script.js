$('.top').click(function(){
  $('p').toggleClass('hide');
  $('.top').toggleClass('open');
  $('.front').click(function(){
    $('.paper').toggleClass('paperout');
    $('h3').fadeIn(4000);
  });
});