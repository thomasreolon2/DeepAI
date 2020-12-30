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
  };

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
  };

  Blockly.Blocks['shutil_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[임포트] shutil");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pickle_dump'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Pickle")
        .appendField("입력")
        .appendField("(");
      this.appendValueInput("va1")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(",")
      this.appendValueInput("va2")
        .setCheck(null)
      this.appendDummyInput()
         .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pickle_load'] = {
    init: function () {
      this.appendDummyInput()
      .appendField("Pickle")
      .appendField(new Blockly.FieldVariable("data"), "list");
      this.appendDummyInput()
        .appendField("불러오기")
        .appendField("(");
      this.appendValueInput("va")
        .setCheck(null)
      this.appendDummyInput()
         .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  
  Blockly.Blocks['os_getcwd'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("현재 경로 ")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['os_listdir'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("파일, 디렉터리 목록 ")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


  Blockly.Blocks['os_mkdir'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("디렉토리 생성 ")
        .appendField("(");
      this.appendValueInput("va")
        .setCheck(null)
      this.appendDummyInput()
         .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['os_rmdir'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("디렉토리 삭제 ")
        .appendField("(");
      this.appendValueInput("va")
        .setCheck(null)
      this.appendDummyInput()
         .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['os_chdir'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("작업 디렉토리 변경 ")
        .appendField("(");
      this.appendValueInput("va")
        .setCheck(null)
      this.appendDummyInput()
         .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['os_remove'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("파일 삭제")
        .appendField("(");
      this.appendValueInput("va")
        .setCheck(null)
      this.appendDummyInput()
         .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['os_rename'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("파일 변경 ")
        .appendField("(");
      this.appendValueInput("va1")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(",")
      this.appendValueInput("va2")
        .setCheck(null)
      this.appendDummyInput()
         .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['shutil_copy'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Shutil")
        .appendField("파일 복사 ")
        .appendField("(");
      this.appendValueInput("va1")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(",")
      this.appendValueInput("va2")
        .setCheck(null)
      this.appendDummyInput()
         .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['shutil_copytree'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Shutil")
        .appendField("디렉토리 복사 ")
        .appendField("(");
      this.appendValueInput("va1")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(",")
      this.appendValueInput("va2")
        .setCheck(null)
      this.appendDummyInput()
         .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['shutil_move'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Shutil")
        .appendField("파일 이동 ")
        .appendField("(");
      this.appendValueInput("va1")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(",")
      this.appendValueInput("va2")
        .setCheck(null)
      this.appendDummyInput()
         .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#FF0000");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };





  //리성주
  Blockly.Blocks['datetime_now'] = {
    init: function() {
      this.appendValueInput("variables")
          .setCheck(null)
          .appendField("datetime 객체생성");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("FF0000");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['now_method'] = {
    init: function() {
      this.appendValueInput("object")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["년도","year"], ["월","month"], ["일","day"], ["시간","hour"], ["분","minute"], ["초","second"], ["요일","weekday()"]]), "datetime_module");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("FF0000");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };



