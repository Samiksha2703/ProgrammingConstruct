function findMinMax(){
    for (let i = 0; i < number.length; i++){
    let random = Math.floor(100 + Math.random() * 900 );
    number [i] = random;
    }

    max=number[0]; 
    min=number[0];     
    for (let j = (number.length - 1); j >= 0; j--) {
        for (let k = 1; k <= j; k++) {
            if (number[k-1] > number[k]) {
            temp=number[k-1]; 
            number[k-1] = number[k]; 
            number[k] = temp;
            }
        }
    }
    }
     
    let max =0;
    let min = 0;
    let temp = 0;
    let number = new Array(10);
    findMinMax();
    console.log("Second largest value is : "+number[8])
    console.log("Second smallest value is : "+number[1])
    