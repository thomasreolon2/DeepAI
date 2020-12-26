///////////////////////////////////////////////////////
// 2020-12-26
///////////////////////////////////////////////////////

Blockly.Blocks['test'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "test");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};