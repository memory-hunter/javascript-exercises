const findTheOldest = function (array) {
  array = array.sort(
    (x, y) =>
      (y.yearOfDeath === undefined ? 2024 : y.yearOfDeath) -
      y.yearOfBirth -
      ((x.yearOfDeath === undefined ? 2024 : x.yearOfDeath) - x.yearOfBirth)
  );
  console.log(array);
  return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
