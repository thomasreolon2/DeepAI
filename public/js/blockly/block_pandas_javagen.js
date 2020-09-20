// ////////////////////////////////////////////////////////////////////
// // 2020-09-19 Pandas java Code Generation 2학년 파트
// ////////////////////////////////////////////////////////////////////

Blockly.JavaScript['csv_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pyo_lib'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_datalist'] = function(block) {
  var value_frm_var = Blockly.JavaScript.valueToCode(block, 'frm_var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data_lst = Blockly.JavaScript.valueToCode(block, 'data_lst', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

//2020-09-19 양승국 수정
Blockly.JavaScript['csvdataframe_J'] = function (block) {
  var value_input_var = Blockly.JavaScript.valueToCode(block, 'input_var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_csv = Blockly.JavaScript.valueToCode(block, 'csv', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code; 
};

Blockly.JavaScript['pandas_dataframe'] = function (block) {
  var value_df_va = Blockly.JavaScript.valueToCode(block, 'df_va', Blockly.JavaScript.ORDER_ATOMIC);
  var value_lst = Blockly.JavaScript.valueToCode(block, 'lst', Blockly.JavaScript.ORDER_ATOMIC);
  var text_name = block.getFieldValue('col_name');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_conversion'] = function (block) {
  var value_pa_frm = Blockly.JavaScript.valueToCode(block, 'pa_frm', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pa_cul = Blockly.JavaScript.valueToCode(block, 'pa_cul', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pa_data = Blockly.JavaScript.valueToCode(block, 'pa_data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pa_chidata = Blockly.JavaScript.valueToCode(block, 'pa_chidata', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['fill_null_data'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_mis_del'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'DATA_del', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('DEL_NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['selec_value_all'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = ':';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['iloc_range'] = function (block) {
  var text_st_range = block.getFieldValue('st_range');
  var text_ed_range = block.getFieldValue('ed_range');
  // TODO: Assemble Python into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['select_row_column_value'] = function (block) {
  var value_select_value = Blockly.JavaScript.valueToCode(block, 'select_data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_select_row_locate = Blockly.JavaScript.valueToCode(block, 'select_row_locate', Blockly.JavaScript.ORDER_ATOMIC);
  var value_select_column_locate = Blockly.JavaScript.valueToCode(block, 'select_column_locate', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['normal'] = function (block) {
  var value_normalization_data = Blockly.JavaScript.valueToCode(block, 'Normalization_data', Blockly.JavaScript.ORDER_ATOMIC);
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['select_row_delete'] = function (block) {
  var value_select_data = Blockly.JavaScript.valueToCode(block, 'select_data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_select_drop = block.getFieldValue('select_drop');
  var dropdown_name = block.getFieldValue('srd_NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['list'] = function (block) {
  var value_input_data = Blockly.JavaScript.valueToCode(block, 'input_data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_out_data = Blockly.JavaScript.valueToCode(block, 'out_data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['header'] = function (block) {
  var value_inv = Blockly.JavaScript.valueToCode(block, 'header_input_var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_hov = Blockly.JavaScript.valueToCode(block, 'header_output_var', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['select_row_list'] = function (block) {
  var value_list_data = Blockly.JavaScript.valueToCode(block, 'list_data', Blockly.JavaScript.ORDER_ATOMIC);
  var text_name = block.getFieldValue('list_val');
  var dropdown_name = block.getFieldValue('srd_NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['row_count'] = function (block) {
  var value_select_value = Blockly.JavaScript.valueToCode(block, 'select_value', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('count');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['nm'] = function (block) {
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_anymore = Blockly.JavaScript.valueToCode(block, 'anymore', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_series'] = function (block) {
  var value_ser_var = Blockly.JavaScript.valueToCode(block, 'ser_var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ser_data = Blockly.JavaScript.valueToCode(block, 'ser_data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_series_data'] = function (block) {
  var value_ser_var = Blockly.JavaScript.valueToCode(block, 'ser_var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ser_data = Blockly.JavaScript.valueToCode(block, 'ser_data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_concat'] = function (block) {
  var value_cat_vl = Blockly.JavaScript.valueToCode(block, 'cat_vl', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data1 = Blockly.JavaScript.valueToCode(block, 'data1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data2 = Blockly.JavaScript.valueToCode(block, 'data2', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('PLEUS_NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_merge'] = function (block) {
  var value_mer_var = Blockly.JavaScript.valueToCode(block, 'mer_var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_plus_data1 = Blockly.JavaScript.valueToCode(block, 'plus_data1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_plus_data2 = Blockly.JavaScript.valueToCode(block, 'plus_data2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_connet_way = Blockly.JavaScript.valueToCode(block, 'connet_way', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_merge_oncol'] = function (block) {
  var text_name = block.getFieldValue('mer_NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['pandas_merge_lron'] = function (block) {
  var text_mer_LNAME = block.getFieldValue('mer_LNAME');
  var text_mer_RNAME = block.getFieldValue('mer_RNAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['missing_value_inquiry'] = function (block) {
  var variable_data = Blockly.JavaScript.valueToCode(block, 'mis_data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['stats_inquiry'] = function (block) {
  var variable_data = Blockly.JavaScript.valueToCode(block, 'inq_data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


Blockly.JavaScript['groupby_series'] = function (block) {
  var value_series_or_dataframe = Blockly.JavaScript.valueToCode(block, 'Series_or_Dataframe', Blockly.JavaScript.ORDER_ATOMIC);
  var value_colname = Blockly.JavaScript.valueToCode(block, 'colName', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_function = block.getFieldValue('function');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


Blockly.JavaScript['groupby_dataFrame'] = function (block) {
  var value_series_or_dataframe = Blockly.JavaScript.valueToCode(block, 'Series_or_Dataframe', Blockly.JavaScript.ORDER_ATOMIC);
  var value_colname = Blockly.JavaScript.valueToCode(block, 'colName', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_function = block.getFieldValue('function');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['groupby_series_'] = function (block) {
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.Python.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "None";
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['createColumn'] = function (block) {
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.Python.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "None";
    return [b.join(", "), Blockly.JavaScript.ORDER_ATOMIC]
  // TODO: Assemble JavaScript into code variable.
};

// ////////////////////////////////////////////////////////////////////
// // Pandas 2학년 파트 끝
// ////////////////////////////////////////////////////////////////////

// array
Blockly.JavaScript['array_select'] = function (block) {
  // Create a list with any number of elements of any type.
  var value_name = Blockly.JavaScript.valueToCode(block, 'array_var', Blockly.JavaScript.ORDER_ATOMIC);
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = Blockly.JavaScript.valueToCode(block, 'ADD' + i,
      Blockly.JavaScript.ORDER_COMMA) || 'null';
    // elements[i] = block.getFieldValue('ADD' + i);
  }
  var code = value_name + '[' + elements.join('][') + ']';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};