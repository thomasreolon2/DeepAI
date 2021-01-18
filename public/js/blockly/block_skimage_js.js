// 2021.01.13 사이킷이미지 import 남지원
Blockly.JavaScript['import_skimage'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "\n";
    return code;
  };

  // 2021.01.13 이미지 사용 (남지원)
Blockly.JavaScript['skimage_data'] = function (block) {
  var dropdown_dic = block.getFieldValue('DATA');
  var code = '\n'

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 2021-01-18 임포트 블록 양승국
Blockly.JavaScript['ski_class'] = function (block) {
  var dropdown_dic = block.getFieldValue('DATA');
  var code = `\n`;
  
  return code;
};
