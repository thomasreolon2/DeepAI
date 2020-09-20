
  //라이브러리 import 블럭
  Blockly.Python['knn_import'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
  };
  //KNeighborsClassifier 블럭 함수

  Blockly.Python['kneighborsclassifier_function'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
  };
  //KNeighborsRegressor 블럭 함수

  Blockly.Python['kneighborsregressor_function'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
  };

  //KNeighborsTransformer 블록 함수

  Blockly.Python['kneighborstransformer_function'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  //kneighbors_graph 블록 함수

  Blockly.Python['kneighbors_graph_function'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };