$.fn.matchScreen = function (options) {
    var width = options.width || 1280;
    var height = options.height || 720;
    var $self = $(this);

    

    console.log(window)
    $(window).resize(function () {
        console.log('RESIZE');

        var scale = { x: 1, y: 1 }
        scale.x = window.innerWidth / width
        scale.y = window.innerHeight / height

        if (scale.x < scale.y) {
            scale = scale.x + ',' + scale.x
        } else {
            scale = scale.y + ',' + scale.y
        }

        $self.css({
            transsformOrigin: 'center center',
            transform: 'scale(' + scale + ')'
        })
    });
    $(window).trigger('resize')

    $self.css({
        width: width,
        height: height,
        position: 'absolute',
        left: '50%', top: '50%',
        marginLeft: -(width / 2),
        marginTop: -(height / 2)
    });
}