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
        .appendField("[ax[].plot]");
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
        .appendField("[ax[].set_xlim]");
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
        .appendField("[ax[].set_xlabel]");
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
        .appendField("[ax[].set_ylabel]");
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
        .appendField("[ax[].grid]");
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
        .appendField("[ax[].cohere]");
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

Blockly.Blocks['set_title2'] = {
    init: function() {
      this.appendValueInput("row_col")
          .setCheck(null)
          .appendField("[ax.set_title]");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['ax_stackplot'] = {
    init: function() {
      this.appendValueInput("list_val")
          .setCheck(null)
          .appendField("[ax.stackplot] 리스트:");
      this.appendValueInput("dic_val")
          .setCheck(null)
          .appendField("딕셔너리 값: ");
      this.appendValueInput("dic_key")
          .setCheck(null)
          .appendField("딕셔너리 키: ");
      //this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


Blockly.Blocks['ax_legend'] = {
    init: function() {
        this.appendValueInput("loc")
            .setCheck(null)
            .appendField("[ax.legend] loc: ");
        this.setInputsInline(true);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.Blocks['axs_set_xlabel2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[ax.set_xlabel]");
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
  
  
  Blockly.Blocks['axs_set_ylabel2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[ax.set_ylabel]");
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

Blockly.Blocks['create_dict_1'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("/img/Collection/D1-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
            }))
            .appendField("딕셔너리")
            .appendField(new Blockly.FieldVariable("population_by_continent"), "list")
            .appendField(" = {");
        this.appendValueInput("text")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("}");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_DICT_HUE}");//"%{BKY_COLLECTION_HUE}");
        this.setTooltip("Create a list");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['create_list_sj'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("/img/Collection/L1-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput("test")
            .appendField(new Blockly.FieldVariable("year"), "list");
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


  Blockly.Blocks['dic_menu1_sj'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/D2-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField(Blockly.Msg.COLLECTION_9_DICTOPTION);
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_9_DICVAR).appendField(new Blockly.FieldVariable("population_by_continent"), "list")
            .appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg.COLLECTION_9_DROPDOWN_OUTPUTKEY, "getkeys"
            ],
            [
                Blockly.Msg.COLLECTION_9_DROPDOWN_OUTPUVAL, "getvalues"
            ],
            [
                "키,값쌍얻기", "items"
            ],
            [
                "키,값쌍모두지우기", "clear"
            ]
        ]), "dic");
        this.setInputsInline(true);
        this.setColour("%{BKY_DICT_HUE}");
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['dic_menu1_sj2'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/D2-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField(Blockly.Msg.COLLECTION_9_DICTOPTION);
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_9_DICVAR).appendField(new Blockly.FieldVariable("population_by_continent"), "list")
            .appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg.COLLECTION_9_DROPDOWN_OUTPUVAL, "getvalues"
            ],
            [
                Blockly.Msg.COLLECTION_9_DROPDOWN_OUTPUTKEY, "getkeys"
            ],
            [
                "키,값쌍얻기", "items"
            ],
            [
                "키,값쌍모두지우기", "clear"
            ]
        ]), "dic");
        this.setInputsInline(true);
        this.setColour("%{BKY_DICT_HUE}");
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};