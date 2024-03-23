$(document).ready(function() {

    $('.slider_main').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 2,
        centerMode: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.fs_slider').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 2,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});