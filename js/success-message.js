const successTemplate = document.querySelector('#success').content.querySelector('.success');
let successClone;

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && successClone) {
    evt.preventDefault();
    successClone.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

const createSuccess = () => {
  successClone = successTemplate.cloneNode(true);
  document.body.append(successClone);
  successClone.addEventListener('click', (evt) => {
    evt.preventDefault();
    successClone.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  });
};

const renderSuccessMessage = () => {
  createSuccess();
  document.addEventListener('keydown', onDocumentKeydown);
};

export { renderSuccessMessage };
