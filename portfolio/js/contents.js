$(document).ready(function(){
	$('header .gnb .inner ul li').on('mouseenter', function(){
        $('header .gnb .inner ul li').removeClass('on')
        $(this).addClass('on')
    })
    $('header .gnb .inner').on('mouseleave', function(){
        $('header .gnb .inner ul li').removeClass('on')
        $('header .gnb .inner ul li[data-on]').addClass('on')
    })

    /* top버튼 클릭하면 위로 올라가라는 의미*/
    $('.top').on('click',function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })
})