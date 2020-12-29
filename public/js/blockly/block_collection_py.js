////////////////////////////////////////////////////////////////////
// 2020-12-26 
////////////////////////////////////////////////////////////////////



Blockly.Python['create_list'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + ' = [' + value_text + ']\n';
  return code;
};

//2020-12-27-전우진-global
Blockly.Python['global'] = function (block) {
  var text_print = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'global ' + text_print + '\n';
  return code;
};

// 튜플
Blockly.Python['tuple'] = function(block) {
  // Create a list with any number of elements of any type.
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = Blockly.Python.valueToCode(block, 'ADD' + i,
        Blockly.Python.ORDER_NONE) || 'None';
  }
  var code = '(' + elements.join(', ') + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//2020-12-29 양승국
Blockly.Python['create_tuple'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + ' = (' + value_text + ')\n';
  return code;
};

//2020-12-29 양승국
Blockly.Python['create_ziphap'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + ' = set( ' + value_text + ' )\n';
  return code;
};


//////////////////////////////////////////////////////
// 실험실


// 딕셔너리
Blockly.Python['dict1'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var key = new Array(block.itemCount_);
  var values = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i = i + 1) {
      if (i == block.itemCount_ - 1) {
          key[i] = Blockly.Python.valueToCode(block, 'ADD' + i, Blockly.Python.ORDER_NONE) + ' : ' + Blockly.Python.valueToCode(block, 'ADD2' + i, Blockly.Python.ORDER_NONE)
      } else {
          key[i] = Blockly.Python.valueToCode(block, 'ADD' + i, Blockly.Python.ORDER_NONE) + ' : ' + Blockly.Python.valueToCode(block, 'ADD2' + i, Blockly.Python.ORDER_NONE) + ', ';
          key[i + 1] = Blockly.Python.valueToCode(block, 'ADD' + i + 1, Blockly.Python.ORDER_NONE) + ' : ' + Blockly.Python.valueToCode(block, 'ADD2' + i + 1, Blockly.Python.ORDER_NONE)
      }
  }

  // 리턴의 순서를 바꿔줘야함
  var code =  variable_list + ' = {' + key.join('') + '}';
  return code;
};