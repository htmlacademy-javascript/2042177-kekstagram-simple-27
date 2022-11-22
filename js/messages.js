import { isEscapeKey } from './utils.js';

const ERROR_SHOW_TIME = 5000;

const showMessage = (type) => {
  const template = document.querySelector(`#${type}`).content.querySelector(`.${type}`);
  const message = template.cloneNode(true);
  const messageCloseButton = message.querySelector(`.${type}__button`);
  const closeMessage = () => {
    document.removeEventListener('keydown', onKeydown);
    message.removeEventListener('click', onMessageClick);
    messageCloseButton.removeEventListener('click', closeMessage);
    document.body.removeChild(message);
  };

  // Использовал Function Declaration поскольку использовал раньше чем объявляется!
  function onKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeMessage();
    }
  }
  function onMessageClick(evt) {
    if (evt.target === message) {
      closeMessage();
    }
  }

  document.addEventListener('keydown', onKeydown);
  message.addEventListener('click', onMessageClick);
  messageCloseButton.addEventListener('click', closeMessage);
  document.body.append(message);
};

const showSuccessMessage = () => showMessage('success');
const showErrorMessage = () => showMessage('error');

const showDataLoadError = (message) => {
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

  mistakeElement.textContent = message;

  document.body.append(mistakeElement);

  setTimeout(() => {
    mistakeElement.remove();
  }, ERROR_SHOW_TIME);
};

export { showDataLoadError, showErrorMessage, showSuccessMessage };
