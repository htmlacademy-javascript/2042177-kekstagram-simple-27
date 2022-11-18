import { closeModal } from './upload-modal.js';
import { setUserFormSubmit } from './form.js';
import './utils.js';
import './data.js';
import { renderPictures } from './pictures.js';
import './scale.js';
import './filters.js';

fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((Response) => Response.json())
  .then((photos) => {
    renderPictures(photos);
  });

setUserFormSubmit(closeModal);
