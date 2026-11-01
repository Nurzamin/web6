$(document).ready(function () {
  console.log("jQuery is ready!");

  $("nav a").each(function () {
    if (this.href === window.location.href) {
      $(this).addClass("active");
    }
  });
});
