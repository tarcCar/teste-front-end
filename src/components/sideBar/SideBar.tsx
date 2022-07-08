import React, { useEffect, useState } from 'react';

import plusIcon from '@/assets/images/plus.png';
import { useAppSelector } from '@/store/storeHooks';

import Avatar from '../avatar/Avatar';
import Button from '../button/Button';

const MAX_CAPTURED_POKEMON_QUANTITY = 6;
const Sidebar: React.FC = () => {
  const capturedPokemons = useAppSelector((state) => state.pokemon.captured);
  const [emptySlots, setEmptySlots] = useState<any[]>([]);

  useEffect(() => {
    const emptyQuantity =
      MAX_CAPTURED_POKEMON_QUANTITY - capturedPokemons.length;

    const array: any[] = [];

    for (let i = 0; i < emptyQuantity; i++) {
      array.push(i);
    }

    setEmptySlots(array);
  }, [capturedPokemons]);

  const onAddCustomPokemonClickHandler = () => {
    console.log(`add custom`);
  };

  return (
    <div className="sidebar">
      {capturedPokemons.map((capturedPokemon) => (
        <div className="sidebar__item" title={capturedPokemon.name}>
          <Avatar src={capturedPokemon.icon} alt={capturedPokemon.name} small />
        </div>
      ))}

      {emptySlots.map(() => (
        <div className="sidebar__item">?</div>
      ))}

      <Button
        icon={<img src={plusIcon} alt="+" />}
        onClick={onAddCustomPokemonClickHandler}
      />
    </div>
  );
};

export default Sidebar;
