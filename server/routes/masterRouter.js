var express = require('express')
var router = express.Router()
let dashboardservice = require('../service/masterspec.js')

router.get('/get', function (req, res) {
    console.log('reached')
    let l = dashboardservice.getData();
    console.log(l);
    if(!l || !l.length)
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

router.post('/create', function (req, res) {
    console.log("reache", req.body);
    let data = dashboardservice.createNewRecord(req.body);
    res.send(data);
});

module.exports = router;