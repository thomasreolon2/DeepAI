////////////////////////////////////////////////////////////////////
// 2020-12-26 
////////////////////////////////////////////////////////////////////

Blockly.Python['test'] = function(block) {
  var text_modified_col = block.getFieldValue('test');
  // TODO: Assemble Python into code variable.
  var code = text_modified_col;
  return [code, Blockly.Python.ORDER_ATOMIC];
};