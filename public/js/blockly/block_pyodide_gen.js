

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

        for (var i = 0; i < x_train.length; i++) {
            x_train[i] = new Array(key.length);
        }
        for (var i = 0; i < key.length; i++) {
            columns = columns + "'" + key[i] + "'";
            if (i != key.length - 1) {
                columns = columns + ",";
            }
        }
        // 값 세팅
        for (var i = 0; i < x_train.length; i++) {
            for (var j = 0; j < key.length; j++) {
                var keyName = key[j]; // key 값
                var data = file[i][keyName];
                if (Number(data) * 0 != 0) {
                    data = "'" + data + "'";
                }
                if (data == "") {
                    data = "None";
                }
                if (Number(data) == 0) {
                    data = "0";
                }
                x_train[i][j] = data; // value
            } value = value + "[" + x_train[i] + "]";
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
                x = x + "[" + x_train[i] + "]";
                y = y + "[" + y_train[i] + "]";
                if (i != x_train.length - 1) {
                    x = x + ",";
                    y = y + ",";
                }
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

// /////////////////데이터전처리 라벨링 20200909 이진형///////////////
Blockly.Python['labelencoder'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var text_column = block.getFieldValue('column');
    // TODO: Assemble Python into code variable.
    var code = "Label_enc = LabelEncoder()\n" + value_df + "['" + text_column + "'] = Label_enc.fit_transform(" + value_df + "['" + text_column + "'])\n";
    return code;
};
// /////////////////////라이브러리 추가블록////////////////////////20200910 이진형
// Blockly.Python['import_lib'] = function (block) {
//     var dropdown_lib = block.getFieldValue('lib');
//     var value_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
//     // TODO: Assemble Python into code variable. 
//     var code = '';
//     switch (dropdown_lib) {  
//         case "numpy": 
//             code = "import numpy as "+value_var;
//             Blockly.getMainWorkspace().renameVariableById(Blockly.getMainWorkspace().getVariable(value_var).getId(),"np");
//             break;
//         case "pandas": 
//             code = "import pandas as "+value_var; 
//             Blockly.getMainWorkspace().renameVariableById(Blockly.getMainWorkspace().getVariable(value_var).getId(),"pd");
//             break;
//         case "matplotlib.pyplot": 
//             code = "import matplotlib.pyplot as "+value_var;
//             Blockly.getMainWorkspace().renameVariableById(Blockly.getMainWorkspace().getVariable(value_var).getId(),"plt");
//             break;
//     }

//     return code;
// };

Blockly.Python['import_dataset'] = function (block) {
    var dropdown_dataset_name = block.getFieldValue('dataset_name');
    var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code;
    if (dropdown_dataset_name == "make_blobs" || dropdown_dataset_name == "make_moons"){
        code = `from sklearn.datasets import ${dropdown_dataset_name}`;
    }else{
        code = 'from sklearn.datasets import ' + dropdown_dataset_name + '\n' + value_x_data + ' = ' + dropdown_dataset_name + '().data\n' + value_y_data + ' = ' + dropdown_dataset_name + '().target\n';
    }
    return code; 
};

Blockly.Python['make_circles'] = function(block) {
    var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
    var text_n_samples = block.getFieldValue('n_samples');
    var text_factor = block.getFieldValue('factor');
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.datasets import make_circles\n'+ value_x_data + ', ' + value_y_data + '= make_circles(n_samples='+text_n_samples+', factor='+text_factor+')\n';
    return code;
  };

Blockly.Python['train_test_split'] = function (block) {
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
    var code = value_x_train + ',' + value_x_test + ',' + value_y_train + ',' + value_y_test + '= train_test_split(' + value_x_data + ',' + value_y_data + ',' + 'test_size=' + text_test_size + ', shuffle=' + dropdown_shuffle + ', random_state=' + text_seed + ')\n';
    return code;
};
Blockly.Python['jin_train_test_split'] = function (block) {
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
    var code = 'from sklearn.model_selection import train_test_split\n' + value_x_train + ',' + value_x_test + ',' + value_y_train + ',' + value_y_test + '= train_test_split(' + value_x_data + ',' + value_y_data + ',' + 'test_size=' + text_test_size + ', shuffle=' + dropdown_shuffle + ', random_state=' + text_seed + ')\n';
    return code;
};

Blockly.Python['model_score'] = function (block) {
    var value_model_name = Blockly.Python.valueToCode(block, 'model_name', Blockly.Python.ORDER_ATOMIC);
    var value_x_test = Blockly.Python.valueToCode(block, 'x_test', Blockly.Python.ORDER_ATOMIC);
    var value_y_test = Blockly.Python.valueToCode(block, 'y_test', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model_name + '.score(' + value_x_test + ', ' + value_y_test + ')\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['model_predict'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + ".predict(" + value_name + ")";
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
Blockly.Python['data_csv_read'] = function (block) {
    var value_data_csv_read_val = Blockly.Python.valueToCode(block, 'Data_csv_read_val', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'af = ' + value_data_csv_read_val + '.values.tolist()\n';
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
Blockly.Python['sklearn_mlp_classifier'] = function (block) {
    var value_sklearn_mlp_lib_val = Blockly.Python.valueToCode(block, 'sklearn_mlp_lib_val', Blockly.Python.ORDER_ATOMIC);
    var text_sklearn_mlp_hidden_layer_sizes_ = block.getFieldValue('sklearn_mlp_hidden_layer_sizes ');
    var dropdown_sklearn_mlp_activation_option = block.getFieldValue('sklearn_mlp_activation_Option');
    var dropdown_sklearn_mlp_optimizer_option = block.getFieldValue('sklearn_MLP_Optimizer_Option');
    var dropdown_sklearn_mlp_warm_start_option = block.getFieldValue('sklearn_MLP_Warm_Start_Option');
    var text_sklearn_mlp_learning_rate = block.getFieldValue('sklearn_MLP_learning_rate');
    var text_sklearn_mlp_max_iter = Blockly.Python.valueToCode(block, 'sklearn_MLP_Max_iter', Blockly.Python.ORDER_ATOMIC);
    var text_sklearn_mlp_random_state = block.getFieldValue('sklearn_MLP_random_state');
    var text_sklearn_mlp_batch_size = block.getFieldValue('sklearn_MLP_batch_size');
    // var value_sklearn_mlp_fit_x = Blockly.Python.valueToCode(block, 'sklearn_mlp_fit_X', Blockly.Python.ORDER_ATOMIC);
    // var value_sklearn_mlp_fit_y = Blockly.Python.valueToCode(block, 'sklearn_mlp_fit_Y', Blockly.Python.ORDER_ATOMIC);


    // TODO: Assemble Python into code variable.
    var get_sklearn_mlp_activation;
    var get_sklearn_mlp_optimizer;
    var get_sklearn_mlp_warm_start;

    switch (dropdown_sklearn_mlp_activation_option) {
        case "sklearn_MLP_activation_identity":
            get_sklearn_mlp_activation = `identity`;
            break;

        case "sklearn_MLP_activation_logistic":
            get_sklearn_mlp_activation = `logistic`;
            break;

        case "sklearn_MLP_activation_tanh":
            get_sklearn_mlp_activation = `tanh`;
            break;

        case "sklearn_MLP_activation_relu":
            get_sklearn_mlp_activation = `relu`;
            break;

        default:
            break;
    }

    switch (dropdown_sklearn_mlp_optimizer_option) {
        case "sklearn_MLP_Optimizer_Lbfgs":
            get_sklearn_mlp_optimizer = `lbfgs`;
            break;

        case "sklearn_MLP_Optimizer_SGD":
            get_sklearn_mlp_optimizer = `sgd`;
            break;

        case "sklearn_MLP_Optimizer_Adam":
            get_sklearn_mlp_optimizer = `adam`;
            break;


        default:
            break;
    }

    switch (dropdown_sklearn_mlp_warm_start_option) {

        case "sklearn_MLP_Warm_Start_False":
            get_sklearn_mlp_warm_start = `False`;
            break;

        case "sklearn_MLP_Warm_Start_True":
            get_sklearn_mlp_warm_start = `True`;
            break;

        default:
            break;
    }


    var code = `
${value_sklearn_mlp_lib_val} = MLPClassifier( 
hidden_layer_sizes = (${text_sklearn_mlp_hidden_layer_sizes_}),
activation = '${get_sklearn_mlp_activation}',
solver = '${get_sklearn_mlp_optimizer}',
learning_rate_init = ${text_sklearn_mlp_learning_rate}, 
max_iter = ${text_sklearn_mlp_max_iter},
batch_size = ${text_sklearn_mlp_batch_size},
warm_start = ${get_sklearn_mlp_warm_start},
random_state = ${text_sklearn_mlp_random_state} )\n`;
// ${value_sklearn_mlp_lib_val}.fit(${value_sklearn_mlp_fit_x},${value_sklearn_mlp_fit_y})\n`;
    // TODO: Change ORDER_NONE to the correct strength. 
    return code;
};

Blockly.Python['sklearn_mlp_regressor'] = function (block) {
    var value_sklearn_mlp_lib_val = Blockly.Python.valueToCode(block, 'sklearn_mlp_lib_val', Blockly.Python.ORDER_ATOMIC);
    var text_sklearn_mlp_hidden_layer_sizes_ = block.getFieldValue('sklearn_mlp_hidden_layer_sizes ');
    var dropdown_sklearn_mlp_activation_option = block.getFieldValue('sklearn_mlp_activation_Option');
    var dropdown_sklearn_mlp_optimizer_option = block.getFieldValue('sklearn_MLP_Optimizer_Option');
    var dropdown_sklearn_mlp_warm_start_option = block.getFieldValue('sklearn_MLP_Warm_Start_Option');
    var text_sklearn_mlp_learning_rate = block.getFieldValue('sklearn_MLP_learning_rate');
    var text_sklearn_mlp_max_iter = Blockly.Python.valueToCode(block, 'sklearn_MLP_Max_iter', Blockly.Python.ORDER_ATOMIC);
    var text_sklearn_mlp_random_state = block.getFieldValue('sklearn_MLP_random_state');
    var text_sklearn_mlp_batch_size = block.getFieldValue('sklearn_MLP_batch_size');
    // var value_sklearn_mlp_fit_x = Blockly.Python.valueToCode(block, 'sklearn_mlp_fit_X', Blockly.Python.ORDER_ATOMIC);
    // var value_sklearn_mlp_fit_y = Blockly.Python.valueToCode(block, 'sklearn_mlp_fit_Y', Blockly.Python.ORDER_ATOMIC);


    // TODO: Assemble Python into code variable.
    var get_sklearn_mlp_activation;
    var get_sklearn_mlp_optimizer;
    var get_sklearn_mlp_warm_start;

    switch (dropdown_sklearn_mlp_activation_option) {
        case "sklearn_MLP_activation_identity":
            get_sklearn_mlp_activation = `identity`;
            break;

        case "sklearn_MLP_activation_logistic":
            get_sklearn_mlp_activation = `logistic`;
            break;

        case "sklearn_MLP_activation_tanh":
            get_sklearn_mlp_activation = `tanh`;
            break;

        case "sklearn_MLP_activation_relu":
            get_sklearn_mlp_activation = `relu`;
            break;

        default:
            break;
    }

    switch (dropdown_sklearn_mlp_optimizer_option) {
        case "sklearn_MLP_Optimizer_Lbfgs":
            get_sklearn_mlp_optimizer = `lbfgs`;
            break;

        case "sklearn_MLP_Optimizer_SGD":
            get_sklearn_mlp_optimizer = `sgd`;
            break;

        case "sklearn_MLP_Optimizer_Adam":
            get_sklearn_mlp_optimizer = `adam`;
            break;


        default:
            break;
    }

    switch (dropdown_sklearn_mlp_warm_start_option) {

        case "sklearn_MLP_Warm_Start_False":
            get_sklearn_mlp_warm_start = `False`;
            break;

        case "sklearn_MLP_Warm_Start_True":
            get_sklearn_mlp_warm_start = `True`;
            break;

        default:
            break;
    }


    var code = `
${value_sklearn_mlp_lib_val} = MLPRegressor( 
hidden_layer_sizes = (${text_sklearn_mlp_hidden_layer_sizes_}),
activation = '${get_sklearn_mlp_activation}',
solver = '${get_sklearn_mlp_optimizer}',
learning_rate_init = ${text_sklearn_mlp_learning_rate}, 
max_iter = ${text_sklearn_mlp_max_iter},
batch_size = ${text_sklearn_mlp_batch_size},
warm_start = ${get_sklearn_mlp_warm_start},
random_state = ${text_sklearn_mlp_random_state} )\n`;
// ${value_sklearn_mlp_lib_val}.fit(${value_sklearn_mlp_fit_x},${value_sklearn_mlp_fit_y})\n`;
    // TODO: Change ORDER_NONE to the correct strength. 
    return code;
};

Blockly.Python['mlp_loss'] = function(block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model+'.loss_';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

//   //MLP fit 
//   Blockly.Python['sklearn_mlp_fit'] = function(block) {
//     var value_sklearn_mlp_fit_lib_var = Blockly.Python.valueToCode(block, 'sklearn_mlp_fit_lib_var', Blockly.Python.ORDER_ATOMIC);
//     var value_sklearn_mlp_fit_x = Blockly.Python.valueToCode(block, 'sklearn_mlp_fit_X', Blockly.Python.ORDER_ATOMIC);
//     var value_sklearn_mlp_fit_y = Blockly.Python.valueToCode(block, 'sklearn_mlp_fit_Y', Blockly.Python.ORDER_ATOMIC);
//     // TODO: Assemble Python into code variable.
//     var code = `${value_sklearn_mlp_fit_lib_var}.fit(${value_sklearn_mlp_fit_x},${value_sklearn_mlp_fit_y})\n`;
//     return code;
//   }; 

// kMeans
Blockly.Python['k_means'] = function (block) {
    var variable_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_cnt = Blockly.Python.valueToCode(block, 'cnt', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_model + " = KMeans(n_clusters = " + value_cnt + ")\n";
    return code;
};

Blockly.Python['vis_tree'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
    var text_s = block.getFieldValue('s');
    var text_e = block.getFieldValue('e');
    // TODO: Assemble Python into code variable.
    var code = '#트리그래프\n';
    return code;
};



Blockly.Python['fetch_openml'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `from sklearn.datasets import fetch_openml\ndf = fetch_openml(name="` + dropdown_name + `", as_frame=True)\n` + value_x + ` = df.data\n` + value_y + ` = df.target`;
    return code;
};
Blockly.Python['import_scikit'] = function (block) {
    var dropdown_metrics = block.getFieldValue('metrics');
    // TODO: Assemble Python into code variable.
    var code = '\n';

    switch (dropdown_metrics) {
        case "accuracy_score":
            code = "from sklearn.metrics import accuracy_score\n";
            break;
        case "metrics":
            code = "from sklearn import metrics\n";
            break;
        case "average_precision_score":
            code = "from sklearn.metrics import average_precision_score\n";
            break;
        case "precision_score":
            code = "from sklearn.metrics import precision_score\n";
            break;
        case "mean_absolute_error":
            code = "from sklearn.metrics import mean_absolute_error\n";
            break;
        case "mean_squared_error":
            code = "from sklearn.metrics import mean_squared_error\n";
            break;
        case "median_absolute_error":
            code = "from sklearn.metrics import median_absolute_error\n";
            break;
        case "classification_report":
            code = "from sklearn.metrics import classification_report\n";
            break;     
    } 
    return code;
};

Blockly.Python['acc_score'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'accuracy_score(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['AUC'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'metrics.auc(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['AP'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'average_precision_score(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['precision'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    var dropdown_aver = block.getFieldValue('aver');
    // TODO: Assemble Python into code variable.
    if(dropdown_aver!="None") {
        dropdown_aver = "'" + dropdown_aver + "'";
    }
    var code = "precision_score(" + value_yt + "," + value_yp + ", average=" + dropdown_aver + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['mae'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'mean_absolute_error(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['mse'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'mean_squared_error(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['median'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'median_absolute_error(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 신경망 MLPClassifier
Blockly.Python['mlp_classifier'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_numSeed = block.getFieldValue('numSeed');
    var text_numEpochs = block.getFieldValue('numEpochs');

    // TODO: Assemble Python into code variable.
    var code = value_model + " = MLPClassifier(random_state = " + text_numSeed + ", max_iter = " + text_numEpochs + ")\n";
    return code;
};
Blockly.Python['mlp_regressor'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_numSeed = block.getFieldValue('numSeed');
    var text_numEpochs = block.getFieldValue('numEpochs');

    // TODO: Assemble Python into code variable.
    var code = value_model + " = MLPRegressor(random_state = " + text_numSeed + ", max_iter = " + text_numEpochs + ")\n";
    return code;
};
// 선형모델
Blockly.Python['logistic_regression'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_numSeed = block.getFieldValue('numSeed');

    // TODO: Assemble Python into code variable.
    var importLib = "from sklearn.linear_model import LogisticRegression" + "\n";
    var code = value_model + " = LogisticRegression(random_state = " + text_numSeed + ")\n";
    return code;
};
Blockly.Python['logistic_regression_cv'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_numCv = block.getFieldValue('numCv');
    var text_numSeed = block.getFieldValue('numSeed');

    // TODO: Assemble Python into code variable.
    var importLib = "from sklearn.linear_model import LogisticRegressionCV" + "\n";
    var code = value_model + " = LogisticRegressionCV(cv=" + text_numCv + ", random_state = " + text_numSeed + ")\n";
    return code;
};
Blockly.Python['perceptron'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_numSeed = block.getFieldValue('numSeed');

    // TODO: Assemble Python into code variable.
    var importLib = "from sklearn.linear_model import Perceptron" + "\n";
    var code = value_model + " = Perceptron(tol = 1e-3, random_state = " + text_numSeed + ")\n";
    return code;
};
Blockly.Python['ridge_classifier'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);

    // TODO: Assemble Python into code variable.
    var importLib = "from sklearn.linear_model import RidgeClassifier" + "\n";
    var code = value_model + " = RidgeClassifier()\n";
    return code;
};
Blockly.Python['sgd_classifier'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_numEpochs = block.getFieldValue('numEpochs');

    // TODO: Assemble Python into code variable.
    var code = value_model + " = SGDClassifier(max_iter = " + text_numEpochs + ", tol = 1e-3)\n";
    return code;
};
Blockly.Python['linear_regression'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);

    // TODO: Assemble Python into code variable.
    var code = value_model + " = LinearRegression()\n";
    return code;
};
Blockly.Python['ridge'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_numAlpha = block.getFieldValue('numAlpha');

    // TODO: Assemble Python into code variable.
    var code = value_model + " = Ridge(alpha = " + text_numAlpha + ")\n";
    return code;
};
Blockly.Python['bayesian_ridge'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + " = BayesianRidge()" + "\n";
    return code;
};
Blockly.Python['sgd_regressor'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_numEpochs = block.getFieldValue('numEpochs');
    var text_numTol = block.getFieldValue('numTol');

    // TODO: Assemble Python into code variable.
    var code = value_model + " = SGDRegressor(max_iter = " + text_numEpochs + ", tol = 1e-3)\n";
    return code;
};
Blockly.Python['import_mlp'] = function (block) {
    var dropdown_lib = block.getFieldValue('lib');
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.neural_network import ' + dropdown_lib + "\n";
    return code;
};
Blockly.Python['import_linear'] = function (block) {
    var dropdown_lib = block.getFieldValue('lib');
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.linear_model import ' + dropdown_lib + "\n";
   
    return code;
};
Blockly.Python['import_kmeans'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = "from sklearn.cluster import KMeans\n";
    return code;
};
Blockly.Python['model_fit'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var variable_x_train = Blockly.Python.valueToCode(block, 'X_train', Blockly.Python.ORDER_ATOMIC);
    var variable_y_train = Blockly.Python.valueToCode(block, 'Y_train', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = "";
    if(!(variable_x_train)&&variable_y_train){
       code=value_model + ".fit(" + variable_y_train + ")" + "\n";
    }
    else if(!(variable_y_train)&&variable_x_train){
        code=value_model + ".fit(" + variable_x_train + ")" + "\n";
    }
    else if(variable_y_train&&variable_x_train){
        code=value_model + ".fit(" + variable_x_train +","+variable_y_train+ ")" + "\n";
    }
    else{
        code="fit()"
    }
    return code;
};
Blockly.Python['random_import'] = function (block) {
    var dropdown_dataset_name = block.getFieldValue('dataset_name');
    var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
    var sample = block.getFieldValue('sa');
    var fea = block.getFieldValue('fe');
    var seed = block.getFieldValue('seed');
    
    var code="";
    if (dropdown_dataset_name == "make_blobs"){
        if(value_x_data&&!(value_y_data)){
            code = 'from sklearn.datasets import ' + dropdown_dataset_name + '\n' + value_x_data + ' = ' + dropdown_dataset_name + '( n_samples = '+sample+', n_features = '+fea+', random_state = '+seed+')\n';
        }
        else if(!(value_x_data)&&value_y_data){
            code = 'from sklearn.datasets import ' + dropdown_dataset_name + '\n' + value_y_data + ' = ' + dropdown_dataset_name + '( n_samples = '+sample+', n_features = '+fea+', random_state = '+seed+')\n';
        }
        else{
            code = 'from sklearn.datasets import ' + dropdown_dataset_name + '\n' + value_x_data +','+value_y_data+ ' = ' + dropdown_dataset_name +'( n_samples = '+sample+', n_features = '+fea+', random_state = '+seed+')\n';
        }
    }
    if( dropdown_dataset_name == "make_moons"){
        if(value_x_data&&!(value_y_data)){
            code = 'from sklearn.datasets import ' + dropdown_dataset_name + '\n' + value_x_data + ' = ' + dropdown_dataset_name + '( n_samples = '+sample+', random_state = '+seed+')\n';
        }
        else if(!(value_x_data)&&value_y_data){
            code = 'from sklearn.datasets import ' + dropdown_dataset_name + '\n' + value_y_data + ' = ' + dropdown_dataset_name + '( n_samples = '+sample+', random_state = '+seed+')\n';
        }
        else{
            code = 'from sklearn.datasets import ' + dropdown_dataset_name + '\n' + value_x_data +','+value_y_data+ ' = ' + dropdown_dataset_name +'( n_samples = '+sample+', random_state = '+seed+')\n';
        }
    }
    return code;
};
Blockly.Python['kmeans_fit'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var variable_x_train = Blockly.Python.valueToCode(block, 'X_train', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + ".fit(" + variable_x_train + ")" + "\n";
    return code;
};

Blockly.Python['sivalidation'] = function (block) {
    var dropdown_vali = block.getFieldValue('vali');
    var value_em = Blockly.Python.valueToCode(block, 'em', Blockly.Python.ORDER_ATOMIC);
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var text_cv = block.getFieldValue('cv');
    // TODO: Assemble Python into code variable.
    var code = dropdown_vali + '(' + value_em + ', ' + value_x + ', ' + value_y + ', cv=' + text_cv + ')\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['import_sivalidation'] = function (block) {
    var dropdown_vali = block.getFieldValue('vali');
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.model_selection import ' + dropdown_vali+"\n";
    return code;
};
Blockly.Python['kfold'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_name = block.getFieldValue('NAME');
    var dropdown_shuffle = block.getFieldValue('shuffle');
    var text_seed = block.getFieldValue('seed');
    // TODO: Assemble Python into code variable.
    var code = value_model + '= KFold(n_splits=' + text_name + ',shuffle=' + dropdown_shuffle + ',random_state=' + text_seed + ')\n';
    return code;
};
Blockly.Python['stratifiedkfold'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_name = block.getFieldValue('NAME');
    var dropdown_shuffle = block.getFieldValue('shuffle');
    var text_seed = block.getFieldValue('seed');
    // TODO: Assemble Python into code variable.
    var code = value_model + '= KFold(n_splits=' + text_name + ',shuffle=' + dropdown_shuffle + ',random_state=' + text_seed + ')\n';
    return code;
};
Blockly.Python['bernoullirbm'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_hi = block.getFieldValue('hi');
    var text_lr = block.getFieldValue('lr');
    var text_batch = block.getFieldValue('batch');
    var text_epochs = block.getFieldValue('epochs');
    var text_seed = block.getFieldValue('seed');
    // TODO: Assemble Python into code variable.
    var code = value_model + '= BernoulliRBM(n_components=' + text_hi + ',learning_rate=' + text_lr + ',batch_size=' + text_batch + ' ,n_iter = ' + text_epochs + ',random_state = ' + text_seed + ')\n';
    return code;
};
Blockly.Python['import_scipy'] = function (block) {
    var dropdown_scipy = block.getFieldValue('scipy');
    // TODO: Assemble Python into code variable.
    var code = '\n';
    switch (dropdown_scipy) {
        case "curve_fit":
            code = "from scipy.optimize import curve_fit";
            break;
        case "interp1d":
            code = "from scipy.interpolate import interp1d";
            break;
        case "UnivariateSpline":
            code = "from scipy.interpolate import UnivariateSpline";
            break;
        case "quad":
            code = "from scipy.integrate import quad";
            break;
        case "trapz":
            code = "from scipy.integrate import trapz";
            break;
        case "wavfile":
            code = "from scipy.io import wavfile";  
            break;
        case "signal":
            code = "from scipy import signal";  
            break;
    }

    return code;
};
Blockly.Python['curve_fit'] = function(block) {
    var value_fun = Blockly.Python.valueToCode(block, 'fun', Blockly.Python.ORDER_ATOMIC);
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code ='curve_fit('+value_fun+', '+value_x+', '+value_y+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['univariatespline'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var text_s = block.getFieldValue('s');
    // TODO: Assemble Python into code variable.
    var code = 'UnivariateSpline('+value_x+', '+value_y+', s='+text_s+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['quad'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var text_s = block.getFieldValue('s');
    var text_e = block.getFieldValue('e');
    // TODO: Assemble Python into code variable.
    var code = 'quad('+value_x+', '+text_s+', '+text_e+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['import_tree'] = function(block) {
    var dropdown_tree = block.getFieldValue('tree');
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.tree import '+dropdown_tree+'\n';
    return code;
  };

  Blockly.Python['decision'] = function(block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_dept = block.getFieldValue('depth');
    var text_seed = block.getFieldValue('seed');;
    // TODO: Assemble Python into code variable.\
    var code = value_model+'= DecisionTreeClassifier(max_depth='+text_dept+',random_state='+text_seed+')\n';

    return code;
  };
  Blockly.Python['coef'] = function(block) {
    var value_coef = Blockly.Python.valueToCode(block, 'coef', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_coef+'.coef_';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  Blockly.Python['intercept'] = function(block) {
    var value_intercept = Blockly.Python.valueToCode(block, 'intercept', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_intercept+'.intercept_';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  Blockly.Python['tree_text'] = function(block) {
    var value_trr = Blockly.Python.valueToCode(block, 'trr', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '#결정트리시각화\n';
    return code;
  };
  Blockly.Python['np_dot'] = function(block) {
    var value_dot = Blockly.Python.valueToCode(block, 'dot', Blockly.Python.ORDER_ATOMIC);
    var value_dot2 = Blockly.Python.valueToCode(block, 'dot2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'np.dot('+value_dot+','+value_dot2+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };