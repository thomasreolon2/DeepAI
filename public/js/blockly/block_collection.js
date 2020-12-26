///////////////////////////////////////////////////////
// 2020-12-26
///////////////////////////////////////////////////////

Blockly.Blocks['create_list'] = {
  init: function () {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("list"), "list")
          .appendField(" = [");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("]");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#15BAD4");
      this.setTooltip("Create a list");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['indata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "indata1");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// 새 튜플
Blockly.Python['tuple'] = function (block) {
  // Create a list with any number of elements of any type.
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
      elements[i] = Blockly.Python.valueToCode(block, 'ADD' + i, Blockly.Python.ORDER_NONE) || 'None';
  }
  var code = '(' + elements.join(', ') + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};