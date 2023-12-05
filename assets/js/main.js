$(document).ready(function () {
  var currentDir = $("body").css("direction");
  console.log(currentDir);



  if ($(".nice_select").length) {
    $(".nice_select").niceSelect();
  }


  // sunstan_our_partners_erp_slider



  AOS.init();
});


$(window).on("load", function () {
  // var currentDir = $("body").css("direction");
  // setTimeout(() => {
  //   animateOut();
  // }, 2000);
  // new Mmenu("#menu", {
  //   offCanvas: {
  //     slidingSubmenus: false,
  //     position: currentDir == "rtl" ? "left-front" : "right-front"
  //   },
  //   theme: "light",
  //   counters: {
  //     add: true,
  //   },
  // });
});

$(window).on("load", function () {
  // $("html").removeClass("splash-active");
  // $(".splashscreen").addClass("splashscreen_none");


});
