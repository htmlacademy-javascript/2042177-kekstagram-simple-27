const MINCOMMENTLENGTH = 20;
const MAXCOMMENTLENGTH = 140;

const form = document.querySelector('#upload-select-image');

const pristine = new Pristine(form, false);

function validateСomment (value) {
  return value.length >= MINCOMMENTLENGTH && value.length <= MAXCOMMENTLENGTH;
}

pristine.addValidator(form.querySelector('.text__description'), validateСomment, `От ${MINCOMMENTLENGTH} до ${MAXCOMMENTLENGTH} символов`);

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
