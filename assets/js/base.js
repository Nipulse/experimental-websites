$(document).ready(function() {
  $(".entry-link").click(function(){
      $('.entry-container div').fadeOut();
      $('.home-text').fadeIn();
      $('.entry-container').delay(700).css('background','url(https://media3.giphy.com/media/MaThe6p8WAKbf9NDDM/giphy.gif?cid=ecf05e47j9fbokhc2jpollyvs4gfcv5o2szymjq33w14lnwh&rid=giphy.gif&ct=g) no-repeat');
      $('.entry-container').css('background-size','100vw 100vh');
      $('.navbar').slideDown(600);
  }); 

  
  $("#backtotop").click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  }); 
});

