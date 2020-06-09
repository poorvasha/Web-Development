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