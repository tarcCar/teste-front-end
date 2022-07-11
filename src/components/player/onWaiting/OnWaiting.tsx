import React, { useEffect, useState } from 'react';

import playerImage from '@/assets/images/ashFront.png';
import searchTooltip from '@/assets/images/searchTooltip.png';

const OnWaiting: React.FC = () => {
  const [image, setImage] = useState<string>();

  const playerShowTooltip = () => {
    const interval = setInterval(() => {
      setImage((currentImage) => {
        return !currentImage ? searchTooltip : undefined;
      });
    }, 2000);
    return interval;
  };

  useEffect(() => {
    const interval = playerShowTooltip();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {image && <img src={searchTooltip} className="tooltip" alt="esperando" />}
      <img src={playerImage} className="player-image" alt="player" />;
    </>
  );
};

export default OnWaiting;
