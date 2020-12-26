Blockly.Python['self'] = function (block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var text_text = block.getFieldValue('NAME');
    var value_name = Blockly.Python.valueToCode(block, 'varset', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'self.' + variable_name + ' ' + text_text + ' ' + value_name + '\n';
    return code;
};
Blockly.Python['webclass'] = function (block) {
    var text_const = Blockly.Python.valueToCode(block, 'class', Blockly.Python.ORDER_ATOMIC);
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'class ' + text_const + ':\n' + branch;
};