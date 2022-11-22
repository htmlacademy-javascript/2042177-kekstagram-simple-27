import { sendData } from './api.js';
import { showSuccessMessage, showErrorMessage } from './messages.js';

const CommentLength = {MIN:20, MAX: 140};

const formElement = document.querySelector('#upload-select-image');
const submitButtonElement = formElement.querySelector('.img-upload__submit');

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error-message',
});

function validateComment (value) {
  return value.length >= CommentLength.MIN && value.length <= CommentLength.MAX;
}

pristine.addValidator(formElement.querySelector('.text__description'), validateComment, `От ${CommentLength.MIN} до ${CommentLength.MAX} символов`);

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(() => {
        onSuccess();
        unblockSubmitButton();
        showSuccessMessage();
      },
      () =>{
        showErrorMessage();
        unblockSubmitButton();
      },
      new FormData(evt.target),
      );
    }
  });
};

export { setUserFormSubmit };
