var express = require('express');
var config = require('../config.json');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('cars');

var lang = {

	fetchData:function (res,callback) {
        db.cars.find({}).toArray(function (ec, dc) {
            if (ec) {
                console.log(ec);
            } else {

                var r = {response : 3,result : dc};
                console.log(r);
                res(r)
            }
        })
    },

};
module.exports=lang;