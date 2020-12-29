///////////////////////////////////////////////////////
// 2020-12-26
///////////////////////////////////////////////////////

//""없는 문자
Blockly.Blocks['char_a_none'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField(Blockly.Msg.TEXT_4_TEXT)
        .appendField(new Blockly.FieldTextInput(""), "char_A_none_val");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_TEXTS_HUE}");
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

// text_replace
//2020-12-04 양승국1 번역
Blockly.Blocks['text_replace'] = {
  init: function () {
      this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Text/T13-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }));
      this.appendDummyInput().appendField(Blockly.Msg.TEXT_14_1_TEXTCHANGE);
      this.appendValueInput("TEXT").setCheck(null);
      this.appendDummyInput().appendField(Blockly.Msg.TEXT_14_2_EXISTING);
      this.appendValueInput("A").setCheck(null);
      this.appendDummyInput().appendField(Blockly.Msg.TEXT_14_3_CHANGE);
      this.appendValueInput("B").setCheck(null);
      this.appendDummyInput().appendField(Blockly.Msg.TEXT_14_4_END);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_TEXTS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};