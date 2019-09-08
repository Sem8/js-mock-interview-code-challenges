const swapNumsWoutTemp = (num1, num2) => {
    num2 = num2 - num1;
    num1 = num1 + num2;
    num2 = num1 - num2;
    return [num1, num2];    
}

console.log(swapNumsWoutTemp(2, 3));