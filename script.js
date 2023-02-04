const todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        let text = $(this).siblings(".event").val();
        let time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    function timeTracker() {
        let timeNow = moment().hour();

        $(".time-block").each(function () {
            let blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    $("#1 .event").val(localStorage.getItem("1"));
    $("#2 .event").val(localStorage.getItem("2"));
    $("#3 .event").val(localStorage.getItem("3"));
    $("#4 .event").val(localStorage.getItem("4"));
    $("#5 .event").val(localStorage.getItem("5"));
    $("#6 .event").val(localStorage.getItem("6"));
    $("#7 .event").val(localStorage.getItem("7"));
    $("#8 .event").val(localStorage.getItem("8"));
    $("#9 .event").val(localStorage.getItem("9"));
    $("#10 .event").val(localStorage.getItem("10"));

    timeTracker();
})