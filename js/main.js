$(document).ready(function() {
    clockUpdate();
    setInterval(clockUpdate, 1000);

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back').fadeIn('slow');
        } else {
            $('.back').fadeOut('slow');
        }
    });
    $('.back').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000, 'easeInOutExpo');
        return false;
    });
})

function clockUpdate() {
    var date = new Date();
    $('.digital-clock').css({'color': '#fff', 'text-shadow': '0 0 6px #ff0'});
    function addZero(x) {
        if (x < 10) {
            return x = '0' + x;
        } else {
            return x;
        }
    }

    function twelveHour(x) {
        if (x > 12) {
            return x;
        } else if (x == 0) {
            return x = 12;
        } else {
            return x;
        }
    }

    var h = addZero(twelveHour(date.getHours()));
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());

    $('.digital-clock').text(h + ':' + m + ':' + s)
}