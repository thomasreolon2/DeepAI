Blockly.Python['train_test_split'] = function(block) {
    var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
    var value_x_train = Blockly.Python.valueToCode(block, 'x_train', Blockly.Python.ORDER_ATOMIC);
    var value_x_test = Blockly.Python.valueToCode(block, 'x_test', Blockly.Python.ORDER_ATOMIC);
    var value_y_train = Blockly.Python.valueToCode(block, 'y_train', Blockly.Python.ORDER_ATOMIC);
    var value_y_test = Blockly.Python.valueToCode(block, 'y_test', Blockly.Python.ORDER_ATOMIC);
    var text_test_size = block.getFieldValue('test_size');
    var dropdown_shuffle = block.getFieldValue('shuffle');
    var text_seed = block.getFieldValue('seed');
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.model_selection import train_test_split\n' + value_x_train + ',' + value_x_test + ',' + value_y_train + ',' + value_y_test + '= train_test_split('+value_x_data+','+value_y_data+','+'test_size='+text_test_size+', shuffle='+dropdown_shuffle+', random_state='+text_seed+')\n';
    return code;
  };