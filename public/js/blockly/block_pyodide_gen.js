
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
Blockly.Python['forp'] = function (block) {
    var value_i = Blockly.Python.valueToCode(block, 'i', Blockly.Python.ORDER_ATOMIC);
    var value_range = Blockly.Python.valueToCode(block, 'range', Blockly.Python.ORDER_ATOMIC);
    var statements_for = Blockly.Python.statementToCode(block, 'for');
    // TODO: Assemble Python into code variable.
    var code = "for " + value_i + " in range(" + value_range + "):\n" + statements_for;
    return code;
};

Blockly.Python['sump'] = function (block) {
    var value_i = Blockly.Python.valueToCode(block, 'i', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'sum(' + value_i + ')';
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
Blockly.Python['array_get'] = function (block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_array + '[[' + value_name + ']]';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['csv2'] = function (block) {
    var file = block.getFieldValue('csv_url');
    // x, y
    var x_train;
    var value = "";
    var columns = "[";
    try {
        file = JSON.parse(file);
        // key 값만 추출
        var key = Object.getOwnPropertyNames(file[0]);
        // 2차원 배열 array
        x_train = new Array(file.length);

        for (var i = 0; i < x_train.length - 1; i++) {
            x_train[i] = new Array(key.length);
        }
        for (var i = 0; i < key.length; i++) {
            columns = columns + "'" + key[i] + "'";
            if (i != key.length - 1) {
                columns = columns + ",";
            }
        }
        // 값 세팅
        for (var i = 0; i < x_train.length - 1; i++) {
            for (var j = 0; j < key.length; j++) {
                var keyName = key[j]; // key 값
                var data = file[i][keyName];
                if (Number(data) * 0 != 0) {
                    data = "'" + data + "'";
                }
                if (data == "") {
                    data = "None";
                }
                // if (Number(data) == 0) {
                //     data = "0";
                // }
                x_train[i][j] = data; // value
            }value = value + "[" + x_train[i] + "]";
            if (i != x_train.length - 1) {
                value = value + ",";
            }
        }
    } catch (e) {
        // console.log(e);
    }
    var code = "[" + value + "], columns=" + columns + "]";
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['csv3'] = function (block) {
    var valX = Blockly.Python.variableDB_.getName(block.getFieldValue('var_x'), Blockly.Variables.NAME_TYPE);
    var valY = Blockly.Python.variableDB_.getName(block.getFieldValue('var_y'), Blockly.Variables.NAME_TYPE);
    var dropdown_option = block.getFieldValue('OPTIONS');
    var file = block.getFieldValue('csv_url');
    // x, y
    var x_train,
        y_train;
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
                        y_train[i] = file[i][keyName];
                    } else {
                        x_train[i][tempIdx++] = file[i][keyName]; // value
                    }
                }
                tempIdx = 0;
                x = x + "[" + x_train[i] + "],";
                y = y + "[" + y_train[i] + "],";
            }

        }
    } catch (e) {
        console.log(e);
    }
    var code = valX + " = np.array([" + x + "]);\n" + valY + " = np.array([" + y + "]);\n";
    return code;
};

