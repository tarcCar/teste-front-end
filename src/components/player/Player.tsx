import React from 'react';
import playerImage from '@/assets/images/ashFront.png'

const Player: React.FC = () => {
  return <img src={playerImage} className="player-image" alt="player" />;
}

export default Player;
