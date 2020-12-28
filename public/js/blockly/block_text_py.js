////////////////////////////////////////////////////////////////////
// 2020-12-26 
////////////////////////////////////////////////////////////////////


//""없는 문자
Blockly.Python['char_a_none'] = function(block) {
  var text_char_a_none_val = block.getFieldValue('char_A_none_val');
  // TODO: Assemble Python into code variable.
  var code = `${text_char_a_none_val}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};