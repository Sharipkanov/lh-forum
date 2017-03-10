var BANNER = (function () {
    function BANNER() {
        var _self = this;

        _self.doc = document;
        _self.window = window;

        _self.bootstrap();
    }

    BANNER.prototype.bootstrap = function () {
        var _self = this;

        // _self.switch();
    };

    // Window load types (loading, dom, full)
    BANNER.prototype.appLoad = function (type, callback) {
        var _self = this;

        switch (type) {
            case 'loading':
                if (_self.doc.readyState === 'loading') callback();

                break;
            case 'dom':
                _self.doc.onreadystatechange = function () {
                    if (_self.doc.readyState === 'complete') callback();
                };

                break;
            case 'full':
                _self.window.onload = function (e) {
                    callback(e);
                };

                break;
            default:
                callback();
        }
    };

    BANNER.prototype.switch = function () {
        var _self = this;

        var switcher = {
            elements: _self.doc.querySelectorAll('.presentation__animate-item')
        };

        switcher.init = function () {
            var current = 1;
            var max = switcher.elements.length;

            // setTimeout(function () {
                setInterval(function () {

                    for (i = 0; i < switcher.elements.length; i++) {
                        if(i === current) {
                            switcher.elements[i].classList.add('active');
                        } else {
                            switcher.elements[i].classList.remove('active');
                        }
                    }

                    current++;
                    if(current === max)
                        current = 0;
                }, 5000);
            // }, 2000);
        };

        switcher.init();

        return switcher;
    };

    return BANNER;
})();

banner = new BANNER;

banner.appLoad('full', function (e) {
    banner.switch();
});