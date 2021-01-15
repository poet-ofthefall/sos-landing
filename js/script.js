jQuery(document).ready(function () {
    
    jQuery(".link_1").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".about").offset().top
        }, 400);
    });
    
        jQuery(".link_2").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".features").offset().top - 50
        }, 400);
    });
    
        jQuery(".link_3").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".require").offset().top
        }, 400);
    });
    
        jQuery(".link_4").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".quotes").offset().top
        }, 400);
    });
    
        jQuery(".link_5").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".subs").offset().top
        }, 400);
    });
    
            jQuery(".link_bottom").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".about").offset().top
        }, 400);
    });

});