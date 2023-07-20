// ========== Clear Function =========
const clearInput = () =>{
    document.getElementById("result").value = "";
    
}

// ========== Display Function =========

const display = (value) =>{
    document.getElementById('result').value += value; //value = value + value
}

// ========== Equate Function =========

const equate = () =>{
    let inputValue = document.getElementById("result").value;
    let outputValue = eval(inputValue);
    document.getElementById("result").value = outputValue;
}