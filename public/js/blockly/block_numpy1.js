
//numpy_order_static
Blockly.Blocks['numpy_order_static'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 통계 / 순서 ]")
        .appendField(new Blockly.FieldDropdown([["배열 최소값 ( np.amin )","numpy_order_static_amin"], ["배열 최대값 ( np.amax )","numpy_order_static_amax"], ["Nan 제외 최소값 ( np.nanmin)","numpy_order_static_nMin"], ["Nan 제외 최대값 ( np.nanmax)","numpy_order_static_nMax"], ["축에 따른 범위 ( np.ptp )","numpy_order_static_ptp"], ["백분위 수 ( np.percentile )","numpy_order_static_percentile"], ["Nan 제외 백분위 수 ( np.nanpercentile )","numpy_order_static_nanpercentile"], ["분위수  ( np.quantile )","numpy_order_static_quantile"], ["Nan 백분위 수 ( np.nanquantile )","numpy_order_static_nanquantile"]]), "numpy_order_static_opt");
    this.appendValueInput("numpy_order_static_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl(""); 
  }
};

//numpy_averages_variances
Blockly.Blocks['numpy_averages_variances'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 통계 / 평균 & 분산 ]")
        .appendField(new Blockly.FieldDropdown([["중앙 값 ( np.median )","np.median"], ["가중 평균 ( np.average )","np.average"], ["산술 평균 ( np.mean )","np.mean"], ["표준 편차 ( np.std )","np.std"], ["분산 ( np.var )","np.var"]]), "numpy_Averages_variances_opt");
    this.appendValueInput("numpy_Averages_variances_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_correlating
Blockly.Blocks['numpy_correlating'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 통계 / 상관 ]")
        .appendField(new Blockly.FieldDropdown([["상관 계수 (np.corrcoef)","numpy_Correlating_corrcoef"], ["2개 시퀸스 상호상관 (np.correlate)","numpy_Correlating_correlate"], ["가중치에 따른 공분산 (np.cov)","numpy_Correlating_cov"]]), "numpy_Correlating_opt");
    this.appendValueInput("numpy_Correlating_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_sorting
Blockly.Blocks['numpy_sorting'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 정렬 ]")
        .appendField(new Blockly.FieldDropdown([["정렬 (np.sort)","numpy_Sorting_sort"], ["간접 정렬 (np.lexsort)","numpy_Sorting_lexsort"], ["분할 (np.partition)","numpy_Sorting_partition"], ["간접 분할 (np.argpartition)","numpy_Sorting_argpartition"]]), "numpy_Sorting_opt");
    this.appendValueInput("numpy_Sorting_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  } 
};

//numpy_searching
Blockly.Blocks['numpy_searching'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 정렬 / 검색 ]")
        .appendField(new Blockly.FieldDropdown([["최대값 인덱스 (np.argmax)","numpy_argmax"], ["최소값 인덱스 (np.argmin)","numpy_Sorting_argmin"], ["0 아닌 인덱스 (np.nonzero)","numpy_Searching_nonzero"], ["조건 요소 (np.where)","numpy_Searching_where"], ["조건 만족 (np.extract)","numpy_Searching_extract"]]), "numpy_Searching_opt");
    this.appendValueInput("numpy_Searching")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_random_sample
Blockly.Blocks['numpy_random_sample'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 랜덤 / 단순 ]")
        .appendField(new Blockly.FieldDropdown([["임의 값 (np.rand)","numpy_Random_sample_rand"], ["표준 정규 분포 (np.randn)","numpy_Random_sample_randn"], ["임의 정수 (np.randint)","numpy_Random_sample_randint"], ["0 ~ 1 부동 소수점 (np.random)","numpy_Random_sample_random"], ["배열 무작위 (np.choice)","numpy_Random_sample_choice"], ["임의 바이트 (np.bytes)","numpy_Random_sample_bytes"]]), "numpy_Random_sample_opt");
    this.appendValueInput("numpy_Random_sample_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_random_permutations
Blockly.Blocks['numpy_random_permutations'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 랜덤 / 순열 ]")
        .appendField(new Blockly.FieldDropdown([["섞기 (np.shuffle)","numpy_Random_Permutations_shuffle"], ["무작위 치환 (np.permutation)","numpy_Random_Permutations_permutation"]]), "numpy_Random_Permutations_opt");
    this.appendValueInput("numpy_Random_Permutations_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_random_distributions
Blockly.Blocks['numpy_random_distributions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 랜덤 / 분포1 ]")
        .appendField(new Blockly.FieldDropdown([["이항 분포 (np.binomial)","numpy_Random_Distributions_binomial"], ["카이제곱 분포 (np.chisquare)","numpy_Random_Distributions_chisquare"], ["Dirichlet 분포 (np.dirichlet)","numpy_Random_Distributions_dirichlet"], ["지수 분포 (np.exponential)","numpy_Random_Distributions_exponential"], ["F 분포 (np.f)","numpy_Random_Distributions_f"], ["감마 분포 (np.gamma)","numpy_Random_Distributions_gamma"], ["기하학적 분포 (np.geometric)","numpy_Random_Distributions_geometric"], ["Gumbel 분포 (np.gumbel)","numpy_Random_Distributions_gumbel"], ["초기 하 분포 (np.hypergeometric)","numpy_Random_Distributions_hypergeometric"], ["표본 추출 (np.laplace)","numpy_Random_Distributions_laplace"], ["로지스틱 분포 (np.logistic)","numpy_Random_Distributions_logistic"]]), "numpy_Random_Distributions_opt");
    this.appendValueInput("numpy_Random_Distributions_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl(""); 
  }
};

//numpy_random_distributions_two
Blockly.Blocks['numpy_random_distributions_two'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 랜덤 / 분포2 ]")
        .appendField(new Blockly.FieldDropdown([["로그 정규 분포 (np.lognormal)","numpy_Random_Distributions_two_lognormal"], ["대수 계열 분포 (np.logseries)","numpy_Random_Distributions_two_logseries"], ["다항 분포 (np.multinomial)","numpy_Random_Distributions_two_multinomial"], ["다변량 정규 분포 (np.multivariate_normal)","numpy_Random_Distributions_two_multivariate_normal"], ["음 이항 분포 (np.negative_binomial)","numpy_Random_Distributions_two_negative_binomial"], ["비중심 카이제곱 분포 (np.noncentral_chisquare)","numpy_Random_Distributions_two_noncentral_chisquare"], ["비 중심 F분포 (np.noncentral_f)","numpy_Random_Distributions_two_noncentral_f"], ["가우스 분포 (np.normal)","numpy_Random_Distributions_two_normal"], ["포아송 분포 (np.poisson)","numpy_Random_Distributions_two_poisson"], ["Rayleigh 분포 (np.rayleigh)","numpy_Random_Distributions_two_rayleigh"], ["표본 지수 분포 (np.standard_exponential)","numpy_Random_Distributions_two_standard_exponential"]]), "numpy_Random_Distributions_two_opt");
    this.appendValueInput("numpy_Random_Distributions_two_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_random_distributions_third
Blockly.Blocks['numpy_random_distributions_third'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 랜덤 / 분포3 ]")
        .appendField(new Blockly.FieldDropdown([["표준 감마 분포 (np.standard_gamma)","numpy_Random_Distributions_third_standard_gamma"], ["표준 정규 분포 (np.standard_normal)","numpy_Random_Distributions_third_standard_normal"], ["삼각 분포 (np.triangular)","numpy_Random_Distributions_third_triangular"], ["균일 분포 (np.uniform)","numpy_Random_Distributions_third_uniform"], ["폰 미제스 분포 (np.vonmises)","numpy_Random_Distributions_third_vonmises"], ["역가우스 분포 (np.wald)","numpy_Random_Distributions_third_wald"], ["Weibull 분포 (np.weibull)","numpy_Random_Distributions_third_weibull"], ["Zipf 분포 (np.zipf)","numpy_Random_Distributions_third_zipf"]]), "numpy_Random_Distributions_third_opt");
    this.appendValueInput("numpy_Random_Distributions_third_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_random_generator
Blockly.Blocks['numpy_random_generator'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 랜덤 / 생성기 ]")
        .appendField(new Blockly.FieldDropdown([["규칙 난수 (np.seed)","numpy_Random_generator_seed"], ["생성기 내부 상태 (np.get_state)","numpy_Random_generator_get_state"], ["튜플 내부 상태 설정 (np.set_state)","numpy_Random_generator_set_state"]]), "numpy_Random_generator_opt");
    this.appendValueInput("numpy_Random_generator_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_mathematical_functions
Blockly.Blocks['numpy_mathematical_functions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 수학 / 삼각 ]")
        .appendField(new Blockly.FieldDropdown([["사인 (np.sign)","np.sign"], ["코사인 (np.cos)","np.cos"], ["탄젠트 (np.tan)","np.tan"], ["역 사인 (np.arcsin)","np.arcsin"], ["역 코사인 (np.arccos)","np.arccos"], ["역 탄젠트 (np.arctan)","np.arctan"], ["라디안 -> 도 (np.degrees)","np.degrees"], ["도 -> 라디안 (np.radians)","np.radians"]]), "numpy_Mathematical functions_opt");
    this.appendValueInput("numpy_Mathematical functions_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_mathematical_functions
Blockly.Blocks['numpy_hyperbolic_functions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 수학 / 쌍곡선 ]")
        .appendField(new Blockly.FieldDropdown([["쌍곡 사인 (np.signh)","np.signh"], ["쌍곡 코사인 (np.cosh)","np.cosh"], ["쌍곡 탄젠트 (np.tanh)","np.tanh"], ["역  쌍곡 사인 (np.arcsinh)","np.arcsinh"], ["역 쌍곡 코사인 (np.arccosh)","np.arccosh"], ["역 쌍곡 탄젠트 (np.arctanh)","np.arctanh"]]), "numpy_Hyperbolic functions_opt");
    this.appendValueInput("numpy_Hyperbolic functions_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_rounding
Blockly.Blocks['numpy_rounding'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 수학 / 반올림 ]")
        .appendField(new Blockly.FieldDropdown([["소수 자릿수 (np.around)","np.around"], ["배열 소수 자릿수 (np.round_)","np.round_"], ["가까운 배열 정수 (np.rint)","np.rint"], ["0인접 정수 (np.fix)","np.fix"], ["소수점 제외 (np.trunc)","np.trunc"]]), "numpy_Rounding_opt");
    this.appendValueInput("numpy_Rounding_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_exponents_logarithms
Blockly.Blocks['numpy_exponents_logarithms'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 수학 / 지수 & 로그 ]")
        .appendField(new Blockly.FieldDropdown([["요소별 지수 (np.exp)","(np.exp"], ["요소별 지수 2 **  (np.exp2)","np.exp2"], ["요소별 자연로그 (np.log)","np.log"], ["요소별 로그10 (np.log10)","np.log10"], ["요소별 로그2 (np.log2)","np.log2"]]), "numpy_Exponents_logarithms_opt");
    this.appendValueInput("numpy_Exponents_logarithms_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_arithmetic_operations1
Blockly.Blocks['numpy_arithmetic_operations1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 수학 / 산술1 ]")
        .appendField(new Blockly.FieldDropdown([["요소별 덧셈 (np.add)","np.add"],
                                                ["요소별 뺄셈 (np.subtract)","np.subtract"],
                                                ["요소별 곱셈 (np.multiply)","np.multiply"],
                                                ["요소별 나눗셈 (np.divide)","np.divide"],
                                                ["요소별 양수 (np.positive)","np.positive"],
                                                ["요소별 음수 (np.negative)","np.negative"],
                                                ["요소별 역수 (np.reciprocal)","np.reciprocal"]]), "numpy_Arithmetic_operations_opt");
    this.appendValueInput("numpy_Arithmetic_operations1_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_arithmetic_operations2
Blockly.Blocks['numpy_arithmetic_operations2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 수학 / 산술2 ]")
        .appendField(new Blockly.FieldDropdown([["요소별 거듭제곱 (np.power)","np.power"], ["요소별 나머지 (np.remainder)","np.remainder"], ["요소별 소수&정수 (np.modf)","np.modf"], ["요소별 몫&나머지(np.divmod)","np.divmod"]]), "numpy_Arithmetic_operations2_opt");
    this.appendValueInput("numpy_Arithmetic_operations2_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_handling_complex_numbers
Blockly.Blocks['numpy_handling_complex_numbers'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 수학 / 복소수 ]")
        .appendField(new Blockly.FieldDropdown([["실수 (np.real)","np.real"], ["허수 (np.imag)","np.imag"], ["켤레 복소수 (np.conj)","np.conj"]]), "numpy_Handling complex numbers_opt");
    this.appendValueInput("numpy_Handling complex numbers_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_sums_differences
Blockly.Blocks['numpy_sums_differences'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 수학 / 합계 & 차이 ]")
        .appendField(new Blockly.FieldDropdown([["배열 곱 (np.prod)","np.prod"], ["배열 합계 (np.sum)","np.sum"], ["누적 곱 (np.cumprod)","np.cumprod"], ["누적 합계 (np.cumsum)","np.cumsum"], ["이산 차이 (np.diff)","np.diff"], ["N차원 배열 기울기 (np.gradient)","np.gradient"], ["두배열의 외적 (np.cross)","np.cross"], ["적분 (np.trapz)","np.trapz"]]), "numpy_Sums_differences_opt");
    this.appendValueInput("numpy_Sums_differences_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_matrix_vector_products
Blockly.Blocks['numpy_matrix_vector_products'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 선형대수 / 행렬 & 벡터 ]")
        .appendField(new Blockly.FieldDropdown([["두 배열 내적(np.dot)","np.dot"], ["두 벡터 내적 (np.vdot)","np.vdot"], ["두 벡터 외적 (np.outer)","np.outer"], ["두 배열 행렬곱 (np.matmul)","np.matmul"], ["두 배열 크로네커 곱 (np.kron)","np.kron"]]), "numpy_Matrix_vector_products_opt");
    this.appendValueInput("numpy_Matrix_vector_products_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



//numpy_matrix_decomposition
Blockly.Blocks['numpy_matrix_decomposition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 선형대수 / 분해 ]")
        .appendField(new Blockly.FieldDropdown([["qr 분해 (np.linalg.qr)","np.linalg.qr"], ["특이값 분해 (np.linalg.svd)","np.linalg.svd"], ["촐레스키 (np.linalg.cholesky)","np.linalg.cholesky"]]), "numpy_Matrix_Decomposition_opt");
    this.appendValueInput("numpy_Matrix_Decomposition_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_array_contents
Blockly.Blocks['numpy_array_contents'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 논리 / 배열 요소 ]")
        .appendField(new Blockly.FieldDropdown([["유한성 체크 (np.isfinite)","np.isfinite"], ["양 무한 체크 (np.isposinf)","np.isposinf"], ["음수 무한 체크 (np.isneginf)","np.isneginf"], ["양/음수 무한 체크 (np.isinf)","np.isinf"]]), "numpy_Array_contents_opt");
    this.appendValueInput("numpy_Array_contents_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_comparison
Blockly.Blocks['numpy_comparison'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 논리 / 비교 ]")
        .appendField(new Blockly.FieldDropdown([["허용 오차 (np.allclose)","np.allclose"], ["허용 오차내 동일 논리 (np.isclose)","np.isclose"], ["모양&요소 체크 (np.array_equal)","np.array_equal"], ["배열형태&요소 체크 (np.array_equiv)","np.array_equiv"], ["x1 > x2 체크 (np.greater)","np.greater"], ["x1 >= x2 체크 (np.greater_equal)","np.greater_equal"], ["x1 < x2 체크 (np.less)","np.less"], ["x1 <= x2 체크 (np.less_equal)","np.less_equal"], ["x1 == x2 체크 (np.equal)","np.equal"], ["x1 != x2 체크 (np.not_equal)","np.not_equal"]]), "numpy_Comparison_opt");
    this.appendValueInput("numpy_Comparison_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_string_operations
Blockly.Blocks['numpy_string_operations'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 문자열 / 연산1 ]")
        .appendField(new Blockly.FieldDropdown([["연결 (np.char.add)","np.char.add"],
                                                ["다중 연결 (np.char.multiply)","np.char.multiply"],
                                                ["첫문짜 대문자로 (np.char.capitalize)","np.char.capitalize"],
                                                ["문자열 중심 복사 (np.char.center)","np.char.center"],
                                                ["소문자로 (np.char.lower)","np.char.lower"], 
                                                ["대문자로 (np.char.upper)","np.char.upper"], 
                                                ["선행 문자 제거 (np.char.lstrip)","np.char.lstrip"]]), "numpy_String_operations_opt");
    this.appendValueInput("numpy_String_operations_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_string_operations2
Blockly.Blocks['numpy_string_operations2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 문자열 / 연산2 ]")
        .appendField(new Blockly.FieldDropdown([["대체 (np.char.replace)","np.char.replace"], 
                                                ["왼쪽 정렬 (np.char.ljust)","np.char.ljust"], 
                                                ["오른쪽 정렬 (np.char.rjust)","np.char.rjust"], 
                                                ["구분자 분할 (np.char.split)","np.char.split"], 
                                                ["선행 또는 후행 문자제거(np.char.strip)","np.char.strip"], 
                                                ["0으로 채움 (np.char.zfill)","np.char.zfill"]]), "numpy_String_operations2_opt");
    this.appendValueInput("numpy_String_operations2_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpystring_information
Blockly.Blocks['numpystring_information'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 문자열 / 정보 ]")
        .appendField(new Blockly.FieldDropdown([["특정문자 갯수 확인 (np.char.count)","np.char.count"], 
                                                ["가장 낮은 인덱스 (np.char.find)","np.char.find"], 
                                                ["알파벳 체크 (np.char.isalpha)","np.char.isalpha"], 
                                                ["10진수 체크 (np.char.isdecimal)","np.char.isdecimal"], 
                                                ["숫자 체크 (np.char.isdigit)","np.char.isdigit"], 
                                                ["소문자 체크 (np.char.islower)","(np.char.islower"], 
                                                ["대문자 체크 (np.char.isupper)","np.char.isupper"], 
                                                ["모든 요소 숫자 체크 (np.char.isnumeric)","np.char.isnumeric"], 
                                                ["공백 체크 (np.char.isspace)","np.char.isspace"]]), "numpyString_information_opt");
    this.appendValueInput("numpyString_information_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_changing_array_shape
Blockly.Blocks['numpy_changing_array_shape'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 배열 조작 / 모양 변경 ]")
        .appendField(new Blockly.FieldDropdown([["배열 형태 변경 (np.reshape)","np.reshape"], ["1차원 변경(np.ravel)","np.ravel"], ["배열 축소 (np.flatten)","np.flatten"]]), "numpy_Changing_array_shape_opt");
    this.appendValueInput("numpy_Changing_array_shape_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_transpose_like_operations
Blockly.Blocks['numpy_transpose_like_operations'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 배열조작 / 전치 ]")
        .appendField(new Blockly.FieldDropdown([["새 위치 이동 (np.moveaxis)","np.moveaxis"], ["배열 축 교환 (np.swapaxes)","np.swapaxes"], ["차원 변경 (np.transpose)","np.transpose"]]), "numpy_Transpose_like_operations_opt");
    this.appendValueInput("numpy_Transpose_like_operations_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_changing_number
Blockly.Blocks['numpy_changing_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 배열조작 / 차원수 변경 ]")
        .appendField(new Blockly.FieldDropdown([["최소 1차원 배열 (np.atleast_1d)","np.atleast_1d"], ["최소 2차원 배열 (np.atleast_2d)","np.atleast_2d"], ["최소 3차원 배열 (np.atleast_3d)","np.atleast_3d"], ["1차원 항목 제거 (np.squeeze)","np.squeeze"]]), "numpy_Changing_number_opt");
    this.appendValueInput("numpy_Changing_number_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_changing_kind_array 
Blockly.Blocks['numpy_changing_kind_array'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 배열조작 / 종류 변경 ]")
        .appendField(new Blockly.FieldDropdown([["입력을 배열로 (np.asarray)","np.asarray"], ["입력을 행렬로 (np.asmatrix)","np.asmatrix"], ["Folat 유형으로 (np.asfarray)","np.asfarray"], ["배열 변환 & Nan 확인  (np.asarray_chkfinite)","np.asarray_chkfinite"]]), "numpy_Changing_kind_array_opt");
    this.appendValueInput("numpy_Changing_kind_array_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_joining_arrays
Blockly.Blocks['numpy_joining_arrays'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 배열조작 / 결합 ]")
        .appendField(new Blockly.FieldDropdown([["기존축 배열 (np.concatenate)","np.concatenate"], ["새축 배열 (np.stack)","np.stack"], ["1차원 -> 2차원(열) (np.column_stack)","np.column_stack"]]), "numpy_Joining_arrays_opt");
    this.appendValueInput("numpy_Joining_arrays_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_splitting_arrays
Blockly.Blocks['numpy_splitting_arrays'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 배열조작 / 분할 ]")
        .appendField(new Blockly.FieldDropdown([["여러 하위 배열 (np.split)","np.split"], ["하위 배열 가로 (np.hsplit)","np.hsplit"], ["하위 배열 세로  (np.vsplit)","np.vsplit"]]), "numpy_Splitting_arrays_opt");
    this.appendValueInput("numpy_Splitting_arrays_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_adding_removing_elements
Blockly.Blocks['numpy_adding_removing_elements'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 배열조작 / 추가 & 제거 ]")
        .appendField(new Blockly.FieldDropdown([["하위 배열 삭제 (np.delete)","np.delete"], ["인덱스 앞 삽입 (np.insert)","np.insert"], ["배열 끝 삽입  (np.append)","np.append"], ["지정 모양  (np.resize)","np.resize"], ["고유요소 찾기 (np.unique)","np.unique"]]), "numpy_Adding_removing_elements_opt");
    this.appendValueInput("numpy_Adding_removing_elements_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_adding_removing_elements
Blockly.Blocks['numpy_rearranging_elements'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 배열조작 / 재정렬 ]")
        .appendField(new Blockly.FieldDropdown([["요소 순서 반대 (np.flip)","np.flip"], ["왼쪽/오른쪽 뒤집기 (np.fliplr)","np.fliplr"], ["위/아래 뒤집기  (np.flipud)","np.flipud"], ["새 배열(데이터 변경x)  (np.reshape)","np.reshape"], ["축에 따른 이동 (np.roll)","np.roll"]]), "numpy_Rearranging_elements_opt");
    this.appendValueInput("numpy_Rearranging_elements_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_ones_and_zeros
Blockly.Blocks['numpy_ones_and_zeros'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 배열 생성 / 0 & 1 ]")
        .appendField(new Blockly.FieldDropdown([["초기화 x (np. empty)","np. empty"], ["대각선 1 (np.eye)","np.eye"], ["식별 배열 (np.identity)","np.identity"], ["형태에 따른 1  (np.ones)","np.ones"], ["0으로 채움 (np.zeros)","np.zeros"], ["해당 값으로 채움 (np.full)","np.full"]]), "numpy_Ones and zeros_opt");
    this.appendValueInput("numpy_Ones and zeros_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_from_existing_data
Blockly.Blocks['numpy_from_existing_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 배열 생성 / 기존 데이터 ]")
        .appendField(new Blockly.FieldDropdown([["배열 생성 (np. array)","np.array"], ["입력된 배열 (np.asarray)","np.asarray"], ["입력을 행렬 (np.asmatrix)","np.asmatrix"], ["복사  (np.copy)","np.copy"], ["버퍼를 1차원 (np.frombuffer)","np.frombuffer"], ["텍스트 파일로드 (np.loadtxt)","np.loadtxt"]]), "numpy_From_existing_data_opt");
    this.appendValueInput("numpy_From_existing_data_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_creating_record_arrays
Blockly.Blocks['numpy_creating_record_arrays'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 배열 생성 / 레코드 ]")
        .appendField(new Blockly.FieldDropdown([["레코드 배열 구성 (np.core.records.array)","np.core.records.array"], ["텍스트 레코드 -> Recarray (np.core.records.fromrecords)","np.core.records.fromrecords"], ["이진 레코드 (np.core.records.fromstring)","np.core.records.fromstring"]]), "numpy_Creating_record_arrays_opt");
    this.appendValueInput("numpy_Creating_record_arrays_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_numerical_ranges
Blockly.Blocks['numpy_numerical_ranges'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 배열 생성 / 숫자 범위 ]")
        .appendField(new Blockly.FieldDropdown([["균일 간격 배열 (np.arange)","np.arange"], ["균등 간격 (np.linspace)","np.linspace"], ["로그 균등 간격 (np.logspace)","np.logspace"], ["좌표 행렬 (np.meshgrid)","np.meshgrid"], ["고밀도 다차원 (np.mgrid)","np.mgrid"], ["열린 다차원 (np.ogrid)","np.ogrid"]]), "numpy_Numerical_ranges_opt");
    this.appendValueInput("numpy_Numerical_ranges_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_building_matrices
Blockly.Blocks['numpy_building_matrices'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[ 배열 생성 / 행렬 ]")
        .appendField(new Blockly.FieldDropdown([["대각선 배열 (np.diag)","np.diag"], ["평면 2차원 대각선 (np.diagflat)","np.diagflat"], ["대각선1 나머지0 (np.tri)","np.tri"], ["아래쪽 삼각형 (np.tril)","np.tril"], ["위쪽 삼각형 (np.triu)","np.triu"], ["Vandermonde 행렬 (np.vander)","np.vander"]]), "numpy_Building_matrices_opt");
    this.appendValueInput("numpy_Building_matrices_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};