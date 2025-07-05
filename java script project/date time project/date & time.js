let Today = new Date();
let day = Today.getDay();
let daylist=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.write("Today is: "+daylist[day]+ ".")

let hour = Today.getHours();
let minutes=Today.getMinutes();
let seconds=Today.getSeconds();

let prepand = (hour >= 12) ? "PM" : "AM";

hour = (hour >= 12) ? hour - 12 : hour;

if (hour === 0 && prepand ==='PM'){
    if (minute ===0 && second === 0){
        hour=12;
        prepand = 'Noon';
    }else{
        hour = 12;
        prepand= 'PM';

    }
}

if (hour ===0 && prepand === "AM"){
    if (minute === 0 && second ==0){
        hour = 12;
        prepand = 'Midnight'
    }else {
        hour = 12;
        prepand = 'Am';
    }
}
document.write("current time" + hour + prepand + ":" +minutes +":" +seconds);