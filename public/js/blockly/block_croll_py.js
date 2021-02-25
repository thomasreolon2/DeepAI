// url 불러오기
Blockly.Python['url_load'] = function (block) {
    // htmldata : ajax로 가져온 html dom
    pyodide.globals.urlHtmlTag = htmldata; // pyodide.globals.? pyodide에 선언된 변수.
    let code = `
  soup = BeautifulSoup(urlHtmlTag, 'html.parser')
  my_titles = soup.select('div > span> a')
  for x in range(0,10):
      print(my_titles[x].get_text())
  `;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

// bs4 임포트    
Blockly.Python['bs4_import'] = function(block) {
    var code = "from bs4 import BeautifulSoup\n";
    return code;
};