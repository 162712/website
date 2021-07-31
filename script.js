$(document).ready(function(){
    $(window).scroll(function(){
        $('.navbar').toggleClass("sticky",$(this).scrollTop()>1000);
    });
    // $('.scroll').toggleClass("show",$(this).scrollTop()>2000);
    if(this.scroll>1000){
    $('.scroll').addClass("show");}
    else{
        $('.scroll').removeClass("show");
    }
});
$('.scroll').click(function(){
    $('html').animate({scrollTop:0});
});