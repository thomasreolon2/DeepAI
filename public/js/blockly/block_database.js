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


  // 전우잔

  Blockly.Blocks['sqlite_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[임포트] sqlite3");
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
      .appendField("연결")
      this.appendValueInput("va")
        .setCheck(null)
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("205");
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
      this.setColour("205");
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
      this.setColour("205");
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
      this.setColour("205");
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
      this.setColour("205");
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
      this.setColour("205");
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
      this.setColour("205");
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
      this.setColour("205");
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
      this.setColour("205");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };