// Источник: https://myrusakov.ru/js-random-numbers.html
function getRandomInRange(min, max) {
  if (typeof max !== 'number' || typeof min !== 'number') {
    return NaN;
  }

  if(max <= min || max < 0 || min < 0) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInRange();

function getStringLength(testedString, maxLength) {
  if(testedString.length <= maxLength) {
    return true;
  }

  return false;
}

getStringLength('djnkflksdjf', 75);

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInRange, isEscapeKey};
