///////////////////////////////////////////////////////
// 2020-12-26
///////////////////////////////////////////////////////

Blockly.Blocks['create_list'] = {
  init: function () {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("/img/Collection/C1-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldVariable("my_list"), "list")
          .appendField(" = [");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("]");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_COLLECTION_HUE}");
      this.setTooltip("Create a list");
      this.setHelpUrl("");
  }
};


//2020-12-27-전우진-global
Blockly.Blocks['global'] = {
  init: function () {
      this.appendDummyInput()
          .appendField("global");
      this.appendValueInput("text")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_COLLECTION_HUE}");
      this.setTooltip('');
      this.setHelpUrl('');
  },
};


// 리스트 정렬, 뒤집기
Blockly.Blocks['list_sort_reverse'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C3-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput()
        .appendField(Blockly.Msg.COLLECTION_NEW_LIST2);
        this.appendValueInput("LIST").appendField(Blockly.Msg.COLLECTION_13_ARRAYSUM).setCheck(null);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg.COLLECTION_13_SORT, "sort"
            ],
            [
                Blockly.Msg.COLLECTION_13_REVERSE, "reverse"
            ]
        ]), "NAME");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setOutput(true, null);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['change_collection'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C0-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput()
        .appendField(Blockly.Msg.CHANGE_COLLECTION);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD, "list"
            ],
            [
                Blockly.Msg.COLLECTION_7_TUPLE, "tuple"
            ],
            [
                Blockly.Msg.COLLECTION_10_SET, "set"
            ],
            [
                Blockly.Msg.COLLECTION_8_DICT, "dict"
            ]
        ]), "collection");
        this.appendValueInput("LIST").appendField(Blockly.Msg.COLLECTION_13_ARRAYSUM).setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setOutput(true, null);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 리스트에서 값 찾기
Blockly.Blocks['list_index'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C14-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_14_FINDVALUE);
        this.appendValueInput("LIST").setCheck(null);
        this.appendDummyInput().appendField("(" + Blockly.Msg.COLLECTION_14_INDEX);
        this.appendValueInput("INDEX").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


// 리스트 삽입
Blockly.Blocks['list_insert'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C2-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_15_INSERTTOLIST);
        this.appendValueInput("LIST").setCheck(null);
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_15_INDEX);
        this.appendValueInput("INDEX").setCheck(null);
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_15_VALUE);
        this.appendValueInput("VALUE").setCheck(null);
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_15_END);
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
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_16_LIST).appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg.COLLECTION_16_EXTEND, "extend"
            ],
            [
                Blockly.Msg.COLLECTION_16_EXTEND, "count"
            ],
            [
                Blockly.Msg.COLLECTION_16_COUNT, "pop"
            ],
            [
                Blockly.Msg.COLLECTION_16_POP, "remove"
            ],
            [
                Blockly.Msg.COLLECTION_16_APPEND, "append"
            ]
        ]), "NAME").appendField("->").appendField("(" + Blockly.Msg.COLLECTION_16_LIST);
        this.appendValueInput("LIST").setCheck(null);
        this.appendDummyInput().appendField(", " + Blockly.Msg.COLLECTION_16_ELEMETNT);
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

// 리스트 자르기
Blockly.Blocks['list_dot'] = {
    init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C17-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
      this.appendDummyInput()
          .appendField("[" + Blockly.Msg.COLLECTION_17_SPLIT +"]");
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

  //2020-12-29 양승국 블록 추가
  Blockly.Blocks['create_tuple'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("/img/Collection/C8-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"   
            }))
            .appendField("튜플")
            .appendField(new Blockly.FieldVariable("my_tuple"), "list")
            .appendField(" = (");
        this.appendValueInput("text")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_LIST2_HUE}");//"%{BKY_COLLECTION_HUE}");
        this.setTooltip("Create a list");
        this.setHelpUrl("");
    }
  };

//2020-12-29 양승국 블록 추가
Blockly.Blocks['create_ziphap'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("/img/Collection/C9-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
            }))
            .appendField("집합")
            .appendField(new Blockly.FieldVariable("my_set"), "list")
            .appendField(" = (");
        this.appendValueInput("text")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SET_HUE}");//"%{BKY_COLLECTION_HUE}");
        this.setTooltip("Create a list");
        this.setHelpUrl("");
    }
};

// 딕셔너리 - 버전1
Blockly.Blocks['create_dict'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("/img/Collection/C11-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
            }))
            .appendField("딕셔너리")
            .appendField(new Blockly.FieldVariable("my_dict"), "list")
            .appendField(" = {");
        this.appendValueInput("text")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("}");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_DICT_HUE}");//"%{BKY_COLLECTION_HUE}");
        this.setTooltip("Create a list");
        this.setHelpUrl("");
    }
};

