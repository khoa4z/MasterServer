/**
 * Created by Ken on 04/02/2016.
 */
'use strict';

var express = require('express'),
    bodyParser  = require('body-parser'),
    router  = express.Router();

router    
.use(bodyParser.urlencoded({
    extended: true
}))
.use(bodyParser.json())
.use(function (req, res, next){
    next();
})
.route('/r')
.get(function(req,res) {
    res.status(200).send("GET");
})
.post(function(req,res){
    res.status(200).send("POST");
})
.put(function(req, res){
    res.status(200).send("PUT");
});

router.param('id', function(req, res, next){  //Go first
    next();
})
.route('/r/:id')
.get(function(req, res){
    res.status(200).send("GET ID");
})
.delete(function(req,res){
    res.status(200).send("DELETE");
});

module.exports = router;