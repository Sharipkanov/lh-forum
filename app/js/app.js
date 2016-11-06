var doc = document;

function LHFORUM() {
    var _self = this;

    _self.imageHalfSize();
}

LHFORUM.prototype.imageHalfSize = function () {
    var images = doc.querySelectorAll('[data-half-size]');

    for(var i=0; i<images.length; i++) {
        var currentWidth = images[i].offsetWidth,
            halfWidth = currentWidth / 2;

        images[i].style.width = halfWidth + 'px';
    }
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
    });
})(jQuery);