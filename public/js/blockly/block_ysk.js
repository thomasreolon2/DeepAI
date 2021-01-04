///////////////////////////////////////////////////////
// 2020-12-26
///////////////////////////////////////////////////////

//values
Blockly.Blocks['df_values'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("[값출력]")
        .appendField(new Blockly.FieldVariable("df"), "list");
        this.setInputsInline(true);
        this.setOutput(true, null);
    this.setColour("%{BKY_TEXTS_HUE}");
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

//columns
Blockly.Blocks['df_columns'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("[컬럼명출력]")
        .appendField(new Blockly.FieldVariable("df"), "list");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_TEXTS_HUE}");
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

//T
Blockly.Blocks['df_T'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("[행열변환]")
        .appendField(new Blockly.FieldVariable("df"), "list");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_TEXTS_HUE}");
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

//df_pivot_table
Blockly.Blocks['df_pivot_table'] = {
  init: function () {
      this.appendDummyInput().appendField("[피벗테이블]");
      this.appendValueInput("LIST").appendField("pd.pivot_table(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour("%{BKY_COLLECTION_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

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
      this.setColour("%{BKY_COLLECTION_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//df_bb
Blockly.Blocks['df_bb'] = {
  init: function () {
      this.appendDummyInput().appendField("[병합하기]").appendField(new Blockly.FieldVariable("df"), "list");
      this.appendDummyInput().appendField(new Blockly.FieldDropdown([
          [
              "(merge)", ".merge("
          ],
          [
            "(concat)", ".concat("
          ],
          [
            "(append)", ".append("
          ]
      ]), "collection");
      this.appendValueInput("LIST").appendField().setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour("%{BKY_COLLECTION_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//df_set_index
Blockly.Blocks['df_set_index'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("[인덱스설정]")
        .appendField(new Blockly.FieldVariable("df"), "list");
        this.appendValueInput("LIST").appendField(".set_indes(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
    this.setColour("%{BKY_TEXTS_HUE}");
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};