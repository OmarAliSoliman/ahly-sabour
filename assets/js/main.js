$(document).ready(function () {
  var currentDir = $("body").css("direction");
  console.log(currentDir);



  if ($(".nice_select").length) {
    $(".nice_select").niceSelect();
  }

  if ($(".projects_cards_slider").length) {
    $(".projects_cards_slider").slick({
      slidesToShow: 1.5,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 300,
      infinite: false,
      autoplaySpeed: 5000,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 1.1,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1.1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1.1,
            centerMode: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
      ],
    });
  }


  if ($(".avilible_projects_cards_slider").length) {
    $(".avilible_projects_cards_slider").slick({
      slidesToShow:5.7,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      centerMode: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 2400,
          settings: {
            slidesToShow: 4.6,
          },
        },
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 3.7,
          },
        },
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 3.3,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2.7,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1.7,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            // centerMode: false,
          },
        },
      ],
    })
  }


  $(".nav-pills .nav-item .nav-link").on('shown.bs.tab', function () {
    $('.projects_cards_slider').slick('setPosition');
    AOS.refresh();
  });

  $(window).on('scroll', function(){
    if($(this).scrollTop() > 10){
      $(".custom_navbar").addClass('fixed_navbar');
    }else{
      $(".custom_navbar").removeClass('fixed_navbar');
    }
  })

  if($(".counter").length){
    $(".counter").counterUp({
      time: 1500,
    });
  }

  const navbarTimeLine  = gsap.timeline();
  navbarTimeLine.from(".custom_navbar .navbar_logo", {opacity: 0, stagger: .2, x:-4 ,ease: "powerIn.Out"})
  .from(".custom_navbar .navbar_links li", {opacity: 0, stagger: .2, x:-4 ,ease: "powerIn.Out"})

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
