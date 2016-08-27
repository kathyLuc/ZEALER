/**
 * Created by Administrator on 2016/7/3.
 */
///**
// * Created by zyx on 2016/7/2.
// */
//head部分
$(window).load(function () {
    var topHeight = 500;
    $(window).scroll(function () {
        var stHeight = $(document).scrollTop();
        if (stHeight >= topHeight) {
            $(".btns").css({
                "display": "block",
                "position": "fixed",
                "bottom": "50px"
            });
        } else {
            $(".btns").css("position", "static");
        }
    });
});
//

////轮播图开始

//轮播图结束;

$(document).ready(function () {
    $(".mout>li").find(".mask").mouseenter(function () {
        $(this).css("opacity", 0).siblings(".mask").css("opacity", .4);

    });
    
    $(".mout>li").mouseenter(function () {
        $(this).find("img").eq(0).stop().animate({width: 265, height: 265}, 200);
    });

    $(".mout>li").mouseleave(function () {
        $(this).find(".mask").css("opacity", .4);
        $(this).find("img").stop().animate({width: 245, height: 245}, 200);

    });


});


//定时器开始//

$(function () {
    $(window).load(function () {
        var topHeight = 1240;
        var flag = true;
        $(window).scroll(function () {
            var stHeight = $(document).scrollTop();
            var i = null;
            if (flag) {
                if (stHeight >= topHeight) {
                    clearInterval(i);
                    var counter = 0;
                    var c = 0;
                    i = setInterval(function () {
                        $(".content_data h3:eq(0)").html(c);
                        $(".content_data hr").css("width", 1140);
                        counter++;
                        c++;
                        if (counter == 1101) {
                            clearInterval(i);
                            flag = false;
                        }
                    }, 1);
                }
            }

        });
    });


});

$(function () {
    $(window).load(function () {
        var topHeight = 1240;
        var flag = true;
        $(window).scroll(function () {
            var stHeight = $(document).scrollTop();
            var i = null;
            if (flag) {
                if (stHeight >= topHeight) {
                    clearInterval(i);
                    var counter = 0;
                    var c = 0;
                    i = setInterval(function () {
                        $(".content_data h3:eq(1)").html(c);
                        $(".content_data hr").css("width", 1140);
                        counter++;
                        c++;
                        if (counter == 121) {
                            clearInterval(i);
                            flag = false;
                        }
                    }, 1);
                }
            }

        });
    });


});


$(function () {
    $(window).load(function () {
        var topHeight = 1240;
        var flag = true;
        $(window).scroll(function () {
            var stHeight = $(document).scrollTop();
            var i = null;
            if (flag) {
                if (stHeight >= topHeight) {
                    clearInterval(i);
                    var counter = 0;
                    var c = 0;
                    i = setInterval(function () {
                        $(".content_data h3:eq(2)").html(c);
                        $(".content_data hr").css("width", 1140);
                        counter++;
                        c++;
                        if (counter == 801) {
                            clearInterval(i);
                            flag = false;
                        }
                    }, 1);
                }
            }

        });
    });


});

$(function () {
    $(window).load(function () {
        var topHeight = 1240;
        var flag = true;
        $(window).scroll(function () {
            var stHeight = $(document).scrollTop();
            var i = null;
            if (flag) {
                if (stHeight >= topHeight) {
                    clearInterval(i);
                    var counter = 0;
                    var c = 0;
                    i = setInterval(function () {
                        $(".content_data h3:eq(3)").html(c);
                        $(".content_data hr").css("width", 1140);
                        counter++;
                        c++;
                        if (counter == 151) {
                            clearInterval(i);
                            flag = false;
                        }
                    }, 1);
                }
            }

        });
    });
});


