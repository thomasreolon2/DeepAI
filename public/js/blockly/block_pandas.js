///////////////////////////////////////////////////////
// 2020-09-03, Pandas Blocks 2학년 파트
///////////////////////////////////////////////////////
Blockly.Blocks['csv_library'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pandas라이브러리 불러오기");
    this.appendValueInput("pan_lib_var")
        .setCheck(null)
        .appendField("라이브러리 변수 : ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
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
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//2020-09-16 양승국 블록수정
Blockly.Blocks['fill_null_data'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("의 결측치를");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["최댓값",".max()"], ["최솟값",".min()"], ["중간값",".median()"], ["평균값",".mean()"], ["0값","0"]]), "NAME");
    this.appendDummyInput()
        .appendField("로 채우기");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
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
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//2020-09-10 양승국 블록수정
// 정규화 
Blockly.Blocks['normal'] = {
  init: function() {
    this.appendValueInput("Normalization_data")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("을(를) 정규화하기")
    this.setInputsInline(true);
    this.setOutput(true,null);
    this.setColour(230);
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
    this.setColour(230);
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
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// 특정 열 삭제하기
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
    this.setColour(230);
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
    this.setColour(230);
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
    this.setColour(230);
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
    this.setColour(230);
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
    this.setColour(230);
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
    this.setColour(230);
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
    this.setColour(230);
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
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//몇번째 행 몇번쨰 열값
//2020-09-10 양승국 블록수정
Blockly.Blocks['select_row_column_value'] = {
  init: function() {
    this.appendValueInput("select_data")
        .setCheck(null)
        .appendField("데이터 :");
    this.appendValueInput("select_row_locate")
        .setCheck(null)
        .appendField("행 범위 :");
    this.appendValueInput("select_column_locate")
        .setCheck(null)
        .appendField("열 범위 :");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
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
    this.setColour(230);
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
//     this.setColour(230);
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
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//2020-09-06 양승국
//2020-09-09 이성주 pandas_dataframe 컬럼 수정
Blockly.Blocks['pandas_dataframe'] = {
  init: function() {
    this.appendValueInput("lib")
        .setCheck(null)
        .appendField("라이브러리 변수 :");
    this.appendValueInput("lst")
        .setCheck(null)
        .appendField("리스트 :");    
    this.appendValueInput("col1")
        .setCheck(null)
        .appendField("컬럼명 :");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
  this.setTooltip("");
  this.setHelpUrl("");
  }
  };

   //2020-09-09 이성주 pandas_datalist 확장블록 추가
Blockly.Blocks.pandas_datalist = {
  init: function () {
    
    this.setStyle("list_blocks");
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(!0, "Array");
    this.setMutator(new Blockly.Mutator(["lists_create_with_item"]));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
    this.setColour(230);
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
        0 == a && b.appendField("데이터 프레임 생성");
                   
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
    this.setColour(230);
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
    this.setColour(230);
    this.contextMenu = !1;
  },
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
    this.setColour(230);
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
    this.setColour(230);
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
    this.setColour(230);
    this.contextMenu = !1;
  },
};

//2020-09-09 양승국
Blockly.Blocks['pandas_conversion'] = {
  init: function() {
    this.appendValueInput("pa_frm")
        .setCheck(null)
        .appendField("데이터 프레임 : ");
    this.appendValueInput("pa_cul")
        .setCheck(null)
        .appendField("컬럼명 : ");
    this.appendValueInput("pa_data")
        .setCheck(null)
        .appendField("치환하려는 데이터 : ");
    this.appendValueInput("pa_chidata")
        .setCheck(null)
        .appendField("치환할 값 : ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//2020-09-10 양승국 
Blockly.Blocks['pandas_mis_del'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("의 결측치가 있는");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["행삭제",".dropna()"], ["열삭제",".dropna(axis = 1)"]]), "DEL_NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
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
    this.setColour(230);
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
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/////////////////////////////////////////////////////////////
// Pandas 2학년 파트 끝
/////////////////////////////////////////////////////////////
