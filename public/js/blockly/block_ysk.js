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
