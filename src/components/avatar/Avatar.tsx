import React from 'react';

type Props = {
  src: string
  alt: string
}

const Avatar: React.FC<Props> = ({
  alt,
  src
}) => {
  return <img src={src} alt={alt} className="avatar" />
}

export default Avatar;
