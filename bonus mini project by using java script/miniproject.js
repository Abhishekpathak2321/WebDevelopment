let firstNumber= +prompt("Enter The First Number");
let operator= prompt("Enter the Operator '+','-','/','*'");
let secondNumber= +prompt("Enter The Second Number");

if (operator === '+'){
    alert("result=" +(firstNumber + secondNumber));
}

else if (operator === '-'){
    alert("result=" +(firstNumber - secondNumber));
}

else if (operator === '*'){
    alert("result=" +(firstNumber * secondNumber));
}

else if (operator === '/'){
    alert("result=" +(firstNumber / secondNumber));
}
else{
    alert("Enter a valid operator")
}