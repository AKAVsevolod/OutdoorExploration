$('.flex_item > div').on('click', function() {
    $(this).children('.about_icon').toggleClass('about_rotate_icon');
})

$('.about_item > div').on('click', function() {
        $(this).next('.about_text').slideToggle(300);
    })

