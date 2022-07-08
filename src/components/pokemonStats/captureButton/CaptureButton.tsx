import React from 'react';

import pokeball from '@/assets/images/pokeball.png';

const CaptureButton: React.FC = () => {
  return (
    <div className="capture-button">
      <img src={pokeball} alt="capture" />
    </div>
  );
};

export default CaptureButton;
