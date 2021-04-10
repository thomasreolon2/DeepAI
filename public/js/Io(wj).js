var IO = ' <category name = "%{BKY_CATEGORY_INPUT_OUTPUT}" colour = "255">';
//데이터입력
IO += '<block type="input1">';
IO += ' <value name="content1">';
IO += '     <shadow type="indata">';
IO += '         <field name="indata1">"메시지"</field>';
IO += '     </shadow>';
IO += ' </value>';
IO += '</block>';

IO += '<block type="map">';
IO += ' <value name="data_type">';
IO += '     <shadow type="indata">';
IO += '         <field name="indata1">int</field>';
IO += '      </shadow>';
IO += ' </value>';
IO += ' <value name="input">';
IO += '     <shadow type="indata">';
IO += '         <field name="indata1">"메시지"</field>';
IO += '     </shadow>';
IO += '</value>';
IO += ' <value name="split">';
IO += '     <shadow type="indata">';
IO += '         <field name="indata1">"입력시구분자"</field>';
IO += '     </shadow>';
IO += ' </value>';
IO += '</block>';
//결과 출력
IO += '<block type="printc">';
IO += ' <value name="content">';
IO += '     <block type="variables_get">';
IO += '         <field name="VAR">variable</field>';
IO += '     </block>';
IO += ' </value>';
IO += '</block>';
//결과 출력 text + var
IO +='<block type="printtv">' ;
IO +='  <value name="content1">' ;
IO +='      <shadow type="indata">' ;
IO +='          <field name="indata1">"메시지"</field>' ;
IO +='      </shadow>' ;
IO +='  </value>' ;
IO +='  <value name="content2">' ;
IO +='      <block type="variables_get">' ;
IO +='          <field name="VAR">variable</field>' ;
IO +='      </block>' ;
IO +='   </value>' ;
IO +='</block>' ;
//결과출력 f-문자열
IO +='<block type="printf">' ;
IO +='  <value name="content1">' ;
IO +='      <shadow type="indata">' ;
IO +='          <field name="indata1"></field>' ;
IO +='      </shadow>' ;
IO +='  </value>' ;
IO +='</block>' ;
//출력 뮤테이터
IO +='<block type="print_mutator"></block>' ;
//파이썬 코드 입력
IO +='<block type="itdata">' ;
IO +='  <value name="itdata1">' ;
IO +='      <shadow type="indata">' ;
IO +='           <field name="indata1"></field>' ;
IO +='      </shadow>' ;
IO +='  </value>' ;
IO +='</block>' ;
//파이썬 부분 코드(만능)
IO +='<block type="indata"></block>' ;
IO +='<block type="class_func_param"></block>' ;
//시스템 os

IO +='<category name="%{BKY_CATEGORY_OS}" colour="%{BKY_OS_HUE}">' ;
IO +='  <block type="os_library"></block>' ;
IO +='  <block type="os_data_remove"></block>' ;
IO +='  <block type="os_data_listdir"></block>' ;
IO +='  <block type="os_data_download"></block>' ;
IO +='  <label text="os & os.path & shutil"></label>';

IO +='  <block type="printf">' ;
IO +='      <value name="content1">' ;
IO +='          <block type="os_getcwd"></block>' ;
IO +='       </value>' ;
IO +='  </block>' ;

IO +='  <block type="printf">' ;
IO +='      <value name="content1">' ;
IO +='          <block type="os_listdir"></block>' ;
IO +='      </value>' ;
IO +='  </block>' ;

//디렉토리 생성
IO +='  <block type="printf">' ;
IO +='      <value name="content1">' ;
IO +='          <block type="os_dir">' ;
IO +='              <value name="va">' ;
IO +='                  <shadow type="indata">' ;
IO +='                      <field name="indata1">"temp"</field>';
IO +='                  </shadow>' ;
IO +='              </value>' ;
IO +='          </block>' ;
IO +='      </value>' ;
IO +='  </block>' ;

//파일 삭제
IO +='  <block type="os_remove">' ;
IO +='      <value name="va">' ;
IO +='          <shadow type="indata">' ;
IO +='              <field name="indata1">"temp"</field>' ;
IO +='          </shadow>' ;
IO +='      </value>' ;
IO +='   </block>' ;

