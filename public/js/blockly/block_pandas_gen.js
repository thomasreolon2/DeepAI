////////////////////////////////////////////////////////////////////
// 2020-09-03 Pandas Code Generation 2학년 파트
////////////////////////////////////////////////////////////////////

Blockly.Python['csv_library'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'pan_lib_var', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "import pandas as" + " "  + value_name.replace("'"," ")+ "\n";
  return code;
};

Blockly.Python['load_csv'] = function(block) {
  var value_var = Blockly.Python.valueToCode(block, 'pan_lod_var', Blockly.Python.ORDER_ATOMIC);
  var value_load = Blockly.Python.valueToCode(block, 'LOAD', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript Python code variable.
  // var code =  value_var +'.read_csv(' + value_load + ')';
  var code = value_var+'.read_csv(pyodide.open_url('+value_load+'))';
  return [code, Blockly.Python.ORDER_NONE];
};

//2020-09-16 양승국 수정
Blockly.Python['fill_null_data'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + '.fillna(' + value_name  + dropdown_name + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['pyo_lib'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import pyodide \n';
  return code;
};

// 정규화
//2020-09-10 양승국 수정
Blockly.Python['normal'] = function(block) {  
  var value_normalization_data = Blockly.Python.valueToCode(block, 'Normalization_data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '(' + value_normalization_data +'-' + value_normalization_data +'.mean()) / '+ value_normalization_data+ 
  '.std()'+'\n';
  return [code, Blockly.Python.ORDER_NONE];
};
// 헤더 삭제하기
Blockly.Python['deletehead'] = function(block) {
  var value_delete_header = Blockly.Python.valueToCode(block, 'delete_header', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

//2020-09-10 양승국 return수정
Blockly.Python['select_row_delete'] = function(block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var value_select_row = Blockly.Python.valueToCode(block, 'select_row', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '.drop([' + value_select_value + '.index[' + value_select_row + ']])\n';
  return [code, Blockly.Python.ORDER_NONE];
};
// 원하는 열 삭제
Blockly.Python['select_column_delete'] = function(block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var value_select_column = Blockly.Python.valueToCode(block, 'select_column', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =  value_select_value + '.drop(' + value_select_column +', axis =1)'+ '\n';
  return [code, Blockly.Python.ORDER_NONE];;
};

Blockly.Python['leave_row_data'] = function(block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var value_select_row = Blockly.Python.valueToCode(block, 'select_row', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '.loc[' + value_select_row + ']';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['leave_column_data'] = function(block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var value_select_column = Blockly.Python.valueToCode(block, 'select_column', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '['+ value_select_column +']\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['save_data'] = function(block) {
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

Blockly.Python['list'] = function(block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '.values.tolist()\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['header'] = function(block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'list(' + value_select_value +'.columns.values)\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['select_row_list'] = function(block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var value_select_row_locate = Blockly.Python.valueToCode(block, 'select_row_locate', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value +'.loc[' + value_select_row_locate + ']\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['select_column_list'] = function(block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var value_select_column_locate = Blockly.Python.valueToCode(block, 'select_column_locate', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '['+ value_select_column_locate +']';
  return [code, Blockly.Python.ORDER_NONE];
};

//2020-09-11 양승국 코드수정
Blockly.Python['select_row_column_value'] = function(block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_data', Blockly.Python.ORDER_ATOMIC);
  var value_select_row_locate = Blockly.Python.valueToCode(block, 'select_row_locate', Blockly.Python.ORDER_ATOMIC);
  var value_select_column_locate = Blockly.Python.valueToCode(block, 'select_column_locate', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '.iloc[' + value_select_row_locate +','+ value_select_column_locate +']\n';
  return [code, Blockly.Python.ORDER_NONE];
};

//2020-09-16 양승국 수정
Blockly.Python['row_count'] = function(block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('count');
  // TODO: Assemble Python into code variable.
  var code = value_select_value + dropdown_name;
  return [code, Blockly.Python.ORDER_NONE];
};

// Blockly.Python['image_list'] = function(block) {
//   var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble Python into code variable.
//   var code = '...\n';
//   return code;
// };

Blockly.Python['count_label'] = function(block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

//2020-09-06 양승국
//2020-09-09 이성주
Blockly.Python['pandas_datalist'] = function(a) {
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.Python.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "None";
    return ['list(zip('+ b.join(", ") +'))', Blockly.Python.ORDER_ATOMIC]
  
};

//2020-09-06 양승국
//2020-09-09 이성주
Blockly.Python['pandas_dataframe'] = function(block) {
  var value_lib = Blockly.Python.valueToCode(block, 'lib', Blockly.Python.ORDER_ATOMIC);
  var value_lst = Blockly.Python.valueToCode(block, 'lst', Blockly.Python.ORDER_ATOMIC);
  var value_col1 = Blockly.Python.valueToCode(block, 'col1', Blockly.Python.ORDER_ATOMIC);
  var code = value_lib + '.'+ 'DataFrame(data = ' + value_lst + value_col1 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

//20.09.09 이성주 - 컬럼 블록 추가
Blockly.Python['createColumn'] = function(a) {
  
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.Python.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "None";
    return [', columns = ['+ b.join(", ") +']', Blockly.Python.ORDER_ATOMIC]
  
};

//2020-09-09 양승국
Blockly.Python['pandas_conversion'] = function(block) {
  var value_pa_frm = Blockly.Python.valueToCode(block, 'pa_frm', Blockly.Python.ORDER_ATOMIC);
  var value_pa_cul = Blockly.Python.valueToCode(block, 'pa_cul', Blockly.Python.ORDER_ATOMIC);
  var value_pa_data = Blockly.Python.valueToCode(block, 'pa_data', Blockly.Python.ORDER_ATOMIC);
  var value_pa_chidata = Blockly.Python.valueToCode(block, 'pa_chidata', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_pa_frm +'.loc[' + value_pa_frm + '['+ value_pa_cul +'] ==' + value_pa_data +', ' + value_pa_cul 
              + '] = ' + value_pa_chidata + ';\n';
  return code;
};

//2020-09-10 양승국
Blockly.Python['pandas_mis_del'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('DEL_NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//2020-09-10 양승국 추가
Blockly.Python['selec_value_all'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = ':';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//2020-09-13 양승국 추가
Blockly.Python['iloc_range'] = function(block) {
  var value_start_col_num = Blockly.Python.valueToCode(block, 'start_col_num', Blockly.Python.ORDER_ATOMIC);
  var value_end_col_num = Blockly.Python.valueToCode(block, 'end_col_num', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_start_col_num + ':' + value_end_col_num;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


//2020-09-16 양승국 추가
Blockly.Python['nm'] = function(block) {
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var value_anymore = Blockly.Python.valueToCode(block, 'anymore', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_data + "=" + value_anymore + '\n';
  return code;
};

//2020-09-16 양승국 추가
Blockly.Python['pandas_series'] = function(block) {
  var value_lvar = Blockly.Python.valueToCode(block, 'lvar', Blockly.Python.ORDER_ATOMIC);
  var value_ser_data = Blockly.Python.valueToCode(block, 'ser_data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_lvar + '.Series(' + value_ser_data +')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

//2020-09-16 양승국 추가
Blockly.Python['pandas_series_data'] = function(a) {
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.Python.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "None";
    return ["{" + b.join(", ") + "}", Blockly.Python.ORDER_ATOMIC]
  
};

//2020-09-16 양승국 추가
Blockly.Python['pandas_concat'] = function(block) {
  var value_pa_val = Blockly.Python.valueToCode(block, 'pa_val', Blockly.Python.ORDER_ATOMIC);
  var value_set_series = Blockly.Python.valueToCode(block, 'set_series', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('PLEUS_NAME');
  // TODO: Assemble Python into code variable.
  var code = value_pa_val + '.concat(' + value_set_series + dropdown_name +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

//2020-09-17 양승국 추가
Blockly.Python['pandas_merge'] = function(block) {
  var value_pan_lib = Blockly.Python.valueToCode(block, 'pan_lib', Blockly.Python.ORDER_ATOMIC);
  var value_plus_data1 = Blockly.Python.valueToCode(block, 'plus_data1', Blockly.Python.ORDER_ATOMIC);
  var value_plus_data2 = Blockly.Python.valueToCode(block, 'plus_data2', Blockly.Python.ORDER_ATOMIC);
  var value_connet_way = Blockly.Python.valueToCode(block, 'connet_way', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_pan_lib + '.merge('+ value_plus_data1 + ', ' + value_plus_data2 + ', ' + value_connet_way +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

//2020-09-17 양승국 추가
Blockly.Python['pandas_merge_oncol'] = function(block) {
  var value_pan_merge_col = Blockly.Python.valueToCode(block, 'pan_merge_col', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'on='+ value_pan_merge_col ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

//2020-09-17 양승국 추가
Blockly.Python['pandas_merge_lron'] = function(block) {
  var value_left_on = Blockly.Python.valueToCode(block, 'left_on', Blockly.Python.ORDER_ATOMIC);
  var value_right_on = Blockly.Python.valueToCode(block, 'right_on', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'left_on='+ value_left_on + ', right_on=' + value_right_on;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

////////////////////////////////////////////////////////////////////
// Pandas 2학년 파트 끝
////////////////////////////////////////////////////////////////////

// 결측치 조회
Blockly.Python['missing_value_inquiry'] = function(block) {
  var variable_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "pd.DataFrame(" + variable_data + ').isnull().sum()\n';
  return code;
};
// 통계 정보 조회
Blockly.Python['stats_inquiry'] = function(block) {
  var variable_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "pd.DataFrame(" + variable_data + ').describe()\n';
  return code;
};