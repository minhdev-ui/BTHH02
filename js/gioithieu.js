$(document).ready(function() {
    $('.qualified-content').hide();
    $('.qualified-item').click(function () {
        var index = $(this).index();
        var qualifiedContent = $('.qualified-content').eq(index)
        if (qualifiedContent.hasClass('active')){
            qualifiedContent.removeClass('active');
            qualifiedContent.hide(500);
        }else{
            qualifiedContent.addClass('active');
            qualifiedContent.show(500);
        }
    })
})