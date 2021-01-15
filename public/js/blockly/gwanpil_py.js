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

   //라이브러리 임포트    
   Blockly.Python['visualization_library_2'] = function(block) {
    //var value_name = Blockly.Python.valueToCode(block, 'lib_var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var libImportPlt = "import matplotlib.pyplot as plt\n";
    var libImportLogNorm = "from matplotlib.colors import LogNorm\n";
    var code = "import matplotlib.pyplot as plt\n" + libImportLogNorm;
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
  // TODO: Assemble Python into code variable.
    var code =  value_name1 + ".text("+ value_name2 +")\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];;
  };

  Blockly.Python['pie_pcolor'] = function(block) {
    // TODO: Assemble Python into code variable.
    var value_name1 = Blockly.Python.valueToCode(block, 'name1', Blockly.Python.ORDER_ATOMIC);
    var value_name2 = Blockly.Python.valueToCode(block, 'name2', Blockly.Python.ORDER_ATOMIC);
    
  // TODO: Assemble Python into code variable.
    var code =  value_name1 + ".pcolor("+ value_name2 +")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

Blockly.Python['set_xticks'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'REAL_VALUE', Blockly.Python.ORDER_ATOMIC);
    var value_number = Blockly.Python.valueToCode(block, 'NUMBER', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_number + ".set_xticks(" + value_value+')\n';
    return code;
  };

  Blockly.Python['set_yticks'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'REAL_VALUE', Blockly.Python.ORDER_ATOMIC);
    var value_number = Blockly.Python.valueToCode(block, 'NUMBER', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_number + ".set_yticks(" + value_value+')\n';
    return code;
  };

  Blockly.Python['plt_setp'] = function(block) {
    var value_value_0 = Blockly.Python.valueToCode(block, 'REAL_VALUE_0', Blockly.Python.ORDER_ATOMIC);
    var value_value = Blockly.Python.valueToCode(block, 'REAL_VALUE', Blockly.Python.ORDER_ATOMIC);
    var value_value_2 = Blockly.Python.valueToCode(block, 'REAL_VALUE_2', Blockly.Python.ORDER_ATOMIC);

    // TODO: Assemble Python into code variable.
    var code = value_value_0 + ".setp(" + value_value + ", "+value_value_2+")\n";
    return code;
  };

    /////////////////  Pcolor Demo

    Blockly.Python['numpy_random_generator_1'] = function(block) {
        var dropdown_numpy_random_generator_opt = block.getFieldValue('numpy_Random_generator_opt');
        var value_numpy_random_generator_val = Blockly.Python.valueToCode(block, 'numpy_Random_generator_val', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code;
        switch (dropdown_numpy_random_generator_opt){
          case "numpy_Random_generator_seed": 
          code = `np.random.seed(${value_numpy_random_generator_val})`;  
          break; 
      
          case "numpy_Random_generator_get_state": 
          code = `np.random.get_state(${value_numpy_random_generator_val})`;  
          break;
      
          case "numpy_Random_generator_set_state":
          code = `np.random.set_state(${value_numpy_random_generator_val})`;  
          break;
      
          default:
          break;
        }
        // TODO: Change ORDER_NONE to the correct strength.
        return code + "\n";
      };
    
      Blockly.Python['tick_params'] = function(block) {
        var value_value = Blockly.Python.valueToCode(block, 'REAL_VALUE', Blockly.Python.ORDER_ATOMIC);
        var value_number = Blockly.Python.valueToCode(block, 'NUMBER', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = value_number + ".tick_params(" + value_value+')\n';
        return code;
      };

      Blockly.Python['twinx'] = function(block) {
        // TODO: Assemble Python into code variable.
        var value_name1 = Blockly.Python.valueToCode(block, 'name1', Blockly.Python.ORDER_ATOMIC);
        
      // TODO: Assemble Python into code variable.
        var code =  value_name1 + ".twinx( )";
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_ATOMIC];
      };


      //plt_subplots
Blockly.Python['plt_subplot'] = function(block) {
    // TODO: Assemble Python into code variable.
    var value_a1 = Blockly.Python.valueToCode(block, 'name', Blockly.Python.ORDER_ATOMIC);
    var value_a2 = Blockly.Python.valueToCode(block, 'name2', Blockly.Python.ORDER_ATOMIC);
    var code = value_a1 + ".subplot("+value_a2+")\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];;
  };
    
  //plt_subplots
  Blockly.Python['plt_subplots'] = function(block) {
    // TODO: Assemble Python into code variable.
    var value_a1 = Blockly.Python.valueToCode(block, 'name', Blockly.Python.ORDER_ATOMIC);
    var value_a2 = Blockly.Python.valueToCode(block, 'name2', Blockly.Python.ORDER_ATOMIC);
    var code = value_a1 + ".subplots("+value_a2+")\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];;
  };