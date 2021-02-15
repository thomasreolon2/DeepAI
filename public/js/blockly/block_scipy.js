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


//////////////////////////////////////
//// 2021-02-15 양승국
//////////////////////////////////////
Blockly.Blocks['scipy_write_read'] = {
    init: function () {
      this.appendDummyInput().appendField("[wavfile읽/쓰기]wavfile.").appendField(new Blockly.FieldDropdown([
        [
            "쓰기(write)", "write"
        ],
        [
          "읽기(read)", "read"
        ],
        ]), "collection");
        this.appendValueInput("d1").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setOutput(true, null);
        this.setColour(pandas_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['scipy_cascade'] = {
    init: function () {
      this.appendDummyInput().appendField("[cascade]signal.cascade");
        this.appendValueInput("d1").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setOutput(true, null);
        this.setColour(pandas_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['scipy_daub'] = {
    init: function () {
      this.appendDummyInput().appendField("[daub]signal.daub");
        this.appendValueInput("d1").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setOutput(true, null);
        this.setColour(pandas_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['scipy_morlet'] = {
    init: function () {
      this.appendDummyInput().appendField("[morlet]signal.").appendField(new Blockly.FieldDropdown([
        [
            "(morlet)", "morlet"
        ],
        [
          "(morlet2)", "morlet2"
        ],
        ]), "collection");
        this.appendValueInput("d1").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setOutput(true, null);
        this.setColour(pandas_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['scipy_qmf'] = {
    init: function () {
      this.appendDummyInput().appendField("[qmf]signal.qmf");
        this.appendValueInput("d1").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setOutput(true, null);
        this.setColour(pandas_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['scipy_ricker'] = {
    init: function () {
      this.appendDummyInput().appendField("[ricker]signal.ricker");
        this.appendValueInput("d1").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setOutput(true, null);
        this.setColour(pandas_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  