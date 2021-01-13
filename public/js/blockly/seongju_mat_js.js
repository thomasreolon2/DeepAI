Blockly.JavaScript['np_pi'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.JavaScript['ax_lst_plot'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.JavaScript['axs_set_xlim'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.JavaScript['axs_set_xlabel'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.JavaScript['axs_set_ylabel'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.JavaScript['axs_grid'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.JavaScript['axs_cohere'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['fig_tight_layout'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.JavaScript['np_sqrt'] = function(block) {
  var value_val1 = Blockly.JavaScript.valueToCode(block, 'val1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.JavaScript['subplots'] = function(block) {
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
  var value_col = Blockly.JavaScript.valueToCode(block, 'col', Blockly.JavaScript.ORDER_ATOMIC);
  var value_val1 = Blockly.JavaScript.valueToCode(block, 'val1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_val2 = Blockly.JavaScript.valueToCode(block, 'val2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.JavaScript['scatter'] = function(block) {
  var value_row_col = Blockly.JavaScript.valueToCode(block, 'row_col', Blockly.JavaScript.ORDER_ATOMIC);
  var value_val_x = Blockly.JavaScript.valueToCode(block, 'val_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_val_y = Blockly.JavaScript.valueToCode(block, 'val_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_val1 = Blockly.JavaScript.valueToCode(block, 'val1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_val2 = Blockly.JavaScript.valueToCode(block, 'val2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_val3 = Blockly.JavaScript.valueToCode(block, 'val3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


Blockly.JavaScript['set_title'] = function(block) {
  var value_row_col = Blockly.JavaScript.valueToCode(block, 'row_col', Blockly.JavaScript.ORDER_ATOMIC);
  var value_val_x = Blockly.JavaScript.valueToCode(block, 'val_x', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

// 이 밑으로는 있는거(==> 임의로 만듬.)

Blockly.JavaScript['Oper_garbage'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['Oper_garbage2'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['Oper_garbage3'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_random_sample
Blockly.JavaScript['numpy_random_sample'] = function(block) {
  var dropdown_numpy_random_sample_opt = block.getFieldValue('numpy_Random_sample_opt');
  var value_numpy_random_sample_val = Blockly.JavaScript.valueToCode(block, 'numpy_Random_sample_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
 
  var code;
  switch (dropdown_numpy_random_sample_opt){
    case "numpy_Random_sample_rand": 
    code = `np.random.rand(${value_numpy_random_sample_val})`;  
    break; 

    case "numpy_Random_sample_randn": 
    code = `np.random.randn(${value_numpy_random_sample_val})`;  
    break;

    case "numpy_Random_sample_randint":
    code = `np.random.randint(${value_numpy_random_sample_val})`;  
    break;

    case "numpy_Random_sample_random":
    code = `np.random.random(${value_numpy_random_sample_val})`;  
    break;

    case "numpy_Random_sample_choice":
    code = `np.random.choice(${value_numpy_random_sample_val})`;  
    break;

    case "numpy_Random_sample_bytes":
    code = `np.random.bytes(${value_numpy_random_sample_val})`;  
    break;


    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};