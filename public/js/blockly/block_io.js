///////////////////////////////////////////////////////
// 2020-12-28 입출력 카테고리
///////////////////////////////////////////////////////

//입력블록
Blockly.Blocks['input1'] = {
  init: function () {
      this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Text/T2-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }));
      this.appendDummyInput()
        .appendField(Blockly.Msg.TEXT_2_DATAINPUT)
        .appendField(new Blockly.FieldTextInput(""), "inputdata");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_TEXTS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};


//출력(텍스트 + 변수)
Blockly.Blocks['printtv'] = {
  init: function () {
      this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Text/T1-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      })).appendField(Blockly.Msg.TEXT_1_PRINT);
      this.appendValueInput("content1").setCheck(null);
      this.appendValueInput("content2").setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TEXTS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//출력(변수만 있는거)
Blockly.Blocks['printc'] = {
  init: function () {
      this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Text/T1-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      })).appendField(Blockly.Msg.TEXT_1_PRINT);
      this.appendValueInput("content").setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TEXTS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['itdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("파이썬 코드 입력")
        .appendField(new Blockly.FieldTextInput(""), "itdata1");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_TEXTS_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['indata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("파이썬 부분 코드"), "indata1");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};