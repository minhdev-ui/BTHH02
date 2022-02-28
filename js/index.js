AOS.init();

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
    prevArrow: $('.carousel-control-prev'),
    nextArrow: $('.carousel-control-next'),
});

$('.coop-slides').slick({
    infinite: true,
    slidesToShow: 5,
    prevArrow: $('.back-control'),
    nextArrow: $('.next-control')
})



const vid = document.getElementById('video-play');
$('.play-btn').click(() => {
    $('.video-overlay').remove();
    vid.play();
})

var a = 0;

$(window).scroll(function() {
    if(a == 0 && $(this).scrollTop() >= $('.register_footer-number').offset().top - $(this).height()){
        $('.register_footer-number').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        a = 1;
    }
})


