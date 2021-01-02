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
  var code = "DELECT FROM " + value_SET0 + " WHERE " + value_SET1;
  return [code, Blockly.Python.ORDER_ATOMIC];
};