$(document).ready(function () {
  $("#hideBtn").click(function () {
    $("#visibilityText").hide(300);
  });

  $("#showBtn").click(function () {
    $("#visibilityText").show(300);
  });

  $("#toggleBtn").click(function () {
    $("#visibilityText").toggle(300);
  });

  $("#fadeInBtn").click(function () {
    $("#fadeImage").fadeIn(400);
  });

  $("#fadeOutBtn").click(function () {
    $("#fadeImage").fadeOut(400);
  });

  $("#fadeToggleBtn").click(function () {
    $("#fadeImage").fadeToggle(400);
  });

  $("#slideUpBtn").click(function () {
    $("#slidePanel").slideUp(300);
  });

  $("#slideDownBtn").click(function () {
    $("#slidePanel").slideDown(300);
  });

  $("#slideToggleBtn").click(function () {
    $("#slidePanel").slideToggle(300);
  });
});
