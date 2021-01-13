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

  //pie_subplots
  Blockly.Python['pie_subplots_1'] = function(block) {
    // TODO: Assemble Python into code variable.
    var value_name1 = Blockly.Python.valueToCode(block, 'name1', Blockly.Python.ORDER_ATOMIC);
    var value_name2 = Blockly.Python.valueToCode(block, 'name2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
    var code =  value_name1 + ".imshow("+ value_name2 +")\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];;
  };
  
  Blockly.Python['pie_subplots_2'] = function(block) {
    // TODO: Assemble Python into code variable.
    var value_name1 = Blockly.Python.valueToCode(block, 'name1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
    var code =  value_name1 + ".get_xticklabels()\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];;
  };

  Blockly.Python['pie_subplots_3'] = function(block) {
    // TODO: Assemble Python into code variable.
    var value_name1 = Blockly.Python.valueToCode(block, 'name1', Blockly.Python.ORDER_ATOMIC);
    var value_name2 = Blockly.Python.valueToCode(block, 'name2', Blockly.Python.ORDER_ATOMIC);
    var value_name3 = Blockly.Python.valueToCode(block, 'name3', Blockly.Python.ORDER_ATOMIC);
    var value_name4 = Blockly.Python.valueToCode(block, 'name4', Blockly.Python.ORDER_ATOMIC);
    var value_name5 = Blockly.Python.valueToCode(block, 'name5', Blockly.Python.ORDER_ATOMIC);
    var value_name6 = Blockly.Python.valueToCode(block, 'name6', Blockly.Python.ORDER_ATOMIC);
    var value_name7 = Blockly.Python.valueToCode(block, 'name7', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
    var code =  value_name1 + ".text("+ value_name3 +", "+ value_name2 +", "+value_name4+"["+value_name2+","+value_name3+"], ha="+value_name5+", va="+value_name6+", color="+value_name7+")\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];;
  };

Blockly.Python['heatmaps_1'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'REAL_VALUE', Blockly.Python.ORDER_ATOMIC);
    var value_number = Blockly.Python.valueToCode(block, 'NUMBER', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_number + ".set_xticks(" + value_value+')\n';
    return code;
  };

  Blockly.Python['heatmaps_2'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'REAL_VALUE', Blockly.Python.ORDER_ATOMIC);
    var value_number = Blockly.Python.valueToCode(block, 'NUMBER', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_number + ".set_yticks(" + value_value+')\n';
    return code;
  };

  Blockly.Python['heatmaps_3'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'REAL_VALUE', Blockly.Python.ORDER_ATOMIC);
    var value_number = Blockly.Python.valueToCode(block, 'NUMBER', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_number + ".set_xticklabels(" + value_value+')\n';
    return code;
  };

  Blockly.Python['heatmaps_4'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'REAL_VALUE', Blockly.Python.ORDER_ATOMIC);
    var value_number = Blockly.Python.valueToCode(block, 'NUMBER', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_number + ".set_yticklabels(" + value_value+')\n';
    return code;
  };

  Blockly.Python['heatmaps_5'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'REAL_VALUE', Blockly.Python.ORDER_ATOMIC);
    var value_value_2 = Blockly.Python.valueToCode(block, 'REAL_VALUE_2', Blockly.Python.ORDER_ATOMIC);
    var value_value_3 = Blockly.Python.valueToCode(block, 'REAL_VALUE_3', Blockly.Python.ORDER_ATOMIC);
    var value_value_4 = Blockly.Python.valueToCode(block, 'REAL_VALUE_4', Blockly.Python.ORDER_ATOMIC);

    // TODO: Assemble Python into code variable.
    var code = "plt.setp(" + value_value + ", rotation="+value_value_2+", ha="+ value_value_3 +", rotation_mode="+ value_value_4 +")\n";
    return code;
  };

  Blockly.Python['heatmaps_6'] = function(block) {
    var name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var value_value = Blockly.Python.valueToCode(block, 'REAL_VALUE', Blockly.Python.ORDER_ATOMIC);

    // TODO: Assemble Python into code variable.
    var code = name + ".set_title( "+value_value+")\n";
    return code;
  };

  Blockly.Python['heatmaps_7'] = function(block) {
    var name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);

    // TODO: Assemble Python into code variable.
    var code = name + ".tight_layout( )\n";
    return code;
  };