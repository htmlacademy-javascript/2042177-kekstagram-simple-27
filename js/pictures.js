const picturesContainerElement = document.querySelector ('.pictures');

const getPhotoFragment = (data) => {
  const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');

  const photoFragment = document.createDocumentFragment();

  data.forEach(({ url, comments, likes }) => {
    const photoItem = pictureTemplateElement.cloneNode(true);
    photoItem.querySelector('.picture__img').src = url;
    photoItem.querySelector('.picture__comments').textContent = comments;
    photoItem.querySelector('.picture__likes').textContent = likes;
    photoFragment.append(photoItem);
  });

  return photoFragment;
};

const renderPictures = (data) => picturesContainerElement.append(getPhotoFragment(data));

export { renderPictures };
