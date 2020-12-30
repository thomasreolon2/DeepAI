  Blockly.Blocks['os_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[임포트] os");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pyodide_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[임포트] pyodide");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pickle_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[임포트] pickle");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  }

  Blockly.Blocks['datetime_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[임포트] datetime");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  }