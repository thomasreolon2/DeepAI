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
            .appendField(" = np.array(");
        this.appendValueInput("text")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
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
      this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['skimage_data_immunohistochemistry'] = {
    init: function () {
        this.appendDummyInput()
          .appendField("data.immunohistochemistry(");
        this.appendValueInput("data")
          .setCheck(null);
        this.appendDummyInput()
          .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
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
      this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


  ////////////// skimage 예제 

  Blockly.Blocks['import_skimage_morphology'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[임포트]skimage.morphology");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['import_axes3D'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("[임포트]Axes3D");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['pie_subplots_imshow'] = {
  init: function() { 
    this.appendValueInput("name1")
      .setCheck(null);
    this.appendDummyInput().appendField(".imshow");
    this.appendValueInput("name2")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dic_menu1_2'] = {
  init: function () {
      this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/D2-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      })).appendField(Blockly.Msg.COLLECTION_9_DICTOPTION);
      this.appendValueInput("list").setCheck(null);
      this.appendDummyInput().appendField(".shape[");
      this.appendValueInput("list2").setCheck(null);
      this.appendDummyInput().appendField("]");
      this.setInputsInline(true);
      this.setColour("%{BKY_DICT_HUE}");
      this.setOutput(true, null);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['set_axis_off'] = {
  init: function() {
      this.appendValueInput("VAR")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".set_axis_off(");
      this.appendValueInput("INPUT")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['voxels'] = {
  init: function() {
      this.appendValueInput("VAR")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".voxels(");
      this.appendValueInput("INPUT")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


Blockly.Blocks['writerows'] = {
  init: function () {
      this.appendValueInput("VAR")
          .setCheck(null);
      this.appendDummyInput()
          .appendField('.writerows');
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField('');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LIST_HUE}");
      this.setTooltip("Create a list");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['pandas_csv_read'] = {
  init: function () {
    this.appendDummyInput()
    .appendField(new Blockly.FieldVariable("df"), "list");
    this.appendDummyInput()
      .appendField("CSV read")
      .appendField("(");
    this.appendValueInput("va")
      .setCheck(null)
    this.appendDummyInput()
       .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['groupby_dataFrame_2'] = {
  init: function () {
    this.appendValueInput("Series_or_Dataframe")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_GROUPBY_DATAFRAME_1);
    this.appendDummyInput()
      .appendField("(");
      this.appendValueInput("colName")
      .setCheck(null);
      this.appendValueInput("indexName")
      .setCheck(null)
      .appendField(")[");
    this.appendDummyInput()
      .appendField("]")
      .appendField(Blockly.Msg.PANDAS_GROUPBY_DATAFRAME_2)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PANDAS_GROUPBY_DATAFRAME_3, ".mean()"], [Blockly.Msg.PANDAS_GROUPBY_DATAFRAME_4, ".count()"], [Blockly.Msg.PANDAS_GROUPBY_DATAFRAME_5, ".sum()"], [Blockly.Msg.PANDAS_GROUPBY_DATAFRAME_6, ".prod()"], [Blockly.Msg.PANDAS_GROUPBY_DATAFRAME_7, ".min()"], [Blockly.Msg.PANDAS_GROUPBY_DATAFRAME_8, ".max()"]]), "function")
      .appendField(")");
    this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['pandas_date_range'] = {
  init: function() {
    this.appendValueInput("VAR")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_DATE_RANGE);
    this.appendDummyInput()
      .appendField(".")
      .appendField(new Blockly.FieldDropdown([["date_range","date_range"], ["tz_localize","tz_localize"], ["tz_convert","tz_convert"], ["to_period","to_period"], ["to_timestamp","to_timestamp"], ["period_range","period_range"]]), "DROP")
      .appendField("(");
    this.appendValueInput("INPUT")
      .setCheck(null);
      this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
  this.setTooltip("");
  this.setHelpUrl("");
} 
};

Blockly.Blocks['pandas_dataframe_2'] = {
  init: function () {
    this.appendValueInput("df_va")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_DATAFRAME_2_1)
      .appendField(Blockly.Msg.PANDAS_DATAFRAME_2);
    this.appendDummyInput()
      .appendField("(")
    this.appendValueInput("col_name")
    .setCheck(null);
    this.appendDummyInput() 
      .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['df_resample'] = {
  init: function () {
    this.appendValueInput("VAR").appendField("[resample]");
    this.appendValueInput("LIST").appendField("(").setCheck(null);
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    //this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
}
};

Blockly.Blocks['df_add_function'] = {
  init: function () {
    this.appendDummyInput().appendField("[확장]");
    this.appendValueInput("LIST").setCheck(null);
    this.appendDummyInput().appendField(".");
    this.appendValueInput("LIST2").setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    //this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
}
};

Blockly.Blocks['create_zip'] = {
  init: function() {
    this.appendValueInput("data_type")
        .setCheck(null)
        .appendField("zip(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_LISTS_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set_xyticklabels'] = {
  init: function() {
      this.appendValueInput("VAR")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".set_xticklabels(");
      this.appendValueInput("INPUT")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("),");
      this.appendValueInput("VAR2")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".set_yticklabels(");
      this.appendValueInput("INPUT2")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['set_xyticks'] = {
  init: function () {
    {
      this.appendValueInput("VAR")
      .setCheck(null);
      this.appendDummyInput()
      .appendField(".set_xticklabels(");
      this.appendValueInput("INPUT")
      .setCheck(null);
      this.appendDummyInput()
      .appendField("),");
      this.setInputsInline(true);
    }
    

      this.appendDummyInput().appendField('y_data').appendField(new Blockly.FieldVariable("y_data"), "y_data")
      .appendField('y_train').appendField(new Blockly.FieldVariable("y_train"), "y_train")
      .appendField('y_test').appendField(new Blockly.FieldVariable("y_test"), "y_test")
      .appendField("data_shuffle").appendField(new Blockly.FieldDropdown([
          [
              Blockly.Msg.PREPROCESSING_TRAIN_TEST_SPLIT_2, "True"
          ],
          [
              Blockly.Msg.PREPROCESSING_TRAIN_TEST_SPLIT_3, "False"
          ]
      ]), "shuffle")
      .appendField('seed').appendField(new Blockly.FieldTextInput("0"), "seed"); 

      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};