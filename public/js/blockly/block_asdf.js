///////////////////////////////////////////////////////
// 2021-01-13
///////////////////////////////////////////////////////

//pie_subplots
Blockly.Blocks['pie_subplots'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("[subplots]")
        .appendField(new Blockly.FieldVariable("ax1"), "list")
        .appendField("= plt.subplots()");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    this.setColour(pandas_color);
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

//pie_pie
Blockly.Blocks['pie_pie1'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("[pie]")
        .appendField(new Blockly.FieldVariable("ax1"), "list")
        .appendField(".pie(");
    this.appendValueInput("d1").appendField("사이즈").setCheck(null);
    this.appendValueInput("d2").appendField("explode").setCheck(null);
    this.appendValueInput("d3").appendField("라벨").setCheck(null);
    this.appendValueInput("d4").appendField("autopct").setCheck(null);
    this.appendDummyInput().appendField("그림자(shadow)").appendField(new Blockly.FieldDropdown([
      [
          "True", "True"
      ],
      [
        "False", "False"
      ],
      ]), "collection");
    this.appendValueInput("d5").appendField("startangle").setCheck(null);    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

//pie_axis
Blockly.Blocks['pie_axis'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("[axis]")
        .appendField(new Blockly.FieldVariable("ax1"), "list");
        this.appendValueInput("d1").appendField("axis").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    this.setColour(pandas_color);
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

