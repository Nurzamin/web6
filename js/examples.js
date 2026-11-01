$(document).ready(function () {
  $("#byId")
    .text("This text was changed with #byId selector.")
    .css("color", "#2879a8");

  $(".byClass")
    .html("This <strong>HTML</strong> was changed with a class selector.")
    .css("background-color", "#e9f4f7");

  $("p.tagExample").css({
    "border-left": "4px solid #ef9e5b",
    padding: "8px"
  });

  let count = 1;

  $("#add").click(function () {
    $("#list").append("<li> Item " + count + "</li>");
    count++;
  });

  $("#prepend").click(function () {
    $("#list").prepend("<li>Top item"+count +"</li>");
    count++;
  });

  $("#remove").click(function () {
    $("#list li:last").remove();
  });

  $("#changeImage").click(function () {
    $("#attributeImage").attr(
      "src",
      "https://i.pinimg.com/736x/34/4e/b0/344eb003dd6b4cd38a7122477f13f8e3.jpg"
    );
  });

  $("#changeLink").click(function () {
    $("#dynamicLink")
      .attr("href", "https://lms.astanait.edu.kz")
      .text("lms");
  });

  $("#name, #email").on("input", function () {
    $("#liveName").text($("#name").val() || "—");
    $("#liveEmail").text($("#email").val() || "—");
  });

  $("#accordion .acc-title").click(function () {
    $(this).next(".panel").slideToggle(250);
  });

  $(".gallery img").click(function () {
    $(this)
      .fadeTo(150, 0.55)
      .fadeTo(250, 1)
      .animate({ width: "+=18px", height: "+=12px" }, 200)
      .animate({ width: "-=18px", height: "-=12px" }, 200);
  });
});
