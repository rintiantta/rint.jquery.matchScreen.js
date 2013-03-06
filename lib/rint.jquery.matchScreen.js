$.fn.matchScreen = function (options) {
    var width = options.width || 1280;
    var height = options.height || 720;
    var minimum = options.minimum;
    var $self = $(this);

    $self.css({
        width: width,
        height: height,
        position: 'absolute',
        left: '50%', top: '50%',
        marginLeft: -(width / 2),
        marginTop: -(height / 2)
    });

    $(window).resize(function () {
        var scale = { x: 1, y: 1 };
        var output = '';

        scale.x = window.innerWidth / width;
        scale.y = window.innerHeight / height;

        if (minimum && (scale.x < minimum || scale.y < minimum)) {
            output = minimum + ',' + minimum;
        } else if (scale.x < scale.y) {
            output = scale.x + ',' + scale.x;
        } else {
            output = scale.y + ',' + scale.y;
        }

        $self.css({
            transsformOrigin: 'center center',
            transform: 'scale(' + output + ')'
        });
    });
    $(window).trigger('resize')
}