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