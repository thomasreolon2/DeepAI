//라이브러리 import 블럭
Blockly.Blocks['knn_import'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.KNN_IMPORT)
          .appendField(new Blockly.FieldDropdown([["KNeighborsClassifier","KNeighborsClassifier"], ["KNeighborsRegressorption","KNeighborsRegressorption"], 
          ["KNeighborsTransformer","KNeighborsTransformer"], ["kneighbors_graph","kneighbors_graph"], ["NearestNeighbors","NearestNeighbors"]]), "NAME");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  //KNeighborsClassifier 블럭 함수
  Blockly.Blocks['kneighborsclassifier_function'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_1)
          .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_2);
      this.appendValueInput("value")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_3);
      this.appendValueInput("value1")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  //KNeighborsRegressor 블럭 함수
  Blockly.Blocks['kneighborsregressor_function'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.KNN_KNEIGHBORSREGERESSOR_FUNCTION)
          .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_2);
      this.appendValueInput("value")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_3);
      this.appendValueInput("value1")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  

  // KNeighborsTransformer 블록 함수
  Blockly.Blocks['kneighborstransformer_function'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.KNN_KNEIGHBORSTRANSFORMER_FUNCTION_1)
          .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_2);
      this.appendValueInput("value")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_3);
      this.appendValueInput("value1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(Blockly.Msg.KNN_KNEIGHBORSTRANSFORMER_FUNCTION_2)
          .appendField(new Blockly.FieldDropdown([["Distance","distance"], ["Connectivity","donnectivity"]]), "NAME");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  //kneighbors_graph 블록 함수
  Blockly.Blocks['kneighbors_graph_function'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.KNN_KNEIGHBORS_GRAPH_FUNCTION_1)
          .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_2);
      this.appendValueInput("value")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("X");
      this.appendValueInput("value1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_3);
      this.appendValueInput("value2")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(Blockly.Msg.KNN_KNEIGHBORSTRANSFORMER_FUNCTION_2)
          .appendField(new Blockly.FieldDropdown([["Distance","distance"], ["Connectivity","connectivity"]]), "NAME");
      this.appendDummyInput()
          .appendField(Blockly.Msg.KNN_KNEIGHBORS_GRAPH_FUNCTION_2)
          .appendField(new Blockly.FieldDropdown([["True","true"], ["False","false"]]), "NAME1");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };