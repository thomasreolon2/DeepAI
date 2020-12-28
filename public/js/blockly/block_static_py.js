///////////////////////////////////////////////////////
// 2020-12-28 static 카테고리
///////////////////////////////////////////////////////

Blockly.Python['static_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "from statistics import *\n";
  return code;
};


Blockly.Python['statistics1'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_name + '(' + value_name + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['statistics2'] = function (block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'va1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'va2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  if (dropdown_name == 1)   var code = "median_grouped" + '(' + value_name1 + ", interval = " + value_name2 + ')';
  else if (dropdown_name == 2) var code = "quantiles" + '(' + value_name1 + ", " + value_name2 + ')';
  else if (dropdown_name == 3) var code = "pvariance" + '(' + value_name1 + ", " + value_name2 + ')';
  else if (dropdown_name == 4) var code = "variance" + '(' + value_name1 + ", " + value_name2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

////////////////////////////////////
/// random 블록
////////////////////////////////////

Blockly.Python['random_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import random\n";
  return code;
};

Blockly.Python['random1'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = "random." + dropdown_name + '(' + value_name + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['random2'] = function (block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'va1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'va2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  if (dropdown_name == 1)   var code = "random.randint" + '(' + value_name1 + ", " + value_name2 + ')';
  else if (dropdown_name == 2) var code = "random.sample" + '(' + value_name1 + ", " + value_name2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
