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

// 연산
Blockly.Python['Oper_x'] = function(block) {
  var value_a = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_a} ${dropdown_name} ${value_b}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
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

// 드롭다운 버전
// set_xlim_ylim
/*
Blockly.Python['set_xlim_ylim'] = function (block) {
  var var_text = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  var input_text = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);

  // TODO: Assemble Python into code variable.
  var code = `${var_text}.${dropdown_drop}(${input_text})\n`;
  return code;
};
*/

// set_xlim, set_ylim
Blockly.Python['set_xlim'] = function (block) {
  var var_text = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var input_text = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text}.set_xlim(${input_text})\n`;
  return code;
};
Blockly.Python['set_ylim'] = function (block) {
  var var_text = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var input_text = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text}.set_ylim(${input_text})\n`;
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

//// set_facecolor
Blockly.Python['set_facecolor'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR1', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'VAR2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.set_facecolor(${var_text2})\n`;
  return code;
};

//// set_facecolor
Blockly.Python['shape'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.shape`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//// set_xticklabels
Blockly.Python['set_xticklabels'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.set_xticklabels(${var_text2})\n`;
  return code;
};


//// set_yticklabels
Blockly.Python['set_yticklabels'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.set_yticklabels(${var_text2})\n`;
  return code;
};

//// boxplot
Blockly.Python['boxplot'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.boxplot(${var_text2})\n`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};


//// set_title
Blockly.Python['set_title'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.set_title(${var_text2})\n`;
  return code;
};

//// boxplot
Blockly.Python['yaxis_grid'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.yaxis.grid(${var_text2})\n`;
  return code;
};

//// set_xlabel
Blockly.Python['set_xlabel'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.set_xlabel(${var_text2})\n`;
  return code;
};


//// set_ylabel
Blockly.Python['set_ylabel'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.set_ylabel(${var_text2})\n`;
  return code;
};

//// hist
Blockly.Python['hist'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.hist(${var_text2})\n`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//// cohere
Blockly.Python['cohere'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.cohere(${var_text2})\n`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//// tight_layout
Blockly.Python['tight_layout'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.tight_layout(${var_text2})\n`;
  return code;
};





////////////////////////////////
// get_sample_data
Blockly.Python['skimage_util'] = function (block) {
  var input_text = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');

  // TODO: Assemble Python into code variable.
  var code = `util.${dropdown_drop}(${input_text})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

////////////////////////////////
// get_sample_data
Blockly.Python['skimage_measure'] = function (block) {
  var input_text = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');

  // TODO: Assemble Python into code variable.
  var code = `measure.${dropdown_drop}(${input_text})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//2021.01.22 try_except 남지원
Blockly.Python['try_except'] = function(block) {
  var statements_try = Blockly.Python.statementToCode(block, 'TRY');
  var value_except1 = Blockly.Python.valueToCode(block, 'EXCEPT1', Blockly.Python.ORDER_ATOMIC);
  var statements_except2 = Blockly.Python.statementToCode(block, 'EXCEPT2');
  // TODO: Assemble Python into code variable.
  var code = `try:\n${statements_try}except ${value_except1} :\n${statements_except2}`;
  return code;
};