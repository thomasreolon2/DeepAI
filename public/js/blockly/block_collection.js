///////////////////////////////////////////////////////
// 2020-12-26
///////////////////////////////////////////////////////

Blockly.Blocks['create_list'] = {
  init: function () {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("list"), "list")
          .appendField(" = [");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("]");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LISTS_HUE}");
      this.setTooltip("Create a list");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['indata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "indata1");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
