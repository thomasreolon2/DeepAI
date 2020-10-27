
//""없는 문자
Blockly.Python['char_a_none'] = function(block) {
  var text_char_a_none_val = block.getFieldValue('char_A_none_val');
  // TODO: Assemble Python into code variable.
  var code = `${text_char_a_none_val}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


//클래스 선언
Blockly.Python['python_class'] = function(block) {
  var text_python_class_statement_name = block.getFieldValue('Python_Class_statement_name');
  var statements_python_class_statement = Blockly.Python.statementToCode(block, 'Python_Class_statement');
  // TODO: Assemble Python into code variable.
  var code = `class ${text_python_class_statement_name}:
${statements_python_class_statement}\n`;
  return code;  
};

//객체 
Blockly.Python['class_refer'] = function(block) {
  var value_class_refer_classname = Blockly.Python.valueToCode(block, 'class_refer_className', Blockly.Python.ORDER_ATOMIC);
  var text_class_refer_val = block.getFieldValue('class_refer_val');
  // TODO: Assemble Python into code variable.
  var code = `${value_class_refer_classname}.${text_class_refer_val}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];  
};

//객체 위아래 
Blockly.Python['class_instance'] = function(block) {
  var value_class_instance_val = Blockly.Python.valueToCode(block, 'class_instance_val', Blockly.Python.ORDER_ATOMIC);
  var text_class_instance_value = block.getFieldValue('class_instance_value');
  var value_class_instance_input = Blockly.Python.valueToCode(block, 'class_instance_input', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_class_instance_val}.${text_class_instance_value} = ${value_class_instance_input}\n`;
  return code; 
};

//함수 호출
Blockly.Python['function__parameter'] = function(block) {
  var text_function__parameter_name = block.getFieldValue('function__parameter_name');
  var value_function__parameter_val = Blockly.Python.valueToCode(block, 'function__parameter_val', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${text_function__parameter_name}.(${value_function__parameter_val})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

//넘파이 라이브러리 
Blockly.Python['numpy_library'] = function(block) {
  // TODO: Assemble Python into code variable. 
  var code = 'import numpy as np\n';
  return code;
};

//데이터 CSV로 저장
Blockly.Python['data_to_csv'] = function(block) {
  var value_value_data_to_csv_dataval = Blockly.Python.valueToCode(block, 'value_data_to_csv_dataval', Blockly.Python.ORDER_ATOMIC);
  var text_value_value_data_to_csv_name = block.getFieldValue('value_value_data_to_csv_name');
  // TODO: Assemble Python into code variable.

  var code = `data_to_csv_value = ${value_value_data_to_csv_dataval}\n
${value_value_data_to_csv_dataval}.to_csv('${text_value_value_data_to_csv_name}');\n`;//val_2 = '${text_value_value_data_to_csv_name}'\n`; 
  return code;  
};

  //.list 데이터 리스트 변환 
  Blockly.Python['data_conversion'] = function(block) {
    var value_data_conversion_var = Blockly.Python.valueToCode(block, 'Data_Conversion_var', Blockly.Python.ORDER_ATOMIC);
    var dropdown_data_conversion_option = block.getFieldValue('Data_Conversion_Option');
    // TODO: Assemble Python into code variable.
    var code ;
    switch (dropdown_data_conversion_option){
      case "Data_Conversion_Option_Pandas" :
      code = `${value_data_conversion_var}.values.tolist()\n`;
      break;    

      case "Data_Conversion_Option_Numpy" : 
      code = `${value_data_conversion_var}.tolist()\n`;
      break;   

      case "Data_Conversion_Option_Tuple" : 
      code = `list(${value_data_conversion_var}=)\n`;
      break;   
 
      case "Data_Conversion_Option_Dictionary" :
      code = `${value_data_conversion_var}.values()\n`;
      break;   

    } 
    return [code, Blockly.Python.ORDER_NONE];
  };
  

 
