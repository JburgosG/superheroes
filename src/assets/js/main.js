$(function(){
    $('.next').click(function(){ 
        $('.carousel').carousel('next');
        return false; 
    });

    $('.prev').click(function(){
        $('.carousel').carousel('prev');
        return false;
    });
});