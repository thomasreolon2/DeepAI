///////////////////////////////////////////////////////
// 2020-12-26
///////////////////////////////////////////////////////

Blockly.Blocks['create_list'] = {
  init: function () {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("/img/Collection/C0-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldVariable("my_list"), "list")
          .appendField(" = [");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("]");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_COLLECTION_HUE}");
      this.setTooltip("Create a list");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['indata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "indata1");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//2020-12-27-전우진-global
Blockly.Blocks['global'] = {
  init: function () {
      this.appendDummyInput()
          .appendField("global");
      this.appendValueInput("text")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_COLLECTION_HUE}");
      this.setTooltip('');
      this.setHelpUrl('');
  },
};


// 리스트 정렬, 뒤집기
Blockly.Blocks['list_sort_reverse'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C13-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_13_ARRAYSUM).appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg.COLLECTION_13_REVERSE, "reverse"
            ],
            [
                Blockly.Msg.COLLECTION_13_SORT, "sort"
            ]
        ]), "NAME");
        this.appendValueInput("LIST").setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 리스트에서 값 찾기
Blockly.Blocks['list_index'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C14-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_14_FINDVALUE);
        this.appendValueInput("LIST").setCheck(null);
        this.appendDummyInput().appendField("(" + Blockly.Msg.COLLECTION_14_INDEX);
        this.appendValueInput("INDEX").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


// 리스트 삽입
Blockly.Blocks['list_insert'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C15-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_15_INSERTTOLIST);
        this.appendValueInput("LIST").setCheck(null);
        this.appendDummyInput().appendField("(" + Blockly.Msg.COLLECTION_15_INDEX);
        this.appendValueInput("INDEX").setCheck(null);
        this.appendDummyInput().appendField(", " + Blockly.Msg.COLLECTION_15_VALUE);
        this.appendValueInput("VALUE").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 리스트 삭제, 끄집어내기, 요소의개수, 확장
Blockly.Blocks['list_remove_pop_count_extend'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C16-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_16_LIST).appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg.COLLECTION_16_EXTEND, "extend"
            ],
            [
                Blockly.Msg.COLLECTION_16_EXTEND, "count"
            ],
            [
                Blockly.Msg.COLLECTION_16_COUNT, "pop"
            ],
            [
                Blockly.Msg.COLLECTION_16_POP, "remove"
            ],
            [
                Blockly.Msg.COLLECTION_16_APPEND, "append"
            ]
        ]), "NAME").appendField("->").appendField("(" + Blockly.Msg.COLLECTION_16_LIST);
        this.appendValueInput("LIST").setCheck(null);
        this.appendDummyInput().appendField(", " + Blockly.Msg.COLLECTION_16_ELEMETNT);
        this.appendValueInput("VALUE").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 리스트 자르기
Blockly.Blocks['list_dot'] = {
    init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C17-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
      this.appendDummyInput()
          .appendField("[" + Blockly.Msg.COLLECTION_17_SPLIT +"]");
        this.appendValueInput("list")
        .setCheck(null);
      this.appendDummyInput()
          .appendField("[");
      this.appendValueInput("a")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(":");
      this.appendValueInput("b")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_COLLECTION_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };