//////////////////////////////////////////////////////
//
// 2021.01. 사이킷런 재정리, 정지현
// 사이킷런 블록 형상 관리
//
//////////////////////////////////////////////////////

// 사이킷런 라이브러리 임포트
Blockly.defineBlocksWithJsonArray(
    [
        {
            "type": "import_scikit_learn",
            "message0": "%{BKY_IMPORT_SCIKIT_LEARN}",
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": "%{BKY_SCIKITLEARN_HUE}",
            "tooltip": "",
            "helpUrl": ""
        }
    ]
)

//////////////////////////////////////////////////////
//
// 기본 - 모델 학습 및 평가
//
//////////////////////////////////////////////////////

// fit
Blockly.Blocks['model_fit'] = {
    init: function () {
        this.appendValueInput("model").appendField(Blockly.Msg['METRICS_MODEL_FIT']);
        this.appendValueInput("X_train").appendField(" x_train");
        this.appendValueInput("Y_train").appendField("y_train");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Model Score
Blockly.Blocks['model_score'] = {
    init: function () {
        this.appendValueInput("model_name").setCheck(null).appendField(Blockly.Msg['METRICS_MODEL_SCORE']);
        this.appendValueInput("x_test").setCheck(null).appendField("x_test");
        this.appendValueInput("y_test").setCheck(null).appendField("y_test");
        this.setInputsInline(true);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Model Predict
Blockly.Blocks['model_predict'] = {
    init: function () {
        this.appendValueInput("model").setCheck(null).appendField(Blockly.Msg['METRICS_MODEL_PREDICT_1']);
        this.appendValueInput("NAME").setCheck(null).appendField(Blockly.Msg['METRICS_MODEL_PREDICT_2']);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};



//////////////////////////////////////////////////////
//
// 데이터셋
//
//////////////////////////////////////////////////////

// Sklearn Dataset
Blockly.Blocks['import_dataset'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.DATASET_IMPORT_DATASET_1).appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg.DATASET_IMPORT_DATASET_2, "load_boston"
            ],
            [
                Blockly.Msg.DATASET_IMPORT_DATASET_3, "load_digits"
            ],
            [
                Blockly.Msg.DATASET_IMPORT_DATASET_4, "load_diabetes"
            ],
            [
                Blockly.Msg.DATASET_IMPORT_DATASET_5, "load_iris"
            ],
            [
                Blockly.Msg.DATASET_IMPORT_DATASET_6, "load_wine"
            ],
            [
                Blockly.Msg.DATASET_IMPORT_DATASET_7, "load_breast_cancer"
            ],
            [
                Blockly.Msg.DATASET_IMPORT_DATASET_8 , "load_linnerud"
            ]
        ]), "dataset_name");
        this.appendValueInput("x_data").setCheck(null).appendField("x_data");
        this.appendValueInput("y_data").setCheck(null).appendField("y_data");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Sklearn Make Blobs and Make Moons Dataset
Blockly.Blocks['random_import'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.DATASET_RANDOM_IMPORT_1).appendField(new Blockly.FieldDropdown([
            [
                "blobs", "make_blobs"
            ],
            [
                "moons", "make_moons"
            ]
        ]), "dataset_name");
        this.appendValueInput("x_data").setCheck(null).appendField("x_data");
        this.appendValueInput("y_data").setCheck(null).appendField("y_data");
        //this.appendDummyInput().appendField(Blockly.Msg.DATASET_RANDOM_IMPORT_2).appendField(new Blockly.FieldTextInput("100"), "sa");
        this.appendValueInput("sa").appendField(Blockly.Msg.DATASET_RANDOM_IMPORT_2).setCheck(null);
        //this.appendDummyInput().appendField(Blockly.Msg.DATASET_RANDOM_IMPORT_3).appendField(new Blockly.FieldTextInput("2"), "fe");
        this.appendValueInput("fe").appendField(Blockly.Msg.DATASET_RANDOM_IMPORT_3).setCheck(null);
        //this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("0"), "seed");
        this.appendValueInput("seed").appendField("seed").setCheck(null);

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Sklearn Make Circles Dataset
Blockly.Blocks['make_circles'] = {
    init: function () {
        this.appendValueInput("x_data")
            .setCheck(null)
            .appendField(Blockly.Msg.DATASET_MAKE_CIRCLES_1);
        this.appendValueInput("y_data")
            .setCheck(null)
            .appendField("y_data ");
        // this.appendDummyInput()
        //     .appendField(Blockly.Msg.DATASET_MAKE_CIRCLES_2)
        //     .appendField(new Blockly.FieldTextInput("100"), "n_samples");
        this.appendValueInput("n_samples").appendField(Blockly.Msg.DATASET_MAKE_CIRCLES_2).setCheck(null);
        // this.appendDummyInput()
        //     .appendField(Blockly.Msg.DATASET_MAKE_CIRCLES_3)
        //     .appendField(new Blockly.FieldTextInput("0.7"), "factor");
        this.appendValueInput("factor").appendField(Blockly.Msg.DATASET_MAKE_CIRCLES_3).setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Sklearn Load CSV
Blockly.Blocks['csv3'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.DATASET_CSV3_1)
        var dropdown = new Blockly.FieldDropdown(this.dynamicOptions);
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Machine_Learning/M1-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField(new Blockly.FieldTextInput("default"), "csv_url");
        this.appendDummyInput().appendField('x_data').appendField(new Blockly.FieldVariable("x_data"), "var_x").appendField('y_data').appendField(new Blockly.FieldVariable("y_data"), "var_y");
        this.appendDummyInput().appendField(Blockly.Msg.DATASET_CSV3_2).appendField(dropdown, 'OPTIONS');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    },
    dynamicOptions: function () {
        if (!dynamicDropdownOptions_.length) {
            return [[Blockly.Msg['DATASET_CSV3_3'], 'OPTION-1']];
        }
        return dynamicDropdownOptions_;
    }
};

//////////////////////////////////////////////////////
//
// 데이터 핸들링
//
//////////////////////////////////////////////////////

// Train Test Split
Blockly.Blocks['train_test_split'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.PREPROCESSING_TRAIN_TEST_SPLIT_1)
        // this.appendDummyInput().appendValueInput("x_data").setCheck(null).appendField("x_data")
        // this.appendDummyInput().appendValueInput("y_data").setCheck(null).appendField("y_data");
        // this.appendValueInput("x_train").setCheck(null).appendField("x_train")
        // this.appendValueInput("x_test").setCheck(null).appendField("x_test");
        // this.appendValueInput("y_train").setCheck(null).appendField("y_train")
        // this.appendValueInput("y_test").setCheck(null).appendField("y_test");
        this.appendDummyInput().appendField('x_data').appendField(new Blockly.FieldVariable("x_data"), "x_data")
        .appendField('x_train').appendField(new Blockly.FieldVariable("x_train"), "x_train")
        .appendField('x_test').appendField(new Blockly.FieldVariable("x_test"), "x_test")
        .appendField("test_size").appendField(new Blockly.FieldTextInput("0.2"), "test_size");

        this.appendDummyInput().appendField('y_data').appendField(new Blockly.FieldVariable("y_data"), "y_data")
        .appendField('y_train').appendField(new Blockly.FieldVariable("y_train"), "y_train")
        .appendField('y_test').appendField(new Blockly.FieldVariable("y_test"), "y_test")
        .appendField("data_shuffle").appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg.PREPROCESSING_TRAIN_TEST_SPLIT_2, "True"
            ],
            [
                Blockly.Msg.PREPROCESSING_TRAIN_TEST_SPLIT_3, "False"
            ]
        ]), "shuffle")
        .appendField('seed').appendField(new Blockly.FieldTextInput("0"), "seed"); 

        //this.appendDummyInput().appendField("Test Size").appendField(new Blockly.FieldTextInput("0.2"), "test_size");



        // this.appendDummyInput().appendField("Data Shuffle").appendField(new Blockly.FieldDropdown([
        //     [
        //         Blockly.Msg.PREPROCESSING_TRAIN_TEST_SPLIT_2, "True"
        //     ],
        //     [
        //         Blockly.Msg.PREPROCESSING_TRAIN_TEST_SPLIT_3, "False"
        //     ]
        // ]), "shuffle");

        // this.appendValueInput("seed").appendField('seed').setCheck(null);

        
        //this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("0"), "seed");
        // this.setInputsInline(true);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
        
    }
};

