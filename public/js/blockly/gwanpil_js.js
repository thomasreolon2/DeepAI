//넘파이 라이브러리 
Blockly.JavaScript['gp'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

  //임시
  Blockly.JavaScript['create_list_1'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['create_list_2'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['create_np_array_1'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['visualization_library_1'] = function (block) {
    //var value_name = Blockly.Python.valueToCode(block, 'lib_var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var libImportIo = "import io\n";
    var libImportBase64 = "import base64\n";
    var code = "\n";
    return code;
  };

  //pie_subplots
  Blockly.JavaScript['pie_subplots_1'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];;
  };

  Blockly.JavaScript['pie_subplots_2'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];;
  };

  Blockly.JavaScript['pie_subplots_3'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];;
  };

   Blockly.JavaScript['heatmaps_1'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_value = Blockly.JavaScript.valueToCode(block, 'REAL_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_number = Blockly.JavaScript.valueToCode(block, 'NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '\n';
    return code;
  };


  Blockly.JavaScript['heatmaps_2'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_value = Blockly.JavaScript.valueToCode(block, 'REAL_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_number = Blockly.JavaScript.valueToCode(block, 'NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['heatmaps_3'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_value = Blockly.JavaScript.valueToCode(block, 'REAL_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_number = Blockly.JavaScript.valueToCode(block, 'NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['heatmaps_4'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_value = Blockly.JavaScript.valueToCode(block, 'REAL_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_number = Blockly.JavaScript.valueToCode(block, 'NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['heatmaps_5'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_value = Blockly.JavaScript.valueToCode(block, 'REAL_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_number = Blockly.JavaScript.valueToCode(block, 'NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['heatmaps_6'] = function(block) {

    // TODO: Assemble Python into code variable.
    var code = '\n';
    return code;
  };