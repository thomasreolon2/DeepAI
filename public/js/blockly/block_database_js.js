
  Blockly.JavaScript['db_create'] = function (block) {
    var value_SET0 = Blockly.JavaScript.valueToCode(block, 'SET0', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['db_insert'] = function (block) {
    var value_SET0 = Blockly.JavaScript.valueToCode(block, 'SET0', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SET1 = Blockly.JavaScript.valueToCode(block, 'SET1', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['db_select1'] = function (block) {
    var value_SET0 = Blockly.JavaScript.valueToCode(block, 'SET0', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SET1 = Blockly.JavaScript.valueToCode(block, 'SET1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SET2 = Blockly.JavaScript.valueToCode(block, 'SET2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['db_select2'] = function (block) {
    var value_SET0 = Blockly.JavaScript.valueToCode(block, 'SET0', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SET1 = Blockly.JavaScript.valueToCode(block, 'SET1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SET2 = Blockly.JavaScript.valueToCode(block, 'SET2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['db_update'] = function (block) {
    var value_SET0 = Blockly.JavaScript.valueToCode(block, 'SET0', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SET1 = Blockly.JavaScript.valueToCode(block, 'SET1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SET2 = Blockly.JavaScript.valueToCode(block, 'SET2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['db_delete'] = function (block) {
    var value_SET0 = Blockly.JavaScript.valueToCode(block, 'SET0', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SET1 = Blockly.JavaScript.valueToCode(block, 'SET1', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  //전우진

  Blockly.JavaScript['sqlite_library'] = function (block) {
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_conn'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.JavaScript.valueToCode(block, 'va', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_cur'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var variable_list1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_exec'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var dropdown_name = block.getFieldValue('d1');
    var value_name1 = Blockly.JavaScript.valueToCode(block, 'va1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name2 = Blockly.Python.valueToCode(block, 'va2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_execM'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.JavaScript.valueToCode(block, 'va', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_commit'] = function (block) {
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_rollback'] = function (block) {
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_fetchall'] = function (block) {
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_fetchmany'] = function (block) {
    var variable_list1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
    var variable_list2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list2'), Blockly.Variables.NAME_TYPE);
    var value_name1 = Blockly.JavaScript.valueToCode(block, 'va', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  };

  Blockly.JavaScript['db_fetchone'] = function (block) {
    var variable_list1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
    var variable_list2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list2'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_close'] = function (block) {
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };