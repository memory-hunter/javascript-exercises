const removeFromArray = function() {
    let array = arguments[0];
    let sizeOfElements = arguments.length;
    for (let i = 1; i < sizeOfElements; i++) {
        for (let j = 0; j < array.length;) {
            if (array[j] === arguments[i]) {
                array.splice(j, 1);
            }
            else {
                j++;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
