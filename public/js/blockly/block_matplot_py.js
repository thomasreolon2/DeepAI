//라이브러리 임포트    
Blockly.Python['visualization_library'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'lib_var', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "import matplotlib.pyplot as plt\n";
  return code;
};

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
      code =`ax[${value_select_graph_option_location1}].${value_select_graph_option_graph}( `;  
    }else if(DL_Gra == "graph_both_1"){
      code =`ax.${value_select_graph_option_graph}( `;  
    }else{
      code =`ax[${value_select_graph_option_location1}][${value_select_graph_option_location2}].${value_select_graph_option_graph}(` ;  
    }
  
    code = code.concat(`${value_select_graph_option_xy }, label = "${value_select_graph_option_end}" `);
  
    if(DL_Gra == "graph_or_1"){
      code =  code.concat(`\nax[${value_select_graph_option_location1}].set_title("${value_select_graph_option_title}") 
  ax[${value_select_graph_option_location1}].set_xlabel("${value_select_graph_option_x}")
  ax[${value_select_graph_option_location1}].set_ylabel("${value_select_graph_option_y}") 
  ax[${value_select_graph_option_location1}].legend(loc='best')\n`); 
       
    }else if(DL_Gra == "graph_both_1"){
      code =  code.concat(`\nax.set_title("${value_select_graph_option_title}") 
  ax.set_xlabel("${value_select_graph_option_x}") 
  ax.set_ylabel("${value_select_graph_option_y}")  
  ax.legend(loc='best')\n`);
      
    }else{ 
      code =  code.concat(`\nax[${value_select_graph_option_location1}][${value_select_graph_option_location2}].set_title("${value_select_graph_option_title}")
  ax[${value_select_graph_option_location1}][${value_select_graph_option_location2}].set_xlabel("${value_select_graph_option_x}")
  ax[${value_select_graph_option_location1}][${value_select_graph_option_location2}].set_ylabel("${value_select_graph_option_y}")
  ax[${value_select_graph_option_location1}][${value_select_graph_option_location2}].legend(loc='best')\n`);  
    }
  
  
    code=code.concat(`plt.show()\n`);
   
  return code;
  };



  Blockly.Python['matp_Ex'] = function(block) {
    var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
    var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
    var value_name3 = Blockly.Python.valueToCode(block, 'd3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `${value_name1}.figure(figsize=(${value_name2} ,${value_name3}))`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python['matp_title'] = function(block) {
    var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
    var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `${value_name1}.set_title(${value_name2})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  