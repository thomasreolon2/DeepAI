Blockly.JavaScript['printc'] = function (block) {
    var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'printc(' + value_content + ')\n';
    return code;
  };
  Blockly.JavaScript['nj_array'] = function (block) {
    var text_array = block.getFieldValue('array');
    // TODO: Assemble JavaScript into code variable.
    var code = 'nj.array([' + text_array + '])';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['forp'] = function(block) {
    var value_i = Blockly.JavaScript.valueToCode(block, 'i', Blockly.JavaScript.ORDER_ATOMIC);
    var value_range = Blockly.JavaScript.valueToCode(block, 'range', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_for = Blockly.JavaScript.statementToCode(block, 'for');
    // TODO: Assemble Python into code variable.
    var code = statements_for;
    return code;
  };
  Blockly.JavaScript['lrgraph'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
    var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'LRgraph(' + value_x + ',' + value_y + ',' + value_w + ',' + value_b + ');';
    return code;
  };
  Blockly.JavaScript['logicgraph'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
    var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'Logisticgraph(' + value_x + ',' + value_y + ',' + value_w + ',' + value_b + ');';
    return code;
  };
  Blockly.JavaScript['csv_library'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'pan_lib_var', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "\n";
    return code;
  };
  Blockly.JavaScript['labelencoder'] = function(block) {
    var value_df = Blockly.JavaScript.valueToCode(block, 'df', Blockly.JavaScript.ORDER_ATOMIC);
    var text_column = block.getFieldValue('column');
    // TODO: Assemble Python into code variable.
    var code = "";
    return code;
  };
  Blockly.JavaScript['import_lib'] = function (block) {
    var dropdown_lib = block.getFieldValue('lib');
    var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable. 
    var code = '\n';
    
    return code;
};
Blockly.JavaScript['model_predict'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var text_data = block.getFieldValue('data');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['scikit_learn'] = function (block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_cate = block.getFieldValue('cate');
  var value_x = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('x'), Blockly.Variables.NAME_TYPE);
  var value_y = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('y'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code="\n";
  return code;
};
