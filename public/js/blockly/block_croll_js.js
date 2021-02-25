Blockly.JavaScript['url_load'] = function (block) {
    //var file = block.getFieldValue('URL');
    var code = file;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// bs4 임포트    
Blockly.JavaScript['bs4_import'] = function(block) {
    var code = "\n";
    return code;
};