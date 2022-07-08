import React from 'react';

type Props = {
  src: string;
  alt: string;
  small?: boolean;
};

const Avatar: React.FC<Props> = ({ alt, src, small }) => {
  return (
    <img src={src} alt={alt} className={`avatar${small ? '--small' : ''}`} />
  );
};

export default Avatar;