// Label Encoder
Blockly.Blocks['labelencoder'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.PREPROCESSING_LABELENCODER_1);
        this.appendValueInput("df").setCheck(null).appendField(Blockly.Msg.PREPROCESSING_LABELENCODER_2);
        this.appendDummyInput().appendField(Blockly.Msg.PREPROCESSING_LABELENCODER_3);
        this.appendValueInput("column").appendField().setCheck(null);
        //this.appendDummyInput().appendField("").appendField(new Blockly.FieldTextInput(Blockly.Msg.PREPROCESSING_LABELENCODER_4), "column").appendField("  ");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
 
// One-Hot Encoder
Blockly.Blocks['onehotencoder'] = { 
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.PREPROCESSING_ONEHOTENCODER_1);
        this.appendValueInput("df").setCheck(null).appendField(Blockly.Msg.PREPROCESSING_ONEHOTENCODER_2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// K-Fold
Blockly.Blocks['kfold'] = {
    init: function () {
        this.appendValueInput("model").setCheck(null).appendField(Blockly.Msg['SELECTION_KFOLD_1']);
        //this.appendDummyInput().appendField("Splits").appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.appendValueInput("NAME").appendField("splits").setCheck(null);
        this.appendDummyInput().appendField("Data Shuffle").appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg['SELECTION_KFOLD_2'], "True"
            ],
            [
                Blockly.Msg['SELECTION_KFOLD_3'], "False"
            ]
        ]), "shuffle");
        //this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("None"), "seed");
        this.appendValueInput("seed").appendField("Seed").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Polynomial Features
