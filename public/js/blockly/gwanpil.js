Blockly.Blocks['gp'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.MATPLOT_VISUALIZATION_LIBRARY);
      this.setColour(230);
      this.setInputsInline(true);
      //this.setOutput(true, null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
   
    }
  };

  // 임시 
  // 리스트생성
  Blockly.Blocks['create_list_1'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("/img/Collection/L1-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput("test")
            .appendField(new Blockly.FieldVariable("vegetables"), "list");
        this.appendDummyInput()
            .appendField(" = [");
        this.appendValueInput("text")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("]");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_LISTS_HUE}");
        this.setTooltip("Create a list");
        this.setHelpUrl("");
    }
  };

  Blockly.Blocks['create_list_2'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("/img/Collection/L1-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput("test")
            .appendField(new Blockly.FieldVariable("farmers"), "list");
        this.appendDummyInput()
            .appendField(" = [");
        this.appendValueInput("text")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("]");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_LISTS_HUE}");
        this.setTooltip("Create a list");
        this.setHelpUrl("");
    }
  };

  Blockly.Blocks['create_np_array_1'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("harvest"), "list")
            .appendField(" = np.array([");
        this.appendValueInput("text")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("])");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_NUMPY_HUE}");
        this.setTooltip("Create a list");
        this.setHelpUrl("");
    }
  };

  Blockly.Blocks['visualization_library_1'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.MATPLOT_VISUALIZATION_LIBRARY);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pie_subplots_1'] = {
    init: function() { 
      this.appendValueInput("name1")
        .setCheck(null);
      this.appendDummyInput().appendField(".imshow");
      this.appendValueInput("name2")
        .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(pandas_color);
   this.setTooltip(""); 
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pie_subplots_2'] = {
    init: function() { 
      this.appendValueInput("name1")
        .setCheck(null);
      this.appendDummyInput().appendField(".get_xticklabels()");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(pandas_color);
   this.setTooltip(""); 
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pie_subplots_3'] = {
    init: function() { 
      this.appendValueInput("name1")
        .setCheck(null).appendField("[text] ");
      this.appendDummyInput().appendField("스칼라=(");
      this.appendValueInput("name2")
        .setCheck(null);
      this.appendValueInput("name3")
        .setCheck(null).appendField(", ");
      this.appendValueInput("name4")
        .setCheck(null).appendField(") 배열=");
      this.appendValueInput("name5")
        .setCheck(null).appendField(" ha=");
      this.appendValueInput("name6")
        .setCheck(null).appendField(" va=");
      this.appendValueInput("name7")
        .setCheck(null).appendField(" color=");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(pandas_color);
   this.setTooltip(""); 
   this.setHelpUrl("");
    }
  };

 
  Blockly.Blocks['heatmaps_1'] = {
    init: function () {
        this.setStyle("variable_blocks");
        this.appendDummyInput().appendField("[set_xticks]");
        this.appendValueInput("NUMBER").setCheck(null);
        this.appendValueInput("REAL_VALUE").setCheck(null).appendField(".set_xticks(");
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };

  Blockly.Blocks['heatmaps_2'] = {
    init: function () {
        this.setStyle("variable_blocks");
        this.appendDummyInput().appendField("[set_yticks]");
        this.appendValueInput("NUMBER").setCheck(null);
        this.appendValueInput("REAL_VALUE").setCheck(null).appendField(".set_yticks(");
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };

  Blockly.Blocks['heatmaps_3'] = {
    init: function () {
        this.setStyle("variable_blocks");
        this.appendDummyInput().appendField("[set_xticklabel]");
        this.appendValueInput("NUMBER").setCheck(null);
        this.appendValueInput("REAL_VALUE").setCheck(null).appendField(".set_xticklabels(");
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };

  Blockly.Blocks['heatmaps_4'] = {
    init: function () {
        this.setStyle("variable_blocks");
        this.appendDummyInput().appendField("[set_yticklabels]");
        this.appendValueInput("NUMBER").setCheck(null);
        this.appendValueInput("REAL_VALUE").setCheck(null).appendField(".set_yticklabels(");
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };

  Blockly.Blocks['heatmaps_5'] = {
    init: function () {
        this.setStyle("variable_blocks");
        this.appendDummyInput().appendField("[set_yticklabels]").appendField("plt.setp(");
        this.appendValueInput("REAL_VALUE").setCheck(null);
        this.appendValueInput("REAL_VALUE_2").setCheck(null).appendField("rotation= ");
        this.appendValueInput("REAL_VALUE_3").setCheck(null).appendField("ha= ");
        this.appendValueInput("REAL_VALUE_4").setCheck(null).appendField("rotation_mode= ");
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };

  Blockly.Blocks['heatmaps_6'] = {
    init: function () {
        this.setStyle("variable_blocks");
        this.appendDummyInput().appendField("[text]");
        this.appendValueInput("NAME").setCheck(null);
        this.appendValueInput("REAL_VALUE").setCheck(null).appendField(".set_title(");
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };

  Blockly.Blocks['heatmaps_7'] = {
    init: function () {
        this.setStyle("variable_blocks");
        this.appendDummyInput().appendField("[tight_layout]");
        this.appendValueInput("NAME").setCheck(null);
        this.appendDummyInput().appendField(".tight_layout()");
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };