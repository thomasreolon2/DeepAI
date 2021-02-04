// import사이파이
Blockly.Blocks['import_scipy'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.SCIPY_IMPORT).appendField(new Blockly.FieldDropdown([
            [
                "curve_fit", "curve_fit"
            ],
            [
                "interp1d", "interp1d"
            ],
            [
                "UnivariateSpline", "UnivariateSpline"
            ],
            [
                "quad", "quad"
            ],
            [
                "trapz", "trapz"
            ],
            [
                "wavfile", "wavfile"
            ],
            [
                "signal", "signal"
            ],
            [
                "ndimage", "ndimage"
            ]  

        ]), "scipy");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['curve_fit'] = {
    init: function () {
        this.appendValueInput("fun").setCheck(null).appendField(Blockly.Msg.SCIPY_CURVE_FIT);
        this.appendValueInput("x").setCheck(null).appendField("x_data");
        this.appendValueInput("y").setCheck(null).appendField("y_data");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['univariatespline'] = {
    init: function () {
        this.appendValueInput("x").setCheck(null).appendField("[UnivariateSpline] x_data");
        this.appendValueInput("y").setCheck(null).appendField("Y_data");
        this.appendDummyInput().appendField(new Blockly.FieldTextInput("1"), "s");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['quad'] = {
    init: function () {
        this.appendValueInput("x").setCheck(null).appendField(Blockly.Msg.SCIPY_QUAD);
        this.appendDummyInput().appendField(new Blockly.FieldTextInput("0"), "s");
        this.appendDummyInput().appendField(new Blockly.FieldTextInput("1000"), "e");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['scipy_io_wavfile_read'] = {
    init: function () {
        this.appendValueInput("x").setCheck(null).appendField("io.wavfile.read");
        this.appendDummyInput().appendField(new Blockly.FieldTextInput("0"), "s");
        this.appendDummyInput().appendField(new Blockly.FieldTextInput("1000"), "e");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};