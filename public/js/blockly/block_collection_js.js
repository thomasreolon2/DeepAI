// ////////////////////////////////////////////////////////////////////
// // 2020-12-26
// ////////////////////////////////////////////////////////////////////

Blockly.JavaScript['create_list'] = function (block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};

//2020-12-27-전우진-global

Blockly.JavaScript['global'] = function (block) {
  var text_print = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};

//2020-12-29 양승국
Blockly.JavaScript['create_tuple'] = function (block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};

//2020-12-29 양승국
Blockly.JavaScript['create_dict'] = function (block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};

//2020-12-29 양승국
Blockly.JavaScript['create_ziphap'] = function (block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};

// 딕셔너리 옵션
Blockly.JavaScript['dic_menu1'] = function (block) {
  var dropdown_dic = block.getFieldValue('dic');
  var value_dic1 = Blockly.JavaScript.valueToCode(block, 'dic1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dic2 = Blockly.JavaScript.valueToCode(block, 'dic2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dic3 = Blockly.JavaScript.valueToCode(block, 'dic3', Blockly.JavaScript.ORDER_ATOMIC);
  code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 집합 종류
Blockly.JavaScript['set_menu1'] = function (block) {
  var dropdown_set_menu = block.getFieldValue('set_menu');
  var value_set1 = Blockly.JavaScript.valueToCode(block, 'SET1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_set2 = Blockly.JavaScript.valueToCode(block, 'SET2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 라운드형 반복 조건 블록
Blockly.JavaScript['forif'] = function (block) {
  var value_SET1 = Blockly.JavaScript.valueToCode(block, 'SET1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_SET2 = Blockly.JavaScript.valueToCode(block, 'SET2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_SET3 = Blockly.JavaScript.valueToCode(block, 'SET3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_SET4 = Blockly.JavaScript.valueToCode(block, 'SET4', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "\n";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 라운드형 반복 조건 블록
Blockly.JavaScript['forif2'] = function (block) {
  var value_SET1 = Blockly.JavaScript.valueToCode(block, 'SET1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_SET2 = Blockly.JavaScript.valueToCode(block, 'SET2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_SET3 = Blockly.JavaScript.valueToCode(block, 'SET3', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "\n";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
