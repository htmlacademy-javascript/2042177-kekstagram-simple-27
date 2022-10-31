const comentLength = {MIN:20, MAX: 140};

const form = document.querySelector('#upload-select-image');

const pristine = new Pristine(form, false);

function validateСomment (value) {
  return value.length >= comentLength.MIN && value.length <= comentLength.MAX;
}

pristine.addValidator(form.querySelector('.text__description'), validateСomment, `От ${comentLength.MIN} до ${comentLength.MAX} символов`);

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
