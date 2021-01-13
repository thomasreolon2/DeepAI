
//그래프 출력 설정
Blockly.JavaScript['select_graph_option'] = function(block) { 
    var value_select_graph_option_location1 = Blockly.JavaScript.valueToCode(block, 'select_graph_option_location1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_select_graph_option_location2 = Blockly.JavaScript.valueToCode(block, 'select_graph_option_location2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_select_graph_option_xy = Blockly.JavaScript.valueToCode(block, 'select_graph_option_XY', Blockly.JavaScript.ORDER_ATOMIC);
    var value_select_graph_option_graph = Blockly.JavaScript.valueToCode(block, 'select_graph_option_graph', Blockly.JavaScript.ORDER_ATOMIC);
    var value_select_graph_option_title = Blockly.JavaScript.valueToCode(block, 'select_graph_option_title', Blockly.JavaScript.ORDER_ATOMIC);
    var value_select_graph_option_x = Blockly.JavaScript.valueToCode(block, 'select_graph_option_X', Blockly.JavaScript.ORDER_ATOMIC);
    var value_select_graph_option_y = Blockly.JavaScript.valueToCode(block, 'select_graph_option_Y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_select_graph_option_end = Blockly.JavaScript.valueToCode(block, 'select_graph_option_END', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.  
    var code = '\n';    
    return code; 
  };

  // 2021.01.13 plt.imshow (남지원)
  Blockly.JavaScript['plt_imshow'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = `\n`;
    return code;
  };