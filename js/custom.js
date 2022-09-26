jQuery(document).ready(function($) {
    $("#search-btn").click( function(e){
        e.preventDefault();

        $(".search-wrraper").fadeIn()
    });

    $("#close-search").click(function() {
        $(".search-wrraper").fadeOut();        
    })

    $(window).scroll( function(){
        if ($(window).scrollTop() > 100) {
            $("nav").addClass("fixed-nav");
        }else{
            $("nav").removeClass("fixed-nav");
        }
    })
})