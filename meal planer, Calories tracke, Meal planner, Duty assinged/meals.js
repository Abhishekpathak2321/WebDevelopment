let choice = +prompt("Choose Your Meal (Designed By Abhishek Pathak):\n1.Breakfast\n2.lunch\n3.Snacks\n4.Post Workout")
switch (choice) {
    case 1:
        alert("Your First Meal Should Be High In Macros Like (Oats + Protein + Avacado)");
        break;
    case 2:
        alert("Rice + Green Veggies & Mixed Lentils");
        break;
    case 3:
        alert("Peanut Butter & Rice Cake ");
        break;
    case 4:
        alert("Scoop of Protein and 1 Banana with Pinch of salt to replenish your electrolytes");
        break;
    default:
        alert("Choose 1-4 Number (We have Only 4 Option for Today)");
}