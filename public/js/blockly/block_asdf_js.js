///////////////////////////////////////////////////////
// 2021-01-13
///////////////////////////////////////////////////////

//pie_subplots
Blockly.JavaScript['pie_subplots'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//pie_pie
Blockly.JavaScript['pie_pie1'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name3 = Blockly.JavaScript.valueToCode(block, 'd3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name4 = Blockly.JavaScript.valueToCode(block, 'd4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name5 = Blockly.JavaScript.valueToCode(block, 'd5', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//pie_axis
Blockly.JavaScript['pie_axis'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

