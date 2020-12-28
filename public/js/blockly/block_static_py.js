///////////////////////////////////////////////////////
// 2020-12-28 static 카테고리
///////////////////////////////////////////////////////

Blockly.Python['static_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "from statistics import *\n";
  return code;
};

//2020-09-19 양승국 수정
Blockly.Python['statistics1'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_name + '(' + value_name + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};