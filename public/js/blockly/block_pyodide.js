Blockly.Blocks['printc'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Text/T13-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField("결과 출력 ");
        this.appendValueInput("content").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['nj_array'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Numeric/N1-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField("배열 생성").appendField(new Blockly.FieldTextInput("ex)1,2,3,4"), "array");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(80);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['forp'] = {
    init: function () {
        this.appendValueInput("i").setCheck(null).appendField("변수");
        this.appendValueInput("range").setCheck(null).appendField("를");
        this.appendDummyInput().appendField("범위 까지 반복");
        this.appendStatementInput("for").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['sump'] = {
    init: function () {
        this.appendValueInput("i").setCheck(null).appendField("배열 합계");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['lrgraph'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Machine_Learning/M12-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField("선형회귀 그래프 출력->");
        this.appendValueInput("x").setCheck(null).appendField("X 값 :");
        this.appendValueInput("y").setCheck(null).appendField("Y 값 :");
        this.appendValueInput("w").setCheck(null).appendField("가중치 값 :");
        this.appendValueInput("b").setCheck(null).appendField("편향 값 :");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['array_get'] = {
    init: function () {
        this.appendValueInput("array").setCheck(null).appendField("");
        this.appendValueInput("NAME").setCheck(null).appendField("배열의 ");
        this.appendDummyInput().appendField("번째 배열 인덱스");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['logicgraph'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Machine_Learning/M13-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField("로지스틱 회귀 그래프 출력->");
        this.appendValueInput("x").setCheck(null).appendField("X 값 :");
        this.appendValueInput("y").setCheck(null).appendField("Y 값 :");
        this.appendValueInput("w").setCheck(null).appendField("가중치 값 :");
        this.appendValueInput("b").setCheck(null).appendField("편향 값 :");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
var dynamicDropdownOptions_ = [];
function addOptions(text) {
    dynamicDropdownOptions_.push([text, text]);
}
function removeOptions() {
    dynamicDropdownOptions_ = [];
}
Blockly.Blocks['csv2'] = {
    init: function () {
        var dropdown = new Blockly.FieldDropdown(this.dynamicOptions);
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Machine_Learning/M1-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField(new Blockly.FieldTextInput("default"), "csv_url");
        this.appendDummyInput().appendField('X : ').appendField(new Blockly.FieldVariable("xData"), "var_x").appendField('Y : ').appendField(new Blockly.FieldVariable("yData"), "var_y")
        this.appendDummyInput().appendField('라벨로 지정할 컬럼명 : ').appendField(dropdown, 'OPTIONS');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    dynamicOptions: function () {
        if (! dynamicDropdownOptions_.length) {
            return [['선택하세요.', 'OPTION-1']];
        }
        return dynamicDropdownOptions_;
    }
};
Blockly.Blocks['scikit_learn'] = {
  init: function() {
    this.appendValueInput("model")
        .setCheck(null)
        .appendField("머신러닝 모델 생성")
        .appendField("-> 모델명 :");
    this.appendDummyInput()
        .appendField("모델 종류 : ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["선형회귀","LinearRegression()"], ["로지스틱회귀","LogisticRegression()"], ["결정트리","Nomal"]]), "cate");
    this.appendValueInput("x")
        .setCheck(null)
        .appendField(" 학습 데이터 :");
    this.appendValueInput("y")
        .setCheck(null)
        .appendField("정답 데이터 :");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};