//2020-12-27-전우진 class

Blockly.Blocks['self'] = {
    init: function () {
        this.appendValueInput("VAR")
            .setCheck(null)
            .appendField('self.');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([['=', '='], ['+=', '+='], ["-=", "-="]]), 'NAME');
        this.appendValueInput("varset")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_CLASS_HUE}");
        this.setTooltip("assign a value, increment, or decrement a variable");
        this.setHelpUrl("");
    }
};

//2020-12-27-전우진 class

Blockly.Blocks['webclass'] = {
    init: function () {
        this.appendValueInput("VAR")
            .setCheck(null)
            .appendField('클래스');
        this.appendDummyInput()
            .appendField(' :');
        this.appendStatementInput('DO')
            .appendField('');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_CLASS_HUE}");
        this.setTooltip('Class Statement.');
        this.setHelpUrl('');
    }
};

// 상속 2021.01.06 남지원
Blockly.Blocks['webclass2'] = {
    init: function () {
        this.appendValueInput("VAR")
            .setCheck(null)
            .appendField('상속');
        this.appendDummyInput()
            .appendField('(');
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(')')
            .appendField(' :');
        this.appendStatementInput('DO')
            .appendField('');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_CLASS_HUE}");
        this.setTooltip('Class Statement.');
        this.setHelpUrl('');
    }
};
 // 객체사용 
 Blockly.Blocks['class_use'] = {
    init: function() {     
        this.appendValueInput("VAR1")
          .setCheck(null)
          .appendField("[ "+ Blockly.Msg.CLASS_5_1 +" ]");
        this.appendValueInput("VAR2")
          .setCheck(null)
          .appendField(".");
        this.appendDummyInput()
          .appendField("(")
          .appendField(new Blockly.FieldTextInput(""), "INPUT")
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(125);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // 객체 생성
  Blockly.Blocks['class_make'] = {
    init: function() {
        this.appendValueInput("1")
            .setCheck(null)
            .appendField("[객체생성]");
          this.appendValueInput("2")
            .setCheck(null)
            .appendField("를");
      this.appendDummyInput()
          .appendField("(")
          .appendField(new Blockly.FieldTextInput(""), "3")
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(125);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };