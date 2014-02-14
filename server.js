var occupations = {
	"occupations": [
		{"Maketing": "Txtwire"},
		{"Video Producer": "Self"},
	]
	}

var express = require('express');

var app = express ();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept');
    next();
  })
});

app.get('/name', function(req,res){
	res.json({"name":'John D. Storey'});
});

app.get('/location', function(req,res){
	res.json({"location":'Orem, UT'});
});

app.get('/hobbies', function(req,res){
	res.json({"hobbies":'Running, Jumping, Breaking Stuff'});
});

app.get('/occupations', function(req,res){
	console.log("made it into occupations")
	if (req.query.order === 'asc'){
		res.send(occupations.occupations.sort());
	} else if (req.query.order === 'desc'){
		res.send(occupations.occupations.reverse());
	} else res.json(occupations);
	
});

app.get('/occupations/latest', function(req,res){
	res.json(occupations.occupations[1]);
});

app.get('/')

app.listen(8432)