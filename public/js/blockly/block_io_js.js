///////////////////////////////////////////////////////
// 2020-12-28 입출력 카테고리
///////////////////////////////////////////////////////

Blockly.JavaScript['input1'] = function (block) {
  var text_name = block.getFieldValue('inputdata');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['printtv'] = function (block) {
  var value_content1 = Blockly.JavaScript.valueToCode(block, 'content1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_content2 = Blockly.JavaScript.valueToCode(block, 'content2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['printc'] = function (block) {
  var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['itdata'] = function(block) {
  var text_name = block.getFieldValue('itdata1');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['indata'] = function(block) {
  var text_modified_col = block.getFieldValue('indata1');
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['fd_open'] = function (block) {
  var dropdown_set_menu = block.getFieldValue('set_menu');
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['fd_read'] = function (block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['fd_readline'] = function (block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['fd_close'] = function (block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['fd_write'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  return code;
};