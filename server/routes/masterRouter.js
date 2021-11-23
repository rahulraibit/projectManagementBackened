var express = require('express')
var router = express.Router()
let dashboardservice = require('../service/masterspec.js')

router.get('/get', function (req, res) {
    let l = dashboardservice.getData();
    console.log(l);
    if (!l || !l.length) {
        dashboardservice.createRecord();
    }
    l = dashboardservice.getData();
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

router.post('/product/:id', function (req, res) {
    let data = dashboardservice.updateDataByID(req.params.id, req.body);
    res.send(data);
});

router.get('/product/:id', function (req, res) {
    let data = dashboardservice.getDataByID(req.params.id);
    res.send(data);
});

router.post('/product/:id/like', function (req, res) {
    let data = dashboardservice.incrementLike(req.params.id);
    res.send(data);
});

module.exports = router;