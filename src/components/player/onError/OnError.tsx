import React from 'react';

import playerImage from '@/assets/images/ashFront.png';
import tooltipError from '@/assets/images/tooltipError.png';
import { setStatus } from '@/store/slices/PlayerSlice';
import { useAppDispatch } from '@/store/storeHooks';

import Tooltip from '../tooltip/Tooltip';

const OnError: React.FC = () => {
  const dispatch = useAppDispatch();
  const onHideHandler = () => {
    dispatch(setStatus('wait'));
  };
  return (
    <Tooltip
      onHide={onHideHandler}
      toolTipContent={<img src={tooltipError} alt="error" />}
    >
      <img src={playerImage} className="player-image" alt="jogador" />
    </Tooltip>
  );
};

export default OnError;
