///////////////////////////////////////////////////////
// 2020-12-26
///////////////////////////////////////////////////////

Blockly.Blocks['indata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "indata");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};