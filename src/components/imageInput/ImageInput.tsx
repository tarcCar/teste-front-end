import React, { useEffect, useState } from 'react';

type Props = {
  onImageSelected?: (imageUrl: string | undefined) => void;
  onChange?: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  name: string;
  value?: string;
  error?: any;
};

const ImageInput: React.FC<Props> = ({
  name,
  value,
  error,
  onBlur,
  onChange,
  onImageSelected,
}) => {
  const [newImage, setNewImage] = useState<string | undefined>('');

  const onImageFileInputChangeHandler = (ev: any) => {
    const file = ev.target.files[0];
    const url = URL.createObjectURL(file);
    setNewImage(url);
    if (onChange) {
      onChange(ev);
    }
  };

  useEffect(() => {
    if (newImage) {
      return;
    }
    setNewImage(value);
  }, [value, newImage]);

  useEffect(() => {
    if (!onImageSelected) {
      return;
    }
    onImageSelected(newImage);
  }, [newImage]);

  const onSelectNewImageClickHandler = () => {
    const fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('accept', 'image/*');
    fileInput.setAttribute('name', name);
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
    <>
      <input
        className={`image-input ${error ? 'error' : ''}`}
        name={name}
        type="button"
        onBlur={onBlur}
        onClick={onSelectNewImageClickHandler}
      />
      {error && <p className="input-error">{error}</p>}
    </>
  );
};

export default ImageInput;
