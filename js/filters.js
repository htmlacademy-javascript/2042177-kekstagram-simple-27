const EFFECTS_SETTINGS = {
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
const sliderElement = document.querySelector('.effect-level__slider');
const sliderValueElement = document.querySelector('.effect-level__value');
const effectsElement = document.querySelector('.effects__list');
const previewImageElement = document.querySelector('.img-upload__preview img');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');

const initFilters = () => {
  sliderContainerElement.classList.add('hidden');

  noUiSlider.create(sliderElement, {
    filter: 'none',
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    format: {
      to: (value) => {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: (value) => {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return parseFloat(value).toFixed(1);
      },
    },
  });

  sliderElement.noUiSlider.on('update', () => {
    const currentValue = sliderElement.noUiSlider.get();
    sliderValueElement.value = currentValue;
    const effectsInput = effectsElement.querySelector('input:checked');
    const checkedEffect = effectsInput.value;
    if (checkedEffect !== 'none') {
      const filterChecked = EFFECTS_SETTINGS[checkedEffect];
      previewImageElement.style.filter = `${filterChecked.filter}(${currentValue}${filterChecked.postfix})`;
    } else {
      previewImageElement.style.filter = '';
    }
  });

  effectsElement.addEventListener('change', (evt) => {
    previewImageElement.classList = '';
    if (evt.target.value === 'none') {
      sliderContainerElement.classList.add('hidden');
      previewImageElement.style.filter = '';
    } else {
      sliderContainerElement.classList.remove('hidden');
      previewImageElement.classList.add(`effects__preview--${evt.target.value}`);
      const currentFilter = EFFECTS_SETTINGS[evt.target.value];
      sliderElement.noUiSlider.updateOptions({
        range: currentFilter.range,
        step: currentFilter.step,
      });
      sliderElement.noUiSlider.set(currentFilter.range.max);
    }
  });
};

export { previewImageElement, sliderContainerElement, initFilters };
