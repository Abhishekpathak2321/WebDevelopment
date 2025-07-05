let Activity = prompt("Activity planner: (e.g., Monday, Saturday , Sunday):").toLowerCase();
switch (Activity) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        alert("Work & Study");
        break;
    case "saturday":
        alert("Half-day Fun");
        break;
    case "sunday":
        alert("Rest day");
        break;
    default:
        alert("invalid Input");


}