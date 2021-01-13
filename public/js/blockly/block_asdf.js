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

//pie_figure
Blockly.Blocks['pie_figure'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("[figure]")
        .appendField(new Blockly.FieldVariable("fig"), "list")
        .appendField("= plt.figure()");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    this.setColour(pandas_color);
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

//pie_add_subplot
Blockly.Blocks['pie_add_subplot'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("[add_subplot]")
        .appendField(new Blockly.FieldVariable("ax"), "list")
        .appendField("=");
    this.appendValueInput("d1").appendField().setCheck(null);
    this.appendValueInput("d2").appendField(".add_subplot(").setCheck(null).appendField("크기");
    this.appendValueInput("d3").appendField("projection=").setCheck(null); 
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

//pie_ax_scatter
Blockly.Blocks['pie_ax_scatter'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("[ax_scatter]")
        .appendField(new Blockly.FieldVariable("c"), "list")
        .appendField("=");
    this.appendValueInput("d1").appendField().setCheck(null).appendField(".ax_scatter(");
    this.appendValueInput("d2").setCheck(null);
    this.appendValueInput("d3").setCheck(null);
    this.appendValueInput("d4").appendField("c =").setCheck(null);
    this.appendValueInput("d5").appendField("s =").setCheck(null);    
    this.appendValueInput("d6").appendField("cmap =").setCheck(null);  
    this.appendValueInput("d7").appendField("alpha =").setCheck(null);  
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};