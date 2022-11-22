import { showDataLoadError } from './messages.js';

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        response.json()
          .then((photos) => {
            onSuccess(photos);
          });
      } else {
        showDataLoadError('Ошибка получения данных с сервера. Попробуйте еще');
      }
    })
    .catch(() => {
      showDataLoadError('Ошибка получения данных с сервера. Попробуйте еще');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple', {
    method: 'POST',
    body,
  }).then((response) => {
    if(response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  }).catch(() => {
    onFail();
  });
};

export { getData, sendData };
