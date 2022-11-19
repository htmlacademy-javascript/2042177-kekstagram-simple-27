import { isEscapeKey } from './utils.js';

const modalElement = document.querySelector('.img-upload__overlay');
const modalOpenButton = document.querySelector('#upload-file');
const modalCloseButton = document.querySelector('#upload-cancel');
const modalForm = document.querySelector('#upload-select-image');

const onKeydown = (evt) => {
  const message = document.querySelector('.success, .error');
  if (isEscapeKey(evt) && !message) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal() {
  modalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onKeydown);
}

function closeModal() {
  modalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onKeydown);
  modalForm.reset();
}

modalOpenButton.addEventListener('change', () => {
  openModal();
});

modalCloseButton.addEventListener('click', () => {
  closeModal();
});

export { closeModal };
