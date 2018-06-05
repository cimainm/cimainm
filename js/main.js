(function ($) {
"use strict";

    /* meanmenu */
    $('.main-menu nav').meanmenu({
    	 meanMenuContainer: '.mobile-menu',
    	 meanScreenWidth: "991"
     });
 
 
    /* slider-active */
    $('.slider-active').owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed: 600,
        autoplayTimeout: 5000,
        nav:true,
    	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    }) 

    /* slider-2-active */
    $('.slider-2-active').owlCarousel({
        loop:true,
        nav:true,
    	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // Back-to-top
    var btt = $('.back-to-top');

    btt.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    

    $(window).on('scroll',function() {
        var self = $(this),
        height = self.height(),
        top = self.scrollTop();

        if (top > height) {
            if (!btt.is(':visible')) {
                btt.show();
            }
        }   else {
                btt.hide();
            }
    });

    //Data-Filter
    $(".filter-button").on('click',function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
          $(this).removeClass("active");
            }
        $(this).addClass("active");


    //Btn-Focus
    $("#btn-one").focus();

})(jQuery);	