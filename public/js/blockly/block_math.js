///////////////////////////////////////////////////////
// 2020-12-28 math 전우진
//////////////////////////////////////////////////////

Blockly.Blocks['math_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[임포트] math");
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
        .appendField(new Blockly.FieldDropdown([["올림", "ceil"], ["절대값", "fabs"], ["계승 정수", "factorial"], ["내림", "floor"], 
        ["정수 제곱근", "isqrt"], ["소수,정수", "modf"], ["e 거듭 제곱", "exp"], ["log10", "log10"], ["제곱근", "sqrt"], ["라디안에서 도 변환", "degrees "],
        ["도에서 라디안 변환", "radians"], ["아크 코사인", "acos"], ["아크 사인", "asin"], ["아크 탄젠트", "atan"],["코사인", "cos"],["사인", "sin"],["탄젠트", "tan"]]), "NAME")
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
        .appendField(new Blockly.FieldDropdown([["최대 공약수", "1"], ["자연로그", "2"], ["거듭제곱", "3"], ["유클리드 거리", "4"]]), "NAME")
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
// Blockly.Blocks['increase'] = {
//   init: function () {
//       this.setStyle("variable_blocks");
//       this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Repeat/R3-logo.png", 25, 23, {
//           alt: "*",
//           flipRtl: "FALSE"
//       }));
//       this.appendValueInput("NUMBER").setCheck(null);
//       this.appendValueInput("VALUE").setCheck(null).appendField(new Blockly.FieldDropdown([
//           [
//               "+=", "+="
//           ],
//           [
//               "-=", "-="
//           ],
//           [
//               "*=", "*="
//           ],
//           [
//               "/=", "/="
//           ],
//           [
//               "%=", "%="
//           ],
//           [
//               "**=", "**="
//           ]
//       ]), "NAME");
//       this.setInputsInline(true);
//       this.setPreviousStatement(true, null);
//       this.setNextStatement(true, null);
//       this.setTooltip("");
//       this.setHelpUrl("");
//   }
// };