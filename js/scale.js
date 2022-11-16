const sliderPreview = document.querySelector ('.img-upload__preview');
const scaleButtonSmaller = document.querySelector ('.scale__control--smaller');
const scaleButtonBigger = document.querySelector ('.scale__control--bigger');
const scaleInput = document.querySelector ('.scale__control--value');
const scaleSettings = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
};
let currentValue = parseFloat(scaleInput.value);

scaleButtonBigger.addEventListener('click', () => {
  if (currentValue < scaleSettings.MAX) {
    currentValue += scaleSettings.STEP;
    sliderPreview.style.transform = `scale(${currentValue / 100})`;
    scaleInput.value = currentValue;
  }
});

scaleButtonSmaller.addEventListener('click', () => {
  if (currentValue > scaleSettings.MIN) {
    currentValue -= scaleSettings.STEP;
    sliderPreview.style.transform = `scale(${currentValue / 100})`;
    scaleInput.value = currentValue;
  }
});

export { sliderPreview };
