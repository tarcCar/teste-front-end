import React from 'react';

import Avatar from '@/components/avatar/Avatar';
import { useAppSelector } from '@/store/storeHooks';
import { Pokemon } from '@/types';

type Props = {
  onSelect: (pokemon: Pokemon) => void;
};

const CapturedPokemonSlots: React.FC<Props> = ({ onSelect }) => {
  const capturedPokemons = useAppSelector((state) => state.pokemon.captured);

  const onCapturedPokemonClick = (pokemon: Pokemon) => {
    onSelect(pokemon);
  };

  return (
    <>
      {capturedPokemons.map((capturedPokemon) => (
        <div
          className="sidebar__item"
          title={capturedPokemon.name}
          onClick={() => onCapturedPokemonClick(capturedPokemon)}
        >
          <Avatar src={capturedPokemon.icon} alt={capturedPokemon.name} small />
        </div>
      ))}
    </>
  );
};

export default CapturedPokemonSlots;
