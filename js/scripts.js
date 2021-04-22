$(document).ready(function () {
  $("#img1").click(function () {
    $("#Z").show();
    $("#img1").hide();
  });
  $("#Z").click(function () {
    $("#img1").show();
    $("#Z").hide();
  });
});

$(document).ready(function () {
  $("#img2").click(function () {
    $("#D").show();
    $("#img2").hide();
  });
  $("#D").click(function () {
    $("#img2").show();
    $("#D").hide();
  });
});

$(document).ready(function () {
  $("#img3").click(function () {
    $("#N").show();
    $("#img3").hide();
  });
  $("#N").click(function () {
    $("#img3").show();
    $("#N").hide();
  });
});

$(document).ready(function () {
  $("#hover1").hover(function () {
    $("#imgtext1").toggle();
  });
});

$(document).ready(function () {
  $("#hover2").hover(function () {
    $("#imgtext2").toggle();
  });
});

$(document).ready(function () {
  $("#hover3").hover(function () {
    $("#imgtext3").toggle();
  });
});

$(document).ready(function () {
  $("#hover4").hover(function () {
    $("#imgtext4").toggle();
  });
});

$(document).ready(function () {
  $("#hover5").hover(function () {
    $("#imgtext5").toggle();
  });
});

$(document).ready(function () {
  $("#hover6").hover(function () {
    $("#imgtext6").toggle();
  });
});

$(document).ready(function () {
  $("#hover7").hover(function () {
    $("#imgtext7").toggle();
  });
});

$(document).ready(function () {
  $("#hover8").hover(function () {
    $("#imgtext8").toggle();
  });
});
$("form#mc-embedded-subscribe-form").submit(function (even) {
  let name = $("input#mce-FNAME").val();
  if (name.length === 0) {
    alert("Enter Your Full Name")
  } else {
    alert("Hello " + name + ",thank you we have received you message.")
  }
})