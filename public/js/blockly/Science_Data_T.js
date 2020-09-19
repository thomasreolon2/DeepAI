Blockly.defineBlocksWithJsonArray(
    [
   
  // 라이브러리 임포트 전체 새로운 것
  // {
  //   "type": "import_libs",
  //   "message0": "[ 라이브러리 임포트 ] %1 별칭  %2 %3",
  //   "args0": [
  //     {
  //       "type": "field_dropdown",
  //       "name": "import_libss",
  //       "options": [
  //         [
  //           "Numpy",
  //           "lib_import_numpy"
  //         ],
  //         [
  //           "Pandas",
  //           "lib_import_pandas"
  //         ],
  //         [
  //           "Matplotlib",
  //           "lib_import_Matplotlib"
  //         ],
  //         [
  //           "io",
  //           "lib_import_io"
  //         ],
  //         [
  //           "base64",
  //           "lib_import_base64"
  //         ]
  //       ]
  //     },
  //     {
  //       "type": "input_dummy"
  //     },
  //     {
  //       "type": "input_value",
  //       "name": "import_libs_val"
  //     }
  //   ],
  //   "inputsInline": true,
  //   "previousStatement": null,
  //   "nextStatement": null,
  //   "colour": 125,
  //   "tooltip": "",
  //   "helpUrl": ""
  // },
//라이브러리 임포트 사이킷런 
{
  "type": "lib_import_sklearn", 
  "message0": "[ 사이킷런 임포트 ]  %1 에서  %2 포함",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "lib_from_a_option",
      "options": [
        [
          "sklearn",
          "lib_from_sklearn_sklearn"
        ],
        [
          "sklearn.model_selection",
          "lib_from_sklearn_model_selection"
        ],
        [
          "sklearn.linear_model",
          "lib_from_linear_model"
        ],
        [
          "sklearn.neural_network",
          "lib_from_neural_network_model"
        ],
        [
          "sklearn.naive_bayes",
          "lib_from_naive_bayes"
        ],
        [
          "sklearn.ensemble",
          "lib_from_ensemble"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "lib_import_a_option",
      "options": [
        [
          "train_test_split",
          "lib_import_sklearn_ train_test_split"
        ],
        [
          "LinearRegression",
          "lib_import_sklearn_LinearRegression"
        ],
        [
          "LogisticRegression",
          "lib_import_sklearn_LogisticRegression"
        ],
        [
          "make_classification",
          "lib_import_sklearn_ make_classification"
        ], 
        [
          "MLPClassifier",
          "lib_import_sklearn_MLPClassifier"
        ], 
        [
          "GaussianNB",
          "lib_import_sklearn_GaussianNB"
        ],
        [
          "svm",
          "lib_import_svm"
        ],
        [
          "tree",
          "lib_import_tree"
        ],
        [
          "RandomForestClassifier",
          "lib_import_RandomForestClassifier"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 125,
  "tooltip": "",
  "helpUrl": ""
},  
//CSV 파일로 저장  
{
  "type": "data_to_csv",
  "message0": "[ CSV 파일로 저장 ] 변수  %1 ( 저장할 파일 이름  %2  )", 
  "args0": [
    {
      "type": "input_value",
      "name": "value_data_to_csv_dataval"
    },
    {
      "type": "field_input",
      "name": "value_value_data_to_csv_name",
      "text": " 저장할 파일 이름 "
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 125,
  "tooltip": "", 
  "helpUrl": ""
},  
//.list 데이터 리스트 변환
{
  "type": "data_conversion",
  "message0": "[ 리스트로 변환 ] 변수  %1 변환할 데이터 형식    %2 )",
  "args0": [
    {
      "type": "input_value",
      "name": "Data_Conversion_var"
    },
    {
      "type": "field_dropdown",
      "name": "Data_Conversion_Option",
      "options": [
        [
          "Pandas",
          "Data_Conversion_Option_Pandas"
        ],
        [
          "Numpy",
          "Data_Conversion_Option_Numpy"
        ],
        [
          "Tuple",
          "Data_Conversion_Option_Tuple"
        ],
        [
          "Dictionary",
          "Data_Conversion_Option_Dictionary"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 125,
  "tooltip": "",
  "helpUrl": ""
}, 
  // 라이브러리 단일 임포트 부분    
  {
    "type": "lib_import",
    "message0": "( 라이브러리 임포트 )  import %1",
    "args0": [ 
      {
        "type": "field_input",
        "name": "Lib_import_name",
        "text": ""
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  }, 
  // 라이브러리  임포트 as
  { 
    "type": "lib_import_as",
    "message0": "( 라이브러리 임포트 )  import %1  as %2",
    "args0": [
      {
        "type": "field_input",
        "name": "Lib_import_name_1",
        "text": ""
      },
      {
        "type": "field_input",
        "name": "Lib_import_name_second",
        "text": ""
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
  // 라이브러리  임포트 from
  {
    "type": "lib_import_from",
    "message0": "( 라이브러리 임포트 ) from %1 import %2", 
    "args0": [
      {
        "type": "field_input",
        "name": "Lib_import_name_from",
        "text": ""
      },
      { 
        "type": "field_input",  
        "name": "Lib_import2",
        "text": ""
      }
    ], 
    "previousStatement": null,
    "nextStatement": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
  
  //print 하기   
  { 
    "type": "print",
    "message0": "print %1 %2", 
    "args0": [ 
      {
        "type": "input_dummy"
      },
      { 
        "type": "input_value",
        "name": "print_value"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },

  //배열 곱 
  {
    "type": "arry_mul",
    "message0": "배열 곱 %1 %2 * %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "Arry_mul_first"
      },
      { 
        "type": "input_value",
        "name": "Arry_mul_second"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null, 
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
  // 배열 나누기 
  { 
    "type": "arry_div",
    "message0": "배열 나누기 %1 %2 / %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "Arry_div_first"
      },
      {
        "type": "input_value",
        "name": "Arry_div_second"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null, 
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
  //배열 합
  {
    "type": "arry_plus",
    "message0": "배열 합 %1 %2 + %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "Arry_plus_first"
      },
      {
        "type": "input_value",
        "name": "Arry_plus_second"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null, 
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
  //배열 뺴기
  {
    "type": "arry_minus",
    "message0": "배열 빼기 %1 %2 - %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value", 
        "name": "Arry_Minus_first"
      },
      {
        "type": "input_value",
        "name": "Arry_Minus_second"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null, 
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },

  //배열 생성
  {
    "type": "create_arry",
    "message0": "[ 배열 값 ] %1", 
    "args0": [  
      {
        "type": "field_input", 
        "name": "Create_arry_val",
        "text": "ex) 1,2,3,4"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
    // 배열 np.arry 
    {
      "type": "np_array",
      "message0": "[ 넘파이 배열 생성 ]%1  %2",
      "args0": [
        {
          "type": "input_value",
          "name": "np_array_lib_val"
        },
        {
          "type": "input_value",
          "name": "np_array_val"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 125,
      "tooltip": "",
      "helpUrl": ""
    }, 
  // numpy 함수 zeros
  { 
    "type": "numpy_zeros",
    "message0": " [ 0 배열 생성 ] %1  ( 행 %2 , 열 %3  ) dtype 사용여부 (정수  %4)",
    "args0": [
      {
        "type": "input_value",
        "name": "numpy_zeros_lib_val"
      },
      {
        "type": "input_value",
        "name": "numpy_zeros_num_1"
      },
      {
        "type": "input_value",
        "name": "numpy_zeros_num_2"
      },
      {
        "type": "field_checkbox",
        "name": "numpy_zeros_check_dtype",
        "checked": false
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
  // np.full 배열 생성 및 , 채워질 값 
  {
    "type": "numpy_full",
    "message0": "[ 입력값 배열 생성 ] %1  (( 행  %2 , 열  %3 ) 채워질 값 %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "numpy_full_lib_val" 
      },
      {
        "type": "input_value",
        "name": "numpy_full_num_1"
      },
      {
        "type": "input_value", 
        "name": "numpy_full_num_2"
      },
      {
        "type": "input_value",
        "name": "numpy_full_input"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
  // eye 함수 대각선으로 1채우기 
  {
    "type": "numpy_eye",
    "message0": "[ 대각선 1로 배열 생성 ]%1  ( 행,열  %2 , 인덱스 위치  %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "numpy_eye_lib_val"
      },
      {
        "type": "input_value",
        "name": "numpy_eye_num"
      },
      {
        "type": "input_value", 
        "name": "numpy_eye_index"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
  // np.max_min  최대 값,최소 값 찾기 
  {
    "type": "numpy_max_min",
    "message0": "[ 최대,최소 값 찾기 ] %1 %2 %3 ( 변수  %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "numpy_max_min_lib_val"
      },
      {
        "type": "field_dropdown",
        "name": "numpy_max_min_option",
        "options": [
          [
            "max",
            "numpy_max"
          ],
          [
            "min",
            "numpy_min"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "numpy_max_min_val"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
  //np.shape  
  {
    "type": "numpy_shape",
    "message0": "[ 행렬 차원 반환 ] %1 %2 변수  %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "numpy_shape_lib_val"
      },
      {
        "type": "input_value",
        "name": "numpy_shape_num"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
  // reshpae 행렬 차원 변경 
  {
    "type": "numpy_reshape",
    "message0": "[ 넘파이 데이터 구조 변경 ] 변수  %1  (   1차원  %2 2차원  %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "numpy_reshape_lib_val"
      },
      {
        "type": "input_value",
        "name": "numpy_reshape_num1"
      },
      {
        "type": "input_value",
        "name": "numpy_reshape_num2"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
  // random.randn  표준정규 분포에 따른 무작위 숫자 생성 
  {
    "type": "numpy_random_rand",
    "message0": "[ 난수 생성 ] %1 타입   %2  (  행  %3,  열  %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "numpy_random_rand_lib_val"
      },
      {
        "type": "field_dropdown",
        "name": "numpy_random_rand_option",
        "options": [
          [
            "randn",
            "numpy_random_rand_randn"
          ],
          [
            "randint",
            "numpy_random_rand_randint"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "numpy_random_rand_num1"
      },
      {
        "type": "input_value",
        "name": "numpy_random_rand_num2"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
    // 지수 exp
    {
      "type": "numpy_exp",
      "message0": "[ 자연 상수 제곱] %1 ( 변수   %2 )",
      "args0": [ 
        {
          "type": "input_value",
          "name": "numpy_exp_lib_val"
        },
        {
          "type": "input_value",
          "name": "numpy_exp_num"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 125,
      "tooltip": "",
      "helpUrl": ""
    }, 
    //np.append
    {
      "type": "np_append",
      "message0": "[ 배열에 값 추가 ] %1 ( 변수 또는 배열   %2 ,  %3  )",
      "args0": [
        {
          "type": "input_value",
          "name": "np_append_lib_var"
        },
        {
          "type": "input_value",
          "name": "np_append_num1"
        },
        {
          "type": "input_value",
          "name": "np_append_num2"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 125,
      "tooltip": "",
      "helpUrl": ""
    }, 
    // pandas, numpy, tuple  시각화   
   {
    "type": "val_vi",
    "message0": "[ 형변환 테이블 출력 ]   %1 변수  %2 ",
    "args0": [ 
      {
        "type": "field_dropdown",
        "name": "Val_VI_Option",
        "options": [ 
          [ 
            "Pandas",
            "Val_VI_Pandas"
          ],
          [
            "Numpy",
            "Val_VI_Numpy"
          ],
          [
            "Tuple",
            "Val_VI_Tuple"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "Val_VI_Val"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 125,
    "tooltip": "", 
    "helpUrl": "" 
  },
  //matplot1 
  {
    "type": "matplotlib_main",
    "message0": "[ 그래프 크기 설정 ] %1 %2 ( 분할  %3 , %4 크기  %5 , %6 )",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "matplotlib_main_lib_val"
      }, 
      {
        "type": "input_value",
        "name": "matplotlib_main_cols"
      },
      {
        "type": "input_value",
        "name": "matplotlib_main_rows"
      },
      {
        "type": "input_value",
        "name": "matplotlib_main_screen_size_width"
      },
      {
        "type": "input_value",
        "name": "matplotlib_main_screen_size_height"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
  //matplot2 수정
  {
    "type": "matplotlib_pre_graph",
    "message0": "[ 그래프 설정 ]   %1 좌표  [ %2 ][ %3 %4 ] ( X , Y ) 값  %5 그래프 종류  %6 제목  %7 X축  %8 Y축  %9 범례  %10",
    "args0": [
      {
        "type": "input_value",
        "name": "matplotlib_pre_graph_lib_val"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_graph_location1"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_graph_location2"
      },
      {
        "type": "field_input",
        "name": "matplotlib_user_xy",
        "text": "변수명 -> ex) aa,bb" 
      },
      {
        "type": "field_dropdown",
        "name": "matplotlib_graph_select",
        "options": [
          [
            "선_그래프",
            "matplotlib_line"
          ],
          [
            "Scatter_그래프",
            "matplotlib_scatter"
          ],
          [
            "막대_그래프",
            "matplotlib_bar"
          ],
          [
            "에러_바",
            "matplotlib_error_bar"
          ],
          [
            "박스_그래프",
            "matplotlib_box"
          ],
          [
            "히스토그램",
            "matplotlib_histogram"
          ]
        ]
      },
      {
        "type": "field_input",
        "name": "matplotlib_pre_graph_Title",
        "text": ""
      },
      {
        "type": "field_input",
        "name": "matplotlib_pre_graph_Xlable",
        "text": ""
      },
      {
        "type": "field_input",
        "name": "matplotlib_pre_graph_Ylable",
        "text": ""
      },
      {
        "type": "field_input",
        "name": "matplotlib_pre_legend",
        "text": ""
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },  
  //matplot3 
  {
    "type": "matplotlib_graph_end",
    "message0": " [ 그래프 출력 ] %1",
    "args0": [
      {
        "type": "input_value",
        "name": "matplotlib_graph_end_lib_val"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
  
  
  
  ]
  ); 
  Blockly.Blocks['numpy_library'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[Numpy 라이브러리 임포트]");
      this.appendValueInput("lib_var")
          .setCheck(null)      
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(125);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['visualization_library'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[시각화 라이브러리 임포트]");
      this.appendValueInput("lib_var")
          .setCheck(null)      
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(125);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };