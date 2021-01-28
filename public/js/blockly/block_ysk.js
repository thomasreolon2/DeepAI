///////////////////////////////////////////////////////
// 2020-12-26
///////////////////////////////////////////////////////


//df_pivot_table
Blockly.Blocks['df_pivot_table'] = {
  init: function () {
      this.appendDummyInput().appendField("[피벗테이블]");
      this.appendValueInput("LIST").appendField("pd.pivot_table(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
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
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//df_bb 병합
Blockly.Blocks['df_bb'] = {
  init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.PANDAS_BB);
      this.appendValueInput("VAR")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".");
      this.appendDummyInput().appendField(new Blockly.FieldDropdown([
          [
            "merge", "merge"
          ],
          [
            "concat", "concat"
          ],
          [
            "join", "join"
          ],
          [
            "append", "append"
          ],
          [
            "copy", "copy"
          ],
      ]), "DROP");
      this.appendValueInput("INPUT").setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};



////////////////////////////////
//df_series1
Blockly.Blocks['df_series1'] = {
  init: function () {
      this.appendDummyInput().appendField("[Series]").appendField(new Blockly.FieldVariable("sr"), "list");
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

//df_series2
Blockly.Blocks['df_series2'] = {
  init: function () {
    this.appendDummyInput().appendField("[Series]").appendField(new Blockly.FieldVariable("sr"), "list");
      this.appendValueInput("LIST").appendField("[").setCheck(null);
      this.appendDummyInput().appendField("]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//df_series3
Blockly.Blocks['df_series3'] = {
  init: function () {
    this.appendDummyInput().appendField("[Series]").appendField(new Blockly.FieldVariable("sr"), "list");
      this.appendValueInput("LIST").appendField("[").setCheck("Boolean");
      this.appendDummyInput().appendField("]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//df_agg
Blockly.Blocks['df_agg'] = {
  init: function () {
    this.appendDummyInput().appendField("[그룹]").appendField(new Blockly.FieldVariable("df"), "list");
      this.appendValueInput("LIST").appendField(".agg(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//df_reindex
Blockly.Blocks['df_reindex'] = {
  init: function () {
    this.appendValueInput("VAR")
        .setCheck(null)
        .appendField(Blockly.Msg.PANDAS_REINDEX);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([
          [
            "컬럼명변경(rename)", "rename"  
          ],
          [
            "인덱스재설정(reindex)", "reindex"
          ],
          [
            "인덱스초기화(reset_index)", "reset_index"
          ],
          [
            "인덱스세팅(set_index)", "set_index"
          ]
          ]), "DROP");
        this.appendValueInput("INPUT")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//sr.unique()
Blockly.Blocks['df_unique'] = {
  init: function () {
    this.appendDummyInput().appendField("[unique]").appendField(new Blockly.FieldVariable("sr"), "list").appendField(".unique( )");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//sr.is_in()
Blockly.Blocks['df_is_in'] = {
  init: function () {
    this.appendValueInput("VAR").appendField("[is_in]");
      this.appendValueInput("LIST").appendField(".isin(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//sr.tolist()
Blockly.Blocks['df_tolist'] = {
  init: function () {
    this.appendDummyInput().appendField("[tolist]").appendField(new Blockly.FieldVariable("sr"), "list").appendField(".tolist( )");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//sr.name
Blockly.Blocks['df_name'] = {
  init: function () {
    this.appendDummyInput().appendField("[name]").appendField(new Blockly.FieldVariable("sr"), "list").appendField(".name");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};







/////////////////////////////////////////////////////////////////
////////////// 사이킥 이미지 2021-01-18
/////////////////////////////////////////////////////////////////

Blockly.Blocks['skimage_filters'] = {
  init: function () {
      this.appendDummyInput().appendField("filters.").appendField(new Blockly.FieldDropdown([
          [
              "sobel", "sobel"
          ],
          [
            "roberts", "roberts"
          ]
      ]), "collection");
      this.appendValueInput("d2").appendField("(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['skimage_transform'] = {
  init: function () {
      this.appendDummyInput().appendField("transform.").appendField(new Blockly.FieldDropdown([
          [
              "hough_line", "hough_line"
          ],
          [
            "hough_circle", "hough_circle"
          ],
          [
            "hough_circle_peaks", "hough_circle_peaks"
          ],
          [
            "hough_line_peaks", "hough_line_peaks"
          ],
          [
            "probabilistic_hough_line", "probabilistic_hough_line"
          ]
      ]), "collection");
      this.appendValueInput("d2").appendField("(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['skimage_img_as_float'] = {
  init: function () {
      this.appendDummyInput().appendField("img_as_float.").appendField(new Blockly.FieldDropdown([
          [
            "img_as_float", "img_as_float"
          ]
      ]), "collection");
      this.appendValueInput("d2").appendField("(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['matp_Ex'] = {
  init: function () {
      this.appendDummyInput().appendField("[그래프 크기 설정]"); 
      this.appendValueInput("d1").setCheck(null);
      this.appendValueInput("d2").appendField(".(").setCheck(null);
      this.appendValueInput("d3").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['matp_title'] = {
  init: function () {
      this.appendDummyInput().appendField("[그래프 제목]"); 
      this.appendValueInput("d1").setCheck(null);
      this.appendValueInput("d2").appendField(".set_title(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};
