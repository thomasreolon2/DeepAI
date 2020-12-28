Blockly.Python['static_library'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "from math import *\n";
    return code;
  };

  Blockly.Python['math1'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = "math."+dropdown_name + '(' + value_name + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };