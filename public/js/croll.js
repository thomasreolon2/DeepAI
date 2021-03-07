'use strict';

var htmldata; // 크롤링된 html dom
function _requestsURL(_url){
  //let _url = "https://www.naver.com";
  //let _url = "https://www.melon.com/chart/index.htm";
  //let _url = prompt("크롤링할 URL을 입력해주세요 : "); // node에 전달할 URL을 입력받는 prompt 
  
  // 블록 안에 'URL' 이라는 필드에 값 추가
  // var block = demoWorkspace.getBlockById(blockId);
  // block.setFieldValue(JSON.stringify(_url), 'URL');

  //demoWorkspace.addChangeListener(codeUpdate);  // 코드 갱신하기 메소드

  $.ajax({
    url: "/test2",        // server.js에서 URI확인
    method: "POST",       // HTTP 요청 메소드(GET, POST 등) 
    data : {url : _url},  // json형식으로 서버에 url전송
    dataType: "json",     // 서버에서 받아올 데이터의 타입
    success: function(data){   
      pyodide.globals.req = data.data;  // node에서 받아온 데이터를 htmldata 전역변수에 넣어준다. (차후 크롤링블록에서 htmldata변수가 사용됨)
    }
  });
}

