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