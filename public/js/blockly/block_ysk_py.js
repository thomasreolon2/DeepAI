////////////////////////////////////////////////////////////////////
// 2020-12-26 
////////////////////////////////////////////////////////////////////

//df_ap
Blockly.Python['df_ap'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble Python into code variable.
  var code = variable_list + dropdown_dic + value_name + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};



/////////////////////////////////////////////////



//df_agg
Blockly.Python['df_agg'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + ".agg( " + value_name + " )";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

//df_reindex
Blockly.Python['df_reindex'] = function(block) {
  var variable_list = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  // TODO: Assemble Python into code variable.
  var code = `${variable_list}.${dropdown_drop}(${value_name})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

//df_reindex
Blockly.Python['df_unique'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + ".unique()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

//df_reindex
Blockly.Python['df_is_in'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + ".isin( " + value_name + " )";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

//df_reindex
Blockly.Python['df_name'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + ".name";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

//df_reindex
Blockly.Python['df_tolist'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + ".tolist()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  