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

const checkinTime = ['12:00', '13:00', '14:00'];
const typeHotel = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const pickRandom = (inputArray) => {
  const array = [];
  inputArray.forEach((element) => {
    if (getRandom(0, 1) > 0) {
      array.push(element);
    }
  });
  return array;
};

const createOffer = () => {
  const location = {
    lat: getRandom(35.65000, 35.70000, 5),
    lng: getRandom(139.70000, 139.80000, 5)
  };
  return {
    author: {
      avatar: `img/avatars/user${getRandom(0, 10)}.png`
    },
    offer: {
      title: 'Трешка в центре',
      address: `${location.lat}, ${location.lng}`,
      price: getRandom(0, 10000),
      type: typeHotel[getRandom(0, 4)],
      rooms: getRandom(1, 10),
      guests: getRandom(1, 10),
      checkin: checkinTime[getRandom(0, 2)],
      checkout: checkinTime[getRandom(0, 2)],
      features: pickRandom(features),
      description: `Сдаём нашу любимую квартиру в связи с необходимостью расширения.
      Удобная кухня - гостиная 14,5 м² остаётся новым хозяевам со всей мебелью и техникой.
      Также оставим мебель в коридоре и спальне, а также технику в ванной.
      Квартира удачно расположена на втором этаже , на первом прямо под квартирой колясочная зона.`,
      photos: pickRandom(photos)
    },
    location
  };
};

const offers = (number) => {
  var array = [];
  for (var i = 0; i<number;i++)
  {
    array.push(createOffer());
  };
  return array;
}

offers(10);
