const numberInput = (newNumber) => {
    if (document.querySelector('#display').value == " ")
        {
            document.querySelector('#display').value == `${newNumber}`
        }
    else {
        document.querySelector('#display').value = `${document.querySelector('#display').value + newNumber}`
    }
}

const calculate = () => {
    let formula  = document.querySelector('#display').value
    console.log(eval(formula))
    document.querySelector('#display').value = `${eval(formula)}`
}
document.querySelector("#clear").addEventListener("click",() => {
    document.querySelector("#display").value = "";
}) // clear

// backspace function
const backspace = () => {
    const num = document.querySelector("#display").value.slice(0,-1);
    document.querySelector('#display').value = num;
}