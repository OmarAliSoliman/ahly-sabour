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
      autoplay: false,
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
      slidesToShow: 5.7,
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
    });
  }

  if ($(".brains_slider").length) {
    $(".brains_slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      centerMode: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 3,
            // centerMode: false,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1.6,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1.6,
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
    });
  }

  if ($(".gallery_cards_slider").length) {
    $(".gallery_cards_slider").slick({
      rows: 2,
      slidesPerRow: 3,
      dots: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            rows: 1,
            slidesPerRow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            rows: 1,
            slidesPerRow: 1,
            dots: false,
          },
        },
      ],
    });
  }

  if ($(".construction_update_slider").length) {
    $(".construction_update_slider").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    });
  }
  // construction_update_slider

  // other_successful_projects
  if ($(".other_successful_projects_slider").length) {
    $(".other_successful_projects_slider").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    });
  }

  if ($(".project_img_slider").length) {
    $(".project_img_slider").slick({
      dots: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            dots: false,
          },
        },
      ],
    });
  }

  $(".nav-pills .nav-item .nav-link").on("shown.bs.tab", function () {
    $(".projects_cards_slider").slick("setPosition");
    $(".project_img_slider").slick("setPosition");
    $(".gallery_cards_slider").slick("setPosition");
    $(".construction_update_slider").slick("setPosition");
    AOS.refresh();
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 10) {
      $(".custom_navbar").addClass("fixed_navbar");
    } else {
      $(".custom_navbar").removeClass("fixed_navbar");
    }
  });

  if ($(".counter").length) {
    $(".counter").counterUp({
      time: 1500,
    });
  }

  if ($(".time_line_vector").length) {
    var timeLineAnimation = gsap.timeline();
    var timeLineList = $(".time_line_vector ul .single_time_line");
    $(timeLineList).map((index, item) => {
      animateSingleTimeLine(item);
    });

    function animateSingleTimeLine(item) {
      console.log(item);
      const lineThrow = $(item).find(".line_throw");
      const lineCircle = $(item).find(".circle");
      const lineSubCircle = $(item).find(".circle .sub_circle");
      const lineDate = $(item).find(".date");
      const lineLogoLine = $(item).find(".logo_line");
      const lineLogoDot = $(item).find(".logo_line .line_dot");
      const lineLogo = $(item).find(".logo");
      timeLineAnimation
        .from(lineThrow, { width: 0, stagger: 0.1, ease: "Power1.In.Out" })
        .from(
          lineCircle,
          { scale: 0, stagger: 0.1, delay: 0.2, ease: "back.out(4.7)" },
          "<"
        )
        .from(lineSubCircle, { scale: 0, stagger: 0.1, ease: "back.out(4.7)" })
        .from(lineDate, { opacity: 0, stagger: 0.1, ease: "Power1.In.Out" })
        .from(lineLogoDot, { scale: 0, stagger: 0.1, ease: "back.out(4.7)" })
        .from(lineLogoLine, { height: 0, stagger: 0.1, ease: "Power1.In.Out" })
        .from(lineLogo, { opacity: 0, stagger: 0.1, ease: "Power1.In.Out" });
    }

    timeLineAnimation.from(".time_line_vector .reload_btn", {
      opacity: 0,
      ease: "Power1.In.Out",
    });

    timeLineAnimation.pause();

    // Create an Intersection Observer
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            // If the 'time_line' section is in the viewport, start the animation
            timeLineAnimation.play();
            observer.unobserve(entry.target); // Stop observing once animation starts
          }
        });
      },
      { threshold: 0.3 } // Adjust the threshold as needed
    );

    var timeLineSection = document.querySelector(".time_line");
    observer.observe(timeLineSection);

    $(".time_line_vector .reload_btn button").on("click", function (e) {
      e.preventDefault();
      timeLineAnimation.restart();
    });
  }

  const navbarTimeLine = gsap.timeline();
  navbarTimeLine
    .from(".custom_navbar .navbar_logo", {
      opacity: 0,
      stagger: 0.2,
      x: -4,
      ease: "powerIn.Out",
    })
    .from(".custom_navbar .navbar_links > ul > li", {
      opacity: 0,
      stagger: 0.2,
      x: -4,
      ease: "powerIn.Out",
    });

  if ($("#form_submit").length) {
    let thanksSet;
    $("#form_submit").on("click", function (e) {
      e.preventDefault();
      $("html").addClass("active_thanks_modal");

      thanksSet = setTimeout(() => {
        $("html").removeClass("active_thanks_modal");
      }, 3000);
    });
    clearTimeout(thanksSet);

  }
  

  if($("#gallery_card_for_modal").length){
    $("#gallery_card_for_modal .slider_item").map((index, item)=>{
      $(item).on("click", function (e) {
        var video = $('.gallery_modal_wrapper video');
        video.map((index, item)=>{
          console.log(item);
          item.currentTime = 0;
          item.load();
        })
        var slideIndex = $(item).attr("data-gallery-index");
        $("#gallery_modal_img .project_img_slider").slick('slickGoTo', slideIndex);
        $("html").addClass("active_gallery_modal");
      })
    })


    $(".gallery_modal .close_modal").on("click", function(){
      $("html").removeClass("active_gallery_modal");
      var video = $('.gallery_modal_wrapper video');
      video.map((index, item)=>{
        console.log(item);
        // item.currentTime = 0;
        item.pause();
      })
    });
  }


  if($("#construction_card_for_modal").length){
    $("#construction_card_for_modal .slider_item").map((index, item)=>{
      $(item).on("click", function (e) {
        var video = $('.gallery_modal_wrapper video');
        video.map((index, item)=>{
          console.log(item);
          item.currentTime = 0;
          item.load();
        })
        var slideIndex = $(item).attr("data-gallery-index");
        $("#construction_modal_img .project_img_slider").slick('slickGoTo', slideIndex);
        $("html").addClass("active_construction_modal");
      })
    })


    $(".gallery_modal .close_modal").on("click", function(){
      $("html").removeClass("active_construction_modal");
      var video = $('.gallery_modal_wrapper video');
      video.map((index, item)=>{
        console.log(item);
        // item.currentTime = 0;
        item.pause();
      })
    });
  }

  

  AOS.init();
});

var overlay = document.querySelector(".splashoverlay"),
  loader = document.querySelector(".overlay-loader"),
  overlayTL = new TimelineMax(),
  loaderTL = new TimelineMax();

var animateOut = function () {
  overlayTL.to(overlay, 0.6, {
    bottom: "100%",
    ease: Power4.easeInOut,
    height: 0,
    delay: 0.25,
  });
  loaderTL.to(loader, 0.5, { y: "-40", opacity: 0 });
  gsap.to(counter, 0.5, { y: "-40", opacity: 0 });
};

// counter loading page
var Cont = { val: 0 },
  NewVal = 100;

TweenLite.to(Cont, 15, {
  val: NewVal,
  roundProps: "val",
  onUpdate: function () {
    document.getElementById("counter").innerHTML = Cont.val;
  },
});

$(window).on("load", function () {
  var currentDir = $("body").css("direction");
  setTimeout(() => {
    animateOut();
  }, 2000);
  new Mmenu("#menu", {
    offCanvas: {
      slidingSubmenus: false,
      position: currentDir == "rtl" ? "left-front" : "right-front",
    },
    theme: "light",
    counters: {
      add: true,
    },
  });
});

$(window).on("load", function () {
  // $("html").removeClass("splash-active");
  // $(".splashscreen").addClass("splashscreen_none");
});
