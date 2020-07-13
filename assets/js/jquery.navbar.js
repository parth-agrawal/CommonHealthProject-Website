$(".nav-sticky").hide();
        $(window).scroll(function() {
        if ($(window).scrollTop() > 420) {
            $(".nav-sticky").css('z-index', '-1').slideDown(50);
        } else {
            $(".nav-sticky").slideUp(10);
        }
        if ($(window).scrollTop() > 500) {
            $(".nav-sticky").css("z-index", "2"); 
        }
        if ($(window).scrollTop() > 600) {
            $(".nav-sticky").css('background-color', 'white');
        } else {
            $(".nav-sticky").css('background-color', 'transparent');
        }
        })
