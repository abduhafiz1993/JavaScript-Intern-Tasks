function generateFibonacciSeries(num) {
    let fibonacciSeries = [];
    let a = 0, b = 1, temp;
    
    for (let i = 0; i < num; i++) {
        fibonacciSeries.push(a);
        temp = a;
        a = b;
        b = temp + b;
    }
    
    return fibonacciSeries;
}

console.log(generateFibonacciSeries(3));