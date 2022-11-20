const form = document.querySelector('.ad-form');
const formInteractiveElements = form.querySelectorAll('fieldset');
const filter = document.querySelector('.map__filters');
const filterInteractiveElements = filter.querySelectorAll('fieldset, select');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element--invalid',
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});

const capacity = form.querySelector('#capacity');
const rooms = form.querySelector('#room_number');

const validateCapacity = () => {
  if (rooms.value === 100 && capacity.value !== 0) {
    return false;
  }
  return rooms.value >= capacity.value;
};

const getCapacityErrorMessage = () => {
  if (rooms.value > 3) {
    return 'Не для гостей';
  }
  return `Не больше ${rooms.value} гостей`;
};

pristine.addValidator(capacity, validateCapacity, getCapacityErrorMessage);

const onRoomsChange = () => {
  pristine.validate(capacity);
};

form.querySelector('#room_number').addEventListener('change', onRoomsChange);

const changeElementsState = (elements, state) => {
  elements.forEach((element) => {
    element.disabled = state;
  });
};

const formDisable = () => {
  form.classList.add('ad-form--disabled');
  changeElementsState(formInteractiveElements, true);
};

const filterDisable = () => {
  filter.classList.add('map__filters--disabled');
  changeElementsState(filterInteractiveElements, true);
};

const formActivate = () => {
  form.classList.remove('ad-form--disabled');
  changeElementsState(formInteractiveElements, false);
};

const filterActivate = () => {
  filter.classList.remove('map__filters--disabled');
  changeElementsState(filterInteractiveElements, false);
};

const disableForms = () => {
  formDisable();
  filterDisable();
};

export { disableForms, formActivate, filterActivate };
