
//db

//자동 커밋 (con).isolation_level = None  

Blockly.Python['db_autocommit'] = function (block) {
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_list1}.isolation_level = None\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


//DB삭제 DROP TABLE IF EXISTS (테이블)

Blockly.Python['db_deletedb'] = function (block) {
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  var indata1 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_list1} = "DROP TABLE IF EXISTS ${indata1}"\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


Blockly.Python['db_select6'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
  var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
  var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_list} = "SELECT ${value_SET0} FROM ${value_SET1} ${dropdown_name} ${value_SET2}"\n`;
  return code;
};




// 사용하지 않는 블럭
// //조회 sql = “SELECT (필드) FROM (테이블) ORDER BY (필드)”

// Blockly.Python['db_select3'] = function (block) {
//   var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
//   var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
//   var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
//   var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code =  `${variable_list} = "SELECT ${value_SET0} FROM ${value_SET1} ORDER BY ${value_SET2}"\n`;
//   return code;
// };

// //조회 sql = “SELECT (필드) FROM (테이블) ORDER BY (필드) DESC”

// Blockly.Python['db_select4'] = function (block) {
//   var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
//   var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
//   var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
//   var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = `${variable_list} = "SELECT ${value_SET0} FROM ${value_SET1} ORDER BY ${value_SET2} DESC"\n`;
//   return code;
// };

// //조회 sql = “SELECT (필드) FROM (테이블) GROUP BY (필드)”

// Blockly.Python['db_select5'] = function (block) {
//   var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
//   var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
//   var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
//   var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = `${variable_list} = "SELECT ${value_SET0} FROM ${value_SET1} GROUP BY ${value_SET2}"\n`;
//   return code;
// };

// Blockly.Python['db_select7'] = function (block) {
//   var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
//   var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
//   var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
//   var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
//   var dropdown_name = block.getFieldValue('NAME');
//   var dropdown_name2 = block.getFieldValue('NAME2');
//   // TODO: Assemble JavaScript into code variable.
//   var code = `${variable_list} = "SELECT ${value_SET0} FROM ${value_SET1} ${dropdown_name} ${value_SET2} ${dropdown_name2}"\n`;
//   return code;
// };


