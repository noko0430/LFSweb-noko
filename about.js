$(function () {
    $('.nav_toggle').on('click',function(){
        $('.nav_toggle, .nav ul').toggleClass('open');
        });
    var topBtn = $('.pagetop, .pagetop2');
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    }); 
    })