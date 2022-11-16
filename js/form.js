const form = document.querySelector('.ad-form');
const formInteractiveElements = form.querySelectorAll('fieldset');
const filter = document.querySelector('.map__filters');
const filterInteractiveElements = filter.querySelectorAll('fieldset, select');

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
