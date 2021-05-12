//===================================
// 데이터 입력 bug fix
//===================================
function input_fixed(text) {
    return prompt(text);
};

languagePluginLoader.then(() => {
    pyodide.runPythonAsync(`
    from js import input_fixed
    input = input_fixed
    __builtins__.input = input_fixed
    `);
});


//===================================
// 커스텀 prompt
//===================================

const prompt2 = (title, defaultInput, button1, button2) => { 
	return new Promise(function (resolve, reject) {
		let tempData = null;
		$.MessageBox({ // 커스텀 메세지 박스
			buttonDone  : button1, // 버튼
			buttonFail  : button2,
			message     : title, 
			input       : defaultInput, // 입력창, checkEvent : 기본입력 값 -> 쿠키에 저장된 값
			speed       : 0
		})
		.done(function(data){ // button1일때
			if($.trim(data)){
				resolve(checkFileName(data));
			}
		}).fail(function(){ // button2일때
			resolve(null);
		});
	})
};

// 파일명에 .py, .xml이 들어갔을 경우 제거
function checkFileName(FileName) {
	let _cNameLen = FileName.length;                                      // 파일명의 길이
	let _lastDot = FileName.lastIndexOf('.');                            // 파일명에서 가장 마지막에 나오는 .확인 => 확장자 체크
	let _fileExt = FileName.substring(_lastDot, _cNameLen).toLowerCase(); // 확장자를 소문자로 변경해 저장
	if(_fileExt == ".xml" || _fileExt == ".py" ){
		FileName = FileName.substring(0,_lastDot);
	}
	return FileName;
}