import React from 'react';

import playerImage from '@/assets/images/ashFront.png';

type Props = {
  onPlayerClick: () => void;
};
const Player: React.FC<Props> = ({ onPlayerClick }) => {
  return (
    <img
      onClick={onPlayerClick}
      src={playerImage}
      className="player-image"
      alt="player"
    />
  );
};

export default Player;
