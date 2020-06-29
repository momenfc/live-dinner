

$(".bages").click(function(){
    $(".dblog").slideUp(500); 
    $(".dbages").slideToggle(500);
});

$(".blog").click(function(){
    $(".dbages").slideUp(500);  
    $(".dblog").slideToggle(500);

});

$(document).click(function (e) {
    var isDropDown = $(e.target).hasClass("dropdown-holder");
    if(!isDropDown){
        $(".dblog, .dbages").slideUp(500);
    }
});

$(document).ready(function(){
    $(".btn-menu").click(function(){
        $(".nav").animate({
            right:'-140px'
        },function(){
            $(".btn-menu").fadeOut();
            $(".colse-menu").fadeIn(150);
        });
    });

    $(".colse-menu").click(function(){
        $(".nav").animate({
            right:'-400px'
        },function(){
            $(".colse-menu").fadeOut();
        });
        $(".btn-menu").fadeIn(800);

    })
});











