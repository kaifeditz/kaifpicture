
$(function () {
    $('#menu').slicknav({
        label: "",
        brand: "KaifEditz!",
    });
});

$(document).ready(function () {
    $(".skitter-large").skitter({
        navigation: true,
        dots: false
    });
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 100,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: false,
                loop: true
            }
        }
    });
});

$(document).ready(function () {
    $(".progress-bar-html").animate({ "width": "80%" }, 1000, function () {
        $(".progress-bar-css2").animate({ "width": "70%" }, 1000, function () {
            $(".progress-bar-css3").animate({ "width": "50%" }, 1000, function () {
                $(".progress-bar-javascript").animate({ "width": "95%" }, 1000, function () {
                    $(".progress-bar-jquery").animate({ "width": "15%" }, 1000);
                });
            });
        });
    });
});
