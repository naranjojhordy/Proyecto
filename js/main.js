$(document).ready(main);

var contador = 1;

function main() {
  $(".btn-menu").click(function () {
    if (contador == 1) {
      $(".bars").addClass("active");

      $(".menu-lateral").animate({
        left: "0",
      });

      contador = 0;
    } else {
      $(".bars").removeClass("active");

      contador = 1;
      $(".menu-lateral").animate({
        left: "-100%",
      });
    }
  });

  $(".submenu-lateral").click(function () {
    $(".sub-m").slideToggle();
  });
}