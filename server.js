var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
});

con.connect(function(err) {
  if (err)
  {
  	console.log(err);
   	throw err;
  }
  console.log("Connected!");
});