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