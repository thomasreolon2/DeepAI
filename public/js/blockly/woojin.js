Blockly.Blocks['sr_unique'] = {
    init: function () {
      this.appendDummyInput().appendField(Blockly.Msg.PANDAS_CORR_INQUIRY);
      this.appendValueInput("data").setCheck(null);
      this.setColour(pandas_color);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

Blockly.Blocks['sr_name'] = {
    init: function () {
      this.appendDummyInput().appendField(Blockly.Msg.PANDAS_CORR_INQUIRY);
      this.appendValueInput("data").setCheck(null);
      this.setColour(pandas_color);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

Blockly.Blocks['sr_is_in'] = {
    init: function () {
      this.appendDummyInput().appendField(Blockly.Msg.PANDAS_CORR_INQUIRY);
      this.appendField(new Blockly.FieldVariable("data"), "a");
      this.appendValueInput("data2").setCheck(null);
      this.setColour(pandas_color);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['sr_tolist'] = {
    init: function () {
      this.appendDummyInput().appendField(Blockly.Msg.PANDAS_CORR_INQUIRY);
      this.appendValueInput("data").setCheck(null);
      this.setColour(pandas_color);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['sr_index()'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("index"), "a")
          .appendField("(");
      this.appendValueInput("index,list").setCheck(null)
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(pandas_color);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['sr_index[]'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("index"), "1")
          .appendField("(");
          this.appendValueInput("색인").setCheck(null)
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(pandas_color);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['sr_condition[]'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("condition"), "1")
          .appendField("(");
          this.appendValueInput("논리연산").setCheck("Boolean")
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(pandas_color);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };