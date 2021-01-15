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

  Blockly.Blocks['visualization_library_2'] = {
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
      this.setColour("%{BKY_VISUAL_HUE}");
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
      this.setColour("%{BKY_VISUAL_HUE}");
   this.setTooltip(""); 
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pie_subplots_3'] = {
    init: function() { 
      this.appendValueInput("name1")
        .setCheck(null).appendField("[text] ");
      this.appendDummyInput().appendField(".text( ");
      this.appendValueInput("name2")
        .setCheck(null)
      this.appendDummyInput().appendField(" )");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
   this.setTooltip(""); 
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pie_subplots_4'] = {
    init: function() { 
      this.appendDummyInput().appendField("plt.subplots( ");
      this.appendValueInput("name")
        .setCheck(null);
      this.appendDummyInput().appendField(" )");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(pandas_color);
   this.setTooltip(""); 
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pie_pcolor'] = {
    init: function() { 
      this.appendValueInput("name1")
        .setCheck(null);
      this.appendDummyInput().appendField(".pcolor( ");
      this.appendValueInput("name2")
        .setCheck(null);
      this.appendDummyInput().appendField(" )");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
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

  Blockly.Blocks['plt_setp'] = {
    init: function () {
        this.setStyle("variable_blocks");
        this.appendDummyInput().appendField("[setp]");
        this.appendValueInput("REAL_VALUE_0").setCheck(null);
        this.appendValueInput("REAL_VALUE").setCheck(null).appendField(".setp(");
        this.appendDummyInput().appendField(", ");
        this.appendValueInput("REAL_VALUE_2").setCheck(null);
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


  /////////////////  Pcolor Demo

  Blockly.Blocks['numpy_random_generator_1'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[np 생성기]")
          .appendField(new Blockly.FieldDropdown([["규칙 난수(seed)","numpy_Random_generator_seed"], ["생성기 내부 상태(get_state)","numpy_Random_generator_get_state"], ["튜플 내부상태 설정(set_state)","numpy_Random_generator_set_state"]]), "numpy_Random_generator_opt");
      this.appendValueInput("numpy_Random_generator_val")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_NUMPY_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pcolor_set_title'] = {
    init: function() { 
      this.appendDummyInput()
          .appendField("[set_title]")
          .appendField(new Blockly.FieldVariable("ax0"), "list")
          .appendField(".set_title(");
      this.appendValueInput("title")
          .setCheck(null); 
      this.appendDummyInput().appendField(" )");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pandas_color);
   this.setTooltip(""); 
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pcolor_set_title_1'] = {
    init: function() { 
      this.appendDummyInput()
          .appendField("[set_title]")
          .appendField(new Blockly.FieldVariable("ax1"), "list")
          .appendField(".set_title(");
      this.appendValueInput("title")
          .setCheck(null); 
      this.appendDummyInput().appendField(" )");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pandas_color);
   this.setTooltip(""); 
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['heatmaps_8'] = {
    init: function () {
        this.setStyle("variable_blocks");
        this.appendDummyInput().appendField("[set_xlabel]");
        this.appendValueInput("NUMBER").setCheck(null);
        this.appendValueInput("REAL_VALUE").setCheck(null).appendField(".set_xlabel(");
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };

  Blockly.Blocks['heatmaps_9'] = {
    init: function () {
        this.setStyle("variable_blocks");
        this.appendDummyInput().appendField("[set_ylabel]");
        this.appendValueInput("NUMBER").setCheck(null);
        this.appendValueInput("REAL_VALUE").setCheck(null).appendField(".set_ylabel(");
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pcolor_plot'] = {
    init: function () {
        this.setStyle("variable_blocks");
        this.appendDummyInput().appendField("[plot]");
        this.appendValueInput("NUMBER").setCheck(null);
        this.appendValueInput("REAL_VALUE").setCheck(null).appendField(".plot(");
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pcolor_tick_params'] = {
    init: function () {
        this.setStyle("variable_blocks");
        this.appendDummyInput().appendField("[tick_params]");
        this.appendValueInput("NUMBER").setCheck(null);
        this.appendValueInput("REAL_VALUE").setCheck(null).appendField(".tick_params(");
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };

  Blockly.Blocks['twinx'] = {
    init: function() { 
      this.appendValueInput("name1")
        .setCheck(null);
      this.appendDummyInput().appendField(".twinx( )");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
   this.setTooltip(""); 
   this.setHelpUrl("");
    }
  };