//그래프 출력 설정 
Blockly.Python['select_graph_option'] = function(block) {
    var value_select_graph_option_location1 = Blockly.Python.valueToCode(block, 'select_graph_option_location1', Blockly.Python.ORDER_ATOMIC);
    var value_select_graph_option_location2 = Blockly.Python.valueToCode(block, 'select_graph_option_location2', Blockly.Python.ORDER_ATOMIC);
    var value_select_graph_option_xy = Blockly.Python.valueToCode(block, 'select_graph_option_XY', Blockly.Python.ORDER_ATOMIC);
    var value_select_graph_option_graph = Blockly.Python.valueToCode(block, 'select_graph_option_graph', Blockly.Python.ORDER_ATOMIC);
    var value_select_graph_option_title = Blockly.Python.valueToCode(block, 'select_graph_option_title', Blockly.Python.ORDER_ATOMIC);
    var value_select_graph_option_x = Blockly.Python.valueToCode(block, 'select_graph_option_X', Blockly.Python.ORDER_ATOMIC);
    var value_select_graph_option_y = Blockly.Python.valueToCode(block, 'select_graph_option_Y', Blockly.Python.ORDER_ATOMIC);
    var value_select_graph_option_end = Blockly.Python.valueToCode(block, 'select_graph_option_END', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
   
    var code ;  
    
    if(DL_Gra == "graph_or_1"){//둘중 하나 
      code =`ax_lst[${value_select_graph_option_location1}].${value_select_graph_option_graph}( `;  
    }else if(DL_Gra == "graph_both_1"){
      code =`ax_lst.${value_select_graph_option_graph}( `;  
    }else{
      code =`ax_lst[${value_select_graph_option_location1}][${value_select_graph_option_location2}].${value_select_graph_option_graph}(` ;  
    }
  
    code = code.concat(`${value_select_graph_option_xy }, label = "${value_select_graph_option_end}" `);
  
    if(DL_Gra == "graph_or_1"){
      code =  code.concat(`\nax_lst[${value_select_graph_option_location1}].set_title("${value_select_graph_option_title}") 
  ax_lst[${value_select_graph_option_location1}].set_xlabel("${value_select_graph_option_x}")
  ax_lst[${value_select_graph_option_location1}].set_ylabel("${value_select_graph_option_y}") 
  ax_lst[${value_select_graph_option_location1}].legend(loc='best')\n`); 
       
    }else if(DL_Gra == "graph_both_1"){
      code =  code.concat(`\nax_lst.set_title("${value_select_graph_option_title}") 
  ax_lst.set_xlabel("${value_select_graph_option_x}") 
  ax_lst.set_ylabel("${value_select_graph_option_y}")  
  ax_lst.legend(loc='best')\n`);
      
    }else{ 
      code =  code.concat(`\nax_lst[${value_select_graph_option_location1}][${value_select_graph_option_location2}].set_title("${value_select_graph_option_title}")
  ax_lst[${value_select_graph_option_location1}][${value_select_graph_option_location2}].set_xlabel("${value_select_graph_option_x}")
  ax_lst[${value_select_graph_option_location1}][${value_select_graph_option_location2}].set_ylabel("${value_select_graph_option_y}")
  ax_lst[${value_select_graph_option_location1}][${value_select_graph_option_location2}].legend(loc='best')\n`);  
    }
  
  
    code=code.concat(`plt.show()\n`);
   
  return code;
  };