const http = require('http');
const express = require('express');

// Provides middle ware for successfully creating the body part of an http post req.
const bodyParser = require('body-parser');

// Allows the use of mysql queries 
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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

// Function for finding the anime in the database
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
});

// Function for adding the anime to the database
app.post('/addAnime', function(req, res){

	// Adjust the sql query
	sqlQuery = "INSERT INTO animetable (name, description) \nValues ('"+req.body.aTitle+"', '"+req.body.aDescription+"')";

	// Make the call to add the anime into the database.
	con.query(sqlQuery, function(err, result){
		if (err) {throw err;}
		else{
			res.send("success");
		}
	});
});

app.get('*', function(res){

	console.log('error');
});

// Function for removing an anime from the database
app.post('/removeAnime', function(req, res){
	console.log(req.body.aTitle);

	// Adjust the sql query to remove an entry
	sqlQuery = "DELETE FROM animetable WHERE name ='"+req.body.aTitle+"'";

	// Make the call to the database to remove the selected anime
	con.query(sqlQuery, function(err, result){
		if (err) {throw err;}
		else{
			res.send("Removed "+req.body.aTitle);
		}
	});
})
// function getAnimeTable();
