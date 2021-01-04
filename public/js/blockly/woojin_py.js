Blockly.Python['sr_unique'] = function (block) {
    var variable_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_data + ".unique()" + "\n";
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

Blockly.Python['sr_name'] = function (block) {
    var variable_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_data + ".name" + "\n";
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python['sr_is_in'] = function (block) {
    var variable_1 = Blockly.Python.variableDB_.getName(block.getFieldValue('1'), Blockly.Variables.NAME_TYPE);
    var variable_data2 = Blockly.Python.valueToCode(block, 'data2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_1 + ".is_in(" + variable_data2 +")" + "\n";
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python['sr_tolist'] = function (block) {
    var variable_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_data + ".tolist()" + "\n";
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python['sr_index()'] = function(block) {
    var variable_1 = Blockly.Python.variableDB_.getName(block.getFieldValue('1'), Blockly.Variables.NAME_TYPE);
    var variable_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_1+'('+variable_data+')'+'\n';
    return code;
};

Blockly.Python['sr_index[]'] = function(block) {
    var variable_1 = Blockly.Python.variableDB_.getName(block.getFieldValue('1'), Blockly.Variables.NAME_TYPE);
    var variable_data = Blockly.Python.valueToCode(block, '색인', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_1+'['+variable_data+']'+'\n';
    return code;
};

Blockly.Python['sr_condition[]'] = function(block) {
    var variable_1 = Blockly.Python.variableDB_.getName(block.getFieldValue('1'), Blockly.Variables.NAME_TYPE);
    var variable_data = Blockly.Python.valueToCode(block, '논리연산', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_1+'['+variable_data+']'+'\n';
    return code;
};