var express = require('express');
var router = express.Router();
var db = require('../models/Database');
/* GET users listing. */
router.get('/cars', function(req, res, next) {

    db.cars(req,function (err,count) {
        if(err){
            console.log(err);
        }else{
            console.log(count);
        }
    })

});

router.get('/index',function (req,res,next) {
    res.render('index.html');
})

module.exports = router;
