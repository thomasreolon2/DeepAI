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
        .appendField(new Blockly.FieldTextInput("메시지"), "inputdata");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_TEXTS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};


//결과출력(텍스트 + 변수)
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

//결과출력(변수만 있는거)
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
        .appendField("파이썬 코드")
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

Blockly.Blocks['fd_open'] = {
  init: function () {
      this.appendDummyInput()
          .appendField("파일열기")
          .appendField(new Blockly.FieldVariable("f"), "list")
          .appendField(" = open( ");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput().appendField(new Blockly.FieldDropdown([
            [
                "읽기", "r"
            ],
            [
                "쓰기", "w"
            ],
            [
                "추가", "a"
            ]
        ]), "set_menu");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LIST_HUE}");//"%{BKY_COLLECTION_HUE}");
      this.setTooltip("Create a list");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['fd_read'] = {
  init: function () {
      this.appendDummyInput()
          .appendField("파일읽기")
          .appendField(new Blockly.FieldVariable("data"), "list1")
          .appendField(" = ")
          .appendField(new Blockly.FieldVariable("f"), "list2")
          .appendField(new Blockly.FieldDropdown([
            [
                ".read()", ".read()"
            ],
            [
                ".readline()", ".readline()"
            ]
        ]), "set_menu");      
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LIST_HUE}");//"%{BKY_COLLECTION_HUE}");
      this.setTooltip("Create a list");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['fd_write'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("파일쓰기")
            .appendField(new Blockly.FieldVariable("f"), "list")
            .appendField(new Blockly.FieldDropdown([
                [
                    ".write", ".write"
                ],
                [
                    ".writeline", ".writeline"
                ]
            ]), "set_menu"); 
        this.appendValueInput("text")
            .appendField("(")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_LIST_HUE}");//"%{BKY_COLLECTION_HUE}");
        this.setTooltip("Create a list");
        this.setHelpUrl("");
    }
  };

Blockly.Blocks['fd_close'] = {
  init: function () {
      this.appendDummyInput()
          .appendField("파일닫기")
          .appendField(new Blockly.FieldVariable("f"), "list")
          .appendField(".close( ");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LIST_HUE}");//"%{BKY_COLLECTION_HUE}");
      this.setTooltip("Create a list");
      this.setHelpUrl("");
  }
};




/////////////////////////////////////////////////
// Blockly.Blocks['qqq'] = {
//   init: function () {
//       this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Machine_Learning/M1-logo.png", 25, 23, {
//           alt: "*",
//           flipRtl: "FALSE"

//       })).appendField(Blockly.Msg.PANDAS_CSV2).appendField(new Blockly.FieldTextInput(""), "csv_url");
//       this.setInputsInline(true);
//       this.setOutput(true, null);
//       this.setColour(20);
//       this.setTooltip("");
//       this.setHelpUrl("");
//   }
// };
// var dynamicDropdownOptions_ = [];

// function addOptions(text) {
//     dynamicDropdownOptions_.push([text, text]);
// }

// function removeOptions() {
//     dynamicDropdownOptions_ = [];
// }

// ===== 기태 수정(로컬 파일 열기) 21.01.01======================================================================
Blockly.JavaScript['fileopen'] = function (block) {
    var file = block.getFieldValue('csv_url');
    
    var code = "\n";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  // ===== 기태 수정(로컬 파일 열기) ========================================================================================