Blockly.Python['scikit_learn'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var dropdown_cate = block.getFieldValue('cate');
    var value_x = Blockly.Python.variableDB_.getName(block.getFieldValue('x'), Blockly.Variables.NAME_TYPE);
    var value_y = Blockly.Python.variableDB_.getName(block.getFieldValue('y'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import ' + dropdown_cate + '\n' + value_model + '=' + dropdown_cate + '()\n' + value_model + '.fit(' + value_x + ',' + value_y + ')\n';
    return code;
};

Blockly.Python['csvdataframe_J'] = function (block) {
    var value_pd = Blockly.Python.valueToCode(block, 'pd', Blockly.Python.ORDER_ATOMIC);
    var value_csv = Blockly.Python.valueToCode(block, 'csv', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_pd + '.DataFrame(' + value_csv + ')\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
// /////////////////데이터전처리 라벨링 20200909 이진형///////////////
Blockly.Python['labelencoder'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var text_column = block.getFieldValue('column');
    // TODO: Assemble Python into code variable.
    var code = "from sklearn.preprocessing import LabelEncoder\nLabel_enc = LabelEncoder()\n" + value_df + "['" + text_column + "'] = Label_enc.fit_transform(" + value_df + "['" + text_column + "'])\n";
    return code;
};
// /////////////////////라이브러리 추가블록////////////////////////20200910 이진형
Blockly.Python['import_lib'] = function (block) {
    var dropdown_lib = block.getFieldValue('lib');
    var value_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable. 
    var code = '';
    switch (dropdown_lib) {  
        case "numpy": 
            code = "import numpy as "+value_var;
            Blockly.getMainWorkspace().renameVariableById(Blockly.getMainWorkspace().getVariable(value_var).getId(),"np");
            break;
        case "pandas": 
            code = "import pandas as "+value_var; 
            Blockly.getMainWorkspace().renameVariableById(Blockly.getMainWorkspace().getVariable(value_var).getId(),"pd");
            break;
        case "matplotlib.pyplot": 
            code = "import matplotlib.pyplot as "+value_var;
            Blockly.getMainWorkspace().renameVariableById(Blockly.getMainWorkspace().getVariable(value_var).getId(),"plt");
            break;
    }
    
    return code;
};

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

Blockly.Python['model_score'] = function(block) {
    var value_model_name = Blockly.Python.valueToCode(block, 'model_name', Blockly.Python.ORDER_ATOMIC);
    var value_x_test = Blockly.Python.valueToCode(block, 'x_test', Blockly.Python.ORDER_ATOMIC);
    var value_y_test = Blockly.Python.valueToCode(block, 'y_test', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model_name + '.score(' + value_x_test + ', '+ value_y_test + ')\n';
    return code;
  };

Blockly.Python['model_predict'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var text_data = block.getFieldValue('data');
    // TODO: Assemble Python into code variable.
    var code = value_name+".predict([["+text_data+"]])";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };










// ////////////////////////python basic block
// 집합
Blockly.Python['set'] = function (block) {
    var set = Blockly.Python.valueToCode(block, 'SET', Blockly.Python.ORDER_ATOMIC);
    var code = `set(` + set + `)`;
    // 뮤테이션을 이용하여 어러 값을 가져오도록 수정해야함
    return [code, Blockly.Python.ORDER_ATOMIC];
};
// 집합 종류
Blockly.Python['set_menu'] = function (block) {
    var dropdown_set_menu = block.getFieldValue('set_menu');
    var value_set1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
    var value_set2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    if (dropdown_set_menu == 'union') {
        var code = value_set1 + '.union(' + value_set2 + ')';
    } else if (dropdown_set_menu == 'intersection') {
        var code = value_set1 + '.intersection(' + value_set2 + ')';
    } else if (dropdown_set_menu == 'difference') {
        var code = value_set1 + '.difference(' + value_set2 + ')';
    } else if (dropdown_set_menu == 'add') {
        var code = value_set1 + '.add(' + value_set2 + ')';
    } else if (dropdown_set_menu == 'update') {
        var code = value_set1 + '.update(' + value_set2 + ')';
    } else if (dropdown_set_menu == 'remove') {
        var code = value_set1 + '.remove(' + value_set2 + ')';
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};




//////////////테이블그리기 파이썬 코드 
Blockly.Python['data_csv_read'] = function(block) {
    var value_data_csv_read_val = Blockly.Python.valueToCode(block, 'Data_csv_read_val', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'af = '+value_data_csv_read_val+'.values.tolist()\n';  
    return code;     
  };  
   







// 새 튜플
Blockly.Python['tuple'] = function (block) {
    // Create a list with any number of elements of any type.
    var elements = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i++) {
        elements[i] = Blockly.Python.valueToCode(block, 'ADD' + i, Blockly.Python.ORDER_NONE) || 'None';
    }
    var code = '(' + elements.join(', ') + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 딕셔너리
Blockly.Python['dict'] = function (block) {
    var key = new Array(block.itemCount_);
    var values = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i = i + 1) {
        if (i == block.itemCount_ - 1) {
            key[i] = Blockly.Python.valueToCode(block, 'ADD' + i, Blockly.Python.ORDER_NONE) + ' : ' + Blockly.Python.valueToCode(block, 'ADD2' + i, Blockly.Python.ORDER_NONE)
        } else {
            key[i] = Blockly.Python.valueToCode(block, 'ADD' + i, Blockly.Python.ORDER_NONE) + ' : ' + Blockly.Python.valueToCode(block, 'ADD2' + i, Blockly.Python.ORDER_NONE) + ', ';
            key[i + 1] = Blockly.Python.valueToCode(block, 'ADD' + i + 1, Blockly.Python.ORDER_NONE) + ' : ' + Blockly.Python.valueToCode(block, 'ADD2' + i + 1, Blockly.Python.ORDER_NONE)
        }
    }

    // 리턴의 순서를 바꿔줘야함
    var code = '{' + key.join('') + '}';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 딕셔너리 옵션
Blockly.Python['dic_menu'] = function (block) {
    var dropdown_dic = block.getFieldValue('dic');
    var value_dic1 = Blockly.Python.valueToCode(block, 'dic1', Blockly.Python.ORDER_ATOMIC);
    var value_dic2 = Blockly.Python.valueToCode(block, 'dic2', Blockly.Python.ORDER_ATOMIC);
    var value_dic3 = Blockly.Python.valueToCode(block, 'dic3', Blockly.Python.ORDER_ATOMIC);
    if (dropdown_dic == 'printvalues1') {
        var code = 'print(' + value_dic1 + '[' + value_dic2 + '])';
    } else if (dropdown_dic == 'printvalues2') {
        var code = 'print(' + value_dic1 + '[' + value_dic2 + ']' + '[' + value_dic3 + '])';
    } else if (dropdown_dic == 'addvalues') {
        var code = value_dic1 + '[' + value_dic2 + '] = ' + value_dic3;
    } else if (dropdown_dic == 'delvalues') {
        var code = 'del ' + value_dic1 + '[' + value_dic2 + ']';
    } else if (dropdown_dic == 'changedict') {
        var code = 'dict(' + value_dic1 + ')';
    } else if (dropdown_dic == 'selectvalues') {
        var code = value_dic1 + '[' + value_dic2 + ']';
    } else if (dropdown_dic == 'getvalues') {
        var code = value_dic1 + '.values()';
    } else if (dropdown_dic == 'getkeys') {
        var code = value_dic1 + '.keys()';
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 반복문(파이썬스타일)
Blockly.Python['for_python'] = function (block) {
    var for1 = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
    var for2 = Blockly.Python.valueToCode(block, 'range', Blockly.Python.ORDER_ATOMIC);

    var code = 'for ' + for1 + ' in ' + for2 + ':';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 반복문
Blockly.Python['for_range'] = function (block) {
    var range1 = Blockly.Python.valueToCode(block, 'for_range', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'range(' + range1 + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


// 사이킷런 MLP 블록
Blockly.Python['sklearn_mlp'] = function(block) {
    var text_sklearn_mlp_hidden_size = block.getFieldValue('sklearn_MLP_hidden_size');
    var dropdown_sklearn_mlp_activation__option = block.getFieldValue('sklearn_MLP_activation _Option');
    var dropdown_sklearn_mlp_optimizer_option = block.getFieldValue('sklearn_MLP_Optimizer_Option');
    var text_sklearn_mlp_max_iter = block.getFieldValue('sklearn_MLP_Max iter');
    var text_sklearn_mlp_learning_rate = block.getFieldValue('sklearn_MLP_learning rate');
    var text_sklearn_mlp_random_state = block.getFieldValue('sklearn_MLP_random state');
    // TODO: Assemble Python into code variable.
    var get_sklearn_mlp_activation;
    var get_sklearn_mlp_optimizer;

    switch(dropdown_sklearn_mlp_activation__option){ 
        case "sklearn_MLP_activation _identity" :  
        get_sklearn_mlp_activation = `Identity`;        
        break;
      
        case "sklearn_MLP_activation_logistic" :  
        get_sklearn_mlp_activation = `Logistic`;           
        break;
    
        case "sklearn_MLP_activation_tanh" :   
        get_sklearn_mlp_activation = `Tanh`;            
        break;

        case "sklearn_MLP_activation_relu" :   
        get_sklearn_mlp_activation = `Relu`;            
        break;
     
        default: 
        break; 
      }   
      
      switch(dropdown_sklearn_mlp_optimizer_option){ 
        case "sklearn_MLP_Optimizer_Lbfgs" :  
        get_sklearn_mlp_optimizer = `Lbfgs`;        
        break;
      
        case "sklearn_MLP_Optimizer_SGD" :  
        get_sklearn_mlp_optimizer = `SGD`;           
        break;
    
        case "sklearn_MLP_Optimizer_Adam" :   
        get_sklearn_mlp_optimizer = `Adam`;            
        break;

      
        default: 
        break; 
      }


    var code = `MLPClassifier( hidden_layer_sizes = (${text_sklearn_mlp_hidden_size})
activation = ${get_sklearn_mlp_activation}
solver = ${get_sklearn_mlp_optimizer}
learning_rate_init = ${text_sklearn_mlp_learning_rate}
max_iter = ${text_sklearn_mlp_max_iter}
random_state = ${text_sklearn_mlp_random_state} )\n`; 
    // TODO: Change ORDER_NONE to the correct strength. 
    return [code, Blockly.Python.ORDER_NONE]; 
  };
 