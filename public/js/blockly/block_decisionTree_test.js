Blockly.Blocks['train_test_split'] = {
    init: function() {
      this.appendValueInput("x_data")
          .setCheck(null)
          .appendField("활용할 학습 데이터 :");
      this.appendValueInput("y_data")
          .setCheck(null)
          .appendField("활용할 정답 데이터 :");
      this.appendValueInput("x_train")
          .setCheck(null)
          .appendField("학습 특성 값 :");
      this.appendValueInput("x_test")
          .setCheck(null)
          .appendField("테스트 특성 값 :");
      this.appendValueInput("y_train")
          .setCheck(null)
          .appendField("학습 정답 값 :");
      this.appendValueInput("y_test")
          .setCheck(null)
          .appendField("테스트 정답 값 :");
      this.appendDummyInput()
          .appendField("테스트 사이즈 : ")
          .appendField(new Blockly.FieldTextInput("0.2"), "test_size");
      this.appendDummyInput()
          .appendField("데이터 섞기 :")
          .appendField(new Blockly.FieldDropdown([["예","True"], ["아니오","False"]]), "shuffle");
      this.appendDummyInput()
          .appendField("Seed 값 : ")
          .appendField(new Blockly.FieldTextInput("0"), "seed");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };