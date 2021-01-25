// tail_head
Blockly.Blocks['block_tail_head'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[데이터출력]")
          .appendField(new Blockly.FieldVariable("df"), "VAR")
          .appendField(".");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["앞에서(head)","head"],["뒤에서(tail)","tail"] ]), "DROP")
          .appendField("(");
      this.appendValueInput("INPUT")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
   }
};

// tail_head
Blockly.Blocks['block_sum_min'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[데이터통계]")
          .appendField(new Blockly.FieldVariable("df"), "VAR")
          .appendField(".");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["합(sum)","sum"],["갯수(count)","count"],["평균(mean)","mean"],["곱(prod)","prod"],["중앙값(median)","median"],["최소값(min)","min"],["최대값(max)","max"],["인덱스최소값(idxmin)","idxmin"],["인덱스최대값(idxmax)","idxmax"] ]), "DROP")
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

// tail_head
Blockly.Blocks['block_cumsum'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[데이터누적통계]")
          .appendField(new Blockly.FieldVariable("df"), "VAR")
          .appendField(".");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["누적합(cumsum)","cumsum"],["누적곱(cumprod)","cumprod"],["누적최소값(cummin)","cummin"],["누적최대값(cummax)","cummax"]]), "DROP")
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

// 판다스 사칙연산
Blockly.Blocks['block_calculations'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[사칙연산]")
          .appendField(new Blockly.FieldVariable("df"), "VAR")
          .appendField(".");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["더하기(add)","add"],["빼기(sub)","sub"],["곱하기(mul)","mul"],["나누기(div)","div"]]), "DROP")
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

// 판다스 정렬
Blockly.Blocks['pandas_sort'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[정렬]")
          .appendField(new Blockly.FieldVariable("df"), "VAR")
          .appendField(".");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["인덱스정렬(sort_index)","sort_index"],["값정렬(sort_values)","sort_values"]]), "DROP")
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

// 판다스 상관관계
Blockly.Blocks['pandas_corr'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[상관관계]");
      this.appendValueInput("INPUT1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".")
          .appendField(new Blockly.FieldDropdown([["두변수간(corr)","corr"], ["모든변수간(corrwith)","corrwith"],["두변수공분산(cov)","cov"]]), "DROP");
      this.appendValueInput("INPUT2")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(pandas_color);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // 판다스 스택
Blockly.Blocks['pandas_stack'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[스택]")
          .appendField(new Blockly.FieldVariable("df"), "VAR")
          .appendField(".");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["스택(stack)","stack"],["스택해제(unstack)","unstack"]]), "DROP")
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

  // 판다스 난,널 판단
  Blockly.Blocks['pandas_nanull'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[nan,null판단]")
          .appendField(new Blockly.FieldVariable("df"), "VAR")
          .appendField(".");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["nan인지(isna)","isna"],["nan아닌지(notna)","notna"],["nan버리기(dropna)","dropna"],["null인지(isnull)","isnull"],["null아닌지(notnull)","notnull"]]), "DROP")
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


// 2021.01.14 맷플롯립 작업시작
// 함수 블록
Blockly.Blocks['def1'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('함수 ')
            .appendField(new Blockly.FieldVariable("get_demo_img"), "1")
            .appendField('(');
        this.appendValueInput('2')
            .setCheck(null);
        this.appendDummyInput()
            .appendField('):');
        this.appendStatementInput('DO')
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_PROCEDURES_HUE}");
        this.setTooltip('');
    },
};
// get_sample_data
Blockly.Blocks['get_sample_data'] = {
    init: function() {
        this.appendDummyInput()
          .appendField("cbook.get_sample_data");
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
          .appendField("np_load=")
          .appendField(new Blockly.FieldDropdown([["참(True)","True"],["거짓(False)","False"]]),"DROP");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    },
  };
  
// cbook_import
Blockly.Blocks['cbook_import'] = {
init: function() {
    this.appendDummyInput()
        .appendField("[임포트]cbook");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
this.setTooltip("");
this.setHelpUrl("");
},
};

// set_inset_axes
Blockly.Blocks['set_inset_axes'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".inset_axes(");
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    },
};

