$(document).ready(function(){
    $(".ct-btn-scroll").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    setInterval(function(){
        $('.ct-btn-scroll').toggleClass("bounce");
    }, 2000);

});



$(document).ready(function() {
    $(".word").fancybox({
        'width': 600, // or whatever
        'height': 320,
        'type': 'iframe'
    });
});