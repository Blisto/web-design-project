$(document).ready(function(){

    // 漢堡選單動畫
    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
    });

    var slide_state = 1;
    $('.itemlist').slideUp(0);
    $('#nav-icon3').click(function(){
        $('.itemlist').slideToggle(450);
        slide_state = 1;
    });
    
    // 點空白處收回選單
    $(document).click(function(){
        if(slide_state == 2){
            if ($('.itemlist').css('display') != 'none'){
                $('#nav-icon3').toggleClass('open');  
            }
            $('.itemlist').slideUp(450);
        }
        slide_state = slide_state % 2 + 1;
    });

    $(".box").click(function(event){
        $(this).toggleClass("flipped");
    })


    $(".box").mouseleave(function(){
        if($(this).hasClass("flipped")){$(this).toggleClass("flipped");}
    })
});