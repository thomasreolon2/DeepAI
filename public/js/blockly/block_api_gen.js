Blockly.Python['sklearn_ensemble'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.ensemble import ' + dropdown_name + '\n';
    return code;
  };

  Blockly.Python['adaboostclassifier'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var n_estimators = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    var random_state2 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = AdaBoostClassifier(n_estimators=' + n_estimators + ', random_state='+ random_state2 +')';
    return code;
  };

  Blockly.Python['adaboostregressor'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var n_estimators = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    var random_state2 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = AdaBoostRegressor(n_estimators=' + n_estimators + ',random_state =' + random_state2 + ')';
    return code;
  };


  Blockly.Python['gradientboostingclassifier'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var random_state = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name+' = GradientBoostingClassifier(random_state='+ random_state +')';
    return code;
  };


  Blockly.Python['gradientboostingregressor'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var random_state = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = GradientBoostingRegressor(random_state=' + random_state +')';
    return code;
  };


  Blockly.Python['randomforestclassifier'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var max_depth = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    var random_state = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = RandomForestClassifier(max_depth='+ max_depth +', random_state='+ random_state +')';
    return code;
  };

  Blockly.Python['randomforestregressor'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var max_depth = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    var random_state = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = randomforestregressor(max_depth='+ max_depth +', random_state='+ random_state +')';
    return code;
  };

  
///////////////////////////// SVM
  Blockly.Python['sklearn_svm'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.svm import '+ dropdown_name + '\n';
    return code;
  };

  Blockly.Python['linearsvc'] = function(block) {
    var random_state = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var tol = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'LinearSVC(random_state='+ random_state +', tol='+ tol +')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['linearsvr'] = function(block) {
    var random_state = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var tol = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'LinearSVR(random_state='+ random_state +', tol='+ tol +')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  ///////////////////////////// 전처리
  Blockly.Python['polynomialfeatures'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var interaction_only = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = PolynomialFeatures(interaction_only='+interaction_only+')\n';
    return code;
  };

  Blockly.Python['onehotencoder'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = value_name + " = OneHotEncoder(handle_unknown='"+dropdown_name+"')\n";
    return code;
  };

  Blockly.Python['standardscaler'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = StandardScaler()\n';
    return code;
  };

  Blockly.Python['labelencoder'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = labelencoder()\n';
    return code;
  };