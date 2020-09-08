/////////////////////////////////////////////////////
// 2020-09-07 3학년 파이썬 기본 블록
/////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// 2020-09-07 3학년 파이썬 기본 블록
//////////////////////////////////////////////////////////

//집합
Blockly.Python['set'] = function (block) {
    var set = Blockly.Python.valueToCode(block, 'SET', Blockly.Python.ORDER_ATOMIC);
    var code = `set(`+set+`)`;
    // 뮤테이션을 이용하여 어러 값을 가져오도록 수정해야함
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  //집합 종류
  Blockly.Python['set_menu'] = function(block) {
    var dropdown_set_menu = block.getFieldValue('set_menu');
    var value_set1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
    var value_set2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    if (dropdown_set_menu == 'union'){
      var code = value_set1 + '.union(' + value_set2+')';
    }
    else if (dropdown_set_menu == 'intersection'){
      var code = value_set1 + '.intersection(' + value_set2+')';
    }
    else if (dropdown_set_menu == 'difference'){
      var code = value_set1 + '.difference(' + value_set2+')';
    }
    else if (dropdown_set_menu == 'add'){
      var code = value_set1 + '.add(' + value_set2+')';
    }
    else if (dropdown_set_menu == 'update'){
      var code = value_set1 + '.update(' + value_set2+')';
    }
    else if (dropdown_set_menu == 'remove'){
      var code = value_set1 + '.remove(' + value_set2+')';
    }
    return [code,Blockly.Python.ORDER_ATOMIC];
  };
  
  
  //새 튜플
  Blockly.Python['tuple'] = function(block) {
    // Create a list with any number of elements of any type.
    var elements = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i++) {
      elements[i] = Blockly.Python.valueToCode(block, 'ADD' + i,
          Blockly.Python.ORDER_NONE) || 'None';
    }
    var code = '(' + elements.join(', ') + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  //딕셔너리
  Blockly.Python['dict'] = function (block) {
    var key = new Array(block.itemCount_);
    var values = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i = i+1) {
      if(i == block.itemCount_-1){
        key[i] = Blockly.Python.valueToCode(block, 'ADD' + i,
        Blockly.Python.ORDER_NONE) + ' : ' +Blockly.Python.valueToCode(block, 'ADD2' + i,
        Blockly.Python.ORDER_NONE)
       }
      else{
        key[i] = Blockly.Python.valueToCode(block, 'ADD' + i,
        Blockly.Python.ORDER_NONE) + ' : ' +Blockly.Python.valueToCode(block, 'ADD2' + i,
        Blockly.Python.ORDER_NONE) + ', ';
        key[i+1] = Blockly.Python.valueToCode(block, 'ADD' + i+1,
        Blockly.Python.ORDER_NONE) + ' : ' +Blockly.Python.valueToCode(block, 'ADD2' + i+1,
        Blockly.Python.ORDER_NONE)
      }
      }
    
    //리턴의 순서를 바꿔줘야함
    var code = '{' +key.join('')+'}';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  //딕셔너리 옵션
  Blockly.Python['dic_menu'] = function(block) {
    var dropdown_dic = block.getFieldValue('dic');
    var value_dic1 = Blockly.Python.valueToCode(block, 'dic1', Blockly.Python.ORDER_ATOMIC);
    var value_dic2 = Blockly.Python.valueToCode(block, 'dic2', Blockly.Python.ORDER_ATOMIC);
    var value_dic3 = Blockly.Python.valueToCode(block, 'dic3', Blockly.Python.ORDER_ATOMIC);
    if (dropdown_dic == 'printvalues1'){
      var code = 'print('+value_dic1 + '['+value_dic2+'])';
    }
    else if (dropdown_dic == 'printvalues2'){
      var code = 'print('+value_dic1 + '['+value_dic2+']'+'['+value_dic3+'])';
    }
    else if (dropdown_dic == 'addvalues'){
      var code = value_dic1 + '['+value_dic2+'] = '+value_dic3;
    }
    else if (dropdown_dic == 'delvalues'){
      var code = 'del '+value_dic1+'['+value_dic2+']';
    }
    else if (dropdown_dic == 'changedict'){
      var code = 'dict('+value_dic1+')';
    }
    else if (dropdown_dic == 'selectvalues'){
      var code = value_dic1+'['+value_dic2+']';
    }
    else if (dropdown_dic == 'getvalues'){
      var code = value_dic1+'.values()';
    }
    else if (dropdown_dic == 'getkeys'){ 
      var code = value_dic1+'.keys()';
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
  }; 
  
  //반복문(파이썬스타일)
  Blockly.Python['for_python'] = function(block) {
    var for1 = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
    var for2 = Blockly.Python.valueToCode(block, 'range', Blockly.Python.ORDER_ATOMIC);
    
    var code = 'for '+ for1 + ' in '+ for2+':';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  //반복문 
  Blockly.Python['for_range'] = function(block) {
    var range1 = Blockly.Python.valueToCode(block, 'for_range', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'range('+range1+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  //////////////////////////////////////////////////////////
  // 3학년 파이썬 기본 블록 끝
  //////////////////////////////////////////////////////////