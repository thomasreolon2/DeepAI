Blockly.Blocks['sklearn_ensemble'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[앙상블 라이브러리 임포트]")
          .appendField(new Blockly.FieldDropdown([["AdaBoost분류","AdaBoostClassifier"], ["AdaBoost회귀","AdaBoostRegressor"], ["GradientBoosting분류","GradientBoostingClassifier"], ["GradientBoosting회귀","GradientBoostingRegressor"], ["결정트리 분류","RandomForestClassifier"], ["결정트리 회귀","RandomForestRegressor"]]), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['adaboostclassifier'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("[adaboost분류] 모델");
      this.appendValueInput("NAME2")
          .setCheck(null)
          .appendField("추정자 최대 수");
      this.appendValueInput("NAME3")
          .setCheck(null)
          .appendField("seed");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['adaboostregressor'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("[adaboost회귀] 모델");
      this.appendValueInput("NAME2")
          .setCheck(null)
          .appendField("추정자 최대 수");
      this.appendValueInput("NAME3")
          .setCheck(null)
          .appendField("seed");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['gradientboostingclassifier'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("[GradientBoosting분류] 모델");
      this.appendValueInput("NAME2")
          .setCheck(null)
          .appendField("나무 최대 깊이");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['gradientboostingregressor'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("[GradientBoosting회귀] 모델");
      this.appendValueInput("NAME2")
          .setCheck(null)
          .appendField("나무 최대 깊이");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['randomforestclassifier'] = {
    init: function() {
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
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['randomforestregressor'] = {
    init: function() {
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
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  
Blockly.Blocks['sklearn.preprocessing'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[전처리 라이브러리 임포트] ")
          .appendField(new Blockly.FieldDropdown([["PolynomialFeatures","PolynomialFeatures"], ["LabelEncoder","LabelEncoder"], ["OneHotEncoder","OneHotEncoder"], ["StandardScaler","StandardScaler"], ["scale","scale"]]), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['polynomialfeatures'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[PolynomialFeatures] ")
          .appendField("PolynomialFeatures(");
      this.appendValueInput("NAME")
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['fit_transform'] = {
    init: function() {
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
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['sklearn_svm'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[SVM 라이브러리 임포트] ")
          .appendField(new Blockly.FieldDropdown([["선형SVC","LinearSVC"], ["선형SVR","LinearSVR"]]), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['linearsvc'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[선형SVM] ");
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("seed");
      this.appendValueInput("NAME2")
          .setCheck(null)
          .appendField("오차");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['make_pipeline'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[make_pipeline] ")
          .appendField("StandardScaler()");
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField(" LinearSVR");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['linearsvr'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[선형SVR] ");
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("seed");
      this.appendValueInput("NAME2")
          .setCheck(null)
          .appendField("오차");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['polynomialfeatures'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("[다항 Features] ")
          .appendField("모델");
      this.appendDummyInput()
          .appendField("상호작용")
          .appendField(new Blockly.FieldDropdown([["True","True"], ["False","False"]]), "NAME");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['onehotencoder'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("[범주형 자료 변환] ")
          .appendField("모델");
      this.appendDummyInput()
          .appendField("오류발생 처리")
          .appendField(new Blockly.FieldDropdown([["받기","error"], ["무시하기","ignore"]]), "NAME");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['standardscaler'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("[기능 표준화] 모델");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['labelencoder'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("[수치화] 모델");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };