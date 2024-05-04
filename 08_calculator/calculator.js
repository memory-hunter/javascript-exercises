const add = function(a, b) {
  return parseInt(a) + parseInt(b);
};

const subtract = function(a, b) {
	return parseInt(a) - parseInt(b);
};

const sum = function(array) {
	return array.reduce((total, element) => {
    return total + element;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, element) => {
    return total * element;
  }, 1);
};

const power = function(a, b) {
	return parseInt(a) ** parseInt(b);
};

const factorial = function(number) {
  return number == 0 ? 1 : function () {
    let result = 1;
    for (let i = number; i > 0; i--) {
      result *= i;
    }
    return result;
  }();
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
