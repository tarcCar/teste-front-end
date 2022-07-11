import React from 'react';

import { useAppSelector } from '@/store/storeHooks';

import OnSearching from './onSearching/OnSearching';
import OnWaiting from './onWaiting/OnWaiting';

type Props = {
  onPlayerClick: () => void;
};
const Player: React.FC<Props> = ({ onPlayerClick }) => {
  const isSearching = useAppSelector((state) => state.player.isSearching);

  if (isSearching) {
    return <OnSearching />;
  }
  return <OnWaiting />;
};

export default Player;
