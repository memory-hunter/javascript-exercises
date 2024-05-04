const fibonacci = function(numberUpto) {
    if (numberUpto <= 0) {
        return numberUpto == 0 ? 0 : "OOPS";
    }
    let arr = [1, 1];
    for(let i = 1; i < parseInt(numberUpto); i++) {
        arr[i+1] = arr[i] + arr[i-1];
    }
    return arr[numberUpto - 1];
};

// Do not edit below this line
module.exports = fibonacci;
