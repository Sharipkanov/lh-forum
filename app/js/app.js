var doc = document;

function LHFORUM() {
    var _self = this;
}

LHFORUM.prototype.imageHalfSize = function () {
    var images = doc.querySelectorAll('[data-half-size]');

    for(var i=0; i<images.length; i++) {
        var currentWidth = images[i].offsetWidth,
            halfWidth = currentWidth / 2;

        images[i].style.width = halfWidth + 'px';
    }
};

LHFORUM.prototype.detect_select = function(bl) {
    var val = bl.find('option:selected').text();
    bl.siblings('.drop-select__current').text(val);
};

(function ($) {
    $(doc).ready(function () {

        // Past login code here...
        var app = new LHFORUM;

        $('[data-phone-mask]').mask('+7 (000) 000-0000');

        setTimeout(function() {
            $('.s-switch').find('li').removeClass('uk-active');
            $('.s-switch').find('li').first().addClass('uk-active');
        }, 300);

        $('.uk-form').submit(function(e) {
            e.preventDefault();

            var modal = UIkit.modal("#success-modal");

            modal.show();

            return false;
        });

        $('.buy-btn').click(function(e) {
            e.preventDefault();

            $('.vip-place-grid').fadeOut(300);
            setTimeout(function() {
                $('.paymanent').fadeIn(300);
            }, 300);

            return false;
        });

        app.imageHalfSize();

        $(doc).on('change', '.drop-select__wrapper select', function () {
            app.detect_select($(this));
        });

        $('.drop-select__wrapper select').each(function () {
            app.detect_select($(this));
        });

        $('[data-youtube-embed]').click(function (e) {
            var videoUrl = $(this).attr('data-youtube-embed');

            setTimeout(function () {
                var modal = UIkit.modal("#video-modal");

                if ( modal.isActive() ) {
                    var iframe = modal.find('iframe');

                    iframe.attr('src', videoUrl);
                }
            }, 1);
        });
    });
})(jQuery);