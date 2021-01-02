// ////////////////////////////////////////////////////////////////////
// // 2020-12-26
// ////////////////////////////////////////////////////////////////////



Blockly.JavaScript['input'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

 //""없는 문자
 Blockly.JavaScript['char_a_none'] = function(block) {
  var text_char_a_none_val = block.getFieldValue('char_A_none_val');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// 문자다루기 2021.01.02 남지원
Blockly.JavaScript['text_maker'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var text_input = block.getFieldValue('INPUT');
  var dropdown_func = block.getFieldValue('FUNC');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};