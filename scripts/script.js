$(document).ready(function () {

    OwlCarousel();

    $('#menu-btn').click(menuController);

    function menuController() {
        if ($('#menu-btn').hasClass('active')) {
            $('.navbar-left').slideToggle(400);
            $('#menu-btn').css('color', '#ff8a5c');
        } else {
            $('.navbar-left').slideToggle(400);
            $('#menu-btn').css('color', '#ff2f96');
        }

        $('#menu-btn').toggleClass('active');
    }

    function OwlCarousel() {
        var owl = $('.owl-carousel');

        owl.owlCarousel({
            loop: true,
            items: 3,
            margin: 30,
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
    }

});