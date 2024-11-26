$(document).ready(function() {
 
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 600) {
      $('.navbar').slideDown();
      $('#backtotop i').slideDown();
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
      $(".my-projects-link").delay(3300).fadeIn("slow");
  });

});