function fibonacciSequence(number) {
    let fibonacciArray = [0, 1];
    if (number <= 0) {
        fibonacciArray = [0];
    } else {
        for (i = 2; i <= number; i++) {
            let sumArray = fibonacciArray.slice(fibonacciArray.length-2);
            let nextNumber = sumArray[0] + sumArray[1]
            fibonacciArray.push(nextNumber);
        }
    }
    return fibonacciArray;
}

console.log(fibonacciSequence(15));
