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
        .appendField(new Blockly.FieldDropdown([["ceil", "ceil"], ["fabs", "fabs"], ["factorial", "factorial"], ["floor", "floor"], 
        ["isqrt", "isqrt"], ["modf", "modf"], ["exp", "exp"], ["log10", "log10"], ["sqrt", "sqrt"], ["degrees", "degrees "],
        ["radians", "radians"], ["acos", "acos"], ["asin", "asin"], ["atan", "atan"],["cos", "cos"],["sin", "sin"],["tan", "tan"]]), "NAME")
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
        .appendField(new Blockly.FieldDropdown([["gcd", "1"], ["log", "2"], ["pow", "3"], ["dist", "4"]]), "NAME")
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
        .appendField(new Blockly.FieldDropdown([["pi", "pi"], ["e", "e"], ["inf", "inf"], ["nan", "nan"]]), "NAME")
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