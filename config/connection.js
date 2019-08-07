// Setting up MySQL connection
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "x8aigmj9d9ovw0uf",
        password: "l123tko1syxctp2w",
        database: "burgers_db"
    })
}

// Make connection
connection.connect(function(err) {
    if (err) throw err;
});

// Export connection for ORM
module.exports = connection;