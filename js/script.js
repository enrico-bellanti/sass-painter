$(document).ready(function() {
  $("#hamburger").click(function() {
    $(".header-top").toggle();
    $(".primary-nav li").toggle();
    $(".primary-nav li:first-child").toggle();
  });

  var div = $( ".carousel-after" );
  $( ".carousel-after" ).resizable({
    "maxWidth": $( ".carousel-after" ).offsetWidth,
    "minWidth": 0,
    "maxHeight": $( ".carousel-after" ).offsetHeight,
    "minHeight": $( ".carousel-after" ).offsetHeight,
    "handles": "e"
  });
});
