// self 블록
Blockly.Python['self'] = function (block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var text_text = block.getFieldValue('NAME');
    var value_name = Blockly.Python.valueToCode(block, 'varset', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'self.' + variable_name + ' ' + text_text + ' ' + value_name + '\n';
    return code;
};

// 클래스 블록
Blockly.Python['webclass'] = function (block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'class ' + variable_name + ':\n' + branch;
};

// 객체 사용
Blockly.Python['class_use'] = function(block) {
    var val1 = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR1'), Blockly.Variables.NAME_TYPE);
    var val2 = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR2'), Blockly.Variables.NAME_TYPE);
    var text_1 = block.getFieldValue('INPUT');
    // TODO: Assemble Python into code variable.
    var code = val1+'.'+val2+'('+text_1+')';
    // var code = `${val1}.${val2} = ${text_1}\n`;
    return [code, Blockly.Python.ORDER_NONE]; 
  };

  