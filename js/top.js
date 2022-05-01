var highest_index = 0;

$(".cats").each(function() {
    if ($(this).attr("z-index") > highest_index) {
         highest_index = $(this).css("z-index");
    }
});

