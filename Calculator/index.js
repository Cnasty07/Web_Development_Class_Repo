
function add(params) {
    
}

function subtract(number) {
    let newNum = 
}

function divide(number) {

}

function power(number) {
    
}

document.querySelector("#clear").addEventListener("click",() => {
    document.querySelector("#display").value = " ";
}) // clear

// backspace function
const backspace = () => {
    const num = document.querySelector("#display").value.slice(0,-1);
    document.querySelector('#display').value = num;
}