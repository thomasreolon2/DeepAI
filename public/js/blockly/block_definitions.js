//2020-12-26-전우진 definitions
Blockly.Blocks['webdefine'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('def ');
        this.appendValueInput('1')
            .setCheck(null);
        this.appendDummyInput()
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
//2020-12-26-전우진 return
Blockly.Blocks['webreturn2'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('return');
        this.appendValueInput('return')
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setColour("%{BKY_PROCEDURES_HUE}");
        this.setTooltip('');
        this.setHelpUrl('');
    },
};