function factorialOfNumber(number) {
for (let index = 1; index <= number; index++){
    factorial *= index; 
}
}
let factorial = 1;
let number = 5;
factorialOfNumber(number);
console.log("Factorial of "+number+" is "+factorial);