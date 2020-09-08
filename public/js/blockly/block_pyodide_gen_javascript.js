Blockly.JavaScript['printc'] = function (block) {
    var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'printc(' + value_content + ')\n';
    return code;
  };
  Blockly.JavaScript['nj_array'] = function (block) {
    var text_array = block.getFieldValue('array');
    // TODO: Assemble JavaScript into code variable.
    var code = 'nj.array([' + text_array + '])';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['forp'] = function(block) {
    var value_i = Blockly.JavaScript.valueToCode(block, 'i', Blockly.JavaScript.ORDER_ATOMIC);
    var value_range = Blockly.JavaScript.valueToCode(block, 'range', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_for = Blockly.JavaScript.statementToCode(block, 'for');
    // TODO: Assemble Python into code variable.
    var code = statements_for;
    return code;
  };
  Blockly.JavaScript['lrgraph'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
    var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'LRgraph(' + value_x + ',' + value_y + ',' + value_w + ',' + value_b + ');';
    return code;
  };
  Blockly.JavaScript['logicgraph'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
    var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'Logisticgraph(' + value_x + ',' + value_y + ',' + value_w + ',' + value_b + ');';
    return code;
  };