Blockly.Python['sklearn_ensemble'] = function (block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'from sklearn.ensemble import ' + dropdown_name + '\n';
  return code;
};

Blockly.Python['adaboostclassifier'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var n_estimators = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var random_state2 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name + ' = AdaBoostClassifier(n_estimators=' + n_estimators + ', random_state=' + random_state2 + ')';
  return code;
};

Blockly.Python['adaboostregressor'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var n_estimators = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var random_state2 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name + ' = AdaBoostRegressor(n_estimators=' + n_estimators + ',random_state =' + random_state2 + ')';
  return code;
};


Blockly.Python['gradientboostingclassifier'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var random_state = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name + ' = GradientBoostingClassifier(random_state=' + random_state + ')';
  return code;
};


Blockly.Python['gradientboostingregressor'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var random_state = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name + ' = GradientBoostingRegressor(random_state=' + random_state + ')';
  return code;
};


Blockly.Python['randomforestclassifier'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var max_depth = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var random_state = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name + ' = RandomForestClassifier(max_depth=' + max_depth + ', random_state=' + random_state + ')';
  return code;
};

Blockly.Python['randomforestregressor'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var max_depth = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  var random_state = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name + ' = randomforestregressor(max_depth=' + max_depth + ', random_state=' + random_state + ')';
  return code;
};


///////////////////////////// SVM
Blockly.Python['sklearn_svm'] = function (block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'from sklearn.svm import ' + dropdown_name + '\n';
  return code;
};

Blockly.Python['linearsvc'] = function (block) {
  var random_state = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var tol = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'LinearSVC(random_state=' + random_state + ', tol=' + tol + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['linearsvr'] = function (block) {
  var random_state = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var tol = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'LinearSVR(random_state=' + random_state + ', tol=' + tol + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

///////////////////////////// 전처리
Blockly.Python['sklearn.preprocessing'] = function (block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code;
  code = 'from sklearn.preprocessing import ' + dropdown_name + '\n';
  if (dropdown_name == "OneHotEncoder") {
    code += "oh_enc = OneHotEncoder()\n";
  }else if (dropdown_name == "train_test_split") {
    code = "from sklearn.model_selection import train_test_split";
  }
  
  return code;
};

Blockly.Python['polynomialfeatures'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var interaction_only = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = value_name + ' = PolynomialFeatures(interaction_only=' + interaction_only + ')\n';
  return code;
};

Blockly.Python['onehotencoder'] = function (block) {
  var value_df = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  // "OneHot_enc = OneHotEncoder()\n"
  var code = "oh_enc.fit_transform(" + value_df + ").toarray()\n";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

  // Blockly.Python['standardscaler'] = function(block) {
  //   var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  //   // TODO: Assemble Python into code variable.
  //   var code = value_name + ' = StandardScaler()\n';
  //   return code;
  // };

  // Blockly.Python['labelencoder'] = function(block) {
  //   var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  //   // TODO: Assemble Python into code variable.
  //   var code = value_name + ' = labelencoder()\n';
  //   return code;
  // };
