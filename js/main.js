const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    640: {
        items: 2
    },
    960: {
        items: 3
    },
}

$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');


    // On event toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })


    // owl-carousel for bio page
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 4500,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive: responsive,
    });


    // Nav back to top button in footer   - not working - need to debug
    // $('footer .nav-up span').click(function () {
    //     $('html, body').animate({
    //         scrollTop: 0
    //     },
    // })





});