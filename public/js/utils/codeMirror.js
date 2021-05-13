// JS 코드미러
let jsEditor = CodeMirror(document.getElementById("jsCodeEditor"), {
    mode: "javascript",
    // value: "codemirror",
    theme: "oceanic-next",          // 테마
    inputStyle: "contenteditable",  // 입력 처리 방식
    // readOnly: true,              // 읽기 전용 설정
    lineNumbers: true,              // 라인 넘버 설정
    lineWrapping: true,             // 자동 줄바꿈 설정
    // spellcheck: true,   autocorrect: true,
});

// PY 코드미러
let pyEditor = CodeMirror(document.getElementById("pyCodeEditor"), {
    mode: "python",
    // value: "codemirror",
    theme: "oceanic-next",          // 테마
    inputStyle: "contenteditable",  // 입력 처리 방식
    // readOnly: true,              // 읽기 전용
    lineNumbers: true,              // 라인 넘버 설정
    lineWrapping: true,             // 자동 줄바꿈 설정
    // spellcheck: true,            // 스펠링 체크
    extraKeys: { "Ctrl-Space": "autocomplete" }, // 단축키
    //   spellcheck: true,   autocorrect: true,
});

// async 코드미러
let asyncEditor = CodeMirror(document.getElementById("asyncCodeEditor"), {
    mode: "python",
    // value: "codemirror",
    theme: "oceanic-next",          // 테마
    inputStyle: "contenteditable",  // 입력 처리 방식
    // readOnly: true,              // 읽기 전용 설정
    lineNumbers: true,              // 라인 넘버 설정
    lineWrapping: true,             // 자동 줄바꿈 설정
    extraKeys: { "Ctrl-Space": "autocomplete" }, // 단축키
    // spellcheck: true,   autocorrect: true,
});


//////////////////////////////////////////////////////////////

// 블록코드 on,off
function separate_editor(){
	var pyEditor = $("#pyCodeEditor");
	var asyncEditor = $("#asyncCodeEditor");
	if ($('#toggle-two').prop('checked') === false) {
	//pyEditor.css("position", "relative");
	//pyEditor.slideUp("400");
	//asyncEditor.slideDown("400");
	asyncEditor.css("visibility", "visible");
	pyEditor.css("visibility", "hidden");
	} else if ($('#toggle-two').prop('checked') === true) {
	//pyEditor.css("position", "relative");
	//pyEditor.slideDown("400");
	//asyncEditor.slideUp("400");
	pyEditor.css("visibility", "visible");
	asyncEditor.css("visibility", "hidden");
	}

}

// ==================================
// 코드 갱신하기 
//===================================  
function codeUpdate(event) {
	async function coderun() {
	try {
		var pyCode = Blockly.Python.workspaceToCode(demoWorkspace); // 워크스페이스를 코드로 변환 후 값 저장
		// console.log("pycode : " + escape(pyCode));
		pyEditor.setValue(pyCode); // 그 값을 파이썬코드미러에 값 저장
	} catch (e) {
		console.log('python 코드가 매핑되어 있지 않습니다. Error : ' + e);
	}
	}
	// coderun이 끝나고나서 작동됨.
	coderun().then(() => {
	try {
		var jsCode = Blockly.JavaScript.workspaceToCode(demoWorkspace); // 워크스페이스를 js코드로 변환 후 값 저장
		jsEditor.setValue(jsCode); // 그 값을 js코드미러에 값 저장
	} catch (e) {
		console.log('java script 코드가 매핑되어 있지 않습니다. Error : ' + e);
	}
	});
}

////////////////////////////////////////////////////////////////
// 코드미러 폰트사이즈 변경 - 우진
$("#fontsize").change(function () {
    let selectName = $(this).find(":selected").val();

    if (selectName == "none") {
    }
    if (selectName == "15") {
        $('.CodeMirror').css('fontSize', '15px');
    }
    else if (selectName == "20") {
        $('.CodeMirror').css('fontSize', '20px');
    }
    else if (selectName == "25") {
        $('.CodeMirror').css('fontSize', '25px');
    }
    else if (selectName == "30") {
        $('.CodeMirror').css('fontSize', '30px');
    } 
});