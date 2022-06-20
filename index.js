var connection = require("./public/connection")
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

var app = express();
var path = require('path') //to get css file
app.use(express.static(path.join(__dirname, 'public'))); //to get css file


// connect to the database
connection.connect(function (error) {
    if (error) throw error
    else console.log("connected to the database successfully!")
});


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/", encoder, function (req, res) {
    var FIRST = req.body.FIRST;
    var LAST = req.body.LAST;
    var REGISTRATION = req.body.REGISTRATION;
    var DOJ = req.body.DOJ;
    var EMAIL = req.body.EMAIL;
    var PHONE = req.body.PHONE;
    var GENDER = req.body.GENDER;
    var DEGREE = req.body.DEGREE;


    connection.query("INSERT INTO student (FIRST,LAST,REGISTRATION,DOJ,EMAIL,PHONE,GENDER,DEGREE) VALUES (?,?,?,?,?,?,?,?)",[FIRST,LAST,REGISTRATION,DOJ,EMAIL,PHONE,GENDER,DEGREE], function (error, results, fields) {
        if (PHONE.length > 0) {
            res.redirect("/welcome");
        } else {
            res.redirect("/");
        }
        res.end();
    });

})

// when login is success
app.get("/welcome", function (req, res) {
    res.sendFile(__dirname + "/public/success.html")
})


// set app port 
// app.listen(3000,function(){
//     console.log("let's go");
// });

const port =process.env.PORT||7000;
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
});
