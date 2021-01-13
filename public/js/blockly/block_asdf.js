///////////////////////////////////////////////////////
// 2021-01-13
///////////////////////////////////////////////////////

//pie_subplots
Blockly.Blocks['pie_subplots'] = {
  init: function() { 
    this.appendDummyInput().appendField("plt.subplot");
    this.setInputsInline(true);
    this.setOutput(true, null);
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

//numpy_random_generator1
Blockly.Blocks['numpy_random_generator1'] = {
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

Blockly.Blocks['Oper1'] = {
  init: function () {
      this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Numeric/N2-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }));
      this.appendValueInput("A").setCheck(null);
      this.appendDummyInput().appendField(new Blockly.FieldDropdown([
          [
              "*", "*"
          ],
          [
              "+", "+"
          ],
          [
              "-", "-"
          ],
          [
              "/", "/"
          ],
          [
              "%", "%"
          ],
          [
              "**", "**"
          ],
          [
              "//", "//"
          ]
      ]), "NAME");
      this.appendValueInput("B").setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['Oper2'] = {
  init: function () {
      this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Numeric/N2-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }));
      this.appendValueInput("A").setCheck(null);
      this.appendDummyInput().appendField(new Blockly.FieldDropdown([
          [
              "**", "**"
          ],
          [
              "+", "+"
          ],
          [
              "-", "-"
          ],
          [
              "*", "*"
          ],
          [
              "/", "/"
          ],
          [
              "%", "%"
          ],
          [
              "//", "//"
          ]
      ]), "NAME");
      this.appendValueInput("B").setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['Oper3'] = {
  init: function () {
      this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Numeric/N2-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }));
      this.appendValueInput("A").setCheck(null);
      this.appendDummyInput().appendField(new Blockly.FieldDropdown([
          [
              "/", "/"
          ],
          [
              "**", "**"
          ],
          [
              "+", "+"
          ],
          [
              "-", "-"
          ],
          [
              "*", "*"
          ],
          [
              "%", "%"
          ],
          [
              "//", "//"
          ]
      ]), "NAME");
      this.appendValueInput("B").setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['pie_linspace'] = {
  init: function () {
      this.appendDummyInput().appendField("np.linspace(");
      this.appendValueInput("d1").setCheck(null);
      this.appendValueInput("d2").setCheck(null).appendField(",");
      this.appendValueInput("d3").setCheck(null).appendField("*");
      this.appendValueInput("d4").setCheck(null).appendField(",");
      this.appendDummyInput().appendField(", endpoint =").appendField(new Blockly.FieldDropdown([
          [
              "False", "False"
          ],
          [
              "True", "True"
          ]
      ]), "NAME");
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['pie_cm_viridis'] = {
  init: function () {
      this.appendDummyInput().appendField("np.cm.viridis(");
      this.appendValueInput("d1").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//pie_subplots
Blockly.Blocks['pie_subplots1'] = {
  init: function() { 
    this.appendDummyInput().appendField("plt.subplot(");
    this.appendValueInput("d1").setCheck(null).appendField(",");
    this.appendValueInput("d2").setCheck(null).appendField("projection =");
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

//pie_bar
Blockly.Blocks['pie_bar'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("[bar]")
        .appendField(new Blockly.FieldVariable("ax"), "list");
    this.appendValueInput("d1").appendField().setCheck(null).appendField(".bar(");
    this.appendValueInput("d2").setCheck(null).appendField(",");
    this.appendValueInput("d3").setCheck(null).appendField(", width =");
    this.appendValueInput("d4").appendField("bottom =").setCheck(null);
    this.appendValueInput("d5").appendField("color =").setCheck(null);    
    this.appendValueInput("d6").appendField("alpha =").setCheck(null);  
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};