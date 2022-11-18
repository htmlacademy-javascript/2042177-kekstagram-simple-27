const picturesContainer = document.querySelector ('.pictures');

const getPhotoFragment = (data) => {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const photoFragment = document.createDocumentFragment();

  data.forEach(({ url, comments, likes }) => {
    const photoItem = pictureTemplate.cloneNode(true);
    photoItem.querySelector('.picture__img').src = url;
    photoItem.querySelector('.picture__comments').textContent = comments;
    photoItem.querySelector('.picture__likes').textContent = likes;
    photoFragment.append(photoItem);
  });

  return photoFragment;
};

const renderPictures = (data) => picturesContainer.append(getPhotoFragment(data));

export { renderPictures };
