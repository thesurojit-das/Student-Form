var mysql = require("mysql")

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kiit",
    database: "registration"
});

module.exports = con;