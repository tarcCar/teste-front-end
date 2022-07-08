import React from 'react';

import pokeball from '@/assets/images/pokeball.png';

type Props = {
  onClick: () => void;
};

const CaptureButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="capture-button">
      <img src={pokeball} alt="capture" onClick={onClick} />
    </div>
  );
};

export default CaptureButton;
