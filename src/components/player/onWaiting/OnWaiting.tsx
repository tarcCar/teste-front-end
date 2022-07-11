import React, { useEffect, useState } from 'react';

import playerImage from '@/assets/images/ashFront.png';
import searchTooltip from '@/assets/images/searchTooltip.png';

import Tooltip from '../tooltip/Tooltip';

type Props = {
  onClick: () => void;
};

const OnWaiting: React.FC<Props> = ({ onClick }) => {
  return (
    <Tooltip toolTipContent={<img src={searchTooltip} alt="procurando" />}>
      <img
        src={playerImage}
        className="player-image"
        alt="player"
        onClick={onClick}
      />
    </Tooltip>
  );
};

export default OnWaiting;
