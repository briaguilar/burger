// Importing orm.js
var orm = require(../config/orm.js);


var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objectColVals, condition, cb) {
        orm.update("burgers", objectColVals, condition, function(res) {
            cb(res);
        });
    }
};


// Exporting burger.js
module.exports = burger;