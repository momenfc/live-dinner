

$(".bages").click(function(){
    // $(".dbages").toggle("speed").css("display","flex");
    $(".dbages").slideToggle(500);
    $(".dblog").slideUp(500); 
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
























