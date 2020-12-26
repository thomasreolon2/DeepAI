Blockly.JavaScript['webdefine'] = function (block) {
    var text_1 = Blockly.Python.valueToCode(block, '1', Blockly.Python.ORDER_ATOMIC);
    var text_2 = Blockly.Python.valueToCode(block, '2', Blockly.Python.ORDER_ATOMIC);
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    // const statements_name = Blockly.Python.statementToCode(block, 'NAME');
    // TODO: Assemble Python into code variable.
    //var code = '\n' + branch;
    var code = '\n';
    return code;
};

//2020-12-26-전우진 definitions

Blockly.JavaScript['webreturn2'] = function (block) {
    var text_return = Blockly.Python.valueToCode(block, 'return', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '\n';
    return code;
};