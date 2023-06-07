function appendToResult(value){
    let resultEl = document.getElementById("result");
    resultEl.value += value;
}

function calculateResult(){
    let resultEl = document.getElementById("result");
    resultEl.value = eval(resultEl.value);
}

function clearResult(){
    let resultEl = document.getElementById("result");
    resultEl.value = ""
}