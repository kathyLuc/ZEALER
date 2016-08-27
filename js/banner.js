/**
 * Created by Administrator on 2016/7/2.
 */
$(document).ready(function () {

    //版头链接的颜色改变
    $(".inner_nav>li>a").hover(function () {
        $(this).css("color", "yellow");
    }, function () {
        $(this).css("color", "#ffffff");
    });

    //app下载页面显示,需要设置延时
    var timer = null;
    $(".app_download").on("mouseenter", function () {
        $(".app_area").css("display", "block");
        clearTimeout(timer);
    }).on("mouseleave", function () {
        timer = setTimeout(function () {
            $(".app_area").css("display", "none");
        }, 300);
    });

    $(".app_area").on("mouseenter", function () {
        $(".app_area").css("display", "block");
    }).on("mouseleave", function () {
        clearTimeout(timer);
    });


    // 实验室图片动画
    $(".lab_list").on("mouseenter", "li", function () {

        $(this).find("span:eq(0)").stop().animate({"opacity": 0.8}, 300);
        $(this).find("span:eq(1)").stop().animate({"opacity": 1, "left": 173}, 300);
        $(this).find("span:eq(2)").stop().animate({"opacity": 1, "right": 173}, 300);
        $(this).find("span:eq(3)").stop().animate({"opacity": 1, "top": 0}, 300)

    }).on("mouseleave", "li", function () {

        $(this).find("span:eq(0)").stop().animate({"opacity": 0}, 300);
        $(this).find("span:eq(1)").stop().animate({"opacity": 0, "left": 83}, 300);
        $(this).find("span:eq(2)").stop().animate({"opacity": 0, "right": 83}, 300);
        $(this).find("span:eq(3)").stop().animate({"opacity": 0, "top": 20}, 300)
    });

    // 深度好文右手边动画颤抖
    $(".art_right").children("li").on("mouseenter", function () {

        $(this).stop(true, true).fadeOut("fast").fadeIn("fast");

    });


    //测试工具--俊俊
    //左侧动画效果
    $(".test-left>ul>li").mouseenter(function () {
        $(this).children("img").stop().animate({
            left: 50,
            top: 0
        }, function () {
            $(this).stop().animate({
                left: 50,
                top: -100
            }, function () {
                $(this).stop().animate({
                    left: 50,
                    top: 0
                }, function () {
                    $(this).stop().animate({
                        left: 50,
                        top: -3
                    }, function () {
                        $(this).stop().animate({
                            left: 45,
                            top: 5
                        }, function () {
                            $(this).stop().animate({
                                left: 50,
                                top: -3
                            }, function () {
                                $(this).stop().animate({
                                    left: 55,
                                    top: 5
                                }, function () {
                                    $(this).stop().animate({
                                        left: 50,
                                        top: -5
                                    }, function () {
                                        $(this).stop().animate({
                                            left: 50,
                                            top: 0
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });
    $(".test-left>ul>li").mouseleave(function () {

        $(this).children("img").stop().animate({
            left: 50,
            top: 0
        }, 200)

    });

    //右侧轮播图
    $("span").mouseenter(function () {
        $("ul").animate({left: -160 * $(this).index()});
        $(this).addClass("current").siblings().removeClass("current")
    });


    //返回顶部按钮
    $(window).scroll(function () {

        var scrollTop = $(document).scrollTop();
        var headerHeight = $(".bigHead").height();

        if (scrollTop > headerHeight) {
            $(".side-btn").stop().animate({bottom: 40, opacity: 1}, 200);

        } else {

            $(".side-btn").stop().animate({bottom: -90, opacity: 0}, 200);
        }

    });

    




});