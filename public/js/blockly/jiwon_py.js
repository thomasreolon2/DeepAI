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

    // 데이터 사칙연산
    Blockly.Python['pandas_sort'] = function(block) {
        var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
        var dropdown_drop = block.getFieldValue('DROP');
        var value_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = `${variable_name}.${dropdown_drop}(${value_name})`;
        return code;
    };

    // 데이터 상관관계
    Blockly.Python['pandas_corr'] = function(block) {
        var value_input1 = Blockly.Python.valueToCode(block, 'INPUT1', Blockly.Python.ORDER_ATOMIC);
        var dropdown_drop = block.getFieldValue('DROP');
        var value_input2 = Blockly.Python.valueToCode(block, 'INPUT2', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = `${value_input1}.${dropdown_drop}(${value_input2})`;
        return code;
      };

        // 판다스 스택
    Blockly.Python['pandas_stack'] = function(block) {
        var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
        var dropdown_drop = block.getFieldValue('DROP');
        var value_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = `${variable_name}.${dropdown_drop}(${value_name})`;
        return code;
    };

      // 판다스 난, 널 판단
      Blockly.Python['pandas_nanull'] = function(block) {
        var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
        var dropdown_drop = block.getFieldValue('DROP');
        var value_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = `${variable_name}.${dropdown_drop}(${value_name})`;
        return code;
    };



    //////////////////////
    Blockly.Python['def1'] = function (block) {
      var text_1 = Blockly.Python.variableDB_.getName(block.getFieldValue('1'), Blockly.Variables.NAME_TYPE);
      var text_2 = Blockly.Python.valueToCode(block, '2', Blockly.Python.ORDER_ATOMIC);
      var branch = Blockly.Python.statementToCode(block, 'DO');
      branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
      // const statements_name = Blockly.Python.statementToCode(block, 'NAME');
      // TODO: Assemble Python into code variable.
      var code = 'def ' + text_1 + '(' + text_2 + '):\n' + branch;
      return code;
  };

  //라이브러리 임포트    
  Blockly.Python['cbook_import'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    
    var code = "from matplotlib import cbook\n";
    return code;
  };


// get_sample_data
Blockly.Python['get_sample_data'] = function (block) {
  var input_text = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');

  // TODO: Assemble Python into code variable.
  var code = `cbook.get_sample_data("${input_text}", np_load=${dropdown_drop})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// get_sample_data
Blockly.Python['set_inset_axes'] = function (block) {
  var var_text = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var input_text = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);

  // TODO: Assemble Python into code variable.
  var code = `${var_text}.inset_axes(${input_text})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// set_xlim_ylim
Blockly.Python['set_xlim_ylim'] = function (block) {
  var var_text = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  var input_text = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);

  // TODO: Assemble Python into code variable.
  var code = `${var_text}.${dropdown_drop}(${input_text})\n`;
  return code;
};

//// indicate_inset_zoom
Blockly.Python['indicate_inset_zoom'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR1', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'VAR2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.indicate_inset_zoom(${var_text2})\n`;
  return code;
};

//// subplot
Blockly.Python['subplots'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR1', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'VAR2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.subplots(${var_text2})\n`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};