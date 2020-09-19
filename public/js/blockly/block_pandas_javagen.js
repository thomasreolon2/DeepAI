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

Blockly.JavaScript['pandas_datalist'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

//2020-09-19 양승국 수정
Blockly.JavaScript['csvdataframe_J'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_dataframe'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_conversion'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['fill_null_data'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_mis_del'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['selec_value_all'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['iloc_range'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['select_row_column_value'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['normal'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['select_row_delete'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['list'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['header'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['select_row_list'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['row_count'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['nm'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_series'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_concat'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_merge'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_merge_oncol'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_merge_lron'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['missing_value_inquiry'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['stats_inquiry'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


Blockly.JavaScript['groupby_series'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


Blockly.JavaScript['groupby_dataFrame'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


Blockly.JavaScript['groupby_series_'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
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