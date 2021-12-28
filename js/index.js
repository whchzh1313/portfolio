$(document).ready(function () {

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    setTimeout(function(){
        $('#hm0').stop().animate({height: 240}, 600);
    }, 300);
    setTimeout(function(){
        $('#hm1').stop().animate({width: 82}, 600);
    }, 600);
    setTimeout(function(){
        $('#hm2').stop().animate({height: 240}, 600);
    }, 900);
    setTimeout(function(){
        $('#hm3').stop().animate({height: 240}, 600);
    }, 1200);
    setTimeout(function(){
        $('#hm4').stop().animate({width: 40}, 600);
    }, 1500);
    setTimeout(function(){
        $('#hm5').stop().animate({width: 40}, 600);
    }, 2100);
    setTimeout(function(){
        $('#hm6').stop().animate({height: 240}, 600);
    }, 1800);

    setTimeout(function(){
        $('#mainHm').find('.hm').addClass('hm_shadow');
    }, 2700);
    setTimeout(function(){
        $('#focusCircle').removeClass('hide');
    }, 3300);

    if(windowWidth > 767){
        setTimeout(function(){
            $('#mainHm').find('h2').stop().animate({bottom: -15}, 600);
        }, 2100);
    }
    $(window).resize(function () {
        if(windowWidth > 767){
            setTimeout(function(){
                $('#mainHm').find('h2').stop().css({bottom: -15});
            }, 2100);
        } else {
            $('#mainHm').find('h2').stop().css({bottom: -255});
        }
    });
    
    setTimeout(function(){
        $('#focusCircle').find('.focus_circle_1').animate({left: '50%'}, 300);
        $('#focusCircle').find('.focus_circle_2').animate({left: '50%'}, 300);
    }, 3600);
            
            console.log(windowWidth);
            console.log(windowHeight);
            // windowWidth - 1720
    setTimeout(function(){
        $('#bgBoxContainer').children('.bg_box_inner').animate({height: windowHeight-620, width: windowWidth-1720}, 600);
    }, 600);
       

});