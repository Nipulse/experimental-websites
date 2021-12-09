$(document).ready(function() {
  $(".entry-link").click(function(){
      $('.navbar').slideDown(600);
  }); 
  $("#backtotop").click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
}); 
});

