$(document).ready(function () {
  function resetBox(id) {
    $("#" + id).stop(true).css({
      left: 0,
      top: 0,
      width: 70,
      height: 70,
      opacity: 1
    });
  }

  $("#basicBtn").click(function () {
    resetBox("box1");
    $("#box1").animate(
      {
        left: "+=150px",
        width: "+=30px",
        height: "+=30px"
      },
      700
    );
  });

  $("#sequenceBtn").click(function () {
    resetBox("box2");
    $("#box2")
      .animate({ left: "+=150px" }, 500)
      .animate({ top: "+=70px" }, 500)
      .animate({ width: 30, height: 30 }, 500)
      .animate(
        {
          left: 0,
          top: 0,
          width: 70,
          height: 70
        },
        600
      );
  });

  $("#combinedBtn").click(function () {
    resetBox("box3");
    $("#box3").animate(
      {
        left: "+=150px",
        width: "+=30px",
        height: "+=30px",
        opacity: 0.5
      },
      900
    );
  });

  $(".reset").click(function () {
    resetBox($(this).data("box"));
  });
});
