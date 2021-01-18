//////////////////////////////////////////////////////
//
// 2021.01. 사이킷런 재정리, 정지현
// 사이킷런 파이썬 코드
//
//////////////////////////////////////////////////////

// 사이킷런 라이브러리 임포트
Blockly.Python['import_scikit_learn'] = function (block) {
    // TODO: Assemble Python into code variable. 
    var code = 'import sklearn\nfrom sklearn import *\n';
    return code;
};

//////////////////////////////////////////////////////
//
// 기본 - 모델 학습 및 평가
//
//////////////////////////////////////////////////////

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

// Model Score

Blockly.Python['model_score'] = function (block) {
    var value_model_name = Blockly.Python.valueToCode(block, 'model_name', Blockly.Python.ORDER_ATOMIC);
    var value_x_test = Blockly.Python.valueToCode(block, 'x_test', Blockly.Python.ORDER_ATOMIC);
    var value_y_test = Blockly.Python.valueToCode(block, 'y_test', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model_name + '.score(' + value_x_test + ', ' + value_y_test + ')\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Model Predict
Blockly.Python['model_predict'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + ".predict(" + value_name + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};



//////////////////////////////////////////////////////
//
// 데이터셋
//
//////////////////////////////////////////////////////

// Sklearn Dataset
Blockly.Python['import_dataset'] = function (block) {
    var dropdown_dataset_name = block.getFieldValue('dataset_name');
    var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code;
    if (dropdown_dataset_name == "make_blobs" || dropdown_dataset_name == "make_moons") {
        code = `from sklearn.datasets import ${dropdown_dataset_name}`;
    } else {
        code = value_x_data + ' = ' + 'sklearn.datasets.' + dropdown_dataset_name + '().data\n' + value_y_data + ' = ' + 'sklearn.datasets.' + dropdown_dataset_name + '().target\n';
    }
    return code;
};

// Sklearn Make Blobs and Make Moons Dataset
Blockly.Python['random_import'] = function (block) {
    var dropdown_dataset_name = block.getFieldValue('dataset_name');
    var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
    var sample = block.getFieldValue('sa');
    var fea = block.getFieldValue('fe');
    var seed = block.getFieldValue('seed');

    var code = "";
    if (dropdown_dataset_name == "make_blobs") {
        if (value_x_data && !(value_y_data)) {
            code = value_x_data + ' = ' + 'sklearn.datasets.' + dropdown_dataset_name + '( n_samples = ' + sample + ', n_features = ' + fea + ', random_state = ' + seed + ')\n';
        }
        else if (!(value_x_data) && value_y_data) {
            code = value_y_data + ' = ' + 'sklearn.datasets.' + dropdown_dataset_name + '( n_samples = ' + sample + ', n_features = ' + fea + ', random_state = ' + seed + ')\n';
        }
        else {
            code = value_x_data + ',' + value_y_data + ' = ' + 'sklearn.datasets.' + dropdown_dataset_name + '( n_samples = ' + sample + ', n_features = ' + fea + ', random_state = ' + seed + ')\n';
        }
    }
    if (dropdown_dataset_name == "make_moons") {
        if (value_x_data && !(value_y_data)) {
            code = value_x_data + ' = ' + 'sklearn.datasets.' + dropdown_dataset_name + '( n_samples = ' + sample + ', random_state = ' + seed + ')\n';
        }
        else if (!(value_x_data) && value_y_data) {
            code = value_y_data + ' = ' + 'sklearn.datasets.' + dropdown_dataset_name + '( n_samples = ' + sample + ', random_state = ' + seed + ')\n';
        }
        else {
            code = value_x_data + ',' + value_y_data + ' = ' + 'sklearn.datasets.' + dropdown_dataset_name + '( n_samples = ' + sample + ', random_state = ' + seed + ')\n';
        }
    }
    return code;
};

// Sklearn Make Circles Dataset
Blockly.Python['make_circles'] = function (block) {
    var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
    var text_n_samples = block.getFieldValue('n_samples');
    var text_factor = block.getFieldValue('factor');
    // TODO: Assemble Python into code variable.
    var code = value_x_data + ', ' + value_y_data + '= sklearn.datasets.make_circles(n_samples=' + text_n_samples + ', factor=' + text_factor + ')\n';
    return code;
};

// Sklearn Load CSV
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



//////////////////////////////////////////////////////
// 데이터 핸들링
//////////////////////////////////////////////////////

// Train Test Split
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
    var code = value_x_train + ',' + value_x_test + ',' + value_y_train + ',' + value_y_test + '= sklearn.model_selection.train_test_split(' + value_x_data + ',' + value_y_data + ',' + 'test_size=' + text_test_size + ', shuffle=' + dropdown_shuffle + ', random_state=' + text_seed + ')\n';
    return code;
};

// Label Encoder
Blockly.Python['labelencoder'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var text_column = block.getFieldValue('column');
    // TODO: Assemble Python into code variable.
    var code = "Label_enc = sklearn.preprocessing.LabelEncoder()\n" + value_df + "['" + text_column + "'] = Label_enc.fit_transform(" + value_df + "['" + text_column + "'])\n";
    return code;
};

// One-Hot Encoder
Blockly.Python['onehotencoder'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var text_column = block.getFieldValue('column');
    var code = "oh_enc = sklearn.preprocessing.OneHotEncoder()\n" + value_df + " = oh_enc.fit_transform(" + value_df + ").toarray()\n";
    return code;
};

// K-Fold
Blockly.Python['kfold'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_name = block.getFieldValue('NAME');
    var dropdown_shuffle = block.getFieldValue('shuffle');
    var text_seed = block.getFieldValue('seed');
    // TODO: Assemble Python into code variable.
    var code = value_model + '= sklearn.model_selection.KFold(n_splits=' + text_name + ',shuffle=' + dropdown_shuffle + ',random_state=' + text_seed + ')\n';
    return code;
};

// Polynom. Features
Blockly.Python['polynomialfeatures'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var interaction_only = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = sklearn.preprocessing.PolynomialFeatures(interaction_only=' + interaction_only + ')\n';
    return code;
};

//////////////////////////////////////////////////////
// 지도학습 - 예측
//////////////////////////////////////////////////////

// Linear Regression
Blockly.Python['linear_regression'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);

    // TODO: Assemble Python into code variable.
    var code = value_model + " = sklearn.linear_model.LinearRegression()\n";
    return code;
};

