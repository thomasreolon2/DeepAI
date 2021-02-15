
Blockly.Python['import_scipy'] = function (block) {
    var dropdown_scipy = block.getFieldValue('scipy');
    // TODO: Assemble Python into code variable.
    var code = '\n';
    switch (dropdown_scipy) {
        case "curve_fit":
            code = "from scipy.optimize import curve_fit";
            break;
        case "interp1d":
            code = "from scipy.interpolate import interp1d";
            break;
        case "UnivariateSpline":
            code = "from scipy.interpolate import UnivariateSpline";
            break;
        case "quad":
            code = "from scipy.integrate import quad";
            break;
        case "trapz":
            code = "from scipy.integrate import trapz";
            break;
        case "wavfile":
            code = "from scipy.io import wavfile";  
            break;
        case "signal":
            code = "from scipy import signal";  
            break;
        case "ndimage":
            code = "from scipy import ndimage as ndi";  
            break;
    }

    return code + '\n';
};

Blockly.Python['curve_fit'] = function(block) {
    var value_fun = Blockly.Python.valueToCode(block, 'fun', Blockly.Python.ORDER_ATOMIC);
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code ='curve_fit('+value_fun+', '+value_x+', '+value_y+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  
  Blockly.Python['univariatespline'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var text_s = block.getFieldValue('s');
    // TODO: Assemble Python into code variable.
    var code = 'UnivariateSpline('+value_x+', '+value_y+', s='+text_s+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  Blockly.Python['quad'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var text_s = block.getFieldValue('s');
    var text_e = block.getFieldValue('e');
    // TODO: Assemble Python into code variable.
    var code = 'quad('+value_x+', '+text_s+', '+text_e+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python['scipy_io_wavfile_read'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'file', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `scipy.io.wavfile.read(${value_x})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };