$(document).ready(function () {
  var currentDir = $("body").css("direction");
  console.log(currentDir);

  if ($(".nice_select").length) {
    $(".nice_select").niceSelect();
  }

  if ($(".projects_cards_slider").length) {
    var projects_cards_slider = $(".projects_cards_slider");

    // Function to update slider items and refresh slider
    function updateSliderItems() {
      var activeTabId = $(
        ".our_development_tabs .nav-item .nav-link.active"
      ).attr("data-bs-target");
      var targetId = $(
        activeTabId + " .projects_cards_slider .slider_item"
      ).length;

      if($(window).width() <= 991){
        projects_cards_slider.slick("slickSetOption", {
          slidesToShow: targetId === 1 ? 1 : 1,
        });
        projects_cards_slider.slick("refresh");
      }else{
        projects_cards_slider.slick("slickSetOption", {
          slidesToShow: targetId === 1 ? 1 : 1.5,
        });
        projects_cards_slider.slick("refresh");
      }
      console.log(targetId);
    }

    $(".our_development_tabs .nav-item .nav-link").on(
      "shown.bs.tab",
      function () {
        updateSliderItems();
      }
    );

    projects_cards_slider.slick({
      slidesToShow:
        projects_cards_slider.find(".slider_item").length === 1 ? 1 : 1.5,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 300,
      infinite: false,
      rtl: currentDir === "rtl" ? true : false,
      autoplaySpeed: 5000,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow:
              projects_cards_slider.find(".slider_item").length === 1 ? 1 : 1.5,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow:
              projects_cards_slider.find(".slider_item").length === 1 ? 1 : 1.5,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow:1,
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
    updateSliderItems();
  }

  if ($(".home_header_slider").length) {
    $(".home_header_slider").slick({
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover:false,
      rtl: currentDir === "rtl" ? true : false,
    });
  }
  // if ($(".avilible_projects_cards_slider").length) {
  //   $(".avilible_projects_cards_slider").slick({
  //     slidesToShow: 2.7,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     dots: false,
  //     speed: 300,
  //     infinite: true,
  //     loop: true,
  //     autoplaySpeed: 5000,
  //     centerMode: true,
  //     autoplay: true,
  //     responsive: [
  //       {
  //         breakpoint: 3400,
  //         settings: {
  //           slidesToShow: 3.7,
  //         },
  //       },
  //       {
  //         breakpoint: 2400,
  //         settings: {
  //           slidesToShow: 2.7,
  //         },
  //       },
  //       {
  //         breakpoint: 1800,
  //         settings: {
  //           slidesToShow: 2.7,
  //         },
  //       },
  //       {
  //         breakpoint: 1150,
  //         settings: {
  //           slidesToShow: 3.3,
  //           // centerMode: false,
  //         },
  //       },
  //       {
  //         breakpoint: 1100,
  //         settings: {
  //           slidesToShow: 1.7,
  //           // centerMode: false,
  //         },
  //       },
  //       {
  //         breakpoint: 991,
  //         settings: {
  //           slidesToShow: 1.7,
  //           // centerMode: false,
  //         },
  //       },

  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 1,
  //           // centerMode: false,
  //         },
  //       },
  //     ],
  //   });
  // }

  var mySwiper1;
  if ($(".swiper_avilible_projects").length) {
    var $swiper = $(".swiper_avilible_projects");
    var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
    // into a fixed position for animation purposes
    var $bottomSlideContent = null; // Slide content that gets passed between the

    mySwiper1 = new Swiper(".swiper_avilible_projects", {
      spaceBetween: 24,
      slidesPerView: 3,
      centeredSlides: true,
      roundLengths: true,
      // freeMode: true,
      loop: true,
      loopAdditionalSlides: 30,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // when window width is >= 600px
        600: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
        // when window width is >= 991px
        991: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }

  var mySwiper2;
  if ($(".swiperـbrains_slider").length) {
    var $swiper = $(".swiperـbrains_slider");
    var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
    // into a fixed position for animation purposes
    var $bottomSlideContent = null; // Slide content that gets passed between the
    // panning slide stack and the position 'behind'
    // the stack, needed for correct animation style

    mySwiper2 = new Swiper(".swiperـbrains_slider", {
      spaceBetween: 1,
      spaceBetween: 24,
      slidesPerView: 3,
      centeredSlides: true,
      roundLengths: true,
      loop: true,
      loopAdditionalSlides: 30,
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        // when window width is >= 600px
        600: {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        // when window width is >= 991px
        991: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
    });

    // $(".brains_slider").slick({
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   arrows: true,
    //   dots: true,
    //   speed: 300,
    //   infinite: true,
    //   autoplaySpeed: 5000,
    //   centerMode: true,
    //   autoplay: true,
    //   responsive: [
    //     {
    //       breakpoint: 1450,
    //       settings: {
    //         slidesToShow: 3,
    //         // centerMode: false,
    //       },
    //     },
    //     {
    //       breakpoint: 1100,
    //       settings: {
    //         slidesToShow: 1.6,
    //         // centerMode: false,
    //       },
    //     },
    //     {
    //       breakpoint: 991,
    //       settings: {
    //         slidesToShow: 1.6,
    //         // centerMode: false,
    //       },
    //     },

    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 1,
    //         // centerMode: false,
    //       },
    //     },
    //   ],
    // });
  }

  if ($(".gallery_cards_slider").length) {
    $(".gallery_cards_slider").slick({
      rows: 2,
      slidesPerRow: 3,
      dots: true,
      rtl: currentDir === "rtl" ? true : false,
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
      rtl: currentDir === "rtl" ? true : false,
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
      rtl: currentDir === "rtl" ? true : false,
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
      rtl: currentDir === "rtl" ? true : false,
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
    // console.log(mySwiper1.update())
    // mySwiper1.update();
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

  function getsCurrentLiWidth() {
    var liW = $(".ul_time_line li:first-child").css("min-width").split("px")[0];
    return liW;
  }

  var scrollContentLi;
  if ($(".time_line_vector").length) {
    const scrollContainer = document.querySelector(".scroll-container");
    const scrollContent = document.querySelector(".ul_time_line");
    const scrollLeftButton = document.querySelector(".scroll-left");
    const scrollRightButton = document.querySelector(".scroll-right");

    scrollContentLi = getsCurrentLiWidth();
    scrollContentLi = parseInt(scrollContentLi);
    $(window).on("resize", function () {
      scrollContentLi = getsCurrentLiWidth();
      scrollContentLi = parseInt(scrollContentLi);
    });

    console.log(scrollContentLi);
    // window

    let scrollAmount = scrollContentLi; // Adjust the scroll distance as needed

    scrollLeftButton.addEventListener("click", () => {
      scrollContent.scrollTo({
        left: currentDir === "rtl"? scrollContent.scrollLeft + scrollAmount:scrollContent.scrollLeft - scrollAmount,
        behavior: "smooth", // You can change to 'auto' for instant scrolling
      });
    });

    scrollRightButton.addEventListener("click", () => {
      scrollContent.scrollTo({
        left: currentDir === "rtl"? scrollContent.scrollLeft - scrollAmount:scrollContent.scrollLeft + scrollAmount,
        behavior: "smooth", // You can change to 'auto' for instant scrolling
      });
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
        .from(lineThrow, { width: 0, duration: 0.3, ease: "Power1.In.Out" })
        .from(
          lineCircle,
          { scale: 0, duration: 0.3, ease: "back.out(4.7)" },
          "<"
        )
        .from(lineSubCircle, {
          scale: 0,
          duration: 0.3,
          ease: "back.out(4.7)",
        })
        .from(lineDate, { opacity: 0, duration: 0.3, ease: "Power1.In.Out" })
        .from(lineLogoDot, { scale: 0, duration: 0.3, ease: "back.out(4.7)" })
        .from(lineLogoLine, {
          height: 0,
          duration: 0.3,
          ease: "Power1.In.Out",
        })
        .from(lineLogo, { opacity: 0, duration: 0.3, ease: "Power1.In.Out" });
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

  if ($("#gallery_card_for_modal").length) {
    $("#gallery_card_for_modal .slider_item").map((index, item) => {
      $(item).on("click", function (e) {
        var video = $(".gallery_modal_wrapper video");
        video.map((index, item) => {
          console.log(item);
          item.currentTime = 0;
          item.load();
        });
        var slideIndex = $(item).attr("data-gallery-index");
        $("#gallery_modal_img .project_img_slider").slick(
          "slickGoTo",
          slideIndex
        );
        $("html").addClass("active_gallery_modal");
      });
    });

    $(".gallery_modal .close_modal").on("click", function () {
      $("html").removeClass("active_gallery_modal");
      var video = $(".gallery_modal_wrapper video");
      video.map((index, item) => {
        console.log(item);
        // item.currentTime = 0;
        item.pause();
      });
    });
  }

  if ($("#construction_card_for_modal").length) {
    $("#construction_card_for_modal .slider_item").map((index, item) => {
      $(item).on("click", function (e) {
        var video = $(".gallery_modal_wrapper video");
        video.map((index, item) => {
          console.log(item);
          item.currentTime = 0;
          item.load();
        });
        var slideIndex = $(item).attr("data-gallery-index");
        $("#construction_modal_img .project_img_slider").slick(
          "slickGoTo",
          slideIndex
        );
        $("html").addClass("active_construction_modal");
      });
    });

    $(".gallery_modal .close_modal").on("click", function () {
      $("html").removeClass("active_construction_modal");
      var video = $(".gallery_modal_wrapper video");
      video.map((index, item) => {
        console.log(item);
        // item.currentTime = 0;
        item.pause();
      });
    });
  }

  if ($("#show_master_btn_link").length) {
    $("#show_master_btn_link").on("click", function (e) {
      $("html").addClass("active_master_plan_modal");
    });

    $("#master_plan_modal_img .close_modal").on("click", function () {
      $("html").removeClass("active_master_plan_modal");
    });
  }

  AOS.init();
});

var splach = gsap.timeline({
  onComplete() {
    $(".splashoverlay").css("display", "none");
  },
});
splach.to(".splashoverlay .overlay_logo", {
  // y: 10,
  opacity: 0,
  esae: "back.out(1.7)",
  display: "none",
});
splach.to(".splashoverlay .splach_box", {
  // bottom: "100%",
  opacity: 0,
  // stagger: 0.1,
  esae: "expo.out",
  display: "none",
});
// .to(".splach_box_bottom", { bottom: "100%", esae: "expo.out" }, "<")
splach.pause();
function animateOut() {
  splach.play();
}

$(window).on("load", function () {
  var currentDir = $("body").css("direction");
  setTimeout(() => {
    animateOut();
  }, 1000);
  new Mmenu("#menu", {
    offCanvas: {
      slidingSubmenus: false,
      position: currentDir == "rtl" ? "left-front" : "right-front",
    },
    theme: "light",
    counters: {
      add: false,
    },
  });
});

$(window).on("load", function () {
  // $("html").removeClass("splash-active");
  // $(".splashscreen").addClass("splashscreen_none");
});
