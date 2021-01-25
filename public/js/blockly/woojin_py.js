Blockly.Python['sr_unique'] = function (block) {
    var variable_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_data + ".unique()" + "\n";
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

Blockly.Python['sr_name'] = function (block) {
    var variable_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_data + ".name" + "\n";
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python['sr_is_in'] = function (block) {
    var variable_1 = Blockly.Python.variableDB_.getName(block.getFieldValue('a'), Blockly.Variables.NAME_TYPE);
    var variable_data2 = Blockly.Python.valueToCode(block, 'data2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_1 + ".is_in(" + variable_data2 +")" + "\n";
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python['sr_tolist'] = function (block) {
    var variable_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_data + ".tolist()" + "\n";
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python['sr_index()'] = function(block) {
    var variable_1 = Blockly.Python.variableDB_.getName(block.getFieldValue('a'), Blockly.Variables.NAME_TYPE);
    var variable_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_1+'('+variable_data+')'+'\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sr_index[]'] = function(block) {
    var variable_1 = Blockly.Python.variableDB_.getName(block.getFieldValue('1'), Blockly.Variables.NAME_TYPE);
    var variable_data = Blockly.Python.valueToCode(block, '색인', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_1+'['+variable_data+']'+'\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sr_condition[]'] = function(block) {
    var variable_1 = Blockly.Python.variableDB_.getName(block.getFieldValue('1'), Blockly.Variables.NAME_TYPE);
    var variable_data = Blockly.Python.valueToCode(block, '논리연산', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_1+'['+variable_data+']'+'\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

//db

//자동 커밋 (con).isolation_level = None  

Blockly.Python['db_autocommit'] = function (block) {
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list1 +'.isolation_level = None' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


//DB삭제 DROP TABLE IF EXISTS (테이블)

Blockly.Python['db_deletedb'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var indata1 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '"DROP TABLE IF EXISTS ' + indata1 + '"' + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


//조회 sql = “SELECT (필드) FROM (테이블) ORDER BY (필드)”

Blockly.Python['db_select3'] = function (block) {
  var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
  var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
  var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '"SELECT ' + value_SET0 + " FROM " + value_SET1 + " ORDER BY " + value_SET2 + '"';
  return code;
};

//조회 sql = “SELECT (필드) FROM (테이블) ORDER BY (필드) DESC”

Blockly.Python['db_select4'] = function (block) {
  var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
  var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
  var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '"SELECT ' + value_SET0 + " FROM " + value_SET1 + " ORDER BY " + value_SET2 + ' DESC"';
  return code;
};

//조회 sql = “SELECT (필드) FROM (테이블) GROUP BY (필드)”

Blockly.Python['db_select5'] = function (block) {
  var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
  var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
  var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '"SELECT ' + value_SET0 + " FROM " + value_SET1 + " GROUP BY " + value_SET2 + '"';
  return code;
};