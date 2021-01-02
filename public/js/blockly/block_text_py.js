////////////////////////////////////////////////////////////////////
// 2020-12-26 
////////////////////////////////////////////////////////////////////


//""없는 문자
Blockly.Python['char_a_none'] = function(block) {
  var text_char_a_none_val = block.getFieldValue('char_A_none_val');
  // TODO: Assemble Python into code variable.
  var code = `${text_char_a_none_val}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

// text_replace
Blockly.Python['text_replace'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var value_a = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
  var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_text}.replace('${value_a}','${value_b}')`;
  return [code,Blockly.Python.ORDER_NONE];
};

// 문자다루기 2021.01.02 남지원
Blockly.Python['text_maker'] = function(block) {
  var variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var text_input = block.getFieldValue('INPUT');
  var dropdown_func = block.getFieldValue('FUNC');
  // TODO: Assemble Python into code variable.
  switch(dropdown_func){
    case 'split':
      var code = `${variable_var}.${dropdown_func}('${text_input}')`;
    break;
    case 'count':
      var code = `${variable_var}.${dropdown_func}('${text_input}')`;
    break;
    case 'find':
      var code = `${variable_var}.${dropdown_func}('${text_input}')`;
    break;
    case 'join':
      var code = `"${text_input}".${dropdown_func}(${variable_var})`;
    break;
    case 'replace':
      var code = ``;
    break;
    case 'upper':
      var code = `${variable_var}.${dropdown_func}()`;
    break;
    case 'lower':
      var code = `${variable_var}.${dropdown_func}()`;
    break;
    case 'lstrip':
      var code = `${variable_var}.${dropdown_func}()`;
    break;
    case 'rstrip':
      var code = `${variable_var}.${dropdown_func}()`;
    break;
    case 'strip':
      var code = `${variable_var}.${dropdown_func}()`;
    break;
  }
  return [code, Blockly.Python.ORDER_ATOMIC];
};