// bs4 임포트    
Blockly.Python['croll_bs4_import'] = function(block) {
  var code = `
#import requests <- 파이썬코드 활용시 주석삭제
from bs4 import BeautifulSoup\n`;
  return code;
};

// croll_url_load
Blockly.Python['croll_url_load'] = function (block) {
  // htmldata : ajax로 가져온 html dom
  pyodide.globals.urlHtmlTag = htmldata; // pyodide.globals.? pyodide에 선언된 변수.
  let code = `
soup = BeautifulSoup(requests.get(urlHtmlTag), 'html.parser')
`;
  return code;
};

// croll_soup_select
Blockly.Python['croll_soup_select'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var input_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  let code = `
${value_name} = soup.select(${input_name})
`;
  return code;
};

// croll_get_text
Blockly.Python['croll_get_text'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  let code = `
${value_name}.get_text()
`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// croll_soup_select
Blockly.Python['croll_soup'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var input_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  let code = `${value_name}.${input_name}`;
  return code;
};

// croll_soup_select
Blockly.Python['croll_find_all'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var input_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  let code = `${value_name}.find_all(${input_name})`;
  return code;
};
