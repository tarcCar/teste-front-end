import React from 'react';

import { useAppSelector } from '@/store/storeHooks';

import OnError from './onError/OnError';
import OnSearching from './onSearching/OnSearching';
import OnWaiting from './onWaiting/OnWaiting';

type Props = {
  onPlayerClick: () => void;
};
const Player: React.FC<Props> = ({ onPlayerClick }) => {
  const isSearching = useAppSelector((state) => state.player.isSearching);
  const isOnError = useAppSelector((state) => state.player.isOnError);

  if (isSearching) {
    return <OnSearching />;
  }

  if (isOnError) {
    return <OnError />;
  }
  return <OnWaiting onClick={onPlayerClick} />;
};

export default Player;
