function primeFactor(integer){
if (integer < 1){
	console.log("Not Allowed!");
	exit;
}
console.log("Prime factor of integer.");
for (let i = 2; i < integer; i++){
	if ( integer % i === 0 ){
		let factor = i;
		for ( let j = 2; j < factor; j++){
			if (factor % j === 0){
				flag =1;
				break;
			}
		}
		if (flag === 0){
			console.log(factor);
			count = 1;
		}
	}
} 
}

let count=0 
let flag=0 
let k=0 
let array = new Array();
let integer = 15;
primeFactor(integer);

if (count === 0){
	console.log("No prime factors except 1 and interger");
}