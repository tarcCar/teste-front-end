import React from 'react';

import Avatar from '@/components/avatar/Avatar';
import { useAppSelector } from '@/store/storeHooks';

const CapturedPokemonSlots: React.FC = () => {
  const capturedPokemons = useAppSelector((state) => state.pokemon.captured);
  return (
    <>
      {capturedPokemons.map((capturedPokemon) => (
        <div className="sidebar__item" title={capturedPokemon.name}>
          <Avatar src={capturedPokemon.icon} alt={capturedPokemon.name} small />
        </div>
      ))}
    </>
  );
};

export default CapturedPokemonSlots;
