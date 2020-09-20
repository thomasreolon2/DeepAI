//라이브러리 import 블럭
Blockly.Blocks['knn_import'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[임포트] KNN")
          .appendField(new Blockly.FieldDropdown([["KNeighborsClassifier","Classifier"], ["KNeighborsRegressorption","Regressor"], ["KNeighborsTransformer","TransformerME"], ["kneighbors_graph","graph"], ["NearestNeighbors","Nearest"]]), "NAME");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  //KNeighborsClassifier 블럭 함수
  Blockly.Blocks['kneighborsclassifier_function'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[KNeighbors 분류하기]")
          .appendField("모델");
      this.appendValueInput("value")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("데이터");
      this.appendValueInput("value1")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  //KNeighborsRegressor 블럭 함수
  Blockly.Blocks['kneighborsregressor_function'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[KNeighbors 회귀]")
          .appendField("모델");
      this.appendValueInput("value")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("데이터");
      this.appendValueInput("value1")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  

  // KNeighborsTransformer 블록 함수
  Blockly.Blocks['kneighborstransformer_function'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[KNeighbors 트랜스포머]")
          .appendField("모델");
      this.appendValueInput("value")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("데이터");
      this.appendValueInput("value1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("모드")
          .appendField(new Blockly.FieldDropdown([["distance","distance"], ["connectivity","connectivity"]]), "NAME");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  //kneighbors_graph 블록 함수
  Blockly.Blocks['kneighbors_graph_function'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[KNeighbors 그래프]")
          .appendField("X");
      this.appendValueInput("value")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("모델");
      this.appendValueInput("value1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("모드")
          .appendField(new Blockly.FieldDropdown([["distance","distance"], ["connectivity","connectivity"]]), "NAME");
      this.appendDummyInput()
          .appendField("포함시키기")
          .appendField(new Blockly.FieldDropdown([["True","True"], ["False","False"], ["Auto","Auto"]]), "NAME");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };