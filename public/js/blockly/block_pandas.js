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

Blockly.Blocks['fill_null_data'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("의 결측치를");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["삭제","dropna()"], ["최댓값","max()"], ["최솟값","min()"], ["중간값","median()"], ["평균값","mean()"], ["0값","fillna(0)"]]), "NAME");
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

Blockly.Blocks['pandas_print'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("판다스 출력 : ");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// 정규화 
Blockly.Blocks['normal'] = {
  init: function() {
    this.appendValueInput("Normalization_data")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("을(를)")
        .appendField(new Blockly.FieldDropdown([["정규화",""], ["평균화","OPTIONNAME"]]), "normal")
        .appendField("하기");
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
        .appendField(" 열 삭제");
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
Blockly.Blocks['select_column_list'] = {
  init: function() {
    this.appendValueInput("select_value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("의");
    this.appendValueInput("select_column_locate")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("번째 열 리스트");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//몇번째 행 몇번쨰 열값

Blockly.Blocks['select_row_column_value'] = {
  init: function() {
    this.appendValueInput("select_value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("의");
    this.appendValueInput("select_row_locate")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("번째 행,");
    this.appendValueInput("select_column_locate")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("번째 열 값");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//행 개수
Blockly.Blocks['row_count'] = {
  init: function() {
    this.appendValueInput("select_value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("의 행 개수");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//열 개수
Blockly.Blocks['column_count'] = {
  init: function() {
    this.appendValueInput("select_value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("의 열 개수");
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
Blockly.Blocks['pandas_datalist'] = {
  init: function() {
    this.appendValueInput("dat1")
        .setCheck(null)
        .appendField("데이터 프레임 생성");
    this.appendValueInput("dat2")
        .setCheck(null);
    this.appendValueInput("dat3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//2020-09-06 양승국
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
  this.appendValueInput("col2")
      .setCheck(null);
  this.appendValueInput("col3")
      .setCheck(null);
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
