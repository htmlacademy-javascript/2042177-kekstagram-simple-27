import { closeModal } from './upload-modal.js';
import { setUserFormSubmit } from './form.js';
import { getData } from './api.js';
import { renderPictures } from './pictures.js';
import './scale.js';
import './filters.js';

getData(renderPictures);
setUserFormSubmit(closeModal);
