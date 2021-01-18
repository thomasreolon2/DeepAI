// 2021.01.13 사이킷이미지 import 남지원
Blockly.Python['import_skimage'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import skimage\nfrom skimage import data\n";
  return code;
};

// 2021.01.13 이미지 사용 (남지원)
Blockly.Python['skimage_data'] = function (block) {
  var dropdown_dic = block.getFieldValue('DATA');
  var code = `data.${dropdown_dic}()`;
  
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 2021.01.17 rgb2gray  남지원
Blockly.Python['rgb2gray'] = function (block) {
  var var_text = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `rgb2gray(${var_text})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 2021-01-18 임포트 블록 양승국
Blockly.Python['ski_class'] = function (block) {
  var dropdown_dic = block.getFieldValue('DATA');
  var code = `import skimage.${dropdown_dic}\n`;
  
  return code;
};
