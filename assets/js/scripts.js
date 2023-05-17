$(document).ready(function(){
    // Mobile Menu
    $('.menu_icon').click(function(){
        $('.menu').slideToggle(1000);
    });
    // Testimonials Carousel
    $('.testimonial-carousel').owlCarousel({
        items:1,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        loop:true,
        dots:false,
        autoplay:true
    });

    // Popup Video
    $('#popupVideo').magnificPopup({
        type:'iframe'
    });

});