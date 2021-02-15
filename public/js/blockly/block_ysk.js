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



//////////////////////////////////////
//// 2021-02-15 양승국
//////////////////////////////////////
Blockly.Blocks['scipy_write_read'] = {
  init: function () {
    this.appendDummyInput().appendField("[wavfile읽/쓰기]wavfile.").appendField(new Blockly.FieldDropdown([
      [
          "쓰기(write)", "write"
      ],
      [
        "읽기(read)", "read"
      ],
      ]), "collection");
      this.appendValueInput("d1").appendField("(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['scipy_cascade'] = {
  init: function () {
    this.appendDummyInput().appendField("[cascade]signal.cascade");
      this.appendValueInput("d1").appendField("(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['scipy_daub'] = {
  init: function () {
    this.appendDummyInput().appendField("[daub]signal.daub");
      this.appendValueInput("d1").appendField("(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['scipy_morlet'] = {
  init: function () {
    this.appendDummyInput().appendField("[morlet]signal.").appendField(new Blockly.FieldDropdown([
      [
          "(morlet)", "morlet"
      ],
      [
        "(morlet2)", "morlet2"
      ],
      ]), "collection");
      this.appendValueInput("d1").appendField("(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['scipy_qmf'] = {
  init: function () {
    this.appendDummyInput().appendField("[qmf]signal.qmf");
      this.appendValueInput("d1").appendField("(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['scipy_ricker'] = {
  init: function () {
    this.appendDummyInput().appendField("[ricker]signal.ricker");
      this.appendValueInput("d1").appendField("(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};
