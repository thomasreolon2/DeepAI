'use strict';
// server.js가 node에서 사용하는 통상적인 app.js임

// express를 활용한 서버 만들기
/// sj -> const express = require('express'); // 익스프레스 모듈 require 및 app 설정 (해당 방식은 express 에서 사용하도록 한 규약? 같은 방식)
/// sj -> const fs = require('fs'); // 파일 시스템 
//var http = require('http'); // 이건 왜 주석처리 되있던 걸까?
const ejs = require("ejs"); // ejs는 서버에서 JS로 템플릿을 만들 수 있게 도와준다.

//// -> sj var app = express();

/////// LTI


var express = require('express');

var cfenv = require('cfenv');

var uuid = require("uuid4");
var lti = require("ims-lti");

var fs = require('fs');
// var mod2File = fs.readFileSync(".html", "utf8");
var mod3File = fs.readFileSync("BlockExport_Editor.html", "utf8");

// create a new express server
var app = express();

// app.set('trust proxy', function (ip) {
//   if (ip === '127.0.0.1' || ip === '114.71.137.154') return true // trusted IPs
//   else return false
// })

app.set('trust proxy', 'loopback, 114.71.137.154');


var sessions = {};
console.log(__dirname + "/public");
app.use(express.static(__dirname + '/public'));

app.post("*", require("body-parser").urlencoded({extended: false}));
app.post("./BlockExport_Editor.html", (req, res) => {	
	var moodleData = new lti.Provider("top", "secret");
	moodleData.valid_request(req, (err, isValid) => {
		if (!isValid) {
			res.send("Invalid request: " + err);
			return ;
		}
		
		var sessionID = uuid();
		sessions[sessionID] = moodleData;
	
		var sendMe = mod3File.toString().replace("//PARAMS**GO**HERE",
				`
					var params = {
						sessionID: "${sessionID}",
						user: "${moodleData.body.ext_user_username}"
					};
				`);

		res.setHeader("Content-Type", "text/html");
		res.send(sendMe);
	});   // moodleDate.valid_request
	
});       // app.post("/module_3");


app.get("/grade/:sessionID/:grade", (req, res) => {
	const session = sessions[req.params.sessionID];
	var grade = req.params.grade;
	var resp;
	
	if (grade < 60) {
		resp = `${grade} is too low. How about sixty instead?`;
		grade = 60;
	} else if (grade > 90) {
		resp = `${grade} is too high. How about ninety instead?`;
		grade = 90;		
 	} else {
 		resp = `${grade} sounds reasonable, sure.`;
 	}
	
	session.outcome_service.send_replace_result(grade/100, (err, isValid) => {
		if (!isValid)
			resp += `<br/>Update failed ${err}`;

		res.send(resp);
	});

});    // app.get("/grade...")

var appEnv = cfenv.getAppEnv();
appEnv.port = 50197   ////////////일단은 이렇게
// start server on the specified port and binding host
var server = app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.port);
});
///////

const options = {
  key: fs.readFileSync('./keys/private.pem'),
  cert: fs.readFileSync('./keys/public.pem')
};

// var server = require('http').createServer(options, app).listen(50197, function(){
//     console.log('Socket IO server listening on port 50197');
// });



// 명성이형이 하던 크롤링
const cheerio = require("cheerio")
const client = require('cheerio-httpcli');  
const bodyParser = require('body-parser'); 
const url = require('url');   
const request = require('request'); 

// 크롤링 
const axios = require("axios")

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

// express라우팅 : 엔드포인트(URI)의 정의, 그리고 URI가 클라잉너트 요청에 응답하는 방식
app.post("/test2", function (req, res) { 
  console.log("페이지 정보 가져오기");
  let url = req.body.url // 클라이언트로 받은 url 정보
  console.log(req.body.url); // url 한번 콘솔에 찍어봄
  let result = ""; //getHTML(); 
  async function getForum() {
    try {
      let response = await axios.get(
        url         // url을 가지고 axios.get을 통해 html dom을 가져옴
      );
      res.json({data: response.data}); // 클라이언트에 값을 보냄.
    } catch (error) {
      console.error(error);
    }
  }
  result = getForum();  
}); 