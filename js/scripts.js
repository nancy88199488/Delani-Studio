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
        $("#img-text1").toggle();
    });
});