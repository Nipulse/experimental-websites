$(document).ready(function() {
 
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
      $('.navbar').slideDown();
      $('#backtotop i').slideDown();
      $('#aboutme').css('opacity','1').css('transition','.8s ease-in');
      $('#myprojects').css('opacity','1').css('transition','.8s ease-in');
    }
    else {
      $('#backtotop i').fadeOut();
      $('.navbar').slideUp();
    }
  });

  $("#backtotop").click(function() {
      $("html, body").animate({
          scrollTop: 0
      }, "slow");
      return false;
  });

  $("#button").click(function() {
      $($("svg").get()).each(function(i) {
          $(this).css('opacity', '1').hide().delay(i * 100).fadeIn();
           $('#button').css('animation', 'none');
      });
      $($(".lang").get()).each(function(i) {
        $(this).css('opacity', '1').hide().delay(i * 100).fadeIn();
         $('#button').css('animation', 'none');
    });
  });

});