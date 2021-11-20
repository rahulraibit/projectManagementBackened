var express = require('express')
var router = express.Router()
let dashboardservice = require('../service/masterspec.js')

router.get('/get', function (req, res) {
    console.log('reached')
    let l = dashboardservice.getData();
    if(l || !l.length)
     {
         dashboardservice.createRecord();
     }
     l = dashboardservice.getData();
     console.log('xxx', l)
     res.send(l);
});

router.get('/search', function (req, res) {
    console.log("reache", req.query);
    let data = dashboardservice.getFilteredData(req.query.title);
    res.send(data);
});

module.exports = router;