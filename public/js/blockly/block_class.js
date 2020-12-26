//2020-12-27-전우진 class

Blockly.Blocks['self'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('self.')
            .appendField(new Blockly.FieldVariable(""), "VAR")
            .appendField(new Blockly.FieldDropdown([['=', '='], ['+=', '+='], ["-=", "-="]]), 'NAME');
        this.appendValueInput("varset")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_CLASS_HUE}");
        this.setTooltip("assign a value, increment, or decrement a variable");
        this.setHelpUrl("");
    }
};

//2020-12-27-전우진 class

Blockly.Blocks['webclass'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('class');
        this.appendValueInput("class")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(':');
        this.appendStatementInput('DO')
            .appendField('');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_CLASS_HUE}");
        this.setTooltip('Class Statement.');
        this.setHelpUrl('');
    },
};