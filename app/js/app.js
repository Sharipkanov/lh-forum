var doc = document;

function LHFORUM() {
    var _self = this;

    _self.removeAfterTest();
}

LHFORUM.prototype.removeAfterTest = function () {
    console.log('Script works perfectly...');
    console.log("Don't forget to remove this prototype!");
};

(function ($) {
    $(doc).ready(function () {

        // Past login code here...
        var app = new LHFORUM;
    });
})(jQuery);