// SGD Regressor
Blockly.Python['sgd_regressor'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_numEpochs = block.getFieldValue('numEpochs');
    var text_numTol = block.getFieldValue('numTol');

    // TODO: Assemble Python into code variable.
    var code = value_model + " = sklearn.linear_model.SGDRegressor(max_iter = " + text_numEpochs + ", tol = 1e-3)\n";
    return code;
};

// Ridge Regressor
Blockly.Python['ridge'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_numAlpha = block.getFieldValue('numAlpha');

    // TODO: Assemble Python into code variable.
    var code = value_model + " = sklearn.linear_model.Ridge(alpha = " + text_numAlpha + ")\n";
    return code;
};

// Bayesian Ridge Regressor
Blockly.Python['bayesian_ridge'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + " = sklearn.linear_model.BayesianRidge()" + "\n";
    return code;
};

// Adaboost Regressor
Blockly.Python['adaboostregressor'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var n_estimators = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    var random_state2 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = sklearn.ensemble.AdaBoostRegressor(n_estimators=' + n_estimators + ',random_state =' + random_state2 + ')';
    return code;
};

// Gradient Boosting Regressor
Blockly.Python['gradientboostingregressor'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var random_state = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = sklearn.ensemble.GradientBoostingRegressor(random_state=' + random_state + ')';
    return code;
};

