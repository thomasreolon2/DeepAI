Blockly.Blocks['gp'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.MATPLOT_VISUALIZATION_LIBRARY);
      this.setColour(230);
      this.setInputsInline(true);
      //this.setOutput(true, null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
   
    }
  };