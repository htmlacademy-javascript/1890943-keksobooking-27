function getRandomInt (min, max) {
  if (min < 0 || max < 0 || min > max) {
    return NaN;
  }
  else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function getRandomDecimal (min, max, decimalPlaces) {
  if (min < 0 || max < 0 || min > max) {
    return NaN;
  }
  else {
    return ((Math.random() * (max - min + 1)) + min).toFixed(decimalPlaces);
  }
}

console.log(getRandomInt(1,100));
console.log(getRandomDecimal(1002,1000, 1));
