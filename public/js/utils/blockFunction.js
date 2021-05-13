//==================================
// 결과 지우기 2020.10.04 남지원 수정 
//===================================  
function clear_result() {
	$("#exeArea").empty();
}

// ==================================
// 코드 파일로 저장하기
//===================================  
function file_save_2(editor){
	let code_python = Blockly.Python.workspaceToCode(demoWorkspace); // 워크스페이스를 파이썬 코드로 변환
	let code = editor.getValue();
	let blobObject = new Blob([code]);  // 코드를 블롭 객체로 만듬 => 블롭은 이미지, 사운드, 비디오와 같은 멀티미디어 데이터를 다룰 때 사용

	prompt2("코드 저장하기", checkCookie("download_block"), "저장", "취소").then((filename) => {      
	if(filename != null){
		setCookie("download_block",filename, 1); // 사용자가 정한 파일명을 다시 쿠키에 저장
		saveAs(blobObject, filename+".py"); 
	}
	});
}

function file_save() {   
	console.log('test toggle-two: ' + $('#toggle-two').prop('checked'));

	if($('#toggle-two').prop('checked'))
	file_save_2(pyEditor);
	else
	file_save_2(asyncEditor);
}



//==================================
// 블록 저장하기 
//===================================  
function saveBlock() {
	let xml = Blockly.Xml.workspaceToDom(demoWorkspace);  // 워크스페이스를 돔(xml)로 만듬
	let p_xml = Blockly.Xml.domToPrettyText(xml);         // 돔(xml)을 깔끔하게 만드는 부분

	// 커스텀 프롬프트 사용
	prompt2("블록 저장하기", checkCookie("download_block"), "저장", "취소").then((filename) => {
	if(filename != null){
		setCookie("download_block",filename,"1"); // 사용자가 정한 파일명을 다시 쿠키에 저장
		let fileObject = new File([p_xml], filename+".xml");  // 파일 객체 생성 (data,name+확장자)
		saveAs(fileObject);                                   // 로컬 저장
	}
	});
}


//===================================
// 블록 불러오기 
//===================================   
function loadBlock() {
	let reader = new FileReader();  // FileReader객체 생성
	let files = document.getElementById("file").files; // 로컬에 있는 파일의 id값 얻기
	let file = files[0];
	let fileName = "";  
	if (file) {
	reader.onload = function (e) {          // 파일읽기 성공한 경우
		var xml = reader.result;              // 읽어들인 파일 내용
		var dom = Blockly.Xml.textToDom(xml); // text를 돔 형태로 변환
		Blockly.Xml.appendDomToWorkspace(dom, demoWorkspace); //  돔을 디코딩 후 워크스페이스에 블록을 만들어 냄.
		fileName = file.name;
		
		// 워크스페이스에 있는 블록을 코드로 변환해 코드미러에 setValue해주는 부분
		try {
		var pyCode = Blockly.Python.workspaceToCode(demoWorkspace);
		pyEditor.setValue(pyCode);
		} catch (e) {
		console.log('python 코드가 매핑되어 있지 않습니다. Error : ' + e);
		}
		try {
		var jsCode = Blockly.JavaScript.workspaceToCode(demoWorkspace);
		jsEditor.getValue() = jsCode;
		} catch (e) {
		console.log('java script 코드가 매핑되어 있지 않습니다. Error : ' + e);
		}
	};
	reader.readAsText(file);
	}
}

// ==================================
// 블록을 선택했을 때 
//=================================== 
function whenSelected(event) {
	if (event.type == Blockly.Events.CREATE) {
		let block = demoWorkspace.getBlockById(event.blockId); 
		console.log('블록이 선택됨');
	}

	// 블록을 눌렀을 때 클릭 이벤트로 각종 메소드 작동
	if (event.type == Blockly.Events.UI && event.element === "click") {
		let block = demoWorkspace.getBlockById(event.blockId);
		// 판다스에서 쓰이는 csv불러와서 데이터 프레임 만들어주는거
		if ('csv2' == block.type) {
			openTextFile(event.blockId);
		}

		// 기태 수정(로컬 파일 열기) 21.01.01 ==============================================
		//판다스의 파일열기
		if ('fileopen' == block.type) {
			console.log("파일 열기");
			localFileOpen(event.blockId);         
		}
		//사이파이의 미디어불러오기
		if ('fileopen2' == block.type) {
			console.log("미디어 파일 열기");
			localFileOpen2(event.blockId);         
		}
		// 기태 수정(로컬 파일 열기) 지금은 사용되지 않음 ========================================================
		if ('data_csv_read' == block.type) {
			Show_csv();
		}
		// 다운로드 블록 창 열기
		if ('os_data_download'  == block.type) {
			fileDownload();
		}
		// croll_url_load
		if('croll_url_load' == block.type){
			_requestsURL(event.blockId);
		}
	}
}