//파일명 변경 
IO +='  <block type="os_rename">' ;
IO +='      <value name="va1">' ;
IO +='          <shadow type="indata">' ;
IO +='              <field name="indata1">"원본"</field>' ;
IO +='          </shadow>' ;
IO +='      </value>' ;
IO +='      <value name="va2">' ;
IO +='          <shadow type="indata">' ;
IO +='              <field name="indata1">"복사본"</field>' ;
IO +='          </shadow>' ;
IO +='      </value>' ;
IO +='  </block>' ;


IO +='  <block type = "abspath">' ;
IO +='      <value name="NAME">' ;
IO +='          <shadow type="indata">' ;
IO +='              <field name="indata1">"파일 혹은 폴더"</field>' ;
IO +='          </shadow>' ;
IO +='      </value>' ;
IO +='  </block>' ;

IO +='  <block type = "basename">' ;
IO +='      <value name="NAME">' ;
IO +='          <shadow type="indata">' ;
IO +='              <field name="indata1">"절대경로"</field>' ;
IO +='          </shadow>' ;
IO +='      </value>' ;
IO +='  </block>' ;

IO +='  <block type = "dirname">' ;
IO +='      <value name="NAME">' ;
IO +='          <shadow type="indata">' ;
IO +='              <field name="indata1">"path"</field>' ;
IO +='          </shadow>' ;
IO +='      </value>' ;
IO +='  </block>' ;

IO +='  <block type = "exists">' ;
IO +='      <value name="NAME">' ;
IO +='          <shadow type="indata">' ;
IO +='              <field name="indata1">"path"</field>' ;
IO +='          </shadow>' ;
IO +='      </value>' ;
IO +='  </block>' ;

IO +='  <block type = "getsize">' ;
IO +='      <value name="NAME">' ;
IO +='          <shadow type="indata">' ;
IO +='              <field name="indata1">"path"</field>' ;
IO +='          </shadow>' ;
IO +='      </value>' ;
IO +='  </block>' ;

IO +='  <block type = "is_dir_file">' ;
IO +='      <value name="NAME">' ;
IO +='          <shadow type="indata">' ;
IO +='              <field name="indata1">"path"</field>' ;
IO +='          </shadow>' ;
IO +='      </value>' ;
IO +='  </block>' ;

IO +='  <block type = "path_split">' ;
IO +='      <value name="NAME">' ;
IO +='          <shadow type="indata">' ;
IO +='              <field name="indata1">"path"</field>' ;
IO +='          </shadow>' ;
IO +='      </value>' ;
IO +='  </block>' ;

IO +='  <block type="shutil_file">' ;
IO +='      <value name="va1">' ;
IO +='          <shadow type="indata">' ;
IO +='              <field name="indata1">원본</field>' ;
IO +='          </shadow>' ;
IO +='      </value>' ;
IO +='      <value name="va2">' ;
IO +='          <shadow type="indata">' ;
IO +='              <field name="indata1">복사</field>' ;
IO +='          </shadow>' ;
IO +='      </value>' ;
IO +='  </block>' ;

IO +='  <label text="time & datetime"></label>' ;
IO +='  <!--<block type="time_library"></block>-->' ;
IO +='  <block type="time_"></block>' ;
IO +='  <block type="sleep">' ;
IO +='      <value name="val1">' ;
IO +='          <shadow type="indata">' ;
IO +='              <field name="indata1">초</field>' ;
IO +='          </shadow>' ;
IO +='      </value>' ;
IO +='  </block>' ;

IO +='  <!--<block type="datetime_library"></block>-->' ;

//datetime 객체 생성 리성주
IO +='  <block type = "datetime_now">' ;
IO +='      <value name = "variables">' ;
IO +='          <block type="variables_get">' ;
IO +='              <field name="VAR">day</field>' ;
IO +='          </block>' ;
IO +='      </value>' ;
IO +='  </block>' ;

//년도, 년, 월, 일, 시, 분, 초 사용
IO +='  <block type = "now_method">' ;
IO +='      <value name = "object">' ;
IO +='          <block type="variables_get">' ;
IO +='              <field name="VAR">day</field>' ;
IO +='          </block>' ;
IO +='      </value>' ;
IO +='  </block>' ;
IO +='</category>' ;

//--------------------------------------파일 
IO +='<category name="%{BKY_CATEGORY_FILE}" colour="%{BKY_FILE_HUE}">' ;
IO +='  <block type="pickle_library"></block>' ;

IO +='  <block type="csv_library"></block>' ;

// 기태 수정(로컬 파일 열기)
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;
IO +='  ' ;

IO += '</category>';