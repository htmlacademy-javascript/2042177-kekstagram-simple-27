import { previewImageElement } from './filters.js';

const ScaleSettings = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
};
const scaleButtonSmallerElement = document.querySelector ('.scale__control--smaller');
const scaleButtonBiggerElement = document.querySelector ('.scale__control--bigger');
const scaleInputElement = document.querySelector ('.scale__control--value');
let currentValue = parseFloat(scaleInputElement.value);

const initScale = () => {
  scaleButtonBiggerElement.addEventListener('click', () => {
    if (currentValue < ScaleSettings.MAX) {
      currentValue += ScaleSettings.STEP;
      previewImageElement.style.transform = `scale(${currentValue / 100})`;
      scaleInputElement.value = currentValue;
    }
  });

  scaleButtonSmallerElement.addEventListener('click', () => {
    if (currentValue > ScaleSettings.MIN) {
      currentValue -= ScaleSettings.STEP;
      previewImageElement.style.transform = `scale(${currentValue / 100})`;
      scaleInputElement.value = currentValue;
    }
  });
};

export { scaleInputElement, initScale };