//np.concatenate
Blockly.Python['np_concatenate'] = function(block) {
  var text_np_concatenate_var1 = block.getFieldValue('np_concatenate_var1');
  var text_np_concatenate_var2 = block.getFieldValue('np_concatenate_var2');
  // TODO: Assemble JavaScript into code variable.
  var code = `np.concatenate((${text_np_concatenate_var1},${text_np_concatenate_var2}))`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
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
  var value_np_array_val = Blockly.Python.valueToCode(block, 'np_array_val', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `np.array(${value_np_array_val})`;   
  // TODO: Change ORDER_NONE to the correct strength. 
  return [code, Blockly.Python.ORDER_NONE];   
};
  
//np.arange  
Blockly.Python['np_arrange'] = function(block) {
  var text_np_arrange_value1 = block.getFieldValue('np_arrange_value1');
  // TODO: Assemble JavaScript into code variable.
  var code = `np.arange(${text_np_arrange_value1})`; 
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy 함수 zeros 배열생성,   
    Blockly.Python['numpy_zeros'] = function(block) {
      var text_numpy_zeros_num_1 = block.getFieldValue('numpy_zeros_num_1');
      var text_numpy_zeros_num_2 = block.getFieldValue('numpy_zeros_num_2');
      var dropdown_numpy_zeros_option = block.getFieldValue('numpy_zeros_Option');
      // TODO: Assemble Python into code variable.
      switch(dropdown_numpy_zeros_option){ 
        case "numpy_zeros_Option_float":
        code = `np.zeros((${text_numpy_zeros_num_1},${text_numpy_zeros_num_2}))`;
        break;

        case "numpy_zeros_Option_int":
        code = `np.zeros((${text_numpy_zeros_num_1},${text_numpy_zeros_num_2}), dtype= int)`;
        break;
        
        default:
        break;
      }
      return code;
    }; 

 // full 배열 생성 , 채워질 값  
    Blockly.Python['numpy_full'] = function(block) {
      var text_numpy_full_rows = block.getFieldValue('numpy_full_rows');
      var text_numpy_full_cols = block.getFieldValue('numpy_full_cols');
      var text_numpy_full_num = block.getFieldValue('numpy_full_num');
      // TODO: Assemble Python into code variable.
      var code = `np.full((${text_numpy_full_rows},${text_numpy_full_cols}),${text_numpy_full_num})`;  
      return code;
    };
    
    // eye 배열생성 과 동시에, 대각선 1로 채우기
    Blockly.Python['numpy_eye'] = function(block) {
      var text_numpy_eye_num = block.getFieldValue('numpy_eye_num');
      // TODO: Assemble Python into code variable.
      code =  `np.eye(${text_numpy_eye_num})`;    
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.Python.ORDER_NONE];
    };
    

    //np.max_min 
    Blockly.Python['numpy_max_min'] = function(block) {
      var dropdown_numpy_max_min_option = block.getFieldValue('numpy_max_min_option');
      var value_numpy_max_min_val = Blockly.Python.valueToCode(block, 'numpy_max_min_val', Blockly.Python.ORDER_ATOMIC);
      // TODO: Assemble Python into code variable.
      var code;
      var numpy_max_min_value;
  
      switch (dropdown_numpy_max_min_option){ 
        case "numpy_max" :  
        numpy_max_min_value = 'max';    
        break;       
         
        case "numpy_min" : 
        numpy_max_min_value = 'min';      
        break;    
    
        default :  
        break;   
      } ; 
  
      code =  `np.${numpy_max_min_value}(${value_numpy_max_min_val})`; 
      return [code, Blockly.Python.ORDER_NONE];
    };
    
    
    //np.shape 행렬 차원 반환 
    Blockly.Python['numpy_shape'] = function(block) {
      var value_numpy_shape_num = Blockly.Python.valueToCode(block, 'numpy_shape_num', Blockly.Python.ORDER_ATOMIC);
      // TODO: Assemble Python into code variable.
      var code = `np.shape(${value_numpy_shape_num})`;     
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.Python.ORDER_NONE];
    }; 

     // reshape 행렬 차원 변경 
    Blockly.Python['numpy_reshape'] = function(block) {
      var value_numpy_reshape_val = Blockly.Python.valueToCode(block, 'numpy_reshape_val', Blockly.Python.ORDER_ATOMIC);
      var text_numpy_reshape_struct = block.getFieldValue('numpy_reshape_struct');
      // TODO: Assemble Python into code variable.
      var code = `${value_numpy_reshape_val}.reshape(${text_numpy_reshape_struct})`;    
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.Python.ORDER_NONE];
    };

    //np.flatten 
    Blockly.Python['np_flatten'] = function(block) {
      var value_np_flatten_var = Blockly.Python.valueToCode(block, 'np_flatten_var', Blockly.Python.ORDER_ATOMIC);
      // TODO: Assemble Python into code variable.
      var code = `${value_np_flatten_var}.flatten()`;
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.Python.ORDER_NONE];
    };

    // random.randn  표준정규 분포에 따른 무작위 숫자 생성 
    Blockly.Python['numpy_random_rand'] = function(block) {
      var dropdown_numpy_random_rand_option = block.getFieldValue('numpy_random_rand_Option');
      var text_numpy_random_randn_rows = block.getFieldValue('numpy_random_randn_rows');
      var text_numpy_random_randn_cols = block.getFieldValue('numpy_random_randn_cols');
      // TODO: Assemble Python into code variable.
      var code ; 

      switch (dropdown_numpy_random_rand_option){
        case "numpy_random_randn":
        code = `np.random.randn(${text_numpy_random_randn_rows},${text_numpy_random_randn_cols})`
        break;

        case "numpy_random_randint":
        code = `np.random.randint(${text_numpy_random_randn_rows},${text_numpy_random_randn_cols})`
        break;

        case "numpy_random_rand":
        code = `np.random.rand(${text_numpy_random_randn_rows},${text_numpy_random_randn_cols})`
        break;

        case "numpy_random_sample":
        code = `np.random_sample(${text_numpy_random_randn_rows},${text_numpy_random_randn_cols})`
        break; 

        case "numpy_random_choice":
        code = `np.random.choice(${text_numpy_random_randn_rows},${text_numpy_random_randn_cols})`
        break;
 
        case "numpy_random_seed":
        code = `np.random.seed(${text_numpy_random_randn_rows},${text_numpy_random_randn_cols})`
        break;

        default: 
        break;

        
      }
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.Python.ORDER_NONE];
    };

    // exp 지수    
    Blockly.Python['numpy_exp'] = function(block) { 
      var value_numpy_exp_num = Blockly.Python.valueToCode(block, 'numpy_exp_num', Blockly.Python.ORDER_ATOMIC);
      // TODO: Assemble Python into code variable.
      var code = `np.exp(${value_numpy_exp_num})`;    
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.Python.ORDER_NONE];
    }; 
    //np.mean
    Blockly.Python['np_mean'] = function(block) {
      var value_np_mean_var = Blockly.Python.valueToCode(block, 'np_mean_var', Blockly.Python.ORDER_ATOMIC);
      // TODO: Assemble Python into code variable.
      var code = `np.mean(${value_np_mean_var})`;
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.Python.ORDER_NONE]; 
    };

    //np.diff
    Blockly.Python['np_diff_'] = function(block) {
      var text_np_diff_var_value = block.getFieldValue('np_diff_var_value');
      // TODO: Assemble Python into code variable.
      var code = `np.diff(${text_np_diff_var_value})`; 
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.Python.ORDER_NONE];
    };

    
    //np.append etc
    Blockly.Python['np_arry_change'] = function(block) {
      var dropdown_np_arry_change_option = block.getFieldValue('np_arry_change_Option');
      var value_np_arry_change_var = Blockly.Python.valueToCode(block, 'np_arry_change_var', Blockly.Python.ORDER_ATOMIC);
      var value_np_arry_change_value = Blockly.Python.valueToCode(block, 'np_arry_change_value', Blockly.Python.ORDER_ATOMIC);
      // TODO: Assemble Python into code variable.
      var code ;
      switch(dropdown_np_arry_change_option){  
        case "np_arry_change_append" :
        code = `${value_np_arry_change_var}.append(${value_np_arry_change_value})\n`;  
        break;
 
        case "np_arry_change_extend" : 
        code = `${value_np_arry_change_var}.extend(${value_np_arry_change_value})\n`;  
        break;

        case "np_arry_change_insert" :
        code = `${value_np_arry_change_var}.insert(${value_np_arry_change_value})\n`;  
        break; 

        case "np_arry_change_delete" :
        code = `${value_np_arry_change_var}.delete(${value_np_arry_change_value})\n`;  
        break;

        default:
        break;
      } 
      return code;
    };
    
    //np.prod
    Blockly.Python['np_prod'] = function(block) {
      var text_np_prod_var = block.getFieldValue('np_prod_var');
      // TODO: Assemble JavaScript into code variable.
      var code = `np.prod(${text_np_prod_var})`; 
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    //np.fft
    Blockly.Python['np_fft_fft'] = function(block) {
      var value_np_fft_fft_var = Blockly.JavaScript.valueToCode(block, 'np_fft_fft_var', Blockly.JavaScript.ORDER_ATOMIC);
      // TODO: Assemble JavaScript into code variable.
      var code = `np.fft.fft(${value_np_fft_fft_var})`;  
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.JavaScript.ORDER_NONE]; 
    };

    //np.abs
    Blockly.Python['nump_abs'] = function(block) {
      var value_nump_abs_val = Blockly.Python.valueToCode(block, 'nump_abs_val', Blockly.Python.ORDER_ATOMIC);
      // TODO: Assemble Python into code variable.
      var code = `np.abs(${value_nump_abs_val})`;
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.Python.ORDER_NONE];
    };
    
  
  
  //라이브러리 전체 새로운 것   
    Blockly.Python['import_libs'] = function(block) {
      var dropdown_import_libss = block.getFieldValue('import_libss');
      var value_import_libs_val = Blockly.Python.valueToCode(block, 'import_libs_val', Blockly.Python.ORDER_ATOMIC);
      // TODO: Assemble Python into code variable.
      var code ;

      switch (dropdown_import_libss){    
          case "lib_import_numpy" : 
              code = `import numpy as ${value_import_libs_val}\n`;      
              break;   
            
          case "lib_import_pandas" : 
              code = `import pandas as ${value_import_libs_val}\n`;   
              break;  
            
          case "lib_import_Matplotlib" :
              code = `import matplotlib.pyplot as ${value_import_libs_val}\n`;   
              break;
      
          case "lib_import_io" :   
              code = 'import io\n';             
              break;   
       
          case "lib_import_base64" : 
              code = 'import base64\n';           
              break; 
      
          default : 
          break;  
        }  

      return code;
    };
   
    
    
    //라이브러리 임포트 사이킷런  
    Blockly.Python['lib_import_sklearn'] = function(block) {
      var dropdown_lib_from_a_option = block.getFieldValue('lib_from_a_option');
      var dropdown_lib_import_a_option = block.getFieldValue('lib_import_a_option');
      // TODO: Assemble Python into code variable.
      var code ;
      var sklearn_from;
      var sklearn_import; 
  
    switch (dropdown_lib_from_a_option){
      case "lib_from_sklearn_sklearn" : 
      sklearn_from = `sklearn`;    
      break;      
  
      case "lib_from_sklearn_model_selection" :
      sklearn_from = `sklearn.model_selection`;     
      break;    
  
      case "lib_from_linear_model" :   
      sklearn_from = `sklearn.linear_model`;               
      break;   
  
      case "lib_from_neural_network_model" :  
      sklearn_from = `sklearn.neural_network`;           
      break;  
       
      case "lib_from_naive_bayes" : 
      sklearn_from = `sklearn.naive_bayes`;           
      break;   
       
      case "lib_from_ensemble" : 
      sklearn_from = `sklearn.ensemble`;           
      break; 
  
      default : 
      break; 
    }  
  
    switch (dropdown_lib_import_a_option){
         
  
      case "lib_import_sklearn_ make_classification" :
      sklearn_import = `make_classification`;     
      break;    
  
      case "lib_import_sklearn_ train_test_split" :   
      sklearn_import = `train_test_split`;               
      break;   
  
      case "lib_import_sklearn_LinearRegression" : 
      sklearn_import = `LinearRegression`;           
      break; 
  
      case "lib_import_sklearn_LogisticRegression" : 
      sklearn_import = `LogisticRegression`;           
      break;   

      case "lib_import_sklearn_MLPClassifier" :  
      sklearn_import = `MLPClassifier`;           
      break;   
  
      case "lib_import_sklearn_GaussianNB" : 
      sklearn_import = `GaussianNB`;            
      break;    
  
      case "lib_import_svm" : 
      sklearn_import = `svm`;           
      break; 
  
      case "lib_import_tree" : 
      sklearn_import = `tree`;           
      break; 
  
      case "lib_import_RandomForestClassifier" :  
      sklearn_import = `RandomForestClassifier`;           
      break; 
  
      default : 
      break; 
    }   
  
    code = `from ${sklearn_from} import ${sklearn_import} \n`;
    return code;
    };
   
      
    // 라이브러리  임포트 단순 
    Blockly.Python['lib_import'] = function(block) { 
      var text_lib_import_name = block.getFieldValue('Lib_import_name'); 
      // TODO: Assemble Python into code variable. 
      var code = `import ${text_lib_import_name}\n`;      
      return code;
    }; 
  
    //라이브러리 임포트 as
    Blockly.Python['lib_import_as'] = function(block) { 
      var text_lib_import_name_1 = block.getFieldValue('Lib_import_name_1');
      var text_lib_import_name_second = block.getFieldValue('Lib_import_name_second');  
      // TODO: Assemble Python into code variable.
      var code = `import ${text_lib_import_name_1} as ${text_lib_import_name_second}\n`;   
      return code;
    };  
   
  // 라이브러리 임포트  from
  Blockly.Python['lib_import_from'] = function(block) {
    var text_lib_import_name_from = block.getFieldValue('Lib_import_name_from');
    var text_lib_import2 = block.getFieldValue('Lib_import2');
    // TODO: Assemble Python into code variable.
    var code =`from ${text_lib_import_name_from} import ${text_lib_import2}\n`;   
    return code;
  };  

  
  //print 하기
    Blockly.Python['print'] =
  
    
