Blockly.defineBlocksWithJsonArray(
    [
  //csv 파일 읽기
  {
    "type": "data_csv_read",
    "message0": "변수 : %1 CSV 파일 읽기",
    "args0": [
      { 
        "type": "input_value",
        "name": "Data_csv_read_val"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  // 라이브러리 임포트 전체  
  {
    "type": "lib_import_a",
    "message0": "( 라이브러리 임포트 ) %1 %2  :  from 여부 %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "Lib_import_select",
        "options": [
          [
            "numpy",
            "Lib_import_nump"
          ],
          [
            "pandas",
            "Lib_import_panda"
          ],
          [
            "matplotlib",
            "Lib_import_matplotlib"
          ],
          [
            "scikit-learn",
            "Lib_import_scikit"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      { 
        "type": "field_checkbox",
        "name": "Lib_check_from",
        "checked": false
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
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
  //numpy
  {
    "type": "import_numpy",
    "message0": "%1",
    "args0": [
      {
        "type": "field_input",
        "name": "Import_numpy_n",
        "text": "numpy"
      }
    ],
    "output": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
  //배열 생성
  {
    "type": "create_arry",
    "message0": "배열 생성 %1",
    "args0": [  
      {
        "type": "field_input", 
        "name": "Create_arry_val",
        "text": ""
      }
    ],
    "inputsInline": true,
    "output": null,
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
    // 배열 np.arry 
  { 
    "type": "np_array",
    "message0": "np.arry %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      { 
        "type": "input_value",
        "name": "np_array_input"
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
    "message0": "np.zeros %1 , dtype 사용여부(정수) %2",
    "args0": [
      {
        "type": "field_input",
        "name": "Numpy_zeros_num", 
        "text": "" 
      },
      {  
        "type": "field_checkbox",  
        "name": "Numpy_zeros_check_dtype", 
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
    "message0": "np.full ( 배열 생성 ) %1 채워질 값 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "Numpy_full_pre_val",
        "text": ""
      },
      {
        "type": "field_input",
        "name": "Numpy_full_next_val",
        "text": ""
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
    "message0": "np.eye ( 배열 대각선 1 로 채우기 ) -> 배열생성 : %1",
    "args0": [
      { 
        "type": "field_input", 
        "name": "Numpy_eye_arry",
        "text": ""
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
  // 최대값 찾기 
  {
    "type": "numpy_max",
    "message0": "max ( 최대 값 찾기 )  %1",
    "args0": [ 
      {
        "type": "field_input", 
        "name": "Numpy_max_arry",
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
  //최소 값 찾기 
  {
    "type": "numpy_min",
    "message0": "np.min ( 최소 값 찾기 ) %1",
    "args0": [
      {
        "type": "field_input",
        "name": "Numpy_min_arry", 
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
  //shape 행열 차원 반환 
  {
    "type": "numpy_shape",
    "message0": "변수이름 : %1 .shape ( 행렬 차원 반환) ",
    "args0": [
      {
        "type": "field_input", 
        "name": "Numpy_shape", 
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
  // reshpae 행렬 차원 변경 
  {
    "type": "numpy_reshape",
    "message0": "변수이름 : %1 .reshape ( 행렬 차원 변경)   값 : %2",
    "args0": [
      {
        "type": "field_input",
        "name": "Numpy_reshape_vari",
        "text": ""
      },
      {
        "type": "field_input",
        "name": "Numpy_reshape_array",
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
  // random.randn  표준정규 분포에 따른 무작위 숫자 생성 
  {
      "type": "numpy_random_rand",
      "message0": "np.random ( randn : 정규분포 난수 , randint :정수 난수)   값 : %1 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "Numpy_Get_random",  
          "options": [
            [
              "randn",
              "Numpy_random_randn"
            ],
            [
              "randint",
              "Numpy_random_randint"
            ]
          ]
        },
        {
          "type": "field_input",
          "name": "Numpy_random_rand_array",
          "text": ""
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
      "message0": " %1 np.exp ( 지수 함수 ) %2", 
      "args0": [
        {
          "type": "input_dummy"
        },
        { 
          "type": "input_value",
          "name": "Numpy_exp_val"
        }
      ],
      "inputsInline": true, 
      "output": null,
      "colour": 125,
      "tooltip": "",
      "helpUrl": ""
    },
  //matplot1 
  {
    "type": "matplotlib_main",
    "message0": "시각화 틀 ",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 125,
    "tooltip": "", 
    "helpUrl": ""
  }, 
  //matplot2 
  {
    "type": "matplotlib_pre_graph",
    "message0": "시각화 준비 %1  |   ( X , Y ) 값 : %2  |  그래프 종류 : %3  |  형태 (선 그래프만 해당) 사용 여부: %4 %5",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "matplotlib_num_location",
        "options": [
          [
            "전체 표시",
            "matplotlib_screen"
          ],
          [
            "1번_표시",
            "matplotlib_num_1"
          ],
          [
            "2번_표시",
            "matplotlib_num_2"
          ],
          [
            "3번_표시",
            "matplotlib_num_3"
          ],
          [
            "4번_표시",
            "matplotlib_num_4"
          ]
        ]
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
        "type": "field_checkbox",
        "name": "matplotlib_line_OX",
        "checked": false
      },
      {
        "type": "field_dropdown",
        "name": "matplotlib_line_select",
        "options": [
          [
            "선",
            "matplotlib_line_1"
          ],
          [
            "점",
            "matplotlib_line_2"
          ],
          [
            "점_선",
            "matplotlib_line_3"
          ], 
          [
            "x_표시",
            "matplotlib_line_4"
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
  
  //matplot3 
  {
    "type": "matplotlib_graph_end",
    "message0": "시각화 하기 ",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
  
  //선형 회귀 생성 
  {
    "type": "linearregression_c",
    "message0": "선형 회귀 생성",
    "inputsInline": true,
    "output": null,
    "colour": 125,
    "tooltip": "",
    "helpUrl": ""
  },
  //모델 훈련 
  {
    "type": "linearregression_train",
    "message0": "변수 : %1 .fit 모델 훈련 -> X : %2 Y : %3", 
    "args0": [
      {
        "type": "input_value",
        "name": "LinearRegression_val"
      },
      {
        "type": "field_input",
        "name": "LinearRegression_X",
        "text": ""
      },
      { 
        "type": "field_input",
        "name": "LinearRegression_Y",
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
  
  
  
  ]
  ); 