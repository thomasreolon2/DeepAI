


//numpy_averages_variances
Blockly.JavaScript['numpy_averages_variances_basic'] = function(block) {
  var dropdown_numpy_averages_variances_opt = block.getFieldValue('numpy_Averages_variances_opt');
  var value_numpy_averages_variances_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numpy_averages_variances_val2 = Blockly.JavaScript.valueToCode(block, 'parameter2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_averages_variances_opt}(${value_numpy_averages_variances_val},${value_numpy_averages_variances_val2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



//numpy_random_sample
Blockly.JavaScript['numpy_random_sample_basic'] = function(block) {
  var dropdown_numpy_random_sample_opt = block.getFieldValue('numpy_Random_sample_opt');
  var value_numpy_random_sample_val = Blockly.JavaScript.valueToCode(block, 'parmeter1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numpy_random_sample_val2 = Blockly.JavaScript.valueToCode(block, 'parmeter2', Blockly.JavaScript.ORDER_ATOMIC);
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

Blockly.JavaScript['numpy_random_randint_basic'] = function(block) {
  var value_numpy_random_sample_val = Blockly.JavaScript.valueToCode(block, 'parmeter1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numpy_random_sample_val2 = Blockly.JavaScript.valueToCode(block, 'parmeter2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numpy_random_sample_val3 = Blockly.JavaScript.valueToCode(block, 'parmeter3', Blockly.JavaScript.ORDER_ATOMIC);
  var code;

  code = `np.random.randint(${value_numpy_random_sample_val})`;  

  return [code, Blockly.JavaScript.ORDER_NONE];
};



//numpy_random_generator
Blockly.JavaScript['numpy_random_generator_basic'] = function(block) {
  var value_numpy_random_generator_val = Blockly.JavaScript.valueToCode(block, 'numpy_Random_generator_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  code = `np.random.seed(${value_numpy_random_generator_val})`;  
   
  return [code, Blockly.JavaScript.ORDER_NONE];
};



Blockly.JavaScript['numpy_rounding_basic'] = function(block) {
  var dropdown_numpy_rounding_opt = block.getFieldValue('numpy_Rounding_opt');
  var value_numpy_rounding_val = Blockly.JavaScript.valueToCode(block, 'numpy_Rounding_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_rounding_opt}(${value_numpy_rounding_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_exponents_logarithms
Blockly.JavaScript['numpy_exponents_logarithms_basic'] = function(block) {
  var dropdown_numpy_exponents_logarithms_opt = block.getFieldValue('numpy_Exponents_logarithms_opt');
  var value_numpy_exponents_logarithms_val = Blockly.JavaScript.valueToCode(block, 'numpy_Exponents_logarithms_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_exponents_logarithms_opt}(${value_numpy_exponents_logarithms_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//행렬 연산
Blockly.JavaScript['numpy_array_operator_basic'] = function(block) {
  var dropdown_numpy_array_operator_option = block.getFieldValue('numpy_array_operator_Option');
  var value_numpy_array_operator_val = Blockly.JavaScript.valueToCode(block, 'numpy_array_operator_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['numpy_index_values_basic'] = function(block) {
  var dropdown_numpy_operator_option = block.getFieldValue('numpy_operator_Option');
  var value_numpy_index_values_val = Blockly.JavaScript.valueToCode(block, 'numpy_index_values_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['numpy_take_basic'] = function(block) {
  var dropdown_numpy_operator_option = block.getFieldValue('numpy_operator_Option');
  var value_numpy_index_values_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_changing_array_shape
Blockly.JavaScript['numpy_changing_array_shape_basic'] = function(block) {
  var dropdown_numpy_changing_array_shape_opt = block.getFieldValue('numpy_Changing_array_shape_opt');
  var value_numpy_changing_array_shape_val = Blockly.JavaScript.valueToCode(block, 'numpy_Changing_array_shape_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_changing_array_shape_opt}(${value_numpy_changing_array_shape_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_transpose_like_operations
Blockly.JavaScript['numpy_transpose_like_operations_basic'] = function(block) {
  var value_numpy_transpose_like_operations_val = Blockly.JavaScript.valueToCode(block, 'numpy_Transpose_like_operations_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `np.transpose(${value_numpy_transpose_like_operations_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



//numpy_ones_and_zeros
Blockly.JavaScript['numpy_ones_and_zeros_basic'] = function(block) {
  var dropdown_numpy_ones_and_zeros_opt = block.getFieldValue('numpy_Ones and zeros_opt');
  var value_numpy_ones_and_zeros_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numpy_ones_and_zeros_val2 = Blockly.JavaScript.valueToCode(block, 'parameter2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_ones_and_zeros_opt}(${value_numpy_ones_and_zeros_val},${value_numpy_ones_and_zeros_val2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//numpy_ones_and_zeros
Blockly.JavaScript['numpy_eye_basic'] = function(block) {
  var value_numpy_ones_and_zeros_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `np.eye(${value_numpy_ones_and_zeros_val})`;
  // TODO: Change ORDER_ATOMIC to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//numpy_numerical_ranges
Blockly.JavaScript['numpy_numerical_ranges_basic1'] = function(block) {
  var dropdown_numpy_numerical_ranges_opt = block.getFieldValue('numpy_Numerical_ranges_opt');
  var value_numpy_numerical_ranges_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numpy_numerical_ranges_val2 = Blockly.JavaScript.valueToCode(block, 'parameter2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numpy_numerical_ranges_val3 = Blockly.JavaScript.valueToCode(block, 'parameter3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_numerical_ranges_opt}(${value_numpy_numerical_ranges_val},${value_numpy_numerical_ranges_val2},${value_numpy_numerical_ranges_val3})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_numerical_ranges
Blockly.JavaScript['numpy_numerical_ranges_basic2'] = function(block) {
  var dropdown_numpy_numerical_ranges_opt = block.getFieldValue('numpy_Numerical_ranges_opt');
  var value_numpy_numerical_ranges_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numpy_numerical_ranges_val2 = Blockly.JavaScript.valueToCode(block, 'parameter2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_numerical_ranges_opt}(${value_numpy_numerical_ranges_val},${value_numpy_numerical_ranges_val2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

 // 넘파이 기본 연산
 Blockly.JavaScript['numpy_operator_basic'] = function(block) {
  var dropdown_numpy_operator_option = block.getFieldValue('numpy_operator_Option');
  var value_numpy_operator_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numpy_operator_val2 = Blockly.JavaScript.valueToCode(block, 'parameter2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['numpy_loadtxt_basic'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_delimiter = Blockly.JavaScript.valueToCode(block, 'delimiter', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dtype = Blockly.JavaScript.valueToCode(block, 'dtype', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['numpy_select'] = function(block) {
  var dropdown_numpy_operator_option = block.getFieldValue('numpy_operator_Option');
  var value_numpy_operator_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_numpy_operator_val}.${dropdown_numpy_operator_option}`;
  // TODO: Change ORDER_ATOMIC to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

