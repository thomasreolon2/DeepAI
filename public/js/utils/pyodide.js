async function main(){
	await loadPyodide({ indexURL : 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/' });

	// 라이브러리 import
	await pyodide.loadPackage(['matplotlib','numpy']);
}

// main() 메소드를 작동하고 promise를 받아옴
let pyodideReadyPromise = main();

async function evaluatePython() {
	await pyodideReadyPromise;
	try {
		exe.innerHTML = await pyodide.runPythonAsync(code);
		let stdout = pyodide.runPythonAsync("sys.stdout.getvalue()"); // 결과값을 싹 받아줌
		exe.innerHTML = stdout;
	} catch(err) {
		exe.innerHTML = err;
	}
}

// 이부분은 내부 콘솔(f12 X)에 찍어주기 위해 필요한 부분
// requests class 임의로 만들어줌. 
pythonCode = `              
	import sys
	from io import StringIO
	# 그래프 삭제를 위한 맷플롯립 추가
	import matplotlib.pyplot as plt
	# 크롤링 하기위해 js로만든 _requestsURL 메소드 import
	from js import _requestsURL

	req = ""

	class requests:
		def get(htmlurl):
			_requestsURL(htmlurl)
			return req

	sys.stdout = StringIO()      
`

// pyodide준비 끝 실행
pyodideReadyPromise.then(() => {
	pyodide.runPythonAsync(pythonCode);
	console.log('pyodide 라이브러리 로딩완료');
	
	// CSS 작동
	$("#loading_image1").hide(); // 홈페이지 로딩 끝나면 로딩 이미지 없앰 
	$("#runButton1").css({
		'display': "block"
	});
	$("#loading_image2").hide(); // 그래프 로딩 끝나면 로딩 창 없앰 
	$("#runButton2").css({
		'display': "inline"
	});
});