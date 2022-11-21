const GET_ERROR_TEXT = 'Ошибка при загрузке данных';
const POST_ERROR_TEXT = 'Ошибка размещения обьявления';
let errorClone;

const errorTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');

const createError = (text) => {
  errorClone = errorTemplate.cloneNode(true);
  errorClone.querySelector('.error__message').textContent = text;
  document.body.append(errorClone);
  errorClone.addEventListener('click', (evt) => {
    evt.preventDefault();
    errorClone.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  });
};

const onDocumentKeydown = (evt) => {
  evt.preventDefault();
  if (evt.key === 'Escape' && errorClone) {
    errorClone.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

const renderGetErrorMessage = () => {
  createError(GET_ERROR_TEXT);
  document.addEventListener('keydown', onDocumentKeydown);
};

const renderPostErrorMessage = () => {
  createError(POST_ERROR_TEXT);
  document.addEventListener('keydown', onDocumentKeydown);
};

export { renderGetErrorMessage, renderPostErrorMessage };
