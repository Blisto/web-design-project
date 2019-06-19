$(document).ready(function(){
    var sli = 1;
    $('.slideBox55').slideUp(0);

    $('.slide-buttom55').click(function(){
        console.log("叮咚");
        $('.slideBox55').slideToggle(450);
        sli = 1;
    });
    
    $('.slide-buttom55').click(function(){
        if(sli==2)
        {
            $('.slideBox55').slideUp(450);
        }
        sli = sli % 2 + 1;
    });
});