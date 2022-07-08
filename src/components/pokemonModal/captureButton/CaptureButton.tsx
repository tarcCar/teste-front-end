import React from 'react';

import pokeball from '@/assets/images/pokeball.png';

type Props = {
  onClick: () => void;
};

const CaptureButton: React.FC<Props> = ({ onClick }) => {
  return <img src={pokeball} alt="capture" onClick={onClick} />;
};

export default CaptureButton;
