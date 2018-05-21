var express = require('express');
var router = express.Router();
var config = require('../config.json');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('cars');
var Add= {
    cars:function (res,callback) {
        db.cars.find({}, function (er, re) {
            if (er) {
                console.log(er);
            } else {
                console.log(re);
            }
            res.send(re);
    })
    }
 };
module.exports=Add;