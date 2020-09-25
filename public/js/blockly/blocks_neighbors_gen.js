
  //라이브러리 import 블럭
  Blockly.Python['knn_import'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.neighbors import'+" "+dropdown_name+'\n';
    return code;
  };
  //KNeighborsClassifier 블럭 함수

  Blockly.Python['kneighborsclassifier_function'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var value_name1 = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name+" = "+'KNeighborsClassifier(n_neighbors='+value_name1+" )\n";
    return code;
  };
  //KNeighborsRegressor 블럭 함수

  Blockly.Python['kneighborsregressor_function'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_value+" = "+"kNeighborsRegressor(n_neighbors=" +value_value1+" )\n";
    return code;
  };

  //KNeighborsTransformer 블록 함수

  Blockly.Python['kneighborstransformer_function'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = value_value+" = make_pipeline(KNeighborsTransformer( n_neighbors= "+value_value1+" ,  mode="+dropdown_name+" ), Isomap(neighbors_algorithm='precomputed'))\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  };
  //kneighbors_graph 블록 함수

  Blockly.Python['kneighbors_graph_function'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
    var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    var dropdown_name1 = block.getFieldValue('NAME1');
    // TODO: Assemble Python into code variable.
    if(dropdown_name1=="auto" && dropdown_name1 =="connectivity"){
      dropdown_name2 = "true";
      }
      else if (dropdown_name1=="auto" && dropdown_name1 =="distance")
      dropdown_name2 = "false";
    var code = value_value+" = kneighbors_graph("+value_value1+","+value_value2+", mode = "+dropdown_name+", include_self = "+dropdown_name1+")\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  };