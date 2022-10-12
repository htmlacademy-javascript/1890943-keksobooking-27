function getRandomInt (min, max) {
  return !(min < 0 || max < 0 || min > max) ? Math.floor(Math.random() * (max - min + 1)) + min : NaN;
}

function getRandomDecimal (min, max, decimalPlaces) {
  return !(min < 0 || max < 0 || min > max) ? ((Math.random() * (max - min)) + min).toFixed(decimalPlaces) : NaN;
}

console.log(getRandomInt(99,100));
console.log(getRandomDecimal(999.999,1000, 4));
