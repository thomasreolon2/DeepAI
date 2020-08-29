// Linear Regression
Blockly.defineBlocksWithJsonArray(
  [
    {
      "type": "np_array",
      "message0": "Numpy %1",
      "args0": [
        {
          "type": "input_value",
          "name": "lst",
          "check": "Array"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "sequential",
      "message0": "Set Sequential",
      "inputsInline": true,
      "output": null,
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "dense",
      "message0": "Add Dense Layer -> Model Name :  %1 | Input Shape :  %2 | Units :  %3 | Activation :  %4",
      "args0": [
        {
          "type": "input_value",
          "name": "model_name",
          "check": "String"
        },
        {
          "type": "field_input",
          "name": "input_shape",
          "text": ""
        },
        {
          "type": "field_input",
          "name": "units",
          "text": ""
        },
        {
          "type": "field_dropdown",
          "name": "activation",
          "options": [
            [
              "None",
              "None"
            ],
            [
              "Linear",
              "'linear'"
            ],
            [
              "Sigmoid",
              "'sigmoid'"
            ],
            [
              "Softmax",
              "'softmax'"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "compile",
      "message0": "Model Compile -> Model Name :  %1 | Optimizer :  %2 | Loss :  %3 | Metrics :  %4",
      "args0": [
        {
          "type": "input_value",
          "name": "model_name",
          "check": "String"
        },
        {
          "type": "field_dropdown",
          "name": "optimizer",
          "options": [
            [
              "SGD",
              "sgd"
            ],
            [
              "Adam",
              "adam"
            ]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "loss",
          "options": [
            [
              "MSE",
              "mse"
            ],
            [
              "Binary Cross Entropy",
              "binary_crossentropy"
            ],
            [
              "Categorical Cross Entropy",
              "categorical_crossentropy"
            ]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "metrics",
          "options": [
            [
              "None",
              ""
            ],
            [
              "MSE",
              "'mse'"
            ],
            [
              "MAE",
              "'mae'"
            ],
            [
              "Accuracy",
              "'acc'"
            ]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "fit",
      "message0": "Model Fitting -> Model Name :  %1 | X Train :  %2 | Y Train %3 | Batch Size :  %4 | Epochs :  %5",
      "args0": [
        {
          "type": "input_value",
          "name": "model_name"
        },
        {
          "type": "input_value",
          "name": "x_train"
        },
        {
          "type": "input_value",
          "name": "y_train"
        },
        {
          "type": "field_input",
          "name": "batch_size",
          "text": ""
        },
        {
          "type": "field_input",
          "name": "epochs",
          "text": ""
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "prediction",
      "message0": "Prediction -> Model :  %1 | Do Predict :  %2",
      "args0": [
        {
          "type": "input_value",
          "name": "model"
        },
        {
          "type": "field_input",
          "name": "preds",
          "text": "6, 7"
        }
      ],
      "inputsInline": true,
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
    /**
   * 2020-07-02
   * Lee Jin Hyung
   */
    {
      "type": "pandas",
      "message0": "Numpy %1 1 %2 %3 2 %4 %5 3 %6 %7",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x1",
          "check": "Array"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x2",
          "check": "Array"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x3",
          "check": "Array"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "readcsv",
      "message0": "read to csv %1 %2 %3 %4",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "fileName",
          "check": "String"
        },
        {
          "type": "field_dropdown",
          "name": "dropdown",
          "options": [
            [
              "sep",
              "sep="
            ],
            [
              "option",
              "ss"
            ],
            [
              "None",
              "NONE"
            ]
          ]
        },
        {
          "type": "input_value",
          "name": "option",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 330,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "token",
      "message0": "Token 객체 생성 %1 = %2",
      "args0": [
        {
          "type": "input_value",
          "name": "set",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "file",
          "check": "String",
          "align": "RIGHT"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 330,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "tokenfit",
      "message0": "Token fit %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NAME",
          "check": "String"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "tokenfit",
      "message0": "%1 Token fit %2",
      "args0": [
        {
          "type": "input_value",
          "name": "set",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "file",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "tokensquences",
      "message0": "ToKen :  %1 Squence :  %2",
      "args0": [
        {
          "type": "input_value",
          "name": "token",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "squence",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 65,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "wordindex",
      "message0": "word_index %1",
      "args0": [
        {
          "type": "input_value",
          "name": "token",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "padsequences",
      "message0": "padSequences %1 Lenght :  %2",
      "args0": [
        {
          "type": "input_value",
          "name": "sequences",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "NAME",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "separate",
      "message0": "DataFrame :  %1 column :  %2",
      "args0": [
        {
          "type": "input_value",
          "name": "pandas",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "column",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "keras_embedding",
      "message0": "keras.Embedding %1 model :  %2 input_dim :  %3 out_dim :  %4 input_length :  %5",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "model",
        },
        {
          "type": "input_value",
          "name": "input",
        },
        {
          "type": "input_value",
          "name": "out",
        },
        {
          "type": "input_value",
          "name": "length",
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "keras_lstm",
      "message0": "keras.LSTM %1 model :  %2 Unit :  %3",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "model",
        },
        {
          "type": "input_value",
          "name": "input",
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "keras_dropout",
      "message0": "keras.Dropout %1 model :  %2 rate :  %3",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "model",
        },
        {
          "type": "input_value",
          "name": "input",
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },

    /**
     * 2020-07-02
     * Jo Cheon Woo
     */
    {
      "type": "array_change",
      "message0": "%1 data: %2 reshape: %3 %4",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "array_name"
        },
        {
          "type": "field_input",
          "name": "num1",
          "text": "-1"
        },
        {
          "type": "field_input",
          "name": "num2",
          "text": "1"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "onehotencoder",
      "message0": "OneHotEncoder()",
      "inputsInline": true,
      "output": null,
      "colour": 40,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "onehotencoder_fit",
      "message0": "OneHotEncoder: %1 fit: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "enc_name",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "enc_fit_name",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "enc_transform",
      "message0": "enc name: %1 transform: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "enc_name",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "data_name",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 180,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "model_predict",
      "message0": "Prediction model: %1 I Do Predict: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "model_name",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "predict",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 180,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "enc_inverse",
      "message0": "enc name: %1 predict name: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "enc_name",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "predict",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 240,
      "tooltip": "",
      "helpUrl": ""
    },
    ////////////////////////////////////////////////////////////////
    //blockjas 선형회귀
    ////////////////////////////////////////////////////////////////
    {
      "type": "callback",
      "message0": "콜백지정-> %1 컨테이너 :  %2 %3 메트릭스 %4",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "field_dropdown",
          "name": "containerSelect",
          "options": [
            [
              "container",
              "container"
            ],
            [
              "1",
              "OPTIONNAME1"
            ],
            [
              "2",
              "OPTIONNAME2"
            ]
          ]
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_dropdown",
          "name": "metricsSelect",
          "options": [
            [
              "metrics",
              "metrics"
            ],
            [
              "1",
              "OPTIONNAME1"
            ],
            [
              "2",
              "OPTIONNAME2"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "sequential",
      "message0": "시퀀스 생성",
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "dense",
      "message0": "신경망층 생성-> %1 모델  :  %2 노드 수 : %3 %4 shape : %5",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "model"
        },
        {
          "type": "field_input",
          "name": "unit",
          "text": " "
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "shape",
          "text": " "
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "compile",
      "message0": "컴파일 ->  %1 model  :  %2 loss :  %3 %4 optimizer : %5",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "model"
        },
        {
          "type": "field_dropdown",
          "name": "loss",
          "options": [
            [
              "mse",
              "meanSquaredError"
            ],
            [
              "mae",
              "mae"
            ],
            [
              "binary_crossentropy",
              "binary_crossentropy"
            ]
          ]
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_dropdown",
          "name": "optimizer",
          "options": [
            [
              "sgd",
              "sgd"
            ],
            [
              "adam",
              "adam"
            ],
            [
              "adagrad",
              "adagrad"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 12,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "fit",
      "message0": "모델 훈련 ->  %1 model  :  %2 훈련 데이터  :  %3 예측 데이터  :  %4 배치사이즈 :  %5 %6 검증 데이터 : %7 검증 예측데이터 : %8 epochs :  %9 %10 데이터 셔플 :  %11 %12 콜백  : %13",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "model"
        },
        {
          "type": "input_value",
          "name": "data"
        },
        {
          "type": "input_value",
          "name": "ydata"
        },
        {
          "type": "field_input",
          "name": "batch",
          "text": ""
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "Vdata"
        },
        {
          "type": "input_value",
          "name": "yVdata"
        },
        {
          "type": "field_input",
          "name": "epochs",
          "text": ""
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_dropdown",
          "name": "shuffle",
          "options": [
            [
              "on",
              "true"
            ],
            [
              "off",
              "false"
            ]
          ]
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "callback"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 12,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "predict",
      "message0": "훈련된 모델로 예측-> %1 모델 :  %2 예측 하려는 값 :  %3",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "model"
        },
        {
          "type": "input_value",
          "name": "predictr"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 12,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "list",
      "message0": "배열-> %1 list :  %2 %3 shape :  %4",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "list",
          "text": ""
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "shape",
          "text": ""
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 12,
      "tooltip": "",
      "helpUrl": ""
    },
    ////////////////////////////////////////////////////////////////
    //mnist for js
    ///////////////////////////////////////////////////////////////
    {
      "type": "csv",
      "message0": "CSV 파일 불러오기 ->  %1 CSV URL :  %2 라벨로 지정할 컬럼명 :  %3",
      "args0": [
        {
          "type": "input_value",
          "name": "var"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "field_input",
          "name": "label",
          "text": ""
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "async",
      "message0": "async function :  %1 %2 %3",
      "args0": [
        {
          "type": "field_input",
          "name": "NAME",
          "text": "default"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "async"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 290,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "data",
      "message0": "데이터 설정->    %1 CSV 파일 :  %2 학습 데이터 :  %3 예측 데이터 : %4 배치사이즈 설정 :  %5",
      "args0": [
        {
          "type": "input_value",
          "name": "var"
        },
        {
          "type": "input_value",
          "name": "csv"
        },
        {
          "type": "input_value",
          "name": "x"
        },
        {
          "type": "input_value",
          "name": "y"
        },
        {
          "type": "field_input",
          "name": "batch",
          "text": ""
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "add",
      "message0": "신경망 층 생성-> 모델 :  %1 shape :  %2 노드 수 :  %3 %4 활성화 함수 설정 :  %5",
      "args0": [
        {
          "type": "input_value",
          "name": "model"
        },
        {
          "type": "input_value",
          "name": "unit"
        },
        {
          "type": "field_input",
          "name": "unit",
          "text": "    "
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_dropdown",
          "name": "activation",
          "options": [
            [
              "relu",
              "'relu'"
            ],
            [
              "softmax",
              "'softmax'"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "addn",
      "message0": "신경망 층 생성-> 모델 :  %1 노드 수 :  %2 %3 활성화 함수 설정 :  %4",
      "args0": [
        {
          "type": "input_value",
          "name": "model"
        },
        {
          "type": "field_input",
          "name": "unit",
          "text": "    "
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_dropdown",
          "name": "activation",
          "options": [
            [
              "relu",
              "'relu'"
            ],
            [
              "softmax",
              "'softmax'"
            ],
            [
              "sigmoid",
              "'sigmoid'"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "compile",
      "message0": "모델 컴파일 -> 모델 :  %1 optimizer :  %2 %3 loss :  %4 %5 metrics :  %6",
      "args0": [
        {
          "type": "input_value",
          "name": "model"
        },
        {
          "type": "field_dropdown",
          "name": "optimizer",
          "options": [
            [
              "adam",
              "'adam'"
            ],
            [
              "sgd",
              "'sgd'"
            ],
            [
              "adagrad",
              "'adagrad'"
            ]
          ]
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_dropdown",
          "name": "loss",
          "options": [
            [
              "mse",
              "'mse'"
            ],
            [
              "mae",
              "'mae'"
            ],
            [
              "sparseCategoricalCrossentropy",
              "'sparseCategoricalCrossentropy'"
            ],
            [
              "binaryCrossentropy",
              "'binaryCrossentropy'"
            ]
          ]
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "metrics",
          "text": ""
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "fit",
      "message0": "모델 학습 -> 모델 :  %1 학습 데이터 :  %2 epochs %3 %4 검증 데이터 :  %5 학습 콜백 지정 :  %6",
      "args0": [
        {
          "type": "input_value",
          "name": "model"
        },
        {
          "type": "input_value",
          "name": "data"
        },
        {
          "type": "field_input",
          "name": "epochs",
          "text": ""
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "valdata"
        },
        {
          "type": "input_value",
          "name": "callback"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 20,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "console",
      "message0": "콘솔 로그 :  %1",
      "args0": [
        {
          "type": "input_value",
          "name": "console"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "feturelenght",
      "message0": "특성값 개수 -> %1 Data :  %2",
      "args0": [
        {
          "type": "input_value",
          "name": "var"
        },
        {
          "type": "input_value",
          "name": "data"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "fitconsole",
      "message0": "모델 학습진행률 보기 ",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "predict",
      "message0": "학습된 모델로 예측-> 모델 :  %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NAME"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "covid",
      "message0": "코로나 감염여부 모델로 예측-> 나이 :   %1 %2 성별 :  %3 %4 온도 :  %5 %6 기침여부 :  %7 %8 목 통증 :  %9 %10 무기력함 : %11 %12 당뇨병 :  %13 %14 심장질환 :  %15 %16 폐 질환 :  %17 %18 면역체계 질환 :  %19 %20 고혈압 :  %21 %22 신장 질환 :  %23 %24 식욕부진 :  %25 %26 후각 상실 :  %27",
      "args0": [
        {
          "type": "field_input",
          "name": "age",
          "text": ""
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "sex",
          "text": ""
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "tem",
          "text": " "
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "ca",
          "text": ""
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "mo",
          "text": ""
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "mu",
          "text": ""
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "da",
          "text": ""
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "si",
          "text": ""
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "pe",
          "text": ""
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "my",
          "text": ""
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "go",
          "text": ""
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "sin",
          "text": ""
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "sik",
          "text": ""
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "huk",
          "text": ""
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "aaaa",
      "message0": "성적 예측-> 공부시간 :  %1 %2 과외 시간 :  %3",
      "args0": [
        {
          "type": "field_input",
          "name": "NAME",
          "text": ""
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "NAME",
          "text": ""
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    // 클롤링 부분 
    {
      "type": "user_script",
      "message0": "%1 : 크롤링 = 검색어 :  %2 %3 개수: %4 %5",
      "args0": [
        {
          "type": "input_value",
          "name": "Script_Name",
          "check": "String"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "Word",
          "check": "String"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "Count",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "nextStatement": null,
      "colour": 345,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "script",
      "message0": "%1 : 크롤링 하고 저장 ",
      "args0": [
        {
          "type": "input_value",
          "name": "NAME"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "colour": 345,
      "tooltip": "",
      "helpUrl": ""
    },
    // 클롤링 부분 
    ////////////////////////////////////////////////////////////////




  ]
);

// Logistic Regression
Blockly.defineBlocksWithJsonArray(
  [
    {
      "type": "load_x_data",
      "message0": "Set X Data",
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "load_y_data",
      "message0": "Set Y Data",
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "split_data",
      "message0": "Split Data -> Data :  %1 | From : %2 | To :  %3",
      "args0": [
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "field_input",
          "name": "split_from",
          "text": "0"
        },
        {
          "type": "field_input",
          "name": "split_to",
          "text": "0"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "show_shape",
      "message0": "Show Shape -> Data : %1",
      "args0": [
        {
          "type": "input_value",
          "name": "data"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "evaluate",
      "message0": "Evaluate -> Model : %1 | X : %2 | Y : %3",
      "args0": [
        {
          "type": "input_value",
          "name": "model"
        },
        {
          "type": "input_value",
          "name": "x_eval_data"
        },
        {
          "type": "input_value",
          "name": "y_eval_data"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
  ]
);

Blockly.defineBlocksWithJsonArray(
  [
    {
      "type": "file_open",
      "message0": "File Open",
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    }
  ]
);
/////////////////////prolog/////////////////////////
Blockly.Blocks['prolog_list'] = {
  init: function () {
    this.appendValueInput("bar")
      .setCheck(null)
      .appendField("Fact");
    this.appendStatementInput("content")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "Array");
    // this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['prolog_list_rule'] = {
  init: function () {
    this.appendValueInput("bar")
      .setCheck(null)
      .appendField("Fact");
    this.appendStatementInput("content")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "Array");
    // this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['constant'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("constant")
      .appendField(new Blockly.FieldTextInput(""), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['info_block_statement'] = {
  init: function () {
    this.setEnabled(true);
    this.setColour('#8e904d');
    this.setPreviousStatement(true);
    this.setNextStatement(false);
    this.appendDummyInput();
  }
};
Blockly.Blocks['funktor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Funktor")
      .appendField(new Blockly.FieldTextInput(""), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(135);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['rumpf'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Rumpf")
      .appendField(new Blockly.FieldDropdown([["and", "and"], ["or", "or"]]), "seperate");
    this.appendStatementInput("NAME")
      .setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "Array");
    this.setColour(190);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['Rule'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("       Rule");
    this.appendStatementInput("Fact")
      .setCheck(null);
    this.appendStatementInput("Rumpf")
      .setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "Array");
    this.setColour(190);
    this.setTooltip("Ein einfacher Fakt, welches aus einer Relation und einem oder mehreren Termen besteht.");
    this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/regeln.htm");
  }
};
Blockly.Blocks['abfrage'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Abfrage | Active")
      .appendField(new Blockly.FieldCheckbox("false"), "active");
    this.appendStatementInput("NAME")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "Array");
    this.setColour(100);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['separate'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("AND | OR 설정")
      .appendField(new Blockly.FieldDropdown([["and", "and"], ["or", "or"]]), "separate");
    this.appendStatementInput("NAME")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "Array");
    this.setColour(100);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
////////////////////////////////////////////numjs////////////////////////////////////
Blockly.Blocks['nj_array'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("/img/Numeric/N1-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
      .appendField("배열 생성")
      .appendField(new Blockly.FieldTextInput("ex)1,2,3,4"), "array");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['nj_sum'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("/img/Numeric/N2-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
      .appendField("배열 합계->");
    this.appendValueInput("ar1")
      .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['nj_multiply'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("/img/Numeric/N3-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
      .appendField("배열 곱->");
    this.appendValueInput("ar1")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("*");
    this.appendValueInput("ar2")
      .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['nj_substract'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("/img/Numeric/N4-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
      .appendField("배열 뺄셈->");
    this.appendValueInput("ar1")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("-");
    this.appendValueInput("ar2")
      .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['nj_add'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("/img/Numeric/N5-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
      .appendField("배열 덧셈->");
    this.appendValueInput("ar1")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("+");
    this.appendValueInput("ar2")
      .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['nj_divide'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("/img/Numeric/N6-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
      .appendField("배열 나누기->");
    this.appendValueInput("ar1")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("/");
    this.appendValueInput("ar2")
      .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['nj_shape'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("/img/Numeric/N7-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
      .appendField("배열 형태");
    this.appendValueInput("ar1")
      .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['js_hypothesis'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("추측 값 ->");
    this.appendValueInput("X")
      .setCheck(null)
      .appendField("X");
    this.appendDummyInput()
      .appendField("*");
    this.appendValueInput("W")
      .setCheck(null)
      .appendField("W");
    this.appendDummyInput()
      .appendField("+");
    this.appendValueInput("b")
      .setCheck(null)
      .appendField("b");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['js_cost'] = {
  init: function () {
    this.appendValueInput("hypothesis")
      .setCheck(null)
      .appendField("손실 값 ->")
      .appendField("합계 ( 추측값 ");
    this.appendValueInput("y_train")
      .setCheck(null)
      .appendField("-")
      .appendField("Y 값");
    this.appendDummyInput()
      .appendField(" ** ")
      .appendField(new Blockly.FieldTextInput("제곱 값 "), "mul");
    this.appendValueInput("len")
      .setCheck(null)
      .appendField(" / ")
      .appendField("길이");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['js_gradient_w'] = {
  init: function () {
    this.appendValueInput("w")
      .setCheck(null)
      .appendField("가중치 기울기 값 ->")
      .appendField("합계 (( 가중치");
    this.appendValueInput("X")
      .setCheck(null)
      .appendField("*")
      .appendField("X 값");
    this.appendValueInput("Y")
      .setCheck(null)
      .appendField("-")
      .appendField("Y 값");
    this.appendValueInput("b")
      .setCheck(null)
      .appendField("+")
      .appendField("편향값");
    this.appendValueInput("mul")
      .setCheck(null)
      .appendField(") *");
    this.appendValueInput("x2")
      .setCheck(null)
      .appendField("*")
      .appendField("X값");
    this.appendValueInput("len")
      .setCheck(null)
      .appendField(" / ")
      .appendField("길이");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['js_gradient_b'] = {
  init: function () {
    this.appendValueInput("w")
      .setCheck(null)
      .appendField("편향 기울기 값 ->")
      .appendField("합계 (( 가중치");
    this.appendValueInput("X")
      .setCheck(null)
      .appendField("*")
      .appendField("X 값");
    this.appendValueInput("Y")
      .setCheck(null)
      .appendField("-")
      .appendField("Y 값");
    this.appendValueInput("b")
      .setCheck(null)
      .appendField("+")
      .appendField("편향값");
    this.appendValueInput("mul")
      .setCheck(null)
      .appendField(") *");
    this.appendValueInput("len")
      .setCheck(null)
      .appendField(")  / ")
      .appendField("길이");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['insert'] = {
  init: function () {
    this.appendValueInput("val")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["+=", "+="], ["-=", "-="], ["*=", "*="], ["/=", "/="]]), "sep");
    this.appendValueInput("value")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['console'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("/img/ST13-logo-black.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
      .appendField("콘솔 출력 : ");
    this.appendValueInput("value")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['for_c'] = {
  init: function () {
    this.appendValueInput("val")
      .setCheck(null)
      .appendField(new Blockly.FieldImage("/img/Repeat/R1-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
      .appendField("변수");
    this.appendValueInput("s_val")
      .setCheck(null)
      .appendField("를 초기값:");
    this.appendValueInput("e_val")
      .setCheck(null)
      .appendField("부터 종료값 :");
    this.appendDummyInput()
      .appendField("까지");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[">", ">"], ["<", "<"], ["==", "=="], ["<=", "<="], [">=", ">="]]), "NAME")
      .appendField("다음 조건이 만족할 때 까지 ");
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(""), "int")
      .appendField("만큼 ");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["증가", "+="], ["감소", "-="], ["곱", "*="], ["나누기", "/="]]), "math")
      .appendField("하면서 반복");
    this.appendStatementInput("NAME")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['if_c'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("/img/Logic/L1-logo.png", 25, 25, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("val")
      .setCheck(null)
      .appendField("만약");
    this.appendValueInput("val2")
      .setCheck(null)
      .appendField("와");
    this.appendDummyInput()
      .appendField("가")
      .appendField(new Blockly.FieldDropdown([["같다면", "=="], ["다르다면", "!="]]), "sep");
    this.appendStatementInput("NAME")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['test'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("제이름은 : ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['printc'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("결과 출력 ");
    this.appendValueInput("content")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['lrgraph'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("선형회귀 그래프 출력->");
    this.appendValueInput("x")
      .setCheck(null)
      .appendField("X 값 :");
    this.appendValueInput("y")
      .setCheck(null)
      .appendField("Y 값 :");
    this.appendValueInput("w")
      .setCheck(null)
      .appendField("가중치 값 :");
    this.appendValueInput("b")
      .setCheck(null)
      .appendField("편향 값 :");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//////////////////////////다중선형회귀numjs////////////////////////
Blockly.Blocks['mlrhypothesis'] = {
  init: function () {
    this.appendValueInput("w1")
      .setCheck(null)
      .appendField("추측 값->  가중치1");
    this.appendValueInput("x1")
      .setCheck(null)
      .appendField("* X1 값");
    this.appendValueInput("w2")
      .setCheck(null)
      .appendField("+ 가중치2");
    this.appendValueInput("x2")
      .setCheck(null)
      .appendField("* X2 값");
    this.appendValueInput("b")
      .setCheck(null)
      .appendField("+ 편향 값");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['mrlcost'] = {
  init: function () {
    this.appendValueInput("y")
      .setCheck(null)
      .appendField("손실값 -> Y ");
    this.appendValueInput("hypothesis")
      .setCheck(null)
      .appendField("- hypothesis");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['mrlwgradient'] = {
  init: function () {
    this.appendValueInput("lenght")
      .setCheck(null)
      .appendField("가중치 기울기 값 -> -( 1 / X 크기");
    this.appendValueInput("x")
      .setCheck(null)
      .appendField(") * 합계 ( X 값");
    this.appendValueInput("cost")
      .setCheck(null)
      .appendField("* 손실 값)");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['mrlbgradient'] = {
  init: function () {
    this.appendValueInput("lenght")
      .setCheck(null)
      .appendField("편향 기울기 값 -> -( 1 / X 크기");
    this.appendValueInput("cost")
      .setCheck(null)
      .appendField(") * 합계 ( 손실 값");
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

////////////////////////// csv upload ////////////////////////
Blockly.Blocks['csv2'] = {
  init: function () {
    var dropdown = new Blockly.FieldDropdown(this.dynamicOptions);
    this.appendDummyInput()
      .appendField("CSV : ");
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("default"), "csv_url");
    this.appendValueInput("var_x")
      .setCheck(null)
      .appendField("X : ");
    this.appendDummyInput()
      .appendField('라벨로 지정할 컬럼명 : ')
      .appendField(dropdown, 'OPTIONS');
    this.appendValueInput("var_y")
      .setCheck(null)
      .appendField("Y : ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    // this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  dynamicOptions: function () {
    if (!dynamicDropdownOptions_.length) {
      return [['선택하세요.', 'OPTION-1']];
    }
    return dynamicDropdownOptions_;
  }
};
var dynamicDropdownOptions_ = [];
function addOptions(text) {
  dynamicDropdownOptions_.push([text, text]);
}

Blockly.Blocks['nget'] = {
  init: function () {
    this.appendValueInput("Ar")
      .setCheck(null)
      .appendField("배열 요소 찾기-> 배열 :");
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("위치 :");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['mexp'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("지수함수-> ")
      .appendField(new Blockly.FieldDropdown([["양수", "+"], ["음수", "-"], ["option", "OPTIONNAME"]]), "sep");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['logicgraph'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("로지스틱 회귀 그래프 출력->");
    this.appendValueInput("x")
      .setCheck(null)
      .appendField("X 값 :");
    this.appendValueInput("y")
      .setCheck(null)
      .appendField("Y 값 :");
    this.appendValueInput("w")
      .setCheck(null)
      .appendField("가중치 값 :");
    this.appendValueInput("b")
      .setCheck(null)
      .appendField("편향 값 :");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['mltensorjs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("머신러닝 모델  만들기");
    this.appendDummyInput();
    this.appendValueInput("model")
        .setCheck(null)
        .appendField("모델명 설정 : ");
    this.appendValueInput("xdata")
        .setCheck(null)
        .appendField("학습 데이터 설정 : ");
    this.appendValueInput("ydata")
        .setCheck(null)
        .appendField("목표 값 설정 : ");
    this.appendValueInput("inputshape")
        .setCheck(null)
        .appendField("입력데이터 형태 : ");
    this.appendDummyInput()
        .appendField("모델 종류 : ")
        .appendField("-> ")
        .appendField(new Blockly.FieldDropdown([["선형회귀","linear"], ["로지스틱회귀","logistic"]]), "activation");
    this.appendValueInput("epochs")
        .setCheck(null)
        .appendField("학습 반복 횟수 설정 : ");
    this.appendDummyInput();
    this.appendDummyInput()
        .appendField("학습 완료 후 : ");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
// /** file upload */
// Blockly.Blocks['file_upload'] = {
//   /**
//    * Block for creating a list with any number of elements of any type.
//    * @this {Blockly.Block}
//    */
//   init: function () {
//     // this.setHelpUrl(Blockly.Msg['LISTS_CREATE_WITH_HELPURL']);
//     this.setStyle('list_blocks');
//     this.itemCount_ = 1;
//     this.updateShape_();
//     this.setOutput(false, 'Array');
//     this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
//     // this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_TOOLTIP']);
//   },
//   /**
//    * Populate the mutator's dialog with this block's components.
//    * @param {!Blockly.Workspace} workspace Mutator's workspace.
//    * @return {!Blockly.Block} Root block in mutator.
//    * @this {Blockly.Block} 변경함
//    */
//   decompose: function (workspace) {
//     $('#btn_upload').click();
//   },
//   /**
//    * Modify this block to have the correct number of inputs.
//    * @private
//    * @this {Blockly.Block}
//    */
//   updateShape_: function () {
//     if (this.itemCount_ && this.getInput('EMPTY')) {
//       this.removeInput('EMPTY');
//     } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
//       this.appendDummyInput('EMPTY')
//         .appendField(Blockly.Msg['LISTS_CREATE_EMPTY_TITLE']);
//     }
//     // Add new inputs.
//     for (var i = 0; i < this.itemCount_; i++) {
//       if (!this.getInput('ADD' + i)) {
//         var input = this.appendValueInput('ADD' + i)
//           .setAlign(Blockly.ALIGN_RIGHT);
//         if (i == 0) {
//           input.appendField('file upload');
//         }
//       }
//     }
//     // Remove deleted inputs.
//     while (this.getInput('ADD' + i)) {
//       this.removeInput('ADD' + i);
//       i++;
//     }
//   }
// }
