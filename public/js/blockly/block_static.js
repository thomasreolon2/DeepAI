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
      .appendField(new Blockly.FieldDropdown([["산술 평균", "mean"], ["부동 소수점 산술 평균", "fmean"], ["기하 평균", "geometric_mean"], ["조화 평균", "harmonic_mean"], 
      ["중앙값", "median"], ["낮은 중앙값", "median_low"], ["높은 중앙값", "median_high"], ["그룹화된 데이터의 중앙값", "median_grouped"], ["단일 최빈값", "mode"], ["최빈값 리스트", "multimode"],
      ["모집단 표준 편차", "pstdev"], ["모집단 분산", "pvariance"], ["표본 표준 편차", "stdev"], ["표본 분산", "variance"]]), "NAME")
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

//2020-09-19 양승국 블록수정
Blockly.Blocks['statistics2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("통계함수 2 ")
      .appendField(new Blockly.FieldDropdown([["그룹화된 데이터의 중앙값", "1"], ["같은 확률을 갖는 구간으로 나누기", "2"], ["모집단 분산", "3"], ["표본 분산", "4"]]), "NAME")
      .appendField("(");
    this.appendValueInput("va1")
      .setCheck(null);
    this.appendValueInput("va2")
      .setCheck(null);
    this.appendDummyInput()
       .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

////////////////////////////////////
/// random 블록
////////////////////////////////////

Blockly.Blocks['random_library'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("random 라이브러리");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-19 양승국 블록수정
Blockly.Blocks['random1'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("랜덤함수 1 ")
      .appendField(new Blockly.FieldDropdown([["random", "random"], ["choice", "choice"], ["shuffle", "shuffle"]]), "NAME")
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

//2020-09-19 양승국 블록수정
Blockly.Blocks['random2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("랜덤함수 2 ")
      .appendField(new Blockly.FieldDropdown([["randint", "1"], ["sample", "2"]]), "NAME")
      .appendField("(");
    this.appendValueInput("va1")
      .setCheck(null);
    this.appendValueInput("va2")
      .setCheck(null);
    this.appendDummyInput()
       .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};