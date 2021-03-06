import React, { useEffect, useState } from 'react';

import leftLeg from '@/assets/images/ashLeftLeg.png';
import rightLeg from '@/assets/images/ashRightLeg.png';
import stop from '@/assets/images/ashStop.png';
import searchingTooltip from '@/assets/images/searchingTooltip.png';

import Tooltip from '../tooltip/Tooltip';

const OnSearching: React.FC = () => {
  const [image, setImage] = useState(stop);

  const playerWalk = () => {
    let stateImage = 0;
    const interval = setInterval(() => {
      switch (stateImage) {
        case 0:
          stateImage++;
          setImage(stop);
          break;
        case 1:
          stateImage++;
          setImage(leftLeg);
          break;
        case 2:
          stateImage++;
          setImage(stop);
          break;
        case 3:
          stateImage = 0;
          setImage(rightLeg);
          break;
        default:
          setImage(stop);
          break;
      }
    }, 300);
    return interval;
  };

  useEffect(() => {
    const interval = playerWalk();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Tooltip toolTipContent={<img src={searchingTooltip} alt="procurando" />}>
      <img src={image} className="player-image" alt="player" />;
    </Tooltip>
  );
};

export default OnSearching;
