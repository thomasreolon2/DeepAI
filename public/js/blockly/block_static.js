///////////////////////////////////////////////////////
// 2020-12-28 static 카테고리
//////////////////////////////////////////////////////

Blockly.Blocks['static_library'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("[임포트] statistics");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_MATH_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-19 양승국 블록수정
Blockly.Blocks['statistics1'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("통계")
      .appendField(new Blockly.FieldDropdown([["산술 평균(mean)", "mean"], ["부동 소수점 산술 평균(fmean)", "fmean"], ["기하 평균(geometric_mean)", "geometric_mean"], ["조화 평균(harmonic_mean)", "harmonic_mean"], 
      ["중앙값(median)", "median"], ["낮은 중앙값(median_low)", "median_low"], ["높은 중앙값(median_high)", "median_high"], ["그룹화된 데이터의 중앙값(median_grouped)", "median_grouped"], ["단일 최빈값(mode)", "mode"], ["최빈값 리스트(multimode)", "multimode"],
      ["모집단 표준 편차(pstdev)", "pstdev"], ["모집단 분산(pvariance)", "pvariance"], ["표본 표준 편차(stdev)", "stdev"], ["표본 분산(variance)", "variance"]]), "NAME")
      .appendField("(");
    this.appendValueInput("va")
      .setCheck(null)
    this.appendDummyInput()
       .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_MATH_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-19 양승국 블록수정
Blockly.Blocks['statistics2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("통계")
      .appendField(new Blockly.FieldDropdown([["그룹화된 데이터의 중앙값(median_grouped)", "1"], ["같은 확률을 갖는 구간으로 나누기(quantiles)", "2"], ["모집단 분산(pvariance)", "3"], ["표본 분산(variance)", "4"]]), "NAME")
      .appendField("(");
    this.appendValueInput("va1")
      .setCheck(null);
    this.appendValueInput("va2")
      .setCheck(null);
    this.appendDummyInput()
       .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_MATH_HUE}");
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
        .appendField("[임포트] random");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_MATH_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-19 양승국 블록수정
Blockly.Blocks['random1_integer'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("랜덤")
      .appendField("정수랜덤(random)( )")
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_MATH_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['random1_choice'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("랜덤")
      .appendField("추출(choice)")
      .appendField("(");
    this.appendValueInput("va2")
      .setCheck(null)
    this.appendDummyInput()
       .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_MATH_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['random1_shuffle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("랜덤")
      .appendField("셔플(shuffle)")
      .appendField("(");
    this.appendValueInput("va3")
      .setCheck(null)
    this.appendDummyInput()
       .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setOutput(true, null);
    this.setColour("%{BKY_MATH_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
//2020-09-19 양승국 블록수정
Blockly.Blocks['random2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("랜덤")
      .appendField(new Blockly.FieldDropdown([["정수랜덤(randint)", "1"],["실수랜덤(randuniform)", "3"]]), "NAME")
      .appendField("(");
    this.appendValueInput("va1")
      .setCheck(null);
    this.appendValueInput("va2")
      .setCheck(null);
    this.appendDummyInput()
       .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_MATH_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['random3'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("랜덤")
      .appendField("랜덤추출(sample)")
      .appendField("(");
    this.appendValueInput("va1")
      .setCheck(null);
    this.appendValueInput("va2")
      .setCheck(null);
    this.appendDummyInput()
       .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_MATH_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};