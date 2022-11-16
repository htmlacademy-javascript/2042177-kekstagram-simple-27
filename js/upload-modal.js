/* eslint-disable no-unused-expressions */
import { isEscapeKey } from './utils.js';

const modalElement = document.querySelector('.img-upload__overlay');
const modalOpenButton = document.querySelector('#upload-file');
const modalCloseButton = document.querySelector('#upload-cancel');
const modalForm = document.querySelector('#upload-select-image');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal () {
  modalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeModal () {
  modalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  modalForm.reset();
}

modalOpenButton.addEventListener('change', () => {
  openModal();
});

modalCloseButton.addEventListener('click', () => {
  closeModal();
});
