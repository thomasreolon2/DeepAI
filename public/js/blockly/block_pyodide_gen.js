Blockly.Python['printc'] = function (block) {
    var value_content = Blockly.Python.valueToCode(block, 'content', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'print(' + value_content + ')\n';
    return code;
  };
  Blockly.Python['nj_array'] = function (block) {
    var text_array = block.getFieldValue('array');
    // TODO: Assemble JavaScript into code variable.
    var code = 'np.array([' + text_array + '])';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['forp'] = function(block) {
    var value_i = Blockly.Python.valueToCode(block, 'i', Blockly.Python.ORDER_ATOMIC);
    var value_range = Blockly.Python.valueToCode(block, 'range', Blockly.Python.ORDER_ATOMIC);
    var statements_for = Blockly.Python.statementToCode(block, 'for');
    // TODO: Assemble Python into code variable.
    var code = "for "+value_i+" in range("+value_range+"):\n"+statements_for;
    return code;
  };
  
  Blockly.Python['sump'] = function(block) {
    var value_i = Blockly.Python.valueToCode(block, 'i', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'sum('+value_i+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['lrgraph'] = function (block) {
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var value_w = Blockly.Python.valueToCode(block, 'w', Blockly.Python.ORDER_ATOMIC);
    var value_b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    return code;
  };
  Blockly.Python['logicgraph'] = function (block) {
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var value_w = Blockly.Python.valueToCode(block, 'w', Blockly.Python.ORDER_ATOMIC);
    var value_b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '';
    return code;
  };
  Blockly.Python['array_get'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_array+'['+value_name+']';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['csv2'] = function (block) {
    var valX = Blockly.Python.variableDB_.getName(block.getFieldValue('var_x'), Blockly.Variables.NAME_TYPE);
    var valY = Blockly.Python.variableDB_.getName(block.getFieldValue('var_y'), Blockly.Variables.NAME_TYPE);
    var dropdown_option = block.getFieldValue('OPTIONS');
    var file = block.getFieldValue('csv_url');
    // x, y
    var x_train, y_train;
    var x = "";
    var y = "";
    try {
      if (dropdown_option != "OPTION-1") {
        file = JSON.parse(file);
        // key 값만 추출
        var key = Object.getOwnPropertyNames(file[0]);
        // 2차원 배열 array
        x_train = new Array(file.length - 1);
        y_train = new Array(file.length - 1);
  
        for (var i = 0; i < x_train.length; i++) {
          x_train[i] = new Array(key.length - 1); // 1개는 Y Label
        }
        // 값 세팅
        var tempIdx = 0;
        for (var i = 0; i < x_train.length; i++) {
          for (var j = 0; j < key.length; j++) {
            var keyName = key[j]; // key 값
            if (keyName.trim() == dropdown_option.trim()) { // key값이 Y Label로 설정한 이름과 같다면.
              y_train[i] = Number(file[i][keyName]);
            } else {
              x_train[i][tempIdx++] = Number(file[i][keyName]); // value
            }
          }
          tempIdx = 0;
          x = x + "[" + x_train[i] + "],";
          y = y+  "[" + y_train[i] + "],";
        }
        
      }
    } catch (e) {
      console.log(e);
    }
    var code = valX + " = np.array([" + x + "]);\n" + valY + " = np.array([" + y + "]);\n";
    return code;
  };

  Blockly.Python['scikit_learn'] = function(block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var dropdown_cate = block.getFieldValue('cate');
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import '+dropdown_cate+'\n'+value_model+'='+dropdown_cate+'()\n'+value_model+'.fit('+value_x+','+value_y+')\n';
    return code;
  };