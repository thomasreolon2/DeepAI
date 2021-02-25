  //db

  //자동 커밋

  Blockly.Blocks['db_autocommit'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.DATABASE_AUTOCOMMIT_1)
      .appendField(new Blockly.FieldVariable("con"), "list1");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(database);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

//DB삭제

  Blockly.Blocks['db_deletedb'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_DELETEDB_1)
          .appendField(new Blockly.FieldVariable("sql"), "list1")
          .appendField(" = DROP TABLE IF EXISTS(");
      this.appendValueInput("SET0").setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(database);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


  Blockly.Blocks['db_select6'] = {
    init: function () {
      this.appendDummyInput()      
      .appendField(Blockly.Msg.DATABASE_SELECT_1)
      .appendField(new Blockly.FieldVariable("sql"), "list1")
      .appendField("= ");
      this.appendValueInput("SET0").appendField("SELECT").setCheck(null);
      this.appendValueInput("SET1").appendField("FROM").setCheck(null);
      this.appendValueInput("SET2").appendField(new Blockly.FieldDropdown([[Blockly.Msg.DATABASE_WHERE_1, "WHERE"],[Blockly.Msg.DATABASE_GROUP_1, "GROUP BY"],[Blockly.Msg.DATABASE_ORDER_1, "ORDER BY"]]),"NAME").setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(database);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


// 이후로는 현재 사용하지 않는 블럭

//조회 sql = “SELECT (필드) FROM (테이블) ORDER BY (필드)”

//   Blockly.Blocks['db_select3'] = {
//     init: function () {
//       this.appendDummyInput()
//           .appendField(Blockly.Msg.DATABASE_SELECT_1)
//           .appendField(new Blockly.FieldVariable("sql"), "list1")
//           .appendField("= ");
//       this.appendValueInput("SET0").appendField("SELECT").setCheck(null);
//       this.appendValueInput("SET1").appendField("FROM").setCheck(null);
//       this.appendValueInput("SET2").appendField("ORDER BY").setCheck(null);
//       this.setInputsInline(true);
//       this.setPreviousStatement(true, null);
//       this.setNextStatement(true, null);
//       this.setColour(database);
//       this.setTooltip("");
//       this.setHelpUrl("");
//     }
//   };

// //조회 sql = “SELECT (필드) FROM (테이블) ORDER BY (필드) DESC”

//   Blockly.Blocks['db_select4'] = {
//     init: function () {
//       this.appendDummyInput()
//           .appendField(Blockly.Msg.DATABASE_SELECT_1)
//           .appendField(new Blockly.FieldVariable("sql"), "list1")
//           .appendField("= ");
//       this.appendValueInput("SET0").appendField("SELECT").setCheck(null);
//       this.appendValueInput("SET1").appendField("FROM").setCheck(null);
//       this.appendValueInput("SET2").appendField("ORDER BY").setCheck(null);
//       this.appendDummyInput().appendField("DESC");
//       this.setInputsInline(true);
//       this.setPreviousStatement(true, null);
//       this.setNextStatement(true, null);;
//       this.setColour(database);
//       this.setTooltip("");
//       this.setHelpUrl("");
//     }
//   };

// //조회 sql = “SELECT (필드) FROM (테이블) GROUP BY (필드)”

//   Blockly.Blocks['db_select5'] = {
//     init: function () {
//       this.appendDummyInput()
//           .appendField(Blockly.Msg.DATABASE_SELECT_1)
//           .appendField(new Blockly.FieldVariable("sql"), "list1")
//           .appendField("= ");
//       this.appendValueInput("SET0").appendField("SELECT").setCheck(null);
//       this.appendValueInput("SET1").appendField("FROM").setCheck(null);
//       this.appendValueInput("SET2").appendField("GROUP BY").setCheck(null);
//       this.setInputsInline(true);
//       this.setPreviousStatement(true, null);
//       this.setNextStatement(true, null);
//       this.setColour(database);
//       this.setTooltip("");
//       this.setHelpUrl("");
//     }
//   };

 


//   Blockly.Blocks['db_select7'] = {
//     init: function () {
//       this.appendDummyInput()      
//       .appendField(Blockly.Msg.DATABASE_SELECT_1)
//       .appendField(new Blockly.FieldVariable("sql"), "list1")
//       .appendField("= ");
//       this.appendValueInput("SET0").appendField("SELECT").setCheck(null);
//       this.appendValueInput("SET1").appendField("FROM").setCheck(null);
//       this.appendValueInput("SET2").appendField(new Blockly.FieldDropdown([[Blockly.Msg.DATABASE_WHERE_1, "WHERE"],[Blockly.Msg.DATABASE_GROUP_1, "GROUP BY"],[Blockly.Msg.DATABASE_ORDER_1, "ORDER BY"]]),"NAME").setCheck(null);
//       this.appendDummyInput().appendField(new Blockly.FieldDropdown([["DESC", "DESC"],["ASC", "ASC"],["none",""]]),"NAME2")
//       this.setInputsInline(true);
//       this.setPreviousStatement(true, null);
//       this.setNextStatement(true, null);
//       this.setColour(database);
//       this.setTooltip("");
//       this.setHelpUrl("");
//     }
//   };

myApplication.coloursFlyoutCallback = function(workspace) {
  // Returns an array of hex colours, e.g. ['#4286f4', '#ef0447']
  var colourList = myApplication.getPalette();
  var xmlList = [];
  if (Blockly.Blocks['colour_picker']) {
    for (var i = 0; i < colourList.length; i++) {
      var blockText = '<block type="colour_picker">' +
          '<field name="COLOUR">' + colourList[i] + '</field>' +
          '</block>';
      var block = Blockly.Xml.textToDom(blockText);
      xmlList.push(block);
    }
  }
  return xmlList;
};


myWorkspace.registerToolboxCategoryCallback(
  'COLOUR_PALETTE', myApplication.coloursFlyoutCallback);

