var con = require("./public/connection")
var express = require("express");
var app = express();
var path = require('path') //to get css file
app.use(express.static(path.join(__dirname, 'public'))); //to get css file
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/', function (req, res) {
    var FIRST = req.body.FIRST;
    var LAST = req.body.LAST;
    var REGISTRATION = req.body.REGISTRATION;
    var DOJ = req.body.DOJ;
    var EMAIL = req.body.EMAIL;
    var PHONE = req.body.PHONE;
    var GENDER = req.body.GENDER;
    var DEGREE = req.body.DEGREE;


    con.connect(function () {
        // if (error)  throw error;
        
        var sql = "INSERT INTO student (FIRST,LAST,REGISTRATION,DOJ,EMAIL,PHONE,GENDER,DEGREE) VALUES ('" + FIRST + "','" + LAST + "','" + REGISTRATION + "','" + DOJ + "','" + EMAIL + "','" + PHONE + "','" + GENDER + "','" + DEGREE + "')";
        con.query(sql, function (error, result) {
            if (error) {
                // throw error;
                res.sendFile(__dirname + "/public/NotSuccess.html")
            }
            res.sendFile(__dirname + "/public/success.html")
        })
    })
})
const port =process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`listening  ${port}`);
});
