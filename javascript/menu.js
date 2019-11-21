$(document).ready(mainMenu);

let show = false;

function mainMenu() {
  // Show nav
  $(".menu-bar").click(function() {
    if (show == true) {
      $("nav").animate({
        width: "0",
        height: "0"
      });
      $("#icon-menu")
        .removeClass("icon-arrow-left")
        .addClass("icon-menu");
      show = false;
    } else {
      $("nav").animate({
        width: "100%",
        height: "100%"
      });
      show = true;
      $("#icon-menu")
        .removeClass("icon-menu")
        .addClass("icon-arrow-left");
    }
  });

  //   show li active
  $(".navmenu").on("click", "li", function() {
    $(".navmenu li.active").removeClass("active");
    $(this).addClass("active");
  });
}
