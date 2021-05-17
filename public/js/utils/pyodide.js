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