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

//pie_figure
Blockly.Python['pie_figure'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = variable_list + "= plt.figure()\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//pie_add_subplot
Blockly.Python['pie_add_subplot'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'd3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + " = " + value_name1 +".add_subplot( " + value_name2 + ", projection = " + value_name3 + " )\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//pie_ax_scatter
Blockly.Python['pie_ax_scatter'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'd3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'd4', Blockly.Python.ORDER_ATOMIC);
  var value_name5 = Blockly.Python.valueToCode(block, 'd5', Blockly.Python.ORDER_ATOMIC);
  var value_name6 = Blockly.Python.valueToCode(block, 'd6', Blockly.Python.ORDER_ATOMIC);
  var value_name7 = Blockly.Python.valueToCode(block, 'd7', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + " = " + value_name1 +".scatter( " + value_name2 + ", " + value_name3 + ", c = " + value_name4 + ", s = " + value_name5 + ", cmap = " + value_name6 + ", alpha = " + value_name7 + " )\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
