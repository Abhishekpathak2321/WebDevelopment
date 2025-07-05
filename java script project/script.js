function Multiply(){
    firstnumber= +(document.getElementById("FirstNumber").value);
    secondnumber= +(document.getElementById("SecondNumber").value);

    document.getElementById("result").innerHTML=firstnumber * secondnumber
}

function divide(){
    firstnumber= +(document.getElementById("FirstNumber").value);
    secondnumber= +(document.getElementById("SecondNumber").value);

    document.getElementById("result").innerHTML=firstnumber / secondnumber
}

function Add(){
    firstnumber= +(document.getElementById("FirstNumber").value);
    secondnumber= +(document.getElementById("SecondNumber").value);

    document.getElementById("result").innerHTML=firstnumber + secondnumber
}

function Sub(){
    firstnumber= +(document.getElementById("FirstNumber").value);
    secondnumber= +(document.getElementById("SecondNumber").value);

    document.getElementById("result").innerHTML=firstnumber - secondnumber
}