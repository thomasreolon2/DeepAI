//클래스 선언
Blockly.JavaScript['python_class'] = function(block) {
  var text_python_class_statement_name = block.getFieldValue('Python_Class_statement_name');
  var statements_python_class_statement = Blockly.JavaScript.statementToCode(block, 'Python_Class_statement');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
}; 
//객체 
Blockly.JavaScript['class_refer'] = function(block) {
  var value_class_refer_classname = Blockly.JavaScript.valueToCode(block, 'class_refer_className', Blockly.JavaScript.ORDER_ATOMIC);
  var text_class_refer_val = block.getFieldValue('class_refer_val');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//객체 위아래
Blockly.JavaScript['class_instance'] = function(block) {
  var value_class_instance_val = Blockly.JavaScript.valueToCode(block, 'class_instance_val', Blockly.JavaScript.ORDER_ATOMIC);
  var text_class_instance_value = block.getFieldValue('class_instance_value');
  var value_class_instance_input = Blockly.JavaScript.valueToCode(block, 'class_instance_input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


//넘파이 라이브러리 
Blockly.JavaScript['numpy_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

//데이터 CSV로 저장
Blockly.JavaScript['data_to_csv'] = function (block) {
  var value_value_data_to_csv_dataval = Blockly.JavaScript.valueToCode(block, 'value_data_to_csv_dataval', Blockly.JavaScript.ORDER_ATOMIC);
  var text_value_value_data_to_csv_name = block.getFieldValue('value_value_data_to_csv_name');
  // TODO: Assemble JavaScript into code variable.
  var testing = block.getFieldValue('value_value_data_to_csv_name');

  //text_value_value_data_to_csv_name = text_value_value_data_to_csv_name.slice(1,-1); 
  var code = `data_to_csv_value = pyodide.pyimport('data_to_csv_value');\nexportToCsv('${testing}.csv',data_to_csv_value); `; //${text_value_value_data_to_csv_name}.csv,   
  return code;
};


// .list 데이터 리스트 변환 
Blockly.JavaScript['data_conversion'] = function (block) {
  var value_data_conversion_var = Blockly.JavaScript.valueToCode(block, 'Data_Conversion_var', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_data_conversion_option = block.getFieldValue('Data_Conversion_Option');
  // TODO: Assemble JavaScript into code variable.
  var code = "\n";
  return code;
};

//np.concatenate
Blockly.JavaScript['np_concatenate'] = function (block) {
  var text_np_concatenate_var1 = block.getFieldValue('np_concatenate_var1');
  var text_np_concatenate_var2 = block.getFieldValue('np_concatenate_var2');
  // TODO: Assemble JavaScript into code variable.
  var code = "\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


// 배열 생성 
Blockly.JavaScript['create_arry'] = function (block) {
  var text_create_arry_val = block.getFieldValue('Create_arry_val');
  // TODO: Assemble JavaScript into code variable. 
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.  
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// np.arry  
Blockly.JavaScript['np_array'] = function (block) {
  var value_np_array_val = Blockly.Python.valueToCode(block, 'np_array_val', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "\n";
  // TODO: Change ORDER_NONE to the correct strength. 
  return [code, Blockly.Python.ORDER_NONE];
};

//np.arange  
Blockly.JavaScript['np_arrange'] = function (block) {
  var text_np_arrange_value1 = block.getFieldValue('np_arrange_value1');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy 함수 zeros 배열생성,   
Blockly.JavaScript['numpy_zeros'] = function (block) {
  var text_numpy_zeros_num_1 = block.getFieldValue('numpy_zeros_num_1');
  var text_numpy_zeros_num_2 = block.getFieldValue('numpy_zeros_num_2');
  var dropdown_numpy_zeros_option = block.getFieldValue('numpy_zeros_Option');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

// full 배열 생성 , 채워질 값  
Blockly.JavaScript['numpy_full'] = function (block) {
  var text_numpy_full_rows = block.getFieldValue('numpy_full_rows');
  var text_numpy_full_cols = block.getFieldValue('numpy_full_cols');
  var text_numpy_full_num = block.getFieldValue('numpy_full_num');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


// eye 배열생성 과 동시에, 대각선 1로 채우기
Blockly.JavaScript['numpy_eye'] = function (block) {
  var text_numpy_eye_num = block.getFieldValue('numpy_eye_num');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


// np.max_min  최대 값,최소 값 찾기
Blockly.JavaScript['numpy_max_min'] = function (block) {
  var dropdown_numpy_max_min_option = block.getFieldValue('numpy_max_min_option');
  var value_numpy_max_min_val = Blockly.JavaScript.valueToCode(block, 'numpy_max_min_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//np.shape 행렬 차원 반환 
Blockly.JavaScript['numpy_shape'] = function (block) {
  var value_numpy_shape_num = Blockly.JavaScript.valueToCode(block, 'numpy_shape_num', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// reshpae 행렬 차원 변경 
Blockly.JavaScript['numpy_reshape'] = function (block) {
  var value_numpy_reshape_val = Blockly.JavaScript.valueToCode(block, 'numpy_reshape_val', Blockly.JavaScript.ORDER_ATOMIC);
  var text_numpy_reshape_struct = block.getFieldValue('numpy_reshape_struct');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//np.flatten 
Blockly.JavaScript['np_flatten'] = function (block) {
  var value_np_flatten_var = Blockly.JavaScript.valueToCode(block, 'np_flatten_var', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// random.randn  표준정규 분포에 따른 무작위 숫자 생성 
Blockly.JavaScript['numpy_random_rand'] = function (block) {
  var dropdown_numpy_random_rand_option = block.getFieldValue('numpy_random_rand_Option');
  var text_numpy_random_randn_rows = block.getFieldValue('numpy_random_randn_rows');
  var text_numpy_random_randn_cols = block.getFieldValue('numpy_random_randn_cols');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



// exp 지수  
Blockly.JavaScript['numpy_exp'] = function (block) {
  var value_numpy_exp_num = Blockly.JavaScript.valueToCode(block, 'numpy_exp_num', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "\n";
  // TODO: Change ORDER_NONE to the correct strength. 
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//np.mean
Blockly.JavaScript['np_mean'] = function (block) {
  var value_np_mean_var = Blockly.JavaScript.valueToCode(block, 'np_mean_var', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//np.diff
Blockly.JavaScript['np_diff_'] = function (block) {
  var text_np_diff_var_value = block.getFieldValue('np_diff_var_value');
  // TODO: Assemble JavaScript into code variable.
  var code = "\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//np.append etc
Blockly.JavaScript['np_arry_change'] = function (block) {
  var dropdown_np_arry_change_option = block.getFieldValue('np_arry_change_Option');
  var value_np_arry_change_var = Blockly.JavaScript.valueToCode(block, 'np_arry_change_var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_np_arry_change_value = Blockly.JavaScript.valueToCode(block, 'np_arry_change_value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

//np.prod
Blockly.JavaScript['np_prod'] = function (block) {
  var text_np_prod_var = block.getFieldValue('np_prod_var');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//np.fft
Blockly.JavaScript['np_fft_fft'] = function (block) {
  var value_np_fft_fft_var = Blockly.JavaScript.valueToCode(block, 'np_fft_fft_var', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



//라이브러리 임포트 사이킷런 
Blockly.JavaScript['lib_import_sklearn'] = function (block) {
  var dropdown_lib_from_a_option = block.getFieldValue('lib_from_a_option');
  var dropdown_lib_import_a_option = block.getFieldValue('lib_import_a_option');
  // TODO: Assemble Python into code variable.

  var code = '\n';
  return code;
};


// 라이브러리  임포트 단순 
Blockly.JavaScript['lib_import'] = function (block) {
  var text_lib_import_name = block.getFieldValue('Lib_import_name');
  // TODO: Assemble Python into code variable. 
  var code = "\n";
  return code;
};

//라이브러리 임포트 as
Blockly.JavaScript['lib_import_as'] = function (block) {
  var text_lib_import_name_1 = block.getFieldValue('Lib_import_name_1');
  var text_lib_import_name_second = block.getFieldValue('Lib_import_name_second');
  // TODO: Assemble Python into code variable.
  var code = "\n";
  return code;
};

// 라이브러리 임포트  from
Blockly.JavaScript['lib_import_from'] = function (block) {
  var text_lib_import_name_from = block.getFieldValue('Lib_import_name_from');
  var text_lib_import2 = block.getFieldValue('Lib_import2');
  // TODO: Assemble Python into code variable.
  var code = ' ';
  return code;
};



// pandas, numpy 시각화 
Blockly.JavaScript['val_vi'] = function (block) {
  var dropdown_val_vi_option = block.getFieldValue('Val_VI_Option');
  var value_val_vi_val = Blockly.Python.valueToCode(block, 'Val_VI_Val', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "PN_Visualization = pyodide.pyimport('PN_Visualization');\n"
    + "PN_Visualization2 = pyodide.pyimport('PN_Visualization2');\n"
    + "draw_table(PN_Visualization, PN_Visualization2);\n";
  return code;
};

//matplotlib 1
Blockly.JavaScript['matplotlib_main'] = function (block) {
  var value_matplotlib_main_cols = Blockly.JavaScript.valueToCode(block, 'matplotlib_main_cols', Blockly.JavaScript.ORDER_ATOMIC);
  var value_matplotlib_main_rows = Blockly.JavaScript.valueToCode(block, 'matplotlib_main_rows', Blockly.JavaScript.ORDER_ATOMIC);
  var value_matplotlib_main_screen_size_width = Blockly.JavaScript.valueToCode(block, 'matplotlib_main_screen_size_width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_matplotlib_main_screen_size_height = Blockly.JavaScript.valueToCode(block, 'matplotlib_main_screen_size_height', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "\n";
  return code;
};

//matplot2 수정
Blockly.JavaScript['matplotlib_pre_graph'] = function (block) {
  var value_matplotlib_pre_graph_location1 = Blockly.JavaScript.valueToCode(block, 'matplotlib_pre_graph_location1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_matplotlib_pre_graph_location2 = Blockly.JavaScript.valueToCode(block, 'matplotlib_pre_graph_location2', Blockly.JavaScript.ORDER_ATOMIC);
  var text_matplotlib_user_xy = block.getFieldValue('matplotlib_user_xy');
  var dropdown_matplotlib_graph_select = block.getFieldValue('matplotlib_graph_select');
  var text_matplotlib_pre_graph_title = block.getFieldValue('matplotlib_pre_graph_Title');
  var text_matplotlib_pre_graph_xlable = block.getFieldValue('matplotlib_pre_graph_Xlable');
  var text_matplotlib_pre_graph_ylable = block.getFieldValue('matplotlib_pre_graph_Ylable');
  var text_matplotlib_pre_legend = block.getFieldValue('matplotlib_pre_legend');
  var value_matplotlib_pre_color = Blockly.JavaScript.valueToCode(block, 'matplotlib_pre_color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "\n";
  return code;
};

//matplot3
Blockly.JavaScript['matplotlib_graph_end'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'document.getElementById("pyplotfigure").src = pyodide.globals.img_str;';
  return code;
};

Blockly.JavaScript['visualization_library'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'lib_var', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var libImportIo = "import io\n";
  var libImportBase64 = "import base64\n";
  var code = "\n";
  return code;
};


//결과 출력
Blockly.JavaScript['print_output_var'] = function (block) {
  var value_print_output_var1 = Blockly.JavaScript.valueToCode(block, 'print_output_var1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_print_output_var2 = Blockly.JavaScript.valueToCode(block, 'print_output_var2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

//make blobs
Blockly.JavaScript['make_blobs'] = function(block) {
  var value_make_blobs_x = Blockly.JavaScript.valueToCode(block, 'Make_Blobs_X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_make_blobs_y = Blockly.JavaScript.valueToCode(block, 'Make_Blobs_Y', Blockly.JavaScript.ORDER_ATOMIC);
  var text_make_blobs_sample = block.getFieldValue('Make_Blobs_sample');
  var text_make_blobs_feature = block.getFieldValue('Make_Blobs_feature');
  var text_make_blobs_randomstate = block.getFieldValue('Make_Blobs_randomstate');
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
}; 

//
Blockly.JavaScript['sklearn_datasets_noval'] = function(block) {
  var dropdown_sklearn_datasets_noval_option = block.getFieldValue('sklearn_datasets_noval_Option');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

//make moons
Blockly.JavaScript['make_moons'] = function(block) {
  var value_make_moons_x = Blockly.JavaScript.valueToCode(block, 'make_moons_X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_make_moons_y = Blockly.JavaScript.valueToCode(block, 'make_moons_Y', Blockly.JavaScript.ORDER_ATOMIC);
  var text_make_moons_sample = block.getFieldValue('make_moons_sample');
  var text_make_moons_randomstate = block.getFieldValue('make_moons_randomstate');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

//IsolationForest
Blockly.JavaScript['isolation_forest'] = function(block) {
  var value_isolation_forest_val = Blockly.JavaScript.valueToCode(block, 'Isolation_Forest_val', Blockly.JavaScript.ORDER_ATOMIC);
  var text_isolation_forest_estimators = block.getFieldValue('Isolation_Forest_estimators');
  var text_isolation_forest_connection = block.getFieldValue('Isolation_Forest_connection');
  var text_isolation_forest_randomstate = block.getFieldValue('Isolation_Forest_randomstate');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

//import knn
Blockly.JavaScript['import_knn'] = function(block) {
  var dropdown_import_knn_option = block.getFieldValue('Import_KNN_Option');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

//dbscan
Blockly.JavaScript['dbscan'] = function(block) {
  var value_dbscan_val = Blockly.JavaScript.valueToCode(block, 'DBSCAN_val', Blockly.JavaScript.ORDER_ATOMIC);
  var text_dbscan_eps = block.getFieldValue('DBSCAN_EPS');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


//matrix_fit_predict
Blockly.JavaScript['metrics_fit_predict'] = function(block) {
  var value_metrics_fit_predict_val = Blockly.JavaScript.valueToCode(block, 'metrics_fit_predict_val', Blockly.JavaScript.ORDER_ATOMIC);
  var value_metrics_fit_predict_xdata = Blockly.JavaScript.valueToCode(block, 'metrics_fit_predict_Xdata', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//classification_report
Blockly.JavaScript['classification_report'] = function(block) {
  var value_classification_report_y_true = Blockly.JavaScript.valueToCode(block, 'classification_report_Y_true', Blockly.JavaScript.ORDER_ATOMIC);
  var value_classification_report_y_pred = Blockly.JavaScript.valueToCode(block, 'classification_report_y_pred', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};