  //print 하기   2020-09-04 
  Blockly.Python['print'] = function(block) {
    var value_print_value = Blockly.Python.valueToCode(block, 'print_value', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    value_print_value = value_print_value;//.slice(1,-1);
    var code = `print(${value_print_value})\n`;      
    return code;       
  };    
  
 
  // 배열 생성 
  Blockly.Python['create_arry'] = function(block) { 
    var text_create_arry_val = block.getFieldValue('Create_arry_val'); 
    // TODO: Assemble JavaScript into code variable. 
    var code = `[${text_create_arry_val}]`;    
    // TODO: Change ORDER_NONE to the correct strength. 
    return [code, Blockly.JavaScript.ORDER_NONE];
  }; 

  // np.arry 
  Blockly.Python['np_array'] = function(block) {
    var text_np_array_lib = block.getFieldValue('np_array_lib');
    var value_np_array_input = Blockly.Python.valueToCode(block, 'np_array_input', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.  //np.array(li)   
    var code = `${text_np_array_lib}.array${value_np_array_input}`; 
    // TODO: Change ORDER_NONE to the correct strength. 
    return [code, Blockly.Python.ORDER_NONE];    
  }; 

  //배열 곱 
  Blockly.Python['arry_mul'] = function(block) {
    var value_arry_mul_first = Blockly.JavaScript.valueToCode(block, 'Arry_mul_first', Blockly.JavaScript.ORDER_ATOMIC);
    var value_arry_mul_second = Blockly.JavaScript.valueToCode(block, 'Arry_mul_second', Blockly.JavaScript.ORDER_ATOMIC);
   
    var code = `${value_arry_mul_first} * ${value_arry_mul_second}\n`; 
    return code; 
  };  
       
//배열 나누기
  Blockly.Python['arry_div'] = function(block) {
    var value_arry_div_first = Blockly.JavaScript.valueToCode(block, 'Arry_div_first', Blockly.JavaScript.ORDER_ATOMIC);
    var value_arry_div_second = Blockly.JavaScript.valueToCode(block, 'Arry_div_second', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `${value_arry_div_first} / ${value_arry_div_second}\n`;
    // TODO: Change ORDER_NONE to the correct strength.
    return code;  
  }; 

  //배열 합
  Blockly.Python['arry_plus'] = function(block) {
    var value_arry_plus_first = Blockly.JavaScript.valueToCode(block, 'Arry_plus_first', Blockly.JavaScript.ORDER_ATOMIC);
    var value_arry_plus_second = Blockly.JavaScript.valueToCode(block, 'Arry_plus_second', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code =`${value_arry_plus_first} + ${value_arry_plus_second}\n`;
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  };
   
  //배열 뺴기
  Blockly.Python['arry_minus'] = function(block) {
    var value_arry_minus_first = Blockly.JavaScript.valueToCode(block, 'Arry_Minus_first', Blockly.JavaScript.ORDER_ATOMIC);
    var value_arry_minus_second = Blockly.JavaScript.valueToCode(block, 'Arry_Minus_second', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `${value_arry_minus_first} / ${value_arry_minus_second}\n`;
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  }; 

  //numpy 함수 zeros 배열생성, 
  Blockly.Python['numpy_zeros'] = function(block) {
    var text_numpy_zeros_lib = block.getFieldValue('Numpy_zeros_lib');
    var text_numpy_zeros_num = block.getFieldValue('Numpy_zeros_num');
    var checkbox_numpy_zeros_check_dtype = block.getFieldValue('Numpy_zeros_check_dtype') == 'TRUE';
    // TODO: Assemble Python into code variable.
    var code ; 
    if( checkbox_numpy_zeros_check_dtype == false ){ 
        code = `${text_numpy_zeros_lib}.zeros(${text_numpy_zeros_num})`;  
    }else{ 
        code = `${text_numpy_zeros_lib}.zeros((${text_numpy_zeros_num}), dtype= int)`; 
    }
 
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  // full 배열 생성 , 채워질 값 
  Blockly.Python['numpy_full'] = function(block) {
    var text_numpy_full_lib = block.getFieldValue('Numpy_full_lib');
    var text_numpy_full_pre_val = block.getFieldValue('Numpy_full_pre_val');
    var text_numpy_full_next_val = block.getFieldValue('Numpy_full_next_val');
    // TODO: Assemble Python into code variable.
    var code = `${text_numpy_full_lib}.full((${text_numpy_full_pre_val}),${text_numpy_full_next_val})`;  
    // TODO: Change ORDER_NONE to the correct strength. 
    return [code, Blockly.Python.ORDER_NONE];  
  };

  // eye 배열생성 과 동시에, 대각선 1로 채우기
  Blockly.Python['numpy_eye'] = function(block) {
    var text_numpy_eye_lib = block.getFieldValue('Numpy_eye_lib');
    var text_numpy_eye_arry = block.getFieldValue('Numpy_eye_arry');
    // TODO: Assemble Python into code variable. 
    var code =  `${text_numpy_eye_lib}.eye(${text_numpy_eye_arry})`;   
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];  
  }; 
  
  // max 최대값 찾기 
  Blockly.Python['numpy_max'] = function(block) {
    var text_numpy_max_lib = block.getFieldValue('Numpy_max_lib');
    var text_numpy_max_arry = block.getFieldValue('Numpy_max_arry');
    // TODO: Assemble Python into code variable.
    var code =  `${text_numpy_max_lib}.max(${text_numpy_max_arry})\n`;    
    return code;
  };
 
  // min 최소값 찾기 
  Blockly.Python['numpy_min'] = function(block) {
    var text_numpy_min_lib = block.getFieldValue('Numpy_min_lib');
    var text_numpy_min_arry = block.getFieldValue('Numpy_min_arry');
    // TODO: Assemble Python into code variable.
    var code =  `${text_numpy_min_lib}.min(${text_numpy_min_arry})\n`;    
    return code; 
  };

  // shape 행렬 차원 반환 
  Blockly.Python['numpy_shape'] = function(block) {
    var text_numpy_shape = block.getFieldValue('Numpy_shape');
    // TODO: Assemble Python into code variable.
    var code = `${text_numpy_shape}.shape\n`;     
    return code;  
  };
   
  // reshape 행렬 차원 변경
  Blockly.Python['numpy_reshape'] = function(block) {
    var text_numpy_reshape_vari = block.getFieldValue('Numpy_reshape_vari');
    var text_numpy_reshape_array = block.getFieldValue('Numpy_reshape_array');
    // TODO: Assemble Python into code variable.
    var code = `${text_numpy_reshape_vari}.reshape((${text_numpy_reshape_array}))\n`;    
    return code; 
  };
 
 // random.randn or randint  표준정규 분포에 따른 무작위 숫자 생성 또는 정수 난수 
 Blockly.Python['numpy_random_rand'] = function(block) {
    var text_numpy_random_rand_lib = block.getFieldValue('Numpy_random_rand_lib');
    var dropdown_numpy_get_random = block.getFieldValue('Numpy_Get_random');
    var text_numpy_random_rand_array = block.getFieldValue('Numpy_random_rand_array');
    // TODO: Assemble Python into code variable.
    var code; 
    if(dropdown_numpy_get_random == 'Numpy_random_randn'){
         code = `${text_numpy_random_rand_lib}.random.randn(${text_numpy_random_rand_array})`;    
    }else if (dropdown_numpy_get_random == 'Numpy_random_randint'){
         code = `${text_numpy_random_rand_lib}.random.randint(${text_numpy_random_rand_array})`;    
    }
    return [code, Blockly.Python.ORDER_NONE];  
  };   

  // exp 지수  
  Blockly.Python['numpy_exp'] = function(block) {
    var text_numpy_exp_lib = block.getFieldValue('Numpy_exp_lib');
    var value_numpy_exp_val = Blockly.Python.valueToCode(block, 'Numpy_exp_val', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `${text_numpy_exp_lib}.exp(${value_numpy_exp_val})`;    
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE]; 
  };   
  