jQuery(document).ready(function($) {
    $("#search-btn").click( function(e){
        e.preventDefault();

        $(".search-wrraper").show();
    });

    $("#close-search").click(function() {
        $(".search-wrraper").hide();        
    })
})