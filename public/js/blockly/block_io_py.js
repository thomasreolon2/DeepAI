///////////////////////////////////////////////////////
// 2020-12-28 입출력 카테고리
///////////////////////////////////////////////////////

Blockly.Python['input1'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = 'input()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
