var express = require('express');
var router = express.Router();
var http = require('http');

var ctrls = [
    { 
        "id": "fld101", 
        "type": "text",
        "visible": true
    },
    { 
        "id": "fld102", 
        "type": "text",
        "visible": false
    },
    { 
        "id": "fld103", 
        "type": "text",
        "visible": true
    }
];



router.get('/api/html/address', function (req, res) {
    var cnt = ctrls.map((e) => {
        if (e.type === 'text') {
            var showHide = e.visible === true ? 'block' : 'none';
            return `<input type='text' id='${e.id}' style='display:${showHide}' />`
        }
    });

    // add custom web component. add JS file to serve in js folder
    cnt += `<hello-world 
                id='hw2' 
                name="Nalliah">
            </hello-world>`
    res.send(`<div>${cnt}</div>`);
});

module.exports = router;