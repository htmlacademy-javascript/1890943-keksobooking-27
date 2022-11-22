const adForm = document.querySelector('.ad-form');
const adFormFields = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersFields = mapFilters.querySelectorAll('select, fieldset');

const setStateElements = (elements, state) => {
  elements.forEach((element) => {
    element.disabled = state;
  });
};

const setInactiveAdFormState = () => {
  adForm.classList.add('ad-form--disabled');
  setStateElements(adFormFields, true);
};

const setInactiveFilterFormState = () => {
  mapFilters.classList.add('map__filters--disabled');
  setStateElements(mapFiltersFields, true);
};

const setInactivePageSate = () => {
  setInactiveAdFormState();
  setInactiveFilterFormState();
};

const setActiveAdFormState = () => {
  adForm.classList.remove('ad-form--disabled');
  setStateElements(adFormFields, false);
};

const setActiveFilterFormState = () => {
  mapFilters.classList.remove('map__filters--disabled');
  setStateElements(mapFiltersFields, false);
};

export { setInactivePageSate, setActiveAdFormState, setActiveFilterFormState };
