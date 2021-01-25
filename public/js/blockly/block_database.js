  var database = 205;
  
  Blockly.Blocks['db_create'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_CREATE_1);
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
          .appendField(Blockly.Msg.DATABASE_INSERT_1);
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
          .appendField(Blockly.Msg.DATABASE_SELECT_1);
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
          .appendField(Blockly.Msg.DATABASE_SELECT_1);
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
          .appendField(Blockly.Msg.DATABASE_UPDATE_1);
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
          .appendField(Blockly.Msg.DATABASE_DELETE_1);
      this.appendValueInput("SET0").appendField("DELETE FROM").setCheck(null);
      this.appendValueInput("SET1").appendField("WHERE").setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(database);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


  // 전우잔

  Blockly.Blocks['sqlite_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_IMPORT_1 + "sqlite3");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("205");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_conn'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_CONNECT_1)
          .appendField(new Blockly.FieldVariable("con"), "list1")
          .appendField("= sqlite3.connect(");
      this.appendValueInput("va")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("205");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_cur'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.DATABASE_CURSOR_1)
      .appendField(new Blockly.FieldVariable("cur"), "list")
      .appendField("=")
      .appendField(new Blockly.FieldVariable("con"), "list1")
      .appendField(".cursor()");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("205");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['db_exec'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_EXECUTE_1)
          .appendField(new Blockly.FieldVariable("cur"), "list")
          .appendField(".execute(");
      this.appendValueInput("va")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");    
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("205");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

    
  Blockly.Blocks['db_execM'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_EXECUTE_1)
          .appendField(new Blockly.FieldVariable("cur"), "list")
          .appendField(".executemany(");
      this.appendValueInput("va")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");      
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("205");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_commit'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.DATABASE_COMMIT_1)
      .appendField(new Blockly.FieldVariable("var"), "list1")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("205");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_rollback'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.DATABASE_ROLLBACK_1)
      .appendField(new Blockly.FieldVariable("var"), "list1")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("205");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_fetchall'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.DATABASE_FETCHALL_1)
      .appendField(new Blockly.FieldVariable("var"), "list1")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("205");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_fetchone'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.DATABASE_FETCHONE_1)
      .appendField(new Blockly.FieldVariable("var"), "list1")
      .appendField(".close()")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("205");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_close'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.DATABASE_CLOSE_1)
      .appendField(new Blockly.FieldVariable("var"), "list1")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("205");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };