///////////////////////////////////////////////////////
// 2020-09-03, Pandas Blocks 2학년 파트
///////////////////////////////////////////////////////

var pandas_color = "%{BKY_PANDAS_HUE}";

//2020-09-19 양승국 수정
Blockly.Blocks['csv_library'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("[Pandas 라이브러리 임포트]");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['load_csv'] = {
  init: function () {
    this.appendValueInput("pan_lod_var")
      .setCheck(null)
      .appendField("라이브러리 변수 : ");
    this.appendDummyInput();
    this.appendValueInput("LOAD")
      .setCheck("String")
      .appendField("csv파일 가져오기 : ");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-19 양승국 블록수정
Blockly.Blocks['fill_null_data'] = {
  init: function () {
    this.appendValueInput("DATA")
      .setCheck(null)
      .appendField("[결측치삽입] 프레임");
    this.appendDummyInput()
        .appendField("(")
        .appendField(new Blockly.FieldDropdown([["최댓값",".max()"], ["최솟값",".min()"], ["중간값",".median()"], ["평균값",".mean()"], ["0값","0"]]), "NAME")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['pyo_lib'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("[pyodide라이브러리]");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-18 양승국 블록수정
// 정규화 
Blockly.Blocks['normal'] = {
  init: function () {
    this.appendValueInput("Normalization_data")
      .setCheck(null)
      .appendField("[표준스케일] 프레임");
    this.appendDummyInput()
        .appendField("(")
        .appendField(new Blockly.FieldTextInput("컬럼명"), "NAME")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 헤더 삭제하기
Blockly.Blocks['deletehead'] = {
  init: function () {
    this.appendValueInput("delete_header")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("의 헤더 삭제하기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 특정 행 삭제
//2020-09-20-양승국 수정
Blockly.Blocks['select_row_delete'] = {
  init: function () {
    this.appendValueInput("select_data")
      .setCheck(null)
      .appendField("[행열삭제] 프레임");
    this.appendDummyInput()
      .appendField("(인덱스값")
      .appendField(new Blockly.FieldTextInput("ex)0,1"), "select_drop"); 
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["행삭제", "1"], ["열삭제", "2"]]), "srd_NAME")
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 특정 행만 남기고 삭제
Blockly.Blocks['leave_row_data'] = {
  init: function () {
    this.appendValueInput("select_value")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("의");
    this.appendValueInput("select_row")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("번째 행만 남기기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//특정 열만 남기고 삭제하기
Blockly.Blocks['leave_column_data'] = {
  init: function () {
    this.appendValueInput("select_value")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("의");
    this.appendValueInput("select_column")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("번째 열만 남기기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//csv파일로 저장하기
Blockly.Blocks['save_data'] = {
  init: function () {
    this.appendValueInput("select_value")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("을(를) CSV 파일로 저장하기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//이미지 담기

// 



//리스트
//2020-09-19 양승국 
Blockly.Blocks['list'] = {
  init: function () {
    this.appendValueInput("input_data")
        .setCheck(null)
        .appendField("[리스트화] 변수");
    this.appendValueInput("out_data")
        .setCheck(null)
        .appendField("(변경 데이터");
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//헤더 

Blockly.Blocks['header'] = {
  init: function () {
    this.appendValueInput("header_input_var")
        .setCheck(null)
        .appendField("[헤더블록] 변수");    
    this.appendValueInput("header_output_var")
        .setCheck(null)
        .appendField("(변경 데이터");    
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 행 리스트
//2020-09-19 양승국
Blockly.Blocks['select_row_list'] = {
  init: function () {
    this.appendValueInput("list_data")
      .setCheck(null)
      .appendField("[행렬추출] 프레임");
    this.appendDummyInput()
        .appendField("(인덱스값")
        .appendField(new Blockly.FieldTextInput("ex)0,1"), "list_val");        
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["행", "1"], ["열", "2"]]), "srd_NAME");
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//몇번째 행 몇번쨰 열값
//2020-09-19 양승국 블록수정
Blockly.Blocks['select_row_column_value'] = {
  init: function () {
    this.appendValueInput("select_data")
      .setCheck(null)
      .appendField("[범위설정] 프레임");
    this.appendValueInput("select_row_locate")
      .setCheck(null)
      .appendField("(행");
    this.appendValueInput("select_column_locate")
      .setCheck(null)
      .appendField("열")
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//행 개수
//2020-09-19 양승국 블록 수정
Blockly.Blocks['row_count'] = {
  init: function () {
    this.appendValueInput("select_value")
      .setCheck(null)
      .appendField("[행열크기]  프레임");
    this.appendDummyInput()
      .appendField("(")
      .appendField(new Blockly.FieldDropdown([["행", ".shape[0]"], ["열", ".shape[1]"]]), "count");
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


// 이미지 리스트
// Blockly.Blocks['image_list'] = {
//   init: function() {
//     this.appendValueInput("select_value")
//         .setCheck(null);
//     this.appendDummyInput()
//         .appendField("이미지 리스트");
//     this.setInputsInline(true);
//     this.setColour(pandas_color);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };

// 라벨 개수
Blockly.Blocks['count_label'] = {
  init: function () {
    this.appendValueInput("select_value")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("라벨 개수");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-06 양승국
//2020-09-09 이성주 pandas_dataframe 컬럼 수정
//2020-09-19 양승국 블록 수정
Blockly.Blocks['pandas_dataframe'] = {
  init: function () {
    this.appendValueInput("df_va")
        .setCheck(null)
        .appendField("[zip프레임]")
        .appendField("변수");
    this.appendValueInput("lst")
      .setCheck(null)
      .appendField("(zip리스트");
    this.appendDummyInput()
        .appendField("컬럼명")
        .appendField(new Blockly.FieldTextInput("ex)'NAME','MATH'"), "col_name")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
//2020-09-19 양승국 수정
Blockly.Blocks['csvdataframe_J'] = {
  init: function () {
      this.appendValueInput("input_var").setCheck(null).appendField("[CSV프레임] 변수");
      this.appendValueInput("csv").setCheck(null).appendField("(");
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_PANDAS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//2020-09-09 이성주 pandas_datalist 확장블록 추가
//2020-09-19 양승국 블록 수정
Blockly.Blocks['pandas_datalist'] = {
  init: function () {
    this.appendValueInput("frm_var")
        .setCheck(null)
        .appendField("[zip리스트] 변수");
    this.appendValueInput("data_lst")
      .setCheck(null)
      .appendField("(")
    this.appendDummyInput()
      .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//20.09.09 이성주 - 컬럼추가 블록
Blockly.Blocks.createColumn = {
  init: function () {

    this.setStyle("list_blocks");
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(!0, "Array");
    this.setMutator(new Blockly.Mutator(["lists_create_with_item"]));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
    this.setColour(pandas_color);
  },
  mutationToDom: function () {
    var a = Blockly.utils.xml.createElement("mutation");
    a.setAttribute("items", this.itemCount_);
    return a;
  },
  domToMutation: function (a) {
    this.itemCount_ = parseInt(a.getAttribute("items"), 10);
    this.updateShape_();
  },
  decompose: function (a) {
    var b = a.newBlock("lists_create_with_container");
    b.initSvg();
    for (
      var c = b.getInput("STACK").connection, d = 0;
      d < this.itemCount_;
      d++
    ) {
      var e = a.newBlock("lists_create_with_item");
      e.initSvg();
      c.connect(e.previousConnection);
      c = e.nextConnection;
    }
    return b;
  },
  compose: function (a) {
    var b = a.getInputTargetBlock("STACK");
    for (a = []; b;)
      a.push(b.valueConnection_),
        (b = b.nextConnection && b.nextConnection.targetBlock());
    for (b = 0; b < this.itemCount_; b++) {
      var c = this.getInput("ADD" + b).connection.targetConnection;
      c && -1 == a.indexOf(c) && c.disconnect();
    }
    this.itemCount_ = a.length;
    this.updateShape_();
    for (b = 0; b < this.itemCount_; b++)
      Blockly.Mutator.reconnect(a[b], this, "ADD" + b);
  },
  saveConnections: function (a) {
    a = a.getInputTargetBlock("STACK");
    for (var b = 0; a;) {
      var c = this.getInput("ADD" + b);
      a.valueConnection_ = c && c.connection.targetConnection;
      b++;
      a = a.nextConnection && a.nextConnection.targetBlock();
    }
  },
  updateShape_: function () {
    this.itemCount_ && this.getInput("EMPTY")
      ? this.removeInput("EMPTY")
      : this.itemCount_ ||
      this.getInput("EMPTY") ||
      this.appendDummyInput("EMPTY")
        .appendField(
          Blockly.Msg.LISTS_CREATE_EMPTY_TITLE
        );
    for (var a = 0; a < this.itemCount_; a++)
      if (!this.getInput("ADD" + a)) {
        var b = this.appendValueInput("ADD" + a).setAlign(Blockly.ALIGN_RIGHT);
        0 == a && b.appendField("배열변수");
      }
    for (; this.getInput("ADD" + a);) this.removeInput("ADD" + a), a++;
  },
};
Blockly.Blocks.lists_create_with_container = {
  init: function () {
    this.setStyle("list_blocks");
    this.appendDummyInput().appendField(
      "컬럼추가"
    );
    this.appendStatementInput("STACK");
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.setColour(pandas_color);
    this.contextMenu = !1;
  },
};
Blockly.Blocks.lists_create_with_item = {
  init: function () {
    this.setStyle("list_blocks");
    this.appendDummyInput().appendField(
      Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE
    );
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.setColour(pandas_color);
    this.contextMenu = !1;
  },
};

//2020-09-19 양승국 수정
Blockly.Blocks['pandas_conversion'] = {
  init: function () {
    this.appendValueInput("pa_frm")
        .setCheck(null)
        .appendField("[일괄변경] 프레임");
    this.appendValueInput("pa_cul")
      .setCheck(null)
      .appendField("(컬럼명");
    this.appendValueInput("pa_data")
        .setCheck(null)
        .appendField("원본데이터");
    this.appendValueInput("pa_chidata")
        .setCheck(null)
        .appendField("변경데이터")
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-19 양승국 
Blockly.Blocks['pandas_mis_del'] = {
  init: function () {
    this.appendValueInput("DATA_del")
      .setCheck(null)
      .appendField("[결측치삭제] 프레임");
    this.appendDummyInput()
      .appendField("(")
      .appendField(new Blockly.FieldDropdown([["행삭제", ".dropna()"], ["열삭제", ".dropna(axis = 1)"]]), "DEL_NAME")
      .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-10 양승국 블록추가
Blockly.Blocks['selec_value_all'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("전체범위");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-13 양승국 블록추가
Blockly.Blocks['iloc_range'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("부분범위")    
        .appendField(new Blockly.FieldTextInput("0"), "st_range");   
    this.appendDummyInput()
        .appendField(":")
        .appendField(new Blockly.FieldTextInput("2"), "ed_range")
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-16 양승국 블록추가
Blockly.Blocks['nm'] = {
  init: function () {
    this.appendValueInput("data")
      .setCheck(null);
    this.appendValueInput("anymore")
      .setCheck(null)
      .appendField("는");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-20 양승국
Blockly.Blocks['pandas_series'] = {
  init: function () {
    this.appendValueInput("ser_var")
        .setCheck(null)
        .appendField("[시리즈생성] 변수");
    this.appendValueInput("ser_data")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-16 양승국 블록추가
Blockly.Blocks.pandas_series_data = {
  init: function () {
    this.setStyle("list_blocks");
    this.itemCount_ = 2;
    this.updateShape_();
    this.setOutput(!0, "Array");
    this.setMutator(new Blockly.Mutator(["lists_create_with_item"]));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
    this.setColour(pandas_color);
  },
  mutationToDom: function () {
    var a = Blockly.utils.xml.createElement("mutation");
    a.setAttribute("items", this.itemCount_);
    return a;
  },
  domToMutation: function (a) {
    this.itemCount_ = parseInt(a.getAttribute("items"), 10);
    this.updateShape_();
  },
  decompose: function (a) {
    var b = a.newBlock("lists_create_with_container");
    b.initSvg();
    for (
      var c = b.getInput("STACK").connection, d = 0;
      d < this.itemCount_;
      d++
    ) {
      var e = a.newBlock("lists_create_with_item");
      e.initSvg();
      c.connect(e.previousConnection);
      c = e.nextConnection;
    }
    return b;
  },
  compose: function (a) {
    var b = a.getInputTargetBlock("STACK");
    for (a = []; b;)
      a.push(b.valueConnection_),
        (b = b.nextConnection && b.nextConnection.targetBlock());
    for (b = 0; b < this.itemCount_; b++) {
      var c = this.getInput("ADD" + b).connection.targetConnection;
      c && -1 == a.indexOf(c) && c.disconnect();
    }
    this.itemCount_ = a.length;
    this.updateShape_();
    for (b = 0; b < this.itemCount_; b++)
      Blockly.Mutator.reconnect(a[b], this, "ADD" + b);
  },
  saveConnections: function (a) {
    a = a.getInputTargetBlock("STACK");
    for (var b = 0; a;) {
      var c = this.getInput("ADD" + b);
      a.valueConnection_ = c && c.connection.targetConnection;
      b++;
      a = a.nextConnection && a.nextConnection.targetBlock();
    }
  },
  updateShape_: function () {
    this.itemCount_ && this.getInput("EMPTY")
      ? this.removeInput("EMPTY")
      : this.itemCount_ ||
      this.getInput("EMPTY") ||
      this.appendDummyInput("EMPTY")
        .appendField(
          Blockly.Msg.LISTS_CREATE_EMPTY_TITLE
        );
    for (var a = 0; a < this.itemCount_; a++)
      if (!this.getInput("ADD" + a)) {
        var b = this.appendValueInput("ADD" + a).setAlign(Blockly.ALIGN_RIGHT);
        0 == a && b.appendField("데이터");

      }
    for (; this.getInput("ADD" + a);) this.removeInput("ADD" + a), a++;
  },
};
Blockly.Blocks.lists_create_with_container = {
  init: function () {
    this.setStyle("list_blocks");
    this.appendDummyInput().appendField(
      "항목추가"
    );
    this.appendStatementInput("STACK");
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.setColour(pandas_color);
    this.contextMenu = !1;
  },
};
Blockly.Blocks.lists_create_with_item = {
  init: function () {
    this.setStyle("list_blocks");
    this.appendDummyInput().appendField(
      Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE
    );
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.setColour(pandas_color);
    this.contextMenu = !1;
  },
};

//2020-09-20 양승국 수정
Blockly.Blocks['pandas_concat'] = {
  init: function () {
    this.appendValueInput("cat_vl")
        .setCheck(null)
        .appendField("[시리즈concat] 변수");
    this.appendValueInput("data1")
      .setCheck(null)
      .appendField("(데이터1");
    this.appendValueInput("data2")
      .setCheck(null)
      .appendField("데이터2");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["행에 추가", ", axis = 0"], ["열에 추가", ", axis = 1"]]), "PLEUS_NAME");
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-20 양승국 블록추가
Blockly.Blocks['pandas_merge'] = {
  init: function () {
    this.appendValueInput("mer_var")
        .setCheck(null)
        .appendField("[시리즈merge] 변수");
    this.appendValueInput("plus_data1")
        .setCheck(null)
        .appendField("(데이터1");
    this.appendValueInput("plus_data2")
        .setCheck(null)
        .appendField("데이터2");
    this.appendValueInput("connet_way")
        .setCheck(null)
        .appendField("방식");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-17 양승국 블록추가
Blockly.Blocks['pandas_merge_oncol'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("[공통컬럼O] 컬럼명")
        .appendField(new Blockly.FieldTextInput("컬럼명"), "mer_NAME");    
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-17 양승국 블록추가
Blockly.Blocks['pandas_merge_lron'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("[공통컬럼X] 왼쪽 컬럼")
        .appendField(new Blockly.FieldTextInput("컬럼명"), "mer_LNAME");   
    this.appendDummyInput()
        .appendField("오른쪽 컬럼")
        .appendField(new Blockly.FieldTextInput("컬럼명"), "mer_RNAME");           
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


//20.09.19 이성주 GroupBy 블록 추가
Blockly.Blocks['groupby_series'] = {
  init: function () {
    this.appendValueInput("Series_or_Dataframe")
      .setCheck(null)
      .appendField("[시리즈그룹화] 통계량 측정열");
    this.appendDummyInput()
      .appendField("(");
    this.appendValueInput("colName")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("통계함수")
      .appendField(new Blockly.FieldDropdown([["(평균)", ".mean()"], ["(갯수)", ".count()"], ["(총 합)", ".sum()"], ["(전체의 곱)", ".prod()"], ["(최소값)", ".min()"], ["(최대값)", ".max()"]]), "function")
      .appendField(")");
    this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-19 이성주
Blockly.Blocks['groupby_dataFrame'] = {
  init: function () {
    this.appendValueInput("Series_or_Dataframe")
      .setCheck(null)
      .appendField("[프레임그룹화] 데이터프레임");
    this.appendDummyInput()
      .appendField("(");
    this.appendValueInput("colName")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("통계함수")
      .appendField(new Blockly.FieldDropdown([["(평균)", ".mean()"], ["(갯수)", ".count()"], ["(총 합)", ".sum()"], ["(전체의 곱)", ".prod()"], ["(최소값)", ".min()"], ["(최대값)", ".max()"]]), "function")
      .appendField(")");
    this.setOutput(true, null);
    this.setColour(pandas_color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-19 이성주
Blockly.Blocks.groupby_series_ = {
  init: function () {
    this.setStyle("list_blocks");
    this.itemCount_ = 1;
    this.updateShape_();
    this.setOutput(!0, "Array");
    this.setMutator(new Blockly.Mutator(["lists_create_with_item"]));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
    this.appendDummyInput();
    this.setColour(pandas_color);
  },
  mutationToDom: function () {
    var a = Blockly.utils.xml.createElement("mutation");
    a.setAttribute("items", this.itemCount_);
    return a;
  },
  domToMutation: function (a) {
    this.itemCount_ = parseInt(a.getAttribute("items"), 10);
    this.updateShape_();
  },
  decompose: function (a) {
    var b = a.newBlock("lists_create_with_container");
    b.initSvg();
    for (
      var c = b.getInput("STACK").connection, d = 0;
      d < this.itemCount_;
      d++
    ) {
      var e = a.newBlock("lists_create_with_item");
      e.initSvg();
      c.connect(e.previousConnection);
      c = e.nextConnection;
    }
    return b;
  },
  compose: function (a) {
    var b = a.getInputTargetBlock("STACK");
    for (a = []; b;)
      a.push(b.valueConnection_),
        (b = b.nextConnection && b.nextConnection.targetBlock());

    for (b = 0; b < this.itemCount_; b++) {
      var c = this.getInput("ADD" + b).connection.targetConnection;
      c && -1 == a.indexOf(c) && c.disconnect();
    }
    this.itemCount_ = a.length;
    this.updateShape_();
    for (b = 0; b < this.itemCount_; b++)
      Blockly.Mutator.reconnect(a[b], this, "ADD" + b);
  },
  saveConnections: function (a) {
    a = a.getInputTargetBlock("STACK");
    for (var b = 0; a;) {
      var c = this.getInput("ADD" + b);
      a.valueConnection_ = c && c.connection.targetConnection;
      b++;
      a = a.nextConnection && a.nextConnection.targetBlock();
    }
  },
  updateShape_: function () {
    this.itemCount_ && this.getInput("EMPTY")
      ? this.removeInput("EMPTY")
      : this.itemCount_ ||
      this.getInput("EMPTY") ||
      this.appendDummyInput("EMPTY")
        .appendField(
          Blockly.Msg.LISTS_CREATE_EMPTY_TITLE
        );
    for (var a = 0; a < this.itemCount_; a++)
      if (!this.getInput("ADD" + a)) {
        if (this.itemCount_ == 1)
          var b = this.appendValueInput("ADD" + a).setAlign(Blockly.ALIGN_LEFT); //b: 확장블록
        else
          var b = this.appendValueInput("ADD" + a).setAlign(Blockly.ALIGN_LEFT).appendField(",");
        //var c = this.appendField(",");
        0 == a && b.appendField("그룹핑 열");         
      }

    //for (; this.getInput("ADD" + a); ) this.removeInput("ADD" + a), a++;
  },
};
Blockly.Blocks.lists_create_with_container = {
  init: function () {
    this.setStyle("list_blocks");
    this.appendDummyInput().appendField(
      "항목추가"
    );
    this.appendStatementInput("STACK");
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.setColour(pandas_color);
    this.contextMenu = !1;
  },
};
Blockly.Blocks.lists_create_with_item = {
  init: function () {
    this.setStyle("list_blocks");
    this.appendDummyInput().appendField(
      Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE
    );
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.setColour(pandas_color);
    this.contextMenu = !1;
  },
};

/////////////////////////////////////////////////////////////
// Pandas 2학년 파트 끝
/////////////////////////////////////////////////////////////

// 결측치 조회
Blockly.Blocks['missing_value_inquiry'] = {
  init: function () {
    this.appendDummyInput().appendField("[결측치 조회]");
    this.appendValueInput("mis_data").setCheck(null)
    this.setColour(pandas_color);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
// 통계 정보 조회
Blockly.Blocks['stats_inquiry'] = {
  init: function () {
    this.appendDummyInput().appendField("[통계 정보 조회]");
    this.appendValueInput("inq_data").setCheck(null)
    this.setColour(pandas_color);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
// array
Blockly.Blocks['array_select'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this {Blockly.Block}
   */
  init: function () {
    this.appendDummyInput().appendField("[인덱스 가져오기]")
    this.appendValueInput("array_var").setCheck(null).appendField("배열");
    this.setHelpUrl(Blockly.Msg['LISTS_CREATE_WITH_HELPURL']);
    this.itemCount_ = 1;
    this.updateShape_();
    this.setOutput(true, 'Array');
    this.setColour(pandas_color);
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_TOOLTIP']);
    this.setInputsInline(true);
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
    var containerBlock = workspace.newBlock('lists_create_with_container');
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
        var input = this.appendValueInput('ADD' + i).appendField("[")
            .setAlign(Blockly.ALIGN_RIGHT);
            this.appendDummyInput().appendField("]");
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