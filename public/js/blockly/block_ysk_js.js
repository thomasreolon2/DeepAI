// ////////////////////////////////////////////////////////////////////
// // 2020-12-26
// ////////////////////////////////////////////////////////////////////

//values
Blockly.JavaScript['df_values'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];;
};

//columns
Blockly.JavaScript['df_columns'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];;
};
 
//T
Blockly.JavaScript['df_T'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];;
};

//df_pivot_table
Blockly.JavaScript['df_pivot_table'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];;
};

//df_ap
Blockly.JavaScript['df_ap'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];;
};

//df_bb
Blockly.JavaScript['df_bb'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];;
};

//df_set_index
Blockly.JavaScript['df_set_index'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];;
};

/////////////////////////////////////////////////////

//df_series1
Blockly.JavaScript['df_series1'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code ='\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];;
};  

//df_series2
Blockly.JavaScript['df_series2'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];;
};  

//df_series3
Blockly.JavaScript['df_series3'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];;
};  

//df_agg
Blockly.JavaScript['df_agg'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];;
};  