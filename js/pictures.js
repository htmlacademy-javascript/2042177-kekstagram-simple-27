import { getPhotos } from './data.js';

const picturesContainer = document.querySelector ('.pictures');

const getPhotoFragment = () => {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const photos = getPhotos();

  const photoFragment = document.createDocumentFragment();

  photos.forEach(({ url, comments, likes }) => {
    const photoItem = pictureTemplate.cloneNode(true);
    photoItem.querySelector('.picture__img').src = url;
    photoItem.querySelector('.picture__comments').textContent = comments;
    photoItem.querySelector('.picture__likes').textContent = likes;
    photoFragment.append(photoItem);
  });

  return photoFragment;
};

const renderPictures = () => picturesContainer.append(getPhotoFragment());

export { renderPictures };
