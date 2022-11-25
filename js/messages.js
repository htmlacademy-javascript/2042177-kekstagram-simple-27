import { isEscapeKey } from './utils.js';

const ERROR_SHOW_TIME = 5000;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const onMessageElementClick = (evt) => {
  const messageElement = document.querySelector('.success, .error');
  if (evt.target === messageElement) {
    closeMessage();
  }
};

const onMessageCloseButtonElementClick = () => {
  closeMessage();
};

// Использовал Function Declaration поскольку используется раньше объявления.
function closeMessage() {
  const messageElement = document.querySelector('.success, .error');
  const messageCloseButtonElement = messageElement.querySelector('.success__button, .error__button');
  document.removeEventListener('keydown', onDocumentKeydown);
  messageElement.removeEventListener('click', onMessageElementClick);
  messageCloseButtonElement.removeEventListener('click', onMessageCloseButtonElementClick);
  document.body.removeChild(messageElement);
}

const showMessage = (type) => {
  const templateElement = document.querySelector(`#${type}`).content.querySelector(`.${type}`);
  const messageElement = templateElement.cloneNode(true);
  const messageCloseButtonElement = messageElement.querySelector(`.${type}__button`);

  document.addEventListener('keydown', onDocumentKeydown);
  messageElement.addEventListener('click', onMessageElementClick);
  messageCloseButtonElement.addEventListener('click', onMessageCloseButtonElementClick);
  document.body.append(messageElement);
};

const showSuccessMessage = () => showMessage('success');
const showErrorMessage = () => showMessage('error');

const showDataLoadError = (messageElement) => {
  const mistakeElement = document.createElement('div');
  mistakeElement.style.zIndex = '100';
  mistakeElement.style.position = 'absolute';
  mistakeElement.style.left = '0';
  mistakeElement.style.top = '0';
  mistakeElement.style.right = '0';
  mistakeElement.style.padding = '10px 3px';
  mistakeElement.style.fontSize = '30px';
  mistakeElement.style.textAlign = 'center';
  mistakeElement.style.backgroundColor = 'red';

  mistakeElement.textContent = messageElement;

  document.body.append(mistakeElement);

  setTimeout(() => {
    mistakeElement.remove();
  }, ERROR_SHOW_TIME);
};

export { showDataLoadError, showErrorMessage, showSuccessMessage };
