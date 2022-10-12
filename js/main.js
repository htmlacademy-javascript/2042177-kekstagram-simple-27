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

getStringLength("djnkflksdjf", 75);

const PHOTO_COUNT = 25;
const PHOTO_DESCRIPTION = ['Вид на пляж отеля.',
  'Указатель пути к пляжу',
  'Вид со скал на дикий пляж',
  'Штатный фотограф =)',
  'Самое позитивное и вкусное блюдо',
  'Черный спорткар',
  'Эстетика во всём',
  'Морс  - наше всё',
  'Реакция купающихся на заходящий на посадку самолет',
  'Система хранения обуви',
  'Окультуренный проход на пляж',
  'Спорткар от Ауди',
  'Салат "Будь здоров"',
  'Кексосуши',
  'Тапки-луноходы',
  'Вид на горы с высоты птичьего полета',
  'Хоровое пение',
  'Маслкар на фотосессии',
  'Тапки с подсветкой',
  'Вид на площадь с пальмами',
  'Попробуй - пальчики оближешь!',
  'Закат на берегу моря',
  'Крабы тоже могут быть милыми',
  'Фото с концерта',
  'Активный отдых на дикой природе'
];


function getPhotos() {
  const photos = [];
  for (let i = 0; i < PHOTO_COUNT; i++) {
    photos.push({
      id:i + 1,
      url: `photos/${i + 1}.jpg`,
      description: PHOTO_DESCRIPTION[i],
      likes: getRandomInRange(15, 200),
      comments: getRandomInRange(0, 200)
    });
  }
  return photos;
}

getPhotos();
