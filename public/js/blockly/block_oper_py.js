// 연산
Blockly.Python['Oper'] = function(block) {
    var value_a = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_a+dropdown_name+value_b;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

// 타입 생성, 형 변환
Blockly.Python['convert_block'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_b = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = dropdown_name+value_b+")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };