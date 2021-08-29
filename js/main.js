$(function(){
    
$('.accordion-item').click(function(){
    if(!($(this).hasClass("active"))){
        $(this).children().eq(1).slideDown();
        $(this).toggleClass("active") 
    }
    else{
        $(this).children().eq(1).slideUp();
        $(this).toggleClass("active") 
    }
})

})