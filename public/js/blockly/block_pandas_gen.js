////////////////////////////////////////////////////////////////////
// 2020-09-03 Pandas Code Generation 2학년 파트
////////////////////////////////////////////////////////////////////

Blockly.Python['csv_library'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'pan_lib_var', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "import pandas as" + " "  + value_name.replace("'"," ")+ "\n";
  return code;
};

Blockly.Python['load_csv'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'pan_lod_var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_load = Blockly.JavaScript.valueToCode(block, 'LOAD', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  // var code =  value_var +'.read_csv(' + value_load + ')';
  var code = value_var+'.read_csv(pyodide.open_url('+value_load+'))';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['fill_null_data'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + '.fillna(' + value_name +'.' + dropdown_name + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pyo_lib'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import pyodide \n';
  return code;
};

Blockly.Python['pandas_print'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'print(' + value_name + ')\n';
  return code;
};

// 정규화
Blockly.Python['normal'] = function(block) {  
  var value_normalization_data = Blockly.Python.valueToCode(block, 'Normalization_data', Blockly.Python.ORDER_ATOMIC);
  var dropdown_normal = block.getFieldValue('normal');
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

Blockly.Python['select_row_delete'] = function(block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var value_select_row = Blockly.Python.valueToCode(block, 'select_row', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '.drop([' + value_select_value + '.index[' + value_select_row + ']])\n';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
// 원하는 열 삭제
Blockly.Python['select_column_delete'] = function(block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var value_select_column = Blockly.Python.valueToCode(block, 'select_column', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =  value_select_value + '.drop(' + value_select_column +', axis =1)'+ '\n';
  return code;
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
  var code = value_select_value + '['+ value_select_column_locate +']\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['select_row_column_value'] = function(block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var value_select_row_locate = Blockly.Python.valueToCode(block, 'select_row_locate', Blockly.Python.ORDER_ATOMIC);
  var value_select_column_locate = Blockly.Python.valueToCode(block, 'select_column_locate', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '.iloc[' + value_select_row_locate +','+ value_select_column_locate +']\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['row_count'] = function(block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '.shape[0]\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['column_count'] = function(block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '.shape[1]\n';
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
Blockly.Python['pandas_datalist'] = function(block) {
  var value_dat1 = Blockly.JavaScript.valueToCode(block, 'dat1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dat2 = Blockly.JavaScript.valueToCode(block, 'dat2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dat3 = Blockly.JavaScript.valueToCode(block, 'dat3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'list(zip('+ value_dat1 +',' + value_dat2 + ',' + value_dat3 +'))\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

//2020-09-06 양승국
Blockly.Python['pandas_dataframe'] = function(block) {
  var value_lib = Blockly.Python.valueToCode(block, 'lib', Blockly.Python.ORDER_ATOMIC);
  var value_lst = Blockly.Python.valueToCode(block, 'lst', Blockly.Python.ORDER_ATOMIC);
  var value_col1 = Blockly.Python.valueToCode(block, 'col1', Blockly.Python.ORDER_ATOMIC);
  var value_col2 = Blockly.Python.valueToCode(block, 'col2', Blockly.Python.ORDER_ATOMIC);
  var value_col3 = Blockly.Python.valueToCode(block, 'col3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_lib + '.'+ 'DataFrame(data = ' + value_lst + ', columns = [' + value_col1 + ',' + value_col2 + ',' + value_col3 +'])\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

////////////////////////////////////////////////////////////////////
// Pandas 2학년 파트 끝
////////////////////////////////////////////////////////////////////