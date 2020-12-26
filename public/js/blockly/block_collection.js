///////////////////////////////////////////////////////
// 2020-12-26
///////////////////////////////////////////////////////

Blockly.Blocks['indata2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "indata3");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};