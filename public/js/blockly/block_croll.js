Blockly.Blocks['croll_url_load'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("URL불러오기")
            .appendField(new Blockly.FieldTextInput(""), "URL");
        this.setOutput(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// bs4_import
Blockly.Blocks['croll_bs4_import'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("[임포트]beautifulSoup");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};