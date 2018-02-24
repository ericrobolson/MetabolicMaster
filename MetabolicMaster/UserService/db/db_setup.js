var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('user_database.db');
 
db.serialize(function() {
  db.run("CREATE TABLE User (Id INTEGER PRIMARY KEY ASC, EmailAddress TEXT UNIQUE NOT NULL)"); 
  console.log('db created successfully.')
});
 
db.close();
