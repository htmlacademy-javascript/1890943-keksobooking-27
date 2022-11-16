const mapCanvas = document.querySelector('.map__canvas');
const cardTemplate = document
  .querySelector('#card')
  .content.querySelector('.popup');

const TypeToName = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const renderTextBlock = (parent, cssClass, data, additionalText = '') => {
  const element = parent.querySelector(cssClass);
  if (!data) {
    element.remove();
    return;
  }
  element.textContent = `${data}${additionalText}`;
};

const renderAvatarBlock = (parent, cssClass, data) => {
  const element = parent.querySelector(cssClass);
  if (!data) {
    element.remove();
    return;
  }
  element.src = data;
};

const createTimeText = (offer) => {
  if (offer.checkin && offer.checkout) {
    return `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  }
  if (offer.checkin && !offer.checkout) {
    return `Заезд после ${offer.checkin}`;
  }
  if (!offer.checkin && offer.checkout) {
    return `Выезд до ${offer.checkout}`;
  }
  return false;
};

const createCapacityText = (offer) => {
  if (offer.rooms && offer.guests) {
    return `${offer.rooms} комнаты для ${offer.guests} гостей`;
  }
  if (offer.rooms && !offer.guests) {
    return `${offer.rooms} комнаты`;
  }
  if (!offer.rooms && offer.guests) {
    return `Для ${offer.guests} гостей`;
  }
  return false;
};

const renderPhotoBlock = (parent, cssClass, data) => {
  const element = parent.querySelector(cssClass);
  if (!data) {
    element.remove();
    return;
  }
  const photo = element.querySelector('img');
  element.innerHTML = '';
  data.forEach((item) => {
    const cloningElement = photo.cloneNode(true);
    cloningElement.src = item;
    element.append(cloningElement);
  });
};

const renderFeaturesBlock = (parent, cssClass, data) => {
  const element = parent.querySelector(cssClass);
  if (!data) {
    element.remove();
    return;
  }
  const elementItem = document.createElement('li');
  elementItem.classList.add('popup__feature');
  element.innerHTML = '';
  data.forEach((item) => {
    const cloningElement = elementItem.cloneNode(true);
    cloningElement.classList.add(`popup__feature--${item}`);
    element.append(cloningElement);
  });
};

const createCard = (data) => {
  const cardElement = cardTemplate.cloneNode(true);
  renderTextBlock(cardElement, '.popup__title', data.offer.title);
  renderTextBlock(cardElement, '.popup__text--address', data.offer.address);
  renderTextBlock(
    cardElement,
    '.popup__text--price',
    data.offer.price,
    ' ₽/ночь'
  );
  renderTextBlock(cardElement, '.popup__type', TypeToName[data.offer.type]);
  renderTextBlock(cardElement, '.popup__description', data.offer.description);
  renderTextBlock(
    cardElement,
    '.popup__text--capacity',
    createCapacityText(data.offer)
  );
  renderTextBlock(
    cardElement,
    '.popup__text--time',
    createTimeText(data.offer)
  );
  renderAvatarBlock(cardElement, '.popup__avatar', data.author.avatar);
  renderPhotoBlock(cardElement, '.popup__photos', data.offer.photos);
  renderFeaturesBlock(cardElement, '.popup__features', data.offer.features);

  return cardElement;
};

const viewCard = (data) => mapCanvas.append(createCard(data));

export { viewCard };
