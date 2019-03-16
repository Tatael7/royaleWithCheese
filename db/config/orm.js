const connection = require("../config/connection.js");

var orm = {
    selectAll: function(whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function(err, res) {
            if(err) throw err;
            console.log(res);
        })
    },
    
    insertOne: function(tableInput, burger_name, devoured) {
        var queryString = "INSERT INTO ?? VALUES ?? ??";
        connection.query(queryString[tableInput, burger_name, devoured], function(err,res) {
            if(err) throw err;
            console.log(res);
        })
        
    },

    updateOne: function(whatToSelect, tableInput, changesDesired) {
        var queryString = "UPDATE ?? SET ?? WHERE??";
        connection.query(queryString[whatToSelect, tableInput, changesDesired], function(err, res) {
            if(err) throw err;
            console.log(res);
        })
    }

};

module.exports = orm;

