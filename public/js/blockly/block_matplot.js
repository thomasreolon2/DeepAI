
//그래프 출력 설정
Blockly.Blocks['select_graph_option'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[ 그래프 출력 설정 ] 좌표 [");
      this.appendValueInput("select_graph_option_location1")
          .setCheck(null);
      this.appendValueInput("select_graph_option_location2")
          .setCheck(null)
          .appendField("][");
      this.appendValueInput("select_graph_option_XY")
          .setCheck(null)
          .appendField("] ( X , Y ) 값 ");
      this.appendValueInput("select_graph_option_graph")
          .setCheck(null)
          .appendField("그래프 종류 ");
      this.appendValueInput("select_graph_option_title")
          .setCheck(null)
          .appendField("제목");
      this.appendValueInput("select_graph_option_X")
          .setCheck(null)
          .appendField("X 축");
      this.appendValueInput("select_graph_option_Y")
          .setCheck(null)
          .appendField("Y 축");
      this.appendValueInput("select_graph_option_END")
          .setCheck(null)
          .appendField("범례");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
