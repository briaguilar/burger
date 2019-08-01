// Requiring connection.js
var connection = require("./connection");

// Object for SQL statement functions
var orm = {
    // selectAll()
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    // // insertOne()
    create: function(tableInput, val, cb) {
        connection.query("INSERT INTO " + tableInput + " (burger_name) VALUES ('" + val + "');",
        function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    // // updateOne()
    update: function(tableInput, condition, cb) {
        connection.query("UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";", function(err, res) {
            if (err) throw err;
            cb(res);
        })
    }
};


// Export ORM object to model
module.exports = orm;