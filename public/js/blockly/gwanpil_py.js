//넘파이 라이브러리 
Blockly.Python['gp'] = function(block) {
    // TODO: Assemble Python into code variable. 
    var code = 'import matplotlib.pyplot as plt\n';
    return code;
  };

//임시
Blockly.Python['create_list_1'] = function (block) {
    var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_list + ' = [' + value_text + ']\n';
    return code;
  };

  Blockly.Python['create_list_2'] = function (block) {
    var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_list + ' = [' + value_text + ']\n';
    return code;
  };

  Blockly.Python['create_np_array_1'] = function (block) {
    var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_list + ' = np.array([' + value_text + '])\n';
    return code;
  };

   //라이브러리 임포트    
   Blockly.Python['visualization_library_1'] = function(block) {
    //var value_name = Blockly.Python.valueToCode(block, 'lib_var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var libImportIo = "import io\n";
    var libImportBase64 = "import base64\n";
    var code = "import matplotlib.pyplot as plt\n";
    return code;
  };