let Calorie = +prompt("Calorie Track By Activity Type:\n1. Walking \n2.Running \n3. Cycling \n4.Swimming:");
switch (Calorie) {
    case 1:
        alert(" Burns 150 Calories in 30 Min");
        break;
    case 2:
        alert(" Burns 200 Calories in 30 Min");
        break;
    case 3:
        alert(" Burns 250 Calories in 30 MIn");
        break;
    case 4:
        alert(" Burn 300 Calorie in 30 Min");
        break;
    default:
        alert("Need to Enter Valid Input")
}