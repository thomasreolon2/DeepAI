Blockly.Blocks['sys_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[임포트] sys");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

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