// pandas, numpy, tuple 시각화
Blockly.Python['val_vi'] = function(block) {
  var dropdown_val_vi_option = block.getFieldValue('Val_VI_Option');
  var value_val_vi_val = Blockly.Python.valueToCode(block, 'Val_VI_Val', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code;
  switch(dropdown_val_vi_option){ 
    case "Val_VI_Pandas" :  
    code = `PN_Visualization = ${value_val_vi_val}.values.tolist()\nPN_Visualization2 = ${value_val_vi_val}.columns\n`;        
    break;
  
    case "Val_VI_Numpy" :  
    code = `PN_Visualization = ${value_val_vi_val}.tolist()\nPN_Visualization2 = ""\n`;     
    break; 

    case "Val_VI_Tuple" :   
    code = `PN_Visualization = list(${value_val_vi_val})\nPN_Visualization2 = ""\n`;          
    break;
 
    default: 
    break; 
  }    
 
  return code;      
}; 
    
   
    //matplot1 
    Blockly.Python['matplotlib_main'] = function(block) {
      var value_matplotlib_main_cols = Blockly.Python.valueToCode(block, 'matplotlib_main_cols', Blockly.Python.ORDER_ATOMIC);
      var value_matplotlib_main_rows = Blockly.Python.valueToCode(block, 'matplotlib_main_rows', Blockly.Python.ORDER_ATOMIC);
      var value_matplotlib_main_screen_size_width = Blockly.Python.valueToCode(block, 'matplotlib_main_screen_size_width', Blockly.Python.ORDER_ATOMIC);
      var value_matplotlib_main_screen_size_height = Blockly.Python.valueToCode(block, 'matplotlib_main_screen_size_height', Blockly.Python.ORDER_ATOMIC);
      // TODO: Assemble Python into code variable.
    //  var test1 =  Blockly.getMainWorkspace().getDisplayText_(value_matplotlib_main_cols);
    //  var test2 =  Blockly.getMainWorkspace().getDisplayText_(value_matplotlib_main_rows);
    
      
      // if(value_matplotlib_main_cols == 1 && value_matplotlib_main_rows == 1){   DL_Gra = "graph_both_1";  }  else{  DL_Gra = 0; }
      // if(value_matplotlib_main_cols == 1 || value_matplotlib_main_rows == 1){   DL_Gra = "graph_or_1";  } else{ DL_Gra = 0; } 
   //   if((DL_Gra !=  "graph_or_1") && (DL_Gra !=  "graph_both_1")){   DL_Gra = 0;  }  

      Check_matplotlib_user_input(value_matplotlib_main_cols,value_matplotlib_main_rows);  


      var code =`fig = plt.figure()     
fig, ax_lst = plt.subplots(${value_matplotlib_main_cols}, ${value_matplotlib_main_rows}, figsize=(8,4) , constrained_layout=True)\n`; 
       return code;   
    };   
    
  //matplot2 _updated_final 
  Blockly.Python['matplotlib_pre_graph'] = function(block) {
    var value_matplotlib_pre_graph_location1 = Blockly.Python.valueToCode(block, 'matplotlib_pre_graph_location1', Blockly.Python.ORDER_ATOMIC);
    var value_matplotlib_pre_graph_location2 = Blockly.Python.valueToCode(block, 'matplotlib_pre_graph_location2', Blockly.Python.ORDER_ATOMIC);
    var text_matplotlib_user_xy = block.getFieldValue('matplotlib_user_xy');
    var dropdown_matplotlib_graph_select = block.getFieldValue('matplotlib_graph_select');
    var text_matplotlib_pre_graph_title = block.getFieldValue('matplotlib_pre_graph_Title');
    var text_matplotlib_pre_graph_xlable = block.getFieldValue('matplotlib_pre_graph_Xlable');
    var text_matplotlib_pre_graph_ylable = block.getFieldValue('matplotlib_pre_graph_Ylable');
    var text_matplotlib_pre_legend = block.getFieldValue('matplotlib_pre_legend');
    var value_matplotlib_pre_color = Blockly.Python.valueToCode(block, 'matplotlib_pre_color', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var matplot_lo ; 
    var matplot_graph; 
    var matplot_line; 
  
    switch(dropdown_matplotlib_graph_select){   
      case "matplotlib_line" : 
      matplot_graph =  "plot"; 
      break;
  
      case "matplotlib_scatter" :
      matplot_graph =  "scatter";  
      break; 
   
      case "matplotlib_bar" :
      matplot_graph = "bar";  
      break;  
  
      case "matplotlib_error_bar" :   
      matplot_graph =  "errorbar";   
      break;
  
      case "matplotlib_box" :  
      matplot_graph =  "boxplot";   
      break;
  
      case "matplotlib_histogram" :  
      matplot_graph =  "hist";    
      break;  
  
      default:  
      break;
    }  
  
  var code ;   

  if(DL_Gra == "graph_or_1"){//둘중 하나 
    code =`ax_lst[${value_matplotlib_pre_graph_location1}].${matplot_graph}( `;  
  }else if(DL_Gra == "graph_both_1"){
    code =`ax_lst.${matplot_graph}( `;  
  }else{
    code =`ax_lst[${value_matplotlib_pre_graph_location1}][${value_matplotlib_pre_graph_location2}].${matplot_graph}(` ;  
  }



  if(dropdown_matplotlib_graph_select == "matplotlib_error_bar"){  
    code = code.concat(`${text_matplotlib_user_xy } ,fmt = "o--" ,capsize= 3, label = "${text_matplotlib_pre_legend}" )`);  
  }else if(dropdown_matplotlib_graph_select == "matplotlib_scatter" ||  dropdown_matplotlib_graph_select == "matplotlib_line"){
      if(value_matplotlib_pre_color.length > 0){
        code = code.concat(`${text_matplotlib_user_xy }, label = "${text_matplotlib_pre_legend}", c = ${value_matplotlib_pre_color} )`);  
      }else{
        code = code.concat(`${text_matplotlib_user_xy }, label = "${text_matplotlib_pre_legend}", c = None )`);  
      }
  // else if(DL_Gra == "graph_both_1" ){ //1,1
  //    code = code.concat(`${text_matplotlib_user_xy }, label = "${text_matplotlib_pre_legend}" )`);       
  }else{  
    if(dropdown_matplotlib_graph_select == "matplotlib_box" ){    
      code = code.concat(`${text_matplotlib_user_xy } )`);   
    }else{ 
      code = code.concat(`${text_matplotlib_user_xy }, label = "${text_matplotlib_pre_legend}" )`);    
    } 
      
  } 


if(DL_Gra == "graph_or_1"){
  code =  code.concat(`\nax_lst[${value_matplotlib_pre_graph_location1}].set_title("${text_matplotlib_pre_graph_title}") 
ax_lst[${value_matplotlib_pre_graph_location1}].set_xlabel("${text_matplotlib_pre_graph_xlable}")
ax_lst[${value_matplotlib_pre_graph_location1}].set_ylabel("${text_matplotlib_pre_graph_ylable}") 
ax_lst[${value_matplotlib_pre_graph_location1}].legend(loc='best')\n`); 
  
}else if(DL_Gra == "graph_both_1"){
  code =  code.concat(`\nax_lst.set_title("${text_matplotlib_pre_graph_title}")
ax_lst.set_xlabel("${text_matplotlib_pre_graph_xlable}")
ax_lst.set_ylabel("${text_matplotlib_pre_graph_ylable}") 
ax_lst.legend(loc='best')\n`);
  
}else{ 
  code =  code.concat(`\nax_lst[${value_matplotlib_pre_graph_location1}][${value_matplotlib_pre_graph_location2}].set_title("${text_matplotlib_pre_graph_title}")
ax_lst[${value_matplotlib_pre_graph_location1}][${value_matplotlib_pre_graph_location2}].set_xlabel("${text_matplotlib_pre_graph_xlable}")
ax_lst[${value_matplotlib_pre_graph_location1}][${value_matplotlib_pre_graph_location2}].set_ylabel("${text_matplotlib_pre_graph_ylable}")
ax_lst[${value_matplotlib_pre_graph_location1}][${value_matplotlib_pre_graph_location2}].legend(loc='best')\n`);  
}

  code=code.concat(`plt.show()\n`);
 return code;
};
  
  //matplot3 
  Blockly.Python['matplotlib_graph_end'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code =`plt.show() 
buf = io.BytesIO()      
fig.savefig(buf, format='png')   
buf.seek(0)
img_str = 'data:image/png;base64,' + base64.b64encode(buf.read()).decode('UTF-8')\n`;
      return code;
  }; 


  //plt.plot()
  Blockly.Python['matplotlib_plt_plot'] = function(block) {
    var value_matplotlib_plt_plot_val = Blockly.Python.valueToCode(block, 'matplotlib_plt_plot_val', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `plt.plot(${value_matplotlib_plt_plot_val})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return code;  
  };

  //plt.show
  Blockly.Python['matplotlib_plt_show'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'plt.show()'; 
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  };

      

  //라이브러리 임포트    
  Blockly.Python['visualization_library'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'lib_var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var libImportIo = "import io\n";
    var libImportBase64 = "import base64\n";
    var code = "import matplotlib.pyplot as plt\n" + libImportIo + libImportBase64;
    return code;
  };
//결과 출력
Blockly.Python['print_output_var'] = function(block) {
  var value_print_output_var1 = Blockly.Python.valueToCode(block, 'print_output_var1', Blockly.Python.ORDER_ATOMIC);
  var value_print_output_var2 = Blockly.Python.valueToCode(block, 'print_output_var2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =`print(${value_print_output_var1} ,${value_print_output_var2})` ;
  return code;
};


//사이킷런 데이터셋 임포트
Blockly.Python['sklearn_datasets_noval'] = function(block) {
  var dropdown_sklearn_datasets_noval_option = block.getFieldValue('sklearn_datasets_noval_Option');
  // TODO: Assemble Python into code variable.
  var code;
  switch (dropdown_sklearn_datasets_noval_option){
    case "sklearn_datasets_noval_Blobs":
    code = "from sklearn.datasets import make_blobs\n"
    break;

    case "sklearn_datasets_noval_Moons":
    code = "from sklearn.datasets import make_moons\n"
    break;

    case "sklearn_datasets_noval_Circles":
    code = "from sklearn.datasets import make_circles\n"
    break;


  }
  return code; 
}; 

//make blobs
Blockly.Python['make_blobs'] = function(block) {
  var value_make_blobs_x = Blockly.Python.valueToCode(block, 'Make_Blobs_X', Blockly.Python.ORDER_ATOMIC);
  var value_make_blobs_y = Blockly.Python.valueToCode(block, 'Make_Blobs_Y', Blockly.Python.ORDER_ATOMIC);
  var text_make_blobs_sample = block.getFieldValue('Make_Blobs_sample');
  var text_make_blobs_feature = block.getFieldValue('Make_Blobs_feature');
  var text_make_blobs_randomstate = block.getFieldValue('Make_Blobs_randomstate');
  // TODO: Assemble Python into code variable.
  var code = `${value_make_blobs_x},${value_make_blobs_y} = make_blobs(n_samples=${text_make_blobs_sample},n_features=${text_make_blobs_feature},random_state=${text_make_blobs_randomstate})\n`;
  return code;
}; 

//make moons
Blockly.Python['make_moons'] = function(block) {
  var value_make_moons_x = Blockly.Python.valueToCode(block, 'make_moons_X', Blockly.Python.ORDER_ATOMIC);
  var value_make_moons_y = Blockly.Python.valueToCode(block, 'make_moons_Y', Blockly.Python.ORDER_ATOMIC);
  var text_make_moons_sample = block.getFieldValue('make_moons_sample');
  var text_make_moons_randomstate = block.getFieldValue('make_moons_randomstate');
  // TODO: Assemble Python into code variable.
  var code = `${value_make_moons_x},${value_make_moons_y}=make_blobs(n_samples = ${text_make_moons_sample}, random_state = ${text_make_moons_randomstate})\n`;
  return code;
}; 

//IsolationForest
Blockly.Python['isolation_forest'] = function(block) {
  var value_isolation_forest_val = Blockly.Python.valueToCode(block, 'Isolation_Forest_val', Blockly.Python.ORDER_ATOMIC);
  var text_isolation_forest_estimators = block.getFieldValue('Isolation_Forest_estimators');
  var text_isolation_forest_connection = block.getFieldValue('Isolation_Forest_connection');
  var text_isolation_forest_randomstate = block.getFieldValue('Isolation_Forest_randomstate');
  // TODO: Assemble Python into code variable.
  var code = `${value_isolation_forest_val} = IsolationForest(n_estimators = ${text_isolation_forest_estimators}, contamination = ${text_isolation_forest_connection}, random_state = ${text_isolation_forest_randomstate})\n`;
  return code;
};

//import knn
Blockly.Python['import_knn'] = function(block) {
  var dropdown_import_knn_option = block.getFieldValue('Import_KNN_Option');
  // TODO: Assemble Python into code variable.
  var code;
  switch (dropdown_import_knn_option){
    case "Import_KNN_KMeans":
    code ="from sklearn.cluster import KMeans\n";
    break;

    case "Import_KNN_DBSCAN":
    code ="from sklearn.cluster import DBSCAN\n";
    break;

  }
  return code;
};

Blockly.Python['k_means_inertia'] = function(block) {
  var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_model + '.inertia_';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['k_means_centroid'] = function(block) {
  var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_model + '.cluster_centers_';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//dbscan
Blockly.Python['dbscan'] = function(block) {
  var value_dbscan_val = Blockly.Python.valueToCode(block, 'DBSCAN_val', Blockly.Python.ORDER_ATOMIC);
  var text_dbscan_eps = block.getFieldValue('DBSCAN_EPS');
  // TODO: Assemble Python into code variable.
  var code = `${value_dbscan_val} = DBSCAN( eps = ${text_dbscan_eps} )\n`;
  return code;
};

//metrics_fit_predict
Blockly.Python['metrics_fit_predict'] = function(block) {
  var value_metrics_fit_predict_val = Blockly.Python.valueToCode(block, 'metrics_fit_predict_val', Blockly.Python.ORDER_ATOMIC);
  var value_metrics_fit_predict_xdata = Blockly.Python.valueToCode(block, 'metrics_fit_predict_Xdata', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =`${value_metrics_fit_predict_val}.fit_predict(${value_metrics_fit_predict_xdata})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

//classification_report
Blockly.Python['classification_report'] = function(block) {
  var value_classification_report_y_true = Blockly.Python.valueToCode(block, 'classification_report_Y_true', Blockly.Python.ORDER_ATOMIC);
  var value_classification_report_y_pred = Blockly.Python.valueToCode(block, 'classification_report_y_pred', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `classification_report( ${value_classification_report_y_true}, ${value_classification_report_y_pred})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

//클래스 함수
Blockly.Python['class_func'] = function(block) {
  var text_class_func_name = block.getFieldValue('class_func_name');
  var value_class_func_val = Blockly.Python.valueToCode(block, 'class_func_val', Blockly.Python.ORDER_ATOMIC);
  var statements_class_func_state = Blockly.Python.statementToCode(block, 'class_func_state');
  // TODO: Assemble Python into code variable.
  var code = `def ${text_class_func_name}(${value_class_func_val}):
${statements_class_func_state}\n`;
  return code;
};

//클래스 함수 return
Blockly.Python['class_func_return'] = function(block) {
  var text_class_func_return_classname = block.getFieldValue('class_func_return_className');
  var value_class_func_return_param = Blockly.Python.valueToCode(block, 'class_func_return_param', Blockly.Python.ORDER_ATOMIC);
  var statements_class_func_return = Blockly.Python.statementToCode(block, 'class_func_return');
  var value_class_func_return_val = Blockly.Python.valueToCode(block, 'class_func_return_val', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `def ${text_class_func_return_classname}(${value_class_func_return_param}):
${statements_class_func_return}
  return ${value_class_func_return_val};\n`; 
  return code;
};

//클래스 =
Blockly.Python['class_equ'] = function(block) {
  var value_class_equ_val1 = Blockly.Python.valueToCode(block, 'class_equ_val1', Blockly.Python.ORDER_ATOMIC);
  var text_class_equ_val2 = block.getFieldValue('class_equ_val2');
  // TODO: Assemble Python into code variable.
  var code = `${value_class_equ_val1} = ${text_class_equ_val2}\n`;
  return code; 
};
 

//객체 함수 
Blockly.Python['class_instance_function'] = function(block) { 
  var text_class_instance = block.getFieldValue('class_instance');
  var value_class_instance_function = Blockly.Python.valueToCode(block, 'class_instance_functions', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${text_class_instance}.(${value_class_instance_function})\n`;
  return code;
};
Blockly.Python['class_instance_function'] = function(block) {
  var value_class_instanceval = Blockly.Python.valueToCode(block, 'class_instanceVal', Blockly.Python.ORDER_ATOMIC);
  var text_class_instance_argument = block.getFieldValue('class_instance_argument');
  var value_class_instance_functions = Blockly.Python.valueToCode(block, 'class_instance_functions', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_class_instanceval}.${text_class_instance_argument}(${value_class_instance_functions})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE]; 
};



//클래스 함수 매개변수  
Blockly.Python['class_func_param'] = function (a) {
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++)
     b[c] = Blockly.Python.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "self";
  return [b.join(", "), Blockly.Python.ORDER_ATOMIC]
};



//클래스 함수 statement 형식 
// Blockly.Python['class_func'] = function(block) {
//   var text_class_func_name = block.getFieldValue('class_func_name');
//   var statements_class_func_state = Blockly.Python.statementToCode(block, 'class_func_state');
//   var elements = new Array(block.itemCount_);
//   for (var i = 0; i < block.itemCount_; i++) {
//     elements[i] = Blockly.Python.valueToCode(block, 'ADD' + i,
//     Blockly.Python.ORDER_NONE) || 'self';
//   // TODO: Assemble Python into code variable.
//   };
//  // var code = value_name + '(' + elements.join(')[') + ']'; 
//   var code = `${text_class_func_name} ( ${elements.join(',')} ) :
// ${statements_class_func_state}\n`;
 
//   return code;
// };

//클롤링 url 가져오기 
Blockly.Python['script_block'] = function(block) {
  var dropdown_script_block_option = block.getFieldValue('Script_Block_Option');
  // TODO: Assemble Python into code variable.
  var code;
  var url;
  var html;

  socket.on("Scripts_Get_URL", function(data) {
    html = data; 
  }); 

  switch(dropdown_script_block_option){   
    case "Script_block_naver":
    url = "https://order.pay.naver.com/home"// + encodeURI("코로나"); //+ "&start=" ;
    break;

    case "Script_block_melon": 
    url = "https://www.melon.com/chart/week/index.html" ;    
    break;  

   default:  
   console.log("error");  
   }  
 
  code = `#from urllib.request import urlopen
from bs4 import BeautifulSoup
#html = urlopen("${url}")  
bsObject = BeautifulSoup(${html}, "html.parser") 
print(bsObject) # 웹 문서 전체가 출력됩니다. ` 

  
  return code;
};

