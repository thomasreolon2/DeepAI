Blockly.defineBlocksWithJsonArray(
    [
//numpy 라이브러리 임포트
    {
        "type": "numpy_library",
        "message0": "[ 임포트 ] numpy를 np로",
        "inputsInline": true,
        "previousStatement": null, 
        "nextStatement": null,
        "colour": "%{BKY_NUMPY_HUE}",
        "tooltip": "",
        "helpUrl": ""
      },


//CSV 파일로 저장   
{
  "type": "data_to_csv",
  "message0": "[ CSV 파일로 저장 ] 변수  %1 (  %2  )", 
  "args0": [
    {
      "type": "input_value",
      "name": "value_data_to_csv_dataval" 
    },
    {
      "type": "field_input",
      "name": "value_value_data_to_csv_name",
      "text": " 파일 이름 "
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_NUMPY_HUE}",
  "tooltip": "", 
  "helpUrl": ""
},

//.list 데이터 리스트 변환
{
  "type": "data_conversion",
  "message0": "[ 리스트 변환 ] 변수  %1  데이터 형식    %2 )",
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
  "colour": "%{BKY_NUMPY_HUE}", 
  "tooltip": "",
  "helpUrl": ""
}, 
//np.concatenate
{
  "type": "np_concatenate",
  "message0": "[ 배열 연결 ] ((   %1 , %2 ))",
  "args0": [
    {
      "type": "field_input",
      "name": "np_concatenate_var1",
      "text": "값"
    },
    {
      "type": "field_input",
      "name": "np_concatenate_var2",
      "text": "값"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "%{BKY_NUMPY_HUE}",
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
  "colour": "%{BKY_NUMPY_HUE}",
  "tooltip": "",
  "helpUrl": ""
},
 // 배열 np.arry 
 {
  "type": "np_array",
  "message0": "[ 넘파이 배열  ]  %1",
  "args0": [
    {
      "type": "input_value",
      "name": "np_array_val"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "%{BKY_NUMPY_HUE}",
  "tooltip": "",
  "helpUrl": ""
},  
//np.arange 
{
  "type": "np_arrange",
  "message0": "[ 정렬 값 배열  ] %1 , %2 , %3",
  "args0": [
    {
      "type": "field_input",
      "name": "np_arrange_value1",
      "text": "값"
    },
    {
      "type": "field_input",
      "name": "np_arrange_value2",
      "text": "값"
    },
    {
      "type": "field_input",
      "name": "np_arrange_value3",
      "text": "값"
    },
  ],
  "inputsInline": true,
  "output": null,
  "colour": "%{BKY_NUMPY_HUE}",
  "tooltip": "",
  "helpUrl": ""
},
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
  "colour": "%{BKY_NUMPY_HUE}",
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
    "colour": "%{BKY_NUMPY_HUE}",
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
    "colour": "%{BKY_NUMPY_HUE}",
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
    "colour": "%{BKY_NUMPY_HUE}",
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
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },

   
  // numpy 함수 zeros
  {
    "type": "numpy_zeros",
    "message0": "[ 0 배열  ] ( %1 , %2 ) %3",
    "args0": [
      {
        "type": "field_input",
        "name": "numpy_zeros_num_1",
        "text": "행"
      },
      {
        "type": "field_input",
        "name": "numpy_zeros_num_2",
        "text": "열"
      },
      {
        "type": "field_dropdown",
        "name": "numpy_zeros_Option",
        "options": [
          [
            "Float",
            "numpy_zeros_Option_float"
          ],
          [
            "Int",
            "numpy_zeros_Option_int"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "", 
    "helpUrl": ""
  }, 
  // np.full 배열 생성 및 , 채워질 값 
  {
    "type": "numpy_full",
    "message0": "[ 동일 값 생성 ] (( %1 , %2 ) 값 %3 )",
    "args0": [
      {
        "type": "field_input",
        "name": "numpy_full_rows",
        "text": "행"
      },
      {
        "type": "field_input",
        "name": "numpy_full_cols",
        "text": "열"
      },
      {
        "type": "field_input",
        "name": "numpy_full_num",
        "text": "0"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  }, 
  // eye 함수 대각선으로 1채우기 
  {
    "type": "numpy_eye",
    "message0": "[ 대각선 1로 배열  ] ( %1 )",
    "args0": [
      {
        "type": "field_input",
        "name": "numpy_eye_num",
        "text": "크기"
      }
    ], 
    "inputsInline": true,
    "output": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  
  // np.max_min  최대 값,최소 값 찾기 
  {
    "type": "numpy_max_min",
    "message0": "[ 최대,최소 값  ]  %1 %2 ( 변수  %3 )",
    "args0": [
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
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  //np.shape  
  {
    "type": "numpy_shape",
    "message0": "[ 행렬 차원 ] %1 변수  %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "numpy_shape_num"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  // reshpae 행렬 차원 변경 
  {
    "type": "numpy_reshape",
    "message0": "[ 행렬 차원 변경 ] 원본 %1 %2 변경 차원 %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "numpy_reshape_val"
      },
      {
        "type": "field_input",
        "name": "numpy_reshape_struct",
        "text": "ex)4,5,5"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  }, 
  //np.flatten
  {
    "type": "np_flatten",
    "message0": "[ 행렬 1차원 변경 ] 변수 %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "np_flatten_var"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  // random.randn  표준정규 분포에 따른 무작위 숫자 생성 
  {
    "type": "numpy_random_rand",
    "message0": "[ 랜덤 행렬 ] %1 (  %2 ,  %3 )",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "numpy_random_rand_Option",
        "options": [
          [
            "정규분포",
            "numpy_random_randn"
          ],
          [
            "정수",
            "numpy_random_randint"
          ],
          [
            "균일분포",
            "numpy_random_rand"
          ],
          [
            "Sample",
            "numpy_random_sample"
          ],
          [
            "Choice",
            "numpy_random_choice"
          ],
          [
            "Seed",
            "numpy_random_seed"
          ]
        ]
      },
      {
        "type": "field_input",
        "name": "numpy_random_randn_rows",
        "text": ""
      },
      {
        "type": "field_input",
        "name": "numpy_random_randn_cols",
        "text": ""
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
    // 지수 exp
    {
      "type": "numpy_exp",
      "message0": "[ 자연 상수 제곱]  ( 변수   %1 )",
      "args0": [ 
        {
          "type": "input_value",
          "name": "numpy_exp_num"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": "%{BKY_NUMPY_HUE}",
      "tooltip": "",
      "helpUrl": ""
    }, 
    //np.mean
    {
      "type": "np_mean",
      "message0": "[ 평균  ] 변수 %1 %2",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "np_mean_var"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": "%{BKY_NUMPY_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    //np.diff
    {
      "type": "np_diff_",
      "message0": "[ 차분 ]  %1",
      "args0": [
        {
          "type": "field_input",
          "name": "np_diff_var_value",
          "text": "값"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": "%{BKY_NUMPY_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    //np.append etc
    {
      "type": "np_arry_change",
      "message0": "[ 값 변경  ] %1 ( %2 , %3 )",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "np_arry_change_Option",
          "options": [
            [
              "append",
              "np_arry_change_append"
            ],
            [
              "extend",
              "np_arry_change_extend"
            ],
            [
              "insert",
              "np_arry_change_insert"
            ],
            [
              "delete",
              "np_arry_change_delete"
            ]
          ]
        },
        //아래로 수정
        {
          "type": "input_value",
          "name": "np_arry_change_var"
        },
        {
          "type": "input_value",
          "name": "np_arry_change_value"
        },
        //기존 
        // {
        //   "type": "field_input",
        //   "name": "np_arry_change_var",
        //   "text": "원본"
        // },
        // {
        //   "type": "field_input",
        //   "name": "np_arry_change_value",
        //   "text": "값"
        // }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_NUMPY_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    //np.prod
    {
      "type": "np_prod",
      "message0": "[ 요소의 곱 ]  %1",
      "args0": [
        {
          "type": "field_input",
          "name": "np_prod_var",
          "text": "값"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": "%{BKY_NUMPY_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    //np.fft
    {
      "type": "np_fft_fft",
      "message0": "[ 푸리에 변환 ] 값 %1 %2",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "np_fft_fft_var"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": "%{BKY_NUMPY_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    
  Blockly.Blocks['visualization_library'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[ 임포트 ] matplotlib를 plt로 ");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_VISUAL_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  },
    // pandas, numpy, tuple  시각화   
   {
    "type": "val_vi",
    "message0": "[ 테이블 형식 출력 ]   %1 변수  %2 ",
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
    "colour": "%{BKY_VISUAL_HUE}",
    "tooltip": "", 
    "helpUrl": "" 
  },
  //matplot1 
  {
    "type": "matplotlib_main",
    "message0": "[ 그래프 갯수 설정 ]  %1 ( %2 , %3  )",
    "args0": [
      {
        "type": "input_dummy"
      },  
      {
        "type": "input_value",
        "name": "matplotlib_main_cols"
      },
      {
        "type": "input_value",
        "name": "matplotlib_main_rows"
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_VISUAL_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  //matplot2 수정
  {
    "type": "matplotlib_pre_graph",
    "message0": "[ 그래프 출력 설정 ]    좌표  [ %1 ][ %2 %3 ] ( X , Y ) 값  %4 그래프 종류  %5 제목  %6 X축  %7 Y축  %8 범례  %9",
    "args0": [
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
    "colour": "%{BKY_VISUAL_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },  
  //matplot3 
  {
    "type": "matplotlib_graph_end",
    "message0": " [ 그래프 출력 ] ",
    "args0": [
      
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_VISUAL_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },

  //결과 출력
  {
    "type": "print_output_var",
    "message0": "[  결과 출력 ]  %1 %2",
    "args0": [
      {
        "type": "input_value",
        "name": "print_output_var1"
      },
      {
        "type": "input_value",
        "name": "print_output_var2"
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
  