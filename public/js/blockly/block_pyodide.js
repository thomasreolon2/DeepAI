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
        var dropdown = new Blockly.FieldDropdown(this.dynamicOptions);
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Machine_Learning/M1-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField(new Blockly.FieldTextInput("default"), "csv_url");
        this.appendDummyInput().appendField('X : ')
            .appendField(new Blockly.FieldVariable("xData"), "var_x").appendField('Y : ').appendField(new Blockly.FieldVariable("yData"), "var_y")
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
    init: function () {
        this.appendValueInput("model").setCheck(null).appendField("머신러닝 모델 생성").appendField("-> 모델명 :");
        this.appendDummyInput().appendField("모델 종류 : ");
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
        this.appendDummyInput().appendField(" 학습 데이터 :").appendField(new Blockly.FieldVariable("xData"), "x");
        this.appendDummyInput().appendField(" 정답 데이터 :").appendField(new Blockly.FieldVariable("yData"), "y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['csvdataframe_J'] = {
    init: function () {
        this.appendValueInput("pd").setCheck(null).appendField("데이터 프레임 생성");
        this.appendValueInput("csv").setCheck(null).appendField("CSV 읽기");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// ///////////////////////////////데이터전처리 라벨링//////////////////////20200909 이진형
Blockly.Blocks['labelencoder'] = {
    init: function () {
        this.appendValueInput("df").setCheck(null).appendField("데이터 프레임 :");
        this.appendDummyInput().appendField("  ").appendField(new Blockly.FieldTextInput("컬럼명"), "column").appendField("  ");
        this.appendDummyInput().appendField("데이터 라벨링 ");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// /////////////////////라이브러리 추가블록////////////////////////20200910 이진형
Blockly.Blocks['import_lib'] = {
    init: function () {
        this.appendDummyInput().appendField("라이브러리 추가  ").appendField("라이브러리 선택  : ");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([
            [
                "넘파이", "numpy"
            ],
            [
                "판다스", "pandas"
            ],
            [
                "그래프", "matplotlib.pyplot"
            ]
        ]), "lib");
        
        this.appendValueInput("var").setCheck(null).appendField(" 라이브러리 변수 :");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['import_dataset'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("데이터셋 불러오기 ->")
          .appendField(new Blockly.FieldDropdown([["보스턴 집 값 데이터 ","load_boston"], ["손글씨 데이터","load_digits"], ["당뇨병 데이터","load_diabetes"], ["붓꽃 데이터","load_iris"], ["와인 품질 데이터","load_wine"]]), "dataset_name");
      this.appendValueInput("x_data")
          .setCheck(null)
          .appendField("특성 데이터:");
      this.appendValueInput("y_data")
          .setCheck(null)
          .appendField("정답 데이터");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['train_test_split'] = {
    init: function() {
      this.appendValueInput("x_data")
          .setCheck(null)
          .appendField("활용할 특성 데이터 :");
      this.appendValueInput("y_data")
          .setCheck(null)
          .appendField("활용할 정답 데이터 :");
      this.appendValueInput("x_train")
          .setCheck(null)
          .appendField("학습 특성 데이터 :");
      this.appendValueInput("x_test")
          .setCheck(null)
          .appendField("테스트 특성 데이터 :");
      this.appendValueInput("y_train")
          .setCheck(null)
          .appendField("학습 정답 데이터 :");
      this.appendValueInput("y_test")
          .setCheck(null)
          .appendField("테스트 정답 데이터 :");
      this.appendDummyInput()
          .appendField("테스트 사이즈 : ")
          .appendField(new Blockly.FieldTextInput("0.2"), "test_size");
      this.appendDummyInput()
          .appendField("데이터 섞기 :")
          .appendField(new Blockly.FieldDropdown([["예","True"], ["아니오","False"]]), "shuffle");
      this.appendDummyInput()
          .appendField("Seed 값 : ")
          .appendField(new Blockly.FieldTextInput("0"), "seed");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['model_score'] = {
    init: function() {
      this.appendValueInput("model_name")
          .setCheck(null)
          .appendField("모델 평가 -> 모델명 :");
      this.appendValueInput("x_test")
          .setCheck(null)
          .appendField("테스트 특성 데이터 :");
      this.appendValueInput("y_test")
          .setCheck(null)
          .appendField("테스트 정답 데이터 :");
      this.setInputsInline(true);
      this.setColour(230);
      this.setOutput(true, null);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['model_predict'] = {
    init: function() {
      this.appendValueInput("model")
          .setCheck(null)
          .appendField("예측 모델 : ");
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("값 : ");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
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
        this.setColour(230);
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
        this.appendDummyInput().appendField("딕셔너리");
        this.setColour(230);
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
        this.setColour(230);
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


// 집합
Blockly.Blocks['set'] = {
    init: function () {
        this.appendDummyInput().appendField("집합");
        this.appendValueInput("SET").setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 집합 선택
Blockly.Blocks['set_menu'] = {
    init: function () {
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
        this.setColour(230);
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
        this.appendDummyInput().appendField("튜플");
        this.setColour(230);
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
Blockly.Blocks['sklearn_mlp'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(" MLP 분류기 (")
          .appendField("은닉층 개수 :")
          .appendField(new Blockly.FieldTextInput(""), "sklearn_MLP_hidden_size")
          .appendField("활성화 함수 :")
          .appendField(new Blockly.FieldDropdown([["Identity","sklearn_MLP_activation _identity"], ["Logistic","sklearn_MLP_activation_logistic"], ["Tanh","sklearn_MLP_activation_tanh"], ["Relu","sklearn_MLP_activation_relu"]]), "sklearn_MLP_activation _Option")
          .appendField("최적화 함수 :")
          .appendField(new Blockly.FieldDropdown([["Lbfgs","sklearn_MLP_Optimizer_Lbfgs"], ["SGD","sklearn_MLP_Optimizer_SGD"], ["Adam","sklearn_MLP_Optimizer_Adam"]]), "sklearn_MLP_Optimizer_Option")
          .appendField("Max iter :")
          .appendField(new Blockly.FieldTextInput(""), "sklearn_MLP_Max iter")
          .appendField("학습률 :")
          .appendField(new Blockly.FieldTextInput(""), "sklearn_MLP_learning rate")
          .appendField("random state :")
          .appendField(new Blockly.FieldTextInput(""), "sklearn_MLP_random state");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230); 
   this.setTooltip("");
   this.setHelpUrl("");
    } 
  };  

  // kMeans
Blockly.Blocks['k_means'] = {
    init: function() {
        this.appendValueInput("model").setCheck(null).appendField("모델 :");
        this.appendValueInput("data").setCheck(null).appendField("데이터 :");
        this.appendDummyInput().appendField("그룹 개수 ").appendField(new Blockly.FieldTextInput("ex)1,2,3,4"), "cnt")
        this.appendValueInput("label").setCheck(null).appendField("라벨 :");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

// return 블럭
Blockly.Blocks['py_return'] = {
init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("return");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
}
};