// 딕셔너리 - 버전2
Blockly.Blocks['dict1'] = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {Blockly.Block}
     */
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("/img/Collection/C8-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE"}))
            .appendField(new Blockly.FieldVariable("my_dict"), "list")
            .appendField(" = ");
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_8_DICT);
        this.setColour("%{BKY_DICT_HUE}");
        this.updateShape_();
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
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

// 딕셔너리 옵션 블록 수정2021-01-05 ysk
Blockly.Blocks['dic_menu1'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C12-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField(Blockly.Msg.COLLECTION_9_DICTOPTION);
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_9_DICVAR).appendField(new Blockly.FieldVariable("my_dict"), "list")
            .appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg.COLLECTION_9_DROPDOWN_OUTPUTKEY, "getkeys"
            ],
            [
                Blockly.Msg.COLLECTION_9_DROPDOWN_OUTPUVAL, "getvalues"
            ],
            [
                "키,값쌍얻기", "item"
            ],
            [
                "키,값쌍모두지우기", "clear"
            ]
        ]), "dic");
        this.setInputsInline(true);
        this.setColour("%{BKY_DICT_HUE}");
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
  
// 집합 선택
Blockly.Blocks['set_menu1'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C10-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField("집합 다루기");;
        this.appendValueInput("SET1").setCheck(null);
        this.appendValueInput("SET2").setCheck(null).appendField(Blockly.Msg.COLLECTION_11_SELECTSET);
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_11_VALCHANGE).appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg.COLLECTION_11_UNION, "union"
            ],
            [
                Blockly.Msg.COLLECTION_11_INTERSECTION, "intersection"
            ],
            [
                Blockly.Msg.COLLECTION_11_DIFFERENCE, "difference"
            ]
        ]), "set_menu");                                                                 
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SET_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 집합 선택
Blockly.Blocks['set_menu1_2'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C10-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField("집합 다루기");;
        this.appendValueInput("SET1").setCheck(null);
        this.appendValueInput("SET2").setCheck(null).appendField(Blockly.Msg.COLLECTION_11_SELECTSET);
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_11_VALCHANGE).appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg.COLLECTION_11_ADD, "add"
            ],
            [
                Blockly.Msg.COLLECTION_11_UPDATE, "update"
            ],
            [
                Blockly.Msg.COLLECTION_11_REMOVE, "remove"
            ]
        ]), "set_menu2");                                                                 
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SET_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 라운드형 반복 조건 블록
Blockly.Blocks['forif'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C0-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendValueInput("SET0");
        this.appendValueInput("SET1").setCheck(null);
        this.appendValueInput("SET2").setCheck(null).appendField("for");          
        this.appendValueInput("SET3").setCheck(null).appendField("in");   
        this.appendValueInput("SET4").setCheck(null).appendField("if");
        this.appendValueInput("SET5");                                          
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setstyle("list_blocks");
        this.setColour("%{BKY_COLLECTION_HUE}");//"%{BKY_LIST_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 라운드형 반복 조건 블록
Blockly.Blocks['forif2'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C0-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendValueInput("SET0").setCheck(null);
        this.appendValueInput("SET1").setCheck(null);
        this.appendValueInput("SET2").setCheck(null).appendField("for");          
        this.appendValueInput("SET3").setCheck(null).appendField("in");     
        this.appendValueInput("SET4").setCheck(null);                                       
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setstyle("list_blocks");
        this.setColour("%{BKY_COLLECTION_HUE}");//"%{BKY_LIST_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['map_filter'] = {
    init: function() {
      this.appendValueInput("val1")
          .setCheck(null)
          .appendField("[내장함수]")
          .appendField(new Blockly.FieldDropdown([["map()","map"], ["filter()","filter"]]), "function");
      this.appendValueInput("val2")
          .setCheck(null);
      this.setInputsInline(true);
      this.setColour("%{BKY_COLLECTION_HUE}");
    this.setOutput(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    }
  };

  //2021-01-05 ysk

// va_sel
Blockly.Blocks['va_sel'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C12-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField("값선택").appendField(new Blockly.FieldVariable("df"), "list").appendField("[");
        this.appendValueInput("dic1").setCheck(null);
        this.appendDummyInput().appendField("]");
        this.setInputsInline(true);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// va_sel
Blockly.Blocks['va_del'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C12-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField("값삭제").appendField("del ").appendField(new Blockly.FieldVariable("df"), "list").appendField("[");
        this.appendValueInput("dic1").setCheck(null);
        this.appendDummyInput().appendField("]");
        this.setInputsInline(true);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// va_ser
Blockly.Blocks['va_ser'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C12-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField("키조사");
        this.appendValueInput("dic1").setCheck(null);
        this.appendDummyInput().appendField(" in ").appendField(new Blockly.FieldVariable("my_dict"), "list");
        this.setInputsInline(true);
        this.setColour("%{BKY_DICT_HUE}");
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// va_id
Blockly.Blocks['va_id'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C12-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField("객체주소값 (");
        this.appendValueInput("dic1").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setColour("%{BKY_DICT_HUE}");
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};