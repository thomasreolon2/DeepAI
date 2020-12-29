///////////////////////////////////////////////////////
// 2020-12-28 입출력 카테고리
///////////////////////////////////////////////////////

Blockly.Python['input1'] = function (block) {
  var text_name = block.getFieldValue('inputdata');
  // TODO: Assemble Python into code variable.
  var code = 'input("'+text_name+'")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};



Blockly.Python['printtv'] = function (block) {
  var value_content1 = Blockly.Python.valueToCode(block, 'content1', Blockly.Python.ORDER_ATOMIC);
  var value_content2 = Blockly.Python.valueToCode(block, 'content2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code ='print(' + value_content1 + " + "+ "str(" + value_content2 + ') )\n';
  return code;
};

Blockly.Python['printc'] = function (block) {
  var value_content = Blockly.Python.valueToCode(block, 'content', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code ='print( str(' + value_content + ' ))\n';
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
