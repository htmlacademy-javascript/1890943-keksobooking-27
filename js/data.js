import { getRandomNumber } from './utils.js';

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
const PRICE_MIN = 0;
const PRICE_MAX = 10000;
const GUESTS_MAX = 10;
const GUESTS_MIN = 0;
const ROOMS_MAX = 10;
const ROOMS_MIN = 0;
const DESCRIPTION =
  'Сдаём нашу любимую квартиру в связи с необходимостью расширения. Удобная кухня - гостиная 14,5 м² остаётся новым хозяевам со всей мебелью и техникой. Также оставим мебель в коридоре и спальне, а также технику в ванной. Квартира удачно расположена на втором этаже , на первом прямо под квартирой колясочная зона.';

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

let avatarIndex = 0;
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
      type: TYPES[getRandomNumber(0, TYPES.length - 1)],
      rooms: getRandomNumber(ROOMS_MIN, ROOMS_MAX),
      guests: getRandomNumber(GUESTS_MIN, GUESTS_MAX),
      checkin: TIMES[getRandomNumber(0, TIMES.length - 1)],
      checkout: TIMES[getRandomNumber(0, TIMES.length - 1)],
      features: pickRandom(FEATURES),
      description: DESCRIPTION,
      photos: pickRandom(PHOTOS),
    },
    location,
  };
};

const createOffers = () => {
  var array = [];
  for (var i = 0; i < OFFER_COUNT; i++) {
    array.push(createOffer(OFFER_COUNT));
  }
  return array;
};

export { createOffers };
