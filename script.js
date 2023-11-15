$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#87CEEB', '#90EE90', '#FFD700', '#FFA07A'],
        navigation: true,
        navigationPosition: 'right',
    });

    // code for smooth scrolling on page.
    $('a').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
