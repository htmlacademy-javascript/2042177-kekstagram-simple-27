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

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      fetch('https://27.javascript.pages.academy/kekstagram-simple', {
        method: 'POST',
        body: formData,
      }).then(() => onSuccess());
    }
  });
};

export { setUserFormSubmit };
