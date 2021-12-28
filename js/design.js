$(window).ready(function(){

    var pageIdx = 0;
    var _galleryPagination = $('#galleryPagination');    
    var _galleryContainer = $('#galleryContainer');
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var responsiveEffect = windowWidth < 788 ? 30 : 60;
    var responsivMove = windowWidth < 788 ? (pageIdx*30)+'px' : (pageIdx*3.125)+'vw';
    
    if(windowWidth < 788){
        console.log('모바일 웹 사이즈로 제이쿼리가 작동합니다.'+pageIdx*30+'px')
    } else {
        console.log('데스크탑 웹 사이즈로 제이쿼리가 작동합니다.'+pageIdx*3.125+'vw')
    }
    function marginLeftCalc(){
        responsivMove = windowWidth < 788 ? (pageIdx*30)+'px' : (pageIdx*3.125)+'vw';
    }
    function paginationChange(){
        _galleryPagination.find('.page_number').removeClass('page_on');
        _galleryPagination.find('.page_'+pageIdx).addClass('page_on');
    }
    function pageMove(){
        _galleryContainer.css({marginLeft: 'calc(-' + (pageIdx*62.5) + 'vw - ' + responsivMove});
    }
    function pageBlind(){
        $('#gallery'+pageIdx).children('.gallery_blind').fadeOut(1200);//.removeClass('blind_on');
        $('#gallery'+pageIdx).siblings().children('.gallery_blind').fadeIn(1200);//.addClass('blind_on');
    }
    function designShadow(){
        $('#gallery'+pageIdx).siblings().find('.design_content').removeClass('shadow');
        $('#gallery'+pageIdx).find('.design_content').addClass('shadow');
    }

    function galleryEffect(){
        marginLeftCalc();
        paginationChange();
        pageMove();
        pageBlind();
        designShadow();

    }
    _galleryPagination.find('.page_prev').on('click', function(e){
        e.preventDefault();
        if(pageIdx > 0){
            pageIdx--;
            galleryEffect();
            console.log(pageIdx);
        }
    });
    _galleryPagination.find('.page_next').on('click', function(e){
        e.preventDefault();
        
        if(pageIdx < _galleryContainer.children().length - 1){
            pageIdx++;
            galleryEffect();
            console.log(pageIdx);
        }
    });
    _galleryPagination.find('.page_number').on('click', function(e){
        e.preventDefault();
        pageIdx = $(this).parents().index();
        galleryEffect();
        console.log(pageIdx);
    });
    _galleryContainer.find('.gallery_blind').on('click', function (e) {
        e.preventDefault();
        pageIdx = $(this).parents().index();
        galleryEffect();
    })







_galleryContainer.find('a').on('click', function (e) {
    e.preventDefault();
    $('body').append('<div id="modal"><img src="'+$(this).children("img").attr("src")+'" alt="'+$(this).children("img").attr("alt")+'"></div>');
    $('html').toggleClass('scroll_hold');
    $('body').toggleClass('scroll_hold');

    $('#modal').on('click', function (e) {
        e.preventDefault();
        $('html').toggleClass('scroll_hold');
        $('body').toggleClass('scroll_hold');
        $('#modal').remove();
    });
    
});


});