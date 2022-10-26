const TIMES = ['12:00', '13:00', '14:00'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const TITLE = 'Трешка в центре';
const OFFER_COUNT = 10;
const PRICE_MIN = 100;
const PRICE_MAX = 100;
const GUESTS_MAX = 10;
const ROOMS_MAX = 10;
const DESCRIPTION =
  'Сдаём нашу любимую квартиру в связи с необходимостью расширения. Удобная кухня - гостиная 14,5 м² остаётся новым хозяевам со всей мебелью и техникой. Также оставим мебель в коридоре и спальне, а также технику в ванной. Квартира удачно расположена на втором этаже , на первом прямо под квартирой колясочная зона.';

let avatarIndex = 0;

const getRandomNumber = (min, max, decimalPlaces) => {
  if (min < 0 || max < 0 || min === max) {
    return NaN;
  }

  if (min > max) {
    [max, min] = [min, max];
  }

  if (decimalPlaces) {
    return +(Math.random() * (max - min) + min).toFixed(decimalPlaces);
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createAvatar = (index) => {
  if (index < 10) {
    index = `0${index}`;
  }
  return `img/avatars/user${index}.png`;
};

const pickRandom = (inputArray) => {
  const array = [];
  inputArray.forEach((element) => {
    if (getRandomNumber(0, 1) > 0) {
      array.push(element);
    }
  });
  return array;
};

const createOffer = () => {
  avatarIndex++;
  const location = {
    lat: getRandomNumber(35.65, 35.7, 5),
    lng: getRandomNumber(139.7, 139.8, 5),
  };
  return {
    author: {
      avatar: createAvatar(avatarIndex),
    },
    offer: {
      title: TITLE,
      address: `${location.lat}, ${location.lng}`,
      price: getRandomNumber(PRICE_MIN, PRICE_MAX),
      type: TYPES[getRandomNumber(0, (TYPES.length-1))],
      rooms: getRandomNumber(1, ROOMS_MAX),
      guests: getRandomNumber(1, GUESTS_MAX),
      checkin: TIMES[getRandomNumber(0, (TIMES.length-1))],
      checkout: TIMES[getRandomNumber(0, (TIMES.length-1))],
      features: pickRandom(FEATURES),
      description: DESCRIPTION,
      photos: pickRandom(PHOTOS),
    },
    location,
  };
};

const createOffers = (number) => {
  var array = [];
  for (var i = 0; i < number; i++) {
    array.push(createOffer());
  }
  return array;
};

console.log(createOffers(OFFER_COUNT));
