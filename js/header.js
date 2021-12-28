$(document).ready(function () {
    $(window).scroll(function (e) {
        var y = $(this).scrollTop();
        if (y > 80) {
            $('#header').addClass('scroll');
        } else {
            $('#header').removeClass('scroll');
        }

    });
    
            

    
    $('#navButton').children('a').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('nav_open')) {
            $(this).removeClass('button-on');
            $('#navButton').children('.nav_close').addClass('button-on');
            $('#nav').children('ul').removeClass('nav_off');
            $('#nav').children('ul').addClass('nav_on');
            $('#nav').children('ul').addClass('out_shadow');

        } else if ($(this).hasClass('nav_close')) {
            $(this).removeClass('button-on');
            $('#navButton').children('.nav_open').addClass('button-on');
            $('#nav').children('ul').removeClass('nav_on');
            $('#nav').children('ul').removeClass('out_shadow');
            $('#nav').children('ul').addClass('nav_off');
        }
        
    });
            
});