var express = require('express');
var router = express.Router();
var FetchPersonal=require('../models/Language');

router.get('/',function (req,res,next) {
    FetchPersonal.fetchData(function (err,count) {
        if(err){
            res.json(err);
        }else{
            res.json(count);
        }
    })
});

router.get('/index',function (req,res,next) {
    res.render('index');
})
module.exports=router;
