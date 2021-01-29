// ////////////////////////////////////////////////////////////////////
// // 2020-12-26
// ////////////////////////////////////////////////////////////////////

//df_ap
Blockly.JavaScript['df_ap'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


/////////////////////////////////////////////////////




//df_agg
Blockly.JavaScript['df_agg'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

//df_reindex
Blockly.JavaScript['df_reindex'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

//df_unique
Blockly.JavaScript['df_unique'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

//df_is_in
Blockly.JavaScript['df_is_in'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

//df_name
Blockly.JavaScript['df_name'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
}; 

//df_tolist
Blockly.JavaScript['df_tolist'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  