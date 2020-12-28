// ////////////////////////////////////////////////////////////////////
// // 2020-12-26
// ////////////////////////////////////////////////////////////////////

Blockly.JavaScript['indata'] = function(block) {
  var text_modified_col = block.getFieldValue('indata1');
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['create_list'] = function (block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};

//2020-12-27-전우진-global

Blockly.JavaScript['global'] = function (block) {
  var text_print = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};