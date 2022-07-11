import React, { useEffect, useState } from 'react';

import plusIcon from '@/assets/images/plus.png';
import { MAX_CAPTURED_POKEMON_QUANTITY } from '@/constants';
import { selectPokemon } from '@/store/slices/PokemonSlice';
import { useAppDispatch, useAppSelector } from '@/store/storeHooks';
import { Pokemon } from '@/types';

import Button from '../button/Button';
import CapturedPokemonSlots from './capturedPokemonSlots/CapturedPokemonSlots';
import EmptySlots from './emptySlots/EmptySlots';

type Props = {
  onAddNewPokemonClick: () => void;
};

const Sidebar: React.FC<Props> = ({ onAddNewPokemonClick }) => {
  const dispatch = useAppDispatch();
  const capturedPokemons = useAppSelector((state) => state.pokemon.captured);

  const onAddCustomPokemonClickHandler = () => {
    onAddNewPokemonClick();
  };

  const onSelectPokemonHandler = (pokemon: Pokemon) => {
    dispatch(selectPokemon(pokemon));
  };
  const [emptySlots, setEmptySlots] = useState<any[]>([]);

  useEffect(() => {
    const emptyQuantity =
      MAX_CAPTURED_POKEMON_QUANTITY - capturedPokemons.length;

    setEmptySlots(Array.from(Array(emptyQuantity)));
  }, [capturedPokemons]);

  return (
    <div className="sidebar">
      <CapturedPokemonSlots onSelect={onSelectPokemonHandler} />

      <EmptySlots emptySlots={emptySlots} />
      {emptySlots.length > 0 && (
        <Button
          icon={<img src={plusIcon} alt="+" />}
          onClick={onAddCustomPokemonClickHandler}
        />
      )}
    </div>
  );
};

export default Sidebar;
