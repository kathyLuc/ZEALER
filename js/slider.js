/**
 * Created by Administrator on 2016/7/2.
 */
$(document).ready(function() {

    var imgsSrc = ["slide00.jpg", "slide01.jpg", "slide02.jpg", "slide03.jpg"];
    var slideArr = [];
    $.each(imgsSrc, function(i, v) {
        var tempStr =
            '<li data-thumb="img/thumb/' + v + '">' +
            '<img src="img/' + v + '" />' +
            '</li>';
        slideArr.push(tempStr);
    });
    $("#image-gallery").html(slideArr.join(""));
    $('#image-gallery').lightSlider({
        gallery: true,
        item: 1,
        thumbItem: 9,
        slideMargin: 0,
        speed: 1000,
        auto: true,
        loop: true,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }
    });
    $("#content-slider").lightSlider({
        loop: true,
        keyPress: true
    });
    


});