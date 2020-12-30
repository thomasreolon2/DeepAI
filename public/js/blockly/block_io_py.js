///////////////////////////////////////////////////////
// 2020-12-28 입출력 카테고리
///////////////////////////////////////////////////////

Blockly.Python['input1'] = function (block) {
  var text_name = block.getFieldValue('inputdata');
  // TODO: Assemble Python into code variable.
  var code = 'input(" '+text_name+' ")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};



Blockly.Python['printtv'] = function (block) {
  var value_content1 = Blockly.Python.valueToCode(block, 'content1', Blockly.Python.ORDER_ATOMIC);
  var value_content2 = Blockly.Python.valueToCode(block, 'content2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code ='print("' + value_content1 + ' " + ' + value_content2 + ' )\n';
  return code;
};

Blockly.Python['printc'] = function (block) {
  var value_content = Blockly.Python.valueToCode(block, 'content', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code ='print( '+ value_content + ' )\n';
  return code;
};

Blockly.Python['itdata'] = function(block) {
  var text_name = block.getFieldValue('itdata1');
  // TODO: Assemble Python into code variable.
  var code = text_name + "\n";
  return code;
};

Blockly.Python['indata'] = function(block) {
  var text_modified_col = block.getFieldValue('indata1');
  // TODO: Assemble Python into code variable.
  var code = text_modified_col;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['fd_open'] = function (block) {
  var dropdown_set_menu = block.getFieldValue('set_menu');
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + ' = open( "' + value_text  + '", "' + dropdown_set_menu + '" )\n';
  return code;
};

Blockly.Python['fd_read'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = variable_list + '.read()\n';
  return code;
};

Blockly.Python['fd_readline'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = variable_list + '.readline()\n';
  return code;
};

Blockly.Python['fd_close'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = variable_list + '.close()\n';
  return code;
};

Blockly.Python['fd_write'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + '.write( ' + value_text  +  ' )\n';
  return code;
};