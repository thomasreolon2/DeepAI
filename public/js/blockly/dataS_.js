Blockly.defineBlocksWithJsonArray(
    [
//print 하기 2020-09-04  
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
  // 배열 np.arry 
  {
    "type": "np_array",
    "message0": "%1 .arry %2 %3",
    "args0": [
      {
        "type": "field_input",
        "name": "np_array_lib",
        "text": "" 
      },
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
  // numpy 함수 zeros
  {
    "type": "numpy_zeros",
    "message0": "%1 .zeros %2 , dtype 사용여부(정수) %3",
    "args0": [
      {
        "type": "field_input",
        "name": "Numpy_zeros_lib",
        "text": ""
      },
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
    "message0": "%1 .full ( 배열 생성 ) %2 채워질 값 %3",
    "args0": [
      {
        "type": "field_input",
        "name": "Numpy_full_lib",
        "text": ""
      },
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
    "message0": "%1 .eye ( 배열 대각선 1 로 채우기 ) -> 배열생성 : %2",
    "args0": [
      {
        "type": "field_input",
        "name": "Numpy_eye_lib",
        "text": ""
      },
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
    "message0": "%1 .max ( 최대 값 찾기 )  %2",
    "args0": [
      {
        "type": "field_input",
        "name": "Numpy_max_lib",
        "text": ""
      },
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
    "message0": "%1 .min ( 최소 값 찾기 ) %2",
    "args0": [
      {
        "type": "field_input", 
        "name": "Numpy_min_lib",
        "text": ""
      },
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
      "message0": "%1 .random ( randn : 정규분포 난수 , randint :정수 난수)   값 : %2 %3",
      "args0": [
        {
          "type": "field_input",
          "name": "Numpy_random_rand_lib",
          "text": ""
        },
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
      "message0": "%1 %2 .exp ( 지수 함수 ) %3", 
      "args0": [
        {
          "type": "field_input",
          "name": "Numpy_exp_lib",
          "text": ""
        },
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
]
); 