var client = require('cheerio-httpcli');
var officegen = require('officegen');
var xlsx = officegen('xlsx'); 
var fs = require('fs');

var title_list = []; 
var publisher_list = [];       
var content_list = []; 

function script (savemodel,keyword,crolnum,){
  


 

  var url = "https://search.naver.com/search.naver?sm=tab_hty.top&where=news&query="+encodeURI(keyword); //+ "&start=" ;

  var param = {};
     
     
  client.fetch(url, param, function(err, $, res){  // 주소,data,콜백함수
     
     
    if(err){
      console.log("error:", err); 
      return;
    } 
    
    
    var body = $.html(); 
     
   
   
    var title_class = $("._sp_each_title");   //네이버 기사 title 클래스명 
    var publisher_class = $("._sp_each_source");   //네이버 기사 신문사 클래스명 
   // var content_class = $(".h1");   //네이버 기사 내용 클래스명;
    //console.log(content_class.length);   
   
    for (var i = 0 ; i < title_class.length ;i++){   
     
      var title = $(title_class[i]).text();    //타이틀 
      title_list.push(title); 
      //console.log(title);    
    
     
      var publisher = $(publisher_class[i].children[0]).text();    //신문사 
      publisher_list.push(publisher);  
     // console.log(publisher); 
     
      //var content =$(content_class[i]).html();
      //var content = $(content_class[0].children[i]).html(); //children[i].children[1].children[2]).text();  
   
     // content_list.push(content);   
     // console.log(content); 
    }  
    exportToExcel(title_list,publisher_list); 
  });    
      
       
  function exportToExcel(title_list,publisher_list){ 
    var sheet = xlsx.makeNewSheet(); 
    sheet.name = "corona"; 
      
    for (var i = 0 ; i < title_list.length ;i++){ 
       
    
   sheet.data[i] = [title_list[i],publisher_list[i],content_list[i]];
  
    }   
     var strm = fs.createWriteStream('C:/Users/inhatc/Desktop/크롤링 테스트/corona.xlsx');  
    xlsx.generate(strm); 
  }

  
}
