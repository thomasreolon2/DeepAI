///////////////////////////////////////////////////////
// 2020-12-28 static 카테고리
///////////////////////////////////////////////////////

Blockly.JavaScript['static_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['statistics1'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'va', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};