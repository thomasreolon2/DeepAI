Blockly.Blocks['np_pi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pi값");
    this.setInputsInline(true);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
 this.setOutput(true, null);
  }
};


Blockly.Blocks['ax_lst_plot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ax_lst[].plot]");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("좌표");
        this.appendValueInput("val")
        .setCheck(null)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['axs_set_xlim'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ax_lst[].set_xlim]");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("좌표");
        this.appendValueInput("val")
        .setCheck(null)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['axs_set_xlabel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ax_lst[].set_xlabel]");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("좌표");
        this.appendValueInput("val")
        .setCheck(null)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['axs_set_ylabel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ax_lst[].set_ylabel]");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("좌표");
    this.appendValueInput("val")
        .setCheck(null)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['axs_grid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ax_lst[].grid]");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("좌표");
        this.appendValueInput("val")
        .setCheck(null)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['axs_cohere'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ax_lst[].cohere]");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("좌표");
        this.appendValueInput("val")
        .setCheck(null)
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['fig_tight_layout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[fig.tight_layout]");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// np.sqrt 넘파이
Blockly.Blocks['np_sqrt'] = {
  init: function() {
    this.appendValueInput("val1")
        .setCheck(null)
        .appendField("[np제곱근] 제곱근(sqrt)");
    this.setInputsInline(true);
    this.setColour("%{BKY_NUMPY_HUE}");
    this.setOutput(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// 새로운 subplots..
Blockly.Blocks['subplots'] = {
  init: function() {
    this.appendValueInput("row")
        .setCheck(null)
        .appendField("plt.subplots");
    this.appendValueInput("col")
        .setCheck(null)
        .appendField(",");
    this.appendValueInput("val1")
        .setCheck(null)
        .appendField("  sharex=");
    this.appendValueInput("val2")
        .setCheck(null)
        .appendField("sharey=");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['scatter'] = {
  init: function() {
    this.appendValueInput("row_col")
        .setCheck(null)
        .appendField("axs.scatter 좌표:");
    this.appendValueInput("val_x")
        .setCheck(null)
        .appendField(" x=");
    this.appendValueInput("val_y")
        .setCheck(null)
        .appendField("y=");
    this.appendValueInput("val1")
        .setCheck(null)
        .appendField("s=");
    this.appendValueInput("val2")
        .setCheck(null)
        .appendField("c=");
    this.appendValueInput("val3")
        .setCheck(null)
        .appendField("marker=");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['set_title'] = {
  init: function() {
    this.appendValueInput("row_col")
        .setCheck(null)
        .appendField("axs.set_title 좌표:");
    this.appendValueInput("val_x")
        .setCheck(null)
        .appendField(" title명:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


// 나중에 버리는 코드 곱하기 코드임
Blockly.Blocks['Oper_garbage'] = {
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
              "-", "-"
          ],
          [
              "+", "+"
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

Blockly.Blocks['Oper_garbage2'] = {
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
              "-", "-"
          ],
          [
              "+", "+"
          ],
          [
              "*", "*"
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

Blockly.Blocks['Oper_garbage3'] = {
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
              "-", "-"
          ],
          [
              "+", "+"
          ],
          [
              "/", "/"
          ],
          [
              "%", "%"
          ],
          [
              "*", "*"
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

Blockly.Blocks['numpy_random_sample__'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 단순]")
        .appendField(new Blockly.FieldDropdown([["표준 정규분포(randn)","numpy_Random_sample_randn"], ["임의 값(rand)","numpy_Random_sample_rand"],["임의 정수(randint)","numpy_Random_sample_randint"], ["0~1 부동 소수점(random)","numpy_Random_sample_random"], ["배열 무작위(choice)","numpy_Random_sample_choice"], ["임의 바이트(bytes)","numpy_Random_sample_bytes"]]), "numpy_Random_sample_opt");
    this.appendValueInput("numpy_Random_sample_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};