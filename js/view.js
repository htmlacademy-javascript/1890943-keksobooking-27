const offersList = document.querySelector(".map__canvas");
const offerTemplate = document.querySelector("#card").content;
const offersFragment = document.createDocumentFragment();

const createOffersList = (offers) => {
  const offersArray = offers;
  offersArray.forEach(({ offer, author }) => {
    var element = createOfferView(offer, author);
    offersFragment.appendChild(element);
  });
  offersList.appendChild(offersFragment);
};

const createOfferView = (offer, author) => {
  const element = offerTemplate.cloneNode(true);
  checkNull(element.querySelector(".popup__avatar"), author.avatar).src =
    author.avatar;
  checkNull(element.querySelector(".popup__title"), offer.title).textContent =
    offer.title;
  checkNull(
    element.querySelector(".popup__text--address"),
    offer.address
  ).textContent = offer.address;
  checkNull(
    element.querySelector(".popup__text--price"),
    offer.price
  ).textContent = `${offer.price} ₽/ночь`;
  checkNull(element.querySelector(".popup__type"), offer.type).textContent =
    getTypeHouse(offer.type);
  checkNull(
    element.querySelector(".popup__text--capacity"),
    offer.rooms,
    offer.guests
  ).textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  checkNull(
    element.querySelector(".popup__text--time"),
    offer.checkin,
    offer.checkout
  ).textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  checkNull(element.querySelector(".popup__features"), offer.features);

  const featuresContainer = element.querySelector(".popup__features");
  const featuresList = featuresContainer.querySelectorAll(".popup__feature");
  const modifiers = offer.features.map(
    (feature) => "popup__feature--" + feature
  );

  featuresList.forEach((featuresListItem) => {
    const modifier = featuresListItem.classList[1];

    if (!modifiers.includes(modifier)) {
      featuresListItem.remove();
    }
  });

  checkNull(
    element.querySelector(".popup__description"),
    offer.description
  ).textContent = offer.description;

  checkNull(element.querySelector(".popup__photos"), offer.photos);
  const photoTemplate = element.querySelector(".popup__photo");
  const photos = element.querySelector(".popup__photos");
  photos.removeChild(photoTemplate);
  if (offer.photos != null) {
    offer.photos.forEach((photo) => {
      const element = photoTemplate.cloneNode(true);
      element.src = photo;
      photos.appendChild(element);
    });
  }

  return element;
};

const getTypeHouse = (input) => {
  switch (input) {
    case "palace":
      return "Дворец";
    case "flat":
      return "Квартира ";
    case "bungalow":
      return "Бунгало";
    case "house":
      return "Дом";
    case "hotel":
      return "Отель";
  }
};

const checkNull = (element, input1, input2) => {
  if (input1 === null || input2 === null) {
    element.classList.add("visually-hidden");
  }
  return element;
};

export { createOffersList };
