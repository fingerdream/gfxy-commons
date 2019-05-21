jQuery(document).ready(function () {
    $('.kv-ltr-theme-default-star').rating({
        hoverOnClear: false,
        containerClass: 'is-star',
        showClear:false,
        // showCaption:false
        // starCaptions:{
        //     0.5: '1',
        //     1: '2',
        //     1.5: '3',
        //     2: '4',
        //     2.5: '5',
        //     3: '6',
        //     3.5: '7',
        //     4: '8',
        //     4.5: '9',
        //     5: '10'
        // },
        starCaptions: function(val) {
            return val*2;
        }
    });
});