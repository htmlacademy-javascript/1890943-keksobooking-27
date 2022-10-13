const getRandom = (min, max, decimalPlaces) => {
  if (min < 0 || max < 0 || min === max)
  {
    return NaN;
  }

  if (min>max)
  {
    [max, min] = [min,max];
  }

  if (decimalPlaces){
    return +(Math.random() * (max - min) + min).toFixed(decimalPlaces);
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandom(99,100);
getRandom(999.999,1000, 4);
