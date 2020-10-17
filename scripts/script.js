$(document).ready(function () {

    var owl = $('.owl-carousel');

    owl.owlCarousel({
        loop: true,
        items: 3,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1025: {
                items: 3
            }
        }
    });

});