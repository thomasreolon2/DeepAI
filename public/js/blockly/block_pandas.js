///////////////////////////////////////////////////////
// 2020-09-03, Pandas Blocks 2학년 파트
///////////////////////////////////////////////////////

var pandas_color = "%{BKY_PANDAS_HUE}";

//2020-09-19 양승국 수정
Blockly.Blocks['csv_library'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pandas라이브러리");
    this.appendValueInput("pan_lib_var")
        .setCheck(null)
        .appendField("(라이브러리 변수 : ");
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

Blockly.Blocks['load_csv'] = {
  init: function() {
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
  init: function() {
    this.appendValueInput("DATA")
        .setCheck(null)
        .appendField("결측치채우기 데이터 :");
    this.appendDummyInput()
        .appendField("(채울방법 :")
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
  init: function() {
    this.appendDummyInput()
        .appendField("pyodide라이브러리");
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
  init: function() {
    this.appendValueInput("Normalization_data")
        .setCheck(null)
        .appendField("정규화블록 데이터 :");
    this.appendDummyInput()
        .appendField("컬럼명 :")
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// 헤더 삭제하기
Blockly.Blocks['deletehead'] = {
  init: function() {
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
//2020-09-05-양승국 수정
Blockly.Blocks['select_row_delete'] = {
  init: function() {
    this.appendValueInput("select_value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("의");
    this.appendValueInput("select_row")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("번째 행 삭제");
    this.setInputsInline(true);
    this.setOutput(true,null);
    this.setColour(pandas_color);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// 특정 열 삭제하기
//2020-09-19 양승국 수정
Blockly.Blocks['select_column_delete'] = {
  init: function() {
    this.appendValueInput("select_value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("의");
    this.appendValueInput("select_column")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(" 열 삭제(컬럼명)");
    this.setInputsInline(true);
    this.setOutput(true,null);
    this.setColour(pandas_color);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// 특정 행만 남기고 삭제
Blockly.Blocks['leave_row_data'] = {
  init: function() {
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
  init: function() {
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
  init: function() {
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
Blockly.Blocks['list'] = {
  init: function() {
    this.appendValueInput("select_value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("리스트");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//헤더 

Blockly.Blocks['header'] = {
  init: function() {
    this.appendValueInput("select_value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("의 헤더");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// 행 리스트
Blockly.Blocks['select_row_list'] = {
  init: function() {
    this.appendValueInput("select_value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("의");
    this.appendValueInput("select_row_locate")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("번째 행 리스트");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//열 리스트
//2020-09-13 양승국 수정
Blockly.Blocks['select_column_list'] = {
  init: function() {
    this.appendValueInput("select_value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("의");
    this.appendValueInput("select_column_locate")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("번째 열 리스트(컬럼명)");
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
  init: function() {
    this.appendValueInput("select_data")
        .setCheck(null)
        .appendField("데이터범위지정 데이터 :");
    this.appendValueInput("select_row_locate")
        .setCheck(null)
        .appendField("(행 범위 :");
    this.appendValueInput("select_column_locate")
        .setCheck(null)
        .appendField("열 범위 :")
    this.appendDummyInput()
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//행 개수
//2020-09-16 양승국 블록 수정
Blockly.Blocks['row_count'] = {
  init: function() {
    this.appendValueInput("select_value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["의 행 개수",".shape[0]"], ["의 열 개수",".shape[1]"]]), "count");        
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
  init: function() {
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
  init: function() {
    this.appendValueInput("df_va")
        .setCheck(null)
        .appendField("데이터프레임 생성/")
        .appendField("담을 변수 :");
    this.appendValueInput("lib")
        .setCheck(null)
    this.appendValueInput("lst")
        .setCheck(null)
        .appendField("(zip리스트 :");    
    this.appendDummyInput()
        .appendField("컬럼명 :")
        .appendField(new Blockly.FieldTextInput("default"), "col_name")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(pandas_color);
  this.setTooltip("");
  this.setHelpUrl("");
  }
  };

//2020-09-09 이성주 pandas_datalist 확장블록 추가
//2020-09-19 양승국 블록 수정
Blockly.Blocks['pandas_datalist'] = {
  init: function() {
    this.appendValueInput("frm_var")
        .setCheck(null)
        .appendField("zip리스트");
    this.appendDummyInput()
        .appendField("(리스트 데이터 :")
        .appendField(new Blockly.FieldTextInput("default"), "NAME")
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
    for (a = []; b; )
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
    for (var b = 0; a; ) {
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
        0 == a && b.appendField("컬럼명");
                   
      }
    for (; this.getInput("ADD" + a); ) this.removeInput("ADD" + a), a++;
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
  init: function() {
    this.appendValueInput("pa_frm")
        .setCheck(null)
        .appendField("데이터일괄치환 바꿀데이터 :");
    this.appendValueInput("pa_cul")
        .setCheck(null)
        .appendField("(컬럼명 : ");
    this.appendValueInput("pa_data")
        .setCheck(null)
        .appendField("치환할데이터 : ");
    this.appendValueInput("pa_chidata")
        .setCheck(null)
        .appendField("바꿀데이터 : ")
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
  init: function() {
    this.appendValueInput("DATA")
        .setCheck(null)
        .appendField("결측치삭제 데이터 :");
    this.appendDummyInput()
        .appendField("( 삭제방향 :")
        .appendField(new Blockly.FieldDropdown([["행삭제",".dropna()"], ["열삭제",".dropna(axis = 1)"]]), "DEL_NAME")
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
  init: function() {
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
  init: function() {
    this.appendValueInput("start_col_num")
        .setCheck(null);
    this.appendValueInput("end_col_num")
        .setCheck(null)
        .appendField(":");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//2020-09-16 양승국 블록추가
Blockly.Blocks['nm'] = {
  init: function() {
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

//2020-09-16 양승국 블록추가
Blockly.Blocks['pandas_series'] = {
  init: function() {
    this.appendValueInput("lvar")
        .setCheck(null);
    this.appendValueInput("ser_data")
        .setCheck(null)
        .appendField(".Series");
    this.setInputsInline(true);
    this.setOutput(true, null);
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
    for (a = []; b; )
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
    for (var b = 0; a; ) {
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
        0 == a && b.appendField("Series 생성");
                   
      }
    for (; this.getInput("ADD" + a); ) this.removeInput("ADD" + a), a++;
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

//2020-09-16 양승국 블록추가
Blockly.Blocks['pandas_concat'] = {
  init: function() {
    this.appendValueInput("pa_val")
        .setCheck(null)
        .appendField("라이브러리 변수 :");
    this.appendValueInput("set_series")
        .setCheck(null)
        .appendField("넣을 시리즈 :");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["행에 추가",", axis = 0"], ["열에 추가",", axis = 1"]]), "PLEUS_NAME");        
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//2020-09-17 양승국 블록추가
Blockly.Blocks['pandas_merge'] = {
  init: function() {
    this.appendValueInput("pan_lib")
        .setCheck(null)
        .appendField("판다스라이브러리 :");
    this.appendValueInput("plus_data1")
        .setCheck(null)
        .appendField("합칠 데이터프레임 :");
    this.appendValueInput("plus_data2")
        .setCheck(null)
    this.appendValueInput("connet_way")
        .setCheck(null)
        .appendField("합칠 방식 :");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//2020-09-17 양승국 블록추가
Blockly.Blocks['pandas_merge_oncol'] = {
  init: function() {
    this.appendValueInput("pan_merge_col")
        .setCheck(null)
        .appendField("(공통된컬럼있을때)합칠 컬럼명 :");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//2020-09-17 양승국 블록추가
Blockly.Blocks['pandas_merge_lron'] = {
  init: function() {
    this.appendValueInput("left_on")
        .setCheck(null)
        .appendField("(공통컬럼없을때) 왼쪽 컬럼 :");
    this.appendValueInput("right_on")
        .setCheck(null)
        .appendField("오른쪽 컬럼 :");        
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(pandas_color);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/////////////////////////////////////////////////////////////
// Pandas 2학년 파트 끝
/////////////////////////////////////////////////////////////

 // 결측치 조회
 Blockly.Blocks['missing_value_inquiry'] = {
  init: function() {
    this.appendValueInput("data").setCheck(null)
    this.appendDummyInput().appendField("결측치 조회하기");
    this.setColour(230);
    this.setInputsInline(true);
    this.setOutput(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
// 통계 정보 조회
Blockly.Blocks['stats_inquiry'] = {
  init: function() {
    this.appendValueInput("data").setCheck(null)
    this.appendDummyInput().appendField("통계 정보 조회하기");
    this.setColour(230);
    this.setInputsInline(true);
    this.setOutput(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};