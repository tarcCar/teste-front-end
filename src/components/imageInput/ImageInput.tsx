import React, { useState } from 'react';

const ImageInput: React.FC = () => {
  const [newImage, setNewImage] = useState<string>('');

  const onImageFileInputChangeHandler = (ev: any) => {
    const file = ev.target.files[0];
    const url = URL.createObjectURL(file);
    setNewImage(url);
  };

  const onSelectNewImageClickHandler = () => {
    const fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('accept', 'image/*');
    fileInput.onchange = onImageFileInputChangeHandler;
    fileInput.click();
  };

  if (newImage) {
    return (
      <img
        src={newImage}
        alt={newImage}
        className="avatar"
        onClick={onSelectNewImageClickHandler}
      />
    );
  }

  return (
    <input
      className="image-input"
      type="button"
      onClick={onSelectNewImageClickHandler}
    />
  );
};

export default ImageInput;
