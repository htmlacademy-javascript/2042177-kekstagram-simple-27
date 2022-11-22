import { isEscapeKey } from './utils.js';
import { previewImageElement, sliderContainerElement } from './filters.js';
import { scaleInputElement } from './scale.js';

const modalElement = document.querySelector('.img-upload__overlay');
const modalOpenButtonElement = document.querySelector('#upload-file');
const modalCloseButtonElement = document.querySelector('#upload-cancel');
const modalFormElement = document.querySelector('#upload-select-image');
const textCommentElement = modalElement.querySelector('.text__description');


const onKeydown = (evt) => {
  const message = document.querySelector('.success, .error');
  if (isEscapeKey(evt) && !message) {
    evt.preventDefault();
    closeModal();
  }
};

const openModal = () => {
  modalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onKeydown);
};

function closeModal() {
  modalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onKeydown);
  modalFormElement.reset();
  textCommentElement.value = '';
  previewImageElement.style.filter = '';
  previewImageElement.classList = '';
  previewImageElement.style.transform = 'scale(1)';
  scaleInputElement.value = '100%';
  sliderContainerElement.classList.add('hidden');
}

modalOpenButtonElement.addEventListener('change', () => {
  openModal();
});

modalCloseButtonElement.addEventListener('click', () => {
  closeModal();
});

export { closeModal };
