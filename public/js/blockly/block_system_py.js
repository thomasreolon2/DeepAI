Blockly.Python['os_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import os \n";
  return code;
};

Blockly.Python['pyodide_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import pyodide \n";
  return code;
};

Blockly.Python['pickle_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import pickle \n";
  return code;
};

Blockly.Python['datetime_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import datetime\n";
  return code;
};

  
Blockly.Python['pickle_dump'] = function (block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'va1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'va2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "pickle.dump" + '(' + value_name1 + ", " + value_name2 + ')'+ '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


Blockly.Python['pickle_load'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list + "= pickle.load(" + value_name + ")" + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


Blockly.Python['datetime_now'] = function(block) {
  var value_variables = Blockly.Python.valueToCode(block, 'variables', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_variables + " = datetime.datetime.now()\n";
  return code;
};

Blockly.Python['now_method'] = function(block) {
  var value_object = Blockly.Python.valueToCode(block, 'object', Blockly.Python.ORDER_ATOMIC);
  var dropdown_datetime_module = block.getFieldValue('datetime_module');
  // TODO: Assemble Python into code variable.
  var code = value_object + "." + dropdown_datetime_module;
  return [code, Blockly.Python.ORDER_ATOMIC];
};