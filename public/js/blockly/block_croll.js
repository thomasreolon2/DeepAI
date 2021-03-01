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

Blockly.Blocks['croll_url_load'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[URL불러오기]")
        this.appendValueInput("VAR").setCheck(null);
        this.appendDummyInput()
            .appendField(" = BeautifulSoup(requests.get(")
            .appendField(new Blockly.FieldTextInput(""), "URL")
            .appendField("))");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['croll_soup_select'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[CSS선택자]");
        this.appendValueInput("VAR").setCheck(null);
        this.appendDummyInput()
            .appendField(" = soup.select(")
        this.appendValueInput("INPUT").setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['croll_get_text'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[text가져오기]");
        this.appendValueInput("VAR").setCheck(null);
        this.appendDummyInput()
            .appendField(".get_text()");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


