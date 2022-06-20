var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kiit",
    database: "registration",
    port:3306
});

module.exports = connection;