// set_xlim_ylim 드롭다운 버전
/*
Blockly.Blocks['set_xlim_ylim'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".")
            .appendField(new Blockly.FieldDropdown([["set_xlim","set_xlim"],["set_ylim","set_ylim"]]),"DROP");
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
*/

Blockly.Blocks['set_xlim'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".set_xlim(");
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
    },
};

Blockly.Blocks['set_ylim'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".set_ylim(");
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
    },
};

// indicate_inset_zoom
Blockly.Blocks['indicate_inset_zoom'] = {
    init: function() {
        this.appendValueInput("VAR1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".indicate_inset_zoom(");
        this.appendValueInput("VAR2")
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


// plt.subplot
Blockly.Blocks['subplots'] = {
    init: function() {
        this.appendValueInput("VAR1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".subplots(");
        this.appendValueInput("VAR2")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};



// shape
Blockly.Blocks['shape'] = {
    init: function() {
        this.appendValueInput("VAR1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".shape");   
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};


// set_xticklabels
Blockly.Blocks['set_xticklabels'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".set_xticklabels(");
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

// set_xticklabels
Blockly.Blocks['set_yticklabels'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".set_yticklabels(");
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

// boxplot
Blockly.Blocks['boxplot'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".boxplot(");
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

// set_title
Blockly.Blocks['set_title'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".set_title(");
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

// patch.set_facecolor
Blockly.Blocks['set_facecolor'] = {
    init: function() {
        this.appendValueInput("VAR1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".set_facecolor(");
        this.appendValueInput("VAR2")
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

// yaxis.grid
Blockly.Blocks['yaxis_grid'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".yaxis.grid(");
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

// set_xlabel
Blockly.Blocks['set_xlabel'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".set_xlabel(");
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

// set_ylabel
Blockly.Blocks['set_ylabel'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".set_ylabel(");
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

// set_ylabel
Blockly.Blocks['hist'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".hist(");
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

// set_ylabel
Blockly.Blocks['cohere'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".cohere(");
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

// tight_layout
Blockly.Blocks['tight_layout'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".tight_layout(");
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


// util
Blockly.Blocks['skimage_util'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("util.")
            .appendField(new Blockly.FieldDropdown([["invert","invert"],["img_as_ubyte","img_as_ubyte"],["view_as_blocks","view_as_blocks"]]),"DROP")
            .appendField("(");
        this.appendValueInput("INPUT")
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

// util
Blockly.Blocks['skimage_measure'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("measure.")
            .appendField(new Blockly.FieldDropdown([["find_contours","find_contours"],["subdivide_polygon","subdivide_polygon"],["approximate_polygon","approximate_polygon"]]),"DROP")
            .appendField("(");
        this.appendValueInput("INPUT")
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
//numpy_random_sample
Blockly.Blocks['numpy_random_sample_x'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[np 단순 랜덤]")
          .appendField(new Blockly.FieldDropdown([["표준 정규분포(randn)","numpy_Random_sample_randn"],["임의 값(rand)","numpy_Random_sample_rand"], ["임의 정수(randint)","numpy_Random_sample_randint"], ["0~1 부동 소수점(random)","numpy_Random_sample_random"], ["배열 무작위(choice)","numpy_Random_sample_choice"], ["임의 바이트(bytes)","numpy_Random_sample_bytes"]]), "numpy_Random_sample_opt");
      this.appendValueInput("numpy_Random_sample_val")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_NUMPY_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['Oper_x'] = {
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



//2021.01.22 try_except 남지원
Blockly.Blocks['try_except'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("try : ");
        this.appendStatementInput("TRY")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("except");
        this.appendValueInput("EXCEPT1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(":");
        this.appendStatementInput("EXCEPT2")
            .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LOGIC_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // 2021.01.25 except_block 남지원
  Blockly.Blocks['except_block'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["SyntaxError","SyntaxError"], ["NameError","NameError"], ["ZeroDivisionError","ZeroDivisionError"], ["IndexError","IndexError"], ["ValueError","ValueError"], ["KeyError","KeyError"], ["AttributeError","AttributeError"], ["FileNotFoundError","FileNotFoundError"], ["TypeError","TypeError"]]), "DROP");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_LOGIC_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };