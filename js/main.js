import { closeModal } from './upload-modal.js';
import { setUserFormSubmit } from './form.js';
import { getData } from './api.js';
import { renderPictures } from './pictures.js';
import { initScale } from './scale.js';
import { initFilters } from './filters.js';

initScale();
initFilters();
getData(renderPictures);
setUserFormSubmit(closeModal);