// Random Forest Regressor
Blockly.Python['randomforestregressor'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var max_depth = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    var random_state = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = sklearn.ensemble.RandomForestRegressor(max_depth=' + max_depth + ', random_state=' + random_state + ')';
    return code;
};

// KNN Regressor
Blockly.Python['kneighborsregressor_function'] = function (block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_value + " = " + "sklearn.neighbors.KNeighborsRegressor(n_neighbors=" + value_value1 + " )\n";
    return code;
};

// SVR
Blockly.Python['linearsvr'] = function (block) {
    var random_state = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var tol = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'sklearn.svm.LinearSVR(random_state=' + random_state + ', tol=' + tol + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

// MLP Regressor
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
${value_sklearn_mlp_lib_val} = sklearn.neural_network.MLPRegressor( 
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

//////////////////////////////////////////////////////
//
// 지도 학습 - 분류
//
//////////////////////////////////////////////////////

// Logistic Regression
Blockly.Python['logistic_regression'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_numSeed = block.getFieldValue('numSeed');

    // TODO: Assemble Python into code variable.
    var importLib = "from sklearn.linear_model import LogisticRegression" + "\n";
    var code = value_model + " = sklearn.linear_model.LogisticRegression(random_state = " + text_numSeed + ")\n";
    return code;
};

// Logistic Regression CV
Blockly.Python['logistic_regression_cv'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_numCv = block.getFieldValue('numCv');
    var text_numSeed = block.getFieldValue('numSeed');

    // TODO: Assemble Python into code variable.
    var importLib = "from sklearn.linear_model import LogisticRegressionCV" + "\n";
    var code = value_model + " = sklearn.linear_model.LogisticRegressionCV(cv=" + text_numCv + ", random_state = " + text_numSeed + ")\n";
    return code;
};


// Ridge Classifier
Blockly.Python['ridge_classifier'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);

    // TODO: Assemble Python into code variable.
    var importLib = "from sklearn.linear_model import RidgeClassifier" + "\n";
    var code = value_model + " = sklearn.linear_model.RidgeClassifier()\n";
    return code;
};

// SGD Classifier
Blockly.Python['sgd_classifier'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_numEpochs = block.getFieldValue('numEpochs');

    // TODO: Assemble Python into code variable.
    var code = value_model + " = sklearn.linear_model.SGDClassifier(max_iter = " + text_numEpochs + ", tol = 1e-3)\n";
    return code;
};

// Perceptron
Blockly.Python['perceptron'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_numSeed = block.getFieldValue('numSeed');

    // TODO: Assemble Python into code variable.
    var importLib = "from sklearn.linear_model import Perceptron" + "\n";
    var code = value_model + " = sklearn.linear_model.Perceptron(tol = 1e-3, random_state = " + text_numSeed + ")\n";
    return code;
};

// Decision Tree Classifier
Blockly.Python['decision'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_dept = block.getFieldValue('depth');
    var text_seed = block.getFieldValue('seed');;
    // TODO: Assemble Python into code variable.\
    var code = value_model + '= sklearn.tree.DecisionTreeClassifier(max_depth=' + text_dept + ',random_state=' + text_seed + ')\n';

    return code;
};

// Adaboost Classifier
Blockly.Python['adaboostclassifier'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var n_estimators = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    var random_state2 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = sklearn.ensemble.AdaBoostClassifier(n_estimators=' + n_estimators + ', random_state=' + random_state2 + ')';
    return code;
};

// Gradient Boosting Classifier
Blockly.Python['gradientboostingclassifier'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var random_state = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = sklearn.ensemble.GradientBoostingClassifier(random_state=' + random_state + ')';
    return code;
};

// Randome Forest Classifier
Blockly.Python['randomforestclassifier'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var max_depth = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    var random_state = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = sklearn.ensemble.RandomForestClassifier(max_depth=' + max_depth + ', random_state=' + random_state + ')';
    return code;
};

//KNeighborsClassifier 블럭 함수

Blockly.Python['kneighborsclassifier_function'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var value_name1 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + " = " + 'sklearn.neighbors.KNeighborsClassifier(n_neighbors=' + value_name1 + " )\n";
    return code;
};

// SVC
Blockly.Python['linearsvc'] = function (block) {
    var random_state = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var tol = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'sklearn.svm.LinearSVC(random_state=' + random_state + ', tol=' + tol + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};


// MLP Classifier
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
${value_sklearn_mlp_lib_val} = sklearn.neural_network.MLPClassifier( 
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

//////////////////////////////////////////////////////
//
// 비지도 학습
//
//////////////////////////////////////////////////////

// kMeans
Blockly.Python['k_means'] = function (block) {
    var variable_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_cnt = Blockly.Python.valueToCode(block, 'cnt', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_model + " = sklearn.cluster.KMeans(n_clusters = " + value_cnt + ")\n";
    return code;
};

//dbscan
Blockly.Python['dbscan'] = function (block) {
    var value_dbscan_val = Blockly.Python.valueToCode(block, 'DBSCAN_val', Blockly.Python.ORDER_ATOMIC);
    var text_dbscan_eps = block.getFieldValue('DBSCAN_EPS');
    // TODO: Assemble Python into code variable.
    var code = `${value_dbscan_val} = sklearn.cluster.DBSCAN( eps = ${text_dbscan_eps} )\n`;
    return code;
};


//IsolationForest
Blockly.Python['isolation_forest'] = function (block) {
    var value_isolation_forest_val = Blockly.Python.valueToCode(block, 'Isolation_Forest_val', Blockly.Python.ORDER_ATOMIC);
    var text_isolation_forest_estimators = block.getFieldValue('Isolation_Forest_estimators');
    var text_isolation_forest_connection = block.getFieldValue('Isolation_Forest_connection');
    var text_isolation_forest_randomstate = block.getFieldValue('Isolation_Forest_randomstate');
    // TODO: Assemble Python into code variable.
    var code = `${value_isolation_forest_val} = sklearn.ensemble.IsolationForest(n_estimators = ${text_isolation_forest_estimators}, contamination = ${text_isolation_forest_connection}, random_state = ${text_isolation_forest_randomstate})\n`;
    return code;
};

//////////////////////////////////////////////////////
//
// 평가 지표
//
//////////////////////////////////////////////////////

// Accuracy Score
Blockly.Python['acc_score'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'sklearn.metrics.accuracy_score(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Mean Absolute Error
Blockly.Python['mae'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'sklearn.metrics.mean_absolute_error(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Mean Squared Error
Blockly.Python['mse'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'sklearn.metrics.mean_squared_error(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// AUC Curve
Blockly.Python['AUC'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'sklearn.metrics.auc(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// AP
Blockly.Python['AP'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'sklearn.metrics.average_precision_score(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Precision
Blockly.Python['precision'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    var dropdown_aver = block.getFieldValue('aver');
    // TODO: Assemble Python into code variable.
    if(dropdown_aver!="None") {
        dropdown_aver = "'" + dropdown_aver + "'";
    }
    var code = "sklearn.metrics.precision_score(" + value_yt + "," + value_yp + ", average=" + dropdown_aver + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Median Squared Error
Blockly.Python['median'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'sklearn.metrics.median_absolute_error(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Cross Val.
Blockly.Python['sivalidation'] = function (block) {
    var dropdown_vali = block.getFieldValue('vali');
    var value_em = Blockly.Python.valueToCode(block, 'em', Blockly.Python.ORDER_ATOMIC);
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var text_cv = block.getFieldValue('cv');
    // TODO: Assemble Python into code variable.
    var code = 'sklearn.model_selection.' + dropdown_vali + '(' + value_em + ', ' + value_x + ', ' + value_y + ', cv=' + text_cv + ')\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['import_sivalidation'] = function (block) {
    var dropdown_vali = block.getFieldValue('vali');
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.model_selection import ' + dropdown_vali+"\n";
    return code;
};

//classification_report
Blockly.Python['classification_report'] = function(block) {
    var value_classification_report_y_true = Blockly.Python.valueToCode(block, 'classification_report_Y_true', Blockly.Python.ORDER_ATOMIC);
    var value_classification_report_y_pred = Blockly.Python.valueToCode(block, 'classification_report_y_pred', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `sklearn.metrics.classification_report( ${value_classification_report_y_true}, ${value_classification_report_y_pred})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

//////////////////////////////////////////////////////
//
// 기타 블록
//
//////////////////////////////////////////////////////

// 계수 추출
Blockly.Python['coef'] = function(block) {
    var value_coef = Blockly.Python.valueToCode(block, 'coef', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_coef+'.coef_';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

// 절편 추출
Blockly.Python['intercept'] = function(block) {
    var value_intercept = Blockly.Python.valueToCode(block, 'intercept', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_intercept+'.intercept_';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

// K-Means Inertia
Blockly.Python['k_means_inertia'] = function(block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + '.inertia_';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

// K-Means Centroid
Blockly.Python['k_means_centroid'] = function(block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + '.cluster_centers_';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

// MLP Loss
Blockly.Python['mlp_loss'] = function(block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model+'.loss_';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

//////////////////////////////////////////////////////
//
// 기타 블록 - 남은 블록
//
//////////////////////////////////////////////////////

// OpenML
Blockly.Python['fetch_openml'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `from sklearn.datasets import fetch_openml\ndf = fetch_openml(name="` + dropdown_name + `", as_frame=True)\n` + value_x + ` = df.data\n` + value_y + ` = df.target`;
    return code;
};

  //KNeighborsTransformer 블록 함수

  Blockly.Python['kneighborstransformer_function'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = value_value+" = make_pipeline(KNeighborsTransformer( n_neighbors= "+value_value1+" ,  mode="+dropdown_name+" ), Isomap(neighbors_algorithm='precomputed'))\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  };

  //kneighbors_graph 블록 함수

  Blockly.Python['kneighbors_graph_function'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
    var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    var dropdown_name1 = block.getFieldValue('NAME1');
    // TODO: Assemble Python into code variable.
    if(dropdown_name1=="auto" && dropdown_name1 =="connectivity"){
      dropdown_name2 = "true";
      }
      else if (dropdown_name1=="auto" && dropdown_name1 =="distance")
      dropdown_name2 = "false";
    var code = value_value+" = kneighbors_graph("+value_value1+","+value_value2+", mode = "+dropdown_name+", include_self = "+dropdown_name1+")\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  };

  // 결정트리 그래프
  Blockly.Python['tree_text'] = function(block) {
    var value_trr = Blockly.Python.valueToCode(block, 'trr', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '#결정트리시각화\n';
    return code;
  };

// DBSCAN Fit and Predict
Blockly.Python['metrics_fit_predict'] = function(block) {
    var value_metrics_fit_predict_val = Blockly.Python.valueToCode(block, 'metrics_fit_predict_val', Blockly.Python.ORDER_ATOMIC);
    var value_metrics_fit_predict_xdata = Blockly.Python.valueToCode(block, 'metrics_fit_predict_Xdata', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code =`${value_metrics_fit_predict_val}.fit_predict(${value_metrics_fit_predict_xdata})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
// Bernoulli RBM
  Blockly.Python['bernoullirbm'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_hi = block.getFieldValue('hi');
    var text_lr = block.getFieldValue('lr');
    var text_batch = block.getFieldValue('batch');
    var text_epochs = block.getFieldValue('epochs');
    var text_seed = block.getFieldValue('seed');
    // TODO: Assemble Python into code variable.
    var code = value_model + '= sklearn.neural_network.BernoulliRBM(n_components=' + text_hi + ',learning_rate=' + text_lr + ',batch_size=' + text_batch + ' ,n_iter = ' + text_epochs + ',random_state = ' + text_seed + ')\n';
    return code;
};  