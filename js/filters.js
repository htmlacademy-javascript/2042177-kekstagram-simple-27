//import {previewImage} from "./scale.js";

const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
const effectsElement = document.querySelector('.effects__list');

const EFFECTS_SETTINGS = {
  original: {
    filter: 'none',
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    postfix: '',
  },
  chrome: {
    filter: 'grayscale',
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    postfix: '',
  },
  sepia: {
    filter: 'sepia',
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    postfix: '',
  },
  marvin: {
    filter: 'invert',
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    postfix: '%',
  },
  phobos: {
    filter: 'blur',
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    postfix: 'px',
  },
  heat: {
    filter: 'brightness',
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    postfix: '',
  },
};

noUiSlider.create(sliderElement, EFFECTS_SETTINGS.original);

sliderElement.noUiSlider.on('update', () => {
  sliderValue.value = sliderElement.noUiSlider.get();
})
