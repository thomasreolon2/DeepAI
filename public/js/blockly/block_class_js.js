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

// 객체 사용
Blockly.JavaScript['class_use'] = function(block) {
    var val1 = Blockly.JavaScript.valueToCode(block, 'VAR1', Blockly.JavaScript.ORDER_ATOMIC);
    var text_1 = block.getFieldValue('INPUT');
    var val2 = Blockly.JavaScript.valueToCode(block, 'VAR2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code; 
  };

  
 // 객체 생성
Blockly.JavaScript['class_make'] = function(block) {
    var variable_1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('1'), Blockly.Variables.NAME_TYPE);
    var variable_2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('2'), Blockly.Variables.NAME_TYPE);
    var text_3 = block.getFieldValue('3');
    // TODO: Assemble JavaScript into code variable.
    var code = variable_1+' = '+variable_2+'('+text_3+')\n';
    return code;
  };

  