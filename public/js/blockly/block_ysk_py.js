////////////////////////////////////////////////////////////////////
// 2020-12-26 
////////////////////////////////////////////////////////////////////

//values
Blockly.Python['df_values'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = variable_list + ".values";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

