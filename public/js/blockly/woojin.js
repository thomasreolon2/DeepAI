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
      this.setColour("%{BKY_DATABASE_HUE}");
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
      this.setColour("%{BKY_DATABASE_HUE}");
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
      this.setColour("%{BKY_DATABASE_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  },

  Blockly.defineBlocksWithJsonArray([

  {
    "type": "bar_char",
    "message0": "%{BKY_MATPLOT_BAR_GRAPH}",
    "args0": [
      // {
      //   "type": "input_value",
      //   "name": "matplotlib_pre_graph_location1"
      // },
      // {
      //   "type": "input_dummy"
      // },
      // {
      //   "type": "input_value",
      //   "name": "matplotlib_pre_graph_location2"
      // },
      
      {
        "type": "field_dropdown",
        "name": "matplotlib_graph_select",
        "options": [
         
          [
            "%{BKY_MATPLOT_BAR_GRAPH_1}",
            "matplotlib_bar"
          ],

          [
            "%{BKY_MATPLOT_BAR_GRAPH_2}",
            "matplotlib_barh"
          ]
          
        ]
      },
      {
        "type": "input_value",
        "name": "xx"
      },
      {
        "type": "input_value",
        "name": "yy"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_graph_Title"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_graph_Xlable"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_graph_Ylable"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_legend"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_color"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_other"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_VISUAL_HUE}",
    "tooltip": "",
    "helpUrl": ""
  }]);
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

