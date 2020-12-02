function unitConversion(input, value){
switch(input){
    case 1:
        let inch = value * 12;
        console.log(+value+"Feet = "+inch+"Inch");        
    break;
    case 2:
        let meter = value * 0.3048;
        console.log(+value+"Feet = "+meter+"Meter")
    break;
    case 3:
        let feet = value / 12;
        console.log(+value+"Inch = "+feet+"Feet")
    break;
    case 4:
       let feetMeter = value * 3.28084; 
    console.log(+value+"Meter = "+feetMeter+"Feet")
    break;
    defaule :
    console/log("Check your input");
}
}
console.log("Enter 1 for Feet to Inch");
console.log("Enter 2 for Feet to Meter");
console.log("Enter 3 for Inch to Feet");
console.log("Enter 4 for Meter to Feet");
///let input = parseInt(prompt("Enter 1 for Feet to Inch   Enter 2 for Feet to Meter   Enter 3 for Inch to Feet  Enter 4 for Meter to Feet));
let input = 1;
let value = 100;
unitConversion(input, value);
