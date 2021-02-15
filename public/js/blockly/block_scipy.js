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
        this.appendValueInput("file").setCheck(null).appendField("io.wavfile.read");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 전우진 고장 진단

Blockly.Blocks['scipy_bartlett'] = {
    init: function () {
        this.appendDummyInput().appendField("signal.bartlett");
        this.appendValueInput("d2").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['scipy_tsearch'] = {
    init: function () {
        this.appendDummyInput().appendField("spatial.tsearch");
        this.appendValueInput("d2").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['scipy_distance_matrix_minkowski_distance_minkowski_distance_p'] = {
    init: function () {
        this.appendDummyInput().appendField("spatial.").appendField(new Blockly.FieldDropdown([
            [
                "distance_matrix", "distance_matrix"
            ],
            [
              "minkowski_distance", "minkowski_distance"
            ],
            [
              "minkowski_distance_p", "minkowski_distance_p"
            ]
        ]), "scipy");
        this.appendValueInput("d2").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['scipy_procrustes'] = {
    init: function () {
        this.appendDummyInput().appendField("spatial.procrustes");
        this.appendValueInput("d2").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
