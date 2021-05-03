//owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,  // arrow gula
    navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    autoplay:true,
    autoplayTimeout:1000,
    smartSpeed:500, //smoothly ekta kore change kore
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

