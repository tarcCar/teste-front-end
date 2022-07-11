import React from 'react';

import playerImage from '@/assets/images/ashFront.png';
import { useAppSelector } from '@/store/storeHooks';

import OnSearching from './onSearching/OnSearching';

type Props = {
  onPlayerClick: () => void;
};
const Player: React.FC<Props> = ({ onPlayerClick }) => {
  const isSearching = useAppSelector((state) => state.player.isSearching);
  console.log({ isSearching });

  if (isSearching) {
    return <OnSearching />;
  }
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
