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

// 문자다루기 2021.01.02 남지원
// Blockly.Blocks['text_editing'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("[문자다루기]")
//         .appendField(new Blockly.FieldVariable("item"), "VAR")
//         .appendField("에")
//     this.appendValueInput("INPUT").setCheck(null);    
//     this.appendDummyInput()
//         .appendField("를")
//         .appendField(new Blockly.FieldDropdown([["분리(split)","split"], ["개수(count)","count"], ["위치(find)","find"], ["삽입(join)","join"], ["교체(replace)","replace"], ["대문자로(upper)","upper"],["소문자로(lower)","lower"],["L공백제거(lstrip)","lstrip"],["R공백제거(rstrip)","rstrip"],["양쪽공백제거(strip)","strip"]]), "FUNC");
//     this.setInputsInline(true);
//     this.setOutput(true, null);
//       this.setColour("%{BKY_TEXTS_HUE}");
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };

 
// 문자 편집 2021.01.03 남지원
Blockly.Blocks['text_editing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[편집]")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("에");
    this.appendValueInput("INPUT1")
        .setCheck(null);    
    this.appendDummyInput()
        .appendField("를")
        .appendField(new Blockly.FieldDropdown([["분리(split)","split"], ["삽입(join)","join"], ["교체(replace)","replace"], ["L공백제거(lstrip)","lstrip"],["R공백제거(rstrip)","rstrip"],["양쪽공백제거(strip)","strip"]]), "FUNC");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_TEXTS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 문자 검색 2021.01.03 남지원
Blockly.Blocks['text_search'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[검색]")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("에");
    this.appendValueInput("INPUT1")
        .setCheck(null);    
    this.appendDummyInput()
        .appendField("를")
        .appendField(new Blockly.FieldDropdown([["찾기(find)","find"], ["개수(count)","count"], ["인덱스(index)","index"], ["R찾기(rfind)","rfind"],["R인덱스(rindex)","rindex"]]), "FUNC");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_TEXTS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
