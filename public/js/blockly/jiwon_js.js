Blockly.Javascript['block_tail_head'] = function(block) {
    var variable_name = Blockly.Javascript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var dropdown_drop = block.getFieldValue('DROP');
    var value_name = Blockly.Javascript.valueToCode(block, 'INPUT', Blockly.Javascript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `\n`;
    return code;
  };

  Blockly.Javascript['block_sum_min'] = function(block) {
    var variable_name = Blockly.Javascript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var dropdown_drop = block.getFieldValue('DROP');
    var value_name = Blockly.Javascript.valueToCode(block, 'INPUT', Blockly.Javascript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `\n`;
    return code;
  };

  Blockly.Javascript['block_cumsum'] = function(block) {
    var variable_name = Blockly.Javascript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var dropdown_drop = block.getFieldValue('DROP');
    var value_name = Blockly.Javascript.valueToCode(block, 'INPUT', Blockly.Javascript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `\n`;
    return code;
  };

  // 데이터 사칙연산
  Blockly.Javascript['block_calculations'] = function(block) {
    var variable_name = Blockly.Javascript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var dropdown_drop = block.getFieldValue('DROP');
    var value_name = Blockly.Javascript.valueToCode(block, 'INPUT', Blockly.Javascript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `\n`;

    return code;
  };

  // 데이터 사칙연산
  Blockly.Javascript['pandas_sort'] = function(block) {
    var variable_name = Blockly.Javascript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var dropdown_drop = block.getFieldValue('DROP');
    var value_name = Blockly.Javascript.valueToCode(block, 'INPUT', Blockly.Javascript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `\n`;
    return code;
};

// 데이터 사칙연산
Blockly.Javascript['pandas_nanull'] = function(block) {
    var variable_name = Blockly.Javascript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var dropdown_drop = block.getFieldValue('DROP');
    var value_name = Blockly.Javascript.valueToCode(block, 'INPUT', Blockly.Javascript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `\n`;
    return code;
};