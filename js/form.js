import { sendData } from "./api.js";
import { showSuccessMessage, showErrorMessage } from "./messages.js";

const comentLength = {MIN:20, MAX: 140};

const form = document.querySelector('#upload-select-image');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error-message',
});

function validateСomment (value) {
  return value.length >= comentLength.MIN && value.length <= comentLength.MAX;
}

pristine.addValidator(form.querySelector('.text__description'), validateСomment, `От ${comentLength.MIN} до ${comentLength.MAX} символов`);

const submitButton = form.querySelector('.img-upload__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
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