Blockly.Blocks['polynomialfeatures'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[PolynomialFeatures] ")
            .appendField("PolynomialFeatures(");
        //this.appendValueInput("NAME")
        this.appendValueInput("NAME").appendField("").setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//////////////////////////////////////////////////////
//
// 지도 학습 - 예측
//
//////////////////////////////////////////////////////

// Linear Regression
Blockly.Blocks['linear_regression'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.LINEAR_LINEAR_REGRESSION_1);
        this.appendValueInput("model").setCheck(null).appendField(Blockly.Msg.LINEAR_LINEAR_REGRESSION_2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// SGD Regressor
Blockly.Blocks['sgd_regressor'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.LINEAR_SGD_REGRESSION);
        this.appendValueInput("model").setCheck(null).appendField(Blockly.Msg.LINEAR_LINEAR_REGRESSION_2);
        //this.appendDummyInput().appendField("Epochs").appendField(new Blockly.FieldTextInput("1000"), "numEpochs");
        this.appendValueInput("numEpochs").appendField("epochs").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Ridge Regressor
Blockly.Blocks['ridge'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.LINEAR_RIDGE);
        this.appendValueInput("model").setCheck(null).appendField(Blockly.Msg.LINEAR_LINEAR_REGRESSION_2);
        //this.appendDummyInput().appendField("Alpha").appendField(new Blockly.FieldTextInput("1.0"), "numAlpha");
        this.appendValueInput("numAlpha").appendField("alpha").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Bayesian Ridge Regressor
Blockly.Blocks['bayesian_ridge'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.LINEAR_BAYESIAN_RIDGE);
        this.appendValueInput("model").setCheck(null).appendField(Blockly.Msg.LINEAR_LINEAR_REGRESSION_2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Adaboost Regressor
Blockly.Blocks['adaboostregressor'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField(Blockly.Msg.ESEMBLE_ADABOOSTREGRESSOR);
            // this.appendDummyInput()
            // .appendField(Blockly.Msg.ESEMBLE_ADABOOSTCLASSIFIER_2)
            // .appendField(new Blockly.FieldTextInput("50"), "NAME2");
            // this.appendDummyInput()
            // .appendField("seed")
            // .appendField(new Blockly.FieldTextInput("0"), "NAME3");

            this.appendValueInput("NAME2").appendField(Blockly.Msg.ESEMBLE_ADABOOSTCLASSIFIER_2).setCheck(null);
            this.appendValueInput("NAME3").appendField("seed").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Gradient Boost Regressor
Blockly.Blocks['gradientboostingregressor'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField(Blockly.Msg.ESEMBLE_GRADIENTBOOSTINGREGRESSOR);
            // this.appendDummyInput()
            // .appendField(Blockly.Msg.ESEMBLE_GRADIENTBOOSTINGCLASSIFIER_2)
            // .appendField(new Blockly.FieldTextInput("100"), "NAME2");
        this.appendValueInput("NAME2").appendField(Blockly.Msg.ESEMBLE_GRADIENTBOOSTINGCLASSIFIER_2).setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Random Forest Regressor
Blockly.Blocks['randomforestregressor'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField(Blockly.Msg['ESEMBLE_RANDOMFORESTREGRESSOR']);
        // this.appendDummyInput()
        //     .appendField(Blockly.Msg.ESEMBLE_GRADIENTBOOSTINGCLASSIFIER_2)
        //     .appendField(new Blockly.FieldTextInput("100"), "NAME2");
        // this.appendDummyInput()
        //     .appendField("seed")
        //     .appendField(new Blockly.FieldTextInput("0"), "NAME3");
            this.appendValueInput("NAME2").appendField(Blockly.Msg.ESEMBLE_GRADIENTBOOSTINGCLASSIFIER_2).setCheck(null);
            this.appendValueInput("NAME3").appendField("seed").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// KNN Regressor
Blockly.Blocks['kneighborsregressor_function'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.KNN_KNEIGHBORSREGERESSOR_FUNCTION)
            .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_2);
        this.appendValueInput("value")
            .setCheck(null);
        // this.appendDummyInput()
        //     .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_3)
        //     .appendField(new Blockly.FieldTextInput("5"), "value1");
        this.appendValueInput("value1").appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_3).setCheck(null);

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// SVR
Blockly.Blocks['linearsvr'] = {
    // init: function () {
    //     this.appendDummyInput()
    //         .appendField(Blockly.Msg.LINEARSVR);
    //     this.appendDummyInput()
    //         .appendField("seed")
    //         .appendField(new Blockly.FieldTextInput("0"), "NAME");
    //     this.setInputsInline(true);
    //     this.setOutput(true, null);
    //     this.setColour("%{BKY_SCIKITLEARN_HUE}");
    //     this.setTooltip("");
    //     this.setHelpUrl("");
    // }

    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINEARSVR)
            // this.appendDummyInput()
            // .appendField("seed")
            // .appendField(new Blockly.FieldTextInput("0"), "NAME");
            this.appendValueInput("NAME").appendField("seed").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// MLP Regressor
Blockly.Blocks['sklearn_mlp_regressor'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg['NEURALNETWORK_SKLEARN_MLP_REGRESSOR'])
        this.appendValueInput("sklearn_mlp_lib_val").setCheck(null).appendField(Blockly.Msg['NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_2']);
        // this.appendValueInput("sklearn_mlp_fit_X").setCheck(null).appendField("X_train");
        // this.appendValueInput("sklearn_mlp_fit_Y").setCheck(null).appendField("Y_train");
        //this.appendDummyInput().appendField("(").appendField(Blockly.Msg['NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_3']).appendField(new Blockly.FieldTextInput("100"), "sklearn_mlp_hidden_layer_sizes ");
        this.appendValueInput("sklearn_mlp_hidden_layer_sizes").appendField(Blockly.Msg.NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_3).setCheck(null);
        // this.appendDummyInput()
        // .appendField("epochs")
        // .appendField(new Blockly.FieldTextInput("100"), "sklearn_MLP_Max_iter");
        this.appendValueInput("sklearn_MLP_Max_iter").appendField("epochs").setCheck(null);
        //this.appendDummyInput().appendField('Batch Size').appendField(new Blockly.FieldTextInput("16"), "sklearn_MLP_batch_size")
        this.appendValueInput("sklearn_MLP_batch_size").appendField("batch_size").setCheck(null);
        this.appendDummyInput().appendField("activation").appendField(new Blockly.FieldDropdown([
            [
                "Relu", "sklearn_MLP_activation_relu"
            ],
            [
                "Identity", "sklearn_MLP_activation_identity"
            ],
            [
                "Logistic", "sklearn_MLP_activation_logistic"
            ],
            [
                "Tanh", "sklearn_MLP_activation_tanh"
            ]
        ]), "sklearn_mlp_activation_Option").appendField("optimizer").appendField(new Blockly.FieldDropdown([
            [
                "Adam", "sklearn_MLP_Optimizer_Adam"
            ],
            [
                "Lbfgs", "sklearn_MLP_Optimizer_Lbfgs"
            ],
            [
                "SGD", "sklearn_MLP_Optimizer_SGD"
            ]
        ]), "sklearn_MLP_Optimizer_Option")
        //.appendField(Blockly.Msg['NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_4']).appendField(new Blockly.FieldTextInput("0.001"), "sklearn_MLP_learning_rate")
        this.appendValueInput("sklearn_MLP_learning_rate").appendField(Blockly.Msg.NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_4).setCheck(null);
        this.appendDummyInput().appendField("warm_start").appendField(new Blockly.FieldDropdown([
            [
                "False", "sklearn_MLP_Warm_Start_False"
            ],
            [
                "True", "sklearn_MLP_Warm_Start_True"
            ]
        ]), "sklearn_MLP_Warm_Start_Option")
        //this.appendField("Seed").appendField(new Blockly.FieldTextInput("0"), "sklearn_MLP_random_state");
        this.appendValueInput("sklearn_MLP_random_state").appendField("seed").setCheck(null);

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//////////////////////////////////////////////////////
//
// 지도 학습 - 분류
//
//////////////////////////////////////////////////////

// Logistic Regression
Blockly.Blocks['logistic_regression'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.LINEAR_LOGISTIC_REGRESSION);
        this.appendValueInput("model").setCheck(null).appendField(Blockly.Msg.LINEAR_LINEAR_REGRESSION_2);
        //this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("0"), "numSeed");
        this.appendValueInput("numSeed").appendField("Seed").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Logistic Regression CV
Blockly.Blocks['logistic_regression_cv'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.LINEAR_LOGISTIC_REGRESSION_CV_1);
        this.appendValueInput("model").setCheck(null).appendField(Blockly.Msg.LINEAR_LINEAR_REGRESSION_2);
        // this.appendDummyInput().appendField(Blockly.Msg.LINEAR_LOGISTIC_REGRESSION_CV_2).appendField(new Blockly.FieldTextInput("5"), "numCv")
        // .appendField("Seed").appendField(new Blockly.FieldTextInput("0"), "numSeed");
        this.appendValueInput("numCv").appendField(Blockly.Msg.LINEAR_LOGISTIC_REGRESSION_CV_2).setCheck(null);
        this.appendValueInput("numSeed").appendField("seed").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Ridge Classifier
Blockly.Blocks['ridge_classifier'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.LINEAR_RIDGE_CLASSIFIER);
        this.appendValueInput("model").setCheck(null).appendField(Blockly.Msg.LINEAR_LINEAR_REGRESSION_2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// SGD Classifier
Blockly.Blocks['sgd_classifier'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.LINEAR_SGD_CLASSIFIER);
        this.appendValueInput("model").setCheck(null).appendField(Blockly.Msg.LINEAR_LINEAR_REGRESSION_2);
        // this.appendDummyInput().appendField("Epochs").appendField(new Blockly.FieldTextInput("1000"), "numEpochs");
        this.appendValueInput("numEpochs").appendField("epochs").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Perceptron
Blockly.Blocks['perceptron'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.LINEAR_PERCEPTRON);
        this.appendValueInput("model").setCheck(null).appendField(Blockly.Msg.LINEAR_LINEAR_REGRESSION_2);
        // this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("0"), "numSeed");
        this.appendValueInput("numSeed").appendField("seed").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Decision Tree Classifier
Blockly.Blocks['decision'] = {
    init: function () {
        this.appendValueInput("model").setCheck(null).appendField(Blockly.Msg.DECISIONTREE_DESICION_1);
        //this.appendDummyInput().appendField(Blockly.Msg.DECISIONTREE_DESICION_2).appendField(new Blockly.FieldTextInput("10"), "depth");
        //this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("0"), "seed");
        this.appendValueInput("depth").appendField(Blockly.Msg.DECISIONTREE_DESICION_2).setCheck(null);
        this.appendValueInput("seed").appendField("seed").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Adaboost Classifier
Blockly.Blocks['adaboostclassifier'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField(Blockly.Msg.ESEMBLE_ADABOOSTCLASSIFIER_1);
            // this.appendDummyInput()
            // .appendField(Blockly.Msg.ESEMBLE_ADABOOSTCLASSIFIER_2)
            // .appendField(new Blockly.FieldTextInput("50"), "NAME2");
        this.appendValueInput("NAME2").appendField(Blockly.Msg.ESEMBLE_ADABOOSTCLASSIFIER_2).setCheck(null);

            // this.appendDummyInput()
            // .appendField("seed")
            // .appendField(new Blockly.FieldTextInput("0"), "NAME3");
        this.appendValueInput("NAME3").appendField("seed").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Gradient Boosting Classifier
Blockly.Blocks['gradientboostingclassifier'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField(Blockly.Msg.ESEMBLE_GRADIENTBOOSTINGCLASSIFIER_1);

            // this.appendDummyInput()
            // .appendField(Blockly.Msg.ESEMBLE_GRADIENTBOOSTINGCLASSIFIER_2)
            // .appendField(new Blockly.FieldTextInput("100"), "NAME2");
        this.appendValueInput("NAME2").appendField(Blockly.Msg.ESEMBLE_GRADIENTBOOSTINGCLASSIFIER_2).setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Random Forest Classifier
Blockly.Blocks['randomforestclassifier'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField(Blockly.Msg.ESEMBLE_RANDOMFORESTCLASSIFIER);
        // this.appendDummyInput()
        //     .appendField(Blockly.Msg.ESEMBLE_GRADIENTBOOSTINGCLASSIFIER_2)
        //     .appendField(new Blockly.FieldTextInput("100"), "NAME2");
        this.appendValueInput("NAME2").appendField(Blockly.Msg.ESEMBLE_GRADIENTBOOSTINGCLASSIFIER_2).setCheck(null);
        // this.appendDummyInput()
        //     .appendField("seed")
        //     .appendField(new Blockly.FieldTextInput("0"), "NAME3");
        this.appendValueInput("NAME3").appendField("seed").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// KNN Classifier
Blockly.Blocks['kneighborsclassifier_function'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_1)
            .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_2);
        this.appendValueInput("value")
            .setCheck(null);
        // this.appendDummyInput()
        //     .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_3)
        //     .appendField(new Blockly.FieldTextInput("5"), "value1");

            this.appendValueInput("value1").appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_3).setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// SVC
Blockly.Blocks['linearsvc'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.LINEARSVC_1)
            // this.appendDummyInput()
            // .appendField("seed")
            // .appendField(new Blockly.FieldTextInput("0"), "NAME");
            this.appendValueInput("NAME").appendField("seed").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// MLP Classifier
Blockly.Blocks['sklearn_mlp_classifier'] = {
//     init: function () {
//         this.appendDummyInput().appendField(Blockly.Msg['NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_1'])
//         this.appendValueInput("sklearn_mlp_lib_val").setCheck(null).appendField(Blockly.Msg['NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_2']);
//         // this.appendValueInput("sklearn_mlp_fit_X").setCheck(null).appendField("X_train");
//         // this.appendValueInput("sklearn_mlp_fit_Y").setCheck(null).appendField("Y_train");
//         this.appendDummyInput().appendField("(").appendField(Blockly.Msg['NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_3']).appendField(new Blockly.FieldTextInput("100"), "sklearn_mlp_hidden_layer_sizes ");
//         this.appendValueInput("sklearn_MLP_Max_iter").setCheck(null).appendField("Epochs");
//         this.appendDummyInput().appendField('Batch Size').appendField(new Blockly.FieldTextInput("16"), "sklearn_MLP_batch_size").appendField("Activation").appendField(new Blockly.FieldDropdown([
//             [
//                 "Relu", "sklearn_MLP_activation_relu"
//             ],
//             [
//                 "Identity", "sklearn_MLP_activation_identity"
//             ],
//             [
//                 "Logistic", "sklearn_MLP_activation_logistic"
//             ],
//             [
//                 "Tanh", "sklearn_MLP_activation_tanh"
//             ]
//         ]), "sklearn_mlp_activation_Option").appendField("Optimizer").appendField(new Blockly.FieldDropdown([
//             [
//                 "Adam", "sklearn_MLP_Optimizer_Adam"
//             ],
//             [
//                 "Lbfgs", "sklearn_MLP_Optimizer_Lbfgs"
//             ],
//             [
//                 "SGD", "sklearn_MLP_Optimizer_SGD"
//             ]
//         ]), "sklearn_MLP_Optimizer_Option").appendField(Blockly.Msg['NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_4']).appendField(new Blockly.FieldTextInput("0.001"), "sklearn_MLP_learning_rate").appendField("Warm Start").appendField(new Blockly.FieldDropdown([
//             [
//                 "False", "sklearn_MLP_Warm_Start_False"
//             ],
//             [
//                 "True", "sklearn_MLP_Warm_Start_True"
//             ]
//         ]), "sklearn_MLP_Warm_Start_Option").appendField("Seed").appendField(new Blockly.FieldTextInput("0"), "sklearn_MLP_random_state");

//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("%{BKY_SCIKITLEARN_HUE}");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

init: function () {
    this.appendDummyInput().appendField(Blockly.Msg['NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_1'])
    this.appendValueInput("sklearn_mlp_lib_val").setCheck(null).appendField(Blockly.Msg['NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_2']);
    // this.appendValueInput("sklearn_mlp_fit_X").setCheck(null).appendField("X_train");
    // this.appendValueInput("sklearn_mlp_fit_Y").setCheck(null).appendField("Y_train");
    //this.appendDummyInput().appendField("(").appendField(Blockly.Msg['NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_3']).appendField(new Blockly.FieldTextInput("100"), "sklearn_mlp_hidden_layer_sizes ");
    this.appendValueInput("sklearn_mlp_hidden_layer_sizes").appendField(Blockly.Msg.NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_3).setCheck(null);
    // this.appendDummyInput()
    // .appendField("epochs")
    // .appendField(new Blockly.FieldTextInput("100"), "sklearn_MLP_Max_iter");
    this.appendValueInput("sklearn_MLP_Max_iter").appendField("epochs").setCheck(null);
    //this.appendDummyInput().appendField('Batch Size').appendField(new Blockly.FieldTextInput("16"), "sklearn_MLP_batch_size")
    this.appendValueInput("sklearn_MLP_batch_size").appendField("batch_size").setCheck(null);
    this.appendDummyInput().appendField("activation").appendField(new Blockly.FieldDropdown([
        [
            "Relu", "sklearn_MLP_activation_relu"
        ],
        [
            "Identity", "sklearn_MLP_activation_identity"
        ],
        [
            "Logistic", "sklearn_MLP_activation_logistic"
        ],
        [
            "Tanh", "sklearn_MLP_activation_tanh"
        ]
    ]), "sklearn_mlp_activation_Option").appendField("optimizer").appendField(new Blockly.FieldDropdown([
        [
            "Adam", "sklearn_MLP_Optimizer_Adam"
        ],
        [
            "Lbfgs", "sklearn_MLP_Optimizer_Lbfgs"
        ],
        [
            "SGD", "sklearn_MLP_Optimizer_SGD"
        ]
    ]), "sklearn_MLP_Optimizer_Option")
    //.appendField(Blockly.Msg['NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_4']).appendField(new Blockly.FieldTextInput("0.001"), "sklearn_MLP_learning_rate")
    this.appendValueInput("sklearn_MLP_learning_rate").appendField(Blockly.Msg.NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_4).setCheck(null);
    this.appendDummyInput().appendField("warm_start").appendField(new Blockly.FieldDropdown([
        [
            "False", "sklearn_MLP_Warm_Start_False"
        ],
        [
            "True", "sklearn_MLP_Warm_Start_True"
        ]
    ]), "sklearn_MLP_Warm_Start_Option")
    //this.appendField("Seed").appendField(new Blockly.FieldTextInput("0"), "sklearn_MLP_random_state");
    this.appendValueInput("sklearn_MLP_random_state").appendField("seed").setCheck(null);

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
}
};


//////////////////////////////////////////////////////
//
// 비지도 학습
//
//////////////////////////////////////////////////////

// K-Means
Blockly.Blocks['k_means'] = {
    init: function () {
        this.appendValueInput("model")
            .setCheck(null)
            .appendField(Blockly.Msg.CLUSTER_K_MEANS_1);
        // this.appendDummyInput()
        //     .appendField(Blockly.Msg.CLUSTER_K_MEANS_2)
        //     .appendField(new Blockly.FieldTextInput("0"), "cnt");

            this.appendValueInput("cnt").appendField(Blockly.Msg.CLUSTER_K_MEANS_2).setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//dbscan
Blockly.Blocks['dbscan'] = {
    init: function () {
        this.appendValueInput("DBSCAN_val")
            .setCheck(null)
            .appendField("[ DBSCAN ]");
        // this.appendDummyInput()
        //     .appendField("EPS ")
        //     .appendField(new Blockly.FieldTextInput("0.5"), "DBSCAN_EPS");
            this.appendValueInput("DBSCAN_EPS").appendField("eps").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


//IsolationForest
Blockly.Blocks['isolation_forest'] = {
    init: function () {
        this.appendValueInput("Isolation_Forest_val")
            .setCheck(null)
            .appendField("[Isolation Forest]");
        // this.appendDummyInput()
        //     .appendField(Blockly.Msg['ESEMBLE_ADABOOSTCLASSIFIER_2'])
        //     .appendField(new Blockly.FieldTextInput("100"), "Isolation_Forest_estimators")
            this.appendValueInput("Isolation_Forest_estimators").appendField(Blockly.Msg['ESEMBLE_ADABOOSTCLASSIFIER_2']).setCheck(null);
            this.appendValueInput("Isolation_Forest_connection").appendField(Blockly.Msg['ESEMBLE_ISOLATION_FOREST']).setCheck(null);
            this.appendValueInput("Isolation_Forest_randomstate").appendField("seed").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


//////////////////////////////////////////////////////
//
// 평가 지표
//
//////////////////////////////////////////////////////

// Accuracy Score
Blockly.Blocks['acc_score'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg['METRICS_ACC_SCORE']);
        this.appendValueInput("yt").setCheck(null).appendField("y_true");
        this.appendValueInput("yp").setCheck(null).appendField("y_pred");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Mean Absolute Error
Blockly.Blocks['mae'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg['METRICS_MAE']);
        this.appendValueInput("yt").setCheck(null).appendField("y_true");
        this.appendValueInput("yp").setCheck(null).appendField("y_pred");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Mean Squared Error
Blockly.Blocks['mse'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg['METRICS_MSE']);
        this.appendValueInput("yt").setCheck(null).appendField("y_true");
        this.appendValueInput("yp").setCheck(null).appendField("y_pred");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// AUC Curve
Blockly.Blocks['AUC'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg['METRICS_AUC_1']);
        this.appendValueInput("yt").setCheck(null).appendField(Blockly.Msg['METRICS_AUC_2']);
        this.appendValueInput("yp").setCheck(null).appendField(Blockly.Msg['METRICS_AUC_3']);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// AP 
Blockly.Blocks['AP'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg['METRICS_AP']);
        this.appendValueInput("yt").setCheck(null).appendField("y_true");
        this.appendValueInput("yp").setCheck(null).appendField("y_score");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Precision 
Blockly.Blocks['precision'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg['METRICS_PRECISION_1']);
        this.appendValueInput("yt").setCheck(null).appendField("y_true");
        this.appendValueInput("yp").setCheck(null).appendField("y_pred");
        this.appendDummyInput().appendField(Blockly.Msg['METRICS_PRECISION_2']).appendField(new Blockly.FieldDropdown([
            [
                "None", "None"
            ],
            [
                "macro", "macro"
            ],
            [
                "micro", "micro"
            ],
            [
                "weighted", "weighted"
            ]
        ]), "aver");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Median Squared Error
Blockly.Blocks['median'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg['METRICS_MEDIAN']);
        this.appendValueInput("yt").setCheck(null).appendField("y_true");
        this.appendValueInput("yp").setCheck(null).appendField("y_pred");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Cross Val.
Blockly.Blocks['sivalidation'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg['SELECTION_SIVALIDATION_1']).appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg['SELECTION_SIVALIDATION_2'], "cross_validate"
            ],
            [
                Blockly.Msg['SELECTION_SIVALIDATION_3'], "cross_val_predict"
            ],
            [
                Blockly.Msg['SELECTION_SIVALIDATION_4'], "cross_val_score"
            ],
            [
                Blockly.Msg['SELECTION_SIVALIDATION_5'], "learning_curve"
            ],
            [
                Blockly.Msg['SELECTION_SIVALIDATION_6'], "permutation_test_score"
            ],
            [
                Blockly.Msg['SELECTION_SIVALIDATION_7'], "validation_curve"
            ]
        ]), "vali");
        this.appendValueInput("em").setCheck(null).appendField(Blockly.Msg.SELECTION_SIVALIDATION_9);
        this.appendValueInput("x").setCheck(null).appendField("x_data");
        this.appendValueInput("y").setCheck(null).appendField("y_data");
        this.appendDummyInput().appendField(Blockly.Msg['SELECTION_SIVALIDATION_8']).appendField(new Blockly.FieldTextInput("3"), "cv");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//classification_report
Blockly.Blocks['classification_report'] = {
    init: function () {
        this.appendValueInput("classification_report_Y_true")
            .setCheck(null)
            .appendField(Blockly.Msg.METRICS_CLASSIFICATION_REPORT)
            .appendField("y_true");
        this.appendValueInput("classification_report_y_pred")
            .setCheck(null)
            .appendField("y_pred ");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//////////////////////////////////////////////////////
//
// 기타 블록
//
//////////////////////////////////////////////////////

// 계수 추출
Blockly.Blocks['coef'] = {
    init: function () {
        this.appendValueInput("coef").setCheck(null).appendField(Blockly.Msg.LINEAR_COEF);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 절편 추출
Blockly.Blocks['intercept'] = {
    init: function () {
        this.appendValueInput("intercept").setCheck(null).appendField(Blockly.Msg.LINEAR_INTERCEPT);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// K-means Inertia
Blockly.Blocks['k_means_inertia'] = {
    init: function () {
        this.appendValueInput("model")
            .setCheck(null)
            .appendField(Blockly.Msg.CLUSTER_K_MEANS_INERTIA);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// K-Means Centroid
Blockly.Blocks['k_means_centroid'] = {
    init: function () {
        this.appendValueInput("model")
            .setCheck(null)
            .appendField(Blockly.Msg.CLUSTER_K_MEANS_CENTROID);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


// MLP Loss
Blockly.Blocks['mlp_loss'] = {
    init: function () {
        this.appendValueInput("model")
            .setCheck(null)
            .appendField(Blockly.Msg['NEURALNETWORK_MLP_LOSS']);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//////////////////////////////////////////////////////
//
// 기타 블록 - 남은 블록
//
//////////////////////////////////////////////////////

// OpenML
Blockly.Blocks['fetch_openml'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.DATASET_FETCH_OPENML_1).appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg['DATASET_FETCH_OPENML_3'], "titanic"
            ],
            [
                Blockly.Msg.DATASET_FETCH_OPENML_2, "house_price"
            ],
            [
                "Mnist", "mnist_784"
            ]
        ]), "NAME");
        this.appendValueInput("x").setCheck(null).appendField("x_data");
        this.appendValueInput("y").setCheck(null).appendField("y_data");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// KNeighborsTransformer 블록 함수
Blockly.Blocks['kneighborstransformer_function'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.KNN_KNEIGHBORSTRANSFORMER_FUNCTION_1)
            .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_2);
        this.appendValueInput("value")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_3);
        this.appendValueInput("value1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(Blockly.Msg.KNN_KNEIGHBORSTRANSFORMER_FUNCTION_2)
            .appendField(new Blockly.FieldDropdown([["Distance", "distance"], ["Connectivity", "donnectivity"]]), "NAME");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

  //kneighbors_graph 블록 함수
  Blockly.Blocks['kneighbors_graph_function'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.KNN_KNEIGHBORS_GRAPH_FUNCTION_1)
          .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_2);
      this.appendValueInput("value")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("X");
      this.appendValueInput("value1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(Blockly.Msg.KNN_KNEIGHBORSCLASSIFIER_FUNCTION_3);
      this.appendValueInput("value2")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(Blockly.Msg.KNN_KNEIGHBORSTRANSFORMER_FUNCTION_2)
          .appendField(new Blockly.FieldDropdown([["Distance","distance"], ["Connectivity","connectivity"]]), "NAME");
      this.appendDummyInput()
          .appendField(Blockly.Msg.KNN_KNEIGHBORS_GRAPH_FUNCTION_2)
          .appendField(new Blockly.FieldDropdown([["True","true"], ["False","false"]]), "NAME1");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // 결정트리 그래프
  Blockly.Blocks['tree_text'] = {
    init: function () {
        this.appendValueInput("trr").setCheck(null).appendField(Blockly.Msg.DECISIONTREE_TREE_TEXT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// DBSCAN Fit and Predict
Blockly.Blocks['metrics_fit_predict'] = {
    init: function() {
      this.appendValueInput("metrics_fit_predict_val")
          .setCheck(null)
          .appendField(Blockly.Msg['METRICS_METRICS_FIT_PREDICT']);
      this.appendValueInput("metrics_fit_predict_Xdata")
          .setCheck(null)
          .appendField("Xdata");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  }; 

// Bernoulli RBM
  Blockly.Blocks['bernoullirbm'] = {
    init: function () {
        this.appendValueInput("model").setCheck(null).appendField(Blockly.Msg['NEURALNETWORK_BERNOULLIRBM_1']);
        // this.appendDummyInput().appendField(Blockly.Msg['NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_3']).appendField(new Blockly.FieldTextInput("2"), "hi");
        this.appendValueInput("hi").appendField(Blockly.Msg['NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_3']).setCheck(null);
        // this.appendDummyInput().appendField(Blockly.Msg['NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_4']).appendField(new Blockly.FieldTextInput("0.1"), "lr");
        this.appendValueInput("lr").appendField(Blockly.Msg['NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_4']).setCheck(null);
        //this.appendDummyInput().appendField(Blockly.Msg['NEURALNETWORK_BERNOULLIRBM_2']).appendField(new Blockly.FieldTextInput("10"), "batch");
        this.appendValueInput("batch").appendField(Blockly.Msg['NEURALNETWORK_BERNOULLIRBM_2']).setCheck(null);
        //this.appendDummyInput().appendField(" Epochs").appendField(new Blockly.FieldTextInput("10"), "epochs");
        this.appendValueInput("epochs").appendField("epochs").setCheck(null);
        // this.appendDummyInput().appendField(" Seed").appendField(new Blockly.FieldTextInput("None"), "seed");
        this.appendValueInput("seed").appendField("seed").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

 