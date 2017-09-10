$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items : 1,
    dots : false,
    autoplay : true,
    autoplayTimeout : 3000,
    autoplaySpeed : 1500,
});

$(window).on('scroll',function(){
    var $now_scroll = $(this).scrollTop();
    var $first_day_scroll = $('#day01').position().top;
    if($now_scroll >= $first_day_scroll){
        $('nav').addClass('fixed');
    }else{
        $('nav').removeClass('fixed');
        $('nav .menu a').removeClass('active');
    };
    $('.content').each(function(index){
        var $pos_start = $(this).position().top;
        var $pos_end = $pos_start + $(this).height();
        if($now_scroll >= $pos_start && $now_scroll < $pos_end){
            $('nav .menu a').removeClass('active');
            $('nav .menu a').eq(index).addClass('active');
        }
    });
    
});

$('nav .menu a').on('click',function(e){
    e.preventDefault();
    var $index = $(this).parent().index();
    var $move = $('.content').eq($index).position().top;
    $('html,body').animate({
        scrollTop : $move,
    });
});












