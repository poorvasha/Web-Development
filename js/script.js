/* ======================================
                preloader
========================================*/
$(window).on('load' , function(){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut()
});

/* ======================================
                silder
========================================*/
$(function(){
  $("#team-members").owlCarousel({
      items: 2,
      autoplay: true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
  });
});

/* ======================================
                progress bar
========================================*/
$(function() {

    $("#progress-elements").waypoint(function(){

        $(".progress-bar").each(function(){

          $(this).animate({
            width: $(this).attr("aria-valuenow") + "%"
          }, 1000);
        });

        this.destroy();
      },{
        offset: "bottom-in-view"
      });
});

/* ======================================
                progress bar
========================================*/
$(function(){

  $("#services-tabs").responsiveTabs({
    animation: 'slide'
  });
});

/* ===========================================
              Portfolio
============================================ */
$(window).on('load' , function(){

  // intialize istope
  $("#isotope-container").isotope({

  });
  // filter items on button click
  $("#isotope-filters").on('click', 'button', function(){
    
    // get filter value
    var filterValue = $(this).attr('data-filter');

    // filter portfoilio items
    $("#isotope-container").isotope({
      filter : filterValue
    });

    // active button
    $("#isotope-filters").find('.active').removeClass('active');
    $(this).addClass('active');
});
});

/* ===========================================
              Magnifier
============================================ */
$(function(){

  $("#portfolio-wrapper").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  })

});

/* ===========================================
              Testmonials
============================================ */
$(function(){
  $("#testimonial-slider").owlCarousel({
      items: 1,
      autoplay: false,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
  });
});

/* ===========================================
              counter
============================================ */
$(function(){
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  })
});

/* ===========================================
              client
============================================ */
$(function(){
  $("#clients-list").owlCarousel({
      items: 6,
      autoplay: false,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
  });
});

/* ===========================================
        Show and Hide white navidation
============================================ */
$(function(){

  showHideNav();
  $(window).scroll(function(){
    showHideNav();
  });



  function showHideNav() {

    if( $(window).scrollTop()>50){

      $("nav").addClass("white-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
      $("#back-to-top").fadeIn();

    }else{
      
      $("nav").removeClass("white-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/logo.png");
      $("#back-to-top").fadeOut();
    }
    
  }

}); 

// Smooth Scrolling
$(function(){

  $("a.smooth-scroll").click(function(event){
    
      event.preventDefault();

      // get section id like #about #services
      var section_id = $(this).attr("href");

      $("html, body").animate({
        scrollTop: $(section_id).offset().top - 64
      }, 1250, "easeInOutExpo");
  })

});