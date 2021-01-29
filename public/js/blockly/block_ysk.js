///////////////////////////////////////////////////////
// 2020-12-26
///////////////////////////////////////////////////////

//df_ap
Blockly.Blocks['df_ap'] = {
  init: function () {
      this.appendDummyInput().appendField("[함수적용리턴]").appendField(new Blockly.FieldVariable("df"), "list");
      this.appendDummyInput().appendField(new Blockly.FieldDropdown([
          [
              "시리즈로반환(apply)", ".apply("
          ],
          [
            "프레임으로반환(applymap)", ".applymap("
          ],
      ]), "collection");
      this.appendValueInput("LIST").appendField().setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};





//df_agg
Blockly.Blocks['df_agg'] = {
  init: function () {
    this.appendDummyInput().appendField("[그룹]").appendField(new Blockly.FieldVariable("df"), "list");
      this.appendValueInput("LIST").appendField(".agg(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//df_reindex
Blockly.Blocks['df_reindex'] = {
  init: function () {
    this.appendValueInput("VAR")
        .setCheck(null)
        .appendField(Blockly.Msg.PANDAS_REINDEX);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([
          [
            "컬럼명변경(rename)", "rename"  
          ],
          [
            "인덱스재설정(reindex)", "reindex"
          ],
          [
            "인덱스초기화(reset_index)", "reset_index"
          ],
          [
            "인덱스세팅(set_index)", "set_index"
          ]
          ]), "DROP");
        this.appendValueInput("INPUT")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//sr.unique()
Blockly.Blocks['df_unique'] = {
  init: function () {
    this.appendValueInput("VAR").appendField("[unique]");
    this.appendDummyInput()
        .appendField(".unique( )");  
    this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//sr.is_in()
Blockly.Blocks['df_is_in'] = {
  init: function () {
    this.appendValueInput("VAR").appendField("[is_in]");
      this.appendValueInput("LIST").appendField(".isin(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//sr.tolist()
Blockly.Blocks['df_tolist'] = {
  init: function () {
    this.appendValueInput("VAR").appendField("[tolist]")
    this.appendDummyInput().appendField(".tolist( )");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//sr.name
Blockly.Blocks['df_name'] = {
  init: function () {
    this.appendValueInput("VAR").appendField("[name]")
    this.appendDummyInput().appendField(".name");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};