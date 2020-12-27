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