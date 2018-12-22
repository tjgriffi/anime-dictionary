const http = require('http');
const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//  Create the connection to the mysql database containing the names of anime
//  Mysql database connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "B4l7o357",
  database: "animedb"
});

// Variable that holds the sql query
var sqlQuery = "";

con.connect(function(err){
	if (err) throw err;
});

app.get('/', function(req, res){
	res.send('animeDb server express');
});

app.listen(8080, function(){
	console.log('listening on port 8080');
});

app.get('/findAnime', function(req, res){

	// Adjust the sql query
	sqlQuery = "SELECT * FROM animetable WHERE name = '" + req.query.aTitle + "'";

	// Query the database and if the entry is found return that result
	con.query(sqlQuery, function(err, result){

		if (err) {throw err;}
		else{
			res.send(result);
		}
	});

	console.log(req.query.aTitle);

	// res.send(req.query.aTitle);
});

app.get('*', function(res){

	console.log('error');
});


// function addAnimeQuery();

// function removeAnimeQuery();

// function getAnimeTable();
