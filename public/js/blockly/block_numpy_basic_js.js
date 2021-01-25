

//numpy_order_static
Blockly.JavaScript['numpy_order_static'] = function(block) {
  var dropdown_numpy_order_static_opt = block.getFieldValue('numpy_order_static_opt');
  var value_numpy_order_static_val = Blockly.JavaScript.valueToCode(block, 'numpy_order_static_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;

  switch (dropdown_numpy_order_static_opt){
    case "numpy_order_static_amin":
    code = `np.amin(${value_numpy_order_static_val})`;  
    break;

    case "numpy_order_static_amax":
    code = `np.amax(${value_numpy_order_static_val})`;  
    break;

    case "numpy_order_static_nMin":
    code = `np.nanmin(${value_numpy_order_static_val})`;  
    break;

    case "numpy_order_static_nMax":
    code = `np.nanmax(${value_numpy_order_static_val})`;  
    break;

    case "numpy_order_static_ptp":
    code = `np.ptp(${value_numpy_order_static_val})`;  
    break;

    case "numpy_order_static_percentile":
    code = `np.percentile(${value_numpy_order_static_val})`;  
    break;

    case "numpy_order_static_nanpercentile":
    code = `np.nanpercentile(${value_numpy_order_static_val})`;  
    break;

    case "numpy_order_static_quantile":
    code = `np.quantile(${value_numpy_order_static_val})`;  
    break;

    case "numpy_order_static_nanquantile":
    code = `np.nanquantile(${value_numpy_order_static_val})`;  
    break;

    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength. 
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};
 


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


//numpy_correlating
Blockly.JavaScript['numpy_correlating'] = function(block) {
  var dropdown_numpy_correlating_opt = block.getFieldValue('numpy_Correlating_opt');
  var value_numpy_correlating_val = Blockly.JavaScript.valueToCode(block, 'numpy_Correlating_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (dropdown_numpy_correlating_opt){
    case "numpy_Correlating_corrcoef": 
    code = `np.corrcoef(${value_numpy_correlating_val})`;  
    break; 

    case "numpy_Correlating_correlate": 
    code = `np.correlate(${value_numpy_correlating_val})`;  
    break;

    case "numpy_Correlating_cov":
    code = `np.cov(${value_numpy_correlating_val})`;  
    break;

    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_sorting
Blockly.JavaScript['numpy_sorting'] = function(block) {
  var dropdown_numpy_sorting_opt = block.getFieldValue('numpy_Sorting_opt');
  var value_numpy_sorting_val = Blockly.JavaScript.valueToCode(block, 'numpy_Sorting_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (dropdown_numpy_sorting_opt){
    case "numpy_Sorting_sort": 
    code = `np.sort(${value_numpy_sorting_val})`;  
    break; 

    case "numpy_Sorting_lexsort": 
    code = `np.lexsort(${value_numpy_sorting_val})`;  
    break;

    case "numpy_Sorting_partition":
    code = `np.partition(${value_numpy_sorting_val})`;  
    break;

    case "numpy_Sorting_argpartition":
    code = `np.argpartition(${value_numpy_sorting_val})`;  
    break;

    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_searching
Blockly.JavaScript['numpy_searching'] = function(block) {
  var dropdown_numpy_searching_opt = block.getFieldValue('numpy_Searching_opt');
  var value_numpy_searching = Blockly.JavaScript.valueToCode(block, 'numpy_Searching', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (dropdown_numpy_searching_opt){
    case "numpy_argmax": 
    code = `np.argmax(${value_numpy_searching})`;  
    break; 

    case "numpy_Sorting_argmin": 
    code = `np.argmin(${value_numpy_searching})`;  
    break;

    case "numpy_Searching_nonzero":
    code = `np.nonzero(${value_numpy_searching})`;  
    break;

    case "numpy_Searching_where":
    code = `np.where(${value_numpy_searching})`;  
    break;

    case "numpy_Searching_extract":
    code = `np.extract(${value_numpy_searching})`;  
    break;

    default:
    break;
  }
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

//numpy_random_permutations
Blockly.JavaScript['numpy_random_permutations'] = function(block) {
  var dropdown_numpy_random_permutations_opt = block.getFieldValue('numpy_Random_Permutations_opt');
  var value_numpy_random_permutations_val = Blockly.JavaScript.valueToCode(block, 'numpy_Random_Permutations_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (dropdown_numpy_random_permutations_opt){
    case "numpy_Random_Permutations_shuffle": 
    code = `np.random.shuffle(${value_numpy_random_permutations_val})`;  
    break; 

    case "numpy_Random_Permutations_permutation": 
    code = `np.random.permutation(${value_numpy_random_permutations_val})`;  
    break;

    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//
Blockly.JavaScript['numpy_random_distributions'] = function(block) {
  var dropdown_numpy_random_distributions_opt = block.getFieldValue('numpy_Random_Distributions_opt');
  var value_numpy_random_distributions_val = Blockly.JavaScript.valueToCode(block, 'numpy_Random_Distributions_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (dropdown_numpy_random_distributions_opt){
    case "numpy_Random_Distributions_binomial": 
    code = `np.random.binomial(${value_numpy_random_distributions_val})`;  
    break; 

    case "numpy_Random_Distributions_chisquare": 
    code = `np.random.chisquare(${value_numpy_random_distributions_val})`;  
    break;

    case "numpy_Random_Distributions_dirichlet":
    code = `np.random.dirichlet(${value_numpy_random_distributions_val})`;  
    break;

    case "numpy_Random_Distributions_exponential":
    code = `np.random.exponential(${value_numpy_random_distributions_val})`;  
    break;

    case "numpy_Random_Distributions_f":
    code = `np.random.f(${value_numpy_random_distributions_val})`;  
    break;

    case "numpy_Random_Distributions_gamma":
    code = `np.random.gamma(${value_numpy_random_distributions_val})`;  
    break;

    case "numpy_Random_Distributions_geometric":
    code = `np.random.geometric(${value_numpy_random_distributions_val})`;  
    break;

    case "numpy_Random_Distributions_gumbel":
    code = `np.random.gumbel(${value_numpy_random_distributions_val})`;  
    break;

    case "numpy_Random_Distributions_hypergeometric":
    code = `np.random.hypergeometric(${value_numpy_random_distributions_val})`;  
    break;

    case "numpy_Random_Distributions_laplace":
    code = `np.random.laplace(${value_numpy_random_distributions_val})`;  
    break;

    case "numpy_Random_Distributions_logistic":
    code = `np.random.logistic(${value_numpy_random_distributions_val})`;  
    break;


    default:
    break;
  }
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_random_distributions_two
Blockly.JavaScript['numpy_random_distributions_two'] = function(block) {
  var dropdown_numpy_random_distributions_two_opt = block.getFieldValue('numpy_Random_Distributions_two_opt');
  var value_numpy_random_distributions_two_val = Blockly.JavaScript.valueToCode(block, 'numpy_Random_Distributions_two_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (dropdown_numpy_random_distributions_two_opt){
    case "numpy_Random_Distributions_two_lognormal": 
    code = `np.random.lognormal(${value_numpy_random_distributions_two_val})`;  
    break; 

    case "numpy_Random_Distributions_two_logseries": 
    code = `np.random.logseries(${value_numpy_random_distributions_two_val})`;  
    break;

    case "numpy_Random_Distributions_two_multinomial":
    code = `np.random.multinomial(${value_numpy_random_distributions_two_val})`;  
    break;

    case "numpy_Random_Distributions_two_multivariate_normal":
    code = `np.random.multivariate_normal(${value_numpy_random_distributions_two_val})`;  
    break;

    case "numpy_Random_Distributions_two_negative_binomial":
    code = `np.random.negative_binomial(${value_numpy_random_distributions_two_val})`;  
    break;

    case "numpy_Random_Distributions_two_noncentral_chisquare":
    code = `np.random.noncentral_chisquare(${value_numpy_random_distributions_two_val})`;  
    break;

    case "numpy_Random_Distributions_two_noncentral_f":
    code = `np.random.noncentral_f(${value_numpy_random_distributions_two_val})`;  
    break;

    case "numpy_Random_Distributions_two_normal":
    code = `np.random.normal(${value_numpy_random_distributions_two_val})`;  
    break;

    case "numpy_Random_Distributions_two_poisson":
    code = `np.random.poisson(${value_numpy_random_distributions_two_val})`;  
    break;

    case "numpy_Random_Distributions_two_rayleigh":
    code = `np.random.rayleigh(${value_numpy_random_distributions_two_val})`;    
    break;

    case "numpy_Random_Distributions_two_standard_exponential":
    code = `np.random.standard_exponential(${value_numpy_random_distributions_two_val})`;  
    break;


    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_random_distributions_third
Blockly.JavaScript['numpy_random_distributions_third'] = function(block) {
  var numpy_Random_Distributions_third_opt = block.getFieldValue('numpy_Random_Distributions_two_opt');
  var value_numpy_random_distributions_third_val = Blockly.JavaScript.valueToCode(block, 'numpy_Random_Distributions_third_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (numpy_Random_Distributions_third_opt){
    case "numpy_Random_Distributions_third_standard_gamma": 
    code = `np.random.standard_gamma(${value_numpy_random_distributions_third_val})`;  
    break; 

    case "numpy_Random_Distributions_third_standard_normal": 
    code = `np.random.standard_normal(${value_numpy_random_distributions_third_val})`;  
    break;

    case "numpy_Random_Distributions_third_triangular":
    code = `np.random.triangular(${value_numpy_random_distributions_third_val})`;  
    break;

    case "numpy_Random_Distributions_third_uniform":
    code = `np.random.uniform(${value_numpy_random_distributions_third_val})`;  
    break;

    case "numpy_Random_Distributions_third_vonmises":
    code = `np.random.vonmises(${value_numpy_random_distributions_third_val})`;  
    break;

    case "numpy_Random_Distributions_third_wald":
    code = `np.random.wald(${value_numpy_random_distributions_third_val})`;  
    break;

    case "numpy_Random_Distributions_third_weibull":
    code = `np.random.weibull(${value_numpy_random_distributions_third_val})`;  
    break;

    case "numpy_Random_Distributions_third_zipf":
      code = `np.random.zipf(${value_numpy_random_distributions_third_val})`;  
      break;

    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
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


//numpy_mathematical_functions
Blockly.JavaScript['numpy_mathematical_functions'] = function(block) {
  var dropdown_numpy_mathematical_functions_opt = block.getFieldValue('numpy_Mathematical functions_opt');
  var value_numpy_mathematical_functions_val = Blockly.JavaScript.valueToCode(block, 'numpy_Mathematical functions_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_mathematical_functions_opt}(${value_numpy_mathematical_functions_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_mathematical_functions
Blockly.JavaScript['numpy_hyperbolic_functions'] = function(block) {
  var dropdown_numpy_hyperbolic_functions_opt = block.getFieldValue('numpy_Hyperbolic functions_opt');
  var value_numpy_hyperbolic_functions_val = Blockly.JavaScript.valueToCode(block, 'numpy_Hyperbolic functions_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_hyperbolic_functions_opt}(${value_numpy_hyperbolic_functions_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
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

//numpy_arithmetic_operations1
Blockly.JavaScript['numpy_arithmetic_operations1'] = function(block) {
  var dropdown_numpy_arithmetic_operations_opt = block.getFieldValue('numpy_Arithmetic_operations_opt');
  var value_numpy_arithmetic_operations1_val = Blockly.JavaScript.valueToCode(block, 'numpy_Arithmetic_operations1_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_arithmetic_operations_opt}(${value_numpy_arithmetic_operations1_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_arithmetic_operations2
Blockly.JavaScript['numpy_arithmetic_operations2'] = function(block) {
  var dropdown_numpy_arithmetic_operations2_opt = block.getFieldValue('numpy_Arithmetic_operations2_opt');
  var value_numpy_arithmetic_operations2_val = Blockly.JavaScript.valueToCode(block, 'numpy_Arithmetic_operations2_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_arithmetic_operations2_opt}(${value_numpy_arithmetic_operations2_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_handling_complex_numbers
Blockly.JavaScript['numpy_handling_complex_numbers'] = function(block) {
  var dropdown_numpy_handling_complex_numbers_opt = block.getFieldValue('numpy_Handling complex numbers_opt');
  var value_numpy_handling_complex_numbers_val = Blockly.JavaScript.valueToCode(block, 'numpy_Handling complex numbers_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_handling_complex_numbers_opt}(${value_numpy_handling_complex_numbers_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_sums_differences
Blockly.JavaScript['numpy_sums_differences'] = function(block) {
  var dropdown_numpy_sums_differences_opt = block.getFieldValue('numpy_Sums_differences_opt');
  var value_numpy_sums_differences_val = Blockly.JavaScript.valueToCode(block, 'numpy_Sums_differences_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_sums_differences_opt}(${value_numpy_sums_differences_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_matrix_vector_products
Blockly.JavaScript['numpy_matrix_vector_products'] = function(block) {
  var dropdown_numpy_matrix_vector_products_opt = block.getFieldValue('numpy_Matrix_vector_products_opt');
  var value_numpy_matrix_vector_products_val = Blockly.JavaScript.valueToCode(block, 'numpy_Matrix_vector_products_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_matrix_vector_products_opt}(${value_numpy_matrix_vector_products_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_matrix_decomposition
Blockly.JavaScript['numpy_matrix_decomposition'] = function(block) {
  var dropdown_numpy_matrix_decomposition_opt = block.getFieldValue('numpy_Matrix_Decomposition_opt');
  var value_numpy_matrix_decomposition_val = Blockly.JavaScript.valueToCode(block, 'numpy_Matrix_Decomposition_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_matrix_decomposition_opt}(${value_numpy_matrix_decomposition_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
 

//numpy_array_contents
Blockly.JavaScript['numpy_array_contents'] = function(block) {
  var dropdown_numpy_array_contents_opt = block.getFieldValue('numpy_Array_contents_opt');
  var value_numpy_array_contents_val = Blockly.JavaScript.valueToCode(block, 'numpy_Array_contents_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_array_contents_opt}(${value_numpy_array_contents_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_comparison
Blockly.JavaScript['numpy_comparison'] = function(block) {
  var dropdown_numpy_comparison_opt = block.getFieldValue('numpy_Comparison_opt');
  var value_numpy_comparison_val = Blockly.JavaScript.valueToCode(block, 'numpy_Comparison_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_comparison_opt}(${value_numpy_comparison_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_string_operations
Blockly.JavaScript['numpy_string_operations'] = function(block) {
  var dropdown_numpy_string_operations_opt = block.getFieldValue('numpy_String_operations_opt');
  var value_numpy_string_operations_val = Blockly.JavaScript.valueToCode(block, 'numpy_String_operations_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_string_operations_opt}(${value_numpy_string_operations_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_string_operations2
Blockly.JavaScript['numpy_string_operations2'] = function(block) {
  var dropdown_numpy_string_operations2_opt = block.getFieldValue('numpy_String_operations2_opt');
  var value_numpy_string_operations2_val = Blockly.JavaScript.valueToCode(block, 'numpy_String_operations2_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_string_operations2_opt}(${value_numpy_string_operations2_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpystring_information
Blockly.JavaScript['numpystring_information'] = function(block) {
  var dropdown_numpystring_information_opt = block.getFieldValue('numpyString_information_opt');
  var value_numpystring_information_val = Blockly.JavaScript.valueToCode(block, 'numpyString_information_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpystring_information_opt}(${value_numpystring_information_val})`;
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


//numpy_changing_number
Blockly.JavaScript['numpy_changing_number'] = function(block) {
  var dropdown_numpy_changing_number_opt = block.getFieldValue('numpy_Changing_number_opt');
  var value_numpy_changing_number_val = Blockly.JavaScript.valueToCode(block, 'numpy_Changing_number_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_changing_number_opt}(${value_numpy_changing_number_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_changing_kind_array
Blockly.JavaScript['numpy_changing_kind_array'] = function(block) {
  var dropdown_numpy_changing_kind_array_opt = block.getFieldValue('numpy_Changing_kind_array_opt');
  var value_numpy_changing_kind_array_val = Blockly.JavaScript.valueToCode(block, 'numpy_Changing_kind_array_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_changing_kind_array_opt}(${value_numpy_changing_kind_array_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_joining_arrays
Blockly.JavaScript['numpy_joining_arrays'] = function(block) {
  var dropdown_numpy_joining_arrays_opt = block.getFieldValue('numpy_Joining_arrays_opt');
  var value_numpy_joining_arrays_val = Blockly.JavaScript.valueToCode(block, 'numpy_Joining_arrays_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_joining_arrays_opt}(${value_numpy_joining_arrays_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
 
//numpy_splitting_arrays
Blockly.JavaScript['numpy_splitting_arrays'] = function(block) {
  var dropdown_numpy_splitting_arrays_opt = block.getFieldValue('numpy_Splitting_arrays_opt');
  var value_numpy_splitting_arrays_val = Blockly.JavaScript.valueToCode(block, 'numpy_Splitting_arrays_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_splitting_arrays_opt}(${value_numpy_splitting_arrays_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_adding_removing_elements
Blockly.JavaScript['numpy_adding_removing_elements'] = function(block) {
  var dropdown_numpy_adding_removing_elements_opt = block.getFieldValue('numpy_Adding_removing_elements_opt');
  var value_numpy_adding_removing_elements_val = Blockly.JavaScript.valueToCode(block, 'numpy_Adding_removing_elements_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_adding_removing_elements_opt}(${value_numpy_adding_removing_elements_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_rearranging_elements
Blockly.JavaScript['numpy_rearranging_elements'] = function(block) {
  var dropdown_numpy_rearranging_elements_opt = block.getFieldValue('numpy_Rearranging_elements_opt');
  var value_numpy_rearranging_elements_val = Blockly.JavaScript.valueToCode(block, 'numpy_Rearranging_elements_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_rearranging_elements_opt}(${value_numpy_rearranging_elements_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
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
Blockly.JavaScript['numpy_ones_and_zeros'] = function(block) {
  var dropdown_numpy_ones_and_zeros_opt = block.getFieldValue('numpy_Ones and zeros_opt');
  var value_numpy_ones_and_zeros_val = Blockly.JavaScript.valueToCode(block, 'numpy_Ones and zeros_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_ones_and_zeros_opt}(${value_numpy_ones_and_zeros_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//numpy_from_existing_data
Blockly.JavaScript['numpy_from_existing_data'] = function(block) {
  var dropdown_numpy_from_existing_data_opt = block.getFieldValue('numpy_From_existing_data_opt');
  var value_numpy_from_existing_data_val = Blockly.JavaScript.valueToCode(block, 'numpy_From_existing_data_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_from_existing_data_opt}(${value_numpy_from_existing_data_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//numpy_creating_record_arrays
Blockly.JavaScript['numpy_creating_record_arrays'] = function(block) {
  var dropdown_numpy_creating_record_arrays_opt = block.getFieldValue('numpy_Creating_record_arrays_opt');
  var value_numpy_creating_record_arrays_val = Blockly.JavaScript.valueToCode(block, 'numpy_Creating_record_arrays_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_creating_record_arrays_opt}(${value_numpy_creating_record_arrays_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
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

//numpy_building_matrices
Blockly.JavaScript['numpy_building_matrices'] = function(block) {
  var dropdown_numpy_building_matrices_opt = block.getFieldValue('numpy_Building_matrices_opt');
  var value_numpy_building_matrices_val = Blockly.JavaScript.valueToCode(block, 'numpy_Building_matrices_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_numpy_building_matrices_opt}(${value_numpy_building_matrices_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['create_np_array'] = function (block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list + ' = np.array([' + value_text + '])\n';
  return code;
};

Blockly.JavaScript['create_np_array2'] = function (block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text2 = Blockly.JavaScript.valueToCode(block, 'text2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list + ' = np.array(' + value_text + ')[' + value_text2 + ']\n';
  return code;
};