Blockly.Blocks['printc'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Text/T1-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField("결과 출력 ");
        this.appendValueInput("content").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_TEXTS_HUE}");
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
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['sump'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C12-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendValueInput("i").setCheck(null).appendField("배열 합계");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['lrgraph'] = {
    init: function () {
        this.appendDummyInput().appendField("[선형회귀 그래프 출력]");
        this.appendValueInput("x").setCheck(null).appendField("X_data");
        this.appendValueInput("y").setCheck(null).appendField("Y_data");
        this.appendValueInput("w").setCheck(null).appendField("가중치");
        this.appendValueInput("b").setCheck(null).appendField("편향");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
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
        this.appendDummyInput().appendField("[로지스틱 회귀 그래프 출력]");
        this.appendValueInput("x").setCheck(null).appendField("X_data");
        this.appendValueInput("y").setCheck(null).appendField("Y_data");
        this.appendValueInput("w").setCheck(null).appendField("가중치");
        this.appendValueInput("b").setCheck(null).appendField("편향");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['csv2'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Machine_Learning/M1-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"

        })).appendField("csv 불러오기").appendField(new Blockly.FieldTextInput(""), "csv_url");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(20);
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
Blockly.Blocks['csv3'] = {
    init: function () {
        this.appendDummyInput().appendField('[CSV 파일 로드]')
        var dropdown = new Blockly.FieldDropdown(this.dynamicOptions);
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Machine_Learning/M1-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField(new Blockly.FieldTextInput("default"), "csv_url");
        this.appendDummyInput().appendField('X_data').appendField(new Blockly.FieldVariable("xData"), "var_x").appendField('Y_data').appendField(new Blockly.FieldVariable("yData"), "var_y")
        this.appendDummyInput().appendField('Y_data 컬럼 선택').appendField(dropdown, 'OPTIONS');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
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
    init: function () {
        this.appendValueInput("model").setCheck(null).appendField("[머신러닝 모델 생성] 모델");
        this.appendDummyInput().appendField("모델 종류 ");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([
            [
                "선형회귀", "LinearRegression"
            ],
            [
                "로지스틱회귀", "LogisticRegression"
            ],
            [
                "결정트리", "DecisionTreeClassifier"
            ]
        ]), "cate");
        this.appendDummyInput().appendField(" X_train ").appendField(new Blockly.FieldVariable("xData"), "x");
        this.appendDummyInput().appendField(" Y_train ").appendField(new Blockly.FieldVariable("yData"), "y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// ///////////////////////////////데이터전처리 라벨링//////////////////////20200909 이진형
Blockly.Blocks['labelencoder'] = {
    init: function () {
        this.appendDummyInput().appendField("[데이터 라벨 인코딩] ");
        this.appendValueInput("df").setCheck(null).appendField("데이터");
        this.appendDummyInput().appendField("컬럼설정");
        this.appendDummyInput().appendField("").appendField(new Blockly.FieldTextInput("컬럼명"), "column").appendField("  ");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// /////////////////////라이브러리 추가블록////////////////////////20200910 이진형
// Blockly.Blocks['import_lib'] = {
//     init: function () {
//         this.appendDummyInput().appendField("라이브러리 추가  ").appendField("라이브러리 선택  : ");
//         this.appendDummyInput().appendField(new Blockly.FieldDropdown([
//             [
//                 "넘파이", "numpy"
//             ],
//             [
//                 "판다스", "pandas"
//             ],
//             [
//                 "그래프", "matplotlib.pyplot"
//             ]
//         ]), "lib");

//         this.appendValueInput("var").setCheck(null).appendField(" 라이브러리 변수 :");
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }make_moons
// };

Blockly.Blocks['import_dataset'] = {
    init: function () {
        this.appendDummyInput().appendField("[사이킷런 데이터셋]  ").appendField(new Blockly.FieldDropdown([
            [
                "보스턴 집 값 데이터 ", "load_boston"
            ],
            [
                "손글씨 데이터", "load_digits"
            ],
            [
                "당뇨병 데이터", "load_diabetes"
            ],
            [
                "붓꽃 데이터", "load_iris"
            ],
            [
                "와인 품질 데이터", "load_wine"
            ],
        ]), "dataset_name");
        this.appendValueInput("x_data").setCheck(null).appendField("X_data");
        this.appendValueInput("y_data").setCheck(null).appendField("Y_data");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['random_import'] = {
    init: function () {
        this.appendDummyInput().appendField("[무작위 데이터셋 생성]  ").appendField(new Blockly.FieldDropdown([
            [
                "blobs", "make_blobs"
            ],
            [
                "moons", "make_moons"
            ]
        ]), "dataset_name");
        this.appendValueInput("x_data").setCheck(null).appendField("X_data");
        this.appendValueInput("y_data").setCheck(null).appendField("Y_data");
        this.appendDummyInput().appendField("샘플 수").appendField(new Blockly.FieldTextInput("100"), "sa");
        this.appendDummyInput().appendField("특성 개수").appendField(new Blockly.FieldTextInput("2"), "fe");
        this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("0"), "seed");

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 2020-10-15 정지현 추가
Blockly.Blocks['make_circles'] = {
    init: function() {
      this.appendValueInput("x_data")
          .setCheck(null)
          .appendField("[무작위 데이터셋 생성 - Circles] X_data");
      this.appendValueInput("y_data")
          .setCheck(null)
          .appendField("Y_data ");
      this.appendDummyInput()
          .appendField("샘플 수 ")
          .appendField(new Blockly.FieldTextInput("100"), "n_samples");
      this.appendDummyInput()
          .appendField("거리 비율 (Factor)")
          .appendField(new Blockly.FieldTextInput("0.7"), "factor");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['train_test_split'] = {
    init: function () {
        this.appendDummyInput().appendField("[데이터 분리] ")
        this.appendValueInput("x_data").setCheck(null).appendField("X_Data");
        this.appendValueInput("y_data").setCheck(null).appendField("Y_Data");
        this.appendValueInput("x_train").setCheck(null).appendField("X_train");
        this.appendValueInput("x_test").setCheck(null).appendField("X_test");
        this.appendValueInput("y_train").setCheck(null).appendField("Y_train");
        this.appendValueInput("y_test").setCheck(null).appendField("Y_test");
        this.appendDummyInput().appendField("Test Size").appendField(new Blockly.FieldTextInput("0.2"), "test_size");
        this.appendDummyInput().appendField("Data Shuffle").appendField(new Blockly.FieldDropdown([
            [
                "예", "True"
            ],
            [
                "아니오", "False"
            ]
        ]), "shuffle");
        this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("0"), "seed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['jin_train_test_split'] = {
    init: function () {
        this.appendDummyInput().appendField("[데이터 분리] ")
        this.appendValueInput("x_data").setCheck(null).appendField("X_data ");
        this.appendValueInput("y_data").setCheck(null).appendField("Y_data ");
        this.appendValueInput("x_train").setCheck(null).appendField("X_train ");
        this.appendValueInput("x_test").setCheck(null).appendField("Y_train");
        this.appendValueInput("y_train").setCheck(null).appendField("X_test ");
        this.appendValueInput("y_test").setCheck(null).appendField("Y_test ");
        this.appendDummyInput().appendField("Test Size ").appendField(new Blockly.FieldTextInput("0.2"), "test_size");
        this.appendDummyInput().appendField("Data Shuffle ").appendField(new Blockly.FieldDropdown([
            [
                "예", "True"
            ],
            [
                "아니오", "False"
            ]
        ]), "shuffle");
        this.appendDummyInput().appendField("Seed ").appendField(new Blockly.FieldTextInput("0"), "seed");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['model_score'] = {
    init: function () {
        this.appendValueInput("model_name").setCheck(null).appendField("[모델 평가]  모델");
        this.appendValueInput("x_test").setCheck(null).appendField("X_test");
        this.appendValueInput("y_test").setCheck(null).appendField("Y_test");
        this.setInputsInline(true);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['model_predict'] = {
    init: function () {
        this.appendValueInput("model").setCheck(null).appendField("[모델 예측] 모델");
        this.appendValueInput("NAME").setCheck(null).appendField("예측 값");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// ////////////////////////////////////python basic block
// 딕셔너리(구버전)
Blockly.Blocks['create_dict'] = {
    init: function () {
        this.appendValueInput("dict1").setCheck(null);
        this.appendValueInput("dict2").setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_TUPLE_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 딕셔너리(신버전)
Blockly.Blocks['dict'] = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {Blockly.Block}
     */
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C8-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField("딕셔너리");
        this.setColour("%{BKY_DICT_HUE}");
        this.updateShape_();
        this.setOutput(true, null);
        this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
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
        var containerBlock = workspace.newBlock('dict_create_with_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('lists_create_with_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
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
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (var i = 0; i < this.itemCount_; i++) {
            var connection = this.getInput('ADD' + i).connection.targetConnection;
            var connection2 = this.getInput('ADD2' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }

        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
            Blockly.Mutator.reconnect(connections[i], this, 'ADD2' + i);
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
        var j = 0;
        while (itemBlock) {
            var input = this.getInput('ADD' + i);
            var input = this.getInput('ADD2' + j);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            // itemBlock.valueConnection_ = input2 && input2.connection.targetConnection;
            i++;
            j++;
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
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
            // .appendField(Blockly.Msg['LISTS_CREATE_EMPTY_TITLE']);
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i).appendField("key" + i);
            }
            if (!this.getInput('ADD2' + i)) {
                var input2 = this.appendValueInput('ADD2' + i).appendField("values" + i);
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ADD' + i)) {
            this.removeInput('ADD' + i);
            i++;
        }
        while (this.getInput('ADD2' + i)) {
            this.removeInput('ADD2' + i);
            i++;
        }
    }
};

// 딕셔너리 블록

Blockly.Blocks['dict_create_with_container'] = { /**
     * Mutator block for list container.
     * @this {Blockly.Block}
     */
    init: function () {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField("딕셔너리 항목 추가");
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_CONTAINER_TOOLTIP']);
        this.contextMenu = false;
        this.setColour(230);
    }
};

// 딕셔너리 옵션 블록
Blockly.Blocks['dic_menu'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C9-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField("딕셔너리 옵션").appendField(new Blockly.FieldDropdown([
            [
                "값선택", "selectvalues"
            ],
            [
                "값출력1", "printvalues1"
            ],
            [
                "값출력2", "printvalues2"
            ],
            [
                "값추가/변경", "addvalues"
            ],
            [
                "값삭제", "delvalues"
            ],
            [
                "dict로 변경", "changedict"
            ],
            [
                "key값 추출", "getkeys"
            ],
            [
                "values값 추출", "getvalues"
            ]
        ]), "dic");
        this.appendDummyInput().appendField("dic변수");
        this.appendValueInput("dic1").setCheck(null);
        this.appendDummyInput().appendField("값1");
        this.appendValueInput("dic2").setCheck(null);
        this.appendDummyInput().appendField("값2");
        this.appendValueInput("dic3")
        this.setInputsInline(true);
        this.setColour("%{BKY_DICT_HUE}");
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


// 집합
Blockly.Blocks['set'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C10-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField("집합");
        this.appendValueInput("SET").setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SET_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 집합 선택
Blockly.Blocks['set_menu'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C11-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendValueInput("SET1").setCheck(null).appendField(new Blockly.FieldDropdown([
            [
                "합집합", "union"
            ],
            [
                "교집합", "intersection"
            ],
            [
                "차집합", "difference"
            ],
            [
                "원소추가", "add"
            ],
            [
                "리스트추가", "update"
            ],
            [
                "원소제거", "remove"
            ]
        ]), "set_menu");
        this.appendValueInput("SET2").setCheck(null).appendField("집합 선택: (A and B), 값 변경: (집합A and 바꿀값)");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SET_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['tuple'] = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {Blockly.Block}
     */
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C7-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField("튜플");
        this.setColour("%{BKY_TUPLE_HUE}");
        this.updateShape_();
        this.setOutput(true, null);
        this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
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
        var containerBlock = workspace.newBlock('tuple_create_with_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('lists_create_with_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
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
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
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
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
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
            // .appendField(Blockly.Msg['LISTS_CREATE_EMPTY_TITLE']);
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i).setAlign(Blockly.ALIGN_RIGHT);
                if (i == 0) { // input.appendField(Blockly.Msg['LISTS_CREATE_WITH_INPUT_WITH']);
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

// 튜플 블록

Blockly.Blocks['tuple_create_with_container'] = { /**
     * Mutator block for list container.
     * @this {Blockly.Block}
     */
    init: function () {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField("튜플 항목 추가");
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_CONTAINER_TOOLTIP']);
        this.contextMenu = false;
        this.setColour(230);
    }
};

// 반복문(파이썬 스타일)
Blockly.Blocks['for_python'] = {
    init: function () {
        this.appendDummyInput().appendField("변수");
        this.appendValueInput("var").setCheck(null);
        this.appendDummyInput().appendField("를");
        this.appendValueInput("range").setCheck(null);
        this.appendDummyInput().appendField("만큼 반복");
        this.setInputsInline(true);
        this.setColour(230);
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 반복문(파이썬 스타일), range 블록
Blockly.Blocks['for_range'] = {
    init: function () {
        this.appendDummyInput().appendField("range()");
        this.appendValueInput("for_range").setCheck(null);
        this.setInputsInline(true);
        this.setColour(230);
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


// 사이킷런 MLP 블록
// Blockly.Blocks['sklearn_mlp'] = {
//     init: function() {
//       this.appendValueInput("sklearn_mlp_lib_val")
//           .setCheck(null)
//           .appendField("변수명 :");
//       this.appendDummyInput()
//           .appendField("MLP 분류기 (")
//           .appendField("은닉층 개수 :")
//           .appendField(new Blockly.FieldTextInput("10,10,10"), "sklearn_mlp_hidden_layer_sizes ")
//           .appendField("활성화 함수 :")
//           .appendField(new Blockly.FieldDropdown([["Identity","sklearn_MLP_activation_identity"], ["Logistic","sklearn_MLP_activation_logistic"], ["Tanh","sklearn_MLP_activation_tanh"], ["Relu","sklearn_MLP_activation_relu"]]), "sklearn_mlp_activation_Option")
//           .appendField("최적화 함수 :")
//           .appendField(new Blockly.FieldDropdown([["Lbfgs","sklearn_MLP_Optimizer_Lbfgs"], ["SGD","sklearn_MLP_Optimizer_SGD"], ["Adam","sklearn_MLP_Optimizer_Adam"]]), "sklearn_MLP_Optimizer_Option")
//           .appendField("학습률 :")
//           .appendField(new Blockly.FieldTextInput("0.001"), "sklearn_MLP_learning_rate")
//           .appendField("학습 반복 수:")
//           .appendField(new Blockly.FieldTextInput("200"), "sklearn_MLP_epochs")
//           .appendField("Seed :")
//           .appendField(new Blockly.FieldTextInput("0"), "sklearn_MLP_seed");
//       this.setInputsInline(true);
//       this.setPreviousStatement(true, null);
//       this.setNextStatement(true, null);
//       this.setColour(240);
//    this.setTooltip("");
//    this.setHelpUrl("");
//     }
// };
Blockly.Blocks['sklearn_mlp_classifier'] = {
    init: function () {
        this.appendDummyInput().appendField("[MLP 분류기] ")
        this.appendValueInput("sklearn_mlp_lib_val").setCheck(null).appendField("모델");
        // this.appendValueInput("sklearn_mlp_fit_X").setCheck(null).appendField("X_train");
        // this.appendValueInput("sklearn_mlp_fit_Y").setCheck(null).appendField("Y_train");
        this.appendDummyInput().appendField("(").appendField("은닉층 개수").appendField(new Blockly.FieldTextInput("100"), "sklearn_mlp_hidden_layer_sizes ");
        this.appendValueInput("sklearn_MLP_Max_iter").setCheck(null).appendField("Epochs");
        this.appendDummyInput().appendField('Batch Size').appendField(new Blockly.FieldTextInput("16"), "sklearn_MLP_batch_size").appendField("Activation").appendField(new Blockly.FieldDropdown([
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
        ]), "sklearn_mlp_activation_Option").appendField("Optimizer").appendField(new Blockly.FieldDropdown([
            [
                "Adam", "sklearn_MLP_Optimizer_Adam"
            ],
            [
                "Lbfgs", "sklearn_MLP_Optimizer_Lbfgs"
            ],
            [
                "SGD", "sklearn_MLP_Optimizer_SGD"
            ]
        ]), "sklearn_MLP_Optimizer_Option").appendField("학습률").appendField(new Blockly.FieldTextInput("0.001"), "sklearn_MLP_learning_rate").appendField("Warm Start").appendField(new Blockly.FieldDropdown([
            [
                "False", "sklearn_MLP_Warm_Start_False"
            ],
            [
                "True", "sklearn_MLP_Warm_Start_True"
            ]
        ]), "sklearn_MLP_Warm_Start_Option").appendField("Seed").appendField(new Blockly.FieldTextInput("0"), "sklearn_MLP_random_state");

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['sklearn_mlp_regressor'] = {
    init: function () {
        this.appendDummyInput().appendField("[MLP 예측기] ")
        this.appendValueInput("sklearn_mlp_lib_val").setCheck(null).appendField("모델");
        // this.appendValueInput("sklearn_mlp_fit_X").setCheck(null).appendField("X_train");
        // this.appendValueInput("sklearn_mlp_fit_Y").setCheck(null).appendField("Y_train");
        this.appendDummyInput().appendField("(").appendField("은닉층 개수").appendField(new Blockly.FieldTextInput("100"), "sklearn_mlp_hidden_layer_sizes ");
        this.appendValueInput("sklearn_MLP_Max_iter").setCheck(null).appendField("Epochs");
        this.appendDummyInput().appendField('Batch Size').appendField(new Blockly.FieldTextInput("16"), "sklearn_MLP_batch_size").appendField("Activation").appendField(new Blockly.FieldDropdown([
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
        ]), "sklearn_mlp_activation_Option").appendField("Optimizer").appendField(new Blockly.FieldDropdown([
            [
                "Adam", "sklearn_MLP_Optimizer_Adam"
            ],
            [
                "Lbfgs", "sklearn_MLP_Optimizer_Lbfgs"
            ],
            [
                "SGD", "sklearn_MLP_Optimizer_SGD"
            ]
        ]), "sklearn_MLP_Optimizer_Option").appendField("학습률").appendField(new Blockly.FieldTextInput("0.001"), "sklearn_MLP_learning_rate").appendField("Warm Start").appendField(new Blockly.FieldDropdown([
            [
                "False", "sklearn_MLP_Warm_Start_False"
            ],
            [
                "True", "sklearn_MLP_Warm_Start_True"
            ]
        ]), "sklearn_MLP_Warm_Start_Option").appendField("Seed").appendField(new Blockly.FieldTextInput("0"), "sklearn_MLP_random_state");

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 2020-10-15 정지현 추가
Blockly.Blocks['mlp_loss'] = {
    init: function() {
      this.appendValueInput("model")
          .setCheck(null)
          .appendField("[MLP 손실값 추출 ] 모델");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


// //MLP fit
// Blockly.Blocks['sklearn_mlp_fit'] = {
//     init: function() {
//       this.appendValueInput("sklearn_mlp_fit_lib_var")
//           .setCheck(null)
//           .appendField("변수 :");
//       this.appendValueInput("sklearn_mlp_fit_X")
//           .setCheck(null)
//           .appendField(".fit ( X :");
//       this.appendValueInput("sklearn_mlp_fit_Y")
//           .setCheck(null)
//           .appendField(" Y :");
//       this.appendDummyInput()
//           .appendField(")");
//       this.setInputsInline(true);
//       this.setPreviousStatement(true, null);
//       this.setNextStatement(true, null);
//       this.setColour(230);
//    this.setTooltip("");
//    this.setHelpUrl("");
//     }
// };


// kMeans
// Blockly.Blocks['k_means'] = {
//     init: function () {
//         this.appendDummyInput().appendField("[KMeans 모델 생성] ");
//         this.appendValueInput("model").setCheck(null).appendField("모델");
//         // this.appendDummyInput().appendField("그룹 개수 ").appendField(new Blockly.FieldTextInput(""), "cnt");
//         this.appendValueInput("model")
//         .setCheck(null).appendField("그룹 개수 ")
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("%{BKY_SCIKITLEARN_HUE}");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
Blockly.Blocks['k_means'] = {
    init: function() {
      this.appendValueInput("model")
          .setCheck(null)
          .appendField("[KMeans 모델 생성] 모델 ");
      this.appendValueInput("cnt")
          .setCheck(null)
          .appendField("그룹 개수 ");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

// for
Blockly.Blocks['py_for'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Repeat/R1-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.REPEAT_1_REPEAT);
        this.appendValueInput("item").setCheck(null).appendField(Blockly.Msg.REPEAT_1_VARIABLE);
        this.appendValueInput("list").setCheck(null).appendField(Blockly.Msg.REPEAT_1_LIST);
        this.appendDummyInput().appendField(":");
        this.appendStatementInput("value").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_LOOPS_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// for문안 range,xyz
Blockly.Blocks['range3'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Repeat/R6-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendValueInput("x").setCheck(null).appendField(Blockly.Msg.REPEAT_6_RANGE +"(");
        this.appendValueInput("y").setCheck(null).appendField(",");
        this.appendValueInput("z").setCheck(null).appendField(",");
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_LOOPS_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// increase, 증가 등등
Blockly.Blocks['increase'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Repeat/R3-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendValueInput("NUMBER").setCheck(null);
        this.appendValueInput("VALUE").setCheck(null).appendField(new Blockly.FieldDropdown([
            [
                "+=", "+="
            ],
            [
                "-=", "-="
            ],
            [
                "*=", "*="
            ],
            [
                "/=", "/="
            ],
            [
                "%=", "%="
            ]
        ]), "NAME");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_LOOPS_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// 기초 연산
Blockly.Blocks['Oper'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Operation/O2-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendValueInput("A").setCheck(null);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([
            [
                "+", "+"
            ],
            [
                "-", "-"
            ],
            [
                "*", "*"
            ],
            [
                "/", "/"
            ],
            [
                "%", "%"
            ],
            [
                "=", "="
            ],
            [
                "**", "**"
            ]
        ]), "NAME");
        this.appendValueInput("B").setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_MATH_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//
Blockly.Blocks['break_block'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Repeat/R7-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.REPEAT_7_BREAK);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_LOOPS_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


// return 블럭, 반환
Blockly.Blocks['py_return'] = {
    init: function () {
        this.appendValueInput("NAME").setCheck(null).appendField("반환");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_MATH_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 형 변환
Blockly.Blocks['convert'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Operation/O13-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([
            [
                "정수형", "int("
            ],
            [
                "실수형", "float("
            ],
            [
                "문자형", "str("
            ],
            [
                "불자료형", "bool("
            ],
            
        ]), "NAME");
        this.appendValueInput("B").setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_MATH_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


// 변수 설정
Blockly.Blocks['val_set'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[ 외부 입력 ]");
      this.appendValueInput("a")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("=");
      this.appendValueInput("b")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_MATH_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

// 리스트 자르기
Blockly.Blocks['list_dot'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[리스트 자르기]");
        this.appendValueInput("list")
        .setCheck(null);
      this.appendDummyInput()
          .appendField("[");
      this.appendValueInput("a")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(":");
      this.appendValueInput("b")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_COLLECTION_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
// for range(범위)
Blockly.Blocks['range1'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Repeat/R4-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.REPEAT_4_RANGE+"(");
        this.appendValueInput("VALUE1").setCheck(null);
        this.appendDummyInput().appendField(",");
        this.appendValueInput("VALUE2").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_LOOPS_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['range2'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Repeat/R5-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.REPEAT_5_RANGE+"(" + Blockly.Msg.REPEAT_5_LENGTH + "(");
        this.appendValueInput("VALUE1").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_LOOPS_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// list_append
Blockly.Blocks['list_append'] = {
    init: function () {
        this.appendValueInput("LIST").setCheck(null).appendField("리스트 요소추가 -> 리스트");
        this.appendValueInput("value").setCheck(null).appendField("추가내용 (");
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 리스트 정렬, 뒤집기
Blockly.Blocks['list_sort_reverse'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C13-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField("리스트").appendField(new Blockly.FieldDropdown([
            [
                "뒤집기", "reverse"
            ],
            [
                "정렬", "sort"
            ]
        ]), "NAME");
        this.appendValueInput("LIST").setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


// list_index
Blockly.Blocks['list_index'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C14-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField("리스트에서 값찾기 -> ");
        this.appendValueInput("LIST").setCheck(null);
        this.appendDummyInput().appendField("(인덱스");
        this.appendValueInput("INDEX").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// list_insert
Blockly.Blocks['list_insert'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C15-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField("리스트삽입 -> 리스트");
        this.appendValueInput("LIST").setCheck(null);
        this.appendDummyInput().appendField("(인덱스");
        this.appendValueInput("INDEX").setCheck(null);
        this.appendDummyInput().appendField(", 값");
        this.appendValueInput("VALUE").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// 리스트 삭제, 끄집어내기, 요소의개수, 확장
Blockly.Blocks['list_remove_pop_count_extend'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C16-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField("리스트").appendField(new Blockly.FieldDropdown([
            [
                "확장", "extend"
            ],
            [
                "요소의개수", "count"
            ],
            [
                "끄집어내기", "pop"
            ],
            [
                "요소삭제", "remove"
            ],
            [
                "요소추가", "append"
            ]
        ]), "NAME").appendField("->").appendField("(리스트");
        this.appendValueInput("LIST").setCheck(null);
        this.appendDummyInput().appendField(", 요소");
        this.appendValueInput("VALUE").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['add_string'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Text/T15-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendValueInput("NAME").setCheck(null);
        this.appendValueInput("NAME2").setCheck(null).appendField("+");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_TEXTS_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


// text_replace
Blockly.Blocks['text_replace'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Text/T13-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField("문자열변경 -> 변수 ");
        this.appendValueInput("TEXT").setCheck(null);
        this.appendDummyInput().appendField("( 기존");
        this.appendValueInput("A").setCheck(null);
        this.appendDummyInput().appendField(", 변경");
        this.appendValueInput("B").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_TEXTS_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


// 결측치 조회
Blockly.Blocks['missing_value_inquiry'] = {
    init: function () {
        this.appendValueInput("data").setCheck(null)
        this.appendDummyInput().appendField("결측치 조회하기");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// 통계 정보 조회
Blockly.Blocks['stats_inquiry'] = {
    init: function () {
        this.appendValueInput("data").setCheck(null)
        this.appendDummyInput().appendField("통계 정보 조회하기");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['vis_tree'] = {
    init: function () {
        this.appendValueInput("model").setCheck(null).appendField("[결정트리 그래프 출력] 모델");
        this.appendValueInput("x_data").setCheck(null).appendField("X_data");
        this.appendValueInput("y_data").setCheck(null).appendField("Ydata: ");
        this.appendDummyInput().appendField("X축 컬럼위치").appendField(new Blockly.FieldTextInput("1"), "s");
        this.appendDummyInput().appendField("Y축 컬럼위치").appendField(new Blockly.FieldTextInput("2"), "e");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['input'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Text/T2-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField("데이터 입력");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_TEXTS_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['fetch_openml'] = {
    init: function () {
        this.appendDummyInput().appendField("[openml 데이터셋] ").appendField(new Blockly.FieldDropdown([
            [
                "타이타닉", "titanic"
            ],
            [
                "집 값", "house_price"
            ],
            [
                "Mnist", "mnist_784"
            ]
        ]), "NAME");
        this.appendValueInput("x").setCheck(null).appendField("X_data");
        this.appendValueInput("y").setCheck(null).appendField("Y_data");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['import_scikit'] = {
    init: function () {
        this.appendDummyInput().appendField("[임포트] 메트릭스 ").appendField(new Blockly.FieldDropdown([
            [
                "정확도", "accuracy_score"
            ],
            [
                "AUC", "metrics"
            ],
            [
                "AP", "average_precision_score"
            ],
            [
                "PRC", "precision_score"
            ],
            [
                "MAE", "mean_absolute_error"
            ],
            [
                "MSE", "mean_squared_error"
            ],
            [
                "Classification Report", "classification_report"
            ],
            [
                "Median", "median_absolute_error"
            ]
        ]), "metrics");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['acc_score'] = {
    init: function () {
        this.appendDummyInput().appendField("[분류 정확도] ");
        this.appendValueInput("yt").setCheck(null).appendField("Y_true");
        this.appendValueInput("yp").setCheck(null).appendField("Y_pred");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['AUC'] = {
    init: function () {
        this.appendDummyInput().appendField("[AUC 계산] ");
        this.appendValueInput("yt").setCheck(null).appendField("X 축");
        this.appendValueInput("yp").setCheck(null).appendField("Y 축");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['AP'] = {
    init: function () {
        this.appendDummyInput().appendField("[AP 계산] ");
        this.appendValueInput("yt").setCheck(null).appendField("Y_true");
        this.appendValueInput("yp").setCheck(null).appendField("Y_score");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['precision'] = {
    init: function () {
        this.appendDummyInput().appendField("[PRC 계산] ");
        this.appendValueInput("yt").setCheck(null).appendField("Y_true");
        this.appendValueInput("yp").setCheck(null).appendField("Y_pred");
        this.appendDummyInput().appendField("평균 ").appendField(new Blockly.FieldDropdown([
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

Blockly.Blocks['mae'] = {
    init: function () {
        this.appendDummyInput().appendField("[MAE 계산(Mean)] ");
        this.appendValueInput("yt").setCheck(null).appendField("Y_true");
        this.appendValueInput("yp").setCheck(null).appendField("Y_pred");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['mse'] = {
    init: function () {
        this.appendDummyInput().appendField("[MSE 계산] ");
        this.appendValueInput("yt").setCheck(null).appendField("Y_true");
        this.appendValueInput("yp").setCheck(null).appendField("Y_pred");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['median'] = {
    init: function () {
        this.appendDummyInput().appendField("[MSE 계산(Median)] ");
        this.appendValueInput("yt").setCheck(null).appendField("Y_true");
        this.appendValueInput("yp").setCheck(null).appendField("Y_pred");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// //////////////////////////// 신경망 //////////////////////////////
Blockly.Blocks['mlp_classifier'] = {
    init: function () {
        this.appendDummyInput().appendField("[MLP 분류기]");
        this.appendValueInput("model").setCheck(null).appendField("모델");
        this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("1"), "numSeed").appendField("Epochs").appendField(new Blockly.FieldTextInput("300"), "numEpochs");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['mlp_regressor'] = {
    init: function () {
        this.appendDummyInput().appendField("[MLP 예측기]");
        this.appendValueInput("model").setCheck(null).appendField("모델");
        this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("1"), "numSeed").appendField("Epochs").appendField(new Blockly.FieldTextInput("500"), "numEpochs");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// //////////////////////////// Linear //////////////////////////////
Blockly.Blocks['logistic_regression'] = {
    init: function () {
        this.appendDummyInput().appendField("[로지스틱 회귀 모델]");
        this.appendValueInput("model").setCheck(null).appendField("모델");
        this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("0"), "numSeed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['logistic_regression_cv'] = {
    init: function () {
        this.appendDummyInput().appendField("[로지스틱 회귀 CV 모델]");
        this.appendValueInput("model").setCheck(null).appendField("모델");
        this.appendDummyInput().appendField("교차검증 횟수").appendField(new Blockly.FieldTextInput("5"), "numCv").appendField("Seed").appendField(new Blockly.FieldTextInput("0"), "numSeed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['perceptron'] = {
    init: function () {
        this.appendDummyInput().appendField("[퍼셉트론 모델]");
        this.appendValueInput("model").setCheck(null).appendField("모델");
        this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("0"), "numSeed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['ridge_classifier'] = {
    init: function () {
        this.appendDummyInput().appendField("[Ridge 분류기]");
        this.appendValueInput("model").setCheck(null).appendField("모델");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['sgd_classifier'] = {
    init: function () {
        this.appendDummyInput().appendField("[SGD 분류기]");
        this.appendValueInput("model").setCheck(null).appendField("모델");
        this.appendDummyInput().appendField("Epochs").appendField(new Blockly.FieldTextInput("1000"), "numEpochs");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['linear_regression'] = {
    init: function () {
        this.appendDummyInput().appendField("[선형회귀 모델]");
        this.appendValueInput("model").setCheck(null).appendField("모델");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['ridge'] = {
    init: function () {
        this.appendDummyInput().appendField("[Ridge 예측기]");
        this.appendValueInput("model").setCheck(null).appendField("모델");
        this.appendDummyInput().appendField("Alpha").appendField(new Blockly.FieldTextInput("1.0"), "numAlpha");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['bayesian_ridge'] = {
    init: function () {
        this.appendDummyInput().appendField("[베이지안 모델]");
        this.appendValueInput("model").setCheck(null).appendField("모델");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['sgd_regressor'] = {
    init: function () {
        this.appendDummyInput().appendField("[SGD 예측기]");
        this.appendValueInput("model").setCheck(null).appendField("모델");
        this.appendDummyInput().appendField("Epochs").appendField(new Blockly.FieldTextInput("1000"), "numEpochs");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// MLP 라이브러리 임포트
Blockly.Blocks['import_mlp'] = {
    init: function () {
        this.appendDummyInput().appendField("[임포트] 신경망 ").appendField(new Blockly.FieldDropdown([
            [
                "MLP분류기", "MLPClassifier"
            ],
            [
                "MLP예측기", "MLPRegressor"
            ],
            [
                "BernoulliRBM", "BernoulliRBM"
            ]
        ]), "lib");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// 선형모델 라이브러리 임포트
Blockly.Blocks['import_linear'] = {
    init: function () {
        this.appendDummyInput().appendField("[임포트] 선형모델 ").appendField(new Blockly.FieldDropdown([
            [
                "선형회귀 모델", "LinearRegression"
            ],
            [
                "SGD 예측기", "SGDRegressor"
            ],
            [
                "Ridge 예측기", "Ridge"
            ],
            [
                "로지스틱 회귀 모델", "LogisticRegression"
            ],
            [
                "로지스틱 회귀 CV모델", "LogisticRegressionCV"
            ],
            [
                "Ridge 분류기", "RidgeClassifier"
            ],
            [
                "베이지안 모델", "BayesianRidge"
            ],
            [
                "SGD 분류기", "SGDClassifier"
            ],
            [
                "퍼셉트론 모델", "Perceptron"
            ]
        ]), "lib");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// Kmeans 라이브러리 임포트
Blockly.Blocks['import_kmeans'] = {
    init: function () {
        this.appendDummyInput().appendField("[임포트] Kmeans ");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// fit
Blockly.Blocks['model_fit'] = {
    init: function () {
        this.appendValueInput("model").appendField("[모델 학습] 모델");
        this.appendValueInput("X_train").appendField(" X_train");
        this.appendValueInput("Y_train").appendField("Y_train");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// K_Means fit
Blockly.Blocks['kmeans_fit'] = {
    init: function () {
        this.appendValueInput("model").appendField("[KMeans 모델 학습] 모델");
        this.appendValueInput("X_train").appendField(" X_train");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['sivalidation'] = {
    init: function () {
        this.appendDummyInput().appendField("[모델 검증] 검증기").appendField(new Blockly.FieldDropdown([
            [
                "교차검증", "cross_validate"
            ],
            [
                "교차추정값", "cross_val_predict"
            ],
            [
                "교차검증 점수", "cross_val_score"
            ],
            [
                "학습곡선", "learning_curve"
            ],
            [
                "순열교차검증", "permutation_test_score"
            ],
            [
                "검증곡선", "validation_curve"
            ]
        ]), "vali");
        this.appendValueInput("em").setCheck(null).appendField("estimator");
        this.appendValueInput("x").setCheck(null).appendField("X");
        this.appendValueInput("y").setCheck(null).appendField("Y");
        this.appendDummyInput().appendField("교차검증 횟수").appendField(new Blockly.FieldTextInput("3"), "cv");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['import_sivalidation'] = {
    init: function () {
        this.appendDummyInput().appendField("[임포트] 셀렉션").appendField(new Blockly.FieldDropdown([
            [
                "KFold", "KFold"
            ],
            [
                "StratifiedKFold", "StratifiedKFold"
            ],
            [
                "train_test_split", "train_test_split"
            ],
            [
                "교차검증 점수", "cross_val_score"
            ],
            [
                "학습곡선", "learning_curve"
            ],
            [
                "순열교차검증", "permutation_test_score"
            ],
            [
                "검증곡선", "validation_curve"
            ]
        ]), "vali");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['kfold'] = {
    init: function () {
        this.appendValueInput("model").setCheck(null).appendField("[KFold] 모델");
        this.appendDummyInput().appendField("Splits").appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.appendDummyInput().appendField("Data Shuffle").appendField(new Blockly.FieldDropdown([
            [
                "예", "True"
            ],
            [
                "아니요", "False"
            ]
        ]), "shuffle");
        this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("None"), "seed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['stratifiedkfold'] = {
    init: function () {
        this.appendValueInput("model").setCheck(null).appendField("[KFold] 모델");
        this.appendDummyInput().appendField("Splits").appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.appendDummyInput().appendField("Data Shuffle").appendField(new Blockly.FieldDropdown([
            [
                "예", "True"
            ],
            [
                "아니요", "False"
            ]
        ]), "shuffle");
        this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("None"), "seed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['bernoullirbm'] = {
    init: function () {
        this.appendValueInput("model").setCheck(null).appendField("[BernoulliRBM] 모델");
        this.appendDummyInput().appendField("은닉층 개수").appendField(new Blockly.FieldTextInput("2"), "hi");
        this.appendDummyInput().appendField(" 학습률").appendField(new Blockly.FieldTextInput("0.1"), "lr");
        this.appendDummyInput().appendField(" 배치사이즈").appendField(new Blockly.FieldTextInput("10"), "batch");
        this.appendDummyInput().appendField(" Epochs").appendField(new Blockly.FieldTextInput("10"), "epochs");
        this.appendDummyInput().appendField(" Seed").appendField(new Blockly.FieldTextInput("None"), "seed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['import_scipy'] = {
    init: function () {
        this.appendDummyInput().appendField("[임포트] 사이파이").appendField(new Blockly.FieldDropdown([
            [
                "curve_fit", "curve_fit"
            ],
            [
                "interp1d", "interp1d"
            ],
            [
                "UnivariateSpline", "UnivariateSpline"
            ],
            [
                "quad", "quad"
            ],
            [
                "trapz", "trapz"
            ],
            [
                "wavfile", "wavfile"
            ],
            [
                "signal", "signal"
            ] 

        ]), "scipy");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['curve_fit'] = {
    init: function () {
        this.appendValueInput("fun").setCheck(null).appendField("[Curve_Fit] 함수");
        this.appendValueInput("x").setCheck(null).appendField("X_data");
        this.appendValueInput("y").setCheck(null).appendField("Y_data");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['univariatespline'] = {
    init: function () {
        this.appendValueInput("x").setCheck(null).appendField("[UnivariateSpline] X_data");
        this.appendValueInput("y").setCheck(null).appendField("Y_data");
        this.appendDummyInput().appendField(new Blockly.FieldTextInput("1"), "s");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['quad'] = {
    init: function () {
        this.appendValueInput("x").setCheck(null).appendField("[Quad] 함수");
        this.appendDummyInput().appendField(new Blockly.FieldTextInput("0"), "s");
        this.appendDummyInput().appendField(new Blockly.FieldTextInput("1000"), "e");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['import_tree'] = {
    init: function () {
        this.appendDummyInput().appendField("[임포트] 결정트리").appendField(new Blockly.FieldDropdown([["Decisiontree", "DecisionTreeClassifier"]]), "tree");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['decision'] = {
    init: function () {
        this.appendValueInput("model").setCheck(null).appendField("[결정트리 모델] 모델");
        // this.appendValueInput("depth")
        //       .setCheck(null)
        //       .appendField("깊이");
        // this.appendValueInput("seed")
        //       .setCheck(null)
        //       .appendField("Seed");
        this.appendDummyInput().appendField("깊이").appendField(new Blockly.FieldTextInput("null"), "depth");
        this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("null"), "seed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['coef'] = {
    init: function () {
        this.appendValueInput("coef").setCheck(null).appendField("[계수 추출] 모델");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['intercept'] = {
    init: function () {
        this.appendValueInput("intercept").setCheck(null).appendField("[절펀 추출] 모델");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['tree_text'] = {
    init: function () {
        this.appendValueInput("trr").setCheck(null).appendField("[결정트리 시각화] 모델");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


// //////////////////프롤로그 임시
Blockly.Blocks['prolog_list'] = {
    init: function () {
        this.appendValueInput("bar").setCheck(null).appendField("[사실]");
        this.appendStatementInput("content").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, "Array");
        // this.setNextStatement(true, null);
        this.setColour("%{BKY_PROLOG_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['prolog_list_rule'] = {
    init: function () {
        this.appendValueInput("bar").setCheck(null).appendField("[사실]");
        this.appendStatementInput("content").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, "Array");
        // this.setNextStatement(true, null);
        this.setColour("%{BKY_PROLOG_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['constant'] = {
    init: function () {
        this.appendDummyInput().appendField("[상수]").appendField(new Blockly.FieldTextInput(""), "NAME");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_PROLOG_HUE}");
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
        this.appendDummyInput().appendField("[함수]").appendField(new Blockly.FieldTextInput(""), "NAME");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_PROLOG_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['rumpf'] = {
    init: function () {
        this.appendDummyInput().appendField("[Rumpf]").appendField(new Blockly.FieldDropdown([
            [
                "and", "and"
            ],
            [
                "or", "or"
            ]
        ]), "seperate");
        this.appendStatementInput("NAME").setCheck(null);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, "Array");
        this.setColour("%{BKY_PROLOG_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['Rule'] = {
    init: function () {
        this.appendDummyInput().appendField("[규칙]");
        this.appendStatementInput("Fact").setCheck(null);
        this.appendStatementInput("Rumpf").setCheck(null);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, "Array");
        this.setColour("%{BKY_PROLOG_HUE}");
        this.setTooltip("Ein einfacher Fakt, welches aus einer Relation und einem oder mehreren Termen besteht.");
        this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/regeln.htm");
    }
};
Blockly.Blocks['abfrage'] = {
    init: function () {
        this.appendDummyInput().appendField("[Abfrage] | 활성").appendField(new Blockly.FieldCheckbox("false"), "active");
        this.appendStatementInput("NAME").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, "Array");
        this.setColour("%{BKY_PROLOG_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['separate'] = {
    init: function () {
        this.appendDummyInput().appendField("[AND | OR 설정]").appendField(new Blockly.FieldDropdown([
            [
                "and", "and"
            ],
            [
                "or", "or"
            ]
        ]), "separate");
        this.appendStatementInput("NAME").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, "Array");
        this.setColour("%{BKY_PROLOG_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['np_dot'] = {
    init: function() {
      this.appendValueInput("dot")
          .setCheck(null)
          .appendField("[ 행렬 곱 ] (");
      this.appendValueInput("dot2")
          .setCheck(null)
          .appendField(",");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_NUMPY_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
