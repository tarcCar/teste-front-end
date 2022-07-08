import React from 'react';

import plusIcon from '@/assets/images/plus.png';

import Button from '../button/Button';
import CapturedPokemonSlots from './capturedPokemonSlots/CapturedPokemonSlots';
import EmptySlots from './emptySlots/EmptySlots';

const Sidebar: React.FC = () => {
  const onAddCustomPokemonClickHandler = () => {
    console.log(`add custom`);
  };

  return (
    <div className="sidebar">
      <CapturedPokemonSlots />

      <EmptySlots />

      <Button
        icon={<img src={plusIcon} alt="+" />}
        onClick={onAddCustomPokemonClickHandler}
      />
    </div>
  );
};

export default Sidebar;
