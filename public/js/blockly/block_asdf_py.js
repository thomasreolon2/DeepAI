///////////////////////////////////////////////////////
// 2021-01-13
///////////////////////////////////////////////////////

//pie_subplots
Blockly.Python['pie_subplots'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = variable_list + "= plt.subplots()\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//pie_pie
Blockly.Python['pie_pie1'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'd3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'd4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'd5', Blockly.Python.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble Python into code variable.
  var code = variable_list + ".pie( " + value_name1 + ", explode = " + value_name2 + ", labels = " + value_name3 + ", autopct = " + value_name4 + ", shadow = " + dropdown_dic + ", startangle = " + value_name5  + " )\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//pie_axis
Blockly.Python['pie_axis'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + ".axis( " + value_name1 + " )\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

