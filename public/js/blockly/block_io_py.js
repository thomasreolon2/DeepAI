///////////////////////////////////////////////////////
// 2020-12-28 입출력 카테고리
///////////////////////////////////////////////////////

Blockly.Python['input1'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = 'input()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['printc'] = function (block) {
  var value_content = Blockly.Python.valueToCode(block, 'content', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code ='print(' + value_content + ')\n';
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
