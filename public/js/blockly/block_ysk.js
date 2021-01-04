///////////////////////////////////////////////////////
// 2020-12-26
///////////////////////////////////////////////////////

//values
Blockly.Blocks['df_values'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("[값출력]")
        .appendField(new Blockly.FieldVariable("df"), "list");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_TEXTS_HUE}");
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

