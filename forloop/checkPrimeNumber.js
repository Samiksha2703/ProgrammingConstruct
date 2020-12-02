function checkPrimeNumber(integer){
    if (integer <= 1){
        flag = 1;
    }
    for (let j = 2; j < integer; j++){
        if (integer % j === 0 ){
                flag = 1;
                break;
            }
        }
    }

let flag=0
let integer = 5;
checkPrimeNumber(integer);
if (flag === 0)
    console.log("The number is prime");
else 
    console.log("The number is not prime");
    