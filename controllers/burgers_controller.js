// Import Express
var express = require("express");

// Creating router
var router = express.Router();

// Import burger.js
var burger = require("../models/burger.js");


/***************** SETTING UP ROUTES *****************/

// Homepage
router.get("/", function(req, res) {
    burger.all(function(burger_data) {
        console.log(burger_data);
        
    });
    res.render("index");
})



// Exporting router
module.exports = router;