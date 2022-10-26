import {
  TIMES,
  TYPES,
  FEATURES,
  PHOTOS,
  TITLE,
  PRICE_MAX,
  PRICE_MIN,
  GUESTS_MAX,
  ROOMS_MAX,
  DESCRIPTION,
} from '../data.js';
import { getRandomNumber } from './get-random-number.js';

const createAvatar = (index) => {
  if (index < 10) {
    index = `0${index}`;
  }
  return `img/avatars/user${index}.png`;
};

export { createAvatar };

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
      rooms: getRandomNumber(1, ROOMS_MAX),
      guests: getRandomNumber(1, GUESTS_MAX),
      checkin: TIMES[getRandomNumber(0, TIMES.length - 1)],
      checkout: TIMES[getRandomNumber(0, TIMES.length - 1)],
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

export { createOffer, createOffers };
