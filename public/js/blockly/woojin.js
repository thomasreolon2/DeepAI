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



  //db

  //자동 커밋

  Blockly.Blocks['db_autocommit'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.DATABASE_AUTOCOMMIT_1)
      .appendField(new Blockly.FieldVariable("con"), "list1");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(database);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

//DB삭제

  Blockly.Blocks['db_deletedb'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_DELETEDB_1)
          .appendField(new Blockly.FieldVariable("sql"), "list1")
          .appendField(" = DROP TABLE IF EXISTS(");
      this.appendValueInput("SET0").setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(database);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_select2'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_SELECT_1)
          .appendField(new Blockly.FieldVariable("sql"), "list1")
          .appendField("= SELECT");
      this.appendValueInput("d1").setCheck(null);
      this.appendValueInput("d2").appendField("FROM").setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(database);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


//조회 sql = “SELECT (필드) FROM (테이블) ORDER BY (필드)”

  Blockly.Blocks['db_select3'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_SELECT_1)
          .appendField(new Blockly.FieldVariable("sql"), "list1")
          .appendField("= ");
      this.appendValueInput("SET0").appendField("SELECT").setCheck(null);
      this.appendValueInput("SET1").appendField("FROM").setCheck(null);
      this.appendValueInput("SET2").appendField("ORDER BY").setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(database);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

//조회 sql = “SELECT (필드) FROM (테이블) ORDER BY (필드) DESC”

  Blockly.Blocks['db_select4'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_SELECT_1)
          .appendField(new Blockly.FieldVariable("sql"), "list1")
          .appendField("= ");
      this.appendValueInput("SET0").appendField("SELECT").setCheck(null);
      this.appendValueInput("SET1").appendField("FROM").setCheck(null);
      this.appendValueInput("SET2").appendField("ORDER BY").setCheck(null);
      this.appendDummyInput().appendField("DESC");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);;
      this.setColour(database);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

//조회 sql = “SELECT (필드) FROM (테이블) GROUP BY (필드)”

  Blockly.Blocks['db_select5'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_SELECT_1)
          .appendField(new Blockly.FieldVariable("sql"), "list1")
          .appendField("= ");
      this.appendValueInput("SET0").appendField("SELECT").setCheck(null);
      this.appendValueInput("SET1").appendField("FROM").setCheck(null);
      this.appendValueInput("SET2").appendField("GROUP BY").setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(database);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };