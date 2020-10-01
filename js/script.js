$(document).ready(function() {
  $("#hamburger").click(function() {
    $(".header-top").toggle();
    $(".primary-nav li").toggle();
    $(".primary-nav li:first-child").toggle();
  });
});
