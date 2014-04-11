var $ = require('jquery');

var responsiveNav = require('../../lib/bower/js/responsive-nav/responsive-nav.js');
$(function(){
    var nav = responsiveNav('.nav-collapse', {
        label: "Nav"
    });
});
