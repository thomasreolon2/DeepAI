'use strict';


var express = require('express');
var fs = require('fs');
//var https = require('https');
const ejs = require("ejs"); 


//크롤링 
var client = require('cheerio-httpcli');  
const bodyParser = require('body-parser'); 
var urlTpye = require('url');   
var request = require('request');
var fname ;
//크롤링 

const options = {
    key: fs.readFileSync('./keys/private.pem'),
    cert: fs.readFileSync('./keys/public.pem')
};


var app = express();
var server = require('http').createServer(options, app);
var io = require('socket.io')(server);// http server를 socket.io server로 upgrade 
 
app.set("view engine", "ejs"); 
app.use(bodyParser.urlencoded({extended: false})); // URL 인코딩 안함
app.use(bodyParser.json()); // json 타입으로 파싱하게 설정

// js & css 
app.use('/js', express.static(__dirname + '/public/js')); 
app.use(express.static(__dirname + '/public'));

server.listen(8000, function () {
    console.log('Socket IO server listening on port 8000');
}); 
 
//index 
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/BlockExport_Editor.html");
}); 

app.get('/cnn', function (req, res) {
    res.sendFile(__dirname + "/cnnTest.html");
});

app.get("/test", function (req, res) { // postTest라는 주소로 POST요청이 들어오면 실행
    res.render(__dirname + "/test.ejs");
}); 


   
app.get('/datasets_load_lms', function (req, res) {  //csv 파일 읽기 
  res.sendFile(__dirname + "/datasets_load_lms.html"); 
});       

app.get('/show_chart', function (req, res) {  //차트 보기  
  res.sendFile(__dirname + "/show_chart.html");
});   
 
// POST Test 
app.post("/postTest", function (req, res) { // postTest라는 주소로 POST요청이 들어오면 실행

    console.log(req.body); // body에 있는 정보를 콘솔창에 출력.  
    res.json({ok: true}); // 클라이언트에 성공했다고 신호를 보냄.

});  
 



//socket io 부분 
// connection이 수립되면 event handler function의 인자로 socket인 들어온다
io.on('connection', function (socket) { 
 

    socket.on('Scripts_Block', function (data) {
      console.log(data.S_option);  
      console.log(data.S_keyword); 
      console.log(data.S_num); 
      console.log(data.S_local); 
      scripts(data.S_option,data.S_keyword,data.S_num,data.S_local); 
     }); 
 
    // force client disconnect from server
    socket.on('forceDisconnect', function () {  
        socket.disconnect();   
    })

    socket.on('disconnect', function () {  
        console.log('user disconnected: ' + socket.name);
    });
 
});  
