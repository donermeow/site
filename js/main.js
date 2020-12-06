$("#home").click(function() {
    $('html,body').animate({
        scrollTop: $(".header").offset().top},
        'slow');
});
$("#about-me").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});
$("#portfolio").click(function() {
    $('html,body').animate({
        scrollTop: $(".portfolio").offset().top},
        'slow');
});
$("#contact-me").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});