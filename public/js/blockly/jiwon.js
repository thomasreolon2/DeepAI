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
      this.setColour(230);
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
      this.setColour(230);
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
      this.setColour(230);
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
      this.setColour(230);
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
      this.setColour(230);
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
      this.setColour(230);
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
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
   }
};