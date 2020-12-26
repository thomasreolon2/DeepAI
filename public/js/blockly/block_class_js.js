Blockly.JavaScript['self'] = function (block) {
    var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var text_text = block.getFieldValue('NAME');
    var value_name = Blockly.JavaScript.valueToCode(block, 'varset', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
};
Blockly.JavaScript['webclass'] = function (block) {
    var text_const = Blockly.JavaScript.valueToCode(block, 'class', Blockly.JavaScript.ORDER_ATOMIC);
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    branch = Blockly.JavaScript.addLoopTrap(branch, block.id) || Blockly.JavaScript.PASS;
    return 'class ' + text_const + ':\n' + branch;
    //return '\n';
};