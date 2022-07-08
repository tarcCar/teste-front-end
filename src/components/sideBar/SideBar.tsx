import React from 'react';

import plusIcon from '@/assets/images/plus.png';
import { selectPokemon } from '@/store/slices/PokemonSlice';
import { useAppDispatch } from '@/store/storeHooks';
import { Pokemon } from '@/types';

import Button from '../button/Button';
import CapturedPokemonSlots from './capturedPokemonSlots/CapturedPokemonSlots';
import EmptySlots from './emptySlots/EmptySlots';

type Props = {
  onAddNewPokemonClick: () => void;
};

const Sidebar: React.FC<Props> = ({ onAddNewPokemonClick }) => {
  const dispatch = useAppDispatch();

  const onAddCustomPokemonClickHandler = () => {
    onAddNewPokemonClick();
  };

  const onSelectPokemonHandler = (pokemon: Pokemon) => {
    dispatch(selectPokemon(pokemon));
  };

  return (
    <div className="sidebar">
      <CapturedPokemonSlots onSelect={onSelectPokemonHandler} />

      <EmptySlots />

      <Button
        icon={<img src={plusIcon} alt="+" />}
        onClick={onAddCustomPokemonClickHandler}
      />
    </div>
  );
};

export default Sidebar;
