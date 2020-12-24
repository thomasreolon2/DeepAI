Blockly.Blocks['sklearn_ensemble'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ESEMBLE_SKLEARN_ESEMBLE_1)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ESEMBLE_SKLEARN_ESEMBLE_2, "AdaBoostClassifier"], [Blockly.Msg.ESEMBLE_SKLEARN_ESEMBLE_3, "AdaBoostRegressor"], [Blockly.Msg.ESEMBLE_SKLEARN_ESEMBLE_4, "GradientBoostingClassifier"], [Blockly.Msg.ESEMBLE_SKLEARN_ESEMBLE_5, "GradientBoostingRegressor"], [Blockly.Msg.ESEMBLE_SKLEARN_ESEMBLE_6, "RandomForestClassifier"], [Blockly.Msg.ESEMBLE_SKLEARN_ESEMBLE_7, "RandomForestRegressor"],["IsolationForest","IsolationForest"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['adaboostclassifier'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("[Adaboost분류] 모델");
    this.appendValueInput("NAME2")
      .setCheck(null)
      .appendField("추정자 최대 수");
    this.appendValueInput("NAME3")
      .setCheck(null)
      .appendField("seed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['adaboostregressor'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("[Adaboost회귀] 모델");
    this.appendValueInput("NAME2")
      .setCheck(null)
      .appendField("추정자 최대 수");
    this.appendValueInput("NAME3")
      .setCheck(null)
      .appendField("seed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['gradientboostingclassifier'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("[GradientBoosting분류] 모델");
    this.appendValueInput("NAME2")
      .setCheck(null)
      .appendField("나무 최대 깊이");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['gradientboostingregressor'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("[GradientBoosting회귀] 모델");
    this.appendValueInput("NAME2")
      .setCheck(null)
      .appendField("나무 최대 깊이");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['randomforestclassifier'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("[결정트리 분류] 모델");
    this.appendValueInput("NAME2")
      .setCheck(null)
      .appendField("나무 최대 깊이");
    this.appendValueInput("NAME3")
      .setCheck(null)
      .appendField("seed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['randomforestregressor'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("[결정트리 회귀] 모델");
    this.appendValueInput("NAME2")
      .setCheck(null)
      .appendField("나무 최대 깊이");
    this.appendValueInput("NAME3")
      .setCheck(null)
      .appendField("seed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['sklearn.preprocessing'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PREPROCESSING_SKLEARN)
      .appendField(new Blockly.FieldDropdown([
       ["PolynomialFeatures", "PolynomialFeatures"], 
       ["LabelEncoder", "LabelEncoder"], 
       ["OneHotEncoder", "OneHotEncoder"], 
       ["StandardScaler", "StandardScaler"],
       ["Scale", "scale"], 
       ["train_test_split","train_test_split"] 
      ]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['polynomialfeatures'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("[PolynomialFeatures] ")
      .appendField("PolynomialFeatures(");
    this.appendValueInput("NAME")
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fit_transform'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null);
    this.appendValueInput("NAME2")
      .setCheck(null)
      .appendField(".fit_transform(");
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sklearn_svm'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SKLEARN_SVM_1)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SKLEARN_SVM_2, "LinearSVC"], [Blockly.Msg.SKLEARN_SVM_3, "LinearSVR"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['linearsvc'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINEARSVC_1);
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("seed");
    this.appendValueInput("NAME2")
      .setCheck(null)
      .appendField(Blockly.Msg.LINEARSVC_2);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['make_pipeline'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("[make_pipeline] ")
      .appendField("StandardScaler()");
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField(" LinearSVR");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['linearsvr'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINEARSVR);
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("seed");
    this.appendValueInput("NAME2")
      .setCheck(null)
      .appendField("오차");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['polynomialfeatures'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField(Blockly.Msg.PREPROCESSING_POLYNOMIALFEATURES_1)
      .appendField(Blockly.Msg.PREPROCESSING_POLYNOMIALFEATURES_2);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PREPROCESSING_POLYNOMIALFEATURES_3)
      .appendField(new Blockly.FieldDropdown([["True", "True"], ["False", "False"]]), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['onehotencoder'] = {
  init: function () {
    this.appendValueInput("data")
      .setCheck(null)
      .appendField(Blockly.Msg.PREPROCESSING_ONEHOTENCODER_1)
      .appendField(Blockly.Msg.PREPROCESSING_ONEHOTENCODER_2);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
  }
};

Blockly.Blocks['standardscaler'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("[기능 표준화] 모델");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

  // Blockly.Blocks['labelencoder'] = {
  //   init: function() {
  //     this.appendValueInput("NAME")
  //         .setCheck(null)
  //         .appendField("[수치화] 모델");
  //     this.setInputsInline(true);
  //     this.setPreviousStatement(true, null);
  //     this.setNextStatement(true, null);
  //     this.setColour("%{BKY_SCIKITLEARN_HUE}");
  //  this.setTooltip("");
  //  this.setHelpUrl("");
  //   }
  // };