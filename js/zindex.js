 (function () {
      var highest = 1;

      $.fn.bringToTop = function () {
        this.css("z-index", ++highest); // increase highest by 1 and set the style
      };
    })();

    $("div.draggable").mousedown(function () {
      $(this).bringToTop();
    });

    $("div.draggable").on("tap", function () {
      $(this).bringToTop();
    });

    $("div.draggable").on("swipe", function () {
      $(this).bringToTop();
    });