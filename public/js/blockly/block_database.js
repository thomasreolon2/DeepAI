  var database = 205;
  
  Blockly.Blocks['db_create'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[생성] ");
      this.appendValueInput("SET0").appendField("CREATE TABLE IF NOT EXISTS").setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(database);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_insert'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[삽입] ");
      this.appendValueInput("SET0").appendField("INSERT INTO").setCheck(null);
      this.appendValueInput("SET1").appendField("VALUES").setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(database);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_select1'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[조회] ");
      this.appendValueInput("SET0").appendField("SELECT").setCheck(null);
      this.appendValueInput("SET1").appendField("FROM").setCheck(null);
      this.appendValueInput("SET2").appendField("WHERE").setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(database);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_select2'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[조회] ");
      this.appendValueInput("SET0").appendField("SELECT").setCheck(null);
      this.appendValueInput("SET1").appendField("FROM").setCheck(null);
      this.appendValueInput("SET2").appendField("").setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(database);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_update'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[수정] ");
      this.appendValueInput("SET0").appendField("UPDATE").setCheck(null);
      this.appendValueInput("SET1").appendField("SET").setCheck(null);
      this.appendValueInput("SET2").appendField("WHERE").setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(database);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_delete'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[삭제] ");
      this.appendValueInput("SET0").appendField("DELECT FROM").setCheck(null);
      this.appendValueInput("SET1").appendField("WHERE").setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(database);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };