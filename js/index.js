$(function () {
    // 购物车下拉内容特效
    (function(){
        var $shopping=$(".container .container_right .shopping");
        var $shoppingDetails=$(".container .container_right .shopping .shoppingDetails");
        $shopping.hover(function () {
            $shoppingDetails.slideDown();
        },function () {
            $shoppingDetails.slideUp();
        })

        var $search=$(".nav .wrap .search");
        var $input=$(".nav .wrap .search .input input");
        var $content=$(".nav .wrap .search .input .content");
        $input.focus(function () {
            $search.addClass("focus");
            $content.fadeIn();
        }).blur(function () {
            $search.removeClass("focus");
            $content.fadeOut();
        })


    })()
})