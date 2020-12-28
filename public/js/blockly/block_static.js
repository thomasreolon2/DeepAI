///////////////////////////////////////////////////////
// 2020-12-28 static 카테고리
//////////////////////////////////////////////////////

Blockly.Blocks['static_library'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("statistics 라이브러리");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-19 양승국 블록수정
Blockly.Blocks['statistics1'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("통계함수 1 ")
      .appendField(new Blockly.FieldDropdown([["mean", "mean"], ["fmean", "fmean"], ["geometric_mean", "geometric_mean"], ["harmonic_mean", "harmonic_mean"], 
      ["median", "median"], ["median_low", "median_low"], ["median_high", "median_high"], ["median_grouped", "median_grouped"], ["mode", "mode"], ["multimode", "multimode"],
      ["pstdev", "pstdev"], ["pvariance", "pvariance"], ["stdev", "stdev"], ["variance", "variance"]]), "NAME")
      .appendField("(");
    this.appendValueInput("va")
      .setCheck(null)
    this.appendDummyInput()
       .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};