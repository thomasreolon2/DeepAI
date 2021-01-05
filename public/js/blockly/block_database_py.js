Blockly.Python['db_create'] = function (block) {
  var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "CREATE TABLE IF NOT EXISTS" + value_SET0;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['db_insert'] = function (block) {
  var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
  var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "INSERT INTO " + value_SET0 + " VALUES " + value_SET1;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['db_select1'] = function (block) {
  var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
  var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
  var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "SELECT " + value_SET0 + " FROM " + value_SET1 + " WHERE " + value_SET2;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['db_select2'] = function (block) {
  var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
  var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
  var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "SELECT " + value_SET0 + " FROM " + value_SET1 + " " + value_SET2;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['db_update'] = function (block) {
  var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
  var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
  var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "UPDATE " + value_SET0 + " SET " + value_SET1 + " WHERE " + value_SET2;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['db_delete'] = function (block) {
  var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
  var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "DELETE FROM " + value_SET0 + " WHERE " + value_SET1;
  return [code, Blockly.Python.ORDER_ATOMIC];
};


//전우진

Blockly.Python['sqlite_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import sqlite3 \n";
  return code;
};

Blockly.Python['db_conn'] = function (block) {
  
  var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'sqlite3.connect("' + value_name + '")' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['db_cur'] = function (block) {
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list1 +'.cursor()' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['db_exec'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list+'.execute("' + value_name + '")' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['db_execM'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list+".executemany('" + value_name + "')" + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['db_commit'] = function (block) {
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list1 +'.commit()' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['db_rollback'] = function (block) {
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list1 +'.rollback()' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['db_fetchall'] = function (block) {
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list1 +'.fetchall()' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['db_fetchone'] = function (block) {
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list1 +'.fetchone()' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['db_close'] = function (block) {
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list1 +'.close()' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};