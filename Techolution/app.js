var express = require('express');

var mongo = require('mongoskin');
var db = mongo.db('mongodb://localhost:27017/angular', { native_parser: true });
db.bind('cars');
var app = express();

var expressPort = 8080;
/*
    MongoPort = 27017,
    MongoIP = 'localhost',
    dbname = 'angulars',
    collectionName = 'devices';
*/

app.use('/image',express.static(__dirname+'/public'));
app.set('view engine', 'jade');
app.set('json spaces', 2);

app.listen(expressPort, function () {
    console.log('server listening on port ' + expressPort);
});

//var db = new Db(dbname, new Server(MongoIP, MongoPort), { safe: false });
app.get('/getData', function (req, res) {
    db.cars.findOne({make:'Ford'},function (ec,dc) {
        if(ec){
            console.log(ec);
        }else{
            console.log(dc);
            res.setHeader('Content-Type', 'application/json');
            res.json(dc);
            //res.json(dc).toString().pretty;
            //res.send({ "records":[ {"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"}, {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"}, {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"}, {"Name":"Around the Horn","City":"London","Country":"UK"}, {"Name":"B's Beverages","City":"London","Country":"UK"}, {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"}, {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}, {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"}, {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"}, {"Name":"Bon app'","City":"Marseille","Country":"France"}, {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"}, {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"}, {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"}, {"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"}, {"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"} ] });
        }
    })
});

app.get('/',function (req,res) {
    res.sendFile(__dirname+'/index.html');
})