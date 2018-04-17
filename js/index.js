$(function () {

    (function(){
        // 购物车下拉内容特效
        var $shopping=$(".container .container_right .shopping");
        var $shoppingDetails=$(".container .container_right .shopping .shoppingDetails");
        $shopping.hover(function () {
            $shoppingDetails.stop(true).slideDown();
        },function () {
            $shoppingDetails.stop(true).slideUp();
        })


        //焦点聚焦到搜索栏时，显示下拉菜单
        var $search=$(".nav .wrap .search");
        var $input=$(".nav .wrap .search .input input");
        var $content=$(".nav .wrap .search .input .content");
        var $hotWords=$(".hotWords");
        $input.focus(function () {
            $search.addClass("focus");
            $content.fadeIn();
            $hotWords.hide();
        }).blur(function () {
            $search.removeClass("focus");
            $content.fadeOut();
            $hotWords.show();
        })

        //鼠标滑动到商品大类时，下拉显示推荐商品
        var $item=$(".nav .wrap .main .nav-item");
        var $product=$(".nav .products");
        var $ul=$(".nav .products ul");
        $item.hover(function () {
            var index=$(this).index();
            $product.stop(true).slideDown(300);
            $ul.eq(index).show().siblings().hide();
        },function () {
            $product.stop(true).slideUp(300);
        })
        $product.hover(function () {
            $(this).stop(true).slideDown(300);
        },function () {
            $(this).stop(true).slideUp(300);
        })

        //轮播图-点击小圆点时变色变图
        var $tabLi=$(".b-main .b-m-tab li");
        var $picLi=$(".b-main .b-m-pic li");
        var _index=0;

        $tabLi.hover(function () {
            $(this).addClass("hover");
        },function () {
            $(this).removeClass("hover");
        }).click(function () {
            $(this).addClass("click").siblings().removeClass("click");
            _index=$(this).index();
            $picLi.eq(_index).fadeIn().siblings().fadeOut();
        });

        //轮播图-点击左右按钮时变图
        var $btn=$(".b-main .b-m-btn div");
        var len=$tabLi.length;
        $btn.click(function () {
            var index=$(this).index();
            if(index){
                _index++;
                if(_index>len-1){
                    _index=0
                }
                $tabLi.eq(_index).addClass("click").siblings().removeClass("click");
                $picLi.eq(_index).fadeIn().siblings().fadeOut();
            }else{
                _index--;
                if(_index<0){
                    _index=4
                }
                $tabLi.eq(_index).addClass("click").siblings().removeClass("click");
                $picLi.eq(_index).fadeIn().siblings().fadeOut();
            }
        });

        //轮播图定时器
        var timer=null;
        function slide() {
            clearInterval(timer);
            timer=setInterval(function () {
                _index++;
                if(_index>len-1){
                    _index=0
                }
                $tabLi.eq(_index).addClass("click").siblings().removeClass("click");
                $picLi.eq(_index).fadeIn().siblings().fadeOut();
            },5000)
        }
        slide();

        //当鼠标移动到轮播图上定时器停止，离开时继续播放轮播图
        var $bMain=$(".b-main");
        $bMain.hover(function () {
            clearInterval(timer);
        },function () {
            slide();
        })

        //左侧二级导航
        var $navLi=$(".b-nav>ul>li");
        $navLi.hover(function () {
            $(this).find(".navDetails").show();
        },function () {
            $(this).find(".navDetails").hide();
        })
    })()
})