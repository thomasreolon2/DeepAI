///////////////////////////////////////////////////////
// 2020-12-28 math 전우진
//////////////////////////////////////////////////////

Blockly.Blocks['math_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("math 라이브러리");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['math1'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("수학 1 ")
        .appendField(new Blockly.FieldDropdown([["소수점 올림", "ceil"], ["절대값 반환", "fabs"], ["계승 정수 반환", "factorial"], ["소수점 무시", "floor"], 
        ["정수 제곱근 반환", "isqrt"], ["소수,정수 반환", "modf"], ["e 거듭 제곱 반환", "exp"], ["log10 반환", "log10"], ["제곱근 반환", "sqrt"], ["라디안에서 도 변환", "degrees "],
        ["도에서 라디안 변환", "radians"], ["라디안 단윈 아크 코사인 반환", "acos"], ["라디안 단위 아크 사인 반환", "asin"], ["라디안 단위 아크 탄젠트 반환", "atan"],["코사인 반환", "cos"],["사인 반환", "sin"],["탄젠트 반환", "tan"]]), "NAME")
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

  Blockly.Blocks['math2'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("수학 2 ")
        .appendField(new Blockly.FieldDropdown([["최대 공약수 반환", "1"], ["자연로그 반환", "2"], ["거듭제곱", "3"], ["유클리드 거리 반환", "4"]]), "NAME")
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

  Blockly.Blocks['math3'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("수학 3 ")
        .appendField(new Blockly.FieldDropdown([["π", "pi"], ["e", "e"], ["양의 무한대", "inf"], ["nan 값", "nan"]]), "NAME")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  
// increase, 증가 등등
Blockly.Blocks['increase'] = {
  init: function () {
      this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Repeat/R3-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }));
      this.appendValueInput("NUMBER").setCheck(null);
      this.appendValueInput("VALUE").setCheck(null).appendField(new Blockly.FieldDropdown([
          [
              "+=", "+="
          ],
          [
              "-=", "-="
          ],
          [
              "*=", "*="
          ],
          [
              "/=", "/="
          ],
          [
              "%=", "%="
          ],
          [
              "**=", "**="
          ]
      ]), "NAME");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LOOPS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};