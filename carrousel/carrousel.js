$('#slider').bxSlider({ 
    mode: 'fade', 
    controls: false 
}); 
 
 
if ($(window).width() < 800) {  
    $('.carrousel-max').addClass("hide") 
    $('.carrousel-min').removeClass("hide") 
} 
 
$(window).on('resize', function() { 
    if ($(window).width() < 800) {  
        $('.carrousel-max').addClass("hide") 
        $('.carrousel-min').removeClass("hide") 
    }else{ 
        $('.carrousel-max').removeClass("hide") 
        $('.carrousel-min').addClass("hide") 
    } 
 
});


