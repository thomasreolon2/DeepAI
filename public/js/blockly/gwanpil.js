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

  Blockly.Blocks['plt_text'] = {
    init: function() { 
      this.appendValueInput("name1")
        .setCheck(null);
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
  

 
  Blockly.Blocks['set_xticks'] = {
    init: function () {
        this.setStyle("variable_blocks");
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

  Blockly.Blocks['set_yticks'] = {
    init: function () {
        this.setStyle("variable_blocks");
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

  Blockly.Blocks['plt_setp'] = {
    init: function () {
        this.setStyle("variable_blocks");
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

  Blockly.Blocks['tick_params'] = {
    init: function () {
        this.setStyle("variable_blocks");
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


//pie_subplot
Blockly.Blocks['plt_subplot'] = {
    init: function() { 
      this.appendValueInput("name").setCheck(null);
      this.appendDummyInput().appendField(".subplot( ");
      this.appendValueInput("name2").setCheck(null);
      this.appendDummyInput().appendField(" )");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
   this.setTooltip(""); 
   this.setHelpUrl("");
    }
  };   

  //pie_subplots
Blockly.Blocks['plt_subplots'] = {
    init: function() { 
      this.appendValueInput("name").setCheck(null);
      this.appendDummyInput().appendField(".subplots( ");
      this.appendValueInput("name2").setCheck(null);
      this.appendDummyInput().appendField(" )");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
   this.setTooltip(""); 
   this.setHelpUrl("");
    }
  };



  //////////////////////////////////////////////////////////////////////////////////////////
  //skimage
  //////////////////////////////////////////////////////////////////////////////////////////

  Blockly.Blocks['skimage_draw'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("draw.")
        .appendField(new Blockly.FieldDropdown([
          [
            "bezier_curve", "bezier_curve"  
          ],
          [
            "ellipse_perimeter", "ellipse_perimeter"
          ],
          [
            "line_aa", "line_aa"
          ],
          [
            "circle_perimeter_aa", "circle_perimeter_aa"
          ],
          [
            "ellipse", "ellipse"
          ],
          [
            "random_shapes", "random_shapes"
          ],
          [
            "circle_perimeter", "circle_perimeter"
          ],
          [
            "line", "line"
          ],
        ]), "DATA");
      this.appendValueInput("data")
        .setCheck(null)
        .appendField("(");
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['skimage_color'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("color.")
        .appendField(new Blockly.FieldDropdown([
          [
            "rgb2gray", "rgb2gray"  
          ],
          [
            "hed2rgb", "hed2rgb"
          ],
          [
            "gray2rgb", "gray2rgb"
          ],
          [
            "rgb2hsv", "rgb2hsv"
          ]
        ]), "DATA");
      this.appendValueInput("data")
        .setCheck(null)
        .appendField("(");
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['skimage_segmetation'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("segmetation(");
      this.appendValueInput("data")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };