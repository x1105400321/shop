'use strict';

/* 顶部地址区域的切换 */
;(function ($) {
    /* 获取需要替换的元素 */
    var $address = $('.songhuo .address strong');
    /* 获取地区选项 */
    var $send = $('.send-select ul li a');
    /* 地区切换效果 */
    $send.on("mousedown", function () {
        var $sendValue = $(this).text();
        $address.text($sendValue);
        $('.send-select').css({
            display: 'none'
        });
    });
    /* 地址栏hover效果 */
    $('.songhuo').hover(function () {
        $('.send-select').css({
            display: 'block'
        });
    }, function () {
        $('.send-select').css({
            display: 'none'
        });
    });
    /* 黑幕的隐藏与显示 */
    var $city = $('.mask-address-body dl dt a');

    $city.hover(function () {
        $(this).css({
            background: "#ddd6c8",
            color: "#fff",
            borderRadius: 5
        });
    }, function () {
        $(this).css({
            background: "",
            color: "#666",
            borderRadius: 5
        });
    });
    $city.on('mousedown', function () {
        var $cityValue = $(this).text();
        $address.text($cityValue);
        $('.mask').css({
            display: "none"
        });
        $('.mask-address').css({
            display: "none"
        });
    });
})(jQuery);

/* 楼梯效果及回到顶部效果 */
;(function ($) {
    /* 获取楼梯导航条 */
    var $loutinav = $('.louti');
    /* 获取回到顶部按钮 */
    var $scrolltop = $('.scroll');
    /* 获取所有楼层 */
    var $louceng = $('.louceng');

    var $loutispan = $('.louti li');
    /* 滚轮距离顶部一定距离楼梯及回到顶部出现 */
    $(window).on('scroll', function () {
        var $top = $(window).scrollTop();
        if ($top > 300) {
            $loutinav.show();
            $scrolltop.show();
        } else {
            $loutinav.hide();
            $scrolltop.hide();
        }

        $louceng.each(function (index, element) {
            //遍历楼层
            var $loucengTop = $(element).offset().top; //存下当前对象的距离网页顶部的距离
            if ($loucengTop + 800 > $top) {
                //顶部距离和滚轮距离对比
                /* 不满足条件切换到没有颜色的图片位置 */
                $loutispan.css({
                    backgroundPositionX: -67
                });
                /* 满足条件的切换到有颜色的地方 */
                $loutispan.eq(index).css({
                    backgroundPositionX: 0
                });
                return false; //满足条件，跳出遍历
            }
        });
    });
    $loutispan.on('click', function () {
        //点击楼梯跳转当前部分
        $(this).css({
            backgroundPositionX: 0
        }).siblings().css({
            backgroundPositionX: -67
        }); //给当前点击的楼梯换成有颜色的，其他按钮移出颜色
        var $top = $louceng.eq($(this).index()).offset().top; //用$(this).index()获取当前点击的楼梯块的下标，用eq($(this).index())获取相同下标的楼层元素，对其进行操作
        $('html,body').animate({
            scrollTop: $top //页面
        });
    });
    /* 点击回到顶部按钮，回到顶部 */
    $scrolltop.on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        });
    });
})(jQuery);