///////////////////////////////////////////////////////
// 2020-12-26
///////////////////////////////////////////////////////

Blockly.Blocks['create_list'] = {
  init: function () {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("/img/Collection/C0-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }))
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

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C13-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_13_ARRAYSUM).appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg.COLLECTION_13_REVERSE, "reverse"
            ],
            [
                Blockly.Msg.COLLECTION_13_SORT, "sort"
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

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C15-logo.png", 25, 23, {
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
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("Create a list");
        this.setHelpUrl("");
    }
  };

//2020-12-29 양승국 블록 추가
Blockly.Blocks['create_ziphap'] = {
    init: function () {
        this.appendDummyInput()
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
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("Create a list");
        this.setHelpUrl("");
    }
};

//////////////////////////////////////////////////////
// 실험실

// 딕셔너리(신버전)
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
  

