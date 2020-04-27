// function fibonacciSequence(number) {

// }

// fibonacciSequence(15);




let fibonacciArray = [0, 1];
let num = 20;
for (i = 2; i < num; i++) {
    let sumArray = fibonacciArray.slice(fibonacciArray.length-2);

    let nextNumber = sumArray[0] + sumArray[1]
   
    fibonacciArray.push(nextNumber);
}

console.log(fibonacciArray);
