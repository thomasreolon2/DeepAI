// self 블록
Blockly.Python['self'] = function (block) {
    var variable_name = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var text_text = block.getFieldValue('NAME');
    var value_name = Blockly.Python.valueToCode(block, 'varset', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'self.' + variable_name + ' ' + text_text + ' ' + value_name + '\n';
    return code;
};

// 클래스 블록
Blockly.Python['webclass'] = function (block) {
    var variable_name = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'class ' + variable_name + ':\n' + branch + '\n';
};

// 상속 블록
Blockly.Python['webclass2'] = function (block) {
  var variable_name = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var branch = Blockly.Python.statementToCode(block, 'DO');
  var value_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);

  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
  return `class ${variable_name}(${value_name}) : \n${branch} `;
};


// 객체 사용
Blockly.Python['class_use'] = function(block) {
    var var1 = Blockly.Python.valueToCode(block, 'VAR1', Blockly.Python.ORDER_ATOMIC);
    var var2 = Blockly.Python.valueToCode(block, 'VAR2', Blockly.Python.ORDER_ATOMIC);
    var text_1 = Blockly.Python.valueToCode(block, '3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = var1+'.'+var2+'('+text_1+')';
    // var code = `${val1}.${val2} = ${text_1}\n`;
    return [code, Blockly.Python.ORDER_NONE]; 
  };

  // 객체 사용
Blockly.Python['class_use2'] = function(block) {
  var var1 = Blockly.Python.valueToCode(block, 'VAR1', Blockly.Python.ORDER_ATOMIC);
  var var2 = Blockly.Python.valueToCode(block, 'VAR2', Blockly.Python.ORDER_ATOMIC);
  var text_1 = Blockly.Python.valueToCode(block, '3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = var1+'.'+var2+'('+text_1+')';
  // var code = `${val1}.${val2} = ${text_1}\n`;
  return code; 
};

  // 객체 생성
Blockly.Python['class_make'] = function(block) {
    var variable_1 = Blockly.Python.valueToCode(block, '1', Blockly.Python.ORDER_ATOMIC);
    var variable_2 = Blockly.Python.valueToCode(block, '2', Blockly.Python.ORDER_ATOMIC);
    var text_3 = Blockly.Python.valueToCode(block, '3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_1+' = '+variable_2+'('+text_3+')\n';
    return code;
  };

  