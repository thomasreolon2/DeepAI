// bs4 임포트    
Blockly.JavaScript['croll_bs4_import'] = function(block) {
    var code = "\n";
    return code;
};

Blockly.JavaScript['croll_url_load'] = function (block) {
    var code = `\n`;
    return code;
};

// url 불러오기
Blockly.JavaScript['croll_soup_select'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
    var input_name = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
    let code = `\n`;
    return code;
};

  // croll_get_text
Blockly.JavaScript['croll_get_text'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
    let code = `
    ${value_name}.get_text()
  `;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};