'use strict';

var express = require('express');
var fs = require('fs');
var https = require('https');
const ejs = require("ejs");
const bodyParser = require('body-parser');          //

var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));  // URL 인코딩 안함 
app.use(bodyParser.json());                         // json 타입으로 파싱하게 설정

// js & css
app.use('/js', express.static(__dirname + '/public/js'));
app.use(express.static(__dirname + '/public'));

const options = {
	key: fs.readFileSync('./keys/private.pem'),
	cert: fs.readFileSync('./keys/public.pem')
};

https.createServer(options, app).listen(8000, function() {
    console.log("HTTPS server listening on port " + 8000);
  });

// index
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/BlockExport_Editor.html");
});

//AJAX GET METHOD
/* Deprecated 
app.get('/code_run',function(req,res) {
    var data = req.query.data;
    console.log('GET Parameter = ' + data);
    var result = data;
    console.log(result);
    res.send({result:result});
});
*/

// cnn test
app.get('/cnn', function (req, res) {
    res.sendFile(__dirname + "/cnnTest.html");
});

app.get("/test", function(req, res){   // postTest라는 주소로 POST요청이 들어오면 실행
    res.render(__dirname + "/test.ejs");
});

// POST Test
app.post("/postTest", function(req, res){   // postTest라는 주소로 POST요청이 들어오면 실행
   
    console.log(req.body);      // body에 있는 정보를 콘솔창에 출력.
    res.json({ok:true});        // 클라이언트에 성공했다고 신호를 보냄.
    
});

//app.listen(8000, function () {
//    console.log("hello!");
//});