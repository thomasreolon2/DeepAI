///////////////////////////////////////////////////////
// 2020-12-26
///////////////////////////////////////////////////////

//df_ap
Blockly.Blocks['df_ap'] = {
  init: function () {
      this.appendDummyInput().appendField("[함수적용리턴]").appendField(new Blockly.FieldVariable("df"), "list");
      this.appendDummyInput().appendField(new Blockly.FieldDropdown([
          [
              "시리즈로반환(apply)", ".apply("
          ],
          [
            "프레임으로반환(applymap)", ".applymap("
          ],
      ]), "collection");
      this.appendValueInput("LIST").appendField().setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//df_agg
Blockly.Blocks['df_agg'] = {
  init: function () {
    this.appendDummyInput().appendField("[그룹]").appendField(new Blockly.FieldVariable("df"), "list");
      this.appendValueInput("LIST").appendField(".agg(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour(pandas_color);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};



//뮤테이터 공부

Blockly.Blocks['try_except1'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("try : ");
      this.appendStatementInput("TRY")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("except");
      this.appendValueInput("EXCEPT1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(":");
      this.appendStatementInput("EXCEPT2")
          .setCheck(null);
      //뮤테이터 관련 
      this.setStyle("list_blocks");
      this.itemCount_ = 0;
      this.updateShape_(); 
      this.setMutator(new Blockly.Mutator(['lists_create_with_item1']));   
      //뮤테이터 관련  
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LOGIC_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
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
      var containerBlock = workspace.newBlock('lists_create_with_container1');
      containerBlock.initSvg();
      var connection = containerBlock.getInput('STACK').connection;
      for (var i = 0; i < this.itemCount_; i++) {
        var itemBlock = workspace.newBlock('lists_create_with_item1');
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
          var input = this.appendDummyInput()
          .appendField("except ").appendField(new Blockly.FieldDropdown([["EOFError","EOFError"],["SyntaxError","SyntaxError"], ["NameError","NameError"], ["ZeroDivisionError","ZeroDivisionError"], ["IndexError","IndexError"], ["ValueError","ValueError"], ["KeyError","KeyError"], ["AttributeError","AttributeError"], ["FileNotFoundError","FileNotFoundError"], ["TypeError","TypeError"]]), "DROP" + i).appendField(":");this.appendStatementInput('ADD' + i).setCheck(null).setAlign(Blockly.ALIGN_RIGHT);
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
Blockly.Blocks.lists_create_with_container1 = {   //톱니누르고 오른쪽 workspace
  init: function () {
    this.setStyle("list_blocks");
    this.appendDummyInput().appendField(
      "항목추가"
    );
    this.appendStatementInput("STACK");
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.setColour(125);
    this.contextMenu = !1;
  },
};
Blockly.Blocks.lists_create_with_item1 = {    //톱니누르고 왼쪽 추가하는 블록
  init: function () {
    this.setStyle("list_blocks");
    this.appendDummyInput().appendField("except");
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.setColour(125);
    this.contextMenu = !1;
  },
};





















Blockly.defineBlocksWithJsonArray([
  // if문 
  {
    type: "m1",
    message0: "try: %1",
    args0: [
    { type: "input_dummy" }],
    message1: "%1",
    args1: [{ type: "input_statement", name: "DO0" }],
    message2: "except %1",
    args2: [
    { type: "input_value", name: "IF0" }],
    message3: "%1",
    args3: [{ type: "input_statement", name: "DO1" }],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    mutator: "controls_if_mutator_k",
  },
]);

Blockly.defineBlocksWithJsonArray([
  {
    type: "controls_if_if",
    message0: "%{BKY_CONTROLS_IF_IF_TITLE_IF}",
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_IF_TOOLTIP}",
  },
  {
    type: "controls_if_elseif",
    message0: "%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}",
    previousStatement: null,
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}",
  },
  {
    type: "controls_if_else",
    message0: "%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}",
    previousStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSE_TOOLTIP}",
  },
]);


Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN = {
  elseifCount_: 0,
  elseCount_: 0,
  suppressPrefixSuffix: !0,
  mutationToDom: function () {
    if (!this.elseifCount_ && !this.elseCount_) return null;
    var a = Blockly.utils.xml.createElement("mutation");
    this.elseifCount_ && a.setAttribute("elseif", this.elseifCount_);
    this.elseCount_ && a.setAttribute("else", 1);
    return a;
  },
  domToMutation: function (a) {
    this.elseifCount_ = parseInt(a.getAttribute("elseif"), 10) || 0;
    this.elseCount_ = parseInt(a.getAttribute("else"), 10) || 0;
    this.rebuildShape_();
  },
  decompose: function (a) {
    var b = a.newBlock("controls_if_if");
    b.initSvg();
    for (var c = b.nextConnection, d = 1; d <= this.elseifCount_; d++) {
      var e = a.newBlock("controls_if_elseif");
      e.initSvg();
      c.connect(e.previousConnection);
      c = e.nextConnection;
    }
    this.elseCount_ &&
      ((a = a.newBlock("controls_if_else")),
      a.initSvg(),
      c.connect(a.previousConnection));
    return b;
  },
  compose: function (a) {
    a = a.nextConnection.targetBlock();
    this.elseCount_ = this.elseifCount_ = 0;
    for (var b = [null], c = [null], d = null; a; ) {
      switch (a.type) {
        case "controls_if_elseif":
          this.elseifCount_++;
          b.push(a.valueConnection_);
          c.push(a.statementConnection_);
          break;
        case "controls_if_else":
          this.elseCount_++;
          d = a.statementConnection_;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.nextConnection && a.nextConnection.targetBlock();
    }
    this.updateShape_();
    this.reconnectChildBlocks_(b, c, d);
  },
  saveConnections: function (a) {
    a = a.nextConnection.targetBlock();
    for (var b = 1; a; ) {
      switch (a.type) {
        case "controls_if_elseif":
          var c = this.getInput("IF" + b),
            d = this.getInput("DO" + b);
          a.valueConnection_ = c && c.connection.targetConnection;
          a.statementConnection_ = d && d.connection.targetConnection;
          b++;
          break;
        case "controls_if_else":
          d = this.getInput("ELSE");
          a.statementConnection_ = d && d.connection.targetConnection;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.nextConnection && a.nextConnection.targetBlock();
    }
  },
  rebuildShape_: function () {
    var a = [null],
      b = [null],
      c = null;
    this.getInput("ELSE") &&
      (c = this.getInput("ELSE").connection.targetConnection);
    for (var d = 1; this.getInput("IF" + d); ) {
      var e = this.getInput("IF" + d),
        f = this.getInput("DO" + d);
      a.push(e.connection.targetConnection);
      b.push(f.connection.targetConnection);
      d++;
    }
    this.updateShape_();
    this.reconnectChildBlocks_(a, b, c);
  },
  updateShape_: function () {
    this.getInput("ELSE") && this.removeInput("ELSE");
    for (var a = 1; this.getInput("IF" + a); )
      this.removeInput("IF" + a), this.removeInput("DO" + a), a++;
    for (a = 1; a <= this.elseifCount_; a++)
      this.appendValueInput("IF" + a)
        .setCheck("Boolean")
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF),
        this.appendStatementInput("DO" + a).appendField(
          Blockly.Msg.CONTROLS_IF_MSG_THEN
        );
    this.elseCount_ &&
      this.appendStatementInput("ELSE").appendField(
        Blockly.Msg.CONTROLS_IF_MSG_ELSE
      );
  },
  reconnectChildBlocks_: function (a, b, c) {
    for (var d = 1; d <= this.elseifCount_; d++)
      Blockly.Mutator.reconnect(a[d], this, "IF" + d),
        Blockly.Mutator.reconnect(b[d], this, "DO" + d);
    Blockly.Mutator.reconnect(c, this, "ELSE");
  },
};
Blockly.Extensions.registerMutator(
  "controls_if_mutator_k",
  Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN,
  null,
  ["controls_if_elseif", "controls_if_else"]
);
