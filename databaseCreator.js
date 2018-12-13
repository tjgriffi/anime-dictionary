var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "B4l7o357",
  database: "animedb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sql = "";

  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Inserted values into table");
  });
});