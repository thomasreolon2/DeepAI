// 데이터 시작, 끝
Blockly.Python['block_tail_head'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var dropdown_drop = block.getFieldValue('DROP');
    var value_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `${variable_name}.${dropdown_drop}(${value_name})`;
    return code;
  };

  // 데이터 통계
  Blockly.Python['block_sum_min'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var dropdown_drop = block.getFieldValue('DROP');
    var value_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `${variable_name}.${dropdown_drop}(${value_name})`;
    return code;
  };

  // 데이터 누적 통계
  Blockly.Python['block_cumsum'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var dropdown_drop = block.getFieldValue('DROP');
    var value_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `${variable_name}.${dropdown_drop}(${value_name})`;
    return code;
  };

    // 데이터 사칙연산
    Blockly.Python['block_calculations'] = function(block) {
        var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
        var dropdown_drop = block.getFieldValue('DROP');
        var value_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = `${variable_name}.${dropdown_drop}(${value_name})`;
        return code;
      };