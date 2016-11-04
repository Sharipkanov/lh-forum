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
    });
})(jQuery);