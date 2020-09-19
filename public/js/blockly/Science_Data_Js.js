// pandas, numpy 시각화 
Blockly.JavaScript['val_vi'] = function(block) {
    var dropdown_val_vi_option = block.getFieldValue('Val_VI_Option');
    var value_val_vi_val = Blockly.Python.valueToCode(block, 'Val_VI_Val', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = "PN_Visualization = pyodide.pyimport('PN_Visualization');\ndraw_table(PN_Visualization)\n"; 
    return code;       
  };   

  //라이브러리 임포트    
  Blockly.Python['numpy_library'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'lib_var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "import numpy as" + " "  + value_name.replace("'"," ")+ "\n";
    return code;
  };

  
    
    //라이브러리 임포트 사이킷런 
    Blockly.JavaScript['lib_import_sklearn'] = function(block) {
      var dropdown_lib_from_a_option = block.getFieldValue('lib_from_a_option');
      var dropdown_lib_import_a_option = block.getFieldValue('lib_import_a_option');
      // TODO: Assemble Python into code variable.
    
      var code = ' ';
    return code;
    };
   
      
    // 라이브러리  임포트 단순 
    Blockly.JavaScript['lib_import'] = function(block) { 
      var text_lib_import_name = block.getFieldValue('Lib_import_name'); 
      // TODO: Assemble Python into code variable. 
      var code = ' ';
      return code;
    }; 
  
    //라이브러리 임포트 as
    Blockly.JavaScript['lib_import_as'] = function(block) { 
      var text_lib_import_name_1 = block.getFieldValue('Lib_import_name_1');
      var text_lib_import_name_second = block.getFieldValue('Lib_import_name_second');  
      // TODO: Assemble Python into code variable.
      var code = ' ';
      return code;
    };  
   
  // 라이브러리 임포트  from
  Blockly.JavaScript['lib_import_from'] = function(block) {
    var text_lib_import_name_from = block.getFieldValue('Lib_import_name_from');
    var text_lib_import2 = block.getFieldValue('Lib_import2');
    // TODO: Assemble Python into code variable.
    var code =' ';    
    return code;   
  };  

  //데이터 CSV로 저장
  Blockly.JavaScript['data_to_csv'] = function(block) {
    var value_value_data_to_csv_dataval = Blockly.JavaScript.valueToCode(block, 'value_data_to_csv_dataval', Blockly.JavaScript.ORDER_ATOMIC);
    var text_value_value_data_to_csv_name = block.getFieldValue('value_value_data_to_csv_name');
    // TODO: Assemble JavaScript into code variable.
    var testing = block.getFieldValue('value_value_data_to_csv_name');  
  
    //text_value_value_data_to_csv_name = text_value_value_data_to_csv_name.slice(1,-1); 
    var code = `data_to_csv_value = pyodide.pyimport('data_to_csv_value');\nexportToCsv('${testing}.csv',data_to_csv_value); `; //${text_value_value_data_to_csv_name}.csv,   
    return code;       
  }; 
   // .list 데이터 리스트 변환 
  Blockly.JavaScript['data_conversion'] = function(block) {
    var value_data_conversion_var = Blockly.JavaScript.valueToCode(block, 'Data_Conversion_var', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_data_conversion_option = block.getFieldValue('Data_Conversion_Option');
    // TODO: Assemble JavaScript into code variable.
    var code = ' ';
    return code;  
  };

   // np.arry  
   Blockly.JavaScript['np_array'] = function(block) {
    var value_np_array_lib_val = Blockly.Python.valueToCode(block, 'np_array_lib_val', Blockly.Python.ORDER_ATOMIC);
    var value_np_array_val = Blockly.Python.valueToCode(block, 'np_array_val', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = ' ';  
    // TODO: Change ORDER_NONE to the correct strength. 
    return [code, Blockly.Python.ORDER_NONE];   
  }; 

  //numpy 함수 zeros 배열생성,   
  Blockly.JavaScript['numpy_zeros'] = function(block) {
    var value_numpy_zeros_lib_val = Blockly.Python.valueToCode(block, 'numpy_zeros_lib_val', Blockly.Python.ORDER_ATOMIC);
    var value_numpy_zeros_num_1 = Blockly.Python.valueToCode(block, 'numpy_zeros_num_1', Blockly.Python.ORDER_ATOMIC);
    var value_numpy_zeros_num_2 = Blockly.Python.valueToCode(block, 'numpy_zeros_num_2', Blockly.Python.ORDER_ATOMIC);
    var checkbox_numpy_zeros_check_dtype = block.getFieldValue('numpy_zeros_check_dtype') == 'TRUE';
    // TODO: Assemble Python into code variable.
    var code = ' ';
    return [code, Blockly.Python.ORDER_NONE];
  };

   // full 배열 생성 , 채워질 값  
   Blockly.JavaScript['numpy_full'] = function(block) { 
    var value_numpy_zeros_lib_val = Blockly.Python.valueToCode(block, 'numpy_zeros_lib_val', Blockly.Python.ORDER_ATOMIC);
    var value_numpy_full_num_1 = Blockly.Python.valueToCode(block, 'numpy_full_num_1', Blockly.Python.ORDER_ATOMIC);
    var value_numpy_full_num_2 = Blockly.Python.valueToCode(block, 'numpy_full_num_2', Blockly.Python.ORDER_ATOMIC);
    var value_numpy_full_input = Blockly.Python.valueToCode(block, 'numpy_full_input', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = ' ';  
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];  
  };
 

   // eye 배열생성 과 동시에, 대각선 1로 채우기
   Blockly.JavaScript['numpy_eye'] = function(block) {
    var value_numpy_eye_lib_val = Blockly.JavaScript.valueToCode(block, 'numpy_eye_lib_val', Blockly.JavaScript.ORDER_ATOMIC);
    var value_numpy_eye_num = Blockly.JavaScript.valueToCode(block, 'numpy_eye_num', Blockly.JavaScript.ORDER_ATOMIC);
    var value_numpy_eye_index = Blockly.JavaScript.valueToCode(block, 'numpy_eye_index', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = ' ';
    // TODO: Change ORDER_NONE to the correct strength. 
    return [code, Blockly.JavaScript.ORDER_NONE];
  };  

  // np.max_min  최대 값,최소 값 찾기
  Blockly.JavaScript['numpy_max_min'] = function(block) {
    var value_numpy_max_min_lib_val = Blockly.JavaScript.valueToCode(block, 'numpy_max_min_lib_val', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_numpy_max_min_option = block.getFieldValue('numpy_max_min_option');
    var value_numpy_max_min_val = Blockly.JavaScript.valueToCode(block, 'numpy_max_min_val', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = ' ';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
 //np.shape 행렬 차원 반환 
  Blockly.JavaScript['numpy_shape'] = function(block) {
    var value_numpy_shape_lib_val = Blockly.JavaScript.valueToCode(block, 'numpy_shape_lib_val', Blockly.JavaScript.ORDER_ATOMIC);
    var value_numpy_shape_num = Blockly.JavaScript.valueToCode(block, 'numpy_shape_num', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = ' ';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  // reshpae 행렬 차원 변경 
  Blockly.JavaScript['numpy_reshape'] = function(block) {
    var value_numpy_reshape_lib_val = Blockly.JavaScript.valueToCode(block, 'numpy_reshape_lib_val', Blockly.JavaScript.ORDER_ATOMIC);
    var value_numpy_reshape_num1 = Blockly.JavaScript.valueToCode(block, 'numpy_reshape_num1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_numpy_reshape_num2 = Blockly.JavaScript.valueToCode(block, 'numpy_reshape_num2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = ' ';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  }; 

  // random.randn  표준정규 분포에 따른 무작위 숫자 생성 
  Blockly.JavaScript['numpy_random_rand'] = function(block) {
    var value_numpy_random_rand_lib_val = Blockly.JavaScript.valueToCode(block, 'numpy_random_rand_lib_val', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_numpy_random_rand_option = block.getFieldValue('numpy_random_rand_option');
    var value_numpy_random_rand_num1 = Blockly.JavaScript.valueToCode(block, 'numpy_random_rand_num1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_numpy_random_rand_num2 = Blockly.JavaScript.valueToCode(block, 'numpy_random_rand_num2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = ' ';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  }; 

  // exp 지수  
  Blockly.JavaScript['numpy_exp'] = function(block) {
    var value_numpy_exp_lib_val = Blockly.JavaScript.valueToCode(block, 'numpy_exp_lib_val', Blockly.JavaScript.ORDER_ATOMIC);
    var value_numpy_exp_num = Blockly.JavaScript.valueToCode(block, 'numpy_exp_num', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = ' ';
    // TODO: Change ORDER_NONE to the correct strength. 
    return [code, Blockly.JavaScript.ORDER_NONE];
  }; 

  //np.append
  Blockly.JavaScript['np_append'] = function(block) { 
    var value_np_append_lib_var = Blockly.JavaScript.valueToCode(block, 'np_append_lib_var', Blockly.JavaScript.ORDER_ATOMIC);
    var value_np_append_num1 = Blockly.JavaScript.valueToCode(block, 'np_append_num1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_np_append_num2 = Blockly.JavaScript.valueToCode(block, 'np_append_num2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = ' ';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
 
  //matplotlib 1
  // Blockly.JavaScript['matplotlib_main'] = function(block) {
  //   var value_matplotlib_main_lib_val = Blockly.JavaScript.valueToCode(block, 'matplotlib_main_lib_val', Blockly.JavaScript.ORDER_ATOMIC);
  //   // TODO: Assemble JavaScript into code variable.
  //   var code = ' ';
  //   return code;   
  // }; 

  Blockly.JavaScript['matplotlib_main'] = function(block) {
    var value_matplotlib_main_lib_val = Blockly.JavaScript.valueToCode(block, 'matplotlib_main_lib_val', Blockly.JavaScript.ORDER_ATOMIC);
    var value_matplotlib_main_cols = Blockly.JavaScript.valueToCode(block, 'matplotlib_main_cols', Blockly.JavaScript.ORDER_ATOMIC);
    var value_matplotlib_main_rows = Blockly.JavaScript.valueToCode(block, 'matplotlib_main_rows', Blockly.JavaScript.ORDER_ATOMIC);
    var value_matplotlib_main_screen_size_width = Blockly.JavaScript.valueToCode(block, 'matplotlib_main_screen_size_width', Blockly.JavaScript.ORDER_ATOMIC);
    var value_matplotlib_main_screen_size_height = Blockly.JavaScript.valueToCode(block, 'matplotlib_main_screen_size_height', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = ' ';
    return code;
  };

  //matplot2 수정
  Blockly.JavaScript['matplotlib_pre_graph'] = function(block) {
    var value_matplotlib_pre_graph_lib_val = Blockly.JavaScript.valueToCode(block, 'matplotlib_pre_graph_lib_val', Blockly.JavaScript.ORDER_ATOMIC);
    var value_matplotlib_pre_graph_location1 = Blockly.JavaScript.valueToCode(block, 'matplotlib_pre_graph_location1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_matplotlib_pre_graph_location2 = Blockly.JavaScript.valueToCode(block, 'matplotlib_pre_graph_location2', Blockly.JavaScript.ORDER_ATOMIC);
    var text_matplotlib_user_xy = block.getFieldValue('matplotlib_user_xy');
    var dropdown_matplotlib_graph_select = block.getFieldValue('matplotlib_graph_select');
    var text_matplotlib_pre_graph_title = block.getFieldValue('matplotlib_pre_graph_Title');
    var text_matplotlib_pre_graph_xlable = block.getFieldValue('matplotlib_pre_graph_Xlable');
    var text_matplotlib_pre_graph_ylable = block.getFieldValue('matplotlib_pre_graph_Ylable');
    var text_matplotlib_pre_legend = block.getFieldValue('matplotlib_pre_legend');
    // TODO: Assemble JavaScript into code variable.
    var code = ' ';
    return code; 
  };

 //matplot3
  Blockly.JavaScript['matplotlib_graph_end'] = function(block) {
    var value_matplotlib_graph_end_lib_val = Blockly.JavaScript.valueToCode(block, 'matplotlib_graph_end_lib_val', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code ='document.getElementById("pyplotfigure").src = pyodide.globals.img_str;';
    return code;
  };  

  Blockly.JavaScript['visualization_library'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'lib_var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var libImportIo = "import io\n";
    var libImportBase64 = "import base64\n";
    var code = " ";
    return code;
  };