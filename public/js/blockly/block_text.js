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
        .appendField(new Blockly.FieldImage("/img/Str/S6-logo.png", 25, 23, {
         alt: "*",
         flipRtl: "FALSE"
     }))
        .appendField("[편집]")
        .appendField(new Blockly.FieldVariable("s"), "VAR")
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
        .appendField(new Blockly.FieldImage("/img/Str/S7-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }))
        .appendField("[검색]")
        .appendField(new Blockly.FieldVariable("s"), "VAR")
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

// 문자 대소문자 2021.01.03 남지원
Blockly.Blocks['text_up_low'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/img/Str/S8-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }))
        .appendField("[대소]")
        .appendField(new Blockly.FieldVariable("s"), "VAR"); 
    this.appendDummyInput()
        .appendField("를")
        .appendField(new Blockly.FieldDropdown([["대문자(upper)","upper"], ["소문자(lower)","lower"], ["첫문자(title)","title"], ["첫문장(capitalize)","capitalize"],["교환(swapcase)","swapcase"]]), "FUNC");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_TEXTS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 문자 정렬 2021.01.03 남지원
Blockly.Blocks['text_sort'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/img/Str/S9-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }))
        .appendField("[정렬]")
        .appendField(new Blockly.FieldVariable("s"), "VAR")  
        .appendField("에");
    this.appendValueInput("INPUT1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("만큼");
    this.appendValueInput("INPUT2")
        .setCheck(null);   
    this.appendDummyInput()
        .appendField("를")
        .appendField(new Blockly.FieldDropdown([["L맞춤(ljust)","ljust"], ["R맞춤(rjust))","rjust"], ["중앙(center)","center"], ["탭지정(extendtabs)","extendtabs"]]), "FUNC");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_TEXTS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


// 문자 대소문자 2021.01.03 남지원
Blockly.Blocks['text_query'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/img/Str/S10-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }))
        .appendField("[질의]")
        .appendField(new Blockly.FieldVariable("s"), "VAR"); 
    this.appendDummyInput()
        .appendField("를")
        .appendField(new Blockly.FieldDropdown([["문자(isalpha)","isalpha"], ["숫자(isdigit)","isdigit"], ["문숫자(isalnum)","isalnum"], ["대문자(isupper)","isupper"],["소문자(islower)","islower"]]), "FUNC");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_TEXTS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 문자 슬라이싱 2021.01.03 남지원
Blockly.Blocks['text_slice'] = {
  init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Str/S5-logo.png", 25, 23, {
              alt: "*",
              flipRtl: "FALSE"
        }))   
        .appendField("[슬라이싱]")
        .appendField(new Blockly.FieldVariable("s"), "VAR")  
        .appendField("[");
    this.appendValueInput("INPUT1")
        .setCheck(null);
        this.appendDummyInput()
        .appendField(":")   
    this.appendValueInput("INPUT2")
        .setCheck(null);  
        this.appendDummyInput()
        .appendField(":") 
    this.appendValueInput("INPUT3")
        .setCheck(null);   
    this.appendDummyInput()
        .appendField("]")
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_TEXTS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 문자생성
Blockly.Blocks['create_text'] = {
  init: function () {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("/img/Str/S4-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldVariable("s"), "VAR")
          .appendField(' = "');
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField('"');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TEXTS_HUE}");
      this.setTooltip("Create a list");
      this.setHelpUrl("");
  }
};