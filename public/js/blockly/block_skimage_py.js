// 2021.01.13 사이킷이미지 import 남지원
Blockly.Python['import_skimage'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "import skimage\nfrom skimage import data\n";
    return code;
  };

// 2021.01.13 이미지 사용 (남지원)
Blockly.Python['skimage_data'] = function (block) {
  var dropdown_dic = block.getFieldValue('DATA');
  if (dropdown_dic == 'CAMERA') {
    var code = `data.camera()`;
  } else if (dropdown_dic == 'clear') {
    var code = variable_list + '.clear()';
  } else if (dropdown_dic == 'getvalues') {
      var code = variable_list + '.values()';
  } else if (dropdown_dic == 'getkeys') {
      var code = variable_list + '.keys()';
  }
  return [code, Blockly.Python.ORDER_ATOMIC];
};