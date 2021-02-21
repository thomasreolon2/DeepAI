'use strict';
// server.js가 node에서 사용하는 통상적인 app.js임

// express를 활용한 서버 만들기
var express = require('express'); // 익스프레스 모듈 require 및 app 설정 (해당 방식은 express 에서 사용하도록 한 규약? 같은 방식)
var fs = require('fs'); // 파일 시스템 
//var http = require('http'); // 이건 왜 주석처리 되있던 걸까?
const ejs = require("ejs"); // ejs는 서버에서 JS로 템플릿을 만들 수 있게 도와준다.

var app = express();

// install cors 로 설치 하였기 때문에 cors 모듈 require
var cors = require('cors')
const options = {
  key: fs.readFileSync('./keys/private.pem'),
 cert: fs.readFileSync('./keys/public.pem')
};
// cors () 사용  // 모든 도메인에 대한 Request 활성화  -> 좋지 않은 방식 
app.use(cors());

var server = require('http').createServer(options, app).listen(15480, function(){
    console.log('Socket IO server listening on port 15480');
});



//크롤링 21.02.19 남지원 주석처리
 var client = require('cheerio-httpcli');  
 const bodyParser = require('body-parser'); 
 var urlTpye = require('url');   
 var request = require('request'); 
 var fname ;
// //크롤링 

var axios = require("axios")
var cheerio = require("cheerio")


var io = require('socket.io')(server);// http server를 socket.io server로 upgrade 
app.set("view engine", "ejs"); 
app.use(bodyParser.urlencoded({extended: false})); // URL 인코딩 안함
app.use(bodyParser.json()); // json 타입으로 파싱하게 설정

// js & css  
app.use('/js', express.static(__dirname + '/public/js')); 
app.use(express.static(__dirname + '/public')); 

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
    var get_html; 

    socket.on('Scripts_Get_URL', function (data) {
      console.log(data.S_option); 
      get_html = scripts(data.S_option); 
    });   

    socket.emit('Scripts_Get_URL', get_html);  
});

app.get("/test2", function (req, res) { 
  console.log("페이지 정보 가져오기");
  // var url = 'https://www.naver.com';
  // var url = 'http://cyber.inhatc.ac.kr/';
  let url = 'https://www.google.co.kr';
  let result = ""; //getHTML(); 
  async function getForum() {
    try {
      let response = await axios.get(
        url         // 검색할 URL 가져오기 
      );
      res.json({data: response.data}); // 클라이언트에 성공했다고 신호를 보냄.
    } catch (error) {
      console.error(error);
    }
  }
  result = getForum();  
}); 