function findHarmonicNumber(userInput){
    for ( let index = 1; index <= userInput; index++){
        harmonicNumber += 1 / index;
    } 
} 
    let userInput = 8;
    let harmonicNumber = 0;
    findHarmonicNumber(userInput);
    console.log("Harmonic number is : "+harmonicNumber);