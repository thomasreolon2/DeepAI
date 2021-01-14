//2020-12-26-전우진 definitions
// 함수 블록
Blockly.Blocks['webdefine'] = {
    init: function () {
        this.appendValueInput('1')
            .setCheck(null)
            .appendField('함수');
        this.appendValueInput('2')
            .setCheck(null)
            .appendField('(');
        this.appendDummyInput()
            .appendField('):');
        this.appendStatementInput('DO')
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_PROCEDURES_HUE}");
        this.setTooltip('');
    },
};
//2020-12-26-전우진 return
// return 블록
Blockly.Blocks['webreturn2'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('return');
        this.appendValueInput('return')
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setColour("%{BKY_PROCEDURES_HUE}");
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

// 함수 return 블록1 
Blockly.Blocks['func_return1'] = {
    init: function() {
        this.appendValueInput('1')
            .setCheck(null);
        this.appendValueInput('2')
            .setCheck(null)
            .appendField("=");
        this.appendDummyInput()
            .appendField("(")
            .appendField(new Blockly.FieldTextInput(""), "3")
            .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_PROCEDURES_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // 함수 return 블록1 
Blockly.Blocks['func_return11'] = {
    init: function() {
        this.appendValueInput('1')
          .setCheck(null);
      this.appendDummyInput()
          .appendField("(")
          .appendField(new Blockly.FieldTextInput(""), "2")
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_PROCEDURES_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


// 함수 return 블록 2
Blockly.Blocks['func_return2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput("x,y"), "1")
          .appendField("=");
        this.appendValueInput('2')
          .setCheck(null);
    this.appendDummyInput()
          .appendField("(")
          .appendField(new Blockly.FieldTextInput(""), "3")
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_PROCEDURES_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  