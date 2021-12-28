$(window).ready(function(){

    var _mobileView = $('#mobileView');

    _mobileView.find('.m_markup_post_img').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.m_markup_post').addClass('active');
        
    });

    _mobileView.find('.m_text_close').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.m_markup_post').removeClass('active');
    });


});