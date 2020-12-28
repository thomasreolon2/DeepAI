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
      this.appendDummyInput().appendField(Blockly.Msg.TEXT_2_DATAINPUT);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_TEXTS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};