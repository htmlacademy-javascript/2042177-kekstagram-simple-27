import { isEscapeKey } from './utils.js';

const ERROR_SHOW_TIME = 5000;

const showMessage = (type) => {
  const templateElement = document.querySelector(`#${type}`).content.querySelector(`.${type}`);
  const messageElement = templateElement.cloneNode(true);
  const messageCloseButton = messageElement.querySelector(`.${type}__button`);
  const closeMessage = () => {
    document.removeEventListener('keydown', onKeydown);
    messageElement.removeEventListener('click', onMessageClick);
    messageCloseButton.removeEventListener('click', onCloseButtonClick);
    document.body.removeChild(messageElement);
  };

  // Использовал Function Declaration поскольку использовал раньше чем объявляется!
  function onKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeMessage();
    }
  }
  function onMessageClick(evt) {
    if (evt.target === messageElement) {
      closeMessage();
    }
  }
  function onCloseButtonClick() {
    closeMessage();
  }

  document.addEventListener('keydown', onKeydown);
  messageElement.addEventListener('click', onMessageClick);
  messageCloseButton.addEventListener('click', onCloseButtonClick);
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
