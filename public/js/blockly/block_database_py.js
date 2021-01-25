// Blockly.Python['db_create'] = function (block) {
//   var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = "CREATE TABLE IF NOT EXISTS" + value_SET0;
//   return [code, Blockly.Python.ORDER_ATOMIC];
// };

Blockly.Python['db_create'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  var value_SET1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_SET2 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list + '=' + '"CREATE TABLE ' + value_SET1 + '(' + value_SET2 + ')"';
  return code;
};

Blockly.Python['db_insert'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  var value_SET0 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_SET1 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list + ' = ' + '"INSERT INTO ' + value_SET0 + " VALUES (" + value_SET1 + ')"';
  return code;
};

Blockly.Python['db_select1'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  var value_SET0 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_SET1 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var value_SET2 = Blockly.Python.valueToCode(block, 'd3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list + ' = ' + '"SELECT ' + value_SET0 + " FROM " + value_SET1 + " WHERE " + value_SET2 + '"';
  return code;
};

Blockly.Python['db_select2'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  var value_SET0 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_SET1 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list + ' = ' + '"SELECT ' + value_SET0 + " FROM " + value_SET1 + '"';
  return code;
};

Blockly.Python['db_update'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  var value_SET0 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_SET1 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var value_SET2 = Blockly.Python.valueToCode(block, 'd3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list + ' = ' + '"UPDATE ' + value_SET0 + " SET " + value_SET1 + " WHERE " + value_SET2 + '"';
  return code;
};

Blockly.Python['db_delete'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  var value_SET0 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_SET1 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list + ' = ' + '"DELETE FROM ' + value_SET0 + " WHERE " + value_SET1 + '"';
  return code;
};


//전우진

Blockly.Python['sqlite_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import sqlite3 \n";
  return code;
};

Blockly.Python['db_conn'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list +'= sqlite3.connect(' + value_name + ')' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['db_cur'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list + " = " + variable_list1 +'.cursor()' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['db_exec'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var dropdown_name = block.getFieldValue('d1');
  var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list+'.'+ dropdown_name + '(' + value_name + ')' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['db_execM'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var dropdown_name = block.getFieldValue('d1');
  var value_name1 = Blockly.Python.valueToCode(block, 'va1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'va2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list+'.'+ dropdown_name + '(' + value_name1 + ', ' + value_name2 + ')' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['db_commit'] = function (block) {
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list1 +'.commit()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['db_rollback'] = function (block) {
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list1 +'.rollback()' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['db_fetchall'] = function (block) {
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  var variable_list2 = Blockly.Python.variableDB_.getName(block.getFieldValue('list2'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list1 +  '=' + variable_list2 +'.fetchall()' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['db_fetchmany'] = function (block) {
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  var variable_list2 = Blockly.Python.variableDB_.getName(block.getFieldValue('list2'), Blockly.Variables.NAME_TYPE);
  var value_name1 = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list1 +  '=' + variable_list2 +'.fetchmany(' + value_name1 + ')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['db_fetchone'] = function (block) {
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  var variable_list2 = Blockly.Python.variableDB_.getName(block.getFieldValue('list2'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list1 +  '=' + variable_list2 +'.fetchone()' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['db_close'] = function (block) {
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list1 +'.close()' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};