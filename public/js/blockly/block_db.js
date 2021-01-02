Blockly.Blocks['sqlite_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[임포트] sqlite3");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#c8c8c8");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_conn'] = {
    init: function () {
      this.appendDummyInput()
      .appendField("연결")
      .appendField(new Blockly.FieldVariable("var"), "list");
      this.appendValueInput("va")
        .setCheck(null)
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#c8c8c8");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_cur'] = {
    init: function () {
      this.appendDummyInput()
      .appendField("커서")
      .appendField(new Blockly.FieldVariable("var"), "list1")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#c8c8c8");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['db_exec'] = {
    init: function () {
      this.appendDummyInput()
      .appendField("실행")
      .appendField(new Blockly.FieldVariable("var"), "list");
      this.appendValueInput("va")
        .setCheck(null)
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#c8c8c8");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

    
  Blockly.Blocks['db_execM'] = {
    init: function () {
      this.appendDummyInput()
      .appendField("데이터셋실행")
      .appendField(new Blockly.FieldVariable("var"), "list");
      this.appendValueInput("va")
        .setCheck(null)
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#c8c8c8");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_commit'] = {
    init: function () {
      this.appendDummyInput()
      .appendField("커밋")
      .appendField(new Blockly.FieldVariable("var"), "list1")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#c8c8c8");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_rollback'] = {
    init: function () {
      this.appendDummyInput()
      .appendField("롤백")
      .appendField(new Blockly.FieldVariable("var"), "list1")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#c8c8c8");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_fetchall'] = {
    init: function () {
      this.appendDummyInput()
      .appendField("전체읽기")
      .appendField(new Blockly.FieldVariable("var"), "list1")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#c8c8c8");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_fetchone'] = {
    init: function () {
      this.appendDummyInput()
      .appendField("하나읽기")
      .appendField(new Blockly.FieldVariable("var"), "list1")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#c8c8c8");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_close'] = {
    init: function () {
      this.appendDummyInput()
      .appendField("해제")
      .appendField(new Blockly.FieldVariable("var"), "list1")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#c8c8c8");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };