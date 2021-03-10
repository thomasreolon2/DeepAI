// bs4_import
Blockly.Blocks['croll_bs4_import'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("[임포트]beautifulSoup");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_CROLL_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['croll_requests_get'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[request요청]")
        this.appendValueInput("VAR").setCheck(null);
        this.appendDummyInput()
            .appendField(" = requests.get(")
        this.appendValueInput("URL").setCheck(null);
        this.appendDummyInput()
            .appendField("))");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['croll_url_load'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[bs4]")
        this.appendValueInput("VAR").setCheck(null);
        this.appendDummyInput()
            .appendField(" = BeautifulSoup(html, 'html.parser')")
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
        this.setColour("%{BKY_CROLL_HUE}");
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
        this.setColour("%{BKY_CROLL_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['croll_soup'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[soup조작]");
        this.appendValueInput("VAR").setCheck(null);
        this.appendDummyInput()
            .appendField(".");
        this.appendValueInput("INPUT").setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_CROLL_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['croll_find_all'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[전부가져오기]");
        this.appendValueInput("VAR").setCheck(null);
        this.appendDummyInput()
            .appendField(".find_all(");
        this.appendValueInput("INPUT").setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_CROLL_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
