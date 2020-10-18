Blockly.defineBlocksWithJsonArray(
    [

//클래스 선언
{
  "type": "python_class",
  "message0": "[ 클래스  선언 ] %1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "Python_Class_statement_name",
      "text": "클래스 명"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "Python_Class_statement"
    }
  ], 
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_CLASS_HUE}",
  "tooltip": "",
  "helpUrl": ""
}, 
      
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
  "message0": "[ 정렬 값 배열  ] %1 ",
  "args0": [
    {
      "type": "field_input",
      "name": "np_arrange_value1",
      "text": "값"
    },
   
  ],
  "inputsInline": true,
  "output": null,
  "colour": "%{BKY_NUMPY_HUE}",
  "tooltip": "",
  "helpUrl": ""
},
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
            "균일 분포",
            "numpy_random_rand"
          ],
          [
            "정수",
            "numpy_random_randint"
          ],
          [
            "가우시안 분포",
            "numpy_random_randn"
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
      "message0": "[ 값 변경 ]  %1 %2 변수 %3 값 %4",
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
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "np_arry_change_var"
        },
        {
          "type": "input_value",
          "name": "np_arry_change_value"
        }
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
    "message0": "[ 그래프 개수 설정 ]  %1 ( %2 , %3  )",
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
    "message0": "[ 그래프 출력 설정 ] 좌표 [ %1 ][ %2 %3 ] ( X , Y ) 값  %4 그래프 종류  %5 제목  %6 X축  %7 Y축  %8 범례  %9 %10 색 %11",
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
        "text": ""
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
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_color"
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
    "message0": " [ 그래프 저장 ] ",
    "args0": [
      
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_VISUAL_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },

  //plt.plot()
  {
  "type": "matplotlib_plt_plot",
  "message0": "[ plt.plot ] %1",
  "args0": [
    {
      "type": "input_value",
      "name": "matplotlib_plt_plot_val"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 125,
  "tooltip": "",
  "helpUrl": ""
},

  //plt.show()
  {
    "type": "matplotlib_plt_show",
    "message0": "[ plt.show ]",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },

  

  //결과 출력
  {
    "type": "print_output_var",
    "message0": "[ %1 결과 출력 ]  %2 %3",
    
    "args0": [{"type": "field_image","src": "/img/Collection/C17-logo.png","width": 25,"height": 23,"alt": "*","flipRtl": false},﻿
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
    "colour": "%{BKY_COLLECTION_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  
  
  
  ]
  ); 

  //""없는 문자
  Blockly.Blocks['char_a_none'] = {
    init: function() { 
      this.appendDummyInput()
          .appendField("[ 문자 ]")
          .appendField(new Blockly.FieldTextInput(""), "char_A_none_val");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_TEXTS_HUE}");
   this.setTooltip(""); 
   this.setHelpUrl("");
    }
  };


  //np.abs
  Blockly.Blocks['nump_abs'] = {
    init: function() {
      this.appendValueInput("nump_abs_val")
          .setCheck(null)
          .appendField("[ 절대 값 ]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(125);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  //객체  
  Blockly.Blocks['class_refer'] = {
    init: function() {
      this.appendValueInput("class_refer_className")
          .setCheck(null)
          .appendField("[ 객체 & 함수 ]");
      this.appendDummyInput()
          .appendField(".")
          .appendField(new Blockly.FieldTextInput(""), "class_refer_val");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_CLASS_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  //객체 위아래
  Blockly.Blocks['class_instance'] = {
    init: function() {
      this.appendValueInput("class_instance_val")
          .setCheck(null)
          .appendField("[ 객체 & 함수 ]");
      this.appendDummyInput()
          .appendField(".")
          .appendField(new Blockly.FieldTextInput(""), "class_instance_value")
          .appendField("=");
      this.appendValueInput("class_instance_input")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(125);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  //사이킷런 데이터셋 임포트
  Blockly.Blocks['sklearn_datasets_noval'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[ 데이터셋 무작위 생성 ] ")
          .appendField(new Blockly.FieldDropdown([["Blobs","sklearn_datasets_noval_Blobs"], ["Moons","sklearn_datasets_noval_Moons"], ["Circles","sklearn_datasets_noval_Circles"]]), "sklearn_datasets_noval_Option");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  //make blobs
  Blockly.Blocks['make_blobs'] = {
    init: function() {
      this.appendValueInput("Make_Blobs_X")
          .setCheck(null)
          .appendField("[Make Blobs] X_data");
      this.appendValueInput("Make_Blobs_Y")
          .setCheck(null)
          .appendField("Y_data");
      this.appendDummyInput()
          .appendField("샘플수")
          .appendField(new Blockly.FieldTextInput("100"), "Make_Blobs_sample")
          .appendField("특성 개수")
          .appendField(new Blockly.FieldTextInput("2"), "Make_Blobs_feature")
          .appendField("Seed")
          .appendField(new Blockly.FieldTextInput("0"), "Make_Blobs_randomstate");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    } 
  };

  //make moons
  Blockly.Blocks['make_moons'] = {
    init: function() {
      this.appendValueInput("make_moons_X")
          .setCheck(null)
          .appendField("[make_moons] X_data");
      this.appendValueInput("make_moons_Y")
          .setCheck(null)
          .appendField("Y_data");
      this.appendDummyInput()
          .appendField("샘플수")
          .appendField(new Blockly.FieldTextInput("100"), "make_moons_sample")
          .appendField("Seed")
          .appendField(new Blockly.FieldTextInput("0"), "make_moons_randomstate");
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
  init: function() {
    this.appendValueInput("Isolation_Forest_val")
        .setCheck(null)
        .appendField("[Isolation Forest]");
    this.appendDummyInput()
        .appendField("추정자 최대수")
        .appendField(new Blockly.FieldTextInput("100"), "Isolation_Forest_estimators")
        .appendField("이상치 비율")
        .appendField(new Blockly.FieldTextInput("0.5"), "Isolation_Forest_connection")
        .appendField("Seed")
        .appendField(new Blockly.FieldTextInput("0"), "Isolation_Forest_randomstate");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//import knn
Blockly.Blocks['import_knn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 임포트 ]")
        .appendField(new Blockly.FieldDropdown([
          ["KMeans","Import_KNN_KMeans"], 
          ["DBSCAN","Import_KNN_DBSCAN"]]), "Import_KNN_Option");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
}; 

Blockly.Blocks['k_means_inertia'] = {
  init: function() {
    this.appendValueInput("model")
        .setCheck(null)
        .appendField("[K-Means 응집도 추출] 모델 ");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['k_means_centroid'] = {
  init: function() {
    this.appendValueInput("model")
        .setCheck(null)
        .appendField("[K-Means Centroid 추출] 모델 ");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//dbscan
Blockly.Blocks['dbscan'] = {
  init: function() {
    this.appendValueInput("DBSCAN_val")
        .setCheck(null)
        .appendField("[ DBSCAN ]");
    this.appendDummyInput()
        .appendField("EPS ")
        .appendField(new Blockly.FieldTextInput("0.5"), "DBSCAN_EPS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//metrics_fit_predict
Blockly.Blocks['metrics_fit_predict'] = {
  init: function() {
    this.appendValueInput("metrics_fit_predict_val")
        .setCheck(null)
        .appendField("[ DBSCAN 학습 및 예측 ] 모델 ");
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

//classification_report
Blockly.Blocks['classification_report'] = {
  init: function() {
    this.appendValueInput("classification_report_Y_true")
        .setCheck(null)
        .appendField("[ Classification Report ]")
        .appendField("Y_true");
    this.appendValueInput("classification_report_y_pred")
        .setCheck(null)
        .appendField("Y_pred ");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



//클래스 함수 
Blockly.Blocks['class_func'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 함수 ]")
        .appendField(new Blockly.FieldTextInput("함수 명"), "class_func_name");
    this.appendValueInput("class_func_val")
        .setCheck(null)
        .appendField("( 매개 변수");
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("class_func_state")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(125);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//클래스 함수 return
Blockly.Blocks['class_func_return'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 함수 ]")
        .appendField(new Blockly.FieldTextInput("함수 명"), "class_func_return_className");
    this.appendValueInput("class_func_return_param") 
        .setCheck(null) 
        .appendField("( 매개 변수"); 
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("class_func_return")
        .setCheck(null);
    this.appendValueInput("class_func_return_val")
        .setCheck(null)
        .appendField("다음을 돌려줌");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(125);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//함수 호출
Blockly.Blocks['function__parameter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 함수 호출 ]")
        .appendField(new Blockly.FieldTextInput(""), "function__parameter_name")
        .appendField(".");
    this.appendValueInput("function__parameter_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(125);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//클래스 =
Blockly.Blocks['class_equ'] = {
  init: function() {
    this.appendValueInput("class_equ_val1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("=")
        .appendField(new Blockly.FieldTextInput(""), "class_equ_val2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(125);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//객체 함수 
Blockly.Blocks['class_instance_function'] = {
  init: function() {
    this.appendValueInput("class_instanceVal")
        .setCheck(null)
        .appendField("[ 객체 함수 ]");
    this.appendValueInput("class_instance_functions")
        .setCheck(null)
        .appendField(".")
        .appendField(new Blockly.FieldTextInput(""), "class_instance_argument")
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(125);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
 

//클래스 매개변수 
Blockly.Blocks['class_func_param'] = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {Blockly.Block}
     */
    init: function () { 
      this.setStyle("list_blocks");
      this.setHelpUrl(Blockly.Msg['LISTS_CREATE_WITH_HELPURL']);
      this.itemCount_ = 1;
      this.updateShape_(); 
      this.setColour(125); 
      this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
      this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_TOOLTIP']);
      this.setOutput(true);
      this.setInputsInline(true);
    }, 
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom: function () {
      var container = Blockly.utils.xml.createElement('mutation');
      container.setAttribute('items', this.itemCount_);
      return container;
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation: function (xmlElement) {
      this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
      this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this {Blockly.Block}
     */
    decompose: function (workspace) {
      var containerBlock = workspace.newBlock('lists_create_with_container');
      containerBlock.initSvg();
      var connection = containerBlock.getInput('STACK').connection;
      for (var i = 0; i < this.itemCount_; i++) {
        var itemBlock = workspace.newBlock('lists_create_with_item');
        itemBlock.initSvg();
        connection.connect(itemBlock.previousConnection);//previousConnection);
        connection = itemBlock.nextConnection;
      }
      return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this {Blockly.Block}
     */
    compose: function (containerBlock) {
      var itemBlock = containerBlock.getInputTargetBlock('STACK');
      // Count number of inputs.
      var connections = [];
      while (itemBlock) {
        connections.push(itemBlock.valueConnection_);
        itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
      }
      // Disconnect any children that don't belong.
      for (var i = 0; i < this.itemCount_; i++) {
        var connection = this.getInput('ADD' + i).connection.targetConnection;
        if (connection && connections.indexOf(connection) == -1) {
          connection.disconnect();
        }
      }
      this.itemCount_ = connections.length;
      this.updateShape_();
      // Reconnect any child blocks.
      for (var i = 0; i < this.itemCount_; i++) {
        Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
      }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this {Blockly.Block}
     */
    saveConnections: function (containerBlock) {
      var itemBlock = containerBlock.getInputTargetBlock('STACK');
      var i = 0;
      while (itemBlock) {
        var input = this.getInput('ADD' + i);
        itemBlock.valueConnection_ = input && input.connection.targetConnection;
        i++;
        itemBlock = itemBlock.nextConnection && 
          itemBlock.nextConnection.targetBlock();
      }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this {Blockly.Block}
     */
    updateShape_: function () {
      if (this.itemCount_ && this.getInput('EMPTY')) {
        this.removeInput('EMPTY');
      } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
        this.appendDummyInput('EMPTY')
          .appendField(Blockly.Msg['LISTS_CREATE_EMPTY_TITLE']);
      }
      // Add new inputs.
      for (var i = 0; i < this.itemCount_; i++) {
        if (!this.getInput('ADD' + i)) {
          var input = this.appendValueInput('ADD' + i)
            .setAlign(Blockly.ALIGN_RIGHT);
          if (i == 0) {
            // input.appendField("array"); 
          }
        }
      }
      // Remove deleted inputs.
      while (this.getInput('ADD' + i)) {
        this.removeInput('ADD' + i);
        i++;
      }
    }
  };






//클래스 함수 statement 형식  
// Blockly.Blocks['class_func'] = {
//   /**
//    * Block for creating a list with any number of elements of any type.
//    * @this {Blockly.Block}
//    */
//   init: function () { 
//     this.setStyle("list_blocks");
      // this.appendDummyInput()
      //   .appendField("[ 클래스 함수 ]")
      //   .appendField(new Blockly.FieldTextInput("함수 명"), "class_func_name");
      // this.appendValueInput("class_func_val")
      //   .setCheck(null)
      //   .appendField("( 매개 변수");
      // this.appendDummyInput()
      //   .appendField(")");
      // this.appendStatementInput("class_func_state")
      //   .setCheck(null);
//     this.setHelpUrl(Blockly.Msg['LISTS_CREATE_WITH_HELPURL']);
//     this.itemCount_ = 1;
//     this.updateShape_(); 
//     this.setColour(125); 
//     this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
//     this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_TOOLTIP']);
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//   }, 
//   /**
//    * Create XML to represent list inputs.
//    * @return {!Element} XML storage element.
//    * @this {Blockly.Block}
//    */
//   mutationToDom: function () {
//     var container = Blockly.utils.xml.createElement('mutation');
//     container.setAttribute('items', this.itemCount_);
//     return container;
//   },
//   /**
//    * Parse XML to restore the list inputs.
//    * @param {!Element} xmlElement XML storage element.
//    * @this {Blockly.Block}
//    */
//   domToMutation: function (xmlElement) {
//     this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
//     this.updateShape_();
//   },
//   /**
//    * Populate the mutator's dialog with this block's components.
//    * @param {!Blockly.Workspace} workspace Mutator's workspace.
//    * @return {!Blockly.Block} Root block in mutator.
//    * @this {Blockly.Block}
//    */
//   decompose: function (workspace) {
//     var containerBlock = workspace.newBlock('lists_create_with_container');
//     containerBlock.initSvg();
//     var connection = containerBlock.getInput('STACK').connection;
//     for (var i = 0; i < this.itemCount_; i++) {
//       var itemBlock = workspace.newBlock('lists_create_with_item');
//       itemBlock.initSvg();
//       connection.connect(itemBlock.previousConnection);//previousConnection);
//       connection = itemBlock.nextConnection;
//     }
//     return containerBlock;
//   },
//   /**
//    * Reconfigure this block based on the mutator dialog's components.
//    * @param {!Blockly.Block} containerBlock Root block in mutator.
//    * @this {Blockly.Block}
//    */
//   compose: function (containerBlock) {
//     var itemBlock = containerBlock.getInputTargetBlock('STACK');
//     // Count number of inputs.
//     var connections = [];
//     while (itemBlock) {
//       connections.push(itemBlock.valueConnection_);
//       itemBlock = itemBlock.nextConnection &&
//         itemBlock.nextConnection.targetBlock();
//     }
//     // Disconnect any children that don't belong.
//     for (var i = 0; i < this.itemCount_; i++) {
//       var connection = this.getInput('ADD' + i).connection.targetConnection;
//       if (connection && connections.indexOf(connection) == -1) {
//         connection.disconnect();
//       }
//     }
//     this.itemCount_ = connections.length;
//     this.updateShape_();
//     // Reconnect any child blocks.
//     for (var i = 0; i < this.itemCount_; i++) {
//       Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
//     }
//   },
//   /**
//    * Store pointers to any connected child blocks.
//    * @param {!Blockly.Block} containerBlock Root block in mutator.
//    * @this {Blockly.Block}
//    */
//   saveConnections: function (containerBlock) {
//     var itemBlock = containerBlock.getInputTargetBlock('STACK');
//     var i = 0;
//     while (itemBlock) {
//       var input = this.getInput('ADD' + i);
//       itemBlock.valueConnection_ = input && input.connection.targetConnection;
//       i++;
//       itemBlock = itemBlock.nextConnection && 
//         itemBlock.nextConnection.targetBlock();
//     }
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
//         var input = this.appendValueInput('ADD' + i).appendField("매개 변수")
//           .setAlign(Blockly.ALIGN_RIGHT);
//         if (i == 0) {
//           // input.appendField("array"); 
//         }
//       }
//     }
//     // Remove deleted inputs.
//     while (this.getInput('ADD' + i)) {
//       this.removeInput('ADD' + i);
//       i++;
//     }
//   }
// };










// //
// Blockly.Python.procedures = {};
// //return O
// Blockly.Python.procedures_defreturn = function (a) {
//   for (
//     var b = [], 
//         c,
//         d = a.workspace,
//         e = Blockly.Variables.allUsedVarModels(d) || [],
//         f = 0;
//         (c = e[f]);
//         f++
//   )
//     (c = c.name),
//       -1 == a.arguments_.indexOf(c) && 
//         b.push(
//           Blockly.Python.variableDB_.getName(c, Blockly.VARIABLE_CATEGORY_NAME)
//         );
//   d = Blockly.Variables.allDeveloperVariables(d);
//   for (f = 0; f < d.length; f++)
//     b.push(
//       Blockly.Python.variableDB_.getName(
//         d[f],
//         Blockly.Names.DEVELOPER_VARIABLE_TYPE
//       )
//     );
//   b = b.length ? Blockly.Python.INDENT + "global " + b.join(", ") + "\n" : "";
//   d = Blockly.Python.variableDB_.getName(
//     a.getFieldValue("NAME"),
//     Blockly.PROCEDURE_CATEGORY_NAME
//   );
//   e = "";
//   Blockly.Python.STATEMENT_PREFIX &&
//     (e += Blockly.Python.injectId(Blockly.Python.STATEMENT_PREFIX, a));
//   Blockly.Python.STATEMENT_SUFFIX &&
//     (e += Blockly.Python.injectId(Blockly.Python.STATEMENT_SUFFIX, a));
//   e && (e = Blockly.Python.prefixLines(e, Blockly.Python.INDENT));
//   c = "";
//   Blockly.Python.INFINITE_LOOP_TRAP &&
//     (c = Blockly.Python.prefixLines( 
//       Blockly.Python.injectId(Blockly.Python.INFINITE_LOOP_TRAP, a),
//       Blockly.Python.INDENT
//     )); 
//   var h = Blockly.Python.statementToCode(a, "STACK"), 
//     g =
//       Blockly.Python.valueToCode(a, "RETURN", Blockly.Python.ORDER_NONE) || "",
//     k = "";
//   h && g && (k = e);
//   g
//     ? (g = Blockly.Python.INDENT + "return " + g + "\n") 
//     : h || (h = Blockly.Python.PASS);
//   var l = [];
//   for (f = 0; f < a.arguments_.length; f++) 
//     l[f] = Blockly.Python.variableDB_.getName(  
//       a.arguments_[f], 
//       Blockly.VARIABLE_CATEGORY_NAME   
//     );
//   b = "def " + d + "(" + l.join(", ") + "):\n" + b + e + c + h + k + g;
//   b = Blockly.Python.scrub_(a, b);
//   //Blockly.Python.definitions_["%" + d] = b; 
//   return b; 
// };







// //클래스 선언중
// Blockly.Blocks.procedures = {};
// Blockly.Blocks.procedures_defnoreturn = {
//   init: function () {
//     var a = new Blockly.FieldTextInput("", Blockly.Procedures.rename);
//     a.setSpellcheck(!1);
//     this.appendDummyInput()
//       .appendField(new Blockly.FieldImage("/img/Function/F1-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
//       .appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE)
//       .appendField(a, "NAME")
//       .appendField("", "PARAMS");
//     this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
//     (this.workspace.options.comments ||
//       (this.workspace.options.parentWorkspace &&
//         this.workspace.options.parentWorkspace.options.comments)) &&
//       Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT &&
//       this.setCommentText(Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT);
//     this.setStyle("procedure_blocks");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
//     this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL);
//     this.arguments_ = [];
//     this.argumentVarModels_ = [];
//     this.setStatements_(!0);
//     this.statementConnection_ = null;
//   },
//   setStatements_: function (a) {
//     this.hasStatements_ !== a &&
//       (a
//         ? (this.appendStatementInput("STACK").appendField(
//             Blockly.Msg.PROCEDURES_DEFNORETURN_DO
//           ),
//           this.getInput("RETURN") && this.moveInputBefore("STACK", "RETURN"))
//         : this.removeInput("STACK", !0),
//       (this.hasStatements_ = a));
//   },
//   updateParams_: function () {
//     var a = "";
//     this.arguments_.length &&
//       (a =
//         Blockly.Msg.PROCEDURES_BEFORE_PARAMS +
//         " " +
//         this.arguments_.join(", "));
//     Blockly.Events.disable();
//     try {
//       this.setFieldValue(a, "PARAMS");
//     } finally {
//       Blockly.Events.enable();
//     }
//   },
//   mutationToDom: function (a) {
//     var b = Blockly.utils.xml.createElement("mutation");
//     a && b.setAttribute("name", this.getFieldValue("NAME"));
//     for (var c = 0; c < this.argumentVarModels_.length; c++) {
//       var d = Blockly.utils.xml.createElement("arg"),
//         e = this.argumentVarModels_[c];
//       d.setAttribute("name", e.name);
//       d.setAttribute("varid", e.getId());
//       a && this.paramIds_ && d.setAttribute("paramId", this.paramIds_[c]);
//       b.appendChild(d);
//     }
//     this.hasStatements_ || b.setAttribute("statements", "false");
//     return b;
//   },
//   domToMutation: function (a) {
//     this.arguments_ = [];
//     this.argumentVarModels_ = [];
//     for (var b = 0, c; (c = a.childNodes[b]); b++)
//       if ("arg" == c.nodeName.toLowerCase()) {
//         var d = c.getAttribute("name");
//         c = c.getAttribute("varid") || c.getAttribute("varId");
//         this.arguments_.push(d);
//         c = Blockly.Variables.getOrCreateVariablePackage(
//           this.workspace,
//           c,
//           d,
//           ""
//         );
//         null != c
//           ? this.argumentVarModels_.push(c)
//           : console.log(
//               "Failed to create a variable with name " + d + ", ignoring."
//             );
//       }
//     this.updateParams_();
//     Blockly.Procedures.mutateCallers(this);
//     this.setStatements_("false" !== a.getAttribute("statements"));
//   },
//   decompose: function (a) {
//     var b = Blockly.utils.xml.createElement("block");
//     b.setAttribute("type", "procedures_mutatorcontainer");
//     var c = Blockly.utils.xml.createElement("statement");
//     c.setAttribute("name", "STACK");
//     b.appendChild(c);
//     for (var d = 0; d < this.arguments_.length; d++) {
//       var e = Blockly.utils.xml.createElement("block");
//       e.setAttribute("type", "procedures_mutatorarg");
//       var f = Blockly.utils.xml.createElement("field");
//       f.setAttribute("name", "NAME");
//       var g = Blockly.utils.xml.createTextNode(this.arguments_[d]);
//       f.appendChild(g);
//       e.appendChild(f);
//       f = Blockly.utils.xml.createElement("next");
//       e.appendChild(f);
//       c.appendChild(e);
//       c = f;
//     }
//     a = Blockly.Xml.domToBlock(b, a);
//     "procedures_defreturn" == this.type
//       ? a.setFieldValue(this.hasStatements_, "STATEMENTS")
//       : a.removeInput("STATEMENT_INPUT");
//     Blockly.Procedures.mutateCallers(this);
//     return a;
//   },
//   compose: function (a) {
//     this.arguments_ = [];
//     this.paramIds_ = [];
//     this.argumentVarModels_ = [];
//     for (var b = a.getInputTargetBlock("STACK"); b; ) {
//       var c = b.getFieldValue("NAME");
//       this.arguments_.push(c);
//       c = this.workspace.getVariable(c, "");
//       this.argumentVarModels_.push(c);
//       this.paramIds_.push(b.id);
//       b = b.nextConnection && b.nextConnection.targetBlock();
//     }
//     this.updateParams_();
//     Blockly.Procedures.mutateCallers(this);
//     a = a.getFieldValue("STATEMENTS");
//     if (null !== a && ((a = "TRUE" == a), this.hasStatements_ != a))
//       if (a)
//         this.setStatements_(!0),
//           Blockly.Mutator.reconnect(this.statementConnection_, this, "STACK"),
//           (this.statementConnection_ = null);
//       else {
//         a = this.getInput("STACK").connection;
//         if ((this.statementConnection_ = a.targetConnection))
//           (a = a.targetBlock()), a.unplug(), a.bumpNeighbours();
//         this.setStatements_(!1);
//       }
//   },
//   getProcedureDef: function () {
//     return [this.getFieldValue("NAME"), this.arguments_, !1];
//   },
//   getVars: function () {
//     return this.arguments_;
//   },
//   getVarModels: function () {
//     return this.argumentVarModels_;
//   },
//   renameVarById: function (a, b) {
//     var c = this.workspace.getVariableById(a);
//     if ("" == c.type) {
//       c = c.name;
//       b = this.workspace.getVariableById(b);
//       for (var d = !1, e = 0; e < this.argumentVarModels_.length; e++)
//         this.argumentVarModels_[e].getId() == a &&
//           ((this.arguments_[e] = b.name),
//           (this.argumentVarModels_[e] = b),
//           (d = !0));
//       d &&
//         (this.displayRenamedVar_(c, b.name),
//         Blockly.Procedures.mutateCallers(this));
//     }
//   },
//   updateVarName: function (a) {
//     for (var b = a.name, c = !1, d = 0; d < this.argumentVarModels_.length; d++)
//       if (this.argumentVarModels_[d].getId() == a.getId()) {
//         var e = this.arguments_[d];
//         this.arguments_[d] = b;
//         c = !0;
//       }
//     c &&
//       (this.displayRenamedVar_(e, b), Blockly.Procedures.mutateCallers(this));
//   },
//   displayRenamedVar_: function (a, b) {
//     this.updateParams_();
//     if (this.mutator && this.mutator.isVisible())
//       for (
//         var c = this.mutator.workspace_.getAllBlocks(!1), d = 0, e;
//         (e = c[d]);
//         d++
//       )
//         "procedures_mutatorarg" == e.type &&
//           Blockly.Names.equals(a, e.getFieldValue("NAME")) &&
//           e.setFieldValue(b, "NAME");
//   },
//   customContextMenu: function (a) {
//     if (!this.isInFlyout) {
//       var b = { enabled: !0 },
//         c = this.getFieldValue("NAME");
//       b.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace("%1", c);
//       var d = Blockly.utils.xml.createElement("mutation");
//       d.setAttribute("name", c);
//       for (c = 0; c < this.arguments_.length; c++) {
//         var e = Blockly.utils.xml.createElement("arg");
//         e.setAttribute("name", this.arguments_[c]);
//         d.appendChild(e);
//       }
//       c = Blockly.utils.xml.createElement("block");
//       c.setAttribute("type", this.callType_);
//       c.appendChild(d);
//       b.callback = Blockly.ContextMenu.callbackFactory(this, c);
//       a.push(b);
//       if (!this.isCollapsed())
//         for (c = 0; c < this.argumentVarModels_.length; c++)
//           (b = { enabled: !0 }),
//             (d = this.argumentVarModels_[c]),
//             (b.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace(
//               "%1",
//               d.name
//             )),
//             (d = Blockly.Variables.generateVariableFieldDom(d)),
//             (e = Blockly.utils.xml.createElement("block")),
//             e.setAttribute("type", "variables_get"),
//             e.appendChild(d),
//             (b.callback = Blockly.ContextMenu.callbackFactory(this, e)),
//             a.push(b);
//     }
//   },
//   callType_: "procedures_callnoreturn",
// };
// Blockly.Blocks.procedures_defreturn = {
//   init: function () {
//     var a = new Blockly.FieldTextInput("", Blockly.Procedures.rename);
//     a.setSpellcheck(!1);
//     this.appendDummyInput()
//       .appendField(new Blockly.FieldImage("/img/Function/F2-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
//       .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE)
//       .appendField(a, "NAME")
//       .appendField("", "PARAMS");
//     this.appendValueInput("RETURN")
//       .setAlign(Blockly.ALIGN_RIGHT)
//       .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
//     this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
//     (this.workspace.options.comments ||
//       (this.workspace.options.parentWorkspace &&
//         this.workspace.options.parentWorkspace.options.comments)) &&
//       Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT &&
//       this.setCommentText(Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT);
//     this.setStyle("procedure_blocks");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
//     this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
//     this.arguments_ = [];
//     this.argumentVarModels_ = [];
//     this.setStatements_(!0);
//     this.statementConnection_ = null;
//   },
//   setStatements_: Blockly.Blocks.procedures_defnoreturn.setStatements_,
//   updateParams_: Blockly.Blocks.procedures_defnoreturn.updateParams_,
//   mutationToDom: Blockly.Blocks.procedures_defnoreturn.mutationToDom,
//   domToMutation: Blockly.Blocks.procedures_defnoreturn.domToMutation,
//   decompose: Blockly.Blocks.procedures_defnoreturn.decompose,
//   compose: Blockly.Blocks.procedures_defnoreturn.compose,
//   getProcedureDef: function () {
//     return [this.getFieldValue("NAME"), this.arguments_, !0];
//   },
//   getVars: Blockly.Blocks.procedures_defnoreturn.getVars,
//   getVarModels: Blockly.Blocks.procedures_defnoreturn.getVarModels,
//   renameVarById: Blockly.Blocks.procedures_defnoreturn.renameVarById,
//   updateVarName: Blockly.Blocks.procedures_defnoreturn.updateVarName,
//   displayRenamedVar_: Blockly.Blocks.procedures_defnoreturn.displayRenamedVar_,
//   customContextMenu: Blockly.Blocks.procedures_defnoreturn.customContextMenu,
//   callType_: "procedures_callreturn",
// };
// Blockly.Blocks.procedures_mutatorcontainer = {
//   init: function () {
//     this.appendDummyInput().appendField(
//       Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE
//     );
//     this.appendStatementInput("STACK");
//     this.appendDummyInput("STATEMENT_INPUT")
//       .appendField(Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS)
//       .appendField(new Blockly.FieldCheckbox("TRUE"), "STATEMENTS");
//     this.setStyle("procedure_blocks");
//     this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
//     this.contextMenu = !1;
//   }, 
// };
// Blockly.Blocks.procedures_mutatorarg = {
//   init: function () {
//     var a = new Blockly.FieldTextInput(
//       Blockly.Procedures.DEFAULT_ARG,
//       this.validator_
//     );
//     a.oldShowEditorFn_ = a.showEditor_;
//     a.showEditor_ = function () {
//       this.createdVariables_ = [];
//       this.oldShowEditorFn_();
//     };
//     this.appendDummyInput()
//       .appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE)
//       .appendField(a, "NAME");
//     this.setPreviousStatement(!0);
//     this.setNextStatement(!0);
//     this.setStyle("procedure_blocks");
//     this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
//     this.contextMenu = !1;
//     a.onFinishEditing_ = this.deleteIntermediateVars_;
//     a.createdVariables_ = [];
//     a.onFinishEditing_("x");
//   },
//   validator_: function (a) {
//     var b = this.getSourceBlock(),
//       c = Blockly.Mutator.findParentWs(b.workspace);
//     a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
//     if (!a) return null;
//     for (
//       var d = (b.workspace.targetWorkspace || b.workspace).getAllBlocks(!1),
//         e = a.toLowerCase(),
//         f = 0;
//       f < d.length;
//       f++
//     )
//       if (d[f].id != this.getSourceBlock().id) {
//         var g = d[f].getFieldValue("NAME");
//         if (g && g.toLowerCase() == e) return null;
//       }
//     if (b.isInFlyout) return a;
//     (b = c.getVariable(a, "")) &&
//       b.name != a &&
//       c.renameVariableById(b.getId(), a);
//     b ||
//       ((b = c.createVariable(a, "")) &&
//         this.createdVariables_ &&
//         this.createdVariables_.push(b));
//     return a;
//   },
//   deleteIntermediateVars_: function (a) {
//     var b = Blockly.Mutator.findParentWs(this.getSourceBlock().workspace);
//     if (b)
//       for (var c = 0; c < this.createdVariables_.length; c++) {
//         var d = this.createdVariables_[c];
//         d.name != a && b.deleteVariableById(d.getId());
//       }
//   },
// };
// Blockly.Blocks.procedures_callnoreturn = {
//   init: function () {
//     this.appendDummyInput("TOPROW").appendField(this.id, "NAME");
//     this.setPreviousStatement(!0);
//     this.setNextStatement(!0); 
//     this.setStyle("procedure_blocks");
//     this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL);
//     this.arguments_ = [];
//     this.argumentVarModels_ = [];
//     this.quarkConnections_ = {};
//     this.quarkIds_ = null;
//     this.previousEnabledState_ = !0;
//   },
//   getProcedureCall: function () {
//     return this.getFieldValue("NAME");
//   },
//   renameProcedure: function (a, b) {
//     Blockly.Names.equals(a, this.getProcedureCall()) &&
//       (this.setFieldValue(b, "NAME"),
//       this.setTooltip(
//         (this.outputConnection
//           ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP
//           : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP
//         ).replace("%1", b)
//       ));
//   },
//   setProcedureParameters_: function (a, b) {
//     var c = Blockly.Procedures.getDefinition(
//         this.getProcedureCall(),
//         this.workspace
//       ),
//       d = c && c.mutator && c.mutator.isVisible();
//     d || ((this.quarkConnections_ = {}), (this.quarkIds_ = null));
//     if (b)
//       if (a.join("\n") == this.arguments_.join("\n")) this.quarkIds_ = b;
//       else {
//         if (b.length != a.length)
//           throw RangeError("paramNames and paramIds must be the same length.");
//         this.setCollapsed(!1);
//         this.quarkIds_ ||
//           ((this.quarkConnections_ = {}), (this.quarkIds_ = []));
//         c = this.rendered;
//         this.rendered = !1;
//         for (var e = 0; e < this.arguments_.length; e++) {
//           var f = this.getInput("ARG" + e);
//           f &&
//             ((f = f.connection.targetConnection),
//             (this.quarkConnections_[this.quarkIds_[e]] = f),
//             d &&
//               f &&
//               -1 == b.indexOf(this.quarkIds_[e]) &&
//               (f.disconnect(), f.getSourceBlock().bumpNeighbours()));
//         }
//         this.arguments_ = [].concat(a);
//         this.argumentVarModels_ = [];
//         for (e = 0; e < this.arguments_.length; e++)
//           (a = Blockly.Variables.getOrCreateVariablePackage(
//             this.workspace,
//             null,
//             this.arguments_[e],
//             ""
//           )),
//             this.argumentVarModels_.push(a);
//         this.updateShape_();
//         if ((this.quarkIds_ = b))
//           for (e = 0; e < this.arguments_.length; e++)
//             (b = this.quarkIds_[e]),
//               b in this.quarkConnections_ &&
//                 ((f = this.quarkConnections_[b]),
//                 Blockly.Mutator.reconnect(f, this, "ARG" + e) ||
//                   delete this.quarkConnections_[b]);
//         (this.rendered = c) && this.render();
//       }
//   },
//   updateShape_: function () {
//     for (var a = 0; a < this.arguments_.length; a++) {
//       var b = this.getField("ARGNAME" + a);
//       if (b) {
//         Blockly.Events.disable();
//         try {
//           b.setValue(this.arguments_[a]);
//         } finally {
//           Blockly.Events.enable();
//         }
//       } else
//         (b = new Blockly.FieldLabel(this.arguments_[a])),
//           this.appendValueInput("ARG" + a)
//             .setAlign(Blockly.ALIGN_RIGHT)
//             .appendField(b, "ARGNAME" + a)
//             .init();
//     }
//     for (; this.getInput("ARG" + a); ) this.removeInput("ARG" + a), a++;
//     if ((a = this.getInput("TOPROW")))
//       this.arguments_.length
//         ? this.getField("WITH") ||
//           (a.appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"),
//           a.init())
//         : this.getField("WITH") && a.removeField("WITH");
//   },
//   mutationToDom: function () {
//     var a = Blockly.utils.xml.createElement("mutation");
//     a.setAttribute("name", this.getProcedureCall());
//     for (var b = 0; b < this.arguments_.length; b++) {
//       var c = Blockly.utils.xml.createElement("arg");
//       c.setAttribute("name", this.arguments_[b]);
//       a.appendChild(c);
//     }
//     return a;
//   },
//   domToMutation: function (a) {
//     var b = a.getAttribute("name");
//     this.renameProcedure(this.getProcedureCall(), b);
//     b = [];
//     for (var c = [], d = 0, e; (e = a.childNodes[d]); d++)
//       "arg" == e.nodeName.toLowerCase() &&
//         (b.push(e.getAttribute("name")), c.push(e.getAttribute("paramId")));
//     this.setProcedureParameters_(b, c);
//   },
//   getVarModels: function () {
//     return this.argumentVarModels_;
//   },
//   onchange: function (a) {
//     if (this.workspace && !this.workspace.isFlyout && a.recordUndo)
//       if (
//         a.type == Blockly.Events.BLOCK_CREATE &&
//         -1 != a.ids.indexOf(this.id)
//       ) {
//         var b = this.getProcedureCall();
//         b = Blockly.Procedures.getDefinition(b, this.workspace);
//         !b ||
//           (b.type == this.defType_ &&
//             JSON.stringify(b.arguments_) == JSON.stringify(this.arguments_)) ||
//           (b = null);
//         if (!b) {
//           Blockly.Events.setGroup(a.group);
//           a = Blockly.utils.xml.createElement("xml");
//           b = Blockly.utils.xml.createElement("block");
//           b.setAttribute("type", this.defType_);
//           var c = this.getRelativeToSurfaceXY(),
//             d = c.y + 2 * Blockly.SNAP_RADIUS;
//           b.setAttribute("x", c.x + Blockly.SNAP_RADIUS * (this.RTL ? -1 : 1));
//           b.setAttribute("y", d);
//           c = this.mutationToDom();
//           b.appendChild(c);
//           c = Blockly.utils.xml.createElement("field");
//           c.setAttribute("name", "NAME");
//           c.appendChild(
//             Blockly.utils.xml.createTextNode(this.getProcedureCall())
//           );
//           b.appendChild(c);
//           a.appendChild(b);
//           Blockly.Xml.domToWorkspace(a, this.workspace);
//           Blockly.Events.setGroup(!1);
//         }
//       } else
//         a.type == Blockly.Events.BLOCK_DELETE
//           ? ((b = this.getProcedureCall()),
//             (b = Blockly.Procedures.getDefinition(b, this.workspace)),
//             b ||
//               (Blockly.Events.setGroup(a.group),
//               this.dispose(!0),
//               Blockly.Events.setGroup(!1)))
//           : a.type == Blockly.Events.CHANGE &&
//             "disabled" == a.element &&
//             ((b = this.getProcedureCall()),
//             (b = Blockly.Procedures.getDefinition(b, this.workspace)) &&
//               b.id == a.blockId &&
//               ((b = Blockly.Events.getGroup()) &&
//                 console.log(
//                   "Saw an existing group while responding to a definition change"
//                 ),
//               Blockly.Events.setGroup(a.group),
//               a.newValue
//                 ? ((this.previousEnabledState_ = this.isEnabled()),
//                   this.setEnabled(!1))
//                 : this.setEnabled(this.previousEnabledState_),
//               Blockly.Events.setGroup(b)));
//   },
//   customContextMenu: function (a) {
//     if (this.workspace.isMovable()) {
//       var b = { enabled: !0 };
//       b.text = Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;
//       var c = this.getProcedureCall(),
//         d = this.workspace;
//       b.callback = function () {
//         var a = Blockly.Procedures.getDefinition(c, d);
//         a && (d.centerOnBlock(a.id), a.select());
//       };
//       a.push(b);
//     }
//   },
//   defType_: "procedures_defnoreturn",
// };
// Blockly.Blocks.procedures_callreturn = {
//   init: function () {
//     this.appendDummyInput("TOPROW").appendField("", "NAME");
//     this.setOutput(!0);
//     this.setStyle("procedure_blocks");
//     this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL);
//     this.arguments_ = [];
//     this.quarkConnections_ = {};
//     this.quarkIds_ = null;
//     this.previousEnabledState_ = !0;
//   },
//   getProcedureCall: Blockly.Blocks.procedures_callnoreturn.getProcedureCall,
//   renameProcedure: Blockly.Blocks.procedures_callnoreturn.renameProcedure,
//   setProcedureParameters_:
//     Blockly.Blocks.procedures_callnoreturn.setProcedureParameters_,
//   updateShape_: Blockly.Blocks.procedures_callnoreturn.updateShape_,
//   mutationToDom: Blockly.Blocks.procedures_callnoreturn.mutationToDom,
//   domToMutation: Blockly.Blocks.procedures_callnoreturn.domToMutation,
//   getVarModels: Blockly.Blocks.procedures_callnoreturn.getVarModels,
//   onchange: Blockly.Blocks.procedures_callnoreturn.onchange,
//   customContextMenu: Blockly.Blocks.procedures_callnoreturn.customContextMenu,
//   defType_: "procedures_defreturn",
// };
// Blockly.Blocks.procedures_ifreturn = {
//   init: function () {
//     this.appendValueInput("CONDITION")
//       .setCheck("Boolean")
//       .appendField(new Blockly.FieldImage("/img/Function/F3-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
//       .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
//     this.appendValueInput("VALUE")
//       .appendField(
//       Blockly.Msg.PROCEDURES_DEFRETURN_RETURN
//     );
//     this.setInputsInline(!0);
//     this.setPreviousStatement(!0);
//     this.setNextStatement(!0);
//     this.setStyle("procedure_blocks");
//     this.setTooltip(Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP);
//     this.setHelpUrl(Blockly.Msg.PROCEDURES_IFRETURN_HELPURL);
//     this.hasReturnValue_ = !0;
//   },
//   mutationToDom: function () {
//     var a = Blockly.utils.xml.createElement("mutation");
//     a.setAttribute("value", Number(this.hasReturnValue_));
//     return a;
//   },
//   domToMutation: function (a) {
//     this.hasReturnValue_ = 1 == a.getAttribute("value");
//     this.hasReturnValue_ ||
//       (this.removeInput("VALUE"),
//       this.appendDummyInput("VALUE")
        
//         .appendField(
//         Blockly.Msg.PROCEDURES_DEFRETURN_RETURN
//       ));
//   },
//   onchange: function (a) {
//     if (this.workspace.isDragging && !this.workspace.isDragging()) {
//       a = !1;
//       var b = this;
//       do {
//         if (-1 != this.FUNCTION_TYPES.indexOf(b.type)) {
//           a = !0;
//           break;
//         }
//         b = b.getSurroundParent();
//       } while (b);
//       a
//         ? ("procedures_defnoreturn" == b.type && this.hasReturnValue_
//             ? (this.removeInput("VALUE"),
//               this.appendDummyInput("VALUE").appendField(
//                 Blockly.Msg.PROCEDURES_DEFRETURN_RETURN
//               ),
//               (this.hasReturnValue_ = !1))
//             : "procedures_defreturn" != b.type ||
//               this.hasReturnValue_ ||
//               (this.removeInput("VALUE"),
//               this.appendValueInput("VALUE").appendField(
//                 Blockly.Msg.PROCEDURES_DEFRETURN_RETURN
//               ),
//               (this.hasReturnValue_ = !0)),
//           this.setWarningText(null),
//           this.isInFlyout || this.setEnabled(!0))
//         : (this.setWarningText(Blockly.Msg.PROCEDURES_IFRETURN_WARNING),
//           this.isInFlyout ||
//             this.getInheritedDisabled() ||
//             this.setEnabled(!1));
//     }
//   },
//   FUNCTION_TYPES: ["procedures_defnoreturn", "procedures_defreturn"],
// };


// //******************************************************************************************************** */
// //****************************************클래스 함수 외관 구현 
// //******************************************************************************************************** */
// // Blockly.Blocks.class_procedures = {};
// // Blockly.Blocks.class_procedures_defnoreturn = {

// //   //초기화 
// //   init: function () {  
// //     var class_a = new Blockly.FieldTextInput("", Blockly.Procedures.rename);
// //     class_a.setSpellcheck(!1); 

// //     this.appendDummyInput() 
// //         .appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE) 
// //         .appendField(class_a, "NAME") //클래스 함수 명
// //         .appendField("", "PARAMS");   //클래스 함수 인자 

// //     this.setMutator(new Blockly.Mutator(["class_procedures_mutatorarg"]));  //뮤테이터 

// //     (
// //       this.workspace.options.comments || 
// //             (this.workspace.options.parentWorkspace && this.workspace.options.parentWorkspace.options.comments)
// //     ) 
// //     && 
// //     Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT && this.setCommentText(Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT); //추후 ko.json에서 설정필요(이름변경!)
     
// //     this.setStyle("math_blocks"); //주황 
// //     this.setPreviousStatement(true, null); //전 O 
// //     this.setNextStatement(true, null);     //후 O
// //     this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);  //추후 ko.json에서 설정필요(이름변경!) 툴팁 과 URL, 위치 -> ko.json 
// //     this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL);  
// //     this.arguments_ = [];
// //     this.argumentVarModels_ = []; 
// //     this.setStatements_(!0);
// //     this.statementConnection_ = null; 
// //   },
// //   //초기화 
 
// //   setStatements_: function (class_a) {     
// //     this.hasStatements_ !== class_a &&  
// //     (class_a ?  (this.appendStatementInput("STACK").appendField( Blockly.Msg.PROCEDURES_DEFNORETURN_DO),
// //                  this.getInput("RETURN") && this.moveInputBefore("STACK", "RETURN"))

// //              : this.removeInput("STACK", !0),(this.hasStatements_ = class_a));
// //   }, 


// //   //매개변수 업데이트  
// //   updateParams_: function () { 
// //     var a = "";
// //     this.arguments_.length && (a = Blockly.Msg.PROCEDURES_BEFORE_PARAMS + " " + this.arguments_.join(", "));
// //     Blockly.Events.disable(); 
// //     try {
// //       this.setFieldValue(a, "PARAMS");
// //     } finally { 
// //       Blockly.Events.enable();
// //     } 
// //   },
// //   //매개변수 업데이트 


// //   mutationToDom: function (a) {
// //     var b = Blockly.utils.xml.createElement("mutation");
// //     a && b.setAttribute("name", this.getFieldValue("NAME"));
// //     for (var c = 0; c < this.argumentVarModels_.length; c++) {
// //       var d = Blockly.utils.xml.createElement("arg"),
// //         e = this.argumentVarModels_[c];
// //       d.setAttribute("name", e.name);
// //       d.setAttribute("varid", e.getId());
// //       a && this.paramIds_ && d.setAttribute("paramId", this.paramIds_[c]);
// //       b.appendChild(d);
// //     }
// //     this.hasStatements_ || b.setAttribute("statements", "false");
// //     return b;
// //   },

// //   domToMutation: function (a) {
// //     this.arguments_ = [];
// //     this.argumentVarModels_ = [];
// //     for (var b = 0, c; (c = a.childNodes[b]); b++)
// //       if ("arg" == c.nodeName.toLowerCase()) {
// //         var d = c.getAttribute("name");
// //         c = c.getAttribute("varid") || c.getAttribute("varId");
// //         this.arguments_.push(d);
// //         c = Blockly.Variables.getOrCreateVariablePackage(
// //           this.workspace,
// //           c,
// //           d,
// //           ""
// //         );
// //         null != c
// //           ? this.argumentVarModels_.push(c)
// //           : console.log(
// //               "Failed to create a variable with name " + d + ", ignoring."
// //             );
// //       }
// //     this.updateParams_();
// //     Blockly.Procedures.mutateCallers(this);
// //     this.setStatements_("false" !== a.getAttribute("statements"));
// //   },
// //   decompose: function (a) {
// //     var b = Blockly.utils.xml.createElement("block");
// //     b.setAttribute("type", "procedures_mutatorcontainer");
// //     var c = Blockly.utils.xml.createElement("statement");
// //     c.setAttribute("name", "STACK");
// //     b.appendChild(c);
// //     for (var d = 0; d < this.arguments_.length; d++) {
// //       var e = Blockly.utils.xml.createElement("block");
// //       e.setAttribute("type", "procedures_mutatorarg");
// //       var f = Blockly.utils.xml.createElement("field");
// //       f.setAttribute("name", "NAME");
// //       var g = Blockly.utils.xml.createTextNode(this.arguments_[d]);
// //       f.appendChild(g);
// //       e.appendChild(f);
// //       f = Blockly.utils.xml.createElement("next");
// //       e.appendChild(f);
// //       c.appendChild(e);
// //       c = f;
// //     }
// //     a = Blockly.Xml.domToBlock(b, a);
// //     "procedures_defreturn" == this.type
// //       ? a.setFieldValue(this.hasStatements_, "STATEMENTS")
// //       : a.removeInput("STATEMENT_INPUT");
// //     Blockly.Procedures.mutateCallers(this);
// //     return a;
// //   },
// //   compose: function (a) {
// //     this.arguments_ = [];
// //     this.paramIds_ = [];
// //     this.argumentVarModels_ = [];
// //     for (var b = a.getInputTargetBlock("STACK"); b; ) {
// //       var c = b.getFieldValue("NAME");
// //       this.arguments_.push(c);
// //       c = this.workspace.getVariable(c, "");
// //       this.argumentVarModels_.push(c);
// //       this.paramIds_.push(b.id);
// //       b = b.nextConnection && b.nextConnection.targetBlock();
// //     }
// //     this.updateParams_();
// //     Blockly.Procedures.mutateCallers(this);
// //     a = a.getFieldValue("STATEMENTS");
// //     if (null !== a && ((a = "TRUE" == a), this.hasStatements_ != a))
// //       if (a)
// //         this.setStatements_(!0),
// //           Blockly.Mutator.reconnect(this.statementConnection_, this, "STACK"),
// //           (this.statementConnection_ = null);
// //       else {
// //         a = this.getInput("STACK").connection;
// //         if ((this.statementConnection_ = a.targetConnection))
// //           (a = a.targetBlock()), a.unplug(), a.bumpNeighbours();
// //         this.setStatements_(!1);
// //       }
// //   },
// //   getProcedureDef: function () {
// //     return [this.getFieldValue("NAME"), this.arguments_, !1];
// //   },
// //   getVars: function () {
// //     return this.arguments_;
// //   },
// //   getVarModels: function () {
// //     return this.argumentVarModels_;
// //   },
// //   renameVarById: function (a, b) {
// //     var c = this.workspace.getVariableById(a);
// //     if ("" == c.type) {
// //       c = c.name;
// //       b = this.workspace.getVariableById(b);
// //       for (var d = !1, e = 0; e < this.argumentVarModels_.length; e++)
// //         this.argumentVarModels_[e].getId() == a &&
// //           ((this.arguments_[e] = b.name),
// //           (this.argumentVarModels_[e] = b),
// //           (d = !0));
// //       d &&
// //         (this.displayRenamedVar_(c, b.name),
// //         Blockly.Procedures.mutateCallers(this));
// //     }
// //   },
// //   updateVarName: function (a) {
// //     for (var b = a.name, c = !1, d = 0; d < this.argumentVarModels_.length; d++)
// //       if (this.argumentVarModels_[d].getId() == a.getId()) {
// //         var e = this.arguments_[d];
// //         this.arguments_[d] = b;
// //         c = !0;
// //       }
// //     c &&
// //       (this.displayRenamedVar_(e, b), Blockly.Procedures.mutateCallers(this));
// //   },
// //   displayRenamedVar_: function (a, b) {
// //     this.updateParams_();
// //     if (this.mutator && this.mutator.isVisible())
// //       for (
// //         var c = this.mutator.workspace_.getAllBlocks(!1), d = 0, e;
// //         (e = c[d]);
// //         d++
// //       )
// //         "procedures_mutatorarg" == e.type &&
// //           Blockly.Names.equals(a, e.getFieldValue("NAME")) &&
// //           e.setFieldValue(b, "NAME");
// //   },
// //   customContextMenu: function (a) {
// //     if (!this.isInFlyout) {
// //       var b = { enabled: !0 },
// //         c = this.getFieldValue("NAME");
// //       b.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace("%1", c);
// //       var d = Blockly.utils.xml.createElement("mutation");
// //       d.setAttribute("name", c);
// //       for (c = 0; c < this.arguments_.length; c++) {
// //         var e = Blockly.utils.xml.createElement("arg");
// //         e.setAttribute("name", this.arguments_[c]);
// //         d.appendChild(e);
// //       }
// //       c = Blockly.utils.xml.createElement("block");
// //       c.setAttribute("type", this.callType_);
// //       c.appendChild(d);
// //       b.callback = Blockly.ContextMenu.callbackFactory(this, c);
// //       a.push(b);
// //       if (!this.isCollapsed())
// //         for (c = 0; c < this.argumentVarModels_.length; c++)
// //           (b = { enabled: !0 }),
// //             (d = this.argumentVarModels_[c]),
// //             (b.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace(
// //               "%1",
// //               d.name
// //             )),
// //             (d = Blockly.Variables.generateVariableFieldDom(d)),
// //             (e = Blockly.utils.xml.createElement("block")),
// //             e.setAttribute("type", "variables_get"),
// //             e.appendChild(d),
// //             (b.callback = Blockly.ContextMenu.callbackFactory(this, e)),
// //             a.push(b);
// //     }
// //   },
// //   callType_: "procedures_callnoreturn",
// // };


// // Blockly.Blocks.procedures_defreturn = {
// //   init: function () {
// //     var a = new Blockly.FieldTextInput("", Blockly.Procedures.rename);
// //     a.setSpellcheck(!1);
// //     this.appendDummyInput()
// //       .appendField(new Blockly.FieldImage("/img/Function/F2-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
// //       .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE)
// //       .appendField(a, "NAME")
// //       .appendField("", "PARAMS");
// //     this.appendValueInput("RETURN")
// //       .setAlign(Blockly.ALIGN_RIGHT)
// //       .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
// //     this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
// //     (this.workspace.options.comments ||
// //       (this.workspace.options.parentWorkspace &&
// //         this.workspace.options.parentWorkspace.options.comments)) &&
// //       Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT &&
// //       this.setCommentText(Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT);
// //     this.setStyle("procedure_blocks");
// //     this.setPreviousStatement(true, null);
// //     this.setNextStatement(true, null);
// //     this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
// //     this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
// //     this.arguments_ = [];
// //     this.argumentVarModels_ = [];
// //     this.setStatements_(!0);
// //     this.statementConnection_ = null;
// //   },
// //   setStatements_: Blockly.Blocks.procedures_defnoreturn.setStatements_,
// //   updateParams_: Blockly.Blocks.procedures_defnoreturn.updateParams_,
// //   mutationToDom: Blockly.Blocks.procedures_defnoreturn.mutationToDom,
// //   domToMutation: Blockly.Blocks.procedures_defnoreturn.domToMutation,
// //   decompose: Blockly.Blocks.procedures_defnoreturn.decompose,
// //   compose: Blockly.Blocks.procedures_defnoreturn.compose,
// //   getProcedureDef: function () {
// //     return [this.getFieldValue("NAME"), this.arguments_, !0];
// //   },
// //   getVars: Blockly.Blocks.procedures_defnoreturn.getVars,
// //   getVarModels: Blockly.Blocks.procedures_defnoreturn.getVarModels,
// //   renameVarById: Blockly.Blocks.procedures_defnoreturn.renameVarById,
// //   updateVarName: Blockly.Blocks.procedures_defnoreturn.updateVarName,
// //   displayRenamedVar_: Blockly.Blocks.procedures_defnoreturn.displayRenamedVar_,
// //   customContextMenu: Blockly.Blocks.procedures_defnoreturn.customContextMenu,
// //   callType_: "procedures_callreturn",
// // };


// // Blockly.Blocks.procedures_mutatorcontainer = {
// //   init: function () {
// //     this.appendDummyInput().appendField(
// //       Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE
// //     );
// //     this.appendStatementInput("STACK");
// //     this.appendDummyInput("STATEMENT_INPUT")
// //       .appendField(Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS)
// //       .appendField(new Blockly.FieldCheckbox("TRUE"), "STATEMENTS");
// //     this.setStyle("procedure_blocks");
// //     this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
// //     this.contextMenu = !1;
// //   }, 
// // };
// // Blockly.Blocks.procedures_mutatorarg = {
// //   init: function () {
// //     var a = new Blockly.FieldTextInput(
// //       Blockly.Procedures.DEFAULT_ARG,
// //       this.validator_
// //     );
// //     a.oldShowEditorFn_ = a.showEditor_;
// //     a.showEditor_ = function () {
// //       this.createdVariables_ = [];
// //       this.oldShowEditorFn_();
// //     };
// //     this.appendDummyInput()
// //       .appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE)
// //       .appendField(a, "NAME");
// //     this.setPreviousStatement(!0);
// //     this.setNextStatement(!0);
// //     this.setStyle("procedure_blocks");
// //     this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
// //     this.contextMenu = !1;
// //     a.onFinishEditing_ = this.deleteIntermediateVars_;
// //     a.createdVariables_ = [];
// //     a.onFinishEditing_("x");
// //   },
// //   validator_: function (a) {
// //     var b = this.getSourceBlock(),
// //       c = Blockly.Mutator.findParentWs(b.workspace);
// //     a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
// //     if (!a) return null;
// //     for (
// //       var d = (b.workspace.targetWorkspace || b.workspace).getAllBlocks(!1),
// //         e = a.toLowerCase(),
// //         f = 0;
// //       f < d.length;
// //       f++
// //     )
// //       if (d[f].id != this.getSourceBlock().id) {
// //         var g = d[f].getFieldValue("NAME");
// //         if (g && g.toLowerCase() == e) return null;
// //       }
// //     if (b.isInFlyout) return a;
// //     (b = c.getVariable(a, "")) &&
// //       b.name != a &&
// //       c.renameVariableById(b.getId(), a);
// //     b ||
// //       ((b = c.createVariable(a, "")) &&
// //         this.createdVariables_ &&
// //         this.createdVariables_.push(b));
// //     return a;
// //   },
// //   deleteIntermediateVars_: function (a) {
// //     var b = Blockly.Mutator.findParentWs(this.getSourceBlock().workspace);
// //     if (b)
// //       for (var c = 0; c < this.createdVariables_.length; c++) {
// //         var d = this.createdVariables_[c];
// //         d.name != a && b.deleteVariableById(d.getId());
// //       }
// //   },
// // };
// // Blockly.Blocks.procedures_callnoreturn = {
// //   init: function () {
// //     this.appendDummyInput("TOPROW").appendField(this.id, "NAME");
// //     this.setPreviousStatement(!0);
// //     this.setNextStatement(!0); 
// //     this.setStyle("procedure_blocks");
// //     this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL);
// //     this.arguments_ = [];
// //     this.argumentVarModels_ = [];
// //     this.quarkConnections_ = {};
// //     this.quarkIds_ = null;
// //     this.previousEnabledState_ = !0;
// //   },
// //   getProcedureCall: function () {
// //     return this.getFieldValue("NAME");
// //   },
// //   renameProcedure: function (a, b) {
// //     Blockly.Names.equals(a, this.getProcedureCall()) &&
// //       (this.setFieldValue(b, "NAME"),
// //       this.setTooltip(
// //         (this.outputConnection
// //           ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP
// //           : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP
// //         ).replace("%1", b)
// //       ));
// //   },
// //   setProcedureParameters_: function (a, b) {
// //     var c = Blockly.Procedures.getDefinition(
// //         this.getProcedureCall(),
// //         this.workspace
// //       ),
// //       d = c && c.mutator && c.mutator.isVisible();
// //     d || ((this.quarkConnections_ = {}), (this.quarkIds_ = null));
// //     if (b)
// //       if (a.join("\n") == this.arguments_.join("\n")) this.quarkIds_ = b;
// //       else {
// //         if (b.length != a.length)
// //           throw RangeError("paramNames and paramIds must be the same length.");
// //         this.setCollapsed(!1);
// //         this.quarkIds_ ||
// //           ((this.quarkConnections_ = {}), (this.quarkIds_ = []));
// //         c = this.rendered;
// //         this.rendered = !1;
// //         for (var e = 0; e < this.arguments_.length; e++) {
// //           var f = this.getInput("ARG" + e);
// //           f &&
// //             ((f = f.connection.targetConnection),
// //             (this.quarkConnections_[this.quarkIds_[e]] = f),
// //             d &&
// //               f &&
// //               -1 == b.indexOf(this.quarkIds_[e]) &&
// //               (f.disconnect(), f.getSourceBlock().bumpNeighbours()));
// //         }
// //         this.arguments_ = [].concat(a);
// //         this.argumentVarModels_ = [];
// //         for (e = 0; e < this.arguments_.length; e++)
// //           (a = Blockly.Variables.getOrCreateVariablePackage(
// //             this.workspace,
// //             null,
// //             this.arguments_[e],
// //             ""
// //           )),
// //             this.argumentVarModels_.push(a);
// //         this.updateShape_();
// //         if ((this.quarkIds_ = b))
// //           for (e = 0; e < this.arguments_.length; e++)
// //             (b = this.quarkIds_[e]),
// //               b in this.quarkConnections_ &&
// //                 ((f = this.quarkConnections_[b]),
// //                 Blockly.Mutator.reconnect(f, this, "ARG" + e) ||
// //                   delete this.quarkConnections_[b]);
// //         (this.rendered = c) && this.render();
// //       }
// //   },
// //   updateShape_: function () {
// //     for (var a = 0; a < this.arguments_.length; a++) {
// //       var b = this.getField("ARGNAME" + a);
// //       if (b) {
// //         Blockly.Events.disable();
// //         try {
// //           b.setValue(this.arguments_[a]);
// //         } finally {
// //           Blockly.Events.enable();
// //         }
// //       } else
// //         (b = new Blockly.FieldLabel(this.arguments_[a])),
// //           this.appendValueInput("ARG" + a)
// //             .setAlign(Blockly.ALIGN_RIGHT)
// //             .appendField(b, "ARGNAME" + a)
// //             .init();
// //     }
// //     for (; this.getInput("ARG" + a); ) this.removeInput("ARG" + a), a++;
// //     if ((a = this.getInput("TOPROW")))
// //       this.arguments_.length
// //         ? this.getField("WITH") ||
// //           (a.appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"),
// //           a.init())
// //         : this.getField("WITH") && a.removeField("WITH");
// //   },
// //   mutationToDom: function () {
// //     var a = Blockly.utils.xml.createElement("mutation");
// //     a.setAttribute("name", this.getProcedureCall());
// //     for (var b = 0; b < this.arguments_.length; b++) {
// //       var c = Blockly.utils.xml.createElement("arg");
// //       c.setAttribute("name", this.arguments_[b]);
// //       a.appendChild(c);
// //     }
// //     return a;
// //   },
// //   domToMutation: function (a) {
// //     var b = a.getAttribute("name");
// //     this.renameProcedure(this.getProcedureCall(), b);
// //     b = [];
// //     for (var c = [], d = 0, e; (e = a.childNodes[d]); d++)
// //       "arg" == e.nodeName.toLowerCase() &&
// //         (b.push(e.getAttribute("name")), c.push(e.getAttribute("paramId")));
// //     this.setProcedureParameters_(b, c);
// //   },
// //   getVarModels: function () {
// //     return this.argumentVarModels_;
// //   },
// //   onchange: function (a) {
// //     if (this.workspace && !this.workspace.isFlyout && a.recordUndo)
// //       if (
// //         a.type == Blockly.Events.BLOCK_CREATE &&
// //         -1 != a.ids.indexOf(this.id)
// //       ) {
// //         var b = this.getProcedureCall();
// //         b = Blockly.Procedures.getDefinition(b, this.workspace);
// //         !b ||
// //           (b.type == this.defType_ &&
// //             JSON.stringify(b.arguments_) == JSON.stringify(this.arguments_)) ||
// //           (b = null);
// //         if (!b) {
// //           Blockly.Events.setGroup(a.group);
// //           a = Blockly.utils.xml.createElement("xml");
// //           b = Blockly.utils.xml.createElement("block");
// //           b.setAttribute("type", this.defType_);
// //           var c = this.getRelativeToSurfaceXY(),
// //             d = c.y + 2 * Blockly.SNAP_RADIUS;
// //           b.setAttribute("x", c.x + Blockly.SNAP_RADIUS * (this.RTL ? -1 : 1));
// //           b.setAttribute("y", d);
// //           c = this.mutationToDom();
// //           b.appendChild(c);
// //           c = Blockly.utils.xml.createElement("field");
// //           c.setAttribute("name", "NAME");
// //           c.appendChild(
// //             Blockly.utils.xml.createTextNode(this.getProcedureCall())
// //           );
// //           b.appendChild(c);
// //           a.appendChild(b);
// //           Blockly.Xml.domToWorkspace(a, this.workspace);
// //           Blockly.Events.setGroup(!1);
// //         }
// //       } else
// //         a.type == Blockly.Events.BLOCK_DELETE
// //           ? ((b = this.getProcedureCall()),
// //             (b = Blockly.Procedures.getDefinition(b, this.workspace)),
// //             b ||
// //               (Blockly.Events.setGroup(a.group),
// //               this.dispose(!0),
// //               Blockly.Events.setGroup(!1)))
// //           : a.type == Blockly.Events.CHANGE &&
// //             "disabled" == a.element &&
// //             ((b = this.getProcedureCall()),
// //             (b = Blockly.Procedures.getDefinition(b, this.workspace)) &&
// //               b.id == a.blockId &&
// //               ((b = Blockly.Events.getGroup()) &&
// //                 console.log(
// //                   "Saw an existing group while responding to a definition change"
// //                 ),
// //               Blockly.Events.setGroup(a.group),
// //               a.newValue
// //                 ? ((this.previousEnabledState_ = this.isEnabled()),
// //                   this.setEnabled(!1))
// //                 : this.setEnabled(this.previousEnabledState_),
// //               Blockly.Events.setGroup(b)));
// //   },
// //   customContextMenu: function (a) {
// //     if (this.workspace.isMovable()) {
// //       var b = { enabled: !0 };
// //       b.text = Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;
// //       var c = this.getProcedureCall(),
// //         d = this.workspace;
// //       b.callback = function () {
// //         var a = Blockly.Procedures.getDefinition(c, d);
// //         a && (d.centerOnBlock(a.id), a.select());
// //       };
// //       a.push(b);
// //     }
// //   },
// //   defType_: "procedures_defnoreturn",
// // };
// // Blockly.Blocks.procedures_callreturn = {
// //   init: function () {
// //     this.appendDummyInput("TOPROW").appendField("", "NAME");
// //     this.setOutput(!0);
// //     this.setStyle("procedure_blocks");
// //     this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL);
// //     this.arguments_ = [];
// //     this.quarkConnections_ = {};
// //     this.quarkIds_ = null;
// //     this.previousEnabledState_ = !0;
// //   },
// //   getProcedureCall: Blockly.Blocks.procedures_callnoreturn.getProcedureCall,
// //   renameProcedure: Blockly.Blocks.procedures_callnoreturn.renameProcedure,
// //   setProcedureParameters_:
// //     Blockly.Blocks.procedures_callnoreturn.setProcedureParameters_,
// //   updateShape_: Blockly.Blocks.procedures_callnoreturn.updateShape_,
// //   mutationToDom: Blockly.Blocks.procedures_callnoreturn.mutationToDom,
// //   domToMutation: Blockly.Blocks.procedures_callnoreturn.domToMutation,
// //   getVarModels: Blockly.Blocks.procedures_callnoreturn.getVarModels,
// //   onchange: Blockly.Blocks.procedures_callnoreturn.onchange,
// //   customContextMenu: Blockly.Blocks.procedures_callnoreturn.customContextMenu,
// //   defType_: "procedures_defreturn",
// // };
// // Blockly.Blocks.procedures_ifreturn = {
// //   init: function () {
// //     this.appendValueInput("CONDITION")
// //       .setCheck("Boolean")
// //       .appendField(new Blockly.FieldImage("/img/Function/F3-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
// //       .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
// //     this.appendValueInput("VALUE")
// //       .appendField(
// //       Blockly.Msg.PROCEDURES_DEFRETURN_RETURN
// //     );
// //     this.setInputsInline(!0);
// //     this.setPreviousStatement(!0);
// //     this.setNextStatement(!0);
// //     this.setStyle("procedure_blocks");
// //     this.setTooltip(Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP);
// //     this.setHelpUrl(Blockly.Msg.PROCEDURES_IFRETURN_HELPURL);
// //     this.hasReturnValue_ = !0;
// //   },
// //   mutationToDom: function () {
// //     var a = Blockly.utils.xml.createElement("mutation");
// //     a.setAttribute("value", Number(this.hasReturnValue_));
// //     return a;
// //   },
// //   domToMutation: function (a) {
// //     this.hasReturnValue_ = 1 == a.getAttribute("value");
// //     this.hasReturnValue_ ||
// //       (this.removeInput("VALUE"),
// //       this.appendDummyInput("VALUE")
        
// //         .appendField(
// //         Blockly.Msg.PROCEDURES_DEFRETURN_RETURN
// //       ));
// //   },
// //   onchange: function (a) {
// //     if (this.workspace.isDragging && !this.workspace.isDragging()) {
// //       a = !1;
// //       var b = this;
// //       do {
// //         if (-1 != this.FUNCTION_TYPES.indexOf(b.type)) {
// //           a = !0;
// //           break;
// //         }
// //         b = b.getSurroundParent();
// //       } while (b);
// //       a
// //         ? ("procedures_defnoreturn" == b.type && this.hasReturnValue_
// //             ? (this.removeInput("VALUE"),
// //               this.appendDummyInput("VALUE").appendField(
// //                 Blockly.Msg.PROCEDURES_DEFRETURN_RETURN
// //               ),
// //               (this.hasReturnValue_ = !1))
// //             : "procedures_defreturn" != b.type ||
// //               this.hasReturnValue_ ||
// //               (this.removeInput("VALUE"),
// //               this.appendValueInput("VALUE").appendField(
// //                 Blockly.Msg.PROCEDURES_DEFRETURN_RETURN
// //               ),
// //               (this.hasReturnValue_ = !0)),
// //           this.setWarningText(null),
// //           this.isInFlyout || this.setEnabled(!0)) 
// //         : (this.setWarningText(Blockly.Msg.PROCEDURES_IFRETURN_WARNING),
// //           this.isInFlyout ||
// //             this.getInheritedDisabled() ||
// //             this.setEnabled(!1));
// //     }
// //   },
// //   FUNCTION_TYPES: ["procedures_defnoreturn", "procedures_defreturn"],
// // }; 