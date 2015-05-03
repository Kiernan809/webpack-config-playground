require("../css/main.scss");

var $ = require('jquery');
var rates = {
    // threshold: rate%,
    previous: {
        0       : 0.00,
        125000  : 0.01,
        250000  : 0.03,
        500000  : 0.04,
        1000000 : 0.05,
        2000000 : 0.07
    },
    current: {
        0       : 0.00,
        125000  : 0.02,
        250000  : 0.05,
        925000  : 0.10,
        1500000 : 0.12
    }
};


$(function() {
    console.log("jQuery required works good...");
})
