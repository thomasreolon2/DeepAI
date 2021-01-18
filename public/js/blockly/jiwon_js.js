
  Blockly.JavaScript['block_tail_head'] = function(block) {
    var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var dropdown_drop = block.getFieldValue('DROP');
    var value_input2 = Blockly.JavaScript.valueToCode(block, 'INPUT2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };


  Blockly.JavaScript['block_cumsum'] = function(block) {
    var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var dropdown_drop = block.getFieldValue('DROP');
    var value_name = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

  // 데이터 사칙연산
  Blockly.JavaScript['block_calculations'] = function(block) {
    var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var dropdown_drop = block.getFieldValue('DROP');
    var value_name = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `\n`;

    return code;
  };

  // 데이터 사칙연산
  Blockly.JavaScript['pandas_sort'] = function(block) {
    var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var dropdown_drop = block.getFieldValue('DROP');
    var value_name = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `\n`;
    return code;
};

// 데이터 사칙연산
Blockly.JavaScript['pandas_nanull'] = function(block) {
    var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var dropdown_drop = block.getFieldValue('DROP');
    var value_name = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `\n`;
    return code;
};


//
 //////////////////////
 Blockly.JavaScript['def1'] = function (block) {
  var text_1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('1'), Blockly.Variables.NAME_TYPE);
  var text_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id) || Blockly.JavaScript.PASS;
  // const statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'def ' + text_1 + '(' + text_2 + '):\n' + branch;
  return code;
};

 //라이브러리 임포트    
 Blockly.JavaScript['cbook_import'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\n";
  return code;
};



//////////////////////
Blockly.JavaScript['get_sample_data'] = function (block) {
  var input_text = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');

  // TODO: Assemble JavaScript into code variable.
  var code = `cbook.get_sample_data("${input_text}", np_load=${dropdown_drop})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// get_sample_data
Blockly.JavaScript['set_inset_axes'] = function (block) {
  var var_text = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var input_text = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);

  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 드롭다운 버전
// set_xlim_ylim
/*
Blockly.JavaScript['set_xlim_ylim'] = function (block) {
  var var_text = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  var input_text = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);

  // TODO: Assemble JavaScript into code variable.
  var code = `${var_text}.${dropdown_drop}(${input_text})\n`;
  return code;
};
*/

// set_xlim, set_ylim
Blockly.JavaScript['set_xlim'] = function (block) {
  var var_text = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var input_text = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${var_text}.set_xlim(${input_text})\n`;
  return code;
};
Blockly.JavaScript['set_ylim'] = function (block) {
  var var_text = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var input_text = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${var_text}.set_ylim(${input_text})\n`;
  return code;
};

//// indicate_inset_zoom
Blockly.JavaScript['indicate_inset_zoom'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR1', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'VAR2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${var_text1}.indicate_inset_zoom(${var_text2})\n`;
  return code;
};

//// subplot
Blockly.JavaScript['subplots'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR1', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'VAR2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${var_text1}.subplots(${var_text2})\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


//// set_facecolor
Blockly.JavaScript['set_facecolor'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR1', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'VAR2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

//// shape
Blockly.JavaScript['shape'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//// set_xticklabels
Blockly.JavaScript['set_xticklabels'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


//// set_yticklabels
Blockly.JavaScript['set_yticklabels'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//// boxplot
Blockly.JavaScript['boxplot'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//// set_title
Blockly.JavaScript['set_title'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

//// boxplot
Blockly.JavaScript['yaxis_grid'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

//// set_xlabel
Blockly.JavaScript['set_xlabel'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};


//// set_ylabel
Blockly.JavaScript['set_ylabel'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

//// hist
Blockly.JavaScript['hist'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//// cohere
Blockly.JavaScript['cohere'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//// tight_layout
Blockly.JavaScript['tight_layout'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

////////////////////////////////
// get_sample_data
Blockly.JavaScript['skimage_util'] = function (block) {
  var input_text = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');

  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

////////////////////////////////
// get_sample_data
Blockly.JavaScript['skimage_measure'] = function (block) {
  var input_text = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');

  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};