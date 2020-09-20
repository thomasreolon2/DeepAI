////////////////////////////////////////////////////////////////////
// 2020-09-03 Pandas Code Generation 2학년 파트
////////////////////////////////////////////////////////////////////

Blockly.Python['csv_library'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'pan_lib_var', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "import pandas as pd\n";
  return code;
};

Blockly.Python['load_csv'] = function (block) {
  var value_var = Blockly.Python.valueToCode(block, 'pan_lod_var', Blockly.Python.ORDER_ATOMIC);
  var value_load = Blockly.Python.valueToCode(block, 'LOAD', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript Python code variable.
  // var code =  value_var +'.read_csv(' + value_load + ')';
  var code = value_var + '.read_csv(pyodide.open_url(' + value_load + '))';
  return [code, Blockly.Python.ORDER_NONE];
};

//2020-09-19 양승국 수정
Blockly.Python['fill_null_data'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + '=' + value_name + '.fillna(' + value_name + dropdown_name + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['pyo_lib'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = 'import pyodide \n';
  return code;
};

// 정규화
//2020-09-19 양승국 수정
Blockly.Python['normal'] = function (block) {
  var value_normalization_data = Blockly.Python.valueToCode(block, 'Normalization_data', Blockly.Python.ORDER_ATOMIC);
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = value_normalization_data + '["' + text_name + '"]' + '=(' + value_normalization_data + '["' + text_name + '"]' + '-' + value_normalization_data + '["' + text_name + '"]' + '.mean())' + '/' + value_normalization_data + '["' + text_name + '"]' + '.std()' + '\n';
  return code;
};

// 헤더 삭제하기
Blockly.Python['deletehead'] = function (block) {
  var value_delete_header = Blockly.Python.valueToCode(block, 'delete_header', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

//2020-09-20 양승국 수정 columns = df_covid.colums[[1,2,3,4]]
Blockly.Python['select_row_delete'] = function (block) {
  var value_select_data = Blockly.Python.valueToCode(block, 'select_data', Blockly.Python.ORDER_ATOMIC);
  var value_select_drop = block.getFieldValue('select_drop');
  var dropdown_name = block.getFieldValue('srd_NAME');
  // TODO: Assemble Python into code variable.
  if(dropdown_name == 1) var code = value_select_data + '=' + value_select_data + '.drop([' + value_select_drop + '], axis = 0' + ')\n';
  else if(dropdown_name == 2) var code = value_select_data + '=' + value_select_data + '.drop(' + 'columns = ' + value_select_data +'.columns[[' + value_select_drop + ']], axis = 1)\n';
  return code;
};

Blockly.Python['leave_row_data'] = function (block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var value_select_row = Blockly.Python.valueToCode(block, 'select_row', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '.loc[' + value_select_row + ']';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['leave_column_data'] = function (block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var value_select_column = Blockly.Python.valueToCode(block, 'select_column', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '[' + value_select_column + ']\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['save_data'] = function (block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

//이미지 담기 제외
// Blockly.Python['save_image'] = function(block) {
//   var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble Python into code variable.
//   var code = '...\n';
//   return code;
// };

//2020-09-19 양승국
Blockly.Python['list'] = function (block) {
  var value_input_data = Blockly.Python.valueToCode(block, 'input_data', Blockly.Python.ORDER_ATOMIC);
  var value_out_data = Blockly.Python.valueToCode(block, 'out_data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_input_data + '=' + value_out_data + '.values.tolist()\n';
  return code;
};

//2020-09-19 양승국
Blockly.Python['header'] = function (block) {
  var value_inv = Blockly.Python.valueToCode(block, 'header_input_var', Blockly.Python.ORDER_ATOMIC);
  var value_hov = Blockly.Python.valueToCode(block, 'header_output_var', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_inv + '=' + 'list(' + value_hov + '.columns.values)\n';
  return code;
};

//2020-09-19 양승국
Blockly.Python['select_row_list'] = function (block) {
  var value_list_data = Blockly.Python.valueToCode(block, 'list_data', Blockly.Python.ORDER_ATOMIC);
  var text_name = block.getFieldValue('list_val');
  var dropdown_name = block.getFieldValue('srd_NAME');
  // TODO: Assemble Python into code variable.
  if (dropdown_name == 1) var code =  value_list_data + '.loc[[' + text_name + ']]\n';
  else if (dropdown_name == 2) var code =  value_list_data + '[' + value_list_data +'.columns[[' + text_name + ']]]';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['select_column_list'] = function (block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var value_select_column_locate = Blockly.Python.valueToCode(block, 'select_column_locate', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '[' + value_select_column_locate + ']';
  return [code, Blockly.Python.ORDER_NONE];
};

//2020-09-19 양승국 코드수정
Blockly.Python['select_row_column_value'] = function (block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_data', Blockly.Python.ORDER_ATOMIC);
  var value_select_row_locate = Blockly.Python.valueToCode(block, 'select_row_locate', Blockly.Python.ORDER_ATOMIC);
  var value_select_column_locate = Blockly.Python.valueToCode(block, 'select_column_locate', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '.iloc[' + value_select_row_locate + ',' + value_select_column_locate + ']\n';
  return [code, Blockly.Python.ORDER_NONE];
};

//2020-09-19 양승국 수정
Blockly.Python['row_count'] = function (block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('count');
  // TODO: Assemble Python into code variable.
  var code = value_select_value + dropdown_name + '\n';
  return [code, Blockly.Python.ORDER_NONE];
};

// Blockly.Python['image_list'] = function(block) {
//   var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble Python into code variable.
//   var code = '...\n';
//   return code;
// };

Blockly.Python['count_label'] = function (block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

//2020-09-18 양승국 수정
Blockly.Python['pandas_datalist'] = function (block) {
  var value_frm_var = Blockly.Python.valueToCode(block, 'frm_var', Blockly.Python.ORDER_ATOMIC);
  var value_data_lst = Blockly.Python.valueToCode(block, 'data_lst', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_frm_var + ' = list(zip( ' + value_data_lst + '));\n';
  return code;
};

//2020-09-19 양승국
Blockly.Python['pandas_dataframe'] = function (block) {
  var value_df_va = Blockly.Python.valueToCode(block, 'df_va', Blockly.Python.ORDER_ATOMIC);
  var value_lst = Blockly.Python.valueToCode(block, 'lst', Blockly.Python.ORDER_ATOMIC);
  var text_name = block.getFieldValue('col_name');
  var code = value_df_va + ' = ' + 'pd.DataFrame(data = ' + value_lst + ', columns =[' + text_name + '])\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//2020-09-19 양승국 수정
Blockly.Python['csvdataframe_J'] = function (block) {
  var value_input_var = Blockly.Python.valueToCode(block, 'input_var', Blockly.Python.ORDER_ATOMIC);
  var value_csv = Blockly.Python.valueToCode(block, 'csv', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_input_var + ' = pd.DataFrame(' + value_csv + ')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//20.09.09 이성주 - 컬럼 블록 추가
Blockly.Python['createColumn'] = function (a) {
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.Python.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "None";
    return [b.join(", "), Blockly.Python.ORDER_ATOMIC]
};

//2020-09-19 양승국
Blockly.Python['pandas_conversion'] = function (block) {
  var value_pa_frm = Blockly.Python.valueToCode(block, 'pa_frm', Blockly.Python.ORDER_ATOMIC);
  var value_pa_cul = Blockly.Python.valueToCode(block, 'pa_cul', Blockly.Python.ORDER_ATOMIC);
  var value_pa_data = Blockly.Python.valueToCode(block, 'pa_data', Blockly.Python.ORDER_ATOMIC);
  var value_pa_chidata = Blockly.Python.valueToCode(block, 'pa_chidata', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_pa_frm + '.loc[' + value_pa_frm + '[' + value_pa_cul + '] ==' + value_pa_data + ', ' + value_pa_cul
    + '] = ' + value_pa_chidata + ';\n';
  return code;
};

//2020-09-19 양승국 수정
Blockly.Python['pandas_mis_del'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'DATA_del', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('DEL_NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + '=' + value_name + dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//2020-09-10 양승국 추가
Blockly.Python['selec_value_all'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = ':';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//2020-09-13 양승국 추가
Blockly.Python['iloc_range'] = function (block) {
  var text_st_range = block.getFieldValue('st_range');
  var text_ed_range = block.getFieldValue('ed_range');
  // TODO: Assemble Python into code variable.
  var code = text_st_range + ':' + text_ed_range;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


//2020-09-16 양승국 추가
Blockly.Python['nm'] = function (block) {
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var value_anymore = Blockly.Python.valueToCode(block, 'anymore', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_data + "=" + value_anymore + '\n';
  return code;
};

//2020-09-20 양승국 
Blockly.Python['pandas_series'] = function (block) {
  var value_ser_var = Blockly.Python.valueToCode(block, 'ser_var', Blockly.Python.ORDER_ATOMIC);
  var value_ser_data = Blockly.Python.valueToCode(block, 'ser_data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_ser_var + '='  + 'pd.Series(' + value_ser_data + ')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//2020-09-16 양승국 추가
Blockly.Python['pandas_series_data'] = function (a) {
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.Python.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "None";
  return ["{" + b.join(", ") + "}", Blockly.Python.ORDER_ATOMIC]

};

//2020-09-19 양승국 추가
Blockly.Python['pandas_concat'] = function (block) {
  var value_cat_vl = Blockly.Python.valueToCode(block, 'cat_vl', Blockly.Python.ORDER_ATOMIC);
  var value_data1 = Blockly.Python.valueToCode(block, 'data1', Blockly.Python.ORDER_ATOMIC);
  var value_data2 = Blockly.Python.valueToCode(block, 'data2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('PLEUS_NAME');
  // TODO: Assemble Python into code variable.
  var code = value_cat_vl + '=' + 'pd.concat([' + value_data1 + value_data2 + ']' + dropdown_name + ')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//2020-09-19 양승국 추가
Blockly.Python['pandas_merge'] = function (block) {
  var value_mer_var = Blockly.Python.valueToCode(block, 'mer_var', Blockly.Python.ORDER_ATOMIC);
  var value_plus_data1 = Blockly.Python.valueToCode(block, 'plus_data1', Blockly.Python.ORDER_ATOMIC);
  var value_plus_data2 = Blockly.Python.valueToCode(block, 'plus_data2', Blockly.Python.ORDER_ATOMIC);
  var value_connet_way = Blockly.Python.valueToCode(block, 'connet_way', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_mer_var + '=' + 'pd.merge(' + value_plus_data1 + ', ' + value_plus_data2 + ', ' + value_connet_way + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//2020-09-19 양승국 추가
Blockly.Python['pandas_merge_oncol'] = function (block) {
  var text_name = block.getFieldValue('mer_NAME');
  // TODO: Assemble Python into code variable.
  var code = 'on="' + text_name + '"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//2020-09-19 양승국 추가
Blockly.Python['pandas_merge_lron'] = function (block) {
  var text_mer_LNAME = block.getFieldValue('mer_LNAME');
  var text_mer_RNAME = block.getFieldValue('mer_RNAME');
  // TODO: Assemble Python into code variable.
  var code = 'left_on="' + text_mer_LNAME + '" , right_on="' + text_mer_RNAME + '"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//20. 09. 19 이성주
////GroupBy 추가
Blockly.Python['groupby_series'] = function (block) {
  var value_series_or_dataframe = Blockly.Python.valueToCode(block, 'Series_or_Dataframe', Blockly.Python.ORDER_ATOMIC);
  var value_colname = Blockly.Python.valueToCode(block, 'colName', Blockly.Python.ORDER_ATOMIC);
  var dropdown_function = block.getFieldValue('function');
  // TODO: Assemble Python into code variable.
  var code = value_series_or_dataframe + '.groupby(' + value_colname + ')' + dropdown_function;
  return [code, Blockly.Python.ORDER_NONE];
};

//2020-09-19 이성주
Blockly.Python['groupby_dataFrame'] = function (block) {
  var value_series_or_dataframe = Blockly.Python.valueToCode(block, 'Series_or_Dataframe', Blockly.Python.ORDER_ATOMIC);
  var value_colname = Blockly.Python.valueToCode(block, 'colName', Blockly.Python.ORDER_ATOMIC);
  var dropdown_function = block.getFieldValue('function');
  // TODO: Assemble Python into code variable.
  var code = value_series_or_dataframe + '.groupby(' + value_colname + ')' + dropdown_function;
  return [code, Blockly.Python.ORDER_NONE];
};

//2020-09-19 이성주
Blockly.Python['groupby_series_'] = function (a) {
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.Python.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "None";
  return ['[' + b.join(", ") + ']', Blockly.Python.ORDER_ATOMIC]

};

////////////////////////////////////////////////////////////////////
// Pandas 2학년 파트 끝
////////////////////////////////////////////////////////////////////

// 결측치 조회
Blockly.Python['missing_value_inquiry'] = function (block) {
  var variable_data = Blockly.Python.valueToCode(block, 'mis_data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  ;
  var code = "pd.DataFrame(" + variable_data + '.isnull().sum())\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
// 통계 정보 조회
Blockly.Python['stats_inquiry'] = function (block) {
  var variable_data = Blockly.Python.valueToCode(block, 'inq_data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "pd.DataFrame(" + variable_data + ').describe()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
// array
Blockly.Python['array_select'] = function (block) {
  // Create a list with any number of elements of any type.
  var value_name = Blockly.Python.valueToCode(block, 'array_var', Blockly.Python.ORDER_ATOMIC);
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = Blockly.Python.valueToCode(block, 'ADD' + i,
      Blockly.Python.ORDER_NONE) || 'None';
    // elements[i] = block.getFieldValue('ADD' + i) || 'None';
  }
  var code = value_name + '[' + elements.join('][') + ']';
  return [code, Blockly.Python.ORDER_ATOMIC];
};