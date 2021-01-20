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
    this.setColour(pandas_color);
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
    this.setColour(pandas_color);
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
    this.setColour(pandas_color);
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
      this.setColour(pandas_color);
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
    this.setColour(pandas_color);
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};



////////////////////////////////
//df_series1
Blockly.Blocks['df_series1'] = {
  init: function () {
      this.appendDummyInput().appendField("[Series]").appendField(new Blockly.FieldVariable("df"), "list");
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
    this.appendDummyInput().appendField("[Series]").appendField(new Blockly.FieldVariable("df"), "list");
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
    this.appendDummyInput().appendField("[Series]").appendField(new Blockly.FieldVariable("df"), "list");
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
    this.appendDummyInput().appendField("[인덱스재설정]").appendField(new Blockly.FieldVariable("df"), "list");
      this.appendValueInput("LIST").appendField(".reindex(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
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
    this.appendDummyInput().appendField("[is_in]").appendField(new Blockly.FieldVariable("sr"), "list");
      this.appendValueInput("LIST").appendField(".is_in(").setCheck(null);
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

