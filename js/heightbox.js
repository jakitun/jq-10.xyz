$(document).ready(function () {
  $("#container").css("height", $(window).height());
});
$(window).resize(function () {
  $("#container").css("height", $(window).height());
});
