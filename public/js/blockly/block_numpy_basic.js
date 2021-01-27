

//numpy_averages_variances
Blockly.Blocks['numpy_averages_variances_basic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 평균&분산]")
        .appendField(new Blockly.FieldDropdown([["산술평균(mean)","np.mean"],["가중평균(average)","np.average"],["중앙값(median)","np.median"],  ["표준편차(std)","np.std"], ["분산(var)","np.var"]]), "numpy_Averages_variances_opt");
    this.appendValueInput("parameter1")
        .setCheck(null);
    this.appendValueInput("parameter2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_changing_array_shape
Blockly.Blocks['numpy_changing_array_shape_basic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 모양변경]")
        .appendField(new Blockly.FieldDropdown([["배열형태 변경(reshape)","np.reshape"], //["1차원변경(ravel)","np.ravel"],
           ["1차원변경(flatten)","np.flatten"]]), "numpy_Changing_array_shape_opt");
    this.appendValueInput("numpy_Changing_array_shape_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



//numpy_random_sample
Blockly.Blocks['numpy_random_sample_basic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 단순 랜덤]")
        .appendField(new Blockly.FieldDropdown([["임의 값(rand)","numpy_Random_sample_rand"], ["표준 정규분포(randn)","numpy_Random_sample_randn"], ["배열 무작위(choice)","numpy_Random_sample_choice"]]), "numpy_Random_sample_opt");
    this.appendValueInput("parmeter1")
        .setCheck(null);
    this.appendValueInput("parmeter2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['numpy_random_randint_basic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 단순 랜덤] 임의정수(randint)")
    this.appendValueInput("parmeter1")
        .setCheck(null);
    this.appendValueInput("parmeter2")
        .setCheck(null);
    this.appendValueInput("parmeter3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



//numpy_random_generator
Blockly.Blocks['numpy_random_generator_basic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 생성기] 규칙난수(seed)")
    this.appendValueInput("numpy_Random_generator_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};




//numpy_exponents_logarithms
Blockly.Blocks['numpy_exponents_logarithms_basic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 지수&로그]")
        .appendField(new Blockly.FieldDropdown([["요소별지수(exp)","np.exp"], ["요소별지수2(exp2)","np.exp2"], ["요소별자연로그(log)","np.log"], ["요소별로그10(log10)","np.log10"], ["요소별로그2(log2)","np.log2"]]), "numpy_Exponents_logarithms_opt");
    this.appendValueInput("numpy_Exponents_logarithms_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//행렬 연산
Blockly.Blocks['numpy_array_operator_basic'] = {
  init: function() {
    this.appendValueInput("parameter1")
        .setCheck(null)
        .appendField(Blockly.Msg.NUMPY_ARRAY_OPERATOR_1)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.NUMPY_ARRAY_OPERATOR_2,"np.dot"], [Blockly.Msg.NUMPY_ARRAY_OPERATOR_3,"np.subtract"], [Blockly.Msg.NUMPY_ARRAY_OPERATOR_4,"np.transpose"], [Blockly.Msg.NUMPY_ARRAY_OPERATOR_5,"np.tril"], [Blockly.Msg.NUMPY_ARRAY_OPERATOR_6,"np.triu"]]), "numpy_array_operator_Option");
    this.appendValueInput("parameter2")
        .setCheck(null)
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['numpy_index_values_basic'] = {
  init: function() {
    this.appendValueInput("numpy_index_values_val")
        .setCheck(null)
        .appendField(Blockly.Msg.NUMPY_INDEX_VALUES_111)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.NUMPY_INDEX_VALUES_2,"np.amax"], [Blockly.Msg.NUMPY_INDEX_VALUES_3,"np.amin"]]), "numpy_operator_Option");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['numpy_take_basic'] = {
  init: function() {
    this.appendValueInput("parameter1")
        .setCheck(null)
        .appendField(Blockly.Msg.NUMPY_INDEX_VALUES_111 + ' ' + Blockly.Msg.NUMPY_INDEX_VALUES_7)
    this.appendValueInput("parameter2")
        .setCheck(null)
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_arithmetic_operations1
Blockly.Blocks['numpy_arithmetic_operations1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 기본 산술]")
        .appendField(new Blockly.FieldDropdown([["요소별덧셈(add)","np.add"],
                                                ["요소별뺄셈(subtract)","np.subtract"],
                                                ["요소별곱셈(multiply)","np.multiply"],
                                                ["요소별나눗셈(divide)","np.divide"],
                                                ["요소별양수(positive)","np.positive"],
                                                ["요소별음수(negative)","np.negative"],
                                                ["요소별역수(reciprocal)","np.reciprocal"]]), "numpy_Arithmetic_operations_opt");
    this.appendValueInput("numpy_Arithmetic_operations1_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};




//numpy_transpose_like_operations
Blockly.Blocks['numpy_transpose_like_operations_basic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 전치] 행렬전치(np.transpose)")
    this.appendValueInput("numpy_Transpose_like_operations_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_ones_and_zeros
Blockly.Blocks['numpy_ones_and_zeros_basic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 0 & 1]")
        .appendField(new Blockly.FieldDropdown([["초기화 x(empty)","np.empty"], ["0으로 채움(zeros)","np.zeros"], ["형태에 따른 1(ones)","np.ones"], ["대각선 1(eye)","np.eye"], ["해당 값으로 채움(full)","np.full"]]), "numpy_Ones and zeros_opt");
    this.appendValueInput("parameter1")
        .setCheck(null);
    this.appendValueInput("parameter2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



//numpy_numerical_ranges
Blockly.Blocks['numpy_numerical_ranges_basic1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 숫자 범위]")
        .appendField(new Blockly.FieldDropdown([["균일 간격 배열(arange)","np.arange"], ["균등 간격(linspace)","np.linspace"], ["로그 균등 간격(logspace)","np.logspace"]]), "numpy_Numerical_ranges_opt");
    this.appendValueInput("parameter1")
        .setCheck(null);
    this.appendValueInput("parameter2")
        .setCheck(null);
    this.appendValueInput("parameter3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_numerical_ranges
Blockly.Blocks['numpy_numerical_ranges_basic2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 숫자 범위]")
        .appendField(new Blockly.FieldDropdown([["좌표 행렬(meshgrid)","np.meshgrid"], ["고밀도 다차원(mgrid)","np.mgrid"], ["열린 다차원(ogrid)","np.ogrid"]]), "numpy_Numerical_ranges_opt");
    this.appendValueInput("parameter1")
        .setCheck(null);
    this.appendValueInput("parameter2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

  //넘파이 연산 
Blockly.Blocks['numpy_operator_basic'] = { 
  init: function() {
    this.appendValueInput("parameter1")
        .setCheck(null) 
        .appendField(Blockly.Msg.NUMPY_CALCULATION_1)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.NUMPY_CALCULATION_2,"np.add"], [Blockly.Msg.NUMPY_CALCULATION_3,"np.subtract"], [Blockly.Msg.NUMPY_CALCULATION_4,"np.multiply"], [Blockly.Msg.NUMPY_CALCULATION_5,"np.divide"], [Blockly.Msg.NUMPY_CALCULATION_6,"np.remainder"],[Blockly.Msg.NUMPY_CALCULATION_8,"np.sqrt"]]), "numpy_operator_Option");
    this.appendValueInput("parameter2")
        .setCheck(null)
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

  //numpy_rounding
Blockly.Blocks['numpy_rounding_basic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 반올림]")
        .appendField(new Blockly.FieldDropdown([["소수자릿수(around)","np.around"], ["가까운배열정수(rint)","np.rint"], ["0인접정수(fix)","np.fix"],["올림(ceil)","np.ceil"],["내림(floor)","np.floor"], ["소수점제외(trunc)","np.trunc"]]), "numpy_Rounding_opt");
    this.appendValueInput("numpy_Rounding_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['numpy_loadtxt_basic'] = {
  init: function () {
    this.appendValueInput("text")
        .appendField("[np 파일] ")
        .appendField(new Blockly.FieldVariable("data"), "list")
        .appendField(" = np.loadtxt ");
    this.appendValueInput("delimiter")
        .appendField("구분자")
    this.appendValueInput("dtype")
        .appendField("dtype");  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
    this.setTooltip("Create a list");
    this.setHelpUrl("");
  }
};
